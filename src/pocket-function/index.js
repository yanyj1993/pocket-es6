import Common from '../pocket-common';
import _Date from "../pocket-date";

export default class _Function {
    static isFunction(arg) {
        return Common.isType(arg, 'Function')
    }

    /**
     *  将函数进行防抖处理
     * @param {function} func 要进行防抖的函数
     * @param {number} wait 表明多少毫秒内只触发一次
     * @param {boolean} immediate 是否立即执行
     * @description 参考 [https://yuchengkai.cn/docs/zh/frontend/#%E9%98%B2%E6%8A%96] 写法
     */
    static debounce(func, wait = 50, immediate = true) {

        let timer, context, args;

        const later = () => setTimeout(() => {

            timer = null;

            if (!immediate) {
                func.apply(context, args);
                context = args = null;
            }
        }, wait);

        return function (...params) {
            if (!timer) {
                timer = later();
                // 如果是立即执行，调用函数
                // 否则缓存参数和调用上下文
                if (immediate) {
                    func.apply(this, params)
                } else {
                    context = this;
                    args = params
                }
                // 如果已有延迟执行函数（later），调用的时候清除原来的并重新设定一个
                // 这样做延迟函数会重新计时
            } else {
                clearTimeout(timer);
                timer = later();
            }
        }
    }

    /**
     * underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
     *
     * @param  {function}   func      回调函数
     * @param  {number}     wait      表示时间窗口的间隔
     * @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
     *                                如果想忽略结尾函数的调用，传入{trailing: false}
     *                                两者不能共存，否则函数不能执行
     * @return {function}             返回客户调用函数
     */
    static throttle(func, wait, options) {
        let context, args, result;
        let timeout = null;
        // 之前的时间戳
        let previous = 0;
        // 如果 options 没传则设为空对象
        if (!options) options = {};
        // 定时器回调函数
        let later = function() {
            // 如果设置了 leading，就将 previous 设为 0
            // 用于下面函数的第一个 if 判断
            previous = options.leading === false ? 0 : _.now();
            // 置空一是为了防止内存泄漏，二是为了下面的定时器判断
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function() {
            // 获得当前时间戳
            let now = _Date.now();
            // 首次进入前者肯定为 true
            // 如果需要第一次不执行函数
            // 就将上次时间戳设为当前的
            // 这样在接下来计算 remaining 的值时会大于0
            if (!previous && options.leading === false) previous = now;
            // 计算剩余时间
            let remaining = wait - (now - previous);
            context = this;
            args = arguments;
            // 如果当前调用已经大于上次调用时间 + wait
            // 或者用户手动调了时间
            // 如果设置了 trailing，只会进入这个条件
            // 如果没有设置 leading，那么第一次会进入这个条件
            // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
            // 其实还是会进入的，因为定时器的延时
            // 并不是准确的时间，很可能你设置了2秒
            // 但是他需要2.2秒才触发，这时候就会进入这个条件
            if (remaining <= 0 || remaining > wait) {
                // 如果存在定时器就清理掉否则会调用二次回调
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                // 判断是否设置了定时器和 trailing
                // 没有的话就开启一个定时器
                // 并且不能不能同时设置 leading 和 trailing
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };

    /**
     * 函数柯里化
     * @param func
     * @param args
     * @returns {function(): *}
     */
    static curry(func, ...args) {

        return function () {
            return func.apply(void 0, args.concat(Common.argsToArray(arguments)));
        }
    }

    /**
     *  作用域绑定
     * @param func
     * @param bindThisArg
     * @returns {*}
     */
    static bind(func, bindThisArg) {

        // 参数检查
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        if(Function.prototype.bind) {
            return func.bind(bindThisArg);
        }


        // polyfill MDN
        let aArgs   = Array.prototype.slice.call(arguments, 2),
            fToBind = func,
            fNOP    = function() {},
            fBound  = function() {
                // this instanceof fNOP === true时,说明返回的fBound被当做new的构造函数调用
                return fToBind.apply(func instanceof fNOP
                    ? func
                    : bindThisArg,
                    // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        // 维护原型关系
        if (func.prototype) {
            // Function.prototype doesn't have a prototype property
            fNOP.prototype = func.prototype;
        }
        // 下行的代码使fBound.prototype是fNOP的实例,因此
        // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
        fBound.prototype = new fNOP();

        return fBound;

    }

    static exclude() {
        return [

        ]
    }

    static polyfill() {
        const  staticPolyfill = [

        ];


        const prototypePolyfills = [
            'bind',
        ];

        prototypePolyfills.forEach(polyfill => {
            Function.prototype[polyfill] = Function.prototype[polyfill] || function () {
                return _Function[polyfill].apply(void 0, Common.argsToArray(arguments))
            }
        });



        staticPolyfill.forEach(polyfill => {
            Function[polyfill] = Function[polyfill] || function () {
                return _Function[polyfill].apply(void 0, [this].concat(Common.argsToArray(arguments)))
            }
        });

    }
}

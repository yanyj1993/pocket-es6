import Common from '../pocket-common';
import _Object from '../pocket-object';

export default class _Array {
    static isArray(arg) {
        return Common.isType(arg, 'Array')
    }

    /**
     *  将拥有数组结构的对象解析成数组
     * @param arg
     * @returns {*[]}
     */
    static from(arg) {
        return _Array.isArray(arg) ? arg : [].slice.call(arg);
    }

    /**
     *  通过传递的参数生成数组（可以取代Array的构造函数）
     * @returns {*[]}
     */
    static of() {
        return [].slice.call(arguments);
    }

    /**
     *  寻找指定数组的某项
     * @param array
     * @param func
     * @param self
     * @returns {*}
     */
    static find(array, func, self) {
        for(let i =0, length = array.length; i < length; i++) {
            if(func.apply(self, [array[i], i, array])) {
                return array[i];
            }
        }

        return void 0;
    }

    /**
     *  寻找指定数组的某项的下标
     * @param array
     * @param func
     * @param self
     * @returns {*}
     */
    static findIndex(array, func, self) {

        for(let i =0, length = array.length; i < length; i++) {
            if(func.apply(self, [array[i], i, array])) {
                return i;
            }
        }

        return -1;
    }

    /**
     *  指定位置 填充数组
     * @param array
     * @param fillItem
     * @param start
     * @param end
     * @returns {*}
     */
    static fill(array, fillItem, start = 0, end = array.length) {

        for(let i = start; i < end; i++) {
            array[i] = fillItem;
        }

        return array;
    }

    /**
     *  包含数组
     * @param array
     * @param includeItem
     * @param start
     * @param end
     * @returns {boolean}
     */
    static includes(array, includeItem, start = 0, end = array.length) {

        return _Array.findIndex(array.slice(start, end + 1), item => _Object.is(item, includeItem))  !== -1;
    }

    /**
     *  去重
     * @param array
     */
    static distinct(array) {
        let temp = [];
        let index = [];
        let l = array.length;
        for(let i = 0; i < l; i++) {
            for(let j = i + 1; j < l; j++){
                if (array[i] === array[j]){
                    i++;
                    j = i;
                }
            }
            temp.push(array[i]);
            index.push(i);
        }
        return temp;
    }

    /**
     *  将一个数组的项copy到另一个数组中去
     * @param fromArray
     * @param toArray
     * @returns {T[] | string}
     */
    static copy(fromArray, toArray) {
        return toArray.concat(fromArray);
    }


    /**
     *  过滤数组， 返回新数组
     * @param filterArray
     * @param func
     * @param thisArg
     * @returns {*}
     */
    static filter(filterArray, func, thisArg = void 0) {

        // 直接调用原生的方法
        if(Array.prototype.filter) {
            return filterArray.filter(func, thisArg);
        }

        // polyfill MDN 上的写法
        if (this === void 0 || this === null)
            throw new TypeError();

        let t = Object(this);
        let len = t.length >>> 0;
        if (typeof func !== "function")
            throw new TypeError();

        let res = [];
        for (let i = 0; i < len; i++)
        {
            if (i in t)
            {
                let val = t[i];

                // NOTE: Technically this should Object.defineProperty at
                //       the next index, as push can be affected by
                //       properties on Object.prototype and Array.prototype.
                //       But that method's new, and collisions should be
                //       rare, so use the more-compatible alternative.
                if (func.call(thisArg, val, i, t))
                    res.push(val);
            }
        }

        return res;

    }

    /**
     *  求数组并集
     * @param array1
     * @param array2
     * @returns {*}
     */
    static union(array1, array2) {
        // a.concat(b.filter(v => !a.includes(v)))
        return _Array.copy(array1, _Array.filter(array2, (val) => !_Array.includes(array1, val)))
    }

    /**
     *  交集
     * @param array1
     * @param array2
     * @returns {*}
     */
    static intersection(array1, array2) {
        // intersection = a.filter(v => b.includes(v))
        return _Array.filter(array1, v => _Array.includes(array2, v));
    }

    /**
     *  差集
     * @param array1
     * @param array2
     * @returns {*}
     */
    static difference(array1, array2) {
        // difference = a.concat(b).filter(v => a.includes(v) && !b.includes(v))
        return _Array.filter(_Array.copy(array1, array2), v => {
            return _Array.includes(array1, v) && !_Array.includes(array2, v)
        })
    }

    static exclude() {
        return [
            'includes'
        ]
    }

    static polyfill() {
        const staticPolyfill = [
            'from',
            'of',
            'filter',
        ];

        staticPolyfill.forEach(polyfill => {
            Array.prototype[polyfill] = Array.prototype[polyfill] || function () {
                return _Array[polyfill].apply(void 0, Common.argsToArray(arguments))
            }
        });


        const prototypePolyfills = [
            'find',
            'findIndex',
            'fill',
            'includes',
        ];

        prototypePolyfills.forEach(polyfill => {
            Array.prototype[polyfill] = Array.prototype[polyfill] || function () {
                return _Array[polyfill].apply(void 0, [this].concat(Common.argsToArray(arguments)))
            }
        });

    }
}

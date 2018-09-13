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

    copy(fromArray, toArray) {
        return toArray.concat(fromArray);
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
        ];

        staticPolyfill.forEach(polyfill => {
            Array[polyfill] = Array[polyfill] || function () {
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

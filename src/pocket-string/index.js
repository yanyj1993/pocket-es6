import Common from '../pocket-common';
import _Number from '../pocket-number';

export default class _String {
    /**
     *  判断是否是字符串
     * @param arg
     * @returns {*}
     */
    static isString(arg) {
        return Common.isType(arg, 'String');
    }

    static repeat(arg, num) {
        num = ~~Number(num); // 向下取整，该取整方法会使-1到0之间的小数取整到0，这是为了保持与es6的一致
        // 边界判断
        if(_Number.isInfinity(num) || num < 0) {
            throw new RangeError(`${num} 不能是Infinity 或 小于0`)
        }


        let repeatStr = '';

        while (num-- > 0) {
            repeatStr += arg;

        }

        return repeatStr;
    }

    /**
     *
     * @param str
     * @param length
     * @param endStr
     * @returns {*}
     */
    static padStart(str, length, endStr = ' '){

        if(length <= str.length) {
            return str;
        }

        let padStr = _String.repeat(endStr, parseInt(length/endStr.length) + 1);



        return padStr.substr(0, length - str.length) + str;
    }

    /**
     *
     * @param {string} str
     * @param {number}length
     * @param {string || undefined} endStr
     * @returns {*|string}
     */
    static padEnd(str, length, endStr = ' '){


        if(length <= str.length) {
            return str;
        }
        let padStr = str;
        let countLength = length;
        let endLength = endStr.length;
        while(countLength > 0) {
            padStr += endStr;
            countLength -= endLength;
        }


        return padStr.substr(0, length);
    }

    /**
     * 查询字符串是否包含
     * @param str
     * @param searchStr
     * @param startIndex
     */
    static includes(str, searchStr = void 0, startIndex = 0) {
        if(searchStr === void 0) {
            return false;
        }
        return str.substring(startIndex).indexOf(searchStr) !== -1;
    }

    /**
     *  判断字符串是否以某个字符开始
     * @param str
     * @param searchStr
     * @param startIndex
     * @returns {boolean}
     */
    static startWith(str, searchStr = void 0, startIndex = 0) {
        if(searchStr === void 0) {
            return false;
        }
        return str.substring(startIndex).indexOf(searchStr) === 0;
    }

    /**
     *  判断字符串是否以某个字符结束
     * @param str
     * @param searchStr
     * @param length
     * @returns {boolean}
     */
    static endWith(str, searchStr = void 0, length = 0) {
        if(searchStr === void 0) {
            return false;
        }
        let subStr = str.substring(0, length);
        return subStr.indexOf(searchStr) === subStr.length - searchStr.length;
    }


    static exclude() {
        return [
            'includes'
        ]
    }

    // String 的polyfill
    static polyfill() {

        const polyfills = [
            'repeat',
            'padStart',
            'padEnd',
            'startWith',
            'endWith',
            'includes'
        ];

        polyfills.forEach(polyfill => {
           String.prototype[polyfill] = String.prototype[polyfill] || function () {
               return _String[polyfill].apply(void 0, [this.toString()].concat(Common.argsToArray(arguments)))
           }
        });


    }
}

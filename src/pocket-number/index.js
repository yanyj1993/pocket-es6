import Common from '../pocket-common';

export default class _Number {
    static isNumber(arg) {
        return Common.isType(arg, 'Number')
    }

    /**
     *  判断是否是Infinity
     * @param number
     * @returns {boolean}
     */
    static isInfinity(number) {
        return number === Infinity || number === -Infinity;
    }

    /**
     *  判断是否有限的数字
     * @param number
     * @returns {boolean}
     */
    static isFinite(number) {
        return isNaN(number) || number === Infinity || number === -Infinity;
    }

    /**
     *  去除小数部分
     * @param number
     * @returns {number}
     */
    static truncate(number) {

        if(isNaN(Number(number))) {
            return NaN;
        }

        return ~~Number(number);
    }

    // Number 的polyfill
    static polyfill() {

        const polyfills = [
            'isFinite',

        ];

        polyfills.forEach(polyfill => {
            Number.prototype[polyfill] = Number.prototype[polyfill] || function () {
                return _Number[polyfill].apply(void 0, [this.toString()].concat(Common.argsToArray(arguments)))
            }
        });

        const MathPolyfills = [
            'trunc'
        ];

        MathPolyfills.forEach(polyfill => {
            Math[polyfill] = Math[polyfill] || function () {
                return _Number[polyfill].apply(void 0, Common.argsToArray(arguments))
            }
        });



    }
}

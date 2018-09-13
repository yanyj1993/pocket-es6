import Common from '../pocket-common';

export default class _Object {
    static isObject(arg) {
        return Common.isType(arg, 'Object')
    }

    /**
     * MDN 上Object.is 的polyfill
     * @param x
     * @param y
     * @returns {boolean}
     */
    static is(x, y) {
        // SameValue algorithm
        if (x === y) { // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    };


    /**
     *  获取对象值的数组
     * @param obj
     * @returns {Array}
     */
    static values(obj) {
        let values = [];
        Object.keys(obj).forEach(key => { values.push(obj[key]) });

        return values;
    }

    static polyfill() {
        let staticPolyfills = [
            'values'
        ];

        staticPolyfills.forEach(polyfill => {
            Object[polyfill] = Object[polyfill] || function () {
               return _Object.values.apply(void 0, Common.argsToArray(arguments));
            }
        })
    }

}

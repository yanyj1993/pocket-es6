// 通用库
import _String from '../pocket-string';
import _Array from '../pocket-array';

export default class Common {
    // 获取全局对象
    static getGlobalObject() {
        if (global !== null && typeof global !== 'function') {
            return global;  // nodejs
        } else if (window !== null) {
            return window; // browser
        } else if (self !== null) {
            return self; // WebWorkers
        } else {
            return this;
        }
    };

    static isType(arg, type) {
        return Object.prototype.toString.call(arg) === '[object ' + type + ']';
    };


    static argsToArray(args) {
        return Array.prototype.slice.apply(args);
    }

    static includes() {
        let argumentsArray =  _Array.from(arguments);
        let firstArg = argumentsArray[0];

        if(Common.isType(firstArg, 'String')) {
            return _String.includes.apply(void 0, argumentsArray);
        } else if (Common.isType(firstArg, 'Array')) {
            return _Array.includes.apply(void 0, argumentsArray);
        }

    }
};


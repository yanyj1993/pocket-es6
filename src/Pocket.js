// add by yanyj 20180831 start
// 全局的pocket对象
import _Function from './pocket-function';

export default class Pocket {

    // 向全局对象注册pocket
    static registerToGlobal(_global) {
        Pocket.Global = _global;
        Pocket._conflict = _global.pocket;
        _global.pocket = Pocket;
    }

    // 释放冲突的全局对象
    static noConflict() {
        Pocket.Global.pocket =  Pocket._conflict;
        Pocket.Global = null; // 测试
    }

    /**
     * 添加/获取库
     *
     * @param {string} name
     * @param {undefined || {}} library
     * @returns {*}
     */
    static package(name, library = null) {

        if(library !== null) {
            Pocket._libraries[name] = library;
            Pocket.attach(library);
        } else {
            return Pocket._libraries[name];
        }
    }

    static add(name, addItem) {
        Pocket[name] = addItem;
        Pocket._polyfills.push(addItem.polyfill)
    }


    static attach(library) {
        let excludePolyfills = library.exclude ? library.exclude() : [];
        Object.getOwnPropertyNames(library).forEach((key) => {
            if(_Function.isFunction(library[key])) {
                if(key === 'polyfill') {
                    Pocket._polyfills.push(library[key]);
                } else {
                    if(excludePolyfills.indexOf(key) === -1) {
                        Pocket[key] = library[key];
                    }
                }
            }
        })
    }

    // 执行polyfill
    static polyfill() {
        Pocket._polyfills.forEach(polyfill => {polyfill.call(void 0)})
    }
}

Pocket._libraries = {};

Pocket._polyfills = [];
// add by yanyj 20180831 end

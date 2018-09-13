//Map polyfill

import Common from "../pocket-common";
import _Array from "../pocket-array";

export default class Map{
    constructor() {
        this.size = 0;
        this._keys = []; // 保存键
        this._values = []; // 保存值

    }

    /**
     * 添加键值对
     * @param key
     * @param value
     * @returns {Map}
     */
    set(key, value) {

        let index = _Array.findIndex(this._keys, item => Object.is(item, key));
        if(index === -1) {
            this._keys.push(key);
            this._values.push(value);
            this.size++;
        } else {
            this._values[index] = value;
        }

        return this;
    }

    /**
     *  根据健名获取值
     * @param key
     * @returns {*}
     */
    get(key) {
        let index = _Array.findIndex(this._keys, item => Object.is(item, key));

        return this._values[index];
    }

    /**
     *  有没有包含键
     * @param key
     * @returns {boolean}
     */
    has(key) {
        return _Array.findIndex(this._keys, item => Object.is(item, key)) !== -1;
    }

    delete(key) {
        let index = _Array.findIndex(this._keys, item => Object.is(item, key));

        if(index !== -1) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            this.size--;
            return true;
        }

        return false;
    }

    static polyfill() {
        let self = Common.getGlobalObject();
        self.Map = self.Map || Map;
    }
}

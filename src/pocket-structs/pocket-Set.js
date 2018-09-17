import _Array from '../pocket-array';
import _String from '../pocket-string';
import Common from "../pocket-common";


export default class Set {
    constructor(arrayLike) {
        let creator = Creator.create(arrayLike);
        this._data = creator || [];
        this.size = this._data.length;

    }

    /**
     * 添加
     * @param item
     * @returns {Set}
     */
    add(item) {
        if(!_Array.includes(this._data, item)) {
            this._data.push(item);
            this.size++;
        }

        return this;
    }

    /**
     *  删除
     * @param item
     * @returns {boolean}
     */
    delete(item) {

        try {
            let index = _Array.findIndex(this._data, (i) => Object.is(i, item));

            if(index !== -1) {

                this._data.splice(index, 1);
                this.size--;

            } else {
                return false
            }
        }catch (e) {
            return false;
        }

    }

    /**
     *  是否有
     * @param item
     * @returns {boolean}
     */
    has(item) {

        return _Array.findIndex( this._data, (i) => Object.is(i, item)) !== -1;
    }

    clear() {
        this._data = [];
        this.size = 0;
    }

    toArray() {
        return _Array.from(this._data);
    }


    keys() {
        return this.toArray();
    }

    values() {
        return this.toArray();
    }

    entries() {

        let _entries = [];

        this.toArray().forEach(item => {
            _entries.push([item, item])
        });

        return _entries;

        return
    }

    forEach(func, self) {

        this.toArray().forEach(func.bind(self));
    }

    // 重写toString方法
    toString() {
        let Map = `Set {`;
        this._data.forEach(item => { Map += ` ${item},`});

        return Map.substring(0, Map.length - 1) + ' }';
    }

    static polyfill() {
        let self = Common.getGlobalObject();
        self.Set = self.Set || Set;
    }
}


class Creator {

    static create(arrayLike) {
        if(_Array.isArray(arrayLike)) {
            return Creator._createByArray(arrayLike);
        } else if(_String.isString(arrayLike)) {
            return Creator._createByArray(arrayLike.split(''));
        } else {
            throw new TypeError('无法生成Set')
        }
    }

    static _createByArray(array) {
        return _Array.distinct(array);
    }
}

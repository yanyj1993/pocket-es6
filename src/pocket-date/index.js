import Common from '../pocket-common';

export default class _Date {
    static isDate(arg) {
        return Common.isType(arg, 'Date')
    }

    /**
     *   获取当前时间戳
     * @returns {number}
     */
    static now() {
        return +new Date();
    }
}

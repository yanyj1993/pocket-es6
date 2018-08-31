import Common from '../pocket-common';

export default class _Object {
    static isObject(arg) {
        return Common.is(arg, 'Object')
    }
}

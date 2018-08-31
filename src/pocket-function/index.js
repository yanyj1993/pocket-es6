import Common from '../pocket-common';

export default class _Function {
    static isFunction(arg) {
        return Common.is(arg, 'function')
    }
}

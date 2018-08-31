import Common from '../pocket-common';

export default class _Array {
    static isArray(arg) {
        return Common.is(arg, 'Array')
    }
}

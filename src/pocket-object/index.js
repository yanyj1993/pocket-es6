import Common from '../pocket-common';

export default class _Number {
    static isNumber(arg) {
        return Common.is(arg, 'Number')
    }
}

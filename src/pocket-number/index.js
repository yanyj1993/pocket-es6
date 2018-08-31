import Common from '../pocket-common';

export default class _Date {
    static isArray(arg) {
        return Common.is(arg, 'Date')
    }
}

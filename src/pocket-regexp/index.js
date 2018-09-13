import Common from '../pocket-common';

export default class _RegExp {
    static isRegExp(arg) {
        return Common.isType(arg, 'RegExp')
    }
}

import _String from '../pocket-string';

export default class Dom {

    /**
     *  将字符串转换为dom
     * @param arg
     * @returns {*}
     */
    static parse2HtmlElement(arg) {
        if(arg instanceof HTMLElement) {
           return arg;
        } else if (_String.isString(arg)) {
            let objE = document.createElement("div");
            objE.innerHTML = arg;
            return objE.children;
        } else {
            throw new TypeError(`${arg} 参数非法`);
        }
    }

}

import Common from "../pocket-common";
import _Object from "../pocket-object";

export default class Url {
    /**
     * 获取url的param对象
     * @param url
     */
    static getUrlParams(url = Common.getGlobalObject().location.search) {
        const urlParams = {};
        if(url) {
            let split = decodeURI(url).split('?');

            split[split.length - 1].split('&').forEach(param => {
                const arr = param.split('=');
                urlParams[arr[0]] = arr[1] || '';
            })
        }

        return urlParams;
    }

    /**
     * 拼接url的参数
     * @param {string} url
     * @param {object} params
     * @returns {string}
     */
    static spliceUrlParams(url, params = {}, encode = false) {

        if(url.indexOf('?') !== -1) {
            if(url.indexOf('?') !== url.length -1) {
                url += '&'
            }
        } else {
            url += '?';
        }

        _Object.keys(params).forEach(key => {
            url += `${key}=${params[key]}&`;
        });

        url = url.slice(0, url.length - 1);
        return encode ? encodeURI(url) : url;
    }
}

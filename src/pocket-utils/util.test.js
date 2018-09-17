//util的测试
import Url from "./url";
import _Object from "../pocket-object";

describe('[Url.getUrlParams] url的边界测试', function () {
    test('url === ""', () => {
        expect(Url.getUrlParams('')).toEqual({});
    });


    test('url normal', () => {
        expect(Url.getUrlParams('http://www.da.com/ad?a=1').a).toBe('1');
    });

    test('more urlParams', () => {
        expect(Object.keys(Url.getUrlParams('http://www.da.com/ad?a=1&b=2')).length).toBe(2)
    });

    test('chinese urlParams', () => {
        expect(Object.keys(Url.getUrlParams('http://www.da.com/ad?张三=1&b=2'))[0]).toBe('张三')
    });
});

describe('[Url.spliceUrlParams]', function () {
    let url = 'http://a.b.c';

    test('no ? tag with null params', function () {
        expect(Url.spliceUrlParams(url)).toBe(url);
    });

    test('no ? tag and params', () => {
        expect(Url.spliceUrlParams(url, {a:1})).toBe(url + '?a=1')
    });

    test('? tag and params', () => {
        expect(Url.spliceUrlParams(url + '?n=1', {a:1})).toBe(url +  '?n=1' + '&a=1')
    });

    test('', () => {});
});

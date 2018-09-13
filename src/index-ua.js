/*
   初始
*/
import Pocket from './Pocket';
import Common from './pocket-common'
import _Function from './pocket-function'
import _String from './pocket-string'
import _Array from './pocket-array'
import _Date from './pocket-date'
import _Number from './pocket-number'
import _Object from './pocket-object'
import _RegExp from './pocket-regexp'

import Set from './pocket-structs/pocket-Set';
import Map from './pocket-structs/pocket-Map';


(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.

        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.pocket = factory();
    }
}(Common.getGlobalObject(), function () {

// 注册库

// common
    Pocket.package('common', Common);

//function
    Pocket.package('function', _Function);

//string
    Pocket.package('string', _String);

//array
    Pocket.package('array', _Array);

//date
    Pocket.package('date', _Date);

//number
    Pocket.package('number', _Number);

//object
    Pocket.package('object', _Object);

//regexp
    Pocket.package('regexp', _RegExp);

//Set
    Pocket.add('Set', Set);

//Map
    Pocket.add('Map', Map);

    return Pocket;

}));

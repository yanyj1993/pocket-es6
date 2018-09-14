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
import _Dom from './pocket-dom'

import Set from './pocket-structs/pocket-Set';
import Map from './pocket-structs/pocket-Map';
import Coordinate from "./pocket-utils/coordinate";






// 全局注册
Common.getGlobalObject().pocket = Pocket;

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

//Dom
Pocket.package('Dom', _Dom);

/*utils*/
// 坐标转换的封装方法
Pocket.package('Coordinate', Coordinate);

//Set
Pocket.add('Set', Set);

//Map
Pocket.add('Map', Map);



export default Pocket;

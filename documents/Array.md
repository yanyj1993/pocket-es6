# Pocket-Array
[返回](https://github.com/yanyj1993/pocket-es6)<br>
[查看源码](../src/pocket-array/index.js)
## methods:

* `isArray(arg) [Boolean]`: 判断是否是数组类型
* `from(arg) [Array]`: 将拥有数组结构的对象解析成数组
* `of() [Array]`: 将`arguments`转换为数组,可用来取代`new Array()`
* `find(array, func, self) [Object||undefined]`: 返回`array`中符合`func`条件的第一项， 若没有匹配项则返回`undefined`
* `findIndex(array, func, self) [Number]`: 返回`array`中符合`func`条件的第一项的下标， 若没有匹配项则返回`-1`
* `fill(array, fillItem, start = 0, end = array.length) [Array]` : 从指定位置填充数组
* `includes(array, includeItem, start = 0, end = array.length) [Boolean]` : 从数组指定位置查找是否包含指定项
* `copy(fromArray, toArray) [Array]` : 将`fromArray`中的项拷贝到`toArray`中
* `filter(filterArray, func, thisArg = void 0) [Array]` : 过滤数组
* `union(array1, array2) [Array]` : 求数组并集
* `intersection(array1, array2) [Array]` : 求数组交集
* `difference(array1, array2) [Array]` : 求数组差集

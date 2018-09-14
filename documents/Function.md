# Pocket-Function
[返回](https://github.com/yanyj1993/pocket-es6)<br>
[查看源码](../src/pocket-function/index.js)

## methods:

* `debounce(func, wait = 50, immediate = true) [Function]`: 防抖
    * `[Function] func`: 返回要处理的防抖函数
    * `[Number] wait`: 表明多少毫秒内只触发一次， 默认`50`
    * `[Boolean] immediate`: 是否会立即执行
* `throttle(func, wait, options) [Function]`: 节流函数
    * `[Function] func`: 返回要处理节流的函数
    * `[Number] wait`: 表示时间窗口的间隔
    * `[Object] options`: options   如果想忽略开始函数的的调用，传入{leading: false}。如果想忽略结尾函数的调用，传入{trailing: false},两者不能共存，否则函数不能执行

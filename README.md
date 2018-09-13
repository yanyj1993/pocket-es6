# pocket-es6
用es6方法重新写pocket个人库

## pocket的js 打包文件介绍
* pocket.js: 直接引用，通过`window.pocket`访问
* pocket-ua.js: 通过umd, amd 的方式访问， 例如：
```
    --dojo.js

    var dojoConfig = {
        packages: [
            {
                name: 'pocket',
                loaction: '' // pocket-ua.js的文件夹地址
            }
        ]
    }

    require('pocket/pocket-ua', function(pocket) {
            // 使用
    })

```
**若页面环境没有amd, umd 的访问机制， 也可以通过`window.pocket`访问**
## pocket的js库介绍
* [Common](./documents/Common.md) : 封装了一些通用的方法
* [Array](./documents/Array.md) :  基于数组的一些常用方法的封装和polyfill
* [Date](./documents/Date.md) : 基于日期的一些常用方法的封装和polyfill
* [Function](./documents/Function.md) : 基于方法的一些常用方法的封装和polyfill
* [Number](./documents/Number.md) : 基于Number的一些常用方法的封装和polyfill
* [Object](./documents/Object.md) : 基于Object的一些常用方法的封装和polyfill
* [Regexp](./documents/Regexp.md) : 基与正则表达式的一些常用方法的封装和polyfill
* [String](./documents/String.md) : 基于字符串的一些常用方法的封装和polyfill
* [Struts](./documents/Struts.md) : 基于一些常用结构的一些常用方法的封装和polyfill

## pocket 的自带方法的说明

* `registerToGlobal(global)`: 该方法用来向指定对象上添加pocket的属性，一般用来向全局变量上添加pocket的访问：
   ```
        pocket.registerToGlobal(window); // 浏览器环境
        pocket.registerToGlobal(global); // node环境
        pocket.registerToGlobal(self); // worker环境
   ```
* `noConflict()` : 还原之前覆盖的属性
* `package(name, library = null)`: 将获取或者添加已有的库（添加时该库的所有静态方法和属性都会被附加到pocket上，注意方法的命名冲突）
* `polyfill()`: 会依次执行各个库的polyfill的方法，注意，该方法需要手动执行

## pocket-library 写法：
* es6:
```javascript
    Class LibraryName {

        static methodName() {

        }

        // 需要执行的polyfill方法
        polyfill() {

        }
    }

```

* es5:
```javascript
    var libray = function() {};

    library.staticMethodName = function() {
    }

    library.polyfill = function() {


    }

```

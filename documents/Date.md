# Pocket-Date
[返回](https://github.com/yanyj1993/pocket-es6)<br>
[查看源码](../src/pocket-dom/index.js)
## methods:

* `isDate(arg) [Boolean]`: 判断对象类型是否是Date
* `now() [Number]`: 获取当前时间戳
* `parse2Date(dateStr, format) [Date]`: 将指定格式的日期字符串转换为Date
* `date(date, format) [Moment]`: 将日期或者日期字符串转换成封装的Moment对象
    * `Moment`: 用来封装一些日期计算的对象
        * `constructor(date, format) []`:  构造函数, 将日期或者日期字符串转换成封装的Moment对象
        * `format(formatStr) [String]`:  将日期转换成指定格式的
        * `date() [Date]`:  返回内置的Date对象
        * `elapse(type, numbers) [Moment]`:  将Date推移指定的时间
            * *`type[String]`*:表示要移动的时间类型，具体表示如下：
                * `年`: `y` 或者 `years`
                * `月`: `M` 或者 `months`
                * `日`: `d` 或者 `days`
                * `时`: `H` 或者 `hours`
                * `分`: `m` 或者 `minutes`
                * `秒`: `s` 或者 `seconds`
            * *`numbers[Number]`*: 表示要移动的时间段，正数为加， 负数为减

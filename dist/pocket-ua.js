!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=16)}([function(n,t,e){"use strict";(function(n){e.d(t,"a",function(){return c});var r=e(1),i=e.n(r),u=e(2),o=e.n(u),a=e(5),l=e(3),c=function(){function t(){i()(this,t)}return o()(t,null,[{key:"getGlobalObject",value:function(){return null!==n&&"function"!=typeof n?n:null!==window?window:null!==self?self:this}},{key:"isType",value:function(n,t){return Object.prototype.toString.call(n)==="[object "+t+"]"}},{key:"argsToArray",value:function(n){return Array.prototype.slice.apply(n)}},{key:"includes",value:function(){var n=l.a.from(arguments),e=n[0];return t.isType(e,"String")?a.a.includesStr.apply(void 0,n):t.isType(e,"Array")?l.a.includesArray.apply(void 0,n):void 0}}]),t}()}).call(this,e(13))},function(n,t){n.exports=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},function(n,t){function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}n.exports=function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}},function(n,t,e){"use strict";e.d(t,"a",function(){return c});var r=e(1),i=e.n(r),u=e(2),o=e.n(u),a=e(0),l=e(8),c=function(){function n(){i()(this,n)}return o()(n,[{key:"copy",value:function(n,t){return t.concat(n)}}],[{key:"isArray",value:function(n){return a.a.isType(n,"Array")}},{key:"from",value:function(t){return n.isArray(t)?t:[].slice.call(t)}},{key:"of",value:function(){return[].slice.call(arguments)}},{key:"find",value:function(n,t,e){for(var r=0,i=n.length;r<i;r++)if(t.apply(e,[n[r],r,n]))return n[r]}},{key:"findIndex",value:function(n,t,e){for(var r=0,i=n.length;r<i;r++)if(t.apply(e,[n[r],r,n]))return r;return-1}},{key:"fill",value:function(n,t){for(var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length,i=e;i<r;i++)n[i]=t;return n}},{key:"includesArray",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length;return-1!==n.findIndex(t.slice(r,i+1),function(n){return l.a.is(n,e)})}},{key:"distinct",value:function(n){for(var t=[],e=[],r=n.length,i=0;i<r;i++){for(var u=i+1;u<r;u++)n[i]===n[u]&&(u=++i);t.push(n[i]),e.push(i)}return t}},{key:"excludePolyfill",value:function(){return["includes"]}},{key:"polyfill",value:function(){["from","of"].forEach(function(t){Array[t]=Array[t]||function(){return n[t].apply(void 0,a.a.argsToArray(arguments))}});["find","findIndex","fill","includes"].forEach(function(t){Array.prototype[t]=Array.prototype[t]||function(){return n[t].apply(void 0,[this].concat(a.a.argsToArray(arguments)))}})}}]),n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var r=e(1),i=e.n(r),u=e(2),o=e.n(u),a=e(6),l=function(){function n(){i()(this,n)}return o()(n,null,[{key:"registerToGlobal",value:function(t){n.Global=t,n._conflict=t.pocket,t.pocket=n}},{key:"noConflict",value:function(){n.Global.pocket=n._conflict,n.Global=null}},{key:"package",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===e)return n._libraries[t];n._libraries[t]=e,n.attach(e)}},{key:"add",value:function(t,e){n[t]=e,n._polyfills.push(e.polyfill)}},{key:"attach",value:function(t){var e=t.excludePolyfill?t.excludePolyfill():[];Object.getOwnPropertyNames(t).forEach(function(r){a.a.isFunction(t[r])&&("polyfill"===r?n._polyfills.push(t[r]):-1===e.indexOf(r)&&(n[r]=t[r]))})}},{key:"polyfill",value:function(){n._polyfills.forEach(function(n){n.call(void 0)})}}]),n}();l._libraries={},l._polyfills=[]},function(n,t,e){"use strict";e.d(t,"a",function(){return c});var r=e(1),i=e.n(r),u=e(2),o=e.n(u),a=e(0),l=e(7),c=function(){function n(){i()(this,n)}return o()(n,null,[{key:"isString",value:function(n){return a.a.isType(n,"String")}},{key:"repeat",value:function(n,t){if(t=~~Number(t),l.a.isInfinity(t)||t<0)throw new RangeError("".concat(t," 不能是Infinity 或 小于0"));for(var e="";t-- >0;)e+=n;return e}},{key:"padStart",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" ";return e<=t.length?t:n.repeat(r,parseInt(e/r.length)+1).substr(0,e-t.length)+t}},{key:"padEnd",value:function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" ";if(t<=n.length)return n;for(var r=n,i=t,u=e.length;i>0;)r+=e,i-=u;return r.substr(0,t)}},{key:"includesStr",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return void 0!==t&&-1!==n.substring(e).indexOf(t)}},{key:"startWith",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return void 0!==t&&0===n.substring(e).indexOf(t)}},{key:"endWith",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(void 0===t)return!1;var r=n.substring(0,e);return r.indexOf(t)===r.length-t.length}},{key:"excludePolyfill",value:function(){return["includes"]}},{key:"polyfill",value:function(){["repeat","padStart","padEnd","startWith","endWith"].forEach(function(t){String.prototype[t]=String.prototype[t]||function(){return n[t].apply(void 0,[this.toString()].concat(a.a.argsToArray(arguments)))}})}}]),n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return c});var r=e(1),i=e.n(r),u=e(2),o=e.n(u),a=e(0),l=e(9),c=function(){function n(){i()(this,n)}return o()(n,[{key:"debounce",value:function(n){var t,e,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,u=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=function(){return setTimeout(function(){t=null,u||(n.apply(e,r),e=r=null)},i)};return function(){if(t)clearTimeout(t),t=o();else{t=o();for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];u?n.apply(this,a):(e=this,r=a)}}}},{key:"throttle",value:function(n,t,e){var r,i,u,o=null,a=0;e||(e={});var c=function(){a=!1===e.leading?0:_.now(),o=null,u=n.apply(r,i),o||(r=i=null)};return function(){var f=l.a.now();a||!1!==e.leading||(a=f);var s=t-(f-a);return r=this,i=arguments,s<=0||s>t?(o&&(clearTimeout(o),o=null),a=f,u=n.apply(r,i),o||(r=i=null)):o||!1===e.trailing||(o=setTimeout(c,s)),u}}}],[{key:"isFunction",value:function(n){return a.a.isType(n,"Function")}}]),n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var r=e(1),i=e.n(r),u=e(2),o=e.n(u),a=e(0),l=function(){function n(){i()(this,n)}return o()(n,null,[{key:"isNumber",value:function(n){return a.a.isType(n,"Number")}},{key:"isInfinity",value:function(n){return n===1/0}},{key:"isFinite",value:function(n){return isNaN(n)||n===1/0||n===-1/0}},{key:"trunc",value:function(n){return isNaN(Number(n))?NaN:~~Number(n)}},{key:"polyfill",value:function(){["isFinite"].forEach(function(t){Number.prototype[t]=Number.prototype[t]||function(){return n[t].apply(void 0,[this.toString()].concat(a.a.argsToArray(arguments)))}});["trunc"].forEach(function(t){Math[t]=Math[t]||function(){return n[t].apply(void 0,a.a.argsToArray(arguments))}})}}]),n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var r=e(1),i=e.n(r),u=e(2),o=e.n(u),a=e(0),l=function(){function n(){i()(this,n)}return o()(n,null,[{key:"isObject",value:function(n){return a.a.isType(n,"Object")}},{key:"is",value:function(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}},{key:"values",value:function(n){var t=[];return Object.keys(n).forEach(function(e){t.push(n[e])}),t}},{key:"polyfill",value:function(){["values"].forEach(function(t){Object[t]=Object[t]||function(){return n.values.apply(void 0,a.a.argsToArray(arguments))}})}}]),n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var r=e(1),i=e.n(r),u=e(2),o=e.n(u),a=e(0),l=function(){function n(){i()(this,n)}return o()(n,null,[{key:"isDate",value:function(n){return a.a.isType(n,"Date")}},{key:"now",value:function(){return+new Date}}]),n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var r=e(1),i=e.n(r),u=e(2),o=e.n(u),a=e(0),l=function(){function n(){i()(this,n)}return o()(n,null,[{key:"isRegExp",value:function(n){return a.a.isType(n,"RegExp")}}]),n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return f});var r=e(1),i=e.n(r),u=e(2),o=e.n(u),a=e(3),l=e(5),c=e(0),f=function(){function n(t){i()(this,n);var e=s.create(t);this._data=e||[],this.size=this._data.length}return o()(n,[{key:"add",value:function(n){return a.a.includesArray(this._data,n)||(this._data.push(n),this.size++),this}},{key:"delete",value:function(n){try{var t=a.a.findIndex(this._data,function(t){return Object.is(t,n)});if(-1===t)return!1;this._data.splice(t,1),this.size--}catch(n){return!1}}},{key:"has",value:function(n){return-1!==a.a.findIndex(this._data,function(t){return Object.is(t,n)})}},{key:"clear",value:function(){this._data=[],this.size=0}},{key:"toArray",value:function(){return a.a.from(this._data)}},{key:"keys",value:function(){return this.toArray()}},{key:"values",value:function(){return this.toArray()}},{key:"entries",value:function(){var n=[];return this.toArray().forEach(function(t){n.push([t,t])}),n}},{key:"forEach",value:function(n,t){this.toArray().forEach(n.bind(t))}},{key:"toString",value:function(){var n="Set {";return this._data.forEach(function(t){n+=" ".concat(t,",")}),n.substring(0,n.length-1)+" }"}}],[{key:"polyfill",value:function(){var t=c.a.getGlobalObject();t.Set=t.Set||n}}]),n}(),s=function(){function n(){i()(this,n)}return o()(n,null,[{key:"create",value:function(t){if(a.a.isArray(t))return n._createByArray(t);if(l.a.isString(t))return n._createByArray(t.split(""));throw new TypeError("无法生成Set")}},{key:"_createByArray",value:function(n){return a.a.distinct(n)}}]),n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return c});var r=e(1),i=e.n(r),u=e(2),o=e.n(u),a=e(0),l=e(3),c=function(){function n(){i()(this,n),this.size=0,this._keys=[],this._values=[]}return o()(n,[{key:"set",value:function(n,t){var e=l.a.findIndex(this._keys,function(t){return Object.is(t,n)});return-1===e?(this._keys.push(n),this._values.push(t),this.size++):this._values[e]=t,this}},{key:"get",value:function(n){var t=l.a.findIndex(this._keys,function(t){return Object.is(t,n)});return this._values[t]}},{key:"has",value:function(n){return-1!==l.a.findIndex(this._keys,function(t){return Object.is(t,n)})}},{key:"delete",value:function(n){var t=l.a.findIndex(this._keys,function(t){return Object.is(t,n)});return-1!==t&&(this._keys.splice(t,1),this._values.splice(t,1),this.size--,!0)}}],[{key:"polyfill",value:function(){var t=a.a.getGlobalObject();t.Map=t.Map||n}}]),n}()},function(n,t){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(t){return"function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?n.exports=r=function(n){return e(n)}:n.exports=r=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":e(n)},r(t)}n.exports=r},,function(n,t,e){"use strict";e.r(t),function(n){var t=e(14),r=e.n(t),i=e(4),u=e(0),o=e(6),a=e(5),l=e(3),c=e(9),f=e(7),s=e(8),y=e(10),p=e(11),v=e(12);!function(t,i){"function"==typeof define&&e(18)?define([],i):"object"===r()(n)&&n.exports?n.exports=i():t.pocket=i()}(u.a.getGlobalObject(),function(){return i.a.package("common",u.a),i.a.package("function",o.a),i.a.package("string",a.a),i.a.package("array",l.a),i.a.package("date",c.a),i.a.package("number",f.a),i.a.package("object",s.a),i.a.package("regexp",y.a),i.a.add("Set",p.a),i.a.add("Map",v.a),i.a})}.call(this,e(17)(n))},function(n,t){n.exports=function(n){if(!n.webpackPolyfill){var t=Object.create(n);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(n,t){(function(t){n.exports=t}).call(this,{})}]);
//# sourceMappingURL=pocket-ua.js.map
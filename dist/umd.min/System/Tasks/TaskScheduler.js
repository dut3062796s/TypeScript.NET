/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based on code from: https://github.com/kriskowal/q
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Types","../Collections/LinkedList","../Collections/Queue"],e)}(function(e,t){"use strict";function n(){for(var e;e=l.first;){var t=e.value,n=t.domain;e.remove(),n&&n.enter(),o(t.task,n)}for(var i;i=m.dequeue();)o(i);d=!1}function o(e,t){try{e()}catch(o){if(a)throw t&&t.exit(),setTimeout(n,0),t&&t.enter(),o;setTimeout(function(){throw o},0)}t&&t.exit()}function i(){d||(d=!0,u())}var u,r,s=e("../Types"),f=e("../Collections/LinkedList"),c=e("../Collections/Queue"),a=!1,d=!1,l=new f["default"],m=new c["default"];if(function(e){function t(e,t){if(s["default"].isNumber(t,!1)&&t>=0){var n=0,o=function(){return n?(clearTimeout(n),n=0,!0):!1};return n=setTimeout(function(){o(),e()},t),o}var u={task:e,domain:a&&process.domain};return l.add(u),i(),function(){return!!l.remove(u)}}function n(e){m.enqueue(e),i()}e.defer=t,e.runAfterDeferred=n}(r||(r={})),s["default"].isObject(process)&&"[object process]"===process.toString()&&process.nextTick)a=!0,u=function(){process.nextTick(n)};else if("function"==typeof setImmediate)u="undefined"!=typeof window?setImmediate.bind(window,n):function(){setImmediate(n)};else if("undefined"!=typeof MessageChannel){var p=new MessageChannel;p.port1.onmessage=function(){u=v,p.port1.onmessage=n,n()};var v=function(){p.port2.postMessage(0)};u=function(){setTimeout(n,0),v()}}else u=function(){setTimeout(n,0)};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r});
//# sourceMappingURL=TaskScheduler.js.map
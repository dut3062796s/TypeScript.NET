/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(t,r){function e(){this.constructor=t}for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n]);t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)};define(["require","exports","../../Compare","./DictionaryAbstractBase"],function(t,r,e,n){"use strict";var o=function(t){function r(){t.apply(this,arguments),this._count=0,this._map={}}return __extends(r,t),r.prototype.containsKey=function(t){return t in this._map},r.prototype.containsValue=function(t){var r=this._map,n=e.areEqual;for(var o in r)if(r.hasOwnProperty(o)&&n(r[o],t))return!0;return!1},r.prototype.getValue=function(t){return this._map[t]},r.prototype.setValue=function(t,r){var e=this,n=e._map,o=n[t];return o!==r?(void 0===r?t in n&&(delete n[t],--e._count):(t in n||++e._count,n[t]=r),e._onValueUpdate(t,r,o),!0):!1},r.prototype.importMap=function(t){var r=this;return r.handleUpdate(function(){var e=!1;for(var n in t)t.hasOwnProperty(n)&&r.setValue(n,t[n])&&(e=!0);return e})},r.prototype.toMap=function(t){var r=this,e={};for(var n in r._map)if(r._map.hasOwnProperty(n)){var o=r._map[n];t&&(o=t(n,o)),void 0!==o&&(e[n]=o)}return e},Object.defineProperty(r.prototype,"keys",{get:function(){var t=this,r=[];for(var e in t._map)t._map.hasOwnProperty(e)&&r.push(e);return r},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"values",{get:function(){var t=this,r=[];for(var e in t._map)t._map.hasOwnProperty(e)&&r.push(t._map[e]);return r},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"count",{get:function(){return this._count},enumerable:!0,configurable:!0}),r}(n);return o});
//# sourceMappingURL=StringKeyDictionary.js.map

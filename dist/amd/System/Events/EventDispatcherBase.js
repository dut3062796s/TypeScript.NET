/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../Collections/Array/Utility","../Utility/shallowCopy","../Disposable/DisposableBase","../Disposable/dispose","./EventDispatcherEntry","../../extends"],function(e,t,i,r,n,s,o,a){"use strict";function p(){var e=this.params;e.dispatcher.removeEntry(this),e.dispatcher=null}var c=a["default"],u="disposing",l="disposed",h="EventDispatcherBase",f=function(e){function t(){e.call(this),this._isDisposing=!1,this._disposableObjectName=h}return c(t,e),t.prototype.addEventListener=function(e,t,i){void 0===i&&(i=0);var r=this._entries;r||(this._entries=r=[]),r.push(new o.EventDispatcherEntry(e,t,{priority:i||0,dispatcher:this},p))},t.prototype.removeEntry=function(e){return!!this._entries&&0!=i.remove(this._entries,e)},t.prototype.registerEventListener=function(e,t,i){void 0===i&&(i=0),this.hasEventListener(e,t)||this.addEventListener(e,t,i)},t.prototype.hasEventListener=function(e,t){var i=this._entries;return i&&i.some(function(i){return e==i.type&&(!t||t==i.listener)})},t.prototype.removeEventListener=function(e,t){s.dispose.these(this._entries.filter(function(i){return i.matches(e,t)}))},t.prototype.dispatchEvent=function(e,t){var i=this,n=this,s=n._entries;if(!s||!s.length)return!1;var o;"string"==typeof e?(o=Event&&Object.create(Event)||{},t||(t={}),t.cancellable&&(o.cancellable=!0),o.target=n,o.type=e):o=e;var a=o.type,p=s.filter(function(e){return e.type==a});return!!p.length&&(p.sort(function(e,t){return(t.params?t.params.priority:0)-(e.params?e.params.priority:0)}),p.forEach(function(e){var t=Object.create(Event);r.shallowCopy(o,t),t.target=i,e.dispatch(t)}),!0)},Object.defineProperty(t,"DISPOSING",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(t,"DISPOSED",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDisposing",{get:function(){return this._isDisposing},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){var t=this;if(!t.wasDisposed&&!t._isDisposing){t._isDisposing=!0,t.dispatchEvent(u),e.prototype.dispose.call(this),t.dispatchEvent(l);var i=t._entries;i&&(this._entries=null,i.forEach(function(e){return e.dispose()}))}},t}(n.DisposableBase);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=f});
//# sourceMappingURL=EventDispatcherBase.js.map
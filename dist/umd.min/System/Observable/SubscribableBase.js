/*!
 * @author electricessence / https://github.com/electricessence/
 * Based upon .NET source.
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Source: http://referencesource.microsoft.com/#mscorlib/system/IObserver.cs
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var s=e(require,exports);void 0!==s&&(module.exports=s)}else"function"==typeof define&&define.amd&&define(["require","exports","../Collections/LinkedNodeList","../Disposable/dispose","./Subscription","../Disposable/DisposableBase","../../extends"],e)}(function(e,s){"use strict";var i=e("../Collections/LinkedNodeList"),t=e("../Disposable/dispose"),o=e("./Subscription"),r=e("../Disposable/DisposableBase"),n=e("../../extends"),u=n["default"],p="SubscribableBase",l=function(e){function s(){e.call(this),this._disposableObjectName=p}return u(s,e),s.prototype._getSubscribers=function(){var e=this.__subscriptions;return e?e.map(function(e){return e&&e.value&&e.value.subscriber}):null},s.prototype._findEntryNode=function(e){var s=this.__subscriptions;return s&&s.find(function(s){return!!s.value&&s.value.subscriber===e})},s.prototype.subscribe=function(e){var s=this;s.throwIfDisposed();var t=s._findEntryNode(e);if(t)return t.value;var r=s.__subscriptions;r||(s.__subscriptions=r=new i.LinkedNodeList);var n=new o.Subscription(s,e);return r.addNode({value:n}),n},s.prototype.unsubscribe=function(e){var s=this,i=s._findEntryNode(e);if(i){var t=i.value;s.__subscriptions.removeNode(i),t&&t.dispose()}},s.prototype._unsubscribeAll=function(e){void 0===e&&(e=!1);var s=this,i=s.__subscriptions;if(!i)return null;var o=i.map(function(e){return e.value}),r=e?o.map(function(e){return e.subscriber}):null;return i.clear(),t.dispose.these(o),r},s.prototype.unsubscribeAll=function(){this._unsubscribeAll()},s.prototype._onDispose=function(){e.prototype._onDispose.call(this),this._unsubscribeAll();var s=this.__subscriptions;this.__subscriptions=null,t.dispose(s)},s}(r.DisposableBase);s.SubscribableBase=l,Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=l});
//# sourceMappingURL=SubscribableBase.js.map
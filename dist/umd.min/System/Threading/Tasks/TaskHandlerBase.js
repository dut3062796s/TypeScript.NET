/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports","../../Disposable/DisposableBase","../../../extends"],t)}(function(t,e){"use strict";var s=t("../../Disposable/DisposableBase"),o=t("../../../extends"),i=o["default"],n="TaskHandlerBase",u=function(t){function e(){t.call(this),this._disposableObjectName=n,this._timeoutId=null,this._status=0}return i(e,t),Object.defineProperty(e.prototype,"isScheduled",{get:function(){return!!this._timeoutId},enumerable:!0,configurable:!0}),e.prototype.start=function(t){this.throwIfDisposed(),this.cancel(),this._status=1,t>0||(t=0),isFinite(t)&&(this._timeoutId=setTimeout(e._handler,t,this))},e.prototype.runSynchronously=function(){this.throwIfDisposed(),e._handler(this)},e.prototype.getStatus=function(){return this._status},Object.defineProperty(e.prototype,"status",{get:function(){return this.getStatus()},enumerable:!0,configurable:!0}),e._handler=function(t){t.cancel(),t._status=2;try{t._onExecute(),t._status=3}catch(e){t._status=5}},e.prototype._onDispose=function(){this.cancel(),this._status=null},e.prototype.cancel=function(){var t=this._timeoutId;return!!t&&(clearTimeout(t),this._timeoutId=null,this._status=4,!0)},e}(s.DisposableBase);e.TaskHandlerBase=u,Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u});
//# sourceMappingURL=TaskHandlerBase.js.map
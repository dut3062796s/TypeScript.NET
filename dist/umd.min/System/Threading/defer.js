/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define(["require","exports","../../extends"],e)}(function(e,n){"use strict";function t(e,n,t){return new c(e,n,t)}function i(e,n,t){return void 0===t&&(t=1/0),new l(e,n,t)}var r=e("../../extends"),o=r["default"],u=function(){function e(){}return e.prototype.dispose=function(){this.cancel()},e}(),c=function(e){function n(t,i,r){e.call(this),i>0||(i=0),this._id=setTimeout(n.handler,i,t,this,r)}return o(n,e),n.prototype.cancel=function(){var e=this._id;return e?(clearTimeout(e),this._id=null,!0):!1},n.handler=function(e,n,t){n.cancel(),e(t)},n}(u),l=function(e){function n(t,i,r){if(void 0===r&&(r=1/0),e.call(this),this._remaining=r,null===i||void 0===i)throw"'interval' must be a valid number.";if(0>i)throw"'interval' cannot be negative.";this._id=setInterval(n.handler,i,t,this)}return o(n,e),n.prototype.cancel=function(){var e=this._id;return e?(clearInterval(e),this._id=null,!0):!1},n.handler=function(e,n){--n._remaining||n.cancel(),e()},n}(u);n.defer=t,n.interval=i,Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=t});
//# sourceMappingURL=defer.js.map
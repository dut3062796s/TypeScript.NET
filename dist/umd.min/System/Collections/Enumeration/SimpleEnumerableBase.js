/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","./IteratorResult"],e)}(function(e,t){"use strict";var r=e("./IteratorResult"),n=void 0,o=function(){function e(){this.reset()}return Object.defineProperty(e.prototype,"current",{get:function(){return this._current},enumerable:!0,configurable:!0}),e.prototype.incrementIndex=function(){var e=this._index;return this._index=e=e===n?0:e+1,e},e.prototype.nextValue=function(){return this.moveNext(),this._current},e.prototype.next=function(){return this.moveNext()?new r.IteratorResult(this._current,this._index):r.IteratorResult.Done},e.prototype["return"]=function(e){try{return e!==n&&this.canMoveNext()?new r.IteratorResult(e,n,!0):r.IteratorResult.Done}finally{this.dispose()}},e.prototype.reset=function(){this._current=n,this._index=n},e.prototype.dispose=function(){this.reset()},e.prototype.getIsEndless=function(){return this.canMoveNext()},Object.defineProperty(e.prototype,"isEndless",{get:function(){return this.getIsEndless()},enumerable:!0,configurable:!0}),e}();t.SimpleEnumerableBase=o,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o});
//# sourceMappingURL=SimpleEnumerableBase.js.map
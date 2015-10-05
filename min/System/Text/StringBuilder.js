/*
 * @author electricessence / https://github.com/electricessence/
 * .NET Reference: http://referencesource.microsoft.com/#mscorlib/system/text/StringBuilder.cs
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../Types"],function(t,n,r){var e=function(){function t(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];var r=this;r._latest=null,r._partArray=[],r.appendThese(t)}return t.prototype.appendSingle=function(t){if(null!==t&&void 0!==t){var n=this;switch(n._latest=null,typeof t){case r.OBJECT:case r.FUNCTION:t=t.toString()}n._partArray.push(t)}},t.prototype.appendThese=function(t){var n=this;return t.forEach(function(t){return n.appendSingle(t)}),n},t.prototype.append=function(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];return this.appendThese(t),this},t.prototype.appendLine=function(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];return this.appendLines(t),this},t.prototype.appendLines=function(t){var n=this;return t.forEach(function(t){null!==t&&void 0!==t&&(n.appendSingle(t),n._partArray.push("\r\n"))}),n},Object.defineProperty(t.prototype,"isEmpty",{get:function(){return 0===this._partArray.length},enumerable:!0,configurable:!0}),t.prototype.toString=function(){var t=this._latest;return null===!t&&(this._latest=t=this._partArray.join()),t},t.prototype.join=function(t){return this._partArray.join(t)},t.prototype.clear=function(){this._partArray.length=0,this._latest=null},t.prototype.dispose=function(){this.clear()},t}();return e});
//# sourceMappingURL=StringBuilder.js.map

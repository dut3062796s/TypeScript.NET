/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon Parallel.js: https://github.com/adambom/parallel.js/blob/master/lib/parallel.js
 */
define(["require","exports","../../Promises/Promise","../../Types","../Worker","../deferImmediate","../../Environment"],function(e,r,n,t,o,i,s){"use strict";function u(e,r){r||(r={});for(var n=0,t=Object.keys(e);n<t.length;n++){var o=t[n];void 0===r[o]&&(r[o]=e[o])}return r}function a(e,r,n,t){r&&(e.onmessage=r),n&&(e.onerror=n),t!==f&&e.postMessage(t)}function c(e){return e&&i.deferImmediate(function(){return e.terminate()}),null}var f=void 0,l=typeof self!==t.Type.UNDEFINED?self.URL?self.URL:self.webkitURL:null,h=!(!s.isNodeJS&&!self.Worker),p={evalPath:s.isNodeJS?__dirname+"/eval.js":null,maxConcurrency:s.isNodeJS?e("os").cpus().length:navigator.hardwareConcurrency||4,allowSynchronous:!0,env:{},envNamespace:"env"},d=function(e){function r(r,n){e.call(this,function(e,t){a(r,function(r){e(r.data)},function(e){t(e)},n)},!0)}return __extends(r,e),r}(n.Promise),v=function(){function e(e){this.options=u(p,e),this._requiredScripts=[],this._requiredFunctions=[]}return e.prototype.getWorkerSource=function(e,r){var n=this._requiredScripts,t=this._requiredFunctions,o="";!s.isNodeJS&&n.length&&(o+='importScripts("'+n.join('","')+'");\r\n');for(var i=0,u=t;i<u.length;i++){var a=u[i],c=a.name,f=a.fn,l=f.toString();o+=c?"var "+c+" = "+l+";":l}r=JSON.stringify(r||{});var h=this.options.envNamespace;return o+(s.isNodeJS?'process.on("message", function(e) {global.'+h+" = "+r+";process.send(JSON.stringify(("+e.toString()+")(JSON.parse(e).data)))})":"self.onmessage = function(e) {var global = {}; global."+h+" = "+r+"';self.postMessage(("+e.toString()+")(e.data))}")},e.prototype.require=function(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];return this.requireThese(e)},e.prototype.requireThese=function(e){for(var r=0,n=e;r<n.length;r++){var o=n[r];switch(typeof o){case t.Type.STRING:this._requiredScripts.push(o);break;case t.Type.FUNCTION:this._requiredFunctions.push({fn:o});break;case t.Type.OBJECT:this._requiredFunctions.push(o);break;default:throw new TypeError("Invalid type.")}}return this},e.prototype._spawnWorker=function(e,r){var n,t=this.getWorkerSource(e,r);if(o["default"]===f)return f;var i=this._requiredScripts,u=this.options.evalPath;if(!u){if(s.isNodeJS)throw new Error("Can't use NodeJD without eval.js!");if(i.length)throw new Error("Can't use required scripts without eval.js!");if(!l)throw new Error("Can't create a blob URL in this browser!")}if(s.isNodeJS||i.length||!l)n=new o["default"](u),n.postMessage(t);else if(l){var a=new Blob([t],{type:"text/javascript"}),c=l.createObjectURL(a);n=new o["default"](c)}return n},e.prototype.startNew=function(e,r,t){var o=this,i=o._spawnWorker(r,u(o.options.env,t||{}));if(i)return new d(i,e).finallyThis(function(){return i.terminate()});if(o.options.allowSynchronous)return new n.Promise(function(n,t){try{n(r(e))}catch(o){t(o)}});throw new Error("Workers do not exist and synchronous operation not allowed!")},Object.defineProperty(e,"isSupported",{get:function(){return h},enumerable:!0,configurable:!0}),e.options=function(r){return new e(r)},e.require=function(){for(var r=[],n=0;n<arguments.length;n++)r[n-0]=arguments[n];return(new e).requireThese(r)},e.requireThese=function(r){return(new e).requireThese(r)},e.startNew=function(r,n,t){return(new e).startNew(r,n,t)},e.prototype.forEach=function(e,r,t){var o=this;return e&&e.length?(e=e.slice(),new n.Promise(function(i,s){for(var u,a=o.options.maxConcurrency,f=0,l=0,h=function(a,h){var p=o._spawnWorker(r,t);if(!p){if(!o.options.allowSynchronous)throw new Error("Workers do not exist and synchronous operation not allowed!");return n.Promise.all(e.map(function(e){return new n.Promise(function(n,t){try{n(r(e))}catch(o){t(o)}})})).thenThis(function(){return i},s),{value:void 0}}var v=function(){if(u&&(p=c(p)),p)if(h>f){var r=new d(p,e[f++]);r.thenSynchronous(v,function(e){u||(u=e,s(e),p=c(p))}).thenThis(function(){if(l++,l>h)throw Error("Resolved count exceeds data length.");l===h&&i()}).finallyThis(function(){return r.dispose()})}else p=c(p)};v()},p=0,v=e.length;!u&&f<Math.min(v,a);p++){var w=h(p,v);if("object"==typeof w)return w.value}})):new n.Fulfilled},e}();r.Parallel=v,Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=v});
//# sourceMappingURL=Parallel.js.map
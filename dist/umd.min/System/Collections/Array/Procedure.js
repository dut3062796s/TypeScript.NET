/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(n){if("object"==typeof module&&"object"==typeof module.exports){var e=n(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports"],n)}(function(n,e){"use strict";function r(n,e){if(void 0===e&&(e=!1),!n||!n.length)return 0;var r=0;return e?n.forEach(function(n){isNaN(n)||(r+=n)}):n.every(function(n){return r+=n,!isNaN(r)}),r}function t(n,e){if(void 0===e&&(e=!1),!n||!n.length)return NaN;var r,t=0;return e?(r=0,n.forEach(function(n){isNaN(n)||(t+=n,r++)})):(r=n.length,n.every(function(n){return t+=n,!isNaN(t)})),!r||isNaN(t)?NaN:t/r}function i(n,e){if(void 0===e&&(e=!1),!n||!n.length)return NaN;var r=1;if(e){var t=!1;n.forEach(function(n){isNaN(n)||(r*=n,t||(t=!0))}),t||(r=NaN)}else n.every(function(n){return isNaN(n)?(r=NaN,!1):(r*=n,!0)});return r}function u(n,e){if(void 0===e&&(e=!1),!n||n.length<2)return NaN;var r=n[0],t=!1;return n.every(function(n,i){if(i){if(0===n)return r=NaN,!1;if(isNaN(n)){if(!e)return r=NaN,!1}else r/=n,t||(t=!0)}return!0}),t||(r=NaN),r}function o(n,e,r,t){if(!n||!n.length)return NaN;var i=e;if(r){var u=!1;n.forEach(function(n){isNaN(n)||(t(n,i)&&(i=n),u||(u=!0))}),u||(i=NaN)}else n.every(function(n){return isNaN(n)?(i=NaN,!1):(t(n,i)&&(i=n),!0)});return i}function N(n,e){return void 0===e&&(e=!1),o(n,+(1/0),e,function(n,e){return e>n})}function f(n,e){return void 0===e&&(e=!1),o(n,-(1/0),e,function(n,e){return n>e})}e.sum=r,e.average=t,e.product=i,e.quotient=u,e.min=N,e.max=f});
//# sourceMappingURL=Procedure.js.map
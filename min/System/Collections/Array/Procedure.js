/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports"],function(n,r){var t;return function(n){function r(n,r){if(void 0===r&&(r=!1),!n||!n.length)return 0;var t=0;return r?n.forEach(function(n){isNaN(n)||(t+=n)}):n.every(function(n){return t+=n,!isNaN(t)}),t}function t(n,r){if(void 0===r&&(r=!1),!n||!n.length)return NaN;var t,e=0;return r?(t=0,n.forEach(function(n){isNaN(n)||(e+=n,t++)})):(t=n.length,n.every(function(n){return e+=n,!isNaN(e)})),!t||isNaN(e)?NaN:e/t}function e(n,r){if(void 0===r&&(r=!1),!n||!n.length)return NaN;var t=1;if(r){var e=!1;n.forEach(function(n){isNaN(n)||(t*=n,e||(e=!0))}),e||(t=NaN)}else n.every(function(n){return isNaN(n)?(t=NaN,!1):(t*=n,!0)});return t}function i(n,r,t,e){if(!n||!n.length)return NaN;var i=r;if(t){var u=!1;n.forEach(function(n){isNaN(n)||(e(n,i)&&(i=n),u||(u=!0))}),u||(i=NaN)}else n.every(function(n){return isNaN(n)?(i=NaN,!1):(e(n,i)&&(i=n),!0)});return i}function u(n,r){return void 0===r&&(r=!1),i(n,+(1/0),r,function(n,r){return r>n})}function N(n,r){return void 0===r&&(r=!1),i(n,-(1/0),r,function(n,r){return n>r})}n.sum=r,n.average=t,n.product=e,n.min=u,n.max=N}(t||(t={})),t});
//# sourceMappingURL=Procedure.js.map

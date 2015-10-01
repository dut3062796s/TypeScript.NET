/*
 * @author electricessence / https://github.com/electricessence/
 * Originally based upon .NET source but with many additions and improvements.
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
"use strict";define(["require","exports","../Compare","../Types","./TimeUnit","./TimeUnitValue","./ClockTime"],function(e,n,t,i,o,r,s){function c(e){if(!(e instanceof r||e instanceof a))throw new Error("Invalid comparison type.  Must be of type TimeUnitValue or TimeSpan.")}function u(e){if(e instanceof r){var n=e;return n.type===o.Milliseconds?n.value:n.toTimeSpan().milliseconds}return e instanceof a?e._milliseconds:void 0}var l,a=function(){function e(n,t){void 0===t&&(t=o.Milliseconds),this._milliseconds=e.convertToMilliseconds(n,t)}return e.prototype.equals=function(e){var n=u(e);return void 0===e?!1:t.areEqual(this._milliseconds,n)},e.prototype.compareTo=function(e){return null==e?1:(c(e),t.compare(this._milliseconds,u(e)))},e.prototype.toTimeUnitValue=function(e){return void 0===e&&(e=o.Milliseconds),new r(this.getTotal(e),e)},e.convertToMilliseconds=function(e,n){switch(void 0===n&&(n=o.Milliseconds),n){case o.Days:e*=24;case o.Hours:e*=60;case o.Minutes:e*=60;case o.Seconds:e*=1e3;case o.Milliseconds:return e;case o.Ticks:return e/1e4;default:throw new Error("Invalid TimeUnit.")}},e.prototype.getTotal=function(e){var n=this;switch(e){case o.Days:return n.days;case o.Hours:return n.hours;case o.Minutes:return n.minutes;case o.Seconds:return n.seconds;case o.Milliseconds:return n._milliseconds;case o.Ticks:return 1e4*n._milliseconds;default:throw new Error("Invalid TimeUnit.")}},Object.defineProperty(e.prototype,"ticks",{get:function(){return 1e4*this._milliseconds},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"milliseconds",{get:function(){return this._milliseconds},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"seconds",{get:function(){return this._milliseconds/1e3},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minutes",{get:function(){return this.seconds/60},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hours",{get:function(){return this.minutes/60},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"days",{get:function(){return this.hours/24},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"total",{get:function(){return this},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"time",{get:function(){return new s(this._milliseconds)},enumerable:!0,configurable:!0}),e.prototype.add=function(n){if(i.isNumber(n))throw new Error("Use .addUnit to add a numerical value amount.  .add only supports ClockTime, TimeSpan, and TimeUnitValue.");return(n instanceof r||n instanceof s)&&(n=n.toTimeSpan()),new e(this._milliseconds+n.milliseconds)},e.prototype.addUnit=function(n,t){return void 0===t&&(t=o.Milliseconds),new e(this._milliseconds+e.convertToMilliseconds(n,t))},e.from=function(n,t){return new e(n,t)},e.fromDays=function(n){return new e(n,o.Days)},e.fromHours=function(n){return new e(n,o.Hours)},e.fromMinutes=function(n){return new e(n,o.Minutes)},e.fromSeconds=function(n){return new e(n,o.Seconds)},e.fromMilliseconds=function(n){return new e(n,o.Milliseconds)},e.fromTicks=function(n){return new e(n,o.Ticks)},e.fromTime=function(n,t,i,o){return void 0===i&&(i=0),void 0===o&&(o=0),new e(e.millisecondsFromTime(n,t,i,o))},e.millisecondsFromTime=function(e,n,t,i){void 0===t&&(t=0),void 0===i&&(i=0);var o=e;return o*=60,o+=n,o*=60,o+=t,o*=1e3,o+=i},e.between=function(n,t){return new e(t.getTime()-n.getTime())},Object.defineProperty(e,"zero",{get:function(){return l||(l=new e(0))},enumerable:!0,configurable:!0}),e}();return a});
//# sourceMappingURL=TimeSpan.js.map

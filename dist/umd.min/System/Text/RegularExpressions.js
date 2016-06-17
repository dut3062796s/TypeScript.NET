/*!
 * @author electricessence / https://github.com/electricessence/
 * Named groups based on: http://trentrichardson.com/2011/08/02/javascript-regexp-match-named-captures/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../../extends"],e)}(function(e,t){"use strict";var r,n=e("../../extends"),o=n["default"],i="",u="i",s="g",c="m",f="u",a="w",p="y";!function(e){e.IGNORE_CASE=u,e.I=u,e.GLOBAL=s,e.G=s,e.MULTI_LINE=c,e.M=c,e.UNICODE=f,e.U=f,e.STICKY=p,e.Y=p,e.IGNORE_PATTERN_WHITESPACE=a,e.W=a}(r=t.RegexOptions||(t.RegexOptions={}));var l=function(){function e(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(!e)throw new Error("'pattern' cannot be null or empty.");var o,s=(t&&(Array.isArray(t)?t:[t]).concat(r)||r).join(i).toLowerCase();if(e instanceof RegExp){var f=e;f.ignoreCase&&-1===s.indexOf(u)&&(s+=u),f.multiline&&-1===s.indexOf(c)&&(s+=c),o=f.source}else o=e;var p=-1!=s.indexOf(a);s=s.replace(/[gw]/g,i);var l=[],h=o.match(/(?!\(\?<)(\w+)(?=>)/g);if(h){for(var d=0,g=h.length;g>d;d++)l[d+1]=h[d];o=o.replace(/\?<\w+>/g,i),this._keys=l}p&&(o=o.replace(/\s+/g,"\\s*")),this._re=new RegExp(o,s),Object.freeze(this)}return e.prototype.match=function(e,t){void 0===t&&(t=0);var r,n=this;if(!e||t>=e.length||!(r=this._re.exec(e.substring(t))))return v.Empty;t>0||(t=0);for(var o=t+r.index,i=o,u=[],s={},c=0,f=r.length;f>c;++c){var a=r[c],p=g;null===a&&void 0===a||(p=new d(a,i),p.freeze()),c&&n._keys&&c<n._keys.length&&(s[n._keys[c]]=p),u.push(p),0!==c&&(i+=a.length)}var l=new v(r[0],o,u,s);return l.freeze(),l},e.prototype.matches=function(e){for(var t,r=[],n=0,o=e&&e.length||0;o>n&&(t=this.match(e,n))&&t.success;)r.push(t),n=t.index+t.length;return Object.freeze(r)},e.prototype.replace=function(e,t,r){if(void 0===r&&(r=1/0),!(e&&null!==t&&void 0!==t&&r>0))return e;for(var n,o=[],u=0,s=e.length,c="function"==typeof t,f=0;r>f&&s>u&&(n=this.match(e,u))&&n.success;){var a=n.index,p=n.length;u!==a&&o.push(e.substring(u,a)),o.push(c?t(n,f++):t),u=a+p}return s>u&&o.push(e.substring(u)),o.join(i)},e.prototype.isMatch=function(e){return this._re.test(e)},e.isMatch=function(t,r,n){var o=new e(r,n);return o.isMatch(t)},e.replace=function(t,r,n,o){var i=new e(r,o);return i.replace(t,n)},e}();t.Regex=l;var h=function(){function e(e,t){void 0===e&&(e=i),void 0===t&&(t=-1),this.value=e,this.index=t}return Object.defineProperty(e.prototype,"length",{get:function(){var e=this.value;return e&&e.length||0},enumerable:!0,configurable:!0}),e.prototype.freeze=function(){Object.freeze(this)},e}();t.Capture=h;var d=function(e){function t(t,r){void 0===t&&(t=i),void 0===r&&(r=-1),e.call(this,t,r)}return o(t,e),Object.defineProperty(t.prototype,"success",{get:function(){return-1!=this.index},enumerable:!0,configurable:!0}),Object.defineProperty(t,"Empty",{get:function(){return g},enumerable:!0,configurable:!0}),t}(h);t.Group=d;var g=new d;g.freeze();var v=function(e){function t(t,r,n,o){void 0===t&&(t=i),void 0===r&&(r=-1),void 0===n&&(n=[]),void 0===o&&(o={}),e.call(this,t,r),this.groups=n,this.namedGroups=o}return o(t,e),t.prototype.freeze=function(){if(!this.groups)throw new Error("'groups' cannot be null.");if(!this.namedGroups)throw new Error("'groupMap' cannot be null.");Object.freeze(this.groups.slice()),Object.freeze(this.namedGroups),e.prototype.freeze.call(this)},Object.defineProperty(t,"Empty",{get:function(){return y},enumerable:!0,configurable:!0}),t}(d);t.Match=v;var y=new v;y.freeze(),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l});
//# sourceMappingURL=RegularExpressions.js.map
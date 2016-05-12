/*!
 * @author electricessence / https://github.com/electricessence/
 * Named groups based on: http://trentrichardson.com/2011/08/02/javascript-regexp-match-named-captures/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "../Exceptions/ArgumentNullException"], factory);
    }
})(function (require, exports) {
    "use strict";
    var ArgumentNullException_1 = require("../Exceptions/ArgumentNullException");
    var EMPTY = "";
    var UNDEFINED = "undefined";
    var PATTERN = "pattern";
    var RegexOptions;
    (function (RegexOptions) {
        RegexOptions.IGNORE_CASE = 'i';
        RegexOptions.GLOBAL = 'g';
        RegexOptions.MULTI_LINE = 'm';
        RegexOptions.UNICODE = 'u';
        RegexOptions.STICKY = 'y';
    })(RegexOptions = exports.RegexOptions || (exports.RegexOptions = {}));
    var Regex = (function () {
        function Regex(pattern, options) {
            if (!pattern)
                throw new ArgumentNullException_1.default(PATTERN);
            var patternString, flags = options && options.join(EMPTY) || EMPTY;
            if (pattern instanceof RegExp) {
                var p = pattern;
                if (p.ignoreCase && flags.indexOf(RegexOptions.IGNORE_CASE) === -1)
                    flags
                        += RegexOptions.IGNORE_CASE;
                if (p.multiline && flags.indexOf(RegexOptions.MULTI_LINE) === -1)
                    flags
                        += RegexOptions.MULTI_LINE;
                patternString = p.source;
            }
            else {
                patternString = pattern;
            }
            flags = flags.replace(RegexOptions.GLOBAL, EMPTY);
            var keys = [];
            {
                var k = patternString.match(/(?!\(\?<)(\w+)(?=>)/g);
                if (k) {
                    for (var i = 0, len = k.length; i < len; i++) {
                        keys[i + 1] = k[i];
                    }
                    this._keys = keys;
                    this._re = new RegExp(patternString.replace(/\?<\w+>/g, EMPTY), flags);
                }
                else {
                    this._keys = null;
                    this._re = new RegExp(patternString, flags);
                }
            }
            Object.freeze(this);
        }
        Regex.prototype.match = function (input) {
            var _ = this;
            var r = this._re.exec(input);
            if (!r)
                return Match.Empty;
            var loc = r.index, groups = [], groupMap = {};
            for (var i = 0, len = r.length; i < len; ++i) {
                var text = typeof r[i] !== UNDEFINED && r[i].constructor === String ? r[i] : EMPTY;
                var g = new Group(text, loc);
                g.freeze();
                if (i && _._keys && i < _._keys.length)
                    groupMap[_._keys[i]] = g;
                groups.push(g);
                if (i !== 0)
                    loc += text.length;
            }
            var m = new Match(r[0], r.index, groups, groupMap);
            m.freeze();
            return m;
        };
        Regex.prototype.matches = function (input) {
            var matches = [], m;
            while ((m = this.match(input)) && m.success) {
                matches.push(m);
                input = input.substring(m.index + m.length);
            }
            return matches;
        };
        Regex.prototype.replace = function (input, r) {
            return input.replace(this._re, r);
        };
        Regex.prototype.isMatch = function (input) {
            return this._re.test(input);
        };
        Regex.isMatch = function (input, pattern, options) {
            var r = new Regex(pattern, options);
            return r.isMatch(input);
        };
        Regex.replace = function (input, pattern, e, options) {
            var r = new Regex(pattern, options);
            return r.replace(input, e);
        };
        return Regex;
    }());
    exports.Regex = Regex;
    var Capture = (function () {
        function Capture(value, index) {
            if (value === void 0) { value = EMPTY; }
            if (index === void 0) { index = -1; }
            this.value = value;
            this.index = index;
        }
        Object.defineProperty(Capture.prototype, "length", {
            get: function () {
                var v = this.value;
                return v && v.length || 0;
            },
            enumerable: true,
            configurable: true
        });
        Capture.prototype.freeze = function () {
            Object.freeze(this);
        };
        return Capture;
    }());
    exports.Capture = Capture;
    var Group = (function (_super) {
        __extends(Group, _super);
        function Group(value, index) {
            if (value === void 0) { value = EMPTY; }
            if (index === void 0) { index = -1; }
            _super.call(this, value, index);
        }
        Object.defineProperty(Group.prototype, "success", {
            get: function () {
                return this.index != -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group, "Empty", {
            get: function () {
                return EmptyGroup;
            },
            enumerable: true,
            configurable: true
        });
        return Group;
    }(Capture));
    exports.Group = Group;
    var EmptyGroup = new Group();
    var Match = (function (_super) {
        __extends(Match, _super);
        function Match(value, index, groups, namedGroups) {
            if (value === void 0) { value = EMPTY; }
            if (index === void 0) { index = -1; }
            if (groups === void 0) { groups = []; }
            if (namedGroups === void 0) { namedGroups = {}; }
            _super.call(this, value, index);
            this.groups = groups;
            this.namedGroups = namedGroups;
        }
        Match.prototype.freeze = function () {
            if (!this.groups)
                throw new ArgumentNullException_1.default('groups');
            if (!this.namedGroups)
                throw new ArgumentNullException_1.default('groupMap');
            Object.freeze(this.groups.slice());
            Object.freeze(this.namedGroups);
            _super.prototype.freeze.call(this);
        };
        Object.defineProperty(Match, "Empty", {
            get: function () {
                return EmptyMatch;
            },
            enumerable: true,
            configurable: true
        });
        return Match;
    }(Group));
    exports.Match = Match;
    var EmptyMatch = new Match();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Regex;
});
//# sourceMappingURL=RegularExpressions.js.map
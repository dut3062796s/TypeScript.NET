/*!
 * @author electricessence / https://github.com/electricessence/
 * Named groups based on: http://trentrichardson.com/2011/08/02/javascript-regexp-match-named-captures/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
System.register(["../Exceptions/ArgumentNullException"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ArgumentNullException_1;
    var EMPTY, UNDEFINED, PATTERN, RegexOptions, Regex, Capture, Group, EmptyGroup, Match, EmptyMatch;
    return {
        setters:[
            function (ArgumentNullException_1_1) {
                ArgumentNullException_1 = ArgumentNullException_1_1;
            }],
        execute: function() {
            EMPTY = "";
            UNDEFINED = "undefined";
            PATTERN = "pattern";
            (function (RegexOptions) {
                RegexOptions.IGNORE_CASE = 'i';
                RegexOptions.GLOBAL = 'g';
                RegexOptions.MULTI_LINE = 'm';
                RegexOptions.UNICODE = 'u';
                RegexOptions.STICKY = 'y';
            })(RegexOptions = RegexOptions || (RegexOptions = {}));
            exports_1("RegexOptions", RegexOptions);
            Regex = (function () {
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
            exports_1("Regex", Regex);
            Capture = (function () {
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
            exports_1("Capture", Capture);
            Group = (function (_super) {
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
            exports_1("Group", Group);
            EmptyGroup = new Group();
            Match = (function (_super) {
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
            exports_1("Match", Match);
            EmptyMatch = new Match();
            exports_1("default",Regex);
        }
    }
});
//# sourceMappingURL=RegularExpressions.js.map
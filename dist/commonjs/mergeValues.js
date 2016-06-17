/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
"use strict";
function mergeValues(target, defaults) {
    var result = target || {};
    for (var key in defaults) {
        if (defaults.hasOwnProperty(key) && !result.hasOwnProperty(key)) {
            result[key] = defaults[key];
        }
    }
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mergeValues;
//# sourceMappingURL=mergeValues.js.map
/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
"use strict";
var ArgumentNullException_1 = require("../../../Exceptions/ArgumentNullException");
var Utility_1 = require("../Utility");
function mergeSort(target) {
    if (!target)
        throw new ArgumentNullException_1.ArgumentNullException("target");
    var len = target.length;
    return target.length < 2 ? target : sort(target, 0, len, Utility_1.initialize(len));
}
exports.mergeSort = mergeSort;
function sort(target, start, end, temp) {
    if (end - start > 1) {
        var middle = Math.floor((start + end) / 2);
        sort(target, start, middle, temp);
        sort(target, middle, end, temp);
        for (var i_1 = 0, len = target.length; i_1 < len; i_1++) {
            if (temp[i_1] !== target[i_1])
                temp[i_1] = target[i_1];
        }
        var k = start, i = start, j = middle;
        while (i < middle && j < end) {
            target[k++]
                = temp[i] > temp[j]
                    ? temp[j++]
                    : temp[i++];
        }
        while (i < middle) {
            target[k++] = temp[i++];
        }
    }
    return target;
}
//# sourceMappingURL=mergeSort.js.map
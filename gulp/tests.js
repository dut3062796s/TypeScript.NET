(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./constants/Targets", "./constants/ModuleTypes", "./constants/TaskNames", "gulp", "./typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    var TARGET = require("./constants/Targets");
    var MODULE = require("./constants/ModuleTypes");
    var TASK = require("./constants/TaskNames");
    var gulp = require("gulp");
    var typescript = require("./typescript");
    var TEST_DEFAULTS = Object.freeze({ noEmitHelpers: false });
    gulp.task(TASK.TYPESCRIPT_QUNIT, function () { return typescript
        .at('./tests/qunit', TARGET.ES5, MODULE.UMD, TEST_DEFAULTS)
        .render(); });
    gulp.task(TASK.TYPESCRIPT_MOCHA, [
        TASK.DIST_COMMONJS
    ], function () { return typescript
        .at('./tests/mocha', TARGET.ES5, MODULE.COMMONJS, TEST_DEFAULTS)
        .render(); });
    gulp.task(TASK.BUILD + ".tests", [
        TASK.TYPESCRIPT_QUNIT,
        TASK.TYPESCRIPT_MOCHA
    ]);
});
//# sourceMappingURL=tests.js.map
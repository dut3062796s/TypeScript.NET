(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "../../Types", "./copy"], function (require, exports) {
    "use strict";
    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
     */
    var Types_1 = require("../../Types");
    var copy_1 = require("./copy");
    var VOID0 = void 0;
    /**
     * Simply takes a payload and passes it to all the listeners.
     * Makes a arrayCopy of the listeners before calling dispatchUnsafe.
     *
     * @param listeners
     * @param payload
     * @param trap
     */
    function dispatch(listeners, payload, trap) {
        dispatch.unsafe(copy_1.copy(listeners), payload, trap);
    }
    exports.dispatch = dispatch;
    (function (dispatch) {
        /**
         * Simply takes a payload and passes it to all the listeners.
         *
         * While dispatching:
         * * This is an unsafe method if by chance any of the listeners modify the array.
         * * It cannot prevent changes to the payload.
         *
         * Improving safety:
         * * Only use a local array that isn't exposed to the listeners.
         * * Use the dispatch method instead as it makes a arrayCopy of the listeners array.
         * * Freeze the listeners array so it can't be modified.
         * * Freeze the payload.
         *
         * Specifying trap will catch any errors and pass them along if trap is a function.
         * A payload is used instead of arguments for easy typing.
         *
         *
         * @param listeners
         * @param payload
         * @param trap
         */
        function unsafe(listeners, payload, trap) {
            if (listeners && listeners.length) {
                for (var i = 0, len = listeners.length; i < len; i++) {
                    var fn = listeners[i];
                    if (!fn)
                        continue; // Ignore null refs.
                    try {
                        fn(payload);
                    }
                    catch (ex) {
                        if (!trap)
                            throw ex;
                        else if (Types_1.Type.isFunction(trap))
                            trap(ex, i);
                    }
                }
            }
        }
        dispatch.unsafe = unsafe;
        /**
         * Simply takes a payload and passes it to all the listeners.
         * Returns the results in an array that matches the indexes of the listeners.
         *
         * @param listeners
         * @param payload
         * @param trap
         * @returns {any}
         */
        function mapped(listeners, payload, trap) {
            if (!listeners)
                return listeners;
            // Reuse the arrayCopy as the array result.
            var result = copy_1.copy(listeners);
            if (listeners.length) {
                for (var i = 0, len = result.length; i < len; i++) {
                    var fn = result[i];
                    try {
                        result[i] = fn // Ignore null refs.
                            ? fn(payload)
                            : VOID0;
                    }
                    catch (ex) {
                        result[i] = VOID0;
                        if (!trap)
                            throw ex;
                        else if (Types_1.Type.isFunction(trap))
                            trap(ex, i);
                    }
                }
            }
            return result;
        }
        dispatch.mapped = mapped;
    })(dispatch = exports.dispatch || (exports.dispatch = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = dispatch;
});
//# sourceMappingURL=Dispatch.js.map
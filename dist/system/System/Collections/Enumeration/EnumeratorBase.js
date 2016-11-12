/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
System.register(["../../Types", "../../Disposable/DisposableBase", "../../Disposable/ObjectPool", "./IteratorResult", "../../../extends"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Types_1, DisposableBase_1, ObjectPool_1, IteratorResult_1, extends_1;
    var __extends, VOID0, yielderPool, Yielder, NAME, EnumeratorBase;
    function yielder(recycle) {
        if (!yielderPool)
            yielderPool
                = new ObjectPool_1.ObjectPool(40, function () { return new Yielder(); }, function (y) { return y.yieldBreak(); });
        if (!recycle)
            return yielderPool.take();
        yielderPool.add(recycle);
    }
    return {
        setters:[
            function (Types_1_1) {
                Types_1 = Types_1_1;
            },
            function (DisposableBase_1_1) {
                DisposableBase_1 = DisposableBase_1_1;
            },
            function (ObjectPool_1_1) {
                ObjectPool_1 = ObjectPool_1_1;
            },
            function (IteratorResult_1_1) {
                IteratorResult_1 = IteratorResult_1_1;
            },
            function (extends_1_1) {
                extends_1 = extends_1_1;
            }],
        execute: function() {
            __extends = extends_1.default;
            VOID0 = void 0;
            Yielder = (function () {
                function Yielder() {
                    this._current = VOID0;
                    this._index = NaN;
                }
                Object.defineProperty(Yielder.prototype, "current", {
                    get: function () { return this._current; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Yielder.prototype, "index", {
                    get: function () { return this._index; },
                    enumerable: true,
                    configurable: true
                });
                Yielder.prototype.yieldReturn = function (value) {
                    this._current = value;
                    if (isNaN(this._index))
                        this._index = 0;
                    else
                        this._index++;
                    return true;
                };
                Yielder.prototype.yieldBreak = function () {
                    this._current = VOID0;
                    this._index = NaN;
                    return false;
                };
                Yielder.prototype.dispose = function () {
                    this.yieldBreak();
                };
                return Yielder;
            }());
            NAME = "EnumeratorBase";
            EnumeratorBase = (function (_super) {
                __extends(EnumeratorBase, _super);
                function EnumeratorBase(_initializer, _tryGetNext, disposer, isEndless) {
                    _super.call(this);
                    this._initializer = _initializer;
                    this._tryGetNext = _tryGetNext;
                    this._disposableObjectName = NAME;
                    this.reset();
                    if (Types_1.Type.isBoolean(isEndless))
                        this._isEndless = isEndless;
                    else if (Types_1.Type.isBoolean(disposer))
                        this._isEndless = disposer;
                    if (Types_1.Type.isFunction(disposer))
                        this._disposer = disposer;
                }
                Object.defineProperty(EnumeratorBase.prototype, "current", {
                    get: function () {
                        var y = this._yielder;
                        return y && y.current;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EnumeratorBase.prototype, "index", {
                    get: function () {
                        var y = this._yielder;
                        return y ? y.index : NaN;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EnumeratorBase.prototype, "isEndless", {
                    get: function () {
                        return this._isEndless;
                    },
                    enumerable: true,
                    configurable: true
                });
                EnumeratorBase.prototype.reset = function () {
                    var _ = this;
                    _.throwIfDisposed();
                    var y = _._yielder;
                    _._yielder = null;
                    _._state = 0;
                    if (y)
                        yielder(y);
                };
                EnumeratorBase.prototype._assertBadState = function () {
                    var _ = this;
                    switch (_._state) {
                        case 3:
                            _.throwIfDisposed("This enumerator caused a fault and was disposed.");
                            break;
                        case 5:
                            _.throwIfDisposed("This enumerator was manually disposed.");
                            break;
                    }
                };
                EnumeratorBase.prototype.tryGetCurrent = function (out) {
                    this._assertBadState();
                    if (this._state === 1) {
                        out(this.current);
                        return true;
                    }
                    return false;
                };
                Object.defineProperty(EnumeratorBase.prototype, "canMoveNext", {
                    get: function () {
                        return this._state < 2;
                    },
                    enumerable: true,
                    configurable: true
                });
                EnumeratorBase.prototype.moveNext = function () {
                    var _ = this;
                    _._assertBadState();
                    try {
                        switch (_._state) {
                            case 0:
                                _._yielder = _._yielder || yielder();
                                _._state = 1;
                                var initializer = _._initializer;
                                if (initializer)
                                    initializer();
                            case 1:
                                if (_._tryGetNext(_._yielder)) {
                                    return true;
                                }
                                else {
                                    this.dispose();
                                    _._state = 2;
                                    return false;
                                }
                            default:
                                return false;
                        }
                    }
                    catch (e) {
                        this.dispose();
                        _._state = 3;
                        throw e;
                    }
                };
                EnumeratorBase.prototype.tryMoveNext = function (out) {
                    if (this.moveNext()) {
                        out(this.current);
                        return true;
                    }
                    return false;
                };
                EnumeratorBase.prototype.nextValue = function () {
                    return this.moveNext()
                        ? this.current
                        : VOID0;
                };
                EnumeratorBase.prototype.next = function () {
                    return this.moveNext()
                        ? new IteratorResult_1.IteratorResult(this.current, this.index)
                        : IteratorResult_1.IteratorResult.Done;
                };
                EnumeratorBase.prototype.end = function () {
                    this._ensureDisposeState(4);
                };
                EnumeratorBase.prototype['return'] = function (value) {
                    var _ = this;
                    _._assertBadState();
                    try {
                        return value === VOID0 || _._state === 2 || _._state === 4
                            ? IteratorResult_1.IteratorResult.Done
                            : new IteratorResult_1.IteratorResult(value, VOID0, true);
                    }
                    finally {
                        _.end();
                    }
                };
                EnumeratorBase.prototype._ensureDisposeState = function (state) {
                    var _ = this;
                    if (!_.wasDisposed) {
                        _.dispose();
                        _._state = state;
                    }
                };
                EnumeratorBase.prototype._onDispose = function () {
                    var _ = this;
                    _._isEndless = false;
                    var disposer = _._disposer;
                    _._initializer = null;
                    _._disposer = null;
                    var y = _._yielder;
                    _._yielder = null;
                    this._state = 5;
                    if (y)
                        yielder(y);
                    if (disposer)
                        disposer();
                };
                return EnumeratorBase;
            }(DisposableBase_1.DisposableBase));
            exports_1("EnumeratorBase", EnumeratorBase);
            exports_1("default",EnumeratorBase);
        }
    }
});
//# sourceMappingURL=EnumeratorBase.js.map
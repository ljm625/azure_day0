webpackJsonp([1], {
    "+6b+": function(e, t) {},
    "/0BQ": function(e, t) {},
    "1A76": function(e, t) {},
    "4wPh": function(e, t) {},
    "5fCi": function(e, t) {},
    A4Vm: function(e, t) {},
    AiGx: function(e, t) {},
    BDhv: function(e, t, i) {
        var a = i("kM2E");
        a(a.P + a.R, "Set", {
            toJSON: i("m9gC")("Set")
        })
    },
    Bss5: function(e, t) {},
    EUKm: function(e, t, i) {
        e.exports = i.p + "static/web/img/exchange-forbiden-image.cf4d146.png"
    },
    Ej60: function(e, t) {},
    FLts: function(e, t, i) {
        e.exports = i.p + "static/web/img/step2.0c5a8a5.png"
    },
    GPQ0: function(e, t) {},
    "J/eg": function(e, t) {},
    OZWX: function(e, t, i) {
        var a;
        "undefined" != typeof self && self,
        a = function() {
            return function(e) {
                function t(a) {
                    if (i[a])
                        return i[a].exports;
                    var n = i[a] = {
                        i: a,
                        l: !1,
                        exports: {}
                    };
                    return e[a].call(n.exports, n, n.exports, t),
                    n.l = !0,
                    n.exports
                }
                var i = {};
                return t.m = e,
                t.c = i,
                t.d = function(e, i, a) {
                    t.o(e, i) || Object.defineProperty(e, i, {
                        configurable: !1,
                        enumerable: !0,
                        get: a
                    })
                }
                ,
                t.n = function(e) {
                    var i = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return t.d(i, "a", i),
                    i
                }
                ,
                t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                t.p = "",
                t(t.s = 72)
            }([function(e, t) {
                var i = e.exports = {
                    version: "2.5.1"
                };
                "number" == typeof __e && (__e = i)
            }
            , function(e, t, i) {
                var a = i(33)("wks")
                  , n = i(21)
                  , r = i(2).Symbol
                  , o = "function" == typeof r;
                (e.exports = function(e) {
                    return a[e] || (a[e] = o && r[e] || (o ? r : n)("Symbol." + e))
                }
                ).store = a
            }
            , function(e, t) {
                var i = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = i)
            }
            , function(e, t, i) {
                var a = i(2)
                  , n = i(0)
                  , r = i(15)
                  , o = i(8)
                  , s = "prototype"
                  , c = function(e, t, i) {
                    var l, u, d, h = e & c.F, f = e & c.G, p = e & c.S, m = e & c.P, g = e & c.B, v = e & c.W, _ = f ? n : n[t] || (n[t] = {}), b = _[s], y = f ? a : p ? a[t] : (a[t] || {})[s];
                    for (l in f && (i = t),
                    i)
                        (u = !h && y && void 0 !== y[l]) && l in _ || (d = u ? y[l] : i[l],
                        _[l] = f && "function" != typeof y[l] ? i[l] : g && u ? r(d, a) : v && y[l] == d ? function(e) {
                            var t = function(t, i, a) {
                                if (this instanceof e) {
                                    switch (arguments.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t);
                                    case 2:
                                        return new e(t,i)
                                    }
                                    return new e(t,i,a)
                                }
                                return e.apply(this, arguments)
                            };
                            return t[s] = e[s],
                            t
                        }(d) : m && "function" == typeof d ? r(Function.call, d) : d,
                        m && ((_.virtual || (_.virtual = {}))[l] = d,
                        e & c.R && b && !b[l] && o(b, l, d)))
                };
                c.F = 1,
                c.G = 2,
                c.S = 4,
                c.P = 8,
                c.B = 16,
                c.W = 32,
                c.U = 64,
                c.R = 128,
                e.exports = c
            }
            , function(e, t, i) {
                var a = i(9);
                e.exports = function(e) {
                    if (!a(e))
                        throw TypeError(e + " is not an object!");
                    return e
                }
            }
            , function(e, t, i) {
                var a = i(4)
                  , n = i(44)
                  , r = i(29)
                  , o = Object.defineProperty;
                t.f = i(6) ? Object.defineProperty : function(e, t, i) {
                    if (a(e),
                    t = r(t, !0),
                    a(i),
                    n)
                        try {
                            return o(e, t, i)
                        } catch (e) {}
                    if ("get"in i || "set"in i)
                        throw TypeError("Accessors not supported!");
                    return "value"in i && (e[t] = i.value),
                    e
                }
            }
            , function(e, t, i) {
                e.exports = !i(13)(function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            }
            , function(e, t, i) {
                "use strict";
                function a(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
                t.assign = function(e) {
                    for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
                        var i = t.shift();
                        if (i) {
                            if ("object" != typeof i)
                                throw new TypeError(i + "must be non-object");
                            for (var n in i)
                                a(i, n) && (e[n] = i[n])
                        }
                    }
                    return e
                }
                ,
                t.shrinkBuf = function(e, t) {
                    return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t,
                    e)
                }
                ;
                var r = {
                    arraySet: function(e, t, i, a, n) {
                        if (t.subarray && e.subarray)
                            e.set(t.subarray(i, i + a), n);
                        else
                            for (var r = 0; r < a; r++)
                                e[n + r] = t[i + r]
                    },
                    flattenChunks: function(e) {
                        var t, i, a, n, r, o;
                        for (a = 0,
                        t = 0,
                        i = e.length; t < i; t++)
                            a += e[t].length;
                        for (o = new Uint8Array(a),
                        n = 0,
                        t = 0,
                        i = e.length; t < i; t++)
                            r = e[t],
                            o.set(r, n),
                            n += r.length;
                        return o
                    }
                }
                  , o = {
                    arraySet: function(e, t, i, a, n) {
                        for (var r = 0; r < a; r++)
                            e[n + r] = t[i + r]
                    },
                    flattenChunks: function(e) {
                        return [].concat.apply([], e)
                    }
                };
                t.setTyped = function(e) {
                    e ? (t.Buf8 = Uint8Array,
                    t.Buf16 = Uint16Array,
                    t.Buf32 = Int32Array,
                    t.assign(t, r)) : (t.Buf8 = Array,
                    t.Buf16 = Array,
                    t.Buf32 = Array,
                    t.assign(t, o))
                }
                ,
                t.setTyped(n)
            }
            , function(e, t, i) {
                var a = i(5)
                  , n = i(20);
                e.exports = i(6) ? function(e, t, i) {
                    return a.f(e, t, n(1, i))
                }
                : function(e, t, i) {
                    return e[t] = i,
                    e
                }
            }
            , function(e, t) {
                e.exports = function(e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e
                }
            }
            , function(e, t) {
                var i = {}.hasOwnProperty;
                e.exports = function(e, t) {
                    return i.call(e, t)
                }
            }
            , function(e, t) {
                e.exports = {}
            }
            , function(e, t, i) {
                var a = i(42)
                  , n = i(27);
                e.exports = function(e) {
                    return a(n(e))
                }
            }
            , function(e, t) {
                e.exports = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }
            }
            , function(e, t) {
                var i = {}.toString;
                e.exports = function(e) {
                    return i.call(e).slice(8, -1)
                }
            }
            , function(e, t, i) {
                var a = i(19);
                e.exports = function(e, t, i) {
                    if (a(e),
                    void 0 === t)
                        return e;
                    switch (i) {
                    case 1:
                        return function(i) {
                            return e.call(t, i)
                        }
                        ;
                    case 2:
                        return function(i, a) {
                            return e.call(t, i, a)
                        }
                        ;
                    case 3:
                        return function(i, a, n) {
                            return e.call(t, i, a, n)
                        }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                }
            }
            , function(e, t, i) {
                var a = i(46)
                  , n = i(34);
                e.exports = Object.keys || function(e) {
                    return a(e, n)
                }
            }
            , function(e, t, i) {
                i(75);
                for (var a = i(2), n = i(8), r = i(11), o = i(1)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
                    var l = s[c]
                      , u = a[l]
                      , d = u && u.prototype;
                    d && !d[o] && n(d, o, l),
                    r[l] = r.Array
                }
            }
            , function(e, t) {
                e.exports = !0
            }
            , function(e, t) {
                e.exports = function(e) {
                    if ("function" != typeof e)
                        throw TypeError(e + " is not a function!");
                    return e
                }
            }
            , function(e, t) {
                e.exports = function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                }
            }
            , function(e, t) {
                var i = 0
                  , a = Math.random();
                e.exports = function(e) {
                    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + a).toString(36))
                }
            }
            , function(e, t, i) {
                var a = i(5).f
                  , n = i(10)
                  , r = i(1)("toStringTag");
                e.exports = function(e, t, i) {
                    e && !n(e = i ? e : e.prototype, r) && a(e, r, {
                        configurable: !0,
                        value: t
                    })
                }
            }
            , function(e, t, i) {
                var a = i(27);
                e.exports = function(e) {
                    return Object(a(e))
                }
            }
            , function(e, t, i) {
                "use strict";
                var a = i(82)(!0);
                i(43)(String, "String", function(e) {
                    this._t = String(e),
                    this._i = 0
                }, function() {
                    var e, t = this._t, i = this._i;
                    return i >= t.length ? {
                        value: void 0,
                        done: !0
                    } : (e = a(t, i),
                    this._i += e.length,
                    {
                        value: e,
                        done: !1
                    })
                })
            }
            , function(e, t) {
                t.f = {}.propertyIsEnumerable
            }
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.__esModule = !0;
                var n = a(i(73))
                  , r = a(i(84));
                t.default = function(e, t) {
                    if (Array.isArray(e))
                        return e;
                    if ((0,
                    n.default)(Object(e)))
                        return function(e, t) {
                            var i = []
                              , a = !0
                              , n = !1
                              , o = void 0;
                            try {
                                for (var s, c = (0,
                                r.default)(e); !(a = (s = c.next()).done) && (i.push(s.value),
                                !t || i.length !== t); a = !0)
                                    ;
                            } catch (e) {
                                n = !0,
                                o = e
                            } finally {
                                try {
                                    !a && c.return && c.return()
                                } finally {
                                    if (n)
                                        throw o
                                }
                            }
                            return i
                        }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }
            , function(e, t) {
                e.exports = function(e) {
                    if (void 0 == e)
                        throw TypeError("Can't call method on  " + e);
                    return e
                }
            }
            , function(e, t, i) {
                var a = i(9)
                  , n = i(2).document
                  , r = a(n) && a(n.createElement);
                e.exports = function(e) {
                    return r ? n.createElement(e) : {}
                }
            }
            , function(e, t, i) {
                var a = i(9);
                e.exports = function(e, t) {
                    if (!a(e))
                        return e;
                    var i, n;
                    if (t && "function" == typeof (i = e.toString) && !a(n = i.call(e)))
                        return n;
                    if ("function" == typeof (i = e.valueOf) && !a(n = i.call(e)))
                        return n;
                    if (!t && "function" == typeof (i = e.toString) && !a(n = i.call(e)))
                        return n;
                    throw TypeError("Can't convert object to primitive value")
                }
            }
            , function(e, t, i) {
                var a = i(4)
                  , n = i(79)
                  , r = i(34)
                  , o = i(32)("IE_PROTO")
                  , s = function() {}
                  , c = "prototype"
                  , l = function() {
                    var e, t = i(28)("iframe"), a = r.length;
                    for (t.style.display = "none",
                    i(48).appendChild(t),
                    t.src = "javascript:",
                    (e = t.contentWindow.document).open(),
                    e.write("<script>document.F=Object<\/script>"),
                    e.close(),
                    l = e.F; a--; )
                        delete l[c][r[a]];
                    return l()
                };
                e.exports = Object.create || function(e, t) {
                    var i;
                    return null !== e ? (s[c] = a(e),
                    i = new s,
                    s[c] = null,
                    i[o] = e) : i = l(),
                    void 0 === t ? i : n(i, t)
                }
            }
            , function(e, t) {
                var i = Math.ceil
                  , a = Math.floor;
                e.exports = function(e) {
                    return isNaN(e = +e) ? 0 : (e > 0 ? a : i)(e)
                }
            }
            , function(e, t, i) {
                var a = i(33)("keys")
                  , n = i(21);
                e.exports = function(e) {
                    return a[e] || (a[e] = n(e))
                }
            }
            , function(e, t, i) {
                var a = i(2)
                  , n = "__core-js_shared__"
                  , r = a[n] || (a[n] = {});
                e.exports = function(e) {
                    return r[e] || (r[e] = {})
                }
            }
            , function(e, t) {
                e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            }
            , function(e, t, i) {
                var a = i(14)
                  , n = i(1)("toStringTag")
                  , r = "Arguments" == a(function() {
                    return arguments
                }());
                e.exports = function(e) {
                    var t, i, o;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (i = function(e, t) {
                        try {
                            return e[t]
                        } catch (e) {}
                    }(t = Object(e), n)) ? i : r ? a(t) : "Object" == (o = a(t)) && "function" == typeof t.callee ? "Arguments" : o
                }
            }
            , function(e, t) {
                t.f = Object.getOwnPropertySymbols
            }
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.__esModule = !0;
                var n = a(i(97))
                  , r = a(i(99))
                  , o = "function" == typeof r.default && "symbol" == typeof n.default ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                }
                ;
                t.default = "function" == typeof r.default && "symbol" === o(n.default) ? function(e) {
                    return void 0 === e ? "undefined" : o(e)
                }
                : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
                }
            }
            , function(e, t, i) {
                t.f = i(1)
            }
            , function(e, t, i) {
                var a = i(2)
                  , n = i(0)
                  , r = i(18)
                  , o = i(38)
                  , s = i(5).f;
                e.exports = function(e) {
                    var t = n.Symbol || (n.Symbol = r ? {} : a.Symbol || {});
                    "_" == e.charAt(0) || e in t || s(t, e, {
                        value: o.f(e)
                    })
                }
            }
            , function(e, t, i) {
                "use strict";
                var a = i(19);
                e.exports.f = function(e) {
                    return new function(e) {
                        var t, i;
                        this.promise = new e(function(e, a) {
                            if (void 0 !== t || void 0 !== i)
                                throw TypeError("Bad Promise constructor");
                            t = e,
                            i = a
                        }
                        ),
                        this.resolve = a(t),
                        this.reject = a(i)
                    }
                    (e)
                }
            }
            , function(e, t, i) {
                "use strict";
                e.exports = {
                    2: "need dictionary",
                    1: "stream end",
                    0: "",
                    "-1": "file error",
                    "-2": "stream error",
                    "-3": "data error",
                    "-4": "insufficient memory",
                    "-5": "buffer error",
                    "-6": "incompatible version"
                }
            }
            , function(e, t, i) {
                var a = i(14);
                e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                    return "String" == a(e) ? e.split("") : Object(e)
                }
            }
            , function(e, t, i) {
                "use strict";
                var a = i(18)
                  , n = i(3)
                  , r = i(45)
                  , o = i(8)
                  , s = i(10)
                  , c = i(11)
                  , l = i(78)
                  , u = i(22)
                  , d = i(49)
                  , h = i(1)("iterator")
                  , f = !([].keys && "next"in [].keys())
                  , p = "values"
                  , m = function() {
                    return this
                };
                e.exports = function(e, t, i, g, v, _, b) {
                    l(i, t, g);
                    var y, w, C, x = function(e) {
                        if (!f && e in P)
                            return P[e];
                        switch (e) {
                        case "keys":
                        case p:
                            return function() {
                                return new i(this,e)
                            }
                        }
                        return function() {
                            return new i(this,e)
                        }
                    }, k = t + " Iterator", S = v == p, T = !1, P = e.prototype, L = P[h] || P["@@iterator"] || v && P[v], D = L || x(v), A = v ? S ? x("entries") : D : void 0, M = "Array" == t && P.entries || L;
                    if (M && (C = d(M.call(new e))) !== Object.prototype && C.next && (u(C, k, !0),
                    a || s(C, h) || o(C, h, m)),
                    S && L && L.name !== p && (T = !0,
                    D = function() {
                        return L.call(this)
                    }
                    ),
                    a && !b || !f && !T && P[h] || o(P, h, D),
                    c[t] = D,
                    c[k] = m,
                    v)
                        if (y = {
                            values: S ? D : x(p),
                            keys: _ ? D : x("keys"),
                            entries: A
                        },
                        b)
                            for (w in y)
                                w in P || r(P, w, y[w]);
                        else
                            n(n.P + n.F * (f || T), t, y);
                    return y
                }
            }
            , function(e, t, i) {
                e.exports = !i(6) && !i(13)(function() {
                    return 7 != Object.defineProperty(i(28)("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            }
            , function(e, t, i) {
                e.exports = i(8)
            }
            , function(e, t, i) {
                var a = i(10)
                  , n = i(12)
                  , r = i(80)(!1)
                  , o = i(32)("IE_PROTO");
                e.exports = function(e, t) {
                    var i, s = n(e), c = 0, l = [];
                    for (i in s)
                        i != o && a(s, i) && l.push(i);
                    for (; t.length > c; )
                        a(s, i = t[c++]) && (~r(l, i) || l.push(i));
                    return l
                }
            }
            , function(e, t, i) {
                var a = i(31)
                  , n = Math.min;
                e.exports = function(e) {
                    return e > 0 ? n(a(e), 9007199254740991) : 0
                }
            }
            , function(e, t, i) {
                var a = i(2).document;
                e.exports = a && a.documentElement
            }
            , function(e, t, i) {
                var a = i(10)
                  , n = i(23)
                  , r = i(32)("IE_PROTO")
                  , o = Object.prototype;
                e.exports = Object.getPrototypeOf || function(e) {
                    return e = n(e),
                    a(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
                }
            }
            , function(e, t, i) {
                var a = i(35)
                  , n = i(1)("iterator")
                  , r = i(11);
                e.exports = i(0).getIteratorMethod = function(e) {
                    if (void 0 != e)
                        return e[n] || e["@@iterator"] || r[a(e)]
                }
            }
            , function(e, t, i) {
                var a = i(3)
                  , n = i(0)
                  , r = i(13);
                e.exports = function(e, t) {
                    var i = (n.Object || {})[e] || Object[e]
                      , o = {};
                    o[e] = t(i),
                    a(a.S + a.F * r(function() {
                        i(1)
                    }), "Object", o)
                }
            }
            , function(e, t, i) {
                e.exports = {
                    default: i(90),
                    __esModule: !0
                }
            }
            , function(e, t, i) {
                "use strict";
                t.__esModule = !0,
                t.default = function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
            }
            , function(e, t, i) {
                "use strict";
                t.__esModule = !0;
                var a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(i(93));
                t.default = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value"in n && (n.writable = !0),
                            (0,
                            a.default)(e, n.key, n)
                        }
                    }
                    return function(t, i, a) {
                        return i && e(t.prototype, i),
                        a && e(t, a),
                        t
                    }
                }()
            }
            , function(e, t, i) {
                var a = i(46)
                  , n = i(34).concat("length", "prototype");
                t.f = Object.getOwnPropertyNames || function(e) {
                    return a(e, n)
                }
            }
            , function(e, t, i) {
                var a = i(25)
                  , n = i(20)
                  , r = i(12)
                  , o = i(29)
                  , s = i(10)
                  , c = i(44)
                  , l = Object.getOwnPropertyDescriptor;
                t.f = i(6) ? l : function(e, t) {
                    if (e = r(e),
                    t = o(t, !0),
                    c)
                        try {
                            return l(e, t)
                        } catch (e) {}
                    if (s(e, t))
                        return n(!a.f.call(e, t), e[t])
                }
            }
            , function(e, t) {}
            , function(e, t, i) {
                e.exports = {
                    default: i(117),
                    __esModule: !0
                }
            }
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    var t = e.toString().match(/^(\d+)?([SDWM]?)?$/)
                      , i = (0,
                    r.default)(t, 3)
                      , a = i[0]
                      , n = i[1];
                    return {
                        raw: a,
                        u: i[2],
                        n: n || 1
                    }
                }
                function n(e) {
                    try {
                        var t = a(e)
                          , i = (t.raw,
                        t.n);
                        switch (t.u) {
                        case "S":
                            return i + "s";
                        case "D":
                            return i + "day";
                        case "W":
                            return i + "week";
                        case "M":
                            return i % 12 == 0 ? i / 12 + "year" : i + "mon";
                        default:
                            return i % 60 == 0 && i > 60 ? i / 60 + "hour" : i + "min"
                        }
                    } catch (t) {
                        throw e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.classFather = t.shouldShowMAStudiesByChartTypePreset = t.getIntervalClass = t.resolutionInSeconds = t.parseResolution = t.huobiResolution = t.getHuobiPeriodByInterval = t.getIntervalByHuobiPeriod = t.getParameterByName = void 0;
                var r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(i(26))
                  , o = "hb::tradingview::resolution"
                  , s = {
                    get: function() {
                        var e = localStorage.getItem(o);
                        return e ? e.split("|") : []
                    },
                    set: function(e) {
                        var t = e.interval
                          , i = e.chartType
                          , a = void 0 === i ? "1" : i;
                        localStorage.setItem(o, n(t) + "|" + a)
                    }
                };
                t.getParameterByName = function(e) {
                    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
                    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
                }
                ,
                t.getIntervalByHuobiPeriod = function(e) {
                    try {
                        var t = e.match(/^(\d+)(s|min|hour|day|mon|week|year)$/)
                          , i = (0,
                        r.default)(t, 3)
                          , a = (i[0],
                        i[1]);
                        switch (i[2]) {
                        case "s":
                            return a + "S";
                        case "hour":
                            return "" + 60 * a;
                        case "day":
                            return a + "D";
                        case "week":
                            return a + "W";
                        case "mon":
                            return a + "M";
                        case "year":
                            return 12 * parseInt(a, 10) + "M";
                        default:
                            return a
                        }
                    } catch (t) {
                        throw e
                    }
                }
                ,
                t.getHuobiPeriodByInterval = n,
                t.huobiResolution = s,
                t.parseResolution = a,
                t.resolutionInSeconds = function(e) {
                    var t = a(e);
                    return t.n * ({
                        S: 1,
                        D: 86400,
                        W: 604800,
                        M: 2592e3
                    }[t.u] || 60)
                }
                ,
                t.getIntervalClass = function(e) {
                    var t = e.resolution
                      , i = e.chartType;
                    return "interval-" + t + "-" + (void 0 === i ? 1 : i)
                }
                ,
                t.shouldShowMAStudiesByChartTypePreset = function(e) {
                    return "1" === e.toString()
                }
                ,
                t.classFather = function e(t, i, a) {
                    if (!t || !i || !t.parentNode)
                        return null;
                    if ("string" == typeof t.className)
                        if (a) {
                            if (t.className.split(" ").includes(i))
                                return t
                        } else if (t.className.indexOf(i) > -1)
                            return t;
                    return e(t.parentNode, i, a)
                }
            }
            , function(e, t, i) {
                e.exports = {
                    default: i(119),
                    __esModule: !0
                }
            }
            , function(e, t, i) {
                "use strict";
                function a() {}
                function n(e, t, i) {
                    this.fn = e,
                    this.context = t,
                    this.once = i || !1
                }
                function r() {
                    this._events = new a,
                    this._eventsCount = 0
                }
                var o = Object.prototype.hasOwnProperty
                  , s = "~";
                Object.create && (a.prototype = Object.create(null),
                (new a).__proto__ || (s = !1)),
                r.prototype.eventNames = function() {
                    var e, t, i = [];
                    if (0 === this._eventsCount)
                        return i;
                    for (t in e = this._events)
                        o.call(e, t) && i.push(s ? t.slice(1) : t);
                    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
                }
                ,
                r.prototype.listeners = function(e, t) {
                    var i = s ? s + e : e
                      , a = this._events[i];
                    if (t)
                        return !!a;
                    if (!a)
                        return [];
                    if (a.fn)
                        return [a.fn];
                    for (var n = 0, r = a.length, o = new Array(r); n < r; n++)
                        o[n] = a[n].fn;
                    return o
                }
                ,
                r.prototype.emit = function(e, t, i, a, n, r) {
                    var o = s ? s + e : e;
                    if (!this._events[o])
                        return !1;
                    var c, l, u = this._events[o], d = arguments.length;
                    if (u.fn) {
                        switch (u.once && this.removeListener(e, u.fn, void 0, !0),
                        d) {
                        case 1:
                            return u.fn.call(u.context),
                            !0;
                        case 2:
                            return u.fn.call(u.context, t),
                            !0;
                        case 3:
                            return u.fn.call(u.context, t, i),
                            !0;
                        case 4:
                            return u.fn.call(u.context, t, i, a),
                            !0;
                        case 5:
                            return u.fn.call(u.context, t, i, a, n),
                            !0;
                        case 6:
                            return u.fn.call(u.context, t, i, a, n, r),
                            !0
                        }
                        for (l = 1,
                        c = new Array(d - 1); l < d; l++)
                            c[l - 1] = arguments[l];
                        u.fn.apply(u.context, c)
                    } else {
                        var h, f = u.length;
                        for (l = 0; l < f; l++)
                            switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0),
                            d) {
                            case 1:
                                u[l].fn.call(u[l].context);
                                break;
                            case 2:
                                u[l].fn.call(u[l].context, t);
                                break;
                            case 3:
                                u[l].fn.call(u[l].context, t, i);
                                break;
                            case 4:
                                u[l].fn.call(u[l].context, t, i, a);
                                break;
                            default:
                                if (!c)
                                    for (h = 1,
                                    c = new Array(d - 1); h < d; h++)
                                        c[h - 1] = arguments[h];
                                u[l].fn.apply(u[l].context, c)
                            }
                    }
                    return !0
                }
                ,
                r.prototype.on = function(e, t, i) {
                    var a = new n(t,i || this)
                      , r = s ? s + e : e;
                    return this._events[r] ? this._events[r].fn ? this._events[r] = [this._events[r], a] : this._events[r].push(a) : (this._events[r] = a,
                    this._eventsCount++),
                    this
                }
                ,
                r.prototype.once = function(e, t, i) {
                    var a = new n(t,i || this,!0)
                      , r = s ? s + e : e;
                    return this._events[r] ? this._events[r].fn ? this._events[r] = [this._events[r], a] : this._events[r].push(a) : (this._events[r] = a,
                    this._eventsCount++),
                    this
                }
                ,
                r.prototype.removeListener = function(e, t, i, n) {
                    var r = s ? s + e : e;
                    if (!this._events[r])
                        return this;
                    if (!t)
                        return 0 == --this._eventsCount ? this._events = new a : delete this._events[r],
                        this;
                    var o = this._events[r];
                    if (o.fn)
                        o.fn !== t || n && !o.once || i && o.context !== i || (0 == --this._eventsCount ? this._events = new a : delete this._events[r]);
                    else {
                        for (var c = 0, l = [], u = o.length; c < u; c++)
                            (o[c].fn !== t || n && !o[c].once || i && o[c].context !== i) && l.push(o[c]);
                        l.length ? this._events[r] = 1 === l.length ? l[0] : l : 0 == --this._eventsCount ? this._events = new a : delete this._events[r]
                    }
                    return this
                }
                ,
                r.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = s ? s + e : e,
                    this._events[t] && (0 == --this._eventsCount ? this._events = new a : delete this._events[t])) : (this._events = new a,
                    this._eventsCount = 0),
                    this
                }
                ,
                r.prototype.off = r.prototype.removeListener,
                r.prototype.addListener = r.prototype.on,
                r.prototype.setMaxListeners = function() {
                    return this
                }
                ,
                r.prefixed = s,
                r.EventEmitter = r,
                e.exports = r
            }
            , function(e, t, i) {
                var a = i(4)
                  , n = i(19)
                  , r = i(1)("species");
                e.exports = function(e, t) {
                    var i, o = a(e).constructor;
                    return void 0 === o || void 0 == (i = a(o)[r]) ? t : n(i)
                }
            }
            , function(e, t, i) {
                var a, n, r, o = i(15), s = i(136), c = i(48), l = i(28), u = i(2), d = u.process, h = u.setImmediate, f = u.clearImmediate, p = u.MessageChannel, m = u.Dispatch, g = 0, v = {}, _ = "onreadystatechange", b = function() {
                    var e = +this;
                    if (v.hasOwnProperty(e)) {
                        var t = v[e];
                        delete v[e],
                        t()
                    }
                }, y = function(e) {
                    b.call(e.data)
                };
                h && f || (h = function(e) {
                    for (var t = [], i = 1; arguments.length > i; )
                        t.push(arguments[i++]);
                    return v[++g] = function() {
                        s("function" == typeof e ? e : Function(e), t)
                    }
                    ,
                    a(g),
                    g
                }
                ,
                f = function(e) {
                    delete v[e]
                }
                ,
                "process" == i(14)(d) ? a = function(e) {
                    d.nextTick(o(b, e, 1))
                }
                : m && m.now ? a = function(e) {
                    m.now(o(b, e, 1))
                }
                : p ? (r = (n = new p).port2,
                n.port1.onmessage = y,
                a = o(r.postMessage, r, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (a = function(e) {
                    u.postMessage(e + "", "*")
                }
                ,
                u.addEventListener("message", y, !1)) : a = _ in l("script") ? function(e) {
                    c.appendChild(l("script"))[_] = function() {
                        c.removeChild(this),
                        b.call(e)
                    }
                }
                : function(e) {
                    setTimeout(o(b, e, 1), 0)
                }
                ),
                e.exports = {
                    set: h,
                    clear: f
                }
            }
            , function(e, t) {
                e.exports = function(e) {
                    try {
                        return {
                            e: !1,
                            v: e()
                        }
                    } catch (e) {
                        return {
                            e: !0,
                            v: e
                        }
                    }
                }
            }
            , function(e, t, i) {
                var a = i(4)
                  , n = i(9)
                  , r = i(40);
                e.exports = function(e, t) {
                    if (a(e),
                    n(t) && t.constructor === e)
                        return t;
                    var i = r.f(e);
                    return (0,
                    i.resolve)(t),
                    i.promise
                }
            }
            , function(e, t, i) {
                (function(a) {
                    function n() {
                        var e;
                        try {
                            e = t.storage.debug
                        } catch (e) {}
                        return !e && void 0 !== a && "env"in a && (e = a.env.DEBUG),
                        e
                    }
                    (t = e.exports = i(144)).log = function() {
                        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                    }
                    ,
                    t.formatArgs = function(e) {
                        var i = this.useColors;
                        if (e[0] = (i ? "%c" : "") + this.namespace + (i ? " %c" : " ") + e[0] + (i ? "%c " : " ") + "+" + t.humanize(this.diff),
                        i) {
                            var a = "color: " + this.color;
                            e.splice(1, 0, a, "color: inherit");
                            var n = 0
                              , r = 0;
                            e[0].replace(/%[a-zA-Z%]/g, function(e) {
                                "%%" !== e && ("%c" === e && (r = ++n))
                            }),
                            e.splice(r, 0, a)
                        }
                    }
                    ,
                    t.save = function(e) {
                        try {
                            null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                        } catch (e) {}
                    }
                    ,
                    t.load = n,
                    t.useColors = function() {
                        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                    }
                    ,
                    t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                        try {
                            return window.localStorage
                        } catch (e) {}
                    }(),
                    t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
                    t.formatters.j = function(e) {
                        try {
                            return JSON.stringify(e)
                        } catch (e) {
                            return "[UnexpectedJSONParseError]: " + e.message
                        }
                    }
                    ,
                    t.enable(n())
                }
                ).call(t, i(143))
            }
            , function(e, t, i) {
                "use strict";
                e.exports = function(e, t, i, a) {
                    for (var n = 65535 & e | 0, r = e >>> 16 & 65535 | 0, o = 0; 0 !== i; ) {
                        i -= o = i > 2e3 ? 2e3 : i;
                        do {
                            r = r + (n = n + t[a++] | 0) | 0
                        } while (--o);n %= 65521,
                        r %= 65521
                    }
                    return n | r << 16 | 0
                }
            }
            , function(e, t, i) {
                "use strict";
                var a = function() {
                    for (var e, t = [], i = 0; i < 256; i++) {
                        e = i;
                        for (var a = 0; a < 8; a++)
                            e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                        t[i] = e
                    }
                    return t
                }();
                e.exports = function(e, t, i, n) {
                    var r = a
                      , o = n + i;
                    e ^= -1;
                    for (var s = n; s < o; s++)
                        e = e >>> 8 ^ r[255 & (e ^ t[s])];
                    return -1 ^ e
                }
            }
            , function(e, t, i) {
                "use strict";
                function a(e, t) {
                    if (t < 65537 && (e.subarray && o || !e.subarray && r))
                        return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
                    for (var i = "", a = 0; a < t; a++)
                        i += String.fromCharCode(e[a]);
                    return i
                }
                var n = i(7)
                  , r = !0
                  , o = !0;
                try {
                    String.fromCharCode.apply(null, [0])
                } catch (e) {
                    r = !1
                }
                try {
                    String.fromCharCode.apply(null, new Uint8Array(1))
                } catch (e) {
                    o = !1
                }
                for (var s = new n.Buf8(256), c = 0; c < 256; c++)
                    s[c] = c >= 252 ? 6 : c >= 248 ? 5 : c >= 240 ? 4 : c >= 224 ? 3 : c >= 192 ? 2 : 1;
                s[254] = s[254] = 1,
                t.string2buf = function(e) {
                    var t, i, a, r, o, s = e.length, c = 0;
                    for (r = 0; r < s; r++)
                        55296 == (64512 & (i = e.charCodeAt(r))) && r + 1 < s && 56320 == (64512 & (a = e.charCodeAt(r + 1))) && (i = 65536 + (i - 55296 << 10) + (a - 56320),
                        r++),
                        c += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
                    for (t = new n.Buf8(c),
                    o = 0,
                    r = 0; o < c; r++)
                        55296 == (64512 & (i = e.charCodeAt(r))) && r + 1 < s && 56320 == (64512 & (a = e.charCodeAt(r + 1))) && (i = 65536 + (i - 55296 << 10) + (a - 56320),
                        r++),
                        i < 128 ? t[o++] = i : i < 2048 ? (t[o++] = 192 | i >>> 6,
                        t[o++] = 128 | 63 & i) : i < 65536 ? (t[o++] = 224 | i >>> 12,
                        t[o++] = 128 | i >>> 6 & 63,
                        t[o++] = 128 | 63 & i) : (t[o++] = 240 | i >>> 18,
                        t[o++] = 128 | i >>> 12 & 63,
                        t[o++] = 128 | i >>> 6 & 63,
                        t[o++] = 128 | 63 & i);
                    return t
                }
                ,
                t.buf2binstring = function(e) {
                    return a(e, e.length)
                }
                ,
                t.binstring2buf = function(e) {
                    for (var t = new n.Buf8(e.length), i = 0, a = t.length; i < a; i++)
                        t[i] = e.charCodeAt(i);
                    return t
                }
                ,
                t.buf2string = function(e, t) {
                    var i, n, r, o, c = t || e.length, l = new Array(2 * c);
                    for (n = 0,
                    i = 0; i < c; )
                        if ((r = e[i++]) < 128)
                            l[n++] = r;
                        else if ((o = s[r]) > 4)
                            l[n++] = 65533,
                            i += o - 1;
                        else {
                            for (r &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && i < c; )
                                r = r << 6 | 63 & e[i++],
                                o--;
                            o > 1 ? l[n++] = 65533 : r < 65536 ? l[n++] = r : (r -= 65536,
                            l[n++] = 55296 | r >> 10 & 1023,
                            l[n++] = 56320 | 1023 & r)
                        }
                    return a(l, n)
                }
                ,
                t.utf8border = function(e, t) {
                    var i;
                    for ((t = t || e.length) > e.length && (t = e.length),
                    i = t - 1; i >= 0 && 128 == (192 & e[i]); )
                        i--;
                    return i < 0 ? t : 0 === i ? t : i + s[e[i]] > t ? i : t
                }
            }
            , function(e, t, i) {
                "use strict";
                e.exports = function() {
                    this.input = null,
                    this.next_in = 0,
                    this.avail_in = 0,
                    this.total_in = 0,
                    this.output = null,
                    this.next_out = 0,
                    this.avail_out = 0,
                    this.total_out = 0,
                    this.msg = "",
                    this.state = null,
                    this.data_type = 2,
                    this.adler = 0
                }
            }
            , function(e, t, i) {
                "use strict";
                e.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8
                }
            }
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.huobiResolution = t.getHuobiPeriodByInterval = t.getIntervalByHuobiPeriod = t.TradingView = void 0;
                var n = a(i(26))
                  , r = a(i(87))
                  , o = a(i(52))
                  , s = a(i(53))
                  , c = a(i(54))
                  , l = a(i(96))
                  , u = a(i(108))
                  , d = i(116)
                  , h = i(59)
                  , f = i(118)
                  , p = (a(i(61)),
                a(i(124)))
                  , m = (i(66)("huobi:entry"),
                function(e) {
                    function t(e) {
                        var i = e.ws
                          , a = e.base
                          , c = e.quote
                          , u = e.period
                          , d = e.chartType
                          , m = e.props
                          , g = (e.cssfile,
                        e.toolbarColor)
                          , v = e.themes
                          , _ = void 0 === v ? f.defaultThemes : v
                          , b = e.themeName
                          , y = e.lang
                          , w = e.symbols
                          , C = e.isMobile
                          , x = e.timezone;
                        (0,
                        s.default)(this, t),
                        a = (0,
                        h.getParameterByName)("base") || a,
                        c = (0,
                        h.getParameterByName)("quote") || c,
                        u = (0,
                        h.getParameterByName)("period") || u,
                        y = (0,
                        h.getParameterByName)("lang") || y || "en";
                        var k = (0,
                        f.getOverridesByThemeName)(_, b)
                          , S = k.overrides
                          , T = k.studies_overrides
                          , P = k.url;
                        void 0 !== d && (S["mainSeriesProperties.style"] = parseInt(d, 10));
                        var L = {
                            symbol: a.toUpperCase() + "/" + c.toUpperCase(),
                            fullscreen: !0,
                            interval: (0,
                            h.getIntervalByHuobiPeriod)(u),
                            container_id: "huobi-chart",
                            datafeed: new p.default(i,"" + a + c,u,w,x),
                            library_path: "/charting_library/",
                            timezone: x || "Asia/Shanghai",
                            locale: y || "en",
                            drawings_access: {
                                type: "black",
                                tools: [{
                                    name: "Regression Trend"
                                }]
                            },
                            disabled_features: ["compare_symbol", "display_market_status", "go_to_date", "header_chart_type", "header_compare", "header_interval_dialog_button", "header_resolutions", "header_screenshot", "header_symbol_search", "header_undo_redo", "legend_context_menu", "show_hide_button_in_legend", "show_interval_dialog_on_key_press", "snapshot_trading_drawings", "symbol_info", "timeframes_toolbar", "use_localstorage_for_settings", "volume_force_overlay"],
                            enabled_features: ["dont_show_boolean_study_arguments", "hide_last_na_study_output", "move_logo_to_main_pane", "same_data_requery", "side_toolbar_in_fullscreen_mode", "keep_left_toolbar_visible_on_small_screens", "disable_resolution_rebuild"],
                            custom_css_url: P,
                            toolbar_bg: Boolean(g) ? g : "transparent",
                            overrides: S,
                            studies_overrides: T
                        }
                          , D = (0,
                        o.default)({}, L, m)
                          , A = (0,
                        l.default)(this, (t.__proto__ || (0,
                        r.default)(t)).call(this, D));
                        return A.themes = (0,
                        f.populateTheme)(_),
                        A.maStudies = [],
                        A.changingInterval = !1,
                        A.chartType = d || 1,
                        A.selectedIntervalClass = (0,
                        h.getIntervalClass)({
                            resolution: (0,
                            h.getIntervalByHuobiPeriod)(u),
                            chartType: A.chartType
                        }),
                        A.onChartReady(function() {
                            var e = function(e) {
                                return top.window.LANG && top.window.LANG.kline && top.window.LANG.kline[e] || e
                            }
                              , t = [{
                                slug: "realtime",
                                resolution: "1",
                                chartType: 3,
                                isMobile: !0
                            }, {
                                slug: "1min",
                                resolution: "1"
                            }, {
                                slug: "5min",
                                resolution: "5"
                            }, {
                                slug: "15min",
                                resolution: "15"
                            }, {
                                slug: "30min",
                                resolution: "30"
                            }, {
                                slug: "1hour",
                                resolution: "60",
                                isMobile: !0
                            }, {
                                slug: "4hour",
                                resolution: "240"
                            }, {
                                slug: "1day",
                                resolution: "1D",
                                isMobile: !0
                            }, {
                                slug: "5day",
                                resolution: "5D"
                            }, {
                                slug: "1week",
                                resolution: D.noWeek ? "7D" : "1W"
                            }, {
                                slug: "1mon",
                                resolution: "1M"
                            }].filter(function(e) {
                                return !C || e.isMobile
                            })
                              , i = ["#965fc4", "#84aad5", "#55b263", "#b7248a"]
                              , a = (0,
                            n.default)(w, 1)[0]
                              , r = a ? 1 * a["trade-price-precision"] : 8;
                            [5, 10, 30, 60].forEach(function(e, t) {
                                A.chart().createStudy("Moving Average", !1, !1, [e], function(e) {
                                    return A.maStudies.push(e)
                                }, {
                                    "plot.color.0": i[t],
                                    precision: r
                                })
                            });
                            var o = function(e) {
                                return A.chart().getAllStudies().length > 1 && A.maStudies.forEach(function(t) {
                                    A.chart().getAllStudies().filter(function(e) {
                                        return e.id == t
                                    }).length && A.chart().getStudyById(t).setVisible(e)
                                })
                            };
                            o((0,
                            h.shouldShowMAStudiesByChartTypePreset)(A.chartType));
                            var s = t.map(function(t) {
                                return A.createButton({
                                    align: "left"
                                }).attr("title", "" + e(t.slug)).data("interval-label", (0,
                                h.getIntervalClass)(t)).toggleClass("selected", (0,
                                h.getIntervalClass)(t) === A.selectedIntervalClass).on("click", function() {
                                    !function(e) {
                                        var t = e.resolution
                                          , i = e.chartType
                                          , a = void 0 === i ? 1 : i;
                                        A.changingInterval || (A.setSymbol(D.symbol, t),
                                        A.chart().chartType() !== a && A.applyOverrides({
                                            "mainSeriesProperties.style": a
                                        }),
                                        o((0,
                                        h.shouldShowMAStudiesByChartTypePreset)(a)),
                                        A.selectedIntervalClass = (0,
                                        h.getIntervalClass)({
                                            resolution: t,
                                            chartType: a
                                        }),
                                        A.changingInterval = !1)
                                    }(t),
                                    s.forEach(function(e) {
                                        return e.toggleClass("selected", e.data("interval-label") === A.selectedIntervalClass)
                                    }),
                                    h.huobiResolution.set({
                                        interval: t.resolution,
                                        chartType: t.chartType
                                    })
                                }).append("<span>" + e(t.slug) + "</span>")
                            });
                            A.chart().onIntervalChanged().subscribe(null, function(e, t) {
                                A.changingInterval = !1
                            }),
                            A.onContextMenu(function(e, t) {
                                return [{
                                    text: "-Objects Tree..."
                                }, {
                                    text: "-Drawing Tools"
                                }, {
                                    text: "-Hide Marks On Bars"
                                }, {
                                    text: "-Change Symbol..."
                                }, {
                                    text: "-Change Interval..."
                                }]
                            })
                        }),
                        A
                    }
                    return (0,
                    u.default)(t, e),
                    (0,
                    c.default)(t, [{
                        key: "setTheme",
                        value: function(e) {
                            (Boolean(e) ? this.themes[e] : void 0) && (this.applyOverrides(this.themes[e].overrides),
                            this.themes[e].url && this.addCustomCSSFile(this.themes[e].url))
                        }
                    }]),
                    t
                }(d.widget));
                t.default = m,
                t.TradingView = TradingView,
                t.getIntervalByHuobiPeriod = h.getIntervalByHuobiPeriod,
                t.getHuobiPeriodByInterval = h.getHuobiPeriodByInterval,
                t.huobiResolution = h.huobiResolution
            }
            , function(e, t, i) {
                e.exports = {
                    default: i(74),
                    __esModule: !0
                }
            }
            , function(e, t, i) {
                i(17),
                i(24),
                e.exports = i(83)
            }
            , function(e, t, i) {
                "use strict";
                var a = i(76)
                  , n = i(77)
                  , r = i(11)
                  , o = i(12);
                e.exports = i(43)(Array, "Array", function(e, t) {
                    this._t = o(e),
                    this._i = 0,
                    this._k = t
                }, function() {
                    var e = this._t
                      , t = this._k
                      , i = this._i++;
                    return !e || i >= e.length ? (this._t = void 0,
                    n(1)) : n(0, "keys" == t ? i : "values" == t ? e[i] : [i, e[i]])
                }, "values"),
                r.Arguments = r.Array,
                a("keys"),
                a("values"),
                a("entries")
            }
            , function(e, t) {
                e.exports = function() {}
            }
            , function(e, t) {
                e.exports = function(e, t) {
                    return {
                        value: t,
                        done: !!e
                    }
                }
            }
            , function(e, t, i) {
                "use strict";
                var a = i(30)
                  , n = i(20)
                  , r = i(22)
                  , o = {};
                i(8)(o, i(1)("iterator"), function() {
                    return this
                }),
                e.exports = function(e, t, i) {
                    e.prototype = a(o, {
                        next: n(1, i)
                    }),
                    r(e, t + " Iterator")
                }
            }
            , function(e, t, i) {
                var a = i(5)
                  , n = i(4)
                  , r = i(16);
                e.exports = i(6) ? Object.defineProperties : function(e, t) {
                    n(e);
                    for (var i, o = r(t), s = o.length, c = 0; s > c; )
                        a.f(e, i = o[c++], t[i]);
                    return e
                }
            }
            , function(e, t, i) {
                var a = i(12)
                  , n = i(47)
                  , r = i(81);
                e.exports = function(e) {
                    return function(t, i, o) {
                        var s, c = a(t), l = n(c.length), u = r(o, l);
                        if (e && i != i) {
                            for (; l > u; )
                                if ((s = c[u++]) != s)
                                    return !0
                        } else
                            for (; l > u; u++)
                                if ((e || u in c) && c[u] === i)
                                    return e || u || 0;
                        return !e && -1
                    }
                }
            }
            , function(e, t, i) {
                var a = i(31)
                  , n = Math.max
                  , r = Math.min;
                e.exports = function(e, t) {
                    return (e = a(e)) < 0 ? n(e + t, 0) : r(e, t)
                }
            }
            , function(e, t, i) {
                var a = i(31)
                  , n = i(27);
                e.exports = function(e) {
                    return function(t, i) {
                        var r, o, s = String(n(t)), c = a(i), l = s.length;
                        return c < 0 || c >= l ? e ? "" : void 0 : (r = s.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === l || (o = s.charCodeAt(c + 1)) < 56320 || o > 57343 ? e ? s.charAt(c) : r : e ? s.slice(c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536
                    }
                }
            }
            , function(e, t, i) {
                var a = i(35)
                  , n = i(1)("iterator")
                  , r = i(11);
                e.exports = i(0).isIterable = function(e) {
                    var t = Object(e);
                    return void 0 !== t[n] || "@@iterator"in t || r.hasOwnProperty(a(t))
                }
            }
            , function(e, t, i) {
                e.exports = {
                    default: i(85),
                    __esModule: !0
                }
            }
            , function(e, t, i) {
                i(17),
                i(24),
                e.exports = i(86)
            }
            , function(e, t, i) {
                var a = i(4)
                  , n = i(50);
                e.exports = i(0).getIterator = function(e) {
                    var t = n(e);
                    if ("function" != typeof t)
                        throw TypeError(e + " is not iterable!");
                    return a(t.call(e))
                }
            }
            , function(e, t, i) {
                e.exports = {
                    default: i(88),
                    __esModule: !0
                }
            }
            , function(e, t, i) {
                i(89),
                e.exports = i(0).Object.getPrototypeOf
            }
            , function(e, t, i) {
                var a = i(23)
                  , n = i(49);
                i(51)("getPrototypeOf", function() {
                    return function(e) {
                        return n(a(e))
                    }
                })
            }
            , function(e, t, i) {
                i(91),
                e.exports = i(0).Object.assign
            }
            , function(e, t, i) {
                var a = i(3);
                a(a.S + a.F, "Object", {
                    assign: i(92)
                })
            }
            , function(e, t, i) {
                "use strict";
                var a = i(16)
                  , n = i(36)
                  , r = i(25)
                  , o = i(23)
                  , s = i(42)
                  , c = Object.assign;
                e.exports = !c || i(13)(function() {
                    var e = {}
                      , t = {}
                      , i = Symbol()
                      , a = "abcdefghijklmnopqrst";
                    return e[i] = 7,
                    a.split("").forEach(function(e) {
                        t[e] = e
                    }),
                    7 != c({}, e)[i] || Object.keys(c({}, t)).join("") != a
                }) ? function(e, t) {
                    for (var i = o(e), c = arguments.length, l = 1, u = n.f, d = r.f; c > l; )
                        for (var h, f = s(arguments[l++]), p = u ? a(f).concat(u(f)) : a(f), m = p.length, g = 0; m > g; )
                            d.call(f, h = p[g++]) && (i[h] = f[h]);
                    return i
                }
                : c
            }
            , function(e, t, i) {
                e.exports = {
                    default: i(94),
                    __esModule: !0
                }
            }
            , function(e, t, i) {
                i(95);
                var a = i(0).Object;
                e.exports = function(e, t, i) {
                    return a.defineProperty(e, t, i)
                }
            }
            , function(e, t, i) {
                var a = i(3);
                a(a.S + a.F * !i(6), "Object", {
                    defineProperty: i(5).f
                })
            }
            , function(e, t, i) {
                "use strict";
                t.__esModule = !0;
                var a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(i(37));
                t.default = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== (void 0 === t ? "undefined" : (0,
                    a.default)(t)) && "function" != typeof t ? e : t
                }
            }
            , function(e, t, i) {
                e.exports = {
                    default: i(98),
                    __esModule: !0
                }
            }
            , function(e, t, i) {
                i(24),
                i(17),
                e.exports = i(38).f("iterator")
            }
            , function(e, t, i) {
                e.exports = {
                    default: i(100),
                    __esModule: !0
                }
            }
            , function(e, t, i) {
                i(101),
                i(57),
                i(106),
                i(107),
                e.exports = i(0).Symbol
            }
            , function(e, t, i) {
                "use strict";
                var a = i(2)
                  , n = i(10)
                  , r = i(6)
                  , o = i(3)
                  , s = i(45)
                  , c = i(102).KEY
                  , l = i(13)
                  , u = i(33)
                  , d = i(22)
                  , h = i(21)
                  , f = i(1)
                  , p = i(38)
                  , m = i(39)
                  , g = i(103)
                  , v = i(104)
                  , _ = i(4)
                  , b = i(12)
                  , y = i(29)
                  , w = i(20)
                  , C = i(30)
                  , x = i(105)
                  , k = i(56)
                  , S = i(5)
                  , T = i(16)
                  , P = k.f
                  , L = S.f
                  , D = x.f
                  , A = a.Symbol
                  , M = a.JSON
                  , O = M && M.stringify
                  , F = "prototype"
                  , R = f("_hidden")
                  , $ = f("toPrimitive")
                  , I = {}.propertyIsEnumerable
                  , E = u("symbol-registry")
                  , j = u("symbols")
                  , W = u("op-symbols")
                  , N = Object[F]
                  , B = "function" == typeof A
                  , q = a.QObject
                  , U = !q || !q[F] || !q[F].findChild
                  , z = r && l(function() {
                    return 7 != C(L({}, "a", {
                        get: function() {
                            return L(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                }) ? function(e, t, i) {
                    var a = P(N, t);
                    a && delete N[t],
                    L(e, t, i),
                    a && e !== N && L(N, t, a)
                }
                : L
                  , H = function(e) {
                    var t = j[e] = C(A[F]);
                    return t._k = e,
                    t
                }
                  , V = B && "symbol" == typeof A.iterator ? function(e) {
                    return "symbol" == typeof e
                }
                : function(e) {
                    return e instanceof A
                }
                  , K = function(e, t, i) {
                    return e === N && K(W, t, i),
                    _(e),
                    t = y(t, !0),
                    _(i),
                    n(j, t) ? (i.enumerable ? (n(e, R) && e[R][t] && (e[R][t] = !1),
                    i = C(i, {
                        enumerable: w(0, !1)
                    })) : (n(e, R) || L(e, R, w(1, {})),
                    e[R][t] = !0),
                    z(e, t, i)) : L(e, t, i)
                }
                  , Y = function(e, t) {
                    _(e);
                    for (var i, a = g(t = b(t)), n = 0, r = a.length; r > n; )
                        K(e, i = a[n++], t[i]);
                    return e
                }
                  , J = function(e) {
                    var t = I.call(this, e = y(e, !0));
                    return !(this === N && n(j, e) && !n(W, e)) && (!(t || !n(this, e) || !n(j, e) || n(this, R) && this[R][e]) || t)
                }
                  , Q = function(e, t) {
                    if (e = b(e),
                    t = y(t, !0),
                    e !== N || !n(j, t) || n(W, t)) {
                        var i = P(e, t);
                        return !i || !n(j, t) || n(e, R) && e[R][t] || (i.enumerable = !0),
                        i
                    }
                }
                  , Z = function(e) {
                    for (var t, i = D(b(e)), a = [], r = 0; i.length > r; )
                        n(j, t = i[r++]) || t == R || t == c || a.push(t);
                    return a
                }
                  , G = function(e) {
                    for (var t, i = e === N, a = D(i ? W : b(e)), r = [], o = 0; a.length > o; )
                        !n(j, t = a[o++]) || i && !n(N, t) || r.push(j[t]);
                    return r
                };
                B || (s((A = function() {
                    if (this instanceof A)
                        throw TypeError("Symbol is not a constructor!");
                    var e = h(arguments.length > 0 ? arguments[0] : void 0)
                      , t = function(i) {
                        this === N && t.call(W, i),
                        n(this, R) && n(this[R], e) && (this[R][e] = !1),
                        z(this, e, w(1, i))
                    };
                    return r && U && z(N, e, {
                        configurable: !0,
                        set: t
                    }),
                    H(e)
                }
                )[F], "toString", function() {
                    return this._k
                }),
                k.f = Q,
                S.f = K,
                i(55).f = x.f = Z,
                i(25).f = J,
                i(36).f = G,
                r && !i(18) && s(N, "propertyIsEnumerable", J, !0),
                p.f = function(e) {
                    return H(f(e))
                }
                ),
                o(o.G + o.W + o.F * !B, {
                    Symbol: A
                });
                for (var X = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; X.length > ee; )
                    f(X[ee++]);
                for (var te = T(f.store), ie = 0; te.length > ie; )
                    m(te[ie++]);
                o(o.S + o.F * !B, "Symbol", {
                    for: function(e) {
                        return n(E, e += "") ? E[e] : E[e] = A(e)
                    },
                    keyFor: function(e) {
                        if (!V(e))
                            throw TypeError(e + " is not a symbol!");
                        for (var t in E)
                            if (E[t] === e)
                                return t
                    },
                    useSetter: function() {
                        U = !0
                    },
                    useSimple: function() {
                        U = !1
                    }
                }),
                o(o.S + o.F * !B, "Object", {
                    create: function(e, t) {
                        return void 0 === t ? C(e) : Y(C(e), t)
                    },
                    defineProperty: K,
                    defineProperties: Y,
                    getOwnPropertyDescriptor: Q,
                    getOwnPropertyNames: Z,
                    getOwnPropertySymbols: G
                }),
                M && o(o.S + o.F * (!B || l(function() {
                    var e = A();
                    return "[null]" != O([e]) || "{}" != O({
                        a: e
                    }) || "{}" != O(Object(e))
                })), "JSON", {
                    stringify: function(e) {
                        if (void 0 !== e && !V(e)) {
                            for (var t, i, a = [e], n = 1; arguments.length > n; )
                                a.push(arguments[n++]);
                            return "function" == typeof (t = a[1]) && (i = t),
                            !i && v(t) || (t = function(e, t) {
                                if (i && (t = i.call(this, e, t)),
                                !V(t))
                                    return t
                            }
                            ),
                            a[1] = t,
                            O.apply(M, a)
                        }
                    }
                }),
                A[F][$] || i(8)(A[F], $, A[F].valueOf),
                d(A, "Symbol"),
                d(Math, "Math", !0),
                d(a.JSON, "JSON", !0)
            }
            , function(e, t, i) {
                var a = i(21)("meta")
                  , n = i(9)
                  , r = i(10)
                  , o = i(5).f
                  , s = 0
                  , c = Object.isExtensible || function() {
                    return !0
                }
                  , l = !i(13)(function() {
                    return c(Object.preventExtensions({}))
                })
                  , u = function(e) {
                    o(e, a, {
                        value: {
                            i: "O" + ++s,
                            w: {}
                        }
                    })
                }
                  , d = e.exports = {
                    KEY: a,
                    NEED: !1,
                    fastKey: function(e, t) {
                        if (!n(e))
                            return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!r(e, a)) {
                            if (!c(e))
                                return "F";
                            if (!t)
                                return "E";
                            u(e)
                        }
                        return e[a].i
                    },
                    getWeak: function(e, t) {
                        if (!r(e, a)) {
                            if (!c(e))
                                return !0;
                            if (!t)
                                return !1;
                            u(e)
                        }
                        return e[a].w
                    },
                    onFreeze: function(e) {
                        return l && d.NEED && c(e) && !r(e, a) && u(e),
                        e
                    }
                }
            }
            , function(e, t, i) {
                var a = i(16)
                  , n = i(36)
                  , r = i(25);
                e.exports = function(e) {
                    var t = a(e)
                      , i = n.f;
                    if (i)
                        for (var o, s = i(e), c = r.f, l = 0; s.length > l; )
                            c.call(e, o = s[l++]) && t.push(o);
                    return t
                }
            }
            , function(e, t, i) {
                var a = i(14);
                e.exports = Array.isArray || function(e) {
                    return "Array" == a(e)
                }
            }
            , function(e, t, i) {
                var a = i(12)
                  , n = i(55).f
                  , r = {}.toString
                  , o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                e.exports.f = function(e) {
                    return o && "[object Window]" == r.call(e) ? function(e) {
                        try {
                            return n(e)
                        } catch (e) {
                            return o.slice()
                        }
                    }(e) : n(a(e))
                }
            }
            , function(e, t, i) {
                i(39)("asyncIterator")
            }
            , function(e, t, i) {
                i(39)("observable")
            }
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.__esModule = !0;
                var n = a(i(109))
                  , r = a(i(113))
                  , o = a(i(37));
                t.default = function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0,
                        o.default)(t)));
                    e.prototype = (0,
                    r.default)(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (n.default ? (0,
                    n.default)(e, t) : e.__proto__ = t)
                }
            }
            , function(e, t, i) {
                e.exports = {
                    default: i(110),
                    __esModule: !0
                }
            }
            , function(e, t, i) {
                i(111),
                e.exports = i(0).Object.setPrototypeOf
            }
            , function(e, t, i) {
                var a = i(3);
                a(a.S, "Object", {
                    setPrototypeOf: i(112).set
                })
            }
            , function(e, t, i) {
                var a = i(9)
                  , n = i(4)
                  , r = function(e, t) {
                    if (n(e),
                    !a(t) && null !== t)
                        throw TypeError(t + ": can't set as prototype!")
                };
                e.exports = {
                    set: Object.setPrototypeOf || ("__proto__"in {} ? function(e, t, a) {
                        try {
                            (a = i(15)(Function.call, i(56).f(Object.prototype, "__proto__").set, 2))(e, []),
                            t = !(e instanceof Array)
                        } catch (e) {
                            t = !0
                        }
                        return function(e, i) {
                            return r(e, i),
                            t ? e.__proto__ = i : a(e, i),
                            e
                        }
                    }({}, !1) : void 0),
                    check: r
                }
            }
            , function(e, t, i) {
                e.exports = {
                    default: i(114),
                    __esModule: !0
                }
            }
            , function(e, t, i) {
                i(115);
                var a = i(0).Object;
                e.exports = function(e, t) {
                    return a.create(e, t)
                }
            }
            , function(e, t, i) {
                var a = i(3);
                a(a.S, "Object", {
                    create: i(30)
                })
            }
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var n, r, o, s = a(i(58)), c = a(i(52)), l = a(i(37));
                !function(i, a) {
                    "object" == (0,
                    l.default)(t) && void 0 !== e ? a(t) : (r = [t],
                    void 0 === (o = "function" == typeof (n = a) ? n.apply(t, r) : n) || (e.exports = o))
                }(0, function(e) {
                    function t(e, i) {
                        var n = a({}, e);
                        for (var r in i)
                            "object" != (0,
                            l.default)(e[r]) || null === e[r] || Array.isArray(e[r]) ? void 0 !== i[r] && (n[r] = i[r]) : n[r] = t(e[r], i[r]);
                        return n
                    }
                    function i() {
                        return "1.13 dev (internal id d7dbe274 @ 2018-07-22 23:36:56.724511)"
                    }
                    var a = c.default || function(e) {
                        for (var t, i = arguments, a = 1, n = arguments.length; a < n; a++)
                            for (var r in t = i[a])
                                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }
                      , n = {
                        mobile: {
                            disabled_features: ["left_toolbar", "header_widget", "timeframes_toolbar", "edit_buttons_in_legend", "context_menus", "control_bar", "border_around_the_chart"],
                            enabled_features: []
                        }
                    }
                      , r = {
                        width: 800,
                        height: 500,
                        symbol: "AA",
                        interval: "D",
                        timezone: "UTC",
                        container_id: "",
                        library_path: "",
                        locale: "en",
                        widgetbar: {
                            details: !1,
                            watchlist: !1,
                            watchlist_settings: {
                                default_symbols: []
                            }
                        },
                        overrides: {
                            "mainSeriesProperties.showCountdown": !1
                        },
                        studies_overrides: {},
                        brokerConfig: {
                            configFlags: {}
                        },
                        fullscreen: !1,
                        autosize: !1,
                        disabled_features: [],
                        enabled_features: [],
                        debug: !1,
                        logo: {},
                        time_frames: [{
                            text: "5y",
                            resolution: "W"
                        }, {
                            text: "1y",
                            resolution: "W"
                        }, {
                            text: "6m",
                            resolution: "120"
                        }, {
                            text: "3m",
                            resolution: "60"
                        }, {
                            text: "1m",
                            resolution: "30"
                        }, {
                            text: "5d",
                            resolution: "5"
                        }, {
                            text: "1d",
                            resolution: "1"
                        }],
                        client_id: "0",
                        user_id: "0",
                        charts_storage_api_version: "1.0",
                        favorites: {
                            intervals: [],
                            chartTypes: []
                        }
                    }
                      , o = function() {
                        function e(e) {
                            if (this._id = "tradingview_" + (1048576 * (1 + Math.random()) | 0).toString(16).substring(1),
                            this._ready = !1,
                            this._readyHandlers = [],
                            this._onWindowResize = this._autoResizeChart.bind(this),
                            !e.datafeed)
                                throw new Error("Datafeed is not defined");
                            if (this._options = t(r, e),
                            e.preset) {
                                var i = n[e.preset];
                                i ? (void 0 !== this._options.disabled_features ? this._options.disabled_features = this._options.disabled_features.concat(i.disabled_features) : this._options.disabled_features = i.disabled_features,
                                void 0 !== this._options.enabled_features ? this._options.enabled_features = this._options.enabled_features.concat(i.enabled_features) : this._options.enabled_features = i.enabled_features) : console.warn("Unknown preset: `" + e.preset + "`")
                            }
                            "Dark" === this._options.theme && void 0 === this._options.loading_screen && (this._options.loading_screen = {
                                backgroundColor: "#131722"
                            }),
                            this._create()
                        }
                        return e.prototype.onChartReady = function(e) {
                            this._ready ? e.call(this) : this._readyHandlers.push(e)
                        }
                        ,
                        e.prototype.onGrayedObjectClicked = function(e) {
                            this._innerAPI().onGrayedObjectClicked(e)
                        }
                        ,
                        e.prototype.onShortcut = function(e, t) {
                            this._innerWindow().createShortcutAction(e, t)
                        }
                        ,
                        e.prototype.subscribe = function(e, t) {
                            this._innerAPI().subscribe(e, t)
                        }
                        ,
                        e.prototype.unsubscribe = function(e, t) {
                            this._innerAPI().unsubscribe(e, t)
                        }
                        ,
                        e.prototype.chart = function(e) {
                            return this._innerAPI().chart(e)
                        }
                        ,
                        e.prototype.setLanguage = function(e) {
                            this.remove(),
                            this._options.locale = e,
                            this._create()
                        }
                        ,
                        e.prototype.setSymbol = function(e, t, i) {
                            this._innerAPI().changeSymbol(e, t + "", i)
                        }
                        ,
                        e.prototype.remove = function() {
                            window.removeEventListener("resize", this._onWindowResize),
                            this._readyHandlers.splice(0, this._readyHandlers.length),
                            delete window[this._id];
                            var e = this._getIFrameElement();
                            e.contentWindow.destroyChart(),
                            e.parentNode && e.parentNode.removeChild(e)
                        }
                        ,
                        e.prototype.closePopupsAndDialogs = function() {
                            this._innerAPI().closePopupsAndDialogs()
                        }
                        ,
                        e.prototype.selectLineTool = function(e) {
                            this._innerAPI().selectLineTool(e)
                        }
                        ,
                        e.prototype.selectedLineTool = function() {
                            return this._innerAPI().selectedLineTool()
                        }
                        ,
                        e.prototype.save = function(e) {
                            this._innerAPI().saveChart(e)
                        }
                        ,
                        e.prototype.load = function(e, t) {
                            this._innerAPI().loadChart({
                                json: e,
                                extendedData: t
                            })
                        }
                        ,
                        e.prototype.getSavedCharts = function(e) {
                            this._innerAPI().getSavedCharts(e)
                        }
                        ,
                        e.prototype.loadChartFromServer = function(e) {
                            this._innerAPI().loadChartFromServer(e)
                        }
                        ,
                        e.prototype.saveChartToServer = function(e, t, i, a) {
                            this._innerAPI().saveChartToServer(e, t, i, a)
                        }
                        ,
                        e.prototype.removeChartFromServer = function(e, t) {
                            this._innerAPI().removeChartFromServer(e, t)
                        }
                        ,
                        e.prototype.onContextMenu = function(e) {
                            this._innerAPI().onContextMenu(e)
                        }
                        ,
                        e.prototype.createButton = function(e) {
                            return this._innerWindow().createButton(e)
                        }
                        ,
                        e.prototype.showNoticeDialog = function(e) {
                            this._innerAPI().showNoticeDialog(e)
                        }
                        ,
                        e.prototype.showConfirmDialog = function(e) {
                            this._innerAPI().showConfirmDialog(e)
                        }
                        ,
                        e.prototype.showLoadChartDialog = function() {
                            this._innerAPI().showLoadChartDialog()
                        }
                        ,
                        e.prototype.showSaveAsChartDialog = function() {
                            this._innerAPI().showSaveAsChartDialog()
                        }
                        ,
                        e.prototype.symbolInterval = function() {
                            return this._innerAPI().getSymbolInterval()
                        }
                        ,
                        e.prototype.mainSeriesPriceFormatter = function() {
                            return this._innerAPI().mainSeriesPriceFormatter()
                        }
                        ,
                        e.prototype.getIntervals = function() {
                            return this._innerAPI().getIntervals()
                        }
                        ,
                        e.prototype.getStudiesList = function() {
                            return this._innerAPI().getStudiesList()
                        }
                        ,
                        e.prototype.addCustomCSSFile = function(e) {
                            this._innerWindow().addCustomCSSFile(e)
                        }
                        ,
                        e.prototype.applyOverrides = function(e) {
                            this._options = t(this._options, {
                                overrides: e
                            }),
                            this._innerWindow().applyOverrides(e)
                        }
                        ,
                        e.prototype.applyStudiesOverrides = function(e) {
                            this._innerWindow().applyStudiesOverrides(e)
                        }
                        ,
                        e.prototype.watchList = function() {
                            return this._innerAPI().watchlist()
                        }
                        ,
                        e.prototype.activeChart = function() {
                            return this._innerAPI().activeChart()
                        }
                        ,
                        e.prototype.chartsCount = function() {
                            return this._innerAPI().chartsCount()
                        }
                        ,
                        e.prototype.layout = function() {
                            return this._innerAPI().layout()
                        }
                        ,
                        e.prototype.setLayout = function(e) {
                            this._innerAPI().setLayout(e)
                        }
                        ,
                        e.prototype.changeTheme = function(e) {
                            this._innerWindow().changeTheme(e)
                        }
                        ,
                        e.prototype.takeScreenshot = function() {
                            this._innerAPI().takeScreenshot()
                        }
                        ,
                        e.prototype.lockAllDrawingTools = function() {
                            return this._innerAPI().lockAllDrawingTools()
                        }
                        ,
                        e.prototype._getIFrameElement = function() {
                            var e = document.getElementById(this._id);
                            if (null === e)
                                throw new Error("There is no such iframe");
                            return e
                        }
                        ,
                        e.prototype._innerAPI = function() {
                            return this._getIFrameElement().contentWindow.tradingViewApi
                        }
                        ,
                        e.prototype._innerWindow = function() {
                            return this._getIFrameElement().contentWindow
                        }
                        ,
                        e.prototype._autoResizeChart = function() {
                            this._options.fullscreen && (this._getIFrameElement().style.height = window.innerHeight + "px")
                        }
                        ,
                        e.prototype._create = function() {
                            var e = this
                              , t = this._render()
                              , i = document.getElementById(this._options.container_id);
                            if (null === i)
                                throw new Error("There is no such element - #" + this._options.container_id);
                            i.innerHTML = t;
                            var a = this._getIFrameElement();
                            (this._options.autosize || this._options.fullscreen) && (a.style.width = "100%",
                            this._options.fullscreen || (a.style.height = "100%")),
                            window.addEventListener("resize", this._onWindowResize),
                            this._onWindowResize(),
                            a.addEventListener("load", function t() {
                                a.removeEventListener("load", t, !1),
                                a.contentWindow.widgetReady(function() {
                                    e._ready = !0;
                                    for (var t = 0, i = e._readyHandlers; t < i.length; t++) {
                                        var n = i[t];
                                        try {
                                            n.call(e)
                                        } catch (e) {
                                            console.error(e)
                                        }
                                    }
                                    a.contentWindow.initializationFinished()
                                })
                            }, !1)
                        }
                        ,
                        e.prototype._render = function() {
                            var e = window;
                            e[this._id] = {
                                datafeed: this._options.datafeed,
                                customFormatters: this._options.customFormatters,
                                brokerFactory: this._options.brokerFactory,
                                overrides: this._options.overrides,
                                studiesOverrides: this._options.studies_overrides,
                                disabledFeatures: this._options.disabled_features,
                                enabledFeatures: this._options.enabled_features,
                                brokerConfig: this._options.brokerConfig,
                                restConfig: this._options.restConfig,
                                favorites: this._options.favorites,
                                logo: this._options.logo,
                                numeric_formatting: this._options.numeric_formatting,
                                rss_news_feed: this._options.rss_news_feed,
                                newsProvider: this._options.news_provider,
                                loadLastChart: this._options.load_last_chart,
                                saveLoadAdapter: this._options.save_load_adapter,
                                loading_screen: this._options.loading_screen,
                                settingsAdapter: this._options.settings_adapter,
                                customIndicatorsUrl: this._options.indicators_file_name
                            },
                            this._options.saved_data && (e[this._id].chartContent = {
                                json: this._options.saved_data
                            });
                            var t = (this._options.library_path || "") + "static/" + this._options.locale + "-tv-chart.d7dbe274632a79fa8b22.html#symbol=" + encodeURIComponent(this._options.symbol) + "&interval=" + encodeURIComponent(this._options.interval) + (this._options.timeframe ? "&timeframe=" + encodeURIComponent(this._options.timeframe) : "") + (this._options.toolbar_bg ? "&toolbarbg=" + this._options.toolbar_bg.replace("#", "") : "") + (this._options.studies_access ? "&studiesAccess=" + encodeURIComponent((0,
                            s.default)(this._options.studies_access)) : "") + "&widgetbar=" + encodeURIComponent((0,
                            s.default)(this._options.widgetbar)) + (this._options.drawings_access ? "&drawingsAccess=" + encodeURIComponent((0,
                            s.default)(this._options.drawings_access)) : "") + "&timeFrames=" + encodeURIComponent((0,
                            s.default)(this._options.time_frames)) + "&locale=" + encodeURIComponent(this._options.locale) + "&uid=" + encodeURIComponent(this._id) + "&clientId=" + encodeURIComponent(String(this._options.client_id)) + "&userId=" + encodeURIComponent(String(this._options.user_id)) + (this._options.charts_storage_url ? "&chartsStorageUrl=" + encodeURIComponent(this._options.charts_storage_url) : "") + (this._options.charts_storage_api_version ? "&chartsStorageVer=" + encodeURIComponent(this._options.charts_storage_api_version) : "") + (this._options.custom_css_url ? "&customCSS=" + encodeURIComponent(this._options.custom_css_url) : "") + (this._options.auto_save_delay ? "&autoSaveDelay=" + encodeURIComponent(String(this._options.auto_save_delay)) : "") + "&debug=" + this._options.debug + (this._options.snapshot_url ? "&snapshotUrl=" + encodeURIComponent(this._options.snapshot_url) : "") + (this._options.timezone ? "&timezone=" + encodeURIComponent(this._options.timezone) : "") + (this._options.study_count_limit ? "&studyCountLimit=" + encodeURIComponent(String(this._options.study_count_limit)) : "") + (this._options.symbol_search_request_delay ? "&ssreqdelay=" + encodeURIComponent(String(this._options.symbol_search_request_delay)) : "") + (this._options.theme ? "&theme=" + encodeURIComponent(String(this._options.theme)) : "");
                            return '<iframe id="' + this._id + '" name="' + this._id + '"  src="' + t + '"' + (this._options.autosize || this._options.fullscreen ? "" : ' width="' + this._options.width + '" height="' + this._options.height + '"') + ' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'
                        }
                        ,
                        e
                    }();
                    window.TradingView = window.TradingView || {},
                    window.TradingView.version = i,
                    e.version = i,
                    e.onready = function(e) {
                        window.addEventListener("DOMContentLoaded", e, !1)
                    }
                    ,
                    e.widget = o,
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                })
            }
            , function(e, t, i) {
                var a = i(0)
                  , n = a.JSON || (a.JSON = {
                    stringify: JSON.stringify
                });
                e.exports = function(e) {
                    return n.stringify.apply(n, arguments)
                }
            }
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    return {
                        overrides: {
                            volumePaneSize: "medium",
                            "scalesProperties.lineColor": e.text,
                            "scalesProperties.textColor": e.text,
                            "paneProperties.background": e.bg,
                            "paneProperties.vertGridProperties.color": e.grid,
                            "paneProperties.horzGridProperties.color": e.grid,
                            "paneProperties.crossHairProperties.color": e.cross,
                            "paneProperties.legendProperties.showLegend": !!e.showLegend,
                            "paneProperties.legendProperties.showStudyArguments": !0,
                            "paneProperties.legendProperties.showStudyTitles": !0,
                            "paneProperties.legendProperties.showStudyValues": !0,
                            "paneProperties.legendProperties.showSeriesTitle": !0,
                            "paneProperties.legendProperties.showSeriesOHLC": !0,
                            "mainSeriesProperties.candleStyle.upColor": e.up,
                            "mainSeriesProperties.candleStyle.downColor": e.down,
                            "mainSeriesProperties.candleStyle.drawWick": !0,
                            "mainSeriesProperties.candleStyle.drawBorder": !0,
                            "mainSeriesProperties.candleStyle.borderColor": e.border,
                            "mainSeriesProperties.candleStyle.borderUpColor": e.up,
                            "mainSeriesProperties.candleStyle.borderDownColor": e.down,
                            "mainSeriesProperties.candleStyle.wickUpColor": e.up,
                            "mainSeriesProperties.candleStyle.wickDownColor": e.down,
                            "mainSeriesProperties.candleStyle.barColorsOnPrevClose": !1,
                            "mainSeriesProperties.hollowCandleStyle.upColor": e.up,
                            "mainSeriesProperties.hollowCandleStyle.downColor": e.down,
                            "mainSeriesProperties.hollowCandleStyle.drawWick": !0,
                            "mainSeriesProperties.hollowCandleStyle.drawBorder": !0,
                            "mainSeriesProperties.hollowCandleStyle.borderColor": e.border,
                            "mainSeriesProperties.hollowCandleStyle.borderUpColor": e.up,
                            "mainSeriesProperties.hollowCandleStyle.borderDownColor": e.down,
                            "mainSeriesProperties.hollowCandleStyle.wickColor": e.line,
                            "mainSeriesProperties.haStyle.upColor": e.up,
                            "mainSeriesProperties.haStyle.downColor": e.down,
                            "mainSeriesProperties.haStyle.drawWick": !0,
                            "mainSeriesProperties.haStyle.drawBorder": !0,
                            "mainSeriesProperties.haStyle.borderColor": e.border,
                            "mainSeriesProperties.haStyle.borderUpColor": e.up,
                            "mainSeriesProperties.haStyle.borderDownColor": e.down,
                            "mainSeriesProperties.haStyle.wickColor": e.border,
                            "mainSeriesProperties.haStyle.barColorsOnPrevClose": !1,
                            "mainSeriesProperties.barStyle.upColor": e.up,
                            "mainSeriesProperties.barStyle.downColor": e.down,
                            "mainSeriesProperties.barStyle.barColorsOnPrevClose": !1,
                            "mainSeriesProperties.barStyle.dontDrawOpen": !1,
                            "mainSeriesProperties.lineStyle.color": e.border,
                            "mainSeriesProperties.lineStyle.linewidth": 1,
                            "mainSeriesProperties.lineStyle.priceSource": "close",
                            "mainSeriesProperties.areaStyle.color1": e.areatop,
                            "mainSeriesProperties.areaStyle.color2": e.areadown,
                            "mainSeriesProperties.areaStyle.linecolor": e.border,
                            "mainSeriesProperties.areaStyle.linewidth": 1,
                            "mainSeriesProperties.areaStyle.priceSource": "close"
                        },
                        studies_overrides: {
                            "volume.volume.color.0": e.down,
                            "volume.volume.color.1": e.up
                        },
                        url: e.url
                    }
                }
                function n(e) {
                    return (0,
                    r.default)(e).reduce(function(t, i) {
                        return t[i] = a(e[i]),
                        t
                    }, {})
                }
                var r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(i(60));
                i(121),
                i(122),
                i(123),
                e.exports = {
                    defaultThemes: {
                        "hb-day": {
                            url: "day.css",
                            up: "#00AC8D",
                            down: "#CF424E",
                            bg: "#ffffff",
                            grid: "#F3F7F9",
                            cross: "#23283D",
                            border: "#98B0C0",
                            text: "#98B0C0",
                            areatop: "rgba(71, 78, 112, 0.1)",
                            areadown: "rgba(71, 78, 112, 0.02)",
                            showLegend: !0
                        },
                        "hb-night": {
                            url: "night.css",
                            up: "#00AC8D",
                            down: "#CF424E",
                            bg: "#0B2636",
                            grid: "#173648",
                            cross: "#9194A3",
                            border: "#51809F",
                            text: "#51809F",
                            areatop: "rgba(122, 152, 247, .1)",
                            areadown: "rgba(122, 152, 247, .02)",
                            showLegend: !0
                        },
                        mobile: {
                            url: "mobile.css",
                            up: "#03C087",
                            down: "#E76D42",
                            bg: "#ffffff",
                            grid: "#f7f8fa",
                            cross: "#23283D",
                            border: "#C5CFD5",
                            text: "#8C9FAD",
                            areatop: "rgba(71, 78, 112, 0.1)",
                            areadown: "rgba(71, 78, 112, 0.02)",
                            showLegend: !0
                        }
                    },
                    generateTheme: a,
                    getOverridesByThemeName: function(e, t) {
                        return e[t] ? n(e)[t] : {}
                    },
                    populateTheme: n
                }
            }
            , function(e, t, i) {
                i(120),
                e.exports = i(0).Object.keys
            }
            , function(e, t, i) {
                var a = i(23)
                  , n = i(16);
                i(51)("keys", function() {
                    return function(e) {
                        return n(a(e))
                    }
                })
            }
            , function(e, t) {}
            , function(e, t) {}
            , function(e, t) {}
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                function n(e, t, i) {
                    var a = new FileReader;
                    if (i)
                        a.addEventListener("loadend", function() {
                            for (var e = "", i = new Uint8Array(a.result), n = i.byteLength, r = 0; r < n; r++)
                                e += String.fromCharCode(i[r]);
                            t(e)
                        }),
                        a.readAsArrayBuffer(e);
                    else {
                        a.addEventListener("loadend", function() {
                            t(a.result)
                        });
                        try {
                            a.readAsBinaryString(e)
                        } catch (i) {
                            n(e, t, !0)
                        }
                    }
                }
                var r = a(i(60))
                  , o = a(i(26))
                  , s = a(i(125))
                  , c = a(i(128))
                  , l = a(i(58))
                  , u = a(i(53))
                  , d = a(i(54))
                  , h = i(59)
                  , f = a(i(61))
                  , p = a(i(66))
                  , m = a(i(146))
                  , g = (0,
                p.default)("__debug_huobi:ws")
                  , v = (0,
                p.default)("__debug_huobi:tv")
                  , _ = new f.default;
                e.exports = function() {
                    function e(t, i, a, n, r) {
                        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 300;
                        (0,
                        u.default)(this, e),
                        this.ws = t,
                        this.pair = i,
                        this.period = a,
                        this.symbols = n,
                        this.timezone = r,
                        this.maxBars = o,
                        this.serverTime = null,
                        this.setPair = this.setPair.bind(this),
                        this.setPeriod = this.setPeriod.bind(this),
                        this.barCache = {}
                    }
                    return (0,
                    d.default)(e, [{
                        key: "setPair",
                        value: function(e) {
                            this.pair = e
                        }
                    }, {
                        key: "setPeriod",
                        value: function(e) {
                            this.period = e
                        }
                    }, {
                        key: "send",
                        value: function(e) {
                            g("sending ", e);
                            try {
                                var t = "string" == typeof e ? e : (0,
                                l.default)(e);
                                this.ws.send(t)
                            } catch (t) {
                                console.error("invalid json: ", e),
                                console.error(t.stack)
                            }
                        }
                    }, {
                        key: "getChannel",
                        value: function(e) {
                            var t = "1min";
                            return e ? (t = (0,
                            h.getHuobiPeriodByInterval)(e),
                            this.setPeriod(t)) : t = this.period,
                            "market." + this.pair + ".kline." + t
                        }
                    }, {
                        key: "onReady",
                        value: function(e) {
                            var t = this
                              , i = {
                                symbols_types: [],
                                supported_resolutions: [1, 5, 15, 30, 60, 240, "1D", "5D", "1W", "1M"],
                                supports_marks: !1,
                                supports_timescale_marks: !1,
                                supports_time: !0
                            };
                            _.on("hb.ping", function(e) {
                                t.serverTime = parseInt(e / 1e3, 0)
                            });
                            var a = {};
                            a.onopen = this.ws.onopen,
                            1 === this.ws.readyState && setTimeout(function() {
                                return e(i)
                            }, 0),
                            this.ws.onopen = function() {
                                a.onopen(),
                                e(i)
                            }
                            ,
                            a.onmessage = this.ws.onmessage,
                            this.ws.onmessage = function() {
                                var e = (0,
                                c.default)(s.default.mark(function e(i) {
                                    var r, o;
                                    return s.default.wrap(function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                new FileReader,
                                                r = void 0,
                                                o = function(e) {
                                                    g("finally receive msg: ", e),
                                                    a.onmessage(i),
                                                    t.dispatchMsg(e)
                                                }
                                                ,
                                                e.prev = 3,
                                                r = JSON.parse(i.data),
                                                o(r),
                                                e.next = 13;
                                                break;
                                            case 8:
                                                if (e.prev = 8,
                                                e.t0 = e.catch(3),
                                                "string" != typeof i.data) {
                                                    e.next = 12;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 12:
                                                n(i.data, function(e) {
                                                    r = JSON.parse(m.default.inflate(e, {
                                                        to: "string"
                                                    })),
                                                    o(r)
                                                });
                                            case 13:
                                            case "end":
                                                return e.stop()
                                            }
                                    }, e, t, [[3, 8]])
                                }));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }
                    }, {
                        key: "resolveSymbol",
                        value: function(e, t, i) {
                            var a = this;
                            setTimeout(function() {
                                try {
                                    var n = a.symbols.filter(function(t) {
                                        return t["symbol-name"] === e
                                    })
                                      , r = (0,
                                    o.default)(n, 1)[0];
                                    if (!r)
                                        throw new Error("no such symbol");
                                    t({
                                        name: e,
                                        ticker: e,
                                        description: "",
                                        session: "24x7",
                                        minmov: 1,
                                        pricescale: Number("1e" + r["trade-price-precision"]),
                                        volumescale: Number("1e" + r["trade-amount-precision"]),
                                        timezone: a.timezone || "Asia/Shanghai",
                                        has_intraday: !0,
                                        has_daily: !0,
                                        has_weekly_and_monthly: !1
                                    })
                                } catch (e) {
                                    i(e)
                                }
                            }, 0)
                        }
                    }, {
                        key: "getBars",
                        value: function(e, t, i, a, n, r, o) {
                            var s = this;
                            v("req from, to: [%s, %s]", i, a),
                            a = o ? parseInt(+new Date / 1e3, 10) : a;
                            var c = this.getAPITimeRange([], i, a, this.getStepByResolution(t))
                              , l = +new Date + "." + c.length;
                            c.forEach(function(e, i) {
                                var a = e.from
                                  , n = e.to;
                                s.send({
                                    id: l + "." + i,
                                    req: s.getChannel(t),
                                    from: a,
                                    to: n
                                })
                            }),
                            _.on("hb.rep", function(e) {
                                g("TARGETING-getBars.rep"),
                                s.combineBars(e, t)
                            }),
                            _.on("hb.bar-ready", function(e) {
                                var t = e.id
                                  , i = e.bars;
                                g("bar ready for %s", t),
                                n(i, {
                                    noData: !i.length
                                }),
                                _.off("hb.rep"),
                                _.off("hb.bar-ready")
                            }),
                            _.once("hb.reqerror", function(e) {
                                return r(e)
                            })
                        }
                    }, {
                        key: "combineBars",
                        value: function(e, t) {
                            var i = this
                              , a = e.id
                              , n = e.data;
                            if (a) {
                                var s = a.split(".")
                                  , c = (0,
                                o.default)(s, 3)
                                  , l = c[0]
                                  , u = c[1]
                                  , d = c[2];
                                v("p:", this.period),
                                this.barCache[l] || (this.barCache[l] = {}),
                                this.barCache[l][d] = n;
                                var h = (0,
                                r.default)(this.barCache[l]);
                                if (h.length === +u) {
                                    var f = h.reduce(function(e, t) {
                                        return e.concat(i.barCache[l][t].map(function(e) {
                                            return {
                                                time: 1e3 * e.id,
                                                close: e.close,
                                                open: e.open,
                                                high: e.high,
                                                low: e.low,
                                                volume: e.amount
                                            }
                                        }))
                                    }, []);
                                    _.emit("hb.bar-ready", {
                                        id: a,
                                        bars: f
                                    }),
                                    delete this.barCache[l]
                                }
                            }
                        }
                    }, {
                        key: "subscribeBars",
                        value: function(e, t, i, a, n) {
                            v("subscribeBars()", arguments);
                            var r = this.getChannel();
                            this.send({
                                sub: r
                            }),
                            _.on("hb.sub", function(e) {
                                var t = e.tick
                                  , a = +new Date;
                                g("subscribe id: %s", t.id, a),
                                i({
                                    time: 1e3 * t.id,
                                    close: t.close,
                                    open: t.open,
                                    high: t.high,
                                    low: t.low,
                                    volume: t.amount
                                })
                            })
                        }
                    }, {
                        key: "unsubscribeBars",
                        value: function(e) {
                            _.off("hb.sub"),
                            this.send({
                                unsub: this.getChannel()
                            })
                        }
                    }, {
                        key: "getServerTime",
                        value: function(e) {
                            g("get server time, %s", this.serverTime),
                            this.serverTime && e(this.serverTime)
                        }
                    }, {
                        key: "getAPITimeRange",
                        value: function(e, t, i, a) {
                            v("getAPITimeRange()", t, i, a);
                            var n = 1325347200
                              , r = 2524579200;
                            return i < n ? [{
                                from: n,
                                to: n
                            }] : t > r ? [{
                                from: r,
                                to: r
                            }] : (t < n && (t = n),
                            i > r && (i = r),
                            function t(a, n) {
                                return a + n > i ? (e.push({
                                    from: a,
                                    to: i
                                }),
                                v("result: %j", e),
                                e) : (e.push({
                                    from: a,
                                    to: a + n
                                }),
                                t(a + n + 1, n))
                            }(t, a))
                        }
                    }, {
                        key: "getStepByResolution",
                        value: function(e) {
                            return (0,
                            h.resolutionInSeconds)(e) * this.maxBars
                        }
                    }, {
                        key: "dispatchMsg",
                        value: function(e) {
                            g("dispatching %s", (0,
                            l.default)(e).substr(0, 200)),
                            e.rep && this.isValidChannel(e.rep) ? _.emit("hb.rep", e) : e.ch && this.isValidChannel(e.ch) ? _.emit("hb.sub", e) : "error" === e.status && e["err-msg"].includes("req") && _.emit("hb.reqerror", e["err-msg"])
                        }
                    }, {
                        key: "isValidChannel",
                        value: function(e) {
                            try {
                                var t = e.split(".")
                                  , i = (0,
                                o.default)(t, 4)
                                  , a = (i[0],
                                i[1])
                                  , n = i[2]
                                  , r = i[3];
                                return g("period: ", r, this.period),
                                g("pair: ", a, this.pair),
                                a === this.pair && "kline" === n && r === this.period
                            } catch (t) {
                                return g("split fail, not a valid channel?", e),
                                !1
                            }
                        }
                    }]),
                    e
                }()
            }
            , function(e, t, i) {
                e.exports = i(126)
            }
            , function(e, t, i) {
                var a = function() {
                    return this
                }() || Function("return this")()
                  , n = a.regeneratorRuntime && Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime") >= 0
                  , r = n && a.regeneratorRuntime;
                if (a.regeneratorRuntime = void 0,
                e.exports = i(127),
                n)
                    a.regeneratorRuntime = r;
                else
                    try {
                        delete a.regeneratorRuntime
                    } catch (e) {
                        a.regeneratorRuntime = void 0
                    }
            }
            , function(e, t) {
                !function(t) {
                    "use strict";
                    function i(e, t, i, r) {
                        var o = t && t.prototype instanceof n ? t : n
                          , s = Object.create(o.prototype)
                          , c = new h(r || []);
                        return s._invoke = function(e, t, i) {
                            var n = k;
                            return function(r, o) {
                                if (n === T)
                                    throw new Error("Generator is already running");
                                if (n === P) {
                                    if ("throw" === r)
                                        throw o;
                                    return p()
                                }
                                for (i.method = r,
                                i.arg = o; ; ) {
                                    var s = i.delegate;
                                    if (s) {
                                        var c = l(s, i);
                                        if (c) {
                                            if (c === L)
                                                continue;
                                            return c
                                        }
                                    }
                                    if ("next" === i.method)
                                        i.sent = i._sent = i.arg;
                                    else if ("throw" === i.method) {
                                        if (n === k)
                                            throw n = P,
                                            i.arg;
                                        i.dispatchException(i.arg)
                                    } else
                                        "return" === i.method && i.abrupt("return", i.arg);
                                    n = T;
                                    var u = a(e, t, i);
                                    if ("normal" === u.type) {
                                        if (n = i.done ? P : S,
                                        u.arg === L)
                                            continue;
                                        return {
                                            value: u.arg,
                                            done: i.done
                                        }
                                    }
                                    "throw" === u.type && (n = P,
                                    i.method = "throw",
                                    i.arg = u.arg)
                                }
                            }
                        }(e, i, c),
                        s
                    }
                    function a(e, t, i) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, i)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    function n() {}
                    function r() {}
                    function o() {}
                    function s(e) {
                        ["next", "throw", "return"].forEach(function(t) {
                            e[t] = function(e) {
                                return this._invoke(t, e)
                            }
                        })
                    }
                    function c(e) {
                        function t(i, n, r, o) {
                            var s = a(e[i], e, n);
                            if ("throw" !== s.type) {
                                var c = s.arg
                                  , l = c.value;
                                return l && "object" == typeof l && v.call(l, "__await") ? Promise.resolve(l.__await).then(function(e) {
                                    t("next", e, r, o)
                                }, function(e) {
                                    t("throw", e, r, o)
                                }) : Promise.resolve(l).then(function(e) {
                                    c.value = e,
                                    r(c)
                                }, o)
                            }
                            o(s.arg)
                        }
                        var i;
                        this._invoke = function(e, a) {
                            function n() {
                                return new Promise(function(i, n) {
                                    t(e, a, i, n)
                                }
                                )
                            }
                            return i = i ? i.then(n, n) : n()
                        }
                    }
                    function l(e, t) {
                        var i = e.iterator[t.method];
                        if (i === m) {
                            if (t.delegate = null,
                            "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return",
                                t.arg = m,
                                l(e, t),
                                "throw" === t.method))
                                    return L;
                                t.method = "throw",
                                t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return L
                        }
                        var n = a(i, e.iterator, t.arg);
                        if ("throw" === n.type)
                            return t.method = "throw",
                            t.arg = n.arg,
                            t.delegate = null,
                            L;
                        var r = n.arg;
                        return r ? r.done ? (t[e.resultName] = r.value,
                        t.next = e.nextLoc,
                        "return" !== t.method && (t.method = "next",
                        t.arg = m),
                        t.delegate = null,
                        L) : r : (t.method = "throw",
                        t.arg = new TypeError("iterator result is not an object"),
                        t.delegate = null,
                        L)
                    }
                    function u(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]),
                        2 in e && (t.finallyLoc = e[2],
                        t.afterLoc = e[3]),
                        this.tryEntries.push(t)
                    }
                    function d(e) {
                        var t = e.completion || {};
                        t.type = "normal",
                        delete t.arg,
                        e.completion = t
                    }
                    function h(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }],
                        e.forEach(u, this),
                        this.reset(!0)
                    }
                    function f(e) {
                        if (e) {
                            var t = e[b];
                            if (t)
                                return t.call(e);
                            if ("function" == typeof e.next)
                                return e;
                            if (!isNaN(e.length)) {
                                var i = -1
                                  , a = function t() {
                                    for (; ++i < e.length; )
                                        if (v.call(e, i))
                                            return t.value = e[i],
                                            t.done = !1,
                                            t;
                                    return t.value = m,
                                    t.done = !0,
                                    t
                                };
                                return a.next = a
                            }
                        }
                        return {
                            next: p
                        }
                    }
                    function p() {
                        return {
                            value: m,
                            done: !0
                        }
                    }
                    var m, g = Object.prototype, v = g.hasOwnProperty, _ = "function" == typeof Symbol ? Symbol : {}, b = _.iterator || "@@iterator", y = _.asyncIterator || "@@asyncIterator", w = _.toStringTag || "@@toStringTag", C = "object" == typeof e, x = t.regeneratorRuntime;
                    if (x)
                        C && (e.exports = x);
                    else {
                        (x = t.regeneratorRuntime = C ? e.exports : {}).wrap = i;
                        var k = "suspendedStart"
                          , S = "suspendedYield"
                          , T = "executing"
                          , P = "completed"
                          , L = {}
                          , D = {};
                        D[b] = function() {
                            return this
                        }
                        ;
                        var A = Object.getPrototypeOf
                          , M = A && A(A(f([])));
                        M && M !== g && v.call(M, b) && (D = M);
                        var O = o.prototype = n.prototype = Object.create(D);
                        r.prototype = O.constructor = o,
                        o.constructor = r,
                        o[w] = r.displayName = "GeneratorFunction",
                        x.isGeneratorFunction = function(e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === r || "GeneratorFunction" === (t.displayName || t.name))
                        }
                        ,
                        x.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : (e.__proto__ = o,
                            w in e || (e[w] = "GeneratorFunction")),
                            e.prototype = Object.create(O),
                            e
                        }
                        ,
                        x.awrap = function(e) {
                            return {
                                __await: e
                            }
                        }
                        ,
                        s(c.prototype),
                        c.prototype[y] = function() {
                            return this
                        }
                        ,
                        x.AsyncIterator = c,
                        x.async = function(e, t, a, n) {
                            var r = new c(i(e, t, a, n));
                            return x.isGeneratorFunction(t) ? r : r.next().then(function(e) {
                                return e.done ? e.value : r.next()
                            })
                        }
                        ,
                        s(O),
                        O[w] = "Generator",
                        O[b] = function() {
                            return this
                        }
                        ,
                        O.toString = function() {
                            return "[object Generator]"
                        }
                        ,
                        x.keys = function(e) {
                            var t = [];
                            for (var i in e)
                                t.push(i);
                            return t.reverse(),
                            function i() {
                                for (; t.length; ) {
                                    var a = t.pop();
                                    if (a in e)
                                        return i.value = a,
                                        i.done = !1,
                                        i
                                }
                                return i.done = !0,
                                i
                            }
                        }
                        ,
                        x.values = f,
                        h.prototype = {
                            constructor: h,
                            reset: function(e) {
                                if (this.prev = 0,
                                this.next = 0,
                                this.sent = this._sent = m,
                                this.done = !1,
                                this.delegate = null,
                                this.method = "next",
                                this.arg = m,
                                this.tryEntries.forEach(d),
                                !e)
                                    for (var t in this)
                                        "t" === t.charAt(0) && v.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = m)
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type)
                                    throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(e) {
                                function t(t, a) {
                                    return r.type = "throw",
                                    r.arg = e,
                                    i.next = t,
                                    a && (i.method = "next",
                                    i.arg = m),
                                    !!a
                                }
                                if (this.done)
                                    throw e;
                                for (var i = this, a = this.tryEntries.length - 1; a >= 0; --a) {
                                    var n = this.tryEntries[a]
                                      , r = n.completion;
                                    if ("root" === n.tryLoc)
                                        return t("end");
                                    if (n.tryLoc <= this.prev) {
                                        var o = v.call(n, "catchLoc")
                                          , s = v.call(n, "finallyLoc");
                                        if (o && s) {
                                            if (this.prev < n.catchLoc)
                                                return t(n.catchLoc, !0);
                                            if (this.prev < n.finallyLoc)
                                                return t(n.finallyLoc)
                                        } else if (o) {
                                            if (this.prev < n.catchLoc)
                                                return t(n.catchLoc, !0)
                                        } else {
                                            if (!s)
                                                throw new Error("try statement without catch or finally");
                                            if (this.prev < n.finallyLoc)
                                                return t(n.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var a = this.tryEntries[i];
                                    if (a.tryLoc <= this.prev && v.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                        var n = a;
                                        break
                                    }
                                }
                                n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                                var r = n ? n.completion : {};
                                return r.type = e,
                                r.arg = t,
                                n ? (this.method = "next",
                                this.next = n.finallyLoc,
                                L) : this.complete(r)
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type)
                                    throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                                this.method = "return",
                                this.next = "end") : "normal" === e.type && t && (this.next = t),
                                L
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var i = this.tryEntries[t];
                                    if (i.finallyLoc === e)
                                        return this.complete(i.completion, i.afterLoc),
                                        d(i),
                                        L
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var i = this.tryEntries[t];
                                    if (i.tryLoc === e) {
                                        var a = i.completion;
                                        if ("throw" === a.type) {
                                            var n = a.arg;
                                            d(i)
                                        }
                                        return n
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(e, t, i) {
                                return this.delegate = {
                                    iterator: f(e),
                                    resultName: t,
                                    nextLoc: i
                                },
                                "next" === this.method && (this.arg = m),
                                L
                            }
                        }
                    }
                }(function() {
                    return this
                }() || Function("return this")())
            }
            , function(e, t, i) {
                "use strict";
                t.__esModule = !0;
                var a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(i(129));
                t.default = function(e) {
                    return function() {
                        var t = e.apply(this, arguments);
                        return new a.default(function(e, i) {
                            return function n(r, o) {
                                try {
                                    var s = t[r](o)
                                      , c = s.value
                                } catch (e) {
                                    return void i(e)
                                }
                                if (!s.done)
                                    return a.default.resolve(c).then(function(e) {
                                        n("next", e)
                                    }, function(e) {
                                        n("throw", e)
                                    });
                                e(c)
                            }("next")
                        }
                        )
                    }
                }
            }
            , function(e, t, i) {
                e.exports = {
                    default: i(130),
                    __esModule: !0
                }
            }
            , function(e, t, i) {
                i(57),
                i(24),
                i(17),
                i(131),
                i(141),
                i(142),
                e.exports = i(0).Promise
            }
            , function(e, t, i) {
                "use strict";
                var a, n, r, o, s = i(18), c = i(2), l = i(15), u = i(35), d = i(3), h = i(9), f = i(19), p = i(132), m = i(133), g = i(62), v = i(63).set, _ = i(137)(), b = i(40), y = i(64), w = i(65), C = "Promise", x = c.TypeError, k = c.process, S = c[C], T = "process" == u(k), P = function() {}, L = n = b.f, D = !!function() {
                    try {
                        var e = S.resolve(1)
                          , t = (e.constructor = {})[i(1)("species")] = function(e) {
                            e(P, P)
                        }
                        ;
                        return (T || "function" == typeof PromiseRejectionEvent) && e.then(P)instanceof t
                    } catch (e) {}
                }(), A = function(e) {
                    var t;
                    return !(!h(e) || "function" != typeof (t = e.then)) && t
                }, M = function(e, t) {
                    if (!e._n) {
                        e._n = !0;
                        var i = e._c;
                        _(function() {
                            for (var a = e._v, n = 1 == e._s, r = 0, o = function(t) {
                                var i, r, o = n ? t.ok : t.fail, s = t.resolve, c = t.reject, l = t.domain;
                                try {
                                    o ? (n || (2 == e._h && R(e),
                                    e._h = 1),
                                    !0 === o ? i = a : (l && l.enter(),
                                    i = o(a),
                                    l && l.exit()),
                                    i === t.promise ? c(x("Promise-chain cycle")) : (r = A(i)) ? r.call(i, s, c) : s(i)) : c(a)
                                } catch (e) {
                                    c(e)
                                }
                            }; i.length > r; )
                                o(i[r++]);
                            e._c = [],
                            e._n = !1,
                            t && !e._h && O(e)
                        })
                    }
                }, O = function(e) {
                    v.call(c, function() {
                        var t, i, a, n = e._v, r = F(e);
                        if (r && (t = y(function() {
                            T ? k.emit("unhandledRejection", n, e) : (i = c.onunhandledrejection) ? i({
                                promise: e,
                                reason: n
                            }) : (a = c.console) && a.error && a.error("Unhandled promise rejection", n)
                        }),
                        e._h = T || F(e) ? 2 : 1),
                        e._a = void 0,
                        r && t.e)
                            throw t.v
                    })
                }, F = function(e) {
                    if (1 == e._h)
                        return !1;
                    for (var t, i = e._a || e._c, a = 0; i.length > a; )
                        if ((t = i[a++]).fail || !F(t.promise))
                            return !1;
                    return !0
                }, R = function(e) {
                    v.call(c, function() {
                        var t;
                        T ? k.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({
                            promise: e,
                            reason: e._v
                        })
                    })
                }, $ = function(e) {
                    var t = this;
                    t._d || (t._d = !0,
                    (t = t._w || t)._v = e,
                    t._s = 2,
                    t._a || (t._a = t._c.slice()),
                    M(t, !0))
                }, I = function(e) {
                    var t, i = this;
                    if (!i._d) {
                        i._d = !0,
                        i = i._w || i;
                        try {
                            if (i === e)
                                throw x("Promise can't be resolved itself");
                            (t = A(e)) ? _(function() {
                                var a = {
                                    _w: i,
                                    _d: !1
                                };
                                try {
                                    t.call(e, l(I, a, 1), l($, a, 1))
                                } catch (e) {
                                    $.call(a, e)
                                }
                            }) : (i._v = e,
                            i._s = 1,
                            M(i, !1))
                        } catch (e) {
                            $.call({
                                _w: i,
                                _d: !1
                            }, e)
                        }
                    }
                };
                D || (S = function(e) {
                    p(this, S, C, "_h"),
                    f(e),
                    a.call(this);
                    try {
                        e(l(I, this, 1), l($, this, 1))
                    } catch (e) {
                        $.call(this, e)
                    }
                }
                ,
                (a = function(e) {
                    this._c = [],
                    this._a = void 0,
                    this._s = 0,
                    this._d = !1,
                    this._v = void 0,
                    this._h = 0,
                    this._n = !1
                }
                ).prototype = i(138)(S.prototype, {
                    then: function(e, t) {
                        var i = L(g(this, S));
                        return i.ok = "function" != typeof e || e,
                        i.fail = "function" == typeof t && t,
                        i.domain = T ? k.domain : void 0,
                        this._c.push(i),
                        this._a && this._a.push(i),
                        this._s && M(this, !1),
                        i.promise
                    },
                    catch: function(e) {
                        return this.then(void 0, e)
                    }
                }),
                r = function() {
                    var e = new a;
                    this.promise = e,
                    this.resolve = l(I, e, 1),
                    this.reject = l($, e, 1)
                }
                ,
                b.f = L = function(e) {
                    return e === S || e === o ? new r(e) : n(e)
                }
                ),
                d(d.G + d.W + d.F * !D, {
                    Promise: S
                }),
                i(22)(S, C),
                i(139)(C),
                o = i(0)[C],
                d(d.S + d.F * !D, C, {
                    reject: function(e) {
                        var t = L(this);
                        return (0,
                        t.reject)(e),
                        t.promise
                    }
                }),
                d(d.S + d.F * (s || !D), C, {
                    resolve: function(e) {
                        return w(s && this === o ? S : this, e)
                    }
                }),
                d(d.S + d.F * !(D && i(140)(function(e) {
                    S.all(e).catch(P)
                })), C, {
                    all: function(e) {
                        var t = this
                          , i = L(t)
                          , a = i.resolve
                          , n = i.reject
                          , r = y(function() {
                            var i = []
                              , r = 0
                              , o = 1;
                            m(e, !1, function(e) {
                                var s = r++
                                  , c = !1;
                                i.push(void 0),
                                o++,
                                t.resolve(e).then(function(e) {
                                    c || (c = !0,
                                    i[s] = e,
                                    --o || a(i))
                                }, n)
                            }),
                            --o || a(i)
                        });
                        return r.e && n(r.v),
                        i.promise
                    },
                    race: function(e) {
                        var t = this
                          , i = L(t)
                          , a = i.reject
                          , n = y(function() {
                            m(e, !1, function(e) {
                                t.resolve(e).then(i.resolve, a)
                            })
                        });
                        return n.e && a(n.v),
                        i.promise
                    }
                })
            }
            , function(e, t) {
                e.exports = function(e, t, i, a) {
                    if (!(e instanceof t) || void 0 !== a && a in e)
                        throw TypeError(i + ": incorrect invocation!");
                    return e
                }
            }
            , function(e, t, i) {
                var a = i(15)
                  , n = i(134)
                  , r = i(135)
                  , o = i(4)
                  , s = i(47)
                  , c = i(50)
                  , l = {}
                  , u = {};
                (t = e.exports = function(e, t, i, d, h) {
                    var f, p, m, g, v = h ? function() {
                        return e
                    }
                    : c(e), _ = a(i, d, t ? 2 : 1), b = 0;
                    if ("function" != typeof v)
                        throw TypeError(e + " is not iterable!");
                    if (r(v)) {
                        for (f = s(e.length); f > b; b++)
                            if ((g = t ? _(o(p = e[b])[0], p[1]) : _(e[b])) === l || g === u)
                                return g
                    } else
                        for (m = v.call(e); !(p = m.next()).done; )
                            if ((g = n(m, _, p.value, t)) === l || g === u)
                                return g
                }
                ).BREAK = l,
                t.RETURN = u
            }
            , function(e, t, i) {
                var a = i(4);
                e.exports = function(e, t, i, n) {
                    try {
                        return n ? t(a(i)[0], i[1]) : t(i)
                    } catch (t) {
                        var r = e.return;
                        throw void 0 !== r && a(r.call(e)),
                        t
                    }
                }
            }
            , function(e, t, i) {
                var a = i(11)
                  , n = i(1)("iterator")
                  , r = Array.prototype;
                e.exports = function(e) {
                    return void 0 !== e && (a.Array === e || r[n] === e)
                }
            }
            , function(e, t) {
                e.exports = function(e, t, i) {
                    var a = void 0 === i;
                    switch (t.length) {
                    case 0:
                        return a ? e() : e.call(i);
                    case 1:
                        return a ? e(t[0]) : e.call(i, t[0]);
                    case 2:
                        return a ? e(t[0], t[1]) : e.call(i, t[0], t[1]);
                    case 3:
                        return a ? e(t[0], t[1], t[2]) : e.call(i, t[0], t[1], t[2]);
                    case 4:
                        return a ? e(t[0], t[1], t[2], t[3]) : e.call(i, t[0], t[1], t[2], t[3])
                    }
                    return e.apply(i, t)
                }
            }
            , function(e, t, i) {
                var a = i(2)
                  , n = i(63).set
                  , r = a.MutationObserver || a.WebKitMutationObserver
                  , o = a.process
                  , s = a.Promise
                  , c = "process" == i(14)(o);
                e.exports = function() {
                    var e, t, i, l = function() {
                        var a, n;
                        for (c && (a = o.domain) && a.exit(); e; ) {
                            n = e.fn,
                            e = e.next;
                            try {
                                n()
                            } catch (a) {
                                throw e ? i() : t = void 0,
                                a
                            }
                        }
                        t = void 0,
                        a && a.enter()
                    };
                    if (c)
                        i = function() {
                            o.nextTick(l)
                        }
                        ;
                    else if (r) {
                        var u = !0
                          , d = document.createTextNode("");
                        new r(l).observe(d, {
                            characterData: !0
                        }),
                        i = function() {
                            d.data = u = !u
                        }
                    } else if (s && s.resolve) {
                        var h = s.resolve();
                        i = function() {
                            h.then(l)
                        }
                    } else
                        i = function() {
                            n.call(a, l)
                        }
                        ;
                    return function(a) {
                        var n = {
                            fn: a,
                            next: void 0
                        };
                        t && (t.next = n),
                        e || (e = n,
                        i()),
                        t = n
                    }
                }
            }
            , function(e, t, i) {
                var a = i(8);
                e.exports = function(e, t, i) {
                    for (var n in t)
                        i && e[n] ? e[n] = t[n] : a(e, n, t[n]);
                    return e
                }
            }
            , function(e, t, i) {
                "use strict";
                var a = i(2)
                  , n = i(0)
                  , r = i(5)
                  , o = i(6)
                  , s = i(1)("species");
                e.exports = function(e) {
                    var t = "function" == typeof n[e] ? n[e] : a[e];
                    o && t && !t[s] && r.f(t, s, {
                        configurable: !0,
                        get: function() {
                            return this
                        }
                    })
                }
            }
            , function(e, t, i) {
                var a = i(1)("iterator")
                  , n = !1;
                try {
                    var r = [7][a]();
                    r.return = function() {
                        n = !0
                    }
                    ,
                    Array.from(r, function() {
                        throw 2
                    })
                } catch (e) {}
                e.exports = function(e, t) {
                    if (!t && !n)
                        return !1;
                    var i = !1;
                    try {
                        var r = [7]
                          , o = r[a]();
                        o.next = function() {
                            return {
                                done: i = !0
                            }
                        }
                        ,
                        r[a] = function() {
                            return o
                        }
                        ,
                        e(r)
                    } catch (e) {}
                    return i
                }
            }
            , function(e, t, i) {
                "use strict";
                var a = i(3)
                  , n = i(0)
                  , r = i(2)
                  , o = i(62)
                  , s = i(65);
                a(a.P + a.R, "Promise", {
                    finally: function(e) {
                        var t = o(this, n.Promise || r.Promise)
                          , i = "function" == typeof e;
                        return this.then(i ? function(i) {
                            return s(t, e()).then(function() {
                                return i
                            })
                        }
                        : e, i ? function(i) {
                            return s(t, e()).then(function() {
                                throw i
                            })
                        }
                        : e)
                    }
                })
            }
            , function(e, t, i) {
                "use strict";
                var a = i(3)
                  , n = i(40)
                  , r = i(64);
                a(a.S, "Promise", {
                    try: function(e) {
                        var t = n.f(this)
                          , i = r(e);
                        return (i.e ? t.reject : t.resolve)(i.v),
                        t.promise
                    }
                })
            }
            , function(e, t) {
                function i() {
                    throw new Error("setTimeout has not been defined")
                }
                function a() {
                    throw new Error("clearTimeout has not been defined")
                }
                function n(e) {
                    if (l === setTimeout)
                        return setTimeout(e, 0);
                    if ((l === i || !l) && setTimeout)
                        return l = setTimeout,
                        setTimeout(e, 0);
                    try {
                        return l(e, 0)
                    } catch (t) {
                        try {
                            return l.call(null, e, 0)
                        } catch (t) {
                            return l.call(this, e, 0)
                        }
                    }
                }
                function r() {
                    p && h && (p = !1,
                    h.length ? f = h.concat(f) : m = -1,
                    f.length && o())
                }
                function o() {
                    if (!p) {
                        var e = n(r);
                        p = !0;
                        for (var t = f.length; t; ) {
                            for (h = f,
                            f = []; ++m < t; )
                                h && h[m].run();
                            m = -1,
                            t = f.length
                        }
                        h = null,
                        p = !1,
                        function(e) {
                            if (u === clearTimeout)
                                return clearTimeout(e);
                            if ((u === a || !u) && clearTimeout)
                                return u = clearTimeout,
                                clearTimeout(e);
                            try {
                                u(e)
                            } catch (t) {
                                try {
                                    return u.call(null, e)
                                } catch (t) {
                                    return u.call(this, e)
                                }
                            }
                        }(e)
                    }
                }
                function s(e, t) {
                    this.fun = e,
                    this.array = t
                }
                function c() {}
                var l, u, d = e.exports = {};
                !function() {
                    try {
                        l = "function" == typeof setTimeout ? setTimeout : i
                    } catch (e) {
                        l = i
                    }
                    try {
                        u = "function" == typeof clearTimeout ? clearTimeout : a
                    } catch (e) {
                        u = a
                    }
                }();
                var h, f = [], p = !1, m = -1;
                d.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var i = 1; i < arguments.length; i++)
                            t[i - 1] = arguments[i];
                    f.push(new s(e,t)),
                    1 !== f.length || p || n(o)
                }
                ,
                s.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }
                ,
                d.title = "browser",
                d.browser = !0,
                d.env = {},
                d.argv = [],
                d.version = "",
                d.versions = {},
                d.on = c,
                d.addListener = c,
                d.once = c,
                d.off = c,
                d.removeListener = c,
                d.removeAllListeners = c,
                d.emit = c,
                d.prependListener = c,
                d.prependOnceListener = c,
                d.listeners = function(e) {
                    return []
                }
                ,
                d.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }
                ,
                d.cwd = function() {
                    return "/"
                }
                ,
                d.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }
                ,
                d.umask = function() {
                    return 0
                }
            }
            , function(e, t, i) {
                function a(e) {
                    function i() {
                        if (i.enabled) {
                            var e = i
                              , n = +new Date
                              , r = n - (a || n);
                            e.diff = r,
                            e.prev = a,
                            e.curr = n,
                            a = n;
                            for (var o = new Array(arguments.length), s = 0; s < o.length; s++)
                                o[s] = arguments[s];
                            o[0] = t.coerce(o[0]),
                            "string" != typeof o[0] && o.unshift("%O");
                            var c = 0;
                            o[0] = o[0].replace(/%([a-zA-Z%])/g, function(i, a) {
                                if ("%%" === i)
                                    return i;
                                c++;
                                var n = t.formatters[a];
                                if ("function" == typeof n) {
                                    var r = o[c];
                                    i = n.call(e, r),
                                    o.splice(c, 1),
                                    c--
                                }
                                return i
                            }),
                            t.formatArgs.call(e, o),
                            (i.log || t.log || console.log.bind(console)).apply(e, o)
                        }
                    }
                    var a;
                    return i.namespace = e,
                    i.enabled = t.enabled(e),
                    i.useColors = t.useColors(),
                    i.color = function(e) {
                        var i, a = 0;
                        for (i in e)
                            a = (a << 5) - a + e.charCodeAt(i),
                            a |= 0;
                        return t.colors[Math.abs(a) % t.colors.length]
                    }(e),
                    i.destroy = n,
                    "function" == typeof t.init && t.init(i),
                    t.instances.push(i),
                    i
                }
                function n() {
                    var e = t.instances.indexOf(this);
                    return -1 !== e && (t.instances.splice(e, 1),
                    !0)
                }
                (t = e.exports = a.debug = a.default = a).coerce = function(e) {
                    return e instanceof Error ? e.stack || e.message : e
                }
                ,
                t.disable = function() {
                    t.enable("")
                }
                ,
                t.enable = function(e) {
                    t.save(e),
                    t.names = [],
                    t.skips = [];
                    var i, a = ("string" == typeof e ? e : "").split(/[\s,]+/), n = a.length;
                    for (i = 0; i < n; i++)
                        a[i] && ("-" === (e = a[i].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                    for (i = 0; i < t.instances.length; i++) {
                        var r = t.instances[i];
                        r.enabled = t.enabled(r.namespace)
                    }
                }
                ,
                t.enabled = function(e) {
                    if ("*" === e[e.length - 1])
                        return !0;
                    var i, a;
                    for (i = 0,
                    a = t.skips.length; i < a; i++)
                        if (t.skips[i].test(e))
                            return !1;
                    for (i = 0,
                    a = t.names.length; i < a; i++)
                        if (t.names[i].test(e))
                            return !0;
                    return !1
                }
                ,
                t.humanize = i(145),
                t.instances = [],
                t.names = [],
                t.skips = [],
                t.formatters = {}
            }
            , function(e, t) {
                function i(e, t, i) {
                    if (!(e < t))
                        return e < 1.5 * t ? Math.floor(e / t) + " " + i : Math.ceil(e / t) + " " + i + "s"
                }
                var a = 1e3
                  , n = 6e4
                  , r = 36e5
                  , o = 24 * r;
                e.exports = function(e, t) {
                    t = t || {};
                    var s = typeof e;
                    if ("string" === s && e.length > 0)
                        return function(e) {
                            if (!((e = String(e)).length > 100)) {
                                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                                if (t) {
                                    var i = parseFloat(t[1]);
                                    switch ((t[2] || "ms").toLowerCase()) {
                                    case "years":
                                    case "year":
                                    case "yrs":
                                    case "yr":
                                    case "y":
                                        return 315576e5 * i;
                                    case "days":
                                    case "day":
                                    case "d":
                                        return i * o;
                                    case "hours":
                                    case "hour":
                                    case "hrs":
                                    case "hr":
                                    case "h":
                                        return i * r;
                                    case "minutes":
                                    case "minute":
                                    case "mins":
                                    case "min":
                                    case "m":
                                        return i * n;
                                    case "seconds":
                                    case "second":
                                    case "secs":
                                    case "sec":
                                    case "s":
                                        return i * a;
                                    case "milliseconds":
                                    case "millisecond":
                                    case "msecs":
                                    case "msec":
                                    case "ms":
                                        return i;
                                    default:
                                        return
                                    }
                                }
                            }
                        }(e);
                    if ("number" === s && !1 === isNaN(e))
                        return t.long ? function(e) {
                            return i(e, o, "day") || i(e, r, "hour") || i(e, n, "minute") || i(e, a, "second") || e + " ms"
                        }(e) : function(e) {
                            return e >= o ? Math.round(e / o) + "d" : e >= r ? Math.round(e / r) + "h" : e >= n ? Math.round(e / n) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms"
                        }(e);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                }
            }
            , function(e, t, i) {
                "use strict";
                var a = {};
                (0,
                i(7).assign)(a, i(147), i(150), i(71)),
                e.exports = a
            }
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    if (!(this instanceof a))
                        return new a(e);
                    this.options = o.assign({
                        level: h,
                        method: p,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: f,
                        to: ""
                    }, e || {});
                    var t = this.options;
                    t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
                    this.err = 0,
                    this.msg = "",
                    this.ended = !1,
                    this.chunks = [],
                    this.strm = new l,
                    this.strm.avail_out = 0;
                    var i = r.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
                    if (i !== d)
                        throw new Error(c[i]);
                    if (t.header && r.deflateSetHeader(this.strm, t.header),
                    t.dictionary) {
                        var n;
                        if (n = "string" == typeof t.dictionary ? s.string2buf(t.dictionary) : "[object ArrayBuffer]" === u.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary,
                        (i = r.deflateSetDictionary(this.strm, n)) !== d)
                            throw new Error(c[i]);
                        this._dict_set = !0
                    }
                }
                function n(e, t) {
                    var i = new a(t);
                    if (i.push(e, !0),
                    i.err)
                        throw i.msg || c[i.err];
                    return i.result
                }
                var r = i(148)
                  , o = i(7)
                  , s = i(69)
                  , c = i(41)
                  , l = i(70)
                  , u = Object.prototype.toString
                  , d = 0
                  , h = -1
                  , f = 0
                  , p = 8;
                a.prototype.push = function(e, t) {
                    var i, a, n = this.strm, c = this.options.chunkSize;
                    if (this.ended)
                        return !1;
                    a = t === ~~t ? t : !0 === t ? 4 : 0,
                    "string" == typeof e ? n.input = s.string2buf(e) : "[object ArrayBuffer]" === u.call(e) ? n.input = new Uint8Array(e) : n.input = e,
                    n.next_in = 0,
                    n.avail_in = n.input.length;
                    do {
                        if (0 === n.avail_out && (n.output = new o.Buf8(c),
                        n.next_out = 0,
                        n.avail_out = c),
                        1 !== (i = r.deflate(n, a)) && i !== d)
                            return this.onEnd(i),
                            this.ended = !0,
                            !1;
                        0 !== n.avail_out && (0 !== n.avail_in || 4 !== a && 2 !== a) || ("string" === this.options.to ? this.onData(s.buf2binstring(o.shrinkBuf(n.output, n.next_out))) : this.onData(o.shrinkBuf(n.output, n.next_out)))
                    } while ((n.avail_in > 0 || 0 === n.avail_out) && 1 !== i);return 4 === a ? (i = r.deflateEnd(this.strm),
                    this.onEnd(i),
                    this.ended = !0,
                    i === d) : 2 !== a || (this.onEnd(d),
                    n.avail_out = 0,
                    !0)
                }
                ,
                a.prototype.onData = function(e) {
                    this.chunks.push(e)
                }
                ,
                a.prototype.onEnd = function(e) {
                    e === d && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)),
                    this.chunks = [],
                    this.err = e,
                    this.msg = this.strm.msg
                }
                ,
                t.Deflate = a,
                t.deflate = n,
                t.deflateRaw = function(e, t) {
                    return (t = t || {}).raw = !0,
                    n(e, t)
                }
                ,
                t.gzip = function(e, t) {
                    return (t = t || {}).gzip = !0,
                    n(e, t)
                }
            }
            , function(e, t, i) {
                "use strict";
                function a(e, t) {
                    return e.msg = k[t],
                    t
                }
                function n(e) {
                    return (e << 1) - (e > 4 ? 9 : 0)
                }
                function r(e) {
                    for (var t = e.length; --t >= 0; )
                        e[t] = 0
                }
                function o(e) {
                    var t = e.state
                      , i = t.pending;
                    i > e.avail_out && (i = e.avail_out),
                    0 !== i && (y.arraySet(e.output, t.pending_buf, t.pending_out, i, e.next_out),
                    e.next_out += i,
                    t.pending_out += i,
                    e.total_out += i,
                    e.avail_out -= i,
                    t.pending -= i,
                    0 === t.pending && (t.pending_out = 0))
                }
                function s(e, t) {
                    w._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
                    e.block_start = e.strstart,
                    o(e.strm)
                }
                function c(e, t) {
                    e.pending_buf[e.pending++] = t
                }
                function l(e, t) {
                    e.pending_buf[e.pending++] = t >>> 8 & 255,
                    e.pending_buf[e.pending++] = 255 & t
                }
                function u(e, t, i, a) {
                    var n = e.avail_in;
                    return n > a && (n = a),
                    0 === n ? 0 : (e.avail_in -= n,
                    y.arraySet(t, e.input, e.next_in, n, i),
                    1 === e.state.wrap ? e.adler = C(e.adler, t, n, i) : 2 === e.state.wrap && (e.adler = x(e.adler, t, n, i)),
                    e.next_in += n,
                    e.total_in += n,
                    n)
                }
                function d(e, t) {
                    var i, a, n = e.max_chain_length, r = e.strstart, o = e.prev_length, s = e.nice_match, c = e.strstart > e.w_size - q ? e.strstart - (e.w_size - q) : 0, l = e.window, u = e.w_mask, d = e.prev, h = e.strstart + B, f = l[r + o - 1], p = l[r + o];
                    e.prev_length >= e.good_match && (n >>= 2),
                    s > e.lookahead && (s = e.lookahead);
                    do {
                        if (l[(i = t) + o] === p && l[i + o - 1] === f && l[i] === l[r] && l[++i] === l[r + 1]) {
                            r += 2,
                            i++;
                            do {} while (l[++r] === l[++i] && l[++r] === l[++i] && l[++r] === l[++i] && l[++r] === l[++i] && l[++r] === l[++i] && l[++r] === l[++i] && l[++r] === l[++i] && l[++r] === l[++i] && r < h);if (a = B - (h - r),
                            r = h - B,
                            a > o) {
                                if (e.match_start = t,
                                o = a,
                                a >= s)
                                    break;
                                f = l[r + o - 1],
                                p = l[r + o]
                            }
                        }
                    } while ((t = d[t & u]) > c && 0 != --n);return o <= e.lookahead ? o : e.lookahead
                }
                function h(e) {
                    var t, i, a, n, r, o = e.w_size;
                    do {
                        if (n = e.window_size - e.lookahead - e.strstart,
                        e.strstart >= o + (o - q)) {
                            y.arraySet(e.window, e.window, o, o, 0),
                            e.match_start -= o,
                            e.strstart -= o,
                            e.block_start -= o,
                            t = i = e.hash_size;
                            do {
                                a = e.head[--t],
                                e.head[t] = a >= o ? a - o : 0
                            } while (--i);t = i = o;
                            do {
                                a = e.prev[--t],
                                e.prev[t] = a >= o ? a - o : 0
                            } while (--i);n += o
                        }
                        if (0 === e.strm.avail_in)
                            break;
                        if (i = u(e.strm, e.window, e.strstart + e.lookahead, n),
                        e.lookahead += i,
                        e.lookahead + e.insert >= N)
                            for (r = e.strstart - e.insert,
                            e.ins_h = e.window[r],
                            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[r + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[r + N - 1]) & e.hash_mask,
                            e.prev[r & e.w_mask] = e.head[e.ins_h],
                            e.head[e.ins_h] = r,
                            r++,
                            e.insert--,
                            !(e.lookahead + e.insert < N)); )
                                ;
                    } while (e.lookahead < q && 0 !== e.strm.avail_in)
                }
                function f(e, t) {
                    for (var i, a; ; ) {
                        if (e.lookahead < q) {
                            if (h(e),
                            e.lookahead < q && t === S)
                                return H;
                            if (0 === e.lookahead)
                                break
                        }
                        if (i = 0,
                        e.lookahead >= N && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + N - 1]) & e.hash_mask,
                        i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                        e.head[e.ins_h] = e.strstart),
                        0 !== i && e.strstart - i <= e.w_size - q && (e.match_length = d(e, i)),
                        e.match_length >= N)
                            if (a = w._tr_tally(e, e.strstart - e.match_start, e.match_length - N),
                            e.lookahead -= e.match_length,
                            e.match_length <= e.max_lazy_match && e.lookahead >= N) {
                                e.match_length--;
                                do {
                                    e.strstart++,
                                    e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + N - 1]) & e.hash_mask,
                                    i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                                    e.head[e.ins_h] = e.strstart
                                } while (0 != --e.match_length);e.strstart++
                            } else
                                e.strstart += e.match_length,
                                e.match_length = 0,
                                e.ins_h = e.window[e.strstart],
                                e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                        else
                            a = w._tr_tally(e, 0, e.window[e.strstart]),
                            e.lookahead--,
                            e.strstart++;
                        if (a && (s(e, !1),
                        0 === e.strm.avail_out))
                            return H
                    }
                    return e.insert = e.strstart < N - 1 ? e.strstart : N - 1,
                    t === T ? (s(e, !0),
                    0 === e.strm.avail_out ? K : Y) : e.last_lit && (s(e, !1),
                    0 === e.strm.avail_out) ? H : V
                }
                function p(e, t) {
                    for (var i, a, n; ; ) {
                        if (e.lookahead < q) {
                            if (h(e),
                            e.lookahead < q && t === S)
                                return H;
                            if (0 === e.lookahead)
                                break
                        }
                        if (i = 0,
                        e.lookahead >= N && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + N - 1]) & e.hash_mask,
                        i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                        e.head[e.ins_h] = e.strstart),
                        e.prev_length = e.match_length,
                        e.prev_match = e.match_start,
                        e.match_length = N - 1,
                        0 !== i && e.prev_length < e.max_lazy_match && e.strstart - i <= e.w_size - q && (e.match_length = d(e, i),
                        e.match_length <= 5 && (e.strategy === A || e.match_length === N && e.strstart - e.match_start > 4096) && (e.match_length = N - 1)),
                        e.prev_length >= N && e.match_length <= e.prev_length) {
                            n = e.strstart + e.lookahead - N,
                            a = w._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - N),
                            e.lookahead -= e.prev_length - 1,
                            e.prev_length -= 2;
                            do {
                                ++e.strstart <= n && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + N - 1]) & e.hash_mask,
                                i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                                e.head[e.ins_h] = e.strstart)
                            } while (0 != --e.prev_length);if (e.match_available = 0,
                            e.match_length = N - 1,
                            e.strstart++,
                            a && (s(e, !1),
                            0 === e.strm.avail_out))
                                return H
                        } else if (e.match_available) {
                            if ((a = w._tr_tally(e, 0, e.window[e.strstart - 1])) && s(e, !1),
                            e.strstart++,
                            e.lookahead--,
                            0 === e.strm.avail_out)
                                return H
                        } else
                            e.match_available = 1,
                            e.strstart++,
                            e.lookahead--
                    }
                    return e.match_available && (a = w._tr_tally(e, 0, e.window[e.strstart - 1]),
                    e.match_available = 0),
                    e.insert = e.strstart < N - 1 ? e.strstart : N - 1,
                    t === T ? (s(e, !0),
                    0 === e.strm.avail_out ? K : Y) : e.last_lit && (s(e, !1),
                    0 === e.strm.avail_out) ? H : V
                }
                function m(e, t, i, a, n) {
                    this.good_length = e,
                    this.max_lazy = t,
                    this.nice_length = i,
                    this.max_chain = a,
                    this.func = n
                }
                function g(e) {
                    var t;
                    return e && e.state ? (e.total_in = e.total_out = 0,
                    e.data_type = O,
                    (t = e.state).pending = 0,
                    t.pending_out = 0,
                    t.wrap < 0 && (t.wrap = -t.wrap),
                    t.status = t.wrap ? U : z,
                    e.adler = 2 === t.wrap ? 0 : 1,
                    t.last_flush = S,
                    w._tr_init(t),
                    P) : a(e, L)
                }
                function v(e) {
                    var t = g(e);
                    return t === P && function(e) {
                        e.window_size = 2 * e.w_size,
                        r(e.head),
                        e.max_lazy_match = b[e.level].max_lazy,
                        e.good_match = b[e.level].good_length,
                        e.nice_match = b[e.level].nice_length,
                        e.max_chain_length = b[e.level].max_chain,
                        e.strstart = 0,
                        e.block_start = 0,
                        e.lookahead = 0,
                        e.insert = 0,
                        e.match_length = e.prev_length = N - 1,
                        e.match_available = 0,
                        e.ins_h = 0
                    }(e.state),
                    t
                }
                function _(e, t, i, n, o, s) {
                    if (!e)
                        return L;
                    var c = 1;
                    if (t === D && (t = 6),
                    n < 0 ? (c = 0,
                    n = -n) : n > 15 && (c = 2,
                    n -= 16),
                    o < 1 || o > R || i !== F || n < 8 || n > 15 || t < 0 || t > 9 || s < 0 || s > M)
                        return a(e, L);
                    8 === n && (n = 9);
                    var l = new function() {
                        this.strm = null,
                        this.status = 0,
                        this.pending_buf = null,
                        this.pending_buf_size = 0,
                        this.pending_out = 0,
                        this.pending = 0,
                        this.wrap = 0,
                        this.gzhead = null,
                        this.gzindex = 0,
                        this.method = F,
                        this.last_flush = -1,
                        this.w_size = 0,
                        this.w_bits = 0,
                        this.w_mask = 0,
                        this.window = null,
                        this.window_size = 0,
                        this.prev = null,
                        this.head = null,
                        this.ins_h = 0,
                        this.hash_size = 0,
                        this.hash_bits = 0,
                        this.hash_mask = 0,
                        this.hash_shift = 0,
                        this.block_start = 0,
                        this.match_length = 0,
                        this.prev_match = 0,
                        this.match_available = 0,
                        this.strstart = 0,
                        this.match_start = 0,
                        this.lookahead = 0,
                        this.prev_length = 0,
                        this.max_chain_length = 0,
                        this.max_lazy_match = 0,
                        this.level = 0,
                        this.strategy = 0,
                        this.good_match = 0,
                        this.nice_match = 0,
                        this.dyn_ltree = new y.Buf16(2 * j),
                        this.dyn_dtree = new y.Buf16(2 * (2 * I + 1)),
                        this.bl_tree = new y.Buf16(2 * (2 * E + 1)),
                        r(this.dyn_ltree),
                        r(this.dyn_dtree),
                        r(this.bl_tree),
                        this.l_desc = null,
                        this.d_desc = null,
                        this.bl_desc = null,
                        this.bl_count = new y.Buf16(W + 1),
                        this.heap = new y.Buf16(2 * $ + 1),
                        r(this.heap),
                        this.heap_len = 0,
                        this.heap_max = 0,
                        this.depth = new y.Buf16(2 * $ + 1),
                        r(this.depth),
                        this.l_buf = 0,
                        this.lit_bufsize = 0,
                        this.last_lit = 0,
                        this.d_buf = 0,
                        this.opt_len = 0,
                        this.static_len = 0,
                        this.matches = 0,
                        this.insert = 0,
                        this.bi_buf = 0,
                        this.bi_valid = 0
                    }
                    ;
                    return e.state = l,
                    l.strm = e,
                    l.wrap = c,
                    l.gzhead = null,
                    l.w_bits = n,
                    l.w_size = 1 << l.w_bits,
                    l.w_mask = l.w_size - 1,
                    l.hash_bits = o + 7,
                    l.hash_size = 1 << l.hash_bits,
                    l.hash_mask = l.hash_size - 1,
                    l.hash_shift = ~~((l.hash_bits + N - 1) / N),
                    l.window = new y.Buf8(2 * l.w_size),
                    l.head = new y.Buf16(l.hash_size),
                    l.prev = new y.Buf16(l.w_size),
                    l.lit_bufsize = 1 << o + 6,
                    l.pending_buf_size = 4 * l.lit_bufsize,
                    l.pending_buf = new y.Buf8(l.pending_buf_size),
                    l.d_buf = 1 * l.lit_bufsize,
                    l.l_buf = 3 * l.lit_bufsize,
                    l.level = t,
                    l.strategy = s,
                    l.method = i,
                    v(e)
                }
                var b, y = i(7), w = i(149), C = i(67), x = i(68), k = i(41), S = 0, T = 4, P = 0, L = -2, D = -1, A = 1, M = 4, O = 2, F = 8, R = 9, $ = 286, I = 30, E = 19, j = 2 * $ + 1, W = 15, N = 3, B = 258, q = B + N + 1, U = 42, z = 113, H = 1, V = 2, K = 3, Y = 4;
                b = [new m(0,0,0,0,function(e, t) {
                    var i = 65535;
                    for (i > e.pending_buf_size - 5 && (i = e.pending_buf_size - 5); ; ) {
                        if (e.lookahead <= 1) {
                            if (h(e),
                            0 === e.lookahead && t === S)
                                return H;
                            if (0 === e.lookahead)
                                break
                        }
                        e.strstart += e.lookahead,
                        e.lookahead = 0;
                        var a = e.block_start + i;
                        if ((0 === e.strstart || e.strstart >= a) && (e.lookahead = e.strstart - a,
                        e.strstart = a,
                        s(e, !1),
                        0 === e.strm.avail_out))
                            return H;
                        if (e.strstart - e.block_start >= e.w_size - q && (s(e, !1),
                        0 === e.strm.avail_out))
                            return H
                    }
                    return e.insert = 0,
                    t === T ? (s(e, !0),
                    0 === e.strm.avail_out ? K : Y) : (e.strstart > e.block_start && (s(e, !1),
                    e.strm.avail_out),
                    H)
                }
                ), new m(4,4,8,4,f), new m(4,5,16,8,f), new m(4,6,32,32,f), new m(4,4,16,16,p), new m(8,16,32,32,p), new m(8,16,128,128,p), new m(8,32,128,256,p), new m(32,128,258,1024,p), new m(32,258,258,4096,p)],
                t.deflateInit = function(e, t) {
                    return _(e, t, F, 15, 8, 0)
                }
                ,
                t.deflateInit2 = _,
                t.deflateReset = v,
                t.deflateResetKeep = g,
                t.deflateSetHeader = function(e, t) {
                    return e && e.state ? 2 !== e.state.wrap ? L : (e.state.gzhead = t,
                    P) : L
                }
                ,
                t.deflate = function(e, t) {
                    var i, u, d, f;
                    if (!e || !e.state || t > 5 || t < 0)
                        return e ? a(e, L) : L;
                    if (u = e.state,
                    !e.output || !e.input && 0 !== e.avail_in || 666 === u.status && t !== T)
                        return a(e, 0 === e.avail_out ? -5 : L);
                    if (u.strm = e,
                    i = u.last_flush,
                    u.last_flush = t,
                    u.status === U)
                        if (2 === u.wrap)
                            e.adler = 0,
                            c(u, 31),
                            c(u, 139),
                            c(u, 8),
                            u.gzhead ? (c(u, (u.gzhead.text ? 1 : 0) + (u.gzhead.hcrc ? 2 : 0) + (u.gzhead.extra ? 4 : 0) + (u.gzhead.name ? 8 : 0) + (u.gzhead.comment ? 16 : 0)),
                            c(u, 255 & u.gzhead.time),
                            c(u, u.gzhead.time >> 8 & 255),
                            c(u, u.gzhead.time >> 16 & 255),
                            c(u, u.gzhead.time >> 24 & 255),
                            c(u, 9 === u.level ? 2 : u.strategy >= 2 || u.level < 2 ? 4 : 0),
                            c(u, 255 & u.gzhead.os),
                            u.gzhead.extra && u.gzhead.extra.length && (c(u, 255 & u.gzhead.extra.length),
                            c(u, u.gzhead.extra.length >> 8 & 255)),
                            u.gzhead.hcrc && (e.adler = x(e.adler, u.pending_buf, u.pending, 0)),
                            u.gzindex = 0,
                            u.status = 69) : (c(u, 0),
                            c(u, 0),
                            c(u, 0),
                            c(u, 0),
                            c(u, 0),
                            c(u, 9 === u.level ? 2 : u.strategy >= 2 || u.level < 2 ? 4 : 0),
                            c(u, 3),
                            u.status = z);
                        else {
                            var p = F + (u.w_bits - 8 << 4) << 8;
                            p |= (u.strategy >= 2 || u.level < 2 ? 0 : u.level < 6 ? 1 : 6 === u.level ? 2 : 3) << 6,
                            0 !== u.strstart && (p |= 32),
                            p += 31 - p % 31,
                            u.status = z,
                            l(u, p),
                            0 !== u.strstart && (l(u, e.adler >>> 16),
                            l(u, 65535 & e.adler)),
                            e.adler = 1
                        }
                    if (69 === u.status)
                        if (u.gzhead.extra) {
                            for (d = u.pending; u.gzindex < (65535 & u.gzhead.extra.length) && (u.pending !== u.pending_buf_size || (u.gzhead.hcrc && u.pending > d && (e.adler = x(e.adler, u.pending_buf, u.pending - d, d)),
                            o(e),
                            d = u.pending,
                            u.pending !== u.pending_buf_size)); )
                                c(u, 255 & u.gzhead.extra[u.gzindex]),
                                u.gzindex++;
                            u.gzhead.hcrc && u.pending > d && (e.adler = x(e.adler, u.pending_buf, u.pending - d, d)),
                            u.gzindex === u.gzhead.extra.length && (u.gzindex = 0,
                            u.status = 73)
                        } else
                            u.status = 73;
                    if (73 === u.status)
                        if (u.gzhead.name) {
                            d = u.pending;
                            do {
                                if (u.pending === u.pending_buf_size && (u.gzhead.hcrc && u.pending > d && (e.adler = x(e.adler, u.pending_buf, u.pending - d, d)),
                                o(e),
                                d = u.pending,
                                u.pending === u.pending_buf_size)) {
                                    f = 1;
                                    break
                                }
                                f = u.gzindex < u.gzhead.name.length ? 255 & u.gzhead.name.charCodeAt(u.gzindex++) : 0,
                                c(u, f)
                            } while (0 !== f);u.gzhead.hcrc && u.pending > d && (e.adler = x(e.adler, u.pending_buf, u.pending - d, d)),
                            0 === f && (u.gzindex = 0,
                            u.status = 91)
                        } else
                            u.status = 91;
                    if (91 === u.status)
                        if (u.gzhead.comment) {
                            d = u.pending;
                            do {
                                if (u.pending === u.pending_buf_size && (u.gzhead.hcrc && u.pending > d && (e.adler = x(e.adler, u.pending_buf, u.pending - d, d)),
                                o(e),
                                d = u.pending,
                                u.pending === u.pending_buf_size)) {
                                    f = 1;
                                    break
                                }
                                f = u.gzindex < u.gzhead.comment.length ? 255 & u.gzhead.comment.charCodeAt(u.gzindex++) : 0,
                                c(u, f)
                            } while (0 !== f);u.gzhead.hcrc && u.pending > d && (e.adler = x(e.adler, u.pending_buf, u.pending - d, d)),
                            0 === f && (u.status = 103)
                        } else
                            u.status = 103;
                    if (103 === u.status && (u.gzhead.hcrc ? (u.pending + 2 > u.pending_buf_size && o(e),
                    u.pending + 2 <= u.pending_buf_size && (c(u, 255 & e.adler),
                    c(u, e.adler >> 8 & 255),
                    e.adler = 0,
                    u.status = z)) : u.status = z),
                    0 !== u.pending) {
                        if (o(e),
                        0 === e.avail_out)
                            return u.last_flush = -1,
                            P
                    } else if (0 === e.avail_in && n(t) <= n(i) && t !== T)
                        return a(e, -5);
                    if (666 === u.status && 0 !== e.avail_in)
                        return a(e, -5);
                    if (0 !== e.avail_in || 0 !== u.lookahead || t !== S && 666 !== u.status) {
                        var m = 2 === u.strategy ? function(e, t) {
                            for (var i; ; ) {
                                if (0 === e.lookahead && (h(e),
                                0 === e.lookahead)) {
                                    if (t === S)
                                        return H;
                                    break
                                }
                                if (e.match_length = 0,
                                i = w._tr_tally(e, 0, e.window[e.strstart]),
                                e.lookahead--,
                                e.strstart++,
                                i && (s(e, !1),
                                0 === e.strm.avail_out))
                                    return H
                            }
                            return e.insert = 0,
                            t === T ? (s(e, !0),
                            0 === e.strm.avail_out ? K : Y) : e.last_lit && (s(e, !1),
                            0 === e.strm.avail_out) ? H : V
                        }(u, t) : 3 === u.strategy ? function(e, t) {
                            for (var i, a, n, r, o = e.window; ; ) {
                                if (e.lookahead <= B) {
                                    if (h(e),
                                    e.lookahead <= B && t === S)
                                        return H;
                                    if (0 === e.lookahead)
                                        break
                                }
                                if (e.match_length = 0,
                                e.lookahead >= N && e.strstart > 0 && ((a = o[n = e.strstart - 1]) === o[++n] && a === o[++n] && a === o[++n])) {
                                    r = e.strstart + B;
                                    do {} while (a === o[++n] && a === o[++n] && a === o[++n] && a === o[++n] && a === o[++n] && a === o[++n] && a === o[++n] && a === o[++n] && n < r);e.match_length = B - (r - n),
                                    e.match_length > e.lookahead && (e.match_length = e.lookahead)
                                }
                                if (e.match_length >= N ? (i = w._tr_tally(e, 1, e.match_length - N),
                                e.lookahead -= e.match_length,
                                e.strstart += e.match_length,
                                e.match_length = 0) : (i = w._tr_tally(e, 0, e.window[e.strstart]),
                                e.lookahead--,
                                e.strstart++),
                                i && (s(e, !1),
                                0 === e.strm.avail_out))
                                    return H
                            }
                            return e.insert = 0,
                            t === T ? (s(e, !0),
                            0 === e.strm.avail_out ? K : Y) : e.last_lit && (s(e, !1),
                            0 === e.strm.avail_out) ? H : V
                        }(u, t) : b[u.level].func(u, t);
                        if (m !== K && m !== Y || (u.status = 666),
                        m === H || m === K)
                            return 0 === e.avail_out && (u.last_flush = -1),
                            P;
                        if (m === V && (1 === t ? w._tr_align(u) : 5 !== t && (w._tr_stored_block(u, 0, 0, !1),
                        3 === t && (r(u.head),
                        0 === u.lookahead && (u.strstart = 0,
                        u.block_start = 0,
                        u.insert = 0))),
                        o(e),
                        0 === e.avail_out))
                            return u.last_flush = -1,
                            P
                    }
                    return t !== T ? P : u.wrap <= 0 ? 1 : (2 === u.wrap ? (c(u, 255 & e.adler),
                    c(u, e.adler >> 8 & 255),
                    c(u, e.adler >> 16 & 255),
                    c(u, e.adler >> 24 & 255),
                    c(u, 255 & e.total_in),
                    c(u, e.total_in >> 8 & 255),
                    c(u, e.total_in >> 16 & 255),
                    c(u, e.total_in >> 24 & 255)) : (l(u, e.adler >>> 16),
                    l(u, 65535 & e.adler)),
                    o(e),
                    u.wrap > 0 && (u.wrap = -u.wrap),
                    0 !== u.pending ? P : 1)
                }
                ,
                t.deflateEnd = function(e) {
                    var t;
                    return e && e.state ? (t = e.state.status) !== U && 69 !== t && 73 !== t && 91 !== t && 103 !== t && t !== z && 666 !== t ? a(e, L) : (e.state = null,
                    t === z ? a(e, -3) : P) : L
                }
                ,
                t.deflateSetDictionary = function(e, t) {
                    var i, a, n, o, s, c, l, u, d = t.length;
                    if (!e || !e.state)
                        return L;
                    if (2 === (o = (i = e.state).wrap) || 1 === o && i.status !== U || i.lookahead)
                        return L;
                    for (1 === o && (e.adler = C(e.adler, t, d, 0)),
                    i.wrap = 0,
                    d >= i.w_size && (0 === o && (r(i.head),
                    i.strstart = 0,
                    i.block_start = 0,
                    i.insert = 0),
                    u = new y.Buf8(i.w_size),
                    y.arraySet(u, t, d - i.w_size, i.w_size, 0),
                    t = u,
                    d = i.w_size),
                    s = e.avail_in,
                    c = e.next_in,
                    l = e.input,
                    e.avail_in = d,
                    e.next_in = 0,
                    e.input = t,
                    h(i); i.lookahead >= N; ) {
                        a = i.strstart,
                        n = i.lookahead - (N - 1);
                        do {
                            i.ins_h = (i.ins_h << i.hash_shift ^ i.window[a + N - 1]) & i.hash_mask,
                            i.prev[a & i.w_mask] = i.head[i.ins_h],
                            i.head[i.ins_h] = a,
                            a++
                        } while (--n);i.strstart = a,
                        i.lookahead = N - 1,
                        h(i)
                    }
                    return i.strstart += i.lookahead,
                    i.block_start = i.strstart,
                    i.insert = i.lookahead,
                    i.lookahead = 0,
                    i.match_length = i.prev_length = N - 1,
                    i.match_available = 0,
                    e.next_in = c,
                    e.input = l,
                    e.avail_in = s,
                    i.wrap = o,
                    P
                }
                ,
                t.deflateInfo = "pako deflate (from Nodeca project)"
            }
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    for (var t = e.length; --t >= 0; )
                        e[t] = 0
                }
                function n(e, t, i, a, n) {
                    this.static_tree = e,
                    this.extra_bits = t,
                    this.extra_base = i,
                    this.elems = a,
                    this.max_length = n,
                    this.has_stree = e && e.length
                }
                function r(e, t) {
                    this.dyn_tree = e,
                    this.max_code = 0,
                    this.stat_desc = t
                }
                function o(e) {
                    return e < 256 ? N[e] : N[256 + (e >>> 7)]
                }
                function s(e, t) {
                    e.pending_buf[e.pending++] = 255 & t,
                    e.pending_buf[e.pending++] = t >>> 8 & 255
                }
                function c(e, t, i) {
                    e.bi_valid > D - i ? (e.bi_buf |= t << e.bi_valid & 65535,
                    s(e, e.bi_buf),
                    e.bi_buf = t >> D - e.bi_valid,
                    e.bi_valid += i - D) : (e.bi_buf |= t << e.bi_valid & 65535,
                    e.bi_valid += i)
                }
                function l(e, t, i) {
                    c(e, i[2 * t], i[2 * t + 1])
                }
                function u(e, t) {
                    var i = 0;
                    do {
                        i |= 1 & e,
                        e >>>= 1,
                        i <<= 1
                    } while (--t > 0);return i >>> 1
                }
                function d(e, t, i) {
                    var a, n, r = new Array(L + 1), o = 0;
                    for (a = 1; a <= L; a++)
                        r[a] = o = o + i[a - 1] << 1;
                    for (n = 0; n <= t; n++) {
                        var s = e[2 * n + 1];
                        0 !== s && (e[2 * n] = u(r[s]++, s))
                    }
                }
                function h(e) {
                    var t;
                    for (t = 0; t < k; t++)
                        e.dyn_ltree[2 * t] = 0;
                    for (t = 0; t < S; t++)
                        e.dyn_dtree[2 * t] = 0;
                    for (t = 0; t < T; t++)
                        e.bl_tree[2 * t] = 0;
                    e.dyn_ltree[2 * A] = 1,
                    e.opt_len = e.static_len = 0,
                    e.last_lit = e.matches = 0
                }
                function f(e) {
                    e.bi_valid > 8 ? s(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
                    e.bi_buf = 0,
                    e.bi_valid = 0
                }
                function p(e, t, i, a) {
                    var n = 2 * t
                      , r = 2 * i;
                    return e[n] < e[r] || e[n] === e[r] && a[t] <= a[i]
                }
                function m(e, t, i) {
                    for (var a = e.heap[i], n = i << 1; n <= e.heap_len && (n < e.heap_len && p(t, e.heap[n + 1], e.heap[n], e.depth) && n++,
                    !p(t, a, e.heap[n], e.depth)); )
                        e.heap[i] = e.heap[n],
                        i = n,
                        n <<= 1;
                    e.heap[i] = a
                }
                function g(e, t, i) {
                    var a, n, r, s, u = 0;
                    if (0 !== e.last_lit)
                        do {
                            a = e.pending_buf[e.d_buf + 2 * u] << 8 | e.pending_buf[e.d_buf + 2 * u + 1],
                            n = e.pending_buf[e.l_buf + u],
                            u++,
                            0 === a ? l(e, n, t) : (l(e, (r = B[n]) + x + 1, t),
                            0 !== (s = R[r]) && c(e, n -= q[r], s),
                            l(e, r = o(--a), i),
                            0 !== (s = $[r]) && c(e, a -= U[r], s))
                        } while (u < e.last_lit);l(e, A, t)
                }
                function v(e, t) {
                    var i, a, n, r = t.dyn_tree, o = t.stat_desc.static_tree, s = t.stat_desc.has_stree, c = t.stat_desc.elems, l = -1;
                    for (e.heap_len = 0,
                    e.heap_max = P,
                    i = 0; i < c; i++)
                        0 !== r[2 * i] ? (e.heap[++e.heap_len] = l = i,
                        e.depth[i] = 0) : r[2 * i + 1] = 0;
                    for (; e.heap_len < 2; )
                        r[2 * (n = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1,
                        e.depth[n] = 0,
                        e.opt_len--,
                        s && (e.static_len -= o[2 * n + 1]);
                    for (t.max_code = l,
                    i = e.heap_len >> 1; i >= 1; i--)
                        m(e, r, i);
                    n = c;
                    do {
                        i = e.heap[1],
                        e.heap[1] = e.heap[e.heap_len--],
                        m(e, r, 1),
                        a = e.heap[1],
                        e.heap[--e.heap_max] = i,
                        e.heap[--e.heap_max] = a,
                        r[2 * n] = r[2 * i] + r[2 * a],
                        e.depth[n] = (e.depth[i] >= e.depth[a] ? e.depth[i] : e.depth[a]) + 1,
                        r[2 * i + 1] = r[2 * a + 1] = n,
                        e.heap[1] = n++,
                        m(e, r, 1)
                    } while (e.heap_len >= 2);e.heap[--e.heap_max] = e.heap[1],
                    function(e, t) {
                        var i, a, n, r, o, s, c = t.dyn_tree, l = t.max_code, u = t.stat_desc.static_tree, d = t.stat_desc.has_stree, h = t.stat_desc.extra_bits, f = t.stat_desc.extra_base, p = t.stat_desc.max_length, m = 0;
                        for (r = 0; r <= L; r++)
                            e.bl_count[r] = 0;
                        for (c[2 * e.heap[e.heap_max] + 1] = 0,
                        i = e.heap_max + 1; i < P; i++)
                            (r = c[2 * c[2 * (a = e.heap[i]) + 1] + 1] + 1) > p && (r = p,
                            m++),
                            c[2 * a + 1] = r,
                            a > l || (e.bl_count[r]++,
                            o = 0,
                            a >= f && (o = h[a - f]),
                            s = c[2 * a],
                            e.opt_len += s * (r + o),
                            d && (e.static_len += s * (u[2 * a + 1] + o)));
                        if (0 !== m) {
                            do {
                                for (r = p - 1; 0 === e.bl_count[r]; )
                                    r--;
                                e.bl_count[r]--,
                                e.bl_count[r + 1] += 2,
                                e.bl_count[p]--,
                                m -= 2
                            } while (m > 0);for (r = p; 0 !== r; r--)
                                for (a = e.bl_count[r]; 0 !== a; )
                                    (n = e.heap[--i]) > l || (c[2 * n + 1] !== r && (e.opt_len += (r - c[2 * n + 1]) * c[2 * n],
                                    c[2 * n + 1] = r),
                                    a--)
                        }
                    }(e, t),
                    d(r, l, e.bl_count)
                }
                function _(e, t, i) {
                    var a, n, r = -1, o = t[1], s = 0, c = 7, l = 4;
                    for (0 === o && (c = 138,
                    l = 3),
                    t[2 * (i + 1) + 1] = 65535,
                    a = 0; a <= i; a++)
                        n = o,
                        o = t[2 * (a + 1) + 1],
                        ++s < c && n === o || (s < l ? e.bl_tree[2 * n] += s : 0 !== n ? (n !== r && e.bl_tree[2 * n]++,
                        e.bl_tree[2 * M]++) : s <= 10 ? e.bl_tree[2 * O]++ : e.bl_tree[2 * F]++,
                        s = 0,
                        r = n,
                        0 === o ? (c = 138,
                        l = 3) : n === o ? (c = 6,
                        l = 3) : (c = 7,
                        l = 4))
                }
                function b(e, t, i) {
                    var a, n, r = -1, o = t[1], s = 0, u = 7, d = 4;
                    for (0 === o && (u = 138,
                    d = 3),
                    a = 0; a <= i; a++)
                        if (n = o,
                        o = t[2 * (a + 1) + 1],
                        !(++s < u && n === o)) {
                            if (s < d)
                                do {
                                    l(e, n, e.bl_tree)
                                } while (0 != --s);
                            else
                                0 !== n ? (n !== r && (l(e, n, e.bl_tree),
                                s--),
                                l(e, M, e.bl_tree),
                                c(e, s - 3, 2)) : s <= 10 ? (l(e, O, e.bl_tree),
                                c(e, s - 3, 3)) : (l(e, F, e.bl_tree),
                                c(e, s - 11, 7));
                            s = 0,
                            r = n,
                            0 === o ? (u = 138,
                            d = 3) : n === o ? (u = 6,
                            d = 3) : (u = 7,
                            d = 4)
                        }
                }
                function y(e, t, i, a) {
                    c(e, (C << 1) + (a ? 1 : 0), 3),
                    function(e, t, i, a) {
                        f(e),
                        s(e, i),
                        s(e, ~i),
                        w.arraySet(e.pending_buf, e.window, t, i, e.pending),
                        e.pending += i
                    }(e, t, i)
                }
                var w = i(7)
                  , C = 0
                  , x = 256
                  , k = x + 1 + 29
                  , S = 30
                  , T = 19
                  , P = 2 * k + 1
                  , L = 15
                  , D = 16
                  , A = 256
                  , M = 16
                  , O = 17
                  , F = 18
                  , R = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
                  , $ = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
                  , I = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
                  , E = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
                  , j = new Array(2 * (k + 2));
                a(j);
                var W = new Array(2 * S);
                a(W);
                var N = new Array(512);
                a(N);
                var B = new Array(256);
                a(B);
                var q = new Array(29);
                a(q);
                var U = new Array(S);
                a(U);
                var z, H, V, K = !1;
                t._tr_init = function(e) {
                    K || (function() {
                        var e, t, i, a, r, o = new Array(L + 1);
                        for (i = 0,
                        a = 0; a < 28; a++)
                            for (q[a] = i,
                            e = 0; e < 1 << R[a]; e++)
                                B[i++] = a;
                        for (B[i - 1] = a,
                        r = 0,
                        a = 0; a < 16; a++)
                            for (U[a] = r,
                            e = 0; e < 1 << $[a]; e++)
                                N[r++] = a;
                        for (r >>= 7; a < S; a++)
                            for (U[a] = r << 7,
                            e = 0; e < 1 << $[a] - 7; e++)
                                N[256 + r++] = a;
                        for (t = 0; t <= L; t++)
                            o[t] = 0;
                        for (e = 0; e <= 143; )
                            j[2 * e + 1] = 8,
                            e++,
                            o[8]++;
                        for (; e <= 255; )
                            j[2 * e + 1] = 9,
                            e++,
                            o[9]++;
                        for (; e <= 279; )
                            j[2 * e + 1] = 7,
                            e++,
                            o[7]++;
                        for (; e <= 287; )
                            j[2 * e + 1] = 8,
                            e++,
                            o[8]++;
                        for (d(j, k + 1, o),
                        e = 0; e < S; e++)
                            W[2 * e + 1] = 5,
                            W[2 * e] = u(e, 5);
                        z = new n(j,R,x + 1,k,L),
                        H = new n(W,$,0,S,L),
                        V = new n(new Array(0),I,0,T,7)
                    }(),
                    K = !0),
                    e.l_desc = new r(e.dyn_ltree,z),
                    e.d_desc = new r(e.dyn_dtree,H),
                    e.bl_desc = new r(e.bl_tree,V),
                    e.bi_buf = 0,
                    e.bi_valid = 0,
                    h(e)
                }
                ,
                t._tr_stored_block = y,
                t._tr_flush_block = function(e, t, i, a) {
                    var n, r, o = 0;
                    e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
                        var t, i = 4093624447;
                        for (t = 0; t <= 31; t++,
                        i >>>= 1)
                            if (1 & i && 0 !== e.dyn_ltree[2 * t])
                                return 0;
                        if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26])
                            return 1;
                        for (t = 32; t < x; t++)
                            if (0 !== e.dyn_ltree[2 * t])
                                return 1;
                        return 0
                    }(e)),
                    v(e, e.l_desc),
                    v(e, e.d_desc),
                    o = function(e) {
                        var t;
                        for (_(e, e.dyn_ltree, e.l_desc.max_code),
                        _(e, e.dyn_dtree, e.d_desc.max_code),
                        v(e, e.bl_desc),
                        t = T - 1; t >= 3 && 0 === e.bl_tree[2 * E[t] + 1]; t--)
                            ;
                        return e.opt_len += 3 * (t + 1) + 5 + 5 + 4,
                        t
                    }(e),
                    n = e.opt_len + 3 + 7 >>> 3,
                    (r = e.static_len + 3 + 7 >>> 3) <= n && (n = r)) : n = r = i + 5,
                    i + 4 <= n && -1 !== t ? y(e, t, i, a) : 4 === e.strategy || r === n ? (c(e, 2 + (a ? 1 : 0), 3),
                    g(e, j, W)) : (c(e, 4 + (a ? 1 : 0), 3),
                    function(e, t, i, a) {
                        var n;
                        for (c(e, t - 257, 5),
                        c(e, i - 1, 5),
                        c(e, a - 4, 4),
                        n = 0; n < a; n++)
                            c(e, e.bl_tree[2 * E[n] + 1], 3);
                        b(e, e.dyn_ltree, t - 1),
                        b(e, e.dyn_dtree, i - 1)
                    }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1),
                    g(e, e.dyn_ltree, e.dyn_dtree)),
                    h(e),
                    a && f(e)
                }
                ,
                t._tr_tally = function(e, t, i) {
                    return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255,
                    e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t,
                    e.pending_buf[e.l_buf + e.last_lit] = 255 & i,
                    e.last_lit++,
                    0 === t ? e.dyn_ltree[2 * i]++ : (e.matches++,
                    t--,
                    e.dyn_ltree[2 * (B[i] + x + 1)]++,
                    e.dyn_dtree[2 * o(t)]++),
                    e.last_lit === e.lit_bufsize - 1
                }
                ,
                t._tr_align = function(e) {
                    c(e, 2, 3),
                    l(e, A, j),
                    function(e) {
                        16 === e.bi_valid ? (s(e, e.bi_buf),
                        e.bi_buf = 0,
                        e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf,
                        e.bi_buf >>= 8,
                        e.bi_valid -= 8)
                    }(e)
                }
            }
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    if (!(this instanceof a))
                        return new a(e);
                    this.options = o.assign({
                        chunkSize: 16384,
                        windowBits: 0,
                        to: ""
                    }, e || {});
                    var t = this.options;
                    t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits,
                    0 === t.windowBits && (t.windowBits = -15)),
                    !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32),
                    t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15),
                    this.err = 0,
                    this.msg = "",
                    this.ended = !1,
                    this.chunks = [],
                    this.strm = new u,
                    this.strm.avail_out = 0;
                    var i = r.inflateInit2(this.strm, t.windowBits);
                    if (i !== c.Z_OK)
                        throw new Error(l[i]);
                    this.header = new d,
                    r.inflateGetHeader(this.strm, this.header)
                }
                function n(e, t) {
                    var i = new a(t);
                    if (i.push(e, !0),
                    i.err)
                        throw i.msg || l[i.err];
                    return i.result
                }
                var r = i(151)
                  , o = i(7)
                  , s = i(69)
                  , c = i(71)
                  , l = i(41)
                  , u = i(70)
                  , d = i(154)
                  , h = Object.prototype.toString;
                a.prototype.push = function(e, t) {
                    var i, a, n, l, u, d, f = this.strm, p = this.options.chunkSize, m = this.options.dictionary, g = !1;
                    if (this.ended)
                        return !1;
                    a = t === ~~t ? t : !0 === t ? c.Z_FINISH : c.Z_NO_FLUSH,
                    "string" == typeof e ? f.input = s.binstring2buf(e) : "[object ArrayBuffer]" === h.call(e) ? f.input = new Uint8Array(e) : f.input = e,
                    f.next_in = 0,
                    f.avail_in = f.input.length;
                    do {
                        if (0 === f.avail_out && (f.output = new o.Buf8(p),
                        f.next_out = 0,
                        f.avail_out = p),
                        (i = r.inflate(f, c.Z_NO_FLUSH)) === c.Z_NEED_DICT && m && (d = "string" == typeof m ? s.string2buf(m) : "[object ArrayBuffer]" === h.call(m) ? new Uint8Array(m) : m,
                        i = r.inflateSetDictionary(this.strm, d)),
                        i === c.Z_BUF_ERROR && !0 === g && (i = c.Z_OK,
                        g = !1),
                        i !== c.Z_STREAM_END && i !== c.Z_OK)
                            return this.onEnd(i),
                            this.ended = !0,
                            !1;
                        f.next_out && (0 !== f.avail_out && i !== c.Z_STREAM_END && (0 !== f.avail_in || a !== c.Z_FINISH && a !== c.Z_SYNC_FLUSH) || ("string" === this.options.to ? (n = s.utf8border(f.output, f.next_out),
                        l = f.next_out - n,
                        u = s.buf2string(f.output, n),
                        f.next_out = l,
                        f.avail_out = p - l,
                        l && o.arraySet(f.output, f.output, n, l, 0),
                        this.onData(u)) : this.onData(o.shrinkBuf(f.output, f.next_out)))),
                        0 === f.avail_in && 0 === f.avail_out && (g = !0)
                    } while ((f.avail_in > 0 || 0 === f.avail_out) && i !== c.Z_STREAM_END);return i === c.Z_STREAM_END && (a = c.Z_FINISH),
                    a === c.Z_FINISH ? (i = r.inflateEnd(this.strm),
                    this.onEnd(i),
                    this.ended = !0,
                    i === c.Z_OK) : a !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK),
                    f.avail_out = 0,
                    !0)
                }
                ,
                a.prototype.onData = function(e) {
                    this.chunks.push(e)
                }
                ,
                a.prototype.onEnd = function(e) {
                    e === c.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)),
                    this.chunks = [],
                    this.err = e,
                    this.msg = this.strm.msg
                }
                ,
                t.Inflate = a,
                t.inflate = n,
                t.inflateRaw = function(e, t) {
                    return (t = t || {}).raw = !0,
                    n(e, t)
                }
                ,
                t.ungzip = n
            }
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
                }
                function n(e) {
                    var t;
                    return e && e.state ? (t = e.state,
                    e.total_in = e.total_out = t.total = 0,
                    e.msg = "",
                    t.wrap && (e.adler = 1 & t.wrap),
                    t.mode = w,
                    t.last = 0,
                    t.havedict = 0,
                    t.dmax = 32768,
                    t.head = null,
                    t.hold = 0,
                    t.bits = 0,
                    t.lencode = t.lendyn = new h.Buf32(x),
                    t.distcode = t.distdyn = new h.Buf32(k),
                    t.sane = 1,
                    t.back = -1,
                    b) : y
                }
                function r(e) {
                    var t;
                    return e && e.state ? ((t = e.state).wsize = 0,
                    t.whave = 0,
                    t.wnext = 0,
                    n(e)) : y
                }
                function o(e, t) {
                    var i, a;
                    return e && e.state ? (a = e.state,
                    t < 0 ? (i = 0,
                    t = -t) : (i = 1 + (t >> 4),
                    t < 48 && (t &= 15)),
                    t && (t < 8 || t > 15) ? y : (null !== a.window && a.wbits !== t && (a.window = null),
                    a.wrap = i,
                    a.wbits = t,
                    r(e))) : y
                }
                function s(e, t) {
                    var i, a;
                    return e ? (a = new function() {
                        this.mode = 0,
                        this.last = !1,
                        this.wrap = 0,
                        this.havedict = !1,
                        this.flags = 0,
                        this.dmax = 0,
                        this.check = 0,
                        this.total = 0,
                        this.head = null,
                        this.wbits = 0,
                        this.wsize = 0,
                        this.whave = 0,
                        this.wnext = 0,
                        this.window = null,
                        this.hold = 0,
                        this.bits = 0,
                        this.length = 0,
                        this.offset = 0,
                        this.extra = 0,
                        this.lencode = null,
                        this.distcode = null,
                        this.lenbits = 0,
                        this.distbits = 0,
                        this.ncode = 0,
                        this.nlen = 0,
                        this.ndist = 0,
                        this.have = 0,
                        this.next = null,
                        this.lens = new h.Buf16(320),
                        this.work = new h.Buf16(288),
                        this.lendyn = null,
                        this.distdyn = null,
                        this.sane = 0,
                        this.back = 0,
                        this.was = 0
                    }
                    ,
                    e.state = a,
                    a.window = null,
                    (i = o(e, t)) !== b && (e.state = null),
                    i) : y
                }
                function c(e) {
                    if (S) {
                        var t;
                        for (u = new h.Buf32(512),
                        d = new h.Buf32(32),
                        t = 0; t < 144; )
                            e.lens[t++] = 8;
                        for (; t < 256; )
                            e.lens[t++] = 9;
                        for (; t < 280; )
                            e.lens[t++] = 7;
                        for (; t < 288; )
                            e.lens[t++] = 8;
                        for (g(v, e.lens, 0, 288, u, 0, e.work, {
                            bits: 9
                        }),
                        t = 0; t < 32; )
                            e.lens[t++] = 5;
                        g(_, e.lens, 0, 32, d, 0, e.work, {
                            bits: 5
                        }),
                        S = !1
                    }
                    e.lencode = u,
                    e.lenbits = 9,
                    e.distcode = d,
                    e.distbits = 5
                }
                function l(e, t, i, a) {
                    var n, r = e.state;
                    return null === r.window && (r.wsize = 1 << r.wbits,
                    r.wnext = 0,
                    r.whave = 0,
                    r.window = new h.Buf8(r.wsize)),
                    a >= r.wsize ? (h.arraySet(r.window, t, i - r.wsize, r.wsize, 0),
                    r.wnext = 0,
                    r.whave = r.wsize) : ((n = r.wsize - r.wnext) > a && (n = a),
                    h.arraySet(r.window, t, i - a, n, r.wnext),
                    (a -= n) ? (h.arraySet(r.window, t, i - a, a, 0),
                    r.wnext = a,
                    r.whave = r.wsize) : (r.wnext += n,
                    r.wnext === r.wsize && (r.wnext = 0),
                    r.whave < r.wsize && (r.whave += n))),
                    0
                }
                var u, d, h = i(7), f = i(67), p = i(68), m = i(152), g = i(153), v = 1, _ = 2, b = 0, y = -2, w = 1, C = 12, x = 852, k = 592, S = !0;
                t.inflateReset = r,
                t.inflateReset2 = o,
                t.inflateResetKeep = n,
                t.inflateInit = function(e) {
                    return s(e, 15)
                }
                ,
                t.inflateInit2 = s,
                t.inflate = function(e, t) {
                    var i, n, r, o, s, u, d, x, k, S, T, P, L, D, A, M, O, F, R, $, I, E, j, W, N = 0, B = new h.Buf8(4), q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                    if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in)
                        return y;
                    (i = e.state).mode === C && (i.mode = 13),
                    s = e.next_out,
                    r = e.output,
                    d = e.avail_out,
                    o = e.next_in,
                    n = e.input,
                    u = e.avail_in,
                    x = i.hold,
                    k = i.bits,
                    S = u,
                    T = d,
                    E = b;
                    e: for (; ; )
                        switch (i.mode) {
                        case w:
                            if (0 === i.wrap) {
                                i.mode = 13;
                                break
                            }
                            for (; k < 16; ) {
                                if (0 === u)
                                    break e;
                                u--,
                                x += n[o++] << k,
                                k += 8
                            }
                            if (2 & i.wrap && 35615 === x) {
                                i.check = 0,
                                B[0] = 255 & x,
                                B[1] = x >>> 8 & 255,
                                i.check = p(i.check, B, 2, 0),
                                x = 0,
                                k = 0,
                                i.mode = 2;
                                break
                            }
                            if (i.flags = 0,
                            i.head && (i.head.done = !1),
                            !(1 & i.wrap) || (((255 & x) << 8) + (x >> 8)) % 31) {
                                e.msg = "incorrect header check",
                                i.mode = 30;
                                break
                            }
                            if (8 != (15 & x)) {
                                e.msg = "unknown compression method",
                                i.mode = 30;
                                break
                            }
                            if (k -= 4,
                            I = 8 + (15 & (x >>>= 4)),
                            0 === i.wbits)
                                i.wbits = I;
                            else if (I > i.wbits) {
                                e.msg = "invalid window size",
                                i.mode = 30;
                                break
                            }
                            i.dmax = 1 << I,
                            e.adler = i.check = 1,
                            i.mode = 512 & x ? 10 : C,
                            x = 0,
                            k = 0;
                            break;
                        case 2:
                            for (; k < 16; ) {
                                if (0 === u)
                                    break e;
                                u--,
                                x += n[o++] << k,
                                k += 8
                            }
                            if (i.flags = x,
                            8 != (255 & i.flags)) {
                                e.msg = "unknown compression method",
                                i.mode = 30;
                                break
                            }
                            if (57344 & i.flags) {
                                e.msg = "unknown header flags set",
                                i.mode = 30;
                                break
                            }
                            i.head && (i.head.text = x >> 8 & 1),
                            512 & i.flags && (B[0] = 255 & x,
                            B[1] = x >>> 8 & 255,
                            i.check = p(i.check, B, 2, 0)),
                            x = 0,
                            k = 0,
                            i.mode = 3;
                        case 3:
                            for (; k < 32; ) {
                                if (0 === u)
                                    break e;
                                u--,
                                x += n[o++] << k,
                                k += 8
                            }
                            i.head && (i.head.time = x),
                            512 & i.flags && (B[0] = 255 & x,
                            B[1] = x >>> 8 & 255,
                            B[2] = x >>> 16 & 255,
                            B[3] = x >>> 24 & 255,
                            i.check = p(i.check, B, 4, 0)),
                            x = 0,
                            k = 0,
                            i.mode = 4;
                        case 4:
                            for (; k < 16; ) {
                                if (0 === u)
                                    break e;
                                u--,
                                x += n[o++] << k,
                                k += 8
                            }
                            i.head && (i.head.xflags = 255 & x,
                            i.head.os = x >> 8),
                            512 & i.flags && (B[0] = 255 & x,
                            B[1] = x >>> 8 & 255,
                            i.check = p(i.check, B, 2, 0)),
                            x = 0,
                            k = 0,
                            i.mode = 5;
                        case 5:
                            if (1024 & i.flags) {
                                for (; k < 16; ) {
                                    if (0 === u)
                                        break e;
                                    u--,
                                    x += n[o++] << k,
                                    k += 8
                                }
                                i.length = x,
                                i.head && (i.head.extra_len = x),
                                512 & i.flags && (B[0] = 255 & x,
                                B[1] = x >>> 8 & 255,
                                i.check = p(i.check, B, 2, 0)),
                                x = 0,
                                k = 0
                            } else
                                i.head && (i.head.extra = null);
                            i.mode = 6;
                        case 6:
                            if (1024 & i.flags && ((P = i.length) > u && (P = u),
                            P && (i.head && (I = i.head.extra_len - i.length,
                            i.head.extra || (i.head.extra = new Array(i.head.extra_len)),
                            h.arraySet(i.head.extra, n, o, P, I)),
                            512 & i.flags && (i.check = p(i.check, n, P, o)),
                            u -= P,
                            o += P,
                            i.length -= P),
                            i.length))
                                break e;
                            i.length = 0,
                            i.mode = 7;
                        case 7:
                            if (2048 & i.flags) {
                                if (0 === u)
                                    break e;
                                P = 0;
                                do {
                                    I = n[o + P++],
                                    i.head && I && i.length < 65536 && (i.head.name += String.fromCharCode(I))
                                } while (I && P < u);if (512 & i.flags && (i.check = p(i.check, n, P, o)),
                                u -= P,
                                o += P,
                                I)
                                    break e
                            } else
                                i.head && (i.head.name = null);
                            i.length = 0,
                            i.mode = 8;
                        case 8:
                            if (4096 & i.flags) {
                                if (0 === u)
                                    break e;
                                P = 0;
                                do {
                                    I = n[o + P++],
                                    i.head && I && i.length < 65536 && (i.head.comment += String.fromCharCode(I))
                                } while (I && P < u);if (512 & i.flags && (i.check = p(i.check, n, P, o)),
                                u -= P,
                                o += P,
                                I)
                                    break e
                            } else
                                i.head && (i.head.comment = null);
                            i.mode = 9;
                        case 9:
                            if (512 & i.flags) {
                                for (; k < 16; ) {
                                    if (0 === u)
                                        break e;
                                    u--,
                                    x += n[o++] << k,
                                    k += 8
                                }
                                if (x !== (65535 & i.check)) {
                                    e.msg = "header crc mismatch",
                                    i.mode = 30;
                                    break
                                }
                                x = 0,
                                k = 0
                            }
                            i.head && (i.head.hcrc = i.flags >> 9 & 1,
                            i.head.done = !0),
                            e.adler = i.check = 0,
                            i.mode = C;
                            break;
                        case 10:
                            for (; k < 32; ) {
                                if (0 === u)
                                    break e;
                                u--,
                                x += n[o++] << k,
                                k += 8
                            }
                            e.adler = i.check = a(x),
                            x = 0,
                            k = 0,
                            i.mode = 11;
                        case 11:
                            if (0 === i.havedict)
                                return e.next_out = s,
                                e.avail_out = d,
                                e.next_in = o,
                                e.avail_in = u,
                                i.hold = x,
                                i.bits = k,
                                2;
                            e.adler = i.check = 1,
                            i.mode = C;
                        case C:
                            if (5 === t || 6 === t)
                                break e;
                        case 13:
                            if (i.last) {
                                x >>>= 7 & k,
                                k -= 7 & k,
                                i.mode = 27;
                                break
                            }
                            for (; k < 3; ) {
                                if (0 === u)
                                    break e;
                                u--,
                                x += n[o++] << k,
                                k += 8
                            }
                            switch (i.last = 1 & x,
                            k -= 1,
                            3 & (x >>>= 1)) {
                            case 0:
                                i.mode = 14;
                                break;
                            case 1:
                                if (c(i),
                                i.mode = 20,
                                6 === t) {
                                    x >>>= 2,
                                    k -= 2;
                                    break e
                                }
                                break;
                            case 2:
                                i.mode = 17;
                                break;
                            case 3:
                                e.msg = "invalid block type",
                                i.mode = 30
                            }
                            x >>>= 2,
                            k -= 2;
                            break;
                        case 14:
                            for (x >>>= 7 & k,
                            k -= 7 & k; k < 32; ) {
                                if (0 === u)
                                    break e;
                                u--,
                                x += n[o++] << k,
                                k += 8
                            }
                            if ((65535 & x) != (x >>> 16 ^ 65535)) {
                                e.msg = "invalid stored block lengths",
                                i.mode = 30;
                                break
                            }
                            if (i.length = 65535 & x,
                            x = 0,
                            k = 0,
                            i.mode = 15,
                            6 === t)
                                break e;
                        case 15:
                            i.mode = 16;
                        case 16:
                            if (P = i.length) {
                                if (P > u && (P = u),
                                P > d && (P = d),
                                0 === P)
                                    break e;
                                h.arraySet(r, n, o, P, s),
                                u -= P,
                                o += P,
                                d -= P,
                                s += P,
                                i.length -= P;
                                break
                            }
                            i.mode = C;
                            break;
                        case 17:
                            for (; k < 14; ) {
                                if (0 === u)
                                    break e;
                                u--,
                                x += n[o++] << k,
                                k += 8
                            }
                            if (i.nlen = 257 + (31 & x),
                            x >>>= 5,
                            k -= 5,
                            i.ndist = 1 + (31 & x),
                            x >>>= 5,
                            k -= 5,
                            i.ncode = 4 + (15 & x),
                            x >>>= 4,
                            k -= 4,
                            i.nlen > 286 || i.ndist > 30) {
                                e.msg = "too many length or distance symbols",
                                i.mode = 30;
                                break
                            }
                            i.have = 0,
                            i.mode = 18;
                        case 18:
                            for (; i.have < i.ncode; ) {
                                for (; k < 3; ) {
                                    if (0 === u)
                                        break e;
                                    u--,
                                    x += n[o++] << k,
                                    k += 8
                                }
                                i.lens[q[i.have++]] = 7 & x,
                                x >>>= 3,
                                k -= 3
                            }
                            for (; i.have < 19; )
                                i.lens[q[i.have++]] = 0;
                            if (i.lencode = i.lendyn,
                            i.lenbits = 7,
                            j = {
                                bits: i.lenbits
                            },
                            E = g(0, i.lens, 0, 19, i.lencode, 0, i.work, j),
                            i.lenbits = j.bits,
                            E) {
                                e.msg = "invalid code lengths set",
                                i.mode = 30;
                                break
                            }
                            i.have = 0,
                            i.mode = 19;
                        case 19:
                            for (; i.have < i.nlen + i.ndist; ) {
                                for (; M = (N = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255,
                                O = 65535 & N,
                                !((A = N >>> 24) <= k); ) {
                                    if (0 === u)
                                        break e;
                                    u--,
                                    x += n[o++] << k,
                                    k += 8
                                }
                                if (O < 16)
                                    x >>>= A,
                                    k -= A,
                                    i.lens[i.have++] = O;
                                else {
                                    if (16 === O) {
                                        for (W = A + 2; k < W; ) {
                                            if (0 === u)
                                                break e;
                                            u--,
                                            x += n[o++] << k,
                                            k += 8
                                        }
                                        if (x >>>= A,
                                        k -= A,
                                        0 === i.have) {
                                            e.msg = "invalid bit length repeat",
                                            i.mode = 30;
                                            break
                                        }
                                        I = i.lens[i.have - 1],
                                        P = 3 + (3 & x),
                                        x >>>= 2,
                                        k -= 2
                                    } else if (17 === O) {
                                        for (W = A + 3; k < W; ) {
                                            if (0 === u)
                                                break e;
                                            u--,
                                            x += n[o++] << k,
                                            k += 8
                                        }
                                        k -= A,
                                        I = 0,
                                        P = 3 + (7 & (x >>>= A)),
                                        x >>>= 3,
                                        k -= 3
                                    } else {
                                        for (W = A + 7; k < W; ) {
                                            if (0 === u)
                                                break e;
                                            u--,
                                            x += n[o++] << k,
                                            k += 8
                                        }
                                        k -= A,
                                        I = 0,
                                        P = 11 + (127 & (x >>>= A)),
                                        x >>>= 7,
                                        k -= 7
                                    }
                                    if (i.have + P > i.nlen + i.ndist) {
                                        e.msg = "invalid bit length repeat",
                                        i.mode = 30;
                                        break
                                    }
                                    for (; P--; )
                                        i.lens[i.have++] = I
                                }
                            }
                            if (30 === i.mode)
                                break;
                            if (0 === i.lens[256]) {
                                e.msg = "invalid code -- missing end-of-block",
                                i.mode = 30;
                                break
                            }
                            if (i.lenbits = 9,
                            j = {
                                bits: i.lenbits
                            },
                            E = g(v, i.lens, 0, i.nlen, i.lencode, 0, i.work, j),
                            i.lenbits = j.bits,
                            E) {
                                e.msg = "invalid literal/lengths set",
                                i.mode = 30;
                                break
                            }
                            if (i.distbits = 6,
                            i.distcode = i.distdyn,
                            j = {
                                bits: i.distbits
                            },
                            E = g(_, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, j),
                            i.distbits = j.bits,
                            E) {
                                e.msg = "invalid distances set",
                                i.mode = 30;
                                break
                            }
                            if (i.mode = 20,
                            6 === t)
                                break e;
                        case 20:
                            i.mode = 21;
                        case 21:
                            if (u >= 6 && d >= 258) {
                                e.next_out = s,
                                e.avail_out = d,
                                e.next_in = o,
                                e.avail_in = u,
                                i.hold = x,
                                i.bits = k,
                                m(e, T),
                                s = e.next_out,
                                r = e.output,
                                d = e.avail_out,
                                o = e.next_in,
                                n = e.input,
                                u = e.avail_in,
                                x = i.hold,
                                k = i.bits,
                                i.mode === C && (i.back = -1);
                                break
                            }
                            for (i.back = 0; M = (N = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255,
                            O = 65535 & N,
                            !((A = N >>> 24) <= k); ) {
                                if (0 === u)
                                    break e;
                                u--,
                                x += n[o++] << k,
                                k += 8
                            }
                            if (M && 0 == (240 & M)) {
                                for (F = A,
                                R = M,
                                $ = O; M = (N = i.lencode[$ + ((x & (1 << F + R) - 1) >> F)]) >>> 16 & 255,
                                O = 65535 & N,
                                !(F + (A = N >>> 24) <= k); ) {
                                    if (0 === u)
                                        break e;
                                    u--,
                                    x += n[o++] << k,
                                    k += 8
                                }
                                x >>>= F,
                                k -= F,
                                i.back += F
                            }
                            if (x >>>= A,
                            k -= A,
                            i.back += A,
                            i.length = O,
                            0 === M) {
                                i.mode = 26;
                                break
                            }
                            if (32 & M) {
                                i.back = -1,
                                i.mode = C;
                                break
                            }
                            if (64 & M) {
                                e.msg = "invalid literal/length code",
                                i.mode = 30;
                                break
                            }
                            i.extra = 15 & M,
                            i.mode = 22;
                        case 22:
                            if (i.extra) {
                                for (W = i.extra; k < W; ) {
                                    if (0 === u)
                                        break e;
                                    u--,
                                    x += n[o++] << k,
                                    k += 8
                                }
                                i.length += x & (1 << i.extra) - 1,
                                x >>>= i.extra,
                                k -= i.extra,
                                i.back += i.extra
                            }
                            i.was = i.length,
                            i.mode = 23;
                        case 23:
                            for (; M = (N = i.distcode[x & (1 << i.distbits) - 1]) >>> 16 & 255,
                            O = 65535 & N,
                            !((A = N >>> 24) <= k); ) {
                                if (0 === u)
                                    break e;
                                u--,
                                x += n[o++] << k,
                                k += 8
                            }
                            if (0 == (240 & M)) {
                                for (F = A,
                                R = M,
                                $ = O; M = (N = i.distcode[$ + ((x & (1 << F + R) - 1) >> F)]) >>> 16 & 255,
                                O = 65535 & N,
                                !(F + (A = N >>> 24) <= k); ) {
                                    if (0 === u)
                                        break e;
                                    u--,
                                    x += n[o++] << k,
                                    k += 8
                                }
                                x >>>= F,
                                k -= F,
                                i.back += F
                            }
                            if (x >>>= A,
                            k -= A,
                            i.back += A,
                            64 & M) {
                                e.msg = "invalid distance code",
                                i.mode = 30;
                                break
                            }
                            i.offset = O,
                            i.extra = 15 & M,
                            i.mode = 24;
                        case 24:
                            if (i.extra) {
                                for (W = i.extra; k < W; ) {
                                    if (0 === u)
                                        break e;
                                    u--,
                                    x += n[o++] << k,
                                    k += 8
                                }
                                i.offset += x & (1 << i.extra) - 1,
                                x >>>= i.extra,
                                k -= i.extra,
                                i.back += i.extra
                            }
                            if (i.offset > i.dmax) {
                                e.msg = "invalid distance too far back",
                                i.mode = 30;
                                break
                            }
                            i.mode = 25;
                        case 25:
                            if (0 === d)
                                break e;
                            if (P = T - d,
                            i.offset > P) {
                                if ((P = i.offset - P) > i.whave && i.sane) {
                                    e.msg = "invalid distance too far back",
                                    i.mode = 30;
                                    break
                                }
                                P > i.wnext ? (P -= i.wnext,
                                L = i.wsize - P) : L = i.wnext - P,
                                P > i.length && (P = i.length),
                                D = i.window
                            } else
                                D = r,
                                L = s - i.offset,
                                P = i.length;
                            P > d && (P = d),
                            d -= P,
                            i.length -= P;
                            do {
                                r[s++] = D[L++]
                            } while (--P);0 === i.length && (i.mode = 21);
                            break;
                        case 26:
                            if (0 === d)
                                break e;
                            r[s++] = i.length,
                            d--,
                            i.mode = 21;
                            break;
                        case 27:
                            if (i.wrap) {
                                for (; k < 32; ) {
                                    if (0 === u)
                                        break e;
                                    u--,
                                    x |= n[o++] << k,
                                    k += 8
                                }
                                if (T -= d,
                                e.total_out += T,
                                i.total += T,
                                T && (e.adler = i.check = i.flags ? p(i.check, r, T, s - T) : f(i.check, r, T, s - T)),
                                T = d,
                                (i.flags ? x : a(x)) !== i.check) {
                                    e.msg = "incorrect data check",
                                    i.mode = 30;
                                    break
                                }
                                x = 0,
                                k = 0
                            }
                            i.mode = 28;
                        case 28:
                            if (i.wrap && i.flags) {
                                for (; k < 32; ) {
                                    if (0 === u)
                                        break e;
                                    u--,
                                    x += n[o++] << k,
                                    k += 8
                                }
                                if (x !== (4294967295 & i.total)) {
                                    e.msg = "incorrect length check",
                                    i.mode = 30;
                                    break
                                }
                                x = 0,
                                k = 0
                            }
                            i.mode = 29;
                        case 29:
                            E = 1;
                            break e;
                        case 30:
                            E = -3;
                            break e;
                        case 31:
                            return -4;
                        case 32:
                        default:
                            return y
                        }
                    return e.next_out = s,
                    e.avail_out = d,
                    e.next_in = o,
                    e.avail_in = u,
                    i.hold = x,
                    i.bits = k,
                    (i.wsize || T !== e.avail_out && i.mode < 30 && (i.mode < 27 || 4 !== t)) && l(e, e.output, e.next_out, T - e.avail_out) ? (i.mode = 31,
                    -4) : (S -= e.avail_in,
                    T -= e.avail_out,
                    e.total_in += S,
                    e.total_out += T,
                    i.total += T,
                    i.wrap && T && (e.adler = i.check = i.flags ? p(i.check, r, T, e.next_out - T) : f(i.check, r, T, e.next_out - T)),
                    e.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === C ? 128 : 0) + (20 === i.mode || 15 === i.mode ? 256 : 0),
                    (0 === S && 0 === T || 4 === t) && E === b && (E = -5),
                    E)
                }
                ,
                t.inflateEnd = function(e) {
                    if (!e || !e.state)
                        return y;
                    var t = e.state;
                    return t.window && (t.window = null),
                    e.state = null,
                    b
                }
                ,
                t.inflateGetHeader = function(e, t) {
                    var i;
                    return e && e.state ? 0 == (2 & (i = e.state).wrap) ? y : (i.head = t,
                    t.done = !1,
                    b) : y
                }
                ,
                t.inflateSetDictionary = function(e, t) {
                    var i, a = t.length;
                    return e && e.state ? 0 !== (i = e.state).wrap && 11 !== i.mode ? y : 11 === i.mode && f(1, t, a, 0) !== i.check ? -3 : l(e, t, a, a) ? (i.mode = 31,
                    -4) : (i.havedict = 1,
                    b) : y
                }
                ,
                t.inflateInfo = "pako inflate (from Nodeca project)"
            }
            , function(e, t, i) {
                "use strict";
                e.exports = function(e, t) {
                    var i, a, n, r, o, s, c, l, u, d, h, f, p, m, g, v, _, b, y, w, C, x, k, S, T;
                    i = e.state,
                    a = e.next_in,
                    S = e.input,
                    n = a + (e.avail_in - 5),
                    r = e.next_out,
                    T = e.output,
                    o = r - (t - e.avail_out),
                    s = r + (e.avail_out - 257),
                    c = i.dmax,
                    l = i.wsize,
                    u = i.whave,
                    d = i.wnext,
                    h = i.window,
                    f = i.hold,
                    p = i.bits,
                    m = i.lencode,
                    g = i.distcode,
                    v = (1 << i.lenbits) - 1,
                    _ = (1 << i.distbits) - 1;
                    e: do {
                        p < 15 && (f += S[a++] << p,
                        p += 8,
                        f += S[a++] << p,
                        p += 8),
                        b = m[f & v];
                        t: for (; ; ) {
                            if (f >>>= y = b >>> 24,
                            p -= y,
                            0 == (y = b >>> 16 & 255))
                                T[r++] = 65535 & b;
                            else {
                                if (!(16 & y)) {
                                    if (0 == (64 & y)) {
                                        b = m[(65535 & b) + (f & (1 << y) - 1)];
                                        continue t
                                    }
                                    if (32 & y) {
                                        i.mode = 12;
                                        break e
                                    }
                                    e.msg = "invalid literal/length code",
                                    i.mode = 30;
                                    break e
                                }
                                w = 65535 & b,
                                (y &= 15) && (p < y && (f += S[a++] << p,
                                p += 8),
                                w += f & (1 << y) - 1,
                                f >>>= y,
                                p -= y),
                                p < 15 && (f += S[a++] << p,
                                p += 8,
                                f += S[a++] << p,
                                p += 8),
                                b = g[f & _];
                                i: for (; ; ) {
                                    if (f >>>= y = b >>> 24,
                                    p -= y,
                                    !(16 & (y = b >>> 16 & 255))) {
                                        if (0 == (64 & y)) {
                                            b = g[(65535 & b) + (f & (1 << y) - 1)];
                                            continue i
                                        }
                                        e.msg = "invalid distance code",
                                        i.mode = 30;
                                        break e
                                    }
                                    if (C = 65535 & b,
                                    p < (y &= 15) && (f += S[a++] << p,
                                    (p += 8) < y && (f += S[a++] << p,
                                    p += 8)),
                                    (C += f & (1 << y) - 1) > c) {
                                        e.msg = "invalid distance too far back",
                                        i.mode = 30;
                                        break e
                                    }
                                    if (f >>>= y,
                                    p -= y,
                                    C > (y = r - o)) {
                                        if ((y = C - y) > u && i.sane) {
                                            e.msg = "invalid distance too far back",
                                            i.mode = 30;
                                            break e
                                        }
                                        if (x = 0,
                                        k = h,
                                        0 === d) {
                                            if (x += l - y,
                                            y < w) {
                                                w -= y;
                                                do {
                                                    T[r++] = h[x++]
                                                } while (--y);x = r - C,
                                                k = T
                                            }
                                        } else if (d < y) {
                                            if (x += l + d - y,
                                            (y -= d) < w) {
                                                w -= y;
                                                do {
                                                    T[r++] = h[x++]
                                                } while (--y);if (x = 0,
                                                d < w) {
                                                    w -= y = d;
                                                    do {
                                                        T[r++] = h[x++]
                                                    } while (--y);x = r - C,
                                                    k = T
                                                }
                                            }
                                        } else if (x += d - y,
                                        y < w) {
                                            w -= y;
                                            do {
                                                T[r++] = h[x++]
                                            } while (--y);x = r - C,
                                            k = T
                                        }
                                        for (; w > 2; )
                                            T[r++] = k[x++],
                                            T[r++] = k[x++],
                                            T[r++] = k[x++],
                                            w -= 3;
                                        w && (T[r++] = k[x++],
                                        w > 1 && (T[r++] = k[x++]))
                                    } else {
                                        x = r - C;
                                        do {
                                            T[r++] = T[x++],
                                            T[r++] = T[x++],
                                            T[r++] = T[x++],
                                            w -= 3
                                        } while (w > 2);w && (T[r++] = T[x++],
                                        w > 1 && (T[r++] = T[x++]))
                                    }
                                    break
                                }
                            }
                            break
                        }
                    } while (a < n && r < s);a -= w = p >> 3,
                    f &= (1 << (p -= w << 3)) - 1,
                    e.next_in = a,
                    e.next_out = r,
                    e.avail_in = a < n ? n - a + 5 : 5 - (a - n),
                    e.avail_out = r < s ? s - r + 257 : 257 - (r - s),
                    i.hold = f,
                    i.bits = p
                }
            }
            , function(e, t, i) {
                "use strict";
                var a = i(7)
                  , n = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]
                  , r = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]
                  , o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]
                  , s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                e.exports = function(e, t, i, c, l, u, d, h) {
                    var f, p, m, g, v, _, b, y, w, C = h.bits, x = 0, k = 0, S = 0, T = 0, P = 0, L = 0, D = 0, A = 0, M = 0, O = 0, F = null, R = 0, $ = new a.Buf16(16), I = new a.Buf16(16), E = null, j = 0;
                    for (x = 0; x <= 15; x++)
                        $[x] = 0;
                    for (k = 0; k < c; k++)
                        $[t[i + k]]++;
                    for (P = C,
                    T = 15; T >= 1 && 0 === $[T]; T--)
                        ;
                    if (P > T && (P = T),
                    0 === T)
                        return l[u++] = 20971520,
                        l[u++] = 20971520,
                        h.bits = 1,
                        0;
                    for (S = 1; S < T && 0 === $[S]; S++)
                        ;
                    for (P < S && (P = S),
                    A = 1,
                    x = 1; x <= 15; x++)
                        if (A <<= 1,
                        (A -= $[x]) < 0)
                            return -1;
                    if (A > 0 && (0 === e || 1 !== T))
                        return -1;
                    for (I[1] = 0,
                    x = 1; x < 15; x++)
                        I[x + 1] = I[x] + $[x];
                    for (k = 0; k < c; k++)
                        0 !== t[i + k] && (d[I[t[i + k]]++] = k);
                    if (0 === e ? (F = E = d,
                    _ = 19) : 1 === e ? (F = n,
                    R -= 257,
                    E = r,
                    j -= 257,
                    _ = 256) : (F = o,
                    E = s,
                    _ = -1),
                    O = 0,
                    k = 0,
                    x = S,
                    v = u,
                    L = P,
                    D = 0,
                    m = -1,
                    g = (M = 1 << P) - 1,
                    1 === e && M > 852 || 2 === e && M > 592)
                        return 1;
                    for (; ; ) {
                        b = x - D,
                        d[k] < _ ? (y = 0,
                        w = d[k]) : d[k] > _ ? (y = E[j + d[k]],
                        w = F[R + d[k]]) : (y = 96,
                        w = 0),
                        f = 1 << x - D,
                        S = p = 1 << L;
                        do {
                            l[v + (O >> D) + (p -= f)] = b << 24 | y << 16 | w | 0
                        } while (0 !== p);for (f = 1 << x - 1; O & f; )
                            f >>= 1;
                        if (0 !== f ? (O &= f - 1,
                        O += f) : O = 0,
                        k++,
                        0 == --$[x]) {
                            if (x === T)
                                break;
                            x = t[i + d[k]]
                        }
                        if (x > P && (O & g) !== m) {
                            for (0 === D && (D = P),
                            v += S,
                            A = 1 << (L = x - D); L + D < T && !((A -= $[L + D]) <= 0); )
                                L++,
                                A <<= 1;
                            if (M += 1 << L,
                            1 === e && M > 852 || 2 === e && M > 592)
                                return 1;
                            l[m = O & g] = P << 24 | L << 16 | v - u | 0
                        }
                    }
                    return 0 !== O && (l[v + O] = x - D << 24 | 64 << 16 | 0),
                    h.bits = P,
                    0
                }
            }
            , function(e, t, i) {
                "use strict";
                e.exports = function() {
                    this.text = 0,
                    this.time = 0,
                    this.xflags = 0,
                    this.os = 0,
                    this.extra = null,
                    this.extra_len = 0,
                    this.name = "",
                    this.comment = "",
                    this.hcrc = 0,
                    this.done = !1
                }
            }
            ])
        }
        ,
        e.exports = a()
    },
    QnQ8: function(e, t, i) {
        "use strict";
        (function(e) {
            function i(e) {
                function t(e, t, i) {
                    var a = 2 / (t + 1)
                      , n = 0;
                    return d.EMA_VAL_SET[t] && d.EMA_VAL_SET[t][i - 1] ? n = d.EMA_VAL_SET[t][i - 1] : d.EMA_VAL_SET[t] || (d.EMA_VAL_SET[t] = []),
                    a = n ? a : 1,
                    d.EMA_VAL_SET[t][i] = a * (e(i) - n) + n,
                    d.EMA_VAL_SET[t][i]
                }
                function i(e, i, a) {
                    function n(e) {
                        return i[e] ? i[e].close : NaN
                    }
                    return e < 1 * d.cfg.MACD[0] - 1 ? NaN : e < 1 * d.cfg.MACD[1] - 1 ? NaN : function(e) {
                        return t(n, 1 * d.cfg.MACD[0], e) - t(n, 1 * d.cfg.MACD[1], e)
                    }(e)
                }
                function a(e, t) {
                    return e < 1 ? NaN : t[e - 1].close
                }
                function n(e, t, i, a, n) {
                    var r = 0;
                    if (a - 1 > t)
                        return NaN;
                    for (var o = 0; o < a; o++)
                        r += e(t - o, i);
                    return r / a
                }
                function r(e, t) {
                    return (t[e].close - s(e, t, d.cfg.KDJ.N)) / (o(e, t, d.cfg.KDJ.N) - s(e, t, d.cfg.KDJ.N)) * 100
                }
                function o(e, t, i) {
                    var a = Number.MIN_VALUE;
                    if (i - 1 > e)
                        return NaN;
                    for (var n = 0; n < i; n++)
                        a = Math.max(t[e - n].high, a);
                    return a
                }
                function s(e, t, i) {
                    var a = Number.MAX_VALUE;
                    if (i - 1 > e)
                        return NaN;
                    for (var n = 0; n < i; n++)
                        a = Math.min(t[e - n].low, a);
                    return a
                }
                function c(e, t, i) {
                    return i && console.log("cutFixed", e),
                    e = l(e, i),
                    i && console.log("had scientific2float", e),
                    t ? function(e, t, i) {
                        var a, n = l(e *= 1).toString().split(".");
                        return t = 1 * t || 0,
                        n.length < 2 ? (i && console.log(276, e, t),
                        n[1] = Math.pow(10, t).toString().substring(1, t + 1)) : (a = l(n[1]).toString().length,
                        i && console.log(279, e, n, t, l(l(n[1]) / Math.pow(10, a)).toString() + "00000000000000"),
                        n[1] = (l(l(n[1]) / Math.pow(10, a)).toString() + "00000000000000").substring(2, t + 2),
                        i && console.log(279, e, a, n)),
                        n
                    }(e, t, i).join(".") : Math.floor(e)
                }
                function l(e, t) {
                    t && console.log("scientific2float", e);
                    var i, a, n, r, o, s = "string" == typeof e ? e.toLowerCase().replace(/\s/g, "") : e.toString().toLowerCase().replace(/\s/g, ""), c = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
                    return /e/.test(s) ? (s.replace("+", ""),
                    /e\-/.test(s) || s.replace("e", "e+"),
                    a = /\+/.test(s),
                    n = s.split("e"),
                    i = /\-/.test(n[0].toString()) ? "-0." : "0.",
                    n[0] = n[0].replace("-", ""),
                    r = n[0].split(".")[1] ? n[0].split(".")[1].length : 0,
                    o = n[1].split(a ? "+" : "-")[1],
                    n = n[0].replace(".", ""),
                    a ? n + c.substring(0, o - r) : i + c.substring(0, o - 1) + n) : s
                }
                function u(e, t, i) {
                    return t = t || 2,
                    function(e, t) {
                        return new Array(t + 1).join(e)
                    }(i || "0", t).substring(0, t - e.toString().length) + e
                }
                var d = e;
                d.EMA_VAL_SET = [];
                var h = {
                    add: document.addEventListener ? function(e, t, i) {
                        e.addEventListener(t, i, !1)
                    }
                    : function(e, t, i) {
                        e.attachEvent("on" + t, i)
                    }
                    ,
                    remove: document.removeEventListener ? function(e, t, i) {
                        e.removeEventListener(t, i, !1)
                    }
                    : function(e, t, i) {
                        e.detachEvent("on" + t, i)
                    }
                    ,
                    target: function(e) {
                        return e.target ? e.target : window.event.srcElement
                    },
                    delta: function(e) {
                        var t = e || window.event;
                        return t.wheelDelta / -120 || t.detail / 3
                    },
                    stop: function(e) {
                        e && e.stopPropagation ? (e.stopPropagation(),
                        e.preventDefault()) : (window.event.cancelBubble = !0,
                        window.event.returnValue = !1)
                    },
                    mouse: function(e) {
                        return {
                            x: e.pageX || e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft),
                            y: e.pageY || e.clientY + (document.documentElement.scrollTop || document.body.scrollTop)
                        }
                    }
                }
                  , f = function() {
                    var e = document.documentElement.classList
                      , t = {
                        hasClass: function(t, i) {
                            return e ? t.classList.contains(i) : new RegExp("(^|\\s)" + i + "(\\s|$)").test(t.className)
                        },
                        addClass: function(i, a) {
                            e ? i.classList.add(a) : t.hasClass(i, a) || (i.className = i.className + " " + a)
                        },
                        removeClass: function(i, a) {
                            e ? i.classList.remove(a) : t.hasClass(i, a) && (i.className = i.className.replace(new RegExp("(^|\\s)*" + a + "(\\s|$)*","g"), ""))
                        },
                        getPosition: function(e, t) {
                            var i, a, n, r = e, o = 0, s = 0;
                            if (e.nodeName) {
                                for (; r && ("body" == r.nodeName.toLowerCase() && (a = 1),
                                n = r.currentStyle ? r.currentStyle : document.defaultView.getComputedStyle(r),
                                o += r.offsetLeft + (parseInt(n.borderLeftWidth) ? parseInt(n.borderLeftWidth) : 0) - (a ? 0 : r.scrollLeft),
                                s += r.offsetTop + (parseInt(n.borderTopWidth) ? parseInt(n.borderTopWidth) : 0) - (a ? 0 : r.scrollTop),
                                i = r.offsetParent ? r.offsetParent : r,
                                !(t & t === (r = r.offsetParent))); )
                                    ;
                                return {
                                    x: o,
                                    y: s,
                                    element: r,
                                    forefather: t || i
                                }
                            }
                        }
                    };
                    return t
                }();
                !function(e) {
                    var t = {};
                    window.rentmpl = function(e, i) {
                        var a = /\W/.test(e) ? new Function("obj","var p=[];with(obj){p.push('" + e.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : t[e] = t[e] || rentmpl(document.getElementById(e).innerHTML);
                        return i ? a(i) : a
                    }
                }(),
                d.toolkit = {
                    Event: h,
                    y2x: function(e, t, i, a, n) {
                        var r = (i - e) / (a - t);
                        return e - r * t + r * n
                    },
                    LLV: s,
                    EMA: t,
                    DIF: i,
                    DEA: function(e, a) {
                        function n(e) {
                            return i(e, a)
                        }
                        return e < 1 * d.cfg.MACD[1] - 1 ? NaN : function(e) {
                            return t(n, 1 * d.cfg.MACD[2], e)
                        }(e)
                    },
                    LC: a,
                    MA: n,
                    HHV: o,
                    getK: function(e, t) {
                        return n(r, e, t, d.cfg.KDJ.M1)
                    },
                    getMax: function(e, t) {
                        return Math.max(t[e].close - a(e, t), 0)
                    },
                    getAbs: function(e, t) {
                        return Math.abs(t[e].close - a(e, t))
                    },
                    getRSV: r,
                    STD: function(e, t, i, a) {
                        for (var n = 0, r = 0; r < e; r++)
                            n += i[a - r] ? Math.pow(1 * i[a - r].close - t, 2) : NaN;
                        return Math.sqrt(n / e)
                    },
                    raf: function(e) {
                        var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                        t(function i() {
                            e(),
                            t(i)
                        })
                    },
                    realType: function(e) {
                        return Object.prototype.toString.call(e).split(" ")[1].replace(/[^\w]/g, "").toLowerCase()
                    },
                    shortIndex: function(e, t, i, a, n) {
                        t = t || 0;
                        var r = 1 * e < 0 ? -1 : 1
                          , o = function(e, t, i) {
                            for (var a, n = i.length, r = [e, ""]; n--; )
                                if (e / (a = Math.pow(t, n + 1)) > 1) {
                                    r = [e / a, i[n], 1];
                                    break
                                }
                            return r
                        }(e = Math.abs(1 * e), i = i || 1e4, a = a || {
                            1000: ["K", "M", "B"],
                            10000: ["万", "亿", "兆"]
                        }[i]);
                        return n && 1 * (o[0] * r + o[1]) == o[0] * r * 1 ? o[0] * r : c(o[0] * r, t) + o[1]
                    },
                    cutFixed: c,
                    pixRatio: function(e) {
                        return (window.devicePixelRatio || 1) / (e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
                    },
                    time2Date: function(e, t) {
                        var i = 1e3 * ((new Date).getTimezoneOffset() + 540) * 60
                          , a = e < Math.pow(10, 11) ? new Date(1e3 * e + i) : new Date(e + i)
                          , n = a.getFullYear()
                          , r = u(a.getMonth() + 1)
                          , o = u(a.getDate())
                          , s = u(a.getHours())
                          , c = u(a.getMinutes())
                          , l = u(a.getSeconds());
                        return t ? t.toLowerCase().replace("y", n).replace("m", r).replace("d", o).replace("h", s).replace("i", c).replace("s", l) : n + "-" + r + "-" + o + " " + s + ":" + c + ":" + l
                    },
                    attFather: function e(t, i) {
                        return t && i && t.parentNode ? t.getAttribute(i) ? function(e, t) {
                            var i = {
                                att: t
                            };
                            return i.node = e,
                            i
                        }(t, t.getAttribute(i)) : e(t.parentNode, i) : null
                    },
                    dom: f,
                    copy: function(e, t) {
                        for (var i in t)
                            e[i] = t[i];
                        return e
                    }
                }
            }
            function a(e) {
                e.cfg = {
                    levelList: [[54, 47], [50, 43], [46, 39], [40, 35], [36, 31], [32, 27], [30, 25], [28, 23], [26, 21], [22, 19], [20, 17], [18, 15], [16, 13], [14, 11], [12, 9], [10, 7], [8, 5], [6, 3], [3, 1], [1, 1]],
                    langMap: {
                        zh_cn: {
                            "量": "量",
                            "开": "开",
                            "高": "高",
                            "低": "低",
                            "收": "收"
                        },
                        zh_tw: {
                            "量": "量",
                            "开": "開",
                            "高": "高",
                            "低": "低",
                            "收": "收"
                        },
                        en_us: {
                            "量": "volumes",
                            "开": "open",
                            "高": "high",
                            "低": "low",
                            "收": "close"
                        }
                    },
                    langword: "量,开,高,低,收",
                    lang: "zh_cn",
                    fontFamily: '"Microsoft Yahei", Arial, Helvetica, "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif',
                    schemesList: {
                        "hb-day": {
                            rise: "#03c087",
                            riseStyle: "0",
                            fall: "#ef5555",
                            fallStyle: "1",
                            volumeStyle: {
                                spacing: 0,
                                rise: {
                                    background: "#03c087",
                                    border: "#03c087"
                                },
                                fall: {
                                    background: "#ef5555",
                                    border: "#ef5555"
                                }
                            },
                            realtime: "rgb(71, 78, 112)",
                            shadowFill: "rgba(71, 78, 112, 0.1)",
                            gradientStart: "rgba(71, 78, 112, 0.1)",
                            gradientend: "rgba(71, 78, 112, 0.02)",
                            shadowStyle: 1,
                            crossLine: "#23283D",
                            crossLineStyle: 1,
                            ruleLineColor: "#9194a4",
                            tipColor: "#999",
                            tipFontColor: "#fff",
                            layoutColor: "#9194a4",
                            layoutFont: "#9194a4",
                            fontColor: "#9194a4",
                            iLines: ["#965fc4", "#84aad5", "#55b263", "#b7248a", "#f84fff", "#ee742c", "#f0f091", "#cccccc"],
                            background: "#fff"
                        },
                        "hb-night": {
                            rise: "#589065",
                            riseStyle: "0",
                            fall: "#ae4e54",
                            fallStyle: "1",
                            volumeStyle: {
                                spacing: 0,
                                rise: {
                                    background: "#03c087",
                                    border: "#03c087"
                                },
                                fall: {
                                    background: "#ef5555",
                                    border: "#ef5555"
                                }
                            },
                            realtime: "rgb(122, 152, 247)",
                            shadowFill: "rgba(122, 152, 247, .35)",
                            gradientStart: "rgba(122, 152, 247, .35)",
                            gradientend: "rgba(122, 152, 247, 0)",
                            shadowStyle: 1,
                            crossLine: "#9194A3",
                            crossLineStyle: 1,
                            ruleLineColor: "#9194A3",
                            tipColor: "#1E2731",
                            tipFontColor: "#EAEBEC",
                            layoutColor: "#4e5b85",
                            layoutFont: "#61688A",
                            fontColor: "#61688A",
                            iLines: ["#965fc4", "#84aad5", "#55b263", "#b7248a", "#f84fff", "#ee742c", "#f0f091", "#cccccc"],
                            background: "#181B2A"
                        }
                    },
                    binaryList: {
                        1000: ["K", "M", "B"],
                        10000: ["万", "亿", "兆"]
                    },
                    MA: [5, 10, 30, 60],
                    BOLL: 20,
                    VMA: [5, 10],
                    RMA: [30],
                    WR: {
                        N: 10,
                        N1: 6
                    },
                    RSI: {
                        N1: 6,
                        N2: 12,
                        N3: 24
                    },
                    MACD: [12, 26, 9],
                    KDJ: {
                        N: 9,
                        M1: 3,
                        M2: 3
                    },
                    KDJLimit: [0, 100],
                    RSILimit: [20, 80],
                    WRLimit: [20, 80],
                    mainInd: ["MA", "BOLL"],
                    viceInd: ["MACD", "KDJ", "WR", "RSI"],
                    splitWindow: [[{
                        offsetTop: 30,
                        minRuleHeight: 80,
                        percent: .68,
                        range: .7,
                        brush: "drawKLine",
                        timeline: 30
                    }, {
                        offsetTop: 30,
                        minRuleHeight: 30,
                        percent: .12,
                        range: 1,
                        brush: "drawInd"
                    }, {
                        offsetTop: 30,
                        minRuleHeight: 30,
                        percent: .2,
                        range: .7,
                        brush: "drawInd"
                    }], [{
                        offsetTop: 30,
                        minRuleHeight: 80,
                        percent: .7,
                        range: 1,
                        brush: "drawRealtime"
                    }, {
                        offsetTop: 30,
                        minRuleHeight: 30,
                        percent: .3,
                        range: 1,
                        brush: "drawVol",
                        timeline: 30
                    }]],
                    periodSecond: {
                        "1min": 60,
                        "5min": 300,
                        "15min": 900,
                        "30min": 1800,
                        "60min": 3600,
                        "4hour": 14400,
                        "1day": .001,
                        "1mon": .03,
                        "1week": .007,
                        "1year": .365
                    },
                    logo: !0,
                    event: !0,
                    tips: !0,
                    noInd: 0,
                    toolHeight: 0,
                    newPriceForce: 0,
                    priceFloat: 0,
                    amountFloat: 4,
                    percentStart: .6,
                    range: .7,
                    paddingRight: 15,
                    outRuleWidth: 0,
                    binary: 1e4,
                    schemes: "bitex_light",
                    indicator: "ma",
                    vIndicator: "vol",
                    offsetTop: 30,
                    level: 2,
                    period: "60",
                    minRuleHeight: [80, 30],
                    brushList: [["drawKLine", "drawInd"], ["drawRealtime", "drawInd"]],
                    ruleWidth: 70,
                    realtime: 0,
                    showHigh: 1,
                    showLow: 1,
                    minDep: .01,
                    splitLine: 0,
                    canvasOffset: 0,
                    ruleLine: 0,
                    moveDepth: 1,
                    baseLineWidth: 1.5,
                    pause: 0,
                    moveThreshold: 999999,
                    border: 1,
                    version: "1.1.11",
                    specialChart: 0,
                    hideOpen: 0,
                    showParity: 1
                }
            }
            function n() {
                var e = this;
                e.lastMoveToLocation || (e.moveForDashed = function(t, i) {
                    e.moveTo(t, i),
                    e.lastMoveToLocation.x = t,
                    e.lastMoveToLocation.y = i
                }
                ),
                e.lastMoveToLocation = {},
                e.dashedLineTo = function(t, i, a) {
                    a = void 0 === a ? 3 : a;
                    for (var n, r, o = e.lastMoveToLocation.x, s = e.lastMoveToLocation.y, c = t - o, l = i - s, u = Math.floor(Math.sqrt(c * c + l * l) / a), d = 0; d < u; ++d)
                        n = o + c / u * d,
                        r = s + l / u * d,
                        d % 2 == 0 ? e.moveForDashed(n, r) : e.lineTo(n, r);
                    e.moveForDashed(t, i)
                }
            }
            function r(e) {
                function t() {
                    a.max = -1 * Number.MAX_VALUE,
                    a.min = Number.MAX_VALUE,
                    a.rule = null,
                    a.verticalOffset = null,
                    a.clearRect(0, 0, a.w * a.ratio, a.h * a.ratio),
                    a.data = {},
                    a.fulldata = {},
                    a.loadingstatus = null
                }
                var i = e
                  , a = this;
                a.max = -1 * Number.MAX_VALUE,
                a.min = Number.MAX_VALUE,
                a.y2x = function(e, t, i, a, n) {
                    var r = (i - e) / (a - t);
                    return e - r * t + r * n
                }
                ,
                a.getRule = function(e) {
                    var t = a.max - a.min;
                    return a.rule = t ? (a.h * a.ratio - a.timeline * a.ratio - (i.cfg.offsetTop * a.ratio || 0)) * (e || a.drawRange || 1) / t : 0,
                    a.rule
                }
                ,
                a.Y = function(e) {
                    return ~~((a.max - e) * a.rule + a.verticalOffset * a.ratio) - .5
                }
                ,
                a.dispose = function(e) {
                    var t = e.length - i.cfg.canvasOffset - i.cfg.lens
                      , a = e.length - i.cfg.canvasOffset;
                    return e.length < i.cfg.lens && (t = 0),
                    t < 0 && (t = 0),
                    a - t < i.cfg.lens && a - t < e.length && (a = t + Math.min(i.cfg.lens, e.length)),
                    [].concat(e).slice(t, a)
                }
                ,
                a.verOffset = function(e) {
                    return ~~((a.h - i.cfg.offsetTop) * (.5 - (e || a.drawRange || 1) / 2) + i.cfg.offsetTop)
                }
                ,
                a.timerule = function(e) {
                    if (a.timeline) {
                        a.textAlign = "start";
                        for (var t = 0, n = ~~(100 / i.cfg.curLevel[0]); t < Math.max(e.length, i.cfg.lens) / n; t++)
                            !function(e, t, n, r) {
                                var o;
                                o = i.cfg.period > 1 ? i.toolkit.time2Date(e + i.cfg.period * (0 + t * n), "m-d h:i") : i.toolkit.time2Date(e + 1e3 * i.cfg.period * 86400 * (0 + t * n), "y-m-d"),
                                a.font = "100 " + 12 * a.ratio + "px " + i.cfg.fontFamily,
                                a.textBaseline = "baseline",
                                a.textAlign = "left",
                                a.fillStyle = i.cfg.schemesList[i.cfg.schemes].layoutFont,
                                a.fillText(o, ~~((~~(i.cfg.curLevel[0] / 2) + t * i.cfg.curLevel[0] * n) * a.ratio) - .5, (a.h - (a.timeline - 3)) * a.ratio + (a.timeline - 3) * a.ratio / 2),
                                a.beginPath(),
                                a.lineWidth = 1,
                                a.strokeStyle = i.cfg.schemesList[i.cfg.schemes].layoutColor,
                                a.moveTo(~~((~~(i.cfg.curLevel[0] / 2) + t * i.cfg.curLevel[0] * n) * a.ratio) - .5, ~~((a.h - a.timeline) * a.ratio) - .5),
                                a.lineTo(~~((~~(i.cfg.curLevel[0] / 2) + t * i.cfg.curLevel[0] * n) * a.ratio) - .5, ~~((a.h - a.timeline + 3) * a.ratio) - .5),
                                Math.abs(a.h + a.top - i.size.h) > 5 && (a.moveTo(~~((~~(i.cfg.curLevel[0] / 2) + t * i.cfg.curLevel[0] * n) * a.ratio) - .5, ~~(a.h * a.ratio) - .5),
                                a.lineTo(~~((~~(i.cfg.curLevel[0] / 2) + t * i.cfg.curLevel[0] * n) * a.ratio) - .5, ~~((a.h - 4) * a.ratio) - .5)),
                                a.stroke(),
                                a.textAlign = "start",
                                i.toolkit.time2Date(e + i.cfg.period * (0 + t * n), "m-d")
                            }(e[0].ts, n, t)
                    }
                }
                ,
                a.y2v = function(e, t) {
                    var n = t || a
                      , r = n.floatLens || 0;
                    return i.toolkit.cutFixed(n.max - (e - n.verticalOffset * n.ratio - .5) / n.rule, r)
                }
                ,
                a.drawLogo = function() {
                    if (i.cfg.logo) {
                        var e, t = i.cfg.opacity ? 1 - i.cfg.opacity : .5, n = a.w * a.ratio, r = a.h * a.ratio, o = i.cfg.opacity || .03, s = i.cfg.schemesList[i.cfg.schemes].background, c = i.cfg.schemesList[i.cfg.schemes].logoColor || i.cfg.schemesList[i.cfg.schemes].fontColor, l = Math.min(n, r) * (1 - t) / 2, u = 1 * (.25 * l * 2).toFixed(), d = 1 * (.545455 * l * 2).toFixed(), h = 1 * (.045 * l * 2).toFixed(), f = 1 * (.088182 * l * 2).toFixed(), p = 1 * (.23 * l * 2).toFixed(), m = 1 * (.227273 * l * 2).toFixed(), g = {
                            x: n / 2,
                            y: r / 2,
                            left: n / 2 - l,
                            top: r / 2 - l
                        }, v = {
                            x: 1 * (p + g.left).toFixed(),
                            y: 1 * (m + g.top).toFixed()
                        };
                        e = e || function(e, t) {
                            var i, a, n;
                            if (!e.indexOf("#"))
                                return 7 === e.length ? (i = parseInt(e.substring(1, 3), 16),
                                a = parseInt(e.substring(3, 5), 16),
                                n = parseInt(e.substring(5, 7), 16)) : (i = parseInt(e.substring(1, 2) + e.substring(1, 2), 16),
                                a = parseInt(e.substring(2, 3) + e.substring(2, 3), 16),
                                n = parseInt(e.substring(3, 4) + e.substring(3, 4), 16)),
                                "rgba(" + i + "," + a + "," + n + "," + t + ")"
                        }(c, o),
                        l < 0 || (a.fillStyle = e,
                        a.beginPath(),
                        a.arc(g.x, g.y, l, 0, 2 * Math.PI),
                        a.fill(),
                        a.fillStyle = s,
                        a.beginPath(),
                        a.arc(g.x, g.y, l - f, 0, 2 * Math.PI),
                        a.fill(),
                        a.fillStyle = e,
                        a.fillRect(v.x, v.y, u, d),
                        a.fillRect(v.x + h + u, v.y, u, d),
                        a.fillStyle = s,
                        a.fillRect(v.x + u / 3, v.y, 2 * u / 3, 1 * d / 4),
                        a.fillRect(v.x + u / 3, v.y + 3 * d / 4, 2 * u / 3, 1 * d / 4),
                        a.fillRect(v.x, v.y + 5 * d / 12, 2 * u / 3, 1 * d / 6),
                        a.fillRect(v.x + h + u, v.y, 2 * u / 3, 1 * d / 4),
                        a.fillRect(v.x + h + u, v.y + 3 * d / 4, 2 * u / 3, 1 * d / 4),
                        a.fillRect(v.x + h + u + u / 3, v.y + 5 * d / 12, 2 * u / 3, 1 * d / 6))
                    }
                }
                ,
                t(),
                a.clear = t
            }
            function o(e) {
                function t(e, t, r, o, s) {
                    var c = 0 === o ? o : o || 1 * function(e, t) {
                        return n.toolkit.cutFixed(a.max - (e - a.verticalOffset * a.ratio - .5) / a.rule, t || 2)
                    }(t, a.floatLens);
                    (1 * c < 1 * n.cfg.binary || s) && (c = n.toolkit.cutFixed(c, i || 0)),
                    a.tagCheck && !a.tagCheck(c) || (a.font = "100 " + 12 * a.ratio + "px " + n.cfg.fontFamily,
                    a.fillStyle = n.cfg.schemesList[n.cfg.schemes].layoutFont,
                    a.fillText(s ? c : n.toolkit.shortIndex(c, i || 0, n.cfg.binary, n.cfg.binary[n.cfg.binary]), e + 5 * a.ratio, t))
                }
                var i, a = this, n = e;
                a.drawLine = function(e, r, o, s) {
                    var c, l = n.size.w > n.cfg.outRuleWidth, u = (a.h - n.cfg.offsetTop - a.timeline) * a.drawRange * a.ratio, d = o || a.minRuleHeight, h = Math.ceil(u / d / a.ratio), f = u / h, p = l ? n.cfg.ruleWidth : 0, m = (n.cfg.realtime,
                    n.size.w,
                    [{}, {
                        move: "moveForDashed",
                        line: "dashedLineTo"
                    }, {
                        move: "moveTo",
                        line: "lineTo"
                    }]);
                    if (i = e,
                    !1,
                    r && ++h,
                    a.max != a.min) {
                        a.font = "100 " + 12 * a.ratio + "px " + n.cfg.fontFamily,
                        a.textBaseline = "middle",
                        a.lineWidth = 1,
                        a.strokeStyle = n.cfg.schemesList[n.cfg.schemes].ruleLineColor,
                        a.beginPath();
                        for (var g = h; g--; )
                            c = 0 == g ? a.max : g == h - 1 && r ? a.min : null,
                            a.ruleLine && (a[m[n.cfg.ruleLine].move](0, a.verticalOffset * a.ratio + g * f - .5),
                            a[m[n.cfg.ruleLine].line](n.size.w * a.ratio - p * a.ratio, a.verticalOffset * a.ratio + g * f - .5, 2)),
                            t(n.size.w * a.ratio - p * a.ratio, a.verticalOffset * a.ratio + g * f - .5, a.rule, c, s);
                        a.stroke(),
                        a.drawZeroLine = function(e) {
                            a.lineWidth = 1 * a.ratio,
                            a.strokeStyle = n.cfg.schemesList[n.cfg.schemes].rise,
                            a.beginPath(),
                            a.moveTo(0, e),
                            a.lineTo(n.size.w * a.ratio - p * a.ratio, e),
                            e,
                            a.stroke()
                        }
                    }
                }
                ,
                a.clear = function() {
                    a.clearRect(0, 0, a.w, a.h)
                }
            }
            function s(e) {
                function t(e, t, n, r, o) {
                    function s(e) {
                        return Math.min(Math.max(e, n), r)
                    }
                    function c(e) {
                        i.beginPath(),
                        i.lineWidth = a.cfg.baseLineWidth,
                        f = d[0] * i.ratio / 2 + (h ? 0 : .5),
                        (u[0][e] || 1 * u[0][e] == 0) && (i.moveTo(f, i.Y(s(u[0][e]))),
                        l = 1),
                        i.strokeStyle = a.cfg.schemesList[a.cfg.schemes].iLines[p];
                        for (var t = 0, n = u.length; t < n; t++)
                            l || !u[t][e] && 1 * u[t][e] != 0 || (i.moveTo(f, i.Y(s(u[t][e]))),
                            l = 1),
                            f = d[0] * i.ratio * t + d[0] * i.ratio / 2 + (h ? 0 : .5),
                            u[t][e] || 1 * u[t][e] == 0 ? i.lineTo(f, i.Y(s(u[t][e]))) : i.moveTo(f, i.Y(s(u[t][e])));
                        i.stroke(),
                        l = 0,
                        p += 1
                    }
                    a.data[e].data.length;
                    var l, u = i.dispose(a.data[e].data), d = a.cfg.levelList[a.cfg.level], h = d[0] * i.ratio / 2 != (d[0] * i.ratio / 2).toFixed(), f = d[0] * i.ratio / 2 + (h ? 0 : .5), p = 0;
                    i.data[e] = u,
                    i.fulldata[e] = a.data[e].data,
                    i.max = r,
                    i.min = n,
                    i.getRule(),
                    i.verticalOffset = i.verOffset(),
                    i.drawLine(2, 1);
                    for (var m = 0, g = t.length; m < g; m++)
                        c(t[m]);
                    i.timerule(u)
                }
                var i = this
                  , a = e
                  , n = {
                    MACD: function(e) {
                        if (a.data.MACD.data.length) {
                            a.data.MACD.data.length;
                            var t, n, r = i.dispose(a.data.MACD.data), o = a.cfg.levelList[a.cfg.level], s = o[0] * i.ratio / 2 != (o[0] * i.ratio / 2).toFixed(), c = o[0] * i.ratio / 2 + (s ? 0 : .5);
                            i.floatLens = a.cfg.priceFloat,
                            i.data.MACD = r,
                            i.fulldata.MACD = a.data.MACD.data;
                            for (var l = 0, u = r.length; l < u; l++)
                                i.max = Math.max(r[l].dea || -1 * Number.MAX_VALUE, i.max),
                                i.max = Math.max(r[l].dif || -1 * Number.MAX_VALUE, i.max),
                                i.max = Math.max(r[l].macd || -1 * Number.MAX_VALUE, i.max),
                                i.min = Math.min(r[l].dea || Number.MAX_VALUE, i.min),
                                i.min = Math.min(r[l].dif || Number.MAX_VALUE, i.min),
                                i.min = Math.min(r[l].macd || Number.MAX_VALUE, i.min);
                            i.max < 0 && i.min > 0 && (i.max = 100,
                            i.min = -100),
                            i.verticalOffset = i.verOffset(),
                            i.getRule(),
                            i.drawLine(a.cfg.priceFloat, 1);
                            var d;
                            for (l = 0,
                            u = r.length; l < u; l++)
                                (r[l].macd || 1 * r[l].macd == 0) && (d = 1 * i.ratio,
                                t = r[l].macd > 0 ? "rise" : "fall",
                                i.fillStyle = a.cfg.schemesList[a.cfg.schemes][t],
                                c = o[0] * i.ratio * l + o[0] * i.ratio / 2,
                                t ? i.fillRect(~~(c - d / 2), ~~i.Y(r[l].macd), d, ~~(i.Y(0) - i.Y(r[l].macd))) : i.fillRect(~~(c - d / 2), ~~i.Y(0), d, ~~(i.Y(r[l].macd) - i.Y(0))));
                            i.drawZeroLine(i.Y(0)),
                            n = !1,
                            i.beginPath(),
                            i.lineWidth = a.cfg.baseLineWidth,
                            c = o[0] * i.ratio / 2 + (s ? 0 : .5),
                            i.moveTo(c, i.Y(r[0].dea)),
                            i.strokeStyle = a.cfg.schemesList[a.cfg.schemes].iLines[1];
                            for (l = 0,
                            u = r.length; l < u; l++)
                                c = o[0] * i.ratio * l + o[0] * i.ratio / 2 + (s ? 0 : .5),
                                r[l].dea || 1 * r[l].dea == 0 ? (!n && i.moveTo(c, i.Y(r[l].dea)),
                                i.lineTo(c, i.Y(r[l].dea)),
                                n = 1) : i.moveTo(c, i.Y(r[l].dea));
                            i.stroke(),
                            i.beginPath(),
                            n = !1,
                            c = o[0] * i.ratio / 2 + (s ? 0 : .5),
                            i.moveTo(c, i.Y(r[0].dif)),
                            i.strokeStyle = a.cfg.schemesList[a.cfg.schemes].iLines[0];
                            for (l = 0,
                            u = r.length; l < u; l++)
                                c = o[0] * i.ratio * l + o[0] * i.ratio / 2 + (s ? 0 : .5),
                                r[l].dif || 1 * r[l].dif == 0 ? (!n && i.moveTo(c, i.Y(r[l].dif)),
                                i.lineTo(c, i.Y(r[l].dif)),
                                n = 1) : i.moveTo(c, i.Y(r[l].dif));
                            i.stroke(),
                            i.timerule(r)
                        }
                    },
                    KDJ: function(e) {
                        a.data.KDJ.data.length && t("KDJ", ["k", "d", "j"], a.cfg.KDJLimit[0], a.cfg.KDJLimit[1])
                    },
                    RSI: function(e) {
                        a.data.RSI.data.length && t("RSI", ["rsi1", "rsi2", "rsi3"], a.cfg.RSILimit[0], a.cfg.RSILimit[1])
                    },
                    WR: function(e) {
                        a.data.WR.data.length && t("WR", ["wr1", "wr2"], a.cfg.WRLimit[0], a.cfg.WRLimit[1])
                    }
                };
                i.drawInd = function(e) {
                    var t = e || a.cfg.vIndicator;
                    i.tagCheck = null,
                    i.floatLens = 2,
                    n[t.toUpperCase()] && n[t.toUpperCase()]()
                }
            }
            function c(e) {
                function t(e, t) {
                    var o, s, c, l, u, d, h, f, p = 1 * e.close > 1 * e.open || 1 * e.close == 1 * e.open && r, m = 1 * e.close == 1 * e.open, g = a.cfg.levelList[a.cfg.level], v = g[0] * i.ratio / 2 != (g[0] * i.ratio / 2).toFixed();
                    if (o = p || m ? a.cfg.schemesList[a.cfg.schemes].rise : a.cfg.schemesList[a.cfg.schemes].fall,
                    r = p,
                    localStorage.setItem("chart_kline_previsRise", r),
                    i.rule || i.getRule(),
                    i.strokeStyle = o,
                    i.fillStyle = o,
                    i.beginPath(),
                    (c = g[0] * i.ratio * t + g[0] * i.ratio / 2 + (v ? 0 : .5)) > i.w * i.ratio - g[0] * i.ratio)
                        return null;
                    d = i.Y(e.high),
                    h = i.Y(e.low),
                    g[1] > 2 ? (s = .5 + ~~(c - g[1] * i.ratio / 2),
                    p ? (l = i.Y(e.close),
                    u = i.Y(e.open) - l) : (l = i.Y(e.open),
                    u = i.Y(e.close) - l),
                    function(e, t, n, r, o) {
                        1 * (p ? a.cfg.schemesList[a.cfg.schemes].riseStyle : a.cfg.schemesList[a.cfg.schemes].fallStyle) && i.fillRect(e, t, n, r),
                        r ? i.rect(e, t, n, r) : (i.moveTo(e, t),
                        i.lineTo(e + n, t))
                    }(s, l, g[1] * i.ratio, u),
                    i.moveTo(c, d),
                    i.lineTo(c, l),
                    i.moveTo(c, l + u),
                    i.lineTo(c, h)) : (i.moveTo(c, d),
                    i.lineTo(c, h == d ? d + .5 : h)),
                    i.stroke(),
                    i.max != e.high && i.min != e.low || (i.strokeStyle = a.cfg.schemesList[a.cfg.schemes].fontColor,
                    i.fillStyle = a.cfg.schemesList[a.cfg.schemes].fontColor,
                    i.beginPath()),
                    i.font = "100 " + 12 * i.ratio + "px " + a.cfg.fontFamily,
                    a.cfg.showHigh && i.max == e.high && !n.high && ((f = c > i.w - a.cfg.ruleWidth - a.cfg.paddingRight - 100) ? i.moveTo(c - 18, d - 13 * n.highCount) : i.moveTo(c + 18, d - 13 * n.highCount),
                    i.lineTo(c, d - 13 * n.highCount),
                    i.lineTo(c, d),
                    i.lineTo(c + 3, d - 5),
                    i.moveTo(c, d),
                    i.lineTo(c - 3, d - 5),
                    f ? (i.textAlign = "right",
                    i.fillText(a.toolkit.cutFixed(e.high, a.cfg.priceFloat), c - 20, d - 13 * n.highCount)) : i.fillText(a.toolkit.cutFixed(e.high, a.cfg.priceFloat), c + 20, d - 13 * n.highCount),
                    i.textAlign = "left",
                    i.stroke(),
                    n.high = 1),
                    a.cfg.showLow && i.min == e.low && !n.low && ((f = c > i.w - a.cfg.ruleWidth - a.cfg.paddingRight - 100) ? i.moveTo(c - 18, h + 13 * n.lowCount) : i.moveTo(c + 18, h + 13 * n.lowCount),
                    i.lineTo(c, h + 13 * n.lowCount),
                    i.lineTo(c, h),
                    i.lineTo(c + 3, h + 5),
                    i.moveTo(c, h),
                    i.lineTo(c - 3, h + 5),
                    f ? (i.textAlign = "right",
                    i.fillText(a.toolkit.cutFixed(e.low, a.cfg.priceFloat), c - 20, h + 13 * n.lowCount)) : i.fillText(a.toolkit.cutFixed(e.low, a.cfg.priceFloat), c + 20, h + 13 * n.lowCount),
                    i.textAlign = "left",
                    i.stroke(),
                    n.low = 1)
                }
                var i = this
                  , a = e
                  , n = {
                    low: null,
                    lowCount: 1,
                    highCount: 1,
                    high: null
                }
                  , r = localStorage.getItem("chart_kline_previsRise");
                i.drawKLine = function(e) {
                    if (a.data.formatData.data.length) {
                        n = {
                            low: null,
                            lowCount: 1,
                            highCount: 1,
                            high: null
                        };
                        var r = a.data.formatData.data.length
                          , o = i.dispose(a.data.formatData.data)
                          , s = [].concat(a.data.formatData.data).pop().close
                          , c = 0;
                        i.drawLogo(),
                        i.floatLens = a.cfg.priceFloat,
                        i.data.kline = o,
                        i.fulldata.kline = a.data.formatData.data,
                        a.cfg.moveDepth = r - a.cfg.lens;
                        for (var l = 0, u = o.length; l < u; l++)
                            i.max = Math.max(o[l].high, i.max),
                            i.min = Math.min(o[l].low, i.min);
                        for (a.cfg.newPriceForce && (i.min = Math.min(i.min, s),
                        i.max = Math.max(i.max, s)),
                        i.max - i.min < a.cfg.minDep && (c = (a.cfg.minDep - Math.abs(i.max - i.min)) / 2),
                        i.max = i.max + c,
                        i.min = i.min - c,
                        i.verticalOffset = i.verOffset(),
                        i.getRule(),
                        i.drawLine(a.cfg.priceFloat, 1, null, !0),
                        l = 0; l < o.length; l++)
                            t(o[l], l);
                        !function() {
                            a.data[a.cfg.indicator.toUpperCase()].data.length;
                            var e, t, n, r, o = i.dispose(a.data[a.cfg.indicator.toUpperCase()].data), s = a.cfg.levelList[a.cfg.level], c = s[0] * i.ratio / 2 != (s[0] * i.ratio / 2).toFixed(), l = 0, u = o.length, d = ~~(i.h * i.ratio - i.timeline * i.ratio) - .5;
                            for (var h in i.data[a.cfg.indicator.toUpperCase()] = o,
                            i.fulldata[a.cfg.indicator.toUpperCase()] = a.data[a.cfg.indicator.toUpperCase()].data,
                            i.lineWidth = a.cfg.baseLineWidth,
                            o[0])
                                if (t = !1,
                                "ts" != h) {
                                    i.beginPath(),
                                    e = s[0] * i.ratio / 2 + (c ? 0 : .5),
                                    i.strokeStyle = a.cfg.schemesList[a.cfg.schemes].iLines[l++],
                                    (r = i.Y(o[0][h])) > d && u && (e = a.toolkit.y2x(e, r, s[0] * i.ratio / 2 + (c ? 0 : .5), i.Y(o[0][h]), d),
                                    r = d),
                                    i.moveTo(e, r);
                                    for (var f = 0; f < u; f++)
                                        1 * o[f][h] && (i.Y(o[f][h]) >= d ? (n += 1,
                                        e = a.toolkit.y2x(e, r, s[0] * i.ratio * f + s[0] * i.ratio / 2 + (c ? 0 : .5), i.Y(o[f][h]), d),
                                        r = d) : (n && i.moveTo(a.toolkit.y2x(e, r, s[0] * i.ratio * f + s[0] * i.ratio / 2 + (c ? 0 : .5), i.Y(o[f][h]), d), d),
                                        r = i.Y(o[f][h]),
                                        n = 0),
                                        e = s[0] * i.ratio * f + s[0] * i.ratio / 2 + (c ? 0 : .5),
                                        !t && i.moveTo(e, r),
                                        n > 1 ? i.moveTo(e, r) : i.lineTo(e, r),
                                        t = 1);
                                    i.stroke()
                                }
                        }(),
                        i.timerule(o),
                        1 * a.cfg.ruleWidth && (i.strokeStyle = a.cfg.schemesList[a.cfg.schemes].tipStrokeColor || a.cfg.schemesList[a.cfg.schemes].layoutColor,
                        i.fillStyle = a.cfg.schemesList[a.cfg.schemes].tipColor || a.cfg.schemesList[a.cfg.schemes].layoutColor,
                        i.fillRect((i.w - a.cfg.ruleWidth) * i.ratio, i.Y(s) - 10 * i.ratio, a.cfg.ruleWidth * i.ratio, 20 * i.ratio),
                        i.lineWidth = 1,
                        i.strokeRect((i.w - a.cfg.ruleWidth) * i.ratio + .5, i.Y(s) - 10 * i.ratio, (a.cfg.ruleWidth - 1) * i.ratio, 20 * i.ratio),
                        i.font = "100 " + 12 * i.ratio + "px " + a.cfg.fontFamily,
                        i.textBaseline = "middle",
                        i.fillStyle = a.cfg.schemesList[a.cfg.schemes].tipFontColor || a.cfg.schemesList[a.cfg.schemes].background,
                        i.fillText(s, (i.w - a.cfg.ruleWidth + 5) * i.ratio, i.Y(s)))
                    }
                }
                ,
                i.tagCheck = function(e) {
                    return 1 * e < 0 ? 0 : 1
                }
            }
            function l(e) {
                var t = this
                  , i = e;
                t.drawRealtime = function(e, a, n) {
                    if (i.data.formatData.data.length) {
                        var r, o, s = i.data.formatData.data.length, c = i.cfg.levelList[i.cfg.level], l = c[0] / 2 != (c[0] / 2).toFixed(), u = t.dispose(i.data.formatData.data), d = [].concat(i.data.formatData.data).pop().close, h = ~~(t.h - t.timeline) * t.ratio, f = u[0].close;
                        t.data.realtime = u,
                        t.fulldata.realtime = i.data.formatData.data,
                        i.cfg.moveDepth = s - i.cfg.lens,
                        t.drawLogo(),
                        t.floatLens = i.cfg.priceFloat;
                        for (var p = 0, m = u.length; p < m; p++)
                            t.max = Math.max(u[p].close, t.max),
                            t.min = Math.min(u[p].close, t.min);
                        t.max - t.min < .2 && (t.max += .01,
                        t.min -= .01),
                        (r = [t.max - f, f - t.min])[0] > r[1] ? t.min = f - r[0] : t.max = 1 * f + 1 * r[1],
                        i.cfg.newPriceForce && (t.min = Math.min(t.min, d),
                        t.max = Math.max(t.max, d)),
                        t.verticalOffset = t.verOffset(),
                        t.getRule(),
                        t.beginPath(),
                        o = c[0] * t.ratio / 2 + (l ? 0 : .5),
                        t.moveTo(0, t.Y(u[0].close)),
                        t.lineTo(o, t.Y(u[0].close)),
                        t.strokeStyle = i.cfg.schemesList[i.cfg.schemes].realtime;
                        for (p = 0,
                        m = u.length; p < m; p++)
                            o = c[0] * t.ratio * p + c[0] * t.ratio / 2 + (l ? 0 : .5),
                            t.lineTo(o, t.Y(u[p].close));
                        if (t.stroke(),
                        i.cfg.schemesList[i.cfg.schemes].shadowFill || i.cfg.schemesList[i.cfg.schemes].shadowStyle) {
                            t.beginPath();
                            var g = o = c[0] * t.ratio / 2 + (l ? 0 : .5);
                            t.moveTo(0, t.Y(u[0].close)),
                            t.lineTo(g, t.Y(u[0].close));
                            for (p = 0,
                            m = Math.min(i.cfg.lens, u.length); p < m; p++)
                                o = c[0] * t.ratio * p + c[0] * t.ratio / 2 + (l ? 0 : .5),
                                t.lineTo(o, t.Y(u[p].close));
                            t.lineTo(o, h),
                            t.lineTo(0, h),
                            t.lineTo(0, t.Y(u[0].close));
                            var v = t.createLinearGradient(0, t.Y(t.max), 0, h);
                            1 == i.cfg.schemesList[i.cfg.schemes].shadowStyle ? (v.addColorStop(0, i.cfg.schemesList[i.cfg.schemes].gradientStart),
                            v.addColorStop(1, i.cfg.schemesList[i.cfg.schemes].gradientend)) : (v.addColorStop(0, i.cfg.schemesList[i.cfg.schemes].shadowFill),
                            v.addColorStop(1, i.cfg.schemesList[i.cfg.schemes].shadowFill)),
                            t.fillStyle = v,
                            t.closePath(),
                            t.fill()
                        }
                        t.drawLine(i.cfg.priceFloat, 1, null, !0),
                        function() {
                            i.data.RMA.data.length;
                            var e, a, n = t.dispose(i.data.RMA.data), r = i.cfg.levelList[i.cfg.level], o = r[0] * t.ratio / 2 != (r[0] * t.ratio / 2).toFixed(), s = 1, c = n.length;
                            for (var l in t.data.rma = n,
                            t.fulldata.rma = i.data.RMA.data,
                            t.lineWidth = i.cfg.baseLineWidth,
                            n[0])
                                if ("ts" != l) {
                                    a = !1,
                                    t.beginPath(),
                                    e = r[0] * t.ratio / 2 + (o ? 0 : .5),
                                    t.strokeStyle = i.cfg.schemesList[i.cfg.schemes].iLines[s++],
                                    t.moveTo(e, t.Y(n[0][l]));
                                    for (var u = 0; u < c; u++)
                                        1 * n[u][l] && (e = r[0] * t.ratio * u + r[0] * t.ratio / 2 + (o ? 0 : .5),
                                        !a && t.moveTo(e, t.Y(n[u][l])),
                                        t.lineTo(e, t.Y(n[u][l])),
                                        a = 1);
                                    t.stroke()
                                }
                        }(),
                        1 * i.cfg.ruleWidth && (t.strokeStyle = i.cfg.schemesList[i.cfg.schemes].tipStrokeColor || i.cfg.schemesList[i.cfg.schemes].layoutColor,
                        t.fillStyle = i.cfg.schemesList[i.cfg.schemes].tipColor || i.cfg.schemesList[i.cfg.schemes].layoutColor,
                        t.fillRect((t.w - i.cfg.ruleWidth) * t.ratio, t.Y(d) - 10 * t.ratio, i.cfg.ruleWidth * t.ratio, 20 * t.ratio),
                        t.lineWidth = 1,
                        t.strokeRect((t.w - i.cfg.ruleWidth) * t.ratio + .5, t.Y(d) - 10 * t.ratio, (i.cfg.ruleWidth - 1) * t.ratio, 20 * t.ratio),
                        t.font = "100 " + 12 * t.ratio + "px " + i.cfg.fontFamily,
                        t.textBaseline = "middle",
                        t.fillStyle = i.cfg.schemesList[i.cfg.schemes].tipFontColor || i.cfg.schemesList[i.cfg.schemes].background,
                        t.fillText(d, (t.w - i.cfg.ruleWidth + 5) * t.ratio, t.Y(d))),
                        t.timerule(u)
                    }
                }
            }
            function u(e) {
                function t(e, t, i) {
                    var n, r = "", o = {};
                    if (a.cfg.specialChart)
                        r = "specialChart",
                        "fulldata" === i && (e = -1),
                        o.data1 = t.canvas[i].special[0] ? t.canvas[i].special[0][e < 0 ? t.canvas[i].special[0].length - 1 : e] : {},
                        o.data2 = t.canvas[i].special[1] ? t.canvas[i].special[1][e < 0 ? t.canvas[i].special[1].length - 1 : e] : {},
                        n = 1;
                    else
                        for (var s in t.canvas[i])
                            a.toolkit.copy(o, t.canvas[i][s][e]),
                            r += s,
                            n = 1;
                    n && a.html[r] && t.info && (t.info.innerHTML = rentmpl(a.html[r], {
                        data: o,
                        tool: a.toolkit,
                        cfg: a.cfg
                    }))
                }
                var i = this
                  , a = e;
                i.count = 0,
                i.step = 0,
                i.nextStep = 5,
                i.loading = function() {
                    var e = i.w * i.ratio / 2
                      , t = i.h * i.ratio / 2
                      , a = i.count % 15
                      , n = 15 + a;
                    if (i.step += 1,
                    !(i.step % i.nextStep)) {
                        i.clear();
                        for (var r, o, s = a, c = 0; s < n; s++)
                            c++,
                            r = e + 40 * Math.sin(2 * Math.PI * ((s - 2 * a) / (n - a))),
                            o = t + 40 * Math.cos(2 * Math.PI * ((s - 2 * a) / (n - a))),
                            n - a - c > 0 && (i.beginPath(),
                            i.arc(r, o, 4 * (n - a - c) / (n - a), 0, 2 * Math.PI),
                            i.fillStyle = "rgba(58,181,249," + (n - a - c) / (n - a) * .6 + ")",
                            i.fill(),
                            i.closePath());
                        i.loadingstatus = 1,
                        i.count += 1
                    }
                }
                ,
                i.autograph = function() {}
                ,
                i.crossLine = function(e, n, r) {
                    if (a.source.data.length && a.data && a.data.formatData && a.data.formatData.data && a.data.formatData.data.length) {
                        var o, s = i.dispose(a.data.formatData.data), c = s[~~(e / r[0])] ? ~~(e / r[0]) : s.length - 1, l = r[0] * i.ratio / 2 != (r[0] * i.ratio / 2).toFixed(), u = r[0] * i.ratio * c + r[0] * i.ratio / 2 + (l ? 0 : .5), d = (n = (r[1],
                        i.ratio,
                        ~~n - .5),
                        [{
                            move: "moveTo",
                            line: "lineTo"
                        }, {
                            move: "moveForDashed",
                            line: "dashedLineTo"
                        }]);
                        s = s[c],
                        i.clear(),
                        i.beginPath(),
                        i.strokeStyle = a.cfg.schemesList[a.cfg.schemes].crossLine,
                        s && i[d[a.cfg.schemesList[a.cfg.schemes].crossLineStyle ? 1 : 0].move](u, 0),
                        s && i[d[a.cfg.schemesList[a.cfg.schemes].crossLineStyle ? 1 : 0].line](u, i.h * i.ratio),
                        i.stroke();
                        for (var h, f = 0, p = a.cfg.splitWindow[a.cfg.realtime].length; p--; f++)
                            h = a.canvas[a.cfg.realtime][f].canvas,
                            !o && n < h.top + h.h && (function(e, t) {
                                var n = [{
                                    move: "moveTo",
                                    line: "lineTo"
                                }, {
                                    move: "moveForDashed",
                                    line: "dashedLineTo"
                                }];
                                e > t.top + t.h - t.timeline || (i.beginPath(),
                                i.strokeStyle = a.cfg.schemesList[a.cfg.schemes].crossLine,
                                i[n[a.cfg.schemesList[a.cfg.schemes].crossLineStyle ? 1 : 0].move](0, e * i.ratio),
                                i[n[a.cfg.schemesList[a.cfg.schemes].crossLineStyle ? 1 : 0].line]((i.w - a.cfg.ruleWidth) * i.ratio, e * i.ratio),
                                i.stroke(),
                                1 * t.y2v(e * i.ratio - t.top * i.ratio) && (t.tagCheck && !t.tagCheck(t.y2v(e * i.ratio - t.top * i.ratio)) || (i.beginPath(),
                                i.fillStyle = a.cfg.schemesList[a.cfg.schemes].background,
                                i.strokeStyle = a.cfg.schemesList[a.cfg.schemes].layoutColor,
                                i.strokeRect((i.w - a.cfg.ruleWidth) * i.ratio, (e - 10) * i.ratio, a.cfg.ruleWidth * i.ratio, 20 * i.ratio),
                                i.fillRect((i.w - a.cfg.ruleWidth) * i.ratio, (e - 10) * i.ratio, a.cfg.ruleWidth * i.ratio, 20 * i.ratio),
                                i.stroke(),
                                i.font = "100 " + 12 * i.ratio + "px " + a.cfg.fontFamily,
                                i.textBaseline = "middle",
                                i.textAlign = "left",
                                i.fillStyle = a.cfg.schemesList[a.cfg.schemes].layoutFont,
                                i.fillText(t.y2v(e * i.ratio - t.top * i.ratio), (i.w - a.cfg.ruleWidth + 5) * i.ratio, e * i.ratio))))
                            }(n, h),
                            o = 1),
                            1 * h.timeline && function(e, t, n, r) {
                                e < 72 * i.ratio && (e = 72 * i.ratio),
                                i.lineWidth = 1,
                                i.beginPath(),
                                i.strokeStyle = a.cfg.schemesList[a.cfg.schemes].crossLine,
                                i.fillStyle = a.cfg.schemesList[a.cfg.schemes].background,
                                i.fillRect(e - 70 * i.ratio, n - t + 3 * i.ratio - .5, 140 * i.ratio, t),
                                i.strokeRect(.5 + ~~(e - 70 * i.ratio), ~~(n - t + 3 * i.ratio) - .5, ~~(140 * i.ratio), ~~(t - 5 * i.ratio)),
                                i.font = "100 " + 12 * i.ratio + "px " + a.cfg.fontFamily,
                                i.textBaseline = "middle",
                                i.textAlign = "center",
                                i.fillStyle = a.cfg.schemesList[a.cfg.schemes].layoutFont,
                                i.fillText(a.toolkit.time2Date(r, "y-m-d h:i"), e, n - (t - 3 * i.ratio) + (t - 3 * i.ratio) / 2),
                                i.stroke(),
                                i.lineWidth = a.cfg.baseLineWidth
                            }(u, h.timeline * h.ratio, (h.top + h.h) * h.ratio, s.ts),
                            t(c, a.canvas[a.cfg.realtime][f], "data")
                    }
                }
                ,
                a.filllast = function() {
                    if (!a.crossOn && a.source.data.length)
                        for (var e = [].concat(a.data.formatData.data), i = 0, n = a.cfg.splitWindow[a.cfg.realtime].length; n--; i++)
                            t(e.length - 1, a.canvas[a.cfg.realtime][i], "fulldata")
                }
            }
            function d(e) {
                function t(e, t) {
                    var r, o, s, c, l = e.amount, u = a.cfg.curLevel, d = 1 * e.close == 1 * e.open, h = 1 * e.close > 1 * e.open || d && n, f = (e.close,
                    e.open,
                    u[0] - u[1]), p = u[0] / 2 != (u[0] / 2).toFixed();
                    i.h,
                    i.timeline,
                    i.ratio,
                    a.cfg.showParity && d ? r = o = a.cfg.schemesList[a.cfg.schemes].crossLine : h ? (r = a.cfg.schemesList[a.cfg.schemes].volumeStyle.rise.background,
                    o = a.cfg.schemesList[a.cfg.schemes].volumeStyle.rise.border) : (r = a.cfg.schemesList[a.cfg.schemes].volumeStyle.fall.background,
                    o = a.cfg.schemesList[a.cfg.schemes].volumeStyle.fall.border),
                    n = h,
                    localStorage.setItem("chart_previsRise", n),
                    i.strokeStyle = o,
                    i.lineWidth = 1,
                    i.fillStyle = r,
                    i.beginPath(),
                    i.rule || i.getRule(1),
                    s = i.Y(l),
                    c = u[0] * i.ratio * t + u[0] * i.ratio / 2 + (p ? 0 : .5) - (0 === a.cfg.schemesList[a.cfg.schemes].volumeStyle.spacing ? f : 0),
                    u[1] * i.ratio > 1 ? (u[1],
                    i.ratio) : (i.moveTo(c, s),
                    i.lineTo(c, i.h * i.ratio - i.timeline * i.ratio),
                    i.stroke()),
                    i.stroke()
                }
                var i = this
                  , a = e
                  , n = localStorage.getItem("chart_previsRise") || !0;
                i.drawVol = function(e, n) {
                    a.data.formatData.data.length,
                    a.cfg.lens;
                    var r = i.dispose(a.data.formatData.data);
                    i.drawRange = 1,
                    i.data.vol = r,
                    i.fulldata.vol = a.data.formatData.data,
                    i.floatLens = a.cfg.amountFloat;
                    for (var o = 0, s = r.length; o < s; o++)
                        i.max = Math.max(r[o].amount, i.max);
                    if (i.min = 0,
                    i.max != i.min) {
                        i.getRule(1),
                        i.verticalOffset = a.cfg.offsetTop,
                        i.drawLine(a.cfg.amountFloat);
                        for (o = 0,
                        s = r.length; o < s; o++)
                            t(r[o], o);
                        !function() {
                            a.data.VMA.data.length;
                            var e, t, n = i.dispose(a.data.VMA.data), r = a.cfg.levelList[a.cfg.level], o = r[0] * i.ratio / 2 != (r[0] * i.ratio / 2).toFixed(), s = 0, c = Math.min(a.cfg.lens, n.length);
                            for (var l in i.lineWidth = a.cfg.baseLineWidth,
                            i.data.vma = n,
                            i.fulldata.vma = a.data.VMA.data,
                            n[0])
                                if ("ts" != l) {
                                    i.beginPath(),
                                    e = r[0] * i.ratio / 2 + (o ? 0 : .5),
                                    i.strokeStyle = a.cfg.schemesList[a.cfg.schemes].iLines[s++],
                                    i.moveTo(e, i.Y(n[0][l])),
                                    t = !1;
                                    for (var u = 0; u < c; u++)
                                        1 * n[u][l] && (e = r[0] * i.ratio * u + r[0] * i.ratio / 2 + (o ? 0 : .5),
                                        !t && i.moveTo(e, i.Y(n[u][l])),
                                        i.lineTo(e, i.Y(n[u][l])),
                                        t = 1);
                                    i.stroke()
                                }
                        }(),
                        i.timerule(r)
                    }
                }
            }
            function h(e) {
                var t = e;
                t.collIndex = {
                    MACD: function(e, i, a) {
                        if (t.data.MACD || (t.data.MACD = {
                            data: []
                        }),
                        !t.data.MACD.data[e] || t.data.MACD.data[e].ts != a[e].ts || e == i - 1) {
                            var n, r, o = 2 * (n = t.toolkit.DIF(e, a)) - 2 * (r = t.toolkit.DEA(e, a));
                            t.data.MACD.data[e] = {
                                macd: o,
                                dif: n,
                                dea: r,
                                ts: a[e].ts
                            }
                        }
                    },
                    KDJ: function(e, i, a) {
                        var n, r, o;
                        t.data.KDJ || (t.data.KDJ = {
                            data: []
                        }),
                        t.data.KDJ.data[e] && t.data.KDJ.data[e].ts == a[e].ts && e != i - 1 || (o = 3 * (n = t.toolkit.getK(e, a)) - 2 * (r = t.toolkit.MA(t.toolkit.getK, e, a, t.cfg.KDJ.M2)),
                        t.data.KDJ.data[e] = {
                            k: n,
                            d: r,
                            j: o,
                            ts: a[e].ts
                        })
                    },
                    RSI: function(e, i, a) {
                        var n, r, o;
                        t.data.RSI || (t.data.RSI = {
                            data: []
                        }),
                        t.data.RSI.data[e] && t.data.RSI.data[e].ts == a[e].ts && e != i - 1 || (n = t.toolkit.MA(t.toolkit.getMax, e, a, t.cfg.RSI.N1) / t.toolkit.MA(t.toolkit.getAbs, e, a, t.cfg.RSI.N1) * 100,
                        r = t.toolkit.MA(t.toolkit.getMax, e, a, t.cfg.RSI.N2) / t.toolkit.MA(t.toolkit.getAbs, e, a, t.cfg.RSI.N2) * 100,
                        o = t.toolkit.MA(t.toolkit.getMax, e, a, t.cfg.RSI.N3) / t.toolkit.MA(t.toolkit.getAbs, e, a, t.cfg.RSI.N3) * 100,
                        t.data.RSI.data[e] = {
                            rsi1: n,
                            rsi2: r,
                            rsi3: o,
                            ts: a[e].ts
                        })
                    },
                    WR: function(e, i, a) {
                        var n, r, o, s;
                        t.data.WR || (t.data.WR = {
                            data: []
                        }),
                        t.data.WR.data[e] && t.data.WR.data[e].ts == a[e].ts && e != i - 1 || (o = t.toolkit.HHV(e, a, t.cfg.WR.N),
                        s = t.toolkit.HHV(e, a, t.cfg.WR.N1),
                        n = 100 * (o - a[e].close) / (o - t.toolkit.LLV(e, a, t.cfg.WR.N)),
                        r = 100 * (s - a[e].close) / (s - t.toolkit.LLV(e, a, t.cfg.WR.N1)),
                        t.data.WR.data[e] = {
                            wr1: n,
                            wr2: r,
                            ts: a[e].ts
                        })
                    },
                    RMA: function(e, i, a) {
                        var n = t.cfg.RMA
                          , r = {};
                        if (t.data.RMA || (t.data.RMA = {
                            data: []
                        }),
                        !t.data.RMA.data[e] || t.data.RMA.data[e].ts != a[e].ts || e == i - 1) {
                            for (var o = 0; o < n.length; o++)
                                !function(i, n) {
                                    r.ts = a[e].ts,
                                    r["MA" + n] = i < n ? NaN : t.toolkit.MA(function(e, t) {
                                        return 1 * t[e].close
                                    }, i, a, n)
                                }(e, 1 * n[o]);
                            t.data.RMA.data[e] = r
                        }
                    },
                    MA: function(e, i, a) {
                        var n = t.cfg.MA
                          , r = {};
                        if (t.data.MA || (t.data.MA = {
                            data: []
                        }),
                        !t.data.MA.data[e] || t.data.MA.data[e].ts != a[e].ts || e == i - 1) {
                            for (var o = 0; o < n.length; o++)
                                !function(i, n) {
                                    r.ts = a[e].ts,
                                    r["MA" + n] = i < n ? NaN : t.toolkit.MA(function(e, t) {
                                        return 1 * t[e].close
                                    }, i, a, n)
                                }(e, 1 * n[o]);
                            t.data.MA.data[e] = r
                        }
                    },
                    VMA: function(e, i, a) {
                        var n = t.cfg.VMA
                          , r = {};
                        if (t.data.VMA || (t.data.VMA = {
                            data: []
                        }),
                        !t.data.VMA.data[e] || t.data.VMA.data[e].ts != a[e].ts || e == i - 1) {
                            for (var o = 0; o < n.length; o++)
                                !function(i, n) {
                                    r.ts = a[e].ts,
                                    r["MA" + n] = i < n ? NaN : t.toolkit.MA(function(e, t) {
                                        return 1 * t[e].amount
                                    }, i, a, n)
                                }(e, 1 * n[o]);
                            t.data.VMA.data[e] = r
                        }
                    },
                    BOLL: function(e, i, a) {
                        var n, r;
                        t.data.BOLL || (t.data.BOLL = {
                            data: []
                        }),
                        t.data.BOLL.data[e] && t.data.BOLL.data[e].ts == a[e].ts && e != i - 1 || (r = t.toolkit.MA(function(e, t) {
                            return 1 * t[e].close
                        }, e, a, t.cfg.BOLL, e),
                        n = t.toolkit.STD(t.cfg.BOLL, r, a, e),
                        t.data.BOLL.data[e] = {
                            BOLL: r,
                            UB: r + 2 * n,
                            LB: r - 2 * n,
                            ts: a[e].ts
                        })
                    },
                    formatData: function(e) {
                        return {
                            amount: e.amount,
                            count: e.count,
                            ts: e.id || e.ts,
                            open: t.toolkit.cutFixed(e.open, t.cfg.priceFloat),
                            close: t.toolkit.cutFixed(e.close, t.cfg.priceFloat),
                            low: t.toolkit.cutFixed(e.low, t.cfg.priceFloat),
                            high: t.toolkit.cutFixed(e.high, t.cfg.priceFloat),
                            vol: e.vol
                        }
                    }
                }
            }
            function f(e) {
                function t() {
                    a.cfg.fullscreen ? (document.querySelector("body").style.overflow = "hidden",
                    a.size = {
                        w: (window.innerWidth || document.documentElement.clientWidth) * a.cfg.viewPortScale,
                        h: (window.innerHeight || document.documentElement.clientHeight) * a.cfg.viewPortScale - (a.cfg.toolHeight || 0) * a.cfg.viewPortScale
                    },
                    a.style.position = "absolute",
                    a.style.left = "0",
                    a.style.top = (a.cfg.toolHeight || 0) + "px") : (document.querySelector("body").style.overflow = "",
                    a.parentNode && (a.size = {
                        w: a.parentNode.offsetWidth * a.cfg.viewPortScale + n - 2,
                        h: a.parentNode.offsetHeight * a.cfg.viewPortScale + r - 2
                    }),
                    a.style.position = "",
                    a.style.left = "",
                    a.style.top = ""),
                    a.style.width = a.size.w / a.cfg.viewPortScale + "px",
                    a.style.height = a.size.h / a.cfg.viewPortScale + "px",
                    a.style.backgroundColor = a.cfg.schemesList[a.cfg.schemes].background,
                    a.reLayout(),
                    a.update()
                }
                var i, a = e, n = 0, r = 0;
                t(),
                a.toolkit.Event.add(window, "resize", function() {
                    i && clearTimeout(i),
                    i = setTimeout(t, 10)
                }),
                a.resize = t
            }
            function p(e) {
                var t = e;
                t.reLayout = function() {
                    for (var e = [0, 0], i = [0, 0], a = t.cfg.splitWindow.length, n = t.cfg.splitWindow; a--; )
                        for (var r in n[a])
                            i[a] += t.canvas[a][r].canvas.timeline || 0;
                    for (a = t.cfg.splitWindow.length,
                    n = t.cfg.splitWindow; a--; )
                        for (var r in n[a])
                            !function(a, n, r) {
                                var o = (t.size.h - i[r]) * n.percent + a.canvas.timeline;
                                a.element.style.top = e[r] / t.cfg.viewPortScale + "px",
                                a.element.width = t.size.w * a.element.ratio,
                                a.element.height = Math.floor(o * a.element.ratio),
                                a.element.w = t.size.w,
                                a.element.h = o,
                                a.element.style.width = t.size.w / t.cfg.viewPortScale + "px",
                                a.element.style.height = Math.floor(o / t.cfg.viewPortScale) + "px",
                                a.canvas.w = t.size.w,
                                a.canvas.h = o,
                                a.canvas.top = e[r] / t.cfg.viewPortScale,
                                a.info.style.top = 1 * e[r] / t.cfg.viewPortScale + 10 + "px",
                                e[r] += o
                            }(t.canvas[a][r], t.cfg.splitWindow[a][r], a);
                    t.cross.element.style.top = "0px",
                    t.cross.element.width = t.size.w * t.cross.element.ratio,
                    t.cross.element.height = Math.floor(t.size.h * t.cross.element.ratio),
                    t.cross.element.w = t.size.w,
                    t.cross.element.h = t.size.h,
                    t.cross.element.style.width = t.size.w / t.cfg.viewPortScale + "px",
                    t.cross.element.style.height = Math.floor(t.size.h / t.cfg.viewPortScale) + "px",
                    t.cross.canvas.w = t.size.w,
                    t.cross.canvas.h = t.size.h
                }
            }
            function m(e) {
                function t(e, t, r) {
                    var o = (e.h - e.timeline) * e.ratio
                      , s = ~~e.w * e.ratio
                      , c = ~~n.cfg.ruleWidth * e.ratio;
                    e.beginPath(),
                    e.lineWidth = 1,
                    e.strokeStyle = n.cfg.schemesList[n.cfg.schemes].layoutColor,
                    e.moveTo(.5, .5),
                    e.moveTo(.5, ~~o - .5),
                    r && !e.timeline || !r && !n.cfg.splitLine ? e.moveTo(~~(s - (i ? c : 0)) - .5, ~~o - .5) : n.cfg.border && e.lineTo(~~(s - (i ? c : 0)) - .5, ~~o - .5),
                    n.cfg.border && e.lineTo(~~(s - (i ? c : 0)) - .5, .5),
                    !t && a && n.cfg.border && e.lineTo(.5, .5),
                    a = e.timeline,
                    e.stroke()
                }
                var i, a, n = e;
                n.splitWindow = function() {
                    i = n.size.w > n.cfg.outRuleWidth;
                    for (var e = n.cfg.splitWindow.length, a = n.cfg.splitWindow; e--; )
                        for (var r in a[e])
                            n.canvas[e][r].element.style.display = "none",
                            n.canvas[e][r].info.style.display = "none";
                    var o = 0;
                    for (e = n.cfg.splitWindow[n.cfg.realtime].length; e--; o++)
                        n.canvas[n.cfg.realtime][o].element.style.display = "block",
                        n.canvas[n.cfg.realtime][o].info.style.display = "block",
                        t(n.canvas[n.cfg.realtime][o].canvas, !o, !e)
                }
            }
            function g(e) {
                function t(e) {
                    return e && e.parentNode ? e.getAttribute("stop") ? e : t(e.parentNode) : null
                }
                function i(e) {
                    _.active && (t(_.toolkit.Event.target(e)) || function(e) {
                        var i = (e = window.event || e).keyCode
                          , a = _.toolkit.Event.target(e);
                        a.getAttribute("act"),
                        _.cfg.realtime || 38 != i || (_.cfg.level += _.cfg.level == _.cfg.levelList.length - 1 ? 0 : 1),
                        _.cfg.realtime || 40 != i || (_.cfg.level -= 0 == _.cfg.level ? 0 : 1),
                        _.source.version = 1 * new Date,
                        t(a)
                    }(e))
                }
                function a(e) {
                    if (_.active) {
                        e = window.event || e;
                        var t = _.toolkit.Event.target(e)
                          , i = _.toolkit.attFather(t, "act") ? _.toolkit.attFather(t, "act").att : null
                          , a = _.toolkit.attFather(t, "stop")
                          , n = _.toolkit.attFather(t, "data-val");
                        a && _.toolkit.Event.stop(e),
                        _[i] && _[i](t, n ? n.att : null, e)
                    }
                }
                function n(e) {
                    if (_.active && !_.cfg.specialChart) {
                        var t = _.toolkit.Event.delta(e)
                          , i = t % 2
                          , a = -1 * (0 == i ? t > 1 ? 1 : -1 : i);
                        _.toolkit.Event.stop(e),
                        v || (v = 1,
                        setTimeout(function() {
                            v = 0
                        }, 20),
                        a > 0 ? _.cfg.level += _.cfg.level == _.cfg.levelList.length - 1 ? 0 : 1 : _.cfg.level -= 0 == _.cfg.level ? 0 : 1,
                        _.source.version = 1 * new Date)
                    }
                }
                function r(e) {
                    var t = e.touch ? e : _.toolkit.Event.mouse(e);
                    _.toolkit.Event.target(e),
                    function(e, t) {
                        _.cfg.stopDrag || _.cfg.moveDepth < 1 || 0 != ~~(e / _.cfg.levelList[_.cfg.level][0]) && (_.cfg.canvasOffset += ~~(e / _.cfg.levelList[_.cfg.level][0]),
                        _.cfg.canvasOffset > _.cfg.moveDepth && (_.cfg.canvasOffset = _.cfg.moveDepth),
                        t && (_.move.x = t),
                        _.source.version = 1 * new Date,
                        _.cfg.canvasOffset < 0) && (_.cfg.canvasOffset = 0)
                    }((t.x - _.move.x) / 2, t.x)
                }
                function o(e) {
                    _.active && !p && (p = 1,
                    m && r(e),
                    setTimeout(function() {
                        p = 0
                    }, 20))
                }
                function s(e, t, i, a) {
                    return Math.pow(Math.abs(e - i), 2) + Math.pow(Math.abs(t - a), 2)
                }
                function c(e) {
                    if (!p) {
                        p = 1;
                        var t = e.touches || e.changedTouches;
                        2 == t.length ? function(e) {
                            var t = s(e[0].clientX, e[0].clientY, e[1].clientX, e[1].clientY);
                            null === y && (y = s(e[0].clientX, e[0].clientY, e[1].clientX, e[1].clientY)),
                            Math.abs((w - t) / y) < .15 || (_.changeSize(-1 * (t / y > 1 ? -1 : 1)),
                            w = t)
                        }(t) : 1 == t.length && m && r({
                            touch: !0,
                            x: t[0].clientX,
                            y: t[0].clientY
                        }),
                        setTimeout(function() {
                            p = 0
                        }, 20)
                    }
                }
                function l(e) {
                    var t = e.touches || e.changedTouches || null;
                    if (_.active || t) {
                        if (t && t.length > 1)
                            return m = !1,
                            void (y = null);
                        _.move = t ? {
                            x: t[0].clientX,
                            y: t[0].clientY
                        } : _.toolkit.Event.mouse(e),
                        m = !0,
                        !t && _.toolkit.Event.stop(e),
                        _.setCapture ? _.setCapture() : window.captureEvents && window.captureEvents(_.toolkit.Event.mousemove | _.toolkit.Event.mouseup)
                    }
                }
                function u() {
                    _.active && (m = !1,
                    _.releaseCapture ? _.releaseCapture() : window.captureEvents && window.captureEvents(_.toolkit.Event.mousemove | _.toolkit.Event.mouseup))
                }
                function d() {
                    m = !1
                }
                function h() {
                    _.active = 1,
                    _.crossOn = 1
                }
                function f() {
                    _.active = 0,
                    _.crossOn = 0
                }
                var p, m, g, v, _ = e, b = this, y = null, w = null;
                _.mouseover = function(e) {
                    _.active && (clearTimeout(g),
                    g = null,
                    _.crossOn = 1)
                }
                ,
                _.mousemove = function(e) {
                    _.active && (_.crossOn = 1,
                    function(e) {
                        var t = _.toolkit.Event.mouse(e)
                          , i = _.cfg.levelList[_.cfg.level];
                        if (!b.mouseBusy) {
                            b.mouseBusy = 1;
                            var a = t.x - _.toolkit.dom.getPosition(_).x;
                            b.crossLine(a, t.y - _.toolkit.dom.getPosition(_).y, i),
                            setTimeout(function() {
                                b.mouseBusy = 0
                            }, 15)
                        }
                    }(e))
                }
                ,
                _.mouseout = function(e) {
                    _.active && (b.clear(),
                    _.crossOn = 0,
                    _.filllast())
                }
                ,
                function(e, t) {
                    "construct";
                    _.toolkit.Event.add(document, "keydown", i),
                    _.toolkit.Event.add(document, "click", a),
                    _.cfg.event && (_.toolkit.Event.add(_, "mousewheel", n),
                    _.toolkit.Event.add(_, "DOMMouseScroll", n),
                    _.toolkit.Event.add(_, "mouseover", _.mouseover),
                    _.toolkit.Event.add(_, "mousemove", _.mousemove),
                    _.toolkit.Event.add(_, "mouseout", _.mouseout),
                    _.toolkit.Event.add(_, "mousedown", l),
                    _.toolkit.Event.add(_, "mousemove", o),
                    _.toolkit.Event.add(_, "mouseout", u),
                    _.toolkit.Event.add(_, "mouseup", u),
                    _.toolkit.Event.add(_, "focus", h),
                    _.toolkit.Event.add(_, "blur", f),
                    _.toolkit.Event.add(this, "touchstart", l),
                    _.toolkit.Event.add(this, "touchmove", c),
                    _.toolkit.Event.add(this, "touchend", d))
                }
                .apply(window, arguments)
            }
            function v(e) {
                var t = e;
                t.html = {
                    klineMA: 1 === t.cfg.hideOpen ? "" : "<span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['开'] ? cfg.langMap[cfg.lang]['开'] : '开'%>=<%=data.open%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['高'] ? cfg.langMap[cfg.lang]['高'] : '高'%>=<%=data.high%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['低'] ? cfg.langMap[cfg.lang]['低'] : '低'%>=<%=data.low%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['收'] ? cfg.langMap[cfg.lang]['收'] : '收'%>=<%=data.close%></span><br><%for(var i = 0,l = cfg.MA.length; i < l; i++){%>" + '<%if(data["MA" + cfg.MA[i]]*1 || data["MA" + cfg.MA[i]]*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[i]%>">MA<%=cfg.MA[i]%>:<%=tool.cutFixed(data["MA" + cfg.MA[i]],cfg.priceFloat)%></span><%}%><%}%>',
                    klineBOLL: 1 === t.cfg.hideOpen ? "" : "<span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['开'] ? cfg.langMap[cfg.lang]['开'] : '开'%>=<%=data.open%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['高'] ? cfg.langMap[cfg.lang]['高'] : '高'%>=<%=data.high%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['低'] ? cfg.langMap[cfg.lang]['低'] : '低'%>=<%=data.low%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['收'] ? cfg.langMap[cfg.lang]['收'] : '收'%>=<%=data.close%></span><br><%if(data.BOLL*1 || data.BOLL*1 === 0){%><span style=\"color:<%=cfg.schemesList[cfg.schemes].iLines[0]%>\">BOLL(<%=cfg.BOLL%>):<%=tool.cutFixed(data.BOLL,cfg.priceFloat)%></span><%}%><%if(data.UB*1 || data.UB*1 === 0){%><span style=\"color:<%=cfg.schemesList[cfg.schemes].iLines[1]%>\">UB:<%=tool.cutFixed(data.UB,cfg.priceFloat)%></span><%}%><%if(data.LB*1 || data.LB*1 === 0){%><span style=\"color:<%=cfg.schemesList[cfg.schemes].iLines[2]%>\">LB:<%=tool.cutFixed(data.LB,cfg.priceFloat)%></span><%}%>",
                    realtimerma: "<span><%=tool.time2Date(data.ts)%> :</span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['开'] ? cfg.langMap[cfg.lang]['开'] : '开'%>=<%=data.open%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['高'] ? cfg.langMap[cfg.lang]['高'] : '高'%>=<%=data.high%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['低'] ? cfg.langMap[cfg.lang]['低'] : '低'%>=<%=data.low%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['收'] ? cfg.langMap[cfg.lang]['收'] : '收'%>=<%=data.close%></span><br><%for(var i = 0,l = cfg.RMA.length; i < l; i++){%>" + '<%if(data["MA" + cfg.RMA[i]]*1 || data["MA" + cfg.RMA[i]]*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[i + 1]%>">MA<%=cfg.RMA[i]%>:<%=tool.cutFixed(data["MA" + cfg.RMA[i]],cfg.priceFloat)%></span><%}%><%}%>',
                    specialChart: "<%if((data.data1 && data.data1.ts)){%><span style=\"color:<%=cfg.schemesList[cfg.schemes].iLines[0]%>\">●</span><span><%=tool.time2Date(data.data1.ts)%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['开'] ? cfg.langMap[cfg.lang]['开'] : '开'%>=<%=data.data1.open%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['高'] ? cfg.langMap[cfg.lang]['高'] : '高'%>=<%=data.data1.high%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['低'] ? cfg.langMap[cfg.lang]['低'] : '低'%>=<%=data.data1.low%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['收'] ? cfg.langMap[cfg.lang]['收'] : '收'%>=<%=data.data1.close%></span><br><%}%><%if((data.data2 && data.data2.ts)){%><span style=\"color:<%=cfg.schemesList[cfg.schemes].iLines[1]%>\">●</span><span><%=tool.time2Date(data.data2.ts)%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['开'] ? cfg.langMap[cfg.lang]['开'] : '开'%>=<%=data.data2.open%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['高'] ? cfg.langMap[cfg.lang]['高'] : '高'%>=<%=data.data2.high%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['低'] ? cfg.langMap[cfg.lang]['低'] : '低'%>=<%=data.data2.low%></span><span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['收'] ? cfg.langMap[cfg.lang]['收'] : '收'%>=<%=data.data2.close%></span><br><%}%>",
                    volvma: '<%for(var i = 0,l = cfg.VMA.length; i < l; i++){%><%if(data["MA" + cfg.VMA[i]]*1 || data["MA" + cfg.VMA[i]]*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[i]%>">MA<%=cfg.VMA[i]%>:<%=tool.cutFixed(data["MA" + cfg.VMA[i]],cfg.amountFloat)%></span><%}%><%}%>',
                    vol: "<span><%=cfg.langMap[cfg.lang] && cfg.langMap[cfg.lang]['量'] ? cfg.langMap[cfg.lang]['量'] : '量'%>:<%=tool.cutFixed(data.amount,cfg.amountFloat)%></span><%for(var i = 0,l = cfg.VMA.length; i < l; i++){%>" + '<%if(data["MA" + cfg.VMA[i]]*1 || data["MA" + cfg.VMA[i]]*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[i]%>">MA<%=cfg.VMA[i]%>:<%=tool.cutFixed(data["MA" + cfg.VMA[i]],cfg.amountFloat)%></span><%}%><%}%>',
                    MACD: '<span>MACD</span><span>(<%=cfg.MACD.join(",")%>)</span><%if(data.dif*1 || data.dif*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[0]%>">DIF:<%=(data.dif*1).toFixed(cfg.priceFloat)%></span><%}%><%if(data.dea*1 || data.dea*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[1]%>">DEA:<%=(data.dea*1).toFixed(cfg.priceFloat)%></span><%}%><%if(data.macd*1 || data.macd*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].rise%>">MACD:<%=(data.macd*1).toFixed(cfg.priceFloat)%></span><%}%>',
                    KDJ: '<span>KDJ</span><span>(<%for(var x in cfg.KDJ){%><%=x%>:<%=cfg.KDJ[x]%> <%}%>)</span><%if(data.k*1 || data.k*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[0]%>">K:<%=tool.cutFixed(data.k,2)%></span><%}%><%if(data.d*1 || data.d*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[1]%>">D:<%=tool.cutFixed(data.d,2)%></span><%}%><%if(data.j*1 || data.j*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[2]%>">J:<%=tool.cutFixed(data.j,2)%></span><%}%>',
                    RSI: '<span>RSI</span><span>(<%for(var x in cfg.RSI){%><%=x%>:<%=cfg.RSI[x]%> <%}%>)</span><%if(data.rsi1*1 || data.rsi1*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[0]%>">RSI1:<%=tool.cutFixed(data.rsi1,2)%></span><%}%><%if(data.rsi2*1 || data.rsi2*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[1]%>">RSI2:<%=tool.cutFixed(data.rsi2,2)%></span><%}%><%if(data.rsi3*1 || data.rsi3*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[2]%>">RSI3:<%=tool.cutFixed(data.rsi3,2)%></span><%}%>',
                    WR: '<span>WR</span><span>(<%for(var x in cfg.WR){%><%=x%>:<%=cfg.WR[x]%> <%}%>)</span><%if(data.wr1*1 || data.wr1*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[0]%>">WR1:<%=tool.cutFixed(data.wr1,2)%></span><%}%><%if(data.wr2*1 || data.wr2*1 === 0){%><span style="color:<%=cfg.schemesList[cfg.schemes].iLines[1]%>">WR2:<%=tool.cutFixed(data.wr2,2)%></span><%}%>'
                }
            }
            function _(e) {
                var t = this
                  , i = e;
                t.drawSpecial = function(e) {
                    if (i.source.data[e].length) {
                        i.data.formatData = {
                            data: []
                        },
                        t.data.special = t.data.special || [],
                        t.fulldata.special = t.fulldata.special || [],
                        i.data.formatData.data = i.source.data[e];
                        for (var a = 0, n = i.source.data[e].length; a < n; a++)
                            i.source.data[e][a] && (i.data.formatData.data[a].ts = i.source.data[e][a].id || i.source.data[e][a].ts,
                            i.data.formatData.data[a].open = i.toolkit.cutFixed(i.data.formatData.data[a].open, i.cfg.priceFloat),
                            i.data.formatData.data[a].close = i.toolkit.cutFixed(i.data.formatData.data[a].close, i.cfg.priceFloat),
                            i.data.formatData.data[a].low = i.toolkit.cutFixed(i.data.formatData.data[a].low, i.cfg.priceFloat),
                            i.data.formatData.data[a].high = i.toolkit.cutFixed(i.data.formatData.data[a].high, i.cfg.priceFloat));
                        i.cross.canvas.loadingstatus && i.cross.canvas.clear();
                        var r = ~~((i.size.w - i.cfg.ruleWidth - i.cfg.paddingRight) / i.cfg.curLevel[0]);
                        if (i.cfg.lens = r > i.source.data[e].length ? i.source.data[e].length : r,
                        i.splitWindow(),
                        i.data.formatData.data.length) {
                            var o, s = i.data.formatData.data.length, c = i.cfg.levelList[i.cfg.level], l = c[0] / 2 != (c[0] / 2).toFixed(), u = t.dispose(i.source.data[e]), d = t.dispose(i.source.data[0]), h = t.dispose(i.source.data[1]), f = [].concat(i.data.formatData.data).pop().close;
                            t.h,
                            t.timeline,
                            t.ratio,
                            t.data.special[e] = u,
                            t.fulldata.special[e] = i.data.formatData.data,
                            i.cfg.moveDepth = s - i.cfg.lens,
                            t.floatLens = i.cfg.priceFloat;
                            for (a = 0,
                            n = d.length; a < n; a++)
                                t.max = Math.max(d[a].close, t.max),
                                t.min = Math.min(d[a].close, t.min);
                            for (a = 0,
                            n = h.length; a < n; a++)
                                t.max = Math.max(h[a].close, t.max),
                                t.min = Math.min(h[a].close, t.min);
                            t.max - t.min < i.cfg.minDep && (t.max += i.cfg.minDep,
                            t.min -= i.cfg.minDep),
                            i.cfg.newPriceForce && (t.min = Math.min(t.min, f),
                            t.max = Math.max(t.max, f)),
                            t.verticalOffset = t.verOffset(),
                            t.getRule(),
                            t.beginPath(),
                            o = c[0] * t.ratio / 2 + (l ? 0 : .5),
                            t.moveTo(0, t.Y(u[0].close)),
                            t.lineTo(o, t.Y(u[0].close)),
                            t.strokeStyle = i.cfg.schemesList[i.cfg.schemes].iLines[e];
                            for (a = 0,
                            n = u.length; a < n; a++)
                                o = c[0] * t.ratio * a + c[0] * t.ratio / 2 + (l ? 0 : .5),
                                t.lineTo(o, t.Y(u[a].close));
                            t.stroke(),
                            i.specialOnce || (i.specialOnce = 1,
                            t.drawLine(i.cfg.priceFloat, 1, null, !0),
                            1 * i.cfg.ruleWidth && (t.strokeStyle = i.cfg.schemesList[i.cfg.schemes].tipStrokeColor || i.cfg.schemesList[i.cfg.schemes].layoutColor,
                            t.fillStyle = i.cfg.schemesList[i.cfg.schemes].tipColor || i.cfg.schemesList[i.cfg.schemes].layoutColor,
                            t.fillRect((t.w - i.cfg.ruleWidth) * t.ratio, t.Y(f) - 10 * t.ratio, i.cfg.ruleWidth * t.ratio, 20 * t.ratio),
                            t.lineWidth = 1,
                            t.strokeRect((t.w - i.cfg.ruleWidth) * t.ratio + .5, t.Y(f) - 10 * t.ratio, (i.cfg.ruleWidth - 1) * t.ratio, 20 * t.ratio),
                            t.font = "100 " + 12 * t.ratio + "px " + i.cfg.fontFamily,
                            t.textBaseline = "middle",
                            t.fillStyle = i.cfg.schemesList[i.cfg.schemes].tipFontColor || i.cfg.schemesList[i.cfg.schemes].background,
                            t.fillText(f, (t.w - i.cfg.ruleWidth + 5) * t.ratio, t.Y(f))),
                            t.timerule(u))
                        }
                    }
                }
            }
            function b() {
                function e(e) {
                    var t;
                    if (!C.cfg.pause) {
                        if (C.cfg.curLevel = [].concat(C.cfg.levelList[C.cfg.level]),
                        !C.source.data.length) {
                            C.cross.canvas.loading();
                            for (var i = C.cfg.splitWindow.length, a = C.cfg.splitWindow; i--; )
                                for (var n in a[i])
                                    C.canvas[i][n].canvas.clear(),
                                    C.canvas[i][n].info.innerHTML = "";
                            return C.data.MACD = {
                                data: []
                            },
                            C.data.KDJ = {
                                data: []
                            },
                            C.data.RSI = {
                                data: []
                            },
                            C.data.WR = {
                                data: []
                            },
                            C.data.BOLL = {
                                data: []
                            },
                            C.data.MA = {
                                data: []
                            },
                            C.data.VMA = {
                                data: []
                            },
                            C.data.RMA = {
                                data: []
                            },
                            void (C.EMA_VAL_SET = [])
                        }
                        if (x != C.source.version)
                            if (x = C.source.version,
                            C.period != C.cfg.period && (C.data.MACD = {
                                data: []
                            },
                            C.data.KDJ = {
                                data: []
                            },
                            C.data.RSI = {
                                data: []
                            },
                            C.data.WR = {
                                data: []
                            },
                            C.data.BOLL = {
                                data: []
                            },
                            C.data.MA = {
                                data: []
                            },
                            C.data.VMA = {
                                data: []
                            },
                            C.data.RMA = {
                                data: []
                            },
                            C.period = C.cfg.period),
                            C.cfg.specialChart)
                                (C.source.data[0].length || C.source.data[1].length) && (C.specialOnce = 0,
                                C.canvas[0][0].canvas.clear(),
                                C.canvas[0][0].canvas.drawSpecial(0),
                                C.canvas[0][0].canvas.drawSpecial(1),
                                C.filllast());
                            else {
                                !function() {
                                    if (C.data.formatData = {
                                        data: []
                                    },
                                    C.source.data.length) {
                                        for (var e = 0, t = C.source.data.length; e < t; e++)
                                            C.source.data[e] && (C.data.formatData.data[e] = C.collIndex.formatData(C.source.data[e]));
                                        if (!C.cfg.noInd) {
                                            e = 0;
                                            var i = C.data.formatData.data;
                                            for (t = C.source.data.length; e < t; e++)
                                                C.source.data[e] && (C.collIndex.MACD(e, t, i),
                                                C.collIndex.KDJ(e, t, i),
                                                C.collIndex.RSI(e, t, i),
                                                C.collIndex.WR(e, t, i),
                                                C.collIndex.BOLL(e, t, i),
                                                C.collIndex.MA(e, t, i),
                                                C.collIndex.VMA(e, t, i),
                                                C.collIndex.RMA(e, t, i))
                                        }
                                    }
                                }(),
                                C.cross.canvas.loadingstatus && C.cross.canvas.clear(),
                                t = ~~((C.size.w - C.cfg.ruleWidth - C.cfg.paddingRight) / C.cfg.curLevel[0]),
                                C.cfg.lens = t > C.source.data.length ? C.source.data.length : t,
                                C.cfg.lens,
                                C.source.data.length;
                                for (i = C.cfg.splitWindow.length,
                                a = C.cfg.splitWindow; i--; )
                                    for (var n in a[i])
                                        C.canvas[i][n].canvas.clear();
                                for (i = C.canvas[C.cfg.realtime].length; i--; )
                                    "drawInd" != C.cfg.splitWindow[C.cfg.realtime][i].brush || "VOL" != C.cfg.vIndicator.toUpperCase() || C.cfg.splitWindow[C.cfg.realtime][i].indicator ? C.canvas[C.cfg.realtime][i].canvas[C.cfg.splitWindow[C.cfg.realtime][i].brush] && C.canvas[C.cfg.realtime][i].canvas[C.cfg.splitWindow[C.cfg.realtime][i].brush](C.cfg.splitWindow[C.cfg.realtime][i].indicator) : C.canvas[C.cfg.realtime][i].canvas.drawVol && C.canvas[C.cfg.realtime][i].canvas.drawVol();
                                [].concat(C.canvas[C.cfg.realtime]).pop().canvas.autograph(),
                                C.filllast(),
                                C.splitWindow()
                            }
                    }
                }
                function t() {
                    var e = document.createElement("canvas")
                      , t = e.getContext("2d");
                    return t.lineCap = "round",
                    t.ratio = e.ratio = C.toolkit.pixRatio(t),
                    e.unselectable = "on",
                    y(n, t, C, e),
                    y(c, t, C, e),
                    y(l, t, C, e),
                    y(_, t, C, e),
                    y(d, t, C, e),
                    y(s, t, C, e),
                    y(o, t, C, e),
                    y(u, t, C, e),
                    y(r, t, C),
                    C.appendChild(e),
                    {
                        element: e,
                        canvas: t
                    }
                }
                function b(e, t, i) {
                    var a = document.createElement("p");
                    return a.unselectable = "on",
                    a.style.top = "-99px",
                    a.innerHTML = "",
                    a.style.color = C.cfg.schemesList[C.cfg.schemes].fontColor,
                    C.appendChild(a),
                    a
                }
                function y() {
                    var e, t = [].slice.apply(arguments);
                    t.length < 2 || t.shift().apply(e = t.shift(), t.length ? t : [e])
                }
                function w() {
                    C.source && (C.source.version = 1 * new Date)
                }
                var C, x = -1;
                return function(n, r) {
                    var o;
                    if (o = "string" == typeof n ? document.querySelector("#" + n.replace("#", "")) : n) {
                        if ((C = document.createElement("div")).setAttribute("tabindex", 99999),
                        C.className = "huobi_chart_container",
                        o.appendChild(C),
                        C.data = {},
                        C.update = w,
                        y(i, C),
                        y(a, C),
                        console.log("chart " + C.cfg.version + ";"),
                        r.splitWindow)
                            for (var s, c = 1, l = 0, u = r.splitWindow.length; l < u; l++) {
                                C.cfg.splitWindow[l].length = r.splitWindow[l].length,
                                s = [].concat(C.cfg.viceInd);
                                for (var d, _ = 0, x = r.splitWindow[l].length; _ < x; _++)
                                    C.cfg.splitWindow[l][_] || (C.cfg.splitWindow[l][_] = {}),
                                    C.cfg.splitWindow[l][_].offsetTop = r.splitWindow[l][_].offsetTop || C.cfg.offsetTop,
                                    C.cfg.splitWindow[l][_].ruleLine = r.splitWindow[l][_].ruleLine || 0 === r.splitWindow[l][_].ruleLine ? r.splitWindow[l][_].ruleLine : r.ruleLine || C.cfg.ruleLine,
                                    C.cfg.splitWindow[l][_].minRuleHeight = r.splitWindow[l][_].minRuleHeight || C.cfg.minRuleHeight[1 * !!_],
                                    C.cfg.splitWindow[l][_].percent = r.splitWindow[l][_].percent || (1 == c ? C.cfg.percentStart : c / (x - _ <= 0 ? 1 : x - _)),
                                    c -= C.cfg.splitWindow[l][_].percent,
                                    C.cfg.splitWindow[l][_].range = r.splitWindow[l][_].range || C.cfg.range,
                                    C.cfg.splitWindow[l][_].brush = r.splitWindow[l][_].brush || C.cfg.splitWindow[l][_].brush || C.cfg.brushList[1 * !!l][1 * !!_],
                                    r.splitWindow[l][_].indicator || "drawInd" == C.cfg.splitWindow[l][_].brush || C.cfg.splitWindow[l][_].brush,
                                    C.cfg.splitWindow[l][_].timeline = r.splitWindow[l][_].timeline || 0,
                                    "drawInd" == C.cfg.splitWindow[l][_].brush && (d = s.shift()) && d.toUpperCase() == C.cfg.vIndicator.toUpperCase() && (d = s.shift())
                            }
                        if (r.langMap)
                            for (var x in r.langMap) {
                                C.cfg.langMap[x] || (C.cfg.langMap[x] = {});
                                var k = C.cfg.langword.split(",");
                                for (u = k.length; u--; )
                                    C.cfg.langMap[x][k[u]] = r.langMap[x][k[u]] || k[u]
                            }
                        if (C.cfg.viewPortScale = r.viewPortScale || 1,
                        C.cfg.specialChart = r.specialChart || 0,
                        C.cfg.realtime = r.realtime || C.cfg.realtime,
                        C.cfg.noInd = r.noInd || C.cfg.noInd,
                        C.cfg.paddingRight = 0 === r.paddingRight ? 0 : r.paddingRight || C.cfg.paddingRight,
                        C.cfg.ruleWidth = 0 === r.ruleWidth ? 0 : r.ruleWidth || C.cfg.ruleWidth,
                        C.cfg.logo = 0 === r.logo ? 0 : r.logo || C.cfg.logo,
                        C.cfg.tips = 0 === r.tips ? 0 : r.tips || C.cfg.tips,
                        C.cfg.toolHeight = 0 === r.toolHeight ? 0 : r.toolHeight || C.cfg.toolHeight,
                        C.cfg.border = 0 === r.border ? 0 : r.border || C.cfg.border,
                        C.cfg.event = 0 === r.event ? 0 : r.event || C.cfg.event,
                        C.cfg.binary = r.binary || C.cfg.binary,
                        C.cfg.schemes = r.schemes || C.cfg.schemes,
                        C.cfg.indicator = r.indicator || C.cfg.indicator,
                        C.cfg.vIndicator = r.vIndicator || C.cfg.vIndicator,
                        C.cfg.offsetTop = r.offsetTop || C.cfg.offsetTop,
                        C.cfg.level = r.level || C.cfg.level,
                        C.cfg.period = r.period || C.cfg.period,
                        C.cfg.brushList = r.brushList || C.cfg.brushList,
                        C.cfg.showHigh = 0 === r.showHigh ? 0 : r.showHigh || C.cfg.showHigh,
                        C.cfg.showLow = 0 === r.showLow ? 0 : r.showLow || C.cfg.showLow,
                        C.cfg.range = r.range || C.cfg.range,
                        C.cfg.percentStart = r.percentStart || C.cfg.percentStart,
                        C.cfg.baseLineWidth = r.baseLineWidth || C.cfg.baseLineWidth,
                        C.cfg.minDep = r.minDep || C.cfg.minDep,
                        C.cfg.priceFloat = r.priceFloat || C.cfg.priceFloat,
                        C.cfg.amountFloat = r.amountFloat || C.cfg.amountFloat,
                        C.cfg.ruleLine = r.ruleLine || C.cfg.ruleLine,
                        C.cfg.MA = r.MA || C.cfg.MA,
                        C.cfg.BOLL = r.BOLL || C.cfg.BOLL,
                        C.cfg.VMA = r.VMA || C.cfg.VMA,
                        C.cfg.RMA = r.RMA || C.cfg.RMA,
                        C.cfg.WR = r.WR || C.cfg.WR,
                        C.cfg.RSI = r.RSI || C.cfg.RSI,
                        C.cfg.MACD = r.MACD || C.cfg.MACD,
                        C.cfg.KDJ = r.KDJ || C.cfg.KDJ,
                        C.cfg.KDJLimit = r.KDJLimit || C.cfg.KDJLimit,
                        C.cfg.RSILimit = r.RSILimit || C.cfg.RSILimit,
                        C.cfg.WRLimit = r.WRLimit || C.cfg.WRLimit,
                        C.cfg.lang = r.lang || C.cfg.lang,
                        C.cfg.fontFamily = r.fontFamily || C.cfg.fontFamily,
                        C.cfg.newPriceForce = r.newPriceForce || C.cfg.newPriceForce,
                        C.cfg.splitLine = 0 === r.splitLine ? 0 : r.splitLine || C.cfg.splitLine,
                        C.cfg.hideOpen = 1 === r.hideOpen ? 1 : 0,
                        C.cfg.showParity = 0 === r.showParity ? 0 : r.showParity || C.cfg.showParity,
                        r.schemesList)
                            for (var x in r.schemesList)
                                C.cfg.schemesList[x] = r.schemesList[x];
                        C.innerHTML = "<style>.huobi_chart_container{;outline:0 none;position:relative;user-select: none;" + (C.cfg.border ? "border-top:1px solid " + C.cfg.schemesList[C.cfg.schemes].layoutColor : "") + "}.huobi_chart_container canvas{;position:absolute;left:0;top:0;user-select: none;}.huobi_chart_container p{font-size:" + 12 / C.cfg.viewPortScale + "px;user-select: none;left:10px;position:absolute;top:0;padding:0;margin:0;line-height:1.3;}.huobi_chart_container p span{padding-left:6px;}</style>",
                        C.canvas = [];
                        u = C.cfg.splitWindow.length;
                        for (var S, T = C.cfg.splitWindow; u--; )
                            for (var x in T[u])
                                S = T[u][x],
                                !C.canvas[u] && (C.canvas[u] = []),
                                C.canvas[u][x] = t(),
                                C.canvas[u][x].info = b(),
                                C.canvas[u][x].canvas.drawRange = S.range,
                                C.canvas[u][x].canvas.brush = S.brush,
                                C.canvas[u][x].canvas.offsetTop = S.offsetTop || C.cfg.offsetTop,
                                C.canvas[u][x].canvas.timeline = S.timeline || 0,
                                C.canvas[u][x].canvas.ruleLine = S.ruleLine || 0,
                                C.canvas[u][x].canvas.minRuleHeight = S.minRuleHeight || C.cfg.minRuleHeight;
                        C.cross = t(),
                        y(h, C),
                        y(p, C),
                        y(f, C),
                        y(m, C),
                        y(g, C.cross.canvas, C),
                        y(v, C),
                        C.cfg.levelList.reverse(),
                        C.toolkit.raf(e)
                    }
                }
                .apply(window, arguments),
                {
                    putData: function(e) {
                        C.source = e
                    },
                    chart: C,
                    update: w,
                    pause: function() {
                        C.cfg.pause = 1
                    },
                    resume: function() {
                        C.cfg.pause = 0
                    },
                    forceUpdate: function() {
                        C.source && (C.cfg.canvasOffset = 0,
                        C.resize(),
                        C.update())
                    },
                    lookupLangWord: function() {
                        return C.cfg.langword
                    }
                }
            }
            "function" == typeof define ? define(function() {
                return b
            }) : "undefined" != typeof exports ? (e.exports.chart = b,
            exports = e.exports) : window.chart = b,
            t.a = b
        }
        ).call(t, i("f1Eh")(e))
    },
    Ux0R: function(e, t) {},
    Uxnq: function(e, t, i) {
        "use strict";
        var a = i("//Fk")
          , n = i.n(a)
          , r = i("d7EF")
          , o = i.n(r);
        t.a = {
            data: function() {
                return {
                    handicapSize: 10,
                    tradeDepth: "0.000001",
                    tradeDepthIndex: 0,
                    sellData: [],
                    buyData: [],
                    buySellFormInit: !1,
                    initSellForm: {},
                    initBuyForm: {}
                }
            },
            methods: {
                initHandicapWs: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , i = arguments[2]
                      , a = e || this.WsConnect;
                    this.symbol || (this.symbol = t),
                    "function" != typeof i && (i = this.convertHandicapData),
                    a.depth.sub({
                        api: {
                            symbol: this.symbol
                        },
                        params: {
                            step: "step" + this.tradeDepthIndex
                        }
                    }, i)
                },
                convertHandicapData: function(e) {
                    var t = e;
                    if (t.ch && !(t.ch.indexOf("." + this.symbol + ".") < 0)) {
                        var i = this.initHandicapTable(0)
                          , a = this.initHandicapTable(1)
                          , n = t.tick && t.tick.asks || []
                          , r = t.tick && t.tick.bids || [];
                        i = this.convertHandicapTableData(i, n, !0),
                        a = this.convertHandicapTableData(a, r, !1);
                        var s = this.getHandicapMaxTotal(i)
                          , c = this.getHandicapMaxTotal(a);
                        if (i = i.map(function(e) {
                            return e.bar = "--" === e.total ? 0 : e.amount / s,
                            e
                        }),
                        a = a.map(function(e) {
                            return e.bar = "--" === e.total ? 0 : e.amount / c,
                            e
                        }),
                        this.sellData = i,
                        this.buyData = a,
                        !this.buySellFormInit) {
                            var l = this.sellData[this.sellData.length - 1] || [];
                            "--" === l.price ? this.initSellForm.price = 0 : this.initSellForm.price = l.price || 0;
                            var u = this.buyData || []
                              , d = o()(u, 1)[0];
                            "--" === d.price ? this.initBuyForm.price = 0 : this.initBuyForm.price = d.price || 0,
                            this.buySellFormInit = !0
                        }
                    }
                },
                destroyHandicapWs: function(e) {
                    var t = this
                      , i = e || this.WsConnect;
                    return new n.a(function(e) {
                        i.depth.unsub({
                            api: {
                                symbol: t.symbol
                            },
                            params: {
                                step: "step" + t.tradeDepthIndex
                            }
                        }, function() {
                            return e()
                        })
                    }
                    )
                },
                initHandicapTable: function(e) {
                    for (var t = [], i = 0; i < this.handicapSize; i += 1)
                        t[i] = {
                            id: (0 === e ? "sell" : "buy") + (i + 1),
                            level: (0 === e ? "Sell" : "Buy") + (i + 1),
                            price: "--",
                            amount: "--",
                            total: "--",
                            bar: 0
                        };
                    return t
                },
                convertHandicapTableData: function(e, t, i) {
                    var a = this;
                    return e.map(function(e, n) {
                        e.bar = 0;
                        var r = n;
                        return i && (r = a.handicapSize - n - 1),
                        t[r] && (e.price = a.preciseHandler(t[r][0], a.precise.tradePrice),
                        e.amount = a.preciseHandler(t[r][1], a.precise.tradeAmount),
                        e.total = a.preciseHandler(a.getHandicapTypeTotal(n, t, i), a.precise.tradeAmount)),
                        e
                    })
                },
                getHandicapTypeTotal: function(e, t, i) {
                    if (t) {
                        var a = 0;
                        if (i)
                            for (var n = 0; n < t.length && ("--" === t[n][1] || (a += 1 * t[n][1],
                            this.handicapSize - (e - 1) !== n)); n += 1)
                                ;
                        else
                            for (var r = 0; r < t.length && ("--" === t[r][1] || (a += 1 * t[r][1],
                            e !== r)); r += 1)
                                ;
                        return a
                    }
                },
                getHandicapMaxTotal: function(e) {
                    var t = 0;
                    return e.forEach(function(e) {
                        t = "--" !== e.total && e.total - t > 0 ? e.total : t
                    }),
                    t
                }
            }
        }
    },
    YR89: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i("Xxa5")
          , n = i.n(a)
          , r = i("exGp")
          , o = i.n(r)
          , s = i("d7EF")
          , c = i.n(s)
          , l = i("Dd8w")
          , u = i.n(l)
          , d = i("NYxO")
          , h = i("5reh")
          , f = i("043Z")
          , p = i("PKHo")
          , m = i("VsUZ")
          , g = {
            name: "Card",
            props: {
                className: {
                    required: !1,
                    type: String,
                    default: ""
                },
                toggle: {
                    required: !1,
                    type: Boolean,
                    default: !1
                },
                hideTitle: {
                    required: !1,
                    type: Boolean,
                    default: !1
                },
                showContent: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    show: !0
                }
            },
            created: function() {
                this.show = this.showContent
            },
            methods: {
                hideCard: function() {
                    this.toggle && (this.show = !this.show,
                    this.$emit("toggle-kline", this.show))
                }
            }
        }
          , v = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("el-card", {
                    staticClass: "custom-card",
                    class: e.className ? e.className : ""
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.hideTitle,
                        expression: "!hideTitle"
                    }],
                    staticClass: "custom-card-header",
                    attrs: {
                        slot: "header"
                    },
                    on: {
                        click: function(t) {
                            e.$emit("click")
                        }
                    },
                    slot: "header"
                }, [e.toggle ? i("i", {
                    staticClass: "el-icon-arrow-down",
                    class: this.show ? "show" : "hide",
                    on: {
                        click: e.hideCard
                    }
                }) : e._e(), e._v(" "), i("div", {
                    staticClass: "card-header-slot"
                }, [e._t("header")], 2)]), e._v(" "), i("el-collapse-transition", [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.show,
                        expression: "show"
                    }],
                    staticClass: "card-body",
                    on: {
                        click: function(t) {
                            e.$emit("click")
                        }
                    }
                }, [e._t("cardBody")], 2)])], 1)
            },
            staticRenderFns: []
        };
        var _ = i("VU/8")(g, v, !1, function(e) {
            i("/0BQ")
        }, "data-v-bb870746", null).exports
          , b = {
            name: "NoticeList",
            mixins: [p.a],
            data: function() {
                return {
                    title: "",
                    content: "",
                    noticeList: []
                }
            },
            components: {
                Card: _
            },
            mounted: function() {
                this.getTopNotice()
            },
            methods: {
                goToDetail: function(e) {
                    this.pushState("/notices/" + e.id + "/")
                },
                getTopNotice: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        var i;
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    m.g.getTopNoticeList();
                                case 2:
                                    (i = t.sent) && "ok" === i.status && i.data && (e.noticeList = i.data.top_notice_list || [],
                                    e.noticeList = e.noticeList.map(function(e) {
                                        return e.created = Object(f.a)(e.created),
                                        e
                                    }));
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                }
            }
        }
          , y = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return e.noticeList.length > 0 ? i("Card", {
                    staticClass: "notice",
                    attrs: {
                        toggle: !0
                    }
                }, [i("span", {
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [i("i", {
                    staticClass: "ae_icon_notice"
                }), e._v("\n        " + e._s(e.$t("exchange.news.news")) + "\n    ")]), e._v(" "), i("ul", {
                    attrs: {
                        slot: "cardBody"
                    },
                    slot: "cardBody"
                }, e._l(e.noticeList, function(t, a) {
                    return i("li", {
                        key: a
                    }, [t.sourceHref ? i("a", {
                        attrs: {
                            href: t.sourceHref,
                            target: "_blank"
                        }
                    }, [i("p", [e._v(e._s(t.title))]), e._v(" "), i("p", [i("span", [e._v(e._s(t.created))])])]) : e._e(), e._v(" "), t.sourceHref ? e._e() : i("span", {
                        on: {
                            click: function(i) {
                                e.goToDetail(t)
                            }
                        }
                    }, [i("p", [e._v(e._s(t.title))]), e._v(" "), i("p", [i("span", [e._v(e._s(t.created))])])])])
                }))]) : e._e()
            },
            staticRenderFns: []
        };
        var w = i("VU/8")(b, y, !1, function(e) {
            i("AiGx")
        }, "data-v-d0bab4e8", null).exports
          , C = {
            name: "Banner",
            mixins: [p.a],
            data: function() {
                return {
                    lang: "",
                    bannerList: []
                }
            },
            mounted: function() {
                this.lang = this.locale ? this.locale : this.$i18n.locale,
                this.getBannerList()
            },
            methods: {
                getBannerList: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        var i, a;
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return i = {
                                        language: e.lang,
                                        platform: 10
                                    },
                                    e.loading = !0,
                                    t.next = 4,
                                    m.f.getPosterList(i);
                                case 4:
                                    a = t.sent,
                                    e.loading = !1,
                                    "ok" === a.status && (e.bannerList = a.data ? a.data.adList : [],
                                    e.bannerList = e.bannerList.filter(function(t) {
                                        return !(t.isNeedLogin && !e.isLogin)
                                    }));
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                }
            }
        }
          , x = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return e.bannerList.length > 0 ? i("div", {
                    staticClass: "banner-pane"
                }, [i("el-carousel", {
                    attrs: {
                        trigger: "click",
                        height: "145",
                        interval: 5e3
                    }
                }, e._l(e.bannerList, function(t) {
                    return i("el-carousel-item", {
                        key: t.id
                    }, [i("div", {
                        staticClass: "banner-item",
                        style: {
                            background: "url(" + t.img + ") no-repeat 50% center"
                        }
                    }, [t.url ? i("a", {
                        attrs: {
                            target: "_blank",
                            href: t.url
                        }
                    }) : e._e()])])
                }))], 1) : e._e()
            },
            staticRenderFns: []
        };
        var k = i("VU/8")(C, x, !1, function(e) {
            i("A4Vm")
        }, "data-v-1787e9c6", null).exports
          , S = i("lHA8")
          , T = i.n(S)
          , P = i("Gu7T")
          , L = i.n(P)
          , D = i("mvHQ")
          , A = i.n(D)
          , M = i("iPXC")
          , O = i("Fod+")
          , F = {
            name: "RadioGroup",
            props: {
                className: {
                    required: !1,
                    type: String,
                    default: ""
                },
                value: {
                    type: String,
                    default: ""
                },
                name: {
                    required: !0,
                    type: String
                },
                list: {
                    required: !0,
                    type: Array
                }
            },
            data: function() {
                return {
                    radioArr: []
                }
            },
            methods: {
                change: function(e) {
                    this.$emit("input", e.target.value)
                }
            },
            watch: {
                value: {
                    immediate: !0,
                    handler: function(e) {
                        e || (e = this.list[0].value),
                        this.radioArr = this.list.map(function(t) {
                            return t.value === e ? t.checked = !0 : t.checked = !1,
                            t
                        })
                    }
                }
            }
        }
          , R = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("ul", {
                    class: "ht-radio-group " + (e.className || "")
                }, e._l(e.radioArr, function(t) {
                    return i("li", {
                        key: t.value
                    }, [i("input", {
                        attrs: {
                            type: "radio",
                            name: e.name,
                            id: e.name + "_" + t.value
                        },
                        domProps: {
                            checked: t.checked,
                            value: t.value
                        },
                        on: {
                            change: e.change
                        }
                    }), e._v(" "), i("label", {
                        attrs: {
                            for: e.name + "_" + t.value
                        }
                    }, [e._v(e._s(t.label))])])
                }))
            },
            staticRenderFns: []
        };
        var $ = i("VU/8")(F, R, !1, function(e) {
            i("gUMp")
        }, null, null).exports
          , I = i("8skk")
          , E = i("koKx")
          , j = {
            name: "MarketTable",
            mixins: [p.a],
            props: {
                favorList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                currencyData: {
                    required: !0,
                    type: [Object, Array]
                },
                currentQuoteCoin: {
                    required: !0,
                    type: String
                },
                quoteCoin: {
                    required: !0,
                    type: String
                },
                baseCoin: {
                    required: !0,
                    type: String
                },
                tableData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                currencyNameList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                showFavor: {
                    required: !0,
                    type: Boolean
                }
            },
            data: function() {
                return {
                    nowTime: (new Date).getTime()
                }
            },
            mounted: function() {
                var e = this;
                setTimeout(function() {
                    e.scrollToSymbol("" + e.baseCoin + e.quoteCoin)
                }, 100),
                this.nowTimed()
            },
            computed: {
                emptyText: function() {
                    return this.showFavor ? this.$t("exchange.market.no_favorites") : this.$t("exchange.market.no_records")
                }
            },
            methods: {
                precision: O.c,
                scrollToSymbol: function(e) {
                    var t = this;
                    try {
                        var i = this.$refs.table.$el
                          , a = document.getElementById(e);
                        if (!i || !a)
                            return void setTimeout(function() {
                                t.scrollToSymbol("" + t.baseCoin + t.quoteCoin)
                            }, 100);
                        var n = i.offsetHeight
                          , r = a.getBoundingClientRect().top - i.getBoundingClientRect().top;
                        r >= n / 2 ? this.tableScrollTo(r - n / 2) : this.tableScrollTo(0)
                    } catch (e) {}
                },
                tableScrollTo: function(e) {
                    var t = this;
                    this.$nextTick(function() {
                        t.$refs.table && t.$refs.table.$refs.bodyWrapper && (t.$refs.table.$refs.bodyWrapper.scrollTop = e)
                    })
                },
                closeSortMethod: function(e, t) {
                    var i = e.close
                      , a = t.close;
                    return "--" === i && (i = -1 / 0),
                    "--" === a && (a = -1 / 0),
                    Number(i) - Number(a)
                },
                rateSortMethod: function(e, t) {
                    var i = e.rate
                      , a = t.rate;
                    return "--" === i && (i = -1 / 0),
                    "--" === a && (a = -1 / 0),
                    Number(i) - Number(a)
                },
                volumeSortMethod: function(e, t) {
                    return e.originAmount - t.originAmount
                },
                tableRowClassName: function(e) {
                    var t = e.row
                      , i = t.state
                      , a = t.symbol;
                    return "online" !== i && "pre-online" !== i ? "disabled" : t["trade-enabled"] || "pre-online" === i ? (a === this.baseCoin + this.quoteCoin && this.setCurrent(t),
                    "") : "disabled"
                },
                debouncedSetSymbol: function(e, t) {
                    return Object(E.a)(this.rowClick(e, t), 2e3)
                },
                rowClick: function(e, t) {
                    if (t.target.className.indexOf("icon-favor") > -1)
                        this.favorList.indexOf(e.symbol) > -1 ? this.$emit("favor-click", e, "cancel") : this.$emit("favor-click", e, "add");
                    else {
                        if (e["base-currency"].toLowerCase() === this.baseCoin && e["quote-currency"].toLowerCase() === this.currentQuoteCoin)
                            return;
                        this.setCurrent(e),
                        this.$emit("row-click", e)
                    }
                },
                setCurrent: function(e) {
                    this.$refs.table && this.$refs.table.setCurrentRow(e)
                },
                sortChange: function() {
                    var e = this
                      , t = void 0;
                    this.tableData.forEach(function(i, a) {
                        i.symbol === "" + e.baseCoin + e.quoteCoin && (t = a)
                    }),
                    setTimeout(function() {
                        e.$refs.table.setCurrentRow(e.tableData[t])
                    }, 0)
                },
                fontIcon: function(e) {
                    return "hb-icon-currency-token hb-icon-currency-" + e.toLowerCase()
                },
                favorIcon: function(e) {
                    return this.favorList.indexOf(e.symbol) > -1 ? "icon-favor-on" : "icon-favor-off"
                },
                getCurrencyName: function(e) {
                    var t = this.$locale.replace("-", "").toLowerCase()
                      , i = {
                        kokr: "koKr",
                        zhcn: "zhCn",
                        enus: "enUs"
                    }
                      , a = e.toUpperCase();
                    return this.currencyNameList.some(function(n) {
                        return n.currency.toLowerCase() === e.toLowerCase() && (a = n[i[t]],
                        !0)
                    }),
                    a
                },
                rateClass: function(e) {
                    var t = e.close
                      , i = e.open;
                    return (t = Number(t)) > (i = Number(i)) ? "rate-up" : t < i ? "rate-down" : ""
                },
                nowTimed: function() {
                    var e = this;
                    setInterval(function() {
                        e.nowTime = (new Date).getTime()
                    })
                },
                dimVisibled: function(e, t, i) {
                    var a = null;
                    if ("online" !== e.state && e["trade-open-at"] >= this.nowTime || "suspend" === e.state)
                        a = "--";
                    else
                        switch (i) {
                        case "price":
                            a = this.formatPrice(t);
                            break;
                        case "rate":
                            a = (Number(e.close) - Number(e.open) > 0 ? "+" : "") + e.rate + "%";
                            break;
                        case "thousandSeparate":
                            a = this.thousandSeparate(t);
                            break;
                        default:
                            a = t
                        }
                    return a
                }
            }
        }
          , W = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("el-table", {
                    ref: "table",
                    staticClass: "hb-el-table market-table",
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        size: "mini",
                        data: e.tableData,
                        "max-height": "622",
                        "highlight-current-row": "",
                        "row-style": {
                            height: "48px",
                            cursor: "pointer"
                        },
                        "row-class-name": e.tableRowClassName,
                        "row-key": "symbol",
                        "empty-text": e.emptyText,
                        "growing-ignore": "true"
                    },
                    on: {
                        "row-click": e.debouncedSetSymbol,
                        "sort-change": e.sortChange
                    }
                }, [i("el-table-column", {
                    attrs: {
                        align: "center",
                        width: "30"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [i("p", {
                                staticClass: "market-tabal-icon"
                            }, [i("i", {
                                staticClass: "fz24",
                                class: e.fontIcon(t.row.coin)
                            })])]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "coin",
                        "min-width": "100",
                        label: e.$t("exchange.market.coin_type")
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [i("span", {
                                staticClass: "cb market-coin-name",
                                attrs: {
                                    id: t.row.symbol
                                }
                            }, [i("b", {
                                staticClass: "icon-name"
                            }, [e._v("\n                    " + e._s(e.getCurrencyName(t.row.coin)) + "\n                    "), t.row.tags ? e._l(t.row.tags.split(","), function(t, a) {
                                return t && "st" === t.toLowerCase() ? i("el-popover", {
                                    key: a,
                                    staticClass: "tags",
                                    attrs: {
                                        placement: "top-start",
                                        width: "400",
                                        trigger: "hover"
                                    }
                                }, [i("p", {
                                    domProps: {
                                        innerHTML: e._s(e.$t("tagsTips['" + t.toLowerCase() + "']"))
                                    }
                                }), e._v(" "), i("span", {
                                    attrs: {
                                        slot: "reference"
                                    },
                                    slot: "reference"
                                }, [e._v(e._s(t))])]) : e._e()
                            }) : e._e()], 2), e._v(" "), i("span", {
                                staticClass: "market-symbol"
                            }, [e._v("\n                    " + e._s(t.row.coin) + "/" + e._s(e.quoteCoin.toUpperCase()) + "\n                ")])])]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "close",
                        "min-width": "90",
                        align: "right",
                        sortable: !0,
                        "sort-method": e.closeSortMethod,
                        label: e.$t("exchange.market.recent_price")
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [i("div", {
                                staticClass: "market-table"
                            }, [i("p", {
                                staticClass: "fz14",
                                class: {
                                    "rate-down": parseFloat(t.row.rate) < 0,
                                    "rate-up": parseFloat(t.row.rate) > 0
                                }
                            }, [e._v("\n                    " + e._s(e.dimVisibled(t.row, t.row.close, "thousandSeparate")) + "\n                ")]), e._v(" "), t.row.close > 0 ? i("p", {
                                staticClass: "conversion"
                            }, ["KRW" !== e.quoteCoin.toUpperCase() ? i("span", {
                                staticClass: "display-inline-block"
                            }, [e._v("\n                        " + e._s(e.dimVisibled(t.row, t.row.closeToLegal, "thousandSeparate")) + "\n                    ")]) : e._e(), e._v(" "), "KRW" !== e.quoteCoin.toUpperCase() ? i("s", {
                                staticClass: "display-inline-block"
                            }, [e._v("\n                        " + e._s(e.dimVisibled(t.row, e.legal.toUpperCase())) + "\n                    ")]) : e._e()]) : e._e()])]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "rate",
                        sortable: !0,
                        "sort-method": e.rateSortMethod,
                        "min-width": "65",
                        align: "right",
                        label: e.$t("exchange.market.increase_amount")
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [i("p", {
                                staticClass: "fz14",
                                class: e.rateClass(t.row)
                            }, [Number(t.row.close) ? i("span", [e._v("\n                    " + e._s(e.dimVisibled(t.row, "", "rate")) + "\n                ")]) : i("span", [e._v("--")])])]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        align: "right",
                        width: "90",
                        prop: "amountForList",
                        sortable: !0,
                        "sort-method": e.volumeSortMethod,
                        label: e.$t("exchange.market.amount_24H")
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [i("span", {
                                staticClass: "amount-cell"
                            }, [e._v("\n                " + e._s(e.dimVisibled(t.row, t.row.amountForList, "thousandSeparate")) + " \n                "), i("i", {
                                staticClass: "icon-favor",
                                class: e.favorIcon(t.row)
                            })])]
                        }
                    }])
                })], 1)
            },
            staticRenderFns: []
        };
        var N = i("VU/8")(j, W, !1, function(e) {
            i("sw5I")
        }, "data-v-72e5897e", null).exports
          , B = i("GKmE")
          , q = {
            name: "BalanceTable",
            mixins: [p.a],
            props: {
                currencyData: {
                    required: !0,
                    type: [Object, Array]
                },
                quoteCoinName: {
                    required: !0,
                    type: String
                },
                baseCoinName: {
                    required: !0,
                    type: String
                },
                balanceList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                currencyNameList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                totalBalance: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    quoteCoin: "krw",
                    quoteShowPrecision: "2"
                }
            },
            computed: u()({}, Object(d.b)({
                legalTotal: function(e) {
                    return Object(O.a)(e.balances.legalTotal || 0, {
                        fixed: 2,
                        separate: !0
                    })
                }
            }), {
                quoteTotal: function() {
                    return this.getConvertQuoteTotal("krw", this.balanceTotal)
                },
                totalPrice: function() {
                    var e = this.legalTotal ? this.legalTotal.replace(/,/g, "") : 0
                      , t = this.quoteTotal ? this.quoteTotal.replace(/,/g, "") : 0;
                    return Object(O.a)(Number(e) + Number(t) || 0, {
                        fixed: 2,
                        separate: !0
                    }) || "--"
                },
                hasBalance: function() {
                    return this.tableData.length > 0
                },
                tableData: function() {
                    var e = this
                      , t = this.$store.state.currency.symbolsData;
                    return this.balanceList.map(function(i) {
                        var a = {}
                          , n = [];
                        return t.forEach(function(e) {
                            i.name === e["base-currency"] && (a[e["quote-currency"].toLowerCase()] = !0)
                        }),
                        e.quoteCurrencyArr.forEach(function(e) {
                            a[e] && n.push(e.toUpperCase())
                        }),
                        i.coins = n,
                        i
                    }).filter(function(e) {
                        return e.coinTotal > 0
                    })
                }
            }),
            methods: {
                formatQuoteCash: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "2"
                      , a = Object(B.e)(e, t, i)
                      , n = a.unitText ? this.$t(a.unitText) : "";
                    return a.cash + n
                },
                gotoRecharge: function() {
                    this.pushState("/legal/exchange/")
                },
                toExchange: function(e) {
                    if (e !== this.baseCoinName + "_" + this.quoteCoinName) {
                        var t = e.split("_")
                          , i = c()(t, 1)[0]
                          , a = this.tableData.filter(function(e) {
                            return e.name === i
                        })
                          , n = c()(a, 1)[0];
                        this.$refs.table.setCurrentRow(n),
                        this.$bus.$emit("exchange:balance-symbol-click", e)
                    }
                },
                formatRowAmountCash: function(e) {
                    return this.formatQuoteCash(e.coinTotal, !1, e["show-precision"])
                },
                handleCommand: function(e) {
                    this.quoteCoin = e,
                    this.quoteShowPrecision = this.getQuoteCoinPrecision(e)
                },
                getConvertQuoteTotal: function(e, t) {
                    var i = this.getBalanceTotal([{
                        currency: e,
                        total: t
                    }], "krw");
                    return Object(O.a)(i, {
                        fixed: 2,
                        separate: !0
                    })
                },
                getQuoteCoinPrecision: function(e) {
                    var t = void 0;
                    return this.totalBalance.some(function(i) {
                        return i.name === e && (t = i["show-precision"],
                        !0)
                    }),
                    t
                },
                fontIcon: function(e) {
                    return "hb-icon-currency-token hb-icon-currency-" + e.toLowerCase()
                },
                getCurrencyName: function(e) {
                    var t = this.$locale.replace("-", "").toLowerCase()
                      , i = {
                        kokr: "koKr",
                        zhcn: "zhCn",
                        enus: "enUs"
                    }
                      , a = e.toUpperCase();
                    return this.currencyNameList.some(function(n) {
                        return n.currency.toLowerCase() === e.toLowerCase() && (a = n[i[t]],
                        !0)
                    }),
                    a
                }
            }
        }
          , U = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("div", {
                    staticClass: "balance-table-box"
                }, [e.isLogin ? e._e() : i("p", {
                    staticClass: "balance-tip need-login"
                }, [e._v(e._s(e.$t("exchange.market.login_view_assets")))]), e._v(" "), e.isLogin && !e.hasBalance ? i("p", {
                    staticClass: "balance-tip has-no-balance"
                }, [e._v("\n        " + e._s(e.$t("exchange.market.no_assets"))), i("br"), i("br"), e._v(" "), i("span", {
                    staticClass: "color-link goto-recharge-btn",
                    on: {
                        click: e.gotoRecharge
                    }
                }, [e._v(e._s(e.$t("exchange.market.charge_coin")))])]) : e._e(), e._v(" "), e.isLogin && e.hasBalance ? i("div", {
                    staticClass: "header"
                }, [i("div", {
                    staticClass: "title"
                }, [e._v(e._s(e.$t("exchange.market.all_assets_")) + " = " + e._s(e.totalPrice) + " " + e._s(e.quoteCoin.toUpperCase()))])]) : e._e(), e._v(" "), e.isLogin && e.hasBalance ? i("el-table", {
                    ref: "table",
                    staticClass: "hb-el-table",
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        size: "mini",
                        data: e.tableData,
                        "max-height": "622",
                        "highlight-current-row": "",
                        "row-style": {
                            height: "48px",
                            cursor: "pointer"
                        },
                        "row-key": "name",
                        "empty-text": e.$t("exchange.market.no_records")
                    }
                }, [i("el-table-column", {
                    attrs: {
                        align: "center",
                        width: "30"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [i("p", {
                                staticClass: "market-tabal-icon"
                            }, [i("i", {
                                staticClass: "fz24",
                                class: e.fontIcon(t.row.name)
                            })])]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "coin",
                        "min-width": "60",
                        label: e.$t("exchange.market.coin_type")
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [i("b", {
                                staticClass: "cb market-coin-name",
                                staticStyle: {
                                    "-webkit-box-orient": "vertical"
                                }
                            }, [e._v("\n                    " + e._s(e.getCurrencyName(t.row.name)) + "\n                ")])]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "coinTotal",
                        "min-width": "100",
                        align: "right",
                        label: e.$t("exchange.market.hold_amount")
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [i("div", {
                                staticClass: "market-table"
                            }, [i("p", [e._v("\n                        " + e._s(e._f("thousandSeparate")(e.formatRowAmountCash(t.row))) + "\n                    ")])])]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        "min-width": "110",
                        align: "right",
                        label: e.$t("exchange.market.evaluate")
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [i("p", [i("span", {
                                staticClass: "display-inline-block"
                            }, [e._v(e._s(e.getConvertQuoteTotal(t.row.name, t.row.coinTotal)))]), e._v(" "), i("span", {
                                staticClass: "display-inline-block"
                            }, [e._v(e._s(e.quoteCoin.toUpperCase()))])])]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        width: "80",
                        align: "center",
                        label: e.$t("exchange.market.operation")
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [t.row.coins.length > 0 ? i("el-dropdown", {
                                staticClass: "exchange-btn color-link",
                                on: {
                                    command: e.toExchange
                                }
                            }, [i("span", {
                                staticClass: "el-dropdown-link"
                            }, [e._v("\n                        " + e._s(e.$t("exchange.market.exchange")) + "\n                    ")]), e._v(" "), i("el-dropdown-menu", {
                                attrs: {
                                    slot: "dropdown"
                                },
                                slot: "dropdown"
                            }, e._l(t.row.coins, function(a, n) {
                                return i("el-dropdown-item", {
                                    key: n,
                                    attrs: {
                                        command: t.row.name + "_" + a.toLowerCase()
                                    }
                                }, [e._v(e._s(a.toUpperCase()))])
                            }))], 1) : i("span", {
                                staticClass: "exchange-btn color-link",
                                on: {
                                    click: function(t) {
                                        e.toExchange("btc_krw")
                                    }
                                }
                            }, [e._v(e._s(e.$t("exchange.market.exchange")))])]
                        }
                    }])
                })], 1) : e._e()], 1)
            },
            staticRenderFns: []
        };
        var z = i("VU/8")(q, U, !1, function(e) {
            i("1A76")
        }, "data-v-5b03fdf4", null).exports
          , H = {
            name: "Market",
            mixins: [p.a],
            components: {
                RadioGroup: $,
                Card: _,
                MarketTable: N,
                BalanceTable: z
            },
            props: {
                quoteCoin: {
                    required: !0,
                    type: String,
                    default: "usdt"
                },
                baseCoin: {
                    required: !0,
                    type: String
                },
                overviewData: {
                    required: !0,
                    type: String,
                    default: function() {
                        return A()({})
                    }
                },
                currencyData: {
                    required: !0,
                    type: [Object, Array]
                },
                balanceList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                currencyNameList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    currentTab: "usdt",
                    params: {},
                    favorList: [],
                    showFavorList: !1,
                    searchValue: "",
                    balanceTableData: [],
                    marketRowClass: "disabled",
                    marketTableData: [],
                    latestPrice: null
                }
            },
            computed: {
                radioData: function() {
                    if (!this.quoteCurrencyArr.length)
                        return [];
                    var e = this.quoteCurrencyArr.map(function(e) {
                        return {
                            label: e.toUpperCase(),
                            value: e
                        }
                    });
                    return e.push({
                        label: this.$t("exchange.market.hold_assets"),
                        value: "balance"
                    }),
                    e
                },
                marketData: function() {
                    if (this.overviewData)
                        try {
                            return JSON.parse(this.overviewData)
                        } catch (e) {
                            return console.log(e),
                            {}
                        }
                    return {}
                },
                tableData: function() {
                    var e = this
                      , t = this.marketData[this.currentTab] || []
                      , i = this.searchValue;
                    return t && (i || this.showFavorList) && (t = t.filter(function(t) {
                        var a = i.toUpperCase()
                          , n = e.getCurrencyName(t.coin)
                          , r = !1;
                        return (t.coin.indexOf(a) > -1 || n.indexOf(a) > -1) && (r = !0),
                        e.showFavorList && (r = e.favorList.indexOf(t.symbol) > -1),
                        r
                    })),
                    t = t.map(function(t) {
                        return t.symbol === "" + e.baseCoin + e.quoteCoin && e.latestPrice && (t.close = Object(O.c)(e.latestPrice, t["trade-price-precision"]) || "--",
                        parseFloat(t.close) > 0 && parseFloat(t.open) > 0 ? (t.closeDiff = Object(O.c)(Object(I.b)(t.close, t.open), t["trade-price-precision"]) || "--",
                        t.rate = Object(O.c)(Object(I.d)(Object(I.a)(Object(I.b)(t.close, t.open), t.open), 100), 2)) : t.rate = "--",
                        0 !== parseFloat(e.latestPriceToLegal) && (t.closeToLegal = e.latestPriceToLegal)),
                        t
                    })
                }
            },
            watch: {
                isLogin: {
                    immediate: !0,
                    handler: function(e) {
                        e && this.getFavorList()
                    }
                },
                balanceList: {
                    deep: !0,
                    immediate: !0,
                    handler: function() {
                        this.filterBalanceList()
                    }
                },
                $route: {
                    deep: !0,
                    handler: function() {
                        this.latestPrice = "",
                        this.latestPriceToLegal = "";
                        location.href;
                        var e, t = location.href.substring(location.href.indexOf("exchange") + 9).split("_");
                        e = c()(t, 2)[1];
                        var i = M.a.get("Assets-Record");
                        M.a.remove("Assets-Record"),
                        this.currentTab = (i || e || this.quoteCoin).replace(/\//g, "")
                    },
                    immediate: !0
                }
            },
            mounted: function() {
                var e = this;
                this.showFavorList = 1 === window.parseInt(localStorage.getItem("showFavor")),
                this.getFavorList(),
                this.$bus.$on("exchange:balance-symbol-click", function(t) {
                    e.balanceSymbolClick(t)
                }, this),
                this.$bus.$on("exchange:symbol-update", function() {
                    e.latestPrice = null
                }),
                this.$bus.$on("exchange:lastest-price", function(t) {
                    var i = t.price
                      , a = t.latestPriceToLegal;
                    t.ch.includes("." + e.baseCoin + e.quoteCoin + ".") && (e.latestPrice = i,
                    e.latestPriceToLegal = a)
                })
            },
            methods: {
                balanceSymbolClick: function(e) {
                    var t = e.split("_")
                      , i = c()(t, 2)
                      , a = i[0]
                      , n = i[1]
                      , r = void 0;
                    this.marketData[n].some(function(e) {
                        return e.symbol === "" + a + n && (r = e,
                        !0)
                    }),
                    this.$bus.$emit("exchange:symbol-update", {
                        baseCoin: a,
                        quoteCoin: n,
                        item: r
                    })
                },
                getFavorList: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        var i, a;
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.isLogin) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 3,
                                    m.j.getFavorList();
                                case 3:
                                    i = t.sent,
                                    e.favorList = i && i.data ? i.data : [],
                                    t.next = 9;
                                    break;
                                case 7:
                                    a = localStorage.getItem("favor") || "[]",
                                    e.favorList = JSON.parse(a);
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                },
                radioChange: function(e) {
                    this.currentTab = e.target.value
                },
                setCurrent: function(e) {
                    this.$refs.marketTable && this.$refs.marketTable.setCurrent(e)
                },
                marketRowClick: function(e) {
                    this.$bus.$emit("exchange:symbol-update", {
                        baseCoin: e.coin.toLowerCase(),
                        quoteCoin: this.currentTab,
                        item: e
                    })
                },
                triggerFavor: function(e) {
                    this.favorList.indexOf(e) > -1 ? this.favorList.splice(this.favorList.indexOf(e), 1) : this.favorList.push(e)
                },
                showFavor: function() {
                    this.showFavorList = !this.showFavorList,
                    localStorage.setItem("showFavor", this.showFavorList ? 1 : 0),
                    this.setMarketTableData()
                },
                setMarketTableData: function() {
                    this.marketTableData = []
                },
                searchChange: function(e) {
                    var t = e.target.value;
                    t = t.replace(/[\u4e00-\u9fa5]/g, "").replace(/\w/g, function(e) {
                        return e.toLocaleUpperCase()
                    }),
                    this.searchValue = t,
                    this.filterBalanceList()
                },
                filterBalanceList: function() {
                    var e = this;
                    "" === this.searchValue ? this.balanceTableData = this.balanceList : this.balanceTableData = this.balanceList.filter(function(t) {
                        var i = e.searchValue.toLowerCase()
                          , a = e.getCurrencyName(t.name);
                        return t.name.indexOf(i) > -1 || a.indexOf(i) > -1
                    })
                },
                facorHandle: function(e, t) {
                    var i = this;
                    return o()(n.a.mark(function a() {
                        var r, o;
                        return n.a.wrap(function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    if (!i.isLogin) {
                                        a.next = 31;
                                        break
                                    }
                                    if (r = {
                                        trading_pair: e.symbol,
                                        website: "PRO"
                                    },
                                    !e.facorClick) {
                                        a.next = 4;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 4:
                                    if (e.facorClick = !0,
                                    o = void 0,
                                    "add" !== t) {
                                        a.next = 12;
                                        break
                                    }
                                    return a.next = 9,
                                    m.j.addFavor(r);
                                case 9:
                                    o = a.sent,
                                    a.next = 19;
                                    break;
                                case 12:
                                    if ("cancel" !== t) {
                                        a.next = 18;
                                        break
                                    }
                                    return a.next = 15,
                                    m.j.cancelFavor(r);
                                case 15:
                                    o = a.sent,
                                    a.next = 19;
                                    break;
                                case 18:
                                    return a.abrupt("return");
                                case 19:
                                    if (!o.success) {
                                        a.next = 23;
                                        break
                                    }
                                    i.triggerFavor(e.symbol),
                                    a.next = 28;
                                    break;
                                case 23:
                                    if (!1 !== o.success) {
                                        a.next = 27;
                                        break
                                    }
                                    i.$message.error({
                                        message: o.message,
                                        iconClass: "el-icon-warning"
                                    }),
                                    a.next = 28;
                                    break;
                                case 27:
                                    return a.abrupt("return");
                                case 28:
                                    e.facorClick = !1,
                                    a.next = 32;
                                    break;
                                case 31:
                                    "add" === t ? i.localStoreFavorAdd(e.symbol) : "cancel" === t && i.localStoreFavorCancel(e.symbol);
                                case 32:
                                case "end":
                                    return a.stop()
                                }
                        }, a, i)
                    }))()
                },
                localStoreFavorAdd: function(e) {
                    var t = localStorage.getItem("favor") || "[]"
                      , i = JSON.parse(t);
                    i.push(e),
                    i = [].concat(L()(new T.a(i))),
                    localStorage.setItem("favor", A()(i)),
                    this.triggerFavor(e)
                },
                localStoreFavorCancel: function(e) {
                    var t = localStorage.getItem("favor") || "[]"
                      , i = JSON.parse(t);
                    i.splice(i.indexOf(e), 1),
                    localStorage.setItem("favor", A()(i)),
                    this.triggerFavor(e)
                },
                getCurrencyName: function(e) {
                    var t = this.$locale.replace("-", "").toLowerCase()
                      , i = {
                        kokr: "koKr",
                        zhcn: "zhCn",
                        enus: "enUs"
                    }
                      , a = e.toUpperCase();
                    return this.currencyNameList.some(function(n) {
                        return n.currency.toLowerCase() === e.toLowerCase() && (a = n[i[t]],
                        !0)
                    }),
                    a
                }
            }
        }
          , V = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("Card", {
                    staticClass: "market-card",
                    staticStyle: {
                        "margin-bottom": "10px"
                    },
                    attrs: {
                        toggle: !0
                    }
                }, [i("div", {
                    staticClass: "market-title",
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [i("div", {
                    attrs: {
                        id: "v-step-3"
                    }
                }, [e._v(e._s(e.$t("exchange.market.market")))]), e._v(" "), i("div", {
                    staticClass: "search-input-box"
                }, [i("p", {
                    on: {
                        click: e.showFavor
                    }
                }, [i("i", {
                    class: e.showFavorList ? "icon-favor-on" : "icon-favor-off"
                }), e._v("\n                " + e._s(e.$t("exchange.market.show_favorites")) + "\n            ")]), e._v(" "), i("div", {
                    staticClass: "search-input el-input el-input--mini el-input--suffix"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.searchValue,
                        expression: "searchValue"
                    }],
                    staticClass: "el-input__inner",
                    attrs: {
                        type: "text",
                        autocomplete: "off",
                        "growing-ignore": "true"
                    },
                    domProps: {
                        value: e.searchValue
                    },
                    on: {
                        input: [function(t) {
                            t.target.composing || (e.searchValue = t.target.value)
                        }
                        , function(t) {
                            e.searchChange(t)
                        }
                        ]
                    }
                }), e._v(" "), i("span", {
                    staticClass: "el-input__suffix"
                }, [i("span", {
                    staticClass: "el-input__suffix-inner"
                }, [i("i", {
                    staticClass: "el-input__icon el-icon-search"
                })])])])])]), e._v(" "), i("div", {
                    staticClass: "market-data exchange-pannel",
                    attrs: {
                        slot: "cardBody"
                    },
                    slot: "cardBody"
                }, [i("div", {
                    staticClass: "market-radio"
                }, [e.radioData && e.radioData.length ? i("RadioGroup", {
                    attrs: {
                        name: "radio",
                        list: e.radioData
                    },
                    model: {
                        value: e.currentTab,
                        callback: function(t) {
                            e.currentTab = t
                        },
                        expression: "currentTab"
                    }
                }) : e._e()], 1), e._v(" "), i("div", {
                    attrs: {
                        id: "v-step-market"
                    }
                }), e._v(" "), i("BalanceTable", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "balance" === e.currentTab,
                        expression: "currentTab === 'balance'"
                    }],
                    ref: "balanceTable",
                    attrs: {
                        "currency-name-list": e.currencyNameList,
                        "balance-list": e.balanceTableData,
                        "total-balance": e.balanceList,
                        "quote-coin-name": e.quoteCoin,
                        "base-coin-name": e.baseCoin,
                        "currency-data": e.currencyData
                    }
                }), e._v(" "), i("MarketTable", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "balance" !== e.currentTab,
                        expression: "currentTab !== 'balance'"
                    }],
                    ref: "marketTable",
                    attrs: {
                        "currency-name-list": e.currencyNameList,
                        "table-data": e.tableData,
                        "quote-coin": e.currentTab,
                        "base-coin": e.baseCoin,
                        "current-quote-coin": e.quoteCoin,
                        "currency-data": e.currencyData,
                        "favor-list": e.favorList,
                        "show-favor": e.showFavorList
                    },
                    on: {
                        "favor-click": e.facorHandle,
                        "row-click": e.marketRowClick
                    }
                })], 1)])
            },
            staticRenderFns: []
        };
        var K = i("VU/8")(H, V, !1, function(e) {
            i("e2Mm")
        }, "data-v-ce3c1792", null).exports
          , Y = i("bOdI")
          , J = i.n(Y)
          , Q = i("OZWX")
          , Z = i.n(Q)
          , G = {
            up: "#e45748",
            down: "#2456ac",
            bg: "#ffffff",
            grid: "#f7f8fa",
            cross: "#8aa1Be",
            border: "#838c97",
            text: "#838c97",
            areatop: "rgba(71, 78, 112, 0.1)",
            areadown: "rgba(71, 78, 112, 0.02)",
            volumeTop: "rgba(36, 86, 172, 1)",
            volumeDown: "rgba(228, 87, 72, 1)"
        }
          , X = {
            volumePaneSize: "medium",
            "scalesProperties.lineColor": G.text,
            "scalesProperties.textColor": G.text,
            "paneProperties.background": G.bg,
            "paneProperties.vertGridProperties.color": G.grid,
            "paneProperties.horzGridProperties.color": G.grid,
            "paneProperties.crossHairProperties.color": G.cross,
            "paneProperties.legendProperties.showLegend": !!G.showLegend,
            "paneProperties.legendProperties.showStudyArguments": !0,
            "paneProperties.legendProperties.showStudyTitles": !0,
            "paneProperties.legendProperties.showStudyValues": !0,
            "paneProperties.legendProperties.showSeriesTitle": !0,
            "paneProperties.legendProperties.showSeriesOHLC": !0,
            "mainSeriesProperties.candleStyle.upColor": G.up,
            "mainSeriesProperties.candleStyle.downColor": G.down,
            "mainSeriesProperties.candleStyle.drawWick": !0,
            "mainSeriesProperties.candleStyle.drawBorder": !1,
            "mainSeriesProperties.candleStyle.borderColor": G.border,
            "mainSeriesProperties.candleStyle.borderUpColor": G.up,
            "mainSeriesProperties.candleStyle.borderDownColor": G.down,
            "mainSeriesProperties.candleStyle.wickUpColor": G.up,
            "mainSeriesProperties.candleStyle.wickDownColor": G.down,
            "mainSeriesProperties.candleStyle.barColorsOnPrevClose": !1,
            "mainSeriesProperties.hollowCandleStyle.upColor": G.up,
            "mainSeriesProperties.hollowCandleStyle.downColor": G.down,
            "mainSeriesProperties.hollowCandleStyle.drawWick": !0,
            "mainSeriesProperties.hollowCandleStyle.drawBorder": !0,
            "mainSeriesProperties.hollowCandleStyle.borderColor": G.border,
            "mainSeriesProperties.hollowCandleStyle.borderUpColor": G.up,
            "mainSeriesProperties.hollowCandleStyle.borderDownColor": G.down,
            "mainSeriesProperties.hollowCandleStyle.wickColor": G.line,
            "mainSeriesProperties.haStyle.upColor": G.up,
            "mainSeriesProperties.haStyle.downColor": G.down,
            "mainSeriesProperties.haStyle.drawWick": !0,
            "mainSeriesProperties.haStyle.drawBorder": !0,
            "mainSeriesProperties.haStyle.borderColor": G.border,
            "mainSeriesProperties.haStyle.borderUpColor": G.up,
            "mainSeriesProperties.haStyle.borderDownColor": G.down,
            "mainSeriesProperties.haStyle.wickColor": G.border,
            "mainSeriesProperties.haStyle.barColorsOnPrevClose": !1,
            "mainSeriesProperties.barStyle.upColor": G.up,
            "mainSeriesProperties.barStyle.downColor": G.down,
            "mainSeriesProperties.barStyle.barColorsOnPrevClose": !1,
            "mainSeriesProperties.barStyle.dontDrawOpen": !1,
            "mainSeriesProperties.lineStyle.color": G.border,
            "mainSeriesProperties.lineStyle.linewidth": 1,
            "mainSeriesProperties.lineStyle.priceSource": "close",
            "mainSeriesProperties.areaStyle.color1": G.areatop,
            "mainSeriesProperties.areaStyle.color2": G.areadown,
            "mainSeriesProperties.areaStyle.linecolor": G.border,
            "mainSeriesProperties.areaStyle.linewidth": 1,
            "mainSeriesProperties.areaStyle.priceSource": "close"
        }
          , ee = {
            "volume.volume.color.0": G.volumeTop,
            "volume.volume.color.1": G.volumeDown,
            "volume.volume ma.color": G.down,
            "volume.volume ma.linewidth": 5,
            "bollinger bands.median.color": G.up,
            "bollinger bands.upper.linewidth": 7
        }
          , te = ["compare_symbol", "display_market_status", "go_to_date", "header_chart_type", "header_compare", "header_interval_dialog_button", "header_resolutions", "header_symbol_search", "header_undo_redo", "legend_context_menu", "show_hide_button_in_legend", "show_interval_dialog_on_key_press", "snapshot_trading_drawings", "symbol_info", "timeframes_toolbar", "use_localstorage_for_settings", "volume_force_overlay"]
          , ie = ["dont_show_boolean_study_arguments", "hide_last_na_study_output", "move_logo_to_main_pane", "same_data_requery", "side_toolbar_in_fullscreen_mode", "keep_left_toolbar_visible_on_small_screens", "disable_resolution_rebuild"]
          , ae = i("fZjL")
          , ne = i.n(ae)
          , re = i("Zrlr")
          , oe = i.n(re)
          , se = i("wxAW")
          , ce = i.n(se)
          , le = (i("xe4/"),
        {
            1: "1min",
            5: "5min",
            15: "15min",
            30: "30min",
            60: "60min",
            240: "4hour",
            D: "1day",
            "1D": "1day",
            "5D": "5day",
            W: "1week",
            "1W": "1week",
            "1M": "1mon"
        })
          , ue = {
            symbols_types: [],
            supported_resolutions: ["1", "5", "15", "30", "60", "240", "1D", "5D", "1W", "1M"],
            supports_marks: !1,
            supports_timescale_marks: !1,
            supports_time: !0
        }
          , de = function(e) {
            var t = e.toString().match(/^(\d+)?([SDWM]?)?$/)
              , i = c()(t, 3)
              , a = (i[0],
            i[1]);
            return (void 0 === a ? 1 : a) * ({
                S: 1,
                D: 86400,
                W: 604800,
                M: 2592e3
            }[i[2]] || 60)
        }
          , he = function() {
            function e(t, i) {
                oe()(this, e),
                this.ws = t,
                this.symbolsData = i,
                this.nowSub = null
            }
            return ce()(e, [{
                key: "onReady",
                value: function(e) {
                    setTimeout(function() {
                        return e(ue)
                    }, 0)
                }
            }, {
                key: "searchSymbols",
                value: function(e, t, i, a) {}
            }, {
                key: "resolveSymbol",
                value: function(e, t, i) {
                    var a = this.symbolsData.filter(function(t) {
                        return t["symbol-name"] === e
                    })
                      , n = c()(a, 1)[0];
                    if (n) {
                        var r = {
                            name: e,
                            ticker: e,
                            description: "",
                            session: "24x7",
                            minmov: 1,
                            pricescale: Number("1e" + n["trade-price-precision"]),
                            volumescale: Number("1e" + n["trade-amount-precision"]),
                            timezone: "Asia/Seoul",
                            has_intraday: !0,
                            has_daily: !0,
                            has_weekly_and_monthly: !1
                        };
                        setTimeout(function() {
                            t(r)
                        }, 0)
                    }
                }
            }, {
                key: "getBars",
                value: function(e, t, i, a, n, r, o) {
                    var s = this
                      , l = e.name.replace("/", "").toLowerCase()
                      , u = function(e, t, i, a) {
                        var n = 1325347200
                          , r = 2524579200;
                        return i < n ? [{
                            from: n,
                            to: n
                        }] : t > r ? [{
                            from: r,
                            to: r
                        }] : (t < n && (t = n),
                        i > r && (i = r),
                        function t(a, n) {
                            return a + n > i ? (e.push({
                                from: a,
                                to: i
                            }),
                            e) : (e.push({
                                from: a,
                                to: a + n
                            }),
                            t(a + n + 1, n))
                        }(t, a))
                    }([], i, a = o ? parseInt((new Date).getTime() / 1e3, 10) : a, function(e) {
                        return 300 * de(e)
                    }(t))
                      , d = (new Date).getTime() + "." + u.length;
                    u.forEach(function(e, i) {
                        var a = e.from
                          , n = e.to;
                        s.ws.kline.req({
                            api: {
                                symbol: l,
                                period: "" + le[t]
                            },
                            extra: {
                                id: d + "." + i,
                                from: a,
                                to: n
                            }
                        })
                    });
                    var h = {}
                      , f = function(e) {
                        var i = e.id
                          , a = e.rep
                          , r = e.data;
                        if (a === "market." + l + ".kline." + le[t]) {
                            if (null === i)
                                return;
                            var o = i.split(".")
                              , s = c()(o, 3)
                              , u = s[0]
                              , d = s[1]
                              , f = s[2];
                            h[u] || (h[u] = {}),
                            h[u][f] = r;
                            var p = ne()(h[u]);
                            if (p.length === Number(d)) {
                                var m = p.reduce(function(e, t) {
                                    return e.concat(h[u][t].map(function(e) {
                                        return {
                                            time: 1e3 * e.id,
                                            close: e.close,
                                            open: e.open,
                                            high: e.high,
                                            low: e.low,
                                            volume: e.amount
                                        }
                                    }))
                                }, []);
                                n(m, {
                                    noData: !m.length
                                })
                            }
                        }
                    };
                    o && (this.ws.connection.info.removeCallback(f),
                    this.ws.connection.info.addCallback(f))
                }
            }, {
                key: "subscribeBars",
                value: function(e, t, i, a, n) {
                    var r = e.name.replace("/", "").toLowerCase();
                    this.ws.kline.sub({
                        api: {
                            symbol: r,
                            period: "" + le[t]
                        }
                    });
                    var o = function(e) {
                        var a = e.ch
                          , n = e.tick;
                        a === "market." + r + ".kline." + le[t] && i({
                            time: 1e3 * n.id,
                            low: n.low,
                            high: n.high,
                            open: n.open,
                            close: n.close,
                            volume: n.amount
                        })
                    };
                    null !== this.nowSub && this.ws.kline.unsub({
                        api: {
                            symbol: this.nowSub.symbol,
                            period: "" + le[this.nowSub.resolution]
                        }
                    }),
                    this.nowSub = {
                        symbol: r,
                        resolution: t
                    },
                    this.ws.connection.info.removeCallback(o),
                    this.ws.connection.info.addCallback(o)
                }
            }, {
                key: "unsubscribeBars",
                value: function(e) {}
            }, {
                key: "getMarks",
                value: function(e, t, i, a, n) {}
            }, {
                key: "getTimeScaleMarks",
                value: function(e, t, i, a, n) {}
            }, {
                key: "getServerTime",
                value: function(e) {}
            }]),
            e
        }()
          , fe = {
            name: "Kline",
            mixins: [p.a],
            props: {
                quoteCoin: {
                    required: !0,
                    type: String
                },
                baseCoin: {
                    required: !0,
                    type: String
                },
                autoInit: {
                    type: Boolean,
                    default: !0
                },
                maskShow: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: u()({}, Object(d.b)({
                symbolData: function(e) {
                    return e.currency.symbolsData
                }
            })),
            watch: {
                baseCoin: function() {
                    this.changeSymbol()
                },
                quoteCoin: function() {
                    this.changeSymbol()
                },
                symbolData: function() {
                    this.createKline()
                }
            },
            mounted: function() {
                var e = this;
                return o()(n.a.mark(function t() {
                    return n.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                window.LANG = {
                                    kline: {
                                        realtime: e.$t("exchange.kline.realtime")
                                    }
                                },
                                e.createKline(),
                                e.$bus.$on("symbol-update", o()(n.a.mark(function t() {
                                    return n.a.wrap(function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                e.changeSymbol();
                                            case 1:
                                            case "end":
                                                return t.stop()
                                            }
                                    }, t, e)
                                })), e),
                                e.$bus.$on("small-chart-set", function() {
                                    e.changeSymbol()
                                });
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t, e)
                }))()
            },
            data: function() {
                var e;
                return {
                    isLoading: !1,
                    symbols: [],
                    timeout: null,
                    timer: null,
                    miniSet: !1,
                    locales: {
                        "zh-CN": "zh",
                        "zh-cn": "zh",
                        "ko-KR": "ko",
                        "ko-kr": "ko",
                        "en-US": "en",
                        "en-us": "en"
                    },
                    period: "15min",
                    interval: 15,
                    chartType: 1,
                    intervalMap: (e = {
                        1: "1min",
                        5: "5min",
                        15: "15min",
                        30: "30min",
                        60: "60min",
                        240: "4hour",
                        D: "1day",
                        "1D": "1day",
                        "5D": "5day",
                        W: "1week",
                        "1W": "1week",
                        "1M": "1mon",
                        "1min": 1,
                        "5min": 5,
                        "15min": 15,
                        "30min": 30,
                        "60min": 60,
                        "4hour": 240,
                        "1day": "D"
                    },
                    J()(e, "1day", "1D"),
                    J()(e, "5day", "5D"),
                    J()(e, "1week", "1W"),
                    J()(e, "1mon", "1M"),
                    e)
                }
            },
            beforeDestroy: function() {
                var e = this;
                return o()(n.a.mark(function t() {
                    return n.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.wsDestroy();
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }, t, e)
                }))()
            },
            methods: {
                changeSymbol: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        var i;
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.isLoading) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (clearTimeout(e.timeout),
                                    e.timeout = setTimeout(function() {
                                        window.tvWidget.remove(),
                                        window.tvWidget = null,
                                        e.createKline()
                                    }, 1500),
                                    !window.tvWidget) {
                                        t.next = 11;
                                        break
                                    }
                                    return i = window.tvWidget._options.symbol.replace("/", "").toLowerCase(),
                                    t.next = 8,
                                    e.$ws.connection.info.send('{"unsub":"market.' + i + ".kline." + e.period + '"}');
                                case 8:
                                    window.tvWidget._options.symbol = e.baseCoin.toUpperCase() + "/" + e.quoteCoin.toUpperCase(),
                                    window.tvWidget.setSymbol(e.baseCoin.toUpperCase() + "/" + e.quoteCoin.toUpperCase(), e.interval),
                                    window.tvWidget.chart().executeActionById("chartReset");
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                },
                createKline: function() {
                    var e = this;
                    this.isLoading = !0;
                    var t = "15min"
                      , i = 1;
                    if (window.localStorage.getItem("hb::tradingview::resolution")) {
                        var a = window.localStorage.getItem("hb::tradingview::resolution").split("|")
                          , n = c()(a, 2);
                        t = n[0],
                        i = n[1]
                    }
                    this.period = t,
                    this.chartType = i,
                    this.interval = this.intervalMap[t];
                    var r = this.$i18n.locale.replace(/\-\w+/gi, "");
                    window.tvWidget = new Z.a({
                        ws: this.$ws.connection.info,
                        base: this.baseCoin,
                        quote: this.quoteCoin,
                        period: this.period,
                        chartType: this.chartType,
                        timezone: "Asia/Seoul",
                        props: {
                            datafeed: new he(this.$ws,this.symbolData),
                            library_path: "/static/web/charting_library/",
                            container_id: "kline-chart",
                            fullscreen: !1,
                            width: "100%",
                            height: 455,
                            overrides: X,
                            studies_overrides: ee,
                            enabled_features: ie,
                            disabled_features: te,
                            custom_css_url: "/static/web/charting_library/static/day.css?r=v.1.0.0"
                        },
                        cssfile: "/static/web/charting_library/static/day.css",
                        themeName: "hb-day",
                        symbols: this.symbolData,
                        lang: r
                    }),
                    window.tvWidget.onChartReady(function() {
                        e.isLoading = !1,
                        window.tvWidget._options.symbol !== e.baseCoin.toUpperCase() + "/" + e.quoteCoin.toUpperCase() && e.changeSymbol(),
                        window.tvWidget.chart().setChartType(parseInt(e.chartType, 10)),
                        Object(E.a)(function() {
                            e.$bus.$emit("big-chart-ready", e.miniSet),
                            e.$bus.$emit("big-chart-set"),
                            e.miniSet = !1
                        }, 300)(),
                        window.tvWidget.chart().onIntervalChanged().subscribe(null, function(t, i) {
                            window.tvWidget.setSymbol(e.baseCoin.toUpperCase() + "/" + e.quoteCoin.toUpperCase(), t),
                            e.period = e.intervalMap[t],
                            e.interval = t,
                            e.$bus.$emit("big-chart-set")
                        }),
                        window.tvWidget.chart().onDataLoaded().subscribe(null, function() {
                            clearTimeout(e.timeout)
                        })
                    })
                },
                wsDestroy: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        var i;
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (window.tvWidget)
                                        try {
                                            i = window.tvWidget._options.symbol.replace("/", "").toLowerCase(),
                                            e.$ws.connection.info.send('{"unsub":"market.' + i + ".kline." + e.period + '"}'),
                                            window.tvWidget.remove(),
                                            window.tvWidget = null
                                        } catch (e) {}
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                }
            }
        }
          , pe = {
            render: function() {
                var e = this.$createElement
                  , t = this._self._c || e;
                return t("div", {
                    staticStyle: {
                        position: "relative",
                        height: "455px"
                    }
                }, [t("div", {
                    attrs: {
                        id: "kline-chart",
                        "growing-ignore": "true"
                    }
                }), this._v(" "), this.maskShow ? t("div", {
                    staticClass: "chartMask",
                    attrs: {
                        id: "chartMask",
                        action: "activeChart"
                    }
                }) : this._e()])
            },
            staticRenderFns: []
        };
        var me = i("VU/8")(fe, pe, !1, function(e) {
            i("Ej60")
        }, "data-v-02de7406", null).exports
          , ge = {
            name: "KlineInfo",
            props: {
                legal: {
                    type: String,
                    default: "krw"
                },
                quoteCoin: {
                    required: !0,
                    type: String
                },
                baseCoin: {
                    required: !0,
                    type: String
                },
                klineInfo: {
                    type: Object,
                    required: !0
                },
                currencyNameList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                locale: {
                    type: String,
                    default: "ko-KR"
                }
            },
            computed: {
                volume24h: function() {
                    var e = this.klineInfo
                      , t = e.amount
                      , i = e.amountPrecision
                      , a = t;
                    return "--" !== t && 0 !== Number(t) || (a = Object(O.c)(0, i)),
                    this.thousandSeparate(a) + " " + this.baseCoin.toUpperCase()
                },
                fontIcon: function() {
                    return "hb-icon-currency-token hb-icon-currency-" + this.baseCoin.toLowerCase()
                },
                rateClass: function() {
                    return {
                        "rate-down": parseFloat(this.klineInfo.rate) < 0,
                        "rate-up": parseFloat(this.klineInfo.rate) > 0
                    }
                },
                rateStr: function() {
                    var e = this.klineInfo.rate
                      , t = parseFloat(this.klineInfo.rate);
                    return t < 0 ? e = "" + this.klineInfo.rate : t > 0 && !this.klineInfo.rate.includes("+") && (e = "+" + this.klineInfo.rate),
                    "string" == typeof e ? e.replace("--", "-") : e
                },
                closeDiffStr: function() {
                    var e = this.klineInfo.closeDiff
                      , t = parseFloat(this.klineInfo.rate);
                    return t < 0 ? e = "" + this.thousandSeparate(this.klineInfo.closeDiff) : t > 0 && !this.klineInfo.closeDiff.includes("+") && (e = "+" + this.thousandSeparate(this.klineInfo.closeDiff)),
                    "string" == typeof e ? e.replace("--", "-") : e
                },
                coinName: function() {
                    var e = this
                      , t = ""
                      , i = !1;
                    return this.currencyNameList.some(function(a) {
                        return a.currency === e.baseCoin && (i = !0,
                        t = a[e.locale.replace("-", "").toLowerCase()],
                        !0)
                    }),
                    i ? t : this.baseCoin.toUpperCase()
                }
            }
        }
          , ve = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("div", [i("ul", {
                    staticClass: "fl kline-info-list"
                }, [i("li", [i("i", {
                    staticClass: "font-currency fl",
                    class: e.fontIcon
                }), e._v(" "), i("div", {
                    staticClass: "coin-name fl"
                }, [i("h2", {
                    staticClass: "seo-tag translate-name"
                }, [e._v(e._s(e.coinName))]), e._v(" "), i("h2", {
                    staticClass: "seo-tag"
                }, [i("strong", [e._v(e._s(e.baseCoin.toUpperCase()))]), e._v("/"), i("span", {
                    staticClass: "quote-coin"
                }, [e._v(e._s(e.quoteCoin.toUpperCase()))])])])]), e._v(" "), i("li", {
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [i("p", [i("span", {
                    staticClass: "recent-price",
                    class: e.rateClass
                }, [e._v(e._s(e._f("thousandSeparate")(e.klineInfo.latestPrice)))]), e._v(" "), "KRW" !== e.quoteCoin.toUpperCase() ? i("span", {
                    staticClass: "sym"
                }, [e._v("\n                    ≈\n                ")]) : e._e(), e._v(" "), "KRW" !== e.quoteCoin.toUpperCase() ? i("span", {
                    staticClass: "equal-krw"
                }, [i("span", [e._v(e._s(e.klineInfo.latestPriceToLegal))]), e._v(" KRW\n                ")]) : e._e()]), e._v(" "), i("p", [i("span", [e._v("\n                    " + e._s(e.$t("exchange.kline.last_day")) + "  \n                ")]), e._v(" "), i("span", {
                    class: e.rateClass
                }, [e._v("\n                    " + e._s(e.rateStr) + "%  \n                ")]), e._v(" "), i("span", {
                    class: e.rateClass
                }, [e._v("\n                    " + e._s(e.closeDiffStr) + "\n                ")])])])]), e._v(" "), i("ul", {
                    staticClass: "fr kline-info-list info-right",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [i("li", [i("p", [e._v(e._s(e.$t("exchange.kline.maxprice_24H")))]), e._v(" "), i("p", [i("b", [i("span", {
                    staticClass: "rate-color rate-up"
                }, [e._v("\n                " + e._s(e._f("thousandSeparate")(e.klineInfo.high)) + "\n            ")])])])]), e._v(" "), i("li", [i("p", [e._v(e._s(e.$t("exchange.kline.minprice_24H")))]), e._v(" "), i("p", [i("b", [i("span", {
                    staticClass: "rate-color rate-down"
                }, [e._v("\n                " + e._s(e._f("thousandSeparate")(e.klineInfo.low)) + "\n            ")])])])]), e._v(" "), i("li", [i("p", [e._v(e._s(e.$t("exchange.kline.trade_24H")))]), e._v(" "), i("p", [i("strong", [e._v("\n                    " + e._s(e.volume24h) + "\n                ")])])])])])
            },
            staticRenderFns: []
        };
        var _e = i("VU/8")(ge, ve, !1, function(e) {
            i("Ux0R")
        }, "data-v-5a075048", null).exports
          , be = function(e, t) {
            var i, a;
            (i = HTMLCanvasElement.prototype).getContext = (a = i.getContext,
            function(e) {
                var t = a.call(this, e);
                return "2d" === e && (t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1,
                window.devicePixelRatio),
                t
            }
            );
            var n = {
                "hb-night": {
                    bidsLineColor: t && t.bidsLineColor || "rgba(211, 72, 77, 0)",
                    asksLineColor: t && t.asksLineColor || "rgba(56, 191, 133, 0)",
                    bidsFillColor: t && t.bidsLineColor || "rgba(182, 49, 55, .8)",
                    asksFillColor: t && t.asksLineColor || "rgba(61, 89, 150, .9)",
                    axisColor: t && t.axisColor || "rgba(129, 136, 170, .3)",
                    color: t && t.color || "#838c97",
                    bgColor: "#FCFCFC",
                    dotColor: "rgba(26, 149, 217, 1)",
                    tipColor: "#1C2025"
                },
                "hb-day": {
                    bidsLineColor: t && t.bidsLineColor || "rgba(3, 192, 135, 0)",
                    asksLineColor: t && t.asksLineColor || "rgba(231, 109, 66, 0)",
                    bidsFillColor: t && t.bidsLineColor || "rgba(3, 192, 135, .1)",
                    asksFillColor: t && t.asksLineColor || "rgba(231, 109, 66, .1)",
                    axisColor: t && t.axisColor || "rgba(180, 188, 227, .3)",
                    color: t && t.color || "#232A4A",
                    bgColor: "#ffffff",
                    dotColor: "rgba(21, 180, 241, 1)",
                    tipColor: "#61688A"
                }
            }
              , r = {
                theme: t && t.theme || "hb-night",
                ruleHeight: t && t.ruleHeight || 30,
                ruleWidth: t && t.ruleWidth || 50,
                priceFix: t && t.priceFix || 2,
                amountFix: t && t.amountFix || 0,
                paddingTop: t && t.paddingTop || 15,
                noAmountTick: t && t.noAmountTick || 500,
                lang: t && t.lang || "en-us"
            };
            function o(e) {
                var t = e || r.theme;
                ne()(n["hb-day"]).forEach(function(e) {
                    r[e] = n[t][e]
                })
            }
            o();
            var s, c = {
                "zh-cn": {
                    "委托价": "委托价",
                    "累计": "累计"
                },
                "zh-hk": {
                    "委托价": "委託價",
                    "累计": "累計"
                },
                "en-us": {
                    "委托价": "Price",
                    "累计": "Sum"
                },
                "de-de": {
                    "委托价": "Preis",
                    "累计": "Total"
                },
                "ru-ru": {
                    "委托价": "Цена",
                    "累计": "Объём"
                },
                "ja-jp": {
                    "委托价": "価格",
                    "累计": "累計"
                },
                "ko-kr": {
                    "委托价": "위탁단가",
                    "累计": "누적량"
                },
                "fr-fr": {
                    "委托价": "Prix",
                    "累计": "Somme"
                },
                "es-es": {
                    "委托价": "Precio",
                    "累计": "Suma"
                }
            }, l = [], u = [], d = 0, h = "string" == typeof e ? document.querySelector("#" + e.replace("#", "")) : e || document.querySelector("#chart"), f = document.createElement("canvas"), p = h.offsetWidth - 2, m = h.offsetHeight - 2, g = document.createElement("canvas"), v = !0, _ = f.getContext("2d"), b = g.getContext("2d"), y = (s = _,
            (window.devicePixelRatio || 1) / (s.backingStorePixelRatio || s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1));
            f.width = g.width = p * y,
            f.height = g.height = m * y,
            f.style.width = g.style.width = p + "px",
            f.style.height = g.style.height = m + "px",
            f.style.position = g.style.position = "absolute",
            h.style.position = "relative",
            h.appendChild(f),
            h.appendChild(g);
            var w = p - r.ruleWidth
              , C = m - r.ruleHeight
              , x = ~~(m * r.paddingTop / 100)
              , k = x * y
              , S = C - x
              , T = S * y
              , P = w * y
              , L = C * y;
            function D(e, t, i) {
                return e = A(e, i),
                i && console.log("cutFixed", e),
                t ? function(e, t, i) {
                    var a, e = 1 * e, t = t || 0, n = A(e).toString().split(".");
                    return n.length < 2 ? n[1] = Math.pow(10, t).toString().substring(1, t + 1) : (a = A(n[1]).toString().length,
                    n[1] = (A(A(n[1]) / Math.pow(10, a)).toString() + "00000000000000").substring(2, t + 2)),
                    n
                }(e, t).join(".") : Math.floor(e)
            }
            function A(e, t) {
                if (t && console.log("scientific2float", e),
                void 0 !== e) {
                    for (var i = "string" == typeof e ? e.toLowerCase().replace(/\s/g, "") : e.toString().toLowerCase().replace(/\s/g, ""), a = "", n = void 0, r = void 0, o = void 0, s = void 0, c = void 0, l = void 0, u = 0; u < 100; u++)
                        a += "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
                    return /e/.test(i) ? (i.replace("+", ""),
                    /e\-/.test(i) ? l = 1 : i.replace("e", "e+"),
                    r = /\+/.test(i),
                    o = i.split("e"),
                    n = /\-/.test(o[0].toString()) ? "-0." : "0.",
                    o[0] = l ? o[0].replace("-", "") : o[0],
                    s = o[0].split(".")[1] ? o[0].split(".")[1].length : 0,
                    c = o[1].split(r ? "+" : "-")[1],
                    o = o[0].replace(".", ""),
                    r ? o + a.substring(0, c - s) : n + a.substring(0, c - 1) + o) : i
                }
            }
            function M(e, t, i, a, n) {
                t = t || 0;
                var r = 1 * e < 0 ? -1 : 1
                  , o = function(e, t, i) {
                    for (var a = i.length, n = void 0, r = [e, ""]; a--; )
                        if (e / (n = Math.pow(t, a + 1)) > 1) {
                            r = [e / n, i[a], 1];
                            break
                        }
                    return r
                }(e = Math.abs(1 * e), i = i || 1e4, a = a || {
                    1000: ["K", "M", "B"],
                    10000: ["万", "亿", "兆"]
                }[i]);
                return o = n && 1 * (o[0] * r + o[1]) == o[0] * r * 1 ? Object(O.d)(o[0] * r) : Object(O.d)(D(o[0] * r, t)) + o[1]
            }
            function F(e, t, i) {
                CanvasRenderingContext2D.prototype.roundRect = function(e, t, i, a, n) {
                    var r = Math.min(i, a);
                    return n > r / 2 && (n = r / 2),
                    this.beginPath(),
                    this.moveTo(e + n, t),
                    this.arcTo(e + i, t, e + i, t + a, n),
                    this.arcTo(e + i, t + a, e, t + a, n),
                    this.arcTo(e, t + a, e, t, n),
                    this.arcTo(e, t, e + i, t, n),
                    this.closePath(),
                    this
                }
                ;
                var a = 190 * y
                  , n = 80 * y
                  , o = 18 * y;
                b.shadowBlur = 16 * y,
                b.shadowOffsetY = 8 * y;
                var s = e - a > b.shadowBlur ? e - a : b.shadowBlur
                  , d = t - n - o > b.shadowBlur ? t - n - o : t + o
                  , h = q()
                  , f = h.pTick * e + h.pMin
                  , p = function(e, t) {
                    if ("bids" === t) {
                        var i = u.map(function(t) {
                            return Math.abs(t[0] - e)
                        });
                        return u[i.indexOf(Math.min.apply(null, i))][1]
                    }
                    var a = l.map(function(t) {
                        return Math.abs(t[0] - e)
                    });
                    return l[a.indexOf(Math.min.apply(null, a))][1]
                }(f, i);
                b.shadowColor = "rgba(0,0,0,.11)",
                b.fillStyle = r.bgColor,
                b.roundRect(s, d, a, n, 3 * y),
                b.fill(),
                b.shadowBlur = 0,
                b.shadowOffsetY = 0,
                b.fillStyle = r.tipColor,
                b.font = 12 * y + "px Arial",
                b.fillText(c[r.lang]["委托价"], s + 16 * y, d + 30 * y),
                b.fillText(Object(O.d)(f.toFixed(r.priceFix)), s + 72 * y, d + 30 * y),
                b.fillText(c[r.lang]["累计"], s + 16 * y, d + 56 * y),
                b.fillText(Object(O.d)(p.toFixed(r.amountFix)), s + 72 * y, d + 56 * y),
                function(e, t, i) {
                    b.beginPath(),
                    b.arc(e, t, 10 * y, 0, 2 * Math.PI),
                    b.closePath(),
                    b.fillStyle = r.dotColor.replace("1)", ".3)"),
                    b.fill(),
                    b.beginPath(),
                    b.arc(e, t, 5 * y, 0, 2 * Math.PI),
                    b.closePath(),
                    b.fillStyle = r.dotColor,
                    b.fill()
                }(e, t)
            }
            function R() {
                _.strokeStyle = r.axisColor,
                _.lineWidth = ~~(1.5 * y),
                _.beginPath(),
                _.moveTo(W(0), W(L)),
                _.lineTo(W(P), W(L)),
                _.lineTo(W(P), W(0)),
                _.stroke(),
                _.closePath()
            }
            function $() {
                _.strokeStyle = r.bidsLineColor,
                _.lineWidth = ~~(1.5 * y),
                _.beginPath();
                for (var e = u.sort(function(e, t) {
                    return e[0] - t[0]
                }), t = P / e.length / 2, i = 0; i < e.length; i++)
                    0 === i && _.moveTo(W(i * t), W(N(e[i][1]))),
                    _.lineTo(W(i * t), W(N(e[i][1]))),
                    i === e.length - 1 && _.lineTo(W(i * t), W(L - y));
                _.stroke(),
                _.lineTo(W(0), W(L)),
                _.lineTo(W(0), W(0)),
                _.closePath(),
                _.fillStyle = r.bidsFillColor,
                _.fill()
            }
            function I() {
                _.strokeStyle = r.asksLineColor,
                _.beginPath();
                for (var e = l.sort(function(e, t) {
                    return e[0] - t[0]
                }), t = P / e.length / 2, i = P / 2 + 2 * y, a = 0; a < e.length; a++)
                    0 === a && _.lineTo(W(i), W(L - y)),
                    _.lineTo(W(a * t + i), W(N(e[a][1]))),
                    a === e.length - 1 && _.lineTo(W(P), W(N(e[a][1])));
                _.stroke(),
                _.lineTo(W(P), W(L - y)),
                _.lineTo(W(i), W(L - y)),
                _.closePath(),
                _.fillStyle = r.asksFillColor,
                _.fill()
            }
            function E() {
                for (var e = 40 * y, t = 1 + ~~(C / 100), i = (P - 2 * e) / (~~(w / 100) - 1), a = (L - 20 * y * 2) / t, n = [], o = [], s = [], c = [], l = 0, u = [], h = [], f = q(), p = e; p < P; p += i)
                    n.push(p),
                    o.push(f.pMin + p * f.pTick);
                for (var m = L - y; m > 0; m -= a)
                    s.push(m),
                    c.push((L - y - m) * f.aTick);
                c.forEach(function(e, t) {
                    l += e,
                    u.push(r.noAmountTick * t),
                    h.push(t)
                }),
                d < 5 && 0 !== l && (c = h,
                d = (T - a * t - 1) / a + 5),
                0 === l && (c = u),
                c[0] = 0,
                j(n, o, "x"),
                j(s, c, "y")
            }
            function j(e, t, i) {
                _.lineWidth = ~~(1.5 * y),
                _.strokeStyle = r.axisColor,
                _.font = 12 * y + "px Arial",
                _.fillStyle = r.color,
                _.textAlign = "x" === i ? "center" : "left";
                var a = y;
                "x" === i ? e.forEach(function(e, i) {
                    _.beginPath(),
                    _.lineTo(W(e), L + a),
                    _.lineTo(W(e), (C + 4) * y + a),
                    _.stroke(),
                    _.closePath(),
                    _.fillText(Object(O.d)(t[i].toFixed(r.priceFix)), W(e), (C + 20) * y + a)
                }) : e.forEach(function(e, i) {
                    var n = t[i] <= 1e3 ? Object(O.d)(t[i].toFixed(0)) : M(t[i], 2, 1e3);
                    _.beginPath(),
                    _.lineTo(P + a, W(e + a)),
                    _.lineTo((w + 4) * y + a, W(e + a)),
                    _.stroke(),
                    _.fillText(n, (w + 8) * y + a, W(e + 4 * y)),
                    _.closePath()
                })
            }
            function W(e) {
                return .5 + ~~e
            }
            function N(e) {
                if (0 === e)
                    return L - y;
                var t = T - T * e / d + k;
                return t - L < ~~(_.lineWidth * y) ? t - ~~(_.lineWidth * y) : t
            }
            function B(e) {
                e.clearRect(0, 0, p * y, m * y)
            }
            function q() {
                var e = u[0] && u[0][0] || 0
                  , t = l[l.length - 1] && l[l.length - 1][0] || 0;
                return {
                    pMin: 1 * e,
                    pMax: 1 * t,
                    pTick: (t - e) / P,
                    aTick: d / T
                }
            }
            function U() {
                B(_),
                R(),
                E(),
                $(),
                I()
            }
            return g.addEventListener("mousemove", function(e) {
                var t = function(e) {
                    var t = f.getBoundingClientRect();
                    return {
                        x: (e.clientX - t.left) * y,
                        y: (e.clientY - t.top) * y
                    }
                }(e);
                v && function(e, t, i) {
                    if (B(b),
                    v = !1,
                    e > P - y)
                        v = !0;
                    else {
                        for (var a = _.getImageData(e, 0, 1, L - 1 * y), n = 0; n < a.height; n++) {
                            var r = a.data[4 * n * a.width]
                              , o = a.data[4 * n * a.width + 1];
                            if (r || o)
                                return F(e, n, o > 80 ? "asks" : "bids"),
                                void (v = !0)
                        }
                        v = !0
                    }
                }(t.x, t.y)
            }, !1),
            g.addEventListener("mouseout", function(e) {
                setTimeout(function() {
                    return B(b)
                }, 500)
            }, !1),
            {
                update: U,
                putData: function(e) {
                    var t, i;
                    B(_),
                    function(e) {
                        if (e.asks) {
                            var t = []
                              , i = [];
                            e.asks.forEach(function(e, i) {
                                var a = [];
                                a.push(e[0]),
                                i - 1 > -1 ? a.push(1 * e[1] + 1 * t[i - 1][1]) : a.push(e[1]),
                                t.push(a)
                            });
                            var a = t[t.length - 1] ? t[t.length - 1][1] : 0;
                            e.bids.forEach(function(e, t) {
                                var a = [];
                                a.push(e[0]),
                                t - 1 > -1 ? a.push(1 * e[1] + 1 * i[t - 1][1]) : a.push(e[1]),
                                i.push(a)
                            });
                            var n = i[i.length - 1] ? i[i.length - 1][1] : 0;
                            d = Math.max(n, a),
                            l = t,
                            u = i.reverse()
                        }
                    }(e),
                    t = d <= 1e3 ? d.toFixed(0) : M(d, 2, 1e3),
                    i = 10 * (t.toString().length + 1),
                    r.ruleWidth = i < 50 ? 50 : 10 * (t.toString().length + 1),
                    w = p - r.ruleWidth,
                    P = w * y,
                    R(),
                    E(),
                    $(),
                    I()
                },
                forceUpdate: function() {
                    p = h.offsetWidth - 2,
                    m = h.offsetHeight - 2,
                    f.width = g.width = p * y,
                    f.height = g.height = m * y,
                    w = p - r.ruleWidth,
                    C = m - r.ruleHeight,
                    x = ~~(m * r.paddingTop / 100),
                    k = x * y,
                    T = (S = C - x) * y,
                    P = w * y,
                    L = C * y,
                    v = !0,
                    B(b),
                    U()
                },
                initTheme: o
            }
        }
          , ye = {
            name: "DepthChart",
            mixins: [p.a],
            computed: u()({}, Object(d.b)({
                symbolsDataObj: function(e) {
                    return e.currency.symbolsDataObj
                },
                exchange: function(e) {
                    return e.exchange
                }
            })),
            props: {
                baseCoin: {
                    type: String,
                    required: !0
                },
                quoteCoin: {
                    type: String,
                    required: !0
                },
                deepData: {
                    type: [Object, Array],
                    required: !0
                }
            },
            watch: {
                deepData: {
                    handler: function(e) {
                        this.depthChart = null,
                        this.initDepth(e)
                    }
                }
            },
            data: function() {
                return {
                    locales: {
                        "zh-CN": "zh-cn",
                        "ko-KR": "ko-kr",
                        "en-US": "en-us"
                    },
                    depthChart: null
                }
            },
            components: {
                Card: _
            },
            mounted: function() {
                this.initDepth()
            },
            methods: {
                initDepth: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , i = document.querySelector("#depth_chart");
                    if (i) {
                        var a = this.locales[this.$i18n.locale];
                        this.depthChart || (i.innerHTML = "",
                        this.depthChart = be("depth_chart", {
                            priceFix: this.precise.tradePrice || 8,
                            amountFix: this.precise.tradeAmount || 8,
                            lang: a,
                            theme: "hb-night"
                        }),
                        this.depthChart.initTheme(),
                        window.addEventListener("resize", function() {
                            return e.depthChart && e.depthChart.forceUpdate()
                        }, !1)),
                        this.depthChart.putData(t)
                    }
                }
            }
        }
          , we = {
            render: function() {
                var e = this.$createElement
                  , t = this._self._c || e;
                return t("Card", {
                    staticClass: "depth"
                }, [t("h2", {
                    staticClass: "seo-tag",
                    attrs: {
                        slot: "header",
                        id: "v-step-deep"
                    },
                    slot: "header"
                }, [this._v("\n        " + this._s(this.$t("exchange.deep_chart.deep")) + "\n    ")]), this._v(" "), t("div", {
                    staticClass: "market_depth_chart hb-night bottom-radius card-body card-width",
                    staticStyle: {
                        height: "340px"
                    },
                    attrs: {
                        slot: "cardBody",
                        id: "depth_chart"
                    },
                    slot: "cardBody"
                })])
            },
            staticRenderFns: []
        };
        var Ce = i("VU/8")(ye, we, !1, function(e) {
            i("rq46")
        }, "data-v-ef01b99e", null).exports
          , xe = {
            name: "CoinIntro",
            mixins: [p.a],
            props: {
                coin: {
                    required: !0,
                    type: String
                }
            },
            watch: {
                "$props.coin": {
                    handler: function() {
                        this.getIntro()
                    },
                    deep: !0
                },
                $locale: function() {
                    this.getIntro()
                }
            },
            data: function() {
                return {
                    detail: {},
                    coinIntroI18n: this.$t("exchange.coin_intro")
                }
            },
            components: {
                Card: _
            },
            computed: {
                fontIcon: function() {
                    return "hb-icon-currency-token hb-icon-currency-" + this.coin.toLowerCase()
                }
            },
            mounted: function() {
                this.lang = this.$store.state.locale,
                this.coin && this.getIntro()
            },
            methods: {
                gotoCoinDetail: function() {
                    this.pushState("/introduction/" + this.coin + "/")
                },
                getIntro: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        var i, a;
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return i = {
                                        currency: e.coin
                                    },
                                    t.next = 3,
                                    m.g.getCoinIntro(i);
                                case 3:
                                    (a = t.sent) && a.success && a.data && (e.detail = a.data,
                                    e.detail.publishTime = e.detail.publishTime,
                                    e.detail.block = e.detail.blockQuery ? e.detail.blockQuery.toLowerCase().replace(/javascript:/g, "") : "",
                                    e.detail.wp = e.detail.whitePaper ? e.detail.whitePaper.toLowerCase().replace(/javascript:/g, "") : "",
                                    e.detail.ow = e.detail.officialWebsite ? e.detail.officialWebsite.toLowerCase().replace(/javascript:/g, "") : "");
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                }
            }
        }
          , ke = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("Card", {
                    staticClass: "coin-intro",
                    attrs: {
                        toggle: !0
                    }
                }, [i("h2", {
                    staticClass: "seo-tag display-inline-block",
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [e._v("\n        " + e._s(e.coinIntroI18n.coin_intro) + "\n    ")]), e._v(" "), i("a", {
                    staticClass: "more",
                    attrs: {
                        slot: "header"
                    },
                    on: {
                        click: e.gotoCoinDetail
                    },
                    slot: "header"
                }, [e._v("\n        " + e._s(e.coinIntroI18n.learn_more) + "\n        "), i("i", {
                    staticClass: "el-icon-arrow-right"
                })]), e._v(" "), i("div", {
                    attrs: {
                        slot: "cardBody"
                    },
                    slot: "cardBody"
                }, [i("el-row", [i("el-col", {
                    attrs: {
                        span: 12
                    }
                }, [i("div", {
                    staticClass: "coin-name fl"
                }, [i("i", {
                    staticClass: "fz48 fl mr15 mt5",
                    class: e.fontIcon
                }), e._v(" "), i("div", {
                    staticClass: "fl"
                }, [i("div", {
                    staticClass: "h3"
                }, [e._v(e._s(e.coin.toUpperCase()))]), e._v(" "), i("p", [e._v(e._s(e.detail.fullName))])])]), e._v(" "), i("div", {
                    staticClass: "coin-text clearfix"
                }, [i("p", [e._v(e._s(e.detail.summary))])])]), e._v(" "), i("el-col", {
                    attrs: {
                        span: 12
                    }
                }, [i("ul", {
                    staticClass: "coin-detail"
                }, [i("li", [i("h3", [e._v("\n                            " + e._s(e.coinIntroI18n.publish_time) + "\n                        ")]), e._v(" "), i("p", [e._v(e._s(e.detail.publishTime))])]), e._v(" "), i("li", [i("h3", [e._v("\n                            " + e._s(e.coinIntroI18n.publish_volume) + "\n                        ")]), e._v(" "), i("p", [e._v(e._s(e.detail.publishVolume))])]), e._v(" "), i("li", [i("h3", [e._v("\n                            " + e._s(e.coinIntroI18n.trade_volume) + "\n                        ")]), e._v(" "), i("p", [e._v(e._s(e.detail.circulateVolume))])]), e._v(" "), i("li", [i("h3", [e._v("\n                            " + e._s(e.coinIntroI18n.fund_price) + "\n                        ")]), e._v(" "), i("p", [e._v(e._s(e.detail.crowdfundingPrice))])]), e._v(" "), i("li", [i("h3", [e._v("\n                            " + e._s(e.coinIntroI18n.white_paper) + "\n                        ")]), e._v(" "), i("p", {
                    domProps: {
                        innerHTML: e._s(e.detail.whitePaper)
                    }
                })]), e._v(" "), i("li", [i("h3", [e._v("\n                            " + e._s(e.coinIntroI18n.official_site) + "\n                        ")]), e._v(" "), i("p", {
                    domProps: {
                        innerHTML: e._s(e.detail.officialWebsite)
                    }
                })]), e._v(" "), i("li", [i("h3", [e._v("\n                            " + e._s(e.coinIntroI18n.block_search) + "\n                        ")]), e._v(" "), i("p", {
                    domProps: {
                        innerHTML: e._s(e.detail.blockQuery)
                    }
                })])])])], 1)], 1)])
            },
            staticRenderFns: []
        };
        var Se = i("VU/8")(xe, ke, !1, function(e) {
            i("kraq")
        }, "data-v-1534f5e0", null).exports
          , Te = i("MICi")
          , Pe = i.n(Te)
          , Le = i("TIfe")
          , De = {
            name: "BuyForm",
            mixins: [p.a],
            props: {
                type: {
                    type: String,
                    default: "limit"
                },
                theme: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                dir: {
                    type: String,
                    default: "buy"
                },
                basePrice: {
                    type: String,
                    required: !0
                },
                tradePrecise: {
                    type: Object,
                    required: !0
                },
                proCoinrates: {
                    type: Object,
                    required: !0
                },
                baseCoin: {
                    type: String,
                    required: !0
                },
                quoteCoin: {
                    type: String,
                    required: !0
                },
                closePrice: {
                    type: String,
                    required: !0
                },
                isPrime: {
                    type: Boolean,
                    default: !1
                },
                inPrimeWhiteList: {
                    type: Boolean,
                    required: !0
                },
                isPrimeVip: {
                    type: Boolean,
                    required: !0
                }
            },
            computed: u()({
                symbol: function() {
                    return this.baseCoin + this.quoteCoin
                }
            }, Object(d.b)({
                proRates: function(e) {
                    return e.currency.proRates
                },
                accountId: function(e) {
                    return e.uc.accountId
                },
                balanceList: function(e) {
                    return e.balances.balance
                },
                primeState: function(e) {
                    return e.prime.primeState
                },
                primeQuote: function(e) {
                    return e.prime.primeQuote
                },
                primeAveragePosition: function(e) {
                    return e.prime.primeAveragePosition
                },
                symbolsDataObj: function(e) {
                    return e.currency.symbolsDataObj
                }
            }), {
                submitButtonDisable: function() {
                    var e = !this.inPrimeWhiteList && this.isPrime && "trade" !== this.primeState;
                    return !this.accountId || !this.isLogin || this.disableSubmit || e
                },
                limitSliderDisable: function() {
                    if ("buy" === this.dir) {
                        var e = 0 === parseFloat(this.limitData.price) || 0 === this.availAssets || 0 === parseFloat(Object(O.c)(Object(I.a)(this.availAssets, this.limitData.price), this.tradePrecise.tradeAmount));
                        return this.limitSliderClass = e ? "disabled" : "",
                        e
                    }
                    var t = 0 === parseFloat(this.availAssets) || 0 === parseFloat(Object(O.c)(this.availAssets, this.tradePrecise.tradeAmount));
                    return this.limitSliderClass = t ? "disabled" : "",
                    t
                },
                marketSliderDisable: function() {
                    if ("buy" === this.dir) {
                        var e = !this.isLogin || 0 === parseFloat(Object(O.c)(this.availAssets, this.tradePrecise.tradeTotal));
                        return this.marketSliderClass = e ? "disabled" : "",
                        e
                    }
                    var t = !this.isLogin || 0 === parseFloat(Object(O.c)(this.availAssets, this.tradePrecise.tradeAmount));
                    return this.marketSliderClass = t ? "disabled" : "",
                    t
                },
                buttonText: function() {
                    var e = this.$locale;
                    return "buy" === this.dir ? /cn/i.test(e) ? "" + this.$t("exchange.trade_panel.buyin") + this.baseCoin.toUpperCase() : /en/i.test(e) ? this.$t("exchange.trade_panel.buyin").toUpperCase() + " " + this.baseCoin.toUpperCase() : this.baseCoin.toUpperCase() + " " + this.$t("exchange.trade_panel.buyin") : /cn/i.test(e) ? "" + this.$t("exchange.trade_panel.sellout") + this.baseCoin.toUpperCase() : /en/i.test(e) ? this.$t("exchange.trade_panel.sellout").toUpperCase() + " " + this.baseCoin.toUpperCase() : this.baseCoin.toUpperCase() + " " + this.$t("exchange.trade_panel.sellout")
                },
                orderType: function() {
                    var e = {
                        limit: "limit_price_order",
                        market: "market_price_order",
                        stop: "stop_order"
                    }[this.type] || "";
                    return this.$t("exchange.trade_panel." + e)
                },
                currentPrice: function() {
                    return parseFloat(this.closePrice.replace(/,/g, ""))
                },
                stopLimitMoreAddress: function() {
                    return "https://support.huobi.co.kr/hc/" + {
                        "ko-kr": "ko",
                        "zh-cn": "zh-cn",
                        "en-us": "en-us"
                    }[this.$locale.toLowerCase()] + "/articles/360024620911"
                },
                primeUserLimit: function() {
                    return parseFloat(this.primeAveragePosition.limit) || 0
                },
                primeOrderLimit: function() {
                    return parseFloat(this.primeAveragePosition.max_limit) || 0
                },
                thousandTotal: function() {
                    var e = this.primeOrderLimit;
                    return this.thousandSeparate(e) || "--"
                }
            }),
            watch: {
                tradePrecise: {
                    handler: function() {
                        this.setOneUnit()
                    },
                    deep: !0
                },
                basePrice: {
                    handler: function(e) {
                        this.limitData.price = e,
                        this.calculateConvertKrw(e)
                    }
                },
                balanceList: {
                    deep: !0,
                    handler: function(e) {
                        this.calculateAllAssets()
                    }
                },
                proRates: {
                    deep: !0,
                    handler: function() {
                        this.calculateConvertKrw(this.limitData.price),
                        this.calculateAllTradePrice(this.limitData.price)
                    }
                },
                baseCoin: {
                    handler: function() {
                        this.chargeLink = "buy" === this.dir ? "/legal/exchange?coin=" + this.quoteCoin + "&tab=recharge" : "/legal/exchange?coin=" + this.baseCoin + "&tab=recharge"
                    }
                },
                "limitData.price": {
                    deep: !0,
                    immediate: !0,
                    handler: function(e) {
                        this.price = Object(O.d)(e) + (/\.$/.test("" + this.price) ? "." : "")
                    }
                },
                "limitData.triggerPrice": {
                    deep: !0,
                    immediate: !0,
                    handler: function(e) {
                        this.triggerPrice = Object(O.d)(e) + (/\.$/.test("" + this.triggerPrice) ? "." : "")
                    }
                },
                "limitData.amount": {
                    deep: !0,
                    immediate: !0,
                    handler: function(e) {
                        this.lAmount = Object(O.d)(e) + (/\.$/.test("" + this.lAmount) ? "." : "")
                    }
                },
                "marketData.value": {
                    deep: !0,
                    immediate: !0,
                    handler: function(e) {
                        this.mAmount = Object(O.d)(e) + (/\.$/.test("" + this.mAmount) ? "." : "")
                    }
                },
                symbol: function() {
                    this.limitData.triggerPrice = 0
                },
                primeState: function(e, t) {
                    "trade" === t && (this.amountMarketTootipShow = !1)
                }
            },
            data: function() {
                return {
                    prefix: "buy-form",
                    marketPlaceHolder: "buy" === this.dir ? this.$t("exchange.trade.buy_atmarket") : this.$t("exchange.trade.sell_atmarket"),
                    oneUnit: "",
                    amountOneUnit: "",
                    marketOneUnit: "",
                    limitData: {
                        price: "",
                        triggerPrice: "",
                        amount: ""
                    },
                    marketData: {
                        value: ""
                    },
                    allTradePrice: 0,
                    marketSliderClass: "",
                    limitSliderClass: "",
                    amountPrice: "0.00",
                    stopAmountPrice: 0,
                    allTradePriceKrw: "0.00",
                    allAssetsKrw: 0,
                    availAssets: 0,
                    slideValue: 0,
                    slideMarketValue: 0,
                    priceTootipShow: !1,
                    triggerPriceTootipShow: !1,
                    amountTootipShow: !1,
                    priceTootipText: "",
                    triggerPriceTootipText: "",
                    amountTootipText: "",
                    amountMarketTootipShow: !1,
                    amountMarketTootipText: "",
                    disableSubmit: !1,
                    chargeLink: "buy" === this.dir ? "/legal/exchange?coin=" + this.quoteCoin + "&tab=recharge" : "/legal/exchange?coin=" + this.baseCoin + "&tab=recharge",
                    price: "",
                    triggerPrice: "",
                    lAmount: "",
                    mAmount: "",
                    dropdownList: [{
                        text: "limit_price_order",
                        command: "limit"
                    }, {
                        text: "market_price_order",
                        command: "market"
                    }, {
                        text: "stop_order",
                        command: "stop"
                    }]
                }
            },
            mounted: function() {
                var e = this;
                this.limitData.price = this.basePrice,
                this.tradePrecise && this.tradePrecise.tradePrice && this.setOneUnit(),
                this.$bus.$on("exchange:change-trade-price", function(t) {
                    var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (e.priceTootipShow = !1,
                    e.limitData.price = t,
                    i) {
                        var a = e.$refs.priceInput;
                        a && (a.classList.add("active"),
                        setTimeout(function() {
                            a.classList.remove("active")
                        }, 500))
                    }
                    e.calculateAllTradePrice(),
                    e.calculateConvertKrw()
                }, this);
                var t = this;
                this.$bus.$on("exchange:symbol-update", function(i) {
                    var a = i.baseCoin
                      , n = i.quoteCoin;
                    i.symbolData;
                    e.$nextTick(function() {
                        e.amountTootipShow = !1,
                        e.amountMarketTootipShow = !1,
                        e.priceTootipShow = !1,
                        e.triggerPriceTootipShow = !1,
                        e.limitData.triggerPrice = "",
                        e.limitData.price = "",
                        e.limitData.amount = "",
                        e.marketData.value = "",
                        e.slideValue = 0,
                        e.slideMarketValue = 0,
                        e.allTradePrice = 0,
                        e.allTradePriceKrw = "0.00",
                        "buy" === t.dir ? t.calculateAllAssets(n) : "sell" === t.dir && t.calculateAllAssets(a),
                        e.setOneUnit()
                    })
                }, this)
            },
            methods: {
                changeType: function(e) {
                    this.$emit("change", e),
                    "limit" !== e && "stop" !== e || (this.limitData.triggerPrice = "",
                    this.limitData.amount = "",
                    this.setLimitPercent(0),
                    this.allTradePrice = 0,
                    this.allTradePriceKrw = 0)
                },
                calculateUnit: function(e) {
                    if (0 === Number(e))
                        return 1;
                    for (var t = "0.", i = 0; i < e - 1; i += 1)
                        t += "0";
                    return t += "1"
                },
                setOneUnit: function() {
                    var e = this.tradePrecise
                      , t = e.tradePrice
                      , i = e.tradeAmount
                      , a = e.tradeTotal;
                    this.oneUnit = this.calculateUnit(t),
                    this.amountOneUnit = this.calculateUnit(i),
                    "buy" === this.dir ? this.marketOneUnit = this.calculateUnit(a) : this.marketOneUnit = this.calculateUnit(i)
                },
                submit: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        var i, a, r, o, s, c, l;
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.submitButtonDisable) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    i = e.limitData,
                                    a = i.price,
                                    r = i.amount,
                                    o = i.triggerPrice,
                                    o = String(o),
                                    s = /,|\D+$/g,
                                    c = {},
                                    l = "",
                                    e.disableSubmit = !0,
                                    t.t0 = e.type,
                                    t.next = "limit" === t.t0 ? 11 : "market" === t.t0 ? 15 : "stop" === t.t0 ? 19 : 21;
                                    break;
                                case 11:
                                    return c = {
                                        dir: e.dir,
                                        tradeType: e.dir + "-" + e.type,
                                        type: e.type,
                                        price: ("" + a).replace(s, ""),
                                        amount: ("" + r).replace(s, ""),
                                        allTradePrice: ("" + e.allTradePrice).replace(s, "")
                                    },
                                    l = "buy" === e.dir ? "Buy_" : "Sell_",
                                    e.ga("send", "event", "HuobiKr_PC", "Exchange", "" + l + e.baseCoin.toUpperCase()),
                                    t.abrupt("break", 22);
                                case 15:
                                    return c = {
                                        dir: e.dir,
                                        tradeType: e.dir + "-" + e.type,
                                        type: e.type,
                                        amount: ("" + e.marketData.value).replace(s, "")
                                    },
                                    l = "buy" === e.dir ? "Market_Buy_" : "Market_Sell_",
                                    e.ga("send", "event", "HuobiKr_PC", "Exchange", "" + l + e.baseCoin.toUpperCase()),
                                    t.abrupt("break", 22);
                                case 19:
                                    return c = {
                                        dir: e.dir,
                                        tradeType: e.dir + "-stop-limit",
                                        type: e.type,
                                        triggerPrice: "" + o.replace(s, ""),
                                        price: ("" + a).replace(s, ""),
                                        amount: ("" + r).replace(s, ""),
                                        allTradePrice: ("" + e.allTradePrice).replace(s, ""),
                                        operator: parseFloat(o) > parseFloat(e.currentPrice) ? "gte" : "lte"
                                    },
                                    t.abrupt("break", 22);
                                case 21:
                                    return t.abrupt("break", 22);
                                case 22:
                                    if (e.validate()) {
                                        t.next = 25;
                                        break
                                    }
                                    return e.disableSubmit = !1,
                                    t.abrupt("return");
                                case 25:
                                    e.$emit("submit", c);
                                case 26:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                },
                ga: function() {
                    try {
                        var e;
                        (e = window).ga.apply(e, arguments)
                    } catch (e) {
                        console.log(e)
                    }
                },
                minusUnit: function() {
                    if (this.priceTootipShow = !1,
                    this.limitData.price && !(parseFloat(this.limitData.price) <= 0)) {
                        var e = Object(O.c)(Object(I.b)(this.limitData.price, this.oneUnit), this.tradePrecise.tradePrice);
                        this.limitData.price = e,
                        this.calculateAllTradePrice(this.limitData.price),
                        this.calculateConvertKrw(this.limitData.price)
                    }
                },
                triggerPriceMinusUnit: function() {
                    if (this.triggerPriceTootipShow = !1,
                    this.limitData.triggerPrice && !(parseFloat(this.limitData.triggerPrice) <= 0)) {
                        var e = Object(O.c)(Object(I.b)(this.limitData.triggerPrice, this.oneUnit), this.tradePrecise.tradePrice);
                        this.limitData.triggerPrice = e,
                        this.calculateConvertKrw(e, "stop")
                    }
                },
                plusUnit: function() {
                    this.priceTootipShow = !1;
                    var e = 0 === Number(this.tradePrecise.tradePrice) ? Object(I.c)(this.limitData.price, this.oneUnit) : Object(O.c)(Object(I.c)(this.limitData.price, this.oneUnit), this.tradePrecise.tradePrice);
                    this.limitData.price = e,
                    this.calculateAllTradePrice(this.limitData.price),
                    this.calculateConvertKrw(this.limitData.price)
                },
                triggerPricePlusUnit: function() {
                    this.triggerPriceTootipShow = !1;
                    var e = 0 === Number(this.tradePrecise.tradePrice) ? Object(I.c)(this.limitData.triggerPrice, this.oneUnit) : Object(O.c)(Object(I.c)(this.limitData.triggerPrice, this.oneUnit), this.tradePrecise.tradePrice);
                    this.limitData.triggerPrice = e,
                    this.calculateConvertKrw(e, "stop")
                },
                amountMinusUnit: function() {
                    if (this.amountTootipShow = !1,
                    this.limitData.amount && !(parseFloat(this.limitData.amount) <= 0)) {
                        var e = Object(O.c)(Object(I.b)(this.limitData.amount, this.amountOneUnit), this.tradePrecise.tradeAmount);
                        if (this.limitData.amount = e,
                        this.calculateAllTradePrice(),
                        "buy" === this.dir) {
                            var t = 0 === parseFloat(this.limitData.price) ? 0 : Object(I.a)(this.availAssets, this.limitData.price);
                            this.maxAmount = Object(O.c)(t || 0, this.tradePrecise.tradeAmount),
                            this.setLimitSliderPos(this.limitData.amount)
                        } else
                            this.maxAmount = Object(O.c)(this.availAssets, this.tradePrecise.tradeAmount),
                            this.setLimitSliderPos(this.limitData.amount);
                        1 * this.limitData.amount > 1 * this.maxAmount && this.isLogin && (this.amountTootipShow = !0,
                        this.amountTootipText = this.$t("exchange.trade.maxCountPrefix") + this.thousandSeparate(this.maxAmount) + this.$t("exchange.trade.maxCountEnd"))
                    }
                },
                amountPlusUnit: function() {
                    this.amountTootipShow = !1;
                    var e = Object(O.c)(Object(I.c)(this.limitData.amount, this.amountOneUnit), this.tradePrecise.tradeAmount);
                    if (this.limitData.amount = e,
                    this.calculateAllTradePrice(),
                    "buy" === this.dir) {
                        var t = 0 === parseFloat(this.limitData.price) ? 0 : Object(I.a)(this.availAssets, this.limitData.price);
                        this.maxAmount = Object(O.c)(t || 0, this.tradePrecise.tradeAmount),
                        this.setLimitSliderPos(this.limitData.amount)
                    } else
                        this.maxAmount = Object(O.c)(this.availAssets, this.tradePrecise.tradeAmount),
                        this.setLimitSliderPos(this.limitData.amount);
                    1 * this.limitData.amount > 1 * this.maxAmount && this.isLogin && (this.amountTootipShow = !0,
                    this.amountTootipText = this.$t("exchange.trade.maxCountPrefix") + this.thousandSeparate(this.maxAmount) + this.$t("exchange.trade.maxCountEnd"))
                },
                plusMarketUnit: function() {
                    if (this.amountMarketTootipShow = !1,
                    "buy" === this.dir) {
                        var e = Object(O.c)(Object(I.c)(this.marketData.value, this.marketOneUnit), this.tradePrecise.tradeTotal);
                        this.marketData.value = e,
                        this.maxMarketValue = Object(O.c)(this.availAssets, this.tradePrecise.tradeTotal),
                        this.setMarketSliderPos(e),
                        parseFloat(this.marketData.value) > parseFloat(this.maxMarketValue) && (this.amountMarketTootipShow = !0,
                        this.amountMarketTootipText = this.$t("exchange.trade.maxCountPrefix") + this.thousandSeparate(this.maxMarketValue) + this.$t("exchange.trade.maxCountEnd"))
                    } else {
                        var t = Object(O.c)(Object(I.c)(this.marketData.value, this.marketOneUnit), this.tradePrecise.tradeAmount);
                        this.marketData.value = t,
                        this.maxMarketValue = Object(O.c)(this.availAssets, this.tradePrecise.tradeAmount),
                        this.setMarketSliderPos(t),
                        parseFloat(this.marketData.value) > parseFloat(this.maxMarketValue) && (this.amountMarketTootipShow = !0,
                        this.amountMarketTootipText = this.$t("exchange.trade.maxCountPrefix") + this.thousandSeparate(this.maxMarketValue) + this.$t("exchange.trade.maxCountEnd"))
                    }
                },
                minusMarketUnit: function() {
                    if (this.amountMarketTootipShow = !1,
                    this.marketData.value && !(parseFloat(this.marketData.value) <= 0))
                        if ("buy" === this.dir) {
                            var e = Object(O.c)(Object(I.b)(this.marketData.value, this.marketOneUnit), this.tradePrecise.tradeTotal);
                            this.marketData.value = e,
                            this.maxMarketValue = Object(O.c)(this.availAssets, this.tradePrecise.tradeTotal),
                            this.setMarketSliderPos(e),
                            parseFloat(this.marketData.value) > parseFloat(this.maxMarketValue) && (this.amountMarketTootipShow = !0,
                            this.amountMarketTootipText = this.$t("exchange.trade.maxCountPrefix") + this.maxMarketValue + this.$t("exchange.trade.maxCountEnd"))
                        } else {
                            var t = Object(O.c)(Object(I.b)(this.marketData.value, this.marketOneUnit), this.tradePrecise.tradeAmount);
                            this.marketData.value = t,
                            this.maxMarketValue = Object(O.c)(this.availAssets, this.tradePrecise.tradeAmount),
                            this.setMarketSliderPos(t),
                            parseFloat(this.marketData.value) > parseFloat(this.maxMarketValue) && (this.amountMarketTootipShow = !0,
                            this.amountMarketTootipText = this.$t("exchange.trade.maxCountPrefix") + this.thousandSeparate(this.maxMarketValue) + this.$t("exchange.trade.maxCountEnd"))
                        }
                },
                calculateAllTradePrice: function() {
                    var e = Object(O.c)(Object(I.d)(this.limitData.price, this.limitData.amount), this.tradePrecise.tradeTotal);
                    this.allTradePrice = e;
                    var t = [{
                        currency: this.quoteCoin,
                        total: this.allTradePrice
                    }]
                      , i = this.getBalanceTotal(t, "krw");
                    this.allTradePriceKrw = this.formatCash(i, !1)
                },
                calculateConvertKrw: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "price"
                      , i = [{
                        total: e || this.limitData.price,
                        currency: this.quoteCoin
                    }]
                      , a = this.getBalanceTotal(i, "krw");
                    this["price" === t ? "amountPrice" : "stopAmountPrice"] = this.formatCash(Object(O.c)(a, 2))
                },
                calculateAllAssets: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "buy" === this.dir ? this.quoteCoin : this.baseCoin;
                    this.balanceList.forEach(function(i) {
                        i.name === t && (e.availAssets = Object(O.c)(i.trade, i["show-precision"]))
                    })
                },
                setNumPrice: function(e) {
                    var t = e.target.value.replace(/^\./, "").replace(/,|\D+$/g, "")
                      , i = Object(B.d)(t, this.tradePrecise.tradePrice);
                    this.limitData.price = i,
                    this.checkPrice(),
                    this.calculateConvertKrw(i),
                    this.calculateAllTradePrice()
                },
                setStopNumPrice: function(e) {
                    var t = e.target.value.replace(/^\./, "").replace(/,|\D+$/g, "")
                      , i = Object(B.d)(t, this.tradePrecise.tradePrice);
                    this.triggerPriceTootipShow = !1,
                    this.limitData.triggerPrice = i,
                    this.checkPrice(),
                    this.calculateConvertKrw(i, "stop")
                },
                setNumAmount: function(e) {
                    this.amountTootipShow = !1;
                    var t = e.target.value.replace(/^\./, "").replace(/,|\D+$/g, "")
                      , i = Object(B.d)(t, this.tradePrecise.tradeAmount);
                    if (this.limitData.amount = i,
                    "buy" === this.dir) {
                        var a = 0 === parseFloat(this.limitData.price) ? 0 : Object(I.a)(this.availAssets, this.limitData.price);
                        this.maxAmount = Object(O.c)(a || 0, this.tradePrecise.tradeAmount)
                    } else
                        this.maxAmount = this.availAssets;
                    this.setLimitSliderPos(i),
                    this.calculateAllTradePrice(),
                    1 * this.limitData.amount > 1 * this.maxAmount && this.isLogin && (this.amountTootipShow = !0,
                    this.amountTootipText = this.$t("exchange.trade.maxCountPrefix") + this.thousandSeparate(this.maxAmount) + this.$t("exchange.trade.maxCountEnd"));
                    var n = "buy" === this.dir ? "Limit_Buy_" : "Limit_Sell_";
                    this.ga("send", "event", "HuobiKr_PC", "Exchange", "" + n + this.baseCoin.toUpperCase() + "_Amount")
                },
                setMarketAmount: function(e) {
                    this.amountMarketTootipShow = !1;
                    var t = e.target.value.replace(/^\./, "").replace(/,|\D+$/g, "");
                    if ("buy" === this.dir) {
                        var i = Object(B.d)(t, this.tradePrecise.tradeTotal);
                        this.marketData.value = i,
                        this.maxMarketValue = Object(O.c)(this.availAssets, this.tradePrecise.tradeTotal),
                        this.isPrime && parseFloat(this.availAssets) > this.primeOrderLimit && (this.maxMarketValue = Object(O.c)(this.primeOrderLimit, this.tradePrecise.tradeTotal)),
                        this.setMarketSliderPos(i),
                        parseFloat(this.marketData.value) > parseFloat(this.maxMarketValue) && (this.amountMarketTootipShow = !0,
                        this.amountMarketTootipText = this.$t("exchange.trade.maxCountPrefix") + this.thousandSeparate(this.maxMarketValue) + this.$t("exchange.trade.maxCountEnd"))
                    } else {
                        var a = Object(B.d)(t, this.tradePrecise.tradeAmount);
                        this.marketData.value = a,
                        this.maxAmount = Object(O.c)(this.availAssets, this.tradePrecise.tradeAmount),
                        this.setMarketSliderPos(a),
                        parseFloat(this.marketData.value) > parseFloat(this.maxAmount) && (this.amountMarketTootipShow = !0,
                        this.amountMarketTootipText = this.$t("exchange.trade.maxCountPrefix") + this.thousandSeparate(this.maxAmount) + this.$t("exchange.trade.maxCountEnd"))
                    }
                    var n = "buy" === this.dir ? "Market_Buy_" : "Market_Sell_";
                    this.ga("send", "event", "HuobiKr_PC", "Exchange", "" + n + this.baseCoin.toUpperCase() + "_Total")
                },
                formatLimitTooltip: function(e) {
                    return e + "%"
                },
                formatMarketTooltip: function(e) {
                    return e + "%"
                },
                changeVolumn: function(e) {
                    this.amountTootipShow = !1,
                    this.setLimitSlideAmount(e)
                },
                setLimitSlideAmount: function(e) {
                    if ("buy" === this.dir) {
                        var t = Object(O.c)(Object(I.a)(this.availAssets, this.limitData.price), this.tradePrecise.tradeAmount);
                        this.limitData.amount = Object(O.c)(Object(I.a)(Object(I.d)(t, e), 100), this.tradePrecise.tradeAmount)
                    } else {
                        var i = this.availAssets;
                        this.limitData.amount = Object(O.c)(Object(I.a)(Object(I.d)(i, e), 100), this.tradePrecise.tradeAmount)
                    }
                    this.calculateAllTradePrice()
                },
                changeMarketVolumn: function(e) {
                    this.amountMarketTootipShow = !1;
                    var t = this.availAssets
                      , i = this.primeOrderLimit;
                    "buy" === this.dir ? (this.isPrime && parseFloat(t) > i && (t = i),
                    this.marketData.value = Object(O.c)(Object(I.a)(Object(I.d)(t, e), 100), this.tradePrecise.tradeTotal)) : this.marketData.value = Object(O.c)(Object(I.a)(Object(I.d)(t, e), 100), this.tradePrecise.tradeAmount),
                    this.calculateAllTradePrice()
                },
                setLimitSliderPos: function(e, t) {
                    if ("buy" === this.dir) {
                        var i = Object(O.c)(Object(I.a)(this.availAssets, this.limitData.price), this.tradePrecise.tradeAmount)
                          , a = t || Object(I.a)(Object(I.d)(e, 100), i);
                        if (Pe()(a) || 0 === parseFloat(i))
                            return;
                        this.slideValue = parseFloat(Object(O.c)(a, 2))
                    } else {
                        var n = Object(O.c)(this.availAssets, this.tradePrecise.tradeAmount)
                          , r = t || Object(I.a)(Object(I.d)(e, 100), n);
                        if (Pe()(r) || 0 === parseFloat(n))
                            return;
                        this.slideValue = parseFloat(Object(O.c)(r, 2))
                    }
                },
                setMarketSliderPos: function(e, t) {
                    if ("buy" === this.dir) {
                        var i = Object(O.c)(this.availAssets, this.tradePrecise.tradeTotal);
                        this.isPrime && parseFloat(this.availAssets) > this.primeOrderLimit && (i = Object(O.c)(this.primeOrderLimit, this.tradePrecise.tradeTotal));
                        var a = t || Object(I.a)(Object(I.d)(e, 100), i);
                        if (Pe()(a) || 0 === parseFloat(i))
                            return;
                        this.slideMarketValue = parseFloat(Object(O.c)(a, 2))
                    } else {
                        var n = Object(O.c)(this.availAssets, this.tradePrecise.tradeAmount)
                          , r = t || Object(I.a)(Object(I.d)(e, 100), n);
                        if (Pe()(r) || 0 === parseFloat(n))
                            return;
                        this.slideMarketValue = parseFloat(Object(O.c)(r, 2))
                    }
                },
                validate: function() {
                    if (this.amountMarketTootipShow || this.amountTootipShow || this.priceTootipShow || this.triggerPriceTootipShow)
                        return !1;
                    if (!this.accountId)
                        return this.$alert(this.$t("exchange.messsage.please_signin"), {
                            confirmButtonText: this.$t("exchange.messsage.confirm")
                        }),
                        !1;
                    var e = this.type
                      , t = parseFloat(this.limitData.price)
                      , i = parseFloat(this.limitData.triggerPrice);
                    if ("buy" === this.dir) {
                        if ("limit" === e || "stop" === e) {
                            if ("stop" === e && !i)
                                return this.triggerPriceTootipShow = !0,
                                this.triggerPriceTootipText = this.$t("exchange.message.please_input_trigger_price"),
                                !1;
                            if (0 !== this.currentPrice && (!this.limitData.price || 0 === parseFloat(this.limitData.price)))
                                return this.priceTootipShow = !0,
                                this.priceTootipText = this.$t("exchange.message.please_input_buyprice"),
                                !1;
                            if ("stop" === e && t === i)
                                return this.triggerPriceTootipShow = !0,
                                this.triggerPriceTootipText = this.$t("exchange.message.triggerprice_can_not_equal_buy_price"),
                                !1;
                            var a = Object(O.c)(Object(I.a)(this.availAssets, this.limitData.price) || 0, this.tradePrecise.tradeAmount);
                            if (!this.isPrime && "limit" === e && 0 !== this.currentPrice && parseFloat(this.limitData.price) > 1.1 * parseFloat(this.currentPrice))
                                return this.priceTootipShow = !0,
                                this.priceTootipText = this.$t("exchange.message.buy_not_larger"),
                                !1;
                            if ("stop" === e && t / i > 1.1)
                                return this.priceTootipShow = !0,
                                this.priceTootipText = this.$t("exchange.message.price_can_not_more_than_110precent_triggerprice"),
                                !1;
                            if (!this.limitData.amount || 0 === parseFloat(this.limitData.amount))
                                return this.amountTootipShow = !0,
                                this.amountTootipText = this.$t("exchange.message.please_input_buyamount"),
                                !1;
                            if (parseFloat(this.limitData.amount) > 1e9)
                                return this.amountTootipShow = !0,
                                this.amountTootipText = this.$t("exchange.message.one_order_max"),
                                !1;
                            if (parseFloat(this.limitData.amount) > parseFloat(a))
                                return this.amountTootipShow = !0,
                                this.amountTootipText = this.$t("exchange.trade.maxCountPrefix") + this.thousandSeparate(a) + this.$t("exchange.trade.maxCountEnd"),
                                !1
                        } else {
                            var n = parseFloat(this.marketData.value);
                            if (!this.marketData.value || 0 === n)
                                return this.amountMarketTootipShow = !0,
                                this.amountMarketTootipText = this.$t("exchange.message.please_input_trade"),
                                !1;
                            var r = Object(O.c)(this.availAssets, this.tradePrecise.tradeTotal);
                            if (this.isPrime && parseFloat(r) > this.primeOrderLimit && !this.inPrimeWhiteList && n > this.primeOrderLimit)
                                return this.amountMarketTootipShow = !0,
                                void (this.amountMarketTootipText = this.$t("exchange.message.exceed_order_limit", {
                                    limit: this.primeOrderLimit,
                                    currency: ("" + this.quoteCoin).toUpperCase()
                                }));
                            if (n > parseFloat(r))
                                return this.amountMarketTootipShow = !0,
                                this.amountMarketTootipText = this.$t("exchange.trade.maxCountPrefix") + this.thousandSeparate(r) + this.$t("exchange.trade.maxCountEnd"),
                                !1;
                            if (n > 1e9)
                                return this.amountMarketTootipShow = !0,
                                this.amountMarketTootipText = this.$t("exchange.message.one_order_max"),
                                !1
                        }
                        return this.priceTootipShow = !1,
                        this.amountTootipShow = !1,
                        this.amountMarketTootipShow = !1,
                        !0
                    }
                    var o = this.availAssets;
                    if ("limit" === e || "stop" === e) {
                        if ("stop" === e && !i)
                            return this.triggerPriceTootipShow = !0,
                            this.triggerPriceTootipText = this.$t("exchange.message.please_input_trigger_price"),
                            !1;
                        if (0 !== this.currentPrice && (!this.limitData.price || 0 === parseFloat(this.limitData.price)))
                            return this.priceTootipShow = !0,
                            this.priceTootipText = this.$t("exchange.message.please_input_sellprice"),
                            !1;
                        if (0 !== this.currentPrice && parseFloat(this.limitData.price) < parseFloat(this.oneUnit))
                            return this.priceTootipShow = !0,
                            this.priceTootipText = this.$t("exchange.message.sell_not_lower_then").replace("%d", this.thousandSeparate(this.oneUnit)),
                            !1;
                        if ("stop" === e && t === i)
                            return this.triggerPriceTootipShow = !0,
                            this.triggerPriceTootipText = this.$t("exchange.message.triggerprice_can_not_equal_sell_price"),
                            !1;
                        if ("limit" === e && 0 !== this.currentPrice && this.limitData.price < .9 * this.currentPrice)
                            return this.priceTootipShow = !0,
                            this.priceTootipText = this.$t("exchange.message.sell_not_smaller"),
                            !1;
                        if ("stop" === e && t / i < .9)
                            return this.priceTootipShow = !0,
                            this.priceTootipText = this.$t("exchange.message.price_can_not_less_than_90precent_triggerprice"),
                            !1;
                        if (!this.limitData.amount || 0 === parseFloat(this.limitData.amount))
                            return this.amountTootipShow = !0,
                            this.amountTootipText = this.$t("exchange.message.please_input_sell_amount"),
                            !1;
                        if (parseFloat(this.limitData.amount) > parseFloat(o))
                            return this.amountTootipShow = !0,
                            this.amountTootipText = this.$t("exchange.trade.maxCountPrefix") + this.thousandSeparate(o) + this.$t("exchange.trade.maxCountEnd"),
                            !1
                    } else {
                        if (!this.marketData.value || 0 === parseFloat(this.marketData.value))
                            return this.amountMarketTootipShow = !0,
                            this.amountMarketTootipText = this.$t("exchange.message.please_input_sell_amount"),
                            !1;
                        if (parseFloat(this.marketData.value) > parseFloat(o))
                            return this.amountMarketTootipShow = !0,
                            this.amountMarketTootipText = this.$t("exchange.trade.maxCountPrefix") + this.thousandSeparate(o) + this.$t("exchange.trade.maxCountEnd"),
                            !1;
                        if (this.marketData.value > 1e11)
                            return this.amountMarketTootipShow = !0,
                            this.amountMarketTootipText = this.$t("exchange.message.one_order_sellmax"),
                            !1
                    }
                    return this.amountMarketTootipShow = !1,
                    this.priceTootipShow = !1,
                    this.amountTootipShow = !1,
                    !0
                },
                signin: function() {
                    this.pushState("/login/")
                },
                register: function() {
                    this.pushState("/register/")
                },
                gotoCharge: function() {
                    this.ga("send", "event", "HuobiKr_PC", "Exchange", "Deposit_" + this.baseCoin.toUpperCase()),
                    this.pushState(this.chargeLink)
                },
                resetForm: function(e) {
                    e ? (this.limitData.amount = "",
                    this.marketData.value = "",
                    this.slideValue = 0,
                    this.slideMarketValue = 0,
                    this.allTradePrice = 0,
                    this.allTradePriceKrw = 0,
                    this.disableSubmit = !1) : this.disableSubmit = !1
                },
                blurLimitAmountShow: function() {
                    var e = "buy" === this.dir ? "Limit_Buy_" : "Limit_Sell_";
                    this.ga("send", "event", "HuobiKr_PC", "Exchange", "" + e + this.baseCoin.toUpperCase() + "_Price"),
                    this.amountTootipShow = !1
                },
                clearTooltip: function() {
                    this.amountMarketTootipShow = !1,
                    this.priceTootipShow = !1,
                    this.amountTootipShow = !1,
                    this.triggerPriceTootipShow = !1
                },
                setLimitPercent: function(e) {
                    var t = this.tradePrecise
                      , i = t.tradeAmount
                      , a = t.tradePrice
                      , n = t.tradeTotal;
                    0 !== parseFloat(Object(O.c)(this.limitData.price, a)) && 0 !== parseFloat(Object(O.c)(this.availAssets, n)) && ("buy" === this.dir ? this.limitData.amount = Object(O.c)((this.availAssets / this.limitData.price || 0) * e / 100, i) : this.limitData.amount = Object(O.c)((this.availAssets || 0) * e / 100, i),
                    this.setLimitSliderPos(this.limitData.amount, e),
                    this.calculateAllTradePrice())
                },
                setAmountPercent: function(e) {
                    if (this.isLogin) {
                        if ("buy" === this.dir) {
                            var t = this.availAssets
                              , i = this.primeOrderLimit;
                            if (0 === parseFloat(Object(O.c)(t, this.tradePrecise.tradeTotal)))
                                return;
                            this.isPrime && parseFloat(t) > i && (t = i),
                            this.marketData.value = Object(O.c)(Object(I.a)(Object(I.d)(t || 0, e), 100), this.tradePrecise.tradeTotal)
                        } else {
                            if (0 === parseFloat(Object(O.c)(this.availAssets, this.tradePrecise.tradeAmount)))
                                return;
                            this.marketData.value = Object(O.c)(Object(I.a)(Object(I.d)(this.availAssets || 0, e), 100), this.tradePrecise.tradeAmount)
                        }
                        this.amountMarketTootipShow = !1,
                        this.amountTootipShow = !1,
                        this.setMarketSliderPos(this.marketData.value, e)
                    }
                },
                checkPrice: function() {
                    if ("limit" === this.type) {
                        var e = parseFloat(("" + this.closePrice).replace(/,/g, ""));
                        "buy" === this.dir ? !this.isPrime && 0 !== e && parseFloat(this.limitData.price) > 1.1 * parseFloat(e) ? (this.priceTootipShow = !0,
                        this.priceTootipText = this.$t("exchange.message.buy_not_larger")) : this.priceTootipShow = !1 : 0 !== e && this.limitData.price < .9 * e ? (this.priceTootipShow = !0,
                        this.priceTootipText = this.$t("exchange.message.sell_not_smaller")) : this.priceTootipShow = !1
                    }
                    if ("stop" === this.type) {
                        var t = parseFloat(this.limitData.price)
                          , i = parseFloat(this.limitData.triggerPrice);
                        this.triggerPriceTootipShow && (this.triggerPriceTootipText !== this.$t("exchange.message.triggerprice_can_not_equal_buy_price") && this.triggerPriceTootipText !== this.$t("exchange.message.triggerprice_can_not_equal_sell_price") || t === i || (this.triggerPriceTootipShow = !1)),
                        this.priceTootipShow && (this.priceTootipText === this.$t("exchange.message.price_can_not_more_than_110precent_triggerprice") && t / i <= 1.1 && (this.priceTootipShow = !1),
                        this.priceTootipText === this.$t("exchange.message.price_can_not_less_than_90precent_triggerprice") && t / i >= .9 && (this.priceTootipShow = !1),
                        this.priceTootipText !== this.$t("exchange.message.please_input_buyprice") && this.priceTootipText !== this.$t("exchange.message.please_input_sellprice") || !t || (this.priceTootipShow = !1))
                    }
                }
            },
            directives: {
                numberOnly: {
                    bind: function(e) {
                        e.handler = function() {
                            if ("" !== e.value) {
                                var t = Number(e.dataset.symbol) || 0
                                  , i = new RegExp("^(\\-)*(\\d+)\\.(\\d{0," + t + "}).*$")
                                  , a = /^[^.]+\.\D*$/.test(e.value) && 0 !== t;
                                setTimeout(function() {
                                    e.value = e.value.replace(/^\./, ""),
                                    /(^[0]+[1-9.])$/.test(e.value) && (e.value = e.value.replace(/0/g, "")),
                                    e.value = e.value.replace(/[。]+/g, ".").replace(/[^\d.]/g, "").replace(/\.{2,}/g, ".").replace(/^\.\.$/g, "0.").replace(/^\.$/g, "0.").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(i, "$1$2.$3"),
                                    0 === t && (e.value = e.value.replace(/\D/g, "")),
                                    e.value = a ? Object(O.d)(e.value) + "." : Object(O.d)(e.value)
                                }, 0)
                            }
                        }
                        ,
                        e.addEventListener("input", e.handler)
                    },
                    unbind: function(e) {
                        e.removeEventListener("input", e.handler)
                    }
                }
            }
        }
          , Ae = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    class: e.prefix
                }, [a("div", {
                    staticClass: "buy-form-head"
                }, [a("div", {
                    staticClass: "buy-form-head-changetype"
                }, [e.isPrime && !e.inPrimeWhiteList ? a("span", {
                    staticStyle: {
                        color: "#606266"
                    },
                    attrs: {
                        id: "trade-type_limit-market"
                    }
                }, [e._v("\n                " + e._s(e.orderType) + "\n            ")]) : a("el-dropdown", {
                    on: {
                        command: e.changeType
                    }
                }, [a("span", {
                    staticClass: "el-dropdown-link",
                    attrs: {
                        id: "trade-type_limit-market"
                    }
                }, [e._v("\n                    " + e._s(e.orderType) + "\n                    "), a("i", {
                    staticClass: "el-icon-caret-bottom el-icon--right"
                })]), e._v(" "), a("el-dropdown-menu", {
                    attrs: {
                        slot: "dropdown"
                    },
                    slot: "dropdown"
                }, e._l(e.dropdownList, function(t) {
                    return a("el-dropdown-item", {
                        key: t.command,
                        attrs: {
                            command: t.command
                        }
                    }, [e._v("\n                        " + e._s(e.$t("exchange.trade_panel." + t.text)) + "\n                    ")])
                }))], 1), e._v(" "), a("el-tooltip", {
                    attrs: {
                        effect: "light",
                        placement: "top-start"
                    }
                }, [a("div", {
                    staticClass: "buy-form-stop-tool-tips",
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                }, [a("dl", [a("dt", [e._v(e._s(e.$t("exchange.trade_panel.stop-order")))]), e._v(" "), a("dd", {
                    domProps: {
                        innerHTML: e._s(e.$t("exchange.trade_panel.stop-desc"))
                    }
                })]), e._v(" "), a("div", [a("a", {
                    attrs: {
                        href: e.stopLimitMoreAddress,
                        target: "_blank"
                    }
                }, [e._v("\n                            " + e._s(e.$t("exchange.trade_panel.stop-more")) + "\n                        ")])])]), e._v(" "), a("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "stop" === e.type,
                        expression: "type === 'stop'"
                    }],
                    staticClass: "buy-form-head-changetype-stop-icon"
                }, [e._v("?")])])], 1), e._v(" "), a("div", {
                    staticClass: "buy-form-head-info"
                }, [e.isLogin ? ["buy" === e.dir && e.isPrime && !e.inPrimeWhiteList ? [a("el-tooltip", {
                    attrs: {
                        effect: "light",
                        placement: "top",
                        transition: ""
                    }
                }, [a("dl", {
                    staticClass: "prime-tips",
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                }, [e.isPrimeVip ? a("dt", [a("span", [e._v(e._s(e.$t("exchange.trade_panel.dear_customer")))]), e._v(" "), a("img", {
                    attrs: {
                        src: i("rVIx")
                    }
                })]) : e._e(), e._v(" "), a("dd", [e._v(e._s(e.$t("exchange.trade_panel.single_time_prime_total", {
                    total: e.thousandTotal,
                    primeQuote: e.primeQuote
                })))])]), e._v(" "), a("i", {
                    staticClass: "hb_icon_toast_failed"
                })])] : e._e(), e._v(" "), a("span", {
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [a("span", [e._v("\n                        " + e._s(e.$t("exchange.trade_panel.available")) + "\n                    ")]), e._v(" "), a("el-tooltip", {
                    attrs: {
                        effect: "light",
                        content: e._f("thousandSeparate")(e.availAssets),
                        placement: "top",
                        transition: ""
                    }
                }, [a("span", {
                    staticClass: "all-assets"
                }, [e._v(e._s(e._f("thousandSeparate")(e.availAssets)))])]), e._v(" "), a("span", [e._v("\n                        " + e._s("buy" === e.dir ? e.quoteCoin.toUpperCase() : e.baseCoin.toUpperCase()) + "\n                    ")])], 1), e._v(" "), a("span", {
                    staticClass: "chargeLink",
                    on: {
                        click: e.gotoCharge
                    }
                }, [e._v("\n                    " + e._s(e.$t("exchange.trade_panel.charge")) + "\n                ")])] : [a("span", {
                    staticClass: "signin",
                    on: {
                        click: e.signin
                    }
                }, [e._v("\n                    " + e._s(e.$t("exchange.trade_panel.signin")) + "\n                ")]), e._v("\n                " + e._s(e.$t("exchange.trade_panel.or")) + "\n                "), a("span", {
                    staticClass: "register",
                    on: {
                        click: e.register
                    }
                }, [e._v("\n                    " + e._s(e.$t("exchange.trade_panel.register")) + "\n                ")]), e._v("\n                " + e._s(e.$t("exchange.trade_panel.begin_trade")) + "\n            ")]], 2)]), e._v(" "), a("div", {
                    staticClass: "buy-form-content"
                }, ["limit" === e.type ? [a("div", {
                    staticClass: "form-line"
                }, [a("div", {
                    staticClass: "label"
                }, [a("span", [e._v("\n                        " + e._s("buy" === e.dir ? e.$t("exchange.trade_panel.buy_price") : e.$t("exchange.trade_panel.sell_price")) + "\n                        (" + e._s(e.quoteCoin.toUpperCase()) + ")\n                    ")])]), e._v(" "), a("div", {
                    staticClass: "value"
                }, [a("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        value: e.priceTootipShow,
                        manual: "",
                        content: e.priceTootipText,
                        effect: "light",
                        "hide-after": 100,
                        placement: "top",
                        transition: ""
                    }
                }, [a("div", [a("input", {
                    directives: [{
                        name: "number-only",
                        rawName: "v-number-only"
                    }],
                    ref: "priceInput",
                    staticClass: "common-input",
                    attrs: {
                        type: "text",
                        "data-symbol": e.tradePrecise.tradePrice,
                        maxlength: "16",
                        "growing-ignore": "true"
                    },
                    domProps: {
                        value: e.price
                    },
                    on: {
                        input: e.setNumPrice,
                        blur: e.blurLimitAmountShow
                    }
                })])]), e._v(" "), a("el-button-group", {
                    staticClass: "btn-group"
                }, [a("el-button", {
                    staticClass: "minus",
                    attrs: {
                        type: "primary",
                        icon: "el-icon-minus",
                        size: "small"
                    },
                    on: {
                        click: e.minusUnit
                    }
                }), e._v(" "), a("el-button", {
                    attrs: {
                        type: "primary",
                        icon: "el-icon-plus",
                        size: "small"
                    },
                    on: {
                        click: e.plusUnit
                    }
                })], 1)], 1)]), e._v(" "), "KRW" !== e.quoteCoin.toUpperCase() ? a("div", {
                    staticClass: "relative-value",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [e._v("\n                ≈ " + e._s(e.limitData.price ? e.amountPrice : "0.00") + " KRW\n            ")]) : e._e(), e._v(" "), a("div", {
                    staticClass: "form-line",
                    class: {
                        mt35: "KRW" === e.quoteCoin.toUpperCase()
                    }
                }, [a("div", {
                    staticClass: "label"
                }, [a("span", [e._v("\n                        " + e._s("buy" === e.dir ? e.$t("exchange.trade_panel.buy_amount") : e.$t("exchange.trade_panel.sell_amount")) + "\n                        (" + e._s(e.baseCoin.toUpperCase()) + ")\n                    ")])]), e._v(" "), a("div", {
                    staticClass: "value"
                }, [a("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        value: e.amountTootipShow,
                        manual: "",
                        content: e.amountTootipText,
                        effect: "light",
                        "hide-after": 100,
                        placement: "top",
                        transition: ""
                    }
                }, [a("div", [a("input", {
                    directives: [{
                        name: "number-only",
                        rawName: "v-number-only"
                    }],
                    staticClass: "common-input",
                    attrs: {
                        type: "text",
                        "data-symbol": e.tradePrecise.tradeAmount,
                        maxlength: "16",
                        "growing-ignore": "true"
                    },
                    domProps: {
                        value: e.lAmount
                    },
                    on: {
                        input: e.setNumAmount
                    }
                })])]), e._v(" "), a("el-button-group", {
                    staticClass: "btn-group"
                }, [a("el-button", {
                    staticClass: "unit-btn minus",
                    attrs: {
                        type: "primary",
                        icon: "el-icon-minus",
                        size: "small"
                    },
                    on: {
                        click: e.amountMinusUnit
                    }
                }), e._v(" "), a("el-button", {
                    staticClass: "unit-btn",
                    attrs: {
                        type: "primary",
                        icon: "el-icon-plus",
                        size: "small"
                    },
                    on: {
                        click: e.amountPlusUnit
                    }
                })], 1)], 1)]), e._v(" "), a("div", {
                    staticClass: "form-item-slider",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [a("el-slider", {
                    attrs: {
                        effect: "light",
                        "format-tooltip": e.formatLimitTooltip,
                        disabled: e.limitSliderDisable
                    },
                    on: {
                        change: e.changeVolumn
                    },
                    model: {
                        value: e.slideValue,
                        callback: function(t) {
                            e.slideValue = t
                        },
                        expression: "slideValue"
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__runway slider-point",
                    class: e.limitSliderClass
                }, [a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "0"
                    },
                    on: {
                        click: function(t) {
                            e.setLimitPercent(0)
                        }
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "25%"
                    },
                    on: {
                        click: function(t) {
                            e.setLimitPercent(25)
                        }
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "50%"
                    },
                    on: {
                        click: function(t) {
                            e.setLimitPercent(50)
                        }
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "75%"
                    },
                    on: {
                        click: function(t) {
                            e.setLimitPercent(75)
                        }
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "100%"
                    },
                    on: {
                        click: function(t) {
                            e.setLimitPercent(100)
                        }
                    }
                })])], 1), e._v(" "), a("div", {
                    staticClass: "trade-amount",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [a("div", {
                    staticClass: "coin-label"
                }, [a("span", {
                    staticClass: "label"
                }, [e._v("\n                        " + e._s(e.$t("exchange.trade_panel.trade_volume")) + "\n                    ")]), e._v(" "), a("span", [e._v("(" + e._s(e.quoteCoin.toUpperCase()) + ")")])]), e._v(" "), a("div", {
                    staticClass: "coin-amount"
                }, [a("div", {
                    staticClass: "coin-worth",
                    class: {
                        lh54: "KRW" === e.quoteCoin.toUpperCase()
                    }
                }, [a("span", {
                    staticClass: "price",
                    class: e.dir
                }, [e._v("\n                            " + e._s(e._f("thousandSeparate")(e.allTradePrice)) + "\n                        ")]), e._v(" "), a("span", {
                    staticClass: "quote-coin"
                }, [e._v(e._s(e.quoteCoin.toUpperCase()))])]), e._v(" "), "KRW" !== e.quoteCoin.toUpperCase() ? a("div", {
                    staticClass: "money-worth"
                }, [e._v("\n                        ≈ "), a("span", {
                    staticClass: "price"
                }, [e._v(e._s(e.allTradePriceKrw))]), a("span", {
                    staticClass: "unit"
                }, [e._v("KRW")])]) : e._e()])])] : e._e(), e._v(" "), "market" === e.type ? [a("div", {
                    staticClass: "form-line market-price"
                }, [a("div", {
                    staticClass: "label"
                }, [a("span", [e._v("\n                        " + e._s("buy" === e.dir ? e.$t("exchange.trade_panel.market_buy_price") : e.$t("exchange.trade_panel.market_sell_price")) + "\n                        (" + e._s(e.quoteCoin.toUpperCase()) + ")\n                    ")])]), e._v(" "), a("div", {
                    staticClass: "value"
                }, [a("input", {
                    staticClass: "common-input",
                    attrs: {
                        type: "text",
                        disabled: ""
                    },
                    domProps: {
                        value: e.marketPlaceHolder
                    }
                })])]), e._v(" "), a("div", {
                    staticClass: "form-line",
                    class: {
                        "prime-input": e.isPrime
                    }
                }, [a("div", {
                    staticClass: "label"
                }, [a("span", [e._v("\n                        " + e._s("buy" === e.dir ? e.$t("exchange.trade_panel.trade_volume") : e.$t("exchange.trade_panel.sell_amount")) + "\n                        (" + e._s("buy" === e.dir ? e.quoteCoin.toUpperCase() : e.baseCoin.toUpperCase()) + ")\n                    ")])]), e._v(" "), a("div", {
                    staticClass: "value"
                }, [a("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        value: e.amountMarketTootipShow,
                        manual: "",
                        content: e.amountMarketTootipText,
                        effect: "light",
                        "hide-after": 100,
                        placement: "top",
                        transition: ""
                    }
                }, [a("div", [a("input", {
                    directives: [{
                        name: "number-only",
                        rawName: "v-number-only"
                    }],
                    staticClass: "common-input",
                    attrs: {
                        type: "text",
                        "data-symbol": "buy" === e.dir ? e.tradePrecise.tradeTotal : e.tradePrecise.tradeAmount,
                        maxlength: "14",
                        "growing-ignore": "true"
                    },
                    domProps: {
                        value: e.mAmount
                    },
                    on: {
                        input: e.setMarketAmount
                    }
                })])]), e._v(" "), a("el-button-group", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isPrime,
                        expression: "!isPrime"
                    }],
                    staticClass: "btn-group"
                }, [a("el-button", {
                    staticClass: "unit-btn minus",
                    attrs: {
                        type: "primary",
                        icon: "el-icon-minus",
                        size: "small"
                    },
                    on: {
                        click: e.minusMarketUnit
                    }
                }), e._v(" "), a("el-button", {
                    staticClass: "unit-btn",
                    attrs: {
                        type: "primary",
                        icon: "el-icon-plus",
                        size: "small"
                    },
                    on: {
                        click: e.plusMarketUnit
                    }
                })], 1)], 1)]), e._v(" "), a("div", {
                    staticClass: "form-item-slider",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [a("el-slider", {
                    attrs: {
                        effect: "light",
                        "format-tooltip": e.formatMarketTooltip,
                        disabled: e.marketSliderDisable
                    },
                    on: {
                        change: e.changeMarketVolumn
                    },
                    model: {
                        value: e.slideMarketValue,
                        callback: function(t) {
                            e.slideMarketValue = t
                        },
                        expression: "slideMarketValue"
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__runway slider-point",
                    class: e.marketSliderClass
                }, [a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "0"
                    },
                    on: {
                        click: function(t) {
                            e.setAmountPercent(0)
                        }
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "25%"
                    },
                    on: {
                        click: function(t) {
                            e.setAmountPercent(25)
                        }
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "50%"
                    },
                    on: {
                        click: function(t) {
                            e.setAmountPercent(50)
                        }
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "75%"
                    },
                    on: {
                        click: function(t) {
                            e.setAmountPercent(75)
                        }
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "100%"
                    },
                    on: {
                        click: function(t) {
                            e.setAmountPercent(100)
                        }
                    }
                })])], 1)] : e._e(), e._v(" "), "stop" === e.type ? [a("div", {
                    staticClass: "form-line"
                }, [a("div", {
                    staticClass: "label"
                }, [a("span", [e._v("\n                        " + e._s("buy" === e.dir ? e.$t("exchange.trade_panel.buy_trigger_price") : e.$t("exchange.trade_panel.sell_trigger_price")) + "\n                        (" + e._s(e.quoteCoin.toUpperCase()) + ")\n                    ")])]), e._v(" "), a("div", {
                    staticClass: "value stop-value"
                }, [a("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        value: e.triggerPriceTootipShow,
                        manual: "",
                        content: e.triggerPriceTootipText,
                        effect: "light",
                        "hide-after": 100,
                        placement: "top"
                    }
                }, [a("div", [a("input", {
                    directives: [{
                        name: "number-only",
                        rawName: "v-number-only"
                    }],
                    staticClass: "common-input",
                    attrs: {
                        type: "text",
                        "data-symbol": e.tradePrecise.tradePrice,
                        maxlength: "16",
                        "growing-ignore": "true"
                    },
                    domProps: {
                        value: e.triggerPrice
                    },
                    on: {
                        input: e.setStopNumPrice,
                        blur: e.blurLimitAmountShow
                    }
                })])]), e._v(" "), a("el-button-group", {
                    staticClass: "btn-group"
                }, [a("el-button", {
                    staticClass: "minus",
                    attrs: {
                        type: "primary",
                        icon: "el-icon-minus",
                        size: "small"
                    },
                    on: {
                        click: e.triggerPriceMinusUnit
                    }
                }), e._v(" "), a("el-button", {
                    attrs: {
                        type: "primary",
                        icon: "el-icon-plus",
                        size: "small"
                    },
                    on: {
                        click: e.triggerPricePlusUnit
                    }
                })], 1)], 1)]), e._v(" "), "KRW" !== e.quoteCoin.toUpperCase() ? a("div", {
                    staticClass: "relative-value stop-relative-value",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [e._v("\n                ≈ " + e._s(e.limitData.triggerPrice ? e.stopAmountPrice : 0) + " KRW\n            ")]) : e._e(), e._v(" "), a("div", {
                    staticClass: "form-line",
                    class: {
                        mt20: "KRW" === e.quoteCoin.toUpperCase()
                    }
                }, [a("div", {
                    staticClass: "label"
                }, [a("span", [e._v("\n                        " + e._s("buy" === e.dir ? e.$t("exchange.trade_panel.buy_commission_price") : e.$t("exchange.trade_panel.sell_commission_price")) + "\n                        (" + e._s(e.quoteCoin.toUpperCase()) + ")\n                    ")])]), e._v(" "), a("div", {
                    staticClass: "value stop-value"
                }, [a("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        value: e.priceTootipShow,
                        manual: "",
                        content: e.priceTootipText,
                        effect: "light",
                        "hide-after": 100,
                        placement: "top"
                    }
                }, [a("div", [a("input", {
                    directives: [{
                        name: "number-only",
                        rawName: "v-number-only"
                    }],
                    ref: "priceInput",
                    staticClass: "common-input",
                    attrs: {
                        type: "text",
                        "data-symbol": e.tradePrecise.tradePrice,
                        maxlength: "16",
                        "growing-ignore": "true"
                    },
                    domProps: {
                        value: e.price
                    },
                    on: {
                        input: e.setNumPrice,
                        blur: e.blurLimitAmountShow
                    }
                })])]), e._v(" "), a("el-button-group", {
                    staticClass: "btn-group"
                }, [a("el-button", {
                    staticClass: "minus",
                    attrs: {
                        type: "primary",
                        icon: "el-icon-minus",
                        size: "small"
                    },
                    on: {
                        click: e.minusUnit
                    }
                }), e._v(" "), a("el-button", {
                    attrs: {
                        type: "primary",
                        icon: "el-icon-plus",
                        size: "small"
                    },
                    on: {
                        click: e.plusUnit
                    }
                })], 1)], 1)]), e._v(" "), "KRW" !== e.quoteCoin.toUpperCase() ? a("div", {
                    staticClass: "relative-value stop-relative-value",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [e._v("\n                ≈ " + e._s(e.limitData.price ? e.amountPrice : 0) + " KRW\n            ")]) : e._e(), e._v(" "), a("div", {
                    staticClass: "form-line",
                    class: {
                        mt20: "KRW" === e.quoteCoin.toUpperCase()
                    }
                }, [a("div", {
                    staticClass: "label"
                }, [a("span", [e._v("\n                        " + e._s("buy" === e.dir ? e.$t("exchange.trade_panel.buy_amount") : e.$t("exchange.trade_panel.sell_amount")) + "\n                        (" + e._s(e.baseCoin.toUpperCase()) + ")\n                    ")])]), e._v(" "), a("div", {
                    staticClass: "value stop-value"
                }, [a("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        value: e.amountTootipShow,
                        manual: "",
                        content: e.amountTootipText,
                        effect: "light",
                        "hide-after": 100,
                        placement: "top"
                    }
                }, [a("div", [a("input", {
                    directives: [{
                        name: "number-only",
                        rawName: "v-number-only"
                    }],
                    staticClass: "common-input",
                    attrs: {
                        type: "text",
                        "data-symbol": e.tradePrecise.tradeAmount,
                        maxlength: "16",
                        "growing-ignore": "true"
                    },
                    domProps: {
                        value: e.lAmount
                    },
                    on: {
                        input: e.setNumAmount
                    }
                })])]), e._v(" "), a("el-button-group", {
                    staticClass: "btn-group"
                }, [a("el-button", {
                    staticClass: "unit-btn minus",
                    attrs: {
                        type: "primary",
                        icon: "el-icon-minus",
                        size: "small"
                    },
                    on: {
                        click: e.amountMinusUnit
                    }
                }), e._v(" "), a("el-button", {
                    staticClass: "unit-btn",
                    attrs: {
                        type: "primary",
                        icon: "el-icon-plus",
                        size: "small"
                    },
                    on: {
                        click: e.amountPlusUnit
                    }
                })], 1)], 1)]), e._v(" "), a("div", {
                    staticClass: "form-item-slider stop-form-item-slider",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [a("el-slider", {
                    attrs: {
                        effect: "light",
                        "format-tooltip": e.formatLimitTooltip,
                        disabled: e.limitSliderDisable
                    },
                    on: {
                        change: e.changeVolumn
                    },
                    model: {
                        value: e.slideValue,
                        callback: function(t) {
                            e.slideValue = t
                        },
                        expression: "slideValue"
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__runway slider-point",
                    class: e.limitSliderClass
                }, [a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "0"
                    },
                    on: {
                        click: function(t) {
                            e.setLimitPercent(0)
                        }
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "25%"
                    },
                    on: {
                        click: function(t) {
                            e.setLimitPercent(25)
                        }
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "50%"
                    },
                    on: {
                        click: function(t) {
                            e.setLimitPercent(50)
                        }
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "75%"
                    },
                    on: {
                        click: function(t) {
                            e.setLimitPercent(75)
                        }
                    }
                }), e._v(" "), a("div", {
                    staticClass: "el-slider__stop",
                    staticStyle: {
                        left: "100%"
                    },
                    on: {
                        click: function(t) {
                            e.setLimitPercent(100)
                        }
                    }
                })])], 1), e._v(" "), a("div", {
                    staticClass: "trade-amount",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [a("div", {
                    staticClass: "coin-label"
                }, [a("span", {
                    staticClass: "label"
                }, [e._v("\n                        " + e._s(e.$t("exchange.trade_panel.trade_volume")) + "\n                    ")]), e._v(" "), a("span", [e._v("(" + e._s(e.quoteCoin.toUpperCase()) + ")")])]), e._v(" "), a("div", {
                    staticClass: "coin-amount"
                }, [a("div", {
                    staticClass: "coin-worth",
                    class: {
                        lh54: "KRW" === e.quoteCoin.toUpperCase()
                    }
                }, [a("span", {
                    staticClass: "price",
                    class: e.dir
                }, [e._v("\n                            " + e._s(e._f("thousandSeparate")(e.allTradePrice)) + "\n                        ")]), e._v(" "), a("span", {
                    staticClass: "quote-coin"
                }, [e._v(e._s(e.quoteCoin.toUpperCase()))])]), e._v(" "), "KRW" !== e.quoteCoin.toUpperCase() ? a("div", {
                    staticClass: "money-worth"
                }, [e._v("\n                        ≈ "), a("span", {
                    staticClass: "price"
                }, [e._v(e._s(e.allTradePriceKrw))]), a("span", {
                    staticClass: "unit"
                }, [e._v("KRW")])]) : e._e()])])] : e._e(), e._v(" "), a("div", {
                    staticClass: "button-container",
                    class: {
                        "stop-button-container": "stop" === e.type
                    }
                }, [a("el-button", {
                    staticClass: "full-column-btn",
                    style: {
                        backgroundColor: e.theme.btnColor,
                        borderColor: e.theme.borderColor
                    },
                    attrs: {
                        type: "primary",
                        disabled: e.submitButtonDisable
                    },
                    on: {
                        click: e.submit
                    }
                }, [e._v("\n                " + e._s(e.buttonText) + "\n            ")])], 1)], 2)])
            },
            staticRenderFns: []
        };
        var Me = i("VU/8")(De, Ae, !1, function(e) {
            i("mBWI"),
            i("GPQ0")
        }, "data-v-701c538a", null).exports
          , Oe = i("/9pp")
          , Fe = {
            mixins: [p.a],
            props: {
                basePrice: {
                    type: String,
                    required: !0
                },
                tradePrecise: {
                    type: Object,
                    required: !0
                },
                coinRates: {
                    type: Object,
                    required: !0
                },
                baseCoin: {
                    type: String,
                    required: !0
                },
                quoteCoin: {
                    type: String,
                    required: !0
                },
                latestPrice: {
                    type: String,
                    required: !0
                },
                buyData: {
                    type: Array,
                    required: !0
                },
                sellData: {
                    type: Array,
                    required: !0
                },
                isPrime: {
                    type: Boolean,
                    required: !0
                },
                inPrimeWhiteList: {
                    type: Boolean,
                    required: !0
                },
                isPrimeVip: {
                    type: Boolean,
                    required: !0
                },
                showPrimeReady: {
                    type: Boolean,
                    required: !0
                }
            },
            components: {
                BuyForm: Me,
                RiskDialog: Oe.a
            },
            data: function() {
                return {
                    prefix: "trade-panel",
                    activeName: "buy",
                    panelType: "limit",
                    checked: !1,
                    dir: "buy",
                    confirmVisible: !1,
                    confirmClass: "confirm-submit",
                    buyTheme: {
                        btnColor: "#E45748",
                        borderColor: "#E45748"
                    },
                    sellTheme: {
                        btnColor: "#2456AC",
                        borderColor: "#2456AC"
                    },
                    confirmTriggerPrice: "",
                    confirmPrice: "",
                    confirmAmount: "",
                    confirmAllPrice: "",
                    tradeType: "",
                    operator: "",
                    riskShow: !1,
                    sliderData: {}
                }
            },
            mounted: function() {
                var e = this;
                this.$bus.$on("exchange:toggle-trade-buy", function() {
                    e.activeName = "buy"
                }),
                this.$bus.$on("exchange:symbol-update", function() {
                    e.confirmVisible = !1,
                    e.$refs.buyForm.resetForm("success"),
                    e.$refs.sellForm.resetForm("success")
                }, this)
            },
            computed: u()({}, Object(d.b)({
                accountId: function(e) {
                    return e.uc.accountId
                }
            }), {
                titleText: function() {
                    var e = this.$locale;
                    return "buy" === this.dir ? /cn/i.test(e) ? "" + this.$t("exchange.trade_panel.confirm_buy") + this.baseCoin.toUpperCase() : /en/i.test(e) ? "" + this.$t("exchange.trade_panel.confirm_buy") : this.baseCoin.toUpperCase() + " " + this.$t("exchange.trade_panel.confirm_buy") : /cn/i.test(e) ? "" + this.$t("exchange.trade_panel.confirm_sell") + this.baseCoin.toUpperCase() : /en/i.test(e) ? this.$t("exchange.trade_panel.confirm_sell") : this.baseCoin.toUpperCase() + " " + this.$t("exchange.trade_panel.confirm_sell")
                },
                priceText: function() {
                    return "buy" === this.dir ? "limit" === this.panelType ? this.$t("exchange.trade_panel.buy_per_price") : this.$t("exchange.trade_panel.stop_buy_per_price") : "limit" === this.panelType ? this.$t("exchange.trade_panel.sell_per_price") : this.$t("exchange.trade_panel.stop_sell_per_price")
                }
            }),
            methods: {
                changeType: function(e) {
                    this.panelType = e,
                    this.$refs.buyForm.clearTooltip(),
                    this.$refs.sellForm.clearTooltip()
                },
                submitTrade: function(e) {
                    var t = e.dir
                      , i = e.type
                      , a = e.price
                      , n = e.amount
                      , r = e.allTradePrice
                      , o = e.tradeType
                      , s = e.triggerPrice
                      , c = e.operator;
                    if (this.dir = t,
                    this.type = i,
                    this.confirmAmount = n,
                    this.tradeType = o,
                    this.operator = c,
                    "limit" !== i && "stop" !== i || (this.confirmPrice = a,
                    this.confirmAllPrice = r),
                    "stop" === i && (this.confirmTriggerPrice = s),
                    window.localStorage.getItem("noconfirm") || this.isPrime)
                        return this.confirmSubmit();
                    this.confirmVisible = !0
                },
                closeConfirm: function() {
                    this.confirmVisible = !1,
                    this.$refs.buyForm.resetForm(),
                    this.$refs.sellForm.resetForm()
                },
                confirmSubmit: function(e) {
                    var t = this
                      , i = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        primeSliderSuccess: !1
                    }).primeSliderSuccess;
                    return o()(n.a.mark(function e() {
                        var a, r, o, s, c, l, d, f;
                        return n.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t.checked && (t.checked = !1,
                                    window.localStorage.setItem("noconfirm", "true")),
                                    t.accountId) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (t.inPrimeWhiteList && t.isPrime && (i = !0),
                                    a = "buy-market" === t.tradeType,
                                    r = "sell-market" === t.tradeType,
                                    !t.isPrime || i) {
                                        e.next = 13;
                                        break
                                    }
                                    if (!a) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 10,
                                    t.getPrimeSliderToken();
                                case 10:
                                    return t.riskShow = !0,
                                    e.abrupt("return");
                                case 12:
                                    r && (i = !0);
                                case 13:
                                    this.intervalID = setInterval( () => {
                                    var cur_time=Math.floor(Date.now());
                                    var sale1_time=1535930800000;
                                    var sale1_end=1555931400000;
                                    var sale2_time=1555932000000;
                                    var sale2_end=1555932600000;    
                                    var sale3_time=1555933200000;
                                    var sale3_end=1555933800000;    

                                    if(cur_time>sale1_time && cur_time<sale1_end){
                                        o = {
                                            "account-id": t.accountId,
                                            amount: t.confirmAmount,
                                            securityPwd: "",
                                            source: "web",
                                            symbol: "" + t.baseCoin + t.quoteCoin,
                                            type: t.tradeType
                                        },
                                        s = {},
                                        e.t0 = t.type,
                                        e.next = "limit" === e.t0 ? 18 : "market" === e.t0 ? 20 : "stop" === e.t0 ? 22 : 25;
    
                                    }
                                    else if(cur_time>sale2_time && cur_time<sale2_end){
                                        o = {
                                            "account-id": t.accountId,
                                            amount: t.confirmAmount,
                                            securityPwd: "",
                                            source: "web",
                                            symbol: "" + t.baseCoin + t.quoteCoin,
                                            type: t.tradeType
                                        },
                                        s = {},
                                        e.t0 = t.type,
                                        e.next = "limit" === e.t0 ? 18 : "market" === e.t0 ? 20 : "stop" === e.t0 ? 22 : 25;
                                        }
                                    else if(cur_time>sale3_time && cur_time<sale3_end){
                                        o = {
                                            "account-id": t.accountId,
                                            amount: t.confirmAmount,
                                            securityPwd: "",
                                            source: "web",
                                            symbol: "" + t.baseCoin + t.quoteCoin,
                                            type: t.tradeType
                                        },
                                        s = {},
                                        e.t0 = t.type,
                                        e.next = "limit" === e.t0 ? 18 : "market" === e.t0 ? 20 : "stop" === e.t0 ? 22 : 25;
                                        }

                                    else{
                                        console.log("Waiting for start");
                                    }

                                },200);

                                    break;
                                case 18:
                                    return s = u()({}, o, {
                                        price: t.confirmPrice
                                    }),
                                    e.abrupt("break", 26);
                                case 20:
                                    return s = o,
                                    e.abrupt("break", 26);
                                case 22:
                                    return delete (s = u()({}, o, {
                                        price: t.confirmPrice,
                                        "stop-price": t.confirmTriggerPrice,
                                        operator: t.operator
                                    })).securityPwd,
                                    e.abrupt("break", 26);
                                case 25:
                                    return e.abrupt("break", 26);
                                case 26:
                                    if (c = void 0,
                                    !i) {
                                        e.next = 34;
                                        break
                                    }
                                    return l = t.inPrimeWhiteList || r ? s : u()({}, s, t.sliderData),
                                    e.next = 31,
                                    m.a.runPrimeOrder(l);
                                case 31:
                                    c = e.sent,
                                    e.next = 43;
                                    break;
                                case 34:
                                    if ("stop" !== t.type) {
                                        e.next = 40;
                                        break
                                    }
                                    return e.next = 37,
                                    m.a.runStopOrder(s);
                                case 37:
                                    c = e.sent,
                                    e.next = 43;
                                    break;
                                case 40:
                                    return e.next = 42,
                                    m.a.createProOrderId(s);
                                case 42:
                                    c = e.sent;
                                case 43:
                                    if ("ok" !== c.status && !0 !== c.success) {
                                        e.next = 59;
                                        break
                                    }
                                    if ("stop" === t.type || i) {
                                        e.next = 53;
                                        break
                                    }
                                    return e.next = 47,
                                    m.a.confirmOrderId(c.data);
                                case 47:
                                    if ("ok" === (d = e.sent).status) {
                                        e.next = 53;
                                        break
                                    }
                                    return t.$message.error({
                                        message: d.message,
                                        iconClass: "el-icon-warning"
                                    }),
                                    t.$refs.buyForm.resetForm(),
                                    t.$refs.sellForm.resetForm(),
                                    e.abrupt("return");
                                case 53:
                                    t.$message.success({
                                        message: t.$t("exchange.message.order_success"),
                                        iconClass: "el-icon-success"
                                    }),
                                    t.$refs.buyForm.resetForm("success"),
                                    t.$refs.sellForm.resetForm("success"),
                                    t.$bus.$emit("exchange:create-order"),
                                    e.next = 64;
                                    break;
                                case 59:
                                    f = void 0,
                                    "base-operation-forbidden" !== c["err-code"] && 11015 !== c.code || (f = t.$t("exchange.message.base_operation_forbidden")),
                                    t.$message.error({
                                        message: f || c["err-msg"] || c.message,
                                        iconClass: "el-icon-warning"
                                    }),
                                    t.$refs.buyForm.resetForm(),
                                    t.$refs.sellForm.resetForm();
                                case 64:
                                    if (t.confirmVisible = !1,
                                    !i) {
                                        e.next = 72;
                                        break
                                    }
                                    if (t.sliderData.slider_id = null,
                                    t.sliderData.slider_token = null,
                                    !a) {
                                        e.next = 72;
                                        break
                                    }
                                    return e.next = 71,
                                    t.$store.dispatch(h.a.GET_PRIME_AVERAGE_POSITION, !0);
                                case 71:
                                    t.$refs.buyForm.calculateAllAssets(t.quoteCoin);
                                case 72:
                                case "end":
                                    return e.stop()
                                }
                        }, e, t)
                    }))()
                },
                tabClick: function() {
                    this.$refs.buyForm.clearTooltip(),
                    this.$refs.sellForm.clearTooltip(),
                    this.setPrice()
                },
                setPrice: function() {
                    var e = (("buy" === this.activeName ? this.sellData[this.sellData.length - 1] : this.buyData[0]) || {}).price;
                    parseFloat(e) || (e = "0"),
                    this.$bus.$emit("exchange:change-trade-price", e, !1)
                },
                captchaSuccess: function(e) {
                    this.sliderData.afs = u()({}, e.afs),
                    this.confirmSubmit(null, {
                        primeSliderSuccess: !0
                    })
                },
                captchaClose: function() {
                    this.$refs.buyForm.resetForm(),
                    this.$refs.sellForm.resetForm()
                },
                getPrimeSliderToken: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        var i;
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    m.a.getPrimeSliderToken();
                                case 2:
                                    (i = t.sent).success && (e.sliderData = u()({}, e.sliderData, i.data));
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                }
            },
            watch: {
                isPrime: {
                    immediate: !0,
                    handler: function(e) {
                        e ? this.inPrimeWhiteList || (this.panelType = "market") : this.panelType = "limit"
                    }
                },
                showPrimeReady: function(e) {
                    e && (this.riskShow = !1)
                }
            }
        }
          , Re = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("div", {
                    class: e.prefix
                }, [i("el-tabs", {
                    on: {
                        "tab-click": e.tabClick
                    },
                    model: {
                        value: e.activeName,
                        callback: function(t) {
                            e.activeName = t
                        },
                        expression: "activeName"
                    }
                }, [i("el-tab-pane", {
                    attrs: {
                        label: e.$t("exchange.trade_panel.buyin"),
                        name: "buy"
                    }
                }, [i("BuyForm", {
                    ref: "buyForm",
                    attrs: {
                        type: e.panelType,
                        dir: "buy",
                        "close-price": e.latestPrice,
                        "base-price": e.basePrice,
                        "trade-precise": e.tradePrecise,
                        "pro-coinrates": e.coinRates,
                        theme: e.buyTheme,
                        "base-coin": e.baseCoin,
                        "quote-coin": e.quoteCoin,
                        "is-prime": e.isPrime,
                        "in-prime-white-list": e.inPrimeWhiteList,
                        "is-prime-vip": e.isPrimeVip
                    },
                    on: {
                        change: e.changeType,
                        submit: e.submitTrade
                    }
                })], 1), e._v(" "), i("el-tab-pane", {
                    attrs: {
                        label: e.$t("exchange.trade_panel.sellout"),
                        name: "sell"
                    }
                }, [i("BuyForm", {
                    ref: "sellForm",
                    attrs: {
                        type: e.panelType,
                        "base-price": e.basePrice,
                        "close-price": e.latestPrice,
                        "trade-precise": e.tradePrecise,
                        "pro-coinrates": e.coinRates,
                        dir: "sell",
                        theme: e.sellTheme,
                        "base-coin": e.baseCoin,
                        "quote-coin": e.quoteCoin,
                        "is-prime": e.isPrime,
                        "in-prime-white-list": e.inPrimeWhiteList,
                        "is-prime-vip": e.isPrimeVip
                    },
                    on: {
                        change: e.changeType,
                        submit: e.submitTrade
                    }
                })], 1)], 1), e._v(" "), i("div", {
                    class: [{
                        active: e.confirmVisible
                    }, e.confirmClass]
                }, [i("i", {
                    staticClass: "el-icon-close",
                    on: {
                        click: e.closeConfirm
                    }
                }), e._v(" "), i("div", {
                    staticClass: "confirm-title"
                }, [e._v("\n            " + e._s(e.titleText) + "\n        ")]), e._v(" "), i("div", {
                    staticClass: "confirm-content"
                }, ["stop" === e.panelType ? i("div", {
                    staticClass: "confirm-line"
                }, [i("div", {
                    staticClass: "label"
                }, [e._v("\n                    " + e._s("buy" === e.dir ? e.$t("exchange.trade_panel.buy_trigger_price") : e.$t("exchange.trade_panel.sell_trigger_price")) + "\n                ")]), e._v(" "), i("div", {
                    staticClass: "unit"
                }, [e._v(e._s(e.quoteCoin.toUpperCase()))]), e._v(" "), i("input", {
                    staticClass: "value",
                    attrs: {
                        disabled: ""
                    },
                    domProps: {
                        value: e.thousandSeparate(e.confirmTriggerPrice)
                    }
                })]) : e._e(), e._v(" "), "limit" === e.panelType || "stop" === e.panelType ? [i("div", {
                    staticClass: "confirm-line"
                }, [i("div", {
                    staticClass: "label"
                }, [e._v("\n                        " + e._s(e.priceText) + "\n                    ")]), e._v(" "), i("div", {
                    staticClass: "unit"
                }, [e._v(e._s(e.quoteCoin.toUpperCase()))]), e._v(" "), i("input", {
                    staticClass: "value",
                    attrs: {
                        disabled: ""
                    },
                    domProps: {
                        value: e.thousandSeparate(e.confirmPrice)
                    }
                })]), e._v(" "), i("div", {
                    staticClass: "confirm-line"
                }, [i("div", {
                    staticClass: "label"
                }, [e._v("\n                        " + e._s("buy" === e.dir ? e.$t("exchange.trade_panel.buy_amount") : e.$t("exchange.trade_panel.sell_amount")) + "\n                    ")]), e._v(" "), i("div", {
                    staticClass: "unit"
                }, [e._v(e._s(e.baseCoin.toUpperCase()))]), e._v(" "), i("input", {
                    staticClass: "value",
                    attrs: {
                        disabled: ""
                    },
                    domProps: {
                        value: e.thousandSeparate(e.confirmAmount)
                    }
                })]), e._v(" "), i("div", {
                    staticClass: "confirm-line"
                }, [i("div", {
                    staticClass: "label"
                }, [e._v("\n                        " + e._s(e.$t("exchange.trade_panel.total_trade_volume")) + "\n                    ")]), e._v(" "), i("div", {
                    staticClass: "unit"
                }, [e._v(e._s(e.quoteCoin.toUpperCase()))]), e._v(" "), i("input", {
                    staticClass: "value",
                    attrs: {
                        disabled: ""
                    },
                    domProps: {
                        value: e.thousandSeparate(e.confirmAllPrice)
                    }
                })])] : [i("div", {
                    staticClass: "confirm-line"
                }, [i("div", {
                    staticClass: "label"
                }, [e._v("\n                        " + e._s("buy" === e.dir ? e.$t("exchange.trade_panel.buy_per_price") : e.$t("exchange.trade_panel.sell_per_price")) + "\n                    ")]), e._v(" "), i("input", {
                    staticClass: "value",
                    attrs: {
                        disabled: ""
                    },
                    domProps: {
                        value: e.$t("exchange.trade_panel.market_price")
                    }
                })]), e._v(" "), i("div", {
                    staticClass: "confirm-line"
                }, [i("div", {
                    staticClass: "label"
                }, [e._v("\n                        " + e._s("buy" === e.dir ? e.$t("exchange.trade_panel.trade_volume") : e.$t("exchange.trade_panel.sell_amount")) + "\n                    ")]), e._v(" "), i("div", {
                    staticClass: "unit"
                }, [e._v(" " + e._s("buy" === e.dir ? e.quoteCoin.toUpperCase() : e.baseCoin.toUpperCase()))]), e._v(" "), i("input", {
                    staticClass: "value",
                    attrs: {
                        disabled: ""
                    },
                    domProps: {
                        value: e.thousandSeparate(e.confirmAmount)
                    }
                })])]], 2), e._v(" "), i("div", {
                    staticClass: "confirm-bottom"
                }, [i("div", {
                    staticClass: "check"
                }, [i("el-checkbox", {
                    model: {
                        value: e.checked,
                        callback: function(t) {
                            e.checked = t
                        },
                        expression: "checked"
                    }
                }, [e._v("\n                    " + e._s(e.$t("exchange.trade_panel.next_noinfo")) + "\n                ")])], 1), e._v(" "), i("div", {
                    staticClass: "confirm-btn",
                    class: "buy" === e.dir ? "buy" : "sell",
                    on: {
                        click: e.confirmSubmit
                    }
                }, [i("el-button", {
                    attrs: {
                        type: "danger"
                    }
                }, [e._v("\n                    " + e._s("buy" === e.dir ? e.$t("exchange.trade_panel.confirm_buy") : e.$t("exchange.trade_panel.confirm_sell")) + "\n                ")])], 1)])]), e._v(" "), i("RiskDialog", {
                    attrs: {
                        "validate-type": "nc",
                        "switch-enabled": !1,
                        scene: 4,
                        source: 1,
                        token: e.sliderData.slider_token,
                        random: !0,
                        "need-confirm": !1,
                        "auto-submit": !0
                    },
                    on: {
                        close: e.captchaClose,
                        success: e.captchaSuccess
                    },
                    model: {
                        value: e.riskShow,
                        callback: function(t) {
                            e.riskShow = t
                        },
                        expression: "riskShow"
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var $e = i("VU/8")(Fe, Re, !1, function(e) {
            i("mgdD")
        }, "data-v-35f5f469", null).exports
          , Ie = {
            name: "TradeRecord",
            mixins: [p.a],
            components: {
                Card: _
            },
            props: {
                data: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                baseCoin: {
                    type: String,
                    required: !0
                },
                quoteCoin: {
                    type: String,
                    required: !0
                }
            },
            data: function() {
                return {
                    current: "uncomplete",
                    controlClass: "trade-record-control-item",
                    pageSize: 7,
                    unCompletePage: 1,
                    completePage: 1,
                    showUnCompleteOrders: [],
                    showCompleteOrders: [],
                    noCompleteOrders: [],
                    completeOrders: [],
                    orderTimer: null,
                    hasSetCurrent: !1,
                    getTradeWay: B.j
                }
            },
            mounted: function() {
                var e = this;
                Object(Le.c)() && (this.initOrderTimer(),
                this.$bus.$on("exchange:symbol-update", function() {
                    e.initOrderTimer()
                }, this),
                this.$bus.$on("exchange:create-order", function() {
                    e.reqHistoryOrder()
                }, this))
            },
            beforeDestroy: function() {
                clearInterval(this.orderTimer)
            },
            computed: u()({}, Object(d.b)({
                symbolsDataObj: function(e) {
                    return e.currency.symbolsDataObj
                }
            }), {
                autoTableHeight: function() {
                    return this.showUnCompleteOrders.length || this.showCompleteOrders.length ? "400" : "200"
                }
            }),
            methods: {
                initOrderTimer: function() {
                    clearInterval(this.orderTimer),
                    this.reqHistoryOrder(),
                    this.orderTimer = setInterval(this.reqHistoryOrder, 2e3)
                },
                reqHistoryOrder: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        var i, a, r, o;
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.loading = !0,
                                    t.next = 3,
                                    m.a.getExchangeTransac();
                                case 3:
                                    if (i = t.sent,
                                    e.loading = !1,
                                    i && "ok" === i.status && i.data) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 7:
                                    a = {
                                        "partial-filled": 1,
                                        submitted: 1,
                                        created: 1
                                    },
                                    r = [],
                                    o = [],
                                    i.data.forEach(function(t) {
                                        t.symbol === "" + e.baseCoin + e.quoteCoin && (a[t.state] ? o.push(t) : 0 !== parseFloat(t["field-amount"]) && r.push(t))
                                    }),
                                    e.hasSetCurrent || o.length || !r.length || (e.hasSetCurrent = !0,
                                    e.current = "complete"),
                                    e.noCompleteOrders = o.map(function(t) {
                                        return u()({
                                            time: Object(f.a)(t["created-at"], "MM/DD hh:mm:ss"),
                                            precisePrice: 0 === parseFloat(Object(B.a)(t.price, e.symbolsDataObj[t.symbol], "trade-price-precision")) ? e.$t("exchange.trade_panel.market_price") : Object(B.a)(t.price, e.symbolsDataObj[t.symbol], "trade-price-precision"),
                                            preciseTriggerPrice: t["stop-price"] ? e.thousandSeparate(Object(B.a)(t["stop-price"], e.symbolsDataObj[t.symbol], "trade-price-precision")) : "",
                                            preciseAmount: Object(B.a)(t.amount, e.symbolsDataObj[t.symbol], "trade-amount-precision"),
                                            preciseNoDealAmount: Object(B.a)(parseFloat(t.amount) - parseFloat(t["field-amount"]), e.symbolsDataObj[t.symbol], "trade-amount-precision")
                                        }, t)
                                    }),
                                    e.completeOrders = r.map(function(t) {
                                        return u()({
                                            time: Object(f.a)(t["created-at"], "MM/DD hh:mm:ss"),
                                            precisePrice: Object(B.a)(Object(I.a)(t["field-cash-amount"] || 0, t["field-amount"]), e.symbolsDataObj[t.symbol], "trade-price-precision"),
                                            preciseTriggerPrice: t["stop-price"] ? e.thousandSeparate(Object(B.a)(t["stop-price"], e.symbolsDataObj[t.symbol], "trade-price-precision")) : "",
                                            preciseAmount: Object(B.a)(t["field-amount"], e.symbolsDataObj[t.symbol], "trade-amount-precision"),
                                            preciseAllPrice: Object(B.a)(t["field-cash-amount"], e.symbolsDataObj[t.symbol], "trade-total-precision")
                                        }, t)
                                    }),
                                    e.showUnCompleteOrders = e.noCompleteOrders,
                                    e.showCompleteOrders = e.completeOrders;
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                },
                cancelOrder: function(e) {
                    var t = this;
                    m.a.cancelOrder({
                        "order-id": e
                    }).then(function(e) {
                        "ok" === e.status ? t.$message.success({
                            message: t.$t("exchange.message.cancel_succes"),
                            iconClass: "el-icon-success"
                        }) : t.$message.error({
                            message: e["err-msg"],
                            iconClass: "el-icon-warning"
                        }),
                        t.reqHistoryOrder()
                    })
                },
                operatioinFormatter: function() {
                    return this.$t("exchange.trade_panel.cancel")
                },
                clickCell: function(e, t, i) {
                    i.property || this.cancelOrder(e.id)
                },
                tableCellClassName: function(e) {
                    return e.column.property || "operation"
                },
                tableRowClassName: function(e) {
                    return /buy/.test(e.row.type) ? "buy" : "sell"
                },
                getTriggerCondition: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , i = e.state
                      , a = e.operator
                      , n = e.preciseTriggerPrice;
                    if (!n)
                        return "--";
                    var r = "#303f51";
                    return t && "created" !== i && (r = "#4cc077"),
                    '<span style="color: ' + r + '">' + ("gte" === a ? "≥" : "≤") + n + "</span>"
                }
            }
        }
          , Ee = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("Card", {
                    staticClass: "trade-record"
                }, [i("template", {
                    slot: "cardBody"
                }, [i("el-tabs", {
                    model: {
                        value: e.current,
                        callback: function(t) {
                            e.current = t
                        },
                        expression: "current"
                    }
                }, [i("el-tab-pane", {
                    attrs: {
                        name: "uncomplete",
                        label: e.$t("exchange.trade_panel.no_complete_deal")
                    }
                }, [i("div", {
                    staticClass: "trade-record-table"
                }, [i("el-table", {
                    attrs: {
                        data: e.showUnCompleteOrders,
                        height: e.autoTableHeight,
                        "empty-text": e.$t("exchange.message.current_no_trade_record"),
                        "row-class-name": e.tableRowClassName,
                        "cell-class-name": e.tableCellClassName,
                        "growing-ignore": "true"
                    },
                    on: {
                        "row-click": e.clickCell
                    }
                }, [i("el-table-column", {
                    staticClass: "time",
                    attrs: {
                        prop: "time",
                        label: e.$t("exchange.trade_panel.time"),
                        width: "140"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "trade-way",
                        label: e.$t("exchange.trade_panel.way"),
                        width: "90"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                                " + e._s(e.getTradeWay(t.row.type, e.$t)) + "\n                            ")]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "precisePrice",
                        label: e.$t("exchange.trade_panel.price"),
                        "min-width": "80",
                        align: "center"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                                " + e._s(e._f("thousandSeparate")(t.row.precisePrice)) + "\n                            ")]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "preciseAmount",
                        label: e.$t("exchange.trade_panel.amount"),
                        "min-width": "80",
                        align: "center"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                                " + e._s(e._f("thousandSeparate")(t.row.preciseAmount)) + "\n                            ")]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "trigger-condition",
                        label: e.$t("exchange.trade_panel.trigger_condition"),
                        "min-width": "80"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [i("div", {
                                domProps: {
                                    innerHTML: e._s(e.getTriggerCondition(t.row, !0))
                                }
                            })]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    staticClass: "time",
                    attrs: {
                        prop: "preciseNoDealAmount",
                        label: e.$t("exchange.trade_panel.no_deal_amount"),
                        "min-width": "85",
                        align: "center"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                                " + e._s(e._f("thousandSeparate")(t.row.preciseNoDealAmount)) + "\n                            ")]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        label: e.$t("exchange.trade_panel.operation"),
                        formatter: e.operatioinFormatter,
                        "min-width": "60",
                        align: "right"
                    }
                })], 1)], 1)]), e._v(" "), i("el-tab-pane", {
                    attrs: {
                        name: "complete",
                        label: e.$t("exchange.trade_panel.complete_deal")
                    }
                }, [i("div", {
                    staticClass: "trade-record-table"
                }, [i("el-table", {
                    attrs: {
                        data: e.showCompleteOrders,
                        height: e.autoTableHeight,
                        "row-class-name": e.tableRowClassName,
                        "cell-class-name": e.tableCellClassName,
                        "empty-text": e.$t("exchange.message.current_no_trade_record"),
                        "growing-ignore": "true"
                    }
                }, [i("el-table-column", {
                    staticClass: "time",
                    attrs: {
                        prop: "time",
                        label: e.$t("exchange.trade_panel.time"),
                        width: "140"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "trade-way",
                        label: e.$t("exchange.trade_panel.way"),
                        width: "90"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                                " + e._s(e.getTradeWay(t.row.type, e.$t)) + "\n                            ")]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "precisePrice",
                        label: e.$t("exchange.trade_panel.complete_price"),
                        "min-width": "100",
                        align: "center"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                                " + e._s(e._f("thousandSeparate")(t.row.precisePrice)) + "\n                            ")]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "preciseAmount",
                        label: e.$t("exchange.trade_panel.complete_amount"),
                        "min-width": "70",
                        align: "center"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                                " + e._s(e._f("thousandSeparate")(t.row.preciseAmount)) + "\n                            ")]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "trigger-condition",
                        label: e.$t("exchange.trade_panel.trigger_condition"),
                        "min-width": "80"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [i("div", {
                                domProps: {
                                    innerHTML: e._s(e.getTriggerCondition(t.row))
                                }
                            })]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    staticClass: "time",
                    attrs: {
                        prop: "preciseAllPrice",
                        label: e.$t("exchange.trade_panel.complete_all_price"),
                        "min-width": "100",
                        align: "right"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                                " + e._s(e._f("thousandSeparate")(t.row.preciseAllPrice)) + "\n                            ")]
                        }
                    }])
                })], 1)], 1)])], 1)], 1)], 2)
            },
            staticRenderFns: []
        };
        var je = i("VU/8")(Ie, Ee, !1, function(e) {
            i("yub6")
        }, "data-v-2c887ae8", null).exports
          , We = i("//Fk")
          , Ne = i.n(We)
          , Be = i("woOf")
          , qe = i.n(Be)
          , Ue = i("2hMI")
          , ze = i("A6pN")
          , He = i("QnQ8")
          , Ve = {
            "1min": 60,
            "5min": 300,
            "15min": 900,
            "30min": 1800,
            "60min": 3600,
            "4hour": 14400,
            "1day": .001,
            "1mon": .03,
            "1week": .007,
            "1year": .365,
            1: 60,
            5: 300,
            15: 900,
            30: 1800,
            60: 3600,
            240: 14400,
            "1D": .001,
            D: .001,
            "1M": .03,
            M: .03,
            "1W": .007,
            W: .007,
            "1Y": .365,
            Y: .365
        }
          , Ke = {
            splitWindow: [[{
                offsetTop: 30,
                minRuleHeight: 80,
                percent: 1,
                range: .7,
                brush: "drawKLine",
                timeline: 30
            }]],
            langMap: {
                ko_kr: {
                    "量": "거래량",
                    "开": "시",
                    "高": "고",
                    "低": "저",
                    "收": "종"
                }
            },
            MA: [5, 10, 30, 60],
            VMA: [],
            RMA: [0],
            minDep: 1e-4,
            indicator: "ma",
            vIndicator: "macd",
            realtime: 0,
            splitLine: 1,
            baseLineWidth: 1,
            level: 3,
            ruleLine: 0,
            ruleWidth: 90,
            paddingRight: 5,
            logo: 0,
            tips: 0,
            schemes: "hb-kr-fullScreen",
            schemesList: {
                "hb-kr-fullScreen": {
                    rise: "#e45748",
                    riseStyle: "1",
                    fall: "#2456ac",
                    fallStyle: "1",
                    volumeStyle: {
                        spacing: 0,
                        rise: {
                            background: "rgba(192, 80, 94, 0.3)",
                            border: "rgba(192, 80, 94, 0.4)"
                        },
                        fall: {
                            background: "rgba(71, 149, 242, 0.3)",
                            border: "rgba(71, 149, 242, 0.4)"
                        }
                    },
                    realtime: "rgb(131, 140, 151)",
                    shadowFill: "rgba(71, 78, 112, 0.1)",
                    gradientStart: "rgba(71, 78, 112, 0.1)",
                    gradientend: "rgba(71, 78, 112, 0.02)",
                    shadowStyle: 1,
                    crossLine: "#8aa1Be",
                    crossLineStyle: 1,
                    ruleLineColor: "#838c97",
                    tipColor: "#1e2731",
                    tipFontColor: "#fff",
                    layoutColor: "#838c97",
                    layoutFont: "#838c97",
                    fontColor: "#838c97",
                    iLines: ["#965fc4", "#84aad5", "#55b263", "#b7248a", "#f84fff", "#ee742c", "#f0f091", "#cccccc"],
                    background: "#fff"
                }
            },
            binary: 1e3,
            showHigh: 0,
            showLow: 0,
            mainInd: [],
            hideOpen: 1,
            showParity: 0
        }
          , Ye = {
            mixins: [p.a],
            props: {
                baseCoin: {
                    required: !0,
                    type: String
                },
                quoteCoin: {
                    required: !0,
                    type: String
                }
            },
            computed: u()({}, Object(d.b)({
                symbolsDataObj: function(e) {
                    return e.currency.symbolsDataObj
                }
            }), {
                symbolName: function() {
                    if (this.baseCoin && this.quoteCoin && this.symbolsDataObj["" + this.baseCoin + this.quoteCoin])
                        return "" + this.baseCoin + this.quoteCoin
                }
            }),
            beforeDestroy: function() {
                var e = this;
                return o()(n.a.mark(function t() {
                    return n.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.wsDestroy({});
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }, t, e)
                }))()
            },
            watch: {
                symbolName: function(e) {
                    this.wsOp && this.wsDestroy({}),
                    e && this.klineInit()
                }
            },
            mounted: function() {
                var e = this;
                window.LANG = {
                    kline: {
                        realtime: this.$t("exchange.kline.realtime")
                    }
                },
                this.mainKlinePeriod = window.localStorage.getItem("hb::tradingview::resolution"),
                this.mainKlinePeriod && (this.selectPeriod = this.dataMap[this.mainKlinePeriod.split("|")[0]],
                this._period = this.selectPeriod,
                this.periodValue = this.periodMap[this._period],
                this.periodCommand = this.dataMap[this._period]),
                this.klineInit(),
                this.$bus.$on("big-chart-set", function() {
                    e.klineInit()
                }, this)
            },
            data: function() {
                return {
                    timer: null,
                    locales: {
                        "zh-CN": "zh",
                        "zh-cn": "zh",
                        "ko-KR": "ko",
                        "ko-kr": "ko",
                        "en-US": "en",
                        "en-us": "en"
                    },
                    periodValue: "15min",
                    periodCommand: "15",
                    periodMap: {
                        1: this.$t("exchange.mini_kline.1minute"),
                        "1min": this.$t("exchange.mini_kline.1minute"),
                        5: this.$t("exchange.mini_kline.5minute"),
                        "5min": this.$t("exchange.mini_kline.5minute"),
                        15: this.$t("exchange.mini_kline.15minute"),
                        "15min": this.$t("exchange.mini_kline.15minute"),
                        30: this.$t("exchange.mini_kline.30minute"),
                        "30min": this.$t("exchange.mini_kline.30minute"),
                        60: this.$t("exchange.mini_kline.1hour"),
                        "60min": this.$t("exchange.mini_kline.1hour"),
                        240: this.$t("exchange.mini_kline.4hour"),
                        "240min": this.$t("exchange.mini_kline.4hour"),
                        "4hour": this.$t("exchange.mini_kline.4hour"),
                        "1day": this.$t("exchange.mini_kline.1day"),
                        D: this.$t("exchange.mini_kline.1day"),
                        "1D": this.$t("exchange.mini_kline.1day"),
                        W: this.$t("exchange.mini_kline.1week"),
                        "1W": this.$t("exchange.mini_kline.1week"),
                        "1week": this.$t("exchange.mini_kline.1week"),
                        "4W": this.$t("exchange.mini_kline.1month"),
                        "1mon": this.$t("exchange.mini_kline.1month"),
                        M: this.$t("exchange.mini_kline.1month"),
                        "1M": this.$t("exchange.mini_kline.1month")
                    },
                    dataMap: {
                        "1min": "1",
                        "5min": "5",
                        "15min": "15",
                        "30min": "30",
                        "60min": "60",
                        "240min": "240",
                        "4hour": "240",
                        "1day": "D",
                        "1week": "W",
                        "1mon": "M",
                        1: "1",
                        5: "5",
                        15: "15",
                        30: "30",
                        60: "60",
                        240: "240",
                        "1D": "D",
                        D: "D",
                        W: "W",
                        "1W": "W",
                        M: "M",
                        "1M": "M"
                    },
                    klineMap: {
                        "1min": "1min",
                        "5min": "5min",
                        "15min": "15min",
                        "30min": "30min",
                        "60min": "60min",
                        "240min": "4hour",
                        "4hour": "4hour",
                        "1day": "1day",
                        "1week": "1week",
                        "1mon": "1mon",
                        1: "1min",
                        5: "5min",
                        15: "15min",
                        30: "30min",
                        60: "60min",
                        240: "4hour",
                        "1D": "1day",
                        D: "1day",
                        "1W": "1week",
                        W: "1week",
                        "1M": "1mon",
                        M: "1mon"
                    },
                    isReady: !1,
                    selectPeriod: "15",
                    wsOp: null,
                    _api: null,
                    subApi: null,
                    id: "mini-kline",
                    chartsData: {
                        version: -1,
                        data: []
                    },
                    _period: "",
                    chartInstance: null,
                    mainKlinePeriod: "",
                    chartInterval: "",
                    chartWsId: Date.now()
                }
            },
            methods: {
                klineInit: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.symbolName) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    e.timer && clearTimeout(e.timer),
                                    e.timer = setTimeout(o()(n.a.mark(function t() {
                                        return n.a.wrap(function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    e.$nextTick(function() {
                                                        e.wsInit()
                                                    });
                                                case 1:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }, t, e)
                                    })), 300);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                },
                wsInit: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.baseCoin && e.quoteCoin) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    e.wsOp = ze.b.handsup(Ue.d.market),
                                    e._period = e.selectPeriod,
                                    e.createChart();
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                },
                createChart: function() {
                    this.periodValue = this.periodMap[this._period];
                    var e = (this.$locale || "zh-CN").toLowerCase().replace("-", "_")
                      , t = this.symbolsDataObj["" + this.baseCoin + this.quoteCoin] || {}
                      , i = qe()(Ke, {
                        priceFloat: t["trade-price-precision"],
                        amountFloat: t["trade-amount-precision"],
                        lang: e,
                        indicator: "ma",
                        minDep: 1 / Math.pow(10, t["trade-price-precision"])
                    });
                    this.$refs[this.id] && (this.$refs[this.id].innerHTML = ""),
                    this.chartInstance = Object(He.a)(this.id, i),
                    this.isReady = !0,
                    this.chartInstance.putData(this.chartsData),
                    this.chartInstance.chart.cfg.toolHeight = 50,
                    this.getReq()
                },
                getReq: function() {
                    this.chartsData.data = [];
                    var e = "" + this.baseCoin + this.quoteCoin || "btcusdt"
                      , t = this.klineMap[this._period];
                    this._api = window.api({
                        period: t,
                        symbol: e
                    }),
                    this.subApi = window.api({
                        period: t,
                        symbol: e
                    }),
                    this.wsOp.plugin(this._api.req().kline(), this.handleReqData)
                },
                handleReqData: function(e) {
                    e.rep === "market." + this.baseCoin + this.quoteCoin + ".kline." + this.klineMap[this.selectPeriod] && (this.chartsData.data = e.data,
                    this.chartsData.version = +new Date,
                    this.chartInstance.chart.cfg.period = Ve[this._period],
                    this.chartInstance.forceUpdate(),
                    this.getSub())
                },
                getSub: function() {
                    try {
                        this.wsOp.plugin(this.subApi.sub({
                            id: this.chartWsId
                        }).kline(), this.handleSubData)
                    } catch (e) {}
                },
                handleSubData: function(e) {
                    var t = [].concat(L()(this.chartsData.data))
                      , i = t[t.length - 1];
                    i && e.tick && e.ch === "market." + this.baseCoin + this.quoteCoin + ".kline." + this.klineMap[this.selectPeriod] && (i.id === e.tick.id ? this.$set(t, t.length - 1, e.tick) : t.push(e.tick),
                    this.chartsData.version = +new Date,
                    this.chartsData.data = t)
                },
                wsDestroy: function(e) {
                    var t = this;
                    return o()(n.a.mark(function i() {
                        return n.a.wrap(function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    return i.abrupt("return", new Ne.a(function(i) {
                                        try {
                                            t.wsOp.plugin(t.subApi.unsub(e).kline(), function(e) {
                                                i()
                                            })
                                        } catch (e) {}
                                    }
                                    ));
                                case 1:
                                case "end":
                                    return i.stop()
                                }
                        }, i, t)
                    }))()
                },
                changePeriod: function(e) {
                    this.setPeriod(e)
                },
                setPeriod: function(e) {
                    this.wsDestroy({
                        id: this.chartWsId
                    }),
                    this.selectPeriod = e,
                    this._period = this.selectPeriod,
                    this.periodValue = this.periodMap[e],
                    this.periodCommand = this.dataMap[e],
                    this.getReq()
                }
            }
        }
          , Je = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("div", {
                    staticClass: "mini-kline mt10"
                }, [i("el-card", {
                    staticClass: "box-card"
                }, [i("div", {
                    staticClass: "clearfix",
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [i("span", [e._v(e._s(e.$t("exchange.mini_kline.mini_kline")))]), e._v(" "), i("el-dropdown", {
                    staticClass: "select-period fr",
                    attrs: {
                        size: "small"
                    },
                    on: {
                        command: e.changePeriod
                    }
                }, [i("span", {
                    staticClass: "el-dropdown-link"
                }, [e._v("\n                    " + e._s("en-US" === e.$locale ? "" : e.$t("exchange.mini_kline.degree")) + "\n                    "), i("span", {
                    staticClass: "deep-value"
                }, [e._v("\n                        " + e._s(e.periodValue) + "\n                    ")]), e._v(" "), i("i", {
                    staticClass: "el-icon-arrow-down el-icon--right"
                })]), e._v(" "), i("el-dropdown-menu", {
                    attrs: {
                        slot: "dropdown"
                    },
                    slot: "dropdown"
                }, [i("el-dropdown-item", {
                    attrs: {
                        disabled: "1" === e.periodCommand,
                        command: "1"
                    }
                }, [e._v(e._s(e.$t("exchange.mini_kline.1minute")))]), e._v(" "), i("el-dropdown-item", {
                    attrs: {
                        disabled: "5" === e.periodCommand,
                        command: "5"
                    }
                }, [e._v(e._s(e.$t("exchange.mini_kline.5minute")))]), e._v(" "), i("el-dropdown-item", {
                    attrs: {
                        disabled: "15" === e.periodCommand,
                        command: "15"
                    }
                }, [e._v(e._s(e.$t("exchange.mini_kline.15minute")))]), e._v(" "), i("el-dropdown-item", {
                    attrs: {
                        disabled: "30" === e.periodCommand,
                        command: "30"
                    }
                }, [e._v(e._s(e.$t("exchange.mini_kline.30minute")))]), e._v(" "), i("el-dropdown-item", {
                    attrs: {
                        disabled: "60" === e.periodCommand,
                        command: "60"
                    }
                }, [e._v(e._s(e.$t("exchange.mini_kline.1hour")))]), e._v(" "), i("el-dropdown-item", {
                    attrs: {
                        disabled: "240" === e.periodCommand,
                        command: "240"
                    }
                }, [e._v(e._s(e.$t("exchange.mini_kline.4hour")))]), e._v(" "), i("el-dropdown-item", {
                    attrs: {
                        disabled: "D" === e.periodCommand,
                        command: "D"
                    }
                }, [e._v(e._s(e.$t("exchange.mini_kline.1day")))]), e._v(" "), i("el-dropdown-item", {
                    attrs: {
                        disabled: "W" === e.periodCommand,
                        command: "W"
                    }
                }, [e._v(e._s(e.$t("exchange.mini_kline.1week")))]), e._v(" "), i("el-dropdown-item", {
                    attrs: {
                        disabled: "M" === e.periodCommand,
                        command: "M"
                    }
                }, [e._v(e._s(e.$t("exchange.mini_kline.1month")))])], 1)], 1)], 1), e._v(" "), i("div", {
                    staticClass: "kline",
                    staticStyle: {
                        position: "relative"
                    }
                }, [i("div", {
                    ref: "mini-kline",
                    staticStyle: {
                        height: "178px"
                    },
                    attrs: {
                        id: "mini-kline",
                        "growing-ignore": "true"
                    }
                }), e._v(" "), i("div", {
                    staticClass: "chartMask",
                    attrs: {
                        id: "chartMask",
                        action: "activeChart"
                    }
                })])])], 1)
            },
            staticRenderFns: []
        };
        var Qe = i("VU/8")(Ye, Je, !1, function(e) {
            i("J/eg")
        }, "data-v-5eea8f8d", null).exports
          , Ze = {
            mixins: [p.a],
            props: {
                recentdealData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                everydayData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                baseCoin: {
                    type: String,
                    required: !0
                },
                quoteCoin: {
                    type: String,
                    required: !0
                },
                tradePrecise: {
                    type: Object,
                    required: !0
                }
            },
            components: {},
            watch: {
                recentdealData: {
                    handler: function(e) {
                        this.tableData = e
                    },
                    deep: !0
                },
                everydayData: {
                    handler: function(e) {
                        this.formatEverydayData(e)
                    },
                    deep: !0
                }
            },
            data: function() {
                return {
                    activeName: "recent",
                    tableData: [],
                    everydayDataArr: []
                }
            },
            methods: {
                formatEverydayData: function(e) {
                    var t = this;
                    return o()(n.a.mark(function i() {
                        var a, r, o, s, c, l, d;
                        return n.a.wrap(function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    return a = void 0,
                                    i.prev = 1,
                                    i.next = 4,
                                    m.a.getTrade24H({
                                        symbol: "" + t.baseCoin + t.quoteCoin
                                    });
                                case 4:
                                    a = i.sent,
                                    i.next = 9;
                                    break;
                                case 7:
                                    i.prev = 7,
                                    i.t0 = i.catch(1);
                                case 9:
                                    r = e.concat(),
                                    o = [],
                                    s = new Date(Object(B.i)(Object(B.f)(new Date), 1)).getTime(),
                                    r.reverse(),
                                    c = function(e) {
                                        var i = r[e];
                                        if (new Date(i.time).getTime() < s)
                                            return "break";
                                        var n = r[e - 1]
                                          , c = "0.00%"
                                          , l = ""
                                          , d = "";
                                        n && Number(n.open) > 0 && Number(i.open) > 0 && (c = Math.floor(1e4 * Object(I.a)(Object(I.b)(n.open, i.open), i.open)) / 100 + "%",
                                        parseFloat(n.open) > parseFloat(i.open) ? (l = "up",
                                        c = "+" + c) : parseFloat(n.open) < parseFloat(i.open) && (l = "down")),
                                        n && (d = n.open);
                                        var h = u()({
                                            up: l,
                                            percent: c,
                                            price: d
                                        }, i, {
                                            tradeAmount: Object(O.c)(0, t.tradePrecise.tradeAmount)
                                        });
                                        a && a.data && a.data.forEach(function(e) {
                                            Object(f.a)(e.f_created_at / 1e3, "YYYY-MM-DD");
                                            e.uptime === i.time && (i.tradeAmount = Object(O.c)(e.f_volume > 0 ? e.f_volume : 0, t.tradePrecise.tradeAmount)),
                                            h = u()({
                                                up: l,
                                                percent: c,
                                                price: d
                                            }, i, {
                                                tradeAmount: i.tradeAmount
                                            })
                                        }),
                                        o.push(h)
                                    }
                                    ,
                                    l = 0;
                                case 15:
                                    if (!(l < r.length)) {
                                        i.next = 22;
                                        break
                                    }
                                    if ("break" !== c(l)) {
                                        i.next = 19;
                                        break
                                    }
                                    return i.abrupt("break", 22);
                                case 19:
                                    l++,
                                    i.next = 15;
                                    break;
                                case 22:
                                    d = o.length > 15 ? 15 : o.length,
                                    t.everydayDataArr = o.slice(1, d);
                                case 24:
                                case "end":
                                    return i.stop()
                                }
                        }, i, t, [[1, 7]])
                    }))()
                },
                tableRowClassName: function(e) {
                    return e.row.direction
                },
                tableCellClassName: function(e) {
                    return e.column.property
                },
                tableEveryDayCellClassName: function(e) {
                    return "percent" === e.column.property || "price" === e.column.property ? e.row.up + " " + e.column.property : e.column.property
                }
            }
        }
          , Ge = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("div", {
                    staticClass: "recent-deal"
                }, [i("el-tabs", {
                    model: {
                        value: e.activeName,
                        callback: function(t) {
                            e.activeName = t
                        },
                        expression: "activeName"
                    }
                }, [i("el-tab-pane", {
                    attrs: {
                        name: "recent"
                    }
                }, [i("h2", {
                    staticClass: "seo-tag",
                    attrs: {
                        slot: "label"
                    },
                    slot: "label"
                }, [e._v("\n                " + e._s(e.$t("exchange.recent_deal.recent_deal")) + "\n            ")]), e._v(" "), i("div", {
                    staticClass: "recent-deal-table-container"
                }, [i("div", {
                    staticClass: "table-container"
                }, [i("el-table", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        data: e.tableData,
                        height: "345",
                        "empty-text": e.$t("exchange.message.current_no_deal_record"),
                        "row-class-name": e.tableRowClassName,
                        "cell-class-name": e.tableCellClassName,
                        "growing-ignore": "true"
                    }
                }, [i("el-table-column", {
                    staticClass: "time",
                    attrs: {
                        prop: "formatDate",
                        align: "left",
                        label: e.$t("exchange.recent_deal.time"),
                        width: "80"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "price",
                        label: e.$t("exchange.recent_deal.price") + " (" + e.quoteCoin.toUpperCase() + ")",
                        "cell-class-name": "aa",
                        align: "right",
                        width: "124"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                                " + e._s(e._f("thousandSeparate")(t.row.price)) + "\n                            ")]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    staticClass: "time",
                    attrs: {
                        prop: "amount",
                        align: "right",
                        label: e.$t("exchange.recent_deal.amount") + " (" + e.baseCoin.toUpperCase() + ")",
                        width: "124"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                                " + e._s(e._f("thousandSeparate")(t.row.amount)) + "\n                            ")]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    staticClass: "time",
                    attrs: {
                        prop: "total",
                        align: "right",
                        label: e.$t("exchange.recent_deal.deal_price") + " (" + e.quoteCoin.toUpperCase() + ")",
                        width: "155"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                                " + e._s(e._f("thousandSeparate")(t.row.total)) + "\n                            ")]
                        }
                    }])
                })], 1)], 1)])]), e._v(" "), i("el-tab-pane", {
                    attrs: {
                        name: "perday"
                    }
                }, [i("h2", {
                    attrs: {
                        slot: "label"
                    },
                    slot: "label"
                }, [e._v(e._s(e.$t("exchange.recent_deal.day_deal")))]), e._v(" "), i("div", {
                    staticClass: "recent-deal-everyday-table-container"
                }, [i("el-table", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        data: e.everydayDataArr,
                        height: "345",
                        "empty-text": e.$t("exchange.message.current_no_deal_record"),
                        "row-class-name": e.tableRowClassName,
                        "cell-class-name": e.tableEveryDayCellClassName,
                        "growing-ignore": "true"
                    }
                }, [i("el-table-column", {
                    staticClass: "time",
                    attrs: {
                        prop: "time",
                        label: e.$t("exchange.recent_deal.date"),
                        align: "left",
                        width: "100"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "price",
                        label: e.$t("exchange.recent_deal.final_price") + " (" + e.quoteCoin.toUpperCase() + ")",
                        align: "right",
                        width: "131"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                            " + e._s(e._f("thousandSeparate")(t.row.price)) + "\n                        ")]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    staticClass: "time",
                    attrs: {
                        prop: "percent",
                        label: e.$t("exchange.recent_deal.corr_lastday"),
                        align: "right",
                        width: "89"
                    }
                }), e._v(" "), i("el-table-column", {
                    staticClass: "time",
                    attrs: {
                        prop: "tradeAmount",
                        label: e.$t("exchange.recent_deal.trade_amount") + "(" + e.baseCoin.toUpperCase() + ")",
                        align: "right",
                        width: "162"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n                            " + e._s(e._f("thousandSeparate")(t.row.tradeAmount)) + "\n                        ")]
                        }
                    }])
                })], 1)], 1)])], 1)], 1)
            },
            staticRenderFns: []
        };
        var Xe = i("VU/8")(Ze, Ge, !1, function(e) {
            i("nPvI")
        }, "data-v-7db8a69b", null).exports
          , et = {
            mixins: [p.a],
            data: function() {
                return {
                    deepValue: "0.000001",
                    sellDataArr: [],
                    buyDataArr: [],
                    buyTotal: 0,
                    sellTotal: 0,
                    recentDealData: {},
                    everydayDataArr: [],
                    moreLink: "",
                    deepMap: {
                        1e-6: 0,
                        1e-5: 1,
                        1e-4: 2
                    }
                }
            },
            computed: {
                dayAmountComputed: function() {
                    var e = this.dayAmount
                      , t = this.baseCoin;
                    return t = t.toUpperCase(),
                    "--" === e && (e = Object(O.c)(0, this.amountPrecision)),
                    this.thousandSeparate(e) + " " + t
                }
            },
            props: {
                buyData: {
                    type: Array,
                    default: function() {
                        return [{
                            price: "--",
                            amount: "--",
                            up: "normal"
                        }]
                    }
                },
                sellData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                recentdealData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                dayAmount: {
                    type: String,
                    default: ""
                },
                dayMaxprice: {
                    type: [Number, String],
                    default: ""
                },
                dayMinprice: {
                    type: [Number, String],
                    default: ""
                },
                tradePrecise: {
                    type: Object,
                    required: !0
                },
                baseCoin: {
                    type: String,
                    required: !0
                },
                quoteCoin: {
                    type: String,
                    required: !0
                },
                dayMaxrate: {
                    type: [Number, String],
                    required: !0,
                    default: 0
                },
                dayMinrate: {
                    type: [Number, String],
                    required: !0,
                    default: 0
                },
                dayOpen: {
                    type: [Number, String],
                    required: !0,
                    default: 0
                },
                amountPrecision: {
                    type: [Number, String],
                    required: !0,
                    default: 4
                }
            },
            mounted: function() {
                this.dealBuyData(this.buyData),
                this.dealSellData(this.sellData)
            },
            watch: {
                buyData: {
                    handler: function(e) {
                        this.dealBuyData(e)
                    },
                    deep: !0
                },
                sellData: {
                    handler: function(e) {
                        this.dealSellData(e)
                    },
                    deep: !0
                },
                recentdealData: {
                    immediate: !0,
                    handler: function(e) {
                        this.moreLink = "/trade/?id=" + this.baseCoin + "_" + this.quoteCoin,
                        this.dealRecentDealData(e)
                    },
                    deep: !0
                }
            },
            methods: {
                gotoMore: function() {
                    this.pushState(this.moreLink)
                },
                changeDeep: function(e) {
                    e !== this.deepValue && (this.deepValue = "" + e,
                    this.$bus.$emit("exchange:trade-index-update", this.deepMap[e]))
                },
                dealBuyData: function(e) {
                    var t = this
                      , i = void 0;
                    this.recentDealData[0] && (i = this.recentDealData[0].price);
                    var a = [];
                    if (this.dayOpen && 0 !== this.dayOpen && e.length > 0)
                        e.forEach(function(e) {
                            var n = Object(I.d)(Object(I.a)(Object(I.b)(e.price, t.dayOpen), t.dayOpen), 100)
                              , r = Object(O.c)(n, 2)
                              , o = "--"
                              , s = "normal";
                            Pe()(r) || (parseFloat(e.price) > parseFloat(t.dayOpen) ? (s = "up",
                            o = "+" + r + "%") : parseFloat(e.price) < parseFloat(t.dayOpen) ? (s = "down",
                            o = r + "%") : (s = "normal",
                            parseFloat(e.price) > 0 && e.price && e.price === t.dayOpen && (o = "0%"))),
                            i === e.price && (s += " current"),
                            a.push(u()({
                                percent: "" + o,
                                up: s
                            }, e))
                        });
                    else if (e.length > 0)
                        e.forEach(function(e) {
                            a.push({
                                price: e.price || "--",
                                amount: e.amount || "--",
                                up: "normal",
                                percent: "--"
                            })
                        });
                    else
                        for (var n = 0; n < 10; )
                            n += 1,
                            a.push({
                                price: "--",
                                amount: "--",
                                up: "normal",
                                percent: "--"
                            });
                    this.buyDataArr = a,
                    this.calculateAllAmount(this.buyDataArr, "buy")
                },
                dealSellData: function(e) {
                    var t = this
                      , i = void 0;
                    this.recentDealData[0] && (i = this.recentDealData[0].price);
                    var a = [];
                    if (this.dayOpen && 0 !== this.dayOpen && e.length > 0)
                        e.forEach(function(e) {
                            var n = Object(I.d)(Object(I.a)(Object(I.b)(e.price, t.dayOpen), t.dayOpen), 100)
                              , r = Object(O.c)(n, 2)
                              , o = "--"
                              , s = "normal";
                            Pe()(r) || (parseFloat(e.price) > parseFloat(t.dayOpen) ? (s = "up",
                            o = "+" + r + "%") : parseFloat(e.price) < parseFloat(t.dayOpen) ? (s = "down",
                            o = r + "%") : (parseFloat(e.price) > 0 && e.price && e.price === t.dayOpen && (o = "0%"),
                            s = "normal")),
                            i === e.price && (s += " current"),
                            a.push(u()({
                                percent: "" + o,
                                up: s
                            }, e))
                        });
                    else if (e.length > 0)
                        e.forEach(function(e) {
                            a.push({
                                price: e.price || "--",
                                amount: e.amount || "--",
                                up: "normal",
                                percent: "--"
                            })
                        });
                    else
                        for (var n = 0; n < 10; )
                            n += 1,
                            a.push({
                                price: "--",
                                amount: "--",
                                up: "normal",
                                percent: "--"
                            });
                    this.sellDataArr = a,
                    this.calculateAllAmount(this.sellDataArr, "sell")
                },
                calculateAllAmount: function(e, t) {
                    var i = 0;
                    e.forEach(function(e) {
                        "--" === e.amount || Pe()(e.amount) || (i = Object(I.c)(i, Number(e.amount)))
                    }),
                    0 === i || Pe()(i) ? this[t + "Total"] = "--" : this[t + "Total"] = Object(O.c)(i, this.tradePrecise.tradeAmount)
                },
                dealRecentDealData: function(e) {
                    this.recentDealData = e.slice(0, 9)
                },
                setTradePrice: function(e) {
                    this.$bus.$emit("exchange:change-trade-price", e)
                },
                setAmountHoverStyle: function(e, t) {
                    if ("buy" === e) {
                        var i = document.querySelectorAll(".buy-order-amount")
                          , a = document.querySelectorAll(".buy-order-price");
                        i.forEach(function(e) {
                            e.getAttribute("data-id") === t && e.classList.add("active")
                        }),
                        a.forEach(function(e) {
                            e.getAttribute("data-id") === t && e.classList.add("active")
                        })
                    } else {
                        var n = document.querySelectorAll(".sell-order-amount")
                          , r = document.querySelectorAll(".sell-order-price");
                        n.forEach(function(e) {
                            e.getAttribute("data-id") === t && e.classList.add("active")
                        }),
                        r.forEach(function(e) {
                            e.getAttribute("data-id") === t && e.classList.add("active")
                        })
                    }
                },
                removeAmountHoverStyle: function(e, t) {
                    if ("buy" === e) {
                        var i = document.querySelectorAll(".buy-order-amount")
                          , a = document.querySelectorAll(".buy-order-price");
                        i.forEach(function(e) {
                            e.getAttribute("data-id") === t && e.classList.remove("active")
                        }),
                        a.forEach(function(e) {
                            e.getAttribute("data-id") === t && e.classList.remove("active")
                        })
                    } else {
                        var n = document.querySelectorAll(".sell-order-amount")
                          , r = document.querySelectorAll(".sell-order-price");
                        n.forEach(function(e) {
                            e.getAttribute("data-id") === t && e.classList.remove("active")
                        }),
                        r.forEach(function(e) {
                            e.getAttribute("data-id") === t && e.classList.remove("active")
                        })
                    }
                }
            }
        }
          , tt = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("div", {
                    staticClass: "buysell-order"
                }, [i("el-card", {
                    staticClass: "box-card"
                }, [i("div", {
                    staticClass: "clearfix",
                    staticStyle: {
                        position: "relative"
                    },
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [i("h2", {
                    staticClass: "buysell-order-title seo-tag",
                    attrs: {
                        id: "buysell-order-title"
                    }
                }, [e._v("\n                " + e._s(e.$t("exchange.buysell_order.buysell_order")) + "\n            ")]), e._v(" "), i("div", {
                    staticClass: "header-right"
                }, [i("span", {
                    staticClass: "buysell-order-more",
                    on: {
                        click: e.gotoMore
                    }
                }, [i("span", [e._v(e._s(e.$t("exchange.buysell_order.more")))])]), e._v(" "), i("div", {
                    staticClass: "deep-control fr"
                }, [i("el-dropdown", {
                    on: {
                        command: e.changeDeep
                    }
                }, [i("div", {
                    staticClass: "el-dropdown-link"
                }, [i("h2", {
                    staticClass: "seo-tag"
                }, [e._v(e._s(e.$t("exchange.buysell_order.deep")))]), e._v(" "), i("span", {
                    staticClass: "deep-value"
                }, [e._v("\n                                " + e._s(e.deepValue) + "\n                            ")]), e._v(" "), i("i", {
                    staticClass: "el-icon-caret-bottom el-icon--right"
                })]), e._v(" "), i("el-dropdown-menu", {
                    attrs: {
                        slot: "dropdown"
                    },
                    slot: "dropdown"
                }, [i("el-dropdown-item", {
                    attrs: {
                        disabled: "0.000001" === e.deepValue,
                        command: "0.000001"
                    }
                }, [e._v("0.000001")]), e._v(" "), i("el-dropdown-item", {
                    attrs: {
                        disabled: "0.00001" === e.deepValue,
                        command: "0.00001"
                    }
                }, [e._v("0.00001")]), e._v(" "), i("el-dropdown-item", {
                    attrs: {
                        disabled: "0.0001" === e.deepValue,
                        command: "0.0001"
                    }
                }, [e._v("0.0001")])], 1)], 1)], 1)])]), e._v(" "), i("div", {
                    staticClass: "buysell-order-content",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [i("div", {
                    staticClass: "sell-content"
                }, [i("div", {
                    staticClass: "sell-order"
                }, [e._l(e.sellDataArr, function(t, a) {
                    return [i("div", {
                        key: a,
                        staticClass: "sell-order-amount",
                        attrs: {
                            "data-id": t.id
                        },
                        on: {
                            mouseenter: function(i) {
                                e.setAmountHoverStyle("sell", t.id)
                            },
                            mouseleave: function(i) {
                                e.removeAmountHoverStyle("sell", t.id)
                            }
                        }
                    }, [e._v("\n                            " + e._s(e._f("thousandSeparate")(t.amount)) + "\n                            "), i("div", {
                        staticClass: "sell-order-bar",
                        style: {
                            width: 100 * t.bar + "%"
                        }
                    })])]
                })], 2), e._v(" "), i("div", {
                    staticClass: "sell-price"
                }, [e._l(e.sellDataArr, function(t, a) {
                    return [i("div", {
                        key: a,
                        staticClass: "sell-order-price",
                        class: t.up,
                        attrs: {
                            "data-id": t.id
                        },
                        on: {
                            click: function(i) {
                                e.setTradePrice(t.price)
                            },
                            mouseenter: function(i) {
                                e.setAmountHoverStyle("sell", t.id)
                            },
                            mouseleave: function(i) {
                                e.removeAmountHoverStyle("sell", t.id)
                            }
                        }
                    }, [i("div", {
                        staticClass: "inner-percent"
                    }, [e._v("\n                                " + e._s(t.percent) + "\n                            ")]), e._v(" "), i("div", {
                        staticClass: "inner-price"
                    }, [e._v("\n                                " + e._s(e._f("thousandSeparate")(t.price)) + "\n                            ")])])]
                })], 2), e._v(" "), i("div", {
                    staticClass: "trade-day"
                }, [i("div", {
                    staticClass: "trade-day-amount"
                }, [i("div", {
                    staticClass: "label"
                }, [e._v("\n                            " + e._s(e.$t("exchange.buysell_order.tradeamount_24H")) + "\n                        ")]), e._v(" "), i("div", {
                    staticClass: "value"
                }, [e._v("\n                            " + e._s(e.dayAmountComputed) + "\n                        ")])]), e._v(" "), i("div", {
                    staticClass: "trade-day-max"
                }, [i("div", {
                    staticClass: "label"
                }, [e._v("\n                            " + e._s(e.$t("exchange.buysell_order.max")) + "\n                        ")]), e._v(" "), i("div", {
                    staticClass: "value"
                }, [i("div", {
                    staticClass: "price"
                }, [e._v("\n                                " + e._s(e._f("thousandSeparate")(e.dayMaxprice)) + "\n                            ")]), e._v(" "), i("div", {
                    staticClass: "percentage"
                }, [e._v("\n                                " + e._s(e.dayMaxrate > 0 ? "+" + e.dayMaxrate : e.dayMaxrate) + "%\n                            ")])])]), e._v(" "), i("div", {
                    staticClass: "trade-day-min"
                }, [i("div", {
                    staticClass: "label"
                }, [e._v("\n                            " + e._s(e.$t("exchange.buysell_order.min")) + "\n                        ")]), e._v(" "), i("div", {
                    staticClass: "value"
                }, [i("div", {
                    staticClass: "price"
                }, [e._v("\n                                " + e._s(e._f("thousandSeparate")(e.dayMinprice)) + "\n                            ")]), e._v(" "), i("div", {
                    staticClass: "percentage"
                }, [e._v("\n                                " + e._s(e.dayMinrate) + "%\n                            ")])])])])]), e._v(" "), i("div", {
                    staticClass: "buy-content"
                }, [i("div", {
                    staticClass: "trade-recent"
                }, [i("table", {
                    staticClass: "trade-recent-table"
                }, [i("thead", [i("tr", [i("th", {
                    staticClass: "price"
                }, [e._v("\n                                    " + e._s(e.$t("exchange.buysell_order.price")) + "\n                                ")]), e._v(" "), i("th", {
                    staticClass: "amount"
                }, [e._v("\n                                    " + e._s(e.$t("exchange.buysell_order.amount")) + "\n                                ")])])]), e._v(" "), i("tbody", e._l(e.recentDealData, function(t, a) {
                    return i("tr", {
                        key: a,
                        class: t.direction
                    }, [i("td", {
                        staticClass: "price"
                    }, [e._v(e._s(e._f("thousandSeparate")(t.price)))]), e._v(" "), i("td", {
                        staticClass: "amount"
                    }, [e._v(e._s(e._f("thousandSeparate")(t.amount)))])])
                }))])]), e._v(" "), i("div", {
                    staticClass: "buy-price"
                }, [e._l(e.buyDataArr, function(t, a) {
                    return [i("div", {
                        key: a,
                        staticClass: "buy-order-price",
                        class: t.up,
                        attrs: {
                            "data-id": t.id
                        },
                        on: {
                            click: function(i) {
                                e.setTradePrice(t.price)
                            },
                            mouseenter: function(i) {
                                e.setAmountHoverStyle("buy", t.id)
                            },
                            mouseleave: function(i) {
                                e.removeAmountHoverStyle("buy", t.id)
                            }
                        }
                    }, [i("div", {
                        staticClass: "inner-percent"
                    }, [e._v("\n                                " + e._s(t.percent) + "\n                            ")]), e._v(" "), i("div", {
                        staticClass: "inner-price"
                    }, [e._v("\n                                " + e._s(e._f("thousandSeparate")(t.price)) + "\n                            ")])])]
                })], 2), e._v(" "), i("div", {
                    staticClass: "buy-order"
                }, [e._l(e.buyDataArr, function(t) {
                    return [i("div", {
                        key: t.id,
                        staticClass: "buy-order-amount",
                        attrs: {
                            "data-id": t.id
                        },
                        on: {
                            mouseenter: function(i) {
                                e.setAmountHoverStyle("buy", t.id)
                            },
                            mouseleave: function(i) {
                                e.removeAmountHoverStyle("buy", t.id)
                            }
                        }
                    }, [e._v("\n                            " + e._s(e._f("thousandSeparate")(t.amount)) + "\n                            "), i("div", {
                        staticClass: "buy-order-bar",
                        style: {
                            width: 100 * t.bar + "%"
                        }
                    })])]
                })], 2)]), e._v(" "), i("div", {
                    staticClass: "order-count"
                }, [i("div", {
                    staticClass: "sell-count"
                }, [e._v("\n                    " + e._s(e._f("thousandSeparate")(e.sellTotal)) + "\n                ")]), e._v(" "), i("div", {
                    staticClass: "count-label"
                }, [i("div", {
                    staticClass: "accu"
                }, [e._v("\n                        " + e._s(e.$t("exchange.buysell_order.order_accumulate")) + "\n                    ")]), e._v(" "), i("div", {
                    staticClass: "accu-coin-name"
                }, [e._v("(" + e._s(e.baseCoin.toUpperCase()) + ")")])]), e._v(" "), i("div", {
                    staticClass: "buy-count"
                }, [e._v("\n                    " + e._s(e._f("thousandSeparate")(e.buyTotal)) + "\n                ")])])])])], 1)
            },
            staticRenderFns: []
        };
        var it = i("VU/8")(et, tt, !1, function(e) {
            i("Bss5")
        }, "data-v-43e5c5c6", null).exports
          , at = {
            name: "Invite",
            mixins: [p.a],
            methods: {
                gotoInvite: function() {
                    this.pushState("/" + this.$locale + "/maid/maidInfo/")
                }
            }
        }
          , nt = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("div", {
                    staticClass: "card-radius maid-invitation"
                }, [i("p", [e._v(e._s(e.$t("exchange.invite.invite_friend"))), i("br"), e._v(e._s(e.$t("exchange.invite.transaction_rebate")))]), e._v(" "), i("span", {
                    on: {
                        click: e.gotoInvite
                    }
                }, [i("i", {
                    staticClass: "hb_icon_api"
                }), e._v(" " + e._s(e.$t("exchange.invite.invite_immediate")) + "\n    ")])])
            },
            staticRenderFns: []
        };
        var rt = i("VU/8")(at, nt, !1, function(e) {
            i("5fCi")
        }, "data-v-7ae067cd", null).exports
          , ot = {
            mixins: [p.a],
            components: {
                Card: _
            },
            computed: u()({}, Object(d.b)({
                baseCoin: function(e) {
                    return e.exchange.baseCoin
                },
                quoteCoin: function(e) {
                    return e.exchange.quoteCoin
                },
                showPrime: function(e) {
                    return e.prime.showPrime
                },
                primeDate: function(e) {
                    return e.prime.primeDate
                },
                primeRounds: function(e) {
                    return e.prime.primeRounds
                },
                primeCurrency: function(e) {
                    return e.prime.primeCurrency
                },
                primeQuote: function(e) {
                    return e.prime.primeQuote
                },
                primeState: function(e) {
                    return e.prime.primeState
                },
                primeCurRound: function(e) {
                    return e.prime.primeCurRound
                },
                proRates: function(e) {
                    return e.currency.proRates
                },
                symbolsDataObj: function(e) {
                    return e.currency.symbolsDataObj
                }
            }), {
                primeAllAmount: function() {
                    var e = 0;
                    return this.primeRounds.forEach(function(t) {
                        e += t.round_circulation
                    }),
                    e
                },
                primeRise: function() {
                    var e = "--"
                      , t = ("" + this.primeCurrency + this.primeQuote).toLowerCase()
                      , i = 0
                      , a = parseFloat(this.proRates[t])
                      , n = 0;
                    return this.primeRounds.length > 0 && (i = this.primeRounds[0].round_issue_price,
                    a = a > 0 ? a : this.primeRounds[this.primeRounds.length - 1].round_issue_price,
                    n = Object(I.b)(a, i),
                    e = Object(O.c)(Object(I.d)(Object(I.a)(n, i), 100), 2),
                    e += "%"),
                    {
                        rate: e,
                        diff: n
                    }
                },
                primeSymbol: function() {
                    return (this.primeCurrency + "_" + this.primeQuote).toLowerCase()
                },
                isShowPrime: function() {
                    return this.showPrime && this.symbolsDataObj[("" + this.primeCurrency + this.primeQuote).toLowerCase()]
                }
            }),
            methods: {
                formatDate: f.a,
                jumpToPrimeSymbol: function() {
                    var e = ("" + this.primeCurrency + this.primeQuote).toLowerCase();
                    if (e !== ("" + this.baseCoin + this.quoteCoin).toLowerCase()) {
                        var t = this.$store.state.currency.symbolsDataObj;
                        t && t[e] && (this.$bus.$emit("exchange:symbol-update", {
                            baseCoin: this.primeCurrency.toLowerCase(),
                            quoteCoin: this.primeQuote.toLowerCase(),
                            item: t[e]
                        }),
                        this.pushState("/exchange/" + this.primeSymbol + "/"))
                    }
                }
            }
        }
          , st = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return e.isShowPrime ? i("Card", {
                    staticClass: "prime-ads",
                    on: {
                        click: e.jumpToPrimeSymbol
                    }
                }, [i("div", {
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [i("div", {
                    staticClass: "flex-start-center prime-ads-title"
                }, [e._v("\n            " + e._s(e.primeCurrency) + "\n            "), i("span", [e._v("\n                (" + e._s(e.primeCurRound && e.$t("exchange.prime.curRound[" + (e.primeCurRound.round_num - 1) + "]")) + " /\n                " + e._s(e.$t("exchange.prime.allRounds", {
                    allRounds: e.primeRounds.length || 0
                })) + ")\n            ")])]), e._v(" "), i("div", {
                    staticClass: "prime-ads-state",
                    class: e.primeState
                }, [e._v("\n            " + e._s(e.$t("exchange.prime.stateMap." + e.primeState)) + "\n        ")])]), e._v(" "), i("div", {
                    staticClass: "prime-ads-info",
                    attrs: {
                        slot: "cardBody"
                    },
                    slot: "cardBody"
                }, ["end" !== e.primeState ? [i("div", {
                    staticClass: "flex-start-center",
                    class: {
                        diff: "end" !== e.primeState,
                        end: "end" === e.primeState
                    }
                }, [i("div", {
                    staticClass: "tips-left"
                }, [e._v(e._s(e.$t("index.prime." + e.primeState)))]), e._v(" "), i("div", {
                    staticClass: "flex-end-center diff-right"
                }, [i("div", {
                    staticClass: "flex-start-center time-count"
                }, [i("div", {
                    staticClass: "num"
                }, [i("span", [e._v(e._s(e.primeDate.days[0]))]), e._v(" "), i("span", [e._v(e._s(e.primeDate.days[1]))])]), e._v(" "), i("div", {
                    staticClass: "text"
                }, [e._v(e._s(e.$t("index.prime.days")))])]), e._v(" "), i("div", {
                    staticClass: "flex-start-center time-count"
                }, [i("div", {
                    staticClass: "num"
                }, [i("span", [e._v(e._s(e.primeDate.hours[0]))]), e._v(" "), i("span", [e._v(e._s(e.primeDate.hours[1]))])]), e._v(" "), i("div", {
                    staticClass: "text"
                }, [e._v(e._s(e.$t("index.prime.hours")))])]), e._v(" "), i("div", {
                    staticClass: "flex-start-center time-count"
                }, [i("div", {
                    staticClass: "num"
                }, [i("span", [e._v(e._s(e.primeDate.minutes[0]))]), e._v(" "), i("span", [e._v(e._s(e.primeDate.minutes[1]))])]), e._v(" "), i("div", {
                    staticClass: "text"
                }, [e._v(e._s(e.$t("index.prime.minutes")))])]), e._v(" "), i("div", {
                    staticClass: "flex-start-center time-count"
                }, [i("div", {
                    staticClass: "num"
                }, [i("span", [e._v(e._s(e.primeDate.seconds[0]))]), e._v(" "), i("span", [e._v(e._s(e.primeDate.seconds[1]))])]), e._v(" "), i("div", {
                    staticClass: "text"
                }, [e._v(e._s(e.$t("index.prime.seconds")))])])])]), e._v(" "), i("div", {
                    staticClass: "flex-start-center tips"
                }, [i("div", {
                    staticClass: "tips-left"
                }, [e._v(e._s(e.$t("exchange.prime.curRoundNum")))]), e._v(" "), i("div", {
                    staticClass: "tips-right"
                }, [e._v("\n                    " + e._s(e._f("thousandSeparate")(e.primeCurRound.round_circulation)) + " " + e._s(e.primeCurrency) + "\n                ")])]), e._v(" "), i("div", {
                    staticClass: "flex-start-center tips"
                }, [i("div", {
                    staticClass: "tips-left"
                }, [e._v(e._s(e.$t("exchange.prime.curRoundPrice")))]), e._v(" "), i("div", {
                    staticClass: "tips-right"
                }, [e._v("\n                    1 " + e._s(e.primeCurrency) + " = " + e._s(e._f("thousandSeparate")(e.primeCurRound.round_issue_price)) + " " + e._s(e.primeQuote) + "\n                ")])])] : [i("div", {
                    staticClass: "flex-start-center end"
                }, [i("div", {
                    staticClass: "tips-left"
                }, [e._v(e._s(e.$t("index.prime." + e.primeState)))]), e._v(" "), i("div", {
                    staticClass: "flex-end-center diff-right"
                }, [e._v("\n                    " + e._s(e.formatDate(e.primeCurRound.round_end_time)) + "\n                ")])]), e._v(" "), i("div", {
                    staticClass: "flex-start-center tips"
                }, [i("div", {
                    staticClass: "tips-left"
                }, [e._v(e._s(e.$t("exchange.prime.allNum")))]), e._v(" "), i("div", {
                    staticClass: "tips-right"
                }, [e._v("\n                    " + e._s(e._f("thousandSeparate")(e.primeAllAmount)) + " " + e._s(e.primeCurrency) + "\n                ")])]), e._v(" "), i("div", {
                    staticClass: "flex-start-center tips"
                }, [i("div", {
                    staticClass: "tips-left"
                }, [e._v(e._s(e.$t("exchange.prime.rise")))]), e._v(" "), i("div", {
                    staticClass: "tips-right",
                    class: {
                        "rise-up": e.primeRise.diff > 0,
                        "rise-down": e.primeRise.diff < 0
                    }
                }, [e._v("\n                    " + e._s((e.primeRise.diff > 0 ? "+" : "") + e.primeRise.rate) + "\n                ")])])]], 2)]) : e._e()
            },
            staticRenderFns: []
        };
        var ct = i("VU/8")(ot, st, !1, function(e) {
            i("+6b+")
        }, "data-v-1d4bf352", null).exports
          , lt = {
            mixins: [p.a],
            data: function() {
                return {
                    mode: null,
                    coin: null,
                    nowTime: (new Date).getTime(),
                    day: "00",
                    hour: "00",
                    min: "00",
                    sec: "00",
                    crypto: null,
                    state: null,
                    timeTradeStart: null,
                    warningTxt: "",
                    localeDiff: 0,
                    flag: !1
                }
            },
            props: {
                baseCoin: {
                    default: "",
                    type: String
                },
                quoteCoin: {
                    default: "",
                    type: String
                },
                isPrime: {
                    default: !1,
                    type: Boolean
                },
                symbols: {
                    default: "",
                    type: String
                }
            },
            computed: u()({}, Object(d.b)({
                symbolsData: function(e) {
                    return e.currency.symbolsData
                },
                symbolsDataObj: function(e) {
                    return e.currency.symbolsDataObj
                }
            })),
            methods: {
                setTime: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        var i, a;
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.symbolsData || !e.symbolsData.length) {
                                        t.next = 5;
                                        break
                                    }
                                    if (!(i = e.symbolsData.find(function(t) {
                                        return t.symbol === e.symbol
                                    })) || !i["white-enabled"]) {
                                        t.next = 5;
                                        break
                                    }
                                    return e.mode = null,
                                    t.abrupt("return");
                                case 5:
                                    return e.state = (e.crypto[0] || {}).state,
                                    e.timeTradeStart = (e.crypto[0] || {})["trade-open-at"],
                                    t.next = 9,
                                    m.a.getTimestamp();
                                case 9:
                                    if (a = t.sent,
                                    e.localeDiff = 0,
                                    a.data && (e.localeDiff = a.data - (new Date).getTime()),
                                    e.nowTime = (new Date).getTime() + e.localeDiff,
                                    !("online" === e.state && e.nowTime > e.timeTradeStart)) {
                                        t.next = 15;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 15:
                                    "pre-online" === e.state && e.nowTime <= e.timeTradeStart ? (e.mode = "time",
                                    e.flag || e.IntervalTime()) : "suspend" === e.state && (e.warningTxt = e.crypto && e.crypto[0] ? e.crypto[0]["suspend-desc"] : "");
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                },
                IntervalTime: function(e) {
                    var t = this;
                    this.nowTime = (new Date).getTime() + this.localeDiff;
                    var i = this.timeTradeStart - this.nowTime;
                    if ("time" === this.mode && i <= 0)
                        return this.mode = null,
                        void this.wsStart();
                    if (e)
                        window.location.reload();
                    else {
                        "time" === this.mode && (this.day = Math.floor(i / 864e5),
                        this.day = this.day < 10 ? "0" + this.day : this.day,
                        this.hour = Math.floor(i % 864e5 / 36e5),
                        this.hour = this.hour < 10 ? "0" + this.hour : this.hour,
                        this.min = Math.floor(i % 36e5 / 6e4),
                        this.min = this.min < 10 ? "0" + this.min : this.min,
                        this.sec = Math.floor(i % 6e4 / 1e3),
                        this.sec = this.sec < 10 ? "0" + this.sec : this.sec);
                        var a = (new Date).getTime();
                        setTimeout(function() {
                            var e = (new Date).getTime();
                            t.IntervalTime(Math.abs(e - a) > 5e3)
                        }, 450)
                    }
                },
                wsStart: function() {
                    var e = this;
                    this.$nextTick(function() {
                        e.$bus.$emit("exchange:symbol-update", {
                            baseCoin: e.baseCoin.toLowerCase(),
                            quoteCoin: e.quoteCoin,
                            item: e.symbolsDataObj[e.baseCoin + e.quoteCoin]
                        })
                    })
                },
                initSetTimer: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.symbolsData) {
                                        t.next = 10;
                                        break
                                    }
                                    if (e.coin = e.baseCoin + e.quoteCoin,
                                    e.crypto = e.symbolsData.filter(function(t) {
                                        return t.symbol === e.coin
                                    }),
                                    e.crypto[0]) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    return e.mode = "suspend" === (e.crypto[0] || {}).state ? "alert" : null,
                                    e.runPop && (e.day = "00",
                                    e.hour = "00",
                                    e.min = "00",
                                    e.sec = "00"),
                                    t.next = 9,
                                    e.setTime();
                                case 9:
                                    e.flag = !0;
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                }
            },
            watch: {
                symbols: {
                    immediate: !0,
                    handler: function() {
                        this.initSetTimer()
                    }
                },
                symbolsData: {
                    immediate: !0,
                    deep: !0,
                    handler: function() {
                        this.initSetTimer()
                    }
                }
            }
        }
          , ut = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return null === e.mode || e.isPrime ? e._e() : a("div", ["time" === e.mode ? a("div", {
                    staticClass: "mode-time"
                }, [a("h2", [e._v(e._s(e.$t("tradeReady.ready-tit")))]), e._v(" "), a("p", [e._v(e._s(e.$t("tradeReady.ready-sub")))]), e._v(" "), a("dl", {
                    staticClass: "time-area"
                }, [a("dd", [a("span", {
                    staticClass: "number"
                }, [e._v("\n                    " + e._s(e.day) + "\n                    "), a("span", {
                    staticClass: "sub"
                }, [e._v(e._s(e.$t("tradeReady.day")))])]), e._v(" "), a("span", {
                    staticClass: "number"
                }, [e._v("\n                    " + e._s(e.hour) + "\n                    "), a("span", {
                    staticClass: "sub"
                }, [e._v(e._s(e.$t("tradeReady.hour")))])]), e._v(" "), a("span", {
                    staticClass: "number"
                }, [e._v("\n                    " + e._s(e.min) + "\n                    "), a("span", {
                    staticClass: "sub"
                }, [e._v(e._s(e.$t("tradeReady.min")))])]), e._v(" "), a("span", {
                    staticClass: "number"
                }, [e._v("\n                    " + e._s(e.sec) + "\n                    "), a("span", {
                    staticClass: "sub"
                }, [e._v(e._s(e.$t("tradeReady.sec")))])])])])]) : "alert" === e.mode ? a("div", {
                    staticClass: "mode-alert"
                }, [a("img", {
                    attrs: {
                        src: i("EUKm"),
                        alt: e.$t("tradeReady.warning")
                    }
                }), e._v(" "), a("h2", [e._v(e._s(e.$t("tradeReady.warning")))]), e._v(" "), a("p", [e._v(e._s(e.warningTxt))])]) : e._e()])
            },
            staticRenderFns: []
        };
        var dt = i("VU/8")(lt, ut, !1, function(e) {
            i("i/AU")
        }, null, null).exports
          , ht = {
            mixins: [p.a],
            props: {
                isPrimeVip: {
                    type: Boolean,
                    required: !0
                }
            },
            data: function() {
                return {
                    mode: "ready",
                    timeTradeStart: null,
                    timer: null,
                    calendarVisible: !1,
                    term: 30,
                    calendarLeftList: [],
                    calendarRightList: [],
                    projectReportMap: {
                        "ko-kr": "https://support.huobi.co.kr/hc/ko/articles/360026383332-Huobi-Prime-%EC%86%8C%EA%B0%9C",
                        "zh-cn": "https://support.huobi.co.kr/hc/zh-cn/articles/360026383332/preview/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYwMDI2MzgzMzMyLCJleHAiOjE1NTQ4OTA1Mjl9.81ePwjLmUmZBVKacJp6PRikOW40L1UFZZDipMJtqWzI",
                        "en-us": "https://support.huobi.co.kr/hc/en-us/articles/360026383332/preview/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYwMDI2MzgzMzMyLCJleHAiOjE1NTQ4OTA1NTV9.5-WlZoiyKmHMV8OXeFIN21hPHUhCrr8vYXW_XU2jS5M"
                    },
                    rulesMap: {
                        "ko-kr": "https://support.huobi.co.kr/hc/ko/articles/360027115251--%EC%95%88%EB%82%B4-%ED%9B%84%EC%98%A4%EB%B9%84-%EC%BD%94%EB%A6%AC%EC%95%84-%ED%94%84%EB%9D%BC%EC%9E%84-%EC%83%81%EC%84%B8-%EC%95%88%EB%82%B4",
                        "zh-cn": "https://support.huobi.co.kr/hc/zh-cn/articles/360027115251--%E5%85%AC%E5%91%8A-%E7%81%AB%E5%B8%81%E9%9F%A9%E5%9B%BD-Prime-%E6%8A%A2%E8%B4%AD%E7%BB%86%E5%88%99",
                        "en-us": "https://support.huobi.co.kr/hc/en-us/articles/360027115251-Huobi-Korea-Prime-s-First-Launch-PayProtocol"
                    }
                }
            },
            computed: u()({}, Object(d.b)({
                baseCoin: function(e) {
                    return e.exchange.baseCoin
                },
                quoteCoin: function(e) {
                    return e.exchange.quoteCoin
                },
                symbolsDataObj: function(e) {
                    return e.currency.symbolsDataObj
                },
                currencyDataObj: function(e) {
                    return e.currency.currencyData
                },
                primeAveragePosition: function(e) {
                    return e.prime.primeAveragePosition
                },
                primeCurrency: function(e) {
                    return e.prime.primeCurrency
                },
                primeQuote: function(e) {
                    return e.prime.primeQuote
                },
                primeState: function(e) {
                    return e.prime.primeState
                },
                primeDate: function(e) {
                    return e.prime.primeDate
                },
                primeOpenTime: function(e) {
                    return e.prime.primeOpenTime
                }
            }), {
                symbol: function() {
                    return "" + this.baseCoin + this.quoteCoin
                },
                qualify: function() {
                    return this.primeAveragePosition && this.primeAveragePosition.qualify || !1
                },
                tradeAmount: function() {
                    var e = (this.primeAveragePosition || {
                        max_limit: 0
                    }).max_limit;
                    return this.thousandSeparate(e)
                },
                averagePosition: function() {
                    var e = this.primeAveragePosition && this.primeAveragePosition.average_position || 0;
                    return this.thousandSeparate(e)
                },
                computedAmout: function() {
                    var e = this.primeAveragePosition && this.primeAveragePosition.target_position || 0;
                    return this.thousandSeparate(e)
                },
                needHtAmount: function() {
                    var e = this.primeAveragePosition && this.primeAveragePosition.need_amount || 0;
                    return this.thousandSeparate(e)
                },
                maxAmount: function() {
                    var e = this.primeAveragePosition && this.primeAveragePosition.qualify && this.primeAveragePosition.target_amount || 0;
                    return this.thousandSeparate(e)
                },
                tradeOpenAt: function() {
                    return this.primeOpenTime ? Object(B.c)(this.primeOpenTime, "hh:mm", 9) : ""
                }
            }),
            methods: {
                getPrimeQuote: function() {
                    this.calendarVisible = !1,
                    this.pushState("/exchange/" + this.primeQuote + "_usdt/")
                },
                refresh: function() {
                    window.location.reload()
                }
            }
        }
          , ft = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("div", {
                    staticClass: "prime-mask"
                }, [i("div", {
                    staticClass: "prime-ready"
                }, [i("div", {
                    staticClass: "witdh-auto-btn sub-title"
                }, [i("a", {
                    attrs: {
                        href: e.rulesMap[e.$locale.toLowerCase()],
                        target: "_blank"
                    }
                }, [e._v("\n                " + e._s(e.$t("exchange.prime.rules")) + "\n            ")])]), e._v(" "), "end" === e.primeState ? i("div", {
                    staticClass: "end-tips"
                }, [i("p", {
                    staticClass: "end-tips-text"
                }, [e._v(e._s(e.$t("exchange.prime.end_tips", {
                    time: e.tradeOpenAt
                })))]), e._v(" "), i("p", {
                    staticClass: "end-tips-symbol"
                }, [e._v(e._s("(" + e.baseCoin.toUpperCase() + "/" + e.quoteCoin.toUpperCase() + ")"))]), e._v(" "), i("div", {
                    domProps: {
                        innerHTML: e._s(e.$t("exchange.prime.plz_refresh_page"))
                    },
                    on: {
                        click: e.refresh
                    }
                })]) : [i("div", {
                    staticClass: "desc"
                }, [e._v(e._s(e.$t("exchange.prime.will_open", {
                    currency: e.primeCurrency
                })))]), e._v(" "), i("div", {
                    staticClass: "time-area"
                }, [i("div", {
                    staticClass: "count-down"
                }, [i("span", {
                    staticClass: "number num-left"
                }, [e._v(e._s(e.primeDate.days[0]))]), e._v(" "), i("span", {
                    staticClass: "number num-right"
                }, [e._v(e._s(e.primeDate.days[1]))]), e._v(" "), i("span", {
                    staticClass: "unit"
                }, [e._v(e._s(e.$t("exchange.prime.day")))])]), e._v(" "), i("div", {
                    staticClass: "count-down"
                }, [i("span", {
                    staticClass: "number num-left"
                }, [e._v(e._s(e.primeDate.hours[0]))]), e._v(" "), i("span", {
                    staticClass: "number num-right"
                }, [e._v(e._s(e.primeDate.hours[1]))]), e._v(" "), i("span", {
                    staticClass: "unit"
                }, [e._v(e._s(e.$t("exchange.prime.hour")))])]), e._v(" "), i("div", {
                    staticClass: "count-down"
                }, [i("span", {
                    staticClass: "number num-left"
                }, [e._v(e._s(e.primeDate.minutes[0]))]), e._v(" "), i("span", {
                    staticClass: "number num-right"
                }, [e._v(e._s(e.primeDate.minutes[1]))]), e._v(" "), i("span", {
                    staticClass: "unit"
                }, [e._v(e._s(e.$t("exchange.prime.min")))])]), e._v(" "), i("div", {
                    staticClass: "count-down"
                }, [i("span", {
                    staticClass: "number num-left"
                }, [e._v(e._s(e.primeDate.seconds[0]))]), e._v(" "), i("span", {
                    staticClass: "number num-right"
                }, [e._v(e._s(e.primeDate.seconds[1]))]), e._v(" "), i("span", {
                    staticClass: "unit"
                }, [e._v(e._s(e.$t("exchange.prime.sec")))])])]), e._v(" "), e.isLogin ? i("div", {
                    staticClass: "trade-total"
                }, [e.isPrimeVip ? [i("p", [e._v(e._s(e.$t("exchange.prime.dear_consumer")))]), e._v(" "), i("div", {
                    staticClass: "vip-trade-total"
                }, [i("div", [e._v(e._s(e.$t("exchange.prime.single_time_trade_amount", {
                    tradeAmount: e.tradeAmount,
                    primeQuote: e.primeQuote
                })))])])] : [i("p", [e._v(e._s(e.$t("exchange.prime.single_time_trade_amount", {
                    tradeAmount: e.tradeAmount,
                    primeQuote: e.primeQuote
                })))])]], 2) : i("div", {
                    staticClass: "witdh-auto-btn login-btn"
                }, [i("router-link", {
                    attrs: {
                        tag: "span",
                        to: "/login/"
                    }
                }, [e._v("\n                    " + e._s(e.$t("exchange.prime.login")) + "\n                ")]), e._v(" "), i("router-link", {
                    attrs: {
                        tag: "span",
                        to: "/register/"
                    }
                }, [e._v("\n                    " + e._s(e.$t("exchange.prime.register")) + "\n                ")])], 1)]], 2)])
            },
            staticRenderFns: []
        };
        var pt = i("VU/8")(ht, ft, !1, function(e) {
            i("rnFK")
        }, null, null).exports
          , mt = i("ivlf")
          , gt = {
            data: function() {
                return {
                    overviewData: [],
                    quoteSortOverviewData: {},
                    overviewWsKey: 0
                }
            },
            watch: {
                proRates: {
                    deep: !0,
                    handler: function() {
                        Number(this.klineInfo.latestPrice) && (this.klineInfo.latestPriceToLegal = this.formatCash(this.getBalanceTotal([{
                            close: this.latestPriceTick.close,
                            currency: this.baseCoin,
                            quote: this.quoteCoin
                        }])) || "--")
                    }
                }
            },
            methods: {
                formatQuoteCash: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "2"
                      , a = Object(B.e)(e, t, i)
                      , n = a.unitText ? mt.a.t(a.unitText) : "";
                    return this.thousandSeparate(a.cash) + n
                },
                initOverviewWs: function() {
                    this.$ws.overview.sub({}, this.convertOverviewData)
                },
                destroyOverviewWs: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.overviewWsKey = 0,
                                    t.next = 3,
                                    e.$ws.overview.unsub({}, function() {});
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                },
                initOverviewData: function() {
                    var e = this;
                    this.overviewData = this.symbolsData.map(function(t) {
                        return (t = e.convertMarketTableData(t)).symbol === e.symbol && e.setKlineInfo(t),
                        t
                    })
                },
                convertOverviewData: function(e) {
                    var t = this;
                    return o()(n.a.mark(function i() {
                        return n.a.wrap(function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    e && e.data && e.data.length > 0 && (t.overviewWsKey += 1,
                                    t.$store.dispatch(h.a.PRO_RATES, e.data),
                                    t.overviewData = t.overviewData.map(function(i) {
                                        return e.data.forEach(function(e) {
                                            e.symbol === i.symbol && (i = t.convertMarketTableData(i, e))
                                        }),
                                        i.symbol === t.symbol && t.setKlineInfo(i),
                                        i
                                    }));
                                case 1:
                                case "end":
                                    return i.stop()
                                }
                        }, i, t)
                    }))()
                },
                convertMarketTableData: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    this.quoteSortOverviewData[e["quote-currency"]] || (this.quoteSortOverviewData[e["quote-currency"]] = []),
                    e.amount = t.amount ? Object(O.c)(t.amount, 2) : "0.00",
                    e.coin = e["base-currency"].toUpperCase(),
                    e.close = Number(t.close || 0),
                    e.closeToLegal = this.formatCash(this.getBalanceTotal([{
                        close: e.close,
                        currency: e["base-currency"],
                        quote: e["quote-currency"]
                    }]), !1),
                    e.open = Number(t.open || 0),
                    e.high = t.high,
                    e.low = t.low,
                    e.originAmount = e.amount || 0,
                    e.vol = parseFloat(t.vol) || 0,
                    e.close && 0 !== e.open ? e.rate = Object(O.c)(Object(I.d)(Object(I.a)(Object(I.b)(t.close, t.open), t.open), 100), 2) : e.rate = "--",
                    e.high && 0 !== e.open ? e.highDiffRate = Object(O.c)(Object(I.d)(Object(I.a)(Object(I.b)(t.high, t.open), t.open), 100), 2) : e.highDiffRate = "--",
                    e.low && 0 !== e.open ? e.lowDiffRate = Object(O.c)(Object(I.d)(Object(I.a)(Object(I.b)(t.low, t.open), t.open), 100), 2) : e.lowDiffRate = "--",
                    t.open && (e.closeDiff = this.preciseHandler(Object(I.b)(t.close, t.open), e["trade-price-precision"]) || "--"),
                    e.close = this.preciseHandler(e.close || "", e["trade-price-precision"]) || "--",
                    e.open = this.preciseHandler(e.open || "", e["trade-price-precision"]) || "--",
                    e.high = this.preciseHandler(e.high || "", e["trade-price-precision"]) || "--",
                    e.low = this.preciseHandler(e.low || "", e["trade-price-precision"]) || "--",
                    e.amount = this.preciseHandler(e.originAmount || "", e["trade-amount-precision"]) || "--",
                    e.amountForList = this.formatQuoteCash(e.originAmount, !0, 2) || "--",
                    e.vol = this.preciseHandler(e.vol, 2) || "--";
                    var i = [];
                    return this.quoteSortOverviewData[e["quote-currency"]] && (i = this.quoteSortOverviewData[e["quote-currency"]].filter(function(t) {
                        return t.symbol === e.symbol && (t = u()({}, e)),
                        t.symbol === e.symbol
                    })),
                    0 === i.length && this.quoteSortOverviewData[e["quote-currency"]].push(e),
                    e.currencyName = this.getCurrencyName(e.coin),
                    e
                }
            }
        }
          , vt = i("Uxnq")
          , _t = {
            data: function() {
                return {
                    latestTradeMaxLength: 100,
                    latestTradeData: []
                }
            },
            methods: {
                initLatestTradeWs: function() {
                    this.WsConnect.trade.sub({
                        api: {
                            symbol: this.symbol
                        }
                    }, this.convertLatestTradeData),
                    this.WsConnect.trade.req({
                        api: {
                            symbol: this.symbol
                        }
                    }, this.convertLatestTradeData)
                },
                destroyLatestTradeWs: function() {
                    this.WsConnect.trade.unsub({
                        api: {
                            symbol: this.symbol
                        }
                    }, function() {})
                },
                convertLatestTradeData: function(e) {
                    var t = this;
                    if (e.rep && e.rep.indexOf(this.symbol) > -1 || e.ch && e.ch.indexOf(this.symbol) > -1) {
                        var i = void 0;
                        if (i = e.data ? e.data : e.tick ? e.tick.data : null) {
                            var a = {}
                              , n = [];
                            i.forEach(function(e) {
                                a[e.id] && Object(B.l)(a[e.id], e) || (a[e.id] = !0,
                                n.push(e))
                            }),
                            i = (i = (i = n).filter(function(e) {
                                return !t.latestTradeData.find(function(t) {
                                    return t.id === e.id
                                })
                            })).map(function(e) {
                                return e.formatDate = Object(f.a)(e.ts, "hh:mm:ss"),
                                e.total = t.preciseHandler(e.price * e.amount, t.precise.tradeTotal),
                                e.price = t.preciseHandler(e.price, t.precise.tradePrice),
                                e.amount = t.preciseHandler(e.amount, t.precise.tradeAmount),
                                e
                            }),
                            this.latestTradeData = this.latestTradeData.concat(i).sort(function(e, t) {
                                return e.ts === t.ts ? "buy" === e.direction && "buy" === t.direction ? t.price - e.price : "sell" === e.direction && "sell" === t.direction ? e.price - t.price : t.ts - e.ts : t.ts - e.ts
                            }),
                            this.latestTradeData.length > this.latestTradeMaxLength && (this.latestTradeData.length = this.latestTradeMaxLength)
                        }
                    }
                }
            }
        }
          , bt = {
            data: function() {
                return {
                    dailyTradeData: []
                }
            },
            methods: {
                getTodayTimeStamp: function() {
                    return Date.now()
                },
                initDailyTradeWs: function() {
                    var e = Math.floor(this.getTodayTimeStamp() / 1e3)
                      , t = e - 7862400;
                    this.WsConnect.kline.req({
                        api: {
                            symbol: this.symbol,
                            period: "1day"
                        },
                        extra: {
                            from: t,
                            to: e
                        }
                    }, this.convertDailyTradeData)
                },
                destroyDailyTradeWs: function() {},
                convertDailyTradeData: function(e) {
                    var t = this
                      , i = e && e.data || [];
                    this.dailyTradeData = i.map(function(e) {
                        var i = {};
                        return i.time = Object(f.a)(e.id, "YYYY-MM-DD"),
                        i.open = t.preciseHandler(e.open, t.precise.tradePrice),
                        i.close = t.preciseHandler(e.close, t.precise.tradePrice),
                        i.amount = t.preciseHandler(e.amount, t.precise.tradeAmount),
                        i.vol = t.preciseHandler(e.vol, t.precise.tradeTotal),
                        i
                    })
                }
            }
        }
          , yt = {
            mixins: [p.a, gt, {
                data: function() {
                    return {
                        klineInfo: {
                            latestPrice: "--",
                            latestPriceToLegal: "--",
                            rate: "--",
                            closeDiff: "--",
                            high: "--",
                            low: "--",
                            amount: "--"
                        }
                    }
                },
                methods: {
                    setKlineInfo: function(e) {
                        this.klineInfo.latestPrice = e.close,
                        this.klineInfo.close = e.close,
                        this.klineInfo.open = e.open,
                        this.klineInfo.closeToLegal = e.closeToLegal,
                        this.klineInfo.rate = e.rate,
                        this.klineInfo.closeDiff = e.closeDiff,
                        this.klineInfo.high = this.preciseHandler(e.high || "", e["trade-price-precision"]) || "--",
                        this.klineInfo.highDiffRate = e.highDiffRate,
                        this.klineInfo.low = this.preciseHandler(e.low || "", e["trade-price-precision"]) || "--",
                        this.klineInfo.lowDiffRate = e.lowDiffRate,
                        this.klineInfo.amount = e.amount,
                        this.klineInfo.currencyName = this.getCurrencyName(e.coin.toLowerCase()),
                        this.klineInfo.amountPrecision = e["trade-amount-precision"]
                    }
                }
            }, vt.a, _t, {
                data: function() {
                    return {
                        latestPriceTick: {}
                    }
                },
                methods: {
                    initTradeTickerWs: function() {
                        this.WsConnect.ticker.sub({
                            api: {
                                symbol: this.symbol
                            }
                        }, this.convertLatestPrice)
                    },
                    destroyTradeTickerWs: function() {
                        this.WsConnect.ticker.unsub({
                            api: {
                                symbol: this.symbol
                            }
                        }, function() {})
                    },
                    convertLatestPrice: function(e) {
                        e.ch && e.ch.includes("." + this.symbol + ".") && (e.tick ? (this.latestPriceTick = e.tick,
                        this.klineInfo.latestPrice = this.preciseHandler(this.latestPriceTick.close, this.precise.tradePrice) || "--",
                        this.klineInfo.latestPriceToLegal = this.formatCash(this.getBalanceTotal([{
                            close: this.latestPriceTick.close,
                            currency: this.baseCoin,
                            quote: this.quoteCoin
                        }])) || "--",
                        this.$bus.$emit("exchange:lastest-price", {
                            price: this.latestPriceTick.close,
                            latestPriceToLegal: this.klineInfo.latestPriceToLegal,
                            ch: e.ch
                        })) : (this.klineInfo.latestPrice = "--",
                        this.klineInfo.latestPriceToLegal = "--"),
                        this.setPageTitle())
                    }
                }
            }, {
                data: function() {
                    return {
                        depthChartData: []
                    }
                },
                methods: {
                    initDepthChartWs: function() {
                        this.WsConnect.depth.sub({
                            api: {
                                symbol: this.symbol
                            },
                            params: {
                                step: "percent10"
                            }
                        }, this.convertDepthChartData)
                    },
                    destroyDepthChartWs: function() {
                        this.WsConnect.depth.unsub({
                            api: {
                                symbol: this.symbol
                            },
                            params: {
                                step: "percent10"
                            }
                        }, function() {})
                    },
                    convertDepthChartData: function(e) {
                        !e.ch || e.ch.indexOf("." + this.symbol + ".") < 0 || e.subbed || (this.depthChartData = e.tick)
                    }
                }
            }, bt],
            data: function() {
                return {
                    baseCoin: "",
                    quoteCoin: "usdt",
                    favorList: [],
                    currencyNameList: [],
                    currencyCommonLoaded: !1
                }
            },
            computed: u()({
                symbol: function() {
                    return this.baseCoin + this.quoteCoin
                }
            }, Object(d.b)({
                symbolsData: function(e) {
                    return e.currency.symbolsData
                },
                symbolsDataArr: function(e) {
                    return e.currency.symbolsDataArr
                },
                currencyData: function(e) {
                    return e.currency.currencyData
                },
                quoteCurrencyArr: function(e) {
                    return e.currency.quoteCurrencyArr
                },
                balanceList: function(e) {
                    return e.balances.balance
                },
                currencyCommon: function(e) {
                    return e.currency.currencyCommon
                }
            }), {
                WsConnect: function() {
                    return this.$ws
                }
            }),
            watch: {
                symbolsData: {
                    immediate: !0,
                    deep: !0,
                    handler: function(e) {
                        var t = this;
                        if (e.length) {
                            this.initOverviewData(),
                            this.initExchange();
                            var i = this.$cookie.get("coin_coin")
                              , a = "" + this.$route.params.coin_coin || i
                              , n = e && e.filter(function(e) {
                                return e.symbol === a.replace("_", "")
                            });
                            if (!window.PRERENDER_INJECTED.prerender && 0 === n.length) {
                                var r = i !== a ? i : "btc_krw"
                                  , o = r.split("_")
                                  , s = c()(o, 2);
                                this.baseCoin = s[0],
                                this.quoteCoin = s[1],
                                this.pushState("/exchange/" + r + "/")
                            }
                            this.initOverviewWs(),
                            this.initAllWs()
                        }
                        this.$nextTick(function() {
                            t.$store.dispatch(h.a.SET_PRECISE, t.baseCoin + "_" + t.quoteCoin)
                        })
                    }
                },
                currencyData: {
                    immediate: !0,
                    handler: function() {
                        var e = this;
                        this.$nextTick(function() {
                            e.$store.dispatch(h.a.SET_PRECISE, e.baseCoin + "_" + e.quoteCoin)
                        })
                    }
                },
                currencyCommon: {
                    immediate: !0,
                    handler: function(e) {
                        e && e.length > 0 && (this.currencyCommonLoaded || (this.$store.dispatch(h.a.INIT_BALANCES_BALANCE),
                        this.currencyCommonLoaded = !0))
                    }
                }
            },
            mounted: function() {
                this.getCurrencyNameList(),
                this.initListeners()
            },
            beforeDestroy: function() {
                var e = this;
                return o()(n.a.mark(function t() {
                    return n.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.destroyAllWs();
                            case 2:
                                return t.next = 4,
                                e.destroyOverviewWs();
                            case 4:
                                e.$store.dispatch(h.a.INIT_BALANCES_BALANCE, {
                                    destroy: !0
                                });
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }, t, e)
                }))()
            },
            methods: {
                initListeners: function() {
                    var e, t = this;
                    this.$bus.$on("exchange:symbol-update", (e = o()(n.a.mark(function e(i) {
                        var a = i.baseCoin
                          , r = i.quoteCoin
                          , o = i.item;
                        return n.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.destroyAllWs();
                                case 2:
                                    t.baseCoin = a,
                                    t.quoteCoin = r,
                                    t.$cookie.set("coin_coin", a + "_" + r),
                                    t.pushState("/exchange/" + a + "_" + r + "/"),
                                    t.buySellFormInit = !1,
                                    t.resetExchange(),
                                    t.setKlineInfo(o),
                                    t.initAllWs(),
                                    t.$store.dispatch(h.a.SET_EXCHANGE_SYMBOLS, a + "_" + r);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }, e, t)
                    })),
                    function(t) {
                        return e.apply(this, arguments)
                    }
                    ), this),
                    this.$bus.$on("exchange:trade-index-update", function(e) {
                        t.destroyHandicapWs(),
                        t.tradeDepthIndex = e,
                        t.sellData = [],
                        t.buyData = [],
                        t.initHandicapWs()
                    }, this)
                },
                resetExchange: function() {
                    this.klineInfo = {
                        latestPrice: "--",
                        latestPriceToLegal: "--",
                        rate: "--",
                        closeDiff: "--",
                        high: "--",
                        low: "--",
                        amount: "--"
                    },
                    this.sellData = [],
                    this.buyData = [],
                    this.latestTradeData = [],
                    this.depthChartData = [],
                    this.dailyTradeData = []
                },
                preciseHandler: O.c,
                initAllWs: function() {
                    this.initHandicapWs(),
                    this.initLatestTradeWs(),
                    this.initDepthChartWs(),
                    this.initDailyTradeWs(),
                    this.initTradeTickerWs()
                },
                destroyAllWs: function() {
                    var e = this;
                    return this.destroyHandicapWs(),
                    this.destroyLatestTradeWs(),
                    this.destroyDepthChartWs(),
                    this.destroyTradeTickerWs(),
                    new Ne.a(function(t) {
                        var i = 0;
                        e.$ws.connection.info.unsubedAllCallback(function() {
                            4 === (i += 1) && t()
                        }),
                        setTimeout(function() {
                            t()
                        }, 300)
                    }
                    )
                },
                setDefaultSymbol: function() {
                    var e = this.quoteCurrencyArr.filter(function(e) {
                        return "krw".indexOf(e) >= 0
                    })
                      , t = c()(e, 1);
                    this.quoteCoin = t[0],
                    this.quoteCoin = this.quoteCoin ? this.quoteCoin : "usdt",
                    this.baseCoin = "btc".replace(this.quoteCoin, ""),
                    this.$cookie.set("coin_coin", this.baseCoin + "_" + this.quoteCoin),
                    window.PRERENDER_INJECTED.prerender || this.replaceState("/exchange/" + this.baseCoin + "_" + this.quoteCoin + "/")
                },
                initExchange: function() {
                    var e = this.$route.params.coin_coin
                      , t = this.quoteCurrencyArr
                      , i = this.currencyData;
                    if (e) {
                        var a = e.split("_")
                          , n = c()(a, 2);
                        this.baseCoin = n[0],
                        this.quoteCoin = n[1],
                        this.baseCoin && this.quoteCoin && -1 !== t.indexOf(this.quoteCoin) && i[this.baseCoin] ? this.$cookie.set("coin_coin", e) : this.setDefaultSymbol()
                    } else {
                        var r = this.$cookie.get("coin_coin");
                        if (r) {
                            var o = r.split("_")
                              , s = c()(o, 2);
                            this.baseCoin = s[0],
                            this.quoteCoin = s[1],
                            this.baseCoin && this.quoteCoin && -1 !== t.indexOf(this.quoteCoin) && i[this.baseCoin] ? window.PRERENDER_INJECTED.prerender || this.replaceState("/exchange/" + r + "/") : this.setDefaultSymbol()
                        } else
                            this.setDefaultSymbol()
                    }
                    this.$store.dispatch(h.a.SET_EXCHANGE_SYMBOLS, this.baseCoin + "_" + this.quoteCoin),
                    this.setPageTitle()
                },
                setPageTitle: function() {
                    document.title = this.$t("seo.exchange.title", {
                        symbols: this.baseCoin.toUpperCase() + "/" + this.quoteCoin.toUpperCase() + "  " + this.klineInfo.latestPrice
                    }),
                    document.getElementsByName("keywords").length > 0 && document.getElementsByName("keywords")[0].setAttribute("content", this.$t("seo.exchange.keywords", {
                        symbols: this.baseCoin.toUpperCase() + "/" + this.quoteCoin.toUpperCase()
                    })),
                    document.getElementsByName("description").length > 0 && document.getElementsByName("description")[0].setAttribute("content", this.$t("seo.exchange.description", {
                        symbols: this.baseCoin.toUpperCase() + "/" + this.quoteCoin.toUpperCase()
                    }))
                },
                getCurrencyNameList: function() {
                    var e = this;
                    return o()(n.a.mark(function t() {
                        var i;
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    m.a.getCurrencyNameList();
                                case 2:
                                    i = t.sent,
                                    e.currencyNameList = i.data || [],
                                    e.currencyNameList = e.currencyNameList.map(function(e) {
                                        return ne()(e).forEach(function(t) {
                                            e[t.toLowerCase()] = e[t]
                                        }),
                                        e
                                    }),
                                    window.localStorage.setItem("currencyNameList", A()(e.currencyNameList));
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                },
                getCurrencyName: function(e) {
                    var t = this.$locale.replace("-", "").toLowerCase()
                      , i = {
                        kokr: "koKr",
                        zhcn: "zhCn",
                        enus: "enUs"
                    }
                      , a = e.toUpperCase();
                    return this.currencyNameList.some(function(n) {
                        return n.currency.toLowerCase() === e.toLowerCase() && (a = n[i[t]],
                        !0)
                    }),
                    a
                }
            }
        }
          , wt = i("FLts")
          , Ct = i.n(wt)
          , xt = i("yIMT")
          , kt = i.n(xt)
          , St = {
            data: function() {
                var e = this
                  , t = function(t, i) {
                    t === i && e.$bus.$emit("exchange:toggle-trade-buy", !0)
                };
                return {
                    steps: [],
                    tourCallback: {
                        onPreviousStep: function(e) {
                            return t(e, 4)
                        },
                        onNextStep: function(e) {
                            return t(e, 2)
                        }
                    }
                }
            },
            methods: {
                initStep: function() {
                    this.stepExchange = {
                        target: "#v-step-exchange",
                        content: ' <img class="step-img" src="' + Ct.a + '">\n                    <p class="title"> [[index]].' + this.$t("guide.coincoin_trade") + " </p>\n                    <p>" + this.$t("guide.stepExchange") + "</p> ",
                        params: {
                            placement: "bottom-start"
                        }
                    },
                    this.stepMarket = {
                        target: "#v-step-market",
                        content: ' <img class="step-img" src="' + kt.a + '" >\n                    <p class="title"> [[index]].' + this.$t("guide.market") + " </p>\n                    <p>" + this.$t("guide.stepMarket") + "</p> ",
                        params: {
                            placement: "right-start"
                        }
                    },
                    this.stepLimitMarketTrade = {
                        target: "#trade-type_limit-market",
                        content: ' <p class="title"> [[index]].' + this.$t("guide.limitMarketTrade") + " </p>\n                    <p>" + this.$t("guide.stepLimitMarketTrade1") + "</p>\n                    <p>" + this.$t("guide.stepLimitMarketTrade2") + "</p>\n                    <p>" + this.$t("guide.stepLimitMarketTrade3") + "</p> ",
                        params: {
                            placement: "bottom-start"
                        }
                    },
                    this.stepBuySell = {
                        target: "#buysell-order-title",
                        content: ' <p class="title"> [[index]].' + this.$t("guide.buySellOrder") + " </p>\n                    <p>" + this.$t("guide.stepBuySell") + "</p> ",
                        params: {
                            placement: "bottom-end"
                        }
                    },
                    this.stepNow = {
                        target: "#tab-uncomplete",
                        content: ' <p class="title"> [[index]].' + this.$t("guide.tradeUncomplete") + " </p>\n                    <p>" + this.$t("guide.stepNow") + "</p> ",
                        params: {
                            placement: "bottom-center"
                        }
                    },
                    this.stepHistory = {
                        target: "#tab-complete",
                        content: ' <p class="title"> [[index]].' + this.$t("guide.tradeComplete") + " </p>\n                    <p>" + this.$t("guide.stepHistory") + "</p> ",
                        params: {
                            placement: "bottom-center"
                        }
                    },
                    this.stepRealTime = {
                        target: "#tab-recent",
                        content: '<p class="title"> [[index]].' + this.$t("guide.realTimeTrade") + " </p>\n                    <p>" + this.$t("guide.stepRealTime") + "</p>",
                        params: {
                            placement: "bottom-end"
                        }
                    },
                    this.stepDailyTrade = {
                        target: "#tab-perday",
                        content: '<p class="title"> [[index]].' + this.$t("guide.dailyTrade") + " </p>\n                    <p>" + this.$t("guide.stepDailyTrade") + "</p>",
                        params: {
                            placement: "bottom-end"
                        }
                    },
                    this.stepDeep = {
                        target: "#v-step-deep",
                        content: ' <p class="title"> [[index]].' + this.$t("guide.depthChart") + " </p>\n                    <p>" + this.$t("guide.stepDeep") + "</p> ",
                        params: {
                            placement: "bottom-start"
                        }
                    };
                    var e = [];
                    this.$route.path.includes("/exchange") && (e = [this.stepExchange, this.stepMarket, this.stepBuySell, this.stepLimitMarketTrade, this.stepNow, this.stepHistory, this.stepRealTime, this.stepDailyTrade, this.stepDeep]),
                    this.steps = e.map(function(e, t) {
                        return e.content = e.content.replace("[[index]]", String(t + 1)),
                        e
                    })
                },
                tourEnd: function(e) {
                    e.stop(),
                    window.scrollTo(0, 0)
                },
                startTour: function(e) {
                    this.initStep(),
                    e.indexOf("/exchange") > -1 ? localStorage.getItem("tourReaded") || window.PRERENDER_INJECTED.prerender || (this.$tours.myTour.start(),
                    localStorage.setItem("tourReaded", "readed")) : this.$tours.myTour && this.$tours.myTour.stop()
                }
            },
            watch: {
                $route: function(e) {
                    this.startTour(e.path)
                }
            },
            mounted: function() {
                this.startTour(this.$route.path)
            }
        }
          , Tt = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("v-tour", {
                    staticClass: "tour-modal",
                    attrs: {
                        name: "myTour",
                        steps: e.steps,
                        callbacks: e.tourCallback
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [i("transition", {
                                attrs: {
                                    name: "fade"
                                }
                            }, [e._l(t.steps, function(a, n) {
                                return [t.currentStep === n ? i("v-step", {
                                    key: n,
                                    attrs: {
                                        step: a,
                                        "previous-step": t.previousStep,
                                        "next-step": t.nextStep,
                                        stop: t.stop,
                                        "is-first": t.isFirst,
                                        "is-last": t.isLast,
                                        labels: t.labels
                                    }
                                }, [[i("div", {
                                    attrs: {
                                        slot: "actions"
                                    },
                                    slot: "actions"
                                }, [i("div", {
                                    staticClass: "close",
                                    on: {
                                        click: t.stop
                                    }
                                }, [i("i", {
                                    staticClass: "el-icon-close"
                                })]), e._v(" "), t.isFirst ? e._e() : i("button", {
                                    staticClass: "v-step__button prev",
                                    on: {
                                        click: t.previousStep
                                    }
                                }, [e._v(e._s(e.$t("guide.prev")))]), e._v(" "), t.isLast ? e._e() : i("button", {
                                    staticClass: "v-step__button next",
                                    on: {
                                        click: t.nextStep
                                    }
                                }, [e._v(e._s(e.$t("guide.continue")))]), e._v(" "), t.isLast ? i("button", {
                                    staticClass: "v-step__button finish",
                                    on: {
                                        click: function(i) {
                                            e.tourEnd(t)
                                        }
                                    }
                                }, [e._v(e._s(e.$t("guide.complete")))]) : e._e()])]], 2) : e._e()]
                            })], 2)]
                        }
                    }])
                })
            },
            staticRenderFns: []
        };
        var Pt = i("VU/8")(St, Tt, !1, function(e) {
            i("mF+o")
        }, null, null).exports
          , Lt = {
            mixins: [yt],
            name: "Exchange",
            data: function() {
                return {
                    showKline: !0,
                    klineMaskShow: !0
                }
            },
            computed: u()({}, Object(d.b)({
                symbolsDataObj: function(e) {
                    return e.currency.symbolsDataObj
                },
                showPrime: function(e) {
                    return e.prime.showPrime
                },
                primeQuote: function(e) {
                    return e.prime.primeQuote
                },
                primeCurrency: function(e) {
                    return e.prime.primeCurrency
                },
                primeState: function(e) {
                    return e.prime.primeState
                },
                primeAveragePosition: function(e) {
                    return e.prime.primeAveragePosition
                }
            }), {
                isShowPrime: function() {
                    var e = ("" + this.primeCurrency + this.primeQuote).toLowerCase();
                    return this.showPrime && this.symbolsDataObj[e]
                },
                showPrimeReady: function() {
                    return this.isShowPrime && !this.inPrimeWhiteList && !this.inSymbolWhiteList && this.isPrime && ["start", "end"].includes(this.primeState)
                },
                isPrime: function() {
                    var e = ("" + this.primeCurrency + this.primeQuote).toLowerCase();
                    return !(!this.baseCoin || !this.quoteCoin || ("" + this.symbol).toLowerCase() !== e)
                },
                isPrimeVip: function() {
                    return 1 === this.primeAveragePosition.prime_identity
                },
                inPrimeWhiteList: function() {
                    return !!this.primeAveragePosition.white_enable
                },
                inSymbolWhiteList: function() {
                    var e = this.symbolsDataObj[this.symbol];
                    return !(!e || !e["white-enabled"])
                }
            }),
            mounted: function() {
                window.zE && "function" == typeof window.zE.hide && window.zE.hide(),
                this.$store.dispatch(h.a.GET_PRIME)
            },
            created: function() {
                var e = "btc"
                  , t = "krw"
                  , i = this.$route.params.coin_coin;
                if (i) {
                    var a = i.split("_")
                      , n = c()(a, 2);
                    e = n[0],
                    t = n[1],
                    this.baseCoin = e,
                    this.quoteCoin = t
                }
            },
            watch: {
                isPrime: function(e) {
                    var t = this;
                    return o()(n.a.mark(function i() {
                        return n.a.wrap(function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    if (!e) {
                                        i.next = 3;
                                        break
                                    }
                                    return i.next = 3,
                                    t.$store.dispatch(h.a.GET_PRIME_AVERAGE_POSITION);
                                case 3:
                                case "end":
                                    return i.stop()
                                }
                        }, i, t)
                    }))()
                }
            },
            destroyed: function() {
                window.zE && "function" == typeof window.zE.show && window.zE.show()
            },
            components: {
                NoticeList: w,
                Banner: k,
                Market: K,
                Kline: me,
                KlineInfo: _e,
                Depth: Ce,
                TradePanel: $e,
                TradeRecord: je,
                MiniKline: Qe,
                CoinIntro: Se,
                Card: _,
                RecentDeal: Xe,
                BuysellOrder: it,
                Invite: rt,
                Prime: ct,
                Tour: Pt,
                TradeReady: dt,
                PrimeReady: pt
            },
            methods: {
                showMask: function(e) {
                    "chartMask" === e.target.id ? this.klineMaskShow = !1 : this.klineMaskShow = !0
                }
            },
            beforeDestroy: function() {
                document.title = "Huobi Korean"
            }
        }
          , Dt = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("div", [i("div", {
                    staticClass: "exchange-container layout-box",
                    on: {
                        click: e.showMask
                    }
                }, [e.showPrimeReady ? i("PrimeReady", {
                    attrs: {
                        "is-prime-vip": e.isPrimeVip
                    }
                }) : e._e(), e._v(" "), i("TradeReady", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.inSymbolWhiteList && !e.showPrimeReady,
                        expression: "!inSymbolWhiteList && !showPrimeReady"
                    }],
                    class: {
                        "trade-ready": !e.inSymbolWhiteList && !e.showPrimeReady
                    },
                    attrs: {
                        "is-prime": e.isPrime && e.showPrime,
                        "base-coin": e.baseCoin,
                        "quote-coin": e.quoteCoin,
                        "symbols-data": e.symbolsData,
                        symbols: "" + e.baseCoin + e.quoteCoin
                    }
                }), e._v(" "), i("div", {
                    staticClass: "exchange-main"
                }, [i("div", {
                    staticClass: "exchange-left card-radius"
                }, [i("div", {
                    staticClass: "exchange-left-table card-radius"
                }, [e.isShowPrime ? i("Prime") : i("Invite"), e._v(" "), i("Market", {
                    attrs: {
                        "currency-name-list": e.currencyNameList,
                        "base-coin": e.baseCoin,
                        "quote-coin": e.quoteCoin,
                        "overview-data": JSON.stringify(e.quoteSortOverviewData),
                        "balance-list": e.balanceList,
                        "currency-data": e.currencyData
                    }
                })], 1), e._v(" "), i("NoticeList"), e._v(" "), i("Banner")], 1), e._v(" "), i("div", {
                    staticClass: "exchange-center exchange-kline"
                }, [e.showPrimeReady ? i("div", {
                    staticStyle: {
                        height: "518px",
                        background: "#fff"
                    }
                }) : i("Card", {
                    attrs: {
                        "show-content": e.showKline,
                        toggle: !0
                    },
                    on: {
                        "toggle-kline": function(t) {
                            return e.showKline = t
                        }
                    }
                }, [i("KlineInfo", {
                    key: e.klineInfo.latestPrice,
                    attrs: {
                        slot: "header",
                        legal: e.legal,
                        "currency-name-list": e.currencyNameList,
                        locale: e.$locale,
                        "base-coin": e.baseCoin,
                        "quote-coin": e.quoteCoin,
                        "kline-info": e.klineInfo
                    },
                    slot: "header"
                }), e._v(" "), i("Kline", {
                    attrs: {
                        slot: "cardBody",
                        "auto-init": e.showKline,
                        "base-coin": e.baseCoin,
                        "quote-coin": e.quoteCoin,
                        "mask-show": e.klineMaskShow
                    },
                    slot: "cardBody"
                })], 1)], 1)]), e._v(" "), i("div", {
                    staticClass: "exchange-main"
                }, [i("div", {
                    staticClass: "exchange-right",
                    staticStyle: {
                        "max-width": "600px"
                    }
                }, [i("TradePanel", {
                    attrs: {
                        "base-price": e.initSellForm.price || "0",
                        "trade-precise": e.precise,
                        "coin-rates": e.proRates,
                        "base-coin": e.baseCoin,
                        "quote-coin": e.quoteCoin,
                        "latest-price": e.klineInfo.latestPrice || "0",
                        "buy-data": e.buyData,
                        "sell-data": e.sellData,
                        "is-prime": e.isPrime && e.showPrime,
                        "in-prime-white-list": e.inPrimeWhiteList,
                        "is-prime-vip": e.isPrimeVip,
                        "show-prime-ready": !!e.showPrimeReady
                    }
                }), e._v(" "), i("MiniKline", {
                    attrs: {
                        "base-coin": e.baseCoin,
                        "quote-coin": e.quoteCoin
                    }
                })], 1), e._v(" "), i("div", {
                    staticClass: "exchange-center-right exchange-trade"
                }, [i("BuysellOrder", {
                    attrs: {
                        "base-coin": e.baseCoin,
                        "quote-coin": e.quoteCoin,
                        "buy-data": e.buyData,
                        "sell-data": e.sellData,
                        "recentdeal-data": e.latestTradeData,
                        "trade-precise": e.precise,
                        "day-open": e.klineInfo.open,
                        "day-amount": e.klineInfo.amount,
                        "day-maxprice": e.klineInfo.high,
                        "day-maxrate": e.klineInfo.highDiffRate,
                        "day-minrate": e.klineInfo.lowDiffRate,
                        "day-minprice": e.klineInfo.low,
                        "amount-precision": e.klineInfo.amountPrecision
                    }
                })], 1)]), e._v(" "), i("div", {
                    staticClass: "exchange-main"
                }, [i("div", {
                    staticClass: "exchange-center exchange-coinintro"
                }, [i("TradeRecord", {
                    ref: "tradeRecord",
                    attrs: {
                        "base-coin": e.baseCoin,
                        "quote-coin": e.quoteCoin
                    }
                }), e._v(" "), i("div", {
                    staticStyle: {
                        "margin-bottom": "10px"
                    }
                }, [i("div", {
                    staticClass: "exchange-right"
                }, [i("Depth", {
                    attrs: {
                        "deep-data": e.depthChartData,
                        "base-coin": e.baseCoin,
                        "quote-coin": e.quoteCoin
                    }
                })], 1), e._v(" "), i("div", {
                    staticClass: "exchange-trade",
                    staticStyle: {
                        "margin-left": "0"
                    }
                }, [i("RecentDeal", {
                    attrs: {
                        "recentdeal-data": e.latestTradeData,
                        "base-coin": e.baseCoin,
                        "quote-coin": e.quoteCoin,
                        "trade-precise": e.precise,
                        "everyday-data": e.dailyTradeData
                    }
                })], 1)]), e._v(" "), i("CoinIntro", {
                    attrs: {
                        coin: e.baseCoin
                    }
                })], 1)])], 1), e._v(" "), i("Tour", {
                    attrs: {
                        name: "myTour"
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var At = i("VU/8")(Lt, Dt, !1, function(e) {
            i("4wPh")
        }, null, null);
        t.default = At.exports
    },
    e2Mm: function(e, t) {},
    f1Eh: function(e, t) {
        e.exports = function(e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []),
                Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return t.l
                    }
                }),
                Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                        return t.i
                    }
                }),
                Object.defineProperty(t, "exports", {
                    enumerable: !0
                }),
                t.webpackPolyfill = 1
            }
            return t
        }
    },
    gUMp: function(e, t) {},
    "i/AU": function(e, t) {},
    ioQ5: function(e, t, i) {
        i("HpRW")("Set")
    },
    kraq: function(e, t) {},
    lHA8: function(e, t, i) {
        e.exports = {
            default: i("pPW7"),
            __esModule: !0
        }
    },
    mBWI: function(e, t) {},
    "mF+o": function(e, t) {},
    mgdD: function(e, t) {},
    nPvI: function(e, t) {},
    oNmr: function(e, t, i) {
        i("9Bbf")("Set")
    },
    pPW7: function(e, t, i) {
        i("M6a0"),
        i("zQR9"),
        i("+tPU"),
        i("ttyz"),
        i("BDhv"),
        i("oNmr"),
        i("ioQ5"),
        e.exports = i("FeBl").Set
    },
    rVIx: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAfNJREFUOBHFUr9PFFEQnpndjXrxiJKLxgtCKEioCTHGThLp+COoLGwo/ANoOU2upuI/oMHEguLgiMZCrY4gFSGQy6nEGO92b3ffe/OceRc6joaC2d3s7Mz3ffPjLcANDcfxu183a1ykOwKIk+TOyqNnb3pXYemqYIiV+bJnfs7sFodFujwOF49LVFzycQDm3HuAB/Hkh3G4a+Pn+++Wep+aS9eBwg5OWut3AWZg9uVqfgnufn4/74zbRSKgCF/VX7z9cZnzJ1uCB8DZ1TzswGT8Hbh3fLbfmNNEt91cKHNzYJmnrLNTzvBBt91Y0NzZl8Zc71f/+Ofv9Jt+BwEpch8RpmXcvdPWxtqw6Lc82xo4C94xWDa10trWaXtjLaHKHiJNA2JVBcISJdARgafOmro1RVOaE2kSDAJ6B7pIQJpI4orkRiaIjnqhA4yijrUWymIoVK90UJb3DHoBSwwJWDByrJoVwyAQOiiy/iFFsRQhIQkdRyJaWf4FGQMg0rjW05ew4oQOVSYIZIN+p/pwEkhaDgAFibmyBFMYoDjAQsyHecTF0Qgh82Ti8VGGUopQNLQ6QT4YQJ5mgRwJSbYRWKrCCBzdqx6pH3ZQX1nPKKJtIvQyq0///vH/Li68M6UchvXeWbnL8LAzXva1XV98nanA7dt/YGjqTV0GQHMAAAAASUVORK5CYII="
    },
    rnFK: function(e, t) {},
    rq46: function(e, t) {},
    sw5I: function(e, t) {},
    ttyz: function(e, t, i) {
        "use strict";
        var a = i("9C8M")
          , n = i("LIJb");
        e.exports = i("qo66")("Set", function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(e) {
                return a.def(n(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, a)
    },
    yIMT: function(e, t, i) {
        e.exports = i.p + "static/web/img/step3.d29fe3c.png"
    },
    yub6: function(e, t) {}
});

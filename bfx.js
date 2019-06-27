(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    101: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return u
        });
        var a = n(1)
          , r = n(27)
          , c = (n(169),
        n(11))
          , o = n(35)
          , i = n(46)
          , s = {};
        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.b;
            return {
                type: c.a.WS_EVENT_HB,
                payload: {
                    chanId: Object(r.isArray)(e) ? e[0] : e
                },
                meta: t
            }
        }
        function u() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.b
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , c = Object(r.isArray)(e) ? e[0] : 0
              , u = s[c]
              , d = Object(i.a)(e, u);
            return "hb" === d ? l(e) : {
                type: Object(r.toUpper)("".concat(d, "_MESSAGE")),
                meta: Object(a.a)({
                    protocol: "WSS",
                    version: "2.0",
                    throttle: !0,
                    throttleDuration: n
                }, t),
                channel: u,
                payload: e
            }
        }
        t.a = {
            wss: u,
            rest: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                return {
                    type: Object(r.toUpper)("".concat(t, "-REST")),
                    meta: {
                        protocol: "REST",
                        version: n
                    },
                    payload: e
                }
            },
            hb: l,
            subscribed: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.b
                  , n = e.chanId
                  , i = void 0 === n ? "-" : n
                  , l = e.symbol
                  , u = void 0 === l ? "" : l
                  , d = e.channel
                  , f = void 0 === d ? "" : d;
                s[i] = e;
                var b = e;
                return Object(r.startsWith)(u, "f") && (b = Object(a.a)({}, e, {
                    channel: "f".concat(f)
                })),
                {
                    type: c.a.WS_EVENT_SUBSCRIBE,
                    payload: b,
                    meta: t
                }
            },
            unsubscribed: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.b
                  , n = e.chanId;
                return delete s[void 0 === n ? "-" : n],
                {
                    type: c.a.WS_EVENT_UNSUBSCRIBE,
                    payload: e,
                    meta: t
                }
            }
        }
    },
    102: function(e, t, n) {
        "use strict";
        var a = n(1)
          , r = n(137)
          , c = n(87);
        t.a = {
            receiveBroadcast: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return {
                    type: c.a.RECV_BROADCAST,
                    meta: {
                        throttle: !0
                    },
                    payload: e
                }
            },
            receiveNotification: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return {
                    type: c.a.RECV_NOTIFICATION,
                    meta: {
                        throttle: !0
                    },
                    payload: e
                }
            },
            notify: function(e) {
                var t = e.type
                  , n = void 0 === t ? "all" : t
                  , o = Object(r.a)(e, ["type"]);
                return {
                    type: c.a.NOTIFY,
                    meta: {
                        throttle: !0
                    },
                    payload: Object(a.a)({
                        type: n
                    }, o)
                }
            },
            notifyDesktop: function(e) {
                return {
                    type: c.a.NOTIFY_DESKTOP,
                    meta: {
                        throttle: !0
                    },
                    payload: e
                }
            },
            requestPermissions: function() {
                return {
                    type: c.a.REQUEST_PERMISSIONS,
                    payload: {}
                }
            },
            toggleSidebar: function() {
                return {
                    type: c.a.TOGGLE_SIDEBAR,
                    payload: {}
                }
            },
            loadMore: function() {
                return {
                    type: c.a.LOAD_MORE,
                    payload: {}
                }
            },
            storeNotification: function(e) {
                return {
                    type: c.a.STORE_NOTIFICATION,
                    meta: {
                        throttle: !0
                    },
                    payload: e
                }
            },
            storeBroadcast: function(e) {
                return {
                    type: c.a.STORE_BROADCAST,
                    meta: {
                        throttle: !0
                    },
                    payload: e
                }
            }
        }
    },
    105: function(e, t, n) {
        "use strict";
        var a = n(0)
          , r = n.n(a)
          , c = n(131)
          , o = n(15)
          , i = n(14)
          , s = n(18)
          , l = n(16)
          , u = n(17)
          , d = n(8)
          , f = n.n(d)
          , b = function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(l.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(i.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.style
                      , n = e.children
                      , a = e.className
                      , c = void 0 === a ? "" : a
                      , o = e.allowOverflowChild
                      , i = void 0 !== o && o
                      , s = f()("ui-panel bg-wrap ".concat(c), {
                        "allow-overflow-child": i
                    });
                    return r.a.createElement("div", {
                        className: s,
                        style: t
                    }, n)
                }
            }]),
            t
        }(r.a.PureComponent)
          , p = n(151)
          , m = n(1)
          , h = n(45)
          , E = n.n(h)
          , v = n(238)
          , _ = n.n(v)
          , O = n(10)
          , g = n.n(O)
          , S = n(346)
          , T = n.n(S)
          , k = function(e) {
            function t() {
                var e;
                return Object(o.a)(this, t),
                (e = Object(s.a)(this, Object(l.a)(t).call(this))).state = {
                    show: !1,
                    place: "top"
                },
                e.nodeRef = Object(a.createRef)(),
                e.tooltipRef = Object(a.createRef)(),
                e
            }
            return Object(u.a)(t, e),
            Object(i.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    T()(function() {
                        e.updatePosition()
                    })
                }
            }, {
                key: "updatePosition",
                value: function() {
                    var e = this
                      , t = this.nodeRef.current
                      , n = this.tooltipRef.current;
                    if (t && n) {
                        var a = this.state.place
                          , r = _()({}, t, n, a, "top", "solid", {})
                          , c = r.isNewState
                          , o = r.newState
                          , i = r.position;
                        if (c)
                            return this.setState(Object(m.a)({}, o), function() {
                                e.updatePosition()
                            });
                        var s = i.left
                          , l = i.top;
                        n.style.left = "".concat(s, "px"),
                        n.style.top = "".concat(l, "px")
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.isScrolling
                      , a = t.tooltipContent
                      , c = t.children
                      , o = t.underline
                      , i = t.cursorHelp
                      , s = t.persistent
                      , l = t.cursorPointer
                      , u = t.preFormatted;
                    if (!a)
                        return c;
                    var d = this.state
                      , b = d.show
                      , p = d.place
                      , m = f()("__react_component_tooltip place-".concat(p, " type-dark __react-tooltip"), {
                        "__react-tooltip--persistent": s,
                        "__react-tooltip--pre-formatted": u,
                        show: b
                    })
                      , h = r.a.createElement("span", {
                        className: "ui-tooltip__wrapper"
                    }, r.a.createElement("div", {
                        className: m,
                        ref: this.tooltipRef
                    }, a))
                      , v = g()(this.nodeRef, "current.ownerDocument.body", null)
                      , _ = n ? null : E.a.createPortal(h, v || document.body)
                      , O = f()("ui-tooltip", {
                        "ui-tooltip--underline": o,
                        "ui-tooltip--cursor-help": i,
                        "ui-tooltip--cursor-pointer": l
                    });
                    return r.a.createElement("span", {
                        className: O,
                        onMouseEnter: function() {
                            return e.setState({
                                show: !0
                            }, function() {
                                return e.updatePosition()
                            })
                        },
                        onMouseLeave: function() {
                            return e.setState({
                                show: !1
                            })
                        },
                        ref: this.nodeRef
                    }, _, c)
                }
            }]),
            t
        }(r.a.PureComponent);
        k.defaultProps = {
            tooltipContent: null,
            underline: !0,
            cursorHelp: !0,
            persistent: !1,
            cursorPointer: !1,
            preFormatted: !1
        };
        var j = function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(l.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(i.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.id
                      , n = e.style
                      , a = void 0 === n ? {} : n
                      , c = e.classes
                      , o = void 0 === c ? [] : c
                      , i = e.dim
                      , s = void 0 !== i && i
                      , l = e.active
                      , u = void 0 !== l && l
                      , d = e.isSimpleTooltip
                      , f = e.tooltip
                      , b = void 0 !== f && f
                      , m = e.spinning
                      , h = void 0 !== m && m
                      , E = "\n      fa fa-".concat(t, "\n      ").concat(o.join(" "), "\n      ").concat(s ? "show50" : "", "\n      ").concat(u ? "bfx-blue" : "", "\n      ").concat(h ? "fa-spin" : "", "\n    ")
                      , v = r.a.createElement("i", {
                        className: E,
                        style: a
                    })
                      , _ = d ? k : p.a
                      , O = r.a.createElement(_, {
                        tooltipContent: b,
                        cursorHelp: !1,
                        cursorPointer: !0
                    }, v);
                    return b ? O : v
                }
            }]),
            t
        }(r.a.PureComponent);
        j.defaultProps = {
            style: {},
            classes: [],
            dim: !1,
            active: !1,
            isSimpleTooltip: !1,
            tooltip: !1,
            spinning: !1
        };
        var y = j
          , A = {
            padding: "0.4rem 1rem",
            textAlign: "left"
        };
        var w = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (e.isLoading) {
                if (e.timedOut)
                    return r.a.createElement(b, {
                        style: A
                    }, r.a.createElement(y, {
                        id: "exclamation-triangle"
                    }), " Loader timed out!");
                if (e.pastDelay)
                    return r.a.createElement(b, {
                        style: A
                    }, r.a.createElement(y, {
                        id: "spinner",
                        spinning: !0
                    }), " Loading...")
            }
            if (e.error)
                return r.a.createElement(b, {
                    style: A
                }, r.a.createElement(y, {
                    id: "times"
                }), " Error! Component failed to load");
            if (e.circleNotch) {
                var t = e.word || Object(c.a)("helpers.loading")
                  , n = r.a.createElement("span", {
                    className: "show-pending show-soft"
                }, r.a.createElement("i", {
                    className: "fa fa-circle-o-notch fa-spin"
                }), "\xa0", t);
                return e.pWrap ? r.a.createElement("p", {
                    style: {
                        textAlign: "center",
                        padding: "36px 0 !important"
                    }
                }, n) : n
            }
            return null
        };
        t.a = function(e) {
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return r.a.createElement(a.Suspense, {
                    maxDuration: 200,
                    fallback: r.a.createElement(w, {
                        isLoading: !0,
                        pastDelay: !0
                    })
                }, r.a.createElement(e, t))
            }
        }
    },
    106: function(e, t, n) {
        "use strict";
        var a = n(27)
          , r = n(84)
          , c = n.n(r)
          , o = n(19);
        var i = function() {
            return function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return Number(new c.a(e.toString()).div(t.toString()))
            }(function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var a = t.reduce(function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return new c.a(e.toString()).plus(t.toString())
                }, 0);
                return Number(a)
            }
            .apply(void 0, arguments), arguments.length)
        };
        n(109);
        n.d(t, "b", function() {
            return s
        }),
        n.d(t, "a", function() {
            return l
        });
        function s() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.from
              , n = void 0 === t ? "BTC" : t
              , a = e.to
              , r = void 0 === a ? "USD" : a
              , c = e.pair
              , s = void 0 === c ? "t".concat(n).concat(r) : c
              , l = e.ticker
              , u = void 0 === l ? {} : l
              , d = e.useMid
              , f = void 0 !== d && d;
            if (n === r)
                return 1;
            var b = Object(o.a)(s)
              , p = "t".concat(r).concat(n)
              , m = !!u[p]
              , h = u[b] || u[p] || {}
              , E = h.lastPrice
              , v = h.ask
              , _ = h.bid
              , O = f || !E ? i(v, _) : E;
            return m ? 1 / O : O
        }
        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.from
              , n = void 0 === t ? "BTC" : t
              , r = e.to
              , c = void 0 === r ? "USD" : r
              , o = e.pair
              , i = void 0 === o ? "t".concat(n).concat(c) : o
              , l = e.amount
              , u = void 0 === l ? 0 : l
              , d = e.ticker
              , f = e.useMid;
            if (0 === u)
                return u;
            var b = u * s({
                from: n,
                to: c,
                pair: i,
                ticker: d,
                useMid: void 0 !== f && f
            })
              , p = "USD" === c ? 2 : 5;
            return Object(a.round)(b, p)
        }
    },
    109: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return S
        }),
        n.d(t, "e", function() {
            return k
        }),
        n.d(t, "b", function() {
            return A
        }),
        n.d(t, "a", function() {
            return I
        }),
        n.d(t, "c", function() {
            return x
        });
        var a, r = n(1), c = n(133), o = n.n(c), i = n(246), s = n.n(i), l = n(132), u = n.n(l), d = n(39), f = n.n(d), b = n(139), p = n.n(b), m = n(10), h = n.n(m), E = n(347), v = n(348), _ = n.n(v), O = n(46), g = 1e3 * Date.now();
        function S(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , n = g += 1
              , a = "AUTH".concat(n).concat(n);
            return {
                apiKey: e,
                authSig: o.a.HmacSHA384(a, t).toString(o.a.enc.Hex),
                authNonce: n,
                authPayload: a,
                event: "auth"
            }
        }
        function T() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (f()(e))
                return "";
            var t = new E.a;
            return Object.keys(e).map(function(n) {
                return t.append(n, e[n])
            }),
            "?".concat(t)
        }
        function k(e) {
            return {
                token: e,
                event: "auth"
            }
        }
        function j() {
            try {
                return (document.querySelector('meta[name="csrf-token"]') || {
                    content: null
                }).content
            } catch (e) {
                return ""
            }
        }
        function y() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.method
              , n = void 0 === t ? "get" : t
              , a = e.url
              , c = void 0 === a ? "" : a
              , o = e.data
              , i = void 0 === o ? {} : o
              , l = e.params
              , u = void 0 === l ? {} : l
              , d = e.headers
              , f = void 0 === d ? {} : d
              , b = e.urlPrefix
              , p = void 0 === b ? "" : b
              , m = e.timeout
              , h = void 0 === m ? 0 : m;
            if ("" === c)
                return O.b.warn("[ bfxuilib/api/restRequest ] bad url provided:", c),
                null;
            var E = "".concat(p).concat(c).concat(T(u))
              , v = "get" !== n || "GET" !== n ? Object(r.a)({
                Accept: "*/*",
                "Content-Type": "application/json;charset=UTF-8",
                "X-CSRF-Token": j()
            }, f) : {
                Accept: "*/*",
                "Content-Type": "application/json;charset=UTF-8"
            };
            return s()({
                data: i,
                method: n,
                url: E,
                headers: v,
                timeout: h
            })
        }
        function A() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return y({
                method: "post",
                url: e.url,
                data: e.data,
                headers: e.headers,
                params: e.params,
                urlPrefix: e.urlPrefix
            })
        }
        var w = !1
          , N = 0
          , C = 45e3;
        function I() {
            var e = Date.now();
            return w || e - N < C ? a : (a = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return y({
                    method: "get",
                    url: e.url,
                    headers: e.headers,
                    params: e.params,
                    urlPrefix: e.urlPrefix
                })
            }({
                url: "/_ws_token"
            }).then(function(e) {
                N = Date.now();
                var t = h()(e, "data.token", null);
                return w = !1,
                t
            }),
            w = !0,
            a)
        }
        function x() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = e.path
              , a = e.method
              , c = void 0 === a ? "post" : a
              , i = e.body
              , s = void 0 === i ? {} : i
              , l = e.params
              , d = void 0 !== l && l
              , f = e._headers
              , b = void 0 === f ? {} : f
              , m = e.timeout
              , h = void 0 === m ? 0 : m
              , E = t.key
              , v = void 0 === E ? "" : E
              , O = t.secret
              , S = void 0 === O ? "" : O
              , k = t.urlPrefix
              , j = void 0 === k ? "" : k
              , A = (g += 1).toString()
              , w = t.devToken || t.token
              , N = "".concat(n).concat(T(d))
              , C = {}
              , I = Object.assign({}, b);
            if (s._multipart) {
                var x = new FormData;
                I["Content-Type"] = "multipart/form-data",
                p()(s, function(e) {
                    "_multipart" !== v && (x.append(v, e),
                    x[v] = e)
                }),
                C = x
            } else
                C = Object.assign(C, s);
            if (w)
                return y({
                    method: c,
                    url: N,
                    data: C,
                    headers: Object(r.a)({}, I, {
                        "bfx-token": w
                    }),
                    urlPrefix: j,
                    timeout: h
                });
            if (u()(n, "/v1/")) {
                C.request = n,
                C.nonce = A;
                var R = _.a.encode(JSON.stringify(C)).toString("base64")
                  , U = o.a.HmacSHA384(R, S).toString(o.a.enc.Hex);
                I["X-BFX-SIGNATURE"] = U,
                I["X-BFX-PAYLOAD"] = R,
                I["X-BFX-APIKEY"] = v
            }
            if (u()(n, "/v2/")) {
                var L = JSON.stringify(C);
                L = "/api".concat(n).concat(A).concat(L),
                L = o.a.HmacSHA384(L, S).toString(o.a.enc.Hex),
                I["bfx-nonce"] = A,
                I["bfx-apikey"] = v,
                I["bfx-signature"] = L
            }
            return y({
                url: N,
                data: C,
                method: c,
                headers: I,
                urlPrefix: j,
                timeout: h
            })
        }
    },
    11: function(e, t, n) {
        "use strict";
        t.a = {
            WS_EVENT_HB: "WS_EVENT_HB",
            WS_EVENT_DATA: "WS_EVENT_DATA",
            WS_EVENT_CONF: "WS_EVENT_CONF",
            WS_EVENT_INFO: "WS_EVENT_INFO",
            WS_EVENT_AUTH: "WS_EVENT_AUTH",
            WS_EVENT_ERROR: "WS_EVENT_ERROR",
            WS_EVENT_CONNECT: "WS_EVENT_CONNECT",
            WS_EVENT_BROADCAST: "WS_EVENT_BROADCAST",
            WS_EVENT_SUBSCRIBE: "WS_EVENT_SUBSCRIBE",
            WS_EVENT_UNSUBSCRIBE: "WS_EVENT_UNSUBSCRIBE",
            WS_EVENT_DISCONNECT: "WS_EVENT_DISCONNECT",
            WS_REQUEST_AUTH: "WS_REQUEST_AUTH",
            WS_REQUEST_CALC: "WS_REQUEST_CALC",
            WS_REQUEST_PING: "WS_REQUEST_PING",
            WS_REQUEST_SEND: "WS_REQUEST_SEND",
            WS_REQUEST_CONNECT: "WS_REQUEST_CONNECT",
            WS_REQUEST_RECONNECT: "WS_REQUEST_RECONNECT",
            WS_REQUEST_DISCONNECT: "WS_REQUEST_DISCONNECT",
            WS_REQUEST_BROADCAST: "WS_REQUEST_BROADCAST",
            WS_REQUEST_SUBSCRIBE: "WS_REQUEST_SUBSCRIBE",
            WS_REQUEST_SUBMIT_ORDER: "WS_REQUEST_SUBMIT_ORDER",
            WS_REQUEST_CANCEL_ORDER: "WS_REQUEST_CANCEL_ORDER",
            WS_STATUS_ONLINE: "online",
            WS_STATUS_OFFLINE: "offline",
            WS_STATUS_CONNECTING: "connecting",
            WS_STATUS_DISCONNECTING: "disconnecting",
            WS_STATUS_UNKNOWN: "unknown",
            WS_SET_TIME_DIFF: "WS_SET_TIME_DIFF",
            WS_SET_SYMBOL: "WS_SET_SYMBOL",
            WS_RESET: "WS_RESET",
            WS_DEBUG_REQ_GLOBAL: "WS_DEBUG_REQ_GLOBAL"
        }
    },
    110: function(e, t, n) {
        "use strict";
        var a = n(137)
          , r = n(15)
          , c = n(14)
          , o = n(18)
          , i = n(16)
          , s = n(17)
          , l = n(1)
          , u = n(0)
          , d = n.n(u)
          , f = n(26)
          , b = n(71)
          , p = n(112)
          , m = function(e) {
            return e.modals
        }
          , h = function(e, t) {
            return m(t)[e] || !1
        }
          , E = function(e) {
            return m(e).data
        }
          , v = function(e) {
            return m(e).extraProps
        };
        function _(e, t) {
            var n = function(e, n) {
                var a = E(e)
                  , r = v(e);
                return Object(l.a)({}, n, {
                    isVisible: h(t, e),
                    modalData: a
                }, r)
            }
              , u = function(e) {
                return {
                    hideModal: function() {
                        e(Object(p.a)())
                    }
                }
            };
            return function(e) {
                return Object(b.a)(Object(f.c)(n, u)(e), "Dialog")
            }(function(t) {
                function n() {
                    return Object(r.a)(this, n),
                    Object(o.a)(this, Object(i.a)(n).apply(this, arguments))
                }
                return Object(s.a)(n, t),
                Object(c.a)(n, [{
                    key: "render",
                    value: function() {
                        var t = this.props
                          , n = t.isVisible
                          , r = Object(a.a)(t, ["isVisible"]);
                        return n ? d.a.createElement(e, r) : null
                    }
                }]),
                n
            }(d.a.PureComponent))
        }
        n.d(t, "a", function() {
            return _
        })
    },
    112: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }),
        n.d(t, "a", function() {
            return c
        });
        var a = n(125);
        function r(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return {
                type: a.a.SHOW_MODAL,
                payload: {
                    id: e,
                    data: t,
                    extraProps: n
                }
            }
        }
        function c(e) {
            return {
                type: a.a.HIDE_MODAL,
                payload: {
                    id: e
                }
            }
        }
    },
    125: function(e, t, n) {
        "use strict";
        t.a = {
            SHOW_MODAL: "BITFINEX/MODAL/SHOW",
            HIDE_MODAL: "BITFINEX/MODAL/HIDE",
            MODAL_DATA: "BITFINEX/MODAL/DATA"
        }
    },
    130: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }),
        n.d(t, "c", function() {
            return c
        }),
        n.d(t, "a", function() {
            return o
        });
        var a = n(19)
          , r = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , n = new Date(e)
              , r = Object(a.g)(n.getDate())
              , c = Object(a.g)(1 + n.getMonth())
              , o = n.getFullYear();
            switch (t) {
            case "%m-%d-%y %H:%M:%S":
                return "".concat(c, "-").concat(r, "-").concat(o);
            case "%y-%m-%d %H:%M:%S":
                return "".concat(o, "-").concat(c, "-").concat(r);
            default:
                return "".concat(r, "-").concat(c, "-").concat(o)
            }
        }
          , c = function(e, t) {
            return "".concat(r(e, t), " ").concat(function(e) {
                return new Date(e).toTimeString().slice(0, 8)
            }(e))
        };
        function o(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = 6e4 * (e.getTimezoneOffset() + t);
            return new Date(e.getTime() + n)
        }
    },
    131: function(e, t, n) {
        "use strict";
        var a = n(342)
          , r = n.n(a)
          , c = n(10)
          , o = n.n(c)
          , i = n(70)
          , s = n.n(i)
          , l = n(167)
          , u = n.n(l)
          , d = n(245)
          , f = n.n(d)
          , b = n(195)
          , p = n.n(b)
          , m = n(39)
          , h = n.n(m)
          , E = n(343)
          , v = n.n(E)
          , _ = n(46);
        t.a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "-"
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , n = u()(e)
              , a = r()(window.I18n, n) ? o()(window.I18n, n) : function(e) {
                return Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    REACT_APP_BLOCKPASS_ID: "ethfinex_token_sales",
                    REACT_APP_BLOCKPASS_ENV: "prod",
                    REACT_APP_PLATFORM: "ethfinex",
                    REACT_APP_TITLE: "Token Sales",
                    REACT_APP_LOGO_PATH: "favicon.ico"
                }).REACT_APP_TESTING || _.b.warn("[i18n] missing translation for", e),
                p()(f()(e, ".", " "))
            }(n);
            return h()(t) ? a : function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = e;
                return s()(t).forEach(function(e) {
                    var a = new RegExp(v()(e),"g");
                    n = f()(n, a, t[e])
                }),
                n
            }(a, t)
        }
    },
    136: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return r
        }),
        n.d(t, "c", function() {
            return c
        }),
        n.d(t, "a", function() {
            return o
        });
        var a = n(55);
        function r(e) {
            return e.id ? {
                type: a.a.UPDATE_SUCCESS_STATUS,
                payload: e
            } : {
                type: a.a.UPDATE_ERROR_STATUS,
                payload: {
                    id: "status.noid"
                }
            }
        }
        function c(e) {
            return e.id ? {
                type: a.a.UPDATE_ERROR_STATUS,
                payload: e
            } : {
                type: a.a.UPDATE_ERROR_STATUS,
                payload: {
                    id: "status.noid"
                }
            }
        }
        function o(e) {
            var t = e.message;
            return "success" === e.level ? {
                type: a.a.UPDATE_SUCCESS_STATUS,
                payload: {
                    message: t
                }
            } : {
                type: a.a.UPDATE_ERROR_STATUS,
                payload: {
                    message: t
                }
            }
        }
        t.b = {
            clearStatus: function() {
                return {
                    type: a.a.CLEAR_STATUS
                }
            },
            updateStatus: function(e) {
                return e.id ? {
                    type: a.a.UPDATE_STATUS,
                    payload: e
                } : {
                    type: a.a.UPDATE_ERROR_STATUS,
                    payload: {
                        id: "status.noid"
                    }
                }
            },
            updateSuccessStatus: r,
            updateErrorStatus: c,
            UINotification: o
        }
    },
    148: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        n(19),
        n(168);
        var a = function(e) {
            return e.data.ticker
        }
    },
    151: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return v
        });
        var a = n(15)
          , r = n(14)
          , c = n(18)
          , o = n(16)
          , i = n(17)
          , s = n(0)
          , l = n.n(s)
          , u = n(45)
          , d = n.n(u)
          , f = n(8)
          , b = n.n(f)
          , p = n(344)
          , m = n.n(p)
          , h = n(345)
          , E = n.n(h)
          , v = function(e) {
            function t() {
                var e;
                return Object(a.a)(this, t),
                (e = Object(c.a)(this, Object(o.a)(t).call(this))).tooltipId = E()("tooltip"),
                e
            }
            return Object(i.a)(t, e),
            Object(r.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.isScrolling
                      , n = e.tooltipContent
                      , a = e.children
                      , r = e.underline
                      , c = e.cursorHelp
                      , o = e.persistent
                      , i = e.cursorPointer
                      , s = e.preFormatted
                      , u = e.offset;
                    if (!this.props.tooltipContent)
                        return this.props.children;
                    var f = b()("__react-tooltip", {
                        "__react-tooltip--persistent": o,
                        "__react-tooltip--pre-formatted": s
                    })
                      , p = l.a.createElement("span", {
                        className: "ui-tooltip__wrapper"
                    }, l.a.createElement(m.a, {
                        id: this.tooltipId,
                        className: f,
                        effect: "solid",
                        delayHide: o ? 1e3 : void 0,
                        offset: u
                    }, n))
                      , h = t ? null : d.a.createPortal(p, document.body)
                      , E = b()("ui-tooltip", {
                        "ui-tooltip--underline": r,
                        "ui-tooltip--cursor-help": c,
                        "ui-tooltip--cursor-pointer": i
                    });
                    return l.a.createElement("span", {
                        "data-tip": !0,
                        "data-for": this.tooltipId,
                        className: E
                    }, h, a)
                }
            }]),
            t
        }(l.a.PureComponent);
        v.defaultProps = {
            tooltipContent: null,
            underline: !0,
            cursorHelp: !0,
            persistent: !1,
            cursorPointer: !1,
            preFormatted: !1
        }
    },
    155: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        });
        n(139);
        var a = n(10)
          , r = n.n(a);
        n(131);
        function c() {
            var e = r()(window, ["navigator", "userAgent"], "unknown");
            return /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(e)
        }
    },
    158: function(e, t, n) {
        "use strict";
        var a = n(0)
          , r = n.n(a)
          , c = n(26)
          , o = n(19)
          , i = n(130)
          , s = n(166)
          , l = Object(c.c)(function(e) {
            return {
                offset: Object(s.b)(e),
                format: Object(s.a)(e)
            }
        })(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.mts
              , n = e.offset
              , a = void 0 === n ? 0 : n
              , c = e.format
              , s = void 0 === c ? "-" : c
              , l = Object(i.a)(new Date(t), a)
              , u = Object(o.g)(l.getDate())
              , d = Object(o.g)(l.getMonth() + 1)
              , f = Object(o.g)(l.getFullYear()).toString().substr(-2);
            switch (s) {
            case "YY-MM-DD HH:mm:ss":
                return r.a.createElement("span", null, f, "-", d, "-", u);
            case "MM-DD-YY HH:mm:ss":
                return r.a.createElement("span", null, d, "-", u, "-", f);
            case "DD-MM-YY HH:mm:ss":
                return r.a.createElement("span", null, u, "-", d, "-", f);
            default:
                return r.a.createElement("span", null, l.toLocaleDateString())
            }
        })
          , u = Object(c.c)(function(e) {
            return {
                offset: Object(s.b)(e)
            }
        })(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.mts
              , n = e.offset
              , a = e.hideSeconds
              , c = void 0 !== a && a
              , s = Object(i.a)(new Date(t), n)
              , l = Object(o.g)(s.getHours())
              , u = Object(o.g)(s.getMinutes())
              , d = c ? null : ":".concat(Object(o.g)(s.getSeconds()));
            return r.a.createElement("span", null, l, ":", u, d)
        });
        t.a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.ts
              , n = e.mts
              , a = e.style
              , c = void 0 === a ? {} : a
              , o = n ? n / 1e3 : t;
            return r.a.createElement("span", {
                style: c
            }, r.a.createElement(l, {
                mts: o
            }), " ", r.a.createElement(u, {
                mts: o
            }))
        }
    },
    166: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }),
        n.d(t, "a", function() {
            return c
        });
        n(19);
        var a = function(e) {
            return e.UI
        }
          , r = function(e) {
            return a(e).utc_offset || 0
        }
          , c = function(e) {
            return a(e).time_format
        }
    },
    168: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        }),
        n.d(t, "c", function() {
            return u
        }),
        n.d(t, "b", function() {
            return d
        });
        var a = n(84)
          , r = n.n(a)
          , c = n(100)
          , o = n.n(c)
          , i = n(154)
          , s = n.n(i);
        function l(e, t) {
            if (s()(e) || s()(t))
                return "";
            var n = function(e, t, n) {
                var a = +t
                  , r = +n;
                return "undefined" === typeof n || 0 === r ? Math[e](t) : s()(a) || "number" !== typeof r || r % 1 !== 0 ? NaN : (a = a.toString().split("e"),
                a = (a = Math[e](+"".concat(a[0], "e").concat(a[1] ? +a[1] - r : -r))).toString().split("e"),
                +"".concat(a[0], "e").concat(a[1] ? +a[1] + r : r))
            }("floor", e, -t);
            if ((n = String(n.toFixed(t))).match(/e(-\d+)/)) {
                var a = n.match(/(\d+.?\d*)e/)[1]
                  , r = n.match(/e(-\d+)/)[1]
                  , c = Math.abs(r);
                return n = (n = Array(c).join("0") + a.replace(/\./, "")).slice(0, t),
                "0.".concat(n)
            }
            if (!n.match(/\./) && t <= 0)
                return n;
            if (!n.match(/\./))
                return "".concat(n, ".").concat(Array(t + 1).join("0"));
            if (n.split(".")[1].length < t) {
                var o = t - n.split(".")[1].length;
                return "".concat(n).concat(Array(o + 1).join("0"))
            }
            return n
        }
        var u = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5
              , n = +e;
            if (!o()(n))
                return e;
            var a = n.toPrecision(t);
            return a.match(/e/) ? new r.a(a).toString() : a
        }
          , d = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = +e;
            return o()(n) ? n.toFixed(t) : e
        }
    },
    169: function(e, t, n) {
        "use strict";
        t.a = {
            DATA_SNAPSHOT: "DATA_SNAPSHOT",
            DATA_UPDATE: "DATA_UPDATE",
            DATA_INSERT: "DATA_INSERT",
            DATA_REMOVE: "DATA_REMOVE",
            DATA_EXECUTED: "DATA_EXECUTED",
            DATA_REQUESTED: "DATA_REQUESTED",
            AMOUNT_AVAIL_MESSAGE: "AMOUNT_AVAIL_MESSAGE",
            CHANNEL_HB: "CHANNEL_HB",
            CHANNEL_SUB: "CHANNEL_SUB",
            CHANNEL_UNSUB: "CHANNEL_UNSUB",
            CHANNEL_NOTIFICATION: "CHANNEL_NOTIFICATION",
            ADD_CHANNEL: "ADD_CHANNEL",
            REMOVE_CHANNEL: "REMOVE_CHANNEL",
            DATA_RESET: "DATA_RESET"
        }
    },
    19: function(e, t, n) {
        "use strict";
        n.d(t, "h", function() {
            return S
        }),
        n.d(t, "b", function() {
            return T
        }),
        n.d(t, "c", function() {
            return y
        }),
        n.d(t, "f", function() {
            return A
        }),
        n.d(t, "g", function() {
            return w
        }),
        n.d(t, "i", function() {
            return N
        }),
        n.d(t, "e", function() {
            return C
        }),
        n.d(t, "d", function() {
            return I
        }),
        n.d(t, "a", function() {
            return x
        }),
        n.d(t, "j", function() {
            return R
        });
        var a = n(323)
          , r = n(20)
          , c = n(84)
          , o = n.n(c)
          , i = n(124)
          , s = n.n(i)
          , l = n(192)
          , u = n.n(l)
          , d = n(93)
          , f = n.n(d)
          , b = n(202)
          , p = n.n(b)
          , m = n(324)
          , h = n.n(m)
          , E = n(167)
          , v = n.n(E)
          , _ = n(98)
          , O = n.n(_)
          , g = n(46)
          , S = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return u()(e) ? u()(t) ? new o.a(e.toString()).toFixed(t) : (g.b.warn("uilib.format.precision: prec is not a number", t),
            e) : (g.b.warn("uilib.format.precision: value is not a number", e),
            "")
        }
          , T = function() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toLocaleString("EN-US")
        }
          , k = function(e) {
            if (!f()(e, ":"))
                return !1;
            var t = p()(e, ":", 2)
              , n = Object(r.a)(t, 2)
              , a = n[0]
              , c = n[1]
              , o = /F\d$/;
            return !(!a.match(o) || !c.match(o))
        };
        function j() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , t = Object(a.a)(e)
              , n = t[0]
              , r = t.slice(1)
              , c = "t" === n || "f" === n ? r.join("") : e;
            return k(e) ? p()(c, ":", 2) : f()(e, "/") ? p()(c, "/", 2) : [c.slice(0, 3), c.slice(3, 6)]
        }
        function y(e, t) {
            var n = j(e)
              , a = Object(r.a)(n, 1)[0]
              , c = void 0 === a ? "-" : a;
            return t ? O()(c) : v()(c)
        }
        function A(e, t) {
            var n = j(e)
              , a = Object(r.a)(n, 2)[1]
              , c = void 0 === a ? "-" : a;
            return t ? O()(c) : v()(c)
        }
        var w = function(e) {
            return h()(e, 2, "0")
        };
        function N() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , t = e.charAt(0);
            return "t" === t || "f" === t ? O()(e.substring(1)) : O()(e)
        }
        function C(e) {
            if (f()(e, "/") || f()(e, ":"))
                return !0;
            var t = s()(N(e));
            return 6 === t || 7 === t
        }
        function I(e) {
            if (f()(e, "/") || f()(e, ":"))
                return !1;
            var t = s()(N(e));
            return 3 === t || 4 === t
        }
        function x() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , t = e ? e.toString() : ""
              , n = t.charAt(0);
            if ("t" === n || "f" === n)
                return t;
            var a = O()(t);
            return C(a) || 8 === a.length ? "t".concat(a) : I(a) ? "f".concat(a) : a
        }
        function R(e) {
            return !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1] ? x(e) : N(e)
        }
    },
    196: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }),
        n.d(t, "b", function() {
            return i
        });
        var a = n(59)
          , r = n(70)
          , c = n.n(r)
          , o = function(e, t) {
            var n = Object(a.a)(e);
            return n.length && n.forEach(function(e) {
                if (e.locales && e.locales[t]) {
                    var n = e.locales[t];
                    c()(n).forEach(function(t) {
                        e[t] = n[t].value
                    })
                }
            }),
            n
        };
        function i(e) {
            return e.length || e[4] ? {
                notification: e[4],
                contributionStatus: e[6]
            } : null
        }
    },
    198: function(e, t, n) {
        "use strict";
        var a = n(0)
          , r = n.n(a)
          , c = n(350)
          , o = n.n(c)
          , i = n(57)
          , s = function(e) {
            var t = e.text
              , n = e.cellSize
              , a = e.margin
              , c = e.errorCorrectionLevel
              , s = e.type
              , l = o()(0, c);
            l.addData(t),
            l.make();
            var u = "img" === s ? l.createImgTag(n, a) : l.createSvgTag(n, a);
            return r.a.createElement(i.a, {
                html: u
            })
        };
        s.defaultProps = {
            errorCorrectionLevel: "Q",
            type: "img",
            margin: 10
        },
        t.a = s
    },
    199: function(e, t, n) {
        "use strict";
        var a = n(5)
          , r = n.n(a)
          , c = n(121)
          , o = n(15)
          , i = n(14)
          , s = n(18)
          , l = n(16)
          , u = n(17)
          , d = n(351)
          , f = {
            local: "blockpass-local",
            staging: "blockpass-staging",
            prod: "blockpass"
        }
          , b = {
            local: "http://172.16.0.203:1337",
            dev: "http://172.16.21.165:1337",
            staging: "https://sandbox-api.blockpass.org",
            prod: "https://asia-api.blockpass.org"
        }
          , p = function(e) {
            function t(e) {
                var n;
                Object(o.a)(this, t),
                n = Object(s.a)(this, Object(l.a)(t).call(this));
                var a = e || {}
                  , r = a.baseUrl
                  , c = a.clientId
                  , i = a.env
                  , u = a.refreshRateMs;
                if (!c)
                    throw new Error("Missing critical config paramaters: clientId");
                return n.env = i || "prod",
                n.refreshRateMs = u || 500,
                n.baseUrl = r || b[n.env],
                n.clientId = c,
                n
            }
            return Object(u.a)(t, e),
            Object(i.a)(t, [{
                key: "generateSSOData",
                value: function() {
                    var e = Object(c.a)(r.a.mark(function e() {
                        var n, a, c, o;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = this.baseUrl,
                                    a = this.clientId,
                                    e.prev = 1,
                                    e.next = 4,
                                    t._fetchAsync("".concat(n, "/api/3rdService/register/session/").concat(a), {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    });
                                case 4:
                                    return c = e.sent,
                                    o = c.data,
                                    this.emit("code-refresh", o),
                                    this._currentSessionId = o.session,
                                    this.stopTicket = this._waitingLoginComplete(this._currentSessionId),
                                    e.abrupt("return", c);
                                case 12:
                                    throw e.prev = 12,
                                    e.t0 = e.catch(1),
                                    e.t0;
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[1, 12]])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "destroy",
                value: function() {
                    this.stopTicket && (this.stopTicket(),
                    this.stopTicket = null)
                }
            }, {
                key: "getApplink",
                value: function() {
                    var e = Object(c.a)(r.a.mark(function e(n) {
                        var a = this;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise(function() {
                                        var e = Object(c.a)(r.a.mark(function e(c) {
                                            var o, i, s;
                                            return r.a.wrap(function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        o = !0;
                                                    case 1:
                                                        if (!o) {
                                                            e.next = 10;
                                                            break
                                                        }
                                                        if (!a._currentSessionId) {
                                                            e.next = 6;
                                                            break
                                                        }
                                                        return s = f[a.env],
                                                        i = "".concat(s, "://service-register/").concat(a.clientId, "?refId=").concat(n, "&session=").concat(a._currentSessionId),
                                                        e.abrupt("break", 10);
                                                    case 6:
                                                        return e.next = 8,
                                                        t._sleep(a.refreshRateMs / 2);
                                                    case 8:
                                                        e.next = 1;
                                                        break;
                                                    case 10:
                                                        c(i);
                                                    case 11:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }, e)
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "_waitingLoginComplete",
                value: function(e) {
                    this.stopTicket && (this.stopTicket(),
                    this.stopTicket = null);
                    var n = this
                      , a = this.refreshRateMs;
                    var o = new function() {
                        var o = this
                          , i = !0;
                        this.start = Object(c.a)(r.a.mark(function c() {
                            var s, l, u;
                            return r.a.wrap(function(r) {
                                for (; ; )
                                    switch (r.prev = r.next) {
                                    case 0:
                                        if (!i) {
                                            r.next = 22;
                                            break
                                        }
                                        return r.next = 3,
                                        n._refreshSessionTicket(e);
                                    case 3:
                                        if (s = r.sent,
                                        i) {
                                            r.next = 6;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 6:
                                        if (s) {
                                            r.next = 10;
                                            break
                                        }
                                        return o.stop(),
                                        n.emit("code-expired"),
                                        r.abrupt("break", 22);
                                    case 10:
                                        if (l = s.data,
                                        "success" !== (u = l.status) && "failed" !== u) {
                                            r.next = 17;
                                            break
                                        }
                                        return n.emit("sso-complete", l),
                                        r.abrupt("break", 22);
                                    case 17:
                                        "processing" === u && n.emit("sso-processing", l);
                                    case 18:
                                        return r.next = 20,
                                        t._sleep(a);
                                    case 20:
                                        r.next = 0;
                                        break;
                                    case 22:
                                    case "end":
                                        return r.stop()
                                    }
                            }, c)
                        })),
                        this.stop = function() {
                            i = !1
                        }
                    }
                    ;
                    return o.start(),
                    o.stop
                }
            }, {
                key: "_refreshSessionTicket",
                value: function() {
                    var e = Object(c.a)(r.a.mark(function e(n) {
                        var a, c;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    a = this.baseUrl,
                                    e.next = 4,
                                    t._fetchAsync("".concat(a, "/api/3rdService/register/status/").concat(n), {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    });
                                case 4:
                                    return c = e.sent,
                                    e.abrupt("return", c);
                                case 8:
                                    return e.prev = 8,
                                    e.t0 = e.catch(0),
                                    console.error(e.t0),
                                    e.abrupt("return", null);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[0, 8]])
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }], [{
                key: "_fetchAsync",
                value: function() {
                    var e = Object(c.a)(r.a.mark(function e(t, n) {
                        var a;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    window.fetch(t, n);
                                case 2:
                                    if (!(a = e.sent).ok) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", a.json());
                                case 5:
                                    return e.abrupt("return", null);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "_sleep",
                value: function() {
                    var e = Object(c.a)(r.a.mark(function e() {
                        var t, n = arguments;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : 1,
                                    e.abrupt("return", new Promise(function(e) {
                                        setTimeout(function() {
                                            e()
                                        }, t)
                                    }
                                    ));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            t
        }(n.n(d).a);
        p.VERSION = "2.1",
        t.a = p
    },
    200: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "saveUI", function() {
            return c
        }),
        n.d(t, "loadSettings", function() {
            return o
        }),
        n.d(t, "toggle", function() {
            return i
        }),
        n.d(t, "toggleCollapsibleWidget", function() {
            return s
        }),
        n.d(t, "toggleSection", function() {
            return l
        }),
        n.d(t, "setFilter", function() {
            return u
        }),
        n.d(t, "resetFilter", function() {
            return d
        }),
        n.d(t, "set", function() {
            return f
        }),
        n.d(t, "setOrder", function() {
            return b
        }),
        n.d(t, "UINotification", function() {
            return p
        }),
        n.d(t, "UISet", function() {
            return m
        }),
        n.d(t, "UIConfirm", function() {
            return h
        }),
        n.d(t, "requestAllTickers", function() {
            return E
        }),
        n.d(t, "chartMessage", function() {
            return v
        }),
        n.d(t, "showModal", function() {
            return _
        }),
        n.d(t, "hideModal", function() {
            return O
        }),
        n.d(t, "cancelOrder", function() {
            return g
        }),
        n.d(t, "editOrder", function() {
            return S
        }),
        n.d(t, "cancelOffer", function() {
            return T
        }),
        n.d(t, "editOffer", function() {
            return k
        });
        var a = n(51)
          , r = n(87);
        function c(e, t, n) {
            return {
                type: a.c.UI_SAVE,
                payload: {
                    section: e,
                    key: t,
                    value: n
                }
            }
        }
        function o(e) {
            return {
                type: a.c.UI_LOAD,
                payload: {
                    config: e
                }
            }
        }
        function i(e) {
            return {
                type: a.c.UI_TOGGLE,
                payload: {
                    section: "collapsibles",
                    key: e
                }
            }
        }
        function s(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return {
                type: a.c.UI_TOGGLE_COLLAPSIBLE_WIDGET,
                payload: {
                    id: e,
                    collapsedByDefault: t,
                    persist: n
                }
            }
        }
        function l(e, t) {
            return {
                type: a.c.UI_TOGGLE_SECTION,
                payload: {
                    section: "collapsibleSections",
                    value: t,
                    key: e
                }
            }
        }
        function u(e, t, n, r) {
            return {
                type: a.c.UI_SET,
                payload: {
                    section: e,
                    column: t,
                    value: n,
                    op: r
                }
            }
        }
        function d(e) {
            return {
                type: a.c.UI_SET,
                payload: {
                    section: e
                }
            }
        }
        function f(e) {
            var t = e.section
              , n = e.key
              , r = e.value;
            return {
                type: a.c.UI_SET,
                payload: {
                    section: t,
                    key: n,
                    value: r
                }
            }
        }
        function b(e, t, n) {
            return {
                type: a.c.UI_SET_ORDER,
                payload: {
                    section: e,
                    key: t,
                    direction: n
                }
            }
        }
        function p() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.message
              , n = e.type
              , a = e.level
              , c = void 0 === a ? "info" : a
              , o = e.sound
              , i = e.image
              , s = e.link
              , l = e.title
              , u = e.ttl;
            return {
                type: r.a.NOTIFY,
                meta: {
                    throttle: !0
                },
                payload: {
                    message: t,
                    type: n,
                    level: c,
                    sound: o,
                    image: i,
                    link: s,
                    title: l,
                    ttl: u
                }
            }
        }
        function m(e, t) {
            return {
                type: "UI_SET",
                payload: {
                    section: e,
                    value: t
                }
            }
        }
        function h(e, t, n) {
            return {
                type: "SHOW_CONFIRM",
                payload: {
                    message: e,
                    method: t,
                    url: n
                }
            }
        }
        function E() {
            return {
                type: "REQUEST_ALL_TICKERS"
            }
        }
        function v(e) {
            return {
                type: "BFXFT/CHART/CHART_MESSAGE",
                payload: e
            }
        }
        function _(e) {
            return {
                type: "BFXFT_MODAL_SHOW",
                id: e,
                data: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                isPopup: arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            }
        }
        function O(e) {
            return {
                type: "BFXFT_MODAL_HIDE",
                id: e,
                isPopup: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            }
        }
        function g(e) {
            return {
                type: "BFXFT_ORDER_CANCEL",
                orderId: e
            }
        }
        function S(e) {
            return {
                type: "BFXFT_ORDER_EDIT",
                payload: e
            }
        }
        function T(e) {
            return {
                type: "BFXFT_OFFER_CANCEL",
                offerId: e
            }
        }
        function k(e, t) {
            return {
                type: "BFXFT_OFFER_EDIT",
                payload: e,
                offerId: t
            }
        }
        t.default = {
            saveUI: c,
            loadSettings: o,
            toggle: i,
            toggleCollapsibleWidget: s,
            toggleSection: l,
            setFilter: u,
            resetFilter: d,
            setOrder: b,
            set: f,
            UINotification: p,
            UISet: m,
            UIConfirm: h,
            requestAllTickers: E,
            chartMessage: v,
            showModal: _,
            hideModal: O,
            cancelOrder: g,
            editOrder: S,
            cancelOffer: T,
            editOffer: k
        }
    },
    207: function(e, t, n) {
        "use strict";
        var a = n(0)
          , r = n.n(a)
          , c = n(15)
          , o = n(18)
          , i = n(16)
          , s = n(14)
          , l = n(17)
          , u = n(9)
          , d = n(39)
          , f = n.n(d)
          , b = n(12)
          , p = n(242)
          , m = n(57)
          , h = n(198)
          , E = n(158)
          , v = n(155)
          , _ = n(199)
          , O = function(e) {
            function t(e) {
                var n;
                Object(c.a)(this, t),
                (n = Object(o.a)(this, Object(i.a)(t).call(this, e))).state = {
                    mobileUrl: "",
                    qrData: "",
                    processing: !1,
                    checkingStatus: !1
                };
                return n.sdk = new _.a({
                    clientId: "ethfinex_token_sales",
                    refreshRateMs: 1e3,
                    env: "prod"
                }),
                n.calledPostStartKyc = !1,
                n.onBlockpassCodeRefresh = n.onBlockpassCodeRefresh.bind(Object(u.a)(Object(u.a)(n))),
                n.onBlockpassProcessing = n.onBlockpassProcessing.bind(Object(u.a)(Object(u.a)(n))),
                n.onBlockpassSSoResult = n.onBlockpassSSoResult.bind(Object(u.a)(Object(u.a)(n))),
                n.onSessionExpired = n.onSessionExpired.bind(Object(u.a)(Object(u.a)(n))),
                n.renderBlockpass = n.renderBlockpass.bind(Object(u.a)(Object(u.a)(n))),
                n.checkStatus = n.checkStatus.bind(Object(u.a)(Object(u.a)(n))),
                n.sdk.on("code-refresh", n.onBlockpassCodeRefresh),
                n.sdk.on("sso-processing", n.onBlockpassProcessing),
                n.sdk.on("sso-complete", n.onBlockpassSSoResult),
                n.sdk.on("code-expired", n.onSessionExpired),
                n
            }
            return Object(l.a)(t, e),
            Object(s.a)(t, null, [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    var n = e.userTokenSale
                      , a = e.isFetching
                      , r = t.processing
                      , c = t.checkingStatus
                      , o = n.startedKycAt;
                    return {
                        processing: !(r && o),
                        checkingStatus: !(c && !a)
                    }
                }
            }]),
            Object(s.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.userTokenSale
                      , a = t.userStage
                      , r = t.requestKycStatus
                      , c = n.passedKycAt
                      , o = n.startedKycAt
                      , i = n.uuid
                      , s = n.tsid;
                    o && !c && r(s, i),
                    2 !== a || f()(n) || c || (this.sdk.generateSSOData(),
                    Object(v.a)() && this.sdk.getApplink().then(function(t) {
                        e.setState({
                            mobileUrl: t
                        })
                    }))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.unmounting = !0
                }
            }, {
                key: "onBlockpassCodeRefresh",
                value: function(e) {
                    if (!this.unmounting) {
                        var t = this.props.userTokenSale.uuid
                          , n = JSON.stringify({
                            clientId: "ethfinex_token_sales",
                            session: e.session,
                            refId: t
                        });
                        this.setState({
                            qrData: n,
                            processing: !1
                        })
                    }
                }
            }, {
                key: "onBlockpassProcessing",
                value: function() {
                    if (!this.unmounting) {
                        if (!this.calledPostStartKyc) {
                            var e = this.props
                              , t = e.postStartKyc
                              , n = e.tokenSale;
                            this.calledPostStartKyc = !0,
                            t(n._id),
                            this.setState({
                                processing: !0
                            })
                        }
                        this.sdk.generateSSOData()
                    }
                }
            }, {
                key: "onBlockpassSSoResult",
                value: function() {
                    this.unmounting || this.setState({
                        processing: !1
                    })
                }
            }, {
                key: "onSessionExpired",
                value: function() {
                    this.sdk.generateSSOData()
                }
            }, {
                key: "checkStatus",
                value: function() {
                    var e = this.props
                      , t = e.userTokenSale
                      , n = e.requestKycStatus
                      , a = t.uuid
                      , r = t.tsid;
                    this.setState({
                        checkingStatus: !0
                    }),
                    n(r, a)
                }
            }, {
                key: "renderBlockpass",
                value: function() {
                    var e = this.props
                      , t = e.userTokenSale
                      , n = e.t
                      , a = this.state
                      , c = a.processing
                      , o = a.qrData
                      , i = a.mobileUrl
                      , s = t.passedKycAt
                      , l = t.startedKycAt;
                    return c ? r.a.createElement(p.a, {
                        size: 25
                    }) : s ? null : Object(v.a)() ? r.a.createElement("h5", null, r.a.createElement("a", {
                        href: i
                    }, n("token_sales.contribution_process.mobile_blockpass_link"))) : r.a.createElement("div", null, !l && r.a.createElement(r.a.Fragment, null, r.a.createElement("br", null), r.a.createElement("div", {
                        className: "ts-kyc-subcontent"
                    }, r.a.createElement(m.a, {
                        html: n("token_sales.contribution_process.download_blockpass")
                    }))), r.a.createElement(h.a, {
                        cellSize: 4,
                        text: o
                    }), l && r.a.createElement(r.a.Fragment, null, r.a.createElement("br", null), n("token_sales.contribution_process.kyc_status"), n("token_sales.contribution_process.kyc_submitted_on"), r.a.createElement(E.a, {
                        ts: l
                    })))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.tokenSale
                      , n = e.userTokenSale
                      , a = e.userStage
                      , c = e.t
                      , o = this.state.checkingStatus
                      , i = n.passedKycAt
                      , s = n.startedKycAt
                      , l = Date.parse(t.drawEnd);
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "ts-number-circle hide-on-med-and-down"
                    }, 2), r.a.createElement("div", {
                        className: "ts-stage"
                    }, r.a.createElement("div", {
                        className: "ts-stage-descr"
                    }, r.a.createElement("div", {
                        className: "col"
                    }, r.a.createElement("h5", null, c("token_sales.contribution_process.sumbit")), r.a.createElement("h5", null, c("token_sales.contribution_process.deadline"), r.a.createElement(E.a, {
                        ts: l
                    }))), c("token_sales.contribution_process.pass_kyc")), r.a.createElement("div", {
                        className: "ts-stage-content"
                    }, r.a.createElement("div", {
                        className: "col center"
                    }, r.a.createElement("div", {
                        className: "row"
                    }, i ? r.a.createElement("h5", null, c("token_sales.contribution_process.kyc_approved")) : r.a.createElement(r.a.Fragment, null, 2 === a && this.renderBlockpass()))), !i && s && r.a.createElement("div", {
                        className: "col center"
                    }, r.a.createElement("button", {
                        className: "ts-stage-status-button",
                        onClick: this.checkStatus,
                        disabled: o,
                        type: "button"
                    }, o ? r.a.createElement(p.a, {
                        size: 15
                    }) : c("token_sales.contribution_process.check_status")), r.a.createElement("div", {
                        className: "ts-kyc-subcontent"
                    }, c("token_sales.contribution_process.waiting_kyc"))))))
                }
            }]),
            t
        }(r.a.PureComponent)
          , g = Object(b.e)("translations")(O)
          , S = function(e) {
            function t(e) {
                var n;
                return Object(c.a)(this, t),
                (n = Object(o.a)(this, Object(i.a)(t).call(this, e))).checkingStatus = !1,
                n.checkStatus = n.checkStatus.bind(Object(u.a)(Object(u.a)(n))),
                n
            }
            return Object(l.a)(t, e),
            Object(s.a)(t, [{
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props.isFetching;
                    this.checkingStatus && !e && (this.checkingStatus = !1)
                }
            }, {
                key: "checkStatus",
                value: function() {
                    var e = this.props
                      , t = e.tokenSale
                      , n = e.requestUserTokenSale
                      , a = e.authStatus;
                    this.checkingStatus = !0,
                    n(t._id, a)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.tokenSale
                      , n = e.userStage
                      , a = e.drawTimeLeft
                      , c = e.t
                      , o = t.currentRound
                      , i = void 0 === o ? 1 : o
                      , s = t.numberOfRounds
                      , l = void 0 === s ? 1 : s
                      , u = t.drawEnd
                      , d = Date.parse(u);
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "ts-number-circle hide-on-med-and-down"
                    }, 3), r.a.createElement("div", {
                        className: "ts-stage ts-winner"
                    }, r.a.createElement("div", {
                        className: "ts-stage-descr"
                    }, r.a.createElement("h5", null, c("token_sales.contribution_process.draw_winners"), r.a.createElement("br", null), c("token_sales.about.round_n_of_n", {
                        currentRound: i,
                        numberOfRounds: l
                    })), d > new Date ? c("token_sales.contribution_process.entry_countdown", {
                        drawTimeLeft: a
                    }) : c("token_sales.contribution_process.entry_process"), r.a.createElement("br", null), c("token_sales.contribution_process.winner_selection")), r.a.createElement("div", {
                        className: "ts-stage-content"
                    }, r.a.createElement("div", {
                        className: "col center"
                    }, n > 3.1 && r.a.createElement("div", null, r.a.createElement("div", {
                        className: "row center"
                    }, r.a.createElement("img", {
                        className: "ts-clapping",
                        alt: "Hands Clapping",
                        src: "/images/purple-clapping.png"
                    })), r.a.createElement("div", {
                        className: "row center"
                    }, r.a.createElement("h3", null, c("token_sales.contribution_process.congratulations")))), 3.1 === n && r.a.createElement("div", {
                        className: "row center"
                    }, r.a.createElement("h3", null, c("token_sales.contribution_process.no_win"))), 3 === n && d < new Date && r.a.createElement("button", {
                        type: "button",
                        className: "ts-stage-status-button",
                        onClick: this.checkStatus,
                        disabled: this.checkingStatus
                    }, this.checkingStatus ? r.a.createElement(p.a, {
                        size: 15
                    }) : c("token_sales.contribution_process.check_status"))))))
                }
            }]),
            t
        }(r.a.PureComponent);
        S.defaultProps = {
            tokenSale: {},
            requestUserTokenSale: function() {
                return null
            },
            isFetching: !1,
            drawTimeLeft: "",
            userStage: 1
        };
        var T = Object(b.e)("translations")(S)
          , k = n(8)
          , j = n.n(k)
          , y = n(10)
          , A = n.n(y)
          , w = n(619)
          , N = n(326)
          , C = n(123)
          , I = n(255)
          , x = n(311)
          , R = function(e) {
            function t(e) {
                var n;
                Object(c.a)(this, t);
                var a = (n = Object(o.a)(this, Object(i.a)(t).call(this, e))).props.userTokenSale
                  , r = A()(a, ["winner"], !1);
                return n.postedContributeETH = !1,
                n.notifiedSuccess = !1,
                n.agreed = !1,
                n.state = r ? {
                    contributeETHDisabled: !1,
                    amount: ""
                } : {
                    contributeETHDisabled: !0,
                    amount: ""
                },
                n.contributeETH = n.contributeETH.bind(Object(u.a)(Object(u.a)(n))),
                n.agreeSalesAgreement = n.agreeSalesAgreement.bind(Object(u.a)(Object(u.a)(n))),
                n.amountChanged = n.amountChanged.bind(Object(u.a)(Object(u.a)(n))),
                n.populateAmount = n.populateAmount.bind(Object(u.a)(Object(u.a)(n))),
                n
            }
            return Object(l.a)(t, e),
            Object(s.a)(t, [{
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props
                      , t = e.contributeETHFetching
                      , n = e.userTokenSale
                      , a = e.notify
                      , r = e.t
                      , c = e.ethBalance
                      , o = e.requestBalance
                      , i = n.agreedSalesAgreement
                      , s = void 0 !== i && i
                      , l = n.winner
                      , u = void 0 !== l && l;
                    this.notifiedSuccess || !this.postedContributeETH || u || (this.notifiedSuccess = !0,
                    a({
                        message: r("token_sales.contribution_process.success_contributed"),
                        level: "success"
                    })),
                    this.postedContributeETH && !t && u && (this.postedContributeETH = !1,
                    this.setState({
                        contributeETHDisabled: !1
                    })),
                    this.agreed && s && (this.agreed = !1,
                    this.contributeETH()),
                    f()(n) || c || this.fetchedBalance || (this.fetchedBalance = !0,
                    o("ETH"))
                }
            }, {
                key: "agreeSalesAgreement",
                value: function() {
                    var e = this.props
                      , t = e.tokenSale
                      , n = e.postAgreeSalesAgreement;
                    this.agreed = !0,
                    n(t._id)
                }
            }, {
                key: "contributeETH",
                value: function() {
                    var e = this.props
                      , t = e.tokenSale
                      , n = e.postContributeETH
                      , a = e.showAgreementModal
                      , r = e.userTokenSale
                      , c = e.ethBalance
                      , o = e.notify
                      , i = e.t
                      , s = this.state.amount
                      , l = t.agreementHtml
                      , u = t.minAllocation
                      , d = t.maxAllocation
                      , f = s && s.length > 0 ? Number.parseFloat(s) : 0;
                    if (l && l.length > 0 && !r.agreedSalesAgreement)
                        return void a();
                    var b = A()(r, ["winner"], !1)
                      , p = t.contributeEnd;
                    if (p && new Date(Date.parse(p)) < new Date)
                        return void o({
                            message: i("token_sales.contribution_process.contribution_ended"),
                            level: "error"
                        });
                    b && !this.postedContributeETH ? f < u ? o({
                        message: "".concat(i("token_sales.contribution_process.min_eth", {
                            minAllocation: u
                        }), " ").concat(i("token_sales.contribution_process.where_to_get_eth")),
                        level: "error"
                    }) : f > d ? o({
                        message: "".concat(i("token_sales.contribution_process.max_eth", {
                            maxAllocation: d
                        }), " ").concat(i("token_sales.contribution_process.where_to_get_eth")),
                        level: "error"
                    }) : c < u ? o({
                        message: "".concat(i("token_sales.contribution_process.not_enough_eth", {
                            ethNeeded: u
                        }), " ").concat(i("token_sales.contribution_process.where_to_get_eth")),
                        level: "error"
                    }) : (this.postedContributeETH = !0,
                    this.setState({
                        contributeETHDisabled: !0
                    }),
                    n(t._id, f)) : o({
                        message: i("token_sales.contribution_process.already_contributed"),
                        level: "error"
                    })
                }
            }, {
                key: "amountChanged",
                value: function(e) {
                    this.setState({
                        amount: e.target.value
                    })
                }
            }, {
                key: "populateAmount",
                value: function() {
                    var e = this.props
                      , t = e.ethBalance
                      , n = e.tokenSale.maxAllocation
                      , a = t > n ? n : t;
                    this.setState({
                        amount: a.toString()
                    })
                }
            }, {
                key: "renderInput",
                value: function() {
                    var e = this.props
                      , t = e.contributeETHFetching
                      , n = e.tokenSale
                      , a = e.userTokenSale
                      , c = e.ethBalance
                      , o = e.t
                      , i = t || f()(a)
                      , s = A()(a, ["contributedETH"], 0)
                      , l = this.state
                      , u = l.contributeETHDisabled
                      , d = l.amount
                      , b = j()({
                        "ts-stage-contribute-button": !0,
                        contributed: u
                    })
                      , m = n.minAllocation
                      , h = n.maxAllocation;
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "col center"
                    }, r.a.createElement(w.a, null, r.a.createElement("div", {
                        className: "col ts-allocation-amount input-field"
                    }, r.a.createElement(N.a, {
                        id: "allocation-amount",
                        type: "number",
                        value: d,
                        min: m,
                        max: h,
                        onChange: this.amountChanged,
                        placeholder: o("token_sales.contribution_process.contribute_label", {
                            minAllocation: m,
                            maxAllocation: h
                        })
                    })), r.a.createElement("br", null), r.a.createElement("div", null, "ETH", " ", o("account.balance"), ":", r.a.createElement(I.a, {
                        onClick: this.populateAmount,
                        link: !0
                    }, c)), r.a.createElement("br", null), r.a.createElement(C.b, {
                        className: b,
                        disabled: u,
                        onClick: this.contributeETH
                    }, i ? r.a.createElement(p.a, {
                        size: 15
                    }) : o("token_sales.contribution_process.contribute_button1"))), r.a.createElement("br", {
                        className: "clear"
                    }), r.a.createElement("h5", null, s, "\xa0", o("token_sales.contribution_process.contributed"))))
                }
            }, {
                key: "renderContributed",
                value: function() {
                    var e = this.props
                      , t = e.userTokenSale
                      , n = e.t
                      , a = t.contributedETH
                      , c = void 0 === a ? 0 : a;
                    return r.a.createElement("h5", null, c, "\xa0", n("token_sales.contribution_process.contributed"))
                }
            }, {
                key: "renderContentColumn",
                value: function() {
                    var e = this.props.userTokenSale.winner;
                    return void 0 !== e && e ? this.renderInput() : this.renderContributed()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.tokenSale
                      , n = e.contributeTimeLeft
                      , a = e.userTokenSale
                      , c = e.notify
                      , o = e.userStage
                      , i = e.t
                      , s = A()(a, ["agreedSalesAgreement"], !1)
                      , l = t.agreementTitle
                      , u = t.agreementHtml
                      , d = t.agreementUrl;
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "ts-number-circle hide-on-med-and-down"
                    }, 4), r.a.createElement("div", {
                        className: "ts-stage"
                    }, r.a.createElement("div", {
                        className: "ts-stage-descr"
                    }, r.a.createElement("h5", null, i("token_sales.contribution_process.eth_contribution"), r.a.createElement("br", null), i("token_sales.contribution_process.time", {
                        time: n
                    })), i("token_sales.contribution_process.ensure_eth")), r.a.createElement("div", {
                        className: "ts-stage-content"
                    }, this.renderContentColumn())), 4 === o && r.a.createElement(x.a, {
                        agreementTitle: l,
                        agreementHtml: u,
                        agreementUrl: d,
                        agreed: s,
                        notify: c,
                        agreeAgreement: this.agreeSalesAgreement
                    }))
                }
            }]),
            t
        }(r.a.PureComponent);
        R.defaultProps = {
            tokenSale: {},
            userTokenSale: {},
            postContributeETH: function() {
                return null
            },
            postAgreeSalesAgreement: function() {
                return null
            },
            showAgreementModal: function() {
                return null
            },
            notify: function() {
                return null
            },
            ethBalance: 0,
            userStage: 1,
            contributeETHFetching: !1,
            contributeTimeLeft: ""
        };
        var U = Object(b.e)("translations")(R)
          , L = function(e) {
            function t() {
                return Object(c.a)(this, t),
                Object(o.a)(this, Object(i.a)(t).apply(this, arguments))
            }
            return Object(l.a)(t, e),
            Object(s.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.tokenSale
                      , n = e.userTokenSale
                      , a = e.t
                      , c = t.transferSuccessMessage
                      , o = void 0 === c ? "" : c
                      , i = t.transferWaitMessage
                      , s = void 0 === i ? "" : i
                      , l = n.transferedETH;
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "ts-number-circle hide-on-med-and-down"
                    }, 5), r.a.createElement("div", {
                        className: "ts-stage"
                    }, r.a.createElement("div", {
                        className: "ts-stage-descr"
                    }, r.a.createElement("h5", null, a("token_sales.contribution_process.stage5_title"))), r.a.createElement("div", {
                        className: "ts-stage-five-content"
                    }, r.a.createElement("h5", null, l ? o : s))))
                }
            }]),
            t
        }(r.a.PureComponent);
        L.defaultProps = {
            tokenSale: {},
            userTokenSale: {}
        };
        var P = Object(b.e)("translations")(L);
        n.d(t, "c", function() {
            return M
        }),
        n.d(t, "b", function() {
            return W
        }),
        n.d(t, "d", function() {
            return F
        }),
        n.d(t, "a", function() {
            return H
        }),
        n.d(t, "e", function() {
            return B
        });
        var D = function(e) {
            return e < 10 ? "0".concat(e) : e
        }
          , M = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!e)
                return "";
            var n = new Date
              , a = new Date(Date.parse(e));
            if (n >= a)
                return "0d 0h 0m 0s";
            var r = parseInt((a - n) / 864e5, 10)
              , c = parseInt(Math.abs(a - n) / 36e5 % 24, 10)
              , o = parseInt(Math.abs((a.getTime() - n.getTime()) / 6e4) % 60, 10)
              , i = parseInt(Math.abs((a.getTime() - n.getTime()) / 1e3) % 60, 10);
            return t ? {
                days: r,
                hours: c,
                minutes: o,
                seconds: i
            } : "".concat(r, "d ").concat(D(c), "h ").concat(D(o), "m ").concat(D(i), "s")
        }
          , W = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.stage
              , n = e.shiftFactor
              , a = e.userStage
              , c = "stage".concat(t)
              , o = {
                stage2: g,
                stage3: T,
                stage4: U,
                stage5: P
            }[c];
            return a >= t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                className: "ts-shiftup",
                style: {
                    top: "-".concat(30 * n, "px")
                }
            }, r.a.createElement("div", {
                className: "ts-vertical-line ts-long hide-on-med-and-down"
            }), r.a.createElement("div", {
                className: "ts-shiftup"
            }, r.a.createElement(o, e)))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                className: "ts-shiftup hide-on-med-and-down",
                style: {
                    top: "-".concat(30 * (a - 1), "px")
                }
            }, r.a.createElement("div", {
                className: "ts-vertical-line ts-thin-line"
            }), r.a.createElement("div", {
                className: "ts-shiftup"
            }, r.a.createElement("div", {
                className: "ts-number-circle ts-thin"
            }, t))))
        }
          , F = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.userTokenSale
              , n = e.necBalance
              , a = void 0 === n ? 0 : n
              , r = t.NECPerSU;
            return function(e, t) {
                var n = 0;
                return e.forEach(function(e, a) {
                    t >= e && (n = a + 1)
                }),
                n
            }(void 0 === r ? [] : r, a)
        }
          , H = function(e) {
            var t = e.t;
            return r.a.createElement("span", {
                className: "ts-completed"
            }, t("helpers.completed"))
        }
          , B = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , t = arguments.length > 1 ? arguments[1] : void 0;
            if (!(window && "object" === typeof window))
                return !1;
            var n = e ? window.innerHeight - window.innerHeight / 100 * e : window.innerHeight;
            return {
                width: document.body.clientWidth,
                height: n < t ? n : t
            }
        }
    },
    22: function(e, t, n) {
        "use strict";
        t.a = {
            MENU_MODE_ICON: "icon",
            MENU_MODE_NORMAL: "normal",
            MENU_MODE_HOVER: "hover",
            DATE_FORMATS: ["DD-MM-YY", "MM-DD-YY", "YY-MM-DD"],
            SET_API_KEY: "BITFINEX/AUTH/SET_API_KEY",
            SET_API_SECRET: "BITFINEX/AUTH/SET_API_SECRET",
            SET_AUTH_TOKEN: "BITFINEX/AUTH/SET_AUTH_TOKEN",
            SET_WS_AUTH_TOKEN: "BITFINEX/AUTH/SET_WS_AUTH_TOKEN",
            SET_DATE_FORMAT: "BITFINEX/DATEFORMAT/SET",
            SET_LANG: "BITFINEX/LANG/SET",
            SET_MENU_MODE: "BITFINEX/MENU/SET",
            SET_QUERY_LIMIT: "BITFINEX/QUERY_LIMIT/SET",
            SET_THEME: "BITFINEX/THEME/SET",
            SET_TIMEZONE: "BITFINEX/TIMEZONE/SET",
            UPDATE_THEME: "BITFINEX/THEME/UPDATE",
            SHOW_MILLISECONDS: "BITFINEX/MILLISECONDS/SET",
            DEFAULT_BASE_QUERY_LIMIT: 125,
            SET_OWNER_EMAIL: "BITFINEX/EMAIL/OWNER",
            SET_PLATFORM: "BITFINEX/PLATFORM/INFO",
            DEFAULT_THEME: "bp3-dark"
        }
    },
    235: function(e, t, n) {
        "use strict";
        n(1),
        n(20),
        n(197),
        n(247),
        n(306),
        n(10),
        n(113),
        n(139);
        var a = n(100)
          , r = n.n(a);
        n(195),
        n(168),
        n(19),
        n(86),
        n(38),
        n(79),
        n(239),
        n(310);
        function c(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
            return Math.max(0, t - 1 - Math.floor(Math.log10(e)))
        }
        n.d(t, "c", function() {
            return c
        }),
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return s
        });
        var o = {};
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.number
              , n = e.decimals
              , a = e.significantFigures
              , c = e.useGrouping
              , i = {
                useGrouping: void 0 !== c && c
            };
            r()(n) && n >= 0 ? (i.minimumFractionDigits = n,
            i.maximumFractionDigits = n) : r()(a) && (i.minimumSignificantDigits = 0 !== t ? a : 3,
            i.maximumSignificantDigits = a);
            var s = "".concat(i.useGrouping, "-").concat(i.minimumFractionDigits, "-") + "".concat(i.maximumFractionDigits, "-").concat(i.minimumSignificantDigits, "-") + "".concat(i.maximumSignificantDigits)
              , l = o[s];
            return l || (l = new Intl.NumberFormat("EN-US",i),
            o[s] = l),
            l.format(t)
        }
        function s(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.strike
              , a = void 0 === n ? null : n
              , c = t.coloredStrike
              , o = void 0 === c || c
              , i = t.includeStrike
              , s = void 0 !== i && i;
            if (r()(e) && r()(a)) {
                if (e === a) {
                    if (!o)
                        return;
                    if (s)
                        return "bfx-green-text"
                }
                return e > a ? "bfx-green-text" : "bfx-red-text"
            }
        }
    },
    237: function(e, t, n) {
        "use strict";
        var a = n(0)
          , r = n.n(a)
          , c = n(67)
          , o = n(105)
          , i = Object(o.a)(Object(a.lazy)(function() {
            return n.e(9).then(n.bind(null, 624))
        }))
          , s = Object(o.a)(Object(a.lazy)(function() {
            return n.e(12).then(n.bind(null, 625))
        }));
        t.a = function() {
            return r.a.createElement(c.d, null, r.a.createElement(c.b, {
                exact: !0,
                path: "/token-sales",
                component: i
            }), r.a.createElement(c.b, {
                path: "/token-sales/:id/:slug",
                component: s
            }), r.a.createElement(c.b, {
                path: "*",
                component: i
            }))
        }
    },
    239: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var a, r = n(24), c = "current_dialog_id", o = "current_dialog_data", i = (a = {
            chart_settings: null,
            chart_height: 515,
            chart_interval: "30",
            show_chart_orders: !0,
            show_chart_positions: !0,
            show_chart_alerts: !0,
            algorithmic_orders: {},
            dev_ws: !1,
            dev_ws_token: "",
            show_desktop_alerts: !1,
            theme: "dark-theme",
            current_chart_theme: "dark-theme",
            sidebar_side: "left",
            favorite_symbols: [],
            ticker_vol_unit: "usd",
            balance_market_equivalent: !1,
            order_form_future_leverage: 10,
            order_history_filter: "all",
            minimized_orders_pairs: [],
            book_throttle: !1,
            book_layout: 2,
            book_visualization: !1,
            book_precision: 0,
            orders_filter: "all",
            balances_tab: "both",
            trades_tab: "0",
            collapsed_groups_of_orders: {},
            collapsed_widgets: {},
            filter_by_symbol: !1,
            tables_sorting: {},
            ticker_favorites_only: !1,
            charts_list: [],
            balances_overlay: "",
            total_equivalent_currency: "USD",
            ticker_list_custom_order: "",
            notify_main_enabled: !0,
            notify_funding_enabled: !0,
            notify_trades_enabled: !0,
            notify_orders_enabled: !0,
            email_tx_withdrawal_completed: !0,
            email_tx_deposit_arrived: !0,
            email_tx_deposit_completed: !0,
            wallets_hide_small_balances: !0
        },
        Object(r.a)(a, c, null),
        Object(r.a)(a, o, null),
        Object(r.a)(a, "loyalty_tab", "NEC"),
        a)
    },
    240: function(e, t, n) {
        "use strict";
        var a = n(15)
          , r = n(14)
          , c = n(18)
          , o = n(16)
          , i = n(17)
          , s = n(9)
          , l = n(0)
          , u = n.n(l)
          , d = function(e) {
            return Math.max(0, Math.min(100, e))
        }
          , f = function(e) {
            function t(e) {
                var n;
                return Object(a.a)(this, t),
                (n = Object(c.a)(this, Object(o.a)(t).call(this, e))).renderLinear = n.renderLinear.bind(Object(s.a)(Object(s.a)(n))),
                n.renderCircle = n.renderCircle.bind(Object(s.a)(Object(s.a)(n))),
                n
            }
            return Object(i.a)(t, e),
            Object(r.a)(t, [{
                key: "renderLinear",
                value: function() {
                    var e = this.props
                      , t = e.color
                      , n = e.gradientColor
                      , a = e.perc
                      , r = e.width
                      , c = e.height
                      , o = e.borderRadius
                      , i = e.backgroundColor
                      , s = "".concat(d(a), "%")
                      , l = t
                      , f = "solid 1px ".concat(t);
                    n && (l = "linear-gradient(to right, ".concat(t, ", ").concat(n, ")"));
                    var b = o;
                    return b || (b = 0),
                    u.a.createElement("div", {
                        className: "slopped-progress-bar",
                        style: {
                            position: "relative",
                            paddingBottom: 8
                        }
                    }, u.a.createElement("div", {
                        style: {
                            zIndex: 1,
                            background: l,
                            width: s,
                            height: c || 7,
                            borderRadius: b,
                            position: "absolute"
                        }
                    }), u.a.createElement("div", {
                        style: {
                            height: c + 1 || 8,
                            borderRadius: b,
                            borderWidth: 1,
                            border: f,
                            backgroundColor: i,
                            position: "absolute",
                            width: r
                        }
                    }))
                }
            }, {
                key: "renderCircle",
                value: function() {
                    var e = this.props
                      , t = e.width
                      , n = e.radius
                      , a = e.backgroundColor
                      , r = e.gradientColor
                      , c = e.perc
                      , o = e.text
                      , i = e.text2
                      , s = e.textClass
                      , l = e.text2Class
                      , f = e.textXy
                      , b = e.text2Xy
                      , p = 2 * Math.PI * n
                      , m = p * (1 - d(c) / 100);
                    return u.a.createElement("svg", {
                        className: "progress-ring",
                        width: 2 * n + 2 * t,
                        height: 2 * n + 2 * t
                    }, u.a.createElement("g", null, u.a.createElement("circle", {
                        className: "progress-rinj__circle",
                        stroke: a,
                        strokeWidth: t,
                        fill: "transparent",
                        r: n,
                        cx: n + t,
                        cy: n + t
                    }), u.a.createElement("circle", {
                        className: "progress-ring__circle",
                        stroke: r,
                        strokeWidth: t,
                        fill: "transparent",
                        r: n,
                        cx: n + t,
                        cy: n + t,
                        strokeDasharray: p,
                        strokeDashoffset: m
                    }), o && u.a.createElement("text", {
                        x: f[0],
                        y: f[1],
                        fill: a,
                        textAnchor: "middle",
                        className: s
                    }, o), i && u.a.createElement("text", {
                        x: b[0],
                        y: b[1],
                        fill: a,
                        textAnchor: "middle",
                        className: l
                    }, i)))
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.circle ? this.renderCircle() : this.renderLinear()
                }
            }]),
            t
        }(u.a.PureComponent);
        t.a = f
    },
    252: function(e, t, n) {
        "use strict";
        var a = n(101)
          , r = n(35)
          , c = n(65)
          , o = n(200)
          , i = {
            POSITION_CLOSE_CLICKED: "POSITION_CLOSE_CLICKED",
            POSITION_CLAIM_CLICKED: "POSITION_CLAIM_CLICKED",
            POSITION_TOGGLE_TYPE_CLICKED: "POSITION_TOGGLE_TYPE_CLICKED"
        };
        var s = {
            closeClicked: function(e) {
                return {
                    type: i.POSITION_CLOSE_CLICKED,
                    payload: {
                        id: e
                    }
                }
            },
            claimClicked: function(e) {
                return {
                    type: i.POSITION_CLAIM_CLICKED,
                    payload: {
                        item: e
                    }
                }
            },
            toggleType: function(e) {
                return {
                    type: i.POSITION_TOGGLE_TYPE_CLICKED,
                    payload: {
                        id: e
                    }
                }
            }
        }
          , l = n(102)
          , u = {
            ALERT_SET: "ALERT_SET",
            ALERT_DELETE: "ALERT_DELETE",
            ALERT_TOGGLE: "ALERT_TOGGLE",
            ALERTS_RECEIVED: "ALERTS_RECEIVED"
        };
        var d = {
            alertsReceived: function(e) {
                return {
                    type: u.ALERTS_RECEIVED,
                    payload: e
                }
            }
        }
          , f = n(52);
        var b = {
            getSettings: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.key
                  , n = void 0 === t ? f.a : t
                  , a = e.prefix;
                return {
                    type: f.b.GET_SETTINGS,
                    key: n,
                    prefix: a
                }
            },
            setSettings: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.key
                  , n = e.isFunding
                  , a = e.value
                  , r = e.persist
                  , c = void 0 === r || r
                  , o = e.prefix;
                return {
                    type: f.b.SET_SETTINGS,
                    isFunding: n,
                    key: t,
                    value: a,
                    persist: c,
                    prefix: o
                }
            },
            deleteSettings: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.key
                  , n = e.persist
                  , a = void 0 === n || n
                  , r = e.prefix;
                return {
                    type: f.b.DELETE_SETTINGS,
                    key: t,
                    persist: a,
                    prefix: r
                }
            },
            updateSettings: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.key
                  , n = e.value
                  , a = e.persist
                  , r = void 0 === a || a
                  , c = e.min
                  , o = void 0 === c ? Number.MIN_SAFE_INTEGER : c
                  , i = e.max
                  , s = void 0 === i ? Number.MAX_SAFE_INTEGER : i;
                return {
                    type: f.b.UPDATE_SETTINGS,
                    key: t,
                    value: n,
                    persist: r,
                    min: o,
                    max: s
                }
            },
            receiveInitialSettings: function() {
                return {
                    type: f.b.RECEIVE_INITIAL_SETTINGS
                }
            },
            scheduleCallbackOnInitialSettingsReceived: function(e) {
                return {
                    type: f.b.SCHEDULE_CALLBACK_ON_INITIAL_SETTINGS_RECEIVED,
                    callback: e
                }
            },
            toggleBooleanSetting: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.key
                  , n = e.isFunding
                  , a = e.persist
                  , r = void 0 === a || a;
                return {
                    type: f.b.TOGGLE_BOOLEAN_SETTING,
                    key: t,
                    isFunding: n,
                    persist: r
                }
            },
            setMapSetting: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.key
                  , n = e.subkey
                  , a = e.value
                  , r = e.persist
                  , c = void 0 === r || r;
                return {
                    type: f.b.SET_MAP_SETTING,
                    key: t,
                    subkey: n,
                    value: a,
                    persist: c
                }
            }
        }
          , p = {
            INIT: "INIT",
            PLAY_USER_SETTING: "PLAY_USER_SETTING",
            PLAY_TONE: "PLAY_TONE"
        };
        var m = {
            init: function() {
                return {
                    type: p.INIT,
                    payload: {}
                }
            },
            playTone: function(e) {
                return {
                    type: p.PLAY_TONE,
                    payload: {
                        key: e
                    }
                }
            },
            playUserSetting: function(e) {
                return {
                    type: p.PLAY_USER_SETTING,
                    payload: {
                        key: e
                    }
                }
            }
        }
          , h = 18e4;
        var E = {
            requestFiatTicker: function(e) {
                var t = e.map(function(e) {
                    return "tUSD".concat(e)
                })
                  , n = "/v2/tickers?symbols=".concat(t);
                return c.a.send({
                    method: "get",
                    path: n,
                    meta: {
                        section: "fiatTickers",
                        subsection: "getFiatTickers",
                        usePublicApiUrl: !0,
                        throttleActionDuration: h,
                        throttleActionType: "REST"
                    }
                })
            }
        }
          , v = {
            UI: o,
            websocket: r.a,
            rest: c.a,
            data: a.a,
            positions: s,
            alerts: d,
            settings: b,
            notifications: l.a,
            sounds: m,
            fiatTicker: E
        };
        t.a = v
    },
    254: function(e, t, n) {
        "use strict";
        var a = n(15)
          , r = n(14)
          , c = n(18)
          , o = n(16)
          , i = n(17)
          , s = n(0)
          , l = n.n(s)
          , u = n(619)
          , d = n(170)
          , f = n(47)
          , b = n(114)
          , p = n(620)
          , m = function(e) {
            function t(e) {
                var n;
                return Object(a.a)(this, t),
                (n = Object(c.a)(this, Object(o.a)(t).call(this, e))).toggle = function() {
                    var e = n.props.onToggle;
                    n.setState(function(t) {
                        var n = t.isOpen;
                        return e(!n),
                        {
                            isOpen: !n
                        }
                    })
                }
                ,
                n.state = {
                    isOpen: !e.closedByDefault
                },
                n
            }
            return Object(i.a)(t, e),
            Object(r.a)(t, [{
                key: "componentWillUnmount",
                value: function() {
                    this.closeTimeout && clearTimeout(this.closeTimeout)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.title
                      , n = e.left
                      , a = e.right
                      , r = e.showRightWhenClosed
                      , c = e.children
                      , o = this.state.isOpen
                      , i = o ? "chevron-down" : "chevron-right"
                      , s = r || o;
                    return l.a.createElement(u.a, {
                        className: "ui-collapsible"
                    }, l.a.createElement(d.a, {
                        className: "ui-collapsible__navbar",
                        onClick: this.toggle
                    }, l.a.createElement(d.a.Group, null, l.a.createElement(d.a.Heading, null, l.a.createElement(f.a, {
                        icon: i,
                        className: "ui-collapsible__icon"
                    }), l.a.createElement("span", {
                        className: "ui-collapsible__title"
                    }, t)), l.a.createElement(d.a.Heading, null, l.a.createElement("div", {
                        className: "dim"
                    }, n))), l.a.createElement(d.a.Group, {
                        align: b.a.RIGHT
                    }, l.a.createElement("div", {
                        className: "dim"
                    }, s && a))), l.a.createElement(p.a, {
                        isOpen: o
                    }, l.a.createElement("div", {
                        className: "ui-collapsible__body"
                    }, c)))
                }
            }]),
            t
        }(l.a.PureComponent);
        m.defaultProps = {
            title: "",
            left: null,
            right: null,
            closedByDefault: !1,
            showRightWhenClosed: !1,
            onToggle: function() {}
        },
        t.a = m
    },
    255: function(e, t, n) {
        "use strict";
        var a = n(24)
          , r = n(15)
          , c = n(14)
          , o = n(18)
          , i = n(16)
          , s = n(17)
          , l = n(0)
          , u = n.n(l)
          , d = n(8)
          , f = n.n(d)
          , b = {
            base: "grey",
            success: "green",
            danger: "red",
            warning: "yellow",
            info: "azure",
            dim: "light-grey",
            dimmed: "light-grey",
            muted: "grey",
            green: "green",
            red: "red",
            yellow: "yellow",
            azure: "azure",
            grey: "grey",
            "green-o": "green-o",
            "blue-o": "blue-o",
            "light-grey": "light-grey",
            "azure-o": "azure-o"
        };
        var p = function(e) {
            function t() {
                var e, n;
                Object(r.a)(this, t);
                for (var a = arguments.length, c = new Array(a), s = 0; s < a; s++)
                    c[s] = arguments[s];
                return (n = Object(o.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c)))).state = {
                    cooldown: !1
                },
                n
            }
            return Object(s.a)(t, e),
            Object(c.a)(t, [{
                key: "onClick",
                value: function(e) {
                    var t = this
                      , n = this.props
                      , a = n.onClick
                      , r = n.delayed;
                    if (e.stopPropagation(),
                    r) {
                        if (this.state.cooldown)
                            return;
                        this.setState(function() {
                            return {
                                cooldown: !0
                            }
                        }),
                        setTimeout(function() {
                            return t.setState(function() {
                                return {
                                    cooldown: !1
                                }
                            })
                        }, 1e3)
                    }
                    return a(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this, n = this.props, r = n.children, c = n.id, o = n.dim, i = n.size, s = n.style, l = n.color, d = n.clear, p = n.classes, m = n.disabled, h = n.fullWidth, E = n.link, v = function(e) {
                        return e ? "ui-button--".concat(b[e] || e) : ""
                    }(l), _ = f()(p, "ui-button", (e = {},
                    Object(a.a)(e, v, !d && !E),
                    Object(a.a)(e, "ui-button--size-XS", "tiny" === i),
                    Object(a.a)(e, "ui-button--size-S", "small" === i),
                    Object(a.a)(e, "ui-button--size-L", "large" === i),
                    Object(a.a)(e, "ui-button--dim", o),
                    Object(a.a)(e, "ui-button--clear", d),
                    Object(a.a)(e, "ui-button--disabled", m),
                    Object(a.a)(e, "ui-button--fullwidth", h),
                    Object(a.a)(e, "ui-button--link", E),
                    e));
                    return u.a.createElement("button", {
                        id: c,
                        style: s,
                        onClick: function(e) {
                            return t.onClick(e)
                        },
                        disabled: m,
                        className: _
                    }, r)
                }
            }]),
            t
        }(l.PureComponent);
        p.defaultProps = {
            children: null,
            id: void 0,
            style: {},
            classes: [],
            color: b.base,
            size: "",
            dim: !1,
            clear: !1,
            delayed: !1,
            disabled: !1,
            fullWidth: !1,
            link: !1
        },
        t.a = p
    },
    258: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = "login"
    },
    261: function(e, t, n) {
        "use strict";
        var a, r, c = n(137), o = n(15), i = n(14), s = n(18), l = n(16), u = n(17), d = n(0), f = n.n(d), b = n(100), p = n.n(b), m = n(235), h = n(151), E = n(20), v = function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(l.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(i.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props.value.toString()
                      , t = e.match(/\./)
                      , n = e.match(/(0+)$/g);
                    if (t && n) {
                        var a = e.split(".")
                          , r = Object(E.a)(a, 2)
                          , c = r[0]
                          , o = r[1].replace(/(0+)$/g, "");
                        return f.a.createElement("span", null, c, ".", o, n && f.a.createElement("span", {
                            className: "trailing-zeros"
                        }, n[0]))
                    }
                    return f.a.createElement("span", null, e)
                }
            }]),
            t
        }(f.a.PureComponent), _ = n(19), O = function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(l.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(i.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.amount
                      , n = void 0 === t ? 50 : t
                      , a = e.children
                      , r = e.block
                      , c = e.style
                      , o = void 0 === c ? {} : c
                      , i = "show".concat(n)
                      , s = r ? "div" : "span";
                    return f.a.createElement(s, {
                        className: i,
                        style: o
                    }, a)
                }
            }]),
            t
        }(f.a.PureComponent), g = n(1), S = n(26), T = n(156), k = n(86);
        function j(e) {
            var t = function(e, t) {
                return Object(k.f)(e[0]) === Object(k.f)(t[0])
            }
              , n = Object(T.a)(function(e) {
                return function(t) {
                    return Object(k.b)(e, t)
                }
            }, t)
              , a = Object(T.a)(function(e) {
                return function(t) {
                    return Object(k.c)(e, t)
                }
            }, t)
              , r = Object(T.a)(function(e) {
                return function(t) {
                    return Object(k.d)(e, t)
                }
            }, t)
              , c = Object(T.a)(function(e) {
                return function(t) {
                    return Object(k.e)(e, t)
                }
            }, t)
              , d = Object(T.a)(function(e) {
                return function(t) {
                    return Object(k.a)(e, t)
                }
            }, t);
            var b = function(t) {
                function n() {
                    return Object(o.a)(this, n),
                    Object(s.a)(this, Object(l.a)(n).apply(this, arguments))
                }
                return Object(u.a)(n, t),
                Object(i.a)(n, [{
                    key: "render",
                    value: function() {
                        return f.a.createElement(e, this.props)
                    }
                }]),
                n
            }(f.a.PureComponent);
            return Object(S.c)(function(e, t) {
                return Object(g.a)({}, t, {
                    getCurrencyLabel: n(e),
                    getCurrencySymbol: a(e),
                    getCurrencyUnitLabel: r(e),
                    getCurrencyUnitTooltip: c(e),
                    getCurrencyCodeFromCurrencySymbol: d(e)
                })
            })(b)
        }
        var y = j((r = a = function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(l.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(i.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.id
                      , n = e.pretty
                      , a = e.getCurrencyCodeFromCurrencySymbol
                      , r = e.getCurrencySymbol
                      , c = n ? r(t) : a(t);
                    return f.a.createElement("span", null, c)
                }
            }]),
            t
        }(f.a.PureComponent),
        a.defaultProps = {
            pretty: !1
        },
        r))
          , A = j(function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(l.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(i.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.id
                      , n = e.getCurrencyUnitLabel
                      , a = e.getCurrencySymbol
                      , r = n(t);
                    return r === t && (r = a(t)),
                    f.a.createElement("span", {
                        className: "show50 show-smaller"
                    }, r)
                }
            }]),
            t
        }(f.a.PureComponent))
          , w = j(function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(l.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(i.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.id
                      , n = e.pair
                      , a = void 0 === n ? "" : n
                      , r = e.tip
                      , c = e.dim
                      , o = e.asUnit
                      , i = void 0 !== o && o
                      , s = e.noTooltip
                      , l = void 0 !== s && s
                      , u = e.pretty
                      , d = void 0 !== u && u
                      , b = e.getCurrencyLabel
                      , p = e.getCurrencyUnitTooltip
                      , m = Object(_.i)(t) || Object(_.c)(a, !0)
                      , E = b(m)
                      , v = p(m)
                      , g = l ? null : r || (i ? v : E)
                      , S = i ? f.a.createElement(A, {
                        id: m
                    }) : f.a.createElement(y, {
                        id: m,
                        pretty: d
                    });
                    return f.a.createElement(h.a, {
                        tooltipContent: g,
                        underline: !1
                    }, c ? f.a.createElement(O, null, " ", S, " ") : S)
                }
            }]),
            t
        }(f.a.PureComponent))
          , N = (j(function(e) {
            var t = e.id
              , n = e.getCurrencyLabel;
            return f.a.createElement("span", null, n(Object(_.i)(t)))
        }),
        function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(l.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(i.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.value
                      , n = e.title
                      , a = e.decimals
                      , r = void 0 === a ? null : a
                      , o = e.sigFig
                      , i = void 0 === o ? null : o
                      , s = e.fadeTrailingZeros
                      , l = void 0 !== s && s
                      , u = e.strike
                      , d = void 0 === u ? null : u
                      , b = e.includeStrike
                      , E = void 0 !== b && b
                      , _ = e.coloredStrike
                      , O = void 0 === _ || _
                      , g = e.className
                      , S = e.symbol
                      , T = e.symbolBefore
                      , k = void 0 !== T && T
                      , j = e.absolute
                      , y = void 0 !== j && j
                      , A = e.clickEvent
                      , N = void 0 !== A && A
                      , C = e.cursorPointer
                      , I = void 0 === C ? null : C
                      , x = e.offset
                      , R = void 0 === x ? null : x
                      , U = Object(c.a)(e, ["value", "title", "decimals", "sigFig", "fadeTrailingZeros", "strike", "includeStrike", "coloredStrike", "className", "symbol", "symbolBefore", "absolute", "clickEvent", "cursorPointer", "offset"]);
                    if (!p()(+t))
                        return f.a.createElement("span", null, t.toString());
                    var L = y ? Math.abs(t) : t
                      , P = {
                        number: L,
                        decimals: r,
                        significantFigures: i,
                        useGrouping: !0
                    }
                      , D = Object(m.a)(P);
                    N && (U.onClick = function() {
                        return N(D.replace(",", ""))
                    }
                    );
                    var M = [Object(m.b)(L, {
                        strike: d,
                        coloredStrike: O,
                        includeStrike: E
                    }), g].join(" ")
                      , W = l ? f.a.createElement(v, {
                        value: D
                    }) : D
                      , F = f.a.createElement("span", Object.assign({
                        className: M
                    }, U), W);
                    return n && (F = f.a.createElement(h.a, {
                        tooltipContent: n,
                        underline: !1,
                        cursorPointer: I,
                        offset: R
                    }, F)),
                    f.a.createElement(f.a.Fragment, null, S && k && f.a.createElement(w, {
                        id: S,
                        asUnit: !0,
                        noTooltip: !0
                    }), F, S && !k && f.a.createElement(w, {
                        id: S,
                        asUnit: !0,
                        noTooltip: !0
                    }))
                }
            }]),
            t
        }(f.a.PureComponent));
        N.defaultProps = {
            value: "N/A",
            title: "",
            className: ""
        };
        t.a = N
    },
    286: function(e, t, n) {
        "use strict";
        function a(e) {
            return {
                type: "REQUEST_TICKER",
                meta: {
                    ticker: e
                }
            }
        }
        n.d(t, "a", function() {
            return a
        })
    },
    310: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return s
        }),
        n.d(t, "c", function() {
            return l
        }),
        n.d(t, "a", function() {
            return u
        });
        n(93);
        var a = n(19)
          , r = n(86)
          , c = n(38)
          , o = ":"
          , i = "/";
        function s(e) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.c).split(o).map(function(t) {
                return Object(r.a)(e, t)
            }).reduce(function(e, t) {
                return e + t
            }, "")
        }
        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.c
              , t = Object(a.c)(e, !0)
              , n = Object(a.f)(e, !0);
            return "".concat(t).concat(o).concat(n)
        }
        function u(e, t) {
            if (!Object(a.e)(e))
                return e;
            var n = Object(a.c)(e, !0)
              , r = Object(a.f)(e, !0);
            return "".concat(t(n)).concat(i).concat(t(r))
        }
    },
    311: function(e, t, n) {
        "use strict";
        var a = n(15)
          , r = n(14)
          , c = n(18)
          , o = n(16)
          , i = n(17)
          , s = n(9)
          , l = n(0)
          , u = n.n(l)
          , d = n(12)
          , f = n(618)
          , b = n(43)
          , p = n(204)
          , m = n(242)
          , h = n(57)
          , E = n(110)
          , v = n(312)
          , _ = function(e) {
            function t(e) {
                var n;
                return Object(a.a)(this, t),
                (n = Object(c.a)(this, Object(o.a)(t).call(this, e))).state = {
                    checked: !1,
                    agreedChecked: !1
                },
                n.toggleCheck = n.toggleCheck.bind(Object(s.a)(Object(s.a)(n))),
                n.submitAgreement = n.submitAgreement.bind(Object(s.a)(Object(s.a)(n))),
                n
            }
            return Object(i.a)(t, e),
            Object(r.a)(t, [{
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props
                      , t = e.agreed
                      , n = e.hideModal;
                    t && n()
                }
            }, {
                key: "toggleCheck",
                value: function() {
                    var e = this.state.checked;
                    this.setState({
                        checked: !e
                    })
                }
            }, {
                key: "submitAgreement",
                value: function() {
                    var e = this.props
                      , t = e.notify
                      , n = e.agreeAgreement
                      , a = e.t;
                    this.state.checked ? (n(),
                    this.setState({
                        agreedChecked: !0
                    })) : t({
                        message: a("token_sales.contribution_process.must_agree"),
                        level: "error"
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.agreementTitle
                      , n = e.agreementHtml
                      , a = e.agreementUrl
                      , r = e.t
                      , c = e.hideModal
                      , o = this.state
                      , i = o.checked
                      , s = o.agreedChecked;
                    return u.a.createElement(f.a, {
                        title: t,
                        style: {
                            width: "80%"
                        },
                        onClose: c,
                        isOpen: !0,
                        autoFocus: !0,
                        canEscapeKeyClose: !0,
                        canOutsideClickClose: !0,
                        enforceFocus: !0,
                        usePortal: !0
                    }, u.a.createElement("div", {
                        className: b.a.DIALOG_BODY
                    }, a && u.a.createElement("p", null, u.a.createElement("a", {
                        href: a
                    }, r("token_sales.contribution_process.sales_agreement_link"))), u.a.createElement("div", {
                        className: "ts-agreement"
                    }, u.a.createElement(h.a, {
                        html: n
                    }), u.a.createElement("hr", null), u.a.createElement("div", {
                        className: "row"
                    }, u.a.createElement("div", {
                        className: "col s12 center"
                    }, u.a.createElement(p.a, {
                        id: "agree-checkbox",
                        label: r("pages.tos.consent"),
                        value: i,
                        disabled: !1,
                        onChange: this.toggleCheck,
                        large: !1,
                        inline: !1
                    }), "\xa0", u.a.createElement("button", {
                        className: "ts-agree-button",
                        onClick: this.submitAgreement,
                        type: "button"
                    }, s ? u.a.createElement(m.a, {
                        size: 15
                    }) : r("helpers.submit_reg")))))))
                }
            }]),
            t
        }(u.a.PureComponent);
        _.defaultProps = {
            agreementTitle: "",
            agreementHtml: "",
            agreementUrl: null,
            agreed: !1,
            notify: function() {
                return null
            },
            agreeAgreement: function() {
                return null
            }
        },
        t.a = Object(d.e)("translations")(Object(E.a)(_, v.a))
    },
    312: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = "ts-agreement-modal"
    },
    328: function(e, t, n) {
        e.exports = n.p + "static/media/facebook.8588aeea.svg"
    },
    329: function(e, t, n) {
        e.exports = n.p + "static/media/twitter.8a81bf4e.svg"
    },
    33: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }),
        n.d(t, "f", function() {
            return c
        }),
        n.d(t, "g", function() {
            return o
        }),
        n.d(t, "e", function() {
            return i
        }),
        n.d(t, "c", function() {
            return s
        }),
        n.d(t, "d", function() {
            return l
        });
        var a = n(22);
        function r(e) {
            return {
                type: a.a.SET_AUTH_TOKEN,
                payload: e
            }
        }
        function c(e) {
            return {
                type: a.a.SET_WS_AUTH_TOKEN,
                payload: e
            }
        }
        function o() {
            return {
                type: a.a.UPDATE_THEME
            }
        }
        function i(e) {
            return {
                type: a.a.SET_TIMEZONE,
                payload: e
            }
        }
        function s(e) {
            return {
                type: a.a.SET_OWNER_EMAIL,
                payload: e
            }
        }
        function l(e) {
            return {
                type: a.a.SET_PLATFORM,
                payload: e
            }
        }
        t.a = {
            setApiKey: function(e) {
                return {
                    type: a.a.SET_API_KEY,
                    payload: e
                }
            },
            setApiSecret: function(e) {
                return {
                    type: a.a.SET_API_SECRET,
                    payload: e
                }
            },
            setAuthToken: r,
            setWsAuthToken: c,
            setDateFormat: function(e) {
                return {
                    type: a.a.SET_DATE_FORMAT,
                    payload: e
                }
            },
            setLang: function(e) {
                return {
                    type: a.a.SET_LANG,
                    payload: e
                }
            },
            setMenuMode: function(e) {
                return {
                    type: a.a.SET_MENU_MODE,
                    payload: e
                }
            },
            setQueryLimit: function(e) {
                return {
                    type: a.a.SET_QUERY_LIMIT,
                    payload: e
                }
            },
            setTheme: function(e) {
                return {
                    type: a.a.SET_THEME,
                    payload: e
                }
            },
            updateTheme: o,
            setTimezone: i,
            showMilliseconds: function(e) {
                return {
                    type: a.a.SHOW_MILLISECONDS,
                    payload: e
                }
            },
            setOwnerEmail: s,
            setPlatform: l
        }
    },
    330: function(e, t, n) {
        e.exports = n.p + "static/media/instagram.93af81a7.svg"
    },
    331: function(e, t, n) {
        e.exports = n.p + "static/media/telegram.aeab2c74.svg"
    },
    332: function(e, t, n) {
        e.exports = n.p + "static/media/reddit.67a0566c.svg"
    },
    333: function(e, t, n) {
        e.exports = n.p + "static/media/youtube.177d497d.svg"
    },
    334: function(e, t, n) {
        e.exports = n.p + "static/media/linkedin.94894d4e.svg"
    },
    35: function(e, t, n) {
        "use strict";
        var a = n(1)
          , r = n(201)
          , c = n.n(r)
          , o = n(91)
          , i = n.n(o)
          , s = n(109)
          , l = n(101)
          , u = n(169)
          , d = n(11)
          , f = n(113)
          , b = n.n(f)
          , p = n(19);
        function m(e) {
            var t = {
                unsubscribe: function() {
                    return {
                        event: "unsubscribe",
                        chanId: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).chanId
                    }
                },
                tickers: function() {
                    return {
                        event: "subscribe",
                        channel: "ticker",
                        pair: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).pair
                    }
                },
                candles: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.pair
                      , n = e.resolution;
                    return {
                        event: "subscribe",
                        channel: "candles",
                        key: "trade:".concat(n, ":").concat(Object(p.a)(t))
                    }
                },
                book: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        event: "subscribe",
                        channel: "book",
                        symbol: e.symbol,
                        prec: e.prec,
                        freq: e.freq,
                        len: e.len
                    }
                },
                trades: function() {
                    return {
                        event: "subscribe",
                        channel: "trades",
                        symbol: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).symbol
                    }
                },
                wallet: function() {
                    return {
                        event: "subscribe",
                        channel: "wallet"
                    }
                }
            }[e];
            return b()(t) ? t : function(e) {
                return e
            }
        }
        n.d(t, "b", function() {
            return h
        });
        var h = {
            isPublic: !1
        }
          , E = {
            isPublic: !0
        };
        var v = {
            DEC_S: 8,
            TIME_S: 32,
            TIMESTAMP: 32768,
            SEQ_ALL: 65536,
            CHECKSUM: 131072
        };
        function _(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
            return {
                type: d.a.WS_REQUEST_SEND,
                meta: Object(a.a)({
                    throttle: !0
                }, t),
                payload: i()(e) ? e : JSON.stringify(e)
            }
        }
        t.a = {
            init: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h
                  , n = e.destination
                  , a = void 0 === n ? "" : n
                  , r = e.autoAuth
                  , c = void 0 !== r && r
                  , o = e.conf
                  , i = void 0 === o ? {} : o;
                return {
                    type: d.a.WS_REQUEST_CONNECT,
                    payload: {
                        destination: a,
                        autoAuth: c,
                        conf: i
                    },
                    meta: t
                }
            },
            info: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                return {
                    type: d.a.WS_EVENT_INFO,
                    payload: e,
                    meta: t
                }
            },
            auth: function() {
                return {
                    type: d.a.WS_REQUEST_AUTH,
                    meta: h
                }
            },
            data: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                return Object(l.b)(e, t)
            },
            error: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                return {
                    type: d.a.WS_EVENT_ERROR,
                    payload: e,
                    meta: t
                }
            },
            setSymbol: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "tBTCUSD";
                return {
                    type: d.a.WS_SET_SYMBOL,
                    payload: {
                        symbol: e
                    },
                    meta: E
                }
            },
            addChannel: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                return {
                    type: u.a.ADD_CHANNEL,
                    payload: Object(a.a)({}, e),
                    meta: t
                }
            },
            removeChannel: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                return {
                    type: u.a.REMOVE_CHANNEL,
                    payload: Object(a.a)({}, e),
                    meta: t
                }
            },
            connect: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h;
                return {
                    type: d.a.WS_REQUEST_CONNECT,
                    payload: {
                        destination: e,
                        autoAuth: t
                    },
                    meta: n
                }
            },
            connected: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
                return {
                    type: d.a.WS_EVENT_CONNECT,
                    meta: e
                }
            },
            disconnect: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
                return {
                    type: d.a.WS_REQUEST_DISCONNECT,
                    meta: e
                }
            },
            disconnected: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
                return {
                    type: d.a.WS_EVENT_DISCONNECT,
                    meta: e
                }
            },
            authenticated: function(e) {
                return {
                    type: d.a.WS_EVENT_AUTH,
                    payload: e,
                    meta: h
                }
            },
            conf: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                return {
                    type: d.a.WS_EVENT_CONF,
                    payload: e,
                    meta: t
                }
            },
            send: _,
            calc: function(e) {
                return _([0, "calc", null, e])
            },
            setTimeDifference: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                return {
                    type: d.a.WS_SET_TIME_DIFF,
                    payload: e,
                    meta: t
                }
            },
            broadcast: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    type: d.a.WS_REQUEST_BROADCAST,
                    payload: e,
                    meta: h
                }
            },
            reconnect: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
                return {
                    type: d.a.WS_REQUEST_RECONNECT,
                    meta: e
                }
            },
            getAvailableFlags: function() {
                return Object.keys(v)
            },
            getFlags: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return c()(e).reduce(function(e, t) {
                    return e + function(e) {
                        return v[e] || 0
                    }(t)
                }, 0)
            },
            submitOrder: function(e) {
                return {
                    type: d.a.WS_REQUEST_SUBMIT_ORDER,
                    payload: e,
                    meta: h
                }
            },
            authWithToken: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.a)().then(function(e) {
                    return Object(s.e)(e)
                })
            },
            authWithApiKey: function(e, t) {
                return e && t ? _(Object(s.d)(e, t)) : null
            },
            subscribeRequest: function(e) {
                var t = e.channel
                  , n = e.hash;
                return {
                    type: d.a.WS_REQUEST_SUBSCRIBE,
                    payload: {
                        channel: t,
                        hash: n
                    },
                    meta: E
                }
            },
            subscribe: function(e, t) {
                return _(m(e)(t), E)
            },
            unsubscribe: function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).chanId
                  , t = void 0 === e ? {} : e;
                return t ? _(m("unsubscribe")({
                    chanId: t
                }), E) : null
            }
        }
    },
    36: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return c
        }),
        n.d(t, "b", function() {
            return o
        }),
        n.d(t, "a", function() {
            return i
        });
        var a = n(4)
          , r = n.n(a)
          , c = {
            startedKycAt: r.a.string,
            uuid: r.a.string,
            tsid: r.a.string,
            kycStatus: r.a.string,
            passedKyc: r.a.bool,
            agreedTos: r.a.bool,
            agreedSalesAgreement: r.a.bool
        }
          , o = {
            _id: r.a.string,
            start: r.a.string,
            end: r.a.string,
            salePrice: r.a.number,
            logoUrl: r.a.string.isRequired,
            name: r.a.string.isRequired,
            description: r.a.string.isRequired,
            salePriceAsText: r.a.string,
            raised: r.a.oneOfType([r.a.number.isRequired, r.a.object.isRequired]),
            goal: r.a.number.isRequired,
            completed: r.a.number,
            investorsVerified: r.a.string,
            maxAllocation: r.a.number.isRequired,
            minAllocation: r.a.number.isRequired,
            disableBalanceCheck: r.a.oneOfType([r.a.number.isRequired, r.a.object.isRequired]),
            featuredMessage: r.a.string,
            hideContributionBar: r.a.number
        }
          , i = {
            logoUrl: "",
            name: "",
            description: "",
            salePriceAsText: "",
            start: "",
            raised: "",
            goal: 0,
            completed: 0,
            investorsVerified: "",
            disableBalanceCheck: !1,
            featuredMessage: ""
        };
        r.a.func.isRequired,
        r.a.shape(o),
        r.a.shape(c),
        r.a.object,
        r.a.bool
    },
    362: function(e) {
        e.exports = {
            a: "0.3.2"
        }
    },
    363: function(e) {
        e.exports = {
            a: "12.9.1"
        }
    },
    364: function(e) {
        e.exports = {
            a: "3.12.9"
        }
    },
    365: function(e) {
        e.exports = {
            a: "3.0.2"
        }
    },
    38: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return c
        }),
        n.d(t, "c", function() {
            return i
        }),
        n.d(t, "b", function() {
            return l
        }),
        n.d(t, "a", function() {
            return d
        }),
        n.d(t, "f", function() {
            return b
        }),
        n.d(t, "g", function() {
            return m
        }),
        n.d(t, "h", function() {
            return E
        }),
        n.d(t, "d", function() {
            return _
        });
        var a = "undefined" !== typeof window && window.__platform || {}
          , r = a.platformId
          , c = void 0 === r ? "bitfinex" : r
          , o = a.defaultPair
          , i = void 0 === o ? "BTCUSD" : o
          , s = a.defaultCcy
          , l = void 0 === s ? "USD" : s
          , u = a.apiUrl
          , d = void 0 === u ? "api.bitfinex.com" : u
          , f = a.publicApiUrl
          , b = void 0 === f ? "api.bitfinex.com" : f
          , p = a.wssUrl
          , m = void 0 === p ? "wss://api.bitfinex.com/ws/2" : p
          , h = a.wssUrlPublic
          , E = void 0 === h ? "wss://api.bitfinex.com/ws/2" : h
          , v = (a.reportUrl,
        a.publicUrl,
        a.loggerLevels)
          , _ = void 0 === v ? ["error"] : v
    },
    383: function(e, t, n) {
        e.exports = n(617)
    },
    391: function(e, t, n) {},
    40: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return a
        }),
        n.d(t, "i", function() {
            return r
        }),
        n.d(t, "h", function() {
            return c
        }),
        n.d(t, "a", function() {
            return o
        }),
        n.d(t, "e", function() {
            return i
        }),
        n.d(t, "c", function() {
            return s
        }),
        n.d(t, "b", function() {
            return l
        }),
        n.d(t, "f", function() {
            return u
        }),
        n.d(t, "g", function() {
            return d
        });
        var a = !1
          , r = "ethfinex"
          , c = {
            bitfinex: {
                API_URL: "https://tokinex.bitfinex.com/api",
                KEY_URL: "https://www.bitfinex.com/api",
                HOME_URL: "https://www.bitfinex.com",
                EFX_LOGIN_URL: "https://www.ethfinex.com",
                BFX_LOGIN_URL: "https://www.bitfinex.com",
                showAuthPage: !1,
                hideNonIdealState: !0,
                wssUrl: "wss://api.bitfinex.com/ws/2",
                hCaptchaKey: "5b4b7f24-6c2d-40b7-87e9-04b335d31026"
            },
            ethfinex: {
                API_URL: "https://tokinex.ethfinex.com/api",
                KEY_URL: "https://www.ethfinex.com/api",
                HOME_URL: "https://www.ethfinex.com",
                EFX_LOGIN_URL: "https://www.ethfinex.com",
                BFX_LOGIN_URL: "https://www.bitfinex.com",
                showAuthPage: !1,
                hideNonIdealState: !0,
                wssUrl: "wss://api.ethfinex.com/ws/2",
                hCaptchaKey: "5b4b7f24-6c2d-40b7-87e9-04b335d31026"
            },
            staging: {
                API_URL: "https://test-ts.ethfinex.com/api",
                KEY_URL: "https://test.ethfinex.com/api",
                HOME_URL: "https://test.ethfinex.com",
                EFX_LOGIN_URL: "https://test.ethfinex.com",
                BFX_LOGIN_URL: "https://test.bitfinex.com",
                showAuthPage: !1,
                hideNonIdealState: !0,
                wssUrl: "wss://test.ethfinex.com/ws/2",
                hCaptchaKey: "6f3e54d0-4062-4c95-bda6-8f853866e14c"
            },
            dev: {
                API_URL: "https://token-sales-face-developers.bitfinex.com:7005/api",
                KEY_URL: "https://test.bitfinex.com/api",
                HOME_URL: "https://test.bitfinex.com",
                EFX_LOGIN_URL: "https://test.ethfinex.com",
                BFX_LOGIN_URL: "https://test.bitfinex.com",
                showAuthPage: !1,
                hideNonIdealState: !0,
                wssUrl: "wss://test.ethfinex.com/ws/2",
                hCaptchaKey: "6f3e54d0-4062-4c95-bda6-8f853866e14c"
            },
            localhost: {
                API_URL: "http://localhost:5000/api",
                KEY_URL: "https://staging.bitfinex.com/api",
                HOME_URL: "https://face-developers.bitfinex.com:4004",
                EFX_LOGIN_URL: "https://face-developers.bitfinex.com:4004",
                BFX_LOGIN_URL: "https://face-developers.bitfinex.com:4004",
                wssUrl: "wss://test.ethfinex.com/ws/2",
                showAuthPage: !1,
                hideNonIdealState: !0,
                hCaptchaKey: "6f3e54d0-4062-4c95-bda6-8f853866e14c"
            }
        }[r] || {}
          , o = c.API_URL || ""
          , i = c.HOME_URL || ""
          , s = c.EFX_LOGIN_URL || ""
          , l = c.BFX_LOGIN_URL || ""
          , u = c.hCaptchaKey || ""
          , d = "https://support.ethfinex.com/hc/en-us/articles/115002416832";
        window.__platform = c
    },
    41: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        }),
        n.d(t, "b", function() {
            return o
        }),
        n.d(t, "c", function() {
            return i
        }),
        n.d(t, "e", function() {
            return s
        }),
        n.d(t, "h", function() {
            return l
        }),
        n.d(t, "f", function() {
            return u
        }),
        n.d(t, "g", function() {
            return d
        }),
        n.d(t, "i", function() {
            return f
        }),
        n.d(t, "j", function() {
            return b
        }),
        n.d(t, "d", function() {
            return p
        });
        n(130);
        var a = n(22)
          , r = function(e) {
            return e.base || {}
        }
          , c = function(e) {
            return r(e).apiKey
        }
          , o = function(e) {
            return r(e).apiSecret
        }
          , i = function(e) {
            return r(e).authToken
        }
          , s = function(e) {
            return r(e).email
        }
          , l = function(e) {
            return r(e).platform
        }
          , u = function(e) {
            return r(e).locale
        }
          , d = function(e) {
            return r(e).menuMode
        }
          , f = function(e) {
            return r(e).theme || a.a.DEFAULT_THEME
        }
          , b = function(e) {
            return r(e).timezone
        }
          , p = function(e) {
            return r(e).dateFormat || a.a.DATE_FORMATS[0]
        }
    },
    433: function(e, t, n) {},
    46: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        }),
        n.d(t, "b", function() {
            return d
        });
        n(24),
        n(1),
        n(20);
        var a = n(27)
          , r = (n(325),
        n(19),
        n(38));
        function c() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!Object(a.isArray)(e))
                return "?";
            var n = e[1];
            if (Object(a.isString)(n))
                return n;
            var r = t.channel || "?"
              , c = Object(a.isArray)(n) && Object(a.isArray)(n[0]) ? "snapshot" : "update";
            return "".concat(r, "-").concat(c)
        }
        var o = "log"
          , i = "debug"
          , s = "info"
          , l = "warn"
          , u = "error"
          , d = {
            log: function() {
                var e;
                Object(a.includes)(r.d, o) && (e = console).log.apply(e, arguments)
            },
            debug: function() {
                var e;
                Object(a.includes)(r.d, i) && (e = console).debug.apply(e, arguments)
            },
            info: function() {
                var e;
                Object(a.includes)(r.d, s) && (e = console).info.apply(e, arguments)
            },
            warn: function() {
                var e;
                Object(a.includes)(r.d, l) && (e = console).warn.apply(e, arguments)
            },
            error: function() {
                var e;
                Object(a.includes)(r.d, u) && (e = console).error.apply(e, arguments)
            }
        }
    },
    48: function(e, t, n) {
        "use strict";
        t.a = {
            CHECK_AUTH: "BITFINEX/AUTH/CHECK_AUTH",
            CHECK_AUTH_WITH_TOKEN: "BITFINEX/AUTH/CHECK_AUTH_WITH_TOKEN",
            CHECK_AUTH_WITH_LOCAL_TOKEN: "BITFINEX/AUTH/CHECK_AUTH_WITH_LOCAL_TOKEN",
            SHOW_AUTH: "BITFINEX/AUTH/SHOW",
            HIDE_AUTH: "BITFINEX/AUTH/HIDE",
            UPDATE_AUTH_STATUS: "BITFINEX/AUTH/UPDATE_AUTH_STATUS",
            LOGOUT: "BITFINEX/AUTH/LOGOUT"
        }
    },
    50: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        }),
        n.d(t, "c", function() {
            return o
        }),
        n.d(t, "b", function() {
            return i
        }),
        n.d(t, "d", function() {
            return s
        });
        var a = n(41)
          , r = function(e) {
            return e.auth || {}
        }
          , c = function(e) {
            return r(e).authStatus
        }
          , o = function(e) {
            return r(e).isShown
        }
          , i = function(e) {
            return r(e).loading
        };
        function s(e) {
            return Object(a.c)(e) ? {
                authToken: Object(a.c)(e)
            } : {
                apiKey: Object(a.a)(e),
                apiSecret: Object(a.b)(e)
            }
        }
        a.c
    },
    51: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }),
        n.d(t, "b", function() {
            return r
        }),
        t.c = {
            UI_SAVE: "UI_SAVE",
            UI_LOAD: "UI_LOAD",
            UI_SET: "UI_SET",
            UI_TOGGLE: "UI_TOGGLE",
            UI_TOGGLE_COLLAPSIBLE_WIDGET: "UI_TOGGLE_COLLAPSIBLE_WIDGET",
            UI_SET_ORDER: "UI_SET_ORDER",
            SYMBOL_SET: "SYMBOL_SET"
        };
        var a = !0
          , r = !0
    },
    52: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }),
        t.b = {
            GET_SETTINGS: "GET_SETTINGS",
            SET_SETTINGS: "SET_SETTINGS",
            DELETE_SETTINGS: "DELETE_SETTINGS",
            UPDATE_SETTINGS: "UPDATE_SETTINGS",
            RECEIVE_INITIAL_SETTINGS: "RECEIVE_INITIAL_SETTINGS",
            SETTINGS_MESSAGE: "T_SETTINGS_MESSAGE",
            SCHEDULE_CALLBACK_ON_INITIAL_SETTINGS_RECEIVED: "SCHEDULE_CALLBACK_ON_INITIAL_SETTINGS_RECEIVED",
            TOGGLE_BOOLEAN_SETTING: "TOGGLE_BOOLEAN_SETTING",
            SET_MAP_SETTING: "SET_MAP_SETTING"
        };
        var a = "*"
    },
    55: function(e, t, n) {
        "use strict";
        t.a = {
            CLEAR_STATUS: "BITFINEX/STATUS/CLEAR",
            UPDATE_STATUS: "BITFINEX/STATUS/UPDATE",
            UPDATE_SUCCESS_STATUS: "BITFINEX/STATUS/UPDATE/SUCCESS",
            UPDATE_ERROR_STATUS: "BITFINEX/STATUS/UPDATE/ERROR"
        }
    },
    57: function(e, t, n) {
        "use strict";
        var a = n(0)
          , r = n.n(a);
        t.a = function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).html;
            return r.a.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: e
                }
            })
        }
    },
    61: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return b
        }),
        n.d(t, "a", function() {
            return p
        }),
        n.d(t, "c", function() {
            return m
        });
        var a = n(0)
          , r = n.n(a)
          , c = n(70)
          , o = n.n(c)
          , i = n(12)
          , s = n(158)
          , l = n(165)
          , u = n.n(l)
          , d = n(106)
          , f = n(261)
          , b = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , n = Object(i.d)().t;
            return o()(e).filter(function(e) {
                return t.includes(e)
            }).map(function(t) {
                return {
                    title: n("token_sales.translation.".concat(t)),
                    value: (a = e[t],
                    u()(a, u.a.ISO_8601, !0).isValid() ? r.a.createElement(s.a, {
                        ts: e[t]
                    }) : e[t])
                };
                var a
            })
        }
          , p = function(e, t, n) {
            var a = Object(d.a)({
                amount: e,
                from: n,
                to: "USD",
                useMid: !0,
                ticker: t
            });
            return r.a.createElement(f.a, {
                symbol: " USD",
                value: a,
                decimals: 0,
                fadeTrailingZeros: !0
            })
        }
          , m = function(e) {
            return (new Date).toISOString() > e
        }
    },
    617: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0)
          , r = n.n(a)
          , c = n(45)
          , o = n.n(c)
          , i = n(40)
          , s = (n(388),
        n(389),
        n(390),
        n(391),
        n(392),
        n(12))
          , l = n(67)
          , u = n(26)
          , d = n(62)
          , f = n(33)
          , b = n(50)
          , p = n(41)
          , m = n(15)
          , h = n(14)
          , E = n(18)
          , v = n(16)
          , _ = n(17)
          , O = n(9)
          , g = n(618)
          , S = n(43)
          , T = n(629)
          , k = n(123)
          , j = n(85)
          , y = n(630)
          , A = n(4)
          , w = n.n(A)
          , N = (w.a.bool,
        w.a.string,
        w.a.string,
        w.a.func.isRequired,
        w.a.func.isRequired,
        w.a.bool.isRequired,
        w.a.bool.isRequired,
        w.a.func.isRequired,
        w.a.func.isRequired,
        w.a.func.isRequired,
        w.a.string.isRequired,
        w.a.func.isRequired,
        w.a.string.isRequired,
        w.a.string.isRequired,
        w.a.string,
        n(628))
          , C = n(326)
          , I = function(e) {
            var t = e.t
              , n = e.label
              , c = e.onChange
              , o = e.name
              , i = e.placeholder
              , s = e.value;
            return r.a.createElement(a.Fragment, null, r.a.createElement(N.a, {
                label: t(n),
                labelFor: o,
                labelInfo: t("auth.required")
            }), r.a.createElement(C.a, {
                id: o,
                type: "password",
                name: o,
                placeholder: t(i),
                value: s,
                onChange: c
            }), r.a.createElement("br", null))
        };
        I.defaultProps = {
            label: "",
            onChange: function() {},
            name: "",
            placeholder: "",
            value: ""
        };
        var x = Object(s.e)("translations")(I)
          , R = function(e) {
            function t(e) {
                var n;
                Object(m.a)(this, t);
                var a = (n = Object(E.a)(this, Object(v.a)(t).call(this, e))).props;
                a.setKey,
                a.setSecret;
                return n.handleClick = n.handleClick.bind(Object(O.a)(Object(O.a)(n))),
                n.handleChange = n.handleChange.bind(Object(O.a)(Object(O.a)(n))),
                n
            }
            return Object(_.a)(t, e),
            Object(h.a)(t, [{
                key: "handleClick",
                value: function() {
                    this.props.checkAuth()
                }
            }, {
                key: "handleChange",
                value: function(e) {
                    var t = this.props
                      , n = t.setKey
                      , a = t.setSecret
                      , r = e.target
                      , c = r.name
                      , o = r.value;
                    "key" === c ? n(o) : "secret" === c && a(o)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.apiKey
                      , n = e.apiSecret
                      , c = e.t
                      , o = e.isShown
                      , s = e.loading
                      , l = i.h.showAuthPage ? r.a.createElement("div", {
                        className: "row"
                    }, r.a.createElement(g.a, {
                        title: c("auth.title"),
                        isOpen: !0,
                        isCloseButtonShown: !1
                    }, r.a.createElement("div", {
                        className: "".concat(S.a.DIALOG_BODY, " bitfinex-auth")
                    }, r.a.createElement("img", {
                        alt: i.h.Name,
                        src: "/images/logo3-dark-theme.svg",
                        className: "bitfinex-logo-dark"
                    }), r.a.createElement("img", {
                        alt: i.h.Name,
                        src: "/images/logo3-light-theme.svg",
                        className: "bitfinex-logo-light"
                    }), r.a.createElement(T.a, null, c("auth.auth.note1"), r.a.createElement("a", {
                        href: i.h.KEY_URL,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, i.h.KEY_URL), c("auth.auth.note2")), r.a.createElement(x, {
                        label: "auth.enterAPIKey",
                        name: "key",
                        placeholder: "auth.enterAPIKey",
                        value: t,
                        onChange: this.handleChange
                    }), r.a.createElement(x, {
                        label: "auth.enterAPISecret",
                        name: "secret",
                        placeholder: "auth.enterAPISecret",
                        value: n,
                        onChange: this.handleChange
                    })), r.a.createElement("div", {
                        className: S.a.DIALOG_FOOTER
                    }, r.a.createElement("div", {
                        className: S.a.DIALOG_FOOTER_ACTIONS
                    }, r.a.createElement(k.b, {
                        name: "check",
                        icon: "key",
                        intent: j.a.SUCCESS,
                        onClick: this.handleClick,
                        disabled: !t || !n || s,
                        loading: s
                    }, c("auth.checkAuth")))))) : !i.h.hideNonIdealState && r.a.createElement(y.a, {
                        className: "bitfinex-nonideal",
                        icon: "key",
                        title: c("auth.nonideal.title"),
                        description: c("auth.nonideal.description")
                    });
                    return o ? r.a.createElement(a.Fragment, null, l) : null
                }
            }]),
            t
        }(a.PureComponent);
        R.defaultProps = {
            authStatus: null,
            apiKey: "",
            apiSecret: "",
            checkAuth: function() {},
            isShown: !1,
            loading: !1,
            setKey: function() {},
            setSecret: function() {}
        };
        var U = Object(s.e)("translations")(R)
          , L = Object(u.c)(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                apiKey: Object(p.a)(e),
                apiSecret: Object(p.b)(e),
                isShown: Object(b.c)(e),
                authStatus: Object(b.a)(e),
                loading: Object(b.b)(e)
            }
        }, function(e) {
            return {
                checkAuth: function() {
                    return e(d.c.checkAuth())
                },
                setKey: function(t) {
                    return e(f.a.setApiKey(t))
                },
                setSecret: function(t) {
                    return e(f.a.setApiSecret(t))
                }
            }
        })(U)
          , P = n(327)
          , D = n(8)
          , M = n.n(D)
          , W = function(e) {
            var t = e.children
              , n = e.className;
            return r.a.createElement("div", {
                className: "col ".concat(n || "")
            }, t)
        };
        W.defaultProps = {
            children: "",
            className: ""
        };
        var F = W
          , H = function(e) {
            function t() {
                return Object(m.a)(this, t),
                Object(E.a)(this, Object(v.a)(t).apply(this, arguments))
            }
            return Object(_.a)(t, e),
            Object(h.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.title
                      , n = e.links;
                    return r.a.createElement("div", null, r.a.createElement("p", {
                        className: "footer-links-title"
                    }, t), r.a.createElement("ul", {
                        className: "footer-links-container"
                    }, n.map(function(e, t) {
                        var n = e.title
                          , a = e.link;
                        return r.a.createElement("li", {
                            className: "footer-links-item",
                            key: t
                        }, "function" === typeof a ? r.a.createElement("a", {
                            className: "footer-links-item-link",
                            onClick: a
                        }, r.a.createElement("span", null, n)) : r.a.createElement("a", {
                            className: "footer-links-item-link",
                            href: a
                        }, "string" === typeof n ? r.a.createElement("span", null, n) : n))
                    })))
                }
            }]),
            t
        }(r.a.Component)
          , B = "ethfinex".toLowerCase()
          , K = function(e) {
            var t = e.t;
            e.setLang;
            return [[{
                title: t("footer.features"),
                links: [{
                    title: t("footer.trading"),
                    link: "https://www.".concat(B, ".com/trading")
                }, {
                    title: t("footer.funding"),
                    link: "https://www.".concat(B, ".com/funding")
                }, {
                    title: t("footer.deposit"),
                    link: "https://www.".concat(B, ".com/deposit")
                }, {
                    title: t("footer.withdraw"),
                    link: "https://www.".concat(B, ".com/withdraw")
                }, {
                    title: t("footer.manage_wallets"),
                    link: "https://www.".concat(B, ".com/wallets")
                }]
            }, {
                title: t("footer.lang"),
                links: [{
                    title: "English",
                    link: "".concat(window.location.href.replace(window.location.search, ""), "?locale=en")
                }, {
                    title: "P\u0443\u0441\u0441\u043a\u0438\u0439",
                    link: "".concat(window.location.href.replace(window.location.search, ""), "?locale=ru")
                }, {
                    title: "\u4e2d\u6587 (\u7b80\u5316)",
                    link: "".concat(window.location.href.replace(window.location.search, ""), "?locale=cn")
                }, {
                    title: "\u4e2d\u6587 (\u7e41\u9ad4)",
                    link: "".concat(window.location.href.replace(window.location.search, ""), "?locale=tw")
                }, {
                    title: t("header.lang.ko"),
                    link: "".concat(window.location.href.replace(window.location.search, ""), "?locale=ko")
                }]
            }], [{
                title: t("footer.support"),
                links: [{
                    title: t("footer.faq"),
                    link: "https://www.".concat(B, ".com/support")
                }, {
                    title: t("footer.kb"),
                    link: "https://support.".concat(B, ".com/")
                }]
            }, {
                title: t("footer.explore"),
                links: ["bitfinex" === B && {
                    title: t("footer.mobile_app"),
                    link: "https://www.".concat(B, ".com/app")
                }, {
                    title: t("footer.features"),
                    link: "https://www.".concat(B, ".com/features")
                }, {
                    title: t("footer.market_stats"),
                    link: "https://www.".concat(B, ".com/stats")
                }, {
                    title: t("footer.security"),
                    link: "https://www.".concat(B, ".com/legal/security_policy")
                }, {
                    title: t("footer.how_it_works"),
                    link: "bitfinex" === B ? "https://www.".concat(B, ".com/howitworks") : "https://support.".concat(B, ".com")
                }, {
                    title: t("footer.fees"),
                    link: "https://www.".concat(B, ".com/fees")
                }, "bitfinex" === B && {
                    title: t("footer.about_page"),
                    link: "https://www.".concat(B, ".com/about")
                }]
            }], [{
                title: t("footer.util"),
                links: [{
                    title: t("footer.api_keys"),
                    link: "https://www.".concat(B, ".com/api")
                }, {
                    title: t("footer.api_docs"),
                    link: "bitfinex" === B ? "http://docs.".concat(B, ".com") : "https://www.".concat(B, ".com/api_docs")
                }, {
                    title: t("footer.full_order_book"),
                    link: "https://www.".concat(B, ".com/order_book")
                }, {
                    title: t("footer.full_book"),
                    link: "https://www.".concat(B, ".com/funding_book")
                }, "bitfinex" === B && {
                    title: t("footer.changelog"),
                    link: "http://blog.".concat(B, ".com/category/changelogs/")
                }]
            }, {
                title: t("footer.news_discuss"),
                links: [{
                    title: t("footer.announcements"),
                    link: "https://www.".concat(B, ".com/posts")
                }, {
                    title: r.a.createElement("span", null, r.a.createElement("i", {
                        className: "fa fa-twitter"
                    }), " @".concat(B)),
                    link: "https://twitter.com/".concat(B)
                }, "bitfinex" === B && {
                    title: r.a.createElement("span", null, r.a.createElement("i", {
                        className: "fa fa-facebook"
                    }), " /".concat(B)),
                    link: "https://www.facebook.com/".concat(B)
                }, "bitfinex" === B && {
                    title: r.a.createElement("span", null, r.a.createElement("i", {
                        className: "fa fa-linkedin"
                    }), " /".concat(B, "-limited")),
                    link: "https://www.linkedin.com/company/".concat(B, "-limited/")
                }, {
                    title: "bitfinex" === B ? r.a.createElement("span", null, r.a.createElement("i", {
                        className: "fa fa-telegram"
                    }), " @bfxtelegram") : "Telegram Chat",
                    link: "bitfinex" === B ? "http://t.me/bfxtelegram" : "https://t.me/joinchat/GgM7eBFC-BdMYaC_3hN4Kg"
                }, "bitfinex" === B && {
                    title: t("footer.status_page"),
                    link: "https://".concat(B, ".statuspage.io/")
                }, {
                    title: t("footer.blog"),
                    link: "http://blog.".concat(B, ".com/")
                }, "ethfinex" === B && {
                    title: "Youtube",
                    link: "https://www.youtube.com/channel/UCpPppKXkbJIfSkPKJ5cC_XQ"
                }, {
                    title: t("footer.newsletter"),
                    link: "http://blog.".concat(B, ".com/newsletter/")
                }]
            }], [{
                title: t("footer.contact_short"),
                links: [{
                    title: t("footer.careers"),
                    link: "https://www.".concat(B, ".com/careers")
                }, {
                    title: t("footer.media_contact"),
                    link: "https://www.".concat(B, ".com/media")
                }]
            }, {
                title: t("footer.legal"),
                links: [{
                    title: t("footer.terms_and_cond"),
                    link: "https://www.".concat(B, ".com/legal/terms")
                }, "bitfinex" === B && {
                    title: t("footer.rrt_token_terms"),
                    link: "https://www.".concat(B, ".com/legal/rrt_token_terms")
                }, "bitfinex" === B && {
                    title: t("footer.cst_token_terms"),
                    link: "https://www.".concat(B, ".com/legal/cst")
                }, {
                    title: t("footer.risk_disclosure"),
                    link: "https://www.".concat(B, ".com/legal/risk")
                }, {
                    title: t("footer.privacy_policy"),
                    link: "https://www.".concat(B, ".com/legal/privacy")
                }, {
                    title: t("footer.law_enforcement"),
                    link: "https://www.".concat(B, ".com/legal/law_enforcement_requests_policy")
                }, {
                    title: t("footer.trademarks"),
                    link: "https://www.".concat(B, ".com/legal/trademarks")
                }, {
                    title: t("footer.anti_spam"),
                    link: "https://www.".concat(B, ".com/legal/anti_spam")
                }]
            }]]
        }
          , G = n(328)
          , q = n.n(G)
          , V = n(329)
          , Y = n.n(V)
          , X = n(330)
          , Q = n.n(X)
          , z = n(331)
          , J = n.n(z)
          , Z = n(332)
          , $ = n.n(Z)
          , ee = n(333)
          , te = n.n(ee)
          , ne = n(334)
          , ae = n.n(ne)
          , re = function() {
            return r.a.createElement("div", {
                className: "img-links hidden-xs row center-xs"
            }, r.a.createElement("a", {
                href: "https://www.facebook.com/ethfinex",
                rel: "noopener noreferrer",
                target: "_blank"
            }, r.a.createElement("img", {
                src: q.a,
                alt: "facebook"
            })), r.a.createElement("a", {
                href: "https://twitter.com/ethfinex",
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("img", {
                src: Y.a,
                alt: "twitter"
            })), r.a.createElement("a", {
                href: "https://www.youtube.com/channel/UCpPppKXkbJIfSkPKJ5cC_XQ",
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("img", {
                src: te.a,
                alt: "youtube"
            })), r.a.createElement("a", {
                href: "https://www.linkedin.com/company/ethfinex",
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("img", {
                src: ae.a,
                alt: "linkedin"
            })), r.a.createElement("a", {
                href: "https://www.reddit.com/r/ethfinex/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("img", {
                src: $.a,
                alt: "reddit"
            })), r.a.createElement("a", {
                href: "https://www.instagram.com/ethfinex/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("img", {
                src: Q.a,
                alt: "instagram"
            })), r.a.createElement("a", {
                href: "https://t.me/joinchat/GgM7eBFC-BdMYaC_3hN4Kg",
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("img", {
                src: J.a,
                alt: "telegram"
            })))
        }
          , ce = (n(433),
        Object(s.e)("translations")(function(e) {
            var t = Object(P.a)({}, e);
            return r.a.createElement("div", {
                className: M()(["footer", S.a.DARK])
            }, r.a.createElement(re, null), r.a.createElement("div", {
                className: "footer-links container"
            }, r.a.createElement("div", {
                className: "row"
            }, K(t).map(function(e, t) {
                return r.a.createElement(F, {
                    key: t,
                    className: "col-xs-12 col-md-3"
                }, e.map(function(e, t) {
                    var n = e.title
                      , a = e.links;
                    return r.a.createElement(H, {
                        key: t,
                        title: n,
                        links: a
                    })
                }))
            }))))
        }))
          , oe = Object(u.c)(null, function(e) {
            return {
                setLang: function(t) {
                    return e(f.a.setLang(t))
                }
            }
        })(ce)
          , ie = n(250)
          , se = n(335)
          , le = n.n(se)
          , ue = n(336)
          , de = n.n(ue);
        ie.a.use(le.a).use(de.a).use(s.c).init({
            backend: {
                loadPath: "/locales/{{lng}}/{{ns}}.json"
            },
            detection: {
                order: ["querystring", "localStorage"],
                lookupQuerystring: "locale"
            },
            parseMissingKeyHandler: function(e) {
                return e
            },
            fallbackLng: "en",
            ns: ["translations"],
            defaultNS: "translations",
            debug: !1,
            react: {
                wait: !0,
                useSuspense: !1
            }
        });
        var fe = ie.a
          , be = n(80)
          , pe = n(366)
          , me = new (function() {
            function e() {
                Object(m.a)(this, e),
                this.ga = pe.a,
                this.id = "UA-117611254-6"
            }
            return Object(h.a)(e, [{
                key: "init",
                value: function() {
                    return this.ga.initialize(this.id),
                    this
                }
            }, {
                key: "track",
                value: function() {
                    this.ga.pageview(window.location.pathname + window.location.search)
                }
            }]),
            e
        }())
          , he = Object(be.a)();
        he.listen(function() {
            window && (me.track(),
            window.scrollTo(0, 0))
        });
        var Ee = he
          , ve = {
            SHOW_CUSTOM_DIALOG: "BITFINEX/CUSTOM_DIALOG/SHOW",
            UI_LOADED: "BITFINEX/UI/LOAD"
        };
        function _e(e) {
            return {
                type: ve.SHOW_CUSTOM_DIALOG,
                payload: e
            }
        }
        var Oe = n(88)
          , ge = n(368)
          , Se = n(251)
          , Te = n(44)
          , ke = n(170)
          , je = n(340)
          , ye = n(341)
          , Ae = n(22)
          , we = "SET_TOKINEX_LANG"
          , Ne = "CHANGE_TOKINEX_LANG";
        function Ce(e) {
            var t = e.payload;
            return {
                type: we,
                payload: t
            }
        }
        var Ie = n(119)
          , xe = n.n(Ie)
          , Re = n(367)
          , Ue = n(337)
          , Le = n.n(Ue)
          , Pe = n(164)
          , De = n.n(Pe)
          , Me = (w.a.func.isRequired,
        w.a.func.isRequired,
        function(e) {
            function t(e) {
                var n;
                Object(m.a)(this, t),
                n = Object(E.a)(this, Object(v.a)(t).call(this, e));
                var a = e.changeLang;
                return n.switchEn = n.switchLang.bind(Object(O.a)(Object(O.a)(n)), "en"),
                n.switchRu = n.switchLang.bind(Object(O.a)(Object(O.a)(n)), "ru"),
                n.switchTw = n.switchLang.bind(Object(O.a)(Object(O.a)(n)), "tw"),
                n.switchCn = n.switchLang.bind(Object(O.a)(Object(O.a)(n)), "cn"),
                n.switchKo = n.switchLang.bind(Object(O.a)(Object(O.a)(n)), "ko"),
                n.lang = xe.a.parse(window.location.search).locale,
                n.lang && a(n.lang),
                n
            }
            return Object(_.a)(t, e),
            Object(h.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props.search;
                    if (!new RegExp(/locale/).test(e)) {
                        var t = function() {
                            var e = navigator.language;
                            return !e || RegExp(/en/).test(e) ? null : new RegExp(/zh/).test(e) ? De()(e.split("-")).toLowerCase() : Le()(e.split("-")).toLowerCase()
                        }();
                        t && this.switchLang(t)
                    }
                }
            }, {
                key: "switchLang",
                value: function(e, t) {
                    t && t.preventDefault();
                    var n = this.props.search
                      , a = window.location.href.replace(n, "");
                    window.location = "".concat(a, "?locale=").concat(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.t
                      , t = r.a.createElement(ge.a, null, r.a.createElement(Re.a, {
                        text: e("header.lang.en"),
                        onClick: this.switchEn,
                        intent: "en" === this.lang ? j.a.PRIMARY : void 0
                    }), r.a.createElement(Re.a, {
                        text: e("header.lang.ru"),
                        onClick: this.switchRu,
                        intent: "ru" === this.lang ? j.a.PRIMARY : void 0
                    }), r.a.createElement(Re.a, {
                        text: e("header.lang.tw"),
                        onClick: this.switchTw,
                        intent: "tw" === this.lang ? j.a.PRIMARY : void 0
                    }), r.a.createElement(Re.a, {
                        text: e("header.lang.cn"),
                        onClick: this.switchCn,
                        intent: "cn" === this.lang ? j.a.PRIMARY : void 0
                    }), r.a.createElement(Re.a, {
                        text: e("header.lang.ko"),
                        onClick: this.switchKo,
                        intent: "ko" === this.lang ? j.a.PRIMARY : void 0
                    }));
                    return r.a.createElement(Se.a, {
                        content: t,
                        interactionKind: Se.b.CLICK,
                        position: Te.a.BOTTOM,
                        popoverClassName: "language-popover"
                    }, r.a.createElement(k.b, {
                        rightIcon: "chevron-down",
                        minimal: !0,
                        text: e("header.lang.".concat(this.lang || "en"))
                    }))
                }
            }]),
            t
        }(a.PureComponent));
        Me.defaultProps = {
            setLang: function() {}
        };
        var We = Object(s.e)("translations")(Me)
          , Fe = {
            setLang: function(e) {
                return f.a.setLang(e)
            },
            changeLang: function(e) {
                return {
                    type: Ne,
                    payload: e
                }
            }
        }
          , He = Object(u.c)(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                locale: Object(p.f)(e),
                search: e.router.location.search
            }
        }, Fe)(We)
          , Be = n(136)
          , Ke = function(e) {
            return e.status
        }
          , Ge = function(e) {
            return Ke(e).intent
        }
          , qe = function(e) {
            return Ke(e).msg
        }
          , Ve = n(1)
          , Ye = n(634)
          , Xe = {
            clearStatus: w.a.func,
            intent: w.a.string,
            msg: w.a.objectOf(w.a.string)
        }
          , Qe = {
            clearStatus: function() {},
            intent: j.a.PRIMARY,
            msg: {}
        }
          , ze = Ye.a.create({
            className: "bitfinex-toaster",
            position: Te.a.BOTTOM_RIGHT
        })
          , Je = function(e) {
            var t = e.clearStatus
              , n = e.intent
              , a = e.t
              , r = e.msg
              , c = void 0 === r ? {} : r;
            if (!c.id && !c.message)
                return "";
            var o = Object(Ve.a)({}, c, {
                topic: c.topic ? a(c.topic) || c.topic : void 0
            });
            return ze.show({
                intent: n || j.a.PRIMARY,
                message: c.message || a(c.id, o),
                timeout: 1e4
            }),
            t(),
            null
        };
        Je.propTypes = Xe,
        Je.defaultProps = Qe;
        var Ze = Object(s.e)("translations")(Je)
          , $e = Object(u.c)(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                intent: Ge(e),
                msg: qe(e)
            }
        }, function(e) {
            return {
                clearStatus: function() {
                    return e(Be.b.clearStatus())
                }
            }
        })(Ze)
          , et = (w.a.func.isRequired,
        w.a.func.isRequired,
        function(e) {
            function t(e) {
                var n;
                return Object(m.a)(this, t),
                (n = Object(E.a)(this, Object(v.a)(t).call(this, e))).switchEn = n.switchLang.bind(Object(O.a)(Object(O.a)(n)), "en"),
                n.switchTw = n.switchLang.bind(Object(O.a)(Object(O.a)(n)), "tw"),
                n
            }
            return Object(_.a)(t, e),
            Object(h.a)(t, [{
                key: "switchLang",
                value: function(e, t) {
                    t.preventDefault(),
                    this.props.setLang(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.t
                      , n = e.isLogin
                      , a = e.handleLogout
                      , c = r.a.createElement(ge.a, null, r.a.createElement(Re.a, {
                        text: t("header.logout"),
                        onClick: a,
                        disabled: !n
                    }));
                    return r.a.createElement(Se.a, {
                        content: c,
                        interactionKind: Se.b.HOVER,
                        position: Te.a.BOTTOM_RIGHT
                    }, r.a.createElement(k.b, {
                        minimal: !0,
                        icon: "person"
                    }))
                }
            }]),
            t
        }(a.PureComponent));
        et.defaultProps = {
            setLang: function() {}
        };
        var tt = Object(s.e)("translations")(et)
          , nt = Object(u.c)(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                locale: Object(p.f)(e)
            }
        }, function(e) {
            return {
                setLang: function(t) {
                    return e(f.a.setLang(t))
                }
            }
        })(tt)
          , at = n(194)
          , rt = n(632)
          , ct = (w.a.string.isRequired,
        w.a.func.isRequired,
        function(e) {
            function t(e) {
                var n;
                return Object(m.a)(this, t),
                (n = Object(E.a)(this, Object(v.a)(t).call(this, e))).handlers = {},
                n.handleClick = n.handleClick.bind(Object(O.a)(Object(O.a)(n))),
                n
            }
            return Object(_.a)(t, e),
            Object(h.a)(t, [{
                key: "handleClick",
                value: function(e) {
                    var t = this;
                    return this.handlers[e] || (this.handlers[e] = function() {
                        t.props.setDateFormat(e)
                    }
                    ),
                    this.handlers[e]
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.dateFormat
                      , n = Ae.a.DATE_FORMATS.map(function(n) {
                        return r.a.createElement(Re.a, {
                            key: n,
                            text: n,
                            onClick: e.handleClick(n),
                            intent: n === t ? j.a.PRIMARY : void 0
                        })
                    })
                      , a = r.a.createElement(ge.a, null, n);
                    return r.a.createElement(Se.a, {
                        content: a,
                        interactionKind: Se.b.CLICK,
                        position: Te.a.BOTTOM
                    }, r.a.createElement(k.b, {
                        rightIcon: "caret-down",
                        text: t
                    }))
                }
            }]),
            t
        }(a.PureComponent));
        ct.defaultProps = {};
        var ot = ct
          , it = Object(u.c)(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                dateFormat: Object(p.d)(e)
            }
        }, function(e) {
            return {
                setDateFormat: function(t) {
                    return e(f.a.setDateFormat(t))
                }
            }
        })(ot)
          , st = M()("bitfinex-preferences-desc", "bitfinex-text-align-right", "hidden-xs", "col-sm-4", "col-md-4", "col-lg-4", "col-xl-4")
          , lt = M()("col-xs-12", "hidden-sm", "hidden-md", "hidden-lg", "hidden-xl")
          , ut = M()("col-xs-12", "col-sm-8", "col-md-8", "col-lg-8", "col-xl-8")
          , dt = (M()("col-xs-12", "col-sm-8", "col-md-8", "col-lg-8", "col-xl-8", "bitfinex-pref-checkbox"),
        w.a.func.isRequired,
        w.a.func.isRequired,
        w.a.func.isRequired,
        w.a.string,
        w.a.string,
        function(e) {
            function t(e) {
                var n;
                return Object(m.a)(this, t),
                (n = Object(E.a)(this, Object(v.a)(t).call(this, e))).switchDark = n.switchTheme.bind(Object(O.a)(Object(O.a)(n)), "bp3-dark"),
                n.switchLight = n.switchTheme.bind(Object(O.a)(Object(O.a)(n)), "bp3-light"),
                n.handleTimezoneChange = n.handleTimezoneChange.bind(Object(O.a)(Object(O.a)(n))),
                n
            }
            return Object(_.a)(t, e),
            Object(h.a)(t, [{
                key: "switchTheme",
                value: function(e, t) {
                    t.preventDefault(),
                    this.props.setTheme(e)
                }
            }, {
                key: "handleTimezoneChange",
                value: function(e) {
                    this.props.setTimeZone(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.handlePrefDialogClose
                      , n = e.t
                      , a = e.isPrefOpen
                      , c = e.theme
                      , o = e.timezone;
                    if (!a)
                        return null;
                    var s = i.h.hideSwitchTheme ? null : r.a.createElement("div", {
                        className: "row"
                    }, r.a.createElement("div", {
                        className: st
                    }, n("preferences.theme")), r.a.createElement("div", {
                        className: lt
                    }, n("preferences.theme")), r.a.createElement("div", {
                        className: ut
                    }, r.a.createElement(at.a, null, r.a.createElement(k.b, {
                        name: "light",
                        text: n("theme.light"),
                        onClick: this.switchLight,
                        intent: c.includes("light") ? j.a.PRIMARY : void 0
                    }), r.a.createElement(k.b, {
                        name: "dark",
                        text: n("theme.dark"),
                        onClick: this.switchDark,
                        intent: c.includes("dark") ? j.a.PRIMARY : void 0
                    }))));
                    return r.a.createElement(g.a, {
                        icon: "person",
                        onClose: t,
                        title: n("preferences.title"),
                        autoFocus: !0,
                        canEscapeKeyClose: !0,
                        canOutsideClickClose: !0,
                        enforceFocus: !0,
                        usePortal: !0,
                        isOpen: a
                    }, r.a.createElement("div", {
                        className: S.a.DIALOG_BODY
                    }, r.a.createElement("div", {
                        className: "row"
                    }, r.a.createElement("div", {
                        className: st
                    }, n("preferences.language")), r.a.createElement("div", {
                        className: lt
                    }, n("preferences.language")), r.a.createElement("div", {
                        className: ut
                    }, r.a.createElement(He, null))), s, r.a.createElement("div", {
                        className: "row"
                    }, r.a.createElement("div", {
                        className: st
                    }, n("preferences.timezone")), r.a.createElement("div", {
                        className: lt
                    }, n("preferences.timezone")), r.a.createElement("div", {
                        className: ut
                    }, r.a.createElement(rt.a, {
                        showLocalTimezone: !0,
                        value: o,
                        onChange: this.handleTimezoneChange
                    }))), r.a.createElement("div", {
                        className: "row"
                    }, r.a.createElement("div", {
                        className: st
                    }, n("preferences.dateformat")), r.a.createElement("div", {
                        className: lt
                    }, n("preferences.dateformat")), r.a.createElement("div", {
                        className: ut
                    }, r.a.createElement(it, null))), r.a.createElement("div", {
                        className: "row"
                    }, r.a.createElement("div", {
                        className: st
                    }, n("preferences.milliseconds")), r.a.createElement("div", {
                        className: lt
                    }, n("preferences.milliseconds")))), r.a.createElement("div", {
                        className: S.a.DIALOG_FOOTER
                    }, r.a.createElement("div", {
                        className: S.a.DIALOG_FOOTER_ACTIONS
                    }, r.a.createElement(k.b, {
                        onClick: t
                    }, n("preferences.close")))))
                }
            }]),
            t
        }(a.PureComponent))
          , ft = Object(s.e)("translations")(dt)
          , bt = Object(u.c)(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                theme: Object(p.i)(e),
                timezone: Object(p.j)(e)
            }
        }, function(e) {
            return {
                setTheme: function(t) {
                    return e(f.a.setTheme(t))
                },
                setTimeZone: function(t) {
                    return e(f.a.setTimezone(t))
                }
            }
        })(ft)
          , pt = n(97)
          , mt = n(72)
          , ht = (w.a.bool.isRequired,
        w.a.bool,
        w.a.func.isRequired,
        w.a.func.isRequired,
        w.a.string,
        w.a.func.isRequired,
        w.a.func,
        w.a.element,
        w.a.element,
        w.a.func,
        w.a.string.isRequired,
        w.a.array,
        w.a.shape({
            pathame: w.a.string
        }),
        function(e) {
            function t(e) {
                var n;
                return Object(m.a)(this, t),
                (n = Object(E.a)(this, Object(v.a)(t).call(this, e))).state = {
                    isPrefOpen: !1,
                    scroll: 0
                },
                n.renderMenu = function(e) {
                    var t = n.props
                      , c = t.authIsShown
                      , o = t.authStatus
                      , i = t.location
                      , s = t.t
                      , l = !c && !0 === o
                      , u = Object(mt.c)(i.pathname)
                      , d = Object(mt.d)(i.pathname);
                    return l ? r.a.createElement(a.Fragment, null, r.a.createElement(nt, {
                        isLogin: l,
                        handleLogout: n.authLogout,
                        handleClickPref: n.handleClickPref
                    }), r.a.createElement(He, null)) : e ? r.a.createElement(r.a.Fragment, null, r.a.createElement(ge.a.Divider, null), r.a.createElement(ge.a.Item, {
                        href: u,
                        text: s("login.login")
                    }), r.a.createElement(ge.a.Item, {
                        href: d,
                        text: s("signUp")
                    })) : r.a.createElement(r.a.Fragment, null, r.a.createElement("a", {
                        href: u
                    }, r.a.createElement(k.b, {
                        minimal: !0
                    }, s("login.login"))), r.a.createElement("a", {
                        href: d
                    }, r.a.createElement(k.b, {
                        minimal: !0,
                        className: "ts-border-button"
                    }, s("signUp"))), !e && r.a.createElement(He, null))
                }
                ,
                n.renderMobileMenu = function() {
                    var e = n.props
                      , t = e.authStatus
                      , c = e.t;
                    return r.a.createElement(Se.a, {
                        interactionKind: Se.b.CLICK,
                        position: Te.a.BOTTOM,
                        popoverClassName: "mobile-popover",
                        content: r.a.createElement(a.Fragment, null, r.a.createElement(ge.a, null, n.renderLinks(!0), t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(ge.a.Divider, null), r.a.createElement(ge.a.Item, {
                            text: c("header.logout"),
                            onClick: n.authLogout
                        })) : n.renderMenu(!0)), r.a.createElement(He, null))
                    }, r.a.createElement(k.b, {
                        minimal: !0,
                        icon: "menu"
                    }))
                }
                ,
                n.authLogout = n.authLogout.bind(Object(O.a)(Object(O.a)(n))),
                n.handleClickPref = n.handleClickPref.bind(Object(O.a)(Object(O.a)(n))),
                n.handleClickCustom = n.handleClickCustom.bind(Object(O.a)(Object(O.a)(n))),
                n.handlePrefDialogClose = n.handlePrefDialogClose.bind(Object(O.a)(Object(O.a)(n))),
                n.handleToggleMenu = n.handleToggleMenu.bind(Object(O.a)(Object(O.a)(n))),
                n.renderLinks = n.renderLinks.bind(Object(O.a)(Object(O.a)(n))),
                n.handleScroll = n.handleScroll.bind(Object(O.a)(Object(O.a)(n))),
                n
            }
            return Object(_.a)(t, e),
            Object(h.a)(t, [{
                key: "componentWillMount",
                value: function() {
                    window.addEventListener("scroll", this.handleScroll)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.handleScroll()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("scroll", this.handleScroll)
                }
            }, {
                key: "handleScroll",
                value: function() {
                    var e = window.pageYOffset;
                    this.setState({
                        scroll: e
                    })
                }
            }, {
                key: "authLogout",
                value: function(e) {
                    e.preventDefault(),
                    this.props.logout()
                }
            }, {
                key: "handleClickPref",
                value: function(e) {
                    e.preventDefault(),
                    this.setState({
                        isPrefOpen: !0
                    })
                }
            }, {
                key: "handleClickCustom",
                value: function(e) {
                    e.preventDefault(),
                    this.props.showCustomDialog(!0)
                }
            }, {
                key: "handlePrefDialogClose",
                value: function(e) {
                    e.preventDefault(),
                    this.setState({
                        isPrefOpen: !1
                    })
                }
            }, {
                key: "handleToggleMenu",
                value: function(e) {
                    e.preventDefault();
                    var t = this.props
                      , n = t.menuMode
                      , a = t.setMenuMode
                      , r = Ae.a.MENU_MODE_ICON
                      , c = Ae.a.MENU_MODE_NORMAL;
                    a(n === r ? c : r)
                }
            }, {
                key: "renderLinks",
                value: function(e) {
                    var t = this.props
                      , n = t.links
                      , a = t.t
                      , c = t.history;
                    if (0 === n.length)
                        return null;
                    var o = n.map(function(t) {
                        var n = t.url
                          , o = t.icon
                          , i = t.textId;
                        return e ? r.a.createElement(ge.a.Item, {
                            key: i,
                            onClick: function() {
                                return c.push(n)
                            },
                            text: a(i)
                        }) : r.a.createElement(k.b, {
                            key: i,
                            className: S.a.MINIMAL,
                            icon: o,
                            text: a(i),
                            intent: j.a.NONE,
                            onClick: function() {
                                return c.push(n)
                            }
                        })
                    });
                    return o.push(r.a.createElement("a", {
                        href: i.e
                    }, r.a.createElement(k.b, {
                        key: "home_url",
                        className: S.a.MINIMAL,
                        text: "Ethfinex",
                        intent: j.a.NONE
                    }))),
                    o
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.authIsShown
                      , n = e.authStatus
                      , c = e.history
                      , o = e.t
                      , s = e.location
                      , l = e.ToggleMenu
                      , u = e.getTarget
                      , d = this.state
                      , f = d.isPrefOpen
                      , b = d.scroll
                      , p = s.pathname
                      , m = p === pt.c
                      , h = {
                        "nav-top": 0 === b && m,
                        "not-auth": !n
                    }
                      , E = u ? u(p) : p
                      , v = l && (!t && !0 === n) ? r.a.createElement(a.Fragment, null, r.a.createElement(Se.a, {
                        className: "hidden-lg hidden-xl",
                        interactionKind: Se.b.CLICK,
                        position: Te.a.BOTTOM,
                        content: r.a.createElement(l, {
                            target: E,
                            handleClickCustom: this.handleClickCustom,
                            history: c,
                            t: o,
                            menuMode: Ae.a.MENU_MODE_HOVER
                        })
                    }, r.a.createElement(k.b, {
                        minimal: !0,
                        icon: "menu"
                    })), r.a.createElement("span", {
                        className: "hidden-xs hidden-sm hidden-md"
                    }, r.a.createElement(k.b, {
                        minimal: !0,
                        icon: "menu",
                        onClick: this.handleToggleMenu
                    })), "\xa0") : null;
                    return r.a.createElement(a.Fragment, null, r.a.createElement(ke.a, {
                        fixedToTop: !0,
                        className: M()(h)
                    }, r.a.createElement(je.a, {
                        align: "left"
                    }, r.a.createElement(ye.a, null, v, r.a.createElement(Oe.a, {
                        to: "/token-sales"
                    }, r.a.createElement("img", {
                        alt: i.h.Name,
                        src: "/images/center-logo.svg",
                        className: "ethfinex-logo-only"
                    })))), r.a.createElement(je.a, {
                        align: "left"
                    }, r.a.createElement(ye.a, null, r.a.createElement("span", {
                        className: "hide-on-small-and-down"
                    }, this.renderLinks()))), r.a.createElement(je.a, {
                        align: "right"
                    }, r.a.createElement(ye.a, null, r.a.createElement("span", {
                        className: "hide-on-small-and-down"
                    }, this.renderMenu()), r.a.createElement("span", {
                        className: "hide-on-med-and-up"
                    }, this.renderMobileMenu())))), r.a.createElement($e, null), r.a.createElement(bt, {
                        isPrefOpen: f,
                        handlePrefDialogClose: this.handlePrefDialogClose
                    }))
                }
            }]),
            t
        }(a.PureComponent));
        ht.defaultProps = {
            authIsShown: !1,
            authStatus: !1,
            logout: function() {},
            menuMode: "",
            showCustomDialog: function() {},
            SyncMode: null,
            ToggleMenu: null,
            getTarget: function() {},
            links: [],
            location: {
                pathame: ""
            }
        };
        var Et = Object(s.e)("translations")(Object(l.g)(ht))
          , vt = Object(l.g)(Object(u.c)(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                authIsShown: Object(b.c)(e),
                authStatus: Object(b.a)(e),
                email: Object(p.e)(e),
                menuMode: Object(p.g)(e)
            }
        }, function(e) {
            return {
                logout: function() {
                    return e(d.c.logout())
                },
                setMenuMode: function(t) {
                    return e(f.a.setMenuMode(t))
                },
                showCustomDialog: function(t) {
                    return e(_e(t))
                }
            }
        })(Et))
          , _t = n(237)
          , Ot = n(71)
          , gt = n(286)
          , St = n(148)
          , Tt = n(64)
          , kt = n(65)
          , jt = {
            API_URL: "https://tokinex.ethfinex.com/api",
            KEY_URL: "https://www.ethfinex.com/api",
            HOME_URL: "https://www.ethfinex.com",
            EFX_LOGIN_URL: "https://www.ethfinex.com",
            BFX_LOGIN_URL: "https://www.bitfinex.com",
            showAuthPage: !1,
            hideNonIdealState: !0,
            wssUrl: "wss://api.ethfinex.com/ws/2"
        } || {}
          , yt = jt.API_URL || "";
        window.__platform = jt;
        var At = {
            UPDATE_TOKENSALE: "UPDATE_TOKENSALE",
            SET_TOKEN_SALE: "SET_TOKEN_SALE",
            SET_KYC_STATUS: "SET_KYC_STATUS",
            N_MESSAGE: "N_MESSAGE",
            INCREMENT_CONTRIBUTION: "INCREMENT_CONTRIBUTION",
            SET_CONTRIBUTION_STATUS: "SET_CONTRIBUTION_STATUS"
        }
          , wt = "tokenSales";
        function Nt(e) {
            return {
                type: At.SET_KYC_STATUS,
                payload: e
            }
        }
        function Ct(e) {
            var t = "".concat(yt, "/user-token-sale")
              , n = {
                tsid: e
            };
            return kt.a.send({
                path: t,
                body: n,
                meta: {
                    section: wt,
                    subsection: "getUserTokenSale"
                }
            })
        }
        function It(e, t) {
            var n = "".concat(yt, "/kyc-status")
              , a = {
                tsid: e,
                uuid: t
            };
            return kt.a.send({
                path: n,
                body: a,
                meta: {
                    section: wt,
                    subsection: "requestKycStatus"
                }
            })
        }
        function xt(e, t) {
            var n = "".concat(yt, "/synaps-on-board")
              , a = {
                tsid: e,
                code: t
            };
            return kt.a.send({
                path: n,
                body: a,
                meta: {
                    section: wt,
                    subsection: "userOnboardSuccess"
                }
            })
        }
        var Rt = n(39)
          , Ut = n.n(Rt)
          , Lt = n(36)
          , Pt = Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            REACT_APP_BLOCKPASS_ID: "ethfinex_token_sales",
            REACT_APP_BLOCKPASS_ENV: "prod",
            REACT_APP_PLATFORM: "ethfinex",
            REACT_APP_TITLE: "Token Sales",
            REACT_APP_LOGO_PATH: "favicon.ico"
        })
          , Dt = Pt.REACT_APP_BLOCKPASS_ENV
          , Mt = (Pt.REACT_APP_BLOCKPASS_ID,
        [.01, .1, 1, 10, 50, 100])
          , Wt = ["ETH", "BTC"]
          , Ft = "tETHUSD"
          , Ht = "tBTCUSD"
          , Bt = {
            fetching: "token_sales.contribution_process.verification_fetching",
            waiting: "token_sales.contribution_process.verification_waiting",
            "not found": "token_sales.contribution_process.verification_notfound"
        }
          , Kt = n(10)
          , Gt = n.n(Kt)
          , qt = (w.a.func.isRequired,
        w.a.object,
        w.a.shape(Lt.b),
        n(61))
          , Vt = function(e) {
            var t = e.t
              , n = e.ticker
              , a = e.tokenSale
              , c = a.goal
              , o = a.salePriceAsText
              , i = a.contributionCurrencies
              , s = a.maxAllocation
              , l = a.minAllocation
              , u = a.investorsVerified
              , d = Gt()(a, "raised.$numberDecimal", 0)
              , f = parseFloat(d.$numberDecimal || d) / c * 100;
            return r.a.createElement("div", {
                className: "tokensale_price"
            }, r.a.createElement("div", null, r.a.createElement("p", null, r.a.createElement("span", null, t("token_sales.price")), r.a.createElement("span", null, o)), r.a.createElement("p", null, r.a.createElement("span", null, t("token_sales.goal")), r.a.createElement("span", null, r.a.createElement("b", null, "".concat(c, " ").concat(i)), " ~ ", Object(qt.a)(c, n, i))), r.a.createElement("p", null, r.a.createElement("span", null, t("token_sales.maximum")), r.a.createElement("span", null, r.a.createElement("b", null, "".concat(s, " ").concat(i)), " ~ ", Object(qt.a)(s, n, i))), r.a.createElement("p", null, r.a.createElement("span", null, t("token_sales.minimum")), r.a.createElement("span", null, r.a.createElement("b", null, "".concat(l, " ").concat(i)), " ~ ", Object(qt.a)(l, n, i))), f > 0 && u && r.a.createElement("p", null, r.a.createElement("span", null, t("token_sales.investors")), r.a.createElement("span", null, u))))
        }
          , Yt = n(240)
          , Xt = n(19)
          , Qt = (w.a.func.isRequired,
        w.a.object,
        w.a.shape(Lt.c),
        w.a.shape(Lt.b),
        w.a.bool,
        function(e) {
            var t = e.t
              , n = e.tokenSale
              , c = e.ticker
              , o = e.userTokenSale
              , i = e.isAuthenticated
              , s = n.goal
              , l = n.completed
              , u = n.contributionCurrencies
              , d = n.investorsVerified
              , f = n.hideContributionBar
              , b = void 0 !== f && f
              , p = Gt()(n, "raised.$numberDecimal", 0)
              , m = parseFloat(p.$numberDecimal || p) / s * 100
              , h = o["contributed".concat(u)]
              , E = h / s * 100;
            return r.a.createElement(a.Fragment, null, m ? r.a.createElement("div", {
                className: "tokensale_raised row"
            }, !b && r.a.createElement(a.Fragment, null, r.a.createElement("div", {
                className: "col-xs-4"
            }, t("token_sales.masonry.raised")), r.a.createElement("div", {
                className: "col-xs-8 text-right"
            }, l ? r.a.createElement("span", null, t("token_sales.raise_complete")) : r.a.createElement("span", null, "".concat(Object(Xt.h)(parseFloat(p), 8), " ").concat(u), " ~ ", Object(qt.a)(p, c, u)))), r.a.createElement("div", {
                className: "col-xs-12 tokensale_raised_bar"
            }, !b && r.a.createElement(Yt.a, {
                color: l ? "#76e785" : "#6535ff",
                backgroundColor: "#fbfcfe",
                height: 10,
                perc: l ? 100 : m,
                width: "100%"
            }), h && i && !b && r.a.createElement("div", {
                className: "invested_progress_bar"
            }, r.a.createElement(Yt.a, {
                color: l ? "#76e785" : "#6535ff",
                backgroundColor: "#fbfcfe",
                height: 10,
                perc: E,
                width: "100%"
            }))), h && i && r.a.createElement(a.Fragment, null, r.a.createElement("div", {
                className: "col-xs-4 invested_text"
            }, r.a.createElement("span", null, t("token_sales.contribution_process.contributed_amount"))), r.a.createElement("div", {
                className: "col-xs-8 invested_text text-right"
            }, r.a.createElement("span", null, "".concat(h, " ").concat(u), " ~ ", Object(qt.a)(h, c, u))))) : r.a.createElement("p", null, d))
        }
        )
          , zt = n(20)
          , Jt = (w.a.string.isRequired,
        w.a.func.isRequired,
        n(207))
          , Zt = function(e) {
            var t = e.date
              , n = e.t
              , c = Object(Jt.c)(t, !0)
              , o = c.days
              , i = c.hours
              , s = c.minutes
              , l = c.seconds
              , u = Object(a.useState)(l)
              , d = Object(zt.a)(u, 2)
              , f = d[0]
              , b = d[1];
            return Object(a.useEffect)(function() {
                var e = setInterval(function() {
                    b(Object(Jt.c)(t, !0).seconds)
                }, 1e3);
                return function() {
                    return clearInterval(e)
                }
            }),
            r.a.createElement(r.a.Fragment, null, r.a.createElement("div", null, r.a.createElement("div", null, o), r.a.createElement("div", null, n("token_sales.countdown.days"))), r.a.createElement("div", null, r.a.createElement("div", null, i), r.a.createElement("div", null, n("token_sales.countdown.hours"))), r.a.createElement("div", null, r.a.createElement("div", null, s), r.a.createElement("div", null, n("token_sales.countdown.minutes"))), r.a.createElement("div", null, r.a.createElement("div", null, f), r.a.createElement("div", null, n("token_sales.countdown.seconds"))))
        };
        Zt.defaultProps = {
            date: ""
        };
        var $t = Zt
          , en = (w.a.func.isRequired,
        w.a.bool,
        w.a.bool,
        w.a.bool,
        w.a.func,
        w.a.func,
        w.a.shape(Lt.b),
        n(242))
          , tn = (w.a.bool,
        w.a.shape(Lt.c).isRequired,
        function(e) {
            var t = e.isAuthenticated
              , n = e.userTokenSale
              , c = Object(s.d)().t
              , o = n.passedKycAt;
            return r.a.createElement(a.Fragment, null, r.a.createElement("div", {
                className: "row authentiction_breadcrumb"
            }, r.a.createElement("div", {
                className: "col-xs-5 ".concat(t && "active")
            }, r.a.createElement("span", null, c("login.login"))), r.a.createElement("div", {
                className: "col-xs-2 center-xs ".concat(t && "active")
            }, r.a.createElement("span", null, c("auth.verification"))), r.a.createElement("div", {
                className: "col-xs-5 end-xs ".concat(t && o && "active")
            }, r.a.createElement("span", null, c("login.contribute")))))
        }
        );
        tn.defaultProps = {
            isAuthenticated: !1,
            userTokenSale: {
                passedKycAt: !1
            }
        };
        var nn = tn
          , an = Object(Ot.a)(Object(u.c)(function(e) {
            return {
                isAuthenticated: Object(b.a)(e),
                userTokenSale: Object(Tt.f)(e)
            }
        }, {})(nn))
          , rn = function(e) {
            var t = Object(s.d)().t
              , n = e.location
              , c = Object(mt.c)(n.pathname);
            return r.a.createElement(a.Fragment, null, r.a.createElement("p", null, t("auth.notAuthed")), r.a.createElement("a", {
                href: c
            }, r.a.createElement(k.b, null, t("login.login"))), r.a.createElement(an, null))
        };
        rn.defaultProps = {
            location: {
                pathame: ""
            }
        };
        var cn = Object(l.g)(rn)
          , on = n(112)
          , sn = function(e) {
            return e.data.balances
        }
          , ln = function(e) {
            return sn(e).wallets
        }
          , un = function(e) {
            return sn(e).totals
        }
          , dn = n(110)
          , fn = Object(dn.a)(function(e) {
            var t = e.hideModal
              , n = e.title
              , a = e.children;
            return r.a.createElement(g.a, {
                title: n,
                onClose: t,
                isOpen: !0,
                autoFocus: !0,
                canEscapeKeyClose: !0,
                canOutsideClickClose: !0,
                enforceFocus: !0,
                usePortal: !0,
                className: "token_dialog"
            }, a)
        }, "AUTH_VERIFY_MODAL")
          , bn = n(204)
          , pn = n(106)
          , mn = n(57)
          , hn = function(e) {
            var t = e.id
              , n = e.data
              , a = Object(s.d)().t;
            return r.a.createElement(mn.a, {
                html: a(t, n)
            })
        };
        hn.defaultProps = {
            data: {}
        };
        var En = hn
          , vn = function(e) {
            var t = e.t
              , n = e.passedBalanceCheck
              , c = e.minimumAllocationUsd
              , o = e.tokenSale
              , i = o.contributionCurrencies
              , s = o.minAllocation
              , l = o.name;
            return r.a.createElement("div", {
                className: "dialog_content row get_started_dialog"
            }, n ? r.a.createElement(a.Fragment, null, r.a.createElement("div", {
                className: "col-xs-6"
            }, r.a.createElement("h5", null, t("token_sales.verification.you_will_need")), r.a.createElement("ul", null, r.a.createElement("li", null, t("token_sales.verification.mobile_phone")), r.a.createElement("li", null, t("token_sales.verification.id_document")), r.a.createElement("li", null, t("token_sales.verification.proof_address"))), r.a.createElement("p", null, t("token_sales.verification.ten_minutes"))), r.a.createElement("div", {
                className: "col-xs-6"
            }, r.a.createElement("h5", null, t("token_sales.verification.process")), r.a.createElement("ol", null, r.a.createElement("li", null, t("token_sales.verification.get_verified")), r.a.createElement("li", null, t("token_sales.verification.top_up")), r.a.createElement("li", null, t("token_sales.verification.agreement_with", {
                name: l
            })), r.a.createElement("li", null, t("token_sales.verification.contribute"))))) : r.a.createElement("p", null, t("token_sales.verification.please_deposit", {
                minimumAllocationUsd: c,
                contributionCurrencies: i,
                minAllocation: s
            })))
        };
        vn.defaultProps = Lt.a;
        var _n = Object(s.e)("translations")(vn)
          , On = w.a.shape({
            available: w.a.number.isRequired,
            total: w.a.number.isRequired
        })
          , gn = w.a.shape({
            deposit: On.isRequired,
            exchange: On.isRequired,
            trading: On.isRequired
        })
          , Sn = (w.a.shape({
            BTC: gn.isRequired,
            ETH: gn.isRequired,
            IOT: gn.isRequired,
            JPY: gn.isRequired,
            USD: gn.isRequired
        }).isRequired,
        w.a.shape({
            totals: w.a.shape({
                AUM: w.a.number.isRequired,
                AUMNet: w.a.number.isRequired
            })
        }),
        function(e) {
            var t = e.agreeTokenSaleTos
              , n = e.t
              , c = e.tokenSaleId
              , o = e.name
              , i = e.dataSharingAgreement
              , s = e.balanceTotals
              , l = e.tokenSale
              , u = e.ticker
              , d = Object(a.useState)(!1)
              , f = Object(zt.a)(d, 2)
              , b = f[0]
              , p = f[1]
              , m = Object(a.useState)(!1)
              , h = Object(zt.a)(m, 2)
              , E = h[0]
              , v = h[1]
              , _ = Object(a.useState)(!1)
              , O = Object(zt.a)(_, 2)
              , g = O[0]
              , S = O[1]
              , T = s.AUM
              , j = l.minAllocation
              , y = l.contributionCurrencies
              , A = l.disableBalanceCheck
              , w = Object(pn.a)({
                amount: j,
                from: y,
                to: "USD",
                useMid: !0,
                ticker: u
            })
              , N = A || T >= w;
            return g ? r.a.createElement(a.Fragment, null, r.a.createElement("div", {
                className: "dialog_content tokensale_agreement"
            }, r.a.createElement(En, {
                data: {
                    name: o
                },
                id: "token_sales.contribution_process.tos_sale_html"
            }), i && r.a.createElement(En, {
                data: {
                    dataSharingAgreement: i
                },
                id: "token_sales.contribution_process.download_document"
            }), r.a.createElement("div", null, r.a.createElement(bn.a, {
                checked: b,
                label: n("token_sales.contribution_process.accept_agreement"),
                onChange: function() {
                    p(!b)
                }
            })), E && r.a.createElement("small", null, n("token_sales.contribution_process.error_must_agree")), r.a.createElement("div", {
                className: "dialog_footer"
            }, r.a.createElement(k.b, {
                onClick: function() {
                    b ? t(c) : v(!0)
                }
            }, n("auth.accept_continue"))))) : r.a.createElement(a.Fragment, null, r.a.createElement(_n, {
                passedBalanceCheck: N,
                minimumAllocationUsd: w,
                tokenSale: l
            }), r.a.createElement("div", {
                className: "dialog_footer"
            }, r.a.createElement(k.b, {
                disabled: !N,
                onClick: function() {
                    S(!0)
                }
            }, n("token_sales.verification.get_started"))))
        }
        );
        Sn.defaultProps = {
            dataSharingAgreement: "",
            balanceTotals: {}
        };
        var Tn = Object(s.e)("translations")(Sn)
          , kn = n(198)
          , jn = n(155)
          , yn = n(199)
          , An = function(e) {
            var t = e.fetchKycStatus
              , n = e.hideModal
              , c = e.userTokenSale
              , o = e.t
              , i = e.postStartKyc
              , s = e.tokenSaleId
              , l = e.blockpassServiceName
              , u = Object(a.useState)("")
              , d = Object(zt.a)(u, 2)
              , f = d[0]
              , b = d[1]
              , p = Object(a.useState)(!1)
              , m = Object(zt.a)(p, 2)
              , h = m[0]
              , E = m[1]
              , v = Object(a.useState)(!1)
              , _ = Object(zt.a)(v, 2)
              , O = _[0]
              , g = _[1]
              , S = Object(a.useState)("")
              , T = Object(zt.a)(S, 2)
              , j = T[0]
              , y = T[1]
              , A = c.startedKycAt
              , w = c.tsid
              , N = c.uuid
              , C = c.kycStatus
              , I = c.passedKyc
              , x = new yn.a({
                clientId: l,
                refreshRateMs: 2e3,
                env: Dt
            })
              , R = function(e) {
                "success" === e.status && i(s)
            }
              , U = function() {
                x.generateSSOData(),
                Object(jn.a)() && x.getApplink(N).then(function(e) {
                    y(e)
                })
            }
              , L = function(e) {
                var t = e.session;
                b(JSON.stringify({
                    clientId: l,
                    session: t,
                    refId: N
                }))
            }
              , P = function() {
                E(!0)
            };
            Object(a.useEffect)(function() {
                return t(w, N),
                x.generateSSOData(),
                Object(jn.a)() && x.getApplink(N).then(function(e) {
                    y(e)
                }),
                x.on("code-refresh", L),
                x.on("sso-complete", R),
                x.on("code-expired", U),
                x.on("sso-processing", P),
                function() {
                    x.destroy()
                }
            }, [w, N]);
            var D = r.a.createElement("div", {
                className: "dialog_content row dialog_blockpass"
            }, r.a.createElement("div", {
                className: "col-xs-12"
            }, r.a.createElement("span", null, o("token_sales.contribution_process.checking_approval"))), r.a.createElement("div", {
                className: "col-xs-12"
            }, r.a.createElement(en.a, {
                size: 25
            })))
              , M = r.a.createElement("div", {
                className: "row"
            }, r.a.createElement("div", {
                className: "col-sm-8 col-xs-12"
            }, h ? r.a.createElement("div", {
                className: "check-verification-status"
            }, r.a.createElement("p", null, o("token_sales.contribution_process.qr_scanned")), r.a.createElement("p", null, o("token_sales.contribution_process.after_registration")), r.a.createElement("div", null, r.a.createElement(k.b, {
                onClick: function() {
                    t(w, N),
                    g(!0)
                },
                text: o("token_sales.contribution_process.check_status")
            })), r.a.createElement("div", {
                className: "verification_status"
            }, O && r.a.createElement("small", null, o(Bt[C])))) : r.a.createElement("div", null, r.a.createElement("p", null, o(j ? "token_sales.contribution_process.complete_on_app" : "token_sales.contribution_process.scan_qr_code")), j && r.a.createElement("p", null, r.a.createElement("a", {
                href: j
            }, o("token_sales.contribution_process.mobile_blockpass_link"))), r.a.createElement("p", null, o("token_sales.contribution_process.find_out_blockpass"), " ", r.a.createElement("a", {
                href: "https://www.blockpass.org/",
                rel: "noopener noreferrer",
                target: "_blank"
            }, o("token_sales.contribution_process.click_here"))), r.a.createElement("p", null, r.a.createElement("a", {
                rel: "noopener noreferrer",
                target: "_blank",
                href: "https://itunes.apple.com/us/app/blockpass/id1322917010?mt=8"
            }, o("token_sales.contribution_process.download_blockpass_apple"))), r.a.createElement("p", null, r.a.createElement("a", {
                rel: "noopener noreferrer",
                target: "_blank",
                href: "https://play.google.com/store/apps/details?id=com.blockpass_mobile"
            }, o("token_sales.contribution_process.download_blockpass_android"))))), r.a.createElement("div", {
                className: "col-xs-12 col-sm-4 blockpass_qr_code"
            }, f && !j && r.a.createElement(kn.a, {
                cellSize: 3,
                text: f
            })))
              , W = r.a.createElement("div", {
                className: "col-xs-12"
            }, r.a.createElement("p", null, o("auth.in_progress")), r.a.createElement("div", {
                className: "dialog_footer"
            }, r.a.createElement("div", null, r.a.createElement(k.b, {
                onClick: n
            }, o("ok")))));
            return r.a.createElement(a.Fragment, null, "fetching" === C && D, "fetching" !== C && r.a.createElement("div", {
                className: "dialog_content row dialog_blockpass"
            }, !A && !I && "waiting" !== C && M, "waiting" === C && W))
        };
        An.defaultProps = {
            blockpassServiceName: ""
        };
        var wn = Object(s.e)("translations")(An)
          , Nn = function(e) {
            var t = e.agreeTokenSaleTos
              , n = e.fetchKycStatus
              , c = e.hideModal
              , o = e.postStartKyc
              , i = e.showModal
              , s = e.t
              , l = e.tokenSale
              , u = e.setKycStatus
              , d = e.userTokenSale
              , f = e.balanceTotals
              , b = e.ticker
              , p = s(t ? "auth.verify" : "auth.data_verification")
              , m = d.agreedTos
              , h = d.kycStatus
              , E = l._id
              , v = l.name
              , _ = l.blockpassServiceName
              , O = l.dataSharingAgreement;
            return r.a.createElement(a.Fragment, null, r.a.createElement("p", null, s("auth.authedNotVerified")), h && r.a.createElement(k.b, {
                onClick: i
            }, s("not found" === h ? "auth.verify" : "token_sales.contribution_process.check_status")), r.a.createElement(an, null), r.a.createElement(fn, {
                hideModal: c,
                title: p
            }, m ? r.a.createElement(wn, {
                fetchKycStatus: n,
                hideModal: c,
                postStartKyc: o,
                tokenSaleId: E,
                userTokenSale: d,
                blockpassServiceName: _,
                setKycStatus: u
            }) : r.a.createElement(Tn, {
                tokenSaleId: E,
                agreeTokenSaleTos: t,
                dataSharingAgreement: O,
                t: s,
                name: v,
                balanceTotals: f,
                tokenSale: l,
                ticker: b
            })))
        };
        Nn.defaultProps = {
            balanceTotals: {}
        };
        var Cn = Object(s.e)("translations")(Nn)
          , In = {
            showModal: function() {
                return Object(on.b)("AUTH_VERIFY_MODAL")
            },
            hideModal: on.a,
            agreeTokenSaleTos: function(e) {
                var t = "".concat(yt, "/agree-tos")
                  , n = {
                    tsid: e
                };
                return kt.a.send({
                    path: t,
                    body: n,
                    meta: {
                        section: wt,
                        subsection: "postAgreeTos"
                    }
                })
            },
            fetchKycStatus: It,
            postStartKyc: function(e) {
                var t = "".concat(yt, "/start-kyc")
                  , n = {
                    tsid: e
                };
                return kt.a.send({
                    path: t,
                    body: n,
                    meta: {
                        section: wt,
                        subsection: "startKyc"
                    }
                })
            },
            fetchUserTokenSale: Ct,
            setKycStatus: Nt,
            userOnboardSuccess: xt
        }
          , xn = Object(Ot.a)(Object(u.c)(function(e) {
            return {
                tokenSale: Object(Tt.c)(e),
                userTokenSale: Object(Tt.f)(e),
                balanceTotals: un(e),
                ticker: Object(St.a)(e)
            }
        }, In)(Cn))
          , Rn = Object(dn.a)(function(e) {
            var t = e.resetModal
              , n = e.title
              , a = e.children;
            return r.a.createElement(g.a, {
                title: n,
                onClose: t,
                isOpen: !0,
                autoFocus: !0,
                canEscapeKeyClose: !0,
                canOutsideClickClose: !0,
                enforceFocus: !0,
                usePortal: !0,
                className: "token_dialog contribute_dialog"
            }, a)
        }, "AUTH_CONTRIBUTE_MODAL")
          , Un = Object(s.e)("translations")(function(e) {
            var t = e.t
              , n = e.tokenSale
              , c = e.agreeSalesAgreement
              , o = n._id
              , i = n.agreementHtml
              , s = n.agreementTitle
              , l = n.agreementUrl;
            return r.a.createElement(a.Fragment, null, r.a.createElement("div", {
                className: "dialog_content"
            }, r.a.createElement("h5", null, s), r.a.createElement(mn.a, {
                html: i
            }), r.a.createElement("br", null), r.a.createElement(En, {
                data: {
                    agreementUrl: l
                },
                id: "token_sales.contribution_process.sales_agreement_url"
            })), r.a.createElement("div", {
                className: "dialog_footer"
            }, r.a.createElement(k.b, {
                onClick: function() {
                    c(o)
                }
            }, t("auth.accept_continue"))))
        })
          , Ln = n(352)
          , Pn = n.n(Ln)
          , Dn = n(70)
          , Mn = n.n(Dn)
          , Wn = n(353)
          , Fn = n.n(Wn)
          , Hn = n(631)
          , Bn = n(633)
          , Kn = n(354)
          , Gn = n.n(Kn)
          , qn = Object(s.e)("translations")(function(e) {
            var t = e.ccy
              , n = e.contribution
              , c = e.t
              , o = e.ticker
              , i = e.tokenSale
              , s = e.userTokenSale
              , l = e.contributionAllowance
              , u = s.contributionStatus
              , d = i.name
              , f = i.transferWaitMessage
              , b = s["contributed".concat(t)]
              , p = Object(pn.a)({
                amount: b,
                from: t,
                to: "USD",
                useMid: !0,
                ticker: o
            })
              , m = Object(pn.a)({
                amount: n,
                from: t,
                to: "USD",
                useMid: !0,
                ticker: o
            });
            return r.a.createElement("div", {
                className: "token_contribution_confirmation"
            }, function() {
                switch (u) {
                case "SUCCESS":
                    return r.a.createElement(a.Fragment, null, r.a.createElement(En, {
                        data: {
                            contribution: n,
                            ccy: t
                        },
                        id: "token_sales.contribution_process.contribution_successful"
                    }), r.a.createElement(En, {
                        data: {
                            contributedAmount: b,
                            contributedUsd: p,
                            ccy: t
                        },
                        id: "token_sales.contribution_process.contributed_so_far"
                    }));
                case "STORE_TOKENSALES_CONTRIBUTE_PENDING":
                    return r.a.createElement(a.Fragment, null, r.a.createElement("div", {
                        className: "contribute_waiting_message"
                    }, r.a.createElement(en.a, {
                        size: 25
                    }), " ", f));
                case "STORE_TOKENSALES_SOLD_OUT":
                    return r.a.createElement(a.Fragment, null, r.a.createElement("div", {
                        className: "contribute_waiting_message"
                    }, r.a.createElement("p", null, c("token_sales.contribution_process.sold_out"))));
                default:
                    return r.a.createElement(a.Fragment, null, r.a.createElement(En, {
                        data: {
                            contribution: n,
                            ccy: t,
                            name: d,
                            contributionUsd: m
                        },
                        id: "token_sales.contribution_process.is_contributing"
                    }), b > 0 && r.a.createElement(a.Fragment, null, r.a.createElement(En, {
                        data: {
                            contributionAllowance: (l - n).toFixed(2),
                            ccy: t
                        },
                        id: "token_sales.contribution_process.remaining_allowance"
                    }), r.a.createElement(En, {
                        data: {
                            contributedAmount: b,
                            contributedUsd: p,
                            ccy: t
                        },
                        id: "token_sales.contribution_process.contributed_so_far"
                    })), c("token_sales.contribution_process.clicking_confirm"))
                }
            }())
        })
          , Vn = function(e) {
            var t = e.walletBalances
              , n = e.t
              , c = e.contributeQueue
              , o = e.tokenSale
              , s = e.userTokenSale
              , l = e.ticker
              , u = e.toggleConfirmation
              , d = e.showConfirmation
              , f = e.setContributionStatus
              , b = e.hideModal
              , p = e.showCaptcha
              , m = void 0 === p || p
              , h = o._id
              , E = o.contributionCurrencies
              , v = o.minAllocation
              , _ = o.maxAllocation
              , O = s.contributionStatus
              , g = Object(a.useState)(E || "ETH")
              , S = Object(zt.a)(g, 2)
              , T = S[0]
              , j = S[1]
              , y = Object(a.useState)()
              , A = Object(zt.a)(y, 2)
              , w = A[0]
              , N = A[1]
              , C = Object(a.useState)(Mt)
              , I = Object(zt.a)(C, 2)
              , x = I[0]
              , R = I[1]
              , U = Object(a.useState)("")
              , L = Object(zt.a)(U, 2)
              , P = L[0]
              , D = L[1]
              , M = Object(a.useState)(m ? "" : "0x0000000000000000000000000000000000000000")
              , W = Object(zt.a)(M, 2)
              , F = W[0]
              , H = W[1]
              , B = Object(a.useState)([])
              , K = Object(zt.a)(B, 2)
              , G = K[0]
              , q = K[1]
              , V = E ? [E] : Wt
              , Y = function(e) {
                var t = G[e].exchange;
                return (void 0 === t ? {} : t).available
            }
              , X = Object(pn.a)({
                amount: w,
                from: T,
                to: "USD",
                useMid: !0,
                ticker: l
            })
              , Q = Number(s["contributed".concat(T)])
              , z = Mn()(G).filter(function(e) {
                return Y(e)
            })
              , J = _ - (Number(s["contributed".concat(T)]) || 0)
              , Z = !w || !z.length || P || !F
              , $ = function(e) {
                var t = Y(T)
                  , n = Number(e) + (Q || 0);
                D(e > t || e < v || n > _ || e.length > 10)
            }
              , ee = function(e, t) {
                if (e || t) {
                    var n = t || e.target.value || e.currentTarget.value;
                    $(n),
                    n.split("").filter(function(e) {
                        return "." === e
                    }).length > 1 ? N(0) : N(n)
                } else
                    N(0)
            };
            Object(a.useEffect)(function() {
                q(Pn()(t, V)),
                T && G[T] && R(Mt.filter(function(e) {
                    return Y(T) > e
                }))
            }, [T, t, G[T]]);
            var te = r.a.createElement(a.Fragment, null, r.a.createElement("div", {
                className: "col-xs-5 no-padding contribute_payment_using"
            }, z.length > 0 && r.a.createElement("p", null, n("token_sales.contribution_process.contribute_from"))), r.a.createElement("div", {
                className: "col-xs-12 col-sm-7 contribute_payment_title"
            }, r.a.createElement(En, {
                data: {
                    ccy: T
                },
                id: "token_sales.contribution_process.amount"
            })), r.a.createElement("div", {
                className: "col-xs-12 col-sm-5 contribute_balance"
            }, r.a.createElement(Hn.a, {
                inline: !1,
                name: "ccy",
                onChange: function(e) {
                    var t = e.target.value;
                    j(t),
                    N(0)
                },
                selectedValue: T
            }, G && z.map(function(e) {
                return r.a.createElement(bn.b, {
                    label: "".concat(e, " - ").concat(Object(Xt.h)(Y(e), 8)),
                    value: e,
                    key: e
                })
            })), !z.length && r.a.createElement("div", null, r.a.createElement("p", null, n("token_sales.contribution_process.must_have_balance"))), r.a.createElement(En, {
                data: {
                    minAllocation: v,
                    ccy: T
                },
                id: "token_sales.contribution_process.min_allocation"
            }), r.a.createElement(En, {
                data: {
                    maxAllocation: _,
                    ccy: T
                },
                id: "token_sales.contribution_process.max_allocation"
            }), Q > 0 && r.a.createElement(a.Fragment, null, r.a.createElement(En, {
                data: {
                    hasContributed: Q,
                    ccy: T
                },
                id: "token_sales.contribution_process.current_contribution"
            }), r.a.createElement(En, {
                data: {
                    contributionAllowance: Math.max(0, Object(Xt.h)(J, 8)),
                    ccy: T
                },
                id: "token_sales.contribution_process.contribution_allowance"
            }))), r.a.createElement("div", {
                className: "col-xs-12 col-sm-7 contribute_payment"
            }, r.a.createElement("div", {
                className: "row between-xs"
            }, x.map(function(e) {
                return r.a.createElement(k.b, {
                    key: e,
                    onClick: ee,
                    className: "col-xs-2 static_contribution_button",
                    value: e,
                    text: e,
                    disabled: !z.length || !J
                })
            })), G[T] && r.a.createElement("div", {
                className: "contribution_input_container",
                "data-usd-equiv": "~ ".concat(Object(Xt.b)(X), " USD")
            }, r.a.createElement(Bn.a, {
                value: w,
                onValueChange: ee,
                placeholder: n("token_sales.contribution_process.enter_amount"),
                max: Y(T),
                min: 0,
                className: P ? "error" : "",
                disabled: !z.length || !J,
                step: "0.1",
                type: "number"
            })), r.a.createElement(k.b, {
                className: "use_maximum_button",
                type: "button",
                onClick: function() {
                    var e = Y(T)
                      , t = Fn()([_, e, J]);
                    N(Object(Xt.h)(t, 8)),
                    $(t)
                },
                text: n("token_sales.contribution_process.use_maximum"),
                disabled: !z.length || !J
            }), m && r.a.createElement(Gn.a, {
                sitekey: i.f,
                onVerify: function(e) {
                    H(e)
                }
            })));
            return r.a.createElement(a.Fragment, null, r.a.createElement("div", {
                className: "dialog_content row"
            }, d ? r.a.createElement(qn, {
                ccy: T,
                contribution: w,
                toggleConfirmation: u,
                t: n,
                ticker: l,
                tokenSale: o,
                userTokenSale: s,
                setContributionStatus: f,
                contributionAllowance: J
            }) : te), r.a.createElement("div", {
                className: "dialog_footer"
            }, "SUCCESS" !== O && "STORE_TOKENSALES_SOLD_OUT" !== O ? r.a.createElement(k.b, {
                className: "contribution_button",
                id: "contribution_button",
                type: "button",
                onClick: d ? function() {
                    P || (f("STORE_TOKENSALES_CONTRIBUTE_PENDING"),
                    c(h, w, T, F))
                }
                : u,
                text: n(d ? "auth.contribute" : "proceed"),
                disabled: Z
            }) : r.a.createElement(k.b, {
                className: "contribution_again_button",
                type: "button",
                onClick: function() {
                    f("CONTRIBUTION_RESET"),
                    b()
                },
                text: n("preferences.close"),
                disabled: Z
            })))
        };
        Vn.defaultProps = {
            walletBalances: {},
            showConfirmation: !1
        };
        var Yn = Vn
          , Xn = function(e) {
            var t = e.setContributionStatus
              , n = e.hideModal
              , c = Object(a.useState)(!1)
              , o = Object(zt.a)(c, 2)
              , i = o[0]
              , s = o[1];
            return r.a.createElement(a.Fragment, null, r.a.createElement("div", {
                className: "dialog_content row"
            }, r.a.createElement(Yn, Object.assign({}, e, {
                toggleConfirmation: function() {
                    s(!i)
                },
                showConfirmation: i,
                setContributionStatus: t,
                hideModal: n
            }))))
        };
        Xn.defaultProps = {
            walletBalances: {}
        };
        var Qn = Xn
          , zn = function(e) {
            var t = e.agreeSalesAgreement
              , n = e.hideModal
              , c = e.showModal
              , o = e.t
              , i = e.tokenSale
              , s = e.userTokenSale
              , l = e.walletBalances
              , u = e.contributeQueue
              , d = e.setContributionStatus
              , f = e.ticker
              , b = s.agreedSalesAgreement
              , p = s.contributionStatus
              , m = "2019-06-27T08:00:00.000Z"
              , h = i.end
              , E = Object(qt.c)(m)
              , v = Object(qt.c)(h);
            return r.a.createElement(a.Fragment, null, r.a.createElement("p", null, o("auth.authedAndVerified")), !E && !v && r.a.createElement("div", null, r.a.createElement("p", {
                className: "text-muted"
            }, o("token_sales.contribution_process.unable_to_contribute"))), "STORE_TOKENSALES_SOLD_OUT" === p && r.a.createElement("p", null, o("token_sales.contribution_process.sold_out")), r.a.createElement(k.b, {
                disabled: !E && !v || "STORE_TOKENSALES_SOLD_OUT" === p,
                onClick: c
            }, o("auth.contribute")), r.a.createElement(an, null), r.a.createElement(Rn, {
                resetModal: function() {
                    d("CONTRIBUTION_RESET"),
                    n()
                },
                title: "Contribute"
            }, b ? r.a.createElement(Qn, {
                contributeQueue: u,
                tokenSale: i,
                walletBalances: l,
                userTokenSale: s,
                setContributionStatus: d,
                t: o,
                ticker: f,
                hideModal: n
            }) : r.a.createElement(Un, {
                tokenSale: i,
                agreeSalesAgreement: t,
                t: o
            })))
        };
        zn.defaultProps = {
            walletBalances: {}
        };
        var Jn = Object(s.e)("translations")(zn)
          , Zn = {
            showModal: function() {
                return Object(on.b)("AUTH_CONTRIBUTE_MODAL")
            },
            hideModal: on.a,
            agreeSalesAgreement: function(e) {
                var t = "".concat(yt, "/agree-sales-agreement")
                  , n = {
                    tsid: e
                };
                return kt.a.send({
                    path: t,
                    body: n,
                    meta: {
                        section: wt,
                        subsection: "postAgreeSalesAgreement"
                    }
                })
            },
            contributeQueue: function(e, t, n, a) {
                var r = "".concat(yt, "/contribute-queue")
                  , c = {
                    tsid: e,
                    amount: t,
                    currency: n,
                    captchaToken: a
                };
                return kt.a.send({
                    path: r,
                    body: c,
                    meta: {
                        section: wt,
                        subsection: "contributeQueue"
                    }
                })
            },
            fetchUserTokenSale: Ct,
            setContributionStatus: function(e) {
                return {
                    type: At.SET_CONTRIBUTION_STATUS,
                    payload: e
                }
            }
        }
          , $n = Object(Ot.a)(Object(u.c)(function(e) {
            return {
                tokenSale: Object(Tt.c)(e),
                userTokenSale: Object(Tt.f)(e),
                walletBalances: ln(e),
                ticker: Object(St.a)(e)
            }
        }, Zn)(Jn))
          , ea = function(e) {
            var t = e.isAuthenticated
              , n = e.userTokenSale
              , c = e.tokenSale
              , o = e.fetchKycStatus
              , i = e.fetchUserTokenSale
              , s = e.setKycStatus
              , l = e.hasEnded
              , u = n.passedKycAt
              , d = n.uuid
              , f = n.tsid
              , b = n.kycStatus
              , p = c._id
              , m = c.completed;
            Object(a.useEffect)(function() {
                t && (s("fetching"),
                i(p))
            }, [p, t]),
            Object(a.useEffect)(function() {
                d && f === p && t && o(f, d)
            }, [d]);
            return r.a.createElement(a.Fragment, null, r.a.createElement("div", {
                className: "authentication_content"
            }, "fetching" !== b ? l || m ? null : t ? u ? r.a.createElement($n, null) : r.a.createElement(xn, null) : r.a.createElement(cn, null) : !l && r.a.createElement(en.a, {
                size: 25
            })))
        };
        ea.defaultProps = {
            isAuthenticated: !1,
            userTokenSale: {
                passedKycAt: !1
            }
        };
        var ta = function(e) {
            var t = e.hasEnded
              , n = e.t;
            return r.a.createElement("div", null, !!t && r.a.createElement("p", null, n("token_sales.hasEnded")), r.a.createElement(ea, Object.assign({
                hasEnded: t
            }, e)))
        };
        ta.defaultProps = {
            isAuthenticated: !1,
            isVerified: !1,
            hasEnded: !1
        };
        var na = Object(s.e)("translations")(ta)
          , aa = {
            fetchUserTokenSale: Ct,
            fetchKycStatus: It,
            setKycStatus: Nt,
            userOnboardSuccess: xt
        }
          , ra = Object(Ot.a)(Object(u.c)(function(e) {
            return {
                isAuthenticated: Object(b.a)(e),
                userTokenSale: Object(Tt.f)(e),
                tokenSale: Object(Tt.c)(e),
                passedKycAt: Object(Tt.g)(e)
            }
        }, aa)(na))
          , ca = (w.a.shape(Lt.c),
        w.a.shape(Lt.b),
        function(e) {
            var t = e.t
              , n = e.name
              , a = e.tokenSale
              , c = a.start
              , o = a.end
              , i = a.completed
              , s = Object(qt.c)(c)
              , l = Object(qt.c)(o) || i
              , u = s ? o : c
              , d = t(s ? "token_sales.endsin" : "token_sales.startsin");
            return r.a.createElement("div", {
                className: "tokensale_status",
                "data-name": n
            }, r.a.createElement("div", {
                className: "tokensale_starttime"
            }, r.a.createElement("p", null, l ? t("token_sales.ended") : d), !l && r.a.createElement("div", {
                className: "tokensale_countdown_timer"
            }, r.a.createElement($t, {
                date: u,
                t: t
            }))), r.a.createElement(ra, {
                hasEnded: l
            }))
        }
        )
          , oa = (w.a.shape(Lt.b),
        w.a.shape(Lt.c),
        w.a.bool,
        {
            tokenSale: Lt.a
        })
          , ia = function(e) {
            var t = e.tokenSale
              , n = e.ticker
              , c = e.t
              , o = e.userTokenSale
              , i = e.isAuthenticated
              , s = t.logoUrl
              , l = t.name
              , u = t.description
              , d = t.end
              , f = t.completed
              , b = Object(qt.c)(d) || f
              , p = r.a.createElement(a.Fragment, null, r.a.createElement(Vt, {
                tokenSale: t,
                t: c,
                ticker: n
            }), r.a.createElement(Qt, {
                isAuthenticated: i,
                t: c,
                ticker: n,
                tokenSale: t,
                userTokenSale: o
            }))
              , m = b ? "" : l
              , h = r.a.createElement(ca, {
                t: c,
                tokenSale: t,
                name: m,
                ticker: n,
                userTokenSale: o
            });
            return r.a.createElement("section", {
                className: "container tokensale_header"
            }, r.a.createElement("div", {
                className: "row"
            }, r.a.createElement("div", {
                className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }, r.a.createElement("div", {
                className: "row tokensale_title_wrapper"
            }, r.a.createElement("div", {
                className: "tokensale_logo_container",
                "data-name": l
            }, r.a.createElement("img", {
                src: s,
                alt: "logo",
                className: "tokensale_logo"
            }))))), r.a.createElement("div", {
                className: "row"
            }, r.a.createElement("div", {
                className: "col-xs-12 col-sm-12 col-md-6 tokensale_price"
            }, r.a.createElement("h3", {
                className: "tokensale_title"
            }, l), r.a.createElement("p", {
                className: "tokensale_description"
            }, u), b ? h : p), r.a.createElement("div", {
                className: "col-xs-12 col-sm-12 col-md-6 tokensale_status"
            }, b ? p : h)))
        };
        ia.defaultProps = oa;
        var sa = Object(s.e)("translations")(ia)
          , la = n(635)
          , ua = n(248)
          , da = n(152)
          , fa = n.n(da)
          , ba = ["start", "end", "individualContributionAmount", "publicSaleHardCap", "percentageTokensAvailablePublicSale", "totalEthfinexPublicSaleAllocation", "publicSaleVestingLockup", "tokenTeamLockUpVesting"]
          , pa = Object(s.e)("translations")(function(e) {
            var t = e.tokenSale
              , n = Object(qt.b)(t, ba)
              , a = r.a.createElement("tbody", null, n.map(function(e) {
                return r.a.createElement("tr", {
                    key: e.title
                }, r.a.createElement("td", null, e.title), r.a.createElement("td", null, e.value))
            }));
            return r.a.createElement("table", {
                className: "token_sale_overview_table"
            }, a)
        })
          , ma = function(e) {
            var t = e.tokenSale
              , n = t.description
              , a = t.summary
              , c = void 0 === a ? "" : a
              , o = t.summaryHtml
              , i = Object(s.d)().t
              , l = fa()(c.split("\n"))
              , u = r.a.createElement("ul", null, l.map(function(e) {
                return r.a.createElement("li", {
                    key: e
                }, e)
            }));
            return r.a.createElement("section", null, r.a.createElement("h1", null, i("token_sales.tabs.overview_tab.project_overview")), r.a.createElement("h2", null, i("token_sales.tabs.overview_tab.introduction")), r.a.createElement("p", null, n), r.a.createElement("h2", null, i("token_sales.tabs.overview_tab.summary")), r.a.createElement("div", null, u), r.a.createElement(pa, {
                tokenSale: t
            }), r.a.createElement("div", null, r.a.createElement(mn.a, {
                html: o
            })))
        }
          , ha = function(e) {
            var t = e.researchUrl
              , n = Object(s.d)().t;
            return r.a.createElement("section", {
                className: "token_sale_research_report"
            }, r.a.createElement("h1", null, n("token_sales.tabs.research")), t ? r.a.createElement(a.Fragment, null, r.a.createElement("div", null, r.a.createElement("a", {
                href: t,
                target: "_blank",
                rel: "noopener noreferrer"
            }, n("token_sales.tabs.research_report_tab.download_report")), r.a.createElement("div", {
                className: "embedded_pdf"
            }, r.a.createElement(mn.a, {
                html: '<embed src="https://drive.google.com/viewerng/viewer?embedded=true&url='.concat(t, '" width="100%" height="375">')
            })))) : r.a.createElement("div", null, r.a.createElement("p", {
                className: "report_available_soon"
            }, n("token_sales.tabs.research_report_tab.report_available_soon"))))
        };
        ha.defaultProps = {
            researchUrl: ""
        };
        var Ea = ha
          , va = function(e) {
            var t = e.isAuthenticated
              , n = e.location
              , a = e.excludedCountries
              , c = Object(s.d)().t
              , o = Object(mt.c)(n.pathname);
            return r.a.createElement("section", {
                className: "tokensale_requirements"
            }, r.a.createElement("div", {
                className: "tokensale_requirements_inner"
            }, r.a.createElement("h4", null, c("token_sales.contribution_process.requirements")), r.a.createElement("p", null, c("token_sales.contribution_process.identity_verification")), !t && r.a.createElement("p", null, r.a.createElement("a", {
                href: o
            }, c("token_sales.contribution_process.identity_login_first"))), r.a.createElement("p", null, c("token_sales.contribution_process.identity_jurisdictoin")), r.a.createElement("p", null, a)))
        };
        va.defaultProps = {
            isAuthenticated: !1,
            location: {
                pathame: ""
            },
            excludedCountries: ""
        };
        var _a = Object(l.g)(va)
          , Oa = function(e) {
            var t = e.tokenSale.faqHtml
              , n = Object(s.d)().t;
            return r.a.createElement("section", {
                className: "token_sale_faq"
            }, r.a.createElement("h1", null, n("token_sales.tabs.faq")), r.a.createElement("div", null, r.a.createElement(mn.a, {
                html: t
            })))
        };
        Oa.defaultProps = {
            tokenSale: {
                faqHtml: ""
            }
        };
        var ga = Oa
          , Sa = (w.a.func.isRequired,
        w.a.bool,
        function(e) {
            var t = e.t
              , n = e.tokenSale
              , c = e.isAuthenticated
              , o = Object(a.useState)("overview")
              , i = Object(zt.a)(o, 2)
              , s = i[0]
              , l = i[1]
              , u = n.researchUrl
              , d = n.excludedCountries
              , f = void 0 === d ? t("token_sales.contribution_process.identity_forbidden_countries") : d;
            return r.a.createElement("section", {
                className: "tokensale_content"
            }, r.a.createElement("div", {
                className: "tokensale_content_inner container"
            }, r.a.createElement("div", {
                className: "row"
            }, r.a.createElement("div", {
                className: "col-xs-12"
            }, r.a.createElement(la.a, {
                selectedTabId: s,
                onChange: l
            }, r.a.createElement(ua.a, {
                id: "overview",
                title: t("token_sales.tabs.overview"),
                panel: r.a.createElement(ma, {
                    tokenSale: n
                })
            }), r.a.createElement(ua.a, {
                id: "research",
                title: t("token_sales.tabs.research"),
                panel: r.a.createElement(Ea, {
                    researchUrl: u
                })
            }), r.a.createElement(ua.a, {
                id: "faq",
                title: t("token_sales.tabs.faq"),
                panel: r.a.createElement(ga, {
                    tokenSale: n
                })
            }))))), r.a.createElement(_a, {
                isAuthenticated: c,
                excludedCountries: f
            }))
        }
        );
        Sa.defaultProps = {
            isAuthenticated: !1
        };
        var Ta = Object(s.e)("translations")(Sa)
          , ka = Object(Ot.a)(Object(u.c)(function(e) {
            return {
                isAuthenticated: Object(b.a)(e)
            }
        }, {})(Ta))
          , ja = function(e) {
            function t(e) {
                var n;
                Object(m.a)(this, t);
                var a = (n = Object(E.a)(this, Object(v.a)(t).call(this, e))).props
                  , r = a.fetchTokenSales
                  , c = a.tokenSelector
                  , o = a.setTokenSale;
                return Ut()(c) ? r() : o(c),
                n
            }
            return Object(_.a)(t, e),
            Object(h.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props.requestTicker;
                    e(Ft),
                    e(Ht)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props
                      , n = t.setTokenSale
                      , a = t.tokenSelector;
                    a && a._id !== e.tokenSale._id && n(a)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    (0,
                    this.props.setTokenSale)({})
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.tokenSale
                      , n = e.ticker
                      , c = e.userTokenSale
                      , o = e.isAuthenticated;
                    return r.a.createElement("section", {
                        className: "tokensale_container"
                    }, t._id && r.a.createElement(a.Fragment, null, r.a.createElement(sa, {
                        isAuthenticated: o,
                        userTokenSale: c,
                        tokenSale: t,
                        ticker: n
                    }), r.a.createElement(ka, {
                        tokenSale: t
                    })))
                }
            }]),
            t
        }(r.a.PureComponent);
        ja.defaultProps = {
            tokenSale: Lt.a
        };
        var ya = ja
          , Aa = {
            fetchTokenSales: function() {
                var e = "".concat(yt, "/token-sales");
                return kt.a.send({
                    path: e,
                    meta: {
                        section: wt,
                        subsection: "getTokenSalesLocalized",
                        noWaitUILoad: !0
                    }
                })
            },
            requestTicker: function(e) {
                return Object(gt.a)(e)
            },
            setTokenSale: function(e) {
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        type: At.SET_TOKEN_SALE,
                        payload: e
                    }
                }(e)
            }
        }
          , wa = Object(Ot.a)(Object(u.c)(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0;
            return {
                tokenSelector: Object(Tt.h)(e, t),
                tokenSale: Object(Tt.c)(e),
                userTokenSale: Object(Tt.f)(e),
                ticker: Object(St.a)(e),
                isAuthenticated: Object(b.a)(e)
            }
        }, Aa)(ya))
          , Na = n(105)
          , Ca = Object(Na.a)(Object(a.lazy)(function() {
            return n.e(13).then(n.bind(null, 846))
        }))
          , Ia = Object(Na.a)(Object(a.lazy)(function() {
            return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(14)]).then(n.bind(null, 855))
        }))
          , xa = Object(Na.a)(Object(a.lazy)(function() {
            return n.e(16).then(n.bind(null, 658))
        }))
          , Ra = Object(Na.a)(Object(a.lazy)(function() {
            return n.e(15).then(n.bind(null, 847))
        }))
          , Ua = Object(Na.a)(Object(a.lazy)(function() {
            return n.e(4).then(n.bind(null, 848))
        }))
          , La = Object(l.g)(function() {
            return r.a.createElement("div", null, r.a.createElement(l.d, null, r.a.createElement(l.b, {
                path: "/discussion/token-sale/*",
                component: Ra
            }), r.a.createElement(l.b, {
                exact: !0,
                path: "/discussions",
                component: Ia
            }), r.a.createElement(l.b, {
                path: "/discussions/notifications",
                component: xa
            }), r.a.createElement(l.b, {
                path: "/discussions/*",
                component: Ia
            }), r.a.createElement(l.b, {
                exact: !0,
                path: "/discussion",
                component: Ca
            }), r.a.createElement(l.b, {
                path: "/discussion/*",
                component: Ca
            }), r.a.createElement(l.b, {
                path: "*",
                component: Ua
            })))
        })
          , Pa = n(619)
          , Da = (w.a.func.isRequired,
        w.a.shape({
            pathame: w.a.string
        }),
        n(258))
          , Ma = function(e) {
            function t(e) {
                var n;
                return Object(m.a)(this, t),
                (n = Object(E.a)(this, Object(v.a)(t).call(this, e))).switchDark = n.switchTheme.bind(Object(O.a)(Object(O.a)(n)), "bp3-dark"),
                n.switchLight = n.switchTheme.bind(Object(O.a)(Object(O.a)(n)), "bp3-light"),
                n.handleTimezoneChange = n.handleTimezoneChange.bind(Object(O.a)(Object(O.a)(n))),
                n
            }
            return Object(_.a)(t, e),
            Object(h.a)(t, [{
                key: "switchTheme",
                value: function(e, t) {
                    t.preventDefault(),
                    this.props.setTheme(e)
                }
            }, {
                key: "handleTimezoneChange",
                value: function(e) {
                    this.props.setTimeZone(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.hideModal
                      , n = e.t
                      , a = e.location
                      , c = Object(mt.c)(a.pathname)
                      , o = Object(mt.b)(a.pathname);
                    return r.a.createElement(g.a, {
                        icon: "login",
                        onClose: t,
                        title: n("login.title"),
                        autoFocus: !0,
                        canEscapeKeyClose: !0,
                        canOutsideClickClose: !0,
                        enforceFocus: !0,
                        usePortal: !0,
                        isOpen: !0
                    }, r.a.createElement("div", {
                        className: S.a.DIALOG_BODY
                    }, r.a.createElement(Pa.a, null, r.a.createElement(mn.a, {
                        html: n("token_sales.login", {
                            bfxLoginUrl: o,
                            efxLoginUrl: c
                        })
                    }))))
                }
            }]),
            t
        }(a.PureComponent);
        Ma.defaultProps = {
            location: {
                pathame: ""
            }
        };
        var Wa = Object(s.e)("translations")(Object(dn.a)(Object(l.g)(Ma), Da.a))
          , Fa = (w.a.array,
        w.a.func,
        function(e) {
            var t = e.location
              , n = e.authStatus
              , a = t.pathname === pt.c
              , c = {
                main: !a,
                "on-landing": a,
                "user-authorized": n
            };
            return r.a.createElement("div", {
                className: M()(c)
            }, r.a.createElement(l.d, null, r.a.createElement(l.b, {
                path: "/token-sales/*",
                component: _t.a
            }), r.a.createElement(l.b, {
                path: "/token-sale/:id/:slug",
                component: wa
            }), r.a.createElement(l.b, {
                path: "/token-sales",
                component: _t.a
            }), r.a.createElement(l.b, {
                path: "/discussions/*",
                component: La
            }), r.a.createElement(l.b, {
                path: "/discussions",
                component: La
            }), r.a.createElement(l.b, {
                path: "/discussion/*",
                component: La
            }), r.a.createElement(l.b, {
                path: "/discussion",
                component: La
            }), r.a.createElement(l.a, {
                push: !0,
                to: "/token-sales"
            })), r.a.createElement(Wa, null))
        }
        );
        Fa.defaultProps = {
            toasts: [],
            shiftToast: function() {
                return null
            }
        };
        var Ha = Object(l.g)(Fa)
          , Ba = Object(l.g)(Object(u.c)(function(e) {
            return {
                toasts: e.toasts,
                authStatus: Object(b.a)(e)
            }
        })(Ha))
          , Ka = Object(s.e)("translations")(function(e) {
            var t = e.t;
            return r.a.createElement("div", {
                className: "copyright"
            }, r.a.createElement("p", null, t("footer.copyright")))
        })
          , Ga = n(355)
          , qa = n(356)
          , Va = n.n(qa);
        var Ya = function() {
            var e = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200
                  , t = Object(a.useState)(!1)
                  , n = Object(zt.a)(t, 2)
                  , r = n[0]
                  , c = n[1]
                  , o = function() {
                    var t = window
                      , n = t.scrollY
                      , a = t.innerHeight
                      , r = document.body.offsetHeight;
                    c(a + n >= r - e)
                };
                return Object(a.useEffect)(function() {
                    if (!window)
                        return null;
                    var e = Va()(o, 1e3);
                    return window.addEventListener("scroll", e),
                    function() {
                        window && window.removeEventListener("scroll", e)
                    }
                }, []),
                r
            }();
            return r.a.createElement("button", {
                className: M()("scroll_top", {
                    active: e
                }),
                onClick: function() {
                    Ga.animateScroll.scrollToTop()
                },
                type: "button"
            })
        }
          , Xa = function() {
            return r.a.createElement("div", {
                className: "page-loader"
            })
        }
          , Qa = function() {
            return r.a.createElement(s.a, {
                i18n: fe
            }, r.a.createElement(l.c, {
                history: Ee
            }, r.a.createElement(r.a.Fragment, null, r.a.createElement(Xa, null), r.a.createElement("div", {
                className: "container-fluid"
            }, r.a.createElement(vt, {
                helpUrl: i.g,
                links: [{
                    url: "/token-sales",
                    textId: "token_sales.menu"
                }, {
                    url: "/discussions",
                    textId: "social.menu"
                }]
            }), r.a.createElement(L, null), r.a.createElement(Ba, null)), r.a.createElement(oe, null), r.a.createElement(Ka, null), r.a.createElement(Ya, null))))
        }
          , za = n(162)
          , Ja = n(200)
          , Za = n(252)
          , $a = n(59)
          , er = n(89)
          , tr = n(122)
          , nr = n(622)
          , ar = n(24)
          , rr = n(78)
          , cr = n.n(rr)
          , or = n(56)
          , ir = n.n(or)
          , sr = n(357)
          , lr = n.n(sr)
          , ur = n(51)
          , dr = function() {
            return {
                orderform: {},
                collapsibles: {},
                tablesort: {}
            }
        };
        var fr = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dr()
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.type
              , a = t.payload
              , r = void 0 === a ? {} : a;
            switch (n) {
            case ur.c.UI_LOAD:
                if (ir()(r))
                    return e;
                var c = r.config
                  , o = void 0 === c ? {} : c
                  , i = o.user_settings || {};
                return Object(Ve.a)({}, e, cr()(o, "user_settings"), i);
            case ur.c.UI_SET:
                if (ir()(r))
                    return e;
                var s = r.value
                  , l = r.section
                  , u = void 0 === l ? "unknown-section" : l
                  , d = r.key
                  , f = void 0 === d ? "unknown-key" : d
                  , b = s;
                return "unknown-key" !== f && ((b = e[u] || {})[f] = s),
                Object(Ve.a)({}, e, Object(ar.a)({}, u, b));
            case ur.c.UI_TOGGLE:
                if (ir()(r))
                    return e;
                var p = r.section
                  , m = void 0 === p ? "unknown-section" : p
                  , h = r.key
                  , E = void 0 === h ? "unknown-key" : h
                  , v = Gt()(e, [m, E], ur.a);
                return Object(Ve.a)({}, e, Object(ar.a)({}, m, Object(Ve.a)({}, e[m], Object(ar.a)({}, E, !v))));
            case ur.c.UI_TOGGLE_SECTION:
                if (ir()(r))
                    return e;
                var _ = r.value
                  , O = r.section
                  , g = void 0 === O ? "unknown-section" : O
                  , S = r.key
                  , T = void 0 === S ? "unknown-key" : S
                  , k = Gt()(e, [g, T], ur.b);
                return Object(Ve.a)({}, e, Object(ar.a)({}, g, Object(Ve.a)({}, e[g], Object(ar.a)({}, T, lr()(_) ? _ : !k))));
            default:
                return e
            }
        }
          , br = n(27)
          , pr = n(124)
          , mr = n.n(pr)
          , hr = n(42)
          , Er = n.n(hr)
          , vr = n(46)
          , _r = ["bid", "bidSize", "ask", "askSize", "dailyChange", "dailyChangePerc", "lastPrice", "volume", "high", "low"]
          , Or = ["frr", "bid", "bidPeriod", "bidSize", "ask", "askPeriod", "askSize", "dailyChange", "dailyChangePerc", "lastPrice", "volume", "high", "low"];
        function gr() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = {}
              , a = t ? 1 : 0;
            return _r.forEach(function(t, r) {
                n[t] = e[r + a]
            }),
            n
        }
        function Sr() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = {}
              , a = t ? 1 : 0;
            return Or.forEach(function(t, r) {
                n[t] = e[r + a]
            }),
            n
        }
        function Tr(e) {
            return gr(e, !0)
        }
        function kr(e) {
            return Sr(e, !0)
        }
        function jr(e) {
            return function(e) {
                return Er()(e) && mr()(e) === mr()(_r)
            }(e) ? gr(e) : function(e) {
                return Er()(e) && mr()(e) === mr()(Or)
            }(e) ? Sr(e) : (vr.b.warn("ticker adapter has not found a suitable input format", JSON.stringify(e)),
            e)
        }
        function yr(e) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).symbol || "unknown(".concat(e, ")")
        }
        var Ar = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.type
              , a = t.payload
              , r = void 0 === a ? [] : a
              , c = t.channel;
            switch (n) {
            case "TICKER-SNAPSHOT_MESSAGE":
            case "TICKER-UPDATE_MESSAGE":
                if (Object(br.isNull)(r))
                    return e;
                var o = Object(zt.a)(r, 2)
                  , i = o[0]
                  , s = o[1]
                  , l = yr(i, c);
                return Object(Ve.a)({}, e, Object(ar.a)({}, l, jr(s)));
            case "FTICKER-SNAPSHOT_MESSAGE":
            case "FTICKER-UPDATE_MESSAGE":
                if (Object(br.isNull)(r))
                    return e;
                var u = Object(zt.a)(r, 2)
                  , d = u[0]
                  , f = u[1]
                  , b = yr(d, c);
                return Object(Ve.a)({}, e, Object(ar.a)({}, b, jr(f)));
            case "FOREIGN_EXCHANGE_RATE_MESSAGE":
                if (Object(br.isNull)(r))
                    return e;
                var p = r.rate
                  , m = r.from
                  , h = r.to
                  , E = "t".concat(m).concat(h)
                  , v = Object(zt.a)(p, 1)[0];
                return Object(Ve.a)({}, e, Object(ar.a)({}, E, {
                    lastPrice: v
                }));
            case "TICKER_REST_UPDATE":
                var _ = Object(Ve.a)({}, e);
                return r.forEach(function(e) {
                    var t = e[0]
                      , n = Object(Xt.d)(t) ? kr : Tr;
                    _[t] = n(e)
                }),
                _;
            default:
                return e
            }
        }
          , wr = n(83)
          , Nr = n.n(wr)
          , Cr = {
            BU_MESSAGE: "BU_MESSAGE",
            WU_MESSAGE: "WU_MESSAGE",
            WS_MESSAGE: "WS_MESSAGE",
            WALLETS: "wallets",
            AVAILABLE: "available",
            TOTAL: "total"
        }
          , Ir = {
            type: 0,
            currency: 1,
            balance: 2,
            interest: 3,
            available: 4
        }
          , xr = {
            exchange: "exchange",
            margin: "trading",
            funding: "deposit",
            creditline: "creditline"
        }
          , Rr = {
            USD: {
                exchange: {
                    total: 0
                },
                margin: {
                    total: 0
                },
                funding: {
                    total: 0
                }
            },
            BTC: {
                exchange: {
                    total: 0
                },
                margin: {
                    total: 0
                },
                funding: {
                    total: 0
                }
            }
        }
          , Ur = {
            USD: {
                exchange: {
                    total: 0
                },
                margin: {
                    total: 0
                },
                funding: {
                    total: 0
                }
            },
            EOS: {
                exchange: {
                    total: 0
                },
                margin: {
                    total: 0
                },
                funding: {
                    total: 0
                }
            }
        }
          , Lr = {
            USD: {
                exchange: {
                    total: 0
                },
                margin: {
                    total: 0
                },
                funding: {
                    total: 0
                }
            },
            ETH: {
                exchange: {
                    total: 0
                },
                margin: {
                    total: 0
                },
                funding: {
                    total: 0
                }
            }
        };
        function Pr() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = {}
              , a = e[Ir.currency]
              , r = e[Ir.type]
              , c = xr[r]
              , o = e[Ir.balance]
              , i = e[Ir.available];
            if (0 === o)
                i = 0;
            else if (null === i) {
                var s = Gt()(t, [Cr.WALLETS, a, c, Cr.AVAILABLE]);
                i = s || o
            }
            return Nr()(n, [a, c], {
                total: o,
                available: i
            }),
            n
        }
        var Dr = n(38);
        var Mr = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                wallets: {},
                totals: {
                    AUM: null,
                    AUMNet: null
                }
            }
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.type
              , a = t.payload
              , r = void 0 === a ? [] : a;
            switch (n) {
            case Cr.BU_MESSAGE:
                if (ir()(r))
                    return e;
                var c = Object(zt.a)(r, 3)[2]
                  , o = void 0 === c ? [] : c;
                return 0 === o.length ? e : Object(Ve.a)({}, e, {
                    totals: {
                        AUM: o[0],
                        AUMNet: o[1]
                    }
                });
            case Cr.WS_MESSAGE:
                if (ir()(r))
                    return e;
                var i = Object(zt.a)(r, 3)[2]
                  , s = null;
                return s = 0 === i.length ? "ethfinex" === Dr.e ? Lr : "eosfinex" === Dr.e ? Ur : Rr : function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = {};
                    return e.forEach(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                          , a = Object(zt.a)(e, 2)[1]
                          , r = void 0 === a ? "?" : a
                          , c = Pr(e, t);
                        n[r] && (c[r] = Object.assign({}, n[r], c[r])),
                        Object.assign(n, c)
                    }),
                    n
                }(i, e),
                Object(Ve.a)({}, e, {
                    wallets: Object(Ve.a)({}, s)
                });
            case Cr.WU_MESSAGE:
                if (ir()(r))
                    return e;
                var l = Object(zt.a)(r, 3)[2];
                if (Ut()(l))
                    return e;
                var u = Pr(l, e)
                  , d = l[Ir.currency];
                return e.wallets[d] && (u[d] = Object.assign({}, e.wallets[d], u[d])),
                Object(Ve.a)({}, e, {
                    wallets: Object(Ve.a)({}, e.wallets, u)
                });
            default:
                return e
            }
        }
          , Wr = function(e) {
            return e.substr(e.indexOf("_") + 1)
        };
        function Fr() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = Object(zt.a)(e, 2)
              , n = t[0]
              , a = t[1]
              , r = Wr(n);
            return Object(ar.a)({}, r, a)
        }
        var Hr = n(52)
          , Br = {
            initialSettingsReceived: !1,
            settings: {},
            callbacksOnInitialSettingsReceived: []
        };
        var Kr = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Br
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.type
              , a = t.payload
              , r = void 0 === a ? [] : a;
            switch (n) {
            case Hr.b.SETTINGS_MESSAGE:
                if (!Object(br.isArray)(r))
                    return e;
                var c = r[2].map(Fr).reduce(function(e, t) {
                    return Object(Ve.a)({}, e, t)
                }, {});
                return Object(Ve.a)({}, e, {
                    settings: Object(Ve.a)({}, e.settings, c)
                });
            case Hr.b.RECEIVE_INITIAL_SETTINGS:
                return Object(Ve.a)({}, e, {
                    initialSettingsReceived: !0
                });
            case Hr.b.SET_SETTINGS:
                return Object(Ve.a)({}, e, {
                    settings: Object(Ve.a)({}, e.settings, Object(ar.a)({}, t.key, t.value))
                });
            case Hr.b.DELETE_SETTINGS:
                return Object(Ve.a)({}, e, {
                    settings: cr()(e.settings, t.key)
                });
            case Hr.b.UPDATE_SETTINGS:
                var o = t.key
                  , i = t.value
                  , s = t.min
                  , l = void 0 === s ? Number.MIN_SAFE_INTEGER : s
                  , u = t.max
                  , d = void 0 === u ? Number.MAX_SAFE_INTEGER : u
                  , f = Object(br.get)(e, ["settings", o], 0) + i;
                return f > d || f < l ? e : Object(Ve.a)({}, e, {
                    settings: Object(Ve.a)({}, e.settings, Object(ar.a)({}, o, f))
                });
            case Hr.b.SCHEDULE_CALLBACK_ON_INITIAL_SETTINGS_RECEIVED:
                return Object(Ve.a)({}, e, {
                    callbacksOnInitialSettingsReceived: [].concat(Object($a.a)(e.callbacksOnInitialSettingsReceived), [t.callback])
                });
            default:
                return e
            }
        }
          , Gr = n(48)
          , qr = {
            authStatus: null,
            isShown: !0,
            loading: !1
        };
        var Vr = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qr
              , t = arguments.length > 1 ? arguments[1] : void 0
              , n = t.type
              , a = t.payload;
            switch (n) {
            case Gr.a.CHECK_AUTH:
                return Object(Ve.a)({}, e, {
                    loading: !0
                });
            case Gr.a.UPDATE_AUTH_STATUS:
                return Object(Ve.a)({}, e, {
                    authStatus: a,
                    loading: a
                });
            case Gr.a.SHOW_AUTH:
                return Object(Ve.a)({}, e, {
                    isShown: !0,
                    loading: !1
                });
            case Gr.a.HIDE_AUTH:
                return Object(Ve.a)({}, e, {
                    isShown: !1,
                    loading: !1
                });
            case Gr.a.LOGOUT:
                return qr;
            default:
                return e
            }
        };
        var Yr = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                isFetching: !1,
                lastError: {},
                authToken: {
                    token: ""
                },
                wsToken: {
                    token: ""
                }
            }
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.type
              , a = t.payload
              , r = void 0 === a ? [] : a
              , c = t.meta
              , o = void 0 === c ? {} : c
              , i = {};
            switch (n) {
            case "REST":
                return i.isFetching = !0,
                i.lastError = {},
                i.section = o.section,
                i.subsection = o.subsection,
                i[o.section] = {},
                i[o.section][o.subsection] = {
                    isFetching: !0,
                    lastError: {}
                },
                Object.assign({}, e, i);
            case "REST_THROTTLED":
            case "REST_SUCCESS":
                return i.isFetching = !1,
                i.lastError = {},
                i.section = o.section,
                i.subsection = o.subsection,
                i[o.section] = {},
                i[o.section][o.subsection] = {
                    isFetching: !1,
                    lastError: {}
                },
                Object.assign({}, e, i);
            case "REST_ERROR":
                if (Object(br.isNull)(r))
                    return e;
                var s = r
                  , l = {
                    error: s
                };
                return s.response && (l.data = s.response.data),
                i.isFetching = !1,
                i.lastError = l,
                i.section = o.section,
                i.subsection = o.subsection,
                i[o.section] = {},
                i[o.section][o.subsection] = {
                    isFetching: !1,
                    lastError: l
                },
                Object.assign({}, e, i);
            case "REST_WSTOKEN":
                return Object(br.isNull)(r) ? e : (i = {
                    wsToken: {
                        token: r,
                        timeStamp: new Date
                    }
                },
                Object.assign({}, e, i));
            case "REST_AUTHTOKEN":
                return Object(br.isNull)(r) ? e : (i = {
                    authToken: {
                        token: r,
                        timeStamp: new Date
                    }
                },
                Object.assign({}, e, i));
            case "REST_LAST_REQUEST_DATE":
                if (Object(br.isNull)(r))
                    return e;
                var u = t.path
                  , d = o.section
                  , f = o.subsection
                  , b = void 0 === f ? "" : f
                  , p = {};
                return p["".concat(d || u, "_").concat(b)] = r,
                i = {
                    lastRequestDate: p
                },
                Object.assign({}, e, i);
            default:
                return e
            }
        }
          , Xr = {
            email: "",
            apiKey: "",
            apiSecret: "",
            authToken: "",
            dateFormat: Ae.a.DATE_FORMATS[0],
            locale: "en",
            menuMode: Ae.a.MENU_MODE_NORMAL,
            queryLimit: 0,
            theme: Ae.a.DEFAULT_THEME,
            timezone: "",
            milliseconds: !1,
            platform: {}
        };
        var Qr = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xr
              , t = arguments.length > 1 ? arguments[1] : void 0
              , n = t.type
              , a = t.payload;
            switch (n) {
            case Ae.a.SET_API_KEY:
                return Object(Ve.a)({}, e, {
                    apiKey: a
                });
            case Ae.a.SET_API_SECRET:
                return Object(Ve.a)({}, e, {
                    apiSecret: a
                });
            case Ae.a.SET_AUTH_TOKEN:
                return Object(Ve.a)({}, e, {
                    authToken: a
                });
            case Ae.a.SET_WS_AUTH_TOKEN:
                return Object(Ve.a)({}, e, {
                    authWsToken: a
                });
            case Ae.a.SET_LANG:
                return Object(Ve.a)({}, e, {
                    locale: a
                });
            case Ae.a.SET_THEME:
                return Object(Ve.a)({}, e, {
                    theme: a
                });
            case Ae.a.SET_MENU_MODE:
                return Object(Ve.a)({}, e, {
                    menuMode: a
                });
            case Gr.a.LOGOUT:
                return Object(Ve.a)({}, e, {
                    authToken: "",
                    authWsToken: "",
                    email: ""
                });
            case Ae.a.SET_TIMEZONE:
                return Object(Ve.a)({}, e, {
                    timezone: a
                });
            case Ae.a.SET_DATE_FORMAT:
                return Object(Ve.a)({}, e, {
                    dateFormat: a
                });
            case Ae.a.SHOW_MILLISECONDS:
                return Object(Ve.a)({}, e, {
                    milliseconds: a
                });
            case Ae.a.SET_QUERY_LIMIT:
                return Object(Ve.a)({}, e, {
                    queryLimit: a
                });
            case Ae.a.SET_PLATFORM:
                return Object(Ve.a)({}, e, {
                    platform: a
                });
            case Ae.a.SET_OWNER_EMAIL:
                var r = a || "";
                return Object(Ve.a)({}, e, {
                    email: r
                });
            default:
                return e
            }
        }
          , zr = {
            isCustomDialogOpen: !1
        };
        var Jr = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zr
              , t = arguments.length > 1 ? arguments[1] : void 0
              , n = t.type
              , a = t.payload
              , r = void 0 === a ? {} : a;
            switch (n) {
            case ve.SHOW_CUSTOM_DIALOG:
                return Object(Ve.a)({}, e, {
                    isCustomDialogOpen: r
                });
            default:
                return e
            }
        }
          , Zr = {
            NONE: "none",
            PRIMARY: "primary",
            SUCCESS: "success",
            WARNING: "warning",
            DANGER: "danger"
        }
          , $r = n(55)
          , ec = {
            intent: "",
            msg: {}
        };
        var tc = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec
              , t = arguments.length > 1 ? arguments[1] : void 0
              , n = t.type
              , a = t.payload;
            switch (n) {
            case $r.a.UPDATE_STATUS:
                return Object(Ve.a)({}, e, {
                    intent: Zr.PRIMARY,
                    msg: a
                });
            case $r.a.UPDATE_SUCCESS_STATUS:
                return Object(Ve.a)({}, e, {
                    intent: Zr.SUCCESS,
                    msg: a
                });
            case $r.a.UPDATE_ERROR_STATUS:
                return Object(Ve.a)({}, e, {
                    intent: Zr.DANGER,
                    msg: a
                });
            case $r.a.CLEAR_STATUS:
                return ec;
            default:
                return e
            }
        }
          , nc = n(125)
          , ac = {
            data: {},
            extraProps: {}
        }
          , rc = n(11)
          , cc = function() {
            return {
                status: rc.a.WS_STATUS_OFFLINE,
                conf: {},
                auth: {},
                broadcasts: [],
                lastActivity: null,
                timeDifference: null,
                data: {},
                channels: {},
                subs: {},
                subsLoading: {}
            }
        }
          , oc = function(e) {
            var t = e.isPublic;
            return function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cc()
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , a = n.type
                  , r = n.payload
                  , c = void 0 === r ? {} : r
                  , o = n.meta
                  , i = void 0 === o ? {} : o
                  , s = Date.now();
                if (i.isPublic !== t)
                    return e;
                switch (a) {
                case rc.a.WS_REQUEST_CONNECT:
                    return Object(Ve.a)({}, e, {
                        data: {},
                        status: rc.a.WS_STATUS_CONNECTING
                    });
                case rc.a.WS_EVENT_CONNECT:
                    return Object(Ve.a)({}, e, {
                        status: rc.a.WS_STATUS_ONLINE,
                        lastActivity: s,
                        channels: {}
                    });
                case rc.a.WS_REQUEST_DISCONNECT:
                    return Object(Ve.a)({}, e, {
                        status: rc.a.WS_STATUS_DISCONNECTING
                    });
                case rc.a.WS_EVENT_DISCONNECT:
                    return Object(Ve.a)({}, e, {
                        status: rc.a.WS_STATUS_OFFLINE,
                        lastActivity: null
                    });
                case rc.a.WS_EVENT_INFO:
                case rc.a.WS_EVENT_ERROR:
                    return Object(Ve.a)({}, e, {
                        status: rc.a.WS_STATUS_ONLINE,
                        lastActivity: s
                    });
                case rc.a.WS_EVENT_HB:
                    if (ir()(c))
                        return e;
                    var l = c.chanId
                      , u = void 0 === l ? "?" : l
                      , d = e.channels || {};
                    return Object(Ve.a)({}, e, {
                        lastActivity: s,
                        channels: Object(Ve.a)({}, d, Object(ar.a)({}, u, Object.assign({
                            lastActivity: s
                        }, d[u])))
                    });
                case rc.a.WS_REQUEST_SUBSCRIBE:
                    var f = c.channel
                      , b = c.hash;
                    return ir()(c) || ir()(f) ? e : Object(Ve.a)({}, e, {
                        subsLoading: Object(Ve.a)({}, e.subsLoading, Object(ar.a)({}, f, {
                            isLoading: !0,
                            hash: b
                        }))
                    });
                case rc.a.WS_EVENT_SUBSCRIBE:
                    var p = c.channel
                      , m = c.chanId
                      , h = void 0 === m ? null : m;
                    if (ir()(c) || ir()(h))
                        return e;
                    var E = 0 === h ? "auth" : p;
                    return Object(Ve.a)({}, e, {
                        channels: Object(Ve.a)({}, e.channels, Object(ar.a)({}, h, c)),
                        subs: Object(Ve.a)({}, e.subs, Object(ar.a)({}, E, h)),
                        subsLoading: Object(Ve.a)({}, e.subsLoading, Object(ar.a)({}, p, {
                            isLoading: !1
                        })),
                        lastActivity: s
                    });
                case rc.a.WS_EVENT_UNSUBSCRIBE:
                    if (ir()(c))
                        return e;
                    var v = c.chanId;
                    if ("OK" !== c.status)
                        return e;
                    var _ = Gt()(e, "channels[".concat(v, "].channel"))
                      , O = 0 === v ? "auth" : _;
                    return Object(Ve.a)({}, e, {
                        lastActivity: s,
                        subs: cr()(e.subs, [O]),
                        channels: cr()(e.channels, [v]),
                        subsLoading: cr()(e.subsLoading, [_])
                    });
                case rc.a.WS_EVENT_AUTH:
                    return Object(Ve.a)({}, cc(), e, {
                        auth: c,
                        status: rc.a.WS_STATUS_ONLINE,
                        lastActivity: s,
                        channels: Object(Ve.a)({}, e.channels, {
                            0: c
                        })
                    });
                case rc.a.WS_EVENT_BROADCAST:
                    return Object(Ve.a)({}, e, {
                        broadcasts: [].concat(Object($a.a)(e.broadcasts), [c]),
                        lastActivity: s
                    });
                case rc.a.WS_EVENT_CONF:
                    var g = cr()(c, ["status", "event"]);
                    return Object(Ve.a)({}, e, {
                        conf: Object(Ve.a)({}, g, e.conf)
                    });
                case rc.a.WS_SET_TIME_DIFF:
                    return Object(Ve.a)({}, e, {
                        timeDifference: c
                    });
                case rc.a.WS_RESET:
                    return {};
                default:
                    return e
                }
            }
        }
          , ic = n(197)
          , sc = n.n(ic)
          , lc = n(358)
          , uc = n.n(lc)
          , dc = n(201)
          , fc = n.n(dc)
          , bc = function() {
            return function(e) {
                var t = document.cookie.match("(^|;)\\s*".concat(e, "\\s*=\\s*([^;]+)"));
                return t ? t.pop() : ""
            }("locale") || "en"
        }
          , pc = n(196)
          , mc = "tokenSales";
        var hc = function(e) {
            var t = bc();
            if ("en" === t)
                return e;
            var n = e.slice(0);
            return n.forEach(function(e, a) {
                var r = Gt()(e, ["locales", t], {});
                Object.keys(r).forEach(function(e) {
                    var t = Gt()(r, [e, "value"], null);
                    t && Nr()(n[a], [e], t)
                })
            }),
            n
        }
          , Ec = function(e) {
            return fc()(uc()(fa()(sc()(e, "categoryTag"))))
        };
        var vc = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                tokenSales: [],
                tokenSale: {},
                categories: [],
                userTokenSale: {},
                userTokenSales: [],
                actionResult: {},
                balances: {},
                ui: {}
            }
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.type
              , a = t.payload
              , r = void 0 === a ? [] : a
              , c = t.meta
              , o = void 0 === c ? {} : c;
            if ("REST_SUCCESS" === n && o.section === mc)
                switch (o.subsection) {
                case "getTokenSales":
                    var i = r.result || r.data;
                    return Ut()(i) ? e : Object(Ve.a)({}, e, {
                        tokenSales: i
                    });
                case "getTokenSalesLocalized":
                    var s = r.result || r.data;
                    if (Ut()(s))
                        return e;
                    var l = s;
                    return Object(Ve.a)({}, e, {
                        tokenSales: hc(l),
                        categories: Ec(l)
                    });
                case "postAgreeSalesAgreement":
                case "postAgreeTos":
                case "postContributeETH":
                case "postEnterTokenSale":
                case "getUserTokenSale":
                    var u = r.result
                      , d = r.data;
                    return Object(Ve.a)({}, e, {
                        userTokenSale: u || d
                    });
                case "getUserTokenSales":
                    var f = r.result
                      , b = r.data;
                    return Object(Ve.a)({}, e, {
                        userTokenSales: f || b
                    });
                case "requestKycStatus":
                    var p = r.result || r.data
                      , m = Gt()(e, ["userTokenSale"], {});
                    if (p.userTokenSale) {
                        var h = Gt()(p, "userTokenSale", {})
                          , E = h.passedKyc
                          , v = h.passedKycAt
                          , _ = h.startedKycAt;
                        m = Object(Ve.a)({}, m, {
                            passedKyc: E,
                            passedKycAt: v,
                            startedKycAt: _
                        })
                    } else {
                        var O = p.status;
                        m = Object(Ve.a)({}, m, {
                            kycStatus: O
                        })
                    }
                    return Object(Ve.a)({}, e, {
                        userTokenSale: m
                    });
                case "getBalance":
                    var g = r.data;
                    return Object(Ve.a)({}, e, {
                        balances: Object(Ve.a)({}, e.balances, g)
                    });
                case "postDrawWinners":
                    var S = Object(Ve.a)({}, r);
                    return S.success && (S.message = "There where ".concat(r.data.length, " winners!")),
                    Object(Ve.a)({}, e, {
                        actionResult: S
                    });
                case "postStartNextRound":
                    var T = Object(Ve.a)({}, r);
                    return T.success && (T.message = "".concat(T.updated, " users were reset to stage 2")),
                    Object(Ve.a)({}, e, {
                        actionResult: T
                    });
                case "updateTokenSale":
                    var k = Gt()(r, ["data", "tokenSale"], null)
                      , j = e.tokenSales;
                    if (k) {
                        var y = j.findIndex(function(e) {
                            return e._id === k._id
                        })
                          , A = j.slice();
                        return A[y] = k,
                        Object(Ve.a)({}, e, {
                            tokenSales: A
                        })
                    }
                    return e;
                case "updateUserTokenSaleUuid":
                    var w = r.data
                      , N = void 0 === w ? [] : w
                      , C = e.userTokenSales
                      , I = C.slice();
                    return N ? (N.forEach(function(e) {
                        var t = C.findIndex(function(t) {
                            return t._id === e._id
                        });
                        I[t] = e
                    }),
                    Object(Ve.a)({}, e, {
                        userTokenSales: I
                    })) : e;
                case "insertTokenSale":
                    var x = Gt()(r, ["data", "tokenSale"], null);
                    if (x) {
                        var R = Gt()(e, ["tokenSales"], []).slice();
                        return R.unshift(x),
                        Object(Ve.a)({}, e, {
                            tokenSales: R
                        })
                    }
                    return e;
                case "subscribeEmailList":
                    var U = r.data;
                    return Object(Ve.a)({}, e, {
                        ui: {
                            subscribed: U.success
                        }
                    });
                default:
                    return e
                }
            else
                switch (n) {
                case At.N_MESSAGE:
                    var L = Object(zt.a)(r, 3)[2]
                      , P = Object(pc.b)(L)
                      , D = P.contributionStatus
                      , M = P.notification
                      , W = M.contributedBTC
                      , F = M.contributedETH
                      , H = M.utsid
                      , B = Gt()(e, ["userTokenSale"], {});
                    return H !== B._id ? e : (B = Object(Ve.a)({}, B, {
                        contributionStatus: D,
                        contributedETH: F,
                        contributedBTC: W
                    }),
                    Object(Ve.a)({}, e, {
                        userTokenSale: B
                    }));
                case At.SET_CONTRIBUTION_STATUS:
                    return ir()(r) ? e : Object(Ve.a)({}, e, {
                        userTokenSale: Object(Ve.a)({}, e.userTokenSale, {
                            contributionStatus: r
                        })
                    });
                case At.UPDATE_TOKENSALE:
                    if (ir()(r))
                        return e;
                    var K = r
                      , G = e.tokenSales.slice();
                    return G.forEach(function(e, t) {
                        e._id === K._id && (G[t] = K)
                    }),
                    Object(Ve.a)({}, e, {
                        tokenSales: G
                    });
                case At.SET_TOKEN_SALE:
                    return Object(Ve.a)({}, e, {
                        tokenSale: r
                    });
                case At.SET_KYC_STATUS:
                    var q = Gt()(e, ["userTokenSale"], {});
                    return q = Object(Ve.a)({}, q, {
                        kycStatus: r
                    }),
                    Object(Ve.a)({}, e, {
                        userTokenSale: q
                    });
                default:
                    return e
                }
        }
          , _c = {};
        var Oc = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _c
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.payload;
            switch (t.type) {
            case we:
                return Object(Ve.a)({}, e, {
                    lang: n
                });
            default:
                return e
            }
        };
        function gc(e, t, n) {
            var a = []
              , r = [];
            t ? (e.posts.forEach(function(e) {
                t.indexOf(e.user.uid) > -1 ? a.push(Object(Ve.a)({}, e, {
                    user: Object(Ve.a)({}, e.user, {
                        banned: n
                    })
                })) : a.push(e)
            }),
            r = (e.notifications.notifications || []).map(function(e) {
                var a = Object(Ve.a)({}, e);
                return a.user && t.indexOf(a.user.uid) > -1 && (a.user.banned = n),
                a.post && t.indexOf(a.post.user.uid) > -1 ? Object(Ve.a)({}, a, {
                    post: Object(Ve.a)({}, a.post, {
                        user: Object(Ve.a)({}, a.post.user, {
                            banned: n
                        })
                    })
                }) : a
            })) : (a = Object($a.a)(e.posts),
            r = e.notifications ? e.notifications.notifications : []);
            return Object(Ve.a)({}, e, {
                posts: a,
                notifications: Object(Ve.a)({}, e.notifications, {
                    notifications: r
                })
            })
        }
        function Sc(e, t, n, a) {
            var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
              , c = function(e, t) {
                return e.forEach(function(e) {
                    var n = r ? Object(Ve.a)({}, e, {
                        updatedPost: a
                    }) : a;
                    e.pid === a.pid && (n.user = e.user),
                    t.push(e.pid === a.pid ? n : e)
                })
            };
            c(e.posts, t),
            c(e.altPosts, n)
        }
        var Tc = function(e) {
            return !e.deleted || "[[topic:post_is_deleted]]" !== e.content
        }
          , kc = function(e) {
            return !e.deleted || "[[topic:topic_is_deleted]]" !== e.title
        };
        var jc = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                category: {},
                topics: [],
                topic: {},
                posts: [],
                altTopic: {},
                altPosts: [],
                notifications: {}
            }
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.type
              , a = t.payload
              , r = void 0 === a ? [] : a
              , c = t.meta
              , o = void 0 === c ? {} : c;
            if ("REST_SUCCESS" === n && "social" === o.section)
                switch (o.subsection) {
                case "getCategory":
                    var i = JSON.parse(r.data)
                      , s = e.topics
                      , l = {}
                      , u = i.topics.filter(kc);
                    return i.categories && (i.categories.forEach(function(e) {
                        l[e.cid] = e
                    }),
                    u.forEach(function(e) {
                        l[e.cid] && (e.category = l[e.cid],
                        e.category.parent = l[e.category.parentCid])
                    })),
                    s = 1 === i.pagination.currentPage ? Object($a.a)(u) : [].concat(Object($a.a)(s), Object($a.a)(u)),
                    Object(Ve.a)({}, e, {
                        topics: s,
                        category: i,
                        categories: l
                    });
                case "getTopic":
                    var d = JSON.parse(r.data)
                      , f = d.posts.filter(Tc)
                      , b = 1 === d.pagination.currentPage ? f : [].concat(Object($a.a)(e.posts), Object($a.a)(f));
                    return Object(Ve.a)({}, e, {
                        posts: b,
                        topic: d
                    });
                case "getAltTopic":
                    var p = JSON.parse(r.data)
                      , m = p.posts.filter(Tc)
                      , h = 1 === p.pagination.currentPage ? m : [].concat(Object($a.a)(e.altPosts), Object($a.a)(m));
                    return Object(Ve.a)({}, e, {
                        altPosts: h,
                        altTopic: p
                    });
                case "getPost":
                    return Object(Ve.a)({}, e, {
                        post: JSON.parse(r.data)
                    });
                case "getGeneralTopic":
                    return Object(Ve.a)({}, e, {
                        generalTopic: JSON.parse(r.data)
                    });
                case "postTopic":
                    var E = Gt()(r, "data.payload.topicData", {});
                    return Object(Ve.a)({}, e, {
                        topics: [E].concat(Object($a.a)(e.topics))
                    });
                case "postReply":
                    var v = Gt()(r, "data.payload", {});
                    return Object(Ve.a)({}, e, {
                        posts: e.posts.concat(v)
                    });
                case "postAltReply":
                    var _ = Gt()(r, "data.payload", {});
                    return Object(Ve.a)({}, e, {
                        altPosts: e.altPosts.concat(_)
                    });
                case "updateReply":
                    var O = Gt()(r, "data.payload.post", {})
                      , g = Gt()(r, "data.payload.editor", {})
                      , S = []
                      , T = []
                      , k = []
                      , j = O
                      , y = Object(Ve.a)({}, e.notifications, {
                        user: g
                    });
                    return Sc(e, S, T, j),
                    y.notifications && y.notifications.forEach(function(e) {
                        var t = e.post && e.post.pid === j.pid ? Object(Ve.a)({}, e, {
                            post: j
                        }) : e;
                        k.push(t)
                    }),
                    y.notifications = k,
                    Object(Ve.a)({}, e, {
                        posts: S,
                        altPosts: T,
                        notifications: y
                    });
                case "updateTopic":
                    var A = []
                      , w = []
                      , N = Gt()(r, "data.payload", {})
                      , C = N.post
                      , I = N.topic
                      , x = N.editor;
                    return C.user = x,
                    Nr()(r, "data.payload.topic.mainPost", C),
                    Nr()(r, "data.payload.topic.mainPid", C.pid),
                    Nr()(r, "data.payload.topic.titleRaw", I.title),
                    Sc(e, A, w, C),
                    Object(Ve.a)({}, e, {
                        posts: A,
                        altPosts: w,
                        topic: I
                    });
                case "deletePost":
                    var R = e.altPosts
                      , U = void 0 === R ? [] : R
                      , L = Gt()(r, "data.pid", null)
                      , P = e.posts.map(function(e) {
                        return e.pid === L ? Object(Ve.a)({}, e, {
                            deleted: !0
                        }) : e
                    })
                      , D = U.map(function(e) {
                        return e.pid === L ? Object(Ve.a)({}, e, {
                            deleted: !0
                        }) : e
                    })
                      , M = (e.notifications.notifications || []).map(function(e) {
                        return e.post && e.post.pid === L ? Object(Ve.a)({}, e, {
                            post: Object(Ve.a)({}, e.post, {
                                deleted: !0
                            })
                        }) : e
                    });
                    return Object(Ve.a)({}, e, {
                        posts: P,
                        altPosts: D,
                        notifications: Object(Ve.a)({}, e.notifications, {
                            notifications: M
                        })
                    });
                case "restorePost":
                    var W = e.altPosts
                      , F = void 0 === W ? [] : W
                      , H = Gt()(r, "data.pid", null)
                      , B = e.posts.map(function(e) {
                        return e.pid === H ? Object(Ve.a)({}, e, {
                            deleted: !1
                        }) : e
                    })
                      , K = F.map(function(e) {
                        return e.pid === H ? Object(Ve.a)({}, e, {
                            deleted: !1
                        }) : e
                    })
                      , G = (e.notifications.notifications || []).map(function(e) {
                        return e.post && e.post.pid === H ? Object(Ve.a)({}, e, {
                            post: Object(Ve.a)({}, e.post, {
                                deleted: !1
                            })
                        }) : e
                    });
                    return Object(Ve.a)({}, e, {
                        posts: B,
                        altPosts: K,
                        notifications: Object(Ve.a)({}, e.notifications, {
                            notifications: G
                        })
                    });
                case "deleteTopic":
                    return Object(Ve.a)({}, e, {
                        topic: Object(Ve.a)({}, e.topic, {
                            deleted: !0
                        })
                    });
                case "restoreTopic":
                    return Object(Ve.a)({}, e, {
                        topic: Object(Ve.a)({}, e.topic, {
                            deleted: !1
                        })
                    });
                case "getUser":
                    var q = r.data
                      , V = q.groups;
                    return q.moderator = !1,
                    q.admin = !1,
                    V && V.forEach(function(e) {
                        "Global Moderators" === e.name ? q.moderator = !0 : "administrators" === e.name && (q.admin = !0,
                        q.moderator = !0)
                    }),
                    Object(Ve.a)({}, e, {
                        user: q
                    });
                case "postUser":
                case "putUser":
                    return Object(Ve.a)({}, e, {
                        user: r.data
                    });
                case "banUsers":
                    return gc(e, r.data.uids, !0);
                case "unBanUsers":
                    return gc(e, r.data.uids, !1);
                case "postVote":
                    var Y = []
                      , X = []
                      , Q = Gt()(r, "data.payload.post", {});
                    return Q.pid = parseInt(Q.pid, 10),
                    Sc(e, Y, X, Q, !0),
                    Object(Ve.a)({}, e, {
                        posts: Y,
                        altPosts: X
                    });
                case "getNotifications":
                    return Object(Ve.a)({}, e, {
                        notifications: JSON.parse(r.data)
                    });
                case "markNotificationRead":
                    var z = r.data.result
                      , J = e.notifications.notifications || []
                      , Z = Object(Ve.a)({}, e.user, {
                        notificationCount: e.user.notificationCount - 1
                    })
                      , $ = J.map(function(e) {
                        return e.nid === z.nid ? Object(Ve.a)({}, e, {
                            read: !0
                        }) : e
                    });
                    return Object(Ve.a)({}, e, {
                        notifications: Object(Ve.a)({}, e.notifications, {
                            notifications: $
                        }),
                        user: Z
                    });
                case "markNotificationUnread":
                    var ee = r.data.result
                      , te = e.notifications.notifications || []
                      , ne = Object(Ve.a)({}, e.user, {
                        notificationCount: e.user.notificationCount + 1
                    })
                      , ae = te.map(function(e) {
                        return e.nid === ee.nid ? Object(Ve.a)({}, e, {
                            read: !1
                        }) : e
                    });
                    return Object(Ve.a)({}, e, {
                        user: ne,
                        notifications: Object(Ve.a)({}, e.notifications, {
                            notifications: ae
                        })
                    });
                case "getNotificationCount":
                    var re = r.data;
                    return Object(Ve.a)({}, e, {
                        user: Object(Ve.a)({}, e.user, {
                            notificationCount: re.count
                        })
                    });
                default:
                    return e
                }
            return e
        }
          , yc = Object(er.c)({
            router: Object(za.b)(Ee),
            auth: Vr,
            settings: Kr,
            base: Qr,
            UI: fr,
            ui: Jr,
            status: tc,
            tokenSales: vc,
            tokinex: Oc,
            social: jc,
            modals: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ac
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = t.type
                  , a = t.payload
                  , r = void 0 === a ? null : a;
                switch (n) {
                case nc.a.SHOW_MODAL:
                    if (r) {
                        var c, o = r.id, i = r.data, s = r.extraProps;
                        return Object(Ve.a)({}, e, (c = {},
                        Object(ar.a)(c, o, !0),
                        Object(ar.a)(c, "data", i),
                        Object(ar.a)(c, "extraProps", s),
                        c))
                    }
                    return e;
                case nc.a.HIDE_MODAL:
                    return ac;
                case nc.a.MODAL_DATA:
                    return Object(Ve.a)({}, e, {
                        data: r
                    });
                default:
                    return e
                }
            },
            socket: oc({
                isPublic: !1
            }),
            pubSocket: oc({
                isPublic: !0
            }),
            form: nr.a,
            data: Object(er.c)({
                rest: Yr,
                balances: Mr,
                ticker: Ar
            })
        })
          , Ac = n(5)
          , wc = n.n(Ac)
          , Nc = n(3)
          , Cc = n(35)
          , Ic = n(91)
          , xc = n.n(Ic)
          , Rc = (n(102),
        n(131),
        wc.a.mark(Pc))
          , Uc = wc.a.mark(Dc)
          , Lc = wc.a.mark(Mc);
        function Pc() {
            var e;
            return wc.a.wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return e = Cc.a.auth(),
                        t.next = 3,
                        Object(Nc.f)(e);
                    case 3:
                    case "end":
                        return t.stop()
                    }
            }, Rc)
        }
        function Dc(e, t) {
            var n;
            return wc.a.wrap(function(a) {
                for (; ; )
                    switch (a.prev = a.next) {
                    case 0:
                        return n = Cc.a.send(e, {
                            isPublic: !0
                        }),
                        a.next = 3,
                        Object(Nc.f)(Cc.a.subscribeRequest({
                            channel: t,
                            hash: e
                        }));
                    case 3:
                        return a.next = 5,
                        Object(Nc.f)(n);
                    case 5:
                    case "end":
                        return a.stop()
                    }
            }, Uc)
        }
        function Mc(e) {
            var t;
            return wc.a.wrap(function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        if (!e) {
                            n.next = 4;
                            break
                        }
                        return t = Cc.a.unsubscribe({
                            chanId: e
                        }),
                        n.next = 4,
                        Object(Nc.f)(t);
                    case 4:
                    case "end":
                        return n.stop()
                    }
            }, Lc)
        }
        function Wc(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (e) {
            case "book":
            case "fbook":
                var n = t.symbol
                  , a = t.prec
                  , r = t.freq
                  , c = Object(Xt.a)(n)
                  , o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return xc()(e) ? e : "P".concat(Math.max(Math.min(e, 4), 0))
                }(a)
                  , i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return xc()(e) ? e : "F".concat(e ? 1 : 0)
                }(r)
                  , s = "book" === e ? 25 : 250
                  , l = '"symbol":"'.concat(c, '","prec":"').concat(o, '","freq":"').concat(i, '","len":').concat(s);
                return '{"event":"subscribe","channel":"'.concat(e, '",').concat(l, "}");
            case "trades":
            case "ftrades":
                var u = t.symbol
                  , d = Object(Xt.a)(u);
                return '{"event":"subscribe","channel":"trades","symbol":"'.concat(d, '"}');
            case "candles":
                var f = t.interval
                  , b = t.symbol
                  , p = t.key
                  , m = Object(Xt.a)(b)
                  , h = p || "trade:".concat(f, ":").concat(m);
                return '{"event":"subscribe","channel":"candles","key":"'.concat(h, '"}');
            default:
                return
            }
        }
        var Fc = n(360)
          , Hc = n.n(Fc)
          , Bc = n(132)
          , Kc = n.n(Bc)
          , Gc = n(79)
          , qc = n(120)
          , Vc = function(e) {
            return e.data.book
        }
          , Yc = function(e) {
            return Vc(e).checksumFailed
        }
          , Xc = function(e) {
            return Vc(e).pasks
        }
          , Qc = function(e) {
            return Vc(e).pbids
        }
          , zc = (Object(qc.a)([Xc], function(e) {
            return e.sort(function(e, t) {
                return e - t
            })
        }),
        Object(qc.a)([Qc], function(e) {
            return e.sort(function(e, t) {
                return e - t
            })
        }),
        function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                isPublic: !1
            }
              , n = function(t) {
                return e(t).channels || {}
            }
              , a = function(e) {
                return n(e)[0]
            }
              , r = function(t) {
                return e(t).subs || {}
            }
              , c = function(t) {
                return e(t).status || rc.a.WS_STATUS_UNKNOWN
            }
              , o = function(e, t) {
                return n(e)[t]
            }
              , i = function(e, t) {
                return o(e, t) || {}
            }
              , s = function(e, t) {
                return i(e, t).symbol
            }
              , l = function(e, t) {
                return Object(Xt.a)(s(e, t))
            }
              , u = {
                getWebsocket: e,
                getWebsocketConf: function(t) {
                    return e(t).conf || {}
                },
                getWebsocketChannels: n,
                getWebsocketAuthChannel: a,
                getWebsocketSubs: r,
                getWebsocketSubsLoading: function(t) {
                    return e(t).subsLoading || {}
                },
                getWebsocketSubsTrades: function(e) {
                    return r(e).trades
                },
                getWebsocketSubsAuth: function(e) {
                    return r(e).auth
                },
                getWebsocketSubsLoadingUser: function(e) {
                    return 0 !== r(e).auth
                },
                getWebsocketLastActivity: function(t) {
                    return e(t).lastActivity
                },
                getWebsocketTimeDiff: function(t) {
                    return e(t).timeDifference || null
                },
                getWebsocketStatus: c,
                getWebsocketConnected: function(e) {
                    return c(e) !== rc.a.WS_STATUS_OFFLINE
                },
                getWebsocketLoading: function(e) {
                    return c(e) !== rc.a.WS_STATUS_ONLINE
                },
                getWebsocketOnline: function(e) {
                    return c(e) === rc.a.WS_STATUS_ONLINE
                },
                getWebsocketIsAuth: function(e) {
                    return "OK" === (a(e) || {}).status
                },
                getWebsocketSubscribed: o,
                getWebsocketChannel: i,
                getWebsocketChanRawSymbol: s,
                getWebsocketChanSymbol: function(e, t) {
                    return Object(Xt.i)(s(e, t))
                },
                getWebsocketChanPrefixed: l,
                getWebsocketChanIsTrading: function(e, t) {
                    return Object(Xt.e)(l(e, t).symbol)
                },
                makeWebsocketFindChannel: function(e) {
                    return Object(qc.a)([n], function(t) {
                        return "subscribed" === (Object.values(t).find(function(t) {
                            return t && t.channel === e
                        }) || {}).event
                    })
                }
            }
              , d = Object(Ve.a)({}, u)
              , f = Object(Ve.a)({}, cr()(u, ["getWebsocketAuthChannel", "getWebsocketSubsAuth", "getWebsocketSubsLoadingUser", "getWebsocketIsAuth"]));
            return t.isPublic ? f : d
        }
        )
          , Jc = zc(function(e) {
            return e.socket
        }, {
            isPublic: !1
        })
          , Zc = zc(function(e) {
            return e.pubSocket
        }, {
            isPublic: !0
        })
          , $c = (Jc.getWebsocket,
        Jc.getWebsocketConf);
        Jc.getWebsocketChannels,
        Jc.getWebsocketAuthChannel,
        Jc.getWebsocketSubs,
        Jc.getWebsocketSubsTrades,
        Jc.getWebsocketSubsAuth,
        Jc.getWebsocketSubsLoadingUser,
        Jc.getWebsocketLastActivity,
        Jc.getWebsocketTimeDiff,
        Jc.getWebsocketStatus,
        Jc.getWebsocketConnected,
        Jc.getWebsocketLoading,
        Jc.getWebsocketOnline,
        Jc.getWebsocketIsAuth,
        Jc.getWebsocketSubscribed,
        Jc.getWebsocketChannel,
        Jc.getWebsocketChanRawSymbol,
        Jc.getWebsocketChanSymbol,
        Jc.getWebsocketChanPrefixed,
        Jc.getWebsocketChanIsTrading,
        Jc.makeWebsocketFindChannel;
        function eo() {
            var e = Gt()(window, "location.pathname", "/").split("/");
            return Object(zt.a)(e, 2)[1]
        }
        function to(e) {
            var t = eo()
              , n = function(e) {
                return {
                    pair: Gt()(e, "UI.currentPair", Dr.c),
                    ccy: Gt()(e, "UI.currentCcy", Dr.b)
                }
            }(e)
              , a = n.pair
              , r = n.ccy;
            switch (t) {
            case "trading":
            case "t":
                return a;
            case "funding":
            case "f":
                return r;
            default:
                return null
            }
        }
        function no(e) {
            return Gt()(e, "data.rest.wsToken.token", !1)
        }
        function ao(e) {
            return Jc.getWebsocketIsAuth(e)
        }
        var ro = ["candles", "book", "trades", "fbook", "ftrades"];
        function co(e) {
            return [{
                isPublic: !1,
                status: Jc.getWebsocketStatus(e)
            }, {
                isPublic: !0,
                status: Zc.getWebsocketStatus(e)
            }]
        }
        function oo(e) {
            return function(t) {
                var n = Zc.getWebsocketChannels(t);
                return Object.values(n).filter(function(t) {
                    return t.channel === e
                }).map(function(e) {
                    return e.chanId
                })
            }
        }
        function io(e) {
            return ro.reduce(function(t, n) {
                var a, r = Wc(n, (a = n,
                function(e) {
                    var t, n = to(e);
                    switch (a) {
                    case "book":
                    case "fbook":
                        return {
                            symbol: n,
                            prec: Object(Gc.c)(e, "book_precision"),
                            freq: Object(Gc.c)(e, "book_throttle"),
                            checksum: !Yc(e)
                        };
                    case "candles":
                        var r = Object(Gc.c)(e, "chart_interval");
                        return {
                            interval: (t = r,
                            {
                                1: "1m",
                                5: "5m",
                                15: "15m",
                                30: "30m",
                                60: "1h",
                                180: "3h",
                                360: "6h",
                                720: "12h",
                                D: "1D",
                                "1D": "1D",
                                W: "7D",
                                "2W": "14D",
                                M: "1M"
                            }[t]),
                            symbol: n
                        };
                    case "trades":
                    case "ftrades":
                        return {
                            symbol: n
                        };
                    default:
                        return {}
                    }
                }
                )(e));
                return Object(Ve.a)({}, t, Object(ar.a)({}, n, r))
            }, {})
        }
        function so(e) {
            return {
                subs: Zc.getWebsocketSubs(e),
                channels: Zc.getWebsocketChannels(e)
            }
        }
        function lo(e) {
            var t = so(e).channels;
            return Hc()(t, function(e, t) {
                var n = t.chanId
                  , a = t.channel
                  , r = t.symbol
                  , c = Wc(Kc()(r, "f") ? "f".concat(a) : a, t);
                return Object(Ve.a)({}, e, Object(ar.a)({}, c, n))
            }, {})
        }
        function uo(e) {
            return Zc.getWebsocketSubsLoading(e)
        }
        function fo(e) {
            return {
                book: !Object(Gc.a)(e, "book"),
                fbook: !Object(Gc.a)(e, "fbook"),
                trades: !Object(Gc.a)(e, "trades"),
                ftrades: !Object(Gc.a)(e, "matched"),
                candles: !Object(Gc.a)(e, "chart")
            }
        }
        function bo(e) {
            var t = function() {
                switch (eo()) {
                case "trading":
                case "t":
                    return {
                        book: !0,
                        candles: !0,
                        trades: !0
                    };
                case "funding":
                case "f":
                    return {
                        fbook: !0,
                        ftrades: !0
                    };
                default:
                    return {}
                }
            }()
              , n = fo(e);
            return Object.keys(t).filter(function(e) {
                return t[e] && n[e]
            })
        }
        function po(e) {
            return Gt()(e, "data.book.isFunding", !1)
        }
        var mo = wc.a.mark(Eo)
          , ho = 4e3;
        function Eo() {
            var e, t, n;
            return wc.a.wrap(function(a) {
                for (; ; )
                    switch (a.prev = a.next) {
                    case 0:
                        return e = [131072, 33554432].reduce(function(e, t) {
                            return e + t
                        }, 0),
                        t = [{
                            isPublic: !1,
                            wssUrl: Dr.g
                        }, {
                            isPublic: !0,
                            wssUrl: Dr.h
                        }],
                        a.next = 4,
                        Object(Nc.b)(t.map(function(t) {
                            var n = t.wssUrl
                              , a = t.isPublic
                              , r = Cc.a.conf({
                                token: !0,
                                wssUrl: n,
                                flags: e
                            }, {
                                isPublic: a
                            });
                            return Object(Nc.f)(r)
                        }));
                    case 4:
                        n = wc.a.mark(function e() {
                            var t, n;
                            return wc.a.wrap(function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        Object(Nc.g)(co);
                                    case 2:
                                        return t = e.sent,
                                        e.next = 5,
                                        Object(Nc.g)(no);
                                    case 5:
                                        return n = e.sent,
                                        e.next = 8,
                                        Object(Nc.b)(t.map(function(e) {
                                            var t = e.isPublic
                                              , a = e.status;
                                            if (a === rc.a.WS_STATUS_OFFLINE) {
                                                var r = a === rc.a.WS_STATUS_OFFLINE ? Cc.a.init({
                                                    token: n,
                                                    autoAuth: !t
                                                }, {
                                                    isPublic: t
                                                }) : Cc.a.disconnect();
                                                return Object(Nc.f)(r)
                                            }
                                            return null
                                        }));
                                    case 8:
                                        return e.next = 10,
                                        Object(Nc.d)(ho);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e)
                        });
                    case 5:
                        return a.delegateYield(n(), "t0", 7);
                    case 7:
                        a.next = 5;
                        break;
                    case 9:
                    case "end":
                        return a.stop()
                    }
            }, mo)
        }
        var vo = n(98)
          , _o = n.n(vo)
          , Oo = (Zc.getWebsocket,
        Zc.getWebsocketConf,
        Zc.getWebsocketChannels,
        Zc.getWebsocketSubs,
        Zc.getWebsocketSubsTrades,
        Zc.getWebsocketSubsLoadingUser,
        Zc.getWebsocketLastActivity,
        Zc.getWebsocketTimeDiff,
        Zc.getWebsocketStatus,
        Zc.getWebsocketConnected,
        Zc.getWebsocketLoading,
        Zc.getWebsocketOnline)
          , go = (Zc.getWebsocketSubscribed,
        Zc.getWebsocketChannel,
        Zc.getWebsocketChanRawSymbol,
        Zc.getWebsocketChanSymbol,
        Zc.getWebsocketChanPrefixed,
        Zc.getWebsocketChanIsTrading,
        Zc.makeWebsocketFindChannel,
        wc.a.mark(Ao))
          , So = wc.a.mark(wo)
          , To = wc.a.mark(No)
          , ko = wc.a.mark(Co)
          , jo = wc.a.mark(Io)
          , yo = wc.a.mark(xo);
        function Ao(e) {
            var t, n, a, r, c, o, i, s, l, u, d, f, b = arguments;
            return wc.a.wrap(function(p) {
                for (; ; )
                    switch (p.prev = p.next) {
                    case 0:
                        if (t = b.length > 1 && void 0 !== b[1] ? b[1] : "unknown",
                        !Ut()(e)) {
                            p.next = 3;
                            break
                        }
                        return p.abrupt("return");
                    case 3:
                        return vr.b.debug("++++++++++   SUBSCRIBE: [ ".concat(e, " ] BECAUSE: ").concat(t)),
                        p.next = 6,
                        Object(Nc.g)(Oo);
                    case 6:
                        if (p.sent) {
                            p.next = 9;
                            break
                        }
                        return p.abrupt("return");
                    case 9:
                        return p.next = 11,
                        Object(Nc.g)(io);
                    case 11:
                        return n = p.sent,
                        p.next = 14,
                        Object(Nc.g)(lo);
                    case 14:
                        return a = p.sent,
                        p.next = 17,
                        Object(Nc.g)(uo);
                    case 17:
                        r = p.sent,
                        c = !0,
                        o = !1,
                        i = void 0,
                        p.prev = 21,
                        s = e[Symbol.iterator]();
                    case 23:
                        if (c = (l = s.next()).done) {
                            p.next = 33;
                            break
                        }
                        if (u = l.value,
                        d = n[u],
                        f = Gt()(r[u], "isLoading", !1) && Gt()(r[u], "hash") === d,
                        a[d] || f) {
                            p.next = 30;
                            break
                        }
                        return p.next = 30,
                        Dc(d, u);
                    case 30:
                        c = !0,
                        p.next = 23;
                        break;
                    case 33:
                        p.next = 39;
                        break;
                    case 35:
                        p.prev = 35,
                        p.t0 = p.catch(21),
                        o = !0,
                        i = p.t0;
                    case 39:
                        p.prev = 39,
                        p.prev = 40,
                        c || null == s.return || s.return();
                    case 42:
                        if (p.prev = 42,
                        !o) {
                            p.next = 45;
                            break
                        }
                        throw i;
                    case 45:
                        return p.finish(42);
                    case 46:
                        return p.finish(39);
                    case 47:
                    case "end":
                        return p.stop()
                    }
            }, go, null, [[21, 35, 39, 47], [40, , 42, 46]])
        }
        function wo() {
            var e, t, n, a, r, c, o, i, s, l, u, d, f, b, p, m = arguments;
            return wc.a.wrap(function(h) {
                for (; ; )
                    switch (h.prev = h.next) {
                    case 0:
                        if (e = m.length > 0 && void 0 !== m[0] ? m[0] : [],
                        t = m.length > 1 && void 0 !== m[1] ? m[1] : "unknown",
                        !Ut()(e)) {
                            h.next = 4;
                            break
                        }
                        return h.abrupt("return");
                    case 4:
                        vr.b.debug("---------- UNSUBSCRIBE: [ ".concat(e, " ] BECAUSE: ").concat(t)),
                        n = !0,
                        a = !1,
                        r = void 0,
                        h.prev = 8,
                        c = e[Symbol.iterator]();
                    case 10:
                        if (n = (o = c.next()).done) {
                            h.next = 46;
                            break
                        }
                        return i = o.value,
                        h.next = 14,
                        Object(Nc.f)({
                            type: "".concat(_o()(i), "-RESET_MESSAGE")
                        });
                    case 14:
                        return h.next = 16,
                        Object(Nc.g)(oo(i));
                    case 16:
                        s = h.sent,
                        l = !0,
                        u = !1,
                        d = void 0,
                        h.prev = 20,
                        f = s[Symbol.iterator]();
                    case 22:
                        if (l = (b = f.next()).done) {
                            h.next = 29;
                            break
                        }
                        return p = b.value,
                        h.next = 26,
                        Mc(p);
                    case 26:
                        l = !0,
                        h.next = 22;
                        break;
                    case 29:
                        h.next = 35;
                        break;
                    case 31:
                        h.prev = 31,
                        h.t0 = h.catch(20),
                        u = !0,
                        d = h.t0;
                    case 35:
                        h.prev = 35,
                        h.prev = 36,
                        l || null == f.return || f.return();
                    case 38:
                        if (h.prev = 38,
                        !u) {
                            h.next = 41;
                            break
                        }
                        throw d;
                    case 41:
                        return h.finish(38);
                    case 42:
                        return h.finish(35);
                    case 43:
                        n = !0,
                        h.next = 10;
                        break;
                    case 46:
                        h.next = 52;
                        break;
                    case 48:
                        h.prev = 48,
                        h.t1 = h.catch(8),
                        a = !0,
                        r = h.t1;
                    case 52:
                        h.prev = 52,
                        h.prev = 53,
                        n || null == c.return || c.return();
                    case 55:
                        if (h.prev = 55,
                        !a) {
                            h.next = 58;
                            break
                        }
                        throw r;
                    case 58:
                        return h.finish(55);
                    case 59:
                        return h.finish(52);
                    case 60:
                    case "end":
                        return h.stop()
                    }
            }, So, null, [[8, 48, 52, 60], [20, 31, 35, 43], [36, , 38, 42], [53, , 55, 59]])
        }
        function No() {
            var e, t, n, a, r, c, o, i, s = arguments;
            return wc.a.wrap(function(l) {
                for (; ; )
                    switch (l.prev = l.next) {
                    case 0:
                        if (e = s.length > 0 && void 0 !== s[0] ? s[0] : [],
                        t = s.length > 1 && void 0 !== s[1] ? s[1] : "unknown",
                        !Ut()(e)) {
                            l.next = 4;
                            break
                        }
                        return l.abrupt("return");
                    case 4:
                        vr.b.debug("---------- UNSUBSCRIBE: [ ".concat(e, " ] BECAUSE: ").concat(t)),
                        n = !0,
                        a = !1,
                        r = void 0,
                        l.prev = 8,
                        c = e[Symbol.iterator]();
                    case 10:
                        if (n = (o = c.next()).done) {
                            l.next = 17;
                            break
                        }
                        return i = o.value,
                        l.next = 14,
                        Mc(i);
                    case 14:
                        n = !0,
                        l.next = 10;
                        break;
                    case 17:
                        l.next = 23;
                        break;
                    case 19:
                        l.prev = 19,
                        l.t0 = l.catch(8),
                        a = !0,
                        r = l.t0;
                    case 23:
                        l.prev = 23,
                        l.prev = 24,
                        n || null == c.return || c.return();
                    case 26:
                        if (l.prev = 26,
                        !a) {
                            l.next = 29;
                            break
                        }
                        throw r;
                    case 29:
                        return l.finish(26);
                    case 30:
                        return l.finish(23);
                    case 31:
                    case "end":
                        return l.stop()
                    }
            }, To, null, [[8, 19, 23, 31], [24, , 26, 30]])
        }
        function Co() {
            var e, t, n = arguments;
            return wc.a.wrap(function(a) {
                for (; ; )
                    switch (a.prev = a.next) {
                    case 0:
                        if (e = n.length > 0 && void 0 !== n[0] ? n[0] : [],
                        t = n.length > 1 && void 0 !== n[1] ? n[1] : "unknown",
                        !Ut()(e)) {
                            a.next = 4;
                            break
                        }
                        return a.abrupt("return");
                    case 4:
                        return a.next = 6,
                        wo(e, t);
                    case 6:
                        return a.next = 8,
                        Ao(e, t);
                    case 8:
                    case "end":
                        return a.stop()
                    }
            }, ko)
        }
        function Io(e) {
            var t;
            return wc.a.wrap(function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        return n.next = 2,
                        Object(Nc.g)(bo);
                    case 2:
                        return t = n.sent,
                        n.next = 5,
                        Ao(t, e);
                    case 5:
                    case "end":
                        return n.stop()
                    }
            }, jo)
        }
        function xo(e) {
            var t;
            return wc.a.wrap(function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        return n.next = 2,
                        Object(Nc.g)(bo);
                    case 2:
                        return t = n.sent,
                        n.next = 5,
                        Co(t, e);
                    case 5:
                    case "end":
                        return n.stop()
                    }
            }, yo)
        }
        function Ro(e) {
            return {
                orderBook: "book",
                book: "book",
                fbook: "fbook",
                trades: "trades",
                matched: "ftrades",
                chart: "candles"
            }[e]
        }
        var Uo = wc.a.mark(Po)
          , Lo = wc.a.mark(Do);
        function Po() {
            var e, t, n, a, r, c, o, i = arguments;
            return wc.a.wrap(function(s) {
                for (; ; )
                    switch (s.prev = s.next) {
                    case 0:
                        if (e = i.length > 0 && void 0 !== i[0] ? i[0] : {},
                        t = e.payload,
                        n = t.id,
                        a = Ro(n)) {
                            s.next = 6;
                            break
                        }
                        return s.abrupt("return");
                    case 6:
                        return s.next = 8,
                        Object(Nc.g)(fo);
                    case 8:
                        return r = s.sent,
                        c = r[a],
                        o = [a],
                        s.next = 13,
                        c ? wo(o, "closed collapsible") : Ao(o, "opened collapsible");
                    case 13:
                    case "end":
                        return s.stop()
                    }
            }, Uo)
        }
        function Do() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.k)(ur.c.UI_TOGGLE_COLLAPSIBLE_WIDGET, Po);
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }, Lo)
        }
        var Mo = wc.a.mark(Fo)
          , Wo = wc.a.mark(Ho);
        function Fo() {
            var e, t, n, a, r, c = arguments;
            return wc.a.wrap(function(o) {
                for (; ; )
                    switch (o.prev = o.next) {
                    case 0:
                        e = c.length > 0 && void 0 !== c[0] ? c[0] : {},
                        t = e.key,
                        n = e.isFunding,
                        a = void 0 !== n && n,
                        o.t0 = t,
                        o.next = "book_precision" === o.t0 ? 5 : "book_throttle" === o.t0 ? 5 : "chart_interval" === o.t0 ? 9 : 12;
                        break;
                    case 5:
                        return r = a ? "fbook" : "book",
                        o.next = 8,
                        Co([r], "".concat(r, " settings"));
                    case 8:
                        return o.abrupt("return", 1);
                    case 9:
                        return o.next = 11,
                        Co(["candles"], "chart settings");
                    case 11:
                        return o.abrupt("return", 1);
                    case 12:
                        return o.abrupt("return", 0);
                    case 13:
                    case "end":
                        return o.stop()
                    }
            }, Mo)
        }
        function Ho() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.k)(Hr.b.SET_SETTINGS, Fo);
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }, Wo)
        }
        var Bo = wc.a.mark(Yo)
          , Ko = wc.a.mark(Xo)
          , Go = wc.a.mark(Qo)
          , qo = wc.a.mark(zo)
          , Vo = "SYMBOL_SET";
        function Yo() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        xo("ws online");
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }, Bo)
        }
        function Xo() {
            var e, t, n, a = arguments;
            return wc.a.wrap(function(r) {
                for (; ; )
                    switch (r.prev = r.next) {
                    case 0:
                        if (e = a.length > 0 && void 0 !== a[0] ? a[0] : {},
                        t = e.payload,
                        "currentPair" !== (n = (void 0 === t ? {} : t).section) && "currentCcy" !== n) {
                            r.next = 6;
                            break
                        }
                        return r.next = 6,
                        Object(Nc.f)({
                            type: Vo
                        });
                    case 6:
                    case "end":
                        return r.stop()
                    }
            }, Ko)
        }
        function Qo() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.k)(ur.c.UI_SET, Xo);
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }, Go)
        }
        function zo() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.h)(Qo);
                    case 2:
                        return e.next = 4,
                        Object(Nc.b)([Object(Nc.i)(Vo), Object(Nc.i)(rc.a.WS_EVENT_CONNECT), Object(Nc.i)(Hr.b.RECEIVE_INITIAL_SETTINGS)]);
                    case 4:
                        return e.next = 6,
                        Io("page load subscribe");
                    case 6:
                        return e.next = 8,
                        Object(Nc.k)(rc.a.WS_EVENT_CONNECT, Yo);
                    case 8:
                        return e.next = 10,
                        Object(Nc.k)(Vo, Yo);
                    case 10:
                    case "end":
                        return e.stop()
                    }
            }, qo)
        }
        var Jo = wc.a.mark($o)
          , Zo = wc.a.mark(ei);
        function $o() {
            var e, t;
            return wc.a.wrap(function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        return n.next = 2,
                        Object(Nc.g)(Yc);
                    case 2:
                        if (!n.sent) {
                            n.next = 10;
                            break
                        }
                        return n.next = 6,
                        Object(Nc.g)(po);
                    case 6:
                        return e = n.sent,
                        t = e ? "fbook" : "book",
                        n.next = 10,
                        Co([t]);
                    case 10:
                    case "end":
                        return n.stop()
                    }
            }, Jo)
        }
        function ei() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.k)("CS_MESSAGE", $o);
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }, Zo)
        }
        var ti = n(249)
          , ni = n.n(ti)
          , ai = n(154)
          , ri = n.n(ai)
          , ci = n(361)
          , oi = n.n(ci)
          , ii = wc.a.mark(li)
          , si = 6e3;
        function li() {
            var e;
            return wc.a.wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        e = wc.a.mark(function e() {
                            var t, n, a, r, c, o, i, s;
                            return wc.a.wrap(function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        Object(Nc.d)(si);
                                    case 2:
                                        return e.next = 4,
                                        Object(Nc.g)(bo);
                                    case 4:
                                        return t = e.sent,
                                        e.next = 7,
                                        Object(Nc.g)(so);
                                    case 7:
                                        return n = e.sent,
                                        a = n.subs,
                                        r = n.channels,
                                        c = Object.keys(r).map(function(e) {
                                            return +e
                                        }).filter(function(e) {
                                            return e
                                        }),
                                        o = t.map(function(e) {
                                            return +a[e]
                                        }),
                                        i = oi()(o, ri.a) ? [] : ni()(c, o),
                                        e.next = 15,
                                        No(i, "stale channel");
                                    case 15:
                                        return s = ni()(t, Object.keys(a)),
                                        e.next = 18,
                                        Ao(s, "missing channel");
                                    case 18:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e)
                        });
                    case 1:
                        return t.delegateYield(e(), "t0", 3);
                    case 3:
                        t.next = 1;
                        break;
                    case 5:
                    case "end":
                        return t.stop()
                    }
            }, ii)
        }
        var ui = wc.a.mark(di);
        function di() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.h)(zo);
                    case 2:
                        return e.next = 4,
                        Object(Nc.h)(Ho);
                    case 4:
                        return e.next = 6,
                        Object(Nc.h)(Do);
                    case 6:
                        return e.next = 8,
                        Object(Nc.h)(ei);
                    case 8:
                        return e.next = 10,
                        Object(Nc.h)(li);
                    case 10:
                    case "end":
                        return e.stop()
                    }
            }, ui)
        }
        var fi = wc.a.mark(pi)
          , bi = 6e3;
        function pi() {
            var e, t;
            return wc.a.wrap(function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        return n.next = 3,
                        Object(Nc.g)(no);
                    case 3:
                        return e = n.sent,
                        n.next = 6,
                        Object(Nc.g)(ao);
                    case 6:
                        if (t = n.sent,
                        !e || t) {
                            n.next = 10;
                            break
                        }
                        return n.next = 10,
                        Pc();
                    case 10:
                        return n.next = 12,
                        Object(Nc.d)(bi);
                    case 12:
                        n.next = 0;
                        break;
                    case 14:
                    case "end":
                        return n.stop()
                    }
            }, fi)
        }
        var mi = wc.a.mark(Ei)
          , hi = wc.a.mark(vi);
        function Ei(e) {
            return wc.a.wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        Object(Nc.f)(Ce(e));
                    case 2:
                    case "end":
                        return t.stop()
                    }
            }, mi)
        }
        function vi() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.j)(Ne, Ei);
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }, hi)
        }
        var _i = vi;
        function Oi(e, t) {
            return fetch(e, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
            }).then(function(e) {
                return e.json()
            }).catch(function(e) {
                return e
            }).then(function(e) {
                return e
            })
        }
        function gi(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return Oi("".concat(t, "/get-data"), {
                auth: n,
                method: e,
                params: a
            })
        }
        function Si(e, t) {
            return Oi("".concat(e, "/check-auth"), {
                auth: t
            })
        }
        function Ti(e, t) {
            return Oi("".concat(e, "/check-stored-locally"), {
                auth: t
            })
        }
        function ki(e) {
            var t = xe.a.parse(e)
              , n = cr()(t, "authToken")
              , a = xe.a.stringify(n, {
                encode: !1
            });
            return a ? "?".concat(a) : ""
        }
        var ji = wc.a.mark(Ii)
          , yi = wc.a.mark(xi)
          , Ai = wc.a.mark(Ri)
          , wi = wc.a.mark(Ui)
          , Ni = "local"
          , Ci = function(e) {
            return Object(Be.c)({
                id: "status.request.error",
                topic: "auth.auth",
                detail: JSON.stringify(e)
            })
        };
        function Ii(e) {
            var t, n, a, r, c, o, i, s, l, u, m, h, E, v, _, O, g, S, T, k;
            return wc.a.wrap(function(j) {
                for (; ; )
                    switch (j.prev = j.next) {
                    case 0:
                        return t = e.payload,
                        j.prev = 1,
                        j.next = 4,
                        Object(Nc.g)(b.d);
                    case 4:
                        return n = j.sent,
                        j.next = 7,
                        Object(Nc.g)(p.h);
                    case 7:
                        return a = j.sent,
                        r = a.API_URL,
                        c = void 0 === r ? "" : r,
                        j.next = 11,
                        Object(Nc.c)(Si, c, n);
                    case 11:
                        if (o = j.sent,
                        i = !0,
                        !("success"in o)) {
                            j.next = 26;
                            break
                        }
                        if (i = !1,
                        !o.success || !o.data) {
                            j.next = 25;
                            break
                        }
                        return s = o.data,
                        l = s.email,
                        u = s.timezone,
                        o.result = !0,
                        j.next = 20,
                        Object(Nc.f)(Object(f.c)(l));
                    case 20:
                        if (!u) {
                            j.next = 23;
                            break
                        }
                        return j.next = 23,
                        Object(Nc.f)(Object(f.e)(u));
                    case 23:
                        j.next = 26;
                        break;
                    case 25:
                        !1 === o.success && o.message && (o.error = o.message);
                    case 26:
                        if (m = o.result,
                        h = void 0 !== m && m,
                        E = o.error,
                        !h) {
                            j.next = 65;
                            break
                        }
                        return j.next = 30,
                        Object(Nc.f)(Object(Be.d)({
                            id: "status.success",
                            topic: "auth.auth",
                            time: (new Date).toLocaleString()
                        }));
                    case 30:
                        if (!i) {
                            j.next = 44;
                            break
                        }
                        return j.next = 33,
                        Object(Nc.d)(300);
                    case 33:
                        return j.next = 35,
                        Object(Nc.c)(Ti, n);
                    case 35:
                        if (v = j.sent,
                        _ = v.result,
                        O = v.error,
                        !_) {
                            j.next = 41;
                            break
                        }
                        return j.next = 41,
                        Object(Nc.f)(Object(f.c)(_));
                    case 41:
                        if (!O) {
                            j.next = 44;
                            break
                        }
                        return j.next = 44,
                        Object(Nc.f)(Ci(O));
                    case 44:
                        if (a.showSyncMode) {
                            j.next = 65;
                            break
                        }
                        return j.next = 47,
                        Object(Nc.g)(p.j);
                    case 47:
                        if (j.sent) {
                            j.next = 63;
                            break
                        }
                        return j.next = 51,
                        Object(Nc.d)(300);
                    case 51:
                        return g = function(e) {
                            return gi("getUsersTimeConf", c, e)
                        }
                        ,
                        j.next = 54,
                        Object(Nc.c)(g, n);
                    case 54:
                        if (S = j.sent,
                        T = S.result,
                        k = S.error,
                        !T) {
                            j.next = 60;
                            break
                        }
                        return j.next = 60,
                        Object(Nc.f)(Object(f.e)(T.timezoneName));
                    case 60:
                        if (!k) {
                            j.next = 63;
                            break
                        }
                        return j.next = 63,
                        Object(Nc.f)(Ci(k));
                    case 63:
                        return j.next = 65,
                        Object(Nc.f)(d.c.hideAuth());
                    case 65:
                        return j.next = 67,
                        Object(Nc.f)(d.c.updateAuthStatus(h));
                    case 67:
                        if (!1 !== h || t !== Ni) {
                            j.next = 70;
                            break
                        }
                        return j.next = 70,
                        Object(Nc.f)(d.c.logout());
                    case 70:
                        if (!E) {
                            j.next = 73;
                            break
                        }
                        return j.next = 73,
                        Object(Nc.f)(Object(Be.c)({
                            id: "status.fail",
                            topic: "auth.auth",
                            detail: JSON.stringify(E)
                        }));
                    case 73:
                        j.next = 79;
                        break;
                    case 75:
                        return j.prev = 75,
                        j.t0 = j.catch(1),
                        j.next = 79,
                        Object(Nc.f)(Ci(j.t0));
                    case 79:
                    case "end":
                        return j.stop()
                    }
            }, ji, null, [[1, 75]])
        }
        function xi(e) {
            var t, n, a, r, c, o;
            return wc.a.wrap(function(i) {
                for (; ; )
                    switch (i.prev = i.next) {
                    case 0:
                        if (t = e.payload,
                        n = t,
                        i.prev = 2,
                        !(n && n.indexOf(";") > -1)) {
                            i.next = 8;
                            break
                        }
                        return a = n.split(";"),
                        r = Object(zt.a)(a, 2),
                        c = r[0],
                        o = r[1],
                        n = c,
                        i.next = 8,
                        Object(Nc.f)(Object(f.f)(o));
                    case 8:
                        return i.next = 10,
                        Object(Nc.f)(Object(f.b)(n));
                    case 10:
                        return i.next = 12,
                        Object(Nc.f)(d.c.checkAuth());
                    case 12:
                        i.next = 18;
                        break;
                    case 14:
                        return i.prev = 14,
                        i.t0 = i.catch(2),
                        i.next = 18,
                        Object(Nc.f)(Ci(i.t0));
                    case 18:
                    case "end":
                        return i.stop()
                    }
            }, yi, null, [[2, 14]])
        }
        function Ri() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0,
                        e.next = 3,
                        Object(Nc.g)(p.c);
                    case 3:
                        if (!e.sent) {
                            e.next = 7;
                            break
                        }
                        return e.next = 7,
                        Object(Nc.f)(d.c.checkAuth(Ni));
                    case 7:
                        e.next = 13;
                        break;
                    case 9:
                        return e.prev = 9,
                        e.t0 = e.catch(0),
                        e.next = 13,
                        Object(Nc.f)(Ci(e.t0));
                    case 13:
                    case "end":
                        return e.stop()
                    }
            }, Ai, null, [[0, 9]])
        }
        function Ui() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.k)(Gr.a.CHECK_AUTH, Ii);
                    case 2:
                        return e.next = 4,
                        Object(Nc.k)(Gr.a.CHECK_AUTH_WITH_TOKEN, xi);
                    case 4:
                        return e.next = 6,
                        Object(Nc.k)(Gr.a.CHECK_AUTH_WITH_LOCAL_TOKEN, Ri);
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }, wi)
        }
        var Li = n(236)
          , Pi = n.n(Li)
          , Di = n(109)
          , Mi = wc.a.mark(Ki)
          , Wi = wc.a.mark(qi)
          , Fi = wc.a.mark(Yi);
        function Hi(e) {
            return {
                auth: $c(e),
                adminToken: Gt()(e, "auth.admin.token", null),
                apiUrl: Dr.a,
                publicApiUrl: Dr.f
            }
        }
        function Bi(e) {
            return Gt()(e, "data.rest.wsToken", {})
        }
        function Ki() {
            var e, t, n, a, r, c, o, i, s, l, u, d, f, p, m, h, E, v, _, O, g, S, T, k, j, y, A = arguments;
            return wc.a.wrap(function(w) {
                for (; ; )
                    switch (w.prev = w.next) {
                    case 0:
                        return e = A.length > 0 && void 0 !== A[0] ? A[0] : {},
                        t = e.type,
                        n = e.payload,
                        a = void 0 === n ? {} : n,
                        r = e.meta,
                        c = void 0 === r ? {} : r,
                        w.next = 4,
                        Object(Nc.g)(Hi);
                    case 4:
                        return o = w.sent,
                        i = o.auth,
                        s = o.adminToken,
                        w.next = 9,
                        Object(Nc.g)(b.d);
                    case 9:
                        return l = w.sent,
                        Pi()(l).some(function(e) {
                            return void 0 !== e
                        }) && Nr()(a, ["_headers", "auth"], JSON.stringify(l)),
                        u = c.usePublicApiUrl ? Dr.f : Dr.a,
                        d = Object(Ve.a)({}, i, {
                            urlPrefix: Ut()(u) ? "" : "https://".concat(u)
                        }),
                        a.urlPrefix && (d.urlPrefix = a.urlPrefix),
                        s && Nr()(a, ["_headers", "token"], s),
                        Nr()(a, ["_headers", "bfx-flags"], 14336),
                        f = Object(Ve.a)({}, a),
                        w.prev = 17,
                        w.next = 20,
                        Object(Nc.g)();
                    case 20:
                        if (p = w.sent,
                        d.devToken = Object(Gc.c)(p, "dev_ws_token"),
                        "development" === window.__env || !i.token) {
                            w.next = 37;
                            break
                        }
                        return w.next = 25,
                        Object(Nc.g)(Bi);
                    case 25:
                        if (m = w.sent,
                        h = new Date,
                        !(m && m.timeStamp && h - m.timeStamp < 1e5)) {
                            w.next = 31;
                            break
                        }
                        d.token = m.token,
                        w.next = 37;
                        break;
                    case 31:
                        return w.next = 33,
                        Object(Nc.c)(Di.a);
                    case 33:
                        return E = w.sent,
                        d.token = E,
                        w.next = 37,
                        Object(Nc.f)({
                            type: "REST_WSTOKEN",
                            payload: E,
                            meta: c
                        });
                    case 37:
                        return Kc()(f.path, "http") && (d.urlPrefix = ""),
                        w.next = 40,
                        Object(Nc.c)(Di.c, f, d);
                    case 40:
                        if (v = w.sent,
                        _ = Gt()(v, "data", []),
                        O = Gt()(v, "data.success", !1),
                        g = Gt()(v, "data.message", !1),
                        O || !g) {
                            w.next = 50;
                            break
                        }
                        return (S = new Error(g)).response = {
                            data: g
                        },
                        w.next = 49,
                        Object(Nc.f)({
                            type: $r.a.UPDATE_ERROR_STATUS,
                            payload: {
                                message: g
                            }
                        });
                    case 49:
                        throw S;
                    case 50:
                        if (!Er()(_) || "error" !== _[0]) {
                            w.next = 57;
                            break
                        }
                        throw (T = new Error("API Error")).response = {
                            data: _[2]
                        },
                        T.code = _[1],
                        T;
                    case 57:
                        return w.next = 59,
                        Object(Nc.f)({
                            type: "REST_SUCCESS",
                            payload: _,
                            meta: c
                        });
                    case 59:
                        w.next = 70;
                        break;
                    case 61:
                        return w.prev = 61,
                        w.t0 = w.catch(17),
                        k = w.t0.response,
                        j = void 0 === k ? {} : k,
                        y = t,
                        c && (y += " (".concat(c.section, "-").concat(c.subsection, ")")),
                        y += ": ",
                        vr.b.error(y, w.t0.response ? "".concat(w.t0.toString(), " (").concat(j.data, ")") : w.t0),
                        w.next = 70,
                        Object(Nc.f)({
                            type: "REST_ERROR",
                            payload: w.t0,
                            error: !0,
                            meta: c
                        });
                    case 70:
                    case "end":
                        return w.stop()
                    }
            }, Mi, null, [[17, 61]])
        }
        function Gi() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.section
              , n = void 0 === t ? null : t
              , a = e.subsection
              , r = void 0 === a ? null : a
              , c = "trading" === r ? "t" : "f";
            return n && r ? _o()("".concat(c, "_").concat(n)) : "?"
        }
        function qi() {
            var e, t, n, a, r, c, o, i, s = arguments;
            return wc.a.wrap(function(l) {
                for (; ; )
                    switch (l.prev = l.next) {
                    case 0:
                        if (e = s.length > 0 && void 0 !== s[0] ? s[0] : {},
                        t = e.payload,
                        n = void 0 === t ? [] : t,
                        a = e.meta,
                        c = (r = void 0 === a ? {} : a).symbol,
                        o = r.pair,
                        "?" === (i = Gi(r))) {
                            l.next = 7;
                            break
                        }
                        return l.next = 7,
                        Object(Nc.f)({
                            type: "".concat(i, "_MESSAGE"),
                            payload: [0, i, n],
                            channel: {
                                symbol: c || o
                            },
                            meta: r
                        });
                    case 7:
                    case "end":
                        return l.stop()
                    }
            }, Wi)
        }
        function Vi() {}
        function Yi() {
            var e, t;
            return wc.a.wrap(function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        return n.next = 2,
                        Object(Nc.j)("REST_SUCCESS", qi);
                    case 2:
                        return n.next = 4,
                        Object(Nc.j)("REST_ERROR", Vi);
                    case 4:
                        return n.next = 6,
                        Object(Nc.a)("REST", tr.a.fixed(100));
                    case 6:
                        return e = n.sent,
                        n.next = 9,
                        Object(Nc.i)("UI_LOAD");
                    case 9:
                        return n.next = 12,
                        Object(Nc.i)(e);
                    case 12:
                        return t = n.sent,
                        n.next = 15,
                        Object(Nc.c)(Ki, t);
                    case 15:
                        n.next = 9;
                        break;
                    case 17:
                    case "end":
                        return n.stop()
                    }
            }, Fi)
        }
        var Xi = Yi
          , Qi = wc.a.mark(Zi)
          , zi = wc.a.mark(es)
          , Ji = wc.a.mark(ts);
        function Zi() {
            var e, t;
            return wc.a.wrap(function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        return n.next = 2,
                        Object(Nc.g)(p.i);
                    case 2:
                        e = n.sent,
                        document.body.className = e.replace("_", "-"),
                        t = "".concat(document.body.className.replace("bp3-", ""), "-theme"),
                        document.body.className = "".concat(document.body.className, " ").concat(t);
                    case 6:
                    case "end":
                        return n.stop()
                    }
            }, Qi)
        }
        var $i = 500;
        function es() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.d)($i);
                    case 2:
                        window.location.reload();
                    case 3:
                    case "end":
                        return e.stop()
                    }
            }, zi)
        }
        function ts() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.k)(Ae.a.SET_THEME, Zi);
                    case 2:
                        return e.next = 4,
                        Object(Nc.k)(Ae.a.UPDATE_THEME, Zi);
                    case 4:
                        return e.next = 6,
                        Object(Nc.k)(Ae.a.SET_LANG, es);
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }, Ji)
        }
        var ns = wc.a.mark(rs)
          , as = wc.a.mark(cs);
        function rs(e) {
            var t, n, a, r, c;
            return wc.a.wrap(function(o) {
                for (; ; )
                    switch (o.prev = o.next) {
                    case 0:
                        return t = e.meta,
                        n = (void 0 === t ? {} : t).platform,
                        a = void 0 === n ? {} : n,
                        i = window.location.search,
                        r = xe.a.parse(i),
                        c = r.authToken,
                        o.next = 6,
                        Object(Nc.f)(Object(f.g)());
                    case 6:
                        return o.next = 8,
                        Object(Nc.f)(Object(f.d)(a));
                    case 8:
                        if (!c) {
                            o.next = 14;
                            break
                        }
                        return window.history.pushState(null, null, window.location.href.replace(window.location.search, ki(window.location.search))),
                        o.next = 12,
                        Object(Nc.f)(Object(d.b)(c));
                    case 12:
                        o.next = 16;
                        break;
                    case 14:
                        return o.next = 16,
                        Object(Nc.f)(Object(d.a)());
                    case 16:
                    case "end":
                        return o.stop()
                    }
                var i
            }, ns)
        }
        function cs() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.k)(ve.UI_LOADED, rs);
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }, as)
        }
        var os = wc.a.mark(ls)
          , is = wc.a.mark(bs)
          , ss = wc.a.mark(ps);
        function ls(e) {
            var t, n, a, r;
            return wc.a.wrap(function(c) {
                for (; ; )
                    switch (c.prev = c.next) {
                    case 0:
                        if (t = e.payload,
                        a = (n = void 0 === t ? {} : t).id,
                        r = n.topic,
                        "status.fail" !== a || "auth.auth" !== r) {
                            c.next = 5;
                            break
                        }
                        return c.next = 5,
                        Object(Nc.f)(d.c.logout());
                    case 5:
                    case "end":
                        return c.stop()
                    }
            }, os)
        }
        function us(e) {
            var t = e.payload
              , n = void 0 === t ? {} : t;
            localStorage.setItem("authToken", n),
            localStorage.setItem("authDate", new Date)
        }
        function ds(e) {
            var t = e.payload
              , n = void 0 === t ? {} : t;
            localStorage.setItem("authWsToken", n)
        }
        function fs(e) {
            var t = e.payload
              , n = void 0 === t ? {} : t;
            localStorage.setItem("apiKey", n),
            localStorage.setItem("authDate", new Date)
        }
        function bs(e) {
            var t, n;
            return wc.a.wrap(function(a) {
                for (; ; )
                    switch (a.prev = a.next) {
                    case 0:
                        if (t = e.payload,
                        n = void 0 === t ? {} : t,
                        localStorage.setItem("apiSecret", n),
                        !i.d) {
                            a.next = 5;
                            break
                        }
                        return a.next = 5,
                        Object(Nc.f)(Cc.a.authWithApiKey(Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            REACT_APP_BLOCKPASS_ID: "ethfinex_token_sales",
                            REACT_APP_BLOCKPASS_ENV: "prod",
                            REACT_APP_PLATFORM: "ethfinex",
                            REACT_APP_TITLE: "Token Sales",
                            REACT_APP_LOGO_PATH: "favicon.ico"
                        }).REACT_APP_BFX_KEY, Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            REACT_APP_BLOCKPASS_ID: "ethfinex_token_sales",
                            REACT_APP_BLOCKPASS_ENV: "prod",
                            REACT_APP_PLATFORM: "ethfinex",
                            REACT_APP_TITLE: "Token Sales",
                            REACT_APP_LOGO_PATH: "favicon.ico"
                        }).REACT_APP_BFX_SECRET));
                    case 5:
                    case "end":
                        return a.stop()
                    }
            }, is)
        }
        function ps() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.j)($r.a.UPDATE_ERROR_STATUS, ls);
                    case 2:
                        return e.next = 4,
                        Object(Nc.j)(Gr.a.LOGOUT, mt.e);
                    case 4:
                        return e.next = 6,
                        Object(Nc.j)(Ae.a.SET_AUTH_TOKEN, us);
                    case 6:
                        return e.next = 8,
                        Object(Nc.j)(Ae.a.SET_WS_AUTH_TOKEN, ds);
                    case 8:
                        return e.next = 10,
                        Object(Nc.j)(Ae.a.SET_API_KEY, fs);
                    case 10:
                        return e.next = 12,
                        Object(Nc.j)(Ae.a.SET_API_SECRET, bs);
                    case 12:
                    case "end":
                        return e.stop()
                    }
            }, ss)
        }
        var ms = wc.a.mark(gs)
          , hs = wc.a.mark(Ss)
          , Es = wc.a.mark(Ts)
          , vs = wc.a.mark(ks)
          , _s = wc.a.mark(js)
          , Os = "tickers_section";
        function gs(e) {
            var t, n, a;
            return wc.a.wrap(function(r) {
                for (; ; )
                    switch (r.prev = r.next) {
                    case 0:
                        return t = e.meta,
                        n = (void 0 === t ? {} : t).ticker,
                        a = {
                            ticker: n
                        },
                        r.next = 5,
                        Object(Nc.f)(kt.a.send({
                            path: "".concat(i.a, "/get-ticker"),
                            body: a,
                            meta: {
                                section: Os,
                                noWaitUILoad: !0
                            }
                        }));
                    case 5:
                    case "end":
                        return r.stop()
                    }
            }, ms)
        }
        function Ss(e) {
            var t, n, a, r, c, o;
            return wc.a.wrap(function(i) {
                for (; ; )
                    switch (i.prev = i.next) {
                    case 0:
                        if (t = e.meta,
                        n = void 0 === t ? {} : t,
                        a = e.payload,
                        r = void 0 === a ? {} : a,
                        c = n.section,
                        o = r.data,
                        c !== Os) {
                            i.next = 6;
                            break
                        }
                        return i.next = 6,
                        Object(Nc.f)({
                            type: "TICKER_REST_UPDATE",
                            payload: o
                        });
                    case 6:
                    case "end":
                        return i.stop()
                    }
            }, hs)
        }
        function Ts() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.k)("REQUEST_TICKER", gs);
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }, Es)
        }
        function ks() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.j)("REST_SUCCESS", Ss);
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }, vs)
        }
        function js() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.e)(Ts);
                    case 2:
                        return e.next = 4,
                        Object(Nc.e)(ks);
                    case 4:
                    case "end":
                        return e.stop()
                    }
            }, _s)
        }
        var ys = js
          , As = wc.a.mark(ws);
        function ws() {
            return wc.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        Object(Nc.e)(Eo);
                    case 2:
                        return e.next = 4,
                        Object(Nc.e)(di);
                    case 4:
                        return e.next = 6,
                        Object(Nc.e)(pi);
                    case 6:
                        return e.next = 8,
                        Object(Nc.e)(Ui);
                    case 8:
                        return e.next = 10,
                        Object(Nc.e)(Xi);
                    case 10:
                        return e.next = 12,
                        Object(Nc.e)(ts);
                    case 12:
                        return e.next = 14,
                        Object(Nc.e)(cs);
                    case 14:
                        return e.next = 16,
                        Object(Nc.e)(ys);
                    case 16:
                        return e.next = 18,
                        Object(Nc.e)(ps);
                    case 18:
                        return e.next = 20,
                        Object(Nc.e)(_i);
                    case 20:
                    case "end":
                        return e.stop()
                    }
            }, As)
        }
        var Ns = ws
          , Cs = n(320)
          , Is = n(75)
          , xs = n.n(Is)
          , Rs = n(101)
          , Us = 1
          , Ls = function(e) {
            return xc()(e) ? e : JSON.stringify(e)
        };
        function Ps(e) {
            return Gt()(e, "readyState") !== Us
        }
        function Ds(e) {
            return "OK" === Gt()(e, "auth.status")
        }
        var Ms = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.getWsToken
              , n = e.filters
              , a = {
                auth: null,
                public: null
            }
              , r = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , a = e.store
                      , r = n.data
                      , c = void 0 === r ? "" : r
                      , o = JSON.parse(c);
                    if (Er()(o)) {
                        var i = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                              , t = Object(zt.a)(e, 3)
                              , n = t[1]
                              , a = t[2];
                            return "hb" === n || "hb" === a
                        }(o) ? Rs.a.hb(o, t) : Rs.a.wss(o, t);
                        return a.dispatch(i)
                    }
                    if (xs()(o))
                        switch (o.event) {
                        case "subscribed":
                            var s = Rs.a.subscribed(o, t);
                            return a.dispatch(s);
                        case "unsubscribed":
                            var l = Rs.a.unsubscribed(o, t);
                            return a.dispatch(l);
                        case "error":
                            return vr.b.error(o);
                        case "info":
                            var u = Cc.a.info(o, t);
                            return a.dispatch(u);
                        case "pong":
                            var d = o.ts - Date.now()
                              , f = Cc.a.setTimeDifference(d, t);
                            return a.dispatch(f);
                        case "conf":
                            var b = Cc.a.conf(o, t);
                            return a.dispatch(b);
                        case "auth":
                            var p = Cc.a.authenticated(o);
                            return a.dispatch(p);
                        default:
                            return null
                        }
                    return null
                }
            };
            return function(e) {
                return function(c) {
                    return function() {
                        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!o)
                            return null;
                        var i = o.type
                          , s = o.payload
                          , l = void 0 === s ? {} : s
                          , u = o.meta
                          , d = void 0 === u ? {} : u
                          , f = d.isPublic ? "public" : "auth"
                          , b = e.getState()
                          , p = (0,
                        (d.isPublic ? Zc : Jc).getWebsocketConf)(b)
                          , m = p.flags
                          , h = p.wssUrl
                          , E = p.token
                          , v = p.key
                          , _ = p.secret;
                        switch (i) {
                        case rc.a.WS_REQUEST_CONNECT:
                            var O = l.autoAuth
                              , g = l.destination
                              , S = {
                                destination: void 0 === g ? h : g,
                                autoAuth: O,
                                store: e
                            }
                              , T = new window.WebSocket(h);
                            return a[f] = T,
                            T.onmessage = r(S, d),
                            T.onclose = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                  , t = arguments.length > 1 ? arguments[1] : void 0;
                                return function() {
                                    var n = e.store
                                      , a = Cc.a.disconnected(t);
                                    n.dispatch(a)
                                }
                            }(S, d),
                            T.onopen = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                  , t = arguments.length > 1 ? arguments[1] : void 0;
                                return function() {
                                    var n = e.store
                                      , a = e.autoAuth
                                      , r = Cc.a.connected(t);
                                    if (n.dispatch(r),
                                    a) {
                                        var c = Cc.a.auth();
                                        n.dispatch(c)
                                    }
                                }
                            }(S, d),
                            T.reconnect = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                  , t = arguments.length > 1 ? arguments[1] : void 0;
                                return function() {
                                    var n = e.store
                                      , r = e.autoAuth
                                      , c = e.destination
                                      , o = e.socketType;
                                    if (!Ps(a[o])) {
                                        var i = Cc.a.disconnect();
                                        n.dispatch(i)
                                    }
                                    var s = Cc.a.connect(c, r, t);
                                    n.dispatch(s)
                                }
                            }(S, d),
                            T;
                        case rc.a.WS_REQUEST_DISCONNECT:
                            var k = a[f];
                            return null != k && k.close(),
                            a[f] = null,
                            !0;
                        case rc.a.WS_REQUEST_SEND:
                            var j = a[f]
                              , y = o.payload;
                            if (Ps(j) || !y)
                                return !1;
                            var A = Ls(y);
                            return j.send(A);
                        case rc.a.WS_REQUEST_BROADCAST:
                            var w = l.info
                              , N = void 0 === w ? {} : w
                              , C = l.t
                              , I = void 0 === C ? "" : C
                              , x = l.mid
                              , R = void 0 === x ? null : x
                              , U = null
                              , L = a[f];
                            if (Ps(L) ? U = "Socket not connected" : Ds(L) ? 0 !== I.indexOf("ucm-") && (U = "Invalid broadcast type") : U = "Socket not authenticated",
                            null !== U) {
                                var P = i.split("-");
                                P.length > 0 && (P[3] = "res");
                                var D = Rs.a.wss([0, "n", [null, P.join("-"), R + 1, null, {
                                    error: U
                                }]], d);
                                return e.dispatch(D)
                            }
                            var M = Ls([0, "n", null, {
                                mid: R,
                                type: i,
                                info: N
                            }]);
                            return L.send(M);
                        case rc.a.WS_REQUEST_SUBMIT_ORDER:
                            var W = a[f];
                            if (Ps(W) || !Ds(W))
                                return !1;
                            var F = Ls([0, "on", null, o.payload]);
                            return W.send(F);
                        case rc.a.WS_REQUEST_AUTH:
                            var H = a[f];
                            if (Ps(H) || Ds(H))
                                return !1;
                            if (m) {
                                var B = Ls({
                                    event: "conf",
                                    flags: m
                                });
                                H.send(B)
                            }
                            if (E)
                                return Cc.a.authWithToken(t).then(function(e) {
                                    if (e.token) {
                                        var t = Ls(Object(Ve.a)({}, e, {
                                            filter: n
                                        }));
                                        H.send(t)
                                    }
                                }),
                                !0;
                            if (v && _) {
                                var K = o.authWithApiKeys(v, _);
                                return H.send(K),
                                !0
                            }
                            return !1;
                        case rc.a.WS_REQUEST_RECONNECT:
                            return a[f].reconnect(),
                            !0;
                        case rc.a.WS_DEBUG_REQ_GLOBAL:
                            if (window) {
                                var G = a[f];
                                window.__socket = G
                            }
                            return !0;
                        default:
                            return c(o)
                        }
                    }
                }
            }
        }
          , Ws = "authWsToken";
        var Fs = [Object(Cs.a)(Ee), Ms({
            getWsToken: function() {
                return Promise.resolve(function() {
                    if (!window)
                        return null;
                    var e = xe.a.parse(window.location.search).authToken;
                    return e && e.includes(";") ? De()(e.split(";")) : null
                }() || (window.localStorage ? localStorage.getItem(Ws) : null))
            }
        })]
          , Hs = function() {
            var e = Object(tr.b)({
                onError: function(e) {
                    console.error("Caught in root saga", e)
                }
            })
              , t = er.d
              , n = Object(er.e)(yc, {}, t(er.a.apply(void 0, Object($a.a)(Fs).concat([e]))));
            return e.run(Ns),
            n
        }()
          , Bs = function(e) {
            function t() {
                return Object(m.a)(this, t),
                Object(E.a)(this, Object(v.a)(t).apply(this, arguments))
            }
            return Object(_.a)(t, e),
            Object(h.a)(t, [{
                key: "render",
                value: function() {
                    var e = this.props.children;
                    return r.a.createElement(u.a, {
                        store: Hs
                    }, r.a.createElement(za.a, {
                        history: Ee
                    }, e))
                }
            }]),
            t
        }(r.a.PureComponent);
        window.__state = Hs.getState,
        window.__actions = Za.a,
        window.__dispatch = Hs.dispatch,
        window.addEventListener("load", function() {
            var e;
            Hs.dispatch(Ja.default.loadSettings({})),
            Hs.dispatch((e = i.h,
            {
                type: ve.UI_LOADED,
                meta: {
                    platform: e
                }
            })),
            Object(mt.a)(Hs)
        });
        var Ks = n(362)
          , Gs = n(363)
          , qs = n(364)
          , Vs = n(365);
        o.a.render(r.a.createElement(Bs, null, r.a.createElement(Qa, null)), document.getElementById("root")),
        console.log("platform: ".concat(i.i)),
        console.log("Frontend v.".concat(Ks.a)),
        console.log("bfxuilib v.".concat(Gs.a)),
        console.log("bfx-ui-components v.".concat(qs.a)),
        console.log("bfx-ui-components-bp v.".concat(Vs.a)),
        me.init().track()
    },
    62: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }),
        n.d(t, "a", function() {
            return c
        });
        var a = n(48);
        function r(e) {
            return {
                type: a.a.CHECK_AUTH_WITH_TOKEN,
                payload: e
            }
        }
        function c() {
            return {
                type: a.a.CHECK_AUTH_WITH_LOCAL_TOKEN
            }
        }
        t.c = {
            checkAuth: function(e) {
                return {
                    type: a.a.CHECK_AUTH,
                    payload: e
                }
            },
            checkAuthWithToken: r,
            checkAuthWithLocalToken: c,
            logout: function() {
                return {
                    type: a.a.LOGOUT
                }
            },
            showAuth: function() {
                return {
                    type: a.a.SHOW_AUTH
                }
            },
            hideAuth: function() {
                return {
                    type: a.a.HIDE_AUTH
                }
            },
            updateAuthStatus: function(e) {
                return {
                    type: a.a.UPDATE_AUTH_STATUS,
                    payload: e
                }
            }
        }
    },
    64: function(e, t, n) {
        "use strict";
        var a = n(196);
        n.d(t, "d", function() {
            return c
        }),
        n.d(t, "b", function() {
            return o
        }),
        n.d(t, "f", function() {
            return i
        }),
        n.d(t, "a", function() {
            return s
        }),
        n.d(t, "c", function() {
            return l
        }),
        n.d(t, "g", function() {
            return u
        }),
        n.d(t, "e", function() {
            return d
        }),
        n.d(t, "h", function() {
            return f
        });
        var r = function(e) {
            return e.tokenSales
        }
          , c = function(e) {
            return b(e) || []
        }
          , o = function(e) {
            return r(e).categories
        }
          , i = function(e) {
            return r(e).userTokenSale || {}
        }
          , s = function(e) {
            return r(e).balances
        }
          , l = function(e) {
            return r(e).tokenSale
        }
          , u = function(e) {
            return i(e).passedKycAt
        }
          , d = function(e) {
            return r(e).ui || {}
        }
          , f = function(e, t) {
            return c(e).find(function(e) {
                return e._id === t.match.params.id
            })
        }
          , b = function(e) {
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            var t = function(e) {
                return function(e) {
                    return e.tokinex || {}
                }(e).lang
            }(e);
            return Object(a.a)(r(e).tokenSales, t)
        }
    },
    65: function(e, t, n) {
        "use strict";
        t.a = {
            send: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.path
                  , n = void 0 === t ? "" : t
                  , a = e.method
                  , r = void 0 === a ? "post" : a
                  , c = e.params
                  , o = void 0 !== c && c
                  , i = e.body
                  , s = void 0 === i ? {} : i
                  , l = e.meta
                  , u = void 0 === l ? {} : l;
                return {
                    type: "REST",
                    payload: {
                        path: n,
                        params: o,
                        method: r,
                        body: s,
                        urlPrefix: e.urlPrefix
                    },
                    meta: u
                }
            },
            setAuthToken: function(e) {
                return {
                    type: "REST_AUTHTOKEN",
                    payload: e
                }
            }
        }
    },
    71: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return b
        });
        var a = n(15)
          , r = n(14)
          , c = n(18)
          , o = n(16)
          , i = n(17)
          , s = n(9)
          , l = n(0)
          , u = n.n(l)
          , d = n(12)
          , f = n(254);
        function b(e, t) {
            return function(n) {
                function l(e) {
                    var t;
                    return Object(a.a)(this, l),
                    (t = Object(c.a)(this, Object(o.a)(l).call(this, e))).state = {
                        collapsed: !0,
                        hasError: !1,
                        errorStack: null
                    },
                    t.onOpen = t.onOpen.bind(Object(s.a)(Object(s.a)(t))),
                    t.onClose = t.onClose.bind(Object(s.a)(Object(s.a)(t))),
                    t.generateStackTrace = t.generateStackTrace.bind(Object(s.a)(Object(s.a)(t))),
                    t
                }
                return Object(i.a)(l, n),
                Object(r.a)(l, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        var n = this.generateStackTrace(e);
                        this.setState({
                            hasError: !0,
                            errorStack: n
                        }),
                        console.error(e, t)
                    }
                }, {
                    key: "onOpen",
                    value: function() {
                        this.setState({
                            collapsed: !1
                        })
                    }
                }, {
                    key: "onClose",
                    value: function() {
                        this.setState({
                            collapsed: !0
                        })
                    }
                }, {
                    key: "generateStackTrace",
                    value: function(e) {
                        return e && e.stack ? e.stack.split("\n").map(function(e, t) {
                            return u.a.createElement("div", {
                                key: t
                            }, e)
                        }) : null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var n = this
                          , a = this.state
                          , r = a.hasError
                          , c = a.collapsed
                          , o = a.errorStack;
                        return r ? u.a.createElement(d.b, null, function(e) {
                            var a = e("error_boundary.component_error")
                              , r = e("error_boundary.suggestion_text")
                              , i = e("error_boundary.no_stack_trace")
                              , s = "".concat(t, ": ").concat(a);
                            return u.a.createElement("div", {
                                className: "bfx-red-text"
                            }, u.a.createElement(f.a, {
                                title: s,
                                onOpen: n.onOpen,
                                onClose: n.onClose,
                                closedByDefault: c,
                                persist: !1
                            }, u.a.createElement("div", {
                                className: "errorboundry__suggestion-container"
                            }, r), u.a.createElement("div", {
                                className: "show-smaller errorboundry__stacktrace-container"
                            }, o || i)))
                        }) : u.a.createElement(e, this.props)
                    }
                }]),
                l
            }(u.a.Component)
        }
    },
    72: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return l
        }),
        n.d(t, "a", function() {
            return u
        }),
        n.d(t, "c", function() {
            return f
        }),
        n.d(t, "b", function() {
            return b
        }),
        n.d(t, "d", function() {
            return p
        });
        var a = n(39)
          , r = n.n(a)
          , c = n(62)
          , o = n(33)
          , i = n(97)
          , s = n(40)
          , l = function() {
            localStorage.removeItem("apiKey"),
            localStorage.removeItem("apiSecret"),
            localStorage.removeItem("authToken"),
            localStorage.removeItem("authDate")
        }
          , u = function(e) {
            if (!window.location.href.match(/\?authToken=[a-zA-Z-]+/)) {
                var t = window.localStorage.getItem("apiKey")
                  , n = window.localStorage.getItem("apiSecret")
                  , a = window.localStorage.getItem("authToken")
                  , i = window.localStorage.getItem("authWsToken")
                  , s = window.localStorage.getItem("authDate")
                  , u = !1;
                if (s) {
                    var d = new Date(s);
                    if (d.setHours(d.getHours() + 1) < new Date)
                        return void l()
                }
                r()(t) || (u = !0,
                e.dispatch(o.a.setApiKey(t))),
                r()(n) || e.dispatch(o.a.setApiSecret(n)),
                r()(a) || (u = !0,
                e.dispatch(o.a.setAuthToken(a))),
                r()(i) || e.dispatch(o.a.setWsAuthToken(i)),
                u && e.dispatch(c.c.checkAuth())
            }
        }
          , d = function(e) {
            var t = e.baseUrl
              , n = e.actionPath
              , a = e.returnPath
              , r = ((void 0 === a ? i.c : a) || i.c).split("/");
            r.shift();
            var c = r.map(function(e, t) {
                return "seg".concat(t, "=").concat(e)
            });
            return "".concat(t, "/").concat(n, "?").concat(c.join("&"))
        }
          , f = function(e) {
            return d({
                baseUrl: s.c,
                actionPath: i.a,
                returnPath: e
            })
        }
          , b = function(e) {
            return d({
                baseUrl: s.b,
                actionPath: i.a,
                returnPath: e
            })
        }
          , p = function(e) {
            return d({
                baseUrl: s.c,
                actionPath: i.b,
                returnPath: e
            })
        }
    },
    79: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o
        }),
        n.d(t, "c", function() {
            return i
        }),
        n.d(t, "a", function() {
            return l
        });
        n(20),
        n(120),
        n(349),
        n(93),
        n(91),
        n(19),
        n(38);
        var a = n(239)
          , r = function(e) {
            return e.settings
        }
          , c = function(e) {
            return r(e).settings
        }
          , o = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , a = c(e)[t];
            return void 0 !== a ? a : n
        };
        function i(e, t) {
            var n = a.a[t];
            return o(e, t, n)
        }
        var s = function(e) {
            return o(e, "collapsed_widgets") || {}
        }
          , l = function(e, t) {
            return s(e)[t]
        }
    },
    86: function(e, t, n) {
        "use strict";
        var a = n(10)
          , r = n.n(a)
          , c = "label"
          , o = "sym"
          , i = "unitLabel"
          , s = "unitTooltip";
        n.d(t, "b", function() {
            return b
        }),
        n.d(t, "c", function() {
            return p
        }),
        n.d(t, "d", function() {
            return m
        }),
        n.d(t, "e", function() {
            return h
        }),
        n.d(t, "a", function() {
            return E
        }),
        n.d(t, "f", function() {
            return v
        });
        var l = function(e) {
            return r()(e, "currencies", {})
        }
          , u = function(e) {
            return l(e).currenciesInfo
        }
          , d = function(e) {
            return l(e).currencySymbolToCurrencyCodeMap
        };
        function f(e, t, n, a) {
            var c = r()(u(e), t);
            return c ? r()(c, a, n) : n
        }
        function b(e, t) {
            return f(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t, c)
        }
        function p(e, t) {
            return f(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t, o)
        }
        function m(e, t) {
            return f(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t, i)
        }
        function h(e, t) {
            return f(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t, s)
        }
        function E(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t;
            return r()(d(e), t, n)
        }
        function v(e) {
            return l(e).lastUpdateKey
        }
    },
    87: function(e, t, n) {
        "use strict";
        t.a = {
            WS_MESSAGE: "N_MESSAGE",
            RECV_BROADCAST: "RECV_BROADCAST",
            RECV_NOTIFICATION: "RECV_NOTIFICATION",
            STORE_HISTORICAL_NOTIFICATIONS: "STORE_HISTORICAL_NOTIFICATIONS",
            STORE_NOTIFICATION: "STORE_NOTIFICATION",
            STORE_BROADCAST: "STORE_BROADCAST",
            NOTIFY: "NOTIFY",
            NOTIFY_DESKTOP: "NOTIFY_DESKTOP",
            REQUEST_PERMISSIONS: "REQUEST_PERMISSIONS",
            LOAD_MORE: "LOAD_MORE",
            TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR"
        }
    },
    97: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }),
        n.d(t, "b", function() {
            return r
        }),
        n.d(t, "c", function() {
            return c
        });
        var a = "token_sales_auth"
          , r = "token_sales_signup"
          , c = "/token-sales"
    }
}, [[383, 6, 7]]]);

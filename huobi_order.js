(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    330: function(t, e, s) {
        "use strict";
        s.d(e, "a", function() {
            return n
        }),
        s.d(e, "b", function() {
            return r
        });
        s(19);
        var i = s(4)
          , a = s.n(i)
          , n = function() {
            return {
                homepage: {
                    t: "比特币_以太坊交易_数字货币交易平台 | 火币Global",
                    d: "火币全球站是全球领先的数字资产交易平台,提供比特币BTC,以太坊ETH,莱特币LTC,柚子EOS等上百种数字货币的交易及投资，包含了币币交易、法币交易、杆杆交易及合约交易等版块。",
                    k: "数字资产交易平台,区块链资产交易平台,比特币行情,火币Global"
                },
                exchange: {
                    t0: "Huobi Global",
                    t: "$close $symbol | 火币Global",
                    d: "Exchange/Margin page by Huobi Global, includes real-time transaction price, tradingview, order history, and market trades, providing professional, safe and quick transaction.",
                    k: "currency transaction,Huobi Global"
                },
                globalExchange: {
                    t: " 火币Global",
                    d: "安全快速交易，火币Global(PRO)提供上百种数字货币的实时价格，以及K线、深度图、实时成交数据、详细资料，并有便捷的限价和市价挂单交易。",
                    k: ",火币Global"
                },
                orderbooks: {
                    t: "币币交易买卖盘 | 火币Global",
                    d: "火币Global币币交易买卖盘实时动态的情况。",
                    k: "币币交易买卖盘,火币Global"
                },
                login: {
                    t: "Log In | Huobi Global",
                    d: "Log in Huobi Pro",
                    k: "Log in, Huobi Pro"
                },
                register: {
                    t: "Sign Up | Huobi Global",
                    d: "Sign up Huobi Pro",
                    k: "Sign up, Huobi Pro"
                },
                resetPWD: {
                    t: "Reset password | Huobi Global",
                    d: "Reset password of Huobi Pro",
                    k: "Reset password, Huobi, Pro"
                },
                orders: {
                    t: ["当前委托币种 | 火币Global", "委托历史", "成交明细"]
                }
            }
        };
        function r() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "homepage"
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , s = a()({}, n()[t]);
            return e.length > 0 && e.forEach(function(t) {
                s[t.type] = s[t.type].replace("$".concat(t.key), t.value || "")
            }),
            s
        }
    },
    336: function(t, e, s) {
        "use strict";
        var i = {
            name: "Mod"
        }
          , a = (s(383),
        s(5))
          , n = Object(a.a)(i, function() {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
                staticClass: "mod"
            }, [this._t("head", [this._v("---")]), this._v(" "), this._t("body", [this._v("...")])], 2)
        }, [], !1, null, null, null);
        e.a = n.exports
    },
    338: function(t, e, s) {},
    339: function(t, e, s) {},
    340: function(t, e, s) {},
    341: function(t, e, s) {},
    348: function(t, e, s) {
        "use strict";
        s.d(e, "c", function() {
            return o
        }),
        s.d(e, "b", function() {
            return c
        }),
        s.d(e, "a", function() {
            return l
        });
        s(40);
        var i = s(4)
          , a = s.n(i)
          , n = s(3)
          , r = s(140)
          , o = {};
        function c(t) {
            var e = this;
            if (!t.subbed) {
                var s = (t.tick || t.data || []).reduce(function(t, s) {
                    var i = s.symbol
                      , n = s.close
                      , r = l(s);
                    return t[i] = a()({}, s, r),
                    e.$store.state.exchange.symbolCode === i && e.$store.commit("exchange/SET_TICKER", a()({}, e.$store.state.exchange.ticker, {
                        close: n
                    }, r)),
                    t
                }, {});
                Object.assign(o, s),
                this.$store.commit("exchange/SET_TS"),
                r.a.setTotal(o),
                r.a.setEstimate(s)
            }
        }
        function l(t) {
            var e = t.close
              , s = t.open
              , i = -1 / 0
              , a = "---"
              , r = "";
            return e && s && (i = Object(n.e)(Object(n.b)(Object(n.g)(e, s), s), 100),
            a = Object(n.c)(i, 2)),
            i > 0 ? (a = "+".concat(a),
            r = "up") : i < 0 && i !== -1 / 0 && (r = "down"),
            {
                rate: i,
                rateText: a = "".concat(a, "%"),
                rateCluss: r
            }
        }
    },
    361: function(t, e, s) {
        "use strict";
        s(329);
        var i = {
            name: "PaginationById",
            props: {
                type: {
                    type: String,
                    default: ""
                },
                alwayShow: {
                    type: Boolean,
                    default: function() {
                        return !1
                    }
                },
                init: {
                    type: Boolean,
                    default: function() {
                        return !0
                    }
                },
                pageSize: {
                    type: Number,
                    default: function() {
                        return 10
                    }
                },
                originData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                className: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: function() {
                        return !1
                    }
                },
                paginationType: {
                    type: String,
                    default: ""
                },
                hideText: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    fromId: null,
                    currentPage: 0,
                    firstOrderId: null
                }
            },
            computed: {
                paginationShow: function() {
                    return "" === this.type ? this.currentPage > 0 || !(this.originData.length < this.pageSize + 1) : !(this.originData.length < this.pageSize && 0 === this.currentPage)
                },
                prevBtnDisabled: function() {
                    return 0 === this.currentPage || this.loading
                },
                nextBtnDisabled: function() {
                    return "" === this.type ? this.originData.length < this.pageSize + 1 || this.loading : this.originData.length < this.pageSize || this.loading
                }
            },
            watch: {
                init: function(t) {
                    t && (this.currentPage = 0)
                },
                originData: function(t) {
                    t.length > 0 ? this.firstOrderId = t[0].id : this.currentPage > 0 && this.eventPage("prev", !0)
                }
            },
            methods: {
                eventPage: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , s = this.pageSize;
                    t && "next" !== t ? this.currentPage > 0 && (this.currentPage -= 1,
                    "" === this.type && (this.fromId = this.firstOrderId)) : (this.currentPage += 1,
                    "" === this.type && (this.fromId = this.originData[s].id)),
                    0 === this.currentPage && (t = null,
                    this.fromId = null),
                    this.$emit("pagination", {
                        direct: t,
                        currentPage: this.currentPage,
                        fromId: this.fromId || "",
                        focus: e
                    })
                },
                resetPage: function() {
                    this.currentPage = 0,
                    this.eventPage("reset")
                }
            }
        }
          , a = (s(389),
        s(5))
          , n = Object(a.a)(i, function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "pagination-box"
            }, [(t.alwayShow || t.paginationShow) && "en-us" === t.paginationType ? s("div", {
                staticClass: "pagination-button",
                class: t.className
            }, [s("button", {
                staticClass: "page-btn prev",
                attrs: {
                    disabled: t.prevBtnDisabled || t.disabled,
                    type: "text"
                },
                on: {
                    click: function(e) {
                        return t.eventPage("prev")
                    }
                }
            }, [s("i")]), t._v(" "), s("button", {
                staticClass: "page-btn next",
                attrs: {
                    disabled: t.nextBtnDisabled || t.disabled,
                    type: "text"
                },
                on: {
                    click: function(e) {
                        return t.eventPage("next")
                    }
                }
            }, [s("i")])]) : t._e(), t._v(" "), (t.alwayShow || t.paginationShow) && "en-us" !== t.paginationType ? s("div", {
                staticClass: "pagination-button-global",
                class: t.className
            }, [s("button", {
                staticClass: "page-btn prev",
                attrs: {
                    disabled: t.prevBtnDisabled || t.disabled,
                    type: "text"
                },
                on: {
                    click: function(e) {
                        return t.eventPage("prev")
                    }
                }
            }, [t.hideText ? s("i") : s("span", [t._v("上一页")])]), t._v(" "), s("button", {
                staticClass: "page-btn next",
                attrs: {
                    disabled: t.nextBtnDisabled || t.disabled,
                    type: "text"
                },
                on: {
                    click: function(e) {
                        return t.eventPage("next")
                    }
                }
            }, [t.hideText ? s("i") : s("span", [t._v("下一页")])])]) : t._e()])
        }, [], !1, null, "692f84e8", null);
        e.a = n.exports
    },
    362: function(t, e, s) {
        "use strict";
        s(9);
        var i = s(1)
          , a = s.n(i)
          , n = {
            name: "DialogSetting",
            data: function() {
                return {
                    test: !0
                }
            },
            props: {
                text: {
                    type: String,
                    default: ""
                },
                btnStyle: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                confirmCallback: {
                    type: Function,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                isGlobal: function() {
                    return "en-us" !== this.$store.state.locale
                }
            },
            methods: {
                close: function() {
                    var t = a()(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    this.confirmCallback("success"),
                                    this.$emit("close");
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }
        }
          , r = (s(391),
        s(392),
        s(5))
          , o = Object(r.a)(n, function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "dialog cancel-order-dialog",
                class: {
                    global: t.isGlobal
                },
                attrs: {
                    "growing-ignore": "true"
                }
            }, [s("div", {
                staticClass: "dialog-content"
            }, [t._v("\n        " + t._s(t.text) + "\n    ")]), t._v(" "), s("div", {
                staticClass: "dialog-submit"
            }, [s("button", {
                staticClass: "cancel",
                style: t.btnStyle,
                on: {
                    click: function(e) {
                        return t.$emit("close")
                    }
                }
            }, [t._v("\n            取消\n        ")]), t._v(" "), s("button", {
                ref: "submit",
                staticClass: "submit",
                style: t.btnStyle,
                on: {
                    click: t.close
                }
            }, [t._v("\n            确认\n        ")])])])
        }, [], !1, null, "4463f0c4", null);
        e.a = o.exports
    },
    383: function(t, e, s) {
        "use strict";
        var i = s(338);
        s.n(i).a
    },
    384: function(t, e, s) {},
    385: function(t, e, s) {},
    386: function(t, e, s) {},
    387: function(t, e, s) {},
    388: function(t, e, s) {},
    389: function(t, e, s) {
        "use strict";
        var i = s(339);
        s.n(i).a
    },
    390: function(t, e, s) {},
    391: function(t, e, s) {
        "use strict";
        var i = s(340);
        s.n(i).a
    },
    392: function(t, e, s) {
        "use strict";
        var i = s(341);
        s.n(i).a
    },
    394: function(t, e, s) {},
    395: function(t, e, s) {},
    396: function(t, e, s) {},
    397: function(t, e, s) {},
    398: function(t, e, s) {},
    464: function(t, e, s) {
        "use strict";
        var i = {
            name: "Tooltips",
            props: {
                content: {
                    type: String,
                    default: "测试测试测试"
                },
                showType: {
                    type: String,
                    default: "float"
                }
            },
            data: function() {
                return {
                    parent: null,
                    showClass: ""
                }
            },
            mounted: function() {
                this.parentNode ? this.parent = this.parentNode : this.parent = this.$refs.tooltip.parentElement
            },
            methods: {
                enter: function() {
                    var t = this.$refs
                      , e = t.tooltip
                      , s = t.content;
                    e.offsetTop - this.parent.scrollTop - 46 < s.offsetHeight ? this.showClass = "down-tips" : this.showClass = "up-tips"
                },
                leave: function() {}
            }
        }
          , a = (s(515),
        s(5))
          , n = Object(a.a)(i, function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("section", {
                ref: "tooltip",
                staticClass: "hbg-tooltips",
                class: this.showClass,
                on: {
                    mouseenter: this.enter,
                    mouseleave: this.leave
                }
            }, [this._t("default"), this._v(" "), e("div", {
                ref: "content",
                staticClass: "hbg-tooltips-content"
            }, [this._t("content")], 2)], 2)
        }, [], !1, null, "25b5f253", null);
        e.a = n.exports
    },
    484: function(t, e, s) {
        "use strict";
        s(9);
        var i = s(1)
          , a = s.n(i)
          , n = s(4)
          , r = s.n(n)
          , o = s(336)
          , c = (s(40),
        s(66),
        s(8))
          , l = s.n(c)
          , u = (s(50),
        s(114),
        s(23),
        s(19),
        s(34),
        s(38),
        s(11))
          , h = s(532)
          , g = s.n(h)
          , d = s(3)
          , p = s(140)
          , m = s(14)
          , v = s(15)
          , C = s(7)
          , f = s(6);
        var I, b = function() {
            var t, e, s, i, a, n, r, o, c, l, u, h, g = {};
            function d(t, e, s) {
                (document.addEventListener ? function() {
                    t.addEventListener(e, s, !1)
                }
                : function() {
                    t.attachEvent("on" + e, s)
                }
                )(t, e, s)
            }
            function p(t) {
                return {
                    x: t.pageX || t.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft),
                    y: t.pageY || t.clientY + (document.documentElement.scrollTop || document.body.scrollTop)
                }
            }
            function m(t, e) {
                if (t < 0 && (t = 0),
                t > 100 && (t = 100),
                h !== t)
                    for (var s in h = t,
                    f(t),
                    g)
                        "function" == typeof g[s] && g[s](t, e)
            }
            function v(t, e) {
                m(t, e || "data")
            }
            function C(t) {
                m(100 * t / l, "event")
            }
            function f(e, i) {
                i && w(),
                t.style.left = e * l / 100 - (u ? a / 2 : 0) + "px",
                t.x = ~~(e * l / 100),
                s.innerHTML = e.toFixed(0) + "%"
            }
            function I(e) {
                n = 1,
                o = p(e).x,
                c = t.x,
                w(),
                t.classList.add("active")
            }
            function b(e) {
                _(e, 1),
                n = 0,
                t.classList.remove("active")
            }
            function _(t, e) {
                n && (function(t) {
                    t && t.stopPropagation ? (t.stopPropagation(),
                    t.preventDefault()) : (window.event.cancelBubble = !0,
                    window.event.returnValue = !1)
                }(t),
                r && !e || (r = 1,
                setTimeout(function() {
                    r = 0
                }, 20),
                C(c + p(t).x - o)))
            }
            function A(t) {
                var s = p(t).x
                  , i = function(t, e) {
                    var s, i, a, n = t, r = 0, o = 0;
                    if (t.nodeName) {
                        for (; n && ("body" == n.nodeName.toLowerCase() && (i = 1),
                        a = n.currentStyle ? n.currentStyle : document.defaultView.getComputedStyle(n),
                        r += n.offsetLeft + (parseInt(a.borderLeftWidth) ? parseInt(a.borderLeftWidth) : 0) - (i ? 0 : n.scrollLeft),
                        o += n.offsetTop + (parseInt(a.borderTopWidth) ? parseInt(a.borderTopWidth) : 0) - (i ? 0 : n.scrollTop),
                        s = n.offsetParent ? n.offsetParent : n,
                        !(e & e === (n = n.offsetParent))); )
                            ;
                        return {
                            x: r,
                            y: o,
                            element: n,
                            forefather: e || s
                        }
                    }
                }(e).x;
                w(),
                C(s - i - (u ? a : 0) / 2)
            }
            function w() {
                a = t.offsetWidth,
                l = e.offsetWidth - (u ? a : 0)
            }
            return {
                bindCallback: function(t, e) {
                    g[t] = e
                },
                unbindCallback: function(t) {
                    delete g[t]
                },
                redrag: v,
                init: function(n, r) {
                    i = "string" == typeof n ? document.querySelector("#" + n.replace("#", "")) : n,
                    t = document.createElement("i"),
                    e = document.createElement("i"),
                    s = document.createElement("em"),
                    t.className = "drag-bar",
                    e.className = "drag-track",
                    t.appendChild(s),
                    i.appendChild(t),
                    i.appendChild(e),
                    u = r,
                    a = t.offsetWidth,
                    l = e.offsetWidth - (u ? a : 0),
                    d(t, "mousedown", I),
                    d(e, "click", A),
                    d(document, "mousemove", _),
                    d(document, "mouseup", b),
                    v(0)
                },
                setInit: w,
                resetPos: f
            }
        }, _ = s(75).default;
        I = _;
        var A = {
            1: "diamond",
            2: "gold"
        }
          , w = {
            name: "SinglePanel",
            props: {
                type: {
                    type: String,
                    default: "limit"
                },
                direct: {
                    type: String,
                    default: "buy"
                }
            },
            data: function() {
                return {
                    price: "",
                    amount: "",
                    priceClass_: "",
                    amountClass_: "",
                    stopPrice: "",
                    stopPriceClass_: "",
                    cooldown: 0,
                    activeElement: null,
                    baseBalance: 0,
                    quoteBalance: 0,
                    slider: 0,
                    disabledAction: !1,
                    primeRoundOver: !1,
                    priceDisable: !1,
                    priceIsFilled: !1
                }
            },
            computed: r()({
                isGlobal: function() {
                    return "en-us" !== this.$store.state.locale
                },
                showPriceEstimate: function() {
                    return "none" !== this.rateName && this.exchangeRate && "market" !== this.type && this.priceEstimateText ? "show" : ""
                },
                priceEstimateText: function() {
                    var t = this.price
                      , e = this.quote
                      , s = p.a.getEstimate(e, "usdt", t);
                    return this.exchangeRate && s ? "".concat(Object(d.d)(Object(d.e)(s, this.exchangeRate), this.rateFix), " ").concat(this.rateName) : ""
                },
                showStopPriceEstimate: function() {
                    return "none" !== this.rateName && this.exchangeRate && "market" !== this.type && this.stopPriceEstimateText ? "show" : ""
                },
                stopPriceEstimateText: function() {
                    var t = this.stopPrice
                      , e = this.quote
                      , s = p.a.getEstimate(e, "usdt", t);
                    return this.exchangeRate && s ? "".concat(Object(d.d)(Object(d.e)(s, this.exchangeRate), this.rateFix), " ").concat(this.rateName) : ""
                },
                orderType: function() {
                    return "".concat(this.direct, "-").concat(this.type)
                },
                total: function() {
                    var t = Object(d.c)(Object(d.e)(this.price, this.amount), this.ttp);
                    return isNaN(1 * t) ? "---" : t
                },
                ttp: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    return t[e] && t[e].trade_total_precision || 0
                },
                avaAmount: function() {
                    if (!this.isLogin)
                        return 0;
                    var t = 0;
                    t = this.isPrimeNormal ? Math.min(this.quoteBalance, this.primeUserLimit) : this.quoteBalance;
                    var e = "buy" === this.direct ? t : this.baseBalance
                      , s = e || 0;
                    return "buy-limit" !== this.orderType && "buy-stop-limit" !== this.orderType || (s = 1 * this.price ? Object(d.b)(e, this.price) : 0),
                    Object(d.c)(s, this.ap)
                },
                ap: function() {
                    return "buy-market" !== this.orderType ? this.tap : this.ttp
                },
                baseSP: function() {
                    var t = this.currencysObj
                      , e = this.base;
                    return t[e] && t[e].show_precision || 0
                },
                quoteSP: function() {
                    var t = this.currencysObj
                      , e = this.quote;
                    return t[e] && t[e].show_precision || 0
                },
                sp: function() {
                    return "buy" === this.direct ? this.quoteSP : this.baseSP
                },
                maxAmount: function() {
                    var t = this.ecd
                      , e = t.lomlt
                      , s = t.mbomlt
                      , i = t.msomlt
                      , a = this.avaAmount
                      , n = this.primeUserLimit
                      , r = this.isPrimeNormal
                      , o = this.ap
                      , c = 1 * a == 0 ? 0 : 1 / 0;
                    return "limit" === this.type || "stop-limit" === this.type ? Math.min(a, e) || c : "market" === this.type ? "buy" === this.direct ? r ? n ? Object(d.c)(Math.min(a, s, n), o) || c : 0 : Math.min(a, s) || c : Math.min(a, i) || c : void 0
                },
                minAmount: function() {
                    var t = this.isPrimePO
                      , e = this.type
                      , s = this.direct
                      , i = this.ecd
                      , a = this.price
                      , n = this.tap
                      , r = i.lomgt
                      , o = i.mbomgt
                      , c = i.msomgt;
                    return "limit" === e ? t && "buy" === s && 1 * a ? Object(d.c)(Object(d.b)(10, a), n, 2) : r : "market" === e ? "buy" === s ? o : c : void 0
                },
                tradeBalance: function() {
                    return "buy" === this.direct ? this.quoteBalance : this.baseBalance
                },
                limitPercent: function() {
                    var t = this.ecd
                      , e = t.blmlt
                      , s = t.slmgt;
                    return "buy" === this.direct ? "".concat(Object(d.c)(Object(d.e)(e, 100), 0), "%") : "".concat(Object(d.c)(Object(d.e)(s, 100), 0), "%")
                },
                tpp: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    return t[e] && t[e].trade_price_precision || 0
                },
                tap: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    return t[e] && t[e].trade_amount_precision || 0
                },
                priceClass: {
                    get: function() {
                        return this.priceClass_
                    },
                    set: function(t) {
                        var e = this;
                        this.priceClass_ = t,
                        clearTimeout(this.priceT),
                        this.priceT = setTimeout(function() {
                            e.priceClass_.includes("error") && (e.priceClass_ = "error")
                        }, 2e3)
                    }
                },
                stopPriceClass: {
                    get: function() {
                        return this.stopPriceClass_
                    },
                    set: function(t) {
                        var e = this;
                        this.stopPriceClass_ = t,
                        clearTimeout(this.stopPriceT),
                        this.stopPriceT = setTimeout(function() {
                            e.stopPriceClass_.includes("error") && (e.stopPriceClass_ = "error")
                        }, 2e3)
                    }
                },
                amountClass: {
                    get: function() {
                        return this.amountClass_
                    },
                    set: function(t) {
                        var e = this;
                        this.amountClass_ = t,
                        clearTimeout(this.amountT),
                        this.amountT = setTimeout(function() {
                            e.amountClass_.includes("error") && (e.amountClass_ = "error")
                        }, 2e3)
                    }
                },
                buttonText: function() {
                    var t = "";
                    return this.isGlobal || (t = "buy" === this.direct ? "Buy " : "Sell ",
                    t += "margin" === this.exchangeType ? "buy" === this.direct ? "Long " : "Short " : ""),
                    this.isGlobal && (t = "buy" === this.direct ? "买入" : "卖出",
                    t += "margin" === this.exchangeType ? "buy" === this.direct ? "(做多)" : "(做空)" : ""),
                    t
                },
                stopText: function() {
                    return this.isGlobal ? "触发价" : "STOP"
                },
                priceText: function() {
                    return this.isGlobal ? "buy" === this.direct ? "买入价" : "卖出价" : "stop-limit" === this.type ? "LIMIT" : "PRICE"
                },
                amountText: function() {
                    return this.isGlobal && "market" === this.type && "buy" === this.direct ? "交易额" : this.isGlobal ? "buy" === this.direct ? "买入量" : "卖出量" : "AMOUNT"
                },
                totalText: function() {
                    return this.isGlobal ? "交易额" : "Total:"
                },
                bestPriceText: function() {
                    return this.isGlobal ? "buy" === this.direct ? "以市场上最优价格买入" : "以市场上最优价格卖出" : "The best market price"
                },
                showDepositAction: function() {
                    return this.isLogin && "exchange" === this.exchangeType
                },
                levelClass: function() {
                    return A[this.level] || "hide"
                },
                primeAmountText: function() {
                    var t = this.primeUserLimit;
                    return "Prime交易额度为： ".concat(t || 0, " HT")
                },
                showPrimeIcons: function() {
                    return this.isPrimeNormal && "buy" === this.direct
                }
            }, Object(u.b)("exchange", ["isPrime", "isPrimePO", "isPrimeNormal", "BASE", "QUOTE", "primeLimitOrderPrice", "ecd", "primeRound"]), Object(u.b)("user", ["isSubAccount"]), Object(u.b)("orderBooks", ["filterDepthFirst"]), Object(u.c)(["rateName", "rateFix", "exchangeRate", "symbolsObj", "currencysObj", "primeSliderEnable"]), Object(u.c)("exchange", ["base", "quote", "symbolCode", "exchangeType", "ticker", "primeStatus", "primeUserInfo", "primeUserLimit"]), Object(u.c)("user", ["isLogin", "userInfo", "level"]), Object(u.c)("orderBooks", ["orderBooks"])),
            methods: {
                t: function(t) {
                    return t
                },
                ts: function(t) {
                    for (var e = this, s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
                        i[a - 1] = arguments[a];
                    return i.forEach(function(s) {
                        t = e.t(t).replace("%s", Object(d.f)(s))
                    }),
                    t
                },
                createOrder: function() {
                    var t = this
                      , e = this.symbolCode
                      , s = this.price
                      , i = this.amount
                      , a = this.orderType
                      , n = this.type
                      , r = this.cooldown
                      , o = this.stopPrice
                      , c = this.ticker
                      , l = this.tpp
                      , u = this.isPrime
                      , h = this.isPrimeNormal
                      , g = this.primeUserInfo
                      , m = this.primeStatus
                      , v = "margin" === this.exchangeType
                      , C = p.a.getAccount(v ? e : "spot")
                      , b = v ? "margin-web" : "web"
                      , _ = {
                        stopPrice: o,
                        operator: c.close > o ? "lte" : "gte",
                        price: s,
                        amount: i,
                        accountId: C,
                        source: b,
                        type: a,
                        symbol: e
                    };
                    if (!r)
                        if ("stop-limit" !== n || 1 * o)
                            if (this.priceValidator(s),
                            "market" === n || 1 * s)
                                if ("market" !== n && this.priceClass) {
                                    this.priceValidator(s);
                                    var A = this.$el.querySelector("[name=price]");
                                    A && A.focus()
                                } else if (this.amountValidator(i),
                                1 * i)
                                    if (this.amountClass) {
                                        this.amountValidator(i);
                                        var w = this.$el.querySelector("[name=amount]");
                                        w && w.focus()
                                    } else {
                                        if ("stop-limit" === n)
                                            if (Object(d.c)(s, l) === Object(d.c)(o, l))
                                                return void I.error("触发价不能等于委托价");
                                        if (C) {
                                            if (u) {
                                                if (!g)
                                                    return void I.error("网络繁忙");
                                                if (g && !g.qualify)
                                                    return void I.error("未获得活动资格");
                                                if (1 !== m.state && h)
                                                    return void I.error("交易未开始")
                                            }
                                            this.cooldown = 0;
                                            var M = {};
                                            for (var y in "market" === this.type && (_.price = void 0),
                                            "stop-limit" !== this.type && (_.stopPrice = void 0,
                                            _.operator = void 0),
                                            _)
                                                M[Object(f.o)(y)] = _[y];
                                            u ? (this.primePlaceOrderEvent(),
                                            this.primeChecker(_)) : this.comfirmDialog ? this.orderConfirm(function() {
                                                return t.placeOrder(M)
                                            }, M) : this.placeOrder(M)
                                        }
                                    }
                                else {
                                    this.amountClass = "error blank";
                                    var D = this.$el.querySelector("[name=amount]");
                                    D && D.focus()
                                }
                            else {
                                this.priceClass = "error blank";
                                var x = this.$el.querySelector("[name=price]");
                                x && x.focus()
                            }
                        else {
                            this.stopPriceClass = "error blank";
                            var T = this.$el.querySelector("[name=stop-price]");
                            T && T.focus()
                        }
                },
                primePlaceOrderEvent: function() {
                    var t = this.direct
                      , e = this.isGlobal
                      , s = this.primeRound
                      , i = "PM_WEB_PRIME_".concat(t, "_CLICK").toUpperCase()
                      , a = e ? "币币交易页" : "英文交易页"
                      , n = s;
                    this.$store.dispatch("gio/track", [i, {
                        PM_WEB_WINDOWS_POP_PAGE: a,
                        PM_WEB_PRIME_TIME: n
                    }])
                },
                placeOrder: function() {
                    var t = a()(regeneratorRuntime.mark(function t(e) {
                        var s, i, a;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    C.f.placeOrder(e, this);
                                case 2:
                                    if ((s = t.sent).success ? (I.success("委托成功"),
                                    m.a.pub("placeOrder.done"),
                                    p.a.reload()) : (i = "API Error" === s.message ? "网络繁忙" : s.message,
                                    I.error(i)),
                                    this.resetAmount(),
                                    !this.isPrime) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 8,
                                    this.$store.dispatch("exchange/getPrimeUserLimit", 1);
                                case 8:
                                    (a = t.sent) && I.error(a);
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                inputSetter: function(t, e) {
                    var s = t.replace(/[。\.]+/g, ".").trim();
                    return isNaN(1 * s) || s.toString().includes("-") || s.toString().match(/^00/) ? [, !1] : [s, t === s || !t]
                },
                priceSetter: function(t) {
                    var e = t.target
                      , s = this.inputSetter(e.value)
                      , i = l()(s, 2)
                      , a = i[0]
                      , n = i[1];
                    Object(f.i)(a) > this.tpp && 1 * Object(d.c)(a, this.tpp) && (a = Object(d.c)(a, this.tpp),
                    e.value = a),
                    void 0 !== a && n && Object(f.i)(a) <= this.tpp ? (this.price = a,
                    0 === this.tpp && (this.price = this.price.replace(".", ""))) : (e.value = n ? this.price : a || this.price,
                    0 === this.tpp && (e.value = e.value.replace(".", "")),
                    this.price = e.value),
                    this.priceClass = "active",
                    this.amountClass = "",
                    this.amountValidator(this.amount, 1),
                    this.priceValidator(this.price),
                    this.resetDrag(this.amount, "changePrice")
                },
                stopPriceSetter: function(t) {
                    var e = t.target
                      , s = this.inputSetter(e.value)
                      , i = l()(s, 2)
                      , a = i[0]
                      , n = i[1];
                    Object(f.i)(a) > this.tpp && 1 * Object(d.c)(a, this.tpp) && (a = Object(d.c)(a, this.tpp),
                    e.value = a),
                    void 0 !== a && n && Object(f.i)(a) <= this.tpp ? (this.stopPrice = a,
                    0 === this.tpp && (this.stopPrice = this.stopPrice.replace(".", ""))) : (e.value = n ? this.stopPrice : a || this.stopPrice,
                    0 === this.tpp && (e.value = e.value.replace(".", "")),
                    this.stopPrice = e.value),
                    this.stopPriceClass = "active",
                    this.priceClass = ""
                },
                amountSetter: function(t) {
                    var e = t.target
                      , s = this.inputSetter(e.value)
                      , i = l()(s, 2)
                      , a = i[0]
                      , n = i[1];
                    Object(f.i)(a) > this.ap && 1 * Object(d.c)(a, this.ap) && (a = Object(d.c)(a, this.ap),
                    e.value = a),
                    void 0 !== a && n && Object(f.i)(a) <= this.ap ? (this.amount = a,
                    0 === this.ap && (this.amount = this.amount.replace(".", ""))) : (e.value = n ? this.amount : a || this.amount,
                    0 === this.ap && (e.value = e.value.replace(".", "")),
                    this.amount = e.value),
                    this.amountClass = "active",
                    this.priceClass = "",
                    this.priceValidator(this.price),
                    this.amountValidator(this.amount),
                    this.resetDrag(this.amount)
                },
                resetDrag: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "action"
                      , s = 1 * t && 1 * this.maxAmount ? t / this.maxAmount * 100 : 0;
                    this.range.redrag(s || 0, e)
                },
                priceValidator: function(t) {
                    if (this.isLogin) {
                        var e = this.direct
                          , s = this.ticker
                          , i = this.ecd
                          , a = this.type
                          , n = this.stopPrice
                          , r = i.blmlt
                          , o = i.slmgt
                          , c = ("stop-limit" !== a ? s : {
                            close: n
                        }).close;
                        if (("stop-limit" !== a || n) && c)
                            return "buy" === e ? 1 * t > 1 * Object(d.e)(r, c) && (this.priceClass = "error blmlt") : 1 * t && 1 * t < 1 * Object(d.e)(o, c) && (this.priceClass = "error slmgt"),
                            !this.priceClass.includes("error")
                    }
                },
                amountValidator: function(t, e) {
                    if (this.isLogin) {
                        var s = this.type
                          , i = this.direct
                          , a = this.maxAmount
                          , n = this.ecd
                          , r = this.minAmount
                          , o = n.mbomgt
                          , c = n.msomgt
                          , l = 1 * t || 0;
                        return "limit" === s || "stop-limit" === s ? (l && l < r && (this.amountClass = "error lomgt"),
                        l > a && (this.amountClass = "error lomlt")) : "market" === s && ("buy" === i ? (l && l < o && (this.amountClass = "error mbomgt"),
                        l > a && (this.amountClass = "error mbomlt")) : (l && l < c && (this.amountClass = "error msomgt"),
                        l > a && (this.amountClass = "error msomlt"))),
                        e && this.amountClass.includes("error") && (this.amountClass = "error"),
                        !this.amountClass.includes("error")
                    }
                },
                inputFocus: function(t) {
                    this["".concat(t, "Class")].includes("error") || (this["".concat(t, "Class")] = "active"),
                    "stopPrice" === t && this.priceClass.includes("error") && (this.priceClass = "error")
                },
                inputBlur: function(t) {
                    this["".concat(t, "Class")].includes("error") || (this["".concat(t, "Class")] = "")
                },
                setAmount: function(t) {
                    var e = this.ap
                      , s = this.amount
                      , i = this.isLogin
                      , a = this.avaAmount
                      , n = this.maxAmount;
                    n = n || a,
                    i && (this.amount = Object(d.c)(Object(d.e)(n, t), e),
                    this.amountClass = "",
                    this.amountValidator(s, 1))
                },
                toLogin: function() {
                    var t = this.$store.state.locale;
                    location.href = "/".concat(t, "/login/?backUrl=").concat(this.$route.fullPath)
                },
                toRegister: function() {
                    var t = this.$store.state.locale;
                    location.href = "/".concat(t, "/register/?backUrl=").concat(this.$route.fullPath)
                },
                initFillPrice: function() {
                    m.a.sub("fillPrice.click", this.fillPrice, !1)
                },
                fillPrice: function(t) {
                    if (!this.isPrimePO) {
                        var e = (t.querySelector(".price") || {}).innerText
                          , s = void 0 === e ? "" : e;
                        "---" !== s && (1 * s && (this.price = s),
                        this.priceClass = "",
                        this.priceValidator(this.price),
                        this.resetDrag(this.amount, "changePrice"))
                    }
                },
                initUpdateBalance: function() {
                    m.a.sub("balance.done, marginBalance.done", this.updateBalance)
                },
                updateBalance: function() {
                    this.baseBalance = p.a.get(this.base, "trade", "margin" === this.exchangeType && this.symbolCode),
                    this.quoteBalance = p.a.get(this.quote, "trade", "margin" === this.exchangeType && this.symbolCode),
                    this.isPrimeNormal && (this.quoteBalance = Math.min(this.quoteBalance, this.primeUserLimit)),
                    this.amountClass = "",
                    this.amountValidator(this.amount, 1)
                },
                initOrderConfirm: function() {
                    var t, e = this;
                    m.a.subOnce("kvGet.ready", (t = a()(regeneratorRuntime.mark(function t(i) {
                        var a, n;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if ("ORDER_CONFIRM" !== i) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3,
                                    s.e(42).then(s.bind(null, 686));
                                case 3:
                                    a = t.sent,
                                    n = a.default,
                                    e.comfirmDialog = n;
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }, t)
                    })),
                    function(e) {
                        return t.apply(this, arguments)
                    }
                    ))
                },
                orderConfirm: function(t, e) {
                    var s = this;
                    this.$modal.show(this.comfirmDialog, r()({}, e, {
                        direct: this.direct,
                        total: this.total,
                        estimate: this.priceEstimateText,
                        showEstimate: this.showPriceEstimate,
                        type: this.type,
                        fn: t
                    }), {
                        width: 480,
                        height: "auto"
                    }, {
                        closed: function(t) {
                            s.cooldown = 0
                        }
                    })
                },
                initSlider: function() {
                    var t = this;
                    if (!this.range) {
                        this.range = b(),
                        this.range.init(this.$refs.slider),
                        this.range.resetPos(100 * this.slider, !0);
                        var e = this.$el.querySelector(".slider .drag-track");
                        this.range.bindCallback("progress", function(s, i) {
                            if (t.isLogin) {
                                var a = t.avaAmount
                                  , n = t.maxAmount;
                                if (n = n || a,
                                e.style.backgroundSize = "".concat(s, "% 20%"),
                                t.slider = s / 100,
                                (0 === s || t.amount <= n) && t.amountValidator(t.amount),
                                "changePrice" === i)
                                    return;
                                if ("event" === i) {
                                    if (1 * n == 0)
                                        return void (t.amount = Object(d.c)(0, t.ap));
                                    t.amount = Object(d.c)(Object(d.e)(n, t.slider), t.ap),
                                    t.amountClass = "",
                                    t.amountValidator(t.amount)
                                }
                            }
                        }),
                        m.a.subOnce("changeExchangeType", this.initSlider, !1),
                        window.addEventListener("resize", this.resetSliderPos)
                    }
                },
                resetSliderPos: function() {
                    this.range && this.range.resetPos(100 * this.slider, !0)
                },
                changeSlider: function(t) {
                    this.isLogin && (this.slider = t,
                    this.range.redrag(100 * t, "event"))
                },
                updateSlider: function() {
                    if (this.isLogin) {
                        var t = 100 * this.slider;
                        this.range.redrag(0, "event"),
                        this.range.redrag(t, "event")
                    }
                },
                randomM: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return parseInt(Math.random() * (t - e + 1) + e, 10),
                    Math.floor(Math.random() * (t - e + 1) + e)
                },
                setTricker: function() {
                    var t = document.querySelector(".nc-container")
                      , e = document.querySelector(".nc-container .btn_slide")
                      , s = [70, 0]
                      , i = "0 ".concat(s[this.randomM(1)], "px 0 ").concat(s[this.randomM(1)], "px")
                      , a = "".concat([20, 48, -28, 0][this.randomM(3)], "px");
                    t && t.children.length > 0 && e ? (t.style.padding = i,
                    t.style.marginTop = a,
                    t.style.minWidth = "0 70px 0 70px" === i ? "480px" : "430px",
                    e.style.backgroundColor = g()(),
                    document.querySelector(".nc-container .nc_wrapper").style.border = "none",
                    this.trick && cancelAnimationFrame(this.trick)) : requestAnimationFrame(this.setTricker)
                },
                primeChecker: function() {
                    var t = a()(regeneratorRuntime.mark(function t(e) {
                        var s, i, a, n, o = this;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (s = this.direct,
                                    i = this.primeSliderEnable,
                                    !this.isSubAccount) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return", this.cooldown = 0);
                                case 3:
                                    if (i && "sell" !== s) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", this.placeOrder(e));
                                case 5:
                                    if (!this.primeRoundOver) {
                                        t.next = 9;
                                        break
                                    }
                                    return I.error("本轮已结束"),
                                    this.resetAmount(),
                                    t.abrupt("return");
                                case 9:
                                    if (this.captcha) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.abrupt("return", setTimeout(function() {
                                        o.primeChecker(e)
                                    }, 1e3));
                                case 11:
                                    return t.next = 13,
                                    C.i.getAliToken();
                                case 13:
                                    if (!(a = t.sent).success) {
                                        t.next = 19;
                                        break
                                    }
                                    this.captcha.init(this, {
                                        params: r()({
                                            scene: "activity",
                                            captchaKey: "aliCaptcha",
                                            token: a.data.sliderToken,
                                            risk: 2,
                                            captcha_type: 1,
                                            riskNeed: 2
                                        }, a.data, {
                                            successCallback: function(t) {
                                                var s = t.afs;
                                                o.$store.dispatch("exchange/setPrimeInfo"),
                                                o.placeOrder(Object.assign(e, r()({
                                                    afs: s
                                                }, a.data)))
                                            }
                                        }),
                                        closed: function() {
                                            o.cooldown = 0
                                        }
                                    }),
                                    this.trick = requestAnimationFrame(this.setTricker),
                                    t.next = 29;
                                    break;
                                case 19:
                                    if (12e3 !== a.code) {
                                        t.next = 25;
                                        break
                                    }
                                    return this.$store.dispatch("exchange/setPrimeInfo"),
                                    this.placeOrder(e),
                                    t.abrupt("return");
                                case 25:
                                    10008 === a.code && (this.primeRoundOver = !0);
                                case 26:
                                    n = "API Error" === a.message ? "网络繁忙" : a.message,
                                    I.error(n),
                                    this.resetAmount();
                                case 29:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                resetAmount: function() {
                    this.cooldown = 0,
                    this.resetDrag(0)
                },
                fillPrimeAmount: function() {
                    this.range.redrag(100, "event")
                }
            },
            beforeMount: function() {
                this.price = this.$el ? this.$el.querySelector('[name="price"]').value : ""
            },
            mounted: function() {
                this.initFillPrice(),
                this.initUpdateBalance(),
                this.initOrderConfirm(),
                this.initSlider()
            },
            beforeDestroy: function() {
                m.a.unsub("fillPrice.click", this.fillPrice),
                window.removeEventListener("resise", this.resetSliderPos)
            },
            watch: {
                activeElement: function(t) {
                    this.stopPriceClass && this.priceClass && this.amountClass || (this.stopPriceClass = "stop-price" === t ? "active" : "",
                    this.priceClass = "price" === t ? "active" : "",
                    this.amountClass = "amount" === t ? "active" : "")
                },
                type: function(t) {
                    this.stopPrice = "",
                    this.amount = "",
                    this.stopPriceClass = "",
                    this.priceClass = "",
                    this.amountClass = "",
                    this.range.redrag(0)
                },
                exchangeType: function() {
                    this.stopPriceClass = "",
                    this.priceClass = "",
                    this.amountClass = "",
                    this.stopPrice = "",
                    this.amount = "",
                    this.updateBalance()
                },
                userInfo: function() {
                    var t = l()(this.userInfo.country_id, 1)[0];
                    this.disabledAction = 1 * t == 83
                },
                primeStatus: function(t) {
                    1 === t.state && (this.primeRoundOver = !1)
                },
                isPrime: function(t) {
                    var e = this;
                    t && this.$nextTick(a()(regeneratorRuntime.mark(function t() {
                        var i, a;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    s.e(0).then(s.bind(null, 353));
                                case 2:
                                    i = t.sent,
                                    a = i.default,
                                    e.captcha = a;
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }, t)
                    })))
                },
                isLogin: function(t) {
                    !t && location.reload()
                },
                primeLimitOrderPrice: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.isPrimeNormal) {
                        var e = t[this.direct + "Price"];
                        e ? (this.price = e,
                        this.priceDisable = !0) : (this.price = this.price || "",
                        this.priceDisable = !1)
                    }
                },
                isPrimeNormal: function(t) {
                    t || (this.priceDisable = !1)
                },
                baseBalance: function() {
                    this.updateSlider()
                },
                quoteBalance: function() {
                    this.updateSlider()
                },
                orderBooks: function() {
                    var t = this
                      , e = this.filterDepthFirst
                      , s = e.asks
                      , i = e.bids
                      , a = {
                        buy: s[0],
                        sell: i[0]
                    }[this.direct] || this.ticker.close || "";
                    a && !isNaN(a) && setTimeout(function() {
                        t.isPrime || t.price || t.priceIsFilled || (t.price = Object(d.c)(a, t.tpp),
                        t.priceValidator(t.price),
                        t.priceIsFilled = !0)
                    }, 0)
                },
                $route: function() {
                    this.stopPriceClass = "",
                    this.priceClass = "",
                    this.amountClass = "",
                    this.baseBalance = "---",
                    this.quoteBalance = "---",
                    this.price = "",
                    this.amount = "",
                    this.slider = 0,
                    this.range.redrag(0),
                    this.priceIsFilled = !1
                }
            }
        }
          , M = (s(534),
        s(5))
          , y = Object(M.a)(w, function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "single-panel",
                class: t.type
            }, [s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "limit" === t.type,
                    expression: "type === 'limit'"
                }],
                staticClass: "form-box"
            }, [s("div", {
                staticClass: "available",
                attrs: {
                    "growing-ignore": "true"
                }
            }, [s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isLogin,
                    expression: "isLogin"
                }]
            }, [t._v("\n                可用\n                "), s("span", [t._v(t._s(t._f("fix")(t.tradeBalance || 0, t.sp)))]), t._v(" "), s("span", [t._v(t._s("buy" === t.direct ? t.QUOTE : t.BASE))]), t._v(" "), s("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPrimeIcons,
                    expression: "showPrimeIcons"
                }],
                staticClass: "hb_icon_question"
            }, [s("div", {
                staticClass: "tips",
                on: {
                    click: t.fillPrimeAmount
                }
            }, [t._v(t._s(t.primeAmountText))])]), t._v(" "), s("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showDepositAction,
                    expression: "showDepositAction"
                }],
                attrs: {
                    href: "/" + t.$store.state.locale + "/finance/?action=deposit&coin=" + ("buy" === t.direct ? t.quote : t.base)
                }
            }, [t._v("充币")])])]), t._v(" "), s("div", {
                staticClass: "price-box"
            }, [s("span", [t._v(t._s(t.priceText))]), t._v(" "), s("label", {
                class: t.priceClass,
                attrs: {
                    "growing-ignore": "true"
                }
            }, ["error blank" === t.priceClass ? s("div", {
                staticClass: "tips"
            }, [s("em", [t._v(t._s("buy" === t.direct ? "请输入买入价" : "请输入卖出价"))])]) : t._e(), t._v(" "), "error blmlt" === t.priceClass ? s("div", {
                staticClass: "tips"
            }, [t._v(t._s(t.ts("买入价格不能高于现价的%s", t.limitPercent)))]) : t._e(), t._v(" "), "error slmgt" === t.priceClass ? s("div", {
                staticClass: "tips"
            }, [t._v(t._s(t.ts("卖出价格不能低于现价的%s", t.limitPercent)))]) : t._e(), t._v(" "), s("input", {
                class: t.priceClass,
                attrs: {
                    disabled: t.priceDisable,
                    name: "price",
                    autocomplete: "off",
                    maxlength: "14"
                },
                domProps: {
                    value: t.price
                },
                on: {
                    input: t.priceSetter,
                    focus: function(e) {
                        return t.inputFocus("price")
                    },
                    blur: function(e) {
                        return t.inputBlur("price")
                    }
                }
            }), t._v(" "), s("span", {
                staticClass: "currency upper"
            }, [t._v(t._s(t.quote))]), t._v(" "), s("div", {
                staticClass: "estimate-box upper",
                class: t.showPriceEstimate
            }, [t._v("≈ " + t._s(t.priceEstimateText || "---"))])])]), t._v(" "), s("div", {
                staticClass: "amount-box"
            }, [s("span", {
                staticClass: "buy-amount"
            }, [t._v(t._s(t.amountText))]), t._v(" "), s("label", {
                class: t.amountClass,
                attrs: {
                    "growing-ignore": "true"
                }
            }, ["error blank" === t.amountClass ? s("div", {
                staticClass: "tips"
            }, [t._v("\n                    " + t._s("buy" === t.direct ? "请输入买入量" : "请输入卖出量") + "\n                ")]) : t._e(), t._v(" "), "error lomgt" === t.amountClass ? s("div", {
                staticClass: "tips"
            }, [t._v("\n                    " + t._s("buy" === t.direct ? t.ts("买入数量不能低于%s", t.minAmount) : t.ts("卖出量不能低于%s", t.minAmount)) + "\n                ")]) : t._e(), t._v(" "), "error lomlt" === t.amountClass ? s("div", {
                staticClass: "tips"
            }, [t._v("\n                    " + t._s("buy" === t.direct ? t.ts("买入数量不能高于%s", t.maxAmount) : t.ts("卖出数量不能高于%s", t.maxAmount)) + "\n                ")]) : t._e(), t._v(" "), s("input", {
                class: t.amountClass,
                attrs: {
                    name: "amount",
                    autocomplete: "off",
                    maxlength: "14"
                },
                domProps: {
                    value: t.amount
                },
                on: {
                    input: t.amountSetter,
                    focus: function(e) {
                        return t.inputFocus("amount")
                    },
                    blur: function(e) {
                        return t.inputBlur("amount")
                    }
                }
            }), t._v(" "), s("span", {
                staticClass: "currency upper"
            }, [t._v(t._s(t.base))])])])]), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "market" === t.type,
                    expression: "type === 'market'"
                }],
                staticClass: "form-box"
            }, [s("div", {
                staticClass: "available",
                attrs: {
                    "growing-ignore": "true"
                }
            }, [s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isLogin,
                    expression: "isLogin"
                }]
            }, [s("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPrimeIcons,
                    expression: "showPrimeIcons"
                }],
                staticClass: "level-icon",
                class: t.levelClass
            }), t._v("\n                可用\n                "), s("span", [t._v(t._s(t._f("fix")(t.tradeBalance || 0, t.sp)))]), t._v(" "), s("span", [t._v(t._s("buy" === t.direct ? t.QUOTE : t.BASE))]), t._v(" "), s("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPrimeIcons,
                    expression: "showPrimeIcons"
                }],
                staticClass: "hb_icon_question"
            }, [s("div", {
                staticClass: "tips",
                on: {
                    click: t.fillPrimeAmount
                }
            }, [t._v(t._s(t.primeAmountText))])]), t._v(" "), s("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showDepositAction,
                    expression: "showDepositAction"
                }],
                attrs: {
                    href: "/" + t.$store.state.locale + "/finance/?action=deposit&coin=" + ("buy" === t.direct ? t.quote : t.base)
                }
            }, [t._v("充币")])])]), t._v(" "), s("div", {
                staticClass: "price-box"
            }, [s("span", [t._v(t._s(t.priceText))]), t._v(" "), s("label", {
                attrs: {
                    "growing-ignore": "true"
                }
            }, [s("input", {
                attrs: {
                    type: "text",
                    maxlength: "14",
                    placeholder: t.bestPriceText,
                    disabled: ""
                }
            }), t._v(" "), s("span", {
                staticClass: "global-unit"
            }, [t._v(t._s(t.QUOTE))])])]), t._v(" "), s("div", {
                staticClass: "estimate-box upper",
                class: t.showPriceEstimate
            }), t._v(" "), s("div", {
                staticClass: "amount-box"
            }, [s("span", {
                staticClass: "buy-amount"
            }, [t._v(t._s(t.amountText))]), t._v(" "), s("label", {
                class: t.amountClass,
                attrs: {
                    "growing-ignore": "true"
                }
            }, ["error blank" === t.amountClass ? s("div", {
                staticClass: "tips"
            }, [t._v(t._s("buy" === t.direct ? "请输入交易额" : "请输入卖出量"))]) : t._e(), t._v(" "), "error mbomgt" === t.amountClass ? s("div", {
                staticClass: "tips"
            }, [t._v(t._s(t.ts("交易额不能低于%s", t.minAmount)))]) : t._e(), t._v(" "), "error mbomlt" === t.amountClass ? s("div", {
                staticClass: "tips"
            }, [t._v(t._s(t.ts("交易额不能高于%s", t.maxAmount)))]) : t._e(), t._v(" "), "error msomgt" === t.amountClass ? s("div", {
                staticClass: "tips"
            }, [t._v(t._s(t.ts("卖出量不能低于%s", t.minAmount)))]) : t._e(), t._v(" "), "error msomlt" === t.amountClass ? s("div", {
                staticClass: "tips"
            }, [t._v(t._s(t.ts("卖出数量不能高于%s", t.maxAmount)))]) : t._e(), t._v(" "), s("input", {
                attrs: {
                    name: "amount",
                    type: "text",
                    autocomplete: "off",
                    maxlength: "14"
                },
                domProps: {
                    value: t.amount
                },
                on: {
                    input: t.amountSetter,
                    focus: function(e) {
                        return t.inputFocus("amount")
                    },
                    blur: function(e) {
                        return t.inputBlur("amount")
                    }
                }
            }), t._v(" "), s("span", {
                staticClass: "currency upper"
            }, [t._v(t._s("buy" === t.direct ? t.quote : t.base))])])])]), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "stop-limit" === t.type,
                    expression: "type === 'stop-limit'"
                }],
                staticClass: "form-box"
            }, [s("div", {
                staticClass: "available"
            }, [s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isLogin,
                    expression: "isLogin"
                }]
            }, [t._v("\n                可用\n                "), s("span", [t._v(t._s(t._f("fix")(t.tradeBalance || 0, t.sp)))]), t._v(" "), s("span", [t._v(t._s("buy" === t.direct ? t.QUOTE : t.BASE))]), t._v(" "), s("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showDepositAction,
                    expression: "showDepositAction"
                }],
                attrs: {
                    href: "/" + t.$store.state.locale + "/finance/?action=deposit&coin=" + ("buy" === t.direct ? t.quote : t.base)
                }
            }, [t._v("充币")])])]), t._v(" "), s("div", {
                staticClass: "price-box stop-price-box",
                class: t.stopPriceClass
            }, [s("span", [t._v(t._s(t.stopText))]), t._v(" "), s("label", {
                staticClass: "stop-label",
                class: t.stopPriceClass
            }, ["error blank" === t.stopPriceClass ? s("div", {
                staticClass: "tips"
            }, [s("em", [t._v("请输入触发价")])]) : t._e(), t._v(" "), s("input", {
                class: t.stopPriceClass,
                attrs: {
                    name: "stop-price",
                    autocomplete: "off",
                    maxlength: "14"
                },
                domProps: {
                    value: t.stopPrice
                },
                on: {
                    input: t.stopPriceSetter,
                    focus: function(e) {
                        return t.inputFocus("stopPrice")
                    },
                    blur: function(e) {
                        return t.inputBlur("stopPrice")
                    }
                }
            }), t._v(" "), s("span", {
                staticClass: "currency upper"
            }, [t._v(t._s(t.quote))]), t._v(" "), s("div", {
                staticClass: "estimate-box upper",
                class: t.showStopPriceEstimate
            }, [t._v("≈ " + t._s(t.stopPriceEstimateText || "---"))])])]), t._v(" "), s("div", {
                staticClass: "price-box"
            }, [s("span", [t._v(t._s(t.priceText))]), t._v(" "), s("label", {
                class: t.priceClass
            }, ["error blank" === t.priceClass ? s("div", {
                staticClass: "tips"
            }, [s("em", [t._v(t._s("buy" === t.direct ? "请输入买入价" : "请输入卖出价"))])]) : t._e(), t._v(" "), "error blmlt" === t.priceClass ? s("div", {
                staticClass: "tips"
            }, [t._v(t._s(t.ts("买入价格不能高于触发价的%s", t.limitPercent)))]) : t._e(), t._v(" "), "error slmgt" === t.priceClass ? s("div", {
                staticClass: "tips"
            }, [t._v(t._s(t.ts("卖出价格不能低于触发价的%s", t.limitPercent)))]) : t._e(), t._v(" "), s("input", {
                class: t.priceClass,
                attrs: {
                    name: "price",
                    autocomplete: "off",
                    maxlength: "14"
                },
                domProps: {
                    value: t.price
                },
                on: {
                    input: t.priceSetter,
                    focus: function(e) {
                        return t.inputFocus("price")
                    },
                    blur: function(e) {
                        return t.inputBlur("price")
                    }
                }
            }), t._v(" "), s("span", {
                staticClass: "currency upper"
            }, [t._v(t._s(t.quote))]), t._v(" "), s("div", {
                staticClass: "estimate-box upper",
                class: t.showPriceEstimate
            }, [t._v("≈ " + t._s(t.priceEstimateText || "---"))])])]), t._v(" "), s("div", {
                staticClass: "amount-box"
            }, [s("span", {
                staticClass: "buy-amount"
            }, [t._v(t._s(t.amountText))]), t._v(" "), s("label", {
                class: t.amountClass
            }, ["error blank" === t.amountClass ? s("div", {
                staticClass: "tips"
            }, [t._v("\n                    " + t._s("buy" === t.direct ? "请输入买入量" : "请输入卖出量") + "\n                ")]) : t._e(), t._v(" "), "error lomgt" === t.amountClass ? s("div", {
                staticClass: "tips"
            }, [t._v("\n                    " + t._s("buy" === t.direct ? t.ts("买入数量不能低于%s", t.minAmount) : t.ts("卖出量不能低于%s", t.minAmount)) + "\n                ")]) : t._e(), t._v(" "), "error lomlt" === t.amountClass ? s("div", {
                staticClass: "tips"
            }, [t._v("\n                    " + t._s("buy" === t.direct ? t.ts("买入数量不能高于%s", t.maxAmount) : t.ts("卖出数量不能高于%s", t.maxAmount)) + "\n                ")]) : t._e(), t._v(" "), s("input", {
                class: t.amountClass,
                attrs: {
                    name: "amount",
                    autocomplete: "off",
                    maxlength: "14"
                },
                domProps: {
                    value: t.amount
                },
                on: {
                    input: t.amountSetter,
                    focus: function(e) {
                        return t.inputFocus("amount")
                    },
                    blur: function(e) {
                        return t.inputBlur("amount")
                    }
                }
            }), t._v(" "), s("span", {
                staticClass: "currency upper"
            }, [t._v(t._s(t.base))])])])]), t._v(" "), s("div", {
                staticClass: "slider-box",
                class: !t.isLogin && "is-logout"
            }, [s("div", {
                ref: "slider",
                staticClass: "slider",
                class: t.direct
            }, [s("i", {
                ref: "progress",
                staticClass: "progress"
            }), t._v(" "), s("i", {
                staticClass: "point",
                class: t.slider > 0 && "active",
                staticStyle: {
                    left: "-1px"
                },
                on: {
                    click: function(e) {
                        return t.changeSlider(0)
                    }
                }
            }), t._v(" "), s("i", {
                staticClass: "point",
                class: t.slider > .25 && "active",
                staticStyle: {
                    left: "25%",
                    transform: "translateX(-20%)"
                },
                on: {
                    click: function(e) {
                        return t.changeSlider(.25)
                    }
                }
            }), t._v(" "), s("i", {
                staticClass: "point",
                class: t.slider > .5 && "active",
                staticStyle: {
                    left: "50%",
                    transform: "translateX(-40%)"
                },
                on: {
                    click: function(e) {
                        return t.changeSlider(.5)
                    }
                }
            }), t._v(" "), s("i", {
                staticClass: "point",
                class: t.slider > .75 && "active",
                staticStyle: {
                    left: "75%",
                    transform: "translateX(-50%)"
                },
                on: {
                    click: function(e) {
                        return t.changeSlider(.75)
                    }
                }
            }), t._v(" "), s("i", {
                staticClass: "point",
                class: 1 === t.slider && "active",
                staticStyle: {
                    right: "0"
                },
                on: {
                    click: function(e) {
                        return t.changeSlider(1)
                    }
                }
            })]), t._v(" "), s("div", {
                staticClass: "min-max"
            }, [s("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "buy-market" !== t.orderType,
                    expression: "orderType !== 'buy-market'"
                }],
                staticClass: "min upper"
            }, [t._v("0 " + t._s(t.base))]), t._v(" "), s("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "buy-market" === t.orderType,
                    expression: "orderType === 'buy-market'"
                }],
                staticClass: "min upper"
            }, [t._v("0 " + t._s(t.quote))]), t._v(" "), s("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "buy-market" !== t.orderType,
                    expression: "orderType !== 'buy-market'"
                }],
                staticClass: "max upper"
            }, [t._v(t._s(t.avaAmount) + " " + t._s(t.base))]), t._v(" "), s("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "buy-market" === t.orderType,
                    expression: "orderType === 'buy-market'"
                }],
                staticClass: "max upper"
            }, [t._v(t._s(t.avaAmount) + " " + t._s(t.quote))])])]), t._v(" "), s("div", {
                staticClass: "quick-box"
            }, [s("button", {
                on: {
                    click: function(e) {
                        return t.setAmount(.25)
                    }
                }
            }, [t._v("25%")]), t._v(" "), s("button", {
                on: {
                    click: function(e) {
                        return t.setAmount(.5)
                    }
                }
            }, [t._v("50%")]), t._v(" "), s("button", {
                on: {
                    click: function(e) {
                        return t.setAmount(.75)
                    }
                }
            }, [t._v("75%")]), t._v(" "), s("button", {
                on: {
                    click: function(e) {
                        return t.setAmount(1)
                    }
                }
            }, [t._v("100%")])]), t._v(" "), "market" !== t.type ? s("div", {
                staticClass: "total",
                attrs: {
                    "growing-ignore": "true"
                }
            }, [s("em", [t._v(t._s(t.totalText))]), t._v(" " + t._s(t._f("fix")(t.total || "---", t.ttp)) + " " + t._s(t.QUOTE))]) : t._e(), t._v(" "), "market" === t.type ? s("div", {
                staticClass: "total"
            }) : t._e(), t._v(" "), s("button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isLogin,
                    expression: "isLogin"
                }],
                staticClass: "submit",
                class: "bg-" + t.direct + " " + (t.cooldown && "disabled"),
                attrs: {
                    disabled: t.disabledAction
                },
                on: {
                    click: function(e) {
                        return t.createOrder()
                    }
                }
            }, [t._v(t._s(t.buttonText) + t._s(t.BASE))]), t._v(" "), s("button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isLogin,
                    expression: "!isLogin"
                }],
                staticClass: "submit en-btn",
                class: "bg-" + t.direct,
                on: {
                    click: function(e) {
                        return t.toLogin()
                    }
                }
            }, [t._v("Log In or Sign Up to trade")]), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isLogin,
                    expression: "!isLogin"
                }],
                staticClass: "submit global-btn"
            }, [s("span", {
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: function(e) {
                        return t.toLogin()
                    }
                }
            }, [t._v("登录")]), t._v(" 或\n        "), s("span", {
                on: {
                    click: function(e) {
                        return t.toRegister()
                    }
                }
            }, [t._v("注册")])])])
        }, [], !1, null, null, null).exports
          , D = s(348)
          , x = {
            name: "TradePanel",
            components: {
                Mod: o.a,
                SinglePanel: y
            },
            data: function() {
                return {
                    type: "limit",
                    hb10Close: "---"
                }
            },
            computed: r()({}, Object(u.b)("exchange", ["isPrime", "isPrimeNormal", "primeRound", "isPrimePO"]), {
                isGlobal: function() {
                    return "en-us" !== this.$store.state.locale
                },
                showMarginAction: function() {
                    return this.isLogin && "margin" === this.exchangeType
                },
                showDepositAction: function() {
                    return this.isLogin && "exchange" === this.exchangeType
                },
                enableDeposit: function() {
                    if ("exchange" === this.exchangeType) {
                        var t = this.currencysObj
                          , e = this.base
                          , s = this.quote;
                        if (t[e] && t[s])
                            return t[e].deposit_enabled || t[s].deposit_enabled
                    }
                    return !1
                },
                limitText: function() {
                    return this.isGlobal ? "限价交易" : "Limit"
                },
                marketText: function() {
                    return this.isGlobal ? "市价交易" : "Market"
                },
                hasMargin: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    return t[e] && t[e].leverage_ratio
                },
                stopLimitTipShow: function() {
                    return !this.isPrime || this.isPrime && !this.isPrimeNormal
                }
            }, Object(u.c)({
                currencysObj: function(t) {
                    return t.currencysObj
                },
                symbolsObj: function(t) {
                    return t.symbolsObj
                },
                isLogin: function(t) {
                    return t.user.isLogin
                },
                exchangeType: function(t) {
                    return t.exchange.exchangeType
                },
                symbolCode: function(t) {
                    return t.exchange.symbolCode
                },
                base: function(t) {
                    return t.exchange.base
                },
                quote: function(t) {
                    return t.exchange.quote
                },
                marginSymbols: function(t) {
                    return t.originSymbolsList.filter(function(t) {
                        return t.leverage_ratio
                    })
                }
            }), Object(u.b)("exchange", ["isMarketDisabled"])),
            methods: {
                changeType: function(t) {
                    this.isPrimeNormal || (this.type = t,
                    m.a.pub("changeExchangeType"))
                },
                accountTransfer: function() {
                    var t = a()(regeneratorRuntime.mark(function t() {
                        var e, i;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    s.e(7).then(s.bind(null, 687));
                                case 2:
                                    e = t.sent,
                                    i = e.default,
                                    this.$modal.show(i, {}, {
                                        width: 480,
                                        height: "auto"
                                    });
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                marginLoan: function() {
                    var t = a()(regeneratorRuntime.mark(function t() {
                        var e, i;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    s.e(35).then(s.bind(null, 690));
                                case 2:
                                    e = t.sent,
                                    i = e.default,
                                    this.$modal.show(i, {}, {
                                        width: 480,
                                        height: "auto"
                                    });
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                initOrderConfirm: function() {
                    var t = a()(regeneratorRuntime.mark(function t() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    v.f.kvGet("ORDER_CONFIRM");
                                case 2:
                                    (e = t.sent).success && "Y" === e.data.store_value && m.a.pub("kvGet.ready", "ORDER_CONFIRM");
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }, t)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            },
            watch: {
                "$store.state.exchange.ts": function() {
                    this.hb10Close = D.c.hb10 && Object(d.c)(D.c.hb10.close, 4)
                },
                "$store.state.exchange.symbolCode": function(t) {
                    this.type = "limit",
                    this.$store.dispatch("exchange/getExchangeControlData"),
                    this.$store.dispatch("exchange/getTimestamp")
                },
                isPrimeNormal: function(t) {
                    var e = this;
                    this.$nextTick(function() {
                        var s = e.primeRound
                          , i = "limit";
                        t && 3 !== s && (i = "market"),
                        e.type = i
                    })
                },
                isMarketDisabled: function(t) {
                    t && "market" === this.type && (this.type = "limit")
                },
                primeRound: function(t) {
                    var e = this;
                    this.$nextTick(function() {
                        3 === t && (e.type = "limit")
                    })
                },
                isLogin: {
                    handler: function() {
                        var t = a()(regeneratorRuntime.mark(function t(e) {
                            return regeneratorRuntime.wrap(function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        e && this.initOrderConfirm();
                                    case 1:
                                    case "end":
                                        return t.stop()
                                    }
                            }, t, this)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    immediate: !0
                }
            }
        }
          , T = (s(535),
        Object(M.a)(x, function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("Mod", {
                staticClass: "trade-panel"
            }, [i("div", {
                staticClass: "mod-head tabs",
                class: {
                    prime: t.isPrimeNormal,
                    po: t.isPrimePO,
                    "market-disabled": t.isMarketDisabled
                },
                attrs: {
                    slot: "head"
                },
                slot: "head"
            }, [i("span", {
                staticClass: "mock-a",
                class: "limit" === t.type && "cur",
                on: {
                    click: function(e) {
                        return t.changeType("limit")
                    }
                }
            }, [t._v(t._s(t.limitText))]), t._v(" "), i("span", {
                staticClass: "mock-a",
                class: "market" === t.type && "cur",
                on: {
                    click: function(e) {
                        return t.changeType("market")
                    }
                }
            }, [t._v(t._s(t.marketText))]), t._v(" "), i("span", {
                staticClass: "mock-a",
                class: "stop-limit" === t.type && "cur",
                on: {
                    click: function(e) {
                        return t.changeType("stop-limit")
                    }
                }
            }, [t._v("止盈止损")]), t._v(" "), i("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.stopLimitTipShow,
                    expression: "stopLimitTipShow"
                }],
                staticClass: "hb_icon_tip"
            }, [i("div", {
                staticClass: "tips"
            }, [t.isGlobal ? i("h3", [t._v("止盈止损订单")]) : t._e(), t._v(" "), i("p", {
                staticClass: "content"
            }, [t._v("当市场最新价达到触发价时，按照预先设置的委托价格和数量自动下单。")]), t._v(" "), t.isGlobal ? i("a", {
                attrs: {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://huobiglobal.zendesk.com/hc/zh-cn/articles/360000206602"
                }
            }, [t._v("查看更多")]) : i("a", {
                staticClass: "more-en",
                attrs: {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://huobiglobal.zendesk.com/hc/zh-cn/articles/360000206602"
                }
            }, [t._v("Learn more")])])]), t._v(" "), i("div", {
                staticClass: "actions"
            }, [i("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showDepositAction,
                    expression: "showDepositAction"
                }],
                class: {
                    disabled: !t.enableDeposit
                },
                attrs: {
                    href: t.enableDeposit ? "/" + t.$store.state.locale + "/finance/" : "javascript:;"
                }
            }, [t._v("Deposit")]), t._v(" "), i("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showMarginAction,
                    expression: "showMarginAction"
                }],
                on: {
                    click: t.accountTransfer
                }
            }, [t._v("划转")]), t._v(" "), i("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showMarginAction,
                    expression: "showMarginAction"
                }],
                on: {
                    click: t.marginLoan
                }
            }, [t._v("借币")]), t._v(" "), i("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showMarginAction,
                    expression: "showMarginAction"
                }],
                staticClass: "repay",
                attrs: {
                    href: "/" + t.$store.state.locale + "/margin/center/?symbol=" + t.symbolCode
                }
            }, [t._v("归还")]), t._v(" "), i("a", {
                staticClass: "fee",
                attrs: {
                    href: "/en-us/about/fee/",
                    target: "_blank"
                }
            }, [t._v("Fee")]), t._v(" "), i("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isGlobal && "exchange" === t.exchangeType && "hb10" === t.base,
                    expression: "isGlobal && exchangeType === 'exchange' && base === 'hb10'"
                }],
                staticClass: "hb10",
                attrs: {
                    href: "/" + t.$store.state.locale + "/etf/hb10/info/"
                }
            }, [t._v("HB10净值 " + t._s(t.hb10Close))]), t._v(" "), i("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "exchange" === t.exchangeType && t.hasMargin && !["ko-kr", "en-us"].includes(t.$store.state.locale),
                    expression: "exchangeType === 'exchange' && hasMargin && !['ko-kr', 'en-us'].includes($store.state.locale)"
                }],
                staticClass: "margin-link",
                attrs: {
                    href: "/" + t.$store.state.locale + "/margin/?symbol=" + t.symbolCode
                }
            }, [i("img", {
                attrs: {
                    src: s(531)
                }
            }), t._v(" " + t._s(+t.hasMargin > 0 ? +t.hasMargin : "") + "X 杠杆交易")])])]), t._v(" "), i("div", {
                staticClass: "mod-body",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [i("SinglePanel", {
                attrs: {
                    direct: "buy",
                    type: t.type
                }
            }), t._v(" "), i("SinglePanel", {
                attrs: {
                    direct: "sell",
                    type: t.type
                }
            })], 1)])
        }, [], !1, null, null, null));
        e.a = T.exports
    },
    485: function(t, e, s) {
        "use strict";
        s(19),
        s(66);
        for (var i, a, n = s(8), r = s.n(n), o = (s(9),
        s(1)), c = s.n(o), l = s(4), u = s.n(l), h = s(336), g = (s(34),
        s(38),
        s(35),
        s(50),
        [{
            slug: "realtime",
            text: "Time",
            resolution: "1",
            chartType: 3
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
            resolution: "60"
        }, {
            slug: "4hour",
            resolution: "240"
        }, {
            slug: "1day",
            resolution: "1D"
        }, {
            slug: "5day",
            resolution: "5D"
        }, {
            slug: "1week",
            resolution: "1W"
        }, {
            slug: "1mon",
            resolution: "1M"
        }]), d = {
            m: [{
                val: "1m",
                slug: "1min",
                resolution: "1"
            }, {
                val: "5m",
                slug: "5min",
                resolution: "5"
            }, {
                val: "15m",
                slug: "15min",
                resolution: "15"
            }, {
                val: "30m",
                slug: "30min",
                resolution: "30"
            }],
            H: [{
                val: "1H",
                slug: "1hour",
                resolution: "60"
            }, {
                val: "4H",
                slug: "4hour",
                resolution: "240"
            }],
            D: [{
                val: "1D",
                slug: "1day",
                resolution: "1D"
            }, {
                val: "5D",
                slug: "5day",
                resolution: "5D"
            }]
        }, p = ["1min", "5min", "15min", "30min"], m = ["1hour", "4hour"], v = ["1day", "5day"], C = {
            name: "ChartActions",
            props: {
                slug: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    periods: g,
                    minPeriods: d,
                    mArr: p,
                    hArr: m,
                    dArr: v,
                    showBtn: !0
                }
            },
            mounted: function() {
                var t = navigator.userAgent
                  , e = void 0 === t ? "" : t
                  , s = e.match(/safari\/\w+/i) || []
                  , i = r()(s, 1)[0]
                  , a = void 0 === i ? "" : i
                  , n = e.toLowerCase().match(/MacHuobi/i)
                  , o = a.split("/")
                  , c = r()(o, 2);
                c[0];
                c[1] && n && (this.showBtn = !1)
            },
            computed: {
                mText: function() {
                    return this.mArr.includes(this.slug) ? this.slug.replace("min", "m") : "m"
                },
                hText: function() {
                    return this.hArr.includes(this.slug) ? this.slug.replace("hour", "H") : "H"
                },
                dText: function() {
                    return this.dArr.includes(this.slug) ? this.slug.replace("day", "D") : "D"
                }
            },
            methods: {
                fix: function(t) {
                    switch (t) {
                    case "m":
                        return t.replace("m", "min");
                    case "H":
                        return t.replace("H", "hour");
                    case "D":
                        return t.replace("D", "day");
                    default:
                        return t
                    }
                }
            }
        }, f = s(5), I = Object(f.a)(C, function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "chart-actions"
            }, [s("div", {
                staticClass: "maxScreen"
            }, t._l(t.periods, function(e) {
                return s("button", {
                    key: e.slug,
                    class: {
                        cur: e.slug === t.slug
                    },
                    on: {
                        click: function(s) {
                            return t.$emit("period", e)
                        }
                    }
                }, [t._v("\n            " + t._s(e.text || e.slug) + "\n        ")])
            }), 0), t._v(" "), s("div", {
                staticClass: "minScreen"
            }, [s("button", {
                staticClass: "real-time",
                class: {
                    cur: "realtime" === t.slug
                },
                on: {
                    click: function(e) {
                        return t.$emit("period", t.periods[0])
                    }
                }
            }, [t._v("\n            " + t._s("Time") + "\n        ")]), t._v(" "), s("dl", {
                staticClass: "m-width",
                class: {
                    cur: t.mArr.includes(t.slug)
                }
            }, [s("dt", [s("button", [t._v(t._s(t.mText))])]), t._v(" "), s("dd", t._l(t.minPeriods.m, function(e) {
                return s("button", {
                    key: e.slug,
                    class: {
                        cur: e.slug === t.slug
                    },
                    on: {
                        click: function(s) {
                            return t.$emit("period", e)
                        }
                    }
                }, [t._v(t._s(e.val) + "\n                ")])
            }), 0)]), t._v(" "), s("dl", {
                staticClass: "h-width",
                class: {
                    cur: t.hArr.includes(t.slug)
                }
            }, [s("dt", [s("button", [t._v(t._s(t.hText))])]), t._v(" "), s("dd", t._l(t.minPeriods.H, function(e) {
                return s("button", {
                    key: e.slug,
                    class: {
                        cur: e.slug === t.slug
                    },
                    on: {
                        click: function(s) {
                            return t.$emit("period", e)
                        }
                    }
                }, [t._v(t._s(e.val) + "\n                ")])
            }), 0)]), t._v(" "), s("dl", {
                staticClass: "d-width",
                class: {
                    cur: t.dArr.includes(t.slug)
                }
            }, [s("dt", [s("button", [t._v(t._s(t.dText))])]), t._v(" "), s("dd", t._l(t.minPeriods.D, function(e) {
                return s("button", {
                    key: e.slug,
                    class: {
                        cur: e.slug === t.slug
                    },
                    on: {
                        click: function(s) {
                            return t.$emit("period", e)
                        }
                    }
                }, [t._v(t._s(e.val) + "\n                ")])
            }), 0)]), t._v(" "), s("button", {
                class: {
                    cur: "1week" === t.slug
                },
                on: {
                    click: function(e) {
                        return t.$emit("period", t.periods[9])
                    }
                }
            }, [t._v("\n            " + t._s("1W") + "\n        ")]), t._v(" "), s("button", {
                class: {
                    cur: "1mon" === t.slug
                },
                on: {
                    click: function(e) {
                        return t.$emit("period", t.periods[10])
                    }
                }
            }, [t._v("\n            " + t._s("1M") + "\n        ")])]), t._v(" "), s("button", {
                staticClass: "trading-icon indicator",
                on: {
                    click: function(e) {
                        return t.$emit("action", "indicators")
                    }
                }
            }, [s("div", {
                staticClass: "tips"
            }, [t._v("指标")])]), t._v(" "), s("button", {
                staticClass: "trading-icon set",
                on: {
                    click: function(e) {
                        return t.$emit("action", "settings")
                    }
                }
            }, [s("div", {
                staticClass: "tips"
            }, [t._v("设置")])]), t._v(" "), t.showBtn ? s("button", {
                staticClass: "trading-icon fullscreen",
                on: {
                    click: function(e) {
                        return t.$emit("action", "fullscreen")
                    }
                }
            }, [s("div", {
                staticClass: "tips fullscreenhide"
            }, [t._v("全屏")]), t._v(" "), s("div", {
                staticClass: "tips fullscreenshow"
            }, [t._v("退出全屏")])]) : t._e()])
        }, [], !1, null, null, null).exports, b = s(488), _ = s(59), A = s(79), w = s(14), M = s(11), y = {
            "hb-day": {
                url: "day.css?181221",
                up: "#12B886",
                down: "#FA5252",
                bg: "#ffffff",
                grid: "#f7f8fa",
                cross: "#8aa1Be",
                border: "#838c97",
                text: "#838c97",
                areatop: "rgba(71, 78, 112, 0.1)",
                areadown: "rgba(71, 78, 112, 0.02)",
                showLegend: !0
            },
            "hb-night": {
                url: "night.css?181221",
                up: "#12B886",
                down: "#FA5252",
                bg: "#171B2B",
                grid: "rgba(131,140,151,0.1)",
                cross: "#28425E",
                text: "#5A6881",
                border: "#838c97",
                areatop: "rgba(131,140,151,0.1)",
                areadown: "#12263D",
                showLegend: !0
            },
            "hb-dark": {
                url: "night.css?181221",
                up: "#05C19E",
                down: "#E04545",
                bg: "#1F2126",
                grid: "rgba(131,140,151,0.1)",
                cross: "#28425E",
                text: "#5A6881",
                border: "#838c97",
                areatop: "rgba(131,140,151,0.1)",
                areadown: "#12263D",
                showLegend: !0
            }
        }, D = 0, x = ["exitFullscreen", "mozCancelFullScreen", "mozExitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "msExitFullscreen"]; D < x.length; D++) {
            var T = x[D];
            if ("function" == typeof document[T]) {
                a = T;
                break
            }
        }
        for (var N, L = function() {
            var t = j[k];
            if ("function" == typeof document.body[t])
                return N = function(e) {
                    return e[t]()
                }
                ,
                "break"
        }, k = 0, j = ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"]; k < j.length; k++) {
            if ("break" === L())
                break
        }
        for (var O, S = 0, E = ["fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "msfullscreenchange"]; S < E.length; S++) {
            var P = E[S];
            if ("on".concat(P)in document) {
                O = P;
                break
            }
        }
        var z = {
            name: "TradingChart",
            components: {
                Mod: h.a,
                Ticker: b.a,
                ChartActions: I,
                PrimeMask: function() {
                    return s.e(41).then(s.bind(null, 688))
                },
                DepthChart: function() {
                    return s.e(47).then(s.bind(null, 670))
                }
            },
            props: {
                global: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    showDepthChart: 0,
                    nowChart: "kline",
                    showMask: !1,
                    t: 0,
                    period: "",
                    slug: "",
                    cooldown: 1,
                    fullscreen: !1,
                    depthDisabled: !1
                }
            },
            computed: u()({}, Object(M.c)({
                symbols: function(t) {
                    return t.originSymbolsList.map(function(t) {
                        return u()({
                            "symbol-name": t.display_name,
                            "trade-price-precision": t.trade_price_precision,
                            "trade-amount-precision": t.trade_amount_precison
                        }, t)
                    })
                },
                base: function(t) {
                    return t.exchange.base
                },
                quote: function(t) {
                    return t.exchange.quote
                },
                theme: function(t) {
                    return t.exchange.theme
                },
                symbolsObj: function(t) {
                    return t.symbolsObj
                },
                symbolCode: function(t) {
                    return t.exchange.symbolCode
                }
            })),
            mounted: function() {
                var t = c()(regeneratorRuntime.mark(function t() {
                    var e, a, n, o, c, l, u, h, g, d, p = this;
                    return regeneratorRuntime.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                t.next = 2;
                                break;
                            case 2:
                                this.global || (y["hb-dark"].bg = y["hb-night"].bg = "#1A243B"),
                                this.ws = _.a.handsup(A.a.ws),
                                e = s(518),
                                a = e.default,
                                n = e.huobiResolution,
                                e.getIntervalByHuobiPeriod,
                                o = e.huobiTVHeaderProxy,
                                c = n.get(),
                                l = r()(c, 2),
                                u = l[0],
                                h = void 0 === u ? "15min" : u,
                                g = l[1],
                                d = void 0 === g ? 1 : g,
                                i = a,
                                this.huobiResolution = n,
                                this.period = h,
                                this.chartType = d,
                                this.slug = 1 * d == 1 ? h : "realtime",
                                "60min" === h && (this.slug = "1hour"),
                                this.huobiTVHeaderProxy = o,
                                this.$nuxt.$on("symbolDOM", function(t) {
                                    p.showMask = t
                                }),
                                this.initTimer = setTimeout(function() {
                                    w.a.sub("socket.connect", p.initChart, !1)
                                }, 2e3),
                                this.checkSymbolSate(),
                                document.addEventListener(O, this.toggleFullscreen);
                            case 17:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }));
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            methods: {
                tvRemove: function(t) {
                    if ("---" !== this.base && t) {
                        var e = window.tvWidget._options.symbol.replace("/", "").toLowerCase();
                        this.ws.ws.send('{"unsub":"market.'.concat(e, ".kline.").concat(this.period, '"}'))
                    }
                    window.tvWidget && window.tvWidget.remove(),
                    window.tvWidget = null
                },
                switchTradingChart: function() {
                    var t = c()(regeneratorRuntime.mark(function t(e) {
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    "depth" !== e || this.showDepthChart || (this.showDepthChart = 1),
                                    this.nowChart = e;
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                initChart: function(t) {
                    var e = this;
                    try {
                        this.tvRemove()
                    } catch (t) {}
                    "---" !== this.base && (this.t = 1,
                    i && (window.tvWidget = new i({
                        ws: t,
                        base: this.base,
                        quote: this.quote,
                        period: this.period,
                        chartType: this.chartType,
                        props: {
                            library_path: "/charting_library/",
                            fullscreen: !1,
                            width: "100%",
                            height: "100%",
                            hideNextMonthTime: !0,
                            session: "0000-2400:2345671;1"
                        },
                        themeName: this.theme,
                        themes: y,
                        symbols: this.symbols,
                        lang: "id" === localStorage.lang.substr(0, 2) ? "en" : localStorage.lang.substr(0, 2),
                        hideHeader: this.global
                    }),
                    window.tvWidget && (window.tvWidget._options.datafeed.setPair(this.symbolCode),
                    window.tvWidget.onChartReady(function() {
                        w.a.pub("chart.ready"),
                        e.cooldown = 0
                    }))))
                },
                chartPeriod: function(t) {
                    if (!this.cooldown) {
                        var e = t.slug;
                        this.huobiTVHeaderProxy && this.huobiTVHeaderProxy.fire(e),
                        this.slug = e;
                        var s = this.huobiResolution ? this.huobiResolution.get() : [this.period]
                          , i = r()(s, 1);
                        this.period = i[0]
                    }
                },
                chartActionByEvent: function(t) {
                    if (window.tvWidget && window.tvWidget.chart) {
                        try {
                            window.tvWidget.closePopupsAndDialogs()
                        } catch (t) {}
                        switch (t) {
                        case "indicators":
                            window.tvWidget.chart().executeActionById("insertIndicator");
                            break;
                        case "settings":
                            window.tvWidget.chart().executeActionById("chartProperties");
                            break;
                        case "fullscreen":
                            var e = this.$refs.chart.$el;
                            if (!e)
                                break;
                            if (window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled) {
                                document[a]();
                                break
                            }
                            N(e)
                        }
                    }
                },
                checkSymbolSate: function(t) {
                    var e = t || this.symbolCode
                      , s = this.symbolsObj && this.symbolsObj[e]
                      , i = s && "suspend" === s.state;
                    this.depthDisabled = i,
                    this.nowChart = i ? "kline" : this.nowChart
                },
                toggleFullscreen: function() {
                    this.fullscreen = !this.fullscreen,
                    this.$emit("tradingChartFullscreen", this.fullscreen)
                }
            },
            watch: {
                "$store.state.exchange.symbolCode": function(t) {
                    this.initChart(this.ws.ws),
                    this.checkSymbolSate(t)
                },
                "$store.state.exchange.theme": function(t) {
                    if (this.t && window.tvWidget)
                        try {
                            window.tvWidget.setTheme(t)
                        } catch (t) {}
                }
            },
            beforeDestroy: function() {
                this.$nuxt.$off("symbolDOM"),
                w.a.unsub("socket.connect", this.initChart),
                clearTimeout(this.initTimer),
                document.removeEventListener(O, this.toggleFullscreen);
                try {
                    this.tvRemove(1)
                } catch (t) {}
            }
        }
          , B = (s(519),
        Object(f.a)(z, function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("Mod", {
                staticClass: "trading-chart"
            }, [i("div", {
                staticClass: "mod-head",
                attrs: {
                    slot: "head"
                },
                slot: "head"
            }, [i("Ticker", {
                attrs: {
                    global: t.global
                }
            })], 1), t._v(" "), i("Mod", {
                ref: "chart",
                staticClass: "mod-body",
                class: {
                    isFullscreen: t.fullscreen
                },
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [t.global ? i("div", {
                staticClass: "mod-head",
                attrs: {
                    slot: "head"
                },
                slot: "head"
            }, [i("ChartActions", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "kline" === t.nowChart && "cur",
                    expression: "nowChart === 'kline' && 'cur'"
                }],
                attrs: {
                    slug: t.slug
                },
                on: {
                    period: function(e) {
                        return t.chartPeriod(e)
                    },
                    action: function(e) {
                        return t.chartActionByEvent(e)
                    }
                }
            }), t._v(" "), i("div", {
                staticClass: "actions"
            }, [i("div", {
                staticClass: "switch"
            }, [i("button", {
                class: "kline" === t.nowChart && "cur",
                on: {
                    click: function(e) {
                        return t.switchTradingChart("kline")
                    }
                }
            }, [t._v("行情图")]), t._v(" "), i("button", {
                staticClass: "depth-btn",
                class: "depth" === t.nowChart && "cur",
                attrs: {
                    disabled: t.depthDisabled
                },
                on: {
                    click: function(e) {
                        return t.switchTradingChart("depth")
                    }
                }
            }, [t._v("深度图")])]), t._v(" "), i("div", {
                staticClass: "hb-logo"
            }, [i("img", {
                attrs: {
                    src: s(512)
                }
            })])])], 1) : i("div", {
                staticClass: "mod-head",
                attrs: {
                    slot: "head"
                },
                slot: "head"
            }, [t._v("\n            Chart\n            "), i("div", {
                staticClass: "actions"
            }, [i("img", {
                attrs: {
                    src: s(513)
                }
            }), t._v(" "), i("div", {
                staticClass: "switch"
            }, [i("button", {
                class: "kline" === t.nowChart && "cur",
                on: {
                    click: function(e) {
                        return t.switchTradingChart("kline")
                    }
                }
            }, [t._v("Candle")]), t._v(" "), i("button", {
                class: "depth" === t.nowChart && "cur",
                on: {
                    click: function(e) {
                        return t.switchTradingChart("depth")
                    }
                }
            }, [t._v("Depth")])])])]), t._v(" "), i("div", {
                staticClass: "mod-body",
                attrs: {
                    slot: "body",
                    "growing-ignore": "true"
                },
                slot: "body"
            }, [i("div", {
                staticClass: "trading-chart-container zh-cn",
                class: "kline" === t.nowChart && "show",
                attrs: {
                    id: "huobi-chart"
                }
            }), t._v(" "), "depth" === t.nowChart ? i("DepthChart", {
                staticClass: "depth-chart-container",
                class: "depth" === t.nowChart && "show"
            }) : t._e(), t._v(" "), i("div", {
                staticClass: "tv-mask",
                class: {
                    show: t.showMask
                }
            }), t._v(" "), i("PrimeMask")], 1)])], 1)
        }, [], !1, null, null, null));
        e.a = B.exports
    },
    486: function(t, e, s) {
        "use strict";
        s(35);
        var i = s(8)
          , a = s.n(i)
          , n = (s(51),
        s(9),
        s(1))
          , r = s.n(n)
          , o = s(47)
          , c = s.n(o)
          , l = (s(468),
        s(40),
        s(34),
        s(38),
        s(4))
          , u = s.n(l)
          , h = (s(30),
        s(31),
        s(23),
        s(115),
        s(216),
        s(329),
        s(336))
          , g = s(11)
          , d = (s(59),
        s(79),
        s(3))
          , p = (s(49),
        s(140))
          , m = (s(14),
        s(348))
          , v = s(15)
          , C = {
            name: "TimeLeft",
            props: {
                timeleft: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    tempLeft: 0,
                    leftTimer: null,
                    d: 0,
                    h: 0,
                    i: 0,
                    s: 0
                }
            },
            watch: {
                timeleft: function() {
                    this.setTimeleft()
                }
            },
            mounted: function() {
                this.tempLeft = this.timeleft,
                this.setTimeleft()
            },
            methods: {
                setTimeleft: function() {
                    var t = this
                      , e = +new Date;
                    if (this.clear(),
                    this.tempLeft > 0 && this.tempLeft > e) {
                        var s = this.tempLeft - e;
                        this.d = Math.floor(s / 864e5),
                        this.h = Math.floor(s % 864e5 / 36e5),
                        this.i = Math.floor(s % 36e5 / 6e4),
                        this.s = Math.floor(s % 6e4 / 1e3),
                        this.leftTimer = setTimeout(function() {
                            t.setTimeleft()
                        }, 1e3)
                    } else
                        this.$store.commit("exchange/SET_TS")
                },
                clear: function() {
                    this.leftTimer && clearTimeout(this.leftTimer)
                }
            },
            beforeDestroy: function() {
                this.clear()
            }
        }
          , f = (s(514),
        s(5))
          , I = Object(f.a)(C, function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("section", {
                staticClass: "timer-box"
            }, [s("div", {
                staticClass: "timer-left"
            }, [t._m(0), t._v(" "), s("p", [t._v("Live soon, stay tuned.")]), t._v(" "), s("dl", [s("dd", {
                staticClass: "timer day"
            }, [s("p", [t._v(t._s(t.d))]), t._v(" "), s("span", [t._v("DAYS")])]), t._v(" "), s("dd", [t._v(":")]), t._v(" "), s("dd", {
                staticClass: "timer hour"
            }, [s("p", [t._v(t._s(t.h))]), t._v(" "), s("span", [t._v("HOURS")])]), t._v(" "), s("dd", [t._v(":")]), t._v(" "), s("dd", {
                staticClass: "timer min"
            }, [s("p", [t._v(t._s(t.i))]), t._v(" "), s("span", [t._v("MIN")])]), t._v(" "), s("dd", [t._v(":")]), t._v(" "), s("dd", {
                staticClass: "timer sec"
            }, [s("p", [t._v(t._s(t.s))]), t._v(" "), s("span", [t._v("SEC")])])])]), t._v(" "), t._t("default")], 2)
        }, [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("p", [e("strong", [this._v("\n            Coming soon...\n        ")])])
        }
        ], !1, null, "6207e800", null).exports
          , b = s(464)
          , _ = {
            name: "CoinSwitch",
            components: {
                Mod: h.a,
                Tooltips: b.a,
                TimeLeft: I
            },
            props: {
                defaultFav: {
                    type: Number,
                    default: 1
                }
            },
            data: function() {
                return {
                    overviewTs: +new Date,
                    curQuote: "",
                    sortBy: "",
                    sortDirect: "asc",
                    inputFilter: "",
                    favList: new Set,
                    isLocalPrice: 0
                }
            },
            computed: u()({
                isGlobal: function() {
                    return "en-us" !== this.$store.state.locale
                },
                hideRatio: function() {
                    return this.isGlobal && "exchange" === this.exchangeType
                },
                desc: function() {
                    return "desc" === this.sortDirect
                },
                symbolObj: function() {
                    var t = this
                      , e = this.symbolData
                      , s = this.sortBy
                      , i = this.sortByFn
                      , a = this.inputData
                      , n = this.desc
                      , r = this.curQuote
                      , o = this.favList
                      , c = (this.ts,
                    this.exchangeType)
                      , l = this.isLocalPrice
                      , u = this.primeInfo
                      , h = e.reduce(function(e, i) {
                        var n = i.symbol_partition
                          , h = i.base_currency
                          , g = i.trade_price_precision
                          , d = i.quote_currency
                          , p = i.country_disabled
                          , v = i.symbol_code
                          , C = i.state
                          , f = (i.price_precision,
                        i.leverage_ratio)
                          , I = i.trade_open_at
                          , b = i.tags
                          , _ = o.has(v) ? "marked" : "unmarked"
                          , A = "".concat(h, "/").concat(d).toUpperCase()
                          , w = 1 * g || 0
                          , M = (b || "").includes("st")
                          , y = {
                            base: h,
                            quote: d,
                            symbol: v,
                            state: I < +new Date && "pre-online" === C || v === u.symbolCode ? "online" : C,
                            lr: f,
                            isST: M,
                            precision: w,
                            markCluss: _,
                            symbolName: A,
                            estimate: {},
                            trade_open_at: I
                        }
                          , D = "";
                        e.noPart = e.noPart || [],
                        r === d ? a && !h.includes(a) || (s || "hadax" === n ? D = D || "noPart" : (e[n] = e[n] || [],
                        D = D || n)) : "fav" === r && (a && !v.includes(a) || o.has(v) && (D = D || "noPart")),
                        ("offline" === C || p) && (D = !1),
                        "margin" !== c || f || (D = !1);
                        var x = m.c[v] || {}
                          , T = x.rate
                          , N = void 0 === T ? -1 / 0 : T
                          , L = x.close
                          , k = void 0 === L ? 0 : L
                          , j = x.rateText
                          , O = void 0 === j ? "---" : j;
                        if (Object.assign(y, m.c[v], {
                            close: k,
                            rate: N,
                            rateText: O
                        }),
                        t.rateName) {
                            var S = t.rateName
                              , E = t.rateSymbol
                              , P = y || {}
                              , z = P.close
                              , B = P.high
                              , G = P.low;
                            t.toLocal && l && (y.estimate = {
                                rateName: S,
                                rateSymbol: E,
                                close: t.toLocal(h, d, z),
                                high: t.toLocal(h, d, B),
                                low: t.toLocal(h, d, G)
                            })
                        }
                        return D && e[D].push(y),
                        e
                    }, {});
                    s && h.noPart.sort(i(s)),
                    n && h.noPart.reverse();
                    for (var g = 0, d = 0, p = Object.values(h); d < p.length; d++) {
                        g += p[d].length
                    }
                    return Object.defineProperty(h, "length", {
                        value: g
                    }),
                    h
                },
                inputData: function() {
                    return this.inputFilter.trim().toLowerCase()
                },
                hasFav: function() {
                    var t = "margin" === this.exchangeType ? new Set(this.marginSymbols.map(function(t) {
                        return t.symbol_code
                    })) : this.symbolArr;
                    return new Set([].concat(c()(t), c()(this.favList))).size < t.size + this.favList.size
                },
                quoteList: function() {
                    return "margin" === this.exchangeType ? c()(new Set(this.marginSymbols.map(function(t) {
                        return t.quote_currency
                    }))) : c()(this.$store.state.quoteList)
                },
                showClear: function() {
                    return this.isGlobal && this.inputFilter
                }
            }, Object(g.c)({
                symbolArr: function(t) {
                    return new Set(t.originSymbolsList.map(function(t) {
                        return t.symbol_code
                    }))
                },
                symbolData: function(t) {
                    return t.originSymbolsList
                },
                symbolCode: function(t) {
                    return t.exchange.symbolCode
                },
                marginSymbols: function(t) {
                    return t.originSymbolsList.filter(function(t) {
                        return t.leverage_ratio
                    })
                },
                base: function(t) {
                    return t.exchange.base
                },
                quote: function(t) {
                    return t.exchange.quote
                },
                rateName: function(t) {
                    return t.rateName
                },
                exchangeRate: function(t) {
                    return t.exchangeRate
                },
                rateFix: function(t) {
                    return t.rateFix
                },
                ticker: function(t) {
                    return t.exchange.ticker
                },
                rateSymbol: function(t) {
                    return t.rateSymol
                },
                ts: function(t) {
                    return t.exchange.ts
                },
                isLogin: function(t) {
                    return t.user.isLogin
                },
                exchangeType: function(t) {
                    return t.exchange.exchangeType
                },
                lsCurQuote: function(t) {
                    return t.exchange.lsCurQuote
                },
                pageVisible: function(t) {
                    return t.pageVisible
                },
                primeInfo: function(t) {
                    return t.exchange.primeInfo
                }
            })),
            mounted: function() {
                var t = this
                  , e = localStorage.isLocalPrice || 0;
                1 * e && (this.isLocalPrice = e),
                setTimeout(function() {
                    t.initFavList()
                }, 0)
            },
            methods: {
                fix: d.c,
                initFavList: function() {
                    var t = r()(regeneratorRuntime.mark(function t() {
                        var e, s, i;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    v.b.pairGet();
                                case 2:
                                    if (!(e = t.sent).success) {
                                        t.next = 7;
                                        break
                                    }
                                    return this.$set(this, "favList", new Set(e.data)),
                                    this.setCurQuote(),
                                    t.abrupt("return");
                                case 7:
                                    (s = localStorage.mark_symbol) && (i = new Set(Object.keys(JSON.parse(s))),
                                    this.$set(this, "favList", i)),
                                    this.setCurQuote();
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                changeQuote: function(t) {
                    this.curQuote = t
                },
                sortByFn: function(t) {
                    return "symbol" === t ? function(e, s) {
                        return e[t] > s[t] ? 1 : -1
                    }
                    : "close" === t && this.isLocalPrice && this.toLocal ? function(t, e) {
                        return (1 * t.estimate.close || 0) > (1 * e.estimate.close || 0) ? 1 : -1
                    }
                    : function(e, s) {
                        return 1 * e[t] > 1 * s[t] ? 1 : -1
                    }
                },
                toggleLocalPrice: function() {
                    this.isLocalPrice = !this.isLocalPrice,
                    localStorage.setItem("isLocalPrice", +this.isLocalPrice)
                },
                changeSortBy: function(t) {
                    var e = "desc" === this.sortDirect
                      , s = this.sortBy;
                    if (!e && s && t === s)
                        return this.sortBy = "",
                        void (this.sortDirect = "asc");
                    t === s ? this.sortDirect = e ? "asc" : "desc" : (this.sortBy = t,
                    this.sortDirect = "desc")
                },
                go: function(t) {
                    var e = t.base
                      , s = t.quote
                      , i = t.lr
                      , a = t.state;
                    (this.isGlobal || "online" === a) && (this.$emit("selectSymbol", e === this.base && s === this.quote, this.curQuote),
                    this.$store.commit("exchange/SET_SYMBOL", [e, s]),
                    i ? localStorage.setItem("HBP_MARGIN_HASH", "".concat(e, "_").concat(s)) : this.$store.commit("exchange/SET_EXCHANGE_TYPE", "exchange"),
                    localStorage.setItem("HBP_SYMBOLS_HASH", "".concat(e, "_").concat(s)),
                    this.$store.commit("exchange/SET_CUR_QUOTE", this.curQuote),
                    "margin" === this.exchangeType && "en-us" !== this.$store.state.locale ? this.$router.push("/".concat(this.$store.state.locale, "/margin/?s=").concat(e, "_").concat(s)) : this.$router.push("/".concat(this.$store.state.locale, "/exchange/?s=").concat(e, "_").concat(s)))
                },
                setLocalFavList: function() {
                    if (this.favList.size) {
                        var t = JSON.stringify(c()(this.favList).reduce(function(t, e) {
                            return t[e] = "marked",
                            t
                        }, {}));
                        localStorage.setItem("mark_symbol", t)
                    } else
                        localStorage.setItem("mark_symbol", "")
                },
                fav: function() {
                    var t = r()(regeneratorRuntime.mark(function t(e, s) {
                        var i;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (i = this.favList,
                                    "marked" !== s) {
                                        t.next = 11;
                                        break
                                    }
                                    if (i.delete(e),
                                    !this.isLogin) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 6,
                                    v.b.pairDel(e);
                                case 6:
                                    t.next = 9;
                                    break;
                                case 8:
                                    this.setLocalFavList();
                                case 9:
                                    t.next = 18;
                                    break;
                                case 11:
                                    if (i.add(e),
                                    !this.isLogin) {
                                        t.next = 17;
                                        break
                                    }
                                    return t.next = 15,
                                    v.b.pairSet(e);
                                case 15:
                                    t.next = 18;
                                    break;
                                case 17:
                                    this.setLocalFavList();
                                case 18:
                                    this.$store.commit("exchange/SET_TS");
                                case 19:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function(e, s) {
                        return t.apply(this, arguments)
                    }
                }(),
                toLocal: function(t, e, s) {
                    var i = p.a.getEstimate(e, "usdt", s);
                    if ("usdt" === t && (i = 1),
                    i) {
                        var a = Object(d.d)(Object(d.e)(i, this.exchangeRate), this.rateFix);
                        return 1 * a ? a : 0
                    }
                },
                clearSearchValue: function() {
                    this.inputFilter = ""
                },
                setCurQuote: function() {
                    this.isGlobal ? this.setGlobalQuote() : this.setEnQuote()
                },
                setGlobalQuote: function() {
                    if (this.lsCurQuote)
                        this.curQuote = this.lsCurQuote;
                    else if (this.$route.query.s) {
                        var t = this.$route.query.s.split("_")
                          , e = a()(t, 2)
                          , s = e[0]
                          , i = e[1]
                          , n = this.favList.has("".concat(s).concat(i));
                        this.curQuote = n ? "fav" : i
                    } else
                        this.curQuote = this.hasFav ? "fav" : this.quote
                },
                setEnQuote: function() {
                    this.$route.query.s ? this.curQuote = this.$route.query.s.split("_")[1] : this.curQuote = this.hasFav ? "fav" : this.quote
                }
            },
            watch: {
                quote: function(t, e) {
                    "---" === e && this.setCurQuote()
                }
            }
        }
          , A = (s(516),
        Object(f.a)(_, function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("Mod", {
                staticClass: "coin-switch",
                attrs: {
                    id: "coin-switch"
                }
            }, [s("div", {
                staticClass: "mod-head tabs coin-switch-tabs",
                attrs: {
                    slot: "head"
                },
                slot: "head"
            }, [s("span", {
                staticClass: "mock-a fav",
                class: "fav" === t.curQuote && "cur",
                on: {
                    click: function(e) {
                        return t.changeQuote("fav")
                    }
                }
            }, [s("i", {
                staticClass: "hb_icon_marked"
            }), t._v(" "), t.isGlobal ? s("em", [t._v("自选")]) : t._e()]), t._v(" "), t._l(t.quoteList, function(e) {
                return s("span", {
                    key: e,
                    staticClass: "mock-a upper",
                    class: t.curQuote === e && "cur",
                    on: {
                        click: function(s) {
                            return t.changeQuote(e)
                        }
                    }
                }, [t._v(t._s(e))])
            }), t._v(" "), s("div", {
                staticClass: "actions"
            }, [s("div", {
                staticClass: "input-box"
            }, [s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.inputFilter,
                    expression: "inputFilter"
                }],
                attrs: {
                    type: "text",
                    placeholder: "搜索",
                    maxlength: "9"
                },
                domProps: {
                    value: t.inputFilter
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.inputFilter = e.target.value)
                    }
                }
            }), t._v(" "), s("i", {
                staticClass: "hb_icon_search"
            }), t._v(" "), s("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showClear,
                    expression: "showClear"
                }],
                staticClass: "hb_icon_clear",
                on: {
                    click: t.clearSearchValue
                }
            })]), t._v(" "), "none" !== t.rateName ? s("button", {
                staticClass: "upper",
                class: t.isLocalPrice && "active",
                on: {
                    click: function(e) {
                        return t.toggleLocalPrice()
                    }
                }
            }, [s("i", {
                staticClass: "hb_icon_switch"
            }), t._v(t._s(t.rateName) + "\n            ")]) : t._e()])], 2), t._v(" "), s("div", {
                staticClass: "coin-switch-content",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("dl", {
                class: t.curQuote
            }, [s("dt", [s("span", {
                staticClass: "currency",
                on: {
                    click: function(e) {
                        return t.changeSortBy("symbol")
                    }
                }
            }, [t._v("币种\n                    "), s("i", {
                class: "symbol" === t.sortBy && t.sortDirect
            })]), t._v(" "), s("span", {
                staticClass: "price",
                on: {
                    click: function(e) {
                        return t.changeSortBy("close")
                    }
                }
            }, [t._v("最新价\n                    "), t.isLocalPrice ? s("em", {
                staticClass: "upper"
            }, [t._v(t._s("none" !== t.rateName ? "(" + t.rateName + ")" : ""))]) : t._e(), t._v(" "), s("i", {
                class: "close" === t.sortBy && t.sortDirect
            })]), t._v(" "), s("span", {
                staticClass: "rate",
                on: {
                    click: function(e) {
                        return t.changeSortBy("rate")
                    }
                }
            }, [t._v("涨幅\n                    "), s("i", {
                class: "rate" === t.sortBy && t.sortDirect
            })]), t._v(" "), s("span", {
                staticClass: "amount24",
                on: {
                    click: function(e) {
                        return t.changeSortBy("amount")
                    }
                }
            }, [t._v("24h Volume\n                    "), s("i", {
                class: "amount" === t.sortBy && t.sortDirect
            })])]), t._v(" "), t.symbolObj.length ? s("dd", t._l(t.symbolObj, function(e, i) {
                return s("dl", {
                    key: i
                }, ["noPart" !== i ? s("dt") : t._e(), t._v(" "), t._l(t.pageVisible ? e : [], function(e) {
                    return s("dd", {
                        key: e.symbol,
                        staticClass: "upper",
                        class: [e.state, e.symbol === t.symbolCode && "cur"],
                        on: {
                            click: function(s) {
                                return t.go(e)
                            }
                        }
                    }, [s("span", {
                        staticClass: "currency"
                    }, [s("i", {
                        class: "hb_icon_marked " + e.markCluss,
                        on: {
                            click: function(s) {
                                return s.stopPropagation(),
                                t.fav(e.symbol, e.markCluss)
                            }
                        }
                    }), t._v("\n                            " + t._s("fav" === t.curQuote ? e.symbolName : e.base) + "\n                            "), "online" === e.state ? s("em", {
                        staticClass: "tags",
                        class: {
                            "hide-tags": "fav" === t.curQuote
                        }
                    }, [!t.hideRatio && e.lr ? s("i", {
                        staticClass: "ratio"
                    }, [t._v(t._s(e.lr) + "X")]) : t._e(), t._v(" "), e.isST ? s("i", {
                        staticClass: "st",
                        class: {
                            "hide-st": t.isGlobal && "margin" === t.exchangeType
                        }
                    }, [t._v("ST")]) : t._e(), t._v(" "), "hb10" === e.base ? s("i", {
                        staticClass: "ratio"
                    }, [t._v("\n                                    ETP\n                                ")]) : t._e()]) : s("Tooltips", {
                        staticClass: "not-online-tips"
                    }, [s("i", {
                        staticClass: "hb_icon_tip"
                    }), t._v(" "), "pre-online" === e.state ? s("TimeLeft", {
                        attrs: {
                            slot: "content",
                            timeleft: e.trade_open_at
                        },
                        slot: "content"
                    }) : s("div", {
                        staticClass: "tips-text",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [t._v("\n                                    Temporarily not available for trade\n                                ")])], 1)], 1), t._v(" "), t.isLocalPrice ? s("span", {
                        staticClass: "change"
                    }, [t._v(t._s(e.estimate.close || "---"))]) : s("span", {
                        staticClass: "price",
                        attrs: {
                            "growing-ignore": "true"
                        }
                    }, [t._v("\n                            " + t._s(e.close ? t.fix(e.close, e.precision) : "---") + "\n                        ")]), t._v(" "), s("span", {
                        staticClass: "rate",
                        class: "color-" + e.rateCluss,
                        attrs: {
                            "growing-ignore": "true"
                        }
                    }, [t._v(t._s(e.rate ? e.rateText : "---"))]), t._v(" "), s("span", {
                        staticClass: "amount"
                    }, [t._v(t._s(t._f("s2l")(e.amount ? t.fix(e.amount, 0) : "---")))])])
                })], 2)
            }), 0) : s("dd", {
                staticClass: "no-data"
            }, [s("span", [t._v("暂无记录")])])])])])
        }, [], !1, null, "30482236", null));
        e.a = A.exports
    },
    488: function(t, e, s) {
        "use strict";
        s(19),
        s(40),
        s(66),
        s(35),
        s(34),
        s(38);
        var i = s(4)
          , a = s.n(i)
          , n = s(486)
          , r = s(11)
          , o = s(59)
          , c = s(79)
          , l = s(3)
          , u = s(140)
          , h = s(14)
          , g = s(330)
          , d = s(6)
          , p = s(348)
          , m = {
            name: "Ticker",
            components: {
                CoinSwitch: n.a,
                GlobalCurrencyIntro: function() {
                    return s.e(43).then(s.bind(null, 689))
                }
            },
            props: {
                global: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    showCoinSwitch: !1,
                    amount: "---",
                    estimate: "",
                    estimateReady: 0,
                    defaultFav: 1,
                    showThemetip: !1,
                    showGlobalTheme: !1,
                    showCurrencyIntro: !1,
                    currencyIntroText: "---"
                }
            },
            computed: a()({
                isGlobal: function() {
                    return "en-us" !== this.$store.state.locale
                },
                symbolType: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    if (!e)
                        return "";
                    var s = t[e];
                    return s ? (s.tags || "").includes("hadax") ? "创业板" : "主板" : ""
                },
                tipsText: function() {
                    return "创业板" === this.symbolType ? "主要交易品种为高潜力的初期优质区块链资产。" : "火币主板即原火币全球站，主要交易品种为相对成熟的优质区块链资产。"
                },
                tpp: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    return t[e] && t[e].trade_price_precision || 0
                },
                symbolName: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    return t[e] && t[e].display_name || "---/---"
                },
                themeCluss: function() {
                    return this.theme && {
                        day: "night",
                        night: "day"
                    }[this.theme.split("-")[1]] || "night"
                },
                estimateText: function() {
                    return this.estimate ? "≈ ".concat(this.estimate, " ").concat(this.rateName.toUpperCase()) : ""
                },
                showPriceEstimate: function() {
                    return "none" === this.rateName ? "hide" : ""
                },
                isST: function() {
                    var t = this.symbolsObj[this.symbolCode];
                    return this.isGlobal && t && (t.tags || "").includes("st")
                },
                hide: function() {
                    return this.isPrime && 1 !== this.primeStatus.state && this.isPrimeNormal
                }
            }, Object(r.b)({
                isPrime: "exchange/isPrime",
                isPrimeNormal: "exchange/isPrimeNormal"
            }), Object(r.c)({
                ticker: function(t) {
                    return t.exchange.ticker
                },
                symbolCode: function(t) {
                    return t.exchange.symbolCode
                },
                BASE: function(t) {
                    return t.exchange.base.toUpperCase()
                },
                base: function(t) {
                    return t.exchange.base
                },
                quote: function(t) {
                    return t.exchange.quote
                },
                QUOTE: function(t) {
                    return t.exchange.quote.toUpperCase()
                },
                symbolsObj: function(t) {
                    return t.symbolsObj
                },
                exchangeRate: function(t) {
                    return t.exchangeRate
                },
                rateFix: function(t) {
                    return t.rateFix
                },
                rateName: function(t) {
                    return t.rateName
                },
                theme: function(t) {
                    return t.exchange.theme
                },
                primeEnable: function(t) {
                    return t.primeEnable
                },
                primeStatus: function(t) {
                    return t.exchange.primeStatus
                }
            })),
            mounted: function() {
                var t = this;
                this.ws = o.a.handsup(c.a.ws),
                h.a.subOnce("estimate.done", function() {
                    t.estimateReady = 1
                }),
                this.showThemetip = !localStorage.themeTip,
                document.title = "火币Global",
                document.body.addEventListener("click", this.hideCoinSwitch)
            },
            methods: {
                coinSwitchSelected: function(t, e) {
                    "fav" !== e && (this.defaultFav = 0),
                    t && this.toggleCoinSwitch()
                },
                toggleCoinSwitch: function() {
                    this.showCoinSwitch = !this.showCoinSwitch,
                    this.isGlobal || this.$nuxt.$emit("symbolDOM", this.showCoinSwitch)
                },
                toggleTheme: function() {
                    this.$store.commit("exchange/SET_THEME", {
                        "hb-day": "hb-night",
                        "hb-night": "hb-day",
                        "hb-dark": "hb-day"
                    }[this.theme])
                },
                initData: function() {
                    var t = p.c[this.symbolCode] || {}
                      , e = t.close
                      , s = t.rateCluss
                      , i = t.rateText;
                    this.$store.commit("exchange/SET_TICKER", {
                        close: e,
                        rateCluss: s,
                        rateText: i
                    }),
                    this.$store.commit("exchange/SET_TS"),
                    this.amount = "---",
                    this.tickerAPI = Object(o.b)().sub({
                        symbol: this.symbolCode
                    }).ticker(),
                    this.ws.plugin(this.tickerAPI, this.formatData)
                },
                formatData: function(t) {
                    var e = this.symbolCode
                      , s = this.BASE
                      , i = this.QUOTE
                      , n = this.tpp;
                    if (!t.subbed) {
                        var r = t.tick
                          , o = r.amount
                          , c = r.close;
                        this.amount = o,
                        t.ch.includes(e) && (p.c[e].close = c);
                        var u = [{
                            type: "t",
                            key: "symbol",
                            value: "".concat(s, "/").concat(i)
                        }, {
                            type: "t",
                            key: "close",
                            value: Object(l.c)(c, n)
                        }];
                        document.title = Object(g.b)("exchange", u).t
                    }
                    var h = p.c[e] || {}
                      , d = h.close
                      , m = h.open
                      , v = Object(p.a)({
                        close: d,
                        open: m
                    });
                    p.c[e] = Object.assign({}, p.c[e], a()({}, v)),
                    this.$store.commit("exchange/SET_TICKER", a()({}, t.tick, v)),
                    this.$store.commit("exchange/SET_TS")
                },
                toLocal: function(t, e, s) {
                    var i = u.a.getEstimate(e, "usdt", s);
                    if ("usdt" === t && (i = 1),
                    s && i)
                        return Object(l.d)(Object(l.e)(i, this.exchangeRate), this.rateFix)
                },
                hideCoinSwitch: function(t) {
                    var e = t.target
                      , s = (Object(d.e)(e, "stop") || {}).node;
                    s !== this.$refs.symbolNameDOM && this.$refs.coinSwitchDOM && s !== this.$refs.coinSwitchDOM.$el && (this.showCoinSwitch = !1,
                    this.$nuxt.$emit("symbolDOM", this.showCoinSwitch)),
                    this.showGlobalTheme = !1,
                    this.isGlobal && this.$nuxt.$emit("symbolDOM", this.showGlobalTheme)
                },
                stopEv: function(t) {},
                toggleGlobalTheme: function() {
                    this.showGlobalTheme = !this.showGlobalTheme,
                    this.$nuxt.$emit("symbolDOM", this.showGlobalTheme)
                },
                changeGlobalTheme: function(t) {
                    this.$store.commit("exchange/SET_THEME", t)
                },
                getCurrencyIntro: function() {
                    this.showCurrencyIntro = !0
                },
                confirmThemeTip: function() {
                    this.$set(this, "showThemetip", !1),
                    localStorage.setItem("themeTip", !0)
                },
                t: function(t) {
                    return t
                },
                ts: function(t) {
                    for (var e = this, s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
                        i[a - 1] = arguments[a];
                    return i.forEach(function(s) {
                        t = e.t(t).replace("{0}", s)
                    }),
                    t
                },
                calcEstimate: function() {
                    this.estimate = this.toLocal(this.base, this.quote, this.ticker.close) || ""
                }
            },
            beforeDestroy: function() {
                this.ws && this.tickerAPI && this.ws.unplug(this.tickerAPI, this.formatData),
                document.removeEventListener("click", this.hideCoinSwitch)
            },
            watch: {
                "$store.state.exchange.ticker": function() {
                    this.calcEstimate()
                },
                "$store.state.exchange.ts": function() {
                    this.calcEstimate()
                },
                "$store.state.exchange.symbolCode": function() {
                    this.ws && this.tickerAPI && this.ws.unplug(this.tickerAPI, this.formatData),
                    this.estimate = "",
                    this.initData(),
                    this.showCoinSwitch && this.toggleCoinSwitch()
                }
            }
        }
          , v = (s(517),
        s(5))
          , C = Object(v.a)(m, function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "ticker"
            }, [s("span", {
                ref: "symbolNameDOM",
                staticClass: "symbol-name",
                class: {
                    checked: t.showCoinSwitch
                },
                attrs: {
                    stop: "1"
                },
                on: {
                    click: function(e) {
                        return t.toggleCoinSwitch()
                    },
                    mouseover: function(e) {
                        t.isGlobal && t.getCurrencyIntro()
                    }
                }
            }, [t._v(t._s(t.symbolName) + "\n        "), s("i", {
                staticClass: "dropdown icon-arrow-down-blue"
            }), t._v(" "), s("GlobalCurrencyIntro", {
                attrs: {
                    quote: t.quote,
                    currency: t.showCurrencyIntro && t.base
                }
            })], 1), t._v(" "), s("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.symbolType,
                    expression: "symbolType"
                }],
                staticClass: "symbol-type"
            }, [t._v(t._s(t.symbolType) + "\n        "), s("div", {
                staticClass: "tips"
            }, [s("h3", [t._v(t._s(t.symbolType))]), t._v(" "), s("p", {
                staticClass: "content"
            }, [t._v(t._s(t.tipsText))])])]), t._v(" "), t.isST ? s("span", {
                staticClass: "symbol-type symbol-st"
            }, [t._v("ST\n        "), s("div", {
                staticClass: "tips"
            }, [s("p", {
                staticClass: "content"
            }, [s("i", {
                staticClass: "hb_icon_toast_failed"
            }), t._v(" "), s("span", [t._v(t._s(t.ts("{0}有退市的风险，详情请查看火币公告。", t.BASE + "/" + t.QUOTE)))])])])]) : t._e(), t._v(" "), t.hide ? t._e() : ["hb10" === t.base && t.isGlobal ? s("span", {
                staticClass: "symbol-type symbol-etp"
            }, [t._v("ETP\n            "), t._m(0)]) : t._e(), t._v(" "), s("div", {
                staticClass: "price-container",
                attrs: {
                    "growing-ignore": "true"
                }
            }, [s("span", {
                staticClass: "price",
                class: "color-" + t.ticker.rateCluss + " " + t.showPriceEstimate
            }, [t._v(t._s(t._f("fix")(t.ticker.close || "---", t.tpp)))]), t._v(" "), t.estimateReady ? s("span", {
                staticClass: "estimate",
                class: t.showPriceEstimate
            }, [t._v(t._s(t.estimateText))]) : t._e()]), t._v(" "), s("dl", {
                staticClass: "change",
                attrs: {
                    "growing-ignore": "true"
                }
            }, [s("dt", [t._v("涨幅")]), s("dd", {
                class: "color-" + t.ticker.rateCluss
            }, [t._v(t._s(t.ticker.rateText || "---"))])]), t._v(" "), s("dl", {
                staticClass: "high",
                attrs: {
                    "growing-ignore": "true"
                }
            }, [s("dt", [t._v("最高价")]), s("dd", [t._v(t._s(t._f("fix")(t.ticker.high || "---", t.tpp)))])]), t._v(" "), s("dl", {
                staticClass: "low",
                attrs: {
                    "growing-ignore": "true"
                }
            }, [s("dt", [t._v("最低价")]), s("dd", [t._v(t._s(t._f("fix")(t.ticker.low || "---", t.tpp)))])]), t._v(" "), s("dl", {
                staticClass: "amount",
                attrs: {
                    "growing-ignore": "true"
                }
            }, [s("dt", [t._v("24H量")]), s("dd", [t._v(t._s(t._f("s2l")(t._f("fix")(t.amount, "0"))) + " " + t._s(t.BASE))])])], t._v(" "), t.global ? t._e() : s("div", [s("button", {
                staticClass: "setTheme",
                on: {
                    click: t.toggleTheme
                }
            }, [s("i", {
                class: "hb_icon_" + t.themeCluss
            })])]), t._v(" "), t.global ? s("div", {
                staticClass: "globalTheme"
            }, [s("button", {
                staticClass: "setTheme",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleGlobalTheme(e)
                    }
                }
            }, [s("i")]), t._v(" "), s("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showGlobalTheme,
                    expression: "showGlobalTheme"
                }],
                staticClass: "theme-style"
            }, [s("li", {
                class: {
                    cur: "hb-day" === t.theme
                },
                on: {
                    click: function(e) {
                        return t.changeGlobalTheme("hb-day")
                    }
                }
            }, [s("i", {
                staticClass: "day"
            }), s("p", [t._v("白色")])]), t._v(" "), s("li", {
                class: {
                    cur: "hb-night" === t.theme
                },
                on: {
                    click: function(e) {
                        return t.changeGlobalTheme("hb-night")
                    }
                }
            }, [s("i", {
                staticClass: "night"
            }), s("p", [t._v("深蓝色")])]), t._v(" "), s("li", {
                class: {
                    cur: "hb-dark" === t.theme
                },
                on: {
                    click: function(e) {
                        return t.changeGlobalTheme("hb-dark")
                    }
                }
            }, [s("i", {
                staticClass: "dark"
            }), s("p", [t._v("黑色")])])]), t._v(" "), t.showThemetip ? s("div", {
                staticClass: "theme-tips"
            }, [s("div", {
                staticClass: "theme-wrap"
            }, [s("div", {
                staticClass: "theme-tips-icon"
            }), t._v(" "), s("div", {
                staticClass: "theme-tips-bg"
            }, [s("i"), t._v(" "), s("div", [s("span", [t._v("点击这里可以切换不同主题皮肤")]), t._v(" "), s("em", {
                on: {
                    click: t.confirmThemeTip
                }
            }, [t._v("我知道了")])])])])]) : t._e()]) : t._e(), t._v(" "), t.global ? t._e() : s("CoinSwitch", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showCoinSwitch,
                    expression: "showCoinSwitch"
                }],
                ref: "coinSwitchDOM",
                attrs: {
                    stop: "1",
                    "default-fav": t.defaultFav
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.stopEv(e)
                    },
                    selectSymbol: t.coinSwitchSelected
                }
            })], 2)
        }, [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "tips"
            }, [e("p", {
                staticClass: "content no-margin"
            }, [e("span", [this._v("HB10是一款以“火币主力指数”为跟踪对象的指数型数字资产，更多详情请查看HB10基本信息。")])])])
        }
        ], !1, null, null, null);
        e.a = C.exports
    },
    489: function(t, e, s) {
        "use strict";
        s(66);
        var i = s(4)
          , a = s.n(i)
          , n = s(336)
          , r = s(59)
          , o = s(79)
          , c = (s(3),
        s(11))
          , l = {
            name: "MarketTrades",
            components: {
                Mod: n.a
            },
            props: {
                global: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    loading: !0,
                    tradesRaw: []
                }
            },
            computed: a()({
                trades: function() {
                    return this.tradesRaw.map(function(t) {
                        return {
                            id: t.id,
                            price: t.price,
                            amount: t.amount,
                            time: t.ts,
                            color: "color-".concat(t.direction)
                        }
                    })
                },
                tpp: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    return t[e] && t[e].trade_price_precision || 0
                },
                tap: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    return t[e] && t[e].trade_amount_precision || 0
                }
            }, Object(c.c)({
                symbolsObj: function(t) {
                    return t.symbolsObj
                },
                symbolCode: function(t) {
                    return t.exchange.symbolCode
                },
                BASE: function(t) {
                    return t.exchange.base.toUpperCase()
                },
                QUOTE: function(t) {
                    return t.exchange.quote.toUpperCase()
                },
                pageVisible: function(t) {
                    return t.pageVisible
                }
            })),
            watch: {
                symbolCode: function(t) {
                    this.ws && this.tradesSubAPI && this.ws.unplug(this.tradesSubAPI, this.formatData),
                    this.tradesRaw = [],
                    this.loading = !0,
                    this.initWs(t)
                }
            },
            mounted: function() {
                this.ws = r.a.handsup(o.a.ws)
            },
            methods: {
                initData: function(t) {
                    this.loading = !1,
                    this.formatData(t, 1)
                },
                formatData: function(t, e) {
                    this.loading = !1,
                    e ? this.$set(this, "tradesRaw", t.data.slice(0, 100)) : t.subbed || this.$set(this, "tradesRaw", t.tick.data.concat(this.tradesRaw).slice(0, 100))
                },
                initWs: function(t) {
                    this.tradesAPI = Object(r.b)().req({
                        symbol: t
                    }).trade(),
                    this.ws.plugin(this.tradesAPI, this.initData),
                    this.tradesSubAPI = Object(r.b)().sub({
                        symbol: t
                    }).trade(),
                    this.ws.plugin(this.tradesSubAPI, this.formatData),
                    this.loading = !1
                }
            },
            beforeDestroy: function() {
                this.ws && this.tradesSubAPI && this.ws.unplug(this.tradesSubAPI, this.formatData)
            }
        }
          , u = (s(530),
        s(5))
          , h = Object(u.a)(l, function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("Mod", {
                staticClass: "market-trades",
                class: {
                    global: t.global
                }
            }, [s("div", {
                staticClass: "mod-head",
                attrs: {
                    slot: "head"
                },
                slot: "head"
            }, [t._v("Market trades")]), t._v(" "), s("div", {
                staticClass: "mod-body",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("dl", {
                class: {
                    loading: t.loading
                }
            }, [s("dt", [s("span", {
                staticClass: "price"
            }, [t._v("价格 (" + t._s(t.QUOTE) + ")")]), t._v(" "), s("span", {
                staticClass: "amount"
            }, [t._v("数量 (" + t._s(t.BASE) + ")")]), t._v(" "), s("span", {
                staticClass: "time"
            }, [t._v("时间")])]), t._v(" "), s("dd", {
                attrs: {
                    "growing-ignore": "true"
                }
            }, t._l(t.pageVisible ? t.trades : [], function(e, i) {
                return s("p", {
                    key: i
                }, [s("span", {
                    staticClass: "price",
                    class: e.color
                }, [t._v(t._s(t._f("fix")(e.price, t.tpp)))]), t._v(" "), s("span", {
                    staticClass: "amount"
                }, [t._v(t._s(t._f("fix")(e.amount, t.tap)))]), t._v(" "), s("span", {
                    staticClass: "time"
                }, [t._v(t._s(t._f("t2d")(e.time, "h:i:s")))])])
            }), 0)])])])
        }, [], !1, null, "44d0d3c6", null);
        e.a = h.exports
    },
    490: function(t, e, s) {
        "use strict";
        s(60),
        s(61),
        s(30),
        s(9);
        var i = s(1)
          , a = s.n(i)
          , n = (s(66),
        s(4))
          , r = s.n(n)
          , o = s(11)
          , c = s(18)
          , l = s(140)
          , u = s(14)
          , h = s(3)
          , g = s(6)
          , d = s(7)
          , p = {
            1: "diamond",
            2: "gold"
        }
          , m = {
            name: "Balance",
            components: {
                A: c.a
            },
            data: function() {
                return {
                    baseBalance: "---",
                    quoteBalance: "---",
                    flPrice: 0,
                    riskRate: 2,
                    flType: 0,
                    flState: "",
                    isLiquidating: !1,
                    baseTrade: 0,
                    baseLoan: 0,
                    baseLoanAvailable: 0,
                    quoteTrade: 0,
                    quoteLoan: 0,
                    quoteLoanAvailable: 0
                }
            },
            computed: r()({
                isGlobal: function() {
                    return "en-us" !== this.$store.state.locale
                },
                showSwitch: function() {
                    return this.hasMargin && this.isLogin && 2 !== this.userInfo.user_type
                },
                hasMargin: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    return t[e] && t[e].leverage_ratio
                },
                flPriceText: function() {
                    return isNaN(1 * this.flPrice) ? "" : "".concat(Object(h.c)(this.flPrice, this.quoteSP))
                },
                riskRateWidth: function() {
                    return "".concat((this.riskRate - 1.1) / .9 * 100)
                },
                riskRateText: function() {
                    return 2 === this.riskRate ? "无风险" : !this.isGlobal && this.isLiquidating ? "Liquidating" : "".concat(Object(h.c)(Object(h.e)(this.riskRate, 100), 0), "%")
                },
                ttp: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    return t[e] && t[e].trade_total_precision || 0
                },
                baseSP: function() {
                    var t = this.currencysObj
                      , e = this.base;
                    return t[e] && t[e].show_precision || 0
                },
                quoteSP: function() {
                    var t = this.currencysObj
                      , e = this.quote;
                    return t[e] && t[e].show_precision || 0
                },
                levelClass: function() {
                    return p[this.level] || "hide"
                },
                primeAmountText: function() {
                    var t = this.primeUserLimit;
                    return "Prime交易额度为： ".concat(t || 0, " HT")
                },
                showPrimeIcons: function() {
                    return this.isPrimeNormal
                }
            }, Object(o.b)({
                isPrimeNormal: "exchange/isPrimeNormal"
            }), Object(o.c)({
                currencysObj: function(t) {
                    return t.currencysObj
                },
                exchangeType: function(t) {
                    return t.exchange.exchangeType
                },
                symbolCode: function(t) {
                    return t.exchange.symbolCode
                },
                symbolsObj: function(t) {
                    return t.symbolsObj
                },
                base: function(t) {
                    return t.exchange.base
                },
                quote: function(t) {
                    return t.exchange.quote
                },
                BASE: function(t) {
                    return t.exchange.base.toUpperCase()
                },
                QUOTE: function(t) {
                    return t.exchange.quote.toUpperCase()
                },
                locale: function(t) {
                    return t.locale
                },
                isLogin: function(t) {
                    return t.user.isLogin
                },
                userInfo: function(t) {
                    return t.user.userInfo
                },
                primeUserLimit: function(t) {
                    return t.exchange.primeUserLimit
                },
                level: function(t) {
                    return t.user.level
                }
            })),
            mounted: function() {
                var t, e = this;
                u.a.sub("balance.done, marginBalance.done", function() {
                    clearTimeout(t),
                    t = setTimeout(e.updateBalance, 100)
                })
            },
            methods: {
                updateBalance: function() {
                    var t = a()(regeneratorRuntime.mark(function t() {
                        var e, s, i, a, n, r, o, c, u, h, g, p;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.symbolCode) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if ("margin" !== this.exchangeType) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 5,
                                    d.c.marginBalance({
                                        params: {
                                            symbol: this.symbolCode
                                        }
                                    });
                                case 5:
                                    e = t.sent,
                                    s = e.success,
                                    i = e.data,
                                    s && i.length && (a = i[0] || {},
                                    n = a["fl-price"],
                                    r = void 0 === n ? this.flPrice : n,
                                    o = a["risk-rate"],
                                    c = void 0 === o ? 2 : o,
                                    u = a["fl-type"],
                                    h = void 0 === u ? "" : u,
                                    g = a.state,
                                    p = a.list,
                                    this.flPrice = r,
                                    this.riskRate = Math.min(c, 2),
                                    this.flState = this.riskRate <= 1.4 ? "warn" : "",
                                    this.flType = h,
                                    this.isLiquidating = "fl-sys" === g || "fl-mgt" === g,
                                    this.$emit("Liquidate", this.isLiquidating),
                                    this.setMarginInfo(p));
                                case 9:
                                    this.baseBalance = l.a.get(this.base, "trade", "margin" === this.exchangeType && this.symbolCode),
                                    this.quoteBalance = l.a.get(this.quote, "trade", "margin" === this.exchangeType && this.symbolCode),
                                    this.isPrimeNormal && (this.quoteBalance = Math.min(this.quoteBalance, this.primeUserLimit));
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                setMarginInfo: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    if ("en-us" !== this.$store.state.locale)
                        if (t.length) {
                            var e = !0
                              , s = !1
                              , i = void 0;
                            try {
                                for (var a, n = t[Symbol.iterator](); !(e = (a = n.next()).done); e = !0) {
                                    var r = a.value
                                      , o = r.type
                                      , c = r.currency
                                      , l = r.balance
                                      , u = c === this.base ? "base" : "quote";
                                    this[Object(g.f)("".concat(u, "-").concat(o))] = Math.abs(l)
                                }
                            } catch (t) {
                                s = !0,
                                i = t
                            } finally {
                                try {
                                    e || null == n.return || n.return()
                                } finally {
                                    if (s)
                                        throw i
                                }
                            }
                        } else
                            this.resetMarginInfo()
                },
                resetMarginInfo: function() {
                    this.baseTrade = 0,
                    this.baseLoan = 0,
                    this.baseLoanAvailable = 0,
                    this.quoteTrade = 0,
                    this.quoteLoan = 0,
                    this.quoteLoanAvailable = 0
                },
                initBalance: function() {
                    this.isLogin && ("margin" === this.exchangeType ? l.a.setBalance(this.symbolCode) : l.a.setBalance("spot"),
                    l.a.reload(),
                    this.updateBalance())
                },
                changeExchange: function(t) {
                    "margin" === t && localStorage.setItem("HBP_MARGIN_HASH", "".concat(this.base, "_").concat(this.quote)),
                    this.$store.commit("exchange/SET_EXCHANGE_TYPE", t)
                },
                initMarginGuide: function() {
                    this.isLogin && this.hasMargin && this.$store.commit("exchange/SET_EXCHANGE_TYPE", "margin")
                }
            },
            watch: {
                symbolCode: function() {
                    this.initBalance()
                },
                exchangeType: {
                    handler: function(t) {
                        this.initBalance()
                    },
                    immediate: !0
                },
                isLogin: {
                    handler: function(t) {
                        this.initBalance()
                    },
                    immediate: !0
                }
            }
        }
          , v = (s(529),
        s(5))
          , C = Object(v.a)(m, function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "balance-wrap",
                attrs: {
                    "growing-ignore": "true"
                }
            }, [s("div", {
                staticClass: "balance-box"
            }, [s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isLogin,
                    expression: "!isLogin"
                }],
                staticClass: "login"
            }, [s("A", {
                attrs: {
                    extra: "backurl",
                    url: "/" + t.locale + "/login/"
                }
            }, [t._v("Log In")]), t._v("\n            or\n            "), s("A", {
                attrs: {
                    extra: "backurl",
                    url: "/" + t.locale + "/register/"
                }
            }, [t._v("Sign Up")]), t._v("\n            to trade\n        ")], 1), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isLogin,
                    expression: "isLogin"
                }],
                staticClass: "balance"
            }, [s("span", [s("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPrimeIcons,
                    expression: "showPrimeIcons"
                }],
                staticClass: "level-icon",
                class: t.levelClass
            }), t._v(" "), s("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPrimeIcons,
                    expression: "showPrimeIcons"
                }],
                staticClass: "hb_icon_question_1"
            }, [s("div", {
                staticClass: "tips"
            }, [t._v(t._s(t.primeAmountText))])]), t._v(" "), s("em", [t._v("Available")]), t._v(t._s(t._f("fix")(t.quoteBalance, t.quoteSP)) + " " + t._s(t.QUOTE))]), t._v(" "), s("span", [t._v(t._s(t._f("fix")(t.baseBalance, t.baseSP)) + " " + t._s(t.BASE))])]), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showSwitch,
                    expression: "showSwitch"
                }],
                staticClass: "switch"
            }, [s("button", {
                staticClass: "margin-tab",
                class: "exchange" === t.exchangeType && "cur",
                on: {
                    click: function(e) {
                        return t.changeExchange("exchange")
                    }
                }
            }, [t._v("Exchange")]), t._v(" "), s("button", {
                staticClass: "margin-tab",
                class: "margin" === t.exchangeType && "cur",
                on: {
                    click: function(e) {
                        return t.changeExchange("margin")
                    }
                }
            }, [t._v("Margin")])])]), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "margin" === t.exchangeType && t.isLogin,
                    expression: "exchangeType === 'margin' && isLogin"
                }],
                staticClass: "margin-box"
            }, [s("div", {
                staticClass: "margin-detail"
            }, [s("div", {
                staticClass: "icon-arrow"
            }), t._v(" "), s("span", {
                staticClass: "upper"
            }, [t._v(t._s(t.base + "/" + t.quote))]), t._v(" "), t.hasMargin ? s("i", {
                staticClass: "ratio"
            }, [t._v(t._s(t.hasMargin) + "X")]) : t._e(), t._v(" "), s("div", {
                staticClass: "tips"
            }, [s("div", [s("ul", [s("li", [s("span", [t._v("可用" + t._s(t.base))]), s("em", [t._v(t._s(t._f("fix")(t.baseTrade, t.baseSP)))])]), t._v(" "), s("li", [s("span", [t._v("可借" + t._s(t.base))]), s("em", [t._v(t._s(t._f("fix")(t.baseLoanAvailable, 3)))])]), t._v(" "), s("li", [s("span", [t._v("已借" + t._s(t.base))]), s("em", [t._v(t._s(t._f("fix")(t.baseLoan, 8)))])])]), t._v(" "), s("ul", [s("li", [s("span", [t._v("可用" + t._s(t.quote))]), s("em", [t._v(t._s(t._f("fix")(t.quoteTrade, t.quoteSP)))])]), t._v(" "), s("li", [s("span", [t._v("可借" + t._s(t.quote))]), s("em", [t._v(t._s(t._f("fix")(t.quoteLoanAvailable, 3)))])]), t._v(" "), s("li", [s("span", [t._v("已借" + t._s(t.quote))]), s("em", [t._v(t._s(t._f("fix")(t.quoteLoan, 8)))])])])]), t._v(" "), t._m(0)])]), t._v(" "), s("span", {
                staticClass: "risk-rate"
            }, [s("em", [t._v("风险率"), s("i", {
                staticClass: "hb_icon_tip"
            }, [s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isGlobal,
                    expression: "!isGlobal"
                }],
                staticClass: "tips"
            }, [s("h3", [t._v("Risk Rate")]), t._v(" "), s("p", {
                staticClass: "content"
            }, [t._v("When the risk rate is ≤110%, your account will be forced into liquidation")]), t._v(" "), s("p", {
                staticClass: "block"
            }, [t._v("Risk Rate equals Margin Balance/Wallet Balance*100%")])]), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isGlobal,
                    expression: "isGlobal"
                }],
                staticClass: "tips"
            }, [s("span", [t._v("总资产/借贷资产*100%")])])])]), s("b", {
                class: t.flState
            }, [t._v(t._s(t.riskRateText))])]), t._v(" "), s("span", {
                staticClass: "risk-process"
            }, [s("b", {
                class: t.flState,
                style: "width: " + Math.max(t.riskRateWidth, 0) + "%"
            })]), t._v(" "), s("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isGlobal,
                    expression: "!isGlobal"
                }]
            }, [s("em", [t._v("爆仓价 (" + t._s(t.QUOTE) + ")")]), s("b", [t._v(t._s(t.flPriceText || "---"))])]), t._v(" "), s("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isGlobal && !t.isLiquidating,
                    expression: "isGlobal && !isLiquidating"
                }],
                staticClass: "fl-price-text"
            }, [s("em", [t._v("爆仓价")]), t._v(" "), s("b", [t._v(t._s(t.flPriceText || "---"))]), t._v(t._s(t.QUOTE) + "\n        ")]), t._v(" "), s("em", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isGlobal && t.isLiquidating,
                    expression: "isGlobal && isLiquidating"
                }],
                staticClass: "liquing"
            }, [t._v("\n            爆仓中...\n        ")])])])
        }, [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", [e("i", {
                staticClass: "hb_icon_tip"
            }), this._v("当风险率≤110%时，账户将触发爆仓以归还借贷资金")])
        }
        ], !1, null, null, null);
        e.a = C.exports
    },
    491: function(t, e, s) {
        "use strict";
        s(30),
        s(31),
        s(23),
        s(468);
        var i = s(4)
          , a = s.n(i)
          , n = (s(19),
        s(35),
        s(8))
          , r = s.n(n)
          , o = s(336)
          , c = s(18)
          , l = s(464)
          , u = (s(59),
        s(79),
        s(3))
          , h = s(11)
          , g = (s(14),
        s(140))
          , d = s(6)
          , p = ["---"]
          , m = {}
          , v = {
            name: "OrderBooks",
            components: {
                Mod: o.a,
                A: c.a,
                Tooltips: l.a
            },
            data: function() {
                return {
                    depthType: "",
                    orderBook: [],
                    filledPrice: 0,
                    depthStep: "step0",
                    depthValue: "---",
                    showDepth: !1,
                    depthUpward: !1,
                    expand: !1,
                    depthTextMap: p,
                    estimate: "",
                    addBtnDisabled: !1,
                    minusBtnDisabled: !0,
                    curDepth: 0
                }
            },
            filters: {
                n2t: function(t, e) {
                    if (!e)
                        return t;
                    if (isNaN(1 * t))
                        return t;
                    var s = t.split(".")
                      , i = r()(s, 2)
                      , a = i[0]
                      , n = i[1];
                    return n ? "%s位小数".replace("%s", n.length) : "%s位整数".replace("%s", a.length)
                }
            },
            computed: a()({
                isGlobal: function() {
                    return "en-us" !== this.$store.state.locale
                },
                orderBookObj: function() {
                    var t = this.calcTotal(this.orderBook.asks)
                      , e = r()(t, 3)
                      , s = e[0]
                      , i = e[1]
                      , a = e[2]
                      , n = this.calcTotal(this.orderBook.bids)
                      , o = r()(n, 3)
                      , c = o[0]
                      , l = o[1]
                      , u = o[2];
                    return s.reverse(),
                    {
                        asks: s,
                        asksTotal: i,
                        bids: c,
                        bidsTotal: l,
                        asksMax: a,
                        bidsMax: u
                    }
                },
                tpp: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    return t[e] && t[e].trade_price_precision || 0
                },
                tap: function() {
                    var t = this.symbolsObj
                      , e = this.symbolCode;
                    return t[e] && t[e].trade_amount_precision || 0
                },
                moreLink: function() {
                    var t = this.$store.state.locale
                      , e = this.isGlobal ? this.exchangeType : "exchange";
                    return "/".concat(t, "/orderbooks/?type=").concat(e, "&s=").concat(this.base, "_").concat(this.quote)
                }
            }, Object(h.c)({
                symbolsObj: function(t) {
                    return t.symbolsObj
                },
                symbolCode: function(t) {
                    return t.exchange.symbolCode
                },
                ticker: function(t) {
                    return t.exchange.ticker
                },
                BASE: function(t) {
                    return t.exchange.base.toUpperCase()
                },
                QUOTE: function(t) {
                    return t.exchange.quote.toUpperCase()
                },
                base: function(t) {
                    return t.exchange.base
                },
                quote: function(t) {
                    return t.exchange.quote
                },
                exchangeRate: function(t) {
                    return t.exchangeRate
                },
                rateFix: function(t) {
                    return t.rateFix
                },
                rateName: function(t) {
                    return t.rateName.toUpperCase()
                },
                exchangeType: function(t) {
                    return t.exchange.exchangeType
                },
                lsBookType: function(t) {
                    return t.exchange.lsBookType
                },
                pageVisible: function(t) {
                    return t.pageVisible
                }
            })),
            mounted: function() {
                this.MAX_ORDERBOOK_LEN = Math.max(parseInt(this.$refs.orderBook.offsetHeight / 20) || 30, 7),
                this.$store.dispatch("base/subSymbols"),
                this.$nuxt.$on("needOrderBook", this.needOrderBookDone),
                this.depthType = localStorage.lsBookType || "bs",
                document.body.addEventListener("click", this.hideDepthList)
            },
            methods: {
                changeDepthType: function(t) {
                    this.depthType = t,
                    this.$store.commit("exchange/SET_ORDERBOOK_TYPE", t)
                },
                calcTotal: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , e = -1 / 0
                      , s = t.reduce(function(t, s, i) {
                        var a = r()(s, 2)
                          , n = a[0]
                          , o = void 0 === n ? "---" : n
                          , c = a[1]
                          , l = void 0 === c ? "---" : c
                          , h = l || "---";
                        return i && 1 * h && (h = Object(u.a)(h, t[i - 1][2])),
                        e = Math.max(e, l),
                        t.push([o, l, h]),
                        t
                    }, [])
                      , i = s.length ? s[s.length - 1][2] : 0;
                    if (s.length < this.MAX_ORDERBOOK_LEN)
                        for (var a = s.length; a < this.MAX_ORDERBOOK_LEN; a++)
                            s[a] = ["---", "---", "---"];
                    return [s, i, e]
                },
                initData: function() {
                    this.$set(this, "orderBook", []),
                    this.$store.dispatch("orderBooks/subOrderBooks", {
                        symbol: this.symbolCode,
                        pick: ["bids.".concat(this.MAX_ORDERBOOK_LEN), "asks.".concat(this.MAX_ORDERBOOK_LEN)],
                        step: this.depthStep
                    })
                },
                formatData: function(t) {
                    this.$set(this, "orderBook", t)
                },
                fillPrice: function(t) {
                    this.filledPrice = t
                },
                formatDepthText: function(t) {
                    m = t,
                    this.fillDepthText()
                },
                fillDepthText: function() {
                    if (m[this.symbolCode]) {
                        var t = m[this.symbolCode]["depth-steps"]
                          , e = void 0 === t ? {} : t;
                        e[0][0] = Object(u.c)(e[0][0], this.tpp, 2),
                        this.$set(this, "depthTextMap", Object.values(e).map(function(t) {
                            var e = r()(t, 1)[0];
                            return Object(u.a)(e, 0).toFixed()
                        })),
                        this.depthValue = this.depthTextMap[0],
                        this.depthStep = "step0"
                    } else
                        this.$set(this, "depthTextMap", p)
                },
                toLocal: function(t, e, s) {
                    var i = g.a.getEstimate(e, "usdt", s);
                    if ("usdt" === t && (i = 1),
                    s && i)
                        return Object(u.d)(Object(u.e)(i, this.exchangeRate), this.rateFix)
                },
                needOrderBookDone: function() {
                    this.$nuxt.$emit("needOrderBook.done", this.orderBookObj)
                },
                changeDepth: function(t, e) {
                    this.depthValue = t,
                    this.depthStep = "step".concat(e)
                },
                hideDepthList: function(t) {
                    var e = t.target;
                    if ((Object(d.e)(e, "stop") || {}).node === this.$refs.depthNameDOM) {
                        var s = this.$refs.depthNameDOM.getBoundingClientRect().bottom
                          , i = document.documentElement.clientHeight;
                        this.showDepth = !this.showDepth,
                        this.depthUpward = i - s <= 188
                    } else
                        this.showDepth = !1
                },
                changeGlobalDepth: function(t) {
                    t ? (this.curDepth < 5 && this.curDepth++,
                    this.addBtnDisabled = this.curDepth >= 5) : 0 !== this.curDepth && this.curDepth--,
                    this.depthValue = this.depthTextMap[this.curDepth],
                    this.depthStep = "step".concat(this.curDepth)
                }
            },
            beforeDestroy: function() {
                this.$store.dispatch("orderBooks/subOrderBooks", {
                    destroy: !0
                }),
                this.$nuxt.$off("needOrderBook", this.needOrderBookDone),
                document.removeEventListener("click", this.hideDepthList)
            },
            watch: {
                "$store.state.exchange.symbolCode": function() {
                    this.$store.dispatch("orderBooks/subOrderBooks", {
                        destroy: !0
                    }),
                    "step0" === this.depthStep && this.initData(),
                    this.fillPrice(0),
                    this.fillDepthText()
                },
                "$store.state.exchange.ticker": function() {
                    this.estimate = this.toLocal(this.base, this.quote, this.ticker.close) || ""
                },
                "$store.state.exchange.ts": function() {
                    this.estimate = this.toLocal(this.base, this.quote, this.ticker.close) || ""
                },
                depthStep: function(t) {
                    this.$store.dispatch("orderBooks/subOrderBooks", {
                        destroy: !0
                    }),
                    this.$set(this, "orderBook", []),
                    this.initData()
                },
                "$store.state.base.symbols": function(t) {
                    this.formatDepthText(a()({}, t))
                },
                "$store.state.orderBooks.orderBooks": function(t) {
                    this.formatData(a()({}, t))
                }
            }
        }
          , C = (s(528),
        s(5))
          , f = Object(C.a)(v, function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("Mod", {
                staticClass: "order-books"
            }, [i("div", {
                staticClass: "mod-head",
                attrs: {
                    slot: "head"
                },
                slot: "head"
            }, [i("div", {
                staticClass: "order-books-l"
            }, [i("div", {
                class: "bs" === t.depthType && "cur",
                on: {
                    click: function(e) {
                        return t.changeDepthType("bs")
                    }
                }
            }, [i("img", {
                attrs: {
                    src: s(522)
                }
            }), t._v(" "), i("img", {
                attrs: {
                    src: s(523)
                }
            }), t._v(" "), i("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isGlobal,
                    expression: "isGlobal"
                }],
                staticClass: "tips"
            }, [t._v("买卖盘")])]), t._v(" "), i("div", {
                class: "b" === t.depthType && "cur",
                on: {
                    click: function(e) {
                        return t.changeDepthType("b")
                    }
                }
            }, [i("img", {
                attrs: {
                    src: s(524)
                }
            }), t._v(" "), i("img", {
                attrs: {
                    src: s(525)
                }
            }), t._v(" "), i("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isGlobal,
                    expression: "isGlobal"
                }],
                staticClass: "tips"
            }, [t._v("买盘")])]), t._v(" "), i("div", {
                class: "s" === t.depthType && "cur",
                on: {
                    click: function(e) {
                        return t.changeDepthType("s")
                    }
                }
            }, [i("img", {
                attrs: {
                    src: s(526)
                }
            }), t._v(" "), i("img", {
                attrs: {
                    src: s(527)
                }
            }), t._v(" "), i("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isGlobal,
                    expression: "isGlobal"
                }],
                staticClass: "tips"
            }, [t._v("卖盘")])])]), t._v(" "), i("div", {
                staticClass: "actions order-books-actions",
                class: {
                    "depth-upward": t.depthUpward
                }
            }, [i("span", {
                ref: "depthNameDOM",
                class: {
                    "show-depth": t.showDepth
                },
                attrs: {
                    stop: "1"
                }
            }, [t._v("\n                " + t._s(t._f("n2t")(t.depthValue, t.isGlobal)) + "\n                "), i("i", {
                staticClass: "depth-arrow-down"
            })]), t._v(" "), i("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showDepth,
                    expression: "showDepth"
                }]
            }, t._l(t.depthTextMap, function(e, s) {
                return i("li", {
                    key: s,
                    class: {
                        cur: "step" + s === t.depthStep
                    },
                    attrs: {
                        value: "step" + s
                    },
                    on: {
                        click: function(i) {
                            return t.changeDepth(e, s)
                        }
                    }
                }, [t._v("\n                    " + t._s(t._f("n2t")(e, t.isGlobal)) + "\n                ")])
            }), 0)])]), t._v(" "), i("div", {
                ref: "orderBook",
                staticClass: "mod-body",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [i("dl", [i("dt", [i("span", {
                staticClass: "price"
            }, [t._v("价格 (" + t._s(t.QUOTE) + ")")]), t._v(" "), i("span", {
                staticClass: "amount"
            }, [t._v("数量 (" + t._s(t.BASE) + ")")]), t._v(" "), i("span", {
                staticClass: "total"
            }, [t._v("累计 (" + t._s(t.BASE) + ")")])]), t._v(" "), i("dd", {
                staticClass: "now-pric",
                class: t.depthType
            }, [i("div", {
                staticClass: "ticker-close"
            }, [i("span", {
                class: "color-" + t.ticker.rateCluss,
                attrs: {
                    "growing-ignore": "true"
                }
            }, [t._v("\n                        " + t._s(t._f("fix")(t.ticker.close || "---", t.tpp)) + "\n                        "), t.estimate ? i("em", {
                staticClass: "estimate hide1440",
                class: {
                    hide: "NONE" === t.rateName
                }
            }, [t._v("≈ " + t._s(t.estimate) + " " + t._s(t.rateName))]) : t._e()]), t._v(" "), i("A", {
                attrs: {
                    href: t.moreLink
                }
            }, [t._v("\n                        更多\n                    ")])], 1), t._v(" "), i("div", {
                staticClass: "list asks",
                attrs: {
                    "growing-ignore": "true"
                }
            }, t._l(t.pageVisible ? t.orderBookObj.asks : [], function(e, s) {
                return i("p", {
                    key: "asks_" + e + "_" + s,
                    style: {
                        backgroundSize: (100 * e[1] / t.orderBookObj.asksMax).toFixed(0) + "% 100%"
                    },
                    attrs: {
                        "data-ee": "fillPrice"
                    }
                }, [i("span", {
                    staticClass: "price color-sell"
                }, [t._v(t._s(t._f("fix")(e[0], t.tpp)))]), t._v(" "), i("span", {
                    staticClass: "amount"
                }, [t._v(t._s(t._f("fix")(e[1], t.tap)))]), t._v(" "), i("span", {
                    staticClass: "total"
                }, [t._v(t._s(t._f("fix")(e[2], t.tap)))])])
            }), 0), t._v(" "), i("div", {
                staticClass: "list bids",
                attrs: {
                    "growing-ignore": "true"
                }
            }, t._l(t.pageVisible ? t.orderBookObj.bids : [], function(e, s) {
                return i("p", {
                    key: "bids_" + e + "_" + s,
                    style: {
                        backgroundSize: (100 * e[1] / t.orderBookObj.bidsMax).toFixed(0) + "% 100%"
                    },
                    attrs: {
                        "data-ee": "fillPrice"
                    }
                }, [i("span", {
                    staticClass: "price color-buy"
                }, [t._v(t._s(t._f("fix")(e[0], t.tpp)))]), t._v(" "), i("span", {
                    staticClass: "amount"
                }, [t._v(t._s(t._f("fix")(e[1], t.tap)))]), t._v(" "), i("span", {
                    staticClass: "total"
                }, [t._v(t._s(t._f("fix")(e[2], t.tap)))])])
            }), 0)])])])])
        }, [], !1, null, "3219d331", null);
        e.a = f.exports
    },
    492: function(t, e, s) {
        "use strict";
        s(66),
        s(9);
        var i = s(1)
          , a = s.n(i)
          , n = (s(40),
        s(34),
        s(38),
        s(4))
          , r = s.n(n)
          , o = s(11)
          , c = s(14)
          , l = s(140)
          , u = s(7)
          , h = s(3)
          , g = s(361)
          , d = s(6)
          , p = {
            gte: "≥",
            lte: "≤"
        }
          , m = {
            sell: "卖出",
            buy: "买入"
        }
          , v = {
            name: "OpenOrder",
            components: {
                PaginationById: g.a
            },
            props: {
                formData: {
                    type: Object,
                    default: function() {
                        return {
                            states: "created,submitted,partial-filled",
                            symbol: "",
                            "account-id": null
                        }
                    }
                },
                control: {
                    type: Object,
                    default: function() {
                        return {
                            polling: null
                        }
                    }
                }
            },
            data: function() {
                return {
                    states: "created,submitted,partial-filled",
                    orderOriginData: [],
                    shouldLoading: !0,
                    fromId: null,
                    direct: null,
                    currentPage: 0,
                    pageSize: 3,
                    orderTimer: "",
                    loading: !1,
                    cancelTimer: null,
                    focus: !1
                }
            },
            computed: r()({}, Object(o.b)("exchange", ["tpp", "tap", "ttp", "BASE", "QUOTE", "isPrime", "isPrimePO", "isPrimeEnd"]), Object(o.c)(["symbolsObj"]), Object(o.c)("exchange", ["symbolCode", "exchangeType"]), Object(o.c)("user", ["isLogin"]), {
                params: function() {
                    var t = this.formData
                      , e = this.focus;
                    if (t.symbol) {
                        var s = r()({
                            size: e ? this.pageSize : this.pageSize + 1
                        }, t);
                        return this.fromId && (s.from = this.fromId),
                        this.direct && (s.direct = this.direct),
                        s
                    }
                },
                orderList: function() {
                    var t = this;
                    return this.isPrimePO ? this.orderOriginData.reduce(function(e, s, i) {
                        if (i < t.pageSize) {
                            var a = s.type
                              , n = s.source
                              , r = s.price
                              , o = s.amount
                              , c = a.includes("market")
                              , l = a.includes("sell") ? "sell" : "buy"
                              , u = "fl-mgt" === n || "fl-sys" === n
                              , g = m[l]
                              , d = a.includes("stop-limit") ? "止盈止损" : c ? "市价" : "限价"
                              , p = "margin" === t.exchangeType ? "杠杆" : "币币"
                              , v = "buy-market" === a ? "---" : o
                              , C = "buy-market" === a ? o : "sell-market" === a ? "---" : Object(h.e)(r, o)
                              , f = Object(h.g)(o, 0)
                              , I = {
                                isMarket: c,
                                direct: l,
                                way: d,
                                sys: u,
                                directText: g,
                                stopPrice: "---",
                                amountText: v,
                                total: C,
                                filledAmount: 0,
                                fal: f,
                                type: p
                            };
                            e.push(Object.assign({}, s, I))
                        }
                        return e
                    }, []) : this.orderOriginData.map(function(e) {
                        var s = {};
                        s.id = e.id,
                        s.createdAt = e["created-at"],
                        s.price = e.price;
                        var i = "buy-market" === e.type || "sell-market" === e.type;
                        return s.isMarket = i,
                        s.direct = e.type.indexOf("sell") >= 0 ? "sell" : "buy",
                        s.directText = s.direct,
                        s.sys = "fl-mgt" === e.source || "fl-sys" === e.source,
                        s.sys && (s.directText = "sys".concat(s.directText)),
                        s.type = t.exchangeType.toUpperCase(),
                        i && (s.price = "Market price"),
                        s.amountText = "buy-market" === e.type ? "---" : e.amount,
                        s.state = e["canceled-at"] > 0 || "cancelling" === e.state ? "canceling" : e.state,
                        s.total = "buy-market" === e.type ? e.amount : Object(h.e)(e.price, e.amount),
                        s.total = "sell-market" === e.type ? "---" : s.total,
                        s.stopPrice = e.operator ? "".concat(p[e.operator] || "").concat(Object(h.c)(e["stop-price"], t.tpp)) : "---",
                        s.summoned = e.operator && "created" !== e.state,
                        s.filledAmount = e["filled-amount"],
                        s.fal = Object(h.g)(e.amount, e["filled-amount"]),
                        s.directText = "sell" === s.direct ? "卖出" : "买入",
                        s.sys && (s.directText = "sell" === s.direct ? "系统卖出" : "系统买入"),
                        s.type = "margin" === t.exchangeType ? "杠杆" : "币币",
                        s.way = "限价",
                        e.type.includes("stop-limit") ? s.way = "止盈止损" : e.type.includes("market") && (s.way = "市价"),
                        i && (s.price = "市价"),
                        s
                    }).slice(0, this.pageSize)
                },
                alwayShow: function() {
                    return "en-us" === this.$store.state.locale ? this.orderOriginData.length > 0 : this.orderOriginData.length > 10
                },
                isPrimeEndAndNoOrder: function() {
                    return this.isPrimeEnd && !this.orderOriginData.length
                }
            }),
            watch: {
                formData: {
                    handler: function(t) {
                        this.initData(),
                        this.getOrders()
                    },
                    deep: !0
                },
                exchangeType: function(t, e) {
                    this.initData(),
                    this.getOrders()
                },
                symbolCode: function(t, e) {
                    this.initData(),
                    this.getOrders()
                },
                isLogin: function(t) {
                    t && (this.initData(),
                    this.getOrders())
                },
                control: {
                    handler: function(t) {
                        t.polling ? this.getOrders() : clearTimeout(this.orderTimer)
                    },
                    deep: !0
                }
            },
            mounted: function() {
                var t = a()(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                "en-us" !== this.$store.state.locale && (this.pageSize = 10),
                                this.getOrders(),
                                c.a.sub("placeOrder.done", this.resetPage, !1),
                                c.a.sub("cancelAllDone", this.updateCancelState, !1);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }));
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            methods: {
                initData: function() {
                    this.fromId = null,
                    this.direct = null,
                    this.currentPage = 0,
                    this.orderOriginData = [],
                    this.shouldLoading = !0,
                    this.orderTimer && window.clearTimeout(this.orderTimer)
                },
                pagination: function(t) {
                    this.direct = t.direct,
                    this.currentPage = t.currentPage,
                    this.fromId = t.fromId,
                    this.focus = t.focus,
                    this.getOrders()
                },
                resetPage: function() {
                    var t = this;
                    this.$refs.pagination.resetPage(),
                    setTimeout(function() {
                        t.updateData()
                    }, 1e3)
                },
                updateData: function() {
                    var t = a()(regeneratorRuntime.mark(function t() {
                        var e, s, i, a, n, r, o = this, c = arguments;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e = c.length > 0 && void 0 !== c[0] ? c[0] : 1,
                                    this.isLogin) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return s = this.params,
                                    0 === this.currentPage && (delete s.fromId,
                                    delete s.direct,
                                    delete s.from),
                                    t.next = 7,
                                    u.f.getOpenOrders(s, this);
                                case 7:
                                    i = t.sent,
                                    a = !1,
                                    i.success && (this.setCancelAllBtnState(i.data),
                                    i.data.length && i.data.length === this.orderList.length ? (n = this.orderList.filter(function(t, e) {
                                        return t.id !== i.data[e].id
                                    }),
                                    a = n.length > 0) : a = !0,
                                    a ? (l.a.reload(),
                                    this.$set(this, "orderOriginData", i.data)) : e < 6 && (e += 1,
                                    r = Object(d.h)(e),
                                    setTimeout(function() {
                                        o.updateData(e)
                                    }, 1e3 * r)));
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                getOrders: function() {
                    var t = a()(regeneratorRuntime.mark(function t() {
                        var e, s, i = this;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.orderTimer && clearTimeout(this.orderTimer),
                                    this.isLogin && !this.loading) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    if (this.formData["account-id"]) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    if (this.formData.symbol) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 7:
                                    return e = this.params,
                                    this.shouldLoading && (this.loading = !0,
                                    this.shouldLoading = !1),
                                    t.next = 11,
                                    u.f.getOpenOrders(e, this);
                                case 11:
                                    s = t.sent,
                                    this.loading = !1,
                                    s.success ? (this.setCancelAllBtnState(s.data),
                                    this.fromId = s.data.length > 0 ? s.data[0].id : null,
                                    this.direct = "next",
                                    this.focus && (this.focus = !1),
                                    this.$set(this, "orderOriginData", s.data)) : this.$set(this, "orderOriginData", []),
                                    this.orderTimer = setTimeout(function() {
                                        i.getOrders()
                                    }, 15e3);
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                cancelOrder: function() {
                    var t = a()(regeneratorRuntime.mark(function t(e) {
                        var i, a, n, r, o = this;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (i = e.id,
                                    "canceling" !== e.state) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return t.next = 5,
                                    u.f.cancelOrder(i, this);
                                case 5:
                                    return a = t.sent,
                                    t.next = 8,
                                    Promise.resolve().then(s.bind(null, 75));
                                case 8:
                                    n = t.sent,
                                    r = n.default,
                                    a.success ? (r.success("撤单申请成功"),
                                    this.cancelTimer && clearTimeout(this.cancelTimer),
                                    this.isPrime && this.$store.dispatch("exchange/getPrimeUserLimit", 1),
                                    this.cancelTimer = setTimeout(function() {
                                        o.updateData(),
                                        c.a.pub("cancelOrderDone")
                                    }, 500)) : r.error(a.message);
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                updateCancelState: function() {
                    var t = this;
                    this.cancelTimer = setTimeout(function() {
                        t.updateData()
                    }, 500),
                    this.orderOriginData.forEach(function(t) {
                        t["canceled-at"] = 1
                    })
                },
                setCancelAllBtnState: function(t) {
                    var e = t && t.filter(function(t) {
                        return "buy-market" !== t.type && "sell-market" !== t.type
                    })
                      , s = t && t.filter(function(t) {
                        return !!t["canceled-at"]
                    });
                    this.$emit("afterUpdateorders", {
                        disabled: s.length === t.length,
                        hide: this.isPrime || !t || t && 0 === t.length || 0 === e.length,
                        text: s.length > 0 && s.length === t.length ? "撤单中" : "全部撤单"
                    })
                }
            },
            beforeDestroy: function() {
                c.a.unsub("placeOrder.done", this.resetPage),
                c.a.unsub("cancelAllDone", this.updateCancelState),
                this.orderTimer && clearTimeout(this.orderTimer)
            }
        }
          , C = s(5)
          , f = Object(C.a)(v, function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("section", {
                staticClass: "order-container"
            }, ["en-us" === t.$store.state.locale ? s("dl", {
                staticClass: "open-order"
            }, [s("dt", [s("span", {
                staticClass: "time"
            }, [t._v("Date")]), t._v(" "), s("span", {
                staticClass: "direct"
            }, [t._v("Direction")]), t._v(" "), s("span", {
                staticClass: "type"
            }, [t._v("Type (" + t._s(t.exchangeType) + ")")]), t._v(" "), s("span", {
                staticClass: "price"
            }, [t._v("Price (" + t._s(t.QUOTE) + ")")]), t._v(" "), s("span", {
                staticClass: "amount"
            }, [t._v("Amount (" + t._s(t.BASE) + ")")]), t._v(" "), s("span", {
                staticClass: "amount-total"
            }, [t._v("Total (" + t._s(t.QUOTE) + ")")]), t._v(" "), t._m(0), t._v(" "), s("span", {
                staticClass: "amount-executed"
            }, [t._v("Executed")]), t._v(" "), s("span", {
                staticClass: "amount-unexecuted"
            }, [t._v("Unexecuted")]), t._v(" "), s("span", {
                staticClass: "action"
            }, [t._v("Action")])])]) : t._e(), t._v(" "), "en-us" !== t.$store.state.locale ? s("dl", {
                staticClass: "open-order"
            }, [s("dt", [s("span", {
                staticClass: "time"
            }, [t._v("时间")]), t._v(" "), s("span", {
                staticClass: "symbol"
            }, [t._v("交易对")]), t._v(" "), s("span", {
                staticClass: "type"
            }, [t._v("类型")]), t._v(" "), s("span", {
                staticClass: "way"
            }, [t._v("方式")]), t._v(" "), s("span", {
                staticClass: "direct"
            }, [t._v("方向")]), t._v(" "), s("span", {
                staticClass: "price"
            }, [t._v("价格 (" + t._s(t.QUOTE) + ")")]), t._v(" "), s("span", {
                staticClass: "amount"
            }, [t._v("数量 (" + t._s(t.BASE) + ")")]), t._v(" "), s("span", {
                staticClass: "amount-total"
            }, [t._v("委托总额 (" + t._s(t.QUOTE) + ")")]), t._v(" "), t._m(1), t._v(" "), s("span", {
                staticClass: "amount-executed"
            }, [t._v("已成交")]), t._v(" "), s("span", {
                staticClass: "amount-unexecuted"
            }, [t._v("未成交")]), t._v(" "), s("span", {
                staticClass: "action"
            }, [t._v("操作")])])]) : t._e(), t._v(" "), "en-us" === t.$store.state.locale ? s("div", {
                staticClass: "order-table",
                class: {
                    loading: t.loading,
                    "no-data-table": 0 === t.orderList.length
                }
            }, [s("dl", [t._l(t.orderList, function(e) {
                return s("dd", {
                    key: e.id,
                    staticClass: "list"
                }, [s("span", {
                    staticClass: "time",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("t2d")(e.createdAt, "m-d h:i:s")))]), t._v(" "), s("span", {
                    class: "direct color-" + e.direct,
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.directText))]), t._v(" "), s("span", {
                    staticClass: "type",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.way))]), t._v(" "), s("span", {
                    staticClass: "price",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.price, t.tpp)))]), t._v(" "), s("span", {
                    staticClass: "amount",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.amountText, t.tap)))]), t._v(" "), s("span", {
                    staticClass: "amount-total",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.total, t.ttp)))]), t._v(" "), s("span", {
                    staticClass: "stop-price",
                    class: e.summoned && "color-buy",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.stopPrice))]), t._v(" "), s("span", {
                    staticClass: "amount-executed",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.filledAmount, t.tap)))]), t._v(" "), s("span", {
                    staticClass: "amount-unexecuted",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.fal, t.tap)))]), t._v(" "), s("span", {
                    staticClass: "action",
                    class: e.state
                }, [e.isMarket || e.sys || t.isPrimeEnd ? t._e() : s("em", {
                    staticClass: "mock-a",
                    class: e.state,
                    attrs: {
                        "data-id": e.id,
                        "data-ee": "cancelOrder"
                    },
                    on: {
                        click: function(s) {
                            return t.cancelOrder(e)
                        }
                    }
                }, [s("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "canceling" !== e.state,
                        expression: "i.state !== 'canceling'"
                    }]
                }, [t._v("Cancel")]), t._v(" "), s("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "canceling" === e.state,
                        expression: "i.state === 'canceling'"
                    }]
                }, [t._v("Canceling")])])])])
            }), t._v(" "), 0 !== t.orderOriginData.length || t.loading ? t._e() : s("dd", {
                staticClass: "no-data"
            }, [t._m(2)])], 2)]) : t._e(), t._v(" "), "en-us" !== t.$store.state.locale ? s("div", {
                staticClass: "order-table",
                class: {
                    loading: t.loading,
                    "no-data-table": 0 === t.orderList.length
                }
            }, [s("dl", [t._l(t.orderList, function(e) {
                return s("dd", {
                    key: e.id,
                    staticClass: "list"
                }, [s("span", {
                    staticClass: "time",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("t2d")(e.createdAt, "m-d h:i:s")))]), t._v(" "), s("span", {
                    staticClass: "symbol",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t.BASE) + "/" + t._s(t.QUOTE))]), t._v(" "), s("span", {
                    staticClass: "type",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.type))]), t._v(" "), s("span", {
                    staticClass: "way",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.way))]), t._v(" "), s("span", {
                    class: "direct color-" + e.direct,
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.directText))]), t._v(" "), s("span", {
                    staticClass: "price",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.price, t.tpp)))]), t._v(" "), s("span", {
                    staticClass: "amount",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.amountText, t.tap)))]), t._v(" "), s("span", {
                    staticClass: "amount-total",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.total, t.ttp)))]), t._v(" "), s("span", {
                    staticClass: "stop-price",
                    class: e.summoned && "color-buy",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.stopPrice))]), t._v(" "), s("span", {
                    staticClass: "amount-executed",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.filledAmount, t.tap)))]), t._v(" "), s("span", {
                    staticClass: "amount-unexecuted",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.fal, t.tap)))]), t._v(" "), s("span", {
                    staticClass: "action",
                    class: e.state
                }, [e.isMarket || e.sys || t.isPrimeEnd ? t._e() : s("em", {
                    staticClass: "mock-a",
                    class: e.state,
                    attrs: {
                        "data-id": e.id,
                        "data-ee": "cancelOrder"
                    },
                    on: {
                        click: function(s) {
                            return t.cancelOrder(e)
                        }
                    }
                }, [s("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "canceling" !== e.state,
                        expression: "i.state !== 'canceling'"
                    }]
                }, [t._v("撤单")]), t._v(" "), s("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "canceling" === e.state,
                        expression: "i.state === 'canceling'"
                    }]
                }, [t._v("撤单中")])])])])
            }), t._v(" "), 0 !== t.orderOriginData.length || t.loading ? t._e() : s("dd", {
                staticClass: "no-data"
            }, [t._m(3)])], 2)]) : t._e(), t._v(" "), s("PaginationById", {
                ref: "pagination",
                attrs: {
                    disabled: t.loading,
                    "page-size": t.pageSize,
                    init: 0 === t.currentPage,
                    "origin-data": t.orderOriginData,
                    "alway-show": t.alwayShow,
                    "pagination-type": "en-us" === t.$store.state.locale ? "en-us" : ""
                },
                on: {
                    pagination: t.pagination
                }
            })], 1)
        }, [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "stop-price"
            }, [this._v("Trigger\n                "), e("i", {
                staticClass: "hb_icon_tip"
            }, [e("div", {
                staticClass: "tips"
            }, [this._v("Green indicates that the order has been triggered")])])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "stop-price"
            }, [this._v("触发条件\n                "), e("i", {
                staticClass: "hb_icon_tip"
            }, [e("div", {
                staticClass: "tips"
            }, [this._v("绿色高亮表示订单已触发")])])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("dl", {
                staticClass: "icon-no-order"
            }, [e("dt", [this._v("No open orders yet")]), this._v(" "), e("dd", [this._v("Go to the Trade tab and make your order!")])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("dl", {
                staticClass: "icon-no-order"
            }, [e("dt", [this._v("暂无记录")])])
        }
        ], !1, null, null, null);
        e.a = f.exports
    },
    493: function(t, e, s) {
        "use strict";
        s(9);
        var i = s(1)
          , a = s.n(i)
          , n = (s(66),
        s(34),
        s(38),
        s(4))
          , r = s.n(n)
          , o = s(11)
          , c = s(14)
          , l = s(7)
          , u = s(3)
          , h = s(6)
          , g = s(361)
          , d = s(464)
          , p = s(140)
          , m = "partial-canceled,filled,canceled"
          , v = {
            gte: "≥",
            lte: "≤"
        }
          , C = {
            filled: "已成交",
            canceled: "已撤销",
            "partial-filled": "未成交",
            "partial-canceled": "部分成交"
        }
          , f = {
            name: "OrderList",
            components: {
                PaginationById: g.a,
                ToolTips: d.a
            },
            props: {
                hideExcued: {
                    type: Boolean,
                    default: function() {
                        return !1
                    }
                },
                formData: {
                    type: Object,
                    default: function() {
                        return {
                            states: m,
                            symbol: "",
                            "account-id": null
                        }
                    }
                },
                control: {
                    type: Object,
                    default: function() {
                        return {
                            polling: null
                        }
                    }
                }
            },
            data: function() {
                return {
                    states: m,
                    showDetailId: 0,
                    showList: {},
                    orderOriginData: [],
                    shouldLoading: !0,
                    fromId: null,
                    currentPage: 0,
                    direct: null,
                    pageSize: 3,
                    orderTimer: null,
                    loading: !1,
                    needTooltip: !1
                }
            },
            computed: r()({}, Object(o.b)("exchange", ["tpp", "tap", "ttp", "fp", "BASE", "QUOTE"]), Object(o.c)(["symbolsObj"]), Object(o.c)("exchange", ["symbolCode", "exchangeType"]), Object(o.c)("user", ["isLogin"]), {
                params: function() {
                    var t = this.formData;
                    if (t.symbol) {
                        var e = r()({
                            size: this.pageSize + 1
                        }, t);
                        return this.fromId && (e.from = this.fromId),
                        this.direct && (e.direct = this.direct),
                        e.states = this.states,
                        e
                    }
                },
                orderList: function() {
                    var t = this;
                    return this.orderOriginData.map(function(e) {
                        var s = {};
                        s.id = e.id,
                        s["created-at"] = e["created-at"],
                        s.price = e.price;
                        var i = "buy-market" === e.type || "sell-market" === e.type;
                        return s.isMarket = i,
                        s.direct = e.type.indexOf("sell") >= 0 ? "sell" : "buy",
                        s.directText = s.direct,
                        s.sys = "fl-mgt" === e.source || "fl-sys" === e.source,
                        s.sys && (s.directText = "sys".concat(s.directText)),
                        s.type = t.exchangeType.toUpperCase(),
                        i && (s.price = "Market price"),
                        s.amountText = "buy-market" === e.type ? Object(u.c)(e.amount, t.ttp) : Object(u.c)(e.amount, t.tap),
                        s.total = e["field-cash-amount"],
                        s.excuted = e["field-amount"],
                        s.average = Object(u.b)(e["field-cash-amount"], e["field-amount"]),
                        s.statusText = C[e.state] || "Executed",
                        s.state = e.state,
                        s.operator = e.operator || "",
                        s.stopPrice = e.operator ? "".concat(v[e.operator] || "").concat(Object(u.c)(e["stop-price"], t.tpp)) : "---",
                        s["filled-points"] = e["filled-points"],
                        parseFloat(e["filled-points"]) > 0 && (s.points = e["filled-points"]),
                        s["filled-fees"] = e["filled-fees"],
                        s.feesUnit = e.type.indexOf("sell") >= 0 ? t.QUOTE : t.BASE,
                        s.directText = "sell" === s.direct ? "卖出" : "买入",
                        s.sys && (s.directText = "sell" === s.direct ? "系统卖出" : "系统买入"),
                        s.type = "margin" === t.exchangeType ? "杠杆" : "币币",
                        s.way = "限价",
                        e.type.includes("stop-limit") ? s.way = "止盈止损" : e.type.includes("market") && (s.way = "市价"),
                        i && (s.price = "市价"),
                        s.statusText = C[e.state] || "已成交",
                        s
                    }).slice(0, this.pageSize)
                },
                alwayShow: function() {
                    return "en-us" === this.$store.state.locale ? this.orderOriginData.length > 0 : this.orderOriginData.length > 10
                }
            }),
            watch: {
                hideExcued: function(t) {
                    this.states = t ? "partial-canceled,filled" : m,
                    this.initData(),
                    this.getOrders()
                },
                formData: {
                    handler: function(t) {
                        this.initData(),
                        t["account-id"] && this.getOrders()
                    },
                    immediate: !0,
                    deep: !0
                },
                symbolCode: function(t) {},
                exchangeType: function(t, e) {
                    t !== e && this.initData(),
                    this.formData["account-id"] && this.getOrders()
                },
                isLogin: function(t) {
                    t && (this.initData(),
                    this.getOrders())
                },
                control: {
                    handler: function(t) {
                        var e = this;
                        clearTimeout(this.controlTimer),
                        t.polling ? this.controlTimer = setTimeout(function() {
                            return e.getOrders()
                        }, 1e3) : clearTimeout(this.orderTimer)
                    },
                    deep: !0
                }
            },
            mounted: function() {
                "en-us" !== this.$store.state.locale && (this.pageSize = 10),
                this.getOrders(),
                "en-us" !== this.$store.locale && (c.a.sub("cancelAllDone", this.resetPage, !1),
                c.a.sub("cancelOrderDone", this.resetPage, !1))
            },
            methods: {
                initData: function() {
                    this.fromId = null,
                    this.direct = null,
                    this.currentPage = 0,
                    this.orderOriginData = [],
                    this.shouldLoading = !0,
                    this.orderTimer && window.clearTimeout(this.orderTimer)
                },
                pagination: function(t) {
                    this.direct = t.direct,
                    this.currentPage = t.currentPage,
                    this.fromId = t.fromId,
                    this.getOrders()
                },
                orderDetailList: function() {
                    var t = this;
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function(e) {
                        var s = {};
                        s.id = e.id,
                        s["created-at"] = e["created-at"],
                        s.price = e.price;
                        var i = "buy-market" === e.type || "sell-market" === e.type;
                        return s.isMarket = i,
                        s["filled-amount"] = e["filled-amount"],
                        s.total = Object(u.e)(e.price, e["filled-amount"]),
                        s["filled-points"] = e["filled-points"],
                        s["filled-fees"] = e["filled-fees"],
                        parseFloat(e["filled-points"]) > 0 && (s.points = e["filled-points"]),
                        s.feesUnit = e.type.indexOf("sell") >= 0 ? t.QUOTE : t.BASE,
                        s
                    })
                },
                updateData: function() {
                    var t = a()(regeneratorRuntime.mark(function t() {
                        var e, s, i, a, n, r, o = this, c = arguments;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e = c.length > 0 && void 0 !== c[0] ? c[0] : 1,
                                    this.isLogin) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return s = this.params,
                                    0 === this.currentPage && (delete s.fromId,
                                    delete s.direct,
                                    delete s.from),
                                    t.next = 7,
                                    l.f.getOrdersList(s);
                                case 7:
                                    i = t.sent,
                                    a = !1,
                                    i.success && (i.data.length !== this.orderList.length ? a = !0 : (n = this.orderList.filter(function(t, e) {
                                        return t.id !== i.data[e].id
                                    }),
                                    a = n.length > 0),
                                    a ? (p.a.reload(),
                                    this.$set(this, "orderOriginData", i.data)) : e < 6 && (e += 1,
                                    r = Object(h.h)(e),
                                    setTimeout(function() {
                                        o.updateData(e)
                                    }, 1e3 * r)));
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                getOrders: function() {
                    var t = a()(regeneratorRuntime.mark(function t() {
                        var e, s, i = this;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.isLogin && !this.loading) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (this.orderTimer && clearTimeout(this.orderTimer),
                                    this.formData["account-id"]) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    if (e = this.params) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    return this.shouldLoading && (this.loading = !0,
                                    this.shouldLoading = !1),
                                    t.next = 11,
                                    l.f.getOrdersList(e);
                                case 11:
                                    s = t.sent,
                                    this.loading = !1,
                                    s.success ? this.$set(this, "orderOriginData", s.data) : this.$set(this, "orderOriginData", []),
                                    this.orderTimer = setTimeout(function() {
                                        i.getOrders()
                                    }, 15e3);
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                getOrderDetail: function() {
                    var t = a()(regeneratorRuntime.mark(function t(e) {
                        var s;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.showDetailId !== e) {
                                        t.next = 4;
                                        break
                                    }
                                    this.showDetailId = null,
                                    t.next = 10;
                                    break;
                                case 4:
                                    if (this.showDetailId = e,
                                    this.showList[e]) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 8,
                                    l.f.getOrderDetail(e);
                                case 8:
                                    (s = t.sent).success && (this.showList[e] = this.orderDetailList(s.data),
                                    this.$forceUpdate());
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this)
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                resetPage: function() {
                    var t = this;
                    this.$refs.pagination.resetPage(),
                    setTimeout(function() {
                        t.updateData()
                    }, 1e3)
                }
            },
            beforeDestroy: function() {
                "en-us" !== this.$store.locale && (c.a.unsub("cancelAllDone", this.resetPage),
                c.a.unsub("cancelOrderDone", this.resetPage)),
                this.orderTimer && clearTimeout(this.orderTimer)
            }
        }
          , I = (s(520),
        s(5))
          , b = Object(I.a)(f, function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("section", {
                staticClass: "order-history"
            }, ["en-us" === t.$store.state.locale ? s("dl", {
                staticClass: "order-list"
            }, [s("dt", [s("span", {
                staticClass: "time"
            }, [t._v("Date")]), t._v(" "), s("span", {
                staticClass: "direct"
            }, [t._v("Direction")]), t._v(" "), s("span", {
                staticClass: "type"
            }, [t._v("Type (" + t._s(t.exchangeType) + ")")]), t._v(" "), s("span", {
                staticClass: "price"
            }, [t._v("Price (" + t._s(t.QUOTE) + ")")]), t._v(" "), s("span", {
                staticClass: "amount"
            }, [t._v("Amount")]), t._v(" "), s("span", {
                staticClass: "amount-executed"
            }, [t._v("Executed (" + t._s(t.BASE) + ")")]), t._v(" "), s("span", {
                staticClass: "amount-average"
            }, [t._v("Average Price")]), t._v(" "), t._m(0), t._v(" "), s("span", {
                staticClass: "state"
            }, [t._v("Status")]), t._v(" "), s("span", {
                staticClass: "action"
            }, [t._v("Action")])])]) : t._e(), t._v(" "), "en-us" !== t.$store.state.locale ? s("dl", {
                staticClass: "order-list"
            }, [s("dt", [s("span", {
                staticClass: "time"
            }, [t._v("时间")]), t._v(" "), s("span", {
                staticClass: "symbol"
            }, [t._v("交易对")]), t._v(" "), s("span", {
                staticClass: "type"
            }, [t._v("类型")]), t._v(" "), s("span", {
                staticClass: "way"
            }, [t._v("方式")]), t._v(" "), s("span", {
                staticClass: "direct"
            }, [t._v("方向")]), t._v(" "), s("span", {
                staticClass: "price"
            }, [t._v("价格 (" + t._s(t.QUOTE) + ")")]), t._v(" "), s("span", {
                staticClass: "amount"
            }, [t._v("委托量")]), t._v(" "), s("span", {
                staticClass: "amount-executed"
            }, [t._v("已成交 (" + t._s(t.BASE) + ")")]), t._v(" "), s("span", {
                staticClass: "amount-average"
            }, [t._v("成交均价")]), t._v(" "), s("span", {
                staticClass: "amount-sum"
            }, [t._v("成交额 (" + t._s(t.QUOTE) + ")")]), t._v(" "), s("span", {
                staticClass: "stop-price"
            }, [t._v("触发条件")]), t._v(" "), s("span", {
                staticClass: "state"
            }, [t._v("状态")]), t._v(" "), s("span", {
                staticClass: "action"
            }, [t._v("操作")])])]) : t._e(), t._v(" "), "en-us" === t.$store.state.locale ? s("div", {
                staticClass: "order-table",
                class: {
                    loading: t.loading,
                    "no-data-table": 0 === t.orderList.length
                }
            }, [s("dl", [t._l(t.orderList, function(e) {
                return [s("dd", {
                    key: e.id,
                    staticClass: "list",
                    class: {
                        cur: t.showDetailId === e.id
                    }
                }, [s("span", {
                    staticClass: "time",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("t2d")(e["created-at"], "m-d h:i:s")))]), t._v(" "), s("span", {
                    class: "direct color-" + e.direct,
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.directText))]), t._v(" "), s("span", {
                    staticClass: "type",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.way))]), t._v(" "), s("span", {
                    staticClass: "price",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.price, t.tpp)))]), t._v(" "), s("span", {
                    staticClass: "amount",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.amountText))]), t._v(" "), s("span", {
                    staticClass: "amount-executed",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.excuted, t.tap)))]), t._v(" "), s("span", {
                    staticClass: "amount-average",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.average, t.tpp)))]), t._v(" "), s("span", {
                    staticClass: "stop-price",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.stopPrice))]), t._v(" "), s("span", {
                    staticClass: "state",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v("\n                        " + t._s(e.statusText) + "\n                        "), "partial-canceled" === e.state && e.isMarket ? s("i", {
                    directives: [{
                        name: "popover",
                        rawName: "v-popover:state.top",
                        arg: "state",
                        modifiers: {
                            top: !0
                        }
                    }],
                    staticClass: "hb_icon_tip"
                }) : t._e(), t._v(" "), s("popover", {
                    attrs: {
                        name: "state",
                        width: 240,
                        event: "hover"
                    }
                }, [t._v("\n                            As this order triggers the market order "), s("br"), t._v("\n                            limit, it is executed partially and the "), s("br"), t._v("\n                            unexecuted amount has been returned "), s("br"), t._v("\n                            to your account.\n                        ")])], 1), t._v(" "), s("span", {
                    staticClass: "action",
                    class: e.state
                }, ["canceled" !== e.state ? s("em", {
                    staticClass: "mock-a",
                    class: e.state,
                    on: {
                        click: function(s) {
                            return t.getOrderDetail(e.id)
                        }
                    }
                }, [t._v("Detail\n                            "), s("i", {
                    staticClass: "icon-arrow-down-blue"
                })]) : t._e()])]), t._v(" "), s("dd", {
                    key: "list_detail_" + e.id,
                    staticClass: "list-detail",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [s("dl", {
                    staticClass: "order-detail",
                    class: {
                        "show-detail": t.showDetailId === e.id
                    }
                }, [s("dt", [s("span", {
                    staticClass: "time"
                }, [t._v("Date")]), t._v(" "), s("span", {
                    staticClass: "price"
                }, [t._v("Price(" + t._s(t.QUOTE) + ")")]), t._v(" "), s("span", {
                    staticClass: "amount"
                }, [t._v("Amount(" + t._s(t.BASE) + ")")]), t._v(" "), s("span", {
                    staticClass: "total"
                }, [t._v("Total(" + t._s(t.QUOTE) + ")")]), t._v(" "), s("span", {
                    staticClass: "fee"
                }, [t._v("Fee")])]), t._v(" "), t._l(t.showList[e.id], function(e) {
                    return s("dd", {
                        key: "detail_" + e.id
                    }, [s("span", {
                        staticClass: "time"
                    }, [t._v(t._s(t._f("t2d")(e["created-at"])))]), t._v(" "), s("span", {
                        staticClass: "price"
                    }, [t._v(t._s(t._f("fix")(e.price, t.tpp)))]), t._v(" "), s("span", {
                        staticClass: "amount"
                    }, [t._v(t._s(t._f("fix")(e["filled-amount"], t.tap)))]), t._v(" "), s("span", {
                        staticClass: "total"
                    }, [t._v(t._s(t._f("fix")(e.total, t.ttp)))]), t._v(" "), s("span", {
                        staticClass: "fee",
                        class: {
                            points: e["filled-points"],
                            fees: e["filled-fees"]
                        }
                    }, [parseFloat(e["filled-points"]) > 0 ? s("span", [t._v("\n                                    " + t._s(t._f("fix")(e["filled-points"], 8)) + " pts\n                                ")]) : t._e(), t._v(" "), parseFloat(e["filled-fees"]) > 0 ? s("span", [t._v("\n                                    " + t._s(t._f("fix")(e["filled-fees"], t.fp)) + "\n                                    " + t._s(e.feesUnit.toUpperCase()) + "\n                                ")]) : t._e(), t._v(" "), e["filled-fees"] - e["filled-points"] == 0 ? s("span", [t._v("\n                                    " + t._s(t._f("fix")(0, t.fp)) + "\n                                    " + t._s(e.feesUnit.toUpperCase()) + "\n                                ")]) : t._e()])])
                }), t._v(" "), t.showList[e.id] ? t._e() : s("dd", {
                    staticClass: "loading"
                })], 2)])]
            }), t._v(" "), 0 !== t.orderOriginData.length || t.loading ? t._e() : s("dd", {
                staticClass: "no-data"
            }, [t._m(1)])], 2)]) : t._e(), t._v(" "), "en-us" !== t.$store.state.locale ? s("div", {
                staticClass: "order-table",
                class: {
                    loading: t.loading,
                    "no-data-table": 0 === t.orderList.length
                }
            }, [s("dl", [t._l(t.orderList, function(e) {
                return [s("dd", {
                    key: e.id,
                    staticClass: "list",
                    class: {
                        cur: t.showDetailId === e.id,
                        canceled: "canceled" === e.state
                    }
                }, [s("span", {
                    staticClass: "time",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("t2d")(e["created-at"], "m-d h:i:s")))]), t._v(" "), s("span", {
                    staticClass: "symbol",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t.BASE) + "/" + t._s(t.QUOTE))]), t._v(" "), s("span", {
                    staticClass: "type",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.type))]), t._v(" "), s("span", {
                    staticClass: "way",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.way))]), t._v(" "), s("span", {
                    class: "direct color-" + e.direct,
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.directText))]), t._v(" "), s("span", {
                    staticClass: "price",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.price, t.tpp)))]), t._v(" "), s("span", {
                    staticClass: "amount",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.amountText))]), t._v(" "), s("span", {
                    staticClass: "amount-executed",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.excuted, t.tap)))]), t._v(" "), s("span", {
                    staticClass: "amount-average",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.average, t.tpp)))]), t._v(" "), s("span", {
                    staticClass: "amount-sum",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(t._f("fix")(e.total, t.ttp)))]), t._v(" "), s("span", {
                    staticClass: "stop-price",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v(t._s(e.stopPrice))]), t._v(" "), s("span", {
                    staticClass: "state",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [t._v("\n                        " + t._s(e.statusText) + "\n                        "), "partial-canceled" === e.state && e.isMarket ? s("i", {
                    staticClass: "hb_icon_tip"
                }, [s("div", {
                    staticClass: "tips"
                }, [t._v("由于该订单触发市价单限制规则，订单部分成交，未成交部分已返回账户")])]) : t._e()]), t._v(" "), s("span", {
                    staticClass: "action",
                    class: e.state
                }, ["canceled" !== e.state ? s("em", {
                    staticClass: "mock-a",
                    class: e.state,
                    on: {
                        click: function(s) {
                            return t.getOrderDetail(e.id)
                        }
                    }
                }, [t._v("详情\n                            "), s("i", {
                    staticClass: "icon_arrow_down"
                })]) : t._e()])]), t._v(" "), s("dd", {
                    key: "list_detail_" + e.id,
                    staticClass: "list-detail",
                    attrs: {
                        "growing-ignore": "true"
                    }
                }, [s("dl", {
                    staticClass: "order-detail",
                    class: {
                        "show-detail": t.showDetailId === e.id
                    }
                }, [s("dt", [s("span", {
                    staticClass: "time"
                }, [t._v("时间")]), t._v(" "), s("span", {
                    staticClass: "price"
                }, [t._v("价格(" + t._s(t.QUOTE) + ")")]), t._v(" "), s("span", {
                    staticClass: "amount"
                }, [t._v("数量(" + t._s(t.BASE) + ")")]), t._v(" "), s("span", {
                    staticClass: "total"
                }, [t._v("成交额(" + t._s(t.QUOTE) + ")")]), t._v(" "), s("span", {
                    staticClass: "fee"
                }, [t._v("手续费")])]), t._v(" "), t._l(t.showList[e.id], function(e) {
                    return s("dd", {
                        key: "detail_" + e.id
                    }, [s("span", {
                        staticClass: "time"
                    }, [t._v(t._s(t._f("t2d")(e["created-at"])))]), t._v(" "), s("span", {
                        staticClass: "price"
                    }, [t._v(t._s(t._f("fix")(e.price, t.tpp)))]), t._v(" "), s("span", {
                        staticClass: "amount"
                    }, [t._v(t._s(t._f("fix")(e["filled-amount"], t.tap)))]), t._v(" "), s("span", {
                        staticClass: "total"
                    }, [t._v(t._s(t._f("fix")(e.total, t.ttp)))]), t._v(" "), s("span", {
                        staticClass: "fee",
                        class: {
                            points: e["filled-points"],
                            fees: e["filled-fees"]
                        }
                    }, [parseFloat(e["filled-points"]) > 0 ? s("span", [t._v("\n                                    " + t._s(t._f("fix")(e["filled-points"], 8)) + " pts\n                                ")]) : t._e(), t._v(" "), parseFloat(e["filled-fees"]) > 0 ? s("span", [t._v("\n                                    " + t._s(t._f("fix")(e["filled-fees"], t.fp)) + "\n                                    " + t._s(e.feesUnit.toUpperCase()) + "\n                                ")]) : t._e(), t._v(" "), e["filled-fees"] - e["filled-points"] == 0 ? s("span", [t._v("\n                                    " + t._s(t._f("fix")(0, t.fp)) + "\n                                    " + t._s(e.feesUnit.toUpperCase()) + "\n                                ")]) : t._e()])])
                }), t._v(" "), t.showList[e.id] ? t._e() : s("dd", {
                    staticClass: "loading"
                })], 2)])]
            }), t._v(" "), 0 !== t.orderOriginData.length || t.loading ? t._e() : s("dd", {
                staticClass: "no-data"
            }, [t._m(2)])], 2)]) : t._e(), t._v(" "), s("PaginationById", {
                ref: "pagination",
                attrs: {
                    disabled: t.loading,
                    "page-size": t.pageSize,
                    init: 0 === t.currentPage,
                    "origin-data": t.orderOriginData,
                    "alway-show": t.alwayShow,
                    "pagination-type": "en-us" === t.$store.state.locale ? "en-us" : ""
                },
                on: {
                    pagination: t.pagination
                }
            })], 1)
        }, [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "stop-price"
            }, [this._v("Trigger\n                "), e("i", {
                staticClass: "hb_icon_tip"
            }, [e("div", {
                staticClass: "tips"
            }, [this._v("Green indicates that the order has been triggered")])])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("dl", {
                staticClass: "icon-no-order"
            }, [e("dt", [this._v("No open orders yet")]), this._v(" "), e("dd", [this._v("Go to the Trade tab and make your order!")])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("dl", {
                staticClass: "icon-no-order"
            }, [e("dt", [this._v("暂无记录")])])
        }
        ], !1, null, "c36aaba6", null);
        e.a = b.exports
    },
    512: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMTQgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjIgKDY3MTQ1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLkuqTmmJPpobUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmnKrnmbvlvZUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjg2LjAwMDAwMCwgLTEwOS4wMDAwMDApIiBmaWxsPSIjNjk3MDgwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwNi4wMDAwMDAsIDU1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5ODAuMDAwMDAwLCA1NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS4zNTI1OTEwNiw2LjcyNzQ5OTI1IEM5LjM1MjU5MTA2LDEwLjExNTY2ODUgMy45MjMxNDM5OCwxMy4yMzk2Njg1IDQuMzIxNjYxOSwxNy4zMzI1MTQ3IEM0LjY1MTM2NDg3LDIwLjcxODY1MzEgNy4yMTEwNDM0OCwyMi4zMjE5NDU0IDUuMTMxNTQ3NjQsMjEuNzQzMDA3IEMxLjQxNTM3MjQ4LDIwLjcwODQ5OTIgLTIuMjM0MTg1NzksMTUuMTEwNjgzOSAxLjY4OTk1NTg3LDEwLjAwNDk5MTYgQzMuMzkwMzc3ODEsNy43OTI0Njg1IDYuNDgzMzI5ODIsNi4xNTAwODM4NyA2LjU4MDA0MjY5LDAuMDkwMDk5MjU5NCBDNi41ODAwNDI2OSwwLjA4ODU3NjE4MjUgNi41ODE1NjQ0MiwwLjA4ODA2ODQ5MDMgNi41ODEzOTUzMiwwLjA4NjM3NjE4MjUgQzYuNTc0Mjk0MDMsLTAuMDM5MDIzODE3NSA2LjY1ODQ5NTExLDAuMDA4MTkxNTY3MjUgNi42NjMyMjkyOCwwLjAxMTA2ODQ5MDMgQzcuODI1MTM2MzYsMC44ODk4ODM4NzYgOS4zNTI1OTEwNiwzLjU4ODk0NTQxIDkuMzUyNTkxMDYsNi43Mjc0OTkyNSBaIE0xMS4wNTMzOTE3LDguMDE0OTU1ODMgQzExLjg3NjI5NjUsOC42NzYxNDA0MiAxNC4xODgyNzUyLDEwLjk1MTYxNzQgMTMuODYyMTIyOCwxNC41NjE0Nzg5IEMxMy41MjUxNDk1LDE4LjI4OTQ2MzUgMTAuNDE0Mjc1MiwxOS45MjU3NTU4IDEwLjI4MzkxNTcsMTkuOTg2ODQ4MSBDOC42MjI4ODkwMywyMC43Njc1MDk3IDkuMjg3MzY3MzQsMjEuNTMxNDE3NCA4LjYyMjg4OTAzLDIwLjc2NzUwOTcgQzcuNDc4MjI3OTQsMTkuNDUxNTcxMiA1LjQ0MjY5MjU0LDE3LjAwMTc4NjYgOS4wMTQ2NDM3OCwxMS45MTkyNzg5IEMxMC4wNjc4MzM0LDEwLjQyMDkwOTcgMTAuODk4Njg0OSw4Ljc4OTM1NTgzIDEwLjk2Njk5MjYsOC4wMjYyOTQyNyBDMTAuOTkyMDE2Miw3Ljk4NzU0MDQyIDExLjAyODAyOTksNy45OTg3MDk2OCAxMS4wNTMzOTE3LDguMDE0OTU1ODMgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
    },
    513: function(t, e, s) {
        t.exports = s.p + "img/8c7ab4d.svg"
    },
    514: function(t, e, s) {
        "use strict";
        var i = s(384);
        s.n(i).a
    },
    515: function(t, e, s) {
        "use strict";
        var i = s(385);
        s.n(i).a
    },
    516: function(t, e, s) {
        "use strict";
        var i = s(386);
        s.n(i).a
    },
    517: function(t, e, s) {
        "use strict";
        var i = s(387);
        s.n(i).a
    },
    519: function(t, e, s) {
        "use strict";
        var i = s(388);
        s.n(i).a
    },
    520: function(t, e, s) {
        "use strict";
        var i = s(390);
        s.n(i).a
    },
    522: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTYgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29ucy9PcmRlci8xPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IuKcheWFqOWxj+S6pOaYkyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuKaoe+4jy3kuqTmmJMtY29weS0xMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMDUuMDAwMDAwLCAtNzcuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00Ij4KICAgICAgICAgICAgICAgIDxnIGlkPSJPcmRlcl9ib29rIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjg0LjAwMDAwMCwgNjQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImhlYWRlciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDAwMDAwLCA4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikljb25zL09yZGVyLzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJJY29ucy9EZXB0aCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wMDAwMDAsIDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLDAgTDE1LDAgQzE1LjU1MjI4NDcsLTEuMDE0NTMwNjNlLTE2IDE2LDAuNDQ3NzE1MjUgMTYsMSBMMTYsMiBMMCwyIEwwLDEgQy02Ljc2MzUzNzUxZS0xNywwLjQ0NzcxNTI1IDAuNDQ3NzE1MjUsMS4wMTQ1MzA2M2UtMTYgMSwwIFoiIGlkPSJSZWN0YW5nbGUtMTYiIGZpbGw9IiNGNTU2NTYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xNi1Db3B5IiBmaWxsPSIjRjU1NjU2IiB4PSIwIiB5PSI0IiB3aWR0aD0iMTYiIGhlaWdodD0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTE2LUNvcHktMiIgZmlsbD0iIzM2QjM3RSIgeD0iMCIgeT0iOCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAsMTIgTDE2LDEyIEwxNiwxMyBDMTYsMTMuNTUyMjg0NyAxNS41NTIyODQ3LDE0IDE1LDE0IEwxLDE0IEMwLjQ0NzcxNTI1LDE0IDYuNzYzNTM3NTFlLTE3LDEzLjU1MjI4NDcgMCwxMyBMMCwxMiBaIiBpZD0iUmVjdGFuZ2xlLTE2LUNvcHktMyIgZmlsbD0iIzM2QjM3RSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
    },
    523: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjIgKDY3MTQ1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7liIbnu4QgMzA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i5Lqk5piT6aG1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5p2g5p2G5Lqk5piTLS3niIbku5MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzMzLjAwMDAwMCwgLTkwMy4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0i55uY5Y+jIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzE0LjAwMDAwMCwgNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5rex5bqmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgODQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMzItY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDAwMDAwLCA5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i5YiG57uELTMxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMzAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC04OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDIuNTAwMDAwKSBzY2FsZSgxLCAtMSkgdHJhbnNsYXRlKC02LjAwMDAwMCwgLTIuNTAwMDAwKSAiIGZpbGw9IiNFRTQ0NDQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtODgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAsMSBMMCwwIEwxMiwwIEwxMiwxIEwwLDEgWiBNMyw0IEwzLDMgTDEyLDMgTDEyLDQgTDMsNCBaIE0wLDAgTDEsMCBMMSw0LjUgTDAsNC41IEwwLDAgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTg5LUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA3LjAwMDAwMCkiIGZpbGw9IiMxQjk2ODAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtODgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAsMSBMMCwwIEwxMiwwIEwxMiwxIEwwLDEgWiBNMyw0IEwzLDMgTDEyLDMgTDEyLDQgTDMsNCBaIE0wLDAgTDEsMCBMMSw0LjUgTDAsNC41IEwwLDAgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
    },
    524: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTYgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29ucy9EZXB0aDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iSWNvbnMvT3JkZXIvMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQuMDAwMDAwLCAtNS4wMDAwMDApIiBmaWxsPSIjMzZCMzdFIj4KICAgICAgICAgICAgPGcgaWQ9Ikljb25zL0RlcHRoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLDAgTDE1LDAgQzE1LjU1MjI4NDcsLTEuMDE0NTMwNjNlLTE2IDE2LDAuNDQ3NzE1MjUgMTYsMSBMMTYsMiBMMCwyIEwwLDEgQy02Ljc2MzUzNzUxZS0xNywwLjQ0NzcxNTI1IDAuNDQ3NzE1MjUsMS4wMTQ1MzA2M2UtMTYgMSwwIFogTTAsNCBMMTYsNCBMMTYsNiBMMCw2IEwwLDQgWiBNMCw4IEwxNiw4IEwxNiwxMCBMMCwxMCBMMCw4IFogTTAsMTIgTDE2LDEyIEwxNiwxMyBDMTYsMTMuNTUyMjg0NyAxNS41NTIyODQ3LDE0IDE1LDE0IEwxLDE0IEMwLjQ0NzcxNTI1LDE0IDYuNzYzNTM3NTFlLTE3LDEzLjU1MjI4NDcgMCwxMyBMMCwxMiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
    },
    525: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjIgKDY3MTQ1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA4OSBDb3B5IDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i5Lqk5piT6aG1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5p2g5p2G5Lqk5piTLS3niIbku5MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzYxLjAwMDAwMCwgLTkwMy4wMDAwMDApIiBmaWxsPSIjMUI5NjgwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0i55uY5Y+jIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzE0LjAwMDAwMCwgNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5rex5bqmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgODQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMzItY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDAwMDAwLCA5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i5YiG57uELTMxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC04OS1Db3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtODgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwxIEwwLDAgTDEyLDAgTDEyLDEgTDAsMSBaIE0zLjAzNDE2Miw1IEwzLjAzNDE2Miw0IEwxMiw0IEwxMiw1IEwzLjAzNDE2Miw1IFogTTMuMDM0MTYyLDggTDMuMDM0MTYyLDcgTDEyLDcgTDEyLDggTDMuMDM0MTYyLDggWiBNMy4wMzQxNjIsMTEgTDMuMDM0MTYyLDEwIEwxMiwxMCBMMTIsMTEgTDMuMDM0MTYyLDExIFogTTAsMCBMMSwwIEwxLDExLjUgTDAsMTEuNSBMMCwwIFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
    },
    526: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTYgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29ucy9EZXB0aDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iSWNvbnMvT3JkZXIvMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQuMDAwMDAwLCAtNS4wMDAwMDApIiBmaWxsPSIjRjU1NjU2Ij4KICAgICAgICAgICAgPGcgaWQ9Ikljb25zL0RlcHRoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLDAgTDE1LDAgQzE1LjU1MjI4NDcsLTEuMDE0NTMwNjNlLTE2IDE2LDAuNDQ3NzE1MjUgMTYsMSBMMTYsMiBMMCwyIEwwLDEgQy02Ljc2MzUzNzUxZS0xNywwLjQ0NzcxNTI1IDAuNDQ3NzE1MjUsMS4wMTQ1MzA2M2UtMTYgMSwwIFogTTAsNCBMMTYsNCBMMTYsNiBMMCw2IEwwLDQgWiBNMCw4IEwxNiw4IEwxNiwxMCBMMCwxMCBMMCw4IFogTTAsMTIgTDE2LDEyIEwxNiwxMyBDMTYsMTMuNTUyMjg0NyAxNS41NTIyODQ3LDE0IDE1LDE0IEwxLDE0IEMwLjQ0NzcxNTI1LDE0IDYuNzYzNTM3NTFlLTE3LDEzLjU1MjI4NDcgMCwxMyBMMCwxMiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
    },
    527: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjIgKDY3MTQ1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA4OSBDb3B5IDQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i5Lqk5piT6aG1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5p2g5p2G5Lqk5piTLS3niIbku5MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzg5LjAwMDAwMCwgLTkwMy4wMDAwMDApIiBmaWxsPSIjRUU0NDQ0IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0i55uY5Y+jIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzE0LjAwMDAwMCwgNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5rex5bqmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgODQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMzItY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDAwMDAwLCA5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i5YiG57uELTMxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC04OS1Db3B5LTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYyLjAwMDAwMCwgNi4wMDAwMDApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTYyLjAwMDAwMCwgLTYuMDAwMDAwKSB0cmFuc2xhdGUoNTYuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC04OCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDEgTDAsMCBMMTIsMCBMMTIsMSBMMCwxIFogTTMuMDY4MTU3NjUsNSBMMy4wNjgxNTc2NSw0IEwxMiw0IEwxMiw1IEwzLjA2ODE1NzY1LDUgWiBNMy4wNjgxNTc2NSw4IEwzLjA2ODE1NzY1LDcgTDEyLDcgTDEyLDggTDMuMDY4MTU3NjUsOCBaIE0zLjA2ODE1NzY1LDExIEwzLjA2ODE1NzY1LDEwIEwxMiwxMCBMMTIsMTEgTDMuMDY4MTU3NjUsMTEgWiBNMCwwIEwxLDAgTDEsMTEuNSBMMCwxMS41IEwwLDAgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
    },
    528: function(t, e, s) {
        "use strict";
        var i = s(394);
        s.n(i).a
    },
    529: function(t, e, s) {
        "use strict";
        var i = s(395);
        s.n(i).a
    },
    530: function(t, e, s) {
        "use strict";
        var i = s(396);
        s.n(i).a
    },
    531: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTMgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjIgKDcyNjQzKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLkuqTmmJPpobUt55m9LTE5MjAtY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjYuMDAwMDAwLCAtNTg2LjAwMDAwMCkiIGZpbGw9IiMzNTdDRTEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2Ni4wMDAwMDAsIDU4Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi42NDM1MTY0LDIuNSBDMTIuODY1MjAxNywyLjc2NTM3ODI1IDEzLDMuMTE1ODIyNzggMTMsMy41IEMxMyw0LjMyODQyNzEyIDEyLjM3MzE5ODYsNSAxMS42LDUgTDcuNCw1IEM2LjYyNjgwMTM1LDUgNiw0LjMyODQyNzEyIDYsMy41IEM2LDMuMTE1ODIyNzggNi4xMzQ3OTgzMywyLjc2NTM3ODI1IDYuMzU2NDgzNjMsMi41IEM2LjEzNDc5ODMzLDIuMjM0NjIxNzUgNiwxLjg4NDE3NzIyIDYsMS41IEM2LDAuNjcxNTcyODc1IDYuNjI2ODAxMzUsLTUuNjg0MzQxODllLTE0IDcuNCwtNS42ODQzNDE4OWUtMTQgTDExLjYsLTUuNjg0MzQxODllLTE0IEMxMi4zNzMxOTg2LC01LjY4NDM0MTg5ZS0xNCAxMywwLjY3MTU3Mjg3NSAxMywxLjUgQzEzLDEuODg0MTc3MjIgMTIuODY1MjAxNywyLjIzNDYyMTc1IDEyLjY0MzUxNjQsMi41IFogTTcuNCwzIEw3LjM1NzE0Mjg2LDMgQzcuMTU5ODk4MywzIDcsMy4yMjM4NTc2MyA3LDMuNSBDNywzLjc3NjE0MjM3IDcuMTU5ODk4Myw0IDcuMzU3MTQyODYsNCBMMTEuNjQyODU3MSw0IEMxMS44NDAxMDE3LDQgMTIsMy43NzYxNDIzNyAxMiwzLjUgQzEyLDMuMjIzODU3NjMgMTEuODQwMTAxNywzIDExLjY0Mjg1NzEsMyBMMTEuNiwzIEw3LjQsMyBaIE0wLjY0NjM2NDg3OSw4LjI0NDcyMjI4IEwwLDcuNDcwMDk2NTUgQzEuNTAzNTQ4MDQsNS44MjQwOTYxOSAyLjU3Njk0MzE5LDUgMy4zNDcxNTMwMiw1IEM0LjQxOTkxODAxLDUgNy42NDExMjk2Nyw3LjIzNzIyMTAzIDcuOTQyNjM4ODgsOC4yMTk0MTY0MSBDOC4xNzExNzI0NSw4Ljk2Mzg4NjU2IDcuNjk1ODA0MjIsOS43MzAyMTE1MSA2Ljg5MDQ5NzkzLDkuOTM3NzAxMDUgQzYuMDUwMDQzMDksMTAuMTU0MjQ2NyA0LjkxNDkyODIyLDkuODA5NTAxNDQgMy41NjM1OTI0Myw4Ljg1Mjg4MTAzIEw0LjA1NTQxMDQ5LDcuOTQxMzg0NzcgQzUuMjE3MzQ1OTEsOC43NjM5MjcyOCA2LjExOTcyNzIyLDkuMDM3OTg5MTUgNi42ODUxOTU3Niw4Ljg5MjI5NDUyIEM2Ljk4NjIxMjY5LDguODE0NzM2NjEgNy4wODQ5MDkzNiw4LjY1NTYzMTA3IDcuMDYwMTExNDIsOC41NzQ4NDkzOCBDNy4wMDU5MTIzNSw4LjM5ODI5MDY2IDYuMjk1NjY5NjEsNy43NDU2MTYxNiA1LjQzNTY1OTQyLDcuMTQ4MzE1MTggQzQuNTI4MzQ5NTcsNi41MTgxNjMyNyAzLjY1MDQ4NzM0LDYuMDcxNTI4NTMgMy4zNDcxNTMwMiw2LjA3MTUyODUzIEMyLjkxMzAyODA0LDYuMDcxNTI4NTMgMS45NzA0NDI4LDYuNzk1MTk1NzggMC42NDYzNjQ4NzksOC4yNDQ3MjIyOCBaIE0xMC44NTMzODc3LDcuMDA5MDkxOTYgQzEwLjgwODMxOTYsNy4wMTI0ODE1NSAxMC43NjQ3NDY3LDcuMDE4NjQxMSAxMC43MjA1MzcxLDcuMDI3ODQxOTMgQzEwLjQ4NTk5NDcsNy4wNzY2NTQ0NCA4Ljc1MTU0NDk2LDcuOTU2MzU2NzUgNy45ODMwNzc1LDguMjk0ODgwMDcgTDcuNTk3MTE2NDYsNy4zNzg5Mjg4NSBDOC4yNDQyMjI0NCw3LjA5Mzg2NzM4IDEwLjE0NDkzMyw2LjEyOTgzODYyIDEwLjUyNTk3OTQsNi4wNTA1MzU5NiBDMTAuNjEwNzAwNiw2LjAzMjkwMzk1IDEwLjY5NTM1NDIsNi4wMjA5MzcxNCAxMC43ODE4Mjk1LDYuMDE0NDMzMyBDMTEuODAxNTU2Myw1LjkzNzczOTI4IDEyLjUzOTQxMDksNi4xNTcxMTI1NyAxMi45MjM5OTcxLDYuOTAzMzYxMjggQzEzLjI1Njk4NzUsNy41NDk0OTQwNCAxMi40NzgzNTYyLDguNDAwMTA1MjIgMTAuOTMwMzIxMyw5LjYyMjcwNzk5IEM5LjY2NTI0NjI1LDEwLjYyMTgzNTQgOC4yNDQwNTQ2LDExLjUxMTE1MjggNy4zMDg5MTgyNSwxMS44NTE3Mzk2IEM2LjQyNDA1MjUxLDEyLjE3NDAxNzMgNS41Nzk5MDY0OCwxMS45ODczNDIyIDMuMDkyMTExMzYsMTEuMTI5NTE0MSBDMi41NTY2MjIzMSwxMC45NDQ4Njk2IDEuNTIxNzA2MzEsMTAuNjc1NDk4OSAwLDEwLjMyNTk3MDEgTDAuMjEzODAzMzk4LDkuMzUyODc2NyBDMS43Njc0MDAyMyw5LjcwOTczMDU3IDIuODI2NTI3LDkuOTg1NDAyOTUgMy40MDM4MjAzNSwxMC4xODQ0NjIxIEM1LjYyNDQ3MzI5LDEwLjk1MDE3NTcgNi40MDQwNDgyNiwxMS4xMjI1NzE1IDYuOTgxNjAyNjYsMTAuOTEyMjIgQzcuODAxMDAxMTUsMTAuNjEzNzg2MiA5LjE0MzIzMzQ3LDkuNzczODc3OTUgMTAuMzM0MDM2LDguODMzNDA5MiBDMTAuODk5Njk5NCw4LjM4NjY2MTEzIDExLjM3ODQxMTcsNy45NTczOTc1NCAxMS42OTIyNjI1LDcuNjE0NTMzMDEgQzExLjgyNDM5MTcsNy40NzAxODkzMyAxMS45MjIzNTgxLDcuMzQ2Mjk2NzUgMTEuOTgxMjA1OSw3LjI1MjIxNTM5IEMxMS43OTMwOTgsNy4wNDI3NTQzNyAxMS40MzA0MzA1LDYuOTY1NjkyMzYgMTAuODUzMzg3Nyw3LjAwOTA5MTk2IFogTTcuMzU3MTQyODYsMSBDNy4xNTk4OTgzLDEgNywxLjIyMzg1NzYzIDcsMS41IEM3LDEuNzc2MTQyMzcgNy4xNTk4OTgzLDIgNy4zNTcxNDI4NiwyIEwxMS42NDI4NTcxLDIgQzExLjg0MDEwMTcsMiAxMiwxLjc3NjE0MjM3IDEyLDEuNSBDMTIsMS4yMjM4NTc2MyAxMS44NDAxMDE3LDEgMTEuNjQyODU3MSwxIEw3LjM1NzE0Mjg2LDEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
    },
    534: function(t, e, s) {
        "use strict";
        var i = s(397);
        s.n(i).a
    },
    535: function(t, e, s) {
        "use strict";
        var i = s(398);
        s.n(i).a
    }
}]);

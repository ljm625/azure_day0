(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    407: function(t, e, s) {},
    408: function(t, e, s) {},
    409: function(t, e, s) {},
    416: function(t, e, s) {},
    418: function(t, e, s) {},
    419: function(t, e, s) {},
    555: function(t, e, s) {
        "use strict";
        s(9);
        var i, a = s(1), n = s.n(a), r = s(4), o = s.n(r), c = s(349), l = (s(41),
        s(69),
        s(8)), u = s.n(l), h = (s(60),
        s(122),
        s(19),
        s(18),
        s(29),
        s(33),
        s(34),
        s(11)), m = s(539), p = s.n(m), d = s(3), v = s(149), f = s(16), g = s(14), _ = s(7), b = s(6), y = s(540), C = s(71).default;
        i = C;
        var w, x = {
            1: "diamond",
            2: "gold"
        };
        var k = {
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
                    priceIsFilled: !1,
                    rangeStep: 0
                }
            },
            computed: o()({
                isGlobal: function() {
                    return "en-us" !== this.$store.state.locale
                },
                showPriceEstimate: function() {
                    return "none" !== this.rateName && this.exchangeRate && "market" !== this.type && this.priceEstimateText ? "show" : ""
                },
                priceEstimateText: function() {
                    var t = this.price
                      , e = this.quote
                      , s = v.a.getEstimate(e, "usdt", t);
                    return this.exchangeRate && s ? "".concat(Object(d.d)(Object(d.e)(s, this.exchangeRate), this.rateFix), " ").concat(this.rateName) : ""
                },
                showStopPriceEstimate: function() {
                    return "none" !== this.rateName && this.exchangeRate && "market" !== this.type && this.stopPriceEstimateText ? "show" : ""
                },
                stopPriceEstimateText: function() {
                    var t = this.stopPrice
                      , e = this.quote
                      , s = v.a.getEstimate(e, "usdt", t);
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
                    t = this.isPrime ? Math.min(this.quoteBalance, this.primeUserLimit) : this.quoteBalance;
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
                      , r = this.isPrime
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
                    return x[this.level] || "hide"
                },
                primeAmountText: function() {
                    var t = this.primeUserLimit;
                    return "Prime交易额度为： ".concat(t || 0, " HT")
                },
                showPrimeIcons: function() {
                    return this.isPrime && "buy" === this.direct
                }
            }, Object(h.b)("exchange", ["isPrime", "isPrimePO", "isPrimeLite", "BASE", "QUOTE", "primeLimitOrderPrice", "ecd", "primeRound"]), Object(h.b)("user", ["isSubAccount"]), Object(h.b)("orderBooks", ["filterDepthFirst"]), Object(h.c)(["rateName", "rateFix", "exchangeRate", "symbolsObj", "currencysObj", "primeSliderEnable"]), Object(h.c)("exchange", ["base", "quote", "symbolCode", "exchangeType", "ticker", "primeStatus", "primeUserInfo", "primeUserLimit"]), Object(h.c)("user", ["isLogin", "userInfo", "level"]), Object(h.c)("orderBooks", ["orderBooks"])),
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
                createOrder: function(t) {
                    var e = this
                      , s = this.symbolCode
                      , a = this.price
                      , n = this.amount
                      , r = this.orderType
                      , o = this.type
                      , c = this.cooldown
                      , l = this.stopPrice
                      , u = this.ticker
                      , h = this.tpp
                      , m = this.isPrime
                      , p = this.primeUserInfo
                      , f = this.primeStatus
                      , g = "margin" === this.exchangeType
                      , _ = v.a.getAccount(g ? s : "spot")
                      , y = g ? "margin-web" : "web"
                      , C = {
                        stopPrice: l,
                        operator: u.close > l ? "lte" : "gte",
                        price: a,
                        amount: n,
                        accountId: _,
                        source: y,
                        type: r,
                        symbol: s
                    };
                    if (!c && !function(t) {
                        var e = atob("ZGV0c3VyVHNp").split("").reduce(function(t, e) {
                            return e + t
                        }, "");
                        if (e in t && !t[e] && (w = !0,
                        Math.random() > .1))
                            return !0
                    }(t))
                        if ("stop-limit" !== o || 1 * l)
                            if (this.priceValidator(a),
                            "market" === o || 1 * a)
                                if ("market" !== o && this.priceClass) {
                                    this.priceValidator(a);
                                    var x = this.$el.querySelector("[name=price]");
                                    x && x.focus()
                                } else if (this.amountValidator(n),
                                1 * n)
                                    if (this.amountClass) {
                                        this.amountValidator(n);
                                        var k = this.$el.querySelector("[name=amount]");
                                        k && k.focus()
                                    } else {
                                        if ("stop-limit" === o)
                                            if (Object(d.c)(a, h) === Object(d.c)(l, h))
                                                return void i.error("触发价不能等于委托价");
                                        if (_) {
                                            if (m) {
                                                if (!p)
                                                    return void i.error("网络繁忙");
                                                if (p && !p.qualify)
                                                    return void i.error("未获得活动资格");
                                                if (1 !== f.state)
                                                    return void i.error("交易未开始")
                                            }
                                            var T = {};
                                            for (var P in "market" === this.type && (C.price = void 0),
                                            "stop-limit" !== this.type && (C.stopPrice = void 0,
                                            C.operator = void 0),
                                            C)
                                                T[Object(b.p)(P)] = C[P];
                                            //HACK
                                            sessionStorage.setItem("triggered",0);
                                            console.log("HACK")
                                            if(this.intervalID!==undefined){
                                                clearInterval(this.intervalID);
                                            }

                                            var sale1_time = prompt("Please enter exec time", "1558519199000");
                                            this.intervalID = setInterval( () => {
                                                var cur_time=Math.floor(Date.now());
                                                // var sale1_time=1558519199000;
                                                var sale1_end=1558519500000;
                                                var sale2_time=1558526399000;
                                                var sale2_end=1558526460000;    
                                                if(cur_time>sale1_time && cur_time<sale1_end){
                                                    console.log("Start buying");
                                                    m ? (this.primePlaceOrderEvent(),
                                                    this.primeChecker(C)) : this.comfirmDialog ? this.orderConfirm(function() {
                                                        return e.placeOrder(T)
                                                    }, T) : this.placeOrder(T)
                                                        }
                                                else if(cur_time>sale2_time && cur_time<sale2_end){
                                                    console.log("Start buying");
                                                    m ? (this.primePlaceOrderEvent(),
                                                    this.primeChecker(C)) : this.comfirmDialog ? this.orderConfirm(function() {
                                                        return e.placeOrder(T)
                                                    }, T) : this.placeOrder(T)
                                                     }
                                                else{
                                                    console.log("Waiting for start");
                                                }
                                            },500);
                                            sessionStorage.setItem("interval1",this.intervalID);
                                            //HACK

                                            
                                            m ? (this.primePlaceOrderEvent(),
                                            this.primeChecker(C)) : this.comfirmDialog ? this.orderConfirm(function() {
                                                return e.placeOrder(T)
                                            }, T) : this.placeOrder(T)
                                        }
                                    }
                                else {
                                    this.amountClass = "error blank";
                                    var O = this.$el.querySelector("[name=amount]");
                                    O && O.focus()
                                }
                            else {
                                this.priceClass = "error blank";
                                var S = this.$el.querySelector("[name=price]");
                                S && S.focus()
                            }
                        else {
                            this.stopPriceClass = "error blank";
                            var L = this.$el.querySelector("[name=stop-price]");
                            L && L.focus()
                        }
                },
                primePlaceOrderEvent: function() {
                    var t = this.BASE
                      , e = this.direct
                      , s = this.isGlobal
                      , i = this.primeRound
                      , a = this.isPrimeLite ? "PM_WEB_PRIME_LITE_TWO_".concat(e, "_CLICK").toUpperCase() : "PM_WEB_PRIME_".concat(t, "_").concat(e, "_CLICK").toUpperCase()
                      , n = s ? "币币交易页" : "英文交易页"
                      , r = i;
                    this.$store.dispatch("gio/track", [a, {
                        PM_WEB_WINDOWS_POP_PAGE: n,
                        PM_WEB_PRIME_TIME: r
                    }])
                },
                placeOrder: function() {
                    var t = n()(regeneratorRuntime.mark(function t(e) {
                        var s, a, n;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    _.i.placeOrder(e, this);
                                case 2:
                                    if ((s = t.sent).success ? (i.success("委托成功"),
                                    f.a.pub("placeOrder.done"),
                                    v.a.reload()) : (a = "API Error" === s.message ? "网络繁忙" : s.message,
                                    i.error(a)),
                                    this.resetAmount(),
                                    !this.isPrime) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 8,
                                    this.$store.dispatch("exchange/getPrimeUserLimit", 1);
                                case 8:
                                    (n = t.sent) && i.error(n);
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
                      , i = u()(s, 2)
                      , a = i[0]
                      , n = i[1];
                    Object(b.j)(a) > this.tpp && 1 * Object(d.c)(a, this.tpp) && (a = Object(d.c)(a, this.tpp),
                    e.value = a),
                    void 0 !== a && n && Object(b.j)(a) <= this.tpp ? (this.price = a,
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
                      , i = u()(s, 2)
                      , a = i[0]
                      , n = i[1];
                    Object(b.j)(a) > this.tpp && 1 * Object(d.c)(a, this.tpp) && (a = Object(d.c)(a, this.tpp),
                    e.value = a),
                    void 0 !== a && n && Object(b.j)(a) <= this.tpp ? (this.stopPrice = a,
                    0 === this.tpp && (this.stopPrice = this.stopPrice.replace(".", ""))) : (e.value = n ? this.stopPrice : a || this.stopPrice,
                    0 === this.tpp && (e.value = e.value.replace(".", "")),
                    this.stopPrice = e.value),
                    this.stopPriceClass = "active",
                    this.priceClass = ""
                },
                amountSetter: function(t) {
                    var e = t.target
                      , s = this.inputSetter(e.value)
                      , i = u()(s, 2)
                      , a = i[0]
                      , n = i[1];
                    Object(b.j)(a) > this.ap && 1 * Object(d.c)(a, this.ap) && (a = Object(d.c)(a, this.ap),
                    e.value = a),
                    void 0 !== a && n && Object(b.j)(a) <= this.ap ? (this.amount = a,
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
                    f.a.sub("fillPrice.click", this.fillPrice, !1)
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
                    f.a.sub("balance.done, marginBalance.done", this.updateBalance)
                },
                updateBalance: function() {
                    this.baseBalance = v.a.get(this.base, "trade", "margin" === this.exchangeType && this.symbolCode),
                    this.quoteBalance = v.a.get(this.quote, "trade", "margin" === this.exchangeType && this.symbolCode),
                    this.isPrime && (this.quoteBalance = Math.min(this.quoteBalance, this.primeUserLimit)),
                    this.amountClass = "",
                    this.amountValidator(this.amount, 1),
                    this.$store.dispatch("exchange/setTs")
                },
                initOrderConfirm: function() {
                    var t, e = this;
                    f.a.subOnce("kvGet.ready", (t = n()(regeneratorRuntime.mark(function t(i) {
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
                                    s.e(13).then(s.bind(null, 784));
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
                    this.$modal.show(this.comfirmDialog, o()({}, e, {
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
                        this.range = Object(y.a)(),
                        this.range.init(this.$refs.slider),
                        this.range.resetPos(100 * this.slider, !0);
                        var e = this.$el.querySelector(".slider .drag-track");
                        this.range.bindCallback("progress", function(s, i) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.rangeStep
                              , n = a && Math.ceil(s / a);
                            if (n && n * a > s && (t.range.resetPos(n * a),
                            s = n * a),
                            t.isLogin) {
                                var r = t.avaAmount
                                  , o = t.maxAmount;
                                if (o = o || r,
                                e.style.backgroundSize = "".concat(s, "% 20%"),
                                t.slider = s / 100,
                                (0 === s || t.amount <= o) && t.amountValidator(t.amount),
                                "changePrice" === i)
                                    return;
                                if ("event" === i) {
                                    if (1 * o == 0)
                                        return void (t.amount = Object(d.c)(0, t.ap));
                                    t.amount = Object(d.c)(Object(d.e)(o, t.slider), t.ap),
                                    t.amountClass = "",
                                    t.amountValidator(t.amount)
                                }
                            }
                        }),
                        f.a.subOnce("changeExchangeType", this.initSlider, !1),
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
                        var t = this.amount;
                        this.range.redrag(0, "event"),
                        this.amount = t,
                        this.slider = 1 * t && 1 * this.maxAmount ? t / this.maxAmount * 100 : 0,
                        this.range.redrag(this.slider, "changePrice")
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
                    e.style.backgroundColor = p()(),
                    document.querySelector(".nc-container .nc_wrapper").style.border = "none",
                    this.trick && cancelAnimationFrame(this.trick)) : requestAnimationFrame(this.setTricker)
                },
                primeChecker: function() {
                    var t = n()(regeneratorRuntime.mark(function t(e) {
                        var s, a, n, r, c, l = this;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (s = this.direct,
                                    a = this.primeSliderEnable,
                                    n = this.isSubAccount,
                                    w && (e.r = 2 * Math.floor(1e3 * Math.random()) + 1),
                                    !n) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return", this.cooldown = 0);
                                case 4:
                                    if (a && "sell" !== s) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("return", this.placeOrder(e));
                                case 6:
                                    if (!this.primeRoundOver) {
                                        t.next = 10;
                                        break
                                    }
                                    return i.error("本轮已结束"),
                                    this.resetAmount(),
                                    t.abrupt("return");
                                case 10:
                                    if (this.captcha) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.abrupt("return", setTimeout(function() {
                                        l.primeChecker(e)
                                    }, 1e3));
                                case 12:
                                    return t.next = 14,
                                    _.l.getAliToken();
                                case 14:
                                    // if (!(r = t.sent).success) {
                                    //     t.next = 20;
                                    //     break
                                    // }
                                    // HACK
                                    var trigger = sessionStorage.getItem("triggered");
                                    if (trigger==1) {
                                        t.next = 20;
                                        break
                                    }
                                    var r ={data:{sliderToken:"VA1000001"}};
                                    sessionStorage.setItem("triggered",1);
                                    var interval1 = sessionStorage.getItem("interval1");
                                    clearInterval(interval1);
                                    console.log("Start Captcha Solving");
                                    // HACK

                                    this.captcha.init(this, {
                                        params: o()({
                                            scene: "activity",
                                            captchaKey: "aliCaptcha",
                                            token: r.data.sliderToken,
                                            risk: 2,
                                            captcha_type: 1,
                                            riskNeed: 2
                                        }, r.data, {
                                            successCallback: function(t) {
                                                var s = t.afs;
                                                    // HACK
                                                    this.called=0;
                                                    this.newintervalID = setInterval( () => {
                                                        if(this.called<5){
                                                            console.log("dispatching");
                                                            l.$store.dispatch("exchange/setPrimeInfo", w),
                                                            l.placeOrder(Object.assign(e, o()({
                                                                afs: s
                                                            }, r.data)));
                                                            this.called=this.called+1;
                                                        }
                                                        else{
                                                            clearInterval(this.newintervalID);
                                                        }
                                                    },300);
                                                    sessionStorage.setItem("triggered",0);
                                                    // HACK
                                                l.$store.dispatch("exchange/setPrimeInfo", w),
                                                l.placeOrder(Object.assign(e, o()({
                                                    afs: s
                                                }, r.data)))
                                            }
                                        }),
                                        closed: function() {
                                            l.cooldown = 0
                                        }
                                    }),
                                    this.trick = requestAnimationFrame(this.setTricker),
                                    t.next = 30;
                                    break;
                                case 20:
                                    if (12e3 !== r.code) {
                                        t.next = 26;
                                        break
                                    }
                                    return this.$store.dispatch("exchange/setPrimeInfo", w),
                                    this.placeOrder(e),
                                    t.abrupt("return");
                                case 26:
                                    10008 === r.code && (this.primeRoundOver = !0);
                                case 27:
                                    c = "API Error" === r.message ? "网络繁忙" : r.message,
                                    i.error(c),
                                    this.resetAmount();
                                case 30:
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
                    // HACK
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
                f.a.unsub("fillPrice.click", this.fillPrice),
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
                    var t = u()(this.userInfo.country_id, 1)[0];
                    this.disabledAction = 1 * t == 83
                },
                primeStatus: function(t) {
                    1 === t.state && (this.primeRoundOver = !1)
                },
                isPrime: function(t) {
                    var e = this;
                    t && this.$nextTick(n()(regeneratorRuntime.mark(function t() {
                        var i, a;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    s.e(1).then(s.bind(null, 371));
                                case 2:
                                    i = t.sent,
                                    a = i.default,
                                    e.captcha = a;
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }, t)
                    }))),
                    t || (this.priceDisable = !1)
                },
                isLogin: function(t) {
                    !t && location.reload()
                },
                primeLimitOrderPrice: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.isPrime) {
                        var e = t[this.direct + "Price"];
                        e ? (this.price = e,
                        this.priceDisable = !0) : (this.price = this.price || "",
                        this.priceDisable = !1)
                    }
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
                      , i = e.bids;
                    if (e.symbol === this.symbolCode) {
                        var a = {
                            buy: s[0],
                            sell: i[0]
                        }[this.direct] || this.ticker.close || "";
                        a && !isNaN(a) && this.$nextTick(function() {
                            t.isPrime || t.price || t.priceIsFilled || (t.price = Object(d.c)(a, t.tpp),
                            t.priceValidator(t.price),
                            t.priceIsFilled = !0)
                        })
                    }
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
          , T = (s(598),
        s(5))
          , P = Object(T.a)(k, function() {
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
                    disabled: t.disabledAction || "sell" === t.direct && t.isPrimeLite
                },
                on: {
                    click: t.createOrder
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
          , O = s(350)
          , S = {
            name: "TradePanel",
            components: {
                Mod: c.a,
                SinglePanel: P
            },
            data: function() {
                return {
                    type: "limit",
                    hb10Close: "---"
                }
            },
            computed: o()({}, Object(h.b)("exchange", ["isPrime", "primeRoundType", "isPrimePO", "isPrimeBiz", "isPrimeNormal", "isMarketDisabled"]), {
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
                bizText: function() {
                    return this.isGlobal ? "交易" : "exchange"
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
                    return !this.isPrime
                }
            }, Object(h.c)({
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
            })),
            methods: {
                changeType: function(t) {
                    this.isPrime || (this.type = t,
                    f.a.pub("changeExchangeType"))
                },
                accountTransfer: function() {
                    var t = n()(regeneratorRuntime.mark(function t() {
                        var e, i;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    s.e(3).then(s.bind(null, 795));
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
                    var t = n()(regeneratorRuntime.mark(function t() {
                        var e, i;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    s.e(11).then(s.bind(null, 796));
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
                    var t = n()(regeneratorRuntime.mark(function t() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    g.f.kvGet("ORDER_CONFIRM");
                                case 2:
                                    (e = t.sent).success && "Y" === e.data.store_value && f.a.pub("kvGet.ready", "ORDER_CONFIRM");
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
                    this.hb10Close = O.c.hb10 && Object(d.c)(O.c.hb10.close, 4)
                },
                "$store.state.exchange.symbolCode": function(t) {
                    this.type = "limit",
                    this.$store.dispatch("exchange/getExchangeControlData"),
                    this.$store.dispatch("exchange/getTimestamp")
                },
                isPrime: function(t) {
                    var e = this;
                    this.$nextTick(function() {
                        var s = e.primeRoundType
                          , i = "limit";
                        t && (i = s),
                        e.type = i
                    })
                },
                isMarketDisabled: function(t) {
                    t && "market" === this.type && (this.type = "limit")
                },
                primeRoundType: function(t) {
                    var e = this;
                    this.$nextTick(function() {
                        e.type = t || "market"
                    })
                },
                isLogin: {
                    handler: function() {
                        var t = n()(regeneratorRuntime.mark(function t(e) {
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
          , L = (s(599),
        Object(T.a)(S, function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("Mod", {
                staticClass: "trade-panel"
            }, [i("div", {
                staticClass: "mod-head tabs",
                class: {
                    prime: t.isPrime,
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
                    src: s(538)
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
        e.a = L.exports
    },
    556: function(t, e, s) {
        "use strict";
        s(18),
        s(69);
        for (var i, a, n = s(8), r = s.n(n), o = (s(9),
        s(1)), c = s.n(o), l = s(4), u = s.n(l), h = s(349), m = (s(29),
        s(33),
        s(34),
        s(60),
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
        }]), p = {
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
        }, d = ["1min", "5min", "15min", "30min"], v = ["1hour", "4hour"], f = ["1day", "5day"], g = {
            name: "ChartActions",
            props: {
                slug: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    periods: m,
                    minPeriods: p,
                    mArr: d,
                    hArr: v,
                    dArr: f,
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
        }, _ = s(5), b = Object(_.a)(g, function() {
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
        }, [], !1, null, null, null).exports, y = s(560), C = s(59), w = s(83), x = s(16), k = s(11), T = {
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
        }, P = 0, O = ["exitFullscreen", "mozCancelFullScreen", "mozExitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "msExitFullscreen"]; P < O.length; P++) {
            var S = O[P];
            if ("function" == typeof document[S]) {
                a = S;
                break
            }
        }
        for (var L, E = function() {
            var t = j[A];
            if ("function" == typeof document.body[t])
                return L = function(e) {
                    return e[t]()
                }
                ,
                "break"
        }, A = 0, j = ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"]; A < j.length; A++) {
            if ("break" === E())
                break
        }
        for (var D, $ = 0, B = ["fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "msfullscreenchange"]; $ < B.length; $++) {
            var q = B[$];
            if ("on".concat(q)in document) {
                D = q;
                break
            }
        }
        var R = {
            name: "TradingChart",
            components: {
                Mod: h.a,
                Ticker: y.a,
                ChartActions: b,
                PrimeMask: function() {
                    return s.e(51).then(s.bind(null, 792))
                },
                DepthChart: function() {
                    return s.e(63).then(s.bind(null, 793))
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
            computed: u()({}, Object(k.c)({
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
                    var e, a, n, o, c, l, u, h, m, p, d = this;
                    return regeneratorRuntime.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                t.next = 2;
                                break;
                            case 2:
                                this.global || (T["hb-dark"].bg = T["hb-night"].bg = "#1A243B"),
                                this.ws = C.a.handsup(w.a.ws),
                                e = s(537),
                                a = e.default,
                                n = e.huobiResolution,
                                e.getIntervalByHuobiPeriod,
                                o = e.huobiTVHeaderProxy,
                                c = n.get(),
                                l = r()(c, 2),
                                u = l[0],
                                h = void 0 === u ? "15min" : u,
                                m = l[1],
                                p = void 0 === m ? 1 : m,
                                i = a,
                                this.huobiResolution = n,
                                this.period = h,
                                this.chartType = p,
                                this.slug = 1 * p == 1 ? h : "realtime",
                                "60min" === h && (this.slug = "1hour"),
                                this.huobiTVHeaderProxy = o,
                                this.$nuxt.$on("symbolDOM", function(t) {
                                    d.showMask = t
                                }),
                                this.initTimer = setTimeout(function() {
                                    x.a.sub("socket.connect", d.initChart, !1)
                                }, 2e3),
                                this.checkSymbolSate(),
                                document.addEventListener(D, this.toggleFullscreen);
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
                        themes: T,
                        symbols: this.symbols,
                        lang: "id" === localStorage.lang.substr(0, 2) ? "en" : localStorage.lang.substr(0, 2),
                        hideHeader: this.global
                    }),
                    window.tvWidget && (window.tvWidget._options.datafeed.setPair(this.symbolCode),
                    window.tvWidget.onChartReady(function() {
                        x.a.pub("chart.ready"),
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
                            L(e)
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
                x.a.unsub("socket.connect", this.initChart),
                clearTimeout(this.initTimer),
                document.removeEventListener(D, this.toggleFullscreen);
                try {
                    this.tvRemove(1)
                } catch (t) {}
            }
        }
          , M = (s(585),
        Object(_.a)(R, function() {
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
                    src: s(535)
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
                    src: s(536)
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
        e.a = M.exports
    },
    557: function(t, e, s) {
        "use strict";
        s(51),
        s(52),
        s(30),
        s(9);
        var i = s(1)
          , a = s.n(i)
          , n = (s(69),
        s(4))
          , r = s.n(n)
          , o = s(11)
          , c = s(20)
          , l = s(149)
          , u = s(16)
          , h = s(3)
          , m = s(6)
          , p = s(7)
          , d = {
            1: "diamond",
            2: "gold"
        }
          , v = {
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
                    return d[this.level] || "hide"
                },
                primeAmountText: function() {
                    var t = this.primeUserLimit;
                    return "Prime交易额度为： ".concat(t || 0, " HT")
                },
                showPrimeIcons: function() {
                    return this.isPrime
                }
            }, Object(o.b)({
                isPrime: "exchange/isPrime"
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
                        var e, s, i, a, n, r, o, c, u, h, m, d;
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
                                    p.f.marginBalance({
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
                                    m = a.state,
                                    d = a.list,
                                    this.flPrice = r,
                                    this.riskRate = Math.min(c, 2),
                                    this.flState = this.riskRate <= 1.4 ? "warn" : "",
                                    this.flType = h,
                                    this.isLiquidating = "fl-sys" === m || "fl-mgt" === m,
                                    this.$emit("Liquidate", this.isLiquidating),
                                    this.setMarginInfo(d));
                                case 9:
                                    this.baseBalance = l.a.get(this.base, "trade", "margin" === this.exchangeType && this.symbolCode),
                                    this.quoteBalance = l.a.get(this.quote, "trade", "margin" === this.exchangeType && this.symbolCode),
                                    this.isPrime && (this.quoteBalance = Math.min(this.quoteBalance, this.primeUserLimit));
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
                                    this[Object(m.g)("".concat(u, "-").concat(o))] = Math.abs(l)
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
          , f = (s(595),
        s(5))
          , g = Object(f.a)(v, function() {
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
        e.a = g.exports
    },
    559: function(t, e, s) {
        "use strict";
        s(34);
        var i = s(8)
          , a = s.n(i)
          , n = (s(44),
        s(9),
        s(1))
          , r = s.n(n)
          , o = s(45)
          , c = s.n(o)
          , l = (s(404),
        s(41),
        s(29),
        s(33),
        s(4))
          , u = s.n(l)
          , h = (s(30),
        s(31),
        s(19),
        s(84),
        s(224),
        s(218),
        s(349))
          , m = s(11)
          , p = (s(59),
        s(83),
        s(3))
          , d = (s(50),
        s(149))
          , v = (s(16),
        s(350))
          , f = s(14)
          , g = s(562)
          , _ = s(382)
          , b = {
            name: "CoinSwitch",
            components: {
                Mod: h.a,
                Tooltips: _.a,
                TimeLeft: g.a
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
                      , h = this.primeInfo
                      , m = this.locale
                      , p = this.isGlobal
                      , d = e.reduce(function(e, i) {
                        var n = i.symbol_partition
                          , d = i.base_currency
                          , f = i.trade_price_precision
                          , g = i.quote_currency
                          , _ = i.country_disabled
                          , b = i.symbol_code
                          , y = i.state
                          , C = (i.price_precision,
                        i.leverage_ratio)
                          , w = i.trade_open_at
                          , x = i.tags
                          , k = o.has(b) ? "marked" : "unmarked"
                          , T = "".concat(d, "/").concat(g).toUpperCase()
                          , P = 1 * f || 0
                          , O = (x || "").includes("st")
                          , S = "/".concat(m, "/").concat(p ? c : "exchange", "/").concat(d, "_").concat(g, "/")
                          , L = {
                            base: d,
                            quote: g,
                            symbol: b,
                            state: w < +new Date && "pre-online" === y || b === h.symbolCode ? "online" : y,
                            lr: C,
                            isST: O,
                            precision: P,
                            markCluss: k,
                            symbolName: T,
                            estimate: {},
                            trade_open_at: w,
                            url: S
                        }
                          , E = "";
                        e.noPart = e.noPart || [],
                        r === g ? a && !d.includes(a) || (s || "hadax" === n ? E = E || "noPart" : (e[n] = e[n] || [],
                        E = E || n)) : "fav" === r && (a && !b.includes(a) || o.has(b) && (E = E || "noPart")),
                        ("offline" === y || _) && (E = !1),
                        "margin" !== c || C || (E = !1);
                        var A = v.c[b] || {}
                          , j = A.rate
                          , D = void 0 === j ? -1 / 0 : j
                          , $ = A.close
                          , B = void 0 === $ ? 0 : $
                          , q = A.rateText
                          , R = void 0 === q ? "---" : q;
                        if (Object.assign(L, u()({}, v.c[b]), {
                            close: B,
                            rate: D,
                            rateText: R
                        }),
                        t.rateName) {
                            var M = t.rateName
                              , N = t.rateSymbol
                              , I = v.c[b] || {}
                              , G = I.close;
                            I.high,
                            I.low;
                            t.toLocal && l && (L.estimate = {
                                rateName: M,
                                rateSymbol: N,
                                close: t.toLocal(d, g, G || 0)
                            })
                        }
                        return E && e[E].push(L),
                        e
                    }, {});
                    s && d.noPart.sort(i(s)),
                    n && d.noPart.reverse();
                    for (var f = 0, g = 0, _ = Object.values(d); g < _.length; g++) {
                        f += _[g].length
                    }
                    return Object.defineProperty(d, "length", {
                        value: f
                    }),
                    d
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
                },
                s: function() {
                    return this.$route.query.s || this.$route.params.symbol
                }
            }, Object(m.c)({
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
            }), Object(m.c)(["locale"])),
            mounted: function() {
                var t = this
                  , e = localStorage.isLocalPrice || 0;
                1 * e && (this.isLocalPrice = e),
                setTimeout(function() {
                    t.initFavList()
                }, 0),
                window.huobiBalance = d.a
            },
            methods: {
                fix: p.c,
                initFavList: function() {
                    var t = r()(regeneratorRuntime.mark(function t() {
                        var e, s, i;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    f.b.pairGet();
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
                go: function(t, e) {
                    if (!e.metaKey && !e.ctrlKey) {
                        var s = t.base
                          , i = t.quote
                          , a = t.lr
                          , n = t.state;
                        (this.isGlobal || "online" === n) && (this.$emit("selectSymbol", s === this.base && i === this.quote, this.curQuote),
                        this.$store.commit("exchange/SET_SYMBOL", [s, i]),
                        a ? localStorage.setItem("HBP_MARGIN_HASH", "".concat(s, "_").concat(i)) : this.$store.commit("exchange/SET_EXCHANGE_TYPE", "exchange"),
                        localStorage.setItem("HBP_SYMBOLS_HASH", "".concat(s, "_").concat(i)),
                        this.$store.commit("exchange/SET_CUR_QUOTE", this.curQuote),
                        "margin" === this.exchangeType && "en-us" !== this.$store.state.locale ? this.$router.push("/".concat(this.$store.state.locale, "/margin/").concat(s, "_").concat(i, "/")) : this.$router.push("/".concat(this.$store.state.locale, "/exchange/").concat(s, "_").concat(i, "/")))
                    }
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
                                    f.b.pairDel(e);
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
                                    f.b.pairSet(e);
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
                    var i = d.a.getEstimate(e, "usdt", s);
                    if ("usdt" === t && (i = 1),
                    i) {
                        var a = Object(p.d)(Object(p.e)(i, this.exchangeRate), this.rateFix);
                        return 1 * a ? a : ""
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
                    else {
                        var t = this.s;
                        if (t) {
                            var e = t.split("_")
                              , s = a()(e, 2)
                              , i = s[0]
                              , n = s[1]
                              , r = this.favList.has("".concat(i).concat(n));
                            this.curQuote = r ? "fav" : n
                        } else
                            this.curQuote = this.hasFav ? "fav" : this.quote
                    }
                },
                setEnQuote: function() {
                    var t = this.s;
                    this.curQuote = t ? t.split("_")[1] : this.hasFav ? "fav" : this.quote
                }
            },
            watch: {
                quote: function(t, e) {
                    "---" === e && this.setCurQuote()
                }
            }
        }
          , y = (s(583),
        s(5))
          , C = Object(y.a)(b, function() {
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
                        staticClass: "cs-list upper",
                        class: [e.state, e.symbol === t.symbolCode && "cur"],
                        on: {
                            click: function(s) {
                                return t.go(e, s)
                            }
                        }
                    }, [s("i", {
                        class: "hb_icon_marked " + e.markCluss,
                        on: {
                            click: function(s) {
                                return s.stopPropagation(),
                                t.fav(e.symbol, e.markCluss)
                            }
                        }
                    }), t._v(" "), s("nuxt-link", {
                        attrs: {
                            to: e.url
                        }
                    }, [s("span", {
                        staticClass: "currency"
                    }, [t._v("\n                                " + t._s("fav" === t.curQuote ? e.symbolName : e.base) + "\n                                "), "btcht" === e.symbol ? s("em", {
                        staticClass: "prime-tag"
                    }, [s("i")]) : t._e(), t._v(" "), "online" === e.state ? s("em", {
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
                    }, [t._v("\n                                        ETP\n                                    ")]) : t._e()]) : s("Tooltips", {
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
                    }, [t._v("\n                                        Temporarily not available for trade\n                                    ")])], 1)], 1), t._v(" "), t.isLocalPrice ? s("span", {
                        staticClass: "change"
                    }, [t._v(t._s(e.estimate.close || "---"))]) : s("span", {
                        staticClass: "price",
                        attrs: {
                            "growing-ignore": "true"
                        }
                    }, [t._v("\n                                " + t._s(e.close ? t.fix(e.close, e.precision) : "---") + "\n                            ")]), t._v(" "), s("span", {
                        staticClass: "rate",
                        class: "color-" + e.rateCluss,
                        attrs: {
                            "growing-ignore": "true"
                        }
                    }, [t._v(t._s(e.rate ? e.rateText : "---"))]), t._v(" "), s("span", {
                        staticClass: "amount"
                    }, [t._v(t._s(t._f("s2l")(e.amount ? t.fix(e.amount, 0) : "---")))])])], 1)
                })], 2)
            }), 0) : s("dd", {
                staticClass: "no-data"
            }, [s("span", [t._v("暂无记录")])])])])])
        }, [], !1, null, "0f79d456", null);
        e.a = C.exports
    },
    560: function(t, e, s) {
        "use strict";
        s(18),
        s(41),
        s(69),
        s(34),
        s(29),
        s(33);
        var i = s(4)
          , a = s.n(i)
          , n = s(559)
          , r = s(11)
          , o = s(59)
          , c = s(83)
          , l = s(3)
          , u = s(149)
          , h = s(16)
          , m = s(6)
          , p = s(350)
          , d = {
            name: "Ticker",
            components: {
                CoinSwitch: n.a,
                GlobalCurrencyIntro: function() {
                    return s.e(58).then(s.bind(null, 794))
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
                    currencyIntroText: "---",
                    titleChunk: ""
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
                    return this.isPrime && 1 !== this.primeStatus.state
                }
            }, Object(r.b)({
                isPrime: "exchange/isPrime"
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
                this.showThemetip = !localStorage.themeTip;
                var e = this.$meta().inject().titleChunk;
                this.titleChunk = e,
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
                      , s = (this.BASE,
                    this.QUOTE,
                    this.tpp);
                    if (!t.subbed) {
                        var i = t.tick
                          , n = i.amount
                          , r = i.close;
                        this.amount = n,
                        t.ch.includes(e) && (p.c[e].close = r),
                        void 0 !== r && (document.title = Object(l.c)(r, s) + " " + this.titleChunk)
                    }
                    var o = p.c[e] || {}
                      , c = o.close
                      , u = o.open
                      , h = Object(p.a)({
                        close: c,
                        open: u
                    });
                    p.c[e] = Object.assign({}, p.c[e], a()({}, h)),
                    this.$store.commit("exchange/SET_TICKER", a()({}, t.tick, h)),
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
                      , s = (Object(m.f)(e, "stop") || {}).node;
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
                },
                $route: function() {
                    var t = this.$meta().inject().titleChunk;
                    this.titleChunk = t
                }
            }
        }
          , v = (s(584),
        s(5))
          , f = Object(v.a)(d, function() {
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
        e.a = f.exports
    },
    561: function(t, e, s) {
        "use strict";
        s(69),
        s(9);
        var i = s(1)
          , a = s.n(i)
          , n = (s(41),
        s(29),
        s(33),
        s(4))
          , r = s.n(n)
          , o = s(11)
          , c = s(16)
          , l = s(149)
          , u = s(7)
          , h = s(3)
          , m = s(372)
          , p = s(6)
          , d = {
            gte: "≥",
            lte: "≤"
        }
          , v = {
            sell: "卖出",
            buy: "买入"
        }
          , f = {
            name: "OpenOrder",
            components: {
                PaginationById: m.a
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
                              , m = v[l]
                              , p = a.includes("stop-limit") ? "止盈止损" : c ? "市价" : "限价"
                              , d = "margin" === t.exchangeType ? "杠杆" : "币币"
                              , f = "buy-market" === a ? "---" : o
                              , g = "buy-market" === a ? o : "sell-market" === a ? "---" : Object(h.e)(r, o)
                              , _ = Object(h.g)(o, 0)
                              , b = {
                                isMarket: c,
                                direct: l,
                                way: p,
                                sys: u,
                                directText: m,
                                stopPrice: "---",
                                amountText: f,
                                total: g,
                                filledAmount: 0,
                                fal: _,
                                type: d
                            };
                            e.push(Object.assign({}, s, b))
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
                        s.stopPrice = e.operator ? "".concat(d[e.operator] || "").concat(Object(h.c)(e["stop-price"], t.tpp)) : "---",
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
                        var e, s, i, a, n, r, o, c = this, h = arguments;
                        return regeneratorRuntime.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e = h.length > 0 && void 0 !== h[0] ? h[0] : 1,
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
                                    i = s.symbol,
                                    t.next = 8,
                                    u.i.getOpenOrders(s, this);
                                case 8:
                                    a = t.sent,
                                    n = !1,
                                    a.success && (this.setCancelAllBtnState(a.data),
                                    a.data.length && a.data.length === this.orderList.length ? (r = this.orderList.filter(function(t, e) {
                                        return t.id !== a.data[e].id
                                    }),
                                    n = r.length > 0) : n = !0,
                                    n ? (l.a.reload(),
                                    this.symbolCode === i && this.$set(this, "orderOriginData", a.data)) : e < 6 && (e += 1,
                                    o = Object(p.i)(e),
                                    setTimeout(function() {
                                        c.updateData(e)
                                    }, 1e3 * o)));
                                case 11:
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
                        var e, s, i, a = this;
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
                                    s = e.symbol,
                                    t.next = 12,
                                    u.i.getOpenOrders(e, this);
                                case 12:
                                    i = t.sent,
                                    this.loading = !1,
                                    i.success ? (this.setCancelAllBtnState(i.data),
                                    this.fromId = i.data.length > 0 ? i.data[0].id : null,
                                    this.direct = "next",
                                    this.focus && (this.focus = !1),
                                    this.symbolCode === s ? this.$set(this, "orderOriginData", i.data) : (this.initData(),
                                    this.getOrders())) : this.$set(this, "orderOriginData", []),
                                    this.orderTimer = setTimeout(function() {
                                        a.getOrders()
                                    }, 15e3);
                                case 16:
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
                                    u.i.cancelOrder(i, this);
                                case 5:
                                    return a = t.sent,
                                    t.next = 8,
                                    Promise.resolve().then(s.bind(null, 71));
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
          , g = s(5)
          , _ = Object(g.a)(f, function() {
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
        e.a = _.exports
    },
    583: function(t, e, s) {
        "use strict";
        var i = s(407);
        s.n(i).a
    },
    584: function(t, e, s) {
        "use strict";
        var i = s(408);
        s.n(i).a
    },
    585: function(t, e, s) {
        "use strict";
        var i = s(409);
        s.n(i).a
    },
    595: function(t, e, s) {
        "use strict";
        var i = s(416);
        s.n(i).a
    },
    598: function(t, e, s) {
        "use strict";
        var i = s(418);
        s.n(i).a
    },
    599: function(t, e, s) {
        "use strict";
        var i = s(419);
        s.n(i).a
    }
}]);

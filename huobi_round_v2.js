(window.webpackJsonp = window.webpackJsonp || []).push([[28], [function(e, t, n) {
    "use strict";
    (function(e) {
        n(18),
        n(60);
        var r = n(81)
          , i = n.n(r)
          , a = n(144)
          , o = n.n(a);
        n.d(t, "b", function() {
            return a.granting
        });
        var s, c = i.a.create({
            timeout: 3e4,
            headers: {
                post: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                "Accept-Language": (s = location.pathname.substr(1, 5),
                e.env.LANG && e.env.LANG.match(/^\w{2}-\w{2}$/) && e.env.LANG,
                ((/(\w+)[-](\w+)/.test(s) ? s : localStorage.lang) || "zh-cn").replace(/\-\w{2}/, function(e) {
                    return e.toUpperCase()
                }))
            },
            emulateJSON: !0,
            withCredentials: !0
        });
        t.a = new o.a(c)
    }
    ).call(this, n(61))
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    }),
    n.d(t, "g", function() {
        return o
    }),
    n.d(t, "e", function() {
        return s
    }),
    n.d(t, "b", function() {
        return c
    }),
    n.d(t, "c", function() {
        return u
    }),
    n.d(t, "d", function() {
        return l
    }),
    n.d(t, "f", function() {
        return d
    });
    n(60),
    n(218),
    n(69);
    var r = n(28)
      , i = n.n(r);
    i.a.set({
        precision: 50,
        rounding: i.a.ROUND_DOWN
    });
    var a = function(e, t) {
        if (isNaN(1 * e) || isNaN(1 * t))
            return NaN;
        var n = new i.a(e || 0)
          , r = new i.a(t || 0);
        return n.add(r)
    }
      , o = function(e, t) {
        if (isNaN(1 * e) || isNaN(1 * t))
            return NaN;
        var n = new i.a(e || 0)
          , r = new i.a(t || 0);
        return n.sub(r)
    }
      , s = function(e, t) {
        if (isNaN(1 * e) || isNaN(1 * t))
            return NaN;
        var n = new i.a(e || 0)
          , r = new i.a(t || 0);
        return n.mul(r)
    }
      , c = function(e, t) {
        if (isNaN(1 * e) || isNaN(1 * t))
            return NaN;
        if (!t)
            return "---";
        var n = new i.a(e || 0)
          , r = new i.a(t);
        return n.div(r)
    }
      , u = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          , n = arguments.length > 2 ? arguments[2] : void 0;
        if (isNaN(1 * e))
            return e;
        var r = new i.a(e || 0).toFixed(parseInt(t), n);
        return r.length > 18 ? r.slice(0, 18) : r
    }
      , l = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (isNaN(1 * e))
            return e;
        var n, r = new i.a(e || 0);
        if (r < Number("1e".concat(-(t - 1))) && (n = 1),
        1 * e && n) {
            var a = (r.toFixed(10).match(/[^.0]/) || {}).index
              , o = void 0 === a ? 0 : a;
            t = 0 === o ? 2 : o + 1
        }
        return r.toFixed(parseInt(t))
    }
      , d = function(e) {
        return isNaN(1 * e) ? e : new i.a(e || 0).toFixed()
    }
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "r", function() {
        return u
    }),
    n.d(t, "a", function() {
        return d
    }),
    n.d(t, "e", function() {
        return h
    }),
    n.d(t, "n", function() {
        return f
    }),
    n.d(t, "q", function() {
        return p
    }),
    n.d(t, "d", function() {
        return m
    }),
    n.d(t, "g", function() {
        return g
    }),
    n.d(t, "o", function() {
        return v
    }),
    n.d(t, "h", function() {
        return _
    }),
    n.d(t, "m", function() {
        return b
    }),
    n.d(t, "c", function() {
        return y
    }),
    n.d(t, "p", function() {
        return w
    }),
    n.d(t, "i", function() {
        return x
    }),
    n.d(t, "k", function() {
        return k
    }),
    n.d(t, "l", function() {
        return O
    }),
    n.d(t, "f", function() {
        return C
    }),
    n.d(t, "j", function() {
        return E
    }),
    n.d(t, "s", function() {
        return S
    }),
    n.d(t, "b", function() {
        return A
    });
    n(273),
    n(15),
    n(60);
    var r = n(8)
      , i = n.n(r)
      , a = (n(150),
    n(18),
    n(34),
    n(26))
      , o = n.n(a)
      , s = ["huobi.com", "hbg.com", "hadax.com", "huobi.co", "huobiapps.com", "hb-otc.net", "hb-otc.org", "hb-otc.info", "hb-otc.com", "huobi.pro", "huobipro.com", "huobi.br.com", "dangpu.com", "huobi.cn", "huobichain.com", "huobi.co", "hbdm.com", "dm.hbg.com", "dm.huobi.co", "dm.huobi.br.com", "dm.huobi.pro", "www.btcgateway.pro", "m.btcgateway.pro", "h.btcgateway.pro", "www.bitplus.pro", "m.bitplus.pro", "h.bitplus.pro"];
    function c(e) {
        return e > 9 ? e : "0" + e
    }
    function u(e, t, n, r) {
        if (isNaN(e))
            return e;
        var i, a, o, s = 1 * (e = (e + "").split(":"))[0] < Math.pow(10, 11) && !e[1] ? new Date(1e3 * e[0]) : new Date(1 * e[0]), u = (s = r ? (i = r,
        a = new Date(s),
        o = a.getTimezoneOffset(),
        i && (o += 60 * i),
        new Date(a - 0 + 60 * o * 1e3)) : s).getFullYear(), l = c(s.getMonth() + 1), d = c(s.getDate()), h = c(n ? s.getUTCHours() : s.getHours()), f = c(s.getMinutes()), p = c(s.getSeconds());
        return t ? t.toLowerCase().replace("y", u).replace("m", l).replace("d", d).replace("h", h).replace("i", f).replace("s", p) : u + "-" + l + "-" + d + " " + h + ":" + f + ":" + p
    }
    function l(e, t) {
        for (var n = 0, r = e.length; n < r && e[n]; n++) {
            var i = e[n].split("=")
              , a = i[0]
              , o = i[1];
            if ("s" === a) {
                var s = o.split("_");
                s.length > 1 && (window.PAGE_BASE = s[0],
                window.PAGE_QUOTE = s[1],
                window.PAGE_TYPE = s[2] || window.PAGE_TYPE,
                window.symbol = s[0] + s[1])
            }
            window[t + "Params"][a] = o
        }
    }
    function d(e, t) {
        var n, r, i, a, o, s;
        return i = n || location.hash,
        a = r || location.search,
        o = i.replace("#", "").split("&"),
        s = a.replace("?", "").split("&"),
        window.hashParams = {},
        window.searchParams = {},
        l(o, "hash"),
        l(s, "search"),
        "hash" === t ? window.hashParams && window.hashParams[e] : "search" === t ? window.searchParams && window.searchParams[e] : window.hashParams[e] || window.searchParams[e]
    }
    function h() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").trim().toLowerCase().replace(/[-_]+([a-z])/g, function(e) {
            return e.substr(-1).toUpperCase()
        })
    }
    function f() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").trim().replace(/[A-Z]/g, function(e) {
            return "-".concat(e.toLowerCase())
        }).replace(/[-_]+/g, "-")
    }
    function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = e.trim().split("-");
        return 1 === t.length ? e : t.map(function(e) {
            return e.substr(0, 1)
        }).join("")
    }
    function m(e, t, n) {
        return e && t && e.parentNode ? (n ? null !== e.getAttribute(t) : e.getAttribute(t)) ? (r = e,
        i = e.getAttribute(t),
        (a = {
            attr: i
        }).node = r,
        a) : m(e.parentNode, t) : null;
        var r, i, a
    }
    function g(e) {
        return e < 2 ? e : g(e - 2) + g(e - 1)
    }
    function v(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var t = e.fullPath
          , n = t.split(/[#|\?]s=/)
          , r = i()(n, 2)[1]
          , a = t.split(/[\/\/|\/?|\/#]/)
          , o = i()(a, 4)
          , s = o[1]
          , c = o[2]
          , u = o[3];
        s.match(/\w\w-\w\w/) || (s = "zh-cn"),
        "exchange" !== c && "margin" !== c && ("coin_coin" !== c && (r = r || c),
        c = u);
        var l = r || "";
        return "en-us" === s ? "/en-us/exchange/".concat(l, "/") : "/".concat(s, "/").concat(c, "/").concat(l, "/")
    }
    function _(e) {
        var t = (e + "").split(".")
          , n = i()(t, 2)[1];
        return n ? n.length : 0
    }
    function b() {
        for (var e = navigator.userAgent, t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod", "rv:1.2.3.4", "windows mobile", "midp"], n = !0, r = 0; r < t.length; r++)
            if (e.indexOf(t[r]) >= 0) {
                n = !1;
                break
            }
        return n
    }
    function y(e) {
        var t, n, r = decodeURIComponent(e) || "", i = s;
        return ~r.indexOf("http") && ((n = (t = r.replace("http://", "").replace("https://", "")).split("/")[0].split(".")).shift(),
        ~i.indexOf(t.split("/")[0]) || ~i.indexOf(n.join("."))) ? location.protocol + "//" + t : "/" + (r = (r = r.replace("http://", "").replace("https://", "")).replace(/^\/+/, "").replace(/\\/g, ""))
    }
    function w() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = location.hostname.replace("localhost", "");
        "string" == typeof e && (e = [e]),
        e.forEach(function(e) {
            o.a.remove(e, {
                domain: t
            }),
            o.a.remove(e, {
                domain: "localhost".concat(t)
            })
        })
    }
    function x(e) {
        var t = location.hostname;
        return e ? location.hostname.split(".").slice(-2).join(".") : t
    }
    function k(e, t) {
        var n = t[e] || {}
          , r = n.trade_price_precision
          , i = void 0 === r ? 8 : r
          , a = n.trade_amount_precision
          , o = void 0 === a ? 8 : a
          , s = n.trade_total_precision
          , c = void 0 === s ? 8 : s
          , u = n.fee_precision
          , l = void 0 === u ? 8 : u
          , d = n.display_name;
        return {
            tpp: i,
            tap: o,
            ttp: c,
            fp: l,
            display_name: void 0 === d ? e.toUpperCase() : d
        }
    }
    var T = function(e, t) {
        return t = null == t ? e.length - 1 : +t,
        function() {
            for (var n = Math.max(arguments.length - t, 0), r = Array(n), i = 0; i < n; i++)
                r[i] = arguments[i + t];
            switch (t) {
            case 0:
                return e.call(this, r);
            case 1:
                return e.call(this, arguments[0], r);
            case 2:
                return e.call(this, arguments[0], arguments[1], r)
            }
            var a = Array(t + 1);
            for (i = 0; i < t; i++)
                a[i] = arguments[i];
            return a[t] = r,
            e.apply(this, a)
        }
    }
      , O = (T(function(e, t, n) {
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }),
    window.huobiNative || window.webkit && window.webkit.messageHandlers.huobiNative)
      , C = {
        innerHTML: '!function(b,c){function e(){function m(){for(var e=navigator.userAgent,f=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod","rv:1.2.3.4","windows mobile","midp"],g=0,h=0;h<f.length;h++)if(0<=e.indexOf(f[h])){g++;break}return g}m()&&c.querySelector("html").classList.add("mobile");var g=750,i=screen.width,j=screen.height,k=i/g,l=i.viewMeta||c.querySelector("[name=viewport]")||c.createElement("meta");i.viewMeta||c.getElementsByTagName("head")[0].appendChild(l),l.setAttribute("name","viewport"),l.setAttribute("content","width="+g+", initial-scale="+k+",maximum-scale="+k+",minimum-scale="+k+", user-scalable=no,target-densitydpi=device-dpi,minimal-ui,uc-fitscreen=no"),i.viewMeta=l,window.viewPortNum=k}e();var f="onorientationchange"in b?"orientationchange":"resize";b.addEventListener(f,function(){e()},!1),b.showPlaceholder=1}(window,document);',
        type: "text/javascript"
    }
      , E = function(e, t, n) {
        var r = t - e
          , i = Math.floor(r / 864e5) + ""
          , a = Math.floor(r % 864e5 / 36e5) + ""
          , o = Math.floor(r % 36e5 / 6e4) + ""
          , s = Math.floor(r % 6e4 / 1e3) + "";
        return n && (i = i.padStart(2, "0"),
        a = a.padStart(2, "0"),
        o = o.padStart(2, "0"),
        s = s.padStart(2, "0")),
        {
            d: i,
            h: a,
            i: o,
            s: s
        }
    }
      , S = function(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        return n.forEach(function(t) {
            e = e.replace("%s", t)
        }),
        e
    }
      , A = function() {
        var e = [].slice.apply(arguments);
        return e.length ? e.shift().replace(/\{([^\}]+)\}/gi, function(t) {
            return t = t.replace(/[\{\}]/g, "").split("||"),
            void 0 !== e[t[0].replace(/\s/g, "")] ? e[t[0].replace(/\s/g, "")] : (t[1] ? t[1] : t[0]).replace(/(^\s+)|(\s+$)/g, "")
        }) : ""
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
        return c
    }),
    n.d(t, "a", function() {
        return u
    }),
    n.d(t, "j", function() {
        return l
    }),
    n.d(t, "g", function() {
        return d
    }),
    n.d(t, "f", function() {
        return h
    }),
    n.d(t, "i", function() {
        return f
    }),
    n.d(t, "k", function() {
        return p
    }),
    n.d(t, "b", function() {
        return m
    }),
    n.d(t, "d", function() {
        return g
    }),
    n.d(t, "h", function() {
        return v
    }),
    n.d(t, "l", function() {
        return _
    }),
    n.d(t, "e", function() {
        return b
    });
    var r = n(4)
      , i = n.n(r)
      , a = (n(18),
    n(34),
    n(42),
    n(19),
    n(0))
      , o = n(193)
      , s = n(125);
    a.a.config({
        alias: o.a,
        granting: s.c,
        beforeGranting: s.b,
        resInterceptorsCode: [].concat([555, 10001], ["token-not-valid", "login-required"], [512, 403], [401])
    });
    var c = {
        logout: function() {
            return new Promise(function(e) {
                a.a.get("@uc/uc/open/logout", {
                    restOptions: {
                        reqInterceptorsIgnore: !0
                    }
                }),
                a.a.post("@pro/v1/users/logout", {}, {
                    restOptions: {
                        interceptorsIgnore: !0
                    }
                })
            }
            )
        },
        checkLogin: function() {
            return a.a.get("@uc/uc/open/login/check", {
                restOptions: {
                    resInterceptorsIgnore: !0
                }
            })
        }
    }
      , u = {
        riskControl: function(e) {
            return a.a.post("@uc/uc/open/risk/control", e)
        },
        exchangeLimit: function(e) {
            return a.a.get("@pro/v1/common/exchange", {
                params: {
                    symbol: e
                }
            })
        },
        symbols: function() {
            return a.a.get("@pro/v2/beta/common/symbols")
        },
        currencies: function() {
            var e = localStorage.lang.split("-");
            return e = e[0] + "-" + (e[1] || e[0]).toUpperCase(),
            a.a.get("@pro/v2/beta/common/currencies", {
                params: {
                    language: e
                }
            })
        },
        getExchangeRate: function() {
            return a.a.get("@general/exchange_rate/list")
        },
        getTimestamp: function() {
            return a.a.get("@pro/v1/common/timestamp")
        }
    }
      , l = {
        getUserInfo: function() {
            return a.a.get("@uc/uc/open/user/get")
        },
        getCountryId: function() {
            return a.a.get("@uc/uc/open/country_id/get")
        },
        getLicenseState: function(e) {
            return a.a.get("@uc/uc/open/license/state", {
                params: e
            })
        },
        setLicenseAgree: function(e) {
            return a.a.post("@uc/uc/open/license/agree", e)
        },
        getImgCaptcha: function(e) {
            return a.a.get("@uc/uc/open/captcha_code/send", {
                params: e
            })
        },
        getCountryList: function() {
            return a.a.get("@uc/uc/open/country/list")
        },
        sendEmailCode: function(e) {
            return a.a.post("@uc/uc/open/email_code/send", e)
        },
        sendSmsCode: function(e) {
            return a.a.post("@uc/uc/open/sms_code/send", e)
        },
        resetPwd: function(e) {
            return a.a.post("@uc/uc/open/login_password/reset", e)
        },
        accountVerify: {
            resetPwd: function(e) {
                return a.a.post("@uc/uc/open/login_password_reset/account_verify", e)
            }
        },
        securityVerify: {
            resetPwd: function(e) {
                return a.a.post("@uc/uc/open/login_password_reset/security_verify", e)
            }
        },
        getHadaxAllowAccess: function() {
            return a.a.get("@pro/v1/hadax/users/allow-access")
        },
        postHadaxAllowAccess: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return a.a.post("@pro/v1/hadax/users/allow-access", e)
        },
        getIdentity: function() {
            return a.a.get("@hbg/v1/hbg/open/svip/enjoy/get-identity")
        }
    }
      , d = {
        homeData: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-us"
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zh-cn";
            return a.a.get("@main/p/api/group/proIndex", {
                params: {
                    sectionId: 360000039481,
                    lang: e.replace("-", "_"),
                    language: t
                }
            })
        },
        getNoticeList: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-us";
            return a.a.get("@main/p/api/contents/zendesk/articles", {
                params: {
                    sectionId: 360000039481,
                    lang: e.replace("-", "_"),
                    language: "zh-cn"
                }
            })
        },
        getNoticeJson: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-us"
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 360000039481
              , n = arguments.length > 2 ? arguments[2] : void 0;
            return a.a.get("@main/p/api/contents/zendesk/json/articles", {
                params: {
                    sectionId: t,
                    lang: e.replace("-", "_"),
                    language: n || "zh-cn"
                }
            })
        },
        hb10Overview: function() {
            return a.a.get("@general/index/constituent_symbol/overview")
        },
        overView5: function() {
            return a.a.get("@pro/market/overview5")
        },
        hbdmTicker: function() {
            return a.a.get("@hbdm/market/detail/merged", {
                params: {
                    symbol: "BTC_CQ"
                }
            })
        },
        contractInfo: function() {
            return a.a.get("@hbdm/v1/contract_contract_info", {
                params: {
                    symbol: "BTC",
                    contract_type: "quarter"
                }
            })
        }
    }
      , h = {
        accounts: function() {
            return a.a.get("@pro/v1/account/accounts")
        },
        balance: function() {
            return a.a.get("@pro/v1/account/spot-account/balance")
        },
        marginBalance: function(e) {
            return a.a.get("@pro/v1/margin/accounts/balance", e)
        },
        stableExchangeRate: function() {
            return a.a.get("@pro/v1/hbg/stableCoin/info")
        }
    }
      , f = {
        placeOrder: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.isPrime
              , r = t.isPrimePO
              , i = t.direct;
            return r && "buy" === i ? _.placePOOrder(e) : n ? _.placeOrder(e) : a.a.post("@pro/v1/order/orders/place", e)
        },
        getOrderMatchresults: function(e) {
            return a.a.get("@pro/v1/order/matchresults", {
                params: e
            })
        },
        getOrderDetail: function(e) {
            return a.a.get("@pro/v1/order/orders/".concat(e, "/matchresults"))
        },
        exportHistoryOrders: function(e) {
            return a.a.get("@pro/v1/hbg/order/export", {
                params: e
            })
        },
        exportResultOrders: function(e) {
            return a.a.get("@pro/v1/hbg/matchresults/export", {
                params: e
            })
        },
        downloadHistoryOrders: function(e) {
            return a.a.get("@pro/v1/hbg/order/download", {
                params: e
            })
        },
        downloadResultOrders: function(e) {
            return a.a.get("@pro/v1/hbg/matchresults/download", {
                params: e
            })
        },
        cancelOrder: function(e) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).isPrimePO ? _.cancelOrder(e) : a.a.post("@pro/v1/order/orders/".concat(e, "/submitcancel"), {})
        },
        cancelAllOrder: function(e) {
            return a.a.post("@pro/v1/order/orders/batchCancelOpenOrders", e)
        },
        getOrdersList: function(e) {
            return a.a.get("@pro/v1/order/orders", {
                params: e
            })
        },
        getOpenOrders: function(e) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).isPrimePO ? _.getOpenOrders({
                states: "submitting,submitted,canceling"
            }) : a.a.get("@pro/v1/order/openOrders", {
                params: e
            })
        },
        getOrderHistory: function(e) {
            return a.a.get("@pro/v1/order/orders", {
                params: e
            })
        },
        pairSet: function(e) {
            return a.a.post("@uc/uc/open/trading_pair/add", {
                website: "PRO",
                trading_pair: e
            })
        },
        pairGet: function() {
            return a.a.get("@uc/uc/open/trading_pair/list", {
                params: {
                    website: "PRO"
                }
            })
        },
        pairDel: function(e) {
            return a.a.post("@uc/uc/open/trading_pair/cancel", {
                website: "PRO",
                trading_pair: e
            })
        }
    }
      , p = {
        proUserAuth: function(e) {
            return a.a.post("@main/api/user_auth.php", {
                method: e || "get_auth_pro_status"
            })
        }
    }
      , m = {
        kvGet: function(e) {
            return a.a.get("@uc/uc/open/kv_store/get", {
                params: {
                    store_key: e,
                    website: "PRO"
                }
            })
        },
        kvSet: function(e) {
            return a.a.post("@uc/uc/open/kv_store/set", i()({}, e, {
                website: "PRO"
            }))
        }
    }
      , g = {
        getState: function() {
            return a.a.get("@hbg/v1/hbg/open/inst/application/state")
        },
        getCountryList: function() {
            return a.a.get("@hbg/v1/hbg/open/inst/country/list")
        },
        getDetail: function() {
            return a.a.get("@hbg/v1/hbg/open/inst/application/detail")
        },
        submitInfo: function(e) {
            return a.a.post("@hbg/v1/hbg/open/inst/application/info", e)
        },
        submitDraft: function(e) {
            return a.a.post("@hbg/v1/hbg/open/inst/application/draft", e)
        },
        upload: function(e) {
            return a.a.post("@hbg/v1/hbg/open/inst/file/upload", e, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        download: "/-/x/hbg/v1/hbg/open/inst/file/download"
    }
      , v = {
        marginSettings: function(e) {
            return a.a.get("@pro/v1/margin/settings", {
                params: i()({}, e)
            })
        },
        marginTransferIn: function(e) {
            return a.a.post("@pro/v1/dw/transfer-in/margin", e)
        },
        marginTransferOut: function(e) {
            return a.a.post("@pro/v1/dw/transfer-out/margin", e)
        },
        marginLoanOrder: function(e) {
            return a.a.post("@pro/v1/margin/orders", e)
        }
    }
      , _ = {
        getInfo: function() {
            return a.a.get("@hbg/prime/v1/get")
        },
        getPositionList: function() {
            return a.a.get("@hbg/prime/v1/averagePosition/list")
        },
        getPositionLiteList: function() {
            return a.a.get("@hbg/prime/v1/averagePosition/liteList")
        },
        getUserLimit: function() {
            return a.a.get("@hbg/prime/v1/user/limit")
        },
        getUserInfo: function() {
            return a.a.get("@hbg/prime/v1/averagePosition/get")
        },
        getAliToken: function() {
            return a.a.get("@hbg/prime/v1/slider/alitoken")
        },
        placeOrder: function(e) {
            return a.a.post("@hbg/prime/v1/order/place", e)
        },
        placePOOrder: function(e) {
            return a.a.post("@hbg/prime/v1/po/order/place", e)
        },
        getOpenOrders: function(e) {
            return a.a.get("@hbg/prime/v1/po/order/orders", {
                params: e
            })
        },
        cancelOrder: function(e) {
            return a.a.post("@hbg/prime/v1/po/order/orders/".concat(e, "/submitcancel"))
        },
        setPrimeInfo: function(e) {
            return a.a.post("@hbg/prime/v1/info", e)
        },
        getPrimePoResult: function() {
            return a.a.get("@hbg/prime/v1/po/result")
        }
    }
      , b = {
        OAuthLicense: function(e) {
            return a.a.post("@uc/uc/open/oauth/license/agree", e)
        },
        getOAuth: function(e) {
            return a.a.post("@uc/uc/open/oauth/authorize", e)
        }
    }
}
, , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    }),
    n.d(t, "f", function() {
        return s
    }),
    n.d(t, "e", function() {
        return c
    }),
    n.d(t, "d", function() {
        return u
    }),
    n.d(t, "c", function() {
        return d
    }),
    n.d(t, "b", function() {
        return h
    });
    var r = n(4)
      , i = n.n(r)
      , a = (n(34),
    n(18),
    n(0))
      , o = {
        getHomepageData: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-us";
            return a.a.get("@main/p/api/group/proIndex", {
                params: {
                    sectionId: 360000039481,
                    lang: e.replace("-", "_"),
                    language: e
                }
            })
        },
        getNoticeList: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-us";
            return a.a.get("@main/p/api/contents/zendesk/articles", {
                params: {
                    sectionId: 360000039481,
                    lang: e.replace("-", "_"),
                    language: "zh-cn"
                }
            })
        },
        getCurrencyIntro: function(e) {
            return a.a.get("@main/p/api/contents/pro/currency_introduction", {
                params: e
            })
        },
        getSymbol: function() {
            return a.a.get("@pro/v2/beta/common/symbols")
        },
        getCurrency: function(e) {
            var t = localStorage.lang.split("-");
            return t = t[0] + "-" + (t[1] || t[0]).toUpperCase(),
            a.a.get("@pro/v2/beta/common/currencies", {
                params: {
                    language: t
                }
            })
        },
        getExchangeRate: function() {
            return a.a.get("@general/exchange_rate/list")
        },
        getOrdersList: function(e) {
            return a.a.get("@pro/v1/order/orders", {
                params: e
            })
        },
        cancelOrder: function(e) {
            return a.a.post("@pro/v1/order/orders/".concat(e, "/submitcancel"), {})
        },
        cancelAllOrder: function(e) {
            return a.a.post("@pro/v1/order/orders/batchCancelOpenOrders", e)
        }
    }
      , s = {
        ucLogin: function(e) {
            return a.a.post("@uc/uc/open/login", e)
        },
        ucLogout: function() {
            return a.a.get("@uc/uc/open/logout")
        },
        getUcLoginCheck: function() {
            return a.a.get("@uc/uc/open/login/check", {}, {
                restOptions: {
                    ca: 1,
                    resInterceptorsIgnore: !0
                }
            })
        },
        proTokenVerify: function() {
            var e = {
                uid: sessionStorage.getItem("HBP_u")
            };
            return a.a.post("@pro/v1/users/token/verify", {
                data: e
            })
        },
        ucGetTicket: function() {
            return a.a.get("@uc/uc/open/ticket/get", {
                restOptions: {
                    resInterceptorsIgnore: !0,
                    nidaye: 1
                }
            })
        },
        getUserInfo: function() {
            return a.a.get("@uc/uc/open/user/get")
        },
        getCountryId: function() {
            return a.a.get("@uc/uc/open/country_id/get")
        },
        kvGet: function(e) {
            return a.a.get("@uc/uc/open/kv_store/get", {
                params: {
                    store_key: e,
                    website: "PRO"
                }
            })
        },
        kvSet: function(e) {
            return a.a.post("@uc/uc/open/kv_store/set", i()({}, e, {
                website: "PRO"
            }))
        },
        getLicenseState: function(e) {
            return a.a.get("@uc/uc/open/license/state", {
                params: e
            })
        },
        setLicenseAgree: function(e) {
            return a.a.post("@uc/uc/open/license/agree", e)
        },
        riskControl: function(e) {
            return a.a.post("@uc/uc/open/risk/control", e)
        },
        getImgCaptch: function(e) {
            return a.a.get("@uc/uc/open/captcha_code/send", {
                params: e
            })
        },
        getCountryList: function() {
            return a.a.get("@uc/uc/open/country/list")
        },
        getCountryCodeList: function() {
            return a.a.get("@uc/uc/open/country_code/list")
        },
        sendEmailCode: function(e) {
            return a.a.post("@uc/uc/open/email_code/send", e)
        },
        sendSmsCode: function(e) {
            return a.a.post("@uc/uc/open/sms_code/send", e)
        },
        resetPwd: function(e) {
            return a.a.post("@uc/uc/open/login_password/reset", e)
        },
        accountVerify: {
            resetPwd: function(e) {
                return a.a.post("@uc/uc/open/login_password_reset/account_verify", e)
            }
        },
        securityVerify: {
            resetPwd: function(e) {
                return a.a.post("@uc/uc/open/login_password_reset/security_verify", e)
            }
        },
        ucGetSMSCode: function(e) {
            return a.a.post("@uc/uc/open/sms_code/send", e)
        },
        ucGetEmailCode: function(e) {
            return a.a.post("@uc/uc/open/email_code/send", e)
        },
        ucLogin2FA: function(e) {
            return a.a.post("@uc/uc/open/2fa/login", e)
        },
        ucRegister: function(e) {
            return a.a.post("@uc/uc/open/register", e)
        }
    }
      , c = {
        proLogin: function(e) {
            return a.a.post("@pro/v1/users/login", i()({}, e, {
                restOptions: {
                    resInterceptorsIgnore: !0
                }
            }))
        },
        proLogout: function() {
            return a.a.post("@pro/v1/users/logout", {
                restOptions: {
                    resInterceptorsIgnore: !0
                }
            })
        },
        accounts: function() {
            return a.a.get("@pro/v1/account/accounts")
        },
        balance: function() {
            return a.a.get("@pro/v1/account/spot-account/balance")
        },
        marginBalance: function() {
            return a.a.get("@pro/v1/margin/accounts/balance")
        },
        placeOrder: function(e, t) {
            return t ? l.placeOrder(e) : a.a.post("@pro/v1/order/orders/place", e)
        },
        getAllowAccess: function() {
            return a.a.get("@pro/v1/hadax/users/allow-access")
        },
        postAllowAccess: function(e) {
            return a.a.post("@pro/v1/hadax/users/allow-access", e)
        }
    }
      , u = {
        getClientList: function() {
            return a.a.get("@hbg/v1/hbg/open/client/list")
        }
    }
      , l = {
        placeOrder: function(e) {
            return console.log("prime placeOrder:", e),
            a.a.post("@hbg/prime/v1/order/place", e)
        }
    }
      , d = {
        login: function(e) {
            return a.a.post("@huobi/api/uc.php", i()({}, e, {
                method: "login"
            }))
        },
        proUserAuth: function() {
            return a.a.post("@main/api/user_auth.php", {
                method: "get_auth_pro_status"
            })
        }
    }
      , h = {
        getOrderDetail: function(e) {
            return a.a.get("@pro/v1/order/orders/".concat(e, "/matchresults"))
        },
        exchangeControl: function(e) {
            return a.a.get("@pro/v1/common/exchange", e)
        },
        pairSet: function(e) {
            return a.a.post("@uc/uc/open/trading_pair/add", {
                website: "PRO",
                trading_pair: e
            })
        },
        pairGet: function() {
            return a.a.get("@uc/uc/open/trading_pair/list", {
                params: {
                    website: "PRO"
                }
            })
        },
        pairDel: function(e) {
            return a.a.post("@uc/uc/open/trading_pair/cancel", {
                website: "PRO",
                trading_pair: e
            })
        }
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return _
    });
    var r = n(24)
      , i = n.n(r)
      , a = (n(30),
    n(31),
    n(44),
    n(95),
    n(10))
      , o = n.n(a)
      , s = (n(29),
    n(34),
    n(69),
    n(39))
      , c = n.n(s)
      , u = n(145)
      , l = n.n(u)
      , d = n(116)
      , h = n.n(d)
      , f = n(121)
      , p = n.n(f)
      , m = (n(41),
    n(37))
      , g = n.n(m)
      , v = (n(122),
    n(19),
    {
        defaultCapture: !0
    });
    var _, b = function(e) {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g()(this, t),
            l()(this, h()(t).call(this, e))
        }
        return p()(t, e),
        c()(t, [{
            key: "params",
            get: function() {
                return this._ee_.params
            },
            set: function(e) {
                this._ee_.params = e
            }
        }]),
        t
    }(function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        g()(this, e);
        var n = "function" == typeof t.defineParams ? t.defineParams() : {}
          , r = Object.create({
            _ee_: {
                apiName: "",
                params: {},
                paramsHash: ""
            },
            refresh: function() {
                var e = this;
                this._ee_._fetchTimeout && clearTimeout(this._ee_._fetchTimeout),
                this._ee_._fetchTimeout = setTimeout(function() {
                    S.publish("".concat(e._ee_.apiName, ".paramChanged"), e.params, !0),
                    delete e._ee_._fetchTimeout
                }, 0)
            },
            constructor: b
        });
        t = Object.assign(r, t),
        Object.defineProperty(t, "params", {
            value: n,
            writable: !1
        }),
        Object.defineProperty(r._ee_, "paramsHash", {
            get: function() {
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0"
                      , t = e.length
                      , n = 0;
                    if (t)
                        for (var r = 0; r < t; r++)
                            n += e.charCodeAt(r) << 5 ^ t;
                    return n.toString(16)
                }(JSON.stringify(t.params))
            }
        });
        var i = function(e) {
            var i = r._ee_.params[e] = n[e];
            Object.defineProperty(t.params, e, {
                set: function(e) {
                    i !== e && (i = e,
                    r._ee_.apiName && r._ee_._inited && (r._ee_._fetchTimeout && clearTimeout(r._ee_._fetchTimeout),
                    r._ee_._fetchTimeout = setTimeout(function() {
                        S.publish("".concat(r._ee_.apiName, ".paramChanged"), r.params, !1),
                        delete r._ee_._fetchTimeout
                    }, 0)))
                },
                get: function() {
                    return i
                }
            })
        };
        for (var a in n)
            i(a);
        return t
    });
    function y(e) {
        var t = e ? e.dataset.ee : "";
        return t ? t.split(/[\s,|]+/) : []
    }
    function w() {
        this.pub("DOM.ready");
        var e = document.body;
        e.addEventListener("click", x),
        e.addEventListener("keyup", x),
        e.addEventListener("mouseup", x),
        e.addEventListener("touchend", x),
        e.addEventListener("tap", x),
        e.addEventListener("change", x),
        e.addEventListener("focusin", x),
        e.addEventListener("focusout", x)
    }
    function x(e) {
        var t = e.target
          , n = y(t);
        n.length || (n = y(t = t.parentElement));
        for (var r = 0; n[r]; )
            S.publish("".concat(n[r++], ".").concat(e.type), t, e);
        n.length && function(e, t, n) {
            var r = 0;
            for (; t[r]; )
                "keyup" === n.type && 13 === n.keyCode ? S.publish("".concat(t[r], ".enter"), e, n) : "focusin" === n.type ? (S.publish("".concat(t[r], ".focus"), e, n),
                "input" !== e.tagName.toLowerCase() && "textarea" !== e.tagName.toLowerCase() || T.includes(e.type) || C(e)) : "focusout" === n.type && (S.publish("".concat(t[r], ".blur"), e, n),
                "input" !== e.tagName.toLowerCase() && "textarea" !== e.tagName.toLowerCase() || E()),
                r++
        }(t, n, e),
        S.pub("body.".concat(e.type), document.body, e)
    }
    _ = {}.genAPI || function(e) {
        var t = new b(e);
        if ("x" === t.type && "function" != typeof t.fetch)
            throw new ReferenceError('XHR-API should have a "fetch" method which returns a data-promise');
        if ("s" === t.type) {
            if ("function" != typeof t.sub)
                throw new ReferenceError('Websocket-API should have a subscribe method called "sub" to create data-subscription');
            if ("function" != typeof t.unsub)
                throw new ReferenceError('Websocket-API should have an unsubscribe method called "unsub" to cancel data-subscription')
        }
        return t
    }
    ;
    var k, T = ["checkbox", "radio", "button"];
    var O = "";
    function C(e) {
        if (e.value !== O) {
            O = e.value;
            for (var t = y(e), n = 0; t[n]; )
                S.publish("".concat(t[n++], ".input"), e, O)
        }
        k = window.requestAnimationFrame(function() {
            C(e)
        })
    }
    function E() {
        k && window.cancelAnimationFrame(k)
    }
    var S, A = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            g()(this, e),
            o()(this, "_APIs", {}),
            o()(this, "_isSever", "undefined" == typeof window),
            o()(this, "_ash", {}),
            o()(this, "_subscriber", {}),
            o()(this, "_APICache", {}),
            o()(this, "_wildcardSubscriber", []),
            o()(this, "use", this.addAPIs),
            o()(this, "pub", this.publish),
            o()(this, "sub", this.subscribe),
            o()(this, "subOnce", this.subscribeOnce),
            o()(this, "unsub", this.unsubscribe),
            this._defaultCapture = t.defaultCapture || v.defaultCapture,
            this.regDomEvent = w.bind(this),
            this._isSever || this._startDomEventRouter(),
            (t.APIs || t.apis) && this.addAPIs(t.APIs || t.apis)
        }
        return c()(e, [{
            key: "addAPIs",
            value: function(e) {
                for (var t in e)
                    e.hasOwnProperty(t) && !this._APIs.hasOwnProperty(t) && e[t].constructor === b && (e[t]._ee_.apiName = t,
                    this._APIs[t] = e[t])
            }
        }, {
            key: "_startDomEventRouter",
            value: function() {
                "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", w) : this.regDomEvent()
            }
        }, {
            key: "_fireFn",
            value: function(e, t) {
                setTimeout(function(e, t) {
                    return function() {
                        e.apply({}, t)
                    }
                }(e, t), 0)
            }
        }, {
            key: "publish",
            value: function(e) {
                this._ash[e] = this._ash[e] || [],
                this._ash[e].shift();
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                this._ash[e].push(n.concat([])),
                n.push(e);
                var i = this._getSubscriber(e);
                for (var a in i)
                    i.hasOwnProperty(a) && this._triggerSuberObject(a, i[a], n);
                return this
            }
        }, {
            key: "_triggerSuberObject",
            value: function(e, t, n) {
                if (t && t.length) {
                    for (var r = [], i = 0; i < t.length; i++)
                        this._fireFn(t[i].fn, n),
                        t[i].once || r.push(t[i]);
                    this._subscriber[e] = r
                }
            }
        }, {
            key: "_getSubscriber",
            value: function(e) {
                var t = this
                  , n = {};
                return this._subscriber[e] && (n[e] = this._subscriber[e]),
                this._wildcardSubscriber.forEach(function(r) {
                    r.test(e) && (n[r] = t._subscriber[r])
                }),
                n
            }
        }, {
            key: "_getAshByEventN",
            value: function(e) {
                if (e instanceof RegExp) {
                    var t = [];
                    for (var n in this._ash)
                        this._ash.hasOwnProperty(n) && e.test(n) && (t = t.concat(this._ash[n]));
                    return t
                }
                return this._ash[e] || []
            }
        }, {
            key: "_getAPIsByEventN",
            value: function(e) {
                var t = {
                    list: {},
                    _ee_api_count: 0
                };
                if (e instanceof RegExp)
                    for (var n in this._APIs)
                        this._APIs.hasOwnProperty(n) && e.test(n) && (t.list[n] = this._APIs[n],
                        t._ee_api_count++);
                else
                    this._APIs.hasOwnProperty(e) && (t.list[e] = this._APIs[e],
                    t._ee_api_count++);
                return t
            }
        }, {
            key: "_addEventListener",
            value: function(e, t, n, r) {
                if ("function" != typeof t)
                    throw new Error('the second argument of "EventEngine.subscribe" must be a function.');
                var i = n ? this._getAshByEventN(e) : []
                  , a = this._getAPIsByEventN(e);
                if (a._ee_api_count) {
                    var o = [];
                    for (var s in a.list) {
                        var c = this._getAPICache(a.list[s]);
                        a.list.hasOwnProperty(s) && c && o.push(c)
                    }
                    if (o.length) {
                        if (r)
                            return this._fireFn(t, [o[o.length - 1].value, {}, e]),
                            this;
                        for (var u = 0; u < o.length; u++)
                            this._fireFn(t, [o[u].value, {}, e])
                    } else
                        a._ee_api_count && this._initAPI(a)
                } else if (i.length) {
                    if (r)
                        return this._fireFn(t, i[i.length - 1].concat([e])),
                        this;
                    for (var l = 0; l < i.length; l++)
                        this._fireFn(t, i[l].concat([e]))
                }
                return this._subscriber[e] = this._subscriber[e] || [],
                this._subscriber[e].push({
                    fn: t,
                    capture: n,
                    once: r
                }),
                this
            }
        }, {
            key: "_initAPI",
            value: function(e) {
                var t = this
                  , n = function(n) {
                    e.list.hasOwnProperty(n) && !e.list[n]._ee_._inited && (e.list[n]._ee_._parmChangeHandler = function(r, i) {
                        t._fetchAPI(n, e.list[n], i)
                    }
                    ,
                    S.sub("".concat(n, ".paramChanged"), e.list[n]._ee_._parmChangeHandler),
                    e.list[n]._ee_._inited = !0,
                    S.pub("".concat(n, ".paramChanged"), e.list[n].params, !1))
                };
                for (var r in e.list)
                    n(r)
            }
        }, {
            key: "_unsubAPI",
            value: function(e) {
                var t = this._getSubscriber(e);
                if (!Object.keys(t).length) {
                    var n = this._getAPIsByEventN(e);
                    for (var r in delete n._ee_api_count,
                    n.list)
                        n.list.hasOwnProperty(r) && n.list[r]._ee_._inited && (S.unsub("".concat(r, ".paramChanged"), n.list[r]._ee_._parmChangeHandler),
                        "s" === n.list[r].type && n.list[r].unsub(),
                        delete n.list[r]._ee_._parmChangeHandler,
                        delete n.list[r]._ee_._inited)
                }
            }
        }, {
            key: "_getAPICache",
            value: function(e) {
                var t, n = "";
                if (e.constructor === b && (t = e._ee_.paramsHash,
                this._APICache.hasOwnProperty(e._ee_.apiName) && this._APICache[e._ee_.apiName].hasOwnProperty(t))) {
                    var r = this._APICache[e._ee_.apiName][t];
                    if ((new Date).valueOf() - r.time < e.maxAge) {
                        if ("string" == typeof (n = JSON.parse(JSON.stringify(r))).value)
                            try {
                                n.value = JSON.parse(n.value)
                            } catch (e) {}
                    } else
                        delete this._APICache[e._ee_.apiName][t]
                }
                return n
            }
        }, {
            key: "_fillCache",
            value: function(e, t) {
                "object" === i()(t) && (t = JSON.stringify(t)),
                this._APICache[e._ee_.apiName] = this._APICache[e._ee_.apiName] || {},
                this._APICache[e._ee_.apiName][e._ee_.paramsHash] = {
                    value: t,
                    time: (new Date).valueOf()
                }
            }
        }, {
            key: "_fetchAPI",
            value: function(e, t) {
                var n = this
                  , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if ("x" === t.type && "function" == typeof t.fetch) {
                    if (!r) {
                        var i = this._getAPICache(t);
                        if (i)
                            return void S.publish(e, i.value, {})
                    }
                    t.fetch({
                        needsAuth: t.needsAuth,
                        params: t.params
                    }).then(function(r) {
                        n._fillCache(t, r),
                        S.publish(e, r, {})
                    })
                }
                "s" === t.type && (t.unsub(),
                t.sub({
                    params: t.params
                }).then(function(t) {
                    S.publish(e, t, {})
                }))
            }
        }, {
            key: "subscribe",
            value: function(e, t) {
                var n = this
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._defaultCapture
                  , i = arguments.length > 3 ? arguments[3] : void 0
                  , a = [e];
                e instanceof RegExp ? this._wildcardSubscriber.push(e) : a = e.split(/[\s,]+/),
                a.forEach(function(e) {
                    e && n._addEventListener(e, t, r, i)
                })
            }
        }, {
            key: "subscribeOnce",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._defaultCapture;
                return this.subscribe(e, t, n, !0)
            }
        }, {
            key: "unsubscribe",
            value: function(e, t) {
                if ("function" != typeof t)
                    throw new EvalError('the second argument of "EventEngine.unsubscribe" must be a function.');
                if (this._subscriber[e]) {
                    for (var n = [], r = 0; r < this._subscriber[e].length; r++)
                        this._subscriber[e][r].fn !== t && n.push(this._subscriber[e][r]);
                    return n.length ? this._subscriber[e] = n : (delete this._subscriber[e],
                    this._unsubAPI(e)),
                    this
                }
            }
        }]),
        e
    }();
    !function(e) {
        S = e.eventEngine || e.ee || new A
    }({}),
    t.a = S
}
, , , , function(e, t, n) {
    "use strict";
    n(18);
    var r = {
        name: "A",
        props: {
            extra: {
                type: String,
                default: ""
            },
            needBackurl: {
                type: String,
                default: "0"
            },
            type: {
                type: String,
                default: function() {
                    return ""
                }
            },
            url: {
                type: String,
                default: function() {
                    return "javascript:void(0);"
                }
            },
            target: {
                type: String,
                default: function() {
                    return "_self"
                }
            }
        },
        computed: {
            rel: function() {
                return (this.realUrl || "").indexOf("http") > -1 ? "noopener noreferrer" : ""
            },
            realUrl: function() {
                var e = this.$route.fullPath;
                switch (this.extra) {
                case "backurl":
                    var t = encodeURIComponent(e);
                    return "".concat(this.url, "?backUrl=").concat(t);
                case "lang":
                    var n = this.$store.state.exchange.exchangeType;
                    return e = e.replace(/\/\w{2}-\w{2}/, ""),
                    "margin" === n && e.indexOf("/exchange/") > -1 && (e = e.replace("/exchange/", "/margin/")),
                    "".concat(this.url).concat(e);
                default:
                    return this.url
                }
            }
        }
    }
      , i = n(5)
      , a = Object(i.a)(r, function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return "nuxt-link" === this.type ? t("nuxt-link", {
            attrs: {
                to: this.realUrl
            }
        }, [this._t("default")], 2) : t("a", {
            attrs: {
                rel: this.rel,
                target: this.target,
                href: this.realUrl
            }
        }, [this._t("default")], 2)
    }, [], !1, null, "44356eb2", null);
    t.a = a.exports
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    }),
    n.d(t, "b", function() {
        return i
    });
    var r = [{
        symbol: "",
        name: "无",
        abbr: "none"
    }, {
        symbol: "$",
        name: "美元",
        abbr: "usd"
    }, {
        symbol: "¥",
        name: "人民币",
        abbr: "cny",
        lang: "zh-cn"
    }, {
        symbol: "₩",
        name: "韩元",
        abbr: "krw",
        lang: "ko-kr",
        fix: 0
    }, {
        symbol: "£",
        name: "英镑",
        abbr: "gbp"
    }, {
        symbol: "€",
        name: "欧元",
        abbr: "eur"
    }, {
        symbol: "₽",
        name: "卢布",
        abbr: "rub",
        lang: "ru-ru",
        fix: 1
    }];
    function i(e, t) {
        if (isNaN(1 * e))
            return e;
        t = t || navigator.language || "en-us";
        try {
            var n = new Intl.NumberFormat(t).format;
            if (n)
                return n(e)
        } catch (t) {
            return e
        }
        return e
    }
}
, , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return O
    }),
    n.d(t, "b", function() {
        return E
    });
    var r = n(10)
      , i = n.n(r)
      , a = n(4)
      , o = n.n(a)
      , s = (n(30),
    n(31),
    n(44),
    n(15),
    n(18),
    n(122),
    n(9),
    n(1))
      , c = n.n(s)
      , u = n(37)
      , l = n.n(u)
      , d = n(39)
      , h = n.n(d)
      , f = (n(305),
    n(42),
    n(19),
    n(69),
    n(196))
      , p = n.n(f)
      , m = n(16)
      , g = console.info
      , v = "undefined" == typeof window
      , _ = [void 0, "req", "sub", void 0, "unsub"]
      , b = {
        req: "rep",
        sub: "ch",
        unsub: "unsubbed"
    }
      , y = null;
    function w(e) {
        return parseInt([~~!!e.unsub, ~~!!e.sub, ~~!!e.req].join(""), 2)
    }
    function x(e) {
        return "".concat(_[w(e)], ".").concat(e.req || e.sub || e.unsub)
    }
    var k = !1;
    function T(e) {
        var t = new FileReader;
        return new Promise(function(n) {
            if (k)
                t.addEventListener("loadend", function() {
                    for (var e = "", r = new Uint8Array(t.result), i = r.byteLength, a = 0; a < i; a++)
                        e += String.fromCharCode(r[a]);
                    return n(e)
                }),
                t.readAsArrayBuffer(e);
            else {
                t.addEventListener("loadend", function() {
                    return n(t.result)
                });
                try {
                    t.readAsBinaryString(e)
                } catch (e) {
                    k = !0
                }
            }
        }
        )
    }
    var O, C, E, S = function() {
        function e(t, n) {
            l()(this, e),
            this._msgList = {},
            this._callback = {},
            this.__msg = {},
            this.__cb = {},
            this._isOpen = 0,
            this._msgCallback = this._msgCallback.bind(this),
            this.debug = n,
            this.host = t,
            this.t = -1,
            this.ws = null,
            this._reconnect(t)
        }
        return h()(e, [{
            key: "_open",
            value: function() {
                this._isOpen = 1,
                this._msgOut(),
                console.log("socket open"),
                m.a.pub("socket.connect", this.ws)
            }
        }, {
            key: "_reconnect",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host;
                this.ws = new WebSocket(e),
                this.t = this.t + 1,
                console.log("socket reconnect"),
                this._regEvent(this.ws)
            }
        }, {
            key: "_error",
            value: function(e) {
                return console.log("socket error", e),
                console.error("error: ", e)
            }
        }, {
            key: "_delMsg",
            value: function(e, t, n) {
                if (1 === e)
                    return delete this._msgList[t];
                4 === e && (delete this._msgList[t],
                delete this._msgList["sub.".concat(n)])
            }
        }, {
            key: "_regEvent",
            value: function() {
                var e = this;
                this.ws.onerror = function(t) {
                    return e._error(t)
                }
                ,
                this.ws.onmessage = function(t) {
                    return e._decodeMessage(t)
                }
                ,
                this.ws.onopen = function() {
                    return e._open()
                }
                ,
                this.ws.onclose = function() {
                    console.log("regEvent ", e.t),
                    window.navigator.onLine && window.gio && window.gio("track", "DEV_FED_EXCHANGE_EN_WS_CLOSE", {
                        DEV_FED_TIMESTAMP: +new Date,
                        URL: location.href
                    }),
                    setTimeout(function() {
                        return e._reconnect()
                    }, 2 * e.t * 1e3),
                    10 === e.t && (e.t = 0)
                }
            }
        }, {
            key: "_heartbeat",
            value: function(e) {
                var t = this;
                clearTimeout(y),
                y = setTimeout(function() {
                    console.log("websocket timeout"),
                    t.ws.close()
                }, 1e4),
                this._isOpen && this.ws.send(JSON.stringify({
                    pong: e
                }))
            }
        }, {
            key: "_msgOut",
            value: function() {
                for (var e in this._msgList)
                    this._msgList[e] && this.ws.send(this._msgList[e])
            }
        }, {
            key: "_msgDriver",
            value: function(e, t) {
                var n = _[w(e)]
                  , r = e[n];
                this._callback[b[n]] = this._callback[b[n]] || {},
                this._callback[b[n]][r] = t
            }
        }, {
            key: "_msgCallback",
            value: function(e, t) {
                var n = parseInt([~~!!e.unsubbed, ~~!!e.subbed || ~~!!e.ch, ~~!!e.rep].join(""), 2)
                  , r = "".concat(_[n], ".").concat(e.rep || e.subbed || e.ch || e.unsubbed);
                if (this.__cb[r])
                    for (var i = this.__cb[r].length; i--; )
                        this.__cb[r][i](e);
                1 === n && delete this.__cb[r],
                e.subbed && (this.__msg[r] = 1,
                "function" == typeof t && t(1))
            }
        }, {
            key: "_msg",
            value: function(e, t) {
                var n = x(e);
                this._msgList[n] = JSON.stringify(e),
                this._isOpen && this._msgList[n] && this.ws.send(this._msgList[n]),
                t && this._msgDriver(e, t)
            }
        }, {
            key: "_decodeMessage",
            value: function() {
                var e = c()(regeneratorRuntime.mark(function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                this._isOpen || (this._isOpen = 1),
                                e.next = 4;
                                break;
                            case 4:
                                return e.next = 6,
                                T(t.data);
                            case 6:
                                n = e.sent,
                                r = p.a.inflate(n, {
                                    to: "string"
                                }),
                                this._dispatchMessage(JSON.parse(r));
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "_dispatchMessage",
            value: function(e) {
                var t = e.rep ? "rep" : e.unsubbed ? "unsubbed" : "ch"
                  , n = e.rep || e.unsubbed || e.subbed || e.ch || e.ping
                  , r = this._callback[t] ? this._callback[t][n] : null;
                if (localStorage.debug && g("message: ", e),
                "function" == typeof this.ws.onmsg && this.ws.onmsg(e),
                "error" !== e.status)
                    return e.ping ? this._heartbeat(e.ping) : r ? ("unsubbed" === t ? (this.__cb["sub.".concat(n)] || (delete this._callback.ch[n],
                    delete this.__msg["sub.".concat(n)]),
                    delete this._callback[t][n],
                    this._delMsg(4, "unsub.".concat(n), n)) : "rep" === t && (delete this._callback[t][n],
                    delete this.__msg["req.".concat(n)],
                    this._delMsg(1, "req.".concat(n), n)),
                    r(e, t, n)) : void 0
            }
        }, {
            key: "plugin",
            value: function(e, t) {
                var n = +new Date + ~~(1e5 * Math.random())
                  , r = x(e);
                this.__cb[r] || (this.__cb[r] = [],
                this.__msg[r] = 0),
                this.__cb[r].push(t),
                t.alias = "fn_".concat(n.toString(n % 16 + 20)),
                t.msg = r,
                t.bodywords = t.toString().replace(/[^\d\w]/g, ""),
                !this.__msg[r] && this._msg(e, this._msgCallback)
            }
        }, {
            key: "unplug",
            value: function(e, t, n) {
                var r = this
                  , i = w(e)
                  , a = x(e)
                  , o = a.replace(/^unsub/, "sub")
                  , s = {
                    unsub: a.replace(/^sub/, "unsub").replace("unsub.", "")
                }
                  , c = this.__cb[o];
                if ("req" !== _[i] && c) {
                    for (var u = c.length; u--; ) {
                        if (t.alias && c[u].alias === t.alias) {
                            c.splice(u, 1),
                            n && n(0);
                            break
                        }
                        if (!t.alias && c[u].bodywords === t.toString().replace(/[^\d\w]/g, "")) {
                            t.name || console.warn("Anonymous function remove error", t),
                            c.splice(u, 1),
                            n && n(0);
                            break
                        }
                    }
                    c.length || (delete this.__cb[a],
                    this._msg(s, function(e) {
                        return r._msgCallback(e, n)
                    }))
                }
            }
        }]),
        e
    }(), A = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return l()(this, e),
            this._router = {},
            this.debug = n,
            console.log("wsc version 2.0.0"),
            T(new Blob([new ArrayBuffer(1)],{
                type: ""
            })),
            t && this.handsup(t)
        }
        return h()(e, [{
            key: "handsup",
            value: function(e) {
                if (e)
                    return this._router[e] ? this._router[e] : this._router[e] = new S(e,this.debug)
            }
        }]),
        e
    }(), L = function() {
        function e() {
            var t = this
              , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l()(this, e);
            var r = n.symbol
              , i = void 0 === r ? "btcusdt" : r
              , a = n.period
              , o = void 0 === a ? "1min" : a
              , s = n.step
              , c = void 0 === s ? "step0" : s
              , u = n.id
              , d = void 0 === u ? 0 : u;
            return this._channel = {
                overview: function() {
                    return "market.overview"
                },
                symbols: function() {
                    return "market.symbols"
                },
                tickers: function() {
                    return "market.tickers"
                },
                kline: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return "market.".concat(e.symbol || i, ".kline.").concat(e.period || o)
                },
                trade: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return "market.".concat(e.symbol || i, ".trade.detail")
                },
                depth: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return "market.".concat(e.symbol || i, ".depth.").concat(e.step || c)
                },
                ticker: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return "market.".concat(e.symbol || i, ".detail")
                },
                tickerById: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return "market.".concat(e.id || d, ".exdetail.").concat(e.symbol || i)
                }
            },
            this._apis = Object.keys(this._channel),
            function() {
                return t
            }
        }
        return h()(e, [{
            key: "_factory",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this._apis.reduce(function(r, a) {
                    return r[a] = function() {
                        return o()(i()({}, e, t._channel[a](n)), n)
                    }
                    ,
                    r
                }, {})
            }
        }, {
            key: "req",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this._factory("req", e)
            }
        }, {
            key: "sub",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this._factory("sub", e)
            }
        }, {
            key: "unsub",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this._factory("unsub", e)
            }
        }]),
        e
    }();
    C = {},
    !v && (O = C.operator || new A),
    function(e) {
        E = e.socketAPI || new L
    }({})
}
, , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(30),
    n(31),
    n(19),
    n(44),
    n(41);
    var r, i, a = n(10), o = n.n(a), s = (n(18),
    n(95),
    n(24)), c = n.n(s);
    var u = "mini-toastr"
      , l = "error"
      , d = "warn"
      , h = "success"
      , f = "info"
      , p = u
      , m = "".concat(u, "__notification")
      , g = "".concat(u, "-notification__title")
      , v = "".concat(u, "-notification__icon")
      , _ = "".concat(u, "-notification__message")
      , b = "".concat(u, "-in")
      , y = "".concat(u, "-out")
      , w = "-".concat(l)
      , x = "-".concat(d)
      , k = "-".concat(h)
      , T = "-".concat(f)
      , O = "";
    function C(e) {
        var t = function e(t, n, r) {
            for (var i in n = n || {},
            r = r || O,
            t)
                if (t.hasOwnProperty(i)) {
                    var a = t[i];
                    a && "object" === c()(a) && !(a instanceof Date || a instanceof RegExp) ? e(a, n, r + i + " ") : n[r] && "object" === c()(n[r]) ? n[r][i] = a : (n[r] = {},
                    n[r][i] = a)
                }
            return n
        }(e)
          , n = JSON.stringify(t, null, 2);
        return n = (n = n.replace(/"([^"]*)": {/g, "$1 {").replace(/"([^"]*)"/g, "$1").replace(/(\w*-?\w*): ([\w\d .#]*),?/g, "$1: $2;").replace(/},/g, "}\n").replace(/ &([.:])/g, "$1")).substr(1, n.lastIndexOf("}") - 1)
    }
    var E = {
        types: {
            ERROR: l,
            WARN: d,
            SUCCESS: h,
            INFO: f
        },
        animation: function e(t, n) {
            var r = this;
            t.classList.remove(b),
            t.classList.add(y),
            t.style.opacity && t.style.opacity > .05 ? t.style.opacity = t.style.opacity - .05 : t.style.opacity && t.style.opacity <= .1 ? t.parentNode && (t.parentNode.removeChild(t),
            n && n()) : t.style.opacity = .9,
            setTimeout(function() {
                return e.apply(r, [t, n])
            }, 1e3 / 30)
        },
        timeout: 8e3,
        icons: {},
        appendTarget: document.body,
        node: S(),
        allowHtml: !1,
        style: (i = {},
        o()(i, ".".concat(p), {
            position: "fixed",
            "z-index": 2000000001,
            right: "12px",
            top: "12px"
        }),
        o()(i, ".".concat(m), (r = {
            cursor: "pointer",
            padding: "12px 18px",
            margin: "0 0 6px 0",
            "background-color": "#000",
            opacity: .8,
            color: "#fff",
            "border-radius": "3px",
            "box-shadow": "#3c3b3b 0 0 12px",
            width: "300px"
        },
        o()(r, "&.".concat(w), {
            "background-color": "#D5122B"
        }),
        o()(r, "&.".concat(x), {
            "background-color": "#F5AA1E"
        }),
        o()(r, "&.".concat(k), {
            "background-color": "#7AC13E"
        }),
        o()(r, "&.".concat(T), {
            "background-color": "#4196E1"
        }),
        o()(r, "&:hover", {
            opacity: 1,
            "box-shadow": "#000 0 0 12px"
        }),
        r)),
        o()(i, ".".concat(g), {
            "font-weight": "500"
        }),
        o()(i, ".".concat(_), {
            display: "inline-block",
            "vertical-align": "middle",
            width: "240px",
            padding: "0 12px"
        }),
        i)
    };
    function S() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div";
        return document.createElement(e)
    }
    function A(e, t, n, r) {
        var i = S();
        i.className = n,
        r.allowHtml ? i.innerHTML = t : i.appendChild(document.createTextNode(t)),
        e.appendChild(i)
    }
    var L = {}
      , N = {
        config: E,
        isInitialised: !1,
        showMessage: function(e, t, n, r, i, a) {
            var o = {}
              , s = "".concat(e).concat(t).concat(n);
            L[s] = L[s] || {},
            L[s].id && clearTimeout(L[s].id),
            Object.assign(o, this.config),
            Object.assign(o, a);
            var c = L[s].node;
            return c || ((c = L[s].node = S()).className = "".concat(m, " ").concat(b, " ").concat(function(e) {
                return e === h ? k : e === d ? x : e === l ? w : e === f ? T : O
            }(n)),
            c.onclick = function() {
                o.animation(c, null),
                L[s].node = null
            }
            ,
            t && A(c, t, g, o),
            o.icons[n] && function(e, t, n) {
                var r = S(n.icons[t].nodeType)
                  , i = n.icons[t].attrs;
                for (var a in i)
                    i.hasOwnProperty(a) && r.setAttribute(a, i[a]);
                e.appendChild(r)
            }(c, n, o),
            e && A(c, e, _, o),
            o.node.insertBefore(c, o.node.firstChild)),
            L[s].id = setTimeout(function() {
                o.animation(c, i),
                L[s].node = null
            }, r || o.timeout),
            i && i(),
            this
        },
        init: function(e) {
            var t = this
              , n = {};
            Object.assign(n, E),
            Object.assign(n, e),
            this.config = n;
            var r, i, a, o = C(n.style);
            return r = o,
            i = document.head || document.getElementsByTagName("head")[0],
            (a = S("style")).id = "".concat(u, "-styles"),
            a.type = "text/css",
            a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r)),
            i.appendChild(a),
            n.node.id = p,
            n.node.className = p,
            n.appendTarget.appendChild(n.node),
            Object.keys(n.types).forEach(function(e) {
                t[n.types[e]] = function(t, r, i, a, o) {
                    return this.showMessage(t, r, n.types[e], i, a, o),
                    this
                }
                .bind(t)
            }),
            this.isInitialised = !0,
            this
        },
        setIcon: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "i"
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            n.class = n.class ? n.class + " " + v : v,
            this.config.icons[e] = {
                nodeType: t,
                attrs: n
            }
        }
    };
    N.setIcon("error", "i", {
        class: "hb_icon_toast_failed color-down"
    }),
    N.setIcon("success", "i", {
        class: "hb_icon_toast_success color-up"
    });
    var I = N.init({
        timeout: 3e3,
        style: {}
    });
    t.default = I
}
, , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(37)
      , i = n.n(r)
      , a = n(39)
      , o = n.n(a)
      , s = function() {
        function e() {
            var t, n, r = this;
            i()(this, e),
            this._changeQueue = [],
            void 0 !== document.hidden ? (t = "hidden",
            n = "visibilitychange") : void 0 !== document.mozHidden ? (t = "mozHidden",
            n = "mozvisibilitychange") : void 0 !== document.msHidden ? (t = "msHidden",
            n = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden",
            n = "webkitvisibilitychange"),
            document.addEventListener(n, function() {
                r._changeQueue.forEach(function(e) {
                    e && e(!document[t])
                })
            })
        }
        return o()(e, [{
            key: "change",
            value: function(e) {
                e && this._changeQueue.push(e)
            }
        }]),
        e
    }();
    t.a = new s
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return s
        });
        n(18),
        n(60);
        var r = !e.env.BUILD_ENV && !0
          , i = !e.env.BUILD_ENV && "prd" === localStorage.ws
          , a = !!location.hostname.match(/(dev|test|i18n|localhost)-?/)
          , o = "";
        try {
            o = "".concat(location.origin.replace("http", "ws"), "/-/s")
        } catch (e) {
            o = "".concat("http://pro-web.test-17.huobiapps.com".replace("http", "ws"), "/-/s")
        }
        var s = {
            ws: r && !a || i ? "wss://api.huobi.br.com/ws" : "".concat(o, "/pro/ws"),
            hbws: "".concat(o, "/hb/ws")
        }
    }
    ).call(this, n(61))
}
, , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    t.a = [{
        key: "en-us",
        value: "English",
        zk: "en-us",
        note: "ENHANCED"
    }, {
        key: "zh-cn",
        value: "简体中文",
        zk: "zh-cn"
    }, {
        key: "zh-hk",
        value: "繁體中文",
        zk: "zh-tw"
    }, {
        key: "ko-kr",
        value: "한국어",
        zk: "ko"
    }, {
        key: "ru-ru",
        value: "Русский",
        zk: "ru"
    }, {
        key: "de-de",
        value: "Deutsch",
        zk: "de"
    }, {
        key: "fr-fr",
        value: "Français",
        zk: "fr"
    }, {
        key: "es-es",
        value: "Español",
        zk: "es"
    }, {
        key: "tr-tr",
        value: "Türkiye",
        zk: "tr"
    }, {
        key: "vi-vi",
        value: "Tiếng Việt",
        zk: "vi"
    }, {
        key: "pt-br",
        value: "Português-BR",
        zk: "pt"
    }, {
        key: "pt-pt",
        value: "Português-PT",
        zk: "pt"
    }, {
        key: "th-th",
        value: "ไทย",
        zk: "th"
    }]
}
, , , function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, , function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return d
    }),
    n.d(t, "b", function() {
        return f
    });
    n(29),
    n(33),
    n(9);
    var r = n(1)
      , i = n.n(r)
      , a = n(4)
      , o = n.n(a)
      , s = n(26)
      , c = n.n(s)
      , u = n(0)
      , l = n(6)
      , d = {
        uc: function(e) {
            return u.a.get("@uc/uc/open/token/get", {
                params: e,
                restOptions: {
                    reqInterceptorsIgnore: !0,
                    resInterceptorsIgnore: !0
                }
            })
        },
        pro: function(e) {
            return u.a.post("@pro/v1/users/login", o()({}, e, {
                restOptions: {
                    reqInterceptorsIgnore: !0,
                    resInterceptorsIgnore: !0
                }
            }))
        },
        main: function(e) {
            return u.a.post("@main/api/uc.php", o()({}, e, {
                restOptions: {
                    reqInterceptorsIgnore: !0,
                    resInterceptorsIgnore: !0
                }
            }))
        },
        getTicket: function() {
            return u.a.get("@uc/uc/open/ticket/get", {
                restOptions: {
                    resInterceptorsIgnore: !0
                }
            })
        }
    }
      , h = {
        ticketApi: d.getTicket,
        cookieHost: Object(l.i)(),
        afterGetTicket: function() {
            var e = i()(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t.success) {
                                e.next = 13;
                                break
                            }
                            if (![512, 403].includes(t.code)) {
                                e.next = 8;
                                break
                            }
                            Object(l.p)("HB-UC-TOKEN"),
                            Object(l.p)("HB-PRO-TOKEN"),
                            localStorage.removeItem("UC_IS_LOGIN"),
                            setTimeout(function() {
                                location.reload()
                            }, Math.floor(3 * Math.random() * 1e3)),
                            e.next = 13;
                            break;
                        case 8:
                            return e.next = 10,
                            Promise.resolve().then(n.bind(null, 71));
                        case 10:
                            r = e.sent,
                            r.default.error(t.message);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    };
    t.c = {
        "@uc": function() {
            return {
                "HB-UC-TOKEN": c.a.get("HB-UC-TOKEN")
            }
        },
        "@pro": function(e) {
            return Object(u.b)(o()({}, h, {
                cookieName: "HB-PRO-TOKEN",
                grantingApi: d.pro,
                force: e
            }))
        },
        "@main": function(e) {
            return Object(u.b)(o()({}, h, {
                cookieName: "HB-OLD-TOKEN",
                grantingApi: d.main,
                grantingApiOption: {
                    method: "login"
                },
                force: e
            }))
        },
        "@hbg": function(e) {
            return Object(u.b)(o()({}, h, {
                cookieName: "HB-PRO-TOKEN",
                grantingApi: d.pro,
                force: e
            }))
        }
    };
    var f = function() {
        return !!+localStorage.getItem("UC_IS_LOGIN")
    }
}
, , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = {
        make: {
            "/": {
                title: "最安全的比特币以太坊莱特币交易行情平台 | 火币全球站",
                description: "火币全球站是全球最安全的的比特币莱特币以太坊交易行情平台，提供比特币BTC（Bitcoin）实时价格行情，以太坊ETH，莱特币LTC，柚子EOS等上百种数字货币的交易及投资，包含了币币交易、法币交易、杠杆交易及合约交易等版块。",
                keywords: "火币全球站,比特币行情,比特币交易,莱特币,以太坊"
            },
            "/markets/": {
                title: "行情中心 | 比特币以太坊莱特币虚拟货币行情 | 火币全球站",
                description: "行情中心全面了解比特币以太坊莱特币虚拟货币信息，火币全球站提供比特币BTC实时价格、以太坊ETH、莱特币LTC等上百种数字货币交易对的最新价格、涨幅、最高价格、最低价格、24小时交易量及24小时成交额，并且可以快速跳转至交易页面及币种基本信息和最新资讯。",
                keywords: "比特币行情,以太坊,莱特币,虚拟货币行情,火币全球站"
            },
            "/markets/hb_index/": {
                title: "HB10 火币主力指数 | 火币全球站",
                description: "火币主力指数是由火币全球站上线币种中市值高、规模大、流通性好的10个币种组成，以综合反映火币全球站市场的整体表现，包含最新HB10、涨幅、最高值、最低值及HB10概况介绍。",
                keywords: "HB10,火币主力指数,火币全球站"
            },
            "/markets/hb_dm/": {
                title: "比特币_莱特币_以太坊_EOS衍生品行情 | 火币全球站",
                description: "火币合约行情是火币集团的数字货币衍生产品行情也。用户可以通过判断涨跌，获取数字货币价格上涨/下降的收益。目前支持比特币BTC、以太坊ETH、莱特币LTC、柚子EOS等品种。每个品种有当周、次周、季度三个周期的合约。支持1倍，5倍，10倍，以及20倍杠杆。提供7×24小时交易服务。",
                keywords: "数字货币交易,数字货币行情,火币全球站,火币"
            },
            "/exchange/": {
                title: "{upper{symbol}} [zh-cn[{coinName{sBase}} {coinName{sQuote}}]] 币币交易 | 火币全球站",
                description: "{upper{symbol}} {coinName{sBase}}/{coinName{sQuote}} 币币交易,安全快速交易，火币全球站(PRO)提供上百种数字货币的实时价格，以及K线、深度图、实时成交数据、详细资料，并有便捷的限价和市价挂单交易。",
                keywords: "{upper{symbol}},{coinName{sBase}},{coinName{sQuote}},币币交易,火币全球站",
                seo_base_currency_summary: "{coinName{sBase}},{coinSummary{sBase}}",
                seo_quote_currency_summary: "{coinName{sQuote}},{coinSummary{sQuote}}"
            },
            "/margin/": {
                title: "{upper{symbol}} [zh-cn[{coinName{sBase}} {coinName{sQuote}}]] 杠杆交易 | 火币全球站",
                description: "{upper{symbol}},{coinName{sBase}}/{coinName{sQuote}} 杠杆交易,火币全球站(PRO)提供上百种数字货币的实时价格，以及K线、深度图、实时成交数据、详细资料，并有便捷的限价和市价挂单交易。",
                keywords: "{upper{symbol}},{coinName{sBase}},{coinName{sQuote}},比特币交易平台,虚拟货币交易平台,杠杆交易,火币全球站",
                seo_base_currency_summary: "{coinName{sBase}},{coinSummary{sBase}}",
                seo_quote_currency_summary: "{coinName{sQuote}},{coinSummary{sQuote}}"
            }
        },
        coinName: {
            "zh-cn": {
                usdt: "泰达币",
                btc: "比特币",
                bch: "比特现金",
                eth: "以太坊",
                xrp: "瑞波币",
                ltc: "莱特币",
                ht: "火币积分",
                ada: "艾达币",
                eos: "柚子",
                xem: "新经币",
                xmr: "门罗币",
                dash: "达世币",
                neo: "小蚁",
                trx: "波场",
                lsk: "应用链",
                qtum: "量子链",
                etc: "以太经典",
                btg: "比特黄金",
                omg: "嫩模币",
                zec: "大零币",
                steem: "斯蒂姆币",
                bts: "比特股",
                waves: "波币",
                cmt: "草莓糖",
                btm: "比原链",
                bat: "注意力币",
                dgd: "黄金代币",
                zrx: "0x协议",
                rdn: "雷电网络",
                act: "A链",
                itc: "万物链",
                nas: "星云币",
                bcd: "比特币钻石",
                wicc: "维基币",
                topc: "拓扑链",
                swftc: "速币",
                dbc: "深脑链",
                aidoc: "天医",
                yee: "亿币",
                let: "林可爱",
                ela: "亦来云",
                bcx: "比特无限",
                sbtc: "超级比特币",
                edu: "教育链",
                abt: "区块基石",
                ont: "本体",
                wan: "万维链",
                wtc: "沃尔顿链",
                dgb: "极特币",
                gxc: "公信宝",
                xlm: "恒星币",
                xzc: "小零币",
                vet: "唯链",
                she: "闪链",
                iic: "智投币",
                gsc: "光速链",
                uc: "优币",
                uip: "未来版权",
                aac: "锐角币",
                cdc: "消费链",
                lxt: "闪付币",
                gtc: "G币",
                pc: "推广链",
                ae: "阿姨币",
                bkbt: "币快报币",
                gve: "世界村",
                seele: "元一代币",
                ekt: "多链技术",
                ycc: "原链",
                fair: "公平币",
                eop: "柚子空间",
                pnt: "梵塔网络",
                dac: "达芬奇",
                bcv: "币威",
                hpt: "火币矿池全球生态通证",
                ardr: "阿朵币",
                nano: "纳诺",
                gusd: "双子星美元",
                bsv: "比特币SV",
                sc: "云储币",
                kmd: "科莫多币"
            },
            "en-us": {
                usdt: "Tether",
                btc: "Bitcoin",
                bch: "Bitcoin Cash",
                eth: "Ethereum",
                xrp: "Ripple",
                ltc: "Litecoin",
                ht: "Huobi Token",
                ada: "Cardano",
                eos: "EOS",
                xem: "NEM",
                xmr: "Monero",
                dash: "Dash",
                neo: "NEO",
                trx: "TRON",
                icx: "ICON",
                lsk: "Lisk",
                qtum: "Qtum",
                etc: "Ethereum Classic",
                btg: "Bitcoin Gold",
                omg: "OmiseGo",
                hc: "HyperCash",
                zec: "Zcash",
                dcr: "Decred",
                steem: "Steem",
                bts: "BitShares",
                waves: "Waves",
                snt: "Status",
                salt: "SALT",
                gnt: "Golem",
                cmt: "CyberMiles",
                btm: "Bytom",
                pay: "TenX",
                knc: "Kyber Network",
                powr: "Power Ledger",
                bat: "Basic Attention Token",
                dgd: "DigixDAO",
                qash: "QASH",
                zrx: "0x",
                gas: "Gas",
                mana: "Decentraland",
                eng: "Enigma",
                cvc: "Civic",
                mco: "MCO Token",
                mtl: "Metal",
                rdn: "RDN",
                storj: "Storj",
                chat: "ChatCoin",
                srn: "Sirin Labs",
                link: "ChainLink",
                act: "Achain",
                tnb: "Time New Bank",
                qsp: "Quantstamp",
                req: "Request Network",
                phx: "Red Pulse Phoenix",
                appc: "AppCoins",
                rcn: "RCN",
                smt: "SmartMesh",
                adx: "AdEx",
                tnt: "Tierion",
                ost: "OST",
                itc: "IoT Chain",
                lun: "Lunyr",
                gnx: "Genaro Network",
                ast: "AirSwap",
                evx: "Everex",
                mds: "MediShares",
                snc: "SunContract",
                eko: "EchoLink",
                nas: "Nebulas",
                bcd: "BCD",
                wax: "WAX Token",
                wicc: "WaykiChain",
                topc: "TopChainCoin",
                swftc: "SwftCoin",
                dbc: "DeepBrain Chain",
                elf: "ælf",
                aidoc: "Aldoctor",
                qun: "QunQun",
                iost: "Internet of Services",
                yee: "Yee Token",
                dat: "Datum",
                theta: "Theta",
                let: "LinkEye",
                dta: "DATA",
                utk: "UTRUST",
                meet: "CoinMeet",
                zil: "Zilliqa",
                soc: "All Sports Coin",
                ruff: "RUFF Token",
                ocn: "Odyssey",
                ela: "Elastos",
                bcx: "BitcoinX",
                sbtc: "Super Bitcoin",
                bifi: "Bitcoin File",
                zla: "Zilla",
                stk: "STK Token",
                wpr: "WePower Network",
                mtn: "Medicalchain",
                mtx: "Matryx",
                edu: "EduChain",
                blz: "Bluzelle",
                abt: "ArcBlock",
                ont: "Ontology",
                ctxc: "Cortex",
                bft: "BnkToTheFuture",
                wan: "Wanchain",
                kan: "BitKan",
                lba: "Cred",
                poly: "Polymath Network",
                pai: "Project PAI",
                wtc: "Walton",
                box: "ContentBox",
                dgb: "DigiByte",
                gxc: "GXChain",
                bix: "BIX Token",
                xlm: "Stellar",
                xvg: "Verge",
                hit: "HitChain",
                ong: "SoMee.Social",
                xzc: "ZCoin",
                vet: "Vechain",
                ncash: "Nucleus Vision",
                grs: "Groestlcoin",
                egcc: "Engine",
                she: "ShineChain",
                mex: "MEX",
                iic: "IIC",
                gsc: "Global Social Chain",
                uc: "Youlive Coin",
                uip: "UnlimitedIP",
                cnn: "CNN",
                aac: "Acute Angle Cloud",
                uuu: "U Network",
                cdc: "CDC Foundation",
                lxt: "Litex Lab",
                but: "BitUP",
                "18c": "Block18",
                datx: "DATx",
                portal: "Portal",
                gtc: "Game.com",
                hot: "Holo",
                man: "MATRIX",
                get: "GUTS Tickets",
                pc: "Promotion Chain",
                ren: "Republic Protocol",
                eosdac: "eosDAC",
                ae: "Aeternity",
                bkbt: "Meta-graph Chain",
                gve: "Globalvillage Ecosystem",
                seele: "Seele Token",
                fti: "FANSTIME",
                ekt: "EKT",
                xmx: "XMAX",
                ycc: "Yuan Chain Coin",
                fair: "FairCoin",
                ssp: "Smartshare",
                eon: "EON",
                eop: "EOSpace",
                lym: "Lympo",
                zjlt: "ZJLT",
                meetone: "MEET.ONE",
                pnt: "Penta",
                idt: "InvestDigital",
                dac: "Davinci Coin",
                bcv: "BitCapitalVendor",
                sexc: "ShareX",
                tos: "TOS Token",
                musk: "MUSK Token",
                add: "EOSADD",
                mt: "MyToken",
                kcash: "Kcash",
                iq: "IQ Cash",
                ncc: "NCC",
                rccc: "RCCC",
                hpt: "Huobi Pool Token",
                rte: "Rate3",
                trio: "Tripio",
                ardr: "Ardor",
                nano: "Nano",
                usdc: "USD Coin",
                gusd: "Gemini Dollar",
                tusd: "TrueUSD",
                pax: "Paxos Standard",
                husd: "HUSD",
                zen: "Horizen",
                rbtc: "RSK",
                bsv: "Bitcoin SV",
                dock: "Dock",
                mxc: "MXC",
                xtz: "Tezos",
                nuls: "NULS",
                cova: "COVA",
                lamb: "Lambda",
                cvnt: "Content Value Network",
                btt: "BitTorrent",
                sc: "Siacoin",
                kmd: "Komodo",
                mgo: "MobileGo",
                abl: "Airbloc",
                loom: "Loom Network",
                nexo: "Nexo",
                etn: "Electroneum",
                npxs: "Pundi X",
                top: "TOP.ONE COIN"
            }
        },
        coinSummary: {
            "en-us": {},
            "zh-cn": {},
            "ko-kr": {}
        },
        custom: {
            "en-us": {},
            "zh-cn": {},
            "ko-kr": {}
        }
    }
}
, function(e, t, n) {
    "use strict";
    n(9);
    var r = n(1)
      , i = n.n(r)
      , a = (n(44),
    n(41),
    n(4))
      , o = n.n(a)
      , s = (n(69),
    n(29),
    n(33),
    n(8))
      , c = n.n(s)
      , u = (n(31),
    n(19),
    n(317),
    n(51),
    n(52),
    n(30),
    n(45))
      , l = n.n(u)
      , d = n(37)
      , h = n.n(d)
      , f = n(39)
      , p = n.n(f)
      , m = n(16)
      , g = n(3)
      , v = n(7)
      , _ = Object(m.b)({
        maxAge: 0,
        type: "x",
        fetch: function() {
            return v.f.accounts()
        }
    })
      , b = Object(m.b)({
        maxAge: 0,
        type: "x",
        defineParams: function() {
            return {
                r: +new Date
            }
        },
        fetch: function(e) {
            return v.f.balance(e)
        }
    })
      , y = Object(m.b)({
        maxAge: 0,
        type: "x",
        defineParams: function() {
            return {
                r: +new Date
            }
        },
        fetch: function(e) {
            return v.f.marginBalance(e)
        }
    });
    m.a.use({
        accounts: _,
        balance: b,
        marginBalance: y
    });
    var w, x, k = ["trade", "frozen", "loan", "lock", "interest"], T = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "spot"
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "btc";
            h()(this, e),
            this.accounts = {},
            this.account = t,
            this.balance = {},
            this.marginBalance = {},
            this.allInOne = n,
            this.overviewObj = {},
            this.estimate = {},
            this.ready = [],
            this.quoteList = [],
            this.stableCoin = null,
            this.stableCoins = [],
            this.stableCoinObj = null,
            this.timer = null,
            this.stop = null
        }
        return p()(e, [{
            key: "setQuoteList",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                this.quoteList = l()(e)
            }
        }, {
            key: "setEstimate",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.overviewObj
                  , t = !0
                  , n = !1
                  , r = void 0;
                try {
                    for (var i, a = this.quoteList[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                        var o = i.value;
                        this.estimate[o] = this.estimate[o] || {};
                        for (var s = 0, u = Object.entries(this.balance); s < u.length; s++) {
                            var l = c()(u[s], 2)
                              , d = l[0]
                              , h = l[1].all
                              , f = (e["".concat(d).concat(o)] || {}).close
                              , p = (e["".concat(o).concat(d)] || {}).close;
                            if (this.stableCoins.includes(d)) {
                                var m = this.stableCoinObj[d]["bid-rate"];
                                m = m || 1;
                                var v = (e["".concat(o).concat(this.stableCoin)] || {}).close;
                                if (v) {
                                    h = Object(g.e)(m, h),
                                    this.estimate[o][d] = Object(g.e)(Object(g.b)(1, v), h);
                                    continue
                                }
                            }
                            f ? this.estimate[o][d] = Object(g.e)(h, f) : p ? this.estimate[o][d] = Object(g.e)(Object(g.b)(1, p), h) : d !== o || (this.estimate[o][d] = h)
                        }
                    }
                } catch (e) {
                    n = !0,
                    r = e
                } finally {
                    try {
                        t || null == a.return || a.return()
                    } finally {
                        if (n)
                            throw r
                    }
                }
            }
        }, {
            key: "getEstimate",
            value: function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "usdt", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.allInOne, r = arguments.length > 2 ? arguments[2] : void 0;
                if (void 0 === r) {
                    if (!this.balance[t])
                        return 0;
                    if (this.balance[t] && !(1 * this.balance[t].all))
                        return 0;
                    if (this.estimate[n] && (e = this.estimate[n][t]))
                        return e
                }
                if (void 0 !== r) {
                    if (t === n)
                        return r;
                    var i = this.overviewObj["".concat(t).concat(n)];
                    if (i) {
                        var a = i.close;
                        return Object(g.e)(a, r)
                    }
                }
                var o = !0
                  , s = !1
                  , c = void 0;
                try {
                    for (var u, l = this.quoteList[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
                        var d = u.value;
                        if (void 0 !== r) {
                            var h = this.overviewObj["".concat(d).concat(n)] || {}
                              , f = h.close
                              , p = h.symbol
                              , m = this.overviewObj["".concat(n).concat(d)] || {}
                              , v = m.close
                              , _ = m.symbol;
                            if (!p && !_)
                                continue;
                            if (_ === "".concat(t).concat(n)) {
                                if (v)
                                    return Object(g.e)(Object(g.b)(1, v), r)
                            } else if (p === "".concat(t).concat(n)) {
                                if (f)
                                    return Object(g.e)(f, r)
                            } else if (_ === "".concat(n).concat(t) && v)
                                return Object(g.e)(Object(g.b)(1, v), r)
                        } else {
                            var b = this.estimate[d] && this.estimate[d][t];
                            if (1 * b) {
                                var y = (this.overviewObj["".concat(d).concat(n)] || {}).close
                                  , w = (this.overviewObj["".concat(n).concat(d)] || {}).close;
                                if (y)
                                    return Object(g.e)(y, b);
                                if (w)
                                    return Object(g.e)(Object(g.b)(1, w), b)
                            }
                        }
                    }
                } catch (e) {
                    s = !0,
                    c = e
                } finally {
                    try {
                        o || null == l.return || l.return()
                    } finally {
                        if (s)
                            throw c
                    }
                }
                return e
            }
        }, {
            key: "setBalance",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.account;
                this.account = t,
                t && ("spot" === t ? !this.ready.includes("spot") && m.a.sub("balance", function(n) {
                    n && n.success ? (e.balance = n.data.list.reduce(function(e, t) {
                        var n = t.currency
                          , r = t.type
                          , i = t.balance;
                        return e[n] || (e[n] = {
                            all: 0
                        }),
                        e[n][r] = i,
                        k.includes(r) && (e[n].all = Object(g.a)(e[n].all, i)),
                        e
                    }, {}),
                    window.STORE && (window.STORE.balance = e.balance,
                    window.STORE.huobiBalance = e),
                    e.ready.includes(t) || e.ready.push(t),
                    e.setEstimate(),
                    m.a.pub("balance.done")) : e.stopRefresh()
                }) : !this.ready.includes(this.account) && m.a.sub("marginBalance", function(n) {
                    n && n.success ? (e.marginBalance = n.data.reduce(function(e, t) {
                        var n = t.symbol
                          , r = t.list;
                        e[n] || (e[n] = o()({}, t));
                        var i = r.reduce(function(e, t) {
                            var n = t.currency
                              , r = t.type
                              , i = t.balance;
                            return e[n] || (e[n] = {
                                all: 0
                            },
                            e.currencys.push(n)),
                            e[n][r] = i,
                            k.includes(r) && (e[n].all = Object(g.a)(e[n].all, i)),
                            e
                        }, {
                            currencys: []
                        });
                        return Object.assign(e[n], i),
                        e
                    }, {}),
                    window.STORE && (window.STORE.marginBalance = e.marginBalance),
                    e.ready.includes(t) || e.ready.push(t),
                    e.setEstimate(),
                    m.a.pub("marginBalance.done")) : e.stopRefresh()
                }))
            }
        }, {
            key: "setAccounts",
            value: function() {
                var e = this;
                m.a.sub("accounts", function(t) {
                    if (t.success) {
                        var n = !0
                          , r = !1
                          , i = void 0;
                        try {
                            for (var a, o = t.data[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                                var s = a.value
                                  , c = s.id
                                  , u = s.type
                                  , l = s.subtype
                                  , d = s.state;
                                l ? (e.accounts[u] || (e.accounts[u] = {}),
                                e.accounts[u][l] = {
                                    id: c,
                                    state: d
                                }) : "working" === d && (e.accounts[u] = c)
                            }
                        } catch (e) {
                            r = !0,
                            i = e
                        } finally {
                            try {
                                n || null == o.return || o.return()
                            } finally {
                                if (r)
                                    throw i
                            }
                        }
                        m.a.pub("account.done")
                    }
                })
            }
        }, {
            key: "reload",
            value: function() {
                "spot" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.account) ? b.refresh() : y.refresh()
            }
        }, {
            key: "refresh",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15e3;
                this.stopTemp && (this.stop = 0,
                this.stopTemp = 0),
                this.timer = setTimeout(function() {
                    e.stop || ("spot" === e.account ? b.refresh() : y.refresh(),
                    e.refresh(t))
                }, t)
            }
        }, {
            key: "stopRefresh",
            value: function(e) {
                this.stop = 1,
                this.stopTemp = !!e,
                clearTimeout(this.timer)
            }
        }, {
            key: "get",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "usdt"
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "trade"
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                if (this.ready.length) {
                    if (this.ready.includes("spot") && !n)
                        return this.balance[e] ? this.balance[e][t] : 0;
                    if (this.ready.includes(n) && n && this.marginBalance[n])
                        return this.marginBalance[n][e][t] || 0;
                    n || console.error("need subaccount")
                }
                return 0
            }
        }, {
            key: "getAccount",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.account;
                return "spot" === e ? this.accounts[e] : this.accounts.margin && this.accounts.margin[e] ? this.accounts.margin[e].id : void 0
            }
        }, {
            key: "getMarginBalance",
            value: function(e) {
                if (this.marginBalance[e])
                    return this.marginBalance[e]
            }
        }, {
            key: "setTotal",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.allInOne;
                t !== this.allInOne && (this.allInOne = t),
                this.overviewObj = e,
                m.a.pub("estimate.done")
            }
        }, {
            key: "getTotal",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.allInOne
                  , n = Object.keys(this.balance).reduce(function(n, r) {
                    var i = e.getEstimate(r, t)
                      , a = c()(n, 2)
                      , o = a[0]
                      , s = a[1];
                    return i || !e.balance[r].all ? [o = Object(g.a)(o, i), s] : [o, 1]
                }, [0, 1])
                  , r = c()(n, 2)
                  , i = r[0];
                if (r[1])
                    return i
            }
        }, {
            key: "getMarginTotal",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.allInOne
                  , n = Object.keys(this.marginBalance).reduce(function(n, r) {
                    var i = e.marginBalance[r]
                      , a = i.currencys
                      , o = c()(a, 2)
                      , s = o[0]
                      , u = o[1]
                      , l = e.getEstimate(s, t, i[s].all)
                      , d = e.getEstimate(u, t, i[u].all)
                      , h = c()(n, 2)
                      , f = h[0]
                      , p = h[1];
                    return l || d ? (f = Object(g.a)(f, l || 0),
                    [f = Object(g.a)(f, d || 0), p]) : [f, 1]
                }, [0, 1])
                  , r = c()(n, 2)
                  , i = r[0];
                if (r[1])
                    return i
            }
        }, {
            key: "initStableExchangeRate",
            value: function() {
                var e = i()(regeneratorRuntime.mark(function e() {
                    var t, n = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!this.stableCoin) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return this.stableCoin = "husd",
                                e.next = 5,
                                v.f.stableExchangeRate();
                            case 5:
                                (t = e.sent).success && (this.stableCoin = t.data["trade-currency"].currency || "husd",
                                this.stableCoinObj = t.data["stable-currency"].reduce(function(e, t) {
                                    var r = t.currency;
                                    return e[r] = t,
                                    n.stableCoins.push(r),
                                    e
                                }, {}));
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "init",
            value: function() {
                var e = this;
                this.setAccounts(),
                this.setBalance(),
                this.initStableExchangeRate(),
                this.stop = 0,
                m.a.sub("isLogin", function(t) {
                    t && e.setBalance()
                })
            }
        }]),
        e
    }();
    w = (x = {}).huobiBalance || x.B || new T,
    t.a = w
}
, , function(e, t, n) {
    "use strict";
    n(44);
    var r = n(24)
      , i = n.n(r)
      , a = (n(15),
    n(51),
    n(52),
    n(30),
    n(31),
    n(19),
    n(84),
    n(295),
    n(95),
    n(4))
      , o = n.n(a)
      , s = (n(18),
    n(34),
    n(8))
      , c = n.n(s)
      , u = n(121)
      , l = n.n(u)
      , d = (n(145),
    n(116),
    n(195))
      , h = n.n(d)
      , f = n(148);
    function p(e, t) {
        p = function(e, t) {
            return new o(e,t)
        }
        ;
        var n = h()(RegExp)
          , r = RegExp.prototype
          , a = new WeakMap;
        function o(e, t) {
            var r = n.call(this, e);
            return a.set(r, t),
            r
        }
        function s(e, t) {
            var n = a.get(t);
            return Object.keys(n).reduce(function(t, r) {
                return t[r] = e[n[r]],
                t
            }, Object.create(null))
        }
        return l()(o, n),
        o.prototype.exec = function(e) {
            var t = r.exec.call(this, e);
            return t && (t.groups = s(t, this)),
            t
        }
        ,
        o.prototype[Symbol.replace] = function(e, t) {
            if ("string" == typeof t) {
                var n = a.get(this);
                return r[Symbol.replace].call(this, e, t.replace(/\$<([^>]+)>/g, function(e, t) {
                    return "$" + n[t]
                }))
            }
            if ("function" == typeof t) {
                var o = this;
                return r[Symbol.replace].call(this, e, function() {
                    var e = [];
                    return e.push.apply(e, arguments),
                    "object" !== i()(e[e.length - 1]) && e.push(s(e, o)),
                    t.apply(this, e)
                })
            }
            return r[Symbol.replace].call(this, e, t)
        }
        ,
        p.apply(this, arguments)
    }
    t.a = function(e) {
        var t = this || e
          , n = p(/(?:\/(\w+-\w+))(([a-zA-Z0-9\/]*)\/(?:((\w+)[_-](\w+))?)\S*)/g, {
            lang: 1,
            path: 2,
            shortPath: 3,
            symbol: 3,
            sBase: 4,
            sQuote: 4
        })
          , r = localStorage.getItem("HBP_SYMBOLS_HASH")
          , i = t.$route.params
          , a = i.symbol
          , s = i.LANG
          , u = (a || "").split("_")
          , l = c()(u, 2)
          , d = l[0]
          , h = l[1]
          , m = (n.exec(t.$route.path) || {}).groups || {}
          , g = m.path
          , v = m.shortPath;
        if (g) {
            g = "/" === g.substr(-1, 1) ? g : "".concat(g, "/"),
            v = "".concat(v, "/");
            var _, b = {
                symbol: a = (a || r || "").replace("_", "/"),
                sBase: d,
                sQuote: h,
                lang: s
            }, y = o()({}, f.make), w = o()({}, f.coinName);
            return (_ = y[g] || y[v]) ? {
                title: x(_.title),
                meta: [{
                    hid: "description",
                    name: "description",
                    content: x(_.description)
                }, {
                    hid: "keywords",
                    name: "keywords",
                    content: x(_.keywords)
                }]
            } : {}
        }
        function x(e) {
            return e ? e.replace(/{(.*?){(.*?)}}/g, function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                t[0];
                var r = t[1]
                  , i = t[2]
                  , a = "";
                if (!b || !i)
                    return a;
                switch (b[i] = b[i] || "",
                r) {
                case "upper":
                    a = b[i].toUpperCase();
                    break;
                case "lower":
                    a = b[i].toLowerCase();
                    break;
                default:
                    a = r && w[s] && b[i] ? w[s][b[i]] || "" : b[i] || ""
                }
                return a
            }).replace(/\[(.*?)\[(.*?)]]/, function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                t[0];
                var r = t[1]
                  , i = t[2];
                return r !== s ? "" : i
            }) : ""
        }
    }
}
, , function(e, t, n) {
    "use strict";
    n(123);
    var r = n(4)
      , i = n.n(r)
      , a = n(11)
      , o = n(6)
      , s = {
        name: "TimeLeft",
        data: function() {
            return {
                leftTime: {
                    d: "00",
                    h: "00",
                    i: "00",
                    s: "00"
                },
                timer: null,
                refreshTime: null,
                round: 0,
                roundState: 0,
                roundTradeType: "market",
                beginTime: null,
                now: null,
                tradeBeginTime: null,
                reloadPage: null
            }
        },
        props: {
            updateAll: {
                type: Boolean,
                default: function() {
                    return !1
                }
            }
        },
        computed: i()({}, Object(a.b)({
            isPrime: "exchange/isPrime"
        }), Object(a.c)({
            primeInfo: function(e) {
                return e.exchange.primeInfo
            },
            primeStatus: function(e) {
                return e.exchange.primeStatus
            },
            primeUserInfo: function(e) {
                return e.exchange.primeUserInfo
            },
            isLogin: function(e) {
                return e.user.isLogin
            },
            pageVisible: function(e) {
                return e.pageVisible
            }
        })),
        watch: {
            primeInfo: {
                handler: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (console.log(553, t.symbolCode, e.symbolCode),
                    t.symbolCode && t.symbolCode !== e.symbolCode)
                        return window.location.reload();
                    if (e.currency) {
                        var n = e.tradeBeginTime - e.currentTime;
                        console.log(554, e.tradeBeginTime, e.currentTime),
                        !this.reloadPage && this.updateAll && n > 0 && (console.log(555, e.tradeBeginTime, e.currentTime, n),
                        clearTimeout(this.reloadPage),
                        this.reloadPage = setTimeout(function() {
                            window.location.reload()
                        }, n > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : n)),
                        this.formatTimer(e),
                        this.refreshInfo()
                    }
                },
                immediate: !0
            },
            roundState: {
                handler: function(e) {
                    this.refreshInfo()
                }
            },
            pageVisible: function(e) {
                e && this.updateAll && this.$store.dispatch("exchange/getPrimeInfo", 1)
            }
        },
        methods: {
            refreshInfo: function() {
                var e = this;
                if (clearTimeout(this.refreshTime),
                0 === this.roundState && this.updateAll) {
                    var t = 1e3 * (10 + Math.floor(5 * Math.random()));
                    this.beginTime - this.now > 15e3 && (this.refreshTime = setTimeout(function() {
                        e.$store.dispatch("exchange/getPrimeInfo", 1)
                    }, this.beginTime - this.now - t))
                }
            },
            formatTimer: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.primeInfo.currentTime;
                clearTimeout(this.timer);
                var r = !1;
                this.now = n;
                var i = e.rounds.find(function(e) {
                    if (n < e.roundEndTime) {
                        if (!r)
                            return t.round = e.roundNum,
                            t.roundTradeType = e.roundTradeType,
                            t.roundState = n > 1535416000000 ? 1 : 0,
                            t.beginTime = 1535416000000,
                            e.now = n,
                            r = !0,
                            e
                    } else
                        t.round = e.roundNum,
                        t.roundTradeType = e.roundTradeType,
                        t.roundState = 2,
                        t.tradeBeginTime = t.primeInfo.tradeBeginTime
                });
                this.primeStatus.round === this.round && this.primeStatus.state === this.roundState || this.$store.commit("exchange/SET_PRIME_STATUS", {
                    round: this.round,
                    state: this.roundState,
                    roundTradeType: this.roundTradeType
                }),
                i && (this.setPrimeStaus(i),
                this.timer = setTimeout(function() {
                    t.formatTimer(e, n + 1e3)
                }, 1e3))
            },
            setPrimeStaus: function(e) {
                if (e) {
                    var t = 0 === this.roundState ? e.roundBeginTime : e.roundEndTime
                      , n = Object(o.j)(e.now, t, !0);
                    this.leftTime = i()({}, n)
                }
            }
        }
    }
      , c = (n(293),
    n(5))
      , u = Object(c.a)(s, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("section", {
            staticClass: "time-left"
        }, [n("dl", [n("dd", [n("span", [e._v(e._s(e.leftTime.d))])]), e._v(" "), n("dt", [e._v("天")]), e._v(" "), n("dd", [n("span", [e._v(e._s(e.leftTime.h))])]), e._v(" "), n("dt", [e._v("时")]), e._v(" "), n("dd", [n("span", [e._v(e._s(e.leftTime.i))])]), e._v(" "), n("dt", [e._v("分")]), e._v(" "), n("dd", [n("span", [e._v(e._s(e.leftTime.s))])]), e._v(" "), n("dt", [e._v("秒")])])])
    }, [], !1, null, "0ea3ef60", null);
    t.a = u.exports
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(45)
      , i = n.n(r)
      , a = (n(9),
    n(1))
      , o = n.n(a)
      , s = n(194)
      , c = n.n(s)
      , u = {
        name: "MarginGuide",
        data: function() {
            return {
                guideList: [{
                    title: "资金划转",
                    desc: "资金划转使你的杠杆账户拥有资产。"
                }, {
                    title: "申请借币",
                    desc: "通过放大本金，博取翻倍收益。"
                }, {
                    title: "杠杆交易",
                    desc: "高卖低买/低买高卖，获利差价。"
                }, {
                    title: "归还借币",
                    desc: "还币付息，轻松解决。"
                }],
                guideIndex: -1,
                lang: this.$store.state.locale,
                aniRuntime: 3e3,
                startTime: 0,
                jsonFile: [],
                loading: !0
            }
        },
        mounted: function() {
            var e = o()(regeneratorRuntime.mark(function e() {
                var t, r, i, a, o, s, c, u, l, d, h = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return localStorage.removeItem("marginGuide"),
                            this.$store.dispatch("gio/track", "PM_WEB_MARGIN_INTRO_POP_EXPOSE"),
                            e.next = 3,
                            n.e(76).then(n.t.bind(null, 747, 3));
                        case 3:
                            return t = e.sent,
                            r = t.default,
                            e.next = 7,
                            n.e(25).then(n.t.bind(null, 748, 3));
                        case 7:
                            return i = e.sent,
                            a = i.default,
                            e.next = 11,
                            n.e(26).then(n.t.bind(null, 749, 3));
                        case 11:
                            return o = e.sent,
                            s = o.default,
                            e.next = 15,
                            n.e(27).then(n.t.bind(null, 750, 3));
                        case 15:
                            c = e.sent,
                            u = c.default,
                            this.jsonFile = [r, a, s, u],
                            d = 0,
                            (l = ["/static/margin_guide_svg/guide1_5_bg.svg", "/static/margin_guide_svg/guide1_1.png", "/static/margin_guide_svg/guide1_2.svg", "/static/margin_guide_svg/guide1_3.svg", "/static/margin_guide_svg/guide1_4.svg", "/static/margin_guide_svg/guide1_5.svg", "/static/margin_guide_svg/guide1_5_bg.svg", "/static/margin_guide_svg/guide2_1.png", "/static/margin_guide_svg/guide2_2.svg", "/static/margin_guide_svg/guide2_3.svg", "/static/margin_guide_svg/guide2_4.svg", "/static/margin_guide_svg/guide2_5.svg", "/static/margin_guide_svg/guide2_bg.svg", "/static/margin_guide_svg/guide3_1.svg", "/static/margin_guide_svg/guide3_2.svg", "/static/margin_guide_svg/guide3_3.svg", "/static/margin_guide_svg/guide3_4.svg", "/static/margin_guide_svg/guide3_5.svg", "/static/margin_guide_svg/guide3_bg.svg", "/static/margin_guide_svg/guide4_1.svg", "/static/margin_guide_svg/guide4_2.svg", "/static/margin_guide_svg/guide4_3.svg", "/static/margin_guide_svg/guide4_bg.svg", "/static/margin_guide_svg/guide_bg_shadow.png", "/static/margin_guide_svg/margin_guide_title.png"]).forEach(function(e) {
                                var t = new Image;
                                t.src = e,
                                h.$refs.loadingLayer.appendChild(t),
                                t.onload = function() {
                                    ++d === l.length && (h.loading = !1,
                                    h.$refs.loadingLayer.remove(),
                                    h.playGuide(),
                                    h.autoRun())
                                }
                            }),
                            setTimeout(function() {}, 100);
                        case 22:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        methods: {
            playGuide: function(e) {
                void 0 !== e && this.timeoutId && clearTimeout(this.timeoutId),
                this.guideIndex !== e && (this.startTime = +new Date);
                var t = void 0 !== e ? e : this.guideIndex >= 0 && this.guideIndex < this.guideList.length - 1 ? this.guideIndex + 1 : 0;
                this.guideIndex = t,
                this.jsonFile[t] && ("function" == typeof this.jsonFile[t].goToAndPlay ? this.jsonFile[t].goToAndPlay(1, !0) : this.jsonFile[t] = c.a.loadAnimation({
                    container: this.$refs.animation[t],
                    renderer: "svg",
                    autoplay: !0,
                    animationData: this.jsonFile[t]
                }))
            },
            autoRun: function(e) {
                var t = this;
                this.timeoutId && clearTimeout(this.timeoutId),
                this.timeoutId = setTimeout(function() {
                    t.playGuide(),
                    t.autoRun()
                }, e || this.aniRuntime)
            },
            openLink: function() {
                window.open("https://huobiglobal.zendesk.com/hc/".concat("zh-cn" === this.$store.state.locale ? "zh-cn" : "en-us", "/articles/360000220701"))
            },
            closeGuide: function() {
                this.$emit("close")
            },
            mouseOn: function(e) {
                e === this.guideIndex && this.timeoutId && clearTimeout(this.timeoutId)
            },
            mouseOut: function(e) {
                if (e === this.guideIndex) {
                    var t = +new Date - this.startTime;
                    t >= this.aniRuntime ? this.autoRun(1) : this.autoRun(this.aniRuntime - t)
                }
            },
            requireAniFile: function() {
                var e = o()(regeneratorRuntime.mark(function e() {
                    var t, r, a, o, s, c;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                n.e(25).then(n.t.bind(null, 748, 3));
                            case 2:
                                return t = e.sent,
                                r = t.default,
                                e.next = 6,
                                n.e(26).then(n.t.bind(null, 749, 3));
                            case 6:
                                return a = e.sent,
                                o = a.default,
                                e.next = 10,
                                n.e(27).then(n.t.bind(null, 750, 3));
                            case 10:
                                s = e.sent,
                                c = s.default,
                                this.jsonFile = [].concat(i()(this.jsonFile), [r, o, c]);
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
        },
        beforeDestroy: function() {
            this.timeoutId && clearTimeout(this.timeoutId)
        }
    }
      , l = (n(286),
    n(5))
      , d = Object(l.a)(u, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("section", {
            staticClass: "margin-guide"
        }, [n("button", {
            staticClass: "layer-close",
            on: {
                click: e.closeGuide
            }
        }, [n("img", {
            attrs: {
                src: "/static/margin_guide_svg/layer_close.svg"
            }
        })]), e._v(" "), n("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.loading,
                expression: "loading"
            }],
            staticClass: "guide-loading"
        }), e._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !e.loading,
                expression: "!loading"
            }],
            staticClass: "guide-layer"
        }, [n("div", {
            class: "layer-bg layer-" + e.guideIndex
        }), e._v(" "), n("div", {
            class: "layer-inner guide-" + e.guideIndex
        }, [n("p", {
            class: "g-title " + (e.$store.state.locale.indexOf("zh-cn") > -1 ? "zh_" + e.guideIndex : "en_" + e.guideIndex)
        }, [e._v("title")]), e._v(" "), n("ul", {
            staticClass: "g-content"
        }, e._l(e.guideList, function(t, r) {
            return n("li", {
                key: r,
                class: e.guideIndex === r ? "active" : ""
            }, [n("em", [e._v(e._s(r + 1))]), e._v(" "), n("div", {
                staticClass: "content-inner",
                on: {
                    mouseenter: function(t) {
                        return e.mouseOn(r)
                    },
                    mouseleave: function(t) {
                        return e.mouseOut(r)
                    }
                }
            }, [n("span", {
                staticClass: "title",
                on: {
                    click: function(t) {
                        return e.playGuide(r)
                    }
                }
            }, [e._v(e._s(t.title))]), e._v(" "), n("br"), e._v(" "), n("span", {
                staticClass: "desc"
            }, [e._v(e._s(t.desc))])])])
        }), 0), e._v(" "), n("div", {
            staticClass: "g-foot"
        }, [n("button", {
            staticClass: "g-success",
            on: {
                click: e.closeGuide
            }
        }, [e._v("我知道了")]), e._v(" "), n("p", {
            staticClass: "foot-desc"
        }, [n("a", {
            on: {
                click: e.openLink
            }
        }, [e._v("想要了解更多 >")]), e._v(" 或在底部导航查看教学")])])]), e._v(" "), e._l(e.guideList, function(t, r) {
            return n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: r === e.guideIndex,
                    expression: "index === guideIndex"
                }],
                key: t.title,
                ref: "animation",
                refInFor: !0,
                staticClass: "layer-ani"
            })
        })], 2), e._v(" "), n("div", {
            ref: "loadingLayer",
            staticClass: "loading-layer"
        }, [e._v(" ")])])
    }, [], !1, null, "3e41b20a", null);
    t.a = d.exports
}
, , , function(e, t, n) {
    "use strict";
    (function(e) {
        n(41),
        n(60);
        var r = n(26)
          , i = n.n(r)
          , a = !e.env.BUILD_ENV && !0
          , o = !!location.hostname.match(/(dev|test|i18n|localhost)-?/);
        function s(e) {
            return "/-/x/".concat(e)
        }
        t.a = {
            "@uc": {
                url: a && !o ? "//www.huobi.br.com/-/x/uc/" : s("uc/"),
                headers: function() {
                    var e = i.a.get("HB-UC-TOKEN");
                    if (e)
                        return {
                            "HB-UC-TOKEN": e
                        }
                }
            },
            "@pro": {
                url: s("pro/"),
                headers: function() {
                    var e = {
                        "HB-API-VERSION": "1.4"
                    }
                      , t = (window.TOKENS || {}).HBProToken;
                    return t && Object.assign(e, {
                        "HB-PRO-TOKEN": t
                    }),
                    e
                }
            },
            "@main/": {
                url: s("hb/")
            },
            "@huobi/": {
                url: s("hb/"),
                headers: function() {
                    var e = i.a.get("HB-OLD-TOKEN");
                    if (e)
                        return {
                            "HB-OLD-TOKEN": e
                        }
                }
            },
            "@vote/": {
                url: s("hdx/")
            },
            "@hadaxv2/": {
                url: s("ssc/")
            },
            "@general/": {
                url: s("general/")
            },
            "@hbg/": {
                url: s("hbg/"),
                headers: function() {
                    var e = {}
                      , t = (window.TOKENS || {}).HBProToken;
                    return t && Object.assign(e, {
                        "HB-PRO-TOKEN": t
                    }),
                    e
                }
            },
            "@hbdm/": {
                url: s("dm/"),
                headers: function() {
                    return {
                        source: "web"
                    }
                }
            }
        }
    }
    ).call(this, n(61))
}
, , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n.p + "img/ccbbf63.svg"
}
, , , , function(e, t, n) {
    e.exports = n.p + "img/32b55b1.svg"
}
, , , , function(e, t, n) {
    e.exports = n(342)
}
, , , , , , , , , , , , , function(e, t) {
    function n(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND",
        t
    }
    n.keys = function() {
        return []
    }
    ,
    n.resolve = n,
    e.exports = n,
    n.id = 240
}
, , , , , , , function(e, t, n) {
    "use strict";
    var r = n(99);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(100);
    n.n(r).a
}
, function(e, t, n) {}
, function(e, t, n) {}
, , , , function(e, t, n) {
    e.exports = n.p + "img/2694b22.svg"
}
, function(e, t, n) {
    "use strict";
    var r = n(101);
    n.n(r).a
}
, , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(102);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(103);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(104);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(105);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(106);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(107);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(108);
    n.n(r).a
}
, function(e, t, n) {
    e.exports = n.p + "img/abad682.svg"
}
, function(e, t, n) {
    "use strict";
    var r = n(109);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(110);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(111);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(112);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(113);
    n.n(r).a
}
, , , function(e, t, n) {
    "use strict";
    var r = n(114);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(115);
    n.n(r).a
}
, , , , , , function(e, t, n) {
    "use strict";
    var r = n(117);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(118);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(119);
    n.n(r).a
}
, function(e, t, n) {
    var r = {
        "./base.js": 304,
        "./exchange.js": 310,
        "./gio.js": 311,
        "./home.js": 312,
        "./index.js": 315,
        "./orderBooks.js": 318,
        "./orders.js": 319,
        "./user.js": 343
    };
    function i(e) {
        var t = a(e);
        return n(t)
    }
    function a(e) {
        if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND",
            t
        }
        return r[e]
    }
    i.keys = function() {
        return Object.keys(r)
    }
    ,
    i.resolve = a,
    e.exports = i,
    i.id = 303
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var r, i = n(83), a = n(59);
    function o() {
        return r = r || a.a.handsup(i.a.ws)
    }
    var s = {
        subSymbols: function(e) {
            this.commit("SET_SYMBOLS", e)
        }
    }
      , c = {
        subSymbols: function(e, t) {
            var n = e.commit
              , r = Object(a.b)().req().symbols()
              , i = (t || {}).destroy;
            if (this.subSymbolsFn = this.subSymbolsFn || s.subSymbols.bind({
                commit: n
            }),
            i)
                return this.subSymbolsApi && o().unplug(this.subSymbolsApi, this.subSymbolsFn),
                this.subSymbolsFn = null,
                void (this.subSymbolsApi = null);
            this.subSymbolsApi = r,
            o().plugin(r, this.subSymbolsFn)
        }
    };
    t.default = {
        state: function() {
            return {
                symbols: {}
            }
        },
        getters: {},
        mutations: {
            SET_SYMBOLS: function(e, t) {
                var n = t.status
                  , r = t.data;
                "ok" === n && (e.symbols = r)
            }
        },
        actions: c
    }
}
, , , , , , function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "state", function() {
        return h
    }),
    n.d(t, "mutations", function() {
        return f
    }),
    n.d(t, "actions", function() {
        return p
    }),
    n.d(t, "getters", function() {
        return m
    });
    n(123),
    n(29),
    n(33),
    n(9);
    var r, i = n(1), a = n.n(i), o = n(4), s = n.n(o), c = n(8), u = n.n(c), l = n(7), d = n(6), h = function() {
        return {
            base: "---",
            quote: "---",
            symbolCode: "",
            exchangeType: "exchange",
            ticker: {},
            ts: 0,
            tsDiff: 0,
            theme: "hb-night",
            lsCurQuote: "",
            lsBookType: "",
            primeInfo: {},
            ecd: {},
            primeStatus: {
                round: 0,
                state: 0
            },
            primeUserInfo: null,
            primeUserLimit: null,
            getPrimePoResult: null
        }
    }, f = {
        SET_SYMBOL: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["---", "---"]
              , n = u()(t, 2);
            e.base = n[0],
            e.quote = n[1],
            e.symbolCode = t.join("")
        },
        SET_EXCHANGE_TYPE: function(e, t) {
            e.exchangeType = t,
            localStorage.setItem("exchangeType", t)
        },
        SET_TICKER: function(e, t) {
            e.ticker = t
        },
        SET_TS: function(e) {
            e.ts = Math.floor(+new Date / 100)
        },
        SET_THEME: function(e, t) {
            e.theme = t
        },
        SET_CUR_QUOTE: function(e, t) {
            e.lsCurQuote = t,
            localStorage.setItem("lsCurQuote", t)
        },
        SET_ORDERBOOK_TYPE: function(e, t) {
            e.lsBookType = t,
            localStorage.setItem("lsBookType", t)
        },
        SET_PRIME_INFO: function(e, t) {
            if (t.currency) {
                var n, r = 0, i = 0, a = new Date - t.currentTime;
                t.rounds.filter(function(e) {
                    r += e.roundIssuePrice,
                    i += e.roundCirculation
                }),
                r /= t.rounds.length,
                n = t.rounds.length,
                e.primeInfo = s()({}, t, {
                    averagePrice: r,
                    totalCirculation: i,
                    offsetTime: a,
                    roundLength: n
                })
            }
        },
        SET_PRIME_STATUS: function(e, t) {
            e.primeStatus = s()({}, t)
        },
        SET_PRIME_USER_INFO: function(e, t) {
            e.primeUserInfo = s()({}, t)
        },
        SET_PRIME_USER_LIMIT: function(e, t) {
            e.primeUserLimit = t
        },
        SET_PRIME_PO_RESULT: function(e, t) {
            e.getPrimePoResult = t
        },
        SET_ECD: function(e, t) {
            var n = t.symbol
              , r = {};
            for (var i in t)
                r[Object(d.q)(i)] = t[i];
            e.ecd[n] = r
        },
        SET_TS_DIFF: function(e, t) {
            e.tsDiff = +new Date - t
        }
    }, p = {
        getPrimeInfo: function() {
            var e = a()(regeneratorRuntime.mark(function e(t, n) {
                var r, i, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t.getters,
                            r = t.rootState,
                            t.dispatch,
                            i = t.commit,
                            t.state,
                            r.primeEnable || n) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return e.next = 5,
                            l.l.getInfo();
                        case 5:
                            (a = e.sent).success && i("SET_PRIME_INFO", a.data);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(),
        getPrimeUserInfo: function() {
            var e = a()(regeneratorRuntime.mark(function e(t, n) {
                var r, i, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t.dispatch,
                            r = t.state,
                            i = t.commit,
                            t.getters,
                            t.rootState.primeEnable && !r.primeUserInfo && r.primeInfo.currency || n) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return i("SET_PRIME_USER_INFO", r.primeUserInfo || {}),
                            e.next = 6,
                            l.l.getUserInfo();
                        case 6:
                            if (!(a = e.sent).success) {
                                e.next = 11;
                                break
                            }
                            i("SET_PRIME_USER_INFO", a.data),
                            e.next = 12;
                            break;
                        case 11:
                            return e.abrupt("return", a);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(),
        getPrimeUserLimit: function() {
            var e = a()(regeneratorRuntime.mark(function e(t, n) {
                var r, i, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t.dispatch,
                            t.getters,
                            r = t.state,
                            i = t.commit,
                            t.rootState.primeEnable && null === r.primeUserLimit && r.primeInfo.currency && 2 !== r.primeStatus.state || n) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return i("SET_PRIME_USER_LIMIT", r.primeUserLimit || 0),
                            e.next = 6,
                            l.l.getUserLimit();
                        case 6:
                            if (!(a = e.sent).success) {
                                e.next = 11;
                                break
                            }
                            i("SET_PRIME_USER_LIMIT", a.data),
                            e.next = 12;
                            break;
                        case 11:
                            return e.abrupt("return", a.message);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(),
        getPrimePoResult: function() {
            var e = a()(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.dispatch,
                            t.getters,
                            t.state,
                            r = t.commit,
                            e.next = 3,
                            l.l.getPrimePoResult();
                        case 3:
                            i = e.sent,
                            a = i.success,
                            o = i.data,
                            a ? r("SET_PRIME_PO_RESULT", o) : setTimeout(function() {
                                return n("getPrimePoResult")
                            }, 5e3);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        getExchangeControlData: function() {
            var e = a()(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = t.commit,
                            r = t.dispatch,
                            i = t.state,
                            a = i.symbolCode) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return");
                        case 4:
                            return e.next = 6,
                            l.a.exchangeLimit(a);
                        case 6:
                            (o = e.sent).success ? n("SET_ECD", o.data) : setTimeout(function() {
                                return r("getExchangeControlData")
                            }, 5e3);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        getTimestamp: function() {
            var e = a()(regeneratorRuntime.mark(function e(t) {
                var n, r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.commit,
                            r = t.dispatch,
                            e.next = 3,
                            l.a.getTimestamp();
                        case 3:
                            (i = e.sent).success ? n("SET_TS_DIFF", i.data) : setTimeout(function() {
                                return r("getTimestamp")
                            }, 5e3);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        setPrimeInfo: function() {
            var e = a()(regeneratorRuntime.mark(function e(t, n) {
                var r, i, a, o, s, c;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = t.rootState,
                            i = r.fp,
                            a = r.user,
                            o = a.userInfo.uid,
                            s = +new Date,
                            "web",
                            c = JSON.stringify({
                                fp: i,
                                uid: o,
                                ts: s,
                                device_source: "web",
                                isAlphaGo: n
                            }),
                            e.next = 8,
                            l.l.setPrimeInfo({
                                content: c
                            });
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(),
        setTs: function(e) {
            var t = e.commit;
            clearTimeout(r),
            r = setTimeout(function() {
                t("SET_TS")
            }, 0)
        }
    }, m = {
        tpp: function(e, t, n) {
            var r = e.symbolCode
              , i = (n.symbolsObj[r] || {}).trade_price_precision;
            return void 0 === i ? 2 : i
        },
        tap: function(e, t, n) {
            var r = e.symbolCode
              , i = (n.symbolsObj[r] || {}).trade_amount_precision;
            return void 0 === i ? 4 : i
        },
        ttp: function(e, t, n) {
            var r = e.symbolCode
              , i = (n.symbolsObj[r] || {}).trade_total_precision;
            return void 0 === i ? 8 : i
        },
        fp: function(e, t, n) {
            var r = e.symbolCode
              , i = (n.symbolsObj[r] || {}).fee_precision;
            return void 0 === i ? 8 : i
        },
        isPrimeReady: function(e, t, n) {
            var r = e.symbolCode
              , i = e.primeInfo
              , a = n.symbolsObj
              , o = n.primeEnable
              , s = (a[r] || {}).tags;
            return o && ((void 0 === s ? "" : s) || "").includes("prime") && "offline" !== a[r].state && r === i.symbolCode
        },
        isPrimeCommon: function(e, t) {
            var n = e.primeInfo;
            e.symbolCode;
            return t.isPrimeReady && "prime" === n.primeType
        },
        isPrimeLite: function(e, t) {
            var n = e.primeInfo;
            e.symbolCode;
            return t.isPrimeReady && "primeLite" === n.primeType
        },
        isPrime: function(e, t) {
            return t.isPrimeCommon || t.isPrimeLite
        },
        isPrimeNormal: function(e, t) {
            return t.isPrime && !!e.primeUserInfo
        },
        isPrimePO: function(e, t) {
            e.primeInfo;
            return t.isPrime && "limit" === t.primeRoundType
        },
        isPrimeBiz: function(e, t) {
            var n = e.primeInfo;
            return t.isPrime && "primeLite" === n.primeType
        },
        isPrimeEnd: function(e, t) {
            return t.isPrimeNormal && 2 === t.primeState
        },
        showOrderbooks: function(e, t, n) {
            var r = e.symbolCode
              , i = e.primeInfo
              , a = e.primeUserInfo
              , o = n.symbolsObj
              , s = n.primeEnable
              , c = (o[r] || {}).tags;
            if (s && ((void 0 === c ? "" : c) || "").includes("prime")) {
                if (a && a.system)
                    return !0;
                if (!i.symbolCode || 2 === t.primeState)
                    return !1
            }
            return !0
        },
        primeLimitOrderPrice: function(e, t) {
            var n = t.primeRound
              , r = t.isPrimePO
              , i = t.isPrimeEnd
              , a = e.primeInfo
              , o = e.ts
              , s = a.rounds;
            if (r && !i && o) {
                var c = (void 0 === s ? [] : s).find(function(e) {
                    return e.roundNum === n
                }) || {}
                  , u = c.roundLimitOrderSellPrice;
                return {
                    buyPrice: c.roundIssuePrice,
                    sellPrice: u
                }
            }
        },
        primeRound: function(e) {
            return e.primeStatus.round
        },
        primeRoundType: function(e) {
            return e.primeStatus.roundTradeType
        },
        primeState: function(e) {
            return e.primeStatus.state
        },
        BASE: function(e) {
            return e.base.toUpperCase()
        },
        QUOTE: function(e) {
            return e.quote.toUpperCase()
        },
        serverTime: function(e) {
            var t = e.tsDiff;
            return +new Date - t
        },
        ecd: function(e) {
            var t = e.symbolCode
              , n = e.ecd;
            return e.ts && n[t] || {}
        },
        isMarketDisabled: function(e, t) {
            return !1
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "actions", function() {
        return l
    });
    var r = n(8)
      , i = n.n(r)
      , a = n(24)
      , o = n.n(a)
      , s = function() {
        return window.gio ? window.gio : null
    }
      , c = []
      , u = !1
      , l = {
        track: function(e, t) {
            var n, r = e.dispatch, a = s(), l = "";
            if ("object" === o()(t)) {
                var d = t || []
                  , h = i()(d, 2);
                l = h[0],
                n = h[1]
            } else
                l = t;
            if ("retry" === l ? a || (u = !0) : l && (c.push([l, n]),
            console.log("gioTrack", JSON.stringify([l, n]))),
            !u) {
                if (!a)
                    return setTimeout(function() {
                        return r("track", "retry")
                    }, 5e3);
                for (var f; f = c.pop(); ) {
                    var p = f
                      , m = i()(p, 2);
                    a("track", m[0], m[1])
                }
            }
        },
        setUserId: function(e, t) {
            var n = s();
            console.log(t),
            n && n("setUserId", t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "state", function() {
        return d
    }),
    n.d(t, "mutations", function() {
        return h
    }),
    n.d(t, "actions", function() {
        return f
    });
    n(9);
    var r = n(1)
      , i = n.n(r)
      , a = (n(18),
    n(51),
    n(52),
    n(30),
    n(29),
    n(33),
    n(8))
      , o = n.n(a)
      , s = n(4)
      , c = n.n(s)
      , u = (n(41),
    n(7))
      , l = n(3)
      , d = function() {
        return {
            overviewObj: {
                huobi10: {
                    title: "火币主力指数",
                    url: "/zh-cn/markets/hb_index/",
                    rise: "-",
                    fall: "-"
                },
                btcusdt: {
                    title: "BTC/USDT"
                },
                ethusdt: {
                    title: "ETH/USDT"
                },
                eosusdt: {
                    title: "EOS/USDT",
                    fix: 4
                },
                htusdt: {
                    title: "HT/USDT",
                    fix: 4
                },
                btccq: {
                    url: ""
                }
            }
        }
    }
      , h = {
        SET_DATA: function(e, t) {
            var n = t.symbol
              , r = t.obj;
            e.overviewObj[n] = Object.assign(e.overviewObj[n], r),
            e.overviewObj = Object.assign({}, e.overviewObj)
        }
    }
      , f = {
        initBlock: function(e) {
            var t = e.dispatch;
            t("fetchData"),
            setInterval(function() {
                t("fetchOverview5"),
                t("fetchHBDMTicker")
            }, 15e3)
        },
        fetchData: function(e) {
            var t = e.dispatch;
            t("fetchHuobi10"),
            t("fetchOverview5"),
            t("fetchHBDMTicker"),
            t("fetchContractInfo")
        },
        formatData: function(e, t) {
            var n = e.rootState
              , r = e.commit
              , i = e.state
              , a = t.symbol
              , s = t.data
              , u = n.exchangeRate
              , d = n.rateFix
              , h = n.rateName
              , f = {}
              , p = function() {
                var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = "---", i = "", o = n.close, s = n.open;
                if (o && s && (e = Object(l.e)(Object(l.b)(Object(l.g)(o, s), s), 100),
                r = Object(l.c)(e, 2),
                "huobi10" !== a && h)) {
                    var f = Object(l.d)(Object(l.e)(o, u), d);
                    isNaN(f) || "none" === h || (i = "≈ ".concat(f, " ").concat(h).toUpperCase())
                }
                return e > 0 ? (r = "+".concat(r),
                t = "up") : e < 0 && (t = "down"),
                r += "%",
                c()({}, n, {
                    rateText: r,
                    rateClass: t,
                    estimateText: i
                })
            };
            if ("huobi10" === a) {
                var m = s || {}
                  , g = m.rise_symbol_count
                  , v = m.fall_symbol_count;
                r("SET_DATA", {
                    symbol: a,
                    obj: {
                        rise: g,
                        fall: v
                    }
                })
            } else if ("btccq" === a) {
                var _ = s || {}
                  , b = _.close
                  , y = _.open
                  , w = _.vol;
                Object.assign(f, {
                    symbol: a,
                    close: b,
                    open: y,
                    amount: w
                }),
                r("SET_DATA", {
                    symbol: a,
                    obj: p(f)
                })
            } else if ("btccqInfo" === a) {
                var x = s || []
                  , k = o()(x, 1)[0].contract_code;
                r("SET_DATA", {
                    symbol: "btccq",
                    obj: {
                        title: (void 0 === k ? "BTC" : k) + " · 季度",
                        url: "https://www.hbdm.com/" + (["zh-cn", "zh-hk", "en-us"].includes("zh-cn") ? "zh-cn/" : "en-us/") + "contract/exchange/#symbol=BTC&&contract_type=quarter"
                    }
                })
            } else {
                var T = !0
                  , O = !1
                  , C = void 0;
                try {
                    for (var E, S = s[Symbol.iterator](); !(T = (E = S.next()).done); T = !0) {
                        var A = E.value || {}
                          , L = A.close
                          , N = A.open
                          , I = A.amount
                          , R = A.symbol
                          , P = R.replace("usdt", "_usdt")
                          , j = i.overviewObj[R].url || "/zh-cn/exchange/".concat(P, "/");
                        Object.assign(f, {
                            url: j,
                            close: L,
                            open: N,
                            amount: I
                        }),
                        r("SET_DATA", {
                            symbol: R,
                            obj: p(f)
                        })
                    }
                } catch (e) {
                    O = !0,
                    C = e
                } finally {
                    try {
                        T || null == S.return || S.return()
                    } finally {
                        if (O)
                            throw C
                    }
                }
            }
        },
        fetchHuobi10: function() {
            var e = i()(regeneratorRuntime.mark(function e(t) {
                var n, r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.dispatch,
                            e.next = 3,
                            u.g.hb10Overview();
                        case 3:
                            r = e.sent,
                            i = r.data,
                            r.success ? n("formatData", {
                                symbol: "huobi10",
                                data: i
                            }) : setTimeout(function() {
                                return n("fetchHuobi10")
                            }, 5e3);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        fetchOverview5: function() {
            var e = i()(regeneratorRuntime.mark(function e(t) {
                var n, r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.dispatch,
                            e.next = 3,
                            u.g.overView5();
                        case 3:
                            r = e.sent,
                            i = r.data,
                            r.success ? n("formatData", {
                                data: i
                            }) : setTimeout(function() {
                                return n("fetchOverview5")
                            }, 5e3);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        fetchHBDMTicker: function() {
            var e = i()(regeneratorRuntime.mark(function e(t) {
                var n, r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.dispatch,
                            e.next = 3,
                            u.g.hbdmTicker();
                        case 3:
                            r = e.sent,
                            i = r.tick,
                            r.success ? n("formatData", {
                                symbol: "btccq",
                                data: i
                            }) : setTimeout(function() {
                                return n("fetchHBDMTicker")
                            }, 5e3);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        fetchContractInfo: function() {
            var e = i()(regeneratorRuntime.mark(function e(t) {
                var n, r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.dispatch,
                            e.next = 3,
                            u.g.contractInfo();
                        case 3:
                            r = e.sent,
                            i = r.data,
                            r.success ? n("formatData", {
                                symbol: "btccqInfo",
                                data: i
                            }) : setTimeout(function() {
                                return n("fetchContractInfo")
                            }, 5e3);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    }
}
, , , function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "state", function() {
        return f
    }),
    n.d(t, "actions", function() {
        return p
    }),
    n.d(t, "mutations", function() {
        return m
    });
    var r = n(45)
      , i = n.n(r)
      , a = (n(15),
    n(34),
    n(8))
      , o = n.n(a)
      , s = (n(9),
    n(1))
      , c = n.n(s)
      , u = (n(42),
    n(30),
    n(31),
    n(19),
    n(84),
    n(224),
    n(14))
      , l = n(96)
      , d = n(50)
      , h = n(149)
      , f = (n(82),
    function() {
        return {
            originSymbolsList: [],
            originCurrencysList: [],
            symbolsObj: {},
            currencysObj: {},
            quoteList: new Set,
            articles: [],
            locale: "zh-cn",
            ts: 0,
            usdtRate: 0,
            exchangeRate: 0,
            rateName: "",
            rateFix: 2,
            rateSymbol: "",
            langList: l.a,
            fp: null,
            primeEnable: !0,
            primeSliderEnable: !0,
            pageVisible: !0,
            primePosition: !0,
            primeLitePosition: !0
        }
    }
    )
      , p = {
        getSymbols: function(e, t) {
            var n = e.commit;
            return new Promise(function(e) {
                !t && localStorage.symbolHuobiProList ? (n("SET_SYMBOLS", JSON.parse(localStorage.symbolHuobiProList)),
                e("local")) : setTimeout(c()(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                u.a.getSymbol();
                            case 2:
                                (r = t.sent).success ? n("SET_SYMBOLS", r.data) : localStorage.symbolHuobiProList && n("SET_SYMBOLS", JSON.parse(localStorage.symbolHuobiProList)),
                                e("server");
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })), 0)
            }
            )
        },
        getCurrencys: function() {
            var e = c()(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = t.commit,
                            t.state.originCurrencysList.length) {
                                e.next = 6;
                                break
                            }
                            return e.next = 4,
                            u.a.getCurrency();
                        case 4:
                            (r = e.sent).success && n("SET_CURRENCYS", r.data);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        setExchangeRate: function() {
            var e = c()(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a, s, c, l, h, f, p, m, g, v, _, b, y, w, x, k, T, O, C, E, S, A, L, N, I, R, P, j, $, D, B, G, U, H, M, z, q, F;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            n = t.commit,
                            r = t.dispatch,
                            e.next = 3;
                            break;
                        case 3:
                            if (i = localStorage.exchangeRate,
                            a = localStorage && localStorage.exchangeRateList,
                            !i) {
                                e.next = 15;
                                break
                            }
                            if (c = i.split("/"),
                            l = o()(c, 1),
                            h = l[0],
                            a && (s = JSON.parse(a)),
                            "usd" === h) {
                                e.next = 13;
                                break
                            }
                            return e.next = 11,
                            u.a.getExchangeRate();
                        case 11:
                            (s = e.sent).success ? localStorage.setItem("exchangeRateList", JSON.stringify(s)) : s = a && JSON.parse(a);
                        case 13:
                            e.next = 18;
                            break;
                        case 15:
                            return f = d.a.filter(function(e) {
                                return e.lang === localStorage.lang
                            }),
                            p = o()(f, 1),
                            m = p[0].rateName,
                            localStorage.setItem("exchangeRate", "".concat(m, "/0")),
                            e.abrupt("return", r("setExchangeRate"));
                        case 18:
                            g = localStorage.exchangeRate || "",
                            v = g ? g.split("/") : [],
                            _ = o()(v, 2),
                            b = _[0],
                            y = void 0 === b ? "usd" : b,
                            w = _[1],
                            k = 1 * (x = void 0 === w ? 0 : w) ? d.a.filter(function(e) {
                                return e.abbr === y
                            }) : d.a.filter(function(e) {
                                return e.lang === localStorage.lang
                            }),
                            T = o()(k, 1),
                            O = T[0],
                            E = (C = void 0 === O ? {} : O).fix,
                            S = void 0 === E ? 2 : E,
                            A = C.symbol,
                            L = void 0 === A ? "$" : A,
                            N = C.abbr,
                            I = void 0 === N ? "usd" : N,
                            y = 1 * x ? y : I,
                            R = 0,
                            s && !s.success || ("cny" === y ? (P = s && s.data.length > 0 && s.data.filter(function(e) {
                                return "usdt_cny" === e.name
                            }) || [{}],
                            j = o()(P, 1),
                            $ = j[0].rate,
                            (R = void 0 === $ ? R : $) || (D = s && s.data.length > 0 && s.data.filter(function(e) {
                                return "usd_cny" === e.name
                            }) || [{}],
                            B = o()(D, 1),
                            G = B[0].rate,
                            R = G)) : "usd" === y ? R = 1 : "none" !== y && (U = s && s.data.length > 0 && s.data.filter(function(e) {
                                return e.name === "usd_".concat(y)
                            }) || [{}],
                            H = o()(U, 1),
                            M = H[0].rate,
                            R = void 0 === M ? R : M),
                            z = s && s.data.length > 0 && s.data.filter(function(e) {
                                return "usdt_cny" === e.name
                            }) || [{}],
                            q = o()(z, 1),
                            F = q[0].rate,
                            n("SET_USDT_RATE", void 0 === F ? R : F),
                            localStorage.setItem("exchangeRate", "".concat(y, "/").concat(x))),
                            n("SET_EXCHANGE_RATE", R),
                            n("SET_RATE_NAME", y),
                            n("SET_RATE_FIX", S),
                            n("SET_RATE_SYMBOL", L);
                        case 29:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    }
      , m = {
        SET_TS: function(e, t) {
            e.ts = t
        },
        SET_SYMBOLS: function(e, t) {
            var n = t;
            n.sort(function(e, t) {
                return 1 * t.weight - 1 * e.weight
            }),
            window.localStorage.setItem("symbolHuobiProList", JSON.stringify(n)),
            e.originSymbolsList = [].concat(n);
            var r = new Set;
            e.symbolsObj = n.reduce(function(e, t) {
                return e[t.symbol_code] = t,
                r.add(t.quote_currency),
                e
            }, {}),
            e.quoteList = r,
            r.size && h.a.setQuoteList(i()(r))
        },
        SET_CURRENCYS: function(e, t) {
            var n = JSON.parse(JSON.stringify(t));
            n.sort(function(e, t) {
                return 1 * t.weight - 1 * e.weight
            }),
            e.originCurrencysList = n,
            e.currencysObj = t.reduce(function(e, t) {
                return e[t.currency_code] = t,
                e
            }, {})
        },
        SET_ARTICLES: function(e, t) {
            var n = JSON.parse(JSON.stringify(t));
            n.length = n.length > 5 ? 5 : n.length,
            e.articles = n
        },
        SET_EXCHANGE_RATE: function(e, t) {
            e.exchangeRate = t
        },
        SET_RATE_NAME: function(e, t) {
            e.rateName = t
        },
        SET_RATE_FIX: function(e, t) {
            e.rateFix = t
        },
        SET_RATE_SYMBOL: function(e, t) {
            e.rateSymbol = t
        },
        SET_FP: function(e, t) {
            e.fp = t
        },
        SET_LOCALE: function(e, t) {
            e.locale = t
        },
        SET_PAGE_VISIBLE: function(e, t) {
            e.pageVisible = t
        },
        SET_USDT_RATE: function(e, t) {
            e.usdtRate = t
        }
    }
}
, , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(69),
    n(34);
    var r, i = n(8), a = n.n(i), o = (n(30),
    n(31),
    n(19),
    n(44),
    n(83)), s = n(59);
    n(3);
    function c() {
        return r = r || s.a.handsup(o.a.ws)
    }
    var u = {
        orderBooksIsEmpty: function(e) {
            return !Object.keys(e.orderBooks).length
        },
        filterDepthFirst: function(e) {
            var t = e.symbol
              , n = e.orderBooks
              , r = n.asks
              , i = n.bids;
            return {
                symbol: t,
                asks: r && r[0] || [],
                bids: i && i[0] || []
            }
        }
    }
      , l = {
        FORMAT_ORDER_BOOKS: function(e, t) {
            var n = t.tick
              , r = t.subbed
              , i = t.ch;
            if (!r) {
                var o = i.split(".")
                  , s = a()(o, 2)
                  , c = (s[0],
                s[1]);
                e.symbol = c,
                e.orderBooks = n
            }
        },
        CLEAR_ORDER_BOOKS: function(e, t) {
            e.orderBooks = {}
        }
    }
      , d = {
        subOrderBooks: function(e) {
            this.commit("FORMAT_ORDER_BOOKS", e)
        }
    }
      , h = {
        subOrderBooks: function(e, t) {
            var n = e.commit
              , r = t || {}
              , i = r.symbol
              , a = r.pick
              , o = r.step
              , u = r.destroy
              , l = Object(s.b)().sub({
                symbol: i,
                pick: a,
                step: o
            }).depth();
            if (this.subOrderBooksFn = this.subOrderBooksFn || d.subOrderBooks.bind({
                commit: n
            }),
            u)
                return this.subOrderBooksApi && c().unplug(this.subOrderBooksApi, this.subOrderBooksFn),
                this.subOrderBooksFn = null,
                void (this.subOrderBooksApi = null);
            this.subOrderBooksApi = l,
            c().plugin(l, this.subOrderBooksFn)
        }
    };
    t.default = {
        state: function() {
            return {
                symbol: "",
                orderBooks: {}
            }
        },
        getters: u,
        mutations: l,
        actions: h
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "state", function() {
        return c
    }),
    n.d(t, "mutations", function() {
        return u
    }),
    n.d(t, "actions", function() {
        return l
    });
    n(34),
    n(9);
    var r = n(1)
      , i = n.n(r)
      , a = n(7)
      , o = n(6)
      , s = n(3)
      , c = function() {
        return {
            currentData: [],
            historyData: [],
            detailData: [],
            tradeStates: {},
            params: {},
            cancelState: ""
        }
    }
      , u = {
        SET_CURRENT_DATA: function(e, t) {
            e.currentData = t
        },
        SET_HISTORY_DATA: function(e, t) {
            e.historyData = t
        },
        SET_DETAIL_DATA: function(e, t) {
            e.detailData = t
        },
        SET_TRADE_STATES: function(e) {
            e.tradeStates = {
                filled: "已成交",
                "partial-filled": "部分成交",
                "partial-canceled": "部分成交",
                canceled: "已撤销",
                "pre-submitted": "准备提交",
                submitted: "已提交"
            }
        },
        SET_PARAMS: function(e, t) {
            e.params = t
        },
        SET_CANCEL_STATE: function(e, t) {
            e.cancelState = t
        },
        SET_HISTORY_DETAIL_LOADING: function(e, t) {
            e.historyData.some(function(e) {
                return e.id === t && (e.loading = !0)
            })
        },
        SET_HISTORY_DETAIL: function(e, t) {
            e.historyData.forEach(function(e) {
                e.id === t.id && (e.detail = t,
                e.loading = !1)
            })
        },
        SET_CANCEL_DATA: function(e, t) {
            e.cancelState = t,
            e.currentData.forEach(function(e) {
                ("all" === t || e.id === t) && (e["canceled-at"] = 1)
            })
        }
    }
      , l = {
        fetchCurrentData: function() {
            var e = i()(regeneratorRuntime.mark(function e(t) {
                var n, r, i, o, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.state,
                            r = t.commit,
                            i = t.dispatch,
                            e.next = 3,
                            a.i.getOrdersList(n.params);
                        case 3:
                            o = e.sent,
                            s = o.data,
                            o.success ? i("handleCurrentData", s) : r("SET_CURRENT_DATA", []);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        handleCurrentData: function(e, t) {
            var n = e.commit
              , r = e.rootState
              , i = (e.state,
            [])
              , a = t.map(function(e) {
                var t = Object(o.k)(e.symbol, r.symbolsObj)
                  , n = t.tpp
                  , a = t.tap
                  , c = t.ttp
                  , u = t.display_name;
                return e["canceled-at"] && i.push(e["canceled-at"]),
                e["created-at"] = Object(o.r)(e["created-at"]),
                e["unfield-amount"] = e.amount - e["field-amount"],
                e.totalAmount = "buy-market" === e.type ? e.amount : Object(s.e)(e.price, e.amount),
                e.totalAmount = "sell-market" === e.type ? "---" : e.totalAmount,
                e.totalAmount = Object(s.c)(e.totalAmount, c),
                e.tradeType = ~e.type.indexOf("stop-limit") ? "止盈止损" : 1 * e.price ? "限价" : "市价",
                e.operator = "gte" === e.operator ? "≥" : "≤",
                e.price = 1 * e.price ? Object(s.c)(e.price, n) : "市价",
                e["stop-price"] = ~e.type.indexOf("stop-limit") ? e.operator + " " + Object(s.c)(e["stop-price"], n) : "---",
                e["field-amount"] = Object(s.c)(e["field-amount"], a),
                e["unfield-amount"] = Object(s.c)(e["unfield-amount"], a),
                e.amount = Object(s.c)(e.amount || e["filled-amount"], "buy-market" === e.type ? c : a),
                e.displayName = u,
                e.orderType = e.source.indexOf("margin") >= 0 || e.source.indexOf("fl") >= 0 ? "margin" : "exchange",
                e.directText = e.type.indexOf("sell") >= 0 ? "卖出" : "买入",
                "fl-mgt" !== e.source && "fl-sys" !== e.source || (e.directText = e.type.indexOf("sell") >= 0 ? "系统卖出" : "系统买入"),
                e.showCancelBtn = "buy-market" !== e.type && "sell-market" !== e.type && "fl-mgt" !== e.source && "fl-sys" !== e.source,
                e
            });
            n("SET_CANCEL_STATE", 0 === i.length || 0 === t.length ? null : i.length === a.length ? "all" : 1),
            n("SET_CURRENT_DATA", a)
        },
        fetchHistoryData: function() {
            var e = i()(regeneratorRuntime.mark(function e(t) {
                var n, r, i, o, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.state,
                            r = t.commit,
                            i = t.dispatch,
                            e.next = 3,
                            a.i.getOrdersList(n.params);
                        case 3:
                            o = e.sent,
                            s = o.data,
                            o.success ? (r("SET_TRADE_STATES"),
                            i("handleHistoryData", s)) : r("SET_HISTORY_DATA", []);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        handleHistoryData: function(e, t) {
            var n = e.commit
              , r = e.rootState
              , i = e.state;
            n("SET_HISTORY_DATA", t.map(function(e) {
                var t = Object(o.k)(e.symbol, r.symbolsObj)
                  , n = t.tpp
                  , a = t.tap
                  , c = t.ttp
                  , u = t.display_name;
                return e["created-at"] = Object(o.r)(e["created-at"]),
                e["unfield-amount"] = e.amount - e["field-amount"],
                e.tradeType = ~e.type.indexOf("stop-limit") ? "止盈止损" : ~e.type.indexOf("market") ? "市价" : "限价",
                e.operator = "gte" === e.operator ? "≥" : "≤",
                e.price = 1 * e.price ? Object(s.c)(e.price, n) : "市价",
                e["stop-price"] = ~e.type.indexOf("stop-limit") ? e.operator + " " + Object(s.c)(e["stop-price"], n) : "---",
                e.averagePrice = 1 * e["field-amount"] ? Object(s.c)(Object(s.b)(e["field-cash-amount"], e["field-amount"]), n) : Object(s.c)(0, n),
                e.amount = Object(s.c)(e.amount || e["filled-amount"], "buy-market" === e.type ? c : a),
                e["field-amount"] = Object(s.c)(e["field-amount"], a),
                e.displayName = u,
                e.tradeState = i.tradeStates[e.state],
                e.detail = [],
                e.loading = !1,
                e.orderType = e.source.indexOf("margin") >= 0 || e.source.indexOf("fl") >= 0 ? "margin" : "exchange",
                e.isMarket = "buy-market" === e.type || "sell-market" === e.type,
                e.directText = e.type.indexOf("sell") >= 0 ? "卖出" : "买入",
                "fl-mgt" !== e.source && "fl-sys" !== e.source || (e.directText = e.type.indexOf("sell") >= 0 ? "系统卖出" : "系统买入"),
                e
            }))
        },
        fetchDetailData: function() {
            var e = i()(regeneratorRuntime.mark(function e(t) {
                var n, r, i, o, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.state,
                            r = t.commit,
                            i = t.dispatch,
                            e.next = 3,
                            a.i.getOrderMatchresults(n.params);
                        case 3:
                            o = e.sent,
                            s = o.data,
                            o.success ? i("handleDetailData", s) : r("SET_DETAIL_DATA", []);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        handleDetailData: function(e, t) {
            var n = e.commit
              , r = e.rootState;
            e.state;
            n("SET_DETAIL_DATA", t.map(function(e) {
                var t = Object(o.k)(e.symbol, r.symbolsObj)
                  , n = t.tpp
                  , i = t.tap
                  , a = t.ttp
                  , c = t.fp
                  , u = t.display_name
                  , l = u ? -1 !== e.type.indexOf("buy") ? u.split("/")[0] || "" : u.split("/")[1] || "" : "";
                return e["created-at"] = Object(o.r)(e["created-at"]),
                e["unfield-amount"] = e.amount - e["field-amount"],
                e.tradeType = ~e.type.indexOf("stop-limit") ? "止盈止损" : ~e.type.indexOf("market") ? "市价" : "限价",
                e.price = 1 * e.price ? Object(s.c)(e.price, n) : "市价",
                e["filled-total-amount"] = e.price * e["filled-amount"],
                e["filled-fees"] = Object(s.c)(e["filled-fees"], c),
                e["filled-points"] = Object(s.c)(e["filled-points"], 8),
                e["filled-total-amount"] = Object(s.c)(e["filled-total-amount"], 8),
                e.amount = Object(s.c)(e.amount || e["filled-amount"], "buy-market" === e.type ? a : i),
                e["filled-amount"] = Object(s.c)(e["filled-amount"], i),
                e.displayName = u,
                e.orderType = e.source.indexOf("margin") >= 0 || e.source.indexOf("fl") >= 0 ? "margin" : "exchange",
                e.directText = e.type.indexOf("sell") >= 0 ? "卖出" : "买入",
                "fl-mgt" !== e.source && "fl-sys" !== e.source || (e.directText = e.type.indexOf("sell") >= 0 ? "系统卖出" : "系统买入"),
                1 * e["filled-fees"] || 1 * e["filled-points"] ? (1 * e["filled-fees"] && (e.fee = "".concat(e["filled-fees"], " ").concat(l)),
                1 * e["filled-points"] && (e.points = "".concat(e["filled-points"], " pts"))) : e.fee = "".concat(e["filled-fees"], " ").concat(l),
                e
            }))
        },
        handleHistoryDetail: function(e, t) {
            var n = e.commit
              , r = e.rootState
              , i = (e.state,
            t.map(function(e) {
                var t = Object(o.k)(e.symbol, r.symbolsObj)
                  , n = t.tpp
                  , i = t.tap
                  , a = (t.ttp,
                t.fp)
                  , c = t.display_name
                  , u = c ? -1 !== e.type.indexOf("buy") ? c.split("/")[0] || "" : c.split("/")[1] || "" : "";
                return e["created-at"] = Object(o.r)(e["created-at"]),
                e.price = 1 * e.price ? Object(s.c)(e.price, n) : "市价",
                e["filled-total-amount"] = e.price * e["filled-amount"],
                e["filled-amount"] = Object(s.c)(e["filled-amount"], i),
                e["filled-fees"] = Object(s.c)(e["filled-fees"], a),
                e["filled-points"] = Object(s.c)(e["filled-points"], 8),
                e["filled-total-amount"] = Object(s.c)(e["filled-total-amount"], 8),
                1 * e["filled-fees"] || 1 * e["filled-points"] ? (1 * e["filled-fees"] && (e.fee = "".concat(e["filled-fees"], " ").concat(u)),
                1 * e["filled-points"] && (e.points = "".concat(e["filled-points"], " pts"))) : e.fee = "".concat(e["filled-fees"], " ").concat(u),
                e
            }));
            i.id = t.id,
            n("SET_HISTORY_DETAIL", i)
        },
        fetchOrderDetail: function() {
            var e = i()(regeneratorRuntime.mark(function e(t, n) {
                var r, i, o, s, c;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = t.commit,
                            t.rootState,
                            t.state,
                            i = t.dispatch,
                            r("SET_HISTORY_DETAIL_LOADING", n),
                            e.next = 4,
                            a.i.getOrderDetail(n);
                        case 4:
                            o = e.sent,
                            s = o.data,
                            (c = void 0 === s ? [] : s).id = n,
                            i("handleHistoryDetail", c);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(),
        cancelOrder: function() {
            var e = i()(regeneratorRuntime.mark(function e(t, r) {
                var i, o, s, c, u, l;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return i = t.commit,
                            o = t.state,
                            e.next = 3,
                            Promise.resolve().then(n.bind(null, 71));
                        case 3:
                            if (c = e.sent,
                            u = c.default,
                            "all" !== r) {
                                e.next = 13;
                                break
                            }
                            return l = {
                                symbol: o.params.symbols,
                                side: o.params.types ? "buy-market,buy-limit,sell-stop-limit" === o.params.types ? "buy" : "sell" : void 0,
                                t: (new Date).valueOf()
                            },
                            e.next = 9,
                            a.i.cancelAllOrder(l);
                        case 9:
                            (s = e.sent).success ? u.success("撤单申请成功") : u.error(s.message),
                            e.next = 17;
                            break;
                        case 13:
                            return e.next = 15,
                            a.i.cancelOrder(r);
                        case 15:
                            (s = e.sent).success ? u.success("撤单申请成功") : u.error(s.message);
                        case 17:
                            i("SET_CANCEL_DATA", r);
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
    }
}
, , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(120);
    n.n(r).a
}
, , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(42),
    n(84),
    n(51),
    n(52);
    var r = n(24)
      , i = n.n(r)
      , a = (n(15),
    n(9),
    n(60),
    n(1))
      , o = n.n(a)
      , s = (n(29),
    n(33),
    n(30),
    n(31),
    n(19),
    n(44),
    n(41),
    n(2))
      , c = (n(18),
    n(240))
      , u = c.keys();
    function l(e) {
        var t = c(e);
        return t.default || t
    }
    var d = {}
      , h = !0
      , f = !1
      , p = void 0;
    try {
        for (var m, g = u[Symbol.iterator](); !(h = (m = g.next()).done); h = !0) {
            var v = m.value;
            d[v.replace(/^\.\//, "").replace(/\.(js|mjs)$/, "")] = l(v)
        }
    } catch (e) {
        f = !0,
        p = e
    } finally {
        try {
            h || null == g.return || g.return()
        } finally {
            if (f)
                throw p
        }
    }
    var _ = d
      , b = (n(34),
    n(241),
    n(242),
    n(122),
    n(95),
    n(150),
    n(4))
      , y = n.n(b)
      , w = function() {
        return {}
    };
    function x(e) {
        return e.then(function(e) {
            return e.default || e
        })
    }
    function k(e, t) {
        var n = e.options.data || w;
        !t && e.options.hasAsyncData || (e.options.hasAsyncData = !0,
        e.options.data = function() {
            var r = n.call(this);
            return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]),
            y()({}, r, t)
        }
        ,
        e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data))
    }
    function T(e) {
        return e.options && e._Ctor === e ? e : (e.options ? (e._Ctor = e,
        e.extendOptions = e.options) : (e = s.default.extend(e))._Ctor = e,
        !e.options.name && e.options.__file && (e.options.name = e.options.__file),
        e)
    }
    function O(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Array.prototype.concat.apply([], e.matched.map(function(e, n) {
            return Object.keys(e.components).map(function(r) {
                return t && t.push(n),
                e.components[r]
            })
        }))
    }
    function C(e, t) {
        return Array.prototype.concat.apply([], e.matched.map(function(e, n) {
            return Object.keys(e.components).reduce(function(r, i) {
                return e.components[i] ? r.push(t(e.components[i], e.instances[i], e, i, n)) : delete e.components[i],
                r
            }, [])
        }))
    }
    function E(e) {
        return Promise.all(C(e, (t = o()(regeneratorRuntime.mark(function e(t, n, r, i) {
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if ("function" != typeof t || t.options) {
                            e.next = 4;
                            break
                        }
                        return e.next = 3,
                        t();
                    case 3:
                        t = e.sent;
                    case 4:
                        return r.components[i] = T(t),
                        e.abrupt("return", r.components[i]);
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }, e)
        })),
        function(e, n, r, i) {
            return t.apply(this, arguments)
        }
        )));
        var t
    }
    function S(e) {
        return A.apply(this, arguments)
    }
    function A() {
        return (A = o()(regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        E(t);
                    case 2:
                        return e.abrupt("return", y()({}, t, {
                            meta: O(t).map(function(e) {
                                return e.options.meta || {}
                            })
                        }));
                    case 3:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }))).apply(this, arguments)
    }
    function L(e, t) {
        return N.apply(this, arguments)
    }
    function N() {
        return (N = o()(regeneratorRuntime.mark(function e(t, n) {
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (t.context || (t.context = {
                            isStatic: !0,
                            isDev: !1,
                            isHMR: !1,
                            app: t,
                            store: t.store,
                            payload: n.payload,
                            error: n.error,
                            base: "/",
                            env: {
                                locationHost: "http://pro-web.test-17.huobiapps.com",
                                isProd: !1
                            }
                        },
                        n.req && (t.context.req = n.req),
                        n.res && (t.context.res = n.res),
                        t.context.redirect = function(e, n, r) {
                            if (e) {
                                t.context._redirected = !0;
                                var a = i()(n);
                                if ("number" == typeof e || "undefined" !== a && "object" !== a || (r = n || {},
                                n = e,
                                a = i()(n),
                                e = 302),
                                "object" === a && (n = t.router.resolve(n).href),
                                !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))
                                    throw n = H(n, r),
                                    window.location.replace(n),
                                    new Error("ERR_REDIRECT");
                                t.context.next({
                                    path: n,
                                    query: r,
                                    status: e
                                })
                            }
                        }
                        ,
                        t.context.nuxtState = window.__NUXT__),
                        t.context.next = n.next,
                        t.context._redirected = !1,
                        t.context._errored = !1,
                        t.context.isHMR = !!n.isHMR,
                        !n.route) {
                            e.next = 9;
                            break
                        }
                        return e.next = 8,
                        S(n.route);
                    case 8:
                        t.context.route = e.sent;
                    case 9:
                        if (t.context.params = t.context.route.params || {},
                        t.context.query = t.context.route.query || {},
                        !n.from) {
                            e.next = 15;
                            break
                        }
                        return e.next = 14,
                        S(n.from);
                    case 14:
                        t.context.from = e.sent;
                    case 15:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }))).apply(this, arguments)
    }
    function I(e, t) {
        var n;
        return (n = 2 === e.length ? new Promise(function(n) {
            e(t, function(e, r) {
                e && t.error(e),
                n(r = r || {})
            })
        }
        ) : e(t)) && (n instanceof Promise || "function" == typeof n.then) || (n = Promise.resolve(n)),
        n
    }
    function R(e, t) {
        var n = window.location.pathname;
        return "hash" === t ? window.location.hash.replace(/^#\//, "") : (e && 0 === n.indexOf(e) && (n = n.slice(e.length)),
        decodeURI(n || "/") + window.location.search + window.location.hash)
    }
    function P(e, t) {
        return function(e) {
            for (var t = new Array(e.length), n = 0; n < e.length; n++)
                "object" === i()(e[n]) && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$"));
            return function(n, r) {
                for (var i = "", a = n || {}, o = r || {}, s = o.pretty ? B : encodeURIComponent, c = 0; c < e.length; c++) {
                    var u = e[c];
                    if ("string" != typeof u) {
                        var l = a[u.name || "pathMatch"]
                          , d = void 0;
                        if (null == l) {
                            if (u.optional) {
                                u.partial && (i += u.prefix);
                                continue
                            }
                            throw new TypeError('Expected "' + u.name + '" to be defined')
                        }
                        if (Array.isArray(l)) {
                            if (!u.repeat)
                                throw new TypeError('Expected "' + u.name + '" to not repeat, but received `' + JSON.stringify(l) + "`");
                            if (0 === l.length) {
                                if (u.optional)
                                    continue;
                                throw new TypeError('Expected "' + u.name + '" to not be empty')
                            }
                            for (var h = 0; h < l.length; h++) {
                                if (d = s(l[h]),
                                !t[c].test(d))
                                    throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '", but received `' + JSON.stringify(d) + "`");
                                i += (0 === h ? u.prefix : u.delimiter) + d
                            }
                        } else {
                            if (d = u.asterisk ? encodeURI(l).replace(/[?#]/g, function(e) {
                                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                            }) : s(l),
                            !t[c].test(d))
                                throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but received "' + d + '"');
                            i += u.prefix + d
                        }
                    } else
                        i += u
                }
                return i
            }
        }(function(e, t) {
            var n, r = [], i = 0, a = 0, o = "", s = t && t.delimiter || "/";
            for (; null != (n = D.exec(e)); ) {
                var c = n[0]
                  , u = n[1]
                  , l = n.index;
                if (o += e.slice(a, l),
                a = l + c.length,
                u)
                    o += u[1];
                else {
                    var d = e[a]
                      , h = n[2]
                      , f = n[3]
                      , p = n[4]
                      , m = n[5]
                      , g = n[6]
                      , v = n[7];
                    o && (r.push(o),
                    o = "");
                    var _ = null != h && null != d && d !== h
                      , b = "+" === g || "*" === g
                      , y = "?" === g || "*" === g
                      , w = n[2] || s
                      , x = p || m;
                    r.push({
                        name: f || i++,
                        prefix: h || "",
                        delimiter: w,
                        optional: y,
                        repeat: b,
                        partial: _,
                        asterisk: !!v,
                        pattern: x ? U(x) : v ? ".*" : "[^" + G(w) + "]+?"
                    })
                }
            }
            a < e.length && (o += e.substr(a));
            o && r.push(o);
            return r
        }(e, t))
    }
    function j(e, t) {
        var n = {}
          , r = y()({}, e, t);
        for (var i in r)
            String(e[i]) !== String(t[i]) && (n[i] = !0);
        return n
    }
    function $(e) {
        var t;
        if (e.message || "string" == typeof e)
            t = e.message || e;
        else
            try {
                t = JSON.stringify(e, null, 2)
            } catch (n) {
                t = "[".concat(e.constructor.name, "]")
            }
        return {
            message: t,
            statusCode: e.statusCode || e.status || e.response && e.response.status || 500
        }
    }
    window.onNuxtReadyCbs = [],
    window.onNuxtReady = function(e) {
        window.onNuxtReadyCbs.push(e)
    }
    ;
    var D = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
    function B(e) {
        return encodeURI(e).replace(/[\/?#]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
    function G(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
    }
    function U(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1")
    }
    function H(e, t) {
        var n, r = e.indexOf("://");
        -1 !== r ? (n = e.substring(0, r),
        e = e.substring(r + 3)) : e.startsWith("//") && (e = e.substring(2));
        var i, a = e.split("/"), o = (n ? n + "://" : "//") + a.shift(), s = a.filter(Boolean).join("/");
        return 2 === (a = s.split("#")).length && (s = a[0],
        i = a[1]),
        o += s ? "/" + s : "",
        t && "{}" !== JSON.stringify(t) && (o += (2 === e.split("?").length ? "&" : "?") + function(e) {
            return Object.keys(e).sort().map(function(t) {
                var n = e[t];
                return null == n ? "" : Array.isArray(n) ? n.slice().map(function(e) {
                    return [t, "=", e].join("")
                }).join("&") : t + "=" + n
            }).filter(Boolean).join("&")
        }(t)),
        o += i ? "#" + i : ""
    }
    var M = n(191)
      , z = n.n(M)
      , q = n(147)
      , F = function() {
        return x(n.e(67).then(n.bind(null, 777)))
    }
      , K = function() {
        return x(n.e(68).then(n.bind(null, 783)))
    }
      , V = function() {
        return x(Promise.all([n.e(8), n.e(41)]).then(n.bind(null, 757)))
    }
      , Q = function() {
        return x(Promise.all([n.e(4), n.e(2), n.e(6), n.e(45)]).then(n.bind(null, 762)))
    }
      , Y = function() {
        return x(n.e(74).then(n.bind(null, 778)))
    }
      , J = function() {
        return x(n.e(72).then(n.bind(null, 779)))
    }
      , X = function() {
        return x(n.e(73).then(n.bind(null, 780)))
    }
      , W = function() {
        return x(n.e(75).then(n.bind(null, 781)))
    }
      , Z = function() {
        return x(Promise.all([n.e(8), n.e(52)]).then(n.bind(null, 782)))
    }
      , ee = function() {
        return x(Promise.all([n.e(12), n.e(38)]).then(n.bind(null, 755)))
    }
      , te = function() {
        return x(Promise.all([n.e(5), n.e(66), n.e(32)]).then(n.bind(null, 764)))
    }
      , ne = function() {
        return x(Promise.all([n.e(4), n.e(2), n.e(6), n.e(9)]).then(n.bind(null, 745)))
    }
      , re = function() {
        return x(n.e(40).then(n.bind(null, 758)))
    }
      , ie = function() {
        return x(Promise.all([n.e(5), n.e(1), n.e(36)]).then(n.bind(null, 763)))
    }
      , ae = function() {
        return x(n.e(46).then(n.bind(null, 769)))
    }
      , oe = function() {
        return x(Promise.all([n.e(4), n.e(2), n.e(6), n.e(9), n.e(71)]).then(n.bind(null, 772)))
    }
      , se = function() {
        return x(n.e(47).then(n.bind(null, 774)))
    }
      , ce = function() {
        return x(Promise.all([n.e(4), n.e(2), n.e(33)]).then(n.bind(null, 754)))
    }
      , ue = function() {
        return x(Promise.all([n.e(1), n.e(12), n.e(10), n.e(35)]).then(n.bind(null, 775)))
    }
      , le = function() {
        return x(Promise.all([n.e(1), n.e(10), n.e(39)]).then(n.bind(null, 759)))
    }
      , de = function() {
        return x(n.e(34).then(n.bind(null, 756)))
    }
      , he = function() {
        return x(n.e(44).then(n.bind(null, 768)))
    }
      , fe = function() {
        return x(n.e(50).then(n.bind(null, 767)))
    }
      , pe = function() {
        return x(n.e(61).then(n.bind(null, 765)))
    }
      , me = function() {
        return x(n.e(60).then(n.bind(null, 788)))
    }
      , ge = function() {
        return x(n.e(37).then(n.bind(null, 761)))
    }
      , ve = function() {
        return x(n.e(48).then(n.bind(null, 786)))
    }
      , _e = function() {
        return x(n.e(42).then(n.bind(null, 773)))
    }
      , be = function() {
        return x(n.e(53).then(n.bind(null, 771)))
    }
      , ye = function() {
        return x(n.e(55).then(n.bind(null, 770)))
    }
      , we = function() {
        return x(n.e(49).then(n.bind(null, 766)))
    }
      , xe = function() {
        return x(n.e(43).then(n.bind(null, 760)))
    }
      , ke = function() {
        return x(n.e(54).then(n.bind(null, 776)))
    }
      , Te = function() {
        return x(n.e(69).then(n.bind(null, 787)))
    }
      , Oe = function() {
        return x(n.e(70).then(n.bind(null, 785)))
    };
    s.default.use(q.a);
    var Ce = function(e, t, n) {
        return e.name !== t.name ? {
            x: 0,
            y: 0
        } : n
    };
    var Ee = n(192)
      , Se = n.n(Ee).a
      , Ae = {
        name: "nuxt-child",
        functional: !0,
        props: {
            nuxtChildKey: {
                type: String,
                default: ""
            },
            keepAlive: Boolean
        },
        render: function(e, t) {
            var n = t.parent
              , r = t.data
              , i = t.props;
            r.nuxtChild = !0;
            for (var a = n, o = n.$nuxt.nuxt.transitions, s = n.$nuxt.nuxt.defaultTransition, c = 0; n; )
                n.$vnode && n.$vnode.data.nuxtChild && c++,
                n = n.$parent;
            r.nuxtChildDepth = c;
            var u = o[c] || s
              , l = {};
            Le.forEach(function(e) {
                void 0 !== u[e] && (l[e] = u[e])
            });
            var d = {};
            Ne.forEach(function(e) {
                "function" == typeof u[e] && (d[e] = u[e].bind(a))
            });
            var h = d.beforeEnter;
            d.beforeEnter = function(e) {
                if (window.$nuxt.$nextTick(function() {
                    window.$nuxt.$emit("triggerScroll")
                }),
                h)
                    return h.call(a, e)
            }
            ;
            var f = [e("router-view", r)];
            return i.keepAlive && (f = [e("keep-alive", {
                props: i.keepAliveProps
            }, f)]),
            e("transition", {
                props: l,
                on: d
            }, f)
        }
    }
      , Le = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"]
      , Ne = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"]
      , Ie = {
        name: "nuxt-link",
        functional: !0,
        render: function(e, t) {
            return e("router-link", t.data, t.children)
        }
    }
      , Re = {
        name: "nuxt-error",
        props: {
            error: {
                type: Object,
                default: null
            }
        },
        head: function() {
            return {
                title: this.message,
                meta: [{
                    name: "viewport",
                    content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                }]
            }
        },
        computed: {
            statusCode: function() {
                return this.error && this.error.statusCode || 500
            },
            message: function() {
                return this.error.message || "Error"
            }
        }
    }
      , Pe = (n(247),
    n(5))
      , je = Object(Pe.a)(Re, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("div", {
            staticClass: "__nuxt-error-page"
        }, [n("div", {
            staticClass: "error"
        }, [n("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "90",
                height: "90",
                fill: "#DBE1EC",
                viewBox: "0 0 48 48"
            }
        }, [n("path", {
            attrs: {
                d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
            }
        })]), e._v(" "), n("div", {
            staticClass: "title"
        }, [e._v(e._s(e.message))]), e._v(" "), 404 === e.statusCode ? n("p", {
            staticClass: "description"
        }, [n("nuxt-link", {
            staticClass: "error-link",
            attrs: {
                to: "/"
            }
        }, [e._v("Back to the home page")])], 1) : e._e(), e._v(" "), e._m(0)])])
    }, [function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("div", {
            staticClass: "logo"
        }, [t("a", {
            attrs: {
                href: "https://nuxtjs.org",
                target: "_blank",
                rel: "noopener"
            }
        }, [this._v("Nuxt.js")])])
    }
    ], !1, null, null, null).exports
      , $e = {
        name: "nuxt",
        props: {
            nuxtChildKey: String,
            keepAlive: Boolean
        },
        render: function(e) {
            return this.nuxt.err ? e("nuxt-error", {
                props: {
                    error: this.nuxt.err
                }
            }) : e("nuxt-child", {
                key: this.routerViewKey,
                props: this.$props
            })
        },
        beforeCreate: function() {
            s.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
        },
        computed: {
            routerViewKey: function() {
                if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
                    return this.nuxtChildKey || P(this.$route.matched[0].path)(this.$route.params);
                var e = this.$route.matched[0] && this.$route.matched[0].components.default;
                return e && e.options && e.options.key ? "function" == typeof e.options.key ? e.options.key(this.$route) : e.options.key : this.$route.path
            }
        },
        components: {
            NuxtChild: Ae,
            NuxtError: je
        }
    }
      , De = {
        name: "nuxt-loading",
        data: function() {
            return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1
            }
        },
        computed: {
            left: function() {
                return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
            }
        },
        beforeDestroy: function() {
            this.clear()
        },
        methods: {
            clear: function() {
                clearInterval(this._timer),
                clearTimeout(this._throttle),
                this._timer = null
            },
            start: function() {
                var e = this;
                return this.clear(),
                this.percent = 0,
                this.reversed = !1,
                this.skipTimerCount = 0,
                this.canSucceed = !0,
                this.throttle ? this._throttle = setTimeout(function() {
                    return e.startTimer()
                }, this.throttle) : this.startTimer(),
                this
            },
            set: function(e) {
                return this.show = !0,
                this.canSucceed = !0,
                this.percent = Math.min(100, Math.max(0, Math.floor(e))),
                this
            },
            get: function() {
                return this.percent
            },
            increase: function(e) {
                return this.percent = Math.min(100, Math.floor(this.percent + e)),
                this
            },
            decrease: function(e) {
                return this.percent = Math.max(0, Math.floor(this.percent - e)),
                this
            },
            pause: function() {
                return clearInterval(this._timer),
                this
            },
            resume: function() {
                return this.startTimer(),
                this
            },
            finish: function() {
                return this.percent = this.reversed ? 0 : 100,
                this.hide(),
                this
            },
            hide: function() {
                var e = this;
                return this.clear(),
                setTimeout(function() {
                    e.show = !1,
                    e.$nextTick(function() {
                        e.percent = 0,
                        e.reversed = !1
                    })
                }, 500),
                this
            },
            fail: function() {
                return this.canSucceed = !1,
                this
            },
            startTimer: function() {
                var e = this;
                this.show || (this.show = !0),
                void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)),
                this._timer = setInterval(function() {
                    e.skipTimerCount > 0 ? e.skipTimerCount-- : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut),
                    e.continuous && (e.percent >= 100 ? (e.skipTimerCount = 1,
                    e.reversed = !e.reversed) : e.percent <= 0 && (e.skipTimerCount = 1,
                    e.reversed = !e.reversed)))
                }, 100)
            }
        },
        render: function(e) {
            var t = e(!1);
            return this.show && (t = e("div", {
                staticClass: "nuxt-progress",
                class: {
                    "nuxt-progress-notransition": this.skipTimerCount > 0,
                    "nuxt-progress-failed": !this.canSucceed
                },
                style: {
                    width: this.percent + "%",
                    left: this.left
                }
            })),
            t
        }
    }
      , Be = (n(248),
    Object(Pe.a)(De, void 0, void 0, !1, null, null, null).exports)
      , Ge = (n(249),
    n(250),
    n(45))
      , Ue = n.n(Ge)
      , He = n(11)
      , Me = n(20)
      , ze = {
        name: "GroupCenterEnter",
        components: {
            A: Me.a
        }
    }
      , qe = (n(255),
    Object(Pe.a)(ze, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("section", {
            staticClass: "group-center-enter"
        }, [n("div", {
            staticClass: "enter-icon"
        }), e._v(" "), n("ul", [n("li", {
            staticClass: "production"
        }, [n("dl", [n("dt", [e._v("交易所")]), e._v(" "), n("dd", [n("A", {
            attrs: {
                url: "/" + e.$store.state.locale
            }
        }, [n("i", {
            staticClass: "icon icon_global"
        }), e._v(" "), n("span", [e._v("火币全球站")])])], 1), e._v(" "), n("dd", [n("A", {
            attrs: {
                url: "https://www.huobi.co.kr/ko-KR/",
                target: "_blank"
            }
        }, [n("i", {
            staticClass: "icon icon_ko"
        }), e._v(" "), n("span", [e._v("火币韩国")])])], 1), e._v(" "), n("dd", [n("A", {
            attrs: {
                url: "https://www.huobi.com.au/",
                target: "_blank"
            }
        }, [n("i", {
            staticClass: "icon icon_au"
        }), e._v(" "), n("span", [e._v("火币澳洲")])])], 1)])]), e._v(" "), n("li", {
            staticClass: "servier-center"
        }, [n("dl", [n("dt", [e._v("集团生态服务")]), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), n("dd", [n("a", {
            attrs: {
                href: "/" + e.$store.state.locale + "/capital/",
                target: "_blank"
            }
        }, [n("i", {
            staticClass: "icon_capital"
        }), e._v(" "), n("span", [e._v("火币资本")])])]), e._v(" "), e._m(5), e._v(" "), e._m(6)])])])])
    }, [function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://www.huobiinfo.com/",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "icon_news"
        }), this._v(" "), t("span", [this._v("火币资讯")])])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://www.huobipool.com/pow/",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "icon_pool"
        }), this._v(" "), t("span", [this._v("火币矿池")])])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://www.huobi.im/zh-cn/",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "icon_chat"
        }), this._v(" "), t("span", [this._v("火信")])])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://www.huobiwallet.com/zh/",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "icon_wallet"
        }), this._v(" "), t("span", [this._v("火币钱包")])])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://www.huobi.cn/",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "icon_chain"
        }), this._v(" "), t("span", [this._v("火币中国")])])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://eco.huobi.co/",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "icon_eco"
        }), this._v(" "), t("span", [this._v("火币全球生态基金")])])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://www.huobicloud.com/zh-cn/",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "icon_cloud"
        }), this._v(" "), t("span", [this._v("火币云")])])])
    }
    ], !1, null, "063e63d2", null).exports)
      , Fe = n(7)
      , Ke = {
        name: "NoticeList",
        components: {
            A: Me.a
        },
        computed: {},
        data: function() {
            return {
                list: null
            }
        },
        methods: {
            getNotice: function() {
                var e = o()(regeneratorRuntime.mark(function e() {
                    var t, n, r, i;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = this.$store.state.locale,
                                e.next = 3,
                                Fe.g.getNoticeList(t);
                            case 3:
                                n = e.sent,
                                r = null;
                                try {
                                    i = JSON.parse(n),
                                    r = i.articles
                                } catch (e) {
                                    r = []
                                }
                                this.list = r.slice(0, 5);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
        },
        mounted: function() {
            this.list = this.$store.state.articles.slice(0, 5),
            this.getNotice()
        }
    }
      , Ve = (n(278),
    Object(Pe.a)(Ke, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("section", {
            staticClass: "notice-list"
        }, [n("i", {
            staticClass: "hb_icon_notice"
        }), e._v(" "), n("dl", {
            class: {
                loading: !e.list
            }
        }, [e._l(e.list, function(t, r) {
            return n("dd", {
                key: r,
                attrs: {
                    title: t.name
                }
            }, [n("a", {
                attrs: {
                    rel: "noopener noreferrer",
                    href: t.html_url,
                    target: "_blank"
                }
            }, [e._v("\n                " + e._s(t.name) + "\n            ")])])
        }), e._v(" "), e._m(0)], 2)])
    }, [function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dt", [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://huobiglobal.zendesk.com/hc/zh-cn/categories/360000031902",
                target: "_blank"
            }
        }, [this._v("\n                查看全部\n            ")])])
    }
    ], !1, null, "ec25caca", null).exports)
      , Qe = n(8)
      , Ye = n.n(Qe)
      , Je = n(50)
      , Xe = n(6)
      , We = {
        name: "DialogSetting",
        data: function() {
            return {
                currencys: {},
                curCurrency: {},
                button: "确认",
                showCurrency: !1
            }
        },
        props: {
            title: {
                type: String,
                default: "Note"
            }
        },
        mounted: function() {
            this.currencys = Je.a,
            this.initData(),
            document.body.addEventListener("click", this.hideCurrencyList)
        },
        computed: {
            isGlobal: function() {
                return "en-us" !== this.$store.state.locale
            }
        },
        methods: {
            initData: function() {
                var e = o()(regeneratorRuntime.mark(function e() {
                    var t, n, r, i;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                (t = localStorage.exchangeRate) ? (n = t.split("/"),
                                r = Ye()(n, 1),
                                i = r[0],
                                this.curCurrency = this.currencys.filter(function(e) {
                                    return e.abbr === i
                                })[0],
                                this.oldCurrency = this.curCurrency.abbr) : (this.curCurrency = {
                                    symbol: "$",
                                    abbr: "usd"
                                },
                                this.oldCurrency = "usd");
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            changeCurrency: function(e, t) {
                this.curCurrency = e
            },
            hideCurrencyList: function(e) {
                var t = e.target;
                (Object(Xe.d)(t, "stop") || {}).node === this.$refs.depthNameDOM ? this.showCurrency = !this.showCurrency : this.showCurrency = !1
            },
            close: function() {
                this.$emit("close"),
                this.curCurrency.abbr !== this.oldCurrency && (localStorage.setItem("exchangeRate", "".concat(this.curCurrency.abbr, "/1")),
                "none" === this.curCurrency.abbr && localStorage.setItem("isLocalPrice", 0),
                location.reload())
            }
        },
        beforeDestroy: function() {
            document.removeEventListener("click", this.hideCurrencyList)
        }
    }
      , Ze = (n(279),
    Object(Pe.a)(We, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("div", {
            staticClass: "dialog setting-dialog",
            class: {
                isglobal: e.isGlobal
            },
            attrs: {
                "growing-ignore": "true"
            }
        }, [n("div", {
            staticClass: "dialog-title"
        }, [e._v("\n        " + e._s(e.title) + "\n        "), n("i", {
            staticClass: "hb_icon_close",
            on: {
                click: function(t) {
                    return e.$emit("close")
                }
            }
        })]), e._v(" "), n("div", {
            staticClass: "setting-content"
        }, [n("span", {
            ref: "depthNameDOM",
            class: {
                show: e.showCurrency
            },
            attrs: {
                stop: "1"
            }
        }, [n("span", {
            staticClass: "symbol"
        }, [e._v(e._s(e.curCurrency.symbol))]), e._v(" "), n("span", [e._v(e._s(e.curCurrency.abbr || "---"))]), e._v(" "), n("i", {
            staticClass: "depth-arrow-down"
        })]), e._v(" "), n("ul", {
            class: {
                show: e.showCurrency
            }
        }, e._l(e.currencys, function(t, r) {
            return n("li", {
                key: r,
                class: {
                    cur: e.curCurrency.abbr === t.abbr
                },
                on: {
                    click: function(n) {
                        return e.changeCurrency(t, r)
                    }
                }
            }, [n("span", {
                staticClass: "symbol"
            }, [e._v(e._s(t.symbol))]), e._v(" "), n("span", [e._v(e._s(t.abbr))])])
        }), 0)]), e._v(" "), n("div", {
            staticClass: "dialog-actions dialog-submit"
        }, [n("button", {
            on: {
                click: e.close
            }
        }, [e._v("\n            " + e._s(e.button) + "\n        ")])])])
    }, [], !1, null, null, null).exports)
      , et = {
        name: "Settings",
        methods: {
            showSetDialog: function() {
                this.$modal.show(Ze, {
                    title: "设置"
                }, {
                    width: 480,
                    height: "auto",
                    clickToClose: !1
                })
            }
        }
    }
      , tt = (n(280),
    Object(Pe.a)(et, function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("section", {
            staticClass: "header-setting"
        }, [t("div", {
            attrs: {
                "data-growing-container": "",
                "data-growing-title": "导航头部设置"
            }
        }, [t("i", {
            staticClass: "hb_icon_setting",
            on: {
                click: this.showSetDialog
            }
        })])])
    }, [], !1, null, "a19d058a", null).exports)
      , nt = {
        name: "Languages",
        components: {
            A: Me.a
        },
        data: function() {
            return {
                host: ""
            }
        },
        mounted: function() {
            this.host = location.origin
        },
        computed: y()({}, Object(He.c)({
            langList: function(e) {
                return e.langList
            }
        }), {
            labelLang: function() {
                var e = this
                  , t = this.langList.filter(function(t) {
                    return t.key === e.$store.state.locale
                })[0];
                return t && t.value || "zh-cn"
            }
        }),
        methods: {
            setLocale: function(e) {
                localStorage.setItem("lang", e)
            }
        }
    }
      , rt = (n(281),
    Object(Pe.a)(nt, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("section", {
            staticClass: "header-languages"
        }, [n("p", {
            staticClass: "label-lang"
        }, [e._v(e._s(e.labelLang) + " "), n("i", {
            staticClass: "arrow-down"
        })]), e._v(" "), n("dl", e._l(e.$store.state.langList, function(t, r) {
            return n("dd", {
                key: r
            }, [n("A", {
                attrs: {
                    extra: "lang",
                    url: e.host + "/" + t.key
                },
                nativeOn: {
                    click: function(n) {
                        return e.setLocale(t.key)
                    }
                }
            }, [e._v("\n                " + e._s(t.value) + "\n                "), t.note ? n("span", [e._v(e._s(t.note))]) : e._e()])], 1)
        }), 0)])
    }, [], !1, null, "77ddcbea", null).exports)
      , it = {
        name: "UserCenterEnter",
        data: function() {
            return {
                forbidBackPath: ["LANG-login", "LANG-register", "LANG-reset-password"],
                vip: {},
                lang: "en-us",
                privilegeList: [],
                lpType: !1,
                subAccount: 0,
                userName: "",
                userAuthOk: !1,
                userAuth: {
                    userAuthName: ""
                }
            }
        },
        components: {
            A: Me.a
        },
        computed: y()({}, Object(He.c)({
            userInfo: function(e) {
                return e.user.userInfo
            },
            locale: function(e) {
                return e.locale || "zh-cn"
            },
            level: function(e) {
                return e.user.level
            },
            isLogin: function(e) {
                return e.user.isLogin
            }
        }), {
            showUserIcon: function() {
                var e = "hb_icon_user";
                return this.userInfo.user_type && 2 === this.userInfo.user_type && (e = "hb_icon_sub_account_header"),
                1 === this.level && (e = "hb_icon_user_diamond"),
                2 === this.level && (e = "hb_icon_user_gold"),
                e
            },
            showMainNav: function() {
                return 2 !== this.userInfo.user_type
            },
            showUserLevel: function() {
                var e = "user_center_level";
                return 1 === this.level && (e = "user_center_diamond"),
                2 === this.level && (e = "user_center_gold"),
                e
            },
            userRealName: function() {
                return this.userAuth.userAuthName ? "Hi, ".concat(this.userAuth.userAuthName) : this.userInfo.email || this.userInfo.phone || "--"
            }
        }),
        watch: {
            userInfo: {
                handler: function(e, t) {
                    this.formatData(e)
                },
                deep: !0
            }
        },
        mounted: function() {},
        methods: {
            formatData: function(e) {
                this.lpType = e.lp_type,
                sessionStorage.getItem("setGio") || (this.$store.dispatch("gio/setUserId", e.uuid),
                sessionStorage.setItem("setGio", 1))
            },
            logout: function() {
                document.querySelector("html").classList.remove("UC_IS_LOGIN"),
                localStorage.setItem("UC_IS_LOGIN", "0"),
                this.$store.dispatch("user/ucLogout")
            },
            showUserAuthInfo: function() {
                var e = o()(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!this.isLogin || this.userAuthOk) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3,
                                Fe.k.proUserAuth("get_auth_info");
                            case 3:
                                (t = e.sent).data && (this.userAuthOk = t.status,
                                this.userAuth.userAuthName = "".concat(t.data.auth_info.pro_first_name).concat(t.data.auth_info.pro_last_name));
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
        }
    }
      , at = (n(282),
    Object(Pe.a)(it, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("section", {
            staticClass: "header-user-center"
        }, [n("dl", {
            staticClass: "user-senter-login"
        }, [n("dd", [n("p", [n("A", {
            attrs: {
                url: "/" + e.locale + "/finance/"
            }
        }, [e._v("资产")])], 1), e._v(" "), e.showMainNav ? n("dl", [n("dd", [n("A", {
            attrs: {
                url: "/" + e.locale + "/finance/"
            }
        }, [e._v("充币&提币")])], 1), e._v(" "), n("dd", ["" + e.locale != "ko-kr" ? n("A", {
            attrs: {
                url: "/" + e.locale + "/finance/margin"
            }
        }, [e._v("杠杆")]) : e._e()], 1), e._v(" "), n("dd", [n("A", {
            attrs: {
                url: "/" + e.locale + "/finance/hb10"
            }
        }, [e._v("我的HB10")])], 1), e._v(" "), n("dd", [n("A", {
            attrs: {
                url: "/" + e.locale + "/ht/points/my_points/"
            }
        }, [e._v("我的点卡")])], 1)]) : e._e()]), e._v(" "), n("dd", [n("p", [n("A", {
            attrs: {
                url: "/" + e.locale + "/transac/?tab=0"
            }
        }, [e._v("订单")])], 1)]), e._v(" "), n("dd", {
            on: {
                mouseenter: e.showUserAuthInfo
            }
        }, [n("p", [n("i", {
            class: e.showUserIcon
        })]), e._v(" "), e.showMainNav ? n("dl", {
            staticClass: "user_level",
            class: e.showUserLevel
        }, [n("dt", {
            staticClass: "user_icon"
        }, [n("span", [e._v(e._s(e.userRealName))]), e._v(" "), n("span", [e._v("UID:" + e._s(this.userInfo.uid))])]), e._v(" "), n("dd", {
            staticClass: "user_text"
        }, [n("A", {
            attrs: {
                url: "/" + e.locale + "/topic/vip/",
                target: "_blank"
            }
        }, [n("span", [e._v(e._s(1 === this.level ? "钻石会员" : 2 === this.level ? "黄金会员" : "了解会员"))])])], 1), e._v(" "), n("dd", [n("A", {
            attrs: {
                url: "/" + e.locale + "/user_center/uc_info/"
            }
        }, [e._v("账号安全")])], 1), e._v(" "), n("dd", [n("A", {
            attrs: {
                url: "/" + e.locale + "/user_center/uc_auth/"
            }
        }, [e._v("身份认证")])], 1), e._v(" "), n("dd", [n("A", {
            attrs: {
                url: "/" + e.locale + "/user_center/uc_setting/"
            }
        }, [e._v("个人设置")])], 1), e._v(" "), n("dd", [n("A", {
            attrs: {
                url: "/" + e.locale + "/invite/",
                target: "_blank"
            }
        }, [n("span", [e._v("邀请好友")]), n("span", [e._v("返利")])])], 1), e._v(" "), e.lpType ? n("dd", [n("A", {
            attrs: {
                url: "/" + e.locale + "/ht/locked_position/"
            }
        }, [e._v("保证金管理")])], 1) : e._e(), e._v(" "), n("dd", [n("A", {
            attrs: {
                url: "/" + e.locale + "/apikey/"
            }
        }, [e._v("API管理")])], 1), e._v(" "), n("dd", [n("A", {
            attrs: {
                url: "/" + e.locale + "/subaccount/management/"
            }
        }, [e._v("子账号")])], 1), e._v(" "), n("dd", [n("a", {
            staticClass: "btn_logout",
            on: {
                click: e.logout
            }
        }, [e._v("退出")])])]) : n("dl", [n("dd", [n("A", {
            attrs: {
                url: "/" + e.locale + "/subaccount/management/account/"
            }
        }, [e._v("账号信息")])], 1), e._v(" "), n("dd", [n("A", {
            staticClass: "por",
            attrs: {
                url: "/" + e.locale + "/ht/points/my_points/"
            }
        }, [e._v("我的点卡")])], 1), e._v(" "), n("dd", [n("a", {
            staticClass: "btn_logout",
            on: {
                click: e.logout
            }
        }, [e._v("退出")])])])])]), e._v(" "), n("div", {
            staticClass: "user-senter-notlogin"
        }, [n("A", {
            attrs: {
                url: "/" + e.locale + "/login/",
                type: "nuxt-link",
                extra: e.forbidBackPath.includes(e.$route.name) ? "" : "backurl"
            }
        }, [e._v("登录")]), e._v(" "), n("A", {
            staticClass: "register",
            attrs: {
                type: "nuxt-link",
                extra: e.forbidBackPath.includes(e.$route.name) ? "" : "backurl",
                url: "/" + e.locale + "/register/"
            }
        }, [e._v("注册")])], 1)])
    }, [], !1, null, "2489c2c4", null).exports)
      , ot = {
        name: "VipTips",
        data: function() {
            return {
                bigCustomer: !1,
                diamond: !1,
                gold: !1
            }
        },
        computed: y()({}, Object(He.c)({
            level: function(e) {
                return e.user.level
            }
        })),
        mounted: function() {
            this.bigCustomer = sessionStorage.getItem("bigCustomer"),
            sessionStorage.removeItem("bigCustomer")
        },
        watch: {
            level: {
                handler: function(e) {
                    var t = this;
                    this.bigCustomer && 1 === this.level && (this.diamond = !0),
                    this.bigCustomer && 2 === this.level && (this.gold = !0),
                    setTimeout(function() {
                        t.diamond = !1,
                        t.gold = !1
                    }, 5e3)
                },
                deep: !0
            }
        }
    }
      , st = (n(283),
    Object(Pe.a)(ot, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("section", {
            staticClass: "vip_tips"
        }, [n("transition-group", {
            attrs: {
                name: "tips-fade"
            }
        }, [n("dl", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.gold,
                expression: "gold"
            }],
            key: "diamond",
            staticClass: "bigcustomer_tips gold"
        }, [n("dt", {
            staticClass: "title"
        }, [e._v("尊敬的大客户")]), e._v(" "), n("dd", {
            staticClass: "text"
        }, [e._v("欢迎来到火币Global，您正在享受火币黄金VIP特权")])]), e._v(" "), n("dl", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.diamond,
                expression: "diamond"
            }],
            key: "gold",
            staticClass: "bigcustomer_tips diamond"
        }, [n("dt", {
            staticClass: "title"
        }, [e._v("尊敬的大客户")]), e._v(" "), n("dd", {
            staticClass: "text"
        }, [e._v("欢迎来到火币Global，您正在享受火币钻石VIP特权")])])])], 1)
    }, [], !1, null, "169d556e", null).exports)
      , ct = {
        name: "Header",
        components: {
            A: Me.a,
            GroupCenterEnter: qe,
            NoticeList: Ve,
            Languages: rt,
            Settings: tt,
            UserCenterEnter: at,
            VipTips: st
        },
        computed: y()({}, Object(He.c)({
            userInfo: function(e) {
                return e.user.userInfo
            },
            isLogin: function(e) {
                return e.user.isLogin
            },
            level: function(e) {
                return e.user.level
            }
        }), {
            showNav: function() {
                return !this.isLogin || 2 !== this.userInfo.user_type
            },
            linkLocale: function() {
                var e = this.$store.state.locale;
                return e || "zh-cn"
            },
            contractualUrl: function() {
                var e = "https://www.hbdm.com/en-us/contract/exchange/"
                  , t = this.$store.state.locale;
                return "en-us" !== t && "zh-cn" !== t && "zh-hk" !== t || (e = e.replace("en-us", t)),
                e
            },
            themeCss: function() {
                return ["LANG-exchange", "LANG-margin", "LANG-exchange-symbol", "LANG-margin-symbol", "LANG", "LANG-topic-prime-lite-position"].includes(this.$route.name) ? "pro" : ""
            }
        }),
        created: function() {
            this.projectType = localStorage.projectType || "projectcenter"
        },
        data: function() {
            return {
                projectType: "projectcenter",
                path: this.$route.fullPath,
                marginShow: !~["en-us", "ko-kr"].indexOf(this.$store.state.locale)
            }
        },
        mounted: function() {
            this.isLogin && !this.level && 0 !== this.level && this.$store.dispatch("user/getLevel")
        },
        methods: {
            getActive: function(e) {
                return this.$route.name && this.$route.name.includes(e) || this.$route.query.type === e ? "nuxt-link-exact-active nuxt-link-active" : ""
            },
            changeProject: function(e) {
                localStorage.projectType = e,
                this.projectType = e,
                location.href = "/".concat(this.linkLocale, "/").concat(e)
            }
        }
    }
      , ut = (n(284),
    Object(Pe.a)(ct, function() {
        var e = this
          , t = e.$createElement
          , r = e._self._c || t;
        return r("header", {
            class: [e.themeCss, "LANG-orders" === e.$route.name ? "order-head" : ""]
        }, [r("GroupCenterEnter", {
            staticClass: "header-center-enter"
        }), e._v(" "), r("A", {
            staticClass: "logo",
            attrs: {
                href: "/" + e.linkLocale + "/"
            }
        }, [r("h1", [r("img", {
            staticClass: "logo_img",
            attrs: {
                alt: "Huobi火币全球站",
                src: n(254)
            }
        })])]), e._v(" "), r("nav", {
            staticClass: "list"
        }, [r("A", {
            attrs: {
                url: "/" + e.linkLocale + "/markets/"
            }
        }, [e._v("行情")]), e._v(" "), e.showNav ? r("A", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://c2c.huobi.co/" + e.linkLocale + "/trade/buy-btc/",
                target: "_blank"
            }
        }, [e._v("法币交易")]) : e._e(), e._v(" "), r("A", {
            class: e.getActive("exchange"),
            attrs: {
                url: "/" + e.linkLocale + "/exchange/"
            }
        }, [e._v("币币交易")]), e._v(" "), e.marginShow && e.showNav ? r("A", {
            class: e.getActive("margin"),
            attrs: {
                url: "/" + e.linkLocale + "/margin/"
            }
        }, [e._v("杠杆交易")]) : e._e(), e._v(" "), r("A", {
            staticClass: "contractual",
            attrs: {
                target: "_blank",
                url: e.contractualUrl
            }
        }, [e._v("合约交易\n            "), e.showNav ? r("span", {
            staticClass: "bubbling"
        }) : e._e()]), e._v(" "), e.showNav ? r("div", {
            staticClass: "select_box"
        }, [r("A", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "vote" === e.projectType,
                expression: "projectType === 'vote'"
            }],
            attrs: {
                url: "/" + e.linkLocale + "/vote"
            }
        }, [e._v("投票上币")]), e._v(" "), r("A", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "projectcenter" === e.projectType,
                expression: "projectType === 'projectcenter'"
            }],
            attrs: {
                url: "/" + e.linkLocale + "/projectcenter"
            }
        }, [e._v("项目中心")]), e._v(" "), r("ul", {
            staticClass: "select_con"
        }, [r("li", [r("A", {
            nativeOn: {
                click: function(t) {
                    return e.changeProject("vote")
                }
            }
        }, [e._v("投票上币")])], 1), e._v(" "), r("li", [r("A", {
            nativeOn: {
                click: function(t) {
                    return e.changeProject("projectcenter")
                }
            }
        }, [e._v("项目中心")])], 1)])], 1) : e._e()], 1), e._v(" "), r("Languages", {
            staticClass: "header-language"
        }), e._v(" "), r("Settings"), e._v(" "), r("NoticeList"), e._v(" "), r("UserCenterEnter"), e._v(" "), r("VipTips")], 1)
    }, [], !1, null, null, null).exports)
      , lt = [function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "/zh-cn/download/#exchange"
            }
        }, [this._v("\n                    客户端下载\n                ")])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                target: "_blank",
                href: "/zh-cn/assetintro/"
            }
        }, [this._v("\n                    数字资产介绍\n                ")])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                target: "_blank",
                href: "/zh-cn/topic/vip/"
            }
        }, [this._v("\n                    大客户权益\n                ")])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                target: "_blank",
                href: "/zh-cn/institution/"
            }
        }, [this._v("\n                    机构账户\n                ")])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                target: "_blank",
                href: "/zh-cn/ht/"
            }
        }, [this._v("\n                    HT介绍\n                ")])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://www.huobigroup.com/zh-cn/"
            }
        }, [this._v("\n                    火币集团\n                ")])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://www.huobigroup.com/zh-cn/jobs/"
            }
        }, [this._v("\n                    加入我们\n                ")])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                target: "_blank",
                href: "/zh-cn/application-center/"
            }
        }, [this._v("\n                    上币申请\n                ")])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", [t("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://huobiapi.github.io/docs/v1/cn/"
            }
        }, [this._v("\n                    API 文档\n                ")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("dl", [n("dt", [e._v("条款说明")]), e._v(" "), n("dd", [n("a", {
            attrs: {
                href: "/zh-cn/about/agreement/",
                target: "_blank"
            }
        }, [e._v("\n                    用户协议\n                ")])]), e._v(" "), n("dd", [n("a", {
            attrs: {
                href: "/zh-cn/about/privacy",
                target: "_blank"
            }
        }, [e._v("\n                    隐私条款\n                ")])]), e._v(" "), n("dd", [n("a", {
            attrs: {
                href: "/zh-cn/about/law/",
                target: "_blank"
            }
        }, [e._v("\n                    法律声明\n                ")])]), e._v(" "), n("dd", {
            staticClass: "footer-fee"
        }, [n("a", {
            attrs: {
                href: "/zh-cn/about/fee/",
                target: "_blank"
            }
        }, [e._v("\n                    费率\n                ")]), e._v(" "), n("i")])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", {
            staticClass: "footer-media"
        }, [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://www.facebook.com/huobiglobalofficial",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "hb_icon_facebook"
        })])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", {
            staticClass: "footer-media"
        }, [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://twitter.com/HuobiGlobal",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "hb_icon_twitter"
        })])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", {
            staticClass: "footer-media"
        }, [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://www.youtube.com/HuobiGlobal",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "hb_icon_youtube"
        })])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://www.huobichat.com/community/community.html",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "hb_icon_huobi_im"
        })])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://t.me/huobiproofficial",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "hb_icon_telegram"
        })])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", {
            staticClass: "footer-media"
        }, [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://medium.com/@huobiglobal",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "hb_icon_medium"
        })])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", {
            staticClass: "footer-media"
        }, [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://www.instagram.com/huobiglobalofficial",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "hb_icon_instagram"
        })])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", {
            staticClass: "footer-media"
        }, [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://weibo.com/p/1006063495498135/home?from=page_100606&mod=TAB&is_all=1#place",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "hb_icon_weibo"
        })])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("dd", {
            staticClass: "footer-media"
        }, [t("a", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://coinmarketcap.com/zh/exchanges/huobi-global/",
                target: "_blank"
            }
        }, [t("i", {
            staticClass: "hb_icon_coinmarketcap"
        })])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("section", {
            staticClass: "copyright"
        }, [t("img", {
            attrs: {
                src: n(285),
                alt: "huobi global"
            }
        }), this._v(" "), t("p", [this._v("© 2013-2019 Huobi Global")])])
    }
    ]
      , dt = n(190)
      , ht = {
        name: "Footer",
        components: {
            A: Me.a
        },
        mounted: function() {},
        methods: {
            openMarginGuide: function() {
                var e = o()(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                "en-us" !== this.$store.state.locale ? "LANG-margin" === this.$route.name ? this.$modal.show(dt.a, {}, {
                                    width: 650,
                                    height: 500,
                                    clickToClose: !1
                                }) : (localStorage.setItem("marginGuide", 1),
                                location.href = "/".concat(this.$store.state.locale, "/margin/")) : (localStorage.setItem("marginGuide", 1),
                                location.href = "/".concat(this.$store.state.locale, "/exchange/"));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
        },
        computed: y()({}, Object(He.c)({
            isLogin: function(e) {
                return e.user.isLogin
            }
        }))
    }
      , ft = (n(287),
    Object(Pe.a)(ht, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("footer", {
            class: "en-us" === e.$store.state.locale ? "" : "pro"
        }, [n("section", [n("dl", [n("dt", [e._v("工具")]), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), n("dd", ["zh-cn" !== e.$store.state.locale ? n("a", {
            attrs: {
                rel: "noopener noreferrer",
                target: "_blank",
                href: "https://blog.hbg.com/"
            }
        }, [e._v("\n                    Huobi Blog\n                ")]) : e._e()])]), e._v(" "), n("dl", [n("dt", [e._v("关于")]), e._v(" "), e._m(5), e._v(" "), n("dd", ["zh-cn" === e.$store.state.locale ? n("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://huobiglobal.zendesk.com/hc/zh-cn"
            }
        }, [e._v("\n                    帮助中心\n                ")]) : n("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://huobiglobal.zendesk.com/hc/en-us"
            }
        }, [e._v("\n                    帮助中心\n                ")])]), e._v(" "), e._m(6), e._v(" "), e._m(7), e._v(" "), e._m(8), e._v(" "), n("dd", ["ko-kr" !== e.$store.state.locale ? n("a", {
            attrs: {
                href: "javascript:;"
            },
            on: {
                click: e.openMarginGuide
            }
        }, [e._v("\n                    杠杆介绍\n                ")]) : e._e()])]), e._v(" "), e._m(9), e._v(" "), n("dl", {
            staticClass: "media"
        }, [n("dt", [e._v("官方媒体")]), e._v(" "), e._m(10), e._v(" "), e._m(11), e._v(" "), e._m(12), e._v(" "), "zh-cn" === e.$store.state.locale ? n("dd", {
            staticClass: "footer-media"
        }, [e._m(13)]) : n("dd", {
            staticClass: "footer-media"
        }, [e._m(14)]), e._v(" "), e._m(15), e._v(" "), e._m(16), e._v(" "), e._m(17), e._v(" "), e._m(18)])]), e._v(" "), e._m(19)])
    }, lt, !1, null, null, null).exports)
      , pt = {
        name: "Notification",
        data: function() {
            return {
                show: !1
            }
        },
        mounted: function() {
            this.handle()
        },
        methods: {
            handle: function() {
                "www.huobi.com" === location.hostname && (this.show = !sessionStorage.getItem("Notification"),
                this.$emit("show", this.show))
            },
            handleClickClose: function() {
                this.show = !1,
                this.$emit("show", this.show),
                sessionStorage.setItem("Notification", "done")
            },
            handleNotificationClose: function() {
                window.open("https://www.hbg.com/" + this.$store.state.locale, "_blank")
            }
        }
    }
      , mt = (n(288),
    Object(Pe.a)(pt, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("section", [e.show ? n("div", {
            staticClass: "notification_box",
            on: {
                click: e.handleNotificationClose
            }
        }, [n("div", {
            staticClass: "notification_center"
        }, [n("div", {
            staticClass: "notification_left"
        }), e._v(" "), n("div", {
            staticClass: "notification_text"
        }, [n("p", {
            domProps: {
                innerHTML: e._s("尊敬的用户，火币全球站近期将对所有访问地址进行整合，<br>之后请通过<span>www.hbg.com</span>访问火币全球站，为不影响访问体验，请您访问并收藏该地址。")
            }
        })]), e._v(" "), e._m(0)]), e._v(" "), n("div", {
            staticClass: "notification_close",
            on: {
                click: function(t) {
                    return t.stopPropagation(),
                    e.handleClickClose(t)
                }
            }
        }, [n("a", {
            staticClass: "notification_close_btn",
            attrs: {
                href: "javascript:void(0)"
            }
        })])]) : e._e()])
    }, [function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("div", {
            staticClass: "notification_right"
        }, [t("button", [this._v("立即前往")])])
    }
    ], !1, null, null, null).exports)
      , gt = {
        api: "api.huobi.com",
        www: "content.huobi.pro",
        uc: "uc.huobi.pro",
        vote: "api.hadax.com",
        pro: "www.huobipro.com",
        huobi: "www.huobi.com",
        otc: "c2c.huobi.com",
        hadax: "www.hadax.com",
        info: "https://huobi-info-api.huobi.cn/portal-gateway"
    }
      , vt = {
        name: "ContentLayout",
        components: {
            Header: ut,
            Footer: ft,
            Notification: mt
        },
        computed: {
            classname: function() {
                return "index" === this.$route.name ? "homepage" : "exchange" === this.$route.name ? "exchange" : ""
            },
            footerShow: function() {
                return "exchange" !== this.$route.name
            }
        },
        beforeMount: function() {
            localStorage.setItem("lang", "en-us"),
            this.addScript()
        },
        methods: {
            pagehostreplace: function(e, t) {
                var n = gt[t];
                n && Ue()(document.querySelectorAll(".".concat(e))).forEach(function(e) {
                    var t = e.getAttribute("href").trim()
                      , r = "";
                    0 === t.indexOf("http://") || 0 === t.indexOf("https://") ? ("/" !== t[t.length - 1] && (t += "/"),
                    r = -1 !== t.indexOf("https") ? t.replace(/^http(s)?:\/\/(.*?)\//, "https://".concat(n, "/")) : t.replace(/^http(s)?:\/\/(.*?)\//, "http://".concat(n, "/"))) : r = "/" === t[0] ? "".concat(n).concat(t) : "".concat(n, "/").concat(t),
                    e.setAttribute("href", r)
                })
            },
            addScript: function() {
                var e = this;
                setTimeout(function() {
                    e.pagehostreplace("page_hadax_link", "hadax"),
                    function(e, t, n) {
                        function r(e) {
                            var r = t.createElement(n);
                            r.async = !0,
                            r.src = e,
                            t.body.appendChild(r)
                        }
                        r("https://www.googletagmanager.com/gtag/js?id=UA-108346576-1"),
                        e.dataLayer = e.dataLayer || [],
                        e.gtag = e.gtag || function() {
                            dataLayer.push(arguments)
                        }
                        ,
                        gtag("js", new Date),
                        gtag("config", "UA-108346576-1"),
                        gtag("config", "UA-108346576-1", {
                            custom_map: {
                                dimension1: "UUID"
                            }
                        }),
                        r("https://assets.growingio.com/2.1/gio.js");
                        var i = e.gio = e.gio || function() {
                            (i.q = i.q || []).push(arguments)
                        }
                        ;
                        gio("init", "8838a5745a973a12", {}),
                        gio("config", {
                            hashtag: !0
                        }),
                        gio("send")
                    }(window, document, "script")
                }, 0)
            }
        },
        mounted: function() {
            var e = o()(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }()
    }
      , _t = (n(289),
    Object(Pe.a)(vt, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("section", {
            staticClass: "main",
            class: e.$store.state.exchange.theme
        }, [n("Notification"), e._v(" "), n("Header", {
            class: e.classname
        }), e._v(" "), n("div", {
            staticClass: "header-bg"
        }), e._v(" "), n("nuxt", {
            staticClass: "content"
        }), e._v(" "), e.footerShow ? n("Footer") : e._e()], 1)
    }, [], !1, null, null, null).exports)
      , bt = {
        name: "TopFixed",
        data: function() {
            return {
                show: !1
            }
        },
        components: {
            A: Me.a
        },
        props: {
            link: {
                type: [String, Boolean],
                default: ""
            },
            defaultShow: {
                type: Boolean,
                default: !0
            }
        },
        watch: {
            defaultShow: {
                handler: function(e) {
                    this.show = e
                },
                immediate: !0
            }
        },
        methods: {
            hideBanner: function() {
                this.show = !1
            }
        }
    }
      , yt = (n(290),
    {
        name: "TopTimer",
        components: {
            TopBanner: Object(Pe.a)(bt, function() {
                var e = this.$createElement
                  , t = this._self._c || e;
                return t("section", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: this.show,
                        expression: "show"
                    }],
                    staticClass: "top-fixed"
                }, [t("div", {
                    staticClass: "top-fixed-container"
                }, [t("A", {
                    staticClass: "link",
                    attrs: {
                        url: this.link ? this.link : "javascript:void(0);"
                    }
                }, [this._t("default")], 2), this._v(" "), t("button", {
                    on: {
                        click: this.hideBanner
                    }
                })], 1)])
            }, [], !1, null, "3c684f69", null).exports,
            TimeLeft: n(153).a
        },
        data: function() {
            return {
                timerShow: !1,
                endDate: ""
            }
        },
        computed: y()({
            roundIntro: function() {
                return 2 === this.primeStatus.state ? this.primeInfo.roundLength > 1 ? "第%s轮交易已结束" : "交易结束" : this.primeStatus.round ? this.primeInfo.roundLength > 1 ? "第%s轮交易" : this.$options.filters.ts("本期共%s轮", this.primeInfo.rounds && this.primeInfo.roundLength) : ""
            },
            roundText: function() {
                if (2 !== this.primeStatus.state)
                    return 1 === this.primeStatus.state ? "距离结束还有" : "距离开始还有"
            },
            link: function() {
                var e = this.primeInfo.currency
                  , t = this.primeInfo.symbolCode && this.primeInfo.symbolCode.replace(e, "");
                return "/".concat(this.locale, "/exchange/").concat(e, "_").concat(t, "/")
            }
        }, Object(He.c)({
            primeInfo: function(e) {
                return e.exchange.primeInfo
            },
            primeStatus: function(e) {
                return e.exchange.primeStatus
            },
            primeEnable: "primeEnable",
            locale: function(e) {
                return e.locale || "zh-cn"
            }
        }), {
            isPrimeLite: function() {
                return "primeLite" === this.primeInfo.primeType
            }
        }),
        watch: {
            primeInfo: function(e) {
                e.currency && (this.timerShow = "en-us" === this.$route.name || "LANG" === this.$route.name,
                this.endDate = Object(Xe.r)((e.rounds[e.rounds.length - 1] || {}).roundEndTime || +new Date))
            }
        },
        mounted: function() {
            var e = o()(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!this.primeEnable || "en-us" !== this.$route.name && "LANG" !== this.$route.name) {
                                e.next = 3;
                                break
                            }
                            return e.next = 3,
                            this.$store.dispatch("exchange/getPrimeInfo");
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }()
    })
      , wt = (n(294),
    Object(Pe.a)(yt, function() {
        var e = this
          , t = e.$createElement
          , r = e._self._c || t;
        return e.timerShow ? r("section", [r("TopBanner", {
            staticClass: "prime-timer",
            class: {
                "prime-lite": e.isPrimeLite
            },
            attrs: {
                link: e.link
            }
        }, [r("div", {
            staticClass: "top-timer"
        }, [r("div", {
            staticClass: "prime-logo"
        }, [e.isPrimeLite ? r("img", {
            attrs: {
                src: n(223),
                alt: "Huobi Prime Lite"
            }
        }) : r("img", {
            attrs: {
                src: n(219),
                alt: "Huobi Prime"
            }
        })]), e._v(" "), r("dl", [r("dd", [r("span", [e._v("Huobi Prime " + e._s(e.isPrimeLite ? "Lite" : ""))]), e._v(" "), r("span", [e._v(e._s((e.primeInfo.currency || "---").toUpperCase()) + " " + e._s(e._f("ts")(e.roundIntro, e.primeStatus.round)))])]), e._v(" "), 2 !== e.primeStatus.state ? r("dd", [r("span", [e._v(e._s(e.roundText))]), e._v(" "), r("TimeLeft")], 1) : r("dd", [r("span", [e._v("结束时间")]), e._v(e._s(e.endDate) + "\n                ")])])])])], 1) : e._e()
    }, [], !1, null, "9a9bb828", null).exports)
      , xt = n(82)
      , kt = {
        name: "DefaultLayout",
        head: n(151).a,
        components: {
            Header: ut,
            Footer: ft,
            PrimeTimer: wt
        },
        computed: y()({
            classname: function() {
                var e = this.$route.name;
                return e && e.includes("index") || "LANG" === e || "en-us" === e || e && e.includes("topic-prime") ? (this.$store.commit("exchange/SET_EXCHANGE_TYPE", "exchange"),
                "homepage") : e && (e.includes("LANG-exchange") || e.includes("LANG-orderbooks") || e.includes("LANG-margin") || e.includes("en-us-exchange")) ? e.includes("en-us-exchange") ? "en-exchange" : "global-exchange" : ""
            },
            theme: function() {
                return localStorage.theme || this.$store.state.exchange.theme
            },
            footerShow: function() {
                var e = this.$route.name;
                return !(e && (e.includes("en-us-exchange") || e.includes("en-us-margin") || e.includes("LANG-download")))
            }
        }, Object(He.c)({
            userInfo: function(e) {
                return e.user.userInfo
            },
            isLogin: function(e) {
                return e.user.isLogin
            }
        })),
        created: function() {
            var e = this.$route.fullPath.includes("margin") ? "margin" : "exchange";
            this.$route.name && this.$route.name.includes("en-us-exchange") && (this.isEnExchange = !0),
            this.$store.commit("exchange/SET_EXCHANGE_TYPE", e)
        },
        data: function() {
            return {
                heightState: !1,
                isEnExchange: !1
            }
        },
        methods: {
            show: function(e) {
                this.heightState = e
            }
        },
        mounted: function() {
            var e = o()(regeneratorRuntime.mark(function e() {
                var t, n, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            t = this.$store.state.user.isLogin,
                            n = this.$store.state.user.userInfo.account_name,
                            t && !n && this.$store.dispatch("user/getUserInfo"),
                            xt.a.change(function(e) {
                                r.$store.commit("SET_PAGE_VISIBLE", e)
                            });
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        watch: {
            isLogin: {
                handler: function(e) {
                    document.querySelector("html").classList[e ? "add" : "remove"]("UC_IS_LOGIN")
                },
                immediate: !0
            }
        }
    }
      , Tt = (n(300),
    Object(Pe.a)(kt, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("section", {
            staticClass: "main",
            class: e.theme
        }, [n("div", [n("PrimeTimer"), e._v(" "), n("Header", {
            class: e.classname
        }), e._v(" "), n("div", {
            staticClass: "header-bg"
        })], 1), e._v(" "), n("router-view", {
            staticClass: "page"
        }), e._v(" "), n("Footer", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.footerShow,
                expression: "footerShow"
            }],
            class: e.classname,
            attrs: {
                show: e.footerShow
            }
        })], 1)
    }, [], !1, null, null, null).exports)
      , Ot = {
        name: "Demo",
        beforeMount: function() {}
    }
      , Ct = Object(Pe.a)(Ot, function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("section", {
            staticClass: "main"
        }, [t("nuxt", {
            staticClass: "page"
        })], 1)
    }, [], !1, null, "ad903a74", null).exports
      , Et = {
        name: "LoginLayout",
        components: {
            Header: ut,
            Languages: rt,
            A: Me.a,
            Notification: mt
        },
        data: function() {
            return {
                backURL: ""
            }
        },
        mounted: function() {
            this.backURL = this.$route.params.backURL
        },
        computed: y()({}, Object(He.c)({
            locale: function(e) {
                return e.locale || "zh-cn"
            }
        }), {
            theme: function() {
                return localStorage.theme || this.$store.state.exchange.theme
            },
            showLink: function() {
                return this.$route.name
            }
        }),
        methods: {
            linkUrl: function(e) {
                return this.backURL ? "/".concat(this.locale, "/").concat(e, "?backUrl=").concat(this.backURL) : "/".concat(this.locale, "/").concat(e)
            }
        }
    }
      , St = (n(301),
    Object(Pe.a)(Et, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("section", {
            staticClass: "main layout-login",
            class: e.theme
        }, [n("Notification"), e._v(" "), n("Header"), e._v(" "), n("nuxt", {
            staticClass: "page"
        }), e._v(" "), n("footer", {
            staticClass: "login"
        }, [n("ul", {
            staticClass: "footer_ul"
        }, [n("li", [n("A", {
            attrs: {
                tyep: "nuxt-link",
                url: "/" + e.$store.state.locale + "/"
            }
        }, [e._v("首页")])], 1), e._v(" "), n("li", [n("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://www.huobigroup.com/" + ("zh-cn" === e.$store.state.locale ? "zh-cn" : "en-us") + "/"
            }
        }, [e._v("火币集团")])]), e._v(" "), n("li", [n("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://huobiglobal.zendesk.com/hc/" + (e.$store.state.locale || "en-us") + "/"
            }
        }, [e._v("帮助中心")])]), e._v(" "), n("li", [n("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "/" + (e.$store.state.locale || "en-us") + "/download/"
            }
        }, [e._v("客户端下载")])]), e._v(" "), e._m(0)])])], 1)
    }, [function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("li", [t("span", [this._v("© 2013-2019 Huobi Global")])])
    }
    ], !1, null, "149198d2", null).exports)
      , At = (n(14),
    {
        name: "MobileDefaultLayout",
        head: {
            script: [Xe.f, {
                innerHTML: "window.appTokenCallback = function() {};",
                type: "text/javascript"
            }],
            __dangerouslyDisableSanitizers: ["script", "noscript"]
        },
        components: {
            Header: ut,
            Footer: ft,
            Notification: mt
        },
        computed: y()({
            classname: function() {
                var e = this.$route.name;
                return e && e.includes("index") || "LANG" === e || "en-us" === e ? (this.$store.commit("exchange/SET_EXCHANGE_TYPE", "exchange"),
                "homepage") : e && (e.includes("LANG-exchange") || e.includes("LANG-orderbooks") || e.includes("LANG-margin") || e.includes("en-us-exchange")) ? e.includes("en-us-exchange") ? "en-exchange" : "global-exchange" : e && e.includes("LANG-topic-vip") || e.includes("LANG-ht") ? "homepage" : ""
            },
            theme: function() {
                return localStorage.theme || this.$store.state.exchange.theme
            },
            footerShow: function() {
                var e = this.$route.name
                  , t = void 0 === e ? "" : e;
                return !(t.includes("en-us-exchange") || t.includes("en-us-margin"))
            }
        }, Object(He.c)({
            userInfo: function(e) {
                return e.user.userInfo
            },
            isLogin: function(e) {
                return e.user.isLogin
            }
        })),
        created: function() {
            var e = o()(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            t = this.$route.fullPath.includes("margin") ? "margin" : "exchange",
                            this.$route.name.includes("en-us-exchange") && (this.isEnExchange = !0),
                            this.$store.commit("exchange/SET_EXCHANGE_TYPE", t);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        data: function() {
            return {
                heightState: !1,
                isEnExchange: !1
            }
        },
        watch: {
            $route: {
                handler: function(e) {
                    var t = this;
                    this.$nextTick(function() {
                        t.resize && t.resize()
                    })
                },
                immediate: !1
            },
            isLogin: {
                handler: function(e) {
                    document.querySelector("html").classList[e ? "add" : "remove"]("UC_IS_LOGIN")
                },
                immediate: !0
            }
        },
        methods: {
            show: function(e) {
                this.heightState = e
            }
        },
        mounted: function() {
            var e = o()(regeneratorRuntime.mark(function e() {
                var t, n, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            t = this.$store.state.user.isLogin,
                            n = this.$store.state.user.userInfo.account_name,
                            t && !n && this.$store.dispatch("user/getUserInfo"),
                            xt.a.change(function(e) {
                                r.$store.commit("SET_PAGE_VISIBLE", e)
                            });
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        beforeDestroy: function() {
            document.querySelector("html").classList.remove("mobile"),
            document.querySelector("[name=viewport]").setAttribute("content", "")
        }
    })
      , Lt = (n(302),
    {
        _content: _t,
        _default: Tt,
        _demo: Ct,
        _login: St,
        _m_default: Object(Pe.a)(At, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", {
                staticClass: "main mobile-content",
                class: e.theme
            }, [n("div", {
                class: [e.heightState ? "has-notify" : "none-notify", e.isEnExchange ? "en-exchange-top" : ""]
            }, [n("Notification", {
                staticClass: "m_hide",
                on: {
                    show: e.show
                }
            }), e._v(" "), n("Header", {
                staticClass: "m_hide",
                class: e.classname
            }), e._v(" "), n("div", {
                staticClass: "header-bg m_hide"
            })], 1), e._v(" "), n("nuxt", {
                staticClass: "page"
            }), e._v(" "), n("Footer", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.footerShow,
                    expression: "footerShow"
                }],
                staticClass: "m_hide",
                class: e.classname,
                attrs: {
                    show: e.footerShow
                }
            })], 1)
        }, [], !1, null, "07c89efc", null).exports
    })
      , Nt = {
        head: {
            title: "Huobi Global | The Leading Global Digital Asset Exchange",
            meta: [{
                charset: "utf-8"
            }, {
                hid: "description",
                name: "description",
                content: "Huobi Global provide secure,stable and reliable digital asset trading and asset management services to millions of users in over 130 countries around the world"
            }, {
                hid: "keywords",
                name: "keywords",
                content: "Huobi,Huobi Pro,Huobi Global"
            }, {
                hid: "format-detection",
                name: "format-detection",
                content: "telephone=no"
            }, {
                "http-equiv": "X-UA-Compatible",
                content: "IE=edge,chrome=1"
            }, {
                name: "renderer",
                content: "webkit"
            }],
            link: [{
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            }, {
                preload: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            }, {
                rel: "dns-prefetch",
                href: "//www.huobi.co"
            }, {
                rel: "dns-prefetch",
                href: "//file.huobiasia.vip"
            }, {
                rel: "dns-prefetch",
                href: "//www.huobi.br.com"
            }, {
                rel: "dns-prefetch",
                href: "//assets.zendesk.com"
            }, {
                rel: "dns-prefetch",
                href: "//huobiglobal.zendesk.com"
            }, {
                rel: "preconnect",
                href: "//file.hbfile.net"
            }],
            script: [{
                innerHTML: 'var theme = localStorage.exchangeTheme || "hb-night"; if(location.href.indexOf("transac") === -1) {document.querySelector("html").classList.add(theme);}',
                type: "text/javascript"
            }, {
                innerHTML: 'if(!("from"in Array&&"values"in Object)){var s=document.createElement("script");s.src="/polyfill.min.js",document.head.appendChild(s)}',
                type: "text/javascript"
            }],
            __dangerouslyDisableSanitizers: ["script", "noscript"],
            style: []
        },
        render: function(e, t) {
            var n = e("nuxt-loading", {
                ref: "loading"
            })
              , r = e(this.layout || "nuxt")
              , i = e("div", {
                domProps: {
                    id: "__layout"
                },
                key: this.layoutName
            }, [r])
              , a = e("transition", {
                props: {
                    name: "layout",
                    mode: "out-in"
                },
                on: {
                    beforeEnter: function(e) {
                        window.$nuxt.$nextTick(function() {
                            window.$nuxt.$emit("triggerScroll")
                        })
                    }
                }
            }, [i]);
            return e("div", {
                domProps: {
                    id: "__nuxt"
                }
            }, [n, a])
        },
        data: function() {
            return {
                layout: null,
                layoutName: ""
            }
        },
        beforeCreate: function() {
            s.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
        },
        created: function() {
            s.default.prototype.$nuxt = this,
            "undefined" != typeof window && (window.$nuxt = this),
            this.error = this.nuxt.error
        },
        mounted: function() {
            this.$loading = this.$refs.loading
        },
        watch: {
            "nuxt.err": "errorChanged"
        },
        methods: {
            errorChanged: function() {
                this.nuxt.err && this.$loading && (this.$loading.fail && this.$loading.fail(),
                this.$loading.finish && this.$loading.finish())
            },
            setLayout: function(e) {
                return e && Lt["_" + e] || (e = "default"),
                this.layoutName = e,
                this.layout = Lt["_" + e],
                this.layout
            },
            loadLayout: function(e) {
                return e && Lt["_" + e] || (e = "default"),
                Promise.resolve(Lt["_" + e])
            }
        },
        components: {
            NuxtLoading: Be
        }
    };
    n(123);
    s.default.use(He.a);
    var It = n(303)
      , Rt = It.keys()
      , Pt = {}
      , jt = Rt.find(function(e) {
        return e.includes("./index.")
    });
    if (jt && (Pt = tn(jt)),
    "function" != typeof Pt) {
        Pt.modules || (Pt.modules = {});
        var $t = !0
          , Dt = !1
          , Bt = void 0;
        try {
            for (var Gt, Ut = Rt[Symbol.iterator](); !($t = (Gt = Ut.next()).done); $t = !0) {
                var Ht = Gt.value
                  , Mt = Ht.replace(/^\.\//, "").replace(/\.(js|mjs)$/, "");
                if ("index" !== Mt) {
                    var zt = Mt.split(/\//);
                    if (Mt = zt[zt.length - 1],
                    ["state", "getters", "actions", "mutations"].includes(Mt)) {
                        rn(nn(Pt, zt, !0), Ht, Mt)
                    } else {
                        var qt = "index" === Mt;
                        qt && zt.pop();
                        var Ft = nn(Pt, zt)
                          , Kt = tn(Ht);
                        if (Ft[Mt = zt.pop()] = Ft[Mt] || {},
                        qt) {
                            var Vt = {};
                            if (Ft[Mt].appends) {
                                Vt.appends = Ft[Mt].appends;
                                var Qt = !0
                                  , Yt = !1
                                  , Jt = void 0;
                                try {
                                    for (var Xt, Wt = Ft[Mt].appends[Symbol.iterator](); !(Qt = (Xt = Wt.next()).done); Qt = !0) {
                                        var Zt = Xt.value;
                                        Vt[Zt] = Ft[Mt][Zt]
                                    }
                                } catch (e) {
                                    Yt = !0,
                                    Jt = e
                                } finally {
                                    try {
                                        Qt || null == Wt.return || Wt.return()
                                    } finally {
                                        if (Yt)
                                            throw Jt
                                    }
                                }
                            }
                            Ft[Mt] = Object.assign({}, Ft[Mt], Kt, Vt),
                            Ft[Mt].namespaced = !0
                        } else
                            Ft[Mt] = Object.assign({}, Kt, Ft[Mt]),
                            Ft[Mt].namespaced = !0
                    }
                }
            }
        } catch (e) {
            Dt = !0,
            Bt = e
        } finally {
            try {
                $t || null == Ut.return || Ut.return()
            } finally {
                if (Dt)
                    throw Bt
            }
        }
    }
    var en = Pt instanceof Function ? Pt : function() {
        return new He.a.Store(Object.assign({
            strict: !1
        }, Pt, {
            state: Pt.state instanceof Function ? Pt.state() : {}
        }))
    }
    ;
    function tn(e) {
        var t = It(e)
          , n = t.default || t;
        if (n.commit)
            throw new Error("[nuxt] store/" + e.replace("./", "") + " should export a method which returns a Vuex instance.");
        if (n.state && "function" != typeof n.state)
            throw new Error("[nuxt] state should be a function in store/" + e.replace("./", ""));
        return n
    }
    function nn(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === t.length)
            return n ? e : e.modules;
        var r = t.shift();
        return e.modules[r] = e.modules[r] || {},
        e.modules[r].namespaced = !0,
        e.modules[r].modules = e.modules[r].modules || {},
        nn(e.modules[r], t, n)
    }
    function rn(e, t, n) {
        var r = It(t);
        e.appends = e.appends || [],
        e.appends.push(n),
        e[n] = r.default || r
    }
    for (var an = n(197), on = n.n(an), sn = function(e, t) {
        var n = e.req
          , r = e.res
          , i = !0;
        t("cookies", on()(n, r, i))
    }, cn = n(81), un = n.n(cn), ln = {
        setHeader: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common"
              , r = !0
              , i = !1
              , a = void 0;
            try {
                for (var o, s = (Array.isArray(n) ? n : [n])[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                    var c = o.value;
                    if (!t)
                        return void delete this.defaults.headers[c][e];
                    this.defaults.headers[c][e] = t
                }
            } catch (e) {
                i = !0,
                a = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i)
                        throw a
                }
            }
        },
        setToken: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common"
              , r = e ? (t ? t + " " : "") + e : null;
            this.setHeader("Authorization", r, n)
        },
        onRequest: function(e) {
            this.interceptors.request.use(function(t) {
                return e(t) || t
            })
        },
        onResponse: function(e) {
            this.interceptors.response.use(function(t) {
                return e(t) || t
            })
        },
        onRequestError: function(e) {
            this.interceptors.request.use(void 0, function(t) {
                return e(t) || Promise.reject(t)
            })
        },
        onResponseError: function(e) {
            this.interceptors.response.use(void 0, function(t) {
                return e(t) || Promise.reject(t)
            })
        },
        onError: function(e) {
            this.onRequestError(e),
            this.onResponseError(e)
        }
    }, dn = function() {
        var e = fn[hn];
        ln["$" + e] = function() {
            return this[e].apply(this, arguments).then(function(e) {
                return e && e.data
            })
        }
    }, hn = 0, fn = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; hn < fn.length; hn++)
        dn();
    var pn = function(e, t) {
        var n = {
            baseURL: "http://localhost:3333/",
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                delete: {},
                get: {},
                head: {},
                post: {},
                put: {},
                patch: {}
            }
        };
        n.headers.common = e.req && e.req.headers ? Object.assign({}, e.req.headers) : {},
        delete n.headers.common.accept,
        delete n.headers.common.host,
        delete n.headers.common["cf-ray"],
        delete n.headers.common["cf-connecting-ip"];
        var r = un.a.create(n);
        !function(e) {
            for (var t in ln)
                e[t] = ln[t].bind(e)
        }(r),
        function(e, t) {
            var n = {
                finish: function() {},
                start: function() {},
                fail: function() {},
                set: function() {}
            }
              , r = function() {
                return window.$nuxt && window.$nuxt.$loading && window.$nuxt.$loading.set ? window.$nuxt.$loading : n
            }
              , i = 0;
            e.onRequest(function(e) {
                e && !1 === e.progress || i++
            }),
            e.onResponse(function(e) {
                e && e.config && !1 === e.config.progress || --i <= 0 && (i = 0,
                r().finish())
            }),
            e.onError(function(e) {
                e && e.config && !1 === e.config.progress || (i--,
                r().fail(),
                r().finish())
            });
            var a = function(e) {
                if (i) {
                    var t = 100 * e.loaded / (e.total * i);
                    r().set(Math.min(100, t))
                }
            };
            e.defaults.onUploadProgress = a,
            e.defaults.onDownloadProgress = a
        }(r),
        e.$axios = r,
        t("axios", r)
    }
      , mn = n(3);
    s.default.filter("t2d", Xe.r),
    s.default.filter("fix", mn.c),
    s.default.filter("s2l", Je.b),
    s.default.filter("ts", Xe.s);
    var gn = function(e, t) {
        var n = e.store;
        t("upDateTs", o()(regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (!(+new Date - n.state.ts > 12e4)) {
                            e.next = 6;
                            break
                        }
                        return n.commit("SET_TS", +new Date),
                        e.abrupt("return", !0);
                    case 6:
                        return e.abrupt("return", !1);
                    case 7:
                    case "end":
                        return e.stop()
                    }
            }, e)
        })))
    }
      , vn = (n(26),
    function(e) {
        return _n.apply(this, arguments)
    }
    );
    function _n() {
        return (_n = o()(regeneratorRuntime.mark(function e(t) {
            var r, i, a, o;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return r = t.store,
                        i = t.route,
                        a = i.name,
                        ["exchange"].indexOf(a),
                        e.next = 7,
                        n.e(64).then(n.t.bind(null, 751, 7));
                    case 7:
                        (o = e.sent).getPromise().then(function(e) {
                            var t = e.map(function(e) {
                                return e.value
                            })
                              , n = o.x64hash128(t.join(""), 31);
                            r.commit("SET_FP", n)
                        });
                    case 9:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }))).apply(this, arguments)
    }
    var bn = n(96)
      , yn = (n(225),
    function(e) {
        e.app;
        var t = e.route
          , n = e.store
          , r = (e.redirect,
        t.params.LANG || t.path.split("/")[1])
          , i = "zh-cn";
        if (r = r || localStorage.lang,
        i = localStorage.lang || i,
        "/" !== t.path)
            if (bn.a.map(function(e) {
                return e.key
            }).includes(r)) {
                n.commit("SET_LOCALE", r);
                var a = document.querySelector("html");
                a.classList.remove("zh-cn"),
                a.classList.add(r),
                localStorage.setItem("lang", r)
            } else
                localStorage.setItem("lang", "zh-cn"),
                window.location.href = "/".concat(i).concat(t.fullPath)
    }
    )
      , wn = (n(321),
    n(97),
    n(198))
      , xn = n.n(wn)
      , kn = (n(327),
    n(199))
      , Tn = n.n(kn)
      , On = (n(329),
    n(200))
      , Cn = n.n(On)
      , En = (n(330),
    n(201))
      , Sn = n.n(En)
      , An = (n(189),
    n(80))
      , Ln = n.n(An)
      , Nn = n(202)
      , In = n.n(Nn)
      , Rn = n(146)
      , Pn = n.n(Rn)
      , jn = n(203)
      , $n = n.n(jn)
      , Dn = n(204)
      , Bn = n.n(Dn)
      , Gn = n(205)
      , Un = n.n(Gn)
      , Hn = n(206)
      , Mn = n.n(Hn)
      , zn = n(207)
      , qn = n.n(zn)
      , Fn = n(208)
      , Kn = n.n(Fn)
      , Vn = n(209)
      , Qn = n.n(Vn)
      , Yn = n(210)
      , Jn = n.n(Yn)
      , Xn = n(211)
      , Wn = n.n(Xn)
      , Zn = n(212)
      , er = n.n(Zn)
      , tr = n(213)
      , nr = n.n(tr);
    s.default.use(Sn.a),
    s.default.use(Cn.a),
    s.default.use(Tn.a),
    s.default.use(xn.a);
    var rr = function(e) {
        var t = e.store.state.locale;
        !function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "zh-cn"
              , t = {
                "en-us": In.a,
                "zh-cn": Pn.a,
                "zh-hk": $n.a,
                "ko-kr": Bn.a,
                "ru-ru": Un.a,
                "de-de": Mn.a,
                "fr-fr": qn.a,
                "es-es": Kn.a,
                "tr-tr": Qn.a,
                "vi-vi": Jn.a,
                "pt-br": er.a,
                "pt-pt": Wn.a,
                "th-th": nr.a
            };
            Ln.a.use(t[e])
        }(-1 !== location.href.indexOf("application-institution") ? "zh-cn" === t || "zh-hk" === t ? "zh-cn" : "en-us" : t)
    }
      , ir = {
        name: "Upload",
        props: {
            fetch: {
                type: Function,
                default: function() {
                    return Promise.resolve("")
                }
            },
            multiple: {
                type: Boolean,
                default: !0
            },
            accept: {
                type: String,
                default: ""
            },
            isRoad: {
                type: Boolean,
                default: !1
            }
        },
        data: function() {
            return {
                visible: !1,
                loading: !1,
                file: {}
            }
        },
        created: function() {
            "loading" === this.value && this.$emit("input", "")
        },
        computed: {
            downloadLink: function() {
                return location.origin + Fe.d.download + "?id=" + encodeURIComponent(this.value)
            }
        },
        methods: {
            handleChange: function() {
                var e = o()(regeneratorRuntime.mark(function e(t) {
                    var r, i, a, o, s = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.resolve().then(n.bind(null, 71));
                            case 2:
                                return r = e.sent,
                                i = r.default,
                                e.next = 6,
                                this.validateBeforeSave(t.target);
                            case 6:
                                if (e.sent) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return");
                            case 9:
                                this.loading = !0,
                                this.setTooltip(""),
                                this.$emit("input", "loading"),
                                a = t.target.files,
                                o = new FormData,
                                this.file = a[0],
                                o.append("file", a[0], a[0].name),
                                this.fetch(o).then(function(e) {
                                    e.success ? (s.setTooltip(""),
                                    console.log(107),
                                    s.$emit("input", e.data || ""),
                                    i.success("上传成功")) : (s.$emit("input", ""),
                                    s.setTooltip("上传失败，请重新上传")),
                                    s.loading = !1
                                }).catch(function(e) {
                                    s.loading = !1,
                                    s.$emit("input", ""),
                                    s.setTooltip("上传失败，请重新上传")
                                });
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            validateBeforeSave: function() {
                var e = o()(regeneratorRuntime.mark(function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (this.setTooltip(""),
                                0 !== t.files.length) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 3:
                                if (n = this.rules.get("accept") && this.rules.get("accept")[0] || "",
                                !this.accept) {
                                    e.next = 8;
                                    break
                                }
                                if (-1 !== this.accept.indexOf(t.files[0].type)) {
                                    e.next = 8;
                                    break
                                }
                                return this.setTooltip(n),
                                e.abrupt("return", !1);
                            case 8:
                                return e.next = 10,
                                this.filterImgError(t);
                            case 10:
                                if (e.sent) {
                                    e.next = 14;
                                    break
                                }
                                return this.setTooltip(n),
                                e.abrupt("return", !1);
                            case 14:
                                if (r = this.rules.get("size") || [],
                                !(t.files[0].size / 1024 / 1024 > (r[1] || 1 / 0))) {
                                    e.next = 18;
                                    break
                                }
                                return this.setTooltip(r[0] || ""),
                                e.abrupt("return", !1);
                            case 18:
                                return e.abrupt("return", !0);
                            case 19:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            removeFile: function() {
                this.$emit("input", ""),
                this.file = {}
            },
            filterImgError: function(e) {
                return new Promise(function(t) {
                    if (e.files[0] && /image/.test(e.files[0].type)) {
                        window.URL = window.URL || window.webkitURL;
                        var n = document.createElement("img");
                        n.setAttribute("src", URL.createObjectURL(e.files[0])),
                        n.src = URL.createObjectURL(e.files[0]),
                        n.onload = function() {
                            window.URL.revokeObjectURL(n.src),
                            t(!0)
                        }
                        ,
                        n.onerror = function() {
                            t(!1)
                        }
                    } else
                        t(!0)
                }
                )
            }
        }
    }
      , ar = (n(339),
    Object(Pe.a)(ir, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("div", {
            staticClass: "validate-upload-wrap"
        }, [n("label", {
            staticClass: "upload",
            class: {
                disabled: e.value
            }
        }, [n("i", {
            staticClass: "select-icon"
        }), e._v(" "), n("span", [e._v(e._s(e.isRoad ? "上传文件" : "上传文件"))]), e._v(" "), e.value ? e._e() : n("input", {
            attrs: {
                type: "file",
                accept: e.accept,
                multiple: e.multiple,
                hidden: ""
            },
            on: {
                change: e.handleChange
            }
        })]), e._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.value || e.loading,
                expression: "value || loading"
            }],
            staticClass: "upload-img"
        }, [n("i", {
            staticClass: "link"
        }), e._v(" "), n("a", {
            class: {
                disabled: e.loading
            },
            attrs: {
                href: e.loading ? "javascript:;" : e.downloadLink,
                download: "file"
            }
        }, [e._v(e._s(e.isRoad ? "查看文件" : "查看文件"))]), e._v(" "), n("i", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.loading,
                expression: "loading"
            }],
            staticClass: "loading"
        }), e._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !e.loading,
                expression: "!loading"
            }],
            staticClass: "close"
        }, [n("i", {
            on: {
                click: e.removeFile
            }
        }), e._v(" "), n("div", {
            staticClass: "tooltips-wrap center"
        }, [n("div", {
            staticClass: "tooltips"
        }, [e._v(e._s(e.isRoad ? "删除文件" : "删除文件"))])])])])])
    }, [], !1, null, "a9a5b040", null).exports)
      , or = n(214)
      , sr = n.n(or);
    n(340);
    s.default.use(sr.a, {
        components: [{
            name: "Upload",
            template: ar
        }],
        extendValidators: {
            loading: function() {
                return "loading" !== this.value
            }
        }
    });
    var cr = n(0)
      , ur = ["/transac", "/application-institution"]
      , lr = function(e) {
        return dr.apply(this, arguments)
    };
    function dr() {
        return (dr = o()(regeneratorRuntime.mark(function e(t) {
            var n, r, i;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = t.store,
                        r = t.app,
                        i = t.route,
                        e.next = 3,
                        n.dispatch("user/ucLoginCheck");
                    case 3:
                        cr.a.responseInterceptors = function(e) {
                            var t = e.data
                              , r = void 0 === t ? {} : t
                              , i = e.config
                              , a = void 0 === i ? {} : i
                              , o = e.restOptions
                              , s = void 0 === o ? a.restOptions : o;
                            !1 === r.success && "@uc" === s.aliasKey && [512, 403].includes(r.code) && (n.commit("user/UC_LOGIN_CHECK", !1),
                            n.commit("user/USER_LOGIN_STATUS", !1))
                        }
                        ,
                        r.router.beforeEach(function(e, t, r) {
                            if (n.state.user.isLogin && ["LANG-reset-password"].includes(e.name)) {
                                var a = i.query.backUrl || i.query.backurl;
                                location.href = a ? Object(Xe.c)(a) : "/".concat(n.state.locale, "/exchange/")
                            }
                            ur.some(function(t) {
                                return ~e.path.indexOf(t)
                            }) ? n.state.user.isLogin ? r() : location.href = "/".concat(i.params.LANG || "zh-cn", "/login/?backUrl=").concat(encodeURIComponent(i.fullPath)) : r()
                        });
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }))).apply(this, arguments)
    }
    var hr = n(215)
      , fr = n.n(hr)
      , pr = n(216)
      , mr = n.n(pr)
      , gr = n(217)
      , vr = n.n(gr);
    s.default.use(fr.a, {
        dialog: !0,
        dynamic: !0,
        injectModalsContainer: !0
    }),
    s.default.use(mr.a, {
        tooltip: !0
    }),
    s.default.use(vr.a);
    var _r, br = n(71), yr = (_r = o()(regeneratorRuntime.mark(function e(t) {
        return regeneratorRuntime.wrap(function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    t.app.router.beforeEach(function(e, t, n) {
                        document.querySelector("#modals-container") && (document.querySelector("#modals-container").innerHTML = ""),
                        n()
                    });
                case 2:
                case "end":
                    return e.stop()
                }
        }, e)
    })),
    function(e) {
        return _r.apply(this, arguments)
    }
    ), wr = function(e) {
        var t = e.app
          , n = e.route.query.invite_code;
        if (n) {
            var r = new Date(+new Date + 864e5);
            t.$cookies.set("invite_code", n, {
                expires: r,
                path: "/"
            })
        }
    }, xr = function(e) {
        var t = e.app
          , n = e.route.query.inviter_id;
        if (n) {
            var r = new Date(+new Date + 864e5);
            t.$cookies.set("HBP_inviterId", n, {
                expires: r,
                path: "/",
                domain: location.hostname
            })
        }
    };
    s.default.component(Se.name, Se),
    s.default.component(Ae.name, Ae),
    s.default.component(Ie.name, Ie),
    s.default.component($e.name, $e),
    s.default.use(z.a, {
        keyName: "head",
        attribute: "data-n-head",
        ssrAttribute: "data-n-head-ssr",
        tagIDKeyName: "hid"
    });
    var kr = {
        name: "page",
        mode: "out-in",
        appear: !1,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to"
    };
    function Tr() {
        return (Tr = o()(regeneratorRuntime.mark(function e(t) {
            var n, r, i, a, o, c, u, l;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        new q.a({
                            mode: "history",
                            base: "/",
                            linkActiveClass: "nuxt-link-active",
                            linkExactActiveClass: "nuxt-link-exact-active",
                            scrollBehavior: Ce,
                            routes: [{
                                path: "/404",
                                component: F,
                                name: "404"
                            }, {
                                path: "/500",
                                component: K,
                                name: "500"
                            }, {
                                path: "/en-us",
                                component: V,
                                name: "en-us"
                            }, {
                                path: "/en-us/exchange",
                                component: Q,
                                name: "en-us-exchange"
                            }, {
                                path: "/en-us/margin",
                                component: Y,
                                name: "en-us-margin"
                            }, {
                                path: "/en-us/:coin_coin?/exchange",
                                component: J,
                                name: "en-us-coin_coin-exchange"
                            }, {
                                path: "/en-us/:coin_coin?/margin",
                                component: X,
                                name: "en-us-coin_coin-margin"
                            }, {
                                path: "/",
                                component: W,
                                name: "index"
                            }, {
                                path: "/:LANG",
                                component: Z,
                                name: "LANG"
                            }, {
                                path: "/:LANG/application-institution",
                                component: ee,
                                name: "LANG-application-institution"
                            }, {
                                path: "/:LANG/download",
                                component: te,
                                name: "LANG-download"
                            }, {
                                path: "/:LANG/exchange",
                                component: ne,
                                name: "LANG-exchange"
                            }, {
                                path: "/:LANG/ht",
                                component: re,
                                name: "LANG-ht"
                            }, {
                                path: "/:LANG/login",
                                component: ie,
                                name: "LANG-login"
                            }, {
                                path: "/:LANG/login-license",
                                component: ae,
                                name: "LANG-login-license"
                            }, {
                                path: "/:LANG/margin",
                                component: oe,
                                name: "LANG-margin"
                            }, {
                                path: "/:LANG/orderbooks",
                                component: se,
                                name: "LANG-orderbooks"
                            }, {
                                path: "/:LANG/QH6eunHDyfwhdSYakDEhqujWG",
                                component: ce,
                                name: "LANG-QH6eunHDyfwhdSYakDEhqujWG"
                            }, {
                                path: "/:LANG/register",
                                component: ue,
                                name: "LANG-register"
                            }, {
                                path: "/:LANG/reset-password",
                                component: le,
                                name: "LANG-reset-password"
                            }, {
                                path: "/:LANG/transac",
                                component: de,
                                name: "LANG-transac"
                            }, {
                                path: "/:LANG/topic/m-reset-ga",
                                component: he,
                                name: "LANG-topic-m-reset-ga"
                            }, {
                                path: "/:LANG/topic/reset-ga",
                                component: fe,
                                name: "LANG-topic-reset-ga"
                            }, {
                                path: "/:LANG/topic/vip",
                                component: pe,
                                name: "LANG-topic-vip"
                            }, {
                                path: "/:LANG/topic/prime-day/h5",
                                component: me,
                                name: "LANG-topic-prime-day-h5"
                            }, {
                                path: "/:LANG/topic/prime-day/position",
                                component: ge,
                                name: "LANG-topic-prime-day-position"
                            }, {
                                path: "/:LANG/topic/prime-lite/position",
                                component: ve,
                                name: "LANG-topic-prime-lite-position"
                            }, {
                                path: "/:LANG/topic/prime/position",
                                component: _e,
                                name: "LANG-topic-prime-position"
                            }, {
                                path: "/:LANG/topic/prime-day/h5/prime",
                                component: be,
                                name: "LANG-topic-prime-day-h5-prime"
                            }, {
                                path: "/:LANG/topic/prime-day/h5/prime-detail",
                                component: ye,
                                name: "LANG-topic-prime-day-h5-prime-detail"
                            }, {
                                path: "/:LANG/topic/prime-day/h5/prime-lite",
                                component: we,
                                name: "LANG-topic-prime-day-h5-prime-lite"
                            }, {
                                path: "/:LANG/topic/prime-lite/position/h5",
                                component: xe,
                                name: "LANG-topic-prime-lite-position-h5"
                            }, {
                                path: "/:LANG/topic/prime/position/h5",
                                component: ke,
                                name: "LANG-topic-prime-position-h5"
                            }, {
                                path: "/:LANG/:coin_coin/exchange",
                                component: Te,
                                name: "LANG-coin_coin-exchange"
                            }, {
                                path: "/:LANG/:coin_coin/margin",
                                component: Oe,
                                name: "LANG-coin_coin-margin"
                            }, {
                                path: "/en-us/exchange/:symbol(\\w*_\\w*)",
                                component: Q,
                                name: "en-us-exchange-symbol"
                            }, {
                                path: "/en-us/margin/:symbol(\\w*_\\w*)",
                                component: Y,
                                name: "en-us-margin-symbol"
                            }, {
                                path: "/:LANG/exchange/:symbol(\\w*_\\w*)",
                                component: ne,
                                name: "LANG-exchange-symbol"
                            }, {
                                path: "/:LANG/margin/:symbol(\\w*_\\w*)",
                                component: oe,
                                name: "LANG-margin-symbol"
                            }],
                            fallback: !1
                        });
                    case 2:
                        return n = e.sent,
                        (r = en(t)).$router = n,
                        i = r.registerModule,
                        r.registerModule = function(e, t, n) {
                            return i.call(r, e, t, Object.assign({
                                preserveState: !0
                            }, n))
                        }
                        ,
                        a = y()({
                            router: n,
                            store: r,
                            nuxt: {
                                defaultTransition: kr,
                                transitions: [kr],
                                setTransitions: function(e) {
                                    return Array.isArray(e) || (e = [e]),
                                    e = e.map(function(e) {
                                        return e = e ? "string" == typeof e ? Object.assign({}, kr, {
                                            name: e
                                        }) : Object.assign({}, kr, e) : kr
                                    }),
                                    this.$options.nuxt.transitions = e,
                                    e
                                },
                                err: null,
                                dateErr: null,
                                error: function(e) {
                                    e = e || null,
                                    a.context._errored = !!e,
                                    e = e ? $(e) : null;
                                    var n = this.nuxt || this.$options.nuxt;
                                    return n.dateErr = Date.now(),
                                    n.err = e,
                                    t && (t.nuxt.error = e),
                                    e
                                }
                            }
                        }, Nt),
                        r.app = a,
                        o = t ? t.next : function(e) {
                            return a.router.push(e)
                        }
                        ,
                        t ? c = n.resolve(t.url).route : (u = R(n.options.base),
                        c = n.resolve(u).route),
                        e.next = 13,
                        L(a, {
                            route: c,
                            next: o,
                            error: a.nuxt.error.bind(a),
                            store: r,
                            payload: t ? t.payload : void 0,
                            req: t ? t.req : void 0,
                            res: t ? t.res : void 0,
                            beforeRenderFns: t ? t.beforeRenderFns : void 0
                        });
                    case 13:
                        if (l = function(e, t) {
                            if (!e)
                                throw new Error("inject(key, value) has no key provided");
                            if (void 0 === t)
                                throw new Error("inject(key, value) has no value provided");
                            a[e = "$" + e] = t,
                            r[e] = a[e];
                            var n = "__nuxt_" + e + "_installed__";
                            s.default[n] || (s.default[n] = !0,
                            s.default.use(function() {
                                s.default.prototype.hasOwnProperty(e) || Object.defineProperty(s.default.prototype, e, {
                                    get: function() {
                                        return this.$root.$options[e]
                                    }
                                })
                            }))
                        }
                        ,
                        window.__NUXT__ && window.__NUXT__.state && r.replaceState(window.__NUXT__.state),
                        "function" != typeof sn) {
                            e.next = 18;
                            break
                        }
                        return e.next = 18,
                        sn(a.context, l);
                    case 18:
                        if ("function" != typeof pn) {
                            e.next = 21;
                            break
                        }
                        return e.next = 21,
                        pn(a.context, l);
                    case 21:
                        e.next = 24;
                        break;
                    case 24:
                        if ("function" != typeof gn) {
                            e.next = 27;
                            break
                        }
                        return e.next = 27,
                        gn(a.context, l);
                    case 27:
                        if ("function" != typeof vn) {
                            e.next = 30;
                            break
                        }
                        return e.next = 30,
                        vn(a.context, l);
                    case 30:
                        if ("function" != typeof yn) {
                            e.next = 33;
                            break
                        }
                        return e.next = 33,
                        yn(a.context, l);
                    case 33:
                        if ("function" != typeof rr) {
                            e.next = 36;
                            break
                        }
                        return e.next = 36,
                        rr(a.context, l);
                    case 36:
                        e.next = 39;
                        break;
                    case 39:
                        if ("function" != typeof lr) {
                            e.next = 43;
                            break
                        }
                        return e.next = 43,
                        lr(a.context, l);
                    case 43:
                        e.next = 46;
                        break;
                    case 46:
                        if ("function" != typeof br.default) {
                            e.next = 49;
                            break
                        }
                        return e.next = 49,
                        Object(br.default)(a.context, l);
                    case 49:
                        if ("function" != typeof yr) {
                            e.next = 52;
                            break
                        }
                        return e.next = 52,
                        yr(a.context, l);
                    case 52:
                        if ("function" != typeof wr) {
                            e.next = 55;
                            break
                        }
                        return e.next = 55,
                        wr(a.context, l);
                    case 55:
                        if ("function" != typeof xr) {
                            e.next = 58;
                            break
                        }
                        return e.next = 58,
                        xr(a.context, l);
                    case 58:
                        e.next = 61;
                        break;
                    case 61:
                        return e.abrupt("return", {
                            app: a,
                            store: r,
                            router: n
                        });
                    case 62:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }))).apply(this, arguments)
    }
    var Or, Cr, Er = [], Sr = window.__NUXT__ || {};
    function Ar(e, t, n) {
        var r = function(e) {
            var r = function(e, t) {
                if (!e || !e.options || !e.options[t])
                    return {};
                var n = e.options[t];
                if ("function" == typeof n) {
                    for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
                        i[a - 2] = arguments[a];
                    return n.apply(void 0, i)
                }
                return n
            }(e, "transition", t, n) || {};
            return "string" == typeof r ? {
                name: r
            } : r
        };
        return e.map(function(e) {
            var t = Object.assign({}, r(e));
            if (n && n.matched.length && n.matched[0].components.default) {
                var i = r(n.matched[0].components.default);
                Object.keys(i).filter(function(e) {
                    return i[e] && e.toLowerCase().includes("leave")
                }).forEach(function(e) {
                    t[e] = i[e]
                })
            }
            return t
        })
    }
    function Lr(e, t, n) {
        return Nr.apply(this, arguments)
    }
    function Nr() {
        return (Nr = o()(regeneratorRuntime.mark(function e(t, n, r) {
            var i, a = this;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return this._pathChanged = !!Or.nuxt.err || n.path !== t.path,
                        this._queryChanged = JSON.stringify(t.query) !== JSON.stringify(n.query),
                        this._diffQuery = this._queryChanged ? j(t.query, n.query) : [],
                        this._pathChanged && this.$loading.start && !this.$loading.manual && this.$loading.start(),
                        e.prev = 4,
                        e.next = 7,
                        E(t);
                    case 7:
                        i = e.sent,
                        !this._pathChanged && this._queryChanged && i.some(function(e) {
                            var t = e.options.watchQuery;
                            return !0 === t || !!Array.isArray(t) && t.some(function(e) {
                                return a._diffQuery[e]
                            })
                        }) && this.$loading.start && !this.$loading.manual && this.$loading.start(),
                        r(),
                        e.next = 17;
                        break;
                    case 12:
                        e.prev = 12,
                        e.t0 = e.catch(4),
                        this.error(e.t0),
                        this.$nuxt.$emit("routeChanged", t, n, error),
                        r(!1);
                    case 17:
                    case "end":
                        return e.stop()
                    }
            }, e, this, [[4, 12]])
        }))).apply(this, arguments)
    }
    function Ir(e, t) {
        return Sr.serverRendered && t && k(e, t),
        e._Ctor = e,
        e
    }
    function Rr(e) {
        var t, n = R(e.options.base, e.options.mode);
        return C(e.match(n), (t = o()(regeneratorRuntime.mark(function e(t, n, r, i, a) {
            var o;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if ("function" != typeof t || t.options) {
                            e.next = 4;
                            break
                        }
                        return e.next = 3,
                        t();
                    case 3:
                        t = e.sent;
                    case 4:
                        return o = Ir(T(t), Sr.data ? Sr.data[a] : null),
                        r.components[i] = o,
                        e.abrupt("return", o);
                    case 7:
                    case "end":
                        return e.stop()
                    }
            }, e)
        })),
        function(e, n, r, i, a) {
            return t.apply(this, arguments)
        }
        ))
    }
    function Pr(e, t, n) {
        var r = this
          , i = []
          , a = !1;
        if (void 0 !== n && (i = [],
        n.middleware && (i = i.concat(n.middleware)),
        e.forEach(function(e) {
            e.options.middleware && (i = i.concat(e.options.middleware))
        })),
        i = i.map(function(e) {
            return "function" == typeof e ? e : ("function" != typeof _[e] && (a = !0,
            r.error({
                statusCode: 500,
                message: "Unknown middleware " + e
            })),
            _[e])
        }),
        !a)
            return function e(t, n) {
                return !t.length || n._redirected || n._errored ? Promise.resolve() : I(t[0], n).then(function() {
                    return e(t.slice(1), n)
                })
            }(i, t)
    }
    function jr(e, t, n) {
        return $r.apply(this, arguments)
    }
    function $r() {
        return ($r = o()(regeneratorRuntime.mark(function e(t, n, r) {
            var i, a, o, c, u, l, d, h, f, p, m, g, v, _, b, y, w = this;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", r());
                    case 2:
                        return Er = t === n ? [] : O(n, i = []).map(function(e, t) {
                            return P(n.matched[i[t]].path)(n.params)
                        }),
                        a = !1,
                        o = function(e) {
                            n.path === e.path && w.$loading.finish && w.$loading.finish(),
                            n.path !== e.path && w.$loading.pause && w.$loading.pause(),
                            a || (a = !0,
                            r(e))
                        }
                        ,
                        e.next = 7,
                        L(Or, {
                            route: t,
                            from: n,
                            next: o.bind(this)
                        });
                    case 7:
                        if (this._dateLastError = Or.nuxt.dateErr,
                        this._hadError = !!Or.nuxt.err,
                        (u = O(t, c = [])).length) {
                            e.next = 25;
                            break
                        }
                        return e.next = 14,
                        Pr.call(this, u, Or.context);
                    case 14:
                        if (!a) {
                            e.next = 16;
                            break
                        }
                        return e.abrupt("return");
                    case 16:
                        return e.next = 18,
                        this.loadLayout("function" == typeof je.layout ? je.layout(Or.context) : je.layout);
                    case 18:
                        return l = e.sent,
                        e.next = 21,
                        Pr.call(this, u, Or.context, l);
                    case 21:
                        if (!a) {
                            e.next = 23;
                            break
                        }
                        return e.abrupt("return");
                    case 23:
                        return Or.context.error({
                            statusCode: 404,
                            message: "This page could not be found"
                        }),
                        e.abrupt("return", r());
                    case 25:
                        return u.forEach(function(e) {
                            e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData,
                            e.options.fetch = e._Ctor.options.fetch)
                        }),
                        this.setTransitions(Ar(u, t, n)),
                        e.prev = 27,
                        e.next = 30,
                        Pr.call(this, u, Or.context);
                    case 30:
                        if (!a) {
                            e.next = 32;
                            break
                        }
                        return e.abrupt("return");
                    case 32:
                        if (!Or.context._errored) {
                            e.next = 34;
                            break
                        }
                        return e.abrupt("return", r());
                    case 34:
                        return "function" == typeof (d = u[0].options.layout) && (d = d(Or.context)),
                        e.next = 38,
                        this.loadLayout(d);
                    case 38:
                        return d = e.sent,
                        e.next = 41,
                        Pr.call(this, u, Or.context, d);
                    case 41:
                        if (!a) {
                            e.next = 43;
                            break
                        }
                        return e.abrupt("return");
                    case 43:
                        if (!Or.context._errored) {
                            e.next = 45;
                            break
                        }
                        return e.abrupt("return", r());
                    case 45:
                        h = !0,
                        e.prev = 46,
                        f = !0,
                        p = !1,
                        m = void 0,
                        e.prev = 50,
                        g = u[Symbol.iterator]();
                    case 52:
                        if (f = (v = g.next()).done) {
                            e.next = 64;
                            break
                        }
                        if ("function" == typeof (_ = v.value).options.validate) {
                            e.next = 56;
                            break
                        }
                        return e.abrupt("continue", 61);
                    case 56:
                        return e.next = 58,
                        _.options.validate(Or.context);
                    case 58:
                        if (h = e.sent) {
                            e.next = 61;
                            break
                        }
                        return e.abrupt("break", 64);
                    case 61:
                        f = !0,
                        e.next = 52;
                        break;
                    case 64:
                        e.next = 70;
                        break;
                    case 66:
                        e.prev = 66,
                        e.t0 = e.catch(50),
                        p = !0,
                        m = e.t0;
                    case 70:
                        e.prev = 70,
                        e.prev = 71,
                        f || null == g.return || g.return();
                    case 73:
                        if (e.prev = 73,
                        !p) {
                            e.next = 76;
                            break
                        }
                        throw m;
                    case 76:
                        return e.finish(73);
                    case 77:
                        return e.finish(70);
                    case 78:
                        e.next = 84;
                        break;
                    case 80:
                        return e.prev = 80,
                        e.t1 = e.catch(46),
                        this.error({
                            statusCode: e.t1.statusCode || "500",
                            message: e.t1.message
                        }),
                        e.abrupt("return", r());
                    case 84:
                        if (h) {
                            e.next = 87;
                            break
                        }
                        return this.error({
                            statusCode: 404,
                            message: "This page could not be found"
                        }),
                        e.abrupt("return", r());
                    case 87:
                        return e.next = 89,
                        Promise.all(u.map(function(e, n) {
                            if (e._path = P(t.matched[c[n]].path)(t.params),
                            e._dataRefresh = !1,
                            w._pathChanged && w._queryChanged || e._path !== Er[n])
                                e._dataRefresh = !0;
                            else if (!w._pathChanged && w._queryChanged) {
                                var r = e.options.watchQuery;
                                !0 === r ? e._dataRefresh = !0 : Array.isArray(r) && (e._dataRefresh = r.some(function(e) {
                                    return w._diffQuery[e]
                                }))
                            }
                            if (!w._hadError && w._isMounted && !e._dataRefresh)
                                return Promise.resolve();
                            var i = []
                              , a = e.options.asyncData && "function" == typeof e.options.asyncData
                              , o = !!e.options.fetch
                              , s = a && o ? 30 : 45;
                            if (a) {
                                var u = I(e.options.asyncData, Or.context).then(function(t) {
                                    k(e, t),
                                    w.$loading.increase && w.$loading.increase(s)
                                });
                                i.push(u)
                            }
                            if (w.$loading.manual = !1 === e.options.loading,
                            o) {
                                var l = e.options.fetch(Or.context);
                                l && (l instanceof Promise || "function" == typeof l.then) || (l = Promise.resolve(l)),
                                l.then(function(e) {
                                    w.$loading.increase && w.$loading.increase(s)
                                }),
                                i.push(l)
                            }
                            return Promise.all(i)
                        }));
                    case 89:
                        a || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(),
                        r()),
                        e.next = 106;
                        break;
                    case 92:
                        if (e.prev = 92,
                        e.t2 = e.catch(27),
                        "ERR_REDIRECT" !== (b = e.t2 || {}).message) {
                            e.next = 97;
                            break
                        }
                        return e.abrupt("return", this.$nuxt.$emit("routeChanged", t, n, b));
                    case 97:
                        return Er = [],
                        x = b,
                        s.default.config.errorHandler && s.default.config.errorHandler(x),
                        "function" == typeof (y = je.layout) && (y = y(Or.context)),
                        e.next = 103,
                        this.loadLayout(y);
                    case 103:
                        this.error(b),
                        this.$nuxt.$emit("routeChanged", t, n, b),
                        r(!1);
                    case 106:
                    case "end":
                        return e.stop()
                    }
                var x
            }, e, this, [[27, 92], [46, 80], [50, 66, 70, 78], [71, , 73, 77]])
        }))).apply(this, arguments)
    }
    function Dr(e, t) {
        C(e, function(e, t, n, r) {
            return "object" !== i()(e) || e.options || ((e = s.default.extend(e))._Ctor = e,
            n.components[r] = e),
            e
        })
    }
    function Br(e) {
        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();
        var t = this.$options.nuxt.err ? je.layout : e.matched[0].components.default.options.layout;
        "function" == typeof t && (t = t(Or.context)),
        this.setLayout(t)
    }
    function Gr(e, t) {
        var n = this;
        !1 === this._pathChanged && !1 === this._queryChanged || s.default.nextTick(function() {
            var t = []
              , r = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return Array.prototype.concat.apply([], e.matched.map(function(e, n) {
                    return Object.keys(e.instances).map(function(r) {
                        return t && t.push(n),
                        e.instances[r]
                    })
                }))
            }(e, t)
              , i = O(e, t);
            r.forEach(function(e, t) {
                if (e && e.constructor._dataRefresh && i[t] === e.constructor && "function" == typeof e.constructor.options.data) {
                    var n = e.constructor.options.data.call(e);
                    for (var r in n)
                        s.default.set(e.$data, r, n[r])
                }
            }),
            Br.call(n, e)
        })
    }
    function Ur(e) {
        window.onNuxtReadyCbs.forEach(function(t) {
            "function" == typeof t && t(e)
        }),
        "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e),
        Cr.afterEach(function(t, n) {
            s.default.nextTick(function() {
                return e.$nuxt.$emit("routeChanged", t, n)
            })
        })
    }
    function Hr() {
        return (Hr = o()(regeneratorRuntime.mark(function e(t) {
            var n, r, i, a;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return Or = t.app,
                        Cr = t.router,
                        t.store,
                        e.next = 5,
                        Promise.all(Rr(Cr));
                    case 5:
                        return n = e.sent,
                        r = new s.default(Or),
                        i = Sr.layout || "default",
                        e.next = 10,
                        r.loadLayout(i);
                    case 10:
                        if (r.setLayout(i),
                        a = function() {
                            r.$mount("#__nuxt"),
                            s.default.nextTick(function() {
                                Ur(r)
                            })
                        }
                        ,
                        r.setTransitions = r.$options.nuxt.setTransitions.bind(r),
                        n.length && (r.setTransitions(Ar(n, Cr.currentRoute)),
                        Er = Cr.currentRoute.matched.map(function(e) {
                            return P(e.path)(Cr.currentRoute.params)
                        })),
                        r.$loading = {},
                        Sr.error && r.error(Sr.error),
                        Cr.beforeEach(Lr.bind(r)),
                        Cr.beforeEach(jr.bind(r)),
                        Cr.afterEach(Dr),
                        Cr.afterEach(Gr.bind(r)),
                        !Sr.serverRendered) {
                            e.next = 23;
                            break
                        }
                        return a(),
                        e.abrupt("return");
                    case 23:
                        jr.call(r, Cr.currentRoute, Cr.currentRoute, function(e) {
                            if (!e)
                                return Dr(Cr.currentRoute, Cr.currentRoute),
                                Br.call(r, Cr.currentRoute),
                                void a();
                            Cr.push(e, function() {
                                return a()
                            }, function(e) {
                                if (!e)
                                    return a();
                                console.error(e)
                            })
                        });
                    case 24:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }))).apply(this, arguments)
    }
    Object.assign(s.default.config, {
        silent: !0,
        performance: !1
    }),
    function(e) {
        return Tr.apply(this, arguments)
    }().then(function(e) {
        return Hr.apply(this, arguments)
    }).catch(function(e) {
        console.error("[nuxt] Error while initializing app", e)
    })
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    n(9);
    var r, i, a = n(1), o = n.n(a), s = n(14), c = n(7), u = n(26), l = n.n(u), d = n(16), h = n(6), f = ["HBP_AGREE", "HB-HADAXV2-TOKEN", "HB-ETF-TOKEN", "HB-UC-TOKEN", "HB-PRO-TOKEN", "HB-OLD-TOKEN", "HB-VOTE-TOKEN", "AUTHTOKEN"], p = (r = o()(regeneratorRuntime.mark(function e() {
        var t, n, r;
        return regeneratorRuntime.wrap(function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    s.f.ucGetTicket();
                case 2:
                    if (!(t = e.sent).success) {
                        e.next = 14;
                        break
                    }
                    return n = t.data,
                    e.next = 7,
                    s.e.proLogin(n);
                case 7:
                    if (!(r = e.sent).success) {
                        e.next = 12;
                        break
                    }
                    return l.a.set("HB-PRO-TOKEN", r.data.token, {
                        domain: location.hostname
                    }),
                    d.a.pub("isLogin", 1),
                    e.abrupt("return", !0);
                case 12:
                    e.next = 16;
                    break;
                case 14:
                    return m(),
                    e.abrupt("return", !1);
                case 16:
                case "end":
                    return e.stop()
                }
        }, e)
    })),
    function() {
        return r.apply(this, arguments)
    }
    ), m = function() {
        Object(h.p)(f),
        d.a.pub("isLogin", 0),
        localStorage.removeItem("huobi_pro_eyes"),
        sessionStorage.clear(),
        window.gio && window.gio("clearUserId")
    };
    i = o()(regeneratorRuntime.mark(function e() {
        var t, n;
        return regeneratorRuntime.wrap(function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (t = l.a.get("HB-UC-TOKEN"),
                    n = l.a.get("HB-PRO-TOKEN"),
                    t && n) {
                        e.next = 6;
                        break
                    }
                    return e.next = 5,
                    p();
                case 5:
                    return e.abrupt("return", e.sent);
                case 6:
                    return e.next = 8,
                    s.f.getUcLoginCheck();
                case 8:
                    if (e.sent.success) {
                        e.next = 13;
                        break
                    }
                    return m(),
                    setTimeout(function() {
                        window.location.reload()
                    }, 80),
                    e.abrupt("return", !1);
                case 13:
                    return e.next = 15,
                    s.f.proTokenVerify();
                case 15:
                    if (e.sent.success) {
                        e.next = 21;
                        break
                    }
                    return Object(h.p)("HB-PRO-TOKEN"),
                    e.next = 20,
                    p();
                case 20:
                    return e.abrupt("return", e.sent);
                case 21:
                    return e.abrupt("return", !0);
                case 22:
                case "end":
                    return e.stop()
                }
        }, e)
    }));
    n.d(t, "state", function() {
        return g
    }),
    n.d(t, "actions", function() {
        return v
    }),
    n.d(t, "mutations", function() {
        return _
    }),
    n.d(t, "getters", function() {
        return b
    });
    var g = function() {
        return {
            isLogin: void 0,
            ucIsLogin: !1,
            proVerify: !1,
            proLogin: !1,
            ucTicket: "",
            userInfo: {},
            countryId: "",
            level: null
        }
    }
      , v = {
        ucLoginCheck: function() {
            var e = o()(regeneratorRuntime.mark(function e(t) {
                var n, r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.commit,
                            e.next = 3,
                            c.c.checkLogin();
                        case 3:
                            if (r = e.sent,
                            i = r.success,
                            510 !== r.code) {
                                e.next = 8;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 8:
                            localStorage.setItem("UC_IS_LOGIN", i ? "1" : "0"),
                            n("UC_LOGIN_CHECK", i),
                            n("USER_LOGIN_STATUS", i);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        proTokenVerify: function() {
            var e = o()(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.commit,
                            e.next = 3,
                            s.f.proTokenVerify();
                        case 3:
                            (r = e.sent).success && n("PRO_TOKEN_VERIFY", r.data);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        ucGetTicket: function() {
            var e = o()(regeneratorRuntime.mark(function e(t) {
                var n, r, i = arguments;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t.app,
                            n = t.commit,
                            i.length > 1 && void 0 !== i[1] ? i[1] : 0,
                            e.next = 4,
                            s.f.ucGetTicket();
                        case 4:
                            (r = e.sent).success && n("SET_UC_TICKET", r.data);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        setProLogin: function() {
            var e = o()(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.commit,
                            e.next = 3,
                            s.f.getUcLoginCheck();
                        case 3:
                            (r = e.sent).success && n("SET_PRO_LOGIN", r.data);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        getUserInfo: function() {
            var e = o()(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.commit,
                            e.next = 3,
                            s.f.getUserInfo();
                        case 3:
                            (r = e.sent).success && (sessionStorage.setItem("HBP_u", r.data.uid),
                            n("SET_USERINFO", r.data));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        ucLogout: function() {
            var e = o()(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t.commit,
                            n = t.dispatch,
                            e.next = 3,
                            s.f.ucLogout();
                        case 3:
                            r = e.sent,
                            console.log("ucLogout", r),
                            r.success && n("proLogout");
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        proLogout: function() {
            var e = o()(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            n = t.commit,
                            s.e.proLogout(),
                            n("USER_LOGIN_STATUS", !1),
                            n("UC_LOGIN_CHECK", !1),
                            m();
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        getLevel: function() {
            var e = o()(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.commit,
                            e.next = 3,
                            c.j.getIdentity();
                        case 3:
                            (r = e.sent).success && (r.data ? n("SET_LEVEL", r.data.level) : n("SET_LEVEL", 0));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        getCountryList: function() {
            var e = o()(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a, o, c, u, l, d, h = arguments;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = t.commit,
                            "country" !== (r = h.length > 1 && void 0 !== h[1] ? h[1] : "country") && "all" !== r) {
                                e.next = 9;
                                break
                            }
                            return e.next = 5,
                            s.f.getCountryList();
                        case 5:
                            i = e.sent,
                            a = i.success,
                            o = i.data,
                            a && o && localStorage.setItem("countryList", JSON.stringify(o));
                        case 9:
                            if ("code" !== r && "all" !== r) {
                                e.next = 16;
                                break
                            }
                            return e.next = 12,
                            s.f.getCountryCodeList();
                        case 12:
                            c = e.sent,
                            u = c.success,
                            l = c.data,
                            u && l && localStorage.setItem("countryCodeList", JSON.stringify(l));
                        case 16:
                            return e.next = 18,
                            s.f.getCountryId();
                        case 18:
                            (d = e.sent).success && n("SET_COUNTRY_ID", d.data.country_id);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    }
      , _ = {
        USER_LOGIN_STATUS: function(e, t) {
            e.isLogin = t
        },
        UC_LOGIN_CHECK: function(e, t) {
            e.ucIsLogin = t
        },
        PRO_TOKEN_VERIFY: function(e, t) {
            e.proVerify = t
        },
        SET_UC_TICKET: function(e, t) {
            e.ucTicket = t
        },
        SET_PRO_LOGIN: function(e, t) {
            e.proLogin = t
        },
        SET_USERINFO: function(e, t) {
            e.userInfo = t
        },
        SET_COUNTRY_ID: function(e, t) {
            e.countryId = t
        },
        SET_LEVEL: function(e, t) {
            e.level = t
        }
    }
      , b = {
        isSubAccount: function(e) {
            return 2 === e.userInfo.user_type
        }
    }
}
], [[227, 30, 29, 31]]]);

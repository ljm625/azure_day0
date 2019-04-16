(window.webpackJsonp = window.webpackJsonp || []).push([[23], [function(e, t, n) {
    "use strict";
    (function(e) {
        n(19),
        n(35);
        var r = n(8)
          , a = n.n(r)
          , i = (n(50),
        n(77))
          , o = n.n(i)
          , s = n(136)
          , c = n.n(s);
        n.d(t, "b", function() {
            return s.granting
        });
        var u = o.a.create({
            timeout: 3e4,
            headers: {
                post: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                "Accept-Language": function() {
                    e.env.LANG && e.env.LANG.match(/^\w{2}-\w{2}$/) && e.env.LANG;
                    var t, n = location.pathname.split("/"), r = a()(n, 2)[1];
                    return r.match(/\w{2}-\w{2}/) && (t = r),
                    t || (t = localStorage.lang || "zh-cn"),
                    t.replace(/\-\w{2}/, function(e) {
                        return e.toUpperCase()
                    })
                }()
            },
            emulateJSON: !0,
            withCredentials: !0
        });
        t.a = new c.a(u)
    }
    ).call(this, n(58))
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
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
        return f
    });
    n(50),
    n(66);
    var r = n(27)
      , a = n.n(r);
    a.a.set({
        precision: 50,
        rounding: a.a.ROUND_DOWN
    });
    var i = function(e, t) {
        if (isNaN(1 * e) || isNaN(1 * t))
            return NaN;
        var n = new a.a(e || 0)
          , r = new a.a(t || 0);
        return n.add(r)
    }
      , o = function(e, t) {
        if (isNaN(1 * e) || isNaN(1 * t))
            return NaN;
        var n = new a.a(e || 0)
          , r = new a.a(t || 0);
        return n.sub(r)
    }
      , s = function(e, t) {
        if (isNaN(1 * e) || isNaN(1 * t))
            return NaN;
        var n = new a.a(e || 0)
          , r = new a.a(t || 0);
        return n.mul(r)
    }
      , c = function(e, t) {
        if (isNaN(1 * e) || isNaN(1 * t))
            return NaN;
        if (!t)
            return "---";
        var n = new a.a(e || 0)
          , r = new a.a(t);
        return n.div(r)
    }
      , u = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          , n = arguments.length > 2 ? arguments[2] : void 0;
        if (isNaN(1 * e))
            return e;
        var r = new a.a(e || 0).toFixed(parseInt(t), n);
        return r.length > 18 ? r.slice(0, 18) : r
    }
      , l = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (isNaN(1 * e))
            return e;
        var n = new a.a(e || 0)
          , r = n.toFixed(parseInt(t));
        return 1 * e && !(1 * r) && (t = n.toFixed(10).match(/[^.0]/) ? n.toFixed(10).match(/[^.0]/).index + 1 : 2),
        n.toFixed(parseInt(t))
    }
      , f = function(e) {
        return isNaN(1 * e) ? e : new a.a(e || 0).toFixed()
    }
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "s", function() {
        return u
    }),
    n.d(t, "a", function() {
        return f
    }),
    n.d(t, "f", function() {
        return h
    }),
    n.d(t, "o", function() {
        return d
    }),
    n.d(t, "r", function() {
        return p
    }),
    n.d(t, "e", function() {
        return m
    }),
    n.d(t, "h", function() {
        return g
    }),
    n.d(t, "p", function() {
        return v
    }),
    n.d(t, "i", function() {
        return _
    }),
    n.d(t, "n", function() {
        return b
    }),
    n.d(t, "b", function() {
        return y
    }),
    n.d(t, "q", function() {
        return w
    }),
    n.d(t, "j", function() {
        return x
    }),
    n.d(t, "c", function() {
        return k
    }),
    n.d(t, "d", function() {
        return O
    }),
    n.d(t, "l", function() {
        return E
    }),
    n.d(t, "m", function() {
        return C
    }),
    n.d(t, "g", function() {
        return S
    }),
    n.d(t, "k", function() {
        return A
    }),
    n.d(t, "t", function() {
        return L
    });
    n(267),
    n(16),
    n(50);
    var r = n(8)
      , a = n.n(r)
      , i = (n(142),
    n(19),
    n(35),
    n(21))
      , o = n.n(i)
      , s = ["hbg.com", "hadax.com", "huobi.co", "huobiapps.com", "hb-otc.net", "hb-otc.org", "hb-otc.info", "hb-otc.com", "huobi.pro", "huobipro.com", "huobi.br.com", "dangpu.com", "huobi.cn", "huobichain.com", "huobi.co", "hbdm.com", "dm.hbg.com", "dm.huobi.co", "dm.huobi.br.com", "dm.huobi.pro"];
    function c(e) {
        return e > 9 ? e : "0" + e
    }
    function u(e, t, n) {
        if (isNaN(e))
            return e;
        var r = 1 * (e = (e + "").split(":"))[0] < Math.pow(10, 11) && !e[1] ? new Date(1e3 * e[0]) : new Date(1 * e[0])
          , a = r.getFullYear()
          , i = c(r.getMonth() + 1)
          , o = c(r.getDate())
          , s = c(n ? r.getUTCHours() : r.getHours())
          , u = c(r.getMinutes())
          , l = c(r.getSeconds());
        return t ? t.toLowerCase().replace("y", a).replace("m", i).replace("d", o).replace("h", s).replace("i", u).replace("s", l) : a + "-" + i + "-" + o + " " + s + ":" + u + ":" + l
    }
    function l(e, t) {
        for (var n = 0, r = e.length; n < r && e[n]; n++) {
            var a = e[n].split("=")
              , i = a[0]
              , o = a[1];
            if ("s" === i) {
                var s = o.split("_");
                s.length > 1 && (window.PAGE_BASE = s[0],
                window.PAGE_QUOTE = s[1],
                window.PAGE_TYPE = s[2] || window.PAGE_TYPE,
                window.symbol = s[0] + s[1])
            }
            window[t + "Params"][i] = o
        }
    }
    function f(e, t) {
        var n, r, a, i, o, s;
        return a = n || location.hash,
        i = r || location.search,
        o = a.replace("#", "").split("&"),
        s = i.replace("?", "").split("&"),
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
    function d() {
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
        a = e.getAttribute(t),
        (i = {
            attr: a
        }).node = r,
        i) : m(e.parentNode, t) : null;
        var r, a, i
    }
    function g(e) {
        return e < 2 ? e : g(e - 2) + g(e - 1)
    }
    function v(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var t = e.fullPath
          , n = t.split("#s=")
          , r = a()(n, 2)[1]
          , i = t.split("/")
          , o = a()(i, 4)
          , s = o[1]
          , c = o[2]
          , u = o[3];
        s.match(/\w\w-\w\w/) || (s = "zh-cn"),
        "exchange" !== c && "margin" !== c && ("coin_coin" !== c && (r = r || c),
        c = u);
        var l = r ? "?s=".concat(r) : "";
        return "en-us" === s ? "/en-us/exchange/".concat(l) : "/".concat(s, "/").concat(c, "/").concat(l)
    }
    function _(e) {
        var t = (e + "").split(".")
          , n = a()(t, 2)[1];
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
        var t, n, r = decodeURIComponent(e) || "", a = s;
        return ~r.indexOf("http") && ((n = (t = r.replace("http://", "").replace("https://", "")).split("/")[0].split(".")).shift(),
        ~a.indexOf(t.split("/")[0]) || ~a.indexOf(n.join("."))) ? location.protocol + "//" + t : "/" + (r = (r = r.replace("http://", "").replace("https://", "")).replace(/^\/+/, "").replace(/\\/g, ""))
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
    function k() {
        setTimeout(function() {
            !function(e, t, n) {
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
                var a = e.gio = e.gio || function() {
                    (a.q = a.q || []).push(arguments)
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
    function O() {
        setTimeout(function() {
            var e;
            (e = window).zESettings = {
                webWidget: {
                    contactOptions: {
                        enabled: !0
                    }
                }
            },
            e.zEmbed || (function(t, n) {
                var r, a, i, o, s = [], c = document.createElement("iframe");
                e.zEmbed = function() {
                    s.push(arguments)
                }
                ,
                e.zE = e.zE || e.zEmbed,
                c.src = "javascript:false",
                c.title = "",
                c.role = "presentation",
                (c.frameElement || c).style.cssText = "display: none",
                (i = (i = document.getElementsByTagName("script"))[i.length - 1]).parentNode.insertBefore(c, i),
                o = c.contentWindow.document;
                try {
                    a = o
                } catch (t) {
                    r = document.domain,
                    c.src = 'javascript:var d=document.open();d.domain="' + r + '";void(0);',
                    a = o
                }
                a.open()._l = function() {
                    var e = this.createElement("script");
                    r && (this.domain = r),
                    e.id = "js-iframe-async",
                    e.src = "https://assets.zendesk.com/embeddable_framework/main.js",
                    this.t = +new Date,
                    this.zendeskHost = "huobiglobal.zendesk.com",
                    this.zEQueue = s,
                    this.body.appendChild(e)
                }
                ,
                a.write('<body onload="document._l();">'),
                a.close()
            }(),
            zE(function() {
                var e = localStorage.getItem("lang") || "en-us";
                zE.setLocale(e),
                $zopim(function() {
                    "zh-cn" !== e ? ($zopim.livechat.setLanguage("en"),
                    $zopim.livechat.window.setTitle("Support"),
                    $zopim.livechat.departments.setLabel("Choose a question type"),
                    $zopim.livechat.prechatForm.setGreetings("Hello, please choose a question type, add your UID or phone number. Thank you for your understanding and cooperation."),
                    $zopim.livechat.setOnConnected(function() {
                        var e = $zopim.livechat.departments.getAllDepartments().filter(function(e) {
                            return e.name.indexOf("--") > -1
                        }).map(function(e) {
                            return e.name
                        });
                        $zopim.livechat.departments.filter.apply({}, e)
                    })) : "zh-cn" === e && ($zopim.livechat.setLanguage("zh"),
                    $zopim.livechat.setOnConnected(function() {
                        var e = $zopim.livechat.departments.getAllDepartments().filter(function(e) {
                            return !(e.name.indexOf("--") > -1)
                        }).map(function(e) {
                            return e.name
                        });
                        $zopim.livechat.departments.filter.apply({}, e)
                    }))
                })
            }))
        }, 0)
    }
    function E(e, t) {
        var n = t[e] || {}
          , r = n.trade_price_precision
          , a = void 0 === r ? 8 : r
          , i = n.trade_amount_precision
          , o = void 0 === i ? 8 : i
          , s = n.trade_total_precision
          , c = void 0 === s ? 8 : s
          , u = n.fee_precision
          , l = void 0 === u ? 8 : u
          , f = n.display_name;
        return {
            tpp: a,
            tap: o,
            ttp: c,
            fp: l,
            display_name: void 0 === f ? e.toUpperCase() : f
        }
    }
    var T = function(e, t) {
        return t = null == t ? e.length - 1 : +t,
        function() {
            for (var n = Math.max(arguments.length - t, 0), r = Array(n), a = 0; a < n; a++)
                r[a] = arguments[a + t];
            switch (t) {
            case 0:
                return e.call(this, r);
            case 1:
                return e.call(this, arguments[0], r);
            case 2:
                return e.call(this, arguments[0], arguments[1], r)
            }
            var i = Array(t + 1);
            for (a = 0; a < t; a++)
                i[a] = arguments[a];
            return i[t] = r,
            e.apply(this, i)
        }
    }
      , C = (T(function(e, t, n) {
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }),
    window.huobiNative || window.webkit && window.webkit.messageHandlers.huobiNative)
      , S = {
        innerHTML: '!function(b,c){function e(){function m(){for(var e=navigator.userAgent,f=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod","rv:1.2.3.4","windows mobile","midp"],g=0,h=0;h<f.length;h++)if(0<=e.indexOf(f[h])){g++;break}return g}m()&&c.querySelector("html").classList.add("mobile");var g=750,i=screen.width,j=screen.height,k=i/g,l=i.viewMeta||c.querySelector("[name=viewport]")||c.createElement("meta");i.viewMeta||c.getElementsByTagName("head")[0].appendChild(l),l.setAttribute("name","viewport"),l.setAttribute("content","width="+g+", initial-scale="+k+",maximum-scale="+k+",minimum-scale="+k+", user-scalable=no,target-densitydpi=device-dpi,minimal-ui,uc-fitscreen=no"),i.viewMeta=l,window.viewPortNum=k}e();var f="onorientationchange"in b?"orientationchange":"resize";b.addEventListener(f,function(){e()},!1),b.showPlaceholder=1}(window,document);',
        type: "text/javascript"
    }
      , A = function(e, t, n) {
        var r = t - e
          , a = Math.floor(r / 864e5) + ""
          , i = Math.floor(r % 864e5 / 36e5) + ""
          , o = Math.floor(r % 36e5 / 6e4) + ""
          , s = Math.floor(r % 6e4 / 1e3) + "";
        return n && (a = a.padStart(2, "0"),
        i = i.padStart(2, "0"),
        o = o.padStart(2, "0"),
        s = s.padStart(2, "0")),
        {
            d: a,
            h: i,
            i: o,
            s: s
        }
    }
      , L = function(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        return n.forEach(function(t) {
            e = e.replace("%s", t)
        }),
        e
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return c
    }),
    n.d(t, "a", function() {
        return u
    }),
    n.d(t, "g", function() {
        return l
    }),
    n.d(t, "d", function() {
        return f
    }),
    n.d(t, "c", function() {
        return h
    }),
    n.d(t, "f", function() {
        return d
    }),
    n.d(t, "h", function() {
        return p
    }),
    n.d(t, "e", function() {
        return m
    }),
    n.d(t, "i", function() {
        return g
    });
    var r = n(4)
      , a = n.n(r)
      , i = (n(19),
    n(35),
    n(43),
    n(23),
    n(0))
      , o = n(185)
      , s = n(137);
    i.a.config({
        alias: o.a,
        granting: s.c,
        beforeGranting: s.b,
        resInterceptorsCode: [].concat([555], ["token-not-valid", "login-required"], [512, 403], [401])
    });
    var c = {
        logout: function() {
            return new Promise(function(e) {
                i.a.get("@uc/uc/open/logout", {
                    restOptions: {
                        reqInterceptorsIgnore: !0
                    }
                }),
                i.a.post("@pro/v1/users/logout", {}, {
                    restOptions: {
                        interceptorsIgnore: !0
                    }
                })
            }
            )
        },
        checkLogin: function() {
            return i.a.get("@uc/uc/open/login/check", {
                restOptions: {
                    resInterceptorsIgnore: !0
                }
            })
        }
    }
      , u = {
        riskControl: function(e) {
            return i.a.post("@uc/uc/open/risk/control", e)
        },
        exchangeLimit: function(e) {
            return i.a.get("@pro/v1/common/exchange", {
                params: {
                    symbol: e
                }
            })
        },
        symbols: function() {
            return i.a.get("@pro/v2/beta/common/symbols")
        },
        currencies: function() {
            var e = localStorage.lang.split("-");
            return e = e[0] + "-" + (e[1] || e[0]).toUpperCase(),
            i.a.get("@pro/v2/beta/common/currencies", {
                params: {
                    language: e
                }
            })
        },
        getExchangeRate: function() {
            return i.a.get("@general/exchange_rate/list")
        },
        getTimestamp: function() {
            return i.a.get("@pro/v1/common/timestamp")
        }
    }
      , l = {
        getUserInfo: function() {
            return i.a.get("@uc/uc/open/user/get")
        },
        getCountryId: function() {
            return i.a.get("@uc/uc/open/country_id/get")
        },
        getLicenseState: function(e) {
            return i.a.get("@uc/uc/open/license/state", {
                params: e
            })
        },
        setLicenseAgree: function(e) {
            return i.a.post("@uc/uc/open/license/agree", e)
        },
        getImgCaptcha: function(e) {
            return i.a.get("@uc/uc/open/captcha_code/send", {
                params: e
            })
        },
        getCountryList: function() {
            return i.a.get("@uc/uc/open/country/list")
        },
        sendEmailCode: function(e) {
            return i.a.post("@uc/uc/open/email_code/send", e)
        },
        sendSmsCode: function(e) {
            return i.a.post("@uc/uc/open/sms_code/send", e)
        },
        resetPwd: function(e) {
            return i.a.post("@uc/uc/open/login_password/reset", e)
        },
        accountVerify: {
            resetPwd: function(e) {
                return i.a.post("@uc/uc/open/login_password_reset/account_verify", e)
            }
        },
        securityVerify: {
            resetPwd: function(e) {
                return i.a.post("@uc/uc/open/login_password_reset/security_verify", e)
            }
        },
        getHadaxAllowAccess: function() {
            return i.a.get("@pro/v1/hadax/users/allow-access")
        },
        postHadaxAllowAccess: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return i.a.post("@pro/v1/hadax/users/allow-access", e)
        },
        getIdentity: function() {
            return i.a.get("@hbg/v1/hbg/open/svip/enjoy/get-identity")
        }
    }
      , f = {
        homeData: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-us"
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zh-cn";
            return i.a.get("@main/p/api/group/proIndex", {
                params: {
                    sectionId: 360000039481,
                    lang: e.replace("-", "_"),
                    language: t
                }
            })
        },
        getNoticeList: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-us";
            return i.a.get("@main/p/api/contents/zendesk/articles", {
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
            return i.a.get("@main/p/api/contents/zendesk/json/articles", {
                params: {
                    sectionId: t,
                    lang: e.replace("-", "_"),
                    language: n || "zh-cn"
                }
            })
        },
        hb10Overview: function() {
            return i.a.get("@general/index/constituent_symbol/overview")
        },
        overView5: function() {
            return i.a.get("@pro/market/overview5")
        },
        hbdmTicker: function() {
            return i.a.get("@hbdm/market/detail/merged", {
                params: {
                    symbol: "BTC_CQ"
                }
            })
        },
        contractInfo: function() {
            return i.a.get("@hbdm/v1/contract_contract_info", {
                params: {
                    symbol: "BTC",
                    contract_type: "quarter"
                }
            })
        }
    }
      , h = {
        accounts: function() {
            return i.a.get("@pro/v1/account/accounts")
        },
        balance: function() {
            return i.a.get("@pro/v1/account/spot-account/balance")
        },
        marginBalance: function(e) {
            return i.a.get("@pro/v1/margin/accounts/balance", e)
        },
        stableExchangeRate: function() {
            return i.a.get("@pro/v1/hbg/stableCoin/info")
        }
    }
      , d = {
        placeOrder: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.isPrime
              , r = t.isPrimePO
              , a = t.direct;
            return r && "buy" === a ? g.placePOOrder(e) : n ? g.placeOrder(e) : i.a.post("@pro/v1/order/orders/place", e)
        },
        getOrderMatchresults: function(e) {
            return i.a.get("@pro/v1/order/matchresults", {
                params: e
            })
        },
        getOrderDetail: function(e) {
            return i.a.get("@pro/v1/order/orders/".concat(e, "/matchresults"))
        },
        exportHistoryOrders: function(e) {
            return i.a.get("@pro/v1/hbg/order/export", {
                params: e
            })
        },
        exportResultOrders: function(e) {
            return i.a.get("@pro/v1/hbg/matchresults/export", {
                params: e
            })
        },
        downloadHistoryOrders: function(e) {
            return i.a.get("@pro/v1/hbg/order/download", {
                params: e
            })
        },
        downloadResultOrders: function(e) {
            return i.a.get("@pro/v1/hbg/matchresults/download", {
                params: e
            })
        },
        cancelOrder: function(e) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).isPrimePO ? g.cancelOrder(e) : i.a.post("@pro/v1/order/orders/".concat(e, "/submitcancel"), {})
        },
        cancelAllOrder: function(e) {
            return i.a.post("@pro/v1/order/orders/batchCancelOpenOrders", e)
        },
        getOrdersList: function(e) {
            return i.a.get("@pro/v1/order/orders", {
                params: e
            })
        },
        getOpenOrders: function(e) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).isPrimePO ? g.getOpenOrders({
                states: "submitting,submitted,canceling"
            }) : i.a.get("@pro/v1/order/openOrders", {
                params: e
            })
        },
        getOrderHistory: function(e) {
            return i.a.get("@pro/v1/order/orders", {
                params: e
            })
        },
        pairSet: function(e) {
            return i.a.post("@uc/uc/open/trading_pair/add", {
                website: "PRO",
                trading_pair: e
            })
        },
        pairGet: function() {
            return i.a.get("@uc/uc/open/trading_pair/list", {
                params: {
                    website: "PRO"
                }
            })
        },
        pairDel: function(e) {
            return i.a.post("@uc/uc/open/trading_pair/cancel", {
                website: "PRO",
                trading_pair: e
            })
        }
    }
      , p = {
        proUserAuth: function(e) {
            return i.a.post("@main/api/user_auth.php", {
                method: e || "get_auth_pro_status"
            })
        }
    }
      , m = {
        marginSettings: function(e) {
            return i.a.get("@pro/v1/margin/settings", {
                params: a()({}, e)
            })
        },
        marginTransferIn: function(e) {
            return i.a.post("@pro/v1/dw/transfer-in/margin", e)
        },
        marginTransferOut: function(e) {
            return i.a.post("@pro/v1/dw/transfer-out/margin", e)
        },
        marginLoanOrder: function(e) {
            return i.a.post("@pro/v1/margin/orders", e)
        }
    }
      , g = {
        getInfo: function() {
            return i.a.get("@hbg/prime/v1/get")
        },
        getPositionList: function() {
            return i.a.get("@hbg/prime/v1/averagePosition/list")
        },
        getUserLimit: function() {
            return i.a.get("@hbg/prime/v1/user/limit")
        },
        getUserInfo: function() {
            return i.a.get("@hbg/prime/v1/averagePosition/get")
        },
        getAliToken: function() {
            return i.a.get("@hbg/prime/v1/slider/alitoken")
        },
        placeOrder: function(e) {
            return i.a.post("@hbg/prime/v1/order/place", e)
        },
        placePOOrder: function(e) {
            return i.a.post("@hbg/prime/v1/po/order/place", e)
        },
        getOpenOrders: function(e) {
            return i.a.get("@hbg/prime/v1/po/order/orders", {
                params: e
            })
        },
        cancelOrder: function(e) {
            return i.a.post("@hbg/prime/v1/po/order/orders/".concat(e, "/submitcancel"))
        },
        setPrimeInfo: function(e) {
            return i.a.post("@hbg/prime/v1/info", e)
        },
        getPrimePoResult: function() {
            return i.a.get("@hbg/prime/v1/po/result")
        }
    }
}
, , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return _
    });
    var r = n(26)
      , a = n.n(r)
      , i = (n(30),
    n(31),
    n(51),
    n(131),
    n(10))
      , o = n.n(i)
      , s = (n(34),
    n(35),
    n(66),
    n(37))
      , c = n.n(s)
      , u = n(188)
      , l = n.n(u)
      , f = n(189)
      , h = n.n(f)
      , d = n(190)
      , p = n.n(d)
      , m = (n(40),
    n(33))
      , g = n.n(m)
      , v = (n(114),
    n(23),
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
        var a = function(e) {
            var a = r._ee_.params[e] = n[e];
            Object.defineProperty(t.params, e, {
                set: function(e) {
                    a !== e && (a = e,
                    r._ee_.apiName && r._ee_._inited && (r._ee_._fetchTimeout && clearTimeout(r._ee_._fetchTimeout),
                    r._ee_._fetchTimeout = setTimeout(function() {
                        S.publish("".concat(r._ee_.apiName, ".paramChanged"), r.params, !1),
                        delete r._ee_._fetchTimeout
                    }, 0)))
                },
                get: function() {
                    return a
                }
            })
        };
        for (var i in n)
            a(i);
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
                "input" !== e.tagName.toLowerCase() && "textarea" !== e.tagName.toLowerCase() || O.includes(e.type) || T(e)) : "focusout" === n.type && (S.publish("".concat(t[r], ".blur"), e, n),
                "input" !== e.tagName.toLowerCase() && "textarea" !== e.tagName.toLowerCase() || C()),
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
    var k, O = ["checkbox", "radio", "button"];
    var E = "";
    function T(e) {
        if (e.value !== E) {
            E = e.value;
            for (var t = y(e), n = 0; t[n]; )
                S.publish("".concat(t[n++], ".input"), e, E)
        }
        k = window.requestAnimationFrame(function() {
            T(e)
        })
    }
    function C() {
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
                var a = this._getSubscriber(e);
                for (var i in a)
                    a.hasOwnProperty(i) && this._triggerSuberObject(i, a[i], n);
                return this
            }
        }, {
            key: "_triggerSuberObject",
            value: function(e, t, n) {
                if (t && t.length) {
                    for (var r = [], a = 0; a < t.length; a++)
                        this._fireFn(t[a].fn, n),
                        t[a].once || r.push(t[a]);
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
                var a = n ? this._getAshByEventN(e) : []
                  , i = this._getAPIsByEventN(e);
                if (i._ee_api_count) {
                    var o = [];
                    for (var s in i.list) {
                        var c = this._getAPICache(i.list[s]);
                        i.list.hasOwnProperty(s) && c && o.push(c)
                    }
                    if (o.length) {
                        if (r)
                            return this._fireFn(t, [o[o.length - 1].value, {}, e]),
                            this;
                        for (var u = 0; u < o.length; u++)
                            this._fireFn(t, [o[u].value, {}, e])
                    } else
                        i._ee_api_count && this._initAPI(i)
                } else if (a.length) {
                    if (r)
                        return this._fireFn(t, a[a.length - 1].concat([e])),
                        this;
                    for (var l = 0; l < a.length; l++)
                        this._fireFn(t, a[l].concat([e]))
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
                    e.list.hasOwnProperty(n) && !e.list[n]._ee_._inited && (e.list[n]._ee_._parmChangeHandler = function(r, a) {
                        t._fetchAPI(n, e.list[n], a)
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
                "object" === a()(t) && (t = JSON.stringify(t)),
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
                        var a = this._getAPICache(t);
                        if (a)
                            return void S.publish(e, a.value, {})
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
                  , a = arguments.length > 3 ? arguments[3] : void 0
                  , i = [e];
                e instanceof RegExp ? this._wildcardSubscriber.push(e) : i = e.split(/[\s,]+/),
                i.forEach(function(e) {
                    e && n._addEventListener(e, t, r, a)
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
, function(e, t, n) {
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
        return f
    }),
    n.d(t, "b", function() {
        return h
    });
    var r = n(4)
      , a = n.n(r)
      , i = (n(35),
    n(19),
    n(0))
      , o = {
        getHomepageData: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-us";
            return i.a.get("@main/p/api/group/proIndex", {
                params: {
                    sectionId: 360000039481,
                    lang: e.replace("-", "_"),
                    language: e
                }
            })
        },
        getNoticeList: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-us";
            return i.a.get("@main/p/api/contents/zendesk/articles", {
                params: {
                    sectionId: 360000039481,
                    lang: e.replace("-", "_"),
                    language: "zh-cn"
                }
            })
        },
        getCurrencyIntro: function(e) {
            return i.a.get("@main/p/api/contents/pro/currency_introduction", {
                params: e
            })
        },
        getSymbol: function() {
            return i.a.get("@pro/v2/beta/common/symbols")
        },
        getCurrency: function(e) {
            var t = localStorage.lang.split("-");
            return t = t[0] + "-" + (t[1] || t[0]).toUpperCase(),
            i.a.get("@pro/v2/beta/common/currencies", {
                params: {
                    language: t
                }
            })
        },
        getExchangeRate: function() {
            return i.a.get("@general/exchange_rate/list")
        },
        getOrdersList: function(e) {
            return i.a.get("@pro/v1/order/orders", {
                params: e
            })
        },
        cancelOrder: function(e) {
            return i.a.post("@pro/v1/order/orders/".concat(e, "/submitcancel"), {})
        },
        cancelAllOrder: function(e) {
            return i.a.post("@pro/v1/order/orders/batchCancelOpenOrders", e)
        }
    }
      , s = {
        ucLogin: function(e) {
            return i.a.post("@uc/uc/open/login", e)
        },
        ucLogout: function() {
            return i.a.get("@uc/uc/open/logout")
        },
        getUcLoginCheck: function() {
            return i.a.get("@uc/uc/open/login/check", {}, {
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
            return i.a.post("@pro/v1/users/token/verify", {
                data: e
            })
        },
        ucGetTicket: function() {
            return i.a.get("@uc/uc/open/ticket/get", {
                restOptions: {
                    resInterceptorsIgnore: !0,
                    nidaye: 1
                }
            })
        },
        getUserInfo: function() {
            return i.a.get("@uc/uc/open/user/get")
        },
        getCountryId: function() {
            return i.a.get("@uc/uc/open/country_id/get")
        },
        kvGet: function(e) {
            return i.a.get("@uc/uc/open/kv_store/get", {
                params: {
                    store_key: e,
                    website: "PRO"
                }
            })
        },
        kvSet: function(e) {
            return i.a.post("@uc/uc/open/kv_store/set", a()({}, e, {
                website: "PRO"
            }))
        },
        getLicenseState: function(e) {
            return i.a.get("@uc/uc/open/license/state", {
                params: e
            })
        },
        setLicenseAgree: function(e) {
            return i.a.post("@uc/uc/open/license/agree", e)
        },
        riskControl: function(e) {
            return i.a.post("@uc/uc/open/risk/control", e)
        },
        getImgCaptch: function(e) {
            return i.a.get("@uc/uc/open/captcha_code/send", {
                params: e
            })
        },
        getCountryList: function() {
            return i.a.get("@uc/uc/open/country/list")
        },
        sendEmailCode: function(e) {
            return i.a.post("@uc/uc/open/email_code/send", e)
        },
        sendSmsCode: function(e) {
            return i.a.post("@uc/uc/open/sms_code/send", e)
        },
        resetPwd: function(e) {
            return i.a.post("@uc/uc/open/login_password/reset", e)
        },
        accountVerify: {
            resetPwd: function(e) {
                return i.a.post("@uc/uc/open/login_password_reset/account_verify", e)
            }
        },
        securityVerify: {
            resetPwd: function(e) {
                return i.a.post("@uc/uc/open/login_password_reset/security_verify", e)
            }
        },
        ucGetSMSCode: function(e) {
            return i.a.post("@uc/uc/open/sms_code/send", e)
        },
        ucGetEmailCode: function(e) {
            return i.a.post("@uc/uc/open/email_code/send", e)
        },
        ucLogin2FA: function(e) {
            return i.a.post("@uc/uc/open/2fa/login", e)
        },
        ucRegister: function(e) {
            return i.a.post("@uc/uc/open/register", e)
        }
    }
      , c = {
        proLogin: function(e) {
            return i.a.post("@pro/v1/users/login", a()({}, e, {
                restOptions: {
                    resInterceptorsIgnore: !0
                }
            }))
        },
        proLogout: function() {
            return i.a.post("@pro/v1/users/logout", {
                restOptions: {
                    resInterceptorsIgnore: !0
                }
            })
        },
        accounts: function() {
            return i.a.get("@pro/v1/account/accounts")
        },
        balance: function() {
            return i.a.get("@pro/v1/account/spot-account/balance")
        },
        marginBalance: function() {
            return i.a.get("@pro/v1/margin/accounts/balance")
        },
        placeOrder: function(e, t) {
            return t ? l.placeOrder(e) : i.a.post("@pro/v1/order/orders/place", e)
        },
        getAllowAccess: function() {
            return i.a.get("@pro/v1/hadax/users/allow-access")
        },
        postAllowAccess: function(e) {
            return i.a.post("@pro/v1/hadax/users/allow-access", e)
        }
    }
      , u = {
        getClientList: function() {
            return i.a.get("@hbg/v1/hbg/open/client/list")
        }
    }
      , l = {
        placeOrder: function(e) {
            return i.a.post("@hbg/prime/v1/order/place", e)
        }
    }
      , f = {
        login: function(e) {
            return i.a.post("@huobi/api/uc.php", a()({}, e, {
                method: "login"
            }))
        },
        proUserAuth: function() {
            return i.a.post("@main/api/user_auth.php", {
                method: "get_auth_pro_status"
            })
        }
    }
      , h = {
        getOrderDetail: function(e) {
            return i.a.get("@pro/v1/order/orders/".concat(e, "/matchresults"))
        },
        exchangeControl: function(e) {
            return i.a.get("@pro/v1/common/exchange", e)
        },
        pairSet: function(e) {
            return i.a.post("@uc/uc/open/trading_pair/add", {
                website: "PRO",
                trading_pair: e
            })
        },
        pairGet: function() {
            return i.a.get("@uc/uc/open/trading_pair/list", {
                params: {
                    website: "PRO"
                }
            })
        },
        pairDel: function(e) {
            return i.a.post("@uc/uc/open/trading_pair/cancel", {
                website: "PRO",
                trading_pair: e
            })
        }
    }
}
, , , function(e, t, n) {
    "use strict";
    n(19),
    n(50);
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
                switch (this.extra) {
                case "backurl":
                    return "".concat(this.url, "?backUrl=").concat(this.$route.fullPath);
                case "lang":
                    var e = this.$store.state.exchange.exchangeType
                      , t = this.$route.fullPath.match(/\?s=/) ? this.$route.fullPath.replace("?", "#") : this.$route.fullPath;
                    return t = t.replace(/\/\w{2}-\w{2}/, ""),
                    "margin" === e && t.indexOf("/exchange/") > -1 && (t = t.replace("/exchange/", "/margin/")),
                    "".concat(this.url).concat(t);
                default:
                    return this.url
                }
            }
        }
    }
      , a = n(5)
      , i = Object(a.a)(r, function() {
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
    }, [], !1, null, "f83ca82c", null);
    t.a = i.exports
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    }),
    n.d(t, "b", function() {
        return a
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
    function a(e, t) {
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
, , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return E
    }),
    n.d(t, "b", function() {
        return C
    });
    var r = n(10)
      , a = n.n(r)
      , i = n(4)
      , o = n.n(i)
      , s = (n(30),
    n(31),
    n(51),
    n(16),
    n(19),
    n(114),
    n(9),
    n(1))
      , c = n.n(s)
      , u = n(33)
      , l = n.n(u)
      , f = n(37)
      , h = n.n(f)
      , d = (n(291),
    n(43),
    n(23),
    n(66),
    n(187))
      , p = n.n(d)
      , m = n(14)
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
    function O(e) {
        var t = new FileReader;
        return new Promise(function(n) {
            if (k)
                t.addEventListener("loadend", function() {
                    for (var e = "", r = new Uint8Array(t.result), a = r.byteLength, i = 0; i < a; i++)
                        e += String.fromCharCode(r[i]);
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
    var E, T, C, S = function() {
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
                m.a.pub("socket.connect", this.ws)
            }
        }, {
            key: "_reconnect",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host;
                this.ws = new WebSocket(e),
                this.t = this.t + 1,
                this._regEvent(this.ws)
            }
        }, {
            key: "_error",
            value: function(e) {}
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
                    for (var a = this.__cb[r].length; a--; )
                        this.__cb[r][a](e);
                1 === n && (this.__cb[r] = void 0),
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
                                O(t.data);
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
                    return e.ping ? this._heartbeat(e.ping) : r ? ("unsubbed" === t ? (delete this._callback.ch[n],
                    delete this._callback[t][n],
                    this._delMsg(4, "unsub.".concat(n), n)) : "rep" === t && (delete this._callback[t][n],
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
                  , a = w(e)
                  , i = x(e)
                  , o = i.replace(/^unsub/, "sub")
                  , s = {
                    unsub: i.replace(/^sub/, "unsub").replace("unsub.", "")
                }
                  , c = this.__cb[o];
                if ("req" !== _[a] && c) {
                    for (var u = c.length; u--; ) {
                        if (t.alias && c[u].alias === t.alias) {
                            c.splice(u, 1),
                            n && n(0);
                            break
                        }
                        if (!t.alias && c[u].bodywords === t.toString().replace(/[^\d\w]/g, "")) {
                            t.name,
                            c.splice(u, 1),
                            n && n(0);
                            break
                        }
                    }
                    c.length || (this.__cb[i] = void 0,
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
            O(new Blob([new ArrayBuffer(1)],{
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
              , a = void 0 === r ? "btcusdt" : r
              , i = n.period
              , o = void 0 === i ? "1min" : i
              , s = n.step
              , c = void 0 === s ? "step0" : s
              , u = n.id
              , f = void 0 === u ? 0 : u;
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
                    return "market.".concat(e.symbol || a, ".kline.").concat(e.period || o)
                },
                trade: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return "market.".concat(e.symbol || a, ".trade.detail")
                },
                depth: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return "market.".concat(e.symbol || a, ".depth.").concat(e.step || c)
                },
                ticker: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return "market.".concat(e.symbol || a, ".detail")
                },
                tickerById: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return "market.".concat(e.id || f, ".exdetail.").concat(e.symbol || a)
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
                return this._apis.reduce(function(r, i) {
                    return r[i] = function() {
                        return o()(a()({}, e, t._channel[i](n)), n)
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
    T = {},
    !v && (E = T.operator || new A),
    function(e) {
        C = e.socketAPI || new L
    }({})
}
, , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(30),
    n(31),
    n(23),
    n(51),
    n(40);
    var r, a, i = n(10), o = n.n(i), s = (n(19),
    n(131),
    n(26)), c = n.n(s);
    var u = "mini-toastr"
      , l = "error"
      , f = "warn"
      , h = "success"
      , d = "info"
      , p = u
      , m = "".concat(u, "__notification")
      , g = "".concat(u, "-notification__title")
      , v = "".concat(u, "-notification__icon")
      , _ = "".concat(u, "-notification__message")
      , b = "".concat(u, "-in")
      , y = "".concat(u, "-out")
      , w = "-".concat(l)
      , x = "-".concat(f)
      , k = "-".concat(h)
      , O = "-".concat(d)
      , E = "";
    function T(e) {
        var t = function e(t, n, r) {
            for (var a in n = n || {},
            r = r || E,
            t)
                if (t.hasOwnProperty(a)) {
                    var i = t[a];
                    i && "object" === c()(i) && !(i instanceof Date || i instanceof RegExp) ? e(i, n, r + a + " ") : n[r] && "object" === c()(n[r]) ? n[r][a] = i : (n[r] = {},
                    n[r][a] = i)
                }
            return n
        }(e)
          , n = JSON.stringify(t, null, 2);
        return n = (n = n.replace(/"([^"]*)": {/g, "$1 {").replace(/"([^"]*)"/g, "$1").replace(/(\w*-?\w*): ([\w\d .#]*),?/g, "$1: $2;").replace(/},/g, "}\n").replace(/ &([.:])/g, "$1")).substr(1, n.lastIndexOf("}") - 1)
    }
    var C = {
        types: {
            ERROR: l,
            WARN: f,
            SUCCESS: h,
            INFO: d
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
        style: (a = {},
        o()(a, ".".concat(p), {
            position: "fixed",
            "z-index": 2000000001,
            right: "12px",
            top: "12px"
        }),
        o()(a, ".".concat(m), (r = {
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
        o()(r, "&.".concat(O), {
            "background-color": "#4196E1"
        }),
        o()(r, "&:hover", {
            opacity: 1,
            "box-shadow": "#000 0 0 12px"
        }),
        r)),
        o()(a, ".".concat(g), {
            "font-weight": "500"
        }),
        o()(a, ".".concat(_), {
            display: "inline-block",
            "vertical-align": "middle",
            width: "240px",
            padding: "0 12px"
        }),
        a)
    };
    function S() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div";
        return document.createElement(e)
    }
    function A(e, t, n, r) {
        var a = S();
        a.className = n,
        r.allowHtml ? a.innerHTML = t : a.appendChild(document.createTextNode(t)),
        e.appendChild(a)
    }
    var L = {}
      , I = {
        config: C,
        isInitialised: !1,
        showMessage: function(e, t, n, r, a, i) {
            var o = {}
              , s = "".concat(e).concat(t).concat(n);
            L[s] = L[s] || {},
            L[s].id && clearTimeout(L[s].id),
            Object.assign(o, this.config),
            Object.assign(o, i);
            var c = L[s].node;
            return c || ((c = L[s].node = S()).className = "".concat(m, " ").concat(b, " ").concat(function(e) {
                return e === h ? k : e === f ? x : e === l ? w : e === d ? O : E
            }(n)),
            c.onclick = function() {
                o.animation(c, null),
                L[s].node = null
            }
            ,
            t && A(c, t, g, o),
            o.icons[n] && function(e, t, n) {
                var r = S(n.icons[t].nodeType)
                  , a = n.icons[t].attrs;
                for (var i in a)
                    a.hasOwnProperty(i) && r.setAttribute(i, a[i]);
                e.appendChild(r)
            }(c, n, o),
            e && A(c, e, _, o),
            o.node.insertBefore(c, o.node.firstChild)),
            L[s].id = setTimeout(function() {
                o.animation(c, a),
                L[s].node = null
            }, r || o.timeout),
            a && a(),
            this
        },
        init: function(e) {
            var t = this
              , n = {};
            Object.assign(n, C),
            Object.assign(n, e),
            this.config = n;
            var r, a, i, o = T(n.style);
            return r = o,
            a = document.head || document.getElementsByTagName("head")[0],
            (i = S("style")).id = "".concat(u, "-styles"),
            i.type = "text/css",
            i.styleSheet ? i.styleSheet.cssText = r : i.appendChild(document.createTextNode(r)),
            a.appendChild(i),
            n.node.id = p,
            n.node.className = p,
            n.appendTarget.appendChild(n.node),
            Object.keys(n.types).forEach(function(e) {
                t[n.types[e]] = function(t, r, a, i, o) {
                    return this.showMessage(t, r, n.types[e], a, i, o),
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
    I.setIcon("error", "i", {
        class: "hb_icon_toast_failed color-down"
    }),
    I.setIcon("success", "i", {
        class: "hb_icon_toast_success color-up"
    });
    var R = I.init({
        timeout: 3e3,
        style: {}
    });
    t.default = R
}
, , , function(e, t, n) {
    "use strict";
    var r = n(33)
      , a = n.n(r)
      , i = n(37)
      , o = n.n(i)
      , s = function() {
        function e() {
            var t, n, r = this;
            a()(this, e),
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
        n(19),
        n(50);
        var r = !e.env.BUILD_ENV && !0
          , a = !e.env.BUILD_ENV && "prd" === localStorage.ws
          , i = !!location.hostname.match(/(dev|test|i18n|localhost)-?/)
          , o = "";
        try {
            o = "".concat(location.origin.replace("http", "ws"), "/-/s")
        } catch (e) {
            o = "".concat("https://www.huobi.co".replace("http", "ws"), "/-/s")
        }
        var s = {
            ws: r && !i || a ? "wss://api.huobi.br.com/ws" : "".concat(o, "/pro/ws"),
            hbws: "".concat(o, "/hb/ws")
        }
    }
    ).call(this, n(58))
}
, , , , , , , , , , , function(e, t, n) {
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
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return f
    }),
    n.d(t, "b", function() {
        return d
    });
    n(34),
    n(38),
    n(9);
    var r = n(1)
      , a = n.n(r)
      , i = n(4)
      , o = n.n(i)
      , s = n(21)
      , c = n.n(s)
      , u = n(0)
      , l = n(6)
      , f = {
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
        ticketApi: f.getTicket,
        cookieHost: Object(l.j)(),
        afterGetTicket: function() {
            var e = a()(regeneratorRuntime.mark(function e(t) {
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
                            Object(l.q)("HB-UC-TOKEN"),
                            Object(l.q)("HB-PRO-TOKEN"),
                            localStorage.removeItem("UC_IS_LOGIN"),
                            setTimeout(function() {
                                location.reload()
                            }, Math.floor(3 * Math.random() * 1e3)),
                            e.next = 13;
                            break;
                        case 8:
                            return e.next = 10,
                            Promise.resolve().then(n.bind(null, 75));
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
                grantingApi: f.pro,
                force: e
            }))
        },
        "@main": function(e) {
            return Object(u.b)(o()({}, h, {
                cookieName: "HB-OLD-TOKEN",
                grantingApi: f.main,
                grantingApiOption: {
                    method: "login"
                },
                force: e
            }))
        },
        "@hbg": function(e) {
            return Object(u.b)(o()({}, h, {
                cookieName: "HB-PRO-TOKEN",
                grantingApi: f.pro,
                force: e
            }))
        }
    };
    var d = function() {
        return !!+localStorage.getItem("UC_IS_LOGIN")
    }
}
, , , function(e, t, n) {
    "use strict";
    n(9);
    var r = n(1)
      , a = n.n(r)
      , i = (n(51),
    n(40),
    n(4))
      , o = n.n(i)
      , s = (n(66),
    n(34),
    n(38),
    n(8))
      , c = n.n(s)
      , u = (n(31),
    n(23),
    n(304),
    n(60),
    n(61),
    n(30),
    n(47))
      , l = n.n(u)
      , f = n(33)
      , h = n.n(f)
      , d = n(37)
      , p = n.n(d)
      , m = n(14)
      , g = n(3)
      , v = n(7)
      , _ = Object(m.b)({
        maxAge: 0,
        type: "x",
        fetch: function() {
            return v.c.accounts()
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
            return v.c.balance(e)
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
            return v.c.marginBalance(e)
        }
    });
    m.a.use({
        accounts: _,
        balance: b,
        marginBalance: y
    });
    var w, x, k = ["trade", "frozen", "loan", "lock", "interest"], O = function() {
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
                    for (var a, i = this.quoteList[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                        var o = a.value;
                        this.estimate[o] = this.estimate[o] || {};
                        for (var s = 0, u = Object.entries(this.balance); s < u.length; s++) {
                            var l = c()(u[s], 2)
                              , f = l[0]
                              , h = l[1].all
                              , d = (e["".concat(f).concat(o)] || {}).close
                              , p = (e["".concat(o).concat(f)] || {}).close;
                            if (this.stableCoins.includes(f)) {
                                var m = this.stableCoinObj[f]["bid-rate"];
                                m = m || 1;
                                var v = (e["".concat(o).concat(this.stableCoin)] || {}).close;
                                if (v) {
                                    h = Object(g.e)(m, h),
                                    this.estimate[o][f] = Object(g.e)(Object(g.b)(1, v), h);
                                    continue
                                }
                            }
                            d ? this.estimate[o][f] = Object(g.e)(h, d) : p ? this.estimate[o][f] = Object(g.e)(Object(g.b)(1, p), h) : f !== o || (this.estimate[o][f] = h)
                        }
                    }
                } catch (e) {
                    n = !0,
                    r = e
                } finally {
                    try {
                        t || null == i.return || i.return()
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
                    var a = this.overviewObj["".concat(t).concat(n)];
                    if (a) {
                        var i = a.close;
                        return Object(g.e)(i, r)
                    }
                }
                var o = !0
                  , s = !1
                  , c = void 0;
                try {
                    for (var u, l = this.quoteList[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
                        var f = u.value;
                        if (void 0 !== r) {
                            var h = this.overviewObj["".concat(f).concat(n)] || {}
                              , d = h.close
                              , p = h.symbol
                              , m = this.overviewObj["".concat(n).concat(f)] || {}
                              , v = m.close
                              , _ = m.symbol;
                            if (!p && !_)
                                continue;
                            if (_ === "".concat(t).concat(n)) {
                                if (v)
                                    return Object(g.e)(Object(g.b)(1, v), r)
                            } else if (p === "".concat(t).concat(n)) {
                                if (d)
                                    return Object(g.e)(d, r)
                            } else if (_ === "".concat(n).concat(t) && v)
                                return Object(g.e)(Object(g.b)(1, v), r)
                        } else {
                            var b = this.estimate[f] && this.estimate[f][t];
                            if (1 * b) {
                                var y = (this.overviewObj["".concat(f).concat(n)] || {}).close
                                  , w = (this.overviewObj["".concat(n).concat(f)] || {}).close;
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
                          , a = t.balance;
                        return e[n] || (e[n] = {
                            all: 0
                        }),
                        e[n][r] = a,
                        k.includes(r) && (e[n].all = Object(g.a)(e[n].all, a)),
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
                        var a = r.reduce(function(e, t) {
                            var n = t.currency
                              , r = t.type
                              , a = t.balance;
                            return e[n] || (e[n] = {
                                all: 0
                            },
                            e.currencys.push(n)),
                            e[n][r] = a,
                            k.includes(r) && (e[n].all = Object(g.a)(e[n].all, a)),
                            e
                        }, {
                            currencys: []
                        });
                        return Object.assign(e[n], a),
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
                          , a = void 0;
                        try {
                            for (var i, o = t.data[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                                var s = i.value
                                  , c = s.id
                                  , u = s.type
                                  , l = s.subtype
                                  , f = s.state;
                                l ? (e.accounts[u] || (e.accounts[u] = {}),
                                e.accounts[u][l] = {
                                    id: c,
                                    state: f
                                }) : "working" === f && (e.accounts[u] = c)
                            }
                        } catch (e) {
                            r = !0,
                            a = e
                        } finally {
                            try {
                                n || null == o.return || o.return()
                            } finally {
                                if (r)
                                    throw a
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
                        return this.marginBalance[n][e][t] || 0
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
                    var a = e.getEstimate(r, t)
                      , i = c()(n, 2)
                      , o = i[0]
                      , s = i[1];
                    return a || !e.balance[r].all ? [o = Object(g.a)(o, a), s] : [o, 1]
                }, [0, 1])
                  , r = c()(n, 2)
                  , a = r[0];
                if (r[1])
                    return a
            }
        }, {
            key: "getMarginTotal",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.allInOne
                  , n = Object.keys(this.marginBalance).reduce(function(n, r) {
                    var a = e.marginBalance[r]
                      , i = a.currencys
                      , o = c()(i, 2)
                      , s = o[0]
                      , u = o[1]
                      , l = e.getEstimate(s, t, a[s].all)
                      , f = e.getEstimate(u, t, a[u].all)
                      , h = c()(n, 2)
                      , d = h[0]
                      , p = h[1];
                    return l || f ? (d = Object(g.a)(d, l || 0),
                    [d = Object(g.a)(d, f || 0), p]) : [d, 1]
                }, [0, 1])
                  , r = c()(n, 2)
                  , a = r[0];
                if (r[1])
                    return a
            }
        }, {
            key: "initStableExchangeRate",
            value: function() {
                var e = a()(regeneratorRuntime.mark(function e() {
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
                                v.c.stableExchangeRate();
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
    w = (x = {}).huobiBalance || x.B || new O,
    t.a = w
}
, , , , , function(e, t, n) {
    "use strict";
    n(82);
    var r = n(4)
      , a = n.n(r)
      , i = n(11)
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
        computed: a()({}, Object(i.b)({
            isPrime: "exchange/isPrime"
        }), Object(i.c)({
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
                    if (clearTimeout(this.reloadPage),
                    e.currency) {
                        var t = e.tradeBeginTime - e.currentTime;
                        !this.reloadPage && this.updateAll && t > 0 && (this.reloadPage = setTimeout(function() {
                            window.location.reload()
                        }, t)),
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
                var a = e.rounds.find(function(e) {
                    if (n < e.roundEndTime) {
                        if (!r)
                            return t.round = e.roundNum,
                            t.roundState = n > 1535416000000 ? 1 : 0,
                            t.beginTime = 1535416000000,
                            e.now = n,
                            r = !0,
                            e
                    } else
                        t.round = e.roundNum,
                        t.roundState = 2,
                        t.tradeBeginTime = t.primeInfo.tradeBeginTime
                });
                this.primeStatus.round === this.round && this.primeStatus.state === this.roundState || this.$store.commit("exchange/SET_PRIME_STATUS", {
                    round: this.round,
                    state: this.roundState
                }),
                a && (this.setPrimeStaus(a),
                this.timer = setTimeout(function() {
                    t.formatTimer(e, n + 1e3)
                }, 1e3))
            },
            setPrimeStaus: function(e) {
                if (e) {
                    var t = 0 === this.roundState ? 1535416000000 : e.roundEndTime
                      , n = Object(o.k)(e.now, t, !0);
                    this.leftTime = a()({}, n)
                }
            }
        }
    }
      , c = (n(284),
    n(5))
      , u = Object(c.a)(s, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("section", {
            staticClass: "time-left"
        }, [n("dl", [n("dd", [n("span", [e._v(e._s(e.leftTime.d))])]), e._v(" "), n("dt", [e._v("天")]), e._v(" "), n("dd", [n("span", [e._v(e._s(e.leftTime.h))])]), e._v(" "), n("dt", [e._v("时")]), e._v(" "), n("dd", [n("span", [e._v(e._s(e.leftTime.i))])]), e._v(" "), n("dt", [e._v("分")]), e._v(" "), n("dd", [n("span", [e._v(e._s(e.leftTime.s))])]), e._v(" "), n("dt", [e._v("秒")])])])
    }, [], !1, null, "cf143be6", null);
    t.a = u.exports
}
, , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n.p + "img/2694b22.svg"
}
, , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(47)
      , a = n.n(r)
      , i = (n(9),
    n(1))
      , o = n.n(i)
      , s = n(186)
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
                var t, r, a, i, o, s, c, u, l, f, h = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return localStorage.removeItem("marginGuide"),
                            this.$store.dispatch("gio/track", "PM_WEB_MARGIN_INTRO_POP_EXPOSE"),
                            e.next = 3,
                            n.e(61).then(n.t.bind(null, 654, 3));
                        case 3:
                            return t = e.sent,
                            r = t.default,
                            e.next = 7,
                            n.e(20).then(n.t.bind(null, 655, 3));
                        case 7:
                            return a = e.sent,
                            i = a.default,
                            e.next = 11,
                            n.e(21).then(n.t.bind(null, 656, 3));
                        case 11:
                            return o = e.sent,
                            s = o.default,
                            e.next = 15,
                            n.e(22).then(n.t.bind(null, 657, 3));
                        case 15:
                            c = e.sent,
                            u = c.default,
                            this.jsonFile = [r, i, s, u],
                            f = 0,
                            (l = ["/static/margin_guide_svg/guide1_5_bg.svg", "/static/margin_guide_svg/guide1_1.png", "/static/margin_guide_svg/guide1_2.svg", "/static/margin_guide_svg/guide1_3.svg", "/static/margin_guide_svg/guide1_4.svg", "/static/margin_guide_svg/guide1_5.svg", "/static/margin_guide_svg/guide1_5_bg.svg", "/static/margin_guide_svg/guide2_1.png", "/static/margin_guide_svg/guide2_2.svg", "/static/margin_guide_svg/guide2_3.svg", "/static/margin_guide_svg/guide2_4.svg", "/static/margin_guide_svg/guide2_5.svg", "/static/margin_guide_svg/guide2_bg.svg", "/static/margin_guide_svg/guide3_1.svg", "/static/margin_guide_svg/guide3_2.svg", "/static/margin_guide_svg/guide3_3.svg", "/static/margin_guide_svg/guide3_4.svg", "/static/margin_guide_svg/guide3_5.svg", "/static/margin_guide_svg/guide3_bg.svg", "/static/margin_guide_svg/guide4_1.svg", "/static/margin_guide_svg/guide4_2.svg", "/static/margin_guide_svg/guide4_3.svg", "/static/margin_guide_svg/guide4_bg.svg", "/static/margin_guide_svg/guide_bg_shadow.png", "/static/margin_guide_svg/margin_guide_title.png"]).forEach(function(e) {
                                var t = new Image;
                                t.src = e,
                                h.$refs.loadingLayer.appendChild(t),
                                t.onload = function() {
                                    ++f === l.length && (h.loading = !1,
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
                    var t, r, i, o, s, c;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                n.e(20).then(n.t.bind(null, 655, 3));
                            case 2:
                                return t = e.sent,
                                r = t.default,
                                e.next = 6,
                                n.e(21).then(n.t.bind(null, 656, 3));
                            case 6:
                                return i = e.sent,
                                o = i.default,
                                e.next = 10,
                                n.e(22).then(n.t.bind(null, 657, 3));
                            case 10:
                                s = e.sent,
                                c = s.default,
                                this.jsonFile = [].concat(a()(this.jsonFile), [r, o, c]);
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
      , l = (n(277),
    n(5))
      , f = Object(l.a)(u, function() {
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
    t.a = f.exports
}
, , , function(e, t, n) {
    "use strict";
    (function(e) {
        n(40),
        n(50);
        var r = n(21)
          , a = n.n(r)
          , i = !e.env.BUILD_ENV && !0
          , o = !!location.hostname.match(/(dev|test|i18n|localhost)-?/);
        function s(e) {
            return "/-/x/".concat(e)
        }
        t.a = {
            "@uc": {
                url: i && !o ? "//www.huobi.br.com/-/x/uc/" : s("uc/"),
                headers: function() {
                    var e = a.a.get("HB-UC-TOKEN");
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
                        "HB-API-VERSION": "1.2"
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
                    var e = a.a.get("HB-OLD-TOKEN");
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
    ).call(this, n(58))
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n.p + "img/ccbbf63.svg"
}
, , , , , function(e, t, n) {
    e.exports = n(327)
}
, , , , , , , , , , , , , , function(e, t) {
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
    n.id = 232
}
, , , , , , , function(e, t, n) {
    "use strict";
    var r = n(93);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(94);
    n.n(r).a
}
, function(e, t, n) {}
, function(e, t, n) {}
, , , , function(e, t, n) {
    "use strict";
    var r = n(95);
    n.n(r).a
}
, , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(96);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(97);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(98);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(99);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(100);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(101);
    n.n(r).a
}
, function(e, t, n) {
    "use strict";
    var r = n(102);
    n.n(r).a
}
, function(e, t, n) {
    e.exports = n.p + "img/abad682.svg"
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
, , , function(e, t, n) {
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
    var r = {
        "./base.js": 290,
        "./exchange.js": 298,
        "./gio.js": 299,
        "./home.js": 300,
        "./index.js": 301,
        "./orderBooks.js": 305,
        "./orders.js": 306,
        "./user.js": 328
    };
    function a(e) {
        var t = i(e);
        return n(t)
    }
    function i(e) {
        if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND",
            t
        }
        return r[e]
    }
    a.keys = function() {
        return Object.keys(r)
    }
    ,
    a.resolve = i,
    e.exports = a,
    a.id = 289
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var r, a = n(79), i = n(59);
    function o() {
        return r = r || i.a.handsup(a.a.ws)
    }
    var s = {
        subSymbols: function(e) {
            this.commit("SET_SYMBOLS", e)
        }
    }
      , c = {
        subSymbols: function(e, t) {
            var n = e.commit
              , r = Object(i.b)().req().symbols()
              , a = (t || {}).destroy;
            if (this.subSymbolsFn = this.subSymbolsFn || s.subSymbols.bind({
                commit: n
            }),
            a)
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
, , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "state", function() {
        return f
    }),
    n.d(t, "mutations", function() {
        return h
    }),
    n.d(t, "actions", function() {
        return d
    }),
    n.d(t, "getters", function() {
        return p
    });
    n(82),
    n(34),
    n(38),
    n(9);
    var r = n(1)
      , a = n.n(r)
      , i = n(4)
      , o = n.n(i)
      , s = n(8)
      , c = n.n(s)
      , u = n(7)
      , l = n(6)
      , f = function() {
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
    }
      , h = {
        SET_SYMBOL: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["---", "---"]
              , n = c()(t, 2);
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
                var n = 0
                  , r = 0
                  , a = new Date - t.currentTime;
                t.rounds.filter(function(e) {
                    n += e.roundIssuePrice,
                    r += e.roundCirculation
                }),
                n /= t.rounds.length,
                e.primeInfo = o()({}, t, {
                    averagePrice: n,
                    totalCirculation: r,
                    offsetTime: a
                })
            }
        },
        SET_PRIME_STATUS: function(e, t) {
            e.primeStatus = o()({}, t)
        },
        SET_PRIME_USER_INFO: function(e, t) {
            e.primeUserInfo = o()({}, t)
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
            for (var a in t)
                r[Object(l.r)(a)] = t[a];
            e.ecd[n] = r
        },
        SET_TS_DIFF: function(e, t) {
            e.tsDiff = +new Date - t
        }
    }
      , d = {
        getPrimeInfo: function() {
            var e = a()(regeneratorRuntime.mark(function e(t, n) {
                var r, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t.getters,
                            r = t.rootState,
                            t.dispatch,
                            a = t.commit,
                            t.state,
                            r.primeEnable || n) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return e.next = 5,
                            u.i.getInfo();
                        case 5:
                            (i = e.sent).success && a("SET_PRIME_INFO", i.data);
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
                var r, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t.dispatch,
                            r = t.state,
                            a = t.commit,
                            t.getters,
                            t.rootState.primeEnable && !r.primeUserInfo && r.primeInfo.currency || n) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return a("SET_PRIME_USER_INFO", r.primeUserInfo || {}),
                            e.next = 6,
                            u.i.getUserInfo();
                        case 6:
                            if (!(i = e.sent).success) {
                                e.next = 11;
                                break
                            }
                            a("SET_PRIME_USER_INFO", i.data),
                            e.next = 12;
                            break;
                        case 11:
                            return e.abrupt("return", i);
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
                var r, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t.dispatch,
                            t.getters,
                            r = t.state,
                            a = t.commit,
                            t.rootState.primeEnable && null === r.primeUserLimit && r.primeInfo.currency && 2 !== r.primeStatus.state || n) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return a("SET_PRIME_USER_LIMIT", r.primeUserLimit || 0),
                            e.next = 6,
                            u.i.getUserLimit();
                        case 6:
                            if (!(i = e.sent).success) {
                                e.next = 11;
                                break
                            }
                            a("SET_PRIME_USER_LIMIT", i.data),
                            e.next = 12;
                            break;
                        case 11:
                            return e.abrupt("return", i.message);
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
                var n, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.dispatch,
                            t.getters,
                            t.state,
                            r = t.commit,
                            e.next = 3,
                            u.i.getPrimePoResult();
                        case 3:
                            (a = e.sent).success ? r("SET_PRIME_PO_RESULT", a.data) : setTimeout(function() {
                                return n("getPrimePoResult")
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
        getExchangeControlData: function() {
            var e = a()(regeneratorRuntime.mark(function e(t) {
                var n, r, a, i, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = t.commit,
                            r = t.dispatch,
                            a = t.state,
                            i = a.symbolCode) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return");
                        case 4:
                            return e.next = 6,
                            u.a.exchangeLimit(i);
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
                var n, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.commit,
                            r = t.dispatch,
                            e.next = 3,
                            u.a.getTimestamp();
                        case 3:
                            (a = e.sent).success ? n("SET_TS_DIFF", a.data) : setTimeout(function() {
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
            var e = a()(regeneratorRuntime.mark(function e(t) {
                var n, r, a, i, o, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.rootState,
                            r = n.fp,
                            a = n.user,
                            i = a.userInfo.uid,
                            o = +new Date,
                            "web",
                            s = JSON.stringify({
                                fp: r,
                                uid: i,
                                ts: o,
                                device_source: "web"
                            }),
                            e.next = 8,
                            u.i.setPrimeInfo({
                                content: s
                            });
                        case 8:
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
      , p = {
        tpp: function(e, t, n) {
            var r = e.symbolCode
              , a = (n.symbolsObj[r] || {}).trade_price_precision;
            return void 0 === a ? 2 : a
        },
        tap: function(e, t, n) {
            var r = e.symbolCode
              , a = (n.symbolsObj[r] || {}).trade_amount_precision;
            return void 0 === a ? 4 : a
        },
        ttp: function(e, t, n) {
            var r = e.symbolCode
              , a = (n.symbolsObj[r] || {}).trade_total_precision;
            return void 0 === a ? 8 : a
        },
        fp: function(e, t, n) {
            var r = e.symbolCode
              , a = (n.symbolsObj[r] || {}).fee_precision;
            return void 0 === a ? 8 : a
        },
        isPrime: function(e, t, n) {
            var r = e.symbolCode
              , a = e.primeInfo
              , i = n.symbolsObj
              , o = n.primeEnable
              , s = (i[r] || {}).tags;
            return o && ((void 0 === s ? "" : s) || "").includes("prime") && r === a.symbolCode
        },
        isPrimeNormal: function(e, t) {
            return t.isPrime && !t.isPrimeWhite
        },
        isPrimeWhite: function(e) {
            return e.primeUserInfo && e.primeUserInfo.whiteList
        },
        isPrimePO: function(e, t) {
            return t.isPrimeNormal && 3 === t.primeRound
        },
        isPrimeEnd: function(e, t) {
            return t.isPrimeNormal && 2 === t.primeState
        },
        primeLimitOrderPrice: function(e, t) {
            var n = t.primeRound
              , r = t.isPrimePO
              , a = t.isPrimeEnd
              , i = e.primeInfo
              , o = e.ts
              , s = i.rounds;
            if (r && !a && o) {
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
      , a = n.n(r)
      , i = n(26)
      , o = n.n(i)
      , s = function() {
        return window.gio ? window.gio : null
    }
      , c = []
      , u = !1
      , l = {
        track: function(e, t) {
            var n, r = e.dispatch, i = s(), l = "";
            if ("object" === o()(t)) {
                var f = t || []
                  , h = a()(f, 2);
                l = h[0],
                n = h[1]
            } else
                l = t;
            if ("retry" === l ? i || (u = !0) : l && c.push([l, n]),
            !u) {
                if (!i)
                    return setTimeout(function() {
                        return r("track", "retry")
                    }, 5e3);
                for (var d; d = c.pop(); ) {
                    var p = d
                      , m = a()(p, 2);
                    i("track", m[0], m[1])
                }
            }
        },
        setUserId: function(e, t) {
            var n = s();
            n && n("setUserId", t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "state", function() {
        return f
    }),
    n.d(t, "mutations", function() {
        return h
    }),
    n.d(t, "actions", function() {
        return d
    });
    n(9);
    var r = n(1)
      , a = n.n(r)
      , i = (n(19),
    n(60),
    n(61),
    n(30),
    n(34),
    n(38),
    n(8))
      , o = n.n(i)
      , s = n(4)
      , c = n.n(s)
      , u = (n(40),
    n(7))
      , l = n(3)
      , f = function() {
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
      , d = {
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
              , a = e.state
              , i = t.symbol
              , s = t.data
              , u = n.exchangeRate
              , f = n.rateFix
              , h = n.rateName
              , d = {}
              , p = function() {
                var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = "---", a = "", o = n.close, s = n.open;
                if (o && s && (e = Object(l.e)(Object(l.b)(Object(l.g)(o, s), s), 100),
                r = Object(l.c)(e, 2),
                "huobi10" !== i && h)) {
                    var d = Object(l.c)(Object(l.e)(o, u), f);
                    isNaN(d) || "none" === h || (a = "≈ ".concat(d, " ").concat(h).toUpperCase())
                }
                return e > 0 ? (r = "+".concat(r),
                t = "up") : e < 0 && (t = "down"),
                r += "%",
                c()({}, n, {
                    rateText: r,
                    rateClass: t,
                    estimateText: a
                })
            };
            if ("huobi10" === i) {
                var m = s || {}
                  , g = m.rise_symbol_count
                  , v = m.fall_symbol_count;
                r("SET_DATA", {
                    symbol: i,
                    obj: {
                        rise: g,
                        fall: v
                    }
                })
            } else if ("btccq" === i) {
                var _ = s || {}
                  , b = _.close
                  , y = _.open
                  , w = _.vol;
                Object.assign(d, {
                    symbol: i,
                    close: b,
                    open: y,
                    amount: w
                }),
                r("SET_DATA", {
                    symbol: i,
                    obj: p(d)
                })
            } else if ("btccqInfo" === i) {
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
                var O = !0
                  , E = !1
                  , T = void 0;
                try {
                    for (var C, S = s[Symbol.iterator](); !(O = (C = S.next()).done); O = !0) {
                        var A = C.value || {}
                          , L = A.close
                          , I = A.open
                          , R = A.amount
                          , N = A.symbol
                          , P = N.replace("usdt", "_usdt")
                          , j = a.overviewObj[N].url || "/zh-cn/exchange/?s=".concat(P);
                        Object.assign(d, {
                            url: j,
                            close: L,
                            open: I,
                            amount: R
                        }),
                        r("SET_DATA", {
                            symbol: N,
                            obj: p(d)
                        })
                    }
                } catch (e) {
                    E = !0,
                    T = e
                } finally {
                    try {
                        O || null == S.return || S.return()
                    } finally {
                        if (E)
                            throw T
                    }
                }
            }
        },
        fetchHuobi10: function() {
            var e = a()(regeneratorRuntime.mark(function e(t) {
                var n, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.dispatch,
                            e.next = 3,
                            u.d.hb10Overview();
                        case 3:
                            r = e.sent,
                            a = r.data,
                            r.success ? n("formatData", {
                                symbol: "huobi10",
                                data: a
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
            var e = a()(regeneratorRuntime.mark(function e(t) {
                var n, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.dispatch,
                            e.next = 3,
                            u.d.overView5();
                        case 3:
                            r = e.sent,
                            a = r.data,
                            r.success ? n("formatData", {
                                data: a
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
            var e = a()(regeneratorRuntime.mark(function e(t) {
                var n, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.dispatch,
                            e.next = 3,
                            u.d.hbdmTicker();
                        case 3:
                            r = e.sent,
                            a = r.tick,
                            r.success ? n("formatData", {
                                symbol: "btccq",
                                data: a
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
            var e = a()(regeneratorRuntime.mark(function e(t) {
                var n, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.dispatch,
                            e.next = 3,
                            u.d.contractInfo();
                        case 3:
                            r = e.sent,
                            a = r.data,
                            r.success ? n("formatData", {
                                symbol: "btccqInfo",
                                data: a
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
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "state", function() {
        return d
    }),
    n.d(t, "actions", function() {
        return p
    }),
    n.d(t, "mutations", function() {
        return m
    });
    var r = n(47)
      , a = n.n(r)
      , i = (n(16),
    n(35),
    n(8))
      , o = n.n(i)
      , s = (n(9),
    n(1))
      , c = n.n(s)
      , u = (n(43),
    n(30),
    n(31),
    n(23),
    n(115),
    n(216),
    n(15))
      , l = n(90)
      , f = n(49)
      , h = n(140)
      , d = (n(78),
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
            pageVisible: !0
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
                var n, r, a, i, s, c, l, h, d, p, m, g, v, _, b, y, w, x, k, O, E, T, C, S, A, L, I, R, N, P, j, $, D, U, B, G, H, M, z, q, F;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            n = t.commit,
                            r = t.dispatch,
                            e.next = 3;
                            break;
                        case 3:
                            if (a = localStorage.exchangeRate,
                            i = localStorage && localStorage.exchangeRateList,
                            !a) {
                                e.next = 15;
                                break
                            }
                            if (c = a.split("/"),
                            l = o()(c, 1),
                            h = l[0],
                            i && (s = JSON.parse(i)),
                            "usd" === h) {
                                e.next = 13;
                                break
                            }
                            return e.next = 11,
                            u.a.getExchangeRate();
                        case 11:
                            (s = e.sent).success ? localStorage.setItem("exchangeRateList", JSON.stringify(s)) : s = i && JSON.parse(i);
                        case 13:
                            e.next = 18;
                            break;
                        case 15:
                            return d = f.a.filter(function(e) {
                                return e.lang === localStorage.lang
                            }),
                            p = o()(d, 1),
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
                            k = 1 * (x = void 0 === w ? 0 : w) ? f.a.filter(function(e) {
                                return e.abbr === y
                            }) : f.a.filter(function(e) {
                                return e.lang === localStorage.lang
                            }),
                            O = o()(k, 1),
                            E = O[0],
                            C = (T = void 0 === E ? {} : E).fix,
                            S = void 0 === C ? 2 : C,
                            A = T.symbol,
                            L = void 0 === A ? "$" : A,
                            I = T.abbr,
                            R = void 0 === I ? "usd" : I,
                            y = 1 * x ? y : R,
                            N = 0,
                            s && !s.success || ("cny" === y ? (P = s && s.data.length > 0 && s.data.filter(function(e) {
                                return "usdt_cny" === e.name
                            }) || [{}],
                            j = o()(P, 1),
                            $ = j[0].rate,
                            (N = void 0 === $ ? N : $) || (D = s && s.data.length > 0 && s.data.filter(function(e) {
                                return "usd_cny" === e.name
                            }) || [{}],
                            U = o()(D, 1),
                            B = U[0].rate,
                            N = B)) : "usd" === y ? N = 1 : "none" !== y && (G = s && s.data.length > 0 && s.data.filter(function(e) {
                                return e.name === "usd_".concat(y)
                            }) || [{}],
                            H = o()(G, 1),
                            M = H[0].rate,
                            N = void 0 === M ? N : M),
                            z = s && s.data.length > 0 && s.data.filter(function(e) {
                                return "usdt_cny" === e.name
                            }) || [{}],
                            q = o()(z, 1),
                            F = q[0].rate,
                            n("SET_USDT_RATE", void 0 === F ? N : F),
                            localStorage.setItem("exchangeRate", "".concat(y, "/").concat(x))),
                            n("SET_EXCHANGE_RATE", N),
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
            r.size && h.a.setQuoteList(a()(r))
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
, , , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(66),
    n(30),
    n(31),
    n(23),
    n(51);
    var r, a = n(79), i = n(59);
    n(3);
    function o() {
        return r = r || i.a.handsup(a.a.ws)
    }
    var s = {
        orderBooksIsEmpty: function(e) {
            return !Object.keys(e.orderBooks).length
        },
        filterDepthFirst: function(e) {
            var t = e.orderBooks
              , n = t.asks
              , r = t.bids;
            return {
                asks: n && n[0] || [],
                bids: r && r[0] || []
            }
        }
    }
      , c = {
        subOrderBooks: function(e) {
            this.commit("FORMAT_ORDER_BOOKS", e)
        }
    }
      , u = {
        subOrderBooks: function(e, t) {
            var n = e.commit
              , r = t || {}
              , a = r.symbol
              , s = r.pick
              , u = r.step
              , l = r.destroy
              , f = Object(i.b)().sub({
                symbol: a,
                pick: s,
                step: u
            }).depth();
            if (this.subOrderBooksFn = this.subOrderBooksFn || c.subOrderBooks.bind({
                commit: n
            }),
            l)
                return this.subOrderBooksApi && o().unplug(this.subOrderBooksApi, this.subOrderBooksFn),
                this.subOrderBooksFn = null,
                void (this.subOrderBooksApi = null);
            this.subOrderBooksApi = f,
            o().plugin(f, this.subOrderBooksFn)
        }
    };
    t.default = {
        state: function() {
            return {
                orderBooks: {}
            }
        },
        getters: s,
        mutations: {
            FORMAT_ORDER_BOOKS: function(e, t) {
                var n = t.tick;
                t.subbed || (e.orderBooks = n)
            },
            CLEAR_ORDER_BOOKS: function(e, t) {
                e.orderBooks = {}
            }
        },
        actions: u
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
    n(35),
    n(9);
    var r = n(1)
      , a = n.n(r)
      , i = n(7)
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
            var e = a()(regeneratorRuntime.mark(function e(t) {
                var n, r, a, o, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.state,
                            r = t.commit,
                            a = t.dispatch,
                            e.next = 3,
                            i.f.getOrdersList(n.params);
                        case 3:
                            o = e.sent,
                            s = o.data,
                            o.success ? a("handleCurrentData", s) : r("SET_CURRENT_DATA", []);
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
              , a = (e.state,
            [])
              , i = t.map(function(e) {
                var t = Object(o.l)(e.symbol, r.symbolsObj)
                  , n = t.tpp
                  , i = t.tap
                  , c = t.ttp
                  , u = t.display_name;
                return e["canceled-at"] && a.push(e["canceled-at"]),
                e["created-at"] = Object(o.s)(e["created-at"]),
                e["unfield-amount"] = e.amount - e["field-amount"],
                e.totalAmount = "buy-market" === e.type ? e.amount : Object(s.e)(e.price, e.amount),
                e.totalAmount = "sell-market" === e.type ? "---" : e.totalAmount,
                e.totalAmount = Object(s.c)(e.totalAmount, c),
                e.tradeType = ~e.type.indexOf("stop-limit") ? "止盈止损" : 1 * e.price ? "限价" : "市价",
                e.operator = "gte" === e.operator ? "≥" : "≤",
                e.price = 1 * e.price ? Object(s.c)(e.price, n) : "市价",
                e["stop-price"] = ~e.type.indexOf("stop-limit") ? e.operator + " " + Object(s.c)(e["stop-price"], n) : "---",
                e["field-amount"] = Object(s.c)(e["field-amount"], i),
                e["unfield-amount"] = Object(s.c)(e["unfield-amount"], i),
                e.amount = Object(s.c)(e.amount || e["filled-amount"], "buy-market" === e.type ? c : i),
                e.displayName = u,
                e.orderType = e.source.indexOf("margin") >= 0 || e.source.indexOf("fl") >= 0 ? "margin" : "exchange",
                e.directText = e.type.indexOf("sell") >= 0 ? "卖出" : "买入",
                "fl-mgt" !== e.source && "fl-sys" !== e.source || (e.directText = e.type.indexOf("sell") >= 0 ? "系统卖出" : "系统买入"),
                e.showCancelBtn = "buy-market" !== e.type && "sell-market" !== e.type && "fl-mgt" !== e.source && "fl-sys" !== e.source,
                e
            });
            n("SET_CANCEL_STATE", 0 === a.length || 0 === t.length ? null : a.length === i.length ? "all" : 1),
            n("SET_CURRENT_DATA", i)
        },
        fetchHistoryData: function() {
            var e = a()(regeneratorRuntime.mark(function e(t) {
                var n, r, a, o, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.state,
                            r = t.commit,
                            a = t.dispatch,
                            e.next = 3,
                            i.f.getOrdersList(n.params);
                        case 3:
                            o = e.sent,
                            s = o.data,
                            o.success ? (r("SET_TRADE_STATES"),
                            a("handleHistoryData", s)) : r("SET_HISTORY_DATA", []);
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
              , a = e.state;
            n("SET_HISTORY_DATA", t.map(function(e) {
                var t = Object(o.l)(e.symbol, r.symbolsObj)
                  , n = t.tpp
                  , i = t.tap
                  , c = t.ttp
                  , u = t.display_name;
                return e["created-at"] = Object(o.s)(e["created-at"]),
                e["unfield-amount"] = e.amount - e["field-amount"],
                e.tradeType = ~e.type.indexOf("stop-limit") ? "止盈止损" : 1 * e.price ? "限价" : "市价",
                e.operator = "gte" === e.operator ? "≥" : "≤",
                e.price = 1 * e.price ? Object(s.c)(e.price, n) : "市价",
                e["stop-price"] = ~e.type.indexOf("stop-limit") ? e.operator + " " + Object(s.c)(e["stop-price"], n) : "---",
                e["field-amount"] = Object(s.c)(e["field-amount"], i),
                e.averagePrice = Object(s.c)(e["field-cash-amount"] / e["field-amount"], n),
                e.averagePrice = isNaN(e.averagePrice) ? Object(s.c)(0, n) : e.averagePrice,
                e.amount = Object(s.c)(e.amount || e["filled-amount"], "buy-market" === e.type ? c : i),
                e.displayName = u,
                e.tradeState = a.tradeStates[e.state],
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
            var e = a()(regeneratorRuntime.mark(function e(t) {
                var n, r, a, o, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.state,
                            r = t.commit,
                            a = t.dispatch,
                            e.next = 3,
                            i.f.getOrderMatchresults(n.params);
                        case 3:
                            o = e.sent,
                            s = o.data,
                            o.success ? a("handleDetailData", s) : r("SET_DETAIL_DATA", []);
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
                var t = Object(o.l)(e.symbol, r.symbolsObj)
                  , n = t.tpp
                  , a = t.tap
                  , i = t.ttp
                  , c = t.fp
                  , u = t.display_name
                  , l = u ? -1 !== e.type.indexOf("buy") ? u.split("/")[0] : u.split("/")[1] : "";
                return e["created-at"] = Object(o.s)(e["created-at"]),
                e["unfield-amount"] = e.amount - e["field-amount"],
                e.tradeType = ~e.type.indexOf("stop-limit") ? "止盈止损" : 1 * e.price ? "限价" : "市价",
                e.price = 1 * e.price ? Object(s.c)(e.price, n) : "市价",
                e["filled-total-amount"] = e.price * e["filled-amount"],
                e["filled-amount"] = Object(s.c)(e["filled-amount"], a),
                e["filled-fees"] = Object(s.c)(e["filled-fees"], c),
                e["filled-points"] = Object(s.c)(e["filled-points"], 8),
                e["filled-total-amount"] = Object(s.c)(e["filled-total-amount"], 8),
                e.amount = Object(s.c)(e.amount || e["filled-amount"], "buy-market" === e.type ? i : a),
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
              , a = (e.state,
            t.map(function(e) {
                var t = Object(o.l)(e.symbol, r.symbolsObj)
                  , n = t.tpp
                  , a = t.tap
                  , i = (t.ttp,
                t.fp)
                  , c = t.display_name
                  , u = c ? -1 !== e.type.indexOf("buy") ? c.split("/")[0] : c.split("/")[1] : "";
                return e["created-at"] = Object(o.s)(e["created-at"]),
                e.price = 1 * e.price ? Object(s.c)(e.price, n) : "市价",
                e["filled-total-amount"] = e.price * e["filled-amount"],
                e["filled-amount"] = Object(s.c)(e["filled-amount"], a),
                e["filled-fees"] = Object(s.c)(e["filled-fees"], i),
                e["filled-points"] = Object(s.c)(e["filled-points"], 8),
                e["filled-total-amount"] = Object(s.c)(e["filled-total-amount"], 8),
                1 * e["filled-fees"] || 1 * e["filled-points"] ? (1 * e["filled-fees"] && (e.fee = "".concat(e["filled-fees"], " ").concat(u)),
                1 * e["filled-points"] && (e.points = "".concat(e["filled-points"], " pts"))) : e.fee = "".concat(e["filled-fees"], " ").concat(u),
                e
            }));
            a.id = t.id,
            n("SET_HISTORY_DETAIL", a)
        },
        fetchOrderDetail: function() {
            var e = a()(regeneratorRuntime.mark(function e(t, n) {
                var r, a, o, s, c;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = t.commit,
                            t.rootState,
                            t.state,
                            a = t.dispatch,
                            r("SET_HISTORY_DETAIL_LOADING", n),
                            e.next = 4,
                            i.f.getOrderDetail(n);
                        case 4:
                            o = e.sent,
                            s = o.data,
                            (c = void 0 === s ? [] : s).id = n,
                            a("handleHistoryDetail", c);
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
            var e = a()(regeneratorRuntime.mark(function e(t, r) {
                var a, o, s, c, u, l;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = t.commit,
                            o = t.state,
                            e.next = 3,
                            Promise.resolve().then(n.bind(null, 75));
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
                            i.f.cancelAllOrder(l);
                        case 9:
                            (s = e.sent).success ? u.success("撤单申请成功") : u.error(s.message),
                            e.next = 17;
                            break;
                        case 13:
                            return e.next = 15,
                            i.f.cancelOrder(r);
                        case 15:
                            (s = e.sent).success ? u.success("撤单申请成功") : u.error(s.message);
                        case 17:
                            a("SET_CANCEL_DATA", r);
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
, , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(43),
    n(115),
    n(60),
    n(61);
    var r = n(26)
      , a = n.n(r)
      , i = (n(16),
    n(9),
    n(50),
    n(1))
      , o = n.n(i)
      , s = (n(34),
    n(38),
    n(30),
    n(31),
    n(23),
    n(51),
    n(40),
    n(2))
      , c = (n(19),
    n(232))
      , u = c.keys();
    function l(e) {
        var t = c(e);
        return t.default || t
    }
    var f = {}
      , h = !0
      , d = !1
      , p = void 0;
    try {
        for (var m, g = u[Symbol.iterator](); !(h = (m = g.next()).done); h = !0) {
            var v = m.value;
            f[v.replace(/^\.\//, "").replace(/\.(js|mjs)$/, "")] = l(v)
        }
    } catch (e) {
        d = !0,
        p = e
    } finally {
        try {
            h || null == g.return || g.return()
        } finally {
            if (d)
                throw p
        }
    }
    var _ = f
      , b = (n(35),
    n(233),
    n(234),
    n(114),
    n(131),
    n(142),
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
    function O(e) {
        return e.options && e._Ctor === e ? e : (e.options ? (e._Ctor = e,
        e.extendOptions = e.options) : (e = s.default.extend(e))._Ctor = e,
        !e.options.name && e.options.__file && (e.options.name = e.options.__file),
        e)
    }
    function E(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Array.prototype.concat.apply([], e.matched.map(function(e, n) {
            return Object.keys(e.components).map(function(r) {
                return t && t.push(n),
                e.components[r]
            })
        }))
    }
    function T(e, t) {
        return Array.prototype.concat.apply([], e.matched.map(function(e, n) {
            return Object.keys(e.components).reduce(function(r, a) {
                return e.components[a] ? r.push(t(e.components[a], e.instances[a], e, a, n)) : delete e.components[a],
                r
            }, [])
        }))
    }
    function C(e) {
        return Promise.all(T(e, (t = o()(regeneratorRuntime.mark(function e(t, n, r, a) {
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
                        return r.components[a] = O(t),
                        e.abrupt("return", r.components[a]);
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }, e)
        })),
        function(e, n, r, a) {
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
                        C(t);
                    case 2:
                        return e.abrupt("return", y()({}, t, {
                            meta: E(t).map(function(e) {
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
        return I.apply(this, arguments)
    }
    function I() {
        return (I = o()(regeneratorRuntime.mark(function e(t, n) {
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
                                locationHost: "https://www.huobi.co",
                                isProd: !0
                            }
                        },
                        n.req && (t.context.req = n.req),
                        n.res && (t.context.res = n.res),
                        t.context.redirect = function(e, n, r) {
                            if (e) {
                                t.context._redirected = !0;
                                var i = a()(n);
                                if ("number" == typeof e || "undefined" !== i && "object" !== i || (r = n || {},
                                n = e,
                                i = a()(n),
                                e = 302),
                                "object" === i && (n = t.router.resolve(n).href),
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
    function R(e, t) {
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
    function N(e, t) {
        var n = window.location.pathname;
        return "hash" === t ? window.location.hash.replace(/^#\//, "") : (e && 0 === n.indexOf(e) && (n = n.slice(e.length)),
        decodeURI(n || "/") + window.location.search + window.location.hash)
    }
    function P(e, t) {
        return function(e) {
            for (var t = new Array(e.length), n = 0; n < e.length; n++)
                "object" === a()(e[n]) && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$"));
            return function(n, r) {
                for (var a = "", i = n || {}, o = r || {}, s = o.pretty ? U : encodeURIComponent, c = 0; c < e.length; c++) {
                    var u = e[c];
                    if ("string" != typeof u) {
                        var l = i[u.name || "pathMatch"]
                          , f = void 0;
                        if (null == l) {
                            if (u.optional) {
                                u.partial && (a += u.prefix);
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
                                if (f = s(l[h]),
                                !t[c].test(f))
                                    throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '", but received `' + JSON.stringify(f) + "`");
                                a += (0 === h ? u.prefix : u.delimiter) + f
                            }
                        } else {
                            if (f = u.asterisk ? encodeURI(l).replace(/[?#]/g, function(e) {
                                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                            }) : s(l),
                            !t[c].test(f))
                                throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but received "' + f + '"');
                            a += u.prefix + f
                        }
                    } else
                        a += u
                }
                return a
            }
        }(function(e, t) {
            var n, r = [], a = 0, i = 0, o = "", s = t && t.delimiter || "/";
            for (; null != (n = D.exec(e)); ) {
                var c = n[0]
                  , u = n[1]
                  , l = n.index;
                if (o += e.slice(i, l),
                i = l + c.length,
                u)
                    o += u[1];
                else {
                    var f = e[i]
                      , h = n[2]
                      , d = n[3]
                      , p = n[4]
                      , m = n[5]
                      , g = n[6]
                      , v = n[7];
                    o && (r.push(o),
                    o = "");
                    var _ = null != h && null != f && f !== h
                      , b = "+" === g || "*" === g
                      , y = "?" === g || "*" === g
                      , w = n[2] || s
                      , x = p || m;
                    r.push({
                        name: d || a++,
                        prefix: h || "",
                        delimiter: w,
                        optional: y,
                        repeat: b,
                        partial: _,
                        asterisk: !!v,
                        pattern: x ? G(x) : v ? ".*" : "[^" + B(w) + "]+?"
                    })
                }
            }
            i < e.length && (o += e.substr(i));
            o && r.push(o);
            return r
        }(e, t))
    }
    function j(e, t) {
        var n = {}
          , r = y()({}, e, t);
        for (var a in r)
            String(e[a]) !== String(t[a]) && (n[a] = !0);
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
    function U(e) {
        return encodeURI(e).replace(/[\/?#]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
    function B(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
    }
    function G(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1")
    }
    function H(e, t) {
        var n, r = e.indexOf("://");
        -1 !== r ? (n = e.substring(0, r),
        e = e.substring(r + 3)) : e.startsWith("//") && (e = e.substring(2));
        var a, i = e.split("/"), o = (n ? n + "://" : "//") + i.shift(), s = i.filter(Boolean).join("/");
        return 2 === (i = s.split("#")).length && (s = i[0],
        a = i[1]),
        o += s ? "/" + s : "",
        t && "{}" !== JSON.stringify(t) && (o += (2 === e.split("?").length ? "&" : "?") + function(e) {
            return Object.keys(e).sort().map(function(t) {
                var n = e[t];
                return null == n ? "" : Array.isArray(n) ? n.slice().map(function(e) {
                    return [t, "=", e].join("")
                }).join("&") : t + "=" + n
            }).filter(Boolean).join("&")
        }(t)),
        o += a ? "#" + a : ""
    }
    var M = n(183)
      , z = n.n(M)
      , q = n(139)
      , F = function() {
        return x(n.e(52).then(n.bind(null, 685)))
    }
      , K = function() {
        return x(n.e(53).then(n.bind(null, 684)))
    }
      , V = function() {
        return x(Promise.all([n.e(4), n.e(32)]).then(n.bind(null, 662)))
    }
      , J = function() {
        return x(Promise.all([n.e(2), n.e(1), n.e(37)]).then(n.bind(null, 668)))
    }
      , Y = function() {
        return x(Promise.all([n.e(0), n.e(30)]).then(n.bind(null, 669)))
    }
      , X = function() {
        return x(n.e(59).then(n.bind(null, 679)))
    }
      , Q = function() {
        return x(Promise.all([n.e(0), n.e(6), n.e(29)]).then(n.bind(null, 666)))
    }
      , W = function() {
        return x(Promise.all([n.e(0), n.e(6), n.e(33)]).then(n.bind(null, 664)))
    }
      , Z = function() {
        return x(n.e(57).then(n.bind(null, 691)))
    }
      , ee = function() {
        return x(n.e(58).then(n.bind(null, 671)))
    }
      , te = function() {
        return x(n.e(60).then(n.bind(null, 673)))
    }
      , ne = function() {
        return x(Promise.all([n.e(4), n.e(45)]).then(n.bind(null, 682)))
    }
      , re = function() {
        return x(Promise.all([n.e(3), n.e(51), n.e(27)]).then(n.bind(null, 667)))
    }
      , ae = function() {
        return x(Promise.all([n.e(2), n.e(1), n.e(5)]).then(n.bind(null, 652)))
    }
      , ie = function() {
        return x(n.e(31).then(n.bind(null, 663)))
    }
      , oe = function() {
        return x(Promise.all([n.e(2), n.e(1), n.e(5), n.e(56)]).then(n.bind(null, 676)))
    }
      , se = function() {
        return x(n.e(38).then(n.bind(null, 677)))
    }
      , ce = function() {
        return x(n.e(28).then(n.bind(null, 661)))
    }
      , ue = function() {
        return x(n.e(36).then(n.bind(null, 678)))
    }
      , le = function() {
        return x(n.e(39).then(n.bind(null, 674)))
    }
      , fe = function() {
        return x(n.e(46).then(n.bind(null, 672)))
    }
      , he = function() {
        return x(n.e(34).then(n.bind(null, 665)))
    }
      , de = function() {
        return x(n.e(40).then(n.bind(null, 680)))
    }
      , pe = function() {
        return x(n.e(54).then(n.bind(null, 675)))
    }
      , me = function() {
        return x(n.e(55).then(n.bind(null, 683)))
    };
    s.default.use(q.a);
    var ge = function(e, t, n) {
        return e.name !== t.name ? {
            x: 0,
            y: 0
        } : n
    };
    var ve = n(184)
      , _e = n.n(ve).a
      , be = {
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
              , a = t.props;
            r.nuxtChild = !0;
            for (var i = n, o = n.$nuxt.nuxt.transitions, s = n.$nuxt.nuxt.defaultTransition, c = 0; n; )
                n.$vnode && n.$vnode.data.nuxtChild && c++,
                n = n.$parent;
            r.nuxtChildDepth = c;
            var u = o[c] || s
              , l = {};
            ye.forEach(function(e) {
                void 0 !== u[e] && (l[e] = u[e])
            });
            var f = {};
            we.forEach(function(e) {
                "function" == typeof u[e] && (f[e] = u[e].bind(i))
            });
            var h = f.beforeEnter;
            f.beforeEnter = function(e) {
                if (window.$nuxt.$nextTick(function() {
                    window.$nuxt.$emit("triggerScroll")
                }),
                h)
                    return h.call(i, e)
            }
            ;
            var d = [e("router-view", r)];
            return a.keepAlive && (d = [e("keep-alive", {
                props: a.keepAliveProps
            }, d)]),
            e("transition", {
                props: l,
                on: f
            }, d)
        }
    }
      , ye = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"]
      , we = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"]
      , xe = {
        name: "nuxt-link",
        functional: !0,
        render: function(e, t) {
            return e("router-link", t.data, t.children)
        }
    }
      , ke = {
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
      , Oe = (n(239),
    n(5))
      , Ee = Object(Oe.a)(ke, function() {
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
      , Te = {
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
            NuxtChild: be,
            NuxtError: Ee
        }
    }
      , Ce = {
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
      , Se = (n(240),
    Object(Oe.a)(Ce, void 0, void 0, !1, null, null, null).exports)
      , Ae = (n(241),
    n(242),
    n(47))
      , Le = n.n(Ae)
      , Ie = n(11)
      , Re = n(18)
      , Ne = {
        name: "GroupCenterEnter",
        components: {
            A: Re.a
        }
    }
      , Pe = (n(246),
    Object(Oe.a)(Ne, function() {
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
      , je = n(7)
      , $e = {
        name: "NoticeList",
        components: {
            A: Re.a
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
                    var t, n, r, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = this.$store.state.locale,
                                e.next = 3,
                                je.d.getNoticeList(t);
                            case 3:
                                n = e.sent,
                                r = null;
                                try {
                                    a = JSON.parse(n),
                                    r = a.articles
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
      , De = (n(269),
    Object(Oe.a)($e, function() {
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
      , Ue = n(8)
      , Be = n.n(Ue)
      , Ge = n(49)
      , He = n(6)
      , Me = {
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
            this.currencys = Ge.a,
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
                    var t, n, r, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                (t = localStorage.exchangeRate) ? (n = t.split("/"),
                                r = Be()(n, 1),
                                a = r[0],
                                this.curCurrency = this.currencys.filter(function(e) {
                                    return e.abbr === a
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
                (Object(He.e)(t, "stop") || {}).node === this.$refs.depthNameDOM ? this.showCurrency = !this.showCurrency : this.showCurrency = !1
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
      , ze = (n(270),
    Object(Oe.a)(Me, function() {
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
      , qe = {
        name: "Settings",
        methods: {
            showSetDialog: function() {
                this.$modal.show(ze, {
                    title: "设置"
                }, {
                    width: 480,
                    height: "auto",
                    clickToClose: !1
                })
            }
        }
    }
      , Fe = (n(271),
    Object(Oe.a)(qe, function() {
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
      , Ke = {
        name: "Languages",
        components: {
            A: Re.a
        },
        data: function() {
            return {
                host: ""
            }
        },
        mounted: function() {
            this.host = location.origin
        },
        computed: y()({}, Object(Ie.c)({
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
      , Ve = (n(272),
    Object(Oe.a)(Ke, function() {
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
      , Je = {
        name: "UserCenterEnter",
        data: function() {
            return {
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
            A: Re.a
        },
        computed: y()({}, Object(Ie.c)({
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
                                je.h.proUserAuth("get_auth_info");
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
      , Ye = (n(273),
    Object(Oe.a)(Je, function() {
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
                extra: "backurl"
            }
        }, [e._v("登录")]), e._v(" "), n("A", {
            staticClass: "register",
            attrs: {
                url: "/" + e.locale + "/register/"
            }
        }, [e._v("注册")])], 1)])
    }, [], !1, null, "63514626", null).exports)
      , Xe = {
        name: "VipTips",
        data: function() {
            return {
                bigCustomer: !1,
                diamond: !1,
                gold: !1
            }
        },
        computed: y()({}, Object(Ie.c)({
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
      , Qe = (n(274),
    Object(Oe.a)(Xe, function() {
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
      , We = {
        name: "Header",
        components: {
            A: Re.a,
            GroupCenterEnter: Pe,
            NoticeList: De,
            Languages: Ve,
            Settings: Fe,
            UserCenterEnter: Ye,
            VipTips: Qe
        },
        computed: y()({}, Object(Ie.c)({
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
                return this.$route.name === "en-us-".concat(e) || this.$route.name === "LANG-".concat(e) || this.$route.query.type === e ? "nuxt-link-exact-active nuxt-link-active" : ""
            },
            changeProject: function(e) {
                localStorage.projectType = e,
                this.projectType = e,
                location.href = "/".concat(this.linkLocale, "/").concat(e)
            }
        }
    }
      , Ze = (n(275),
    Object(Oe.a)(We, function() {
        var e = this
          , t = e.$createElement
          , r = e._self._c || t;
        return r("header", {
            class: [e.$route.name && e.$route.name.indexOf("en-us") > -1 ? "" : "pro", "LANG-orders" === e.$route.name ? "order-head" : ""]
        }, [r("GroupCenterEnter", {
            staticClass: "header-center-enter"
        }), e._v(" "), r("A", {
            staticClass: "logo",
            attrs: {
                href: "/" + e.linkLocale + "/"
            }
        }, [r("img", {
            staticClass: "logo_img",
            attrs: {
                alt: "Huobi火币全球站",
                src: n(163)
            }
        })]), e._v(" "), r("nav", {
            staticClass: "list"
        }, [r("A", {
            attrs: {
                url: "/" + e.linkLocale + "/markets/"
            }
        }, [e._v("行情")]), e._v(" "), e.showNav ? r("A", {
            attrs: {
                rel: "noopener noreferrer",
                href: "https://otc.huobi.co/" + e.linkLocale + "/trade/buy-btc/",
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
        }, [e._v("杠杆交易")]) : e._e(), e._v(" "), e.showNav ? r("A", {
            staticClass: "contractual",
            attrs: {
                target: "_blank",
                url: e.contractualUrl
            }
        }, [e._v("合约交易\n            "), r("span", {
            staticClass: "bubbling"
        })]) : e._e(), e._v(" "), e.showNav ? r("div", {
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
      , et = [function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("dl", [n("dt", [e._v("工具")]), e._v(" "), n("dd", [n("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "/zh-cn/download/#exchange"
            }
        }, [e._v("\n                    客户端下载\n                ")])]), e._v(" "), n("dd", [n("a", {
            attrs: {
                target: "_blank",
                href: "/zh-cn/assetintro/"
            }
        }, [e._v("\n                    数字资产介绍\n                ")])]), e._v(" "), n("dd", [n("a", {
            attrs: {
                target: "_blank",
                href: "/zh-cn/topic/vip/"
            }
        }, [e._v("\n                    大客户权益\n                ")])]), e._v(" "), n("dd", [n("a", {
            attrs: {
                target: "_blank",
                href: "/zh-cn/institution/"
            }
        }, [e._v("\n                    机构账户\n                ")])]), e._v(" "), n("dd", [n("a", {
            attrs: {
                target: "_blank",
                href: "/zh-cn/ht/"
            }
        }, [e._v("\n                    HT介绍\n                ")])])])
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
                href: "https://www-uat.hottalk.com.cn/community/community.html",
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
                src: n(276),
                alt: "huobi global"
            }
        }), this._v(" "), t("p", [this._v("© 2013-2019 Huobi Global")])])
    }
    ]
      , tt = n(182)
      , nt = {
        name: "Footer",
        components: {
            A: Re.a
        },
        mounted: function() {
            var e = this.$route.name;
            "LANG-exchange" !== e && "LANG-margin" !== e && "en-us-exchange" !== e && ("LANG-ht" === e || "LANG-topic-vip" === e ? Object(He.n)() && this.$nextTick(He.d) : this.$nextTick(He.d))
        },
        methods: {
            openMarginGuide: function() {
                var e = o()(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                "en-us" !== this.$store.state.locale ? "LANG-margin" === this.$route.name ? this.$modal.show(tt.a, {}, {
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
        computed: y()({}, Object(Ie.c)({
            isLogin: function(e) {
                return e.user.isLogin
            }
        }))
    }
      , rt = (n(278),
    Object(Oe.a)(nt, function() {
        var e = this
          , t = e.$createElement
          , n = e._self._c || t;
        return n("footer", {
            class: "en-us" === e.$store.state.locale ? "" : "pro"
        }, [n("section", [e._m(0), e._v(" "), n("dl", [n("dt", [e._v("关于")]), e._v(" "), e._m(1), e._v(" "), n("dd", ["zh-cn" === e.$store.state.locale ? n("a", {
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
        }, [e._v("\n                    帮助中心\n                ")])]), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), n("dd", ["ko-kr" !== e.$store.state.locale ? n("a", {
            attrs: {
                href: "javascript:;"
            },
            on: {
                click: e.openMarginGuide
            }
        }, [e._v("\n                    杠杆介绍\n                ")]) : e._e()])]), e._v(" "), e._m(5), e._v(" "), n("dl", {
            staticClass: "media"
        }, [n("dt", [e._v("官方媒体")]), e._v(" "), e._m(6), e._v(" "), e._m(7), e._v(" "), e._m(8), e._v(" "), "zh-cn" === e.$store.state.locale ? n("dd", {
            staticClass: "footer-media"
        }, [e._m(9)]) : n("dd", {
            staticClass: "footer-media"
        }, [e._m(10)]), e._v(" "), e._m(11), e._v(" "), e._m(12), e._v(" "), e._m(13), e._v(" "), e._m(14)])]), e._v(" "), e._m(15)])
    }, et, !1, null, null, null).exports)
      , at = {
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
      , it = (n(279),
    Object(Oe.a)(at, function() {
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
      , ot = {
        api: "api.huobi.com",
        www: "content.huobi.pro",
        uc: "uc.huobi.pro",
        vote: "api.hadax.com",
        pro: "www.huobipro.com",
        huobi: "www.huobi.com",
        otc: "otc.huobi.com",
        hadax: "www.hadax.com",
        info: "https://huobi-info-api.huobi.cn/portal-gateway"
    }
      , st = {
        name: "ContentLayout",
        components: {
            Header: Ze,
            Footer: rt,
            Notification: it
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
                var n = ot[t];
                n && Le()(document.querySelectorAll(".".concat(e))).forEach(function(e) {
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
                        var a = e.gio = e.gio || function() {
                            (a.q = a.q || []).push(arguments)
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
      , ct = (n(280),
    Object(Oe.a)(st, function() {
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
      , ut = (n(82),
    {
        name: "TopFixed",
        data: function() {
            return {
                show: !1
            }
        },
        components: {
            A: Re.a
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
    })
      , lt = (n(283),
    {
        name: "TopTimer",
        components: {
            TopBanner: Object(Oe.a)(ut, function() {
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
            TimeLeft: n(145).a
        },
        data: function() {
            return {
                timerShow: !1,
                endDate: ""
            }
        },
        computed: y()({
            roundIntro: function() {
                return 2 === this.primeStatus.state ? "第%s轮交易已结束" : this.primeStatus.round ? "第%s轮交易" : ""
            },
            roundText: function() {
                if (2 !== this.primeStatus.state)
                    return 1 === this.primeStatus.state ? "距离结束还有" : "距离开始还有"
            },
            link: function() {
                var e = this.primeInfo.currency
                  , t = this.primeInfo.symbolCode && this.primeInfo.symbolCode.replace(e, "");
                return "/".concat(this.locale, "/exchange/?s=").concat(e, "_").concat(t)
            }
        }, Object(Ie.c)({
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
        })),
        watch: {
            primeInfo: function(e) {
                e.currency && (this.timerShow = "en-us" === this.$route.name || "LANG" === this.$route.name,
                this.endDate = Object(He.s)((e.rounds.find(function(e) {
                    return 3 === e.roundNum
                }) || {}).roundEndTime || +new Date))
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
      , ft = (n(285),
    Object(Oe.a)(lt, function() {
        var e = this
          , t = e.$createElement
          , r = e._self._c || t;
        return e.timerShow ? r("section", [r("TopBanner", {
            staticClass: "prime-timer",
            attrs: {
                link: e.link
            }
        }, [r("div", {
            staticClass: "top-timer"
        }, [r("div", {
            staticClass: "prime-logo"
        }, [r("img", {
            attrs: {
                src: n(213),
                alt: "Huobi Prime"
            }
        })]), e._v(" "), r("dl", [r("dd", [r("span", [e._v("Huobi Prime")]), e._v(" "), r("span", [e._v(e._s((e.primeInfo.currency || "---").toUpperCase()) + " " + e._s(e._f("ts")(e.roundIntro, e.primeStatus.round)))])]), e._v(" "), 2 !== e.primeStatus.state ? r("dd", [r("span", [e._v(e._s(e.roundText))]), e._v(" "), r("TimeLeft")], 1) : r("dd", [r("span", [e._v("结束时间")]), e._v(e._s(e.endDate) + "\n                ")])])])])], 1) : e._e()
    }, [], !1, null, "58977ac0", null).exports)
      , ht = n(78)
      , dt = {
        name: "DefaultLayout",
        components: {
            Header: Ze,
            Footer: rt,
            PrimeTimer: ft
        },
        computed: y()({
            classname: function() {
                var e = this.$route.name;
                return e && e.includes("index") || "LANG" === e || "en-us" === e || e && e.includes("topic-prime") ? (this.$store.commit("exchange/SET_EXCHANGE_TYPE", "exchange"),
                "homepage") : e && (e.includes("LANG-exchange") || e.includes("LANG-orderbooks") || e.includes("LANG-margin") || "en-us-exchange" === e) ? "en-us-exchange" === e ? "en-exchange" : "global-exchange" : ""
            },
            theme: function() {
                return localStorage.theme || this.$store.state.exchange.theme
            },
            footerShow: function() {
                var e = this.$route.name;
                return !("en-us-exchange" === e || "en-us-margin" === e || "LANG-download" === e)
            }
        }, Object(Ie.c)({
            userInfo: function(e) {
                return e.user.userInfo
            },
            isLogin: function(e) {
                return e.user.isLogin
            }
        })),
        created: function() {
            var e = this.$route.fullPath.includes("margin") ? "margin" : "exchange";
            "en-us-exchange" === this.$route.name && (this.isEnExchange = !0),
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
                            this.$nextTick(He.c),
                            ht.a.change(function(e) {
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
      , pt = (n(286),
    Object(Oe.a)(dt, function() {
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
        })], 1), e._v(" "), n("nuxt", {
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
      , mt = {
        name: "Demo",
        beforeMount: function() {
            window.location.href = "".concat(this.$store.state.locale, "/")
        }
    }
      , gt = Object(Oe.a)(mt, function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("section", {
            staticClass: "main"
        }, [t("nuxt", {
            staticClass: "page"
        })], 1)
    }, [], !1, null, "ad903a74", null).exports
      , vt = {
        name: "LoginLayout",
        components: {
            Languages: Ve,
            A: Re.a,
            Notification: it
        },
        data: function() {
            return {
                backURL: ""
            }
        },
        mounted: function() {
            localStorage.setItem("lang", "en-us"),
            Object(He.c)(),
            Object(He.d)(),
            this.backURL = this.$route.params.backURL
        },
        computed: {
            showLink: function() {
                return this.$route.name
            },
            linkUrl: function() {
                var e = "en-us-login" !== this.$route.name ? "login" : "register";
                return this.backURL ? "/en-us/".concat(e, "?backUrl=").concat(this.backURL) : "/en-us/".concat(e)
            }
        },
        methods: {
            addScript: function() {}
        }
    }
      , _t = (n(287),
    Object(Oe.a)(vt, function() {
        var e = this
          , t = e.$createElement
          , r = e._self._c || t;
        return r("section", {
            staticClass: "main layout-login"
        }, [r("Notification"), e._v(" "), r("header", {
            staticClass: "login"
        }, [r("a", {
            staticClass: "logo",
            attrs: {
                href: "/" + e.$store.state.locale + "/"
            }
        }, [r("img", {
            attrs: {
                src: n(163)
            }
        })]), e._v(" "), r("div", {
            staticClass: "login_sign"
        }, ["en-us-register" === e.showLink || "en-us-reset-password" === e.showLink ? r("A", {
            staticClass: "account_status",
            attrs: {
                type: "nuxt-link",
                url: e.linkUrl
            }
        }, [e._v("\n                Already have an account? Login\n            ")]) : e._e(), e._v(" "), "en-us-login" === e.showLink ? r("A", {
            staticClass: "account_status",
            attrs: {
                type: "nuxt-link",
                url: e.linkUrl
            }
        }, [e._v("\n                Don't have an account? Sign Up\n            ")]) : e._e()], 1), e._v(" "), r("Languages", {
            staticClass: "header-language"
        })], 1), e._v(" "), r("nuxt", {
            staticClass: "page"
        }), e._v(" "), r("footer", {
            staticClass: "login"
        }, [r("ul", {
            staticClass: "footer_ul"
        }, [r("li", [r("A", {
            attrs: {
                tyep: "nuxt-link",
                url: "/" + e.$store.state.locale + "/"
            }
        }, [e._v("Homepage")])], 1), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), e._m(3)])])], 1)
    }, [function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("li", [t("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://huobiglobal.zendesk.com/hc/en-us/requests/new"
            }
        }, [this._v("Contact Us")])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("li", [t("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://huobiglobal.zendesk.com/hc/en-us"
            }
        }, [this._v("Support")])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("li", [t("a", {
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://huobiglobal.zendesk.com/hc/en-us/articles/360002257551"
            }
        }, [this._v("Download Clients")])])
    }
    , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("li", [t("span", [this._v("© 2013-2019 Huobi Global")])])
    }
    ], !1, null, "58cce24c", null).exports)
      , bt = (n(15),
    {
        name: "MobileDefaultLayout",
        head: {
            script: [He.g, {
                innerHTML: "window.appTokenCallback = function() {};",
                type: "text/javascript"
            }],
            __dangerouslyDisableSanitizers: ["script", "noscript"]
        },
        components: {
            Header: Ze,
            Footer: rt,
            Notification: it
        },
        computed: y()({
            classname: function() {
                var e = this.$route.name;
                return e && e.includes("index") || "LANG" === e || "en-us" === e ? (this.$store.commit("exchange/SET_EXCHANGE_TYPE", "exchange"),
                "homepage") : e && (e.includes("LANG-exchange") || e.includes("LANG-orderbooks") || e.includes("LANG-margin") || "en-us-exchange" === e) ? "en-us-exchange" === e ? "en-exchange" : "global-exchange" : e && e.includes("LANG-topic-vip") || e.includes("LANG-ht") ? "homepage" : ""
            },
            theme: function() {
                return localStorage.theme || this.$store.state.exchange.theme
            },
            footerShow: function() {
                var e = this.$route.name;
                return !("en-us-exchange" === e || "en-us-margin" === e)
            }
        }, Object(Ie.c)({
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
                            "en-us-exchange" === this.$route.name && (this.isEnExchange = !0),
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
                        t.resize()
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
                            this.$nextTick(He.c),
                            ht.a.change(function(e) {
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
      , yt = (n(288),
    {
        _content: ct,
        _default: pt,
        _demo: gt,
        _login: _t,
        _m_default: Object(Oe.a)(bt, function() {
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
        }, [], !1, null, "47aa0f70", null).exports
    })
      , wt = {
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
              , a = e("div", {
                domProps: {
                    id: "__layout"
                },
                key: this.layoutName
            }, [r])
              , i = e("transition", {
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
            }, [a]);
            return e("div", {
                domProps: {
                    id: "__nuxt"
                }
            }, [n, i])
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
                return e && yt["_" + e] || (e = "default"),
                this.layoutName = e,
                this.layout = yt["_" + e],
                this.layout
            },
            loadLayout: function(e) {
                return e && yt["_" + e] || (e = "default"),
                Promise.resolve(yt["_" + e])
            }
        },
        components: {
            NuxtLoading: Se
        }
    };
    s.default.use(Ie.a);
    var xt = n(289)
      , kt = xt.keys()
      , Ot = {}
      , Et = kt.find(function(e) {
        return e.includes("./index.")
    });
    if (Et && (Ot = Ft(Et)),
    "function" != typeof Ot) {
        Ot.modules || (Ot.modules = {});
        var Tt = !0
          , Ct = !1
          , St = void 0;
        try {
            for (var At, Lt = kt[Symbol.iterator](); !(Tt = (At = Lt.next()).done); Tt = !0) {
                var It = At.value
                  , Rt = It.replace(/^\.\//, "").replace(/\.(js|mjs)$/, "");
                if ("index" !== Rt) {
                    var Nt = Rt.split(/\//);
                    if (Rt = Nt[Nt.length - 1],
                    ["state", "getters", "actions", "mutations"].includes(Rt)) {
                        Vt(Kt(Ot, Nt, !0), It, Rt)
                    } else {
                        var Pt = "index" === Rt;
                        Pt && Nt.pop();
                        var jt = Kt(Ot, Nt)
                          , $t = Ft(It);
                        if (jt[Rt = Nt.pop()] = jt[Rt] || {},
                        Pt) {
                            var Dt = {};
                            if (jt[Rt].appends) {
                                Dt.appends = jt[Rt].appends;
                                var Ut = !0
                                  , Bt = !1
                                  , Gt = void 0;
                                try {
                                    for (var Ht, Mt = jt[Rt].appends[Symbol.iterator](); !(Ut = (Ht = Mt.next()).done); Ut = !0) {
                                        var zt = Ht.value;
                                        Dt[zt] = jt[Rt][zt]
                                    }
                                } catch (e) {
                                    Bt = !0,
                                    Gt = e
                                } finally {
                                    try {
                                        Ut || null == Mt.return || Mt.return()
                                    } finally {
                                        if (Bt)
                                            throw Gt
                                    }
                                }
                            }
                            jt[Rt] = Object.assign({}, jt[Rt], $t, Dt),
                            jt[Rt].namespaced = !0
                        } else
                            jt[Rt] = Object.assign({}, $t, jt[Rt]),
                            jt[Rt].namespaced = !0
                    }
                }
            }
        } catch (e) {
            Ct = !0,
            St = e
        } finally {
            try {
                Tt || null == Lt.return || Lt.return()
            } finally {
                if (Ct)
                    throw St
            }
        }
    }
    var qt = Ot instanceof Function ? Ot : function() {
        return new Ie.a.Store(Object.assign({
            strict: !1
        }, Ot, {
            state: Ot.state instanceof Function ? Ot.state() : {}
        }))
    }
    ;
    function Ft(e) {
        var t = xt(e)
          , n = t.default || t;
        if (n.commit)
            throw new Error("[nuxt] store/" + e.replace("./", "") + " should export a method which returns a Vuex instance.");
        if (n.state && "function" != typeof n.state)
            throw new Error("[nuxt] state should be a function in store/" + e.replace("./", ""));
        return n
    }
    function Kt(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === t.length)
            return n ? e : e.modules;
        var r = t.shift();
        return e.modules[r] = e.modules[r] || {},
        e.modules[r].namespaced = !0,
        e.modules[r].modules = e.modules[r].modules || {},
        Kt(e.modules[r], t, n)
    }
    function Vt(e, t, n) {
        var r = xt(t);
        e.appends = e.appends || [],
        e.appends.push(n),
        e[n] = r.default || r
    }
    for (var Jt = n(191), Yt = n.n(Jt), Xt = function(e, t) {
        var n = e.req
          , r = e.res
          , a = !0;
        t("cookies", Yt()(n, r, a))
    }, Qt = n(77), Wt = n.n(Qt), Zt = {
        setHeader: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common"
              , r = !0
              , a = !1
              , i = void 0;
            try {
                for (var o, s = (Array.isArray(n) ? n : [n])[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                    var c = o.value;
                    if (!t)
                        return void delete this.defaults.headers[c][e];
                    this.defaults.headers[c][e] = t
                }
            } catch (e) {
                a = !0,
                i = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (a)
                        throw i
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
    }, en = function() {
        var e = nn[tn];
        Zt["$" + e] = function() {
            return this[e].apply(this, arguments).then(function(e) {
                return e && e.data
            })
        }
    }, tn = 0, nn = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; tn < nn.length; tn++)
        en();
    var rn = function(e, t) {
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
        var r = Wt.a.create(n);
        !function(e) {
            for (var t in Zt)
                e[t] = Zt[t].bind(e)
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
              , a = 0;
            e.onRequest(function(e) {
                e && !1 === e.progress || a++
            }),
            e.onResponse(function(e) {
                e && e.config && !1 === e.config.progress || --a <= 0 && (a = 0,
                r().finish())
            }),
            e.onError(function(e) {
                e && e.config && !1 === e.config.progress || (a--,
                r().fail(),
                r().finish())
            });
            var i = function(e) {
                if (a) {
                    var t = 100 * e.loaded / (e.total * a);
                    r().set(Math.min(100, t))
                }
            };
            e.defaults.onUploadProgress = i,
            e.defaults.onDownloadProgress = i
        }(r),
        e.$axios = r,
        t("axios", r)
    }
      , an = n(3);
    s.default.filter("t2d", He.s),
    s.default.filter("fix", an.c),
    s.default.filter("s2l", Ge.b),
    s.default.filter("ts", He.t);
    var on = function(e, t) {
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
      , sn = (n(21),
    function(e) {
        return cn.apply(this, arguments)
    }
    );
    function cn() {
        return (cn = o()(regeneratorRuntime.mark(function e(t) {
            var r, a, i, o;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return r = t.store,
                        a = t.route,
                        i = a.name,
                        ["exchange"].indexOf(i),
                        e.next = 7,
                        n.e(48).then(n.t.bind(null, 658, 7));
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
    var un = n(90)
      , ln = (n(215),
    function(e) {
        e.app;
        var t = e.route
          , n = e.store
          , r = e.redirect
          , a = t.params.LANG || t.path.split("/")[1];
        if (a = a || localStorage.lang,
        "/" !== t.path)
            if (un.a.map(function(e) {
                return e.key
            }).includes(a)) {
                n.commit("SET_LOCALE", a);
                var i = document.querySelector("html");
                i.classList.remove("zh-cn"),
                i.classList.add(a),
                localStorage.setItem("lang", a)
            } else
                localStorage.setItem("lang", "zh-cn"),
                r("/zh-cn/".concat(t.fullPath))
    }
    )
      , fn = (n(308),
    n(91),
    n(192))
      , hn = n.n(fn)
      , dn = (n(314),
    n(193))
      , pn = n.n(dn)
      , mn = (n(316),
    n(194))
      , gn = n.n(mn)
      , vn = (n(317),
    n(195))
      , _n = n.n(vn)
      , bn = (n(181),
    n(76))
      , yn = n.n(bn)
      , wn = n(196)
      , xn = n.n(wn)
      , kn = n(138)
      , On = n.n(kn)
      , En = n(197)
      , Tn = n.n(En)
      , Cn = n(198)
      , Sn = n.n(Cn)
      , An = n(199)
      , Ln = n.n(An)
      , In = n(200)
      , Rn = n.n(In)
      , Nn = n(201)
      , Pn = n.n(Nn)
      , jn = n(202)
      , $n = n.n(jn)
      , Dn = n(203)
      , Un = n.n(Dn)
      , Bn = n(204)
      , Gn = n.n(Bn)
      , Hn = n(205)
      , Mn = n.n(Hn)
      , zn = n(206)
      , qn = n.n(zn)
      , Fn = n(207)
      , Kn = n.n(Fn);
    s.default.use(_n.a),
    s.default.use(gn.a),
    s.default.use(pn.a),
    s.default.use(hn.a);
    var Vn = function(e) {
        !function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "zh-cn"
              , t = {
                "en-us": xn.a,
                "zh-cn": On.a,
                "zh-hk": Tn.a,
                "ko-kr": Sn.a,
                "ru-ru": Ln.a,
                "de-de": Rn.a,
                "fr-fr": Pn.a,
                "es-es": $n.a,
                "tr-tr": Un.a,
                "vi-vi": Gn.a,
                "pt-br": qn.a,
                "pt-pt": Mn.a,
                "th-th": Kn.a
            };
            yn.a.use(t[e])
        }(e.store.state.locale)
    }
      , Jn = n(0)
      , Yn = ["/transac"]
      , Xn = function(e) {
        return Qn.apply(this, arguments)
    };
    function Qn() {
        return (Qn = o()(regeneratorRuntime.mark(function e(t) {
            var n, r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = t.store,
                        r = t.app,
                        a = t.route,
                        e.next = 3,
                        n.dispatch("user/ucLoginCheck");
                    case 3:
                        Jn.a.responseInterceptors = function(e) {
                            var t = e.data
                              , r = void 0 === t ? {} : t
                              , a = e.config
                              , i = void 0 === a ? {} : a
                              , o = e.restOptions
                              , s = void 0 === o ? i.restOptions : o;
                            !1 === r.success && "@uc" === s.aliasKey && [512, 403].includes(r.code) && (n.commit("user/UC_LOGIN_CHECK", !1),
                            n.commit("user/USER_LOGIN_STATUS", !1))
                        }
                        ,
                        r.router.beforeEach(function(e, t, r) {
                            if (n.state.user.isLogin && ~e.path.indexOf("login")) {
                                var i = a.query.backUrl || a.query.backurl;
                                location.href = i ? Object(He.b)(i) : "/en-us/exchange/"
                            }
                            Yn.some(function(t) {
                                return ~e.path.indexOf(t)
                            }) ? n.state.user.isLogin ? r() : location.href = "/".concat(a.params.LANG || "zh-cn", "/login/?backUrl=").concat(encodeURIComponent(a.fullPath)) : r()
                        });
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }))).apply(this, arguments)
    }
    var Wn = n(208)
      , Zn = n.n(Wn)
      , er = n(209)
      , tr = n.n(er)
      , nr = n(210)
      , rr = n.n(nr);
    s.default.use(Zn.a, {
        dialog: !0,
        dynamic: !0,
        injectModalsContainer: !0
    }),
    s.default.use(tr.a, {
        tooltip: !0
    }),
    s.default.use(rr.a);
    var ar, ir = n(75), or = (ar = o()(regeneratorRuntime.mark(function e(t) {
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
        return ar.apply(this, arguments)
    }
    ), sr = function(e) {
        var t = e.app
          , n = e.route.query.invite_code;
        if (n) {
            var r = new Date(+new Date + 108e5);
            t.$cookies.set("invite_code", n, {
                expires: r,
                path: "/"
            })
        }
    };
    s.default.component(_e.name, _e),
    s.default.component(be.name, be),
    s.default.component(xe.name, xe),
    s.default.component(Te.name, Te),
    s.default.use(z.a, {
        keyName: "head",
        attribute: "data-n-head",
        ssrAttribute: "data-n-head-ssr",
        tagIDKeyName: "hid"
    });
    var cr = {
        name: "page",
        mode: "out-in",
        appear: !1,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to"
    };
    function ur() {
        return (ur = o()(regeneratorRuntime.mark(function e(t) {
            var n, r, a, i, o, c, u, l;
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
                            scrollBehavior: ge,
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
                                component: J,
                                name: "en-us-exchange"
                            }, {
                                path: "/en-us/login",
                                component: Y,
                                name: "en-us-login"
                            }, {
                                path: "/en-us/margin",
                                component: X,
                                name: "en-us-margin"
                            }, {
                                path: "/en-us/register",
                                component: Q,
                                name: "en-us-register"
                            }, {
                                path: "/en-us/reset-password",
                                component: W,
                                name: "en-us-reset-password"
                            }, {
                                path: "/en-us/:coin_coin?/exchange",
                                component: Z,
                                name: "en-us-coin_coin-exchange"
                            }, {
                                path: "/en-us/:coin_coin?/margin",
                                component: ee,
                                name: "en-us-coin_coin-margin"
                            }, {
                                path: "/",
                                component: te,
                                name: "index"
                            }, {
                                path: "/:LANG",
                                component: ne,
                                name: "LANG"
                            }, {
                                path: "/:LANG/download",
                                component: re,
                                name: "LANG-download"
                            }, {
                                path: "/:LANG/exchange",
                                component: ae,
                                name: "LANG-exchange"
                            }, {
                                path: "/:LANG/ht",
                                component: ie,
                                name: "LANG-ht"
                            }, {
                                path: "/:LANG/margin",
                                component: oe,
                                name: "LANG-margin"
                            }, {
                                path: "/:LANG/orderbooks",
                                component: se,
                                name: "LANG-orderbooks"
                            }, {
                                path: "/:LANG/transac",
                                component: ce,
                                name: "LANG-transac"
                            }, {
                                path: "/:LANG/topic/m-reset-ga",
                                component: ue,
                                name: "LANG-topic-m-reset-ga"
                            }, {
                                path: "/:LANG/topic/reset-ga",
                                component: le,
                                name: "LANG-topic-reset-ga"
                            }, {
                                path: "/:LANG/topic/vip",
                                component: fe,
                                name: "LANG-topic-vip"
                            }, {
                                path: "/:LANG/topic/prime/position",
                                component: he,
                                name: "LANG-topic-prime-position"
                            }, {
                                path: "/:LANG/topic/prime/position/h5",
                                component: de,
                                name: "LANG-topic-prime-position-h5"
                            }, {
                                path: "/:LANG/:coin_coin/exchange",
                                component: pe,
                                name: "LANG-coin_coin-exchange"
                            }, {
                                path: "/:LANG/:coin_coin/margin",
                                component: me,
                                name: "LANG-coin_coin-margin"
                            }],
                            fallback: !1
                        });
                    case 2:
                        return n = e.sent,
                        (r = qt(t)).$router = n,
                        a = r.registerModule,
                        r.registerModule = function(e, t, n) {
                            return a.call(r, e, t, Object.assign({
                                preserveState: !0
                            }, n))
                        }
                        ,
                        i = y()({
                            router: n,
                            store: r,
                            nuxt: {
                                defaultTransition: cr,
                                transitions: [cr],
                                setTransitions: function(e) {
                                    return Array.isArray(e) || (e = [e]),
                                    e = e.map(function(e) {
                                        return e = e ? "string" == typeof e ? Object.assign({}, cr, {
                                            name: e
                                        }) : Object.assign({}, cr, e) : cr
                                    }),
                                    this.$options.nuxt.transitions = e,
                                    e
                                },
                                err: null,
                                dateErr: null,
                                error: function(e) {
                                    e = e || null,
                                    i.context._errored = !!e,
                                    e = e ? $(e) : null;
                                    var n = this.nuxt || this.$options.nuxt;
                                    return n.dateErr = Date.now(),
                                    n.err = e,
                                    t && (t.nuxt.error = e),
                                    e
                                }
                            }
                        }, wt),
                        r.app = i,
                        o = t ? t.next : function(e) {
                            return i.router.push(e)
                        }
                        ,
                        t ? c = n.resolve(t.url).route : (u = N(n.options.base),
                        c = n.resolve(u).route),
                        e.next = 13,
                        L(i, {
                            route: c,
                            next: o,
                            error: i.nuxt.error.bind(i),
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
                            i[e = "$" + e] = t,
                            r[e] = i[e];
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
                        "function" != typeof Xt) {
                            e.next = 18;
                            break
                        }
                        return e.next = 18,
                        Xt(i.context, l);
                    case 18:
                        if ("function" != typeof rn) {
                            e.next = 21;
                            break
                        }
                        return e.next = 21,
                        rn(i.context, l);
                    case 21:
                        e.next = 24;
                        break;
                    case 24:
                        if ("function" != typeof on) {
                            e.next = 27;
                            break
                        }
                        return e.next = 27,
                        on(i.context, l);
                    case 27:
                        if ("function" != typeof sn) {
                            e.next = 30;
                            break
                        }
                        return e.next = 30,
                        sn(i.context, l);
                    case 30:
                        if ("function" != typeof ln) {
                            e.next = 33;
                            break
                        }
                        return e.next = 33,
                        ln(i.context, l);
                    case 33:
                        if ("function" != typeof Vn) {
                            e.next = 36;
                            break
                        }
                        return e.next = 36,
                        Vn(i.context, l);
                    case 36:
                        if ("function" != typeof Xn) {
                            e.next = 40;
                            break
                        }
                        return e.next = 40,
                        Xn(i.context, l);
                    case 40:
                        e.next = 43;
                        break;
                    case 43:
                        if ("function" != typeof ir.default) {
                            e.next = 46;
                            break
                        }
                        return e.next = 46,
                        Object(ir.default)(i.context, l);
                    case 46:
                        if ("function" != typeof or) {
                            e.next = 49;
                            break
                        }
                        return e.next = 49,
                        or(i.context, l);
                    case 49:
                        if ("function" != typeof sr) {
                            e.next = 52;
                            break
                        }
                        return e.next = 52,
                        sr(i.context, l);
                    case 52:
                        e.next = 55;
                        break;
                    case 55:
                        return e.abrupt("return", {
                            app: i,
                            store: r,
                            router: n
                        });
                    case 56:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }))).apply(this, arguments)
    }
    var lr, fr, hr = [], dr = window.__NUXT__ || {};
    function pr(e, t, n) {
        var r = function(e) {
            var r = function(e, t) {
                if (!e || !e.options || !e.options[t])
                    return {};
                var n = e.options[t];
                if ("function" == typeof n) {
                    for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
                        a[i - 2] = arguments[i];
                    return n.apply(void 0, a)
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
                var a = r(n.matched[0].components.default);
                Object.keys(a).filter(function(e) {
                    return a[e] && e.toLowerCase().includes("leave")
                }).forEach(function(e) {
                    t[e] = a[e]
                })
            }
            return t
        })
    }
    function mr(e, t, n) {
        return gr.apply(this, arguments)
    }
    function gr() {
        return (gr = o()(regeneratorRuntime.mark(function e(t, n, r) {
            var a, i = this;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return this._pathChanged = !!lr.nuxt.err || n.path !== t.path,
                        this._queryChanged = JSON.stringify(t.query) !== JSON.stringify(n.query),
                        this._diffQuery = this._queryChanged ? j(t.query, n.query) : [],
                        this._pathChanged && this.$loading.start && !this.$loading.manual && this.$loading.start(),
                        e.prev = 4,
                        e.next = 7,
                        C(t);
                    case 7:
                        a = e.sent,
                        !this._pathChanged && this._queryChanged && a.some(function(e) {
                            var t = e.options.watchQuery;
                            return !0 === t || !!Array.isArray(t) && t.some(function(e) {
                                return i._diffQuery[e]
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
    function vr(e, t) {
        return dr.serverRendered && t && k(e, t),
        e._Ctor = e,
        e
    }
    function _r(e) {
        var t, n = N(e.options.base, e.options.mode);
        return T(e.match(n), (t = o()(regeneratorRuntime.mark(function e(t, n, r, a, i) {
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
                        return o = vr(O(t), dr.data ? dr.data[i] : null),
                        r.components[a] = o,
                        e.abrupt("return", o);
                    case 7:
                    case "end":
                        return e.stop()
                    }
            }, e)
        })),
        function(e, n, r, a, i) {
            return t.apply(this, arguments)
        }
        ))
    }
    function br(e, t, n) {
        var r = this
          , a = []
          , i = !1;
        if (void 0 !== n && (a = [],
        n.middleware && (a = a.concat(n.middleware)),
        e.forEach(function(e) {
            e.options.middleware && (a = a.concat(e.options.middleware))
        })),
        a = a.map(function(e) {
            return "function" == typeof e ? e : ("function" != typeof _[e] && (i = !0,
            r.error({
                statusCode: 500,
                message: "Unknown middleware " + e
            })),
            _[e])
        }),
        !i)
            return function e(t, n) {
                return !t.length || n._redirected || n._errored ? Promise.resolve() : R(t[0], n).then(function() {
                    return e(t.slice(1), n)
                })
            }(a, t)
    }
    function yr(e, t, n) {
        return wr.apply(this, arguments)
    }
    function wr() {
        return (wr = o()(regeneratorRuntime.mark(function e(t, n, r) {
            var a, i, o, c, u, l, f, h, d, p, m, g, v, _, b, y, w = this;
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
                        return hr = t === n ? [] : E(n, a = []).map(function(e, t) {
                            return P(n.matched[a[t]].path)(n.params)
                        }),
                        i = !1,
                        o = function(e) {
                            n.path === e.path && w.$loading.finish && w.$loading.finish(),
                            n.path !== e.path && w.$loading.pause && w.$loading.pause(),
                            i || (i = !0,
                            r(e))
                        }
                        ,
                        e.next = 7,
                        L(lr, {
                            route: t,
                            from: n,
                            next: o.bind(this)
                        });
                    case 7:
                        if (this._dateLastError = lr.nuxt.dateErr,
                        this._hadError = !!lr.nuxt.err,
                        (u = E(t, c = [])).length) {
                            e.next = 25;
                            break
                        }
                        return e.next = 14,
                        br.call(this, u, lr.context);
                    case 14:
                        if (!i) {
                            e.next = 16;
                            break
                        }
                        return e.abrupt("return");
                    case 16:
                        return e.next = 18,
                        this.loadLayout("function" == typeof Ee.layout ? Ee.layout(lr.context) : Ee.layout);
                    case 18:
                        return l = e.sent,
                        e.next = 21,
                        br.call(this, u, lr.context, l);
                    case 21:
                        if (!i) {
                            e.next = 23;
                            break
                        }
                        return e.abrupt("return");
                    case 23:
                        return lr.context.error({
                            statusCode: 404,
                            message: "This page could not be found"
                        }),
                        e.abrupt("return", r());
                    case 25:
                        return u.forEach(function(e) {
                            e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData,
                            e.options.fetch = e._Ctor.options.fetch)
                        }),
                        this.setTransitions(pr(u, t, n)),
                        e.prev = 27,
                        e.next = 30,
                        br.call(this, u, lr.context);
                    case 30:
                        if (!i) {
                            e.next = 32;
                            break
                        }
                        return e.abrupt("return");
                    case 32:
                        if (!lr.context._errored) {
                            e.next = 34;
                            break
                        }
                        return e.abrupt("return", r());
                    case 34:
                        return "function" == typeof (f = u[0].options.layout) && (f = f(lr.context)),
                        e.next = 38,
                        this.loadLayout(f);
                    case 38:
                        return f = e.sent,
                        e.next = 41,
                        br.call(this, u, lr.context, f);
                    case 41:
                        if (!i) {
                            e.next = 43;
                            break
                        }
                        return e.abrupt("return");
                    case 43:
                        if (!lr.context._errored) {
                            e.next = 45;
                            break
                        }
                        return e.abrupt("return", r());
                    case 45:
                        h = !0,
                        e.prev = 46,
                        d = !0,
                        p = !1,
                        m = void 0,
                        e.prev = 50,
                        g = u[Symbol.iterator]();
                    case 52:
                        if (d = (v = g.next()).done) {
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
                        _.options.validate(lr.context);
                    case 58:
                        if (h = e.sent) {
                            e.next = 61;
                            break
                        }
                        return e.abrupt("break", 64);
                    case 61:
                        d = !0,
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
                        d || null == g.return || g.return();
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
                            w._pathChanged && w._queryChanged || e._path !== hr[n])
                                e._dataRefresh = !0;
                            else if (!w._pathChanged && w._queryChanged) {
                                var r = e.options.watchQuery;
                                !0 === r ? e._dataRefresh = !0 : Array.isArray(r) && (e._dataRefresh = r.some(function(e) {
                                    return w._diffQuery[e]
                                }))
                            }
                            if (!w._hadError && w._isMounted && !e._dataRefresh)
                                return Promise.resolve();
                            var a = []
                              , i = e.options.asyncData && "function" == typeof e.options.asyncData
                              , o = !!e.options.fetch
                              , s = i && o ? 30 : 45;
                            if (i) {
                                var u = R(e.options.asyncData, lr.context).then(function(t) {
                                    k(e, t),
                                    w.$loading.increase && w.$loading.increase(s)
                                });
                                a.push(u)
                            }
                            if (w.$loading.manual = !1 === e.options.loading,
                            o) {
                                var l = e.options.fetch(lr.context);
                                l && (l instanceof Promise || "function" == typeof l.then) || (l = Promise.resolve(l)),
                                l.then(function(e) {
                                    w.$loading.increase && w.$loading.increase(s)
                                }),
                                a.push(l)
                            }
                            return Promise.all(a)
                        }));
                    case 89:
                        i || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(),
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
                        return hr = [],
                        x = b,
                        s.default.config.errorHandler && s.default.config.errorHandler(x),
                        "function" == typeof (y = Ee.layout) && (y = y(lr.context)),
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
    function xr(e, t) {
        T(e, function(e, t, n, r) {
            return "object" !== a()(e) || e.options || ((e = s.default.extend(e))._Ctor = e,
            n.components[r] = e),
            e
        })
    }
    function kr(e) {
        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();
        var t = this.$options.nuxt.err ? Ee.layout : e.matched[0].components.default.options.layout;
        "function" == typeof t && (t = t(lr.context)),
        this.setLayout(t)
    }
    function Or(e, t) {
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
              , a = E(e, t);
            r.forEach(function(e, t) {
                if (e && e.constructor._dataRefresh && a[t] === e.constructor && "function" == typeof e.constructor.options.data) {
                    var n = e.constructor.options.data.call(e);
                    for (var r in n)
                        s.default.set(e.$data, r, n[r])
                }
            }),
            kr.call(n, e)
        })
    }
    function Er(e) {
        window.onNuxtReadyCbs.forEach(function(t) {
            "function" == typeof t && t(e)
        }),
        "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e),
        fr.afterEach(function(t, n) {
            s.default.nextTick(function() {
                return e.$nuxt.$emit("routeChanged", t, n)
            })
        })
    }
    function Tr() {
        return (Tr = o()(regeneratorRuntime.mark(function e(t) {
            var n, r, a, i;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return lr = t.app,
                        fr = t.router,
                        t.store,
                        e.next = 5,
                        Promise.all(_r(fr));
                    case 5:
                        return n = e.sent,
                        r = new s.default(lr),
                        a = dr.layout || "default",
                        e.next = 10,
                        r.loadLayout(a);
                    case 10:
                        if (r.setLayout(a),
                        i = function() {
                            r.$mount("#__nuxt"),
                            s.default.nextTick(function() {
                                Er(r)
                            })
                        }
                        ,
                        r.setTransitions = r.$options.nuxt.setTransitions.bind(r),
                        n.length && (r.setTransitions(pr(n, fr.currentRoute)),
                        hr = fr.currentRoute.matched.map(function(e) {
                            return P(e.path)(fr.currentRoute.params)
                        })),
                        r.$loading = {},
                        dr.error && r.error(dr.error),
                        fr.beforeEach(mr.bind(r)),
                        fr.beforeEach(yr.bind(r)),
                        fr.afterEach(xr),
                        fr.afterEach(Or.bind(r)),
                        !dr.serverRendered) {
                            e.next = 23;
                            break
                        }
                        return i(),
                        e.abrupt("return");
                    case 23:
                        yr.call(r, fr.currentRoute, fr.currentRoute, function(e) {
                            if (!e)
                                return xr(fr.currentRoute, fr.currentRoute),
                                kr.call(r, fr.currentRoute),
                                void i();
                            fr.push(e, function() {
                                return i()
                            }, function(e) {
                                if (!e)
                                    return i()
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
        return ur.apply(this, arguments)
    }().then(function(e) {
        return Tr.apply(this, arguments)
    }).catch(function(e) {})
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    n(9);
    var r, a, i = n(1), o = n.n(i), s = n(15), c = n(7), u = n(21), l = n.n(u), f = n(14), h = n(6), d = ["HBP_AGREE", "HB-HADAXV2-TOKEN", "HB-ETF-TOKEN", "HB-UC-TOKEN", "HB-PRO-TOKEN", "HB-OLD-TOKEN", "HB-VOTE-TOKEN", "AUTHTOKEN"], p = (r = o()(regeneratorRuntime.mark(function e() {
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
                    f.a.pub("isLogin", 1),
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
        Object(h.q)(d),
        f.a.pub("isLogin", 0),
        localStorage.removeItem("huobi_pro_eyes"),
        sessionStorage.clear(),
        window.gio && window.gio("clearUserId")
    };
    a = o()(regeneratorRuntime.mark(function e() {
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
                    return Object(h.q)("HB-PRO-TOKEN"),
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
                var n, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.commit,
                            e.next = 3,
                            c.b.checkLogin();
                        case 3:
                            if (r = e.sent,
                            a = r.success,
                            510 !== r.code) {
                                e.next = 8;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 8:
                            localStorage.setItem("UC_IS_LOGIN", a ? "1" : "0"),
                            n("UC_LOGIN_CHECK", a),
                            n("USER_LOGIN_STATUS", a);
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
                var n, r, a = arguments;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t.app,
                            n = t.commit,
                            a.length > 1 && void 0 !== a[1] ? a[1] : 0,
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
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t.commit,
                            n = t.dispatch,
                            e.next = 3,
                            s.f.ucLogout();
                        case 3:
                            e.sent.success && n("proLogout");
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
                            c.g.getIdentity();
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
], [[218, 25, 24, 26]]]);

!function(t) {
    function e(e) {
        for (var s, r, o = e[0], c = e[1], u = e[2], f = 0, d = []; f < o.length; f++)
            r = o[f],
            a[r] && d.push(a[r][0]),
            a[r] = 0;
        for (s in c)
            Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
        for (l && l(e); d.length; )
            d.shift()();
        return i.push.apply(i, u || []),
        n()
    }
    function n() {
        for (var t, e = 0; e < i.length; e++) {
            for (var n = i[e], s = !0, o = 1; o < n.length; o++) {
                var c = n[o];
                0 !== a[c] && (s = !1)
            }
            s && (i.splice(e--, 1),
            t = r(r.s = n[0]))
        }
        return t
    }
    var s = {}
      , a = {
        53: 0
    }
      , i = [];
    function r(e) {
        if (s[e])
            return s[e].exports;
        var n = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    r.e = function(t) {
        var e = []
          , n = a[t];
        if (0 !== n)
            if (n)
                e.push(n[2]);
            else {
                var s = new Promise(function(e, s) {
                    n = a[t] = [e, s]
                }
                );
                e.push(n[2] = s);
                var i = document.getElementsByTagName("head")[0]
                  , o = document.createElement("script");
                o.charset = "utf-8",
                o.timeout = 120,
                r.nc && o.setAttribute("nonce", r.nc),
                o.src = function(t) {
                    return r.p + "js/" + ({}[t] || t) + "." + {
                        0: "165eb872333b3dffe1f3",
                        1: "7ea163b440b2c680a0ec",
                        2: "7387c5ffafe0e814f6cb"
                    }[t] + ".js"
                }(t);
                var c = setTimeout(function() {
                    u({
                        type: "timeout",
                        target: o
                    })
                }, 12e4);
                function u(e) {
                    o.onerror = o.onload = null,
                    clearTimeout(c);
                    var n = a[t];
                    if (0 !== n) {
                        if (n) {
                            var s = e && ("load" === e.type ? "missing" : e.type)
                              , i = e && e.target && e.target.src
                              , r = new Error("Loading chunk " + t + " failed.\n(" + s + ": " + i + ")");
                            r.type = s,
                            r.request = i,
                            n[1](r)
                        }
                        a[t] = void 0
                    }
                }
                o.onerror = o.onload = u,
                i.appendChild(o)
            }
        return Promise.all(e)
    }
    ,
    r.m = t,
    r.c = s,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var s in t)
                r.d(n, s, function(e) {
                    return t[e]
                }
                .bind(null, s));
        return n
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "/",
    r.oe = function(t) {
        throw t
    }
    ;
    var o = window.webpackJsonp = window.webpackJsonp || []
      , c = o.push.bind(o);
    o.push = e,
    o = o.slice();
    for (var u = 0; u < o.length; u++)
        e(o[u]);
    var l = c;
    i.push([1635, 3]),
    n()
}({
    1143: function(t, e, n) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.loading,
                    expression: "loading"
                }],
                staticClass: "output-record"
            }, [n("h3", {
                staticClass: "g-font24"
            }, [t._v(t._s(t.$_lang("参投记录")))]), t._v(" "), t.data.length ? n("ul", {
                staticClass: "record-list"
            }, t._l(t.data, function(e, s) {
                return n("li", {
                    key: s,
                    staticClass: "g-relative"
                }, [n("div", {
                    staticClass: "col-999"
                }, [t._v(t._s(e.createTime))]), t._v(" "), n("div", [t._v(t._s(e._option))]), t._v(" "), n("div", {
                    staticClass: "tip g-font16",
                    style: {
                        color: t.checkStatus(e.recordStatus).color
                    }
                }, [t._v("\n        " + t._s(t.checkStatus(e.recordStatus).content) + "\n      ")])])
            })) : n("div", {
                staticClass: "g-center no-data"
            }, [t._v("\n    " + t._s(t.$_lang("暂无记录")) + "\n  ")])])
        }
          , a = [];
        s._withStripped = !0,
        n.d(e, "a", function() {
            return s
        }),
        n.d(e, "b", function() {
            return a
        })
    },
    1145: function(t, e, n) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "banner-info g-content"
            }, [n("div", {
                staticClass: "g-container"
            }, [n("div", {
                staticClass: "banner-title g-between-center"
            }, [n("div", {
                staticClass: "g-vcenter"
            }, [n("div", {
                staticClass: "item-icon"
            }, [n("img", {
                attrs: {
                    src: t.resultInfo.icon,
                    alt: ""
                }
            })]), t._v(" "), n("div", [n("p", {
                staticClass: "g-font18"
            }, [t._v(t._s(t.resultInfo.aliasName))]), t._v(" "), n("p", {
                staticClass: "g-font14 col-font-999"
            }, [t._v("\n            " + t._s(t.$_lang("简称")) + "：" + t._s(t.resultInfo._exchangeAsset) + "\n          ")])])]), t._v(" "), n("div", {
                staticClass: "g-center status-tip g-font12",
                class: t.statusComputed.className
            }, [t._v("\n        " + t._s(t.$_lang(t.statusComputed.tip)) + "\n      ")])]), t._v(" "), n("div", {
                staticClass: "banner-group g-between-top"
            }, [n("div", {
                staticClass: "banner-inner"
            }, [n("img", {
                attrs: {
                    src: t.resultInfo.banner,
                    alt: ""
                }
            })]), t._v(" "), n("div", {
                staticClass: "banner-content"
            }, [n("progress-bar", {
                attrs: {
                    height: "8px",
                    progress: t.resultInfo._progress + "%",
                    bg_bar: t.statusComputed.color
                }
            }), t._v(" "), n("div", {
                staticClass: "item-info-box"
            }, [t._v("\n          " + t._s(t.resultInfo._progress + "%") + "\n          ")]), t._v(" "), n("div", {
                staticClass: "coin-list g-font16"
            }, t._l(t.resultInfo._exchangeScale, function(e, s) {
                return n("ul", {
                    key: s,
                    staticClass: "g-between-center"
                }, [n("li", {
                    staticClass: "g-vcenter"
                }, [n("img", {
                    staticClass: "coin-list-img",
                    attrs: {
                        src: e.icon,
                        alt: ""
                    }
                }), t._v("\n              1 " + t._s(e.coin) + "\n            ")]), t._v(" "), n("li", [t._v(t._s(e.trade) + " " + t._s(t.resultInfo._exchangeAsset))])])
            })), t._v(" "), n("div", {
                staticClass: "pro-info"
            }, [n("div", {
                staticClass: "g-between-center"
            }, [n("span", {
                staticClass: "col-font-999"
            }, [t._v(t._s(t.$_lang("阶段")) + ":")]), t._v(" "), n("span", [t._v(t._s(t.$_lang(t.currentPeriod)))])]), t._v(" "), n("div", {
                staticClass: "g-between-center"
            }, [n("span", {
                staticClass: "col-font-999"
            }, [t._v(t._s(t.$_lang("代投手续费")) + ":")]), t._v(" "), n("span", [t._v(t._s(t.resultInfo._feeRate || "--"))])]), t._v(" "), n("div", {
                staticClass: "g-between-center"
            }, [n("span", {
                staticClass: "col-font-999"
            }, [t._v(t._s(t.$_lang("开始时间")) + ":")]), t._v(" "), n("span", [t._v(t._s(t.resultInfo._startTime) + " (" + t._s(t.resultInfo._timeZone) + ")")])])])], 1)])])])
        }
          , a = [];
        s._withStripped = !0,
        n.d(e, "a", function() {
            return s
        }),
        n.d(e, "b", function() {
            return a
        })
    },
    1147: function(t, e, n) {
        "use strict";
        var s = function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "token-sale-description"
            }, [this._l(this.resultDetails, function(t, n) {
                return e("img", {
                    key: n,
                    attrs: {
                        width: "100%",
                        src: t,
                        alt: ""
                    }
                })
            }), this._v(" "), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !this.resultDetails,
                    expression: "!resultDetails"
                }],
                staticClass: "g-center g-font16 tsd-empty g-content"
            }, [e("v-nodata", {
                attrs: {
                    "empty-text": this.$_lang("暂无内容介绍")
                }
            })], 1)], 2)
        }
          , a = [];
        s._withStripped = !0,
        n.d(e, "a", function() {
            return s
        }),
        n.d(e, "b", function() {
            return a
        })
    },
    1151: function(t, e, n) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.loading,
                    expression: "loading"
                }],
                staticClass: "output-asset g-font16"
            }, [n("div", {
                staticClass: "header g-center"
            }, [t.isResult && t.result._exchangeScale.length ? n("el-dropdown", {
                attrs: {
                    trigger: "click",
                    placement: "bottom"
                },
                on: {
                    command: t.command
                }
            }, [n("span", {
                staticClass: "el-dropdown-link g-pointer"
            }, [t._v("\n      " + t._s(t.coinInfo.coin) + "\n      "), n("i", {
                staticClass: "el-icon-arrow-down el-icon--right"
            })]), t._v(" "), n("el-dropdown-menu", {
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, t._l(t.result._exchangeScale, function(e, s) {
                return n("el-dropdown-item", {
                    key: s,
                    attrs: {
                        command: s
                    }
                }, [n("div", {
                    staticClass: "g-center"
                }, [n("img", {
                    staticStyle: {
                        "margin-right": "10px"
                    },
                    attrs: {
                        src: e.icon,
                        width: "25",
                        height: "25",
                        alt: ""
                    }
                }), t._v(" "), n("span", {
                    staticStyle: {
                        width: "60px"
                    }
                }, [t._v(t._s(e.coin))])])])
            }))], 1) : t._e()], 1), t._v(" "), n("div", {
                staticClass: "body"
            }, [n("p", {
                staticClass: "body-item g-text-center"
            }, [t._v("\n      1" + t._s(t.coinInfo.coin) + " = " + t._s(t.coinInfo.trade) + " \n      " + t._s(t.result && t.result._exchangeAsset) + "\n    ")]), t._v(" "), "0" === t.result.status ? n("v-nodata", {
                attrs: {
                    "empty-text": t.$_lang("抢购即将开始，你的子弹准备好了么") + "..."
                }
            }) : n("el-form", {
                ref: "form",
                attrs: {
                    model: t.form_data,
                    rules: t.rules
                }
            }, [n("el-form-item", {
                attrs: {
                    prop: "vol"
                }
            }, [n("el-input", {
                attrs: {
                    max: t.canUse,
                    placeholder: t.$_lang("参投数量")
                },
                model: {
                    value: t.form_data.vol,
                    callback: function(e) {
                        t.$set(t.form_data, "vol", e)
                    },
                    expression: "form_data.vol"
                }
            })], 1), t._v(" "), n("el-form-item", [n("p", {
                staticClass: "g-font12 col-999",
                staticStyle: {
                    "line-height": "20px"
                }
            }, [t._v("\n          " + t._s(t.$_lang("可用")) + ":\n          " + t._s(t.canUse) + " " + t._s(t.coinInfo.coin) + "\n        ")])]), t._v(" "), t.isPaypassword ? n("el-form-item", {
                attrs: {
                    prop: "pwd"
                }
            }, [n("el-input", {
                attrs: {
                    type: "password",
                    placeholder: t.$_lang("交易密码")
                },
                model: {
                    value: t.form_data.pwd,
                    callback: function(e) {
                        t.$set(t.form_data, "pwd", e)
                    },
                    expression: "form_data.pwd"
                }
            })], 1) : t._e(), t._v(" "), t.result && t.result.insurance ? n("div", {
                staticClass: "insurance"
            }, [n("el-checkbox", {
                model: {
                    value: t.isInsurance,
                    callback: function(e) {
                        t.isInsurance = e
                    },
                    expression: "isInsurance"
                }
            }, [n("span", {
                staticClass: "g-font16"
            }, [t._v(t._s(t.$_lang("打新保险")))])]), t._v(" "), n("p", {
                staticClass: "content g-font14"
            }, [t._v("\n          " + t._s(t.$_lang("打新保险详情")(t.result && t.result.insuranceRate)))])], 1) : t._e(), t._v(" "), n("el-button", {
                staticClass: "g-btn-one g-btn btn-submit",
                attrs: {
                    loading: t.disabled
                },
                on: {
                    click: t.submit
                }
            }, [t._v("\n        " + t._s(t.$_lang("立即参加")) + "\n      ")])], 1)], 1), t._v(" "), t.confirmOrder && t.isResult ? n("v-alert", {
                attrs: {
                    width: 680,
                    title: t.$_lang("打新订单确认")
                },
                on: {
                    cancel: function(e) {
                        t.confirmOrder = !1
                    }
                }
            }, [n("div", {
                staticClass: "g-font16 content-item"
            }, [n("div", {
                staticClass: "content-item-inner"
            }, [n("p", [n("span", {
                staticClass: "content-item-label"
            }, [t._v(t._s(t.$_lang("参投数量")))]), t._v("\n          " + t._s(t.form_data.vol) + " " + t._s(t.coinInfo.coin) + "\n        ")]), t._v(" "), n("p", [n("span", {
                staticClass: "content-item-label"
            }, [t._v(t._s(t.$_lang("保险费")))]), t._v("\n          " + t._s(t.insuranceAmt) + " " + t._s(t.coinInfo.coin) + "\n        ")]), t._v(" "), n("p", [n("span", {
                staticClass: "content-item-label"
            }, [t._v(t._s(t.$_lang("手续费约为")))]), t._v("\n          " + t._s(t.freeAmt) + " " + t._s(t.coinInfo.coin) + "\n        ")]), t._v(" "), n("p", [n("span", {
                staticClass: "content-item-label"
            }, [t._v(t._s(t.$_lang("约可兑换")))]), t._v("\n          " + t._s(t.assetOutputAmt) + " " + t._s(t.result.exchangeAsset.toUpperCase()) + "\n        ")])])]), t._v(" "), n("div", {
                staticClass: "content-item content-item-tip g-font16"
            }, [n("h3", {
                staticClass: "title seperator"
            }, [t._v(t._s(t.$_lang("温馨提示")))]), t._v(" "), n("div", {
                staticClass: "seperator"
            }, [t._v("\n        " + t._s(t.$_lang("打新提示")(t.result.aliasName)) + "\n      ")]), t._v(" "), n("div", {
                staticClass: "btn-group g-text-center"
            }, [n("el-button", {
                staticClass: "g-btn-one btn-submit",
                attrs: {
                    loading: t.disabled
                },
                on: {
                    click: function(e) {
                        t.slideDialog = !0
                    }
                }
            }, [t._v("\n          " + t._s(t.$_lang("确定")) + "\n        ")])], 1)])]) : t._e(), t._v(" "), t.slideDialog ? n("v-alert", {
                attrs: {
                    width: "540",
                    title: t.$_lang("人机验证")
                },
                on: {
                    cancel: t.checkReset
                }
            }, [n("behavior-verification", {
                on: {
                    sendVerficateData: t.verficateData
                }
            })], 1) : t._e()], 1)
        }
          , a = [];
        s._withStripped = !0,
        n.d(e, "a", function() {
            return s
        }),
        n.d(e, "b", function() {
            return a
        })
    },
    1153: function(t, e, n) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "not-login g-font18"
            }, [t._m(0), t._v(" "), n("p", {
                staticClass: "g-text-center desc"
            }, [t._v(t._s(t.$_lang("登录后就可以参加兑换啦~")))]), t._v(" "), n("a", {
                staticClass: "g-btn g-btn-one btn-login g-center",
                attrs: {
                    href: t.$_url.login
                }
            }, [t._v(t._s(t.$_lang("登录")))])])
        }
          , a = [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticStyle: {
                    "min-height": "33.55px"
                }
            }, [e("img", {
                attrs: {
                    width: "75%",
                    src: n(66),
                    alt: ""
                }
            })])
        }
        ];
        s._withStripped = !0,
        n.d(e, "a", function() {
            return s
        }),
        n.d(e, "b", function() {
            return a
        })
    },
    1221: function(t, e, n) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "token-sale"
            }, [n("v-header"), t._v(" "), n("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.loading,
                    expression: "loading"
                }],
                staticClass: "g-wrap g-loading-col1 token-wrap"
            }, [n("banner-info", {
                attrs: {
                    "result-info": t.resultInfo
                }
            }), t._v(" "), n("div", {
                staticClass: "g-container main-content g-between-top"
            }, [n("token-sale-description", {
                attrs: {
                    "result-details": t.resultInfo.details
                }
            }), t._v(" "), n("div", {
                staticClass: "right-container"
            }, [t.$_lib.isLogin ? [n("div", {
                staticClass: "container-item g-content",
                staticStyle: {
                    "min-height": "278px"
                }
            }, [n("output-asset", {
                attrs: {
                    result: t.resultInfo,
                    "project-name": t.projectName
                }
            })], 1), t._v(" "), n("output-record", {
                staticClass: "container-item g-content",
                attrs: {
                    "project-name": t.projectName
                }
            })] : n("not-login", {
                staticClass: "container-item g-content"
            })], 2)], 1)], 1), t._v(" "), n("v-footer")], 1)
        }
          , a = [];
        s._withStripped = !0,
        n.d(e, "a", function() {
            return s
        }),
        n.d(e, "b", function() {
            return a
        })
    },
    1612: function(t, e, n) {},
    1613: function(t, e, n) {
        "use strict";
        var s = n(447);
        n.n(s).a
    },
    1615: function(t, e, n) {},
    1616: function(t, e, n) {
        "use strict";
        var s = n(448);
        n.n(s).a
    },
    1617: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(1153)
          , a = n(450);
        for (var i in a)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return a[t]
                })
            }(i);
        n(1616);
        var r = n(0)
          , o = Object(r.a)(a.default, s.a, s.b, !1, null, "031ca70a", null);
        o.options.__file = "src/lbank/views/token-sale-detail/modules/not-login.vue",
        e.default = o.exports
    },
    1619: function(t, e, n) {},
    1620: function(t, e, n) {
        "use strict";
        var s = n(451);
        n.n(s).a
    },
    1621: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(1151)
          , a = n(453);
        for (var i in a)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return a[t]
                })
            }(i);
        n(1620);
        var r = n(0)
          , o = Object(r.a)(a.default, s.a, s.b, !1, null, null, null);
        o.options.__file = "src/lbank/views/token-sale-detail/modules/output-asset.vue",
        e.default = o.exports
    },
    1623: function(t, e, n) {},
    1624: function(t, e, n) {
        "use strict";
        var s = n(454);
        n.n(s).a
    },
    1625: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(1147)
          , a = n(456);
        for (var i in a)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return a[t]
                })
            }(i);
        n(1624);
        var r = n(0)
          , o = Object(r.a)(a.default, s.a, s.b, !1, null, null, null);
        o.options.__file = "src/lbank/views/token-sale-detail/modules/token-sale-description.vue",
        e.default = o.exports
    },
    1627: function(t, e, n) {},
    1628: function(t, e, n) {
        "use strict";
        var s = n(457);
        n.n(s).a
    },
    1629: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(1145)
          , a = n(459);
        for (var i in a)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return a[t]
                })
            }(i);
        n(1628);
        var r = n(0)
          , o = Object(r.a)(a.default, s.a, s.b, !1, null, null, null);
        o.options.__file = "src/lbank/views/token-sale-detail/modules/banner-info.vue",
        e.default = o.exports
    },
    1631: function(t, e, n) {},
    1632: function(t, e, n) {
        "use strict";
        var s = n(460);
        n.n(s).a
    },
    1633: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(1143)
          , a = n(462);
        for (var i in a)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return a[t]
                })
            }(i);
        n(1632);
        var r = n(0)
          , o = Object(r.a)(a.default, s.a, s.b, !1, null, "35cbad38", null);
        o.options.__file = "src/lbank/views/token-sale-detail/modules/output-record.vue",
        e.default = o.exports
    },
    1634: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(1221)
          , a = n(464);
        for (var i in a)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return a[t]
                })
            }(i);
        n(1613);
        var r = n(0)
          , o = Object(r.a)(a.default, s.a, s.b, !1, null, null, null);
        o.options.__file = "src/lbank/views/token-sale-detail/token-sale-detail.vue",
        e.default = o.exports
    },
    1635: function(t, e, n) {
        "use strict";
        var s, a = n(2), i = n(1634), r = (s = i) && s.__esModule ? s : {
            default: s
        };
        (0,
        a.Render)(function() {
            new Vue({
                el: "#app",
                components: {
                    primary: r.default
                },
                template: "<primary/>"
            })
        })
    },
    227: function(t, e, n) {},
    228: function(t, e, n) {
        "use strict";
        var s = n(26);
        n.n(s).a
    },
    229: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(61)
          , a = n(28);
        for (var i in a)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return a[t]
                })
            }(i);
        n(228);
        var r = n(0)
          , o = Object(r.a)(a.default, s.a, s.b, !1, null, "1bfc7c1f", null);
        o.options.__file = "src/lbank/include/behavior-verification.vue",
        e.default = o.exports
    },
    26: function(t, e, n) {
        var s = n(227);
        "string" == typeof s && (s = [[t.i, s, ""]]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(1)(s, a);
        s.locals && (t.exports = s.locals)
    },
    27: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(n(173))
          , a = i(n(172));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = {
            name: "behavior-verification",
            data: function() {
                return {
                    safetyStatus: !1,
                    isdomestic: !0,
                    geoIpCode: "",
                    params: {
                        token: "",
                        sig: "",
                        session: "",
                        platform: 3,
                        scene: "nc_login",
                        gToken: ""
                    }
                }
            },
            methods: {
                getGeoIpType: function() {
                    var t = this;
                    this.$_http.getGeoIpType().then(function(e) {
                        if (0 !== e.status)
                            return t.$message.error(e.msg);
                        t.geoIpCode = e.dataWrapper.geoIpCode,
                        t.isdomestic = "CN" === t.geoIpCode || "--" === t.geoIpCode;
                        var n = t;
                        t.isdomestic=true;

                        t.isdomestic ? t.initAli() : function() {
                            if (window.grecaptcha)
                                return n.initGoogleVer();
                            var t = document.createElement("script");
                            t.setAttribute("type", "text/javascript"),
                            t.src = "https://www.google.com/recaptcha/api.js",
                            t.onload = function() {
                                n.initGoogleVer()
                            }
                            ,
                            document.body.appendChild(t)
                        }()
                    })
                },
                checkReset: function(t) {
                    return 0 !== t.status && (this.isdomestic ? this.initAli() : this.initGoogleVer()),
                    t
                },
                initAli: function() {
                    var t = this;
                    if (this.safetyStatus = !1,
                    this.nc)
                        return this.nc.reset();
                    this.nc = (0,
                    s.default)({
                        renderTo: "#nc",
                        scene: "nc_login",
                        callback: function(e) {
                            t.safetyStatus = !0,
                            t.$emit("sendStatus", t.safetyStatus),
                            t.params.sig = e.sig,
                            t.params.session = e.csessionid,
                            t.params.token = e.token;
                            var n = Object.assign(t.params, {
                                geoIpCode: t.geoIpCode,
                                isdomestic: t.isdomestic
                            });
                            t.$emit("sendVerficateData", n, t.nc)
                        }
                    }, this.$_langType)
                },
                initGoogleVer: function() {
                    var t = this;
                    if (this.safetyStatus = !1,
                    this.widget)
                        return this.widget.reset();
                    window._widgetid = this.widget = new a.default("g-recaptcha",{
                        sitekey: "6LfYLXkUAAAAAKjT-BLwP0qTcyTDB2RF13djFksj",
                        theme: "light",
                        badge: "inline",
                        size: "checkbox",
                        callback: function(e) {
                            t.safetyStatus = !0,
                            t.$emit("sendStatus", t.safetyStatus),
                            t.params.gToken = e,
                            t.params.isdomestic = t.isdomestic,
                            t.params.geoIpCode = t.geoIpCode,
                            t.$emit("sendVerficateData", t.params, t.widget)
                        }
                    },this.$_langType)
                }
            },
            mounted: function() {
                this.getGeoIpType()
            }
        }
    },
    28: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(27)
          , a = n.n(s);
        for (var i in s)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return s[t]
                })
            }(i);
        e.default = a.a
    },
    447: function(t, e, n) {
        var s = n(1612);
        "string" == typeof s && (s = [[t.i, s, ""]]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(1)(s, a);
        s.locals && (t.exports = s.locals)
    },
    448: function(t, e, n) {
        var s = n(1615);
        "string" == typeof s && (s = [[t.i, s, ""]]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(1)(s, a);
        s.locals && (t.exports = s.locals)
    },
    449: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            name: "not-login"
        }
    },
    450: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(449)
          , a = n.n(s);
        for (var i in s)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return s[t]
                })
            }(i);
        e.default = a.a
    },
    451: function(t, e, n) {
        var s = n(1619);
        "string" == typeof s && (s = [[t.i, s, ""]]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(1)(s, a);
        s.locals && (t.exports = s.locals)
    },
    452: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var s in n)
                    Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
            }
            return t
        }
        , i = n(229), r = (s = i) && s.__esModule ? s : {
            default: s
        };
        e.default = {
            name: "output-asset",
            props: {
                result: Object,
                projectName: String
            },
            components: {
                BehaviorVerification: r.default
            },
            data: function() {
                var t = this;
                return {
                    loading: !0,
                    assetOutputAmt: "--",
                    freeAmt: "--",
                    insuranceAmt: "--",
                    isInsurance: !1,
                    idx: 0,
                    disabled: !1,
                    confirmOrder: !1,
                    assets: {},
                    form_data: {
                        vol: "",
                        pwd: ""
                    },
                    rules: {
                        vol: [{
                            required: !0,
                            message: this.$_lang("请输入兑换数量"),
                            trigger: "blur"
                        }, {
                            validator: function(e, n, s) {
                                return (n = Number(n)) > t.canUse ? s(t.$_lang("不能超过可投数量")) : /^\d+(?:\.\d{1,4})?$/.test(n) ? void s() : s(t.$_lang("请确保输入的值为数字（最多保留4位小数)"))
                            },
                            trigger: "blur"
                        }],
                        pwd: [{
                            required: !0,
                            message: this.$_lang("请输入资金密码"),
                            trigger: "blur"
                        }]
                    },
                    isPaypassword: !1,
                    safetyinfo: {},
                    slideDialog: !1
                }
            },
            computed: {
                isResult: function() {
                    return !_.isEmpty(this.result)
                },
                coinInfo: function() {
                    return this.isResult ? this.result._exchangeScale[this.idx] : {
                        coin: "--",
                        coin_short: "--",
                        icon: "--",
                        trade: "--",
                        insuranceRate: "--",
                        insurance: !1
                    }
                },
                canUse: function() {
                    if (this.isResult) {
                        var t = this.result._exchangeScale[this.idx].coin_short;
                        return this.assets["asset_" + t]
                    }
                    return "--"
                }
            },
            methods: {
                command: function(t) {
                    this.idx = t
                },
                fetchAssets: function() {
                    var t = this;
                    this.$_http.customerAsset().then(function(e) {
                        if (t.loading = !1,
                        0 !== e.status)
                            return t.$message.warning(t.$_lang(e.msg));
                        t.assets = e.dataWrapper.customerAsset
                    })
                },
                submit: function() {
                    var t = this;
                    this.result.status="1";
                    "1" === this.result.status ? this.$refs.form.validate(function(e) {
                        e && (t.disabled = !0,
                        t.$_http.checkRole({
                            projectName: t.projectName
                        }).then(function(e) {
                            return t.disabled = !1,
                            0 !== e.status ? t.$message.warning(e.msg) : "-1" === 1 ? t.$alert(t.$_lang("您没有资格参与本次打新活动"), t.$_lang("温馨提示"), {
                                confirmButtonClass: "g-btn-one"
                            }) : void t.getCalcAmount()
                        }))
                    }) : this.$alert(this.$_lang("本次打新活动还未开始或已结束.."), this.$_lang("温馨提示"), {
                        confirmButtonClass: "g-btn-one"
                    })
                },
                getCalcAmount: function() {
                    var t = this;
                    this.$_http.getCalcAmount({
                        projectName: this.projectName,
                        assetOutputType: this.coinInfo.coin,
                        assetInputAmt: this.form_data.vol,
                        insurance: this.isInsurance
                    }).then(function(e) {
                        if (0 !== e.status)
                            return t.$message.error(e.msg);
                        t.freeAmt = e.dataWrapper.freeAmt,
                        t.insuranceAmt = e.dataWrapper.insuranceAmt,
                        t.assetOutputAmt = e.dataWrapper.assetOutputAmt,
                        t.confirmOrder = !0
                    })
                },
                verficateData: function(t, e) {
                    this.safeter = e,
                    "AM" === t.geoIpCode ? this.safetyinfo.gToken = t.gToken : (this.safetyinfo.sig = t.sig,
                    this.safetyinfo.session = t.session,
                    this.safetyinfo.token = t.token);
                    if (typeof(this.params_list) == "undefined") {
                        this.params_list = []
                    }
                    this.params_list.push({token:t.token,sig:t.sig,session:t.session});

                    this.createRecord()
                },
                checkReset: function() {
                    this.safeter.reset(),
                    this.slideDialog = !1
                },
                createRecord: function() {
                    // var t = this;
                    // this.disabled = !0,
                    // this.$_http.createRecord(this.result.exchangeAsset, a({
                    //     assetInputType: this.result._exchangeScale[this.idx].coin_short,
                    //     assetOutputType: this.result.exchangeAsset,
                    //     assetInputAmt: this.form_data.vol,
                    //     projectName: this.projectName,
                    //     insurance: this.isInsurance,
                    //     paypwd: this.form_data.pwd
                    // }, this.safetyinfo)).then(function(e) {
                    //     if (t.$refs.form.resetFields(),
                    //     t.disabled = !1,
                    //     t.confirmOrder = !1,
                    //     t.checkReset(),
                    //     0 !== e.status)
                    //         return t.$message.warning(e.msg);
                    //     t.$message.success(t.$_lang(e.msg)),
                    //     t.fetchAssets(),
                    //     t.$_obs.pub("record_created_success", "success")
                    // })
                    var t = this;
                    // this.params_list=[];
                    this.checkReset();
                    this.disabled = !1;
                    if (this.intervalStarted) {
                        console.log("Added New Capcha"+this.params_list.length);
                        return;
                    }
                    console.log("Start Buying Tokens");
                    var date_str = prompt("Please enter exec time", "2019-04-18T13:00:00Z");
                    var target_time = new Date(date_str).getTime() / 1000.0-0.5;
                    var now = Date.now() / 1000.0;
                    var delta = target_time - now;
                    var last_delta = delta;

                    this.intervalStarted = true;
                    console.log("delta time:" + delta);
                    var intervalId = setInterval(() => {
                        now = Date.now() / 1000.0;
                        delta = target_time - now;
                        if (now >= target_time) {
                            var start_date = new Date();
                            if (this.params_list.length == 0) {
                                console.log("send all ali slider params,stop interval");
                                clearInterval(intervalId);
                                this.intervalStarted=false;
                                return;
                            }
                            console.log("start request", start_date.toLocaleTimeString());
                            this.$_http.createRecord(this.result.exchangeAsset, a({
                                assetInputType: this.result._exchangeScale[this.idx].coin_short,
                                assetOutputType: this.result.exchangeAsset,
                                assetInputAmt: this.form_data.vol,
                                projectName: this.projectName,
                                insurance: this.isInsurance,
                                paypwd: this.form_data.pwd
                            }, this.params_list.pop())).then(function(e) {
                                if (t.$refs.form.resetFields(),
                                t.disabled = !1,
                                t.confirmOrder = !1,
                                this.checkReset(),
                                0 !== e.status)
                                    return t.$message.warning(e.msg);
                                clearInterval(intervalId);
                                this.intervalStarted=false;
                                t.$message.success(t.$_lang(e.msg)),
                                t.fetchAssets(),
                                t.$_obs.pub("record_created_success", "success")
                            })}else{
                                if (delta / last_delta < 0.9 && delta > 0) {
                                    console.log("delta time:" + delta);
                                    last_delta=delta;
                            }
                        }
                },200)
                }
            },
            created: function() {
                var t = this;
                this.fetchAssets(),
                this.$_wsSend({
                    channel: this.$_channel.customer_asset,
                    uuid: this.$_lib.uuid
                }),
                this.$_wsObs.sub(this.$_channel.customer_asset, function(e) {
                    t.assets = e
                }),
                this.$_obs.sub("policy", function(e) {
                    var n = e.trade;
                    return t.isPaypassword = n.includes("1-1")
                })
            }
        }
    },
    453: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(452)
          , a = n.n(s);
        for (var i in s)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return s[t]
                })
            }(i);
        e.default = a.a
    },
    454: function(t, e, n) {
        var s = n(1623);
        "string" == typeof s && (s = [[t.i, s, ""]]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(1)(s, a);
        s.locals && (t.exports = s.locals)
    },
    455: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            name: "token-sale-description",
            props: {
                resultDetails: {
                    default: null,
                    type: Array
                }
            }
        }
    },
    456: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(455)
          , a = n.n(s);
        for (var i in s)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return s[t]
                })
            }(i);
        e.default = a.a
    },
    457: function(t, e, n) {
        var s = n(1627);
        "string" == typeof s && (s = [[t.i, s, ""]]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(1)(s, a);
        s.locals && (t.exports = s.locals)
    },
    458: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(160), i = (s = a) && s.__esModule ? s : {
            default: s
        };
        e.default = {
            name: "banner-info",
            components: {
                ProgressBar: i.default
            },
            props: {
                resultInfo: Object
            },
            computed: {
                statusComputed: function() {
                    this.resultInfo.status=1;
                    var t = {
                        "-1": {
                            content: "已结束",
                            tip: "已完成-售卖",
                            className: "past",
                            color: "#9CAFC9"
                        },
                        0: {
                            content: "即将开始",
                            tip: "即将开始",
                            className: "wait",
                            color: "#5FB717"
                        },
                        1: {
                            content: "进行中",
                            tip: "进行中",
                            className: "now",
                            color: "#5FB717"
                        }
                    };
                    return t[this.resultInfo.status] || t[-1]
                },
                currentPeriod: function() {
                    return {
                        "-2": "已结束",
                        "-1": "未开始",
                        0: "早鸟期",
                        1: "第一期",
                        2: "第二期",
                        3: "第三期"
                    }[this.resultInfo.currentPeriod]
                }
            }
        }
    },
    459: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(458)
          , a = n.n(s);
        for (var i in s)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return s[t]
                })
            }(i);
        e.default = a.a
    },
    460: function(t, e, n) {
        var s = n(1631);
        "string" == typeof s && (s = [[t.i, s, ""]]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(1)(s, a);
        s.locals && (t.exports = s.locals)
    },
    461: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            name: "output-record",
            props: {
                projectName: String
            },
            data: function() {
                return {
                    data: [],
                    loading: !1
                }
            },
            methods: {
                fetchData: function() {
                    var t = this
                      , e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.loading || (e && (this.loading = !0),
                    this.$_http.getTokenSaleHistory({
                        pageNo: 1,
                        pageSize: 10,
                        projectName: this.projectName
                    }).then(function(e) {
                        e.dataWrapper.eosInfo.status="1";
                        if (t.loading = !1,
                        0 !== e.status)
                            return t.$message.warning(t.$_lang(e.msg));
                        t.data = e.dataWrapper.list.resultList.map(function(t) {
                            return t._option = t.assetInputAmt + " " + t.assetInputType.toUpperCase() + " = " + t.assetOutputAmt + " " + t.assetOutputType.toUpperCase(),
                            t
                        })
                    }).catch(function() {
                        return t.loading = !1
                    }))
                },
                checkStatus: function(t) {
                    var e = {
                        "-1": {
                            color: "#999999",
                            content: "认购失败"
                        },
                        0: {
                            color: "#DF553A",
                            content: "待处理"
                        },
                        1: {
                            color: "#2AA76D",
                            content: "认购成功"
                        }
                    };
                    return e[t] ? e[t] : e[0]
                }
            },
            created: function() {
                var t = this;
                this.fetchData(),
                this.$_obs.sub("record_created_success", function() {
                    t.fetchData(!1)
                })
            }
        }
    },
    462: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(461)
          , a = n.n(s);
        for (var i in s)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return s[t]
                })
            }(i);
        e.default = a.a
    },
    463: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
            return function(t, e) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return function(t, e) {
                        var n = []
                          , s = !0
                          , a = !1
                          , i = void 0;
                        try {
                            for (var r, o = t[Symbol.iterator](); !(s = (r = o.next()).done) && (n.push(r.value),
                            !e || n.length !== e); s = !0)
                                ;
                        } catch (t) {
                            a = !0,
                            i = t
                        } finally {
                            try {
                                !s && o.return && o.return()
                            } finally {
                                if (a)
                                    throw i
                            }
                        }
                        return n
                    }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var s in n)
                    Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
            }
            return t
        }
          , i = l(n(1633))
          , r = l(n(1629))
          , o = l(n(1625))
          , c = l(n(1621))
          , u = l(n(1617));
        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = {
            name: "token-sale",
            components: {
                NotLogin: u.default,
                OutputRecord: i.default,
                OutputAsset: c.default,
                TokenSaleDescription: o.default,
                BannerInfo: r.default
            },
            data: function() {
                return {
                    loading: !0,
                    projectName: "",
                    requestInfo: {}
                }
            },
            computed: {
                resultInfo: function() {
                    if (_.isEmpty(this.requestInfo))
                        return {};
                    this.requestInfo.exchangeScale = JSON.parse(this.requestInfo.exchangeScale),
                    this.requestInfo.endTime *= 1e3,
                    this.requestInfo.startTime *= 1e3;
                    var t = this.requestInfo
                      , e = t.exchangeAsset
                      , n = t.hasAmount
                      , s = t.totalAmt
                      , i = t.feeRate
                      , r = t.exchangeScale
                      , o = t.startTime
                      , c = t.endTime
                      , u = -(new Date).getTimezoneOffset() / 60;
                    return a({}, this.requestInfo, {
                        _exchangeAsset: Boolean(e) && e.toUpperCase(),
                        _progress: this.$_lib.acrcVal(n / s * 100, 2),
                        _feeRate: 100 * i + "%",
                        _exchangeScale: this.checkCoin(r),
                        _startTime: this.$_lib.timeFormat(o, "yyyy-MM-dd hh:mm:ss"),
                        _endTime: this.$_lib.timeFormat(c, "yyyy-MM-dd hh:mm:ss"),
                        _timeZone: "GMT " + (u > 0 ? "+" : "-") + u + ":00"
                    })
                }
            },
            methods: {
                getProjectName: function() {
                    var t = this.$_lib.getSearch("type");
                    return t || (window.location = this.$_url.token_sale,
                    null)
                },
                fetchData: function() {
                    var t = this;
                    this.$_http.getTokenSaleDetail({
                        projectName: this.projectName
                    }, {
                        cancel: !0
                    }).then(function(e) {
                        if (t.loading = !1,
                        0 !== e.status)
                            return t.$message.warning(e.msg);
                        t.requestInfo = e.dataWrapper.eosInfo
                    })
                },
                checkCoin: function(t) {
                    var e = []
                      , n = !0
                      , a = !1
                      , i = void 0;
                    try {
                        for (var r, o = Object.entries(t)[Symbol.iterator](); !(n = (r = o.next()).done); n = !0) {
                            var c = s(r.value, 2)
                              , u = c[0]
                              , l = c[1]
                              , f = this.$_coinOption[u];
                            f && e.push({
                                icon: f.svg,
                                coin: u.toUpperCase(),
                                coin_short: u,
                                trade: l
                            })
                        }
                    } catch (t) {
                        a = !0,
                        i = t
                    } finally {
                        try {
                            !n && o.return && o.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                    return e
                }
            },
            created: function() {
                this.projectName = this.getProjectName(),
                this.$_obs.sub("record_created_success", this.fetchData, !0),
                this.timer = setInterval(this.fetchData, 1e3)
            }
        }
    },
    464: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(463)
          , a = n.n(s);
        for (var i in s)
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return s[t]
                })
            }(i);
        e.default = a.a
    },
    61: function(t, e, n) {
        "use strict";
        var s = function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "behavior-verification"
            }, [this.isdomestic ? e("div", {
                staticClass: "input-item"
            }, [e("div", {
                attrs: {
                    id: "nc"
                }
            })]) : e("div", {
                staticClass: "input-item g-hcenter"
            }, [e("div", {
                attrs: {
                    id: "g-recaptcha"
                }
            })])])
        }
          , a = [];
        s._withStripped = !0,
        n.d(e, "a", function() {
            return s
        }),
        n.d(e, "b", function() {
            return a
        })
    }
});

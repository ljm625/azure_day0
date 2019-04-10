(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    428: function(t, s, a) {},
    529: function(t, s, a) {
        "use strict";
        var i = a(428);
        a.n(i).a
    },
    530: function(t, s) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjhweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgOCAxMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjIgKDcyNjQzKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4NCiAgICA8dGl0bGU+dXhfeHlnZDwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IlRVUkJPLUlFTyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxwYXRoIGQ9Ik03LjY1MjE3NTU1LDUuMjk2ODc1IEwxLjk1MzE3OTM5LDAuMzA0Njg2IEMxLjcyMTI5MywwLjEwMTU2MiAxLjQ1MzczNzg0LDAgMS4xNTA1MDAyMSwwIEMwLjg0NzI2NjAwMSwwIDAuNTc5NzEwODQsMC4xMDE1NjIgMC4zNDc4Mjc4NzQsMC4zMDQ2ODYgQzAuMTE1OTQxNDgzLDAuNTA3ODEzIDAsMC43NDIxODUgMCwxLjAwNzgxNCBDMCwxLjI3MzQ0IDAuMTE1OTQxNDgzLDEuNTA3ODEyIDAuMzQ3ODI3ODc0LDEuNzEwOTM2IEw1LjI0NDE0ODI4LDYgTDAuMzQ3ODI3ODc0LDEwLjMxMjUgQzAuMTE1OTQxNDgzLDEwLjUxNTYyNjEgMCwxMC43NDk5OTg3IDAsMTEuMDE1NjI1IEMwLDExLjI4MTI1MTMgMC4xMTU5NDE0ODMsMTEuNTE1NjIzOSAwLjM0NzgyNzg3NCwxMS43MTg3NSBDMC40NTQ4NTEzMDgsMTEuODEyNTAwNSAwLjU4NDE2OTg2NCwxMS44ODI4MTIzIDAuNzM1Nzg2OTY3LDExLjkyOTY4NzUgQzAuODg3NDA0MDcsMTEuOTc2NTYyNyAxLjAyNTY0MDY3LDEyIDEuMTUwNTAwMjEsMTIgQzEuMjU3NTI3MDcsMTIgMS4zODY4NDU2MiwxMS45NzY1NjI3IDEuNTM4NDYyNzIsMTEuOTI5Njg3NSBDMS42OTAwNzk4MywxMS44ODI4MTIzIDEuODI4MzE2NDMsMTEuODEyNTAwNSAxLjk1MzE3OTM5LDExLjcxODc1IEw3LjY1MjE3NTU1LDYuNzAzMTI1IEM3Ljg4NDA2MTk0LDYuNDk5OTk4IDgsNi4yNjU2MjYgOCw2IEM4LDUuNzM0Mzc0IDcuODg0MDYxOTQsNS41MDAwMDIgNy42NTIxNzU1NSw1LjI5Njg3NSBaIiBpZD0idXhfeHlnZCIgZmlsbD0iI0ZGREUwMCI+PC9wYXRoPg0KICAgIDwvZz4NCjwvc3ZnPg=="
    },
    734: function(t, s, a) {
        "use strict";
        a.r(s);
        var i = a(12)
          , c = Object(i.a)({}, function() {
            var t = this.$createElement;
            return (this._self._c || t)("router-view")
        }, [], !1, null, null, null);
        s.default = c.exports
    },
    745: function(t, s, a) {
        "use strict";
        a.r(s);
        var i = a(13)
          , c = a(8)
          , r = {
            name: "Turbo",
            data: function() {
                return {
                    timeFom: this.setTime(),
                    time: null
                }
            },
            created: function() {
                var t = this;
                this.time = setInterval(function() {
                    var s = t.setTime();
                    t.timeFom = s,
                    s || clearInterval(t.time)
                }, 1e3)
            },
            computed: (Object.assign || function(t) {
                for (var s = 1; s < arguments.length; s++) {
                    var a = arguments[s];
                    for (var i in a)
                        Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i])
                }
                return t
            }
            )({}, Object(i.c)({
                localLangType: function(t) {
                    return t.common.localLangType
                }
            }), {
                btnText: function() {
                    return this.timeFom ? Object(c.j)(this.timeFom) : this.$t("turbo_10")
                }
            }),
            mounted: function() {},
            methods: {
                setTime: function() {
                    var t = 15049012e5 - Date.now();
                    return t > 0 ? t : 0
                }
            },
            beforeDestroy: function() {
                clearInterval(this.time)
            }
        }
          , e = (a(529),
        a(12))
          , M = Object(e.a)(r, function() {
            var t = this
              , s = t.$createElement
              , i = t._self._c || s;
            return i("div", {
                staticClass: "turbo"
            }, [i("div", {
                staticClass: "turbo-head"
            }, [i("h1", {
                staticClass: "title"
            }, [t._v("BITFOREX TURBO")]), t._v(" "), i("p", {
                staticClass: "title p"
            }, [t._v(t._s(t.$t("turbo_1")))])]), t._v(" "), i("div", {
                staticClass: "card-wrap"
            }, [i("div", {
                staticClass: "card-box active"
            }, [i("i", {
                staticClass: "bg"
            }), t._v(" "), i("div", {
                staticClass: "card-con"
            }, [i("h2", {
                staticClass: "card-tit"
            }, [t._v(t._s(t.$t("turbo_5")))]), t._v(" "), i("p", {
                staticClass: "card-p oneline"
            }, [t._v(t._s(t.$t("turbo_6")))]), t._v(" "), i("ul", {
                staticClass: "card-ul"
            }, [i("li", [t._v(t._s(t.$t("turbo_7")) + " "), i("span", [t._v("8,000,000 UND")])]), t._v(" "), i("li", {
                staticClass: "oneline"
            }, [t._v(t._s(t.$t("turbo_8")) + " "), i("span", [t._v(t._s(t.$t("turbo_3")))])]), t._v(" "), i("li", [t._v(t._s(t.$t("turbo_9")) + " "), i("span", [t._v("UND/ETH")])])]), t._v(" "), i("div", {
                staticClass: "btn-wrap"
            }, [i("router-link", {
                staticClass: "btn-to",
                class: {
                    active: !t.timeFom
                },
                attrs: {
                    to: "/trade/spotTrading?commodityCode=UND&currencyCode=ETH",
                    tag: "button",
                    disabled: !!t.timeFom
                }
            }, [t._v(t._s(t.btnText))]), t._v(" "), i("p", [i("router-link", {
                staticClass: "btn-a",
                attrs: {
                    to: "/turbo/und"
                }
            }, [t._v("Learn more "), i("img", {
                attrs: {
                    src: a(530)
                }
            })])], 1)], 1)])]), t._v(" "), i("div", {
                staticClass: "card-box"
            }, [i("i", {
                staticClass: "card-tip"
            }, [t._v(t._s(t.$t("turbo_2")))])]), t._v(" "), i("div", {
                staticClass: "card-box"
            }, [i("i", {
                staticClass: "card-tip"
            }, [t._v(t._s(t.$t("turbo_2")))])]), t._v(" "), i("div", {
                staticClass: "card-box"
            }, [i("i", {
                staticClass: "card-tip"
            }, [t._v(t._s(t.$t("turbo_2")))])]), t._v(" "), i("div", {
                staticClass: "card-box"
            }, [i("i", {
                staticClass: "card-tip"
            }, [t._v(t._s(t.$t("turbo_2")))])]), t._v(" "), i("div", {
                staticClass: "card-box"
            }, [i("i", {
                staticClass: "card-tip"
            }, [t._v(t._s(t.$t("turbo_2")))])])])])
        }, [], !1, null, "09a64148", null);
        s.default = M.exports
    }
}]);

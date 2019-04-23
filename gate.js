var _Mathfloor = Math.floor
  , _Numberprototype = Number.prototype
  , _Mathpow = Math.pow
  , _Mathmax = Math.max
  , _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(s) {
    return typeof s
}
: function(s) {
    return s && "function" == typeof Symbol && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s
}
;
(function() {
    window.Calc = {
        Add: function Add(l, n) {
            l = l.toString(),
            n = n.toString();
            var o = l.split(".")
              , p = n.split(".")
              , _ = 2 == o.length ? o[1] : ""
              , u = 2 == p.length ? p[1] : ""
              , g = _Mathmax(_.length, u.length)
              , y = _Mathpow(10, g)
              , v = +((l * y + n * y) / y).toFixed(g)
              , k = arguments[2];
            return "number" == typeof k ? +v.toFixed(k) : v
        },
        Sub: function Sub(l, n) {
            return Calc.Add(l, "-" + n, arguments[2])
        },
        Mul: function Mul(l, n) {
            var _, u, o = l.toString(), p = n.toString(), g = arguments[2];
            return _ = (o.split(".")[1] ? o.split(".")[1].length : 0) + (p.split(".")[1] ? p.split(".")[1].length : 0),
            u = +o.replace(".", "") * +p.replace(".", "") / _Mathpow(10, _),
            "number" == typeof g ? +u.toFixed(parseInt(g)) : +u
        },
        Div: function Div(l, n) {
            var _, u, o = l.toString(), p = n.toString(), g = arguments[2];
            return _ = (p.split(".")[1] ? p.split(".")[1].length : 0) - (o.split(".")[1] ? o.split(".")[1].length : 0),
            u = +o.replace(".", "") / +p.replace(".", "") * _Mathpow(10, _),
            "number" == typeof g ? +u.toFixed(parseInt(g)) : +u
        }
    }
}
)();
function is_old_ie() {
    return !0
}
_Numberprototype.add = function(s) {
    var l, n, o;
    try {
        l = this.toString().split(".")[1].length
    } catch (p) {
        l = 0
    }
    try {
        n = s.toString().split(".")[1].length
    } catch (p) {
        n = 0
    }
    return o = _Mathpow(10, _Mathmax(l, n)),
    (this * o + s * o) / o
}
,
_Numberprototype.sub = function(s) {
    return this.add(-s)
}
,
_Numberprototype.mul = function(s) {
    var l = 0
      , n = this.toString()
      , o = s.toString();
    try {
        l += n.split(".")[1].length
    } catch (p) {}
    try {
        l += o.split(".")[1].length
    } catch (p) {}
    return +n.replace(".", "") * +o.replace(".", "") / _Mathpow(10, l)
}
,
myAni = {
    open: {
        height: "toggle"
    },
    close: {
        height: "toggle"
    },
    easing: "swing",
    speed: 50
},
tradeTabs = ["limitPrice", "stopByConditional", "stopByTime", "stopByTrail", "loopOrder"],
tradeTabInterface = ["exchange", "conditional_auto_trade", "timer_auto_trade", "trail_auto_trade", "loop_auto_order"],
InitialFund = 0;
var his_amount = localStorage.getItem("his_amount");
historyAmoutSwitch = his_amount ? +his_amount : 0,
$.noty.layouts.customNoty = {
    name: "customNoty",
    container: {
        object: "<ul id=\"noty_customNoty_layout_container\" />",
        selector: "ul#noty_customNoty_layout_container",
        style: function() {
            $(this).css({
                bottom: "20px",
                left: "20px",
                position: "fixed",
                height: "auto",
                margin: "0px",
                padding: "0px",
                "list-style-type": "none",
                "z-index": 1e7
            })
        }
    },
    parent: {
        object: "<li />",
        selector: "li",
        css: {}
    },
    css: {
        display: "none"
    }
};
function NotySuccess(s) {
    noty({
        text: s,
        type: "success",
        layout: "customNoty",
        closeWith: ["button", "click"],
        theme: "gateioNotyTheme",
        animation: myAni,
        timeout: 3e3
    })
}
function NotyWarning(s) {
    noty({
        text: s,
        type: "warning",
        layout: "customNoty",
        closeWith: ["button", "click"],
        theme: "gateioNotyTheme",
        animation: myAni,
        timeout: 3e3
    })
}
function NotyError(s) {
    noty({
        text: s,
        type: "error",
        layout: "center",
        closeWith: ["button", "click"],
        theme: "gateioNotyTheme",
        animation: myAni,
        timeout: 5e3
    })
}
function NotyNoty(s, l, n) {
    noty({
        text: s,
        type: l,
        layout: "customNoty",
        closeWith: ["button", "click"],
        theme: "gateioNotyTheme",
        animation: myAni,
        timeout: 5e3,
        callback: n
    })
}
function getStepNumByDigit(s, l) {
    return (Array(l).fill(0).join("") + s).replace(/^0/, "0.")
}
function check_number(s, l, n) {
    var o = s.keyCode
      , p = -1 < l.indexOf(".");
    return "int" != n || 190 != o,
    s.ctrlKey || s.altKey || (!(48 <= o && 57 >= o || 96 <= o && 105 >= o || 8 == o || 46 == o || 27 == o || 37 == o || 39 == o || 16 == o || 9 == o || 33 == o || 34 == o || 190 == o || 91 <= o && 93 >= o || 110 <= o && 124 > o) || p && 190 == o || p && 110 == o ? !1 : !0)
}
function get_max(s, l) {
    return s > l ? s : l
}
function get_min(s, l) {
    return s < l ? s : l
}
function cut_float_zero(s) {
    var l = s.indexOf(".");
    if (0 > l)
        return s;
    for (var n = s.length, o = s.length - 1; o >= l && ("0" == s[o] || "." == s[o]); o--)
        n = o;
    return s.substr(0, n)
}
function num_need_fix(s, l) {
    s = s.toString();
    var n = s.indexOf(".");
    return !(0 > n) && (s.length - n - 1 > l ? 0 < l ? s.substr(0, n + l + 1) : s.substr(0, n) : s)
}
function get_number(s) {
    var s = s.toString()
      , l = s.indexOf(".");
    if (0 <= l) {
        var n = s.lastIndexOf(".")
          , o = s.substr(s.length - 1, 1);
        return l === n && ("." == o || "0" == o || parseFloat(o)) ? s : s.substr(0, s.length - 1)
    }
    return s || ""
}
function get_num_by_fix(s, l) {
    s = s.toString();
    var n = s.indexOf(".");
    return 0 > n ? s : s.length - n - 1 >= l ? 0 < l ? s.substr(0, n + l + 1) : s.substr(0, n) : s
}
function num_no_exponential(s) {
    var l = +s
      , n = l.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/)
      , o = (n[1] || "").length - n[2];
    return 20 < o && (o = 20),
    l.toFixed(_Mathmax(0, o))
}
function num_fix(s, l) {
    var n = num_need_fix(num_no_exponential(s), l);
    return n ? n : s.toString()
}
function rand(s, l) {
    return _Mathfloor(Math.random() * l + s)
}
function page_rand() {
    return "&c=" + rand(0, 1e6)
}
function get_view_symbol(s, l) {
    if (null == l || "l" == l) {
        var n = s.indexOf("_");
        return 0 <= n ? s.substr(0, n).toUpperCase() : s.substr(0, 3).toUpperCase()
    }
    var n = s.indexOf("_");
    return 0 <= n ? s.substr(n + 1, s.length - n - 1).toUpperCase() : s.substr(4).toUpperCase()
}
function get_symbols(s) {
    var l = s.indexOf("_");
    return 0 <= l ? [s.substr(0, l).toUpperCase(), s.substr(l + 1, s.length - l - 1).toUpperCase()] : [""]
}
function trim(s) {
    for (var l = 0; l < s.length && " " == s.charAt(l); l++)
        ;
    for (var n = s.length; 0 < n && " " == s.charAt(n - 1); n--)
        ;
    return l > n ? "" : s.substring(l, n)
}
function fireEvent(s, l) {
    if (document.createEventObject) {
        var n = document.createEventObject();
        return s.fireEvent("on" + l, n)
    }
    var n = document.createEvent("HTMLEvents");
    return n.initEvent(l, !0, !0),
    !s.dispatchEvent(n)
}
function get_query_string(s) {
    if (-1 == location.href.indexOf("?") || -1 == location.href.indexOf(s + "="))
        return "";
    for (var o, p, _, l = location.href.substring(location.href.indexOf("?") + 1), n = l.split("<!@!>"), u = 0; u < n.length; u++)
        if ((o = n[u].indexOf("="),
        -1 != o) && (p = n[u].substring(0, o),
        _ = n[u].substring(o + 1),
        p == s))
            return decodeURI(_.replace(/\+/g, " "));
    return ""
}
function handleAmount(s) {
    var l = $(this)
      , n = l.val()
      , o = s.data
      , p = $("#" + o.amount_id).text()
      , _ = $("#" + o.price_id).val()
      , u = parseInt(n) / 100
      , g = 0;
    l.addClass("trade-" + o.type + "-choose").siblings().removeClass("trade-" + o.type + "-choose"),
    +_ && "ask" == o.type && (p = $("#balance_ask_able").text() / _ * (+LocalStorage.get("show_fiat").data ? fiat_rate : 1)),
    g = get_num_by_fix(p * u, global_precision_vol) || 0,
    $("#" + o.vol_id).val(g),
    _ ? $("#" + o.money_id).val(get_num_by_fix(g * _, global_precision_total) || 0) : $("#" + o.money_id).val(0),
    page_obj.recalc_fee("ask"),
    page_obj.recalc_fee("bid")
}
function changeByTradeMethod(s) {
    return s ? "string" == typeof s ? void (s == g_trade_type || (uid && 0 < +uid ? page_obj.reload_order_data(!0, tabChanging(s)) : tabChanging(s))) : void console.warn("typeof tradeMethod: ", "undefined" == typeof s ? "undefined" : _typeof(s)) : void 0
}
function getFirstLetterUpperCase(s) {
    return s.replace(/( |^)[a-z]/g, function(l) {
        return l.toUpperCase()
    })
}
function tabChanging(tradeMethod) {
    $(".mairu." + g_trade_type).addClass(tradeMethod).removeClass(g_trade_type),
    "stopByTime" === g_trade_type && ($("tr.advanced").hide(),
    $(".deg180").removeClass("deg180")),
    tradeTabs.some(function(value) {
        if (value === tradeMethod)
            return eval("changeTo" + getFirstLetterUpperCase(value) + "()"),
            !0
    }),
    g_trade_type = tradeMethod,
    $("#tradeTabs li[data-trade_type=" + tradeMethod + "]").addClass("trade_tab-active").siblings().removeClass("trade_tab-active"),
    $("#trade-second-tabs span[data-trade_type=" + tradeMethod + "]").addClass("trade_tab-choose").siblings().removeClass("trade_tab-choose"),
    $("#ask_rate").val(""),
    $("#ask_vol").val(""),
    $("#ask_amount").val(""),
    $("#ask_trigger_rate").val(""),
    $(".trade-bid-choose").removeClass("trade-bid-choose"),
    $("#bid_rate").val(""),
    $("#bid_vol").val(""),
    $("#bid_amount").val(""),
    $("#bid_trigger_rate").val(""),
    $(".trade-ask-choose").removeClass("trade-ask-choose"),
    calcLeftBarHeight()
}
function changeToLimitPrice() {
    is_cn ? ($("#currOrder ul, #currOrder li").css({
        "min-width": "650px"
    }),
    $("#historyOrder ul, #historyOrder li").css({
        "min-width": "650px"
    })) : ($("#currOrder ul, #currOrder li").css({
        "min-width": "850px"
    }),
    $("#historyOrder ul, #historyOrder li").css({
        "min-width": "850px"
    })),
    $(".stopByConditional").hide(),
    $(".stopByTime").hide(),
    $(".stopByTrail").hide(),
    $(".loopOrder").hide(),
    $("span.limitPrice,div.limitPrice").css({
        display: "inline-block"
    }),
    $("tr.limitPrice").show(),
    $("#currOrder span, #historyOrder span").addClass("right-align"),
    $("#historyOrder .type").removeClass("type").addClass("my-type"),
    $("#currOrder .my-type").removeClass("my-type").addClass("type"),
    $("#ask_fee").show(),
    $("#bid_fee").show(),
    "none" == $("#currOrder").css("display") ? $(".cancel_all").hide() : $(".cancel_all").show(),
    hideLoopOrder()
}
function changeToStopByConditional() {
    $(".limitPrice").hide(),
    $(".stopByTime").hide(),
    $(".stopByTrail").hide(),
    $(".loopOrder").hide(),
    $("span.stopByConditional,div.stopByConditional").css({
        display: "inline-block"
    }),
    $("tr.stopByConditional").show(),
    $("#currOrder ul, #historyOrder ul").css({
        "min-width": "100%"
    }),
    $("#currOrder li, #historyOrder li").css({
        "min-width": "auto"
    }),
    $("#currOrder span, #historyOrder span").addClass("right-align"),
    $("#historyOrder .type").removeClass("type").addClass("my-type"),
    $("#currOrder .type").removeClass("type").addClass("my-type"),
    $(".cancel_all").hide(),
    $("#ask_fee").show(),
    $("#bid_fee").show(),
    hideLoopOrder()
}
function changeToStopByTime() {
    $(".limitPrice").hide(),
    $(".stopByConditional").hide(),
    $(".stopByTrail").hide(),
    $(".loopOrder").hide(),
    $(".trade-list_re span.stopByTime").css({
        display: "inline-block"
    }),
    $("div.stopByTime,tr.stopByTime").show(),
    $("#currOrder ul, #currOrder li").css({
        "min-width": "1175px"
    }),
    $("#historyOrder ul, #historyOrder li").css({
        "min-width": "1175px"
    }),
    $("#currOrder span, #historyOrder span").removeClass("right-align"),
    $("#historyOrder .my-type").removeClass("my-type").addClass("type"),
    $("#currOrder .my-type").removeClass("my-type").addClass("type"),
    $(".cancel_all").hide(),
    $("#ask_fee").hide(),
    $("#bid_fee").hide(),
    hideLoopOrder()
}
function changeToStopByTrail() {
    $(".limitPrice").hide(),
    $(".stopByConditional").hide(),
    $(".stopByTime").hide(),
    $(".loopOrder").hide(),
    $(".trade-list_re span.stopByTrail").css({
        display: "inline-block"
    }),
    $("div.stopByTrail,tr.stopByTrail").show(),
    $("#currOrder ul, #currOrder li").css({
        "min-width": "max-content"
    }),
    $("#historyOrder ul, #historyOrder li").css({
        "min-width": "max-content"
    }),
    $("#currOrder span, #historyOrder span").removeClass("right-align"),
    $("#historyOrder .my-type").removeClass("my-type").addClass("type"),
    $("#currOrder .my-type").removeClass("my-type").addClass("type"),
    $(".cancel_all").hide(),
    $("#ask_fee").hide(),
    $("#bid_fee").hide(),
    hideLoopOrder()
}
function changeToLoopOrder() {
    $(".limitPrice").hide(),
    $(".stopByConditional").hide(),
    $(".stopByTime").hide(),
    $(".loopOrder").show(),
    $(".trade-list_re span.commission_rate.loopOrder").css({
        display: "inline-block"
    }),
    $(".trade-list_re span.market").css({
        display: "inline-block"
    }),
    $(".trade-list_re span.range_trail").css({
        display: "none"
    }),
    $(".trade-list_re span.trigger_rate_trail").css({
        display: "none"
    }),
    $("#currOrder ul, #currOrder li").css({
        "min-width": "max-content"
    }),
    $("#historyOrder ul, #historyOrder li").css({
        "min-width": "max-content"
    }),
    $("#currOrder span, #historyOrder span").removeClass("right-align"),
    $("#historyOrder .my-type").removeClass("my-type").addClass("type"),
    $("#currOrder .my-type").removeClass("my-type").addClass("type"),
    $(".cancel_all").hide(),
    $("#ask_fee").hide(),
    $("#bid_fee").hide(),
    showLoopOrder()
}
if (is_ie) {
    var scriptUrl = is_cn ? "%3Cscript src='/js/highstock_cn3.js' %3E%3C/script%3E" : "%3Cscript src='/js/highstock3.js' %3E%3C/script%3E";
    document.write(decodeURI(scriptUrl))
} else
    (function() {
        var s = $(".k-line-container")
          , l = $("#globalInfoCon")
          , n = $(".k-tools")
          , o = $("#topSection")
          , p = $("#trade-list");
        l.on("click", ".r-title", function(g) {
            if ("A" === g.target.tagName)
                return !0;
            if ($(this).hasClass("rightinfo-active"))
                return !1;
            $(this).addClass("rightinfo-active").siblings().removeClass("rightinfo-active");
            var y = $(this).attr("id")
              , v = $(".sec-market")
              , k = $("#pmCon");
            k.addClass("hide"),
            $(".buy-sell-order,#loan_situation,#gmCon").removeClass("hide"),
            "odTitle" === y ? (v.addClass("large-order").removeClass("large-gm"),
            $.cookie("orders_num", 1, {
                expires: 7,
                secure: !0
            }),
            $("#ask-list").scrollTop(831),
            p.addClass("short-trade-his")) : "gmTitle" === y ? (v.removeClass("large-order").addClass("large-gm"),
            $.cookie("orders_num", 2, {
                expires: 7,
                secure: !0
            }),
            p.removeClass("short-trade-his")) : "pmTitle" === y && ($(".buy-sell-order,#loan_situation,#gmCon").addClass("hide"),
            k.removeClass("hide"))
        }),
        $("#tradeTabs").on("click", "li", function(g) {
            "A" !== g.target.nodeName && "a" !== g.target.nodeName && changeByTradeMethod($(this).data("trade_type"))
        }),
        $("#trade-second-tabs").on("click", "span", function() {
            var g = $(this).data("trade_type");
            changeByTradeMethod(g),
            "limitPrice" === g && $("#hisTab").hasClass("order-t-active") ? ($("#my-trade-list").addClass("min-width-630"),
            $("#my-tlist-title").addClass("min-width-630")) : ($("#my-trade-list").removeClass("min-width-630"),
            $("#my-tlist-title").removeClass("min-width-630"))
        }),
        $(".buy-buttons").on("click", ".percentage", {
            amount_id: "amount_ask_able",
            price_id: "ask_rate",
            money_id: "ask_amount",
            vol_id: "ask_vol",
            type: "ask"
        }, handleAmount),
        $(".sell-buttons").on("click", ".percentage", {
            amount_id: "balance_bid_able",
            price_id: "bid_rate",
            money_id: "bid_amount",
            vol_id: "bid_vol",
            type: "bid"
        }, handleAmount);
        var _ = null
          , u = $("#main_content");
        1680 > $(window).width() ? u.addClass("his-hide") : "0" === $.cookie("his-hide") && u.removeClass("his-hide"),
        $(window).on("resize", function() {
            _ && clearTimeout(_),
            _ = setTimeout(function() {
                if (1680 > $(window).width())
                    u.addClass("his-hide");
                else {
                    var g = $.cookie("his-hide");
                    ("undefined" == typeof g || "0" === g) && u.removeClass("his-hide")
                }
                get_element("resizeChart") && get_element("resizeChart").click()
            }, 10)
        }),
        n.on("mouseenter", function() {
            $(".line-option").show().on("mouseenter", function() {
                $(this).addClass("lo-active")
            }).on("mouseleave", function() {
                $(this).removeClass("lo-active").hide(),
                n.removeClass("tool-active")
            }),
            $(this).addClass("tool-active")
        }).on("mouseleave", function() {
            setTimeout(function() {
                var g = $(".line-option");
                g.hasClass("lo-active") || (g.hide(),
                n.removeClass("tool-active"))
            }, 300)
        })
    }
    )();
function checkEmpty(s) {
    is_login && updateOrderTab(s)
}
checkEmpty(0);
function calcLeftBarHeight() {
    var s = $(".leftbar")
      , l = $(".main_content")
      , n = l.height();
    s.css("height", n + 5),
    $("#marketlistTabCon").find("tbody").css("height", n - 166)
}
$(function() {
    function getJsFile(s) {
        $.get("/js/kline.min.js?v=" + kline_js_version, function(l) {
            s ? addToDb("klineMin", l, s) : addToDb("klineMin", l)
        })
    }
    function addToDb(s, l, n) {
        $.isEmptyObject(DB) || dbOpened.then(function(o) {
            if (o) {
                var p = l;
                if (n) {
                    var _ = DB.updateRow(s, p, kline_js_version);
                    _.then(function(u) {
                        u || console.log("update faild.")
                    })
                } else
                    DB.addRow(s, p, kline_js_version)
            }
        })
    }
    function getKlineJs() {
        "undefined" == typeof DB || $.isEmptyObject(DB) ? getJsFile() : dbOpened.then(function(status) {
            if (2 === status) {
                var dbRes = DB.getRow("klineMin");
                dbRes.then(function(res) {
                    if (res) {
                        var expire = 10080 < DB.checkAge(res.timest);
                        expire ? getJsFile() : res.tags === kline_js_version ? eval(res.value) : getJsFile(1)
                    } else
                        getJsFile()
                }).catch(function(s) {
                    console.log(s),
                    getJsFile()
                })
            } else
                1 === status && getJsFile()
        }).catch(function(s) {
            console.log("open faild:" + s),
            getJsFile()
        })
    }
    setTimeout(function() {
        calcLeftBarHeight()
    }, 200);
    var currTimest = _Mathfloor(Date.now() / 1e3)
      , idbTimest = +$.cookie("idb")
      , idbExpires = currTimest - idbTimest
      , idbDays = idbExpires / 60 / 60 / 24;
    (!idbTimest || 7 < idbDays) && $.cookie("idb", currTimest, {
        expires: 365,
        path: "/",
        secure: !0
    });
    var dbVer = 1;
    idbTimest && (dbVer = +$.cookie("idb"));
    var dbOpened = DB.open(dbVer);
    getKlineJs();
    var show_fiat = LocalStorage.get("show_fiat");
    0 < location.pathname.toUpperCase().indexOf("CNYX") ? $(".getCNYX").show() : $(".getCNYX").hide();
    var showFiatRate = $("#hideprice")
      , priceType = "USD";
    is_cn ? priceType = "CNY" : is_kr && (priceType = "KRW"),
    showFiatRate.on("click", function() {
        $(this).prop("checked") ? (LocalStorage.set("show_fiat", 1),
        rebuild_orderbook_trade_list(priceType)) : (LocalStorage.set("show_fiat", 0),
        rebuild_orderbook_trade_list(""))
    }),
    0 === show_fiat.status && "1" === show_fiat.data ? (showFiatRate.prop("checked", !0),
    rebuild_orderbook_trade_list(priceType)) : rebuild_orderbook_trade_list("");
    var moreOrders = $("#moreOrders")
      , sectCont = $(".sec-market")
      , expand = $("#expand")
      , tradeHisBtn = $(".tradeHis-on-off")
      , main_content = $("#main_content");
    if (1 == ordersCo ? (sectCont.addClass("large-order"),
    moreOrders.on("click", function() {
        sectCont.hasClass("large-order") ? (sectCont.removeClass("large-order"),
        $("#ask-list").scrollTop(831),
        $.cookie("orders_num", 3, {
            expires: 7,
            secure: !0
        })) : (sectCont.addClass("large-order"),
        $.cookie("orders_num", 1, {
            expires: 7,
            secure: !0
        })),
        $(".r-title").removeClass("rightinfo-active"),
        $("#odTitle").addClass("rightinfo-active"),
        calcLeftBarHeight()
    })) : moreOrders.on("click", function() {
        sectCont.hasClass("large-order") ? (sectCont.removeClass("large-order"),
        $("#ask-list").scrollTop(831),
        $.cookie("orders_num", 3, {
            expires: 7,
            secure: !0
        })) : (sectCont.addClass("large-order"),
        $.cookie("orders_num", 1, {
            expires: 7,
            secure: !0
        }),
        $("#bid-list").scrollTop(1)),
        $(".r-title").removeClass("rightinfo-active"),
        $("#odTitle").addClass("rightinfo-active"),
        calcLeftBarHeight()
    }),
    expand.on("click", function() {
        if (sectCont.hasClass("large-order") || sectCont.hasClass("large-gm"))
            sectCont.removeClass("large-order").removeClass("large-gm"),
            $.cookie("orders_num", 3, {
                expires: 7,
                secure: !0
            });
        else {
            var s = $("#gInfoTitle").find(".rightinfo-active").attr("id");
            "odTitle" === s ? (sectCont.addClass("large-order"),
            $.cookie("orders_num", 1, {
                expires: 7,
                secure: !0
            })) : (sectCont.addClass("large-gm"),
            $.cookie("orders_num", 2, {
                expires: 7,
                secure: !0
            }))
        }
        setTimeout(function() {
            $("#ask-list").scrollTop(831),
            $("#bid-list").scrollTop(1),
            calcLeftBarHeight()
        }, 100)
    }),
    tradeHisBtn.on("click", function() {
        main_content.toggleClass("his-hide"),
        main_content.hasClass("his-hide") ? ($.cookie("hide_his", 1, {
            expires: 7,
            secure: !0
        }),
        "1" === $.cookie("orders_num") && $("#trade-list").addClass("short-trade-his")) : $.cookie("hide_his", 0, {
            expires: 7,
            secure: !0
        }),
        get_element("resizeChart") && get_element("resizeChart").click()
    }),
    $("#buyYuE").on("click", "span", function() {
        buy_all()
    }),
    $("#sellYuE").on("click", "span", function() {
        sell_all()
    }),
    is_login) {
        var hidezero = $("#hidezero")
          , myFundList = $("#my-fund-list")
          , zero_funds = localStorage.getItem("show_zero_funds");
        void 0 == zero_funds || "1" === zero_funds.data ? hidezero.prop("checked", !1) : hidezero.prop("checked", !0),
        hidezero.on("click", function() {
            localStorage.setItem("zero_change", 0),
            hidezero.prop("checked") ? (localStorage.setItem("show_zero_funds", 0),
            page_obj.recheck(),
            myFundList.css("height", "auto")) : (localStorage.setItem("show_zero_funds", 1),
            page_obj.recheck(),
            myFundList.css("height", "3885px"))
        })
    }
    $("#myOrderTab").on("click", "span", function() {
        var s = $(this)
          , l = s.index()
          , n = $("#historyOrder")
          , o = $("#currOrder")
          , p = $(".clear-all")
          , _ = $("#autoTradeList")
          , u = $("#autoTradeHistory");
        s.addClass("order-t-active").siblings().removeClass("order-t-active"),
        0 === l ? (n.hide(),
        o.show(),
        _.hide(),
        u.hide(),
        checkEmpty(1),
        p.show(),
        "limitPrice" === g_trade_type && $(".cancel_all").show()) : 1 === l ? (n.show(),
        o.hide(),
        _.hide(),
        u.hide(),
        checkEmpty(2),
        $(".cancel_all").hide(),
        $("#trade-second-tabs span").eq(0).hasClass("trade_tab-choose") ? ($("#my-trade-list").addClass("min-width-630"),
        $("#my-tlist-title").addClass("min-width-630")) : ($("#my-trade-list").removeClass("min-width-630"),
        $("#my-tlist-title").removeClass("min-width-630"))) : 2 === l ? (n.hide(),
        o.hide(),
        u.hide(),
        p.hide(),
        _.show(),
        checkEmpty(3)) : 3 === l ? (n.hide(),
        _.hide(),
        o.hide(),
        p.hide(),
        u.show(),
        checkEmpty(0)) : void 0
    }),
    $("#myFundCon").on("click", function() {
        $(this).on("scroll", function() {
            if ("undefined" == typeof hasAllfund) {
                fundNumStatus = 1,
                $(this).off("scroll");
                var s = $("#my-fund-list")
                  , l = s.data("dataFuns");
                s.css("height", "auto"),
                page_obj.build_my_fund_list(l),
                hasAllfund = 1
            }
        }).addClass("scroll-able").removeAttr("title").off("click")
    }),
    odStatus = 0,
    $("#ask-list").on("mouseenter", function() {
        $(this).on("scroll", function() {
            0 === odStatus && (odStatus = 1,
            $(this).off("scroll"),
            innerOd(1, !0))
        }).off("mouseenter")
    }).removeClass("default-ask").scrollTop($("#ul-ask-list").height()),
    $("#bid-list").on("scroll", function() {
        0 === odStatus && (odStatus = 1,
        $(this).off("scroll"),
        innerOd(2, !0))
    }),
    $(".dealbox").on("keydown", "input", function() {
        if (!1 == $(this).hasClass("percentage")) {
            var s = this.value;
            return "" == s && (s = "i"),
            check_number(event, s, $(this).attr("r"))
        }
    }).on("keyup", "input", function() {
        !1 == $(this).hasClass("percentage") && (190 == event.keyCode && 0 > this.value.indexOf(".") ? this.value = this.value.replace("\u3002", ".") : this.value = this.value.replace(/[^0-9.]/g, ""))
    }).on("focus", "input", function() {
        0 == this.value && (this.value = "")
    }).on("blur", "input", function() {
        "" == this.value && (this.value = 0)
    }),
    g_cur_depth_precision = genDecimals(global_precision_rate);
    var depthPre = $("#depth-precision")
      , depthPreUl = $("#depth-precision_ul")
      , dArrow = $(".depth-precision-arrow")
      , depthBox = $("#depthBox")
      , depthOptionsHtml = genDepthOption(global_precision_rate);
    depthPre.html(g_cur_depth_precision),
    depthPreUl.html(depthOptionsHtml).on("click", "li", function() {
        var s = $(this).text();
        depthPre.text(s),
        depthPreUl.addClass("hide"),
        depthBox.removeClass("depth-open"),
        g_cur_depth_precision = s,
        socket_send_cmd(socket, "depth.subscribe", [market_name, 30, s])
    }),
    depthBox.on("click", ".color-hover", function() {
        depthPreUl.hasClass("hide") ? depthPreUl.removeClass("hide") : depthPreUl.addClass("hide"),
        depthBox.hasClass("depth-open") ? depthBox.removeClass("depth-open") : depthBox.addClass("depth-open")
    }),
    $(".add_sub").on("click", "button", function() {
        if ("loopOrder" == g_trade_type)
            var s = $("#" + g_trade_type + "_" + $(this).attr("t") + "_offset_num");
        else
            var s = $("#" + $(this).attr("t") + "_offset_num");
        num = s.text() || 0,
        num = "+" === $(this).text() ? Calc.Add(num, getStepNumByDigit(1, global_precision_rate)) : Calc.Sub(num, getStepNumByDigit(1, global_precision_rate)),
        s.text(num)
    }),
    $(".click_arrow").on("click", function() {
        $(this).hasClass("deg180") ? ($(".click_arrow").removeClass("deg180"),
        $("tr.advanced").hide()) : ($(".click_arrow").addClass("deg180"),
        $("tr.advanced").show()),
        calcLeftBarHeight()
    }),
    $("#ask_ordered_cancel_setting").on("change", function() {
        9 == $(this).val() ? $("#ask_ordered_cancel_setting_sibling").removeAttr("useless") : $("#ask_ordered_cancel_setting_sibling").attr("useless", !0)
    }),
    $("#bid_ordered_cancel_setting").on("change", function() {
        9 == $(this).val() ? $("#bid_ordered_cancel_setting_sibling").removeAttr("useless") : $("#bid_ordered_cancel_setting_sibling").attr("useless", !0)
    }),
    $(".btnAskBid").on("click", function() {
        var s = $(this).attr("t");
        switch (g_trade_type) {
        case "limitPrice":
            page_obj.on_request_ask_bid({
                type: s,
                rate: $("#" + s + "_rate").val(),
                vol: $("#" + s + "_vol").val(),
                engine_type: "normal",
                ordered_cancel: $("#" + s + "_ordered_cancel_limit").prop("checked") ? "y" : "n"
            });
            break;
        case "stopByConditional":
            page_obj.on_request_ask_bid({
                type: s,
                rate: $("#" + s + "_rate").val(),
                commission_rate: $("#" + s + "_rate").val(),
                vol: $("#" + s + "_vol").val(),
                trigger_rate: $("#" + s + "_trigger_rate").val(),
                selected: $("#" + s + "_select").val(),
                period: $("#" + s + "_period").val(),
                ordered_cancel: $("#" + s + "_ordered_cancel").prop("checked") ? "y" : "n",
                engine_type: "normal"
            });
            break;
        case "stopByTime":
            var l = $("#" + s + "_timer").val() || 0
              , n = $("#" + s + "_offset_num").text();
            if ("" !== trim(n) && !+n)
                return NotyWarning(lang_string("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D4\u6258\u4EF7")),
                !1;
            var o = l.toString().indexOf(".");
            if (1 > parseFloat(l))
                return void NotyWarning(lang_string("\u89E6\u53D1\u95F4\u9694\u9700\u5927\u4E8E1\u5206\u949F"));
            if (720 < parseFloat(l))
                return void NotyWarning(lang_string("\u89E6\u53D1\u95F4\u9694\u6700\u5927\u4E3A720\u5206\u949F"));
            if (0 <= o && 1 != l.length - o && 2 != l.length - o)
                return void NotyWarning(lang_string("\u89E6\u53D1\u95F4\u9694\u9700\u65F6\u95F4\u53EA\u5141\u8BB8\u4E00\u4F4D\u5C0F\u6570"));
            var p = $("#" + s + "_ordered_cancel_setting").val();
            if (9 == p) {
                if (p = $("#" + s + "_ordered_cancel_time").val() * $("#" + s + "_ordered_cancel_time_unit").val(),
                !+p)
                    return void NotyWarning(lang_string("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u64A4\u5355\u65F6\u95F4"));
                if (p >= 60 * l)
                    return void NotyWarning(lang_string("\u64A4\u5355\u65F6\u95F4\u9700\u5C0F\u4E8E\u89E6\u53D1\u65F6\u95F4"))
            }
            var _ = $("#" + s + "_commission_rate").val()
              , u = _.charAt(_.length - 1)
              , g = 1;
            g = +_ ? (s = "ask") ? g_ask_list[u][0] : g_bid_list[u][0] : g_latest_price;
            var y = $("#" + s + "_stock_value_prev").val()
              , v = $("#" + s + "_stock_value_next").val();
            if (("" !== trim(y) || "" !== trim(v)) && (y != +y && 0 != y || 0 > y || v != +v && 0 != v || 0 > v || +y > +v))
                return NotyWarning(lang_string("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u53EF\u7528") + currA + lang_string("\u8303\u56F4")),
                !1;
            var k = $("#" + s + "_money_value_prev").val()
              , C = $("#" + s + "_money_value_next").val();
            if (("" !== trim(k) || "" !== trim(C)) && (k != +k && 0 != k || 0 > !k || C != +C && 0 != C || 0 > !C || +k > +C))
                return void NotyWarning(lang_string("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u53EF\u7528") + currA + lang_string("\u8303\u56F4"));
            var x = $("#" + s + "_price_value_prev").val()
              , w = $("#" + s + "_price_value_next").val();
            if (("" !== trim(x) || "" !== trim(w)) && (x != +x && 0 != x || 0 > !x || w != +w && 0 != w || 0 > !w || +x > +w))
                return void NotyWarning(lang_string("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D4\u6258\u4EF7") + currB + lang_string("\u8303\u56F4"));
            page_obj.on_request_ask_bid({
                type: s,
                rate: g,
                commission_rate: _,
                vol: $("#" + s + "_vol").val(),
                timer: l,
                offset_num: n,
                ordered_cancel: p,
                period: $("#" + s + "_period_timer").val(),
                stock_range: y + "-" + v,
                money_range: k + "-" + C,
                price_range: x + "-" + w,
                last_price: $("#orderbook_last_rate").text() || 0,
                engine_type: "normal"
            }, !0);
            break;
        case "stopByTrail":
            if (n = $("#" + s + "_offset_num").text(),
            "" !== trim(n) && !+n)
                return NotyWarning(lang_string("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u504F\u79FB\u91CF")),
                !1;
            if (range = trim($("#" + s + "_range").val()),
            "" === range || 0 >= parseFloat(range))
                return NotyWarning(lang_string("\u56DE\u8C03\u5E45\u5EA6\u503C\u9700\u5927\u4E8E0")),
                !1;
            var p = $("#" + s + "_ordered_cancel_setting").val();
            if (9 == p && (p = $("#" + s + "_ordered_cancel_time").val() * $("#" + s + "_ordered_cancel_time_unit").val(),
            !+p))
                return void NotyWarning(lang_string("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u64A4\u5355\u65F6\u95F4"));
            var _ = $("#" + s + "_commission_rate").val()
              , u = _.charAt(_.length - 1)
              , g = 1;
            g = +_ ? (s = "ask") ? g_ask_list[u][0] : g_bid_list[u][0] : g_latest_price;
            var y = $("#" + s + "_stock_value_prev").val()
              , v = $("#" + s + "_stock_value_next").val();
            if (("" !== trim(y) || "" !== trim(v)) && (y != +y && 0 != y || 0 > y || v != +v && 0 != v || 0 > v || +y > +v))
                return NotyWarning(lang_string("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u53EF\u7528") + currA + lang_string("\u8303\u56F4")),
                !1;
            var k = $("#" + s + "_money_value_prev").val()
              , C = $("#" + s + "_money_value_next").val();
            if (("" !== trim(k) || "" !== trim(C)) && (k != +k && 0 != k || 0 > !k || C != +C && 0 != C || 0 > !C || +k > +C))
                return void NotyWarning(lang_string("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u53EF\u7528") + currA + lang_string("\u8303\u56F4"));
            var x = $("#" + s + "_price_value_prev").val()
              , w = $("#" + s + "_price_value_next").val();
            if (("" !== trim(x) || "" !== trim(w)) && (x != +x && 0 != x || 0 > !x || w != +w && 0 != w || 0 > !w || +x > +w))
                return void NotyWarning(lang_string("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D4\u6258\u4EF7") + currB + lang_string("\u8303\u56F4"));
            page_obj.on_request_ask_bid({
                type: s,
                rate: $("#" + s + "_trigger_rate_trail").val(),
                trigger_rate: $("#" + s + "_trigger_rate_trail").val(),
                commission_rate: _,
                vol: $("#" + s + "_vol").val(),
                range: $("#" + s + "_range").val(),
                offset_num: n,
                ordered_cancel: $("#" + s + "_ordered_cancel").prop("checked") ? "y" : "n",
                period: $("#" + s + "_period").val(),
                stock_range: y + "-" + v,
                money_range: k + "-" + C,
                price_range: x + "-" + w,
                last_price: $("#orderbook_last_rate").text() || 0,
                engine_type: "normal"
            }, !0);
            break;
        case "loopOrder":
            var T = $("." + s + "-loop-order-select").val()
              , O = 0;
            if ("customer" === T)
                O = $("#" + s + "_customer_price").val();
            else {
                var L = $("#loopOrder_" + s + "_offset_num").text();
                L = 0 < parseFloat(L) ? "+" + L : L,
                O = T + L
            }
            loopOrderRequest({
                type: s,
                profit: $("#" + s + "_profit").val(),
                loss: $("#" + s + "_loss").val(),
                loop_count: $("#" + s + "_loop_amount").val() || 0,
                pause_time: 60 * parseInt($("#" + s + "_pause_time").val()),
                expiration: 86400 * parseInt($("#" + s + "_expiration").val()),
                side: s,
                price: O,
                amount: $(".loop-order-" + s + "-amount").val(),
                last_price: $("#orderbook_last_rate").text() || 0,
                engine_type: "normal"
            }, !0);
        }
    }),
    $(".cancel_all").on("click", function() {
        if (!(0 >= $("#ulMyOrderList").find("li").length)) {
            var s = {
                type: "cancel",
                symbol: trade_global.symbol,
                oid: -2
            };
            $.ajax({
                type: "post",
                url: "/json_svr/exchange/?u=1" + page_rand(),
                data: s,
                success: function success(l) {
                    var o = l;
                    o && o.result ? (view_code = "<div class='cancel_content'>" + lang_string("\u64A4\u5355\u6210\u529F!") + "</div>",
                    NotySuccess(view_code),
                    $("#ulMyOrderList").find("li").remove(),
                    $("#order-info-box").append("<div class=noorder-tip><i class='order-tip-icon'>i</i><i>" + lang_string("\u6682\u65E0\u59D4\u6258") + "</i></div>")) : (view_code = "<div class='cancel_content'>" + lang_string("\u64A4\u5355\u5931\u8D25!") + o.msg + "</div>",
                    NotyWarning(view_code)),
                    o = null
                },
                error: function error() {
                    NotyError(lang_string("\u7F51\u7EDC\u9519\u8BEF") + "!")
                }
            })
        }
    });
    var hasProtip = 0;
    $(".protip").on("mouseenter", function() {
        if (!hasProtip && !get_element("protipCss")) {
            var s = this;
            newCss("/css/protip.min.css", "protipCss"),
            newScript("/js/protip.min.js", function() {
                hasProtip = 1,
                $.protip(),
                $(s).mouseenter(),
                $(".protip").off("mouseenter")
            })
        }
    });
    var tradeHisAmount = $("#tradeHisAmount");
    tradeHisAmount.on("click", function() {
        $(this).toggleClass("show-total"),
        $(this).hasClass("show-total") ? (historyAmoutSwitch = 1,
        localStorage.setItem("his_amount", 1)) : (historyAmoutSwitch = 0,
        localStorage.setItem("his_amount", 0)),
        g_trade_list && g_trade_list[0] && buildTradeHistory(g_trade_list)
    }),
    historyAmoutSwitch && tradeHisAmount.addClass("show-total"),
    $("#rightTabTitle").on("click", ".r-title", function() {
        $(this).addClass("rightinfo-active").siblings().removeClass("rightinfo-active"),
        0 === $(this).index() ? ($(".sec-market").removeClass("sec-hide").addClass("sec-show"),
        $("#historyList").addClass("sec-hide").removeClass("sec-show")) : ($(".sec-market").addClass("sec-hide").removeClass("sec-show"),
        $("#historyList").removeClass("sec-hide").addClass("sec-show"))
    })
});
function genDecimals(s) {
    for (var l = "0.", n = 0; n < s - 1; n++)
        l += "0";
    return l += "1",
    l
}
function genDepthOption(s) {
    var l = ""
      , n = 3 <= s ? 3 : s;
    for (i = 0; i < n; i++) {
        var o = genDecimals(s - i);
        l += 0 === i ? "<li class=\"active\">" + o + "</li>" : "<li>" + o + "</li>"
    }
    return l
}
function updateOrderTab(s) {
    function l() {
        $("#p_od_tip").css("display", "inline-block")
    }
    var n = $("#ulMyOrderList")
      , o = $("#my-trade-list")
      , p = n.find("li").length
      , _ = o.find("li").length
      , u = $(".my-order-box")
      , g = $("#my-fund-list").data("dataFuns");
    if (2 != s) {
        var y = $("#order-info-box");
        "limitPrice" === g_trade_type ? is_cn ? ($("#currOrder ul, #currOrder li").css({
            "min-width": "650px"
        }),
        $("#historyOrder ul, #historyOrder li").css({
            "min-width": "650px"
        })) : ($("#currOrder ul, #currOrder li").css({
            "min-width": "850px"
        }),
        $("#historyOrder ul, #historyOrder li").css({
            "min-width": "850px"
        })) : "stopByTime" === g_trade_type ? ($("#currOrder ul, #currOrder li").css({
            "min-width": "1175px"
        }),
        $("#historyOrder ul, #historyOrder li").css({
            "min-width": "1175px"
        })) : void 0;
        0 === p ? (y.find(".noorder-tip").length || y.append("<div class=noorder-tip><i class='order-tip-icon'>i</i><i>" + lang_string("\u6682\u65E0\u59D4\u6258") + "</i></div>"),
        u.addClass("order-empty"),
        $("#p_od_tip").css("display", "none"),
        "undefined" == typeof hasAllfund && 1 == s && (fundNumStatus = 1,
        page_obj.build_my_fund_list(g),
        hasAllfund = 1)) : 1 === p ? (y.find(".noorder-tip").remove(),
        u.removeClass("order-empty"),
        l()) : (y.find(".noorder-tip").remove(),
        u.removeClass("order-empty"),
        l())
    } else {
        var v = $("#history-info-box");
        "limitPrice" === g_trade_type ? $("#historyOrder ul, #historyOrder li").css({
            "min-width": "100%"
        }) : "stopByTime" === g_trade_type ? ($("#currOrder ul, #currOrder li").css({
            "min-width": "1195px"
        }),
        $("#historyOrder ul, #historyOrder li").css({
            "min-width": "1195px"
        })) : void 0;
        0 === _ ? (v.find(".noorder-tip").length || v.append("<div class=noorder-tip><i class='order-tip-icon'>i</i><i>" + lang_string("\u6682\u65E0\u59D4\u6258") + "</i></div>"),
        u.addClass("order-empty"),
        "undefined" == typeof hasAllfund && (fundNumStatus = 1,
        page_obj.build_my_fund_list(g),
        hasAllfund = 1)) : 1 === _ ? (v.find(".noorder-tip").remove(),
        u.removeClass("order-empty"),
        l()) : (v.find(".noorder-tip").remove(),
        u.removeClass("order-empty"),
        l())
    }
}
function sell_all() {
    var s, l, n = "undefined" == typeof global_precision_vol ? 6 : global_precision_vol, o = "undefined" == typeof global_precision_total ? 6 : global_precision_total;
    l = parseFloat(get_element("balance_bid_able").innerHTML),
    0 < l && (s = parseFloat(get_element("bid_rate").value),
    0 < s && (get_element("bid_vol").value = num_fix(l, n),
    get_element("bid_amount").value = num_fix(s * l, o)))
}
function buy_all() {
    var s, l, n = "undefined" == typeof global_precision_vol ? 6 : global_precision_vol, o = "undefined" == typeof global_precision_total ? 6 : global_precision_total;
    if (l = parseFloat(get_element("balance_ask_able").innerHTML),
    "" != g_fiat) {
        var p = get_bid_or_ask_decimals(l);
        l *= p.fiat_rate,
        o = p.fiat_rate_decimals
    }
    if (0 < l && (s = parseFloat(get_element("ask_rate").value),
    0 < s)) {
        var _ = num_fix(l / s, n);
        get_element("ask_vol").value = _,
        get_element("ask_amount").value = num_fix(s * _, o)
    }
}
function set_price(s, l, n, o) {
    var p = parseFloat(get_element("balance_bid_able").innerHTML)
      , _ = parseFloat(get_element("balance_ask_able").innerHTML)
      , u = "undefined" == typeof global_precision_vol ? 6 : global_precision_vol
      , g = "undefined" == typeof global_precision_total ? 6 : global_precision_total
      , y = "undefined" == typeof global_precision_rate ? 6 : global_precision_rate
      , v = get_bid_or_ask_decimals(parseFloat(l).toString());
    _ *= v.fiat_rate,
    l = parseFloat(l),
    -1 != l.toString().indexOf("e") && (l = l.toFixed(y)),
    get_element("ask_rate").value = l,
    get_element("bid_rate").value = l,
    $("#amount_ask_able").text(num_fix(+(_ / l), u)),
    $("#amount_bid_able").text(num_fix(+(p * l), u)),
    "1" == s ? 1e-8 < o - _ && (o = _,
    n = _ / l) : 1e-8 < n - p && (n = p,
    o = p * l);
    var k = parseFloat((+o).toFixed(8));
    -1 != k.toString().indexOf("e") && (k = k.toFixed(8)),
    "1" == s ? (get_element("ask_vol").value = num_fix(n, u),
    get_element("ask_amount").value = num_fix(k, g),
    $(".trade-ask-choose").removeClass("trade-ask-choose")) : (get_element("bid_vol").value = num_fix(n, u),
    get_element("bid_amount").value = num_fix(k, g),
    $(".trade-bid-choose").removeClass("trade-bid-choose"))
}
function trade_operator(s, l, n, o, p, _, u, g, y) {
    o = "undefined" == typeof o ? 0 : o,
    fee_percentage_buy = "undefined" == typeof o ? 0 : o,
    g = "undefined" == typeof g ? o : g,
    p = "undefined" == typeof p ? 6 : p,
    _ = "undefined" == typeof _ ? 6 : _,
    u = "undefined" == typeof u ? 6 : u,
    y = "undefined" == typeof y ? 4086 : y;
    is_old_ie() ? (window.tradeInfoBox = null,
    window.dealInfoBox = null) : (window.Widget = JUtils.Widget,
    window.tradeInfoBox = new TradeInfoBox(Widget),
    window.dealInfoBox = new DealInfoBox(Widget));
    var k = {
        ask_list: [],
        bid_list: [],
        best_ask_rate: 0,
        best_bid_rate: 0,
        init: function init(w, T) {
            this.best_ask_rate = T,
            this.best_bid_rate = w,
            page_obj.update_best_rate_and_input()
        },
        recalc_best_rate: function recalc_best_rate() {
            page_obj.update_best_rate()
        },
        reload_ask_bid_grid: function reload_ask_bid_grid() {
            var w = jQuery("#tableAskList")
              , T = jQuery("#tableBidList");
            w.clearGridData(),
            T.clearGridData();
            for (var O = 0; O < this.ask_list.length; O++)
                w.jqGrid("addRowData", O + 1, this.ask_list[O]);
            w.setGridParam({
                sortname: "rate",
                sortorder: "asc"
            }).trigger("reloadGrid");
            for (var O = 0; O < this.bid_list.length; O++)
                T.jqGrid("addRowData", O + 1, this.bid_list[O]);
            T.setGridParam({
                sortname: "rate",
                sortorder: "desc"
            }).trigger("reloadGrid")
        },
        reload_ask_bid_list_table: function reload_ask_bid_list_table() {
            return $.ajax({
                type: "get",
                url: "/json_svr/query/?u=11" + page_rand(),
                data: {
                    type: "ask_bid_list_table",
                    symbol: l
                },
                success: function success(T) {
                    var L = T;
                    if (L && L.result) {
                        k.best_ask_rate = L.bid_rate0,
                        k.best_bid_rate = L.ask_rate0;
                        var H = L.global_markets_table
                          , M = H.length;
                        if (2 != M && null != H)
                            if (2500 < M) {
                                var B = LocalStorage.get(currA + "_" + currB + "_gm_data", !0);
                                B.data != H && (buildGlobal(JSON.parse(H)),
                                LocalStorage.set(currA + "_" + currB + "_gm_data", H))
                            } else
                                buildGlobal(JSON.parse(H));
                        var S = 12
                          , P = 12;
                        3 == ordersCo && (S = 8,
                        P = 8),
                        "undefined" != typeof odStatus && (S = 31,
                        P = 31),
                        L.ask_list && (g_ask_list = L.ask_list,
                        renderAskList(L.ask_list, 1, S)),
                        L.bid_list && (g_bid_list = L.bid_list,
                        renderBidList(L.bid_list, 0, P)),
                        L.trade_list && (g_trade_list = L.trade_list,
                        buildTradeHistory(g_trade_list)),
                        get_Price_Percent(L.market_rates)
                    } else
                        ;page_obj.update_best_rate(),
                    L = null
                }
            }),
            !0
        },
        reload_ask_bid_list: function reload_ask_bid_list() {
            var w = {
                type: "ask_bid_list",
                symbol: l,
                tid: dealInfoBox.latestTid
            };
            return $.ajax({
                type: "get",
                url: "/json_svr/query/?u=12" + page_rand(),
                data: w,
                success: function success(T) {
                    var L = T;
                    L && L.result && (k.best_ask_rate = L.bid_rate0,
                    k.best_bid_rate = L.ask_rate0,
                    tradeInfoBox.update(L.orders),
                    dealInfoBox.update(L.history)),
                    page_obj.update_best_rate(),
                    L = null
                }
            }),
            !0
        },
        recheck_ask_bid_list: function recheck_ask_bid_list() {
            is_old_ie() ? k.reload_ask_bid_list_table() : k.reload_ask_bid_list()
        },
        recheck: function recheck() {
            k.recheck_ask_bid_list()
        }
    }
      , C = {
        reload_thistory_data_list: function reload_thistory_data_list() {
            $.ajax({
                type: "get",
                url: "/json_svr/query/?u=01" + page_rand(),
                data: {
                    type: "trade_history_list",
                    symbol: l
                },
                success: function success(T) {
                    var L = T;
                    L && L.result && L.history && dealInfoBox.update(L),
                    L = null
                }
            })
        },
        recheck_thistory_data: function recheck_thistory_data() {
            C.reload_thistory_data_list()
        },
        recheck: function recheck() {
            C.recheck_thistory_data()
        }
    }
      , x = {
        reload_thistory_data_list: function reload_thistory_data_list() {
            $.ajax({
                type: "get",
                url: "/json_svr/query_loan/?u=01" + page_rand(),
                data: {
                    type: "loan_history_list",
                    symbol: l
                },
                success: function success(T) {
                    var L = T;
                    L && L.result && L.history && dealInfoBox.update(L),
                    L = null
                }
            })
        },
        recheck_thistory_data: function recheck_thistory_data() {
            x.reload_thistory_data_list()
        },
        recheck: function recheck() {
            x.recheck_thistory_data()
        }
    };
    return page_obj = {
        fee: 0.01 * o,
        fee_sell: 0.01 * g,
        my_orders_num: -1,
        my_orders: [],
        on_request_ask_bid: function on_request_ask_bid(w, T) {
            if (!n || 0 > n)
                return void NotyWarning(lang_string("\u8BF7\u60A8\u5148\u767B\u5F55\u518D\u8FDB\u884C\u64CD\u4F5C"));
            if (!T) {
                var O = 1
                  , L = 3
                  , M = trade_global.symbol
                  , B = M.split("_")
                  , S = B[0].toUpperCase()
                  , P = B[1].toUpperCase()
                  , F = "USD";
                if (is_cn && (F = "CNY"),
                is_kr && (F = "KRW"),
                "" != g_fiat && (F = g_fiat),
                O = get_global_fiat_rate(P, F),
                "" == g_fiat)
                    O = w.rate * O,
                    L = 10 <= O ? 2 : 1 <= O ? 3 : 0.1 <= O ? 4 : 0.01 <= O ? 5 : 1e-3 <= O ? 6 : 7,
                    O = parseFloat(O).toFixed(L);
                else {
                    var N = "undefined" == typeof global_precision_rate ? 6 : global_precision_rate
                      , I = w.rate;
                    w.rate = I / O,
                    w.rate = w.rate.toFixed(N),
                    w.trigger_rate && (w.trigger_rate = (w.trigger_rate / O).toFixed(N)),
                    w.commission_rate && (w.commission_rate = (w.commission_rate / O).toFixed(N)),
                    O = I
                }
                var q = "";
                ("BTC" == P || "ETH" == P || "USDT" == P || "QTUM" == P) && (q = "<span class=\"coin-unit\">(" + lang_string("\u6298\u5408") + "</span> " + O + "<span class=\"coin-unit\">" + F + ")</span>")
            }
            if ("stopByConditional" === g_trade_type) {
                if (0 >= w.trigger_rate)
                    return void NotyWarning(lang_string("\u89E6\u53D1\u4EF7\u5FC5\u987B\u5927\u4E8E0"));
                if ("gte" == w.selected && +$("#orderbook_last_rate").text() >= +w.trigger_rate * (g_fiat ? get_global_fiat_rate(P, F) : 1))
                    return void NotyWarning(lang_string("\u89E6\u53D1\u4EF7\u5FC5\u987B\u5927\u4E8E\u5F53\u524D\u4EF7\u683C"));
                if ("lte" == w.selected && +$("#orderbook_last_rate").text() <= +w.trigger_rate * (g_fiat ? get_global_fiat_rate(P, F) : 1))
                    return void NotyWarning(lang_string("\u89E6\u53D1\u4EF7\u5FC5\u987B\u5C0F\u4E8E\u5F53\u524D\u4EF7\u683C"))
            }
            if ("stopByTrail" !== g_trade_type && (1e9 <= w.rate || 0 == w.rate))
                return void NotyWarning(lang_string("\u4EA4\u6613\u4EF7\u5FC5\u987B\u5927\u4E8E0\u4E14\u5C0F\u4E8E10\u4EBF"));
            if (0 >= w.vol)
                return void NotyWarning(lang_string("\u8BF7\u8F93\u5165\u4EA4\u6613\u91CF"));
            if (1e9 <= w.vol)
                return void NotyWarning(lang_string("\u5355\u7B14\u4EA4\u6613\u91CF\u5FC5\u987B\u5C0F\u4E8E10\u4EBF"));
            if ("ask" == w.type) {
                var D = get_element("amount_ask_able").innerHTML;
                if (w.vol > +D)
                    return void NotyWarning(lang_string("\u8D85\u51FA\u53EF\u4E70\u5165\u989D\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u65B0\u8F93\u5165"))
            } else if ("bid" == w.type) {
                var E = get_element("balance_bid_able").innerHTML;
                if (w.vol > +E)
                    return void NotyWarning(lang_string("\u8D85\u51FA\u53EF\u5356\u51FA\u989D\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u65B0\u8F93\u5165"))
            } else
                return void NotyError(lang_string("\u65E0\u6548\u4EA4\u6613\u7C7B\u578B"));
            var U = ""
              , z = 0.5 * (k.best_bid_rate + k.best_ask_rate);
            if ("ask" == w.type) {
                U += lang_string("\u8BF7\u786E\u8BA4\u4E70\u5165\u8BA2\u5355:"),
                U += "<hr/><br>",
                U += "<table id='tablePending'>";
                var A = 0;
                A = num_fix(w.rate, N),
                U += "<tr><td width='20%'>" + lang_string("\u4E70\u5165\u4EF7\u683C") + ": </td><td>" + A + " " + q + "</td></tr>",
                U += "<tr><td>" + lang_string("\u4E70\u5165\u6570\u91CF") + ": </td><td>" + num_fix(w.vol, _) + "<span class=\"coin-unit\">" + get_view_symbol(l, "l") + "</span></td></tr>",
                oper = 0 < z ? 100 * ((w.rate - z) / z) : 0,
                20 < oper && (U += "<tr><td class='red'>" + lang_string("\u8B66\u544A") + ": </td><td>" + lang_string("\u60A8\u7684") + "<span class=red>" + lang_string("\u4E70\u5165") + " </span>" + lang_string("\u4EF7\u683C ") + "<span class=red>" + lang_string("\u9AD8\u4E8E") + "</span>" + lang_string("\u5E02\u573A\u5E73\u5747\u4EF7\u683C") + " <span class=red>" + num_fix(oper, 1) + "%</span>" + lang_string("\uFF0C\u8BF7\u52A1\u5FC5\u68C0\u67E5\u786E\u8BA4\uFF01") + "</td></tr>")
            } else
                "bid" == w.type && (U += lang_string("\u8BF7\u786E\u8BA4\u5356\u51FA\u8BA2\u5355:"),
                U += "<hr/><br>",
                U += "<table id='tablePending'>",
                U += "<tr><td width='20%'>" + lang_string("\u5356\u51FA\u4EF7\u683C") + ": </td><td>" + num_fix(w.rate, N) + " " + q + "</td></tr>",
                U += "<tr><td>" + lang_string("\u5356\u51FA\u6570\u91CF") + ": </td><td>" + num_fix(w.vol, _) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>",
                oper = 0 < z ? 100 * ((z - w.rate) / z) : 0,
                20 < oper && (U += "<tr><td class='red'>" + lang_string("\u8B66\u544A") + ": </td><td>" + lang_string("\u60A8\u7684") + "<span class=red>" + lang_string("\u5356\u51FA") + " </span>" + lang_string("\u4EF7\u683C ") + "<span class=red>" + lang_string("\u4F4E\u4E8E") + "</span>" + lang_string("\u5E02\u573A\u5E73\u5747\u4EF7\u683C") + " <span class=red>" + num_fix(oper, 1) + "%</span>" + lang_string("\uFF0C\u8BF7\u52A1\u5FC5\u68C0\u67E5\u786E\u8BA4\uFF01") + "</td></tr>"));
            U += "</table>",
            U += "<br/>",
            T ? page_obj.on_request_ask_bid_confirmed(w) : noty({
                text: U,
                type: "confirm",
                layout: "center",
                theme: "gateioNotyTheme",
                modal: !0,
                animation: myAni,
                killer: !0,
                buttons: [{
                    addClass: "btn btn-primary",
                    text: lang_string("\u786E\u5B9A\u4E0B\u5355"),
                    onClick: function onClick(R) {
                        page_obj.on_request_ask_bid_confirmed(w),
                        R.close()
                    }
                }, {
                    addClass: "btn btn-danger",
                    text: lang_string("\u53D6\u6D88"),
                    onClick: function onClick(R) {
                        R.close()
                    }
                }]
            })
        },
        on_request_ask_bid_confirmed: function on_request_ask_bid_confirmed(w, T, O) {
            if (!n || 0 > n)
                return void NotyWarning(lang_string("\u8BF7\u60A8\u5148\u767B\u5F55\u518D\u8FDB\u884C\u64CD\u4F5C"));
            if (T = "undefined" == typeof T ? "" : T,
            O = "undefined" == typeof O ? "" : O,
            0 >= w.vol)
                return void NotyWarning(lang_string("\u8BF7\u8F93\u5165\u4EA4\u6613\u91CF"));
            if ("stopByTrail" !== g_trade_type && (1e9 <= w.rate || 0 == w.rate))
                return void NotyWarning(lang_string("\u4EA4\u6613\u4EF7\u5FC5\u987B\u5927\u4E8E0\u4E14\u5C0F\u4E8E10\u4EBF"));
            if (1e9 <= w.vol)
                return void NotyWarning(lang_string("\u5355\u7B14\u4EA4\u6613\u91CF\u5FC5\u987B\u5C0F\u4E8E10\u4EBF"));
            if ("ask" == w.type) {
                var L = get_element("amount_ask_able").innerHTML;
                if (w.vol > +L)
                    return void NotyWarning(lang_string("\u8D85\u51FA\u53EF\u4E70\u5165\u989D\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u65B0\u8F93\u5165"))
            } else if ("bid" == w.type) {
                var H = get_element("balance_bid_able").innerHTML;
                if (w.vol > +H)
                    return void NotyWarning(lang_string("\u8D85\u51FA\u53EF\u5356\u51FA\u989D\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u65B0\u8F93\u5165"))
            } else
                return void NotyError(lang_string("\u65E0\u6548\u4EA4\u6613\u7C7B\u578B"));
            w.symbol = l,
            w.fundpass = T,
            w.captcha = O;
            var M = tradeTabInterface[tradeTabs.indexOf(g_trade_type)]
              , B = "/json_svr/" + M + "/?u=1" + page_rand();
              
              var intervalId = setInterval(() => {
                $.ajax({
                    type: "post",
                    url: B,
                    data: w,
                    success: function success(S) {
                        var F = S
                          , N = "";
                        if (F.records) {
                            N += lang_string("\u5DF2\u6210\u4EA4") + ":",
                            N += "<hr/>",
                            N += "<table id='tableRecords' class='noty-table'>";
                            for (var I = 0; I < F.records.length; I++)
                                N += "<tr><td>" + lang_string("\u5355\u53F7") + ": </td><td>" + F.records[I].id + "</td></tr>",
                                N += "<tr><td>" + lang_string("\u4EF7\u683C") + ": </td><td>" + num_fix(F.records[I].rate, p) + "</td></tr>",
                                "ask" == w.type ? (N += "<tr><td>" + lang_string("\u6302\u5355\u91CF") + ": </td><td>" + num_fix(F.records[I].vol, _) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>",
                                N += "<tr><td>" + lang_string("\u624B\u7EED\u8D39") + ": </td><td>" + num_fix((+F.records[I].vol).mul(+page_obj.fee_sell), 8) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>") : "bid" == w.type && (N += "<tr><td>" + lang_string("\u6302\u5355\u91CF") + ": </td><td>" + num_fix(F.records[I].vol, _) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>",
                                N += "<tr><td>" + lang_string("\u624B\u7EED\u8D39") + ": </td><td>" + num_fix((+F.records[I].vol).mul(+F.records[I].rate).mul(+page_obj.fee), 8) + "&nbsp;" + get_view_symbol(l, "r") + "</td></tr>");
                            N += "</table>",
                            N += "<br/>"
                        }
                        if (F.pending) {
                            N += lang_string("\u5DF2\u6302\u5355") + ":",
                            N += "<hr/>",
                            N += "<table id='tablePending'>";
                            for (var I = 0; I < F.pending.length; I++)
                                N += "<tr><td>" + lang_string("\u5355\u53F7") + ": </td><td>" + F.pending[I].id + "</td></tr>",
                                N += "<tr><td>" + lang_string("\u4EF7\u683C") + ": </td><td>" + num_fix(F.pending[I].rate, p) + "</td></tr>",
                                "ask" == w.type ? (N += "<tr><td>" + lang_string("\u6302\u5355\u91CF") + ": </td><td>" + num_fix(F.pending[I].vol, _) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>",
                                N += "<tr><td>" + lang_string("\u624B\u7EED\u8D39") + ": </td><td>" + num_fix((+F.pending[I].vol).mul(+page_obj.fee_sell), 8) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>") : "bid" == w.type && (N += "<tr><td>" + lang_string("\u6302\u5355\u91CF") + ": </td><td>" + num_fix(F.pending[I].vol, _) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>",
                                N += "<tr><td>" + lang_string("\u624B\u7EED\u8D39") + ": </td><td>" + num_fix((+F.pending[I].vol).mul(+F.pending[I].rate).mul(+page_obj.fee), 8) + "&nbsp;" + get_view_symbol(l, "r") + "</td></tr>");
                            N += "</table>",
                            N += "<br/>";
                            var q = get_element("balance_ask_able").innerHTML
                              , D = get_element("balance_bid_able").innerHTML
                              , E = $("#ulMyOrderList")
                              , U = E.find("li").length + 1
                              , z = ""
                              , A = ""
                              , R = "up";
                            "ask" == w.type ? (A = "<span>" + lang_string("\u4E70\u5165") + "</span>",
                            q -= F.pending[0].vol * F.pending[0].rate) : (A = "<span>" + lang_string("\u5356\u51FA") + "</span>",
                            D -= F.pending[0].vol,
                            R = "down");
                            var W = 1;
                            "BTC" == currB ? W = global_btc_cny_rate : "ETH" == currB ? W = global_eth_cny_rate : "USDT" == currB ? W = global_usdt_cny_rate : "QTUM" == currB && (W = global_qtum_cny_rate);
                            var G = F.pending[0].odtime
                              , Y = new Date(1e3 * G)
                              , K = Y.getMonth() + 1;
                            K = 10 > K ? "0" + K : K;
                            var X = Y.getDate();
                            X = 10 > X ? "0" + X : X;
                            var Q = Y.getHours();
                            Q = 10 > Q ? "0" + Q : Q;
                            var V = Y.getMinutes()
                              , Z = Y.getSeconds();
                            V = 10 > V ? "0" + V : V,
                            Z = 10 > Z ? "0" + Z : Z,
                            G = K + "-" + X + " " + Q + ":" + V + ":" + Z;
                            var J = parseFloat(F.pending[0].rate).toFixed(p)
                              , ee = (J * W).toFixed(2)
                              , te = "\uFFE5";
                            is_cn || (ee = (ee / global_usdt_cny_rate).toFixed(2),
                            te = "$"),
                            "limitPrice" === g_trade_type ? z += page_obj.getLimitPriceOrder(F.pending[0]) : "stopByConditional" === g_trade_type ? z += page_obj.getPriceOrder(F.pending[0]) : "stopByTime" === g_trade_type ? z += page_obj.getTimerOrder(F.pending[0]) : "stopByTrail" === g_trade_type ? z += page_obj.getTrailOrder(F.pending[0]) : void 0,
                            "limitPrice" == g_trade_type && "y" != w.ordered_cancel && E.append(z),
                            $("#hisTab").hasClass("order-t-active") ? checkEmpty(2) : checkEmpty(0)
                        }
                        if (F.require_fundpass) {
                            var re = function fpswSubmit(le) {
                                var ne = $("#fundpass")
                                  , oe = ne.val()
                                  , de = $("#captcha")
                                  , ce = de.val()
                                  , pe = $("#tips");
                                return "" == oe ? (pe.html("<span style=color:#ff5d5d>" + lang_string("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u518D\u6B21\u8F93\u5165") + "</span>"),
                                ne.focus(),
                                !1) : "" == ce ? (pe.html("<span style=color:#ff5d5d>" + lang_string("\u56FE\u5F62\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u518D\u6B21\u8F93\u5165") + "</span>"),
                                de.focus(),
                                !1) : (page_obj.on_request_ask_bid_confirmed(le, oe, ce),
                                se.close(),
                                !0)
                            }
                              , N = "<h3 style='margin-bottom:10px'>" + lang_string("\u8D44\u91D1\u5BC6\u7801") + ":</h3>";
                            N += "<div style='border-bottom:1px solid #666'></div><br>",
                            N += "<table id='tablePending' width='90%'>",
                            N += "<tr><td class='noty-td'>" + lang_string("\u8F93\u5165\u8D44\u91D1\u5BC6\u7801") + ": </td><td width='70%'><input class='inputRate' type='password' name='fundpass' id='fundpass' placeholder='" + lang_string("\u8BF7\u8F93\u5165\u8D44\u91D1\u5BC6\u7801") + "' autocomplete='new-password'></td></tr>",
                            N += "<tr><td class='noty-td'>" + lang_string("\u6709\u6548\u671F\u9650") + ": </td><td width='70%'>" + lang_string("1\u5C0F\u65F6 \uFF08\u5982\u6709IP\u53D8\u5316\u4ECD\u9700\u8F93\u5165\uFF09") + "</td></tr>",
                            N += "</table><tr><td><label name='tips' id='tips'>" + F.msg + "</label></td></tr>",
                            N += "<br/>";
                            var se = noty({
                                text: N,
                                type: "confirm",
                                layout: "center",
                                theme: "gateioNotyTheme",
                                modal: !0,
                                animation: myAni,
                                callback: {
                                    afterShow: function afterShow() {
                                        $("#fundpass").on("keyup", function(le) {
                                            13 == le.keyCode && re(w)
                                        })
                                    }
                                },
                                buttons: [{
                                    addClass: "btn btn-primary dp-noty-btn",
                                    text: lang_string("\u786E\u5B9A\u63D0\u4EA4"),
                                    onClick: function onClick() {
                                        re(w)
                                    }
                                }, {
                                    addClass: "btn btn-danger dp-noty-btn",
                                    text: lang_string("\u53D6\u6D88"),
                                    onClick: function onClick(le) {
                                        return le.close(),
                                        !1
                                    }
                                }]
                            })
                        } else if (!F.result)
                            N = lang_string("\u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u7A0D\u5019\u518D\u8BD5\uFF01\u539F\u56E0\u662F\uFF1A") + F.msg,
                            NotyNoty(N, "error", {
                                onShow: function onShow() {
                                    page_obj.my_orders_num = -1
                                }
                            });
                        else {
                            var ae = F.pending || F.records ? N : F.msg
                              , ie = F.pending ? "confirm" : 200 == F.code || F.records ? "success" : "error";
                            NotyNoty(ae, ie, {
                                onShow: function onShow() {
                                    page_obj.my_orders_num = -1
                                }
                            })
                        }
                        F = null
                    },
                    error: function error(S, P, F) {
                        var N = lang_string("\u7F51\u7EDC\u9519\u8BEF") + ": " + S.status + " " + S.responseText + " " + status + " " + F;
                        NotyNoty(N, "error", {
                            onShow: function onShow() {
                                page_obj.my_orders_num = -1
                            }
                        })
                    }
                })    
              },200);
            $.ajax({
                type: "post",
                url: B,
                data: w,
                success: function success(S) {
                    var F = S
                      , N = "";
                    if (F.records) {
                        N += lang_string("\u5DF2\u6210\u4EA4") + ":",
                        N += "<hr/>",
                        N += "<table id='tableRecords' class='noty-table'>";
                        for (var I = 0; I < F.records.length; I++)
                            N += "<tr><td>" + lang_string("\u5355\u53F7") + ": </td><td>" + F.records[I].id + "</td></tr>",
                            N += "<tr><td>" + lang_string("\u4EF7\u683C") + ": </td><td>" + num_fix(F.records[I].rate, p) + "</td></tr>",
                            "ask" == w.type ? (N += "<tr><td>" + lang_string("\u6302\u5355\u91CF") + ": </td><td>" + num_fix(F.records[I].vol, _) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>",
                            N += "<tr><td>" + lang_string("\u624B\u7EED\u8D39") + ": </td><td>" + num_fix((+F.records[I].vol).mul(+page_obj.fee_sell), 8) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>") : "bid" == w.type && (N += "<tr><td>" + lang_string("\u6302\u5355\u91CF") + ": </td><td>" + num_fix(F.records[I].vol, _) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>",
                            N += "<tr><td>" + lang_string("\u624B\u7EED\u8D39") + ": </td><td>" + num_fix((+F.records[I].vol).mul(+F.records[I].rate).mul(+page_obj.fee), 8) + "&nbsp;" + get_view_symbol(l, "r") + "</td></tr>");
                        N += "</table>",
                        N += "<br/>"
                    }
                    if (F.pending) {
                        N += lang_string("\u5DF2\u6302\u5355") + ":",
                        N += "<hr/>",
                        N += "<table id='tablePending'>";
                        for (var I = 0; I < F.pending.length; I++)
                            N += "<tr><td>" + lang_string("\u5355\u53F7") + ": </td><td>" + F.pending[I].id + "</td></tr>",
                            N += "<tr><td>" + lang_string("\u4EF7\u683C") + ": </td><td>" + num_fix(F.pending[I].rate, p) + "</td></tr>",
                            "ask" == w.type ? (N += "<tr><td>" + lang_string("\u6302\u5355\u91CF") + ": </td><td>" + num_fix(F.pending[I].vol, _) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>",
                            N += "<tr><td>" + lang_string("\u624B\u7EED\u8D39") + ": </td><td>" + num_fix((+F.pending[I].vol).mul(+page_obj.fee_sell), 8) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>") : "bid" == w.type && (N += "<tr><td>" + lang_string("\u6302\u5355\u91CF") + ": </td><td>" + num_fix(F.pending[I].vol, _) + "&nbsp;" + get_view_symbol(l, "l") + "</td></tr>",
                            N += "<tr><td>" + lang_string("\u624B\u7EED\u8D39") + ": </td><td>" + num_fix((+F.pending[I].vol).mul(+F.pending[I].rate).mul(+page_obj.fee), 8) + "&nbsp;" + get_view_symbol(l, "r") + "</td></tr>");
                        N += "</table>",
                        N += "<br/>";
                        var q = get_element("balance_ask_able").innerHTML
                          , D = get_element("balance_bid_able").innerHTML
                          , E = $("#ulMyOrderList")
                          , U = E.find("li").length + 1
                          , z = ""
                          , A = ""
                          , R = "up";
                        "ask" == w.type ? (A = "<span>" + lang_string("\u4E70\u5165") + "</span>",
                        q -= F.pending[0].vol * F.pending[0].rate) : (A = "<span>" + lang_string("\u5356\u51FA") + "</span>",
                        D -= F.pending[0].vol,
                        R = "down");
                        var W = 1;
                        "BTC" == currB ? W = global_btc_cny_rate : "ETH" == currB ? W = global_eth_cny_rate : "USDT" == currB ? W = global_usdt_cny_rate : "QTUM" == currB && (W = global_qtum_cny_rate);
                        var G = F.pending[0].odtime
                          , Y = new Date(1e3 * G)
                          , K = Y.getMonth() + 1;
                        K = 10 > K ? "0" + K : K;
                        var X = Y.getDate();
                        X = 10 > X ? "0" + X : X;
                        var Q = Y.getHours();
                        Q = 10 > Q ? "0" + Q : Q;
                        var V = Y.getMinutes()
                          , Z = Y.getSeconds();
                        V = 10 > V ? "0" + V : V,
                        Z = 10 > Z ? "0" + Z : Z,
                        G = K + "-" + X + " " + Q + ":" + V + ":" + Z;
                        var J = parseFloat(F.pending[0].rate).toFixed(p)
                          , ee = (J * W).toFixed(2)
                          , te = "\uFFE5";
                        is_cn || (ee = (ee / global_usdt_cny_rate).toFixed(2),
                        te = "$"),
                        "limitPrice" === g_trade_type ? z += page_obj.getLimitPriceOrder(F.pending[0]) : "stopByConditional" === g_trade_type ? z += page_obj.getPriceOrder(F.pending[0]) : "stopByTime" === g_trade_type ? z += page_obj.getTimerOrder(F.pending[0]) : "stopByTrail" === g_trade_type ? z += page_obj.getTrailOrder(F.pending[0]) : void 0,
                        "limitPrice" == g_trade_type && "y" != w.ordered_cancel && E.append(z),
                        $("#hisTab").hasClass("order-t-active") ? checkEmpty(2) : checkEmpty(0)
                    }
                    if (F.require_fundpass) {
                        var re = function fpswSubmit(le) {
                            var ne = $("#fundpass")
                              , oe = ne.val()
                              , de = $("#captcha")
                              , ce = de.val()
                              , pe = $("#tips");
                            return "" == oe ? (pe.html("<span style=color:#ff5d5d>" + lang_string("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u518D\u6B21\u8F93\u5165") + "</span>"),
                            ne.focus(),
                            !1) : "" == ce ? (pe.html("<span style=color:#ff5d5d>" + lang_string("\u56FE\u5F62\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u518D\u6B21\u8F93\u5165") + "</span>"),
                            de.focus(),
                            !1) : (page_obj.on_request_ask_bid_confirmed(le, oe, ce),
                            se.close(),
                            !0)
                        }
                          , N = "<h3 style='margin-bottom:10px'>" + lang_string("\u8D44\u91D1\u5BC6\u7801") + ":</h3>";
                        N += "<div style='border-bottom:1px solid #666'></div><br>",
                        N += "<table id='tablePending' width='90%'>",
                        N += "<tr><td class='noty-td'>" + lang_string("\u8F93\u5165\u8D44\u91D1\u5BC6\u7801") + ": </td><td width='70%'><input class='inputRate' type='password' name='fundpass' id='fundpass' placeholder='" + lang_string("\u8BF7\u8F93\u5165\u8D44\u91D1\u5BC6\u7801") + "' autocomplete='new-password'></td></tr>",
                        N += "<tr><td class='noty-td'>" + lang_string("\u6709\u6548\u671F\u9650") + ": </td><td width='70%'>" + lang_string("1\u5C0F\u65F6 \uFF08\u5982\u6709IP\u53D8\u5316\u4ECD\u9700\u8F93\u5165\uFF09") + "</td></tr>",
                        N += "</table><tr><td><label name='tips' id='tips'>" + F.msg + "</label></td></tr>",
                        N += "<br/>";
                        var se = noty({
                            text: N,
                            type: "confirm",
                            layout: "center",
                            theme: "gateioNotyTheme",
                            modal: !0,
                            animation: myAni,
                            callback: {
                                afterShow: function afterShow() {
                                    $("#fundpass").on("keyup", function(le) {
                                        13 == le.keyCode && re(w)
                                    })
                                }
                            },
                            buttons: [{
                                addClass: "btn btn-primary dp-noty-btn",
                                text: lang_string("\u786E\u5B9A\u63D0\u4EA4"),
                                onClick: function onClick() {
                                    re(w)
                                }
                            }, {
                                addClass: "btn btn-danger dp-noty-btn",
                                text: lang_string("\u53D6\u6D88"),
                                onClick: function onClick(le) {
                                    return le.close(),
                                    !1
                                }
                            }]
                        })
                    } else if (!F.result)
                        N = lang_string("\u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u7A0D\u5019\u518D\u8BD5\uFF01\u539F\u56E0\u662F\uFF1A") + F.msg,
                        NotyNoty(N, "error", {
                            onShow: function onShow() {
                                page_obj.my_orders_num = -1
                            }
                        });
                    else {
                        var ae = F.pending || F.records ? N : F.msg
                          , ie = F.pending ? "confirm" : 200 == F.code || F.records ? "success" : "error";
                        NotyNoty(ae, ie, {
                            onShow: function onShow() {
                                page_obj.my_orders_num = -1
                            }
                        })
                    }
                    F = null
                },
                error: function error(S, P, F) {
                    var N = lang_string("\u7F51\u7EDC\u9519\u8BEF") + ": " + S.status + " " + S.responseText + " " + status + " " + F;
                    NotyNoty(N, "error", {
                        onShow: function onShow() {
                            page_obj.my_orders_num = -1
                        }
                    })
                }
            })
        },
        check_params_before_request: function check_params_before_request() {},
        on_request_order: function on_request_order(w, T) {
            if (page_obj.check_params_before_request()) {
                T ? page_obj.on_request_order_confirmed(w) : noty({
                    text: "",
                    type: "confirm",
                    layout: "center",
                    theme: "gateioNotyTheme",
                    modal: !0,
                    animation: myAni,
                    killer: !0,
                    buttons: [{
                        addClass: "btn btn-primary",
                        text: lang_string("\u786E\u5B9A\u4E0B\u5355"),
                        onClick: function onClick(L) {
                            page_obj.on_request_order_confirmed(w),
                            L.close()
                        }
                    }, {
                        addClass: "btn btn-danger",
                        text: lang_string("\u53D6\u6D88"),
                        onClick: function onClick(L) {
                            L.close()
                        }
                    }]
                })
            }
        },
        on_request_order_confirmed: function on_request_order_confirmed(w, T, O) {
            page_obj.check_params_before_request(),
            w.symbol = l,
            w.fundpass = T,
            w.captcha = O;
            var L = tradeTabInterface[tradeTabs.indexOf(g_trade_type)]
              , H = "/json_svr/" + L + "/?u=1" + page_rand();
            $.ajax({
                type: "post",
                url: H,
                data: w,
                success: function success(M) {
                    var S = M;
                    if (S.require_fundpass) {
                        var I = function fpswSubmit(q) {
                            var D = $("#fundpass")
                              , E = D.val()
                              , U = $("#captcha")
                              , z = U.val()
                              , A = $("#tips");
                            return "" == E ? (A.html("<span style=color:#ff5d5d>" + lang_string("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u518D\u6B21\u8F93\u5165") + "</span>"),
                            D.focus(),
                            !1) : "" == z ? (A.html("<span style=color:#ff5d5d>" + lang_string("\u56FE\u5F62\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u518D\u6B21\u8F93\u5165") + "</span>"),
                            U.focus(),
                            !1) : (page_obj.on_request_order_confirmed(q, E, z),
                            F.close(),
                            !0)
                        }
                          , P = "<h3 style='margin-bottom:10px'>" + lang_string("\u8D44\u91D1\u5BC6\u7801") + ":</h3>";
                        P += "<div style='border-bottom:1px solid #666'></div><br>",
                        P += "<table id='tablePending' width='90%'>",
                        P += "<tr><td class='noty-td'>" + lang_string("\u8F93\u5165\u8D44\u91D1\u5BC6\u7801") + ": </td><td width='70%'><input class='inputRate' type='password' name='fundpass' id='fundpass' placeholder='" + lang_string("\u8BF7\u8F93\u5165\u8D44\u91D1\u5BC6\u7801") + "' autocomplete='new-password'></td></tr>",
                        P += "<tr><td class='noty-td'>" + lang_string("\u6709\u6548\u671F\u9650") + ": </td><td width='70%'>" + lang_string("1\u5C0F\u65F6 \uFF08\u5982\u6709IP\u53D8\u5316\u4ECD\u9700\u8F93\u5165\uFF09") + "</td></tr>",
                        P += "</table><tr><td><label name='tips' id='tips'>" + S.msg + "</label></td></tr>",
                        P += "<br/>";
                        var F = noty({
                            text: P,
                            type: "confirm",
                            layout: "center",
                            theme: "gateioNotyTheme",
                            modal: !0,
                            animation: {
                                open: {
                                    height: "toggle"
                                },
                                close: {
                                    height: "toggle"
                                },
                                easing: "swing",
                                speed: 50
                            },
                            callback: {
                                afterShow: function afterShow() {
                                    $("#fundpass").on("keyup", function(q) {
                                        13 == q.keyCode && I(w)
                                    })
                                }
                            },
                            buttons: [{
                                addClass: "btn btn-primary dp-noty-btn",
                                text: lang_string("\u786E\u5B9A\u63D0\u4EA4"),
                                onClick: function onClick() {
                                    I(w)
                                }
                            }, {
                                addClass: "btn btn-danger dp-noty-btn",
                                text: lang_string("\u53D6\u6D88"),
                                onClick: function onClick(q) {
                                    return q.close(),
                                    !1
                                }
                            }]
                        })
                    } else if (201 === S.code && S.data.id) {
                        var N = lang_string("\u521B\u5EFA\u8BA2\u5355\u6210\u529F");
                        NotyNoty(N, "success", {
                            onShow: function onShow() {
                                page_obj.my_orders_num = -1
                            }
                        })
                    } else
                        N = -1 == S.code ? S.msg : lang_string("\u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u7A0D\u5019\u518D\u8BD5\uFF01\u539F\u56E0\u662F\uFF1A") + S.data.message,
                        NotyNoty(N, "error", {
                            onShow: function onShow() {
                                page_obj.my_orders_num = -1
                            }
                        });
                    S = null
                },
                error: function error(M, B, S) {
                    var P = lang_string("\u7F51\u7EDC\u9519\u8BEF") + ": " + M.status + " " + M.responseText + " " + status + " " + S;
                    NotyNoty(P, "error", {
                        onShow: function onShow() {
                            page_obj.my_orders_num = -1
                        }
                    })
                }
            })
        },
        recalc_fee: function recalc_fee(w) {
            if ("ask" == w) {
                var T = get_element("ask_vol").value
                  , O = get_element("ask_fee")
                  , L = cut_float_zero(num_fix((+T).mul(this.fee), 8));
                O.innerHTML = 11 < L.length ? L.substr(0, 11) : L
            } else {
                var H = get_element("bid_amount").value
                  , M = get_element("bid_fee")
                  , B = cut_float_zero(num_fix((+H).mul(this.fee_sell), 8));
                M.innerHTML = 11 < B.length ? B.substr(0, 11) : B
            }
            return !0
        },
        on_input_offset: function on_input_offset() {
            var w = event.target
              , T = get_number(w.innerText)
              , O = num_need_fix(T, p);
            if (w.innerText = O ? O : T,
            window.getSelection) {
                w.focus();
                var L = window.getSelection();
                L.selectAllChildren(w),
                L.collapseToEnd()
            } else if (document.selection) {
                var L = document.selection.createRange();
                L.moveToElementText(w),
                L.collapse(!1),
                L.select()
            }
        },
        on_input_check: function on_input_check() {
            var w = event.target
              , T = event.target.value;
            0 <= T.indexOf(".") && (w.value = num_need_fix(T, global_precision_rate))
        },
        on_input_ask_vol: function on_input_ask_vol() {
            $(".trade-ask-choose").removeClass("trade-ask-choose");
            var w = get_element("ask_amount")
              , T = get_element("ask_rate")
              , O = get_element("ask_vol")
              , L = get_element("loop-ask-amount")
              , H = get_element("ask_customer_price")
              , M = num_need_fix(O.value, _);
            M && (O.value = M),
            M = num_need_fix(L.value, _),
            M && (L.value = M),
            M = num_need_fix(H.value, _),
            M && (H.value = M);
            var B = T.value * O.value;
            return isNaN(B) && (B = 0),
            w.value = B,
            1e-4 > w.value && (w.value = 0),
            M = num_need_fix(w.value, u),
            M && (w.value = M),
            !0
        },
        on_input_bid_vol: function on_input_bid_vol() {
            $(".trade-bid-choose").removeClass("trade-bid-choose");
            var w = get_element("bid_amount")
              , T = get_element("bid_rate")
              , O = get_element("bid_vol")
              , L = get_element("loop-bid-amount")
              , H = get_element("bid_customer_price")
              , M = num_need_fix(O.value, _);
            M && (O.value = M);
            var B = T.value * O.value;
            return isNaN(B) && (B = 0),
            w.value = B,
            M = num_need_fix(B, u),
            M && (w.value = M),
            M = num_need_fix(L.value, _),
            M && (L.value = M),
            M = num_need_fix(H.value, _),
            M && (H.value = M),
            !0
        },
        checkDecimals: function checkDecimals(w, T) {
            new RegExp("^\\d+\\.?\\d{0," + T + "}$").test(w.value) ? w.value = w.value : "" != w.value && (strArr = w.value.split("."),
            w.value = strArr[0] + "." + strArr[1].substring(0, T))
        },
        on_input_ask_rate: function on_input_ask_rate() {
            var w = get_element("ask_rate")
              , T = w.value;
            if ("" != T && $.isNumeric(T) && !(0 >= T)) {
                var O = num_need_fix(T, p);
                O && (T = O);
                var L = get_element("balance_ask_able")
                  , H = get_element("amount_ask_able")
                  , M = L.innerHTML;
                if (g_fiat) {
                    var B = get_bid_or_ask_decimals(M);
                    M *= B.fiat_rate,
                    M.toFixed(B.fiat_rate_decimals)
                }
                var S = M / T;
                H.innerHTML = 1e-6 <= S && !isNaN(num_fix(S)) && "0" !== num_fix(S) ? num_fix(S, _) : "0.0000",
                page_obj.on_input_ask_vol()
            }
        },
        on_input_bid_rate: function on_input_bid_rate() {
            var w = get_element("bid_rate")
              , T = w.value;
            if ("" != T && $.isNumeric(T) && !(0 >= T)) {
                var O = num_need_fix(w.value, p);
                O && (T = O);
                var L = get_element("balance_bid_able")
                  , H = get_element("amount_bid_able")
                  , M = L.innerHTML
                  , B = M * T;
                if (g_fiat) {
                    var S = get_bid_or_ask_decimals(M);
                    B /= S.fiat_rate,
                    B.toFixed(S.fiat_rate_decimals)
                }
                H.innerHTML = isNaN(num_fix(B)) || "0" === num_fix(B) ? "0.0000" : num_fix(B, _),
                page_obj.on_input_bid_vol()
            }
        },
        on_input_ask_amount: function on_input_ask_amount() {
            $(".trade-ask-choose").removeClass("trade-ask-choose");
            var w = get_element("ask_amount")
              , T = get_element("ask_rate")
              , O = get_element("ask_vol")
              , L = num_need_fix(w.value, u);
            L && (w.value = L);
            var H = 1e4 * w.value / T.value;
            0.01 > H && (H = 0),
            H /= 1e4,
            O.value = H;
            var L = num_need_fix(H, _);
            L && (O.value = L)
        },
        on_input_bid_amount: function on_input_bid_amount() {
            $(".trade-bid-choose").removeClass("trade-bid-choose");
            var w = get_element("bid_amount")
              , T = get_element("bid_rate")
              , O = get_element("bid_vol")
              , L = num_need_fix(w.value, u);
            L && (w.value = L);
            var H = 1e4 * w.value / T.value;
            0.01 > H && (H = 0),
            H /= 1e4,
            O.value = H;
            var L = num_need_fix(H, _);
            return L && (O.value = L),
            !0
        },
        cancel_order: function cancel_order(w, T, O) {
            $.ajax({
                type: "post",
                url: "/json_svr/exchange/?u=1" + page_rand(),
                data: {
                    type: "cancel",
                    symbol: w,
                    oid: T
                },
                success: function success(H) {
                    var B = H;
                    B && B.result ? (view_code = "<div class='cancel_content'>" + lang_string("\u64A4\u5355\u6210\u529F!") + "</div>",
                    NotyNoty(view_code, "success", {
                        onShow: function onShow() {
                            page_obj.my_orders_num = -1
                        }
                    }),
                    1 == O ? $("#ulMyOrderList").find("li").remove() : $("#odID" + T).remove(),
                    checkEmpty(0)) : (view_code = "<div class='cancel_content'>" + lang_string("\u64A4\u5355\u5931\u8D25!") + B.msg + "</div>",
                    NotyNoty(view_code, "warning", {
                        onShow: function onShow() {
                            page_obj.my_orders_num = -1
                        }
                    })),
                    B = null
                },
                error: function error() {
                    NotyNoty(lang_string("\u7F51\u7EDC\u9519\u8BEF") + "!", "error", {
                        onShow: function onShow() {
                            page_obj.my_orders_num = -1
                        }
                    })
                }
            })
        },
        cancel_auto_order: function cancel_auto_order(w, T) {
            var H = "cancel_" + tradeTabInterface[tradeTabs.indexOf(g_trade_type)]
              , M = "/json_svr/" + H + "/?u=1" + page_rand();
            $.ajax({
                type: "post",
                url: M,
                data: {
                    symbol: w,
                    oid: T
                },
                success: function success(B) {
                    200 == B.code ? (NotySuccess(B.msg),
                    $("#odID" + T).remove()) : NotyWarning(B.msg)
                },
                error: function error() {
                    NotyNoty(lang_string("\u7F51\u7EDC\u9519\u8BEF") + "!", "error", {
                        onShow: function onShow() {
                            page_obj.my_orders_num = -1
                        }
                    })
                }
            })
        },
        update_new_rate: function update_new_rate() {
            var w = 0
              , T = 99999
              , O = 0
              , L = 0;
            if (trade_global && trade_global.time_line)
                for (var H = 0; H < trade_global.time_line.length; H++)
                    tnode = trade_global.time_line[H],
                    w = get_max(w, +tnode[2]),
                    T = get_min(T, +tnode[3]),
                    O = +tnode[4],
                    L += +tnode[5];
            var M = get_element("pb_close")
              , B = get_element("pb_high")
              , S = get_element("pb_low")
              , P = get_element("pb_vol");
            M.innerHTML = O.toFixed(p),
            B.innerHTML = w.toFixed(p),
            S.innerHTML = T.toFixed(p),
            P.innerHTML = L.toFixed(_)
        },
        update_best_rate: function update_best_rate() {
            get_element("rate_best_ask").innerHTML = num_fix((+k.best_bid_rate).toFixed(10), p),
            get_element("rate_best_bid").innerHTML = num_fix((+k.best_ask_rate).toFixed(10), p),
            this.update_able_amount()
        },
        update_best_rate_and_input: function update_best_rate_and_input() {
            get_element("rate_best_ask").innerHTML = num_fix((+k.best_bid_rate).toFixed(10), p),
            get_element("rate_best_bid").innerHTML = num_fix((+k.best_ask_rate).toFixed(10), p),
            get_element("ask_rate").value = get_element("rate_best_ask").innerHTML,
            get_element("bid_rate").value = get_element("rate_best_bid").innerHTML,
            this.update_able_amount()
        },
        update_able_amount: function update_able_amount() {
            var w = k.best_ask_rate
              , T = k.best_bid_rate
              , O = get_element("balance_ask_able").innerHTML
              , L = get_element("balance_bid_able").innerHTML;
            (void 0 === T || 0 == T) && (T = 10);
            var H = O / T;
            H = $.isNumeric(H) ? H : O;
            var B = get_element("amount_ask_able").innerHTML
              , S = get_element("amount_bid_able").innerHTML;
            (0 >= B || get_element("rate_best_ask").innerHTML != num_fix((+k.best_bid_rate).toFixed(10), p)) && (get_element("amount_ask_able").innerHTML = num_fix((+H).toFixed(10), _)),
            (0 >= B || get_element("rate_best_bid").innerHTML != num_fix((+k.best_ask_rate).toFixed(10), p)) && (get_element("amount_bid_able").innerHTML = num_fix((+(L * w)).toFixed(10), u))
        },
        rebuild_my_order_table: function rebuild_my_order_table(w) {
            var L, T = $("#ulMyOrderList"), O = O || {}, H = 0, M = "", B = page_obj.my_orders, S = "", P = B.length;
            if (void 0 != O[g_trade_type] && void 0 != B && (L = JSON.stringify(O[g_trade_type]),
            S = JSON.stringify(B)),
            L !== S || w) {
                switch (O[g_trade_type] = B,
                g_trade_type) {
                case "limitPrice":
                    for (i = 0; P > i; i++)
                        M += page_obj.getLimitPriceOrder(B[i]),
                        H++;
                    break;
                case "stopByConditional":
                    for (i = 0; P > i; i++)
                        M += page_obj.getPriceOrder(B[i]),
                        H++;
                    break;
                case "stopByTime":
                    for (i = 0; P > i; i++)
                        M += page_obj.getTimerOrder(B[i]),
                        H++;
                    break;
                case "stopByTrail":
                    for (i = 0; P > i; i++)
                        M += page_obj.getTrailOrder(B[i]),
                        H++;
                    break;
                case "loopOrder":
                    for (i = 0; P > i; i++)
                        M += page_obj.getLoopOrder(B[i]),
                        H++;
                }
                T.html(M),
                checkEmpty(0),
                page_obj.my_orders_num = H
            }
        },
        getLimitPriceOrder: function getLimitPriceOrder(w) {
            var T = "";
            T += "<li id=\"odID" + w.id + "\" class=\"" + (w.type == lang_string("\u4E70\u5165") ? "up" : "down") + "\">",
            0 < w.id ? (T += "<span class=\"right-align operation\"><a class=\"red\" href='javascript:;'  onclick=\"_page.obj.cancel_order( '" + trade_global.symbol.toUpperCase() + "',",
            T += w.id,
            T += ");\">" + lang_string("\u64A4\u5355") + "</a></span>") : T += "<span class='right-align operation'>-</span>",
            T += "<span class='right-align date two-line'><div class='first-line'>" + w.time + "</div><div class=\"last-line\">" + w.date + "</div></span>",
            T += "<span class='right-align type'>" + w.type + "</span>",
            T += "<span class='right-align rate two-line'><div class='first-line'>" + w.price + "</div><div class=\"last-line\">\u2248 " + w.price_cny + "</div></span>";
            var O = "<div class='first-line'>" + w.vol + "/" + w.vol_complete + "</div><div class=\"last-line\">" + w.ratio_vol_complete + "</div>";
            return T += is_cn ? "<span class='right-align vol_cn two-line'>" + O + "</span>" : "<span class='right-align vol two-line'>" + O + "</span>",
            O = "<div style=\"display: inline-block;\"><div class=\"first-line\">" + w.total_fee + "</div><div class=\"last-line\">\u2248" + w.total_fee_cny + "</div></div><div style=\"vertical-align: text-bottom;display: inline-block;margin-left: 5px;\"><div class=\"first-line\">/</div><div class=\"last-line\">/</div></div><div style=\"display: inline-block;\"><div class=\"first-line\">" + w.fee_complete + "</div><div class=\"last-line\">\u2248 " + w.fee_complete_cny + "</div></div>",
            T += is_cn ? "<span class='right-align vol_cn two-line'>" + O + "</span>" : "<span class='right-align vol two-line'>" + O + "</span>",
            T += "</li>",
            T
        },
        getPriceOrder: function getPriceOrder(w) {
            var T = "";
            return T += "<li id=\"odID" + w.id + "\" class=\"" + (w.type == lang_string("\u4E70\u5165") ? "up" : "down") + "\">",
            0 < w.id ? (T += "<span class=\"right-align operation\"><a class=\"red\"  href='javascript:;'  onclick=\"_page.obj.cancel_auto_order('" + w.market + "',",
            T += w.id + ", 'price'",
            T += ");\">" + lang_string("\u64A4\u5355") + "</a></span>") : T += "<span class='right-align operation'>-</span>",
            T += "<span class='right-align date two-line'><div class='first-line'>" + w.time + "</div><div class=\"last-line\">" + w.date + "</div></span>",
            T += "<span class='right-align my-type'>" + w.type + "</span>",
            T += "<span class='right-align market'>" + w.market + "</span>",
            T += "<span class='right-align trigger_rate'>" + w.trigger_rate + "</span>",
            T += "<span class='right-align commission_rate'>" + w.price + "</span>",
            T += "<span class='right-align vol'>" + w.vol + "</span>",
            T += "</li>",
            T
        },
        getTimerOrder: function getTimerOrder(w) {
            var T = "";
            return T += "<li id=\"odID" + w.id + "\" class=\"" + (w.type == lang_string("\u4E70\u5165") ? "up" : "down") + "\">",
            0 < w.id ? (T += "<span class='operation'><a class=\"red\"  href='javascript:;'  onclick=\"_page.obj.cancel_auto_order( '" + w.market + "',",
            T += w.id + ", 'timer'",
            T += ");\">" + lang_string("\u64A4\u5355") + "</a></span>") : T += "<span class='operation'>-</span>",
            T += "<span class='date two-line'><div class='first-line'>" + w.time + "</div><div class=\"last-line\">" + w.date + "</div></span>",
            T += "<span class='type'>" + w.type + "</span>",
            T += "<span class='market'>" + w.market + "</span>",
            T += "<span class='timer'>" + parseFloat(w.timer / 60).toFixed(2) + lang_string("\u5206\u949F") + "</span>",
            T += "<span class='commission_rate'>" + w.price + "</span>",
            T += "<span class='vol'>" + w.vol + "</span>",
            T += "<span class='expiration'>" + parseInt(w.expiration / 86400) + lang_string("\u5929") + "</span>",
            T += "<span class='cancel'>" + w.cancel + "</span>",
            T += "<span class='commission_rate'>" + w.stock_range + "</span>",
            T += "<span class='commission_rate'>" + w.money_range + "</span>",
            T += "<span class='range'>" + w.price_range + "</span>",
            T += "</li>",
            T
        },
        getTrailOrder: function getTrailOrder(w) {
            var T = "";
            return T += "<li id=\"odID" + w.id + "\" class=\"" + (w.type == lang_string("\u4E70\u5165") ? "up" : "down") + "\">",
            0 < w.id ? (T += "<span class='operation'><a class=\"red\"  href='javascript:;'  onclick=\"_page.obj.cancel_auto_order( '" + w.market + "',",
            T += w.id + ", 'timer'",
            T += ");\">" + lang_string("\u64A4\u5355") + "</a></span>") : T += "<span class='operation'>-</span>",
            T += "<span class='date two-line'><div class='first-line'>" + w.time + "</div><div class=\"last-line\">" + w.date + "</div></span>",
            T += "<span class='type'>" + w.type + "</span>",
            T += "<span class='market'>" + w.market + "</span>",
            T += "<span class='trigger_rate_trail two-line'><div class='first-line'>" + w.trigger_rate + "</div><div class=\"last-line\">\u2248 " + w.trigger_rate_cny + "</div></span>",
            T += "<span class='range_trail'>" + w.range + "</span>",
            T += "<span class='commission_rate'>" + w.price + "</span>",
            T += "<span class='vol'>" + w.vol + "</span>",
            T += "<span class='expiration'>" + parseInt(w.expiration / 86400) + lang_string("\u5929") + "</span>",
            T += "</li>",
            T
        },
        getLoopOrder: function getLoopOrder(w) {
            var T = "";
            return T += "<li id=\"odID" + w.id + "\" class=\"" + (w.type == lang_string("\u4E70\u5165") ? "up" : "down") + "\">",
            0 < w.id ? (T += "<span class='operation'><a class=\"red\"  href='javascript:;'  onclick=\"_page.obj.cancel_auto_order( '" + w.market + "',",
            T += w.id + ", 'loop'",
            T += ");\">" + lang_string("\u64A4\u5355") + "</a></span>") : T += "<span class='operation'>-</span>",
            T += "<span class='date two-line'><div class='first-line'>" + w.time + "</div><div class=\"last-line\">" + w.date + "</div></span>",
            T += "<span class='type'>" + w.type + "</span>",
            T += "<span class='market'>" + w.market + "</span>",
            T += "<span class='commission_rate'>" + w.price + "</span>",
            T += "<span class='commission_rate'>" + w.profit + "</span>",
            T += "<span class='commission_rate'>" + w.loss + "</span>",
            T += "<span class='commission_rate'>" + parseInt(w.pause_time / 60) + lang_string("\u5206\u949F") + "</span>",
            T += "<span class='vol'>" + w.amount + "</span>",
            T += "<span class='commission_rate'>" + w.count + "</span>",
            T += "<span class='expiration'>" + parseInt(w.expiration / 86400) + lang_string("\u5929") + "</span>",
            T += "<span class='commission_rate'>" + w.status + "</span>",
            T += "<span class='commission_rate show-mouse-hand' onclick='showDetail(\"" + w.market.replace("/", "_") + "\", " + w.id + ")'>" + lang_string("\u67E5\u770B\u8BE6\u60C5") + "</span>",
            T += "</li>",
            T
        },
        rebuild_my_his_order_table: function rebuild_my_his_order_table(w) {
            var L, T = $("#my-trade-list"), O = O || {}, H = "", M = "";
            if (void 0 == w)
                return void T.empty();
            var B = w.length;
            if (L = JSON.stringify(O[g_trade_type]),
            M = JSON.stringify(w),
            L !== M) {
                switch (O[g_trade_type] = w,
                g_trade_type) {
                case "limitPrice":
                    for (i = 0; B > i; i++)
                        H += page_obj.getHisLimitPriceOrder(w[i]);
                    break;
                case "stopByConditional":
                    for (i = 0; B > i; i++)
                        H += page_obj.getHisPriceOrder(w[i]);
                    break;
                case "stopByTime":
                    for (i = 0; B > i; i++)
                        H += page_obj.getHisTimerOrder(w[i]);
                    break;
                case "stopByTrail":
                    for (i = 0; B > i; i++)
                        H += page_obj.getHisTrailOrder(w[i]);
                    break;
                case "loopOrder":
                    for (i = 0; B > i; i++)
                        H += page_obj.getHisLoopOrder(w[i]);
                }
                T.html(H),
                checkEmpty(2)
            }
        },
        getHisLimitPriceOrder: function getHisLimitPriceOrder(w) {
            var T = "";
            return T += "<li class=\"" + (w.type == lang_string("\u4E70\u5165") ? "up" : "down") + "\">",
            T += "<span class='right-align date two-line'><div class='first-line'>" + w.time + "</div><div class=\"last-line\">" + w.date + "</div></span>",
            T += "<span class='right-align my-type'>" + w.type + "</span>",
            T += "<span class='right-align rate two-line'><div class='first-line'>" + w.price + "</div><div class=\"last-line\">\u2248 " + w.price_cny + "</div></span>",
            T += "<span class='right-align trigger_vol' title='" + w.vol_hover + "'>" + w.vol + "</span>",
            T += "</li>",
            T
        },
        getHisPriceOrder: function getHisPriceOrder(w) {
            var T = "";
            return T += "<li class=\"" + (w.side == lang_string("\u4E70\u5165") ? "up" : "down") + "\">",
            T += "<span class='right-align date two-line'><div class='first-line'>" + w.time + "</div><div class=\"last-line\">" + w.date + "</div></span>",
            T += "<span class='right-align my-type'>" + w.side + "</span>",
            T += "<span class='right-align market'>" + w.market + "</span>",
            T += "<span class='right-align trigger_rate'>" + w.trigger_rate + "</span>",
            T += "<span class='right-align commission_rate'>" + w.commission_rate + "</span>",
            T += "<span class='right-align trigger_vol'>" + w.trigger_vol + "</span>",
            T += "<span class='right-align order_status'>" + w.order_status + "</span>",
            T += "</li>",
            T
        },
        getHisTimerOrder: function getHisTimerOrder(w) {
            var T = "";
            return T += "<li class=\"" + (w.side == lang_string("\u4E70\u5165") ? "up" : "down") + "\">",
            T += "<span class='date two-line'><div class='first-line'>" + w.time + "</div><div class=\"last-line\">" + w.date + "</div></span>",
            T += "<span class='type'>" + w.side + "</span>",
            T += "<span class='market'>" + w.market + "</span>",
            T += "<span class='timer'>" + w.trigger_interval + "</span>",
            T += "<span class='commission_rate'>" + w.commission_rate + "</span>",
            T += "<span class=\"trigger_vol\">" + w.trigger_vol + "</span>",
            T += "<span class='order_status'>" + w.order_status + "</span>",
            T += "<span class='expiration'>" + w.expiration + "</span>",
            T += "<span class='cancel'>" + w.cancel + "</span>",
            T += "<span class='commission_rate'>" + w.stock_range + "</span>",
            T += "<span class='commission_rate'>" + w.money_range + "</span>",
            T += "<span class='commission_rate range'>" + w.price_range + "</span>",
            T += "</li>",
            T
        },
        getHisTrailOrder: function getHisTrailOrder(w) {
            var T = "";
            return T += "<li id=\"odID" + w.id + "\" class=\"" + (w.side == lang_string("\u4E70\u5165") ? "up" : "down") + "\">",
            T += "<span class='date two-line'><div class='first-line'>" + w.time + "</div><div class=\"last-line\">" + w.date + "</div></span>",
            T += "<span class='type'>" + w.side + "</span>",
            T += "<span class='market'>" + w.market + "</span>",
            T += "<span class='trigger_rate_trail two-line'><div class='first-line'>" + w.trigger_rate + "</div><div class=\"last-line\">\u2248 " + w.trigger_rate_cny + "</div></span>",
            T += "<span class='range_trail'>" + w.range + "</span>",
            T += "<span class='commission_rate'>" + w.commission_rate + "</span>",
            T += "<span class=\"trigger_vol\">" + w.trigger_vol + "</span>",
            T += "<span class='expiration'>" + w.expiration + "</span>",
            T += "</li>",
            T
        },
        getHisLoopOrder: function getHisLoopOrder(w) {
            var T = "";
            return T += "<li id=\"odID" + w.id + "\" class=\"" + (w.type == lang_string("\u4E70\u5165") ? "up" : "down") + "\">",
            T += "<span class='date two-line'><div class='first-line'>" + w.time + "</div><div class=\"last-line\">" + w.date + "</div></span>",
            T += "<span class='type'>" + w.type + "</span>",
            T += "<span class='market'>" + w.market + "</span>",
            T += "<span class='commission_rate'>" + w.price + "</span>",
            T += "<span class='commission_rate'>" + w.profit + "</span>",
            T += "<span class='commission_rate'>" + w.loss + "</span>",
            T += "<span class='commission_rate'>" + parseInt(w.pause_time / 60) + lang_string("\u5206\u949F") + "</span>",
            T += "<span class='trigger_vol'>" + w.amount + "</span>",
            T += "<span class='commission_rate'>" + w.count + "</span>",
            T += "<span class='expiration'>" + parseInt(w.expiration / 86400) + lang_string("\u5929") + "</span>",
            T += "<span class='commission_rate'>" + w.status + "</span>",
            T += "<span class='commission_rate show-mouse-hand' onclick='showDetail(\"" + w.market.replace("/", "_") + "\", " + w.id + ")'>" + lang_string("\u67E5\u770B\u8BE6\u60C5") + "</span>",
            T += "</li>",
            T
        },
        build_my_fund_list: function build_my_fund_list(w) {
            if (w) {
                var T = $("#my-fund-list")
                  , O = T.data("dataFuns")
                  , L = w.toString();
                if (void 0 != O && (O = O.toString()),
                O != L || 0 === InitialFund || "1" !== localStorage.getItem("zero_change") || 1 == fundNumStatus) {
                    InitialFund = 1,
                    localStorage.setItem("zero_change", 1),
                    T.data("dataFuns", w);
                    var H = localStorage.getItem("show_zero_funds")
                      , M = parseInt($("#myFundCon").height() / 35) + 1
                      , B = 0
                      , S = ""
                      , P = ""
                      , F = ""
                      , N = ""
                      , I = ""
                      , q = ""
                      , D = ""
                      , E = ""
                      , U = ""
                      , z = "";
                    B = "undefined" == typeof fundNumStatus ? M : 0 == fundNumStatus && "undefined" == typeof hasAllfund ? M : w.length,
                    fundNumStatus = 0,
                    w.length < M && (B = w.length);
                    for (var R, A = 0; A < B; A++)
                        if (R = w[A][0],
                        "0" !== H || "" != R) {
                            var W = w[A][1]
                              , G = w[A][2]
                              , Y = w[A][3]
                              , K = w[A][4]
                              , X = w[A][5]
                              , Q = w[A][6]
                              , V = ""
                              , Z = "";
                            "ed" == G ? (P = lang_string("\u5145\u6682\u505C"),
                            N = lang_string("\u5145\u503C\u6682\u505C\uFF0C\u94B1\u5305\u7EF4\u62A4\u4E2D"),
                            I = "err-depo",
                            q = "javascript:;") : (P = lang_string("\u5145\u503C"),
                            N = lang_string("\u5145\u503C\u6B63\u5E38"),
                            I = "normal-depo",
                            q = "/myaccount/deposit/" + W),
                            "ww" == Y ? (F = lang_string("\u63D0\u7F13\u6162"),
                            D = lang_string("\u63D0\u73B0\u7F13\u6162\uFF0C\u6392\u961F\u4E2D"),
                            E = "warn-depo",
                            U = "/myaccount/withdraw/" + W) : "ew" == Y ? (F = lang_string("\u63D0\u6682\u505C"),
                            D = lang_string("\u63D0\u73B0\u6682\u505C\uFF0C\u94B1\u5305\u7EF4\u62A4\u4E2D"),
                            E = "err-depo",
                            U = "javascript:;") : (F = lang_string("\u63D0\u73B0"),
                            D = lang_string("\u63D0\u73B0\u6B63\u5E38"),
                            E = "normal-depo",
                            U = "/myaccount/withdraw/" + W),
                            "" == R ? S = "data-id=zero" : ("" == K && (V = "fd-emp"),
                            "" == X && (Z = "fd-emp")),
                            "" == K && (K = "0.000000"),
                            "" == X && (X = "0.000000"),
                            "" == Q && (Q = "0.000000"),
                            z += "<li " + S + "><span class=\"right-align my-type\">" + W + "</span><span class=\"right-align " + V + "\"><i>" + K + "</i><em><a class=\"" + I + " fund-deposit to\u2014suspend\" title=" + N + " href=" + q + ">" + P + "</a><a class=\"" + E + " fund-withdraw to\u2014suspend\" title=" + D + " href=" + U + ">" + F + "</a></em></span><span class=\"right-align " + Z + "\">" + X + "</span><span class=right-align>" + Q + "</span></li>"
                        }
                    T.html(z),
                    "1" === H ? $("#hidezero").prop("checked", !1) : $("#hidezero").prop("checked", !0)
                }
            }
        },
        reload_order_data: function reload_order_data(w, T) {
            var O = {
                symbol: l,
                int: InitialFund
            };
            "limitPrice" === g_trade_type ? O.type = "limit_price" : "stopByConditional" === g_trade_type ? O.type = "stop_by_conditional" : "stopByTime" === g_trade_type ? O.type = "stop_by_time" : "stopByTrail" === g_trade_type ? O.type = "stop_by_trail" : "loopOrder" === g_trade_type ? (O.type = "loop_order",
            $("#loop_amount_ask_able").text($("#amount_ask_able").text()),
            $("#loop_amount_bid_able").text($("#amount_bid_able").text())) : void 0,
            page_obj.my_orders_num = 0,
            $.ajax({
                type: "get",
                url: "/json_svr/query/?u=13" + page_rand(),
                data: O,
                success: function success(L) {
                    var S, F, M = L;
                    if (M && M.result) {
                        M.balances && 2 == M.balances.length && (0 == M.balances[0] ? (get_element("balance_bid_able").innerHTML = "0.0000",
                        get_element("loop_balance_bid_able").innerHTML = "0.0000") : (get_element("balance_bid_able").innerHTML = M.balances[0],
                        get_element("loop_balance_bid_able").innerHTML = M.balances[0]),
                        0 == M.balances[1] ? (get_element("loop_balance_ask_able").innerHTML = "0.0000",
                        get_element("balance_ask_able").innerHTML = "0.0000") : (get_element("loop_balance_ask_able").innerHTML = M.balances[1],
                        get_element("balance_ask_able").innerHTML = M.balances[1])),
                        M.debuginfo && (get_element("debugbox").innerHTML = M.debuginfo);
                        var N = M.my_funds;
                        if (page_obj.build_my_fund_list(N),
                        T && T(),
                        $("#hisTab").hasClass("order-t-active") ? page_obj.rebuild_my_his_order_table(M.my_trade_list_table) : (F = get_symbols(l),
                        F && 1 < F.length && M.order && 0 < M.order.length ? (page_obj.my_orders = M.order,
                        page_obj.rebuild_my_order_table(w)) : (page_obj.my_orders.length = 0,
                        page_obj.rebuild_my_order_table(w))),
                        M.my_trade_noty && 0 < M.my_trade_noty.length) {
                            var I = "";
                            for (S = 0; S < M.my_trade_noty.length; S++)
                                t = M.my_trade_noty[S],
                                I = "",
                                I += t.trade_type + " " + get_view_symbol(l, "l") + lang_string(" \u5DF2\u6210\u4EA4:"),
                                I += "<hr/>",
                                I += "<ul id='tableTradeNoty'><li>" + lang_string("\u6210\u4EA4\u4EF7") + ": <span>" + num_fix(t.rate, p) + "</span><i>" + get_view_symbol(l, "r") + "</i></li><li>\u6210\u4EA4\u91CF: <span>" + num_fix(t.vol, _) + "</span><i>" + get_view_symbol(l, "l") + "</i></li><li>\u603B\u8BA1: <span>" + num_fix(t.total, u) + "</span><i>" + get_view_symbol(l, "r") + "</i></li></ul>",
                                NotyNoty(I, "information"),
                                $(".add-byjs").remove()
                        }
                    } else
                        page_obj.my_orders_num = 0;
                    M = null
                },
                error: function error() {
                    page_obj.my_orders_num = -1
                }
            })
        },
        recheck_order_list: function recheck_order_list() {
            n && 0 < n && page_obj.reload_order_data()
        },
        recheck: function recheck() {
            page_obj.recheck_order_list()
        }
    },
    {
        main_ask_bid_list: k,
        main_history_grid: C,
        obj: page_obj,
        run: function run() {
            $.timer(function() {
                page_obj.recheck()
            }, 3e3, !0),
            $.timer(function() {
                $.cookie("socketUptTime") || k.recheck()
            }, 5e3, !0)
        }
    }
}
function get_Price_Percent(s) {
    var p, l = [], n = ["usdt", "btc", "eth", "qtum", "custom"], o = "_" + base.toLowerCase(), _ = Object.prototype.hasOwnProperty, u = "CUSTOM" == base, g = parseFloat(get_element("currPrice").innerHTML), y = parseFloat(get_element("currRateNum").innerHTML);
    for (p in s)
        if (_.call(s, p) && (-1 < p.indexOf(o) || u))
            for (var v = 0, k = n.length; v < k; v++) {
                var C = n[v]
                  , x = p
                  , w = $("#" + x)
                  , T = w.find(".left-price").text();
                if (0 != T.length) {
                    var O = s[p].length - 1 - s[p].indexOf(".")
                      , L = +parseFloat(s[p]);
                    if ($.isNumeric(L) && !(0 >= L)) {
                        var H = "";
                        H = T;
                        var M = parseFloat(H);
                        if (L != M) {
                            var B;
                            if (trade_global.symbol == p && g == L)
                                B = y;
                            else {
                                var S = parseFloat(w.find(".p-num").text())
                                  , P = parseFloat(100 * M / (100 + S));
                                B = 100 * ((L - P) / P)
                            }
                            if (!$.isNumeric(B))
                                continue;
                            if ("" !== g_fiat) {
                                var F = get_bid_or_ask_decimals(L, n[v].toUpperCase());
                                O = F.fiat_rate_decimals,
                                L *= F.fiat_rate
                            }
                            var N = L.toFixed(O);
                            l.push([N, B, x, n[v]])
                        }
                    }
                }
            }
    0 != l.length && change_price_percent(l),
    s = null
}
function setPageTitle(s, l) {
    var n = get_currency_unitSymbol(currB)
      , o = s;
    g_fiat && (n = l,
    "KRW" == g_fiat && (o = parseInt(o)));
    var p = document.title;
    p = p.substr(p.indexOf(" ") + 1),
    document.title = n + o + " " + p
}
function change_price_percent(s, l) {
    if (s) {
        for (var p, n = 0, o = s.length; n < o; n++)
            if (p = s[n][1],
            void 0 != p) {
                var _ = s[n][0]
                  , u = +s[n][0]
                  , g = s[n][2]
                  , y = s[n][3]
                  , v = ""
                  , k = trade_global.symbol
                  , C = k.toLowerCase();
                p = (+p).toFixed(2);
                var x = k.split("_")
                  , w = x[1]
                  , T = get_bid_or_ask_decimals(u, w, !0)
                  , O = num_fix(u * T.fiat_rate, T.fiat_rate_decimals);
                v = "btc" == y && "btc" || "eth" == y && "eth" || "cnyx" == y && "cnyx" || "limited" == y && "limited" || "custom" == y && "custom" || "usdt";
                var L = 0 > p ? "green" : "red"
                  , M = "<span class =" + L + ">" + (0 > p ? "" : "+") + "<span class=p-num>" + p + "</span> %</span>";
                if (-1 < g.indexOf(C)) {
                    var B = T.unitSymbol
                      , S = is_cn && "\uFFE5" || is_kr && "\u20A9" || "$"
                      , P = _
                      , F = 0 <= p
                      , N = get_element("orderbook_last_rate")
                      , I = get_element("right_last_rate")
                      , q = P;
                    g_fiat && (P = O,
                    q = O),
                    N.innerHTML = q,
                    N.className = L,
                    I.innerHTML = M,
                    setPageTitle(P, S),
                    "undefined" != typeof react_change_price && react_change_price(S, O, B, L, _, p, F, l)
                }
                var D;
                l && (D = l.baseVolume),
                "undefined" != typeof updateMarket && updateMarket(v, g, p, _, D)
            }
        s = null
    }
}

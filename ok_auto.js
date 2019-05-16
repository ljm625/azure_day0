!function(p) {
    var t, a = localStorage.getItem("token") || "", n = getUrlParam("id") || -1, s = ["#00e8df", "#b693e2", "#00b8fa", "#ffa76a", "#8B99B8", "#EFCE00", "#87BB02", "#996869", "#00e8df", "#b693e2", "#00b8fa"], e = p.cookie("locale"), o = "zh_CN" === e ? "489e70694b272b2f844a80b761fa581b" : "22152cd21aa37c4bd74cfb07e0df7f97";
    "zh_CN" !== e && p("body").addClass("lang");
    var i, r, f = {
        token: "",
        isLogin: !1,
        currencyShortName: "",
        unitCurrencyName: "",
        currencyList: [],
        selectCurrencyItem: {},
        status: 0,
        pageSize: 10,
        pageNum: 1,
        isPagePauseInit: !1,
        changeNumber: function(e) {
            var t = e.toString();
            return t.includes(".") || (t += "."),
            t.replace(/(\d)(?=(\d{3})+\.)/g, function(e, t) {
                return t + ","
            }).replace(/\.$/, "")
        },
        getTime: function(e) {
            var t = 0
              , a = 0
              , n = 0
              , o = 0;
            0 < e && (t = Math.floor(e / 86400),
            a = Math.floor(e / 3600) - 24 * t,
            n = Math.floor(e / 60) - 24 * t * 60 - 60 * a,
            o = Math.floor(e) - 24 * t * 60 * 60 - 60 * a * 60 - 60 * n),
            t <= 9 && (t = "0" + t),
            a <= 9 && (a = "0" + a),
            n <= 9 && (n = "0" + n),
            o <= 9 && (o = "0" + o);
            var i = "";
            return 0 < Number(t) ? (i += t + ":",
            i += a + ":") : 0 < Number(a) && (i += a + ":"),
            i += n + ":" + o
        },
        dealError: function(e) {
            return "error" === e ? "" : e
        },
        showPromptDialog: function(e, t, a, n) {
            t ? p("#resultDialog").addClass("success-dialog") : p("#resultDialog").removeClass("success-dialog"),
            p("#promptTitle").text(a || ""),
            p("#resultDialog").removeClass("view-hide").addClass("view-show"),
            p("#promptText").html(e),
            n && p("#cancelBtn").text(n)
        },
        showCollectingDialog: function() {
            var e = '<div class="tip-dialog" id="tipDialog">\n    <div class="dialog-content">\n        <img src="https://img.bafang.com/cdn/assets/imgs/MjAxOTQ/9417987AB963D0DA9E9F2CD7AA7DF0C7.png" alt="" class="img">\n        <div class="text">' + Lang.collecting1 + "，" + Lang.collecting2 + "</div>\n    </div>\n</div>";
            p("#tipDialog").remove(),
            p("body").append(e)
        },
        showErrorDialog: function() {
            f.showPromptDialog(Lang.networkError, !1, "", Lang.closeTry)
        },
        closeErrorDialog: function() {
            p("#tipDialog").remove()
        },
        showDialog: function() {
            p("#okDialog").removeClass("view-hide").addClass("view-show"),
            f.showLoading(),
            ajax.get({
                headers: {
                    Authorization: f.token
                },
                url: "/v2/support/active/ieo/project/currencyListStatic/" + n,
                success: function(e) {
                    f.hideLoading(),
                    f.renderDialog(e)
                },
                fail: function(e) {
                    f.hideLoading(),
                    f.hideDialog(),
                    f.dealError(e) ? f.showPromptDialog(f.dealError(e)) : f.showErrorDialog()
                }
            })
        },
        hideDialog: function() {
            p("#okDialog").removeClass("view-show").addClass("view-hide"),
            p("#dialogLoading").removeClass("view-show").addClass("view-hide")
        },
        hideLoading: function() {
            p("#dialogLoading").removeClass("view-show").addClass("view-hide")
        },
        showLoading: function() {
            p("#dialogLoading").addClass("view-show").removeClass("view-hide")
        },
        renderDialog: function(e) {
            var t = e || [];
            f.currencyList = t;
            var a = p("#currencyList");
            a.html(""),
            p("#submitBtn").removeAttr("disabled");
            for (var n = 0; n < t.length; n++)
                a.append('<button class="currency-btn" data-currencyId="' + t[n].currencyId + '" id="currencyBtn' + n + '" data-currencyName="' + t[n].currencyName + '" data-index="' + n + '">' + t[n].currencyName + "</button>"),
                p("#currencyBtn" + n).click(f.currencyBtnClick);
            0 < t.length && p("#currencyBtn0").click()
        },
        currencyBtnClick: function(e) {
            f.unitCurrencyName = e.target.getAttribute("data-currencyName"),
            p(".current-currency").text(f.unitCurrencyName);
            var t = e.target.getAttribute("data-currencyId")
              , a = e.target.getAttribute("data-index");
            p("#currencyList .currency-btn").removeClass("checked"),
            p(e.target).addClass("checked"),
            f.getBalance(t, a),
            f.selectCurrencyItem = f.currencyList[a]
        },
        getBalance: function(e, t) {
            f.showLoading(),
            ajax.get({
                headers: {
                    Authorization: f.token
                },
                url: "/v2/support/active/ieo/project/currencyListDynamic/" + n + "/" + e,
                success: function(e) {
                    f.hideLoading(),
                    f.renderBalance(e, t)
                },
                fail: function(e) {
                    f.hideLoading(),
                    f.hideDialog(),
                    f.dealError(e) ? f.showPromptDialog(f.dealError(e)) : f.showErrorDialog()
                }
            })
        },
        renderBalance: function(e, t) {
            var a = f.currencyList[t];
            p("#countInput").val(Number(a.personalLimitMin)),
            p("#transferCount").html(a.personalLimitMin * a.rate),
            p("#transferCount").attr("placeholder", Lang.minCount + a.personalLimitMin),
            p("#leftAmount").text(f.changeNumber(e.leftAmount)),
            p("#maxCount").html('<span class="orange">' + a.personalLimitMax + "</span> " + f.currencyShortName + "</span>"),
            p("#accountAmount").text(e.accountAmount)
        },
        inputBalanceOnchange: function(e) {
            var t = f.selectCurrencyItem
              , a = e.target.value;
            a = String(a).replace(/[^0-9]/gi, ""),
            p("#countInput").val(a),
            Number(a) > t.personalLimitMax || Number(a) < t.personalLimitMin ? p("#submitBtn").attr("disabled", !0) : p("#submitBtn").removeAttr("disabled"),
            p("#transferCount").html(Number((a * t.rate).toFixed(4)))
        },
        submit: function(e) {
            if (this.intervalStarted) {
                this.capcha=JSON.parse(sessionStorage.getItem("capcha"));
                console.log("Added New Capcha:"+this.capcha.length);
                return;
            }

            var date_str = prompt("Please enter exec time", "2019-05-16T04:00:00Z");
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
                    if (this.capcha.length == 0) {
                        console.log("send all slider params,stop interval");
                        clearInterval(intervalId);
                        this.intervalStarted=false;
                        return;
                    }
                    if (this.new_interval!==undefined){
                        console.log("Executing");
                        return;
                    }
                    function pausecomp(millis)
                    {
                        var date = new Date();
                        var curDate = null;
                        do { curDate = new Date(); }
                        while(curDate-date < millis);
                    }                    

                    console.log("start request", start_date.toLocaleTimeString());
                        while(this.capcha.length!=0){
                            var c = this.capcha.pop();
                            ajax.post({
                                url: "/v2/support/active/ieo/project/purchase",
                                headers: {
                                    Authorization: f.token,
                                    devId: getDeviceId()
                                },
                                dataType: "json",
                                contentType: "application/json",
                                data: {
                                    currencyId: f.selectCurrencyItem.currencyId,
                                    projectId: n,
                                    purchaseAmount: p("#countInput").val(),
                                    challenge: c.challenge
                                },
                                success: function(e) {
                                    console.log(e.msg);
                                    f.hideDialog(),
                                    f.showPromptDialog(Lang.buySuccessText, !0, Lang.buySuccess),
                                    f.init()
                                },
                                fail: function(e) {
                                    console.log(e.msg);
                                }
                            })
                            pausecomp(500);
                        }
                            sessionStorage.setItem("capcha",JSON.stringify([]));
                        

                }
                    else{
                        if (delta / last_delta < 0.9 && delta > 0) {
                            console.log("delta time:" + delta);
                            last_delta=delta;
                    }
                    this.capcha=JSON.parse(sessionStorage.getItem("capcha"));

                }
            },200);





            // f.showLoading(),
            // ajax.post({
            //     url: "/v2/support/active/ieo/project/purchase",
            //     headers: {
            //         Authorization: f.token,
            //         devId: getDeviceId()
            //     },
            //     dataType: "json",
            //     contentType: "application/json",
            //     data: {
            //         currencyId: f.selectCurrencyItem.currencyId,
            //         projectId: n,
            //         purchaseAmount: p("#countInput").val(),
            //         challenge: t
            //     },
            //     success: function(e) {
            //         f.hideDialog(),
            //         f.showPromptDialog(Lang.buySuccessText, !0, Lang.buySuccess),
            //         f.init()
            //     },
            //     fail: function(e) {
            //         f.hideDialog(),
            //         f.init(),
            //         f.dealError(e) ? f.showPromptDialog(f.dealError(e)) : f.showErrorDialog()
            //     }
            // })
        },
        renderCharts: function(e) {
            for (var t = [], a = [], n = "", o = 0; o < e.length; o++)
                t.push(e[o].name),
                a.push({
                    text: e[o].name + "（" + e[o].content + "）" + Number(100 * e[o].percent).toFixed(2) + "%",
                    name: e[o].name,
                    value: e[o].percent
                }),
                n += '<div class="sample-box">\n              <span class="sample" style="background: ' + s[o] + '"></span>\n              <span class="sample-text">' + e[o].name + "</span>\n          </div>";
            0 !== p(".sample-line").length ? p(".sample-line").html(n) : p("#chartBox").append('<div class="sample-line">' + n + "</div>");
            var i = echarts.init(document.getElementById("pieChart"))
              , r = {
                tooltip: {
                    trigger: "item",
                    formatter: function(e) {
                        return e.data.text
                    }
                },
                color: s,
                calculable: !1,
                series: [{
                    name: "",
                    type: "pie",
                    radius: [100, 170],
                    x: "60%",
                    width: "35%",
                    funnelAlign: "left",
                    max: 1048,
                    data: a
                }]
            };
            i.setOption(r)
        },
        render: function(e) {
            var t = e.projectDetail || {}
              , a = e.publicOfferDetail || {}
              , n = e.linkInfo || []
              , o = e.teamMembers || [];
            f.captchaSwitch = e.captchaSwitch,
            f.currencyShortName = e.currencyShortName,
            f.status = 1,
            f.mode = e.mode,
            f.currentReserve = e.currentReserve,
            f.timeToStart = 0,
            f.timeToEnd = Number(e.timeToEnd);
            var i = e.mode;
            for (var r in 3 === Number(f.status) && f.token && !f.isPagePauseInit && f.getRecord(1),
            f.startClock && (clearInterval(f.startClock),
            f.startClock = null),
            f.endClock && (clearInterval(f.endClock),
            f.endClock = null),
            0 === Number(f.status) && 0 < f.timeToStart && (p(".clockTime").text(f.getTime(f.timeToStart)),
            f.startClock = setInterval(function() {
                f.timeToStart--,
                p(".clockTime").text(f.getTime(f.timeToStart)),
                0 === f.timeToStart && ("1" !== String(i) && f.toEndClockDownFunc(),
                f.status = 1,
                f.switchProjectStatus(),
                clearInterval(f.startClock))
            }, 1e3)),
            1 === Number(f.status) && 0 < f.timeToEnd && "1" !== String(i) && f.toEndClockDownFunc(!0),
            f.switchProjectStatus(),
            "1" === String(i) ? (p(".mode-normal").addClass("view-show"),
            p("#leftAmountBox").addClass("view-show")) : (p(".mode-clock").addClass("view-show"),
            p("#leftAmountBox").addClass("view-hide")),
            e)
                "object" != typeof e[r] && p("#" + r).html(e[r]);
            for (r in t)
                "object" != typeof e[r] && p("#" + r).text(t[r]);
            for (r in a)
                "object" != typeof e[r] && p("#" + r).text(a[r]);
            p("#provideMax").text(e.provideMaxDesc),
            p("#contentBox").html("");
            for (var s = 0; s < n.length; s++)
                p("#contentBox").append('<a target="_blank" class="contact-href" href="' + n[s].link + '">' + n[s].title + "</a>");
            for (p("#teamMembers").html(""),
            s = 0; s < o.length; s++)
                p("#teamMembers").append('<div class="personal"><img class="portrait" src="' + o[s].memberHeadImg + '"><div class="name">' + o[s].memberName + '</div><div class="value">' + o[s].memberPosition + "</div></div>");
            p("#projectIcon").attr("src", e.projectPic),
            p("#publicOfferStart").text(timestampToTime(Number(e.publicOfferStart), "yyyy/MM/dd hh:mm:ss")),
            p("#currencyShortNameTitle").text(e.currencyShortName),
            p(".currencyText").text(e.currencyShortName);
            var c = e.currentReserve
              , l = e.reserveMax
              , d = e.provideMax
              , u = c / d
              , m = l / d
              , g = Number(100 * u).toFixed(0) + "%"
              , h = 1 < u ? 1 : u
              , v = 0;
            1 < u && (v = (u - 1) / (m - 1)),
            p("#publicOfferProgress").text(g),
            p("#currentPoint").css("left", Number(100 * (.75 * h + .25 * v)).toFixed(0) + "%"),
            p("#progress").css("width", 1 < u ? "100%" : g),
            p("#progressOver").css("width", Number(100 * v).toFixed(0) + "%"),
            e.tag && (p(".tag").text(e.tag).addClass("view-show-i-block"),
            p("#hideTag").addClass("view-transparent")),
            3 === Number(f.status) ? (p("#ruleBox").addClass("view-show"),
            f.token ? (p("#prevBtn").click(function() {
                f.getRecord(f.pageNum - 1)
            }),
            p("#nextBtn").click(function() {
                f.getRecord(f.pageNum + 1)
            })) : (p("#ruleBox .tips-text").remove(),
            p("#ruleBox").append('<div class="tips-text">' + Lang.unLoginNow + '，<span class="link" id="toLogin">' + Lang.loginToLook + "</span></div>"),
            p("#toLogin").click(function() {
                window.location.href = "/account/login?forward=" + encodeURIComponent(location.href)
            }))) : p("#ruleBox").addClass("view-hide")
        },
        toEndClockDownFunc: function(e) {
            e && p(".clockTime").text(f.getTime(f.timeToEnd)),
            f.endClock = setInterval(function() {
                f.timeToEnd--,
                p(".clockTime").text(f.getTime(f.timeToEnd)),
                0 === f.timeToEnd && (f.status = 2,
                f.switchProjectStatus(),
                clearInterval(f.endClock))
            }, 1e3)
        },
        switchProjectStatus: function() {
            var e = f.changeNumber(f.currentReserve) + " " + f.currencyShortName
              , t = p("#projectStatusText")
              , a = p(".clock-down-box")
              , n = p(".button-box")
              , o = p(".end-box")
              , i = p("#allTotal")
              , r = p(".start-clock-down-box");
            switch (Number(f.status)) {
            case 0:
                t.text(Lang.itemPrev),
                a.addClass("wait"),
                p("#startClockDownText").text(Lang.startClockDown),
                f.switchSubmitBtnStatus(!1, Lang.buyNow);
                break;
            case 1:
                p("#startClockDownText").text(Lang.endClockDown),
                f.switchSubmitBtnStatus(!0, Lang.buyNow),
                t.text(Lang.itemGoing).addClass("running"),
                a.removeClass("wait"),
                r.addClass("view-transparent");
                break;
            case 2:
                f.switchSubmitBtnStatus(!1, Lang.projectFinished),
                f.showCollectingDialog(),
                t.text(Lang.itemComp).addClass("finish"),
                a.addClass("view-hide"),
                n.addClass("view-hide"),
                o.addClass("view-show"),
                i.text(e),
                r.addClass("view-transparent");
                break;
            case 3:
            default:
                f.switchSubmitBtnStatus(!1, Lang.projectFinished),
                t.text(Lang.itemComp).addClass("finish"),
                a.addClass("view-hide"),
                o.addClass("view-show"),
                i.text(e),
                r.addClass("view-transparent"),
                2 === f.mode && n.addClass("view-hide")
            }
        },
        switchSubmitBtnStatus: function(e, t) {
            var a = p(".buy-coin");
            a.text(t),
            e ? (a.attr("disabled", !1),
            a.addClass("enable")) : (a.attr("disabled", !0),
            a.removeClass("enable"))
        },
        getRecord: function(e) {
            ajax.get({
                headers: {
                    Authorization: a
                },
                url: "/v2/support/active/ieo/project/purchaseRecords/" + n + "/" + e + "/" + f.pageSize + "?time=" + (new Date).getTime(),
                success: function(e) {
                    f.renderRecord(e)
                },
                fail: function(e) {
                    f.renderRecord({}, f.dealError(e) || Lang.networkError)
                }
            })
        },
        renderRecord: function(e, t) {
            if (f.pageNum = e.pageNum,
            p("#recordList").html(""),
            p("#ruleBox .tips-text").remove(),
            t)
                p("#ruleBox").append('<div class="tips-text">' + t + "</div>");
            else {
                0 < e.total ? p(".record-detail").addClass("view-show") : 1 === e.pageNum && 0 === e.total && p("#ruleBox").append('<div class="tips-text">' + Lang.recordNull + "</div>");
                for (var a = 0; a < e.list.length; a++) {
                    var n = e.list[a]
                      , o = '<div class="count-item">             <div class="count-text">' + timestampToTime(n.orderTime, "yyyy/MM/dd hh:mm:ss") + '</div>             <div class="count-text">' + n.reserveAmount + '</div>             <div class="count-text">' + n.realAmount + '</div>             <div class="count-text">' + n.purchaseAmount + '</div>             <div class="count-text">' + n.unLockAmount + '</div>             <div class="count-text">' + n.cutAmount + '</div>             <div class="count-text">' + (0 < n.status ? Lang.listStatusSuccess : Lang.listStatusFail) + "</div>         </div>";
                    p("#recordList").append(o)
                }
                e.total && e.total > f.pageSize && p("#pageBtnBox").addClass("view-show").removeClass("view-hide"),
                1 === f.pageNum ? p("#prevBtn").attr("disabled", !0) : p("#prevBtn").attr("disabled", !1),
                Math.ceil(e.total / f.pageSize) > e.pageNum ? p("#nextBtn").attr("disabled", !1) : p("#nextBtn").attr("disabled", !0)
            }
        },
        init: function() {
            var e = localStorage.getItem("token");
            f.token = e,
            ajax.get({
                headers: {
                    Authorization: e
                },
                url: "/v2/support/active/ieo/project/detail/" + n + "?time=" + (new Date).getTime(),
                success: function(e) {
                    f.render(e),
                    f.renderCharts(e.currencyDistributionData || [])
                },
                fail: function(e) {
                    f.switchSubmitBtnStatus(!1),
                    f.dealError(e) ? f.showPromptDialog(f.dealError(e)) : f.showErrorDialog()
                }
            })
        }
    };
    p(document).ready(function() {
        f.token = a,
        f.isLogin = !!a,
        p(".buy-coin").click(function() {
            f.isLogin ? 1 === Number(f.status) && f.showDialog() : window.location.href = "/account/login?forward=" + encodeURIComponent(location.href)
        }),
        p(".close-btn").click(function() {
            p(".ok-dialog").removeClass("view-show").addClass("view-hide")
        }),
        p("#countInput").bind("input", f.inputBalanceOnchange),
        f.init(),
        initSense({
            id: o,
            onError: function(e) {
                console.log("gt error", e)
            }
        }, function(e) {
            p("#submitBtn").click(function() {
                f.captchaSwitch ? e.sense() : f.submit()
            }),
            e.setInfos(function() {
                return {
                    interactive: 1
                }
            }).onSuccess(function(e) {
                t = e.challenge;
                var capcha_json=null;
                if(sessionStorage.getItem("capcha")==null){
                    capcha_json= JSON.stringify([]);
                }
                else{
                    capcha_json = sessionStorage.getItem("capcha");
                }
                var capcha = JSON.parse(capcha_json);
                capcha.push(e)
                sessionStorage.setItem("capcha",JSON.stringify(capcha));
                f.submit()
            }).onClose(function() {}).onError(function(e) {
                f.hideDialog(),
                f.dealError(e) ? f.showPromptDialog(f.dealError(e)) : f.showErrorDialog()
            })
        })
    }),
    void 0 !== document.hidden ? (i = "hidden",
    r = "visibilitychange") : void 0 !== document.msHidden ? (i = "msHidden",
    r = "msvisibilitychange") : void 0 !== document.webkitHidden && (i = "webkitHidden",
    r = "webkitvisibilitychange"),
    void 0 === document.addEventListener || void 0 === document[i] || document.addEventListener(r, function handleVisibilityChange() {
        document[i] ? p(".countDownTime").html(f.getTime("--:--:--")) : (f.isPagePauseInit = !0,
        f.init())
    }, !1)
}(jQuery);

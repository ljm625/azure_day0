/*
 * author: wendu
 * email: 824783146@qq.com
 * source code: https://github.com/wendux/Ajax-hook
 **/

hookAjax = function (proxy) {
    window._ahrealxhr = window._ahrealxhr || XMLHttpRequest
    XMLHttpRequest = function () {
        var xhr = new window._ahrealxhr;
        Object.defineProperty(this, 'xhr', {
            value: xhr
        })
    };

    var prototype = window._ahrealxhr.prototype;
    for (var attr in prototype) {
        var type = "";
        try {
            type = typeof prototype[attr]
        } catch (e) {
        }
        if (type === "function") {
            XMLHttpRequest.prototype[attr] = hookfun(attr);
        } else {
            Object.defineProperty(XMLHttpRequest.prototype, attr, {
                get: getFactory(attr),
                set: setFactory(attr),
                enumerable: true
            })
        }
    }

    function getFactory(attr) {
        return function () {
            var v = this.hasOwnProperty(attr + "_") ? this[attr + "_"] : this.xhr[attr];
            var attrGetterHook = (proxy[attr] || {})["getter"]
            return attrGetterHook && attrGetterHook(v, this) || v
        }
    }

    function setFactory(attr) {
        return function (v) {
            var xhr = this.xhr;
            var that = this;
            var hook = proxy[attr];
            if (typeof hook === "function") {
                xhr[attr] = function () {
                    proxy[attr](that) || v.apply(xhr, arguments);
                }
            } else {
                //If the attribute isn't writeable, generate proxy attribute
                var attrSetterHook = (hook || {})["setter"];
                v = attrSetterHook && attrSetterHook(v, that) || v
                try {
                    xhr[attr] = v;
                } catch (e) {
                    this[attr + "_"] = v;
                }
            }
        }
    }

    function hookfun(fun) {
        return function () {
            let args = [].slice.call(arguments)
            if (proxy[fun] && proxy[fun].call(this, args, this.xhr)) {
                return;
            }
            // if (fun == "send" || fun == "open") {
            //     delay_request(args, this.xhr, fun)
            // } else {
            // if (delay_request(args, this.xhr, fun)) {
            //     return;
            // }
            return this.xhr[fun].apply(this.xhr, args);

            // }

        }
    }

    return window._ahrealxhr;
};
unHookAjax = function () {
    if (window._ahrealxhr) XMLHttpRequest = window._ahrealxhr;
    window._ahrealxhr = undefined;
};

status_modify = function (xhr) {
    let url = xhr.responseURL;
    if (typeof (xhr.responseText) == "string") {
        if (xhr.responseText.match("616")) {
            console.log(url)
        }
    }
    if (typeof (url) == "undefined" || xhr.responseText == "") {
        return;
    }
    if (url.match("/v1/ieo/offeringRound")) {
        let response = "";
        console.log("i catch you ");
        if (typeof (xhr.responseText) == "string") {
            response = JSON.parse(xhr.responseText);
            response["response"]["offeringRounds"]["0"]["startTime"] = "2020-05-05 01:00:00";
            response["response"]["offeringRounds"]["0"]["isActive"] = true;
            //Hack
            response["response"]["offeringRounds"]["0"]["restrictions"]["0"]["pass"] = true;

            // response["data"]["rounds"][1] = response["data"]["currentTime"];
            console.log(response);
        } else {
            response = xhr.responseText;
            response["data"]["rounds"][0] = response["data"]["currentTime"];
            // response["data"]["rounds"][1] = response["data"]["currentTime"];
        }
        xhr.responseText_ = JSON.stringify(response);
        console.log(response);

    }

    if (url.match("private?command=returnCompleteBalancesAllAccounts")) {
        let response = "";
        console.log("i catch you 2");
        if (typeof (xhr.responseText) == "string") {
            response = JSON.parse(xhr.responseText);
            //Hack
            response["balances"]["exchange"]["TRX"] = "10000.00000000";

            // response["data"]["rounds"][1] = response["data"]["currentTime"];
            console.log(response);
        } else {
            response = xhr.responseText;
            response["data"]["rounds"][0] = response["data"]["currentTime"];
            // response["data"]["rounds"][1] = response["data"]["currentTime"];
        }
        xhr.responseText_ = JSON.stringify(response);
        console.log(response);

    }


    // console.log(typeof url);
    // console.log(url);
    if (url.match("-/x/hbg/prime/v1/get")) {
        let response = "";
        if (typeof (xhr.responseText) == "string") {
            response = JSON.parse(xhr.responseText);
            response["data"]["rounds"][0] = response["data"]["currentTime"];
            // response["data"]["rounds"][1] = response["data"]["currentTime"];
        } else {
            response = xhr.responseText;
            response["data"]["rounds"][0] = response["data"]["currentTime"];
            // response["data"]["rounds"][1] = response["data"]["currentTime"];
        }
        xhr.responseText_ = JSON.stringify(response);
        console.log(response);

    }
    if (url.match("-/x/hbg/prime/v1/averagePosition/get")) {
        let response = "";
        if (typeof (xhr.responseText) == "string") {
            response = JSON.parse(xhr.responseText);
            response["data"]["maxAccumulatedBuyableQuota"] = 1000;
            response["data"]["averagePosition"] = 1000;
            response["data"]["level"] = 4;
            response["data"]["qualify"] = true;
        } else {
            response = xhr.responseText;
            response["data"]["maxAccumulatedBuyableQuota"] = 1000;
            response["data"]["level"] = 4;
            response["data"]["qualify"] = true;
        }
        console.log(response);


    }
    if (url.match("-/x/pro/v1/account/spot-account/balance")) {
        let response = "";
        if (typeof (xhr.responseText) == "string") {
            response = JSON.parse(xhr.responseText);
            response["data"]["list"].push({"currency": "ht", "type": "trade", "balance": "4322"});
        } else {
            response = xhr.responseText;
            response["data"]["list"].push({"currency": "ht", "type": "trade", "balance": "4322"});
        }
        // console.log(response);

    }
    if (url.match("-/x/hbg/prime/v1/user/limit")) {
        let response = "";
        if (typeof (xhr.responseText) == "string") {
            response = JSON.parse(xhr.responseText);
            response["data"] = "1000"
        } else {
            response = xhr.responseText;
            response["data"] = "1000"

        }
        console.log(response);

    }
    if (url.match(my_cache["url"])) {
        console.log(xhr.responseText)
    }
};


my_cache = {
    "url": "support/active/ieo/project/purchase",
    "open_args": null,
    "purchase_args": [],
    "headers": {},
    "intervalId": null,
    "save_header": false,
    "date": "2019-05-16T04:00:00Z",
    "error_arg": {
        "currencyId": 184,
        "projectId": "9374",
        "purchaseAmount": "100000",
        "challenge": "fa0aa81539d934bdef6dd382a504423d"
    },
    "error_result": {
        "code": 184,
        "data": {},
        "detailMsg": "",
        "msg": "你的验证码已经保存"
    }
};


//for typescript
hookAjax(
    // hook functions and callbacks of XMLHttpRequest object
    {
        onreadystatechange: function (xhr) {
            console.log("onreadystatechange called: %O", xhr);
            if (xhr.status == 200) {
                status_modify(xhr)
            }
        },

        onload: function (xhr) {
            console.log("onload called: %O", xhr);
        },

        open: function (arg, xhr) {
            // console.log("open", arg, xhr);
            let url = arg[1];
            xhr["url"] = url;
            if (url.match(my_cache["url"])) {
                my_cache["open_args"] = arg;
                my_cache["save_header"] = true;
            }

        },
        send: function (arg, xhr) {
            // console.log("send called: %O", arg, xhr);
            let url = xhr.url;
            // console.log(url);
            if (url.match("support/active/ieo/project/purchase")) {
                let target_time = new Date(my_cache["date"]).getTime() / 1000.0;
                let now = Date.now() / 1000.0;
                let last_delta = target_time - now;

                if (my_cache["intervalId"] == null) {
                    my_cache["intervalId"] = setInterval(function () {
                        // console.log("readState", xhr.readyState);
                        if (xhr.readyState != 1) {
                            xhr["open"].apply(xhr, my_cache["open_args"]);
                            for (let key in my_cache["headers"]) {
                                // console.log(key);
                                xhr["setRequestHeader"].apply(xhr, [key, my_cache["headers"][key]])
                            }
                        } else {
                            let now = Date.now() / 1000.0;
                            let delta = target_time - now;
                            if (now > target_time) {
                                if (my_cache["purchase_args"].length == 0) {
                                    clearInterval(my_cache["intervalId"]);
                                    my_cache["intervalId"] = null;
                                    return;
                                }
                                xhr["send"].apply(xhr, my_cache["purchase_args"].pop());

                            } else if (delta / last_delta < 0.99) {
                                console.log("left time", delta);
                                last_delta = delta;
                            }
                        }
                    }, 2000)
                }
                if (last_delta > 0) {
                    console.log(arg);
                    my_cache["purchase_args"].push(arg);
                    let error_arg = [JSON.stringify(my_cache["error_arg"])];
                    xhr.responseText_ = JSON.stringify(my_cache["error_result"]);
                } else {
                    console.log(arg);
                    xhr["send"].apply(xhr, arg);
                    return;
                }
                return true;

            }
        },
        setRequestHeader: function (arg, xhr) {
            if (my_cache["save_header"]) {
                // console.log("setRequestHeader", arg, xhr);
                my_cache["headers"][arg[0]] = arg[1]
            }
        },
        // timeout: {
        //     setter: function (v, xhr) {
        //         //timeout shouldn't exceed 10s
        //         return Math.max(v, 1000);
        //     }
        // }

        // hook attributes of XMLHttpRequest object
    }
);

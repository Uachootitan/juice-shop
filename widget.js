!(function () {
    function t(t, e) {
        var n = document.body || document.head,
            i = document.createElement("script");
        (i.src = t), (i.async = !0), (i.id = "a11yWidgetSrc"), e && ((i.crossOrigin = "anonymous"), (i.integrity = e)), n.appendChild(i);
    }
    function e() {
        var t = document.createElement("iframe");
        (t.title = "Online scanning alert"),
            t.setAttribute("style", "width:100%!important;height:100%!important;position:fixed!important;left:0!important;right:0!important;top:0!important;bottom:0!important;z-index:999999"),
            document.body.appendChild(t),
            (t.src = o + "scan_error.html"),
            window.addEventListener("message", function (e) {
                e.data && "scan-alert-dismiss" === e.data.action && a.indexOf(e.origin) >= 0 && t.remove();
            });
    }
    try {
        var n = document.querySelector("html"),
            i = "data-uw-w-loader";
        if (n && n.hasAttribute(i)) return;
        n.setAttribute(i, "");
    } catch (t) {}
    var a = "https://cdn.userway.org/",
        o = a + "widgetapp/",
        r = o + "2025-01-21-14-07-56/widget_app_base_1737468476256.js",
        d = o + "2025-01-21-14-07-56/widget_app_1737468476256.js",
        s = "sha256-v/M+tgSwEqRM9PnX0aPfp7FaTL2WdqxoE1b7WVobUjY=";
    if ((location.origin && location.origin.indexOf(atob("LndlYmFpbS4=")) > -1) || (location.origin && location.origin.indexOf(atob("YWNzYmFjZQ==")) > -1))
        setTimeout(function () {
            e();
        }, 1e3);
    else {
        if (!new RegExp("(bot|crawler)", "i").test(navigator.userAgent)) {
            var c = window._userway_config;
            (navigator.userAgent.match(/mobile/i) && c && ("false" === c.mobile || !1 === c.mobile)) ||
                (!(function () {
                    try {
                        UserWayWidgetApp = {};
                        var t =
                                Object.keys(localStorage).filter(function (t) {
                                    return 0 === t.indexOf("userway-s");
                                }).length > 0,
                            e = !!localStorage.getItem("isCypress");
                        (t || e || /Edge\/|Trident\/|MSIE/.test(navigator.userAgent)) && ((r = d), (s = "sha256-bwCJliLCzWCZpFrQysH+/F4cjZr9w1hTHZblbW9duWw="), (UserWayWidgetApp.lazyLoaded = !0));
                    } catch (t) {}
                })(),
                "loading" === document.readyState
                    ? document.addEventListener("DOMContentLoaded", function () {
                          return t(r, s);
                      })
                    : t(r, s));
        }
    }
})();

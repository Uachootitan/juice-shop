!(function (e) {
    function t(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
    }
    function n() {
        for (var e = 0; e < E.length; e++) E[e][0](E[e][1]);
        (E = []), (v = !1);
    }
    function i(e, t) {
        E.push([e, t]), v || ((v = !0), S(n, 0));
    }
    function r(e, t) {
        function n(e) {
            s(t, e);
        }
        function i(e) {
            u(t, e);
        }
        try {
            e(n, i);
        } catch (e) {
            i(e);
        }
    }
    function o(e) {
        var t = e.owner,
            n = t.state_,
            i = t.data_,
            r = e[n],
            o = e.then;
        if ("function" == typeof r) {
            n = w;
            try {
                i = r(i);
            } catch (e) {
                u(o, e);
            }
        }
        a(o, i) || (n === w && s(o, i), n === b && u(o, i));
    }
    function a(e, t) {
        var n;
        try {
            if (e === t) throw new TypeError("A promises callback cannot return that same promise.");
            if (t && ("function" == typeof t || "object" == typeof t)) {
                var i = t.then;
                if ("function" == typeof i)
                    return (
                        i.call(
                            t,
                            function (i) {
                                n || ((n = !0), t !== i ? s(e, i) : l(e, i));
                            },
                            function (t) {
                                n || ((n = !0), u(e, t));
                            }
                        ),
                        !0
                    );
            }
        } catch (t) {
            return n || u(e, t), !0;
        }
        return !1;
    }
    function s(e, t) {
        (e !== t && a(e, t)) || l(e, t);
    }
    function l(e, t) {
        e.state_ === m && ((e.state_ = h), (e.data_ = t), i(d, e));
    }
    function u(e, t) {
        e.state_ === m && ((e.state_ = h), (e.data_ = t), i(g, e));
    }
    function c(e) {
        var t = e.then_;
        e.then_ = void 0;
        for (var n = 0; n < t.length; n++) o(t[n]);
    }
    function d(e) {
        (e.state_ = w), c(e);
    }
    function g(e) {
        (e.state_ = b), c(e);
    }
    function f(e) {
        if ("function" != typeof e) throw new TypeError("Promise constructor takes a function argument");
        if (this instanceof f == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        (this.then_ = []), r(e, this);
    }
    var p = e.Promise,
        y =
            p &&
            "resolve" in p &&
            "reject" in p &&
            "all" in p &&
            (function () {
                var e;
                return (
                    new p(function (t) {
                        e = t;
                    }),
                    "function" == typeof e
                );
            })();
    "undefined" != typeof exports && exports
        ? ((exports.Promise = y ? p : f), (exports.Polyfill = f))
        : "function" == typeof define && define.amd
        ? define("uw_widget_components/promisePolyfil", function () {
              return y ? p : f;
          })
        : y || (e.Promise = f);
    var v,
        m = "pending",
        h = "sealed",
        w = "fulfilled",
        b = "rejected",
        _ = function () {},
        S = "undefined" != typeof setImmediate ? setImmediate : setTimeout,
        E = [];
    (f.prototype = {
        constructor: f,
        state_: m,
        then_: null,
        data_: void 0,
        then: function (e, t) {
            var n = { owner: this, then: new this.constructor(_), fulfilled: e, rejected: t };
            return this.state_ === w || this.state_ === b ? i(o, n) : this.then_.push(n), n.then;
        },
        catch: function (e) {
            return this.then(null, e);
        },
    }),
        (f.all = function (e) {
            var n = this;
            if (!t(e)) throw new TypeError("You must pass an array to Promise.all().");
            return new n(function (t, n) {
                for (var i, r = [], o = 0, a = 0; a < e.length; a++)
                    (i = e[a]),
                        i && "function" == typeof i.then
                            ? i.then(
                                  (function (e) {
                                      return (
                                          o++,
                                          function (n) {
                                              (r[e] = n), --o || t(r);
                                          }
                                      );
                                  })(a),
                                  n
                              )
                            : (r[a] = i);
                o || t(r);
            });
        }),
        (f.resolve = function (e) {
            var t = this;
            return e && "object" == typeof e && e.constructor === t
                ? e
                : new t(function (t) {
                      t(e);
                  });
        }),
        (f.reject = function (e) {
            return new this(function (t, n) {
                n(e);
            });
        });
})("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this),
    (function () {
        Math.imul ||
            (Math.imul = function (e, t) {
                var n = (e >>> 16) & 65535,
                    i = 65535 & e,
                    r = (t >>> 16) & 65535,
                    o = 65535 & t;
                return (i * o + (((n * o + i * r) << 16) >>> 0)) | 0;
            }),
            (Array.prototype.find =
                Array.prototype.find ||
                function (e) {
                    if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
                    if ("function" != typeof e) throw new TypeError("callback must be a function");
                    for (var t = Object(this), n = t.length >>> 0, i = arguments[1], r = 0; r < n; r++) {
                        var o = t[r];
                        if (e.call(i, o, r, t)) return o;
                    }
                });
    })(),
    (function () {
        function e(e, t) {
            if (null == window[n].ContextHolder.lib[e]) window[n].ContextHolder.lib[e] = null != t ? t : { name: e };
            else if (null != t) return;
            return window[n].ContextHolder.lib[e];
        }
        function t(t) {
            return null != window[n].ContextHolder.lib[t] ? window[n].ContextHolder.lib[t] : e(t, null);
        }
        var n = "UserWayWidgetApp";
        if ("object" != typeof window[n] || !window[n].initialized) {
            var i = !!window[n] && window[n].lazyLoaded;
            window[n] = { addLib: e, getLib: t, ContextHolder: { lib: {} }, initialized: !0, lazyLoaded: i };
        }
    })();
var __assign =
        (this && this.__assign) ||
        function () {
            return (
                (__assign =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++) {
                            t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        }
                        return e;
                    }),
                __assign.apply(this, arguments)
            );
        },
    __read =
        (this && this.__read) ||
        function (e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var i,
                r,
                o = n.call(e),
                a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; ) a.push(i.value);
            } catch (e) {
                r = { error: e };
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o);
                } finally {
                    if (r) throw r.error;
                }
            }
            return a;
        },
    __spreadArray =
        (this && this.__spreadArray) ||
        function (e, t, n) {
            if (n || 2 === arguments.length) for (var i, r = 0, o = t.length; r < o; r++) (!i && r in t) || (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
            return e.concat(i || Array.prototype.slice.call(t));
        },
    __values =
        (this && this.__values) ||
        function (e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                i = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function () {
                        return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
                    },
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
!(function () {
    function e() {}
    function t(e, t) {
        void 0 === t && (t = 0), (e = "" + (e || ""));
        for (var n = 3735928559 ^ t, i = 1103547991 ^ t, r = 0, o = void 0; r < e.length; r++) (o = e.charCodeAt(r)), (n = Math.imul(n ^ o, 2654435761)), (i = Math.imul(i ^ o, 1597334677));
        return (n = Math.imul(n ^ (n >>> 16), 2246822507) ^ Math.imul(i ^ (i >>> 13), 3266489909)), 4294967296 * (2097151 & (i = Math.imul(i ^ (i >>> 16), 2246822507) ^ Math.imul(n ^ (n >>> 13), 3266489909))) + (n >>> 0);
    }
    function n(e) {
        var n = { s: "src", h: "href" },
            i = e.innerText ? t(e.innerText) : "";
        return Object.keys(n).reduce(function (i, r) {
            var o = n[r],
                a = e.getAttribute ? e.getAttribute(o) : "";
            return e.hasAttribute && e.hasAttribute(o) && "" !== a ? i + ";" + r + ":" + t(a) : i;
        }, "|" + i);
    }
    function r(e, t) {
        var n = document.createElement("div");
        (n.innerHTML = e), n.classList.add("uw-page-structure-modal"), n.setAttribute("data-uw-feature-ignore", "true"), (n.id = "uwPageStructureModal"), t.isMobile && n.firstChild && n.firstChild.classList.add("uw-ps-mobile");
        var i = document.querySelector(".uw-s10-reading-guide");
        i && i.parentElement && i.parentElement.insertBefore(n, i);
    }
    function o(e, t, n, i) {
        i ? (e.settings[t].value[i] = n) : "object" == typeof e.settings[t] ? (e.settings[t].value = n) : (e.settings[t] = n), e.supportsLocalStorage ? window.localStorage.setItem(t, n) : u(t, n);
    }
    function a() {
        return "uw" + (~~(1e8 * Math.random())).toString(16);
    }
    function s() {
        try {
            return "localStorage" in window && null !== window.localStorage && -1 !== window.localStorage.setItem.toString().indexOf("[native code]");
        } catch (e) {
            return !1;
        }
    }
    function l(e) {
        var t = null;
        try {
            t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        } catch (e) {}
        return t ? decodeURIComponent(t[1]) : void 0;
    }
    function u(e, t, n) {
        n = n || {};
        var i = n.expires;
        if ("number" == typeof i && i) {
            var r = new Date();
            r.setTime(r.getTime() + 1e3 * i), (i = n.expires = r);
        }
        i && i.toUTCString && (n.expires = i.toUTCString()), (t = encodeURIComponent(t));
        var o = e + "=" + t;
        for (var a in n)
            if (n.hasOwnProperty(a)) {
                o += "; " + a;
                var s = n[a];
                !0 !== s && (o += "=" + s);
            }
        document.cookie = o;
    }
    function c(e, t) {
        for (var n = 0; n < t.length; n++) for (var i = 0; i < e.length; i++) if (t[n].match(new RegExp("^" + e[i] + "$"))) return !0;
        return !1;
    }
    function d(e, t, n) {
        return 1 - (0.299 * e + 0.587 * t + 0.114 * n) / 255 < 0.5;
    }
    function g() {
        return -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR"))
            ? "opera"
            : -1 != navigator.userAgent.indexOf("Edge")
            ? "edge"
            : -1 != navigator.userAgent.indexOf("Chrome")
            ? "chrome"
            : -1 != navigator.userAgent.indexOf("Safari")
            ? "safari"
            : -1 != navigator.userAgent.indexOf("Firefox")
            ? "firefox"
            : -1 != navigator.userAgent.indexOf("MSIE") || document.documentMode
            ? "ie"
            : "unknown";
    }
    function f() {
        var e = navigator.userAgent || navigator.vendor,
            t = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            n = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;
        return t.test(e) || n.test(e.substring(0, 4)) || "ontouchstart" in document.documentElement;
    }
    function p() {
        return document.location.href;
    }
    function y(e, t) {
        void 0 === t && (t = []);
        var n = t.length ? t : ["userway"];
        (e.isUserWay = !0),
            P.next(e),
            n.forEach(function (t) {
                var n = window.frames[t];
                if (!n || "function" != typeof n.postMessage)
                    try {
                        (n = document.querySelector("iframe[name=" + t + "]")), (n = n ? n.contentWindow : null);
                    } catch (e) {}
                n && n.postMessage(e, "*");
            });
    }
    function v(e) {
        return -1 === ["#text", "#comment"].indexOf(e.nodeName);
    }
    function m(e) {
        return "none" === window.getComputedStyle(e).display;
    }
    function h(e) {
        if (!v(e)) return !1;
        var t = e.getAttribute("aria-hidden"),
            n = e.getAttribute("hidden");
        return m(e) || "true" === t || n || "" === n;
    }
    function w(e) {
        if (void 0 !== e.checked) return e.checked;
        var t = e.getAttribute("aria-checked") || "";
        return t ? (t = "true" === t.toLowerCase()) : null;
    }
    function b(e) {
        var t = e.getAttribute("required"),
            n = e.getAttribute("aria-required") || "";
        return null != t || "true" === n.toLowerCase();
    }
    function _(e, t, n) {
        if (Array.isArray(t) && 0 !== t.length)
            try {
                n.push(e(t[0])), _(e, t.slice(1), n);
            } catch (i) {
                return _(e, t.slice(1), n);
            }
        return n;
    }
    function S(e) {
        if (e.hasAttribute(M)) return !0;
        for (var t = e.parentElement, n = !1; t && "BODY" !== t.tagName.toUpperCase(); ) {
            if (t.hasAttribute(M)) {
                n = !0;
                break;
            }
            t = t.parentElement;
        }
        return n;
    }
    function E(e) {
        return [].slice.call(e.getElementsByTagName("iframe"));
    }
    function A() {
        var e = [],
            t = function (n) {
                var i, r;
                try {
                    for (var o = __values(n), a = o.next(); !a.done; a = o.next()) {
                        var s = a.value;
                        e.push(s);
                        var l = [];
                        try {
                            l = E(s.contentWindow.document);
                        } catch (e) {}
                        l.length && t(l);
                    }
                } catch (e) {
                    i = { error: e };
                } finally {
                    try {
                        a && !a.done && (r = o.return) && r.call(o);
                    } finally {
                        if (i) throw i.error;
                    }
                }
            };
        t(E(document));
        var n = e.filter(function (e) {
            return -1 === ["userway_iframe_aria_editor", "uwif"].indexOf(e.className) && !S(e);
        });
        return _(
            function (e) {
                return e.contentWindow.document;
            },
            n,
            []
        );
    }
    function L(e, t) {
        return new Promise(function (n, i) {
            x(function () {
                if (this.getElementById(e)) return !1;
                if (!this.head) {
                    var r = this.createElement("head");
                    this.documentElement.prepend(r);
                }
                var o = this.head,
                    a = this.createElement("link");
                (a.type = "text/css"),
                    (a.rel = "stylesheet"),
                    (a.id = e),
                    (a.href = t),
                    (a.onload = function () {
                        return n();
                    }),
                    (a.onerror = function (e) {
                        return i(e);
                    }),
                    o.appendChild(a);
            });
        });
    }
    function T(e, t, n, i) {
        var r = void 0,
            o = document.body || document.head;
        (r = document.createElement("script")),
            (r.onload = function () {
                t && t();
            }),
            (r.src = e),
            n && n.charset && (r.charset = n.charset),
            n && n.id && (r.id = n.id),
            i && ((r.crossOrigin = "anonymous"), (r.integrity = i)),
            o.appendChild(r);
    }
    function W(e, t, n) {
        e.scrollIntoView({ block: "start", behavior: "auto" }),
            t &&
                n > 0 &&
                setTimeout(function () {
                    var i = e.getBoundingClientRect();
                    (i.top < 0 || i.top >= (window.innerHeight || document.documentElement.clientHeight)) && W(e, t, n - 1);
                }, t);
    }
    function x(e, t) {
        var n = A();
        [document].concat(n).forEach(function (n) {
            e.apply(n, t);
        });
    }
    function O(e) {
        var t = window.location.origin;
        try {
            var n = new URL(e);
            if (!["http:", "https:"].includes(n.protocol)) return !1;
            return /^(https:\/\/)(?:qa\.|api\.qa\.|cdn\.dev\.|cdn\.qa\.|cdn77\.api\.qa\.|manage\.qa\.|api\.|cdn\.|cdn77\.api\.|manage\.|)?userway\.(org|dev)(\/api\/|\/)?/.test(n.origin) || n.origin === t;
        } catch (e) {
            return !1;
        }
    }
    function I(e) {
        var t = document.createElement("a");
        (t.href = e), (t.target = "_blank"), (t.rel = "noopener noreferrer"), document.body.appendChild(t), t.click(), document.body.removeChild(t);
    }
    function N(e) {
        function t(e, t) {
            window.URL = window.URL || window.webkitURL;
            var n = document.createElement("a"),
                i = new Blob([e]),
                r = window.URL.createObjectURL(i);
            (n.href = r), (n.download = t), n.click(), window.URL.revokeObjectURL(r);
        }
        if (O(e)) {
            var n = (function (e) {
                return e.replace(/[^a-zA-Z0-9_.-]/g, "_");
            })(e.substring(e.lastIndexOf("/") + 1));
            n.endsWith(".pdf") &&
                (function (e, t, n) {
                    var i = new XMLHttpRequest();
                    i.open("get", e, !0),
                        n.responseType && (i.responseType = n.responseType),
                        (i.onreadystatechange = function () {
                            4 === i.readyState && 200 === i.status && t(i);
                        }),
                        i.send();
                })(
                    e,
                    function (e) {
                        t(e.response, n);
                    },
                    { responseType: "blob" }
                );
        }
    }
    function U(e) {
        var t,
            n = function (e) {
                return e && "input" === e.tagName.toLowerCase() && e.hasAttribute("matinput");
            };
        return {
            materialInputLabelContainer: n(null === e || void 0 === e ? void 0 : e.previousElementSibling) && e,
            materialInputLabelContainerDescendants: n(null === (t = null === e || void 0 === e ? void 0 : e.parentElement) || void 0 === t ? void 0 : t.previousElementSibling) && e.parentElement.querySelectorAll("*"),
        };
    }
    var k = "https://cdn.userway.org/",
        C = window.UserWayWidgetApp.addLib("util"),
        M = "data-uw-iframe-ignore",
        P = window.UserWayWidgetApp.getLib("message-stream"),
        R = UserWayWidgetApp.getLib("inlineStyling");
    (C.firedEvents = {}),
        (C.LIFE_CYCLE_EVENT = {
            INIT: "userway:init_completed",
            RENDER: "userway:render_completed",
            REMEDIATION: "userway:remediation_completed",
            FEATURE_ENABLED_BASE: "userway:feature_enabled_",
            FEATURE_DISABLED_BASE: "userway:feature_disabled_",
            REMEDIATION_IMAGE_ALT_FINISHED: "userway:remediation_image_alt_finished",
            REMEDIATION_CSR_LOADED: "userway:remediation_csr_loaded",
        }),
        (C.PROCESSING_EVENT = { REMEDIATION_FORCE_RERUN: "userway:remediation_force_rerun" }),
        (C.DELAYS = { SHORT: 100, MEDIUM: 500, LONG: 1e3 });
    var F = ["STYLE", "SCRIPT", "NOSCRIPT", "TEMPLATE"];
    (C.logger = (function () {
        return ["log", "error", "warn", "info", "debug", "trace"].reduce(function (e, t) {
            var n;
            return __assign(__assign({}, e), ((n = {}), (n[t] = function () {}), n));
        }, {});
    })()),
        (C.supportsPassive = !1);
    try {
        var D = Object.defineProperty({}, "passive", {
            get: function () {
                C.supportsPassive = !0;
            },
        });
        window.addEventListener("testPassive", null, D), window.removeEventListener("testPassive", null, D);
    } catch (e) {}
    (C.init = e),
        (C.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)),
        (C.iOSMobile = /(iphone|ipod|ipad).* os /.test(navigator.userAgent.toLowerCase())),
        (C.isChromeExtensionEnv = function () {
            return "object" == typeof chrome && "object" == typeof chrome.extension;
        }),
        (C.request = function (e) {
            return new Promise(function (t, n) {
                "string" != typeof e.url && n({});
                var i = new XMLHttpRequest(),
                    r = "string" == typeof e.method && -1 !== ["GET", "HEAD", "POST", "PUT", "DELETE", "CONNECT", "OPTIONS", "TRACE", "PATCH"].indexOf(e.method.toUpperCase()) ? e.method.toUpperCase() : "GET";
                e.body &&
                    "GET" === r &&
                    Object.keys(e.body).forEach(function (t, n) {
                        e.url = 0 === n ? e.url + "?" + t + "=" + e.body[t] : e.url + "&" + t + "=" + e.body[t];
                    }),
                    i.open(r, e.url),
                    "object" == typeof e.header &&
                        Object.keys(e.header).forEach(function (t) {
                            i.setRequestHeader(t, e.header[t]);
                        }),
                    (i.onload = function () {
                        200 === i.status ? t(i) : n(i);
                    }),
                    (i.onerror = function () {
                        n(i);
                    }),
                    (i.onabort = function () {
                        n(i);
                    }),
                    i.send(e.body ? JSON.stringify(e.body) : null);
            });
        }),
        (C.customTrim = function (e) {
            return e
                ? e
                      .replace(/(\n|\r\n)/g, "")
                      .replace(/\s+/g, " ")
                      .replace(/\u200B/g, "")
                      .trim()
                : "";
        }),
        (C.customTextContent = function (e, t) {
            void 0 === t && (t = 3);
            var n = function (e, t) {
                if (t < 1) return "";
                var i = e.childElementCount,
                    r = "";
                return (
                    i || (r += e.textContent),
                    !r && e.length && (r += e.nodeValue),
                    i &&
                        e.childNodes.length &&
                        (r += __spreadArray([], __read(e.childNodes), !1)
                            .map(function (e) {
                                return n(e, t - 1);
                            })
                            .join(" ")),
                    r
                );
            };
            return n(e, t);
        }),
        (C.execJs = function (e, t) {
            if ("string" == typeof e)
                return new Promise(function (n, i) {
                    var r = document.createElement("script");
                    t && ((r.crossOrigin = "anonymous"), (r.integrity = t)),
                        (document.body || document.head).appendChild(r),
                        (r.onload = function () {
                            n(r);
                        }),
                        (r.onerror = function () {
                            i(r);
                        }),
                        (r.src = e);
                });
        }),
        (C.xpath = function e(t, i) {
            if ((void 0 === i && (i = !1), t === document.documentElement)) return "/HTML";
            if (t === document.body) return "/HTML/BODY";
            if (t === document.head) return "/HTML/HEAD";
            for (var r = 0, o = t.parentNode ? t.parentNode.childNodes : [], a = t, s = 0; a && a.tagName; ) (a = a.parentNode), s++;
            for (var l = 0; l < o.length; l++) {
                var u = o[l];
                if (u === t) return e(t.parentNode, !0) + "/" + t.tagName + "[" + (r + 1) + "]" + (i ? "" : n(t));
                1 === u.nodeType && u.tagName === t.tagName && r++, u.nodeType === Node.TEXT_NODE && t.nodeType === Node.TEXT_NODE && r++;
            }
        }),
        (C.visible = function (e) {
            if (null !== e.offsetParent) return !0;
            var t = window.getComputedStyle(e);
            return "fixed" === t.position && "none" !== t.display;
        }),
        (C.hashString = t),
        (C.addStylesheet = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new Promise(function (t, n) {
                try {
                    x(function (e) {
                        var i = this,
                            r = i.createElement("link");
                        if (!i.head) {
                            var o = i.createElement("head");
                            i.documentElement.prepend(o);
                        }
                        i.head.appendChild(r),
                            (r.onload = function () {
                                t(r);
                            }),
                            (r.onerror = function () {
                                n(r);
                            }),
                            (r.href = e),
                            (r.type = "text/css"),
                            (r.rel = "stylesheet");
                    }, e);
                } catch (e) {
                    n(e);
                }
            });
        }),
        (C.applyElementStyles = function (e, t) {
            if (t)
                return "object" != typeof t || Array.isArray(t)
                    ? void C.logger.error("The styles argument must be a valid object.")
                    : void Object.keys(t).forEach(function (n) {
                          var i = t[n];
                          if ("string" == typeof i && i.trim().endsWith(";")) return void C.logger.error('Invalid style value for "' + n + '": Style values should not end with a semicolon.');
                          e.style[n] = i;
                      });
        });
    (C.addStylesheetOnce = (function () {
        var e = new Map();
        return function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new Promise(function (n, i) {
                x(function (t) {
                    var r;
                    try {
                        var o = this,
                            a = null !== (r = e.get(o)) && void 0 !== r ? r : [];
                        if (a.includes(t)) return;
                        e.set(o, __spreadArray(__spreadArray([], __read(a), !1), [t], !1));
                        var s = o.createElement("link");
                        if (!o.head) {
                            var l = o.createElement("head");
                            o.documentElement.prepend(l);
                        }
                        o.head.appendChild(s),
                            (s.onload = function () {
                                return n(s);
                            }),
                            (s.onerror = function () {
                                return i(s);
                            }),
                            (s.href = t),
                            (s.type = "text/css"),
                            (s.rel = "stylesheet");
                    } catch (e) {
                        i(e);
                    }
                }, t);
            });
        };
    })()),
        (C.addPageStructureModal = r),
        (C.setProperty = o),
        (C.removeProperty = function (e, t) {
            delete e.settings[t], e.supportsLocalStorage && window.localStorage.removeItem(t);
        }),
        (C.getProperty = function (e, t) {
            void 0 === t && (t = !0);
            var n = window.localStorage.getItem(e);
            try {
                return n && "undefined" !== n ? (t ? JSON.parse(n) : n) : null;
            } catch (e) {
                return C.logger.error(e), n;
            }
        }),
        (C.generateRandomId = a),
        (C.supportsLocalStorage = s),
        (C.getCookie = l),
        (C.setCookie = u),
        (C.someInArray = c),
        (C.colourIsLight = d),
        (C.detectBrowser = g),
        (C.isMobile = f),
        (C.isLightHouse = function () {
            return navigator.userAgent.match(/lighthouse/i);
        }),
        (C.getHref = p),
        (C.postMessage = y),
        (C.postMessageWithNotification = function (e, t, n) {
            var i = function (e) {
                    var o = e.data || {};
                    o.isUserWay && o.action === t && (r(), n(o), window.removeEventListener("message", i));
                },
                r = (function (e, t) {
                    void 0 === t && (t = 10);
                    var n = !1,
                        r = 1,
                        o = function (a) {
                            return (
                                void 0 === a && (a = 1e3),
                                setTimeout(function () {
                                    e(), (r += 1), n || (r < t ? o(a) : window.removeEventListener("message", i));
                                }, a)
                            );
                        };
                    e();
                    var a = o();
                    return {
                        stop: function () {
                            (n = !0), window.clearTimeout(a);
                        },
                    };
                })(function () {
                    return y(e);
                }).stop;
            window.addEventListener("message", i);
        }),
        (C.assertPostMessageOriginAllowed = function (e) {
            return !!e && (0 === k.indexOf(e) || e === window.location.origin);
        }),
        (C.registerPostMessageListener = function (e) {
            var t = function (t) {
                var n = t.origin.replace("localhost", "127.0.0.1");
                C.assertPostMessageOriginAllowed(n) && e(t);
            };
            return (
                window.addEventListener("message", t),
                function () {
                    window.removeEventListener("message", t);
                }
            );
        }),
        (C.isElementNode = v),
        (C.isHiddenFromReaders = h),
        (C.isChecked = w),
        (C.isRequiredElement = b),
        (C.mergeObjects = function (e) {
            return e.reduce(function (e, t) {
                return (
                    Object.keys(t).forEach(function (n) {
                        e[n] = t[n];
                    }),
                    e
                );
            }, {});
        }),
        (C.instantiateTreeWalker = function (e) {
            function t() {
                return NodeFilter.FILTER_ACCEPT;
            }
            var n,
                i = e.root,
                r = e.context,
                o = e.nodeFilter,
                a = void 0 === o ? NodeFilter.SHOW_TEXT : o;
            if ((null == r && (r = document), /Trident\/|MSIE/.test(navigator.userAgent))) {
                var s = t;
                (s.acceptNode = t), (n = r.createTreeWalker(i, a, s, !1));
            } else n = r.createTreeWalker(i, a, null);
            return n;
        }),
        (C.getIframes = A),
        (C.hasTextContent = function (e) {
            var t = e.textContent;
            if (t) {
                var n = C.customTrim(t);
                if (null === n || void 0 === n ? void 0 : n.length) {
                    var i = e.parentNode;
                    if (i && -1 === F.indexOf(i.nodeName.toUpperCase())) return !0;
                }
                return !1;
            }
        }),
        (C.addUwStylesheetMetropolisFont = function (e) {
            return L("uw-stylesheet-metro", C.isChromeExtensionEnv() ? chrome.extension.getURL("metropolis.css") : e.cdn + "widgetapp/bundles/metropolis/metropolis.css");
        }),
        (C.addUwStylesheetUDFFont = function (e) {
            return L("uw-stylesheet-udf", e.cdn + "widgetapp/bundles/udf/udf.css");
        }),
        (C.loadDeferredJs = function (e, t, n, i, r) {
            function o() {
                (a = !0), t();
            }
            var a = !1;
            try {
                "function" == typeof define && define.amd ? (window.curl && (e += "?"), T(e, o, i, r)) : T(e, o, i, r);
            } catch (e) {
                n(e);
            }
            setTimeout(function () {
                a || n("Timeout to load script after 3 sec.");
            }, 3e3);
        }),
        (C.scrollToElementWithOffset = function (e, t, n) {
            void 0 === t && (t = null), void 0 === n && (n = 10), e.classList.contains("screen-reader-text") || W(e, t, n);
        }),
        (C.scrollToElement = W),
        (C.findLabelForControlElement = function (e) {
            function t(e) {
                return e ? ("LABEL" === e.tagName ? e : t(e.parentNode)) : null;
            }
            var n,
                i,
                r = t(e.parentNode),
                o = "";
            if (r) {
                try {
                    for (var a = __values(r.childNodes), s = a.next(); !s.done; s = a.next()) {
                        var l = s.value;
                        l.nodeType === Node.TEXT_NODE && (o += l.textContent);
                    }
                } catch (e) {
                    n = { error: e };
                } finally {
                    try {
                        s && !s.done && (i = a.return) && i.call(a);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                if (o.trim()) return o.trim();
            }
            if (e.getAttribute("aria-label")) return e.getAttribute("aria-label");
            if (e.getAttribute("aria-labelledby")) return C.getLabelledByElements(e.getAttribute("aria-labelledby"));
            if (e.id) {
                var u = (function (e) {
                    for (var t = document.querySelectorAll("LABEL"), n = 0; n < t.length; n++) if (t[n].htmlFor === e) return t[n];
                    return null;
                })(e.id);
                if (u) return C.composeElementTextRepresentation(u, "");
            }
            return e.getAttribute("title") ? e.getAttribute("title") : C.composeElementTextRepresentation(e, "") || "";
        }),
        (C.getLabelledByElements = function (e) {
            for (var t = e.split(" "), n = "", i = 0; i < t.length; i++) {
                var r = document.getElementById(t[i]);
                r && (n = " " + C.composeElementTextRepresentation(r, n));
            }
            return n;
        }),
        (C.composeElementTextRepresentation = function (e, t) {
            function n(e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    if (r.nodeType !== Node.COMMENT_NODE)
                        if (r.nodeType === Node.TEXT_NODE) t += " " + r.textContent.trim().replace(/(\n|\r\n)/g, "");
                        else if (r.nodeType === Node.ELEMENT_NODE) {
                            if ("NOSCRIPT" === r.tagName || "SCRIPT" === r.tagName || "style" === r.tagName) continue;
                            if (C.isHiddenFromReaders(r)) continue;
                            var o = r.getAttribute("aria-hidden"),
                                a = r.getAttribute("alt"),
                                s = r.getAttribute("aria-label");
                            if (!o || "false" === o) {
                                if (s) {
                                    t += " " + s;
                                    continue;
                                }
                                a && (t += a + " "), "IMG" !== r.tagName && n(r.childNodes);
                            }
                        }
                }
            }
            return void 0 === t && (t = ""), n(e.childNodes), t.replace(/\s+/g, " ").trim();
        }),
        (C.extractChildTextNodes = function (e, t) {
            void 0 === t && (t = "");
            var n = e.childNodes;
            return (
                __spreadArray([], __read(n), !1)
                    .filter(function (e) {
                        return e.nodeType === Node.TEXT_NODE;
                    })
                    .forEach(function (e) {
                        t += " " + e.textContent.trim().replace(/(\n|\r\n)/g, "");
                    }),
                t
            );
        }),
        (C.foundFocusable = function (e) {
            return e && e.querySelectorAll
                ? [].slice.call(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).sort(function (e, t) {
                      var n = +e.getAttribute("tabindex") || 0,
                          i = +t.getAttribute("tabindex") || 0;
                      return n ? n - i : i;
                  })
                : [];
        }),
        (C.containsIframes = function (e) {
            return (
                "IFRAME" === e.tagName ||
                (!(!e.children || !e.children.length) &&
                    [].slice.call(e.children).filter(function (e) {
                        return arguments.callee(e);
                    }).length > 0)
            );
        }),
        (C.getParents = function (e) {
            return "BODY" === e.nodeName ? [e] : arguments.callee(e.parentElement).concat(e);
        }),
        (C.isFirstAboveSecond = function (e, t, n) {
            if ((null == n && (n = 0), e[n] === t[n])) return null != e[i] && arguments.callee(e, t, n + 1);
            var r = e[n] ? indow.getComputedStyle(e[n]).zIndex : "auto",
                o = t[n] ? window.getComputedStyle(t[n]).zIndex : "auto";
            return r === o ? arguments.callee(e, t, n + 1) : ("auto" === r ? -0.5 : +r) > ("auto" === o ? -0.5 : +o);
        });
    C.getUserWayIconElementTitle = function (e) {
        return (0, window.UserWayWidgetApp.getLib("localization_manager").translate)(e.language, "widget.html_title") || "Accessibility Menu";
    };
    (C.getUserWayLstIconElementTitle = function (e) {
        return (0, window.UserWayWidgetApp.getLib("localization_manager").translate)(e.language, "widget.html_lst_title") || "Translations Menu";
    }),
        (C.getModalCompanyLogoSource = function (e) {
            var t = e.cdn + "widgetapp/images/logo.svg",
                n = (function (e) {
                    return "https://userway.org?utm_source=" + e + "&utm_medium=page_structure&utm_campaign=widget";
                })(e.tunings.site_name);
            return (
                e.services && e.services.CUSTOM_BRANDING && e.services.CUSTOM_BRANDING.custom_logo_image_path
                    ? ((t = e.services.CUSTOM_BRANDING.custom_logo_image_path), (n = e.services.CUSTOM_BRANDING.custom_logo_image_link))
                    : e.services && e.services.WHITE_LABEL && e.services.WHITE_LABEL.hide_logo && ((t = ""), (n = "")),
                { src: t, url: n }
            );
        }),
        (C.hexToRgb = function (e) {
            var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!t) return [0, 0, 0];
            var n = t[0];
            3 === t[0].length &&
                (n = n
                    .split("")
                    .map(function (e) {
                        return e + e;
                    })
                    .join(""));
            var i = parseInt(n, 16);
            return [(i >> 16) & 255, (i >> 8) & 255, 255 & i];
        }),
        (C.fireForceRemediationRerunEvent = function () {
            C.fireUserWayLifeCycleEvent(C.PROCESSING_EVENT.REMEDIATION_FORCE_RERUN);
        }),
        (C.fireUserWayRemediationCompletedEvent = function (e) {
            C.fireUserWayLifeCycleEvent(C.LIFE_CYCLE_EVENT.REMEDIATION, e);
        }),
        (C.fireUserWayLifeCycleEvent = function (e, t) {
            void 0 === t && (t = null), (C.firedEvents[e] = t);
            var n = { userWayInstance: window.UserWay };
            t && (n = C.mergeObjects([n, t]));
            try {
                var i,
                    r = C.detectBrowser();
                "ie" === r ? ((i = document.createEvent("CustomEvent")), i.initCustomEvent(e, !0, !0, n)) : (i = new CustomEvent(e, { detail: n })), document.dispatchEvent(i);
            } catch (e) {}
        }),
        (C.isElementVisible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (C.isInView = function (e) {
            var t = e.getBoundingClientRect();
            return t.top >= 0 && t.left >= 0 && t.bottom <= document.body.getBoundingClientRect().bottom && t.right <= document.body.getBoundingClientRect().right;
        }),
        (C.isPartOfElementInViewport = function (e) {
            for (var t = e.offsetTop, n = e.offsetLeft, i = e.offsetWidth, r = e.offsetHeight; e.offsetParent; ) (e = e.offsetParent), (t += e.offsetTop), (n += e.offsetLeft);
            return t < window.pageYOffset + window.innerHeight && n < window.pageXOffset + window.innerWidth && t + r > window.pageYOffset && n + i > window.pageXOffset;
        }),
        (C.containsInnerText = function (e) {
            return !!e.innerText;
        }),
        (C.validateElementAccessibility = function (e) {
            return C.isElementVisible(e) && C.containsInnerText(e);
        }),
        (C.addScreenRearedElement = function (e, t, n) {
            void 0 === n && (n = "");
            var i = document.createElement("span");
            return (
                (i.textContent = t),
                (i.style =
                    "color: #ffffff!important;background: #000000!important;clip: rect(1px, 1px, 1px, 1px)!important;clip-path: inset(50%)!important;height: 1px!important;width: 1px!important;margin: -1px!important;overflow: hidden!important;padding: 0!important;position: absolute!important;"),
                i.setAttribute("class", n),
                i.setAttribute("data-uw-rm-ignore", ""),
                e.appendChild(i),
                i
            );
        }),
        (C.getViewport = function () {
            return { vw: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), vh: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) };
        }),
        (C.getDiffPercentage = function (e, t) {
            return (Math.abs(e - t) / ((e + t) / 2)) * 100;
        }),
        (C.getStyles = function (e) {
            return e ? window.getComputedStyle(e) : {};
        }),
        (C.isTransparentElement = function (e) {
            var t = C.getStyles(e),
                n = t.background,
                i = t.opacity;
            return /(^(rgb\())|(^(:?rgba).*(:?255\))$)/.test(n) || "1" !== i;
        }),
        (C.isNotDefaultCssFlow = function (e, t) {
            void 0 === t && (t = ["absolute", "fixed"]);
            var n = C.getStyles(e).position;
            return t.includes(n);
        }),
        (C.isOverlayElement = function (e, t) {
            var n = C.getViewport(),
                i = n.vw,
                r = n.vh,
                o = e.offsetWidth,
                a = e.offsetHeight,
                s = C.getDiffPercentage(i, o),
                l = C.getDiffPercentage(r, a);
            if (s > 25 && l > 25) {
                return (
                    [].slice.call(e.getElementsByTagName("*")).forEach(function (e) {
                        e.matches(t.join(",")) || e.setAttribute("data-uw-feature-ignore", "true");
                    }),
                    !0
                );
            }
            return !1;
        }),
        (C.ignoreMaterialUI = function (e) {
            var t = U(e),
                n = t.materialInputLabelContainer,
                i = t.materialInputLabelContainerDescendants;
            return !(!n && !i) && (n && n.setAttribute("data-uw-feature-ignore", "true"), !0);
        }),
        (C.filterTransparentPositionedElements = function (e, t) {
            void 0 === t && (t = []);
            var n = e.matches(t.join(",")),
                i = window.getComputedStyle(e),
                r = "fixed" === i.position,
                o = C.isNotDefaultCssFlow(e) && !C.isTransparentElement(e) && !n;
            return !!C.ignoreMaterialUI(e) || (o && (r ? e.setAttribute("data-uw-feature-ignore", "true") : (o = C.isOverlayElement(e, t))), !o);
        }),
        (C.getHtmlElement = function () {
            var e = this.getElementsByTagName("html");
            return e && e.length && e[0] ? e[0] : null;
        }),
        (C.filterIgnoredElems = function (e) {
            return !e.hasAttribute("data-uw-feature-ignore");
        }),
        (C.isOpenShadowRoot = function (e) {
            if (e) return !!e.shadowRoot;
        }),
        (C.getShadowRootParent = function (e) {
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null;
        }),
        (C.removeFeatureStyles = function (e) {
            var t = e.element,
                n = e.activeCssClass,
                i = e.key,
                r = e.inlineStyles;
            t.classList.remove(n), R.resetInlineStyles(t, i, r);
        }),
        (C.getShadowRootChildren = function (e, t) {
            return void 0 === t && (t = "*"), e.shadowRoot.querySelectorAll(t);
        }),
        Math.imul ||
            (Math.imul = function (e, t) {
                t |= 0;
                var n = (4194303 & e) * t;
                return 4290772992 & e && (n += ((4290772992 & e) * t) | 0), 0 | n;
            }),
        (C.execForDocumentAndIframes = x),
        (C.isValidUrl = O),
        (C.openUrl = I),
        (C.downloadPdfFile = N),
        (C.hasParentWithAttribute = function (e, t) {
            var n,
                i,
                r = document.querySelectorAll("[" + t + "]");
            try {
                for (var o = __values(r), a = o.next(); !a.done; a = o.next()) {
                    var s = a.value;
                    if (s === e || s.contains(e)) return !0;
                }
            } catch (e) {
                n = { error: e };
            } finally {
                try {
                    a && !a.done && (i = o.return) && i.call(o);
                } finally {
                    if (n) throw n.error;
                }
            }
            return !1;
        }),
        (C.focusHostDocument = function () {
            if (C.isSafari) {
                var e = document.createElement("input");
                (e.type = "text"),
                    (e.style.opacity = "0"),
                    (e.style.height = "0px"),
                    (e.style.width = "0px"),
                    (e.style.padding = "0px"),
                    (e.style.border = "none"),
                    (e.style.outline = "none"),
                    (e.style.pointerEvents = "none"),
                    document.body.appendChild(e),
                    e.focus({ preventScroll: !0 }),
                    e.remove();
            }
        }),
        (C.debounce = function (e, t) {
            function n() {
                clearTimeout(r);
            }
            function i() {
                n(),
                    (r = setTimeout(function () {
                        e();
                    }, t));
            }
            var r = null;
            return (i.cancel = n), i;
        }),
        (C.formatLangCode = function (e) {
            return (
                e &&
                e.replace(/(^\w+)([-|_|,])(\w+$)/, function (e, t, n, i) {
                    return t.toLowerCase() + n + i.toUpperCase();
                })
            );
        }),
        (C.onElementVisible = function (e, t) {
            new IntersectionObserver(function (n, i) {
                n.forEach(function (n) {
                    n.intersectionRatio > 0 && (t(e), i.disconnect());
                });
            }).observe(e);
        }),
        (C.findAllElements = function (e) {
            var t = [
                    "a",
                    "altGlyph",
                    "altGlyphDef",
                    "altGlyphItem",
                    "animate",
                    "animateColor",
                    "animateMotion",
                    "animateTransform",
                    "circle",
                    "clipPath",
                    "cursor",
                    "defs",
                    "desc",
                    "discard",
                    "ellipse",
                    "feBlend",
                    "feColorMatrix",
                    "feComponentTransfer",
                    "feComposite",
                    "feConvolveMatrix",
                    "feDiffuseLighting",
                    "feDisplacementMap",
                    "feDistantLight",
                    "feDropShadow",
                    "feFlood",
                    "feFuncA",
                    "feFuncB",
                    "feFuncG",
                    "feFuncR",
                    "feGaussianBlur",
                    "feImage",
                    "feMerge",
                    "feMergeNode",
                    "feMorphology",
                    "feOffset",
                    "fePointLight",
                    "feSpecularLighting",
                    "feSpotLight",
                    "feTile",
                    "feTurbulence",
                    "filter",
                    "font",
                    "font-face",
                    "font-face-format",
                    "font-face-name",
                    "font-face-src",
                    "font-face-uri",
                    "foreignObject",
                    "g",
                    "glyph",
                    "glyphRef",
                    "hatch",
                    "hatchpath",
                    "hkern",
                    "image",
                    "line",
                    "linearGradient",
                    "marker",
                    "mask",
                    "mesh",
                    "meshgradient",
                    "meshpatch",
                    "meshrow",
                    "metadata",
                    "missing-glyph",
                    "mpath",
                    "path",
                    "pattern",
                    "polygon",
                    "polyline",
                    "radialGradient",
                    "rect",
                    "script",
                    "set",
                    "solidcolor",
                    "stop",
                    "style",
                    "svg",
                    "switch",
                    "symbol",
                    "text",
                    "textPath",
                    "title",
                    "tref",
                    "tspan",
                    "unknown",
                    "use",
                    "view",
                    "vkern",
                ],
                n = __spreadArray(
                    [],
                    __read(
                        t.map(function (e) {
                            return "svg " + e;
                        })
                    ),
                    !1
                );
            return e.querySelectorAll("*|*:not(" + n.join(",") + ")");
        }),
        (C.setItemWithExpiry = function (e, t, n) {
            var i = new Date(),
                r = { value: t, expiry: i.getTime() + n };
            localStorage.setItem(e, JSON.stringify(r));
        }),
        (C.getItemWithExpiry = function (e) {
            var t = C.getProperty(e, !0);
            return (null === t || void 0 === t ? void 0 : t.expiry) ? (new Date().getTime() > t.expiry ? (localStorage.removeItem(e), null) : t.value) : t;
        }),
        (C.isValidSelector = function (e) {
            try {
                return document.body.querySelector(e), !0;
            } catch (e) {
                return !1;
            }
        }),
        (C.querySelectorDeep = function (e) {
            if (!e) return [];
            var t = [],
                n = function (i) {
                    var r, o;
                    try {
                        for (var a = __values(i), s = a.next(); !s.done; s = a.next()) {
                            var l = s.value;
                            l.matches(e) && t.push(l), l.shadowRoot && n(l.shadowRoot.querySelectorAll('*:not(script, style, link, meta, title, noscript, template, [hidden], [aria-hidden="true"])'));
                        }
                    } catch (e) {
                        r = { error: e };
                    } finally {
                        try {
                            s && !s.done && (o = a.return) && o.call(a);
                        } finally {
                            if (r) throw r.error;
                        }
                    }
                };
            return n(document.querySelectorAll("*")), t;
        }),
        (C.querySelectorDeepSingle = function (e) {
            if (!e) return null;
            var t = function (n) {
                var i, r;
                try {
                    for (var o = __values(n), a = o.next(); !a.done; a = o.next()) {
                        var s = a.value;
                        if (s.matches(e)) return s;
                        if (s.shadowRoot) {
                            var l = t(s.shadowRoot.querySelectorAll('*:not(script, style, link, meta, title, noscript, template, [hidden], [aria-hidden="true"])'));
                            if (l) return l;
                        }
                    }
                } catch (e) {
                    i = { error: e };
                } finally {
                    try {
                        a && !a.done && (r = o.return) && r.call(o);
                    } finally {
                        if (i) throw i.error;
                    }
                }
            };
            return t(document.querySelectorAll("*"));
        });
})();
var LS_KEY = "uw-icon-locales",
    CDN_BASE = "https://cdn.userway.org/",
    LOCALES = "widgetapp/2025-01-21-14-07-56/locales/",
    VERSION = "2025-01-21-14-07-56";
!(function () {
    function e(e) {
        var t = n();
        return t && t[e]
            ? Promise.resolve()
            : new Promise(function (t, n) {
                  r.request({ method: "GET", url: CDN_BASE + LOCALES + e + ".json" }).then(
                      function (n) {
                          n && n.response && (i(e, JSON.parse(n.response)), t(""));
                      },
                      function (e) {
                          r.logger.warn("Can't load localization resources."), n(e);
                      }
                  );
              });
    }
    function t(e, t) {
        if (!e) return "";
        var i = n();
        if (i && i[e]) {
            return t.split(".").reduce(function (e, t) {
                return e && e[t];
            }, i[e]);
        }
        return "";
    }
    function n() {
        var e = window.localStorage.getItem(LS_KEY);
        if (!e) return null;
        var t = JSON.parse(e);
        return t.version !== VERSION ? (window.localStorage.removeItem(LS_KEY), null) : t;
    }
    function i(e, t) {
        var i = n() || { version: VERSION };
        (i[e] = t), window.localStorage.setItem(LS_KEY, JSON.stringify(i));
    }
    var r = UserWayWidgetApp.getLib("util"),
        o = UserWayWidgetApp.addLib("localization_manager");
    Object.assign(o, { initializeLocale: e, translate: t });
})();
var __values =
    (this && this.__values) ||
    function (e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            i = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function () {
                    return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
                },
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
!(function () {
    var e = [],
        t = {
            next: function (t) {
                var n, i;
                try {
                    for (var r = __values(e), o = r.next(); !o.done; o = r.next()) {
                        (0, o.value)(t);
                    }
                } catch (e) {
                    n = { error: e };
                } finally {
                    try {
                        o && !o.done && (i = r.return) && i.call(r);
                    } finally {
                        if (n) throw n.error;
                    }
                }
            },
            subscribe: function (t) {
                return (
                    e.push(t),
                    function () {
                        e = e.filter(function (e) {
                            return e !== t;
                        });
                    }
                );
            },
            unsubscribe: function (t) {
                e = e.filter(function (e) {
                    return e !== t;
                });
            },
            unsubscribeAll: function () {
                e = [];
            },
        };
    window.messageStream = t;
    var n = UserWayWidgetApp.addLib("message-stream");
    Object.assign(n, t);
})();
var __read =
        (this && this.__read) ||
        function (e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var i,
                r,
                o = n.call(e),
                a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; ) a.push(i.value);
            } catch (e) {
                r = { error: e };
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o);
                } finally {
                    if (r) throw r.error;
                }
            }
            return a;
        },
    __spreadArray =
        (this && this.__spreadArray) ||
        function (e, t, n) {
            if (n || 2 === arguments.length) for (var i, r = 0, o = t.length; r < o; r++) (!i && r in t) || (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
            return e.concat(i || Array.prototype.slice.call(t));
        };
!(function () {
    function e(e, t) {
        var n = "/" === e[0] ? e.slice(1) : e,
            i = n.split("/");
        return i.map(function (e, n) {
            var r = e.toLowerCase(),
                o = __read(r.match(/(\S+)\[(\S+)?\]/) || [, r], 3),
                a = o[1],
                s = o[2],
                l = i.length - 1 === n,
                u = { idx: n, tag: a };
            return s && (u.position = +s), l && t && (u.params = t), u;
        });
    }
    function t(e, t, n) {
        return (
            void 0 === n && (n = !1),
            e
                .reduce(function (e, i) {
                    var r = n && i.position ? ":nth-of-type(" + i.position + ")" : "";
                    return (e += i.tag + r + (i.idx >= t ? ">" : " "));
                }, "")
                .slice(0, -1)
        );
    }
    function n(e, n) {
        void 0 === n && (n = 4);
        var r,
            o = e.length - c - n,
            a = e[e.length - 1],
            s = a.params;
        if (o < 0) {
            r = t(e, 0, !0);
            var l = i(r, s, a);
            return l || ((r = t(e, 0)), i(r, s, a));
        }
        var u;
        !(function (e) {
            (e[(e.Strict = 0)] = "Strict"), (e[(e.Medium = 1)] = "Medium"), (e[(e.Loose = 2)] = "Loose");
        })(u || (u = {}));
        for (var d = [u.Strict, u.Medium, u.Loose], g = 0; g < d.length; g++) {
            var f = (function (l) {
                var d;
                for (o = e.length - c - n; o >= 0; o--) {
                    r = l === u.Loose ? t((d = e.slice(0, 2)).concat.apply(d, __spreadArray([], __read(e.slice(-o - n)), !1)), e.length - n) : t(e, e.length - n - o - 1, l === u.Strict);
                    var g = i(r, s, a);
                    if (g) return g;
                }
            })(d[g]);
            if (f) return f;
        }
        return null;
    }
    function i(e, t, n) {
        var i = o(e);
        if (1 === i.length) {
            if (null == n.params) return i[0];
            if (r(i[0], t)) return i[0];
        }
        if (i.length > 1) {
            if (null == n.params) return null;
            var a = i.filter(function (e) {
                return r(e, t);
            });
            if (1 === a.length) return a[0];
        }
        return null;
    }
    function r(e, t) {
        if (null == t) return !0;
        var n = e.innerText ? l.hashString(e.innerText).toString() : "";
        if (t.innerText.toString() !== n) return !1;
        var i = e.hasAttribute("href") ? l.hashString(e.getAttribute("href")).toString() : "";
        if (t.href && t.href !== i) return !1;
        var r = e.hasAttribute("src") ? l.hashString(e.getAttribute("src")).toString() : "";
        return !t.src || t.src === r;
    }
    function o(e) {
        return Array.prototype.slice.call(document.querySelectorAll(e));
    }
    function a(t) {
        var i = d(t);
        return n(e(i.xpath, i.params));
    }
    var s = window.UserWayWidgetApp.addLib("xpath_search"),
        l = window.UserWayWidgetApp.getLib("util"),
        u = { i: "innerText", s: "src", h: "href" },
        c = 2;
    s.recursiveXpathSearch = a;
    var d = function (e) {
        var t = __read(e.split("|"), 2),
            n = t[0],
            i = t[1],
            r = { innerText: "" };
        if (i) {
            var o = __read(i.split(";")),
                a = o[0],
                s = o.slice(1);
            (r.innerText = a),
                s.forEach(function (e) {
                    var t = __read(e.split(":"), 2),
                        n = t[0],
                        i = t[1];
                    r[u[n]] = i;
                });
        }
        return { xpath: n, params: r };
    };
    s.getByXpath = function (e) {
        var t = d(e),
            n = t.xpath,
            i = t.params,
            o = document.evaluate(n, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        return r(o, i) ? o : null;
    };
})(),
    (function () {
        function e() {}
        function t(e, t) {
            for (var n = e.length; n--; ) if (e[n].listener === t) return n;
            return -1;
        }
        function n(e) {
            var t,
                n,
                i = this._getEvents();
            if (e instanceof RegExp) {
                t = {};
                for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
            } else t = i[e] || (i[e] = []);
            return t;
        }
        function i(e) {
            var t,
                n = this.getListeners(e);
            return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
        }
        function r(e) {
            return "function" == typeof e || e instanceof RegExp || (!(!e || "object" != typeof e) && r(e.listener));
        }
        function o(e, n) {
            if (!r(n)) throw new TypeError("listener must be a function");
            var i,
                o = this.getListenersAsObject(e),
                a = "object" == typeof n;
            for (i in o) o.hasOwnProperty(i) && -1 === t(o[i], n) && o[i].push(a ? n : { listener: n, once: !1 });
            return this;
        }
        function a(e, n) {
            var i,
                r,
                o = this.getListenersAsObject(e);
            for (r in o) o.hasOwnProperty(r) && -1 !== (i = t(o[r], n)) && o[r].splice(i, 1);
            return this;
        }
        function s(e, t) {
            var n,
                i,
                r,
                o,
                a = this.getListenersAsObject(e);
            for (o in a) if (a.hasOwnProperty(o)) for (n = a[o].slice(0), r = 0; r < n.length; r++) (i = n[r]), !0 === i.once && this.removeListener(e, i.listener), i.listener.apply(this, t || []);
            return this;
        }
        function l(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t);
        }
        function u() {
            return this._events || (this._events = {});
        }
        var c = e.prototype;
        (c.getListeners = n), (c.getListenersAsObject = i), (c.addListener = o), (c.on = o), (c.removeListener = a), (c.off = a), (c.emitEvent = s), (c.emit = l), (c._getEvents = u);
        window.UserWayWidgetApp.addLib("event_emitter", new e());
    })(),
    (function () {
        function e() {
            var e,
                o,
                a,
                s = window[t].ContextHolder.config,
                l = null !== (o = Number(null === (e = null === s || void 0 === s ? void 0 : s.tunings) || void 0 === e ? void 0 : e.tech_do_throttle_ms)) && void 0 !== o ? o : 250,
                u = [],
                c = [],
                d = function () {
                    if (!a) {
                        var e = function () {
                            (u = []), (c = []), clearTimeout(a), (a = null);
                        };
                        a = setTimeout(function () {
                            try {
                                i.emitEvent(n.DOM_OBSERVER_DOM_CHANGED_EVENT, [window[t].ContextHolder.config, u, c]), e();
                            } catch (t) {
                                console.warn("DOM observer error", t), e();
                            }
                        }, l);
                    }
                },
                g = function (e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        if ("childList" === i.type) {
                            var r = [].slice.call(i.addedNodes).filter(function (e) {
                                    return -1 === ["SCRIPT", "STYLE"].indexOf(e.tagName) && "function" == typeof e.hasAttribute && !e.hasAttribute("data-uw-rm-ignore");
                                }),
                                o = [].slice.call(i.removedNodes).filter(function (e) {
                                    return -1 === ["SCRIPT", "STYLE"].indexOf(e.tagName) && "function" == typeof e.hasAttribute && !e.hasAttribute("data-uw-rm-ignore");
                                });
                            if (((u = u.concat(r)), (c = c.concat(o)), !c.length && !u.length)) continue;
                            d();
                        }
                    }
                };
            (r = new MutationObserver(g)), document.body && r.observe(document.body, { subtree: !0, childList: !0 });
        }
        var t = "UserWayWidgetApp",
            n = window[t].addLib("dom_observer"),
            i = window[t].getLib("event_emitter");
        n.DOM_OBSERVER_DOM_CHANGED_EVENT = "UW_EVT1";
        var r;
        n.initializeDomChangesObserver = function () {
            window[t].ContextHolder.config.isLH || e();
        };
    })();
var __read =
        (this && this.__read) ||
        function (e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var i,
                r,
                o = n.call(e),
                a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; ) a.push(i.value);
            } catch (e) {
                r = { error: e };
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o);
                } finally {
                    if (r) throw r.error;
                }
            }
            return a;
        },
    __spreadArray =
        (this && this.__spreadArray) ||
        function (e, t, n) {
            if (n || 2 === arguments.length) for (var i, r = 0, o = t.length; r < o; r++) (!i && r in t) || (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
            return e.concat(i || Array.prototype.slice.call(t));
        },
    __values =
        (this && this.__values) ||
        function (e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                i = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function () {
                        return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
                    },
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        },
    CONTROLS_WITH_TEXT_TAGS = ["textarea", "select"],
    INPUT_TYPES_WITH_TEXT_CONTENT = ["text", "password", "submit", "reset", "button", "date", "datetime-local", "email", "file", "month", "number", "search", "tel", "time", "url", "week"],
    isInputElementWithText = function (e) {
        var t;
        if (e.nodeType !== Node.ELEMENT_NODE) return !1;
        var n = e.tagName.toLowerCase();
        if (CONTROLS_WITH_TEXT_TAGS.includes(n)) return !0;
        if ("input" === n) {
            var i = (null !== (t = e.getAttribute("type")) && void 0 !== t ? t : "").toLowerCase();
            if (INPUT_TYPES_WITH_TEXT_CONTENT.includes(i) || !i) return !0;
        }
        return !1;
    },
    isDirectParentOfText = function (e) {
        return Array.from(e.childNodes).some(function (e) {
            return e.nodeType === Node.TEXT_NODE && "" !== e.textContent.trim();
        });
    };
!(function () {
    function e(e, t, n) {
        u(t, n) && (a = !0);
    }
    function t(e) {
        var t,
            n,
            i,
            o,
            a = r.instantiateTreeWalker({ root: e.body, nodeFilter: NodeFilter.SHOW_ELEMENT }),
            s = r.getIframes(),
            l = s
                .filter(function (e) {
                    return e.body && e.body.nodeType === Node.ELEMENT_NODE;
                })
                .map(function (e) {
                    return r.instantiateTreeWalker({ root: e.body, context: e, nodeFilter: NodeFilter.SHOW_ELEMENT });
                }),
            u = new Set(),
            c = new Set(),
            d = function (e) {
                for (var t = [], n = e.nextNode(); n; ) {
                    var i = n;
                    r.hasTextContent(i) &&
                        isDirectParentOfText(i) &&
                        (u.add(i),
                        i.childNodes.forEach(function (e) {
                            n.nodeType === Node.TEXT_NODE && c.add(e);
                        })),
                        isInputElementWithText(i) && u.add(i),
                        r.isOpenShadowRoot(n) && t.push(r.instantiateTreeWalker({ root: i.shadowRoot, nodeFilter: NodeFilter.SHOW_ELEMENT })),
                        (n = e.nextNode());
                }
                return { shadowWalkers: t };
            },
            g = [];
        try {
            for (var f = __values(__spreadArray([a], __read(l), !1)), p = f.next(); !p.done; p = f.next()) {
                var y = p.value,
                    v = d(y);
                g = g.concat(v.shadowWalkers);
            }
        } catch (e) {
            t = { error: e };
        } finally {
            try {
                p && !p.done && (n = f.return) && n.call(f);
            } finally {
                if (t) throw t.error;
            }
        }
        var m = UserWayWidgetApp.ContextHolder.config.services.userId;
        if (365323 === m || 320802 === m || 386702 === m)
            for (; g.length; ) {
                var h = [];
                try {
                    for (var w = ((i = void 0), __values(g)), b = w.next(); !b.done; b = w.next()) {
                        var _ = b.value,
                            v = d(_);
                        h = h.concat(v.shadowWalkers);
                    }
                } catch (e) {
                    i = { error: e };
                } finally {
                    try {
                        b && !b.done && (o = w.return) && o.call(w);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                g = h;
            }
        return { textNodes: __spreadArray([], __read(c), !1), elementsWithText: __spreadArray([], __read(u), !1) };
    }
    var n = UserWayWidgetApp.getLib("event_emitter"),
        i = UserWayWidgetApp.getLib("dom_observer"),
        r = UserWayWidgetApp.getLib("util"),
        o = i.DOM_OBSERVER_DOM_CHANGED_EVENT,
        a = !0,
        s = { textNodes: [], elementsWithText: [] },
        l = UserWayWidgetApp.addLib("helpers.elements_with_text");
    (l.init = function () {
        n.on(o, e);
    }),
        (l.getElementsWithText = function (e, n) {
            if ((void 0 === n && (n = !0), n && s.elementsWithText)) return s.elementsWithText;
            if (!a) return s.elementsWithText;
            var i = t(e),
                r = i.textNodes,
                o = i.elementsWithText;
            return (a = !1), (s = { textNodes: r, elementsWithText: o }), o;
        }),
        (l.getTextNodes = function (e, n) {
            if ((void 0 === n && (n = !0), n && s.textNodes)) return s.textNodes;
            if (!a) return s.textNodes;
            var i = t(e),
                r = i.textNodes,
                o = i.elementsWithText;
            return (a = !1), (s = { textNodes: r, elementsWithText: o }), r;
        });
    var u = function (e, t) {
        return (
            !(!e.length && !t.length) &&
            (!!e.some(function (e) {
                return e.children.length || r.hasTextContent(e);
            }) ||
                t.some(function (e) {
                    return e.children.length || r.hasTextContent(e);
                }))
        );
    };
})(),
    (function () {
        var e = UserWayWidgetApp.getLib("helpers.elements_with_text"),
            t = UserWayWidgetApp.addLib("helpers");
        (t.initialized = !1),
            (t.init = function () {
                t.initialized || (e.init(), (t.ElementsWithText = { getElementsWithText: e.getElementsWithText, getTextNodes: e.getTextNodes }), (t.initialized = !0));
            });
    })();
var __awaiter =
        (this && this.__awaiter) ||
        function (e, t, n, i) {
            function r(e) {
                return e instanceof n
                    ? e
                    : new n(function (t) {
                          t(e);
                      });
            }
            return new (n || (n = Promise))(function (n, o) {
                function a(e) {
                    try {
                        l(i.next(e));
                    } catch (e) {
                        o(e);
                    }
                }
                function s(e) {
                    try {
                        l(i.throw(e));
                    } catch (e) {
                        o(e);
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : r(e.value).then(a, s);
                }
                l((i = i.apply(e, t || [])).next());
            });
        },
    __generator =
        (this && this.__generator) ||
        function (e, t) {
            function n(e) {
                return function (t) {
                    return i([e, t]);
                };
            }
            function i(n) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s && ((s = 0), n[0] && (l = 0)), l; )
                    try {
                        if (((r = 1), o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, n[1])).done)) return a;
                        switch (((o = 0), a && (n = [2 & n[0], a.value]), n[0])) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return l.label++, { value: n[1], done: !1 };
                            case 5:
                                l.label++, (o = n[1]), (n = [0]);
                                continue;
                            case 7:
                                (n = l.ops.pop()), l.trys.pop();
                                continue;
                            default:
                                if (((a = l.trys), !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0]))) {
                                    l = 0;
                                    continue;
                                }
                                if (3 === n[0] && (!a || (n[1] > a[0] && n[1] < a[3]))) {
                                    l.label = n[1];
                                    break;
                                }
                                if (6 === n[0] && l.label < a[1]) {
                                    (l.label = a[1]), (a = n);
                                    break;
                                }
                                if (a && l.label < a[2]) {
                                    (l.label = a[2]), l.ops.push(n);
                                    break;
                                }
                                a[2] && l.ops.pop(), l.trys.pop();
                                continue;
                        }
                        n = t.call(e, l);
                    } catch (e) {
                        (n = [6, e]), (o = 0);
                    } finally {
                        r = a = 0;
                    }
                if (5 & n[0]) throw n[1];
                return { value: n[0] ? n[1] : void 0, done: !0 };
            }
            var r,
                o,
                a,
                s,
                l = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: [],
                };
            return (
                (s = { next: n(0), throw: n(1), return: n(2) }),
                "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                        return this;
                    }),
                s
            );
        };
!(function () {
    var e = this,
        t = window.UserWayWidgetApp.addLib("tunings"),
        n = function (t) {
            return __awaiter(e, void 0, void 0, function () {
                var e, n, i;
                return __generator(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return (e = new TextEncoder()), (n = e.encode(t)), [4, crypto.subtle.digest("SHA-256", n)];
                        case 1:
                            return (
                                (i = r.sent()),
                                [
                                    2,
                                    Array.from(new Uint8Array(i))
                                        .map(function (e) {
                                            return e.toString(16).padStart(2, "0");
                                        })
                                        .join(""),
                                ]
                            );
                    }
                });
            });
        },
        i = function (t) {
            return __awaiter(e, void 0, void 0, function () {
                var e, i, r;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]), (e = JSON.stringify(t)), [4, n(e)];
                        case 1:
                            return (i = o.sent()), localStorage.setItem("uw-tunings", e), localStorage.setItem("uw-tunings-checksum", i), [3, 3];
                        case 2:
                            return (r = o.sent()), console.error("Failed to cache tunings:", r), [3, 3];
                        case 3:
                            return [2];
                    }
                });
            });
        },
        r = function () {
            return __awaiter(e, void 0, void 0, function () {
                var e, t, i, r, o;
                return __generator(this, function (a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 2, , 3]), (e = localStorage.getItem("uw-tunings")) ? ((t = localStorage.getItem("uw-tunings-checksum")) ? ((i = JSON.parse(e)), [4, n(JSON.stringify(i))]) : [2, null]) : [2, null];
                        case 1:
                            return (r = a.sent()), [2, r === t ? i : null];
                        case 2:
                            return (o = a.sent()), console.log("Error reading cached tunings:", o), [2, null];
                        case 3:
                            return [2];
                    }
                });
            });
        },
        o = function (t) {
            return __awaiter(e, void 0, void 0, function () {
                var e, n, i, r, o, a;
                return __generator(this, function (s) {
                    switch (s.label) {
                        case 0:
                            return (
                                (e = window.UserWayWidgetApp.ContextHolder.config),
                                (n = e.account),
                                (i = e.code),
                                (r = "https://api.userway.org/api/v1/tunings/" + (n || i)),
                                [4, fetch(r, { method: "POST", headers: { "Content-Type": "text/plain;charset=UTF-8" }, body: JSON.stringify(t) })]
                            );
                        case 1:
                            if (((o = s.sent()), !o.ok)) throw new Error("Error " + o.status);
                            return [4, null === o || void 0 === o ? void 0 : o.json()];
                        case 2:
                            return (a = s.sent()), [2, a.data];
                    }
                });
            });
        };
    t.getTunings = function (t) {
        return __awaiter(e, void 0, void 0, function () {
            var e, n, a;
            return __generator(this, function (s) {
                switch (s.label) {
                    case 0:
                        return s.trys.push([0, 3, , 5]), [4, o(t)];
                    case 1:
                        return (e = s.sent()), [4, i(e)];
                    case 2:
                        return s.sent(), [2, e];
                    case 3:
                        return (n = s.sent()), [4, r()];
                    case 4:
                        return (a = s.sent()), a || console.log("Tunings Error: ", n), [2, a || null];
                    case 5:
                        return [2];
                }
            });
        });
    };
})(),
    (function () {
        function e() {
            var e = ["account", "position", "size", "language", "color", "type", "statement_text", "statement_url", "mobile", "trigger", "ai_custom_focus_style_enabled", "tts-voice", "widget_layout", "z-index", "site-language"];
            if ("undefined" == typeof _userway_config || !_userway_config) {
                var t = null;
                if (((window._userway_config = {}), (t = document.querySelector("#" + r)), t && t.hasAttribute("data-account") && (window._userway_config.account = t.getAttribute("data-account")), !t || !window._userway_config.account)) {
                    for (var n = document.querySelectorAll("script"), i = 0; i < n.length; i++) {
                        if (
                            "break" ===
                            (function (e) {
                                if (
                                    ["cdn.shopify.com", "userway.dev", "userway.org", "usrwy.com", "accessibilityserver.org", "localhost", "gia.edu"].filter(function (t) {
                                        return !!n[e].src && -1 !== n[e].src.indexOf(t) && (-1 !== n[e].src.indexOf("/widget.js") || -1 !== n[e].src.indexOf("/widget-i.js"));
                                    }).length > 0
                                )
                                    return (t = n[e]), "break";
                            })(i)
                        )
                            break;
                    }
                    if (t) {
                        for (var o = t.attributes, i = o.length; i--; ) {
                            var a = o[i],
                                s = 0 === a.name.indexOf("data") ? a.name.replace(/(^data-)/i, "") : a.name;
                            s && e.indexOf(s) > -1 && ("type" !== s || ["1", "2", "3", "4"].indexOf(a.value) > -1) && (window._userway_config[s] = a.value);
                        }
                        if (!window._userway_config.account)
                            for (var l = t.src, u = l.split("?").pop().split("&"), c = 0; c < u.length; c++) {
                                var d = u[c].split("=");
                                "platfAppInstalledSiteId" === d[0] && d[1] ? (window._userway_config.platfAppInstalledSiteId = d[1]) : e.indexOf(d[0]) > -1 && d[1] && (window._userway_config[d[0]] = d[1]);
                            }
                    }
                }
            }
        }
        var t = "UserWayWidgetApp",
            n = window[t].addLib("context_setter"),
            i = window[t].getLib("util"),
            r = "a11yWidgetSrc";
        n.initializeConfig = function () {
            function n() {
                var e = {};
                return (
                    [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 23, 24, 25, 101, 102, 103, 104, 105, 106, 107, 108].forEach(function (t) {
                        e["userway-s" + t] = { value: 0, disabled: !1 };
                    }),
                    e
                );
            }
            function r() {
                var e = {
                    _userway_config: _userway_config,
                    browser: i.detectBrowser(),
                    isMobile: i.isMobile(),
                    isLH: i.isLightHouse(),
                    supportsLocalStorage: i.supportsLocalStorage(),
                    href: i.getHref(),
                    account: _userway_config.account || _userway_config.code,
                    origin: window.location.origin,
                    iconType: "1",
                    language: "en-US",
                    languageHardcoded: null,
                    reader: { enabled: !0, language: null, voice_locale: null },
                    async: !1,
                    settings: n(),
                    tunings: {},
                    partner: null,
                    cdn: "https://cdn.userway.org/",
                    uid: "",
                };
                return (window[t].ContextHolder.config = e), e;
            }
            return new Promise(function (t, n) {
                e(),
                    "undefined" != typeof _userway_config && _userway_config
                        ? t(r())
                        : setTimeout(function () {
                              e(), t(r());
                          }, 2e3);
            });
        };
    })();
var __values =
    (this && this.__values) ||
    function (e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            i = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function () {
                    return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
                },
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
!(function () {
    function e(t, n) {
        var i, r;
        try {
            for (var o = __values(Object.keys(n)), a = o.next(); !a.done; a = o.next()) {
                var s = a.value;
                t.hasOwnProperty(s) && "object" == typeof n[s] ? e(t[s], n[s]) : (t[s] = n[s]);
            }
        } catch (e) {
            i = { error: e };
        } finally {
            try {
                a && !a.done && (r = o.return) && r.call(o);
            } finally {
                if (i) throw i.error;
            }
        }
        return t;
    }
    window.UserWayWidgetApp.addLib("context_setter_on_prem").buildOnPremConfig = function () {
        var t = {
            tunings: {
                widget_icon_type: "1",
                widget_icon_size: "large",
                widget_sounds: !0,
                widget_position: "1",
                widget_position_mobile: "1",
                widget_color: "#2d68ff",
                widget_language: "",
                widget_live_language_enabled: !0,
                widget_custom_trigger_enabled: !1,
                widget_headless: !1,
                widget_move_hidden: !1,
                site_name: "",
                accessibility_url: "",
                accessibility_link_text: "",
                accessibility_link_enabled: "",
                widget_no_report: !0,
                widget_no_manage: !0,
                widget_no_logo: !0,
            },
            services: { siteId: 1, userId: 1, paidAi: !0, partner: "undefined" },
            remediationV2: {
                strategy: "AUTO",
                consolidated: null,
                perSiteRemediation: { enabled: !1, resources: null },
                alt: { enabled: !1, config: {} },
                vagueLinks: { enabled: !0, config: {} },
                headings: { enabled: !0, config: {} },
                forms: { enabled: !0, config: {} },
                moderator: { enabled: !1, config: {} },
                externalLinks: { enabled: !0, config: {} },
                brokenLinks: { enabled: !1, config: {} },
                identicalTargets: { enabled: !0, config: {} },
                customFocus: { enabled: !1, config: {} },
                ariaEditor: { enabled: !1, config: {} },
                contrast: { enabled: !0, config: { path: null, autofix: !1 } },
                emptyControls: { enabled: !0, config: {} },
                language: { enabled: !0, config: {} },
                pdf: { enabled: !1, config: {} },
                skipLinks: { enabled: !0, config: { anchorSelector: null } },
                navigationMenu: { enabled: !0, config: {} },
                popups: { enabled: !0, config: {} },
                metaViewport: { enabled: !0, config: {} },
                commonSettings: { enabled: !0, config: { mobile: { enabled: !0 }, disabledPages: [] } },
                labs: { enabled: !0, config: {} },
                slickSlider: { enabled: !0, config: {} },
            },
            speechSynthesisEnabled: "undefined" != typeof speechSynthesis,
        };
        try {
            return "undefined" != typeof _uw_pr_config && _uw_pr_config ? e(t, _uw_pr_config) : t;
        } catch (e) {
            return console.error(e), t;
        }
    };
})(),
    (function () {
        function e(e) {
            var t = r.find(function (t) {
                return t.element === e;
            });
            return t || ((t = new a(e)), r.push(t)), t;
        }
        function t(t, n, i) {
            try {
                var r = e(t);
                r.applyStyles(i, n), r.element.setAttribute("data-" + n + "-styled", !0);
            } catch (e) {
                !!console.log && console.log("applyInlineStyles error. Element: " + t);
            }
        }
        function n(t, n, i) {
            try {
                var r = e(t);
                r.resetStyles(i, n), r.element.removeAttribute("data-" + n + "-styled");
            } catch (e) {
                !!console.log && console.log("resetInlineStyles error. Element: " + t);
            }
        }
        var i = window.UserWayWidgetApp.addLib("inlineStyling");
        i.featureStyles = {
            highlinks: {
                inlineStyles: { "text-decoration": "underline", color: "#ffff00", "background-color": "#000000" },
                inlineImgStyles: { "box-sizing": "border-box", border: "1px solid #ffff00" },
                svgStyle: { "background-color": "#000000", fill: "#ffff00" },
            },
            contrast: {
                dark: {
                    key: "userway-s3-2",
                    forATag: { "background-color": "#000000", "border-color": "#ffffff", color: "#fcff3c", svg: { "background-color": "#000000", fill: "#fcff3c" } },
                    normal: { "background-color": "#000000", "border-color": "#ffffff", color: "#50d0a0" },
                    svgImg: { "background-color": "#000000", fill: "#ffffff" },
                },
                light: {
                    key: "userway-s3-3",
                    forATag: { "background-color": "#ffffff", "border-color": "#000000", color: "#0000D3", svg: { "background-color": "#ffffff", fill: "#0000D3" } },
                    normal: { "background-color": "#ffffff", "border-color": "#000000", color: "#000000" },
                    svgImg: { "background-color": "#ffffff", fill: "#000000" },
                },
            },
        };
        var r = [],
            o = {
                "userway-s6": ["userway-s3-2", "userway-s3-3", "uw-sr", "data-uw-rm-color-contrast"],
                "userway-s3-2": ["userway-s6", "uw-sr", "data-uw-rm-color-contrast"],
                "userway-s3-3": ["userway-s6", "uw-sr", "data-uw-rm-color-contrast"],
                "uw-sr": ["userway-s3-2", "userway-s3-3", "userway-s6", "data-uw-rm-color-contrast"],
                "data-uw-rm-color-contrast": ["userway-s6", "userway-s3-2", "userway-s3-3", "uw-sr"],
            },
            a = (function () {
                function e(e) {
                    (this.element = e),
                        (this.initialStylesText = e.style.cssText),
                        (this.initialStyles = this.parseStylesToObject(e)),
                        (this.listOfApplyiedStylesKeys = []),
                        (this.appliedStyles = {}),
                        (this.appliedStylesByFeature = {}),
                        (this.transition = window.getComputedStyle(this.element).getPropertyValue("transition"));
                }
                return (
                    (e.prototype.parseStylesToObject = function (e) {
                        var t = e.style.cssText.split(";"),
                            n = {};
                        return (
                            t.splice(t.length - 1, 1),
                            t.forEach(function (e) {
                                var t = e.substring(0, e.indexOf(":")).trim(),
                                    i = e.substring(e.indexOf(":") + 1);
                                (i = i ? i.trim() : null), (n[t] = i);
                            }),
                            n
                        );
                    }),
                    (e.prototype.addStyleToAppliedListKeys = function (e) {
                        this.listOfApplyiedStylesKeys.unshift(e);
                    }),
                    (e.prototype.removeStyleFromAppliedListKeys = function (e) {
                        var t = this.listOfApplyiedStylesKeys.indexOf(e);
                        -1 !== t && this.listOfApplyiedStylesKeys.splice(t, 1);
                    }),
                    (e.prototype.removeStyleFromAppliedStylesByFeature = function (e) {
                        delete this.appliedStylesByFeature[e];
                    }),
                    (e.prototype.resetStylesToInitial = function () {
                        this.element.style.cssText = this.initialStylesText;
                    }),
                    (e.prototype.applyStyles = function (e, t) {
                        var n = this;
                        (this.appliedStylesByFeature[t] = e),
                            e &&
                                (Object.keys(e).forEach(function (i) {
                                    var r, o;
                                    (n.appliedStyles[i] = {
                                        featureThatApply: t,
                                        value: e[i],
                                        oldValue: {
                                            value: null === (r = n.initialStyles[i]) || void 0 === r ? void 0 : r.replace("!important", ""),
                                            isImportant: null === (o = n.initialStyles[i]) || void 0 === o ? void 0 : o.includes("important"),
                                        },
                                    }),
                                        n.element.style.setProperty(i, e[i], "important"),
                                        n.element.style.setProperty("transition", n.transition);
                                }),
                                -1 === this.listOfApplyiedStylesKeys.indexOf(t) && this.addStyleToAppliedListKeys(t));
                    }),
                    (e.prototype.resetStyles = function (e, t) {
                        var n = this;
                        Object.keys(e).forEach(function (e) {
                            var i;
                            if (n.appliedStyles[e] && n.appliedStyles[e].featureThatApply === t) {
                                n.element.style.setProperty("transition", "all 0s ease 0s");
                                var r = n.appliedStyles[e].oldValue,
                                    o = null !== (i = r.value) && void 0 !== i ? i : "",
                                    a = r.isImportant ? "important" : "";
                                n.element.style.setProperty(e, o, a), delete n.appliedStyles[e];
                                if ("background-color" === e || "background" === e) {
                                    var s = (n.initialStyles.background && "background") || (n.initialStyles["background-color"] && "background-color");
                                    if (!s) return;
                                    var l = n.initialStyles[s].split("!");
                                    l.length >= 2 ? n.element.style.setProperty(s, l[0].trim(), "important") : n.element.style.setProperty(s, n.initialStyles[s]);
                                }
                            }
                        }),
                            this.removeStyleFromAppliedListKeys(t),
                            this.removeStyleFromAppliedStylesByFeature(t),
                            o[t] &&
                                this.listOfApplyiedStylesKeys.length &&
                                o[t].forEach(function (e) {
                                    var t = n.listOfApplyiedStylesKeys.find(function (t) {
                                        return t === e;
                                    });
                                    if (t) {
                                        var i = n.getStylesForFeature(t);
                                        if ((i && n.applyStyles(i, t), window.location.pathname === atob("L3dwcy9wb3J0YWwvUHJlcGFpZENhcmRTZWxmQ2FyZQ=="))) {
                                            var r = { "background-image": "none" };
                                            n.applyStyles(r, atob("dXctcmFrYmFuay1maXg="));
                                        }
                                    }
                                });
                    }),
                    (e.prototype.getStylesForFeature = function (e) {
                        var t;
                        switch (e) {
                            case "userway-s3-2":
                            case "userway-s3-3":
                                var n = "userway-s3-2" === e ? "dark" : "light";
                                t = "A" === this.element.tagName ? i.featureStyles.contrast[n].forATag : i.featureStyles.contrast[n].normal;
                                break;
                            case "userway-s6":
                                t = "IMG" === this.element.tagName ? i.featureStyles.highlinks.inlineImgStyles : i.featureStyles.highlinks.inlineStyles;
                                break;
                            default:
                                t = this.appliedStylesByFeature[e];
                        }
                        return t;
                    }),
                    e
                );
            })();
        (i.applyInlineStyles = t), (i.resetInlineStyles = n);
    })(),
    (function () {
        function e() {
            r = !0;
            var o = [],
                a = [];
            i.emitEvent(n.IS_MOUSE_USER_EVENT, [window[t].ContextHolder.config, o, a]), document.removeEventListener("mousemove", e);
        }
        var t = "UserWayWidgetApp",
            n = window[t].addLib("user_input_type"),
            i = window[t].getLib("event_emitter"),
            r = !1;
        (n.IS_MOUSE_USER_EVENT = "IS_MOUSE_USER"), document.addEventListener("mousemove", e);
    })();
var __values =
    (this && this.__values) ||
    function (e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            i = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function () {
                    return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
                },
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
!(function () {
    function e() {
        var e = p.config,
            i = n();
        i.filter(function (e) {
            return e;
        }),
            (v = i[1]),
            (!y || (p.config.services.MODIFY_MENU && -1 === p.config.services.MODIFY_MENU.features_pattern.split("|").indexOf("s11"))) &&
                (i = i.filter(function (e) {
                    return e.id !== W.openNavMenu;
                }));
        var r = t();
        r.setAttribute("aria-label", E(e.language, "skip_links.title") || "Quick Accessibility Options"),
            i.forEach(function (e, t) {
                var n = document.createElement("button");
                (n.className = "uw-sl__item"), n.setAttribute("data-uw-rm-ignore", "true"), n.setAttribute("data-uw-ignore-translate", "true"), n.setAttribute("lang", e.language), (n.id = e.id);
                var i = document.createElement("span");
                (i.className = "uw-sl__item__left"), i.setAttribute("data-uw-ignore-translate", "true");
                var a = document.createElement("span");
                (a.className = "uw-sl__item__img"), (a.innerHTML = e.img), i.appendChild(a);
                var s = document.createElement("span");
                (s.className = "uw-sl__item__title"), s.setAttribute("data-uw-ignore-s17", ""), s.setAttribute("data-uw-rm-ignore", "true"), s.setAttribute("data-uw-ignore-translate", "true");
                var l = c() && e.altTitle ? e.altTitle : e.title;
                (s.innerHTML = l), i.appendChild(s), n.appendChild(i);
                var u = document.createElement("span");
                (u.className = "uw-sl__e-icon"),
                    (u.innerHTML =
                        '<svg width="26" height="27" role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g class="no-fill" fill="none" fill-rule="evenodd"><path d="M4.498 24.3v-.872H1.5v-1.37h2.716v-.872H1.5v-1.27h3v-.872H.542V24.3h3.955zm1.909 0v-3.695L9.183 24.3h.95v-5.256h-.95v3.695l-2.776-3.695H5.45V24.3h.957zm7.21 0v-4.383h1.682v-.873h-4.314v.873h1.683V24.3h.948zm6.421 0v-.872H17.04v-1.37h2.716v-.872H17.04v-1.27h3v-.872h-3.956V24.3h3.955zm1.84 0v-1.767h1.017l1.24 1.767h1.086l-1.316-1.867c.757-.237 1.27-.849 1.27-1.644 0-1.025-.842-1.745-1.966-1.745H20.92V24.3h.957zm1.224-2.647h-1.224v-1.729h1.224c.65 0 1.101.33 1.101.865 0 .535-.451.864-1.101.864z" fill="#000" fill-rule="nonzero"/><path  class="no-fill" fill="none" d="M18.9 1v6.3a2.7 2.7 0 01-2.7 2.7H5.4h0" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M8.1 12.7L5.4 10l2.7-2.7"/></g></svg>'),
                    n.appendChild(u),
                    n.addEventListener("click", function (t) {
                        e.handler();
                        var i = c() && e.altTitle ? e.altTitle : e.title;
                        e.altTitle && (s.innerHTML = i), n.blur();
                    }),
                    n.addEventListener("keydown", function (e) {
                        ("Escape" !== e.code && 27 !== e.keyCode && 27 !== e.which) || (n.blur(), o());
                    }),
                    e.focusHandler && n.addEventListener("focus", e.focusHandler),
                    r.appendChild(n);
            });
    }
    function t() {
        var e = document.querySelector('div.uw-sl[role="region"]');
        if (!e) {
            (e = document.createElement("div")), (e.className = "uw-sl"), e.setAttribute("role", "region"), e.setAttribute("data-uw-rm-ignore", "true"), e.setAttribute("data-uw-ignore-translate", "true"), e.addEventListener("focus", r, !0);
            var t = document.getElementById("gatsby-focus-wrapper");
            if (t) {
                var n = function (n) {
                        var r, o;
                        try {
                            for (var a = __values(n), s = a.next(); !s.done; s = a.next()) {
                                var l = s.value;
                                if ("childList" === l.type) {
                                    Array.from(l.removedNodes).find(function (t) {
                                        return t == e;
                                    }) && (t.insertBefore(e, t.firstChild), i.disconnect());
                                }
                            }
                        } catch (e) {
                            r = { error: e };
                        } finally {
                            try {
                                s && !s.done && (o = a.return) && o.call(a);
                            } finally {
                                if (r) throw r.error;
                            }
                        }
                    },
                    i = new MutationObserver(n);
                i.observe(t, { attributes: !1, childList: !0, subtree: !0 }), t.insertBefore(e, t.firstChild);
            } else {
                var o = document.body;
                o.insertBefore(e, o.firstChild);
            }
        }
        return (e.innerHTML = ""), e;
    }
    function n() {
        var e = p.config,
            t = {
                title: E(e.language, "skip_links.title") || "Quick Accessibility Options",
                skip: E(e.language, "skip_links.skip") || "Skip to main content",
                enable_visually_impaired: E(e.language, "skip_links.enable_visually_impaired") || "Enable accessibility for low vision",
                disable_visually_impaired: E(e.language, "skip_links.disable_visually_impaired") || "Disable accessibility for low vision",
                open_accessibility_menu: E(e.language, "skip_links.open_accessibility_menu") || "Open the accessibility menu",
            };
        return [
            {
                id: W.skipToMain,
                language: e.language,
                title: t.skip,
                img:
                    '<svg focusable="false" width="26" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><g stroke="#000" stroke-width="1.5" fill="none" fill-rule="evenodd"><rect class="no-fill"  fill="none" x=".75" y=".75" width="24.5" height="22.5" rx="3"/><path class="no-fill"  fill="none" d="M1 7h24M9.5 7v17"/></g></svg>',
                handler: a,
            },
            {
                id: W.visibility,
                language: e.language,
                title: t.enable_visually_impaired,
                altTitle: t.disable_visually_impaired,
                img:
                    '<svg focusable="false" width="28" height="26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><g class="no-fill"  fill="none" fill-rule="evenodd"><path d="M13.808 6.019C8.625 6.019 4.01 9.197 1 14.148c3.01 4.951 7.625 8.129 12.808 8.129s9.797-3.178 12.807-8.129c-3.01-4.951-7.624-8.13-12.807-8.13" stroke="#000" class="no-fill" stroke-width="1.5" fill="none"/><path d="M13.813 11.124c1.704 0 3.086 1.368 3.086 3.055 0 1.688-1.382 3.055-3.086 3.055s-3.086-1.367-3.086-3.055c0-1.687 1.382-3.055 3.086-3.055m0-3.055c-3.408 0-6.172 2.735-6.172 6.11 0 3.375 2.764 6.11 6.172 6.11s6.172-2.735 6.172-6.11c0-3.375-2.764-6.11-6.172-6.11" class="fill-white"  fill="#FFF" fill-rule="nonzero"/><path d="M17.913 14.18c0 2.244-1.839 4.064-4.105 4.064-2.268 0-4.106-1.82-4.106-4.065s1.838-4.064 4.106-4.064c2.266 0 4.105 1.82 4.105 4.064" stroke="#000" stroke-width="1.5" class="no-fill"  fill="none"/><path class="no-fill"  stroke="#FFF" stroke-width="3" stroke-linecap="round" d="M2.872 22.306L22.03 3.339" fill="none"/><path stroke="#000" stroke-width="1.5" stroke-linecap="round" d="M4.24 23.661L23.398 4.694" class="no-fill"  fill="none"/></g></svg>',
                handler: d,
                focusHandler: function () {
                    p.preloadIframe();
                },
            },
            {
                id: W.openWidget,
                language: e.language,
                title: t.open_accessibility_menu,
                img:
                    '<svg focusable="false" width="23" height="28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path  d="M.018 8.639c.105-.595.65-.991 1.223-.877a53.94 53.94 0 0020.517 0c.625-.125 1.228.366 1.242 1.06.01.544-.402 1.003-.915 1.102-2.289.44-4.589.727-6.893.877-.948.063-1.647.948-1.54 1.932l.202 1.84c.314 2.87.958 5.69 1.919 8.399l1.26 3.553c.202.568-.076 1.197-.62 1.407a.994.994 0 01-.364.068c-.4 0-.768-.245-.944-.638l-.007.007-.325-.724a110.53 110.53 0 01-2.83-6.926.462.462 0 00-.878 0 105.146 105.146 0 01-2.832 6.917l-.308.68.005-.021a1.05 1.05 0 01-.98.705.994.994 0 01-.364-.068c-.544-.21-.821-.839-.62-1.407l1.26-3.553a37.235 37.235 0 001.92-8.403l.2-1.824c.107-.986-.59-1.881-1.54-1.943A55.94 55.94 0 01.86 9.914c-.57-.11-.947-.68-.841-1.275zM11.5 0c1.934 0 3.502 1.634 3.502 3.651 0 2.016-1.568 3.65-3.502 3.65-1.934 0-3.502-1.634-3.502-3.65C7.998 1.634 9.566 0 11.5 0z" fill="#000" fill-rule="evenodd"/></svg>',
                handler: i,
            },
        ];
    }
    function i() {
        p.openWidget(), f(T.OPEN_WIDGET), o();
    }
    function r(e) {
        O || (f(T.OPEN_LINKS), (O = !0)),
            "uw-enable-visibility" === e.target.id && g(),
            setTimeout(function () {
                if (x) return o();
            }, 1);
    }
    function o() {
        var e = document.querySelector("body");
        e.hasAttribute("tabindex") ||
            (e.setAttribute("tabindex", "-1"),
            setTimeout(function () {
                e.removeAttribute("tabindex");
            }, 0)),
            e.focus({ preventScroll: !0 });
    }
    function a() {
        var e = l() || document.querySelector(w);
        e.getAttribute("tabindex") || e.setAttribute("tabindex", "-1"),
            f(T.SKIP_TO_MAIN_CONTENT),
            setTimeout(function () {
                e.focus(), _.scrollToElementWithOffset(e, 70);
            }, 300);
    }
    function s(e) {
        for (var t = e, n = null; t && "BODY" !== t.tagName && (!(n = t.nextElementSibling) || !_.validateElementAccessibility(n)); ) t = t.parentElement;
        return n;
    }
    function l() {
        for (var e, t = 0; t <= b.length - 1; t++) {
            var n = document.querySelector(b[t]);
            if (n && ('[role="main"]' !== b[t] || "BODY" !== n.tagName) && _.isElementVisible(n)) {
                e = '[role="navigation"]' === b[t] || "nav" === b[t] ? s(n) : n;
                break;
            }
        }
        return e || u();
    }
    function u() {
        return A.ElementsWithText.getElementsWithText(document).find(function (e) {
            if ((-1 !== e.classList.value.search(/main/) || -1 !== e.classList.value.search(/title/) || -1 !== e.classList.value.search(/header/)) && _.validateElementAccessibility(e) && e.hasAttribute("data-uw-rm-ignore")) return e;
        });
    }
    function c() {
        return p.getAvailableBunchOfFeatures().every(function (e) {
            return p.config.settings["userway-" + e].value;
        });
    }
    function d() {
        if (c()) {
            if (p.isSoundEffectsEnabled())
                try {
                    var e = new Audio(p.config.cdn + "widgetapp/sounds/reset.mp3");
                    e.play();
                } catch (e) {}
            _.postMessage({ action: "updateVisuallyImpairedState", config: !1 });
        } else {
            if (p.isSoundEffectsEnabled())
                try {
                    var e = new Audio(p.config.cdn + "widgetapp/sounds/viEnabled.mp3");
                    e.play();
                } catch (e) {}
            _.postMessage({ action: "updateVisuallyImpairedState", config: !0 }),
                setTimeout(function () {
                    document.querySelector(".uai").focus();
                    var e = document.querySelectorAll(".uw-sl__item")[1];
                    e.focus(), e.blur();
                }, 10);
        }
        f(T.VISUALLY_IMPAIRED);
    }
    function g() {
        var e = document.querySelector("#uw-enable-visibility .uw-sl__item__title[data-uw-rm-ignore]"),
            t = document.querySelector("#uw-enable-visibility.uw-sl__item"),
            i = n()[1];
        t && e && i.altTitle && (e.innerHTML = c() ? i.altTitle : i.title);
    }
    function f(e) {
        var t = {
                account: p.config.account,
                feat: "s22",
                siteId: p.config.services.siteId,
                state: e,
                uid: p.config.uid,
                type: p.config.services.paidAi ? "paid" : "free",
                widgetType: p.config.widgetLayout || p.config.tunings.widget_layout,
                real: !0,
            },
            n = atob("eExxdFhtQVRSdw=="),
            i = UserWayWidgetApp.ContextHolder.config.account;
        p.config.onPrem ||
            (n !== i &&
                _.request({ method: "POST", url: L + "/v1/stats/enabled-feature", body: t, header: { "Content-Type": "application/json" } }).then(
                    function (e) {},
                    function (e) {
                        console.warn("Statistics error");
                    }
                ));
    }
    var p,
        y,
        v,
        m = UserWayWidgetApp.addLib("skip_links"),
        h = "#uw_skip_to_main_content_anchor",
        w = "#userwayAccessibilityIcon",
        b = ["main", "h1", "nav", '[role="navigation"]', '[role="main"]', "h2", "h3", "h4", "h5", "h6"],
        _ = UserWayWidgetApp.getLib("util"),
        S = UserWayWidgetApp.getLib("localization_manager"),
        E = S.translate,
        A = UserWayWidgetApp.getLib("helpers"),
        L = "https://api.userway.org/api",
        T = { OPEN_LINKS: 1, SKIP_TO_MAIN_CONTENT: 2, VISUALLY_IMPAIRED: 3, OPEN_WIDGET: 4, PAGE_STRUCTURE: 5 },
        W = { skipToMain: "uw-skip-to-main", visibility: "uw-enable-visibility", openWidget: "uw-open-accessibility", openNavMenu: "uw-open-nav-menu" },
        x = !1,
        O = !1;
    (m.insert = function () {
        var t, n;
        (p = UserWayWidgetApp.addLib("main")), (y = p.config.services && p.config.services.paidAi);
        var i = UserWayWidgetApp.getLib("remediationConfig") ? UserWayWidgetApp.getLib("remediationConfig").skipLinks : null;
        (null === i || void 0 === i ? void 0 : i.enabled) &&
            ((null === (t = null === i || void 0 === i ? void 0 : i.config) || void 0 === t ? void 0 : t.anchorSelector) && (h = null === (n = null === i || void 0 === i ? void 0 : i.config) || void 0 === n ? void 0 : n.anchorSelector),
            b.unshift(h),
            e(),
            document.addEventListener("click", function () {
                (x = !0),
                    setTimeout(function () {
                        x = !1;
                    }, 300);
            }));
    }),
        (m.updateLinks = function () {
            setTimeout(function () {
                return e();
            }, 500);
        });
})(),
    (function () {
        var e = UserWayWidgetApp.addLib("scan_manager"),
            t = UserWayWidgetApp.getLib("util"),
            n = "https://cdn.userway.org/",
            i = "widgetapp/2025-01-21-14-07-56/scan/scan_1737468476256.js";
        (e.run = function () {
            var n = UserWayWidgetApp.ContextHolder.config;
            n.onPrem ||
                setTimeout(function () {
                    if (!n.services || 81434 !== n.services.userId) {
                        var i = n.tunings && !!n.tunings.widget_scan_url_params;
                        if (!(location.href && (location.href.indexOf("?") > -1 || location.href.indexOf("&") > -1)) || i) {
                            var r = n.remediation ? "WIDGET_ON" : "WIDGET_OFF";
                            "fetch" in window &&
                                ((UserWayWidgetApp.ContextHolder.config.scanPage = !0),
                                fetch("https://api.userway.org/api/a11y-data/v0/page/" + encodeURIComponent(location.href) + "/" + (t.isMobile() ? "MOBILE" : "DESKTOP") + "/" + r + "/status").then(function (t) {
                                    try {
                                        t.json().then(function (t) {
                                            t.payload && "CONTRIB_MISSING" === t.payload.status && e.loadAndExecScan();
                                        });
                                    } catch (e) {}
                                }));
                        }
                    }
                }, 5e3);
        }),
            (e.accessibilityScore = function () {
                return new Promise(function (e, r) {
                    UserWayWidgetApp.ContextHolder.config.scanPage = !1;
                    var o = UserWayWidgetApp.getLib("scan_helper");
                    o && "function" == typeof o.scan
                        ? o.scan().then(function (t) {
                              e(t);
                          })
                        : t.execJs(n + i, "sha256-32SWomRwCTVfX5mgL9NpmKDQe9FRxzyuFxa/tqOpdrU=").then(function () {
                              UserWayWidgetApp.getLib("scan_helper")
                                  .scan()
                                  .then(function (t) {
                                      e(t);
                                  });
                          });
                });
            }),
            (e.loadAndExecScan = function () {
                t.execJs(n + i, "sha256-32SWomRwCTVfX5mgL9NpmKDQe9FRxzyuFxa/tqOpdrU=").then(function () {
                    UserWayWidgetApp.getLib("scan_helper").scan();
                });
            });
    })();
var FuncKeys;
!(function (e) {
    (e.altKey = "altKey"), (e.ctrlKey = "ctrlKey"), (e.shiftKey = "shiftKey");
})(FuncKeys || (FuncKeys = {}));
var DEFAULT_OPEN_HOTKEY = [FuncKeys.ctrlKey, "KeyU"];
!(function () {
    var e = UserWayWidgetApp.addLib("WIDGET_HOTKEYS"),
        t = UserWayWidgetApp.getLib("main"),
        n = function () {
            var e,
                n,
                i = JSON.parse((null === (n = null === (e = t.config) || void 0 === e ? void 0 : e.tunings) || void 0 === n ? void 0 : n.widget_open_hotkey) || "null");
            return i && (i = i.filter(Boolean)), (null === i || void 0 === i ? void 0 : i.length) >= 2 ? i : DEFAULT_OPEN_HOTKEY;
        };
    e.isHotkeyToOpenWidget = function (e) {
        return n().every(function (t) {
            return e.code === t || e[t];
        });
    };
})(),
    (function () {
        function e(e, n) {
            if (n.length) {
                if (n[0] && n[0].id && "string" == typeof n[0].id && n[0].id.indexOf("powered_by_pixle") > -1) return;
                t();
            }
        }
        function t() {
            try {
                var e = [];
                r.forEach(function (t) {
                    switch (t.type) {
                        case "QUERY_SELECTOR":
                            t.data.forEach(function (t) {
                                document.querySelector(t.s) && e.push(t.id);
                            });
                    }
                }),
                    e.length && i(e);
            } catch (e) {}
        }
        function n() {
            try {
                setTimeout(function () {
                    r.forEach(function (e) {
                        switch (e.type) {
                            case "FUNCTION":
                                e.data.forEach(function (e) {
                                    var t = Function(e.s)();
                                    if (t && t.length) {
                                        var n = { method: "POST", url: u + "/v1/helper/ss/hashed", header: { "Content-Type": "application/json" }, body: { names: t, site: location.host } };
                                        l.request(n);
                                    }
                                });
                        }
                    });
                }, 5e3);
            } catch (e) {}
        }
        function i(e) {
            var t = { host: location.host, pathname: location.pathname };
            e.forEach(function (e) {
                l.request({ method: "POST", url: u + "/remediation/common-patterns/collector/" + e, header: { "Content-Type": "application/json" }, body: t });
            });
        }
        var r,
            o = UserWayWidgetApp.addLib("cpr_usage_detector"),
            a = UserWayWidgetApp.getLib("event_emitter"),
            s = UserWayWidgetApp.getLib("dom_observer"),
            l = UserWayWidgetApp.getLib("util"),
            u = "https://api.userway.org/api";
        o.run = function () {
            var i, o;
            (r = null === (o = null === (i = UserWayWidgetApp.ContextHolder) || void 0 === i ? void 0 : i.config) || void 0 === o ? void 0 : o.cpr) && (n(), t(), a.on(s.DOM_OBSERVER_DOM_CHANGED_EVENT, e));
        };
    })(),
    (function () {
        function e(e, n, i, r) {
            void 0 === r && (r = "");
            var o = (e + (r ? "-" + r : "")).toLowerCase(),
                a = function (a) {
                    a.some(function (t) {
                        var i = t.lang,
                            a = t.name,
                            s = i.toLowerCase(),
                            l = a.includes(n),
                            u = r ? s === o : s.startsWith(e.toLowerCase());
                        return l && u;
                    }) && t(e, n, i, r);
                },
                s = function () {
                    var e = window.speechSynthesis.getVoices();
                    e.length && a(e);
                };
            try {
                window.speechSynthesis.addEventListener("voiceschanged", s), s();
            } catch (e) {
                c.logger.error("Error checking system voices:", e);
            }
        }
        function t(e, t, n, i) {
            d.push({
                ttsVoiceName: t,
                ttsLangIsoCode: e,
                ttsLocaleIsoCode: i,
                fallback: n,
                toLocaleStr: function () {
                    return e + i ? "-" + i : "";
                },
            });
        }
        function n(e) {
            if (e) return !!o(e, !1);
            var t = document.getElementsByTagName("html")[0];
            return !!o((null === t || void 0 === t ? void 0 : t.getAttribute("lang")) || (null === t || void 0 === t ? void 0 : t.getAttribute("xml:lang")));
        }
        function i() {
            var e = document.getElementsByTagName("html")[0],
                t = (null === e || void 0 === e ? void 0 : e.getAttribute("lang")) || (null === e || void 0 === e ? void 0 : e.getAttribute("xml:lang")),
                n = o(t);
            n &&
                c.execForDocumentAndIframes(function () {
                    var e = this.getElementsByTagName("html")[0];
                    !((null === e || void 0 === e ? void 0 : e.getAttribute("lang")) || (null === e || void 0 === e ? void 0 : e.getAttribute("xml:lang"))) && (null === e || void 0 === e || e.setAttribute("lang", n.toLocaleStr()));
                });
        }
        function r(e) {
            var t,
                n = Array.from(e.ownerDocument.querySelectorAll("*[lang]")),
                i = s("en");
            try {
                if (1 === n.length && "HTML" === n[0].tagName) {
                    return o(null === (t = n[0]) || void 0 === t ? void 0 : t.getAttribute("lang"), !1) || i;
                }
                for (var r = e, a = null; r && !(a = o(r && "function" == typeof r.getAttribute ? r.getAttribute("lang") : null, !1)) && "HTML" !== r.tagName; ) r = r.parentElement;
                return a || i;
            } catch (e) {
                return console.warn(e), i;
            }
        }
        function o(e, t) {
            if ((void 0 === t && (t = !0), !e)) return null;
            var n = c.formatLangCode(e);
            n.toLowerCase().includes("zh") && n.toLowerCase().includes("hans") && (n = "zh"), n.includes("zh-") && (n = "zh-Hant");
            var i = n.slice(0, 2),
                r = n.slice(2),
                s = a(i, r);
            if (!s && t) {
                var l = document.querySelector("html");
                return o((null === l || void 0 === l ? void 0 : l.getAttribute("lang")) || (null === l || void 0 === l ? void 0 : l.getAttribute("xml:lang")) || null, !1);
            }
            return s;
        }
        function a(e, t) {
            var n = d.find(function (n) {
                return n.ttsLangIsoCode === e && n.ttsLocaleIsoCode === t.replace("-", "");
            });
            return (null !== n && void 0 !== n ? n : s(e)) || null;
        }
        function s(e) {
            return d.find(function (t) {
                return t.ttsLangIsoCode === e && t.fallback;
            });
        }
        var l = "UserWayWidgetApp",
            u = window[l].addLib("tts-language-resolver"),
            c = window[l].getLib("util"),
            d = [];
        (u.getLocaleForText = o),
            (u.getLocaleForElement = r),
            (u.isAvailableWithPreferedLanguage = n),
            (u.enrichDomWithPreferableLanguage = i),
            t("en", "US English Female", !1, ""),
            t("en", "US English Female", !1, ""),
            t("en", "US English Female", !0, "US"),
            t("en", "Australian Female", !1, "AU"),
            t("en", "UK English Female", !1, "GB"),
            t("ru", "Russian Female", !0, ""),
            t("ar", "Arabic Female", !0, ""),
            t("cs", "Czech Female", !0, ""),
            t("el", "Greek Female", !0, ""),
            t("es", "Spanish Female", !0, ""),
            t("fr", "French Female", !0, ""),
            t("hi", "Hindi Female", !0, ""),
            t("it", "Italian Female", !0, ""),
            t("ja", "Japanese Male", !0, ""),
            t("ko", "Korean Female", !0, ""),
            t("nl", "Dutch Female", !0, ""),
            t("pl", "Polish Female", !0, ""),
            t("pt", "Portuguese Female", !0, ""),
            t("pt", "Brazilian Portuguese Female", !1, "BR"),
            t("ro", "Romanian Female", !0, ""),
            t("sv", "Swedish Female", !0, ""),
            t("tr", "Turkish Female", !0, ""),
            t("uk", "Ukrainian Female", !0, ""),
            t("ua", "Ukrainian Female", !0, ""),
            t("zh", "Chinese Female", !0, ""),
            t("zh", "Chinese (Hong Kong) Male", !0, "Hant"),
            t("in", "Indonesian Female", !0, ""),
            t("id", "Indonesian Female", !0, ""),
            t("no", "Norwegian Female", !0, ""),
            t("nb", "Norwegian Female", !0, "NO"),
            t("sk", "Slovak Female", !0, ""),
            t("ta", "Tamil Male", !0, ""),
            t("th", "Thai Female", !0, ""),
            t("sq", "Albanian Male", !0, ""),
            t("ca", "Catalan Male", !0, ""),
            t("hr", "Croatian Male", !0, ""),
            t("da", "Danish Female", !0, ""),
            t("fi", "Finnish Female", !0, ""),
            t("hu", "Hungarian Female", !0, ""),
            t("is", "Icelandic Male", !0, ""),
            t("lv", "Latvian Male", !0, ""),
            t("mk", "Macedonian Male", !0, ""),
            t("sr", "Serbian Male", !0, ""),
            t("vi", "Vietnamese Male", !0, ""),
            t("de", "Deutsch Female", !0, ""),
            t("mg", "Montenegrin Male", !0, ""),
            t("fo", "Faroese custom", !0, ""),
            e("he", "Carmit", !0, ""),
            e("he", "Microsoft Asaf - Hebrew (Israel)", !0, "");
    })(),
    (function () {
        function e(e) {
            var t = void 0 === e ? { pageLanguage: "", widgetLanguage: "" } : e,
                n = t.pageLanguage,
                r = t.widgetLanguage;
            return i.isAvailableWithPreferedLanguage(n) && i.isAvailableWithPreferedLanguage(r);
        }
        var t = "UserWayWidgetApp",
            n = window[t].addLib("tts-reader-status"),
            i = window[t].getLib("tts-language-resolver");
        n.isAvailable = e;
    })();
var userwaySupportedLanguages = [
        "en-US",
        "az",
        "ar",
        "bn",
        "bg",
        "zh",
        "zh-Hant",
        "hr",
        "cs",
        "nl",
        "en-AU",
        "en",
        "en-GB",
        "et",
        "fi",
        "fo",
        "fr",
        "ka",
        "de",
        "el",
        "he",
        "hi",
        "hu",
        "it",
        "id",
        "ja",
        "ko",
        "lt",
        "mgo",
        "no",
        "fa",
        "pl",
        "pt-BR",
        "pt",
        "pa",
        "ro",
        "ru",
        "sk",
        "sl",
        "sr",
        "sr-Latn",
        "es",
        "es-MX",
        "sv",
        "tr",
        "uk",
        "cy",
        "vi",
        "da",
        "ceb",
        "haw",
        "tl",
        "th",
        "sm",
        "ca",
        "ht",
        "ilo",
        "ps",
        "prs",
        "eu",
        "hmn",
        "hy",
    ],
    userwayMapToSupportedLanguages = { in: "id", ua: "uk", nb: "no", "zh-TW": "zh-Hant", en: "en-US" },
    userwaySupportedLocales = ["en-US", "en-AU", "en-GB", "pt-BR", "es-MX", "zh-Hant", "sr-Latn"],
    USERWAY_DEFAULT_FALLBACK_LANGUAGE = "en-US",
    getUserwaySupportedLanguage = function (e) {
        return userwayMapToSupportedLanguages[e] ? userwayMapToSupportedLanguages[e] : (e.indexOf("-") > -1 && (e = e.substring(0, e.indexOf("-"))), userwaySupportedLanguages.includes(e) ? e : null);
    },
    SITE_LANGUAGE_FROM_SCRIPT = "site-language",
    userwaySupports = function (e) {
        return userwaySupportedLanguages.includes(e);
    },
    formatLangCode = function (e) {
        return /([-_,])/.test(e)
            ? e.replace(/(^\w+)([-_,])(\w+$)/, function (e, t, n, i) {
                  return t.toLowerCase() + "-" + i.toUpperCase();
              })
            : e.toLowerCase();
    };
!(function () {
    var e = UserWayWidgetApp.getLib("util"),
        t = function () {
            try {
                var t = e.getProperty("userway-selectedLang", !1);
                return userwaySupports(t) ? t : null;
            } catch (e) {
                return console.warn("Unable to resolve persisted in the local storage language", e), null;
            }
        },
        n = function (e) {
            try {
                if (void 0 !== UserWayWidgetApp.ContextHolder.config._userway_config) {
                    var t = e;
                    if (t) {
                        if (userwaySupports(t)) return t;
                        var n = getUserwaySupportedLanguage(t);
                        return n || null;
                    }
                }
            } catch (e) {
                console.warn("Unable to resolve language set as hardcoded config in the UserWay embed script", e);
            }
            return null;
        },
        i = function () {
            var e;
            return n(null === (e = UserWayWidgetApp.ContextHolder.config._userway_config) || void 0 === e ? void 0 : e.language);
        },
        r = function () {
            var e,
                t,
                i,
                r = UserWayWidgetApp.ContextHolder.config;
            return (null === (t = null === (e = null === r || void 0 === r ? void 0 : r.services) || void 0 === e ? void 0 : e.LIVE_TRANSLATIONS) || void 0 === t ? void 0 : t.is_enabled)
                ? n(null === (i = r._userway_config) || void 0 === i ? void 0 : i[SITE_LANGUAGE_FROM_SCRIPT])
                : null;
        },
        o = function () {
            try {
                var e = document.getElementsByTagName("html")[0],
                    t = e.getAttribute("lang") || e.getAttribute("xml:lang");
                if (!t) return null;
                if (t.toLowerCase().includes("zh") && t.toLowerCase().includes("hans")) return "zh";
                if (t.includes("zh-")) return "zh-Hant";
                if (t.includes("sr-")) return "sr-Latn";
                var n = formatLangCode(t);
                return userwaySupportedLocales.includes(n) || (n = n.split("-")[0]), userwayMapToSupportedLanguages[n] && (n = userwayMapToSupportedLanguages[n]), userwaySupports(n) ? n : null;
            } catch (e) {
                return console.warn("Unable to parse page html lang attribute", e), null;
            }
        },
        a = function (e) {
            return void 0 === e && (e = { ownerLangSelection: "" }), t() || i() || e.ownerLangSelection || o() || USERWAY_DEFAULT_FALLBACK_LANGUAGE;
        },
        s = function (e) {
            void 0 === e && (e = { ownerLangSelection: "" });
            var n = t();
            return !!n && n === (i() || e.ownerLangSelection || o() || USERWAY_DEFAULT_FALLBACK_LANGUAGE);
        },
        l = UserWayWidgetApp.addLib("widget_language_resolver");
    Object.assign(l, { resolve: a, resolveUserLangSelection: t, resolveOwnerLangHardcoded: i, resolvePageLangAttribute: o, resolveLanguageOnScript: r, userLandSelectionIsDefaultLangSelected: s });
})();
var __assign =
    (this && this.__assign) ||
    function () {
        return (
            (__assign =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++) {
                        t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }
                    return e;
                }),
            __assign.apply(this, arguments)
        );
    };
!(function () {
    var e,
        t,
        n = UserWayWidgetApp.addLib("USER_TRACKING"),
        i = UserWayWidgetApp.getLib("util");
    !(function (e) {
        e.KeyboardUser = "KeyboardUser";
    })(t || (t = {}));
    var r = {
            isTab: function (e) {
                return 9 === e.keyCode || "Tab" === e.key || "Tab" === e.code;
            },
            isArrowLeft: function (e) {
                return 37 === e.keyCode || "ArrowLeft" === e.key || "ArrowLeft" === e.code;
            },
            isArrowRight: function (e) {
                return 39 === e.keyCode || "ArrowRight" === e.key || "ArrowRight" === e.code;
            },
        },
        o =
            ((e = {}),
            (e[t.KeyboardUser] = (function (e) {
                var t = 0;
                return __assign(__assign({}, e), {
                    addMatch: function () {
                        return (t += 1);
                    },
                    matches: t,
                    isFullyMatched: function () {
                        return t >= e.successMatches;
                    },
                });
            })({
                flag: "b1",
                successMatches: 2,
                test: function (e) {
                    return [r.isTab, r.isArrowLeft, r.isArrowRight].some(function (t) {
                        return t(e);
                    });
                },
            })),
            e);
    (n.start = function () {
        a() || l() || document.addEventListener("keydown", s);
    }),
        (n.stop = function () {
            document.removeEventListener("keydown", s);
        });
    var a = function () {
            var e = atob("eExxdFhtQVRSdw=="),
                t = UserWayWidgetApp.ContextHolder.config.account,
                n = UserWayWidgetApp.ContextHolder.config.services.siteId;
            return e === t || !n;
        },
        s = function (e) {
            var i = o[t.KeyboardUser];
            i.test(e) && (i.addMatch(), i.isFullyMatched() && (n.stop(), c(i.flag).then(u).catch(n.start)));
        },
        l = function () {
            try {
                var e = localStorage.getItem("recognizedUserBehavior");
                return !!JSON.parse(e);
            } catch (e) {
                return !1;
            }
        },
        u = function () {
            localStorage.setItem("recognizedUserBehavior", JSON.stringify(!0));
        },
        c = function (e) {
            var t = UserWayWidgetApp.ContextHolder.config,
                n = t.account,
                r = t.uid,
                o = t.widgetLayout,
                a = t.tunings,
                s = t.services,
                l = s.siteId,
                u = s.paidAi;
            return i.request({
                method: "POST",
                url: "https://api.userway.org/api/v1/stats/enabled-feature",
                header: { "Content-Type": "application/json" },
                body: { account: n, siteId: l, uid: r, type: u ? "paid" : "free", widgetType: o || a.widget_layout, feat: e, real: !0 },
            });
        };
})();
var __assign =
        (this && this.__assign) ||
        function () {
            return (
                (__assign =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++) {
                            t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        }
                        return e;
                    }),
                __assign.apply(this, arguments)
            );
        },
    __rest =
        (this && this.__rest) ||
        function (e, t) {
            var n = {};
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
            return n;
        },
    __read =
        (this && this.__read) ||
        function (e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var i,
                r,
                o = n.call(e),
                a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; ) a.push(i.value);
            } catch (e) {
                r = { error: e };
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o);
                } finally {
                    if (r) throw r.error;
                }
            }
            return a;
        },
    __values =
        (this && this.__values) ||
        function (e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                i = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function () {
                        return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
                    },
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        },
    __spreadArray =
        (this && this.__spreadArray) ||
        function (e, t, n) {
            if (n || 2 === arguments.length) for (var i, r = 0, o = t.length; r < o; r++) (!i && r in t) || (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
            return e.concat(i || Array.prototype.slice.call(t));
        };
!(function () {
    function e() {
        Et.initializeConfig().then(function (e) {
            (yt = e), (pt.config = yt);
            var t = null;
            try {
                t = window.localStorage.getItem(gn);
            } catch (e) {}
            if (!t) {
                t = n();
                try {
                    window.localStorage.setItem(gn, t);
                } catch (e) {}
            }
            (yt.uid = t), f() ? m() : (We(), g());
        });
    }
    function t() {
        return !!yt && !!yt.tunings && yt.tunings.widget_blocked_for_site;
    }
    function n() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (e) {
            return (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16);
        });
    }
    function i() {
        return !(!yt || !yt.tunings) && (!0 === yt.tunings.widget_hidden_for_site || (!0 === yt.tunings.widget_hidden_for_mobile && _t.isMobile()));
    }
    function r() {
        var e,
            t = Boolean(null === (e = yt.services) || void 0 === e ? void 0 : e.paidAi),
            n = _userway_config.widget_layout || yt.tunings.widget_layout;
        return "headless" !== n || t ? n : "full";
    }
    function o() {
        var e = r();
        return !e || ["full", "headless"].includes(e);
    }
    function a() {
        (st = UserWayWidgetApp.getLib("nano-widget")),
            st.load().then(function () {
                st.init();
            });
    }
    function s() {
        (lt = UserWayWidgetApp.getLib("mini-widget")),
            lt.load().then(function () {
                lt.init();
            });
    }
    function l() {
        Ie(),
            $(yt),
            _t.addStylesheetOnce(Yt),
            ue(),
            Pe(),
            Lt.initializeDomChangesObserver(),
            Ut.init(),
            Wt.run(),
            Ot.run(),
            xt.start(),
            xe(!0),
            u(),
            window.addEventListener("message", function (e) {
                var t = e.data || {};
                if (t.isUserWay && "sendEventToGoogleAnalytics" === t.action) {
                    var n = "";
                    switch (t.state) {
                        case 0:
                            n = "disabled";
                            break;
                        case 1:
                            n = "enabled";
                    }
                    pn(t.name, n);
                }
            }),
            Ce().then(function () {
                var e = r();
                switch (((e || "" === e) && ((yt.widgetLayout = e), I()), e)) {
                    case "nano":
                        a();
                        break;
                    case "mini":
                        s();
                }
            });
    }
    function u(e) {
        (null === e || void 0 === e ? void 0 : e.enabled) && _t.execJs(Rt + Bt, "sha256-3MwZHeSsAX1MisygSu2itL5m5zqw/7faPKYSqTmboKc=");
    }
    function c() {
        var e,
            t,
            n = sessionStorage.getItem("qa_widget_lst_button_enabled"),
            a = sessionStorage.getItem("qa_widget_lst_button_type"),
            s = sessionStorage.getItem("qa_widget_lst_button_icon_type");
        return (
            "true" === n && ((yt.tunings.widget_lst_button_enabled = n), (yt.tunings.widget_lst_button_type = a), (yt.tunings.widget_lst_button_icon_type = s)),
            i()
                ? void ue()
                : o()
                ? (m(),
                  h(),
                  w(),
                  y(),
                  b(),
                  Ie(),
                  $(yt),
                  u(yt.statistics),
                  ee(yt.services.LIVE_TRANSLATIONS, null === (t = null === (e = yt.remediation) || void 0 === e ? void 0 : e.commonSettings) || void 0 === t ? void 0 : t.enabled),
                  void _t.addStylesheetOnce(Yt).then(function () {
                      if ((Ue(Kt), ue(), "headless" === r())) UserWay.iconVisibilityOff();
                      else {
                          _e(), q();
                          var e = _t.getProperty(Jt),
                              t = !_t.isMobile() && yt.tunings.widget_position_nudge,
                              n = _t.isMobile() && yt.tunings.widget_position_nudge_mobile;
                          if ((t || n) && !e)
                              var i = setInterval(function () {
                                  document.querySelector(".userway_buttons_wrapper") && (clearInterval(i), be());
                              }, 50);
                          M(), N();
                      }
                      Pe(),
                          _t.isMobile() || Tt.insert(),
                          G(),
                          ae(),
                          de(),
                          le(),
                          Fe(),
                          yt.partner === atob("cmFrYmFuaw==") && window.location.pathname === atob("L3dwcy9wb3J0YWwvUHJlcGFpZENhcmRTZWxmQ2FyZQ==") && document.querySelector("#keyboard").setAttribute("data-uw-ignore-translate", !0),
                          Lt.initializeDomChangesObserver(),
                          Ut.init(),
                          Wt.run(),
                          Ot.run(),
                          xt.start(),
                          xe(!0);
                  }))
                : l()
        );
    }
    function d() {
        var e = _userway_config["z-index"];
        if (void 0 !== e) {
            if (((e = parseInt(e, 10)), isNaN(e))) return void console.log("Embedded z-index is invalid");
            an = "uwy-level";
            var t = document.createElement("style");
            (t.innerHTML = ".uwy." + an + "{z-index:" + e + ";}"), document.head.appendChild(t);
        }
    }
    function g() {
        if (!window._userway) {
            window._userway = !0;
            try {
                localStorage && "function" == typeof localStorage.getItem && localStorage.getItem("debug") && "undefined" !== localStorage.getItem("debug") && JSON.parse(localStorage.getItem("debug")) && te();
            } catch (e) {}
            Te(),
                Z(function () {
                    if (t()) return console.warn("UserWay Accessibility widget is deactivated");
                    if (_t.isMobile() && yt.tunings && ("false" === yt.tunings.mobile || !1 === yt.tunings.mobile)) console.warn("UserWay Accessibility widget is disabled on mobile devices via tunings setting");
                    else
                        var e = setInterval(function () {
                            document.body && (clearInterval(e), c());
                        }, 500);
                    d();
                });
        }
    }
    function f() {
        var e = _t.getCookie("hidewidget");
        if (e) {
            try {
                var t = parseInt(e);
                switch (t) {
                    case 0:
                        wn("current", null);
                        break;
                    case 864e5:
                        wn("day", t);
                        break;
                    case 6048e5:
                        wn("month", t);
                        break;
                    case 26784e5:
                    default:
                        wn("week", t);
                }
                _t.setCookie("hidewidget", "", null), localStorage.removeItem("hideWidget");
            } catch (e) {
                _t.logger.error("Hide widget cookie error", e);
            }
            return !0;
        }
        var n = _t.getItemWithExpiry("hideUWWidget"),
            i = sessionStorage.getItem("hideUWWidget");
        return n || i;
    }
    function p() {
        return yt && yt.tunings && yt.tunings.hasOwnProperty("widget_sounds") && yt.tunings.widget_sounds;
    }
    function y() {
        window.addEventListener("keydown", v, !0);
    }
    function v(e) {
        ("Tab" !== e.key && 9 !== e.keyCode && "ArrowDown" !== e.key) ||
            (UserWayWidgetApp.ContextHolder.config.services.paidAi &&
                UserWayWidgetApp.ContextHolder.remediationModulePromise.then(function () {
                    window.removeEventListener("keydown", v, !0), window.postMessage({ isUserWay: !0, action: "remediation", type: "app-key-nav-enabled" }, "*"), document.querySelector("html").setAttribute("data-uw-w-kb", "");
                }));
    }
    function m() {
        window.addEventListener("keydown", L, !0);
    }
    function h() {
        var e,
            t = (null === (e = yt.services) || void 0 === e ? void 0 : e.paidAi) || !yt.services.hasOwnProperty("paidAi"),
            n = yt.services.hasOwnProperty("MODIFY_MENU") && yt.services.MODIFY_MENU.is_enabled,
            i = !n || -1 !== yt.services.MODIFY_MENU.features_pattern.split("|").indexOf("s9");
        t && i && It.isAvailable({ pageLanguage: yt.widgetPageLang, widgetLanguage: yt.language }) && window.addEventListener("keydown", W, !0);
    }
    function w() {
        window.addEventListener("keydown", T, !0);
    }
    function b() {
        var e = yt.services.hasOwnProperty("MODIFY_MENU") && yt.services.MODIFY_MENU.is_enabled,
            t = yt.services.hasOwnProperty("VOICE_NAVIGATION") && yt.services.VOICE_NAVIGATION.is_enabled,
            n = !!window.chrome,
            i = Boolean(navigator.userAgent.match(/safari/i));
        (n || i) && t && (!e || !yt.services.MODIFY_MENU.features_pattern.split("|").includes("s24")) && window.addEventListener("keydown", x, !0);
    }
    function _() {
        var e = document.querySelector(".userway_buttons_wrapper");
        ["top", "bottom", "left", "right"].forEach(function (t) {
            null === e || void 0 === e || e.style.setProperty([t], null, "important");
        });
    }
    function S() {
        if (!$t) {
            $t = !0;
            var e = function (e) {
                var t = e.data || {};
                if (t.isUserWay)
                    if ("appConfigLoaded" === t.action) rn || (H("hide"), (rn = !0)), !vt && ht && (ye(), H("hide")), (vt = !1);
                    else if ("mailToSupport" === t.action) window.open("mailto:support@userway.org", "_blank");
                    else if ("download_pdf" === t.action) _t.downloadPdfFile(t.url);
                    else if ("AiPageReload" === t.action) document.location.reload();
                    else if ("openExternalLink" === t.action)
                        try {
                            if (!_t.isValidUrl(t.url)) return;
                            _t.openUrl(t.url);
                        } catch (e) {
                            return;
                        }
                    else if ("getConfig" === t.action) I();
                    else if ("isWidgetOpened" === t.action) ht ? _t.postMessage({ action: "toggled", state: "show" }) : _t.postMessage({ action: "toggled", state: "hide" });
                    else if ("close" === t.action) he();
                    else if ("open" === t.action) me();
                    else if ("manageIconVisibility" === t.action) ge(t.type);
                    else if ("default_language_changed" === t.action)
                        t.lang || _t.postMessage({ action: "setHtmlLangAttribute", lang: un || "en-US" }), window.localStorage.removeItem("userway-selectedLang"), window.localStorage.removeItem("userway-selectedSiteLang");
                    else if ("on_demand_reader" === t.action) {
                        if (t.contentToRead && (yt.services.paidAi || !yt.services.hasOwnProperty("paidAi"))) {
                            var n = t.menuLanguage;
                            t.contentWithPageLang && (n = Nt.resolvePageLangAttribute()), je.readTextContent({ language: n, contentToRead: t.contentToRead, isAlert: t.isAlert, readingSpeedRate: t.readingSpeedRate });
                        }
                    } else if ("on_demand_reader_stop" === t.action) je.stopReading();
                    else if ("setProperties" === t.action) {
                        for (var i in t.settings) t.settings.hasOwnProperty(i) && void 0 !== yt.settings[i] && "userway_hidden" !== i && (yt.settings[i].value = t.settings[i].value);
                        var r = ["s101", "s102", "s103", "s104", "s105", "s106", "s107", "s108"],
                            o = yt.services.hasOwnProperty("MODIFY_MENU") && yt.services.MODIFY_MENU.is_enabled;
                        o &&
                            t.pattern &&
                            (yt.services.MODIFY_MENU.features_pattern = t.pattern
                                .filter(function (e) {
                                    return -1 === r.indexOf(e);
                                })
                                .join("|")),
                            Le(),
                            xe();
                    } else if ("pageStructureDialog" === t.action) {
                        var a = document.activeElement,
                            s = t.settings.tab || "headers";
                        "links" === s ? Qe.showPageStructureLinks(a) : "landmarks" === s ? Qe.showPageStructureLandmarks(a) : Qe.showPageStructureHeaders(a);
                    } else if ("setWidgetColor" === t.action) (yt.tunings.widget_color = t.color), (yt.tunings.widget_color_gradient = t.gradient), N(), G();
                    else if ("setIconType" === t.action) (yt.tunings.widget_icon_type = t.iconType), N();
                    else if ("setSoundEffects" === t.action) yt.tunings.widget_sounds = t.value;
                    else if ("isVisibleOnMobile" === t.action) yt.tunings.widget_hidden_for_mobile = t.value;
                    else if ("setIconSize" === t.action) (yt.tunings.widget_icon_size = t.iconSize), N();
                    else if ("setWidgetLanguage" === t.action)
                        He("enable", "LIVE_TRANSLATIONS"),
                            X(t.langCode),
                            setTimeout(function () {
                                k(), U();
                            }),
                            Tt.updateLinks();
                    else if ("loadLiveTranslationComponent" === t.action) ee({ is_enabled: !0 }, !1);
                    else if ("websiteTranslationCompleted" === t.action || "websiteTranslationReverted" === t.action)
                        qe("enable", "LIVE_TRANSLATIONS"),
                            setTimeout(function () {
                                k(), q();
                            });
                    else if ("setWidgetPosition" === t.action)
                        t.byUser || (t.isMobile ? _t.removeProperty(yt, Xt) : _t.removeProperty(yt, Jt)),
                            t.byMoveHideSection || (yt.tunings.widget_position = t.position),
                            _e(t.byUser ? t.position : null, !!t.isMobile && t.isMobile, t.byMoveHideSection),
                            (!_t.isMobile() && t.widget_position_nudge) || (_t.isMobile() && t.widget_position_nudge_mobile) ? be(t) : _(),
                            t.isSetDefault && ((!_t.isMobile() && yt.tunings.widget_position_nudge) || (_t.isMobile() && yt.tunings.widget_position_nudge_mobile)) && be(),
                            N();
                    else if ("setTimeHideWidget" === t.action) Ee(t.value);
                    else if ("location_request" === t.action)
                        _t.postMessage({
                            action: "location_response",
                            location: { hash: location.hash, host: location.host, hostname: location.hostname, href: location.href, origin: location.origin, pathname: location.pathname, port: location.port, protocol: location.protocol },
                        });
                    else if ("setReaderGuidePosition" === t.action) {
                        var l = t.value;
                        if (ze) {
                            var u = "ie" === yt.browser ? window.pageYOffset || document.documentElement.scrollTop : window.scrollY;
                            (l.yPos = l.yPos + u), ze.setRulerElPosition(l);
                        }
                    } else if ("custom_trigger_update" === t.action) {
                        (yt.tunings.widget_custom_trigger = t.data.selector), (yt.tunings.widget_custom_trigger_enabled = t.data.enabled);
                        var c = [].slice.call(document.querySelectorAll('[data-uw-trigger="true"]'));
                        c.forEach(function (e) {
                            e.removeEventListener("click", ne), e.removeEventListener("keypress", ie), e.removeAttribute("data-uw-trigger");
                        });
                        var d = Re();
                        d && d.length ? (window.UserWay.iconVisibilityOff(), oe()) : window.UserWay.iconVisibilityOn();
                    } else if ("on_demand_reader_preload" === t.action)
                        He("preload", "userway-s9"),
                            je.preload().then(function () {
                                return qe("preload", "userway-s9");
                            });
                    else if ("closeVoiceNavigation" === t.action) Ae("s24", 0), _t.postMessage({ action: "closeVoiceNavigation" });
                    else if ("sendEventToGoogleAnalytics" === t.action) {
                        var g = 0 === t.state ? "disabled" : "enabled";
                        pn(t.name, g);
                    }
            };
            _t.registerPostMessageListener(e);
        }
    }
    function E() {
        document.querySelectorAll("body > *:not(script):not(.uwy)").forEach(function (e) {
            e.setAttribute("inert", "");
        });
    }
    function A() {
        document.querySelectorAll("*[inert]").forEach(function (e) {
            e.removeAttribute("inert");
        });
    }
    function L(e) {
        kt.isHotkeyToOpenWidget(e) &&
            (e.preventDefault(),
            f() ? (localStorage.removeItem("hideUWWidget"), sessionStorage.removeItem("hideUWWidget"), _t.setCookie("hidewidget", "", null), localStorage.removeItem("hideWidget"), window.location.reload()) : (Me(), me()));
    }
    function T(e) {
        ("Space" !== e.keyCode && 32 !== e.which) || !e.ctrlKey || UserWay.resetAll();
    }
    function W(e) {
        if (("Period" === e.code || "." === e.key) && e.ctrlKey && yt.reader.enabled) {
            var t = window.localStorage.getItem("readerSpeed") ? window.localStorage.getItem("readerSpeed") : 1;
            (t = parseInt(t, 10)), O(t), yt.settings["userway-s9"].value ? UserWay.readPageDisable() : UserWay.readPageEnable(t), _t.postMessage({ action: "toggleReader" });
        }
    }
    function x(e) {
        var t, n;
        if (("Comma" === e.code || "," === e.key) && e.ctrlKey) {
            var i = 1 === (null === (n = null === (t = null === yt || void 0 === yt ? void 0 : yt.settings) || void 0 === t ? void 0 : t["userway-s24"]) || void 0 === n ? void 0 : n.value);
            Ce().then(function () {
                Ae("s24", i ? 0 : 1), _t.postMessage({ action: i ? "closeVoiceNavigation" : "openVoiceNavigation" });
            });
        }
    }
    function O(e) {
        var t = setInterval(function () {
            if (window.responsiveVoiceLocales) {
                var n = window.responsiveVoiceLocales[yt.language].widget.responsive_voice,
                    i = yt.settings["userway-s9"].value ? (De() ? n.enabled_wl : n.enabled) : De() ? n.disabledScreenReader_wl : n.disabledScreenReader;
                je.readTextContent({ language: yt.language, contentToRead: i, isAlert: !1, readingSpeedRate: e }), clearInterval(t);
            }
        }, 50);
    }
    function I() {
        _t.postMessage({ action: "sendConfig", data: { config: yt } });
    }
    function N() {
        var e,
            t,
            n = "" + j(),
            i = "" + B(),
            r = V();
        if (yt.services.LIVE_TRANSLATIONS && (null === (e = yt.tunings) || void 0 === e ? void 0 : e.widget_lst_button_enabled))
            switch (null === (t = yt.tunings) || void 0 === t ? void 0 : t.widget_lst_button_type) {
                case "1":
                    P(r, i);
                    break;
                case "2":
                    P(r, i), R(n, r, i);
                    break;
                default:
                    R(n, r, i);
            }
        else R(n, r, i);
        C(n, r), U();
        var o = document.querySelector("div.uwy");
        _t.isMobile() || "small" === i ? (o.classList.remove("uts"), o.classList.remove("utb")) : ("mini" === i && o.classList.add("uts"), "large" === i && o.classList.add("utb"));
    }
    function U() {
        if (UserWayWidgetApp.lazyLoaded) {
            var e = document.querySelectorAll(".usr");
            document.querySelector("img.userway_check_on") ||
                e.forEach(function (e) {
                    var t = document.createElement("IMG");
                    t.classList.add("userway_check_on"),
                        t.setAttribute("data-uw-rm-ignore", ""),
                        t.setAttribute("data-uw-ignore-s25", !0),
                        (t.width = 18),
                        (t.height = 20),
                        (t.alt = "Accessibility menu is on"),
                        e.parentNode.insertBefore(t, e.nextSibling),
                        D(t, "check_on.svg");
                });
        }
    }
    function k() {
        var e = function () {
                var e,
                    t,
                    i,
                    r = "" + (null === (e = yt.tunings) || void 0 === e ? void 0 : e.widget_lst_button_icon_type);
                if (null === (t = yt.tunings) || void 0 === t || !t.widget_lst_button_enabled || "flag" !== r) {
                    var o = rt.getNameByLangCode(n),
                        a = document.createElement("div");
                    if (
                        (a.setAttribute("data-uw-rm-ignore", ""),
                        a.setAttribute("data-uw-ignore-translate", !0),
                        ct && (a.classList.add("uwaw-lang-list__circle", "uwaw-lang-list__circle-" + ct), a.setAttribute("title", "Auto Translation enabled: " + o), (a.textContent += ct)),
                        null === (i = yt.tunings) || void 0 === i ? void 0 : i.widget_lst_button_enabled)
                    ) {
                        var s = document.querySelector(".ulsti .usr");
                        s.parentNode.insertBefore(a, s.nextSibling);
                    } else {
                        var l = document.querySelector(".uai .usr");
                        l.parentNode.insertBefore(a, l.nextSibling);
                    }
                }
            },
            t = UserWayWidgetApp.getLib("LIVE_TRANSLATIONS");
        if (t && t.getCurrentLanguage) {
            var n = t.getCurrentLanguage(),
                i = document.querySelector("div.uwaw-lang-list__circle");
            i && i.parentNode.removeChild(i),
                Promise.all([
                    (function () {
                        return rt
                            ? Promise.resolve(!0)
                            : _t
                                  .execJs(Rt + "frontend/javascripts/languages.js?v=1737468476256", "sha256-DP5ZjRaCYGpE3/gwB9SSmNBlJ0ocbxGL5gHmqDv9rtI=")
                                  .then(function () {
                                      return (rt = UserWayWidgetApp.getLib("LANGUAGES")), !0;
                                  })
                                  .catch(function () {
                                      return !1;
                                  });
                    })(),
                    (function () {
                        return on
                            ? Promise.resolve(!0)
                            : _t
                                  .addStylesheetOnce(Rt + "frontend/stylesheets/flags.css?v=1737468476256")
                                  .then(function () {
                                      return (on = !0);
                                  })
                                  .catch(function () {
                                      return !1;
                                  });
                    })(),
                ]).then(function (t) {
                    var i = __read(t, 2),
                        r = i[0],
                        o = i[1];
                    if (r && o) {
                        (ct = rt.getIsoByLangCode(n || yt.language)), H("hide"), n && e();
                        P(V(), "" + B());
                    }
                });
        }
    }
    function C(e, t) {
        var n,
            i,
            r = document.querySelectorAll(".ups");
        try {
            for (var o = __values(r), a = o.next(); !a.done; a = o.next()) {
                var s = a.value;
                if (s) {
                    s.innerHTML = '<img width="43" height="43" data-uw-rm-ignore="" class="' + (t.isLight ? "si_b" : "si_w") + '" aria-hidden="true" alt="Spinner: ' + (t.isLight ? "Black" : "White") + ' decorative" src="" />';
                    var l = s.querySelector("img.si_w");
                    F(t, s.querySelector("img.si_b"), l, "spin");
                }
            }
        } catch (e) {
            n = { error: e };
        } finally {
            try {
                a && !a.done && (i = o.return) && i.call(o);
            } finally {
                if (n) throw n.error;
            }
        }
    }
    function M() {
        var e,
            t,
            n = "" + (null === (e = yt.tunings) || void 0 === e ? void 0 : e.widget_lst_button_icon_type);
        if ((null === (t = yt.tunings) || void 0 === t ? void 0 : t.widget_lst_button_enabled) && "flag" === n) {
            var i = document.querySelector(".ulsti");
            null === i || void 0 === i || i.classList.add("userway_loading");
        }
    }
    function P(e, t) {
        var n,
            i = "" + (null === (n = yt.tunings) || void 0 === n ? void 0 : n.widget_lst_button_icon_type),
            r = document.querySelector(".ulsti .uiiw"),
            o = document.querySelector(".ulsti");
        r.innerHTML = '<img data-uw-rm-ignore="" class="' + (e.isLight ? "ui_b" : "ui_w") + '" role="presentation" alt="" src="" data-uw-ignore-s25/>';
        var a = document.querySelector(".ulsti img.ui_w"),
            s = document.querySelector(".ulsti img.ui_b");
        switch (i) {
            case "characters":
                F(e, s, a, "characters"), s && s.setAttribute("alt", ""), a && a.setAttribute("alt", "");
                break;
            case "earth":
                F(e, s, a, "earth"), s && s.setAttribute("alt", ""), a && a.setAttribute("alt", "");
                break;
            case "flag":
                if (((r.innerHTML = ""), ct)) {
                    o.style.setProperty("box-sizing", "border-box", "important"), (r.className = "uiiw fflag fflag-" + ct + " lst-btn-flag ff-round");
                    var l = void 0;
                    switch (t) {
                        case "mini":
                            l = "1px";
                            break;
                        case "small":
                            l = "1.5px";
                            break;
                        case "large":
                            l = "2px";
                    }
                    var u = 'url("' + yt.cdn + "frontend/images/circle-flags/" + ct.toLowerCase() + '.svg")';
                    r.style.setProperty("border-style", "solid", "important"), r.style.setProperty("border-width", l, "important"), r.style.setProperty("background-image", u, "important"), r.setAttribute("data-uw-ignore-s25", !0);
                    var c = yt.cdn + "frontend/images/flagSprite60.png",
                        d = new Image();
                    (d.onload = function () {
                        var e = document.querySelector(".ulsti");
                        null === e || void 0 === e || e.classList.remove("userway_loading");
                    }),
                        (d.src = c),
                        d.complete && d.onload();
                }
        }
    }
    function R(e, t, n) {
        var i = document.querySelector("div.uwy"),
            r = "" + (_userway_config.type || yt.tunings.widget_icon_type || Mt.UW_WIDGET_ICON_TYPE),
            o = -1 !== ["4", "5", "6", "7"].indexOf(e),
            a = document.querySelector(".uai .uiiw");
        if ("4" !== r) i.classList.contains("uac") && i.classList.remove("uac"), (a.innerHTML = '<img data-uw-rm-ignore="" class="' + (t.isLight ? "ui_b" : "ui_w") + '" role="presentation" alt="" src="" />');
        else {
            _t.addUwStylesheetMetropolisFont(yt), i.classList.add("uac");
            var s = St.translate,
                l = s(yt.language, "widget.text_icon_small"),
                u = s(yt.language, "widget.text_icon_large"),
                c = "large" !== n || _t.isMobile() ? l : u;
            a.innerHTML = '<div class="accessibility-btn"><span class="accessibility-btn__text">' + c + "</span></div>";
        }
        var d = document.querySelector(".uai img.ui_w"),
            g = document.querySelector(".uai img.ui_b");
        switch (r) {
            case "1":
                F(t, g, d, "body"), g && g.setAttribute("alt", ""), d && d.setAttribute("alt", "");
                break;
            case "2":
                o ? F(t, g, d, "wheel_right") : F(t, g, d, "wheel_left"), g && g.setAttribute("alt", ""), d && d.setAttribute("alt", "");
                break;
            case "3":
                F(t, g, d, "eye"), g && g.setAttribute("alt", ""), d && d.setAttribute("alt", "");
                break;
            case "6":
                F(t, g, d, "man_with_stick"), g && g.setAttribute("alt", ""), d && d.setAttribute("alt", "");
                break;
            case "5":
                F(t, g, d, "sliders"), g && g.setAttribute("alt", ""), d && d.setAttribute("alt", "");
                break;
            case "4":
                break;
            default:
                F(t, g, d, "body"), g && g.setAttribute("alt", ""), d && d.setAttribute("alt", "");
        }
    }
    function F(e, t, n, i) {
        e && e.isLight ? D(t, i + "_bl.svg") : D(n, i + "_wh.svg");
    }
    function D(e, t) {
        e.setAttribute("src", yt.cdn + "widgetapp/images/" + t);
    }
    function H(e) {
        var t, n;
        e = void 0 === e ? "toggle" : e;
        var i = [document.querySelector(".uai"), document.querySelector(".ulsti")];
        try {
            for (var r = __values(i), o = r.next(); !o.done; o = r.next()) {
                var a = o.value;
                "show" === e
                    ? null === a || void 0 === a || a.classList.add("userway_loading")
                    : "hide" === e
                    ? null === a || void 0 === a || a.classList.remove("userway_loading")
                    : "toggle" === e && (null === a || void 0 === a || a.classList.toggle("userway_loading"));
            }
        } catch (e) {
            t = { error: e };
        } finally {
            try {
                o && !o.done && (n = r.return) && n.call(r);
            } finally {
                if (t) throw t.error;
            }
        }
    }
    function q() {
        var e,
            t,
            n,
            i = document.querySelector(".uai"),
            r = document.querySelector(".ulsti"),
            o = document.querySelector(".uwif"),
            a = (null === (e = yt.services) || void 0 === e ? void 0 : e.CUSTOM_BRANDING) || (null === (t = yt.services) || void 0 === t ? void 0 : t.WHITE_LABEL) || (null === (n = yt.tunings) || void 0 === n ? void 0 : n.widget_no_logo);
        null === i || void 0 === i || i.setAttribute("title", _t.getUserWayIconElementTitle(yt)),
            null === i || void 0 === i || i.setAttribute("aria-label", _t.getUserWayIconElementTitle(yt)),
            null === r || void 0 === r || r.setAttribute("title", _t.getUserWayLstIconElementTitle(yt)),
            null === r || void 0 === r || r.setAttribute("aria-label", _t.getUserWayLstIconElementTitle(yt)),
            o.setAttribute("title", a ? _t.getUserWayIconElementTitle(yt) : "UserWay " + _t.getUserWayIconElementTitle(yt));
    }
    function V() {
        var e = { color: Mt.UW_WIDGET_COLOR, gradient: null, isLight: !1 },
            t = yt.color || yt.tunings.widget_color;
        if (t) {
            var n = _t.hexToRgb(t.replace("#", ""));
            (e.isLight = _t.colourIsLight(n[0], n[1], n[2])), (e.color = t);
        }
        (yt.color || (yt.tunings.widget_color_gradient && yt.tunings.widget_color_gradient === Mt.UW_WIDGET_COLOR_GRADIENT)) && (yt.tunings.widget_color_gradient = null);
        var i = yt.color_gradient || yt.tunings.widget_color_gradient;
        return i && (e.gradient = i), e;
    }
    function j() {
        var e = _t.getProperty(Jt);
        if (e) return (yt.userSpecificPosition = e), e;
        var t = yt.tunings.widget_position;
        return (
            _t.isMobile() && yt.tunings.widget_position_mobile && (t = yt.tunings.widget_position_mobile),
            "shortpoint" === yt.services.partner ? yt.position || t || "3" : _userway_config.position || yt.position || t || Mt.UW_BUTTON_POSITION
        );
    }
    function B() {
        return _userway_config.size || yt.size || yt.tunings.widget_icon_size || Mt.UW_WIDGET_ICON_SIZE;
    }
    function z() {
        var e = V();
        if (e) {
            var t = document.querySelector(".uw-popup-header"),
                n = document.querySelector(".uw-popup-header-text"),
                i = t.querySelector(".uw-popup-header-close-path"),
                r = e.gradient || e.color,
                o = e.isLight ? "#000000" : "#ffffff";
            t && (_t.applyElementStyles(t, { background: r, color: o }), _t.applyElementStyles(n, { color: o })), i && _t.applyElementStyles(i, { stroke: o });
        }
    }
    function G() {
        var e,
            t,
            n = [document.querySelector(".uai"), document.querySelector(".ulsti")],
            i = V(),
            r = i.gradient || i.color;
        try {
            for (var o = __values(n), a = o.next(); !a.done; a = o.next()) {
                var s = a.value;
                if (r) {
                    if (s) {
                        var l = r;
                        if ("ie" === _t.detectBrowser()) {
                            var u = "" + (_userway_config.type || yt.tunings.widget_icon_type || Mt.UW_WIDGET_ICON_TYPE);
                            (4 !== u && "4" !== u) || (l += ";min-width:auto!important;max-width:none!important;min-height:auto!important;max-height:none;!important");
                        }
                        s.style.setProperty("background", l, "important"), i.isLight ? (s.classList.add("uli"), s.classList.remove("userway_dark")) : (s.classList.remove("uli"), s.classList.add("userway_dark"));
                    }
                    var c = document.querySelector(".userway_hide_on");
                    c && c.style.setProperty("background", i.color, "important");
                    var d = document.querySelector(".userway_hide_off");
                    d && d.style.setProperty("background", i.color, "important");
                    var g = document.querySelector(".uhi span");
                    g && g.style.setProperty("background", i.color, "important");
                } else null === s || void 0 === s || s.classList.add("userway_dark");
            }
        } catch (t) {
            e = { error: t };
        } finally {
            try {
                a && !a.done && (t = o.return) && t.call(o);
            } finally {
                if (e) throw e.error;
            }
        }
        _t.postMessage({ action: "setWidgetColour", payload: i || null });
    }
    function Y() {
        var e = "fo" === yt.language && yt.partner !== atob("ZmFyb2U=");
        !It.isAvailable({ pageLanguage: yt.widgetPageLang, widgetLanguage: yt.language }) || e ? J() : K();
    }
    function K() {
        (yt.reader.enabled = !0), _t.postMessage({ action: "screen_reader_available" });
    }
    function J() {
        je.disable(), (yt.reader.enabled = !1), _t.postMessage({ action: "screen_reader_not_available" });
    }
    function X(e, t) {
        void 0 === t && (t = !1),
            e &&
                (t || _t.setProperty(yt, Qt, e),
                (yt.tunings.widget_language = e),
                (yt.language = e),
                (vt = !0),
                ot.updateDictionaryConfigs(),
                t && pe(e),
                Y(),
                "fo" === yt.language && yt.partner !== atob("ZmFyb2U=") && J(),
                St.initializeLocale(e).finally(function () {
                    var t = document.querySelector("div.uwy");
                    _t.postMessage({ action: "setHtmlLangAttribute", lang: e });
                    var n = { "en-US": "Our site is built for you; use it in a way that works best for you", ar: "ØªÙ… ØªØµÙ…ÙŠÙ… Ù…ÙˆÙ‚Ø¹Ù†Ø§ Ù…Ù† Ø£Ø¬Ù„Ùƒ. Ø§Ø³ØªØ®Ø¯Ù…Ù‡ Ø¨Ø·Ø±ÙŠÙ‚Ø© ØªÙ†Ø§Ø³Ø¨Ùƒ Ø¨Ø´ÙƒÙ„ Ø£ÙØ¶Ù„" };
                    t.setAttribute("title", location.hostname === atob("cmV2YW1wLnJha2JhbmsuYWU=") ? n[yt.language] : _t.getUserWayIconElementTitle(yt));
                }));
    }
    function Q(e) {
        (yt.tunings = e.tunings),
            (yt.services = e.services),
            (yt.cpr = e.cpr),
            (yt.onPrem = zt),
            (yt.partner = e.services && e.services.partner ? e.services.partner : null),
            (yt.widgetPageLang = Nt.resolvePageLangAttribute()),
            (yt.languageHardcoded = Nt.resolveOwnerLangHardcoded());
        var t = Nt.resolveLanguageOnScript();
        yt.widgetLayout = r();
        var n = null;
        t && (n = t),
            e.tunings.widget_language && "null" !== e.tunings.widget_language && "auto" !== e.tunings.widget_language && (n = e.tunings.widget_language),
            (yt.language = Nt.resolve({ ownerLangSelection: n })),
            Nt.userLandSelectionIsDefaultLangSelected({ ownerLangSelection: n }) && _t.removeProperty(yt, Qt),
            (function () {
                var t, n;
                (yt.remediation = vn(e.remediationV2)),
                    (yt.imageAlt = e.imageAlt),
                    (yt.statistics = null === (t = e.globals) || void 0 === t ? void 0 : t.widgetRemediationStatsCollecting),
                    (yt.widgetCustomLanguages = null !== (n = e.widgetCustomLanguages) && void 0 !== n ? n : []),
                    sn.forEach(function (e) {
                        var t = yt.tunings[e];
                        yt.tunings[e] = t ? JSON.parse(t) : null;
                    }),
                    (UserWayWidgetApp.ContextHolder.config = yt);
            })(),
            St.initializeLocale(yt.language).then(function () {
                var t = !!yt.widgetPageLang && It.isAvailable({ pageLanguage: yt.widgetPageLang, widgetLanguage: yt.language }),
                    n = !zt || e.speechSynthesisEnabled;
                yt.reader = { enabled: t && n };
            });
    }
    function Z(e) {
        var t, n, i;
        if (zt) return Q(At.buildOnPremConfig()), (UserWayWidgetApp.lazyLoaded = !0), void (e && e());
        var o = null !== (t = null === _userway_config || void 0 === _userway_config ? void 0 : _userway_config.platform) && void 0 !== t ? t : null === (n = window._userway_config) || void 0 === n ? void 0 : n.platform,
            a = window.location.origin;
        (a && "null" !== a) || (a = "https://inspect.userway.org");
        var s = yt.account === atob("eExxdFhtQVRSdw=="),
            l = s ? {} : yt.settings,
            u = Object.keys(l).reduce(function (e, t) {
                var n = t.replace("userway-", ""),
                    i = l[t].value;
                return i && (e[n] = i), e;
            }, {}),
            c = { s: u, o: a, uid: yt.uid, v: Ft, wl: r(), c: localStorage.getItem(Pt) || "" };
        o && (c.p = o),
            (null === (i = null === yt || void 0 === yt ? void 0 : yt._userway_config) || void 0 === i ? void 0 : i.platfAppInstalledSiteId) && (c.pa = yt._userway_config.platfAppInstalledSiteId),
            (yt && (yt.account || yt.code)) || (console.warn("Widget initialization error: no account/code provided. Default code will be used"), (yt.account = "qLb3sVM6fr"), (yt.defaultAccountUsed = !0)),
            UserWayWidgetApp.getLib("tunings")
                .getTunings(c)
                .then(function (e) {
                    Q(e);
                })
                .catch(function (e) {
                    console.error("Initialization error: " + e.code + " - " + e.message);
                })
                .finally(function () {
                    e && e();
                });
    }
    function $(e) {
        var t = e.remediation,
            n = e.tunings;
        t || _t.fireUserWayRemediationCompletedEvent({ enabled: !1 });
        var i = e.services && e.services.paidAi,
            r = null,
            o = null;
        t && t.commonSettings.enabled ? ((r = Dt), (o = "sha256-hQ9Ewmcy2lyFKw4844mLXx81AW2QKifhWaMtJGOYoyk=")) : i && ((r = Vt), (o = "sha256-3XzqFEcW0sWX6pNFMaM6x8FMsKsquYskxhGWgbDXqYM=")),
            r && ((UserWayWidgetApp.ContextHolder.remediationModulePromise = _t.execJs(Rt + r, o)), UserWayWidgetApp.addLib("remediationConfig", t), (UserWayWidgetApp.ContextHolder.remediationResources = null)),
            (t && !t.commonSettings.enabled) ||
                ((e.services.editorBuildUrl = Rt + jt),
                r
                    ? UserWayWidgetApp.ContextHolder.remediationModulePromise.then(function () {
                          _t.execJs(Rt + Ht, "sha256-cxpFQuYY/WYAqh18w8tmX3+k1t7TdjPQCPFv6iVUO3o=");
                      })
                    : n.widget_free_remediation_disable || _t.execJs(Rt + qt, "sha256-76uQ3ALAmgViStWGluKkQN45eHNfTguPXg5IPjBPREE="),
                (null === t || void 0 === t ? void 0 : t.consolidated) &&
                    _t.request({ method: "GET", url: t.consolidated }).then(
                        function (e) {
                            e && e.response && (UserWayWidgetApp.ContextHolder.remediationResources = JSON.parse(e.response));
                        },
                        function (e) {
                            console.warn("Can't load remediation resources.");
                        }
                    ));
    }
    function ee(e, t) {
        var n;
        e && e.is_enabled
            ? (He("enable", "LIVE_TRANSLATIONS"),
              _t
                  .execJs(Rt + "widgetapp/2025-01-21-14-07-56/translations/live_translations_1737468476256.js", "sha256-HRGDqYXT7sLIex5HwI1reX5EH07OvKJZ2wfOymEPRZk=")
                  .then(function () {
                      var e = UserWayWidgetApp.getLib("LIVE_TRANSLATIONS"),
                          n = function () {
                              return e.awaitForResources();
                          };
                      return new Promise(function (e) {
                          var i = function (t) {
                              qe("enable", "LIVE_TRANSLATIONS"), e(t);
                          };
                          t
                              ? document.addEventListener(
                                    _t.LIFE_CYCLE_EVENT.REMEDIATION,
                                    function () {
                                        return n().then(i);
                                    },
                                    { once: !0 }
                                )
                              : n().then(i);
                      });
                  })
                  .then(function () {
                      k();
                  }))
            : (null === (n = yt._userway_config) || void 0 === n ? void 0 : n[fn]) && console.log("Automatic live site translation is not supported");
    }
    function te() {
        _t.execJs(Rt + "widgetapp/2025-01-21-14-07-56/performance/performance_1737468476256.js").then(function () {
            var e = UserWayWidgetApp.getLib("performance_logger");
            dt = e.getInstance("Features");
        });
    }
    function ne() {
        window.UserWay.widgetToggle();
    }
    function ie(e) {
        ("Enter" !== e.key && " " !== e.key) || (e.preventDefault(), window.UserWay.widgetToggle());
    }
    function re(e) {
        e.getAttribute("data-uw-trigger") || (e.addEventListener("click", ne), e.addEventListener("keyup", ie), e.setAttribute("data-uw-trigger", !0), e.setAttribute("data-uw-ignore-s25", !0), e.setAttribute("aria-haspopup", "dialog"));
    }
    function oe() {
        var e;
        if ((null === (e = yt._userway_config) || void 0 === e ? void 0 : e.trigger) || yt.tunings.widget_custom_trigger_enabled) {
            window.UserWay.iconVisibilityOff();
            var t = Re();
            if (null === t || void 0 === t ? void 0 : t.length) return t.forEach(re);
            if (!yt.tunings.isDynamicCustomTrigger) return window.UserWay.iconVisibilityOn();
            var n = yt.tunings.widget_custom_trigger || (yt._userway_config && yt._userway_config.trigger),
                i = n && n.startsWith("."),
                r = i ? n : "#" + n,
                o = function (e) {
                    var t = e.target.closest(r);
                    if (t) {
                        var n = i ? Re() : [t];
                        (null === n || void 0 === n ? void 0 : n.length) && (n.forEach(re), mn(o), clearTimeout(a), window.UserWay.widgetToggle());
                    }
                };
            document.body.addEventListener("click", o), document.body.addEventListener("keyup", o);
            var a = setTimeout(function () {
                var e = Re();
                (null === e || void 0 === e ? void 0 : e.length) ? e.forEach(re) : window.UserWay.iconVisibilityOn(), mn(o);
            }, ft);
        }
    }
    function ae() {
        var e, t, n, i;
        oe(), se();
        var r = document.querySelector("body"),
            o = [document.querySelector(".uai"), document.querySelector(".ulsti")],
            a = document.querySelector(".uwy"),
            s = (null === (n = yt.tunings) || void 0 === n ? void 0 : n.widget_lst_button_enabled) && 2 == (null === (i = yt.tunings) || void 0 === i ? void 0 : i.widget_lst_button_type);
        r &&
            r.addEventListener(
                "touchstart",
                function (e) {
                    for (var t = !1, n = e.target; n; ) {
                        if (n.classList && (n.classList.contains("uai") || n.classList.contains("uai"))) {
                            t = !0;
                            break;
                        }
                        n = n.parentNode;
                    }
                    t || a.classList.remove("uo");
                },
                !!_t.supportsPassive && { passive: !0 }
            );
        try {
            for (var l = __values(o), u = l.next(); !u.done; u = l.next()) {
                var c = u.value;
                !(function (e) {
                    var t = !1;
                    yt.isMobile &&
                        (null === e ||
                            void 0 === e ||
                            e.addEventListener(
                                "touchstart",
                                function (e) {
                                    if (
                                        !t &&
                                        (e.stopPropagation(),
                                        e.preventDefault(),
                                        (t = !0),
                                        setTimeout(function () {
                                            t = !1;
                                        }, 400),
                                        !e.target || "function" != typeof e.target.closest || !e.target.closest(".uwaw-dictionary-tooltip"))
                                    ) {
                                        fe(s && "userwayLstIcon" === e.currentTarget.id ? dn.lst : dn.main),
                                            setTimeout(function () {
                                                a.classList.add("uo");
                                            }, 50);
                                    }
                                },
                                { passive: !1 }
                            )),
                        !yt.isMobile &&
                            (null === e ||
                                void 0 === e ||
                                e.addEventListener("click", function (e) {
                                    if (!(t || (e.target && "function" == typeof e.target.closest && e.target.closest(".uwaw-dictionary-tooltip")))) {
                                        fe(s && "userwayLstIcon" === e.currentTarget.id ? dn.lst : dn.main);
                                    }
                                })),
                        null === e ||
                            void 0 === e ||
                            e.addEventListener("keydown", function (e) {
                                if (32 === e.keyCode || 13 === e.keyCode) {
                                    fe(s && "userwayLstIcon" === e.currentTarget.id ? dn.lst : dn.main);
                                }
                            }),
                        null === e ||
                            void 0 === e ||
                            e.addEventListener("keyup", function (e) {
                                27 === e.keyCode && he();
                            }),
                        null === e ||
                            void 0 === e ||
                            e.addEventListener("focus", function () {
                                Me();
                            }),
                        null === e ||
                            void 0 === e ||
                            e.addEventListener("mouseover", function () {
                                yt.isMobile ||
                                    (clearTimeout(yn),
                                    (yn = setTimeout(function () {
                                        a.classList.add("uo");
                                    }, 100)),
                                    Me());
                            }),
                        null === e ||
                            void 0 === e ||
                            e.addEventListener("mouseout", function () {
                                yt.isMobile ||
                                    (clearTimeout(yn),
                                    (yn = setTimeout(function () {
                                        a.classList.remove("uo");
                                    }, 100)));
                            });
                })(c);
            }
        } catch (t) {
            e = { error: t };
        } finally {
            try {
                u && !u.done && (t = l.return) && t.call(l);
            } finally {
                if (e) throw e.error;
            }
        }
    }
    function se() {
        new MutationObserver(function (e) {
            return e.forEach(function (e) {
                "lang" === e.attributeName && Y();
            });
        }).observe(document.querySelector("html"), { attributes: !0 });
    }
    function le() {
        _t.fireUserWayLifeCycleEvent(_t.LIFE_CYCLE_EVENT.RENDER);
    }
    function ue() {
        try {
            var e = !!UserWayWidgetApp.ContextHolder && !!UserWayWidgetApp.ContextHolder.config && !!UserWayWidgetApp.ContextHolder.config.remediation;
            _t.fireUserWayLifeCycleEvent(_t.LIFE_CYCLE_EVENT.INIT, { remediationEnabled: e }), e || _t.fireUserWayRemediationCompletedEvent({ enabled: !1 });
        } catch (e) {}
    }
    function ce(e, t, n) {
        void 0 === n && (n = null);
        var i = n ? { state: n } : null;
        _t.fireUserWayLifeCycleEvent(e + t, i);
    }
    function de() {
        try {
            var e = window.location.hash.substr(1);
            if ((e && e.toLowerCase() === Ct) || _userway_config.forceOpen) return (location.hash = Ct), me();
            if (new RegExp("[?&]" + Ct, "i").test(window.location.search)) return me();
        } catch (e) {}
    }
    function ge(e) {
        var t, n, i, r;
        try {
            var o = null === (i = yt.tunings) || void 0 === i ? void 0 : i.widget_lst_button_enabled,
                a = "1" === (null === (r = yt.tunings) || void 0 === r ? void 0 : r.widget_lst_button_type),
                s = [];
            a || s.push(document.querySelector("div.uai")), o && s.push(document.querySelector("div.ulsti"));
            try {
                for (var l = __values(s), u = l.next(); !u.done; u = l.next()) {
                    var c = u.value;
                    if (!c) return console.warn("Icon not found");
                    e ? ("visible" === e ? c.classList.remove("hidden") : c.classList.add("hidden")) : c.classList.contains("hidden") ? c.classList.remove("hidden") : c.classList.add("hidden");
                }
            } catch (e) {
                t = { error: e };
            } finally {
                try {
                    u && !u.done && (n = l.return) && n.call(l);
                } finally {
                    if (t) throw t.error;
                }
            }
        } catch (e) {}
    }
    function fe(e) {
        ht ? he() : (me(e), pn("userway_widget_open"));
    }
    function pe(e) {
        var t = document.querySelector(".uwif");
        if (!vt || t.src) {
            var n = function (e, t) {
                    var n = t,
                        i = e;
                    n[i];
                    return __rest(n, ["symbol" == typeof i ? i : i + ""]);
                },
                i = function (e, t) {
                    var i = t;
                    return (
                        "object" == typeof t &&
                            null !== t &&
                            (i = e.reduce(function (e, t) {
                                return n(t, e);
                            }, t)),
                        encodeURIComponent(JSON.stringify(i))
                    );
                },
                r = "rand=" + +new Date(),
                o = ["services", "tunings", "language", "account", "widgetPageLang", fn],
                a = ["accessibility_url", "accessibility_link_enabled", "accessibility_link_text", "CUSTOM_BRANDING", "VOICE_NAVIGATION", "LIVE_TRANSLATIONS"],
                s = o
                    .map(function (e) {
                        var t = UserWayWidgetApp.ContextHolder.config[e];
                        return t ? e + "=" + i(a, t) : null;
                    })
                    .filter(Boolean),
                l = __spreadArray([r], __read(s), !1).join("&");
            t.setAttribute("src", Gt + e + "/index.html?" + l);
        }
        vt = !1;
    }
    function ye() {
        var e = document.querySelector(".uwy");
        e.classList.add("uon"), e.classList.remove("hidden"), an && e.classList.remove(an);
        var t = document.querySelector(".uwif");
        t.removeAttribute("aria-hidden"), t.removeAttribute("tabindex"), hn(!0);
    }
    function ve() {
        var e = document.querySelector(".uwy");
        e.classList.remove("uon"), an && e.classList.add(an);
        var t = document.querySelector(".uwif");
        t.setAttribute("aria-hidden", "true"), t.setAttribute("tabindex", "-1"), Ve.focus(), hn(!1);
    }
    function me(e) {
        if ((void 0 === e && (e = dn.main), (Ve = document.activeElement), window.location.origin && "null" !== window.location.origin)) {
            S(), E();
            try {
                if (p()) {
                    var t = new Audio(yt.cdn + "widgetapp/sounds/widgetOpened.mp3");
                    (Zt = new Audio(yt.cdn + "widgetapp/sounds/widgetClosed.mp3")), t.play();
                }
            } catch (e) {}
            var n = document.querySelector(".uwif");
            (n.hasAttribute("src") && rn) || H("show"),
                Promise.resolve()
                    .then(function () {
                        return n.hasAttribute("src")
                            ? ye()
                            : Ce().then(function () {
                                  (mt = Nt.resolveUserLangSelection()), mt && yt.language !== mt && (yt.language = mt), pe(yt.language);
                              });
                    })
                    .then(function () {
                        try {
                            _t.postMessageWithNotification({ action: "toggled", state: "show", trigger: e }, "widgetOpened", function () {
                                (ht = !0), ye();
                            });
                        } catch (e) {
                            console.error(e);
                        }
                        Y(), Ze && Ze.hideActiveTooltip && Ze.hideActiveTooltip();
                    });
        }
    }
    function he() {
        if (p())
            try {
                Zt.play();
            } catch (e) {}
        A();
        var e = UserWayWidgetApp.getLib("remediation_utils");
        "object" == typeof e && "function" == typeof e.highlightElements && e.highlightElements();
        try {
            _t.postMessageWithNotification({ action: "toggled", state: "hide" }, "widgetClosed", function () {
                (ht = !1), Be.onWidgetClosed(), ve();
            });
        } catch (e) {
            console.error(e);
        }
    }
    function we(e, t) {
        var n = new RegExp("\\b" + t + ".*?\\b", "g");
        return (e.className = e.className.replace(n, "")), e;
    }
    function be(e) {
        void 0 === e && (e = yt.tunings);
        var t = _t.isMobile(),
            n = document.querySelector(".userway_buttons_wrapper"),
            i = t && e.widget_position_nudge_mobile ? e.widget_position_nudge_mobile.moveX : e.widget_position_nudge.moveX,
            r = t && e.widget_position_nudge_mobile ? e.widget_position_nudge_mobile.moveY : e.widget_position_nudge.moveY,
            o = t && e.widget_position_nudge_mobile ? e.widget_position_nudge_mobile.xOrientation : e.widget_position_nudge.xOrientation,
            a = t && e.widget_position_nudge_mobile ? e.widget_position_nudge_mobile.yOrientation : e.widget_position_nudge.yOrientation,
            s = t ? (!e.position_mobile && e.widget_position_mobile ? parseInt(e.widget_position_mobile, 10) : parseInt(e.position, 10)) : !e.position && e.widget_position ? parseInt(e.widget_position, 10) : parseInt(e.position, 10);
        if ((_(), i))
            if (-1 !== [1, 2, 3].indexOf(s)) "right" === o && (i = -i), n.style.setProperty("left", "calc(100vw - " + (ln.leftRightSide.right + i) + "px)", "important");
            else if (-1 !== [4, 8].indexOf(s)) {
                var l = "left" === o ? " - " : " + ";
                n.style.setProperty("left", "calc(" + ln.middle.left + "%" + l + i + "px)", "important");
            } else -1 !== [5, 6, 7].indexOf(s) && ("left" === o && (i = -i), n.style.setProperty("left", ln.leftRightSide.left + i + "px", "important"));
        if (r)
            if (-1 !== [3, 4, 5].indexOf(s)) "top" === a && (r = -r), n.style.setProperty("bottom", ln.leftRightSide.bottom + r + "px", "important");
            else if (-1 !== [2, 6].indexOf(s)) {
                var l = "bottom" === a ? " - " : " + ";
                n.style.setProperty("top", "calc(" + ln.middle.top + "%" + l + r + "px)", "important");
            } else -1 !== [1, 7, 8].indexOf(s) && ("bottom" === a && (r = -r), n.style.setProperty("top", ln.leftRightSide.top + r + "px", "important"));
    }
    function _e(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var i = e || j();
        e && ((yt.settings[t ? Xt : Jt] = {}), _t.setProperty(yt, t ? Xt : Jt, n ? i : null));
        var r = document.querySelector(".uwy"),
            o = document.querySelector(".uwif");
        (we(o, "userway_p"),
        o.classList.add("userway_p" + i),
        r &&
            (we(r, "userway_p"),
            r.classList.add("userway_p" + i),
            setTimeout(function () {
                r.style.setProperty("visibility", "", "");
            }, 250)),
        _t.getProperty("userway_hidden")) && document.querySelector(".uwy").classList.add("userway_hidden");
    }
    function Se() {
        var e = ["s2", "s4", "s6", "s7", "s12", "s13", "s14", "s23"];
        return yt.services.hasOwnProperty("MODIFY_MENU") && yt.services.MODIFY_MENU.is_enabled
            ? e.filter(function (e) {
                  return -1 !== yt.services.MODIFY_MENU.features_pattern.split("|").indexOf(e);
              })
            : e;
    }
    function Ee(e) {
        var t = e.type,
            n = e.expirationTime;
        wn(t, n),
            he(),
            ge("hidden"),
            Se().forEach(function (e) {
                Ae(e, 0);
            });
        for (var i in yt.settings) yt.settings[i].hasOwnProperty("value") && (yt.settings[i].value = 0);
        _t.postMessage({ action: "updateVisuallyImpairedState", config: !1 }), Le();
    }
    function Ae(e, t) {
        var n = "userway-" + e;
        if (void 0 !== t)
            if ("s2" === e) (yt.settings[n].value = t), 0 === t && ((yt.settings["userway-s10"].value = t), (yt.settings["userway-s16"].value = t));
            else if ("s3" === e || "s14" === e || "s17" === e || "s23" === e) -1 !== [!1, 1, 2, 3].indexOf(t) ? (yt.settings[n].value = t) : (yt.settings[n].value = 0);
            else if ("s4" === e || "s19" === e) -1 !== [!1, 1, 2, 3, 4].indexOf(t) ? (yt.settings[n].value = t) : (yt.settings[n].value = 0);
            else if ("s21" === e || "s18" === e) -1 !== [!1, 1].indexOf(t) ? (yt.settings[n].value = t) : (yt.settings[n].value = 0);
            else if ("s8" === e) for (var i in yt.settings) yt.settings[i].value = 0;
            else yt.settings[n].value = t;
        Le(), xe();
    }
    function Le() {
        for (var e in yt.settings) "userway_hidden" === e || e === Qt ? _t.setProperty(yt, e, yt.settings[e]) : _t.setProperty(yt, e, yt.settings[e].value);
        UserWayWidgetApp.ContextHolder.config = yt;
    }
    function Te() {
        for (var e in yt.settings) yt.settings.hasOwnProperty(e) && (yt.settings[e].value = _t.getProperty(e));
    }
    function We() {
        if ("undefined" != typeof _userway_config) for (var e in _userway_config) _userway_config.hasOwnProperty(e) && (yt[e] = _userway_config[e]);
    }
    function xe(e) {
        if ((void 0 === e && (e = !1), window.UserWayWidgetApp && window.UserWayWidgetApp.lazyLoaded)) {
            if (JSON.stringify(yt.settings) !== JSON.stringify(wt)) {
                if (((bt = {}), Object.keys(wt).length)) for (var t in yt.settings) yt.settings.hasOwnProperty(t) && wt.hasOwnProperty(t) && yt.settings[t].value !== wt[t].value && (bt[t] = JSON.parse(JSON.stringify(yt.settings[t])));
                else bt = yt.settings;
                for (var t in bt)
                    !(function (t) {
                        if (yt.settings.hasOwnProperty(t)) {
                            var n = yt.services && yt.services.paidAi;
                            if (yt.settings[t] && yt.settings[t].value && (n || -1 === cn.indexOf(t))) {
                                He("enable", t);
                                var i = function () {
                                        return qe("enable", t);
                                    },
                                    r = _t.LIFE_CYCLE_EVENT.FEATURE_ENABLED_BASE,
                                    o = null;
                                if ("userway-s2" === t) ze.enableBigCursor(), (o = "s2");
                                else if ("userway-s3" === t) Ye.turnOffColorFeature(), Ye.turnOnColorFeature(t, yt), (o = "s3");
                                else if ("userway-s4" === t) Ge.enable(), (o = "s4");
                                else if ("userway-s6" === t) Ke.enable(), (o = "s6");
                                else if ("userway-s7" === t) Xe.disable(), Je.enable(), (o = "s7");
                                else if ("userway-s9" === t) Be.enable(), je.enable().then(i), (o = "s9"), window.localStorage.setItem("readerSpeed", yt.settings[t].value);
                                else if ("userway-s10" === t) ze.enableReadingGuide(), (o = "s10");
                                else if ("userway-s11" === t) {
                                    var a = e ? 2e3 : 0;
                                    setTimeout(function () {
                                        Qe.showPageStructureHeaders().then(i), (o = "s11");
                                    }, a);
                                } else
                                    "userway-s12" === t
                                        ? (Ze.enable(), (o = "s12"))
                                        : "userway-s13" === t
                                        ? ($e.enable(), (o = "s13"))
                                        : "userway-s14" === t
                                        ? (et.enable(), (o = "s14"))
                                        : "userway-s15" === t
                                        ? (Xe.enable(), (o = "s15"))
                                        : "userway-s16" === t
                                        ? (ze.enableReadingMask(), (o = "s16"))
                                        : "userway-s17" === t
                                        ? (tt.disable(), tt.enable(), (o = "s17"))
                                        : "userway-s18" === t
                                        ? (Ye.enableSmartContrast(), (o = "s18"))
                                        : "userway-s19" === t
                                        ? (nt.disable(), nt.enable(), (o = "s19"))
                                        : "userway-s23" === t
                                        ? (it.disable(), it.enable(), (o = "s23"))
                                        : "userway-s21" === t
                                        ? (ot.enable().then(i), S(), (o = "21"))
                                        : "userway-s24" === t
                                        ? (Promise.all([je.preload(), at.enable()]).then(i), he(), S(), (o = "s24"))
                                        : "userway-s25" === t
                                        ? (ut.enable(), (o = "s25"))
                                        : "userway-s101" === t
                                        ? (o = "s101")
                                        : "userway-s102" === t
                                        ? (o = "s102")
                                        : "userway-s103" === t
                                        ? (o = "s103")
                                        : "userway-s104" === t
                                        ? (o = "s104")
                                        : "userway-s105" === t
                                        ? (o = "s105")
                                        : "userway-s106" === t
                                        ? (o = "s106")
                                        : "userway-s107" === t
                                        ? (o = "s107")
                                        : "userway-s108" === t && (o = "s108");
                                o && ce(r, o, yt.settings[t].value), !["userway-s21", "userway-s11", "userway-s9"].includes(t) && i();
                            } else if (!e) {
                                He("disable", t);
                                var r = _t.LIFE_CYCLE_EVENT.FEATURE_DISABLED_BASE,
                                    s = null;
                                if ("userway-s2" === t) ze.disableBigCursor(), (s = "s2");
                                else if ("userway-s3" === t) Ye.turnOffColorFeature(), (s = "s3");
                                else if ("userway-s4" === t) Ge.disable(), (s = "s4");
                                else if ("userway-s5" === t) console.warn("s5 key: shouldn't happen anymore");
                                else if ("userway-s6" === t) Ke.disable(), (s = "s6");
                                else if ("userway-s7" === t) Je.disable(), (s = "s7");
                                else if ("userway-s9" === t) je.disable(), Be.disable(), (s = "s9");
                                else if ("userway-s10" === t) ze.disableReadingGuide(), (s = "s10");
                                else if ("userway-s12" === t) Ze.disable(), (s = "s12");
                                else if ("userway-s13" === t) $e.disable(), (s = "s13");
                                else if ("userway-s14" === t) et.disable(), (s = "s14");
                                else if ("userway-s15" === t) Xe.disable(), (s = "s15");
                                else if ("userway-s16" === t) ze.disableReadingMask(), (s = "s16");
                                else if ("userway-s17" === t) tt.disable(), (s = "s17");
                                else if ("userway-s18" === t) Ye.disableSmartContrast(), (s = "s18");
                                else if ("userway-s19" === t) nt.disable(), (s = "s19");
                                else if ("userway-s23" === t) it.disable(), (s = "s23");
                                else if ("userway-s21" === t) {
                                    ot.disable(), (s = "s21"), document.querySelector(".uwaw-dictionary-tooltip").classList.remove("uwaw-dictionary-tooltip_active");
                                    var l = document.querySelector(".uwaw-dictionary-tooltip__i");
                                    l && l.remove();
                                } else
                                    "userway-s24" === t
                                        ? (at.disable(), (s = "s24"))
                                        : "userway-s25" === t
                                        ? (ut.disable(), (s = "s25"))
                                        : "userway-s101" === t
                                        ? (s = "s101")
                                        : "userway-s102" === t
                                        ? (s = "s102")
                                        : "userway-s103" === t
                                        ? (s = "s103")
                                        : "userway-s104" === t
                                        ? (s = "s104")
                                        : "userway-s105" === t
                                        ? (s = "s105")
                                        : "userway-s106" === t
                                        ? (s = "s106")
                                        : "userway-s107" === t
                                        ? (s = "s107")
                                        : "userway-s108" === t && (s = "s108");
                                s && ce(r, s), qe("disable", t);
                            }
                        }
                    })(t);
                wt = JSON.parse(JSON.stringify(yt.settings));
            }
            o() && Oe(), (pt.showPageStructureLinks = Qe.showPageStructureLinks);
        }
    }
    function Oe() {
        var e = document.querySelector(".uwy");
        Object.keys(yt.settings).some(function (e) {
            var t;
            return (null === (t = yt.settings[e]) || void 0 === t ? void 0 : t.value) && "userway-positionWidget" !== e;
        })
            ? e.classList.add("uen")
            : e.classList.remove("uen");
    }
    function Ie() {
        window.UserWay = new (function () {
            function e(e, t) {
                if (void 0 === t) {
                    var n = "userway-" + e,
                        i = pt.getFeaturesSettings(),
                        r = i[n].value;
                    "s4" === e || "s19" === e
                        ? r
                            ? r < 4
                                ? (r += 1)
                                : (r = 0)
                            : (r = 1)
                        : "s9" === e
                        ? i[n].disabled
                            ? (r = 0)
                            : r < 3
                            ? (r += 1)
                            : (r = !r)
                        : "s17" === e || "s23" === e || "s3" === e || "s14" === e
                        ? r
                            ? r < 3
                                ? (r += 1)
                                : (r = 0)
                            : (r = 1)
                        : (r = "s21" === e || "s101" === e || "s102" === e || "s103" === e || "s104" === e || "s105" === e || "s106" === e || "s107" === e || "s108" === e ? (r ? 0 : 1) : !r),
                        (t = r);
                }
                Ce().then(function (n) {
                    pt.setFeature(e, t);
                    var i = { action: "feature_use", name: e };
                    t && (i.value = t), _t.postMessage(i);
                });
            }
            var t = this;
            return (
                (t.getVersion = function () {
                    return "1.0.0";
                }),
                (t.getAccessibilityScore = function () {
                    Wt.accessibilityScore();
                }),
                (t.widgetToggle = function () {
                    pt.toggleWidget();
                }),
                (t.widgetOpen = function () {
                    pt.openWidget();
                }),
                (t.widgetClose = function () {
                    pt.closeWidget();
                }),
                (t.enableVoiceNavigation = function (e) {
                    S(), je.preload(), at.enable(e);
                }),
                (t.disableVoiceNavigation = function () {
                    at.disable();
                }),
                (t.keyboardNavToggle = function () {}),
                (t.keyboardNavEnable = function () {}),
                (t.keyboardNavDisable = function () {}),
                (t.bigCursorToggle = function () {
                    e("s2");
                }),
                (t.bigCursorEnable = function () {
                    e("s2", 1);
                }),
                (t.bigCursorDisable = function () {
                    e("s2", 0);
                }),
                (t.contrastToggle = function () {
                    e("s3");
                }),
                (t.contrastEnable = function (t) {
                    -1 !== [1, 2, 3].indexOf(t) ? e("s3", t) : e("s3");
                }),
                (t.contrastDisable = function () {
                    e("s3", 0);
                }),
                (t.bigTextToggle = function () {
                    e("s4");
                }),
                (t.bigTextEnable = function (t) {
                    -1 !== [1, 2, 3, 4].indexOf(t) ? e("s4", t) : e("s4");
                }),
                (t.bigTextDisable = function () {
                    e("s4", 0);
                }),
                (t.highlightToggle = function () {
                    e("s6");
                }),
                (t.highlightEnable = function () {
                    e("s6", 1);
                }),
                (t.highlightDisable = function () {
                    e("s6", 0);
                }),
                (t.legibleFontsToggle = function () {
                    e("s7");
                }),
                (t.legibleFontsEnable = function () {
                    e("s7", 1);
                }),
                (t.legibleFontsDisable = function () {
                    e("s7", 0);
                }),
                (t.textSpacingToggle = function () {
                    e("s14");
                }),
                (t.textSpacingEnable = function (t) {
                    e("s14", t);
                }),
                (t.textSpacingDisable = function () {
                    e("s14", 0);
                }),
                (t.lineHeightToggle = function () {
                    e("s17");
                }),
                (t.lineHeightEnable = function (t) {
                    e("s17", t);
                }),
                (t.lineHeightDisable = function () {
                    e("s17", 0);
                }),
                (t.inlineDictionaryToggle = function () {
                    e("s21");
                }),
                (t.inlineDictionaryEnable = function (t) {
                    e("s21", t);
                }),
                (t.inlineDictionaryDisable = function () {
                    e("s21", 0);
                }),
                (t.textAlignToggle = function () {
                    e("s19");
                }),
                (t.textAlignEnable = function (t) {
                    e("s19", t);
                }),
                (t.textAlignDisable = function () {
                    e("s19", 0);
                }),
                (t.saturationToggle = function () {
                    e("s23");
                }),
                (t.saturationEnable = function (t) {
                    e("s23", t);
                }),
                (t.saturationDisable = function () {
                    e("s23", 0);
                }),
                (t.resetAll = function () {
                    e("s8");
                }),
                (t.readPageToggle = function () {
                    e("s9");
                }),
                (t.readPageEnable = function (t) {
                    void 0 === t && (t = 1), e("s9", t);
                }),
                (t.readPageDisable = function () {
                    e("s9", 0);
                }),
                (t.readingGuideToggle = function () {
                    e("s10");
                }),
                (t.readingGuideEnable = function () {
                    e("s10", !0);
                }),
                (t.readingGuideDisable = function () {
                    e("s10", !1);
                }),
                (t.readingMaskToggle = function () {
                    e("s16");
                }),
                (t.readingMaskEnable = function () {
                    e("s16", !0);
                }),
                (t.readingMaskDisable = function () {
                    e("s16", !1);
                }),
                (t.dyslexiaFontToggle = function () {
                    e("s15");
                }),
                (t.dyslexiaFontEnable = function () {
                    e("s15", !0);
                }),
                (t.dyslexiaFontDisable = function () {
                    e("s15", !1);
                }),
                (t.iconVisibilityToggle = function () {
                    pt.manageIconVisibility();
                }),
                (t.iconVisibilityOn = function () {
                    pt.manageIconVisibility("visible");
                }),
                (t.iconVisibilityOff = function () {
                    pt.manageIconVisibility("hidden");
                }),
                (t.preloadWidget = function () {
                    Me();
                }),
                (t.pageStructureHeaders = function () {
                    Qe.showPageStructureHeaders();
                }),
                (t.pageStructureLandmarks = function () {
                    Qe.showPageStructureLandmarks();
                }),
                (t.pageStructureLinks = function () {
                    Qe.showPageStructureLinks();
                }),
                (t.pageStructureDisable = function () {
                    Qe.closePageStructureDialog();
                }),
                (t.tooltipsToggle = function () {
                    e("s12");
                }),
                (t.tooltipsEnable = function () {
                    e("s12", 1);
                }),
                (t.tooltipsDisable = function () {
                    e("s12", 0);
                }),
                (t.stopAnimationToggle = function () {
                    e("s13");
                }),
                (t.stopAnimationEnable = function () {
                    e("s13", 1);
                }),
                (t.stopAnimationDisable = function () {
                    e("s13", 0);
                }),
                (t.changeWidgetLanguage = function (e) {
                    Ce().then(function () {
                        X(e, !0);
                    });
                }),
                (t.enableSmartContrast = function () {
                    e("s18", 1);
                }),
                (t.disableSmartContrast = function () {
                    e("s18", 0);
                }),
                (t.enableHideImages = function () {
                    e("s25", 1);
                }),
                (t.disableHideImages = function () {
                    e("s25", 0);
                }),
                (t.debug = function () {
                    try {
                        localStorage.setItem("debug", "true" === localStorage.getItem("debug") ? "false" : "true"), document.location.reload();
                    } catch (e) {
                        console.log("debug mode activation failed", e);
                    }
                }),
                (t.toggleInitialPagePreload = function () {
                    var e = window.localStorage.getItem(gt),
                        t = !JSON.parse(e);
                    window.localStorage.setItem(gt, t.toString()), console.log("Initial page widget preload is " + (t ? "enabled" : "disabled") + "!");
                }),
                (t.setPosition = function (e, t, n) {
                    void 0 === n && (n = !1), _e(e, t, n);
                }),
                t
            );
        })();
    }
    function Ne(e) {
        var t, n, i;
        yt.services.LIVE_TRANSLATIONS && (null === (t = yt.tunings) || void 0 === t ? void 0 : t.widget_lst_button_enabled)
            ? "1" == (null === (n = yt.tunings) || void 0 === n ? void 0 : n.widget_lst_button_type)
                ? (e.querySelector(".ulsti").classList.remove("hidden"), e.querySelector(".uai").classList.add("hidden"))
                : "2" == (null === (i = yt.tunings) || void 0 === i ? void 0 : i.widget_lst_button_type) && (e.querySelector(".uai").style.marginTop = "8px")
            : e.querySelector(".ulsti").classList.add("hidden");
    }
    function Ue(e) {
        var t,
            n,
            i,
            r = document.createElement("div");
        r.classList.add("uw-s12-tooltip"), r.setAttribute("aria-hidden", "true"), ke(r);
        var o = document.createElement("div"),
            a = document.createElement("div"),
            s = document.createElement("div"),
            l = document.createElement("div"),
            u = document.createElement("div");
        o.classList.add("uw-s10-reading-guide"),
            a.classList.add("uw-s10-left-ruler-guide"),
            s.classList.add("uw-s10-right-ruler-guide"),
            l.classList.add("uw-s10-bottom-ruler-guide"),
            u.classList.add("uw-s10-reading-guide__arrow"),
            o.appendChild(u),
            ke(o),
            ke(a),
            ke(s),
            ke(l);
        var c = document.createElement("div");
        (c.innerHTML = e),
            c.classList.add("uwy"),
            c.setAttribute("data-uw-feature-ignore", "true"),
            c.setAttribute("data-uw-rm-ignore", "true"),
            yt.isMobile && c.classList.add("umb"),
            an && c.classList.add(an),
            c.style.setProperty("background-color", "transparent", "important"),
            c.style.setProperty("overflow", "initial", "important"),
            c.style.setProperty("visibility", "hidden", ""),
            Ne(c),
            ke(c),
            c.setAttribute("title", _t.getUserWayIconElementTitle(yt));
        var d = (null === (t = yt.services) || void 0 === t ? void 0 : t.CUSTOM_BRANDING) || (null === (n = yt.services) || void 0 === n ? void 0 : n.WHITE_LABEL) || (null === (i = yt.tunings) || void 0 === i ? void 0 : i.widget_no_logo),
            g = document.querySelectorAll(".uwif");
        if (g && g.length) {
            var f = g[0];
            f.setAttribute("title", d ? _t.getUserWayIconElementTitle(yt) : "UserWay " + _t.getUserWayIconElementTitle(yt)),
                f.style.setProperty("max-width", "100vw", "important"),
                f.style.setProperty("visibility", "visible", "important"),
                f.style.setProperty("opacity", "1", "important"),
                f.style.setProperty("color-scheme", "light", "important");
            /Android/i.test(navigator.userAgent) && (f.style.setProperty("height", "100%", "important"), f.style.setProperty("max-height", "100%", "important"));
        }
        var p = Re();
        p && p.length && window.UserWay.iconVisibilityOff();
    }
    function ke(e) {
        var t = document.body;
        t.insertBefore(e, t.children[0]);
    }
    function Ce() {
        var e = !document.querySelector("script[uw-lazyload-disabled]");
        return tn
            ? en
            : (_t.addUwStylesheetUDFFont(yt),
              !UserWayWidgetApp.lazyLoaded && e
                  ? ((tn = !0),
                    (en = new Promise(function (e, t) {
                        _t.execJs(Rt + "widgetapp/2025-01-21-14-07-56/widget_app_lazy_1737468476256.js", "sha256-GLMQMdyPmIWVrLHdr6KuUpiw7kbtNMp5RMN6wZNbylk=").then(
                            function (t) {
                                Pe(), (UserWayWidgetApp.lazyLoaded = !0), o() && U(), (tn = !1), e();
                            },
                            function (e) {
                                console.error("Widgetapp lazyload error:", e), (tn = !1), t();
                            }
                        );
                    })))
                  : (en = Promise.resolve()),
              en);
    }
    function Me() {
        nn ||
            (S(),
            Ce().then(function () {
                (mt = Nt.resolveUserLangSelection()), mt && yt.language !== mt && (yt.language = mt), pe(yt.language);
            }),
            (nn = !0));
    }
    function Pe() {
        (Be = UserWayWidgetApp.getLib("keyboard_navigation")),
            (ze = UserWayWidgetApp.getLib("cursor")),
            (Ge = UserWayWidgetApp.getLib("bigger_text")),
            (Ye = UserWayWidgetApp.getLib("uw_color_manipulation_service")),
            (Ke = UserWayWidgetApp.getLib("highlinks")),
            (Je = UserWayWidgetApp.getLib("legible_text")),
            (Xe = UserWayWidgetApp.getLib("dyslexia_font")),
            (je = UserWayWidgetApp.getLib("screen-reader-t")),
            (Qe = UserWayWidgetApp.getLib("page_structure")),
            (Ze = UserWayWidgetApp.getLib("tooltips")),
            ($e = UserWayWidgetApp.getLib("stop_animations")),
            (et = UserWayWidgetApp.getLib("spacing_text")),
            (tt = UserWayWidgetApp.getLib("line_height")),
            (nt = UserWayWidgetApp.getLib("text_align")),
            (it = UserWayWidgetApp.getLib("saturation")),
            (ot = UserWayWidgetApp.getLib("inlineDictionary")),
            (at = UserWayWidgetApp.getLib("voice-navigation")),
            (ut = UserWayWidgetApp.getLib("hide_images"));
    }
    function Re() {
        if (!yt || !Object.keys(yt.tunings).length) return null;
        var e = yt._userway_config && yt._userway_config.trigger,
            t = yt.tunings && yt.tunings.widget_custom_trigger,
            n = yt.tunings && yt.tunings.widget_custom_trigger_enabled,
            i = e || (n && t ? t : null),
            r = [];
        if (i) {
            "." !== i[0] && (i = "#" + i);
            try {
                r = _t.querySelectorDeep(i);
            } catch (e) {
                console.error(e);
            }
        }
        return r;
    }
    function Fe() {
        var e = window.localStorage.getItem("should-preload-widget");
        JSON.parse(e) && Me();
    }
    function De() {
        var e, t, n, i;
        return (
            (null === (e = yt.services.WHITE_LABEL) || void 0 === e ? void 0 : e.hide_logo) ||
            (null === (t = yt.tunings) || void 0 === t ? void 0 : t.widget_no_logo) ||
            (null === (n = yt.services.CUSTOM_BRANDING) || void 0 === n ? void 0 : n.custom_logo_image_link) ||
            (null === (i = yt.services.CUSTOM_BRANDING) || void 0 === i ? void 0 : i.custom_logo_image_path)
        );
    }
    function He(e, t) {
        dt && dt.time(e + " " + t);
    }
    function qe(e, t) {
        dt && dt.timeEnd(e + " " + t);
    }
    var Ve,
        je,
        Be,
        ze,
        Ge,
        Ye,
        Ke,
        Je,
        Xe,
        Qe,
        Ze,
        $e,
        et,
        tt,
        nt,
        it,
        rt,
        ot,
        at,
        st,
        lt,
        ut,
        ct,
        dt,
        gt = "should-preload-widget",
        ft = 2e3,
        pt = UserWayWidgetApp.addLib("main"),
        yt = {},
        vt = !1,
        mt = null,
        ht = !1,
        wt = {},
        bt = {},
        _t = UserWayWidgetApp.getLib("util"),
        St = UserWayWidgetApp.getLib("localization_manager"),
        Et = UserWayWidgetApp.getLib("context_setter"),
        At = UserWayWidgetApp.getLib("context_setter_on_prem"),
        Lt = UserWayWidgetApp.getLib("dom_observer"),
        Tt = UserWayWidgetApp.getLib("skip_links"),
        Wt = UserWayWidgetApp.getLib("scan_manager"),
        xt = UserWayWidgetApp.getLib("USER_TRACKING"),
        Ot = UserWayWidgetApp.getLib("cpr_usage_detector"),
        It = UserWayWidgetApp.getLib("tts-reader-status"),
        Nt = UserWayWidgetApp.getLib("widget_language_resolver"),
        Ut = UserWayWidgetApp.getLib("helpers"),
        kt = UserWayWidgetApp.getLib("WIDGET_HOTKEYS"),
        Ct = "uaw",
        Mt = { UW_BUTTON_POSITION: "1", UW_WIDGET_COLOR: "#0048FF", UW_WIDGET_COLOR_GRADIENT: "off", UW_WIDGET_ICON_TYPE: "1", UW_WIDGET_ICON_SIZE: "small" },
        Pt = "uw-tunings-checksum",
        Rt = "https://cdn.userway.org/",
        Ft = "2025-01-21-14-07-56",
        Dt = "widgetapp/2025-01-21-14-07-56/remediation/remediation_1737468476256.js",
        Ht = "remediation/2025-01-21-14-07-56/paid/remediation-tool.js?ts=1737468476256",
        qt = "remediation/2025-01-21-14-07-56/free/remediation-tool-free.js?ts=1737468476256",
        Vt = "widgetapp/2025-01-21-14-07-56/contrast-remediation/remediation_1737468476256.js",
        jt = "aria_editor/2025-01-21-14-07-56/index.html?v=1737468476256",
        Bt = "uw-st/2025-01-21-14-07-56/uw-st.js?ts=1737468476256",
        zt = !1,
        Gt = Rt + "widget/2025-01-21-14-07-56/",
        Yt = "https://cdn.userway.org/styles/2025-01-21-14-07-56/widget_base.css?v=1737468476256",
        Kt =
            '<div class="userway_buttons_wrapper"><div class="ulsti" id="userwayLstIcon" aria-label="Open accessibility menu" role="button" tabindex="0" aria-haspopup="dialog" data-uw-s19-ignore=""><span class="uiiw"></span><div class="ups"></div><span class="usr lst-spacer"></span><div class="uwaw-dictionary-tooltip"></div></div><div class="uai" id="userwayAccessibilityIcon" aria-label="Open accessibility menu" role="button" tabindex="0" aria-haspopup="dialog"><span class="uiiw"></span><div class="ups"></div><span class="usr"></span><div class="uwaw-dictionary-tooltip"></div></div></div><iframe class="uwif" data-uw-ignore-translate="true" name="userway" title="UserWay Accessibility Menu"></iframe>',
        Jt = "userway-positionWidget",
        Xt = "userway-positionWidgetMobile",
        Qt = "userway-selectedLang",
        Zt = null,
        $t = !1,
        en = null,
        tn = !1,
        nn = !1,
        rn = !1,
        on = !1,
        an = null,
        sn = ["widget_position_nudge", "widget_position_nudge_mobile"],
        ln = { leftRightSide: { top: 18, right: 13, bottom: 16, left: 13 }, middle: { left: 50, top: 50 } },
        un = Nt.resolvePageLangAttribute(),
        cn = ["s9", "s11", "s18", "s21", "s24", "s101", "s102", "s103", "s104", "s105", "s106", "s107", "s108"],
        dn = { main: "main", lst: "lst" },
        gn = "uw-uid",
        fn = "site-language";
    (pt.init = e), (pt.isSoundEffectsEnabled = p);
    var pn = function (e, t) {
        var n;
        void 0 === t && (t = ""),
            yt.services.paidAi && (null === (n = null === yt || void 0 === yt ? void 0 : yt.tunings) || void 0 === n ? void 0 : n.widget_ga_enabled) && "function" == typeof gtag && gtag("event", "UserWay", { name: e, state: t });
    };
    pt.setPageStructureModalColor = z;
    var yn,
        vn = function (e) {
            if (e) {
                var t = [
                        "alt",
                        "ariaEditor",
                        "autocomplete",
                        "brokenLinks",
                        "commonSettings",
                        "contrast",
                        "customFocus",
                        "emptyControls",
                        "externalLinks",
                        "form",
                        "headings",
                        "identicalTargets",
                        "labs",
                        "language",
                        "metaViewport",
                        "moderator",
                        "navigationMenu",
                        "pdf",
                        "perSiteRemediation",
                        "popups",
                        "skipLinks",
                        "slickSlider",
                        "vagueLinks",
                    ],
                    n = __assign({}, e);
                return (
                    t.forEach(function (e) {
                        n[e] || (n[e] = { enabled: !0, config: {} });
                    }),
                    n
                );
            }
        },
        mn = function (e) {
            document.body.removeEventListener("click", e), document.body.removeEventListener("keyup", e);
        };
    (pt.manageIconVisibility = ge), (pt.toggleWidget = fe);
    var hn = function (e) {
        _t.isMobile() && (document.body.style.overflow = e ? "hidden" : "");
    };
    (pt.openWidget = me), (pt.closeWidget = he), (pt.getAvailableBunchOfFeatures = Se);
    var wn = function (e, t) {
        return "current" === e ? void sessionStorage.setItem("hideUWWidget", "enabled") : "indefinitely" === e ? void localStorage.setItem("hideUWWidget", "enabled") : void _t.setItemWithExpiry("hideUWWidget", "enabled", t);
    };
    (pt.setFeature = Ae),
        (pt.getFeaturesSettings = function () {
            if (yt.services.paidAi || !yt.services.hasOwnProperty("paidAi")) return yt.settings;
            var e = {};
            return (
                Object.keys(yt.settings).forEach(function (t) {
                    yt.settings.hasOwnProperty(t) && -1 === cn.indexOf(t) && (e[t] = yt.settings[t]);
                }),
                e
            );
        }),
        (pt.lazyLoad = Ce),
        (pt.preloadIframe = Me),
        "loading" === document.readyState
            ? document.addEventListener("DOMContentLoaded", function () {
                  return e();
              })
            : e();
})();

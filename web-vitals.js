(function() {
    "use strict";
    var n = {};
    ! function() {
        n.d = function(y, T) {
            for (var C in T) {
                if (n.o(T, C) && !n.o(y, C)) {
                    Object.defineProperty(y, C, {
                        enumerable: true,
                        get: T[C]
                    })
                }
            }
        }
    }();
    ! function() {
        n.o = function(n, y) {
            return Object.prototype.hasOwnProperty.call(n, y)
        }
    }();
    ! function() {
        n.r = function(n) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                })
            }
            Object.defineProperty(n, "__esModule", {
                value: true
            })
        }
    }();
    if (typeof n !== "undefined") n.ab = __dirname + "/";
    var y = {};
    n.r(y);
    n.d(y, {
        getCLS: function() {
            return E
        },
        getFCP: function() {
            return g
        },
        getFID: function() {
            return F
        },
        getINP: function() {
            return O
        },
        getLCP: function() {
            return _
        },
        getTTFB: function() {
            return G
        },
        onCLS: function() {
            return E
        },
        onFCP: function() {
            return g
        },
        onFID: function() {
            return F
        },
        onINP: function() {
            return O
        },
        onLCP: function() {
            return _
        },
        onTTFB: function() {
            return G
        }
    });
    var T, C, w, P, I, k = -1,
        o = function(n) {
            addEventListener("pageshow", (function(y) {
                y.persisted && (k = y.timeStamp, n(y))
            }), !0)
        },
        c = function() {
            return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        },
        u = function() {
            var n = c();
            return n && n.activationStart || 0
        },
        f = function(n, y) {
            var T = c(),
                C = "navigate";
            return k >= 0 ? C = "back-forward-cache" : T && (C = document.prerendering || u() > 0 ? "prerender" : T.type.replace(/_/g, "-")), {
                name: n,
                value: void 0 === y ? -1 : y,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: C
            }
        },
        s = function(n, y, T) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(n)) {
                    var C = new PerformanceObserver((function(n) {
                        y(n.getEntries())
                    }));
                    return C.observe(Object.assign({
                        type: n,
                        buffered: !0
                    }, T || {})), C
                }
            } catch (n) {}
        },
        d = function(n, y) {
            var T = function t(T) {
                "pagehide" !== T.type && "hidden" !== document.visibilityState || (n(T), y && (removeEventListener("visibilitychange", t, !0), removeEventListener("pagehide", t, !0)))
            };
            addEventListener("visibilitychange", T, !0), addEventListener("pagehide", T, !0)
        },
        l = function(n, y, T, C) {
            var w, P;
            return function(I) {
                y.value >= 0 && (I || C) && ((P = y.value - (w || 0)) || void 0 === w) && (w = y.value, y.delta = P, y.rating = function(n, y) {
                    return n > y[1] ? "poor" : n > y[0] ? "needs-improvement" : "good"
                }(y.value, T), n(y))
            }
        },
        N = -1,
        v = function() {
            return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        },
        m = function() {
            d((function(n) {
                var y = n.timeStamp;
                N = y
            }), !0)
        },
        h = function() {
            return N < 0 && (N = v(), m(), o((function() {
                setTimeout((function() {
                    N = v(), m()
                }), 0)
            }))), {
                get firstHiddenTime() {
                    return N
                }
            }
        },
        g = function(n, y) {
            y = y || {};
            var T, C = [1800, 3e3],
                w = h(),
                P = f("FCP"),
                c = function(n) {
                    n.forEach((function(n) {
                        "first-contentful-paint" === n.name && (k && k.disconnect(), n.startTime < w.firstHiddenTime && (P.value = n.startTime - u(), P.entries.push(n), T(!0)))
                    }))
                },
                I = window.performance && window.performance.getEntriesByName && window.performance.getEntriesByName("first-contentful-paint")[0],
                k = I ? null : s("paint", c);
            (I || k) && (T = l(n, P, C, y.reportAllChanges), I && c([I]), o((function(w) {
                P = f("FCP"), T = l(n, P, C, y.reportAllChanges), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        P.value = performance.now() - w.timeStamp, T(!0)
                    }))
                }))
            })))
        },
        j = !1,
        q = -1,
        E = function(n, y) {
            y = y || {};
            var T = [.1, .25];
            j || (g((function(n) {
                q = n.value
            })), j = !0);
            var C, i = function(y) {
                    q > -1 && n(y)
                },
                w = f("CLS", 0),
                P = 0,
                I = [],
                p = function(n) {
                    n.forEach((function(n) {
                        if (!n.hadRecentInput) {
                            var y = I[0],
                                T = I[I.length - 1];
                            P && n.startTime - T.startTime < 1e3 && n.startTime - y.startTime < 5e3 ? (P += n.value, I.push(n)) : (P = n.value, I = [n]), P > w.value && (w.value = P, w.entries = I, C())
                        }
                    }))
                },
                k = s("layout-shift", p);
            k && (C = l(i, w, T, y.reportAllChanges), d((function() {
                p(k.takeRecords()), C(!0)
            })), o((function() {
                P = 0, q = -1, w = f("CLS", 0), C = l(i, w, T, y.reportAllChanges)
            })))
        },
        x = {
            passive: !0,
            capture: !0
        },
        z = new Date,
        L = function(n, y) {
            T || (T = y, C = n, w = new Date, A(removeEventListener), S())
        },
        S = function() {
            if (C >= 0 && C < w - z) {
                var n = {
                    entryType: "first-input",
                    name: T.type,
                    target: T.target,
                    cancelable: T.cancelable,
                    startTime: T.timeStamp,
                    processingStart: T.timeStamp + C
                };
                P.forEach((function(y) {
                    y(n)
                })), P = []
            }
        },
        b = function(n) {
            if (n.cancelable) {
                var y = (n.timeStamp > 1e12 ? new Date : performance.now()) - n.timeStamp;
                "pointerdown" == n.type ? function(n, y) {
                    var t = function() {
                            L(n, y), i()
                        },
                        r = function() {
                            i()
                        },
                        i = function() {
                            removeEventListener("pointerup", t, x), removeEventListener("pointercancel", r, x)
                        };
                    addEventListener("pointerup", t, x), addEventListener("pointercancel", r, x)
                }(y, n) : L(y, n)
            }
        },
        A = function(n) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(y) {
                return n(y, b, x)
            }))
        },
        F = function(n, y) {
            y = y || {};
            var w, I = [100, 300],
                k = h(),
                N = f("FID"),
                v = function(n) {
                    n.startTime < k.firstHiddenTime && (N.value = n.processingStart - n.startTime, N.entries.push(n), w(!0))
                },
                m = function(n) {
                    n.forEach(v)
                },
                j = s("first-input", m);
            w = l(n, N, I, y.reportAllChanges), j && d((function() {
                m(j.takeRecords()), j.disconnect()
            }), !0), j && o((function() {
                var k;
                N = f("FID"), w = l(n, N, I, y.reportAllChanges), P = [], C = -1, T = null, A(addEventListener), k = v, P.push(k), S()
            }))
        },
        J = 0,
        K = 1 / 0,
        Q = 0,
        M = function(n) {
            n.forEach((function(n) {
                n.interactionId && (K = Math.min(K, n.interactionId), Q = Math.max(Q, n.interactionId), J = Q ? (Q - K) / 7 + 1 : 0)
            }))
        },
        B = function() {
            return I ? J : performance.interactionCount || 0
        },
        D = function() {
            "interactionCount" in performance || I || (I = s("event", M, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        },
        U = 0,
        R = function() {
            return B() - U
        },
        V = [],
        W = {},
        H = function(n) {
            var y = V[V.length - 1],
                T = W[n.interactionId];
            if (T || V.length < 10 || n.duration > y.latency) {
                if (T) T.entries.push(n), T.latency = Math.max(T.latency, n.duration);
                else {
                    var C = {
                        id: n.interactionId,
                        latency: n.duration,
                        entries: [n]
                    };
                    W[C.id] = C, V.push(C)
                }
                V.sort((function(n, y) {
                    return y.latency - n.latency
                })), V.splice(10).forEach((function(n) {
                    delete W[n.id]
                }))
            }
        },
        O = function(n, y) {
            y = y || {};
            var T = [200, 500];
            D();
            var C, w = f("INP"),
                a = function(n) {
                    n.forEach((function(n) {
                        (n.interactionId && H(n), "first-input" === n.entryType) && (!V.some((function(y) {
                            return y.entries.some((function(y) {
                                return n.duration === y.duration && n.startTime === y.startTime
                            }))
                        })) && H(n))
                    }));
                    var y, T = (y = Math.min(V.length - 1, Math.floor(R() / 50)), V[y]);
                    T && T.latency !== w.value && (w.value = T.latency, w.entries = T.entries, C())
                },
                P = s("event", a, {
                    durationThreshold: y.durationThreshold || 40
                });
            C = l(n, w, T, y.reportAllChanges), P && (P.observe({
                type: "first-input",
                buffered: !0
            }), d((function() {
                a(P.takeRecords()), w.value < 0 && R() > 0 && (w.value = 0, w.entries = []), C(!0)
            })), o((function() {
                V = [], U = B(), w = f("INP"), C = l(n, w, T, y.reportAllChanges)
            })))
        },
        X = {},
        _ = function(n, y) {
            y = y || {};
            var T, C = [2500, 4e3],
                w = h(),
                P = f("LCP"),
                c = function(n) {
                    var y = n[n.length - 1];
                    if (y) {
                        var C = y.startTime - u();
                        C < w.firstHiddenTime && (P.value = C, P.entries = [y], T())
                    }
                },
                I = s("largest-contentful-paint", c);
            if (I) {
                T = l(n, P, C, y.reportAllChanges);
                var v = function() {
                    X[P.id] || (c(I.takeRecords()), I.disconnect(), X[P.id] = !0, T(!0))
                };
                ["keydown", "click"].forEach((function(n) {
                    addEventListener(n, v, {
                        once: !0,
                        capture: !0
                    })
                })), d(v, !0), o((function(w) {
                    P = f("LCP"), T = l(n, P, C, y.reportAllChanges), requestAnimationFrame((function() {
                        requestAnimationFrame((function() {
                            P.value = performance.now() - w.timeStamp, X[P.id] = !0, T(!0)
                        }))
                    }))
                }))
            }
        },
        Y = function e(n) {
            document.prerendering ? addEventListener("prerenderingchange", (function() {
                return e(n)
            }), !0) : "complete" !== document.readyState ? addEventListener("load", (function() {
                return e(n)
            }), !0) : setTimeout(n, 0)
        },
        G = function(n, y) {
            y = y || {};
            var T = [800, 1800],
                C = f("TTFB"),
                w = l(n, C, T, y.reportAllChanges);
            Y((function() {
                var P = c();
                if (P) {
                    if (C.value = Math.max(P.responseStart - u(), 0), C.value < 0 || C.value > performance.now()) return;
                    C.entries = [P], w(!0), o((function() {
                        C = f("TTFB", 0), (w = l(n, C, T, y.reportAllChanges))(!0)
                    }))
                }
            }))
        };
    module.exports = y
})();
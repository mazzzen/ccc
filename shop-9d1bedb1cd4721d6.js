(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [800], {
        17285: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AmpStateContext = void 0;
            var r = (0, n(92648).Z)(n(67294)).default.createContext({});
            t.AmpStateContext = r
        },
        80354: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isInAmpMode = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = e.hybrid,
                    r = e.hasQuery;
                return void 0 !== t && t || void 0 !== n && n && void 0 !== r && r
            }
        },
        16505: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultHead = s, t.default = void 0;
            var r = n(6495).Z,
                o = n(92648).Z,
                a = (0, n(91598).Z)(n(67294)),
                u = o(n(70148)),
                i = n(17285),
                d = n(60523),
                l = n(80354);

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [a.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(a.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function c(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce(function(e, t) {
                    return "string" == typeof t || "number" == typeof t ? e : e.concat(t)
                }, [])) : e.concat(t)
            }
            n(92783);
            var f = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(e, t) {
                var n, o, u, i, d = t.inAmpMode;
                return e.reduce(c, []).reverse().concat(s(d).reverse()).filter((n = new Set, o = new Set, u = new Set, i = {}, function(e) {
                    var t = !0,
                        r = !1;
                    if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                        r = !0;
                        var a = e.key.slice(e.key.indexOf("$") + 1);
                        n.has(a) ? t = !1 : n.add(a)
                    }
                    switch (e.type) {
                        case "title":
                        case "base":
                            o.has(e.type) ? t = !1 : o.add(e.type);
                            break;
                        case "meta":
                            for (var d = 0, l = f.length; d < l; d++) {
                                var s = f[d];
                                if (e.props.hasOwnProperty(s)) {
                                    if ("charSet" === s) u.has(s) ? t = !1 : u.add(s);
                                    else {
                                        var c = e.props[s],
                                            p = i[s] || new Set;
                                        ("name" !== s || !r) && p.has(c) ? t = !1 : (p.add(c), i[s] = p)
                                    }
                                }
                            }
                    }
                    return t
                })).reverse().map(function(e, t) {
                    var n = e.key || t;
                    if (!d && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(function(t) {
                            return e.props.href.startsWith(t)
                        })) {
                        var o = r({}, e.props || {});
                        return o["data-href"] = o.href, o.href = void 0, o["data-optimized-fonts"] = !0, a.default.cloneElement(e, o)
                    }
                    return a.default.cloneElement(e, {
                        key: n
                    })
                })
            }
            t.default = function(e) {
                var t = e.children,
                    n = a.useContext(i.AmpStateContext),
                    r = a.useContext(d.HeadManagerContext);
                return a.default.createElement(u.default, {
                    reduceComponentsToState: p,
                    headManager: r,
                    inAmpMode: l.isInAmpMode(n)
                }, t)
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        70148: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.headManager,
                    i = e.reduceComponentsToState;

                function d() {
                    if (n && n.mountedInstances) {
                        var t = r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));
                        n.updateHead(i(t, e))
                    }
                }
                return o && (null == n || null == (t = n.mountedInstances) || t.add(e.children), d()), a(function() {
                    var t;
                    return null == n || null == (t = n.mountedInstances) || t.add(e.children),
                        function() {
                            var t;
                            null == n || null == (t = n.mountedInstances) || t.delete(e.children)
                        }
                }), a(function() {
                    return n && (n._pendingUpdate = d),
                        function() {
                            n && (n._pendingUpdate = d)
                        }
                }), u(function() {
                    return n && n._pendingUpdate && (n._pendingUpdate(), n._pendingUpdate = null),
                        function() {
                            n && n._pendingUpdate && (n._pendingUpdate(), n._pendingUpdate = null)
                        }
                }), null
            };
            var r = (0, n(91598).Z)(n(67294)),
                o = !1,
                a = r.useLayoutEffect,
                u = o ? function() {} : r.useEffect
        },
        92783: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.warnOnce = void 0, t.warnOnce = function(e) {}
        },
        106: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(9008),
                o = n.n(r),
                a = n(86896),
                u = n(44012),
                i = n(34122),
                d = n(19132),
                l = n(95036),
                s = n(42937),
                c = n(56023),
                f = n(119),
                p = n(65120),
                v = n(10014),
                h = n(90129),
                m = n(35314),
                y = n(85893),
                g = function() {
                    var e, t, n, r = (0, s.tv)(),
                        u = r.query.page,
                        p = (0, l.oR)(),
                        v = p.storeId,
                        h = p.name,
                        g = p.description,
                        _ = p.seo,
                        x = p.favIcon,
                        S = p.storeUrl,
                        b = p.logo,
                        w = (0, a.Z)(),
                        M = r.query.filters,
                        j = (0, m.U)(M || []),
                        E = j.attributeValueSelectors,
                        O = j.collectionIds,
                        C = j.optionValueSelectors,
                        k = Math.max((Number(void 0 === u ? 1 : u) - 1) * 24, 0),
                        P = f.F.get(),
                        A = (0, d.wG$)({
                            variables: {
                                storeId: v,
                                connectionSettings: {
                                    offset: k,
                                    first: 24,
                                    sortBy: r.query.sortBy,
                                    sortOrder: r.query.sortOrder
                                },
                                filters: {
                                    collectionIds: O,
                                    attributeValueSelectors: E,
                                    optionValueSelectors: C,
                                    priceRange: {
                                        min: parseFloat(r.query.minPrice) || void 0,
                                        max: parseFloat(r.query.maxPrice) || void 0
                                    }
                                }
                            }
                        }),
                        I = A.data,
                        U = A.error,
                        F = A.loading;
                    return U ? null : F ? (0, y.jsx)(i.$j, {
                        size: 64,
                        inline: !1
                    }) : (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)(o(), {
                            children: (0, c.LX)({
                                title: "".concat(w.formatMessage({
                                    id: "Dxd1uB",
                                    defaultMessage: [{
                                        type: 0,
                                        value: "Shop"
                                    }]
                                }), " | ").concat(h),
                                description: (null == _ ? void 0 : _.description) || g,
                                pageUrl: "".concat(S, "/shop"),
                                faviconSrc: null == x ? void 0 : x.src,
                                imageSrc: null == b ? void 0 : null === (e = b.image) || void 0 === e ? void 0 : e.src
                            })
                        }), (0, y.jsx)(P.pages.Shop, {
                            products: null == I ? void 0 : null === (t = I.fullTextSearchAndFilter) || void 0 === t ? void 0 : t.products,
                            itemPerPage: 24,
                            productsTotalCount: null == I ? void 0 : null === (n = I.fullTextSearchAndFilter) || void 0 === n ? void 0 : n.totalCount,
                            offset: k
                        })]
                    })
                };
            g.useLayout = null === p.gE || void 0 === p.gE ? void 0 : (0, p.gE)(function(e) {
                var t = e.children;
                return (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)(h.a, {
                        children: (0, y.jsx)(u.Z, {
                            id: "Dxd1uB",
                            defaultMessage: [{
                                type: 0,
                                value: "Shop"
                            }]
                        })
                    }), (0, y.jsx)(v.n, {}), t]
                })
            }), t.default = g
        },
        73276: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/shop", function() {
                return n(106)
            }])
        },
        9008: function(e, t, n) {
            e.exports = n(16505)
        }
    },
    function(e) {
        e.O(0, [23, 774, 888, 179], function() {
            return e(e.s = 73276)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=shop-9d1bedb1cd4721d6.js.map
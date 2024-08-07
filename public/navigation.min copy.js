window.NodeList &&
  !NodeList.prototype.forEach &&
  (NodeList.prototype.forEach = function (e, t) {
    var o,
      n = this.length;
    for (t = t || window, o = 0; o < n; o++) e.call(t, this[o], o, this);
  }),
  (function () {
    "use strict";
    function e() {
      var e = window,
        t = document;
      if (
        !("scrollBehavior" in t.documentElement.style) ||
        !0 === e.__forceSmoothScrollPolyfill__
      ) {
        var o,
          n = e.HTMLElement || e.Element,
          i = 468,
          a = {
            scroll: e.scroll || e.scrollTo,
            scrollBy: e.scrollBy,
            elementScroll: n.prototype.scroll || s,
            scrollIntoView: n.prototype.scrollIntoView,
          },
          r =
            e.performance && e.performance.now
              ? e.performance.now.bind(e.performance)
              : Date.now,
          l =
            ((o = e.navigator.userAgent),
            new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(o)
              ? 1
              : 0);
        (e.scroll = e.scrollTo =
          function () {
            void 0 !== arguments[0] &&
              (!0 !== d(arguments[0])
                ? g.call(
                    e,
                    t.body,
                    void 0 !== arguments[0].left
                      ? ~~arguments[0].left
                      : e.scrollX || e.pageXOffset,
                    void 0 !== arguments[0].top
                      ? ~~arguments[0].top
                      : e.scrollY || e.pageYOffset
                  )
                : a.scroll.call(
                    e,
                    void 0 !== arguments[0].left
                      ? arguments[0].left
                      : "object" != typeof arguments[0]
                      ? arguments[0]
                      : e.scrollX || e.pageXOffset,
                    void 0 !== arguments[0].top
                      ? arguments[0].top
                      : void 0 !== arguments[1]
                      ? arguments[1]
                      : e.scrollY || e.pageYOffset
                  ));
          }),
          (e.scrollBy = function () {
            void 0 !== arguments[0] &&
              (d(arguments[0])
                ? a.scrollBy.call(
                    e,
                    void 0 !== arguments[0].left
                      ? arguments[0].left
                      : "object" != typeof arguments[0]
                      ? arguments[0]
                      : 0,
                    void 0 !== arguments[0].top
                      ? arguments[0].top
                      : void 0 !== arguments[1]
                      ? arguments[1]
                      : 0
                  )
                : g.call(
                    e,
                    t.body,
                    ~~arguments[0].left + (e.scrollX || e.pageXOffset),
                    ~~arguments[0].top + (e.scrollY || e.pageYOffset)
                  ));
          }),
          (n.prototype.scroll = n.prototype.scrollTo =
            function () {
              if (void 0 !== arguments[0])
                if (!0 !== d(arguments[0])) {
                  var e = arguments[0].left,
                    t = arguments[0].top;
                  g.call(
                    this,
                    this,
                    void 0 === e ? this.scrollLeft : ~~e,
                    void 0 === t ? this.scrollTop : ~~t
                  );
                } else {
                  if (
                    "number" == typeof arguments[0] &&
                    void 0 === arguments[1]
                  )
                    throw new SyntaxError("Value could not be converted");
                  a.elementScroll.call(
                    this,
                    void 0 !== arguments[0].left
                      ? ~~arguments[0].left
                      : "object" != typeof arguments[0]
                      ? ~~arguments[0]
                      : this.scrollLeft,
                    void 0 !== arguments[0].top
                      ? ~~arguments[0].top
                      : void 0 !== arguments[1]
                      ? ~~arguments[1]
                      : this.scrollTop
                  );
                }
            }),
          (n.prototype.scrollBy = function () {
            void 0 !== arguments[0] &&
              (!0 !== d(arguments[0])
                ? this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior,
                  })
                : a.elementScroll.call(
                    this,
                    void 0 !== arguments[0].left
                      ? ~~arguments[0].left + this.scrollLeft
                      : ~~arguments[0] + this.scrollLeft,
                    void 0 !== arguments[0].top
                      ? ~~arguments[0].top + this.scrollTop
                      : ~~arguments[1] + this.scrollTop
                  ));
          }),
          (n.prototype.scrollIntoView = function () {
            if (!0 !== d(arguments[0])) {
              var o = (function (e) {
                  for (
                    ;
                    e !== t.body &&
                    !1 ===
                      ((n = c((o = e), "Y") && u(o, "Y")),
                      (i = c(o, "X") && u(o, "X")),
                      n || i);

                  )
                    e = e.parentNode || e.host;
                  var o, n, i;
                  return e;
                })(this),
                n = o.getBoundingClientRect(),
                i = this.getBoundingClientRect();
              o !== t.body
                ? (g.call(
                    this,
                    o,
                    o.scrollLeft + i.left - n.left,
                    o.scrollTop + i.top - n.top
                  ),
                  "fixed" !== e.getComputedStyle(o).position &&
                    e.scrollBy({
                      left: n.left,
                      top: n.top,
                      behavior: "smooth",
                    }))
                : e.scrollBy({ left: i.left, top: i.top, behavior: "smooth" });
            } else
              a.scrollIntoView.call(
                this,
                void 0 === arguments[0] || arguments[0]
              );
          });
      }
      function s(e, t) {
        (this.scrollLeft = e), (this.scrollTop = t);
      }
      function d(e) {
        if (
          null === e ||
          "object" != typeof e ||
          void 0 === e.behavior ||
          "auto" === e.behavior ||
          "instant" === e.behavior
        )
          return !0;
        if ("object" == typeof e && "smooth" === e.behavior) return !1;
        throw new TypeError(
          "behavior member of ScrollOptions " +
            e.behavior +
            " is not a valid value for enumeration ScrollBehavior."
        );
      }
      function c(e, t) {
        return "Y" === t
          ? e.clientHeight + l < e.scrollHeight
          : "X" === t
          ? e.clientWidth + l < e.scrollWidth
          : void 0;
      }
      function u(t, o) {
        var n = e.getComputedStyle(t, null)["overflow" + o];
        return "auto" === n || "scroll" === n;
      }
      function f(t) {
        var o,
          n,
          a,
          l,
          s = (r() - t.startTime) / i;
        (l = s = s > 1 ? 1 : s),
          (o = 0.5 * (1 - Math.cos(Math.PI * l))),
          (n = t.startX + (t.x - t.startX) * o),
          (a = t.startY + (t.y - t.startY) * o),
          t.method.call(t.scrollable, n, a),
          (n === t.x && a === t.y) || e.requestAnimationFrame(f.bind(e, t));
      }
      function g(o, n, i) {
        var l,
          d,
          c,
          u,
          g = r();
        o === t.body
          ? ((l = e),
            (d = e.scrollX || e.pageXOffset),
            (c = e.scrollY || e.pageYOffset),
            (u = a.scroll))
          : ((l = o), (d = o.scrollLeft), (c = o.scrollTop), (u = s)),
          f({
            scrollable: l,
            method: u,
            startTime: g,
            startX: d,
            startY: c,
            x: n,
            y: i,
          });
      }
    }
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = { polyfill: e })
      : e();
  })(),
  (function () {
    "use strict";
    (window.kadence = {
      initOutlineToggle: function () {
        document.body.addEventListener("keydown", function () {
          document.body.classList.remove("hide-focus-outline");
        }),
          document.body.addEventListener("mousedown", function () {
            document.body.classList.add("hide-focus-outline");
          });
      },
      getOffset: function (e) {
        if (e instanceof HTMLElement) {
          var t = e.getBoundingClientRect();
          return {
            top: t.top + window.pageYOffset,
            left: t.left + window.pageXOffset,
          };
        }
        return { top: null, left: null };
      },
      findParents: function (e, t) {
        var o = [];
        return (
          (function e(n) {
            var i = n.parentNode;
            i instanceof HTMLElement && (i.matches(t) && o.push(i), e(i));
          })(e),
          o
        );
      },
      toggleAttribute: function (e, t, o, n) {
        void 0 === o && (o = !0),
          void 0 === n && (n = !1),
          e.getAttribute(t) !== o ? e.setAttribute(t, o) : e.setAttribute(t, n);
      },
      initNavToggleSubmenus: function () {
        var e = document.querySelectorAll(".nav--toggle-sub");
        if (e.length)
          for (let t = 0; t < e.length; t++)
            window.kadence.initEachNavToggleSubmenu(e[t]),
              window.kadence.initEachNavToggleSubmenuInside(e[t]);
      },
      initEachNavToggleSubmenu: function (e) {
        var t = e.querySelectorAll(".menu ul");
        if (t.length)
          for (let i = 0; i < t.length; i++) {
            var o = t[i].parentNode;
            if (o.querySelector(".dropdown-nav-toggle")) {
              var n = document.createElement("BUTTON");
              n.setAttribute("aria-label", kadenceConfig.screenReader.expand),
                n.classList.add("dropdown-nav-special-toggle"),
                o.insertBefore(n, o.childNodes[1]),
                n.addEventListener("click", function (e) {
                  e.preventDefault(),
                    window.kadence.toggleSubMenu(e.target.parentNode);
                }),
                o.addEventListener("mouseleave", function (e) {
                  window.kadence.toggleSubMenu(e.target, !1);
                }),
                o.querySelector("a").addEventListener("focus", function (e) {
                  var t = e.target.parentNode.parentNode.querySelectorAll(
                    "li.menu-item--toggled-on"
                  );
                  for (let o = 0; o < t.length; o++)
                    window.kadence.toggleSubMenu(t[o], !1);
                }),
                t[i].addEventListener("keydown", function (e) {
                  var o =
                    "ul.toggle-show > li > a, ul.toggle-show > li > .dropdown-nav-special-toggle";
                  9 === e.keyCode &&
                    (e.shiftKey
                      ? window.kadence.isfirstFocusableElement(
                          t[i],
                          document.activeElement,
                          o
                        ) && window.kadence.toggleSubMenu(t[i].parentNode, !1)
                      : window.kadence.islastFocusableElement(
                          t[i],
                          document.activeElement,
                          o
                        ) && window.kadence.toggleSubMenu(t[i].parentNode, !1));
                }),
                t[i].parentNode.classList.add("menu-item--has-toggle");
            }
          }
      },
      initEachNavToggleSubmenuInside: function (e) {
        var t = e.querySelectorAll(".menu-item-has-children");
        if (t.length)
          for (let o = 0; o < t.length; o++)
            t[o].addEventListener("mouseenter", function (e) {
              if (t[o].querySelector("ul.sub-menu")) {
                var n = t[o].querySelector("ul.sub-menu");
                window.kadence.getOffset(n).left + n.offsetWidth <=
                  window.innerWidth || n.classList.add("sub-menu-edge");
              }
            });
      },
      toggleSubMenu: function (e, t) {
        var o = e.querySelector(".dropdown-nav-special-toggle"),
          n = e.querySelector("ul");
        let i = e.classList.contains("menu-item--toggled-on");
        if (
          (void 0 !== t && "boolean" == typeof t && (i = !t),
          o.setAttribute("aria-expanded", (!i).toString()),
          i)
        ) {
          e.classList.remove("menu-item--toggled-on"),
            n.classList.remove("toggle-show"),
            o.setAttribute("aria-label", kadenceConfig.screenReader.expand);
          var a = e.querySelectorAll(".menu-item--toggled-on");
          for (let e = 0; e < a.length; e++)
            window.kadence.toggleSubMenu(a[e], !1);
        } else {
          var r = e.parentNode.querySelectorAll("li.menu-item--toggled-on");
          for (let e = 0; e < r.length; e++)
            window.kadence.toggleSubMenu(r[e], !1);
          e.classList.add("menu-item--toggled-on"),
            n.classList.add("toggle-show"),
            o.setAttribute("aria-label", kadenceConfig.screenReader.collapse);
        }
      },
      isfirstFocusableElement: function (e, t, o) {
        var n = e.querySelectorAll(o);
        return 0 < n.length && t === n[0];
      },
      islastFocusableElement: function (e, t, o) {
        var n = e.querySelectorAll(o);
        return 0 < n.length && t === n[n.length - 1];
      },
      toggleDrawer: function (e, t) {
        t = void 0 === t || t;
        var o = e,
          n = document.querySelector(o.dataset.toggleTarget),
          i = document,
          a = window.innerWidth - document.documentElement.clientWidth,
          r = o.dataset.toggleDuration ? o.dataset.toggleDuration : 250;
        if (
          (window.kadence.toggleAttribute(o, "aria-expanded", "true", "false"),
          n.classList.contains("show-drawer"))
        )
          o.dataset.toggleBodyClass &&
            i.body.classList.remove(o.dataset.toggleBodyClass),
            n.classList.remove("active"),
            n.classList.remove("pop-animated"),
            i.body.classList.remove("kadence-scrollbar-fixer"),
            setTimeout(function () {
              if (
                (n.classList.remove("show-drawer"), o.dataset.setFocus && t)
              ) {
                var e = document.querySelector(o.dataset.setFocus);
                e &&
                  (e.focus(),
                  e.hasAttribute("aria-expanded") &&
                    window.kadence.toggleAttribute(
                      e,
                      "aria-expanded",
                      "true",
                      "false"
                    ));
              }
            }, r);
        else if (
          (n.classList.add("show-drawer"),
          o.dataset.toggleBodyClass &&
            (i.body.classList.toggle(o.dataset.toggleBodyClass),
            o.dataset.toggleBodyClass.includes("showing-popup-drawer-") &&
              (i.body.style.setProperty("--scrollbar-offset", a + "px"),
              i.body.classList.add("kadence-scrollbar-fixer"))),
          setTimeout(function () {
            if ((n.classList.add("active"), o.dataset.setFocus, t)) {
              var e = document.querySelector(o.dataset.setFocus);
              if (e) {
                e.hasAttribute("aria-expanded") &&
                  window.kadence.toggleAttribute(
                    e,
                    "aria-expanded",
                    "true",
                    "false"
                  );
                var i = e.value;
                (e.value = ""), e.focus(), (e.value = i);
              }
            }
          }, 10),
          setTimeout(function () {
            n.classList.add("pop-animated");
          }, r),
          n.classList.contains("popup-drawer"))
        ) {
          var l = n.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            ),
            s = l[0],
            d = l[l.length - 1];
          document.addEventListener("keydown", function (e) {
            ("Tab" === e.key || 9 === e.keyCode) &&
              (e.shiftKey
                ? document.activeElement === s &&
                  (d.focus(), e.preventDefault())
                : document.activeElement === d &&
                  (s.focus(), e.preventDefault()));
          });
        }
      },
      initToggleDrawer: function () {
        var e = document.querySelectorAll(".drawer-toggle");
        if (e.length) {
          for (let t = 0; t < e.length; t++)
            e[t].addEventListener("click", function (o) {
              o.preventDefault(), window.kadence.toggleDrawer(e[t]);
            });
          document.addEventListener("keyup", function (e) {
            27 === e.keyCode &&
              document.querySelectorAll(".popup-drawer.show-drawer.active") &&
              (e.preventDefault(),
              document
                .querySelectorAll(".popup-drawer.show-drawer.active")
                .forEach(function (e) {
                  window.kadence.toggleDrawer(
                    document.querySelector(
                      '*[data-toggle-target="' +
                        e.dataset.drawerTargetString +
                        '"]'
                    )
                  );
                }));
          }),
            document.addEventListener("click", function (e) {
              var t = e.target;
              t ===
                (n = document.querySelector(
                  ".show-drawer.active .drawer-overlay"
                )) &&
                window.kadence.toggleDrawer(
                  document.querySelector(
                    '*[data-toggle-target="' +
                      n.dataset.drawerTargetString +
                      '"]'
                  )
                );
              var o = document.querySelector(
                  "#search-drawer.show-drawer.active .drawer-content"
                ),
                n = document.querySelector(
                  "#search-drawer.show-drawer.active .drawer-overlay"
                );
              t === o &&
                window.kadence.toggleDrawer(
                  document.querySelector(
                    '*[data-toggle-target="' +
                      n.dataset.drawerTargetString +
                      '"]'
                  )
                );
            });
        }
      },
      initMobileToggleSub: function () {
        document
          .querySelectorAll(".has-collapse-sub-nav")
          .forEach(function (e) {
            var t = e.querySelector(".current-menu-item");
            t &&
              window.kadence.findParents(t, "li").forEach(function (e) {
                var t = e.querySelector(".drawer-sub-toggle");
                t && window.kadence.toggleDrawer(t, !0);
              });
          });
        var e = document.querySelectorAll(".drawer-sub-toggle");
        if (e.length)
          for (let t = 0; t < e.length; t++)
            e[t].addEventListener("click", function (o) {
              o.preventDefault(), window.kadence.toggleDrawer(e[t]);
            });
      },
      initMobileToggleAnchor: function () {
        var e = document.getElementById("mobile-drawer");
        if (e) {
          var t = e.querySelectorAll("a");
          if (t.length)
            for (let o = 0; o < t.length; o++)
              t[o].addEventListener("click", function (t) {
                window.kadence.toggleDrawer(
                  e.querySelector(".menu-toggle-close"),
                  !1
                );
              });
        }
      },
      initTransHeaderPadding: function () {
        if (
          !document.body.classList.contains("no-header") &&
          document.body.classList.contains("transparent-header") &&
          document.body.classList.contains("mobile-transparent-header")
        ) {
          var e = document.querySelector(".entry-hero-container-inner"),
            t = document.querySelector("#masthead"),
            o = function (o) {
              kadenceConfig.breakPoints.desktop <= window.innerWidth
                ? document.body.classList.contains("transparent-header")
                  ? (e.style.paddingTop = t.offsetHeight + "px")
                  : (e.style.paddingTop = 0)
                : document.body.classList.contains("mobile-transparent-header")
                ? (e.style.paddingTop = t.offsetHeight + "px")
                : (e.style.paddingTop = 0);
            };
          e &&
            (window.addEventListener("resize", o, !1),
            window.addEventListener("scroll", o, !1),
            window.addEventListener("load", o, !1),
            o());
        }
      },
      initStickyHeader: function () {
        var e = document.querySelector("#main-header .kadence-sticky-header"),
          t = document.querySelector("#mobile-header .kadence-sticky-header"),
          o = document.getElementById("wrapper"),
          n = document.querySelectorAll(".kadence-pro-fixed-above"),
          i = document.querySelectorAll(".kadence-before-wrapper-item"),
          a = "mobile",
          r = 0,
          l = 0;
        parseInt(kadenceConfig.breakPoints.desktop) < window.innerWidth
          ? ((a = "desktop"),
            e &&
              ((e.style.position = "static"),
              (l = window.kadence.getOffset(e).top),
              (e.style.position = null)))
          : t &&
            ((t.style.position = "static"),
            (l = window.kadence.getOffset(t).top),
            (t.style.position = null));
        var s,
          d,
          c,
          u = function (s) {
            var d,
              c = window.kadence.getOffset(o).top;
            if (
              document.body.classList.toString().includes("boom_bar-static-top")
            ) {
              var u = document.querySelector(".boom_bar");
              c = window.kadence.getOffset(o).top - u.offsetHeight;
            }
            if (i.length) {
              var f = 0;
              for (let e = 0; e < i.length; e++) f += i[e].offsetHeight;
              c = window.kadence.getOffset(o).top - f;
            }
            if (n.length) {
              var g = 0;
              for (let e = 0; e < n.length; e++) g += n[e].offsetHeight;
              c = window.kadence.getOffset(o).top + g;
            }
            if (
              (d =
                kadenceConfig.breakPoints.desktop <= window.innerWidth ? e : t)
            ) {
              kadenceConfig.breakPoints.desktop <= window.innerWidth
                ? "mobile" === a
                  ? ((l = window.kadence.getOffset(d).top), (a = "desktop"))
                  : s &&
                    "updateActive" === s &&
                    ((d.style.top = "auto"),
                    (l = window.kadence.getOffset(d).top),
                    (a = "desktop"))
                : "desktop" === a
                ? ((l = window.kadence.getOffset(d).top), (a = "mobile"))
                : s &&
                  "updateActive" === s &&
                  ((d.style.top = "auto"),
                  (l = window.kadence.getOffset(d).top),
                  (a = "mobile"));
              var h = d.parentNode,
                w = d.getAttribute("data-shrink"),
                m = d.getAttribute("data-reveal-scroll-up"),
                p = parseInt(d.getAttribute("data-start-height"));
              if (
                ((!p ||
                  (s && void 0 !== s.type && "orientationchange" === s.type)) &&
                  (d.setAttribute("data-start-height", d.offsetHeight),
                  (p = d.offsetHeight),
                  h.classList.contains("site-header-upper-inner-wrap")
                    ? ((h.style.height = null),
                      s && void 0 !== s.type && "orientationchange" === s.type
                        ? d.classList.contains("item-is-fixed")
                          ? setTimeout(function () {
                              h.style.height =
                                Math.floor(h.offsetHeight + d.offsetHeight) +
                                "px";
                            }, 21)
                          : setTimeout(function () {
                              h.style.height = h.offsetHeight + "px";
                            }, 21)
                        : (h.style.height = h.offsetHeight + "px"))
                    : h.classList.contains("site-header-inner-wrap")
                    ? ((h.style.height = null),
                      (h.style.height = h.offsetHeight + "px"))
                    : (h.style.height = d.offsetHeight + "px")),
                "true" === w)
              ) {
                var v = d.getAttribute("data-shrink-height");
                if (v) {
                  if ("true" === m)
                    if (window.scrollY > r)
                      var y = Math.floor(
                        Math.floor(l) - Math.floor(c) + Math.floor(p)
                      );
                    else y = Math.floor(l - c);
                  else y = Math.floor(l - c);
                  var b = d.querySelector(".custom-logo"),
                    k = d.querySelector(".kadence-sticky-logo"),
                    L = d.querySelector(".site-main-header-inner-wrap"),
                    S = parseInt(L.getAttribute("data-start-height"));
                  if (
                    (S ||
                      (L.setAttribute("data-start-height", L.offsetHeight),
                      (S = L.offsetHeight)),
                    window.scrollY <= y)
                  )
                    (L.style.height = S + "px"),
                      (L.style.minHeight = S + "px"),
                      (L.style.maxHeight = S + "px"),
                      b && (b.style.maxHeight = "100%"),
                      k && (k.style.maxHeight = "100%");
                  else if (window.scrollY > y) {
                    var x = Math.max(v, S - (window.scrollY - (l - c)));
                    (L.style.height = x + "px"),
                      (L.style.minHeight = x + "px"),
                      (L.style.maxHeight = x + "px"),
                      b && (b.style.maxHeight = x + "px"),
                      k && (k.style.maxHeight = x + "px");
                  }
                }
              }
              if ("true" === m) {
                var E = Math.floor(l - c),
                  T = window.scrollY,
                  A = d.offsetHeight,
                  q = r - T,
                  M = window
                    .getComputedStyle(d)
                    .getPropertyValue("transform")
                    .match(/(-?[0-9\.]+)/g);
                if (M && void 0 !== M[5] && M[5]) var H = parseInt(M[5]) + q;
                else H = 0;
                var O = T > r;
                if (T <= E) d.style.transform = "translateY(0px)";
                else if (O)
                  d.classList.add("item-hidden-above"),
                    (d.style.transform =
                      "translateY(" + (Math.abs(H) > A ? -A : H) + "px)");
                else {
                  E = Math.floor(l - c);
                  (d.style.transform = "translateY(" + (H > 0 ? 0 : H) + "px)"),
                    d.classList.remove("item-hidden-above");
                }
                r = T;
              } else E = Math.floor(l - c);
              window.scrollY == E
                ? ((d.style.top = c + "px"),
                  d.classList.add("item-is-fixed"),
                  d.classList.add("item-at-start"),
                  d.classList.remove("item-is-stuck"),
                  h.classList.add("child-is-fixed"),
                  document.body.classList.add("header-is-fixed"))
                : window.scrollY > E
                ? "true" === m
                  ? window.scrollY < A + 60 &&
                    d.classList.contains("item-at-start")
                    ? ((d.style.height = null),
                      (d.style.top = c + "px"),
                      d.classList.add("item-is-fixed"),
                      d.classList.add("item-is-stuck"),
                      h.classList.add("child-is-fixed"),
                      document.body.classList.add("header-is-fixed"))
                    : ((d.style.top = c + "px"),
                      d.classList.add("item-is-fixed"),
                      d.classList.add("item-is-stuck"),
                      d.classList.remove("item-at-start"),
                      h.classList.add("child-is-fixed"),
                      document.body.classList.add("header-is-fixed"))
                  : ((d.style.top = c + "px"),
                    d.classList.add("item-is-fixed"),
                    d.classList.remove("item-at-start"),
                    d.classList.add("item-is-stuck"),
                    h.classList.add("child-is-fixed"),
                    document.body.classList.add("header-is-fixed"))
                : d.classList.contains("item-is-fixed") &&
                  (d.classList.remove("item-is-fixed"),
                  d.classList.remove("item-at-start"),
                  d.classList.remove("item-is-stuck"),
                  (d.style.height = null),
                  (d.style.top = null),
                  h.classList.remove("child-is-fixed"),
                  document.body.classList.remove("header-is-fixed"));
            }
          };
        if (
          (e || t) &&
          (window.addEventListener("resize", u, !1),
          window.addEventListener("scroll", u, !1),
          window.addEventListener("load", u, !1),
          window.addEventListener("orientationchange", u),
          "complete" === document.readyState && u("updateActive"),
          document.body.classList.contains("woocommerce-demo-store") &&
            document.body.classList.contains(
              "kadence-store-notice-placement-above"
            ))
        ) {
          (s = document.querySelector(".woocommerce-store-notice")),
            (d = (e) => {
              u("updateActive");
            }),
            (c = { root: document.documentElement }),
            new IntersectionObserver((e, t) => {
              e.forEach((e) => {
                d(e.intersectionRatio > 0);
              });
            }, c).observe(s);
        }
      },
      getTopOffset: function (e = "scroll") {
        if ("load" === e)
          var t = document.querySelector("#main-header .kadence-sticky-header"),
            o = document.querySelector("#mobile-header .kadence-sticky-header");
        else
          (t = document.querySelector(
            '#main-header .kadence-sticky-header:not([data-reveal-scroll-up="true"])'
          )),
            (o = document.querySelector(
              '#mobile-header .kadence-sticky-header:not([data-reveal-scroll-up="true"])'
            ));
        var n = 0,
          i = 0;
        if (kadenceConfig.breakPoints.desktop <= window.innerWidth) {
          if (t)
            n =
              "true" !== t.getAttribute("data-shrink") ||
              t.classList.contains("site-header-inner-wrap")
                ? Math.floor(t.offsetHeight)
                : Math.floor(t.getAttribute("data-shrink-height"));
          else n = 0;
          document.body.classList.contains("admin-bar") && (i = 32);
        } else {
          if (o)
            n =
              "true" === o.getAttribute("data-shrink")
                ? Math.floor(o.getAttribute("data-shrink-height"))
                : Math.floor(o.offsetHeight);
          else n = 0;
          document.body.classList.contains("admin-bar") && (i = 46);
        }
        return Math.floor(n + i + Math.floor(kadenceConfig.scrollOffset));
      },
      scrollToElement: function (e, t, o = "scroll") {
        t = void 0 === t || t;
        var n = window.kadence.getTopOffset(o),
          i = Math.floor(e.getBoundingClientRect().top) - n;
        window.scrollBy({ top: i, left: 0, behavior: "smooth" }),
          (e.tabIndex = "-1"),
          e.focus({ preventScroll: !0 }),
          e.classList.contains("kt-title-item") && e.firstElementChild.click(),
          t && window.history.pushState("", "", "#" + e.id);
      },
      anchorScrollToCheck: function (e, t) {
        if (((t = void 0 !== t ? t : null), e.target.getAttribute("href")))
          var o = e.target;
        else {
          if (!(o = e.target.closest("a"))) return;
          if (!o.getAttribute("href")) return;
        }
        if (
          !o.parentNode ||
          !o.parentNode.hasAttribute("role") ||
          "tab" !== o.parentNode.getAttribute("role")
        ) {
          var n;
          n = t
            ? t
                .getAttribute("href")
                .substring(t.getAttribute("href").indexOf("#"))
            : o
                .getAttribute("href")
                .substring(o.getAttribute("href").indexOf("#"));
          var i = document.getElementById(n.replace("#", ""));
          i && (e.preventDefault(), window.kadence.scrollToElement(i));
        }
      },
      initStickySidebarWidget: function () {
        if (document.body.classList.contains("has-sticky-sidebar-widget")) {
          var e = window.kadence.getTopOffset(),
            t = document.querySelector(
              "#secondary .sidebar-inner-wrap .widget:last-child"
            );
          t &&
            ((t.style.top = Math.floor(e + 20) + "px"),
            (t.style.maxHeight =
              "calc( 100vh - " + Math.floor(e + 20) + "px )"));
        }
      },
      initStickySidebar: function () {
        if (document.body.classList.contains("has-sticky-sidebar")) {
          var e = window.kadence.getTopOffset(),
            t = document.querySelector("#secondary .sidebar-inner-wrap");
          t &&
            ((t.style.top = Math.floor(e + 20) + "px"),
            (t.style.maxHeight =
              "calc( 100vh - " + Math.floor(e + 20) + "px )"));
        }
      },
      initAnchorScrollTo: function () {
        if (!document.body.classList.contains("no-anchor-scroll")) {
          if (
            ((window.onhashchange = function () {
              "" === window.location.hash &&
                (window.scrollTo({ top: 0, behavior: "smooth" }),
                document.activeElement.blur());
            }),
            "" != window.location.hash)
          ) {
            var e,
              t = location.hash.substring(1);
            if (!/^[A-z0-9_-]+$/.test(t)) return;
            (e = document.getElementById(t)) &&
              window.setTimeout(function () {
                window.kadence.scrollToElement(e, !1, "load");
              }, 100);
          }
          var o = document.querySelectorAll(
            "a[href*=\\#]:not([href=\\#]):not(.scroll-ignore):not([data-tab]):not([data-toggle])"
          );
          o.length &&
            o.forEach(function (e) {
              new URL(e.href).pathname === window.location.pathname &&
                e.addEventListener("click", function (e) {
                  window.kadence.anchorScrollToCheck(e);
                });
            });
        }
      },
      initScrollToTop: function () {
        var e = document.getElementById("kt-scroll-up");
        if (e) {
          var t = function () {
            window.scrollY > 100
              ? e.classList.add("scroll-visible")
              : e.classList.remove("scroll-visible");
          };
          window.addEventListener("scroll", t),
            t(),
            e.addEventListener("click", function (e) {
              e.preventDefault(),
                window.scrollTo({ top: 0, behavior: "smooth" }),
                document.activeElement.blur();
            });
        }
        var o = document.getElementById("kt-scroll-up-reader");
        o &&
          o.addEventListener("click", function (e) {
            e.preventDefault(),
              window.scrollTo({ top: 0, behavior: "smooth" }),
              document.querySelector(".skip-link").focus();
          });
      },
      init: function () {
        window.kadence.initNavToggleSubmenus(),
          window.kadence.initToggleDrawer(),
          window.kadence.initMobileToggleAnchor(),
          window.kadence.initMobileToggleSub(),
          window.kadence.initOutlineToggle(),
          window.kadence.initStickyHeader(),
          window.kadence.initStickySidebar(),
          window.kadence.initStickySidebarWidget(),
          window.kadence.initTransHeaderPadding(),
          window.kadence.initAnchorScrollTo(),
          window.kadence.initScrollToTop();
      },
    }),
      "loading" === document.readyState
        ? document.addEventListener("DOMContentLoaded", window.kadence.init)
        : window.kadence.init();
  })();

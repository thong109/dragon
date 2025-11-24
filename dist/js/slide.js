function DefineProperties(n, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    ((i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(n, i.key, i));
  }
}
function CreateClass(n, t, e) {
  return (
    t && DefineProperties(n.prototype, t),
    e && DefineProperties(n, e),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    n
  );
}
(!(function (n) {
  'function' == typeof define && define.amd ? define(n) : n();
})(function () {
  'use strict';
  function n(n, t, e) {
    return Array.prototype.slice.call(n, t, e);
  }
  function t(t) {
    return t.bind.apply(t, [null].concat(n(arguments, 1)));
  }
  function e(n) {
    return requestAnimationFrame(n);
  }
  function i(n, t) {
    return typeof t === n;
  }
  var o = Array.isArray;
  function r(n) {
    return o(n) ? n : [n];
  }
  function u(n, t) {
    r(n).forEach(t);
  }
  (t(i, 'function'), t(i, 'string'), t(i, 'undefined'));
  var c = Object.keys;
  function a(t) {
    return (
      n(arguments, 1).forEach(function (n) {
        !(function (n, t, e) {
          if (n) {
            var i = c(n);
            i = e ? i.reverse() : i;
            for (var o = 0; o < i.length; o++) {
              var r = i[o];
              if ('__proto__' !== r && !1 === t(n[r], r)) break;
            }
          }
        })(n, function (e, i) {
          t[i] = n[i];
        });
      }),
      t
    );
  }
  var s = Math.min;
  var f =
      'ontouchstart' in document.documentElement ||
      ('MacIntel' === navigator.platform && navigator.maxTouchPoints > 1),
    l = 'move',
    d = 'moved',
    v = 'updated',
    p = 'drag',
    h = 'dragged',
    g = 'scroll',
    m = 'scrolled';
  function y(e) {
    var i = e ? e.event.bus : document.createDocumentFragment(),
      c = (function () {
        var n = [];
        function t(n, t, e) {
          u(n, function (n) {
            n &&
              u(t, function (t) {
                t.split(' ').forEach(function (t) {
                  var i = t.split('.');
                  e(n, i[0], i[1]);
                });
              });
          });
        }
        return {
          bind: function (e, i, o, r) {
            t(e, i, function (t, e, i) {
              var u = 'addEventListener' in t,
                c = u
                  ? t.removeEventListener.bind(t, e, o, r)
                  : t.removeListener.bind(t, o);
              (u ? t.addEventListener(e, o, r) : t.addListener(o),
                n.push([t, e, i, o, c]));
            });
          },
          unbind: function (e, i, o) {
            t(e, i, function (t, e, i) {
              n = n.filter(function (n) {
                return (
                  !!(
                    n[0] !== t ||
                    n[1] !== e ||
                    n[2] !== i ||
                    (o && n[3] !== o)
                  ) || (n[4](), !1)
                );
              });
            });
          },
          dispatch: function (n, t, e) {
            var i,
              o = !0;
            return (
              'function' == typeof CustomEvent
                ? (i = new CustomEvent(t, { bubbles: o, detail: e }))
                : (i = document.createEvent('CustomEvent')).initCustomEvent(
                    t,
                    o,
                    !1,
                    e,
                  ),
              n.dispatchEvent(i),
              i
            );
          },
          destroy: function () {
            (n.forEach(function (n) {
              n[4]();
            }),
              (n.length = 0));
          },
        };
      })();
    return (
      e && e.event.on('destroy', c.destroy),
      a(c, {
        bus: i,
        on: function (n, t) {
          c.bind(i, r(n).join(' '), function (n) {
            t.apply(t, o(n.detail) ? n.detail : []);
          });
        },
        off: t(c.unbind, i),
        emit: function (t) {
          c.dispatch(i, t, n(arguments, 1));
        },
      })
    );
  }
  function b(n, t, i, o) {
    var r,
      u,
      c = Date.now,
      a = 0,
      f = !0,
      l = 0;
    function d() {
      if (!f) {
        if (
          ((a = n ? s((c() - r) / n, 1) : 1),
          i && i(a),
          a >= 1 && (t(), (r = c()), o && ++l >= o))
        )
          return v();
        e(d);
      }
    }
    function v() {
      f = !0;
    }
    function p() {
      (u && cancelAnimationFrame(u), (a = 0), (u = 0), (f = !0));
    }
    return {
      start: function (t) {
        (!t && p(), (r = c() - (t ? a * n : 0)), (f = !1), e(d));
      },
      rewind: function () {
        ((r = c()), (a = 0), i && i(a));
      },
      pause: v,
      cancel: p,
      set: function (t) {
        n = t;
      },
      isPaused: function () {
        return f;
      },
    };
  }
  var w = 'slide';
  function E(n, t, e) {
    return Array.prototype.slice.call(n, t, e);
  }
  function S(n) {
    return n.bind.apply(n, [null].concat(E(arguments, 1)));
  }
  function x(n, t) {
    return typeof t === n;
  }
  function C(n) {
    return !k(n) && x('object', n);
  }
  var L = Array.isArray;
  (S(x, 'function'), S(x, 'string'));
  var P = S(x, 'undefined');
  function k(n) {
    return null === n;
  }
  function A(n, t) {
    var e;
    ((e = n), L(e) ? e : [e]).forEach(t);
  }
  var M = Object.keys;
  function _(n, t, e) {
    if (n) {
      var i = M(n);
      i = e ? i.reverse() : i;
      for (var o = 0; o < i.length; o++) {
        var r = i[o];
        if ('__proto__' !== r && !1 === t(n[r], r)) break;
      }
    }
    return n;
  }
  function D(n) {
    return (
      E(arguments, 1).forEach(function (t) {
        _(t, function (e, i) {
          n[i] = t[i];
        });
      }),
      n
    );
  }
  function z(n, t, e) {
    C(t)
      ? _(t, function (t, e) {
          z(n, e, t);
        })
      : A(n, function (n) {
          k(e) || '' === e
            ? (function (n, t) {
                A(n, function (n) {
                  A(t, function (t) {
                    n && n.removeAttribute(t);
                  });
                });
              })(n, t)
            : n.setAttribute(t, String(e));
        });
  }
  var O = Math.min,
    T = Math.max;
  (Math.floor, Math.ceil, Math.abs);
  var I = { speed: 1, autoStart: !0, pauseOnHover: !0, pauseOnFocus: !0 },
    N = { startScroll: 'Start auto scroll', pauseScroll: 'Pause auto scroll' };
  'undefined' != typeof window &&
    ((window.splide = window.splide || {}),
    (window.splide.ExScroll = window.splide.ExScroll || {}),
    (window.splide.ExScroll.AutoScroll = function (n, t, e) {
      var i,
        o,
        r,
        u,
        c,
        a,
        s = y(n),
        E = s.on,
        S = s.off,
        x = s.bind,
        L = s.unbind,
        k = t.Move,
        M = k.translate,
        _ = k.getPosition,
        F = k.toIndex,
        j = k.getLimit,
        R = t.Controller,
        W = R.setIndex,
        X = R.getIndex,
        G = t.Direction.orient,
        H = t.Elements.toggle,
        B = t.Live,
        q = n.root,
        Y = (function (n, t) {
          var e;
          return function () {
            e ||
              (e = b(
                t || 0,
                function () {
                  (n(), (e = null));
                },
                null,
                1,
              )).start();
          };
        })(t.Arrows.update, 500),
        U = {};
      function K() {
        n.is('fade') ||
          i ||
          !1 === e.autoScroll ||
          ((i = b(0, nn)),
          (function () {
            if (U.pauseOnHover) {
              var n = q.querySelector('.slidebox-track');
              f
                ? x(n, 'click', function (n) {
                    o ? Q() : Z();
                  })
                : x(n, 'mouseenter mouseleave', function (n) {
                    ((r = 'mouseenter' === n.type), $());
                  });
            }
            (U.pauseOnFocus &&
              x(q, 'focusin focusout', function (n) {
                ((u = 'focusin' === n.type), $());
              }),
              U.useToggleButton &&
                x(H, 'click', function () {
                  o ? Q() : Z();
                }),
              E(v, J),
              E([l, p, g], function () {
                ((c = !0), Z(!1));
              }),
              E([d, h, m], function () {
                ((c = !1), $());
              }));
          })(),
          U.autoStart &&
            ('complete' === document.readyState ? Q() : x(window, 'load', Q)));
      }
      function V() {
        i &&
          (i.cancel(),
          (i = null),
          (a = void 0),
          S([l, p, g, d, m]),
          L(q, 'mouseenter mouseleave focusin focusout'),
          L(H, 'click'));
      }
      function J() {
        var n = e.autoScroll;
        (!1 !== n ? ((U = D({}, U, C(n) ? n : {})), K()) : V(),
          i && !P(a) && M(a));
      }
      function Q() {
        en() && (i.start(!0), B.disable(!0), (u = r = o = !1), tn());
      }
      function Z(n) {
        (void 0 === n && (n = !0),
          o || ((o = n), tn(), en() || (i.pause(), B.disable(!1))));
      }
      function $() {
        o || (r || u || c ? Z(!1) : Q());
      }
      function nn() {
        var i = _(),
          o = (function (t) {
            var e,
              i,
              o,
              r,
              u,
              c = U.speed || 1;
            return (
              (t += G(c)),
              n.is(w) &&
                ((e = t),
                (i = j(!1)),
                (o = j(!0)),
                (r = O(i, o)),
                (u = T(i, o)),
                (t = O(T(r, e), u))),
              t
            );
          })(i);
        (i !== o
          ? (M(o),
            (function (i) {
              var o = n.length,
                r = (F(i) + o) % o;
              r !== X() &&
                (W(r),
                t.Slides.update(),
                t.Pagination.update(),
                'nearby' === e.lazyLoad && t.LazyLoad.check());
            })((a = _())))
          : (Z(!1), U.rewind && n.go(U.speed > 0 ? 0 : t.Controller.getEnd())),
          Y());
      }
      function tn() {
        if (H) {
          var n = o ? 'startScroll' : 'pauseScroll';
          ((i = !o),
            (t = H) &&
              A('is-active', function (n) {
                n && t.classList[i ? 'add' : 'remove'](n);
              }),
            z(H, 'aria-label', e.i18n[n] || N[n]));
        }
        var t, i;
      }
      function en() {
        return !i || i.isPaused();
      }
      return {
        setup: function () {
          var n = e.autoScroll;
          U = D({}, I, C(n) ? n : {});
        },
        mount: K,
        destroy: V,
        play: Q,
        pause: Z,
        isPaused: en,
      };
    }));
}),
  (function (n, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = t())
      : 'function' == typeof define && define.amd
        ? define(t)
        : ((n =
            'undefined' != typeof globalThis ? globalThis : n || self).Splide =
            t());
  })(this, function () {
    'use strict';
    var n = '(prefers-reduced-motion: reduce)',
      t = {
        CREATED: 1,
        MOUNTED: 2,
        IDLE: 3,
        MOVING: 4,
        SCROLLING: 5,
        DRAGGING: 6,
        DESTROYED: 7,
      };
    function e(n) {
      n.length = 0;
    }
    function i(n, t, e) {
      return Array.prototype.slice.call(n, t, e);
    }
    function o(n) {
      return n.bind.apply(n, [null].concat(i(arguments, 1)));
    }
    var r = setTimeout,
      u = function () {};
    function c(n) {
      return requestAnimationFrame(n);
    }
    function a(n, t) {
      return typeof t === n;
    }
    function s(n) {
      return !p(n) && a('object', n);
    }
    var f = Array.isArray,
      l = o(a, 'function'),
      d = o(a, 'string'),
      v = o(a, 'undefined');
    function p(n) {
      return null === n;
    }
    function h(n) {
      try {
        return n instanceof (n.ownerDocument.defaultView || window).HTMLElement;
      } catch (n) {
        return !1;
      }
    }
    function g(n) {
      return f(n) ? n : [n];
    }
    function m(n, t) {
      g(n).forEach(t);
    }
    function y(n, t) {
      return n.indexOf(t) > -1;
    }
    function b(n, t) {
      return (n.push.apply(n, g(t)), n);
    }
    function w(n, t, e) {
      n &&
        m(t, function (t) {
          t && n.classList[e ? 'add' : 'remove'](t);
        });
    }
    function E(n, t) {
      w(n, d(t) ? t.split(' ') : t, !0);
    }
    function S(n, t) {
      m(t, n.appendChild.bind(n));
    }
    function x(n, t) {
      m(n, function (n) {
        var e = (t || n).parentNode;
        e && e.insertBefore(n, t);
      });
    }
    function C(n, t) {
      return h(n) && (n.msMatchesSelector || n.matches).call(n, t);
    }
    function L(n, t) {
      var e = n ? i(n.children) : [];
      return t
        ? e.filter(function (n) {
            return C(n, t);
          })
        : e;
    }
    function P(n, t) {
      return t ? L(n, t)[0] : n.firstElementChild;
    }
    var k = Object.keys;
    function A(n, t, e) {
      return (
        n &&
          (e ? k(n).reverse() : k(n)).forEach(function (e) {
            '__proto__' !== e && t(n[e], e);
          }),
        n
      );
    }
    function M(n) {
      return (
        i(arguments, 1).forEach(function (t) {
          A(t, function (e, i) {
            n[i] = t[i];
          });
        }),
        n
      );
    }
    function _(n) {
      return (
        i(arguments, 1).forEach(function (t) {
          A(t, function (t, e) {
            f(t)
              ? (n[e] = t.slice())
              : s(t)
                ? (n[e] = _({}, s(n[e]) ? n[e] : {}, t))
                : (n[e] = t);
          });
        }),
        n
      );
    }
    function D(n, t) {
      m(t || k(n), function (t) {
        delete n[t];
      });
    }
    function z(n, t) {
      m(n, function (n) {
        m(t, function (t) {
          n && n.removeAttribute(t);
        });
      });
    }
    function O(n, t, e) {
      s(t)
        ? A(t, function (t, e) {
            O(n, e, t);
          })
        : m(n, function (n) {
            p(e) || '' === e ? z(n, t) : n.setAttribute(t, String(e));
          });
    }
    function T(n, t, e) {
      var i = document.createElement(n);
      return (t && (d(t) ? E(i, t) : O(i, t)), e && S(e, i), i);
    }
    function I(n, t, e) {
      if (v(e)) return getComputedStyle(n)[t];
      p(e) || (n.style[t] = '' + e);
    }
    function N(n, t) {
      I(n, 'display', t);
    }
    function F(n) {
      (n.setActive && n.setActive()) || n.focus({ preventScroll: !0 });
    }
    function j(n, t) {
      return n.getAttribute(t);
    }
    function R(n, t) {
      return n && n.classList.contains(t);
    }
    function W(n) {
      return n.getBoundingClientRect();
    }
    function X(n) {
      m(n, function (n) {
        n && n.parentNode && n.parentNode.removeChild(n);
      });
    }
    function G(n) {
      return P(new DOMParser().parseFromString(n, 'text/html').body);
    }
    function H(n, t) {
      (n.preventDefault(),
        t && (n.stopPropagation(), n.stopImmediatePropagation()));
    }
    function B(n, t) {
      return n && n.querySelector(t);
    }
    function q(n, t) {
      return t ? i(n.querySelectorAll(t)) : [];
    }
    function Y(n, t) {
      w(n, t, !1);
    }
    function U(n) {
      return n.timeStamp;
    }
    function K(n) {
      return d(n) ? n : n ? n + 'px' : '';
    }
    var V = 'slidebox',
      J = 'data-' + V;
    var Q = Math.min,
      Z = Math.max,
      $ = Math.floor,
      nn = Math.ceil,
      tn = Math.abs;
    function en(n, t, e) {
      return tn(n - t) < e;
    }
    function on(n, t, e, i) {
      var o = Q(t, e),
        r = Z(t, e);
      return i ? o < n && n < r : o <= n && n <= r;
    }
    function rn(n, t, e) {
      var i = Q(t, e),
        o = Z(t, e);
      return Q(Z(i, n), o);
    }
    function un(n) {
      return +(n > 0) - +(n < 0);
    }
    function cn(n, t) {
      return (
        m(t, function (t) {
          n = n.replace('%s', '' + t);
        }),
        n
      );
    }
    function an(n) {
      return n < 10 ? '0' + n : '' + n;
    }
    var sn = {};
    function fn() {
      var n = [];
      function t(n, t, e) {
        m(n, function (n) {
          n &&
            m(t, function (t) {
              t.split(' ').forEach(function (t) {
                var i = t.split('.');
                e(n, i[0], i[1]);
              });
            });
        });
      }
      return {
        bind: function (e, i, o, r) {
          t(e, i, function (t, e, i) {
            var u = 'addEventListener' in t,
              c = u
                ? t.removeEventListener.bind(t, e, o, r)
                : t.removeListener.bind(t, o);
            (u ? t.addEventListener(e, o, r) : t.addListener(o),
              n.push([t, e, i, o, c]));
          });
        },
        unbind: function (e, i, o) {
          t(e, i, function (t, e, i) {
            n = n.filter(function (n) {
              return (
                !!(
                  n[0] !== t ||
                  n[1] !== e ||
                  n[2] !== i ||
                  (o && n[3] !== o)
                ) || (n[4](), !1)
              );
            });
          });
        },
        dispatch: function (n, t, e) {
          var i,
            o = !0;
          return (
            'function' == typeof CustomEvent
              ? (i = new CustomEvent(t, { bubbles: o, detail: e }))
              : (i = document.createEvent('CustomEvent')).initCustomEvent(
                  t,
                  o,
                  !1,
                  e,
                ),
            n.dispatchEvent(i),
            i
          );
        },
        destroy: function () {
          (n.forEach(function (n) {
            n[4]();
          }),
            e(n));
        },
      };
    }
    var ln = 'mounted',
      dn = 'ready',
      vn = 'move',
      pn = 'moved',
      hn = 'click',
      gn = 'active',
      mn = 'inactive',
      yn = 'visible',
      bn = 'hidden',
      wn = 'refresh',
      En = 'updated',
      Sn = 'resize',
      xn = 'resized',
      Cn = 'scroll',
      Ln = 'scrolled',
      Pn = 'destroy',
      kn = 'arrows:mounted',
      An = 'navigation:mounted',
      Mn = 'autoplay:play',
      _n = 'autoplay:pause',
      Dn = 'lazyload:loaded',
      zn = 'sk',
      On = 'sh',
      Tn = 'ei';
    function In(n) {
      var t = n ? n.event.bus : document.createDocumentFragment(),
        e = fn();
      return (
        n && n.event.on(Pn, e.destroy),
        M(e, {
          bus: t,
          on: function (n, i) {
            e.bind(t, g(n).join(' '), function (n) {
              i.apply(i, f(n.detail) ? n.detail : []);
            });
          },
          off: o(e.unbind, t),
          emit: function (n) {
            e.dispatch(t, n, i(arguments, 1));
          },
        })
      );
    }
    function Nn(n, t, e, i) {
      var o,
        r,
        u = Date.now,
        a = 0,
        s = !0,
        f = 0;
      function l() {
        if (!s) {
          if (
            ((a = n ? Q((u() - o) / n, 1) : 1),
            e && e(a),
            a >= 1 && (t(), (o = u()), i && ++f >= i))
          )
            return d();
          r = c(l);
        }
      }
      function d() {
        s = !0;
      }
      function v() {
        (r && cancelAnimationFrame(r), (a = 0), (r = 0), (s = !0));
      }
      return {
        start: function (t) {
          (t || v(), (o = u() - (t ? a * n : 0)), (s = !1), (r = c(l)));
        },
        rewind: function () {
          ((o = u()), (a = 0), e && e(a));
        },
        pause: d,
        cancel: v,
        set: function (t) {
          n = t;
        },
        isPaused: function () {
          return s;
        },
      };
    }
    var Fn = 'Arrow',
      jn = Fn + 'Left',
      Rn = Fn + 'Right',
      Wn = Fn + 'Up',
      Xn = Fn + 'Down',
      Gn = 'ttb',
      Hn = {
        width: ['height'],
        left: ['top', 'right'],
        right: ['bottom', 'left'],
        x: ['y'],
        X: ['Y'],
        Y: ['X'],
        ArrowLeft: [Wn, Rn],
        ArrowRight: [Xn, jn],
      };
    var Bn = 'role',
      qn = 'tabindex',
      Yn = 'aria-',
      Un = Yn + 'controls',
      Kn = Yn + 'current',
      Vn = Yn + 'selected',
      Jn = Yn + 'label',
      Qn = Yn + 'labelledby',
      Zn = Yn + 'hidden',
      $n = Yn + 'orientation',
      nt = Yn + 'roledescription',
      tt = Yn + 'live',
      et = Yn + 'busy',
      it = Yn + 'atomic',
      ot = [Bn, qn, 'disabled', Un, Kn, Jn, Qn, Zn, $n, nt],
      rt = V + '-',
      ut = 'is-',
      ct = V,
      at = rt + 'track',
      st = rt + 'list',
      ft = rt + 'item',
      lt = ft + '-clone',
      dt = ft + '-container',
      vt = rt + 'arrows',
      pt = rt + 'arrow',
      ht = pt + '-prev',
      gt = pt + '-next',
      mt = rt + 'pagination',
      yt = mt + '-page',
      bt = rt + 'progress' + '-bar',
      wt = rt + 'toggle',
      Et = rt + 'sr',
      St = ut + 'initialized',
      xt = ut + 'active',
      Ct = ut + 'prev',
      Lt = ut + 'next',
      Pt = ut + 'visible',
      kt = ut + 'loading',
      At = ut + 'focus-in',
      Mt = ut + 'overflow',
      _t = [xt, Pt, Ct, Lt, kt, At, Mt],
      Dt = {
        slide: ft,
        clone: lt,
        arrows: vt,
        arrow: pt,
        prev: ht,
        next: gt,
        pagination: mt,
        page: yt,
        spinner: rt + 'spinner',
      };
    var zt = 'touchstart mousedown',
      Ot = 'touchmove mousemove',
      Tt = 'touchend touchcancel mouseup click';
    var It = 'slide',
      Nt = 'loop',
      Ft = 'fade';
    function jt(n, t, e, i) {
      var r,
        u = In(n),
        c = u.on,
        a = u.emit,
        s = u.bind,
        f = n.Components,
        l = n.root,
        d = n.options,
        v = d.isNavigation,
        p = d.updateOnMove,
        h = d.i18n,
        g = d.pagination,
        m = d.slideFocus,
        y = f.Direction.resolve,
        b = (j(i, 'style'), j(i, Jn)),
        E = e > -1,
        S = P(i, '.' + dt);
      function x() {
        var o = n.splides
          .map(function (n) {
            var e = n.splide.Components.Slides.getAt(t);
            return e ? e.slide.id : '';
          })
          .join(' ');
        (O(i, Jn, cn(h.slideX, (E ? e : t) + 1)),
          O(i, Un, o),
          O(i, Bn, m ? 'button' : ''),
          m && z(i, nt));
      }
      function C() {
        r || L();
      }
      function L() {
        var e;
        if (!l.classList.contains('extend') && !r) {
          var o = n.index;
          ((e = k()) !== R(i, xt) &&
            (w(i, xt, e), O(i, Kn, (v && e) || ''), a(e ? gn : mn, A)),
            (function () {
              var t = (function () {
                  if (n.is(Ft)) return k();
                  var t = W(f.Elements.track),
                    e = W(i),
                    o = y('left', !0),
                    r = y('right', !0);
                  return $(t[o]) <= nn(e[o]) && $(e[r]) <= nn(t[r]);
                })(),
                e = !t && (!k() || E);
              n.state.is([4, 5]) || O(i, Zn, e || '');
              (O(q(i, d.focusableNodes || ''), qn, e ? -1 : ''),
                m && O(i, qn, e ? -1 : 0));
              t !== R(i, Pt) && (w(i, Pt, t), a(t ? yn : bn, A));
              if (!t && document.activeElement === i) {
                var o = f.Slides.getAt(n.index);
                o && F(o.slide);
              }
            })(),
            w(i, Ct, t === o - 1),
            w(i, Lt, t === o + 1));
        }
      }
      function k() {
        var i = n.index;
        return i === t || (d.cloneStatus && i === e);
      }
      var A = {
        index: t,
        slideIndex: e,
        slide: i,
        container: S,
        isClone: E,
        mount: function () {
          (E ||
            ((i.id = l.id + '-item' + an(t + 1)),
            O(i, Bn, g ? 'tabpanel' : 'group'),
            O(i, nt, h.slide),
            O(i, Jn, b || cn(h.slideLabel, [t + 1, n.length]))),
            s(i, 'click', o(a, hn, A)),
            s(i, 'keydown', o(a, zn, A)),
            c([pn, On, Ln], L),
            c(An, x),
            p && c(vn, C));
        },
        destroy: function () {
          ((r = !0), u.destroy(), Y(i, _t), z(i, ot), z(i, 'style'), z(i, Jn));
        },
        update: L,
        style: function (n, t, e) {
          I((e && S) || i, n, t);
        },
        isWithin: function (e, i) {
          var o = tn(e - t);
          return (
            E || (!d.rewind && !n.is(Nt)) || (o = Q(o, n.length - o)),
            o <= i
          );
        },
      };
      return A;
    }
    var Rt = J + '-interval';
    var Wt = { passive: !1, capture: !0 };
    var Xt = { Spacebar: ' ', Right: Rn, Left: jn, Up: Wn, Down: Xn };
    function Gt(n) {
      return ((n = d(n) ? n : n.key), Xt[n] || n);
    }
    var Ht = 'keydown';
    var Bt = 'data-src',
      qt = 'data-srcset',
      Yt = '[' + Bt + '], [' + qt + ']';
    var Ut = [' ', 'Enter'];
    var Kt = Object.freeze({
        __proto__: null,
        Media: function (t, e, i) {
          var o = t.state,
            r = i.breakpoints || {},
            u = i.reducedMotion || {},
            c = fn(),
            a = [];
          function s(n) {
            n && c.destroy();
          }
          function f(n, t) {
            var e = matchMedia(t);
            (c.bind(e, 'change', l), a.push([n, e]));
          }
          function l() {
            var n = o.is(7),
              e = i.direction,
              r = a.reduce(function (n, t) {
                return _(n, t[1].matches ? t[0] : {});
              }, {});
            (D(i),
              d(r),
              i.destroy
                ? t.destroy('completely' === i.destroy)
                : n
                  ? (s(!0), t.mount())
                  : e !== i.direction && t.refresh());
          }
          function d(n, e, r) {
            (_(i, n),
              e && _(Object.getPrototypeOf(i), n),
              (!r && o.is(1)) || t.emit(En, i));
          }
          return {
            setup: function () {
              var t = 'min' === i.mediaQuery;
              (k(r)
                .sort(function (n, e) {
                  return t ? +n - +e : +e - +n;
                })
                .forEach(function (n) {
                  f(r[n], '(' + (t ? 'min' : 'max') + '-width:' + n + 'px)');
                }),
                f(u, n),
                l());
            },
            destroy: s,
            reduce: function (t) {
              matchMedia(n).matches && (t ? _(i, u) : D(i, k(u)));
            },
            set: d,
          };
        },
        Direction: function (n, t, e) {
          return {
            resolve: function (n, t, i) {
              var o =
                'rtl' !== (i = i || e.direction) || t ? (i === Gn ? 0 : -1) : 1;
              return (
                (Hn[n] && Hn[n][o]) ||
                n.replace(/width|left|right/i, function (n, t) {
                  var e = Hn[n.toLowerCase()][o] || n;
                  return t > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e;
                })
              );
            },
            orient: function (n) {
              return n * ('rtl' === e.direction ? 1 : -1);
            },
          };
        },
        Elements: function (n, t, i) {
          var o,
            r,
            u,
            c = In(n),
            a = c.on,
            s = c.bind,
            f = n.root,
            d = i.i18n,
            v = {},
            p = [],
            h = [],
            g = [];
          function m() {
            ((o = x('.' + at)),
              (r = P(o, '.' + st)),
              b(p, L(r, '.' + ft + ':not(.' + lt + ')')),
              A(
                {
                  arrows: vt,
                  pagination: mt,
                  prev: ht,
                  next: gt,
                  bar: bt,
                  toggle: wt,
                },
                function (n, t) {
                  v[t] = x('.' + n);
                },
              ),
              M(v, { root: f, track: o, list: r, slides: p }),
              (function () {
                var n =
                    f.id || ((e = V), '' + e + an((sn[e] = (sn[e] || 0) + 1))),
                  t = i.role;
                var e;
                ((f.id = n),
                  (o.id = o.id || n + '-track'),
                  (r.id = r.id || n + '-list'),
                  !j(f, Bn) && 'SECTION' !== f.tagName && t && O(f, Bn, t));
                (O(f, nt, d.carousel), O(r, Bn, 'presentation'));
              })(),
              S());
          }
          function y(n) {
            var t = ot.concat('style');
            (e(p),
              Y(f, h),
              Y(o, g),
              z([o, r], t),
              z(f, n ? t : ['style', nt]),
              Y(f, Mt),
              Y(f, _t));
          }
          function S() {
            f.classList.contains('extend') ||
              (Y(f, h),
              Y(o, g),
              (h = k(ct)),
              (g = k(at)),
              E(f, h),
              E(o, g),
              O(f, Jn, i.label),
              O(f, Qn, i.labelledby));
          }
          function x(n) {
            var t = B(f, n);
            return t &&
              (function (n, t) {
                if (l(n.closest)) return n.closest(t);
                for (var e = n; e && 1 === e.nodeType && !C(e, t); )
                  e = e.parentElement;
                return e;
              })(t, '.' + ct) === f
              ? t
              : void 0;
          }
          function k(n) {
            return [
              n + '-' + i.type,
              n + '-' + i.direction,
              i.drag && n + '-draggable',
              i.isNavigation && n + '-nav',
              n === ct && xt,
            ];
          }
          return M(v, {
            setup: m,
            mount: function () {
              (a(wn, y),
                a(wn, m),
                a(En, S),
                s(
                  document,
                  zt + ' keydown',
                  function (n) {
                    u = 'keydown' === n.type;
                  },
                  { capture: !0 },
                ),
                s(f, 'focusin', function () {
                  w(f, At, !!u);
                }));
            },
            destroy: y,
          });
        },
        Slides: function (n, t, i) {
          var r = In(n),
            u = r.on,
            c = r.emit,
            a = r.bind,
            s = t.Elements,
            f = s.slides,
            v = s.list,
            p = [];
          function b() {
            f.forEach(function (n, t) {
              L(n, t, -1);
            });
          }
          function w() {
            (k(function (n) {
              n.destroy();
            }),
              e(p));
          }
          function L(t, e, i) {
            var o = jt(n, e, i, t);
            (o.mount(),
              p.push(o),
              p.sort(function (n, t) {
                return n.index - t.index;
              }));
          }
          function P(n) {
            return n
              ? A(function (n) {
                  return !n.isClone;
                })
              : p;
          }
          function k(n, t) {
            P(t).forEach(n);
          }
          function A(n) {
            return p.filter(
              l(n)
                ? n
                : function (t) {
                    return d(n) ? C(t.slide, n) : y(g(n), t.index);
                  },
            );
          }
          return {
            mount: function () {
              (b(), u(wn, w), u(wn, b));
            },
            destroy: w,
            update: function () {
              k(function (n) {
                n.update();
              });
            },
            register: L,
            get: P,
            getIn: function (n) {
              var e = t.Controller,
                o = e.toIndex(n),
                r = e.hasFocus() ? 1 : i.perPage;
              return A(function (n) {
                return on(n.index, o, o + r - 1);
              });
            },
            getAt: function (n) {
              return A(n)[0];
            },
            add: function (n, t) {
              (m(n, function (n) {
                if ((d(n) && (n = G(n)), h(n))) {
                  var e = f[t];
                  (e ? x(n, e) : S(v, n),
                    E(n, i.classes.slide),
                    (r = n),
                    (u = o(c, Sn)),
                    (s = q(r, 'img')),
                    (l = s.length)
                      ? s.forEach(function (n) {
                          a(n, 'load error', function () {
                            --l || u();
                          });
                        })
                      : u());
                }
                var r, u, s, l;
              }),
                c(wn));
            },
            remove: function (n) {
              (X(
                A(n).map(function (n) {
                  return n.slide;
                }),
              ),
                c(wn));
            },
            forEach: k,
            filter: A,
            style: function (n, t, e) {
              k(function (i) {
                i.style(n, t, e);
              });
            },
            getLength: function (n) {
              return n ? f.length : p.length;
            },
            isEnough: function () {
              return p.length > i.perPage;
            },
          };
        },
        Layout: function (n, t, e) {
          var i,
            r,
            u,
            c = In(n),
            a = c.on,
            f = c.bind,
            l = c.emit,
            d = t.Slides,
            v = t.Direction.resolve,
            p = t.Elements,
            h = p.root,
            g = p.track,
            m = p.list,
            y = d.getAt,
            b = d.style;
          function E() {
            h.classList.contains('extend') ||
              ((i = e.direction === Gn),
              I(h, 'maxWidth', K(e.width)),
              I(g, v('paddingLeft'), x(!1)),
              I(g, v('paddingRight'), x(!0)),
              S(!0));
          }
          function S(n) {
            if (!h.classList.contains('extend')) {
              var t = W(h);
              (n || r.width !== t.width || r.height !== t.height) &&
                (I(
                  g,
                  'height',
                  (function () {
                    var n = '';
                    i &&
                      (n =
                        'calc(' +
                        (n = C()) +
                        ' - ' +
                        x(!1) +
                        ' - ' +
                        x(!0) +
                        ')');
                    return n;
                  })(),
                ),
                b(v('marginRight'), K(e.gap)),
                b(
                  'width',
                  e.autoWidth ? null : K(e.fixedWidth) || (i ? '' : L()),
                ),
                b(
                  'height',
                  K(e.fixedHeight) || (i ? (e.autoHeight ? null : L()) : C()),
                  !0,
                ),
                (r = t),
                l(xn),
                u !== (u = D()) && (w(h, Mt, u), l('overflow', u)));
            }
          }
          function x(n) {
            var t = e.padding,
              i = v(n ? 'right' : 'left');
            return (t && K(t[i] || (s(t) ? 0 : t))) || '0px';
          }
          function C() {
            return K(e.height || W(m).width * e.heightRatio);
          }
          function L() {
            var n = K(e.gap);
            return (
              'calc((100%' +
              (n && ' + ' + n) +
              ')/' +
              (e.perPage || 1) +
              (n && ' - ' + n) +
              ')'
            );
          }
          function P() {
            return W(m)[v('width')];
          }
          function k(n, t) {
            var e = y(n || 0);
            return e ? W(e.slide)[v('width')] + (t ? 0 : _()) : 0;
          }
          function A(n, t) {
            var e = y(n);
            if (e) {
              var i = W(e.slide)[v('right')],
                o = W(m)[v('left')];
              return tn(i - o) + (t ? 0 : _());
            }
            return 0;
          }
          function M(t) {
            return A(n.length - 1) - A(0) + k(0, t);
          }
          function _() {
            var n = y(0);
            return (n && parseFloat(I(n.slide, v('marginRight')))) || 0;
          }
          function D() {
            return n.is(Ft) || M(!0) > P();
          }
          return {
            mount: function () {
              var n, t, e;
              (E(),
                f(
                  window,
                  'resize load',
                  ((n = o(l, Sn)),
                  (e = Nn(t || 0, n, null, 1)),
                  function () {
                    e.isPaused() && e.start();
                  }),
                ),
                a([En, wn], E),
                a(Sn, S));
            },
            resize: S,
            listSize: P,
            slideSize: k,
            sliderSize: M,
            totalSize: A,
            getPadding: function (n) {
              return (
                parseFloat(I(g, v('padding' + (n ? 'Right' : 'Left')))) || 0
              );
            },
            isOverflow: D,
          };
        },
        Clones: function (n, t, i) {
          var o,
            r = In(n),
            u = r.on,
            c = t.Elements,
            a = t.Slides,
            s = t.Direction.resolve,
            f = [];
          function l() {
            (u(wn, d),
              u([En, Sn], h),
              (o = g()) &&
                (!(function (t) {
                  var e = a.get().slice(),
                    o = e.length;
                  if (o) {
                    for (; e.length < t; ) b(e, e);
                    b(e.slice(-t), e.slice(0, t)).forEach(function (r, u) {
                      var s = u < t,
                        l = (function (t, e) {
                          var o = t.cloneNode(!0);
                          return (
                            E(o, i.classes.clone),
                            (o.id = n.root.id + '-clone' + an(e + 1)),
                            o
                          );
                        })(r.slide, u);
                      (s ? x(l, e[0].slide) : S(c.list, l),
                        b(f, l),
                        a.register(l, u - t + (s ? 0 : o), r.index));
                    });
                  }
                })(o),
                t.Layout.resize(!0)));
          }
          function d() {
            (p(), l());
          }
          function p() {
            (X(f), e(f), r.destroy());
          }
          function h() {
            var n = g();
            o !== n && (o < n || !n) && r.emit(wn);
          }
          function g() {
            var e = i.clones;
            if (n.is(Nt)) {
              if (v(e)) {
                var o = i[s('fixedWidth')] && t.Layout.slideSize(0);
                e =
                  (o && nn(W(c.track)[s('width')] / o)) ||
                  (i[s('autoWidth')] && n.length) ||
                  2 * i.perPage;
              }
            } else e = 0;
            return e;
          }
          return { mount: l, destroy: p };
        },
        Move: function (n, t, e) {
          var i,
            o = In(n),
            r = o.on,
            u = o.emit,
            c = n.state.set,
            a = t.Layout,
            s = a.slideSize,
            f = a.getPadding,
            l = a.totalSize,
            d = a.listSize,
            p = a.sliderSize,
            h = t.Direction,
            g = h.resolve,
            m = h.orient,
            y = t.Elements,
            b = y.list,
            w = y.track;
          function E() {
            t.Controller.isBusy() ||
              (t.Scroll.cancel(), S(n.index), t.Slides.update());
          }
          function S(n) {
            x(k(n, !0));
          }
          function x(e, i) {
            if (
              !document.body.classList.contains('zoom-active') &&
              !t.Elements.root.classList.contains('extend') &&
              !n.is(Ft)
            ) {
              var o = i
                ? e
                : (function (e) {
                    if (n.is(Nt)) {
                      var i = P(e),
                        o = i > t.Controller.getEnd();
                      (i < 0 || o) && (e = C(e, o));
                    }
                    return e;
                  })(e);
              (I(b, 'transform', 'translate' + g('X') + '(' + o + 'px)'),
                e !== o && u(On));
            }
          }
          function C(n, t) {
            var e = n - M(t),
              i = p();
            return (n -= m(i * (nn(tn(e) / i) || 1)) * (t ? 1 : -1));
          }
          function L() {
            (x(A(), !0), i.cancel());
          }
          function P(n) {
            for (
              var e = t.Slides.get(), i = 0, o = 1 / 0, r = 0;
              r < e.length;
              r++
            ) {
              var u = e[r].index,
                c = tn(k(u, !0) - n);
              if (!(c <= o)) break;
              ((o = c), (i = u));
            }
            return i;
          }
          function k(t, i) {
            var o = m(
              l(t - 1) -
                (function (n) {
                  var t = e.focus;
                  return 'center' === t ? (d() - s(n, !0)) / 2 : +t * s(n) || 0;
                })(t),
            );
            return i
              ? (function (t) {
                  e.trimSpace && n.is(It) && (t = rn(t, 0, m(p(!0) - d())));
                  return t;
                })(o)
              : o;
          }
          function A() {
            var n = g('left');
            return W(b)[n] - W(w)[n] + m(f(!1));
          }
          function M(n) {
            return k(n ? t.Controller.getEnd() : 0, !!e.trimSpace);
          }
          return {
            mount: function () {
              ((i = t.Transition), r([ln, xn, En, wn], E));
            },
            move: function (n, t, e, o) {
              var r, a;
              (n !== t &&
                ((r = n > e),
                (a = m(C(A(), r))),
                r ? a >= 0 : a <= b[g('scrollWidth')] - W(w)[g('width')]) &&
                (L(), x(C(A(), n > e), !0)),
                c(4),
                u(vn, t, e, n),
                i.start(t, function () {
                  (c(3), u(pn, t, e, n), o && o());
                }));
            },
            jump: S,
            translate: x,
            shift: C,
            cancel: L,
            toIndex: P,
            toPosition: k,
            getPosition: A,
            getLimit: M,
            exceededLimit: function (n, t) {
              t = v(t) ? A() : t;
              var e = !0 !== n && m(t) < m(M(!1)),
                i = !1 !== n && m(t) > m(M(!0));
              return e || i;
            },
            reposition: E,
          };
        },
        Controller: function (n, t, e) {
          var i,
            r,
            u,
            c,
            a = In(n),
            s = a.on,
            f = a.emit,
            l = t.Move,
            p = l.getPosition,
            h = l.getLimit,
            g = l.toPosition,
            m = t.Slides,
            y = m.isEnough,
            b = m.getLength,
            w = e.omitEnd,
            E = n.is(Nt),
            S = n.is(It),
            x = o(M, !1),
            C = o(M, !0),
            L = e.start || 0,
            P = L;
          function k() {
            ((r = b(!0)), (u = e.perMove), (c = e.perPage), (i = z()));
            var n = rn(L, 0, w ? i : r - 1);
            n !== L && ((L = n), l.reposition());
          }
          function A() {
            i !== z() && f(Tn);
          }
          function M(n, t) {
            var e = u || (N() ? 1 : c),
              o = _(L + e * (n ? -1 : 1), L, !(u || N()));
            return -1 === o && S && !en(p(), h(!n), 1)
              ? n
                ? 0
                : i
              : t
                ? o
                : D(o);
          }
          function _(t, o, a) {
            if (y() || N()) {
              var s = (function (t) {
                if (S && 'move' === e.trimSpace && t !== L)
                  for (
                    var i = p();
                    i === g(t, !0) && on(t, 0, n.length - 1, !e.rewind);

                  )
                    t < L ? --t : ++t;
                return t;
              })(t);
              (s !== t && ((o = t), (t = s), (a = !1)),
                t < 0 || t > i
                  ? (t =
                      u || (!on(0, t, o, !0) && !on(i, o, t, !0))
                        ? E
                          ? a
                            ? t < 0
                              ? -(r % c || c)
                              : r
                            : t
                          : e.rewind
                            ? t < 0
                              ? i
                              : 0
                            : -1
                        : O(T(t)))
                  : a && t !== o && (t = O(T(o) + (t < o ? -1 : 1))));
            } else t = -1;
            return t;
          }
          function D(n) {
            return E ? (n + r) % r || 0 : n;
          }
          function z() {
            for (var n = r - (N() || (E && u) ? 1 : c); w && n-- > 0; )
              if (g(r - 1, !0) !== g(n, !0)) {
                n++;
                break;
              }
            return rn(n, 0, r - 1);
          }
          function O(n) {
            return rn(N() ? n : c * n, 0, i);
          }
          function T(n) {
            return N() ? Q(n, i) : $((n >= i ? r - 1 : n) / c);
          }
          function I(n) {
            n !== L && ((P = L), (L = n));
          }
          function N() {
            return !v(e.focus) || e.isNavigation;
          }
          function F() {
            return n.state.is([4, 5]) && !!e.waitForTransition;
          }
          return {
            mount: function () {
              (k(), s([En, wn, Tn], k), s(xn, A));
            },
            go: function (n, t, e) {
              if (!F()) {
                var o = (function (n) {
                    var t = L;
                    if (d(n)) {
                      var e = n.match(/([+\-<>])(\d+)?/) || [],
                        o = e[1],
                        r = e[2];
                      '+' === o || '-' === o
                        ? (t = _(L + +('' + o + (+r || 1)), L))
                        : '>' === o
                          ? (t = r ? O(+r) : x(!0))
                          : '<' === o && (t = C(!0));
                    } else t = E ? n : rn(n, 0, i);
                    return t;
                  })(n),
                  r = D(o);
                r > -1 && (t || r !== L) && (I(r), l.move(o, r, P, e));
              }
            },
            scroll: function (n, e, o, r) {
              t.Scroll.scroll(n, e, o, function () {
                var n = D(l.toIndex(p()));
                (I(w ? Q(n, i) : n), r && r());
              });
            },
            getNext: x,
            getPrev: C,
            getAdjacent: M,
            getEnd: z,
            setIndex: I,
            getIndex: function (n) {
              return n ? P : L;
            },
            toIndex: O,
            toPage: T,
            toDest: function (n) {
              var t = l.toIndex(n);
              return S ? rn(t, 0, i) : t;
            },
            hasFocus: N,
            isBusy: F,
          };
        },
        Arrows: function (n, t, e) {
          var i,
            r,
            u = In(n),
            c = u.on,
            a = u.bind,
            s = u.emit,
            f = e.classes,
            l = e.i18n,
            d = t.Elements,
            v = t.Controller,
            p = d.arrows,
            h = d.track,
            g = p,
            m = d.prev,
            y = d.next,
            b = {};
          function w() {
            (!(function () {
              var n = e.arrows;
              !n ||
                (m && y) ||
                ((g = p || T('div', f.arrows)),
                (m = k(!0)),
                (y = k(!1)),
                (i = !0),
                S(g, [m, y]),
                e.afterTrace ? !p && h.parentNode.append(g) : !p && x(g, h));
              m &&
                y &&
                (M(b, { prev: m, next: y }),
                N(g, n ? '' : 'none'),
                E(g, (r = vt + '-' + e.direction)),
                n &&
                  (c([ln, pn, wn, Ln, Tn], A),
                  a(y, 'click', o(P, '>')),
                  a(m, 'click', o(P, '<')),
                  A(),
                  O([m, y], Un, h.id),
                  s(kn, m, y)));
            })(),
              c(En, C));
          }
          function C() {
            (L(), w());
          }
          function L() {
            (u.destroy(),
              Y(g, r),
              i ? (X(p ? [m, y] : g), (m = y = null)) : z([m, y], ot));
          }
          function P(n) {
            v.go(n, !0);
          }
          function k(n) {
            return G(
              '<button class="' +
                f.arrow +
                ' ' +
                (n ? f.prev : f.next) +
                '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" focusable="false"><path fill="currentColor" d="M51.3,61.6c-0.7,0-1.3-0.3-1.8-0.7c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.3-1.3,0.7-1.8l6-6H39.4 c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5h16.1l-6-6c-1-1-1-2.6,0-3.6c0.5-0.5,1.1-0.7,1.8-0.7c0.7,0,1.3,0.3,1.8,0.7l8.8,8.9 c0.8,0.8,1.3,2,1.3,3.2c0,1.2-0.5,2.4-1.4,3.2l-8.8,8.8C52.6,61.3,52,61.6,51.3,61.6C51.3,61.6,51.3,61.6,51.3,61.6z"/>',
            );
          }
          function A() {
            if (m && y) {
              var t = n.index,
                e = v.getPrev(),
                i = v.getNext(),
                o = e > -1 && t < e ? l.last : l.prev,
                r = i > -1 && t > i ? l.first : l.next;
              ((m.disabled = e < 0),
                (y.disabled = i < 0),
                O(m, Jn, o),
                O(y, Jn, r),
                s('arrows:updated', m, y, e, i));
            }
          }
          return { arrows: b, mount: w, destroy: L, update: A };
        },
        Autoplay: function (n, t, e) {
          var i,
            o,
            r = In(n),
            u = r.on,
            c = r.bind,
            a = r.emit,
            s = Nn(e.interval, n.go.bind(n, '>'), function (n) {
              var t = l.bar;
              (t && I(t, 'width', 100 * n + '%'), a('autoplay:playing', n));
            }),
            f = s.isPaused,
            l = t.Elements,
            d = t.Elements,
            v = d.root,
            p = d.toggle,
            h = e.autoplay,
            g = 'pause' === h;
          function m() {
            f() &&
              t.Slides.isEnough() &&
              (s.start(!e.resetProgress), (o = i = g = !1), E(), a(Mn));
          }
          function y(n) {
            (void 0 === n && (n = !0),
              (g = !!n),
              E(),
              f() || (s.pause(), a(_n)));
          }
          function b() {
            g || (i || o ? y(!1) : m());
          }
          function E() {
            p && (w(p, xt, !g), O(p, Jn, e.i18n[g ? 'play' : 'pause']));
          }
          function S(n) {
            var i = t.Slides.getAt(n);
            s.set((i && +j(i.slide, Rt)) || e.interval);
          }
          return {
            mount: function () {
              h &&
                (!(function () {
                  e.pauseOnHover &&
                    c(v, 'mouseenter mouseleave', function (n) {
                      ((i = 'mouseenter' === n.type), b());
                    });
                  e.pauseOnFocus &&
                    c(v, 'focusin focusout', function (n) {
                      ((o = 'focusin' === n.type), b());
                    });
                  p &&
                    c(p, 'click', function () {
                      g ? m() : y(!0);
                    });
                  (u([vn, Cn, wn], s.rewind), u(vn, S));
                })(),
                p && O(p, Un, l.track.id),
                g || m(),
                E());
            },
            destroy: s.cancel,
            play: m,
            pause: y,
            isPaused: f,
          };
        },
        Cover: function (n, t, e) {
          var i = In(n).on;
          function r(n) {
            t.Slides.forEach(function (t) {
              var e = P(t.container || t.slide, 'img');
              e && e.src && u(n, e, t);
            });
          }
          function u(n, t, e) {
            (e.style('background-image', n ? 'url("' + t.src + '")' : '', !0),
              N(t, n ? 'none' : ''));
          }
          return {
            mount: function () {
              e.cover && (i(Dn, o(u, !0)), i([ln, En, wn], o(r, !0)));
            },
            destroy: o(r, !1),
          };
        },
        Scroll: function (n, t, e) {
          var i,
            r,
            u = In(n),
            c = u.on,
            a = u.emit,
            s = n.state.set,
            f = t.Move,
            l = f.getPosition,
            d = f.getLimit,
            v = f.exceededLimit,
            p = f.translate,
            h = n.is(It),
            g = 1;
          function m(n, e, u, c, d) {
            var p = l();
            if ((w(), u && (!h || !v()))) {
              var m = t.Layout.sliderSize(),
                E = un(n) * m * $(tn(n) / m) || 0;
              n = f.toPosition(t.Controller.toDest(n % m)) + E;
            }
            var S = en(p, n, 1);
            ((g = 1),
              (e = S ? 0 : e || Z(tn(n - p) / 1.5, 800)),
              (r = c),
              (i = Nn(e, y, o(b, p, n, d), 1)),
              s(5),
              a(Cn),
              i.start());
          }
          function y() {
            (s(3), r && r(), a(Ln));
          }
          function b(n, t, i, o) {
            var u,
              c,
              a = l(),
              s =
                (n +
                  (t - n) *
                    ((u = o),
                    (c = e.easingFunc) ? c(u) : 1 - Math.pow(1 - u, 4)) -
                  a) *
                g;
            (p(a + s),
              h &&
                !i &&
                v() &&
                ((g *= 0.6), tn(s) < 10 && m(d(v(!0)), 600, !1, r, !0)));
          }
          function w() {
            i && i.cancel();
          }
          function E() {
            i && !i.isPaused() && (w(), y());
          }
          return {
            mount: function () {
              (c(vn, w), c([En, wn], E));
            },
            destroy: w,
            scroll: m,
            cancel: E,
          };
        },
        Drag: function (n, t, e) {
          var i,
            o,
            r,
            c,
            a,
            f,
            l,
            d,
            v = In(n),
            p = v.on,
            h = v.emit,
            g = v.bind,
            m = v.unbind,
            y = n.state,
            b = t.Move,
            w = t.Scroll,
            E = t.Controller,
            S = t.Elements.track,
            x = t.Media.reduce,
            L = t.Direction,
            P = L.resolve,
            k = L.orient,
            A = b.getPosition,
            M = b.exceededLimit,
            _ = !1;
          function D() {
            var n = e.drag;
            (G(!n), (c = 'free' === n));
          }
          function z(n) {
            var t, i;
            if (!S.classList.contains('disabled') && ((f = !1), !l)) {
              var o = X(n);
              ((t = n.target),
                (i = e.noDrag),
                C(t, '.' + yt + ', .' + pt) ||
                  (i && C(t, i)) ||
                  (!o && n.button) ||
                  (E.isBusy()
                    ? H(n, !0)
                    : ((d = o ? S : window),
                      (a = y.is([4, 5])),
                      (r = null),
                      g(d, Ot, O, Wt),
                      g(d, Tt, T, Wt),
                      b.cancel(),
                      w.cancel(),
                      N(n))));
            }
          }
          function O(t) {
            if ((y.is(6) || (y.set(6), h('drag')), t.cancelable))
              if (a) {
                b.translate(i + F(t) / (_ && n.is(It) ? 5 : 1));
                var o = j(t) > 200,
                  r = _ !== (_ = M());
                ((o || r) && N(t), (f = !0), h('dragging'), H(t));
              } else
                (function (n) {
                  return tn(F(n)) > tn(F(n, !0));
                })(t) &&
                  ((a = (function (n) {
                    var t = e.dragMinThreshold,
                      i = s(t),
                      o = (i && t.mouse) || 0,
                      r = (i ? t.touch : +t) || 10;
                    return tn(F(n)) > (X(n) ? r : o);
                  })(t)),
                  H(t));
          }
          function T(i) {
            (y.is(6) && (y.set(3), h('dragged')),
              a &&
                (!(function (i) {
                  var o = (function (t) {
                      if (n.is(Nt) || !_) {
                        var e = j(t);
                        if (e && e < 200) return F(t) / e;
                      }
                      return 0;
                    })(i),
                    r = (function (n) {
                      return (
                        A() +
                        un(n) *
                          Q(
                            tn(n) * (e.flickPower || 600),
                            c
                              ? 1 / 0
                              : t.Layout.listSize() * (e.flickMaxPages || 1),
                          )
                      );
                    })(o),
                    u = e.rewind && e.rewindByDrag;
                  (x(!1),
                    c
                      ? E.scroll(r, 0, e.snap)
                      : n.is(Ft)
                        ? E.go(k(un(o)) < 0 ? (u ? '<' : '-') : u ? '>' : '+')
                        : n.is(It) && _ && u
                          ? E.go(M(!0) ? '>' : '<')
                          : E.go(E.toDest(r), !0));
                  x(!0);
                })(i),
                H(i)),
              m(d, Ot, O),
              m(d, Tt, T),
              (a = !1));
          }
          function I(n) {
            !l && f && H(n, !0);
          }
          function N(n) {
            ((r = o), (o = n), (i = A()));
          }
          function F(n, t) {
            return W(n, t) - W(R(n), t);
          }
          function j(n) {
            return U(n) - U(R(n));
          }
          function R(n) {
            return (o === n && r) || o;
          }
          function W(n, t) {
            return (X(n) ? n.changedTouches[0] : n)['page' + P(t ? 'Y' : 'X')];
          }
          function X(n) {
            return 'undefined' != typeof TouchEvent && n instanceof TouchEvent;
          }
          function G(n) {
            l = n;
          }
          return {
            mount: function () {
              (g(S, Ot, u, Wt),
                g(S, Tt, u, Wt),
                g(S, zt, z, Wt),
                g(S, 'click', I, { capture: !0 }),
                g(S, 'dragstart', H),
                p([ln, En], D));
            },
            disable: G,
            isDragging: function () {
              return a;
            },
          };
        },
        Keyboard: function (n, t, e) {
          var i,
            o,
            u = In(n),
            c = u.on,
            a = u.bind,
            s = u.unbind,
            f = n.root,
            l = t.Direction.resolve;
          function d() {
            var n = e.keyboard;
            n && ((i = 'global' === n ? window : f), a(i, Ht, h));
          }
          function v() {
            s(i, Ht);
          }
          function p() {
            var n = o;
            ((o = !0),
              r(function () {
                o = n;
              }));
          }
          function h(t) {
            if (!o) {
              var e = Gt(t);
              e === l(jn) ? n.go('<') : e === l(Rn) && n.go('>');
            }
          }
          return {
            mount: function () {
              (d(), c(En, v), c(En, d), c(vn, p));
            },
            destroy: v,
            disable: function (n) {
              o = n;
            },
          };
        },
        LazyLoad: function (n, t, i) {
          var r = In(n),
            u = r.on,
            c = r.off,
            a = r.bind,
            s = r.emit,
            f = 'sequential' === i.lazyLoad,
            l = [pn, Ln],
            d = [];
          function v() {
            (e(d),
              t.Slides.forEach(function (n) {
                q(n.slide, Yt).forEach(function (t) {
                  var e = j(t, Bt),
                    o = j(t, qt);
                  if (e !== t.src || o !== t.srcset) {
                    var r = i.classes.spinner,
                      u = t.parentElement,
                      c = P(u, '.' + r) || T('span', r, u);
                    (d.push([t, n, c]), t.src || N(t, 'none'));
                  }
                });
              }),
              f ? m() : (c(l), u(l, p), p()));
          }
          function p() {
            (d = d.filter(function (t) {
              var e = i.perPage * ((i.preloadPages || 1) + 1) - 1;
              return !t[1].isWithin(n.index, e) || h(t);
            })).length || c(l);
          }
          function h(n) {
            var t = n[0];
            (E(n[1].slide, kt),
              a(t, 'load error', o(g, n)),
              O(t, 'src', j(t, Bt)),
              O(t, 'srcset', j(t, qt)),
              z(t, Bt),
              z(t, qt));
          }
          function g(n, t) {
            var e = n[0],
              i = n[1];
            (Y(i.slide, kt),
              'error' !== t.type && (X(n[2]), N(e, ''), s(Dn, e, i), s(Sn)),
              f && m());
          }
          function m() {
            d.length && h(d.shift());
          }
          return {
            mount: function () {
              i.lazyLoad && (v(), u(wn, v));
            },
            destroy: o(e, d),
            check: p,
          };
        },
        Pagination: function (n, t, r) {
          var u,
            c,
            a = In(n),
            s = a.on,
            f = a.emit,
            l = a.bind,
            d = t.Slides,
            v = t.Elements,
            p = t.Controller,
            h = p.hasFocus,
            g = p.getIndex,
            m = p.go,
            y = t.Direction.resolve,
            b = v.pagination,
            w = [];
          function S() {
            (u && (X(b ? i(u.children) : u), Y(u, c), e(w), (u = null)),
              a.destroy());
          }
          function x(n) {
            m('>' + n, !0);
          }
          function C(n, t) {
            var e = w.length,
              i = Gt(t),
              o = L(),
              r = -1;
            i === y(Rn, !1, o)
              ? (r = ++n % e)
              : i === y(jn, !1, o)
                ? (r = (--n + e) % e)
                : 'Home' === i
                  ? (r = 0)
                  : 'End' === i && (r = e - 1);
            var u = w[r];
            u && (F(u.button), m('>' + r), H(t, !0));
          }
          function L() {
            return r.paginationDirection || r.direction;
          }
          function P(n) {
            return w[p.toPage(n)];
          }
          function k() {
            var n = P(g(!0)),
              t = P(g());
            if (n) {
              var e = n.button;
              (Y(e, xt), z(e, Vn), O(e, qn, -1));
            }
            if (t) {
              var i = t.button;
              (E(i, xt), O(i, Vn, !0), O(i, qn, ''));
            }
            f('pagination:updated', { list: u, items: w }, n, t);
          }
          return {
            items: w,
            mount: function t() {
              (S(), s([En, wn, Tn], t));
              var e = r.pagination;
              (b && N(b, e ? '' : 'none'),
                e &&
                  (s([vn, Cn, Ln], k),
                  (function () {
                    var t = n.length,
                      e = r.classes,
                      i = r.i18n,
                      a = r.perPage,
                      s = h() ? p.getEnd() + 1 : nn(t / a);
                    (E(
                      (u = b || T('ul', e.pagination, v.track.parentElement)),
                      (c = mt + '-' + L()),
                    ),
                      O(u, Bn, 'tablist'),
                      O(u, Jn, i.select),
                      O(u, $n, L() === Gn ? 'vertical' : ''));
                    for (var f = 0; f < s; f++) {
                      var g = T('li', null, u),
                        m = T('button', { class: e.page, type: 'button' }, g),
                        y = d.getIn(f).map(function (n) {
                          return n.slide.id;
                        }),
                        S = !h() && a > 1 ? i.pageX : i.slideX;
                      (l(m, 'click', o(x, f)),
                        r.paginationKeyboard && l(m, 'keydown', o(C, f)),
                        O(g, Bn, 'presentation'),
                        O(m, Bn, 'tab'),
                        O(m, Un, y.join(' ')),
                        O(m, Jn, cn(S, f + 1)),
                        O(m, qn, -1),
                        w.push({ li: g, button: m, page: f }));
                    }
                  })(),
                  k(),
                  f('pagination:mounted', { list: u, items: w }, P(n.index))));
            },
            destroy: S,
            getAt: P,
            update: k,
          };
        },
        Sync: function (n, t, i) {
          var r = i.isNavigation,
            u = i.slideFocus,
            c = [];
          function a() {
            var t, e;
            (n.splides.forEach(function (t) {
              t.isParent || (f(n, t.splide), f(t.splide, n));
            }),
              r &&
                ((t = In(n)),
                (e = t.on)(hn, d),
                e(zn, p),
                e([ln, En], l),
                c.push(t),
                t.emit(An, n.splides)));
          }
          function s() {
            (c.forEach(function (n) {
              n.destroy();
            }),
              e(c));
          }
          function f(n, t) {
            var e = In(n);
            (e.on(vn, function (n, e, i) {
              t.go(t.is(Nt) ? i : n);
            }),
              c.push(e));
          }
          function l() {
            O(t.Elements.list, $n, i.direction === Gn ? 'vertical' : '');
          }
          function d(t) {
            n.go(t.index);
          }
          function p(n, t) {
            y(Ut, Gt(t)) && (d(n), H(t));
          }
          return {
            setup: o(t.Media.set, { slideFocus: v(u) ? r : u }, !0),
            mount: a,
            destroy: s,
            remount: function () {
              (s(), a());
            },
          };
        },
        Wheel: function (n, t, e) {
          var i = In(n).bind,
            o = 0;
          function r(i) {
            if (i.cancelable) {
              if (document.body.classList.contains('zoom-active')) return;
              var r = i.deltaY,
                u = r < 0,
                c = U(i),
                a = e.wheelMinThreshold || 0,
                s = e.wheelSleep || 0;
              (tn(r) > a && c - o > s && (n.go(u ? '<' : '>'), (o = c)),
                (function (i) {
                  return (
                    !e.releaseWheel ||
                    n.state.is(4) ||
                    -1 !== t.Controller.getAdjacent(i)
                  );
                })(u) && H(i));
            }
          }
          return {
            mount: function () {
              e.wheel && i(t.Elements.track, 'wheel', r, Wt);
            },
          };
        },
        Live: function (n, t, e) {
          var i = In(n).on,
            r = t.Elements.track,
            u = e.live && !e.isNavigation,
            c = T('span', Et),
            a = Nn(90, o(s, !1));
          function s(n) {
            (O(r, et, n), n ? (S(r, c), a.start()) : (X(c), a.cancel()));
          }
          function f(n) {
            u && O(r, tt, n ? 'off' : 'polite');
          }
          return {
            mount: function () {
              u &&
                (f(!t.Autoplay.isPaused()),
                O(r, it, !0),
                (c.textContent = '…'),
                i(Mn, o(f, !0)),
                i(_n, o(f, !1)),
                i([pn, Ln], o(s, !0)));
            },
            disable: f,
            destroy: function () {
              (z(r, [tt, it, et]), X(c));
            },
          };
        },
      }),
      Vt = {
        type: 'slide',
        role: 'region',
        speed: 400,
        perPage: 1,
        cloneStatus: !0,
        arrows: !0,
        pagination: !0,
        paginationKeyboard: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        drag: !0,
        direction: 'ltr',
        trimSpace: !0,
        focusableNodes: 'a, button, textarea, input, select, iframe',
        live: !0,
        classes: Dt,
        i18n: {
          prev: 'Previous slide',
          next: 'Next slide',
          first: 'Go to first slide',
          last: 'Go to last slide',
          slideX: 'Go to slide %s',
          pageX: 'Go to page %s',
          play: 'Start autoplay',
          pause: 'Pause autoplay',
          carousel: 'carousel',
          slide: 'slide',
          select: 'Select a slide to show',
          slideLabel: '%s of %s',
        },
        reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: 'pause' },
      };
    function Jt(n, t, e) {
      var i = t.Slides;
      function o() {
        i.forEach(function (n) {
          n.style('transform', 'translateX(-' + 100 * n.index + '%)');
        });
      }
      return {
        mount: function () {
          In(n).on([ln, wn], o);
        },
        start: function (n, t) {
          (i.style('transition', 'opacity ' + e.speed + 'ms ' + e.easing),
            r(t));
        },
        cancel: u,
      };
    }
    function Qt(n, t, e) {
      var i,
        r = t.Move,
        u = t.Controller,
        c = t.Scroll,
        a = t.Elements.list,
        s = o(I, a, 'transition');
      function f() {
        (s(''), c.cancel());
      }
      return {
        mount: function () {
          In(n).bind(a, 'transitionend', function (n) {
            n.target === a && i && (f(), i());
          });
        },
        start: function (t, o) {
          var a = r.toPosition(t, !0),
            f = r.getPosition(),
            l = (function (t) {
              var i = e.rewindSpeed;
              if (n.is(It) && i) {
                var o = u.getIndex(!0),
                  r = u.getEnd();
                if ((0 === o && t >= r) || (o >= r && 0 === t)) return i;
              }
              return e.speed;
            })(t);
          tn(a - f) >= 1 && l >= 1
            ? e.useScroll
              ? c.scroll(a, l, !1, o)
              : (s('transform ' + l + 'ms ' + e.easing),
                r.translate(a, !0),
                (i = o))
            : (r.jump(t), o());
        },
        cancel: f,
      };
    }
    var Zt = (function () {
        function n(t, e) {
          var i;
          ((this.event = In()),
            (this.Components = {}),
            (this.state =
              ((i = 1),
              {
                set: function (n) {
                  i = n;
                },
                is: function (n) {
                  return y(g(n), i);
                },
              })),
            (this.splides = []),
            (this._o = {}),
            (this._E = {}));
          var o = d(t) ? B(document, t) : t;
          ((this.root = o),
            (e = _(
              { label: j(o, Jn) || '', labelledby: j(o, Qn) || '' },
              Vt,
              n.defaults,
              e || {},
            )));
          try {
            _(e, JSON.parse(j(o, J)));
          } catch (n) {}
          this._o = Object.create(_({}, e));
        }
        var t = n.prototype;
        return (
          (t.mount = function (n, t) {
            var e = this,
              i = this.state,
              o = this.Components;
            return (
              i.is([1, 7]),
              i.set(1),
              (this._C = o),
              (this._T = t || this._T || (this.is(Ft) ? Jt : Qt)),
              (this._E = n || this._E),
              A(M({}, Kt, this._E, { Transition: this._T }), function (n, t) {
                var i = n(e, o, e._o);
                ((o[t] = i), i.setup && i.setup());
              }),
              A(o, function (n) {
                n.mount && n.mount();
              }),
              this.emit(ln),
              E(this.root, St),
              i.set(3),
              this.emit(dn),
              this
            );
          }),
          (t.sync = function (n) {
            return (
              this.splides.push({ splide: n }),
              n.splides.push({ splide: this, isParent: !0 }),
              this.state.is(3) &&
                (this._C.Sync.remount(), n.Components.Sync.remount()),
              this
            );
          }),
          (t.go = function (n) {
            return (this._C.Controller.go(n), this);
          }),
          (t.on = function (n, t) {
            return (this.event.on(n, t), this);
          }),
          (t.off = function (n) {
            return (this.event.off(n), this);
          }),
          (t.emit = function (n) {
            var t;
            return (
              (t = this.event).emit.apply(t, [n].concat(i(arguments, 1))),
              this
            );
          }),
          (t.add = function (n, t) {
            return (this._C.Slides.add(n, t), this);
          }),
          (t.remove = function (n) {
            return (this._C.Slides.remove(n), this);
          }),
          (t.is = function (n) {
            return this._o.type === n;
          }),
          (t.refresh = function () {
            return (this.emit(wn), this);
          }),
          (t.destroy = function (n) {
            void 0 === n && (n = !0);
            var t = this.event,
              i = this.state;
            return (
              i.is(1)
                ? In(this).on(dn, this.destroy.bind(this, n))
                : (A(
                    this._C,
                    function (t) {
                      t.destroy && t.destroy(n);
                    },
                    !0,
                  ),
                  t.emit(Pn),
                  t.destroy(),
                  n && e(this.splides),
                  i.set(7)),
              this
            );
          }),
          CreateClass(n, [
            {
              key: 'options',
              get: function () {
                return this._o;
              },
              set: function (n) {
                this._C.Media.set(n, !0, !0);
              },
            },
            {
              key: 'length',
              get: function () {
                return this._C.Slides.getLength(!0);
              },
            },
            {
              key: 'index',
              get: function () {
                return this._C.Controller.getIndex();
              },
            },
          ]),
          n
        );
      })(),
      $t = Zt;
    return (($t.defaults = {}), ($t.STATES = t), $t);
  }));

//# sourceMappingURL=slide.js.map

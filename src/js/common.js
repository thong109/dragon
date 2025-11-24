!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (t) {
  "use strict";
  function e(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  function r(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  var i,
    n,
    s,
    a,
    o,
    u,
    h,
    f,
    l,
    c,
    p,
    _,
    d,
    m,
    g,
    v,
    y,
    T = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    x = { duration: 0.5, overwrite: !1, delay: 0 },
    w = 1e8,
    b = 1e-8,
    O = 2 * Math.PI,
    M = O / 4,
    k = 0,
    A = Math.sqrt,
    C = Math.cos,
    D = Math.sin,
    P = function (t) {
      return "string" == typeof t;
    },
    S = function (t) {
      return "function" == typeof t;
    },
    E = function (t) {
      return "number" == typeof t;
    },
    z = function (t) {
      return void 0 === t;
    },
    R = function (t) {
      return "object" == typeof t;
    },
    F = function (t) {
      return !1 !== t;
    },
    B = function () {
      return "undefined" != typeof window;
    },
    L = function (t) {
      return S(t) || P(t);
    },
    I =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    Y = Array.isArray,
    N = /(?:-?\.?\d|\.)+/gi,
    U = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    X = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    V = /[+-]=-?[.\d]+/,
    j = /[^,'"\[\]\s]+/gi,
    Q = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    G = {},
    W = {},
    H = function (t) {
      return (W = Ot(t, G)) && Mr;
    },
    Z = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    $ = function (t, e) {
      return !e && console.warn(t);
    },
    J = function (t, e) {
      return (t && (G[t] = e) && W && (W[t] = e)) || G;
    },
    K = function () {
      return 0;
    },
    tt = { suppressEvents: !0, isStart: !0, kill: !1 },
    et = { suppressEvents: !0, kill: !1 },
    rt = { suppressEvents: !0 },
    it = {},
    nt = [],
    st = {},
    at = {},
    ot = {},
    ut = 30,
    ht = [],
    ft = "",
    lt = function (t) {
      var e,
        r,
        i = t[0];
      if ((R(i) || S(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
        for (r = ht.length; r-- && !ht[r].targetTest(i); );
        e = ht[r];
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new Ye(t[r], e)))) ||
          t.splice(r, 1);
      return t;
    },
    ct = function (t) {
      return t._gsap || lt(re(t))[0]._gsap;
    },
    pt = function (t, e, r) {
      return (r = t[e]) && S(r)
        ? t[e]()
        : (z(r) && t.getAttribute && t.getAttribute(e)) || r;
    },
    _t = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    dt = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    mt = function (t) {
      return Math.round(1e7 * t) / 1e7 || 0;
    },
    gt = function (t, e) {
      var r = e.charAt(0),
        i = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
      );
    },
    vt = function (t, e) {
      for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
      return i < r;
    },
    yt = function () {
      var t,
        e,
        r = nt.length,
        i = nt.slice(0);
      for (st = {}, nt.length = 0, t = 0; t < r; t++)
        (e = i[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    Tt = function (t, e, r, i) {
      nt.length && !n && yt(),
        t.render(e, r, i || (n && e < 0 && (t._initted || t._startAt))),
        nt.length && !n && yt();
    },
    xt = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(j).length < 2
        ? e
        : P(t)
        ? t.trim()
        : t;
    },
    wt = function (t) {
      return t;
    },
    bt = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    },
    Ot = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Mt = function t(e, r) {
      for (var i in r)
        "__proto__" !== i &&
          "constructor" !== i &&
          "prototype" !== i &&
          (e[i] = R(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
      return e;
    },
    kt = function (t, e) {
      var r,
        i = {};
      for (r in t) r in e || (i[r] = t[r]);
      return i;
    },
    At = function (t) {
      var e,
        r = t.parent || a,
        i = t.keyframes
          ? ((e = Y(t.keyframes)),
            function (t, r) {
              for (var i in r)
                i in t ||
                  ("duration" === i && e) ||
                  "ease" === i ||
                  (t[i] = r[i]);
            })
          : bt;
      if (F(t.inherit))
        for (; r; ) i(t, r.vars.defaults), (r = r.parent || r._dp);
      return t;
    },
    Ct = function (t, e, r, i, n) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var s,
        a = t[i];
      if (n) for (s = e[n]; a && a[n] > s; ) a = a._prev;
      return (
        a
          ? ((e._next = a._next), (a._next = e))
          : ((e._next = t[r]), (t[r] = e)),
        e._next ? (e._next._prev = e) : (t[i] = e),
        (e._prev = a),
        (e.parent = e._dp = t),
        e
      );
    },
    Dt = function (t, e, r, i) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var n = e._prev,
        s = e._next;
      n ? (n._next = s) : t[r] === e && (t[r] = s),
        s ? (s._prev = n) : t[i] === e && (t[i] = n),
        (e._next = e._prev = e.parent = null);
    },
    Pt = function (t, e) {
      t.parent &&
        (!e || t.parent.autoRemoveChildren) &&
        t.parent.remove &&
        t.parent.remove(t),
        (t._act = 0);
    },
    St = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
      return t;
    },
    Et = function (t, e, r, i) {
      return (
        t._startAt &&
        (n
          ? t._startAt.revert(et)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(e, !0, i))
      );
    },
    zt = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    Rt = function (t) {
      return t._repeat ? Ft(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    Ft = function (t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    Bt = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    Lt = function (t) {
      return (t._end = mt(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || b) || 0)
      ));
    },
    It = function (t, e) {
      var r = t._dp;
      return (
        r &&
          r.smoothChildTiming &&
          t._ts &&
          ((t._start = mt(
            r._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          Lt(t),
          r._dirty || St(r, t)),
        t
      );
    },
    Yt = function (t, e) {
      var r;
      if (
        ((e._time ||
          (!e._dur && e._initted) ||
          (e._start < t._time && (e._dur || !e.add))) &&
          ((r = Bt(t.rawTime(), e)),
          (!e._dur || $t(0, e.totalDuration(), r) - e._tTime > b) &&
            e.render(r, !0)),
        St(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (r = t; r._dp; )
            r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        t._zTime = -1e-8;
      }
    },
    Nt = function (t, e, r, i) {
      return (
        e.parent && Pt(e),
        (e._start = mt(
          (E(r) ? r : r || t !== a ? Wt(t, r, e) : t._time) + e._delay
        )),
        (e._end = mt(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        Ct(t, e, "_first", "_last", t._sort ? "_start" : 0),
        Vt(e) || (t._recent = e),
        i || Yt(t, e),
        t._ts < 0 && It(t, t._tTime),
        t
      );
    },
    Ut = function (t, e) {
      return (
        (G.ScrollTrigger || Z("scrollTrigger", e)) &&
        G.ScrollTrigger.create(e, t)
      );
    },
    Xt = function (t, e, r, i, s) {
      return (
        Ge(t, e, s),
        t._initted
          ? !r &&
            t._pt &&
            !n &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            l !== ke.frame
            ? (nt.push(t), (t._lazy = [s, i]), 1)
            : void 0
          : 1
      );
    },
    qt = function t(e) {
      var r = e.parent;
      return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
    },
    Vt = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    jt = function (t, e, r, i) {
      var n = t._repeat,
        s = mt(e) || 0,
        a = t._tTime / t._tDur;
      return (
        a && !i && (t._time *= s / t._dur),
        (t._dur = s),
        (t._tDur = n ? (n < 0 ? 1e10 : mt(s * (n + 1) + t._rDelay * n)) : s),
        a > 0 && !i && It(t, (t._tTime = t._tDur * a)),
        t.parent && Lt(t),
        r || St(t.parent, t),
        t
      );
    },
    Qt = function (t) {
      return t instanceof Ue ? St(t) : jt(t, t._dur);
    },
    Gt = { _start: 0, endTime: K, totalDuration: K },
    Wt = function t(e, r, i) {
      var n,
        s,
        a,
        o = e.labels,
        u = e._recent || Gt,
        h = e.duration() >= w ? u.endTime(!1) : e._dur;
      return P(r) && (isNaN(r) || r in o)
        ? ((s = r.charAt(0)),
          (a = "%" === r.substr(-1)),
          (n = r.indexOf("=")),
          "<" === s || ">" === s
            ? (n >= 0 && (r = r.replace(/=/, "")),
              ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                (parseFloat(r.substr(1)) || 0) *
                  (a ? (n < 0 ? u : i).totalDuration() / 100 : 1))
            : n < 0
            ? (r in o || (o[r] = h), o[r])
            : ((s = parseFloat(r.charAt(n - 1) + r.substr(n + 1))),
              a && i && (s = (s / 100) * (Y(i) ? i[0] : i).totalDuration()),
              n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s))
        : null == r
        ? h
        : +r;
    },
    Ht = function (t, e, r) {
      var i,
        n,
        s = E(e[1]),
        a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
        o = e[a];
      if ((s && (o.duration = e[1]), (o.parent = r), t)) {
        for (i = o, n = r; n && !("immediateRender" in i); )
          (i = n.vars.defaults || {}), (n = F(n.vars.inherit) && n.parent);
        (o.immediateRender = F(i.immediateRender)),
          t < 2 ? (o.runBackwards = 1) : (o.startAt = e[a - 1]);
      }
      return new Je(e[0], o, e[a + 1]);
    },
    Zt = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    $t = function (t, e, r) {
      return r < t ? t : r > e ? e : r;
    },
    Jt = function (t, e) {
      return P(t) && (e = Q.exec(t)) ? e[1] : "";
    },
    Kt = [].slice,
    te = function (t, e) {
      return (
        t &&
        R(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && R(t[0]))) &&
        !t.nodeType &&
        t !== o
      );
    },
    ee = function (t, e, r) {
      return (
        void 0 === r && (r = []),
        t.forEach(function (t) {
          var i;
          return (P(t) && !e) || te(t, 1)
            ? (i = r).push.apply(i, re(t))
            : r.push(t);
        }) || r
      );
    },
    re = function (t, e, r) {
      return s && !e && s.selector
        ? s.selector(t)
        : !P(t) || r || (!u && Ae())
        ? Y(t)
          ? ee(t, r)
          : te(t)
          ? Kt.call(t, 0)
          : t
          ? [t]
          : []
        : Kt.call((e || h).querySelectorAll(t), 0);
    },
    ie = function (t) {
      return (
        (t = re(t)[0] || $("Invalid scope") || {}),
        function (e) {
          var r = t.current || t.nativeElement || t;
          return re(
            e,
            r.querySelectorAll
              ? r
              : r === t
              ? $("Invalid scope") || h.createElement("div")
              : t
          );
        }
      );
    },
    ne = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    se = function (t) {
      if (S(t)) return t;
      var e = R(t) ? t : { each: t },
        r = Re(e.ease),
        i = e.from || 0,
        n = parseFloat(e.base) || 0,
        s = {},
        a = i > 0 && i < 1,
        o = isNaN(i) || a,
        u = e.axis,
        h = i,
        f = i;
      return (
        P(i)
          ? (h = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
          : !a && o && ((h = i[0]), (f = i[1])),
        function (t, a, l) {
          var c,
            p,
            _,
            d,
            m,
            g,
            v,
            y,
            T,
            x = (l || e).length,
            b = s[x];
          if (!b) {
            if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, w])[1])) {
              for (
                v = -w;
                v < (v = l[T++].getBoundingClientRect().left) && T < x;

              );
              T < x && T--;
            }
            for (
              b = s[x] = [],
                c = o ? Math.min(T, x) * h - 0.5 : i % T,
                p = T === w ? 0 : o ? (x * f) / T - 0.5 : (i / T) | 0,
                v = 0,
                y = w,
                g = 0;
              g < x;
              g++
            )
              (_ = (g % T) - c),
                (d = p - ((g / T) | 0)),
                (b[g] = m = u ? Math.abs("y" === u ? d : _) : A(_ * _ + d * d)),
                m > v && (v = m),
                m < y && (y = m);
            "random" === i && ne(b),
              (b.max = v - y),
              (b.min = y),
              (b.v = x =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (T > x
                      ? x - 1
                      : u
                      ? "y" === u
                        ? x / T
                        : T
                      : Math.max(T, x / T)) ||
                  0) * ("edges" === i ? -1 : 1)),
              (b.b = x < 0 ? n - x : n),
              (b.u = Jt(e.amount || e.each) || 0),
              (r = r && x < 0 ? Ee(r) : r);
          }
          return (
            (x = (b[t] - b.min) / b.max || 0),
            mt(b.b + (r ? r(x) : x) * b.v) + b.u
          );
        }
      );
    },
    ae = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (r) {
        var i = mt(Math.round(parseFloat(r) / t) * t * e);
        return (i - (i % 1)) / e + (E(r) ? 0 : Jt(r));
      };
    },
    oe = function (t, e) {
      var r,
        i,
        n = Y(t);
      return (
        !n &&
          R(t) &&
          ((r = n = t.radius || w),
          t.values
            ? ((t = re(t.values)), (i = !E(t[0])) && (r *= r))
            : (t = ae(t.increment))),
        Zt(
          e,
          n
            ? S(t)
              ? function (e) {
                  return (i = t(e)), Math.abs(i - e) <= r ? i : e;
                }
              : function (e) {
                  for (
                    var n,
                      s,
                      a = parseFloat(i ? e.x : e),
                      o = parseFloat(i ? e.y : 0),
                      u = w,
                      h = 0,
                      f = t.length;
                    f--;

                  )
                    (n = i
                      ? (n = t[f].x - a) * n + (s = t[f].y - o) * s
                      : Math.abs(t[f] - a)) < u && ((u = n), (h = f));
                  return (
                    (h = !r || u <= r ? t[h] : e),
                    i || h === e || E(e) ? h : h + Jt(e)
                  );
                }
            : ae(t)
        )
      );
    },
    ue = function (t, e, r, i) {
      return Zt(Y(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
        return Y(t)
          ? t[~~(Math.random() * t.length)]
          : (r = r || 1e-5) &&
              (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                ) *
                  r *
                  i
              ) / i;
      });
    },
    he = function (t, e, r) {
      return Zt(r, function (r) {
        return t[~~e(r)];
      });
    },
    fe = function (t) {
      for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
        (i = t.indexOf(")", e)),
          (n = "[" === t.charAt(e + 7)),
          (r = t.substr(e + 7, i - e - 7).match(n ? j : N)),
          (a +=
            t.substr(s, e - s) +
            ue(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
          (s = i + 1);
      return a + t.substr(s, t.length - s);
    },
    le = function (t, e, r, i, n) {
      var s = e - t,
        a = i - r;
      return Zt(n, function (e) {
        return r + (((e - t) / s) * a || 0);
      });
    },
    ce = function (t, e, r) {
      var i,
        n,
        s,
        a = t.labels,
        o = w;
      for (i in a)
        (n = a[i] - e) < 0 == !!r &&
          n &&
          o > (n = Math.abs(n)) &&
          ((s = i), (o = n));
      return s;
    },
    pe = function (t, e, r) {
      var i,
        n,
        a,
        o = t.vars,
        u = o[e],
        h = s,
        f = t._ctx;
      if (u)
        return (
          (i = o[e + "Params"]),
          (n = o.callbackScope || t),
          r && nt.length && yt(),
          f && (s = f),
          (a = i ? u.apply(n, i) : u.call(n)),
          (s = h),
          a
        );
    },
    _e = function (t) {
      return (
        Pt(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!n),
        t.progress() < 1 && pe(t, "onInterrupt"),
        t
      );
    },
    de = [],
    me = function (t) {
      if (t)
        if (((t = (!t.name && t.default) || t), B() || t.headless)) {
          var e = t.name,
            r = S(t),
            i =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            n = {
              init: K,
              render: or,
              add: je,
              kill: hr,
              modifier: ur,
              rawVars: 0,
            },
            s = {
              targetTest: 0,
              get: 0,
              getSetter: ir,
              aliases: {},
              register: 0,
            };
          if ((Ae(), t !== i)) {
            if (at[e]) return;
            bt(i, bt(kt(t, n), s)),
              Ot(i.prototype, Ot(n, kt(t, s))),
              (at[(i.prop = e)] = i),
              t.targetTest && (ht.push(i), (it[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          J(e, i), t.register && t.register(Mr, i, cr);
        } else de.push(t);
    },
    ge = 255,
    ve = {
      aqua: [0, ge, ge],
      lime: [0, ge, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ge],
      navy: [0, 0, 128],
      white: [ge, ge, ge],
      olive: [128, 128, 0],
      yellow: [ge, ge, 0],
      orange: [ge, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ge, 0, 0],
      pink: [ge, 192, 203],
      cyan: [0, ge, ge],
      transparent: [ge, ge, ge, 0],
    },
    ye = function (t, e, r) {
      return (
        ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
          ? e + (r - e) * t * 6
          : t < 0.5
          ? r
          : 3 * t < 2
          ? e + (r - e) * (2 / 3 - t) * 6
          : e) *
          ge +
          0.5) |
        0
      );
    },
    Te = function (t, e, r) {
      var i,
        n,
        s,
        a,
        o,
        u,
        h,
        f,
        l,
        c,
        p = t ? (E(t) ? [t >> 16, (t >> 8) & ge, t & ge] : 0) : ve.black;
      if (!p) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ve[t]))
          p = ve[t];
        else if ("#" === t.charAt(0)) {
          if (
            (t.length < 6 &&
              ((i = t.charAt(1)),
              (n = t.charAt(2)),
              (s = t.charAt(3)),
              (t =
                "#" +
                i +
                i +
                n +
                n +
                s +
                s +
                (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
            9 === t.length)
          )
            return [
              (p = parseInt(t.substr(1, 6), 16)) >> 16,
              (p >> 8) & ge,
              p & ge,
              parseInt(t.substr(7), 16) / 255,
            ];
          p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & ge, t & ge];
        } else if ("hsl" === t.substr(0, 3))
          if (((p = c = t.match(N)), e)) {
            if (~t.indexOf("="))
              return (p = t.match(U)), r && p.length < 4 && (p[3] = 1), p;
          } else
            (a = (+p[0] % 360) / 360),
              (o = +p[1] / 100),
              (i =
                2 * (u = +p[2] / 100) -
                (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
              p.length > 3 && (p[3] *= 1),
              (p[0] = ye(a + 1 / 3, i, n)),
              (p[1] = ye(a, i, n)),
              (p[2] = ye(a - 1 / 3, i, n));
        else p = t.match(N) || ve.transparent;
        p = p.map(Number);
      }
      return (
        e &&
          !c &&
          ((i = p[0] / ge),
          (n = p[1] / ge),
          (s = p[2] / ge),
          (u = ((h = Math.max(i, n, s)) + (f = Math.min(i, n, s))) / 2),
          h === f
            ? (a = o = 0)
            : ((l = h - f),
              (o = u > 0.5 ? l / (2 - h - f) : l / (h + f)),
              (a =
                h === i
                  ? (n - s) / l + (n < s ? 6 : 0)
                  : h === n
                  ? (s - i) / l + 2
                  : (i - n) / l + 4),
              (a *= 60)),
          (p[0] = ~~(a + 0.5)),
          (p[1] = ~~(100 * o + 0.5)),
          (p[2] = ~~(100 * u + 0.5))),
        r && p.length < 4 && (p[3] = 1),
        p
      );
    },
    xe = function (t) {
      var e = [],
        r = [],
        i = -1;
      return (
        t.split(be).forEach(function (t) {
          var n = t.match(X) || [];
          e.push.apply(e, n), r.push((i += n.length + 1));
        }),
        (e.c = r),
        e
      );
    },
    we = function (t, e, r) {
      var i,
        n,
        s,
        a,
        o = "",
        u = (t + o).match(be),
        h = e ? "hsla(" : "rgba(",
        f = 0;
      if (!u) return t;
      if (
        ((u = u.map(function (t) {
          return (
            (t = Te(t, e, 1)) &&
            h +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        r && ((s = xe(t)), (i = r.c).join(o) !== s.c.join(o)))
      )
        for (a = (n = t.replace(be, "1").split(X)).length - 1; f < a; f++)
          o +=
            n[f] +
            (~i.indexOf(f)
              ? u.shift() || h + "0,0,0,0)"
              : (s.length ? s : u.length ? u : r).shift());
      if (!n)
        for (a = (n = t.split(be)).length - 1; f < a; f++) o += n[f] + u[f];
      return o + n[a];
    },
    be = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in ve) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Oe = /hsl[a]?\(/,
    Me = function (t) {
      var e,
        r = t.join(" ");
      if (((be.lastIndex = 0), be.test(r)))
        return (
          (e = Oe.test(r)),
          (t[1] = we(t[1], e)),
          (t[0] = we(t[0], e, xe(t[1]))),
          !0
        );
    },
    ke = (function () {
      var t,
        e,
        r,
        i,
        n,
        s,
        a = Date.now,
        l = 500,
        c = 33,
        _ = a(),
        d = _,
        m = 1e3 / 240,
        g = m,
        v = [],
        y = function r(o) {
          var u,
            h,
            f,
            p,
            y = a() - d,
            T = !0 === o;
          if (
            ((y > l || y < 0) && (_ += y - c),
            ((u = (f = (d += y) - _) - g) > 0 || T) &&
              ((p = ++i.frame),
              (n = f - 1e3 * i.time),
              (i.time = f /= 1e3),
              (g += u + (u >= m ? 4 : m - u)),
              (h = 1)),
            T || (t = e(r)),
            h)
          )
            for (s = 0; s < v.length; s++) v[s](f, n, p, o);
        };
      return (i = {
        time: 0,
        frame: 0,
        tick: function () {
          y(!0);
        },
        deltaRatio: function (t) {
          return n / (1e3 / (t || 60));
        },
        wake: function () {
          f &&
            (!u &&
              B() &&
              ((o = u = window),
              (h = o.document || {}),
              (G.gsap = Mr),
              (o.gsapVersions || (o.gsapVersions = [])).push(Mr.version),
              H(W || o.GreenSockGlobals || (!o.gsap && o) || {}),
              de.forEach(me)),
            (r =
              "undefined" != typeof requestAnimationFrame &&
              requestAnimationFrame),
            t && i.sleep(),
            (e =
              r ||
              function (t) {
                return setTimeout(t, (g - 1e3 * i.time + 1) | 0);
              }),
            (p = 1),
            y(2));
        },
        sleep: function () {
          (r ? cancelAnimationFrame : clearTimeout)(t), (p = 0), (e = K);
        },
        lagSmoothing: function (t, e) {
          (l = t || 1 / 0), (c = Math.min(e || 33, l));
        },
        fps: function (t) {
          (m = 1e3 / (t || 240)), (g = 1e3 * i.time + m);
        },
        add: function (t, e, r) {
          var n = e
            ? function (e, r, s, a) {
                t(e, r, s, a), i.remove(n);
              }
            : t;
          return i.remove(t), v[r ? "unshift" : "push"](n), Ae(), n;
        },
        remove: function (t, e) {
          ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--;
        },
        _listeners: v,
      });
    })(),
    Ae = function () {
      return !p && ke.wake();
    },
    Ce = {},
    De = /^[\d.\-M][\d.\-,\s]/,
    Pe = /["']/g,
    Se = function (t) {
      for (
        var e,
          r,
          i,
          n = {},
          s = t.substr(1, t.length - 3).split(":"),
          a = s[0],
          o = 1,
          u = s.length;
        o < u;
        o++
      )
        (r = s[o]),
          (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
          (i = r.substr(0, e)),
          (n[a] = isNaN(i) ? i.replace(Pe, "").trim() : +i),
          (a = r.substr(e + 1).trim());
      return n;
    },
    Ee = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    ze = function t(e, r) {
      for (var i, n = e._first; n; )
        n instanceof Ue
          ? t(n, r)
          : !n.vars.yoyoEase ||
            (n._yoyo && n._repeat) ||
            n._yoyo === r ||
            (n.timeline
              ? t(n.timeline, r)
              : ((i = n._ease),
                (n._ease = n._yEase),
                (n._yEase = i),
                (n._yoyo = r))),
          (n = n._next);
    },
    Re = function (t, e) {
      return (
        (t &&
          (S(t)
            ? t
            : Ce[t] ||
              (function (t) {
                var e,
                  r,
                  i,
                  n,
                  s = (t + "").split("("),
                  a = Ce[s[0]];
                return a && s.length > 1 && a.config
                  ? a.config.apply(
                      null,
                      ~t.indexOf("{")
                        ? [Se(s[1])]
                        : ((e = t),
                          (r = e.indexOf("(") + 1),
                          (i = e.indexOf(")")),
                          (n = e.indexOf("(", r)),
                          e.substring(
                            r,
                            ~n && n < i ? e.indexOf(")", i + 1) : i
                          ))
                            .split(",")
                            .map(xt)
                    )
                  : Ce._CE && De.test(t)
                  ? Ce._CE("", t)
                  : a;
              })(t))) ||
        e
      );
    },
    Fe = function (t, e, r, i) {
      void 0 === r &&
        (r = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === i &&
          (i = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var n,
        s = { easeIn: e, easeOut: r, easeInOut: i };
      return (
        _t(t, function (t) {
          for (var e in ((Ce[t] = G[t] = s),
          (Ce[(n = t.toLowerCase())] = r),
          s))
            Ce[
              n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = Ce[t + "." + e] = s[e];
        }),
        s
      );
    },
    Be = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    },
    Le = function t(e, r, i) {
      var n = r >= 1 ? r : 1,
        s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
        a = (s / O) * (Math.asin(1 / n) || 0),
        o = function (t) {
          return 1 === t ? 1 : n * Math.pow(2, -10 * t) * D((t - a) * s) + 1;
        },
        u =
          "out" === e
            ? o
            : "in" === e
            ? function (t) {
                return 1 - o(1 - t);
              }
            : Be(o);
      return (
        (s = O / s),
        (u.config = function (r, i) {
          return t(e, r, i);
        }),
        u
      );
    },
    Ie = function t(e, r) {
      void 0 === r && (r = 1.70158);
      var i = function (t) {
          return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
        },
        n =
          "out" === e
            ? i
            : "in" === e
            ? function (t) {
                return 1 - i(1 - t);
              }
            : Be(i);
      return (
        (n.config = function (r) {
          return t(e, r);
        }),
        n
      );
    };
  _t("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Fe(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Ce.Linear.easeNone = Ce.none = Ce.Linear.easeIn),
    Fe("Elastic", Le("in"), Le("out"), Le()),
    (_ = 7.5625),
    (g = 2 * (m = 1 / (d = 2.75))),
    (v = 2.5 * m),
    Fe(
      "Bounce",
      function (t) {
        return 1 - y(1 - t);
      },
      (y = function (t) {
        return t < m
          ? _ * t * t
          : t < g
          ? _ * Math.pow(t - 1.5 / d, 2) + 0.75
          : t < v
          ? _ * (t -= 2.25 / d) * t + 0.9375
          : _ * Math.pow(t - 2.625 / d, 2) + 0.984375;
      })
    ),
    Fe("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Fe("Circ", function (t) {
      return -(A(1 - t * t) - 1);
    }),
    Fe("Sine", function (t) {
      return 1 === t ? 1 : 1 - C(t * M);
    }),
    Fe("Back", Ie("in"), Ie("out"), Ie()),
    (Ce.SteppedEase =
      Ce.steps =
      G.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((i * $t(0, 0.99999999, t)) | 0) + n) * r;
            };
          },
        }),
    (x.ease = Ce["quad.out"]),
    _t(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (ft += t + "," + t + "Params,");
      }
    );
  var Ye = function (t, e) {
      (this.id = k++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : pt),
        (this.set = e ? e.getSetter : ir);
    },
    Ne = (function () {
      function t(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          jt(this, +t.duration, 1, 1),
          (this.data = t.data),
          s && ((this._ctx = s), s.data.push(this)),
          p || ke.wake();
      }
      var e = t.prototype;
      return (
        (e.delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (e.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              jt(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (t, e) {
          if ((Ae(), !arguments.length)) return this._tTime;
          var r = this._dp;
          if (r && r.smoothChildTiming && this._ts) {
            for (
              It(this, t), !r._dp || r.parent || Yt(r, this);
              r && r.parent;

            )
              r.parent._time !==
                r._start +
                  (r._ts >= 0
                    ? r._tTime / r._ts
                    : (r.totalDuration() - r._tTime) / -r._ts) &&
                r.totalTime(r._tTime, !0),
                (r = r.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && t < this._tDur) ||
                (this._ts < 0 && t > 0) ||
                (!this._tDur && !t)) &&
              Nt(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !e) ||
              (this._initted && Math.abs(this._zTime) === b) ||
              (!t && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = t), Tt(this, t, e)),
            this
          );
        }),
        (e.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + Rt(this)) %
                  (this._dur + this._rDelay) || (t ? this._dur : 0),
                e
              )
            : this._time;
        }),
        (e.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  Rt(this),
                e
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (t, e) {
          var r = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * r, e)
            : this._repeat
            ? Ft(this._tTime, r) + 1
            : 1;
        }),
        (e.timeScale = function (t, e) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === t) return this;
          var r =
            this.parent && this._ts ? Bt(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
            this.totalTime($t(-Math.abs(this._delay), this._tDur, r), !1 !== e),
            Lt(this),
            (function (t) {
              for (var e = t.parent; e && e.parent; )
                (e._dirty = 1), e.totalDuration(), (e = e.parent);
              return t;
            })(this)
          );
        }),
        (e.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t),
                t
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Ae(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        Math.abs(this._zTime) !== b &&
                        (this._tTime -= b)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              e && (e._sort || !this.parent) && Nt(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (t) {
          return (
            this._start +
            (F(t) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Bt(e.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (t) {
          void 0 === t && (t = rt);
          var e = n;
          return (
            (n = t),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(t),
              this.totalTime(-0.01, t.suppressEvents)),
            "nested" !== this.data && !1 !== t.kill && this.kill(),
            (n = e),
            this
          );
        }),
        (e.globalTime = function (t) {
          for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
            (r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp);
          return !this.parent && this._sat ? this._sat.globalTime(t) : r;
        }),
        (e.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t === 1 / 0 ? -2 : t), Qt(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (t) {
          if (arguments.length) {
            var e = this._time;
            return (this._rDelay = t), Qt(this), e ? this.time(e) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (e.seek = function (t, e) {
          return this.totalTime(Wt(this, t), F(e));
        }),
        (e.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, F(e));
        }),
        (e.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var t,
            e = this.parent || this._dp,
            r = this._start;
          return !(
            e &&
            !(
              this._ts &&
              this._initted &&
              e.isActive() &&
              (t = e.rawTime(!0)) >= r &&
              t < this.endTime(!0) - b
            )
          );
        }),
        (e.eventCallback = function (t, e, r) {
          var i = this.vars;
          return arguments.length > 1
            ? (e
                ? ((i[t] = e),
                  r && (i[t + "Params"] = r),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete i[t],
              this)
            : i[t];
        }),
        (e.then = function (t) {
          var e = this;
          return new Promise(function (r) {
            var i = S(t) ? t : wt,
              n = function () {
                var t = e.then;
                (e.then = null),
                  S(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                  r(i),
                  (e.then = t);
              };
            (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
            (!e._tTime && e._ts < 0)
              ? n()
              : (e._prom = n);
          });
        }),
        (e.kill = function () {
          _e(this);
        }),
        t
      );
    })();
  bt(Ne.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Ue = (function (t) {
    function i(e, i) {
      var n;
      return (
        void 0 === e && (e = {}),
        ((n = t.call(this, e) || this).labels = {}),
        (n.smoothChildTiming = !!e.smoothChildTiming),
        (n.autoRemoveChildren = !!e.autoRemoveChildren),
        (n._sort = F(e.sortChildren)),
        a && Nt(e.parent || a, r(n), i),
        e.reversed && n.reverse(),
        e.paused && n.paused(!0),
        e.scrollTrigger && Ut(r(n), e.scrollTrigger),
        n
      );
    }
    e(i, t);
    var s = i.prototype;
    return (
      (s.to = function (t, e, r) {
        return Ht(0, arguments, this), this;
      }),
      (s.from = function (t, e, r) {
        return Ht(1, arguments, this), this;
      }),
      (s.fromTo = function (t, e, r, i) {
        return Ht(2, arguments, this), this;
      }),
      (s.set = function (t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          At(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Je(t, e, Wt(this, r), 1),
          this
        );
      }),
      (s.call = function (t, e, r) {
        return Nt(this, Je.delayedCall(0, t, e), r);
      }),
      (s.staggerTo = function (t, e, r, i, n, s, a) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = s),
          (r.onCompleteParams = a),
          (r.parent = this),
          new Je(t, r, Wt(this, n)),
          this
        );
      }),
      (s.staggerFrom = function (t, e, r, i, n, s, a) {
        return (
          (r.runBackwards = 1),
          (At(r).immediateRender = F(r.immediateRender)),
          this.staggerTo(t, e, r, i, n, s, a)
        );
      }),
      (s.staggerFromTo = function (t, e, r, i, n, s, a, o) {
        return (
          (i.startAt = r),
          (At(i).immediateRender = F(i.immediateRender)),
          this.staggerTo(t, e, i, n, s, a, o)
        );
      }),
      (s.render = function (t, e, r) {
        var i,
          s,
          o,
          u,
          h,
          f,
          l,
          c,
          p,
          _,
          d,
          m,
          g = this._time,
          v = this._dirty ? this.totalDuration() : this._tDur,
          y = this._dur,
          T = t <= 0 ? 0 : mt(t),
          x = this._zTime < 0 != t < 0 && (this._initted || !y);
        if (
          (this !== a && T > v && t >= 0 && (T = v),
          T !== this._tTime || r || x)
        ) {
          if (
            (g !== this._time &&
              y &&
              ((T += this._time - g), (t += this._time - g)),
            (i = T),
            (p = this._start),
            (f = !(c = this._ts)),
            x && (y || (g = this._zTime), (t || !e) && (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((d = this._yoyo),
              (h = y + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * h + t, e, r);
            if (
              ((i = mt(T % h)),
              T === v
                ? ((u = this._repeat), (i = y))
                : ((u = ~~(T / h)) && u === T / h && ((i = y), u--),
                  i > y && (i = y)),
              (_ = Ft(this._tTime, h)),
              !g &&
                this._tTime &&
                _ !== u &&
                this._tTime - _ * h - this._dur <= 0 &&
                (_ = u),
              d && 1 & u && ((i = y - i), (m = 1)),
              u !== _ && !this._lock)
            ) {
              var w = d && 1 & _,
                O = w === (d && 1 & u);
              if (
                (u < _ && (w = !w),
                (g = w ? 0 : T % y ? y : T),
                (this._lock = 1),
                (this.render(g || (m ? 0 : mt(u * h)), e, !y)._lock = 0),
                (this._tTime = T),
                !e && this.parent && pe(this, "onRepeat"),
                this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                (g && g !== this._time) ||
                  f !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((y = this._dur),
                (v = this._tDur),
                O &&
                  ((this._lock = 2),
                  (g = w ? y : -1e-4),
                  this.render(g, !0),
                  this.vars.repeatRefresh && !m && this.invalidate()),
                (this._lock = 0),
                !this._ts && !f)
              )
                return this;
              ze(this, m);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((l = (function (t, e, r) {
                var i;
                if (r > e)
                  for (i = t._first; i && i._start <= r; ) {
                    if ("isPause" === i.data && i._start > e) return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if ("isPause" === i.data && i._start < e) return i;
                    i = i._prev;
                  }
              })(this, mt(g), mt(i))),
              l && (T -= i - (i = l._start))),
            (this._tTime = T),
            (this._time = i),
            (this._act = !c),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (g = 0)),
            !g && i && !e && !u && (pe(this, "onStart"), this._tTime !== T))
          )
            return this;
          if (i >= g && t >= 0)
            for (s = this._first; s; ) {
              if (
                ((o = s._next), (s._act || i >= s._start) && s._ts && l !== s)
              ) {
                if (s.parent !== this) return this.render(t, e, r);
                if (
                  (s.render(
                    s._ts > 0
                      ? (i - s._start) * s._ts
                      : (s._dirty ? s.totalDuration() : s._tDur) +
                          (i - s._start) * s._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !f))
                ) {
                  (l = 0), o && (T += this._zTime = -1e-8);
                  break;
                }
              }
              s = o;
            }
          else {
            s = this._last;
            for (var M = t < 0 ? t : i; s; ) {
              if (
                ((o = s._prev), (s._act || M <= s._end) && s._ts && l !== s)
              ) {
                if (s.parent !== this) return this.render(t, e, r);
                if (
                  (s.render(
                    s._ts > 0
                      ? (M - s._start) * s._ts
                      : (s._dirty ? s.totalDuration() : s._tDur) +
                          (M - s._start) * s._ts,
                    e,
                    r || (n && (s._initted || s._startAt))
                  ),
                  i !== this._time || (!this._ts && !f))
                ) {
                  (l = 0), o && (T += this._zTime = M ? -1e-8 : b);
                  break;
                }
              }
              s = o;
            }
          }
          if (
            l &&
            !e &&
            (this.pause(),
            (l.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1),
            this._ts)
          )
            return (this._start = p), Lt(this), this.render(t, e, r);
          this._onUpdate && !e && pe(this, "onUpdate", !0),
            ((T === v && this._tTime >= this.totalDuration()) || (!T && g)) &&
              ((p !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                this._lock ||
                ((t || !y) &&
                  ((T === v && this._ts > 0) || (!T && this._ts < 0)) &&
                  Pt(this, 1),
                e ||
                  (t < 0 && !g) ||
                  (!T && !g && v) ||
                  (pe(
                    this,
                    T === v && t >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(T < v && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (s.add = function (t, e) {
        var r = this;
        if ((E(e) || (e = Wt(this, e, t)), !(t instanceof Ne))) {
          if (Y(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              this
            );
          if (P(t)) return this.addLabel(t, e);
          if (!S(t)) return this;
          t = Je.delayedCall(0, t);
        }
        return this !== t ? Nt(this, t, e) : this;
      }),
      (s.getChildren = function (t, e, r, i) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -w);
        for (var n = [], s = this._first; s; )
          s._start >= i &&
            (s instanceof Je
              ? e && n.push(s)
              : (r && n.push(s),
                t && n.push.apply(n, s.getChildren(!0, e, r)))),
            (s = s._next);
        return n;
      }),
      (s.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (s.remove = function (t) {
        return P(t)
          ? this.removeLabel(t)
          : S(t)
          ? this.killTweensOf(t)
          : (Dt(this, t),
            t === this._recent && (this._recent = this._last),
            St(this));
      }),
      (s.totalTime = function (e, r) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = mt(
                ke.time -
                  (this._ts > 0
                    ? e / this._ts
                    : (this.totalDuration() - e) / -this._ts)
              )),
            t.prototype.totalTime.call(this, e, r),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (s.addLabel = function (t, e) {
        return (this.labels[t] = Wt(this, e)), this;
      }),
      (s.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (s.addPause = function (t, e, r) {
        var i = Je.delayedCall(0, e || K, r);
        return (
          (i.data = "isPause"), (this._hasPause = 1), Nt(this, i, Wt(this, t))
        );
      }),
      (s.removePause = function (t) {
        var e = this._first;
        for (t = Wt(this, t); e; )
          e._start === t && "isPause" === e.data && Pt(e), (e = e._next);
      }),
      (s.killTweensOf = function (t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; )
          Xe !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (s.getTweensOf = function (t, e) {
        for (var r, i = [], n = re(t), s = this._first, a = E(e); s; )
          s instanceof Je
            ? vt(s._targets, n) &&
              (a
                ? (!Xe || (s._initted && s._ts)) &&
                  s.globalTime(0) <= e &&
                  s.globalTime(s.totalDuration()) > e
                : !e || s.isActive()) &&
              i.push(s)
            : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
            (s = s._next);
        return i;
      }),
      (s.tweenTo = function (t, e) {
        e = e || {};
        var r,
          i = this,
          n = Wt(i, t),
          s = e,
          a = s.startAt,
          o = s.onStart,
          u = s.onStartParams,
          h = s.immediateRender,
          f = Je.to(
            i,
            bt(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (n - (a && "time" in a ? a.time : i._time)) / i.timeScale()
                  ) ||
                  b,
                onStart: function () {
                  if ((i.pause(), !r)) {
                    var t =
                      e.duration ||
                      Math.abs(
                        (n - (a && "time" in a ? a.time : i._time)) /
                          i.timeScale()
                      );
                    f._dur !== t && jt(f, t, 0, 1).render(f._time, !0, !0),
                      (r = 1);
                  }
                  o && o.apply(f, u || []);
                },
              },
              e
            )
          );
        return h ? f.render(0) : f;
      }),
      (s.tweenFromTo = function (t, e, r) {
        return this.tweenTo(e, bt({ startAt: { time: Wt(this, t) } }, r));
      }),
      (s.recent = function () {
        return this._recent;
      }),
      (s.nextLabel = function (t) {
        return void 0 === t && (t = this._time), ce(this, Wt(this, t));
      }),
      (s.previousLabel = function (t) {
        return void 0 === t && (t = this._time), ce(this, Wt(this, t), 1);
      }),
      (s.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + b);
      }),
      (s.shiftChildren = function (t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, s = this.labels; n; )
          n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in s) s[i] >= r && (s[i] += t);
        return St(this);
      }),
      (s.invalidate = function (e) {
        var r = this._first;
        for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
        return t.prototype.invalidate.call(this, e);
      }),
      (s.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          St(this)
        );
      }),
      (s.totalDuration = function (t) {
        var e,
          r,
          i,
          n = 0,
          s = this,
          o = s._last,
          u = w;
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -t : t)
          );
        if (s._dirty) {
          for (i = s.parent; o; )
            (e = o._prev),
              o._dirty && o.totalDuration(),
              (r = o._start) > u && s._sort && o._ts && !s._lock
                ? ((s._lock = 1), (Nt(s, o, r - o._delay, 1)._lock = 0))
                : (u = r),
              r < 0 &&
                o._ts &&
                ((n -= r),
                ((!i && !s._dp) || (i && i.smoothChildTiming)) &&
                  ((s._start += r / s._ts), (s._time -= r), (s._tTime -= r)),
                s.shiftChildren(-r, !1, -Infinity),
                (u = 0)),
              o._end > n && o._ts && (n = o._end),
              (o = e);
          jt(s, s === a && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (i.updateRoot = function (t) {
        if ((a._ts && (Tt(a, Bt(t, a)), (l = ke.frame)), ke.frame >= ut)) {
          ut += T.autoSleep || 120;
          var e = a._first;
          if ((!e || !e._ts) && T.autoSleep && ke._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || ke.sleep();
          }
        }
      }),
      i
    );
  })(Ne);
  bt(Ue.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Xe,
    qe,
    Ve = function (t, e, r, i, n, s, a) {
      var o,
        u,
        h,
        f,
        l,
        c,
        p,
        _,
        d = new cr(this._pt, t, e, 0, 1, ar, null, n),
        m = 0,
        g = 0;
      for (
        d.b = r,
          d.e = i,
          r += "",
          (p = ~(i += "").indexOf("random(")) && (i = fe(i)),
          s && (s((_ = [r, i]), t, e), (r = _[0]), (i = _[1])),
          u = r.match(q) || [];
        (o = q.exec(i));

      )
        (f = o[0]),
          (l = i.substring(m, o.index)),
          h ? (h = (h + 1) % 5) : "rgba(" === l.substr(-5) && (h = 1),
          f !== u[g++] &&
            ((c = parseFloat(u[g - 1]) || 0),
            (d._pt = {
              _next: d._pt,
              p: l || 1 === g ? l : ",",
              s: c,
              c: "=" === f.charAt(1) ? gt(c, f) - c : parseFloat(f) - c,
              m: h && h < 4 ? Math.round : 0,
            }),
            (m = q.lastIndex));
      return (
        (d.c = m < i.length ? i.substring(m, i.length) : ""),
        (d.fp = a),
        (V.test(i) || p) && (d.e = 0),
        (this._pt = d),
        d
      );
    },
    je = function (t, e, r, i, n, s, a, o, u, h) {
      S(i) && (i = i(n || 0, t, s));
      var f,
        l = t[e],
        c =
          "get" !== r
            ? r
            : S(l)
            ? u
              ? t[
                  e.indexOf("set") || !S(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](u)
              : t[e]()
            : l,
        p = S(l) ? (u ? er : tr) : Ke;
      if (
        (P(i) &&
          (~i.indexOf("random(") && (i = fe(i)),
          "=" === i.charAt(1) &&
            ((f = gt(c, i) + (Jt(c) || 0)) || 0 === f) &&
            (i = f)),
        !h || c !== i || qe)
      )
        return isNaN(c * i) || "" === i
          ? (!l && !(e in t) && Z(e, i),
            Ve.call(this, t, e, c, i, p, o || T.stringFilter, u))
          : ((f = new cr(
              this._pt,
              t,
              e,
              +c || 0,
              i - (c || 0),
              "boolean" == typeof l ? sr : nr,
              0,
              p
            )),
            u && (f.fp = u),
            a && f.modifier(a, this, t),
            (this._pt = f));
    },
    Qe = function (t, e, r, i, n, s) {
      var a, o, u, h;
      if (
        at[t] &&
        !1 !==
          (a = new at[t]()).init(
            n,
            a.rawVars
              ? e[t]
              : (function (t, e, r, i, n) {
                  if (
                    (S(t) && (t = He(t, n, e, r, i)),
                    !R(t) || (t.style && t.nodeType) || Y(t) || I(t))
                  )
                    return P(t) ? He(t, n, e, r, i) : t;
                  var s,
                    a = {};
                  for (s in t) a[s] = He(t[s], n, e, r, i);
                  return a;
                })(e[t], i, n, s, r),
            r,
            i,
            s
          ) &&
        ((r._pt = o = new cr(r._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
        r !== c)
      )
        for (u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length; h--; )
          u[a._props[h]] = o;
      return a;
    },
    Ge = function t(e, r, s) {
      var o,
        u,
        h,
        f,
        l,
        c,
        p,
        _,
        d,
        m,
        g,
        v,
        y,
        T = e.vars,
        O = T.ease,
        M = T.startAt,
        k = T.immediateRender,
        A = T.lazy,
        C = T.onUpdate,
        D = T.runBackwards,
        P = T.yoyoEase,
        S = T.keyframes,
        E = T.autoRevert,
        z = e._dur,
        R = e._startAt,
        B = e._targets,
        L = e.parent,
        I = L && "nested" === L.data ? L.vars.targets : B,
        Y = "auto" === e._overwrite && !i,
        N = e.timeline;
      if (
        (N && (!S || !O) && (O = "none"),
        (e._ease = Re(O, x.ease)),
        (e._yEase = P ? Ee(Re(!0 === P ? O : P, x.ease)) : 0),
        P &&
          e._yoyo &&
          !e._repeat &&
          ((P = e._yEase), (e._yEase = e._ease), (e._ease = P)),
        (e._from = !N && !!T.runBackwards),
        !N || (S && !T.stagger))
      ) {
        if (
          ((v = (_ = B[0] ? ct(B[0]).harness : 0) && T[_.prop]),
          (o = kt(T, it)),
          R &&
            (R._zTime < 0 && R.progress(1),
            r < 0 && D && k && !E
              ? R.render(-1, !0)
              : R.revert(D && z ? et : tt),
            (R._lazy = 0)),
          M)
        ) {
          if (
            (Pt(
              (e._startAt = Je.set(
                B,
                bt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: L,
                    immediateRender: !0,
                    lazy: !R && F(A),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      C &&
                      function () {
                        return pe(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  M
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            r < 0 && (n || (!k && !E)) && e._startAt.revert(et),
            k && z && r <= 0 && s <= 0)
          )
            return void (r && (e._zTime = r));
        } else if (D && z && !R)
          if (
            (r && (k = !1),
            (h = bt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: k && !R && F(A),
                immediateRender: k,
                stagger: 0,
                parent: L,
              },
              o
            )),
            v && (h[_.prop] = v),
            Pt((e._startAt = Je.set(B, h))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            r < 0 && (n ? e._startAt.revert(et) : e._startAt.render(-1, !0)),
            (e._zTime = r),
            k)
          ) {
            if (!r) return;
          } else t(e._startAt, b, b);
        for (
          e._pt = e._ptCache = 0, A = (z && F(A)) || (A && !z), u = 0;
          u < B.length;
          u++
        ) {
          if (
            ((p = (l = B[u])._gsap || lt(B)[u]._gsap),
            (e._ptLookup[u] = m = {}),
            st[p.id] && nt.length && yt(),
            (g = I === B ? u : I.indexOf(l)),
            _ &&
              !1 !== (d = new _()).init(l, v || o, e, g, I) &&
              ((e._pt = f =
                new cr(e._pt, l, d.name, 0, 1, d.render, d, 0, d.priority)),
              d._props.forEach(function (t) {
                m[t] = f;
              }),
              d.priority && (c = 1)),
            !_ || v)
          )
            for (h in o)
              at[h] && (d = Qe(h, o, e, g, l, I))
                ? d.priority && (c = 1)
                : (m[h] = f =
                    je.call(e, l, h, "get", o[h], g, I, 0, T.stringFilter));
          e._op && e._op[u] && e.kill(l, e._op[u]),
            Y &&
              e._pt &&
              ((Xe = e),
              a.killTweensOf(l, m, e.globalTime(r)),
              (y = !e.parent),
              (Xe = 0)),
            e._pt && A && (st[p.id] = 1);
        }
        c && lr(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = C),
        (e._initted = (!e._op || e._pt) && !y),
        S && r <= 0 && N.render(w, !0, !0);
    },
    We = function (t, e, r, i) {
      var n,
        s,
        a = e.ease || i || "power1.inOut";
      if (Y(e))
        (s = r[t] || (r[t] = [])),
          e.forEach(function (t, r) {
            return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: a });
          });
      else
        for (n in e)
          (s = r[n] || (r[n] = [])),
            "ease" === n || s.push({ t: parseFloat(t), v: e[n], e: a });
    },
    He = function (t, e, r, i, n) {
      return S(t)
        ? t.call(e, r, i, n)
        : P(t) && ~t.indexOf("random(")
        ? fe(t)
        : t;
    },
    Ze = ft + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    $e = {};
  _t(Ze + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return ($e[t] = 1);
  });
  var Je = (function (t) {
    function s(e, n, s, o) {
      var u;
      "number" == typeof n && ((s.duration = n), (n = s), (s = null));
      var h,
        f,
        l,
        c,
        p,
        _,
        d,
        m,
        g = (u = t.call(this, o ? n : At(n)) || this).vars,
        v = g.duration,
        y = g.delay,
        x = g.immediateRender,
        w = g.stagger,
        b = g.overwrite,
        O = g.keyframes,
        M = g.defaults,
        k = g.scrollTrigger,
        A = g.yoyoEase,
        C = n.parent || a,
        D = (Y(e) || I(e) ? E(e[0]) : "length" in n) ? [e] : re(e);
      if (
        ((u._targets = D.length
          ? lt(D)
          : $(
              "GSAP target " + e + " not found. https://gsap.com",
              !T.nullTargetWarn
            ) || []),
        (u._ptLookup = []),
        (u._overwrite = b),
        O || w || L(v) || L(y))
      ) {
        if (
          ((n = u.vars),
          (h = u.timeline =
            new Ue({
              data: "nested",
              defaults: M || {},
              targets: C && "nested" === C.data ? C.vars.targets : D,
            })).kill(),
          (h.parent = h._dp = r(u)),
          (h._start = 0),
          w || L(v) || L(y))
        ) {
          if (((c = D.length), (d = w && se(w)), R(w)))
            for (p in w) ~Ze.indexOf(p) && (m || (m = {}), (m[p] = w[p]));
          for (f = 0; f < c; f++)
            ((l = kt(n, $e)).stagger = 0),
              A && (l.yoyoEase = A),
              m && Ot(l, m),
              (_ = D[f]),
              (l.duration = +He(v, r(u), f, _, D)),
              (l.delay = (+He(y, r(u), f, _, D) || 0) - u._delay),
              !w &&
                1 === c &&
                l.delay &&
                ((u._delay = y = l.delay), (u._start += y), (l.delay = 0)),
              h.to(_, l, d ? d(f, _, D) : 0),
              (h._ease = Ce.none);
          h.duration() ? (v = y = 0) : (u.timeline = 0);
        } else if (O) {
          At(bt(h.vars.defaults, { ease: "none" })),
            (h._ease = Re(O.ease || n.ease || "none"));
          var P,
            S,
            z,
            B = 0;
          if (Y(O))
            O.forEach(function (t) {
              return h.to(D, t, ">");
            }),
              h.duration();
          else {
            for (p in ((l = {}), O))
              "ease" === p || "easeEach" === p || We(p, O[p], l, O.easeEach);
            for (p in l)
              for (
                P = l[p].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  B = 0,
                  f = 0;
                f < P.length;
                f++
              )
                ((z = {
                  ease: (S = P[f]).e,
                  duration: ((S.t - (f ? P[f - 1].t : 0)) / 100) * v,
                })[p] = S.v),
                  h.to(D, z, B),
                  (B += z.duration);
            h.duration() < v && h.to({}, { duration: v - h.duration() });
          }
        }
        v || u.duration((v = h.duration()));
      } else u.timeline = 0;
      return (
        !0 !== b || i || ((Xe = r(u)), a.killTweensOf(D), (Xe = 0)),
        Nt(C, r(u), s),
        n.reversed && u.reverse(),
        n.paused && u.paused(!0),
        (x ||
          (!v &&
            !O &&
            u._start === mt(C._time) &&
            F(x) &&
            zt(r(u)) &&
            "nested" !== C.data)) &&
          ((u._tTime = -1e-8), u.render(Math.max(0, -y) || 0)),
        k && Ut(r(u), k),
        u
      );
    }
    e(s, t);
    var o = s.prototype;
    return (
      (o.render = function (t, e, r) {
        var i,
          s,
          a,
          o,
          u,
          h,
          f,
          l,
          c,
          p = this._time,
          _ = this._tDur,
          d = this._dur,
          m = t < 0,
          g = t > _ - b && !m ? _ : t < b ? 0 : t;
        if (d) {
          if (
            g !== this._tTime ||
            !t ||
            r ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 !== m)
          ) {
            if (((i = g), (l = this.timeline), this._repeat)) {
              if (((o = d + this._rDelay), this._repeat < -1 && m))
                return this.totalTime(100 * o + t, e, r);
              if (
                ((i = mt(g % o)),
                g === _
                  ? ((a = this._repeat), (i = d))
                  : ((a = ~~(g / o)) && a === mt(g / o) && ((i = d), a--),
                    i > d && (i = d)),
                (h = this._yoyo && 1 & a) && ((c = this._yEase), (i = d - i)),
                (u = Ft(this._tTime, o)),
                i === p && !r && this._initted && a === u)
              )
                return (this._tTime = g), this;
              a !== u &&
                (l && this._yEase && ze(l, h),
                this.vars.repeatRefresh &&
                  !h &&
                  !this._lock &&
                  this._time !== o &&
                  this._initted &&
                  ((this._lock = r = 1),
                  (this.render(mt(o * a), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Xt(this, m ? t : i, r, e, g)) return (this._tTime = 0), this;
              if (
                !(p === this._time || (r && this.vars.repeatRefresh && a !== u))
              )
                return this;
              if (d !== this._dur) return this.render(t, e, r);
            }
            if (
              ((this._tTime = g),
              (this._time = i),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = f = (c || this._ease)(i / d)),
              this._from && (this.ratio = f = 1 - f),
              i && !p && !e && !a && (pe(this, "onStart"), this._tTime !== g))
            )
              return this;
            for (s = this._pt; s; ) s.r(f, s.d), (s = s._next);
            (l &&
              l.render(t < 0 ? t : l._dur * l._ease(i / this._dur), e, r)) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (m && Et(this, t, 0, r), pe(this, "onUpdate")),
              this._repeat &&
                a !== u &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                pe(this, "onRepeat"),
              (g !== this._tDur && g) ||
                this._tTime !== g ||
                (m && !this._onUpdate && Et(this, t, 0, !0),
                (t || !d) &&
                  ((g === this._tDur && this._ts > 0) ||
                    (!g && this._ts < 0)) &&
                  Pt(this, 1),
                e ||
                  (m && !p) ||
                  !(g || p || h) ||
                  (pe(this, g === _ ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(g < _ && this.timeScale() > 0) &&
                    this._prom()));
          }
        } else
          !(function (t, e, r, i) {
            var s,
              a,
              o,
              u = t.ratio,
              h =
                e < 0 ||
                (!e &&
                  ((!t._start && qt(t) && (t._initted || !Vt(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !Vt(t))))
                  ? 0
                  : 1,
              f = t._rDelay,
              l = 0;
            if (
              (f &&
                t._repeat &&
                ((l = $t(0, t._tDur, e)),
                (a = Ft(l, f)),
                t._yoyo && 1 & a && (h = 1 - h),
                a !== Ft(t._tTime, f) &&
                  ((u = 1 - h),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              h !== u || n || i || t._zTime === b || (!e && t._zTime))
            ) {
              if (!t._initted && Xt(t, e, i, r, l)) return;
              for (
                o = t._zTime,
                  t._zTime = e || (r ? b : 0),
                  r || (r = e && !o),
                  t.ratio = h,
                  t._from && (h = 1 - h),
                  t._time = 0,
                  t._tTime = l,
                  s = t._pt;
                s;

              )
                s.r(h, s.d), (s = s._next);
              e < 0 && Et(t, e, 0, !0),
                t._onUpdate && !r && pe(t, "onUpdate"),
                l && t._repeat && !r && t.parent && pe(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === h &&
                  (h && Pt(t, 1),
                  r ||
                    n ||
                    (pe(t, h ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, r);
        return this;
      }),
      (o.targets = function () {
        return this._targets;
      }),
      (o.invalidate = function (e) {
        return (
          (!e || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(e),
          t.prototype.invalidate.call(this, e)
        );
      }),
      (o.resetTo = function (t, e, r, i, n) {
        p || ke.wake(), this._ts || this.play();
        var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || Ge(this, s),
          (function (t, e, r, i, n, s, a, o) {
            var u,
              h,
              f,
              l,
              c = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!c)
              for (
                c = t._ptCache[e] = [], f = t._ptLookup, l = t._targets.length;
                l--;

              ) {
                if ((u = f[l][e]) && u.d && u.d._pt)
                  for (u = u.d._pt; u && u.p !== e && u.fp !== e; ) u = u._next;
                if (!u)
                  return (
                    (qe = 1),
                    (t.vars[e] = "+=0"),
                    Ge(t, a),
                    (qe = 0),
                    o ? $(e + " not eligible for reset") : 1
                  );
                c.push(u);
              }
            for (l = c.length; l--; )
              ((u = (h = c[l])._pt || h).s =
                (!i && 0 !== i) || n ? u.s + (i || 0) + s * u.c : i),
                (u.c = r - u.s),
                h.e && (h.e = dt(r) + Jt(h.e)),
                h.b && (h.b = u.s + Jt(h.b));
          })(this, t, e, r, i, this._ease(s / this._dur), s, n)
            ? this.resetTo(t, e, r, i, 1)
            : (It(this, 0),
              this.parent ||
                Ct(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (o.kill = function (t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (this._lazy = this._pt = 0), this.parent ? _e(this) : this;
        if (this.timeline) {
          var r = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Xe && !0 !== Xe.vars.overwrite)
              ._first || _e(this),
            this.parent &&
              r !== this.timeline.totalDuration() &&
              jt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
            this
          );
        }
        var i,
          n,
          s,
          a,
          o,
          u,
          h,
          f = this._targets,
          l = t ? re(t) : f,
          c = this._ptLookup,
          p = this._pt;
        if (
          (!e || "all" === e) &&
          (function (t, e) {
            for (
              var r = t.length, i = r === e.length;
              i && r-- && t[r] === e[r];

            );
            return r < 0;
          })(f, l)
        )
          return "all" === e && (this._pt = 0), _e(this);
        for (
          i = this._op = this._op || [],
            "all" !== e &&
              (P(e) &&
                ((o = {}),
                _t(e, function (t) {
                  return (o[t] = 1);
                }),
                (e = o)),
              (e = (function (t, e) {
                var r,
                  i,
                  n,
                  s,
                  a = t[0] ? ct(t[0]).harness : 0,
                  o = a && a.aliases;
                if (!o) return e;
                for (i in ((r = Ot({}, e)), o))
                  if ((i in r))
                    for (n = (s = o[i].split(",")).length; n--; )
                      r[s[n]] = r[i];
                return r;
              })(f, e))),
            h = f.length;
          h--;

        )
          if (~l.indexOf(f[h]))
            for (o in ((n = c[h]),
            "all" === e
              ? ((i[h] = e), (a = n), (s = {}))
              : ((s = i[h] = i[h] || {}), (a = e)),
            a))
              (u = n && n[o]) &&
                (("kill" in u.d && !0 !== u.d.kill(o)) || Dt(this, u, "_pt"),
                delete n[o]),
                "all" !== s && (s[o] = 1);
        return this._initted && !this._pt && p && _e(this), this;
      }),
      (s.to = function (t, e) {
        return new s(t, e, arguments[2]);
      }),
      (s.from = function (t, e) {
        return Ht(1, arguments);
      }),
      (s.delayedCall = function (t, e, r, i) {
        return new s(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: i,
        });
      }),
      (s.fromTo = function (t, e, r) {
        return Ht(2, arguments);
      }),
      (s.set = function (t, e) {
        return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new s(t, e);
      }),
      (s.killTweensOf = function (t, e, r) {
        return a.killTweensOf(t, e, r);
      }),
      s
    );
  })(Ne);
  bt(Je.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    _t("staggerTo,staggerFrom,staggerFromTo", function (t) {
      Je[t] = function () {
        var e = new Ue(),
          r = Kt.call(arguments, 0);
        return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r);
      };
    });
  var Ke = function (t, e, r) {
      return (t[e] = r);
    },
    tr = function (t, e, r) {
      return t[e](r);
    },
    er = function (t, e, r, i) {
      return t[e](i.fp, r);
    },
    rr = function (t, e, r) {
      return t.setAttribute(e, r);
    },
    ir = function (t, e) {
      return S(t[e]) ? tr : z(t[e]) && t.setAttribute ? rr : Ke;
    },
    nr = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    sr = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ar = function (t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            i),
            (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    or = function (t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    ur = function (t, e, r, i) {
      for (var n, s = this._pt; s; )
        (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
    },
    hr = function (t) {
      for (var e, r, i = this._pt; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? Dt(this, i, "_pt")
            : i.dep || (e = 1),
          (i = r);
      return !e;
    },
    fr = function (t, e, r, i) {
      i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
    },
    lr = function (t) {
      for (var e, r, i, n, s = t._pt; s; ) {
        for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
        (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
          (s._next = r) ? (r._prev = s) : (n = s),
          (s = e);
      }
      t._pt = i;
    },
    cr = (function () {
      function t(t, e, r, i, n, s, a, o, u) {
        (this.t = e),
          (this.s = i),
          (this.c = n),
          (this.p = r),
          (this.r = s || nr),
          (this.d = a || this),
          (this.set = o || Ke),
          (this.pr = u || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      return (
        (t.prototype.modifier = function (t, e, r) {
          (this.mSet = this.mSet || this.set),
            (this.set = fr),
            (this.m = t),
            (this.mt = r),
            (this.tween = e);
        }),
        t
      );
    })();
  _t(
    ft +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (it[t] = 1);
    }
  ),
    (G.TweenMax = G.TweenLite = Je),
    (G.TimelineLite = G.TimelineMax = Ue),
    (a = new Ue({
      sortChildren: !1,
      defaults: x,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (T.stringFilter = Me);
  var pr = [],
    _r = {},
    dr = [],
    mr = 0,
    gr = 0,
    vr = function (t) {
      return (_r[t] || dr).map(function (t) {
        return t();
      });
    },
    yr = function () {
      var t = Date.now(),
        e = [];
      t - mr > 2 &&
        (vr("matchMediaInit"),
        pr.forEach(function (t) {
          var r,
            i,
            n,
            s,
            a = t.queries,
            u = t.conditions;
          for (i in a)
            (r = o.matchMedia(a[i]).matches) && (n = 1),
              r !== u[i] && ((u[i] = r), (s = 1));
          s && (t.revert(), n && e.push(t));
        }),
        vr("matchMediaRevert"),
        e.forEach(function (t) {
          return t.onMatch(t, function (e) {
            return t.add(null, e);
          });
        }),
        (mr = t),
        vr("matchMedia"));
    },
    Tr = (function () {
      function t(t, e) {
        (this.selector = e && ie(e)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = gr++),
          t && this.add(t);
      }
      var e = t.prototype;
      return (
        (e.add = function (t, e, r) {
          S(t) && ((r = e), (e = t), (t = S));
          var i = this,
            n = function () {
              var t,
                n = s,
                a = i.selector;
              return (
                n && n !== i && n.data.push(i),
                r && (i.selector = ie(r)),
                (s = i),
                (t = e.apply(i, arguments)),
                S(t) && i._r.push(t),
                (s = n),
                (i.selector = a),
                (i.isReverted = !1),
                t
              );
            };
          return (
            (i.last = n),
            t === S
              ? n(i, function (t) {
                  return i.add(null, t);
                })
              : t
              ? (i[t] = n)
              : n
          );
        }),
        (e.ignore = function (t) {
          var e = s;
          (s = null), t(this), (s = e);
        }),
        (e.getTweens = function () {
          var e = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof t
                ? e.push.apply(e, r.getTweens())
                : r instanceof Je &&
                    !(r.parent && "nested" === r.parent.data) &&
                    e.push(r);
            }),
            e
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (t, e) {
          var r = this;
          if (
            (t
              ? (function () {
                  for (var e, i = r.getTweens(), n = r.data.length; n--; )
                    "isFlip" === (e = r.data[n]).data &&
                      (e.revert(),
                      e.getChildren(!0, !0, !1).forEach(function (t) {
                        return i.splice(i.indexOf(t), 1);
                      }));
                  for (
                    i
                      .map(function (t) {
                        return {
                          g:
                            t._dur ||
                            t._delay ||
                            (t._sat && !t._sat.vars.immediateRender)
                              ? t.globalTime(0)
                              : -1 / 0,
                          t: t,
                        };
                      })
                      .sort(function (t, e) {
                        return e.g - t.g || -1 / 0;
                      })
                      .forEach(function (e) {
                        return e.t.revert(t);
                      }),
                      n = r.data.length;
                    n--;

                  )
                    (e = r.data[n]) instanceof Ue
                      ? "nested" !== e.data &&
                        (e.scrollTrigger && e.scrollTrigger.revert(), e.kill())
                      : !(e instanceof Je) && e.revert && e.revert(t);
                  r._r.forEach(function (e) {
                    return e(t, r);
                  }),
                    (r.isReverted = !0);
                })()
              : this.data.forEach(function (t) {
                  return t.kill && t.kill();
                }),
            this.clear(),
            e)
          )
            for (var i = pr.length; i--; )
              pr[i].id === this.id && pr.splice(i, 1);
        }),
        (e.revert = function (t) {
          this.kill(t || {});
        }),
        t
      );
    })(),
    xr = (function () {
      function t(t) {
        (this.contexts = []), (this.scope = t), s && s.data.push(this);
      }
      var e = t.prototype;
      return (
        (e.add = function (t, e, r) {
          R(t) || (t = { matches: t });
          var i,
            n,
            a,
            u = new Tr(0, r || this.scope),
            h = (u.conditions = {});
          for (n in (s && !u.selector && (u.selector = s.selector),
          this.contexts.push(u),
          (e = u.add("onMatch", e)),
          (u.queries = t),
          t))
            "all" === n
              ? (a = 1)
              : (i = o.matchMedia(t[n])) &&
                (pr.indexOf(u) < 0 && pr.push(u),
                (h[n] = i.matches) && (a = 1),
                i.addListener
                  ? i.addListener(yr)
                  : i.addEventListener("change", yr));
          return (
            a &&
              e(u, function (t) {
                return u.add(null, t);
              }),
            this
          );
        }),
        (e.revert = function (t) {
          this.kill(t || {});
        }),
        (e.kill = function (t) {
          this.contexts.forEach(function (e) {
            return e.kill(t, !0);
          });
        }),
        t
      );
    })(),
    wr = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        e.forEach(function (t) {
          return me(t);
        });
      },
      timeline: function (t) {
        return new Ue(t);
      },
      getTweensOf: function (t, e) {
        return a.getTweensOf(t, e);
      },
      getProperty: function (t, e, r, i) {
        P(t) && (t = re(t)[0]);
        var n = ct(t || {}).get,
          s = r ? wt : xt;
        return (
          "native" === r && (r = ""),
          t
            ? e
              ? s(((at[e] && at[e].get) || n)(t, e, r, i))
              : function (e, r, i) {
                  return s(((at[e] && at[e].get) || n)(t, e, r, i));
                }
            : t
        );
      },
      quickSetter: function (t, e, r) {
        if ((t = re(t)).length > 1) {
          var i = t.map(function (t) {
              return Mr.quickSetter(t, e, r);
            }),
            n = i.length;
          return function (t) {
            for (var e = n; e--; ) i[e](t);
          };
        }
        t = t[0] || {};
        var s = at[e],
          a = ct(t),
          o = (a.harness && (a.harness.aliases || {})[e]) || e,
          u = s
            ? function (e) {
                var i = new s();
                (c._pt = 0),
                  i.init(t, r ? e + r : e, c, 0, [t]),
                  i.render(1, i),
                  c._pt && or(1, c);
              }
            : a.set(t, o);
        return s
          ? u
          : function (e) {
              return u(t, o, r ? e + r : e, a, 1);
            };
      },
      quickTo: function (t, e, r) {
        var i,
          n = Mr.to(
            t,
            Ot((((i = {})[e] = "+=0.1"), (i.paused = !0), i), r || {})
          ),
          s = function (t, r, i) {
            return n.resetTo(e, t, r, i);
          };
        return (s.tween = n), s;
      },
      isTweening: function (t) {
        return a.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Re(t.ease, x.ease)), Mt(x, t || {});
      },
      config: function (t) {
        return Mt(T, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          r = t.effect,
          i = t.plugins,
          n = t.defaults,
          s = t.extendTimeline;
        (i || "").split(",").forEach(function (t) {
          return (
            t && !at[t] && !G[t] && $(e + " effect requires " + t + " plugin.")
          );
        }),
          (ot[e] = function (t, e, i) {
            return r(re(t), bt(e || {}, n), i);
          }),
          s &&
            (Ue.prototype[e] = function (t, r, i) {
              return this.add(ot[e](t, R(r) ? r : (i = r) && {}, this), i);
            });
      },
      registerEase: function (t, e) {
        Ce[t] = Re(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Re(t, e) : Ce;
      },
      getById: function (t) {
        return a.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var r,
          i,
          n = new Ue(t);
        for (
          n.smoothChildTiming = F(t.smoothChildTiming),
            a.remove(n),
            n._dp = 0,
            n._time = n._tTime = a._time,
            r = a._first;
          r;

        )
          (i = r._next),
            (!e &&
              !r._dur &&
              r instanceof Je &&
              r.vars.onComplete === r._targets[0]) ||
              Nt(n, r, r._start - r._delay),
            (r = i);
        return Nt(a, n, 0), n;
      },
      context: function (t, e) {
        return t ? new Tr(t, e) : s;
      },
      matchMedia: function (t) {
        return new xr(t);
      },
      matchMediaRefresh: function () {
        return (
          pr.forEach(function (t) {
            var e,
              r,
              i = t.conditions;
            for (r in i) i[r] && ((i[r] = !1), (e = 1));
            e && t.revert();
          }) || yr()
        );
      },
      addEventListener: function (t, e) {
        var r = _r[t] || (_r[t] = []);
        ~r.indexOf(e) || r.push(e);
      },
      removeEventListener: function (t, e) {
        var r = _r[t],
          i = r && r.indexOf(e);
        i >= 0 && r.splice(i, 1);
      },
      utils: {
        wrap: function t(e, r, i) {
          var n = r - e;
          return Y(e)
            ? he(e, t(0, e.length), r)
            : Zt(i, function (t) {
                return ((n + ((t - e) % n)) % n) + e;
              });
        },
        wrapYoyo: function t(e, r, i) {
          var n = r - e,
            s = 2 * n;
          return Y(e)
            ? he(e, t(0, e.length - 1), r)
            : Zt(i, function (t) {
                return e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t);
              });
        },
        distribute: se,
        random: ue,
        snap: oe,
        normalize: function (t, e, r) {
          return le(t, e, 0, 1, r);
        },
        getUnit: Jt,
        clamp: function (t, e, r) {
          return Zt(r, function (r) {
            return $t(t, e, r);
          });
        },
        splitColor: Te,
        toArray: re,
        selector: ie,
        mapRange: le,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (r) {
            return t(parseFloat(r)) + (e || Jt(r));
          };
        },
        interpolate: function t(e, r, i, n) {
          var s = isNaN(e + r)
            ? 0
            : function (t) {
                return (1 - t) * e + t * r;
              };
          if (!s) {
            var a,
              o,
              u,
              h,
              f,
              l = P(e),
              c = {};
            if ((!0 === i && (n = 1) && (i = null), l))
              (e = { p: e }), (r = { p: r });
            else if (Y(e) && !Y(r)) {
              for (u = [], h = e.length, f = h - 2, o = 1; o < h; o++)
                u.push(t(e[o - 1], e[o]));
              h--,
                (s = function (t) {
                  t *= h;
                  var e = Math.min(f, ~~t);
                  return u[e](t - e);
                }),
                (i = r);
            } else n || (e = Ot(Y(e) ? [] : {}, e));
            if (!u) {
              for (a in r) je.call(c, e, a, "get", r[a]);
              s = function (t) {
                return or(t, c) || (l ? e.p : e);
              };
            }
          }
          return Zt(i, s);
        },
        shuffle: ne,
      },
      install: H,
      effects: ot,
      ticker: ke,
      updateRoot: Ue.updateRoot,
      plugins: at,
      globalTimeline: a,
      core: {
        PropTween: cr,
        globals: J,
        Tween: Je,
        Timeline: Ue,
        Animation: Ne,
        getCache: ct,
        _removeLinkedListItem: Dt,
        reverting: function () {
          return n;
        },
        context: function (t) {
          return t && s && (s.data.push(t), (t._ctx = s)), s;
        },
        suppressOverwrites: function (t) {
          return (i = t);
        },
      },
    };
  _t("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (wr[t] = Je[t]);
  }),
    ke.add(Ue.updateRoot),
    (c = wr.to({}, { duration: 0 }));
  var br = function (t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
        r = r._next;
      return r;
    },
    Or = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, r, i) {
          i._onInit = function (t) {
            var i, n;
            if (
              (P(r) &&
                ((i = {}),
                _t(r, function (t) {
                  return (i[t] = 1);
                }),
                (r = i)),
              e)
            ) {
              for (n in ((i = {}), r)) i[n] = e(r[n]);
              r = i;
            }
            !(function (t, e) {
              var r,
                i,
                n,
                s = t._targets;
              for (r in e)
                for (i = s.length; i--; )
                  (n = t._ptLookup[i][r]) &&
                    (n = n.d) &&
                    (n._pt && (n = br(n, r)),
                    n && n.modifier && n.modifier(e[r], t, s[i], r));
            })(t, r);
          };
        },
      };
    },
    Mr =
      wr.registerPlugin(
        {
          name: "attr",
          init: function (t, e, r, i, n) {
            var s, a, o;
            for (s in ((this.tween = r), e))
              (o = t.getAttribute(s) || ""),
                ((a = this.add(
                  t,
                  "setAttribute",
                  (o || 0) + "",
                  e[s],
                  i,
                  n,
                  0,
                  0,
                  s
                )).op = s),
                (a.b = o),
                this._props.push(s);
          },
          render: function (t, e) {
            for (var r = e._pt; r; )
              n ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var r = e.length; r--; )
              this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
          },
        },
        Or("roundProps", ae),
        Or("modifiers"),
        Or("snap", oe)
      ) || wr;
  (Je.version = Ue.version = Mr.version = "3.12.5"), (f = 1), B() && Ae();
  var kr,
    Ar,
    Cr,
    Dr,
    Pr,
    Sr,
    Er,
    zr,
    Rr = Ce.Power0,
    Fr = Ce.Power1,
    Br = Ce.Power2,
    Lr = Ce.Power3,
    Ir = Ce.Power4,
    Yr = Ce.Linear,
    Nr = Ce.Quad,
    Ur = Ce.Cubic,
    Xr = Ce.Quart,
    qr = Ce.Quint,
    Vr = Ce.Strong,
    jr = Ce.Elastic,
    Qr = Ce.Back,
    Gr = Ce.SteppedEase,
    Wr = Ce.Bounce,
    Hr = Ce.Sine,
    Zr = Ce.Expo,
    $r = Ce.Circ,
    Jr = {},
    Kr = 180 / Math.PI,
    ti = Math.PI / 180,
    ei = Math.atan2,
    ri = /([A-Z])/g,
    ii = /(left|right|width|margin|padding|x)/i,
    ni = /[\s,\(]\S/,
    si = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    ai = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    oi = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    },
    ui = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    },
    hi = function (t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    fi = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    li = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    ci = function (t, e, r) {
      return (t.style[e] = r);
    },
    pi = function (t, e, r) {
      return t.style.setProperty(e, r);
    },
    _i = function (t, e, r) {
      return (t._gsap[e] = r);
    },
    di = function (t, e, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    mi = function (t, e, r, i, n) {
      var s = t._gsap;
      (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
    },
    gi = function (t, e, r, i, n) {
      var s = t._gsap;
      (s[e] = r), s.renderTransform(n, s);
    },
    vi = "transform",
    yi = vi + "Origin",
    Ti = function t(e, r) {
      var i = this,
        n = this.target,
        s = n.style,
        a = n._gsap;
      if (e in Jr && s) {
        if (((this.tfm = this.tfm || {}), "transform" === e))
          return si.transform.split(",").forEach(function (e) {
            return t.call(i, e, r);
          });
        if (
          (~(e = si[e] || e).indexOf(",")
            ? e.split(",").forEach(function (t) {
                return (i.tfm[t] = Ii(n, t));
              })
            : (this.tfm[e] = a.x ? a[e] : Ii(n, e)),
          e === yi && (this.tfm.zOrigin = a.zOrigin),
          this.props.indexOf(vi) >= 0)
        )
          return;
        a.svg &&
          ((this.svgo = n.getAttribute("data-svg-origin")),
          this.props.push(yi, r, "")),
          (e = vi);
      }
      (s || r) && this.props.push(e, r, s[e]);
    },
    xi = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    wi = function () {
      var t,
        e,
        r = this.props,
        i = this.target,
        n = i.style,
        s = i._gsap;
      for (t = 0; t < r.length; t += 3)
        r[t + 1]
          ? (i[r[t]] = r[t + 2])
          : r[t + 2]
          ? (n[r[t]] = r[t + 2])
          : n.removeProperty(
              "--" === r[t].substr(0, 2)
                ? r[t]
                : r[t].replace(ri, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (e in this.tfm) s[e] = this.tfm[e];
        s.svg &&
          (s.renderTransform(),
          i.setAttribute("data-svg-origin", this.svgo || "")),
          ((t = Er()) && t.isStart) ||
            n[vi] ||
            (xi(n),
            s.zOrigin &&
              n[yi] &&
              ((n[yi] += " " + s.zOrigin + "px"),
              (s.zOrigin = 0),
              s.renderTransform()),
            (s.uncache = 1));
      }
    },
    bi = function (t, e) {
      var r = { target: t, props: [], revert: wi, save: Ti };
      return (
        t._gsap || Mr.core.getCache(t),
        e &&
          e.split(",").forEach(function (t) {
            return r.save(t);
          }),
        r
      );
    },
    Oi = function (t, e) {
      var r = Ar.createElementNS
        ? Ar.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : Ar.createElement(t);
      return r && r.style ? r : Ar.createElement(t);
    },
    Mi = function t(e, r, i) {
      var n = getComputedStyle(e);
      return (
        n[r] ||
        n.getPropertyValue(r.replace(ri, "-$1").toLowerCase()) ||
        n.getPropertyValue(r) ||
        (!i && t(e, Ai(r) || r, 1)) ||
        ""
      );
    },
    ki = "O,Moz,ms,Ms,Webkit".split(","),
    Ai = function (t, e, r) {
      var i = (e || Pr).style,
        n = 5;
      if (t in i && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(ki[n] + t in i);

      );
      return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? ki[n] : "") + t;
    },
    Ci = function () {
      "undefined" != typeof window &&
        window.document &&
        ((kr = window),
        (Ar = kr.document),
        (Cr = Ar.documentElement),
        (Pr = Oi("div") || { style: {} }),
        Oi("div"),
        (vi = Ai(vi)),
        (yi = vi + "Origin"),
        (Pr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (zr = !!Ai("perspective")),
        (Er = Mr.core.reverting),
        (Dr = 1));
    },
    Di = function t(e) {
      var r,
        i = Oi(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        n = this.parentNode,
        s = this.nextSibling,
        a = this.style.cssText;
      if (
        (Cr.appendChild(i),
        i.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (r = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = t);
        } catch (t) {}
      else this._gsapBBox && (r = this._gsapBBox());
      return (
        n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
        Cr.removeChild(i),
        (this.style.cssText = a),
        r
      );
    },
    Pi = function (t, e) {
      for (var r = e.length; r--; )
        if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    },
    Si = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (r) {
        e = Di.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === Di ||
          (e = Di.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +Pi(t, ["x", "cx", "x1"]) || 0,
              y: +Pi(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    Ei = function (t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Si(t));
    },
    zi = function (t, e) {
      if (e) {
        var r,
          i = t.style;
        e in Jr && e !== yi && (e = vi),
          i.removeProperty
            ? (("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              i.removeProperty(
                "--" === r ? e : e.replace(ri, "-$1").toLowerCase()
              ))
            : i.removeAttribute(e);
      }
    },
    Ri = function (t, e, r, i, n, s) {
      var a = new cr(t._pt, e, r, 0, 1, s ? li : fi);
      return (t._pt = a), (a.b = i), (a.e = n), t._props.push(r), a;
    },
    Fi = { deg: 1, rad: 1, turn: 1 },
    Bi = { grid: 1, flex: 1 },
    Li = function t(e, r, i, n) {
      var s,
        a,
        o,
        u,
        h = parseFloat(i) || 0,
        f = (i + "").trim().substr((h + "").length) || "px",
        l = Pr.style,
        c = ii.test(r),
        p = "svg" === e.tagName.toLowerCase(),
        _ = (p ? "client" : "offset") + (c ? "Width" : "Height"),
        d = 100,
        m = "px" === n,
        g = "%" === n;
      if (n === f || !h || Fi[n] || Fi[f]) return h;
      if (
        ("px" !== f && !m && (h = t(e, r, i, "px")),
        (u = e.getCTM && Ei(e)),
        (g || "%" === f) && (Jr[r] || ~r.indexOf("adius")))
      )
        return (
          (s = u ? e.getBBox()[c ? "width" : "height"] : e[_]),
          dt(g ? (h / s) * d : (h / 100) * s)
        );
      if (
        ((l[c ? "width" : "height"] = d + (m ? f : n)),
        (a =
          ~r.indexOf("adius") || ("em" === n && e.appendChild && !p)
            ? e
            : e.parentNode),
        u && (a = (e.ownerSVGElement || {}).parentNode),
        (a && a !== Ar && a.appendChild) || (a = Ar.body),
        (o = a._gsap) && g && o.width && c && o.time === ke.time && !o.uncache)
      )
        return dt((h / o.width) * d);
      if (!g || ("height" !== r && "width" !== r))
        (g || "%" === f) &&
          !Bi[Mi(a, "display")] &&
          (l.position = Mi(e, "position")),
          a === e && (l.position = "static"),
          a.appendChild(Pr),
          (s = Pr[_]),
          a.removeChild(Pr),
          (l.position = "absolute");
      else {
        var v = e.style[r];
        (e.style[r] = d + n), (s = e[_]), v ? (e.style[r] = v) : zi(e, r);
      }
      return (
        c && g && (((o = ct(a)).time = ke.time), (o.width = a[_])),
        dt(m ? (s * h) / d : s && h ? (d / s) * h : 0)
      );
    },
    Ii = function (t, e, r, i) {
      var n;
      return (
        Dr || Ci(),
        e in si &&
          "transform" !== e &&
          ~(e = si[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        Jr[e] && "transform" !== e
          ? ((n = Hi(t, i)),
            (n =
              "transformOrigin" !== e
                ? n[e]
                : n.svg
                ? n.origin
                : Zi(Mi(t, yi)) + " " + n.zOrigin + "px"))
          : (!(n = t.style[e]) ||
              "auto" === n ||
              i ||
              ~(n + "").indexOf("calc(")) &&
            (n =
              (Xi[e] && Xi[e](t, e, r)) ||
              Mi(t, e) ||
              pt(t, e) ||
              ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? Li(t, e, n, r) + r : n
      );
    },
    Yi = function (t, e, r, i) {
      if (!r || "none" === r) {
        var n = Ai(e, t, 1),
          s = n && Mi(t, n, 1);
        s && s !== r
          ? ((e = n), (r = s))
          : "borderColor" === e && (r = Mi(t, "borderTopColor"));
      }
      var a,
        o,
        u,
        h,
        f,
        l,
        c,
        p,
        _,
        d,
        m,
        g = new cr(this._pt, t.style, e, 0, 1, ar),
        v = 0,
        y = 0;
      if (
        ((g.b = r),
        (g.e = i),
        (r += ""),
        "auto" === (i += "") &&
          ((l = t.style[e]),
          (t.style[e] = i),
          (i = Mi(t, e) || i),
          l ? (t.style[e] = l) : zi(t, e)),
        Me((a = [r, i])),
        (i = a[1]),
        (u = (r = a[0]).match(X) || []),
        (i.match(X) || []).length)
      ) {
        for (; (o = X.exec(i)); )
          (c = o[0]),
            (_ = i.substring(v, o.index)),
            f
              ? (f = (f + 1) % 5)
              : ("rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5)) ||
                (f = 1),
            c !== (l = u[y++] || "") &&
              ((h = parseFloat(l) || 0),
              (m = l.substr((h + "").length)),
              "=" === c.charAt(1) && (c = gt(h, c) + m),
              (p = parseFloat(c)),
              (d = c.substr((p + "").length)),
              (v = X.lastIndex - d.length),
              d ||
                ((d = d || T.units[e] || m),
                v === i.length && ((i += d), (g.e += d))),
              m !== d && (h = Li(t, e, l, d) || 0),
              (g._pt = {
                _next: g._pt,
                p: _ || 1 === y ? _ : ",",
                s: h,
                c: p - h,
                m: (f && f < 4) || "zIndex" === e ? Math.round : 0,
              }));
        g.c = v < i.length ? i.substring(v, i.length) : "";
      } else g.r = "display" === e && "none" === i ? li : fi;
      return V.test(i) && (g.e = 0), (this._pt = g), g;
    },
    Ni = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Ui = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r,
          i,
          n,
          s = e.t,
          a = s.style,
          o = e.u,
          u = s._gsap;
        if ("all" === o || !0 === o) (a.cssText = ""), (i = 1);
        else
          for (n = (o = o.split(",")).length; --n > -1; )
            (r = o[n]),
              Jr[r] && ((i = 1), (r = "transformOrigin" === r ? yi : vi)),
              zi(s, r);
        i &&
          (zi(s, vi),
          u &&
            (u.svg && s.removeAttribute("transform"),
            Hi(s, 1),
            (u.uncache = 1),
            xi(a)));
      }
    },
    Xi = {
      clearProps: function (t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var s = (t._pt = new cr(t._pt, e, r, 0, 0, Ui));
          return (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1;
        }
      },
    },
    qi = [1, 0, 0, 1, 0, 0],
    Vi = {},
    ji = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    Qi = function (t) {
      var e = Mi(t, vi);
      return ji(e) ? qi : e.substr(7).match(U).map(dt);
    },
    Gi = function (t, e) {
      var r,
        i,
        n,
        s,
        a = t._gsap || ct(t),
        o = t.style,
        u = Qi(t);
      return a.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (u = [
            (n = t.transform.baseVal.consolidate().matrix).a,
            n.b,
            n.c,
            n.d,
            n.e,
            n.f,
          ]).join(",")
          ? qi
          : u
        : (u !== qi ||
            t.offsetParent ||
            t === Cr ||
            a.svg ||
            ((n = o.display),
            (o.display = "block"),
            ((r = t.parentNode) && t.offsetParent) ||
              ((s = 1), (i = t.nextElementSibling), Cr.appendChild(t)),
            (u = Qi(t)),
            n ? (o.display = n) : zi(t, "display"),
            s &&
              (i
                ? r.insertBefore(t, i)
                : r
                ? r.appendChild(t)
                : Cr.removeChild(t))),
          e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    Wi = function (t, e, r, i, n, s) {
      var a,
        o,
        u,
        h = t._gsap,
        f = n || Gi(t, !0),
        l = h.xOrigin || 0,
        c = h.yOrigin || 0,
        p = h.xOffset || 0,
        _ = h.yOffset || 0,
        d = f[0],
        m = f[1],
        g = f[2],
        v = f[3],
        y = f[4],
        T = f[5],
        x = e.split(" "),
        w = parseFloat(x[0]) || 0,
        b = parseFloat(x[1]) || 0;
      r
        ? f !== qi &&
          (o = d * v - m * g) &&
          ((u = w * (-m / o) + b * (d / o) - (d * T - m * y) / o),
          (w = w * (v / o) + b * (-g / o) + (g * T - v * y) / o),
          (b = u))
        : ((w = (a = Si(t)).x + (~x[0].indexOf("%") ? (w / 100) * a.width : w)),
          (b =
            a.y + (~(x[1] || x[0]).indexOf("%") ? (b / 100) * a.height : b))),
        i || (!1 !== i && h.smooth)
          ? ((y = w - l),
            (T = b - c),
            (h.xOffset = p + (y * d + T * g) - y),
            (h.yOffset = _ + (y * m + T * v) - T))
          : (h.xOffset = h.yOffset = 0),
        (h.xOrigin = w),
        (h.yOrigin = b),
        (h.smooth = !!i),
        (h.origin = e),
        (h.originIsAbsolute = !!r),
        (t.style[yi] = "0px 0px"),
        s &&
          (Ri(s, h, "xOrigin", l, w),
          Ri(s, h, "yOrigin", c, b),
          Ri(s, h, "xOffset", p, h.xOffset),
          Ri(s, h, "yOffset", _, h.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + b);
    },
    Hi = function (t, e) {
      var r = t._gsap || new Ye(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        s,
        a,
        o,
        u,
        h,
        f,
        l,
        c,
        p,
        _,
        d,
        m,
        g,
        v,
        y,
        x,
        w,
        b,
        O,
        M,
        k,
        A,
        C,
        D,
        P,
        S,
        E,
        z,
        R,
        F,
        B = t.style,
        L = r.scaleX < 0,
        I = "px",
        Y = "deg",
        N = getComputedStyle(t),
        U = Mi(t, yi) || "0";
      return (
        (i = n = s = u = h = f = l = c = p = 0),
        (a = o = 1),
        (r.svg = !(!t.getCTM || !Ei(t))),
        N.translate &&
          (("none" === N.translate &&
            "none" === N.scale &&
            "none" === N.rotate) ||
            (B[vi] =
              ("none" !== N.translate
                ? "translate3d(" +
                  (N.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== N.rotate ? "rotate(" + N.rotate + ") " : "") +
              ("none" !== N.scale
                ? "scale(" + N.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== N[vi] ? N[vi] : "")),
          (B.scale = B.rotate = B.translate = "none")),
        (m = Gi(t, r.svg)),
        r.svg &&
          (r.uncache
            ? ((C = t.getBBox()),
              (U = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px"),
              (A = ""))
            : (A = !e && t.getAttribute("data-svg-origin")),
          Wi(t, A || U, !!A || r.originIsAbsolute, !1 !== r.smooth, m)),
        (_ = r.xOrigin || 0),
        (d = r.yOrigin || 0),
        m !== qi &&
          ((x = m[0]),
          (w = m[1]),
          (b = m[2]),
          (O = m[3]),
          (i = M = m[4]),
          (n = k = m[5]),
          6 === m.length
            ? ((a = Math.sqrt(x * x + w * w)),
              (o = Math.sqrt(O * O + b * b)),
              (u = x || w ? ei(w, x) * Kr : 0),
              (l = b || O ? ei(b, O) * Kr + u : 0) &&
                (o *= Math.abs(Math.cos(l * ti))),
              r.svg && ((i -= _ - (_ * x + d * b)), (n -= d - (_ * w + d * O))))
            : ((F = m[6]),
              (z = m[7]),
              (P = m[8]),
              (S = m[9]),
              (E = m[10]),
              (R = m[11]),
              (i = m[12]),
              (n = m[13]),
              (s = m[14]),
              (h = (g = ei(F, E)) * Kr),
              g &&
                ((A = M * (v = Math.cos(-g)) + P * (y = Math.sin(-g))),
                (C = k * v + S * y),
                (D = F * v + E * y),
                (P = M * -y + P * v),
                (S = k * -y + S * v),
                (E = F * -y + E * v),
                (R = z * -y + R * v),
                (M = A),
                (k = C),
                (F = D)),
              (f = (g = ei(-b, E)) * Kr),
              g &&
                ((v = Math.cos(-g)),
                (R = O * (y = Math.sin(-g)) + R * v),
                (x = A = x * v - P * y),
                (w = C = w * v - S * y),
                (b = D = b * v - E * y)),
              (u = (g = ei(w, x)) * Kr),
              g &&
                ((A = x * (v = Math.cos(g)) + w * (y = Math.sin(g))),
                (C = M * v + k * y),
                (w = w * v - x * y),
                (k = k * v - M * y),
                (x = A),
                (M = C)),
              h &&
                Math.abs(h) + Math.abs(u) > 359.9 &&
                ((h = u = 0), (f = 180 - f)),
              (a = dt(Math.sqrt(x * x + w * w + b * b))),
              (o = dt(Math.sqrt(k * k + F * F))),
              (g = ei(M, k)),
              (l = Math.abs(g) > 2e-4 ? g * Kr : 0),
              (p = R ? 1 / (R < 0 ? -R : R) : 0)),
          r.svg &&
            ((A = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !ji(Mi(t, vi))),
            A && t.setAttribute("transform", A))),
        Math.abs(l) > 90 &&
          Math.abs(l) < 270 &&
          (L
            ? ((a *= -1),
              (l += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (l += l <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          i -
          ((r.xPercent =
            i &&
            ((!e && r.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          I),
        (r.y =
          n -
          ((r.yPercent =
            n &&
            ((!e && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          I),
        (r.z = s + I),
        (r.scaleX = dt(a)),
        (r.scaleY = dt(o)),
        (r.rotation = dt(u) + Y),
        (r.rotationX = dt(h) + Y),
        (r.rotationY = dt(f) + Y),
        (r.skewX = l + Y),
        (r.skewY = c + Y),
        (r.transformPerspective = p + I),
        (r.zOrigin = parseFloat(U.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
          (B[yi] = Zi(U)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = T.force3D),
        (r.renderTransform = r.svg ? nn : zr ? rn : Ji),
        (r.uncache = 0),
        r
      );
    },
    Zi = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    $i = function (t, e, r) {
      var i = Jt(e);
      return dt(parseFloat(e) + parseFloat(Li(t, "x", r + "px", i))) + i;
    },
    Ji = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        rn(t, e);
    },
    Ki = "0deg",
    tn = "0px",
    en = ") ",
    rn = function (t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        s = r.x,
        a = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        f = r.rotationX,
        l = r.skewX,
        c = r.skewY,
        p = r.scaleX,
        _ = r.scaleY,
        d = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (f !== Ki || h !== Ki)) {
        var x,
          w = parseFloat(h) * ti,
          b = Math.sin(w),
          O = Math.cos(w);
        (w = parseFloat(f) * ti),
          (x = Math.cos(w)),
          (s = $i(g, s, b * x * -v)),
          (a = $i(g, a, -Math.sin(w) * -v)),
          (o = $i(g, o, O * x * -v + v));
      }
      d !== tn && (y += "perspective(" + d + en),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (T || s !== tn || a !== tn || o !== tn) &&
          (y +=
            o !== tn || T
              ? "translate3d(" + s + ", " + a + ", " + o + ") "
              : "translate(" + s + ", " + a + en),
        u !== Ki && (y += "rotate(" + u + en),
        h !== Ki && (y += "rotateY(" + h + en),
        f !== Ki && (y += "rotateX(" + f + en),
        (l === Ki && c === Ki) || (y += "skew(" + l + ", " + c + en),
        (1 === p && 1 === _) || (y += "scale(" + p + ", " + _ + en),
        (g.style[vi] = y || "translate(0, 0)");
    },
    nn = function (t, e) {
      var r,
        i,
        n,
        s,
        a,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        f = o.x,
        l = o.y,
        c = o.rotation,
        p = o.skewX,
        _ = o.skewY,
        d = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        x = o.yOffset,
        w = o.forceCSS,
        b = parseFloat(f),
        O = parseFloat(l);
      (c = parseFloat(c)),
        (p = parseFloat(p)),
        (_ = parseFloat(_)) && ((p += _ = parseFloat(_)), (c += _)),
        c || p
          ? ((c *= ti),
            (p *= ti),
            (r = Math.cos(c) * d),
            (i = Math.sin(c) * d),
            (n = Math.sin(c - p) * -m),
            (s = Math.cos(c - p) * m),
            p &&
              ((_ *= ti),
              (a = Math.tan(p - _)),
              (n *= a = Math.sqrt(1 + a * a)),
              (s *= a),
              _ &&
                ((a = Math.tan(_)), (r *= a = Math.sqrt(1 + a * a)), (i *= a))),
            (r = dt(r)),
            (i = dt(i)),
            (n = dt(n)),
            (s = dt(s)))
          : ((r = d), (s = m), (i = n = 0)),
        ((b && !~(f + "").indexOf("px")) || (O && !~(l + "").indexOf("px"))) &&
          ((b = Li(g, "x", f, "px")), (O = Li(g, "y", l, "px"))),
        (v || y || T || x) &&
          ((b = dt(b + v - (v * r + y * n) + T)),
          (O = dt(O + y - (v * i + y * s) + x))),
        (u || h) &&
          ((a = g.getBBox()),
          (b = dt(b + (u / 100) * a.width)),
          (O = dt(O + (h / 100) * a.height))),
        (a =
          "matrix(" +
          r +
          "," +
          i +
          "," +
          n +
          "," +
          s +
          "," +
          b +
          "," +
          O +
          ")"),
        g.setAttribute("transform", a),
        w && (g.style[vi] = a);
    },
    sn = function (t, e, r, i, n) {
      var s,
        a,
        o = 360,
        u = P(n),
        h = parseFloat(n) * (u && ~n.indexOf("rad") ? Kr : 1) - i,
        f = i + h + "deg";
      return (
        u &&
          ("short" === (s = n.split("_")[1]) &&
            (h %= o) !== h % 180 &&
            (h += h < 0 ? o : -360),
          "cw" === s && h < 0
            ? (h = ((h + 36e9) % o) - ~~(h / o) * o)
            : "ccw" === s && h > 0 && (h = ((h - 36e9) % o) - ~~(h / o) * o)),
        (t._pt = a = new cr(t._pt, e, r, i, h, oi)),
        (a.e = f),
        (a.u = "deg"),
        t._props.push(r),
        a
      );
    },
    an = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    on = function (t, e, r) {
      var i,
        n,
        s,
        a,
        o,
        u,
        h,
        f = an({}, r._gsap),
        l = r.style;
      for (n in (f.svg
        ? ((s = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (l[vi] = e),
          (i = Hi(r, 1)),
          zi(r, vi),
          r.setAttribute("transform", s))
        : ((s = getComputedStyle(r)[vi]),
          (l[vi] = e),
          (i = Hi(r, 1)),
          (l[vi] = s)),
      Jr))
        (s = f[n]) !== (a = i[n]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
          ((o = Jt(s) !== (h = Jt(a)) ? Li(r, n, s, h) : parseFloat(s)),
          (u = parseFloat(a)),
          (t._pt = new cr(t._pt, i, n, o, u - o, ai)),
          (t._pt.u = h || 0),
          t._props.push(n));
      an(i, f);
    };
  _t("padding,margin,Width,Radius", function (t, e) {
    var r = "Top",
      i = "Right",
      n = "Bottom",
      s = "Left",
      a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map(function (
        r
      ) {
        return e < 2 ? t + r : "border" + r + t;
      });
    Xi[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
      var s, o;
      if (arguments.length < 4)
        return (
          (s = a.map(function (e) {
            return Ii(t, e, r);
          })),
          5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
        );
      (s = (i + "").split(" ")),
        (o = {}),
        a.forEach(function (t, e) {
          return (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
        }),
        t.init(e, o, n);
    };
  });
  var un,
    hn,
    fn,
    ln = {
      name: "css",
      register: Ci,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, r, i, n) {
        var s,
          a,
          o,
          u,
          h,
          f,
          l,
          c,
          p,
          _,
          d,
          m,
          g,
          v,
          y,
          x,
          w,
          b,
          O,
          M,
          k = this._props,
          A = t.style,
          C = r.vars.startAt;
        for (l in (Dr || Ci(),
        (this.styles = this.styles || bi(t)),
        (x = this.styles.props),
        (this.tween = r),
        e))
          if (
            "autoRound" !== l &&
            ((a = e[l]), !at[l] || !Qe(l, e, r, i, t, n))
          )
            if (
              ((h = typeof a),
              (f = Xi[l]),
              "function" === h && (h = typeof (a = a.call(r, i, t, n))),
              "string" === h && ~a.indexOf("random(") && (a = fe(a)),
              f)
            )
              f(this, t, l, a, r) && (y = 1);
            else if ("--" === l.substr(0, 2))
              (s = (getComputedStyle(t).getPropertyValue(l) + "").trim()),
                (a += ""),
                (be.lastIndex = 0),
                be.test(s) || ((c = Jt(s)), (p = Jt(a))),
                p ? c !== p && (s = Li(t, l, s, p) + p) : c && (a += c),
                this.add(A, "setProperty", s, a, i, n, 0, 0, l),
                k.push(l),
                x.push(l, 0, A[l]);
            else if ("undefined" !== h) {
              if (
                (C && l in C
                  ? ((s =
                      "function" == typeof C[l] ? C[l].call(r, i, t, n) : C[l]),
                    P(s) && ~s.indexOf("random(") && (s = fe(s)),
                    Jt(s + "") ||
                      "auto" === s ||
                      (s += T.units[l] || Jt(Ii(t, l)) || ""),
                    "=" === (s + "").charAt(1) && (s = Ii(t, l)))
                  : (s = Ii(t, l)),
                (u = parseFloat(s)),
                (_ = "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) &&
                  (a = a.substr(2)),
                (o = parseFloat(a)),
                l in si &&
                  ("autoAlpha" === l &&
                    (1 === u &&
                      "hidden" === Ii(t, "visibility") &&
                      o &&
                      (u = 0),
                    x.push("visibility", 0, A.visibility),
                    Ri(
                      this,
                      A,
                      "visibility",
                      u ? "inherit" : "hidden",
                      o ? "inherit" : "hidden",
                      !o
                    )),
                  "scale" !== l &&
                    "transform" !== l &&
                    ~(l = si[l]).indexOf(",") &&
                    (l = l.split(",")[0])),
                (d = l in Jr))
              )
                if (
                  (this.styles.save(l),
                  m ||
                    (((g = t._gsap).renderTransform && !e.parseTransform) ||
                      Hi(t, e.parseTransform),
                    (v = !1 !== e.smoothOrigin && g.smooth),
                    ((m = this._pt =
                      new cr(
                        this._pt,
                        A,
                        vi,
                        0,
                        1,
                        g.renderTransform,
                        g,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === l)
                )
                  (this._pt = new cr(
                    this._pt,
                    g,
                    "scaleY",
                    g.scaleY,
                    (_ ? gt(g.scaleY, _ + o) : o) - g.scaleY || 0,
                    ai
                  )),
                    (this._pt.u = 0),
                    k.push("scaleY", l),
                    (l += "X");
                else {
                  if ("transformOrigin" === l) {
                    x.push(yi, 0, A[yi]),
                      (b = void 0),
                      (O = void 0),
                      (M = void 0),
                      (b = (w = a).split(" ")),
                      (O = b[0]),
                      (M = b[1] || "50%"),
                      ("top" !== O &&
                        "bottom" !== O &&
                        "left" !== M &&
                        "right" !== M) ||
                        ((w = O), (O = M), (M = w)),
                      (b[0] = Ni[O] || O),
                      (b[1] = Ni[M] || M),
                      (a = b.join(" ")),
                      g.svg
                        ? Wi(t, a, 0, v, 0, this)
                        : ((p = parseFloat(a.split(" ")[2]) || 0) !==
                            g.zOrigin && Ri(this, g, "zOrigin", g.zOrigin, p),
                          Ri(this, A, l, Zi(s), Zi(a)));
                    continue;
                  }
                  if ("svgOrigin" === l) {
                    Wi(t, a, 1, v, 0, this);
                    continue;
                  }
                  if (l in Vi) {
                    sn(this, g, l, u, _ ? gt(u, _ + a) : a);
                    continue;
                  }
                  if ("smoothOrigin" === l) {
                    Ri(this, g, "smooth", g.smooth, a);
                    continue;
                  }
                  if ("force3D" === l) {
                    g[l] = a;
                    continue;
                  }
                  if ("transform" === l) {
                    on(this, a, t);
                    continue;
                  }
                }
              else l in A || (l = Ai(l) || l);
              if (
                d ||
                ((o || 0 === o) && (u || 0 === u) && !ni.test(a) && l in A)
              )
                o || (o = 0),
                  (c = (s + "").substr((u + "").length)) !==
                    (p = Jt(a) || (l in T.units ? T.units[l] : c)) &&
                    (u = Li(t, l, s, p)),
                  (this._pt = new cr(
                    this._pt,
                    d ? g : A,
                    l,
                    u,
                    (_ ? gt(u, _ + o) : o) - u,
                    d || ("px" !== p && "zIndex" !== l) || !1 === e.autoRound
                      ? ai
                      : hi
                  )),
                  (this._pt.u = p || 0),
                  c !== p && "%" !== p && ((this._pt.b = s), (this._pt.r = ui));
              else if (l in A) Yi.call(this, t, l, s, _ ? _ + a : a);
              else if (l in t) this.add(t, l, s || t[l], _ ? _ + a : a, i, n);
              else if ("parseTransform" !== l) {
                Z(l, a);
                continue;
              }
              d || (l in A ? x.push(l, 0, A[l]) : x.push(l, 1, s || t[l])),
                k.push(l);
            }
        y && lr(this);
      },
      render: function (t, e) {
        if (e.tween._time || !Er())
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        else e.styles.revert();
      },
      get: Ii,
      aliases: si,
      getSetter: function (t, e, r) {
        var i = si[e];
        return (
          i && i.indexOf(",") < 0 && (e = i),
          e in Jr && e !== yi && (t._gsap.x || Ii(t, "x"))
            ? r && Sr === r
              ? "scale" === e
                ? di
                : _i
              : (Sr = r || {}) && ("scale" === e ? mi : gi)
            : t.style && !z(t.style[e])
            ? ci
            : ~e.indexOf("-")
            ? pi
            : ir(t, e)
        );
      },
      core: { _removeProperty: zi, _getMatrix: Gi },
    };
  (Mr.utils.checkPrefix = Ai),
    (Mr.core.getStyleSaver = bi),
    (fn = _t(
      (un = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (hn = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        Jr[t] = 1;
      }
    )),
    _t(hn, function (t) {
      (T.units[t] = "deg"), (Vi[t] = 1);
    }),
    (si[fn[13]] = un + "," + hn),
    _t(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        si[e[1]] = fn[e[0]];
      }
    ),
    _t(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        T.units[t] = "px";
      }
    ),
    Mr.registerPlugin(ln);
  var cn = Mr.registerPlugin(ln) || Mr,
    pn = cn.core.Tween;
  (t.Back = Qr),
    (t.Bounce = Wr),
    (t.CSSPlugin = ln),
    (t.Circ = $r),
    (t.Cubic = Ur),
    (t.Elastic = jr),
    (t.Expo = Zr),
    (t.Linear = Yr),
    (t.Power0 = Rr),
    (t.Power1 = Fr),
    (t.Power2 = Br),
    (t.Power3 = Lr),
    (t.Power4 = Ir),
    (t.Quad = Nr),
    (t.Quart = Xr),
    (t.Quint = qr),
    (t.Sine = Hr),
    (t.SteppedEase = Gr),
    (t.Strong = Vr),
    (t.TimelineLite = Ue),
    (t.TimelineMax = Ue),
    (t.TweenLite = Je),
    (t.TweenMax = pn),
    (t.default = cn),
    (t.gsap = cn),
    "undefined" == typeof window || window !== t
      ? Object.defineProperty(t, "__esModule", { value: !0 })
      : delete window.default;
});
var UA =
    navigator.userAgent ||
    navigator.userAgentData ||
    navigator.appVersion ||
    navigator.platform,
  HTML = document.documentElement,
  isFirefox = UA.match(/firefox|fxios/i),
  isSafari =
    /constructor/i.test(window.HTMLElement) ||
    "[object SafariRemoteNotification]" ===
      (!window.safari || safari.pushNotification).toString(),
  isChrome =
    UA.match(/chrome|chromium|crios/i) ||
    UA.indexOf("Chrome") > -1 ||
    (!!window.chrome && !!window.chrome.webstore),
  Mobile = window.matchMedia("(max-width: 1100px)"),
  macOS =
    (/iPad|iPhone|iPod/.test(UA) && !window.MSStream) ||
    (navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2 &&
      UA.includes("Mac")),
  MacBrowser = /Mac|iPod|iPhone|iPad/.test(UA),
  Portrait = window.innerHeight > window.innerWidth,
  Landscape = window.innerHeight <= window.innerWidth,
  isMobile = Touch && window.innerWidth < Mobile.matches,
  isTablet = Touch && window.innerWidth > Mobile.matches,
  Touch = window.matchMedia("(pointer: coarse)").matches,
  iOS = !1;
function checkiOS() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod",
  ].includes(UA);
}
if (macOS && checkiOS) {
  HTML.classList.add("is-iOS");
  iOS = !0;
}
Touch && HTML.classList.add("is-touch"),
  isFirefox
    ? HTML.classList.add("is-Firefox")
    : isSafari
    ? HTML.classList.add("is-Safari")
    : isChrome && HTML.classList.add("is-Chrome"),
  gsap.config({ nullTargetWarn: !1 });
var warn = console.warn;
console.warn = function () {};
var controlVideo = function (e, n) {
  var t = e.querySelector("iframe").contentWindow;
  t && t.postMessage('{"event":"command","func":"' + n + '","args":""}', "*");
};
function addMultipleEvents(e, n, t) {
  e.map(function (e) {
    n.addEventListener(e, t, !1);
  });
}
const creatDiv = function (e, n) {
  const t = document.createElement(e);
  return n && (t.className = n), t;
};
var debounce = function (e, n, t) {
  var i;
  return function () {
    var o = this,
      r = arguments,
      c = t && !i;
    clearTimeout(i),
      (i = setTimeout(function () {
        (i = null), t || e.apply(o, r);
      }, n)),
      c && e.apply(o, r);
  };
};
function isInViewport(e) {
  var n = e.getBoundingClientRect(),
    t = window.innerHeight || document.documentElement.clientHeight,
    i = window.innerWidth || document.documentElement.clientWidth,
    o = n.top <= t && n.top + n.height >= 0,
    r = n.left <= i && n.left + n.width >= 0;
  return o && r;
}
var winsize,
  doWheel = !0,
  doTouch = !0;
function turnWheelTouch() {
  (doWheel = !0), (doTouch = !0);
}
var calcWinsize = function () {
    return (winsize = { width: window.innerWidth, height: window.innerHeight });
  },
  MathUtils = {
    lineEq: function (e, n, t, i, o) {
      var r = (e - n) / (t - i);
      return r * o + (n - r * i);
    },
    map: function (e, n, t, i, o) {
      return ((e - n) * (o - i)) / (t - n) + i;
    },
    lerp: function (e, n, t) {
      return (1 - t) * e + t * n;
    },
    clamp: function (e, n, t) {
      return e <= n ? n : e >= t ? t : e;
    },
    getRandomFloat: function (e, n) {
      return (Math.random() * (n - e) + e).toFixed(2);
    },
    randomNumber: function (e, n) {
      return Math.floor(Math.random() * (n - e + 1) + e);
    },
    distance: function (e, n, t, i) {
      var o = e - t,
        r = n - i;
      return Math.hypot(o, r);
    },
    mousepos: { x: 0, y: 0 },
    getMousePos: function (e) {
      return { x: e.clientX, y: e.clientY };
    },
  },
  getMousePos = function (e) {
    var n = 0,
      t = 0;
    return (
      e || (e = window.event),
      e.pageX || e.pageY
        ? ((n = e.pageX), (t = e.pageY))
        : (e.clientX || e.clientY) &&
          ((n =
            e.clientX + body.scrollLeft + document.documentElement.scrollLeft),
          (t =
            e.clientY + body.scrollTop + document.documentElement.scrollTop)),
      { x: n, y: t }
    );
  },
  mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
function makeFull() {
  var e = document.querySelector(".full-screen");
  e.classList.add("show"),
    e.addEventListener("click", toggleFullScreen),
    document.addEventListener("fullscreenchange", function () {
      document.fullscreenElement || document.webkitFullscreenElement
        ? (document.body.classList.add("no-scroll", "fullscreen"),
          e.classList.add("active"))
        : (document.body.classList.remove("no-scroll", "fullscreen"),
          e.classList.remove("active"));
    });
}
function toggleFullScreen() {
  document.fullscreenElement
    ? document.exitFullscreen && document.exitFullscreen()
    : document.documentElement.requestFullscreen();
}
function isFullScreenMode() {
  var e = document.body,
    n =
      void 0 !== e.requestFullscreen ||
      void 0 !== e.mozRequestFullScreen ||
      void 0 !== e.webkitRequestFullscreen ||
      void 0 !== e.msRequestFullscreen ||
      void 0 !== document.exitFullscreen ||
      void 0 !== document.mozCancelFullScreen ||
      void 0 !== document.webkitExitFullscreen;
  return (
    1 == n && document.documentElement.classList.add("fullsreen-support"), n
  );
}
function toggleFullScreen() {
  document.fullscreenElement
    ? document.exitFullscreen && document.exitFullscreen()
    : document.documentElement.requestFullscreen();
}
isFullScreenMode(),
  (function (e, n) {
    "use strict";
    "function" != typeof e.CustomEvent &&
      ((e.CustomEvent = function (e, t) {
        t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
        var i = n.createEvent("CustomEvent");
        return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
      }),
      (e.CustomEvent.prototype = e.Event.prototype)),
      n.addEventListener("touchstart", s, !1),
      n.addEventListener("touchmove", l, !1),
      n.addEventListener("touchend", a, !1),
      n.addEventListener("mousedown", s, !1),
      n.addEventListener("mousemove", l, !1),
      n.addEventListener("mouseup", a, !1);
    var t = null,
      i = null,
      o = null,
      r = null,
      c = null,
      u = null;
    function a(e) {
      if (u === e.target) {
        var n = parseInt(u.getAttribute("data-swipe-threshold") || "20", 10),
          a = parseInt(u.getAttribute("data-swipe-timeout") || "500", 10),
          s = Date.now() - c,
          l = "";
        Math.abs(o) > Math.abs(r)
          ? Math.abs(o) > n && s < a && (l = o > 0 ? "swipeleft" : "swiperight")
          : Math.abs(r) > n && s < a && (l = r > 0 ? "swipeup" : "swipedown"),
          "" !== l &&
            u.dispatchEvent(
              new CustomEvent(l, { bubbles: !0, cancelable: !0 })
            ),
          (t = null),
          (i = null),
          (c = null);
      }
    }
    function s(e) {
      "true" !== e.target.getAttribute("data-swipe-ignore") &&
        ((u = e.target),
        (c = Date.now()),
        (t = e.touches ? e.touches[0].clientX : e.clientX),
        (i = e.touches ? e.touches[0].clientY : e.clientY),
        (o = 0),
        (r = 0));
    }
    function l(e) {
      if (t && i) {
        var n = e.touches ? e.touches[0].clientX : e.clientX,
          c = e.touches ? e.touches[0].clientY : e.clientY;
        (o = t - n), (r = i - c);
      }
    }
  })(window, document);
const Splitting = (function () {
  var e = document,
    n = e.createTextNode.bind(e);
  function t(e, n, t) {
    e.style.setProperty(n, t);
  }
  function i(e, n) {
    return e.appendChild(n);
  }
  function o(n, t, o, r) {
    var c = e.createElement("span");
    return (
      t && (c.className = t),
      o && (!r && c.setAttribute("data-" + t, o), (c.textContent = o)),
      (n && i(n, c)) || c
    );
  }
  function r(e, n) {
    return e.getAttribute("data-" + n);
  }
  function c(n, t) {
    return n && 0 != n.length
      ? n.nodeName
        ? [n]
        : [].slice.call(n[0].nodeName ? n : (t || e).querySelectorAll(n))
      : [];
  }
  function u(e) {
    for (var n = []; e--; ) n[e] = [];
    return n;
  }
  function a(e, n) {
    e && e.some(n);
  }
  function s(e) {
    return function (n) {
      return e[n];
    };
  }
  var l = {};
  function d(e, n, t) {
    var i = t.indexOf(e);
    if (-1 == i)
      t.unshift(e),
        a(l[e].depends, function (n) {
          d(n, e, t);
        });
    else {
      var o = t.indexOf(n);
      t.splice(i, 1), t.splice(o, 0, e);
    }
    return t;
  }
  function m(e, n, t, i) {
    return { by: e, depends: n, key: t, split: i };
  }
  function f(e) {
    return d(e, 0, []).map(s(l));
  }
  function h(e) {
    l[e.by] = e;
  }
  function p(e, t, r, u, s) {
    e.normalize();
    var l = [],
      d = document.createDocumentFragment();
    u && l.push(e.previousSibling);
    var m = [];
    return (
      c(e.childNodes).some(function (e) {
        if (!e.tagName || e.hasChildNodes()) {
          if (e.childNodes && e.childNodes.length)
            return m.push(e), void l.push.apply(l, p(e, t, r, u, s));
          var i = e.wholeText || "",
            c = i.trim();
          c.length &&
            (" " === i[0] && m.push(n(" ")),
            a(c.split(r), function (e, n) {
              n && s && m.push(o(d, "whitespace", " ", s));
              var i = o(d, t, e);
              l.push(i), m.push(i);
            }),
            " " === i[i.length - 1] && m.push(n(" ")));
        } else m.push(e);
      }),
      a(m, function (e) {
        i(d, e);
      }),
      (e.innerHTML = ""),
      i(e, d),
      l
    );
  }
  var v = "words",
    w = m(v, 0, "word", function (e) {
      return p(e, "word", /\s+/, 0, 1);
    }),
    g = "chars",
    b = m(g, [v], "char", function (e, n, t) {
      var i = [];
      return (
        a(t[v], function (e, t) {
          i.push.apply(i, p(e, "char", "", n.whitespace && t));
        }),
        i
      );
    });
  function M(e) {
    var n = (e = e || {}).key;
    return c(e.target || "[data-splitting]").map(function (i) {
      var o = i["ðŸŒ"];
      if (!e.force && o) return o;
      o = i["ðŸŒ"] = { el: i };
      var c = f(e.by || r(i, "splitting") || g),
        u = (function (e, n) {
          for (var t in n) e[t] = n[t];
          return e;
        })({}, e);
      return (
        a(c, function (e) {
          if (e.split) {
            var r = e.by,
              c = (n ? "-" + n : "") + e.key,
              s = e.split(i, u, o);
            c &&
              (function (e, n, i) {
                var o = "--" + n,
                  r = o + "-index";
                a(i, function (e, n) {
                  Array.isArray(e)
                    ? a(e, function (e) {
                        t(e, r, n);
                      })
                    : t(e, r, n);
                }),
                  t(e, o + "-total", i.length);
              })(i, c, s),
              (o[r] = s),
              i.classList.add(r);
          }
        }),
        i.classList.add("splitting"),
        o
      );
    });
  }
  function E(e, n, t) {
    var i = c(n.matching || e.children, e),
      o = {};
    return (
      a(i, function (e) {
        var n = Math.round(e[t]);
        (o[n] || (o[n] = [])).push(e);
      }),
      Object.keys(o).map(Number).sort(L).map(s(o))
    );
  }
  function L(e, n) {
    return e - n;
  }
  (M.html = function (e) {
    var n = ((e = e || {}).target = o());
    return (n.innerHTML = e.content), M(e), n.outerHTML;
  }),
    (M.add = h);
  var y = m("lines", [v], "line", function (e, n, t) {
      return E(e, { matching: t[v] }, "offsetTop");
    }),
    S = m("items", 0, "item", function (e, n) {
      return c(n.matching || e.children, e);
    }),
    T = m("rows", 0, "row", function (e, n) {
      return E(e, n, "offsetTop");
    }),
    x = m("cols", 0, "col", function (e, n) {
      return E(e, n, "offsetLeft");
    }),
    F = m("grid", ["rows", "cols"]),
    P = "layout",
    A = m(P, 0, 0, function (e, n) {
      var u = (n.rows = +(n.rows || r(e, "rows") || 1)),
        a = (n.columns = +(n.columns || r(e, "columns") || 1));
      if (
        ((n.image = n.image || r(e, "image") || e.currentSrc || e.src), n.image)
      ) {
        var s = c("img", e)[0];
        n.image = s && (s.currentSrc || s.src);
      }
      n.image && t(e, "background-image", "url(" + n.image + ")");
      for (var l = u * a, d = [], m = o(0, "cell-grid"); l--; ) {
        var f = o(m, "cell");
        o(f, "cell-inner"), d.push(f);
      }
      return i(e, m), d;
    }),
    C = m("cellRows", [P], "row", function (e, n, t) {
      var i = n.rows,
        o = u(i);
      return (
        a(t[P], function (e, n, t) {
          o[Math.floor(n / (t.length / i))].push(e);
        }),
        o
      );
    }),
    H = m("cellColumns", [P], "col", function (e, n, t) {
      var i = n.columns,
        o = u(i);
      return (
        a(t[P], function (e, n) {
          o[n % i].push(e);
        }),
        o
      );
    }),
    N = m("cells", ["cellRows", "cellColumns"], "cell", function (e, n, t) {
      return t[P];
    });
  return h(w), h(b), h(y), h(S), h(T), h(x), h(F), h(A), h(C), h(H), h(N), M;
})();
const Utils = {
    map: (t, e, i, s, o) => ((t - e) * (o - s)) / (i - e) + s,
    lerp: (t, e, i) => (1 - i) * t + i * e,
    clamp: (t, e, i) => Math.max(t, Math.min(e, i)),
    damp: (t, e, i, s) => Utils.lerp(t, e, 1 - Math.exp(-i * s)),
    modulo: (t, e) => ((t % e) + e) % e,
    mapRange: (t, e, i, s, o) => ((i - t) * (o - s)) / (e - t) + s,
  },
  AniObject = class {
    constructor(t) {
      (this.orientation = t.orientation),
        (this.duration = t.duration),
        (this.lerp = t.lerp),
        (this.el = t.El),
        (this.TransBanner = this.el.classList.contains("trans-banner")),
        (this.TransY = this.el.classList.contains("trans-y")),
        (this.TransX = this.el.classList.contains("trans-x")),
        (this.ScaleY = this.el.classList.contains("scaleY-stran")),
        (this.RotageY = this.el.classList.contains("rotage-stran")),
        (this.TransOpt = this.el.classList.contains("trans-opt")),
        (this.Scale = this.el.classList.contains("trans-scale")),
        (this.Rotage = this.el.classList.contains("trans-rotage")),
        (this.horWrap = this.el.classList.contains("horizontal-wrap")),
        (this.ClipPath = this.el.classList.contains("clippath")),
        (this.speed = this.el.dataset.speed),
        (this.opacity = this.el.dataset.opacity),
        (this.clippart = this.el.dataset.clippart),
        (this.sticky = this.el.dataset.sticky),
        (this.isVisible = !1),
        this.docScroll,
        this.endScroll,
        (this.scrollingSpeed = 0),
        (this.getPageYScroll = () =>
          (this.docScroll =
            window.pageYOffset || document.documentElement.scrollTop)),
        (this.getPageXScroll = () =>
          (this.docScroll =
            window.pageXOffset || document.documentElement.scrollLeft)),
        "horizontal" === this.orientation
          ? this.getPageXScroll()
          : this.getPageYScroll(),
        (this.renderedStyles = {
          transDefault: {
            previous: 0,
            current: 0,
            ease: this.lerp,
            setValue: () => {
              var t;
              if ("horizontal" === this.orientation)
                var e = -1 * (t = parseInt(innerWidth / 10)),
                  i = Utils.map(
                    this.props.left - this.docScroll,
                    innerWidth,
                    -1 * this.props.width,
                    t,
                    e
                  );
              else
                (e = -1 * (t = parseInt(innerHeight / 8))),
                  (i = Utils.map(
                    this.props.top - this.docScroll,
                    innerHeight,
                    -1 * this.props.height,
                    t,
                    e
                  ));
              return t < 0
                ? Math.min(Math.max(i, t), e)
                : Math.max(Math.min(i, t), e);
            },
          },
          opacityTrans: {
            previous: 0,
            current: 0,
            ease: this.lerp,
            setValue: () => {
              if ("horizontal" === this.orientation) {
                var t = this.props.width / 2;
                if (this.opacity < 0)
                  var e =
                    Math.round(
                      ((this.docScroll - (this.props.left - this.props.width)) /
                        t) *
                        1e3
                    ) / 1e3;
                else
                  e =
                    1 -
                    Math.round(((this.docScroll - this.props.left) / t) * 1e3) /
                      1e3;
              } else
                (t = this.props.height),
                  (e =
                    this.opacity < 0
                      ? Math.round(
                          ((this.docScroll -
                            (this.props.top - this.props.height)) /
                            t) *
                            1e3
                        ) / 1e3
                      : 1 -
                        Math.round(
                          ((this.docScroll - this.props.top) / t) * 1e3
                        ) /
                          1e3);
              return e < 0 ? 0 : e && e > 1 ? 1 : e;
            },
          },
          clippathTrans: {
            previous: 0,
            current: 0,
            ease: this.lerp,
            setValue: () => {
              if ("horizontal" === this.orientation) {
                var t = this.props.width;
                if (this.clippart < 1)
                  var e =
                    ((this.docScroll - (this.props.left - this.props.width)) /
                      t) *
                    100;
                else e = ((this.docScroll - this.props.left) / t) * 100;
              } else
                (t = this.props.height),
                  (e =
                    this.clippart < 1
                      ? ((this.docScroll - (this.props.top - t)) / t) * 100
                      : ((this.docScroll - this.props.top) / t) * 100),
                  this.sticky &&
                    (e = ((this.docScroll - this.props.top / 1.5) / t) * 100);
              return e < 1 ? 0 : e && e > 100 ? 100 : e;
            },
          },
          bannerTrans: {
            previous: 0,
            current: 0,
            ease: this.lerp,
            setValue: () => {
              var t = innerHeight,
                e = -1 * t,
                i = Utils.map(
                  this.docScroll,
                  innerHeight,
                  -1 * innerHeight,
                  t,
                  e
                );
              return t < 0
                ? Math.min(Math.max(i, t), e)
                : Math.max(Math.min(i, t), e);
            },
          },
        }),
        this.getSize(),
        this.upDate(),
        this.Resize(),
        window.addEventListener("resize", this.Resize.bind(this)),
        (this.Observer = new IntersectionObserver((t) => {
          t.forEach((t) => {
            t.isIntersecting
              ? (t.target.classList.add("is-show"),
                (this.isVisible = t.intersectionRatio > 0))
              : t.target.classList.remove("is-show");
          });
        })),
        this.Observer.observe(this.el);
    }
    Reset() {
      this.el.removeAttribute("style");
    }
    getSize() {
      if (
        ((this.rect = this.el.getBoundingClientRect()),
        (this.props = {
          height: this.rect.height,
          width: this.rect.width,
          top: this.docScroll + this.rect.top,
          left: this.docScroll + this.rect.left,
        }),
        this.horWrap)
      ) {
        var t = 0,
          e = 0;
        this.Parent = this.el.parentNode;
        const i = this.el.children;
        for (let s = 0; s < i.length; s++) {
          const o = i[s].children;
          for (let t = 0; t < o.length; t++) e += o[t].offsetWidth;
          t = e;
        }
        this.Parent.style.height = t + "px";
        const s = this.Parent.offsetTop,
          o = this.Parent.offsetTop + this.Parent.offsetHeight - innerHeight;
        let n = Utils.mapRange(s, o, this.docScroll, 0, 1);
        (n = Utils.clamp(0, n, 1)),
          (this.goX = Math.round(
            n * (this.Parent.offsetHeight + (innerWidth + i[0].offsetWidth / 2))
          ));
      }
    }
    upDate(t) {
      this.getSize(),
        (this.scrollingSpeed = Math.abs(this.docScroll - this.endScroll)),
        (this.endScroll = this.docScroll),
        (this.progress = t),
        "horizontal" === this.orientation
          ? this.getPageXScroll()
          : this.getPageYScroll();
      for (const t in this.renderedStyles)
        this.renderedStyles[t].current = this.renderedStyles[t].previous =
          this.renderedStyles[t].setValue();
    }
    Render(t) {
      for (const t in this.renderedStyles)
        (this.renderedStyles[t].current = this.renderedStyles[t].setValue()),
          (this.renderedStyles[t].previous = Utils.lerp(
            this.renderedStyles[t].previous,
            this.renderedStyles[t].current,
            this.renderedStyles[t].ease
          ));
      this.upDate(t), this.Translate();
    }
    Translate() {
      const t = this.renderedStyles.opacityTrans.previous,
        e = this.renderedStyles.clippathTrans.previous,
        i = (this.speed / 2) * this.renderedStyles.transDefault.previous,
        s = Math.round(this.speed * this.renderedStyles.bannerTrans.previous),
        o = Math.round(i),
        n = i / 1.2,
        r = 1 - i / (innerHeight / 2),
        h = i / 4;
      if (
        (this.TransBanner &&
          (this.el.style.transform = "translate3d(0," + s + "px,0)"),
        this.TransY &&
          (this.el.style.transform = "translate3d(0," + o + "px,0)"),
        this.TransX &&
          (this.el.style.transform = "translate3d(" + n + "px,0,0)"),
        this.ScaleY &&
          (this.el.style.transform =
            "translate3d(0," + o + "px,0) scale3d(" + r + "," + r + ",1)"),
        this.RotageY &&
          (this.el.style.transform =
            "translate3d(0," + o + "px,0) rotate(" + h / 2 + "deg)"),
        this.Scale &&
          (this.el.style.transform = "scale3d(" + r + "," + r + ",1)"),
        this.Rotage && (this.el.style.transform = "rotate(" + h + "deg)"),
        this.TransOpt && (this.el.style.opacity = t),
        this.ClipPath)
      ) {
        if (isMobile || isTablet) return;
        this.el.style.clipPath = "circle(" + e + "% at 50% 50%)";
      }
      this.horWrap &&
        Array.from([...this.el.children]).forEach((t) => {
          t.style.transform = "translate3d(" + -this.goX + "px,0,0)";
        });
    }
    Resize() {
      this.upDate(), this.Translate(), this.getSize();
    }
    Destroy(t) {
      this.el.classList.remove("is-show"),
        this.Observer?.disconnect(),
        this.Reset(),
        Array.from(t, function (t) {
          t.el.removeAttribute("style");
        });
    }
  };
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).smoothScrolling = e());
})(this, function () {
  "use strict";
  var t = window.matchMedia("(pointer: coarse)").matches;
  class e {
    advance(t) {
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += t;
        const i = Utils.clamp(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const s = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * s;
      } else this.lerp ? ((this.value = Utils.damp(this.value, this.to, 60 * this.lerp, t)), Math.round(this.value) === this.to && ((this.value = this.to), (e = !0))) : ((this.value = this.to), (e = !0));
      e && this.stop(), this.onUpdate?.(this.value, e);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(t, e, { lerp: i, duration: s, easing: o, onStart: n, onUpdate: r }) {
      (this.from = this.value = t),
        (this.to = e),
        (this.lerp = i),
        (this.duration = s),
        (this.easing = o),
        (this.currentTime = 0),
        (this.isRunning = !0),
        n?.(),
        (this.onUpdate = r);
    }
  }
  class i {
    constructor({
      wrapper: t,
      content: e,
      main: i,
      mainsize: s,
      orientation: o,
      autoResize: n = !0,
      debounce: r = 250,
    } = {}) {
      (this.wrapper = t),
        (this.content = e),
        (this.main = i),
        (this.mainsize = s),
        (this.orientation = o),
        n &&
          ((this.debouncedResize = (function (t, e) {
            let i;
            return function () {
              let s = arguments,
                o = this;
              clearTimeout(i),
                (i = setTimeout(function () {
                  t.apply(o, s);
                }, e));
            };
          })(this.resize, r)),
          this.wrapper === window
            ? window.addEventListener("resize", this.debouncedResize, !1)
            : ((this.wrapperResizeObserver = new ResizeObserver(
                this.debouncedResize
              )),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(
            this.debouncedResize
          )),
          this.contentResizeObserver.observe(this.content)),
        this.resize();
    }
    setSize = () => {
      var t = 0,
        e = 0,
        i = 0;
      if (
        (this.main.removeAttribute("style"), "horizontal" === this.orientation)
      ) {
        const t = this.main.children;
        for (let o = 0; o < t.length; o++) {
          var s = t[o].children;
          for (let t = 0; t < s.length; t++) i += s[t].offsetWidth;
          e = i;
        }
        this.main.style.width = e + "px";
      } else (t = this.main.offsetHeight), (this.main.style.height = t + "px");
    };
    resize = () => {
      this.onWrapperResize(),
        this.onContentResize(),
        null != this.main && this.mainsize && this.setSize();
    };
    destroy() {
      this.wrapperResizeObserver?.disconnect(),
        this.contentResizeObserver?.disconnect(),
        window.removeEventListener("resize", this.debouncedResize, !1),
        null != this.main &&
          this.mainsize &&
          (this.main.removeAttribute("style"), delete this.setSize);
    }
    onWrapperResize = () => {
      this.wrapper === window
        ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
        : ((this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight));
    };
    onContentResize = () => {
      this.wrapper === window
        ? ((this.scrollHeight = this.content.scrollHeight),
          (this.scrollWidth = this.content.scrollWidth))
        : ((this.scrollHeight = this.wrapper.scrollHeight),
          (this.scrollWidth = this.wrapper.scrollWidth));
    };
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height,
      };
    }
  }
  class s {
    constructor() {
      this.events = {};
    }
    emit(t, ...e) {
      let i = this.events[t] || [];
      for (let t = 0, s = i.length; t < s; t++) i[t](...e);
    }
    on(t, e) {
      return (
        this.events[t]?.push(e) || (this.events[t] = [e]),
        () => {
          this.events[t] = this.events[t]?.filter((t) => e !== t);
        }
      );
    }
    off(t, e) {
      this.events[t] = this.events[t]?.filter((t) => e !== t);
    }
    destroy() {
      this.events = {};
    }
  }
  class o {
    constructor(
      t,
      {
        wheelMultiplier: e = 1,
        mouseMultiplier: i = 2,
        orientation: o = "vertical",
        touchMouse: n,
      }
    ) {
      (this.element = t),
        (this.wheelMultiplier = e),
        (this.mouseMultiplier = i),
        (this.orientation = o),
        (this.touchMouse = n),
        (this.Height = innerHeight - 40),
        (this.mouseDown = !1),
        (this.keyCodes = {
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          SPACE: 32,
          keyStep: 120,
        }),
        (this.emitter = new s()),
        window.addEventListener("resize", this.onWindowResize, !1),
        window.addEventListener("keydown", this.onKeyDown, !1),
        this.element.addEventListener("mousedown", this.onMouseDown, !1),
        this.element.addEventListener("mousemove", this.onMouseMove, !1),
        this.element.addEventListener("mouseup", this.onMouseUp, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, { passive: !1 });
    }
    on(t, e) {
      return this.emitter.on(t, e);
    }
    destroy() {
      this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize, !1),
        window.removeEventListener("keydown", this.onKeyDown, !1),
        this.element.removeEventListener("wheel", this.onWheel, {
          passive: !1,
        }),
        this.element.removeEventListener("mousedown", this.onMouseDown, !1),
        this.element.removeEventListener("mousemove", this.onMouseMove, !1),
        this.element.removeEventListener("mouseup", this.onMouseUp, !1);
    }
    onWheel = (t) => {
      if (
        this.element.classList.contains("stopped") ||
        this.element.classList.contains("no-scroll")
      )
        return;
      let { deltaX: e, deltaY: i, deltaMode: s } = t;
      (e *= 1 === s ? 100 / 6 : 2 === s ? this.windowWidth : 1),
        (i *= 1 === s ? 100 / 6 : 2 === s ? this.windowHeight : 1),
        (e *= this.wheelMultiplier),
        (i *= this.wheelMultiplier),
        this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t });
    };
    onKeyDown = (t) => {
      let { X: e, Y: i } = t,
        s = document.hasFocus();
      if ("horizontal" === this.orientation) {
        switch (t.keyCode) {
          case this.keyCodes.LEFT:
            e = -this.keyCodes.keyStep;
            break;
          case this.keyCodes.RIGHT:
            e = this.keyCodes.keyStep;
            break;
          default:
            return;
        }
        this.emitter.emit("scroll", { deltaX: e, deltaY: 0, event: t });
      } else {
        switch (t.keyCode) {
          case this.keyCodes.UP:
            i = -this.keyCodes.keyStep;
            break;
          case this.keyCodes.DOWN:
            i = this.keyCodes.keyStep;
            break;
          case t.shiftKey + this.keyCodes.SPACE:
            if (s) return;
            i = this.Height;
            break;
          case this.keyCodes.SPACE:
            if (s) return;
            i = -this.Height;
            break;
          default:
            return;
        }
        this.emitter.emit("scroll", { deltaX: 0, deltaY: i, event: t });
      }
    };
    onMouseDown = (e) => {
      if (!this.touchMouse || t) return;
      this.mouseDown = !0;
      let { clientX: i, clientY: s } = e;
      (this.x = i),
        (this.y = s),
        (this.lastDelta = { x: 0, y: 0 }),
        this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
    };
    onMouseMove = (e) => {
      if (!this.touchMouse || !this.mouseDown || t) return;
      let { clientX: i, clientY: s } = e;
      const o = -(i - this.x) * this.mouseMultiplier,
        n = -(s - this.y) * this.mouseMultiplier;
      (this.x = i),
        (this.y = s),
        (this.lastDelta = { x: o, y: n }),
        this.emitter.emit("scroll", { deltaX: o, deltaY: n, event: e }),
        clearTimeout(this.ResetTimeout),
        delete this.ResetTimeout,
        (this.ResetTimeout = setTimeout(() => {
          this.onMouseUp;
        }, 150));
    };
    onMouseUp = (t) => {
      (this.mouseDown = !1),
        window.removeEventListener("mousedown", this.onMouseDown, !1),
        window.removeEventListener("mousemove", this.onMouseMove, !1);
    };
    onWindowResize = () => {
      (this.windowWidth = window.innerWidth),
        (this.windowHeight = window.innerHeight);
    };
  }
  return class {
    constructor({
      wrapper: t = window,
      content: n = document.body,
      main: r,
      objectTrans: h = null,
      scrollClass: l,
      scrollbarClass: a,
      wheelEventsTarget: c = t,
      eventsTarget: d = c,
      smoothWheel: p = !1,
      touchMouse: u = !1,
      duration: m = 1,
      easing: g = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: v = 0.1,
      infinite: f = !1,
      orientation: w = "vertical",
      gestureOrientation: S = "vertical",
      mainsize: b = "vertical" !== w,
      wheelMultiplier: y = 1,
      mouseMultiplier: z = 2,
      autoResize: M = !0,
      prevent: T = !1,
      naiveDimensions: L = !1,
    } = {}) {
      (this.__isSmooth = !1),
        (this.__isScrolling = !1),
        (this.__isStopped = !1),
        (this.__isLocked = !1),
        (this.onVirtualScroll = ({ deltaX: t, deltaY: e, event: i }) => {
          if (i.ctrlKey) return;
          const s = i.type.includes("wheel"),
            o = i.type.includes("mouse"),
            n = i.type.includes("key"),
            r = 0 === t && 0 === e,
            h =
              ("vertical" === this.options.gestureOrientation && 0 === e) ||
              ("horizontal" === this.options.gestureOrientation && 0 === t);
          if (r || h) return;
          let l = i.composedPath();
          l = l.slice(0, l.indexOf(this.rootElement));
          const a = this.options.prevent;
          if (
            l.find((t) => {
              var e, i, o, n;
              return (
                t instanceof Element &&
                (("function" == typeof a ? (null == a ? void 0 : a(t)) : a) ||
                  (null === (e = t.hasAttribute) || void 0 === e
                    ? void 0
                    : e.call(t, "data-prevent")) ||
                  (s &&
                    (null === (i = t.hasAttribute) || void 0 === i
                      ? void 0
                      : i.call(t, "data-prevent-wheel"))) ||
                  ((null === (o = t.classList) || void 0 === o
                    ? void 0
                    : o.contains(this.options.scrollClass)) &&
                    !(null === (n = t.classList) || void 0 === n
                      ? void 0
                      : n.contains("stopped"))))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) return void i.preventDefault();
          if (
            ((this.isSmooth =
              (this.options.smoothWheel && s) ||
              (this.options.touchMouse && o) ||
              n),
            !this.isSmooth)
          )
            return (this.isScrolling = !1), void this.animate.stop();
          i.preventDefault();
          let c = e;
          "both" === this.options.gestureOrientation
            ? (c = Math.abs(e) > Math.abs(t) ? e : t)
            : "horizontal" === this.options.gestureOrientation && (c = t),
            this.scrollTo(
              this.targetScroll + c,
              Object.assign(
                { programmatic: !1 },
                {
                  lerp: this.options.lerp,
                  duration: this.options.duration,
                  easing: this.options.easing,
                }
              )
            ),
            this.checkDirection();
        }),
        (this.onNativeScroll = () => {
          if (!this.nextScrollEvent && !this.isScrolling) {
            const t = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.velocity = 0),
              (this.direction = Math.sign(this.animatedScroll - t)),
              this.emit(),
              document.querySelector("[data-direction]") &&
                this.rootElement.removeAttribute("data-direction");
          }
        }),
        (t !== document.documentElement && t !== document.body) || (t = window),
        (this.options = {
          wrapper: t,
          content: n,
          main: r,
          objectTrans: h,
          scrollClass: l,
          scrollbarClass: a,
          wheelEventsTarget: c,
          eventsTarget: d,
          smoothWheel: p,
          touchMouse: u,
          duration: m,
          easing: g,
          lerp: v,
          infinite: f,
          orientation: w,
          gestureOrientation: S,
          mainsize: b,
          wheelMultiplier: y,
          mouseMultiplier: z,
          autoResize: M,
          prevent: T,
          naiveDimensions: L,
        }),
        (this.animate = new e()),
        (this.emitter = new s()),
        (this.dimensions = new i({
          wrapper: t,
          content: n,
          main: r,
          mainsize: b,
          orientation: w,
          autoResize: M,
        })),
        this.toggleClass(this.options.scrollClass, !0),
        (this.velocity = 0),
        (this.isLocked = !1),
        (this.isStopped = !1),
        (this.isSmooth = p || u),
        (this.isScrolling = !1),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        this.rootElement.setAttribute(
          "data-orientation",
          this.options.orientation
        ),
        (this.Items = []),
        (this.List = document.querySelector(".option-scroll")),
        null != this.options.scrollbarClass && this.createBar(),
        null != this.options.objectTrans && this.getObject(),
        this.options.wrapper.addEventListener(
          "scroll",
          this.onNativeScroll,
          !1
        ),
        (this.virtualScroll = new o(d, {
          orientation: w,
          touchMouse: u,
          wheelMultiplier: y,
          mouseMultiplier: z,
        })),
        this.virtualScroll.on("scroll", this.onVirtualScroll),
        window.addEventListener("resize", this.resize.bind(this));
    }
    createBar() {
      (this.scrollbar = document.createElement("div")),
        (this.scrollThumb = document.createElement("div")),
        (this.scrollbar.className = this.options.scrollbarClass),
        (this.scrollThumb.className = this.options.scrollbarClass + "-thumb"),
        this.scrollbar.append(this.scrollThumb),
        this.options.content == document.body
          ? this.options.content.append(this.scrollbar)
          : this.List && this.options.content == this.List
          ? this.List.parentNode.append(this.scrollbar)
          : this.rootElement.append(this.scrollbar),
        this.getBar(),
        this.grabBar();
    }
    getBar() {
      if (
        ((this.scrollbarHeight = this.scrollbar.getBoundingClientRect().height),
        (this.scrollbarWidth = this.scrollbar.getBoundingClientRect().width),
        this.isHorizontal)
      ) {
        this.instanceX = this.options.main.offsetWidth - window.innerWidth;
        const t =
          (this.scrollbarWidth * this.scrollbarWidth) /
          (this.instanceX + this.scrollbarWidth);
        this.scrollThumb.style.width = Math.round(t) + "px";
      } else if (this.List && this.options.content == this.List) {
        Array.from(this.options.content.children).forEach((t) => {
          if (t instanceof HTMLElement) {
            this.instanceY = t.offsetHeight - this.options.content.offsetHeight;
            const e =
              (this.scrollbarHeight * this.scrollbarHeight) /
              (this.instanceY + this.scrollbarHeight);
            this.scrollThumb.style.height = Math.round(e) + "px";
          }
        });
      } else {
        this.instanceY = this.options.content.offsetHeight - window.innerHeight;
        const t =
          (this.scrollbarHeight * this.scrollbarHeight) /
          (this.instanceY + this.scrollbarHeight);
        this.scrollThumb.style.height = Math.round(t) + "px";
      }
    }
    postBar() {
      if (
        ((this.thumbHeight = this.scrollThumb.getBoundingClientRect().height),
        (this.thumbWidth = this.scrollThumb.getBoundingClientRect().width),
        this.isHorizontal)
      ) {
        const t = Math.round(this.progress * (innerWidth - this.thumbWidth));
        this.scrollThumb.style.transform = "translate3d(" + t + "px,0,0)";
      } else if (this.List && this.options.content == this.List) {
        const t = Math.round(
          this.progress * (this.options.content.offsetHeight - this.thumbHeight)
        );
        this.scrollThumb.style.transform = "translate3d(0," + t + "px,0)";
      } else {
        const t = Math.round(this.progress * (innerHeight - this.thumbHeight));
        this.scrollThumb.style.transform = "translate3d(0," + t + "px,0)";
      }
    }
    grabBar = () => {
      var t,
        e,
        i = this;
      let s = !1;
      function o(o) {
        o.preventDefault(),
          s &&
            ((e = i.isHorizontal
              ? Utils.mapRange(
                  t,
                  innerWidth - (i.scrollThumb.offsetWidth - t),
                  o.clientX,
                  0,
                  i.limit
                )
              : Utils.mapRange(
                  t,
                  innerHeight - (i.scrollThumb.offsetHeight - t),
                  o.clientY,
                  0,
                  i.limit
                )),
            i.scrollTo(e, { immediate: !0 }));
      }
      function n() {
        s = !1;
      }
      return (
        this.scrollThumb.addEventListener(
          "pointerdown",
          function (e) {
            (s = !0), (t = i.isHorizontal ? e.offsetX : e.offsetY);
          },
          !1
        ),
        window.addEventListener("pointermove", o, !1),
        window.addEventListener("pointerup", n, !1),
        () => {
          window.removeEventListener("pointermove", o, !1),
            window.removeEventListener("pointerup", n, !1);
        }
      );
    };
    destroyBar() {
      return this.scrollbar.remove();
    }
    Mover() {
      let t = this.progress;
      for (let i = 0; i < this.Items.length; i++) {
        var e = this.Items[i];
        e.isVisible
          ? e.insideViewport
            ? e.Render(t)
            : ((e.insideViewport = !0), e.upDate(t))
          : (e.insideViewport = !1),
          e.Render(t);
      }
    }
    getObject() {
      var t = "." + this.options.objectTrans,
        e = this.options.content.querySelectorAll(t);
      for (let t = 0; t < e.length; t++)
        (this.aniobject = new AniObject({
          El: e[t],
          orientation: this.options.orientation,
          duration: this.options.duration,
          lerp: this.options.lerp,
        })),
          this.Items.push(this.aniobject);
      this.Mover();
    }
    checkDirection() {
      this.isHorizontal
        ? 1 === this.direction
          ? this.rootElement.setAttribute("data-direction", "left")
          : this.rootElement.setAttribute("data-direction", "right")
        : 1 === this.direction
        ? this.rootElement.setAttribute("data-direction", "down")
        : this.rootElement.setAttribute("data-direction", "up");
    }
    destroy() {
      if (
        (this.emitter.destroy(),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.options.wrapper.removeEventListener(
          "scroll",
          this.onNativeScroll,
          !1
        ),
        this.cleanUp(),
        null != this.options.scrollbarClass && this.destroyBar(),
        null != this.options.objectTrans)
      )
        for (let t = 0; t < this.Items.length; t++)
          this.Items[t].Destroy(this.Items);
    }
    on(t, e) {
      return this.emitter.on(t, e);
    }
    off(t, e) {
      return this.emitter.off(t, e);
    }
    setScroll(t) {
      this.isHorizontal
        ? (this.rootElement.scrollLeft = t)
        : (this.rootElement.scrollTop = t);
    }
    resize() {
      this.dimensions.resize(),
        null != this.options.scrollbarClass && (this.getBar(), this.postBar()),
        null != this.options.objectTrans &&
          this.aniobject &&
          (this.getObject(), this.aniobject.Resize());
    }
    emit() {
      this.emitter.emit("scroll", this),
        null != this.options.scrollbarClass && this.postBar(),
        null != this.options.objectTrans && this.Mover();
    }
    reset() {
      (this.isLocked = !1),
        (this.isScrolling = !1),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.velocity = 0),
        this.animate.stop();
    }
    start() {
      this.isStopped && ((this.isStopped = !1), this.reset());
    }
    stop() {
      this.isStopped ||
        ((this.isStopped = !0), this.animate.stop(), this.reset());
    }
    raf(t) {
      const e = t - (this.time || t);
      (this.time = t), this.animate.advance(0.001 * e);
    }
    scrollTo(
      t,
      {
        offset: e = 0,
        immediate: i = !1,
        lock: s = !1,
        duration: o = this.options.duration,
        easing: n = this.options.easing,
        lerp: r = !o && this.options.lerp,
        onComplete: h,
        force: l = !1,
        programmatic: a = !0,
      } = {}
    ) {
      if ((!this.isStopped && !this.isLocked) || l) {
        if (["top", "left", "start"].includes(t)) t = 0;
        else if (["bottom", "right", "end"].includes(t)) t = this.limit;
        else {
          let i;
          if (
            ("string" == typeof t
              ? (i = document.querySelector(t))
              : (null == t ? void 0 : t.nodeType) && (i = t),
            i)
          ) {
            if (this.options.wrapper !== window) {
              const t = this.options.wrapper.getBoundingClientRect();
              e -= this.isHorizontal ? t.left : t.top;
            }
            const s = i.getBoundingClientRect();
            t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
          }
        }
        if ("number" == typeof t) {
          if (
            ((t += e),
            (t = Math.round(t)),
            this.options.infinite
              ? a && (this.targetScroll = this.animatedScroll = this.scroll)
              : (t = Utils.clamp(0, t, this.limit)),
            i)
          )
            return (
              (this.animatedScroll = this.targetScroll = t),
              this.setScroll(this.scroll),
              this.reset(),
              void (null == h || h(this))
            );
          if (!a) {
            if (t === this.targetScroll) return;
            this.targetScroll = t;
          }
          this.animate.fromTo(this.animatedScroll, t, {
            duration: o,
            easing: n,
            lerp: r,
            onStart: () => {
              s && (this.isLocked = !0), (this.isScrolling = !0);
            },
            onUpdate: (t, e) => {
              (this.isScrolling = !0),
                (this.velocity = t - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = t),
                this.setScroll(this.scroll),
                a && (this.targetScroll = t),
                e || this.emit(),
                e &&
                  (this.reset(),
                  this.emit(),
                  null == h || h(this),
                  (this.nextScrollEvent = !0),
                  requestAnimationFrame(() => {
                    delete this.nextScrollEvent;
                  }));
            },
          });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window
        ? document.documentElement
        : this.options.wrapper;
    }
    get limit() {
      return this.options.naiveDimensions
        ? this.isHorizontal
          ? this.rootElement.scrollWidth - this.rootElement.clientWidth
          : this.rootElement.scrollHeight - this.rootElement.clientHeight
        : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
      return this.isHorizontal
        ? this.rootElement.scrollLeft
        : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite
        ? Utils.modulo(this.animatedScroll, this.limit)
        : this.animatedScroll;
    }
    get progress() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return this.__isSmooth;
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    get isStopped() {
      return this.__isStopped;
    }
    get isLocked() {
      return this.__isLocked;
    }
    set isSmooth(t) {
      this.__isSmooth !== t &&
        ((this.__isSmooth = t),
        this.options.scrollClass &&
          this.toggleClass(this.options.scrollClass, t));
    }
    set isScrolling(t) {
      this.__isScrolling !== t &&
        ((this.__isScrolling = t), this.toggleClass("scrolling", t));
    }
    set isStopped(t) {
      this.__isStopped !== t &&
        ((this.__isStopped = t), this.toggleClass("stopped", t));
    }
    set isLocked(t) {
      this.__isLocked !== t &&
        ((this.__isLocked = t), this.toggleClass("locked", t));
    }
    get className() {
      let t = this.options.scrollClass ? this.options.scrollClass : "";
      return (
        this.isStopped && (t += " stopped"),
        this.isLocked && (t += " locked"),
        this.isScrolling && (t += " scrolling"),
        this.isSmooth && (t += t),
        t
      );
    }
    toggleClass(t, e) {
      this.rootElement.classList.toggle(t, e),
        this.emitter.emit("className change", this);
    }
    cleanUp() {
      this.options.scrollClass &&
        this.toggleClass(this.options.scrollClass, !1),
        this.toggleClass("scrolling", !1),
        this.toggleClass("stopped", !1),
        this.rootElement.removeAttribute("data-orientation"),
        this.rootElement.removeAttribute("data-direction"),
        this.animate.stop();
    }
  };
});
var Protocal = window.location.protocol,
  Host = window.location.host,
  pathArray = window.location.pathname.split("/"),
  localHost = "localhost:9000";
if (
  Host == localHost ||
  "localhost" == Host ||
  "digital-marketing.com.vn" == Host ||
  "3graphic.com.vn" == Host
)
  var getDirect = Protocal + "//" + Host + "/" + pathArray[1] + "/";
else getDirect = Protocal + "//" + Host + "/";

function changeAlternate(e, t, r) {
  null !== t &&
    (void 0 !== r
      ? (document.querySelector('link[hreflang="vi-vn"]') &&
          (document
            .querySelector('link[hreflang="vi-vn"]')
            .setAttribute("href", t.dataset.hrefvi),
          document.querySelector('.language a[data-lang="vi"]') &&
            document
              .querySelector('.language a[data-lang="vi"]')
              .setAttribute("href", t.dataset.hrefvi)),
        document.querySelector('link[hreflang="en-vn"]') &&
          (document
            .querySelector('link[hreflang="en-vn"]')
            .setAttribute("href", t.dataset.hrefen),
          document.querySelector('.language a[data-lang="en"]') &&
            document
              .querySelector('.language a[data-lang="en"]')
              .setAttribute("href", t.dataset.hrefen)))
      : t.forEach(function (e) {
          e.classList.contains("alternate-hl-vi") &&
            document.querySelector('link[hreflang="vi-vn"]') &&
            (document
              .querySelector('link[hreflang="vi-vn"]')
              .setAttribute("href", e.innerHTML),
            document.querySelector('.language a[data-lang="vi"]') &&
              document
                .querySelector('.language a[data-lang="vi"]')
                .setAttribute("href", e.innerHTML)),
            e.classList.contains("alternate-hl-en") &&
              document.querySelector('link[hreflang="en-vn"]') &&
              (document
                .querySelector('link[hreflang="en-vn"]')
                .setAttribute("href", e.innerHTML),
              document.querySelector('.language a[data-lang="en"]') &&
                document
                  .querySelector('.language a[data-lang="en"]')
                  .setAttribute("href", e.innerHTML));
        }));
}
var addURL = function (e, t) {
  var r = e.href ? e.href : e.dataset.href,
    o =
      null != e.dataset.title
        ? e.dataset.title
        : e.parentElement.querySelector(".link-change-url").dataset.title,
    a =
      null != e.dataset.keyword
        ? e.dataset.keyword
        : e.parentElement.querySelector(".link-change-url").dataset.keyword,
    n =
      null != e.dataset.description
        ? e.dataset.description
        : e.parentElement.querySelector(".link-change-url").dataset.description;
  changeUrl(r, o, n, a, e.dataset.name, o, n);
};
(window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}),
  window.addEventListener("pageshow", function (e) {
    window.scrollTo(0, 0), e.persisted && location.reload();
  });
var timer,
  thatScroll,
  thatInner,
  Req,
  ReqIn,
  panzoom,
  Load = 0,
  Details = 0,
  First = 0,
  News = 0,
  currenttop = 0,
  XWidth = window.innerWidth,
  YHeight = window.innerHeight,
  windscroll = window.pageYOffset,
  WindBody = document.body,
  Container = document.querySelector(".container"),
  titlePage = document.querySelector(".title-page"),
  Mask = document.querySelector(".mask"),
  maskInner = document.querySelector(".mask-inner"),
  IDPage = Container.getAttribute("id"),
  dataFirst = Container.dataset.first,
  dataSecond = Container.dataset.second,
  dataDetails = Container.dataset.details,
  Header = document.querySelector(".header"),
  goHome = document.querySelector(".link-home"),
  Lang = document.querySelector(".language"),
  Footer = document.querySelector(".footer"),
  Bottom = document.querySelector(".bottom"),
  Copyright = document.querySelector(".copyright"),
  Social = document.querySelector(".social"),
  navClick = document.querySelector(".nav-click"),
  Navigation = document.querySelector(".navigation"),
  overlayMenu = document.querySelector(".overlay-menu"),
  Nav = document.querySelector(".nav"),
  naItems = document.querySelectorAll(".nav-item"),
  rightHeader = document.querySelector(".right-header"),
  leftHeader = document.querySelector(".left-header"),
  boxSlider = document.querySelector(".box-slider"),
  groupCentral = document.querySelectorAll(".group-central"),
  boxNav = document.querySelector(".box-nav"),
  boxLi = document.querySelectorAll(".box-nav li"),
  Tagline = document.querySelector(".tagline"),
  bannerHome = document.querySelector(".banner-home"),
  bannerInner = document.querySelector(".banner .bg-cover"),
  bannerAuto = document.querySelector(".banner-auto"),
  fullBanner = document.querySelector(".full-banner"),
  Banner = bannerHome || bannerInner || bannerAuto || fullBanner,
  hasSub = document.querySelectorAll(".has-sub"),
  subClick = document.querySelectorAll(".has-sub .nav-item"),
  subItems = document.querySelectorAll(".sub-menu-drop"),
  buttonZoom = document.querySelector(".button-zoom"),
  PanZoom = document.querySelector(".panzoom"),
  dotP = document.querySelectorAll(".dot-p"),
  dotNum = document.querySelectorAll(".dot-num"),
  masterPlan = document.querySelector(".masterplan .master-map"),
  blockPlan = document.querySelectorAll(".block .master-map"),
  faciPlan = document.querySelectorAll(".facilities .master-map"),
  houseText = document.querySelectorAll(".house-text"),
  blockArea = document.querySelectorAll(".block-area"),
  Notice = document.querySelector(".notice"),
  loadApartment = document.querySelector(".load-apartment"),
  houseLoad = document.querySelector(".house-load"),
  bgHouse = document.querySelector(".bg-house"),
  closeApart = document.querySelector(".close-apartment"),
  Hotline = document.querySelector(".hotline"),
  Subscrible = document.querySelector(".subscribe"),
  formRegister = document.querySelector("#formRegister"),
  formContact = document.querySelector("#formContact"),
  wrapView = document.querySelectorAll(".wrap-view-more, .wrap-go-news"),
  goBack = document.querySelector(".goback"),
  viewVideo = document.querySelector(".view-video"),
  viewAllbum = document.querySelector(".view-album"),
  downloadPdf = document.querySelector(".download-pdf"),
  viewVirtual = document.querySelector(".view-virtual"),
  boxVideo = document.querySelector(".inline-video"),
  ytVideo = document.getElementById("youtube-video"),
  id_Inline = document.getElementById("video_js");
document.querySelector(".has-sub") &&
  Array.from(Navigation.querySelectorAll(".has-sub"), function (e) {
    var t = creatDiv("div", "nav-drop");
    e.querySelector(".nav-item").append(t);
  });
var Gradient =
    '<svg  viewBox="0 0 40 40"><linearGradient id="gradient-dot" x1="30%" y1="0%" x2="70%" y2="100%"><stop offset="0%" stop-color="#fff"><animate attributeName="stop-color" values="#fff; #acd357; #fff" dur="2s" repeatCount="indefinite"></animate></stop><stop offset="100%" stop-color="#acd357"><animate attributeName="stop-color" values="#acd357; #fff; #acd357" dur="2s" repeatCount="indefinite"></animate></stop></linearGradient><linearGradient id="gradient-dot-2" x1="30%" y1="0%" x2="70%" y2="100%"><stop offset="0%" stop-color="#fff"><animate attributeName="stop-color" values="#fff; #ff7800; #fff" dur="2s" repeatCount="indefinite"></animate></stop><stop offset="100%" stop-color="#ff7800"><animate attributeName="stop-color" values="#ff7800; #fff; #ff7800" dur="2s" repeatCount="indefinite"></animate></stop></linearGradient><linearGradient id="cir-dot" x1="80%" y1="90%" x2="20%" y2="10%"><stop offset="0%" stop-color="#ffae00"><animate attributeName="stop-color" values="#ffae00; #db595e; #ffae00" dur="3s" repeatCount="indefinite"></animate></stop><stop offset="50%" stop-color="#db595e"><animate attributeName="stop-color" values="#db595e; #ffae00; #db595e" dur="3s" repeatCount="indefinite"></animate></stop><stop offset="100%" stop-color="#8bc0b6"><animate attributeName="stop-color" values="#8bc0b6; #fff; #8bc0b6" dur="3s" repeatCount="indefinite"></animate></stop></linearGradient></svg>',
  svgClose =
    '<svg viewBox="0 0 100 100"><circle class="c-rotate" cx="50" cy="50" r="48.5"></circle><polygon class="c-x" points="50,51.9 39.3,62.6 37.4,60.7 48.1,50 37.4,39.3 39.3,37.4 50,48.1 60.7,37.4 62.6,39.3 51.9,50 62.6,60.7 60.7,62.6"/></svg>',
  svgFull =
    '<svg viewBox="0 0 100 100"><path class="open" fill="currentColor" d="M40.5,42.8L30.2,32.6V40l-0.9,0.9h-1.2L27.2,40V28.1l0.9-0.9H40l0.9,0.9v1.2L40,30.2h-7.4l10.2,10.2v1.4l-0.9,0.9H40.5z M58.1,42.8l-0.9-0.9v-1.4l10.2-10.2H60l-0.9-0.9v-1.2l0.9-0.9h11.9l0.9,0.9V40l-0.9,0.9h-1.2L69.8,40v-7.4L59.5,42.8H58.1z M28.1,72.8l-0.9-0.9V60l0.9-0.9h1.2l0.9,0.9v7.4l10.2-10.2h1.4l0.9,0.9v1.4L32.6,69.8H40l0.9,0.9v1.2L40,72.8H28.1z M60,72.8l-0.9-0.9v-1.2l0.9-0.9h7.4L57.2,59.5v-1.4l0.9-0.9h1.4l10.2,10.2V60l0.9-0.9h1.2l0.9,0.9v11.9l-0.9,0.9H60z"/><path class="exit" fill="currentColor" d="M29.5,27.2l10.2,10.2V30l0.9-0.9h1.2l0.9,0.9v11.9l-0.9,0.9H30l-0.9-0.9v-1.2l0.9-0.9h7.4L27.2,29.5v-1.4l0.9-0.9H29.5z M71.9,27.2l0.9,0.9v1.4L62.6,39.8H70l0.9,0.9v1.2L70,42.8H58.1l-0.9-0.9V30l0.9-0.9h1.2l0.9,0.9v7.4l10.2-10.2H71.9zM41.9,57.2l0.9,0.9V70l-0.9,0.9h-1.2L39.8,70v-7.4L29.5,72.8h-1.4l-0.9-0.9v-1.4l10.2-10.2H30l-0.9-0.9v-1.2l0.9-0.9H41.9zM70,57.2l0.9,0.9v1.2L70,60.2h-7.4l10.2,10.2v1.4l-0.9,0.9h-1.4L60.2,62.6V70l-0.9,0.9h-1.2L57.2,70V58.1l0.9-0.9H70z"/></svg>',
  svgDown =
    '<svg viewBox="0 0 100 100"><path fill="currentColor" d="M42.1,59.3c0-0.4,0.2-0.8,0.5-1.1c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5l3.7,3.7V34.8c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6v27.1l3.7-3.7c0.6-0.6,1.6-0.6,2.2,0c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L52,65.9c-0.5,0.5-1.2,0.8-2,0.8c-0.8,0-1.5-0.3-2-0.8l-5.5-5.5C42.2,60.1,42.1,59.7,42.1,59.3C42.1,59.3,42.1,59.3,42.1,59.3z"/></svg><span></span>',
  svgTop =
    '<svg viewBox="0 0 100 100"><path fill="currentColor" d="M42.1,40.7c0,0.4,0.2,0.8,0.5,1.1c0.3,0.3,0.7,0.5,1.1,0.5c0.4,0,0.8-0.2,1.1-0.5l3.7-3.7v27.1c0,0.9,0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6V38.1l3.7,3.7c0.6,0.6,1.6,0.6,2.2,0c0.3-0.3,0.5-0.7,0.5-1.1c0-0.4-0.2-0.8-0.5-1.1L52,34.1c-0.5-0.5-1.2-0.8-2-0.8c-0.8,0-1.5,0.3-2,0.8l-5.5,5.5C42.2,39.9,42.1,40.3,42.1,40.7C42.1,40.7,42.1,40.7,42.1,40.7z"/></svg><span></span>',
  NP =
    '<button class="arrow arrow-prev" aria-label="Previous slide"><svg viewBox="0 0 100 100"><path fill="currentColor" d="M51.3,61.6c-0.7,0-1.3-0.3-1.8-0.7c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.3-1.3,0.7-1.8l6-6H39.4 c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5h16.1l-6-6c-1-1-1-2.6,0-3.6c0.5-0.5,1.1-0.7,1.8-0.7c0.7,0,1.3,0.3,1.8,0.7l8.8,8.9 c0.8,0.8,1.3,2,1.3,3.2c0,1.2-0.5,2.4-1.4,3.2l-8.8,8.8C52.6,61.3,52,61.6,51.3,61.6C51.3,61.6,51.3,61.6,51.3,61.6z"/></svg></button><button class="arrow arrow-next" aria-label="Next slide"><svg  viewBox="0 0 100 100"><path fill="currentColor" d="M51.3,61.6c-0.7,0-1.3-0.3-1.8-0.7c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.3-1.3,0.7-1.8l6-6H39.4 c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5h16.1l-6-6c-1-1-1-2.6,0-3.6c0.5-0.5,1.1-0.7,1.8-0.7c0.7,0,1.3,0.3,1.8,0.7l8.8,8.9 c0.8,0.8,1.3,2,1.3,3.2c0,1.2-0.5,2.4-1.4,3.2l-8.8,8.8C52.6,61.3,52,61.6,51.3,61.6C51.3,61.6,51.3,61.6,51.3,61.6z"/></svg></button>',
  iconVid =
    '<svg viewBox="0 0 140 140"><path fill="currentColor" d="M52.3,53.7v32.7c0,3.9,4.4,6.3,7.7,4.2l25.5-16.3c3.1-2,3.1-6.4,0-8.4L60,49.5 C56.7,47.3,52.3,49.7,52.3,53.7z"/></svg>',
  iconAlbum =
    '<svg viewBox="0 0 140 140"><path fill="currentColor" d="M62.8,68.8H50.4c-3.3,0-5.9-2.7-5.9-5.9V49.5c0-3.3,2.7-5.9,5.9-5.9h12.5c3.3,0,5.9,2.7,5.9,5.9v13.3C68.8,66.1,66.1,68.8,62.8,68.8z M51,47.3c-1.5,0-2.9,1.3-2.9,2.9v11.9c0,1.5,1.3,2.9,2.9,2.9h11.2c1.5,0,2.9-1.3,2.9-2.9V50.2c0-1.5-1.3-2.9-2.9-2.9C62.2,47.3,51,47.3,51,47.3z M89.5,68.8H77.1c-3.3,0-5.9-2.7-5.9-5.9V49.5c0-3.3,2.7-5.9,5.9-5.9h12.5c3.3,0,5.9,2.7,5.9,5.9v13.3C95.5,66.1,92.8,68.8,89.5,68.8z M77.7,47.3c-1.5,0-2.9,1.3-2.9,2.9v11.9c0,1.5,1.3,2.9,2.9,2.9H89c1.5,0,2.9-1.3,2.9-2.9V50.2c0-1.5-1.3-2.9-2.9-2.9C88.9,47.3,77.7,47.3,77.7,47.3z M62.8,96.4H50.4c-3.3,0-5.9-2.7-5.9-5.9V77.2c0-3.3,2.7-5.9,5.9-5.9h12.5c3.3,0,5.9,2.7,5.9,5.9v13.3C68.8,93.8,66.1,96.4,62.8,96.4z M51,74.9c-1.5,0-2.9,1.3-2.9,2.9v11.9c0,1.5,1.3,2.9,2.9,2.9h11.2c1.5,0,2.9-1.3,2.9-2.9V77.9c0-1.5-1.3-2.9-2.9-2.9H51z M89.5,96.4H77.1c-3.3,0-5.9-2.7-5.9-5.9V77.2c0-3.3,2.7-5.9,5.9-5.9h12.5c3.3,0,5.9,2.7,5.9,5.9v13.3C95.5,93.8,92.8,96.4,89.5,96.4z M77.7,74.9c-1.5,0-2.9,1.3-2.9,2.9v11.9c0,1.5,1.3,2.9,2.9,2.9H89c1.5,0,2.9-1.3,2.9-2.9V77.9c0-1.5-1.3-2.9-2.9-2.9H77.7z"/></svg>',
  iconVirtual =
    '<svg viewBox="0 0 140 140"><path fill="currentColor" d="M64.9,33.9h3.8v8.6c-5.4,2.3-29,11.4-30.5,12.2C37.8,53,38,92,38,92l-8.6,3.9L28,92.3l-6.5,8.8l11.3,2l-1.3-3.6l7.3-3.4 l32.1,16l32-16l5.5,2.6l-1.5,3.6l11.6-1l-7-9.6l-1.8,3.6l-6.2-2.8V54.8L72.9,42.4v-8.3h3.8l-6-10.1L64.9,33.9z M96.7,56.4l-23.3,9.8 V47L96.7,56.4z M68.9,66.2L47.3,55.9l21.4-9.1L68.9,66.2z M99.4,90.2L72.9,78.1v-7.7l26.6-11.3V90.2z M97.6,93.8l-24.8,12.6l0.2-24 L97.6,93.8z"/></svg>',
  iconPdf =
    '<svg viewBox="0 0 140 140"><path fill="currentColor" d="M44,100.2c-2.3,0-3.9-1.1-4.2-3c-0.8-3.9,4.3-10.1,17.1-15.3c3.5-6.4,6.5-13.4,9.2-21.3c-3-8.9-3.4-16.1-1.1-19.3c0.7-1,1.6-1.5,2.6-1.5c0.8,0,1.9,0.3,3.2,1.8c2.4,3.2,3.9,10.6,0.9,21.9c2.2,5.3,5,9.9,8.3,13.7c0.7,0,4.9-0.2,6.2-0.2c4.4,0,12.1,1.9,14.1,5.1c0.1,0.1,0,0.5,0,0.5c-0.5,3.6-2.6,5.7-6.2,5.7l0,0c-5.2,0-12.6-4.4-15.7-7.7c-5.2,0.8-11,1.8-16.3,3.6C55.3,96.1,48.2,100.2,44,100.2z M56.4,85.9C45.7,90.7,42.7,95.8,43,97.2c0,0.1,0,0.2,0.5,0.2C45.6,97.4,50.6,94.3,56.4,85.9z M80.7,79.8c4.7,3.2,8.6,4.9,11.9,4.9c1.4,0,2.6-0.2,3.9-0.9C92.6,80.2,86.1,79.8,80.7,79.8L80.7,79.8z M70,69.9c-1.1,3.5-2.8,7.2-4.7,10.2c2.4-0.7,7.8-1.8,9.9-2C73.4,75.7,71.6,72.8,70,69.9z M67.4,56c0.2,0.9,1.1,2.4,1.9,3.5c2-6,0.6-11-1.4-13.6C67.3,47.6,66.4,51.8,67.4,56z"/></svg>',
  Path =
    "M194.2,28.6c1.1-0.1,1.2,0.1,2,1.7l30,85.5h24.7l-33.6-95.6c-3.6-10.6-11.9-15.2-22.7-15.3 c-10.5,0-19.1,4.9-22.7,15.3l-33.6,95.6H163l29.8-85.5C193.1,29.2,193.6,28.6,194.2,28.6z M353.1,115.8h23.3V4.8h-23.3V115.8z M498,60c0.2,42.3-21.1,57.9-58.3,55.8c-33.5,0.1-50.2-18.9-50-55.8c0.1-34.5,16-55.1,50.1-55.1C476.4,2.9,497.6,18.2,498,60z M474.6,60.6c-0.3-18.4-4.1-31.8-22.2-32.2h-17.4c-18.1,0.4-21.9,13.8-22.2,32.2c0,21,7.3,31.5,22,31.5h17.7 C467.3,92.2,474.6,81.7,474.6,60.6z M318.5,4.8l-29.6,85c-0.6,1.4-1.1,2.2-1.7,2.2c-1.3,0.1-1.7-0.3-2.5-2.2l-29.5-85h-24.7 l33.6,95.7c3.5,10.3,12.2,15.1,22.7,15.1c10.7-0.3,18.9-4.5,22.7-15.1L343,4.8H318.5z M59.4,8.6C37.8,8.5,18.6,6.5,2,4 c1.3,5.7,4.3,18,5.7,23.8l20.4,4v84.1h23.5V32.1h21.4v83.8h23.5V31.7l20.4-4L122.4,4C104.9,6.6,82.4,8.7,59.4,8.6z",
  Stroke =
    '<svg class="stroke" viewBox="0 0 2000 1125"><path class="x-line" d="M0,322H268.67c237.48,0,430,192.52,430,430v372"/><path class="x-line" d="M1351.73-1V135.36c0,365.87,288.4,664.37,650.27,680.6"/></svg>',
  iconLoad =
    '<svg viewBox="0 0 500 160"><path class="stroke-ani" d="' +
    Path +
    '"></path></svg>',
  logoA = '<svg viewBox="0 0 500 120"><path d="' + Path + '"></path></svg>',
  A = creatDiv("div", "all-pics"),
  B = creatDiv("div", "all-album"),
  C = creatDiv("div", "allvideo"),
  D = creatDiv("div", "overlay-dark"),
  E = creatDiv("div", "loadx"),
  F = creatDiv("div", "srcoll-down"),
  H = creatDiv("div", "go-top");
(F.innerHTML = svgDown),
  (H.innerHTML = svgTop),
  WindBody.append(A, B, C, D, E, F, H);
var allPics = document.querySelector(".all-pics"),
  allAlbum = document.querySelector(".all-album"),
  allVideo = document.querySelector(".allvideo"),
  overlayDark = document.querySelector(".overlay-dark"),
  Loadx = document.querySelector(".loadx"),
  scrollDown = document.querySelector(".srcoll-down"),
  goTop = document.querySelector(".go-top"),
  wrapload =
    '<div class="wrap-logo loader">' +
    Stroke +
    '<div class="loadicon"><svg class="load-present" viewBox="0 0 500 160"><path  class="stroke-line" fill="#fff" d="' +
    Path +
    '"></path></svg></div></div>';
"home-page" == IDPage
  ? (titlePage.classList.add("display-none"),
    ((Mask = creatDiv("div", "mask")).innerHTML = wrapload),
    document.body.appendChild(Mask))
  : (scrollDown.classList.add("not-mobile"),
    ((maskInner = creatDiv("div", "mask-inner loader")).innerHTML = iconLoad),
    document.body.appendChild(maskInner));
(Array.from(document.querySelectorAll(".effect-text"), function (e) {
  if (e) {
    var t = e.textContent,
      r = creatDiv("div", "inner"),
      o = creatDiv("span", "normal"),
      a = creatDiv("span", "hover");
    (o.innerHTML = t),
      (a.innerHTML = t),
      r.append(o, a),
      (e.innerHTML = ""),
      e.append(r);
  }
}),
boxVideo || ytVideo) &&
  (id_Inline ||
    (((script = document.createElement("script")).id = "video_js"),
    (script.type = "text/javascript"),
    script.setAttribute("defer", !0),
    ((style = document.createElement("link")).id = "video_css"),
    (style.type = "text/css"),
    (style.rel = "stylesheet"),
    (script.src = getDirect + "template/js/video.js"),
    (style.href = getDirect + "template/css/video.css"),
    document.head.appendChild(script),
    document.head.appendChild(style)));
var style,
  slideBox =
    document.querySelector(".slidebox") ||
    document.querySelector(".link-album") ||
    document.querySelector(".view-album"),
  id_slide = document.getElementById("slide_js");
slideBox &&
  (id_slide ||
    (((script = document.createElement("script")).id = "slide_js"),
    (script.type = "text/javascript"),
    script.setAttribute("defer", !0),
    ((style = document.createElement("link")).id = "slide_css"),
    (style.type = "text/css"),
    (style.rel = "stylesheet"),
    (script.src = getDirect + "template/js/slide.js"),
    (style.href = getDirect + "template/css/slide.css"),
    document.head.appendChild(script),
    document.head.appendChild(style)));
if (viewAllbum || dotNum.length > 0) {
  var id_Pinch = document.getElementById("pinch_js");
  if (!id_Pinch)
    ((script = document.createElement("script")).id = "pinch_js"),
      (script.type = "text/javascript"),
      script.setAttribute("defer", !0),
      (script.src = getDirect + "template/js/pinchzoom.js"),
      document.head.appendChild(script);
}
if (dotP.length > 0) {
  var id_Zoom = document.getElementById("zoom_js");
  if (!id_Zoom)
    ((script = document.createElement("script")).id = "zoom_js"),
      (script.type = "text/javascript"),
      script.setAttribute("defer", !0),
      (script.src = getDirect + "template/js/panzoom.js"),
      document.head.appendChild(script);
  for (var info = creatDiv("div", "info-box"), i = 0; i < dotP.length; i++) {
    dotP[i].style.setProperty("--data-index", i);
    var Text = dotP[i].dataset.text,
      Name = dotP[i].dataset.name,
      sBox = creatDiv("div", "show-box");
    (sBox.innerHTML = '<div class="faci-text"><p>' + Text + "</p></div>"),
      sBox.setAttribute("data-pic", Name),
      info.appendChild(sBox);
  }
  document.querySelector(".box-cover-right") &&
    document.querySelector(".box-cover-right").prepend(info);
  var infoBox = document.querySelector(".info-box");
}
var appendGradient = function () {
    if (!document.getElementById("svg_gradient")) {
      var e = document.createElement("div");
      (e.id = "svg_gradient"),
        (e.innerHTML = Gradient),
        (e.style.visibility = "hidden"),
        (e.style.width = "0"),
        (e.style.height = "0"),
        document.body.appendChild(e);
    }
  },
  appendToggle = function (e) {
    if (!e.querySelector(".slidebox-toggle")) {
      var t = creatDiv("div", "slidebox-toggle");
      (t.type = "button"),
        t.setAttribute("aria-controls", "toggle-track"),
        t.setAttribute("aria-label", "Start"),
        (t.innerHTML =
          '<svg class="slidebox-toggle-play" viewBox="0 0 30 30"><path d="M5,5 5,25 25,15z"/></svg><svg class="slidebox-toggle-pause" viewBox="0 0 30 30"><path d="M5,5h7v20H5V5z M18,5h7v20h-7V5z"/></svg>'),
        e.prepend(t);
    }
  };
if (
  ("home-page" == IDPage ||
  "about-page" == IDPage ||
  "contact-page" == IDPage ||
  "location-page" == IDPage ||
  "library-page" == IDPage ||
  "error-page" == IDPage ||
  "thankyou-page" == IDPage
    ? boxSlider.classList.add("desktop-slide")
    : titlePage.classList.add("display-none"),
  "masterplan-page" == IDPage)
) {
  boxSlider.classList.add("desktop-slide"), rightHeader.classList.add("white");
  var script,
    id_key = document.getElementById("key_js");
  if (!id_key)
    ((script = document.createElement("script")).id = "key_js"),
      (script.type = "text/javascript"),
      script.setAttribute("defer", !0),
      (script.src = getDirect + "template/js/keyplan.js"),
      document.head.appendChild(script);
  var makeImg = function () {
    var e = creatDiv("div", "bg-house-img");
    document.querySelector(".bg-house .bg-house-img") ||
      document.querySelector(".bg-house").append(e);
    var t = [
      getDirect + "template/images/jpg/bg1.jpg",
      getDirect + "template/images/jpg/bg1-1.jpg",
      getDirect + "template/images/jpg/bg3-1.jpg",
      getDirect + "template/images/jpg/bg4.jpg",
      getDirect + "template/images/jpg/bg6.jpg",
    ];
    !(function () {
      e.style.backgroundImage = "none";
      var r = Math.floor(Math.random() * t.length);
      e.style.backgroundImage = "url(" + t[r] + ")";
    })();
  };
}
if (
  ("facilities-page" == IDPage &&
    (boxSlider.classList.add("desktop-slide"),
    rightHeader.classList.add("white"),
    appendGradient(),
    document.querySelectorAll(".facilities").forEach(function (e) {
      var t = e.querySelectorAll(".dot-num");
      if (t)
        for (var r = 0; r < t.length; r++)
          t[r].style.setProperty("--data-index", r);
      var o = e.querySelectorAll(".box-list-inner");
      if (o)
        for (r = 0; r < o.length; r++)
          o[r].style.setProperty("--data-index", r);
    })),
  document.querySelector('.container[data-name="masterplan-02"]') &&
    document.querySelector(".load-apartment").classList.add("opt-02"),
  document.querySelector(".ani-fill") && appendGradient(),
  "location-page" == IDPage &&
    document.querySelector(".location-intro .box-txt"))
) {
  var Clone = scrollDown.cloneNode(!0);
  document.querySelector(".location-intro .box-txt").append(Clone);
}
if (
  ((document.querySelector(".home-location") || "location-page" == IDPage) &&
    appendGradient(),
  "contact-page" == IDPage && boxNav.classList.add("not-need"),
  ("error-page" != IDPage && "thankyou-page" != IDPage) ||
    (titlePage.classList.add("display-none"), boxNav.classList.add("not-need")),
  "news-page" == IDPage &&
    (Header.classList.add("light"), rightHeader.classList.add("white")),
  "progress-page" == IDPage &&
    (rightHeader.classList.add("white"),
    leftHeader.classList.add("color-normal-dark")),
  document.querySelector(".home-facilities"))
) {
  var Faci,
    FaciPage = document.querySelector(".home-facilities .content-main"),
    FaciSlide = document.querySelector(".faci-slide");
  (Clone = FaciSlide.cloneNode(!0)).classList.replace("faci-slide", "bg-slide"),
    FaciPage.prepend(Clone),
    document.querySelectorAll(".bg-slide .faci-item").forEach(function (e) {
      e.classList.replace("faci-item", "bg-cover");
      var t = e.querySelector("img");
      e.append(t),
        e.querySelector(".pic-cover").remove(),
        e.querySelector(".box-txt").remove();
    });
  var Clone2 = FaciSlide.cloneNode(!0);
  Clone2.classList.replace("faci-slide", "text-slide"),
    document.querySelector(".home-facilities .wrap-content").append(Clone2),
    document.querySelectorAll(".text-slide .faci-item").forEach(function (e) {
      e.classList.replace("faci-item", "tilte-slide");
      var t = e.querySelector(".box-txt");
      e.append(t), e.querySelector(".pic-cover").remove();
    });
  var Length = FaciSlide.querySelectorAll(".slidebox-item").length;
  Length > 1 && appendToggle(FaciSlide);
}
var scrollStay = boxSlider.classList.contains("desktop-slide");
wrapView.length &&
  wrapView.forEach(function (e) {
    var t = creatDiv("div", "icon-svg");
    (t.innerHTML =
      '<svg viewBox="0 0 100 100"><path fill="currentColor" d="M42.5,62.1 52.7,50 42.5,37.9 46.4,36.8 57.5,50 46.4,63.2"/><path class="before" fill="none" stroke="currentColor" d="M4,33.1C10.9,14.4,28.9,1,50,1c27.1,0,49,21.9,49,49S77.1,99,50,99 C28.8,99,10.8,85.6,3.9,66.8"/><path class="after" fill="none" d="M4,33.1C10.9,14.4,28.9,1,50,1c27.1,0,49,21.9,49,49S77.1,99,50,99 C28.8,99,10.8,85.6,3.9,66.8"/></svg>'),
      e.querySelector(".view-more") && e.querySelector(".view-more").append(t);
  }),
  viewVideo &&
    document.querySelectorAll(".view-video").forEach(function (e) {
      e.innerHTML = iconVid;
    }),
  viewAllbum &&
    document.querySelectorAll(".view-album").forEach(function (e) {
      e.innerHTML = iconAlbum;
    }),
  downloadPdf &&
    document.querySelectorAll(".download-pdf").forEach(function (e) {
      e.innerHTML = iconPdf;
    }),
  viewVirtual &&
    document.querySelectorAll(".view-virtual").forEach(function (e) {
      e.innerHTML = iconVirtual;
    }),
  closeApart && (closeApart.innerHTML = svgClose),
  document.querySelector(".key-block") &&
    document.querySelectorAll(".key-block").forEach(function (e) {
      e.classList.add("column", "col-short");
    }),
  document.querySelector(".bgx-slide") &&
    appendToggle(document.querySelector(".bgx-slide")),
  document.querySelector(".bgx-slide") &&
    appendToggle(document.querySelector(".bgx-slide")),
  document.querySelector(".lifestyle-slide") &&
    appendToggle(document.querySelector(".lifestyle-slide")),
  fullBanner &&
    document.querySelectorAll(".full-banner").forEach(function (e) {
      if (e.querySelectorAll(".slidebox-item").length > 1) {
        var t = creatDiv("div", "slidebox-toggle"),
          r = creatDiv("div", "overlay-hover next-right"),
          o = creatDiv("div", "overlay-hover prev-left");
        (t.type = "button"),
          t.setAttribute("aria-controls", "toggle-track"),
          t.setAttribute("aria-label", "autoplay"),
          (t.innerHTML =
            '<svg class="slidebox-toggle-play" viewBox="0 0 30 30"><path d="M5,5 5,25 25,15z"/></svg><svg class="slidebox-toggle-pause" viewBox="0 0 30 30"><path d="M5,5h7v20H5V5z M18,5h7v20h-7V5z"/></svg>'),
          e.prepend(t),
          r.setAttribute("data-click", "Next"),
          o.setAttribute("data-click", "Prev"),
          e.prepend(t, r, o);
      }
    }),
  document.querySelector(".tagline") &&
    document.querySelectorAll(".tagline").forEach(function (e) {
      var t = creatDiv("button", "play-gsap"),
        r = creatDiv("button", "pause-gsap");
      (t.type = "button"),
        (r.type = "button"),
        (t.innerHTML = "Play"),
        (r.innerHTML = "Pause"),
        e.prepend(t, r);
    });
const Format = function () {
    var e = document.querySelectorAll(".load-text video");
    e &&
      Array.from(e, function (e) {
        (e.preload = "none"),
          (e.muted = !0),
          (e.autoplay = !0),
          (e.controls = !0),
          (e.loop = !0),
          e.setAttribute("playsinline", "true"),
          (e.playsinline = !0),
          e.setAttribute("loading", "lazy");
        var t = e.parentNode,
          r = creatDiv("div", "inside-video");
        e.parentNode.parentNode.replaceChild(r, t), r.append(e);
      });
    var t = document.querySelectorAll(".load-text iframe");
    t &&
      Array.from(t, function (e) {
        var t = e.parentNode,
          r = creatDiv("div", "div-iframe");
        e.parentNode.parentNode.replaceChild(r, t), r.append(e);
        var o = e.src.match(
          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
        );
        o &&
          11 == o[2].length &&
          ((e.src = e.src + "?rel=0&enablejsapi=1&mute=1"),
          e.setAttribute("allow", "autoplay; encrypted-media"),
          e.parentNode.classList.add("vidyoutube"));
      });
    var r = document.querySelectorAll(".load-text img");
    r &&
      Array.from(r, function (e, t) {
        var r = e.parentNode,
          o = e.parentNode.nextElementSibling;
        if (o) var a = o.querySelector("img");
        var n = document.createElement("figure");
        if (
          (o ||
            ((n.className = "figure-img"),
            e.parentNode.parentNode &&
              (e.parentNode.parentNode.replaceChild(n, r), n.append(e))),
          o && a && "PRE" != o.tagName
            ? e.parentNode.parentNode &&
              ((n.className = "figure-img"),
              e.parentNode.parentNode.replaceChild(n, r),
              n.append(e))
            : o &&
              !a &&
              ((n.className = "figure-img"),
              e.parentNode.parentNode.replaceChild(n, r),
              n.append(e)),
          o && !a && "PRE" == o.tagName)
        ) {
          var i = o.textContent;
          (n.className = "figure-caption"),
            n.append(o),
            (figcaption = document.createElement("figcaption")),
            (figcaption.innerHTML = i),
            (figcaption.className = "figcaption"),
            n.replaceChild(figcaption, o);
        }
      });
    var o = document.querySelector(".chapeau");
    o && 0 == o.innerHTML.length && o.classList.add("height-zero");
    var a = document.querySelectorAll(".load-text .div-figure");
    a &&
      a.forEach(function (e) {
        0 == e.textContent.length && e.classList.add("height-zero");
      });
    var n = document.querySelectorAll(
      ".load-text div:not(.div-figure):not(.div-iframe):not(.inside-video)"
    );
    n &&
      n.forEach(function (e) {
        e.removeAttribute("style"),
          e.removeAttribute("class"),
          e.textContent.length <= 1 && e.remove();
      }),
      document.querySelector(".load-text") &&
        (document
          .querySelectorAll(
            ".chapeau, .load-text img, .load-text h2,.load-text h3,.load-text h4,.load-text p,.load-text li"
          )
          .forEach(function (e) {
            e.classList.add("ani-item");
          }),
        CheckIMG());
  },
  clickAddMore = function (e, t, r) {
    if ("vi" == HTML.lang) var o = "Xem thêm";
    else o = "View more";
    var a =
        '<button class="view-more ani-item" type="button" aria-expanded="false" arial-label="view-more"><div class="arrow-more"><svg viewBox="0 0 100 100"><path fill="currentColor" d="M33.6,37.9 50,51.8 66.5,37.9 68.8,46.2 50,62.1 31.2,46.2"/></svg></div><span>' +
        o +
        "</span></button>",
      n = document.createElement("div");
    (n.className = "click-more"), (n.innerHTML = a);
    var i = t,
      l = r;
    i.length > r &&
      (e.parentNode.querySelector(".click-more") || e.parentNode.append(n),
      i.length > l &&
        i.forEach(function (e, t) {
          e.classList.toggle("hide-it", t >= r);
        }),
      n.querySelector(".view-more").addEventListener("click", function (e) {
        for (var t = l; t < l + r; t++)
          i[t] && i[t].classList.remove("hide-it");
        (l += r), thatScroll.resize(), l >= i.length && n.remove();
      }));
  };
var El = document.querySelector(".wrap-news-two"),
  That = document.querySelectorAll(".wrap-news-two  .item-news"),
  num = 5;
function RemoveClass(e) {
  for (var t = 0; t < e.length; t++)
    e[t].classList.remove("active"),
      e[t].classList.remove("current"),
      e[t].classList.remove("show"),
      e[t].classList.remove("move"),
      e[t].classList.remove("show-text"),
      e[t].classList.remove("showbox"),
      e[t].classList.remove("showup");
}
function ResizeWindows() {
  var e = window.innerHeight >= window.innerWidth,
    t =
      (window.innerHeight,
      window.innerWidth,
      window.innerHeight / window.innerWidth),
    r = window.innerWidth / 2310,
    o = window.innerWidth / 1600,
    a = window.innerWidth / 1550,
    n = window.innerHeight / 1400,
    i = window.innerWidth / 1350,
    l = window.innerWidth / 1150;
  if (
    (Mobile.matches
      ? HTML.classList.add("is-mobile")
      : HTML.classList.remove("is-mobile"),
    t > 0.58 && !Mobile.matches
      ? WindBody.classList.add("ratio-4-3")
      : WindBody.classList.remove("ratio-4-3"),
    subItems &&
      Array.from(subItems, function (e) {
        e.classList.contains("off") && e.classList.remove("off");
        var t = Mobile.matches ? e.offsetHeight : e.offsetHeight + 20;
        e.style.setProperty("--data-height", t + "px"), e.classList.add("off");
      }),
    document.querySelector(".go-news") &&
      document.querySelectorAll(".go-news").forEach(function (e) {
        var t = e.querySelector("span").offsetWidth;
        e.style.setProperty("--but-width", t - 10 + "px");
      }),
    Banner)
  ) {
    var c = Banner.offsetHeight;
    WindBody.style.setProperty("--top-height", c + "px");
  }
  if (document.querySelector(".home-lifestyle .wrap-slide")) {
    var s =
      document.querySelector(".home-lifestyle .wrap-slide").offsetHeight +
      innerWidth / 5;
    document
      .querySelector(".home-lifestyle")
      .style.setProperty("--wrap-height", s + "px");
  }
  if (faciPlan) {
    if (
      (faciPlan.forEach(function (i) {
        var c = i.querySelector(".master-bg"),
          s = i.parentNode,
          d = i.parentNode.parentNode.dataset.name,
          u = s.querySelector(".faci-note"),
          m = creatDiv("div", "show-box-info");
        if (
          ((m.innerHTML = '<div class="show-box-inner"></div>'),
          m.setAttribute("data-name", d),
          s.querySelector(".show-box-info") || i.prepend(m),
          c.querySelector(".alldot").setAttribute("data-name", d),
          s.parentNode.querySelector(".faci-note").setAttribute("data-name", d),
          Mobile.matches)
        ) {
          if (e) {
            var p =
              s.parentNode.classList.contains("floor-02") ||
              s.parentNode.classList.contains("floor-03") ||
              s.parentNode.classList.contains("floor-03-B") ||
              s.parentNode.classList.contains("floor-36-37") ||
              s.parentNode.classList.contains("floor-top");
            (c.style.transform = p ? "scale(" + l + ")" : "scale(" + a + ")"),
              window.innerWidth <= 580
                ? (c.style.left = window.innerWidth / 2 - 1140 + "px")
                : (c.style.left = window.innerWidth / 2 - 1130 + "px"),
              (c.style.top = i.offsetHeight / 2 - 700 + "px");
          } else
            (c.style.top = i.offsetHeight / 2 - 650 + "px"),
              (c.style.left = window.innerWidth / 2 - 1130 + "px"),
              (c.style.transform = "scale(" + o + ")");
          u && !s.querySelector(".content-main > .faci-note") && s.append(u);
        } else (c.style.transform = t > 0.58 ? "scale(" + n + ")" : "scale(" + r + ")"), (c.style.top = i.offsetHeight / 2 - 700 + "px"), (c.style.left = window.innerWidth / 2 - 1155 + "px"), u && !i.querySelector(".faci-note") && i.append(u);
      }),
      masterPlan)
    ) {
      var d = masterPlan.querySelector(".master-bg");
      Mobile.matches
        ? e
          ? ((d.style.top = masterPlan.offsetHeight / 2 - 700 + "px"),
            (d.style.left = window.innerWidth / 2 - 1130 + "px"),
            (d.style.transform = "scale(" + a + ")"))
          : ((d.style.top = masterPlan.offsetHeight / 2 - 700 + "px"),
            (d.style.left = window.innerWidth / 2 - 1130 + "px"),
            (d.style.transform = "scale(" + o + ")"))
        : ((d.style.transform =
            t > 0.58 ? "scale(" + n + ")" : "scale(" + r + ")"),
          (d.style.top = masterPlan.offsetHeight / 2 - 700 + "px"),
          (d.style.left = window.innerWidth / 2 - 1155 + "px"));
    }
    if (
      (blockPlan &&
        blockPlan.forEach(function (c) {
          var s = c.querySelector(".master-bg"),
            d = c.offsetHeight;
          c.parentNode.style.setProperty("--top-height", d + "px"),
            Mobile.matches
              ? e
                ? (window.innerWidth <= 580
                    ? document.querySelector(
                        '.container[data-name="masterplan-02"]'
                      )
                      ? (s.style.transform = "scale(" + l + ")")
                      : (s.style.transform = "scale(" + i + ")")
                    : (s.style.transform = "scale(" + a + ")"),
                  (s.style.top = c.offsetHeight / 2 - 700 + "px"),
                  document.querySelector(
                    '.container[data-name="masterplan-02"]'
                  )
                    ? (s.style.left = window.innerWidth / 2 - 1220 + "px")
                    : (s.style.left = window.innerWidth / 2 - 1130 + "px"))
                : ((s.style.transform = "scale(" + o + ")"),
                  (s.style.top = c.offsetHeight / 2 - 700 + "px"),
                  document.querySelector(
                    '.container[data-name="masterplan-02"]'
                  )
                    ? ((s.style.left = window.innerWidth / 2 - 1220 + "px"),
                      (s.style.transform = "scale(" + i + ")"))
                    : ((s.style.left = window.innerWidth / 2 - 1130 + "px"),
                      (s.style.transform = "scale(" + o + ")")))
              : ((s.style.transform =
                  t > 0.58 ? "scale(" + n + ")" : "scale(" + r + ")"),
                (s.style.top = c.offsetHeight / 2 - 700 + "px"),
                (s.style.left = window.innerWidth / 2 - 1155 + "px"));
        }),
      document.querySelector(".dot-num circle"))
    ) {
      for (
        var u = document.querySelectorAll(".dot-num circle"),
          m = document.querySelectorAll(".dot-num text"),
          p = 0;
        p < u.length;
        p++
      )
        window.innerWidth <= 480
          ? u[p].setAttribute("r", 22)
          : window.innerWidth > 480 && window.innerWidth <= 900
          ? u[p].setAttribute("r", 20)
          : window.innerWidth > 900 && window.innerWidth <= 1100
          ? u[p].setAttribute("r", 18)
          : u[p].setAttribute("r", 15);
      for (p = 0; p < m.length; p++)
        window.innerWidth <= 480
          ? (m[p].setAttribute("x", -5), m[p].setAttribute("y", 4))
          : window.innerWidth > 480 && window.innerWidth <= 900
          ? (m[p].setAttribute("x", -2), m[p].setAttribute("y", 2))
          : window.innerWidth > 900 && window.innerWidth <= 1100
          ? (m[p].setAttribute("x", -1), m[p].setAttribute("y", 1))
          : (m[p].setAttribute("x", 0), m[p].setAttribute("y", 0));
    }
    if (document.querySelector(".text-house circle")) {
      for (
        u = document.querySelectorAll(".text-house circle"),
          m = document.querySelectorAll(".text-house text"),
          p = 0;
        p < u.length;
        p++
      )
        window.innerWidth <= 480
          ? u[p].setAttribute("r", 14)
          : window.innerWidth > 480 && window.innerWidth <= 900
          ? u[p].setAttribute("r", 13)
          : window.innerWidth > 900 && window.innerWidth <= 1100
          ? u[p].setAttribute("r", 12)
          : u[p].setAttribute("r", 11);
      for (p = 0; p < m.length; p++)
        window.innerWidth <= 480
          ? (m[p].setAttribute("x", -3), m[p].setAttribute("y", 3))
          : window.innerWidth > 480 && window.innerWidth <= 900
          ? (m[p].setAttribute("x", -2), m[p].setAttribute("y", 2))
          : window.innerWidth > 900 && window.innerWidth <= 1100
          ? (m[p].setAttribute("x", -1), m[p].setAttribute("y", 1))
          : (m[p].setAttribute("x", 0), m[p].setAttribute("y", 0));
    }
    ("facilities-page" != IDPage && "masterplan-page" != IDPage) ||
      (Mobile.matches
        ? Header.classList.add("light")
        : document.querySelector(".house-detail") ||
          Header.classList.remove("light"));
  }
  "news-page" == IDPage &&
    (Mobile.matches
      ? (document.querySelector(".box-txt > .date") ||
          document.querySelectorAll(".item-news").forEach(function (e) {
            var t = e.querySelector(".date");
            e.querySelector(".box-txt").prepend(t);
          }),
        document.querySelector(".wrap-news  > .item-news") ||
          document.querySelectorAll(".item-news").forEach(function (e) {
            document.querySelector(".wrap-news ").append(e);
          }))
      : (document.querySelector(".item-news > .date") ||
          document.querySelectorAll(".item-news").forEach(function (e) {
            var t = e.querySelector(".date");
            e.prepend(t);
          }),
        document.querySelector(".wrap-news-two > .item-news") ||
          document.querySelectorAll(".item-news").forEach(function (e) {
            document.querySelector(".wrap-news-two").append(e);
          })));
}
clickAddMore(El, That, num),
  document.querySelectorAll(".data-index").forEach(function (e) {
    for (var t = e.children, r = 0; r < t.length; r++)
      if (t.length > 0) {
        var o = r + 1;
        t[r].classList.add("ani-item"),
          t[r].style.setProperty("--data-index", o);
      }
  });
var CheckIMG = function () {
  document.querySelectorAll("img").forEach(function (e) {
    var t = new Image();
    (t.src = e.src),
      (t.onload = function () {
        var t = this.height / this.width,
          r = this.width + "px",
          o = this.height + "px";
        e.setAttribute("width", r),
          e.setAttribute("height", o),
          t > 1 && e.classList.add("ratio-h"),
          e.parentNode.classList.contains("detail-pic") &&
            (e.parentNode.style.setProperty("--data-width", r),
            e.parentNode.style.setProperty("--data-height", o));
      });
  });
};
function textBreak() {
  document.querySelector(".nav-item .normal") &&
    (document.querySelector(".nav-item .normal .char") ||
      Splitting({ target: ".nav-item .normal", by: "chars" }));
  var e = document.querySelectorAll(".text-ani");
  e &&
    e.forEach(function (e) {
      e.querySelector(".word") ||
        (e.setAttribute("data-splitting", ""), Splitting({ by: "words" }));
    });
  var t = document.querySelectorAll(".text-animation");
  if (t)
    for (var r = 0; r < t.length; r++)
      if (!t[r].querySelector(".text-inner")) {
        var o = creatDiv("div", "text-inner"),
          a = t[r].querySelector("h1").innerHTML;
        (o.innerHTML = a),
          t[r].appendChild(o),
          Splitting({ target: ".text-inner", by: "chars", key: null });
      }
  var n = document.querySelectorAll(".text-break, .tagline .tagline-inner");
  n &&
    n.forEach(function (e) {
      e.querySelector(".char") ||
        (e.setAttribute("data-splitting", ""), Splitting({ by: "chars" }));
    });
}
CheckIMG();
const onPlay = function () {
  var e = document.querySelectorAll(".map-img"),
    t = new IntersectionObserver(
      function (e) {
        e.forEach(function (e) {
          e.target.classList.contains("map-img") &&
            (e.isIntersecting
              ? e.target.classList.add("show")
              : e.target.classList.remove("show"));
        });
      },
      { rootMargin: "0px 0px -25% 0px", threshold: 0.25 }
    );
  e &&
    e.forEach(function (e) {
      t.observe(e);
    });
  var r = document.querySelectorAll(".text-ani, .text-break, .text-color-head"),
    o = new IntersectionObserver(
      function (e) {
        e.forEach(function (e) {
          e.target.classList.contains("text-ani") &&
            (e.isIntersecting
              ? e.target.classList.add("show")
              : Mobile.matches || e.target.classList.remove("show")),
            e.target.classList.contains("text-break") &&
              (e.isIntersecting
                ? e.target.classList.add("show")
                : Mobile.matches || e.target.classList.remove("show")),
            e.target.classList.contains("text-color-head") &&
              (e.isIntersecting
                ? e.target.classList.add("show")
                : e.target.classList.remove("show"));
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
  r &&
    r.forEach(function (e) {
      o.observe(e);
    });
  var a = document.querySelectorAll(
      ".ani-item, .scroll-text, .group-central, .dot-num, .slidebox-arrows, .text-gradient, .icon-svg,.c-path,.c-path-no, .map-img, .wrap-form"
    ),
    n = new IntersectionObserver(function (e) {
      e.forEach(function (e) {
        e.target.classList.contains("ani-item") &&
          e.isIntersecting &&
          e.target.classList.add("on-show"),
          e.target.classList.contains("map-img") &&
            (e.isIntersecting
              ? e.target.classList.add("show")
              : Mobile.matches || e.target.classList.remove("show")),
          e.target.classList.contains("c-path") &&
            (e.isIntersecting
              ? e.target.classList.add("on-view")
              : e.target.classList.remove("on-view")),
          e.target.classList.contains("c-path-no") &&
            (e.isIntersecting
              ? e.target.classList.add("on-view")
              : e.target.classList.remove("on-view")),
          e.target.classList.contains("dot-num") &&
            (e.isIntersecting
              ? e.target.classList.add("show")
              : Mobile.matches || e.target.classList.remove("show")),
          e.target.classList.contains("scroll-text") &&
            (e.isIntersecting
              ? e.target.classList.add("fade")
              : e.target.classList.remove("fade")),
          e.target.classList.contains("group-central") &&
            e.isIntersecting &&
            !scrollStay &&
            e.target.classList.add("show-text"),
          e.target.classList.contains("slidebox-arrows") &&
            (e.isIntersecting
              ? e.target.classList.add("show")
              : Mobile.matches || e.target.classList.remove("show")),
          e.target.classList.contains("icon-svg") &&
            (e.isIntersecting
              ? e.target.classList.add("show")
              : e.target.classList.remove("show")),
          e.target.classList.contains("text-gradient") &&
            (e.isIntersecting
              ? document.querySelector(".tagline .play-gsap").click()
              : document.querySelector(".tagline .pause-gsap").click()),
          e.target.classList.contains("wrap-form") &&
            (e.isIntersecting
              ? Subscrible.classList.add("current")
              : Subscrible.classList.remove("current"));
      });
    });
  a &&
    a.forEach(function (e) {
      n.observe(e);
    });
  var i = document.querySelectorAll(".inside-video, .vidyoutube"),
    l = new IntersectionObserver(
      function (e) {
        e.forEach(function (e) {
          e.target.classList.contains("inside-video") &&
            (e.isIntersecting
              ? e.target.querySelector("video").play()
              : e.target.querySelector("video").pause()),
            e.target.classList.contains("vidyoutube") &&
              (e.isIntersecting
                ? (e.target.classList.add("onplay"),
                  controlVideo(e.target, "playVideo"))
                : (e.target.classList.remove("onplay"),
                  controlVideo(e.target, "pauseVideo")));
        });
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.2 }
    );
  i &&
    i.forEach(function (e) {
      l.observe(e);
    });
  var c = document.querySelectorAll(".clip-path"),
    s = new IntersectionObserver(function (e) {
      e.forEach(function (e) {
        e.target.classList.contains("clip-path") &&
          (e.isIntersecting
            ? e.target.classList.add("show")
            : Mobile.matches || e.target.classList.remove("show"));
      });
    });
  c &&
    c.forEach(function (e) {
      s.observe(e);
    });
};
function viewItems(e) {
  var t = document.querySelector(".sub-mobile");
  e > 100
    ? (Header.classList.add("hide"),
      scrollDown.classList.remove("show"),
      t && t.classList.add("top"))
    : (Header.classList.remove("hide"),
      scrollDown.classList.add("show"),
      t && t.classList.remove("top")),
    e >= Container.offsetHeight / 3
      ? goTop.classList.add("show")
      : goTop.classList.remove("show"),
    (windscroll = e);
}
function scrollBody() {
  document.querySelectorAll(".pic-news .pic-cover").forEach(function (e) {
    e.classList.add("pic-trans"),
      e.querySelector(".pic-img").classList.add("trans", "trans-x"),
      e.querySelector(".pic-img").setAttribute("data-speed", "-1");
  }),
    (thatScroll = new smoothScrolling({
      wrapper: HTML,
      content: WindBody,
      main: document.querySelector(".container"),
      objectTrans: "trans",
      scrollClass: "smooth",
      scrollbarClass: "scrollbar-body",
      smoothWheel: !0,
      autoResize: !0,
    })),
    (Req = requestAnimationFrame(function e(t) {
      thatScroll.raf(t), (Req = requestAnimationFrame(e));
    })),
    thatScroll.on("scroll", function (e) {
      viewItems(e.targetScroll);
    });
}
window.addEventListener(
  "scroll",
  function (e) {
    Mobile.matches && viewItems(window.pageYOffset);
  },
  { passive: !1 }
);
var ScrollInner = function (e) {
    e.scrollTop = 0;
    var t = e.querySelector(".details-center");
    (thatInner = new smoothScrolling({
      wrapper: e,
      content: t,
      scrollClass: "smooth-detail",
      scrollbarClass: "scrollbar-inner",
      smoothWheel: !0,
      duration: 1.4,
      smoothMouse: !Touch,
      autoResize: !0,
    })),
      (ReqIn = requestAnimationFrame(function e(t) {
        thatInner.raf(t), (ReqIn = requestAnimationFrame(e));
      })),
      thatInner.scrollTo(0, { immediate: !0 }),
      window.addEventListener("keydown", function (t) {
        var r = t.keyCode || t.which;
        38 == r && (t.preventDefault(), (e.scrollTop -= 50)),
          40 == r && (t.preventDefault(), (e.scrollTop += 50));
      });
  },
  WinScroll = {
    start: function () {
      WindBody.classList.remove("no-scroll"),
        HTML.classList.remove("no-scroll"),
        thatScroll && thatScroll.start();
    },
    stop: function () {
      WindBody.classList.add("no-scroll"),
        HTML.classList.add("no-scroll"),
        thatScroll && thatScroll.stop();
    },
  };
if (formRegister) {
  if ("vi" == HTML.lang)
    var textError_1 = "Nhập tên!",
      textError_2 = "Điện thoại không hợp lệ!",
      textError_3 = "Email không hợp lệ!";
  else
    (textError_1 = "Enter a name!"),
      (textError_2 = "Invalid phone number!"),
      (textError_3 = "Invalid email!");
  (document.getElementById("nameregister").dataset.error = textError_1),
    (document.getElementById("phoneregister").dataset.error = textError_2),
    (document.getElementById("emailregister").dataset.error = textError_3);
}
if (formContact) {
  if ("vi" == HTML.lang)
    (textError_1 = "Nhập tên!"),
      (textError_2 = "Điện thoại không hợp lệ!"),
      (textError_3 = "Email không hợp lệ!");
  else
    (textError_1 = "Enter a name!"),
      (textError_2 = "Invalid phone number!"),
      (textError_3 = "Invalid email!");
  (document.getElementById("namecontact").dataset.error = textError_1),
    (document.getElementById("phonecontact").dataset.error = textError_2),
    (document.getElementById("emailcontact").dataset.error = textError_3);
}
function ScrollTop(e) {
  (!Mobile.matches && scrollStay) ||
    gsap.to("html", { duration: 1, scrollTop: e, ease: "sine.inOut" });
}
scrollDown.addEventListener("click", function (e) {
  (e.preventDefault(), Mobile.matches || !scrollStay) &&
    ScrollTop(window.pageYOffset + window.innerHeight);
}),
  goTop.addEventListener("click", function (e) {
    e.preventDefault(), (!Mobile.matches && scrollStay) || ScrollTop(0);
  });
const FocusText = function () {
    document
      .querySelectorAll(".input-text:not(.input-but), .input-area")
      .forEach(function (e) {
        e.addEventListener("focusin", function (e) {
          this.querySelector(".holder").classList.add("hide");
        }),
          e.addEventListener("focusout", function (e) {
            this.querySelector("input, textarea").value.length <= 0 &&
              this.querySelector(".holder").classList.remove("hide");
          });
      });
  },
  Reset = function () {
    document.getElementById("formRegister") &&
      document.getElementById("formRegister").reset(),
      document.getElementById("formContact") &&
        document.getElementById("formContact").reset();
  };
if (PanZoom) {
  var goIn = document.querySelector(".pic-zoom-in"),
    goOut = document.querySelector(".pic-zoom-out");
  setTimeout(function () {
    (panzoom = Panzoom(PanZoom, {
      contain: "outside",
      startScale: 1,
      maxScale: Mobile.matches ? 3 : 1.5,
      minScale: 1,
      excludeClass: PanZoom,
      touchAction: "unset",
    })),
      goIn.addEventListener("click", function () {
        panzoom.zoomIn();
      }),
      goOut.addEventListener("click", function () {
        panzoom.zoomOut();
      });
  }, 500);
}
const itemZoom = function () {
  pinchZoom(
    {
      active: "zoom-active",
      transition: "zoom-transition",
      visible: "visible",
      zoom: "pinch-zoom",
    },
    {
      scaleDefault: Mobile.matches ? 2 : 1.5,
      scaleMax: Mobile.matches ? 3 : 2,
      scaleMin: 1,
      scrollDisable: !1,
      scaleDifference: 0.5,
      transitionDuration: 200,
      doubleclickDelay: 500,
    }
  );
};
var thisZoomSlide = function (e, t) {
    WinScroll.stop(),
      Loadx.classList.contains("display-block") ||
        Loadx.classList.add("display-block"),
      overlayDark.classList.add("show"),
      allAlbum.classList.add("show");
    var o = creatDiv("button", "close"),
      a = creatDiv("button", "full-screen");
    o.setAttribute("aria-label", "close"),
      (o.innerHTML = svgClose),
      (a.innerHTML = svgFull),
      allAlbum.append(o, a, e);
    var s = allAlbum.querySelector(".album-load"),
      i = s.querySelector(".album-center"),
      n = i.cloneNode(!0);
    n.classList.replace("album-center", "thumbs"),
      s.append(n),
      document
        .querySelectorAll(".thumbs .album-pic-center")
        .forEach(function (e) {
          e.classList.replace("album-pic-center", "thumb-item");
          var t = e.querySelector("img");
          e.append(t), e.querySelector(".pinch-zoom").remove();
        });
    var r = document.querySelectorAll(".thumbs .thumb-item");
    if (
      (Array.from(e.querySelectorAll(".pinch-zoom"), function (e) {
        var t = creatDiv("span", "overlay-hover");
        e.append(t);
      }),
      r.length > 7)
    )
      var l = "center",
        c = !0;
    else {
      s.querySelector(".thumbs").classList.add("align-middle");
      (l = !1), (c = !1);
    }
    iOS &&
      s.addEventListener("gesturestart", function (e) {
        e.preventDefault();
      }),
      i.classList.add("arrowcircle");
    var d = new Splide(i, {
        gap: 0,
        perPage: 1,
        arrows: !0,
        pagination: !1,
        rewind: !0,
        noDrag: ".zoom-active",
        wheel: !Mobile.matches,
        releaseWheel: !0,
        drag: !!Mobile.matches,
      }),
      u = new Splide(".thumbs", {
        autoWidth: !0,
        isNavigation: !0,
        gap: 0,
        focus: l,
        arrows: c,
        pagination: !1,
      }).mount();
    d.on("mounted", function () {
      onPlay(), d.go([t]);
    }),
      d.on("resize", function () {
        Mobile.matches
          ? (d.options = { drag: !0, wheel: !1 })
          : (d.options = { drag: !1, wheel: !0 }),
          d.refresh();
      }),
      d.on("active", function () {
        Cursor(d.root, "DOUBLE CLICK<br>TO ZOOM", "0.5rem");
      }),
      d.sync(u),
      d.mount(),
      itemZoom(),
      makeFull(),
      gsap.to(s, {
        duration: 1,
        opacity: 1,
        ease: "none",
        onComplete: function () {
          o.classList.add("fadein"),
            i.classList.add("fadein"),
            s.classList.add("show"),
            Loadx.classList.remove("display-block");
        },
      }),
      o.addEventListener("click", function () {
        return (
          gsap.to([s], {
            duration: 0.5,
            opacity: 0,
            ease: "none",
            onComplete: function () {
              allAlbum.classList.remove("show"),
                overlayDark.classList.remove("show"),
                WindBody.classList.remove("zoom-active"),
                document.querySelector("html").classList.remove("zoom-active"),
                WinScroll.start(),
                (allAlbum.innerHTML = ""),
                WindBody.classList.contains("fullscreen") && toggleFullScreen();
            },
          }),
          !1
        );
      }),
      window.addEventListener("keydown", function (e) {
        var t = e.keyCode || e.which;
        if ((27 == t && (e.preventDefault(), o.click()), 39 == t)) {
          e.preventDefault();
          var a = document.querySelector(".all-album .slidebox-arrow-next");
          if (a.classList.contains("disabled")) return;
          a.click();
        }
        if (37 == t) {
          e.preventDefault();
          var s = document.querySelector(".all-album .slidebox-arrow-prev");
          if (s.classList.contains("disabled")) return;
          s.click();
        }
      });
  },
  thisZoom = function (e, t) {
    WinScroll.stop(),
      Loadx.classList.contains("display-block") ||
        Loadx.classList.add("display-block");
    var o = creatDiv("div", "full"),
      a = creatDiv("div", "img-cover"),
      s = creatDiv("button", "close"),
      i = creatDiv("span", "overlay-hover");
    s.setAttribute("aria-label", "close"),
      (s.innerHTML = svgClose),
      o.append(a),
      o.append(i),
      allPics.classList.add("show"),
      document.querySelector(".details-content")
        ? overlayDark.classList.add("level-index-in")
        : overlayDark.classList.add("show");
    var n = e,
      r = creatDiv("img", "img-src");
    if (
      (r.setAttribute("alt", "pic-large"),
      (r.src = n),
      !document.querySelector(".all-pics .img-src"))
    ) {
      if (
        (allPics.append(o, s), allPics.querySelector(".img-cover").append(r), t)
      ) {
        var l = creatDiv("div", "text-length"),
          c = creatDiv("h3", "");
        (c.innerHTML = t),
          l.append(c),
          allPics.prepend(l),
          l.classList.add("fadein");
      }
      allPics.querySelector("img").addEventListener("load", function (e) {
        o.classList.add("pinch-zoom"),
          e && (itemZoom(), Cursor(o, "DOUBLE CLICK<br>OR WHEEL", "0.5rem")),
          gsap.to(Loadx, {
            duration: 0.3,
            opacity: 1,
            ease: "none",
            onComplete: function () {
              r.classList.add("fadein"),
                s.classList.add("fadein"),
                setTimeout(function () {
                  Loadx.classList.remove("display-block");
                }, 500);
            },
          });
      });
    }
    iOS &&
      allPics.addEventListener("gesturestart", function (e) {
        e.preventDefault();
      }),
      s.addEventListener("click", function () {
        Loadx.classList.remove("display-block"),
          gsap.to(o, {
            duration: 0.5,
            opacity: 0,
            ease: "none",
            onComplete: function () {
              allPics.classList.remove("show"),
                document.querySelector(".details-content")
                  ? overlayDark.classList.remove("level-index-in", "show")
                  : (WinScroll.start(), overlayDark.classList.remove("show")),
                WindBody.classList.remove("zoom-active"),
                HTML.classList.remove("zoom-active"),
                (allPics.innerHTML = "");
            },
          });
      }),
      window.addEventListener("keydown", function (e) {
        27 == (e.keyCode || e.which) && (e.preventDefault(), s.click());
      });
  };
const ZoomPic = function () {
    var e = document.querySelectorAll(".zoom-pic");
    e.forEach(function (t, o) {
      t.addEventListener("click", function (t) {
        if ((t.preventDefault(), t.stopPropagation(), e.length > 1)) {
          var a = creatDiv("div", "album-load"),
            s = creatDiv("div", "slidebox album-center"),
            i = creatDiv("div", "slidebox-track"),
            n = creatDiv("div", "slidebox-list");
          i.appendChild(n), s.appendChild(i), a.appendChild(s);
          for (var r = 0; r < e.length; r++) {
            var l = e[r].parentNode.cloneNode(!0),
              c = l.querySelector(".pic-img");
            l.prepend(c),
              l
                .querySelector(".pic-img")
                .classList.remove("plus-x", "trans", "trans-x"),
              l.querySelector(".pic-img").removeAttribute("style"),
              l
                .querySelector(".pic-img")
                .classList.replace("pic-img", "container-zoom"),
              l.classList.replace("picture-item", "album-pic-center"),
              l.querySelector(".container-zoom").classList.add("pinch-zoom"),
              l.querySelector(".zoom-pic").remove(),
              l.querySelector(".pic-cover").remove(),
              l.classList.add("slidebox-item"),
              n.appendChild(l);
          }
          thisZoomSlide(a, o);
        } else {
          var d = this.parentNode.querySelector("img").src;
          thisZoom(d);
        }
      });
    });
  },
  Cursor = function (e, t, o) {
    if (!e.querySelector(".cursor-zoom")) {
      var a = creatDiv("div", "cursor-zoom");
      (a.innerHTML =
        '<div class="cursor-bg"><span class="cursor-text" style="font-size:' +
        o +
        '">' +
        t +
        "</span></div>"),
        e.append(a);
    }
    var s = e.querySelector(".cursor-zoom"),
      i = s.offsetWidth;
    (e.querySelector(".cursor-bg").style.backgroundColor = "rgba(0,0,0,0.1)"),
      e.addEventListener("mousemove", function (e) {
        if (s.classList.contains("active")) {
          var t = e.clientX - this.getBoundingClientRect().left,
            o = e.clientY - this.getBoundingClientRect().top;
          gsap.to(s, {
            duration: 0.1,
            left: 0,
            top: 0,
            overwrite: "auto",
            x: t - i / 2,
            y: o - i / 2,
            ease: "none",
          });
        }
      }),
      Array.from(document.querySelectorAll(".overlay-hover"), function (e) {
        var t = e.getBoundingClientRect().left / 2,
          o = e.getBoundingClientRect().top / 2;
        e.addEventListener("mouseenter", function (e) {
          gsap.set(s, { left: t - i / 2, top: o - i / 2 }),
            s.classList.add("active");
        }),
          e.addEventListener("mouseleave", function () {
            gsap.set(s, { left: t - i / 2, top: o - i / 2 }),
              s.classList.remove("active");
          });
      });
  },
  AlbumLoad = function (e, t) {
    var o = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    o.open("GET", e, !0),
      (o.onreadystatechange = function () {
        if (4 == o.readyState && 200 == o.status) {
          allAlbum.innerHTML = o.responseText;
          var e = allAlbum.querySelector(".album-load"),
            a = allAlbum.querySelector(".close-album"),
            s = allAlbum.querySelector(".full-screen");
          (a.innerHTML = svgClose), (s.innerHTML = svgFull);
          var i = e.querySelector(".album-center"),
            n = i.cloneNode(!0);
          n.classList.replace("album-center", "thumbs"),
            e.append(n),
            document
              .querySelectorAll(".thumbs .album-pic-center")
              .forEach(function (e) {
                e.classList.replace("album-pic-center", "thumb-item");
                var t = e.querySelector("img");
                e.append(t),
                  e.querySelector(".pic-name").remove(),
                  e.querySelector(".pinch-zoom").remove();
              });
          var r = document.querySelectorAll(".thumbs .thumb-item");
          Array.from(
            document.querySelectorAll(".album-center .container-zoom"),
            function (e) {
              var t = creatDiv("span", "overlay-hover");
              e.append(t);
            }
          ),
            t &&
              ((e.querySelector(".title-album h2").innerHTML = t),
              e
                .querySelector(".title-album")
                .classList.add("font-head", "fadeindown")),
            iOS &&
              e.addEventListener("gesturestart", function (e) {
                e.preventDefault();
              });
          var l = allAlbum.querySelectorAll(".pic-name > h3");
          if (
            (l &&
              l.forEach(function (e) {
                e.setAttribute("data-splitting", ""), Splitting();
              }),
            r.length > 7)
          )
            var c = "center",
              d = !0;
          else {
            e.querySelector(".thumbs").classList.add("align-middle");
            (c = !1), (d = !1);
          }
          i.classList.add("arrowcircle"),
            1 == r.length &&
              (e.querySelector(".thumbs").classList.add("display-none"),
              i.classList.add("no-drag"));
          var u = new Splide(i, {
              gap: 0,
              perPage: 1,
              arrows: !0,
              pagination: !1,
              noDrag: ".zoom-active",
              drag: !!Mobile.matches,
            }),
            m = new Splide(".thumbs", {
              autoWidth: !0,
              isNavigation: !0,
              gap: 0,
              focus: c,
              arrows: d,
              pagination: !1,
            }).mount();
          u.on("mounted", function () {
            onPlay();
          }),
            u.on("resize", function () {
              Mobile.matches
                ? (u.options = { drag: !0, wheel: !1 })
                : (u.options = { drag: !1, wheel: !0 }),
                u.refresh();
            }),
            u.on("active", function () {
              Cursor(u.root, "DOUBLE CLICK<br>TO ZOOM", "0.5rem");
            }),
            u.sync(m),
            u.mount(),
            itemZoom(),
            makeFull(),
            gsap.to(e, {
              duration: 1,
              opacity: 1,
              ease: "none",
              onComplete: function () {
                a.classList.add("fadein"),
                  i.classList.add("fadein"),
                  e.classList.add("show"),
                  Loadx.classList.remove("display-block");
              },
            }),
            a.addEventListener("click", function () {
              return (
                gsap.to([e], {
                  duration: 0.5,
                  opacity: 0,
                  ease: "none",
                  onComplete: function () {
                    allAlbum.classList.remove("show"),
                      overlayDark.classList.remove("show"),
                      WindBody.classList.remove("zoom-active"),
                      document
                        .querySelector("html")
                        .classList.remove("zoom-active"),
                      WinScroll.start(),
                      (allAlbum.innerHTML = ""),
                      WindBody.classList.contains("fullscreen") &&
                        toggleFullScreen();
                  },
                }),
                !1
              );
            }),
            window.addEventListener("keydown", function (e) {
              var t = e.keyCode || e.which;
              if ((27 == t && (e.preventDefault(), a.click()), 39 == t)) {
                e.preventDefault();
                var o = document.querySelector(
                  ".all-album .slidebox-arrow-next"
                );
                if (o.classList.contains("disabled")) return;
                o.click();
              }
              if (37 == t) {
                e.preventDefault();
                var s = document.querySelector(
                  ".all-album .slidebox-arrow-prev"
                );
                if (s.classList.contains("disabled")) return;
                s.click();
              }
            });
        }
      }),
      o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
      o.send();
  };
function VideoLoad(e, t) {
  var o = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  o.open("GET", e, !0),
    (o.onreadystatechange = function () {
      if (4 == o.readyState && 200 == o.status) {
        allVideo.innerHTML = o.responseText;
        var e = document.querySelector(".video-list"),
          a = e.querySelector(".video-wrap"),
          s = e.querySelector(".close-video");
        if (((s.innerHTML = svgClose), a.classList.contains("addyoutube"))) {
          if (!document.getElementById("youtube_js")) {
            var i = document.createElement("script");
            (i.id = "youtube_js"),
              (i.src = "https://www.youtube.com/iframe_api"),
              document.body.appendChild(i);
          }
          var n,
            r = t.match(
              /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
            ),
            l =
              '<iframe id="iframe_VYT" title="video" src="https://www.youtube.com/embed/' +
              (t = r && 11 == r[2].length ? r[2] : "no video found") +
              "?autoplay=1&enablejsapi=1&controls=1&loop=1&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" +
              t +
              '"allow="autoplay" frameborder="0" allowfullscreen></iframe>';
          function c(e) {
            if (
              (Mobile.matches && (e.target.mute(), e.target.playVideo()),
              n.getPlayerState())
            ) {
              var t = n.getVideoData().title;
              a.querySelector("iframe").setAttribute("title", t);
            }
            Loadx.classList.remove("display-block");
          }
          (a.innerHTML = l),
            setTimeout(function () {
              n = new YT.Player("iframe_VYT", { events: { onReady: c } });
            }, 4e3);
        } else {
          var d = document.createElement("video");
          (d.className = "video-skin"),
            (d.id = "viewvideo"),
            (d.preload = "auto"),
            (d.controls = !0),
            d.setAttribute("playsinline", "true"),
            (d.muted = !1),
            (d.autoplay = !0),
            (d.loop = !0),
            (d.playsinline = !0);
          var u = document.createElement("source");
          (u.type = "video/mp4"),
            (u.src = t),
            d.appendChild(u),
            a.appendChild(d),
            d.load(),
            (d.onloadedmetadata = function () {
              setTimeout(function () {
                Loadx.classList.remove("display-block");
              }, 1e3);
            });
        }
        gsap.to(e, {
          duration: 0.5,
          opacity: 1,
          ease: "none",
          onComplete: function () {
            s.classList.add("fadein");
          },
        }),
          s.addEventListener("click", function () {
            Loadx.classList.remove("display-block"),
              gsap.to(allVideo, {
                duration: 0.5,
                opacity: 0,
                ease: "none",
                onComplete: function () {
                  allVideo.classList.remove("show"),
                    overlayDark.classList.remove("show"),
                    WinScroll.start(),
                    (allVideo.innerHTML = "");
                },
              });
          }),
          window.addEventListener("keydown", function (e) {
            27 == (e.keyCode || e.which) && (e.preventDefault(), s.click());
          });
      }
    }),
    o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    o.send();
}
function loadVirtual(e, t) {
  var o = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  o.open("GET", e, !0),
    (o.onreadystatechange = function () {
      if (4 == o.readyState && 200 == o.status) {
        allVideo.innerHTML = o.responseText;
        var e = document.querySelector(".video-list"),
          a = e.querySelector(".video-wrap"),
          s = e.querySelector(".close-virtual");
        s.innerHTML = svgClose;
        var i = creatDiv("div", "logo white");
        e.prepend(i);
        var n =
          '<iframe id="virtual_id" title="360 Virtual" src="' +
          t +
          '" frameborder="0" allowfullscreen></iframe>';
        (a.innerHTML = n),
          a.classList.add("virtual"),
          gsap.to(e, {
            duration: 0.5,
            opacity: 1,
            ease: "none",
            onComplete: function () {
              s.classList.add("goleft"),
                Loadx.classList.remove("display-block");
            },
          }),
          s.addEventListener("click", function () {
            gsap.to(allVideo, {
              duration: 0.5,
              opacity: 0,
              ease: "none",
              onComplete: function () {
                allVideo.classList.remove("show"),
                  overlayDark.classList.remove("show"),
                  WinScroll.start(),
                  (allVideo.innerHTML = "");
              },
            });
          });
      }
    }),
    o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    o.send();
}
document.querySelectorAll(".view-video").forEach(function (e) {
  e.addEventListener("click", function (e) {
    e.preventDefault(), e.stopPropagation();
    var t = this.dataset.href || this.href,
      o = this.dataset.embed,
      a = this.dataset.video;
    if (o) var s = o;
    else s = a;
    Loadx.classList.contains("display-block") ||
      Loadx.classList.add("display-block"),
      WinScroll.stop(),
      overlayDark.classList.add("show"),
      allVideo.classList.add("show"),
      gsap.to(allVideo, {
        duration: 0.5,
        opacity: 1,
        ease: "none",
        onComplete: function () {
          VideoLoad(t, s);
        },
      });
  });
}),
  document.querySelectorAll(".view-album, .link-album").forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.preventDefault(), e.stopPropagation();
      var t = this.dataset.href || this.href;
      if (this.parentNode.parentNode.querySelector("h3"))
        var o = this.parentNode.parentNode.querySelector("h3").textContent;
      Loadx.classList.contains("display-block") ||
        Loadx.classList.add("display-block"),
        WinScroll.stop(),
        overlayDark.classList.add("show"),
        allAlbum.classList.add("show"),
        AlbumLoad(t, o);
    });
  }),
  document
    .querySelectorAll(".download-pdf:not(.disable-link)")
    .forEach(function (e) {
      e.addEventListener("click", function (e) {
        e.preventDefault(), e.stopPropagation();
        var t = this.href;
        window.open(t, "_blank");
      });
    }),
  document.querySelectorAll(".view-virtual").forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.preventDefault(), e.stopPropagation();
      var t = this.dataset.href || this.href,
        o = this.dataset.virtual;
      Loadx.classList.contains("display-block") ||
        Loadx.classList.add("display-block"),
        WinScroll.stop(),
        overlayDark.classList.add("show"),
        allVideo.classList.add("show"),
        gsap.to(allVideo, {
          duration: 0.5,
          opacity: 1,
          ease: "none",
          onComplete: function () {
            loadVirtual(t, o);
          },
        });
    });
  });
const colEffect = function (e) {
    var t = (function () {
      function t(e) {
        (this.DOM = { el: e }),
          (this.isBottom = this.DOM.el.classList.contains("col-bottom")),
          this.layoutMove();
      }
      return (
        (t.prototype.layoutMove = function () {
          var t = this,
            o = { ty: 0, tx: 0 };
          if (
            (gsap.set(t.DOM.el, { y: 0, x: 0 }),
            this.DOM.el.classList.contains("col-long"))
          )
            var a = MathUtils.getRandomFloat(10, 250),
              i = MathUtils.getRandomFloat(250, 50),
              n = MathUtils.getRandomFloat(250, 10),
              r = MathUtils.getRandomFloat(50, 250);
          else
            this.DOM.el.classList.contains("col-x-y")
              ? ((a = MathUtils.getRandomFloat(10, 50)),
                (i = MathUtils.getRandomFloat(10, 50)),
                (n = MathUtils.getRandomFloat(50, 10)),
                (r = MathUtils.getRandomFloat(50, 10)))
              : this.DOM.el.classList.contains("col-short") ||
                this.DOM.el.classList.contains("col-x")
              ? ((n = MathUtils.getRandomFloat(5, 15)),
                (r = MathUtils.getRandomFloat(15, 5)))
              : this.DOM.el.classList.contains("col-y")
              ? ((a = MathUtils.getRandomFloat(10, 30)),
                (i = MathUtils.getRandomFloat(30, 10)))
              : ((n = MathUtils.getRandomFloat(80, 20)),
                (r = MathUtils.getRandomFloat(20, 80)));
          Mobile.matches ||
            Touch ||
            window.requestAnimationFrame(function l() {
              1 == s.Columns && e.querySelector(".enable")
                ? ((o.ty = MathUtils.lerp(
                    o.ty,
                    MathUtils.lineEq(
                      t.isBottom ? -a : i,
                      t.isBottom ? i : -a,
                      winsize.height,
                      0,
                      mousePos.y
                    ),
                    0.03
                  )),
                  (o.tx = MathUtils.lerp(
                    o.tx,
                    MathUtils.lineEq(
                      t.isBottom ? -n : r,
                      t.isBottom ? r : -n,
                      winsize.height,
                      0,
                      mousePos.x
                    ),
                    0.03
                  )),
                  gsap.set(t.DOM.el, { y: o.ty, x: o.tx }))
                : window.cancelAnimationFrame(l),
                Mobile.matches || Touch || window.requestAnimationFrame(l);
            });
        }),
        t
      );
    })();
    if ((calcWinsize(), e)) {
      var o = e.querySelector(".layout-move");
      if (o) {
        o.classList.add("enable");
        var a = o.querySelectorAll(".column"),
          s =
            (Array.from(a, function (e) {
              new t(e);
            }),
            { Columns: !0 });
        e.addEventListener("mousemove", function (e) {
          return (mousePos = getMousePos(e));
        }),
          e.addEventListener(
            "touchmove",
            function (e) {
              return (mousePos = getMousePos(e));
            },
            { passive: !1 }
          );
      }
    }
  },
  hoverEvents = function () {
    var e = document.querySelectorAll(".dot-p"),
      t = document.querySelectorAll(".show-box");
    e.forEach(function (o) {
      addMultipleEvents(["mouseenter", "click"], o, function (o) {
        o.preventDefault(), o.stopPropagation();
        for (var a = 0; a < e.length; a++) e[a].classList.remove("showup");
        for (a = 0; a < t.length; a++) t[a].classList.remove("showup");
        var s = this.dataset.name;
        this.classList.add("showup");
        var i = document.querySelector('.show-box[data-pic="' + s + '"]'),
          n = o.clientX,
          r = o.clientY,
          l = i.offsetHeight,
          c = i.offsetWidth,
          d = i.parentNode.parentNode.offsetHeight;
        return (
          Mobile.matches
            ? ((i.style.left = window.innerWidth / 2 - c / 2 + "px"),
              (i.style.top = d / 2 + "px"))
            : ((i.style.left = n - c / 2 + "px"),
              (i.style.top = r - (l + 15) + "px")),
          i.classList.add("showup"),
          !1
        );
      }),
        o.addEventListener("mouseleave", function () {
          if (!Touch) {
            for (var o = 0; o < e.length; o++) e[o].classList.remove("showup");
            for (o = 0; o < t.length; o++) t[o].classList.remove("showup");
          }
        });
    });
    var o = document.querySelectorAll(".masterplan .hover-block"),
      a = document.querySelectorAll(".note-available");
    o.forEach(function (e) {
      addMultipleEvents(["mouseenter", "click"], e, function (e) {
        if (
          (e.preventDefault(),
          e.stopPropagation(),
          !this.classList.contains("showbox"))
        ) {
          for (var t = 0; t < o.length; t++) o[t].classList.remove("showbox");
          for (t = 0; t < a.length; t++) a[t].classList.remove("showbox");
          var s = this.dataset.name;
          this.classList.add("showbox"),
            document.querySelector('.note-available[data-name="' + s + '"]') &&
              document
                .querySelector('.note-available[data-name="' + s + '"]')
                .classList.add("showbox");
        }
        return !1;
      }),
        e.addEventListener("mouseleave", function () {
          if (!Touch) {
            for (var e = 0; e < o.length; e++) o[e].classList.remove("showbox");
            for (e = 0; e < a.length; e++) a[e].classList.remove("showbox");
          }
        });
    }),
      a.forEach(function (e) {
        e.addEventListener("click", function (e) {
          e.preventDefault(), e.stopPropagation();
          var t = this.dataset.block;
          if (this.classList.contains("showbox")) {
            for (s = 0; s < o.length; s++) o[s].classList.remove("showbox");
            for (s = 0; s < a.length; s++) a[s].classList.remove("showbox");
          } else {
            for (var s = 0; s < o.length; s++) o[s].classList.remove("showbox");
            for (var s = 0; s < a.length; s++) a[s].classList.remove("showbox");
            this.classList.add("showbox"),
              document
                .querySelector('.hover-block[data-name="' + t + '"]')
                .classList.add("showbox");
          }
          return !1;
        });
      });
    var s = document.querySelectorAll(".dot-num"),
      i = document.querySelectorAll(".hover-text"),
      n = document.querySelectorAll(".show-box-info");
    s.forEach(function (e) {
      var t = e.parentNode.dataset.name;
      if (document.querySelector(".show-box-info"))
        var o = document.querySelector(".show-box-info[data-name='" + t + "']");
      addMultipleEvents(["mouseenter", "click"], e, function (t) {
        t.preventDefault(),
          t.stopPropagation(),
          o && o.classList.remove("showup"),
          o.querySelector(".pic-img") && o.querySelector(".pic-img").remove();
        for (var r = 0; r < n.length; r++) n[r].classList.remove("showup");
        for (r = 0; r < s.length; r++) s[r].classList.remove("current");
        for (r = 0; r < i.length; r++) i[r].classList.remove("current");
        this.classList.add("current");
        var l = this.dataset.name,
          c = document.querySelector(".hover-text[data-text='" + l + "']"),
          d = c.dataset.img;
        if ((Mobile.matches && this.parentNode.append(e), c)) {
          c.classList.add("current");
          var u = c.innerHTML;
          if (((o.querySelector(".show-box-inner").innerHTML = u), d)) {
            var m = creatDiv("div", "pic-img"),
              v = creatDiv("img", "");
            v.setAttribute("src", d),
              m.append(v),
              o.querySelector(".pic-img") || (o.prepend(m), a(v));
          } else
            o.querySelector(".pic-img") && o.querySelector(".pic-img").remove();
          var p = o.offsetHeight,
            h = o.offsetWidth,
            f = t.clientX,
            L = t.clientY;
          if (Mobile.matches) {
            o.parentNode.offsetHeight;
            (o.style.left = window.innerWidth / 2 - h / 2 + "px"),
              (o.style.top = "auto"),
              window.innerWidth < 620
                ? (o.style.bottom = "20px")
                : (o.style.bottom = "50px");
          } else
            (o.style.left = f - h / 2 + "px"),
              (o.style.top = L - (p + 30) + "px");
          o.classList.add("showup");
        }
        return !1;
      }),
        o.addEventListener("click", function () {
          if (
            (this.classList.remove("showup"), this.querySelector(".pic-img"))
          ) {
            var e = this.querySelector(".pic-img img").src,
              t = this.querySelector(".show-box-inner p").textContent;
            thisZoom(e, t), this.querySelector(".pic-img").remove();
          }
          for (var o = 0; o < s.length; o++) s[o].classList.remove("current");
          for (o = 0; o < i.length; o++) i[o].classList.remove("current");
        }),
        e.addEventListener("mouseleave", function () {
          o.classList.remove("showup"),
            o.querySelector(".pic-img") && o.querySelector(".pic-img").remove();
          for (var e = 0; e < s.length; e++) s[e].classList.remove("current");
          for (e = 0; e < i.length; e++) i[e].classList.remove("current");
        });
      var a = function (t) {
        var o = t.src,
          a =
            t.parentNode.parentNode.querySelector(
              ".show-box-inner p"
            ).textContent;
        Touch ||
          e.addEventListener("click", function (e) {
            e.preventDefault(), e.stopPropagation(), thisZoom(o, a);
          });
      };
    }),
      i.forEach(function (e) {
        var t =
            e.parentNode.parentNode.parentNode.parentNode.parentNode.dataset
              .name,
          o = document.querySelector(".show-box-info[data-name='" + t + "']");
        addMultipleEvents(["mouseenter", "click"], e, function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            o.querySelector(".pic-img") && o.querySelector(".pic-img").remove(),
            o && o.classList.remove("showup");
          for (var t = 0; t < n.length; t++) n[t].classList.remove("showup");
          for (t = 0; t < i.length; t++) i[t].classList.remove("current");
          for (t = 0; t < s.length; t++) s[t].classList.remove("current");
          var r = this.dataset.text;
          this.classList.add("current");
          var l = document.querySelector('.dot-num[data-name="' + r + '"]');
          document
            .querySelector('.dot-num[data-name="' + r + '"]')
            .classList.add("current");
          var c = document.querySelectorAll('.dot-num[data-name="' + r + '"]');
          if (c)
            for (t = 0; t < c.length; t++)
              c[t].classList.add("current"),
                Mobile.matches && c[t].parentNode.append(c[t]);
          var d = this.innerHTML,
            u = this.dataset.img;
          if (o) {
            if (((o.querySelector(".show-box-inner").innerHTML = d), u)) {
              var m = creatDiv("div", "pic-img"),
                v = creatDiv("img", "");
              v.setAttribute("src", u),
                m.append(v),
                o.querySelector(".pic-img") || (o.prepend(m), a(v));
            } else
              o.querySelector(".pic-img") &&
                o.querySelector(".pic-img").remove();
            o.offsetHeight;
            var p = o.offsetWidth,
              h = l.getBoundingClientRect(),
              f = h.left,
              L = h.top,
              y = h.width,
              g = h.height;
            if (Mobile.matches) {
              o.parentNode.offsetHeight;
              (o.style.left = window.innerWidth / 2 - p / 2 + "px"),
                (o.style.top = "auto"),
                window.innerWidth < 620
                  ? (o.style.bottom = "20px")
                  : (o.style.bottom = "50px");
            } else
              (o.style.left = f - (p / 2 - y / 2) + "px"),
                (o.style.top = L - g + "px");
            o.classList.add("showup");
          }
          return !1;
        }),
          e.addEventListener("mouseleave", function () {
            o.classList.remove("showup");
            for (var e = 0; e < s.length; e++) s[e].classList.remove("current");
            for (e = 0; e < i.length; e++) i[e].classList.remove("current");
          });
        var a = function (t) {
          var o = t.src,
            a =
              t.parentNode.parentNode.querySelector(
                ".show-box-inner p"
              ).textContent;
          Touch ||
            e.addEventListener("click", function (e) {
              e.preventDefault(), e.stopPropagation(), thisZoom(o, a);
            });
        };
      }),
      document.querySelectorAll(".facilities").forEach(function (e) {
        var t = e.querySelector(".show-box-info");
        e.onclick = function (e) {
          if (e.target !== document.querySelector("showup")) {
            t.classList.remove("showup");
            for (var o = 0; o < s.length; o++) s[o].classList.remove("current");
            for (o = 0; o < i.length; o++) i[o].classList.remove("current");
          }
        };
      }),
      document.querySelector(".masterplan") &&
        (document.querySelector(".masterplan").onclick = function (e) {
          if (e.target !== document.querySelector("showbox")) {
            for (var t = 0; t < o.length; t++) o[t].classList.remove("showbox");
            for (t = 0; t < a.length; t++) a[t].classList.remove("showbox");
          }
        }),
      document.querySelector(".home-location") &&
        (document.querySelector(".home-location").onclick = function (o) {
          if (o.target !== document.querySelector("showup")) {
            for (var a = 0; a < e.length; a++) e[a].classList.remove("showup");
            for (a = 0; a < t.length; a++) t[a].classList.remove("showup");
          }
        }),
      window.addEventListener("orientationchange", function () {
        if (
          (document.querySelector(".show-box-info") &&
            document.querySelector(".show-box-info").classList.remove("showup"),
          e)
        )
          for (var t = 0; t < e.length; t++) e[t].classList.remove("showup");
        if (o) for (t = 0; t < o.length; t++) o[t].classList.remove("showbox");
        if (a) for (t = 0; t < a.length; t++) a[t].classList.remove("showbox");
      });
  },
  SmoothScroll = function (e) {
    if (!Mobile.matches) {
      var t = !1,
        o = 120,
        a = e.scrollTop,
        s = e;
      e.addEventListener(
        "wheel",
        function (i) {
          Mobile.matches ||
            (function (i) {
              if ((i.preventDefault(), Mobile.matches)) return;
              var n = (function (e) {
                return e.wheelDelta / o;
              })(i);
              (a += 120 * -n),
                (a = Math.max(0, Math.min(a, e.scrollHeight - s.clientHeight))),
                t || r();
            })(i);
        },
        { passive: !1 }
      ),
        e.addEventListener("mouseover", function () {
          Mobile.matches ||
            Touch ||
            (e.classList.add("over"),
            boxSlider && boxSlider.classList.add("hover"),
            i());
        }),
        e.addEventListener("mouseout", function () {
          Mobile.matches ||
            Touch ||
            (e.classList.remove("over"),
            boxSlider && boxSlider.classList.remove("hover"),
            i());
        }),
        window.addEventListener("resize", function () {
          r(), i();
        });
    }
    function i() {
      Mobile.matches ||
        (window.addEventListener("keydown", function (e) {
          var t = e.keyCode || e.which;
          38 == t && (e.preventDefault(), n(-30)),
            40 == t && (e.preventDefault(), n(30));
        }),
        window.addEventListener("keyup", function (e) {
          0;
        }));
    }
    function n(t) {
      e.classList.contains("over") &&
        e.scrollBy({ top: t, behavior: "smooth" });
    }
    function r() {
      if (!Mobile.matches) {
        var o = (a - e.scrollTop) / 12;
        return (
          (e.scrollTop += o),
          Math.abs(o) > 0.3
            ? ((t = !0), window.requestAnimationFrame(r))
            : ((t = !1), window.cancelAnimationFrame(r))
        );
      }
    }
  };
const hidemsg = function () {
    Loadx.classList.contains("display-block") &&
      Loadx.classList.remove("display-block");
  },
  hideerror = function () {
    document.querySelectorAll(".form-error").forEach(function (e) {
      e.remove();
    });
  };
function isNumber(e) {
  var t = e.which ? e.which : e.keyCode;
  return (
    !(46 != t && t > 31 && (t < 48 || t > 57)) || ((e.returnValue = !1), !1)
  );
}
function serialize(e) {
  if (e && "FORM" === e.nodeName) {
    var t,
      n,
      r = [];
    for (t = e.elements.length - 1; t >= 0; t -= 1)
      if ("" !== e.elements[t].name)
        switch (e.elements[t].nodeName) {
          case "INPUT":
            switch (e.elements[t].type) {
              case "text":
              case "tel":
              case "email":
              case "hidden":
              case "password":
              case "button":
              case "reset":
              case "submit":
                r.push(
                  e.elements[t].name +
                    "=" +
                    encodeURIComponent(e.elements[t].value)
                );
                break;
              case "checkbox":
              case "radio":
                e.elements[t].checked &&
                  r.push(
                    e.elements[t].name +
                      "=" +
                      encodeURIComponent(e.elements[t].value)
                  );
            }
            break;
          case "file":
            break;
          case "TEXTAREA":
            r.push(
              e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value)
            );
            break;
          case "SELECT":
            switch (e.elements[t].type) {
              case "select-one":
                r.push(
                  e.elements[t].name +
                    "=" +
                    encodeURIComponent(e.elements[t].value)
                );
                break;
              case "select-multiple":
                for (n = e.elements[t].options.length - 1; n >= 0; n -= 1)
                  e.elements[t].options[n].selected &&
                    r.push(
                      e.elements[t].name +
                        "=" +
                        encodeURIComponent(e.elements[t].options[n].value)
                    );
            }
            break;
          case "BUTTON":
            switch (e.elements[t].type) {
              case "reset":
              case "submit":
              case "button":
                r.push(
                  e.elements[t].name +
                    "=" +
                    encodeURIComponent(e.elements[t].value)
                );
            }
        }
    return r.join("&");
  }
}
function checkEmail(e) {
  var t = document.getElementById(e);
  return !!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
    t.value.trim()
  );
}
function checkNull(e, t, n, r, o) {
  var c =
    null != document.getElementById(e)
      ? document.getElementById(e).value.trim()
      : "";
  if ("" == c || c == n) {
    if (null != document.getElementById("error_" + e))
      document.getElementById("error_" + e).innerHTML = t;
    else {
      var i = creatDiv("div", "form-error"),
        a = creatDiv("div", "form-error-content");
      (a.id = "error_" + e),
        (a.innerHTML = t),
        i.appendChild(a),
        document.getElementById(e).after(i);
    }
    return (
      document.querySelectorAll(".form-error").forEach(function (e) {
        e.addEventListener("click", function (e) {
          this.remove();
        });
      }),
      !1
    );
  }
  return !0;
}
function checkMail(e, t, n, r, o) {
  if (!checkEmail(e)) {
    if (null != document.getElementById("error_" + e))
      document.getElementById("error_" + e).innerHTML = t;
    else {
      var c = creatDiv("div", "form-error"),
        i = creatDiv("div", "form-error-content");
      (i.id = "error_" + e),
        (i.innerHTML = t),
        c.appendChild(i),
        document.getElementById(e).after(c);
    }
    return (
      document.querySelectorAll(".form-error").forEach(function (e) {
        e.addEventListener("click", function (e) {
          this.remove();
        });
      }),
      !1
    );
  }
  return !0;
}
function checkSelect(e, t, n, r, o) {
  var c =
    null != document.getElementById(e) ? document.getElementById(e).value : "";
  if ("" == c || c == n || 0 == c || "null" == c) {
    if (null != document.getElementById("error_" + e))
      document.getElementById("error_" + e).innerHTML = t;
    else {
      var i = creatDiv("div", "form-error"),
        a = creatDiv("div", "form-error-content");
      (a.id = "error_" + e),
        (a.innerHTML = t),
        i.appendChild(a),
        document.getElementById(e).after(i);
    }
    return !1;
  }
  return !0;
}
function checkCheckbox(e, t, n, r, o) {
  var c = !1;
  if (
    (document.querySelectorAll("." + e).forEach(function (e) {
      1 == e.checked && (c = !0);
    }),
    0 == c)
  ) {
    if (null != document.getElementById("error_" + e))
      document.getElementById("error_" + e).innerHTML = t;
    else {
      var i = creatDiv("div", "form-error"),
        a = creatDiv("div", "form-error-content");
      (a.id = "error_" + e),
        (a.innerHTML = t),
        i.appendChild(a),
        document.querySelector(".radio-box li").after(i);
    }
    return !1;
  }
  return !0;
}
function CheckboxCondition(e, t, n, r, o) {
  if (document.getElementById(e) && 0 == document.getElementById(e).checked) {
    if (null != document.getElementById("error_" + e))
      document.getElementById("error_" + e).innerHTML = t;
    else {
      var c = creatDiv("div", "form-error"),
        i = creatDiv("div", "form-error-content");
      (i.id = "error_" + e),
        (i.innerHTML = t),
        c.appendChild(i),
        document.getElementById(e).parentElement.parentElement.after(c);
    }
    return !1;
  }
  return !0;
}
function checkPhone(e, t, n, r, o) {
  var c =
    null != document.getElementById(e)
      ? document.getElementById(e).value.trim()
      : "";
  if ("" == c || c == n || c.length < 10 || c.length > 11) {
    if (null != document.getElementById("error_" + e))
      document.getElementById("error_" + e).innerHTML = t;
    else {
      var i = creatDiv("div", "form-error"),
        a = creatDiv("div", "form-error-content");
      (a.id = "error_" + e),
        (a.innerHTML = t),
        i.appendChild(a),
        document.getElementById(e).after(i);
    }
    return (
      document.querySelectorAll(".form-error").forEach(function (e) {
        e.addEventListener("click", function (e) {
          this.remove();
        });
      }),
      !1
    );
  }
  return !0;
}
function resetForm() {
  document.querySelectorAll(".alert").forEach(function (e) {
    e.remove();
  }),
    overlayDark.classList.contains("show") &&
      overlayDark.classList.remove("show");
}
if (document.getElementById("formRegister")) {
  function validateRegister() {
    var e = !0,
      t = checkNull(
        "nameregister",
        document.getElementById("nameregister").getAttribute("data-error"),
        document.getElementById("nameregister").getAttribute("data-default"),
        "40",
        "-270"
      ),
      n = checkPhone(
        "phoneregister",
        document.getElementById("phoneregister").getAttribute("data-error"),
        document.getElementById("phoneregister").getAttribute("data-default"),
        "40",
        "-270"
      ),
      r = checkMail(
        "emailregister",
        document.getElementById("emailregister").getAttribute("data-error"),
        document.getElementById("emailregister").getAttribute("data-default")
      );
    return (t && n && r) || ((e = !1), setTimeout(hideerror, 2e3)), e;
  }
}
if (document.getElementById("formContact")) {
  function validateContact() {
    var e = !0,
      t = checkNull(
        "namecontact",
        document.getElementById("namecontact").getAttribute("data-error"),
        document.getElementById("namecontact").getAttribute("data-default")
      ),
      n = checkPhone(
        "phonecontact",
        document.getElementById("phonecontact").getAttribute("data-error"),
        document.getElementById("phonecontact").getAttribute("data-default")
      ),
      r = checkMail(
        "emailcontact",
        document.getElementById("emailcontact").getAttribute("data-error"),
        document.getElementById("emailcontact").getAttribute("data-default")
      );
    return (t && n && r) || ((e = !1), setTimeout(hideerror, 2e3)), e;
  }
}
if (scrollStay) {
  var timer,
    startAni = !1,
    groupLength = groupCentral.length,
    groupIndex = Array.prototype.indexOf(groupCentral) + 1,
    boxLi = boxNav.querySelectorAll(".box-nav li"),
    liFirst = boxNav.querySelector(".box-nav li:nth-child(1)"),
    Direction = "down",
    clickDot = 0;
  Array.from(groupCentral).forEach(function (e) {
    gsap.set(e, { y: "100%", zIndex: "" }),
      gsap.set(groupCentral[groupIndex], { y: "0%", zIndex: 1 });
  });
  var allClass = document.querySelectorAll(".box-nav li");
  function Modify() {
    setTimeout(function () {
      Array.from(groupCentral).forEach(function (e) {
        gsap.set(e, { y: "100%", zIndex: "" }),
          gsap.set(groupCentral[groupIndex], { y: "0%", zIndex: 1 });
      }),
        (startAni = !1);
    }, 1e3);
  }
  function removeActive(e) {
    for (var t = 0; t < e.length; t++)
      e[t].classList.remove("active"),
        e[t].classList.remove("current"),
        e[t].classList.remove("show"),
        e[t].classList.remove("move"),
        e[t].classList.remove("show-text"),
        e[t].classList.remove("showbox"),
        e[t].classList.remove("showup");
  }
  function resetSlide() {
    (startAni = !0),
      Array.from(groupCentral).forEach(function (e) {
        gsap.set(e, { zIndex: "" });
        var t = e.querySelector(".layout-move");
        t && t.classList.remove("enable");
      }),
      groupIndex == groupLength - 1
        ? (scrollDown.classList.remove("show"), goTop.classList.add("show"))
        : (scrollDown.classList.add("show"), goTop.classList.remove("show")),
      Header.classList.remove("light"),
      rightHeader.classList.remove("white"),
      titlePage.classList.remove("color-highlight"),
      boxNav.classList.remove("normal"),
      Footer.classList.remove("hide"),
      document.querySelector(".option-scroll") &&
        gsap.set(".option-scroll .srcoll-list", { scrollTop: 0 }),
      HTML.classList.contains("zoom-object") &&
        HTML.classList.remove("zoom-object"),
      Subscrible && Subscrible.classList.remove("current"),
      (ytVideo || boxVideo) && StopPlay();
    var e = document.querySelectorAll(
      ".hover-block, .note-block, .hover-svg, .block-svg, .house-text, .block-area"
    );
    e && removeActive(e);
  }
  function applySlide() {
    // Add safety check at the beginning
    if (!groupCentral[groupIndex]) {
        console.error('Invalid groupIndex:', groupIndex, 'groupLength:', groupLength);
        groupIndex = Math.max(0, Math.min(groupIndex, groupLength - 1)); // Clamp to valid range
        if (!groupCentral[groupIndex]) {
            console.error('Failed to recover valid index');
            return; // Exit if still invalid
        }
    }
    
    removeActive(allClass),
    removeActive(groupCentral),
    groupCentral[groupIndex].classList.add("show-text"),
    boxLi[groupIndex].classList.add("current");
    
    if ("about-page" == IDPage || "location-page" == IDPage || "facilities-page" == IDPage || "masterplan-page" == IDPage || "library-page" == IDPage) {
        document.querySelector(".group-central.show-text").dataset.name;
        changeUrl(boxLi[groupIndex].querySelector("button").dataset.href, boxLi[groupIndex].querySelector("button").dataset.title, boxLi[groupIndex].querySelector("button").dataset.description, boxLi[groupIndex].querySelector("button").dataset.keyword, boxLi[groupIndex].querySelector("button").dataset.name),
        changeAlternate(boxLi[groupIndex].querySelector("button").dataset.href, boxLi[groupIndex].querySelector("button"), 1)
    }
    
    if (groupCentral[groupIndex].classList.contains("show-text")) {
        var e = groupCentral[groupIndex].querySelector(".hover-svg")
          , t = groupCentral[groupIndex].querySelector(".block-svg");
        Tagline && (groupCentral[groupIndex].querySelector(".tagline-big") ? Tagline.classList.add("show") : Tagline.classList.remove("show")),
        document.querySelector(".option-scroll") && (clearTimeout(timer),
        timer = setTimeout((function() {
            gsap.set(".option-scroll .scroll-list", {
                scrollTop: 0
            })
        }
        ), 500)),
        e && (clearTimeout(timer),
        timer = setTimeout((function() {
            e.classList.add("show")
        }
        ), 500)),
        t && (clearTimeout(timer),
        timer = setTimeout((function() {
            t.classList.add("show")
        }
        ), 500))
    }
    
    groupCentral[groupIndex].classList.contains("home-intro", "show-text") && rightHeader.classList.add("white"),
    groupCentral[groupIndex].classList.contains("project-scale", "show-text") && titlePage.classList.add("color-highlight"),
    groupCentral[groupIndex].classList.contains("location-extra", "show-text") && titlePage.classList.add("color-highlight"),
    groupCentral[groupIndex].classList.contains("home-video", "show-text") && (Header.classList.add("light"),
    (ytVideo || boxVideo) && (new ButtonCtrl(playVid),
    clearTimeout(timer),
    timer = setTimeout((function() {
        playVid.click()
    }
    ), 500)),
    Footer.classList.add("hide")),
    groupCentral[groupIndex].classList.contains("home-location", "show-text") && (rightHeader.classList.add("white"),
    PanZoom && (panzoom.reset(),
    goOut.click())),
    groupCentral[groupIndex].classList.contains("picture-library", "show-text") && (Header.classList.add("light"),
    rightHeader.classList.add("white")),
    groupCentral[groupIndex].classList.contains("virtual-library", "show-text") && (Header.classList.add("light"),
    rightHeader.classList.add("white")),
    groupCentral[groupIndex].classList.contains("video-library", "show-text") && titlePage.classList.add("color-highlight"),
    groupCentral[groupIndex].classList.contains("home-facilities", "show-text") && (Footer.classList.add("hide"),
    Header.classList.add("light")),
    groupCentral[groupIndex].classList.contains("facilities", "show-text") && rightHeader.classList.add("white"),
    groupCentral[groupIndex].classList.contains("masterplan", "show-text") && rightHeader.classList.add("white"),
    groupCentral[groupIndex].classList.contains("block", "show-text") && rightHeader.classList.add("white"),
    groupCentral[groupIndex].classList.contains("home-partner", "show-text") && ("home-page" == IDPage ? rightHeader.classList.add("white") : titlePage.classList.add("color-highlight")),
    groupCentral[groupIndex].classList.contains("register", "show-text") ? (boxNav.classList.remove("show"),
    rightHeader.classList.add("white"),
    Subscrible && Subscrible.classList.add("current"),
    titlePage && titlePage.classList.add("hide")) : (boxNav.classList.contains("not-need") || boxNav.classList.add("show"),
    titlePage && titlePage.classList.remove("hide")),
    onPlay(),
    checkData()
}
  var checkData = function () {
    if (
      (groupIndex == groupLength - 1
        ? (scrollDown.classList.remove("show"), goTop.classList.add("show"))
        : (scrollDown.classList.add("show"), goTop.classList.remove("show")),
      groupCentral[0].classList.contains("show-text"))
    ) {
      var e = groupCentral[0].querySelector(".hover-svg"),
        t = groupCentral[0].querySelector(".block-svg");
      rightHeader.classList.add("white"),
        e && e.classList.add("show"),
        t && t.classList.add("show"),
        setTimeout(function () {
          groupCentral[groupIndex].classList.contains(
            "register",
            "show-text"
          ) || boxNav.classList.add("show"),
            groupCentral[groupIndex].classList.contains(
              "register",
              "show-text"
            ) && scrollDown.classList.remove("show"),
            groupCentral[groupIndex].classList.contains(
              "location-extra",
              "show-text"
            ) && rightHeader.classList.remove("white");
        }, 1e3);
    }
    var o = boxSlider.querySelector(".show-text");
    !Mobile.matches && o && new colEffect(o);
  };
  var groupIndex = 0;
  function GoUp() {
    if (groupIndex >= groupLength) {
      groupIndex = groupLength - 1; // Clamp to last valid index
      return;
    }
    resetSlide(),
      gsap.fromTo(
        groupCentral[groupIndex],
        0.8,
        {
          zIndex: 1,
        },
        {
          y: "0%",
          ease: "sine.inOut",
          onComplete: function () {
            applySlide(), Modify();
          },
        }
      );
  }
  function GoDown() {
    if (groupIndex < 0) {
      groupIndex = 0; // Clamp to first valid index
      return;
    }
    resetSlide(),
      gsap.fromTo(
        groupCentral[groupIndex],
        0.8,
        {
          y: "-100%",
          zIndex: 1,
        },
        {
          y: "0%",
          ease: "sine.inOut",
          onComplete: function () {
            applySlide(), Modify();
          },
        }
      );
  }
  function StartgoDown() {
    boxSlider.addEventListener(
      "wheel",
      function (e) {
        var t;
        Mobile.matches ||
          WindBody.classList.contains("fullscreen") ||
          boxSlider.classList.contains("single") ||
          boxSlider.classList.contains("hover") ||
          (!1 === startAni &&
            (t = Math.max(
              -1,
              Math.min(1, e.wheelDelta || -e.deltaY || -e.detail)
            )),
          null != groupCentral[groupIndex] && -1 === parseInt(t)
            ? (groupIndex >= groupLength - 1 ? (groupIndex = 0) : groupIndex++,
              GoUp())
            : null != groupCentral[groupIndex] &&
              1 === parseInt(t) &&
              (groupIndex <= 0 ? (groupIndex = groupLength - 1) : groupIndex--,
              GoDown()));
      },
      { passive: !0 }
    ),
      boxSlider.addEventListener(
        "swipeup",
        function (e) {
          if (
            !(
              Mobile.matches ||
              WindBody.classList.contains("fullscreen") ||
              boxSlider.classList.contains("single") ||
              boxSlider.classList.contains("hover")
            ) &&
            doTouch
          ) {
            doTouch = !1;
            var t = boxNav.querySelector(
              ".box-nav li.current"
            ).nextElementSibling;
            t && t.click(), setTimeout(turnWheelTouch, 500);
          }
        },
        { passive: !0 }
      ),
      boxSlider.addEventListener(
        "swipedown",
        function (e) {
          if (
            !(
              Mobile.matches ||
              WindBody.classList.contains("fullscreen") ||
              boxSlider.classList.contains("single") ||
              boxSlider.classList.contains("hover")
            ) &&
            doTouch
          ) {
            doTouch = !1;
            var t = boxNav.querySelector(
              ".box-nav li.current"
            ).previousElementSibling;
            t && t.click(), setTimeout(turnWheelTouch, 500);
          }
        },
        { passive: !0 }
      );
  }
  boxLi.forEach(function (e, t) {
    e.addEventListener("click", function (e) {
      startAni ||
        (!startAni && t > groupIndex
          ? ((groupIndex = t), GoUp())
          : !startAni && t < groupIndex && ((groupIndex = t), GoDown()));
    });
  }),
    scrollDown.addEventListener("click", function (e) {
      return (
        boxNav.querySelector(".box-nav li.current").nextElementSibling.click(),
        !1
      );
    }),
    goTop.addEventListener("click", function (e) {
      return liFirst.click(), !1;
    }),
    boxSlider.classList.contains("single") || StartgoDown(),
    document.querySelector(".location-intro .srcoll-down") &&
      document
        .querySelector(".location-intro .srcoll-down")
        .addEventListener("click", function (e) {
          scrollDown.click();
        });
  var touchSupported = window.matchMedia("(pointer: coarse)").matches;
  touchSupported &&
    boxLi.forEach(function (e) {
      e.classList.add("hover");
    }),
    window.addEventListener("keydown", function (e) {
      var t = e.keyCode || e.which;
      38 != t ||
        WindBody.classList.contains("no-scroll") ||
        (e.preventDefault(),
        boxNav
          .querySelector(".box-nav li.current")
          .previousElementSibling.click());
      40 != t ||
        WindBody.classList.contains("no-scroll") ||
        (e.preventDefault(),
        boxNav.querySelector(".box-nav li.current").nextElementSibling.click());
    });
}

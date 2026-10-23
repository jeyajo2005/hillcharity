(() => {
  var __require = /* @__PURE__ */ ((x3) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x3, {
    get: (a2, b4) => (typeof require !== "undefined" ? require : a2)[b4]
  }) : x3)(function(x3) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x3 + '" is not supported');
  });

  // assets/vendor.js
  function kg(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const i in r) if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s && Object.defineProperty(e, i, s.get ? s : { enumerable: true, get: () => r[i] });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
  }
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
      for (const s of i) if (s.type === "childList") for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: true, subtree: true });
    function n(i) {
      const s = {};
      return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
    }
    function r(i) {
      if (i.ep) return;
      i.ep = true;
      const s = n(i);
      fetch(i.href, s);
    }
  })();
  function Eg(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var kd = { exports: {} };
  var Is = {};
  var Ed = { exports: {} };
  var _ = {};
  var ui = /* @__PURE__ */ Symbol.for("react.element");
  var Tg = /* @__PURE__ */ Symbol.for("react.portal");
  var jg = /* @__PURE__ */ Symbol.for("react.fragment");
  var Ng = /* @__PURE__ */ Symbol.for("react.strict_mode");
  var Rg = /* @__PURE__ */ Symbol.for("react.profiler");
  var Mg = /* @__PURE__ */ Symbol.for("react.provider");
  var Ag = /* @__PURE__ */ Symbol.for("react.context");
  var Lg = /* @__PURE__ */ Symbol.for("react.forward_ref");
  var Dg = /* @__PURE__ */ Symbol.for("react.suspense");
  var Vg = /* @__PURE__ */ Symbol.for("react.memo");
  var _g = /* @__PURE__ */ Symbol.for("react.lazy");
  var Uu = Symbol.iterator;
  function Ig(e) {
    return e === null || typeof e != "object" ? null : (e = Uu && e[Uu] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Td = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } };
  var jd = Object.assign;
  var Nd = {};
  function er(e, t, n) {
    this.props = e, this.context = t, this.refs = Nd, this.updater = n || Td;
  }
  er.prototype.isReactComponent = {};
  er.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  er.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Rd() {
  }
  Rd.prototype = er.prototype;
  function aa(e, t, n) {
    this.props = e, this.context = t, this.refs = Nd, this.updater = n || Td;
  }
  var ua = aa.prototype = new Rd();
  ua.constructor = aa;
  jd(ua, er.prototype);
  ua.isPureReactComponent = true;
  var $u = Array.isArray;
  var Md = Object.prototype.hasOwnProperty;
  var ca = { current: null };
  var Ad = { key: true, ref: true, __self: true, __source: true };
  function Ld(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Md.call(t, r) && !Ad.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
      for (var a2 = Array(l), u2 = 0; u2 < l; u2++) a2[u2] = arguments[u2 + 2];
      i.children = a2;
    }
    if (e && e.defaultProps) for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
    return { $$typeof: ui, type: e, key: s, ref: o, props: i, _owner: ca.current };
  }
  function Og(e, t) {
    return { $$typeof: ui, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function fa(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ui;
  }
  function Fg(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Wu = /\/+/g;
  function lo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Fg("" + e.key) : t.toString(36);
  }
  function Wi(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = false;
    if (e === null) o = true;
    else switch (s) {
      case "string":
      case "number":
        o = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case ui:
          case Tg:
            o = true;
        }
    }
    if (o) return o = e, i = i(o), e = r === "" ? "." + lo(o, 0) : r, $u(i) ? (n = "", e != null && (n = e.replace(Wu, "$&/") + "/"), Wi(i, t, n, "", function(u2) {
      return u2;
    })) : i != null && (fa(i) && (i = Og(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Wu, "$&/") + "/") + e)), t.push(i)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", $u(e)) for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a2 = r + lo(s, l);
      o += Wi(s, t, n, a2, i);
    }
    else if (a2 = Ig(e), typeof a2 == "function") for (e = a2.call(e), l = 0; !(s = e.next()).done; ) s = s.value, a2 = r + lo(s, l++), o += Wi(s, t, n, a2, i);
    else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o;
  }
  function Pi(e, t, n) {
    if (e == null) return e;
    var r = [], i = 0;
    return Wi(e, r, "", "", function(s) {
      return t.call(n, s, i++);
    }), r;
  }
  function zg(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      }, function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var we = { current: null };
  var bi = { transition: null };
  var Bg = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: bi, ReactCurrentOwner: ca };
  function Dd() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  _.Children = { map: Pi, forEach: function(e, t, n) {
    Pi(e, function() {
      t.apply(this, arguments);
    }, n);
  }, count: function(e) {
    var t = 0;
    return Pi(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return Pi(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!fa(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } };
  _.Component = er;
  _.Fragment = jg;
  _.Profiler = Rg;
  _.PureComponent = aa;
  _.StrictMode = Ng;
  _.Suspense = Dg;
  _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bg;
  _.act = Dd;
  _.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = jd({}, e.props), i = e.key, s = e.ref, o = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (s = t.ref, o = ca.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
      for (a2 in t) Md.call(t, a2) && !Ad.hasOwnProperty(a2) && (r[a2] = t[a2] === void 0 && l !== void 0 ? l[a2] : t[a2]);
    }
    var a2 = arguments.length - 2;
    if (a2 === 1) r.children = n;
    else if (1 < a2) {
      l = Array(a2);
      for (var u2 = 0; u2 < a2; u2++) l[u2] = arguments[u2 + 2];
      r.children = l;
    }
    return { $$typeof: ui, type: e.type, key: i, ref: s, props: r, _owner: o };
  };
  _.createContext = function(e) {
    return e = { $$typeof: Ag, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Mg, _context: e }, e.Consumer = e;
  };
  _.createElement = Ld;
  _.createFactory = function(e) {
    var t = Ld.bind(null, e);
    return t.type = e, t;
  };
  _.createRef = function() {
    return { current: null };
  };
  _.forwardRef = function(e) {
    return { $$typeof: Lg, render: e };
  };
  _.isValidElement = fa;
  _.lazy = function(e) {
    return { $$typeof: _g, _payload: { _status: -1, _result: e }, _init: zg };
  };
  _.memo = function(e, t) {
    return { $$typeof: Vg, type: e, compare: t === void 0 ? null : t };
  };
  _.startTransition = function(e) {
    var t = bi.transition;
    bi.transition = {};
    try {
      e();
    } finally {
      bi.transition = t;
    }
  };
  _.unstable_act = Dd;
  _.useCallback = function(e, t) {
    return we.current.useCallback(e, t);
  };
  _.useContext = function(e) {
    return we.current.useContext(e);
  };
  _.useDebugValue = function() {
  };
  _.useDeferredValue = function(e) {
    return we.current.useDeferredValue(e);
  };
  _.useEffect = function(e, t) {
    return we.current.useEffect(e, t);
  };
  _.useId = function() {
    return we.current.useId();
  };
  _.useImperativeHandle = function(e, t, n) {
    return we.current.useImperativeHandle(e, t, n);
  };
  _.useInsertionEffect = function(e, t) {
    return we.current.useInsertionEffect(e, t);
  };
  _.useLayoutEffect = function(e, t) {
    return we.current.useLayoutEffect(e, t);
  };
  _.useMemo = function(e, t) {
    return we.current.useMemo(e, t);
  };
  _.useReducer = function(e, t, n) {
    return we.current.useReducer(e, t, n);
  };
  _.useRef = function(e) {
    return we.current.useRef(e);
  };
  _.useState = function(e) {
    return we.current.useState(e);
  };
  _.useSyncExternalStore = function(e, t, n) {
    return we.current.useSyncExternalStore(e, t, n);
  };
  _.useTransition = function() {
    return we.current.useTransition();
  };
  _.version = "18.3.1";
  Ed.exports = _;
  var w = Ed.exports;
  var da = Eg(w);
  var Ug = kg({ __proto__: null, default: da }, [w]);
  var $g = w;
  var Wg = /* @__PURE__ */ Symbol.for("react.element");
  var bg = /* @__PURE__ */ Symbol.for("react.fragment");
  var Hg = Object.prototype.hasOwnProperty;
  var Kg = $g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  var Gg = { key: true, ref: true, __self: true, __source: true };
  function Vd(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) Hg.call(t, r) && !Gg.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: Wg, type: e, key: s, ref: o, props: i, _owner: Kg.current };
  }
  Is.Fragment = bg;
  Is.jsx = Vd;
  Is.jsxs = Vd;
  kd.exports = Is;
  var v = kd.exports;
  var Yo = {};
  var _d = { exports: {} };
  var Ve = {};
  var Id = { exports: {} };
  var Od = {};
  (function(e) {
    function t(N5, L2) {
      var D2 = N5.length;
      N5.push(L2);
      e: for (; 0 < D2; ) {
        var X2 = D2 - 1 >>> 1, ie2 = N5[X2];
        if (0 < i(ie2, L2)) N5[X2] = L2, N5[D2] = ie2, D2 = X2;
        else break e;
      }
    }
    function n(N5) {
      return N5.length === 0 ? null : N5[0];
    }
    function r(N5) {
      if (N5.length === 0) return null;
      var L2 = N5[0], D2 = N5.pop();
      if (D2 !== L2) {
        N5[0] = D2;
        e: for (var X2 = 0, ie2 = N5.length, wi = ie2 >>> 1; X2 < wi; ) {
          var Gt = 2 * (X2 + 1) - 1, oo = N5[Gt], Qt = Gt + 1, Si = N5[Qt];
          if (0 > i(oo, D2)) Qt < ie2 && 0 > i(Si, oo) ? (N5[X2] = Si, N5[Qt] = D2, X2 = Qt) : (N5[X2] = oo, N5[Gt] = D2, X2 = Gt);
          else if (Qt < ie2 && 0 > i(Si, D2)) N5[X2] = Si, N5[Qt] = D2, X2 = Qt;
          else break e;
        }
      }
      return L2;
    }
    function i(N5, L2) {
      var D2 = N5.sortIndex - L2.sortIndex;
      return D2 !== 0 ? D2 : N5.id - L2.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var s = performance;
      e.unstable_now = function() {
        return s.now();
      };
    } else {
      var o = Date, l = o.now();
      e.unstable_now = function() {
        return o.now() - l;
      };
    }
    var a2 = [], u2 = [], c = 1, f2 = null, d3 = 3, g4 = false, y2 = false, x3 = false, P3 = typeof setTimeout == "function" ? setTimeout : null, p2 = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(N5) {
      for (var L2 = n(u2); L2 !== null; ) {
        if (L2.callback === null) r(u2);
        else if (L2.startTime <= N5) r(u2), L2.sortIndex = L2.expirationTime, t(a2, L2);
        else break;
        L2 = n(u2);
      }
    }
    function S3(N5) {
      if (x3 = false, m(N5), !y2) if (n(a2) !== null) y2 = true, xi(C3);
      else {
        var L2 = n(u2);
        L2 !== null && ee(S3, L2.startTime - N5);
      }
    }
    function C3(N5, L2) {
      y2 = false, x3 && (x3 = false, p2(k4), k4 = -1), g4 = true;
      var D2 = d3;
      try {
        for (m(L2), f2 = n(a2); f2 !== null && (!(f2.expirationTime > L2) || N5 && !re2()); ) {
          var X2 = f2.callback;
          if (typeof X2 == "function") {
            f2.callback = null, d3 = f2.priorityLevel;
            var ie2 = X2(f2.expirationTime <= L2);
            L2 = e.unstable_now(), typeof ie2 == "function" ? f2.callback = ie2 : f2 === n(a2) && r(a2), m(L2);
          } else r(a2);
          f2 = n(a2);
        }
        if (f2 !== null) var wi = true;
        else {
          var Gt = n(u2);
          Gt !== null && ee(S3, Gt.startTime - L2), wi = false;
        }
        return wi;
      } finally {
        f2 = null, d3 = D2, g4 = false;
      }
    }
    var T3 = false, j3 = null, k4 = -1, V2 = 5, A5 = -1;
    function re2() {
      return !(e.unstable_now() - A5 < V2);
    }
    function xt() {
      if (j3 !== null) {
        var N5 = e.unstable_now();
        A5 = N5;
        var L2 = true;
        try {
          L2 = j3(true, N5);
        } finally {
          L2 ? Kt() : (T3 = false, j3 = null);
        }
      } else T3 = false;
    }
    var Kt;
    if (typeof h == "function") Kt = function() {
      h(xt);
    };
    else if (typeof MessageChannel < "u") {
      var or = new MessageChannel(), Bu = or.port2;
      or.port1.onmessage = xt, Kt = function() {
        Bu.postMessage(null);
      };
    } else Kt = function() {
      P3(xt, 0);
    };
    function xi(N5) {
      j3 = N5, T3 || (T3 = true, Kt());
    }
    function ee(N5, L2) {
      k4 = P3(function() {
        N5(e.unstable_now());
      }, L2);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N5) {
      N5.callback = null;
    }, e.unstable_continueExecution = function() {
      y2 || g4 || (y2 = true, xi(C3));
    }, e.unstable_forceFrameRate = function(N5) {
      0 > N5 || 125 < N5 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V2 = 0 < N5 ? Math.floor(1e3 / N5) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return d3;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(a2);
    }, e.unstable_next = function(N5) {
      switch (d3) {
        case 1:
        case 2:
        case 3:
          var L2 = 3;
          break;
        default:
          L2 = d3;
      }
      var D2 = d3;
      d3 = L2;
      try {
        return N5();
      } finally {
        d3 = D2;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(N5, L2) {
      switch (N5) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N5 = 3;
      }
      var D2 = d3;
      d3 = N5;
      try {
        return L2();
      } finally {
        d3 = D2;
      }
    }, e.unstable_scheduleCallback = function(N5, L2, D2) {
      var X2 = e.unstable_now();
      switch (typeof D2 == "object" && D2 !== null ? (D2 = D2.delay, D2 = typeof D2 == "number" && 0 < D2 ? X2 + D2 : X2) : D2 = X2, N5) {
        case 1:
          var ie2 = -1;
          break;
        case 2:
          ie2 = 250;
          break;
        case 5:
          ie2 = 1073741823;
          break;
        case 4:
          ie2 = 1e4;
          break;
        default:
          ie2 = 5e3;
      }
      return ie2 = D2 + ie2, N5 = { id: c++, callback: L2, priorityLevel: N5, startTime: D2, expirationTime: ie2, sortIndex: -1 }, D2 > X2 ? (N5.sortIndex = D2, t(u2, N5), n(a2) === null && N5 === n(u2) && (x3 ? (p2(k4), k4 = -1) : x3 = true, ee(S3, D2 - X2))) : (N5.sortIndex = ie2, t(a2, N5), y2 || g4 || (y2 = true, xi(C3))), N5;
    }, e.unstable_shouldYield = re2, e.unstable_wrapCallback = function(N5) {
      var L2 = d3;
      return function() {
        var D2 = d3;
        d3 = L2;
        try {
          return N5.apply(this, arguments);
        } finally {
          d3 = D2;
        }
      };
    };
  })(Od);
  Id.exports = Od;
  var Qg = Id.exports;
  var Xg = w;
  var Le = Qg;
  function E(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Fd = /* @__PURE__ */ new Set();
  var Or = {};
  function hn(e, t) {
    bn(e, t), bn(e + "Capture", t);
  }
  function bn(e, t) {
    for (Or[e] = t, e = 0; e < t.length; e++) Fd.add(t[e]);
  }
  var ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u");
  var Zo = Object.prototype.hasOwnProperty;
  var Yg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  var bu = {};
  var Hu = {};
  function Zg(e) {
    return Zo.call(Hu, e) ? true : Zo.call(bu, e) ? false : Yg.test(e) ? Hu[e] = true : (bu[e] = true, false);
  }
  function qg(e, t, n, r) {
    if (n !== null && n.type === 0) return false;
    switch (typeof t) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function Jg(e, t, n, r) {
    if (t === null || typeof t > "u" || qg(e, t, n, r)) return true;
    if (r) return false;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === false;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return false;
  }
  function Se(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o;
  }
  var ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ce[e] = new Se(e, 0, false, e, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ce[t] = new Se(t, 1, false, e[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ce[e] = new Se(e, 2, false, e.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ce[e] = new Se(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ce[e] = new Se(e, 3, false, e.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ce[e] = new Se(e, 3, true, e, null, false, false);
  });
  ["capture", "download"].forEach(function(e) {
    ce[e] = new Se(e, 4, false, e, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(e) {
    ce[e] = new Se(e, 6, false, e, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(e) {
    ce[e] = new Se(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var ha = /[\-:]([a-z])/g;
  function pa(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ha, pa);
    ce[t] = new Se(t, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ha, pa);
    ce[t] = new Se(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ha, pa);
    ce[t] = new Se(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(e) {
    ce[e] = new Se(e, 1, false, e.toLowerCase(), null, false, false);
  });
  ce.xlinkHref = new Se("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(e) {
    ce[e] = new Se(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function ma(e, t, n, r) {
    var i = ce.hasOwnProperty(t) ? ce[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Jg(t, n, i, r) && (n = null), r || i === null ? Zg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? false : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var yt = Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var Ci = /* @__PURE__ */ Symbol.for("react.element");
  var Sn = /* @__PURE__ */ Symbol.for("react.portal");
  var Pn = /* @__PURE__ */ Symbol.for("react.fragment");
  var ga = /* @__PURE__ */ Symbol.for("react.strict_mode");
  var qo = /* @__PURE__ */ Symbol.for("react.profiler");
  var zd = /* @__PURE__ */ Symbol.for("react.provider");
  var Bd = /* @__PURE__ */ Symbol.for("react.context");
  var va = /* @__PURE__ */ Symbol.for("react.forward_ref");
  var Jo = /* @__PURE__ */ Symbol.for("react.suspense");
  var el = /* @__PURE__ */ Symbol.for("react.suspense_list");
  var ya = /* @__PURE__ */ Symbol.for("react.memo");
  var Pt = /* @__PURE__ */ Symbol.for("react.lazy");
  var Ud = /* @__PURE__ */ Symbol.for("react.offscreen");
  var Ku = Symbol.iterator;
  function lr(e) {
    return e === null || typeof e != "object" ? null : (e = Ku && e[Ku] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var K = Object.assign;
  var ao;
  function vr(e) {
    if (ao === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ao = t && t[1] || "";
    }
    return `
` + ao + e;
  }
  var uo = false;
  function co(e, t) {
    if (!e || uo) return "";
    uo = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (u2) {
          var r = u2;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u2) {
          r = u2;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (u2) {
          r = u2;
        }
        e();
      }
    } catch (u2) {
      if (u2 && r && typeof u2.stack == "string") {
        for (var i = u2.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l]; ) l--;
        for (; 1 <= o && 0 <= l; o--, l--) if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1) do
            if (o--, l--, 0 > l || i[o] !== s[l]) {
              var a2 = `
` + i[o].replace(" at new ", " at ");
              return e.displayName && a2.includes("<anonymous>") && (a2 = a2.replace("<anonymous>", e.displayName)), a2;
            }
          while (1 <= o && 0 <= l);
          break;
        }
      }
    } finally {
      uo = false, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? vr(e) : "";
  }
  function ev(e) {
    switch (e.tag) {
      case 5:
        return vr(e.type);
      case 16:
        return vr("Lazy");
      case 13:
        return vr("Suspense");
      case 19:
        return vr("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = co(e.type, false), e;
      case 11:
        return e = co(e.type.render, false), e;
      case 1:
        return e = co(e.type, true), e;
      default:
        return "";
    }
  }
  function tl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Pn:
        return "Fragment";
      case Sn:
        return "Portal";
      case qo:
        return "Profiler";
      case ga:
        return "StrictMode";
      case Jo:
        return "Suspense";
      case el:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Bd:
        return (e.displayName || "Context") + ".Consumer";
      case zd:
        return (e._context.displayName || "Context") + ".Provider";
      case va:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ya:
        return t = e.displayName || null, t !== null ? t : tl(e.type) || "Memo";
      case Pt:
        t = e._payload, e = e._init;
        try {
          return tl(e(t));
        } catch {
        }
    }
    return null;
  }
  function tv(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return tl(t);
      case 8:
        return t === ga ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Ft(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function $d(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function nv(e) {
    var t = $d(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, s = n.set;
      return Object.defineProperty(e, t, { configurable: true, get: function() {
        return i.call(this);
      }, set: function(o) {
        r = "" + o, s.call(this, o);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function ki(e) {
    e._valueTracker || (e._valueTracker = nv(e));
  }
  function Wd(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), r = "";
    return e && (r = $d(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
  }
  function is(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function nl(e, t) {
    var n = t.checked;
    return K({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Gu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ft(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function bd(e, t) {
    t = t.checked, t != null && ma(e, "checked", t, false);
  }
  function rl(e, t) {
    bd(e, t);
    var n = Ft(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? il(e, t.type, n) : t.hasOwnProperty("defaultValue") && il(e, t.type, Ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Qu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function il(e, t, n) {
    (t !== "number" || is(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var yr = Array.isArray;
  function Fn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = true;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = true);
    } else {
      for (n = "" + Ft(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = true, r && (e[i].defaultSelected = true);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = true);
    }
  }
  function sl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
    return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Xu(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(E(92));
        if (yr(n)) {
          if (1 < n.length) throw Error(E(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Ft(n) };
  }
  function Hd(e, t) {
    var n = Ft(t.value), r = Ft(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Yu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Kd(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ol(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Kd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ei;
  var Gd = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ei = Ei || document.createElement("div"), Ei.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ei.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Fr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var kr = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true };
  var rv = ["Webkit", "ms", "Moz", "O"];
  Object.keys(kr).forEach(function(e) {
    rv.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), kr[t] = kr[e];
    });
  });
  function Qd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || kr.hasOwnProperty(e) && kr[e] ? ("" + t).trim() : t + "px";
  }
  function Xd(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Qd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var iv = K({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ll(e, t) {
    if (t) {
      if (iv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(E(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(E(62));
    }
  }
  function al(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var ul = null;
  function xa(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var cl = null;
  var zn = null;
  var Bn = null;
  function Zu(e) {
    if (e = di(e)) {
      if (typeof cl != "function") throw Error(E(280));
      var t = e.stateNode;
      t && (t = Us(t), cl(e.stateNode, e.type, t));
    }
  }
  function Yd(e) {
    zn ? Bn ? Bn.push(e) : Bn = [e] : zn = e;
  }
  function Zd() {
    if (zn) {
      var e = zn, t = Bn;
      if (Bn = zn = null, Zu(e), t) for (e = 0; e < t.length; e++) Zu(t[e]);
    }
  }
  function qd(e, t) {
    return e(t);
  }
  function Jd() {
  }
  var fo = false;
  function eh(e, t, n) {
    if (fo) return e(t, n);
    fo = true;
    try {
      return qd(e, t, n);
    } finally {
      fo = false, (zn !== null || Bn !== null) && (Jd(), Zd());
    }
  }
  function zr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Us(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(E(231, t, typeof n));
    return n;
  }
  var fl = false;
  if (ht) try {
    ar = {};
    Object.defineProperty(ar, "passive", { get: function() {
      fl = true;
    } }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
  } catch {
    fl = false;
  }
  var ar;
  function sv(e, t, n, r, i, s, o, l, a2) {
    var u2 = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u2);
    } catch (c) {
      this.onError(c);
    }
  }
  var Er = false;
  var ss = null;
  var os = false;
  var dl = null;
  var ov = { onError: function(e) {
    Er = true, ss = e;
  } };
  function lv(e, t, n, r, i, s, o, l, a2) {
    Er = false, ss = null, sv.apply(ov, arguments);
  }
  function av(e, t, n, r, i, s, o, l, a2) {
    if (lv.apply(this, arguments), Er) {
      if (Er) {
        var u2 = ss;
        Er = false, ss = null;
      } else throw Error(E(198));
      os || (os = true, dl = u2);
    }
  }
  function pn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function th(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function qu(e) {
    if (pn(e) !== e) throw Error(E(188));
  }
  function uv(e) {
    var t = e.alternate;
    if (!t) {
      if (t = pn(e), t === null) throw Error(E(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === n) return qu(i), e;
          if (s === r) return qu(i), t;
          s = s.sibling;
        }
        throw Error(E(188));
      }
      if (n.return !== r.return) n = i, r = s;
      else {
        for (var o = false, l = i.child; l; ) {
          if (l === n) {
            o = true, n = i, r = s;
            break;
          }
          if (l === r) {
            o = true, r = i, n = s;
            break;
          }
          l = l.sibling;
        }
        if (!o) {
          for (l = s.child; l; ) {
            if (l === n) {
              o = true, n = s, r = i;
              break;
            }
            if (l === r) {
              o = true, r = s, n = i;
              break;
            }
            l = l.sibling;
          }
          if (!o) throw Error(E(189));
        }
      }
      if (n.alternate !== r) throw Error(E(190));
    }
    if (n.tag !== 3) throw Error(E(188));
    return n.stateNode.current === n ? e : t;
  }
  function nh(e) {
    return e = uv(e), e !== null ? rh(e) : null;
  }
  function rh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = rh(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ih = Le.unstable_scheduleCallback;
  var Ju = Le.unstable_cancelCallback;
  var cv = Le.unstable_shouldYield;
  var fv = Le.unstable_requestPaint;
  var Z = Le.unstable_now;
  var dv = Le.unstable_getCurrentPriorityLevel;
  var wa = Le.unstable_ImmediatePriority;
  var sh = Le.unstable_UserBlockingPriority;
  var ls = Le.unstable_NormalPriority;
  var hv = Le.unstable_LowPriority;
  var oh = Le.unstable_IdlePriority;
  var Os = null;
  var tt = null;
  function pv(e) {
    if (tt && typeof tt.onCommitFiberRoot == "function") try {
      tt.onCommitFiberRoot(Os, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Xe = Math.clz32 ? Math.clz32 : vv;
  var mv = Math.log;
  var gv = Math.LN2;
  function vv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (mv(e) / gv | 0) | 0;
  }
  var Ti = 64;
  var ji = 4194304;
  function xr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function as(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, s = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var l = o & ~i;
      l !== 0 ? r = xr(l) : (s &= o, s !== 0 && (r = xr(s)));
    } else o = n & ~i, o !== 0 ? r = xr(o) : s !== 0 && (r = xr(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Xe(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function yv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function xv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
      var o = 31 - Xe(s), l = 1 << o, a2 = i[o];
      a2 === -1 ? (!(l & n) || l & r) && (i[o] = yv(l, t)) : a2 <= t && (e.expiredLanes |= l), s &= ~l;
    }
  }
  function hl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function lh() {
    var e = Ti;
    return Ti <<= 1, !(Ti & 4194240) && (Ti = 64), e;
  }
  function ho(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ci(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xe(t), e[t] = n;
  }
  function wv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - Xe(n), s = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
    }
  }
  function Sa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Xe(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var O = 0;
  function ah(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var uh;
  var Pa;
  var ch;
  var fh;
  var dh;
  var pl = false;
  var Ni = [];
  var Rt = null;
  var Mt = null;
  var At = null;
  var Br = /* @__PURE__ */ new Map();
  var Ur = /* @__PURE__ */ new Map();
  var kt = [];
  var Sv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ec(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Rt = null;
        break;
      case "dragenter":
      case "dragleave":
        Mt = null;
        break;
      case "mouseover":
      case "mouseout":
        At = null;
        break;
      case "pointerover":
      case "pointerout":
        Br.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ur.delete(t.pointerId);
    }
  }
  function ur(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = di(t), t !== null && Pa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Pv(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return Rt = ur(Rt, e, t, n, r, i), true;
      case "dragenter":
        return Mt = ur(Mt, e, t, n, r, i), true;
      case "mouseover":
        return At = ur(At, e, t, n, r, i), true;
      case "pointerover":
        var s = i.pointerId;
        return Br.set(s, ur(Br.get(s) || null, e, t, n, r, i)), true;
      case "gotpointercapture":
        return s = i.pointerId, Ur.set(s, ur(Ur.get(s) || null, e, t, n, r, i)), true;
    }
    return false;
  }
  function hh(e) {
    var t = en(e.target);
    if (t !== null) {
      var n = pn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = th(n), t !== null) {
            e.blockedOn = t, dh(e.priority, function() {
              ch(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Hi(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ml(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ul = r, n.target.dispatchEvent(r), ul = null;
      } else return t = di(n), t !== null && Pa(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function tc(e, t, n) {
    Hi(e) && n.delete(t);
  }
  function Cv() {
    pl = false, Rt !== null && Hi(Rt) && (Rt = null), Mt !== null && Hi(Mt) && (Mt = null), At !== null && Hi(At) && (At = null), Br.forEach(tc), Ur.forEach(tc);
  }
  function cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, pl || (pl = true, Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Cv)));
  }
  function $r(e) {
    function t(i) {
      return cr(i, e);
    }
    if (0 < Ni.length) {
      cr(Ni[0], e);
      for (var n = 1; n < Ni.length; n++) {
        var r = Ni[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Rt !== null && cr(Rt, e), Mt !== null && cr(Mt, e), At !== null && cr(At, e), Br.forEach(t), Ur.forEach(t), n = 0; n < kt.length; n++) r = kt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < kt.length && (n = kt[0], n.blockedOn === null); ) hh(n), n.blockedOn === null && kt.shift();
  }
  var Un = yt.ReactCurrentBatchConfig;
  var us = true;
  function kv(e, t, n, r) {
    var i = O, s = Un.transition;
    Un.transition = null;
    try {
      O = 1, Ca(e, t, n, r);
    } finally {
      O = i, Un.transition = s;
    }
  }
  function Ev(e, t, n, r) {
    var i = O, s = Un.transition;
    Un.transition = null;
    try {
      O = 4, Ca(e, t, n, r);
    } finally {
      O = i, Un.transition = s;
    }
  }
  function Ca(e, t, n, r) {
    if (us) {
      var i = ml(e, t, n, r);
      if (i === null) Co(e, t, r, cs, n), ec(e, r);
      else if (Pv(i, e, t, n, r)) r.stopPropagation();
      else if (ec(e, r), t & 4 && -1 < Sv.indexOf(e)) {
        for (; i !== null; ) {
          var s = di(i);
          if (s !== null && uh(s), s = ml(e, t, n, r), s === null && Co(e, t, r, cs, n), s === i) break;
          i = s;
        }
        i !== null && r.stopPropagation();
      } else Co(e, t, r, null, n);
    }
  }
  var cs = null;
  function ml(e, t, n, r) {
    if (cs = null, e = xa(r), e = en(e), e !== null) if (t = pn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = th(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return cs = e, null;
  }
  function ph(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (dv()) {
          case wa:
            return 1;
          case sh:
            return 4;
          case ls:
          case hv:
            return 16;
          case oh:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Tt = null;
  var ka = null;
  var Ki = null;
  function mh() {
    if (Ki) return Ki;
    var e, t = ka, n = t.length, r, i = "value" in Tt ? Tt.value : Tt.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++) ;
    return Ki = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Gi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ri() {
    return true;
  }
  function nc() {
    return false;
  }
  function _e(e) {
    function t(n, r, i, s, o) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
      for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === false) ? Ri : nc, this.isPropagationStopped = nc, this;
    }
    return K(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Ri);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Ri);
    }, persist: function() {
    }, isPersistent: Ri }), t;
  }
  var tr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 };
  var Ea = _e(tr);
  var fi = K({}, tr, { view: 0, detail: 0 });
  var Tv = _e(fi);
  var po;
  var mo;
  var fr;
  var Fs = K({}, fi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ta, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (po = e.screenX - fr.screenX, mo = e.screenY - fr.screenY) : mo = po = 0, fr = e), po);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : mo;
  } });
  var rc = _e(Fs);
  var jv = K({}, Fs, { dataTransfer: 0 });
  var Nv = _e(jv);
  var Rv = K({}, fi, { relatedTarget: 0 });
  var go = _e(Rv);
  var Mv = K({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
  var Av = _e(Mv);
  var Lv = K({}, tr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } });
  var Dv = _e(Lv);
  var Vv = K({}, tr, { data: 0 });
  var ic = _e(Vv);
  var _v = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" };
  var Iv = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" };
  var Ov = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Fv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ov[e]) ? !!t[e] : false;
  }
  function Ta() {
    return Fv;
  }
  var zv = K({}, fi, { key: function(e) {
    if (e.key) {
      var t = _v[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Gi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Iv[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ta, charCode: function(e) {
    return e.type === "keypress" ? Gi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Gi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } });
  var Bv = _e(zv);
  var Uv = K({}, Fs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
  var sc = _e(Uv);
  var $v = K({}, fi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ta });
  var Wv = _e($v);
  var bv = K({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
  var Hv = _e(bv);
  var Kv = K({}, Fs, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 });
  var Gv = _e(Kv);
  var Qv = [9, 13, 27, 32];
  var ja = ht && "CompositionEvent" in window;
  var Tr = null;
  ht && "documentMode" in document && (Tr = document.documentMode);
  var Xv = ht && "TextEvent" in window && !Tr;
  var gh = ht && (!ja || Tr && 8 < Tr && 11 >= Tr);
  var oc = " ";
  var lc = false;
  function vh(e, t) {
    switch (e) {
      case "keyup":
        return Qv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function yh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Cn = false;
  function Yv(e, t) {
    switch (e) {
      case "compositionend":
        return yh(t);
      case "keypress":
        return t.which !== 32 ? null : (lc = true, oc);
      case "textInput":
        return e = t.data, e === oc && lc ? null : e;
      default:
        return null;
    }
  }
  function Zv(e, t) {
    if (Cn) return e === "compositionend" || !ja && vh(e, t) ? (e = mh(), Ki = ka = Tt = null, Cn = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return gh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var qv = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function ac(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!qv[e.type] : t === "textarea";
  }
  function xh(e, t, n, r) {
    Yd(r), t = fs(t, "onChange"), 0 < t.length && (n = new Ea("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var jr = null;
  var Wr = null;
  function Jv(e) {
    Mh(e, 0);
  }
  function zs(e) {
    var t = Tn(e);
    if (Wd(t)) return e;
  }
  function ey(e, t) {
    if (e === "change") return t;
  }
  var wh = false;
  if (ht) {
    if (ht) {
      yo = "oninput" in document;
      if (!yo) {
        uc = document.createElement("div");
        uc.setAttribute("oninput", "return;"), yo = typeof uc.oninput == "function";
      }
      vo = yo;
    } else vo = false;
    wh = vo && (!document.documentMode || 9 < document.documentMode);
  }
  var vo;
  var yo;
  var uc;
  function cc() {
    jr && (jr.detachEvent("onpropertychange", Sh), Wr = jr = null);
  }
  function Sh(e) {
    if (e.propertyName === "value" && zs(Wr)) {
      var t = [];
      xh(t, Wr, e, xa(e)), eh(Jv, t);
    }
  }
  function ty(e, t, n) {
    e === "focusin" ? (cc(), jr = t, Wr = n, jr.attachEvent("onpropertychange", Sh)) : e === "focusout" && cc();
  }
  function ny(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zs(Wr);
  }
  function ry(e, t) {
    if (e === "click") return zs(t);
  }
  function iy(e, t) {
    if (e === "input" || e === "change") return zs(t);
  }
  function sy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ze = typeof Object.is == "function" ? Object.is : sy;
  function br(e, t) {
    if (Ze(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return false;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!Zo.call(t, i) || !Ze(e[i], t[i])) return false;
    }
    return true;
  }
  function fc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function dc(e, t) {
    var n = fc(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = fc(n);
    }
  }
  function Ph(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Ph(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function Ch() {
    for (var e = window, t = is(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = is(e.document);
    }
    return t;
  }
  function Na(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function oy(e) {
    var t = Ch(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ph(n.ownerDocument.documentElement, n)) {
      if (r !== null && Na(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, s = Math.min(r.start, i);
          r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = dc(n, s);
          var o = dc(n, r);
          i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var ly = ht && "documentMode" in document && 11 >= document.documentMode;
  var kn = null;
  var gl = null;
  var Nr = null;
  var vl = false;
  function hc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    vl || kn == null || kn !== is(r) || (r = kn, "selectionStart" in r && Na(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Nr && br(Nr, r) || (Nr = r, r = fs(gl, "onSelect"), 0 < r.length && (t = new Ea("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = kn)));
  }
  function Mi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var En = { animationend: Mi("Animation", "AnimationEnd"), animationiteration: Mi("Animation", "AnimationIteration"), animationstart: Mi("Animation", "AnimationStart"), transitionend: Mi("Transition", "TransitionEnd") };
  var xo = {};
  var kh = {};
  ht && (kh = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
  function Bs(e) {
    if (xo[e]) return xo[e];
    if (!En[e]) return e;
    var t = En[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in kh) return xo[e] = t[n];
    return e;
  }
  var Eh = Bs("animationend");
  var Th = Bs("animationiteration");
  var jh = Bs("animationstart");
  var Nh = Bs("transitionend");
  var Rh = /* @__PURE__ */ new Map();
  var pc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function $t(e, t) {
    Rh.set(e, t), hn(t, [e]);
  }
  for (wo = 0; wo < pc.length; wo++) {
    So = pc[wo], ay = So.toLowerCase(), uy = So[0].toUpperCase() + So.slice(1);
    $t(ay, "on" + uy);
  }
  var So;
  var ay;
  var uy;
  var wo;
  $t(Eh, "onAnimationEnd");
  $t(Th, "onAnimationIteration");
  $t(jh, "onAnimationStart");
  $t("dblclick", "onDoubleClick");
  $t("focusin", "onFocus");
  $t("focusout", "onBlur");
  $t(Nh, "onTransitionEnd");
  bn("onMouseEnter", ["mouseout", "mouseover"]);
  bn("onMouseLeave", ["mouseout", "mouseover"]);
  bn("onPointerEnter", ["pointerout", "pointerover"]);
  bn("onPointerLeave", ["pointerout", "pointerover"]);
  hn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  hn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  hn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  hn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  hn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  var cy = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));
  function mc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, av(r, t, void 0, e), e.currentTarget = null;
  }
  function Mh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o], a2 = l.instance, u2 = l.currentTarget;
          if (l = l.listener, a2 !== s && i.isPropagationStopped()) break e;
          mc(i, l, u2), s = a2;
        }
        else for (o = 0; o < r.length; o++) {
          if (l = r[o], a2 = l.instance, u2 = l.currentTarget, l = l.listener, a2 !== s && i.isPropagationStopped()) break e;
          mc(i, l, u2), s = a2;
        }
      }
    }
    if (os) throw e = dl, os = false, dl = null, e;
  }
  function z(e, t) {
    var n = t[Pl];
    n === void 0 && (n = t[Pl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ah(t, e, 2, false), n.add(r));
  }
  function Po(e, t, n) {
    var r = 0;
    t && (r |= 4), Ah(n, e, r, t);
  }
  var Ai = "_reactListening" + Math.random().toString(36).slice(2);
  function Hr(e) {
    if (!e[Ai]) {
      e[Ai] = true, Fd.forEach(function(n) {
        n !== "selectionchange" && (cy.has(n) || Po(n, false, e), Po(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ai] || (t[Ai] = true, Po("selectionchange", false, t));
    }
  }
  function Ah(e, t, n, r) {
    switch (ph(t)) {
      case 1:
        var i = kv;
        break;
      case 4:
        i = Ev;
        break;
      default:
        i = Ca;
    }
    n = i.bind(null, t, n, e), i = void 0, !fl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = true), r ? i !== void 0 ? e.addEventListener(t, n, { capture: true, passive: i }) : e.addEventListener(t, n, true) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, false);
  }
  function Co(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || l.nodeType === 8 && l.parentNode === i) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var a2 = o.tag;
          if ((a2 === 3 || a2 === 4) && (a2 = o.stateNode.containerInfo, a2 === i || a2.nodeType === 8 && a2.parentNode === i)) return;
          o = o.return;
        }
        for (; l !== null; ) {
          if (o = en(l), o === null) return;
          if (a2 = o.tag, a2 === 5 || a2 === 6) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
    eh(function() {
      var u2 = s, c = xa(n), f2 = [];
      e: {
        var d3 = Rh.get(e);
        if (d3 !== void 0) {
          var g4 = Ea, y2 = e;
          switch (e) {
            case "keypress":
              if (Gi(n) === 0) break e;
            case "keydown":
            case "keyup":
              g4 = Bv;
              break;
            case "focusin":
              y2 = "focus", g4 = go;
              break;
            case "focusout":
              y2 = "blur", g4 = go;
              break;
            case "beforeblur":
            case "afterblur":
              g4 = go;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g4 = rc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g4 = Nv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g4 = Wv;
              break;
            case Eh:
            case Th:
            case jh:
              g4 = Av;
              break;
            case Nh:
              g4 = Hv;
              break;
            case "scroll":
              g4 = Tv;
              break;
            case "wheel":
              g4 = Gv;
              break;
            case "copy":
            case "cut":
            case "paste":
              g4 = Dv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g4 = sc;
          }
          var x3 = (t & 4) !== 0, P3 = !x3 && e === "scroll", p2 = x3 ? d3 !== null ? d3 + "Capture" : null : d3;
          x3 = [];
          for (var h = u2, m; h !== null; ) {
            m = h;
            var S3 = m.stateNode;
            if (m.tag === 5 && S3 !== null && (m = S3, p2 !== null && (S3 = zr(h, p2), S3 != null && x3.push(Kr(h, S3, m)))), P3) break;
            h = h.return;
          }
          0 < x3.length && (d3 = new g4(d3, y2, null, n, c), f2.push({ event: d3, listeners: x3 }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (d3 = e === "mouseover" || e === "pointerover", g4 = e === "mouseout" || e === "pointerout", d3 && n !== ul && (y2 = n.relatedTarget || n.fromElement) && (en(y2) || y2[pt])) break e;
          if ((g4 || d3) && (d3 = c.window === c ? c : (d3 = c.ownerDocument) ? d3.defaultView || d3.parentWindow : window, g4 ? (y2 = n.relatedTarget || n.toElement, g4 = u2, y2 = y2 ? en(y2) : null, y2 !== null && (P3 = pn(y2), y2 !== P3 || y2.tag !== 5 && y2.tag !== 6) && (y2 = null)) : (g4 = null, y2 = u2), g4 !== y2)) {
            if (x3 = rc, S3 = "onMouseLeave", p2 = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (x3 = sc, S3 = "onPointerLeave", p2 = "onPointerEnter", h = "pointer"), P3 = g4 == null ? d3 : Tn(g4), m = y2 == null ? d3 : Tn(y2), d3 = new x3(S3, h + "leave", g4, n, c), d3.target = P3, d3.relatedTarget = m, S3 = null, en(c) === u2 && (x3 = new x3(p2, h + "enter", y2, n, c), x3.target = m, x3.relatedTarget = P3, S3 = x3), P3 = S3, g4 && y2) t: {
              for (x3 = g4, p2 = y2, h = 0, m = x3; m; m = xn(m)) h++;
              for (m = 0, S3 = p2; S3; S3 = xn(S3)) m++;
              for (; 0 < h - m; ) x3 = xn(x3), h--;
              for (; 0 < m - h; ) p2 = xn(p2), m--;
              for (; h--; ) {
                if (x3 === p2 || p2 !== null && x3 === p2.alternate) break t;
                x3 = xn(x3), p2 = xn(p2);
              }
              x3 = null;
            }
            else x3 = null;
            g4 !== null && gc(f2, d3, g4, x3, false), y2 !== null && P3 !== null && gc(f2, P3, y2, x3, true);
          }
        }
        e: {
          if (d3 = u2 ? Tn(u2) : window, g4 = d3.nodeName && d3.nodeName.toLowerCase(), g4 === "select" || g4 === "input" && d3.type === "file") var C3 = ey;
          else if (ac(d3)) if (wh) C3 = iy;
          else {
            C3 = ny;
            var T3 = ty;
          }
          else (g4 = d3.nodeName) && g4.toLowerCase() === "input" && (d3.type === "checkbox" || d3.type === "radio") && (C3 = ry);
          if (C3 && (C3 = C3(e, u2))) {
            xh(f2, C3, n, c);
            break e;
          }
          T3 && T3(e, d3, u2), e === "focusout" && (T3 = d3._wrapperState) && T3.controlled && d3.type === "number" && il(d3, "number", d3.value);
        }
        switch (T3 = u2 ? Tn(u2) : window, e) {
          case "focusin":
            (ac(T3) || T3.contentEditable === "true") && (kn = T3, gl = u2, Nr = null);
            break;
          case "focusout":
            Nr = gl = kn = null;
            break;
          case "mousedown":
            vl = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vl = false, hc(f2, n, c);
            break;
          case "selectionchange":
            if (ly) break;
          case "keydown":
          case "keyup":
            hc(f2, n, c);
        }
        var j3;
        if (ja) e: {
          switch (e) {
            case "compositionstart":
              var k4 = "onCompositionStart";
              break e;
            case "compositionend":
              k4 = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k4 = "onCompositionUpdate";
              break e;
          }
          k4 = void 0;
        }
        else Cn ? vh(e, n) && (k4 = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k4 = "onCompositionStart");
        k4 && (gh && n.locale !== "ko" && (Cn || k4 !== "onCompositionStart" ? k4 === "onCompositionEnd" && Cn && (j3 = mh()) : (Tt = c, ka = "value" in Tt ? Tt.value : Tt.textContent, Cn = true)), T3 = fs(u2, k4), 0 < T3.length && (k4 = new ic(k4, e, null, n, c), f2.push({ event: k4, listeners: T3 }), j3 ? k4.data = j3 : (j3 = yh(n), j3 !== null && (k4.data = j3)))), (j3 = Xv ? Yv(e, n) : Zv(e, n)) && (u2 = fs(u2, "onBeforeInput"), 0 < u2.length && (c = new ic("onBeforeInput", "beforeinput", null, n, c), f2.push({ event: c, listeners: u2 }), c.data = j3));
      }
      Mh(f2, t);
    });
  }
  function Kr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function fs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, s = i.stateNode;
      i.tag === 5 && s !== null && (i = s, s = zr(e, n), s != null && r.unshift(Kr(e, s, i)), s = zr(e, t), s != null && r.push(Kr(e, s, i))), e = e.return;
    }
    return r;
  }
  function xn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function gc(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
      var l = n, a2 = l.alternate, u2 = l.stateNode;
      if (a2 !== null && a2 === r) break;
      l.tag === 5 && u2 !== null && (l = u2, i ? (a2 = zr(n, s), a2 != null && o.unshift(Kr(n, a2, l))) : i || (a2 = zr(n, s), a2 != null && o.push(Kr(n, a2, l)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var fy = /\r\n?/g;
  var dy = /\u0000|\uFFFD/g;
  function vc(e) {
    return (typeof e == "string" ? e : "" + e).replace(fy, `
`).replace(dy, "");
  }
  function Li(e, t, n) {
    if (t = vc(t), vc(e) !== t && n) throw Error(E(425));
  }
  function ds() {
  }
  var yl = null;
  var xl = null;
  function wl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Sl = typeof setTimeout == "function" ? setTimeout : void 0;
  var hy = typeof clearTimeout == "function" ? clearTimeout : void 0;
  var yc = typeof Promise == "function" ? Promise : void 0;
  var py = typeof queueMicrotask == "function" ? queueMicrotask : typeof yc < "u" ? function(e) {
    return yc.resolve(null).then(e).catch(my);
  } : Sl;
  function my(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ko(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), $r(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    $r(t);
  }
  function Lt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function xc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var nr = Math.random().toString(36).slice(2);
  var et = "__reactFiber$" + nr;
  var Gr = "__reactProps$" + nr;
  var pt = "__reactContainer$" + nr;
  var Pl = "__reactEvents$" + nr;
  var gy = "__reactListeners$" + nr;
  var vy = "__reactHandles$" + nr;
  function en(e) {
    var t = e[et];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[pt] || n[et]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = xc(e); e !== null; ) {
          if (n = e[et]) return n;
          e = xc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function di(e) {
    return e = e[et] || e[pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Tn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(E(33));
  }
  function Us(e) {
    return e[Gr] || null;
  }
  var Cl = [];
  var jn = -1;
  function Wt(e) {
    return { current: e };
  }
  function B(e) {
    0 > jn || (e.current = Cl[jn], Cl[jn] = null, jn--);
  }
  function F(e, t) {
    jn++, Cl[jn] = e.current, e.current = t;
  }
  var zt = {};
  var ve = Wt(zt);
  var Ee = Wt(false);
  var an = zt;
  function Hn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return zt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n) i[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function Te(e) {
    return e = e.childContextTypes, e != null;
  }
  function hs() {
    B(Ee), B(ve);
  }
  function wc(e, t, n) {
    if (ve.current !== zt) throw Error(E(168));
    F(ve, t), F(Ee, n);
  }
  function Lh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(E(108, tv(e) || "Unknown", i));
    return K({}, n, r);
  }
  function ps(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || zt, an = ve.current, F(ve, e), F(Ee, Ee.current), true;
  }
  function Sc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(E(169));
    n ? (e = Lh(e, t, an), r.__reactInternalMemoizedMergedChildContext = e, B(Ee), B(ve), F(ve, e)) : B(Ee), F(Ee, n);
  }
  var ot = null;
  var $s = false;
  var Eo = false;
  function Dh(e) {
    ot === null ? ot = [e] : ot.push(e);
  }
  function yy(e) {
    $s = true, Dh(e);
  }
  function bt() {
    if (!Eo && ot !== null) {
      Eo = true;
      var e = 0, t = O;
      try {
        var n = ot;
        for (O = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(true);
          while (r !== null);
        }
        ot = null, $s = false;
      } catch (i) {
        throw ot !== null && (ot = ot.slice(e + 1)), ih(wa, bt), i;
      } finally {
        O = t, Eo = false;
      }
    }
    return null;
  }
  var Nn = [];
  var Rn = 0;
  var ms = null;
  var gs = 0;
  var Fe = [];
  var ze = 0;
  var un = null;
  var at = 1;
  var ut = "";
  function Yt(e, t) {
    Nn[Rn++] = gs, Nn[Rn++] = ms, ms = e, gs = t;
  }
  function Vh(e, t, n) {
    Fe[ze++] = at, Fe[ze++] = ut, Fe[ze++] = un, un = e;
    var r = at;
    e = ut;
    var i = 32 - Xe(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - Xe(t) + i;
    if (30 < s) {
      var o = i - i % 5;
      s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, at = 1 << 32 - Xe(t) + i | n << i | r, ut = s + e;
    } else at = 1 << s | n << i | r, ut = e;
  }
  function Ra(e) {
    e.return !== null && (Yt(e, 1), Vh(e, 1, 0));
  }
  function Ma(e) {
    for (; e === ms; ) ms = Nn[--Rn], Nn[Rn] = null, gs = Nn[--Rn], Nn[Rn] = null;
    for (; e === un; ) un = Fe[--ze], Fe[ze] = null, ut = Fe[--ze], Fe[ze] = null, at = Fe[--ze], Fe[ze] = null;
  }
  var Ae = null;
  var Me = null;
  var $ = false;
  var Qe = null;
  function _h(e, t) {
    var n = Be(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Pc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, Me = Lt(t.firstChild), true) : false;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, Me = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = un !== null ? { id: at, overflow: ut } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, Me = null, true) : false;
      default:
        return false;
    }
  }
  function kl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function El(e) {
    if ($) {
      var t = Me;
      if (t) {
        var n = t;
        if (!Pc(e, t)) {
          if (kl(e)) throw Error(E(418));
          t = Lt(n.nextSibling);
          var r = Ae;
          t && Pc(e, t) ? _h(r, n) : (e.flags = e.flags & -4097 | 2, $ = false, Ae = e);
        }
      } else {
        if (kl(e)) throw Error(E(418));
        e.flags = e.flags & -4097 | 2, $ = false, Ae = e;
      }
    }
  }
  function Cc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ae = e;
  }
  function Di(e) {
    if (e !== Ae) return false;
    if (!$) return Cc(e), $ = true, false;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wl(e.type, e.memoizedProps)), t && (t = Me)) {
      if (kl(e)) throw Ih(), Error(E(418));
      for (; t; ) _h(e, t), t = Lt(t.nextSibling);
    }
    if (Cc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Me = Lt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Me = null;
      }
    } else Me = Ae ? Lt(e.stateNode.nextSibling) : null;
    return true;
  }
  function Ih() {
    for (var e = Me; e; ) e = Lt(e.nextSibling);
  }
  function Kn() {
    Me = Ae = null, $ = false;
  }
  function Aa(e) {
    Qe === null ? Qe = [e] : Qe.push(e);
  }
  var xy = yt.ReactCurrentBatchConfig;
  function dr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(E(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(E(147, e));
        var i = r, s = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
          var l = i.refs;
          o === null ? delete l[s] : l[s] = o;
        }, t._stringRef = s, t);
      }
      if (typeof e != "string") throw Error(E(284));
      if (!n._owner) throw Error(E(290, e));
    }
    return e;
  }
  function Vi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function kc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Oh(e) {
    function t(p2, h) {
      if (e) {
        var m = p2.deletions;
        m === null ? (p2.deletions = [h], p2.flags |= 16) : m.push(h);
      }
    }
    function n(p2, h) {
      if (!e) return null;
      for (; h !== null; ) t(p2, h), h = h.sibling;
      return null;
    }
    function r(p2, h) {
      for (p2 = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? p2.set(h.key, h) : p2.set(h.index, h), h = h.sibling;
      return p2;
    }
    function i(p2, h) {
      return p2 = It(p2, h), p2.index = 0, p2.sibling = null, p2;
    }
    function s(p2, h, m) {
      return p2.index = m, e ? (m = p2.alternate, m !== null ? (m = m.index, m < h ? (p2.flags |= 2, h) : m) : (p2.flags |= 2, h)) : (p2.flags |= 1048576, h);
    }
    function o(p2) {
      return e && p2.alternate === null && (p2.flags |= 2), p2;
    }
    function l(p2, h, m, S3) {
      return h === null || h.tag !== 6 ? (h = Lo(m, p2.mode, S3), h.return = p2, h) : (h = i(h, m), h.return = p2, h);
    }
    function a2(p2, h, m, S3) {
      var C3 = m.type;
      return C3 === Pn ? c(p2, h, m.props.children, S3, m.key) : h !== null && (h.elementType === C3 || typeof C3 == "object" && C3 !== null && C3.$$typeof === Pt && kc(C3) === h.type) ? (S3 = i(h, m.props), S3.ref = dr(p2, h, m), S3.return = p2, S3) : (S3 = es(m.type, m.key, m.props, null, p2.mode, S3), S3.ref = dr(p2, h, m), S3.return = p2, S3);
    }
    function u2(p2, h, m, S3) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = Do(m, p2.mode, S3), h.return = p2, h) : (h = i(h, m.children || []), h.return = p2, h);
    }
    function c(p2, h, m, S3, C3) {
      return h === null || h.tag !== 7 ? (h = on(m, p2.mode, S3, C3), h.return = p2, h) : (h = i(h, m), h.return = p2, h);
    }
    function f2(p2, h, m) {
      if (typeof h == "string" && h !== "" || typeof h == "number") return h = Lo("" + h, p2.mode, m), h.return = p2, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Ci:
            return m = es(h.type, h.key, h.props, null, p2.mode, m), m.ref = dr(p2, null, h), m.return = p2, m;
          case Sn:
            return h = Do(h, p2.mode, m), h.return = p2, h;
          case Pt:
            var S3 = h._init;
            return f2(p2, S3(h._payload), m);
        }
        if (yr(h) || lr(h)) return h = on(h, p2.mode, m, null), h.return = p2, h;
        Vi(p2, h);
      }
      return null;
    }
    function d3(p2, h, m, S3) {
      var C3 = h !== null ? h.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number") return C3 !== null ? null : l(p2, h, "" + m, S3);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ci:
            return m.key === C3 ? a2(p2, h, m, S3) : null;
          case Sn:
            return m.key === C3 ? u2(p2, h, m, S3) : null;
          case Pt:
            return C3 = m._init, d3(p2, h, C3(m._payload), S3);
        }
        if (yr(m) || lr(m)) return C3 !== null ? null : c(p2, h, m, S3, null);
        Vi(p2, m);
      }
      return null;
    }
    function g4(p2, h, m, S3, C3) {
      if (typeof S3 == "string" && S3 !== "" || typeof S3 == "number") return p2 = p2.get(m) || null, l(h, p2, "" + S3, C3);
      if (typeof S3 == "object" && S3 !== null) {
        switch (S3.$$typeof) {
          case Ci:
            return p2 = p2.get(S3.key === null ? m : S3.key) || null, a2(h, p2, S3, C3);
          case Sn:
            return p2 = p2.get(S3.key === null ? m : S3.key) || null, u2(h, p2, S3, C3);
          case Pt:
            var T3 = S3._init;
            return g4(p2, h, m, T3(S3._payload), C3);
        }
        if (yr(S3) || lr(S3)) return p2 = p2.get(m) || null, c(h, p2, S3, C3, null);
        Vi(h, S3);
      }
      return null;
    }
    function y2(p2, h, m, S3) {
      for (var C3 = null, T3 = null, j3 = h, k4 = h = 0, V2 = null; j3 !== null && k4 < m.length; k4++) {
        j3.index > k4 ? (V2 = j3, j3 = null) : V2 = j3.sibling;
        var A5 = d3(p2, j3, m[k4], S3);
        if (A5 === null) {
          j3 === null && (j3 = V2);
          break;
        }
        e && j3 && A5.alternate === null && t(p2, j3), h = s(A5, h, k4), T3 === null ? C3 = A5 : T3.sibling = A5, T3 = A5, j3 = V2;
      }
      if (k4 === m.length) return n(p2, j3), $ && Yt(p2, k4), C3;
      if (j3 === null) {
        for (; k4 < m.length; k4++) j3 = f2(p2, m[k4], S3), j3 !== null && (h = s(j3, h, k4), T3 === null ? C3 = j3 : T3.sibling = j3, T3 = j3);
        return $ && Yt(p2, k4), C3;
      }
      for (j3 = r(p2, j3); k4 < m.length; k4++) V2 = g4(j3, p2, k4, m[k4], S3), V2 !== null && (e && V2.alternate !== null && j3.delete(V2.key === null ? k4 : V2.key), h = s(V2, h, k4), T3 === null ? C3 = V2 : T3.sibling = V2, T3 = V2);
      return e && j3.forEach(function(re2) {
        return t(p2, re2);
      }), $ && Yt(p2, k4), C3;
    }
    function x3(p2, h, m, S3) {
      var C3 = lr(m);
      if (typeof C3 != "function") throw Error(E(150));
      if (m = C3.call(m), m == null) throw Error(E(151));
      for (var T3 = C3 = null, j3 = h, k4 = h = 0, V2 = null, A5 = m.next(); j3 !== null && !A5.done; k4++, A5 = m.next()) {
        j3.index > k4 ? (V2 = j3, j3 = null) : V2 = j3.sibling;
        var re2 = d3(p2, j3, A5.value, S3);
        if (re2 === null) {
          j3 === null && (j3 = V2);
          break;
        }
        e && j3 && re2.alternate === null && t(p2, j3), h = s(re2, h, k4), T3 === null ? C3 = re2 : T3.sibling = re2, T3 = re2, j3 = V2;
      }
      if (A5.done) return n(p2, j3), $ && Yt(p2, k4), C3;
      if (j3 === null) {
        for (; !A5.done; k4++, A5 = m.next()) A5 = f2(p2, A5.value, S3), A5 !== null && (h = s(A5, h, k4), T3 === null ? C3 = A5 : T3.sibling = A5, T3 = A5);
        return $ && Yt(p2, k4), C3;
      }
      for (j3 = r(p2, j3); !A5.done; k4++, A5 = m.next()) A5 = g4(j3, p2, k4, A5.value, S3), A5 !== null && (e && A5.alternate !== null && j3.delete(A5.key === null ? k4 : A5.key), h = s(A5, h, k4), T3 === null ? C3 = A5 : T3.sibling = A5, T3 = A5);
      return e && j3.forEach(function(xt) {
        return t(p2, xt);
      }), $ && Yt(p2, k4), C3;
    }
    function P3(p2, h, m, S3) {
      if (typeof m == "object" && m !== null && m.type === Pn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ci:
            e: {
              for (var C3 = m.key, T3 = h; T3 !== null; ) {
                if (T3.key === C3) {
                  if (C3 = m.type, C3 === Pn) {
                    if (T3.tag === 7) {
                      n(p2, T3.sibling), h = i(T3, m.props.children), h.return = p2, p2 = h;
                      break e;
                    }
                  } else if (T3.elementType === C3 || typeof C3 == "object" && C3 !== null && C3.$$typeof === Pt && kc(C3) === T3.type) {
                    n(p2, T3.sibling), h = i(T3, m.props), h.ref = dr(p2, T3, m), h.return = p2, p2 = h;
                    break e;
                  }
                  n(p2, T3);
                  break;
                } else t(p2, T3);
                T3 = T3.sibling;
              }
              m.type === Pn ? (h = on(m.props.children, p2.mode, S3, m.key), h.return = p2, p2 = h) : (S3 = es(m.type, m.key, m.props, null, p2.mode, S3), S3.ref = dr(p2, h, m), S3.return = p2, p2 = S3);
            }
            return o(p2);
          case Sn:
            e: {
              for (T3 = m.key; h !== null; ) {
                if (h.key === T3) if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                  n(p2, h.sibling), h = i(h, m.children || []), h.return = p2, p2 = h;
                  break e;
                } else {
                  n(p2, h);
                  break;
                }
                else t(p2, h);
                h = h.sibling;
              }
              h = Do(m, p2.mode, S3), h.return = p2, p2 = h;
            }
            return o(p2);
          case Pt:
            return T3 = m._init, P3(p2, h, T3(m._payload), S3);
        }
        if (yr(m)) return y2(p2, h, m, S3);
        if (lr(m)) return x3(p2, h, m, S3);
        Vi(p2, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(p2, h.sibling), h = i(h, m), h.return = p2, p2 = h) : (n(p2, h), h = Lo(m, p2.mode, S3), h.return = p2, p2 = h), o(p2)) : n(p2, h);
    }
    return P3;
  }
  var Gn = Oh(true);
  var Fh = Oh(false);
  var vs = Wt(null);
  var ys = null;
  var Mn = null;
  var La = null;
  function Da() {
    La = Mn = ys = null;
  }
  function Va(e) {
    var t = vs.current;
    B(vs), e._currentValue = t;
  }
  function Tl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function $n(e, t) {
    ys = e, La = Mn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ke = true), e.firstContext = null);
  }
  function $e(e) {
    var t = e._currentValue;
    if (La !== e) if (e = { context: e, memoizedValue: t, next: null }, Mn === null) {
      if (ys === null) throw Error(E(308));
      Mn = e, ys.dependencies = { lanes: 0, firstContext: e };
    } else Mn = Mn.next = e;
    return t;
  }
  var tn = null;
  function _a(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  function zh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, _a(t)) : (n.next = i.next, i.next = n), t.interleaved = n, mt(e, r);
  }
  function mt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ct = false;
  function Ia(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Bh(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function ct(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Dt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, I & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, mt(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, _a(r)) : (t.next = i.next, i.next = t), r.interleaved = t, mt(e, n);
  }
  function Qi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Sa(e, n);
    }
  }
  function Ec(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          s === null ? i = s = o : s = s.next = o, n = n.next;
        } while (n !== null);
        s === null ? i = s = t : s = s.next = t;
      } else i = s = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function xs(e, t, n, r) {
    var i = e.updateQueue;
    Ct = false;
    var s = i.firstBaseUpdate, o = i.lastBaseUpdate, l = i.shared.pending;
    if (l !== null) {
      i.shared.pending = null;
      var a2 = l, u2 = a2.next;
      a2.next = null, o === null ? s = u2 : o.next = u2, o = a2;
      var c = e.alternate;
      c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== o && (l === null ? c.firstBaseUpdate = u2 : l.next = u2, c.lastBaseUpdate = a2));
    }
    if (s !== null) {
      var f2 = i.baseState;
      o = 0, c = u2 = a2 = null, l = s;
      do {
        var d3 = l.lane, g4 = l.eventTime;
        if ((r & d3) === d3) {
          c !== null && (c = c.next = { eventTime: g4, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
          e: {
            var y2 = e, x3 = l;
            switch (d3 = t, g4 = n, x3.tag) {
              case 1:
                if (y2 = x3.payload, typeof y2 == "function") {
                  f2 = y2.call(g4, f2, d3);
                  break e;
                }
                f2 = y2;
                break e;
              case 3:
                y2.flags = y2.flags & -65537 | 128;
              case 0:
                if (y2 = x3.payload, d3 = typeof y2 == "function" ? y2.call(g4, f2, d3) : y2, d3 == null) break e;
                f2 = K({}, f2, d3);
                break e;
              case 2:
                Ct = true;
            }
          }
          l.callback !== null && l.lane !== 0 && (e.flags |= 64, d3 = i.effects, d3 === null ? i.effects = [l] : d3.push(l));
        } else g4 = { eventTime: g4, lane: d3, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u2 = c = g4, a2 = f2) : c = c.next = g4, o |= d3;
        if (l = l.next, l === null) {
          if (l = i.shared.pending, l === null) break;
          d3 = l, l = d3.next, d3.next = null, i.lastBaseUpdate = d3, i.shared.pending = null;
        }
      } while (true);
      if (c === null && (a2 = f2), i.baseState = a2, i.firstBaseUpdate = u2, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          o |= i.lane, i = i.next;
        while (i !== t);
      } else s === null && (i.shared.lanes = 0);
      fn |= o, e.lanes = o, e.memoizedState = f2;
    }
  }
  function Tc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function") throw Error(E(191, i));
        i.call(r);
      }
    }
  }
  var hi = {};
  var nt = Wt(hi);
  var Qr = Wt(hi);
  var Xr = Wt(hi);
  function nn(e) {
    if (e === hi) throw Error(E(174));
    return e;
  }
  function Oa(e, t) {
    switch (F(Xr, t), F(Qr, e), F(nt, hi), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ol(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ol(t, e);
    }
    B(nt), F(nt, t);
  }
  function Qn() {
    B(nt), B(Qr), B(Xr);
  }
  function Uh(e) {
    nn(Xr.current);
    var t = nn(nt.current), n = ol(t, e.type);
    t !== n && (F(Qr, e), F(nt, n));
  }
  function Fa(e) {
    Qr.current === e && (B(nt), B(Qr));
  }
  var W = Wt(0);
  function ws(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var To = [];
  function za() {
    for (var e = 0; e < To.length; e++) To[e]._workInProgressVersionPrimary = null;
    To.length = 0;
  }
  var Xi = yt.ReactCurrentDispatcher;
  var jo = yt.ReactCurrentBatchConfig;
  var cn = 0;
  var H = null;
  var te = null;
  var se = null;
  var Ss = false;
  var Rr = false;
  var Yr = 0;
  var wy = 0;
  function de() {
    throw Error(E(321));
  }
  function Ba(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ze(e[n], t[n])) return false;
    return true;
  }
  function Ua(e, t, n, r, i, s) {
    if (cn = s, H = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xi.current = e === null || e.memoizedState === null ? ky : Ey, e = n(r, i), Rr) {
      s = 0;
      do {
        if (Rr = false, Yr = 0, 25 <= s) throw Error(E(301));
        s += 1, se = te = null, t.updateQueue = null, Xi.current = Ty, e = n(r, i);
      } while (Rr);
    }
    if (Xi.current = Ps, t = te !== null && te.next !== null, cn = 0, se = te = H = null, Ss = false, t) throw Error(E(300));
    return e;
  }
  function $a() {
    var e = Yr !== 0;
    return Yr = 0, e;
  }
  function Je() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return se === null ? H.memoizedState = se = e : se = se.next = e, se;
  }
  function We() {
    if (te === null) {
      var e = H.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = te.next;
    var t = se === null ? H.memoizedState : se.next;
    if (t !== null) se = t, te = e;
    else {
      if (e === null) throw Error(E(310));
      te = e, e = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, se === null ? H.memoizedState = se = e : se = se.next = e;
    }
    return se;
  }
  function Zr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function No(e) {
    var t = We(), n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = te, i = r.baseQueue, s = n.pending;
    if (s !== null) {
      if (i !== null) {
        var o = i.next;
        i.next = s.next, s.next = o;
      }
      r.baseQueue = i = s, n.pending = null;
    }
    if (i !== null) {
      s = i.next, r = r.baseState;
      var l = o = null, a2 = null, u2 = s;
      do {
        var c = u2.lane;
        if ((cn & c) === c) a2 !== null && (a2 = a2.next = { lane: 0, action: u2.action, hasEagerState: u2.hasEagerState, eagerState: u2.eagerState, next: null }), r = u2.hasEagerState ? u2.eagerState : e(r, u2.action);
        else {
          var f2 = { lane: c, action: u2.action, hasEagerState: u2.hasEagerState, eagerState: u2.eagerState, next: null };
          a2 === null ? (l = a2 = f2, o = r) : a2 = a2.next = f2, H.lanes |= c, fn |= c;
        }
        u2 = u2.next;
      } while (u2 !== null && u2 !== s);
      a2 === null ? o = r : a2.next = l, Ze(r, t.memoizedState) || (ke = true), t.memoizedState = r, t.baseState = o, t.baseQueue = a2, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        s = i.lane, H.lanes |= s, fn |= s, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ro(e) {
    var t = We(), n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, s = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var o = i = i.next;
      do
        s = e(s, o.action), o = o.next;
      while (o !== i);
      Ze(s, t.memoizedState) || (ke = true), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, r];
  }
  function $h() {
  }
  function Wh(e, t) {
    var n = H, r = We(), i = t(), s = !Ze(r.memoizedState, i);
    if (s && (r.memoizedState = i, ke = true), r = r.queue, Wa(Kh.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || se !== null && se.memoizedState.tag & 1) {
      if (n.flags |= 2048, qr(9, Hh.bind(null, n, r, i, t), void 0, null), oe === null) throw Error(E(349));
      cn & 30 || bh(n, t, i);
    }
    return i;
  }
  function bh(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = H.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, H.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Hh(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Gh(t) && Qh(e);
  }
  function Kh(e, t, n) {
    return n(function() {
      Gh(t) && Qh(e);
    });
  }
  function Gh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ze(e, n);
    } catch {
      return true;
    }
  }
  function Qh(e) {
    var t = mt(e, 1);
    t !== null && Ye(t, e, 1, -1);
  }
  function jc(e) {
    var t = Je();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Cy.bind(null, H, e), [t.memoizedState, e];
  }
  function qr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = H.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, H.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Xh() {
    return We().memoizedState;
  }
  function Yi(e, t, n, r) {
    var i = Je();
    H.flags |= e, i.memoizedState = qr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ws(e, t, n, r) {
    var i = We();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (te !== null) {
      var o = te.memoizedState;
      if (s = o.destroy, r !== null && Ba(r, o.deps)) {
        i.memoizedState = qr(t, n, s, r);
        return;
      }
    }
    H.flags |= e, i.memoizedState = qr(1 | t, n, s, r);
  }
  function Nc(e, t) {
    return Yi(8390656, 8, e, t);
  }
  function Wa(e, t) {
    return Ws(2048, 8, e, t);
  }
  function Yh(e, t) {
    return Ws(4, 2, e, t);
  }
  function Zh(e, t) {
    return Ws(4, 4, e, t);
  }
  function qh(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Jh(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ws(4, 4, qh.bind(null, t, e), n);
  }
  function ba() {
  }
  function ep(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ba(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function tp(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ba(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function np(e, t, n) {
    return cn & 21 ? (Ze(n, t) || (n = lh(), H.lanes |= n, fn |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, ke = true), e.memoizedState = n);
  }
  function Sy(e, t) {
    var n = O;
    O = n !== 0 && 4 > n ? n : 4, e(true);
    var r = jo.transition;
    jo.transition = {};
    try {
      e(false), t();
    } finally {
      O = n, jo.transition = r;
    }
  }
  function rp() {
    return We().memoizedState;
  }
  function Py(e, t, n) {
    var r = _t(e);
    if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, ip(e)) sp(t, n);
    else if (n = zh(e, t, n, r), n !== null) {
      var i = xe();
      Ye(n, e, r, i), op(n, t, r);
    }
  }
  function Cy(e, t, n) {
    var r = _t(e), i = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
    if (ip(e)) sp(t, i);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
        var o = t.lastRenderedState, l = s(o, n);
        if (i.hasEagerState = true, i.eagerState = l, Ze(l, o)) {
          var a2 = t.interleaved;
          a2 === null ? (i.next = i, _a(t)) : (i.next = a2.next, a2.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
      n = zh(e, t, i, r), n !== null && (i = xe(), Ye(n, e, r, i), op(n, t, r));
    }
  }
  function ip(e) {
    var t = e.alternate;
    return e === H || t !== null && t === H;
  }
  function sp(e, t) {
    Rr = Ss = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function op(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Sa(e, n);
    }
  }
  var Ps = { readContext: $e, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: false };
  var ky = { readContext: $e, useCallback: function(e, t) {
    return Je().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: $e, useEffect: Nc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Yi(4194308, 4, qh.bind(null, t, e), n);
  }, useLayoutEffect: function(e, t) {
    return Yi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Yi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Je();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Je();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Py.bind(null, H, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Je();
    return e = { current: e }, t.memoizedState = e;
  }, useState: jc, useDebugValue: ba, useDeferredValue: function(e) {
    return Je().memoizedState = e;
  }, useTransition: function() {
    var e = jc(false), t = e[0];
    return e = Sy.bind(null, e[1]), Je().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = H, i = Je();
    if ($) {
      if (n === void 0) throw Error(E(407));
      n = n();
    } else {
      if (n = t(), oe === null) throw Error(E(349));
      cn & 30 || bh(r, t, n);
    }
    i.memoizedState = n;
    var s = { value: n, getSnapshot: t };
    return i.queue = s, Nc(Kh.bind(null, r, s, e), [e]), r.flags |= 2048, qr(9, Hh.bind(null, r, s, n, t), void 0, null), n;
  }, useId: function() {
    var e = Je(), t = oe.identifierPrefix;
    if ($) {
      var n = ut, r = at;
      n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = wy++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: false };
  var Ey = { readContext: $e, useCallback: ep, useContext: $e, useEffect: Wa, useImperativeHandle: Jh, useInsertionEffect: Yh, useLayoutEffect: Zh, useMemo: tp, useReducer: No, useRef: Xh, useState: function() {
    return No(Zr);
  }, useDebugValue: ba, useDeferredValue: function(e) {
    var t = We();
    return np(t, te.memoizedState, e);
  }, useTransition: function() {
    var e = No(Zr)[0], t = We().memoizedState;
    return [e, t];
  }, useMutableSource: $h, useSyncExternalStore: Wh, useId: rp, unstable_isNewReconciler: false };
  var Ty = { readContext: $e, useCallback: ep, useContext: $e, useEffect: Wa, useImperativeHandle: Jh, useInsertionEffect: Yh, useLayoutEffect: Zh, useMemo: tp, useReducer: Ro, useRef: Xh, useState: function() {
    return Ro(Zr);
  }, useDebugValue: ba, useDeferredValue: function(e) {
    var t = We();
    return te === null ? t.memoizedState = e : np(t, te.memoizedState, e);
  }, useTransition: function() {
    var e = Ro(Zr)[0], t = We().memoizedState;
    return [e, t];
  }, useMutableSource: $h, useSyncExternalStore: Wh, useId: rp, unstable_isNewReconciler: false };
  function Ke(e, t) {
    if (e && e.defaultProps) {
      t = K({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function jl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : K({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var bs = { isMounted: function(e) {
    return (e = e._reactInternals) ? pn(e) === e : false;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = xe(), i = _t(e), s = ct(r, i);
    s.payload = t, n != null && (s.callback = n), t = Dt(e, s, i), t !== null && (Ye(t, e, i, r), Qi(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = xe(), i = _t(e), s = ct(r, i);
    s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Dt(e, s, i), t !== null && (Ye(t, e, i, r), Qi(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = xe(), r = _t(e), i = ct(n, r);
    i.tag = 2, t != null && (i.callback = t), t = Dt(e, i, r), t !== null && (Ye(t, e, r, n), Qi(t, e, r));
  } };
  function Rc(e, t, n, r, i, s, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !br(n, r) || !br(i, s) : true;
  }
  function lp(e, t, n) {
    var r = false, i = zt, s = t.contextType;
    return typeof s == "object" && s !== null ? s = $e(s) : (i = Te(t) ? an : ve.current, r = t.contextTypes, s = (r = r != null) ? Hn(e, i) : zt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
  }
  function Mc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bs.enqueueReplaceState(t, t.state, null);
  }
  function Nl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Ia(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = $e(s) : (s = Te(t) ? an : ve.current, i.context = Hn(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (jl(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && bs.enqueueReplaceState(i, i.state, null), xs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Xn(e, t) {
    try {
      var n = "", r = t;
      do
        n += ev(r), r = r.return;
      while (r);
      var i = n;
    } catch (s) {
      i = `
Error generating stack: ` + s.message + `
` + s.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Mo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Rl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var jy = typeof WeakMap == "function" ? WeakMap : Map;
  function ap(e, t, n) {
    n = ct(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      ks || (ks = true, zl = r), Rl(e, t);
    }, n;
  }
  function up(e, t, n) {
    n = ct(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        Rl(e, t);
      };
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
      Rl(e, t), typeof r != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([this]) : Vt.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Ac(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new jy();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Uy.bind(null, e, t, n), t.then(e, e));
  }
  function Lc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Dc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ct(-1, 1), t.tag = 2, Dt(n, t, 1))), n.lanes |= 1), e);
  }
  var Ny = yt.ReactCurrentOwner;
  var ke = false;
  function ye(e, t, n, r) {
    t.child = e === null ? Fh(t, null, n, r) : Gn(t, e.child, n, r);
  }
  function Vc(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return $n(t, i), r = Ua(e, t, n, r, s, i), n = $a(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, gt(e, t, i)) : ($ && n && Ra(t), t.flags |= 1, ye(e, t, r, i), t.child);
  }
  function _c(e, t, n, r, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !qa(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, cp(e, t, s, r, i)) : (e = es(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, !(e.lanes & i)) {
      var o = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : br, n(o, r) && e.ref === t.ref) return gt(e, t, i);
    }
    return t.flags |= 1, e = It(s, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function cp(e, t, n, r, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (br(s, r) && e.ref === t.ref) if (ke = false, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (ke = true);
      else return t.lanes = e.lanes, gt(e, t, i);
    }
    return Ml(e, t, n, r, i);
  }
  function fp(e, t, n) {
    var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, F(Ln, Re), Re |= n;
    else {
      if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, F(Ln, Re), Re |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, F(Ln, Re), Re |= r;
    }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, F(Ln, Re), Re |= r;
    return ye(e, t, i, n), t.child;
  }
  function dp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ml(e, t, n, r, i) {
    var s = Te(n) ? an : ve.current;
    return s = Hn(t, s), $n(t, i), n = Ua(e, t, n, r, s, i), r = $a(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, gt(e, t, i)) : ($ && r && Ra(t), t.flags |= 1, ye(e, t, n, i), t.child);
  }
  function Ic(e, t, n, r, i) {
    if (Te(n)) {
      var s = true;
      ps(t);
    } else s = false;
    if ($n(t, i), t.stateNode === null) Zi(e, t), lp(t, n, r), Nl(t, n, r, i), r = true;
    else if (e === null) {
      var o = t.stateNode, l = t.memoizedProps;
      o.props = l;
      var a2 = o.context, u2 = n.contextType;
      typeof u2 == "object" && u2 !== null ? u2 = $e(u2) : (u2 = Te(n) ? an : ve.current, u2 = Hn(t, u2));
      var c = n.getDerivedStateFromProps, f2 = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      f2 || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a2 !== u2) && Mc(t, o, r, u2), Ct = false;
      var d3 = t.memoizedState;
      o.state = d3, xs(t, r, o, i), a2 = t.memoizedState, l !== r || d3 !== a2 || Ee.current || Ct ? (typeof c == "function" && (jl(t, n, c, r), a2 = t.memoizedState), (l = Ct || Rc(t, n, l, r, d3, a2, u2)) ? (f2 || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a2), o.props = r, o.state = a2, o.context = u2, r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = false);
    } else {
      o = t.stateNode, Bh(e, t), l = t.memoizedProps, u2 = t.type === t.elementType ? l : Ke(t.type, l), o.props = u2, f2 = t.pendingProps, d3 = o.context, a2 = n.contextType, typeof a2 == "object" && a2 !== null ? a2 = $e(a2) : (a2 = Te(n) ? an : ve.current, a2 = Hn(t, a2));
      var g4 = n.getDerivedStateFromProps;
      (c = typeof g4 == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f2 || d3 !== a2) && Mc(t, o, r, a2), Ct = false, d3 = t.memoizedState, o.state = d3, xs(t, r, o, i);
      var y2 = t.memoizedState;
      l !== f2 || d3 !== y2 || Ee.current || Ct ? (typeof g4 == "function" && (jl(t, n, g4, r), y2 = t.memoizedState), (u2 = Ct || Rc(t, n, u2, r, d3, y2, a2) || false) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y2, a2), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y2, a2)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d3 === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d3 === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y2), o.props = r, o.state = y2, o.context = a2, r = u2) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d3 === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d3 === e.memoizedState || (t.flags |= 1024), r = false);
    }
    return Al(e, t, n, r, s, i);
  }
  function Al(e, t, n, r, i, s) {
    dp(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && Sc(t, n, false), gt(e, t, s);
    r = t.stateNode, Ny.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Gn(t, e.child, null, s), t.child = Gn(t, null, l, s)) : ye(e, t, l, s), t.memoizedState = r.state, i && Sc(t, n, true), t.child;
  }
  function hp(e) {
    var t = e.stateNode;
    t.pendingContext ? wc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wc(e, t.context, false), Oa(e, t.containerInfo);
  }
  function Oc(e, t, n, r, i) {
    return Kn(), Aa(i), t.flags |= 256, ye(e, t, n, r), t.child;
  }
  var Ll = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Dl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function pp(e, t, n) {
    var r = t.pendingProps, i = W.current, s = false, o = (t.flags & 128) !== 0, l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? false : (i & 2) !== 0), l ? (s = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), F(W, i & 1), e === null) return El(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = { mode: "hidden", children: o }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Gs(o, r, 0, null), e = on(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Dl(n), t.memoizedState = Ll, e) : Ha(t, o));
    if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return Ry(e, t, o, r, l, i, n);
    if (s) {
      s = r.fallback, o = t.mode, i = e.child, l = i.sibling;
      var a2 = { mode: "hidden", children: r.children };
      return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a2, t.deletions = null) : (r = It(i, a2), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? s = It(l, s) : (s = on(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? Dl(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = Ll, r;
    }
    return s = e.child, e = s.sibling, r = It(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ha(e, t) {
    return t = Gs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function _i(e, t, n, r) {
    return r !== null && Aa(r), Gn(t, e.child, null, n), e = Ha(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ry(e, t, n, r, i, s, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Mo(Error(E(422))), _i(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Gs({ mode: "visible", children: r.children }, i, 0, null), s = on(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Gn(t, e.child, null, o), t.child.memoizedState = Dl(o), t.memoizedState = Ll, s);
    if (!(t.mode & 1)) return _i(e, t, o, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
      return r = l, s = Error(E(419)), r = Mo(s, r, void 0), _i(e, t, o, r);
    }
    if (l = (o & e.childLanes) !== 0, ke || l) {
      if (r = oe, r !== null) {
        switch (o & -o) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, mt(e, i), Ye(r, e, i, -1));
      }
      return Za(), r = Mo(Error(E(421))), _i(e, t, o, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $y.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Me = Lt(i.nextSibling), Ae = t, $ = true, Qe = null, e !== null && (Fe[ze++] = at, Fe[ze++] = ut, Fe[ze++] = un, at = e.id, ut = e.overflow, un = t), t = Ha(t, r.children), t.flags |= 4096, t);
  }
  function Fc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Tl(e.return, t, n);
  }
  function Ao(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
  }
  function mp(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, s = r.tail;
    if (ye(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fc(e, n, t);
        else if (e.tag === 19) Fc(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (F(W, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && ws(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ao(t, false, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && ws(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Ao(t, true, n, null, s);
        break;
      case "together":
        Ao(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Zi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function gt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), fn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
      for (e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = It(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function My(e, t, n) {
    switch (t.tag) {
      case 3:
        hp(t), Kn();
        break;
      case 5:
        Uh(t);
        break;
      case 1:
        Te(t.type) && ps(t);
        break;
      case 4:
        Oa(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        F(vs, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (F(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? pp(e, t, n) : (F(W, W.current & 1), e = gt(e, t, n), e !== null ? e.sibling : null);
        F(W, W.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return mp(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), F(W, W.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, fp(e, t, n);
    }
    return gt(e, t, n);
  }
  var gp;
  var Vl;
  var vp;
  var yp;
  gp = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  };
  Vl = function() {
  };
  vp = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, nn(nt.current);
      var s = null;
      switch (n) {
        case "input":
          i = nl(e, i), r = nl(e, r), s = [];
          break;
        case "select":
          i = K({}, i, { value: void 0 }), r = K({}, r, { value: void 0 }), s = [];
          break;
        case "textarea":
          i = sl(e, i), r = sl(e, r), s = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ds);
      }
      ll(n, r);
      var o;
      n = null;
      for (u2 in i) if (!r.hasOwnProperty(u2) && i.hasOwnProperty(u2) && i[u2] != null) if (u2 === "style") {
        var l = i[u2];
        for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else u2 !== "dangerouslySetInnerHTML" && u2 !== "children" && u2 !== "suppressContentEditableWarning" && u2 !== "suppressHydrationWarning" && u2 !== "autoFocus" && (Or.hasOwnProperty(u2) ? s || (s = []) : (s = s || []).push(u2, null));
      for (u2 in r) {
        var a2 = r[u2];
        if (l = i != null ? i[u2] : void 0, r.hasOwnProperty(u2) && a2 !== l && (a2 != null || l != null)) if (u2 === "style") if (l) {
          for (o in l) !l.hasOwnProperty(o) || a2 && a2.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in a2) a2.hasOwnProperty(o) && l[o] !== a2[o] && (n || (n = {}), n[o] = a2[o]);
        } else n || (s || (s = []), s.push(u2, n)), n = a2;
        else u2 === "dangerouslySetInnerHTML" ? (a2 = a2 ? a2.__html : void 0, l = l ? l.__html : void 0, a2 != null && l !== a2 && (s = s || []).push(u2, a2)) : u2 === "children" ? typeof a2 != "string" && typeof a2 != "number" || (s = s || []).push(u2, "" + a2) : u2 !== "suppressContentEditableWarning" && u2 !== "suppressHydrationWarning" && (Or.hasOwnProperty(u2) ? (a2 != null && u2 === "onScroll" && z("scroll", e), s || l === a2 || (s = [])) : (s = s || []).push(u2, a2));
      }
      n && (s = s || []).push("style", n);
      var u2 = s;
      (t.updateQueue = u2) && (t.flags |= 4);
    }
  };
  yp = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function hr(e, t) {
    if (!$) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function he(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Ay(e, t, n) {
    var r = t.pendingProps;
    switch (Ma(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return he(t), null;
      case 1:
        return Te(t.type) && hs(), he(t), null;
      case 3:
        return r = t.stateNode, Qn(), B(Ee), B(ve), za(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Di(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qe !== null && ($l(Qe), Qe = null))), Vl(e, t), he(t), null;
      case 5:
        Fa(t);
        var i = nn(Xr.current);
        if (n = t.type, e !== null && t.stateNode != null) vp(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(E(166));
            return he(t), null;
          }
          if (e = nn(nt.current), Di(t)) {
            r = t.stateNode, n = t.type;
            var s = t.memoizedProps;
            switch (r[et] = t, r[Gr] = s, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                z("cancel", r), z("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                z("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < wr.length; i++) z(wr[i], r);
                break;
              case "source":
                z("error", r);
                break;
              case "img":
              case "image":
              case "link":
                z("error", r), z("load", r);
                break;
              case "details":
                z("toggle", r);
                break;
              case "input":
                Gu(r, s), z("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!s.multiple }, z("invalid", r);
                break;
              case "textarea":
                Xu(r, s), z("invalid", r);
            }
            ll(n, s), i = null;
            for (var o in s) if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== true && Li(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== true && Li(r.textContent, l, e), i = ["children", "" + l]) : Or.hasOwnProperty(o) && l != null && o === "onScroll" && z("scroll", r);
            }
            switch (n) {
              case "input":
                ki(r), Qu(r, s, true);
                break;
              case "textarea":
                ki(r), Yu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = ds);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Kd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = true : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[et] = t, e[Gr] = r, gp(e, t, false, false), t.stateNode = e;
            e: {
              switch (o = al(n, r), n) {
                case "dialog":
                  z("cancel", e), z("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  z("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < wr.length; i++) z(wr[i], e);
                  i = r;
                  break;
                case "source":
                  z("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  z("error", e), z("load", e), i = r;
                  break;
                case "details":
                  z("toggle", e), i = r;
                  break;
                case "input":
                  Gu(e, r), i = nl(e, r), z("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = K({}, r, { value: void 0 }), z("invalid", e);
                  break;
                case "textarea":
                  Xu(e, r), i = sl(e, r), z("invalid", e);
                  break;
                default:
                  i = r;
              }
              ll(n, i), l = i;
              for (s in l) if (l.hasOwnProperty(s)) {
                var a2 = l[s];
                s === "style" ? Xd(e, a2) : s === "dangerouslySetInnerHTML" ? (a2 = a2 ? a2.__html : void 0, a2 != null && Gd(e, a2)) : s === "children" ? typeof a2 == "string" ? (n !== "textarea" || a2 !== "") && Fr(e, a2) : typeof a2 == "number" && Fr(e, "" + a2) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Or.hasOwnProperty(s) ? a2 != null && s === "onScroll" && z("scroll", e) : a2 != null && ma(e, s, a2, o));
              }
              switch (n) {
                case "input":
                  ki(e), Qu(e, r, false);
                  break;
                case "textarea":
                  ki(e), Yu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Ft(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, s = r.value, s != null ? Fn(e, !!r.multiple, s, false) : r.defaultValue != null && Fn(e, !!r.multiple, r.defaultValue, true);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = ds);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = true;
                  break e;
                default:
                  r = false;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return he(t), null;
      case 6:
        if (e && t.stateNode != null) yp(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
          if (n = nn(Xr.current), nn(nt.current), Di(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[et] = t, (s = r.nodeValue !== n) && (e = Ae, e !== null)) switch (e.tag) {
              case 3:
                Li(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== true && Li(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            s && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[et] = t, t.stateNode = r;
        }
        return he(t), null;
      case 13:
        if (B(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if ($ && Me !== null && t.mode & 1 && !(t.flags & 128)) Ih(), Kn(), t.flags |= 98560, s = false;
          else if (s = Di(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(E(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(E(317));
              s[et] = t;
            } else Kn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            he(t), s = false;
          } else Qe !== null && ($l(Qe), Qe = null), s = true;
          if (!s) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? ne === 0 && (ne = 3) : Za())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
      case 4:
        return Qn(), Vl(e, t), e === null && Hr(t.stateNode.containerInfo), he(t), null;
      case 10:
        return Va(t.type._context), he(t), null;
      case 17:
        return Te(t.type) && hs(), he(t), null;
      case 19:
        if (B(W), s = t.memoizedState, s === null) return he(t), null;
        if (r = (t.flags & 128) !== 0, o = s.rendering, o === null) if (r) hr(s, false);
        else {
          if (ne !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (o = ws(e), o !== null) {
              for (t.flags |= 128, hr(s, false), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return F(W, W.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          s.tail !== null && Z() > Yn && (t.flags |= 128, r = true, hr(s, false), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = ws(o), e !== null) {
            if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), hr(s, true), s.tail === null && s.tailMode === "hidden" && !o.alternate && !$) return he(t), null;
          } else 2 * Z() - s.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128, r = true, hr(s, false), t.lanes = 4194304);
          s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o);
        }
        return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Z(), t.sibling = null, n = W.current, F(W, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
      case 22:
      case 23:
        return Ya(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Re & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(E(156, t.tag));
  }
  function Ly(e, t) {
    switch (Ma(t), t.tag) {
      case 1:
        return Te(t.type) && hs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Qn(), B(Ee), B(ve), za(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Fa(t), null;
      case 13:
        if (B(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(E(340));
          Kn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return B(W), null;
      case 4:
        return Qn(), null;
      case 10:
        return Va(t.type._context), null;
      case 22:
      case 23:
        return Ya(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ii = false;
  var me = false;
  var Dy = typeof WeakSet == "function" ? WeakSet : Set;
  var R = null;
  function An(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Q(e, t, r);
    }
    else n.current = null;
  }
  function _l(e, t, n) {
    try {
      n();
    } catch (r) {
      Q(e, t, r);
    }
  }
  var zc = false;
  function Vy(e, t) {
    if (yl = us, e = Ch(), Na(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, l = -1, a2 = -1, u2 = 0, c = 0, f2 = e, d3 = null;
          t: for (; ; ) {
            for (var g4; f2 !== n || i !== 0 && f2.nodeType !== 3 || (l = o + i), f2 !== s || r !== 0 && f2.nodeType !== 3 || (a2 = o + r), f2.nodeType === 3 && (o += f2.nodeValue.length), (g4 = f2.firstChild) !== null; ) d3 = f2, f2 = g4;
            for (; ; ) {
              if (f2 === e) break t;
              if (d3 === n && ++u2 === i && (l = o), d3 === s && ++c === r && (a2 = o), (g4 = f2.nextSibling) !== null) break;
              f2 = d3, d3 = f2.parentNode;
            }
            f2 = g4;
          }
          n = l === -1 || a2 === -1 ? null : { start: l, end: a2 };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (xl = { focusedElem: e, selectionRange: n }, us = false, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
    else for (; R !== null; ) {
      t = R;
      try {
        var y2 = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (y2 !== null) {
              var x3 = y2.memoizedProps, P3 = y2.memoizedState, p2 = t.stateNode, h = p2.getSnapshotBeforeUpdate(t.elementType === t.type ? x3 : Ke(t.type, x3), P3);
              p2.__reactInternalSnapshotBeforeUpdate = h;
            }
            break;
          case 3:
            var m = t.stateNode.containerInfo;
            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(E(163));
        }
      } catch (S3) {
        Q(t, t.return, S3);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, R = e;
        break;
      }
      R = t.return;
    }
    return y2 = zc, zc = false, y2;
  }
  function Mr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var s = i.destroy;
          i.destroy = void 0, s !== void 0 && _l(t, n, s);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Hs(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Il(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function xp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, xp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[et], delete t[Gr], delete t[Pl], delete t[gy], delete t[vy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function wp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Bc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || wp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ol(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ds));
    else if (r !== 4 && (e = e.child, e !== null)) for (Ol(e, t, n), e = e.sibling; e !== null; ) Ol(e, t, n), e = e.sibling;
  }
  function Fl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Fl(e, t, n), e = e.sibling; e !== null; ) Fl(e, t, n), e = e.sibling;
  }
  var le = null;
  var Ge = false;
  function wt(e, t, n) {
    for (n = n.child; n !== null; ) Sp(e, t, n), n = n.sibling;
  }
  function Sp(e, t, n) {
    if (tt && typeof tt.onCommitFiberUnmount == "function") try {
      tt.onCommitFiberUnmount(Os, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        me || An(n, t);
      case 6:
        var r = le, i = Ge;
        le = null, wt(e, t, n), le = r, Ge = i, le !== null && (Ge ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
        break;
      case 18:
        le !== null && (Ge ? (e = le, n = n.stateNode, e.nodeType === 8 ? ko(e.parentNode, n) : e.nodeType === 1 && ko(e, n), $r(e)) : ko(le, n.stateNode));
        break;
      case 4:
        r = le, i = Ge, le = n.stateNode.containerInfo, Ge = true, wt(e, t, n), le = r, Ge = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var s = i, o = s.destroy;
            s = s.tag, o !== void 0 && (s & 2 || s & 4) && _l(n, t, o), i = i.next;
          } while (i !== r);
        }
        wt(e, t, n);
        break;
      case 1:
        if (!me && (An(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (l) {
          Q(n, t, l);
        }
        wt(e, t, n);
        break;
      case 21:
        wt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (me = (r = me) || n.memoizedState !== null, wt(e, t, n), me = r) : wt(e, t, n);
        break;
      default:
        wt(e, t, n);
    }
  }
  function Uc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Dy()), t.forEach(function(r) {
        var i = Wy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function be(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e, o = t, l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              le = l.stateNode, Ge = false;
              break e;
            case 3:
              le = l.stateNode.containerInfo, Ge = true;
              break e;
            case 4:
              le = l.stateNode.containerInfo, Ge = true;
              break e;
          }
          l = l.return;
        }
        if (le === null) throw Error(E(160));
        Sp(s, o, i), le = null, Ge = false;
        var a2 = i.alternate;
        a2 !== null && (a2.return = null), i.return = null;
      } catch (u2) {
        Q(i, t, u2);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pp(t, e), t = t.sibling;
  }
  function Pp(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (be(t, e), qe(e), r & 4) {
          try {
            Mr(3, e, e.return), Hs(3, e);
          } catch (x3) {
            Q(e, e.return, x3);
          }
          try {
            Mr(5, e, e.return);
          } catch (x3) {
            Q(e, e.return, x3);
          }
        }
        break;
      case 1:
        be(t, e), qe(e), r & 512 && n !== null && An(n, n.return);
        break;
      case 5:
        if (be(t, e), qe(e), r & 512 && n !== null && An(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Fr(i, "");
          } catch (x3) {
            Q(e, e.return, x3);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var s = e.memoizedProps, o = n !== null ? n.memoizedProps : s, l = e.type, a2 = e.updateQueue;
          if (e.updateQueue = null, a2 !== null) try {
            l === "input" && s.type === "radio" && s.name != null && bd(i, s), al(l, o);
            var u2 = al(l, s);
            for (o = 0; o < a2.length; o += 2) {
              var c = a2[o], f2 = a2[o + 1];
              c === "style" ? Xd(i, f2) : c === "dangerouslySetInnerHTML" ? Gd(i, f2) : c === "children" ? Fr(i, f2) : ma(i, c, f2, u2);
            }
            switch (l) {
              case "input":
                rl(i, s);
                break;
              case "textarea":
                Hd(i, s);
                break;
              case "select":
                var d3 = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g4 = s.value;
                g4 != null ? Fn(i, !!s.multiple, g4, false) : d3 !== !!s.multiple && (s.defaultValue != null ? Fn(i, !!s.multiple, s.defaultValue, true) : Fn(i, !!s.multiple, s.multiple ? [] : "", false));
            }
            i[Gr] = s;
          } catch (x3) {
            Q(e, e.return, x3);
          }
        }
        break;
      case 6:
        if (be(t, e), qe(e), r & 4) {
          if (e.stateNode === null) throw Error(E(162));
          i = e.stateNode, s = e.memoizedProps;
          try {
            i.nodeValue = s;
          } catch (x3) {
            Q(e, e.return, x3);
          }
        }
        break;
      case 3:
        if (be(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          $r(t.containerInfo);
        } catch (x3) {
          Q(e, e.return, x3);
        }
        break;
      case 4:
        be(t, e), qe(e);
        break;
      case 13:
        be(t, e), qe(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Qa = Z())), r & 4 && Uc(e);
        break;
      case 22:
        if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (me = (u2 = me) || c, be(t, e), me = u2) : be(t, e), qe(e), r & 8192) {
          if (u2 = e.memoizedState !== null, (e.stateNode.isHidden = u2) && !c && e.mode & 1) for (R = e, c = e.child; c !== null; ) {
            for (f2 = R = c; R !== null; ) {
              switch (d3 = R, g4 = d3.child, d3.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mr(4, d3, d3.return);
                  break;
                case 1:
                  An(d3, d3.return);
                  var y2 = d3.stateNode;
                  if (typeof y2.componentWillUnmount == "function") {
                    r = d3, n = d3.return;
                    try {
                      t = r, y2.props = t.memoizedProps, y2.state = t.memoizedState, y2.componentWillUnmount();
                    } catch (x3) {
                      Q(r, n, x3);
                    }
                  }
                  break;
                case 5:
                  An(d3, d3.return);
                  break;
                case 22:
                  if (d3.memoizedState !== null) {
                    Wc(f2);
                    continue;
                  }
              }
              g4 !== null ? (g4.return = d3, R = g4) : Wc(f2);
            }
            c = c.sibling;
          }
          e: for (c = null, f2 = e; ; ) {
            if (f2.tag === 5) {
              if (c === null) {
                c = f2;
                try {
                  i = f2.stateNode, u2 ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f2.stateNode, a2 = f2.memoizedProps.style, o = a2 != null && a2.hasOwnProperty("display") ? a2.display : null, l.style.display = Qd("display", o));
                } catch (x3) {
                  Q(e, e.return, x3);
                }
              }
            } else if (f2.tag === 6) {
              if (c === null) try {
                f2.stateNode.nodeValue = u2 ? "" : f2.memoizedProps;
              } catch (x3) {
                Q(e, e.return, x3);
              }
            } else if ((f2.tag !== 22 && f2.tag !== 23 || f2.memoizedState === null || f2 === e) && f2.child !== null) {
              f2.child.return = f2, f2 = f2.child;
              continue;
            }
            if (f2 === e) break e;
            for (; f2.sibling === null; ) {
              if (f2.return === null || f2.return === e) break e;
              c === f2 && (c = null), f2 = f2.return;
            }
            c === f2 && (c = null), f2.sibling.return = f2.return, f2 = f2.sibling;
          }
        }
        break;
      case 19:
        be(t, e), qe(e), r & 4 && Uc(e);
        break;
      case 21:
        break;
      default:
        be(t, e), qe(e);
    }
  }
  function qe(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (wp(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(E(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Fr(i, ""), r.flags &= -33);
            var s = Bc(e);
            Fl(e, s, i);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, l = Bc(e);
            Ol(e, l, o);
            break;
          default:
            throw Error(E(161));
        }
      } catch (a2) {
        Q(e, e.return, a2);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function _y(e, t, n) {
    R = e, Cp(e);
  }
  function Cp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
      var i = R, s = i.child;
      if (i.tag === 22 && r) {
        var o = i.memoizedState !== null || Ii;
        if (!o) {
          var l = i.alternate, a2 = l !== null && l.memoizedState !== null || me;
          l = Ii;
          var u2 = me;
          if (Ii = o, (me = a2) && !u2) for (R = i; R !== null; ) o = R, a2 = o.child, o.tag === 22 && o.memoizedState !== null ? bc(i) : a2 !== null ? (a2.return = o, R = a2) : bc(i);
          for (; s !== null; ) R = s, Cp(s), s = s.sibling;
          R = i, Ii = l, me = u2;
        }
        $c(e);
      } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, R = s) : $c(e);
    }
  }
  function $c(e) {
    for (; R !== null; ) {
      var t = R;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Hs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : Ke(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var s = t.updateQueue;
              s !== null && Tc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Tc(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a2 = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a2.autoFocus && n.focus();
                    break;
                  case "img":
                    a2.src && (n.src = a2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u2 = t.alternate;
                if (u2 !== null) {
                  var c = u2.memoizedState;
                  if (c !== null) {
                    var f2 = c.dehydrated;
                    f2 !== null && $r(f2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
          me || t.flags & 512 && Il(t);
        } catch (d3) {
          Q(t, t.return, d3);
        }
      }
      if (t === e) {
        R = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, R = n;
        break;
      }
      R = t.return;
    }
  }
  function Wc(e) {
    for (; R !== null; ) {
      var t = R;
      if (t === e) {
        R = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, R = n;
        break;
      }
      R = t.return;
    }
  }
  function bc(e) {
    for (; R !== null; ) {
      var t = R;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Hs(4, t);
            } catch (a2) {
              Q(t, n, a2);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (a2) {
                Q(t, i, a2);
              }
            }
            var s = t.return;
            try {
              Il(t);
            } catch (a2) {
              Q(t, s, a2);
            }
            break;
          case 5:
            var o = t.return;
            try {
              Il(t);
            } catch (a2) {
              Q(t, o, a2);
            }
        }
      } catch (a2) {
        Q(t, t.return, a2);
      }
      if (t === e) {
        R = null;
        break;
      }
      var l = t.sibling;
      if (l !== null) {
        l.return = t.return, R = l;
        break;
      }
      R = t.return;
    }
  }
  var Iy = Math.ceil;
  var Cs = yt.ReactCurrentDispatcher;
  var Ka = yt.ReactCurrentOwner;
  var Ue = yt.ReactCurrentBatchConfig;
  var I = 0;
  var oe = null;
  var q = null;
  var ue = 0;
  var Re = 0;
  var Ln = Wt(0);
  var ne = 0;
  var Jr = null;
  var fn = 0;
  var Ks = 0;
  var Ga = 0;
  var Ar = null;
  var Ce = null;
  var Qa = 0;
  var Yn = 1 / 0;
  var st = null;
  var ks = false;
  var zl = null;
  var Vt = null;
  var Oi = false;
  var jt = null;
  var Es = 0;
  var Lr = 0;
  var Bl = null;
  var qi = -1;
  var Ji = 0;
  function xe() {
    return I & 6 ? Z() : qi !== -1 ? qi : qi = Z();
  }
  function _t(e) {
    return e.mode & 1 ? I & 2 && ue !== 0 ? ue & -ue : xy.transition !== null ? (Ji === 0 && (Ji = lh()), Ji) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ph(e.type)), e) : 1;
  }
  function Ye(e, t, n, r) {
    if (50 < Lr) throw Lr = 0, Bl = null, Error(E(185));
    ci(e, n, r), (!(I & 2) || e !== oe) && (e === oe && (!(I & 2) && (Ks |= n), ne === 4 && Et(e, ue)), je(e, r), n === 1 && I === 0 && !(t.mode & 1) && (Yn = Z() + 500, $s && bt()));
  }
  function je(e, t) {
    var n = e.callbackNode;
    xv(e, t);
    var r = as(e, e === oe ? ue : 0);
    if (r === 0) n !== null && Ju(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Ju(n), t === 1) e.tag === 0 ? yy(Hc.bind(null, e)) : Dh(Hc.bind(null, e)), py(function() {
        !(I & 6) && bt();
      }), n = null;
      else {
        switch (ah(r)) {
          case 1:
            n = wa;
            break;
          case 4:
            n = sh;
            break;
          case 16:
            n = ls;
            break;
          case 536870912:
            n = oh;
            break;
          default:
            n = ls;
        }
        n = Ap(n, kp.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function kp(e, t) {
    if (qi = -1, Ji = 0, I & 6) throw Error(E(327));
    var n = e.callbackNode;
    if (Wn() && e.callbackNode !== n) return null;
    var r = as(e, e === oe ? ue : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ts(e, r);
    else {
      t = r;
      var i = I;
      I |= 2;
      var s = Tp();
      (oe !== e || ue !== t) && (st = null, Yn = Z() + 500, sn(e, t));
      do
        try {
          zy();
          break;
        } catch (l) {
          Ep(e, l);
        }
      while (true);
      Da(), Cs.current = s, I = i, q !== null ? t = 0 : (oe = null, ue = 0, t = ne);
    }
    if (t !== 0) {
      if (t === 2 && (i = hl(e), i !== 0 && (r = i, t = Ul(e, i))), t === 1) throw n = Jr, sn(e, 0), Et(e, r), je(e, Z()), n;
      if (t === 6) Et(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !Oy(i) && (t = Ts(e, r), t === 2 && (s = hl(e), s !== 0 && (r = s, t = Ul(e, s))), t === 1)) throw n = Jr, sn(e, 0), Et(e, r), je(e, Z()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(E(345));
          case 2:
            Zt(e, Ce, st);
            break;
          case 3:
            if (Et(e, r), (r & 130023424) === r && (t = Qa + 500 - Z(), 10 < t)) {
              if (as(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                xe(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = Sl(Zt.bind(null, e, Ce, st), t);
              break;
            }
            Zt(e, Ce, st);
            break;
          case 4:
            if (Et(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var o = 31 - Xe(r);
              s = 1 << o, o = t[o], o > i && (i = o), r &= ~s;
            }
            if (r = i, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Iy(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Sl(Zt.bind(null, e, Ce, st), r);
              break;
            }
            Zt(e, Ce, st);
            break;
          case 5:
            Zt(e, Ce, st);
            break;
          default:
            throw Error(E(329));
        }
      }
    }
    return je(e, Z()), e.callbackNode === n ? kp.bind(null, e) : null;
  }
  function Ul(e, t) {
    var n = Ar;
    return e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256), e = Ts(e, t), e !== 2 && (t = Ce, Ce = n, t !== null && $l(t)), e;
  }
  function $l(e) {
    Ce === null ? Ce = e : Ce.push.apply(Ce, e);
  }
  function Oy(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var i = n[r], s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ze(s(), i)) return false;
          } catch {
            return false;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function Et(e, t) {
    for (t &= ~Ga, t &= ~Ks, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Xe(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Hc(e) {
    if (I & 6) throw Error(E(327));
    Wn();
    var t = as(e, 0);
    if (!(t & 1)) return je(e, Z()), null;
    var n = Ts(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = hl(e);
      r !== 0 && (t = r, n = Ul(e, r));
    }
    if (n === 1) throw n = Jr, sn(e, 0), Et(e, t), je(e, Z()), n;
    if (n === 6) throw Error(E(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, Ce, st), je(e, Z()), null;
  }
  function Xa(e, t) {
    var n = I;
    I |= 1;
    try {
      return e(t);
    } finally {
      I = n, I === 0 && (Yn = Z() + 500, $s && bt());
    }
  }
  function dn(e) {
    jt !== null && jt.tag === 0 && !(I & 6) && Wn();
    var t = I;
    I |= 1;
    var n = Ue.transition, r = O;
    try {
      if (Ue.transition = null, O = 1, e) return e();
    } finally {
      O = r, Ue.transition = n, I = t, !(I & 6) && bt();
    }
  }
  function Ya() {
    Re = Ln.current, B(Ln);
  }
  function sn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, hy(n)), q !== null) for (n = q.return; n !== null; ) {
      var r = n;
      switch (Ma(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && hs();
          break;
        case 3:
          Qn(), B(Ee), B(ve), za();
          break;
        case 5:
          Fa(r);
          break;
        case 4:
          Qn();
          break;
        case 13:
          B(W);
          break;
        case 19:
          B(W);
          break;
        case 10:
          Va(r.type._context);
          break;
        case 22:
        case 23:
          Ya();
      }
      n = n.return;
    }
    if (oe = e, q = e = It(e.current, null), ue = Re = t, ne = 0, Jr = null, Ga = Ks = fn = 0, Ce = Ar = null, tn !== null) {
      for (t = 0; t < tn.length; t++) if (n = tn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, s = n.pending;
        if (s !== null) {
          var o = s.next;
          s.next = i, r.next = o;
        }
        n.pending = r;
      }
      tn = null;
    }
    return e;
  }
  function Ep(e, t) {
    do {
      var n = q;
      try {
        if (Da(), Xi.current = Ps, Ss) {
          for (var r = H.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Ss = false;
        }
        if (cn = 0, se = te = H = null, Rr = false, Yr = 0, Ka.current = null, n === null || n.return === null) {
          ne = 1, Jr = t, q = null;
          break;
        }
        e: {
          var s = e, o = n.return, l = n, a2 = t;
          if (t = ue, l.flags |= 32768, a2 !== null && typeof a2 == "object" && typeof a2.then == "function") {
            var u2 = a2, c = l, f2 = c.tag;
            if (!(c.mode & 1) && (f2 === 0 || f2 === 11 || f2 === 15)) {
              var d3 = c.alternate;
              d3 ? (c.updateQueue = d3.updateQueue, c.memoizedState = d3.memoizedState, c.lanes = d3.lanes) : (c.updateQueue = null, c.memoizedState = null);
            }
            var g4 = Lc(o);
            if (g4 !== null) {
              g4.flags &= -257, Dc(g4, o, l, s, t), g4.mode & 1 && Ac(s, u2, t), t = g4, a2 = u2;
              var y2 = t.updateQueue;
              if (y2 === null) {
                var x3 = /* @__PURE__ */ new Set();
                x3.add(a2), t.updateQueue = x3;
              } else y2.add(a2);
              break e;
            } else {
              if (!(t & 1)) {
                Ac(s, u2, t), Za();
                break e;
              }
              a2 = Error(E(426));
            }
          } else if ($ && l.mode & 1) {
            var P3 = Lc(o);
            if (P3 !== null) {
              !(P3.flags & 65536) && (P3.flags |= 256), Dc(P3, o, l, s, t), Aa(Xn(a2, l));
              break e;
            }
          }
          s = a2 = Xn(a2, l), ne !== 4 && (ne = 2), Ar === null ? Ar = [s] : Ar.push(s), s = o;
          do {
            switch (s.tag) {
              case 3:
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var p2 = ap(s, a2, t);
                Ec(s, p2);
                break e;
              case 1:
                l = a2;
                var h = s.type, m = s.stateNode;
                if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Vt === null || !Vt.has(m)))) {
                  s.flags |= 65536, t &= -t, s.lanes |= t;
                  var S3 = up(s, l, t);
                  Ec(s, S3);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Np(n);
      } catch (C3) {
        t = C3, q === n && n !== null && (q = n = n.return);
        continue;
      }
      break;
    } while (true);
  }
  function Tp() {
    var e = Cs.current;
    return Cs.current = Ps, e === null ? Ps : e;
  }
  function Za() {
    (ne === 0 || ne === 3 || ne === 2) && (ne = 4), oe === null || !(fn & 268435455) && !(Ks & 268435455) || Et(oe, ue);
  }
  function Ts(e, t) {
    var n = I;
    I |= 2;
    var r = Tp();
    (oe !== e || ue !== t) && (st = null, sn(e, t));
    do
      try {
        Fy();
        break;
      } catch (i) {
        Ep(e, i);
      }
    while (true);
    if (Da(), I = n, Cs.current = r, q !== null) throw Error(E(261));
    return oe = null, ue = 0, ne;
  }
  function Fy() {
    for (; q !== null; ) jp(q);
  }
  function zy() {
    for (; q !== null && !cv(); ) jp(q);
  }
  function jp(e) {
    var t = Mp(e.alternate, e, Re);
    e.memoizedProps = e.pendingProps, t === null ? Np(e) : q = t, Ka.current = null;
  }
  function Np(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Ly(n, t), n !== null) {
          n.flags &= 32767, q = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ne = 6, q = null;
          return;
        }
      } else if (n = Ay(n, t, Re), n !== null) {
        q = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        q = t;
        return;
      }
      q = t = e;
    } while (t !== null);
    ne === 0 && (ne = 5);
  }
  function Zt(e, t, n) {
    var r = O, i = Ue.transition;
    try {
      Ue.transition = null, O = 1, By(e, t, n, r);
    } finally {
      Ue.transition = i, O = r;
    }
    return null;
  }
  function By(e, t, n, r) {
    do
      Wn();
    while (jt !== null);
    if (I & 6) throw Error(E(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (wv(e, s), e === oe && (q = oe = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Oi || (Oi = true, Ap(ls, function() {
      return Wn(), null;
    })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
      s = Ue.transition, Ue.transition = null;
      var o = O;
      O = 1;
      var l = I;
      I |= 4, Ka.current = null, Vy(e, n), Pp(n, e), oy(xl), us = !!yl, xl = yl = null, e.current = n, _y(n), fv(), I = l, O = o, Ue.transition = s;
    } else e.current = n;
    if (Oi && (Oi = false, jt = e, Es = i), s = e.pendingLanes, s === 0 && (Vt = null), pv(n.stateNode), je(e, Z()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (ks) throw ks = false, e = zl, zl = null, e;
    return Es & 1 && e.tag !== 0 && Wn(), s = e.pendingLanes, s & 1 ? e === Bl ? Lr++ : (Lr = 0, Bl = e) : Lr = 0, bt(), null;
  }
  function Wn() {
    if (jt !== null) {
      var e = ah(Es), t = Ue.transition, n = O;
      try {
        if (Ue.transition = null, O = 16 > e ? 16 : e, jt === null) var r = false;
        else {
          if (e = jt, jt = null, Es = 0, I & 6) throw Error(E(331));
          var i = I;
          for (I |= 4, R = e.current; R !== null; ) {
            var s = R, o = s.child;
            if (R.flags & 16) {
              var l = s.deletions;
              if (l !== null) {
                for (var a2 = 0; a2 < l.length; a2++) {
                  var u2 = l[a2];
                  for (R = u2; R !== null; ) {
                    var c = R;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mr(8, c, s);
                    }
                    var f2 = c.child;
                    if (f2 !== null) f2.return = c, R = f2;
                    else for (; R !== null; ) {
                      c = R;
                      var d3 = c.sibling, g4 = c.return;
                      if (xp(c), c === u2) {
                        R = null;
                        break;
                      }
                      if (d3 !== null) {
                        d3.return = g4, R = d3;
                        break;
                      }
                      R = g4;
                    }
                  }
                }
                var y2 = s.alternate;
                if (y2 !== null) {
                  var x3 = y2.child;
                  if (x3 !== null) {
                    y2.child = null;
                    do {
                      var P3 = x3.sibling;
                      x3.sibling = null, x3 = P3;
                    } while (x3 !== null);
                  }
                }
                R = s;
              }
            }
            if (s.subtreeFlags & 2064 && o !== null) o.return = s, R = o;
            else e: for (; R !== null; ) {
              if (s = R, s.flags & 2048) switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Mr(9, s, s.return);
              }
              var p2 = s.sibling;
              if (p2 !== null) {
                p2.return = s.return, R = p2;
                break e;
              }
              R = s.return;
            }
          }
          var h = e.current;
          for (R = h; R !== null; ) {
            o = R;
            var m = o.child;
            if (o.subtreeFlags & 2064 && m !== null) m.return = o, R = m;
            else e: for (o = h; R !== null; ) {
              if (l = R, l.flags & 2048) try {
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hs(9, l);
                }
              } catch (C3) {
                Q(l, l.return, C3);
              }
              if (l === o) {
                R = null;
                break e;
              }
              var S3 = l.sibling;
              if (S3 !== null) {
                S3.return = l.return, R = S3;
                break e;
              }
              R = l.return;
            }
          }
          if (I = i, bt(), tt && typeof tt.onPostCommitFiberRoot == "function") try {
            tt.onPostCommitFiberRoot(Os, e);
          } catch {
          }
          r = true;
        }
        return r;
      } finally {
        O = n, Ue.transition = t;
      }
    }
    return false;
  }
  function Kc(e, t, n) {
    t = Xn(n, t), t = ap(e, t, 1), e = Dt(e, t, 1), t = xe(), e !== null && (ci(e, 1, t), je(e, t));
  }
  function Q(e, t, n) {
    if (e.tag === 3) Kc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
          e = Xn(n, e), e = up(t, e, 1), t = Dt(t, e, 1), e = xe(), t !== null && (ci(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Uy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = xe(), e.pingedLanes |= e.suspendedLanes & n, oe === e && (ue & n) === n && (ne === 4 || ne === 3 && (ue & 130023424) === ue && 500 > Z() - Qa ? sn(e, 0) : Ga |= n), je(e, t);
  }
  function Rp(e, t) {
    t === 0 && (e.mode & 1 ? (t = ji, ji <<= 1, !(ji & 130023424) && (ji = 4194304)) : t = 1);
    var n = xe();
    e = mt(e, t), e !== null && (ci(e, t, n), je(e, n));
  }
  function $y(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Rp(e, n);
  }
  function Wy(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(E(314));
    }
    r !== null && r.delete(t), Rp(e, n);
  }
  var Mp;
  Mp = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ee.current) ke = true;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ke = false, My(e, t, n);
      ke = !!(e.flags & 131072);
    }
    else ke = false, $ && t.flags & 1048576 && Vh(t, gs, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Zi(e, t), e = t.pendingProps;
        var i = Hn(t, ve.current);
        $n(t, n), i = Ua(null, t, r, e, i, n);
        var s = $a();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (s = true, ps(t)) : s = false, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ia(t), i.updater = bs, t.stateNode = i, i._reactInternals = t, Nl(t, r, e, n), t = Al(null, t, r, true, s, n)) : (t.tag = 0, $ && s && Ra(t), ye(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Zi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Hy(r), e = Ke(r, e), i) {
            case 0:
              t = Ml(null, t, r, e, n);
              break e;
            case 1:
              t = Ic(null, t, r, e, n);
              break e;
            case 11:
              t = Vc(null, t, r, e, n);
              break e;
            case 14:
              t = _c(null, t, r, Ke(r.type, e), n);
              break e;
          }
          throw Error(E(306, r, ""));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Ml(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Ic(e, t, r, i, n);
      case 3:
        e: {
          if (hp(t), e === null) throw Error(E(387));
          r = t.pendingProps, s = t.memoizedState, i = s.element, Bh(e, t), xs(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, s.isDehydrated) if (s = { element: r, isDehydrated: false, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
            i = Xn(Error(E(423)), t), t = Oc(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = Xn(Error(E(424)), t), t = Oc(e, t, r, n, i);
            break e;
          } else for (Me = Lt(t.stateNode.containerInfo.firstChild), Ae = t, $ = true, Qe = null, n = Fh(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Kn(), r === i) {
              t = gt(e, t, n);
              break e;
            }
            ye(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Uh(t), e === null && El(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, wl(r, i) ? o = null : s !== null && wl(r, s) && (t.flags |= 32), dp(e, t), ye(e, t, o, n), t.child;
      case 6:
        return e === null && El(t), null;
      case 13:
        return pp(e, t, n);
      case 4:
        return Oa(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Gn(t, null, r, n) : ye(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Vc(e, t, r, i, n);
      case 7:
        return ye(e, t, t.pendingProps, n), t.child;
      case 8:
        return ye(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ye(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, F(vs, r._currentValue), r._currentValue = o, s !== null) if (Ze(s.value, o)) {
            if (s.children === i.children && !Ee.current) {
              t = gt(e, t, n);
              break e;
            }
          } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
            var l = s.dependencies;
            if (l !== null) {
              o = s.child;
              for (var a2 = l.firstContext; a2 !== null; ) {
                if (a2.context === r) {
                  if (s.tag === 1) {
                    a2 = ct(-1, n & -n), a2.tag = 2;
                    var u2 = s.updateQueue;
                    if (u2 !== null) {
                      u2 = u2.shared;
                      var c = u2.pending;
                      c === null ? a2.next = a2 : (a2.next = c.next, c.next = a2), u2.pending = a2;
                    }
                  }
                  s.lanes |= n, a2 = s.alternate, a2 !== null && (a2.lanes |= n), Tl(s.return, n, t), l.lanes |= n;
                  break;
                }
                a2 = a2.next;
              }
            } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
            else if (s.tag === 18) {
              if (o = s.return, o === null) throw Error(E(341));
              o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Tl(o, n, t), o = s.sibling;
            } else o = s.child;
            if (o !== null) o.return = s;
            else for (o = s; o !== null; ) {
              if (o === t) {
                o = null;
                break;
              }
              if (s = o.sibling, s !== null) {
                s.return = o.return, o = s;
                break;
              }
              o = o.return;
            }
            s = o;
          }
          ye(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, $n(t, n), i = $e(i), r = r(i), t.flags |= 1, ye(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Ke(r, t.pendingProps), i = Ke(r.type, i), _c(e, t, r, i, n);
      case 15:
        return cp(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Zi(e, t), t.tag = 1, Te(r) ? (e = true, ps(t)) : e = false, $n(t, n), lp(t, r, i), Nl(t, r, i, n), Al(null, t, r, true, e, n);
      case 19:
        return mp(e, t, n);
      case 22:
        return fp(e, t, n);
    }
    throw Error(E(156, t.tag));
  };
  function Ap(e, t) {
    return ih(e, t);
  }
  function by(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Be(e, t, n, r) {
    return new by(e, t, n, r);
  }
  function qa(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Hy(e) {
    if (typeof e == "function") return qa(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === va) return 11;
      if (e === ya) return 14;
    }
    return 2;
  }
  function It(e, t) {
    var n = e.alternate;
    return n === null ? (n = Be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function es(e, t, n, r, i, s) {
    var o = 2;
    if (r = e, typeof e == "function") qa(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case Pn:
        return on(n.children, i, s, t);
      case ga:
        o = 8, i |= 8;
        break;
      case qo:
        return e = Be(12, n, t, i | 2), e.elementType = qo, e.lanes = s, e;
      case Jo:
        return e = Be(13, n, t, i), e.elementType = Jo, e.lanes = s, e;
      case el:
        return e = Be(19, n, t, i), e.elementType = el, e.lanes = s, e;
      case Ud:
        return Gs(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case zd:
            o = 10;
            break e;
          case Bd:
            o = 9;
            break e;
          case va:
            o = 11;
            break e;
          case ya:
            o = 14;
            break e;
          case Pt:
            o = 16, r = null;
            break e;
        }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
    return t = Be(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
  }
  function on(e, t, n, r) {
    return e = Be(7, e, r, t), e.lanes = n, e;
  }
  function Gs(e, t, n, r) {
    return e = Be(22, e, r, t), e.elementType = Ud, e.lanes = n, e.stateNode = { isHidden: false }, e;
  }
  function Lo(e, t, n) {
    return e = Be(6, e, null, t), e.lanes = n, e;
  }
  function Do(e, t, n) {
    return t = Be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Ky(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ho(0), this.expirationTimes = ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ho(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function Ja(e, t, n, r, i, s, o, l, a2) {
    return e = new Ky(e, t, n, l, a2), t === 1 ? (t = 1, s === true && (t |= 8)) : t = 0, s = Be(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ia(s), e;
  }
  function Gy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Sn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Lp(e) {
    if (!e) return zt;
    e = e._reactInternals;
    e: {
      if (pn(e) !== e || e.tag !== 1) throw Error(E(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Te(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(E(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Te(n)) return Lh(e, n, t);
    }
    return t;
  }
  function Dp(e, t, n, r, i, s, o, l, a2) {
    return e = Ja(n, r, true, e, i, s, o, l, a2), e.context = Lp(null), n = e.current, r = xe(), i = _t(n), s = ct(r, i), s.callback = t ?? null, Dt(n, s, i), e.current.lanes = i, ci(e, i, r), je(e, r), e;
  }
  function Qs(e, t, n, r) {
    var i = t.current, s = xe(), o = _t(i);
    return n = Lp(n), t.context === null ? t.context = n : t.pendingContext = n, t = ct(s, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Dt(i, t, o), e !== null && (Ye(e, i, o, s), Qi(e, i, o)), o;
  }
  function js(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Gc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function eu(e, t) {
    Gc(e, t), (e = e.alternate) && Gc(e, t);
  }
  function Qy() {
    return null;
  }
  var Vp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function tu(e) {
    this._internalRoot = e;
  }
  Xs.prototype.render = tu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(E(409));
    Qs(e, t, null, null);
  };
  Xs.prototype.unmount = tu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      dn(function() {
        Qs(null, e, null, null);
      }), t[pt] = null;
    }
  };
  function Xs(e) {
    this._internalRoot = e;
  }
  Xs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = fh();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++) ;
      kt.splice(n, 0, e), n === 0 && hh(e);
    }
  };
  function nu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ys(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Qc() {
  }
  function Xy(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var s = r;
        r = function() {
          var u2 = js(o);
          s.call(u2);
        };
      }
      var o = Dp(t, r, e, 0, null, false, false, "", Qc);
      return e._reactRootContainer = o, e[pt] = o.current, Hr(e.nodeType === 8 ? e.parentNode : e), dn(), o;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var u2 = js(a2);
        l.call(u2);
      };
    }
    var a2 = Ja(e, 0, false, null, null, false, false, "", Qc);
    return e._reactRootContainer = a2, e[pt] = a2.current, Hr(e.nodeType === 8 ? e.parentNode : e), dn(function() {
      Qs(t, a2, n, r);
    }), a2;
  }
  function Zs(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
      var o = s;
      if (typeof i == "function") {
        var l = i;
        i = function() {
          var a2 = js(o);
          l.call(a2);
        };
      }
      Qs(t, o, e, i);
    } else o = Xy(n, t, e, i, r);
    return js(o);
  }
  uh = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = xr(t.pendingLanes);
          n !== 0 && (Sa(t, n | 1), je(t, Z()), !(I & 6) && (Yn = Z() + 500, bt()));
        }
        break;
      case 13:
        dn(function() {
          var r = mt(e, 1);
          if (r !== null) {
            var i = xe();
            Ye(r, e, 1, i);
          }
        }), eu(e, 1);
    }
  };
  Pa = function(e) {
    if (e.tag === 13) {
      var t = mt(e, 134217728);
      if (t !== null) {
        var n = xe();
        Ye(t, e, 134217728, n);
      }
      eu(e, 134217728);
    }
  };
  ch = function(e) {
    if (e.tag === 13) {
      var t = _t(e), n = mt(e, t);
      if (n !== null) {
        var r = xe();
        Ye(n, e, t, r);
      }
      eu(e, t);
    }
  };
  fh = function() {
    return O;
  };
  dh = function(e, t) {
    var n = O;
    try {
      return O = e, t();
    } finally {
      O = n;
    }
  };
  cl = function(e, t, n) {
    switch (t) {
      case "input":
        if (rl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Us(r);
              if (!i) throw Error(E(90));
              Wd(r), rl(r, i);
            }
          }
        }
        break;
      case "textarea":
        Hd(e, n);
        break;
      case "select":
        t = n.value, t != null && Fn(e, !!n.multiple, t, false);
    }
  };
  qd = Xa;
  Jd = dn;
  var Yy = { usingClientEntryPoint: false, Events: [di, Tn, Us, Yd, Zd, Xa] };
  var pr = { findFiberByHostInstance: en, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var Zy = { bundleType: pr.bundleType, version: pr.version, rendererPackageName: pr.rendererPackageName, rendererConfig: pr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = nh(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: pr.findFiberByHostInstance || Qy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    Fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fi.isDisabled && Fi.supportsFiber) try {
      Os = Fi.inject(Zy), tt = Fi;
    } catch {
    }
  }
  var Fi;
  Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yy;
  Ve.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!nu(t)) throw Error(E(200));
    return Gy(e, t, null, n);
  };
  Ve.createRoot = function(e, t) {
    if (!nu(e)) throw Error(E(299));
    var n = false, r = "", i = Vp;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ja(e, 1, false, null, null, n, false, r, i), e[pt] = t.current, Hr(e.nodeType === 8 ? e.parentNode : e), new tu(t);
  };
  Ve.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
    return e = nh(t), e = e === null ? null : e.stateNode, e;
  };
  Ve.flushSync = function(e) {
    return dn(e);
  };
  Ve.hydrate = function(e, t, n) {
    if (!Ys(t)) throw Error(E(200));
    return Zs(null, e, t, true, n);
  };
  Ve.hydrateRoot = function(e, t, n) {
    if (!nu(e)) throw Error(E(405));
    var r = n != null && n.hydratedSources || null, i = false, s = "", o = Vp;
    if (n != null && (n.unstable_strictMode === true && (i = true), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Dp(t, null, e, 1, n ?? null, i, false, s, o), e[pt] = t.current, Hr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Xs(t);
  };
  Ve.render = function(e, t, n) {
    if (!Ys(t)) throw Error(E(200));
    return Zs(null, e, t, false, n);
  };
  Ve.unmountComponentAtNode = function(e) {
    if (!Ys(e)) throw Error(E(40));
    return e._reactRootContainer ? (dn(function() {
      Zs(null, null, e, false, function() {
        e._reactRootContainer = null, e[pt] = null;
      });
    }), true) : false;
  };
  Ve.unstable_batchedUpdates = Xa;
  Ve.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ys(n)) throw Error(E(200));
    if (e == null || e._reactInternals === void 0) throw Error(E(38));
    return Zs(e, t, n, false, r);
  };
  Ve.version = "18.3.1-next-f1338f8080-20240426";
  function _p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_p);
    } catch (e) {
      console.error(e);
    }
  }
  _p(), _d.exports = Ve;
  var qy = _d.exports;
  var Xc = qy;
  Yo.createRoot = Xc.createRoot, Yo.hydrateRoot = Xc.hydrateRoot;
  function ei() {
    return ei = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, ei.apply(null, arguments);
  }
  var Nt;
  (function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
  })(Nt || (Nt = {}));
  var Zc = "popstate";
  function t0(e) {
    e === void 0 && (e = {});
    function t(r, i) {
      let { pathname: s, search: o, hash: l } = r.location;
      return Wl("", { pathname: s, search: o, hash: l }, i.state && i.state.usr || null, i.state && i.state.key || "default");
    }
    function n(r, i) {
      return typeof i == "string" ? i : Ns(i);
    }
    return r0(t, n, null, e);
  }
  function J(e, t) {
    if (e === false || e === null || typeof e > "u") throw new Error(t);
  }
  function ru(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {
      }
    }
  }
  function n0() {
    return Math.random().toString(36).substr(2, 8);
  }
  function qc(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function Wl(e, t, n, r) {
    return n === void 0 && (n = null), ei({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? rr(t) : t, { state: n, key: t && t.key || r || n0() });
  }
  function Ns(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
  }
  function rr(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
      let r = e.indexOf("?");
      r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
    }
    return t;
  }
  function r0(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: i = document.defaultView, v5Compat: s = false } = r, o = i.history, l = Nt.Pop, a2 = null, u2 = c();
    u2 == null && (u2 = 0, o.replaceState(ei({}, o.state, { idx: u2 }), ""));
    function c() {
      return (o.state || { idx: null }).idx;
    }
    function f2() {
      l = Nt.Pop;
      let P3 = c(), p2 = P3 == null ? null : P3 - u2;
      u2 = P3, a2 && a2({ action: l, location: x3.location, delta: p2 });
    }
    function d3(P3, p2) {
      l = Nt.Push;
      let h = Wl(x3.location, P3, p2);
      u2 = c() + 1;
      let m = qc(h, u2), S3 = x3.createHref(h);
      try {
        o.pushState(m, "", S3);
      } catch (C3) {
        if (C3 instanceof DOMException && C3.name === "DataCloneError") throw C3;
        i.location.assign(S3);
      }
      s && a2 && a2({ action: l, location: x3.location, delta: 1 });
    }
    function g4(P3, p2) {
      l = Nt.Replace;
      let h = Wl(x3.location, P3, p2);
      u2 = c();
      let m = qc(h, u2), S3 = x3.createHref(h);
      o.replaceState(m, "", S3), s && a2 && a2({ action: l, location: x3.location, delta: 0 });
    }
    function y2(P3) {
      let p2 = i.location.origin !== "null" ? i.location.origin : i.location.href, h = typeof P3 == "string" ? P3 : Ns(P3);
      return h = h.replace(/ $/, "%20"), J(p2, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, p2);
    }
    let x3 = { get action() {
      return l;
    }, get location() {
      return e(i, o);
    }, listen(P3) {
      if (a2) throw new Error("A history only accepts one active listener");
      return i.addEventListener(Zc, f2), a2 = P3, () => {
        i.removeEventListener(Zc, f2), a2 = null;
      };
    }, createHref(P3) {
      return t(i, P3);
    }, createURL: y2, encodeLocation(P3) {
      let p2 = y2(P3);
      return { pathname: p2.pathname, search: p2.search, hash: p2.hash };
    }, push: d3, replace: g4, go(P3) {
      return o.go(P3);
    } };
    return x3;
  }
  var Jc;
  (function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
  })(Jc || (Jc = {}));
  function i0(e, t, n) {
    return n === void 0 && (n = "/"), s0(e, t, n);
  }
  function s0(e, t, n, r) {
    let i = typeof t == "string" ? rr(t) : t, s = iu(i.pathname || "/", n);
    if (s == null) return null;
    let o = Ip(e);
    o0(o);
    let l = null, a2 = y0(s);
    for (let u2 = 0; l == null && u2 < o.length; ++u2) l = m0(o[u2], a2);
    return l;
  }
  function Ip(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (s, o, l) => {
      let a2 = { relativePath: l === void 0 ? s.path || "" : l, caseSensitive: s.caseSensitive === true, childrenIndex: o, route: s };
      a2.relativePath.startsWith("/") && (J(a2.relativePath.startsWith(r), 'Absolute route path "' + a2.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a2.relativePath = a2.relativePath.slice(r.length));
      let u2 = Ot([r, a2.relativePath]), c = n.concat(a2);
      s.children && s.children.length > 0 && (J(s.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u2 + '".')), Ip(s.children, t, c, u2)), !(s.path == null && !s.index) && t.push({ path: u2, score: h0(u2, s.index), routesMeta: c });
    };
    return e.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
      else for (let a2 of Op(s.path)) i(s, o, a2);
    }), t;
  }
  function Op(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith("?"), s = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [s, ""] : [s];
    let o = Op(r.join("/")), l = [];
    return l.push(...o.map((a2) => a2 === "" ? s : [s, a2].join("/"))), i && l.push(...o), l.map((a2) => e.startsWith("/") && a2 === "" ? "/" : a2);
  }
  function o0(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : p0(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
  }
  var l0 = /^:[\w-]+$/;
  var a0 = 3;
  var u0 = 2;
  var c0 = 1;
  var f0 = 10;
  var d0 = -2;
  var ef = (e) => e === "*";
  function h0(e, t) {
    let n = e.split("/"), r = n.length;
    return n.some(ef) && (r += d0), t && (r += u0), n.filter((i) => !ef(i)).reduce((i, s) => i + (l0.test(s) ? a0 : s === "" ? c0 : f0), r);
  }
  function p0(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
  }
  function m0(e, t, n) {
    let { routesMeta: r } = e, i = {}, s = "/", o = [];
    for (let l = 0; l < r.length; ++l) {
      let a2 = r[l], u2 = l === r.length - 1, c = s === "/" ? t : t.slice(s.length) || "/", f2 = g0({ path: a2.relativePath, caseSensitive: a2.caseSensitive, end: u2 }, c), d3 = a2.route;
      if (!f2) return null;
      Object.assign(i, f2.params), o.push({ params: i, pathname: Ot([s, f2.pathname]), pathnameBase: C0(Ot([s, f2.pathnameBase])), route: d3 }), f2.pathnameBase !== "/" && (s = Ot([s, f2.pathnameBase]));
    }
    return o;
  }
  function g0(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: false, end: true });
    let [n, r] = v0(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let s = i[0], o = s.replace(/(.)\/+$/, "$1"), l = i.slice(1);
    return { params: r.reduce((u2, c, f2) => {
      let { paramName: d3, isOptional: g4 } = c;
      if (d3 === "*") {
        let x3 = l[f2] || "";
        o = s.slice(0, s.length - x3.length).replace(/(.)\/+$/, "$1");
      }
      const y2 = l[f2];
      return g4 && !y2 ? u2[d3] = void 0 : u2[d3] = (y2 || "").replace(/%2F/g, "/"), u2;
    }, {}), pathname: s, pathnameBase: o, pattern: e };
  }
  function v0(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = true), ru(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, l, a2) => (r.push({ paramName: l, isOptional: a2 != null }), a2 ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
  }
  function y0(e) {
    try {
      return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
    } catch (t) {
      return ru(false, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
    }
  }
  function iu(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  var x0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  var w0 = (e) => x0.test(e);
  function S0(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? rr(e) : e, s;
    if (n) if (w0(n)) s = n;
    else {
      if (n.includes("//")) {
        let o = n;
        n = Bp(n), ru(false, "Pathnames cannot have embedded double slashes - normalizing " + (o + " -> " + n));
      }
      n.startsWith("/") ? s = tf(n.substring(1), "/") : s = tf(n, t);
    }
    else s = t;
    return { pathname: s, search: k0(r), hash: E0(i) };
  }
  function tf(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }), n.length > 1 ? n.join("/") : "/";
  }
  function Vo(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
  }
  function P0(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
  }
  function Fp(e, t) {
    let n = P0(e);
    return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
  }
  function zp(e, t, n, r) {
    r === void 0 && (r = false);
    let i;
    typeof e == "string" ? i = rr(e) : (i = ei({}, e), J(!i.pathname || !i.pathname.includes("?"), Vo("?", "pathname", "search", i)), J(!i.pathname || !i.pathname.includes("#"), Vo("#", "pathname", "hash", i)), J(!i.search || !i.search.includes("#"), Vo("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "", o = s ? "/" : i.pathname, l;
    if (o == null) l = n;
    else {
      let f2 = t.length - 1;
      if (!r && o.startsWith("..")) {
        let d3 = o.split("/");
        for (; d3[0] === ".."; ) d3.shift(), f2 -= 1;
        i.pathname = d3.join("/");
      }
      l = f2 >= 0 ? t[f2] : "/";
    }
    let a2 = S0(i, l), u2 = o && o !== "/" && o.endsWith("/"), c = (s || o === ".") && n.endsWith("/");
    return !a2.pathname.endsWith("/") && (u2 || c) && (a2.pathname += "/"), a2;
  }
  var Bp = (e) => e.replace(/\/\/+/g, "/");
  var Ot = (e) => Bp(e.join("/"));
  var C0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
  var k0 = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e;
  var E0 = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
  function T0(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
  }
  var Up = ["post", "put", "patch", "delete"];
  new Set(Up);
  var j0 = ["get", ...Up];
  new Set(j0);
  function ti() {
    return ti = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, ti.apply(null, arguments);
  }
  var su = w.createContext(null);
  var N0 = w.createContext(null);
  var mn = w.createContext(null);
  var Js = w.createContext(null);
  var gn = w.createContext({ outlet: null, matches: [], isDataRoute: false });
  var $p = w.createContext(null);
  function R0(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    pi() || J(false);
    let { basename: r, navigator: i } = w.useContext(mn), { hash: s, pathname: o, search: l } = bp(e, { relative: n }), a2 = o;
    return r !== "/" && (a2 = o === "/" ? r : Ot([r, o])), i.createHref({ pathname: a2, search: l, hash: s });
  }
  function pi() {
    return w.useContext(Js) != null;
  }
  function vn() {
    pi() || J(false);
    let l = w.useContext(Js).location;
    if (l && (window.location.protocol === "file:" || l.pathname.endsWith(".html") || l.pathname.includes(".html"))) {
      let p2 = window.location.hash ? window.location.hash.replace(/^#/, "") : "/";
      if (!p2.startsWith("/")) p2 = "/" + p2;
      return { ...l, pathname: p2 };
    }
    return l;
  }
  function Wp(e) {
    w.useContext(mn).static || w.useLayoutEffect(e);
  }
  function M0() {
    let { isDataRoute: e } = w.useContext(gn);
    return e ? W0() : A0();
  }
  function A0() {
    pi() || J(false);
    let e = w.useContext(su), { basename: t, future: n, navigator: r } = w.useContext(mn), { matches: i } = w.useContext(gn), { pathname: s } = vn(), o = JSON.stringify(Fp(i, n.v7_relativeSplatPath)), l = w.useRef(false);
    return Wp(() => {
      l.current = true;
    }), w.useCallback(function(u2, c) {
      if (c === void 0 && (c = {}), !l.current) return;
      if (typeof u2 == "number") {
        r.go(u2);
        return;
      }
      let f2 = zp(u2, JSON.parse(o), s, c.relative === "path");
      e == null && t !== "/" && (f2.pathname = f2.pathname === "/" ? t : Ot([t, f2.pathname])), (c.replace ? r.replace : r.push)(f2, c.state, c);
    }, [t, r, o, s, e]);
  }
  function bp(e, t) {
    let { relative: n } = t === void 0 ? {} : t, { future: r } = w.useContext(mn), { matches: i } = w.useContext(gn), { pathname: s } = vn(), o = JSON.stringify(Fp(i, r.v7_relativeSplatPath));
    return w.useMemo(() => zp(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
  }
  function L0(e, t) {
    return D0(e, t);
  }
  function D0(e, t, n, r) {
    pi() || J(false);
    let { navigator: i } = w.useContext(mn), { matches: s } = w.useContext(gn), o = s[s.length - 1], l = o ? o.params : {};
    o && o.pathname;
    let a2 = o ? o.pathnameBase : "/";
    o && o.route;
    let u2 = vn(), c;
    if (t) {
      var f2;
      let P3 = typeof t == "string" ? rr(t) : t;
      a2 === "/" || (f2 = P3.pathname) != null && f2.startsWith(a2) || J(false), c = P3;
    } else c = u2;
    let d3 = c.pathname || "/", g4 = d3;
    if (a2 !== "/") {
      let P3 = a2.replace(/^\//, "").split("/");
      g4 = "/" + d3.replace(/^\//, "").split("/").slice(P3.length).join("/");
    }
    let y2 = i0(e, { pathname: g4 }), x3 = F0(y2 && y2.map((P3) => Object.assign({}, P3, { params: Object.assign({}, l, P3.params), pathname: Ot([a2, i.encodeLocation ? i.encodeLocation(P3.pathname).pathname : P3.pathname]), pathnameBase: P3.pathnameBase === "/" ? a2 : Ot([a2, i.encodeLocation ? i.encodeLocation(P3.pathnameBase).pathname : P3.pathnameBase]) })), s, n, r);
    return t && x3 ? w.createElement(Js.Provider, { value: { location: ti({ pathname: "/", search: "", hash: "", state: null, key: "default" }, c), navigationType: Nt.Pop } }, x3) : x3;
  }
  function V0() {
    let e = $0(), t = T0(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? w.createElement("pre", { style: i }, n) : null, null);
  }
  var _0 = w.createElement(V0, null);
  var I0 = class extends w.Component {
    constructor(t) {
      super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error };
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
      return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
    }
    componentDidCatch(t, n) {
      console.error("React Router caught the following error during render", t, n);
    }
    render() {
      return this.state.error !== void 0 ? w.createElement(gn.Provider, { value: this.props.routeContext }, w.createElement($p.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
    }
  };
  function O0(e) {
    let { routeContext: t, match: n, children: r } = e, i = w.useContext(su);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), w.createElement(gn.Provider, { value: t }, r);
  }
  function F0(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
      var s;
      if (!n) return null;
      if (n.errors) e = n.matches;
      else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
      else return null;
    }
    let o = e, l = (i = n) == null ? void 0 : i.errors;
    if (l != null) {
      let c = o.findIndex((f2) => f2.route.id && (l == null ? void 0 : l[f2.route.id]) !== void 0);
      c >= 0 || J(false), o = o.slice(0, Math.min(o.length, c + 1));
    }
    let a2 = false, u2 = -1;
    if (n && r && r.v7_partialHydration) for (let c = 0; c < o.length; c++) {
      let f2 = o[c];
      if ((f2.route.HydrateFallback || f2.route.hydrateFallbackElement) && (u2 = c), f2.route.id) {
        let { loaderData: d3, errors: g4 } = n, y2 = f2.route.loader && d3[f2.route.id] === void 0 && (!g4 || g4[f2.route.id] === void 0);
        if (f2.route.lazy || y2) {
          a2 = true, u2 >= 0 ? o = o.slice(0, u2 + 1) : o = [o[0]];
          break;
        }
      }
    }
    return o.reduceRight((c, f2, d3) => {
      let g4, y2 = false, x3 = null, P3 = null;
      n && (g4 = l && f2.route.id ? l[f2.route.id] : void 0, x3 = f2.route.errorElement || _0, a2 && (u2 < 0 && d3 === 0 ? (b0("route-fallback"), y2 = true, P3 = null) : u2 === d3 && (y2 = true, P3 = f2.route.hydrateFallbackElement || null)));
      let p2 = t.concat(o.slice(0, d3 + 1)), h = () => {
        let m;
        return g4 ? m = x3 : y2 ? m = P3 : f2.route.Component ? m = w.createElement(f2.route.Component, null) : f2.route.element ? m = f2.route.element : m = c, w.createElement(O0, { match: f2, routeContext: { outlet: c, matches: p2, isDataRoute: n != null }, children: m });
      };
      return n && (f2.route.ErrorBoundary || f2.route.errorElement || d3 === 0) ? w.createElement(I0, { location: n.location, revalidation: n.revalidation, component: x3, error: g4, children: h(), routeContext: { outlet: null, matches: p2, isDataRoute: true } }) : h();
    }, null);
  }
  var Hp = (function(e) {
    return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
  })(Hp || {});
  var Kp = (function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
  })(Kp || {});
  function z0(e) {
    let t = w.useContext(su);
    return t || J(false), t;
  }
  function B0(e) {
    let t = w.useContext(N0);
    return t || J(false), t;
  }
  function U0(e) {
    let t = w.useContext(gn);
    return t || J(false), t;
  }
  function Gp(e) {
    let t = U0(), n = t.matches[t.matches.length - 1];
    return n.route.id || J(false), n.route.id;
  }
  function $0() {
    var e;
    let t = w.useContext($p), n = B0(), r = Gp();
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
  }
  function W0() {
    let { router: e } = z0(Hp.UseNavigateStable), t = Gp(Kp.UseNavigateStable), n = w.useRef(false);
    return Wp(() => {
      n.current = true;
    }), w.useCallback(function(i, s) {
      s === void 0 && (s = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, ti({ fromRouteId: t }, s)));
    }, [e, t]);
  }
  var nf = {};
  function b0(e, t, n) {
    nf[e] || (nf[e] = true);
  }
  function H0(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
  }
  function wn(e) {
    J(false);
  }
  function K0(e) {
    let { basename: t = "/", children: n = null, location: r, navigationType: i = Nt.Pop, navigator: s, static: o = false, future: l } = e;
    pi() && J(false);
    let a2 = t.replace(/^\/*/, "/"), u2 = w.useMemo(() => ({ basename: a2, navigator: s, static: o, future: ti({ v7_relativeSplatPath: false }, l) }), [a2, l, s, o]);
    typeof r == "string" && (r = rr(r));
    let { pathname: c = "/", search: f2 = "", hash: d3 = "", state: g4 = null, key: y2 = "default" } = r, x3 = w.useMemo(() => {
      let P3 = iu(c, a2);
      return P3 == null ? null : { location: { pathname: P3, search: f2, hash: d3, state: g4, key: y2 }, navigationType: i };
    }, [a2, c, f2, d3, g4, y2, i]);
    return x3 == null ? null : w.createElement(mn.Provider, { value: u2 }, w.createElement(Js.Provider, { children: n, value: x3 }));
  }
  function G0(e) {
    let { children: t, location: n } = e;
    return L0(bl(t), n);
  }
  new Promise(() => {
  });
  function bl(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, i) => {
      if (!w.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === w.Fragment) {
        n.push.apply(n, bl(r.props.children, s));
        return;
      }
      r.type !== wn && J(false), !r.props.index || !r.props.children || J(false);
      let o = { id: r.props.id || s.join("-"), caseSensitive: r.props.caseSensitive, element: r.props.element, Component: r.props.Component, index: r.props.index, path: r.props.path, loader: r.props.loader, action: r.props.action, errorElement: r.props.errorElement, ErrorBoundary: r.props.ErrorBoundary, hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null, shouldRevalidate: r.props.shouldRevalidate, handle: r.props.handle, lazy: r.props.lazy };
      r.props.children && (o.children = bl(r.props.children, s)), n.push(o);
    }), n;
  }
  function Hl() {
    return Hl = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, Hl.apply(null, arguments);
  }
  function Q0(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
    return n;
  }
  function X0(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function Y0(e, t) {
    return e.button === 0 && (!t || t === "_self") && !X0(e);
  }
  var Z0 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
  var q0 = "6";
  try {
    window.__reactRouterVersion = q0;
  } catch {
  }
  var J0 = "startTransition";
  var rf = Ug[J0];
  function e1(e) {
    let { basename: t, children: n, future: r, window: i } = e, s = w.useRef();
    s.current == null && (s.current = t0({ window: i, v5Compat: true }));
    let o = s.current, [l, a2] = w.useState({ action: o.action, location: o.location }), { v7_startTransition: u2 } = r || {}, c = w.useCallback((f2) => {
      u2 && rf ? rf(() => a2(f2)) : a2(f2);
    }, [a2, u2]);
    return w.useLayoutEffect(() => o.listen(c), [o, c]), w.useEffect(() => H0(r), [r]), w.createElement(K0, { basename: t, children: n, location: l.location, navigationType: l.action, navigator: o, future: r });
  }
  var t1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  var n1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  var lt = w.forwardRef(function(t, n) {
    let { onClick: r, relative: i, reloadDocument: s, replace: o, state: l, target: a2, to: u2, preventScrollReset: c, viewTransition: f2 } = t, d3 = Q0(t, Z0), { basename: g4 } = w.useContext(mn), y2, x3 = false;
    if (typeof u2 == "string" && n1.test(u2) && (y2 = u2, t1)) try {
      let m = new URL(window.location.href), S3 = u2.startsWith("//") ? new URL(m.protocol + u2) : new URL(u2), C3 = iu(S3.pathname, g4);
      S3.origin === m.origin && C3 != null ? u2 = C3 + S3.search + S3.hash : x3 = true;
    } catch {
    }
    let P3 = R0(u2, { relative: i }), p2 = r1(u2, { replace: o, state: l, target: a2, preventScrollReset: c, relative: i, viewTransition: f2 });
    function h(m) {
      r && r(m), m.defaultPrevented || p2(m);
    }
    return w.createElement("a", Hl({}, d3, { href: y2 || P3, onClick: x3 || s ? r : h, ref: n, target: a2 }));
  });
  var sf;
  (function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
  })(sf || (sf = {}));
  var of;
  (function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
  })(of || (of = {}));
  function r1(e, t) {
    let { target: n, replace: r, state: i, preventScrollReset: s, relative: o, viewTransition: l } = t === void 0 ? {} : t, a2 = M0(), u2 = vn(), c = bp(e, { relative: o });
    return w.useCallback((f2) => {
      if (Y0(f2, n)) {
        f2.preventDefault();
        let d3 = r !== void 0 ? r : Ns(u2) === Ns(c);
        a2(e, { replace: d3, state: i, preventScrollReset: s, relative: o, viewTransition: l });
      }
    }, [u2, a2, c, r, i, n, e, s, o, l]);
  }
  var ou = w.createContext({});
  function lu(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()), t.current;
  }
  var eo = w.createContext(null);
  var au = w.createContext({ transformPagePoint: (e) => e, isStatic: false, reducedMotion: "never" });
  var i1 = class extends w.Component {
    getSnapshotBeforeUpdate(t) {
      const n = this.props.childRef.current;
      if (n && t.isPresent && !this.props.isPresent) {
        const r = this.props.sizeRef.current;
        r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
      }
      return null;
    }
    componentDidUpdate() {
    }
    render() {
      return this.props.children;
    }
  };
  function s1({ children: e, isPresent: t }) {
    const n = w.useId(), r = w.useRef(null), i = w.useRef({ width: 0, height: 0, top: 0, left: 0 }), { nonce: s } = w.useContext(au);
    return w.useInsertionEffect(() => {
      const { width: o, height: l, top: a2, left: u2 } = i.current;
      if (t || !r.current || !o || !l) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return s && (c.nonce = s), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${a2}px !important;
            left: ${u2}px !important;
          }
        `), () => {
        document.head.removeChild(c);
      };
    }, [t]), v.jsx(i1, { isPresent: t, childRef: r, sizeRef: i, children: w.cloneElement(e, { ref: r }) });
  }
  var o1 = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o }) => {
    const l = lu(l1), a2 = w.useId(), u2 = w.useCallback((f2) => {
      l.set(f2, true);
      for (const d3 of l.values()) if (!d3) return;
      r && r();
    }, [l, r]), c = w.useMemo(() => ({ id: a2, initial: t, isPresent: n, custom: i, onExitComplete: u2, register: (f2) => (l.set(f2, false), () => l.delete(f2)) }), s ? [Math.random(), u2] : [n, u2]);
    return w.useMemo(() => {
      l.forEach((f2, d3) => l.set(d3, false));
    }, [n]), w.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]), o === "popLayout" && (e = v.jsx(s1, { isPresent: n, children: e })), v.jsx(eo.Provider, { value: c, children: e });
  };
  function l1() {
    return /* @__PURE__ */ new Map();
  }
  function Qp(e = true) {
    const t = w.useContext(eo);
    if (t === null) return [true, null];
    const { isPresent: n, onExitComplete: r, register: i } = t, s = w.useId();
    w.useEffect(() => {
      e && i(s);
    }, [e]);
    const o = w.useCallback(() => e && r && r(s), [s, r, e]);
    return !n && r ? [false, o] : [true];
  }
  var zi = (e) => e.key || "";
  function lf(e) {
    const t = [];
    return w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }), t;
  }
  var uu = typeof window < "u";
  var Xp = uu ? w.useLayoutEffect : w.useEffect;
  var ni = ({ children: e, custom: t, initial: n = true, onExitComplete: r, presenceAffectsLayout: i = true, mode: s = "sync", propagate: o = false }) => {
    const [l, a2] = Qp(o), u2 = w.useMemo(() => lf(e), [e]), c = o && !l ? [] : u2.map(zi), f2 = w.useRef(true), d3 = w.useRef(u2), g4 = lu(() => /* @__PURE__ */ new Map()), [y2, x3] = w.useState(u2), [P3, p2] = w.useState(u2);
    Xp(() => {
      f2.current = false, d3.current = u2;
      for (let S3 = 0; S3 < P3.length; S3++) {
        const C3 = zi(P3[S3]);
        c.includes(C3) ? g4.delete(C3) : g4.get(C3) !== true && g4.set(C3, false);
      }
    }, [P3, c.length, c.join("-")]);
    const h = [];
    if (u2 !== y2) {
      let S3 = [...u2];
      for (let C3 = 0; C3 < P3.length; C3++) {
        const T3 = P3[C3], j3 = zi(T3);
        c.includes(j3) || (S3.splice(C3, 0, T3), h.push(T3));
      }
      s === "wait" && h.length && (S3 = h), p2(lf(S3)), x3(u2);
      return;
    }
    const { forceRender: m } = w.useContext(ou);
    return v.jsx(v.Fragment, { children: P3.map((S3) => {
      const C3 = zi(S3), T3 = o && !l ? false : u2 === P3 || c.includes(C3), j3 = () => {
        if (g4.has(C3)) g4.set(C3, true);
        else return;
        let k4 = true;
        g4.forEach((V2) => {
          V2 || (k4 = false);
        }), k4 && (m == null || m(), p2(d3.current), o && (a2 == null || a2()), r && r());
      };
      return v.jsx(o1, { isPresent: T3, initial: !f2.current || n ? void 0 : false, custom: T3 ? void 0 : t, presenceAffectsLayout: i, mode: s, onExitComplete: T3 ? void 0 : j3, children: S3 }, C3);
    }) });
  };
  var Ne = (e) => e;
  var pC = Ne;
  var Yp = Ne;
  function cu(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
  }
  var Zn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
  var ft = (e) => e * 1e3;
  var dt = (e) => e / 1e3;
  var a1 = { useManualTiming: false };
  function u1(e) {
    let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = false, i = false;
    const s = /* @__PURE__ */ new WeakSet();
    let o = { delta: 0, timestamp: 0, isProcessing: false };
    function l(u2) {
      s.has(u2) && (a2.schedule(u2), e()), u2(o);
    }
    const a2 = { schedule: (u2, c = false, f2 = false) => {
      const g4 = f2 && r ? t : n;
      return c && s.add(u2), g4.has(u2) || g4.add(u2), u2;
    }, cancel: (u2) => {
      n.delete(u2), s.delete(u2);
    }, process: (u2) => {
      if (o = u2, r) {
        i = true;
        return;
      }
      r = true, [t, n] = [n, t], t.forEach(l), t.clear(), r = false, i && (i = false, a2.process(u2));
    } };
    return a2;
  }
  var Bi = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
  var c1 = 40;
  function Zp(e, t) {
    let n = false, r = true;
    const i = { delta: 0, timestamp: 0, isProcessing: false }, s = () => n = true, o = Bi.reduce((p2, h) => (p2[h] = u1(s), p2), {}), { read: l, resolveKeyframes: a2, update: u2, preRender: c, render: f2, postRender: d3 } = o, g4 = () => {
      const p2 = performance.now();
      n = false, i.delta = r ? 1e3 / 60 : Math.max(Math.min(p2 - i.timestamp, c1), 1), i.timestamp = p2, i.isProcessing = true, l.process(i), a2.process(i), u2.process(i), c.process(i), f2.process(i), d3.process(i), i.isProcessing = false, n && t && (r = false, e(g4));
    }, y2 = () => {
      n = true, r = true, i.isProcessing || e(g4);
    };
    return { schedule: Bi.reduce((p2, h) => {
      const m = o[h];
      return p2[h] = (S3, C3 = false, T3 = false) => (n || y2(), m.schedule(S3, C3, T3)), p2;
    }, {}), cancel: (p2) => {
      for (let h = 0; h < Bi.length; h++) o[Bi[h]].cancel(p2);
    }, state: i, steps: o };
  }
  var { schedule: U, cancel: Bt, state: ae, steps: _o } = Zp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ne, true);
  var qp = w.createContext({ strict: false });
  var af = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] };
  var qn = {};
  for (const e in af) qn[e] = { isEnabled: (t) => af[e].some((n) => !!t[n]) };
  function f1(e) {
    for (const t in e) qn[t] = { ...qn[t], ...e[t] };
  }
  var d1 = /* @__PURE__ */ new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
  function Rs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || d1.has(e);
  }
  var Jp = (e) => !Rs(e);
  function h1(e) {
    e && (Jp = (t) => t.startsWith("on") ? !Rs(t) : e(t));
  }
  try {
    h1(__require("@emotion/is-prop-valid").default);
  } catch {
  }
  function p1(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (Jp(i) || n === true && Rs(i) || !t && !Rs(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r;
  }
  function m1(e) {
    if (typeof Proxy > "u") return e;
    const t = /* @__PURE__ */ new Map(), n = (...r) => e(...r);
    return new Proxy(n, { get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)) });
  }
  var to = w.createContext({});
  function ri(e) {
    return typeof e == "string" || Array.isArray(e);
  }
  function no(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function";
  }
  var fu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
  var du = ["initial", ...fu];
  function ro(e) {
    return no(e.animate) || du.some((t) => ri(e[t]));
  }
  function em(e) {
    return !!(ro(e) || e.variants);
  }
  function g1(e, t) {
    if (ro(e)) {
      const { initial: n, animate: r } = e;
      return { initial: n === false || ri(n) ? n : void 0, animate: ri(r) ? r : void 0 };
    }
    return e.inherit !== false ? t : {};
  }
  function v1(e) {
    const { initial: t, animate: n } = g1(e, w.useContext(to));
    return w.useMemo(() => ({ initial: t, animate: n }), [uf(t), uf(n)]);
  }
  function uf(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  var y1 = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
  function Dn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
  }
  function x1(e, t, n) {
    return w.useCallback((r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Dn(n) && (n.current = r));
    }, [t]);
  }
  var hu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
  var w1 = "framerAppearId";
  var tm = "data-" + hu(w1);
  var { schedule: pu } = Zp(queueMicrotask, false);
  var nm = w.createContext({});
  function S1(e, t, n, r, i) {
    var s, o;
    const { visualElement: l } = w.useContext(to), a2 = w.useContext(qp), u2 = w.useContext(eo), c = w.useContext(au).reducedMotion, f2 = w.useRef(null);
    r = r || a2.renderer, !f2.current && r && (f2.current = r(e, { visualState: t, parent: l, props: n, presenceContext: u2, blockInitialAnimation: u2 ? u2.initial === false : false, reducedMotionConfig: c }));
    const d3 = f2.current, g4 = w.useContext(nm);
    d3 && !d3.projection && i && (d3.type === "html" || d3.type === "svg") && P1(f2.current, n, i, g4);
    const y2 = w.useRef(false);
    w.useInsertionEffect(() => {
      d3 && y2.current && d3.update(n, u2);
    });
    const x3 = n[tm], P3 = w.useRef(!!x3 && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, x3)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, x3)));
    return Xp(() => {
      d3 && (y2.current = true, window.MotionIsMounted = true, d3.updateFeatures(), pu.render(d3.render), P3.current && d3.animationState && d3.animationState.animateChanges());
    }), w.useEffect(() => {
      d3 && (!P3.current && d3.animationState && d3.animationState.animateChanges(), P3.current && (queueMicrotask(() => {
        var p2;
        (p2 = window.MotionHandoffMarkAsComplete) === null || p2 === void 0 || p2.call(window, x3);
      }), P3.current = false));
    }), d3;
  }
  function P1(e, t, n, r) {
    const { layoutId: i, layout: s, drag: o, dragConstraints: l, layoutScroll: a2, layoutRoot: u2 } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : rm(e.parent)), e.projection.setOptions({ layoutId: i, layout: s, alwaysMeasureLayout: !!o || l && Dn(l), visualElement: e, animationType: typeof s == "string" ? s : "both", initialPromotionConfig: r, layoutScroll: a2, layoutRoot: u2 });
  }
  function rm(e) {
    if (e) return e.options.allowProjection !== false ? e.projection : rm(e.parent);
  }
  function C1({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
    var s, o;
    e && f1(e);
    function l(u2, c) {
      let f2;
      const d3 = { ...w.useContext(au), ...u2, layoutId: k1(u2) }, { isStatic: g4 } = d3, y2 = v1(u2), x3 = r(u2, g4);
      if (!g4 && uu) {
        E1();
        const P3 = T1(d3);
        f2 = P3.MeasureLayout, y2.visualElement = S1(i, x3, d3, t, P3.ProjectionNode);
      }
      return v.jsxs(to.Provider, { value: y2, children: [f2 && y2.visualElement ? v.jsx(f2, { visualElement: y2.visualElement, ...d3 }) : null, n(i, u2, x1(x3, y2.visualElement, c), x3, g4, y2.visualElement)] });
    }
    l.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
    const a2 = w.forwardRef(l);
    return a2[y1] = i, a2;
  }
  function k1({ layoutId: e }) {
    const t = w.useContext(ou).id;
    return t && e !== void 0 ? t + "-" + e : e;
  }
  function E1(e, t) {
    w.useContext(qp).strict;
  }
  function T1(e) {
    const { drag: t, layout: n } = qn;
    if (!t && !n) return {};
    const r = { ...t, ...n };
    return { MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0, ProjectionNode: r.ProjectionNode };
  }
  var j1 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
  function mu(e) {
    return typeof e != "string" || e.includes("-") ? false : !!(j1.indexOf(e) > -1 || /[A-Z]/u.test(e));
  }
  function cf(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
      t[0][r] = n.get(), t[1][r] = n.getVelocity();
    }), t;
  }
  function gu(e, t, n, r) {
    if (typeof t == "function") {
      const [i, s] = cf(r);
      t = t(n !== void 0 ? n : e.custom, i, s);
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
      const [i, s] = cf(r);
      t = t(n !== void 0 ? n : e.custom, i, s);
    }
    return t;
  }
  var Kl = (e) => Array.isArray(e);
  var N1 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue);
  var R1 = (e) => Kl(e) ? e[e.length - 1] || 0 : e;
  var ge = (e) => !!(e && e.getVelocity);
  function ts(e) {
    const t = ge(e) ? e.get() : e;
    return N1(t) ? t.toValue() : t;
  }
  function M1({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, i, s) {
    const o = { latestValues: A1(r, i, s, e), renderState: t() };
    return n && (o.onMount = (l) => n({ props: r, current: l, ...o }), o.onUpdate = (l) => n(l)), o;
  }
  var im = (e) => (t, n) => {
    const r = w.useContext(to), i = w.useContext(eo), s = () => M1(e, t, r, i);
    return n ? s() : lu(s);
  };
  function A1(e, t, n, r) {
    const i = {}, s = r(e, {});
    for (const d3 in s) i[d3] = ts(s[d3]);
    let { initial: o, animate: l } = e;
    const a2 = ro(e), u2 = em(e);
    t && u2 && !a2 && e.inherit !== false && (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
    let c = n ? n.initial === false : false;
    c = c || o === false;
    const f2 = c ? l : o;
    if (f2 && typeof f2 != "boolean" && !no(f2)) {
      const d3 = Array.isArray(f2) ? f2 : [f2];
      for (let g4 = 0; g4 < d3.length; g4++) {
        const y2 = gu(e, d3[g4]);
        if (y2) {
          const { transitionEnd: x3, transition: P3, ...p2 } = y2;
          for (const h in p2) {
            let m = p2[h];
            if (Array.isArray(m)) {
              const S3 = c ? m.length - 1 : 0;
              m = m[S3];
            }
            m !== null && (i[h] = m);
          }
          for (const h in x3) i[h] = x3[h];
        }
      }
    }
    return i;
  }
  var ir = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
  var yn = new Set(ir);
  var sm = (e) => (t) => typeof t == "string" && t.startsWith(e);
  var om = sm("--");
  var L1 = sm("var(--");
  var vu = (e) => L1(e) ? D1.test(e.split("/*")[0].trim()) : false;
  var D1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  var lm = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
  var vt = (e, t, n) => n > t ? t : n < e ? e : n;
  var sr = { test: (e) => typeof e == "number", parse: parseFloat, transform: (e) => e };
  var ii = { ...sr, transform: (e) => vt(0, 1, e) };
  var Ui = { ...sr, default: 1 };
  var mi = (e) => ({ test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1, parse: parseFloat, transform: (t) => `${t}${e}` });
  var St = mi("deg");
  var rt = mi("%");
  var M = mi("px");
  var V1 = mi("vh");
  var _1 = mi("vw");
  var ff = { ...rt, parse: (e) => rt.parse(e) / 100, transform: (e) => rt.transform(e * 100) };
  var I1 = { borderWidth: M, borderTopWidth: M, borderRightWidth: M, borderBottomWidth: M, borderLeftWidth: M, borderRadius: M, radius: M, borderTopLeftRadius: M, borderTopRightRadius: M, borderBottomRightRadius: M, borderBottomLeftRadius: M, width: M, maxWidth: M, height: M, maxHeight: M, top: M, right: M, bottom: M, left: M, padding: M, paddingTop: M, paddingRight: M, paddingBottom: M, paddingLeft: M, margin: M, marginTop: M, marginRight: M, marginBottom: M, marginLeft: M, backgroundPositionX: M, backgroundPositionY: M };
  var O1 = { rotate: St, rotateX: St, rotateY: St, rotateZ: St, scale: Ui, scaleX: Ui, scaleY: Ui, scaleZ: Ui, skew: St, skewX: St, skewY: St, distance: M, translateX: M, translateY: M, translateZ: M, x: M, y: M, z: M, perspective: M, transformPerspective: M, opacity: ii, originX: ff, originY: ff, originZ: M };
  var df = { ...sr, transform: Math.round };
  var yu = { ...I1, ...O1, zIndex: df, size: M, fillOpacity: ii, strokeOpacity: ii, numOctaves: df };
  var F1 = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" };
  var z1 = ir.length;
  function B1(e, t, n) {
    let r = "", i = true;
    for (let s = 0; s < z1; s++) {
      const o = ir[s], l = e[o];
      if (l === void 0) continue;
      let a2 = true;
      if (typeof l == "number" ? a2 = l === (o.startsWith("scale") ? 1 : 0) : a2 = parseFloat(l) === 0, !a2 || n) {
        const u2 = lm(l, yu[o]);
        if (!a2) {
          i = false;
          const c = F1[o] || o;
          r += `${c}(${u2}) `;
        }
        n && (t[o] = u2);
      }
    }
    return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
  }
  function xu(e, t, n) {
    const { style: r, vars: i, transformOrigin: s } = e;
    let o = false, l = false;
    for (const a2 in t) {
      const u2 = t[a2];
      if (yn.has(a2)) {
        o = true;
        continue;
      } else if (om(a2)) {
        i[a2] = u2;
        continue;
      } else {
        const c = lm(u2, yu[a2]);
        a2.startsWith("origin") ? (l = true, s[a2] = c) : r[a2] = c;
      }
    }
    if (t.transform || (o || n ? r.transform = B1(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
      const { originX: a2 = "50%", originY: u2 = "50%", originZ: c = 0 } = s;
      r.transformOrigin = `${a2} ${u2} ${c}`;
    }
  }
  var U1 = { offset: "stroke-dashoffset", array: "stroke-dasharray" };
  var $1 = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function W1(e, t, n = 1, r = 0, i = true) {
    e.pathLength = 1;
    const s = i ? U1 : $1;
    e[s.offset] = M.transform(-r);
    const o = M.transform(t), l = M.transform(n);
    e[s.array] = `${o} ${l}`;
  }
  function hf(e, t, n) {
    return typeof e == "string" ? e : M.transform(t + n * e);
  }
  function b1(e, t, n) {
    const r = hf(t, e.x, e.width), i = hf(n, e.y, e.height);
    return `${r} ${i}`;
  }
  function wu(e, { attrX: t, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: l = 1, pathOffset: a2 = 0, ...u2 }, c, f2) {
    if (xu(e, u2, f2), c) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
    }
    e.attrs = e.style, e.style = {};
    const { attrs: d3, style: g4, dimensions: y2 } = e;
    d3.transform && (y2 && (g4.transform = d3.transform), delete d3.transform), y2 && (i !== void 0 || s !== void 0 || g4.transform) && (g4.transformOrigin = b1(y2, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (d3.x = t), n !== void 0 && (d3.y = n), r !== void 0 && (d3.scale = r), o !== void 0 && W1(d3, o, l, a2, false);
  }
  var Su = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
  var am = () => ({ ...Su(), attrs: {} });
  var Pu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
  function um(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n) e.style.setProperty(s, n[s]);
  }
  var cm = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
  function fm(e, t, n, r) {
    um(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(cm.has(i) ? i : hu(i), t.attrs[i]);
  }
  var Ms = {};
  function H1(e) {
    Object.assign(Ms, e);
  }
  function dm(e, { layout: t, layoutId: n }) {
    return yn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ms[e] || e === "opacity");
  }
  function Cu(e, t, n) {
    var r;
    const { style: i } = e, s = {};
    for (const o in i) (ge(i[o]) || t.style && ge(t.style[o]) || dm(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
    return s;
  }
  function hm(e, t, n) {
    const r = Cu(e, t, n);
    for (const i in e) if (ge(e[i]) || ge(t[i])) {
      const s = ir.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[s] = e[i];
    }
    return r;
  }
  function K1(e, t) {
    try {
      t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
    } catch {
      t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
    }
  }
  var pf = ["x", "y", "width", "height", "cx", "cy", "r"];
  var G1 = { useVisualState: im({ scrapeMotionValuesFromProps: hm, createRenderState: am, onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: i }) => {
    if (!n) return;
    let s = !!e.drag;
    if (!s) {
      for (const l in i) if (yn.has(l)) {
        s = true;
        break;
      }
    }
    if (!s) return;
    let o = !t;
    if (t) for (let l = 0; l < pf.length; l++) {
      const a2 = pf[l];
      e[a2] !== t[a2] && (o = true);
    }
    o && U.read(() => {
      K1(n, r), U.render(() => {
        wu(r, i, Pu(n.tagName), e.transformTemplate), fm(n, r);
      });
    });
  } }) };
  var Q1 = { useVisualState: im({ scrapeMotionValuesFromProps: Cu, createRenderState: Su }) };
  function pm(e, t, n) {
    for (const r in t) !ge(t[r]) && !dm(r, n) && (e[r] = t[r]);
  }
  function X1({ transformTemplate: e }, t) {
    return w.useMemo(() => {
      const n = Su();
      return xu(n, t, e), Object.assign({}, n.vars, n.style);
    }, [t]);
  }
  function Y1(e, t) {
    const n = e.style || {}, r = {};
    return pm(r, n, e), Object.assign(r, X1(e, t)), r;
  }
  function Z1(e, t) {
    const n = {}, r = Y1(e, t);
    return e.drag && e.dragListener !== false && (n.draggable = false, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === true ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
  }
  function q1(e, t, n, r) {
    const i = w.useMemo(() => {
      const s = am();
      return wu(s, t, Pu(r), e.transformTemplate), { ...s.attrs, style: { ...s.style } };
    }, [t]);
    if (e.style) {
      const s = {};
      pm(s, e.style, e), i.style = { ...s, ...i.style };
    }
    return i;
  }
  function J1(e = false) {
    return (n, r, i, { latestValues: s }, o) => {
      const a2 = (mu(n) ? q1 : Z1)(r, s, o, n), u2 = p1(r, typeof n == "string", e), c = n !== w.Fragment ? { ...u2, ...a2, ref: i } : {}, { children: f2 } = r, d3 = w.useMemo(() => ge(f2) ? f2.get() : f2, [f2]);
      return w.createElement(n, { ...c, children: d3 });
    };
  }
  function ex(e, t) {
    return function(r, { forwardMotionProps: i } = { forwardMotionProps: false }) {
      const o = { ...mu(r) ? G1 : Q1, preloadedFeatures: e, useRender: J1(i), createVisualElement: t, Component: r };
      return C1(o);
    };
  }
  function mm(e, t) {
    if (!Array.isArray(t)) return false;
    const n = t.length;
    if (n !== e.length) return false;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return false;
    return true;
  }
  function io(e, t, n) {
    const r = e.getProps();
    return gu(r, t, n !== void 0 ? n : r.custom, e);
  }
  var tx = cu(() => window.ScrollTimeline !== void 0);
  var nx = class {
    constructor(t) {
      this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
    }
    get finished() {
      return Promise.all(this.animations.map((t) => "finished" in t ? t.finished : t));
    }
    getAll(t) {
      return this.animations[0][t];
    }
    setAll(t, n) {
      for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
    }
    attachTimeline(t, n) {
      const r = this.animations.map((i) => {
        if (tx() && i.attachTimeline) return i.attachTimeline(t);
        if (typeof n == "function") return n(i);
      });
      return () => {
        r.forEach((i, s) => {
          i && i(), this.animations[s].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(t) {
      this.setAll("time", t);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(t) {
      this.setAll("speed", t);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let t = 0;
      for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
      return t;
    }
    runAll(t) {
      this.animations.forEach((n) => n[t]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  };
  var rx = class extends nx {
    then(t, n) {
      return Promise.all(this.animations).then(t).catch(n);
    }
  };
  function ku(e, t) {
    return e ? e[t] || e.default || e : void 0;
  }
  var Gl = 2e4;
  function gm(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Gl; ) t += n, r = e.next(t);
    return t >= Gl ? 1 / 0 : t;
  }
  function Eu(e) {
    return typeof e == "function";
  }
  function mf(e, t) {
    e.timeline = t, e.onfinish = null;
  }
  var Tu = (e) => Array.isArray(e) && typeof e[0] == "number";
  var ix = { linearEasing: void 0 };
  function sx(e, t) {
    const n = cu(e);
    return () => {
      var r;
      return (r = ix[t]) !== null && r !== void 0 ? r : n();
    };
  }
  var As = sx(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return false;
    }
    return true;
  }, "linearEasing");
  var vm = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(Zn(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
  function ym(e) {
    return !!(typeof e == "function" && As() || !e || typeof e == "string" && (e in Ql || As()) || Tu(e) || Array.isArray(e) && e.every(ym));
  }
  var Sr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`;
  var Ql = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: Sr([0, 0.65, 0.55, 1]), circOut: Sr([0.55, 0, 1, 0.45]), backIn: Sr([0.31, 0.01, 0.66, -0.59]), backOut: Sr([0.33, 1.53, 0.69, 0.99]) };
  function xm(e, t) {
    if (e) return typeof e == "function" && As() ? vm(e, t) : Tu(e) ? Sr(e) : Array.isArray(e) ? e.map((n) => xm(n, t) || Ql.easeOut) : Ql[e];
  }
  var He = { x: false, y: false };
  function wm() {
    return He.x || He.y;
  }
  function ox(e, t, n) {
    var r;
    if (e instanceof Element) return [e];
    if (typeof e == "string") {
      let i = document;
      const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
      return s ? Array.from(s) : [];
    }
    return Array.from(e);
  }
  function Sm(e, t) {
    const n = ox(e), r = new AbortController(), i = { passive: true, ...t, signal: r.signal };
    return [n, i, () => r.abort()];
  }
  function gf(e) {
    return (t) => {
      t.pointerType === "touch" || wm() || e(t);
    };
  }
  function lx(e, t, n = {}) {
    const [r, i, s] = Sm(e, n), o = gf((l) => {
      const { target: a2 } = l, u2 = t(l);
      if (typeof u2 != "function" || !a2) return;
      const c = gf((f2) => {
        u2(f2), a2.removeEventListener("pointerleave", c);
      });
      a2.addEventListener("pointerleave", c, i);
    });
    return r.forEach((l) => {
      l.addEventListener("pointerenter", o, i);
    }), s;
  }
  var Pm = (e, t) => t ? e === t ? true : Pm(e, t.parentElement) : false;
  var ju = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== false;
  var ax = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
  function ux(e) {
    return ax.has(e.tagName) || e.tabIndex !== -1;
  }
  var Pr = /* @__PURE__ */ new WeakSet();
  function vf(e) {
    return (t) => {
      t.key === "Enter" && e(t);
    };
  }
  function Io(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: true, bubbles: true }));
  }
  var cx = (e, t) => {
    const n = e.currentTarget;
    if (!n) return;
    const r = vf(() => {
      if (Pr.has(n)) return;
      Io(n, "down");
      const i = vf(() => {
        Io(n, "up");
      }), s = () => Io(n, "cancel");
      n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
    });
    n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
  };
  function yf(e) {
    return ju(e) && !wm();
  }
  function fx(e, t, n = {}) {
    const [r, i, s] = Sm(e, n), o = (l) => {
      const a2 = l.currentTarget;
      if (!yf(l) || Pr.has(a2)) return;
      Pr.add(a2);
      const u2 = t(l), c = (g4, y2) => {
        window.removeEventListener("pointerup", f2), window.removeEventListener("pointercancel", d3), !(!yf(g4) || !Pr.has(a2)) && (Pr.delete(a2), typeof u2 == "function" && u2(g4, { success: y2 }));
      }, f2 = (g4) => {
        c(g4, n.useGlobalTarget || Pm(a2, g4.target));
      }, d3 = (g4) => {
        c(g4, false);
      };
      window.addEventListener("pointerup", f2, i), window.addEventListener("pointercancel", d3, i);
    };
    return r.forEach((l) => {
      !ux(l) && l.getAttribute("tabindex") === null && (l.tabIndex = 0), (n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, i), l.addEventListener("focus", (u2) => cx(u2, i), i);
    }), s;
  }
  function dx(e) {
    return e === "x" || e === "y" ? He[e] ? null : (He[e] = true, () => {
      He[e] = false;
    }) : He.x || He.y ? null : (He.x = He.y = true, () => {
      He.x = He.y = false;
    });
  }
  var Cm = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", ...ir]);
  var ns;
  function hx() {
    ns = void 0;
  }
  var it = { now: () => (ns === void 0 && it.set(ae.isProcessing || a1.useManualTiming ? ae.timestamp : performance.now()), ns), set: (e) => {
    ns = e, queueMicrotask(hx);
  } };
  function Nu(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function Ru(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  var Mu = class {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      return Nu(this.subscriptions, t), () => Ru(this.subscriptions, t);
    }
    notify(t, n, r) {
      const i = this.subscriptions.length;
      if (i) if (i === 1) this.subscriptions[0](t, n, r);
      else for (let s = 0; s < i; s++) {
        const o = this.subscriptions[s];
        o && o(t, n, r);
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  };
  function km(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  var xf = 30;
  var px = (e) => !isNaN(parseFloat(e));
  var wf = { current: void 0 };
  var mx = class {
    constructor(t, n = {}) {
      this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = true) => {
        const s = it.now();
        this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }, this.hasAnimated = false, this.setCurrent(t), this.owner = n.owner;
    }
    setCurrent(t) {
      this.current = t, this.updatedAt = it.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = px(this.current));
    }
    setPrevFrameValue(t = this.current) {
      this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(t) {
      return this.on("change", t);
    }
    on(t, n) {
      this.events[t] || (this.events[t] = new Mu());
      const r = this.events[t].add(n);
      return t === "change" ? () => {
        r(), U.read(() => {
          this.events.change.getSize() || this.stop();
        });
      } : r;
    }
    clearListeners() {
      for (const t in this.events) this.events[t].clear();
    }
    attach(t, n) {
      this.passiveEffect = t, this.stopPassiveEffect = n;
    }
    set(t, n = true) {
      !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
    }
    setWithVelocity(t, n, r) {
      this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
    }
    jump(t, n = true) {
      this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return wf.current && wf.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      const t = it.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > xf) return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, xf);
      return km(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
    }
    start(t) {
      return this.stop(), new Promise((n) => {
        this.hasAnimated = true, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      });
    }
    stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
  function si(e, t) {
    return new mx(e, t);
  }
  function gx(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, si(n));
  }
  function vx(e, t) {
    const n = io(e, t);
    let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
    s = { ...s, ...r };
    for (const o in s) {
      const l = R1(s[o]);
      gx(e, o, l);
    }
  }
  function yx(e) {
    return !!(ge(e) && e.add);
  }
  function Xl(e, t) {
    const n = e.getValue("willChange");
    if (yx(n)) return n.add(t);
  }
  function Em(e) {
    return e.props[tm];
  }
  var Tm = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
  var xx = 1e-7;
  var wx = 12;
  function Sx(e, t, n, r, i) {
    let s, o, l = 0;
    do
      o = t + (n - t) / 2, s = Tm(o, r, i) - e, s > 0 ? n = o : t = o;
    while (Math.abs(s) > xx && ++l < wx);
    return o;
  }
  function gi(e, t, n, r) {
    if (e === t && n === r) return Ne;
    const i = (s) => Sx(s, 0, 1, e, n);
    return (s) => s === 0 || s === 1 ? s : Tm(i(s), t, r);
  }
  var jm = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
  var Nm = (e) => (t) => 1 - e(1 - t);
  var Rm = gi(0.33, 1.53, 0.69, 0.99);
  var Au = Nm(Rm);
  var Mm = jm(Au);
  var Am = (e) => (e *= 2) < 1 ? 0.5 * Au(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
  var Lu = (e) => 1 - Math.sin(Math.acos(e));
  var Lm = Nm(Lu);
  var Dm = jm(Lu);
  var Vm = (e) => /^0[^.\s]+$/u.test(e);
  function Px(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Vm(e) : true;
  }
  var Dr = (e) => Math.round(e * 1e5) / 1e5;
  var Du = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function Cx(e) {
    return e == null;
  }
  var kx = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
  var Vu = (e, t) => (n) => !!(typeof n == "string" && kx.test(n) && n.startsWith(e) || t && !Cx(n) && Object.prototype.hasOwnProperty.call(n, t));
  var _m = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, l] = r.match(Du);
    return { [e]: parseFloat(i), [t]: parseFloat(s), [n]: parseFloat(o), alpha: l !== void 0 ? parseFloat(l) : 1 };
  };
  var Ex = (e) => vt(0, 255, e);
  var Oo = { ...sr, transform: (e) => Math.round(Ex(e)) };
  var rn = { test: Vu("rgb", "red"), parse: _m("red", "green", "blue"), transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Oo.transform(e) + ", " + Oo.transform(t) + ", " + Oo.transform(n) + ", " + Dr(ii.transform(r)) + ")" };
  function Tx(e) {
    let t = "", n = "", r = "", i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: i ? parseInt(i, 16) / 255 : 1 };
  }
  var Yl = { test: Vu("#"), parse: Tx, transform: rn.transform };
  var Vn = { test: Vu("hsl", "hue"), parse: _m("hue", "saturation", "lightness"), transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + rt.transform(Dr(t)) + ", " + rt.transform(Dr(n)) + ", " + Dr(ii.transform(r)) + ")" };
  var pe = { test: (e) => rn.test(e) || Yl.test(e) || Vn.test(e), parse: (e) => rn.test(e) ? rn.parse(e) : Vn.test(e) ? Vn.parse(e) : Yl.parse(e), transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? rn.transform(e) : Vn.transform(e) };
  var jx = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function Nx(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Du)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(jx)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
  }
  var Im = "number";
  var Om = "color";
  var Rx = "var";
  var Mx = "var(";
  var Sf = "${}";
  var Ax = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function oi(e) {
    const t = e.toString(), n = [], r = { color: [], number: [], var: [] }, i = [];
    let s = 0;
    const l = t.replace(Ax, (a2) => (pe.test(a2) ? (r.color.push(s), i.push(Om), n.push(pe.parse(a2))) : a2.startsWith(Mx) ? (r.var.push(s), i.push(Rx), n.push(a2)) : (r.number.push(s), i.push(Im), n.push(parseFloat(a2))), ++s, Sf)).split(Sf);
    return { values: n, split: l, indexes: r, types: i };
  }
  function Fm(e) {
    return oi(e).values;
  }
  function zm(e) {
    const { split: t, types: n } = oi(e), r = t.length;
    return (i) => {
      let s = "";
      for (let o = 0; o < r; o++) if (s += t[o], i[o] !== void 0) {
        const l = n[o];
        l === Im ? s += Dr(i[o]) : l === Om ? s += pe.transform(i[o]) : s += i[o];
      }
      return s;
    };
  }
  var Lx = (e) => typeof e == "number" ? 0 : e;
  function Dx(e) {
    const t = Fm(e);
    return zm(e)(t.map(Lx));
  }
  var Ut = { test: Nx, parse: Fm, createTransformer: zm, getAnimatableNone: Dx };
  var Vx = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function _x(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Du) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let s = Vx.has(t) ? 1 : 0;
    return r !== n && (s *= 100), t + "(" + s + i + ")";
  }
  var Ix = /\b([a-z-]*)\(.*?\)/gu;
  var Zl = { ...Ut, getAnimatableNone: (e) => {
    const t = e.match(Ix);
    return t ? t.map(_x).join(" ") : e;
  } };
  var Ox = { ...yu, color: pe, backgroundColor: pe, outlineColor: pe, fill: pe, stroke: pe, borderColor: pe, borderTopColor: pe, borderRightColor: pe, borderBottomColor: pe, borderLeftColor: pe, filter: Zl, WebkitFilter: Zl };
  var _u = (e) => Ox[e];
  function Bm(e, t) {
    let n = _u(e);
    return n !== Zl && (n = Ut), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
  }
  var Fx = /* @__PURE__ */ new Set(["auto", "none", "0"]);
  function zx(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
      const s = e[r];
      typeof s == "string" && !Fx.has(s) && oi(s).values.length && (i = e[r]), r++;
    }
    if (i && n) for (const s of t) e[s] = Bm(n, i);
  }
  var Pf = (e) => e === sr || e === M;
  var Cf = (e, t) => parseFloat(e.split(", ")[t]);
  var kf = (e, t) => (n, { transform: r }) => {
    if (r === "none" || !r) return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i) return Cf(i[1], t);
    {
      const s = r.match(/^matrix\((.+)\)$/u);
      return s ? Cf(s[1], e) : 0;
    }
  };
  var Bx = /* @__PURE__ */ new Set(["x", "y", "z"]);
  var Ux = ir.filter((e) => !Bx.has(e));
  function $x(e) {
    const t = [];
    return Ux.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }), t;
  }
  var Jn = { width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n), height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n), top: (e, { top: t }) => parseFloat(t), left: (e, { left: t }) => parseFloat(t), bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min), right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min), x: kf(4, 13), y: kf(5, 14) };
  Jn.translateX = Jn.x;
  Jn.translateY = Jn.y;
  var ln = /* @__PURE__ */ new Set();
  var ql = false;
  var Jl = false;
  function Um() {
    if (Jl) {
      const e = Array.from(ln).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
      t.forEach((r) => {
        const i = $x(r);
        i.length && (n.set(r, i), r.render());
      }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i && i.forEach(([s, o]) => {
          var l;
          (l = r.getValue(s)) === null || l === void 0 || l.set(o);
        });
      }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
    }
    Jl = false, ql = false, ln.forEach((e) => e.complete()), ln.clear();
  }
  function $m() {
    ln.forEach((e) => {
      e.readKeyframes(), e.needsMeasurement && (Jl = true);
    });
  }
  function Wx() {
    $m(), Um();
  }
  var Iu = class {
    constructor(t, n, r, i, s, o = false) {
      this.isComplete = false, this.isAsync = false, this.needsMeasurement = false, this.isScheduled = false, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o;
    }
    scheduleResolve() {
      this.isScheduled = true, this.isAsync ? (ln.add(this), ql || (ql = true, U.read($m), U.resolveKeyframes(Um))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
      for (let s = 0; s < t.length; s++) if (t[s] === null) if (s === 0) {
        const o = i == null ? void 0 : i.get(), l = t[t.length - 1];
        if (o !== void 0) t[0] = o;
        else if (r && n) {
          const a2 = r.readValue(n, l);
          a2 != null && (t[0] = a2);
        }
        t[0] === void 0 && (t[0] = l), i && o === void 0 && i.set(t[0]);
      } else t[s] = t[s - 1];
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete() {
      this.isComplete = true, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ln.delete(this);
    }
    cancel() {
      this.isComplete || (this.isScheduled = false, ln.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  };
  var Wm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
  var bx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function Hx(e) {
    const t = bx.exec(e);
    if (!t) return [,];
    const [, n, r, i] = t;
    return [`--${n ?? r}`, i];
  }
  function bm(e, t, n = 1) {
    const [r, i] = Hx(e);
    if (!r) return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
      const o = s.trim();
      return Wm(o) ? parseFloat(o) : o;
    }
    return vu(i) ? bm(i, t, n + 1) : i;
  }
  var Hm = (e) => (t) => t.test(e);
  var Kx = { test: (e) => e === "auto", parse: (e) => e };
  var Km = [sr, M, rt, St, _1, V1, Kx];
  var Ef = (e) => Km.find(Hm(e));
  var Gm = class extends Iu {
    constructor(t, n, r, i, s) {
      super(t, n, r, i, s, true);
    }
    readKeyframes() {
      const { unresolvedKeyframes: t, element: n, name: r } = this;
      if (!n || !n.current) return;
      super.readKeyframes();
      for (let a2 = 0; a2 < t.length; a2++) {
        let u2 = t[a2];
        if (typeof u2 == "string" && (u2 = u2.trim(), vu(u2))) {
          const c = bm(u2, n.current);
          c !== void 0 && (t[a2] = c), a2 === t.length - 1 && (this.finalKeyframe = u2);
        }
      }
      if (this.resolveNoneKeyframes(), !Cm.has(r) || t.length !== 2) return;
      const [i, s] = t, o = Ef(i), l = Ef(s);
      if (o !== l) if (Pf(o) && Pf(l)) for (let a2 = 0; a2 < t.length; a2++) {
        const u2 = t[a2];
        typeof u2 == "string" && (t[a2] = parseFloat(u2));
      }
      else this.needsMeasurement = true;
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: t, name: n } = this, r = [];
      for (let i = 0; i < t.length; i++) Px(t[i]) && r.push(i);
      r.length && zx(t, r, n);
    }
    measureInitialState() {
      const { element: t, unresolvedKeyframes: n, name: r } = this;
      if (!t || !t.current) return;
      r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Jn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
      const i = n[n.length - 1];
      i !== void 0 && t.getValue(r, i).jump(i, false);
    }
    measureEndState() {
      var t;
      const { element: n, name: r, unresolvedKeyframes: i } = this;
      if (!n || !n.current) return;
      const s = n.getValue(r);
      s && s.jump(this.measuredOrigin, false);
      const o = i.length - 1, l = i[o];
      i[o] = Jn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([a2, u2]) => {
        n.getValue(a2).set(u2);
      }), this.resolveNoneKeyframes();
    }
  };
  var Tf = (e, t) => t === "zIndex" ? false : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Ut.test(e) || e === "0") && !e.startsWith("url("));
  function Gx(e) {
    const t = e[0];
    if (e.length === 1) return true;
    for (let n = 0; n < e.length; n++) if (e[n] !== t) return true;
  }
  function Qx(e, t, n, r) {
    const i = e[0];
    if (i === null) return false;
    if (t === "display" || t === "visibility") return true;
    const s = e[e.length - 1], o = Tf(i, t), l = Tf(s, t);
    return !o || !l ? false : Gx(e) || (n === "spring" || Eu(n)) && r;
  }
  var Xx = (e) => e !== null;
  function so(e, { repeat: t, repeatType: n = "loop" }, r) {
    const i = e.filter(Xx), s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r;
  }
  var Yx = 40;
  var Qm = class {
    constructor({ autoplay: t = true, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o = "loop", ...l }) {
      this.isStopped = false, this.hasAttemptedResolve = false, this.createdAt = it.now(), this.options = { autoplay: t, delay: n, type: r, repeat: i, repeatDelay: s, repeatType: o, ...l }, this.updateFinishedPromise();
    }
    calcStartTime() {
      return this.resolvedAt ? this.resolvedAt - this.createdAt > Yx ? this.resolvedAt : this.createdAt : this.createdAt;
    }
    get resolved() {
      return !this._resolved && !this.hasAttemptedResolve && Wx(), this._resolved;
    }
    onKeyframesResolved(t, n) {
      this.resolvedAt = it.now(), this.hasAttemptedResolve = true;
      const { name: r, type: i, velocity: s, delay: o, onComplete: l, onUpdate: a2, isGenerator: u2 } = this.options;
      if (!u2 && !Qx(t, r, i, s)) if (o) this.options.duration = 0;
      else {
        a2 && a2(so(t, this.options, n)), l && l(), this.resolveFinishedPromise();
        return;
      }
      const c = this.initPlayback(t, n);
      c !== false && (this._resolved = { keyframes: t, finalKeyframe: n, ...c }, this.onPostResolved());
    }
    onPostResolved() {
    }
    then(t, n) {
      return this.currentFinishedPromise.then(t, n);
    }
    flatten() {
      this.options.type = "keyframes", this.options.ease = "linear";
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((t) => {
        this.resolveFinishedPromise = t;
      });
    }
  };
  var b = (e, t, n) => e + (t - e) * n;
  function Fo(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
  }
  function Zx({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360, t /= 100, n /= 100;
    let i = 0, s = 0, o = 0;
    if (!t) i = s = o = n;
    else {
      const l = n < 0.5 ? n * (1 + t) : n + t - n * t, a2 = 2 * n - l;
      i = Fo(a2, l, e + 1 / 3), s = Fo(a2, l, e), o = Fo(a2, l, e - 1 / 3);
    }
    return { red: Math.round(i * 255), green: Math.round(s * 255), blue: Math.round(o * 255), alpha: r };
  }
  function Ls(e, t) {
    return (n) => n > 0 ? t : e;
  }
  var zo = (e, t, n) => {
    const r = e * e, i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  };
  var qx = [Yl, rn, Vn];
  var Jx = (e) => qx.find((t) => t.test(e));
  function jf(e) {
    const t = Jx(e);
    if (!t) return false;
    let n = t.parse(e);
    return t === Vn && (n = Zx(n)), n;
  }
  var Nf = (e, t) => {
    const n = jf(e), r = jf(t);
    if (!n || !r) return Ls(e, t);
    const i = { ...n };
    return (s) => (i.red = zo(n.red, r.red, s), i.green = zo(n.green, r.green, s), i.blue = zo(n.blue, r.blue, s), i.alpha = b(n.alpha, r.alpha, s), rn.transform(i));
  };
  var ew = (e, t) => (n) => t(e(n));
  var vi = (...e) => e.reduce(ew);
  var ea = /* @__PURE__ */ new Set(["none", "hidden"]);
  function tw(e, t) {
    return ea.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
  }
  function nw(e, t) {
    return (n) => b(e, t, n);
  }
  function Ou(e) {
    return typeof e == "number" ? nw : typeof e == "string" ? vu(e) ? Ls : pe.test(e) ? Nf : sw : Array.isArray(e) ? Xm : typeof e == "object" ? pe.test(e) ? Nf : rw : Ls;
  }
  function Xm(e, t) {
    const n = [...e], r = n.length, i = e.map((s, o) => Ou(s)(s, t[o]));
    return (s) => {
      for (let o = 0; o < r; o++) n[o] = i[o](s);
      return n;
    };
  }
  function rw(e, t) {
    const n = { ...e, ...t }, r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ou(e[i])(e[i], t[i]));
    return (i) => {
      for (const s in r) n[s] = r[s](i);
      return n;
    };
  }
  function iw(e, t) {
    var n;
    const r = [], i = { color: 0, var: 0, number: 0 };
    for (let s = 0; s < t.values.length; s++) {
      const o = t.types[s], l = e.indexes[o][i[o]], a2 = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
      r[s] = a2, i[o]++;
    }
    return r;
  }
  var sw = (e, t) => {
    const n = Ut.createTransformer(t), r = oi(e), i = oi(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? ea.has(e) && !i.values.length || ea.has(t) && !r.values.length ? tw(e, t) : vi(Xm(iw(r, i), i.values), n) : Ls(e, t);
  };
  function Ym(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? b(e, t, n) : Ou(e)(e, t);
  }
  var ow = 5;
  function Zm(e, t, n) {
    const r = Math.max(t - ow, 0);
    return km(n - e(r), t - r);
  }
  var G = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 5e-3, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05, maxDamping: 1 };
  var Bo = 1e-3;
  function lw({ duration: e = G.duration, bounce: t = G.bounce, velocity: n = G.velocity, mass: r = G.mass }) {
    let i, s, o = 1 - t;
    o = vt(G.minDamping, G.maxDamping, o), e = vt(G.minDuration, G.maxDuration, dt(e)), o < 1 ? (i = (u2) => {
      const c = u2 * o, f2 = c * e, d3 = c - n, g4 = ta(u2, o), y2 = Math.exp(-f2);
      return Bo - d3 / g4 * y2;
    }, s = (u2) => {
      const f2 = u2 * o * e, d3 = f2 * n + n, g4 = Math.pow(o, 2) * Math.pow(u2, 2) * e, y2 = Math.exp(-f2), x3 = ta(Math.pow(u2, 2), o);
      return (-i(u2) + Bo > 0 ? -1 : 1) * ((d3 - g4) * y2) / x3;
    }) : (i = (u2) => {
      const c = Math.exp(-u2 * e), f2 = (u2 - n) * e + 1;
      return -Bo + c * f2;
    }, s = (u2) => {
      const c = Math.exp(-u2 * e), f2 = (n - u2) * (e * e);
      return c * f2;
    });
    const l = 5 / e, a2 = uw(i, s, l);
    if (e = ft(e), isNaN(a2)) return { stiffness: G.stiffness, damping: G.damping, duration: e };
    {
      const u2 = Math.pow(a2, 2) * r;
      return { stiffness: u2, damping: o * 2 * Math.sqrt(r * u2), duration: e };
    }
  }
  var aw = 12;
  function uw(e, t, n) {
    let r = n;
    for (let i = 1; i < aw; i++) r = r - e(r) / t(r);
    return r;
  }
  function ta(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  var cw = ["duration", "bounce"];
  var fw = ["stiffness", "damping", "mass"];
  function Rf(e, t) {
    return t.some((n) => e[n] !== void 0);
  }
  function dw(e) {
    let t = { velocity: G.velocity, stiffness: G.stiffness, damping: G.damping, mass: G.mass, isResolvedFromDuration: false, ...e };
    if (!Rf(e, fw) && Rf(e, cw)) if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, s = 2 * vt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: G.mass, stiffness: i, damping: s };
    } else {
      const n = lw(e);
      t = { ...t, ...n, mass: G.mass }, t.isResolvedFromDuration = true;
    }
    return t;
  }
  function qm(e = G.visualDuration, t = G.bounce) {
    const n = typeof e != "object" ? { visualDuration: e, keyframes: [0, 1], bounce: t } : e;
    let { restSpeed: r, restDelta: i } = n;
    const s = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], l = { done: false, value: s }, { stiffness: a2, damping: u2, mass: c, duration: f2, velocity: d3, isResolvedFromDuration: g4 } = dw({ ...n, velocity: -dt(n.velocity || 0) }), y2 = d3 || 0, x3 = u2 / (2 * Math.sqrt(a2 * c)), P3 = o - s, p2 = dt(Math.sqrt(a2 / c)), h = Math.abs(P3) < 5;
    r || (r = h ? G.restSpeed.granular : G.restSpeed.default), i || (i = h ? G.restDelta.granular : G.restDelta.default);
    let m;
    if (x3 < 1) {
      const C3 = ta(p2, x3);
      m = (T3) => {
        const j3 = Math.exp(-x3 * p2 * T3);
        return o - j3 * ((y2 + x3 * p2 * P3) / C3 * Math.sin(C3 * T3) + P3 * Math.cos(C3 * T3));
      };
    } else if (x3 === 1) m = (C3) => o - Math.exp(-p2 * C3) * (P3 + (y2 + p2 * P3) * C3);
    else {
      const C3 = p2 * Math.sqrt(x3 * x3 - 1);
      m = (T3) => {
        const j3 = Math.exp(-x3 * p2 * T3), k4 = Math.min(C3 * T3, 300);
        return o - j3 * ((y2 + x3 * p2 * P3) * Math.sinh(k4) + C3 * P3 * Math.cosh(k4)) / C3;
      };
    }
    const S3 = { calculatedDuration: g4 && f2 || null, next: (C3) => {
      const T3 = m(C3);
      if (g4) l.done = C3 >= f2;
      else {
        let j3 = 0;
        x3 < 1 && (j3 = C3 === 0 ? ft(y2) : Zm(m, C3, T3));
        const k4 = Math.abs(j3) <= r, V2 = Math.abs(o - T3) <= i;
        l.done = k4 && V2;
      }
      return l.value = l.done ? o : T3, l;
    }, toString: () => {
      const C3 = Math.min(gm(S3), Gl), T3 = vm((j3) => S3.next(C3 * j3).value, C3, 30);
      return C3 + "ms " + T3;
    } };
    return S3;
  }
  function Mf({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: s = 500, modifyTarget: o, min: l, max: a2, restDelta: u2 = 0.5, restSpeed: c }) {
    const f2 = e[0], d3 = { done: false, value: f2 }, g4 = (k4) => l !== void 0 && k4 < l || a2 !== void 0 && k4 > a2, y2 = (k4) => l === void 0 ? a2 : a2 === void 0 || Math.abs(l - k4) < Math.abs(a2 - k4) ? l : a2;
    let x3 = n * t;
    const P3 = f2 + x3, p2 = o === void 0 ? P3 : o(P3);
    p2 !== P3 && (x3 = p2 - f2);
    const h = (k4) => -x3 * Math.exp(-k4 / r), m = (k4) => p2 + h(k4), S3 = (k4) => {
      const V2 = h(k4), A5 = m(k4);
      d3.done = Math.abs(V2) <= u2, d3.value = d3.done ? p2 : A5;
    };
    let C3, T3;
    const j3 = (k4) => {
      g4(d3.value) && (C3 = k4, T3 = qm({ keyframes: [d3.value, y2(d3.value)], velocity: Zm(m, k4, d3.value), damping: i, stiffness: s, restDelta: u2, restSpeed: c }));
    };
    return j3(0), { calculatedDuration: null, next: (k4) => {
      let V2 = false;
      return !T3 && C3 === void 0 && (V2 = true, S3(k4), j3(k4)), C3 !== void 0 && k4 >= C3 ? T3.next(k4 - C3) : (!V2 && S3(k4), d3);
    } };
  }
  var hw = gi(0.42, 0, 1, 1);
  var pw = gi(0, 0, 0.58, 1);
  var Jm = gi(0.42, 0, 0.58, 1);
  var mw = (e) => Array.isArray(e) && typeof e[0] != "number";
  var gw = { linear: Ne, easeIn: hw, easeInOut: Jm, easeOut: pw, circIn: Lu, circInOut: Dm, circOut: Lm, backIn: Au, backInOut: Mm, backOut: Rm, anticipate: Am };
  var Af = (e) => {
    if (Tu(e)) {
      Yp(e.length === 4);
      const [t, n, r, i] = e;
      return gi(t, n, r, i);
    } else if (typeof e == "string") return gw[e];
    return e;
  };
  function vw(e, t, n) {
    const r = [], i = n || Ym, s = e.length - 1;
    for (let o = 0; o < s; o++) {
      let l = i(e[o], e[o + 1]);
      if (t) {
        const a2 = Array.isArray(t) ? t[o] || Ne : t;
        l = vi(a2, l);
      }
      r.push(l);
    }
    return r;
  }
  function yw(e, t, { clamp: n = true, ease: r, mixer: i } = {}) {
    const s = e.length;
    if (Yp(s === t.length), s === 1) return () => t[0];
    if (s === 2 && t[0] === t[1]) return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const l = vw(t, r, i), a2 = l.length, u2 = (c) => {
      if (o && c < e[0]) return t[0];
      let f2 = 0;
      if (a2 > 1) for (; f2 < e.length - 2 && !(c < e[f2 + 1]); f2++) ;
      const d3 = Zn(e[f2], e[f2 + 1], c);
      return l[f2](d3);
    };
    return n ? (c) => u2(vt(e[0], e[s - 1], c)) : u2;
  }
  function xw(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
      const i = Zn(0, t, r);
      e.push(b(n, 1, i));
    }
  }
  function ww(e) {
    const t = [0];
    return xw(t, e.length - 1), t;
  }
  function Sw(e, t) {
    return e.map((n) => n * t);
  }
  function Pw(e, t) {
    return e.map(() => t || Jm).splice(0, e.length - 1);
  }
  function Ds({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const i = mw(r) ? r.map(Af) : Af(r), s = { done: false, value: t[0] }, o = Sw(n && n.length === t.length ? n : ww(t), e), l = yw(o, t, { ease: Array.isArray(i) ? i : Pw(t, i) });
    return { calculatedDuration: e, next: (a2) => (s.value = l(a2), s.done = a2 >= e, s) };
  }
  var Cw = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return { start: () => U.update(t, true), stop: () => Bt(t), now: () => ae.isProcessing ? ae.timestamp : it.now() };
  };
  var kw = { decay: Mf, inertia: Mf, tween: Ds, keyframes: Ds, spring: qm };
  var Ew = (e) => e / 100;
  var Fu = class extends Qm {
    constructor(t) {
      super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
        if (this.resolver.cancel(), this.isStopped = true, this.state === "idle") return;
        this.teardown();
        const { onStop: a2 } = this.options;
        a2 && a2();
      };
      const { name: n, motionValue: r, element: i, keyframes: s } = this.options, o = (i == null ? void 0 : i.KeyframeResolver) || Iu, l = (a2, u2) => this.onKeyframesResolved(a2, u2);
      this.resolver = new o(s, l, n, r, i), this.resolver.scheduleResolve();
    }
    flatten() {
      super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
    }
    initPlayback(t) {
      const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: s, velocity: o = 0 } = this.options, l = Eu(n) ? n : kw[n] || Ds;
      let a2, u2;
      l !== Ds && typeof t[0] != "number" && (a2 = vi(Ew, Ym(t[0], t[1])), t = [0, 100]);
      const c = l({ ...this.options, keyframes: t });
      s === "mirror" && (u2 = l({ ...this.options, keyframes: [...t].reverse(), velocity: -o })), c.calculatedDuration === null && (c.calculatedDuration = gm(c));
      const { calculatedDuration: f2 } = c, d3 = f2 + i, g4 = d3 * (r + 1) - i;
      return { generator: c, mirroredGenerator: u2, mapPercentToKeyframes: a2, calculatedDuration: f2, resolvedDuration: d3, totalDuration: g4 };
    }
    onPostResolved() {
      const { autoplay: t = true } = this.options;
      this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
    }
    tick(t, n = false) {
      const { resolved: r } = this;
      if (!r) {
        const { keyframes: k4 } = this.options;
        return { done: true, value: k4[k4.length - 1] };
      }
      const { finalKeyframe: i, generator: s, mirroredGenerator: o, mapPercentToKeyframes: l, keyframes: a2, calculatedDuration: u2, totalDuration: c, resolvedDuration: f2 } = r;
      if (this.startTime === null) return s.next(0);
      const { delay: d3, repeat: g4, repeatType: y2, repeatDelay: x3, onUpdate: P3 } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
      const p2 = this.currentTime - d3 * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? p2 < 0 : p2 > c;
      this.currentTime = Math.max(p2, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
      let m = this.currentTime, S3 = s;
      if (g4) {
        const k4 = Math.min(this.currentTime, c) / f2;
        let V2 = Math.floor(k4), A5 = k4 % 1;
        !A5 && k4 >= 1 && (A5 = 1), A5 === 1 && V2--, V2 = Math.min(V2, g4 + 1), !!(V2 % 2) && (y2 === "reverse" ? (A5 = 1 - A5, x3 && (A5 -= x3 / f2)) : y2 === "mirror" && (S3 = o)), m = vt(0, 1, A5) * f2;
      }
      const C3 = h ? { done: false, value: a2[0] } : S3.next(m);
      l && (C3.value = l(C3.value));
      let { done: T3 } = C3;
      !h && u2 !== null && (T3 = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      const j3 = this.holdTime === null && (this.state === "finished" || this.state === "running" && T3);
      return j3 && i !== void 0 && (C3.value = so(a2, this.options, i)), P3 && P3(C3.value), j3 && this.finish(), C3;
    }
    get duration() {
      const { resolved: t } = this;
      return t ? dt(t.calculatedDuration) : 0;
    }
    get time() {
      return dt(this.currentTime);
    }
    set time(t) {
      t = ft(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t) {
      const n = this.playbackSpeed !== t;
      this.playbackSpeed = t, n && (this.time = dt(this.currentTime));
    }
    play() {
      if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      const { driver: t = Cw, onPlay: n, startTime: r } = this.options;
      this.driver || (this.driver = t((s) => this.tick(s))), n && n();
      const i = this.driver.now();
      this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
    }
    pause() {
      var t;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
    }
    complete() {
      this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
    }
    finish() {
      this.teardown(), this.state = "finished";
      const { onComplete: t } = this.options;
      t && t();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
    }
    teardown() {
      this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), this.driver = void 0);
    }
    sample(t) {
      return this.startTime = 0, this.tick(t, true);
    }
  };
  var Tw = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]);
  function jw(e, t, n, { delay: r = 0, duration: i = 300, repeat: s = 0, repeatType: o = "loop", ease: l = "easeInOut", times: a2 } = {}) {
    const u2 = { [t]: n };
    a2 && (u2.offset = a2);
    const c = xm(l, i);
    return Array.isArray(c) && (u2.easing = c), e.animate(u2, { delay: r, duration: i, easing: Array.isArray(c) ? "linear" : c, fill: "both", iterations: s + 1, direction: o === "reverse" ? "alternate" : "normal" });
  }
  var Nw = cu(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  var Vs = 10;
  var Rw = 2e4;
  function Mw(e) {
    return Eu(e.type) || e.type === "spring" || !ym(e.ease);
  }
  function Aw(e, t) {
    const n = new Fu({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: true });
    let r = { done: false, value: e[0] };
    const i = [];
    let s = 0;
    for (; !r.done && s < Rw; ) r = n.sample(s), i.push(r.value), s += Vs;
    return { times: void 0, keyframes: i, duration: s - Vs, ease: "linear" };
  }
  var eg = { anticipate: Am, backInOut: Mm, circInOut: Dm };
  function Lw(e) {
    return e in eg;
  }
  var Lf = class extends Qm {
    constructor(t) {
      super(t);
      const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
      this.resolver = new Gm(s, (o, l) => this.onKeyframesResolved(o, l), n, r, i), this.resolver.scheduleResolve();
    }
    initPlayback(t, n) {
      let { duration: r = 300, times: i, ease: s, type: o, motionValue: l, name: a2, startTime: u2 } = this.options;
      if (!l.owner || !l.owner.current) return false;
      if (typeof s == "string" && As() && Lw(s) && (s = eg[s]), Mw(this.options)) {
        const { onComplete: f2, onUpdate: d3, motionValue: g4, element: y2, ...x3 } = this.options, P3 = Aw(t, x3);
        t = P3.keyframes, t.length === 1 && (t[1] = t[0]), r = P3.duration, i = P3.times, s = P3.ease, o = "keyframes";
      }
      const c = jw(l.owner.current, a2, t, { ...this.options, duration: r, times: i, ease: s });
      return c.startTime = u2 ?? this.calcStartTime(), this.pendingTimeline ? (mf(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
        const { onComplete: f2 } = this.options;
        l.set(so(t, this.options, n)), f2 && f2(), this.cancel(), this.resolveFinishedPromise();
      }, { animation: c, duration: r, times: i, type: o, ease: s, keyframes: t };
    }
    get duration() {
      const { resolved: t } = this;
      if (!t) return 0;
      const { duration: n } = t;
      return dt(n);
    }
    get time() {
      const { resolved: t } = this;
      if (!t) return 0;
      const { animation: n } = t;
      return dt(n.currentTime || 0);
    }
    set time(t) {
      const { resolved: n } = this;
      if (!n) return;
      const { animation: r } = n;
      r.currentTime = ft(t);
    }
    get speed() {
      const { resolved: t } = this;
      if (!t) return 1;
      const { animation: n } = t;
      return n.playbackRate;
    }
    set speed(t) {
      const { resolved: n } = this;
      if (!n) return;
      const { animation: r } = n;
      r.playbackRate = t;
    }
    get state() {
      const { resolved: t } = this;
      if (!t) return "idle";
      const { animation: n } = t;
      return n.playState;
    }
    get startTime() {
      const { resolved: t } = this;
      if (!t) return null;
      const { animation: n } = t;
      return n.startTime;
    }
    attachTimeline(t) {
      if (!this._resolved) this.pendingTimeline = t;
      else {
        const { resolved: n } = this;
        if (!n) return Ne;
        const { animation: r } = n;
        mf(r, t);
      }
      return Ne;
    }
    play() {
      if (this.isStopped) return;
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n } = t;
      n.playState === "finished" && this.updateFinishedPromise(), n.play();
    }
    pause() {
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n } = t;
      n.pause();
    }
    stop() {
      if (this.resolver.cancel(), this.isStopped = true, this.state === "idle") return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n, keyframes: r, duration: i, type: s, ease: o, times: l } = t;
      if (n.playState === "idle" || n.playState === "finished") return;
      if (this.time) {
        const { motionValue: u2, onUpdate: c, onComplete: f2, element: d3, ...g4 } = this.options, y2 = new Fu({ ...g4, keyframes: r, duration: i, type: s, ease: o, times: l, isGenerator: true }), x3 = ft(this.time);
        u2.setWithVelocity(y2.sample(x3 - Vs).value, y2.sample(x3).value, Vs);
      }
      const { onStop: a2 } = this.options;
      a2 && a2(), this.cancel();
    }
    complete() {
      const { resolved: t } = this;
      t && t.animation.finish();
    }
    cancel() {
      const { resolved: t } = this;
      t && t.animation.cancel();
    }
    static supports(t) {
      const { motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: l } = t;
      if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return false;
      const { onUpdate: a2, transformTemplate: u2 } = n.owner.getProps();
      return Nw() && r && Tw.has(r) && !a2 && !u2 && !i && s !== "mirror" && o !== 0 && l !== "inertia";
    }
  };
  var Dw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
  var Vw = (e) => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 });
  var _w = { type: "keyframes", duration: 0.8 };
  var Iw = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 };
  var Ow = (e, { keyframes: t }) => t.length > 2 ? _w : yn.has(e) ? e.startsWith("scale") ? Vw(t[1]) : Dw : Iw;
  function Fw({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: l, from: a2, elapsed: u2, ...c }) {
    return !!Object.keys(c).length;
  }
  var zu = (e, t, n, r = {}, i, s) => (o) => {
    const l = ku(r, e) || {}, a2 = l.delay || r.delay || 0;
    let { elapsed: u2 = 0 } = r;
    u2 = u2 - ft(a2);
    let c = { keyframes: Array.isArray(n) ? n : [null, n], ease: "easeOut", velocity: t.getVelocity(), ...l, delay: -u2, onUpdate: (d3) => {
      t.set(d3), l.onUpdate && l.onUpdate(d3);
    }, onComplete: () => {
      o(), l.onComplete && l.onComplete();
    }, name: e, motionValue: t, element: s ? void 0 : i };
    Fw(l) || (c = { ...c, ...Ow(e, c) }), c.duration && (c.duration = ft(c.duration)), c.repeatDelay && (c.repeatDelay = ft(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let f2 = false;
    if ((c.type === false || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f2 = true)), f2 && !s && t.get() !== void 0) {
      const d3 = so(c.keyframes, l);
      if (d3 !== void 0) return U.update(() => {
        c.onUpdate(d3), c.onComplete();
      }), new rx([]);
    }
    return !s && Lf.supports(c) ? new Lf(c) : new Fu(c);
  };
  function zw({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== true;
    return t[n] = false, r;
  }
  function tg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    var s;
    let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a2 } = t;
    r && (o = r);
    const u2 = [], c = i && e.animationState && e.animationState.getState()[i];
    for (const f2 in a2) {
      const d3 = e.getValue(f2, (s = e.latestValues[f2]) !== null && s !== void 0 ? s : null), g4 = a2[f2];
      if (g4 === void 0 || c && zw(c, f2)) continue;
      const y2 = { delay: n, ...ku(o || {}, f2) };
      let x3 = false;
      if (window.MotionHandoffAnimation) {
        const p2 = Em(e);
        if (p2) {
          const h = window.MotionHandoffAnimation(p2, f2, U);
          h !== null && (y2.startTime = h, x3 = true);
        }
      }
      Xl(e, f2), d3.start(zu(f2, d3, g4, e.shouldReduceMotion && Cm.has(f2) ? { type: false } : y2, e, x3));
      const P3 = d3.animation;
      P3 && u2.push(P3);
    }
    return l && Promise.all(u2).then(() => {
      U.update(() => {
        l && vx(e, l);
      });
    }), u2;
  }
  function na(e, t, n = {}) {
    var r;
    const i = io(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let { transition: s = e.getDefaultTransition() || {} } = i || {};
    n.transitionOverride && (s = n.transitionOverride);
    const o = i ? () => Promise.all(tg(e, i, n)) : () => Promise.resolve(), l = e.variantChildren && e.variantChildren.size ? (u2 = 0) => {
      const { delayChildren: c = 0, staggerChildren: f2, staggerDirection: d3 } = s;
      return Bw(e, t, c + u2, f2, d3, n);
    } : () => Promise.resolve(), { when: a2 } = s;
    if (a2) {
      const [u2, c] = a2 === "beforeChildren" ? [o, l] : [l, o];
      return u2().then(() => c());
    } else return Promise.all([o(), l(n.delay)]);
  }
  function Bw(e, t, n = 0, r = 0, i = 1, s) {
    const o = [], l = (e.variantChildren.size - 1) * r, a2 = i === 1 ? (u2 = 0) => u2 * r : (u2 = 0) => l - u2 * r;
    return Array.from(e.variantChildren).sort(Uw).forEach((u2, c) => {
      u2.notify("AnimationStart", t), o.push(na(u2, t, { ...s, delay: n + a2(c) }).then(() => u2.notify("AnimationComplete", t)));
    }), Promise.all(o);
  }
  function Uw(e, t) {
    return e.sortNodePosition(t);
  }
  function $w(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
      const i = t.map((s) => na(e, s, n));
      r = Promise.all(i);
    } else if (typeof t == "string") r = na(e, t, n);
    else {
      const i = typeof t == "function" ? io(e, t, n.custom) : t;
      r = Promise.all(tg(e, i, n));
    }
    return r.then(() => {
      e.notify("AnimationComplete", t);
    });
  }
  var Ww = du.length;
  function ng(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
      const n = e.parent ? ng(e.parent) || {} : {};
      return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
    }
    const t = {};
    for (let n = 0; n < Ww; n++) {
      const r = du[n], i = e.props[r];
      (ri(i) || i === false) && (t[r] = i);
    }
    return t;
  }
  var bw = [...fu].reverse();
  var Hw = fu.length;
  function Kw(e) {
    return (t) => Promise.all(t.map(({ animation: n, options: r }) => $w(e, n, r)));
  }
  function Gw(e) {
    let t = Kw(e), n = Df(), r = true;
    const i = (a2) => (u2, c) => {
      var f2;
      const d3 = io(e, c, a2 === "exit" ? (f2 = e.presenceContext) === null || f2 === void 0 ? void 0 : f2.custom : void 0);
      if (d3) {
        const { transition: g4, transitionEnd: y2, ...x3 } = d3;
        u2 = { ...u2, ...x3, ...y2 };
      }
      return u2;
    };
    function s(a2) {
      t = a2(e);
    }
    function o(a2) {
      const { props: u2 } = e, c = ng(e.parent) || {}, f2 = [], d3 = /* @__PURE__ */ new Set();
      let g4 = {}, y2 = 1 / 0;
      for (let P3 = 0; P3 < Hw; P3++) {
        const p2 = bw[P3], h = n[p2], m = u2[p2] !== void 0 ? u2[p2] : c[p2], S3 = ri(m), C3 = p2 === a2 ? h.isActive : null;
        C3 === false && (y2 = P3);
        let T3 = m === c[p2] && m !== u2[p2] && S3;
        if (T3 && r && e.manuallyAnimateOnMount && (T3 = false), h.protectedKeys = { ...g4 }, !h.isActive && C3 === null || !m && !h.prevProp || no(m) || typeof m == "boolean") continue;
        const j3 = Qw(h.prevProp, m);
        let k4 = j3 || p2 === a2 && h.isActive && !T3 && S3 || P3 > y2 && S3, V2 = false;
        const A5 = Array.isArray(m) ? m : [m];
        let re2 = A5.reduce(i(p2), {});
        C3 === false && (re2 = {});
        const { prevResolvedValues: xt = {} } = h, Kt = { ...xt, ...re2 }, or = (ee) => {
          k4 = true, d3.has(ee) && (V2 = true, d3.delete(ee)), h.needsAnimating[ee] = true;
          const N5 = e.getValue(ee);
          N5 && (N5.liveStyle = false);
        };
        for (const ee in Kt) {
          const N5 = re2[ee], L2 = xt[ee];
          if (g4.hasOwnProperty(ee)) continue;
          let D2 = false;
          Kl(N5) && Kl(L2) ? D2 = !mm(N5, L2) : D2 = N5 !== L2, D2 ? N5 != null ? or(ee) : d3.add(ee) : N5 !== void 0 && d3.has(ee) ? or(ee) : h.protectedKeys[ee] = true;
        }
        h.prevProp = m, h.prevResolvedValues = re2, h.isActive && (g4 = { ...g4, ...re2 }), r && e.blockInitialAnimation && (k4 = false), k4 && (!(T3 && j3) || V2) && f2.push(...A5.map((ee) => ({ animation: ee, options: { type: p2 } })));
      }
      if (d3.size) {
        const P3 = {};
        d3.forEach((p2) => {
          const h = e.getBaseTarget(p2), m = e.getValue(p2);
          m && (m.liveStyle = true), P3[p2] = h ?? null;
        }), f2.push({ animation: P3 });
      }
      let x3 = !!f2.length;
      return r && (u2.initial === false || u2.initial === u2.animate) && !e.manuallyAnimateOnMount && (x3 = false), r = false, x3 ? t(f2) : Promise.resolve();
    }
    function l(a2, u2) {
      var c;
      if (n[a2].isActive === u2) return Promise.resolve();
      (c = e.variantChildren) === null || c === void 0 || c.forEach((d3) => {
        var g4;
        return (g4 = d3.animationState) === null || g4 === void 0 ? void 0 : g4.setActive(a2, u2);
      }), n[a2].isActive = u2;
      const f2 = o(a2);
      for (const d3 in n) n[d3].protectedKeys = {};
      return f2;
    }
    return { animateChanges: o, setActive: l, setAnimateFunction: s, getState: () => n, reset: () => {
      n = Df(), r = true;
    } };
  }
  function Qw(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !mm(t, e) : false;
  }
  function Xt(e = false) {
    return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
  }
  function Df() {
    return { animate: Xt(true), whileInView: Xt(), whileHover: Xt(), whileTap: Xt(), whileDrag: Xt(), whileFocus: Xt(), exit: Xt() };
  }
  var Ht = class {
    constructor(t) {
      this.isMounted = false, this.node = t;
    }
    update() {
    }
  };
  var Xw = class extends Ht {
    constructor(t) {
      super(t), t.animationState || (t.animationState = Gw(t));
    }
    updateAnimationControlsSubscription() {
      const { animate: t } = this.node.getProps();
      no(t) && (this.unmountControls = t.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
      t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var t;
      this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
    }
  };
  var Yw = 0;
  var Zw = class extends Ht {
    constructor() {
      super(...arguments), this.id = Yw++;
    }
    update() {
      if (!this.node.presenceContext) return;
      const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t === r) return;
      const i = this.node.animationState.setActive("exit", !t);
      n && !t && i.then(() => n(this.id));
    }
    mount() {
      const { register: t } = this.node.presenceContext || {};
      t && (this.unmount = t(this.id));
    }
    unmount() {
    }
  };
  var qw = { animation: { Feature: Xw }, exit: { Feature: Zw } };
  function li(e, t, n, r = { passive: true }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  function yi(e) {
    return { point: { x: e.pageX, y: e.pageY } };
  }
  var Jw = (e) => (t) => ju(t) && e(t, yi(t));
  function Vr(e, t, n, r) {
    return li(e, t, Jw(n), r);
  }
  var Vf = (e, t) => Math.abs(e - t);
  function eS(e, t) {
    const n = Vf(e.x, t.x), r = Vf(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  var rg = class {
    constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = false } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f2 = $o(this.lastMoveEventInfo, this.history), d3 = this.startEvent !== null, g4 = eS(f2.offset, { x: 0, y: 0 }) >= 3;
        if (!d3 && !g4) return;
        const { point: y2 } = f2, { timestamp: x3 } = ae;
        this.history.push({ ...y2, timestamp: x3 });
        const { onStart: P3, onMove: p2 } = this.handlers;
        d3 || (P3 && P3(this.lastMoveEvent, f2), this.startEvent = this.lastMoveEvent), p2 && p2(this.lastMoveEvent, f2);
      }, this.handlePointerMove = (f2, d3) => {
        this.lastMoveEvent = f2, this.lastMoveEventInfo = Uo(d3, this.transformPagePoint), U.update(this.updatePoint, true);
      }, this.handlePointerUp = (f2, d3) => {
        this.end();
        const { onEnd: g4, onSessionEnd: y2, resumeAnimation: x3 } = this.handlers;
        if (this.dragSnapToOrigin && x3 && x3(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const P3 = $o(f2.type === "pointercancel" ? this.lastMoveEventInfo : Uo(d3, this.transformPagePoint), this.history);
        this.startEvent && g4 && g4(f2, P3), y2 && y2(f2, P3);
      }, !ju(t)) return;
      this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
      const o = yi(t), l = Uo(o, this.transformPagePoint), { point: a2 } = l, { timestamp: u2 } = ae;
      this.history = [{ ...a2, timestamp: u2 }];
      const { onSessionStart: c } = n;
      c && c(t, $o(l, this.history)), this.removeListeners = vi(Vr(this.contextWindow, "pointermove", this.handlePointerMove), Vr(this.contextWindow, "pointerup", this.handlePointerUp), Vr(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      this.removeListeners && this.removeListeners(), Bt(this.updatePoint);
    }
  };
  function Uo(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function _f(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function $o({ point: e }, t) {
    return { point: e, delta: _f(e, ig(t)), offset: _f(e, tS(t)), velocity: nS(t, 0.1) };
  }
  function tS(e) {
    return e[0];
  }
  function ig(e) {
    return e[e.length - 1];
  }
  function nS(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let n = e.length - 1, r = null;
    const i = ig(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > ft(t))); ) n--;
    if (!r) return { x: 0, y: 0 };
    const s = dt(i.timestamp - r.timestamp);
    if (s === 0) return { x: 0, y: 0 };
    const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
  }
  var sg = 1e-4;
  var rS = 1 - sg;
  var iS = 1 + sg;
  var og = 0.01;
  var sS = 0 - og;
  var oS = 0 + og;
  function De(e) {
    return e.max - e.min;
  }
  function lS(e, t, n) {
    return Math.abs(e - t) <= n;
  }
  function If(e, t, n, r = 0.5) {
    e.origin = r, e.originPoint = b(t.min, t.max, e.origin), e.scale = De(n) / De(t), e.translate = b(n.min, n.max, e.origin) - e.originPoint, (e.scale >= rS && e.scale <= iS || isNaN(e.scale)) && (e.scale = 1), (e.translate >= sS && e.translate <= oS || isNaN(e.translate)) && (e.translate = 0);
  }
  function _r(e, t, n, r) {
    If(e.x, t.x, n.x, r ? r.originX : void 0), If(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function Of(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + De(t);
  }
  function aS(e, t, n) {
    Of(e.x, t.x, n.x), Of(e.y, t.y, n.y);
  }
  function Ff(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + De(t);
  }
  function Ir(e, t, n) {
    Ff(e.x, t.x, n.x), Ff(e.y, t.y, n.y);
  }
  function uS(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? b(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? b(n, e, r.max) : Math.min(e, n)), e;
  }
  function zf(e, t, n) {
    return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 };
  }
  function cS(e, { top: t, left: n, bottom: r, right: i }) {
    return { x: zf(e.x, n, i), y: zf(e.y, t, r) };
  }
  function Bf(e, t) {
    let n = t.min - e.min, r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
  }
  function fS(e, t) {
    return { x: Bf(e.x, t.x), y: Bf(e.y, t.y) };
  }
  function dS(e, t) {
    let n = 0.5;
    const r = De(e), i = De(t);
    return i > r ? n = Zn(t.min, t.max - r, e.min) : r > i && (n = Zn(e.min, e.max - i, t.min)), vt(0, 1, n);
  }
  function hS(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
  }
  var ra = 0.35;
  function pS(e = ra) {
    return e === false ? e = 0 : e === true && (e = ra), { x: Uf(e, "left", "right"), y: Uf(e, "top", "bottom") };
  }
  function Uf(e, t, n) {
    return { min: $f(e, t), max: $f(e, n) };
  }
  function $f(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
  }
  var Wf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 });
  var _n = () => ({ x: Wf(), y: Wf() });
  var bf = () => ({ min: 0, max: 0 });
  var Y = () => ({ x: bf(), y: bf() });
  function Oe(e) {
    return [e("x"), e("y")];
  }
  function lg({ top: e, left: t, right: n, bottom: r }) {
    return { x: { min: t, max: n }, y: { min: e, max: r } };
  }
  function mS({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
  }
  function gS(e, t) {
    if (!t) return e;
    const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
    return { top: n.y, left: n.x, bottom: r.y, right: r.x };
  }
  function Wo(e) {
    return e === void 0 || e === 1;
  }
  function ia({ scale: e, scaleX: t, scaleY: n }) {
    return !Wo(e) || !Wo(t) || !Wo(n);
  }
  function qt(e) {
    return ia(e) || ag(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
  }
  function ag(e) {
    return Hf(e.x) || Hf(e.y);
  }
  function Hf(e) {
    return e && e !== "0%";
  }
  function _s(e, t, n) {
    const r = e - n, i = t * r;
    return n + i;
  }
  function Kf(e, t, n, r, i) {
    return i !== void 0 && (e = _s(e, i, r)), _s(e, n, r) + t;
  }
  function sa(e, t = 0, n = 1, r, i) {
    e.min = Kf(e.min, t, n, r, i), e.max = Kf(e.max, t, n, r, i);
  }
  function ug(e, { x: t, y: n }) {
    sa(e.x, t.translate, t.scale, t.originPoint), sa(e.y, n.translate, n.scale, n.originPoint);
  }
  var Gf = 0.999999999999;
  var Qf = 1.0000000000001;
  function vS(e, t, n, r = false) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let s, o;
    for (let l = 0; l < i; l++) {
      s = n[l], o = s.projectionDelta;
      const { visualElement: a2 } = s.options;
      a2 && a2.props.style && a2.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && On(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }), o && (t.x *= o.x.scale, t.y *= o.y.scale, ug(e, o)), r && qt(s.latestValues) && On(e, s.latestValues));
    }
    t.x < Qf && t.x > Gf && (t.x = 1), t.y < Qf && t.y > Gf && (t.y = 1);
  }
  function In(e, t) {
    e.min = e.min + t, e.max = e.max + t;
  }
  function Xf(e, t, n, r, i = 0.5) {
    const s = b(e.min, e.max, i);
    sa(e, t, n, s, r);
  }
  function On(e, t) {
    Xf(e.x, t.x, t.scaleX, t.scale, t.originX), Xf(e.y, t.y, t.scaleY, t.scale, t.originY);
  }
  function cg(e, t) {
    return lg(gS(e.getBoundingClientRect(), t));
  }
  function yS(e, t, n) {
    const r = cg(e, n), { scroll: i } = t;
    return i && (In(r.x, i.offset.x), In(r.y, i.offset.y)), r;
  }
  var fg = ({ current: e }) => e ? e.ownerDocument.defaultView : null;
  var xS = /* @__PURE__ */ new WeakMap();
  var wS = class {
    constructor(t) {
      this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = Y(), this.visualElement = t;
    }
    start(t, { snapToCursor: n = false } = {}) {
      const { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === false) return;
      const i = (c) => {
        const { dragSnapToOrigin: f2 } = this.getProps();
        f2 ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(yi(c).point);
      }, s = (c, f2) => {
        const { drag: d3, dragPropagation: g4, onDragStart: y2 } = this.getProps();
        if (d3 && !g4 && (this.openDragLock && this.openDragLock(), this.openDragLock = dx(d3), !this.openDragLock)) return;
        this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), Oe((P3) => {
          let p2 = this.getAxisMotionValue(P3).get() || 0;
          if (rt.test(p2)) {
            const { projection: h } = this.visualElement;
            if (h && h.layout) {
              const m = h.layout.layoutBox[P3];
              m && (p2 = De(m) * (parseFloat(p2) / 100));
            }
          }
          this.originPoint[P3] = p2;
        }), y2 && U.postRender(() => y2(c, f2)), Xl(this.visualElement, "transform");
        const { animationState: x3 } = this.visualElement;
        x3 && x3.setActive("whileDrag", true);
      }, o = (c, f2) => {
        const { dragPropagation: d3, dragDirectionLock: g4, onDirectionLock: y2, onDrag: x3 } = this.getProps();
        if (!d3 && !this.openDragLock) return;
        const { offset: P3 } = f2;
        if (g4 && this.currentDirection === null) {
          this.currentDirection = SS(P3), this.currentDirection !== null && y2 && y2(this.currentDirection);
          return;
        }
        this.updateAxis("x", f2.point, P3), this.updateAxis("y", f2.point, P3), this.visualElement.render(), x3 && x3(c, f2);
      }, l = (c, f2) => this.stop(c, f2), a2 = () => Oe((c) => {
        var f2;
        return this.getAnimationState(c) === "paused" && ((f2 = this.getAxisMotionValue(c).animation) === null || f2 === void 0 ? void 0 : f2.play());
      }), { dragSnapToOrigin: u2 } = this.getProps();
      this.panSession = new rg(t, { onSessionStart: i, onStart: s, onMove: o, onSessionEnd: l, resumeAnimation: a2 }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: u2, contextWindow: fg(this.visualElement) });
    }
    stop(t, n) {
      const r = this.isDragging;
      if (this.cancel(), !r) return;
      const { velocity: i } = n;
      this.startAnimation(i);
      const { onDragEnd: s } = this.getProps();
      s && U.postRender(() => s(t, n));
    }
    cancel() {
      this.isDragging = false;
      const { projection: t, animationState: n } = this.visualElement;
      t && (t.isAnimationBlocked = false), this.panSession && this.panSession.end(), this.panSession = void 0;
      const { dragPropagation: r } = this.getProps();
      !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", false);
    }
    updateAxis(t, n, r) {
      const { drag: i } = this.getProps();
      if (!r || !$i(t, i, this.currentDirection)) return;
      const s = this.getAxisMotionValue(t);
      let o = this.originPoint[t] + r[t];
      this.constraints && this.constraints[t] && (o = uS(o, this.constraints[t], this.elastic[t])), s.set(o);
    }
    resolveConstraints() {
      var t;
      const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
      n && Dn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = cS(i.layoutBox, n) : this.constraints = false, this.elastic = pS(r), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Oe((o) => {
        this.constraints !== false && this.getAxisMotionValue(o) && (this.constraints[o] = hS(i.layoutBox[o], this.constraints[o]));
      });
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
      if (!t || !Dn(t)) return false;
      const r = t.current, { projection: i } = this.visualElement;
      if (!i || !i.layout) return false;
      const s = yS(r, i.root, this.visualElement.getTransformPagePoint());
      let o = fS(i.layout.layoutBox, s);
      if (n) {
        const l = n(mS(o));
        this.hasMutatedConstraints = !!l, l && (o = lg(l));
      }
      return o;
    }
    startAnimation(t) {
      const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: l } = this.getProps(), a2 = this.constraints || {}, u2 = Oe((c) => {
        if (!$i(c, n, this.currentDirection)) return;
        let f2 = a2 && a2[c] || {};
        o && (f2 = { min: 0, max: 0 });
        const d3 = i ? 200 : 1e6, g4 = i ? 40 : 1e7, y2 = { type: "inertia", velocity: r ? t[c] : 0, bounceStiffness: d3, bounceDamping: g4, timeConstant: 750, restDelta: 1, restSpeed: 10, ...s, ...f2 };
        return this.startAxisValueAnimation(c, y2);
      });
      return Promise.all(u2).then(l);
    }
    startAxisValueAnimation(t, n) {
      const r = this.getAxisMotionValue(t);
      return Xl(this.visualElement, t), r.start(zu(t, r, 0, n, this.visualElement, false));
    }
    stopAnimation() {
      Oe((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      Oe((t) => {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
      });
    }
    getAnimationState(t) {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
    }
    getAxisMotionValue(t) {
      const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
      return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
    }
    snapToCursor(t) {
      Oe((n) => {
        const { drag: r } = this.getProps();
        if (!$i(n, r, this.currentDirection)) return;
        const { projection: i } = this.visualElement, s = this.getAxisMotionValue(n);
        if (i && i.layout) {
          const { min: o, max: l } = i.layout.layoutBox[n];
          s.set(t[n] - b(o, l, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
      if (!Dn(n) || !r || !this.constraints) return;
      this.stopAnimation();
      const i = { x: 0, y: 0 };
      Oe((o) => {
        const l = this.getAxisMotionValue(o);
        if (l && this.constraints !== false) {
          const a2 = l.get();
          i[o] = dS({ min: a2, max: a2 }, this.constraints[o]);
        }
      });
      const { transformTemplate: s } = this.visualElement.getProps();
      this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Oe((o) => {
        if (!$i(o, t, null)) return;
        const l = this.getAxisMotionValue(o), { min: a2, max: u2 } = this.constraints[o];
        l.set(b(a2, u2, i[o]));
      });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      xS.set(this.visualElement, this);
      const t = this.visualElement.current, n = Vr(t, "pointerdown", (a2) => {
        const { drag: u2, dragListener: c = true } = this.getProps();
        u2 && c && this.start(a2);
      }), r = () => {
        const { dragConstraints: a2 } = this.getProps();
        Dn(a2) && a2.current && (this.constraints = this.resolveRefConstraints());
      }, { projection: i } = this.visualElement, s = i.addEventListener("measure", r);
      i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), U.read(r);
      const o = li(window, "resize", () => this.scalePositionWithinConstraints()), l = i.addEventListener("didUpdate", ({ delta: a2, hasLayoutChanged: u2 }) => {
        this.isDragging && u2 && (Oe((c) => {
          const f2 = this.getAxisMotionValue(c);
          f2 && (this.originPoint[c] += a2[c].translate, f2.set(f2.get() + a2[c].translate));
        }), this.visualElement.render());
      });
      return () => {
        o(), n(), s(), l && l();
      };
    }
    getProps() {
      const t = this.visualElement.getProps(), { drag: n = false, dragDirectionLock: r = false, dragPropagation: i = false, dragConstraints: s = false, dragElastic: o = ra, dragMomentum: l = true } = t;
      return { ...t, drag: n, dragDirectionLock: r, dragPropagation: i, dragConstraints: s, dragElastic: o, dragMomentum: l };
    }
  };
  function $i(e, t, n) {
    return (t === true || t === e) && (n === null || n === e);
  }
  function SS(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
  }
  var PS = class extends Ht {
    constructor(t) {
      super(t), this.removeGroupControls = Ne, this.removeListeners = Ne, this.controls = new wS(t);
    }
    mount() {
      const { dragControls: t } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ne;
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  };
  var Yf = (e) => (t, n) => {
    e && U.postRender(() => e(t, n));
  };
  var CS = class extends Ht {
    constructor() {
      super(...arguments), this.removePointerDownListener = Ne;
    }
    onPointerDown(t) {
      this.session = new rg(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: fg(this.node) });
    }
    createPanHandlers() {
      const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
      return { onSessionStart: Yf(t), onStart: Yf(n), onMove: r, onEnd: (s, o) => {
        delete this.session, i && U.postRender(() => i(s, o));
      } };
    }
    mount() {
      this.removePointerDownListener = Vr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  };
  var rs = { hasAnimatedSinceResize: true, hasEverUpdated: false };
  function Zf(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
  }
  var mr = { correct: (e, t) => {
    if (!t.target) return e;
    if (typeof e == "string") if (M.test(e)) e = parseFloat(e);
    else return e;
    const n = Zf(e, t.target.x), r = Zf(e, t.target.y);
    return `${n}% ${r}%`;
  } };
  var kS = { correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = Ut.parse(e);
    if (i.length > 5) return r;
    const s = Ut.createTransformer(e), o = typeof i[0] != "number" ? 1 : 0, l = n.x.scale * t.x, a2 = n.y.scale * t.y;
    i[0 + o] /= l, i[1 + o] /= a2;
    const u2 = b(l, a2, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= u2), typeof i[3 + o] == "number" && (i[3 + o] /= u2), s(i);
  } };
  var ES = class extends w.Component {
    componentDidMount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: s } = t;
      H1(TS), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), s.setOptions({ ...s.options, onExitComplete: () => this.safeToRemove() })), rs.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(t) {
      const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props, o = r.projection;
      return o && (o.isPresent = s, i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || U.postRender(() => {
        const l = o.getStack();
        (!l || !l.members.length) && this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      const { projection: t } = this.props.visualElement;
      t && (t.root.didUpdate(), pu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
      i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
    }
    safeToRemove() {
      const { safeToRemove: t } = this.props;
      t && t();
    }
    render() {
      return null;
    }
  };
  function dg(e) {
    const [t, n] = Qp(), r = w.useContext(ou);
    return v.jsx(ES, { ...e, layoutGroup: r, switchLayoutGroup: w.useContext(nm), isPresent: t, safeToRemove: n });
  }
  var TS = { borderRadius: { ...mr, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: mr, borderTopRightRadius: mr, borderBottomLeftRadius: mr, borderBottomRightRadius: mr, boxShadow: kS };
  function jS(e, t, n) {
    const r = ge(e) ? e : si(e);
    return r.start(zu("", r, t, n)), r.animation;
  }
  function NS(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
  }
  var RS = (e, t) => e.depth - t.depth;
  var MS = class {
    constructor() {
      this.children = [], this.isDirty = false;
    }
    add(t) {
      Nu(this.children, t), this.isDirty = true;
    }
    remove(t) {
      Ru(this.children, t), this.isDirty = true;
    }
    forEach(t) {
      this.isDirty && this.children.sort(RS), this.isDirty = false, this.children.forEach(t);
    }
  };
  function AS(e, t) {
    const n = it.now(), r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Bt(r), e(s - t));
    };
    return U.read(r, true), () => Bt(r);
  }
  var hg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
  var LS = hg.length;
  var qf = (e) => typeof e == "string" ? parseFloat(e) : e;
  var Jf = (e) => typeof e == "number" || M.test(e);
  function DS(e, t, n, r, i, s) {
    i ? (e.opacity = b(0, n.opacity !== void 0 ? n.opacity : 1, VS(r)), e.opacityExit = b(t.opacity !== void 0 ? t.opacity : 1, 0, _S(r))) : s && (e.opacity = b(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < LS; o++) {
      const l = `border${hg[o]}Radius`;
      let a2 = ed(t, l), u2 = ed(n, l);
      if (a2 === void 0 && u2 === void 0) continue;
      a2 || (a2 = 0), u2 || (u2 = 0), a2 === 0 || u2 === 0 || Jf(a2) === Jf(u2) ? (e[l] = Math.max(b(qf(a2), qf(u2), r), 0), (rt.test(u2) || rt.test(a2)) && (e[l] += "%")) : e[l] = u2;
    }
    (t.rotate || n.rotate) && (e.rotate = b(t.rotate || 0, n.rotate || 0, r));
  }
  function ed(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
  }
  var VS = pg(0, 0.5, Lm);
  var _S = pg(0.5, 0.95, Ne);
  function pg(e, t, n) {
    return (r) => r < e ? 0 : r > t ? 1 : n(Zn(e, t, r));
  }
  function td(e, t) {
    e.min = t.min, e.max = t.max;
  }
  function Ie(e, t) {
    td(e.x, t.x), td(e.y, t.y);
  }
  function nd(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
  }
  function rd(e, t, n, r, i) {
    return e -= t, e = _s(e, 1 / n, r), i !== void 0 && (e = _s(e, 1 / i, r)), e;
  }
  function IS(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
    if (rt.test(t) && (t = parseFloat(t), t = b(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
    let l = b(s.min, s.max, r);
    e === s && (l -= t), e.min = rd(e.min, t, n, l, i), e.max = rd(e.max, t, n, l, i);
  }
  function id(e, t, [n, r, i], s, o) {
    IS(e, t[n], t[r], t[i], t.scale, s, o);
  }
  var OS = ["x", "scaleX", "originX"];
  var FS = ["y", "scaleY", "originY"];
  function sd(e, t, n, r) {
    id(e.x, t, OS, n ? n.x : void 0, r ? r.x : void 0), id(e.y, t, FS, n ? n.y : void 0, r ? r.y : void 0);
  }
  function od(e) {
    return e.translate === 0 && e.scale === 1;
  }
  function mg(e) {
    return od(e.x) && od(e.y);
  }
  function ld(e, t) {
    return e.min === t.min && e.max === t.max;
  }
  function zS(e, t) {
    return ld(e.x, t.x) && ld(e.y, t.y);
  }
  function ad(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
  }
  function gg(e, t) {
    return ad(e.x, t.x) && ad(e.y, t.y);
  }
  function ud(e) {
    return De(e.x) / De(e.y);
  }
  function cd(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
  }
  var BS = class {
    constructor() {
      this.members = [];
    }
    add(t) {
      Nu(this.members, t), t.scheduleRender();
    }
    remove(t) {
      if (Ru(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
        const n = this.members[this.members.length - 1];
        n && this.promote(n);
      }
    }
    relegate(t) {
      const n = this.members.findIndex((i) => t === i);
      if (n === 0) return false;
      let r;
      for (let i = n; i >= 0; i--) {
        const s = this.members[i];
        if (s.isPresent !== false) {
          r = s;
          break;
        }
      }
      return r ? (this.promote(r), true) : false;
    }
    promote(t, n) {
      const r = this.lead;
      if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
        r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = true), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = true);
        const { crossfade: i } = t.options;
        i === false && r.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((t) => {
        const { options: n, resumingFrom: r } = t;
        n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((t) => {
        t.instance && t.scheduleRender(false);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  };
  function US(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x, s = e.y.translate / t.y, o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
      const { transformPerspective: u2, rotate: c, rotateX: f2, rotateY: d3, skewX: g4, skewY: y2 } = n;
      u2 && (r = `perspective(${u2}px) ${r}`), c && (r += `rotate(${c}deg) `), f2 && (r += `rotateX(${f2}deg) `), d3 && (r += `rotateY(${d3}deg) `), g4 && (r += `skewX(${g4}deg) `), y2 && (r += `skewY(${y2}deg) `);
    }
    const l = e.x.scale * t.x, a2 = e.y.scale * t.y;
    return (l !== 1 || a2 !== 1) && (r += `scale(${l}, ${a2})`), r || "none";
  }
  var Jt = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };
  var Cr = typeof window < "u" && window.MotionDebug !== void 0;
  var bo = ["", "X", "Y", "Z"];
  var $S = { visibility: "hidden" };
  var fd = 1e3;
  var WS = 0;
  function Ho(e, t, n, r) {
    const { latestValues: i } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
  }
  function vg(e) {
    if (e.hasCheckedOptimisedAppear = true, e.root === e) return;
    const { visualElement: t } = e.options;
    if (!t) return;
    const n = Em(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const { layout: i, layoutId: s } = e.options;
      window.MotionCancelOptimisedAnimation(n, "transform", U, !(i || s));
    }
    const { parent: r } = e;
    r && !r.hasCheckedOptimisedAppear && vg(r);
  }
  function yg({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
    return class {
      constructor(o = {}, l = t == null ? void 0 : t()) {
        this.id = WS++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = false, Cr && (Jt.totalNodes = Jt.resolvedTargetDeltas = Jt.recalculatedProjection = 0), this.nodes.forEach(KS), this.nodes.forEach(ZS), this.nodes.forEach(qS), this.nodes.forEach(GS), Cr && window.MotionDebug.record(Jt);
        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
        for (let a2 = 0; a2 < this.path.length; a2++) this.path[a2].shouldResetTransform = true;
        this.root === this && (this.nodes = new MS());
      }
      addEventListener(o, l) {
        return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Mu()), this.eventHandlers.get(o).add(l);
      }
      notifyListeners(o, ...l) {
        const a2 = this.eventHandlers.get(o);
        a2 && a2.notify(...l);
      }
      hasListeners(o) {
        return this.eventHandlers.has(o);
      }
      mount(o, l = this.root.hasTreeAnimated) {
        if (this.instance) return;
        this.isSVG = NS(o), this.instance = o;
        const { layoutId: a2, layout: u2, visualElement: c } = this.options;
        if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u2 || a2) && (this.isLayoutDirty = true), e) {
          let f2;
          const d3 = () => this.root.updateBlockedByResize = false;
          e(o, () => {
            this.root.updateBlockedByResize = true, f2 && f2(), f2 = AS(d3, 250), rs.hasAnimatedSinceResize && (rs.hasAnimatedSinceResize = false, this.nodes.forEach(hd));
          });
        }
        a2 && this.root.registerSharedNode(a2, this), this.options.animate !== false && c && (a2 || u2) && this.addEventListener("didUpdate", ({ delta: f2, hasLayoutChanged: d3, hasRelativeTargetChanged: g4, layout: y2 }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const x3 = this.options.transition || c.getDefaultTransition() || rP, { onLayoutAnimationStart: P3, onLayoutAnimationComplete: p2 } = c.getProps(), h = !this.targetLayout || !gg(this.targetLayout, y2) || g4, m = !d3 && g4;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d3 && (h || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f2, m);
            const S3 = { ...ku(x3, "layout"), onPlay: P3, onComplete: p2 };
            (c.shouldReduceMotion || this.options.layoutRoot) && (S3.delay = 0, S3.type = false), this.startAnimation(S3);
          } else d3 || hd(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = y2;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        const o = this.getStack();
        o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Bt(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      startUpdate() {
        this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(JS), this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: o } = this.options;
        return o && o.getProps().transformTemplate;
      }
      willUpdate(o = true) {
        if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && vg(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
        this.isLayoutDirty = true;
        for (let c = 0; c < this.path.length; c++) {
          const f2 = this.path[c];
          f2.shouldResetTransform = true, f2.updateScroll("snapshot"), f2.options.layoutRoot && f2.willUpdate(false);
        }
        const { layoutId: l, layout: a2 } = this.options;
        if (l === void 0 && !a2) return;
        const u2 = this.getTransformTemplate();
        this.prevTransformTemplateValue = u2 ? u2(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
      }
      update() {
        if (this.updateScheduled = false, this.isUpdateBlocked()) {
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(dd);
          return;
        }
        this.isUpdating || this.nodes.forEach(XS), this.isUpdating = false, this.nodes.forEach(YS), this.nodes.forEach(bS), this.nodes.forEach(HS), this.clearAllSnapshots();
        const l = it.now();
        ae.delta = vt(0, 1e3 / 60, l - ae.timestamp), ae.timestamp = l, ae.isProcessing = true, _o.update.process(ae), _o.preRender.process(ae), _o.render.process(ae), ae.isProcessing = false;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = true, pu.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(QS), this.sharedNodes.forEach(eP);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, U.preRender(this.updateProjection, false, true));
      }
      scheduleCheckAfterUnmount() {
        U.postRender(() => {
          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        this.snapshot || !this.instance || (this.snapshot = this.measure());
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
        if (this.resumeFrom && !this.resumeFrom.instance) for (let a2 = 0; a2 < this.path.length; a2++) this.path[a2].updateScroll();
        const o = this.layout;
        this.layout = this.measure(false), this.layoutCorrected = Y(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: l } = this.options;
        l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
      }
      updateScroll(o = "measure") {
        let l = !!(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = false), l) {
          const a2 = r(this.instance);
          this.scroll = { animationId: this.root.animationId, phase: o, isRoot: a2, offset: n(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : a2 };
        }
      }
      resetTransform() {
        if (!i) return;
        const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !mg(this.projectionDelta), a2 = this.getTransformTemplate(), u2 = a2 ? a2(this.latestValues, "") : void 0, c = u2 !== this.prevTransformTemplateValue;
        o && (l || qt(this.latestValues) || c) && (i(this.instance, u2), this.shouldResetTransform = false, this.scheduleRender());
      }
      measure(o = true) {
        const l = this.measurePageBox();
        let a2 = this.removeElementScroll(l);
        return o && (a2 = this.removeTransform(a2)), iP(a2), { animationId: this.root.animationId, measuredBox: l, layoutBox: a2, latestValues: {}, source: this.id };
      }
      measurePageBox() {
        var o;
        const { visualElement: l } = this.options;
        if (!l) return Y();
        const a2 = l.measureViewportBox();
        if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(sP))) {
          const { scroll: c } = this.root;
          c && (In(a2.x, c.offset.x), In(a2.y, c.offset.y));
        }
        return a2;
      }
      removeElementScroll(o) {
        var l;
        const a2 = Y();
        if (Ie(a2, o), !((l = this.scroll) === null || l === void 0) && l.wasRoot) return a2;
        for (let u2 = 0; u2 < this.path.length; u2++) {
          const c = this.path[u2], { scroll: f2, options: d3 } = c;
          c !== this.root && f2 && d3.layoutScroll && (f2.wasRoot && Ie(a2, o), In(a2.x, f2.offset.x), In(a2.y, f2.offset.y));
        }
        return a2;
      }
      applyTransform(o, l = false) {
        const a2 = Y();
        Ie(a2, o);
        for (let u2 = 0; u2 < this.path.length; u2++) {
          const c = this.path[u2];
          !l && c.options.layoutScroll && c.scroll && c !== c.root && On(a2, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }), qt(c.latestValues) && On(a2, c.latestValues);
        }
        return qt(this.latestValues) && On(a2, this.latestValues), a2;
      }
      removeTransform(o) {
        const l = Y();
        Ie(l, o);
        for (let a2 = 0; a2 < this.path.length; a2++) {
          const u2 = this.path[a2];
          if (!u2.instance || !qt(u2.latestValues)) continue;
          ia(u2.latestValues) && u2.updateSnapshot();
          const c = Y(), f2 = u2.measurePageBox();
          Ie(c, f2), sd(l, u2.latestValues, u2.snapshot ? u2.snapshot.layoutBox : void 0, c);
        }
        return qt(this.latestValues) && sd(l, this.latestValues), l;
      }
      setTargetDelta(o) {
        this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
      }
      setOptions(o) {
        this.options = { ...this.options, ...o, crossfade: o.crossfade !== void 0 ? o.crossfade : true };
      }
      clearMeasurements() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ae.timestamp && this.relativeParent.resolveTargetDelta(true);
      }
      resolveTargetDelta(o = false) {
        var l;
        const a2 = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = a2.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a2.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a2.isSharedProjectionDirty);
        const u2 = !!this.resumingFrom || this !== a2;
        if (!(o || u2 && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
        const { layout: f2, layoutId: d3 } = this.options;
        if (!(!this.layout || !(f2 || d3))) {
          if (this.resolvedRelativeTargetAt = ae.timestamp, !this.targetDelta && !this.relativeTarget) {
            const g4 = this.getClosestProjectingParent();
            g4 && g4.layout && this.animationProgress !== 1 ? (this.relativeParent = g4, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), Ir(this.relativeTargetOrigin, this.layout.layoutBox, g4.layout.layoutBox), Ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          if (!(!this.relativeTarget && !this.targetDelta)) {
            if (this.target || (this.target = Y(), this.targetWithTransforms = Y()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), aS(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ie(this.target, this.layout.layoutBox), ug(this.target, this.targetDelta)) : Ie(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = false;
              const g4 = this.getClosestProjectingParent();
              g4 && !!g4.resumingFrom == !!this.resumingFrom && !g4.options.layoutScroll && g4.target && this.animationProgress !== 1 ? (this.relativeParent = g4, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), Ir(this.relativeTargetOrigin, this.target, g4.target), Ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
            }
            Cr && Jt.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || ia(this.parent.latestValues) || ag(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
        var o;
        const l = this.getLead(), a2 = !!this.resumingFrom || this !== l;
        let u2 = true;
        if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u2 = false), a2 && (this.isSharedProjectionDirty || this.isTransformDirty) && (u2 = false), this.resolvedRelativeTargetAt === ae.timestamp && (u2 = false), u2) return;
        const { layout: c, layoutId: f2 } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f2)) return;
        Ie(this.layoutCorrected, this.layout.layoutBox);
        const d3 = this.treeScale.x, g4 = this.treeScale.y;
        vS(this.layoutCorrected, this.treeScale, this.path, a2), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = Y());
        const { target: y2 } = l;
        if (!y2) {
          this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (nd(this.prevProjectionDelta.x, this.projectionDelta.x), nd(this.prevProjectionDelta.y, this.projectionDelta.y)), _r(this.projectionDelta, this.layoutCorrected, y2, this.latestValues), (this.treeScale.x !== d3 || this.treeScale.y !== g4 || !cd(this.projectionDelta.x, this.prevProjectionDelta.x) || !cd(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", y2)), Cr && Jt.recalculatedProjection++;
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender(o = true) {
        var l;
        if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(), o) {
          const a2 = this.getStack();
          a2 && a2.scheduleRender();
        }
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = _n(), this.projectionDelta = _n(), this.projectionDeltaWithTransform = _n();
      }
      setAnimationOrigin(o, l = false) {
        const a2 = this.snapshot, u2 = a2 ? a2.latestValues : {}, c = { ...this.latestValues }, f2 = _n();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
        const d3 = Y(), g4 = a2 ? a2.source : void 0, y2 = this.layout ? this.layout.source : void 0, x3 = g4 !== y2, P3 = this.getStack(), p2 = !P3 || P3.members.length <= 1, h = !!(x3 && !p2 && this.options.crossfade === true && !this.path.some(nP));
        this.animationProgress = 0;
        let m;
        this.mixTargetDelta = (S3) => {
          const C3 = S3 / 1e3;
          pd(f2.x, o.x, C3), pd(f2.y, o.y, C3), this.setTargetDelta(f2), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ir(d3, this.layout.layoutBox, this.relativeParent.layout.layoutBox), tP(this.relativeTarget, this.relativeTargetOrigin, d3, C3), m && zS(this.relativeTarget, m) && (this.isProjectionDirty = false), m || (m = Y()), Ie(m, this.relativeTarget)), x3 && (this.animationValues = c, DS(c, u2, this.latestValues, C3, h, p2)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C3;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(o) {
        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Bt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = U.update(() => {
          rs.hasAnimatedSinceResize = true, this.currentAnimation = jS(0, fd, { ...o, onUpdate: (l) => {
            this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l);
          }, onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
        const o = this.getStack();
        o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(fd), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const o = this.getLead();
        let { targetWithTransforms: l, target: a2, layout: u2, latestValues: c } = o;
        if (!(!l || !a2 || !u2)) {
          if (this !== o && this.layout && u2 && xg(this.options.animationType, this.layout.layoutBox, u2.layoutBox)) {
            a2 = this.target || Y();
            const f2 = De(this.layout.layoutBox.x);
            a2.x.min = o.target.x.min, a2.x.max = a2.x.min + f2;
            const d3 = De(this.layout.layoutBox.y);
            a2.y.min = o.target.y.min, a2.y.max = a2.y.min + d3;
          }
          Ie(l, a2), On(l, c), _r(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
        }
      }
      registerSharedNode(o, l) {
        this.sharedNodes.has(o) || this.sharedNodes.set(o, new BS()), this.sharedNodes.get(o).add(l);
        const u2 = l.options.initialPromotionConfig;
        l.promote({ transition: u2 ? u2.transition : void 0, preserveFollowOpacity: u2 && u2.shouldPreserveFollowOpacity ? u2.shouldPreserveFollowOpacity(l) : void 0 });
      }
      isLead() {
        const o = this.getStack();
        return o ? o.lead === this : true;
      }
      getLead() {
        var o;
        const { layoutId: l } = this.options;
        return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
      }
      getPrevLead() {
        var o;
        const { layoutId: l } = this.options;
        return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0;
      }
      getStack() {
        const { layoutId: o } = this.options;
        if (o) return this.root.sharedNodes.get(o);
      }
      promote({ needsReset: o, transition: l, preserveFollowOpacity: a2 } = {}) {
        const u2 = this.getStack();
        u2 && u2.promote(this, a2), o && (this.projectionDelta = void 0, this.needsReset = true), l && this.setOptions({ transition: l });
      }
      relegate() {
        const o = this.getStack();
        return o ? o.relegate(this) : false;
      }
      resetSkewAndRotation() {
        const { visualElement: o } = this.options;
        if (!o) return;
        let l = false;
        const { latestValues: a2 } = o;
        if ((a2.z || a2.rotate || a2.rotateX || a2.rotateY || a2.rotateZ || a2.skewX || a2.skewY) && (l = true), !l) return;
        const u2 = {};
        a2.z && Ho("z", o, u2, this.animationValues);
        for (let c = 0; c < bo.length; c++) Ho(`rotate${bo[c]}`, o, u2, this.animationValues), Ho(`skew${bo[c]}`, o, u2, this.animationValues);
        o.render();
        for (const c in u2) o.setStaticValue(c, u2[c]), this.animationValues && (this.animationValues[c] = u2[c]);
        o.scheduleRender();
      }
      getProjectionStyles(o) {
        var l, a2;
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return $S;
        const u2 = { visibility: "" }, c = this.getTransformTemplate();
        if (this.needsReset) return this.needsReset = false, u2.opacity = "", u2.pointerEvents = ts(o == null ? void 0 : o.pointerEvents) || "", u2.transform = c ? c(this.latestValues, "") : "none", u2;
        const f2 = this.getLead();
        if (!this.projectionDelta || !this.layout || !f2.target) {
          const x3 = {};
          return this.options.layoutId && (x3.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, x3.pointerEvents = ts(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !qt(this.latestValues) && (x3.transform = c ? c({}, "") : "none", this.hasProjected = false), x3;
        }
        const d3 = f2.animationValues || f2.latestValues;
        this.applyTransformsToTarget(), u2.transform = US(this.projectionDeltaWithTransform, this.treeScale, d3), c && (u2.transform = c(d3, u2.transform));
        const { x: g4, y: y2 } = this.projectionDelta;
        u2.transformOrigin = `${g4.origin * 100}% ${y2.origin * 100}% 0`, f2.animationValues ? u2.opacity = f2 === this ? (a2 = (l = d3.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a2 !== void 0 ? a2 : 1 : this.preserveOpacity ? this.latestValues.opacity : d3.opacityExit : u2.opacity = f2 === this ? d3.opacity !== void 0 ? d3.opacity : "" : d3.opacityExit !== void 0 ? d3.opacityExit : 0;
        for (const x3 in Ms) {
          if (d3[x3] === void 0) continue;
          const { correct: P3, applyTo: p2 } = Ms[x3], h = u2.transform === "none" ? d3[x3] : P3(d3[x3], f2);
          if (p2) {
            const m = p2.length;
            for (let S3 = 0; S3 < m; S3++) u2[p2[S3]] = h;
          } else u2[x3] = h;
        }
        return this.options.layoutId && (u2.pointerEvents = f2 === this ? ts(o == null ? void 0 : o.pointerEvents) || "" : "none"), u2;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((o) => {
          var l;
          return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
        }), this.root.nodes.forEach(dd), this.root.sharedNodes.clear();
      }
    };
  }
  function bS(e) {
    e.updateLayout();
  }
  function HS(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: r, measuredBox: i } = e.layout, { animationType: s } = e.options, o = n.source !== e.layout.source;
      s === "size" ? Oe((f2) => {
        const d3 = o ? n.measuredBox[f2] : n.layoutBox[f2], g4 = De(d3);
        d3.min = r[f2].min, d3.max = d3.min + g4;
      }) : xg(s, n.layoutBox, r) && Oe((f2) => {
        const d3 = o ? n.measuredBox[f2] : n.layoutBox[f2], g4 = De(r[f2]);
        d3.max = d3.min + g4, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = true, e.relativeTarget[f2].max = e.relativeTarget[f2].min + g4);
      });
      const l = _n();
      _r(l, r, n.layoutBox);
      const a2 = _n();
      o ? _r(a2, e.applyTransform(i, true), n.measuredBox) : _r(a2, r, n.layoutBox);
      const u2 = !mg(l);
      let c = false;
      if (!e.resumeFrom) {
        const f2 = e.getClosestProjectingParent();
        if (f2 && !f2.resumeFrom) {
          const { snapshot: d3, layout: g4 } = f2;
          if (d3 && g4) {
            const y2 = Y();
            Ir(y2, n.layoutBox, d3.layoutBox);
            const x3 = Y();
            Ir(x3, r, g4.layoutBox), gg(y2, x3) || (c = true), f2.options.layoutRoot && (e.relativeTarget = x3, e.relativeTargetOrigin = y2, e.relativeParent = f2);
          }
        }
      }
      e.notifyListeners("didUpdate", { layout: r, snapshot: n, delta: a2, layoutDelta: l, hasLayoutChanged: u2, hasRelativeTargetChanged: c });
    } else if (e.isLead()) {
      const { onExitComplete: r } = e.options;
      r && r();
    }
    e.options.transition = void 0;
  }
  function KS(e) {
    Cr && Jt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function GS(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = false;
  }
  function QS(e) {
    e.clearSnapshot();
  }
  function dd(e) {
    e.clearMeasurements();
  }
  function XS(e) {
    e.isLayoutDirty = false;
  }
  function YS(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
  }
  function hd(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = true;
  }
  function ZS(e) {
    e.resolveTargetDelta();
  }
  function qS(e) {
    e.calcProjection();
  }
  function JS(e) {
    e.resetSkewAndRotation();
  }
  function eP(e) {
    e.removeLeadSnapshot();
  }
  function pd(e, t, n) {
    e.translate = b(t.translate, 0, n), e.scale = b(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
  }
  function md(e, t, n, r) {
    e.min = b(t.min, n.min, r), e.max = b(t.max, n.max, r);
  }
  function tP(e, t, n, r) {
    md(e.x, t.x, n.x, r), md(e.y, t.y, n.y, r);
  }
  function nP(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
  }
  var rP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
  var gd = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e);
  var vd = gd("applewebkit/") && !gd("chrome/") ? Math.round : Ne;
  function yd(e) {
    e.min = vd(e.min), e.max = vd(e.max);
  }
  function iP(e) {
    yd(e.x), yd(e.y);
  }
  function xg(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !lS(ud(t), ud(n), 0.2);
  }
  function sP(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
  }
  var oP = yg({ attachResizeListener: (e, t) => li(e, "resize", t), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => true });
  var Ko = { current: void 0 };
  var wg = yg({ measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }), defaultParent: () => {
    if (!Ko.current) {
      const e = new oP({});
      e.mount(window), e.setOptions({ layoutScroll: true }), Ko.current = e;
    }
    return Ko.current;
  }, resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  }, checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed" });
  var lP = { pan: { Feature: CS }, drag: { Feature: PS, ProjectionNode: wg, MeasureLayout: dg } };
  function xd(e, t, n) {
    const { props: r } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n, s = r[i];
    s && U.postRender(() => s(t, yi(t)));
  }
  var aP = class extends Ht {
    mount() {
      const { current: t } = this.node;
      t && (this.unmount = lx(t, (n) => (xd(this.node, n, "Start"), (r) => xd(this.node, r, "End"))));
    }
    unmount() {
    }
  };
  var uP = class extends Ht {
    constructor() {
      super(...arguments), this.isActive = false;
    }
    onFocus() {
      let t = false;
      try {
        t = this.node.current.matches(":focus-visible");
      } catch {
        t = true;
      }
      !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
    }
    onBlur() {
      !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
    }
    mount() {
      this.unmount = vi(li(this.node.current, "focus", () => this.onFocus()), li(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  };
  function wd(e, t, n) {
    const { props: r } = e;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n), s = r[i];
    s && U.postRender(() => s(t, yi(t)));
  }
  var cP = class extends Ht {
    mount() {
      const { current: t } = this.node;
      t && (this.unmount = fx(t, (n) => (wd(this.node, n, "Start"), (r, { success: i }) => wd(this.node, r, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
    }
    unmount() {
    }
  };
  var oa = /* @__PURE__ */ new WeakMap();
  var Go = /* @__PURE__ */ new WeakMap();
  var fP = (e) => {
    const t = oa.get(e.target);
    t && t(e);
  };
  var dP = (e) => {
    e.forEach(fP);
  };
  function hP({ root: e, ...t }) {
    const n = e || document;
    Go.has(n) || Go.set(n, {});
    const r = Go.get(n), i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(dP, { root: e, ...t })), r[i];
  }
  function pP(e, t, n) {
    const r = hP(t);
    return oa.set(e, n), r.observe(e), () => {
      oa.delete(e), r.unobserve(e);
    };
  }
  var mP = { some: 0, all: 1 };
  var gP = class extends Ht {
    constructor() {
      super(...arguments), this.hasEnteredView = false, this.isInView = false;
    }
    startObserver() {
      this.unmount();
      const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: s } = t, o = { root: n ? n.current : void 0, rootMargin: r, threshold: typeof i == "number" ? i : mP[i] }, l = (a2) => {
        const { isIntersecting: u2 } = a2;
        if (this.isInView === u2 || (this.isInView = u2, s && !u2 && this.hasEnteredView)) return;
        u2 && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", u2);
        const { onViewportEnter: c, onViewportLeave: f2 } = this.node.getProps(), d3 = u2 ? c : f2;
        d3 && d3(a2);
      };
      return pP(this.node.current, o, l);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      const { props: t, prevProps: n } = this.node;
      ["amount", "margin", "root"].some(vP(t, n)) && this.startObserver();
    }
    unmount() {
    }
  };
  function vP({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
  }
  var yP = { inView: { Feature: gP }, tap: { Feature: cP }, focus: { Feature: uP }, hover: { Feature: aP } };
  var xP = { layout: { ProjectionNode: wg, MeasureLayout: dg } };
  var la = { current: null };
  var Sg = { current: false };
  function wP() {
    if (Sg.current = true, !!uu) if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => la.current = e.matches;
      e.addListener(t), t();
    } else la.current = false;
  }
  var SP = [...Km, pe, Ut];
  var PP = (e) => SP.find(Hm(e));
  var Sd = /* @__PURE__ */ new WeakMap();
  function CP(e, t, n) {
    for (const r in t) {
      const i = t[r], s = n[r];
      if (ge(i)) e.addValue(r, i);
      else if (ge(s)) e.addValue(r, si(i, { owner: e }));
      else if (s !== i) if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === true ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, si(o !== void 0 ? o : i, { owner: e }));
      }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t;
  }
  var Pd = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
  var kP = class {
    scrapeMotionValuesFromProps(t, n, r) {
      return {};
    }
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o }, l = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Iu, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        const g4 = it.now();
        this.renderScheduledAt < g4 && (this.renderScheduledAt = g4, U.render(this.render, false, true));
      };
      const { latestValues: a2, renderState: u2, onUpdate: c } = o;
      this.onUpdate = c, this.latestValues = a2, this.baseTarget = { ...a2 }, this.initialValues = n.initial ? { ...a2 } : {}, this.renderState = u2, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!s, this.isControllingVariants = ro(n), this.isVariantNode = em(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
      const { willChange: f2, ...d3 } = this.scrapeMotionValuesFromProps(n, {}, this);
      for (const g4 in d3) {
        const y2 = d3[g4];
        a2[g4] !== void 0 && ge(y2) && y2.set(a2[g4], false);
      }
    }
    mount(t) {
      this.current = t, Sd.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Sg.current || wP(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : la.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
    }
    unmount() {
      Sd.delete(this.current), this.projection && this.projection.unmount(), Bt(this.notifyUpdate), Bt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
      for (const t in this.events) this.events[t].clear();
      for (const t in this.features) {
        const n = this.features[t];
        n && (n.unmount(), n.isMounted = false);
      }
      this.current = null;
    }
    bindToMotionValue(t, n) {
      this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
      const r = yn.has(t), i = n.on("change", (l) => {
        this.latestValues[t] = l, this.props.onUpdate && U.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = true);
      }), s = n.on("renderRequest", this.scheduleRender);
      let o;
      window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
    }
    sortNodePosition(t) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
    }
    updateFeatures() {
      let t = "animation";
      for (t in qn) {
        const n = qn[t];
        if (!n) continue;
        const { isEnabled: r, Feature: i } = n;
        if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
          const s = this.features[t];
          s.isMounted ? s.update() : (s.mount(), s.isMounted = true);
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Y();
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, n) {
      this.latestValues[t] = n;
    }
    update(t, n) {
      (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
      for (let r = 0; r < Pd.length; r++) {
        const i = Pd[r];
        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
        const s = "on" + i, o = t[s];
        o && (this.propEventSubscriptions[i] = this.on(i, o));
      }
      this.prevMotionValues = CP(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
    }
    getProps() {
      return this.props;
    }
    getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(t) {
      const n = this.getClosestVariantNode();
      if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
    }
    addValue(t, n) {
      const r = this.values.get(t);
      n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
    }
    removeValue(t) {
      this.values.delete(t);
      const n = this.valueSubscriptions.get(t);
      n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, n) {
      if (this.props.values && this.props.values[t]) return this.props.values[t];
      let r = this.values.get(t);
      return r === void 0 && n !== void 0 && (r = si(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
    }
    readValue(t, n) {
      var r;
      let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
      return i != null && (typeof i == "string" && (Wm(i) || Vm(i)) ? i = parseFloat(i) : !PP(i) && Ut.test(n) && (i = Bm(t, n)), this.setBaseTarget(t, ge(i) ? i.get() : i)), ge(i) ? i.get() : i;
    }
    setBaseTarget(t, n) {
      this.baseTarget[t] = n;
    }
    getBaseTarget(t) {
      var n;
      const { initial: r } = this.props;
      let i;
      if (typeof r == "string" || typeof r == "object") {
        const o = gu(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
        o && (i = o[t]);
      }
      if (r && i !== void 0) return i;
      const s = this.getBaseTargetFromProps(this.props, t);
      return s !== void 0 && !ge(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
    }
    on(t, n) {
      return this.events[t] || (this.events[t] = new Mu()), this.events[t].add(n);
    }
    notify(t, ...n) {
      this.events[t] && this.events[t].notify(...n);
    }
  };
  var Pg = class extends kP {
    constructor() {
      super(...arguments), this.KeyframeResolver = Gm;
    }
    sortInstanceNodePosition(t, n) {
      return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
      return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
      delete n[t], delete r[t];
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      ge(t) && (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
    }
  };
  function EP(e) {
    return window.getComputedStyle(e);
  }
  var TP = class extends Pg {
    constructor() {
      super(...arguments), this.type = "html", this.renderInstance = um;
    }
    readValueFromInstance(t, n) {
      if (yn.has(n)) {
        const r = _u(n);
        return r && r.default || 0;
      } else {
        const r = EP(t), i = (om(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof i == "string" ? i.trim() : i;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return cg(t, n);
    }
    build(t, n, r) {
      xu(t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n, r) {
      return Cu(t, n, r);
    }
  };
  var jP = class extends Pg {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = Y;
    }
    getBaseTargetFromProps(t, n) {
      return t[n];
    }
    readValueFromInstance(t, n) {
      if (yn.has(n)) {
        const r = _u(n);
        return r && r.default || 0;
      }
      return n = cm.has(n) ? n : hu(n), t.getAttribute(n);
    }
    scrapeMotionValuesFromProps(t, n, r) {
      return hm(t, n, r);
    }
    build(t, n, r) {
      wu(t, n, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(t, n, r, i) {
      fm(t, n, r, i);
    }
    mount(t) {
      this.isSVGTag = Pu(t.tagName), super.mount(t);
    }
  };
  var NP = (e, t) => mu(e) ? new jP(t) : new TP(t, { allowProjection: e !== w.Fragment });
  var RP = ex({ ...qw, ...yP, ...lP, ...xP }, NP);
  var Pe = m1(RP);
  var MP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var Cg = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
  var AP = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  var LP = w.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: i = "", children: s, iconNode: o, ...l }, a2) => w.createElement("svg", { ref: a2, ...AP, width: t, height: t, stroke: e, strokeWidth: r ? Number(n) * 24 / Number(t) : n, className: Cg("lucide", i), ...l }, [...o.map(([u2, c]) => w.createElement(u2, c)), ...Array.isArray(s) ? s : [s]]));
  var fe = (e, t) => {
    const n = w.forwardRef(({ className: r, ...i }, s) => w.createElement(LP, { ref: s, iconNode: t, className: Cg(`lucide-${MP(e)}`, r), ...i }));
    return n.displayName = `${e}`, n;
  };
  var DP = fe("ArrowRight", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]]);
  var VP = fe("CircleCheckBig", [["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
  var _P = fe("CircleCheck", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]);
  var IP = fe("CircleX", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]]);
  var OP = fe("Copy", [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]]);
  var FP = fe("Facebook", [["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }]]);
  var zP = fe("Heart", [["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z", key: "c3ymky" }]]);
  var BP = fe("Info", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]]);
  var UP = fe("Instagram", [["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }], ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }], ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]]);
  var $P = fe("Linkedin", [["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", key: "c2jq9f" }], ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }], ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]]);
  var WP = fe("Mail", [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]]);
  var bP = fe("MapPin", [["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]]);
  var HP = fe("Menu", [["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }], ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }], ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]]);
  var KP = fe("Phone", [["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z", key: "foiqr5" }]]);
  var Qo = fe("Scan", [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]]);
  var GP = fe("Twitter", [["path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z", key: "pff0z6" }]]);
  var ai = fe("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]);
  var YP = { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg", xl: "max-w-2xl" };
  var ZP = ({ isOpen: e, onClose: t, title: n, children: r, size: i = "md" }) => (w.useEffect(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [e]), w.useEffect(() => {
    const s = (o) => {
      o.key === "Escape" && t();
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [t]), v.jsx(ni, { children: e && v.jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4", role: "dialog", "aria-modal": "true", "aria-label": n, children: [v.jsx(Pe.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, className: "absolute inset-0 bg-charcoal-950/60 backdrop-blur-sm", onClick: t }), v.jsxs(Pe.div, { initial: { opacity: 0, scale: 0.96, y: 16 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.96, y: 16 }, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }, className: `relative bg-white rounded-3xl shadow-premium w-full ${YP[i]} overflow-hidden`, children: [n && v.jsxs("div", { className: "flex items-center justify-between px-6 py-5 border-b border-charcoal-100", children: [v.jsx("h2", { className: "font-display font-bold text-xl text-charcoal-900", children: n }), v.jsx("button", { onClick: t, className: "p-2 rounded-full hover:bg-charcoal-100 transition-colors text-charcoal-500 hover:text-charcoal-900", "aria-label": "Close modal", children: v.jsx(ai, { className: "w-5 h-5" }) })] }), !n && v.jsx("button", { onClick: t, className: "absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-charcoal-100 transition-colors text-charcoal-500 hover:text-charcoal-900", "aria-label": "Close modal", children: v.jsx(ai, { className: "w-5 h-5" }) }), v.jsx("div", { className: "p-6", children: r })] })] }) }));
  var Cd = [{ label: "Home", path: "/" }, { label: "About", path: "/about" }, { label: "Services", path: "/services" }, { label: "Gallery", path: "/gallery" }, { label: "Contact", path: "/contact" }];
  var qP = () => {
    const [e, t] = w.useState(false), [n, r] = w.useState(false), [i, s] = w.useState(false), c = vn();
    w.useEffect(() => {
      const g4 = () => t(window.scrollY > 40);
      return window.addEventListener("scroll", g4, { passive: true }), () => window.removeEventListener("scroll", g4);
    }, []);
    w.useEffect(() => {
      r(false);
    }, [c.pathname]);
    w.useEffect(() => (document.body.style.overflow = n ? "hidden" : "", () => {
      document.body.style.overflow = "";
    }), [n]);
    return v.jsxs(v.Fragment, { children: [v.jsx(Pe.header, { initial: { opacity: 0, y: -16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }, className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-3 sm:py-4"} border-b border-blue-100`, children: v.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: v.jsxs("div", { className: "flex items-center justify-between h-16 sm:h-20", children: [v.jsxs(lt, { to: "/", className: "flex items-center gap-3 group focus-visible:outline-none rounded-lg", "aria-label": "Hill Trust Ashram Home", children: [v.jsx("img", { src: "./assets/Logo.png", alt: "HILL TRUST ASHRAM", className: "h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm" })] }), v.jsx("nav", { className: "hidden md:flex items-center justify-center", children: v.jsx("div", { className: "spotlight-nav-pill flex items-center gap-1 px-5 py-2 rounded-full bg-white shadow-[0_4px_24px_rgba(37,99,235,0.08)] border border-blue-100", children: Cd.map((g4) => {
      const y2 = c.pathname === g4.path;
      return v.jsxs(lt, { to: g4.path, className: `relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 ${y2 ? "text-[#2563EB] font-extrabold" : "text-[#1E3A8A] hover:text-[#2563EB]"}`, children: [g4.label, y2 && v.jsx(Pe.span, { layoutId: "nav-active-pill", className: "absolute -bottom-1 left-2 right-2 h-[3px] rounded-full bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#FBBF24] shadow-[0_2px_8px_rgba(37,99,235,0.5)]", transition: { type: "spring", stiffness: 400, damping: 30 } })] }, g4.path);
    }) }) }), v.jsxs("div", { className: "flex items-center gap-3", children: [v.jsx("div", { className: "hidden md:block", children: v.jsxs("button", { type: "button", onClick: () => s(true), className: "btn-gold-donate flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-xs sm:text-sm tracking-wider uppercase text-[#1E3A8A] shadow-[0_4px_16px_rgba(251,191,36,0.45)] bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] hover:from-[#FCD34D] hover:to-[#FBBF24] hover:scale-105 active:scale-95 transition-all duration-300", children: [v.jsx("svg", { viewBox: "0 0 24 24", className: "w-4 h-4 fill-current", children: v.jsx("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" }) }), "DONATE NOW"] }) }), v.jsx("button", { className: "md:hidden p-2 rounded-xl transition-all duration-300 text-[#1E3A8A] hover:bg-blue-50", onClick: () => r((g4) => !g4), "aria-label": n ? "Close menu" : "Open menu", "aria-expanded": n, children: v.jsx(ni, { mode: "wait", initial: false, children: n ? v.jsx(Pe.span, { initial: { rotate: -90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: 90, opacity: 0 }, transition: { duration: 0.2 }, style: { display: "block" }, children: v.jsx(ai, { className: "w-6 h-6" }) }, "close") : v.jsx(Pe.span, { initial: { rotate: 90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: -90, opacity: 0 }, transition: { duration: 0.2 }, style: { display: "block" }, children: v.jsx(HP, { className: "w-6 h-6" }) }, "menu") }) })] })] }) }) }), v.jsx(ZP, { isOpen: i, onClose: () => s(false), title: "Donate to Hill Trust Ashram", size: "md", children: v.jsxs("div", { className: "flex flex-col items-center gap-5 text-center", children: [v.jsx("div", { className: "w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#FBBF24] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.35)]", children: v.jsx(Qo, { className: "w-7 h-7 text-white" }) }), v.jsx("p", { className: "text-sm text-slate-600 max-w-sm", children: "Scan the QR code below using any UPI app (GPay, PhonePe, Paytm) or use our bank details to complete your donation." }), v.jsx("div", { className: "rounded-3xl border-2 border-dashed border-[#FBBF24] p-4 bg-blue-50/60", children: v.jsx("img", { src: "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=9944704699@upi&pn=Hill%20Trust&cu=INR&am=1001", alt: "UPI QR Code", className: "mx-auto w-52 h-52 object-contain" }) }), v.jsxs("div", { className: "w-full grid grid-cols-1 gap-3", children: [v.jsx("button", { type: "button", className: "w-full py-3 px-6 rounded-full font-bold text-[#1E3A8A] bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] hover:from-[#FCD34D] hover:to-[#FBBF24] shadow-md transition-all", onClick: () => s(false), children: "I Have Paid" }), v.jsx("button", { type: "button", className: "w-full py-3 px-6 rounded-full font-bold text-[#2563EB] border-2 border-[#2563EB] hover:bg-blue-50 transition-all", onClick: () => {
      navigator.clipboard.writeText("9944704699@upi");
    }, children: "Copy UPI ID (9944704699@upi)" })] }), v.jsxs("p", { className: "text-xs text-slate-500", children: ["UPI ID: ", v.jsx("span", { className: "font-bold text-[#2563EB]", children: "9944704699@upi" }), v.jsx("br", {}), "Axis Bank A/C: 919010013069384 - IFSC: UTIB0002095"] })] }) }), v.jsx(ni, { children: n && v.jsxs(Pe.div, { initial: { opacity: 0, x: "100%" }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: "100%" }, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }, className: "fixed inset-0 z-40 md:hidden", children: [v.jsx(Pe.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "absolute inset-0 bg-[#172554]/60 backdrop-blur-sm", onClick: () => r(false) }), v.jsxs("div", { className: "absolute top-0 right-0 h-full w-[300px] bg-[#EFF6FF] shadow-2xl flex flex-col overflow-y-auto", children: [v.jsxs("div", { className: "flex items-center justify-between px-6 py-6 border-b border-blue-200/60 bg-white", children: [v.jsx(lt, { to: "/", className: "flex items-center gap-2", children: v.jsx("img", { src: "./assets/Logo.png", alt: "HILL TRUST ASHRAM", className: "h-12 w-auto object-contain" }) }), v.jsx("button", { onClick: () => r(false), className: "p-2 rounded-xl hover:bg-blue-100 text-[#1E3A8A]", "aria-label": "Close menu", children: v.jsx(ai, { className: "w-5 h-5" }) })] }), v.jsx("nav", { className: "flex-1 px-4 py-6 space-y-1", children: Cd.map((g4, y2) => {
      const x3 = c.pathname === g4.path;
      return v.jsx(Pe.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.05 + y2 * 0.06, duration: 0.3 }, children: v.jsxs(lt, { to: g4.path, className: `flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold text-sm tracking-wider uppercase transition-all duration-200 ${x3 ? "bg-white text-[#2563EB] shadow-sm" : "text-[#1E3A8A] hover:bg-white/80 hover:text-[#2563EB]"}`, children: [g4.label, x3 && v.jsx("div", { className: "w-2 h-2 rounded-full bg-[#FBBF24]" })] }) }, g4.path);
    }) }), v.jsxs("div", { className: "px-4 pb-8 pt-4 border-t border-blue-200/60 space-y-3 bg-white", children: [v.jsx("button", { type: "button", className: "w-full py-3.5 px-6 rounded-full font-bold text-sm tracking-wider uppercase text-[#1E3A8A] shadow-lg bg-gradient-to-r from-[#FBBF24] to-[#F59E0B]", onClick: () => s(true), children: "DONATE NOW" }), v.jsx(lt, { to: "/contact", className: "block text-center w-full py-3 px-6 rounded-full font-bold text-sm text-[#2563EB] border-2 border-[#2563EB]/30 hover:bg-blue-50", children: "Get In Touch" })] })] })] }) })] });
  };
  var Xo = { organization: [{ label: "About Us", path: "/about" }, { label: "Photo Gallery", path: "/gallery" }, { label: "Our Mission", path: "/about#mission" }, { label: "Our Values", path: "/about#values" }, { label: "Impact Report", path: "/about#impact" }], services: [{ label: "Food Support", path: "/services#food" }, { label: "Education", path: "/services#education" }, { label: "Elderly Care", path: "/services#elderly" }, { label: "Emergency Relief", path: "/services#emergency" }], getInvolved: [{ label: "Volunteer", path: "/contact" }, { label: "Donate", path: "/contact" }, { label: "Become a Sponsor", path: "/contact" }, { label: "Partner With Us", path: "/contact" }] };
  var JP = [{ icon: UP, label: "Instagram", href: "#" }, { icon: GP, label: "Twitter / X", href: "#" }, { icon: $P, label: "LinkedIn", href: "#" }, { icon: FP, label: "Facebook", href: "#" }];
  var eC = () => v.jsxs("footer", { className: "footer-ambient text-white relative overflow-hidden", role: "contentinfo", children: [v.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-forest-500/10 rounded-full blur-[100px] pointer-events-none" }), v.jsx("div", { className: "absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" }), v.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-5 sm:pb-6", children: [v.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8", children: [v.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [v.jsxs(lt, { to: "/", className: "flex items-center gap-3.5 w-fit group", children: [v.jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-forest-500 via-forest-600 to-forest-800 rounded-2xl flex items-center justify-center shadow-[0_0_24px_rgba(34,197,94,0.35)] border border-forest-400/40 group-hover:scale-105 transition-all duration-300", children: v.jsx("svg", { viewBox: "0 0 24 24", fill: "none", className: "w-6 h-6", children: v.jsx("path", { d: "M12 2C8.686 2 6 4.686 6 8c0 2.122 1.065 3.99 2.693 5.115C5.435 14.374 3 17.463 3 21a1 1 0 001 1h16a1 1 0 001-1c0-3.537-2.435-6.626-5.693-7.885C16.935 11.99 18 10.122 18 8c0-3.314-2.686-6-6-6z", fill: "white" }) }) }), v.jsxs("div", { children: [v.jsx("div", { className: "font-display font-bold text-lg tracking-wide text-white group-hover:text-forest-300 transition-colors", children: "HILL CHARITY" }), v.jsx("div", { className: "text-[10px] tracking-[0.2em] uppercase text-forest-400 font-semibold", children: "Hill Organisation for People's Education" })] })] }), v.jsx("p", { className: "text-charcoal-300 leading-relaxed text-sm max-w-sm", children: "Supporting poor, orphan, abandoned children and women throughout Tuticorin & Tamil Nadu with shelter, education, food and medical care." }), v.jsxs("div", { className: "footer-card p-4 space-y-1.5 max-w-sm", children: [v.jsx("p", { className: "text-forest-400 text-xs font-semibold italic", children: '"\u0BA8\u0BBE\u0BAE\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BBE\u0BB2\u0BCD, \u0BAF\u0BBE\u0BB0\u0BC1\u0BAE\u0BCD \u0BA4\u0BA9\u0BBF\u0BAF\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BBF\u0BAF\u0BA4\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8."' }), v.jsx("p", { className: "text-charcoal-400 text-[11px]", children: '"When we are together, no one needs to be alone."' })] }), v.jsx("div", { className: "flex items-center gap-3 pt-2", children: JP.map(({ icon: e, label: t, href: n }) => v.jsx("a", { href: n, "aria-label": t, className: "footer-social-btn", children: v.jsx(e, { className: "w-4 h-4" }) }, t)) })] }), v.jsxs("div", { className: "space-y-4", children: [v.jsxs("h3", { className: "text-xs font-bold tracking-[0.2em] uppercase text-forest-400 flex items-center gap-2", children: [v.jsx("span", { className: "w-2 h-2 rounded-full bg-forest-500 animate-pulse" }), "Organization"] }), v.jsx("ul", { className: "space-y-3", children: Xo.organization.map((e) => v.jsx("li", { children: v.jsx(lt, { to: e.path, className: "text-sm text-charcoal-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200", children: e.label }) }, e.label)) })] }), v.jsxs("div", { className: "space-y-4", children: [v.jsxs("h3", { className: "text-xs font-bold tracking-[0.2em] uppercase text-forest-400 flex items-center gap-2", children: [v.jsx("span", { className: "w-2 h-2 rounded-full bg-forest-500 animate-pulse" }), "Services"] }), v.jsx("ul", { className: "space-y-3", children: Xo.services.map((e) => v.jsx("li", { children: v.jsx(lt, { to: e.path, className: "text-sm text-charcoal-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200", children: e.label }) }, e.label)) })] }), v.jsxs("div", { className: "space-y-4", children: [v.jsxs("h3", { className: "text-xs font-bold tracking-[0.2em] uppercase text-forest-400 flex items-center gap-2", children: [v.jsx("span", { className: "w-2 h-2 rounded-full bg-forest-500 animate-pulse" }), "Get In Touch"] }), v.jsx("ul", { className: "space-y-3", children: Xo.getInvolved.map((e) => v.jsx("li", { children: v.jsx(lt, { to: e.path, className: "text-sm text-charcoal-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200", children: e.label }) }, e.label)) }), v.jsxs("div", { className: "pt-4 space-y-2 border-t border-white/10", children: [v.jsxs("a", { href: "mailto:hillorganization85@gmail.com", className: "footer-pill text-xs text-charcoal-300 w-full", children: [v.jsx(WP, { className: "w-3.5 h-3.5 text-forest-400 shrink-0" }), "hillorganization85@gmail.com"] }), v.jsxs("a", { href: "tel:+919944704699", className: "footer-pill text-xs text-charcoal-300 w-full", children: [v.jsx(KP, { className: "w-3.5 h-3.5 text-forest-400 shrink-0" }), "+91 9944704699 / +91 9952020878"] }), v.jsxs("div", { className: "footer-pill text-xs text-charcoal-300 w-full", children: [v.jsx(bP, { className: "w-3.5 h-3.5 text-forest-400 shrink-0" }), "42N, Bryant Nagar 1st Street (East), Tuticorin - 628008"] })] })] })] }), v.jsxs("div", { className: "mt-6 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400", children: [v.jsxs("p", { children: ["\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " Hill Charity. All rights reserved."] }), v.jsxs("p", { className: "flex items-center gap-1.5 text-charcoal-400", children: ["Building hope with ", v.jsx(zP, { className: "w-3.5 h-3.5 text-red-400 fill-red-400" }), " across communities"] }), v.jsxs("div", { className: "flex items-center gap-5", children: [v.jsx("a", { href: "#", className: "hover:text-forest-400 transition-colors", children: "Privacy Policy" }), v.jsx("a", { href: "#", className: "hover:text-forest-400 transition-colors", children: "Terms of Use" })] })] })] })] });
  var tC = w.createContext(null);
  var nC = { success: v.jsx(VP, { className: "w-5 h-5 text-forest-500" }), error: v.jsx(IP, { className: "w-5 h-5 text-red-500" }), info: v.jsx(BP, { className: "w-5 h-5 text-blue-500" }) };
  var rC = { success: "border-forest-200 bg-forest-50", error: "border-red-200 bg-red-50", info: "border-blue-200 bg-blue-50" };
  var iC = ({ toast: e, onClose: t }) => v.jsxs(Pe.div, { layout: true, initial: { opacity: 0, y: -20, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -10, scale: 0.96 }, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }, className: `flex items-start gap-3 p-4 rounded-2xl border shadow-premium max-w-sm w-full ${rC[e.type]}`, role: "alert", children: [v.jsx("div", { className: "shrink-0 mt-0.5", children: nC[e.type] }), v.jsxs("div", { className: "flex-1 min-w-0", children: [v.jsx("p", { className: "font-semibold text-charcoal-900 text-sm", children: e.title }), e.message && v.jsx("p", { className: "text-charcoal-600 text-sm mt-0.5", children: e.message })] }), v.jsx("button", { onClick: () => t(e.id), className: "shrink-0 text-charcoal-400 hover:text-charcoal-700 transition-colors", "aria-label": "Dismiss", children: v.jsx(ai, { className: "w-4 h-4" }) })] });
  var sC = ({ children: e }) => {
    const [t, n] = w.useState([]), r = w.useCallback((s, o, l) => {
      const a2 = Date.now().toString();
      n((u2) => [...u2, { id: a2, type: s, title: o, message: l }]), setTimeout(() => {
        n((u2) => u2.filter((c) => c.id !== a2));
      }, 5e3);
    }, []), i = w.useCallback((s) => {
      n((o) => o.filter((l) => l.id !== s));
    }, []);
    return v.jsxs(tC.Provider, { value: { showToast: r }, children: [e, v.jsx("div", { className: "fixed top-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none", "aria-live": "polite", "aria-atomic": "false", children: v.jsx(ni, { mode: "popLayout", children: t.map((s) => v.jsx("div", { className: "pointer-events-auto", children: v.jsx(iC, { toast: s, onClose: i }) }, s.id)) }) })] });
  };
  if (typeof window !== "undefined" && window.location.protocol === "file:") {
    window.addEventListener("hashchange", function() {
      window.location.reload();
    });
    document.addEventListener("click", function(e) {
      var a2 = e.target.closest("a");
      if (a2 && a2.getAttribute("href") && a2.getAttribute("href").startsWith("/") && !a2.getAttribute("href").startsWith("//")) {
        e.preventDefault();
        window.location.hash = a2.getAttribute("href");
      }
    }, true);
  }

  // assets/shield-check-D35hyvAM.js
  var a = fe("Eye", [["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]);
  var d = fe("ShieldCheck", [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]);

  // assets/use-in-view-DfQYWAaa.js
  var E2 = { some: 0, all: 1 };
  function I2(s, r, { root: i, margin: c, amount: t = "some" } = {}) {
    const f2 = ox(s), n = /* @__PURE__ */ new WeakMap(), u2 = (a2) => {
      a2.forEach((e) => {
        const l = n.get(e.target);
        if (e.isIntersecting !== !!l) if (e.isIntersecting) {
          const d3 = r(e);
          typeof d3 == "function" ? n.set(e.target, d3) : o.unobserve(e.target);
        } else typeof l == "function" && (l(e), n.delete(e.target));
      });
    }, o = new IntersectionObserver(u2, { root: i, rootMargin: c, threshold: typeof t == "number" ? t : E2[t] });
    return f2.forEach((a2) => o.observe(a2)), () => o.disconnect();
  }
  function w2(s, { root: r, margin: i, amount: c, once: t = false } = {}) {
    const [f2, n] = w.useState(false);
    return w.useEffect(() => {
      if (!s.current || t && f2) return;
      const u2 = () => (n(true), t ? void 0 : () => n(false)), o = { root: r && r.current || void 0, margin: i, amount: c };
      return I2(s.current, u2, o);
    }, [r, s, i, t, c]), f2;
  }

  // assets/CTASection-DsUdwk3m.js
  function N(e, t) {
    let s;
    const n = () => {
      const { currentTime: r } = t, l = (r === null ? 0 : r.value) / 100;
      s !== l && e(l), s = l;
    };
    return U.update(n, true), () => Bt(n);
  }
  var y = /* @__PURE__ */ new WeakMap();
  var d2;
  function ne2(e, t) {
    if (t) {
      const { inlineSize: s, blockSize: n } = t[0];
      return { width: s, height: n };
    } else return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : { width: e.offsetWidth, height: e.offsetHeight };
  }
  function se2({ target: e, contentRect: t, borderBoxSize: s }) {
    var n;
    (n = y.get(e)) === null || n === void 0 || n.forEach((r) => {
      r({ target: e, contentSize: t, get size() {
        return ne2(e, s);
      } });
    });
  }
  function re(e) {
    e.forEach(se2);
  }
  function oe2() {
    typeof ResizeObserver > "u" || (d2 = new ResizeObserver(re));
  }
  function le2(e, t) {
    d2 || oe2();
    const s = ox(e);
    return s.forEach((n) => {
      let r = y.get(n);
      r || (r = /* @__PURE__ */ new Set(), y.set(n, r)), r.add(t), d2 == null || d2.observe(n);
    }), () => {
      s.forEach((n) => {
        const r = y.get(n);
        r == null || r.delete(t), r != null && r.size || d2 == null || d2.unobserve(n);
      });
    };
  }
  var w3 = /* @__PURE__ */ new Set();
  var v2;
  function ie() {
    v2 = () => {
      const e = { width: window.innerWidth, height: window.innerHeight }, t = { target: window, size: e, contentSize: e };
      w3.forEach((s) => s(t));
    }, window.addEventListener("resize", v2);
  }
  function ce2(e) {
    return w3.add(e), v2 || ie(), () => {
      w3.delete(e), !w3.size && v2 && (v2 = void 0);
    };
  }
  function ue2(e, t) {
    return typeof e == "function" ? ce2(e) : le2(e, t);
  }
  var fe2 = 50;
  var k = () => ({ current: 0, offset: [], progress: 0, scrollLength: 0, targetOffset: 0, targetLength: 0, containerLength: 0, velocity: 0 });
  var ae2 = () => ({ time: 0, x: k(), y: k() });
  var de2 = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
  function B2(e, t, s, n) {
    const r = s[t], { length: o, position: l } = de2[t], i = r.current, c = s.time;
    r.current = e[`scroll${l}`], r.scrollLength = e[`scroll${o}`] - e[`client${o}`], r.offset.length = 0, r.offset[0] = 0, r.offset[1] = r.scrollLength, r.progress = Zn(0, r.scrollLength, r.current);
    const f2 = n - c;
    r.velocity = f2 > fe2 ? 0 : km(r.current - i, f2);
  }
  function he2(e, t, s) {
    B2(e, "x", t, s), B2(e, "y", t, s), t.time = s;
  }
  function ge2(e, t) {
    const s = { x: 0, y: 0 };
    let n = e;
    for (; n && n !== t; ) if (n instanceof HTMLElement) s.x += n.offsetLeft, s.y += n.offsetTop, n = n.offsetParent;
    else if (n.tagName === "svg") {
      const r = n.getBoundingClientRect();
      n = n.parentElement;
      const o = n.getBoundingClientRect();
      s.x += r.left - o.left, s.y += r.top - o.top;
    } else if (n instanceof SVGGraphicsElement) {
      const { x: r, y: o } = n.getBBox();
      s.x += r, s.y += o;
      let l = null, i = n.parentNode;
      for (; !l; ) i.tagName === "svg" && (l = i), i = n.parentNode;
      n = l;
    } else break;
    return s;
  }
  var W2 = { start: 0, center: 0.5, end: 1 };
  function A(e, t, s = 0) {
    let n = 0;
    if (e in W2 && (e = W2[e]), typeof e == "string") {
      const r = parseFloat(e);
      e.endsWith("px") ? n = r : e.endsWith("%") ? e = r / 100 : e.endsWith("vw") ? n = r / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = r / 100 * document.documentElement.clientHeight : e = r;
    }
    return typeof e == "number" && (n = t * e), s + n;
  }
  var pe2 = [0, 0];
  function me2(e, t, s, n) {
    let r = Array.isArray(e) ? e : pe2, o = 0, l = 0;
    return typeof e == "number" ? r = [e, e] : typeof e == "string" && (e = e.trim(), e.includes(" ") ? r = e.split(" ") : r = [e, W2[e] ? e : "0"]), o = A(r[0], s, n), l = A(r[1], t), o - l;
  }
  var ve2 = { All: [[0, 0], [1, 1]] };
  var ye2 = { x: 0, y: 0 };
  function we2(e) {
    return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : { width: e.clientWidth, height: e.clientHeight };
  }
  function Ee2(e, t, s) {
    const { offset: n = ve2.All } = s, { target: r = e, axis: o = "y" } = s, l = o === "y" ? "height" : "width", i = r !== e ? ge2(r, e) : ye2, c = r === e ? { width: e.scrollWidth, height: e.scrollHeight } : we2(r), f2 = { width: e.clientWidth, height: e.clientHeight };
    t[o].offset.length = 0;
    let a2 = !t[o].interpolate;
    const E5 = n.length;
    for (let u2 = 0; u2 < E5; u2++) {
      const O3 = me2(n[u2], f2[l], c[l], i[o]);
      !a2 && O3 !== t[o].interpolatorOffsets[u2] && (a2 = true), t[o].offset[u2] = O3;
    }
    a2 && (t[o].interpolate = yw(t[o].offset, ww(n), { clamp: false }), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = vt(0, 1, t[o].interpolate(t[o].current));
  }
  function xe2(e, t = e, s) {
    if (s.x.targetOffset = 0, s.y.targetOffset = 0, t !== e) {
      let n = t;
      for (; n && n !== e; ) s.x.targetOffset += n.offsetLeft, s.y.targetOffset += n.offsetTop, n = n.offsetParent;
    }
    s.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, s.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, s.x.containerLength = e.clientWidth, s.y.containerLength = e.clientHeight;
  }
  function Le2(e, t, s, n = {}) {
    return { measure: () => xe2(e, n.target, s), update: (r) => {
      he2(e, s, r), (n.offset || n.target) && Ee2(e, s, n);
    }, notify: () => t(s) };
  }
  var g = /* @__PURE__ */ new WeakMap();
  var C = /* @__PURE__ */ new WeakMap();
  var z2 = /* @__PURE__ */ new WeakMap();
  var M2 = (e) => e === document.documentElement ? window : e;
  function T(e, { container: t = document.documentElement, ...s } = {}) {
    let n = z2.get(t);
    n || (n = /* @__PURE__ */ new Set(), z2.set(t, n));
    const r = ae2(), o = Le2(t, e, r, s);
    if (n.add(o), !g.has(t)) {
      const i = () => {
        for (const u2 of n) u2.measure();
      }, c = () => {
        for (const u2 of n) u2.update(ae.timestamp);
      }, f2 = () => {
        for (const u2 of n) u2.notify();
      }, a2 = () => {
        U.read(i, false, true), U.read(c, false, true), U.update(f2, false, true);
      };
      g.set(t, a2);
      const E5 = M2(t);
      window.addEventListener("resize", a2, { passive: true }), t !== document.documentElement && C.set(t, ue2(t, a2)), E5.addEventListener("scroll", a2, { passive: true });
    }
    const l = g.get(t);
    return U.read(l, false, true), () => {
      var i;
      Bt(l);
      const c = z2.get(t);
      if (!c || (c.delete(o), c.size)) return;
      const f2 = g.get(t);
      g.delete(t), f2 && (M2(t).removeEventListener("scroll", f2), (i = C.get(t)) === null || i === void 0 || i(), window.removeEventListener("resize", f2));
    };
  }
  function ze2({ source: e, container: t, axis: s = "y" }) {
    e && (t = e);
    const n = { value: 0 }, r = T((o) => {
      n.value = o[s].progress * 100;
    }, { container: t, axis: s });
    return { currentTime: n, cancel: r };
  }
  var S = /* @__PURE__ */ new Map();
  function j({ source: e, container: t = document.documentElement, axis: s = "y" } = {}) {
    e && (t = e), S.has(t) || S.set(t, {});
    const n = S.get(t);
    return n[s] || (n[s] = tx() ? new ScrollTimeline({ source: t, axis: s }) : ze2({ source: t, axis: s })), n[s];
  }
  function Se2(e) {
    return e.length === 2;
  }
  function Y2(e) {
    return e && (e.target || e.offset);
  }
  function We2(e, t) {
    return Se2(e) || Y2(t) ? T((s) => {
      e(s[t.axis].progress, s);
    }, t) : N(e, j(t));
  }
  function He2(e, t) {
    if (e.flatten(), Y2(t)) return e.pause(), T((s) => {
      e.time = e.duration * s[t.axis].progress;
    }, t);
    {
      const s = j(t);
      return e.attachTimeline ? e.attachTimeline(s, (n) => (n.pause(), N((r) => {
        n.time = n.duration * r;
      }, s))) : Ne;
    }
  }
  function be2(e, { axis: t = "y", ...s } = {}) {
    const n = { axis: t, ...s };
    return typeof e == "function" ? We2(e, n) : He2(e, n);
  }
  function I3(e, t) {
    pC(!!(!t || t.current));
  }
  var Te2 = () => ({ scrollX: si(0), scrollY: si(0), scrollXProgress: si(0), scrollYProgress: si(0) });
  function Oe2({ container: e, target: t, layoutEffect: s = true, ...n } = {}) {
    const r = lu(Te2);
    return (s ? Xp : w.useEffect)(() => (I3("target", t), I3("container", e), be2((l, { x: i, y: c }) => {
      r.scrollX.set(i.current), r.scrollXProgress.set(i.progress), r.scrollY.set(c.current), r.scrollYProgress.set(c.progress);
    }, { ...n, container: (e == null ? void 0 : e.current) || void 0, target: (t == null ? void 0 : t.current) || void 0 })), [e, t, JSON.stringify(n.offset)]), r;
  }
  function ke2(e) {
    const t = lu(() => si(e)), { isStatic: s } = w.useContext(au);
    if (s) {
      const [, n] = w.useState(e);
      w.useEffect(() => t.on("change", n), []);
    }
    return t;
  }
  function F2(e, t) {
    const s = ke2(t()), n = () => s.set(t());
    return n(), Xp(() => {
      const r = () => U.preRender(n, false, true), o = e.map((l) => l.on("change", r));
      return () => {
        o.forEach((l) => l()), Bt(n);
      };
    }), s;
  }
  var Be2 = (e) => e && typeof e == "object" && e.mix;
  var Ae2 = (e) => Be2(e) ? e.mix : void 0;
  function Ce2(...e) {
    const t = !Array.isArray(e[0]), s = t ? 0 : -1, n = e[0 + s], r = e[1 + s], o = e[2 + s], l = e[3 + s], i = yw(r, o, { mixer: Ae2(o[0]), ...l });
    return t ? i(n) : i;
  }
  function Me2(e) {
    wf.current = [], e();
    const t = F2(wf.current, e);
    return wf.current = void 0, t;
  }
  function Ie2(e, t, s, n) {
    if (typeof e == "function") return Me2(e);
    const r = typeof t == "function" ? t : Ce2(t, s, n);
    return Array.isArray(e) ? P(e, r) : P([e], ([o]) => r(o));
  }
  function P(e, t) {
    const s = lu(() => []);
    return F2(e, () => {
      s.length = 0;
      const n = e.length;
      for (let r = 0; r < n; r++) s[r] = e[r].get();
      return t(s);
    });
  }
  var Re2 = fe("Users", [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]]);
  var Ne2 = () => {
    const e = w.useRef(null);
    w2(e, { once: true, margin: "-80px" });
    const { scrollYProgress: t } = Oe2({ target: e, offset: ["start end", "end start"] }), s = Ie2(t, [0, 1], ["-10%", "10%"]);
    return v.jsx("section", { ref: e, className: "relative py-12 md:py-16 lg:py-20 overflow-hidden", "aria-labelledby": "cta-heading", children: v.jsx(Pe.div, { style: { y: s }, className: "absolute inset-0 scale-110 z-0", children: v.jsx("img", { src: "./assets/mom.png", alt: "A mother receiving support", className: "w-full h-full object-cover object-center", loading: "lazy" }) }) });
  };

  // assets/ImpactStats-0WLLq7gL.js
  var k2 = fe("GraduationCap", [["path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z", key: "j76jl0" }], ["path", { d: "M22 10v6", key: "1lu8f3" }], ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]]);
  var S2 = fe("ShieldAlert", [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "M12 8v4", key: "1got3b" }], ["path", { d: "M12 16h.01", key: "1drbdi" }]]);
  var j2 = fe("Soup", [["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }], ["path", { d: "M7 21h10", key: "1b0cd5" }], ["path", { d: "M19.5 12 22 6", key: "shfsr5" }], ["path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62", key: "rpc6vp" }], ["path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62", key: "1lf63m" }], ["path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62", key: "97tijn" }]]);
  var N2 = fe("Stethoscope", [["path", { d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3", key: "10lez9" }], ["path", { d: "M8 15v1a6 6 0 0 0 6 6a6 6 0 0 0 6-6v-4", key: "ce9bce" }], ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]]);
  var f = [
    { value: 10, suffix: "+", label: "Years of Service", sublabel: "Serving Tuticorin Since 2014" },
    { value: 7, suffix: " Core", label: "Active Programs", sublabel: "Children, Women & Seniors" },
    { value: 25e3, suffix: "+", label: "Meals & Kits Given", sublabel: "Across Rural Tamil Nadu" },
    { value: 100, suffix: "%", label: "Direct Transparency", sublabel: "Verified Charitable Trust" }
  ];
  var M3 = [
    {
      id: "women",
      icon: "Users",
      title: "Women Empowerment",
      description: "Empowering underprivileged young women who excel in school but are forced into daily-wage labor due to economic hardship. We provide higher education sponsorships, vocational skill training, and financial independence.",
      provides: [
        "Higher education college sponsorships",
        "Tailoring & vocational skills training",
        "Self-help group guidance and empowerment",
        "Financial literacy & confidence building",
        "Career placement & mentorship"
      ],
      howToHelp: "Sponsor a girl student's college fee, donate sewing machines, or conduct skill training sessions.",
      image: "./assets/mom.png",
      color: "from-blue-600/20 to-amber-500/10"
    },
    {
      id: "child",
      icon: "GraduationCap",
      title: "Child Development Centres",
      description: "Child Development Centres are established in rural villages around Tuticorin to help rural kids develop their education, study habits, nutrition, and personality.",
      provides: [
        "Free evening study centres in rural villages",
        "School bags, uniforms & notebook supplies",
        "Nutritious evening snacks for growing children",
        "Moral values & character development",
        "Special tutoring in English, Science & Math"
      ],
      howToHelp: "Adopt a village development centre, donate books and study materials, or volunteer as a weekend teacher.",
      image: "./assets/k.png",
      color: "from-amber-400/20 to-blue-500/10"
    },
    {
      id: "abandoned",
      icon: "Heart",
      title: "Abandoned Children Home",
      description: "Hope Children Home provides loving shelter, complete nutrition, quality schooling, and medical care for abandoned and orphaned girl children in Tuticorin.",
      provides: [
        "Safe, clean residential shelter (Hope Children Home)",
        "Full schooling and English-medium education",
        "3 nutritious balanced meals daily & fruit diet",
        "24/7 medical supervision & pediatric care",
        "Family environment with love, joy and affection"
      ],
      howToHelp: "Sponsor a girl child at Rs. 1,000/- per month, celebrate birthdays with kids, or donate dry groceries.",
      image: "./assets/p.png",
      color: "from-blue-500/20 to-amber-400/10"
    },
    {
      id: "aged",
      icon: "Heart",
      title: "Home for the Aged",
      description: "Elderly destitute women who are abandoned by their children, homeless, or left on the streets to survive on their own are rescued, sheltered, and cared for with lifelong dignity.",
      provides: [
        "Comfortable shelter, beds & peaceful surroundings",
        "Daily hot hygienic meals cooked with love",
        "Special geriatric medical care & medicines",
        "Doctor visits & health monitoring",
        "Compassionate caregiving and emotional warmth"
      ],
      howToHelp: "Sponsor an elderly mother at Rs. 2,500/- per month, sponsor special meal days, or visit our ashram.",
      image: "./assets/z.png",
      color: "from-amber-500/20 to-blue-600/10"
    },
    {
      id: "awareness",
      icon: "Stethoscope",
      title: "Awareness Programs",
      description: "Grassroots community awareness drives on girl child education, child rights, prevention of child marriage, and women's physical & mental health across rural districts.",
      provides: [
        "Village campaigns against child marriage",
        "Promotion of girl child school retention",
        "Women's health, hygiene & wellness camps",
        "Legal awareness & rights counseling",
        "Mental health & adolescent counseling"
      ],
      howToHelp: "Partner with our outreach team, sponsor campaign banners & awareness literature, or volunteer.",
      image: "./assets/medical.png",
      color: "from-blue-600/20 to-blue-400/10"
    },
    {
      id: "disaster",
      icon: "ShieldAlert",
      title: "Disaster Relief Program",
      description: "Rapid response disaster relief support for communities affected by natural calamities, heavy monsoon floods, cyclones, and economic emergencies throughout Tamil Nadu.",
      provides: [
        "Emergency dry ration kits (rice, pulses, oil)",
        "Temporary shelter materials & tarpaulins",
        "Safe drinking water supply & chlorine tablets",
        "Emergency medical kits and epidemic prevention",
        "Livelihood rehabilitation support"
      ],
      howToHelp: "Contribute to our Disaster Relief Fund or donate emergency dry rations and relief materials.",
      image: "./assets/image.png",
      color: "from-amber-400/20 to-blue-600/10"
    },
    {
      id: "feed",
      icon: "Soup",
      title: "Feed the Hungry",
      description: "Collecting excess hygienic food from marriage halls, hotels, and caterers, as well as cooking fresh nutritious meals daily to feed poor, hungry, and homeless people in Tuticorin.",
      provides: [
        "Daily meal distribution to homeless and needy",
        "Excess food rescue from banquet & wedding halls",
        "Clean packaging & fast hygienic delivery",
        "Sponsor meals for 100 people across town",
        "Zero food waste mission in Tuticorin"
      ],
      howToHelp: "Sponsor Food for 100 People: Breakfast (Rs.3,500), Lunch (Rs.4,500), Dinner (Rs.3,500), or Full Day (Rs.11,500).",
      image: "./assets/j.png",
      color: "from-amber-500/20 to-amber-400/10"
    }
  ];
  var T2 = [
    {
      id: "1",
      image: "./assets/p.png",
      category: "Abandoned Children Home",
      name: "Hope Children Home",
      title: "Shelter, education and a loving future",
      excerpt: "Girl children who are abandoned by parents or relatives find a safe haven at Hope Children Home in Tuticorin, growing up with quality schooling, nutritious food, and affectionate care.",
      impact: "Over 40+ girl children nurtured, educated, and supported into higher studies.",
      location: "Tuticorin, Tamil Nadu"
    },
    {
      id: "2",
      image: "./assets/z.png",
      category: "Home for Aged",
      name: "Elderly Mothers Ashram",
      title: "A peaceful, dignified home for rescued seniors",
      excerpt: "Elderly women who were abandoned and left in the streets are given shelter, warm food, 24/7 medical supervision, and respect so their silver years are full of peace.",
      impact: "30+ destitute grandmothers living with dignity, happiness, and medical support.",
      location: "Bryant Nagar, Tuticorin"
    },
    {
      id: "3",
      image: "./assets/j.png",
      category: "Feed the Hungry",
      name: "Daily Meal Drives",
      title: "No one sleeps hungry in our neighborhood",
      excerpt: "Through our Feed the Hungry mission and excess food rescue, hot meals are packed and delivered to impoverished families, daily-wage laborers, and hospital bystanders.",
      impact: "Thousands of meals distributed every month across Tuticorin and surrounding villages.",
      location: "Tuticorin District, Tamil Nadu"
    }
  ];
  var C2 = [
    { id: "1", name: "Axis Bank (KTC Nagar)", tagline: "Official Trust Account (Indian Donors)" },
    { id: "2", name: "State Bank of India", tagline: "FCRA / Foreign Donor Account" },
    { id: "3", name: "Hope Children Home", tagline: "Orphaned Girl Children Facility" },
    { id: "4", name: "Tuticorin Community", tagline: "10+ Years of Local Trust" },
    { id: "5", name: "Feed The Hungry", tagline: "Zero Food Waste Mission" },
    { id: "6", name: "Women Empowerment", tagline: "Girls Higher Education Fund" }
  ];
  var A2 = [
    { icon: "TrendingUp", title: "Direct Local Impact", description: "Founded in 2014 by Mrs. Brinah Prabhakaran & Mr. Prem Prabhakaran, our initiatives directly transform lives on the ground in Tuticorin." },
    { icon: "Sparkles", title: "Dignity & Love", description: "From abandoned girl children to homeless grandmothers, we provide personal care, affectionate attention, and a loving home." },
    { icon: "BarChart3", title: "100% Transparency", description: "Every rupee is accounted for. Registered charitable trust with official Axis Bank & State Bank of India accounts and verified reports." },
    { icon: "Handshake", title: "Grassroots Commitment", description: "We listen to village needs \u2014 education, food, shelter, healthcare, and emergency response when disasters strike." }
  ];
  function b2(i, a2, t) {
    const [o, r] = w.useState(0);
    return w.useEffect(() => {
      if (!t) return;
      const l = performance.now(), s = (m) => {
        const u2 = m - l, p2 = Math.min(u2 / a2, 1), h = 1 - Math.pow(1 - p2, 3);
        r(Math.round(h * i)), p2 < 1 && requestAnimationFrame(s);
      };
      requestAnimationFrame(s);
    }, [t, i, a2]), o;
  }
  var x = ({ value: i, suffix: a2, label: t, sublabel: o, active: r, delay: l }) => {
    const s = b2(i, 2e3, r);
    return v.jsxs(Pe.div, { initial: { opacity: 0, y: 32 }, animate: r ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.7, delay: l, ease: [0.25, 0.46, 0.45, 0.94] }, className: "text-center px-6", children: [
      v.jsxs("div", { className: "font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white font-counter tracking-tight leading-none mb-2", children: [s.toLocaleString(), v.jsx("span", { className: "text-amber-400", children: a2 })] }),
      v.jsx("div", { className: "text-white font-semibold text-lg mt-3", children: t }),
      o && v.jsx("div", { className: "text-white/50 text-sm mt-1", children: o })
    ] });
  };
  var E3 = () => {
    const i = w.useRef(null), a2 = w2(i, { once: true, margin: "-100px" });
    return v.jsxs("section", { ref: i, style: { backgroundColor: "#172554", background: "linear-gradient(135deg, #090e1a 0%, #172554 45%, #1e3a8a 100%)" }, className: "relative py-12 sm:py-16 bg-[#172554] text-white overflow-hidden", "aria-labelledby": "impact-heading", children: [
      v.jsx("div", { className: "absolute inset-0 opacity-5", children: v.jsx("div", { className: "w-full h-full", style: { backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" } }) }),
      v.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl" }),
      v.jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" }),
      v.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        v.jsxs(Pe.div, { initial: { opacity: 0, y: 24 }, animate: a2 ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.7 }, className: "text-center mb-10 sm:mb-12", children: [
          v.jsxs("div", { className: "inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-amber-400 mb-3", children: [v.jsx("div", { className: "w-5 h-px bg-amber-400" }), "Hill Charity Impact", v.jsx("div", { className: "w-5 h-px bg-amber-400" })] }),
          v.jsxs("h2", { id: "impact-heading", className: "font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight", children: ["Serving Tuticorin with", " ", v.jsx("span", { className: "text-amber-400", children: "Love & Hope." })] })
        ] }),
        v.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 divide-x-0 lg:divide-x divide-white/10", children: f.map((t, o) => v.jsx(x, { value: t.value, suffix: t.suffix, label: t.label, sublabel: t.sublabel, active: a2, delay: 0.2 + o * 0.12 }, t.label)) }),
        v.jsxs(Pe.div, { initial: { opacity: 0 }, animate: a2 ? { opacity: 1 } : {}, transition: { duration: 0.7, delay: 0.9 }, className: "text-center mt-10 sm:mt-12 space-y-1.5", children: [
          v.jsx("p", { className: "text-white/80 text-sm sm:text-base italic", children: '"\u0B89\u0BA4\u0BB5\u0BBF \u0B8E\u0BA9\u0BCD\u0BAA\u0BA4\u0BC1 \u0B92\u0BB0\u0BC1 \u0B9A\u0BC6\u0BAF\u0BB2\u0BCD \u0BAE\u0B9F\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0B85\u0BB2\u0BCD\u0BB2. \u0B92\u0BB0\u0BC1 \u0BA8\u0BAE\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95\u0BC8."' }),
          v.jsx("p", { className: "text-white/60 text-xs sm:text-sm", children: '"Hill Organisation for People\u2019s Education \u2014 Tuticorin, Tamil Nadu"' })
        ] })
      ] })
    ] });
  };

  // assets/Home-B5Mf3Si2.js
  var E4 = fe("ArrowUpRight", [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]]);
  var P2 = fe("BarChart3", [["path", { d: "M3 3v18h18", key: "1s2lah" }], ["path", { d: "M18 17V9", key: "2bz60n" }], ["path", { d: "M13 17V5", key: "1frdt8" }], ["path", { d: "M8 17v-3", key: "17ska0" }]]);
  var A3 = fe("Flame", [["path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z", key: "96xj49" }]]);
  var W3 = fe("Handshake", [["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }], ["path", { d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4", key: "9pr0kb" }], ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }], ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }], ["path", { d: "M3 4h8", key: "1ep09j" }]]);
  var V = fe("Shield", [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }]]);
  var O2 = fe("Sparkles", [["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z", key: "4pj2yx" }], ["path", { d: "M20 3v4", key: "1olli1" }], ["path", { d: "M22 5h-4", key: "1gvqau" }], ["path", { d: "M4 17v2", key: "vumght" }], ["path", { d: "M5 18H3", key: "zchphs" }]]);
  var HERO_SLIDES = [
    "./assets/enhanced/slider_2.jpg",
    "./assets/enhanced/slider_8.jpg",
    "./assets/enhanced/slider_7.jpg",
    "./assets/enhanced/slider_9.jpg",
    "./assets/enhanced/slider_1.jpg"
  ];
  var p = fe("TrendingUp", [["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }], ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]]);
  var _2 = () => {
    const [current, setCurrent] = w.useState(0);
    const [isPaused, setIsPaused] = w.useState(false);
    w.useEffect(() => {
      if (isPaused) return;
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 4500);
      return () => clearInterval(timer);
    }, [isPaused]);
    return v.jsx("section", {
      className: "relative w-full bg-slate-950 pt-16 sm:pt-20 select-none overflow-hidden",
      "aria-label": "Hero Photo Slider",
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false),
      children: v.jsx("div", {
        className: "relative w-full max-w-[1440px] mx-auto px-0 sm:px-4 lg:px-6 py-2 sm:py-4",
        children: v.jsx("div", {
          className: "relative w-full aspect-[1349/520] min-h-[250px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px] max-h-[600px] rounded-none sm:rounded-3xl overflow-hidden shadow-2xl bg-black border-0 sm:border border-slate-800 flex items-center justify-center",
          children: v.jsx(Pe.img, {
            key: HERO_SLIDES[current],
            src: HERO_SLIDES[current],
            alt: "Hill Charity Tuticorin - Authentic Activity",
            initial: { opacity: 0.3 },
            animate: { opacity: 1 },
            transition: { duration: 0.6, ease: "easeOut" },
            className: "w-full h-full object-cover object-center",
            loading: "eager",
            fetchPriority: "high",
            style: {
              imageRendering: "-webkit-optimize-contrast"
            }
          })
        })
      })
    });
  };
  var L = [{ number: "01", title: "Hope Children Home", description: "Providing shelter, education, nutritious food, and affectionate care for abandoned and orphaned girl children in Tuticorin.", image: "./assets/p.png", icon: a }, { number: "02", title: "Home for the Aged", description: "Rescuing destitute elderly women abandoned by family and left in the streets, providing healthcare, dignity, and a loving home.", image: "./assets/z.png", icon: V }, { number: "03", title: "Feed the Hungry", description: "Rescuing excess banquet food and preparing fresh daily meals to ensure no one in our town goes to sleep hungry.", image: "./assets/j.png", icon: A3 }];
  var U2 = () => v.jsx("section", { className: "bg-white py-20 lg:py-28", children: v.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [v.jsxs("div", { className: "text-center mb-14 lg:mb-16", children: [v.jsxs("div", { className: "flex items-center justify-center gap-2 mb-5", children: [v.jsx("span", { className: "w-5 h-px bg-forest-600" }), v.jsx("span", { className: "text-xs font-bold tracking-[0.25em] uppercase text-forest-700", children: "Why We Exist" }), v.jsx("span", { className: "w-5 h-px bg-forest-600" })] }), v.jsxs("h2", { className: "font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-tight", children: ["Love is where meaningful", v.jsx("br", {}), v.jsx("span", { className: "text-forest-600", children: "change begins." })] })] }), v.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: L.map((a2, n) => {
    const s = a2.icon;
    return v.jsxs(Pe.article, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6, delay: n * 0.1 }, className: `
                  group
                  overflow-hidden
                  rounded-[30px]
                  bg-white
                  border border-charcoal-100
                  shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.10)]
                  transition-all duration-300
                `, children: [v.jsxs("div", { className: "relative h-[330px] overflow-hidden rounded-t-[30px]", children: [v.jsx("img", { src: a2.image, alt: a2.title, className: "w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]" }), v.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" }), v.jsx("div", { className: `
                    absolute
                    top-5
                    left-5
                    w-12
                    h-12
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    shadow-md
                  `, children: v.jsx("span", { className: "font-display font-bold text-sm text-charcoal-700", children: a2.number }) }), v.jsx("div", { className: `
                    absolute
                    top-5
                    right-5
                    w-4
                    h-4
                    rounded-full
                    bg-white/90
                    shadow-sm
                  ` })] }), v.jsxs("div", { className: "p-7", children: [v.jsx("div", { className: `
                    w-12
                    h-12
                    rounded-2xl
                    bg-forest-50
                    flex
                    items-center
                    justify-center
                    mb-6
                  `, children: v.jsx(s, { className: "w-5 h-5 text-forest-600" }) }), v.jsx("h3", { className: `
                    font-display
                    font-bold
                    text-2xl
                    text-charcoal-900
                    mb-3
                  `, children: a2.title }), v.jsx("p", { className: `
                    text-charcoal-500
                    text-sm
                    leading-7
                  `, children: a2.description })] })] }, a2.number);
  }) })] }) });
  var $2 = () => {
    const a2 = w.useRef(null), n = w.useRef(null), s = w2(a2, { once: true, margin: "-100px" }), { scrollYProgress: l } = Oe2({ target: n, offset: ["start end", "end start"] }), i = Ie2(l, [0, 1], ["-8%", "8%"]);
    return v.jsx("section", { ref: a2, className: "py-0 bg-cream-50 overflow-hidden", "aria-labelledby": "story-heading", children: v.jsx("div", { className: "max-w-7xl mx-auto", children: v.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 min-h-[600px]", children: [v.jsxs("div", { ref: n, className: "relative overflow-hidden min-h-[400px] lg:min-h-full", children: [v.jsx(Pe.div, { initial: { scaleX: 1 }, animate: s ? { scaleX: 0 } : { scaleX: 1 }, transition: { duration: 0.9, delay: 0.2, ease: [0.76, 0, 0.24, 1] }, style: { originX: 0 }, className: "absolute inset-0 z-10 bg-charcoal-900" }), v.jsx(Pe.div, { style: { y: i }, className: "absolute inset-0 scale-110", children: v.jsx("img", { src: "./assets/community-story.png", alt: "Volunteers helping people in the community", className: "w-full h-full object-cover object-center", loading: "lazy" }) }), v.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent to-cream-50/30 z-20 hidden lg:block" }), v.jsx(Pe.div, { initial: { opacity: 0, y: 16 }, animate: s ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay: 1.1 }, className: "absolute bottom-6 left-6 z-30 max-w-xs", children: v.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-premium border border-white/50", children: [v.jsx("p", { className: "text-forest-700 font-medium text-sm italic leading-relaxed", children: '"\u0B89\u0BA4\u0BB5\u0BBF \u0B8E\u0BA9\u0BCD\u0BAA\u0BA4\u0BC1 \u0B92\u0BB0\u0BC1 \u0B9A\u0BC6\u0BAF\u0BB2\u0BCD \u0BAE\u0B9F\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0B85\u0BB2\u0BCD\u0BB2. \u0B92\u0BB0\u0BC1 \u0BA8\u0BAE\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95\u0BC8."' }), v.jsx("p", { className: "text-charcoal-400 text-xs mt-1.5", children: '"Support is not just an act. It is hope."' })] }) })] }), v.jsx("div", { className: "flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20 bg-cream-50", children: v.jsxs("div", { className: "max-w-lg", children: [v.jsx(Pe.div, { initial: { opacity: 0, x: 20 }, animate: s ? { opacity: 1, x: 0 } : {}, transition: { duration: 0.5, delay: 0.4 }, className: "label-tag mb-6", children: "Real People. Real Impact." }), v.jsxs(Pe.h2, { id: "story-heading", initial: { opacity: 0, y: 24 }, animate: s ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }, className: "font-display font-bold text-4xl sm:text-5xl text-charcoal-900 leading-tight mb-6", children: ["Support is more than giving.", v.jsx("br", {}), v.jsx("span", { className: "text-forest-600", children: "It is showing someone they are not alone." })] }), v.jsx(Pe.p, { initial: { opacity: 0, y: 16 }, animate: s ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay: 0.62 }, className: "text-charcoal-500 leading-relaxed text-base mb-8", children: "Hill Organisation for People's Education was established in 2014 by Mrs. Brinah Prabhakaran and Mr. Prem Prabhakaran in Tuticorin, running Hope Children Home for abandoned girls and a home for destitute elderly mothers with love and affection." }), v.jsx(Pe.div, { initial: { opacity: 0, y: 16 }, animate: s ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay: 0.72 }, className: "flex gap-8 mb-10 py-6 border-y border-charcoal-100", children: [{ value: "10+", label: "Years in Tuticorin" }, { value: "7", label: "Core Programs" }, { value: "100%", label: "Direct Transparency" }].map((r) => v.jsxs("div", { children: [v.jsx("div", { className: "font-display font-bold text-3xl text-charcoal-900", children: r.value }), v.jsx("div", { className: "text-charcoal-400 text-xs font-medium mt-0.5", children: r.label })] }, r.label)) }), v.jsx(Pe.div, { initial: { opacity: 0, y: 12 }, animate: s ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.5, delay: 0.82 }, children: v.jsx(lt, { to: "/services", children: v.jsxs(Pe.button, { whileHover: { scale: 1.02, x: 4 }, whileTap: { scale: 0.97 }, className: "group flex items-center gap-3 text-forest-600 font-bold text-sm hover:text-forest-700 transition-colors", children: ["Explore Our 7 Programs", v.jsx("div", { className: "w-8 h-8 rounded-full bg-forest-100 group-hover:bg-forest-200 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1", children: v.jsx(DP, { className: "w-4 h-4" }) })] }) }) })] }) })] }) }) });
  };
  var F3 = { Soup: j2, GraduationCap: k2, Heart: zP, Stethoscope: N2, ShieldAlert: S2, Users: Re2 };
  var X = ({ service: a2, index: n = 0 }) => {
    const s = F3[a2.icon] ?? zP;
    return v.jsxs(Pe.article, { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.65, delay: n % 3 * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }, className: "group relative bg-white border border-charcoal-100 rounded-3xl p-7 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-default", "aria-label": `Service: ${a2.title}`, children: [v.jsx("div", { className: `absolute inset-0 rounded-3xl bg-gradient-to-br ${a2.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500` }), v.jsxs("div", { className: "relative z-10", children: [v.jsx("div", { className: "w-14 h-14 rounded-2xl bg-forest-50 group-hover:bg-forest-100 text-forest-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3", children: v.jsx(s, { className: "w-6 h-6" }) }), v.jsx("h3", { className: "font-display font-bold text-xl text-charcoal-900 mb-3 group-hover:text-forest-800 transition-colors duration-300", children: a2.title }), v.jsx("p", { className: "text-charcoal-500 text-sm leading-relaxed mb-6 line-clamp-3", children: a2.description }), v.jsxs("div", { className: "flex items-center gap-2 text-forest-600 text-sm font-semibold group-hover:gap-3 transition-all duration-300", children: [v.jsx("span", { children: "Learn more" }), v.jsx(DP, { className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" })] })] }), v.jsx("div", { className: "absolute top-5 right-5 w-2 h-2 rounded-full bg-forest-200 group-hover:bg-forest-400 transition-colors duration-300" })] });
  };
  var Y3 = () => {
    const a2 = w.useRef(null), n = w2(a2, { once: true, margin: "-80px" });
    return v.jsx("section", { ref: a2, className: "py-12 sm:py-16 lg:py-24 bg-charcoal-50", "aria-labelledby": "services-heading", children: v.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [v.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-12 lg:mb-16", children: [v.jsxs(Pe.div, { initial: { opacity: 0, y: 24 }, animate: n ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.7 }, className: "max-w-xl", children: [v.jsx("div", { className: "label-tag mb-4", children: "What We Do" }), v.jsxs("h2", { id: "services-heading", className: "font-display font-bold text-4xl sm:text-5xl text-charcoal-900 leading-tight", children: ["Where your support can", " ", v.jsx("span", { className: "text-gradient-green", children: "make a difference." })] })] }), v.jsx(Pe.div, { initial: { opacity: 0, y: 16 }, animate: n ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay: 0.2 }, children: v.jsx(lt, { to: "/services", children: v.jsxs(Pe.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.97 }, className: "flex items-center gap-2 px-6 py-3 border-2 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white font-semibold rounded-full transition-all duration-300 text-sm", children: ["View All Services", v.jsx(DP, { className: "w-4 h-4" })] }) }) })] }), v.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: M3.map((s, l) => v.jsx(X, { service: s, index: l }, s.id)) })] }) });
  };
  var q2 = { TrendingUp: p, Sparkles: O2, BarChart3: P2, Handshake: W3 };
  var G2 = ["Create meaningful social impact", "Support local communities", "Build authentic community connections", "Create measurable impact", "Strengthen social responsibility", "Support sustainable initiatives"];
  var D = [...C2, ...C2];
  var Q2 = () => {
    const a2 = w.useRef(null), n = w.useRef(null), s = w2(a2, { once: true, margin: "-80px" }), l = w2(n, { once: true, margin: "-80px" });
    return v.jsxs(v.Fragment, { children: [v.jsxs("section", { ref: a2, className: "pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white", "aria-labelledby": "sponsor-heading", children: [v.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: v.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [v.jsxs("div", { children: [v.jsxs(Pe.div, { initial: { opacity: 0, y: 24 }, animate: s ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }, children: [v.jsx("div", { className: "label-tag mb-5", children: "Sponsor With Us" }), v.jsxs("h2", { id: "sponsor-heading", className: "font-display font-bold text-4xl sm:text-5xl text-charcoal-900 leading-tight mb-5", children: ["Be part of", " ", v.jsx("span", { className: "text-gradient-green", children: "something bigger." })] }), v.jsx("p", { className: "text-charcoal-500 text-base leading-relaxed mb-7 max-w-lg", children: "Your organisation can help turn meaningful support into measurable community impact. Together we build something that outlasts any single donation." })] }), v.jsx(Pe.ul, { initial: { opacity: 0, y: 16 }, animate: s ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay: 0.2 }, className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8", "aria-label": "Sponsor benefits", children: G2.map((i) => v.jsxs("li", { className: "flex items-center gap-2.5 text-sm text-charcoal-600", children: [v.jsx("span", { className: "w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center shrink-0", children: v.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-forest-600" }) }), i] }, i)) }), v.jsxs(Pe.div, { initial: { opacity: 0, y: 12 }, animate: s ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.5, delay: 0.35 }, className: "flex flex-wrap gap-4", children: [v.jsx(lt, { to: "/contact", children: v.jsxs(Pe.button, { type: "button", whileHover: { scale: 1.02 }, whileTap: { scale: 0.97 }, className: "flex items-center gap-2 px-7 py-4 bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-full shadow-md transition-all duration-300 text-sm", children: ["Become a Sponsor", v.jsx(DP, { className: "w-4 h-4" })] }) }), v.jsx(lt, { to: "/contact", children: v.jsx(Pe.button, { type: "button", whileHover: { scale: 1.02 }, whileTap: { scale: 0.97 }, className: "flex items-center gap-2 px-7 py-4 border-2 border-charcoal-200 text-charcoal-700 hover:border-forest-400 hover:text-forest-600 font-semibold rounded-full transition-all duration-300 text-sm", children: "Talk to Our Team" }) })] })] }), v.jsx(Pe.div, { initial: { opacity: 0, scale: 0.96 }, animate: s ? { opacity: 1, scale: 1 } : {}, transition: { duration: 0.8, delay: 0.3 }, className: "relative", children: v.jsxs("div", { className: "relative rounded-3xl bg-forest-950 p-8 lg:p-10 text-white overflow-hidden", children: [v.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-forest-500/15 rounded-full blur-3xl pointer-events-none" }), v.jsx("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" }), v.jsxs("div", { className: "relative z-10", children: [v.jsx("p", { className: "text-forest-400 text-xs tracking-[0.2em] uppercase font-semibold mb-2", children: "Our Partners Trust" }), v.jsxs("h3", { className: "font-display font-bold text-3xl mb-6 leading-tight", children: ["Real organisations.", v.jsx("br", {}), "Real community impact."] }), v.jsx("div", { className: "space-y-4", children: [{ label: "Impact Transparency", value: 100 }, { label: "Community Reach", value: 87 }, { label: "Partner Satisfaction", value: 96 }].map((i, r) => v.jsxs("div", { children: [v.jsxs("div", { className: "flex justify-between text-sm mb-1.5", children: [v.jsx("span", { className: "text-white/70", children: i.label }), v.jsxs("span", { className: "text-white font-semibold", children: [i.value, "%"] })] }), v.jsx("div", { className: "h-1.5 bg-white/10 rounded-full overflow-hidden", children: v.jsx(Pe.div, { initial: { width: 0 }, animate: s ? { width: `${i.value}%` } : {}, transition: { duration: 1.2, delay: 0.6 + r * 0.15, ease: "easeOut" }, className: "h-full bg-gradient-to-r from-forest-400 to-amber-400 rounded-full" }) })] }, i.label)) }), v.jsxs("div", { className: "mt-8 pt-6 border-t border-white/10", children: [v.jsx("p", { className: "text-white/50 text-xs italic", children: '"Partnering with Hill Charity gave us real visibility into community impact."' }), v.jsx("p", { className: "text-white/30 text-xs mt-2", children: "\u2014 Partner Organisation, 2024" })] })] })] }) })] }) }), v.jsxs("div", { className: "mt-14 overflow-hidden", children: [v.jsx(Pe.div, { initial: { opacity: 0 }, animate: s ? { opacity: 1 } : {}, transition: { duration: 0.6, delay: 0.5 }, className: "text-center mb-6", children: v.jsx("p", { className: "text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-400", children: "Trusted by organisations committed to social good" }) }), v.jsx("div", { className: "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", children: v.jsx("div", { className: "animate-marquee flex gap-8 items-center shrink-0", children: D.map((i, r) => v.jsxs("div", { className: "shrink-0 flex flex-col items-center justify-center px-8 py-5 bg-white border border-charcoal-100 rounded-2xl min-w-[180px] hover:border-forest-200 hover:shadow-card transition-all duration-300", children: [v.jsx("div", { className: "font-display font-bold text-charcoal-700 text-sm text-center", children: i.name }), v.jsx("div", { className: "text-charcoal-400 text-[10px] mt-1 text-center", children: i.tagline })] }, `${i.id}-${r}`)) }) })] })] }), v.jsx("section", { ref: n, className: "pt-10 pb-16 lg:pt-14 lg:pb-20 bg-cream-50", "aria-labelledby": "why-heading", children: v.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [v.jsxs(Pe.div, { initial: { opacity: 0, y: 24 }, animate: l ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.7 }, className: "text-center mb-10", children: [v.jsx("div", { className: "label-tag justify-center mb-4", children: "For Sponsors & Partners" }), v.jsxs("h2", { id: "why-heading", className: "font-display font-bold text-4xl sm:text-5xl text-charcoal-900 leading-tight", children: ["Why organisations choose", " ", v.jsx("span", { className: "text-gradient-green", children: "to partner with us." })] })] }), v.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: A2.map((i, r) => {
      const b4 = q2[i.icon] ?? p;
      return v.jsxs(Pe.div, { initial: { opacity: 0, y: 28 }, animate: l ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.65, delay: 0.1 + r * 0.1 }, className: "group bg-white rounded-3xl p-7 border border-charcoal-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-500", children: [v.jsx("div", { className: "w-12 h-12 rounded-2xl bg-forest-50 group-hover:bg-forest-100 text-forest-600 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110", children: v.jsx(b4, { className: "w-5 h-5" }) }), v.jsx("h3", { className: "font-display font-bold text-lg text-charcoal-900 mb-2", children: i.title }), v.jsx("p", { className: "text-charcoal-500 text-sm leading-relaxed", children: i.description })] }, i.title);
    }) })] }) })] });
  };
  var J2 = ({ story: a2, index: n = 0 }) => v.jsxs(Pe.article, { initial: { opacity: 0, y: 32 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.7, delay: n * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }, className: "group bg-white transition-all duration-500 hover:-translate-y-2 cursor-default", "aria-label": `Story: ${a2.title}`, children: [v.jsxs("div", { className: "relative aspect-[4/3] min-h-[280px] sm:min-h-[300px]", children: [v.jsx(Pe.img, { src: a2.image, alt: a2.title, className: "w-full h-full object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-105", loading: "lazy" }), v.jsx("div", { className: "absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-forest-700 text-xs font-bold tracking-wide border border-white/50", children: a2.category }), v.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" })] }), v.jsxs("div", { className: "p-7", children: [v.jsxs("div", { className: "flex items-center gap-1.5 text-charcoal-400 text-xs mb-3", children: [v.jsx(bP, { className: "w-3.5 h-3.5" }), a2.location] }), v.jsx("h3", { className: "font-display font-bold text-xl text-charcoal-900 mb-3 leading-tight group-hover:text-forest-800 transition-colors duration-300", children: a2.title }), v.jsx("p", { className: "text-charcoal-500 text-sm leading-relaxed mb-5 line-clamp-3", children: a2.excerpt }), v.jsxs("div", { className: "bg-forest-50 rounded-2xl px-4 py-3 mb-5 border border-forest-100", children: [v.jsx("div", { className: "text-forest-500 text-[10px] font-bold tracking-[0.15em] uppercase mb-1", children: "Impact" }), v.jsx("p", { className: "text-forest-800 text-sm font-medium leading-snug", children: a2.impact })] }), v.jsxs("div", { className: "flex items-center justify-between", children: [v.jsx("span", { className: "text-charcoal-400 text-xs font-medium", children: a2.name }), v.jsxs("div", { className: "flex items-center gap-1.5 text-forest-600 font-semibold text-sm group-hover:gap-2 transition-all duration-300", children: ["Read Story", v.jsx("div", { className: "w-7 h-7 rounded-full bg-forest-50 group-hover:bg-forest-100 flex items-center justify-center transition-all duration-300 group-hover:rotate-12", children: v.jsx(E4, { className: "w-3.5 h-3.5" }) })] })] })] })] });
  var K2 = () => {
    const a2 = w.useRef(null), n = w2(a2, { once: true, margin: "-80px" });
    return v.jsx("section", { ref: a2, className: "py-24 lg:py-32 bg-white", "aria-labelledby": "stories-heading", children: v.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [v.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16", children: [v.jsxs(Pe.div, { initial: { opacity: 0, y: 24 }, animate: n ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }, transition: { duration: 0.7 }, children: [v.jsx("div", { className: "label-tag mb-4", children: "Stories" }), v.jsxs("h2", { id: "stories-heading", className: `
                font-display
                font-bold
                text-4xl
                sm:text-5xl
                text-charcoal-900
                leading-tight
              `, children: ["Real stories.", " ", v.jsx("span", { className: "text-gradient-green", children: "Real change." })] }), v.jsx("p", { className: "text-charcoal-500 mt-4 max-w-md text-base leading-relaxed", children: "Every contribution creates a chapter in someone's story. Here are a few that stayed with us." })] }), v.jsx(Pe.div, { initial: { opacity: 0 }, animate: n ? { opacity: 1 } : { opacity: 0 }, transition: { duration: 0.5, delay: 0.3 }, children: v.jsx(lt, { to: "/about", children: v.jsxs(Pe.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.97 }, className: `
                  flex
                  items-center
                  gap-2
                  text-forest-600
                  font-semibold
                  text-sm
                  hover:text-forest-700
                  transition-colors
                `, children: ["See all stories", v.jsx(DP, { className: "w-4 h-4" })] }) }) })] }), v.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: T2.map((s, l) => v.jsx(J2, { story: s, index: l }, s.id)) })] }) });
  };
  var ne3 = () => v.jsxs("main", { className: "m-0 p-0", children: [v.jsx(_2, {}), v.jsx(U2, {}), v.jsx($2, {}), v.jsx(Y3, {}), v.jsx(E3, {}), v.jsx(Q2, {}), v.jsx(K2, {})] });

  // assets/ScrollReveal-CC7-yOZu.js
  var g2 = ({ children: s, className: i = "", delay: n = 0, duration: r = 0.7, direction: a2 = "up", distance: o = 32, once: p2 = true, scale: x3 = false }) => {
    const t = w.useRef(null), c = w2(t, { once: p2, margin: "-80px" }), e = { opacity: 0, ...{ up: { y: o, x: 0 }, down: { y: -o, x: 0 }, left: { x: o, y: 0 }, right: { x: -o, y: 0 }, none: { x: 0, y: 0 } }[a2], scale: x3 ? 0.95 : 1 }, l = c ? { opacity: 1, x: 0, y: 0, scale: 1 } : e;
    return v.jsx(Pe.div, { ref: t, initial: e, animate: l, transition: { duration: r, delay: n, ease: [0.25, 0.46, 0.45, 0.94] }, className: i, children: s });
  };

  // assets/About-DoJ-XgS1.js
  var g3 = [
    { title: "Unconditional Love & Care", description: "Providing shelter, wholesome food, quality education, and medical care with maternal love and affection.", icon: a },
    { title: "Dignity for Every Soul", description: "Rescuing abandoned girl children and elderly mothers so they live with honor, safety, and respect.", icon: zP },
    { title: "100% Transparent Trust", description: "Every donation directly reaches the children, seniors, and hungry people with complete accountability.", icon: Re2 }
  ];
  var u = [
    { year: "2014", title: "Founded in Tuticorin", text: "Mrs. Brinah Prabhakaran and Mr. Prem Prabhakaran established Hill Organisation for People's Education (Hill Charity), starting an orphanage and a home for aged in Tuticorin." },
    { year: "2017", title: "Child Development Centres", text: "Opened evening study and development centres in rural villages to help underprivileged children excel in education and build strong character." },
    { year: "2020", title: "Disaster Relief & Hunger Program", text: "Launched the 'Feed the Hungry' mission and extensive COVID-19 relief distribution, providing dry rations and hot meals across Tamil Nadu." },
    { year: "Today", title: "10+ Years of Service", text: "Nurturing dozens of abandoned girl children into bright futures, sheltering elderly mothers, and serving daily hot meals with community support." }
  ];
  var N3 = () => {
    const n = w.useRef(null), s = w2(n, { once: true, margin: "-80px" });
    return v.jsxs("main", { className: "bg-white pt-16", children: [
      v.jsxs("section", { ref: n, className: "relative overflow-hidden bg-cream-50 py-20 lg:py-28", "aria-labelledby": "journey-heading", children: [
        v.jsx("div", { className: "absolute -top-32 -right-32 w-80 h-80 rounded-full bg-forest-100/40 blur-3xl pointer-events-none" }),
        v.jsx("div", { className: "absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" }),
        v.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          v.jsx(Pe.div, { initial: { opacity: 0, y: 15 }, animate: s ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6 }, className: "flex justify-center", children: v.jsxs("div", { className: "label-tag mb-5", children: [v.jsx("span", { className: "w-5 h-px bg-forest-600" }), "Our Profile"] }) }),
          v.jsxs(Pe.h1, { id: "journey-heading", initial: { opacity: 0, y: 25 }, animate: s ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.7, delay: 0.1 }, className: "text-center font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-tight", children: ["Hill Organisation for", " ", v.jsx("span", { className: "text-gradient-green", children: "People\u2019s Education." })] }),
          v.jsx("p", { className: "mt-4 text-center text-charcoal-600 max-w-2xl mx-auto text-base sm:text-lg", children: "A charitable trust based in Tuticorin, Tamil Nadu, dedicated to poor, orphan, abandoned girl children and elderly women." }),
          v.jsxs(Pe.div, { initial: { opacity: 0, y: 35 }, animate: s ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.8, delay: 0.25 }, className: "relative max-w-5xl mx-auto mt-14", children: [
            v.jsx("div", { className: "absolute -inset-3 rounded-[2rem] border border-forest-200/70 pointer-events-none" }),
            v.jsx("div", { className: "absolute -inset-6 rounded-[2.5rem] border border-charcoal-100/70 pointer-events-none" }),
            v.jsxs("div", { className: "relative bg-white rounded-[1.75rem] border border-charcoal-100 shadow-card overflow-hidden", children: [
              v.jsx("div", { className: "h-1.5 bg-gradient-to-r from-forest-600 via-forest-400 to-amber-400" }),
              v.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[280px_1fr]", children: [
                v.jsxs("div", { className: "relative bg-forest-950 text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-center overflow-hidden", children: [
                  v.jsx("div", { className: "absolute -top-20 -right-20 w-48 h-48 rounded-full border border-white/10" }),
                  v.jsx("div", { className: "absolute -bottom-20 -left-20 w-48 h-48 rounded-full border border-white/10" }),
                  v.jsxs("div", { className: "relative z-10 flex items-center gap-2 mb-5", children: [
                    v.jsx("span", { className: "w-8 h-px bg-amber-400" }),
                    v.jsx("span", { className: "text-amber-400 text-xs font-bold tracking-[0.2em] uppercase", children: "Since 2014" })
                  ] }),
                  v.jsxs("div", { className: "relative z-10", children: [
                    v.jsx("div", { className: "font-display font-bold text-7xl sm:text-8xl leading-none text-white", children: "10+" }),
                    v.jsx("div", { className: "mt-2 text-forest-300 text-lg font-semibold tracking-wide", children: "YEARS" }),
                    v.jsx("div", { className: "mt-5 h-px w-20 bg-white/20" }),
                    v.jsx("p", { className: "mt-5 text-white/60 text-sm leading-relaxed", children: "Founded in Tuticorin by Mrs. Brinah Prabhakaran & Mr. Prem Prabhakaran." })
                  ] })
                ] }),
                v.jsxs("div", { className: "p-8 sm:p-10 lg:p-12", children: [
                  v.jsxs("div", { className: "flex items-start gap-4 mb-7", children: [
                    v.jsx("div", { className: "w-12 h-12 shrink-0 rounded-2xl bg-forest-50 text-forest-600 flex items-center justify-center", children: v.jsx(d, { className: "w-6 h-6" }) }),
                    v.jsx("div", { children: v.jsxs("h2", { className: "font-display font-bold text-2xl sm:text-3xl text-charcoal-900", children: ["Transforming lives with love,", v.jsxs("span", { className: "text-forest-600", children: [" ", "food and education."] })] }) })
                  ] }),
                  v.jsx("p", { className: "text-charcoal-600 leading-relaxed text-base mb-4", children: "Hill Organisation for People\u2019s Education (Hill Charity) charitable trust in Tuticorin was created by Mrs. Brinah Prabhakaran and Mr. Prem Prabhakaran with a heartfelt vision to support poor, orphan, abandoned children and women throughout Tamil Nadu, South India." }),
                  v.jsx("p", { className: "text-charcoal-600 leading-relaxed text-base mb-4", children: "In 2014, they started running an orphanage (Hope Children Home) and a home for the aged for abandoned girl children and elderly women in Tuticorin, providing wholesome food, shelter, education, and medical care with unconditional love and affection." }),
                  v.jsx("p", { className: "text-charcoal-600 leading-relaxed text-base", children: "In many villages, young girls who excel in school are unable to continue higher education due to severe poverty and are forced to work for daily wages. Hill Charity provides educational sponsorships and vocational training to empower these girls and change their life trajectory." }),
                  v.jsxs("div", { className: "grid grid-cols-3 gap-4 mt-8 pt-7 border-t border-charcoal-100", children: [
                    v.jsxs("div", { children: [v.jsx("div", { className: "font-display font-bold text-xl text-forest-700", children: "2014" }), v.jsx("div", { className: "text-xs text-charcoal-400 mt-1", children: "Established" })] }),
                    v.jsxs("div", { children: [v.jsx("div", { className: "font-display font-bold text-xl text-forest-700", children: "Tuticorin" }), v.jsx("div", { className: "text-xs text-charcoal-400 mt-1", children: "Headquarters" })] }),
                    v.jsxs("div", { children: [v.jsx("div", { className: "font-display font-bold text-xl text-forest-700", children: "7 Core" }), v.jsx("div", { className: "text-xs text-charcoal-400 mt-1", children: "Programs" })] })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      v.jsx("section", { className: "py-20 lg:py-28 bg-white", "aria-labelledby": "values-heading", children: v.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        v.jsx(g2, { children: v.jsxs("div", { className: "text-center", children: [
          v.jsxs("div", { className: "label-tag justify-center mb-4", children: [v.jsx("span", { className: "w-5 h-px bg-forest-600" }), "Our Guiding Principles"] }),
          v.jsxs("h2", { id: "values-heading", className: "font-display font-bold text-4xl sm:text-5xl text-charcoal-900 leading-tight", children: ["Why Hill Charity", " ", v.jsx("span", { className: "text-gradient-green", children: "was created." })] }),
          v.jsx("p", { className: "mt-4 text-charcoal-500", children: "Founded with a pure commitment to serve the most vulnerable in our community." })
        ] }) }),
        v.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-14", children: g3.map((t, a2) => {
          const l = t.icon;
          return v.jsx(g2, { delay: a2 * 0.1, children: v.jsxs("div", { className: "group relative h-full bg-white rounded-3xl border border-charcoal-100 p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 overflow-hidden", children: [
            v.jsx("div", { className: "w-12 h-12 rounded-2xl bg-forest-50 text-forest-600 flex items-center justify-center mb-5 group-hover:bg-forest-100 transition-colors", children: v.jsx(l, { className: "w-5 h-5" }) }),
            v.jsx("h3", { className: "font-display font-bold text-xl text-charcoal-900 mb-3", children: t.title }),
            v.jsx("p", { className: "text-charcoal-500 text-sm leading-relaxed", children: t.description })
          ] }) }, t.title);
        }) })
      ] }) }),
      v.jsx("section", { className: "py-20 lg:py-28 bg-cream-50", children: v.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        v.jsx(g2, { children: v.jsxs("div", { className: "text-center mb-14", children: [
          v.jsxs("div", { className: "label-tag justify-center mb-4", children: [v.jsx("span", { className: "w-5 h-px bg-forest-600" }), "Milestones"] }),
          v.jsxs("h2", { className: "font-display font-bold text-4xl sm:text-5xl text-charcoal-900", children: ["Our Journey of", " ", v.jsx("span", { className: "text-gradient-green", children: "Service & Compassion." })] })
        ] }) }),
        v.jsxs("div", { className: "relative", children: [
          v.jsx("div", { className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-forest-200" }),
          v.jsx("div", { className: "space-y-8 md:space-y-0", children: u.map((t, a2) => {
            const l = a2 % 2 === 0;
            return v.jsx(g2, { delay: a2 * 0.1, children: v.jsxs("div", { className: "relative md:grid md:grid-cols-2 md:gap-12 mb-10 last:mb-0", children: [
              v.jsx("div", { className: l ? "md:text-right" : "md:col-start-2", children: v.jsxs("div", { className: "bg-white rounded-3xl border border-charcoal-100 p-7 shadow-card", children: [
                v.jsx("div", { className: "text-forest-600 font-display font-bold text-2xl mb-2", children: t.year }),
                v.jsx("h3", { className: "font-display font-bold text-xl text-charcoal-900 mb-2", children: t.title }),
                v.jsx("p", { className: "text-charcoal-500 text-sm leading-relaxed", children: t.text })
              ] }) }),
              v.jsx("div", { className: "hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-forest-600 border-4 border-cream-50 shadow-sm" })
            ] }) }, t.year);
          }) })
        ] })
      ] }) }),
      v.jsx(Ne2, {})
    ] });
  };

  // assets/Services-eg4BCXTo.js
  var k3 = fe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
  var x2 = { Soup: j2, GraduationCap: k2, Heart: zP, Stethoscope: N2, ShieldAlert: S2, Users: Re2 };
  var I4 = ({ service: e, index: s }) => {
    const i = w.useRef(null), o = w2(i, { once: true, margin: "-80px" }), a2 = s % 2 === 0, m = x2[e.icon] ?? zP;
    return v.jsx("section", { ref: i, id: e.id, className: `py-20 lg:py-28 ${a2 ? "bg-white" : "bg-cream-50"}`, "aria-labelledby": `service-${e.id}-heading`, children: v.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: v.jsxs("div", { className: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${a2 ? "" : "lg:flex-row-reverse"}`, children: [v.jsxs(Pe.div, { initial: { opacity: 0, x: a2 ? -24 : 24 }, animate: o ? { opacity: 1, x: 0 } : {}, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }, className: `relative ${a2 ? "" : "lg:order-2"}`, children: [v.jsx("div", { className: `
                absolute
                -inset-5
                rounded-[3rem]
                bg-forest-100/40
                blur-3xl
                pointer-events-none
              ` }), v.jsxs("div", { className: `
                relative
                aspect-[4/3]
                min-h-[300px]
                sm:min-h-[360px]
                lg:min-h-[420px]
                overflow-hidden
                rounded-[2rem]
                bg-white
                ring-1
                ring-forest-100/70
                shadow-[0_0_35px_rgba(34,197,94,0.12)]
                transition-all
                duration-500
                hover:shadow-[0_0_45px_rgba(34,197,94,0.18)]
              `, children: [v.jsx("img", { src: e.image, alt: e.title, className: `
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                `, loading: "lazy" }), v.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent pointer-events-none" }), v.jsx("div", { className: `
                  absolute
                  top-5
                  left-5
                  w-12
                  h-12
                  bg-white/95
                  backdrop-blur-sm
                  rounded-2xl
                  shadow-md
                  flex
                  items-center
                  justify-center
                  text-forest-600
                `, children: v.jsx(m, { className: "w-6 h-6" }) })] })] }), v.jsxs(Pe.div, { initial: { opacity: 0, x: a2 ? 24 : -24 }, animate: o ? { opacity: 1, x: 0 } : {}, transition: { duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }, className: a2 ? "" : "lg:order-1", children: [v.jsx("div", { className: "label-tag mb-5", children: "Service Program" }), v.jsx("h2", { id: `service-${e.id}-heading`, className: `
                font-display
                font-bold
                text-3xl
                sm:text-4xl
                text-charcoal-900
                leading-tight
                mb-4
              `, children: e.title }), v.jsx("p", { className: "text-charcoal-500 leading-relaxed mb-8", children: e.description }), v.jsxs("div", { className: "mb-6", children: [v.jsx("h3", { className: `
                  text-sm
                  font-bold
                  text-charcoal-700
                  tracking-wide
                  uppercase
                  mb-4
                `, children: "What We Provide" }), v.jsx("ul", { className: "space-y-2.5", "aria-label": `What ${e.title} provides`, children: e.provides.map((d3) => v.jsxs("li", { className: "flex items-start gap-2.5", children: [v.jsx("div", { className: `
                        w-5
                        h-5
                        rounded-full
                        bg-forest-100
                        flex
                        items-center
                        justify-center
                        shrink-0
                        mt-0.5
                      `, children: v.jsx(k3, { className: "w-3 h-3 text-forest-600" }) }), v.jsx("span", { className: "text-charcoal-600 text-sm", children: d3 })] }, d3)) })] }), v.jsxs("div", { className: `
                bg-amber-50
                border
                border-amber-100
                rounded-2xl
                p-5
                mb-8
              `, children: [v.jsx("h3", { className: `
                  text-sm
                  font-bold
                  text-amber-800
                  tracking-wide
                  uppercase
                  mb-2
                `, children: "How You Can Help" }), v.jsx("p", { className: "text-amber-700 text-sm leading-relaxed", children: e.howToHelp })] }), v.jsx(lt, { to: "/contact", children: v.jsxs(Pe.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.97 }, className: `
                  flex
                  items-center
                  gap-2
                  px-7
                  py-4
                  bg-forest-600
                  hover:bg-forest-700
                  text-white
                  font-bold
                  rounded-full
                  transition-all
                  duration-300
                  text-sm
                `, children: ["Support This Program", v.jsx(DP, { className: "w-4 h-4" })] }) })] })] }) }) });
  };
  var A4 = () => v.jsxs("main", { children: [v.jsxs("section", { className: `
          relative
          pt-24
          pb-20
          lg:pt-36
          lg:pb-28
          bg-forest-950
          overflow-hidden
        `, "aria-labelledby": "services-hero-heading", children: [v.jsx("div", { className: "absolute inset-0 opacity-5 pointer-events-none", children: v.jsx("div", { className: "w-full h-full", style: { backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" } }) }), v.jsx("div", { className: `
            absolute
            top-0
            right-0
            w-96
            h-96
            bg-forest-500/10
            rounded-full
            blur-3xl
          ` }), v.jsx("div", { className: `
            absolute
            bottom-0
            left-0
            w-64
            h-64
            bg-amber-500/8
            rounded-full
            blur-3xl
          ` }), v.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [v.jsx(g2, { children: v.jsxs("div", { className: `
                inline-flex
                items-center
                gap-2
                text-amber-400
                text-xs
                font-bold
                tracking-[0.25em]
                uppercase
                mb-6
              `, children: [v.jsx("div", { className: "w-5 h-px bg-amber-400" }), "Our Programs"] }) }), v.jsx(g2, { delay: 0.1, children: v.jsxs("h1", { id: "services-hero-heading", className: `
                font-display
                font-bold
                text-5xl
                sm:text-6xl
                lg:text-7xl
                text-white
                leading-tight
                max-w-3xl
                mb-6
              `, children: ["Seven core programs for", " ", v.jsx("span", { className: "text-amber-400", children: "lasting change." })] }) }), v.jsx(g2, { delay: 0.2, children: v.jsx("p", { className: `
                text-white/70
                text-xl
                leading-relaxed
                max-w-2xl
              `, children: "Hill Organisation for People's Education runs 7 dedicated initiatives across Tuticorin and Tamil Nadu \u2014 providing food, shelter, education, and medical care with love and affection." }) }), v.jsx(g2, { delay: 0.3, children: v.jsx("div", { className: "flex flex-wrap gap-3 mt-10", children: M3.map((e) => {
    const s = x2[e.icon] ?? zP;
    return v.jsxs("a", { href: `#${e.id}`, className: `
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2.5
                      bg-white/10
                      hover:bg-white/20
                      border
                      border-white/15
                      rounded-full
                      text-white/80
                      hover:text-white
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                    `, children: [v.jsx(s, { className: "w-4 h-4" }), e.title] }, e.id);
  }) }) })] })] }), M3.map((e, s) => v.jsx(I4, { service: e, index: s }, e.id)), v.jsx(E3, {}), v.jsx(Ne2, {})] });

  // assets/Contact-pTe4Lhbh.js
  var b3 = fe("Send", [["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }], ["path", { d: "M22 2 11 13", key: "nzbqef" }]]);
  var N4 = () => {
    const [c, t] = w.useState(false), [a2, i] = w.useState({ fullName: "", email: "", phone: "", subject: "", message: "" }), n = (l) => {
      const { name: m, value: x3 } = l.target;
      i((h) => ({ ...h, [m]: x3 }));
    }, d3 = (l) => {
      l.preventDefault(), t(true), setTimeout(() => {
        t(false);
      }, 4e3);
    };
    return v.jsxs("main", { className: "min-h-screen bg-cream-50 pt-20", children: [
      v.jsx("section", {
        className: "pt-16 pb-12 lg:pt-20 lg:pb-16",
        "aria-labelledby": "contact-heading",
        children: v.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          v.jsx(g2, { children: v.jsxs("div", { className: "text-center mb-12", children: [
            v.jsxs("div", { className: "label-tag justify-center mb-4", children: [v.jsx("span", { className: "w-5 h-px bg-forest-600" }), "Hill Charity \u2014 Tuticorin"] }),
            v.jsxs("h1", { id: "contact-heading", className: "font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-tight", children: ["Get in Touch with", " ", v.jsx("span", { className: "text-gradient-green", children: "Hill Charity." })] }),
            v.jsx("p", { className: "mt-4 text-charcoal-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto", children: "Hill Organisation for People's Education is based in Tuticorin, Tamil Nadu. Reach out to us for donations, volunteering, or sponsorships." })
          ] }) }),
          v.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [
            v.jsxs("div", { className: "bg-white rounded-3xl p-7 border border-blue-100 shadow-card flex flex-col items-center text-center", children: [
              v.jsx("div", { className: "w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 font-bold text-xl", children: "\u{1F4CD}" }),
              v.jsx("h3", { className: "font-display font-bold text-lg text-charcoal-900 mb-2", children: "Our Address" }),
              v.jsx("p", { className: "text-charcoal-600 text-sm leading-relaxed", children: "42N, Bryant Nagar 1st Street (East), Tuticorin - 628008, Tamil Nadu, South India." })
            ] }),
            v.jsxs("div", { className: "bg-white rounded-3xl p-7 border border-blue-100 shadow-card flex flex-col items-center text-center", children: [
              v.jsx("div", { className: "w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 font-bold text-xl", children: "\u{1F4DE}" }),
              v.jsx("h3", { className: "font-display font-bold text-lg text-charcoal-900 mb-2", children: "Phone & WhatsApp" }),
              v.jsxs("p", { className: "text-charcoal-600 text-sm leading-relaxed", children: [
                v.jsx("a", { href: "tel:+919944704699", className: "hover:text-blue-600 block font-semibold", children: "+91 9944704699" }),
                v.jsx("a", { href: "tel:+919952020878", className: "hover:text-blue-600 block", children: "+91 9952020878" }),
                v.jsx("a", { href: "https://wa.me/919944704699", target: "_blank", rel: "noreferrer", className: "inline-block mt-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full", children: "Chat on WhatsApp" })
              ] })
            ] }),
            v.jsxs("div", { className: "bg-white rounded-3xl p-7 border border-blue-100 shadow-card flex flex-col items-center text-center", children: [
              v.jsx("div", { className: "w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 font-bold text-xl", children: "\u2709\uFE0F" }),
              v.jsx("h3", { className: "font-display font-bold text-lg text-charcoal-900 mb-2", children: "Email & Trust Info" }),
              v.jsx("a", { href: "mailto:hillorganization85@gmail.com", className: "text-blue-600 font-semibold text-sm hover:underline block mb-2", children: "hillorganization85@gmail.com" }),
              v.jsx("p", { className: "text-charcoal-500 text-xs", children: "Reg. Charitable Trust (Est. 2014, Tuticorin)" })
            ] })
          ] }),
          v.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16", children: [
            v.jsx("div", {
              className: "lg:col-span-7",
              children: v.jsx(Pe.div, {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7 },
                className: "bg-white rounded-3xl border border-charcoal-100 shadow-card p-6 sm:p-8 lg:p-10",
                children: c ? v.jsxs("div", { className: "min-h-[400px] flex flex-col items-center justify-center text-center", children: [
                  v.jsx("div", { className: "w-16 h-16 rounded-full bg-forest-50 flex items-center justify-center mb-6", children: v.jsx(VP, { className: "w-8 h-8 text-forest-600" }) }),
                  v.jsx("h2", { className: "font-display font-bold text-3xl text-charcoal-900 mb-3", children: "Message Sent!" }),
                  v.jsx("p", { className: "text-charcoal-500 max-w-md leading-relaxed", children: "Thank you for reaching out to Hill Charity. Our team will get back to you shortly." })
                ] }) : v.jsxs("form", { onSubmit: d3, className: "space-y-6", children: [
                  v.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                    v.jsxs("div", { children: [
                      v.jsxs("label", { htmlFor: "fullName", className: "block text-sm font-semibold text-charcoal-700 mb-2", children: ["Full Name", v.jsx("span", { className: "text-red-500 ml-1", children: "*" })] }),
                      v.jsx("input", { id: "fullName", name: "fullName", type: "text", value: a2.fullName, onChange: n, required: true, placeholder: "Your full name", className: "w-full h-14 px-4 rounded-2xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" })
                    ] }),
                    v.jsxs("div", { children: [
                      v.jsxs("label", { htmlFor: "email", className: "block text-sm font-semibold text-charcoal-700 mb-2", children: ["Email", v.jsx("span", { className: "text-red-500 ml-1", children: "*" })] }),
                      v.jsx("input", { id: "email", name: "email", type: "email", value: a2.email, onChange: n, required: true, placeholder: "you@example.com", className: "w-full h-14 px-4 rounded-2xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" })
                    ] })
                  ] }),
                  v.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                    v.jsxs("div", { children: [
                      v.jsx("label", { htmlFor: "phone", className: "block text-sm font-semibold text-charcoal-700 mb-2", children: "Phone / WhatsApp" }),
                      v.jsx("input", { id: "phone", name: "phone", type: "tel", value: a2.phone, onChange: n, placeholder: "+91 XXXXX XXXXX", className: "w-full h-14 px-4 rounded-2xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" })
                    ] }),
                    v.jsxs("div", { children: [
                      v.jsx("label", { htmlFor: "subject", className: "block text-sm font-semibold text-charcoal-700 mb-2", children: "Subject" }),
                      v.jsxs("select", { id: "subject", name: "subject", value: a2.subject, onChange: n, className: "w-full h-14 px-4 rounded-2xl border border-charcoal-200 bg-white text-charcoal-700 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100", children: [
                        v.jsx("option", { value: "", children: "Select a subject" }),
                        v.jsx("option", { value: "food", children: "Sponsor Food (100 People)" }),
                        v.jsx("option", { value: "girl-child", children: "Sponsor a Girl Child (Rs.1000/mo)" }),
                        v.jsx("option", { value: "elderly", children: "Sponsor an Elderly Mother (Rs.2500/mo)" }),
                        v.jsx("option", { value: "donation", children: "General Donation" }),
                        v.jsx("option", { value: "volunteer", children: "Volunteer with Us" }),
                        v.jsx("option", { value: "general", children: "General Enquiry" })
                      ] })
                    ] })
                  ] }),
                  v.jsxs("div", { children: [
                    v.jsxs("label", { htmlFor: "message", className: "block text-sm font-semibold text-charcoal-700 mb-2", children: ["Message", v.jsx("span", { className: "text-red-500 ml-1", children: "*" })] }),
                    v.jsx("textarea", { id: "message", name: "message", value: a2.message, onChange: n, required: true, rows: 5, placeholder: "How can we help or how would you like to partner with Hill Charity?", className: "w-full px-4 py-4 rounded-2xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 outline-none resize-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" })
                  ] }),
                  v.jsxs(Pe.button, { type: "submit", whileHover: { scale: 1.01 }, whileTap: { scale: 0.98 }, className: "w-full h-14 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-md transition-all duration-300", children: ["Send Message", v.jsx(b3, { className: "w-4 h-4" })] })
                ] })
              })
            }),
            v.jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
              v.jsxs("div", { className: "bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-card bg-gradient-to-br from-white to-amber-50/40", children: [
                v.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                  v.jsx("span", { className: "px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider", children: "Sponsorship Tiers" }),
                  v.jsx("span", { className: "text-xs text-charcoal-400 font-medium", children: "Direct Impact" })
                ] }),
                v.jsx("h3", { className: "font-display font-bold text-xl text-charcoal-900 mb-4", children: "Sponsor Food & Care" }),
                v.jsxs("ul", { className: "space-y-2.5 text-sm text-charcoal-700 mb-4", children: [
                  v.jsxs("li", { className: "flex justify-between py-1.5 border-b border-amber-100", children: [v.jsx("span", { children: "Sponsor Breakfast (100 people)" }), v.jsx("span", { className: "font-bold text-amber-600", children: "Rs. 3,500/-" })] }),
                  v.jsxs("li", { className: "flex justify-between py-1.5 border-b border-amber-100", children: [v.jsx("span", { children: "Sponsor Lunch (100 people)" }), v.jsx("span", { className: "font-bold text-amber-600", children: "Rs. 4,500/-" })] }),
                  v.jsxs("li", { className: "flex justify-between py-1.5 border-b border-amber-100", children: [v.jsx("span", { children: "Sponsor Dinner (100 people)" }), v.jsx("span", { className: "font-bold text-amber-600", children: "Rs. 3,500/-" })] }),
                  v.jsxs("li", { className: "flex justify-between py-1.5 border-b border-amber-100", children: [v.jsx("span", { children: "Full Day Food (100 people)" }), v.jsx("span", { className: "font-bold text-amber-600", children: "Rs. 11,500/-" })] }),
                  v.jsxs("li", { className: "flex justify-between py-1.5 border-b border-amber-100", children: [v.jsx("span", { children: "Sponsor a Girl Child" }), v.jsx("span", { className: "font-bold text-blue-600", children: "Rs. 1,000 / mo" })] }),
                  v.jsxs("li", { className: "flex justify-between py-1.5", children: [v.jsx("span", { children: "Sponsor an Elderly Mother" }), v.jsx("span", { className: "font-bold text-blue-600", children: "Rs. 2,500 / mo" })] })
                ] })
              ] }),
              v.jsxs("div", { className: "bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-card", children: [
                v.jsx("h3", { className: "font-display font-bold text-xl text-charcoal-900 mb-4", children: "Bank Details for Donations" }),
                v.jsxs("div", { className: "mb-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-200/60 text-xs sm:text-sm space-y-1.5", children: [
                  v.jsx("p", { className: "font-bold text-blue-800 uppercase tracking-wider text-xs", children: "Indian Donors (Axis Bank):" }),
                  v.jsxs("p", { children: [v.jsx("span", { className: "text-charcoal-500", children: "Account Name: " }), v.jsx("b", { children: "Hill Organisation for Peoples Education" })] }),
                  v.jsxs("p", { children: [v.jsx("span", { className: "text-charcoal-500", children: "Account No: " }), v.jsx("b", { className: "font-mono text-blue-700 font-bold", children: "919010013069384" })] }),
                  v.jsxs("p", { children: [v.jsx("span", { className: "text-charcoal-500", children: "IFSC Code: " }), v.jsx("b", { className: "font-mono", children: "UTIB0002095" })] }),
                  v.jsxs("p", { children: [v.jsx("span", { className: "text-charcoal-500", children: "Branch: " }), "KTC Nagar"] }),
                  v.jsxs("p", { children: [v.jsx("span", { className: "text-charcoal-500", children: "UPI ID: " }), v.jsx("b", { className: "text-blue-700", children: "9944704699@upi" })] })
                ] }),
                v.jsxs("div", { className: "p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm space-y-1.5", children: [
                  v.jsx("p", { className: "font-bold text-slate-800 uppercase tracking-wider text-xs", children: "Foreign Donors (State Bank of India):" }),
                  v.jsxs("p", { children: [v.jsx("span", { className: "text-charcoal-500", children: "Account Name: " }), v.jsx("b", { children: "Hill Organization for peoples education" })] }),
                  v.jsxs("p", { children: [v.jsx("span", { className: "text-charcoal-500", children: "Account No: " }), v.jsx("b", { className: "font-mono font-bold", children: "40088305059" })] }),
                  v.jsxs("p", { children: [v.jsx("span", { className: "text-charcoal-500", children: "IFSC Code: " }), v.jsx("b", { className: "font-mono", children: "SBIN0000691" })] }),
                  v.jsxs("p", { children: [v.jsx("span", { className: "text-charcoal-500", children: "Swift Code: " }), v.jsx("b", { className: "font-mono", children: "SBININBB104" })] }),
                  v.jsxs("p", { children: [v.jsx("span", { className: "text-charcoal-500", children: "Branch Code: " }), "00691"] })
                ] })
              ] })
            ] })
          ] })
        ] })
      }),
      v.jsx("section", {
        className: "py-16 bg-white border-t border-charcoal-100",
        children: v.jsx("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: v.jsxs(g2, { children: [
            v.jsxs("div", { className: "label-tag justify-center mb-4", children: [v.jsx("span", { className: "w-5 h-px bg-forest-600" }), "Hill Charity Trust"] }),
            v.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-charcoal-900", children: ["Give a little &", " ", v.jsx("span", { className: "text-gradient-green", children: "change a lot." })] }),
            v.jsx("p", { className: "mt-4 text-charcoal-500 max-w-xl mx-auto leading-relaxed", children: "Visit our ashram in Tuticorin, meet the children and mothers, and see the impact of your compassion first-hand." })
          ] })
        })
      })
    ] });
  };

  // assets/Gallery.js
  var GALLERY_ITEMS = [{ "src": "./assets/hill_photos/events_e1.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/events_e10.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/events_e11.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/events_e2.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/events_e3.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/events_e4.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/events_e5.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/events_e6.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/events_e7.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/events_e8.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/events_e9.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/gallery_g1.jpg", "title": "Children Care & Learning Activity #1", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/gallery_g10.jpg", "title": "Children Care & Learning Activity #10", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/gallery_g11.jpg", "title": "Children Care & Learning Activity #11", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/gallery_g12.jpg", "title": "Children Care & Learning Activity #12", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/gallery_g13.jpg", "title": "Elderly Mothers Ashram Care #13", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/gallery_g14.jpg", "title": "Elderly Mothers Ashram Care #14", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/gallery_g16.jpg", "title": "Elderly Mothers Ashram Care #16", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/gallery_g17.jpg", "title": "Elderly Mothers Ashram Care #17", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/gallery_g18.jpg", "title": "Elderly Mothers Ashram Care #18", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/gallery_g19.jpg", "title": "Elderly Mothers Ashram Care #19", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/gallery_g2.jpg", "title": "Children Care & Learning Activity #2", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/gallery_g20.jpg", "title": "Elderly Mothers Ashram Care #20", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/gallery_g21.jpg", "title": "Nutritious Meal & Ration Drives #21", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/gallery_g22.jpg", "title": "Nutritious Meal & Ration Drives #22", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/gallery_g23.jpg", "title": "Nutritious Meal & Ration Drives #23", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/gallery_g24.jpg", "title": "Nutritious Meal & Ration Drives #24", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/gallery_g25.jpg", "title": "Nutritious Meal & Ration Drives #25", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/gallery_g26.jpg", "title": "Nutritious Meal & Ration Drives #26", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/gallery_g27.jpg", "title": "Nutritious Meal & Ration Drives #27", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/gallery_g28.jpg", "title": "Nutritious Meal & Ration Drives #28", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/gallery_g29.jpg", "title": "Field Outreach & Community Welfare #29", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g3.jpg", "title": "Children Care & Learning Activity #3", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/gallery_g30.jpg", "title": "Field Outreach & Community Welfare #30", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g31.jpg", "title": "Field Outreach & Community Welfare #31", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g32.jpg", "title": "Field Outreach & Community Welfare #32", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g33.jpg", "title": "Field Outreach & Community Welfare #33", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g36.jpg", "title": "Field Outreach & Community Welfare #36", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g37.jpg", "title": "Field Outreach & Community Welfare #37", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g38.jpg", "title": "Field Outreach & Community Welfare #38", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g39.jpg", "title": "Field Outreach & Community Welfare #39", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g4.jpg", "title": "Children Care & Learning Activity #4", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/gallery_g41.jpg", "title": "Field Outreach & Community Welfare #41", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g42.jpg", "title": "Field Outreach & Community Welfare #42", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g43.jpg", "title": "Field Outreach & Community Welfare #43", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g44.jpg", "title": "Field Outreach & Community Welfare #44", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g46.jpg", "title": "Field Outreach & Community Welfare #46", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g47.jpg", "title": "Field Outreach & Community Welfare #47", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g48.jpg", "title": "Field Outreach & Community Welfare #48", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g49.jpg", "title": "Field Outreach & Community Welfare #49", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g5.jpg", "title": "Children Care & Learning Activity #5", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/gallery_g50.jpg", "title": "Field Outreach & Community Welfare #50", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g51.jpg", "title": "Field Outreach & Community Welfare #51", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g52.jpg", "title": "Field Outreach & Community Welfare #52", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g53.jpg", "title": "Field Outreach & Community Welfare #53", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g54.jpg", "title": "Field Outreach & Community Welfare #54", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g55.jpg", "title": "Field Outreach & Community Welfare #55", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g56.jpg", "title": "Field Outreach & Community Welfare #56", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g57.jpg", "title": "Field Outreach & Community Welfare #57", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g58.jpg", "title": "Field Outreach & Community Welfare #58", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g6.jpg", "title": "Children Care & Learning Activity #6", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/gallery_g60.jpg", "title": "Field Outreach & Community Welfare #60", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g61.jpg", "title": "Field Outreach & Community Welfare #61", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g62.jpg", "title": "Field Outreach & Community Welfare #62", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g63.jpg", "title": "Field Outreach & Community Welfare #63", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g64.jpg", "title": "Field Outreach & Community Welfare #64", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g65.jpg", "title": "Field Outreach & Community Welfare #65", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g66.jpg", "title": "Field Outreach & Community Welfare #66", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g69.jpg", "title": "Field Outreach & Community Welfare #69", "category": "Community & Relief" }, { "src": "./assets/hill_photos/gallery_g7.jpg", "title": "Children Care & Learning Activity #7", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/gallery_g8.jpg", "title": "Children Care & Learning Activity #8", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/gallery_g9.jpg", "title": "Children Care & Learning Activity #9", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_about.png", "title": "Community Support & Welfare", "category": "Community & Relief" }, { "src": "./assets/enhanced/cause_1.png", "title": "Women Vocational & Higher Education", "category": "Women Empowerment" }, { "src": "./assets/enhanced/cause_2.png", "title": "Rural Child Development & Evening Centres", "category": "Child Development" }, { "src": "./assets/enhanced/cause_3.png", "title": "Hope Children Home - Loving Care & Education", "category": "Hope Children Home" }, { "src": "./assets/enhanced/cause_4.png", "title": "Home for Destitute Elderly Mothers", "category": "Home for the Aged" }, { "src": "./assets/enhanced/cause_5.png", "title": "Child Rights & Health Awareness Campaigns", "category": "Awareness Programs" }, { "src": "./assets/enhanced/cause_6.png", "title": "Emergency Flood & Cyclone Relief Support", "category": "Disaster Relief" }, { "src": "./assets/enhanced/cause_7.png", "title": "Feed the Hungry - Daily Food Distribution", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/img_event1.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/img_event10.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/img_event2.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/img_event3.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/img_fashion-show.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations" }, { "src": "./assets/hill_photos/img_g1.jpg", "title": "Children Care & Learning Activity #1", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_g10.jpg", "title": "Children Care & Learning Activity #10", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_g11.jpg", "title": "Children Care & Learning Activity #11", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_g12.jpg", "title": "Children Care & Learning Activity #12", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_g13.jpg", "title": "Elderly Mothers Ashram Care #13", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_g14.jpg", "title": "Elderly Mothers Ashram Care #14", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_g15.jpg", "title": "Elderly Mothers Ashram Care #15", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_g16.jpg", "title": "Elderly Mothers Ashram Care #16", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_g17.jpg", "title": "Elderly Mothers Ashram Care #17", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_g2.jpg", "title": "Children Care & Learning Activity #2", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_g3.jpg", "title": "Children Care & Learning Activity #3", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_g4.jpg", "title": "Children Care & Learning Activity #4", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_g5.jpg", "title": "Children Care & Learning Activity #5", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_g6.jpg", "title": "Children Care & Learning Activity #6", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_g7.jpg", "title": "Children Care & Learning Activity #7", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_g8.jpg", "title": "Children Care & Learning Activity #8", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_g9.jpg", "title": "Children Care & Learning Activity #9", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_gal1.png", "title": "Children Care & Learning Activity #1", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_gal10.jpg", "title": "Children Care & Learning Activity #10", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_gal11.jpg", "title": "Children Care & Learning Activity #11", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_gal12.jpg", "title": "Children Care & Learning Activity #12", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_gal13.jpg", "title": "Elderly Mothers Ashram Care #13", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_gal14.jpg", "title": "Elderly Mothers Ashram Care #14", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_gal15.jpg", "title": "Elderly Mothers Ashram Care #15", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_gal16.jpg", "title": "Elderly Mothers Ashram Care #16", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_gal17.jpg", "title": "Elderly Mothers Ashram Care #17", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_gal18.jpg", "title": "Elderly Mothers Ashram Care #18", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_gal19.jpg", "title": "Elderly Mothers Ashram Care #19", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_gal2.png", "title": "Children Care & Learning Activity #2", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_gal20.jpg", "title": "Elderly Mothers Ashram Care #20", "category": "Home for the Aged" }, { "src": "./assets/hill_photos/img_gal21.jpg", "title": "Nutritious Meal & Ration Drives #21", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/img_gal22.jpg", "title": "Nutritious Meal & Ration Drives #22", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/img_gal23.jpg", "title": "Nutritious Meal & Ration Drives #23", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/img_gal24.jpg", "title": "Nutritious Meal & Ration Drives #24", "category": "Feed the Hungry" }, { "src": "./assets/hill_photos/img_gal3.png", "title": "Children Care & Learning Activity #3", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_gal4.png", "title": "Children Care & Learning Activity #4", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_gal5.jpg", "title": "Children Care & Learning Activity #5", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_gal6.jpg", "title": "Children Care & Learning Activity #6", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_gal7.jpg", "title": "Children Care & Learning Activity #7", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_gal8.jpg", "title": "Children Care & Learning Activity #8", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_gal9.jpg", "title": "Children Care & Learning Activity #9", "category": "Hope Children Home" }, { "src": "./assets/hill_photos/img_home.png", "title": "Community Support & Welfare", "category": "Community & Relief" }, { "src": "./assets/hill_photos/img_nslider.jpg", "title": "Ashram Campus & Daily Life", "category": "Activities & Ashram" }, { "src": "./assets/enhanced/slider_1.jpg", "title": "Hope Children Home - Loving Care & Education", "category": "Hope Children Home" }, { "src": "./assets/enhanced/slider_2.jpg", "title": "Hope Children Home - Loving Care & Education", "category": "Hope Children Home" }, { "src": "./assets/enhanced/slider_3.jpg", "title": "Hope Children Home - Loving Care & Education", "category": "Hope Children Home" }, { "src": "./assets/enhanced/slider_6.jpg", "title": "Ashram Campus & Daily Life", "category": "Activities & Ashram" }, { "src": "./assets/enhanced/slider_7.jpg", "title": "Ashram Campus & Daily Life", "category": "Activities & Ashram" }, { "src": "./assets/enhanced/slider_8.jpg", "title": "Ashram Campus & Daily Life", "category": "Activities & Ashram" }, { "src": "./assets/enhanced/slider_9.jpg", "title": "Ashram Campus & Daily Life", "category": "Activities & Ashram" }];
  var CATEGORIES = [
    "All Photos",
    "Hope Children Home",
    "Home for the Aged",
    "Feed the Hungry",
    "Community & Relief",
    "Events & Celebrations"
  ];
  var Gallery = () => {
    const [selectedCat, setSelectedCat] = w.useState("All Photos");
    const [modalIndex, setModalIndex] = w.useState(null);
    const [visibleCount, setVisibleCount] = w.useState(24);
    const filtered = w.useMemo(() => {
      if (selectedCat === "All Photos") return GALLERY_ITEMS;
      return GALLERY_ITEMS.filter((item) => {
        if (selectedCat === "Hope Children Home") return item.category === "Hope Children Home";
        if (selectedCat === "Home for the Aged") return item.category === "Home for the Aged";
        if (selectedCat === "Feed the Hungry") return item.category === "Feed the Hungry";
        if (selectedCat === "Events & Celebrations") return item.category === "Events & Celebrations";
        return item.category === "Community & Relief" || item.category === "Activities & Ashram" || item.category === "General";
      });
    }, [selectedCat]);
    const displayed = filtered.slice(0, visibleCount);
    w.useEffect(() => {
      const handleKey = (ev2) => {
        if (modalIndex === null) return;
        if (ev2.key === "Escape") setModalIndex(null);
        if (ev2.key === "ArrowRight") {
          setModalIndex((prev) => (prev + 1) % filtered.length);
        }
        if (ev2.key === "ArrowLeft") {
          setModalIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
        }
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }, [modalIndex, filtered.length]);
    return v.jsxs("main", {
      className: "bg-slate-50 min-h-screen pt-20",
      children: [
        // Hero Header
        v.jsx("section", {
          className: "relative bg-gradient-to-b from-[#1E3A8A] to-[#172554] text-white py-8 sm:py-12 overflow-hidden",
          children: v.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
            children: [
              v.jsx("div", {
                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-3",
                children: "Real Impact in Tuticorin"
              }),
              v.jsxs("h1", {
                className: "font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-3",
                children: [
                  "Our Journey in ",
                  v.jsx("span", {
                    className: "bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent",
                    children: "Real Photos"
                  })
                ]
              }),
              v.jsx("p", {
                className: "max-w-3xl mx-auto text-base sm:text-lg text-blue-100/90 leading-relaxed",
                children: "Explore authentic moments from Hill Charity (Hill Organisation for People's Education). Since 2014, sheltering abandoned girl children, caring for elderly destitute mothers, and feeding hungry souls with love and dignity."
              }),
              v.jsxs("div", {
                className: "flex flex-wrap items-center justify-center gap-4 mt-5 text-xs sm:text-sm text-blue-200/80",
                children: [
                  v.jsxs("span", {
                    className: "flex items-center gap-2",
                    children: [
                      v.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-400" }),
                      GALLERY_ITEMS.length + "+ Authentic Photos"
                    ]
                  }),
                  v.jsxs("span", {
                    className: "flex items-center gap-2",
                    children: [
                      v.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-400" }),
                      "7 Core Service Initiatives"
                    ]
                  }),
                  v.jsxs("span", {
                    className: "flex items-center gap-2",
                    children: [
                      v.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-sky-400" }),
                      "Tuticorin, South India"
                    ]
                  })
                ]
              })
            ]
          })
        }),
        // Gallery Controls & Grid
        v.jsx("section", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8",
          children: v.jsxs("div", {
            children: [
              // Filter Tabs
              v.jsx("div", {
                className: "flex flex-wrap items-center justify-center gap-2 mb-6",
                children: CATEGORIES.map((cat) => {
                  const isSelected = selectedCat === cat;
                  return v.jsx(
                    "button",
                    {
                      key: cat,
                      onClick: () => {
                        setSelectedCat(cat);
                        setVisibleCount(24);
                      },
                      className: "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-200 " + (isSelected ? "bg-[#2563EB] text-white shadow-[0_4px_16px_rgba(37,99,235,0.35)] scale-105" : "bg-white text-slate-700 hover:bg-blue-50 border border-slate-200 hover:border-blue-200")
                    },
                    cat
                  );
                })
              }),
              // Photos Grid
              v.jsx("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3",
                children: displayed.map((item, idx) => {
                  return v.jsxs(
                    "div",
                    {
                      key: item.src + idx,
                      onClick: () => setModalIndex(idx),
                      className: "group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer aspect-[4/3]",
                      children: [
                        v.jsx("img", {
                          src: item.src,
                          alt: item.title,
                          loading: "lazy",
                          className: "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        }),
                        v.jsx("div", {
                          className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4",
                          children: v.jsxs("div", {
                            className: "transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300",
                            children: [
                              v.jsx("span", {
                                className: "inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-900 mb-1.5",
                                children: item.category
                              }),
                              v.jsx("p", {
                                className: "text-white text-xs font-semibold line-clamp-2",
                                children: item.title
                              })
                            ]
                          })
                        })
                      ]
                    }
                  );
                })
              }),
              // Load more button
              visibleCount < filtered.length && v.jsx("div", {
                className: "text-center mt-8",
                children: v.jsxs("button", {
                  onClick: () => setVisibleCount((prev) => prev + 24),
                  className: "px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
                  children: [
                    "Load More Photos (" + (filtered.length - visibleCount) + " remaining)"
                  ]
                })
              })
            ]
          })
        }),
        // Lightbox Modal
        modalIndex !== null && filtered[modalIndex] && v.jsxs("div", {
          className: "fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md",
          onClick: () => setModalIndex(null),
          children: [
            // Close Button
            v.jsx("button", {
              onClick: () => setModalIndex(null),
              className: "absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-xl transition-all",
              children: "\u2715"
            }),
            // Previous Button
            v.jsx("button", {
              onClick: (ev2) => {
                ev2.stopPropagation();
                setModalIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
              },
              className: "absolute left-3 sm:left-6 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-2xl transition-all",
              children: "\u2039"
            }),
            // Next Button
            v.jsx("button", {
              onClick: (ev2) => {
                ev2.stopPropagation();
                setModalIndex((prev) => (prev + 1) % filtered.length);
              },
              className: "absolute right-3 sm:right-6 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-2xl transition-all",
              children: "\u203A"
            }),
            // Modal Body
            v.jsxs("div", {
              onClick: (ev2) => ev2.stopPropagation(),
              className: "relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-xl overflow-hidden shadow-2xl flex flex-col",
              children: [
                v.jsx("div", {
                  className: "relative flex-1 flex items-center justify-center bg-black overflow-hidden max-h-[75vh]",
                  children: v.jsx("img", {
                    src: filtered[modalIndex].src,
                    alt: filtered[modalIndex].title,
                    className: "max-h-[75vh] w-auto max-w-full object-contain"
                  })
                }),
                v.jsxs("div", {
                  className: "p-4 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800",
                  children: [
                    v.jsxs("div", {
                      children: [
                        v.jsx("span", {
                          className: "inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 mb-1",
                          children: filtered[modalIndex].category
                        }),
                        v.jsx("h3", {
                          className: "font-semibold text-sm sm:text-base text-slate-100",
                          children: filtered[modalIndex].title
                        })
                      ]
                    }),
                    v.jsxs("div", {
                      className: "flex items-center gap-3 shrink-0",
                      children: [
                        v.jsxs("span", {
                          className: "text-xs text-slate-400",
                          children: [modalIndex + 1, " of ", filtered.length]
                        }),
                        v.jsx(lt, {
                          to: "/contact",
                          className: "px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 hover:scale-105 transition-all",
                          children: "Donate for this Cause"
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        v.jsx("section", {
          className: "bg-gradient-to-r from-[#1E3A8A] to-[#172554] text-white py-8 sm:py-10 border-t border-blue-400/20 mt-8",
          children: v.jsx("div", {
            className: "max-w-5xl mx-auto px-4 text-center",
            children: v.jsxs("div", {
              className: "flex flex-col sm:flex-row items-center justify-between gap-4",
              children: [
                v.jsxs("div", {
                  className: "text-center sm:text-left",
                  children: [
                    v.jsx("h3", {
                      className: "font-display font-bold text-lg sm:text-xl text-white",
                      children: "Want to bring smiles to these children and elderly mothers?"
                    }),
                    v.jsx("p", {
                      className: "text-blue-200 text-xs sm:text-sm mt-0.5",
                      children: "Your support provides daily nutrition, healthcare, and education in Tuticorin."
                    })
                  ]
                }),
                v.jsxs("div", {
                  className: "flex items-center gap-3 shrink-0",
                  children: [
                    v.jsx(lt, {
                      to: "/contact",
                      className: "px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:scale-105 transition-all shadow-md",
                      children: "Donate Now"
                    }),
                    v.jsx(lt, {
                      to: "/contact",
                      className: "px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all",
                      children: "Contact Ashram"
                    })
                  ]
                })
              ]
            })
          })
        })
      ]
    });
  };
  var Gallery_default = Gallery;

  // assets/entry.js
  var oC = ne3;
  var lC = N3;
  var aC = A4;
  var uC = N4;
  var gC = Gallery_default;
  var cC = () => v.jsx("div", {
    className: "min-h-screen flex items-center justify-center bg-white",
    children: v.jsxs(Pe.div, {
      animate: { opacity: [0.4, 1, 0.4] },
      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
      className: "flex flex-col items-center gap-4",
      children: [
        v.jsx("div", {
          className: "w-10 h-10 bg-forest-600 rounded-xl flex items-center justify-center",
          children: v.jsx("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "w-6 h-6",
            children: v.jsx("path", {
              d: "M12 2C8.686 2 6 4.686 6 8c0 2.122 1.065 3.99 2.693 5.115C5.435 14.374 3 17.463 3 21a1 1 0 001 1h16a1 1 0 001-1c0-3.537-2.435-6.626-5.693-7.885C16.935 11.99 18 10.122 18 8c0-3.314-2.686-6-6-6z",
              fill: "white"
            })
          })
        }),
        v.jsx("span", {
          className: "text-charcoal-400 text-sm font-medium",
          children: "Loading..."
        })
      ]
    })
  });
  var fC = () => {
    const e = vn();
    return v.jsx(ni, {
      mode: "wait",
      initial: false,
      children: v.jsx(Pe.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -12 },
        transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
        style: { willChange: "opacity, transform" },
        children: v.jsx(w.Suspense, {
          fallback: v.jsx(cC, {}),
          children: v.jsxs(G0, {
            location: e,
            children: [
              v.jsx(wn, { path: "/", element: v.jsx(oC, {}) }),
              v.jsx(wn, { path: "/about", element: v.jsx(lC, {}) }),
              v.jsx(wn, { path: "/services", element: v.jsx(aC, {}) }),
              v.jsx(wn, { path: "/gallery", element: v.jsx(gC, {}) }),
              v.jsx(wn, { path: "/contact", element: v.jsx(uC, {}) }),
              v.jsx(wn, {
                path: "*",
                element: window.location.protocol === "file:" && (!window.location.hash || window.location.hash === "#" || window.location.hash === "#/") ? v.jsx(oC, {}) : v.jsxs("div", {
                  className: "min-h-screen flex flex-col items-center justify-center gap-6 bg-white pt-20",
                  children: [
                    v.jsx("div", { className: "text-8xl font-display font-bold text-charcoal-100", children: "404" }),
                    v.jsx("h1", { className: "text-2xl font-display font-bold text-charcoal-900", children: "Page not found" }),
                    v.jsx("p", { className: "text-charcoal-500 max-w-sm text-center", children: "The page you're looking for doesn't exist. Let's get you back on track." }),
                    v.jsx("a", { href: "/", className: "px-7 py-3.5 bg-forest-600 text-white font-bold rounded-full hover:bg-forest-700 transition-colors text-sm", children: "Back to Home" })
                  ]
                })
              })
            ]
          })
        })
      }, e.pathname)
    });
  };
  var dC = () => {
    const e = vn();
    return da.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, [e.pathname]), null;
  };
  var hC = () => v.jsx(e1, {
    children: v.jsxs(sC, {
      children: [
        v.jsx(dC, {}),
        v.jsxs("div", {
          className: "flex flex-col min-h-screen",
          children: [
            v.jsx(qP, {}),
            v.jsx("div", { className: "flex-1", children: v.jsx(fC, {}) }),
            v.jsx(eC, {})
          ]
        })
      ]
    })
  });
  Yo.createRoot(document.getElementById("root")).render(
    v.jsx(da.StrictMode, { children: v.jsx(hC, {}) })
  );
})();
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @remix-run/router v1.23.3
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
/**
* React Router v6.30.4
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
/**
* React Router DOM v6.30.4
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
/**
* @license lucide-react v0.400.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.5.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(D).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || j), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (j = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Se(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ke(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Ee;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Ae(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = Te.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Te.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Ae(this, e, Se), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function Pe(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(je, ""), u, l));
    }
    return n;
  }
  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Oe(o[r], a[r]);
        else Oe(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ne.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Pe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    We = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Fe = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ie(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Me.test(a) &&
          Fe.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = 3 < parseInt(r.height)),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var _e = ["Webkit", "Moz", "ms"],
    ze = E.createElement("div").style,
    Ue = {};
  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return (
      t ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
              while (n--) if ((e = _e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Ie(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Ge.test(t),
          l = e.style;
        if (
          (u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Ge.test(t) || (t = Xe(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : We(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              We(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (y.checkOn = "" !== rt.value),
    (y.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (y.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(P) || []).join(" ");
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, yt(this)));
          });
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, yt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, yt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = mt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : vt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        S.error("Invalid XML: " + e),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : Dt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Bt(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function $t(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Bt(Rt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ot.test(v.type)),
        (f = v.url.replace(qt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(jt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Bt(Mt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (y.cors = !!zt && "withCredentials" in zt),
    (y.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/*!
 * Bootstrap v4.5.0 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery);
})(this, function (t, e) {
  "use strict";
  function n(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function i(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function o(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function r(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function s(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? r(Object(n), !0).forEach(function (e) {
            o(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : r(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  function a(t) {
    var n = this,
      i = !1;
    return (
      e(this).one(l.TRANSITION_END, function () {
        i = !0;
      }),
      setTimeout(function () {
        i || l.triggerTransitionEnd(n);
      }, t),
      this
    );
  }
  var l = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var n = e(t).css("transition-duration"),
        i = e(t).css("transition-delay"),
        o = parseFloat(n),
        r = parseFloat(i);
      return o || r
        ? ((n = n.split(",")[0]),
          (i = i.split(",")[0]),
          1e3 * (parseFloat(n) + parseFloat(i)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      e(t).trigger("transitionend");
    },
    supportsTransitionEnd: function () {
      return Boolean("transitionend");
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            s =
              r && l.isElement(r)
                ? "element"
                : null === (a = r) || "undefined" == typeof a
                ? "" + a
                : {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? l.findShadowRoot(t.parentNode)
        : null;
    },
    jQueryDetection: function () {
      if ("undefined" == typeof e)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = e.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  l.jQueryDetection(),
    (e.fn.emulateTransitionEnd = a),
    (e.event.special[l.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (t) {
        if (e(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var c = "alert",
    u = e.fn[c],
    h = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.alert"), (this._element = null);
        }),
        (n._getRootElement = function (t) {
          var n = l.getSelectorFromElement(t),
            i = !1;
          return (
            n && (i = document.querySelector(n)),
            i || (i = e(t).closest(".alert")[0]),
            i
          );
        }),
        (n._triggerCloseEvent = function (t) {
          var n = e.Event("close.bs.alert");
          return e(t).trigger(n), n;
        }),
        (n._removeElement = function (t) {
          var n = this;
          if ((e(t).removeClass("show"), e(t).hasClass("fade"))) {
            var i = l.getTransitionDurationFromElement(t);
            e(t)
              .one(l.TRANSITION_END, function (e) {
                return n._destroyElement(t, e);
              })
              .emulateTransitionEnd(i);
          } else this._destroyElement(t);
        }),
        (n._destroyElement = function (t) {
          e(t).detach().trigger("closed.bs.alert").remove();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.alert");
            o || ((o = new t(this)), i.data("bs.alert", o)),
              "close" === n && o[n](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.alert.data-api",
    '[data-dismiss="alert"]',
    h._handleDismiss(new h())
  ),
    (e.fn[c] = h._jQueryInterface),
    (e.fn[c].Constructor = h),
    (e.fn[c].noConflict = function () {
      return (e.fn[c] = u), h._jQueryInterface;
    });
  var f = e.fn.button,
    d = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          var t = !0,
            n = !0,
            i = e(this._element).closest('[data-toggle="buttons"]')[0];
          if (i) {
            var o = this._element.querySelector('input:not([type="hidden"])');
            if (o) {
              if ("radio" === o.type)
                if (o.checked && this._element.classList.contains("active"))
                  t = !1;
                else {
                  var r = i.querySelector(".active");
                  r && e(r).removeClass("active");
                }
              t &&
                (("checkbox" !== o.type && "radio" !== o.type) ||
                  (o.checked = !this._element.classList.contains("active")),
                e(o).trigger("change")),
                o.focus(),
                (n = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (n &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains("active")
              ),
            t && e(this._element).toggleClass("active"));
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.button"), (this._element = null);
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.button");
            i || ((i = new t(this)), e(this).data("bs.button", i)),
              "toggle" === n && i[n]();
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
        ]),
        t
      );
    })();
  e(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var n = t.target,
        i = n;
      if (
        (e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]),
        !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))
      )
        t.preventDefault();
      else {
        var o = n.querySelector('input:not([type="hidden"])');
        if (
          o &&
          (o.hasAttribute("disabled") || o.classList.contains("disabled"))
        )
          return void t.preventDefault();
        "LABEL" === i.tagName &&
          o &&
          "checkbox" === o.type &&
          t.preventDefault(),
          d._jQueryInterface.call(e(n), "toggle");
      }
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function (t) {
        var n = e(t.target).closest(".btn")[0];
        e(n).toggleClass("focus", /^focus(in)?$/.test(t.type));
      }
    ),
    e(window).on("load.bs.button.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector('input:not([type="hidden"])');
        o.checked || o.hasAttribute("checked")
          ? i.classList.add("active")
          : i.classList.remove("active");
      }
      for (
        var r = 0,
          s = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        r < s;
        r++
      ) {
        var a = t[r];
        "true" === a.getAttribute("aria-pressed")
          ? a.classList.add("active")
          : a.classList.remove("active");
      }
    }),
    (e.fn.button = d._jQueryInterface),
    (e.fn.button.Constructor = d),
    (e.fn.button.noConflict = function () {
      return (e.fn.button = f), d._jQueryInterface;
    });
  var p = "carousel",
    m = ".bs.carousel",
    g = e.fn[p],
    v = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    _ = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    b = { TOUCH: "touch", PEN: "pen" },
    y = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            ".carousel-indicators"
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var n = t.prototype;
      return (
        (n.next = function () {
          this._isSliding || this._slide("next");
        }),
        (n.nextWhenVisible = function () {
          !document.hidden &&
            e(this._element).is(":visible") &&
            "hidden" !== e(this._element).css("visibility") &&
            this.next();
        }),
        (n.prev = function () {
          this._isSliding || this._slide("prev");
        }),
        (n.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev"
            ) && (l.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (n.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (n.to = function (t) {
          var n = this;
          this._activeElement = this._element.querySelector(
            ".active.carousel-item"
          );
          var i = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              e(this._element).one("slid.bs.carousel", function () {
                return n.to(t);
              });
            else {
              if (i === t) return this.pause(), void this.cycle();
              var o = t > i ? "next" : "prev";
              this._slide(o, this._items[t]);
            }
        }),
        (n.dispose = function () {
          e(this._element).off(m),
            e.removeData(this._element, "bs.carousel"),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (n._getConfig = function (t) {
          return (t = s(s({}, v), t)), l.typeCheckConfig(p, t, _), t;
        }),
        (n._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (n._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            e(this._element).on("keydown.bs.carousel", function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              e(this._element)
                .on("mouseenter.bs.carousel", function (e) {
                  return t.pause(e);
                })
                .on("mouseleave.bs.carousel", function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (n._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var n = function (e) {
                t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              i = function (e) {
                t._pointerEvent &&
                  b[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            e(this._element.querySelectorAll(".carousel-item img")).on(
              "dragstart.bs.carousel",
              function (t) {
                return t.preventDefault();
              }
            ),
              this._pointerEvent
                ? (e(this._element).on("pointerdown.bs.carousel", function (t) {
                    return n(t);
                  }),
                  e(this._element).on("pointerup.bs.carousel", function (t) {
                    return i(t);
                  }),
                  this._element.classList.add("pointer-event"))
                : (e(this._element).on("touchstart.bs.carousel", function (t) {
                    return n(t);
                  }),
                  e(this._element).on("touchmove.bs.carousel", function (e) {
                    return (function (e) {
                      e.originalEvent.touches &&
                      e.originalEvent.touches.length > 1
                        ? (t.touchDeltaX = 0)
                        : (t.touchDeltaX =
                            e.originalEvent.touches[0].clientX - t.touchStartX);
                    })(e);
                  }),
                  e(this._element).on("touchend.bs.carousel", function (t) {
                    return i(t);
                  }));
          }
        }),
        (n._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (n._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(t)
          );
        }),
        (n._getItemByDirection = function (t, e) {
          var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
          return -1 === s
            ? this._items[this._items.length - 1]
            : this._items[s];
        }),
        (n._triggerSlideEvent = function (t, n) {
          var i = this._getItemIndex(t),
            o = this._getItemIndex(
              this._element.querySelector(".active.carousel-item")
            ),
            r = e.Event("slide.bs.carousel", {
              relatedTarget: t,
              direction: n,
              from: o,
              to: i,
            });
          return e(this._element).trigger(r), r;
        }),
        (n._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var n = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active")
            );
            e(n).removeClass("active");
            var i = this._indicatorsElement.children[this._getItemIndex(t)];
            i && e(i).addClass("active");
          }
        }),
        (n._slide = function (t, n) {
          var i,
            o,
            r,
            s = this,
            a = this._element.querySelector(".active.carousel-item"),
            c = this._getItemIndex(a),
            u = n || (a && this._getItemByDirection(t, a)),
            h = this._getItemIndex(u),
            f = Boolean(this._interval);
          if (
            ("next" === t
              ? ((i = "carousel-item-left"),
                (o = "carousel-item-next"),
                (r = "left"))
              : ((i = "carousel-item-right"),
                (o = "carousel-item-prev"),
                (r = "right")),
            u && e(u).hasClass("active"))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(u, r).isDefaultPrevented() &&
            a &&
            u
          ) {
            (this._isSliding = !0),
              f && this.pause(),
              this._setActiveIndicatorElement(u);
            var d = e.Event("slid.bs.carousel", {
              relatedTarget: u,
              direction: r,
              from: c,
              to: h,
            });
            if (e(this._element).hasClass("slide")) {
              e(u).addClass(o), l.reflow(u), e(a).addClass(i), e(u).addClass(i);
              var p = parseInt(u.getAttribute("data-interval"), 10);
              p
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = p))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var m = l.getTransitionDurationFromElement(a);
              e(a)
                .one(l.TRANSITION_END, function () {
                  e(u)
                    .removeClass(i + " " + o)
                    .addClass("active"),
                    e(a).removeClass("active " + o + " " + i),
                    (s._isSliding = !1),
                    setTimeout(function () {
                      return e(s._element).trigger(d);
                    }, 0);
                })
                .emulateTransitionEnd(m);
            } else
              e(a).removeClass("active"),
                e(u).addClass("active"),
                (this._isSliding = !1),
                e(this._element).trigger(d);
            f && this.cycle();
          }
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.carousel"),
              o = s(s({}, v), e(this).data());
            "object" == typeof n && (o = s(s({}, o), n));
            var r = "string" == typeof n ? n : o.slide;
            if (
              (i || ((i = new t(this, o)), e(this).data("bs.carousel", i)),
              "number" == typeof n)
            )
              i.to(n);
            else if ("string" == typeof r) {
              if ("undefined" == typeof i[r])
                throw new TypeError('No method named "' + r + '"');
              i[r]();
            } else o.interval && o.ride && (i.pause(), i.cycle());
          });
        }),
        (t._dataApiClickHandler = function (n) {
          var i = l.getSelectorFromElement(this);
          if (i) {
            var o = e(i)[0];
            if (o && e(o).hasClass("carousel")) {
              var r = s(s({}, e(o).data()), e(this).data()),
                a = this.getAttribute("data-slide-to");
              a && (r.interval = !1),
                t._jQueryInterface.call(e(o), r),
                a && e(o).data("bs.carousel").to(a),
                n.preventDefault();
            }
          }
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return v;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.carousel.data-api",
    "[data-slide], [data-slide-to]",
    y._dataApiClickHandler
  ),
    e(window).on("load.bs.carousel.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          n = 0,
          i = t.length;
        n < i;
        n++
      ) {
        var o = e(t[n]);
        y._jQueryInterface.call(o, o.data());
      }
    }),
    (e.fn[p] = y._jQueryInterface),
    (e.fn[p].Constructor = y),
    (e.fn[p].noConflict = function () {
      return (e.fn[p] = g), y._jQueryInterface;
    });
  var w = "collapse",
    E = e.fn[w],
    T = { toggle: !0, parent: "" },
    C = { toggle: "boolean", parent: "(string|element)" },
    S = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(
              document.querySelectorAll('[data-toggle="collapse"]')
            ),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = l.getSelectorFromElement(r),
            a = [].slice
              .call(document.querySelectorAll(s))
              .filter(function (e) {
                return e === t;
              });
          null !== s &&
            a.length > 0 &&
            ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          e(this._element).hasClass("show") ? this.hide() : this.show();
        }),
        (n.show = function () {
          var n,
            i,
            o = this;
          if (
            !this._isTransitioning &&
            !e(this._element).hasClass("show") &&
            (this._parent &&
              0 ===
                (n = [].slice
                  .call(this._parent.querySelectorAll(".show, .collapsing"))
                  .filter(function (t) {
                    return "string" == typeof o._config.parent
                      ? t.getAttribute("data-parent") === o._config.parent
                      : t.classList.contains("collapse");
                  })).length &&
              (n = null),
            !(
              n &&
              (i = e(n).not(this._selector).data("bs.collapse")) &&
              i._isTransitioning
            ))
          ) {
            var r = e.Event("show.bs.collapse");
            if ((e(this._element).trigger(r), !r.isDefaultPrevented())) {
              n &&
                (t._jQueryInterface.call(e(n).not(this._selector), "hide"),
                i || e(n).data("bs.collapse", null));
              var s = this._getDimension();
              e(this._element).removeClass("collapse").addClass("collapsing"),
                (this._element.style[s] = 0),
                this._triggerArray.length &&
                  e(this._triggerArray)
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                c = l.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(l.TRANSITION_END, function () {
                  e(o._element)
                    .removeClass("collapsing")
                    .addClass("collapse show"),
                    (o._element.style[s] = ""),
                    o.setTransitioning(!1),
                    e(o._element).trigger("shown.bs.collapse");
                })
                .emulateTransitionEnd(c),
                (this._element.style[s] = this._element[a] + "px");
            }
          }
        }),
        (n.hide = function () {
          var t = this;
          if (!this._isTransitioning && e(this._element).hasClass("show")) {
            var n = e.Event("hide.bs.collapse");
            if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
              var i = this._getDimension();
              (this._element.style[i] =
                this._element.getBoundingClientRect()[i] + "px"),
                l.reflow(this._element),
                e(this._element)
                  .addClass("collapsing")
                  .removeClass("collapse show");
              var o = this._triggerArray.length;
              if (o > 0)
                for (var r = 0; r < o; r++) {
                  var s = this._triggerArray[r],
                    a = l.getSelectorFromElement(s);
                  if (null !== a)
                    e([].slice.call(document.querySelectorAll(a))).hasClass(
                      "show"
                    ) || e(s).addClass("collapsed").attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[i] = "";
              var c = l.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(l.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    e(t._element)
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(c);
            }
          }
        }),
        (n.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.collapse"),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (n._getConfig = function (t) {
          return (
            ((t = s(s({}, T), t)).toggle = Boolean(t.toggle)),
            l.typeCheckConfig(w, t, C),
            t
          );
        }),
        (n._getDimension = function () {
          return e(this._element).hasClass("width") ? "width" : "height";
        }),
        (n._getParent = function () {
          var n,
            i = this;
          l.isElement(this._config.parent)
            ? ((n = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (n = this._config.parent[0]))
            : (n = document.querySelector(this._config.parent));
          var o =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            r = [].slice.call(n.querySelectorAll(o));
          return (
            e(r).each(function (e, n) {
              i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
            }),
            n
          );
        }),
        (n._addAriaAndCollapsedClass = function (t, n) {
          var i = e(t).hasClass("show");
          n.length &&
            e(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
        }),
        (t._getTargetFromElement = function (t) {
          var e = l.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.collapse"),
              r = s(s(s({}, T), i.data()), "object" == typeof n && n ? n : {});
            if (
              (!o &&
                r.toggle &&
                "string" == typeof n &&
                /show|hide/.test(n) &&
                (r.toggle = !1),
              o || ((o = new t(this, r)), i.data("bs.collapse", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n]();
            }
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return T;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.collapse.data-api",
    '[data-toggle="collapse"]',
    function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var n = e(this),
        i = l.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(i));
      e(o).each(function () {
        var t = e(this),
          i = t.data("bs.collapse") ? "toggle" : n.data();
        S._jQueryInterface.call(t, i);
      });
    }
  ),
    (e.fn[w] = S._jQueryInterface),
    (e.fn[w].Constructor = S),
    (e.fn[w].noConflict = function () {
      return (e.fn[w] = E), S._jQueryInterface;
    });
  var D =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      "undefined" != typeof navigator,
    k = (function () {
      for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
        if (D && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
      return 0;
    })();
  var N =
    D && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, k));
          };
        };
  function O(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function A(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function I(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function x(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = A(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : x(I(t));
  }
  function j(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }
  var L = D && !(!window.MSInputMethodContext || !document.documentMode),
    P = D && /MSIE 10/.test(navigator.userAgent);
  function F(t) {
    return 11 === t ? L : 10 === t ? P : L || P;
  }
  function R(t) {
    if (!t) return document.documentElement;
    for (
      var e = F(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === A(n, "position")
        ? R(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function M(t) {
    return null !== t.parentNode ? M(t.parentNode) : t;
  }
  function B(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s,
      a,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return "BODY" === (a = (s = l).nodeName) ||
        ("HTML" !== a && R(s.firstElementChild) !== s)
        ? R(l)
        : l;
    var c = M(t);
    return c.host ? B(c.host, e) : B(t, M(e).host);
  }
  function q(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
      n = "top" === e ? "scrollTop" : "scrollLeft",
      i = t.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var o = t.ownerDocument.documentElement,
        r = t.ownerDocument.scrollingElement || o;
      return r[n];
    }
    return t[n];
  }
  function H(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = q(e, "top"),
      o = q(e, "left"),
      r = n ? -1 : 1;
    return (
      (t.top += i * r),
      (t.bottom += i * r),
      (t.left += o * r),
      (t.right += o * r),
      t
    );
  }
  function Q(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"], 10) +
      parseFloat(t["border" + i + "Width"], 10)
    );
  }
  function W(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      F(10)
        ? parseInt(n["offset" + t]) +
            parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
            parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
        : 0
    );
  }
  function U(t) {
    var e = t.body,
      n = t.documentElement,
      i = F(10) && getComputedStyle(n);
    return { height: W("Height", e, n, i), width: W("Width", e, n, i) };
  }
  var V = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    },
    Y = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    z = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    X =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function K(t) {
    return X({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function G(t) {
    var e = {};
    try {
      if (F(10)) {
        e = t.getBoundingClientRect();
        var n = q(t, "top"),
          i = q(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      r = "HTML" === t.nodeName ? U(t.ownerDocument) : {},
      s = r.width || t.clientWidth || o.width,
      a = r.height || t.clientHeight || o.height,
      l = t.offsetWidth - s,
      c = t.offsetHeight - a;
    if (l || c) {
      var u = A(t);
      (l -= Q(u, "x")), (c -= Q(u, "y")), (o.width -= l), (o.height -= c);
    }
    return K(o);
  }
  function $(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = F(10),
      o = "HTML" === e.nodeName,
      r = G(t),
      s = G(e),
      a = x(t),
      l = A(e),
      c = parseFloat(l.borderTopWidth, 10),
      u = parseFloat(l.borderLeftWidth, 10);
    n && o && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
    var h = K({
      top: r.top - s.top - c,
      left: r.left - s.left - u,
      width: r.width,
      height: r.height,
    });
    if (((h.marginTop = 0), (h.marginLeft = 0), !i && o)) {
      var f = parseFloat(l.marginTop, 10),
        d = parseFloat(l.marginLeft, 10);
      (h.top -= c - f),
        (h.bottom -= c - f),
        (h.left -= u - d),
        (h.right -= u - d),
        (h.marginTop = f),
        (h.marginLeft = d);
    }
    return (
      (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) &&
        (h = H(h, e)),
      h
    );
  }
  function J(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = t.ownerDocument.documentElement,
      i = $(t, n),
      o = Math.max(n.clientWidth, window.innerWidth || 0),
      r = Math.max(n.clientHeight, window.innerHeight || 0),
      s = e ? 0 : q(n),
      a = e ? 0 : q(n, "left"),
      l = {
        top: s - i.top + i.marginTop,
        left: a - i.left + i.marginLeft,
        width: o,
        height: r,
      };
    return K(l);
  }
  function Z(t) {
    var e = t.nodeName;
    if ("BODY" === e || "HTML" === e) return !1;
    if ("fixed" === A(t, "position")) return !0;
    var n = I(t);
    return !!n && Z(n);
  }
  function tt(t) {
    if (!t || !t.parentElement || F()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === A(e, "transform"); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function et(t, e, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      r = { top: 0, left: 0 },
      s = o ? tt(t) : B(t, j(e));
    if ("viewport" === i) r = J(s, o);
    else {
      var a = void 0;
      "scrollParent" === i
        ? "BODY" === (a = x(I(e))).nodeName &&
          (a = t.ownerDocument.documentElement)
        : (a = "window" === i ? t.ownerDocument.documentElement : i);
      var l = $(a, s, o);
      if ("HTML" !== a.nodeName || Z(s)) r = l;
      else {
        var c = U(t.ownerDocument),
          u = c.height,
          h = c.width;
        (r.top += l.top - l.marginTop),
          (r.bottom = u + l.top),
          (r.left += l.left - l.marginLeft),
          (r.right = h + l.left);
      }
    }
    var f = "number" == typeof (n = n || 0);
    return (
      (r.left += f ? n : n.left || 0),
      (r.top += f ? n : n.top || 0),
      (r.right -= f ? n : n.right || 0),
      (r.bottom -= f ? n : n.bottom || 0),
      r
    );
  }
  function nt(t) {
    return t.width * t.height;
  }
  function it(t, e, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = et(n, i, r, o),
      a = {
        top: { width: s.width, height: e.top - s.top },
        right: { width: s.right - e.right, height: s.height },
        bottom: { width: s.width, height: s.bottom - e.bottom },
        left: { width: e.left - s.left, height: s.height },
      },
      l = Object.keys(a)
        .map(function (t) {
          return X({ key: t }, a[t], { area: nt(a[t]) });
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      c = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      u = c.length > 0 ? c[0].key : l[0].key,
      h = t.split("-")[1];
    return u + (h ? "-" + h : "");
  }
  function ot(t, e, n) {
    var i =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      o = i ? tt(e) : B(e, j(n));
    return $(n, o, i);
  }
  function rt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
      i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function st(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function at(t, e, n) {
    n = n.split("-")[0];
    var i = rt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      s = r ? "top" : "left",
      a = r ? "left" : "top",
      l = r ? "height" : "width",
      c = r ? "width" : "height";
    return (
      (o[s] = e[s] + e[l] / 2 - i[l] / 2),
      (o[a] = n === a ? e[a] - i[c] : e[st(a)]),
      o
    );
  }
  function lt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function ct(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = lt(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", n)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t.function || t.fn;
        t.enabled &&
          O(n) &&
          ((e.offsets.popper = K(e.offsets.popper)),
          (e.offsets.reference = K(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function ut() {
    if (!this.state.isDestroyed) {
      var t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (t.offsets.reference = ot(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (t.placement = it(
          this.options.placement,
          t.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (t.originalPlacement = t.placement),
        (t.positionFixed = this.options.positionFixed),
        (t.offsets.popper = at(this.popper, t.offsets.reference, t.placement)),
        (t.offsets.popper.position = this.options.positionFixed
          ? "fixed"
          : "absolute"),
        (t = ct(this.modifiers, t)),
        this.state.isCreated
          ? this.options.onUpdate(t)
          : ((this.state.isCreated = !0), this.options.onCreate(t));
    }
  }
  function ht(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function ft(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? "" + o + n : t;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function dt() {
    return (
      (this.state.isDestroyed = !0),
      ht(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style.left = ""),
        (this.popper.style.right = ""),
        (this.popper.style.bottom = ""),
        (this.popper.style.willChange = ""),
        (this.popper.style[ft("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function pt(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function mt(t, e, n, i) {
    (n.updateBound = i),
      pt(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var o = x(t);
    return (
      (function t(e, n, i, o) {
        var r = "BODY" === e.nodeName,
          s = r ? e.ownerDocument.defaultView : e;
        s.addEventListener(n, i, { passive: !0 }),
          r || t(x(s.parentNode), n, i, o),
          o.push(s);
      })(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function gt() {
    this.state.eventsEnabled ||
      (this.state = mt(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function vt() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        pt(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function _t(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function bt(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
        _t(e[n]) &&
        (i = "px"),
        (t.style[n] = e[n] + i);
    });
  }
  var yt = D && /Firefox/i.test(navigator.userAgent);
  function wt(t, e, n) {
    var i = lt(t, function (t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = "`" + e + "`",
        s = "`" + n + "`";
      console.warn(
        s +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return o;
  }
  var Et = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    Tt = Et.slice(3);
  function Ct(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = Tt.indexOf(t),
      i = Tt.slice(n + 1).concat(Tt.slice(0, n));
    return e ? i.reverse() : i;
  }
  var St = "flip",
    Dt = "clockwise",
    kt = "counterclockwise";
  function Nt(t, e, n, i) {
    var o = [0, 0],
      r = -1 !== ["right", "left"].indexOf(i),
      s = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      a = s.indexOf(
        lt(s, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    s[a] &&
      -1 === s[a].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      c =
        -1 !== a
          ? [
              s.slice(0, a).concat([s[a].split(l)[0]]),
              [s[a].split(l)[1]].concat(s.slice(a + 1)),
            ]
          : [s];
    return (
      (c = c.map(function (t, i) {
        var o = (1 === i ? !r : r) ? "height" : "width",
          s = !1;
        return t
          .reduce(function (t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
              ? ((t[t.length - 1] = e), (s = !0), t)
              : s
              ? ((t[t.length - 1] += e), (s = !1), t)
              : t.concat(e);
          }, [])
          .map(function (t) {
            return (function (t, e, n, i) {
              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                s = o[2];
              if (!r) return t;
              if (0 === s.indexOf("%")) {
                var a = void 0;
                switch (s) {
                  case "%p":
                    a = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a = i;
                }
                return (K(a)[e] / 100) * r;
              }
              if ("vh" === s || "vw" === s) {
                return (
                  (("vh" === s
                    ? Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      )
                    : Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      )) /
                    100) *
                  r
                );
              }
              return r;
            })(t, o, e, n);
          });
      })).forEach(function (t, e) {
        t.forEach(function (n, i) {
          _t(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
        });
      }),
      o
    );
  }
  var Ot = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = {
                  start: z({}, l, r[l]),
                  end: z({}, l, r[l] + r[c] - s[c]),
                };
              t.offsets.popper = X({}, s, u[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;
            return (
              (l = _t(+n) ? [+n, 0] : Nt(n, r, s, a)),
              "left" === a
                ? ((r.top += l[0]), (r.left -= l[1]))
                : "right" === a
                ? ((r.top += l[0]), (r.left += l[1]))
                : "top" === a
                ? ((r.left += l[0]), (r.top -= l[1]))
                : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
              (t.popper = r),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || R(t.instance.popper);
            t.instance.reference === n && (n = R(n));
            var i = ft("transform"),
              o = t.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[i];
            (o.top = ""), (o.left = ""), (o[i] = "");
            var l = et(
              t.instance.popper,
              t.instance.reference,
              e.padding,
              n,
              t.positionFixed
            );
            (o.top = r), (o.left = s), (o[i] = a), (e.boundaries = l);
            var c = e.priority,
              u = t.offsets.popper,
              h = {
                primary: function (t) {
                  var n = u[t];
                  return (
                    u[t] < l[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(u[t], l[t])),
                    z({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = "right" === t ? "left" : "top",
                    i = u[n];
                  return (
                    u[t] > l[t] &&
                      !e.escapeWithReference &&
                      (i = Math.min(
                        u[n],
                        l[t] - ("right" === t ? u.width : u.height)
                      )),
                    z({}, n, i)
                  );
                },
              };
            return (
              c.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                u = X({}, u, h[e](t));
              }),
              (t.offsets.popper = u),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
              n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!wt(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var o = t.placement.split("-")[0],
              r = t.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              c = l ? "height" : "width",
              u = l ? "Top" : "Left",
              h = u.toLowerCase(),
              f = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = rt(i)[c];
            a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)),
              a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]),
              (t.offsets.popper = K(t.offsets.popper));
            var m = a[h] + a[c] / 2 - p / 2,
              g = A(t.instance.popper),
              v = parseFloat(g["margin" + u], 10),
              _ = parseFloat(g["border" + u + "Width"], 10),
              b = m - t.offsets.popper[h] - v - _;
            return (
              (b = Math.max(Math.min(s[c] - p, b), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (z((n = {}), h, Math.round(b)), z(n, f, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (ht(t.instance.modifiers, "inner")) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = et(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement,
                t.positionFixed
              ),
              i = t.placement.split("-")[0],
              o = st(i),
              r = t.placement.split("-")[1] || "",
              s = [];
            switch (e.behavior) {
              case St:
                s = [i, o];
                break;
              case Dt:
                s = Ct(i);
                break;
              case kt:
                s = Ct(i, !0);
                break;
              default:
                s = e.behavior;
            }
            return (
              s.forEach(function (a, l) {
                if (i !== a || s.length === l + 1) return t;
                (i = t.placement.split("-")[0]), (o = st(i));
                var c = t.offsets.popper,
                  u = t.offsets.reference,
                  h = Math.floor,
                  f =
                    ("left" === i && h(c.right) > h(u.left)) ||
                    ("right" === i && h(c.left) < h(u.right)) ||
                    ("top" === i && h(c.bottom) > h(u.top)) ||
                    ("bottom" === i && h(c.top) < h(u.bottom)),
                  d = h(c.left) < h(n.left),
                  p = h(c.right) > h(n.right),
                  m = h(c.top) < h(n.top),
                  g = h(c.bottom) > h(n.bottom),
                  v =
                    ("left" === i && d) ||
                    ("right" === i && p) ||
                    ("top" === i && m) ||
                    ("bottom" === i && g),
                  _ = -1 !== ["top", "bottom"].indexOf(i),
                  b =
                    !!e.flipVariations &&
                    ((_ && "start" === r && d) ||
                      (_ && "end" === r && p) ||
                      (!_ && "start" === r && m) ||
                      (!_ && "end" === r && g)),
                  y =
                    !!e.flipVariationsByContent &&
                    ((_ && "start" === r && p) ||
                      (_ && "end" === r && d) ||
                      (!_ && "start" === r && g) ||
                      (!_ && "end" === r && m)),
                  w = b || y;
                (f || v || w) &&
                  ((t.flipped = !0),
                  (f || v) && (i = s[l + 1]),
                  w &&
                    (r = (function (t) {
                      return "end" === t ? "start" : "start" === t ? "end" : t;
                    })(r)),
                  (t.placement = i + (r ? "-" + r : "")),
                  (t.offsets.popper = X(
                    {},
                    t.offsets.popper,
                    at(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = ct(t.instance.modifiers, t, "flip")));
              }),
              t
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (o[s ? "left" : "top"] =
                r[n] - (a ? o[s ? "width" : "height"] : 0)),
              (t.placement = st(e)),
              (t.offsets.popper = K(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!wt(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = lt(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = lt(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s = void 0 !== r ? r : e.gpuAcceleration,
              a = R(t.instance.popper),
              l = G(a),
              c = { position: o.position },
              u = (function (t, e) {
                var n = t.offsets,
                  i = n.popper,
                  o = n.reference,
                  r = Math.round,
                  s = Math.floor,
                  a = function (t) {
                    return t;
                  },
                  l = r(o.width),
                  c = r(i.width),
                  u = -1 !== ["left", "right"].indexOf(t.placement),
                  h = -1 !== t.placement.indexOf("-"),
                  f = e ? (u || h || l % 2 == c % 2 ? r : s) : a,
                  d = e ? r : a;
                return {
                  left: f(
                    l % 2 == 1 && c % 2 == 1 && !h && e ? i.left - 1 : i.left
                  ),
                  top: d(i.top),
                  bottom: d(i.bottom),
                  right: f(i.right),
                };
              })(t, window.devicePixelRatio < 2 || !yt),
              h = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              d = ft("transform"),
              p = void 0,
              m = void 0;
            if (
              ((m =
                "bottom" === h
                  ? "HTML" === a.nodeName
                    ? -a.clientHeight + u.bottom
                    : -l.height + u.bottom
                  : u.top),
              (p =
                "right" === f
                  ? "HTML" === a.nodeName
                    ? -a.clientWidth + u.right
                    : -l.width + u.right
                  : u.left),
              s && d)
            )
              (c[d] = "translate3d(" + p + "px, " + m + "px, 0)"),
                (c[h] = 0),
                (c[f] = 0),
                (c.willChange = "transform");
            else {
              var g = "bottom" === h ? -1 : 1,
                v = "right" === f ? -1 : 1;
              (c[h] = m * g), (c[f] = p * v), (c.willChange = h + ", " + f);
            }
            var _ = { "x-placement": t.placement };
            return (
              (t.attributes = X({}, _, t.attributes)),
              (t.styles = X({}, c, t.styles)),
              (t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              bt(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                bt(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = ot(o, e, t, n.positionFixed),
              s = it(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", s),
              bt(e, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    At = (function () {
      function t(e, n) {
        var i = this,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        V(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = N(this.update.bind(this))),
          (this.options = X({}, t.Defaults, o)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(X({}, t.Defaults.modifiers, o.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = X(
                {},
                t.Defaults.modifiers[e] || {},
                o.modifiers ? o.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return X({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              O(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), (this.state.eventsEnabled = r);
      }
      return (
        Y(t, [
          {
            key: "update",
            value: function () {
              return ut.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return dt.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return gt.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return vt.call(this);
            },
          },
        ]),
        t
      );
    })();
  (At.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (At.placements = Et),
    (At.Defaults = Ot);
  var It = "dropdown",
    xt = e.fn[It],
    jt = new RegExp("38|40|27"),
    Lt = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    Pt = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    Ft = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          if (
            !this._element.disabled &&
            !e(this._element).hasClass("disabled")
          ) {
            var n = e(this._menu).hasClass("show");
            t._clearMenus(), n || this.show(!0);
          }
        }),
        (n.show = function (n) {
          if (
            (void 0 === n && (n = !1),
            !(
              this._element.disabled ||
              e(this._element).hasClass("disabled") ||
              e(this._menu).hasClass("show")
            ))
          ) {
            var i = { relatedTarget: this._element },
              o = e.Event("show.bs.dropdown", i),
              r = t._getParentFromElement(this._element);
            if ((e(r).trigger(o), !o.isDefaultPrevented())) {
              if (!this._inNavbar && n) {
                if ("undefined" == typeof At)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var s = this._element;
                "parent" === this._config.reference
                  ? (s = r)
                  : l.isElement(this._config.reference) &&
                    ((s = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (s = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    e(r).addClass("position-static"),
                  (this._popper = new At(
                    s,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === e(r).closest(".navbar-nav").length &&
                e(document.body).children().on("mouseover", null, e.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                e(this._menu).toggleClass("show"),
                e(r)
                  .toggleClass("show")
                  .trigger(e.Event("shown.bs.dropdown", i));
            }
          }
        }),
        (n.hide = function () {
          if (
            !this._element.disabled &&
            !e(this._element).hasClass("disabled") &&
            e(this._menu).hasClass("show")
          ) {
            var n = { relatedTarget: this._element },
              i = e.Event("hide.bs.dropdown", n),
              o = t._getParentFromElement(this._element);
            e(o).trigger(i),
              i.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                e(this._menu).toggleClass("show"),
                e(o)
                  .toggleClass("show")
                  .trigger(e.Event("hidden.bs.dropdown", n)));
          }
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.dropdown"),
            e(this._element).off(".bs.dropdown"),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (n.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (n._addEventListeners = function () {
          var t = this;
          e(this._element).on("click.bs.dropdown", function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (n._getConfig = function (t) {
          return (
            (t = s(
              s(s({}, this.constructor.Default), e(this._element).data()),
              t
            )),
            l.typeCheckConfig(It, t, this.constructor.DefaultType),
            t
          );
        }),
        (n._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(".dropdown-menu"));
          }
          return this._menu;
        }),
        (n._getPlacement = function () {
          var t = e(this._element.parentNode),
            n = "bottom-start";
          return (
            t.hasClass("dropup")
              ? (n = e(this._menu).hasClass("dropdown-menu-right")
                  ? "top-end"
                  : "top-start")
              : t.hasClass("dropright")
              ? (n = "right-start")
              : t.hasClass("dropleft")
              ? (n = "left-start")
              : e(this._menu).hasClass("dropdown-menu-right") &&
                (n = "bottom-end"),
            n
          );
        }),
        (n._detectNavbar = function () {
          return e(this._element).closest(".navbar").length > 0;
        }),
        (n._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = s(
                      s({}, e.offsets),
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (n._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            s(s({}, t), this._config.popperConfig)
          );
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.dropdown");
            if (
              (i ||
                ((i = new t(this, "object" == typeof n ? n : null)),
                e(this).data("bs.dropdown", i)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        (t._clearMenus = function (n) {
          if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
            for (
              var i = [].slice.call(
                  document.querySelectorAll('[data-toggle="dropdown"]')
                ),
                o = 0,
                r = i.length;
              o < r;
              o++
            ) {
              var s = t._getParentFromElement(i[o]),
                a = e(i[o]).data("bs.dropdown"),
                l = { relatedTarget: i[o] };
              if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                var c = a._menu;
                if (
                  e(s).hasClass("show") &&
                  !(
                    n &&
                    (("click" === n.type &&
                      /input|textarea/i.test(n.target.tagName)) ||
                      ("keyup" === n.type && 9 === n.which)) &&
                    e.contains(s, n.target)
                  )
                ) {
                  var u = e.Event("hide.bs.dropdown", l);
                  e(s).trigger(u),
                    u.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        e(document.body)
                          .children()
                          .off("mouseover", null, e.noop),
                      i[o].setAttribute("aria-expanded", "false"),
                      a._popper && a._popper.destroy(),
                      e(c).removeClass("show"),
                      e(s)
                        .removeClass("show")
                        .trigger(e.Event("hidden.bs.dropdown", l)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = l.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (n) {
          if (
            !(/input|textarea/i.test(n.target.tagName)
              ? 32 === n.which ||
                (27 !== n.which &&
                  ((40 !== n.which && 38 !== n.which) ||
                    e(n.target).closest(".dropdown-menu").length))
              : !jt.test(n.which)) &&
            !this.disabled &&
            !e(this).hasClass("disabled")
          ) {
            var i = t._getParentFromElement(this),
              o = e(i).hasClass("show");
            if (o || 27 !== n.which) {
              if (
                (n.preventDefault(),
                n.stopPropagation(),
                !o || (o && (27 === n.which || 32 === n.which)))
              )
                return (
                  27 === n.which &&
                    e(i.querySelector('[data-toggle="dropdown"]')).trigger(
                      "focus"
                    ),
                  void e(this).trigger("click")
                );
              var r = [].slice
                .call(
                  i.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                )
                .filter(function (t) {
                  return e(t).is(":visible");
                });
              if (0 !== r.length) {
                var s = r.indexOf(n.target);
                38 === n.which && s > 0 && s--,
                  40 === n.which && s < r.length - 1 && s++,
                  s < 0 && (s = 0),
                  r[s].focus();
              }
            }
          }
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return Lt;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Pt;
            },
          },
        ]),
        t
      );
    })();
  e(document)
    .on(
      "keydown.bs.dropdown.data-api",
      '[data-toggle="dropdown"]',
      Ft._dataApiKeydownHandler
    )
    .on(
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      Ft._dataApiKeydownHandler
    )
    .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ft._clearMenus)
    .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        Ft._jQueryInterface.call(e(this), "toggle");
    })
    .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }),
    (e.fn[It] = Ft._jQueryInterface),
    (e.fn[It].Constructor = Ft),
    (e.fn[It].noConflict = function () {
      return (e.fn[It] = xt), Ft._jQueryInterface;
    });
  var Rt = e.fn.modal,
    Mt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    Bt = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    qt = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(".modal-dialog")),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var n = t.prototype;
      return (
        (n.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (n.show = function (t) {
          var n = this;
          if (!this._isShown && !this._isTransitioning) {
            e(this._element).hasClass("fade") && (this._isTransitioning = !0);
            var i = e.Event("show.bs.modal", { relatedTarget: t });
            e(this._element).trigger(i),
              this._isShown ||
                i.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(this._element).on(
                  "click.dismiss.bs.modal",
                  '[data-dismiss="modal"]',
                  function (t) {
                    return n.hide(t);
                  }
                ),
                e(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                  e(n._element).one("mouseup.dismiss.bs.modal", function (t) {
                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return n._showElement(t);
                }));
          }
        }),
        (n.hide = function (t) {
          var n = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var i = e.Event("hide.bs.modal");
            if (
              (e(this._element).trigger(i),
              this._isShown && !i.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var o = e(this._element).hasClass("fade");
              if (
                (o && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(document).off("focusin.bs.modal"),
                e(this._element).removeClass("show"),
                e(this._element).off("click.dismiss.bs.modal"),
                e(this._dialog).off("mousedown.dismiss.bs.modal"),
                o)
              ) {
                var r = l.getTransitionDurationFromElement(this._element);
                e(this._element)
                  .one(l.TRANSITION_END, function (t) {
                    return n._hideModal(t);
                  })
                  .emulateTransitionEnd(r);
              } else this._hideModal();
            }
          }
        }),
        (n.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return e(t).off(".bs.modal");
          }),
            e(document).off("focusin.bs.modal"),
            e.removeData(this._element, "bs.modal"),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (n.handleUpdate = function () {
          this._adjustDialog();
        }),
        (n._getConfig = function (t) {
          return (t = s(s({}, Mt), t)), l.typeCheckConfig("modal", t, Bt), t;
        }),
        (n._triggerBackdropTransition = function () {
          var t = this;
          if ("static" === this._config.backdrop) {
            var n = e.Event("hidePrevented.bs.modal");
            if ((e(this._element).trigger(n), n.defaultPrevented)) return;
            this._element.classList.add("modal-static");
            var i = l.getTransitionDurationFromElement(this._element);
            e(this._element)
              .one(l.TRANSITION_END, function () {
                t._element.classList.remove("modal-static");
              })
              .emulateTransitionEnd(i),
              this._element.focus();
          } else this.hide();
        }),
        (n._showElement = function (t) {
          var n = this,
            i = e(this._element).hasClass("fade"),
            o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            e(this._dialog).hasClass("modal-dialog-scrollable") && o
              ? (o.scrollTop = 0)
              : (this._element.scrollTop = 0),
            i && l.reflow(this._element),
            e(this._element).addClass("show"),
            this._config.focus && this._enforceFocus();
          var r = e.Event("shown.bs.modal", { relatedTarget: t }),
            s = function () {
              n._config.focus && n._element.focus(),
                (n._isTransitioning = !1),
                e(n._element).trigger(r);
            };
          if (i) {
            var a = l.getTransitionDurationFromElement(this._dialog);
            e(this._dialog).one(l.TRANSITION_END, s).emulateTransitionEnd(a);
          } else s();
        }),
        (n._enforceFocus = function () {
          var t = this;
          e(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", function (n) {
              document !== n.target &&
                t._element !== n.target &&
                0 === e(t._element).has(n.target).length &&
                t._element.focus();
            });
        }),
        (n._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? e(this._element).on("keydown.dismiss.bs.modal", function (e) {
                t._config.keyboard && 27 === e.which
                  ? (e.preventDefault(), t.hide())
                  : t._config.keyboard ||
                    27 !== e.which ||
                    t._triggerBackdropTransition();
              })
            : this._isShown || e(this._element).off("keydown.dismiss.bs.modal");
        }),
        (n._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? e(window).on("resize.bs.modal", function (e) {
                return t.handleUpdate(e);
              })
            : e(window).off("resize.bs.modal");
        }),
        (n._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              e(document.body).removeClass("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                e(t._element).trigger("hidden.bs.modal");
            });
        }),
        (n._removeBackdrop = function () {
          this._backdrop &&
            (e(this._backdrop).remove(), (this._backdrop = null));
        }),
        (n._showBackdrop = function (t) {
          var n = this,
            i = e(this._element).hasClass("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              i && this._backdrop.classList.add(i),
              e(this._backdrop).appendTo(document.body),
              e(this._element).on("click.dismiss.bs.modal", function (t) {
                n._ignoreBackdropClick
                  ? (n._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    n._triggerBackdropTransition();
              }),
              i && l.reflow(this._backdrop),
              e(this._backdrop).addClass("show"),
              !t)
            )
              return;
            if (!i) return void t();
            var o = l.getTransitionDurationFromElement(this._backdrop);
            e(this._backdrop).one(l.TRANSITION_END, t).emulateTransitionEnd(o);
          } else if (!this._isShown && this._backdrop) {
            e(this._backdrop).removeClass("show");
            var r = function () {
              n._removeBackdrop(), t && t();
            };
            if (e(this._element).hasClass("fade")) {
              var s = l.getTransitionDurationFromElement(this._backdrop);
              e(this._backdrop)
                .one(l.TRANSITION_END, r)
                .emulateTransitionEnd(s);
            } else r();
          } else t && t();
        }),
        (n._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (n._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (n._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (n._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var n = [].slice.call(
                document.querySelectorAll(
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                )
              ),
              i = [].slice.call(document.querySelectorAll(".sticky-top"));
            e(n).each(function (n, i) {
              var o = i.style.paddingRight,
                r = e(i).css("padding-right");
              e(i)
                .data("padding-right", o)
                .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
            }),
              e(i).each(function (n, i) {
                var o = i.style.marginRight,
                  r = e(i).css("margin-right");
                e(i)
                  .data("margin-right", o)
                  .css(
                    "margin-right",
                    parseFloat(r) - t._scrollbarWidth + "px"
                  );
              });
            var o = document.body.style.paddingRight,
              r = e(document.body).css("padding-right");
            e(document.body)
              .data("padding-right", o)
              .css(
                "padding-right",
                parseFloat(r) + this._scrollbarWidth + "px"
              );
          }
          e(document.body).addClass("modal-open");
        }),
        (n._resetScrollbar = function () {
          var t = [].slice.call(
            document.querySelectorAll(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            )
          );
          e(t).each(function (t, n) {
            var i = e(n).data("padding-right");
            e(n).removeData("padding-right"), (n.style.paddingRight = i || "");
          });
          var n = [].slice.call(document.querySelectorAll(".sticky-top"));
          e(n).each(function (t, n) {
            var i = e(n).data("margin-right");
            "undefined" != typeof i &&
              e(n).css("margin-right", i).removeData("margin-right");
          });
          var i = e(document.body).data("padding-right");
          e(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = i || "");
        }),
        (n._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (n, i) {
          return this.each(function () {
            var o = e(this).data("bs.modal"),
              r = s(
                s(s({}, Mt), e(this).data()),
                "object" == typeof n && n ? n : {}
              );
            if (
              (o || ((o = new t(this, r)), e(this).data("bs.modal", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n](i);
            } else r.show && o.show(i);
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return Mt;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.modal.data-api",
    '[data-toggle="modal"]',
    function (t) {
      var n,
        i = this,
        o = l.getSelectorFromElement(this);
      o && (n = document.querySelector(o));
      var r = e(n).data("bs.modal")
        ? "toggle"
        : s(s({}, e(n).data()), e(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var a = e(n).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() ||
          a.one("hidden.bs.modal", function () {
            e(i).is(":visible") && i.focus();
          });
      });
      qt._jQueryInterface.call(e(n), r, this);
    }
  ),
    (e.fn.modal = qt._jQueryInterface),
    (e.fn.modal.Constructor = qt),
    (e.fn.modal.noConflict = function () {
      return (e.fn.modal = Rt), qt._jQueryInterface;
    });
  var Ht = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    Qt = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    Ut =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function Vt(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, "text/html"),
        o = Object.keys(e),
        r = [].slice.call(i.body.querySelectorAll("*")),
        s = function (t, n) {
          var i = r[t],
            s = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), "continue";
          var a = [].slice.call(i.attributes),
            l = [].concat(e["*"] || [], e[s] || []);
          a.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === Ht.indexOf(n) ||
                  Boolean(t.nodeValue.match(Wt) || t.nodeValue.match(Ut))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, l) || i.removeAttribute(t.nodeName);
          });
        },
        a = 0,
        l = r.length;
      a < l;
      a++
    )
      s(a);
    return i.body.innerHTML;
  }
  var Yt = "tooltip",
    zt = e.fn[Yt],
    Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    Kt = ["sanitize", "whiteList", "sanitizeFn"],
    Gt = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    $t = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    Jt = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Qt,
      popperConfig: null,
    },
    Zt = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    te = (function () {
      function t(t, e) {
        if ("undefined" == typeof At)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var n = t.prototype;
      return (
        (n.enable = function () {
          this._isEnabled = !0;
        }),
        (n.disable = function () {
          this._isEnabled = !1;
        }),
        (n.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (n.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var n = this.constructor.DATA_KEY,
                i = e(t.currentTarget).data(n);
              i ||
                ((i = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                e(t.currentTarget).data(n, i)),
                (i._activeTrigger.click = !i._activeTrigger.click),
                i._isWithActiveTrigger()
                  ? i._enter(null, i)
                  : i._leave(null, i);
            } else {
              if (e(this.getTipElement()).hasClass("show"))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (n.dispose = function () {
          clearTimeout(this._timeout),
            e.removeData(this.element, this.constructor.DATA_KEY),
            e(this.element).off(this.constructor.EVENT_KEY),
            e(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && e(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (n.show = function () {
          var t = this;
          if ("none" === e(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var n = e.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            e(this.element).trigger(n);
            var i = l.findShadowRoot(this.element),
              o = e.contains(
                null !== i ? i : this.element.ownerDocument.documentElement,
                this.element
              );
            if (n.isDefaultPrevented() || !o) return;
            var r = this.getTipElement(),
              s = l.getUID(this.constructor.NAME);
            r.setAttribute("id", s),
              this.element.setAttribute("aria-describedby", s),
              this.setContent(),
              this.config.animation && e(r).addClass("fade");
            var a =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, r, this.element)
                  : this.config.placement,
              c = this._getAttachment(a);
            this.addAttachmentClass(c);
            var u = this._getContainer();
            e(r).data(this.constructor.DATA_KEY, this),
              e.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || e(r).appendTo(u),
              e(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new At(
                this.element,
                r,
                this._getPopperConfig(c)
              )),
              e(r).addClass("show"),
              "ontouchstart" in document.documentElement &&
                e(document.body).children().on("mouseover", null, e.noop);
            var h = function () {
              t.config.animation && t._fixTransition();
              var n = t._hoverState;
              (t._hoverState = null),
                e(t.element).trigger(t.constructor.Event.SHOWN),
                "out" === n && t._leave(null, t);
            };
            if (e(this.tip).hasClass("fade")) {
              var f = l.getTransitionDurationFromElement(this.tip);
              e(this.tip).one(l.TRANSITION_END, h).emulateTransitionEnd(f);
            } else h();
          }
        }),
        (n.hide = function (t) {
          var n = this,
            i = this.getTipElement(),
            o = e.Event(this.constructor.Event.HIDE),
            r = function () {
              "show" !== n._hoverState &&
                i.parentNode &&
                i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                e(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t();
            };
          if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (e(i).removeClass("show"),
              "ontouchstart" in document.documentElement &&
                e(document.body).children().off("mouseover", null, e.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              e(this.tip).hasClass("fade"))
            ) {
              var s = l.getTransitionDurationFromElement(i);
              e(i).one(l.TRANSITION_END, r).emulateTransitionEnd(s);
            } else r();
            this._hoverState = "";
          }
        }),
        (n.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (n.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (n.addAttachmentClass = function (t) {
          e(this.getTipElement()).addClass("bs-tooltip-" + t);
        }),
        (n.getTipElement = function () {
          return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
        }),
        (n.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            e(t.querySelectorAll(".tooltip-inner")),
            this.getTitle()
          ),
            e(t).removeClass("fade show");
        }),
        (n.setElementContent = function (t, n) {
          "object" != typeof n || (!n.nodeType && !n.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (n = Vt(n, this.config.whiteList, this.config.sanitizeFn)),
                t.html(n))
              : t.text(n)
            : this.config.html
            ? e(n).parent().is(t) || t.empty().append(n)
            : t.text(e(n).text());
        }),
        (n.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (n._getPopperConfig = function (t) {
          var e = this;
          return s(
            s(
              {},
              {
                placement: t,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: ".arrow" },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t);
                },
              }
            ),
            this.config.popperConfig
          );
        }),
        (n._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = s(
                      s({}, e.offsets),
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (n._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : l.isElement(this.config.container)
            ? e(this.config.container)
            : e(document).find(this.config.container);
        }),
        (n._getAttachment = function (t) {
          return $t[t.toUpperCase()];
        }),
        (n._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (n) {
            if ("click" === n)
              e(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ("manual" !== n) {
              var i =
                  "hover" === n
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                o =
                  "hover" === n
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              e(t.element)
                .on(i, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(o, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            e(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = s(
                  s({}, this.config),
                  {},
                  { trigger: "manual", selector: "" }
                ))
              : this._fixTitle();
        }),
        (n._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (n._enter = function (t, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(i)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            e(t.currentTarget).data(i, n)),
            t &&
              (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            e(n.getTipElement()).hasClass("show") || "show" === n._hoverState
              ? (n._hoverState = "show")
              : (clearTimeout(n._timeout),
                (n._hoverState = "show"),
                n.config.delay && n.config.delay.show
                  ? (n._timeout = setTimeout(function () {
                      "show" === n._hoverState && n.show();
                    }, n.config.delay.show))
                  : n.show());
        }),
        (n._leave = function (t, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(i)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            e(t.currentTarget).data(i, n)),
            t &&
              (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
                !1),
            n._isWithActiveTrigger() ||
              (clearTimeout(n._timeout),
              (n._hoverState = "out"),
              n.config.delay && n.config.delay.hide
                ? (n._timeout = setTimeout(function () {
                    "out" === n._hoverState && n.hide();
                  }, n.config.delay.hide))
                : n.hide());
        }),
        (n._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (n._getConfig = function (t) {
          var n = e(this.element).data();
          return (
            Object.keys(n).forEach(function (t) {
              -1 !== Kt.indexOf(t) && delete n[t];
            }),
            "number" ==
              typeof (t = s(
                s(s({}, this.constructor.Default), n),
                "object" == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            l.typeCheckConfig(Yt, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = Vt(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (n._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (n._cleanTipClass = function () {
          var t = e(this.getTipElement()),
            n = t.attr("class").match(Xt);
          null !== n && n.length && t.removeClass(n.join(""));
        }),
        (n._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (n._fixTransition = function () {
          var t = this.getTipElement(),
            n = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (e(t).removeClass("fade"),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = n));
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.tooltip"),
              o = "object" == typeof n && n;
            if (
              (i || !/dispose|hide/.test(n)) &&
              (i || ((i = new t(this, o)), e(this).data("bs.tooltip", i)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return Jt;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Yt;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            },
          },
          {
            key: "Event",
            get: function () {
              return Zt;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Gt;
            },
          },
        ]),
        t
      );
    })();
  (e.fn[Yt] = te._jQueryInterface),
    (e.fn[Yt].Constructor = te),
    (e.fn[Yt].noConflict = function () {
      return (e.fn[Yt] = zt), te._jQueryInterface;
    });
  var ee = "popover",
    ne = e.fn[ee],
    ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    oe = s(
      s({}, te.Default),
      {},
      {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }
    ),
    re = s(s({}, te.DefaultType), {}, { content: "(string|element|function)" }),
    se = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    ae = (function (t) {
      var n, o;
      function r() {
        return t.apply(this, arguments) || this;
      }
      (o = t),
        ((n = r).prototype = Object.create(o.prototype)),
        (n.prototype.constructor = n),
        (n.__proto__ = o);
      var s = r.prototype;
      return (
        (s.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (s.addAttachmentClass = function (t) {
          e(this.getTipElement()).addClass("bs-popover-" + t);
        }),
        (s.getTipElement = function () {
          return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
        }),
        (s.setContent = function () {
          var t = e(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var n = this._getContent();
          "function" == typeof n && (n = n.call(this.element)),
            this.setElementContent(t.find(".popover-body"), n),
            t.removeClass("fade show");
        }),
        (s._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (s._cleanTipClass = function () {
          var t = e(this.getTipElement()),
            n = t.attr("class").match(ie);
          null !== n && n.length > 0 && t.removeClass(n.join(""));
        }),
        (r._jQueryInterface = function (t) {
          return this.each(function () {
            var n = e(this).data("bs.popover"),
              i = "object" == typeof t ? t : null;
            if (
              (n || !/dispose|hide/.test(t)) &&
              (n || ((n = new r(this, i)), e(this).data("bs.popover", n)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t]();
            }
          });
        }),
        i(r, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return oe;
            },
          },
          {
            key: "NAME",
            get: function () {
              return ee;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover";
            },
          },
          {
            key: "Event",
            get: function () {
              return se;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return re;
            },
          },
        ]),
        r
      );
    })(te);
  (e.fn[ee] = ae._jQueryInterface),
    (e.fn[ee].Constructor = ae),
    (e.fn[ee].noConflict = function () {
      return (e.fn[ee] = ne), ae._jQueryInterface;
    });
  var le = "scrollspy",
    ce = e.fn[le],
    ue = { offset: 10, method: "auto", target: "" },
    he = { offset: "number", method: "string", target: "(string|element)" },
    fe = (function () {
      function t(t, n) {
        var i = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(n)),
          (this._selector =
            this._config.target +
            " .nav-link," +
            this._config.target +
            " .list-group-item," +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          e(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
            return i._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var n = t.prototype;
      return (
        (n.refresh = function () {
          var t = this,
            n =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position",
            i = "auto" === this._config.method ? n : this._config.method,
            o = "position" === i ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var n,
                  r = l.getSelectorFromElement(t);
                if ((r && (n = document.querySelector(r)), n)) {
                  var s = n.getBoundingClientRect();
                  if (s.width || s.height) return [e(n)[i]().top + o, r];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.scrollspy"),
            e(this._scrollElement).off(".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (n._getConfig = function (t) {
          if (
            "string" !=
              typeof (t = s(s({}, ue), "object" == typeof t && t ? t : {}))
                .target &&
            l.isElement(t.target)
          ) {
            var n = e(t.target).attr("id");
            n || ((n = l.getUID(le)), e(t.target).attr("id", n)),
              (t.target = "#" + n);
          }
          return l.typeCheckConfig(le, t, he), t;
        }),
        (n._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (n._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (n._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (n._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (n._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var n = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            i = e([].slice.call(document.querySelectorAll(n.join(","))));
          i.hasClass("dropdown-item")
            ? (i
                .closest(".dropdown")
                .find(".dropdown-toggle")
                .addClass("active"),
              i.addClass("active"))
            : (i.addClass("active"),
              i
                .parents(".nav, .list-group")
                .prev(".nav-link, .list-group-item")
                .addClass("active"),
              i
                .parents(".nav, .list-group")
                .prev(".nav-item")
                .children(".nav-link")
                .addClass("active")),
            e(this._scrollElement).trigger("activate.bs.scrollspy", {
              relatedTarget: t,
            });
        }),
        (n._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains("active");
            })
            .forEach(function (t) {
              return t.classList.remove("active");
            });
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.scrollspy");
            if (
              (i ||
                ((i = new t(this, "object" == typeof n && n)),
                e(this).data("bs.scrollspy", i)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return ue;
            },
          },
        ]),
        t
      );
    })();
  e(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        n = t.length;
      n--;

    ) {
      var i = e(t[n]);
      fe._jQueryInterface.call(i, i.data());
    }
  }),
    (e.fn[le] = fe._jQueryInterface),
    (e.fn[le].Constructor = fe),
    (e.fn[le].noConflict = function () {
      return (e.fn[le] = ce), fe._jQueryInterface;
    });
  var de = e.fn.tab,
    pe = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                e(this._element).hasClass("active")) ||
              e(this._element).hasClass("disabled")
            )
          ) {
            var n,
              i,
              o = e(this._element).closest(".nav, .list-group")[0],
              r = l.getSelectorFromElement(this._element);
            if (o) {
              var s =
                "UL" === o.nodeName || "OL" === o.nodeName
                  ? "> li > .active"
                  : ".active";
              i = (i = e.makeArray(e(o).find(s)))[i.length - 1];
            }
            var a = e.Event("hide.bs.tab", { relatedTarget: this._element }),
              c = e.Event("show.bs.tab", { relatedTarget: i });
            if (
              (i && e(i).trigger(a),
              e(this._element).trigger(c),
              !c.isDefaultPrevented() && !a.isDefaultPrevented())
            ) {
              r && (n = document.querySelector(r)),
                this._activate(this._element, o);
              var u = function () {
                var n = e.Event("hidden.bs.tab", { relatedTarget: t._element }),
                  o = e.Event("shown.bs.tab", { relatedTarget: i });
                e(i).trigger(n), e(t._element).trigger(o);
              };
              n ? this._activate(n, n.parentNode, u) : u();
            }
          }
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.tab"), (this._element = null);
        }),
        (n._activate = function (t, n, i) {
          var o = this,
            r = (
              !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                ? e(n).children(".active")
                : e(n).find("> li > .active")
            )[0],
            s = i && r && e(r).hasClass("fade"),
            a = function () {
              return o._transitionComplete(t, r, i);
            };
          if (r && s) {
            var c = l.getTransitionDurationFromElement(r);
            e(r)
              .removeClass("show")
              .one(l.TRANSITION_END, a)
              .emulateTransitionEnd(c);
          } else a();
        }),
        (n._transitionComplete = function (t, n, i) {
          if (n) {
            e(n).removeClass("active");
            var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
            o && e(o).removeClass("active"),
              "tab" === n.getAttribute("role") &&
                n.setAttribute("aria-selected", !1);
          }
          if (
            (e(t).addClass("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            l.reflow(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))
          ) {
            var r = e(t).closest(".dropdown")[0];
            if (r) {
              var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
              e(s).addClass("active");
            }
            t.setAttribute("aria-expanded", !0);
          }
          i && i();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.tab");
            if (
              (o || ((o = new t(this)), i.data("bs.tab", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n]();
            }
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.tab.data-api",
    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    function (t) {
      t.preventDefault(), pe._jQueryInterface.call(e(this), "show");
    }
  ),
    (e.fn.tab = pe._jQueryInterface),
    (e.fn.tab.Constructor = pe),
    (e.fn.tab.noConflict = function () {
      return (e.fn.tab = de), pe._jQueryInterface;
    });
  var me = e.fn.toast,
    ge = { animation: "boolean", autohide: "boolean", delay: "number" },
    ve = { animation: !0, autohide: !0, delay: 500 },
    _e = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var t = this,
            n = e.Event("show.bs.toast");
          if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
            this._config.animation && this._element.classList.add("fade");
            var i = function () {
              t._element.classList.remove("showing"),
                t._element.classList.add("show"),
                e(t._element).trigger("shown.bs.toast"),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove("hide"),
              l.reflow(this._element),
              this._element.classList.add("showing"),
              this._config.animation)
            ) {
              var o = l.getTransitionDurationFromElement(this._element);
              e(this._element).one(l.TRANSITION_END, i).emulateTransitionEnd(o);
            } else i();
          }
        }),
        (n.hide = function () {
          if (this._element.classList.contains("show")) {
            var t = e.Event("hide.bs.toast");
            e(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (n.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains("show") &&
              this._element.classList.remove("show"),
            e(this._element).off("click.dismiss.bs.toast"),
            e.removeData(this._element, "bs.toast"),
            (this._element = null),
            (this._config = null);
        }),
        (n._getConfig = function (t) {
          return (
            (t = s(
              s(s({}, ve), e(this._element).data()),
              "object" == typeof t && t ? t : {}
            )),
            l.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
          );
        }),
        (n._setListeners = function () {
          var t = this;
          e(this._element).on(
            "click.dismiss.bs.toast",
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (n._close = function () {
          var t = this,
            n = function () {
              t._element.classList.add("hide"),
                e(t._element).trigger("hidden.bs.toast");
            };
          if (
            (this._element.classList.remove("show"), this._config.animation)
          ) {
            var i = l.getTransitionDurationFromElement(this._element);
            e(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(i);
          } else n();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.toast");
            if (
              (o ||
                ((o = new t(this, "object" == typeof n && n)),
                i.data("bs.toast", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n](this);
            }
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ge;
            },
          },
          {
            key: "Default",
            get: function () {
              return ve;
            },
          },
        ]),
        t
      );
    })();
  (e.fn.toast = _e._jQueryInterface),
    (e.fn.toast.Constructor = _e),
    (e.fn.toast.noConflict = function () {
      return (e.fn.toast = me), _e._jQueryInterface;
    }),
    (t.Alert = h),
    (t.Button = d),
    (t.Carousel = y),
    (t.Collapse = S),
    (t.Dropdown = Ft),
    (t.Modal = qt),
    (t.Popover = ae),
    (t.Scrollspy = fe),
    (t.Tab = pe),
    (t.Toast = _e),
    (t.Tooltip = te),
    (t.Util = l),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.bundle.min.js.map
/**
 * SimpleBar.js - v5.1.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).SimpleBar = e());
})(this, function () {
  "use strict";
  var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function e(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var r,
    n,
    i,
    o = "object",
    s = function (t) {
      return t && t.Math == Math && t;
    },
    a =
      s(typeof globalThis == o && globalThis) ||
      s(typeof window == o && window) ||
      s(typeof self == o && self) ||
      s(typeof t == o && t) ||
      Function("return this")(),
    c = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    l = !c(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
    u = {}.propertyIsEnumerable,
    f = Object.getOwnPropertyDescriptor,
    h = {
      f:
        f && !u.call({ 1: 2 }, 1)
          ? function (t) {
              var e = f(this, t);
              return !!e && e.enumerable;
            }
          : u,
    },
    d = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    },
    p = {}.toString,
    v = function (t) {
      return p.call(t).slice(8, -1);
    },
    g = "".split,
    y = c(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == v(t) ? g.call(t, "") : Object(t);
        }
      : Object,
    b = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    m = function (t) {
      return y(b(t));
    },
    x = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    E = function (t, e) {
      if (!x(t)) return t;
      var r, n;
      if (e && "function" == typeof (r = t.toString) && !x((n = r.call(t))))
        return n;
      if ("function" == typeof (r = t.valueOf) && !x((n = r.call(t)))) return n;
      if (!e && "function" == typeof (r = t.toString) && !x((n = r.call(t))))
        return n;
      throw TypeError("Can't convert object to primitive value");
    },
    w = {}.hasOwnProperty,
    O = function (t, e) {
      return w.call(t, e);
    },
    _ = a.document,
    S = x(_) && x(_.createElement),
    A = function (t) {
      return S ? _.createElement(t) : {};
    },
    k =
      !l &&
      !c(function () {
        return (
          7 !=
          Object.defineProperty(A("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    L = Object.getOwnPropertyDescriptor,
    M = {
      f: l
        ? L
        : function (t, e) {
            if (((t = m(t)), (e = E(e, !0)), k))
              try {
                return L(t, e);
              } catch (t) {}
            if (O(t, e)) return d(!h.f.call(t, e), t[e]);
          },
    },
    T = function (t) {
      if (!x(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    j = Object.defineProperty,
    R = {
      f: l
        ? j
        : function (t, e, r) {
            if ((T(t), (e = E(e, !0)), T(r), k))
              try {
                return j(t, e, r);
              } catch (t) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported");
            return "value" in r && (t[e] = r.value), t;
          },
    },
    W = l
      ? function (t, e, r) {
          return R.f(t, e, d(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        },
    z = function (t, e) {
      try {
        W(a, t, e);
      } catch (r) {
        a[t] = e;
      }
      return e;
    },
    C = e(function (t) {
      var e = a["__core-js_shared__"] || z("__core-js_shared__", {});
      (t.exports = function (t, r) {
        return e[t] || (e[t] = void 0 !== r ? r : {});
      })("versions", []).push({
        version: "3.2.1",
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    }),
    N = C("native-function-to-string", Function.toString),
    I = a.WeakMap,
    D = "function" == typeof I && /native code/.test(N.call(I)),
    P = 0,
    V = Math.random(),
    F = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++P + V).toString(36)
      );
    },
    B = C("keys"),
    H = function (t) {
      return B[t] || (B[t] = F(t));
    },
    q = {},
    $ = a.WeakMap;
  if (D) {
    var X = new $(),
      Y = X.get,
      G = X.has,
      U = X.set;
    (r = function (t, e) {
      return U.call(X, t, e), e;
    }),
      (n = function (t) {
        return Y.call(X, t) || {};
      }),
      (i = function (t) {
        return G.call(X, t);
      });
  } else {
    var Q = H("state");
    (q[Q] = !0),
      (r = function (t, e) {
        return W(t, Q, e), e;
      }),
      (n = function (t) {
        return O(t, Q) ? t[Q] : {};
      }),
      (i = function (t) {
        return O(t, Q);
      });
  }
  var K = {
      set: r,
      get: n,
      has: i,
      enforce: function (t) {
        return i(t) ? n(t) : r(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!x(e) || (r = n(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return r;
        };
      },
    },
    J = e(function (t) {
      var e = K.get,
        r = K.enforce,
        n = String(N).split("toString");
      C("inspectSource", function (t) {
        return N.call(t);
      }),
        (t.exports = function (t, e, i, o) {
          var s = !!o && !!o.unsafe,
            c = !!o && !!o.enumerable,
            l = !!o && !!o.noTargetGet;
          "function" == typeof i &&
            ("string" != typeof e || O(i, "name") || W(i, "name", e),
            (r(i).source = n.join("string" == typeof e ? e : ""))),
            t !== a
              ? (s ? !l && t[e] && (c = !0) : delete t[e],
                c ? (t[e] = i) : W(t, e, i))
              : c
              ? (t[e] = i)
              : z(e, i);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && e(this).source) || N.call(this);
        });
    }),
    Z = a,
    tt = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    et = function (t, e) {
      return arguments.length < 2
        ? tt(Z[t]) || tt(a[t])
        : (Z[t] && Z[t][e]) || (a[t] && a[t][e]);
    },
    rt = Math.ceil,
    nt = Math.floor,
    it = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? nt : rt)(t);
    },
    ot = Math.min,
    st = function (t) {
      return t > 0 ? ot(it(t), 9007199254740991) : 0;
    },
    at = Math.max,
    ct = Math.min,
    lt = function (t) {
      return function (e, r, n) {
        var i,
          o = m(e),
          s = st(o.length),
          a = (function (t, e) {
            var r = it(t);
            return r < 0 ? at(r + e, 0) : ct(r, e);
          })(n, s);
        if (t && r != r) {
          for (; s > a; ) if ((i = o[a++]) != i) return !0;
        } else
          for (; s > a; a++)
            if ((t || a in o) && o[a] === r) return t || a || 0;
        return !t && -1;
      };
    },
    ut = { includes: lt(!0), indexOf: lt(!1) }.indexOf,
    ft = function (t, e) {
      var r,
        n = m(t),
        i = 0,
        o = [];
      for (r in n) !O(q, r) && O(n, r) && o.push(r);
      for (; e.length > i; ) O(n, (r = e[i++])) && (~ut(o, r) || o.push(r));
      return o;
    },
    ht = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    dt = ht.concat("length", "prototype"),
    pt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return ft(t, dt);
        },
    },
    vt = { f: Object.getOwnPropertySymbols },
    gt =
      et("Reflect", "ownKeys") ||
      function (t) {
        var e = pt.f(T(t)),
          r = vt.f;
        return r ? e.concat(r(t)) : e;
      },
    yt = function (t, e) {
      for (var r = gt(e), n = R.f, i = M.f, o = 0; o < r.length; o++) {
        var s = r[o];
        O(t, s) || n(t, s, i(e, s));
      }
    },
    bt = /#|\.prototype\./,
    mt = function (t, e) {
      var r = Et[xt(t)];
      return r == Ot || (r != wt && ("function" == typeof e ? c(e) : !!e));
    },
    xt = (mt.normalize = function (t) {
      return String(t).replace(bt, ".").toLowerCase();
    }),
    Et = (mt.data = {}),
    wt = (mt.NATIVE = "N"),
    Ot = (mt.POLYFILL = "P"),
    _t = mt,
    St = M.f,
    At = function (t, e) {
      var r,
        n,
        i,
        o,
        s,
        c = t.target,
        l = t.global,
        u = t.stat;
      if ((r = l ? a : u ? a[c] || z(c, {}) : (a[c] || {}).prototype))
        for (n in e) {
          if (
            ((o = e[n]),
            (i = t.noTargetGet ? (s = St(r, n)) && s.value : r[n]),
            !_t(l ? n : c + (u ? "." : "#") + n, t.forced) && void 0 !== i)
          ) {
            if (typeof o == typeof i) continue;
            yt(o, i);
          }
          (t.sham || (i && i.sham)) && W(o, "sham", !0), J(r, n, o, t);
        }
    },
    kt = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    },
    Lt = function (t, e, r) {
      if ((kt(t), void 0 === e)) return t;
      switch (r) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, n) {
            return t.call(e, r, n);
          };
        case 3:
          return function (r, n, i) {
            return t.call(e, r, n, i);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    },
    Mt = function (t) {
      return Object(b(t));
    },
    Tt =
      Array.isArray ||
      function (t) {
        return "Array" == v(t);
      },
    jt =
      !!Object.getOwnPropertySymbols &&
      !c(function () {
        return !String(Symbol());
      }),
    Rt = a.Symbol,
    Wt = C("wks"),
    zt = function (t) {
      return Wt[t] || (Wt[t] = (jt && Rt[t]) || (jt ? Rt : F)("Symbol." + t));
    },
    Ct = zt("species"),
    Nt = function (t, e) {
      var r;
      return (
        Tt(t) &&
          ("function" != typeof (r = t.constructor) ||
          (r !== Array && !Tt(r.prototype))
            ? x(r) && null === (r = r[Ct]) && (r = void 0)
            : (r = void 0)),
        new (void 0 === r ? Array : r)(0 === e ? 0 : e)
      );
    },
    It = [].push,
    Dt = function (t) {
      var e = 1 == t,
        r = 2 == t,
        n = 3 == t,
        i = 4 == t,
        o = 6 == t,
        s = 5 == t || o;
      return function (a, c, l, u) {
        for (
          var f,
            h,
            d = Mt(a),
            p = y(d),
            v = Lt(c, l, 3),
            g = st(p.length),
            b = 0,
            m = u || Nt,
            x = e ? m(a, g) : r ? m(a, 0) : void 0;
          g > b;
          b++
        )
          if ((s || b in p) && ((h = v((f = p[b]), b, d)), t))
            if (e) x[b] = h;
            else if (h)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return f;
                case 6:
                  return b;
                case 2:
                  It.call(x, f);
              }
            else if (i) return !1;
        return o ? -1 : n || i ? i : x;
      };
    },
    Pt = {
      forEach: Dt(0),
      map: Dt(1),
      filter: Dt(2),
      some: Dt(3),
      every: Dt(4),
      find: Dt(5),
      findIndex: Dt(6),
    },
    Vt = function (t, e) {
      var r = [][t];
      return (
        !r ||
        !c(function () {
          r.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    Ft = Pt.forEach,
    Bt = Vt("forEach")
      ? function (t) {
          return Ft(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      : [].forEach;
  At({ target: "Array", proto: !0, forced: [].forEach != Bt }, { forEach: Bt });
  var Ht = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  };
  for (var qt in Ht) {
    var $t = a[qt],
      Xt = $t && $t.prototype;
    if (Xt && Xt.forEach !== Bt)
      try {
        W(Xt, "forEach", Bt);
      } catch (t) {
        Xt.forEach = Bt;
      }
  }
  var Yt = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    ),
    Gt = zt("species"),
    Ut = Pt.filter;
  At(
    {
      target: "Array",
      proto: !0,
      forced: !(function (t) {
        return !c(function () {
          var e = [];
          return (
            ((e.constructor = {})[Gt] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        });
      })("filter"),
    },
    {
      filter: function (t) {
        return Ut(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Qt =
      Object.keys ||
      function (t) {
        return ft(t, ht);
      },
    Kt = l
      ? Object.defineProperties
      : function (t, e) {
          T(t);
          for (var r, n = Qt(e), i = n.length, o = 0; i > o; )
            R.f(t, (r = n[o++]), e[r]);
          return t;
        },
    Jt = et("document", "documentElement"),
    Zt = H("IE_PROTO"),
    te = function () {},
    ee = function () {
      var t,
        e = A("iframe"),
        r = ht.length;
      for (
        e.style.display = "none",
          Jt.appendChild(e),
          e.src = String("javascript:"),
          (t = e.contentWindow.document).open(),
          t.write("<script>document.F=Object</script>"),
          t.close(),
          ee = t.F;
        r--;

      )
        delete ee.prototype[ht[r]];
      return ee();
    },
    re =
      Object.create ||
      function (t, e) {
        var r;
        return (
          null !== t
            ? ((te.prototype = T(t)),
              (r = new te()),
              (te.prototype = null),
              (r[Zt] = t))
            : (r = ee()),
          void 0 === e ? r : Kt(r, e)
        );
      };
  q[Zt] = !0;
  var ne = zt("unscopables"),
    ie = Array.prototype;
  null == ie[ne] && W(ie, ne, re(null));
  var oe,
    se,
    ae,
    ce = function (t) {
      ie[ne][t] = !0;
    },
    le = {},
    ue = !c(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    }),
    fe = H("IE_PROTO"),
    he = Object.prototype,
    de = ue
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = Mt(t)),
            O(t, fe)
              ? t[fe]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? he
              : null
          );
        },
    pe = zt("iterator"),
    ve = !1;
  [].keys &&
    ("next" in (ae = [].keys())
      ? (se = de(de(ae))) !== Object.prototype && (oe = se)
      : (ve = !0)),
    null == oe && (oe = {}),
    O(oe, pe) ||
      W(oe, pe, function () {
        return this;
      });
  var ge = { IteratorPrototype: oe, BUGGY_SAFARI_ITERATORS: ve },
    ye = R.f,
    be = zt("toStringTag"),
    me = function (t, e, r) {
      t &&
        !O((t = r ? t : t.prototype), be) &&
        ye(t, be, { configurable: !0, value: e });
    },
    xe = ge.IteratorPrototype,
    Ee = function () {
      return this;
    },
    we =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(r, []),
                (e = r instanceof Array);
            } catch (t) {}
            return function (r, n) {
              return (
                T(r),
                (function (t) {
                  if (!x(t) && null !== t)
                    throw TypeError(
                      "Can't set " + String(t) + " as a prototype"
                    );
                })(n),
                e ? t.call(r, n) : (r.__proto__ = n),
                r
              );
            };
          })()
        : void 0),
    Oe = ge.IteratorPrototype,
    _e = ge.BUGGY_SAFARI_ITERATORS,
    Se = zt("iterator"),
    Ae = function () {
      return this;
    },
    ke = function (t, e, r, n, i, o, s) {
      !(function (t, e, r) {
        var n = e + " Iterator";
        (t.prototype = re(xe, { next: d(1, r) })), me(t, n, !1), (le[n] = Ee);
      })(r, e, n);
      var a,
        c,
        l,
        u = function (t) {
          if (t === i && g) return g;
          if (!_e && t in p) return p[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        f = e + " Iterator",
        h = !1,
        p = t.prototype,
        v = p[Se] || p["@@iterator"] || (i && p[i]),
        g = (!_e && v) || u(i),
        y = ("Array" == e && p.entries) || v;
      if (
        (y &&
          ((a = de(y.call(new t()))),
          Oe !== Object.prototype &&
            a.next &&
            (de(a) !== Oe &&
              (we ? we(a, Oe) : "function" != typeof a[Se] && W(a, Se, Ae)),
            me(a, f, !0))),
        "values" == i &&
          v &&
          "values" !== v.name &&
          ((h = !0),
          (g = function () {
            return v.call(this);
          })),
        p[Se] !== g && W(p, Se, g),
        (le[e] = g),
        i)
      )
        if (
          ((c = {
            values: u("values"),
            keys: o ? g : u("keys"),
            entries: u("entries"),
          }),
          s)
        )
          for (l in c) (!_e && !h && l in p) || J(p, l, c[l]);
        else At({ target: e, proto: !0, forced: _e || h }, c);
      return c;
    },
    Le = K.set,
    Me = K.getterFor("Array Iterator"),
    Te = ke(
      Array,
      "Array",
      function (t, e) {
        Le(this, { type: "Array Iterator", target: m(t), index: 0, kind: e });
      },
      function () {
        var t = Me(this),
          e = t.target,
          r = t.kind,
          n = t.index++;
        return !e || n >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == r
          ? { value: n, done: !1 }
          : "values" == r
          ? { value: e[n], done: !1 }
          : { value: [n, e[n]], done: !1 };
      },
      "values"
    );
  (le.Arguments = le.Array), ce("keys"), ce("values"), ce("entries");
  var je = Object.assign,
    Re =
      !je ||
      c(function () {
        var t = {},
          e = {},
          r = Symbol();
        return (
          (t[r] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != je({}, t)[r] || "abcdefghijklmnopqrst" != Qt(je({}, e)).join("")
        );
      })
        ? function (t, e) {
            for (
              var r = Mt(t), n = arguments.length, i = 1, o = vt.f, s = h.f;
              n > i;

            )
              for (
                var a,
                  c = y(arguments[i++]),
                  u = o ? Qt(c).concat(o(c)) : Qt(c),
                  f = u.length,
                  d = 0;
                f > d;

              )
                (a = u[d++]), (l && !s.call(c, a)) || (r[a] = c[a]);
            return r;
          }
        : je;
  At(
    { target: "Object", stat: !0, forced: Object.assign !== Re },
    { assign: Re }
  );
  var We = zt("toStringTag"),
    ze =
      "Arguments" ==
      v(
        (function () {
          return arguments;
        })()
      ),
    Ce = function (t) {
      var e, r, n;
      return void 0 === t
        ? "Undefined"
        : null === t
        ? "Null"
        : "string" ==
          typeof (r = (function (t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), We))
        ? r
        : ze
        ? v(e)
        : "Object" == (n = v(e)) && "function" == typeof e.callee
        ? "Arguments"
        : n;
    },
    Ne = {};
  Ne[zt("toStringTag")] = "z";
  var Ie =
      "[object z]" !== String(Ne)
        ? function () {
            return "[object " + Ce(this) + "]";
          }
        : Ne.toString,
    De = Object.prototype;
  Ie !== De.toString && J(De, "toString", Ie, { unsafe: !0 });
  var Pe = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    Ve = "[" + Pe + "]",
    Fe = RegExp("^" + Ve + Ve + "*"),
    Be = RegExp(Ve + Ve + "*$"),
    He = function (t) {
      return function (e) {
        var r = String(b(e));
        return (
          1 & t && (r = r.replace(Fe, "")), 2 & t && (r = r.replace(Be, "")), r
        );
      };
    },
    qe = { start: He(1), end: He(2), trim: He(3) }.trim,
    $e = a.parseInt,
    Xe = /^[+-]?0[Xx]/,
    Ye =
      8 !== $e(Pe + "08") || 22 !== $e(Pe + "0x16")
        ? function (t, e) {
            var r = qe(String(t));
            return $e(r, e >>> 0 || (Xe.test(r) ? 16 : 10));
          }
        : $e;
  At({ global: !0, forced: parseInt != Ye }, { parseInt: Ye });
  var Ge = function (t) {
      return function (e, r) {
        var n,
          i,
          o = String(b(e)),
          s = it(r),
          a = o.length;
        return s < 0 || s >= a
          ? t
            ? ""
            : void 0
          : (n = o.charCodeAt(s)) < 55296 ||
            n > 56319 ||
            s + 1 === a ||
            (i = o.charCodeAt(s + 1)) < 56320 ||
            i > 57343
          ? t
            ? o.charAt(s)
            : n
          : t
          ? o.slice(s, s + 2)
          : i - 56320 + ((n - 55296) << 10) + 65536;
      };
    },
    Ue = { codeAt: Ge(!1), charAt: Ge(!0) },
    Qe = Ue.charAt,
    Ke = K.set,
    Je = K.getterFor("String Iterator");
  ke(
    String,
    "String",
    function (t) {
      Ke(this, { type: "String Iterator", string: String(t), index: 0 });
    },
    function () {
      var t,
        e = Je(this),
        r = e.string,
        n = e.index;
      return n >= r.length
        ? { value: void 0, done: !0 }
        : ((t = Qe(r, n)), (e.index += t.length), { value: t, done: !1 });
    }
  );
  var Ze = function (t, e, r) {
      for (var n in e) J(t, n, e[n], r);
      return t;
    },
    tr = !c(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    er = e(function (t) {
      var e = R.f,
        r = F("meta"),
        n = 0,
        i =
          Object.isExtensible ||
          function () {
            return !0;
          },
        o = function (t) {
          e(t, r, { value: { objectID: "O" + ++n, weakData: {} } });
        },
        s = (t.exports = {
          REQUIRED: !1,
          fastKey: function (t, e) {
            if (!x(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!O(t, r)) {
              if (!i(t)) return "F";
              if (!e) return "E";
              o(t);
            }
            return t[r].objectID;
          },
          getWeakData: function (t, e) {
            if (!O(t, r)) {
              if (!i(t)) return !0;
              if (!e) return !1;
              o(t);
            }
            return t[r].weakData;
          },
          onFreeze: function (t) {
            return tr && s.REQUIRED && i(t) && !O(t, r) && o(t), t;
          },
        });
      q[r] = !0;
    }),
    rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, zt("iterator")),
    nr = Array.prototype,
    ir = zt("iterator"),
    or = function (t, e, r, n) {
      try {
        return n ? e(T(r)[0], r[1]) : e(r);
      } catch (e) {
        var i = t.return;
        throw (void 0 !== i && T(i.call(t)), e);
      }
    },
    sr = e(function (t) {
      var e = function (t, e) {
        (this.stopped = t), (this.result = e);
      };
      (t.exports = function (t, r, n, i, o) {
        var s,
          a,
          c,
          l,
          u,
          f,
          h,
          d = Lt(r, n, i ? 2 : 1);
        if (o) s = t;
        else {
          if (
            "function" !=
            typeof (a = (function (t) {
              if (null != t) return t[ir] || t["@@iterator"] || le[Ce(t)];
            })(t))
          )
            throw TypeError("Target is not iterable");
          if (void 0 !== (h = a) && (le.Array === h || nr[rr] === h)) {
            for (c = 0, l = st(t.length); l > c; c++)
              if (
                (u = i ? d(T((f = t[c]))[0], f[1]) : d(t[c])) &&
                u instanceof e
              )
                return u;
            return new e(!1);
          }
          s = a.call(t);
        }
        for (; !(f = s.next()).done; )
          if ((u = or(s, d, f.value, i)) && u instanceof e) return u;
        return new e(!1);
      }).stop = function (t) {
        return new e(!0, t);
      };
    }),
    ar = function (t, e, r) {
      if (!(t instanceof e))
        throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
      return t;
    },
    cr = zt("iterator"),
    lr = !1;
  try {
    var ur = 0,
      fr = {
        next: function () {
          return { done: !!ur++ };
        },
        return: function () {
          lr = !0;
        },
      };
    (fr[cr] = function () {
      return this;
    }),
      Array.from(fr, function () {
        throw 2;
      });
  } catch (t) {}
  var hr = function (t, e, r, n, i) {
      var o = a[t],
        s = o && o.prototype,
        l = o,
        u = n ? "set" : "add",
        f = {},
        h = function (t) {
          var e = s[t];
          J(
            s,
            t,
            "add" == t
              ? function (t) {
                  return e.call(this, 0 === t ? 0 : t), this;
                }
              : "delete" == t
              ? function (t) {
                  return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : "get" == t
              ? function (t) {
                  return i && !x(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                }
              : "has" == t
              ? function (t) {
                  return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : function (t, r) {
                  return e.call(this, 0 === t ? 0 : t, r), this;
                }
          );
        };
      if (
        _t(
          t,
          "function" != typeof o ||
            !(
              i ||
              (s.forEach &&
                !c(function () {
                  new o().entries().next();
                }))
            )
        )
      )
        (l = r.getConstructor(e, t, n, u)), (er.REQUIRED = !0);
      else if (_t(t, !0)) {
        var d = new l(),
          p = d[u](i ? {} : -0, 1) != d,
          v = c(function () {
            d.has(1);
          }),
          g = (function (t, e) {
            if (!e && !lr) return !1;
            var r = !1;
            try {
              var n = {};
              (n[cr] = function () {
                return {
                  next: function () {
                    return { done: (r = !0) };
                  },
                };
              }),
                t(n);
            } catch (t) {}
            return r;
          })(function (t) {
            new o(t);
          }),
          y =
            !i &&
            c(function () {
              for (var t = new o(), e = 5; e--; ) t[u](e, e);
              return !t.has(-0);
            });
        g ||
          (((l = e(function (e, r) {
            ar(e, l, t);
            var i = (function (t, e, r) {
              var n, i;
              return (
                we &&
                  "function" == typeof (n = e.constructor) &&
                  n !== r &&
                  x((i = n.prototype)) &&
                  i !== r.prototype &&
                  we(t, i),
                t
              );
            })(new o(), e, l);
            return null != r && sr(r, i[u], i, n), i;
          })).prototype = s),
          (s.constructor = l)),
          (v || y) && (h("delete"), h("has"), n && h("get")),
          (y || p) && h(u),
          i && s.clear && delete s.clear;
      }
      return (
        (f[t] = l),
        At({ global: !0, forced: l != o }, f),
        me(l, t),
        i || r.setStrong(l, t, n),
        l
      );
    },
    dr = er.getWeakData,
    pr = K.set,
    vr = K.getterFor,
    gr = Pt.find,
    yr = Pt.findIndex,
    br = 0,
    mr = function (t) {
      return t.frozen || (t.frozen = new xr());
    },
    xr = function () {
      this.entries = [];
    },
    Er = function (t, e) {
      return gr(t.entries, function (t) {
        return t[0] === e;
      });
    };
  xr.prototype = {
    get: function (t) {
      var e = Er(this, t);
      if (e) return e[1];
    },
    has: function (t) {
      return !!Er(this, t);
    },
    set: function (t, e) {
      var r = Er(this, t);
      r ? (r[1] = e) : this.entries.push([t, e]);
    },
    delete: function (t) {
      var e = yr(this.entries, function (e) {
        return e[0] === t;
      });
      return ~e && this.entries.splice(e, 1), !!~e;
    },
  };
  var wr = {
      getConstructor: function (t, e, r, n) {
        var i = t(function (t, o) {
            ar(t, i, e),
              pr(t, { type: e, id: br++, frozen: void 0 }),
              null != o && sr(o, t[n], t, r);
          }),
          o = vr(e),
          s = function (t, e, r) {
            var n = o(t),
              i = dr(T(e), !0);
            return !0 === i ? mr(n).set(e, r) : (i[n.id] = r), t;
          };
        return (
          Ze(i.prototype, {
            delete: function (t) {
              var e = o(this);
              if (!x(t)) return !1;
              var r = dr(t);
              return !0 === r
                ? mr(e).delete(t)
                : r && O(r, e.id) && delete r[e.id];
            },
            has: function (t) {
              var e = o(this);
              if (!x(t)) return !1;
              var r = dr(t);
              return !0 === r ? mr(e).has(t) : r && O(r, e.id);
            },
          }),
          Ze(
            i.prototype,
            r
              ? {
                  get: function (t) {
                    var e = o(this);
                    if (x(t)) {
                      var r = dr(t);
                      return !0 === r ? mr(e).get(t) : r ? r[e.id] : void 0;
                    }
                  },
                  set: function (t, e) {
                    return s(this, t, e);
                  },
                }
              : {
                  add: function (t) {
                    return s(this, t, !0);
                  },
                }
          ),
          i
        );
      },
    },
    Or =
      (e(function (t) {
        var e,
          r = K.enforce,
          n = !a.ActiveXObject && "ActiveXObject" in a,
          i = Object.isExtensible,
          o = function (t) {
            return function () {
              return t(this, arguments.length ? arguments[0] : void 0);
            };
          },
          s = (t.exports = hr("WeakMap", o, wr, !0, !0));
        if (D && n) {
          (e = wr.getConstructor(o, "WeakMap", !0)), (er.REQUIRED = !0);
          var c = s.prototype,
            l = c.delete,
            u = c.has,
            f = c.get,
            h = c.set;
          Ze(c, {
            delete: function (t) {
              if (x(t) && !i(t)) {
                var n = r(this);
                return (
                  n.frozen || (n.frozen = new e()),
                  l.call(this, t) || n.frozen.delete(t)
                );
              }
              return l.call(this, t);
            },
            has: function (t) {
              if (x(t) && !i(t)) {
                var n = r(this);
                return (
                  n.frozen || (n.frozen = new e()),
                  u.call(this, t) || n.frozen.has(t)
                );
              }
              return u.call(this, t);
            },
            get: function (t) {
              if (x(t) && !i(t)) {
                var n = r(this);
                return (
                  n.frozen || (n.frozen = new e()),
                  u.call(this, t) ? f.call(this, t) : n.frozen.get(t)
                );
              }
              return f.call(this, t);
            },
            set: function (t, n) {
              if (x(t) && !i(t)) {
                var o = r(this);
                o.frozen || (o.frozen = new e()),
                  u.call(this, t) ? h.call(this, t, n) : o.frozen.set(t, n);
              } else h.call(this, t, n);
              return this;
            },
          });
        }
      }),
      zt("iterator")),
    _r = zt("toStringTag"),
    Sr = Te.values;
  for (var Ar in Ht) {
    var kr = a[Ar],
      Lr = kr && kr.prototype;
    if (Lr) {
      if (Lr[Or] !== Sr)
        try {
          W(Lr, Or, Sr);
        } catch (t) {
          Lr[Or] = Sr;
        }
      if ((Lr[_r] || W(Lr, _r, Ar), Ht[Ar]))
        for (var Mr in Te)
          if (Lr[Mr] !== Te[Mr])
            try {
              W(Lr, Mr, Te[Mr]);
            } catch (t) {
              Lr[Mr] = Te[Mr];
            }
    }
  }
  var Tr = "Expected a function",
    jr = NaN,
    Rr = "[object Symbol]",
    Wr = /^\s+|\s+$/g,
    zr = /^[-+]0x[0-9a-f]+$/i,
    Cr = /^0b[01]+$/i,
    Nr = /^0o[0-7]+$/i,
    Ir = parseInt,
    Dr = "object" == typeof t && t && t.Object === Object && t,
    Pr = "object" == typeof self && self && self.Object === Object && self,
    Vr = Dr || Pr || Function("return this")(),
    Fr = Object.prototype.toString,
    Br = Math.max,
    Hr = Math.min,
    qr = function () {
      return Vr.Date.now();
    };
  function $r(t, e, r) {
    var n,
      i,
      o,
      s,
      a,
      c,
      l = 0,
      u = !1,
      f = !1,
      h = !0;
    if ("function" != typeof t) throw new TypeError(Tr);
    function d(e) {
      var r = n,
        o = i;
      return (n = i = void 0), (l = e), (s = t.apply(o, r));
    }
    function p(t) {
      var r = t - c;
      return void 0 === c || r >= e || r < 0 || (f && t - l >= o);
    }
    function v() {
      var t = qr();
      if (p(t)) return g(t);
      a = setTimeout(
        v,
        (function (t) {
          var r = e - (t - c);
          return f ? Hr(r, o - (t - l)) : r;
        })(t)
      );
    }
    function g(t) {
      return (a = void 0), h && n ? d(t) : ((n = i = void 0), s);
    }
    function y() {
      var t = qr(),
        r = p(t);
      if (((n = arguments), (i = this), (c = t), r)) {
        if (void 0 === a)
          return (function (t) {
            return (l = t), (a = setTimeout(v, e)), u ? d(t) : s;
          })(c);
        if (f) return (a = setTimeout(v, e)), d(c);
      }
      return void 0 === a && (a = setTimeout(v, e)), s;
    }
    return (
      (e = Yr(e) || 0),
      Xr(r) &&
        ((u = !!r.leading),
        (o = (f = "maxWait" in r) ? Br(Yr(r.maxWait) || 0, e) : o),
        (h = "trailing" in r ? !!r.trailing : h)),
      (y.cancel = function () {
        void 0 !== a && clearTimeout(a), (l = 0), (n = c = i = a = void 0);
      }),
      (y.flush = function () {
        return void 0 === a ? s : g(qr());
      }),
      y
    );
  }
  function Xr(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  function Yr(t) {
    if ("number" == typeof t) return t;
    if (
      (function (t) {
        return (
          "symbol" == typeof t ||
          ((function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
            Fr.call(t) == Rr)
        );
      })(t)
    )
      return jr;
    if (Xr(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = Xr(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(Wr, "");
    var r = Cr.test(t);
    return r || Nr.test(t) ? Ir(t.slice(2), r ? 2 : 8) : zr.test(t) ? jr : +t;
  }
  var Gr = function (t, e, r) {
      var n = !0,
        i = !0;
      if ("function" != typeof t) throw new TypeError(Tr);
      return (
        Xr(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        $r(t, e, { leading: n, maxWait: e, trailing: i })
      );
    },
    Ur = "Expected a function",
    Qr = NaN,
    Kr = "[object Symbol]",
    Jr = /^\s+|\s+$/g,
    Zr = /^[-+]0x[0-9a-f]+$/i,
    tn = /^0b[01]+$/i,
    en = /^0o[0-7]+$/i,
    rn = parseInt,
    nn = "object" == typeof t && t && t.Object === Object && t,
    on = "object" == typeof self && self && self.Object === Object && self,
    sn = nn || on || Function("return this")(),
    an = Object.prototype.toString,
    cn = Math.max,
    ln = Math.min,
    un = function () {
      return sn.Date.now();
    };
  function fn(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  function hn(t) {
    if ("number" == typeof t) return t;
    if (
      (function (t) {
        return (
          "symbol" == typeof t ||
          ((function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
            an.call(t) == Kr)
        );
      })(t)
    )
      return Qr;
    if (fn(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = fn(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(Jr, "");
    var r = tn.test(t);
    return r || en.test(t) ? rn(t.slice(2), r ? 2 : 8) : Zr.test(t) ? Qr : +t;
  }
  var dn = function (t, e, r) {
      var n,
        i,
        o,
        s,
        a,
        c,
        l = 0,
        u = !1,
        f = !1,
        h = !0;
      if ("function" != typeof t) throw new TypeError(Ur);
      function d(e) {
        var r = n,
          o = i;
        return (n = i = void 0), (l = e), (s = t.apply(o, r));
      }
      function p(t) {
        var r = t - c;
        return void 0 === c || r >= e || r < 0 || (f && t - l >= o);
      }
      function v() {
        var t = un();
        if (p(t)) return g(t);
        a = setTimeout(
          v,
          (function (t) {
            var r = e - (t - c);
            return f ? ln(r, o - (t - l)) : r;
          })(t)
        );
      }
      function g(t) {
        return (a = void 0), h && n ? d(t) : ((n = i = void 0), s);
      }
      function y() {
        var t = un(),
          r = p(t);
        if (((n = arguments), (i = this), (c = t), r)) {
          if (void 0 === a)
            return (function (t) {
              return (l = t), (a = setTimeout(v, e)), u ? d(t) : s;
            })(c);
          if (f) return (a = setTimeout(v, e)), d(c);
        }
        return void 0 === a && (a = setTimeout(v, e)), s;
      }
      return (
        (e = hn(e) || 0),
        fn(r) &&
          ((u = !!r.leading),
          (o = (f = "maxWait" in r) ? cn(hn(r.maxWait) || 0, e) : o),
          (h = "trailing" in r ? !!r.trailing : h)),
        (y.cancel = function () {
          void 0 !== a && clearTimeout(a), (l = 0), (n = c = i = a = void 0);
        }),
        (y.flush = function () {
          return void 0 === a ? s : g(un());
        }),
        y
      );
    },
    pn = "Expected a function",
    vn = "__lodash_hash_undefined__",
    gn = "[object Function]",
    yn = "[object GeneratorFunction]",
    bn = /^\[object .+?Constructor\]$/,
    mn = "object" == typeof t && t && t.Object === Object && t,
    xn = "object" == typeof self && self && self.Object === Object && self,
    En = mn || xn || Function("return this")();
  var wn = Array.prototype,
    On = Function.prototype,
    _n = Object.prototype,
    Sn = En["__core-js_shared__"],
    An = (function () {
      var t = /[^.]+$/.exec((Sn && Sn.keys && Sn.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })(),
    kn = On.toString,
    Ln = _n.hasOwnProperty,
    Mn = _n.toString,
    Tn = RegExp(
      "^" +
        kn
          .call(Ln)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    jn = wn.splice,
    Rn = Vn(En, "Map"),
    Wn = Vn(Object, "create");
  function zn(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function Cn(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function Nn(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function In(t, e) {
    for (var r, n, i = t.length; i--; )
      if ((r = t[i][0]) === (n = e) || (r != r && n != n)) return i;
    return -1;
  }
  function Dn(t) {
    return (
      !(!Bn(t) || ((e = t), An && An in e)) &&
      ((function (t) {
        var e = Bn(t) ? Mn.call(t) : "";
        return e == gn || e == yn;
      })(t) ||
      (function (t) {
        var e = !1;
        if (null != t && "function" != typeof t.toString)
          try {
            e = !!(t + "");
          } catch (t) {}
        return e;
      })(t)
        ? Tn
        : bn
      ).test(
        (function (t) {
          if (null != t) {
            try {
              return kn.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        })(t)
      )
    );
    var e;
  }
  function Pn(t, e) {
    var r,
      n,
      i = t.__data__;
    return (
      "string" == (n = typeof (r = e)) ||
      "number" == n ||
      "symbol" == n ||
      "boolean" == n
        ? "__proto__" !== r
        : null === r
    )
      ? i["string" == typeof e ? "string" : "hash"]
      : i.map;
  }
  function Vn(t, e) {
    var r = (function (t, e) {
      return null == t ? void 0 : t[e];
    })(t, e);
    return Dn(r) ? r : void 0;
  }
  function Fn(t, e) {
    if ("function" != typeof t || (e && "function" != typeof e))
      throw new TypeError(pn);
    var r = function () {
      var n = arguments,
        i = e ? e.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(i)) return o.get(i);
      var s = t.apply(this, n);
      return (r.cache = o.set(i, s)), s;
    };
    return (r.cache = new (Fn.Cache || Nn)()), r;
  }
  function Bn(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  (zn.prototype.clear = function () {
    this.__data__ = Wn ? Wn(null) : {};
  }),
    (zn.prototype.delete = function (t) {
      return this.has(t) && delete this.__data__[t];
    }),
    (zn.prototype.get = function (t) {
      var e = this.__data__;
      if (Wn) {
        var r = e[t];
        return r === vn ? void 0 : r;
      }
      return Ln.call(e, t) ? e[t] : void 0;
    }),
    (zn.prototype.has = function (t) {
      var e = this.__data__;
      return Wn ? void 0 !== e[t] : Ln.call(e, t);
    }),
    (zn.prototype.set = function (t, e) {
      return (this.__data__[t] = Wn && void 0 === e ? vn : e), this;
    }),
    (Cn.prototype.clear = function () {
      this.__data__ = [];
    }),
    (Cn.prototype.delete = function (t) {
      var e = this.__data__,
        r = In(e, t);
      return !(r < 0) && (r == e.length - 1 ? e.pop() : jn.call(e, r, 1), !0);
    }),
    (Cn.prototype.get = function (t) {
      var e = this.__data__,
        r = In(e, t);
      return r < 0 ? void 0 : e[r][1];
    }),
    (Cn.prototype.has = function (t) {
      return In(this.__data__, t) > -1;
    }),
    (Cn.prototype.set = function (t, e) {
      var r = this.__data__,
        n = In(r, t);
      return n < 0 ? r.push([t, e]) : (r[n][1] = e), this;
    }),
    (Nn.prototype.clear = function () {
      this.__data__ = {
        hash: new zn(),
        map: new (Rn || Cn)(),
        string: new zn(),
      };
    }),
    (Nn.prototype.delete = function (t) {
      return Pn(this, t).delete(t);
    }),
    (Nn.prototype.get = function (t) {
      return Pn(this, t).get(t);
    }),
    (Nn.prototype.has = function (t) {
      return Pn(this, t).has(t);
    }),
    (Nn.prototype.set = function (t, e) {
      return Pn(this, t).set(t, e), this;
    }),
    (Fn.Cache = Nn);
  var Hn = Fn,
    qn = (function () {
      if ("undefined" != typeof Map) return Map;
      function t(t, e) {
        var r = -1;
        return (
          t.some(function (t, n) {
            return t[0] === e && ((r = n), !0);
          }),
          r
        );
      }
      return (function () {
        function e() {
          this.__entries__ = [];
        }
        return (
          Object.defineProperty(e.prototype, "size", {
            get: function () {
              return this.__entries__.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.get = function (e) {
            var r = t(this.__entries__, e),
              n = this.__entries__[r];
            return n && n[1];
          }),
          (e.prototype.set = function (e, r) {
            var n = t(this.__entries__, e);
            ~n ? (this.__entries__[n][1] = r) : this.__entries__.push([e, r]);
          }),
          (e.prototype.delete = function (e) {
            var r = this.__entries__,
              n = t(r, e);
            ~n && r.splice(n, 1);
          }),
          (e.prototype.has = function (e) {
            return !!~t(this.__entries__, e);
          }),
          (e.prototype.clear = function () {
            this.__entries__.splice(0);
          }),
          (e.prototype.forEach = function (t, e) {
            void 0 === e && (e = null);
            for (var r = 0, n = this.__entries__; r < n.length; r++) {
              var i = n[r];
              t.call(e, i[1], i[0]);
            }
          }),
          e
        );
      })();
    })(),
    $n =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      window.document === document,
    Xn =
      "undefined" != typeof global && global.Math === Math
        ? global
        : "undefined" != typeof self && self.Math === Math
        ? self
        : "undefined" != typeof window && window.Math === Math
        ? window
        : Function("return this")(),
    Yn =
      "function" == typeof requestAnimationFrame
        ? requestAnimationFrame.bind(Xn)
        : function (t) {
            return setTimeout(function () {
              return t(Date.now());
            }, 1e3 / 60);
          },
    Gn = 2;
  var Un = 20,
    Qn = [
      "top",
      "right",
      "bottom",
      "left",
      "width",
      "height",
      "size",
      "weight",
    ],
    Kn = "undefined" != typeof MutationObserver,
    Jn = (function () {
      function t() {
        (this.connected_ = !1),
          (this.mutationEventsAdded_ = !1),
          (this.mutationsObserver_ = null),
          (this.observers_ = []),
          (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
          (this.refresh = (function (t, e) {
            var r = !1,
              n = !1,
              i = 0;
            function o() {
              r && ((r = !1), t()), n && a();
            }
            function s() {
              Yn(o);
            }
            function a() {
              var t = Date.now();
              if (r) {
                if (t - i < Gn) return;
                n = !0;
              } else (r = !0), (n = !1), setTimeout(s, e);
              i = t;
            }
            return a;
          })(this.refresh.bind(this), Un));
      }
      return (
        (t.prototype.addObserver = function (t) {
          ~this.observers_.indexOf(t) || this.observers_.push(t),
            this.connected_ || this.connect_();
        }),
        (t.prototype.removeObserver = function (t) {
          var e = this.observers_,
            r = e.indexOf(t);
          ~r && e.splice(r, 1),
            !e.length && this.connected_ && this.disconnect_();
        }),
        (t.prototype.refresh = function () {
          this.updateObservers_() && this.refresh();
        }),
        (t.prototype.updateObservers_ = function () {
          var t = this.observers_.filter(function (t) {
            return t.gatherActive(), t.hasActive();
          });
          return (
            t.forEach(function (t) {
              return t.broadcastActive();
            }),
            t.length > 0
          );
        }),
        (t.prototype.connect_ = function () {
          $n &&
            !this.connected_ &&
            (document.addEventListener("transitionend", this.onTransitionEnd_),
            window.addEventListener("resize", this.refresh),
            Kn
              ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                this.mutationsObserver_.observe(document, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                }))
              : (document.addEventListener("DOMSubtreeModified", this.refresh),
                (this.mutationEventsAdded_ = !0)),
            (this.connected_ = !0));
        }),
        (t.prototype.disconnect_ = function () {
          $n &&
            this.connected_ &&
            (document.removeEventListener(
              "transitionend",
              this.onTransitionEnd_
            ),
            window.removeEventListener("resize", this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ &&
              document.removeEventListener("DOMSubtreeModified", this.refresh),
            (this.mutationsObserver_ = null),
            (this.mutationEventsAdded_ = !1),
            (this.connected_ = !1));
        }),
        (t.prototype.onTransitionEnd_ = function (t) {
          var e = t.propertyName,
            r = void 0 === e ? "" : e;
          Qn.some(function (t) {
            return !!~r.indexOf(t);
          }) && this.refresh();
        }),
        (t.getInstance = function () {
          return this.instance_ || (this.instance_ = new t()), this.instance_;
        }),
        (t.instance_ = null),
        t
      );
    })(),
    Zn = function (t, e) {
      for (var r = 0, n = Object.keys(e); r < n.length; r++) {
        var i = n[r];
        Object.defineProperty(t, i, {
          value: e[i],
          enumerable: !1,
          writable: !1,
          configurable: !0,
        });
      }
      return t;
    },
    ti = function (t) {
      return (t && t.ownerDocument && t.ownerDocument.defaultView) || Xn;
    },
    ei = ai(0, 0, 0, 0);
  function ri(t) {
    return parseFloat(t) || 0;
  }
  function ni(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    return e.reduce(function (e, r) {
      return e + ri(t["border-" + r + "-width"]);
    }, 0);
  }
  function ii(t) {
    var e = t.clientWidth,
      r = t.clientHeight;
    if (!e && !r) return ei;
    var n = ti(t).getComputedStyle(t),
      i = (function (t) {
        for (
          var e = {}, r = 0, n = ["top", "right", "bottom", "left"];
          r < n.length;
          r++
        ) {
          var i = n[r],
            o = t["padding-" + i];
          e[i] = ri(o);
        }
        return e;
      })(n),
      o = i.left + i.right,
      s = i.top + i.bottom,
      a = ri(n.width),
      c = ri(n.height);
    if (
      ("border-box" === n.boxSizing &&
        (Math.round(a + o) !== e && (a -= ni(n, "left", "right") + o),
        Math.round(c + s) !== r && (c -= ni(n, "top", "bottom") + s)),
      !(function (t) {
        return t === ti(t).document.documentElement;
      })(t))
    ) {
      var l = Math.round(a + o) - e,
        u = Math.round(c + s) - r;
      1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(u) && (c -= u);
    }
    return ai(i.left, i.top, a, c);
  }
  var oi =
    "undefined" != typeof SVGGraphicsElement
      ? function (t) {
          return t instanceof ti(t).SVGGraphicsElement;
        }
      : function (t) {
          return (
            t instanceof ti(t).SVGElement && "function" == typeof t.getBBox
          );
        };
  function si(t) {
    return $n
      ? oi(t)
        ? (function (t) {
            var e = t.getBBox();
            return ai(0, 0, e.width, e.height);
          })(t)
        : ii(t)
      : ei;
  }
  function ai(t, e, r, n) {
    return { x: t, y: e, width: r, height: n };
  }
  var ci = (function () {
      function t(t) {
        (this.broadcastWidth = 0),
          (this.broadcastHeight = 0),
          (this.contentRect_ = ai(0, 0, 0, 0)),
          (this.target = t);
      }
      return (
        (t.prototype.isActive = function () {
          var t = si(this.target);
          return (
            (this.contentRect_ = t),
            t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
          );
        }),
        (t.prototype.broadcastRect = function () {
          var t = this.contentRect_;
          return (
            (this.broadcastWidth = t.width),
            (this.broadcastHeight = t.height),
            t
          );
        }),
        t
      );
    })(),
    li = function (t, e) {
      var r,
        n,
        i,
        o,
        s,
        a,
        c,
        l =
          ((n = (r = e).x),
          (i = r.y),
          (o = r.width),
          (s = r.height),
          (a =
            "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
          (c = Object.create(a.prototype)),
          Zn(c, {
            x: n,
            y: i,
            width: o,
            height: s,
            top: i,
            right: n + o,
            bottom: s + i,
            left: n,
          }),
          c);
      Zn(this, { target: t, contentRect: l });
    },
    ui = (function () {
      function t(t, e, r) {
        if (
          ((this.activeObservations_ = []),
          (this.observations_ = new qn()),
          "function" != typeof t)
        )
          throw new TypeError(
            "The callback provided as parameter 1 is not a function."
          );
        (this.callback_ = t), (this.controller_ = e), (this.callbackCtx_ = r);
      }
      return (
        (t.prototype.observe = function (t) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof ti(t).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) ||
              (e.set(t, new ci(t)),
              this.controller_.addObserver(this),
              this.controller_.refresh());
          }
        }),
        (t.prototype.unobserve = function (t) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof ti(t).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) &&
              (e.delete(t), e.size || this.controller_.removeObserver(this));
          }
        }),
        (t.prototype.disconnect = function () {
          this.clearActive(),
            this.observations_.clear(),
            this.controller_.removeObserver(this);
        }),
        (t.prototype.gatherActive = function () {
          var t = this;
          this.clearActive(),
            this.observations_.forEach(function (e) {
              e.isActive() && t.activeObservations_.push(e);
            });
        }),
        (t.prototype.broadcastActive = function () {
          if (this.hasActive()) {
            var t = this.callbackCtx_,
              e = this.activeObservations_.map(function (t) {
                return new li(t.target, t.broadcastRect());
              });
            this.callback_.call(t, e, t), this.clearActive();
          }
        }),
        (t.prototype.clearActive = function () {
          this.activeObservations_.splice(0);
        }),
        (t.prototype.hasActive = function () {
          return this.activeObservations_.length > 0;
        }),
        t
      );
    })(),
    fi = "undefined" != typeof WeakMap ? new WeakMap() : new qn(),
    hi = function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = Jn.getInstance(),
        n = new ui(e, r, this);
      fi.set(this, n);
    };
  ["observe", "unobserve", "disconnect"].forEach(function (t) {
    hi.prototype[t] = function () {
      var e;
      return (e = fi.get(this))[t].apply(e, arguments);
    };
  });
  var di = void 0 !== Xn.ResizeObserver ? Xn.ResizeObserver : hi,
    pi = null,
    vi = null;
  function gi() {
    if (null === pi) {
      if ("undefined" == typeof document) return (pi = 0);
      var t = document.body,
        e = document.createElement("div");
      e.classList.add("simplebar-hide-scrollbar"), t.appendChild(e);
      var r = e.getBoundingClientRect().right;
      t.removeChild(e), (pi = r);
    }
    return pi;
  }
  Yt &&
    window.addEventListener("resize", function () {
      vi !== window.devicePixelRatio &&
        ((vi = window.devicePixelRatio), (pi = null));
    });
  var yi = function (t) {
      return function (e, r, n, i) {
        kt(r);
        var o = Mt(e),
          s = y(o),
          a = st(o.length),
          c = t ? a - 1 : 0,
          l = t ? -1 : 1;
        if (n < 2)
          for (;;) {
            if (c in s) {
              (i = s[c]), (c += l);
              break;
            }
            if (((c += l), t ? c < 0 : a <= c))
              throw TypeError("Reduce of empty array with no initial value");
          }
        for (; t ? c >= 0 : a > c; c += l) c in s && (i = r(i, s[c], c, o));
        return i;
      };
    },
    bi = { left: yi(!1), right: yi(!0) }.left;
  At(
    { target: "Array", proto: !0, forced: Vt("reduce") },
    {
      reduce: function (t) {
        return bi(
          this,
          t,
          arguments.length,
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
  var mi = R.f,
    xi = Function.prototype,
    Ei = xi.toString,
    wi = /^\s*function ([^ (]*)/;
  !l ||
    "name" in xi ||
    mi(xi, "name", {
      configurable: !0,
      get: function () {
        try {
          return Ei.call(this).match(wi)[1];
        } catch (t) {
          return "";
        }
      },
    });
  var Oi,
    _i,
    Si = function () {
      var t = T(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    },
    Ai = RegExp.prototype.exec,
    ki = String.prototype.replace,
    Li = Ai,
    Mi =
      ((Oi = /a/),
      (_i = /b*/g),
      Ai.call(Oi, "a"),
      Ai.call(_i, "a"),
      0 !== Oi.lastIndex || 0 !== _i.lastIndex),
    Ti = void 0 !== /()??/.exec("")[1];
  (Mi || Ti) &&
    (Li = function (t) {
      var e,
        r,
        n,
        i,
        o = this;
      return (
        Ti && (r = new RegExp("^" + o.source + "$(?!\\s)", Si.call(o))),
        Mi && (e = o.lastIndex),
        (n = Ai.call(o, t)),
        Mi && n && (o.lastIndex = o.global ? n.index + n[0].length : e),
        Ti &&
          n &&
          n.length > 1 &&
          ki.call(n[0], r, function () {
            for (i = 1; i < arguments.length - 2; i++)
              void 0 === arguments[i] && (n[i] = void 0);
          }),
        n
      );
    });
  var ji = Li;
  At({ target: "RegExp", proto: !0, forced: /./.exec !== ji }, { exec: ji });
  var Ri = zt("species"),
    Wi = !c(function () {
      var t = /./;
      return (
        (t.exec = function () {
          var t = [];
          return (t.groups = { a: "7" }), t;
        }),
        "7" !== "".replace(t, "$<a>")
      );
    }),
    zi = !c(function () {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function () {
        return e.apply(this, arguments);
      };
      var r = "ab".split(t);
      return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
    }),
    Ci = function (t, e, r, n) {
      var i = zt(t),
        o = !c(function () {
          var e = {};
          return (
            (e[i] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        s =
          o &&
          !c(function () {
            var e = !1,
              r = /a/;
            return (
              (r.exec = function () {
                return (e = !0), null;
              }),
              "split" === t &&
                ((r.constructor = {}),
                (r.constructor[Ri] = function () {
                  return r;
                })),
              r[i](""),
              !e
            );
          });
      if (!o || !s || ("replace" === t && !Wi) || ("split" === t && !zi)) {
        var a = /./[i],
          l = r(i, ""[t], function (t, e, r, n, i) {
            return e.exec === ji
              ? o && !i
                ? { done: !0, value: a.call(e, r, n) }
                : { done: !0, value: t.call(r, e, n) }
              : { done: !1 };
          }),
          u = l[0],
          f = l[1];
        J(String.prototype, t, u),
          J(
            RegExp.prototype,
            i,
            2 == e
              ? function (t, e) {
                  return f.call(t, this, e);
                }
              : function (t) {
                  return f.call(t, this);
                }
          ),
          n && W(RegExp.prototype[i], "sham", !0);
      }
    },
    Ni = Ue.charAt,
    Ii = function (t, e, r) {
      return e + (r ? Ni(t, e).length : 1);
    },
    Di = function (t, e) {
      var r = t.exec;
      if ("function" == typeof r) {
        var n = r.call(t, e);
        if ("object" != typeof n)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return n;
      }
      if ("RegExp" !== v(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return ji.call(t, e);
    };
  Ci("match", 1, function (t, e, r) {
    return [
      function (e) {
        var r = b(this),
          n = null == e ? void 0 : e[t];
        return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
      },
      function (t) {
        var n = r(e, t, this);
        if (n.done) return n.value;
        var i = T(t),
          o = String(this);
        if (!i.global) return Di(i, o);
        var s = i.unicode;
        i.lastIndex = 0;
        for (var a, c = [], l = 0; null !== (a = Di(i, o)); ) {
          var u = String(a[0]);
          (c[l] = u),
            "" === u && (i.lastIndex = Ii(o, st(i.lastIndex), s)),
            l++;
        }
        return 0 === l ? null : c;
      },
    ];
  });
  var Pi = Math.max,
    Vi = Math.min,
    Fi = Math.floor,
    Bi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    Hi = /\$([$&'`]|\d\d?)/g;
  Ci("replace", 2, function (t, e, r) {
    return [
      function (r, n) {
        var i = b(this),
          o = null == r ? void 0 : r[t];
        return void 0 !== o ? o.call(r, i, n) : e.call(String(i), r, n);
      },
      function (t, i) {
        var o = r(e, t, this, i);
        if (o.done) return o.value;
        var s = T(t),
          a = String(this),
          c = "function" == typeof i;
        c || (i = String(i));
        var l = s.global;
        if (l) {
          var u = s.unicode;
          s.lastIndex = 0;
        }
        for (var f = []; ; ) {
          var h = Di(s, a);
          if (null === h) break;
          if ((f.push(h), !l)) break;
          "" === String(h[0]) && (s.lastIndex = Ii(a, st(s.lastIndex), u));
        }
        for (var d, p = "", v = 0, g = 0; g < f.length; g++) {
          h = f[g];
          for (
            var y = String(h[0]),
              b = Pi(Vi(it(h.index), a.length), 0),
              m = [],
              x = 1;
            x < h.length;
            x++
          )
            m.push(void 0 === (d = h[x]) ? d : String(d));
          var E = h.groups;
          if (c) {
            var w = [y].concat(m, b, a);
            void 0 !== E && w.push(E);
            var O = String(i.apply(void 0, w));
          } else O = n(y, a, b, m, E, i);
          b >= v && ((p += a.slice(v, b) + O), (v = b + y.length));
        }
        return p + a.slice(v);
      },
    ];
    function n(t, r, n, i, o, s) {
      var a = n + t.length,
        c = i.length,
        l = Hi;
      return (
        void 0 !== o && ((o = Mt(o)), (l = Bi)),
        e.call(s, l, function (e, s) {
          var l;
          switch (s.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return t;
            case "`":
              return r.slice(0, n);
            case "'":
              return r.slice(a);
            case "<":
              l = o[s.slice(1, -1)];
              break;
            default:
              var u = +s;
              if (0 === u) return e;
              if (u > c) {
                var f = Fi(u / 10);
                return 0 === f
                  ? e
                  : f <= c
                  ? void 0 === i[f - 1]
                    ? s.charAt(1)
                    : i[f - 1] + s.charAt(1)
                  : e;
              }
              l = i[u - 1];
          }
          return void 0 === l ? "" : l;
        })
      );
    }
  });
  var qi = function (t) {
    return Array.prototype.reduce.call(
      t,
      function (t, e) {
        var r = e.name.match(/data-simplebar-(.+)/);
        if (r) {
          var n = r[1].replace(/\W+(.)/g, function (t, e) {
            return e.toUpperCase();
          });
          switch (e.value) {
            case "true":
              t[n] = !0;
              break;
            case "false":
              t[n] = !1;
              break;
            case void 0:
              t[n] = !0;
              break;
            default:
              t[n] = e.value;
          }
        }
        return t;
      },
      {}
    );
  };
  function $i(t) {
    return t && t.ownerDocument && t.ownerDocument.defaultView
      ? t.ownerDocument.defaultView
      : window;
  }
  function Xi(t) {
    return t && t.ownerDocument ? t.ownerDocument : document;
  }
  var Yi = (function () {
    function t(e, r) {
      var n = this;
      (this.onScroll = function () {
        var t = $i(n.el);
        n.scrollXTicking ||
          (t.requestAnimationFrame(n.scrollX), (n.scrollXTicking = !0)),
          n.scrollYTicking ||
            (t.requestAnimationFrame(n.scrollY), (n.scrollYTicking = !0));
      }),
        (this.scrollX = function () {
          n.axis.x.isOverflowing &&
            (n.showScrollbar("x"), n.positionScrollbar("x")),
            (n.scrollXTicking = !1);
        }),
        (this.scrollY = function () {
          n.axis.y.isOverflowing &&
            (n.showScrollbar("y"), n.positionScrollbar("y")),
            (n.scrollYTicking = !1);
        }),
        (this.onMouseEnter = function () {
          n.showScrollbar("x"), n.showScrollbar("y");
        }),
        (this.onMouseMove = function (t) {
          (n.mouseX = t.clientX),
            (n.mouseY = t.clientY),
            (n.axis.x.isOverflowing || n.axis.x.forceVisible) &&
              n.onMouseMoveForAxis("x"),
            (n.axis.y.isOverflowing || n.axis.y.forceVisible) &&
              n.onMouseMoveForAxis("y");
        }),
        (this.onMouseLeave = function () {
          n.onMouseMove.cancel(),
            (n.axis.x.isOverflowing || n.axis.x.forceVisible) &&
              n.onMouseLeaveForAxis("x"),
            (n.axis.y.isOverflowing || n.axis.y.forceVisible) &&
              n.onMouseLeaveForAxis("y"),
            (n.mouseX = -1),
            (n.mouseY = -1);
        }),
        (this.onWindowResize = function () {
          (n.scrollbarWidth = n.getScrollbarWidth()), n.hideNativeScrollbar();
        }),
        (this.hideScrollbars = function () {
          (n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect()),
            (n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect()),
            n.isWithinBounds(n.axis.y.track.rect) ||
              (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible),
              (n.axis.y.isVisible = !1)),
            n.isWithinBounds(n.axis.x.track.rect) ||
              (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible),
              (n.axis.x.isVisible = !1));
        }),
        (this.onPointerEvent = function (t) {
          var e, r;
          (n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect()),
            (n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect()),
            (n.axis.x.isOverflowing || n.axis.x.forceVisible) &&
              (e = n.isWithinBounds(n.axis.x.track.rect)),
            (n.axis.y.isOverflowing || n.axis.y.forceVisible) &&
              (r = n.isWithinBounds(n.axis.y.track.rect)),
            (e || r) &&
              (t.preventDefault(),
              t.stopPropagation(),
              "mousedown" === t.type &&
                (e &&
                  ((n.axis.x.scrollbar.rect =
                    n.axis.x.scrollbar.el.getBoundingClientRect()),
                  n.isWithinBounds(n.axis.x.scrollbar.rect)
                    ? n.onDragStart(t, "x")
                    : n.onTrackClick(t, "x")),
                r &&
                  ((n.axis.y.scrollbar.rect =
                    n.axis.y.scrollbar.el.getBoundingClientRect()),
                  n.isWithinBounds(n.axis.y.scrollbar.rect)
                    ? n.onDragStart(t, "y")
                    : n.onTrackClick(t, "y"))));
        }),
        (this.drag = function (e) {
          var r = n.axis[n.draggedAxis].track,
            i = r.rect[n.axis[n.draggedAxis].sizeAttr],
            o = n.axis[n.draggedAxis].scrollbar,
            s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
            a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
          e.preventDefault(), e.stopPropagation();
          var c =
            ((("y" === n.draggedAxis ? e.pageY : e.pageX) -
              r.rect[n.axis[n.draggedAxis].offsetAttr] -
              n.axis[n.draggedAxis].dragOffset) /
              (i - o.size)) *
            (s - a);
          "x" === n.draggedAxis &&
            ((c =
              n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted
                ? c - (i + o.size)
                : c),
            (c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c)),
            (n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c);
        }),
        (this.onEndDrag = function (t) {
          var e = Xi(n.el),
            r = $i(n.el);
          t.preventDefault(),
            t.stopPropagation(),
            n.el.classList.remove(n.classNames.dragging),
            e.removeEventListener("mousemove", n.drag, !0),
            e.removeEventListener("mouseup", n.onEndDrag, !0),
            (n.removePreventClickId = r.setTimeout(function () {
              e.removeEventListener("click", n.preventClick, !0),
                e.removeEventListener("dblclick", n.preventClick, !0),
                (n.removePreventClickId = null);
            }));
        }),
        (this.preventClick = function (t) {
          t.preventDefault(), t.stopPropagation();
        }),
        (this.el = e),
        (this.minScrollbarWidth = 20),
        (this.options = Object.assign({}, t.defaultOptions, {}, r)),
        (this.classNames = Object.assign(
          {},
          t.defaultOptions.classNames,
          {},
          this.options.classNames
        )),
        (this.axis = {
          x: {
            scrollOffsetAttr: "scrollLeft",
            sizeAttr: "width",
            scrollSizeAttr: "scrollWidth",
            offsetSizeAttr: "offsetWidth",
            offsetAttr: "left",
            overflowAttr: "overflowX",
            dragOffset: 0,
            isOverflowing: !0,
            isVisible: !1,
            forceVisible: !1,
            track: {},
            scrollbar: {},
          },
          y: {
            scrollOffsetAttr: "scrollTop",
            sizeAttr: "height",
            scrollSizeAttr: "scrollHeight",
            offsetSizeAttr: "offsetHeight",
            offsetAttr: "top",
            overflowAttr: "overflowY",
            dragOffset: 0,
            isOverflowing: !0,
            isVisible: !1,
            forceVisible: !1,
            track: {},
            scrollbar: {},
          },
        }),
        (this.removePreventClickId = null),
        t.instances.has(this.el) ||
          ((this.recalculate = Gr(this.recalculate.bind(this), 64)),
          (this.onMouseMove = Gr(this.onMouseMove.bind(this), 64)),
          (this.hideScrollbars = dn(
            this.hideScrollbars.bind(this),
            this.options.timeout
          )),
          (this.onWindowResize = dn(this.onWindowResize.bind(this), 64, {
            leading: !0,
          })),
          (t.getRtlHelpers = Hn(t.getRtlHelpers)),
          this.init());
    }
    (t.getRtlHelpers = function () {
      var e = document.createElement("div");
      e.innerHTML =
        '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
      var r = e.firstElementChild;
      document.body.appendChild(r);
      var n = r.firstElementChild;
      r.scrollLeft = 0;
      var i = t.getOffset(r),
        o = t.getOffset(n);
      r.scrollLeft = 999;
      var s = t.getOffset(n);
      return {
        isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0,
        isRtlScrollbarInverted: i.left !== o.left,
      };
    }),
      (t.getOffset = function (t) {
        var e = t.getBoundingClientRect(),
          r = Xi(t),
          n = $i(t);
        return {
          top: e.top + (n.pageYOffset || r.documentElement.scrollTop),
          left: e.left + (n.pageXOffset || r.documentElement.scrollLeft),
        };
      });
    var e = t.prototype;
    return (
      (e.init = function () {
        t.instances.set(this.el, this),
          Yt &&
            (this.initDOM(),
            (this.scrollbarWidth = this.getScrollbarWidth()),
            this.recalculate(),
            this.initListeners());
      }),
      (e.initDOM = function () {
        var t = this;
        Xi(this.el);
        if (
          Array.prototype.filter.call(this.el.children, function (e) {
            return e.classList.contains(t.classNames.wrapper);
          }).length
        )
          (this.wrapperEl = this.el.querySelector(
            "." + this.classNames.wrapper
          )),
            (this.contentWrapperEl =
              this.options.scrollableNode ||
              this.el.querySelector("." + this.classNames.contentWrapper)),
            (this.contentEl =
              this.options.contentNode ||
              this.el.querySelector("." + this.classNames.contentEl)),
            (this.offsetEl = this.el.querySelector(
              "." + this.classNames.offset
            )),
            (this.maskEl = this.el.querySelector("." + this.classNames.mask)),
            (this.placeholderEl = this.findChild(
              this.wrapperEl,
              "." + this.classNames.placeholder
            )),
            (this.heightAutoObserverWrapperEl = this.el.querySelector(
              "." + this.classNames.heightAutoObserverWrapperEl
            )),
            (this.heightAutoObserverEl = this.el.querySelector(
              "." + this.classNames.heightAutoObserverEl
            )),
            (this.axis.x.track.el = this.findChild(
              this.el,
              "." + this.classNames.track + "." + this.classNames.horizontal
            )),
            (this.axis.y.track.el = this.findChild(
              this.el,
              "." + this.classNames.track + "." + this.classNames.vertical
            ));
        else {
          for (
            this.wrapperEl = document.createElement("div"),
              this.contentWrapperEl = document.createElement("div"),
              this.offsetEl = document.createElement("div"),
              this.maskEl = document.createElement("div"),
              this.contentEl = document.createElement("div"),
              this.placeholderEl = document.createElement("div"),
              this.heightAutoObserverWrapperEl = document.createElement("div"),
              this.heightAutoObserverEl = document.createElement("div"),
              this.wrapperEl.classList.add(this.classNames.wrapper),
              this.contentWrapperEl.classList.add(
                this.classNames.contentWrapper
              ),
              this.offsetEl.classList.add(this.classNames.offset),
              this.maskEl.classList.add(this.classNames.mask),
              this.contentEl.classList.add(this.classNames.contentEl),
              this.placeholderEl.classList.add(this.classNames.placeholder),
              this.heightAutoObserverWrapperEl.classList.add(
                this.classNames.heightAutoObserverWrapperEl
              ),
              this.heightAutoObserverEl.classList.add(
                this.classNames.heightAutoObserverEl
              );
            this.el.firstChild;

          )
            this.contentEl.appendChild(this.el.firstChild);
          this.contentWrapperEl.appendChild(this.contentEl),
            this.offsetEl.appendChild(this.contentWrapperEl),
            this.maskEl.appendChild(this.offsetEl),
            this.heightAutoObserverWrapperEl.appendChild(
              this.heightAutoObserverEl
            ),
            this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
            this.wrapperEl.appendChild(this.maskEl),
            this.wrapperEl.appendChild(this.placeholderEl),
            this.el.appendChild(this.wrapperEl);
        }
        if (!this.axis.x.track.el || !this.axis.y.track.el) {
          var e = document.createElement("div"),
            r = document.createElement("div");
          e.classList.add(this.classNames.track),
            r.classList.add(this.classNames.scrollbar),
            e.appendChild(r),
            (this.axis.x.track.el = e.cloneNode(!0)),
            this.axis.x.track.el.classList.add(this.classNames.horizontal),
            (this.axis.y.track.el = e.cloneNode(!0)),
            this.axis.y.track.el.classList.add(this.classNames.vertical),
            this.el.appendChild(this.axis.x.track.el),
            this.el.appendChild(this.axis.y.track.el);
        }
        (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
          "." + this.classNames.scrollbar
        )),
          (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
            "." + this.classNames.scrollbar
          )),
          this.options.autoHide ||
            (this.axis.x.scrollbar.el.classList.add(this.classNames.visible),
            this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
          this.el.setAttribute("data-simplebar", "init");
      }),
      (e.initListeners = function () {
        var t = this,
          e = $i(this.el);
        this.options.autoHide &&
          this.el.addEventListener("mouseenter", this.onMouseEnter),
          ["mousedown", "click", "dblclick"].forEach(function (e) {
            t.el.addEventListener(e, t.onPointerEvent, !0);
          }),
          ["touchstart", "touchend", "touchmove"].forEach(function (e) {
            t.el.addEventListener(e, t.onPointerEvent, {
              capture: !0,
              passive: !0,
            });
          }),
          this.el.addEventListener("mousemove", this.onMouseMove),
          this.el.addEventListener("mouseleave", this.onMouseLeave),
          this.contentWrapperEl.addEventListener("scroll", this.onScroll),
          e.addEventListener("resize", this.onWindowResize);
        var r = !1,
          n = e.ResizeObserver || di;
        (this.resizeObserver = new n(function () {
          r && t.recalculate();
        })),
          this.resizeObserver.observe(this.el),
          this.resizeObserver.observe(this.contentEl),
          e.requestAnimationFrame(function () {
            r = !0;
          }),
          (this.mutationObserver = new e.MutationObserver(this.recalculate)),
          this.mutationObserver.observe(this.contentEl, {
            childList: !0,
            subtree: !0,
            characterData: !0,
          });
      }),
      (e.recalculate = function () {
        var t = $i(this.el);
        (this.elStyles = t.getComputedStyle(this.el)),
          (this.isRtl = "rtl" === this.elStyles.direction);
        var e = this.heightAutoObserverEl.offsetHeight <= 1,
          r = this.heightAutoObserverEl.offsetWidth <= 1,
          n = this.contentEl.offsetWidth,
          i = this.contentWrapperEl.offsetWidth,
          o = this.elStyles.overflowX,
          s = this.elStyles.overflowY;
        (this.contentEl.style.padding =
          this.elStyles.paddingTop +
          " " +
          this.elStyles.paddingRight +
          " " +
          this.elStyles.paddingBottom +
          " " +
          this.elStyles.paddingLeft),
          (this.wrapperEl.style.margin =
            "-" +
            this.elStyles.paddingTop +
            " -" +
            this.elStyles.paddingRight +
            " -" +
            this.elStyles.paddingBottom +
            " -" +
            this.elStyles.paddingLeft);
        var a = this.contentEl.scrollHeight,
          c = this.contentEl.scrollWidth;
        (this.contentWrapperEl.style.height = e ? "auto" : "100%"),
          (this.placeholderEl.style.width = r ? n + "px" : "auto"),
          (this.placeholderEl.style.height = a + "px");
        var l = this.contentWrapperEl.offsetHeight;
        (this.axis.x.isOverflowing = c > n),
          (this.axis.y.isOverflowing = a > l),
          (this.axis.x.isOverflowing =
            "hidden" !== o && this.axis.x.isOverflowing),
          (this.axis.y.isOverflowing =
            "hidden" !== s && this.axis.y.isOverflowing),
          (this.axis.x.forceVisible =
            "x" === this.options.forceVisible ||
            !0 === this.options.forceVisible),
          (this.axis.y.forceVisible =
            "y" === this.options.forceVisible ||
            !0 === this.options.forceVisible),
          this.hideNativeScrollbar();
        var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
          f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
        (this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f),
          (this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u),
          (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
          (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
          (this.axis.x.scrollbar.el.style.width =
            this.axis.x.scrollbar.size + "px"),
          (this.axis.y.scrollbar.el.style.height =
            this.axis.y.scrollbar.size + "px"),
          this.positionScrollbar("x"),
          this.positionScrollbar("y"),
          this.toggleTrackVisibility("x"),
          this.toggleTrackVisibility("y");
      }),
      (e.getScrollbarSize = function (t) {
        if ((void 0 === t && (t = "y"), !this.axis[t].isOverflowing)) return 0;
        var e,
          r = this.contentEl[this.axis[t].scrollSizeAttr],
          n = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
          i = n / r;
        return (
          (e = Math.max(~~(i * n), this.options.scrollbarMinSize)),
          this.options.scrollbarMaxSize &&
            (e = Math.min(e, this.options.scrollbarMaxSize)),
          e
        );
      }),
      (e.positionScrollbar = function (e) {
        if ((void 0 === e && (e = "y"), this.axis[e].isOverflowing)) {
          var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
            n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
            i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
            o = this.axis[e].scrollbar,
            s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
            a =
              (s =
                "x" === e &&
                this.isRtl &&
                t.getRtlHelpers().isRtlScrollingInverted
                  ? -s
                  : s) /
              (r - i),
            c = ~~((n - o.size) * a);
          (c =
            "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted
              ? c + (n - o.size)
              : c),
            (o.el.style.transform =
              "x" === e
                ? "translate3d(" + c + "px, 0, 0)"
                : "translate3d(0, " + c + "px, 0)");
        }
      }),
      (e.toggleTrackVisibility = function (t) {
        void 0 === t && (t = "y");
        var e = this.axis[t].track.el,
          r = this.axis[t].scrollbar.el;
        this.axis[t].isOverflowing || this.axis[t].forceVisible
          ? ((e.style.visibility = "visible"),
            (this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll"))
          : ((e.style.visibility = "hidden"),
            (this.contentWrapperEl.style[this.axis[t].overflowAttr] =
              "hidden")),
          this.axis[t].isOverflowing
            ? (r.style.display = "block")
            : (r.style.display = "none");
      }),
      (e.hideNativeScrollbar = function () {
        (this.offsetEl.style[this.isRtl ? "left" : "right"] =
          this.axis.y.isOverflowing || this.axis.y.forceVisible
            ? "-" + this.scrollbarWidth + "px"
            : 0),
          (this.offsetEl.style.bottom =
            this.axis.x.isOverflowing || this.axis.x.forceVisible
              ? "-" + this.scrollbarWidth + "px"
              : 0);
      }),
      (e.onMouseMoveForAxis = function (t) {
        void 0 === t && (t = "y"),
          (this.axis[t].track.rect =
            this.axis[t].track.el.getBoundingClientRect()),
          (this.axis[t].scrollbar.rect =
            this.axis[t].scrollbar.el.getBoundingClientRect()),
          this.isWithinBounds(this.axis[t].scrollbar.rect)
            ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover)
            : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),
          this.isWithinBounds(this.axis[t].track.rect)
            ? (this.showScrollbar(t),
              this.axis[t].track.el.classList.add(this.classNames.hover))
            : this.axis[t].track.el.classList.remove(this.classNames.hover);
      }),
      (e.onMouseLeaveForAxis = function (t) {
        void 0 === t && (t = "y"),
          this.axis[t].track.el.classList.remove(this.classNames.hover),
          this.axis[t].scrollbar.el.classList.remove(this.classNames.hover);
      }),
      (e.showScrollbar = function (t) {
        void 0 === t && (t = "y");
        var e = this.axis[t].scrollbar.el;
        this.axis[t].isVisible ||
          (e.classList.add(this.classNames.visible),
          (this.axis[t].isVisible = !0)),
          this.options.autoHide && this.hideScrollbars();
      }),
      (e.onDragStart = function (t, e) {
        void 0 === e && (e = "y");
        var r = Xi(this.el),
          n = $i(this.el),
          i = this.axis[e].scrollbar,
          o = "y" === e ? t.pageY : t.pageX;
        (this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr]),
          (this.draggedAxis = e),
          this.el.classList.add(this.classNames.dragging),
          r.addEventListener("mousemove", this.drag, !0),
          r.addEventListener("mouseup", this.onEndDrag, !0),
          null === this.removePreventClickId
            ? (r.addEventListener("click", this.preventClick, !0),
              r.addEventListener("dblclick", this.preventClick, !0))
            : (n.clearTimeout(this.removePreventClickId),
              (this.removePreventClickId = null));
      }),
      (e.onTrackClick = function (t, e) {
        var r = this;
        if ((void 0 === e && (e = "y"), this.options.clickOnTrack)) {
          var n = $i(this.el);
          this.axis[e].scrollbar.rect =
            this.axis[e].scrollbar.el.getBoundingClientRect();
          var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
            o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
            s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
            a = ("y" === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
            c = -1 === a ? s - o : s + o;
          !(function t() {
            var i, o;
            -1 === a
              ? s > c &&
                ((s -= 40),
                r.contentWrapperEl.scrollTo(
                  (((i = {})[r.axis[e].offsetAttr] = s), i)
                ),
                n.requestAnimationFrame(t))
              : s < c &&
                ((s += 40),
                r.contentWrapperEl.scrollTo(
                  (((o = {})[r.axis[e].offsetAttr] = s), o)
                ),
                n.requestAnimationFrame(t));
          })();
        }
      }),
      (e.getContentElement = function () {
        return this.contentEl;
      }),
      (e.getScrollElement = function () {
        return this.contentWrapperEl;
      }),
      (e.getScrollbarWidth = function () {
        try {
          return "none" ===
            getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
              .display ||
            "scrollbarWidth" in document.documentElement.style ||
            "-ms-overflow-style" in document.documentElement.style
            ? 0
            : gi();
        } catch (t) {
          return gi();
        }
      }),
      (e.removeListeners = function () {
        var t = this,
          e = $i(this.el);
        this.options.autoHide &&
          this.el.removeEventListener("mouseenter", this.onMouseEnter),
          ["mousedown", "click", "dblclick"].forEach(function (e) {
            t.el.removeEventListener(e, t.onPointerEvent, !0);
          }),
          ["touchstart", "touchend", "touchmove"].forEach(function (e) {
            t.el.removeEventListener(e, t.onPointerEvent, {
              capture: !0,
              passive: !0,
            });
          }),
          this.el.removeEventListener("mousemove", this.onMouseMove),
          this.el.removeEventListener("mouseleave", this.onMouseLeave),
          this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
          e.removeEventListener("resize", this.onWindowResize),
          this.mutationObserver.disconnect(),
          this.resizeObserver.disconnect(),
          this.recalculate.cancel(),
          this.onMouseMove.cancel(),
          this.hideScrollbars.cancel(),
          this.onWindowResize.cancel();
      }),
      (e.unMount = function () {
        this.removeListeners(), t.instances.delete(this.el);
      }),
      (e.isWithinBounds = function (t) {
        return (
          this.mouseX >= t.left &&
          this.mouseX <= t.left + t.width &&
          this.mouseY >= t.top &&
          this.mouseY <= t.top + t.height
        );
      }),
      (e.findChild = function (t, e) {
        var r =
          t.matches ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector ||
          t.msMatchesSelector;
        return Array.prototype.filter.call(t.children, function (t) {
          return r.call(t, e);
        })[0];
      }),
      t
    );
  })();
  return (
    (Yi.defaultOptions = {
      autoHide: !0,
      forceVisible: !1,
      clickOnTrack: !0,
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging",
      },
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      timeout: 1e3,
    }),
    (Yi.instances = new WeakMap()),
    (Yi.initDOMLoadedElements = function () {
      document.removeEventListener(
        "DOMContentLoaded",
        this.initDOMLoadedElements
      ),
        window.removeEventListener("load", this.initDOMLoadedElements),
        Array.prototype.forEach.call(
          document.querySelectorAll(
            '[data-simplebar]:not([data-simplebar="init"])'
          ),
          function (t) {
            Yi.instances.has(t) || new Yi(t, qi(t.attributes));
          }
        );
    }),
    (Yi.removeObserver = function () {
      this.globalObserver.disconnect();
    }),
    (Yi.initHtmlApi = function () {
      (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
        "undefined" != typeof MutationObserver &&
          ((this.globalObserver = new MutationObserver(Yi.handleMutations)),
          this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0,
          })),
        "complete" === document.readyState ||
        ("loading" !== document.readyState &&
          !document.documentElement.doScroll)
          ? window.setTimeout(this.initDOMLoadedElements)
          : (document.addEventListener(
              "DOMContentLoaded",
              this.initDOMLoadedElements
            ),
            window.addEventListener("load", this.initDOMLoadedElements));
    }),
    (Yi.handleMutations = function (t) {
      t.forEach(function (t) {
        Array.prototype.forEach.call(t.addedNodes, function (t) {
          1 === t.nodeType &&
            (t.hasAttribute("data-simplebar")
              ? !Yi.instances.has(t) && new Yi(t, qi(t.attributes))
              : Array.prototype.forEach.call(
                  t.querySelectorAll(
                    '[data-simplebar]:not([data-simplebar="init"])'
                  ),
                  function (t) {
                    !Yi.instances.has(t) && new Yi(t, qi(t.attributes));
                  }
                ));
        }),
          Array.prototype.forEach.call(t.removedNodes, function (t) {
            1 === t.nodeType &&
              (t.hasAttribute('[data-simplebar="init"]')
                ? Yi.instances.has(t) && Yi.instances.get(t).unMount()
                : Array.prototype.forEach.call(
                    t.querySelectorAll('[data-simplebar="init"]'),
                    function (t) {
                      Yi.instances.has(t) && Yi.instances.get(t).unMount();
                    }
                  ));
          });
      });
    }),
    (Yi.getOptions = qi),
    Yt && Yi.initHtmlApi(),
    Yi
  );
});

!(function (t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define([], function () {
        return (t.Waves = e.call(t)), t.Waves;
      })
    : "object" == typeof exports
    ? (module.exports = e.call(t))
    : (t.Waves = e.call(t));
})("object" == typeof global ? global : this, function () {
  "use strict";
  function t(t) {
    return null !== t && t === t.window;
  }
  function e(e) {
    return t(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  function n(t) {
    var e = typeof t;
    return "function" === e || ("object" === e && !!t);
  }
  function o(t) {
    return n(t) && t.nodeType > 0;
  }
  function a(t) {
    var e = f.call(t);
    return "[object String]" === e
      ? d(t)
      : n(t) &&
        /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e) &&
        t.hasOwnProperty("length")
      ? t
      : o(t)
      ? [t]
      : [];
  }
  function i(t) {
    var n,
      o,
      a = { top: 0, left: 0 },
      i = t && t.ownerDocument;
    return (
      (n = i.documentElement),
      void 0 !== t.getBoundingClientRect && (a = t.getBoundingClientRect()),
      (o = e(i)),
      {
        top: a.top + o.pageYOffset - n.clientTop,
        left: a.left + o.pageXOffset - n.clientLeft,
      }
    );
  }
  function r(t) {
    var e = "";
    for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
    return e;
  }
  function s(t, e, n) {
    if (n) {
      n.classList.remove("waves-rippling");
      var o = n.getAttribute("data-x"),
        a = n.getAttribute("data-y"),
        i = n.getAttribute("data-scale"),
        s = n.getAttribute("data-translate"),
        u = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
      u < 0 && (u = 0), "mousemove" === t.type && (u = 150);
      var c = "mousemove" === t.type ? 2500 : v.duration;
      setTimeout(function () {
        var t = {
          top: a + "px",
          left: o + "px",
          opacity: "0",
          "-webkit-transition-duration": c + "ms",
          "-moz-transition-duration": c + "ms",
          "-o-transition-duration": c + "ms",
          "transition-duration": c + "ms",
          "-webkit-transform": i + " " + s,
          "-moz-transform": i + " " + s,
          "-ms-transform": i + " " + s,
          "-o-transform": i + " " + s,
          transform: i + " " + s,
        };
        n.setAttribute("style", r(t)),
          setTimeout(function () {
            try {
              e.removeChild(n);
            } catch (t) {
              return !1;
            }
          }, c);
      }, u);
    }
  }
  function u(t) {
    if (!1 === h.allowEvent(t)) return null;
    for (var e = null, n = t.target || t.srcElement; n.parentElement; ) {
      if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
        e = n;
        break;
      }
      n = n.parentElement;
    }
    return e;
  }
  function c(t) {
    var e = u(t);
    if (null !== e) {
      if (
        e.disabled ||
        e.getAttribute("disabled") ||
        e.classList.contains("disabled")
      )
        return;
      if ((h.registerEvent(t), "touchstart" === t.type && v.delay)) {
        var n = !1,
          o = setTimeout(function () {
            (o = null), v.show(t, e);
          }, v.delay),
          a = function (a) {
            o && (clearTimeout(o), (o = null), v.show(t, e)),
              n || ((n = !0), v.hide(a, e)),
              r();
          },
          i = function (t) {
            o && (clearTimeout(o), (o = null)), a(t), r();
          };
        e.addEventListener("touchmove", i, !1),
          e.addEventListener("touchend", a, !1),
          e.addEventListener("touchcancel", a, !1);
        var r = function () {
          e.removeEventListener("touchmove", i),
            e.removeEventListener("touchend", a),
            e.removeEventListener("touchcancel", a);
        };
      } else
        v.show(t, e),
          m &&
            (e.addEventListener("touchend", v.hide, !1),
            e.addEventListener("touchcancel", v.hide, !1)),
          e.addEventListener("mouseup", v.hide, !1),
          e.addEventListener("mouseleave", v.hide, !1);
    }
  }
  var l = l || {},
    d = document.querySelectorAll.bind(document),
    f = Object.prototype.toString,
    m = "ontouchstart" in window,
    v = {
      duration: 750,
      delay: 200,
      show: function (t, e, n) {
        if (2 === t.button) return !1;
        e = e || this;
        var o = document.createElement("div");
        (o.className = "waves-ripple waves-rippling"), e.appendChild(o);
        var a = i(e),
          s = 0,
          u = 0;
        "touches" in t && t.touches.length
          ? ((s = t.touches[0].pageY - a.top),
            (u = t.touches[0].pageX - a.left))
          : ((s = t.pageY - a.top), (u = t.pageX - a.left)),
          (u = u >= 0 ? u : 0),
          (s = s >= 0 ? s : 0);
        var c = "scale(" + (e.clientWidth / 100) * 3 + ")",
          l = "translate(0,0)";
        n && (l = "translate(" + n.x + "px, " + n.y + "px)"),
          o.setAttribute("data-hold", Date.now()),
          o.setAttribute("data-x", u),
          o.setAttribute("data-y", s),
          o.setAttribute("data-scale", c),
          o.setAttribute("data-translate", l);
        var d = { top: s + "px", left: u + "px" };
        o.classList.add("waves-notransition"),
          o.setAttribute("style", r(d)),
          o.classList.remove("waves-notransition"),
          (d["-webkit-transform"] = c + " " + l),
          (d["-moz-transform"] = c + " " + l),
          (d["-ms-transform"] = c + " " + l),
          (d["-o-transform"] = c + " " + l),
          (d.transform = c + " " + l),
          (d.opacity = "1");
        var f = "mousemove" === t.type ? 2500 : v.duration;
        (d["-webkit-transition-duration"] = f + "ms"),
          (d["-moz-transition-duration"] = f + "ms"),
          (d["-o-transition-duration"] = f + "ms"),
          (d["transition-duration"] = f + "ms"),
          o.setAttribute("style", r(d));
      },
      hide: function (t, e) {
        for (
          var n = (e = e || this).getElementsByClassName("waves-rippling"),
            o = 0,
            a = n.length;
          o < a;
          o++
        )
          s(t, e, n[o]);
        m &&
          (e.removeEventListener("touchend", v.hide),
          e.removeEventListener("touchcancel", v.hide)),
          e.removeEventListener("mouseup", v.hide),
          e.removeEventListener("mouseleave", v.hide);
      },
    },
    p = {
      input: function (t) {
        var e = t.parentNode;
        if (
          "i" !== e.tagName.toLowerCase() ||
          !e.classList.contains("waves-effect")
        ) {
          var n = document.createElement("i");
          (n.className = t.className + " waves-input-wrapper"),
            (t.className = "waves-button-input"),
            e.replaceChild(n, t),
            n.appendChild(t);
          var o = window.getComputedStyle(t, null),
            a = o.color,
            i = o.backgroundColor;
          n.setAttribute("style", "color:" + a + ";background:" + i),
            t.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      img: function (t) {
        var e = t.parentNode;
        if (
          "i" !== e.tagName.toLowerCase() ||
          !e.classList.contains("waves-effect")
        ) {
          var n = document.createElement("i");
          e.replaceChild(n, t), n.appendChild(t);
        }
      },
    },
    h = {
      touches: 0,
      allowEvent: function (t) {
        var e = !0;
        return (
          /^(mousedown|mousemove)$/.test(t.type) && h.touches && (e = !1), e
        );
      },
      registerEvent: function (t) {
        var e = t.type;
        "touchstart" === e
          ? (h.touches += 1)
          : /^(touchend|touchcancel)$/.test(e) &&
            setTimeout(function () {
              h.touches && (h.touches -= 1);
            }, 500);
      },
    };
  return (
    (l.init = function (t) {
      var e = document.body;
      "duration" in (t = t || {}) && (v.duration = t.duration),
        "delay" in t && (v.delay = t.delay),
        m &&
          (e.addEventListener("touchstart", c, !1),
          e.addEventListener("touchcancel", h.registerEvent, !1),
          e.addEventListener("touchend", h.registerEvent, !1)),
        e.addEventListener("mousedown", c, !1);
    }),
    (l.attach = function (t, e) {
      (t = a(t)),
        "[object Array]" === f.call(e) && (e = e.join(" ")),
        (e = e ? " " + e : "");
      for (var n, o, i = 0, r = t.length; i < r; i++)
        (o = (n = t[i]).tagName.toLowerCase()),
          -1 !== ["input", "img"].indexOf(o) &&
            (p[o](n), (n = n.parentElement)),
          -1 === n.className.indexOf("waves-effect") &&
            (n.className += " waves-effect" + e);
    }),
    (l.ripple = function (t, e) {
      var n = (t = a(t)).length;
      if (
        ((e = e || {}),
        (e.wait = e.wait || 0),
        (e.position = e.position || null),
        n)
      )
        for (
          var o, r, s, u = {}, c = 0, l = { type: "mousedown", button: 1 };
          c < n;
          c++
        )
          if (
            ((o = t[c]),
            (r = e.position || { x: o.clientWidth / 2, y: o.clientHeight / 2 }),
            (s = i(o)),
            (u.x = s.left + r.x),
            (u.y = s.top + r.y),
            (l.pageX = u.x),
            (l.pageY = u.y),
            v.show(l, o),
            e.wait >= 0 && null !== e.wait)
          ) {
            var d = { type: "mouseup", button: 1 };
            setTimeout(
              (function (t, e) {
                return function () {
                  v.hide(t, e);
                };
              })(d, o),
              e.wait
            );
          }
    }),
    (l.calm = function (t) {
      for (
        var e = { type: "mouseup", button: 1 }, n = 0, o = (t = a(t)).length;
        n < o;
        n++
      )
        v.hide(e, t[n]);
    }),
    (l.displayEffect = function (t) {
      l.init(t);
    }),
    l
  );
});
//# sourceMappingURL=waves.min.js.map
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.Context.refreshAll();
      for (var e in i) i[e].enabled = !0;
      return this;
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        n.windowContext ||
          ((n.windowContext = !0), (n.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s];
            if (null !== a.triggerPoint) {
              var l = o.oldScroll < a.triggerPoint,
                h = o.newScroll >= a.triggerPoint,
                p = l && h,
                u = !l && !h;
              (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
            }
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = Math.floor(y + l - f)),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();
(function ($) {
  "use strict";
  $.fn.counterUp = function (options) {
    var settings = $.extend(
        {
          time: 400,
          delay: 10,
          offset: 100,
          beginAt: 0,
          formatter: false,
          context: "window",
          callback: function () {},
        },
        options
      ),
      s;
    return this.each(function () {
      var $this = $(this),
        counter = {
          time: $(this).data("counterup-time") || settings.time,
          delay: $(this).data("counterup-delay") || settings.delay,
          offset: $(this).data("counterup-offset") || settings.offset,
          beginAt: $(this).data("counterup-beginat") || settings.beginAt,
          context: $(this).data("counterup-context") || settings.context,
        };
      var counterUpper = function () {
        var nums = [];
        var divisions = counter.time / counter.delay;
        var num = $(this).attr("data-num")
          ? $(this).attr("data-num")
          : $this.text();
        var isComma = /[0-9]+,[0-9]+/.test(num);
        num = num.replace(/,/g, "");
        var decimalPlaces = (num.split(".")[1] || []).length;
        if (counter.beginAt > num) counter.beginAt = num;
        var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);
        if (isTime) {
          var times = num.split(":"),
            m = 1;
          s = 0;
          while (times.length > 0) {
            s += m * parseInt(times.pop(), 10);
            m *= 60;
          }
        }
        for (var i = divisions; i >= (counter.beginAt / num) * divisions; i--) {
          var newNum = parseFloat((num / divisions) * i).toFixed(decimalPlaces);
          if (isTime) {
            newNum = parseInt((s / divisions) * i);
            var hours = parseInt(newNum / 3600) % 24;
            var minutes = parseInt(newNum / 60) % 60;
            var seconds = parseInt(newNum % 60, 10);
            newNum =
              (hours < 10 ? "0" + hours : hours) +
              ":" +
              (minutes < 10 ? "0" + minutes : minutes) +
              ":" +
              (seconds < 10 ? "0" + seconds : seconds);
          }
          if (isComma) {
            while (/(\d+)(\d{3})/.test(newNum.toString())) {
              newNum = newNum
                .toString()
                .replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
            }
          }
          if (settings.formatter) {
            newNum = settings.formatter.call(this, newNum);
          }
          nums.unshift(newNum);
        }
        $this.data("counterup-nums", nums);
        $this.text(counter.beginAt);
        var f = function () {
          if (!$this.data("counterup-nums")) {
            settings.callback.call(this);
            return;
          }
          $this.html($this.data("counterup-nums").shift());
          if ($this.data("counterup-nums").length) {
            setTimeout($this.data("counterup-func"), counter.delay);
          } else {
            $this.data("counterup-nums", null);
            $this.data("counterup-func", null);
            settings.callback.call(this);
          }
        };
        $this.data("counterup-func", f);
        setTimeout($this.data("counterup-func"), counter.delay);
      };
      $this.waypoint(
        function (direction) {
          counterUpper();
          this.destroy();
        },
        { offset: counter.offset + "%", context: counter.context }
      );
    });
  };
})(jQuery);

!(function (e, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports.feather = n())
    : (e.feather = n());
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    var n = {};
    function i(t) {
      if (n[t]) return n[t].exports;
      var l = (n[t] = { i: t, l: !1, exports: {} });
      return e[t].call(l.exports, l, l.exports, i), (l.l = !0), l.exports;
    }
    return (
      (i.m = e),
      (i.c = n),
      (i.d = function (e, n, t) {
        i.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: t,
          });
      }),
      (i.r = function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return i.d(n, "a", n), n;
      }),
      (i.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (i.p = ""),
      i((i.s = 80))
    );
  })([
    function (e, n, i) {
      (function (n) {
        var i = "object",
          t = function (e) {
            return e && e.Math == Math && e;
          };
        e.exports =
          t(typeof globalThis == i && globalThis) ||
          t(typeof window == i && window) ||
          t(typeof self == i && self) ||
          t(typeof n == i && n) ||
          Function("return this")();
      }.call(this, i(75)));
    },
    function (e, n) {
      var i = {}.hasOwnProperty;
      e.exports = function (e, n) {
        return i.call(e, n);
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(11),
        r = i(33),
        o = i(62),
        a = t.Symbol,
        c = l("wks");
      e.exports = function (e) {
        return c[e] || (c[e] = (o && a[e]) || (o ? a : r)("Symbol." + e));
      };
    },
    function (e, n, i) {
      var t = i(6);
      e.exports = function (e) {
        if (!t(e)) throw TypeError(String(e) + " is not an object");
        return e;
      };
    },
    function (e, n) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(7),
        r = i(10);
      e.exports = t
        ? function (e, n, i) {
            return l.f(e, n, r(1, i));
          }
        : function (e, n, i) {
            return (e[n] = i), e;
          };
    },
    function (e, n) {
      e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(35),
        r = i(3),
        o = i(18),
        a = Object.defineProperty;
      n.f = t
        ? a
        : function (e, n, i) {
            if ((r(e), (n = o(n, !0)), r(i), l))
              try {
                return a(e, n, i);
              } catch (e) {}
            if ("get" in i || "set" in i)
              throw TypeError("Accessors not supported");
            return "value" in i && (e[n] = i.value), e;
          };
    },
    function (e, n, i) {
      var t = i(4);
      e.exports = !t(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    function (e, n) {
      e.exports = {};
    },
    function (e, n) {
      e.exports = function (e, n) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: n,
        };
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(19),
        r = i(17),
        o = t["__core-js_shared__"] || l("__core-js_shared__", {});
      (e.exports = function (e, n) {
        return o[e] || (o[e] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: "3.1.3",
        mode: r ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t = o(i(43)),
        l = o(i(41)),
        r = o(i(40));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n.default = Object.keys(l.default)
        .map(function (e) {
          return new t.default(e, l.default[e], r.default[e]);
        })
        .reduce(function (e, n) {
          return (e[n.name] = n), e;
        }, {});
    },
    function (e, n) {
      e.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    function (e, n, i) {
      var t = i(72),
        l = i(20);
      e.exports = function (e) {
        return t(l(e));
      };
    },
    function (e, n) {
      e.exports = {};
    },
    function (e, n, i) {
      var t = i(11),
        l = i(33),
        r = t("keys");
      e.exports = function (e) {
        return r[e] || (r[e] = l(e));
      };
    },
    function (e, n) {
      e.exports = !1;
    },
    function (e, n, i) {
      var t = i(6);
      e.exports = function (e, n) {
        if (!t(e)) return e;
        var i, l;
        if (n && "function" == typeof (i = e.toString) && !t((l = i.call(e))))
          return l;
        if ("function" == typeof (i = e.valueOf) && !t((l = i.call(e))))
          return l;
        if (!n && "function" == typeof (i = e.toString) && !t((l = i.call(e))))
          return l;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(5);
      e.exports = function (e, n) {
        try {
          l(t, e, n);
        } catch (i) {
          t[e] = n;
        }
        return n;
      };
    },
    function (e, n) {
      e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on " + e);
        return e;
      };
    },
    function (e, n) {
      var i = Math.ceil,
        t = Math.floor;
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? t : i)(e);
      };
    },
    function (e, n, i) {
      var t;
      /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      !(function () {
        "use strict";
        var i = (function () {
          function e() {}
          function n(e, n) {
            for (var i = n.length, t = 0; t < i; ++t) l(e, n[t]);
          }
          e.prototype = Object.create(null);
          var i = {}.hasOwnProperty;
          var t = /\s+/;
          function l(e, l) {
            if (l) {
              var r = typeof l;
              "string" === r
                ? (function (e, n) {
                    for (var i = n.split(t), l = i.length, r = 0; r < l; ++r)
                      e[i[r]] = !0;
                  })(e, l)
                : Array.isArray(l)
                ? n(e, l)
                : "object" === r
                ? (function (e, n) {
                    for (var t in n) i.call(n, t) && (e[t] = !!n[t]);
                  })(e, l)
                : "number" === r &&
                  (function (e, n) {
                    e[n] = !0;
                  })(e, l);
            }
          }
          return function () {
            for (var i = arguments.length, t = Array(i), l = 0; l < i; l++)
              t[l] = arguments[l];
            var r = new e();
            n(r, t);
            var o = [];
            for (var a in r) r[a] && o.push(a);
            return o.join(" ");
          };
        })();
        void 0 !== e && e.exports
          ? (e.exports = i)
          : void 0 ===
              (t = function () {
                return i;
              }.apply(n, [])) || (e.exports = t);
      })();
    },
    function (e, n, i) {
      var t = i(7).f,
        l = i(1),
        r = i(2)("toStringTag");
      e.exports = function (e, n, i) {
        e &&
          !l((e = i ? e : e.prototype), r) &&
          t(e, r, { configurable: !0, value: n });
      };
    },
    function (e, n, i) {
      var t = i(20);
      e.exports = function (e) {
        return Object(t(e));
      };
    },
    function (e, n, i) {
      var t = i(1),
        l = i(24),
        r = i(16),
        o = i(63),
        a = r("IE_PROTO"),
        c = Object.prototype;
      e.exports = o
        ? Object.getPrototypeOf
        : function (e) {
            return (
              (e = l(e)),
              t(e, a)
                ? e[a]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? c
                : null
            );
          };
    },
    function (e, n, i) {
      "use strict";
      var t,
        l,
        r,
        o = i(25),
        a = i(5),
        c = i(1),
        p = i(2),
        y = i(17),
        h = p("iterator"),
        x = !1;
      [].keys &&
        ("next" in (r = [].keys())
          ? (l = o(o(r))) !== Object.prototype && (t = l)
          : (x = !0)),
        void 0 == t && (t = {}),
        y ||
          c(t, h) ||
          a(t, h, function () {
            return this;
          }),
        (e.exports = { IteratorPrototype: t, BUGGY_SAFARI_ITERATORS: x });
    },
    function (e, n, i) {
      var t = i(21),
        l = Math.min;
      e.exports = function (e) {
        return e > 0 ? l(t(e), 9007199254740991) : 0;
      };
    },
    function (e, n, i) {
      var t = i(1),
        l = i(14),
        r = i(68),
        o = i(15),
        a = r(!1);
      e.exports = function (e, n) {
        var i,
          r = l(e),
          c = 0,
          p = [];
        for (i in r) !t(o, i) && t(r, i) && p.push(i);
        for (; n.length > c; ) t(r, (i = n[c++])) && (~a(p, i) || p.push(i));
        return p;
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(11),
        r = i(5),
        o = i(1),
        a = i(19),
        c = i(36),
        p = i(37),
        y = p.get,
        h = p.enforce,
        x = String(c).split("toString");
      l("inspectSource", function (e) {
        return c.call(e);
      }),
        (e.exports = function (e, n, i, l) {
          var c = !!l && !!l.unsafe,
            p = !!l && !!l.enumerable,
            y = !!l && !!l.noTargetGet;
          "function" == typeof i &&
            ("string" != typeof n || o(i, "name") || r(i, "name", n),
            (h(i).source = x.join("string" == typeof n ? n : ""))),
            e !== t
              ? (c ? !y && e[n] && (p = !0) : delete e[n],
                p ? (e[n] = i) : r(e, n, i))
              : p
              ? (e[n] = i)
              : a(n, i);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && y(this).source) || c.call(this);
        });
    },
    function (e, n) {
      var i = {}.toString;
      e.exports = function (e) {
        return i.call(e).slice(8, -1);
      };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(73),
        r = i(10),
        o = i(14),
        a = i(18),
        c = i(1),
        p = i(35),
        y = Object.getOwnPropertyDescriptor;
      n.f = t
        ? y
        : function (e, n) {
            if (((e = o(e)), (n = a(n, !0)), p))
              try {
                return y(e, n);
              } catch (e) {}
            if (c(e, n)) return r(!l.f.call(e, n), e[n]);
          };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(31).f,
        r = i(5),
        o = i(29),
        a = i(19),
        c = i(71),
        p = i(65);
      e.exports = function (e, n) {
        var i,
          y,
          h,
          x,
          s,
          u = e.target,
          d = e.global,
          f = e.stat;
        if ((i = d ? t : f ? t[u] || a(u, {}) : (t[u] || {}).prototype))
          for (y in n) {
            if (
              ((x = n[y]),
              (h = e.noTargetGet ? (s = l(i, y)) && s.value : i[y]),
              !p(d ? y : u + (f ? "." : "#") + y, e.forced) && void 0 !== h)
            ) {
              if (typeof x == typeof h) continue;
              c(x, h);
            }
            (e.sham || (h && h.sham)) && r(x, "sham", !0), o(i, y, x, e);
          }
      };
    },
    function (e, n) {
      var i = 0,
        t = Math.random();
      e.exports = function (e) {
        return "Symbol(".concat(
          void 0 === e ? "" : e,
          ")_",
          (++i + t).toString(36)
        );
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(6),
        r = t.document,
        o = l(r) && l(r.createElement);
      e.exports = function (e) {
        return o ? r.createElement(e) : {};
      };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(4),
        r = i(34);
      e.exports =
        !t &&
        !l(function () {
          return (
            7 !=
            Object.defineProperty(r("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (e, n, i) {
      var t = i(11);
      e.exports = t("native-function-to-string", Function.toString);
    },
    function (e, n, i) {
      var t,
        l,
        r,
        o = i(76),
        a = i(0),
        c = i(6),
        p = i(5),
        y = i(1),
        h = i(16),
        x = i(15),
        s = a.WeakMap;
      if (o) {
        var u = new s(),
          d = u.get,
          f = u.has,
          g = u.set;
        (t = function (e, n) {
          return g.call(u, e, n), n;
        }),
          (l = function (e) {
            return d.call(u, e) || {};
          }),
          (r = function (e) {
            return f.call(u, e);
          });
      } else {
        var v = h("state");
        (x[v] = !0),
          (t = function (e, n) {
            return p(e, v, n), n;
          }),
          (l = function (e) {
            return y(e, v) ? e[v] : {};
          }),
          (r = function (e) {
            return y(e, v);
          });
      }
      e.exports = {
        set: t,
        get: l,
        has: r,
        enforce: function (e) {
          return r(e) ? l(e) : t(e, {});
        },
        getterFor: function (e) {
          return function (n) {
            var i;
            if (!c(n) || (i = l(n)).type !== e)
              throw TypeError("Incompatible receiver, " + e + " required");
            return i;
          };
        },
      };
    },
    function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var i = arguments[n];
              for (var t in i)
                Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
            }
            return e;
          },
        l = o(i(22)),
        r = o(i(12));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n.default = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ("undefined" == typeof document)
          throw new Error(
            "`feather.replace()` only works in a browser environment."
          );
        var n = document.querySelectorAll("[data-feather]");
        Array.from(n).forEach(function (n) {
          return (function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = (function (e) {
                return Array.from(e.attributes).reduce(function (e, n) {
                  return (e[n.name] = n.value), e;
                }, {});
              })(e),
              o = i["data-feather"];
            delete i["data-feather"];
            var a = r.default[o].toSvg(
                t({}, n, i, { class: (0, l.default)(n.class, i.class) })
              ),
              c = new DOMParser()
                .parseFromString(a, "image/svg+xml")
                .querySelector("svg");
            e.parentNode.replaceChild(c, e);
          })(n, e);
        });
      };
    },
    function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t,
        l = i(12),
        r = (t = l) && t.__esModule ? t : { default: t };
      n.default = function (e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          (console.warn(
            "feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."
          ),
          !e)
        )
          throw new Error(
            "The required `key` (icon name) parameter is missing."
          );
        if (!r.default[e])
          throw new Error(
            "No icon matching '" +
              e +
              "'. See the complete list of icons at https://feathericons.com"
          );
        return r.default[e].toSvg(n);
      };
    },
    function (e) {
      e.exports = {
        activity: ["pulse", "health", "action", "motion"],
        airplay: ["stream", "cast", "mirroring"],
        "alert-circle": ["warning", "alert", "danger"],
        "alert-octagon": ["warning", "alert", "danger"],
        "alert-triangle": ["warning", "alert", "danger"],
        "align-center": ["text alignment", "center"],
        "align-justify": ["text alignment", "justified"],
        "align-left": ["text alignment", "left"],
        "align-right": ["text alignment", "right"],
        anchor: [],
        archive: ["index", "box"],
        "at-sign": ["mention", "at", "email", "message"],
        award: ["achievement", "badge"],
        aperture: ["camera", "photo"],
        "bar-chart": ["statistics", "diagram", "graph"],
        "bar-chart-2": ["statistics", "diagram", "graph"],
        battery: ["power", "electricity"],
        "battery-charging": ["power", "electricity"],
        bell: ["alarm", "notification", "sound"],
        "bell-off": ["alarm", "notification", "silent"],
        bluetooth: ["wireless"],
        "book-open": ["read", "library"],
        book: ["read", "dictionary", "booklet", "magazine", "library"],
        bookmark: ["read", "clip", "marker", "tag"],
        box: ["cube"],
        briefcase: ["work", "bag", "baggage", "folder"],
        calendar: ["date"],
        camera: ["photo"],
        cast: ["chromecast", "airplay"],
        circle: ["off", "zero", "record"],
        clipboard: ["copy"],
        clock: ["time", "watch", "alarm"],
        "cloud-drizzle": ["weather", "shower"],
        "cloud-lightning": ["weather", "bolt"],
        "cloud-rain": ["weather"],
        "cloud-snow": ["weather", "blizzard"],
        cloud: ["weather"],
        codepen: ["logo"],
        codesandbox: ["logo"],
        code: ["source", "programming"],
        coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
        columns: ["layout"],
        command: ["keyboard", "cmd", "terminal", "prompt"],
        compass: ["navigation", "safari", "travel", "direction"],
        copy: ["clone", "duplicate"],
        "corner-down-left": ["arrow", "return"],
        "corner-down-right": ["arrow"],
        "corner-left-down": ["arrow"],
        "corner-left-up": ["arrow"],
        "corner-right-down": ["arrow"],
        "corner-right-up": ["arrow"],
        "corner-up-left": ["arrow"],
        "corner-up-right": ["arrow"],
        cpu: ["processor", "technology"],
        "credit-card": ["purchase", "payment", "cc"],
        crop: ["photo", "image"],
        crosshair: ["aim", "target"],
        database: ["storage", "memory"],
        delete: ["remove"],
        disc: ["album", "cd", "dvd", "music"],
        "dollar-sign": ["currency", "money", "payment"],
        droplet: ["water"],
        edit: ["pencil", "change"],
        "edit-2": ["pencil", "change"],
        "edit-3": ["pencil", "change"],
        eye: ["view", "watch"],
        "eye-off": ["view", "watch", "hide", "hidden"],
        "external-link": ["outbound"],
        facebook: ["logo", "social"],
        "fast-forward": ["music"],
        figma: ["logo", "design", "tool"],
        "file-minus": ["delete", "remove", "erase"],
        "file-plus": ["add", "create", "new"],
        "file-text": ["data", "txt", "pdf"],
        film: ["movie", "video"],
        filter: ["funnel", "hopper"],
        flag: ["report"],
        "folder-minus": ["directory"],
        "folder-plus": ["directory"],
        folder: ["directory"],
        framer: ["logo", "design", "tool"],
        frown: ["emoji", "face", "bad", "sad", "emotion"],
        gift: ["present", "box", "birthday", "party"],
        "git-branch": ["code", "version control"],
        "git-commit": ["code", "version control"],
        "git-merge": ["code", "version control"],
        "git-pull-request": ["code", "version control"],
        github: ["logo", "version control"],
        gitlab: ["logo", "version control"],
        globe: ["world", "browser", "language", "translate"],
        "hard-drive": ["computer", "server", "memory", "data"],
        hash: ["hashtag", "number", "pound"],
        headphones: ["music", "audio", "sound"],
        heart: ["like", "love", "emotion"],
        "help-circle": ["question mark"],
        hexagon: ["shape", "node.js", "logo"],
        home: ["house", "living"],
        image: ["picture"],
        inbox: ["email"],
        instagram: ["logo", "camera"],
        key: ["password", "login", "authentication", "secure"],
        layers: ["stack"],
        layout: ["window", "webpage"],
        "life-bouy": ["help", "life ring", "support"],
        link: ["chain", "url"],
        "link-2": ["chain", "url"],
        linkedin: ["logo", "social media"],
        list: ["options"],
        lock: ["security", "password", "secure"],
        "log-in": ["sign in", "arrow", "enter"],
        "log-out": ["sign out", "arrow", "exit"],
        mail: ["email", "message"],
        "map-pin": ["location", "navigation", "travel", "marker"],
        map: ["location", "navigation", "travel"],
        maximize: ["fullscreen"],
        "maximize-2": ["fullscreen", "arrows", "expand"],
        meh: ["emoji", "face", "neutral", "emotion"],
        menu: ["bars", "navigation", "hamburger"],
        "message-circle": ["comment", "chat"],
        "message-square": ["comment", "chat"],
        "mic-off": ["record", "sound", "mute"],
        mic: ["record", "sound", "listen"],
        minimize: ["exit fullscreen", "close"],
        "minimize-2": ["exit fullscreen", "arrows", "close"],
        minus: ["subtract"],
        monitor: ["tv", "screen", "display"],
        moon: ["dark", "night"],
        "more-horizontal": ["ellipsis"],
        "more-vertical": ["ellipsis"],
        "mouse-pointer": ["arrow", "cursor"],
        move: ["arrows"],
        music: ["note"],
        navigation: ["location", "travel"],
        "navigation-2": ["location", "travel"],
        octagon: ["stop"],
        package: ["box", "container"],
        paperclip: ["attachment"],
        pause: ["music", "stop"],
        "pause-circle": ["music", "audio", "stop"],
        "pen-tool": ["vector", "drawing"],
        percent: ["discount"],
        "phone-call": ["ring"],
        "phone-forwarded": ["call"],
        "phone-incoming": ["call"],
        "phone-missed": ["call"],
        "phone-off": ["call", "mute"],
        "phone-outgoing": ["call"],
        phone: ["call"],
        play: ["music", "start"],
        "pie-chart": ["statistics", "diagram"],
        "play-circle": ["music", "start"],
        plus: ["add", "new"],
        "plus-circle": ["add", "new"],
        "plus-square": ["add", "new"],
        pocket: ["logo", "save"],
        power: ["on", "off"],
        printer: ["fax", "office", "device"],
        radio: ["signal"],
        "refresh-cw": ["synchronise", "arrows"],
        "refresh-ccw": ["arrows"],
        repeat: ["loop", "arrows"],
        rewind: ["music"],
        "rotate-ccw": ["arrow"],
        "rotate-cw": ["arrow"],
        rss: ["feed", "subscribe"],
        save: ["floppy disk"],
        scissors: ["cut"],
        search: ["find", "magnifier", "magnifying glass"],
        send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
        settings: ["cog", "edit", "gear", "preferences"],
        "share-2": ["network", "connections"],
        shield: ["security", "secure"],
        "shield-off": ["security", "insecure"],
        "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
        "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
        shuffle: ["music"],
        "skip-back": ["music"],
        "skip-forward": ["music"],
        slack: ["logo"],
        slash: ["ban", "no"],
        sliders: ["settings", "controls"],
        smartphone: ["cellphone", "device"],
        smile: ["emoji", "face", "happy", "good", "emotion"],
        speaker: ["audio", "music"],
        star: ["bookmark", "favorite", "like"],
        "stop-circle": ["media", "music"],
        sun: ["brightness", "weather", "light"],
        sunrise: ["weather", "time", "morning", "day"],
        sunset: ["weather", "time", "evening", "night"],
        tablet: ["device"],
        tag: ["label"],
        target: ["logo", "bullseye"],
        terminal: ["code", "command line", "prompt"],
        thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
        "thumbs-down": ["dislike", "bad", "emotion"],
        "thumbs-up": ["like", "good", "emotion"],
        "toggle-left": ["on", "off", "switch"],
        "toggle-right": ["on", "off", "switch"],
        tool: ["settings", "spanner"],
        trash: ["garbage", "delete", "remove", "bin"],
        "trash-2": ["garbage", "delete", "remove", "bin"],
        triangle: ["delta"],
        truck: ["delivery", "van", "shipping", "transport", "lorry"],
        tv: ["television", "stream"],
        twitch: ["logo"],
        twitter: ["logo", "social"],
        type: ["text"],
        umbrella: ["rain", "weather"],
        unlock: ["security"],
        "user-check": ["followed", "subscribed"],
        "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
        "user-plus": ["new", "add", "create", "follow", "subscribe"],
        "user-x": [
          "delete",
          "remove",
          "unfollow",
          "unsubscribe",
          "unavailable",
        ],
        user: ["person", "account"],
        users: ["group"],
        "video-off": ["camera", "movie", "film"],
        video: ["camera", "movie", "film"],
        voicemail: ["phone"],
        volume: ["music", "sound", "mute"],
        "volume-1": ["music", "sound"],
        "volume-2": ["music", "sound"],
        "volume-x": ["music", "sound", "mute"],
        watch: ["clock", "time"],
        "wifi-off": ["disabled"],
        wifi: ["connection", "signal", "wireless"],
        wind: ["weather", "air"],
        "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
        "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
        "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
        x: ["cancel", "close", "delete", "remove", "times", "clear"],
        youtube: ["logo", "video", "play"],
        "zap-off": ["flash", "camera", "lightning"],
        zap: ["flash", "camera", "lightning"],
        "zoom-in": ["magnifying glass"],
        "zoom-out": ["magnifying glass"],
      };
    },
    function (e) {
      e.exports = {
        activity:
          '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
        airplay:
          '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
        "alert-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
        "alert-octagon":
          '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
        "alert-triangle":
          '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        "align-center":
          '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
        "align-justify":
          '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
        "align-left":
          '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
        "align-right":
          '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
        anchor:
          '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
        aperture:
          '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
        archive:
          '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
        "arrow-down-circle":
          '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
        "arrow-down-left":
          '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
        "arrow-down-right":
          '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
        "arrow-down":
          '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
        "arrow-left-circle":
          '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
        "arrow-left":
          '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
        "arrow-right-circle":
          '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
        "arrow-right":
          '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
        "arrow-up-circle":
          '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
        "arrow-up-left":
          '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
        "arrow-up-right":
          '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
        "arrow-up":
          '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
        "at-sign":
          '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
        award:
          '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
        "bar-chart-2":
          '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
        "bar-chart":
          '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
        "battery-charging":
          '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
        battery:
          '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
        "bell-off":
          '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
        bluetooth:
          '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
        bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
        "book-open":
          '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
        book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
        bookmark:
          '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
        box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
        briefcase:
          '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
        calendar:
          '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
        "camera-off":
          '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
        camera:
          '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
        cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
        "check-circle":
          '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
        "check-square":
          '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
        check: '<polyline points="20 6 9 17 4 12"></polyline>',
        "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
        "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
        "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
        "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
        "chevrons-down":
          '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
        "chevrons-left":
          '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
        "chevrons-right":
          '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
        "chevrons-up":
          '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
        chrome:
          '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
        circle: '<circle cx="12" cy="12" r="10"></circle>',
        clipboard:
          '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
        clock:
          '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
        "cloud-drizzle":
          '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
        "cloud-lightning":
          '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
        "cloud-off":
          '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        "cloud-rain":
          '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
        "cloud-snow":
          '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
        cloud:
          '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
        code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
        codepen:
          '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
        codesandbox:
          '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
        coffee:
          '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
        columns:
          '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
        command:
          '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
        compass:
          '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
        copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
        "corner-down-left":
          '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
        "corner-down-right":
          '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
        "corner-left-down":
          '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
        "corner-left-up":
          '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
        "corner-right-down":
          '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
        "corner-right-up":
          '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
        "corner-up-left":
          '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
        "corner-up-right":
          '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
        cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
        "credit-card":
          '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
        crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
        crosshair:
          '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
        database:
          '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
        delete:
          '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
        disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
        "divide-circle":
          '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
        "divide-square":
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
        divide:
          '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
        "dollar-sign":
          '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
        "download-cloud":
          '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
        download:
          '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
        dribbble:
          '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
        droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
        "edit-2":
          '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
        "edit-3":
          '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
        edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
        "external-link":
          '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
        "eye-off":
          '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
        facebook:
          '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
        "fast-forward":
          '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
        feather:
          '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
        figma:
          '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
        "file-minus":
          '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
        "file-plus":
          '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
        "file-text":
          '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
        file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
        film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
        filter:
          '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
        flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
        "folder-minus":
          '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
        "folder-plus":
          '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
        folder:
          '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
        framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
        frown:
          '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
        gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
        "git-branch":
          '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
        "git-commit":
          '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
        "git-merge":
          '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
        "git-pull-request":
          '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
        github:
          '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
        gitlab:
          '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
        globe:
          '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
        grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
        "hard-drive":
          '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
        hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
        headphones:
          '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
        heart:
          '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
        "help-circle":
          '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        hexagon:
          '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
        home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
        image:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
        inbox:
          '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
        info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
        instagram:
          '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
        italic:
          '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
        key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
        layers:
          '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
        layout:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
        "life-buoy":
          '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
        "link-2":
          '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
        link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
        linkedin:
          '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
        list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
        loader:
          '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
        lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
        "log-in":
          '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
        "log-out":
          '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
        mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
        "map-pin":
          '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
        map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
        "maximize-2":
          '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
        maximize:
          '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
        meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
        menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
        "message-circle":
          '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
        "message-square":
          '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
        "mic-off":
          '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
        mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
        "minimize-2":
          '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
        minimize:
          '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
        "minus-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
        "minus-square":
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
        minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
        monitor:
          '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
        moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
        "more-horizontal":
          '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
        "more-vertical":
          '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
        "mouse-pointer":
          '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
        move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
        music:
          '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
        "navigation-2":
          '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
        navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
        octagon:
          '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
        package:
          '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
        paperclip:
          '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
        "pause-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
        pause:
          '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
        "pen-tool":
          '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
        percent:
          '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
        "phone-call":
          '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-forwarded":
          '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-incoming":
          '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-missed":
          '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-off":
          '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
        "phone-outgoing":
          '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        phone:
          '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "pie-chart":
          '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
        "play-circle":
          '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
        play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
        "plus-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
        "plus-square":
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
        plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
        pocket:
          '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
        power:
          '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
        printer:
          '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
        radio:
          '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
        "refresh-ccw":
          '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
        "refresh-cw":
          '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
        repeat:
          '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
        rewind:
          '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
        "rotate-ccw":
          '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
        "rotate-cw":
          '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
        rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
        save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
        scissors:
          '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
        search:
          '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
        send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
        server:
          '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
        settings:
          '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
        "share-2":
          '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
        share:
          '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
        "shield-off":
          '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
        "shopping-bag":
          '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
        "shopping-cart":
          '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
        shuffle:
          '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
        sidebar:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
        "skip-back":
          '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
        "skip-forward":
          '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
        slack:
          '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
        slash:
          '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
        sliders:
          '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
        smartphone:
          '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
        smile:
          '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
        speaker:
          '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
        square:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
        star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
        "stop-circle":
          '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
        sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
        sunrise:
          '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
        sunset:
          '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
        tablet:
          '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
        tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
        target:
          '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
        terminal:
          '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
        thermometer:
          '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
        "thumbs-down":
          '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
        "thumbs-up":
          '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
        "toggle-left":
          '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
        "toggle-right":
          '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
        tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
        "trash-2":
          '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
        trash:
          '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
        trello:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
        "trending-down":
          '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
        "trending-up":
          '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
        triangle:
          '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
        truck:
          '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
        tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
        twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
        twitter:
          '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
        type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
        umbrella:
          '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
        underline:
          '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
        unlock:
          '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
        "upload-cloud":
          '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
        upload:
          '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
        "user-check":
          '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
        "user-minus":
          '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
        "user-plus":
          '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
        "user-x":
          '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
        user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
        users:
          '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
        "video-off":
          '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        video:
          '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
        voicemail:
          '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
        "volume-1":
          '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
        "volume-2":
          '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
        "volume-x":
          '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
        volume:
          '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
        watch:
          '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
        "wifi-off":
          '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
        wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
        wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
        "x-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
        "x-octagon":
          '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
        "x-square":
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
        x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
        youtube:
          '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
        "zap-off":
          '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
        zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
        "zoom-in":
          '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
        "zoom-out":
          '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
      };
    },
    function (e) {
      e.exports = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      };
    },
    function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var i = arguments[n];
              for (var t in i)
                Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
            }
            return e;
          },
        l = (function () {
          function e(e, n) {
            for (var i = 0; i < n.length; i++) {
              var t = n[i];
              (t.enumerable = t.enumerable || !1),
                (t.configurable = !0),
                "value" in t && (t.writable = !0),
                Object.defineProperty(e, t.key, t);
            }
          }
          return function (n, i, t) {
            return i && e(n.prototype, i), t && e(n, t), n;
          };
        })(),
        r = a(i(22)),
        o = a(i(42));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (function () {
        function e(n, i) {
          var l =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          !(function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.name = n),
            (this.contents = i),
            (this.tags = l),
            (this.attrs = t({}, o.default, { class: "feather feather-" + n }));
        }
        return (
          l(e, [
            {
              key: "toSvg",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return (
                  "<svg " +
                  (function (e) {
                    return Object.keys(e)
                      .map(function (n) {
                        return n + '="' + e[n] + '"';
                      })
                      .join(" ");
                  })(
                    t({}, this.attrs, e, {
                      class: (0, r.default)(this.attrs.class, e.class),
                    })
                  ) +
                  ">" +
                  this.contents +
                  "</svg>"
                );
              },
            },
            {
              key: "toString",
              value: function () {
                return this.contents;
              },
            },
          ]),
          e
        );
      })();
      n.default = c;
    },
    function (e, n, i) {
      "use strict";
      var t = o(i(12)),
        l = o(i(39)),
        r = o(i(38));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = { icons: t.default, toSvg: l.default, replace: r.default };
    },
    function (e, n, i) {
      e.exports = i(0);
    },
    function (e, n, i) {
      var t = i(2)("iterator"),
        l = !1;
      try {
        var r = 0,
          o = {
            next: function () {
              return { done: !!r++ };
            },
            return: function () {
              l = !0;
            },
          };
        (o[t] = function () {
          return this;
        }),
          Array.from(o, function () {
            throw 2;
          });
      } catch (e) {}
      e.exports = function (e, n) {
        if (!n && !l) return !1;
        var i = !1;
        try {
          var r = {};
          (r[t] = function () {
            return {
              next: function () {
                return { done: (i = !0) };
              },
            };
          }),
            e(r);
        } catch (e) {}
        return i;
      };
    },
    function (e, n, i) {
      var t = i(30),
        l = i(2)("toStringTag"),
        r =
          "Arguments" ==
          t(
            (function () {
              return arguments;
            })()
          );
      e.exports = function (e) {
        var n, i, o;
        return void 0 === e
          ? "Undefined"
          : null === e
          ? "Null"
          : "string" ==
            typeof (i = (function (e, n) {
              try {
                return e[n];
              } catch (e) {}
            })((n = Object(e)), l))
          ? i
          : r
          ? t(n)
          : "Object" == (o = t(n)) && "function" == typeof n.callee
          ? "Arguments"
          : o;
      };
    },
    function (e, n, i) {
      var t = i(47),
        l = i(9),
        r = i(2)("iterator");
      e.exports = function (e) {
        if (void 0 != e) return e[r] || e["@@iterator"] || l[t(e)];
      };
    },
    function (e, n, i) {
      "use strict";
      var t = i(18),
        l = i(7),
        r = i(10);
      e.exports = function (e, n, i) {
        var o = t(n);
        o in e ? l.f(e, o, r(0, i)) : (e[o] = i);
      };
    },
    function (e, n, i) {
      var t = i(2),
        l = i(9),
        r = t("iterator"),
        o = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (l.Array === e || o[r] === e);
      };
    },
    function (e, n, i) {
      var t = i(3);
      e.exports = function (e, n, i, l) {
        try {
          return l ? n(t(i)[0], i[1]) : n(i);
        } catch (n) {
          var r = e.return;
          throw (void 0 !== r && t(r.call(e)), n);
        }
      };
    },
    function (e, n) {
      e.exports = function (e) {
        if ("function" != typeof e)
          throw TypeError(String(e) + " is not a function");
        return e;
      };
    },
    function (e, n, i) {
      var t = i(52);
      e.exports = function (e, n, i) {
        if ((t(e), void 0 === n)) return e;
        switch (i) {
          case 0:
            return function () {
              return e.call(n);
            };
          case 1:
            return function (i) {
              return e.call(n, i);
            };
          case 2:
            return function (i, t) {
              return e.call(n, i, t);
            };
          case 3:
            return function (i, t, l) {
              return e.call(n, i, t, l);
            };
        }
        return function () {
          return e.apply(n, arguments);
        };
      };
    },
    function (e, n, i) {
      "use strict";
      var t = i(53),
        l = i(24),
        r = i(51),
        o = i(50),
        a = i(27),
        c = i(49),
        p = i(48);
      e.exports = function (e) {
        var n,
          i,
          y,
          h,
          x = l(e),
          s = "function" == typeof this ? this : Array,
          u = arguments.length,
          d = u > 1 ? arguments[1] : void 0,
          f = void 0 !== d,
          g = 0,
          v = p(x);
        if (
          (f && (d = t(d, u > 2 ? arguments[2] : void 0, 2)),
          void 0 == v || (s == Array && o(v)))
        )
          for (i = new s((n = a(x.length))); n > g; g++)
            c(i, g, f ? d(x[g], g) : x[g]);
        else
          for (h = v.call(x), i = new s(); !(y = h.next()).done; g++)
            c(i, g, f ? r(h, d, [y.value, g], !0) : y.value);
        return (i.length = g), i;
      };
    },
    function (e, n, i) {
      var t = i(32),
        l = i(54);
      t(
        {
          target: "Array",
          stat: !0,
          forced: !i(46)(function (e) {
            Array.from(e);
          }),
        },
        { from: l }
      );
    },
    function (e, n, i) {
      var t = i(6),
        l = i(3);
      e.exports = function (e, n) {
        if ((l(e), !t(n) && null !== n))
          throw TypeError("Can't set " + String(n) + " as a prototype");
      };
    },
    function (e, n, i) {
      var t = i(56);
      e.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var e,
                n = !1,
                i = {};
              try {
                (e = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set).call(i, []),
                  (n = i instanceof Array);
              } catch (e) {}
              return function (i, l) {
                return t(i, l), n ? e.call(i, l) : (i.__proto__ = l), i;
              };
            })()
          : void 0);
    },
    function (e, n, i) {
      var t = i(0).document;
      e.exports = t && t.documentElement;
    },
    function (e, n, i) {
      var t = i(28),
        l = i(13);
      e.exports =
        Object.keys ||
        function (e) {
          return t(e, l);
        };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(7),
        r = i(3),
        o = i(59);
      e.exports = t
        ? Object.defineProperties
        : function (e, n) {
            r(e);
            for (var i, t = o(n), a = t.length, c = 0; a > c; )
              l.f(e, (i = t[c++]), n[i]);
            return e;
          };
    },
    function (e, n, i) {
      var t = i(3),
        l = i(60),
        r = i(13),
        o = i(15),
        a = i(58),
        c = i(34),
        p = i(16)("IE_PROTO"),
        y = function () {},
        h = function () {
          var e,
            n = c("iframe"),
            i = r.length;
          for (
            n.style.display = "none",
              a.appendChild(n),
              n.src = String("javascript:"),
              (e = n.contentWindow.document).open(),
              e.write("<script>document.F=Object</script>"),
              e.close(),
              h = e.F;
            i--;

          )
            delete h.prototype[r[i]];
          return h();
        };
      (e.exports =
        Object.create ||
        function (e, n) {
          var i;
          return (
            null !== e
              ? ((y.prototype = t(e)),
                (i = new y()),
                (y.prototype = null),
                (i[p] = e))
              : (i = h()),
            void 0 === n ? i : l(i, n)
          );
        }),
        (o[p] = !0);
    },
    function (e, n, i) {
      var t = i(4);
      e.exports =
        !!Object.getOwnPropertySymbols &&
        !t(function () {
          return !String(Symbol());
        });
    },
    function (e, n, i) {
      var t = i(4);
      e.exports = !t(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      });
    },
    function (e, n, i) {
      "use strict";
      var t = i(26).IteratorPrototype,
        l = i(61),
        r = i(10),
        o = i(23),
        a = i(9),
        c = function () {
          return this;
        };
      e.exports = function (e, n, i) {
        var p = n + " Iterator";
        return (
          (e.prototype = l(t, { next: r(1, i) })),
          o(e, p, !1, !0),
          (a[p] = c),
          e
        );
      };
    },
    function (e, n, i) {
      var t = i(4),
        l = /#|\.prototype\./,
        r = function (e, n) {
          var i = a[o(e)];
          return i == p || (i != c && ("function" == typeof n ? t(n) : !!n));
        },
        o = (r.normalize = function (e) {
          return String(e).replace(l, ".").toLowerCase();
        }),
        a = (r.data = {}),
        c = (r.NATIVE = "N"),
        p = (r.POLYFILL = "P");
      e.exports = r;
    },
    function (e, n) {
      n.f = Object.getOwnPropertySymbols;
    },
    function (e, n, i) {
      var t = i(21),
        l = Math.max,
        r = Math.min;
      e.exports = function (e, n) {
        var i = t(e);
        return i < 0 ? l(i + n, 0) : r(i, n);
      };
    },
    function (e, n, i) {
      var t = i(14),
        l = i(27),
        r = i(67);
      e.exports = function (e) {
        return function (n, i, o) {
          var a,
            c = t(n),
            p = l(c.length),
            y = r(o, p);
          if (e && i != i) {
            for (; p > y; ) if ((a = c[y++]) != a) return !0;
          } else
            for (; p > y; y++)
              if ((e || y in c) && c[y] === i) return e || y || 0;
          return !e && -1;
        };
      };
    },
    function (e, n, i) {
      var t = i(28),
        l = i(13).concat("length", "prototype");
      n.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return t(e, l);
        };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(69),
        r = i(66),
        o = i(3),
        a = t.Reflect;
      e.exports =
        (a && a.ownKeys) ||
        function (e) {
          var n = l.f(o(e)),
            i = r.f;
          return i ? n.concat(i(e)) : n;
        };
    },
    function (e, n, i) {
      var t = i(1),
        l = i(70),
        r = i(31),
        o = i(7);
      e.exports = function (e, n) {
        for (var i = l(n), a = o.f, c = r.f, p = 0; p < i.length; p++) {
          var y = i[p];
          t(e, y) || a(e, y, c(n, y));
        }
      };
    },
    function (e, n, i) {
      var t = i(4),
        l = i(30),
        r = "".split;
      e.exports = t(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == l(e) ? r.call(e, "") : Object(e);
          }
        : Object;
    },
    function (e, n, i) {
      "use strict";
      var t = {}.propertyIsEnumerable,
        l = Object.getOwnPropertyDescriptor,
        r = l && !t.call({ 1: 2 }, 1);
      n.f = r
        ? function (e) {
            var n = l(this, e);
            return !!n && n.enumerable;
          }
        : t;
    },
    function (e, n, i) {
      "use strict";
      var t = i(32),
        l = i(64),
        r = i(25),
        o = i(57),
        a = i(23),
        c = i(5),
        p = i(29),
        y = i(2),
        h = i(17),
        x = i(9),
        s = i(26),
        u = s.IteratorPrototype,
        d = s.BUGGY_SAFARI_ITERATORS,
        f = y("iterator"),
        g = function () {
          return this;
        };
      e.exports = function (e, n, i, y, s, v, m) {
        l(i, n, y);
        var w,
          M,
          b,
          z = function (e) {
            if (e === s && O) return O;
            if (!d && e in H) return H[e];
            switch (e) {
              case "keys":
              case "values":
              case "entries":
                return function () {
                  return new i(this, e);
                };
            }
            return function () {
              return new i(this);
            };
          },
          A = n + " Iterator",
          k = !1,
          H = e.prototype,
          V = H[f] || H["@@iterator"] || (s && H[s]),
          O = (!d && V) || z(s),
          j = ("Array" == n && H.entries) || V;
        if (
          (j &&
            ((w = r(j.call(new e()))),
            u !== Object.prototype &&
              w.next &&
              (h ||
                r(w) === u ||
                (o ? o(w, u) : "function" != typeof w[f] && c(w, f, g)),
              a(w, A, !0, !0),
              h && (x[A] = g))),
          "values" == s &&
            V &&
            "values" !== V.name &&
            ((k = !0),
            (O = function () {
              return V.call(this);
            })),
          (h && !m) || H[f] === O || c(H, f, O),
          (x[n] = O),
          s)
        )
          if (
            ((M = {
              values: z("values"),
              keys: v ? O : z("keys"),
              entries: z("entries"),
            }),
            m)
          )
            for (b in M) (!d && !k && b in H) || p(H, b, M[b]);
          else t({ target: n, proto: !0, forced: d || k }, M);
        return M;
      };
    },
    function (e, n) {
      var i;
      i = (function () {
        return this;
      })();
      try {
        i = i || Function("return this")() || (0, eval)("this");
      } catch (e) {
        "object" == typeof window && (i = window);
      }
      e.exports = i;
    },
    function (e, n, i) {
      var t = i(0),
        l = i(36),
        r = t.WeakMap;
      e.exports = "function" == typeof r && /native code/.test(l.call(r));
    },
    function (e, n, i) {
      var t = i(21),
        l = i(20);
      e.exports = function (e, n, i) {
        var r,
          o,
          a = String(l(e)),
          c = t(n),
          p = a.length;
        return c < 0 || c >= p
          ? i
            ? ""
            : void 0
          : (r = a.charCodeAt(c)) < 55296 ||
            r > 56319 ||
            c + 1 === p ||
            (o = a.charCodeAt(c + 1)) < 56320 ||
            o > 57343
          ? i
            ? a.charAt(c)
            : r
          : i
          ? a.slice(c, c + 2)
          : o - 56320 + ((r - 55296) << 10) + 65536;
      };
    },
    function (e, n, i) {
      "use strict";
      var t = i(77),
        l = i(37),
        r = i(74),
        o = l.set,
        a = l.getterFor("String Iterator");
      r(
        String,
        "String",
        function (e) {
          o(this, { type: "String Iterator", string: String(e), index: 0 });
        },
        function () {
          var e,
            n = a(this),
            i = n.string,
            l = n.index;
          return l >= i.length
            ? { value: void 0, done: !0 }
            : ((e = t(i, l, !0)),
              (n.index += e.length),
              { value: e, done: !1 });
        }
      );
    },
    function (e, n, i) {
      i(78), i(55);
      var t = i(45);
      e.exports = t.Array.from;
    },
    function (e, n, i) {
      i(79), (e.exports = i(44));
    },
  ]);
});
//# sourceMappingURL=feather.min.js.map

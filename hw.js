if (!window.ol) {
  window.ol = {
    debug: true,
    isIE:    /*@cc_on!@*/
    0,
    isIE6: false,
    isIE7: false,
    isIE8: false,
    domCompleted: false
  }
}
ol.pkg = function (i, h, g) {
  var d,
  e,
  b;
  if (arguments.length == 3) {
    d = i;
    e = h;
    b = g
  } else {
    d = window;
    e = i;
    b = h
  }
  if (!e || !e.length) {
    return null
  }
  var l = e.split('.');
  for (var k = d, j = 0; j < l.length - 1; j++) {
    k[l[j]] || (k[l[j]] = {
    });
    k = k[l[j]]
  }
  k = (k[l[l.length - 1]] = b || k[l[l.length - 1]] || {
  });
  return k
};
(function () {
  var c = 0,
  e = [
  ],
  d = function () {
    for (var f = 0; f < e.length; f++) {
      e[f].call(document)
    }
    e.length = 0
  },
  a = function () {
    if (ol.domCompleted) {
      d();
      return
    }
    if (!document.body) {
      setTimeout(arguments.callee, 13);
      return
    }
    ol.domCompleted = true;
    d()
  },
  b = {
    DOMContentLoaded: function () {
      if (document.addEventListener) {
        document.removeEventListener('DOMContentLoaded', b.DOMContentLoaded, false);
        a()
      } else {
        if (document.attachEvent) {
          if (document.readyState === 'complete') {
            document.detachEvent('onreadystatechange', b.DOMContentLoaded);
            a()
          }
        }
      }
    },
    bindReady: function () {
      var f = b.DOMContentLoaded;
      if (document.readyState === 'complete') {
        a();
        return
      }
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', f, false);
        window.addEventListener('load', a, false)
      } else {
        if (document.attachEvent) {
          document.attachEvent('onreadystatechange', f);
          window.attachEvent('onload', a);
          var g = false;
          try {
            g = window.frameElement == null
          } catch (h) {
          }
          if (document.documentElement.doScroll && g) {
            b.doScrollCheck()
          }
        }
      }
    },
    doScrollCheck: function () {
      if (ol.domCompleted) {
        return
      }
      try {
        document.documentElement.doScroll('left')
      } catch (f) {
        setTimeout(b.doScrollCheck, 1);
        return
      }
      a()
    }
  };
  ol.ready = function (f) {
    if (typeof (f) != 'function') {
      return
    }
    if (ol.domCompleted) {
      f.call(document);
      return
    } else {
      if (e.length == 0) {
        b.bindReady()
      }
    }
    e.push(f)
  }
}) ();
(function () {
  var h = document.head || document.getElementsByTagName('head') [0] || document.documentElement,
  a = 0,
  e = {
  },
  b = {
  },
  g = function (j, k) {
    j.onload = j.onerror = j.onreadystatechange = function () {
      if (/loaded|complete|undefined/.test(j.readyState)) {
        j.onload = j.onerror = j.onreadystatechange = null;
        if (j.parentNode) {
          try {
            if (j.clearAttributes) {
              j.clearAttributes()
            } else {
              for (var m in j) {
                delete j[m]
              }
            }
          } catch (l) {
          }
          h.removeChild(j)
        }
        j = undefined;
        k()
      }
    }
  },
  f = function (l, o) {
    var j = [
    ];
    var n = 'jsapi_loader' + (a++);
    j.push('(function(){var time = 0,el = document.getElementById(\'' + n + '\');if(!el || (el.readyState && \'complete\' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error(\'load the script of id ' + n + ' fail!\');} return; }');
    if (l.onload) {
      j.push('(');
      j.push(l.onload);
      j.push(')();')
    }
    if ('object' == typeof (o)) {
      for (var k = 0; k < o.length; k++) {
        if ('function' == typeof (o[k])) {
          j.push('(');
          j.push(o[k]);
          j.push(')();')
        } else {
          if ('string' == typeof (o[k])) {
            j.push(o[k])
          }
        }
      }
    }
    var m = '';
    if (l.charset) {
      m = 'charset="' + l.charset + '"'
    }
    j.push('})();');
    document.write('<script id="' + n + '" loadType="insert" type="text/javascript" src="' + l.url + '" ' + m + '></script>');
    document.write('<script>' + j.join('') + '</script>')
  },
  d = function (j, m) {
    var l = document.createElement('script');
    l.src = j.url;
    l.async = !j.depend;
    l.type = 'text/javascript';
    if (j.charset) {
      l.charset = j.charset
    }
    var k = l;
    h.insertBefore(l, h.firstChild);
    k = null;
    g(l, m)
  },
  i = function (j) {
    var k = document.createElement('link');
    k.rel = 'stylesheet';
    k.type = 'text/css';
    k.href = j.url;
    h.appendChild(k)
  },
  c = function (l, k) {
    var j = this;
    this._insertMark = {
    };
    this._css_queue = [
    ];
    this._js_queue = [
    ];
    this._wait_map = {
    };
    this._push = function (m) {
      if (!m.mark) {
        m.mark = (m.uri || m.url)
      }
      if (this._insertMark[m.mark]) {
        return
      }
      this._insertMark[m.mark] = true;
      ('js' == m.type ? this._js_queue : this._css_queue).push(m)
    };
    this._attach = function (o) {
      if ('string' == typeof (o)) {
        var m = o;
        o = e[m];
        if (!o) {
          if (ol.debug) {
            logger.warn('ol.load', m + ' is undefined!')
          }
          return
        }
        this._attach(o);
        return
      } else {
        if ('[object Array]' == Object.prototype.toString.apply(o)) {
          for (var n = 0; n < o.length; n++) {
            this._attach(o[n])
          }
          return
        }
      }
      this._push(o)
    };
    this._load = function (p) {
      (p.type == 'js' ? this._js_queue : this._css_queue).splice(0, 1);
      var o = this._js_queue.length > 0 && this._js_queue[0].depend;
      var n = b[p.mark];
      if (n) {
        switch (n.status) {
          case 'complete':
            if (p.onload) {
              setTimeout(p.onload, 50)
            }
            if (!o) {
              setTimeout(j.success, 50)
            }
            return true;
          case 'active':
            if (!ol.domCompleted) {
              return true
            }
            var r = 1;
            var q = function () {
              var m = p;
              if (b[m.mark].status == 'complete') {
                delete j._wait_map[m.mark];
                if (m.onload) {
                  m.onload.call(document)
                }
                if (!o) {
                  j.success();
                  return
                }
                ol.load(j._js_queue, k);
                return
              }
              r++;
              if (r <= 20) {
                setTimeout(q, 50)
              }
            };
            setTimeout(q, 50);
            this._wait_map[p.mark] = true;
            return !o
        }
      }
      if (ol.domCompleted) {
        p.loadType = null
      }
      if (p.loadType == 'lazy') {
        ol.ready(function () {
          j._load(p)
        });
        return true
      }
      if (!p.url) {
        if (p.uri.substr(0, 7) == 'http://' || p.uri.substr(0, 8) == 'https://') {
          p.url = p.uri
        } else {
          p.url = ol.libPath + p.uri
        }
      }
      if (p.type == 'js') {
        b[p.mark] = {
          status: 'active'
        };
        if (!ol.domCompleted) {
          var s = [
          ];
          s.push('ol._setLoadStatus("' + p.mark + '","complete");');
          if (!o) {
            s.push(k.callback)
          }
          f(p, s)
        } else {
          var s = function () {
            b[p.mark] = {
              status: 'complete'
            };
            if (p.onload) {
              p.onload.call(document)
            }
            if (o) {
              ol.load(j._js_queue, k)
            } else {
              j.success()
            }
          };
          d(p, s);
          return !o
        }
      } else {
        i(p)
      }
      return true
    };
    this.success = function () {
      if (j._js_queue.length > 0) {
        return
      }
      for (var m in j._wait_map) {
        return
      }
      if (k.onload) {
        k.onload.call(document)
      }
      if (k.callback) {
        ol.ready(k.callback)
      }
    };
    this.init = function () {
      if ('[object object]' == Object.prototype.toString.apply(l)) {
        this._load(l);
        return
      } else {
        this._attach(l);
        this._insertMark = undefined;
        while (this._css_queue.length > 0) {
          this._load(this._css_queue[0])
        }
        while (this._js_queue.length > 0 && this._load(this._js_queue[0])) {
        }
      }
    };
    this.init()
  };
  ol.load = function (k, j) {
    if ('function' == typeof (j)) {
      j = {
        callback: j
      }
    } else {
      if (!j) {
        j = {
        }
      }
    }
    if (!ol.domCompleted && j.loadType == 'lazy') {
      ol.ready(function () {
        new c(k, j)
      })
    } else {
      new c(k, j)
    }
  };
  ol.load.define = function (j, k) {
    e[j] = k
  };
  ol.load.remove = function (j) {
    delete e[j]
  };
  ol._setLoadStatus = function (k, j) {
    b[k] = {
      status: j
    }
  }
}) (); var logger = {
  info: function (b, a) {
    if (!ol.debug) {
      return
    }
    if (typeof (console) != 'undefined' && console.log) {
      if (a) {
        console.log('[' + b + ']:' + a)
      } else {
        console.log(b)
      }
    }
  },
  warn: function (b, a) {
    if (!ol.debug) {
      return
    }
    if (typeof (console) != 'undefined' && console.warn) {
      if (a) {
        console.warn('[' + b + ']:' + a)
      } else {
        console.warn(b)
      }
    }
  },
  error: function (b, a) {
    if (!ol.debug) {
      return
    }
    if (typeof (console) != 'undefined' && console.error) {
      if (a) {
        console.error('[' + b + ']:' + a)
      } else {
        console.error(b)
      }
    }
  }
}; function log(b, a) {
  logger.info(b, a)
}(function () {
  var a = document.getElementsByTagName('script'),
  b = a[a.length - 1];
  var f = b.src.lastIndexOf('/');
  if (f > 0) {
    ol.libPath = scriptPath + '/common/'
  }
  var c = b.getAttribute('namespace');
  if (c) {
    window[c] = ol
  }
  b = null;
  try {
    document.write('<!--[if lte IE 6]><script>ol.isIE6=true;</script><![endif]--><!--[if IE 7]><script>ol.isIE7=true;</script><![endif]--><!--[if IE 8]><script>ol.isIE8=true;</script><![endif]-->')
  } catch (d) {
  }
}) (); ol.ready(function () {
  ol.domCompleted = true;
  logger.info('Dom', 'Load Complete!')
}); /*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, !0)  : function (e) {
    if (!e.document) throw new Error('jQuery requires a window with a document');
    return t(e)
  }
   : t(e)
}('undefined' != typeof window ? window : this, function (C, e) {
  'use strict';
  var t = [
  ],
  E = C.document,
  r = Object.getPrototypeOf,
  s = t.slice,
  g = t.concat,
  u = t.push,
  i = t.indexOf,
  n = {
  },
  o = n.toString,
  v = n.hasOwnProperty,
  a = v.toString,
  l = a.call(Object),
  y = {
  },
  m = function (e) {
    return 'function' == typeof e && 'number' != typeof e.nodeType
  },
  x = function (e) {
    return null != e && e === e.window
  },
  c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };
  function b(e, t, n) {
    var r,
    i,
    o = (n = n || E).createElement('script');
    if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o)
  }
  function w(e) {
    return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? n[o.call(e)] || 'object' : typeof e
  }
  var f = '3.4.1',
  k = function (e, t) {
    return new k.fn.init(e, t)
  },
  p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function d(e) {
    var t = !!e && 'length' in e && e.length,
    n = w(e);
    return !m(e) && !x(e) && ('array' === n || 0 === t || 'number' == typeof t && 0 < t && t - 1 in e)
  }
  k.fn = k.prototype = {
    jquery: f,
    constructor: k,
    length: 0,
    toArray: function () {
      return s.call(this)
    },
    get: function (e) {
      return null == e ? s.call(this)  : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function (e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this,
      t
    },
    each: function (e) {
      return k.each(this, e)
    },
    map: function (n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq( - 1)
    },
    eq: function (e) {
      var t = this.length,
      n = + e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [
        this[n]
      ] : [
      ])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  },
  k.extend = k.fn.extend = function () {
    var e,
    t,
    n,
    r,
    i,
    o,
    a = arguments[0] || {
    },
    s = 1,
    u = arguments.length,
    l = !1;
    for ('boolean' == typeof a && (l = a, a = arguments[s] || {
    }, s++), 'object' == typeof a || m(a) || (a = {
    }), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t],
    '__proto__' !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [
    ] : i || k.isPlainObject(n) ? n : {
    }, i = !1, a[t] = k.extend(l, o, r))  : void 0 !== r && (a[t] = r));
    return a
  },
  k.extend({
    expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function (e) {
      throw new Error(e)
    },
    noop: function () {
    },
    isPlainObject: function (e) {
      var t,
      n;
      return !(!e || '[object Object]' !== o.call(e)) && (!(t = r(e)) || 'function' == typeof (n = v.call(t, 'constructor') && t.constructor) && a.call(n) === l)
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    globalEval: function (e, t) {
      b(e, {
        nonce: t && t.nonce
      })
    },
    each: function (e, t) {
      var n,
      r = 0;
      if (d(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e
    },
    trim: function (e) {
      return null == e ? '' : (e + '').replace(p, '')
    },
    makeArray: function (e, t) {
      var n = t || [
      ];
      return null != e && (d(Object(e)) ? k.merge(n, 'string' == typeof e ? [
        e
      ] : e)  : u.call(n, e)),
      n
    },
    inArray: function (e, t, n) {
      return null == t ? - 1 : i.call(t, e, n)
    },
    merge: function (e, t) {
      for (var n = + t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i,
      e
    },
    grep: function (e, t, n) {
      for (var r = [
      ], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r
    },
    map: function (e, t, n) {
      var r,
      i,
      o = 0,
      a = [
      ];
      if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
       else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g.apply([], a)
    },
    guid: 1,
    support: y
  }),
  'function' == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
  k.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
    n['[object ' + t + ']'] = t.toLowerCase()
  });
  var h = function (n) {
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
    k = 'sizzle' + 1 * new Date,
    m = n.document,
    S = 0,
    r = 0,
    p = ue(),
    x = ue(),
    N = ue(),
    A = ue(),
    D = function (e, t) {
      return e === t && (l = !0),
      0
    },
    j = {
    }.hasOwnProperty,
    t = [
    ],
    q = t.pop,
    L = t.push,
    H = t.push,
    O = t.slice,
    P = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
      return - 1
    },
    R = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
    M = '[\\x20\\t\\r\\n\\f]',
    I = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
    W = '\\[' + M + '*(' + I + ')(?:' + M + '*([*^$|!~]?=)' + M + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + I + '))|)' + M + '*\\]',
    $ = ':(' + I + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + W + ')*)|.*)\\)|)',
    F = new RegExp(M + '+', 'g'),
    B = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
    _ = new RegExp('^' + M + '*,' + M + '*'),
    z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
    U = new RegExp(M + '|>'),
    X = new RegExp($),
    V = new RegExp('^' + I + '$'),
    G = {
      ID: new RegExp('^#(' + I + ')'),
      CLASS: new RegExp('^\\.(' + I + ')'),
      TAG: new RegExp('^(' + I + '|[*])'),
      ATTR: new RegExp('^' + W),
      PSEUDO: new RegExp('^' + $),
      CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
      bool: new RegExp('^(?:' + R + ')$', 'i'),
      needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
    },
    Y = /HTML$/i,
    Q = /^(?:input|select|textarea|button)$/i,
    J = /^h\d$/i,
    K = /^[^{]+\{\s*\[native \w/,
    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    ee = /[+~]/,
    te = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'),
    ne = function (e, t, n) {
      var r = '0x' + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536)  : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
    },
    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
    ie = function (e, t) {
      return t ? '\0' === e ? '�' : e.slice(0, - 1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ' : '\\' + e
    },
    oe = function () {
      T()
    },
    ae = be(function (e) {
      return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase()
    }, {
      dir: 'parentNode',
      next: 'legend'
    });
    try {
      H.apply(t = O.call(m.childNodes), m.childNodes),
      t[m.childNodes.length].nodeType
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t))
        }
         : function (e, t) {
          var n = e.length,
          r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1
        }
      }
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
      if (n = n || [
      ], 'string' != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a),
            n
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a),
          n
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)),
          n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)),
          n
        }
        if (d.qsa && !A[t + ' '] && (!v || !v.test(t)) && (1 !== p || 'object' !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && U.test(t)) {
            (s = e.getAttribute('id')) ? s = s.replace(re, ie)  : e.setAttribute('id', s = k),
            o = (l = h(t)).length;
            while (o--) l[o] = '#' + s + ' ' + xe(l[o]);
            c = l.join(','),
            f = ee.test(t) && ye(e.parentNode) || e
          }
          try {
            return H.apply(n, f.querySelectorAll(c)),
            n
          } catch (e) {
            A(t, !0)
          } finally {
            s === k && e.removeAttribute('id')
          }
        }
      }
      return g(t.replace(B, '$1'), e, n, r)
    }
    function ue() {
      var r = [
      ];
      return function e(t, n) {
        return r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
        e[t + ' '] = n
      }
    }
    function le(e) {
      return e[k] = !0,
      e
    }
    function ce(e) {
      var t = C.createElement('fieldset');
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t),
        t = null
      }
    }
    function fe(e, t) {
      var n = e.split('|'),
      r = n.length;
      while (r--) b.attrHandle[n[r]] = t
    }
    function pe(e, t) {
      var n = t && e,
      r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return - 1;
      return e ? 1 : - 1
    }
    function de(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t
      }
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ('input' === t || 'button' === t) && e.type === n
      }
    }
    function ge(t) {
      return function (e) {
        return 'form' in e ? e.parentNode && !1 === e.disabled ? 'label' in e ? 'label' in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : 'label' in e && e.disabled === t
      }
    }
    function ve(a) {
      return le(function (o) {
        return o = + o,
        le(function (e, t) {
          var n,
          r = a([], e.length, o),
          i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }
    function ye(e) {
      return e && 'undefined' != typeof e.getElementsByTagName && e
    }
    for (e in d = se.support = {
    }, i = se.isXML = function (e) {
      var t = e.namespaceURI,
      n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || 'HTML')
    }, T = se.setDocument = function (e) {
      var t,
      n,
      r = e ? e.ownerDocument || e : m;
      return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', oe, !1)  : n.attachEvent && n.attachEvent('onunload', oe)), d.attributes = ce(function (e) {
        return e.className = 'i',
        !e.getAttribute('className')
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment('')),
        !e.getElementsByTagName('*').length
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = k,
        !C.getElementsByName || !C.getElementsByName(k).length
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute('id') === t
        }
      }, b.find.ID = function (e, t) {
        if ('undefined' != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [
            n
          ] : [
          ]
        }
      })  : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
          return t && t.value === n
        }
      }, b.find.ID = function (e, t) {
        if ('undefined' != typeof t.getElementById && E) {
          var n,
          r,
          i,
          o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
            i = t.getElementsByName(e),
            r = 0;
            while (o = i[r++]) if ((n = o.getAttributeNode('id')) && n.value === e) return [o]
          }
          return []
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return 'undefined' != typeof t.getElementsByTagName ? t.getElementsByTagName(e)  : d.qsa ? t.querySelectorAll(e)  : void 0
      }
       : function (e, t) {
        var n,
        r = [
        ],
        i = 0,
        o = t.getElementsByTagName(e);
        if ('*' === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ('undefined' != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
      }, s = [
      ], v = [
      ], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        a.appendChild(e).innerHTML = '<a id=\'' + k + '\'></a><select id=\'' + k + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>',
        e.querySelectorAll('[msallowcapture^=\'\']').length && v.push('[*^$]=' + M + '*(?:\'\'|"")'),
        e.querySelectorAll('[selected]').length || v.push('\\[' + M + '*(?:value|' + R + ')'),
        e.querySelectorAll('[id~=' + k + '-]').length || v.push('~='),
        e.querySelectorAll(':checked').length || v.push(':checked'),
        e.querySelectorAll('a#' + k + '+*').length || v.push('.#.+[+~]')
      }), ce(function (e) {
        e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';
        var t = C.createElement('input');
        t.setAttribute('type', 'hidden'),
        e.appendChild(t).setAttribute('name', 'D'),
        e.querySelectorAll('[name=d]').length && v.push('name' + M + '*[*^$|!~]?='),
        2 !== e.querySelectorAll(':enabled').length && v.push(':enabled', ':disabled'),
        a.appendChild(e).disabled = !0,
        2 !== e.querySelectorAll(':disabled').length && v.push(':enabled', ':disabled'),
        e.querySelectorAll('*,:x'),
        v.push(',.*:')
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, '*'),
        c.call(e, '[s!=\'\']:x'),
        s.push('!=', $)
      }), v = v.length && new RegExp(v.join('|')), s = s.length && new RegExp(s.join('|')), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
        r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r)  : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      }
       : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1
      }, D = t ? function (e, t) {
        if (e === t) return l = !0,
        0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t)  : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? - 1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t)  : 0 : 4 & n ? - 1 : 1)
      }
       : function (e, t) {
        if (e === t) return l = !0,
        0;
        var n,
        r = 0,
        i = e.parentNode,
        o = t.parentNode,
        a = [
          e
        ],
        s = [
          t
        ];
        if (!i || !o) return e === C ? - 1 : t === C ? 1 : i ? - 1 : o ? 1 : u ? P(u, e) - P(u, t)  : 0;
        if (i === o) return pe(e, t);
        n = e;
        while (n = n.parentNode) a.unshift(n);
        n = t;
        while (n = n.parentNode) s.unshift(n);
        while (a[r] === s[r]) r++;
        return r ? pe(a[r], s[r])  : a[r] === m ? - 1 : s[r] === m ? 1 : 0
      }),
      C
    }, se.matches = function (e, t) {
      return se(e, null, null, t)
    }, se.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + ' '] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
      } catch (e) {
        A(t, !0)
      }
      return 0 < se(t, C, null, [
        e
      ]).length
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e),
      y(e, t)
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
      r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E)  : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t)  : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, se.escape = function (e) {
      return (e + '').replace(re, ie)
    }, se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e)
    }, se.uniqueSort = function (e) {
      var t,
      n = [
      ],
      r = 0,
      i = 0;
      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1)
      }
      return u = null,
      e
    }, o = se.getText = function (e) {
      var t,
      n = '',
      r = 0,
      i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else while (t = e[r++]) n += o(t);
      return n
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {
      },
      find: {
      },
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': {
          dir: 'parentNode'
        },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': {
          dir: 'previousSibling'
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(te, ne),
          e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne),
          '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
          e.slice(0, 4)
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(),
          'nth' === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = + (e[4] ? e[5] + (e[6] || 1)  : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = + (e[7] + e[8] || 'odd' === e[3]))  : e[3] && se.error(e[0]),
          e
        },
        PSEUDO: function (e) {
          var t,
          n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return '*' === e ? function () {
            return !0
          }
           : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function (e) {
          var t = p[e + ' '];
          return t || (t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) && p(e, function (e) {
            return t.test('string' == typeof e.className && e.className || 'undefined' != typeof e.getAttribute && e.getAttribute('class') || '')
          })
        },
        ATTR: function (n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? '!=' === r : !r || (t += '', '=' === r ? t === i : '!=' === r ? t !== i : '^=' === r ? i && 0 === t.indexOf(i)  : '*=' === r ? i && - 1 < t.indexOf(i)  : '$=' === r ? i && t.slice( - i.length) === i : '~=' === r ? - 1 < (' ' + t.replace(F, ' ') + ' ').indexOf(i)  : '|=' === r && (t === i || t.slice(0, i.length + 1) === i + '-'))
          }
        },
        CHILD: function (h, e, t, g, v) {
          var y = 'nth' !== h.slice(0, 3),
          m = 'last' !== h.slice( - 4),
          x = 'of-type' === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode
          }
           : function (e, t, n) {
            var r,
            i,
            o,
            a,
            s,
            u,
            l = y !== m ? 'nextSibling' : 'previousSibling',
            c = e.parentNode,
            f = x && e.nodeName.toLowerCase(),
            p = !n && !x,
            d = !1;
            if (c) {
              if (y) {
                while (l) {
                  a = e;
                  while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  u = l = 'only' === h && !u && 'nextSibling'
                }
                return !0
              }
              if (u = [
                m ? c.firstChild : c.lastChild
              ], m && p) {
                d = (s = (r = (i = (o = (a = c) [k] || (a[k] = {
                })) [a.uniqueID] || (o[a.uniqueID] = {
                })) [h] || [
                ]) [0] === S && r[1]) && r[2],
                a = s && c.childNodes[s];
                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                  i[h] = [
                    S,
                    s,
                    d
                  ];
                  break
                }
              } else if (p && (d = s = (r = (i = (o = (a = e) [k] || (a[k] = {
              })) [a.uniqueID] || (o[a.uniqueID] = {
              })) [h] || [
              ]) [0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {
              })) [a.uniqueID] || (o[a.uniqueID] = {
              })) [h] = [
                S,
                d
              ]), a === e)) break;
              return (d -= v) === g || d % g == 0 && 0 <= d / g
            }
          }
        },
        PSEUDO: function (e, o) {
          var t,
          a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error('unsupported pseudo: ' + e);
          return a[k] ? a(o)  : 1 < a.length ? (t = [
            e,
            e,
            '',
            o
          ], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
            r = a(e, o),
            i = r.length;
            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
          })  : function (e) {
            return a(e, 0, t)
          })  : a
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [
          ],
          i = [
          ],
          s = f(e.replace(B, '$1'));
          return s[k] ? le(function (e, t, n, r) {
            var i,
            o = s(e, null, r, [
            ]),
            a = e.length;
            while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
          })  : function (e, t, n) {
            return r[0] = e,
            s(r, null, n, i),
            r[0] = null,
            !i.pop()
          }
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length
          }
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne),
          function (e) {
            return - 1 < (e.textContent || o(e)).indexOf(t)
          }
        }),
        lang: le(function (n) {
          return V.test(n || '') || se.error('unsupported lang: ' + n),
          n = n.replace(te, ne).toLowerCase(),
          function (e) {
            var t;
            do {
              if (t = E ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang')) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1
          }
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id
        },
        root: function (e) {
          return e === a
        },
        focus: function (e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && !!e.checked || 'option' === t && !!e.selected
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex,
          !0 === e.selected
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function (e) {
          return !b.pseudos.empty(e)
        },
        header: function (e) {
          return J.test(e.nodeName)
        },
        input: function (e) {
          return Q.test(e.nodeName)
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && 'button' === e.type || 'button' === t
        },
        text: function (e) {
          var t;
          return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
        },
        first: ve(function () {
          return [0]
        }),
        last: ve(function (e, t) {
          return [t - 1]
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
          return e
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
          return e
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = de(e);
    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = he(e);
    function me() {
    }
    function xe(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r
    }
    function be(s, e, t) {
      var u = e.dir,
      l = e.next,
      c = l || u,
      f = t && 'parentNode' === c,
      p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
        return !1
      }
       : function (e, t, n) {
        var r,
        i,
        o,
        a = [
          S,
          p
        ];
        if (n) {
          while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
        } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {
        })) [e.uniqueID] || (o[e.uniqueID] = {
        }), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
         else {
          if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
          if ((i[c] = a) [2] = s(e, t, n)) return !0
        }
        return !1
      }
    }
    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0
      }
       : i[0]
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [
      ], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a
    }
    function Ce(d, h, g, v, y, e) {
      return v && !v[k] && (v = Ce(v)),
      y && !y[k] && (y = Ce(y, e)),
      le(function (e, t, n, r) {
        var i,
        o,
        a,
        s = [
        ],
        u = [
        ],
        l = t.length,
        c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
          return n
        }(h || '*', n.nodeType ? [
          n
        ] : n, [
        ]),
        f = !d || !e && h ? c : Te(c, s, d, n, r),
        p = g ? y || (e ? d : l || v) ? [
        ] : t : f;
        if (g && g(f, p, n, r), v) {
          i = Te(p, u),
          v(i, [
          ], n, r),
          o = i.length;
          while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [
              ],
              o = p.length;
              while (o--) (a = p[o]) && i.push(f[o] = a);
              y(null, p = [
              ], i, r)
            }
            o = p.length;
            while (o--) (a = p[o]) && - 1 < (i = y ? P(e, a)  : s[o]) && (e[i] = !(t[i] = a))
          }
        } else p = Te(p === t ? p.splice(l, p.length)  : p),
        y ? y(null, t, p, r)  : H.apply(t, p)
      })
    }
    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[' '], s = o ? 1 : 0, u = be(function (e) {
        return e === i
      }, a, !0), l = be(function (e) {
        return - 1 < P(i, e)
      }, a, !0), c = [
        function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n)  : l(e, t, n));
          return i = null,
          r
        }
      ]; s < r; s++) if (t = b.relative[e[s].type]) c = [
        be(we(c), t)
      ];
       else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches)) [k]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
          return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
            value: ' ' === e[s - 2].type ? '*' : ''
          })).replace(B, '$1'), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
        }
        c.push(t)
      }
      return we(c)
    }
    return me.prototype = b.filters = b.pseudos,
    b.setFilters = new me,
    h = se.tokenize = function (e, t) {
      var n,
      r,
      i,
      o,
      a,
      s,
      u,
      l = x[e + ' '];
      if (l) return t ? 0 : l.slice(0);
      a = e,
      s = [
      ],
      u = b.preFilter;
      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [
        ])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(B, ' ')
        }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break
      }
      return t ? a.length : a ? se.error(e)  : x(e, s).slice(0)
    },
    f = se.compile = function (e, t) {
      var n,
      v,
      y,
      m,
      x,
      r,
      i = [
      ],
      o = [
      ],
      a = N[e + ' '];
      if (!a) {
        t || (t = h(e)),
        n = t.length;
        while (n--) (a = Ee(t[n])) [k] ? i.push(a)  : o.push(a);
        (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
          var o,
          a,
          s,
          u = 0,
          l = '0',
          c = e && [
          ],
          f = [
          ],
          p = w,
          d = e || x && b.find.TAG('*', i),
          h = S += null == p ? 1 : Math.random() || 0.1,
          g = d.length;
          for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0,
              t || o.ownerDocument === C || (T(o), n = !E);
              while (s = v[a++]) if (s(o, t || C, n)) {
                r.push(o);
                break
              }
              i && (S = h)
            }
            m && ((o = !s && o) && u--, e && c.push(o))
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
              f = Te(f)
            }
            H.apply(r, f),
            i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
          }
          return i && (S = h, w = p),
          c
        }, m ? le(r)  : r))).selector = e
      }
      return a
    },
    g = se.select = function (e, t, n, r) {
      var i,
      o,
      a,
      s,
      u,
      l = 'function' == typeof e && e,
      c = !r && h(e = l.selector || e);
      if (n = n || [
      ], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && 'ID' === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [
          ]) [0])) return n;
          l && (t = t.parentNode),
          e = e.slice(o.shift().value.length)
        }
        i = G.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r),
            n;
            break
          }
        }
      }
      return (l || f(e, c)) (r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
      n
    },
    d.sortStable = k.split('').sort(D).join('') === k,
    d.detectDuplicates = !!l,
    T(),
    d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement('fieldset'))
    }),
    ce(function (e) {
      return e.innerHTML = '<a href=\'#\'></a>',
      '#' === e.firstChild.getAttribute('href')
    }) || fe('type|href|height|width', function (e, t, n) {
      if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
    }),
    d.attributes && ce(function (e) {
      return e.innerHTML = '<input/>',
      e.firstChild.setAttribute('value', ''),
      '' === e.firstChild.getAttribute('value')
    }) || fe('value', function (e, t, n) {
      if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue
    }),
    ce(function (e) {
      return null == e.getAttribute('disabled')
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase()  : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }),
    se
  }(C);
  k.find = h,
  k.expr = h.selectors,
  k.expr[':'] = k.expr.pseudos,
  k.uniqueSort = k.unique = h.uniqueSort,
  k.text = h.getText,
  k.isXMLDoc = h.isXML,
  k.contains = h.contains,
  k.escapeSelector = h.escape;
  var T = function (e, t, n) {
    var r = [
    ],
    i = void 0 !== n;
    while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
      if (i && k(e).is(n)) break;
      r.push(e)
    }
    return r
  },
  S = function (e, t) {
    for (var n = [
    ]; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n
  },
  N = k.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r
    })  : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r
    })  : 'string' != typeof n ? k.grep(e, function (e) {
      return - 1 < i.call(n, e) !== r
    })  : k.filter(n, e, r)
  }
  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ':not(' + e + ')'),
    1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [
      r
    ] : [
    ] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  },
  k.fn.extend({
    find: function (e) {
      var t,
      n,
      r = this.length,
      i = this;
      if ('string' != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
      return 1 < r ? k.uniqueSort(n)  : n
    },
    filter: function (e) {
      return this.pushStack(j(this, e || [
      ], !1))
    },
    not: function (e) {
      return this.pushStack(j(this, e || [
      ], !0))
    },
    is: function (e) {
      return !!j(this, 'string' == typeof e && N.test(e) ? k(e)  : e || [
      ], !1).length
    }
  });
  var q,
  L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r,
    i;
    if (!e) return this;
    if (n = n || q, 'string' == typeof e) {
      if (!(r = '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length ? [
        null,
        e,
        null
      ] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e)  : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r])  : this.attr(r, t[r]);
        return this
      }
      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1),
      this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this)  : m(e) ? void 0 !== n.ready ? n.ready(e)  : e(k)  : k.makeArray(e, this)
  }).prototype = k.fn,
  q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/,
  O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e
  }
  k.fn.extend({
    has: function (e) {
      var t = k(e, this),
      n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n,
      r = 0,
      i = this.length,
      o = [
      ],
      a = 'string' != typeof e && k(e);
      if (!N.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? - 1 < a.index(n)  : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
        o.push(n);
        break
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o)  : o)
    },
    index: function (e) {
      return e ? 'string' == typeof e ? i.call(k(e), this[0])  : i.call(this, e.jquery ? e[0] : e)  : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }),
  k.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function (e) {
      return T(e, 'parentNode')
    },
    parentsUntil: function (e, t, n) {
      return T(e, 'parentNode', n)
    },
    next: function (e) {
      return P(e, 'nextSibling')
    },
    prev: function (e) {
      return P(e, 'previousSibling')
    },
    nextAll: function (e) {
      return T(e, 'nextSibling')
    },
    prevAll: function (e) {
      return T(e, 'previousSibling')
    },
    nextUntil: function (e, t, n) {
      return T(e, 'nextSibling', n)
    },
    prevUntil: function (e, t, n) {
      return T(e, 'previousSibling', n)
    },
    siblings: function (e) {
      return S((e.parentNode || {
      }).firstChild, e)
    },
    children: function (e) {
      return S(e.firstChild)
    },
    contents: function (e) {
      return 'undefined' != typeof e.contentDocument ? e.contentDocument : (A(e, 'template') && (e = e.content || e), k.merge([], e.childNodes))
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return 'Until' !== r.slice( - 5) && (t = e),
      t && 'string' == typeof t && (n = k.filter(t, n)),
      1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()),
      this.pushStack(n)
    }
  });
  var R = /[^\x20\t\r\n\f]+/g;
  function M(e) {
    return e
  }
  function I(e) {
    throw e
  }
  function W(e, t, n, r) {
    var i;
    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n)  : e && m(i = e.then) ? i.call(e, t, n)  : t.apply(void 0, [
        e
      ].slice(r))
    } catch (e) {
      n.apply(void 0, [
        e
      ])
    }
  }
  k.Callbacks = function (r) {
    var e,
    n;
    r = 'string' == typeof r ? (e = r, n = {
    }, k.each(e.match(R) || [
    ], function (e, t) {
      n[t] = !0
    }), n)  : k.extend({
    }, r);
    var i,
    t,
    o,
    a,
    s = [
    ],
    u = [
    ],
    l = - 1,
    c = function () {
      for (a = a || r.once, o = i = !0; u.length; l = - 1) {
        t = u.shift();
        while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
      }
      r.memory || (t = !1),
      i = !1,
      a && (s = t ? [
      ] : '')
    },
    f = {
      add: function () {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          k.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t)  : t && t.length && 'string' !== w(t) && n(t)
          })
        }(arguments), t && !i && c()),
        this
      },
      remove: function () {
        return k.each(arguments, function (e, t) {
          var n;
          while ( - 1 < (n = k.inArray(t, s, n))) s.splice(n, 1),
          n <= l && l--
        }),
        this
      },
      has: function (e) {
        return e ? - 1 < k.inArray(e, s)  : 0 < s.length
      },
      empty: function () {
        return s && (s = [
        ]),
        this
      },
      disable: function () {
        return a = u = [
        ],
        s = t = '',
        this
      },
      disabled: function () {
        return !s
      },
      lock: function () {
        return a = u = [
        ],
        t || i || (s = t = ''),
        this
      },
      locked: function () {
        return !!a
      },
      fireWith: function (e, t) {
        return a || (t = [
          e,
          (t = t || [
          ]).slice ? t.slice()  : t
        ], u.push(t), i || c()),
        this
      },
      fire: function () {
        return f.fireWith(this, arguments),
        this
      },
      fired: function () {
        return !!o
      }
    };
    return f
  },
  k.extend({
    Deferred: function (e) {
      var o = [
        ['notify',
        'progress',
        k.Callbacks('memory'),
        k.Callbacks('memory'),
        2],
        [
          'resolve',
          'done',
          k.Callbacks('once memory'),
          k.Callbacks('once memory'),
          0,
          'resolved'
        ],
        [
          'reject',
          'fail',
          k.Callbacks('once memory'),
          k.Callbacks('once memory'),
          1,
          'rejected'
        ]
      ],
      i = 'pending',
      a = {
        state: function () {
          return i
        },
        always: function () {
          return s.done(arguments).fail(arguments),
          this
        },
        'catch': function (e) {
          return a.then(null, e)
        },
        pipe: function () {
          var i = arguments;
          return k.Deferred(function (r) {
            k.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject)  : r[t[0] + 'With'](this, n ? [
                  e
                ] : arguments)
              })
            }),
            i = null
          }).promise()
        },
        then: function (t, n, r) {
          var u = 0;
          function l(i, o, a, s) {
            return function () {
              var n = this,
              r = arguments,
              e = function () {
                var e,
                t;
                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError('Thenable self-resolution');
                  t = e && ('object' == typeof e || 'function' == typeof e) && e.then,
                  m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s))  : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith)))  : (a !== M && (n = void 0, r = [
                    e
                  ]), (s || o.resolveWith) (n, r))
                }
              },
              t = s ? e : function () {
                try {
                  e()
                } catch (e) {
                  k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace),
                  u <= i + 1 && (a !== I && (n = void 0, r = [
                    e
                  ]), o.rejectWith(n, r))
                }
              };
              i ? t()  : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
            }
          }
          return k.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
            o[1][3].add(l(0, e, m(t) ? t : M)),
            o[2][3].add(l(0, e, m(n) ? n : I))
          }).promise()
        },
        promise: function (e) {
          return null != e ? k.extend(e, a)  : a
        }
      },
      s = {
      };
      return k.each(o, function (e, t) {
        var n = t[2],
        r = t[5];
        a[t[1]] = n.add,
        r && n.add(function () {
          i = r
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
        n.add(t[3].fire),
        s[t[0]] = function () {
          return s[t[0] + 'With'](this === s ? void 0 : this, arguments),
          this
        },
        s[t[0] + 'With'] = n.fireWith
      }),
      a.promise(s),
      e && e.call(s, s),
      s
    },
    when: function (e) {
      var n = arguments.length,
      t = n,
      r = Array(t),
      i = s.call(arguments),
      o = k.Deferred(),
      a = function (t) {
        return function (e) {
          r[t] = this,
          i[t] = 1 < arguments.length ? s.call(arguments)  : e,
          --n || o.resolveWith(r, i)
        }
      };
      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), 'pending' === o.state() || m(i[t] && i[t].then))) return o.then();
      while (t--) W(i[t], a(t), o.reject);
      return o.promise()
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t)
  },
  k.readyException = function (e) {
    C.setTimeout(function () {
      throw e
    })
  };
  var F = k.Deferred();
  function B() {
    E.removeEventListener('DOMContentLoaded', B),
    C.removeEventListener('load', B),
    k.ready()
  }
  k.fn.ready = function (e) {
    return F.then(e) ['catch'](function (e) {
      k.readyException(e)
    }),
    this
  },
  k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [
        k
      ])
    }
  }),
  k.ready.then = F.then,
  'complete' === E.readyState || 'loading' !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready)  : (E.addEventListener('DOMContentLoaded', B), C.addEventListener('load', B));
  var _ = function (e, t, n, r, i, o, a) {
    var s = 0,
    u = e.length,
    l = null == n;
    if ('object' === w(n)) for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
     else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null)  : (l = t, t = function (e, t, n) {
      return l.call(k(e), n)
    })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e)  : u ? t(e[0], n)  : o
  },
  z = /^-ms-/,
  U = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase()
  }
  function V(e) {
    return e.replace(z, 'ms-').replace(U, X)
  }
  var G = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || ! + e.nodeType
  };
  function Y() {
    this.expando = k.expando + Y.uid++
  }
  Y.uid = 1,
  Y.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {
      }, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))),
      t
    },
    set: function (e, t, n) {
      var r,
      i = this.cache(e);
      if ('string' == typeof t) i[V(t)] = n;
       else for (r in t) i[V(r)] = t[r];
      return i
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e)  : e[this.expando] && e[this.expando][V(t)]
    },
    access: function (e, t, n) {
      return void 0 === t || t && 'string' == typeof t && void 0 === n ? this.get(e, t)  : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function (e, t) {
      var n,
      r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V)  : (t = V(t)) in r ? [
            t
          ] : t.match(R) || [
          ]).length;
          while (n--) delete r[t[n]]
        }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t)
    }
  };
  var Q = new Y,
  J = new Y,
  K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  Z = /[A-Z]/g;
  function ee(e, t, n) {
    var r,
    i;
    if (void 0 === n && 1 === e.nodeType) if (r = 'data-' + t.replace(Z, '-$&').toLowerCase(), 'string' == typeof (n = e.getAttribute(r))) {
      try {
        n = 'true' === (i = n) || 'false' !== i && ('null' === i ? null : i === + i + '' ? + i : K.test(i) ? JSON.parse(i)  : i)
      } catch (e) {
      }
      J.set(e, t, n)
    } else n = void 0;
    return n
  }
  k.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e)
    },
    data: function (e, t, n) {
      return J.access(e, t, n)
    },
    removeData: function (e, t) {
      J.remove(e, t)
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n)
    },
    _removeData: function (e, t) {
      Q.remove(e, t)
    }
  }),
  k.fn.extend({
    data: function (n, e) {
      var t,
      r,
      i,
      o = this[0],
      a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, 'hasDataAttrs'))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf('data-') && (r = V(r.slice(5)), ee(o, r, i[r]));
          Q.set(o, 'hasDataAttrs', !0)
        }
        return i
      }
      return 'object' == typeof n ? this.each(function () {
        J.set(this, n)
      })  : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e)
        })
      }, null, e, 1 < arguments.length, null, !0)
    },
    removeData: function (e) {
      return this.each(function () {
        J.remove(this, e)
      })
    }
  }),
  k.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || 'fx') + 'queue',
      r = Q.get(e, t),
      n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n))  : r.push(n)),
      r || [
      ]
    },
    dequeue: function (e, t) {
      t = t || 'fx';
      var n = k.queue(e, t),
      r = n.length,
      i = n.shift(),
      o = k._queueHooks(e, t);
      'inprogress' === i && (i = n.shift(), r--),
      i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, function () {
        k.dequeue(e, t)
      }, o)),
      !r && o && o.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + 'queueHooks';
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks('once memory').add(function () {
          Q.remove(e, [
            t + 'queue',
            n
          ])
        })
      })
    }
  }),
  k.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return 'string' != typeof t && (n = t, t = 'fx', e--),
      arguments.length < e ? k.queue(this[0], t)  : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t),
        'fx' === t && 'inprogress' !== e[0] && k.dequeue(this, t)
      })
    },
    dequeue: function (e) {
      return this.each(function () {
        k.dequeue(this, e)
      })
    },
    clearQueue: function (e) {
      return this.queue(e || 'fx', [
      ])
    },
    promise: function (e, t) {
      var n,
      r = 1,
      i = k.Deferred(),
      o = this,
      a = this.length,
      s = function () {
        --r || i.resolveWith(o, [
          o
        ])
      };
      'string' != typeof e && (t = e, e = void 0),
      e = e || 'fx';
      while (a--) (n = Q.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
      return s(),
      i.promise(t)
    }
  });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  ne = new RegExp('^(?:([+-])=|)(' + te + ')([a-z%]*)$', 'i'),
  re = [
    'Top',
    'Right',
    'Bottom',
    'Left'
  ],
  ie = E.documentElement,
  oe = function (e) {
    return k.contains(e.ownerDocument, e)
  },
  ae = {
    composed: !0
  };
  ie.getRootNode && (oe = function (e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
  });
  var se = function (e, t) {
    return 'none' === (e = t || e).style.display || '' === e.style.display && oe(e) && 'none' === k.css(e, 'display')
  },
  ue = function (e, t, n, r) {
    var i,
    o,
    a = {
    };
    for (o in t) a[o] = e.style[o],
    e.style[o] = t[o];
    for (o in i = n.apply(e, r || [
    ]), t) e.style[o] = a[o];
    return i
  };
  function le(e, t, n, r) {
    var i,
    o,
    a = 20,
    s = r ? function () {
      return r.cur()
    }
     : function () {
      return k.css(e, t, '')
    },
    u = s(),
    l = n && n[3] || (k.cssNumber[t] ? '' : 'px'),
    c = e.nodeType && (k.cssNumber[t] || 'px' !== l && + u) && ne.exec(k.css(e, t));
    if (c && c[3] !== l) {
      u /= 2,
      l = l || c[3],
      c = + u || 1;
      while (a--) k.style(e, t, c + l),
      (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
      c /= o;
      c *= 2,
      k.style(e, t, c + l),
      n = n || [
      ]
    }
    return n && (c = + c || + u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : + n[2], r && (r.unit = l, r.start = c, r.end = i)),
    i
  }
  var ce = {
  };
  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [
    ], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ('none' === n && (l[c] = Q.get(r, 'display') || null, l[c] || (r.style.display = '')), '' === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, 'display'), o.parentNode.removeChild(o), 'none' === u && (u = 'block'), ce[s] = u))))  : 'none' !== n && (l[c] = 'none', Q.set(r, 'display', n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e
  }
  k.fn.extend({
    show: function () {
      return fe(this, !0)
    },
    hide: function () {
      return fe(this)
    },
    toggle: function (e) {
      return 'boolean' == typeof e ? e ? this.show()  : this.hide()  : this.each(function () {
        se(this) ? k(this).show()  : k(this).hide()
      })
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
  de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
  he = /^$|^module$|\/(?:java|ecma)script/i,
  ge = {
    option: [
      1,
      '<select multiple=\'multiple\'>',
      '</select>'
    ],
    thead: [
      1,
      '<table>',
      '</table>'
    ],
    col: [
      2,
      '<table><colgroup>',
      '</colgroup></table>'
    ],
    tr: [
      2,
      '<table><tbody>',
      '</tbody></table>'
    ],
    td: [
      3,
      '<table><tbody><tr>',
      '</tr></tbody></table>'
    ],
    _default: [
      0,
      '',
      ''
    ]
  };
  function ve(e, t) {
    var n;
    return n = 'undefined' != typeof e.getElementsByTagName ? e.getElementsByTagName(t || '*')  : 'undefined' != typeof e.querySelectorAll ? e.querySelectorAll(t || '*')  : [
    ],
    void 0 === t || t && A(e, t) ? k.merge([e], n)  : n
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], 'globalEval', !t || Q.get(t[n], 'globalEval'))
  }
  ge.optgroup = ge.option,
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
  ge.th = ge.td;
  var me,
  xe,
  be = /<|&#?\w+;/;
  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [
    ], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ('object' === w(o)) k.merge(p, o.nodeType ? [
      o
    ] : o);
     else if (be.test(o)) {
      a = a || f.appendChild(t.createElement('div')),
      s = (de.exec(o) || [
        '',
        ''
      ]) [1].toLowerCase(),
      u = ge[s] || ge._default,
      a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
      c = u[0];
      while (c--) a = a.lastChild;
      k.merge(p, a.childNodes),
      (a = f.firstChild).textContent = ''
    } else p.push(t.createTextNode(o));
    f.textContent = '',
    d = 0;
    while (o = p[d++]) if (r && - 1 < k.inArray(o, r)) i && i.push(o);
     else if (l = oe(o), a = ve(f.appendChild(o), 'script'), l && ye(a), n) {
      c = 0;
      while (o = a[c++]) he.test(o.type || '') && n.push(o)
    }
    return f
  }
  me = E.createDocumentFragment().appendChild(E.createElement('div')),
  (xe = E.createElement('input')).setAttribute('type', 'radio'),
  xe.setAttribute('checked', 'checked'),
  xe.setAttribute('name', 't'),
  me.appendChild(xe),
  y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked,
  me.innerHTML = '<textarea>x</textarea>',
  y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/,
  Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  Ee = /^([^.]*)(?:\.(.+)|)/;
  function ke() {
    return !0
  }
  function Se() {
    return !1
  }
  function Ne(e, t) {
    return e === function () {
      try {
        return E.activeElement
      } catch (e) {
      }
    }() == ('focus' === t)
  }
  function Ae(e, t, n, r, i, o) {
    var a,
    s;
    if ('object' == typeof t) {
      for (s in 'string' != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0)  : null == i && ('string' == typeof n ? (i = r, r = void 0)  : (i = r, r = n, n = void 0)), !1 === i) i = Se;
     else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return k().off(e),
      a.apply(this, arguments)
    }).guid = a.guid || (a.guid = k.guid++)),
    e.each(function () {
      k.event.add(this, t, i, r, n)
    })
  }
  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1,
      handler: function (e) {
        var t,
        n,
        r = Q.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {
          }).delegateType && e.stopPropagation();
           else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1)  : n = {
          }, r !== n) return e.stopImmediatePropagation(),
          e.preventDefault(),
          n.value
        } else r.length && (Q.set(this, i, {
          value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation())
      }
    }))  : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
  }
  k.event = {
    global: {
    },
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
      v = Q.get(t);
      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector),
        i && k.find.matchesSelector(ie, i),
        n.guid || (n.guid = k.guid++),
        (u = v.events) || (u = v.events = {
        }),
        (a = v.handle) || (a = v.handle = function (e) {
          return 'undefined' != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments)  : void 0
        }),
        l = (e = (e || '').match(R) || [
          ''
        ]).length;
        while (l--) d = g = (s = Ee.exec(e[l]) || [
        ]) [1],
        h = (s[2] || '').split('.').sort(),
        d && (f = k.event.special[d] || {
        }, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {
        }, c = k.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && k.expr.match.needsContext.test(i),
          namespace: h.join('.')
        }, o), (p = u[d]) || ((p = u[d] = [
        ]).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c)  : p.push(c), k.event.global[d] = !0)
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
      v = Q.hasData(e) && Q.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || '').match(R) || [
          ''
        ]).length;
        while (l--) if (d = g = (s = Ee.exec(t[l]) || [
        ]) [1], h = (s[2] || '').split('.').sort(), d) {
          f = k.event.special[d] || {
          },
          p = u[d = (r ? f.delegateType : f.bindType) || d] || [
          ],
          s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
          a = o = p.length;
          while (o--) c = p[o],
          !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ('**' !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
        } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && Q.remove(e, 'handle events')
      }
    },
    dispatch: function (e) {
      var t,
      n,
      r,
      i,
      o,
      a,
      s = k.event.fix(e),
      u = new Array(arguments.length),
      l = (Q.get(this, 'events') || {
      }) [s.type] || [
      ],
      c = k.event.special[s.type] || {
      };
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l),
        t = 0;
        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem,
          n = 0;
          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {
          }).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, s),
        s.result
      }
    },
    handlers: function (e, t) {
      var n,
      r,
      i,
      o,
      a,
      s = [
      ],
      u = t.delegateCount,
      l = e.target;
      if (u && l.nodeType && !('click' === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
        for (o = [
        ], a = {
        }, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + ' '] && (a[i] = r.needsContext ? - 1 < k(i, this).index(l)  : k.find(i, this, null, [
          l
        ]).length),
        a[i] && o.push(r);
        o.length && s.push({
          elem: l,
          handlers: o
        })
      }
      return l = this,
      u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }),
      s
    },
    addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent)
        }
         : function () {
          if (this.originalEvent) return this.originalEvent[t]
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          })
        }
      })
    },
    fix: function (e) {
      return e[k.expando] ? e : new k.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, 'input') && De(t, 'click', ke),
          !1
        },
        trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, 'input') && De(t, 'click'),
          !0
        },
        _default: function (e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, 'input') && Q.get(t, 'click') || A(t, 'a')
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  },
  k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  },
  k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget)  : this.type = e,
    t && k.extend(this, t),
    this.timeStamp = e && e.timeStamp || Date.now(),
    this[k.expando] = !0
  },
  k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke,
      e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = ke,
      e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke,
      e && !this.isSimulated && e.stopImmediatePropagation(),
      this.stopPropagation()
    }
  },
  k.each({
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
    'char': !0,
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
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, k.event.addProp),
  k.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (e, t) {
    k.event.special[e] = {
      setup: function () {
        return De(this, e, Ne),
        !1
      },
      trigger: function () {
        return De(this, e),
        !0
      },
      delegateType: t
    }
  }),
  k.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t,
        n = e.relatedTarget,
        r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i),
        t
      }
    }
  }),
  k.fn.extend({
    on: function (e, t, n, r) {
      return Ae(this, e, t, n, r)
    },
    one: function (e, t, n, r) {
      return Ae(this, e, t, n, r, 1)
    },
    off: function (e, t, n) {
      var r,
      i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
      k(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler),
      this;
      if ('object' == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && 'function' != typeof t || (n = t, t = void 0),
      !1 === n && (n = Se),
      this.each(function () {
        k.event.remove(this, e, n, t)
      })
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
  qe = /<script|<style|<link/i,
  Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
  He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return A(e, 'table') && A(11 !== t.nodeType ? t : t.firstChild, 'tr') && k(e).children('tbody') [0] || e
  }
  function Pe(e) {
    return e.type = (null !== e.getAttribute('type')) + '/' + e.type,
    e
  }
  function Re(e) {
    return 'true/' === (e.type || '').slice(0, 5) ? e.type = e.type.slice(5)  : e.removeAttribute('type'),
    e
  }
  function Me(e, t) {
    var n,
    r,
    i,
    o,
    a,
    s,
    u,
    l;
    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {
      }, l) for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
      J.hasData(e) && (s = J.access(e), u = k.extend({
      }, s), J.set(t, u))
    }
  }
  function Ie(n, r, i, o) {
    r = g.apply([], r);
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
    if (h || 1 < f && 'string' == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())),
      Ie(t, r, i, o)
    });
    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, 'script'), Pe)).length; c < f; c++) u = e,
      c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, 'script'))),
      i.call(n[c], u, c);
      if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c],
      he.test(u.type || '') && !Q.access(u, 'globalEval') && k.contains(l, u) && (u.src && 'module' !== (u.type || '').toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute('nonce')
      })  : b(u.textContent.replace(He, ''), u, l))
    }
    return n
  }
  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e)  : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)),
    r.parentNode && (n && oe(r) && ye(ve(r, 'script')), r.parentNode.removeChild(r));
    return e
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(je, '<$1></$2>')
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
      f = oe(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r],
      u = a[r],
      void 0,
      'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : 'input' !== l && 'textarea' !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
       else Me(e, c);
      return 0 < (a = ve(c, 'script')).length && ye(a, !f && ve(e, 'script')),
      c
    },
    cleanData: function (e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) if (G(n)) {
        if (t = n[Q.expando]) {
          if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r)  : k.removeEvent(n, r, t.handle);
          n[Q.expando] = void 0
        }
        n[J.expando] && (n[J.expando] = void 0)
      }
    }
  }),
  k.fn.extend({
    detach: function (e) {
      return We(this, e, !0)
    },
    remove: function (e) {
      return We(this, e)
    },
    text: function (e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this)  : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function () {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
      })
    },
    prepend: function () {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function () {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function () {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = '');
      return this
    },
    clone: function (e, t) {
      return e = null != e && e,
      t = null == t ? e : t,
      this.map(function () {
        return k.clone(this, e, t)
      })
    },
    html: function (e) {
      return _(this, function (e) {
        var t = this[0] || {
        },
        n = 0,
        r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ('string' == typeof e && !qe.test(e) && !ge[(de.exec(e) || [
          '',
          ''
        ]) [1].toLowerCase()]) {
          e = k.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {
            }).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function () {
      var n = [
      ];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }),
  k.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [
      ], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0),
      k(r[o]) [a](t),
      u.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var $e = new RegExp('^(' + te + ')(?!px)[a-z%]+$', 'i'),
  Fe = function (e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C),
    t.getComputedStyle(e)
  },
  Be = new RegExp(re.join('|'), 'i');
  function _e(e, t, n) {
    var r,
    i,
    o,
    a,
    s = e.style;
    return (n = n || Fe(e)) && ('' !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)),
    void 0 !== a ? a + '' : a
  }
  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }
  !function () {
    function e() {
      if (u) {
        s.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0',
        u.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%',
        ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = '1%' !== e.top,
        a = 12 === t(e.marginLeft),
        u.style.right = '60%',
        o = 36 === t(e.right),
        r = 36 === t(e.width),
        u.style.position = 'absolute',
        i = 12 === t(u.offsetWidth / 3),
        ie.removeChild(s),
        u = null
      }
    }
    function t(e) {
      return Math.round(parseFloat(e))
    }
    var n,
    r,
    i,
    o,
    a,
    s = E.createElement('div'),
    u = E.createElement('div');
    u.style && (u.style.backgroundClip = 'content-box', u.cloneNode(!0).style.backgroundClip = '', y.clearCloneStyle = 'content-box' === u.style.backgroundClip, k.extend(y, {
      boxSizingReliable: function () {
        return e(),
        r
      },
      pixelBoxStyles: function () {
        return e(),
        o
      },
      pixelPosition: function () {
        return e(),
        n
      },
      reliableMarginLeft: function () {
        return e(),
        a
      },
      scrollboxSize: function () {
        return e(),
        i
      }
    }))
  }();
  var Ue = [
    'Webkit',
    'Moz',
    'ms'
  ],
  Xe = E.createElement('div').style,
  Ve = {
  };
  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
      n = Ue.length;
      while (n--) if ((e = Ue[n] + t) in Xe) return e
    }(e) || e)
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
  Qe = /^--/,
  Je = {
    position: 'absolute',
    visibility: 'hidden',
    display: 'block'
  },
  Ke = {
    letterSpacing: '0',
    fontWeight: '400'
  };
  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px')  : t
  }
  function et(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
    s = 0,
    u = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2) 'margin' === n && (u += k.css(e, n + re[a], !0, i)),
    r ? ('content' === n && (u -= k.css(e, 'padding' + re[a], !0, i)), 'margin' !== n && (u -= k.css(e, 'border' + re[a] + 'Width', !0, i)))  : (u += k.css(e, 'padding' + re[a], !0, i), 'padding' !== n ? u += k.css(e, 'border' + re[a] + 'Width', !0, i)  : s += k.css(e, 'border' + re[a] + 'Width', !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0),
    u
  }
  function tt(e, t, n) {
    var r = Fe(e),
    i = (!y.boxSizingReliable() || n) && 'border-box' === k.css(e, 'boxSizing', !1, r),
    o = i,
    a = _e(e, t, r),
    s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if ($e.test(a)) {
      if (!n) return a;
      a = 'auto'
    }
    return (!y.boxSizingReliable() && i || 'auto' === a || !parseFloat(a) && 'inline' === k.css(e, 'display', !1, r)) && e.getClientRects().length && (i = 'border-box' === k.css(e, 'boxSizing', !1, r), (o = s in e) && (a = e[s])),
    (a = parseFloat(a) || 0) + et(e, t, n || (i ? 'border' : 'content'), o, r, a) + 'px'
  }
  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i)
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = _e(e, 'opacity');
            return '' === n ? '1' : n
          }
        }
      }
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
      zoom: !0
    },
    cssProps: {
    },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
        o,
        a,
        s = V(t),
        u = Qe.test(t),
        l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = 'number'),
        null != n && n == n && ('number' !== o || u || (n += i && i[3] || (k.cssNumber[s] ? '' : 'px')), y.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'), a && 'set' in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n)  : l[t] = n))
      }
    },
    css: function (e, t, n, r) {
      var i,
      o,
      a,
      s = V(t);
      return Qe.test(t) || (t = Ge(s)),
      (a = k.cssHooks[t] || k.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)),
      void 0 === i && (i = _e(e, t, r)),
      'normal' === i && t in Ke && (i = Ke[t]),
      '' === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i)  : i
    }
  }),
  k.each(['height',
  'width'], function (e, u) {
    k.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !Ye.test(k.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n)  : ue(e, Je, function () {
          return tt(e, u, n)
        })
      },
      set: function (e, t, n) {
        var r,
        i = Fe(e),
        o = !y.scrollboxSize() && 'absolute' === i.position,
        a = (o || n) && 'border-box' === k.css(e, 'boxSizing', !1, i),
        s = n ? et(e, u, n, a, i)  : 0;
        return a && o && (s -= Math.ceil(e['offset' + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, 'border', !1, i) - 0.5)),
        s && (r = ne.exec(t)) && 'px' !== (r[3] || 'px') && (e.style[u] = t, t = k.css(e, u)),
        Ze(0, t, s)
      }
    }
  }),
  k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, 'marginLeft')) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left
    })) + 'px'
  }),
  k.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {
        }, r = 'string' == typeof e ? e.split(' ')  : [
          e
        ]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        return n
      }
    },
    'margin' !== i && (k.cssHooks[i + o].set = Ze)
  }),
  k.fn.extend({
    css: function (e, t) {
      return _(this, function (e, t, n) {
        var r,
        i,
        o = {
        },
        a = 0;
        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? k.style(e, t, n)  : k.css(e, t)
      }, e, t, 1 < arguments.length)
    }
  }),
  ((k.Tween = nt).prototype = {
    constructor: nt,
    init: function (e, t, n, r, i, o) {
      this.elem = e,
      this.prop = n,
      this.easing = i || k.easing._default,
      this.options = t,
      this.start = this.now = this.cur(),
      this.end = r,
      this.unit = o || (k.cssNumber[n] ? '' : 'px')
    },
    cur: function () {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this)  : nt.propHooks._default.get(this)
    },
    run: function (e) {
      var t,
      n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)  : this.pos = t = e,
      this.now = (this.end - this.start) * t + this.start,
      this.options.step && this.options.step.call(this.elem, this.now, this),
      n && n.set ? n.set(this)  : nt.propHooks._default.set(this),
      this
    }
  }).init.prototype = nt.prototype,
  (nt.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, '')) && 'auto' !== t ? t : 0
      },
      set: function (e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e)  : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  },
  k.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2
    },
    _default: 'swing'
  },
  k.fx = nt.prototype.init,
  k.fx.step = {
  };
  var rt,
  it,
  ot,
  at,
  st = /^(?:toggle|show|hide)$/,
  ut = /queueHooks$/;
  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt)  : C.setTimeout(lt, k.fx.interval), k.fx.tick())
  }
  function ct() {
    return C.setTimeout(function () {
      rt = void 0
    }),
    rt = Date.now()
  }
  function ft(e, t) {
    var n,
    r = 0,
    i = {
      height: e
    };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i['margin' + (n = re[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e),
    i
  }
  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || [
    ]).concat(dt.tweeners['*']), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
  }
  function dt(o, e, t) {
    var n,
    a,
    r = 0,
    i = dt.prefilters.length,
    s = k.Deferred().always(function () {
      delete u.elem
    }),
    u = function () {
      if (a) return !1;
      for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
      return s.notifyWith(o, [
        l,
        n,
        t
      ]),
      n < 1 && i ? t : (i || s.notifyWith(o, [
        l,
        1,
        0
      ]), s.resolveWith(o, [
        l
      ]), !1)
    },
    l = s.promise({
      elem: o,
      props: k.extend({
      }, e),
      opts: k.extend(!0, {
        specialEasing: {
        },
        easing: k.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: rt || ct(),
      duration: t.duration,
      tweens: [
      ],
      createTween: function (e, t) {
        var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n),
        n
      },
      stop: function (e) {
        var t = 0,
        n = e ? l.tweens.length : 0;
        if (a) return this;
        for (a = !0; t < n; t++) l.tweens[t].run(1);
        return e ? (s.notifyWith(o, [
          l,
          1,
          0
        ]), s.resolveWith(o, [
          l,
          e
        ]))  : s.rejectWith(o, [
          l,
          e
        ]),
        this
      }
    }),
    c = l.props;
    for (!function (e, t) {
      var n,
      r,
      i,
      o,
      a;
      for (n in e) if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && 'expand' in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
       else t[r] = i
    }(c, l.opts.specialEasing); r < i; r++) if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
    n;
    return k.map(c, pt, l),
    m(l.opts.start) && l.opts.start.call(o, l),
    l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
    k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })),
    l
  }
  k.Animation = k.extend(dt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return le(n.elem, e, ne.exec(t), n),
          n
        }
      ]
    },
    tweener: function (e, t) {
      m(e) ? (t = e, e = [
        '*'
      ])  : e = e.match(R);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r],
      dt.tweeners[n] = dt.tweeners[n] || [
      ],
      dt.tweeners[n].unshift(t)
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
        f = 'width' in t || 'height' in t,
        p = this,
        d = {
        },
        h = e.style,
        g = e.nodeType && se(e),
        v = Q.get(e, 'fxshow');
        for (r in n.queue || (null == (a = k._queueHooks(e, 'fx')).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
          a.unqueued || s()
        }), a.unqueued++, p.always(function () {
          p.always(function () {
            a.unqueued--,
            k.queue(e, 'fx').length || a.empty.fire()
          })
        })), t) if (i = t[r], st.test(i)) {
          if (delete t[r], o = o || 'toggle' === i, i === (g ? 'hide' : 'show')) {
            if ('show' !== i || !v || void 0 === v[r]) continue;
            g = !0
          }
          d[r] = v && v[r] || k.style(e, r)
        }
        if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [
          h.overflow,
          h.overflowX,
          h.overflowY
        ], null == (l = v && v.display) && (l = Q.get(e, 'display')), 'none' === (c = k.css(e, 'display')) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, 'display'), fe([e]))), ('inline' === c || 'inline-block' === c && null != l) && 'none' === k.css(e, 'float') && (u || (p.done(function () {
          h.display = l
        }), null == l && (c = h.display, l = 'none' === c ? '' : c)), h.display = 'inline-block')), n.overflow && (h.overflow = 'hidden', p.always(function () {
          h.overflow = n.overflow[0],
          h.overflowX = n.overflow[1],
          h.overflowY = n.overflow[2]
        })), u = !1, d) u || (v ? 'hidden' in v && (g = v.hidden)  : v = Q.access(e, 'fxshow', {
          display: l
        }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), Q.remove(e, 'fxshow'), d) k.style(e, r, d[r])
        })),
        u = pt(g ? v[r] : 0, r, p),
        r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
      }
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e)  : dt.prefilters.push(e)
    }
  }),
  k.speed = function (e, t, n) {
    var r = e && 'object' == typeof e ? k.extend({
    }, e)  : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : 'number' != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default),
    null != r.queue && !0 !== r.queue || (r.queue = 'fx'),
    r.old = r.complete,
    r.complete = function () {
      m(r.old) && r.old.call(this),
      r.queue && k.dequeue(this, r.queue)
    },
    r
  },
  k.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(se).css('opacity', 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function (t, e, n, r) {
      var i = k.isEmptyObject(t),
      o = k.speed(e, n, r),
      a = function () {
        var e = dt(this, k.extend({
        }, t), o);
        (i || Q.get(this, 'finish')) && e.stop(!0)
      };
      return a.finish = a,
      i || !1 === o.queue ? this.each(a)  : this.queue(o.queue, a)
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop,
        t(o)
      };
      return 'string' != typeof i && (o = e, e = i, i = void 0),
      e && !1 !== i && this.queue(i || 'fx', [
      ]),
      this.each(function () {
        var e = !0,
        t = null != i && i + 'queueHooks',
        n = k.timers,
        r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);
         else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
        for (t = n.length; t--; ) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || k.dequeue(this, i)
      })
    },
    finish: function (a) {
      return !1 !== a && (a = a || 'fx'),
      this.each(function () {
        var e,
        t = Q.get(this),
        n = t[a + 'queue'],
        r = t[a + 'queueHooks'],
        i = k.timers,
        o = n ? n.length : 0;
        for (t.finish = !0, k.queue(this, a, [
        ]), r && r.stop && r.stop.call(this, !0), e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }),
  k.each(['toggle',
  'show',
  'hide'], function (e, r) {
    var i = k.fn[r];
    k.fn[r] = function (e, t, n) {
      return null == e || 'boolean' == typeof e ? i.apply(this, arguments)  : this.animate(ft(r, !0), e, t, n)
    }
  }),
  k.each({
    slideDown: ft('show'),
    slideUp: ft('hide'),
    slideToggle: ft('toggle'),
    fadeIn: {
      opacity: 'show'
    },
    fadeOut: {
      opacity: 'hide'
    },
    fadeToggle: {
      opacity: 'toggle'
    }
  }, function (e, r) {
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n)
    }
  }),
  k.timers = [
  ],
  k.fx.tick = function () {
    var e,
    t = 0,
    n = k.timers;
    for (rt = Date.now(); t < n.length; t++) (e = n[t]) () || n[t] !== e || n.splice(t--, 1);
    n.length || k.fx.stop(),
    rt = void 0
  },
  k.fx.timer = function (e) {
    k.timers.push(e),
    k.fx.start()
  },
  k.fx.interval = 13,
  k.fx.start = function () {
    it || (it = !0, lt())
  },
  k.fx.stop = function () {
    it = null
  },
  k.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  },
  k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r,
    e = e || 'fx',
    this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);
      t.stop = function () {
        C.clearTimeout(n)
      }
    })
  },
  ot = E.createElement('input'),
  at = E.createElement('select').appendChild(E.createElement('option')),
  ot.type = 'checkbox',
  y.checkOn = '' !== ot.value,
  y.optSelected = at.selected,
  (ot = E.createElement('input')).value = 't',
  ot.type = 'radio',
  y.radioValue = 't' === ot.value;
  var ht,
  gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function (e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e)
      })
    }
  }),
  k.extend({
    attr: function (e, t, n) {
      var r,
      i,
      o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 'undefined' == typeof e.getAttribute ? k.prop(e, t, n)  : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t)  : i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ''), n)  : i && 'get' in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && 'radio' === t && A(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t),
            n && (e.value = n),
            t
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
      r = 0,
      i = t && t.match(R);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
    }
  }),
  ht = {
    set: function (e, t, n) {
      return !1 === t ? k.removeAttr(e, n)  : e.setAttribute(n, n),
      n
    }
  },
  k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;
    gt[t] = function (e, t, n) {
      var r,
      i,
      o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i),
      r
    }
  });
  var vt = /^(?:input|select|textarea|button)$/i,
  yt = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(R) || [
    ]).join(' ')
  }
  function xt(e) {
    return e.getAttribute && e.getAttribute('class') || ''
  }
  function bt(e) {
    return Array.isArray(e) ? e : 'string' == typeof e && e.match(R) || [
    ]
  }
  k.fn.extend({
    prop: function (e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e]
      })
    }
  }),
  k.extend({
    prop: function (e, t, n) {
      var r,
      i,
      o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]),
      void 0 !== n ? i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = k.find.attr(e, 'tabindex');
          return t ? parseInt(t, 10)  : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : - 1
        }
      }
    },
    propFix: {
      'for': 'htmlFor',
      'class': 'className'
    }
  }),
  y.optSelected || (k.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex,
      null
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }),
  k.each(['tabIndex',
  'readOnly',
  'maxLength',
  'cellSpacing',
  'cellPadding',
  'rowSpan',
  'colSpan',
  'useMap',
  'frameBorder',
  'contentEditable'], function () {
    k.propFix[this.toLowerCase()] = this
  }),
  k.fn.extend({
    addClass: function (t) {
      var e,
      n,
      r,
      i,
      o,
      a,
      s,
      u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)))
      });
      if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && ' ' + mt(i) + ' ') {
        a = 0;
        while (o = e[a++]) r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
        i !== (s = mt(r)) && n.setAttribute('class', s)
      }
      return this
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
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)))
      });
      if (!arguments.length) return this.attr('class', '');
      if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && ' ' + mt(i) + ' ') {
        a = 0;
        while (o = e[a++]) while ( - 1 < r.indexOf(' ' + o + ' ')) r = r.replace(' ' + o + ' ', ' ');
        i !== (s = mt(r)) && n.setAttribute('class', s)
      }
      return this
    },
    toggleClass: function (i, t) {
      var o = typeof i,
      a = 'string' === o || Array.isArray(i);
      return 'boolean' == typeof t && a ? t ? this.addClass(i)  : this.removeClass(i)  : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t)
      })  : this.each(function () {
        var e,
        t,
        n,
        r;
        if (a) {
          t = 0,
          n = k(this),
          r = bt(i);
          while (e = r[t++]) n.hasClass(e) ? n.removeClass(e)  : n.addClass(e)
        } else void 0 !== i && 'boolean' !== o || ((e = xt(this)) && Q.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || !1 === i ? '' : Q.get(this, '__className__') || ''))
      })
    },
    hasClass: function (e) {
      var t,
      n,
      r = 0;
      t = ' ' + e + ' ';
      while (n = this[r++]) if (1 === n.nodeType && - 1 < (' ' + mt(xt(n)) + ' ').indexOf(t)) return !0;
      return !1
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function (n) {
      var r,
      e,
      i,
      t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val())  : n) ? t = '' : 'number' == typeof t ? t += '' : Array.isArray(t) && (t = k.map(t, function (e) {
          return null == e ? '' : e + ''
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && 'set' in r && void 0 !== r.set(this, t, 'value') || (this.value = t))
      }))  : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && 'get' in r && void 0 !== (e = r.get(t, 'value')) ? e : 'string' == typeof (e = t.value) ? e.replace(wt, '')  : null == e ? '' : e : void 0
    }
  }),
  k.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = k.find.attr(e, 'value');
          return null != t ? t : mt(k.text(e))
        }
      },
      select: {
        get: function (e) {
          var t,
          n,
          r,
          i = e.options,
          o = e.selectedIndex,
          a = 'select-one' === e.type,
          s = a ? null : [
          ],
          u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))) {
            if (t = k(n).val(), a) return t;
            s.push(t)
          }
          return s
        },
        set: function (e, t) {
          var n,
          r,
          i = e.options,
          o = k.makeArray(t),
          a = i.length;
          while (a--) ((r = i[a]).selected = - 1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = - 1),
          o
        }
      }
    }
  }),
  k.each(['radio',
  'checkbox'], function () {
    k.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = - 1 < k.inArray(k(e).val(), t)
      }
    },
    y.checkOn || (k.valHooks[this].get = function (e) {
      return null === e.getAttribute('value') ? 'on' : e.value
    })
  }),
  y.focusin = 'onfocusin' in C;
  var Tt = /^(?:focusinfocus|focusoutblur)$/,
  Ct = function (e) {
    e.stopPropagation()
  };
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
      var i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p = [
        n || E
      ],
      d = v.call(e, 'type') ? e.type : e,
      h = v.call(e, 'namespace') ? e.namespace.split('.')  : [
      ];
      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && ( - 1 < d.indexOf('.') && (d = (h = d.split('.')).shift(), h.sort()), u = d.indexOf(':') < 0 && 'on' + d, (e = e[k.expando] ? e : new k.Event(d, 'object' == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join('.'), e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')  : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [
        e
      ] : k.makeArray(t, [
        e
      ]), c = k.event.special[d] || {
      }, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o),
          a = o;
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o,
        e.type = 1 < i ? s : c.bindType || d,
        (l = (Q.get(o, 'events') || {
        }) [e.type] && Q.get(o, 'handle')) && l.apply(o, t),
        (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d,
        r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)),
        e.result
      }
    },
    simulate: function (e, t, n) {
      var r = k.extend(new k.Event, n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(r, null, t)
    }
  }),
  k.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this)
      })
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0)
    }
  }),
  y.focusin || k.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (n, r) {
    var i = function (e) {
      k.event.simulate(r, e.target, k.event.fix(e))
    };
    k.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this,
        t = Q.access(e, r);
        t || e.addEventListener(n, i, !0),
        Q.access(e, r, (t || 0) + 1)
      },
      teardown: function () {
        var e = this.ownerDocument || this,
        t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t)  : (e.removeEventListener(n, i, !0), Q.remove(e, r))
      }
    }
  });
  var Et = C.location,
  kt = Date.now(),
  St = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || 'string' != typeof e) return null;
    try {
      t = (new C.DOMParser).parseFromString(e, 'text/xml')
    } catch (e) {
      t = void 0
    }
    return t && !t.getElementsByTagName('parsererror').length || k.error('Invalid XML: ' + e),
    t
  };
  var Nt = /\[\]$/,
  At = /\r?\n/g,
  Dt = /^(?:submit|button|image|reset|file)$/i,
  jt = /^(?:input|select|textarea|keygen)/i;
  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t)  : qt(n + '[' + ('object' == typeof t && null != t ? e : '') + ']', t, r, i)
    });
     else if (r || 'object' !== w(e)) i(n, e);
     else for (t in e) qt(n + '[' + t + ']', e[t], r, i)
  }
  k.param = function (e, t) {
    var n,
    r = [
    ],
    i = function (e, t) {
      var n = m(t) ? t()  : t;
      r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n)
    };
    if (null == e) return '';
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value)
    });
     else for (n in e) qt(n, e[n], t, i);
    return r.join('&')
  },
  k.fn.extend({
    serialize: function () {
      return k.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = k.prop(this, 'elements');
        return e ? k.makeArray(e)  : this
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(':disabled') && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
      }).map(function (e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(At, '\r\n')
          }
        })  : {
          name: t.name,
          value: n.replace(At, '\r\n')
        }
      }).get()
    }
  });
  var Lt = /%20/g,
  Ht = /#.*$/,
  Ot = /([?&])_=[^&]*/,
  Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
  Rt = /^(?:GET|HEAD)$/,
  Mt = /^\/\//,
  It = {
  },
  Wt = {
  },
  $t = '*/'.concat('*'),
  Ft = E.createElement('a');
  function Bt(o) {
    return function (e, t) {
      'string' != typeof e && (t = e, e = '*');
      var n,
      r = 0,
      i = e.toLowerCase().match(R) || [
      ];
      if (m(t)) while (n = i[r++]) '+' === n[0] ? (n = n.slice(1) || '*', (o[n] = o[n] || [
      ]).unshift(t))  : (o[n] = o[n] || [
      ]).push(t)
    }
  }
  function _t(t, i, o, a) {
    var s = {
    },
    u = t === Wt;
    function l(e) {
      var r;
      return s[e] = !0,
      k.each(t[e] || [
      ], function (e, t) {
        var n = t(i, o, a);
        return 'string' != typeof n || u || s[n] ? u ? !(r = n)  : void 0 : (i.dataTypes.unshift(n), l(n), !1)
      }),
      r
    }
    return l(i.dataTypes[0]) || !s['*'] && l('*')
  }
  function zt(e, t) {
    var n,
    r,
    i = k.ajaxSettings.flatOptions || {
    };
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {
    })) [n] = t[n]);
    return r && k.extend(!0, e, r),
    e
  }
  Ft.href = Et.href,
  k.extend({
    active: 0,
    lastModified: {
    },
    etag: {
    },
    ajaxSettings: {
      url: Et.href,
      type: 'GET',
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': $t,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': JSON.parse,
        'text xml': k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t)  : zt(k.ajaxSettings, e)
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
    ajax: function (e, t) {
      'object' == typeof e && (t = e, e = void 0),
      t = t || {
      };
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
      v = k.ajaxSetup({
      }, t),
      y = v.context || v,
      m = v.context && (y.nodeType || y.jquery) ? k(y)  : k.event,
      x = k.Deferred(),
      b = k.Callbacks('once memory'),
      w = v.statusCode || {
      },
      a = {
      },
      s = {
      },
      u = 'canceled',
      T = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;
          if (h) {
            if (!n) {
              n = {
              };
              while (t = Pt.exec(p)) n[t[1].toLowerCase() + ' '] = (n[t[1].toLowerCase() + ' '] || [
              ]).concat(t[2])
            }
            t = n[e.toLowerCase() + ' ']
          }
          return null == t ? null : t.join(', ')
        },
        getAllResponseHeaders: function () {
          return h ? p : null
        },
        setRequestHeader: function (e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t),
          this
        },
        overrideMimeType: function (e) {
          return null == h && (v.mimeType = e),
          this
        },
        statusCode: function (e) {
          var t;
          if (e) if (h) T.always(e[T.status]);
           else for (t in e) w[t] = [
            w[t],
            e[t]
          ];
          return this
        },
        abort: function (e) {
          var t = e || u;
          return c && c.abort(t),
          l(0, t),
          this
        }
      };
      if (x.promise(T), v.url = ((e || v.url || Et.href) + '').replace(Mt, Et.protocol + '//'), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || '*').toLowerCase().match(R) || [
        ''
      ], null == v.crossDomain) {
        r = E.createElement('a');
        try {
          r.href = v.url,
          r.href = r.href,
          v.crossDomain = Ft.protocol + '//' + Ft.host != r.protocol + '//' + r.host
        } catch (e) {
          v.crossDomain = !0
        }
      }
      if (v.data && v.processData && 'string' != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
      for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger('ajaxStart'), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ''), v.hasContent ? v.data && v.processData && 0 === (v.contentType || '').indexOf('application/x-www-form-urlencoded') && (v.data = v.data.replace(Lt, '+'))  : (o = v.url.slice(f.length), v.data && (v.processData || 'string' == typeof v.data) && (f += (St.test(f) ? '&' : '?') + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, '$1'), o = (St.test(f) ? '&' : '?') + '_=' + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader('If-Modified-Since', k.lastModified[f]), k.etag[f] && T.setRequestHeader('If-None-Match', k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader('Content-Type', v.contentType), T.setRequestHeader('Accept', v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ('*' !== v.dataTypes[0] ? ', ' + $t + '; q=0.01' : '')  : v.accepts['*']), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = 'abort', b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger('ajaxSend', [
          T,
          v
        ]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort('timeout')
        }, v.timeout));
        try {
          h = !1,
          c.send(a, l)
        } catch (e) {
          if (h) throw e;
          l( - 1, e)
        }
      } else l( - 1, 'No Transport');
      function l(e, t, n, r) {
        var i,
        o,
        a,
        s,
        u,
        l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || '', T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
          i,
          o,
          a,
          s = e.contents,
          u = e.dataTypes;
          while ('*' === u[0]) u.shift(),
          void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
          }
          if (u[0] in n) o = u[0];
           else {
            for (i in n) {
              if (!u[0] || e.converters[i + ' ' + u[0]]) {
                o = i;
                break
              }
              a || (a = i)
            }
            o = o || a
          }
          if (o) return o !== u[0] && u.unshift(o),
          n[o]
        }(v, T, n)), s = function (e, t, n, r) {
          var i,
          o,
          a,
          s,
          u,
          l = {
          },
          c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ('*' === o) o = u;
           else if ('*' !== u && u !== o) {
            if (!(a = l[u + ' ' + o] || l['* ' + o])) for (i in l) if ((s = i.split(' ')) [1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break
            }
            if (!0 !== a) if (a && e['throws']) t = a(t);
             else try {
              t = a(t)
            } catch (e) {
              return {
                state: 'parsererror',
                error: a ? e : 'No conversion from ' + u + ' to ' + o
              }
            }
          }
          return {
            state: 'success',
            data: t
          }
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader('Last-Modified')) && (k.lastModified[f] = u), (u = T.getResponseHeader('etag')) && (k.etag[f] = u)), 204 === e || 'HEAD' === v.type ? l = 'nocontent' : 304 === e ? l = 'notmodified' : (l = s.state, o = s.data, i = !(a = s.error)))  : (a = l, !e && l || (l = 'error', e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + '', i ? x.resolveWith(y, [
          o,
          l,
          T
        ])  : x.rejectWith(y, [
          T,
          l,
          a
        ]), T.statusCode(w), w = void 0, g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [
          T,
          v,
          i ? o : a
        ]), b.fireWith(y, [
          T,
          l
        ]), g && (m.trigger('ajaxComplete', [
          T,
          v
        ]), --k.active || k.event.trigger('ajaxStop')))
      }
      return T
    },
    getJSON: function (e, t, n) {
      return k.get(e, t, n, 'json')
    },
    getScript: function (e, t) {
      return k.get(e, void 0, t, 'script')
    }
  }),
  k.each(['get',
  'post'], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0),
      k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e))
    }
  }),
  k._evalUrl = function (e, t) {
    return k.ajax({
      url: e,
      type: 'GET',
      dataType: 'script',
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        'text script': function () {
        }
      },
      dataFilter: function (e) {
        k.globalEval(e, t)
      }
    })
  },
  k.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e
      }).append(this)),
      this
    },
    wrapInner: function (n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e))
      })  : this.each(function () {
        var e = k(this),
        t = e.contents();
        t.length ? t.wrapAll(n)  : e.append(n)
      })
    },
    wrap: function (t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e)  : t)
      })
    },
    unwrap: function (e) {
      return this.parent(e).not('body').each(function () {
        k(this).replaceWith(this.childNodes)
      }),
      this
    }
  }),
  k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e)
  },
  k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  },
  k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest
    } catch (e) {
    }
  };
  var Ut = {
    0: 200,
    1223: 204
  },
  Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && 'withCredentials' in Xt,
  y.ajax = Xt = !!Xt,
  k.ajaxTransport(function (i) {
    var o,
    a;
    if (y.cors || Xt && !i.crossDomain) return {
      send: function (e, t) {
        var n,
        r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e['X-Requested-With'] || (e['X-Requested-With'] = 'XMLHttpRequest'), e) r.setRequestHeader(n, e[n]);
        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, 'abort' === e ? r.abort()  : 'error' === e ? 'number' != typeof r.status ? t(0, 'error')  : t(r.status, r.statusText)  : t(Ut[r.status] || r.status, r.statusText, 'text' !== (r.responseType || 'text') || 'string' != typeof r.responseText ? {
              binary: r.response
            }
             : {
              text: r.responseText
            }, r.getAllResponseHeaders()))
          }
        },
        r.onload = o(),
        a = r.onerror = r.ontimeout = o('error'),
        void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            o && a()
          })
        },
        o = o('abort');
        try {
          r.send(i.hasContent && i.data || null)
        } catch (e) {
          if (o) throw e
        }
      },
      abort: function () {
        o && o()
      }
    }
  }),
  k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }),
  k.ajaxSetup({
    accepts: {
      script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      'text script': function (e) {
        return k.globalEval(e),
        e
      }
    }
  }),
  k.ajaxPrefilter('script', function (e) {
    void 0 === e.cache && (e.cache = !1),
    e.crossDomain && (e.type = 'GET')
  }),
  k.ajaxTransport('script', function (n) {
    var r,
    i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = k('<script>').attr(n.scriptAttrs || {
        }).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on('load error', i = function (e) {
          r.remove(),
          i = null,
          e && t('error' === e.type ? 404 : 200, e.type)
        }),
        E.head.appendChild(r[0])
      },
      abort: function () {
        i && i()
      }
    }
  });
  var Vt,
  Gt = [
  ],
  Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Gt.pop() || k.expando + '_' + kt++;
      return this[e] = !0,
      e
    }
  }),
  k.ajaxPrefilter('json jsonp', function (e, t, n) {
    var r,
    i,
    o,
    a = !1 !== e.jsonp && (Yt.test(e.url) ? 'url' : 'string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && Yt.test(e.data) && 'data');
    if (a || 'jsonp' === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback()  : e.jsonpCallback,
    a ? e[a] = e[a].replace(Yt, '$1' + r)  : !1 !== e.jsonp && (e.url += (St.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
    e.converters['script json'] = function () {
      return o || k.error(r + ' was not called'),
      o[0]
    },
    e.dataTypes[0] = 'json',
    i = C[r],
    C[r] = function () {
      o = arguments
    },
    n.always(function () {
      void 0 === i ? k(C).removeProp(r)  : C[r] = i,
      e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)),
      o && m(i) && i(o[0]),
      o = i = void 0
    }),
    'script'
  }),
  y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>', 2 === Vt.childNodes.length),
  k.parseHTML = function (e, t, n) {
    return 'string' != typeof e ? [
    ] : ('boolean' == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument('')).createElement('base')).href = E.location.href, t.head.appendChild(r))  : t = E), o = !n && [
    ], (i = D.exec(e)) ? [
      t.createElement(i[1])
    ] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r,
    i,
    o
  },
  k.fn.load = function (e, t, n) {
    var r,
    i,
    o,
    a = this,
    s = e.indexOf(' ');
    return - 1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)),
    m(t) ? (n = t, t = void 0)  : t && 'object' == typeof t && (i = 'POST'),
    0 < a.length && k.ajax({
      url: e,
      type: i || 'GET',
      dataType: 'html',
      data: t
    }).done(function (e) {
      o = arguments,
      a.html(r ? k('<div>').append(k.parseHTML(e)).find(r)  : e)
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [
          e.responseText,
          t,
          e
        ])
      })
    }),
    this
  },
  k.each(['ajaxStart',
  'ajaxStop',
  'ajaxComplete',
  'ajaxError',
  'ajaxSuccess',
  'ajaxSend'], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e)
    }
  }),
  k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem
    }).length
  },
  k.offset = {
    setOffset: function (e, t, n) {
      var r,
      i,
      o,
      a,
      s,
      u,
      l = k.css(e, 'position'),
      c = k(e),
      f = {
      };
      'static' === l && (e.style.position = 'relative'),
      s = c.offset(),
      o = k.css(e, 'top'),
      u = k.css(e, 'left'),
      ('absolute' === l || 'fixed' === l) && - 1 < (o + u).indexOf('auto') ? (a = (r = c.position()).top, i = r.left)  : (a = parseFloat(o) || 0, i = parseFloat(u) || 0),
      m(t) && (t = t.call(e, n, k.extend({
      }, s))),
      null != t.top && (f.top = t.top - s.top + a),
      null != t.left && (f.left = t.left - s.left + i),
      'using' in t ? t.using.call(e, f)  : c.css(f)
    }
  },
  k.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e)
      });
      var e,
      n,
      r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      })  : {
        top: 0,
        left: 0
      }
       : void 0
    },
    position: function () {
      if (this[0]) {
        var e,
        t,
        n,
        r = this[0],
        i = {
          top: 0,
          left: 0
        };
        if ('fixed' === k.css(r, 'position')) t = r.getBoundingClientRect();
         else {
          t = this.offset(),
          n = r.ownerDocument,
          e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && 'static' === k.css(e, 'position')) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, 'borderTopWidth', !0), i.left += k.css(e, 'borderLeftWidth', !0))
        }
        return {
          top: t.top - i.top - k.css(r, 'marginTop', !0),
          left: t.left - i.left - k.css(r, 'marginLeft', !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && 'static' === k.css(e, 'position')) e = e.offsetParent;
        return e || ie
      })
    }
  }),
  k.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (t, i) {
    var o = 'pageYOffset' === i;
    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)  : e[t] = n
      }, t, e, arguments.length)
    }
  }),
  k.each(['top',
  'left'], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n),
      $e.test(t) ? k(e).position() [n] + 'px' : t
    })
  }),
  k.each({
    Height: 'height',
    Width: 'width'
  }, function (a, s) {
    k.each({
      padding: 'inner' + a,
      content: s,
      '': 'outer' + a
    }, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || 'boolean' != typeof e),
        i = r || (!0 === e || !0 === t ? 'margin' : 'border');
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf('outer') ? e['inner' + a] : e.document.documentElement['client' + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body['scroll' + a], r['scroll' + a], e.body['offset' + a], r['offset' + a], r['client' + a]))  : void 0 === n ? k.css(e, t, i)  : k.style(e, t, n, i)
        }, s, n ? e : void 0, n)
      }
    })
  }),
  k.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), function (e, n) {
    k.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t)  : this.trigger(n)
    }
  }),
  k.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }),
  k.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, '**')  : this.off(t, e || '**', n)
    }
  }),
  k.proxy = function (e, t) {
    var n,
    r,
    i;
    if ('string' == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2),
    (i = function () {
      return e.apply(t || this, r.concat(s.call(arguments)))
    }).guid = e.guid = e.guid || k.guid++,
    i
  },
  k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0)
  },
  k.isArray = Array.isArray,
  k.parseJSON = JSON.parse,
  k.nodeName = A,
  k.isFunction = m,
  k.isWindow = x,
  k.camelCase = V,
  k.type = w,
  k.now = Date.now,
  k.isNumeric = function (e) {
    var t = k.type(e);
    return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
  },
  'function' == typeof define && define.amd && define('jquery', [
  ], function () {
    return k
  });
  var Qt = C.jQuery,
  Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt),
    e && C.jQuery === k && (C.jQuery = Qt),
    k
  },
  e || (C.jQuery = C.$ = k),
  k
});/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
'undefined' == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (a, b, c) {
  function d(c) {
    var d = b.console;
    f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn('JQMIGRATE: ' + c), a.migrateTrace && d.trace && d.trace()))
  }
  function e(b, c, e, f) {
    if (Object.defineProperty) try {
      return void Object.defineProperty(b, c, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return d(f),
          e
        },
        set: function (a) {
          d(f),
          e = a
        }
      })
    } catch (g) {
    }
    a._definePropertyBroken = !0,
    b[c] = e
  }
  a.migrateVersion = '1.4.1';
  var f = {
  };
  a.migrateWarnings = [
  ],
  b.console && b.console.log && b.console.log('JQMIGRATE: Migrate is installed' + (a.migrateMute ? '' : ' with logging active') + ', version ' + a.migrateVersion),
  a.migrateTrace === c && (a.migrateTrace = !0),
  a.migrateReset = function () {
    f = {
    },
    a.migrateWarnings.length = 0
  },
  'BackCompat' === document.compatMode && d('jQuery is not compatible with Quirks Mode');
  var g = a('<input/>', {
    size: 1
  }).attr('size') && a.attrFn,
  h = a.attr,
  i = a.attrHooks.value && a.attrHooks.value.get || function () {
    return null
  },
  j = a.attrHooks.value && a.attrHooks.value.set || function () {
    return c
  },
  k = /^(?:input|button)$/i,
  l = /^[238]$/,
  m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
  n = /^(?:checked|selected)$/i;
  e(a, 'attrFn', g || {
  }, 'jQuery.attrFn is deprecated'),
  a.attr = function (b, e, f, i) {
    var j = e.toLowerCase(),
    o = b && b.nodeType;
    return i && (h.length < 4 && d('jQuery.fn.attr( props, pass ) is deprecated'), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b) [e](f)  : ('type' === e && f !== c && k.test(b.nodeName) && b.parentNode && d('Can\'t change the \'type\' of an input or button in IE 6/7/8'), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
      get: function (b, d) {
        var e,
        f = a.prop(b, d);
        return f === !0 || 'boolean' != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase()  : c
      },
      set: function (b, c, d) {
        var e;
        return c === !1 ? a.removeAttr(b, d)  : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())),
        d
      }
    }, n.test(j) && d('jQuery.fn.attr(\'' + j + '\') might use property instead of attribute')), h.call(a, b, e, f))
  },
  a.attrHooks.value = {
    get: function (a, b) {
      var c = (a.nodeName || '').toLowerCase();
      return 'button' === c ? i.apply(this, arguments)  : ('input' !== c && 'option' !== c && d('jQuery.fn.attr(\'value\') no longer gets properties'), b in a ? a.value : null)
    },
    set: function (a, b) {
      var c = (a.nodeName || '').toLowerCase();
      return 'button' === c ? j.apply(this, arguments)  : ('input' !== c && 'option' !== c && d('jQuery.fn.attr(\'value\', val) no longer sets properties'), void (a.value = b))
    }
  };
  var o,
  p,
  q = a.fn.init,
  r = a.find,
  s = a.parseJSON,
  t = /^\s*</,
  u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
  v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
  w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
  a.fn.init = function (b, e, f) {
    var g,
    h;
    return b && 'string' == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d('$(html) HTML strings must start with \'<\' character'), g[3] && d('$(html) HTML text after last tag is ignored'), '#' === g[0].charAt(0) && (d('HTML string cannot start with a \'#\' character'), a.error('JQMIGRATE: Invalid selector string (XSS)')), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f)  : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context)  : (h.selector = 'string' == typeof b ? b : '', b && (h.context = b.nodeType ? b : e || document)), h)
  },
  a.fn.init.prototype = a.fn,
  a.find = function (a) {
    var b = Array.prototype.slice.call(arguments);
    if ('string' == typeof a && u.test(a)) try {
      document.querySelector(a)
    } catch (c) {
      a = a.replace(v, function (a, b, c, d) {
        return '[' + b + c + '"' + d + '"]'
      });
      try {
        document.querySelector(a),
        d('Attribute selector with \'#\' must be quoted: ' + b[0]),
        b[0] = a
      } catch (e) {
        d('Attribute selector with \'#\' was not fixed: ' + b[0])
      }
    }
    return r.apply(this, b)
  };
  var x;
  for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
  a.parseJSON = function (a) {
    return a ? s.apply(this, arguments)  : (d('jQuery.parseJSON requires a valid JSON string'), null)
  },
  a.uaMatch = function (a) {
    a = a.toLowerCase();
    var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [
    ];
    return {
      browser: b[1] || '',
      version: b[2] || '0'
    }
  },
  a.browser || (o = a.uaMatch(navigator.userAgent), p = {
  }, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p),
  e(a, 'browser', a.browser, 'jQuery.browser is deprecated'),
  a.boxModel = a.support.boxModel = 'CSS1Compat' === document.compatMode,
  e(a, 'boxModel', a.boxModel, 'jQuery.boxModel is deprecated'),
  e(a.support, 'boxModel', a.support.boxModel, 'jQuery.support.boxModel is deprecated'),
  a.sub = function () {
    function b(a, c) {
      return new b.fn.init(a, c)
    }
    a.extend(!0, b, this),
    b.superclass = this,
    b.fn = b.prototype = this(),
    b.fn.constructor = b,
    b.sub = this.sub,
    b.fn.init = function (d, e) {
      var f = a.fn.init.call(this, d, e, c);
      return f instanceof b ? f : b(f)
    },
    b.fn.init.prototype = b.fn;
    var c = b(document);
    return d('jQuery.sub() is deprecated'),
    b
  },
  a.fn.size = function () {
    return d('jQuery.fn.size() is deprecated; use the .length property'),
    this.length
  };
  var y = !1;
  a.swap && a.each(['height',
  'width',
  'reliableMarginRight'], function (b, c) {
    var d = a.cssHooks[c] && a.cssHooks[c].get;
    d && (a.cssHooks[c].get = function () {
      var a;
      return y = !0,
      a = d.apply(this, arguments),
      y = !1,
      a
    })
  }),
  a.swap = function (a, b, c, e) {
    var f,
    g,
    h = {
    };
    y || d('jQuery.swap() is undocumented and deprecated');
    for (g in b) h[g] = a.style[g],
    a.style[g] = b[g];
    f = c.apply(a, e || [
    ]);
    for (g in b) a.style[g] = h[g];
    return f
  },
  a.ajaxSetup({
    converters: {
      'text json': a.parseJSON
    }
  });
  var z = a.fn.data;
  a.fn.data = function (b) {
    var e,
    f,
    g = this[0];
    return !g || 'events' !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments)  : (d('Use of jQuery.fn.data(\'events\') is deprecated'), f)
  };
  var A = /\/(java|ecma)script/i;
  a.clean || (a.clean = function (b, c, e, f) {
    c = c || document,
    c = !c.nodeType && c[0] || c,
    c = c.ownerDocument || c,
    d('jQuery.clean() is deprecated');
    var g,
    h,
    i,
    j,
    k = [
    ];
    if (a.merge(k, a.buildFragment(b, c).childNodes), e) for (i = function (a) {
      return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a)  : a)  : e.appendChild(a)  : void 0
    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, 'script') && i(h) || (e.appendChild(h), 'undefined' != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName('script')), i), k.splice.apply(k, [
      g + 1,
      0
    ].concat(j)), g += j.length));
    return k
  });
  var B = a.event.add,
  C = a.event.remove,
  D = a.event.trigger,
  E = a.fn.toggle,
  F = a.fn.live,
  G = a.fn.die,
  H = a.fn.load,
  I = 'ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess',
  J = new RegExp('\\b(?:' + I + ')\\b'),
  K = /(?:^|\s)hover(\.\S+|)\b/,
  L = function (b) {
    return 'string' != typeof b || a.event.special.hover ? b : (K.test(b) && d('\'hover\' pseudo-event is deprecated, use \'mouseenter mouseleave\''), b && b.replace(K, 'mouseenter$1 mouseleave$1'))
  };
  a.event.props && 'attrChange' !== a.event.props[0] && a.event.props.unshift('attrChange', 'attrName', 'relatedNode', 'srcElement'),
  a.event.dispatch && e(a.event, 'handle', a.event.dispatch, 'jQuery.event.handle is undocumented and deprecated'),
  a.event.add = function (a, b, c, e, f) {
    a !== document && J.test(b) && d('AJAX events should be attached to document: ' + b),
    B.call(this, a, L(b || ''), c, e, f)
  },
  a.event.remove = function (a, b, c, d, e) {
    C.call(this, a, L(b) || '', c, d, e)
  },
  a.each(['load',
  'unload',
  'error'], function (b, c) {
    a.fn[c] = function () {
      var a = Array.prototype.slice.call(arguments, 0);
      return 'load' === c && 'string' == typeof a[0] ? H.apply(this, a)  : (d('jQuery.fn.' + c + '() is deprecated'), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a)  : (this.triggerHandler.apply(this, a), this))
    }
  }),
  a.fn.toggle = function (b, c) {
    if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
    d('jQuery.fn.toggle(handler, handler...) is deprecated');
    var e = arguments,
    f = b.guid || a.guid++,
    g = 0,
    h = function (c) {
      var d = (a._data(this, 'lastToggle' + b.guid) || 0) % g;
      return a._data(this, 'lastToggle' + b.guid, d + 1),
      c.preventDefault(),
      e[d].apply(this, arguments) || !1
    };
    for (h.guid = f; g < e.length; ) e[g++].guid = f;
    return this.click(h)
  },
  a.fn.live = function (b, c, e) {
    return d('jQuery.fn.live() is deprecated'),
    F ? F.apply(this, arguments)  : (a(this.context).on(b, this.selector, c, e), this)
  },
  a.fn.die = function (b, c) {
    return d('jQuery.fn.die() is deprecated'),
    G ? G.apply(this, arguments)  : (a(this.context).off(b, this.selector || '**', c), this)
  },
  a.event.trigger = function (a, b, c, e) {
    return c || J.test(a) || d('Global events are undocumented and deprecated'),
    D.call(this, a, b, c || document, e)
  },
  a.each(I.split('|'), function (b, c) {
    a.event.special[c] = {
      setup: function () {
        var b = this;
        return b !== document && (a.event.add(document, c + '.' + a.guid, function () {
          a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
        }), a._data(this, c, a.guid++)),
        !1
      },
      teardown: function () {
        return this !== document && a.event.remove(document, c + '.' + a._data(this, c)),
        !1
      }
    }
  }),
  a.event.special.ready = {
    setup: function () {
      this === document && d('\'ready\' event is deprecated')
    }
  };
  var M = a.fn.andSelf || a.fn.addBack,
  N = a.fn.find;
  if (a.fn.andSelf = function () {
    return d('jQuery.fn.andSelf() replaced by jQuery.fn.addBack()'),
    M.apply(this, arguments)
  }, a.fn.find = function (a) {
    var b = N.apply(this, arguments);
    return b.context = this.context,
    b.selector = this.selector ? this.selector + ' ' + a : a,
    b
  }, a.Callbacks) {
    var O = a.Deferred,
    P = [
      ['resolve',
      'done',
      a.Callbacks('once memory'),
      a.Callbacks('once memory'),
      'resolved'],
      [
        'reject',
        'fail',
        a.Callbacks('once memory'),
        a.Callbacks('once memory'),
        'rejected'
      ],
      [
        'notify',
        'progress',
        a.Callbacks('memory'),
        a.Callbacks('memory')
      ]
    ];
    a.Deferred = function (b) {
      var c = O(),
      e = c.promise();
      return c.pipe = e.pipe = function () {
        var b = arguments;
        return d('deferred.pipe() is deprecated'),
        a.Deferred(function (d) {
          a.each(P, function (f, g) {
            var h = a.isFunction(b[f]) && b[f];
            c[g[1]](function () {
              var b = h && h.apply(this, arguments);
              b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify)  : d[g[0] + 'With'](this === e ? d.promise()  : this, h ? [
                b
              ] : arguments)
            })
          }),
          b = null
        }).promise()
      },
      c.isResolved = function () {
        return d('deferred.isResolved is deprecated'),
        'resolved' === c.state()
      },
      c.isRejected = function () {
        return d('deferred.isRejected is deprecated'),
        'rejected' === c.state()
      },
      b && b.call(c, c),
      c
    }
  }
}(jQuery, window); /*! jQuery Migrate v3.0.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function (e) {
  'function' == typeof define && define.amd ? define(['jquery'], window, e)  : 'object' == typeof module && module.exports ? module.exports = e(require('jquery'), window)  : e(jQuery, window);
}(function (e, t) {
  'use strict';
  function r(r) {
    var n = t.console;
    o[r] || (o[r] = !0, e.migrateWarnings.push(r), n && n.warn && !e.migrateMute && (n.warn('JQMIGRATE: ' + r), e.migrateTrace && n.trace && n.trace()));
  }
  function n(e, t, n, a) {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return r(a),
        n;
      },
      set: function (e) {
        r(a),
        n = e;
      }
    });
  }
  function a(e, t, n, a) {
    e[t] = function () {
      return r(a),
      n.apply(this, arguments);
    };
  }
  e.migrateVersion = '3.0.1',
  function () {
    var r = /^[12]\./;
    t.console && t.console.log && (e && !r.test(e.fn.jquery) || t.console.log('JQMIGRATE: jQuery 3.0.0+ REQUIRED'), e.migrateWarnings && t.console.log('JQMIGRATE: Migrate plugin loaded multiple times'), t.console.log('JQMIGRATE: Migrate is installed' + (e.migrateMute ? '' : ' with logging active') + ', version ' + e.migrateVersion));
  }();
  var o = {
  };
  e.migrateWarnings = [
  ],
  void 0 === e.migrateTrace && (e.migrateTrace = !0),
  e.migrateReset = function () {
    o = {
    },
    e.migrateWarnings.length = 0;
  },
  'BackCompat' === t.document.compatMode && r('jQuery is not compatible with Quirks Mode');
  var i = e.fn.init,
  s = e.isNumeric,
  u = e.find,
  c = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
  l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
  e.fn.init = function (e) {
    var t = Array.prototype.slice.call(arguments);
    return 'string' == typeof e && '#' === e && (r('jQuery( \'#\' ) is not a valid selector'), t[0] = [
    ]),
    i.apply(this, t);
  },
  e.fn.init.prototype = e.fn,
  e.find = function (e) {
    var n = Array.prototype.slice.call(arguments);
    if ('string' == typeof e && c.test(e)) try {
      t.document.querySelector(e);
    } catch (a) {
      e = e.replace(l, function (e, t, r, n) {
        return '[' + t + r + '"' + n + '"]';
      });
      try {
        t.document.querySelector(e),
        r('Attribute selector with \'#\' must be quoted: ' + n[0]),
        n[0] = e;
      } catch (e) {
        r('Attribute selector with \'#\' was not fixed: ' + n[0]);
      }
    }
    return u.apply(this, n);
  };
  var d;
  for (d in u) Object.prototype.hasOwnProperty.call(u, d) && (e.find[d] = u[d]);
  e.fn.size = function () {
    return r('jQuery.fn.size() is deprecated and removed; use the .length property'),
    this.length;
  },
  e.parseJSON = function () {
    return r('jQuery.parseJSON is deprecated; use JSON.parse'),
    JSON.parse.apply(null, arguments);
  },
  e.isNumeric = function (t) {
    var n = s(t),
    a = function (t) {
      var r = t && t.toString();
      return !e.isArray(t) && r - parseFloat(r) + 1 >= 0;
    }(t);
    return n !== a && r('jQuery.isNumeric() should not be called on constructed objects'),
    a;
  },
  a(e, 'holdReady', e.holdReady, 'jQuery.holdReady is deprecated'),
  a(e, 'unique', e.uniqueSort, 'jQuery.unique is deprecated; use jQuery.uniqueSort'),
  n(e.expr, 'filters', e.expr.pseudos, 'jQuery.expr.filters is deprecated; use jQuery.expr.pseudos'),
  n(e.expr, ':', e.expr.pseudos, 'jQuery.expr[\':\'] is deprecated; use jQuery.expr.pseudos');
  var p = e.ajax;
  e.ajax = function () {
    var e = p.apply(this, arguments);
    return e.promise && (a(e, 'success', e.done, 'jQXHR.success is deprecated and removed'), a(e, 'error', e.fail, 'jQXHR.error is deprecated and removed'), a(e, 'complete', e.always, 'jQXHR.complete is deprecated and removed')),
    e;
  };
  var f = e.fn.removeAttr,
  y = e.fn.toggleClass,
  m = /\S+/g;
  e.fn.removeAttr = function (t) {
    var n = this;
    return e.each(t.match(m), function (t, a) {
      e.expr.match.bool.test(a) && (r('jQuery.fn.removeAttr no longer sets boolean properties: ' + a), n.prop(a, !1));
    }),
    f.apply(this, arguments);
  },
  e.fn.toggleClass = function (t) {
    return void 0 !== t && 'boolean' != typeof t ? y.apply(this, arguments)  : (r('jQuery.fn.toggleClass( boolean ) is deprecated'), this.each(function () {
      var r = this.getAttribute && this.getAttribute('class') || '';
      r && e.data(this, '__className__', r),
      this.setAttribute && this.setAttribute('class', r || !1 === t ? '' : e.data(this, '__className__') || '');
    }));
  };
  var h = !1;
  e.swap && e.each(['height',
  'width',
  'reliableMarginRight'], function (t, r) {
    var n = e.cssHooks[r] && e.cssHooks[r].get;
    n && (e.cssHooks[r].get = function () {
      var e;
      return h = !0,
      e = n.apply(this, arguments),
      h = !1,
      e;
    });
  }),
  e.swap = function (e, t, n, a) {
    var o,
    i,
    s = {
    };
    h || r('jQuery.swap() is undocumented and deprecated');
    for (i in t) s[i] = e.style[i],
    e.style[i] = t[i];
    o = n.apply(e, a || [
    ]);
    for (i in t) e.style[i] = s[i];
    return o;
  };
  var g = e.data;
  e.data = function (t, n, a) {
    var o;
    if (n && 'object' == typeof n && 2 === arguments.length) {
      o = e.hasData(t) && g.call(this, t);
      var i = {
      };
      for (var s in n) s !== e.camelCase(s) ? (r('jQuery.data() always sets/gets camelCased names: ' + s), o[s] = n[s])  : i[s] = n[s];
      return g.call(this, t, i),
      n;
    }
    return n && 'string' == typeof n && n !== e.camelCase(n) && (o = e.hasData(t) && g.call(this, t)) && n in o ? (r('jQuery.data() always sets/gets camelCased names: ' + n), arguments.length > 2 && (o[n] = a), o[n])  : g.apply(this, arguments);
  };
  var v = e.Tween.prototype.run,
  j = function (e) {
    return e;
  };
  e.Tween.prototype.run = function () {
    e.easing[this.easing].length > 1 && (r('\'jQuery.easing.' + this.easing.toString() + '\' should use only one argument'), e.easing[this.easing] = j),
    v.apply(this, arguments);
  },
  e.fx.interval = e.fx.interval || 13,
  t.requestAnimationFrame && n(e.fx, 'interval', e.fx.interval, 'jQuery.fx.interval is deprecated');
  var Q = e.fn.load,
  b = e.event.add,
  w = e.event.fix;
  e.event.props = [
  ],
  e.event.fixHooks = {
  },
  n(e.event.props, 'concat', e.event.props.concat, 'jQuery.event.props.concat() is deprecated and removed'),
  e.event.fix = function (t) {
    var n,
    a = t.type,
    o = this.fixHooks[a],
    i = e.event.props;
    if (i.length) for (r('jQuery.event.props are deprecated and removed: ' + i.join()); i.length; ) e.event.addProp(i.pop());
    if (o && !o._migrated_ && (o._migrated_ = !0, r('jQuery.event.fixHooks are deprecated and removed: ' + a), (i = o.props) && i.length)) for (; i.length; ) e.event.addProp(i.pop());
    return n = w.call(this, t),
    o && o.filter ? o.filter(n, t)  : n;
  },
  e.event.add = function (e, n) {
    return e === t && 'load' === n && 'complete' === t.document.readyState && r('jQuery(window).on(\'load\'...) called after load event occurred'),
    b.apply(this, arguments);
  },
  e.each(['load',
  'unload',
  'error'], function (t, n) {
    e.fn[n] = function () {
      var e = Array.prototype.slice.call(arguments, 0);
      return 'load' === n && 'string' == typeof e[0] ? Q.apply(this, e)  : (r('jQuery.fn.' + n + '() is deprecated'), e.splice(0, 0, n), arguments.length ? this.on.apply(this, e)  : (this.triggerHandler.apply(this, e), this));
    };
  }),
  e.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), function (t, n) {
    e.fn[n] = function (e, t) {
      return r('jQuery.fn.' + n + '() event shorthand is deprecated'),
      arguments.length > 0 ? this.on(n, null, e, t)  : this.trigger(n);
    };
  }),
  e(function () {
    e(t.document).triggerHandler('ready');
  }),
  e.event.special.ready = {
    setup: function () {
      this === t.document && r('\'ready\' event is deprecated');
    }
  },
  e.fn.extend({
    bind: function (e, t, n) {
      return r('jQuery.fn.bind() is deprecated'),
      this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return r('jQuery.fn.unbind() is deprecated'),
      this.off(e, null, t);
    },
    delegate: function (e, t, n, a) {
      return r('jQuery.fn.delegate() is deprecated'),
      this.on(t, e, n, a);
    },
    undelegate: function (e, t, n) {
      return r('jQuery.fn.undelegate() is deprecated'),
      1 === arguments.length ? this.off(e, '**')  : this.off(t, e || '**', n);
    },
    hover: function (e, t) {
      return r('jQuery.fn.hover() is deprecated'),
      this.on('mouseenter', e).on('mouseleave', t || e);
    }
  });
  var x = e.fn.offset;
  e.fn.offset = function () {
    var n,
    a = this[0],
    o = {
      top: 0,
      left: 0
    };
    return a && a.nodeType ? (n = (a.ownerDocument || t.document).documentElement, e.contains(n, a) ? x.apply(this, arguments)  : (r('jQuery.fn.offset() requires an element connected to a document'), o))  : (r('jQuery.fn.offset() requires a valid DOM element'), o);
  };
  var k = e.param;
  e.param = function (t, n) {
    var a = e.ajaxSettings && e.ajaxSettings.traditional;
    return void 0 === n && a && (r('jQuery.param() no longer uses jQuery.ajaxSettings.traditional'), n = a),
    k.call(this, t, n);
  };
  var A = e.fn.andSelf || e.fn.addBack;
  e.fn.andSelf = function () {
    return r('jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()'),
    A.apply(this, arguments);
  };
  var S = e.Deferred,
  q = [
    ['resolve',
    'done',
    e.Callbacks('once memory'),
    e.Callbacks('once memory'),
    'resolved'],
    [
      'reject',
      'fail',
      e.Callbacks('once memory'),
      e.Callbacks('once memory'),
      'rejected'
    ],
    [
      'notify',
      'progress',
      e.Callbacks('memory'),
      e.Callbacks('memory')
    ]
  ];
  return e.Deferred = function (t) {
    var n = S(),
    a = n.promise();
    return n.pipe = a.pipe = function () {
      var t = arguments;
      return r('deferred.pipe() is deprecated'),
      e.Deferred(function (r) {
        e.each(q, function (o, i) {
          var s = e.isFunction(t[o]) && t[o];
          n[i[1]](function () {
            var t = s && s.apply(this, arguments);
            t && e.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify)  : r[i[0] + 'With'](this === a ? r.promise()  : this, s ? [
              t
            ] : arguments);
          });
        }),
        t = null;
      }).promise();
    },
    t && t.call(n, n),
    n;
  },
  e.Deferred.exceptionHook = S.exceptionHook,
  e;
}); function encodeXSS(txt) {
  return $('<span/>').text(txt).html()
}
var decodeXSS = function (input) {
  if ('string' === typeof input && input.indexOf('&') > - 1) {
    var tmp = document.createElement('textarea');
    tmp.innerHTML = input;
    input = tmp.value
  }
  return input
}; var htmlspecialchars = function (input) {
  if ('string' === typeof input) {
    input = input.replaceAll('&', '&amp;');
    input = input.replaceAll('<', '&lt;');
    input = input.replaceAll('>', '&gt;');
    input = input.replaceAll('"', '&quot;');
    input = input.replaceAll('\'', '&#x27;');
    input = input.replaceAll('\\(', '&#x28;');
    input = input.replaceAll('\\)', '&#x29;');
    input = input.replaceAll('\\[', '&#x5b;');
    input = input.replaceAll('\\]', '&#x5d;');
    input = input.replaceAll('\\{', '&#x7b;');
    input = input.replaceAll('\\}', '&#x7d;')
  }
  return input
}; var htmlspecialcharsOnce = function (input) {
  return htmlspecialchars(decodeXSS(input))
}; var encryptJSON = function (jsonObj) {
  if (typeof jsonObj === 'object') {
    for (var key in jsonObj) {
      if (typeof jsonObj[key] === 'object') {
        encryptJSON(jsonObj[key])
      } else if (typeof jsonObj[key] === 'string' && !/^[\w\d\s\-\:\+]+$/.test(jsonObj[key])) {
        jsonObj[key] = htmlspecialchars(jsonObj[key])
      }
    }
  }
}; var parseJSON = function (s) {
  try {
    var r = JSON.parse(s);
    if (r) return r;
    return false
  } catch (e) {
    return false
  }
}; jQuery(function () {
  ec.load('ec.XSSUtils')
}); var alertBox = function (txt, okCallback) {
  txt = htmlspecialcharsOnce(txt);
  new ec.box('<div class="box-errors-1" style="height: auto; margin-bottom: 20px;"><span>' + txt + '</span></div>', {
    boxid: 'jb-calert',
    boxclass: 'ol_box_4',
    width: 460,
    showCancel: false,
    onok: okCallback || null
  }).open()
}; var alertWithStatus = function (code) {
  if (405 == code) alertBox('参数校验未通过，请检查输入的数据是否准确');
   else if (597 == code) alertBox('页面已失效，请您刷新页面后重新操作');
   else return false;
  return true
}; $.support.cors = true; $.ajaxSetup({
  headers: {
    CsrfToken: (document.cookie.match(/CSRF-TOKEN=([^;=]+)/) || [
    ]) [1]
  },
  xhrFields: {
    withCredentials: true
  },
  statusCode: {
    200: function () {
      $.ajaxSetup({
        headers: {
          CsrfToken: (document.cookie.match(/CSRF-TOKEN=([^;=]+)/) || [
          ]) [1]
        }
      })
    },
    405: function () {
      if (!this.error) alertBox('参数校验未通过，请检查输入的数据是否准确')
    },
    597: function () {
      if (!this.error) alertBox('页面已失效，请您刷新页面后重新操作')
    }
  },
  dataFilter: function (data, type) {
    if ('json' === type && 'string' === typeof this.url) {
      var url = this.url.toLowerCase();
      if (url.startsWith('https://') || url.startsWith('http://') || url.startsWith('//')) {
        url = url.substring(url.indexOf('//') + 2) + '/';
        var ODList = [
          document.domain + '/',
          'www.vmall.com/'
        ];
        var trusted = false;
        for (var i = 0; i < ODList.length; i++) {
          if (url.startsWith(ODList[i])) {
            trusted = true;
            break
          }
        }
        if (!trusted) {
          try {
            data = JSON.parse(data);
            if (url.indexOf('/rms/comment/getcommentlist.json?') > - 1 || url.indexOf('/rms/comment/getreplylist.json?') > - 1 || url.indexOf('/rms/comment/getusercommentdetail.json?') > - 1) {
              encryptJSON(data)
            } else {
              ec.encryptJSON(data)
            }
            data = JSON.stringify(data)
          } catch (err) {
          }
        }
      }
    }
    return data
  }
}); jQuery.fn.textS = function (value) {
  if ('undefined' === typeof value) {
    return this.text()
  }
  return this.text(decodeXSS(value))
}; jQuery.fn.valS = function (value) {
  if ('undefined' === typeof value) {
    return this.val()
  }
  return this.val(decodeXSS(value))
}; jQuery.fn.attrS = function (k, v) {
  if ('string' === typeof v) {
    return this.attr(k, decodeXSS(v))
  }
  return this.attr(k, v)
}; function xhr(options) {
  options = $.extend({
  }, {
    url: '',
    method: 'post',
    data: '',
    success: function () {
    },
    async: true,
    withCredentials: true
  }, options);
  var xhr = new XMLHttpRequest;
  xhr.open(options.method.toUpperCase(), options.url, options.async);
  xhr.withCredentials = options.withCredentials;
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var r = parseJSON(xhr.responseText || xhr.response || '');
      options.success(r)
    }
  };
  if ('string' !== typeof options.data) options.data = $.param(options.data);
  xhr.send(options.data)
}
function refreshCsrfToken() {
  xhr({
    url: '/system/queryStatus.json',
    method: 'get',
    async: false,
    success: function (r) {
      $.ajaxSetup({
        headers: {
          CsrfToken: (document.cookie.match(/CSRF-TOKEN=([^;=]+)/) || [
          ]) [1]
        }
      });
      if (r && r.success) {
        document.cookie = 'CSRF-TIME=' + (new Date).getTime()
      }
    }
  })
}
function checkCsrfToken() {
  var token = (document.cookie.match(/CSRF-TOKEN=([^;=]+)/) || [
  ]) [1];
  var time = (document.cookie.match(/CSRF-TIME=([^;=]+)/) || [
  ]) [1];
  if (!token || !time || time < (new Date).getTime() - 1180000) {
    refreshCsrfToken()
  }
}
checkCsrfToken(); $(function () {
  $('form').on('submit', function () {
    if ($(this).find('input[name="CsrfToken"]').length < 1) {
      $(this).append('<input type="hidden" name="CsrfToken">')
    }
    $(this).find('input[name="CsrfToken"]').val((document.cookie.match(/CSRF-TOKEN=([^;=]+)/) || [
    ]) [1])
  })
}); window.ec || (window.ec = {
}); ol.pkg = function (j, h, g) {
  var b,
  d,
  u;
  if (arguments.length == 3) {
    b = j;
    d = h;
    u = g
  } else {
    b = window;
    d = j;
    u = h
  }
  if (!d || !d.length) {
    return null
  }
  var m = d.split('.');
  for (var l = b, k = 0; k < m.length - 1; k++) {
    l[m[k]] || (l[m[k]] = {
    });
    l = l[m[k]]
  }
  l = l[m[m.length - 1]] = u || l[m[m.length - 1]] || {
  };
  return l
}; ol.define = function (k, g, d) {
  var h = window,
  b,
  n;
  if (arguments.length == 3) {
    h = k;
    b = g;
    n = d
  } else {
    b = k;
    n = g
  }
  var y = b.split('.'),
  l,
  a;
  for (var m = h, j = 0; j < y.length - 1; j++) {
    m[y[j]] || (m[y[j]] = {
    });
    m = m[y[j]]
  }
  a = y[y.length - 1];
  l = m[a];
  if (!l) {
    l = m[a] = function () {
      var q = arguments.callee,
      p = q._define,
      c;
      for (var o = arguments.length, f = o + 10; o < f; o++) {
        c = p[a + '_' + o];
        if (c) {
          p[a + '_' + arguments.length] = p[a + '_' + o];
          break
        }
      }
      if (!c) {
        c = p[a + '_0']
      }
      if (!c) {
        if (logger && logger.error) {
          logger.error(b, 'function is undefined.')
        }
        return
      }
      c.apply(q, arguments)
    };
    l._define = {
    }
  }
  l._define[a + '_' + n.length] = n
}; ol.Cache = {
  _cache: {
  },
  _size: 0,
  set: function (b, a) {
    if (!ol.Cache.contains(b)) {
      ol.Cache._size++
    }
    ol.Cache._cache[b] = a;
    return a
  },
  get: function (b, c) {
    var d = ol.Cache;
    var a = d._cache[b];
    if (a) {
      return a
    }
    if (typeof c == 'function') {
      a = c();
      d._cache[b] = a
    } else {
      if (c) {
        a = c;
        d._cache[b] = a
      } else {
        a = $(b);
        d._cache[b] = a
      }
    }
    d._size++;
    return a
  },
  remove: function (a) {
    ol.Cache._size--;
    ol.Cache._cache[a] = null
  },
  contains: function (a) {
    return ol.Cache._cache[a]
  }
}; ol.pkg('ol.ui'); (function () {
  var b = function () {
    var c = {
    };
    c.width = ol.ui.masker._bwidth;
    c.height = ol.ui.masker._bheight;
    ol.Cache.get('ec_mask').css(c)
  };
  var a = {
    css: {
      opacity: 0.2,
      background: '#000'
    }
  };
  ol.ui.masker = {
    isShown: false,
    mask: function (j) {
      var d = $;
      var c = ol.ui.masker;
      if (c.isShown) {
        return
      }
      j = d.extend(true, {
      }, a, j);
      var f = ol.Cache.get('ec_mask', function () {
        d(window).resize(function () {
          if (ol.ui.masker.isShown) {
            return
          }
          ol.Cache.get('ec_mask').css({
            width: c._bwidth(),
            height: c._bheight()
          })
        });
        return d('<div id=\'ec_mask\' class=\'ec_mask\'></div>').appendTo('body')
      });
      c.isShown = true;
      j.css.width = c._bwidth();
      j.css.height = c._bheight();
      j.css.visibility = 'visible';
      f.css(j.css);
      d(window).bind('resize', b)
    },
    unmask: function () {
      ol.ui.masker.isShown = false;
      ol.Cache.get('ec_mask').css({
        visibility: 'hidden',
        width: 0,
        height: 0
      });
      $(window).unbind('resize', b)
    },
    _bheight: function () {
      var c = $;
      if (c.browser.msie && c.browser.version < 7) {
        var g = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        var d = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
        if (g < d) {
          return c(window).height()
        } else {
          return g
        }
      } else {
        return c(document).height()
      }
    },
    _bwidth: function () {
      var c = $;
      if (c.browser.msie && c.browser.version < 7) {
        var d = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        var g = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
        if (d < g) {
          return c(window).width()
        } else {
          return d
        }
      } else {
        return c(document).width()
      }
    }
  }
}) (); (function () {
  var a = {
    event: 'hover',
    menu: null
  };
  ol.ui.dropdown = function (b, d) {
    var c = this;
    c.hideTimer = null;
    c._objItem;
    c._menuItem;
    c._onMenu = false;
    c._events = {
    };
    c._isShow = false;
    c._hideMenu = function () {
      c.hideTimer = setTimeout(c.hide, 100)
    };
    c.init = function () {
      var f = $;
      d = f.extend({
      }, a, d);
      if (d.event == 'hover') {
        d.event = 'mouseover'
      } else {
        d.event = 'click'
      }
      c._objItem = f(b);
      c._menuItem = d.menu ? f(d.menu)  : c._objItem.next();
      c._objItem.unbind(d.event).bind(d.event, function (g) {
        clearTimeout(c.hideTimer);
        c.show()
      });
      c._menuItem.find('.dropdown_item').bind('click', function () {
        setTimeout(c.hide)
      })
    };
    c.bind = function (f, j, g) {
      c._menuItem.find(f).bind(j, g)
    };
    c.show = function () {
      switch (d.event) {
        case 'mouseover':
          c._objItem.unbind('mouseout').bind('mouseout', function (f) {
            c._hideMenu();
            c._objItem.addClass('hover')
          });
          c._menuItem.unbind('mouseover').bind('mouseover', function () {
            clearTimeout(c.hideTimer);
            c._menuItem.css('display', 'block')
          }).unbind('mouseout').bind('mouseout', function () {
            c._hideMenu()
          });
          break;
        case 'click':
          if (c._isShow) {
            c.hide();
            return
          } else {
            c._events.menu_click = function () {
              c._onMenu = true
            };
            c._events.document_click = function (f) {
              if (f.button != 0) {
                return true
              }
              if (c._onMenu === false) {
                c.hide()
              }
              c._onMenu = false
            };
            setTimeout(function () {
              c._menuItem.bind('click', c._events.menu_click);
              $(document).bind('click', c._events.document_click)
            }, 1)
          }
          break
      }
      c._objItem.addClass('hover');
      c._menuItem.css('display', 'block');
      c._isShow = true
    };
    c.hide = function () {
      if (c._events.document_click) {
        $(document).unbind('click', c._events.document_click)
      }
      if (c._events.menu_click) {
        c._menuItem.unbind('click', c._events.menu_click)
      }
      c._objItem.removeClass('hover');
      c._menuItem.hide();
      c._isShow = false;
      c._onMenu = false
    };
    this.init()
  }
}) (); ol.ui.scrollTo = function (p, g) {
  g = g || {
    offsetY: 45
  };
  if (typeof p != 'object') {
    var d = p.toString().substr(0, 1);
    if (!(d == '#' || d == '.')) {
      p = '#' + p
    }
    p = $(p)
  }
  if (p.length == 0) {
    return
  }
  var b = p.offset().top;
  var a = document.documentElement && !/webkit/gi.test(navigator.userAgent) ? document.documentElement : document.body;
  var h = $(window).height();
  var f = a.scrollTop;
  if (!(f < b && b < f + h)) {
    a.scrollTop = b - g.offsetY
  }
}; (function () {
  var b = {
    white: {
      opacity: 0.55,
      background: '#fff'
    },
    black: {
      opacity: 0.2,
      background: '#000'
    }
  };
  var a = {
    selector: '#ec_ui_loading',
    css: null,
    modal: true,
    maskConfig: null
  };
  ol.ui.loading = {
    options: null,
    show: function (d) {
      var g = ol.ui.loading;
      if (typeof d == 'string') {
        d = {
          maskConfig: {
            css: b[d]
          }
        }
      }
      g.options = $.extend(true, {
      }, a, d);
      if (g.options.modal) {
        ol.ui.masker.mask(g.options.maskConfig)
      }
      var h = $(g.options.selector);
      if (h.length == 0) {
        h = $('<div id="ec_ui_loading" class="ec_ui_loading"></div>').appendTo('body')
      }
      if (g.options.css) h.css(g.options.css);
      h.show();
      h = null;
      g = null
    },
    hide: function () {
      var c = ol.ui.loading.options;
      if (c) {
        if (c.modal) {
          ol.ui.masker.unmask()
        }
        $(c.selector).hide()
      }
    }
  }
}) (); (function () {
  var a = {
    row: 'tr',
    colors: [
      '#fff',
      '#f7f7f7'
    ],
    hover: '#e3f3bf',
    index: 1,
    remain: 0,
    alterNum: 1
  };
  ol.ui.alternation = function (b, c) {
    var d = $;
    function j(h, g) {
      var f = this;
      this.container = d(h);
      this.data = {
      };
      this.rows = null;
      this.init = function () {
        this.rows = this.container.find(g.row);
        var p;
        var l;
        for (var k = 0; k < this.rows.length; k++) {
          p = this.rows[k];
          p.setAttribute('alternation', k);
          l = p.getAttribute('group');
          this.data[k] = {
            group: l,
            backgroundColor: ''
          }
        }
      };
      this.bindColor = function () {
        if (!g.colors) {
          return
        }
        var k = this.rows.length - g.remain;
        for (var m = g.index; m < k; ) {
          for (var l = 0; l < g.colors.length && m < k; l++) {
            row = this.rows[m];
            row.style.backgroundColor = g.colors[l];
            this.data[m].backgroundColor = g.colors[l];
            m = m + g.alterNum
          }
        }
      };
      this.bindEvent = function () {
        this.rows.unbind('mouseover').bind('mouseover', function () {
          var o = d(this);
          var k = o.attr('alternation');
          var p = f.data[k];
          if (g.hover) {
            o.css('backgroundColor', g.hover)
          }
          if (p.group) {
            f.container.find(g.row + '[group=' + p.group + ']').addClass('hover')
          }
        }).unbind('mouseout').bind('mouseout', function () {
          var o = d(this);
          var k = o.attr('alternation');
          var p = f.data[k];
          if (g.hover) {
            o.css('backgroundColor', p.backgroundColor)
          }
          if (p.group) {
            f.container.find(g.row + '[group=' + p.group + ']').removeClass('hover')
          }
        })
      };
      this.init();
      this.bindColor();
      this.bindEvent()
    }
    c = d.extend({
    }, a, c);
    d(b).each(function () {
      new j(this, c)
    })
  }
}) (); (function () {
  var a = function (u, k, h, g) {
    if (u.nodeType === 3) {
      var d = u.data.match(k);
      if (d) {
        var b = document.createElement(h || 'span');
        b.className = g || 'ec_ui_highlight highlight';
        var j = u.splitText(d.index);
        j.splitText(d[0].length);
        var f = j.cloneNode(true);
        b.appendChild(f);
        j.parentNode.replaceChild(b, j);
        return 1
      }
    } else {
      if (u.nodeType === 1 && u.childNodes && !/(script|style)/i.test(u.tagName) && !(u.tagName === h.toUpperCase() && u.className === g)) {
        for (var c = 0; c < u.childNodes.length; c++) {
          c += a(u.childNodes[c], k, h, g)
        }
      }
    }
    return 0
  };
  ol.ui.highlight = function (u, g, t) {
    var b = {
      className: null,
      element: 'span',
      caseSensitive: false,
      wordsOnly: false
    };
    $.extend(b, t);
    if (g.constructor === String) {
      g = [
        g
      ]
    }
    g = $.grep(g, function (l, k) {
      return l != ''
    });
    if (g.length == 0) {
      return this
    }
    var h = g.join('|');
    h = h.replace(/([\\\$\{\}\(\)\[\]\+\?\-\>\<\^\!\.\*])/g, '\\$1');
    var f = b.caseSensitive ? '' : 'i';
    var d = '(' + h + ')';
    if (b.wordsOnly) {
      d = '\\b' + d + '\\b'
    }
    var j = new RegExp(d, f);
    var c = u;
    if (typeof u == 'string') {
      c = ol.Cache.get(u)
    }
    return c.each(function () {
      a(this, j, b.element, b.className)
    })
  }
}) (); (function () {
  var b = {
    _ec_ui_alert: {
      _default: {
        title: '������ʾ',
        zIndex: 399,
        showCancel: false,
        modal: false,
        draggable: false,
        focus: '.box-ok:first',
        width: 300,
        clickOut: function (d) {
          d.close()
        }
      }
    },
    _ec_ui_info: {
    },
    _ec_ui_warn: {
    },
    _ec_ui_error: {
    }
  };
  function a(l, d, h) {
    var g = ol.Cache.get;
    var f = g(d.boxid, function () {
      return new ol.box(null, d)
    });
    f.open(l);
    if (h.timeout) {
      if (b[d.boxid].timer) {
        clearTimeout(b[d.boxid].timer)
      }
      b[d.boxid].timer = setTimeout(function () {
        if (ol.isIE6) {
          f.close()
        } else {
          f.fadeOut(800)
        }
      }, h.timeout);
      g('#' + d.boxid).unbind('mouseover').bind('mouseover', function () {
        clearTimeout(b[d.boxid].timer)
      }).unbind('mouseout').bind('mouseout', function () {
        b[d.boxid].timer = setTimeout(function () {
          if (ol.isIE6) {
            f.close()
          } else {
            f.fadeOut(800)
          }
        }, h.timeout / 2)
      })
    }
  }
  var c = {
    title: '',
    zIndex: 399,
    showButton: false,
    modal: false,
    draggable: false,
    focus: '.box-close',
    width: 300
  };
  ol.ui.warn = function (d, f) {
    f = $.extend({
    }, c, f);
    f.boxid = '_ec_ui_warn';
    f.boxclass = 'ec_ui_warn';
    var g = {
      timeout: f.timeout
    };
    delete f.timeout;
    a(d, f, g)
  };
  ol.ui.info = function (d, f) {
    f = $.extend({
    }, c, f);
    f.boxid = '_ec_ui_info';
    f.boxclass = 'ec_ui_info';
    var g = {
      timeout: f.timeout
    };
    delete f.timeout;
    a(d, f, g)
  };
  ol.ui.error = function (d, f) {
    f = $.extend({
    }, c, f);
    f.boxid = '_ec_ui_error';
    f.boxclass = 'ec_ui_error';
    var g = {
      timeout: f.timeout
    };
    delete f.timeout;
    a(d, f, g)
  };
  ol.ui.alert = function (d, f) {
    f = $.extend({
    }, b._ec_ui_alert._default, f);
    f.boxid = '_ec_ui_alert';
    f.boxclass = 'ec_ui_alert';
    var g = ol.Cache.get(f.boxid, function () {
      return new ol.box(null, f)
    });
    g.setTitle(f.title);
    g.open(d)
  }
}) (); (function () {
  var a = {
    style: 'style1',
    offsetX: 0,
    offsetY: 0
  },
  b = '<div class="ec_ui_ballon"><div id="ballon_header"></div><div id="ballon_body"></div><div id="ballon_footer"></div></div>';
  ol.ui.ballon = function (h, d, g) {
    g = $.extend({
    }, a, g);
    var c = $(h);
    var f = $(b);
    var n;
    f.find('#ballon_body').html(d || '');
    c.mouseover(function () {
      n = setTimeout(function () {
        var m = g.offsetX || 0;
        var l = g.offsetY || 0;
        var k = c.offset().top + c.height();
        var j = c.offset().left;
        j = Math.max(j + m, 0);
        k = Math.max(k + l, 0);
        f.css({
          display: 'block',
          top: k,
          left: j
        }).addClass(g.style);
        f.appendTo('body')
      }, 250)
    }).mouseout(function () {
      clearTimeout(n);
      f.remove()
    });
    return ol.ui
  }
}) (); (function () {
  var a = {
    css: null,
    captureInput: false
  };
  ol.ui.hover = function (c, b) {
    var d = $;
    b = d.extend(true, {
    }, a, b);
    d(c).each(function () {
      var j = null;
      var p = false;
      var h = false;
      var g = d(this);
      var f = function () {
        if (p || h) {
          return
        }
        if (b.css) {
          j = g.attr('style');
          g.css(b.css)
        } else {
          g.addClass('hover')
        }
      };
      var o = function () {
        if (p || h) {
          return
        }
        if (b.css) {
          g.attr('style', j)
        } else {
          g.removeClass('hover')
        }
      };
      g.mouseover(function () {
        f();
        h = true
      }).mouseout(function () {
        h = false;
        o()
      });
      if (this.tagName == 'INPUT' || this.tagName == 'TEXTAREA') {
        g.focus(function () {
          f();
          p = true
        }).blur(function () {
          p = false;
          o()
        })
      } else {
        if (b.captureInput) {
          g.find('input[type=text],textarea').bind('focus', function () {
            f();
            p = true
          }).bind('blur', function () {
            p = false;
            o()
          })
        }
      }
    });
    return ol.ui
  }
}) (); ol.pkg('ol.lang'); Array.prototype.clone = function () {
  return this.slice(0)
}; if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, 'startsWith', {
    value: function (d, c) {
      c = c || 0;
      return this.substring(!c || c < 0 ? 0 : + c, c + d.length) === d
    }
  })
}
if (!String.prototype.transHtmlAttribute) {
  String.prototype.transHtmlAttribute = function () {
    var a = this;
    var d = document.createElement('textarea');
    d.innerHTML = a;
    a = d.value;
    return a
  }
}
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+/, '').replace(/\s+$/, '')
  }
}
String.prototype.len = function () {
  return this.replace(/[^\x00-\xff]/g, 'aa').length
}; String.prototype.replaceAll = function (b, a) {
  return this.replace(new RegExp(b, 'gm'), a)
}; String.prototype.parseDate = function (n) {
  var b = {
    '\\.': {
      v: '\\.'
    },
    '\\?': {
      v: '\\?'
    },
    'M+': {
      v: '(0[1-9]|1[0-2]|[1-9])',
      k: 'MM'
    },
    'd+': {
      v: '(3[01]|[12][0-9]|0[1-9]|[1-9])',
      k: 'dd'
    },
    'y+': {
      v: '(\\d{4})',
      k: 'yyyy'
    },
    'H+': {
      v: '(2[0-3]|[01][0-9]|[0-9])',
      k: 'HH'
    },
    'm+': {
      v: '([0-5][0-9]|[0-9])',
      k: 'mm'
    },
    's+': {
      v: '([0-5][0-9]|[0-9])',
      k: 'ss'
    },
    S: {
      v: '(\\d+)',
      k: 'S'
    }
  };
  var l = [
  ];
  var c = n;
  var f;
  var h;
  for (var g in b) {
    if ((f = n.search(new RegExp('(' + g + ')'))) != - 1) {
      h = b[g];
      c = c.replace(RegExp.$1, h.v);
      if (h.k) {
        l.push({
          n: h.k,
          order: f
        })
      }
    }
  }
  l.sort(function (k, d) {
    return k.order - d.order
  });
  h = {
  };
  for (var m = 0; m < l.length; m++) {
    h[l[m].n] = m + 1
  }
  var a = document.createElement('textarea');
  a.innerHTML = this;
  var j = a.value;
  var C = j.match(new RegExp(c));
  if (!C) {
    throw 'Invalid String for parse to Date!'
  }
  var y = new Date;
  if (h.yyyy) {
    y.setFullYear(C[h.yyyy])
  }
  if (h.dd) {
    var B = C[h.dd];
    y.setDate(B);
    y.setDate(B)
  } else {
    y.setDate(1);
    y.setDate(1)
  }
  if (h.MM) {
    y.setMonth(C[h.MM] - 1)
  }
  if (h.HH) {
    y.setHours(C[h.HH])
  } else {
    y.setHours(0)
  }
  if (h.mm) {
    y.setMinutes(C[h.mm])
  } else {
    y.setMinutes(0)
  }
  if (h.ss) {
    y.setSeconds(C[h.ss])
  } else {
    y.setSeconds(0)
  }
  if (h.S) {
    y.setMilliseconds(C[h.S])
  } else {
    y.setMilliseconds(0)
  }
  return y
}; Date.prototype.format = function (c) {
  var b = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
    'H+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds()
  };
  var a = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六'
  };
  if (/(y+)/.test(c)) {
    c = c.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(c)) {
    c = c.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? '星期' : '周' : '') + a[this.getDay() + ''])
  }
  for (var d in b) {
    if (new RegExp('(' + d + ')').test(c)) {
      c = c.replace(RegExp.$1, RegExp.$1.length == 1 ? b[d] : ('00' + b[d]).substr(('' + b[d]).length))
    }
  }
  return c
}; if (!0 && window.JSON && window.JSON.parse && window.JSON.stringify) {
  ol.lang.json = function () {
    var a = /___$/;
    return {
      parse: function (c) {
        try {
          return window.JSON.parse(c)
        } catch (b) {
          return false
        }
      },
      stringify: function (c) {
        try {
          return window.JSON.stringify(c, function (d, g) {
            return !a.test(d) ? g : null
          })
        } catch (b) {
          return null
        }
      }
    }
  }()
} else {
  ol.lang.json = function () {
    function f(n) {
      return n < 10 ? '0' + n : n
    }
    Date.prototype.toJSON = function () {
      return [this.getUTCFullYear(),
      '-',
      f(this.getUTCMonth() + 1),
      '-',
      f(this.getUTCDate()),
      'T',
      f(this.getUTCHours()),
      ':',
      f(this.getUTCMinutes()),
      ':',
      f(this.getUTCSeconds()),
      'Z'].join('')
    };
    var m = {
      '': '\\b',
      '\t': '\\t',
      '\n': '\\n',
      '\f': '\\f',
      '\r': '\\r',
      '"': '\\"',
      '\\': '\\\\'
    };
    function stringify(value) {
      var a,
      i,
      k,
      l,
      r = /["\\\x00-\x1f\x7f-\x9f]/g,
      v;
      switch (typeof value) {
        case 'string':
          return r.test(value) ? '"' + value.replace(r, function (a) {
            var c = m[a];
            if (c) {
              return c
            }
            c = a.charCodeAt();
            return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16)
          }) + '"' : '"' + value + '"';
        case 'number':
          return isFinite(value) ? String(value)  : 'null';
        case 'boolean':
        case 'null':
          return String(value);
        case 'object':
          if (!value) {
            return 'null'
          }
          a = [
          ];
          if (typeof value.length === 'number' && !value.propertyIsEnumerable('length')) {
            l = value.length;
            for (i = 0; i < l; i += 1) {
              a.push(stringify(value[i]) || 'null')
            }
            return '[' + a.join(',') + ']'
          }
          for (k in value) {
            if (k.match('___$')) {
              continue
            }
            if (value.hasOwnProperty(k)) {
              if (typeof k === 'string') {
                v = stringify(value[k]);
                if (v) {
                  a.push(stringify(k) + ':' + v)
                }
              }
            }
          }
          return '{' + a.join(',') + '}'
      }
    }
    return {
      stringify: stringify,
      parse: function (text) {
        if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
          return eval('(' + text + ')')
        }
        return false
      }
    }
  }()
}
ol.pkg('ol.util');
ol.util.trim = function (a) {
  if (a == null) {
    return ''
  }
  if (typeof a != 'string') {
    return a
  }
  return a.trim()
};
ol.util.left = function (c, a, b) {
  if (c.len() < a) {
    return c
  }
  var l = 0;
  for (var d = 0; d < c.length; d++) {
    if (c.charCodeAt(d) > 128) {
      l = l + 2
    } else {
      l = l + 1
    }
    if (l > a) {
      return c.substring(0, d) + (b ? b : '')
    }
  }
  return c
};
ol.util.isEmpty = function (a) {
  if (ol.util.trim(a) == '') {
    return true
  }
  return false
};
ol.util.isDate = function (a) {
  if (a == null || a == '') {
    return false
  }
  re = /\d{4}-{1}\d{2}-{1}\d{2}$/;
  return a.match(re)
};
ol.util.isNumeric = function (a) {
  strRef = '1234567890';
  if (a == '') {
    return false
  }
  for (i = 0; i < a.length; i++) {
    tempChar = a.substring(i, i + 1);
    if (strRef.indexOf(tempChar, 0) == - 1) {
      return false
    }
  }
  return true
};
ol.util.isFloat = function (b) {
  var a = /^[0-9]+.?[0-9]*$/;
  return a.test(s)
};
ol.util.isEmail = function (c, d) {
  if (!c) {
    return false
  }
  var a = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/i;
  var b = new RegExp(a);
  var f;
  if (d) {
    f = c.split(d)
  } else {
    f = [
      c
    ]
  }
  for (var n = 0; n < f.length; n++) {
    if (f[n].match(b) == null) {
      return false
    }
  }
  return true
};
ol.util.unescapeHtml = function (a) {
  if (typeof a !== 'string') {
    return a
  }
  if (ol.util.isEmpty(a)) {
    return ''
  }
  var d = document.createElement('textarea');
  d.innerHTML = a;
  a = d.value;
  return a
};
ol.util.parseDate = function (j) {
  if ('string' === typeof j) {
    j = j.trim();
    var g = document.createElement('textarea');
    g.innerHTML = j;
    j = g.value
  }
  var h = new Date(j);
  var a = null;
  if (isNaN(h.valueOf()) && 'string' === typeof j) {
    if (/^\d{1,13}$/.test(j)) {
      h = new Date(parseInt(j))
    } else {
      if (a = /^(\d{4})-(\d{1,2})-(\d{1,2})[ T]{1}(\d{1,2}):(\d{1,2}):(\d{1,2})(\+\d{4})?$/.exec(j)) {
        h = new Date(parseInt(a[1]), parseInt(a[2]) - 1, parseInt(a[3]), parseInt(a[4]), parseInt(a[5]), parseInt(a[6]))
      }
    }
  }
  if (isNaN(h.valueOf())) {
  }
  return h
};
ol.util.isFunction = function (a) {
  if (!a) {
    return false
  }
  return Object.prototype.toString.call(a) === '[object Function]'
};
ol.util.isArray = function (a) {
  if (!a) {
    return false
  }
  return Object.prototype.toString.call(a) === '[object Array]'
};
ol.util.isObject = function (a) {
  if (!a) {
    return false
  }
  return Object.prototype.toString.call(a) === '[object Object]'
};
ol.util.cookie = {
  get: function (f) {
    var d = null;
    if (document.cookie && document.cookie != '') {
      var a = document.cookie.split(';');
      for (var b = 0; b < a.length; b++) {
        var c = (a[b] || '').replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, '');
        if (c.substring(0, f.length + 1) == f + '=') {
          var n = function (g) {
            g = g.replace(/\+/g, ' ');
            var j = '()<>@,;:\\"/[]?={}';
            for (var h = 0; h < j.length; h++) {
              if (g.indexOf(j.charAt(h)) != - 1) {
                if (g.startsWith('"')) {
                  g = g.substring(1)
                }
                if (g.endsWith('"')) {
                  g = g.substring(0, g.length - 1)
                }
                break
              }
            }
            return decodeURIComponent(g)
          };
          d = n(c.substring(f.length + 1));
          break
        }
      }
    }
    return d
  },
  set: function (r, h, g) {
    g = g || {
    };
    if (h === null) {
      h = '';
      g.expires = - 1
    }
    var d = '';
    if (g.expires && (typeof g.expires == 'number' || g.expires.toUTCString)) {
      var f;
      if (typeof g.expires == 'number') {
        f = new Date;
        f.setTime(f.getTime() + g.expires * 24 * 60 * 60 * 1000)
      } else {
        f = g.expires
      }
      d = '; expires=' + f.toUTCString()
    }
    var c = '; path=' + (g.path || '/');
    var a = g.domain ? '; domain=' + g.domain : '';
    var b = g.secure ? '; secure' : '';
    document.cookie = [
      r,
      '=',
      encodeURIComponent(h),
      d,
      c,
      a,
      b
    ].join('')
  },
  remove: function (a) {
    this.set(a, null)
  }
};
ol.pkg('ol.form.input');
(function () {
  var a = 0;
  ol.form.input.label = function (b, j, c) {
    if (!j) {
      throw 'Please set label text!';
      return ol.form.input
    }
    var d = $;
    c = d.extend({
    }, ol.form.input.label.defaults, c);
    d(b).each(function () {
      var k = d(this),
      o = k.attr('id'),
      m = Number(k.css('z-index')) || 1,
      f = parseInt(k.css('margin-top'), 10) + parseInt(k.css('border-top-width'), 10),
      h = parseInt(k.css('margin-left'), 10) + parseInt(k.css('border-left-width'), 10),
      n = d('<label style="display:none;position:absolute;cursor:text;float:left;z-index:' + (m + 1) + '">' + j + '</label>').attr('class', k.attr('class')),
      l = d('<input style="border:none;background:transparent;cursor:text;margin:0;" value="' + j + '" tabindex=-1 readonly>');
      if ('TEXTAREA' == k.prop('tagName')) {
        l.css('height', 'auto')
      }
      if (!o && c.autoId) {
        o = 'input_label_' + a++;
        k.attr('id', o)
      }
      var p = {
        color: c.color
      };
      n.attr('for', o).css(p);
      k.css('z-index', m).before(n);
      var g = k.parents('form');
      if (g.length > 0) {
        g.bind('reset', function () {
          setTimeout(function () {
            A()
          }, 150)
        })
      }
      var A = function () {
        if (k.attr('value').length == 0) {
          n.css('display', 'block')
        }
      },
      q = function () {
        n.css('display', 'none')
      };
      k.bind('blur', A).bind('focus', q);
      if (document.activeElement != k[0]) {
        A()
      }
    });
    return ol.form.input
  }
}) ();
ol.form.input.label.defaults = {
  color: '#999',
  autoId: true
};
(function () {
  var b = {
    max: Number.MAX_VALUE,
    exceedCallback: null
  },
  a = function (d) {
    var j = d.length,
    c = d.replace(/[^\x00-\xff]/g, '').length,
    f = (c % 2 == 0 ? c / 2 : parseInt(c / 2) + 1) + (j - c);
    return f
  };
  ol.form.input.wordCount = function (d, g) {
    var c = $;
    opt = c.extend({
    }, b, g);
    c(d).each(function (j) {
      if (typeof opt.callback == 'function') {
        var f = a(this.value);
        opt.callback.call(this, f);
        if (f > opt.max && opt.exceedCallback) {
          opt.exceedCallback.call(this, f)
        }
      }
      c(this).bind('keyup', function () {
        var h = a(this.value);
        if (typeof opt.callback == 'function') {
          opt.callback.call(this, h)
        }
        if (h > opt.max && opt.exceedCallback) {
          opt.exceedCallback.call(this, h)
        }
      })
    })
  }
}) ();
ol.pkg('ol.form.validator');
(function () {
  var d = function (m, l) {
    if (logger && logger.warn) {
      logger.warn(m, l)
    }
  },
  k = function (m, l) {
    if (logger && logger.error) {
      logger.error(m, l)
    }
  },
  g = {
    trim: true,
    validOnChange: false,
    allowEmpty: true,
    async: true,
    errorClass: null,
    successFunction: null,
    errorFunction: null
  };
  var x = {
  };
  var h = {
  };
  var j = function (q, t, m, n, r, l) {
    $.extend(l, m);
    if (n) {
      r = h[n];
      if (!r) {
        d(n + ' rule is undefined!');
        return true
      }
    }
    var o;
    if (n) {
      l.type = n
    }
    if (r.length == 3) {
      o = r(q, t, l)
    } else {
      o = r(q, l)
    }
    if (!o) {
      if (l.errorFunction) {
        var p = function () {
          if (m.errorClass && t) {
            t.addClass(m.errorClass)
          }
          l.errorFunction(t || q, l)
        };
        if (m.async) {
          setTimeout(p, 1)
        } else {
          p()
        }
      }
      return false
    }
    return true
  };
  var a = function (q, r, n, l) {
    if (!n.type) {
      if (!j(q, r, n, null, n.rule, l)) {
        return false
      }
    } else {
      var o = n.type;
      if (typeof n.type == 'string') {
        o = [
          n.type
        ]
      }
      var p = {
      };
      for (var m = 0; m < o.length; m++) {
        if (!p[o[m]]) {
          if (!j(q, r, n, o[m], null, l)) {
            return false
          }
          p[o[m]] = 1
        }
      }
    }
    return true
  };
  var b = function (n) {
    var q = n.attr('validator');
    if (!q) {
      return true
    }
    var m = x[q];
    var w;
    switch (n.prop('tagName')) {
      case 'SELECT':
        w = n.val();
        break;
      default:
        w = n[0].value
    }
    var t = {
  };
  var u = [
  ];
  for (var o = 0; o < m.length; o++) {
    var r = {
    };
    if (m[o].trim) {
      w = $.trim(w)
    }
    if (!a(w, n, m[o], r)) {
      return false
    }
    u.push(r)
}
for (var o = 0; o < m.length; o++) {
  var v = m[o];
  if (v.successFunction) {
    var l = u[o];
    var p = function () {
      if (v.errorClass && n) {
        n.removeClass(v.errorClass)
      }
      v.successFunction(n || w, l)
    };
    if (v.async) {
      setTimeout(p, 1)
    } else {
      p()
    }
  }
}
return true
};
ol.form.validator = function (p, n) {
if (typeof n == 'object') {
var q = {
};
if (a(p, null, n, q) && n.successFunction) {
  if (n.async) {
    setTimeout(function () {
      n.successFunction(p, q)
    }, 1)
  } else {
    n.successFunction(p, q)
  }
}
return
}
var m = p,
o = n;
var u = $(m);
var v = u.prop('tagName');
o = typeof o == 'boolean' ? o : true;
switch (v) {
case 'SELECT':
case 'INPUT':
case 'TEXTAREA':
  return b(u)
}
var t = u.find('select[validator],input[validator],textarea[validator]');
var r = true;
for (var l = 0; l < t.length; l++) {
if (!b($(t[l]))) {
  if (o) {
    return false
  } else {
    r = false
  }
}
}
return r
};
ol.form.validator.register = function (m, l) {
h[m] = l
};
ol.form.validator.get = function (l) {
return h[l]
};
var c = 0;
ol.form.validator.bind = function (m, o) {
var n = [
];
var r = $(m);
o = $.extend({
}, g, o);
if (o.validOnChange) {
r.on('change', function (t) {
ol.form.filter(this);
ol.form.validator(this, true)
})
}
for (var p = 0; p < r.length; p++) {
var q = $(r[p]);
var l = q.attr('validator');
if (!l) {
l = 'validator' + ++c + (new Date).getTime();
q.attr('validator', l)
}
if (!x[l]) {
x[l] = [
]
}
x[l].push(o);
n.push(l)
}
return n
};
ol.form.filter = function (n) {
if ($(n).attr('name') == 'consignee' || $(n).attr('id') == 'vatInvoice-consignee' || $(n).attr('id') == 'contactBy') {
var q = /[^a-zA-Z\u4E00-\u9FA5\uFF21-\uFF3A\uFF41-\uFF5A]/g;
var l = $('#' + $(n).attr('name') + '-msg');
if (q.test($(n).val())) {
$(n).val(function () {
  return $(n).val().replace(q, '')
});
if (l.length) {
  l.addClass('report-errors filter  label-error').text('为了更好的送达，已帮你过滤不能识别的字符')
} else {
  $(n).next().addClass('report-errors   filter').text('为了更好的送达，已帮你过滤不能识别的字符')
}
} else {
if (l.length) {
  l.removeClass('filter report-errors icon-error label-error').innerText = ''
} else {
  $(n).next().removeClass('report-errors icon-error  filter');
  if ($(n).next() [0]) {
    $(n).next() [0].innerText = ''
  }
}
}
}
if ($(n).attr('name') == 'customerName' || $(n).attr('name') == 'customerNameNoEncrypt') {
var q = /[^a-zA-Z\u4E00-\u9FA5\uFF21-\uFF3A\uFF41-\uFF5A]/g;
var l = $('#' + $(n).attr('name') + '-msg');
if (q.test($(n).val())) {
$(n).val(function () {
  return $(n).val().replace(q, '')
});
if ($(n).val() != '') {
  $(n).nextAll('span').remove();
  $(n).parent().append('<span class=\'vam icon-warn\'>为了更好的送达,已帮你过滤不能识别的字符</span>')
} else {
  $(n).nextAll('span').remove()
}
} else {
$(n).nextAll('span').remove()
}
}
if ($(n).attr('name') == 'problemDescription' || $(n).attr('name') == 'address' || $(n).attr('id') == 'vatInvoice-address' || $(n).attr('id') == 'contactAddress') {
var l = $('#' + $(n).attr('name') + '-msg');
addressFrontRegex = addressFrontRegex.replaceAll('&amp;', '&');
addressFrontRegex = addressFrontRegex.replaceAll('&#034;', '"');
addressFrontRegex = addressFrontRegex.replaceAll('&lt;', '<');
addressFrontRegex = addressFrontRegex.replaceAll('&gt;', '>');
addressFrontRegex = addressFrontRegex.replaceAll('&#039;', '\'');
var o = new RegExp(addressFrontRegex);
var m = false;
$.each($(n).val().split(''), function (t, r) {
if (!o.test(r)) {
  m = true
}
});
var p = $(n).val().split('').filter(function (r) {
return o.test(r)
}).join('');
if (m) {
$(n).valS(p);
if ($(n).val() != '') {
  if (l.length) {
    l.addClass('report-errors filter label-error').text('为了更好的送达，已帮你过滤不能识别的字符')
  } else {
    if ($(n).attr('name') == 'problemDescription') {
      $('#content-msg').addClass('report-errors filter').text('为了客服更好的理解您的诉求，已帮您过滤不能识别的字符')
    } else {
      $(n).next().addClass('report-errors  filter').text('为了更好的送达，已帮你过滤不能识别的字符')
    }
  }
} else {
  if ($(n).attr('name') == 'problemDescription') {
    $('#content-msg').text('');
    $('#content-msg').removeClass('filter')
  } else {
    l.removeClass('filter')
  }
}
} else {
if (l.length) {
  l.removeClass('filter report-errors icon-error label-error').text('')
} else {
  if ($(n).attr('name') == 'problemDescription') {
    $('#content-msg').removeClass('report-errors icon-error  filter').innerText = ''
  } else {
    $(n).next().removeClass('report-errors icon-error  filter');
    if ($(n).next() [0]) {
      $(n).next() [0].innerText = ''
    }
  }
}
}
}
};
ol.form.getStrLeng = function (o) {
var p = 0;
var l = o.length;
var m = - 1;
for (var n = 0; n < l; n++) {
m = o.charCodeAt(n);
if (m >= 0 && m <= 128) {
p += 1
} else {
p += 2
}
}
return p
};
ol.form.validator.defaults = g;
var f = ol.form.validator,
y = function (m, l) {
return !m
};
f.register('regex', function (m, l) {
if (l.allowEmpty && y(m)) {
return true
}
if (!l.regex) {
k('regex', 'need parameter of \'regex\'!');
return false
}
return l.regex.test(m)
});
f.register('require', function (m, l) {
l.allowEmpty = false;
return !y(m)
});
f.register('email', function (m, l) {
if (l.allowEmpty && y(m)) {
return true
}
var n = null;
if (l.separater) {
n = l.separater
}
return ol.util.isEmail(m, n)
});
f.register('eq', function (o, l) {
if (!l.compareTo) {
k('eq', 'need parameter of \'compareTo\'!');
return false
}
var m = $(l.compareTo).val();
if (!l.format) {
return o == m
}
var n = f.get('date');
if (!(n(o, l) && n(m, l))) {
return false
}
return o.parseDate(l.format).getTime() == m.parseDate(l.format).getTime()
});
f.register('lt', function (p, m) {
if (m.allowEmpty && y(p)) {
return true
}
if (!m.compareTo) {
k('lt', 'need parameter of \'compareTo\'!');
return false
}
var n = $(m.compareTo).val();
if (!m.format) {
m.negative = true;
var l = f.get('float');
if (!l(p, m)) {
return false
}
if (!l(n, m)) {
return false
}
p = parseFloat(p);
n = parseFloat(n);
return p < n
}
var o = f.get('date');
if (!(o(p, m) && o(n, m))) {
return false
}
return p.parseDate(m.format) < n.parseDate(m.format)
});
f.register('le', function (o, n) {
var m = f.get('eq');
var l = f.get('lt');
return m(o, n) || l(o, n)
});
f.register('gt', function (p, m) {
if (m.allowEmpty && y(p)) {
return true
}
if (!m.compareTo) {
k('gt', 'need parameter of \'compareTo\'!');
return false
}
var n = $(m.compareTo).val();
if (!m.format) {
m.negative = true;
var l = f.get('float');
if (!l(p, m)) {
return false
}
if (!l(n, m)) {
return false
}
p = parseFloat(p);
n = parseFloat(n);
return p > n
}
var o = f.get('date');
if (!(o(p, m) && o(n, m))) {
return false
}
return p.parseDate(m.format) > n.parseDate(m.format)
});
f.register('ge', function (o, n) {
var l = f.get('eq');
var m = f.get('gt');
return l(o, n) || m(o, n)
});
f.register('length', function (n, m) {
if (m.allowEmpty && y(n)) {
return true
}
if (!(m.min || m.max)) {
k('length', 'need parameter of \'min\' or \'max\'!');
return false
}
var l = ol.form.getStrLeng(n);
if (m.min && l < m.min) {
return false
}
if (m.max && l > m.max) {
return false
}
return true
});
f.register('range', function (o, n) {
if (n.allowEmpty && y(o)) {
return true
}
if (!(n.min || n.max)) {
k('range', 'need parameter of \'min\' or \'max\'!');
return false
}
n.negative = true;
var m = f.get('float');
if (!m(o, n)) {
return false
}
var l = parseFloat(o);
if (n.min && l < n.min) {
return false
}
if (n.max && l > n.max) {
return false
}
return true
});
f.register('chinese', function (m, l) {
if (l.allowEmpty && y(m)) {
return true
}
l.regex = /^[\u4E00-\u9FA5]$/;
return f.get('regex') (m, l)
});
f.register('int', function (m, l) {
if (l.allowEmpty && y(m)) {
return true
}
if (l.negative) {
l.regex = /^[-]?\d+$/
} else {
l.regex = /^\d+$/
}
return f.get('regex') (m, l)
});
f.register('float', function (m, l) {
if (l.allowEmpty && y(m)) {
return true
}
if (l.negative) {
l.regex = /^[-]?\d+(\.\d+)?$/
} else {
l.regex = /^\d+(\.\d+)?$/
}
return f.get('regex') (m, l)
});
f.register('date', function (p, n) {
if (n.allowEmpty && y(p)) {
return true
}
if (!n.format) {
d('date', 'need parameter of \'format\'!');
return false
}
var o = {
'\\.': '\\.',
'M+': '(0[1-9]|[1-9]|1[0-2])',
'd+': '(0[1-9]|[1-9]|[12][0-9]|3[01])',
'y+': '(\\d{4})',
'H+': '([0-9]|[01][0-9]|2[0-3])',
'm+': '([0-9]|[0-5][0-9])',
's+': '([0-9]|[0-5][0-9])',
S: '(\\d+)'
};
var l = n.format;
for (var m in o) {
if (new RegExp('(' + m + ')').test(n.format)) {
l = l.replace(RegExp.$1, o[m])
}
}
n.regex = new RegExp('^' + l + '$');
if (!f.get('regex') (p, n)) {
return false
}
return p == p.parseDate(n.format).format(n.format)
});
f.register('url', function (m, l) {
if (l.allowEmpty && y(m)) {
return true
}
if (m.startsWith('http://')) {
m = m.substring(7)
} else {
if (m.startsWith('https://')) {
m = m.substring(8)
} else {
if (l.requireProtocol) {
  return false
}
}
}
if (!m) {
return false
}
l.regex = /^[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
return f.get('regex') (m, l)
})
}) ();
(function () {
var r = ol.template = function (j) {
this.init = function () {
j = g(j);
var k;
for (var l = 0; l < j.length; l++) {
k = h(j[l]);
b[k[0]] = d(k)
}
};
this.parse = function (l, k) {
if (!l || !(l = b[l])) {
return ''
}
return a(l, k)
};
this.init()
};
r.parse = function (l, j) {
var k = a(d(h(l)), j);
return k
};
r.startDelimiter = '<!--';
r.endDelimiter = '-->';
var b = {
},
c = new RegExp(r.startDelimiter + '#macro \\S+\\s*\\w*' + r.endDelimiter + '[\\s\\S]*?' + r.startDelimiter + '/#macro' + r.endDelimiter, 'g'),
g = function (j) {
return j.match(c)
},
f = new RegExp('(' + r.startDelimiter + '(/?)#([\\s\\S]*?)' + r.endDelimiter + ')|(\')|([\r\n\t])|({#([^}]*?)})', 'g'),
h = function (k) {
var u = k.replace(f, function (w, t, I, J, x, y, K, C) {
if (t) {
return '\n' + (I ? '-' : '+') + J.replace(/[\r\n\t]/g, '') + '\n'
}
if (x) {
return '\\\''
}
if (y) {
return ''
}
if (K) {
var H = C.indexOf('?');
if (H != 0) {
  switch (C.substring(H + 1)) {
    case 'html':
      C = 'ec.autoEncodeAttr(' + C.substring(0, H) + ')';
      break;
    case 'js_string':
      C = C.replace(/\"/g, '\\"').replace(/\r\n/g, '\\r\\n').replace(/\n/g, '\\n');
      break
  }
}
C = C.replace(/\'/g, '\\\'');
return '\'+(' + C + ')+\''
}
}); u = u.split(/\n/); var q, l, n, v, j, m = [
'var f=[];'
]; for (var z = 0; z < u.length; z++) {
q = u[z];
if (!q) {
continue
}
l = q.charAt(0);
if (l !== '+' && l !== '-') {
m.push('f.push(\'' + q + '\');');
continue
}
n = q.split(/\s/);
switch (n[0]) {
case '+macro':
  v = n[1];
  j = n[2];
  m.push('f.push("<!--' + v + ' start-->");');
  break;
case '-macro':
  m.push('f.push("<!--' + v + ' end-->");');
  break;
case '+elseif':
  n.splice(0, 1);
  m.push('}else if' + n.join(' ') + '{');
  break;
case '+else':
  m.push('}else{');
  break;
case '+if':
case '+for':
case '+switch':
  n[0] = n[0].substr(1);
  m.push(n.join(' ') + '{');
  break;
case '+case':
case '+default':
  n[0] = n[0].substr(1);
  m.push(n.join(' ') + ':');
  break;
case '-switch':
case '-for':
case '-if':
  m.push('}');
  break;
case '+list':
  if (n.length != 4) {
    throw v + ': list command error!'
  }
  var p = n[3] + '_index',
  o = n[3] + '_length',
  A = n[3] + '_num';
  m.push('if(' + n[1] + '.constructor === Array){');
  m.push('var ' + n[3] + ';');
  m.push('var ' + o + '=' + n[1] + '.length;');
  m.push('var ' + p + ';');
  m.push('for(var ' + A + '=' + o + ';' + A + '--;){');
  m.push(p + '=' + o + '-' + A + '-1;');
  m.push(n[3] + '=' + n[1] + '[' + p + '];');
  break;
case '-list':
  m.push('}}');
  break;
case '+break':
  m.push('break;');
  break;
case '-list':
  m.push('}}}');
  break;
case '+eval':
  n.splice(0, 1);
  m.push(n.join(' '));
  break;
case '+var':
  n[0] = n[0].substr(1);
  m.push(n.join(' ') + ';');
  break;
default:
  break
}
}
m.push('return f.join(\'\');');
return [v,
j || 'data',
m.join('')]
}, d = function (j) {
try {
return new Function(j[1], j[2])
} catch (k) {
logger.error('template:' + j[0], k)
}
}, a = function (j, k) {
return j(k)
}
}) ();
function alertS(t) {
if ('string' === typeof t) {
alert(t.transHtmlAttribute())
} else {
alert('参数错误')
}
}
ec.debug = false;
ol.load.define('jquery', [
{
mark: 'jquery',
uri: 'base/jquery-3.4.1.min.js',
type: 'js'
},
{
uri: 'base/jquery-migrate-1.4.1.min.js',
type: 'js'
},
{
uri: 'base/jquery-migrate-3.0.1.min.js',
type: 'js'
},
{
uri: 'base/helper.min.js',
type: 'js'
}
]);
ol.load.define('jquery.form', [
'jquery',
{
mark: 'jquery.form',
uri: 'base/jquery.form-4.2.2.min.js',
type: 'js',
charset: 'utf-8',
depend: true
}
]);
ol.load.define('jquery.autocomplete', [
{
mark: 'jquery.autocomplete',
uri: 'jquery.autocomplete/jquery.autocomplete.hack-min.js',
type: 'js',
charset: 'utf-8',
depend: true
}
]);
ol.load.define('jquery.movebar', [
{
uri: 'jquery.movebar/movebar.min.js',
type: 'js'
}
]);
ol.load.define('ec.dh', [
{
uri: 'dh/bigInt.min.js',
type: 'js',
depend: true
}
]);
ol.load.define('ec.pager', [
'jquery',
{
uri: 'ec.pager/pager-min.js',
type: 'js',
charset: 'gbk',
depend: true
}
]);
ol.load.define('ajax', [
'jquery.form',
{
mark: 'ajax',
uri: 'base/ajax.js',
type: 'js',
charset: 'utf-8',
depend: true
}
]);
if ('object' !== typeof (ol.box) && 'function' !== typeof (ol.box)) {
ol.load.define('ec.box', [
'jquery',
{
uri: 'ec.box/box-min.js',
type: 'js',
depend: true
}
])
}
ol.load.define('cloud-zoom', [
{
uri: 'cloud-zoom.1.0.2/cloud-zoom.1.0.2-hack-min.js',
type: 'js'
}
]);
ol.load.define('RaterStar', [
{
uri: 'RaterStar/rater-star.js',
type: 'js'
}
]);
ol.load.define('ec.slider', [
{
uri: 'ec.slider/slider-min.js',
type: 'js'
}
]);
ol.load.define('ec.linkSelect.region', [
'jquery',
{
uri: 'linkSelect/region-min.js?20161011',
type: 'js',
charset: 'utf-8',
depend: true
}
]);
ol.load.define('jquery.rotate', [
'jquery',
{
uri: 'jquery.rotate/jQueryRotate-min.js',
type: 'js'
}
]);
ol.load.define('jquery.fixed', [
'jquery',
{
uri: 'jquery.fixed/fixed.js',
type: 'js'
}
]);
if ('object' !== typeof (ec.encodeInit) && 'function' !== typeof (ec.encodeInit)) {
ol.load.define('ec.XSSUtils', [
{
uri: '/aes/XSSUtils.min.js',
type: 'js',
charset: 'utf-8',
depend: true,
loadType: null
},
{
uri: '/aes/esapi.js',
type: 'js',
charset: 'utf-8',
depend: true,
loadType: null
},
{
uri: '/aes/resources/Base.esapi.properties.min.js',
type: 'js',
charset: 'utf-8',
depend: true,
loadType: null
}
])
}
if (jQuery) {
ol._setLoadStatus('jquery', 'complete')
}
window._gaq = window._gaq || [
];
_gaq.push(['_setAccount',
(ec.debug ? '' : 'UA-28046633-2'),
't1']);
var _hmt = _hmt || [
];
var _paq = _paq || [
];
var _zpq = _zpq || [
];
var bindBox;
window._bd_share_config = {
};
ec.code = {
addAnalytics: function (c) {
c = c || {
google: true,
cnzz: true,
baidu: true,
click99: true,
hicloud: true,
suning: true,
operate: false,
dmp: false
};
var f = [
'/payment/alipay/returnURL',
'/order/feedBack'
],
b = location.href;
for (var d = 0; d < f.length; d += 1) {
if (b.indexOf(f[d]) > 0) {
return
}
}
_gaq.push(['_trackPageview']);
_gaq.push(['_trackPageLoadTime']);
_gaq.push(['_addOrganic',
'baidu',
'word']);
_gaq.push(['_addOrganic',
'baidu',
'kw']);
_gaq.push(['_addOrganic',
'opendata.baidu',
'wd']);
_gaq.push(['_addOrganic',
'zhidao.baidu',
'word']);
_gaq.push(['_addOrganic',
'news.baidu',
'word']);
_gaq.push(['_addOrganic',
'post.baidu',
'kw']);
_gaq.push(['_addOrganic',
'tieba.baidu',
'kw']);
_gaq.push(['_addOrganic',
'mp3.baidu',
'word']);
_gaq.push(['_addOrganic',
'image.baidu',
'word']);
_gaq.push(['_addOrganic',
'top.baidu',
'word']);
_gaq.push(['_addOrganic',
'news.google',
'q']);
_gaq.push(['_addOrganic',
'soso',
'w']);
_gaq.push(['_addOrganic',
'image.soso',
'w']);
_gaq.push(['_addOrganic',
'music.soso',
'w']);
_gaq.push(['_addOrganic',
'post.soso',
'kw']);
_gaq.push(['_addOrganic',
'wenwen.soso',
'sp']);
_gaq.push(['_addOrganic',
'post.soso',
'kw']);
_gaq.push(['_addOrganic',
'3721',
'name']);
_gaq.push(['_addOrganic',
'114',
'kw']);
_gaq.push(['_addOrganic',
'youdao',
'q']);
_gaq.push(['_addOrganic',
'vnet',
'kw']);
_gaq.push(['_addOrganic',
'sogou',
'query']);
_gaq.push(['_addOrganic',
'news.sogou',
'query']);
_gaq.push(['_addOrganic',
'mp3.sogou',
'query']);
_gaq.push(['_addOrganic',
'pic.sogou',
'query']);
_gaq.push(['_addOrganic',
'blogsearch.sogou',
'query']);
_gaq.push(['_addOrganic',
'gougou',
'search']);
var g = (b.indexOf('/product/678.html') > 0) ? true : false;
_zpq.push(['_setPageID',
(!g) ? '100' : '101']);
_zpq.push(['_setPageType',
(!g) ? 'home' : 'honor3']);
_zpq.push(['_setParams',
'']);
_zpq.push(['_setAccount',
'95']);
if (c.google) {
ec.load({
url: 'https://www.google-analytics.com/ga.js',
type: 'js',
loadType: 'lazy'
})
}
if (c.baidu) {
ec.load({
url: 'https://hm.baidu.com/h.js?a08b68724dd89d23017170634e85acd8',
type: 'js',
loadType: 'lazy'
})
}
if (c.cnzz) {
ec.load({
url: 'https://s95.cnzz.com/stat.php?id=4754392&web_id=4754392',
type: 'js',
loadType: 'lazy'
})
}
if (c.suning) {
ec.load({
url: 'https://cdn.zampda.net/s.js',
type: 'js',
loadType: 'lazy'
})
}
if (c.hicloud) {
_paq.push(['setTrackerUrl',
'https://metrics-drcn.dt.hicloud.com:6447/webv1']);
var a = ((ec.order && ec.order.orderCode) ? ec.order.orderCode : '') + '';
_paq.push(['setSiteId',
'www.vmall.com']);
_paq.push(['setCustomVariable',
1,
'cid',
(ec.util.cookie.get('cps_id') || ''),
'page']);
_paq.push(['setCustomVariable',
2,
'direct',
(ec.util.cookie.get('cps_direct') || ''),
'page']);
_paq.push(['setCustomVariable',
3,
'orderid',
a,
'page']);
_paq.push(['setCustomVariable',
4,
'wi',
(ec.util.cookie.get('cps_wi') || ''),
'page']);
ec.load({
url: 'https://res.vmallres.com/bi/hianalytics.js',
type: 'js',
loadType: 'lazy'
});
ec.util.cookie.set('cps_direct', null, {
expires: - 1,
domain: 'vmall.com'
})
}
if (c.operate) {
_paq.push(['setTrackerUrl',
'https://metrics-drcn.dt.hicloud.com:6447/webv1']);
var a = ((ec.order && ec.order.orderCode) ? ec.order.orderCode : '') + '';
_paq.push(['setSiteId',
'www.vmall.com']);
_paq.push(['setCustomVariable',
1,
'cid',
(ec.util.cookie.get('cps_id') || ''),
'page']);
_paq.push(['setCustomVariable',
2,
'direct',
(ec.util.cookie.get('cps_direct') || ''),
'page']);
_paq.push(['setCustomVariable',
3,
'orderid',
a,
'page']);
_paq.push(['setCustomVariable',
4,
'wi',
(ec.util.cookie.get('cps_wi') || ''),
'page']);
var e = '';
e = ec.code.convertFormat(c.optype, c.skuIds, c.bundleIds, c.custSkuIds, c.custBundleIds);
_paq.push(['setCustomVariable',
10,
'cart',
e,
'page']);
_paq.push(['trackGoal',
1])
}
}
};
ec.code.convertFormat = function (i, g, c, d, b) {
var f = '';
var j = [
];
var a = [
];
var e = [
];
var h = [
];
if (ec.util.isArray(g)) {
j = $.map(g, function (k) {
return '1_' + k
})
}
if (ec.util.isArray(c)) {
a = $.map(c, function (k) {
return '0_' + k
})
}
if (ec.util.isArray(d)) {
e = $.map(d, function (k) {
return '3_' + k
})
}
if (ec.util.isArray(b)) {
h = $.map(b, function (k) {
return '2_' + k
})
}
j = a.concat(j, h, e);
f = i + ',' + j.join(':');
return f
};
ec.code.saveCIDInfoToCookie = function () {
var c = document.referrer;
var a = [
'https://www.baidu.com/=93436',
'https://m.baidu.com/=93437',
'https://www.sogou.com/=93438',
'https://m.sogou.com/=93439',
'https://m.so.com/=93441',
'https://www.so.com/=93440',
'https://yz.m.sm.cn/=93442',
'https://www.google.com/=93444',
'https://www.google.com.sg/=93443',
'https://cn.bing.com/=93445'
];
if (c) {
var b = c.indexOf('/', 8);
var e = ec.util.cookie.get('cps_id');
if (b == - 1) {
var d = c
} else {
var d = c.substr(0, b + 1)
}
$.each(a, function (f, g) {
if (g.indexOf(d) == 0) {
var h = g.split('=') [1];
ec.util.cookie.set('cps_id', h, {
  expires: 3,
  domain: 'vmall.com'
});
return
}
})
}
};
ec.code.saveCpsInfoToCookie = function () {
var c = ec.code.getCPSInfoFromUrlRegex(location.href, 'cid');
var b = ec.code.getCPSInfoFromUrlRegex(location.href, 'wi');
if ($.trim(c) == '' || c.length < 0 || c.lenght > 11) {
ec.code.saveCIDInfoToCookie();
return
}
var a = /^\d+$/;
if (!a.test(c)) {
return
}
ec.util.cookie.set('cps_wi', null, {
expires: - 1,
domain: 'vmall.com'
});
ec.util.cookie.set('cps_id', c, {
expires: 3,
domain: 'vmall.com'
});
ec.util.cookie.set('cps_direct', '1', {
expires: 1,
domain: 'vmall.com'
});
ec.util.cookie.set('cps_dap_redirect', '1', {
expires: 1,
domain: 'vmall.com'
});
if (b.length > 0 && b.length < 200) {
ec.util.cookie.set('cps_wi', b, {
expires: 3,
domain: 'vmall.com'
})
}
};
ec.code.getCPSInfoFromUrlRegex = function (c, b) {
var d = new RegExp('(^|&)' + b + '=([^&]*)(&|$)', 'i');
var c = window.location.href;
var e;
if (c.indexOf('#') != - 1) {
e = c.substr(c.indexOf('#'))
} else {
e = window.location.search
}
var a = e.substr(1).match(d);
if (a != null) {
return unescape(a[2])
}
return ''
};
ec.code.getCPSInfoFromUrl = function (b, c) {
if (b.indexOf('#') == - 1 || b.indexOf(c + '=') == - 1) {
return ''
}
var a = b.substring(b.indexOf('#') + 1);
var k = a.split('#');
for (var f = 0; f < k.length; f++) {
var m = k[f];
var l = m.split('&');
var h,
g,
d;
for (var e = 0; e < l.length; e++) {
h = l[e].indexOf('=');
if (h == - 1) {
continue
}
g = l[e].substring(0, h);
d = l[e].substring(h + 1);
if (g == c) {
return unescape(d.replace(/\+/g, ' '))
}
}
}
return ''
};
ec.code.addService = function (a) {
$(function () {
if (a.showService) {
var f = window.location.href;
var e = f.indexOf('/product/');
var d = '';
var c = '';
if (e > 0) {
d = f.substring(e + 9, f.length);
if (d.length > 1) {
  var h = d.split('.html', 2);
  if (h.length > 1) {
    c = h[0];
    var i = h[1];
    if (i.indexOf('#') >= 0) {
      var g = i.split('#', 2) [1];
      var b = (g.length > 0) ? (g.split(',', 2) [0] || 0)  : 0;
      if (b != 0) {
        c = c + ',' + b
      }
    }
  }
}
}
$('#tools-nav-service-robotim').attr('href', a.live800Url4Web + '&enterurl=' + encodeURIComponent(window.location.href) + '&k=1&from=06&remark=' + encodeURIComponent(c)).css('display', 'block');
$('#tools-nav-service-robotim-button').attr('href', a.live800Url4Web + '&enterurl=' + encodeURIComponent(window.location.href) + '&k=1&from=06&remark=' + encodeURIComponent(c)).css('display', 'block')
}
if (a.showTools) {
$('#tools-nav-survery').css('display', 'block')
}
if (a.showService || a.showTools) {
$('#tools-nav').css('bottom', '10px').show()
}
})
};
(function () {
ec.code.saveCpsInfoToCookie();
var a,
b = function () {
if (a) {
return a
}
a = _gat._createTracker((ec.debug ? '' : 'UA-28046633-3'), 't2');
return a
};
ec.track = function (e, d) {
d = d || 3;
try {
if (window._gat && window._gat._createTracker) {
if ('[object Array]' == Object.prototype.toString.apply(e)) {
  e = e.join('/')
}
b()._trackPageview(e);
log('Track', e)
} else {
if (d > 0) {
  setTimeout(function () {
    ec.track(e, d - 1)
  }, 1000)
}
}
} catch (f) {
throw f
}
};
ec.trackEvent = function (f, g, e, i, d) {
d = d || 3;
try {
if (window._gat && window._gat._createTracker) {
b()._trackEvent(f, g, e, i);
log('TrackEvent', f + ' : ' + g)
} else {
if (d > 0) {
  setTimeout(function () {
    ec.trackEvent(f, g, e, i, d - 1)
  }, 1000)
}
}
} catch (h) {
throw h
}
}
}) ();
(function () {
var b = ec.util.cookie.get('cps_source'),
a = ec.util.cookie.get('cps_channel'),
c = ec.util.cookie.get('cps_direct');
ec.trackCPS = function (d, e) {
if (b && a) {
ec.track(['/cps/event',
d,
b + '/' + a,
e])
}
};
if (b && a && c) {
ec.ready(function () {
ec.track('/cps/pv/' + b + '/' + a + location.pathname)
})
}
}) ();
ec.track99click = function (b) {
var d;
if (typeof (b) == 'string') {
d = b
} else {
var e = [
],
a;
for (var c in b) {
a = b[c];
e.push(c + '=' + (ec.util.isArray(a) ? a.join(';')  : a))
}
d = e.join('&')
}
ec.track99click._ozuid = ec.account.id;
ec.track99click._ozprm = d
};
ec.pkg('ec.binding');
ec.binding.login = function () {
var a = ec.util.cookie.get('optBanding');
if (a == 0) {
$.ajax({
url: domainMain + '/account/isBindedTelephoneOrEmail.json',
type: 'get',
dataType: 'json',
success: function (b) {
if (!b.isLogin) {
  return false
}
ec.util.cookie.set('optBanding', 1);
if (!b.success) {
  ec.load('ec.box', function () {
    ec.binding.requestUrl = domainMain + '/account/isBindedTelephoneOrEmail.json?t=' + new Date().getTime();
    ec.binding.upCenterUrl = b.upUserCenter;
    ec.Cache.get('ecBindingPhone', function () {
      return new ec.box($('#ec-binding-phone').val(), {
        boxid: 'bindingBox',
        boxclass: 'ol_box_4',
        showButton: false,
        onopen: function (c) {
          ec.ui.loading.hide();
          $('#ec-binding-phone-1').show();
          $('#ec-binding-phone-url-1').attr('href', ec.binding.upCenterUrl);
          c.setPosition()
        }
      })
    }).open()
  })
}
}
})
}
};
ec.binding.cart = {
};
ec.binding.cart.withPhone = function (a) {
ec.binding.callback = a;
if (a) {
ec.ui.loading.show()
}
$.ajax({
url: domainMain + '/account/isBindedPhoneCrossDomain.json?t=' + new Date().getTime(),
async: false,
dataType: 'json',
timeout: 6000,
success: function (b) {
if (!b.isLogin) {
if (a) {
  a()
}
return
}
ec.util.cookie.set('optBanding', 1);
if (!b.success) {
ec.load('ec.box', function () {
  ec.binding.requestUrl = domainMain + '/account/isBindedPhoneCrossDomain.json?t=' + new Date().getTime();
  var c = window.location.href;
  c = c.replace(/\\?isSuccess=0/g, '');
  ec.binding.upCenterUrl = b.upUserCenter + '&redirect_uri=' + c;
  ec.binding.upCenterUrl = encodeURI(ec.binding.upCenterUrl);
  var d = b.state;
  if (null == d) {
    alert('获取服务器数据失败，请刷新重试！');
    return
  }
  if (d == 4) {
    bindBox = new ec.box($('#ec-binding-phone').val(), {
      boxid: 'bindingBox',
      boxclass: 'ol_box_4',
      showButton: false,
      onopen: function (e) {
        ec.ui.loading.hide();
        $('#ec-binding-phone-' + d).show();
        $('#bindEndDate4State4').html(b.upBindEndDate);
        if (d == 1 || d == 4) {
          $('#ec-binding-phone-url-' + d).attr('href', ec.binding.upCenterUrl)
        }
        e.setPosition()
      },
      onclose: function (e) {
        if (a) {
          a()
        }
      }
    });
    bindBox.open()
  } else {
    bindBox = new ec.box($('#ec-binding-phone').val(), {
      boxid: 'bindingBox',
      boxclass: 'ol_box_4',
      showButton: false,
      onopen: function (e) {
        ec.ui.loading.hide();
        $('#ec-binding-phone-' + d).show();
        if (d == 1) {
          $('#ec-binding-phone-url-1').attr('href', ec.binding.upCenterUrl)
        }
        e.setPosition()
      }
    });
    bindBox.open()
  }
})
} else {
if (a) {
  a()
}
}
}
})
};
ec.binding.isBindedMobileOrEnterpriseUser = function (a) {
ec.binding.callback = a;
ec.ui.loading.show();
$.ajax({
url: domainMain + '/account/isBindedTelephoneOrEmail.json',
type: 'get',
dataType: 'json',
success: function (b) {
if (!b.isLogin) {
if (a) {
  a()
}
return
}
if (!b.success) {
ec.load('ec.box', function () {
  ec.binding.requestUrl = domainMain + '/account/isBindedTelephoneOrEmail.json?t=' + new Date().getTime();
  ec.binding.upCenterUrl = b.upUserCenter;
  ec.Cache.get('ecBindingPhone', function () {
    return new ec.box($('#ec-binding-phone').val(), {
      boxid: 'bindingBox',
      boxclass: 'ol_box_4',
      showButton: false,
      onopen: function (c) {
        ec.ui.loading.hide();
        $('#ec-binding-phone-1').show();
        $('#ec-binding-phone-url-1').attr('href', ec.binding.upCenterUrl);
        c.setPosition()
      }
    })
  }).open()
})
} else {
if (a) {
  a()
}
}
}
})
};
ec.binding.closeState4 = function () {
if (null != bindBox) {
bindBox.close()
}
};
ec.binding.showOk = function () {
$('.ec-binding-phone-box').hide();
$('#ec-binding-phone-2').show();
$('#ec-binding-phone-url-2').attr('href', ec.binding.upCenterUrl);
$('#ec-binding-phone-url-3').attr('href', ec.binding.upCenterUrl);
bindBox.setPosition()
};
ec.binding.resetShow = function () {
var b = ec.binding.callback;
var a = {
url: ec.binding.requestUrl,
type: 'get',
async: 'false',
dataType: 'json',
success: function (c) {
if (!c.success) {
$('#ec-binding-phone-2').hide();
$('#ec-binding-phone-3').show();
ec.Cache.get('ecBindingPhone').setPosition()
} else {
ec.Cache.get('ecBindingPhone').close();
if (b) {
  b();
  b = null
}
}
}
};
$.ajax(a)
};
ec.binding.allCount = function () {
var a = ec.util.cookie.get('vmallOrderCountWechat');
if (a == 0) {
$('#li-order-small span').html('小程序订单')
}
if (a > 0) {
$('#li-order-small span').html('小程序订单<em>' + a + '</em>')
}
var b = ec.util.cookie.get('vmallOrderCount');
if (b == 0) {
$('#li-order span').html('我的订单')
} else {
if (b > 0) {
$('#li-order span').html('我的订单<em>(' + b + ')</em>')
} else {
$('#li-order span').html('我的订单<em class=\'hide\'>0</em>');
$.ajax({
type: 'get',
url: domainMain + '/member/orderCount.json?t=' + new Date().getTime(),
dataType: 'json',
async: true,
timeout: 10000,
success: function (d) {
  if (!d.success) {
    return
  }
  var c = parseInt(d.orderCount.unpaidOrderCount) + parseInt(d.orderCount.unreceiptOrderCount);
  c = c ? c : 0;
  var h = $('#li-order span em').text();
  var g = h.substring(1, h.length - 1);
  c = c + parseInt(g);
  $('#li-order span em').textS('(' + c + ')');
  $('#li-order span em').removeClass('hide');
  ec.util.cookie.set('vmallOrderCount', c);
  $('#li-order-small span').html('小程序订单<em class=\'hide\'>0</em>');
  var i = parseInt(d.orderCount.unpaidOrderCountWechat) + parseInt(d.orderCount.unreceiptOrderCountWechat);
  i = i ? i : 0;
  var f = $('#li-order-small span em').text();
  var e = f.substring(1, f.length - 1);
  i = i + parseInt(e);
  $('#li-order-small span em').textS('(' + i + ')');
  if (i < 1) {
    $('#li-order-small span').html('小程序订单')
  }
  $('#li-order-small span em').removeClass('hide');
  ec.util.cookie.set('vmallOrderCountWechat', i)
}
});
$.ajax({
type: 'POST',
url: openApiDomain + '/rms/comment/getNoCommentPrdCount.json?t=' + new Date().getTime(),
dataType: 'json',
timeout: 10000,
async: true,
data: JSON.stringify({
  tab: 'nocomment'
}),
beforeSend: function (c) {
  c.withCredentials = true
},
success: function (c) {
  if (c.resultCode != 0) {
    return
  }
  var d = parseInt(c.data.count);
  d = d ? d : 0;
  var f = $('#li-order span em').text();
  var e = f.substring(1, f.length - 1);
  d = d + parseInt(e);
  if (d > 0) {
    $('#li-order span em').textS('(' + d + ')');
    $('#li-order span em').removeClass('hide')
  } else {
    $('#li-order span').text('我的订单')
  }
  ec.util.cookie.set('vmallOrderCount', d)
}
})
}
}
};
ec.binding.getUnReadMessageCount = function () {
var a = ec.util.cookie.get('vmallMyCenterMsg');
if (a != null && a > 0) {
if (a < 100) {
$('#li-msg em').textS('(' + a + ')')
} else {
if (a > 99) {
$('#li-msg em').textS('(99+)')
}
}
} else {
$.ajax({
url: '/member/msg/unRead.json',
timeout: 10000,
dataType: 'json',
success: function (c) {
if (!c.success) {
  return
}
var b = c.totalNoReadCount;
if (b > 0 && b < 100) {
  $('#li-msg em').textS('(' + b + ')');
  $('#top-newMsgCount').html(b || 0)
} else {
  if (b > 99) {
    $('#li-msg em').textS('(99+)')
  }
}
ec.util.cookie.set('vmallMyCenterMsg', b)
}
})
}
};
bindCartResult = function (c) {
var a = window.location.href;
a = a.replace(/\?isSuccess=0/g, '').replace(/&isSuccess=0/g, '');
var b = upBindPhoneAddr.replace(/&amp;/g, '&');
ec.load('ec.box', function () {
bindBox = new ec.box($('#' + c).val(), {
boxid: 'bindingBox',
boxclass: 'ol_box_4',
showButton: false,
onopen: function (e) {
ec.ui.loading.hide();
$('#ec-binding-phone-1').hide();
$('#ec-binding-phone-2').hide();
$('#ec-binding-phone-3').hide();
$('#ec-binding-phone-4').hide();
$('#ec-binding-phone-5').show();
$('#ec-binding-phone-url-5').attr('href', b + '&redirect_uri=' + a);
var d = domainMain + '/member/cartBind/result/logout?url=' + $('#ec-binding-phone-reLogin-5').attr('href') + '?url=' + a;
$('#ec-binding-phone-reLogin-5').attr('href', encodeURI(d));
e.setPosition()
}
});
bindBox.open()
})
};
getUrlParaMap4CartBinding = function () {
var c = decodeURIComponent(window.location.search);
var a = {
};
if (c) {
var d;
c = c.substring(1).split('&');
for (var b = 0; b < c.length; b++) {
d = c[b].split('=');
if (d.length == 2) {
a[d[0]] = d[1].escapeHTML4CartBinding()
}
}
}
return a
};
String.prototype.escapeHTML4CartBinding = function () {
return this.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;')
};
ec.ready(function () {
ec.code.addAnalytics({
baidu: true
});
ec.code.addAnalytics({
dmp: true
});
ec.binding.login();
if ('/member' === location.pathname || location.pathname.startsWith('/member/') || location.pathname.startsWith('/authmember/')) {
if ('/member' !== location.pathname && '/member/order' !== location.pathname) {
ec.binding.allCount()
}
if ('/member/msg' !== location.pathname) {
ec.binding.getUnReadMessageCount()
}
}
});
window.Swiper = function (aa, ab) {
function ac(ae, af) {
return document.querySelectorAll ? (af || document).querySelectorAll(ae)  : jQuery(ae, af)
}
function ad(ae) {
return '[object Array]' === Object.prototype.toString.apply(ae) ? !0 : !1
}
function y() {
var ae = e - h;
return ab.freeMode && (ae = e - h),
ab.slidesPerView > b.slides.length && !ab.centeredSlides && (ae = 0),
0 > ae && (ae = 0),
ae
}
function z() {
function ae(am) {
var aj,
ak,
al = function () {
'undefined' != typeof b && null !== b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, b.imagesLoaded === b.imagesToLoad.length && (b.reInit(), ab.onImagesReady && b.fireCallback(ab.onImagesReady, b)))
};
am.complete ? al()  : (ak = am.currentSrc || am.getAttribute('src'), ak ? (aj = new Image, aj.onload = al, aj.onerror = al, aj.src = ak)  : al())
}
var af = b.h.addEventListener,
ag = 'wrapper' === ab.eventTarget ? b.wrapper : b.container;
if (b.browser.ie10 || b.browser.ie11 ? (af(ag, b.touchEvents.touchStart, J), af(document, b.touchEvents.touchMove, K), af(document, b.touchEvents.touchEnd, L))  : (b.support.touch && (af(ag, 'touchstart', J), af(ag, 'touchmove', K), af(ag, 'touchend', L)), ab.simulateTouch && (af(ag, 'mousedown', J), af(document, 'mousemove', K), af(document, 'mouseup', L))), ab.autoResize && af(window, 'resize', b.resizeFix), A(), b._wheelEvent = !1, ab.mousewheelControl) {
if (void 0 !== document.onmousewheel && (b._wheelEvent = 'mousewheel'), !b._wheelEvent) {
try {
  new WheelEvent('wheel'),
  b._wheelEvent = 'wheel'
} catch (ah) {
}
}
b._wheelEvent || (b._wheelEvent = 'DOMMouseScroll'),
b._wheelEvent && af(b.container, b._wheelEvent, D)
}
if (ab.keyboardControl && af(document, 'keydown', C), ab.updateOnImagesReady) {
b.imagesToLoad = ac('img', b.container);
for (var ai = 0; ai < b.imagesToLoad.length; ai++) {
ae(b.imagesToLoad[ai])
}
}
}
function A() {
var ae,
af = b.h.addEventListener;
if (ab.preventLinks) {
var ag = ac('a', b.container);
for (ae = 0; ae < ag.length; ae++) {
af(ag[ae], 'click', H)
}
}
if (ab.releaseFormElements) {
var ah = ac('input, textarea, select', b.container);
for (ae = 0; ae < ah.length; ae++) {
af(ah[ae], b.touchEvents.touchStart, I, !0),
b.support.touch && ab.simulateTouch && af(ah[ae], 'mousedown', I, !0)
}
}
if (ab.onSlideClick) {
for (ae = 0; ae < b.slides.length; ae++) {
af(b.slides[ae], 'click', E)
}
}
if (ab.onSlideTouch) {
for (ae = 0; ae < b.slides.length; ae++) {
af(b.slides[ae], b.touchEvents.touchStart, F)
}
}
}
function B() {
var ae,
af = b.h.removeEventListener;
if (ab.onSlideClick) {
for (ae = 0; ae < b.slides.length; ae++) {
af(b.slides[ae], 'click', E)
}
}
if (ab.onSlideTouch) {
for (ae = 0; ae < b.slides.length; ae++) {
af(b.slides[ae], b.touchEvents.touchStart, F)
}
}
if (ab.releaseFormElements) {
var ag = ac('input, textarea, select', b.container);
for (ae = 0; ae < ag.length; ae++) {
af(ag[ae], b.touchEvents.touchStart, I, !0),
b.support.touch && ab.simulateTouch && af(ag[ae], 'mousedown', I, !0)
}
}
if (ab.preventLinks) {
var ah = ac('a', b.container);
for (ae = 0; ae < ah.length; ae++) {
af(ah[ae], 'click', H)
}
}
}
function C(al) {
var am = al.keyCode || al.charCode;
if (!(al.shiftKey || al.altKey || al.ctrlKey || al.metaKey)) {
if (37 === am || 39 === am || 38 === am || 40 === am) {
for (var an = !1, ao = b.h.getOffset(b.container), ae = b.h.windowScroll().left, af = b.h.windowScroll().top, ag = b.h.windowWidth(), ah = b.h.windowHeight(), ai = [
  [ao.left,
  ao.top],
  [
    ao.left + b.width,
    ao.top
  ],
  [
    ao.left,
    ao.top + b.height
  ],
  [
    ao.left + b.width,
    ao.top + b.height
  ]
], aj = 0; aj < ai.length; aj++) {
  var ak = ai[aj];
  ak[0] >= ae && ak[0] <= ae + ag && ak[1] >= af && ak[1] <= af + ah && (an = !0)
}
if (!an) {
  return
}
}
l ? ((37 === am || 39 === am) && (al.preventDefault ? al.preventDefault()  : al.returnValue = !1), 39 === am && b.swipeNext(), 37 === am && b.swipePrev())  : ((38 === am || 40 === am) && (al.preventDefault ? al.preventDefault()  : al.returnValue = !1), 40 === am && b.swipeNext(), 38 === am && b.swipePrev())
}
}
function D(ae) {
var af = b._wheelEvent,
ag = 0;
if (ae.detail) {
ag = - ae.detail
} else {
if ('mousewheel' === af) {
if (ab.mousewheelControlForceToAxis) {
  if (l) {
    if (!(Math.abs(ae.wheelDeltaX) > Math.abs(ae.wheelDeltaY))) {
      return
    }
    ag = ae.wheelDeltaX
  } else {
    if (!(Math.abs(ae.wheelDeltaY) > Math.abs(ae.wheelDeltaX))) {
      return
    }
    ag = ae.wheelDeltaY
  }
} else {
  ag = ae.wheelDelta
}
} else {
if ('DOMMouseScroll' === af) {
  ag = - ae.detail
} else {
  if ('wheel' === af) {
    if (ab.mousewheelControlForceToAxis) {
      if (l) {
        if (!(Math.abs(ae.deltaX) > Math.abs(ae.deltaY))) {
          return
        }
        ag = - ae.deltaX
      } else {
        if (!(Math.abs(ae.deltaY) > Math.abs(ae.deltaX))) {
          return
        }
        ag = - ae.deltaY
      }
    } else {
      ag = Math.abs(ae.deltaX) > Math.abs(ae.deltaY) ? - ae.deltaX : - ae.deltaY
    }
  }
}
}
}
if (ab.freeMode) {
var ah = b.getWrapperTranslate() + ag;
if (ah > 0 && (ah = 0), ah < - y() && (ah = - y()), b.setWrapperTransition(0), b.setWrapperTranslate(ah), b.updateActiveSlide(ah), 0 === ah || ah === - y()) {
return
}
} else {
(new Date).getTime() - t > 60 && (0 > ag ? b.swipeNext()  : b.swipePrev()),
t = (new Date).getTime()
}
return ab.autoplay && b.stopAutoplay(!0),
ae.preventDefault ? ae.preventDefault()  : ae.returnValue = !1,
!1
}
function E(ae) {
b.allowSlideClick && (G(ae), b.fireCallback(ab.onSlideClick, b, ae))
}
function F(ae) {
G(ae),
b.fireCallback(ab.onSlideTouch, b, ae)
}
function G(ae) {
if (ae.currentTarget) {
b.clickedSlide = ae.currentTarget
} else {
var af = ae.srcElement;
do {
if (af.className.indexOf(ab.slideClass) > - 1) {
  break
}
af = af.parentNode
} while (af);
b.clickedSlide = af
}
b.clickedSlideIndex = b.slides.indexOf(b.clickedSlide),
b.clickedSlideLoopIndex = b.clickedSlideIndex - (b.loopedSlides || 0)
}
function H(ae) {
return b.allowLinks ? void 0 : (ae.preventDefault ? ae.preventDefault()  : ae.returnValue = !1, ab.preventLinksPropagation && 'stopPropagation' in ae && ae.stopPropagation(), !1)
}
function I(ae) {
return ae.stopPropagation ? ae.stopPropagation()  : ae.returnValue = !1,
!1
}
function J(ae) {
if (ab.preventLinks && (b.allowLinks = !0), b.isTouched || ab.onlyExternal) {
return !1
}
var af = ae.target || ae.srcElement;
document.activeElement && document.activeElement !== document.body && document.activeElement !== af && document.activeElement.blur();
var ag = 'input select textarea'.split(' ');
if (ab.noSwiping && af && N(af)) {
return !1
}
if (Y = !1, b.isTouched = !0, U = 'touchstart' === ae.type, !U && 'which' in ae && 3 === ae.which) {
return b.isTouched = !1,
!1
}
if (!U || 1 === ae.targetTouches.length) {
b.callPlugins('onTouchStartBegin'),
!U && !b.isAndroid && ag.indexOf(af.tagName.toLowerCase()) < 0 && (ae.preventDefault ? ae.preventDefault()  : ae.returnValue = !1);
var ah = U ? ae.targetTouches[0].pageX : ae.pageX || ae.clientX,
ai = U ? ae.targetTouches[0].pageY : ae.pageY || ae.clientY;
b.touches.startX = b.touches.currentX = ah,
b.touches.startY = b.touches.currentY = ai,
b.touches.start = b.touches.current = l ? ah : ai,
b.setWrapperTransition(0),
b.positions.start = b.positions.current = b.getWrapperTranslate(),
b.setWrapperTranslate(b.positions.start),
b.times.start = (new Date).getTime(),
g = void 0,
ab.moveStartThreshold > 0 && (v = !1),
ab.onTouchStart && b.fireCallback(ab.onTouchStart, b, ae),
b.callPlugins('onTouchStartEnd')
}
}
function K(af) {
if (b.isTouched && !ab.onlyExternal && (!U || 'mousemove' !== af.type)) {
var ak = U ? af.targetTouches[0].pageX : af.pageX || af.clientX,
ae = U ? af.targetTouches[0].pageY : af.pageY || af.clientY;
if ('undefined' == typeof g && l && (g = !!(g || Math.abs(ae - b.touches.startY) > Math.abs(ak - b.touches.startX))), 'undefined' != typeof g || l || (g = !!(g || Math.abs(ae - b.touches.startY) < Math.abs(ak - b.touches.startX))), g) {
return void (b.isTouched = !1)
}
if (l) {
if (!ab.swipeToNext && ak < b.touches.startX || !ab.swipeToPrev && ak > b.touches.startX) {
  return
}
} else {
if (!ab.swipeToNext && ae < b.touches.startY || !ab.swipeToPrev && ae > b.touches.startY) {
  return
}
}
if (af.assignedToSwiper) {
return void (b.isTouched = !1)
}
if (af.assignedToSwiper = !0, ab.preventLinks && (b.allowLinks = !1), ab.onSlideClick && (b.allowSlideClick = !1), ab.autoplay && b.stopAutoplay(!0), !U || 1 === af.touches.length) {
if (b.isMoved || (b.callPlugins('onTouchMoveStart'), ab.loop && (b.fixLoop(), b.positions.start = b.getWrapperTranslate()), ab.onTouchMoveStart && b.fireCallback(ab.onTouchMoveStart, b)), b.isMoved = !0, af.preventDefault ? af.preventDefault()  : af.returnValue = !1, b.touches.current = l ? ak : ae, b.positions.current = (b.touches.current - b.touches.start) * ab.touchRatio + b.positions.start, b.positions.current > 0 && ab.onResistanceBefore && b.fireCallback(ab.onResistanceBefore, b, b.positions.current), b.positions.current < - y() && ab.onResistanceAfter && b.fireCallback(ab.onResistanceAfter, b, Math.abs(b.positions.current + y())), ab.resistance && '100%' !== ab.resistance) {
  var ag;
  if (b.positions.current > 0 && (ag = 1 - b.positions.current / h / 2, b.positions.current = 0.5 > ag ? h / 2 : b.positions.current * ag), b.positions.current < - y()) {
    var ah = (b.touches.current - b.touches.start) * ab.touchRatio + (y() + b.positions.start);
    ag = (h + ah) / h;
    var ai = b.positions.current - ah * (1 - ag) / 2,
    aj = - y() - h / 2;
    b.positions.current = aj > ai || 0 >= ag ? aj : ai
  }
}
if (ab.resistance && '100%' === ab.resistance && (b.positions.current > 0 && (!ab.freeMode || ab.freeModeFluid) && (b.positions.current = 0), b.positions.current < - y() && (!ab.freeMode || ab.freeModeFluid) && (b.positions.current = - y())), !ab.followFinger) {
  return
}
if (ab.moveStartThreshold) {
  if (Math.abs(b.touches.current - b.touches.start) > ab.moveStartThreshold || v) {
    if (!v) {
      return v = !0,
      void (b.touches.start = b.touches.current)
    }
    b.setWrapperTranslate(b.positions.current)
  } else {
    b.positions.current = b.positions.start
  }
} else {
  b.setWrapperTranslate(b.positions.current)
}
return (ab.freeMode || ab.watchActiveIndex) && b.updateActiveSlide(b.positions.current),
ab.grabCursor && (b.container.style.cursor = 'move', b.container.style.cursor = 'grabbing', b.container.style.cursor = '-moz-grabbin', b.container.style.cursor = '-webkit-grabbing'),
w || (w = b.touches.current),
x || (x = (new Date).getTime()),
b.velocity = (b.touches.current - w) / ((new Date).getTime() - x) / 2,
Math.abs(b.touches.current - w) < 2 && (b.velocity = 0),
w = b.touches.current,
x = (new Date).getTime(),
b.callPlugins('onTouchMoveEnd'),
ab.onTouchMove && b.fireCallback(ab.onTouchMove, b, af),
!1
}
}
}
function L(ar) {
if (g && b.swipeReset(), !ab.onlyExternal && b.isTouched) {
b.isTouched = !1,
ab.grabCursor && (b.container.style.cursor = 'move', b.container.style.cursor = 'grab', b.container.style.cursor = '-moz-grab', b.container.style.cursor = '-webkit-grab'),
b.positions.current || 0 === b.positions.current || (b.positions.current = b.positions.start),
ab.followFinger && b.setWrapperTranslate(b.positions.current),
b.times.end = (new Date).getTime(),
b.touches.diff = b.touches.current - b.touches.start,
b.touches.abs = Math.abs(b.touches.diff),
b.positions.diff = b.positions.current - b.positions.start,
b.positions.abs = Math.abs(b.positions.diff);
var au = b.positions.diff,
ae = b.positions.abs,
af = b.times.end - b.times.start;
5 > ae && 300 > af && b.allowLinks === !1 && (ab.freeMode || 0 === ae || b.swipeReset(), ab.preventLinks && (b.allowLinks = !0), ab.onSlideClick && (b.allowSlideClick = !0)),
setTimeout(function () {
'undefined' != typeof b && null !== b && (ab.preventLinks && (b.allowLinks = !0), ab.onSlideClick && (b.allowSlideClick = !0))
}, 100);
var ag = y();
if (!b.isMoved && ab.freeMode) {
return b.isMoved = !1,
ab.onTouchEnd && b.fireCallback(ab.onTouchEnd, b, ar),
void b.callPlugins('onTouchEnd')
}
if (!b.isMoved || b.positions.current > 0 || b.positions.current < - ag) {
return b.swipeReset(),
ab.onTouchEnd && b.fireCallback(ab.onTouchEnd, b, ar),
void b.callPlugins('onTouchEnd')
}
if (b.isMoved = !1, ab.freeMode) {
if (ab.freeModeFluid) {
  var ah,
  aj = 1000 * ab.momentumRatio,
  al = b.velocity * aj,
  am = b.positions.current + al,
  an = !1,
  ao = 20 * Math.abs(b.velocity) * ab.momentumBounceRatio;
  - ag > am && (ab.momentumBounce && b.support.transitions ? ( - ao > am + ag && (am = - ag - ao), ah = - ag, an = !0, Y = !0)  : am = - ag),
  am > 0 && (ab.momentumBounce && b.support.transitions ? (am > ao && (am = ao), ah = 0, an = !0, Y = !0)  : am = 0),
  0 !== b.velocity && (aj = Math.abs((am - b.positions.current) / b.velocity)),
  b.setWrapperTranslate(am),
  b.setWrapperTransition(aj),
  ab.momentumBounce && an && b.wrapperTransitionEnd(function () {
    Y && (ab.onMomentumBounce && b.fireCallback(ab.onMomentumBounce, b), b.callPlugins('onMomentumBounce'), b.setWrapperTranslate(ah), b.setWrapperTransition(300))
  }),
  b.updateActiveSlide(am)
}
return (!ab.freeModeFluid || af >= 300) && b.updateActiveSlide(b.positions.current),
ab.onTouchEnd && b.fireCallback(ab.onTouchEnd, b, ar),
void b.callPlugins('onTouchEnd')
}
f = 0 > au ? 'toNext' : 'toPrev',
'toNext' === f && 300 >= af && (30 > ae || !ab.shortSwipes ? b.swipeReset()  : b.swipeNext(!0, !0)),
'toPrev' === f && 300 >= af && (30 > ae || !ab.shortSwipes ? b.swipeReset()  : b.swipePrev(!0, !0));
var ap = 0;
if ('auto' === ab.slidesPerView) {
for (var aq, at = Math.abs(b.getWrapperTranslate()), ai = 0, ak = 0; ak < b.slides.length; ak++) {
  if (aq = l ? b.slides[ak].getWidth(!0, ab.roundLengths)  : b.slides[ak].getHeight(!0, ab.roundLengths), ai += aq, ai > at) {
    ap = aq;
    break
  }
}
ap > h && (ap = h)
} else {
ap = d * ab.slidesPerView
}
'toNext' === f && af > 300 && (ae >= ap * ab.longSwipesRatio ? b.swipeNext(!0, !0)  : b.swipeReset()),
'toPrev' === f && af > 300 && (ae >= ap * ab.longSwipesRatio ? b.swipePrev(!0, !0)  : b.swipeReset()),
ab.onTouchEnd && b.fireCallback(ab.onTouchEnd, b, ar),
b.callPlugins('onTouchEnd')
}
}
function M(ae, af) {
return ae && ae.getAttribute('class') && ae.getAttribute('class').indexOf(af) > - 1
}
function N(ae) {
var af = !1;
do {
M(ae, ab.noSwipingClass) && (af = !0),
ae = ae.parentElement
} while (!af && ae.parentElement && !M(ae, ab.wrapperClass));
return !af && M(ae, ab.wrapperClass) && M(ae, ab.noSwipingClass) && (af = !0),
af
}
function O(ag, ah) {
var ae,
af = document.createElement('div');
return af.innerHTML = ah,
ae = af.firstChild,
ae.className += ' ' + ag,
ae.outerHTML
}
function P(am, an, ae) {
function af() {
var ap = + new Date,
ao = ap - ah;
ai += aj * ao / (1000 / 60),
al = 'toNext' === ak ? ai > am : am > ai,
al ? (b.setWrapperTranslate(Math.ceil(ai)), b._DOMAnimating = !0, window.setTimeout(function () {
af()
}, 1000 / 60))  : (ab.onSlideChangeEnd && ('to' === an ? ae.runCallbacks === !0 && b.fireCallback(ab.onSlideChangeEnd, b, ak)  : b.fireCallback(ab.onSlideChangeEnd, b, ak)), b.setWrapperTranslate(am), b._DOMAnimating = !1)
}
var ag = 'to' === an && ae.speed >= 0 ? ae.speed : ab.speed,
ah = + new Date;
if (b.support.transitions || !ab.DOMAnimation) {
b.setWrapperTranslate(am),
b.setWrapperTransition(ag)
} else {
var ai = b.getWrapperTranslate(),
aj = Math.ceil((am - ai) / ag * (1000 / 60)),
ak = ai > am ? 'toNext' : 'toPrev',
al = 'toNext' === ak ? ai > am : am > ai;
if (b._DOMAnimating) {
return
}
af()
}
b.updateActiveSlide(am),
ab.onSlideNext && 'next' === an && ae.runCallbacks === !0 && b.fireCallback(ab.onSlideNext, b, am),
ab.onSlidePrev && 'prev' === an && ae.runCallbacks === !0 && b.fireCallback(ab.onSlidePrev, b, am),
ab.onSlideReset && 'reset' === an && ae.runCallbacks === !0 && b.fireCallback(ab.onSlideReset, b, am),
'next' !== an && 'prev' !== an && 'to' !== an || ae.runCallbacks !== !0 || Q(an)
}
function Q(ae) {
if (b.callPlugins('onSlideChangeStart'), ab.onSlideChangeStart) {
if (ab.queueStartCallbacks && b.support.transitions) {
if (b._queueStartCallbacks) {
  return
}
b._queueStartCallbacks = !0,
b.fireCallback(ab.onSlideChangeStart, b, ae),
b.wrapperTransitionEnd(function () {
  b._queueStartCallbacks = !1
})
} else {
b.fireCallback(ab.onSlideChangeStart, b, ae)
}
}
if (ab.onSlideChangeEnd) {
if (b.support.transitions) {
if (ab.queueEndCallbacks) {
  if (b._queueEndCallbacks) {
    return
  }
  b._queueEndCallbacks = !0,
  b.wrapperTransitionEnd(function (af) {
    b.fireCallback(ab.onSlideChangeEnd, af, ae)
  })
} else {
  b.wrapperTransitionEnd(function (af) {
    b.fireCallback(ab.onSlideChangeEnd, af, ae)
  })
}
} else {
ab.DOMAnimation || setTimeout(function () {
  b.fireCallback(ab.onSlideChangeEnd, b, ae)
}, 10)
}
}
}
function R() {
var ae = b.paginationButtons;
if (ae) {
for (var af = 0; af < ae.length; af++) {
b.h.removeEventListener(ae[af], 'click', T)
}
}
}
function S() {
var ae = b.paginationButtons;
if (ae) {
for (var af = 0; af < ae.length; af++) {
b.h.addEventListener(ae[af], 'click', T)
}
}
}
function T(ae) {
for (var af, ag = ae.target || ae.srcElement, ah = b.paginationButtons, ai = 0; ai < ah.length; ai++) {
ag === ah[ai] && (af = ai)
}
ab.autoplay && b.stopAutoplay(!0),
b.swipeTo(af)
}
function V() {
W = setTimeout(function () {
ab.loop ? (b.fixLoop(), b.swipeNext(!0, !0))  : b.swipeNext(!0, !0) || (ab.autoplayStopOnLast ? (clearTimeout(W), W = void 0)  : b.swipeTo(0)),
b.wrapperTransitionEnd(function () {
'undefined' != typeof W && V()
})
}, ab.autoplay)
}
function X() {
b.calcSlides(),
ab.loader.slides.length > 0 && 0 === b.slides.length && b.loadSlides(),
ab.loop && b.createLoop(),
b.init(),
z(),
ab.pagination && b.createPagination(!0),
ab.loop || ab.initialSlide > 0 ? b.swipeTo(ab.initialSlide, 0, !1)  : b.updateActiveSlide(0),
ab.autoplay && b.startAutoplay(),
b.centerIndex = b.activeIndex,
ab.onSwiperCreated && b.fireCallback(ab.onSwiperCreated, b),
b.callPlugins('onSwiperCreated')
}
if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
var a = HTMLElement.prototype;
a.__defineGetter__ && a.__defineGetter__('outerHTML', function () {
return (new XMLSerializer).serializeToString(this)
})
}
if (window.getComputedStyle || (window.getComputedStyle = function (ae) {
return this.el = ae,
this.getPropertyValue = function (af) {
var ag = /(\-([a-z]){1})/g;
return 'float' === af && (af = 'styleFloat'),
ag.test(af) && (af = af.replace(ag, function () {
return arguments[2].toUpperCase()
})),
ae.currentStyle[af] ? ae.currentStyle[af] : null
},
this
}), Array.prototype.indexOf || (Array.prototype.indexOf = function (ag, ah) {
for (var ae = ah || 0, af = this.length; af > ae; ae++) {
if (this[ae] === ag) {
return ae
}
}
return - 1
}), (document.querySelectorAll || window.jQuery) && 'undefined' != typeof aa && (aa.nodeType || 0 !== ac(aa).length)) {
var b = this;
b.touches = {
start: 0,
startX: 0,
startY: 0,
current: 0,
currentX: 0,
currentY: 0,
diff: 0,
abs: 0
},
b.positions = {
start: 0,
abs: 0,
diff: 0,
current: 0
},
b.times = {
start: 0,
end: 0
},
b.id = (new Date).getTime(),
b.container = aa.nodeType ? aa : ac(aa) [0],
b.isTouched = !1,
b.isMoved = !1,
b.activeIndex = 0,
b.centerIndex = 0,
b.activeLoaderIndex = 0,
b.activeLoopIndex = 0,
b.previousIndex = null,
b.velocity = 0,
b.snapGrid = [
],
b.slidesGrid = [
],
b.imagesToLoad = [
],
b.imagesLoaded = 0,
b.wrapperLeft = 0,
b.wrapperRight = 0,
b.wrapperTop = 0,
b.wrapperBottom = 0,
b.isAndroid = navigator.userAgent.toLowerCase().indexOf('android') >= 0;
var c,
d,
e,
f,
g,
h,
i = {
eventTarget: 'wrapper',
mode: 'horizontal',
touchRatio: 1,
speed: 300,
freeMode: !1,
freeModeFluid: !1,
momentumRatio: 1,
momentumBounce: !0,
momentumBounceRatio: 1,
slidesPerView: 1,
slidesPerGroup: 1,
slidesPerViewFit: !0,
simulateTouch: !0,
followFinger: !0,
shortSwipes: !0,
longSwipesRatio: 0.5,
moveStartThreshold: !1,
onlyExternal: !1,
createPagination: !0,
pagination: !1,
paginationElement: 'span',
paginationClickable: !1,
paginationAsRange: !0,
resistance: !0,
scrollContainer: !1,
preventLinks: !0,
preventLinksPropagation: !1,
noSwiping: !1,
noSwipingClass: 'swiper-no-swiping',
initialSlide: 0,
keyboardControl: !1,
mousewheelControl: !1,
mousewheelControlForceToAxis: !1,
useCSS3Transforms: !0,
autoplay: !1,
autoplayDisableOnInteraction: !0,
autoplayStopOnLast: !1,
loop: !1,
loopAdditionalSlides: 0,
roundLengths: !1,
calculateHeight: !1,
cssWidthAndHeight: !1,
updateOnImagesReady: !0,
releaseFormElements: !0,
watchActiveIndex: !1,
visibilityFullFit: !1,
offsetPxBefore: 0,
offsetPxAfter: 0,
offsetSlidesBefore: 0,
offsetSlidesAfter: 0,
centeredSlides: !1,
queueStartCallbacks: !1,
queueEndCallbacks: !1,
autoResize: !0,
resizeReInit: !1,
DOMAnimation: !0,
loader: {
slides: [
],
slidesHTMLType: 'inner',
surroundGroups: 1,
logic: 'reload',
loadAllSlides: !1
},
swipeToPrev: !0,
swipeToNext: !0,
slideElement: 'div',
slideClass: 'swiper-slide',
slideActiveClass: 'swiper-slide-active',
slideVisibleClass: 'swiper-slide-visible',
slideDuplicateClass: 'swiper-slide-duplicate',
wrapperClass: 'swiper-wrapper',
paginationElementClass: 'swiper-pagination-switch',
paginationActiveClass: 'swiper-active-switch',
paginationVisibleClass: 'swiper-visible-switch',
btnPrefix: 'swiper-button'
};
ab = ab || {
};
for (var j in i) {
if (j in ab && 'object' == typeof ab[j]) {
for (var k in i[j]) {
  k in ab[j] || (ab[j][k] = i[j][k])
}
} else {
j in ab || (ab[j] = i[j])
}
}
b.params = ab,
ab.scrollContainer && (ab.freeMode = !0, ab.freeModeFluid = !0),
ab.loop && (ab.resistance = '100%');
var l = 'horizontal' === ab.mode,
m = [
'mousedown',
'mousemove',
'mouseup'
];
b.browser.ie10 && (m = [
'MSPointerDown',
'MSPointerMove',
'MSPointerUp'
]),
b.browser.ie11 && (m = [
'pointerdown',
'pointermove',
'pointerup'
]),
b.touchEvents = {
touchStart: b.support.touch || !ab.simulateTouch ? 'touchstart' : m[0],
touchMove: b.support.touch || !ab.simulateTouch ? 'touchmove' : m[1],
touchEnd: b.support.touch || !ab.simulateTouch ? 'touchend' : m[2]
};
for (var n = b.container.childNodes.length - 1; n >= 0; n--) {
if (b.container.childNodes[n].className) {
for (var o = b.container.childNodes[n].className.split(/\s+/), p = 0; p < o.length; p++) {
  o[p] === ab.wrapperClass && (c = b.container.childNodes[n])
}
}
}
b.wrapper = c,
b._extendSwiperSlide = function (ae) {
return ae.append = function () {
return ab.loop ? ae.insertAfter(b.slides.length - b.loopedSlides)  : (b.wrapper.appendChild(ae), b.reInit()),
ae
},
ae.prepend = function () {
return ab.loop ? (b.wrapper.insertBefore(ae, b.slides[b.loopedSlides]), b.removeLoopedSlides(), b.calcSlides(), b.createLoop())  : b.wrapper.insertBefore(ae, b.wrapper.firstChild),
b.reInit(),
ae
},
ae.insertAfter = function (ag) {
if ('undefined' == typeof ag) {
  return !1
}
var af;
return ab.loop ? (af = b.slides[ag + 1 + b.loopedSlides], af ? b.wrapper.insertBefore(ae, af)  : b.wrapper.appendChild(ae), b.removeLoopedSlides(), b.calcSlides(), b.createLoop())  : (af = b.slides[ag + 1], b.wrapper.insertBefore(ae, af)),
b.reInit(),
ae
},
ae.clone = function () {
return b._extendSwiperSlide(ae.cloneNode(!0))
},
ae.remove = function () {
b.wrapper.removeChild(ae),
b.reInit()
},
ae.html = function (af) {
return 'undefined' == typeof af ? ae.innerHTML : (ae.innerHTML = af, ae)
},
ae.index = function () {
for (var af, ag = b.slides.length - 1; ag >= 0; ag--) {
  ae === b.slides[ag] && (af = ag)
}
return af
},
ae.isActive = function () {
return ae.index() === b.activeIndex ? !0 : !1
},
ae.swiperSlideDataStorage || (ae.swiperSlideDataStorage = {
}),
ae.getData = function (af) {
return ae.swiperSlideDataStorage[af]
},
ae.setData = function (af, ag) {
return ae.swiperSlideDataStorage[af] = ag,
ae
},
ae.data = function (af, ag) {
return 'undefined' == typeof ag ? ae.getAttribute('data-' + af)  : (ae.setAttribute('data-' + af, ag), ae)
},
ae.getWidth = function (af, ag) {
return b.h.getWidth(ae, af, ag)
},
ae.getHeight = function (af, ag) {
return b.h.getHeight(ae, af, ag)
},
ae.getOffset = function () {
return b.h.getOffset(ae)
},
ae
},
b.calcSlides = function (ae) {
var af = b.slides ? b.slides.length : !1;
b.slides = [
],
b.displaySlides = [
];
for (var ag = 0; ag < b.wrapper.childNodes.length; ag++) {
if (b.wrapper.childNodes[ag].className) {
  for (var ah = b.wrapper.childNodes[ag].className, ai = ah.split(/\s+/), aj = 0; aj < ai.length; aj++) {
    ai[aj] === ab.slideClass && b.slides.push(b.wrapper.childNodes[ag])
  }
}
}
for (ag = b.slides.length - 1; ag >= 0; ag--) {
b._extendSwiperSlide(b.slides[ag])
}
af !== !1 && (af !== b.slides.length || ae) && (B(), A(), b.updateActiveSlide(), b.params.pagination && b.createPagination(), b.callPlugins('numberOfSlidesChanged'))
},
b.createSlide = function (ae, af, ag) {
af = af || b.params.slideClass,
ag = ag || ab.slideElement;
var ah = document.createElement(ag);
return ah.innerHTML = ae || '',
ah.className = af,
b._extendSwiperSlide(ah)
},
b.appendSlide = function (af, ag, ae) {
return af ? af.nodeType ? b._extendSwiperSlide(af).append()  : b.createSlide(af, ag, ae).append()  : void 0
},
b.prependSlide = function (af, ag, ae) {
return af ? af.nodeType ? b._extendSwiperSlide(af).prepend()  : b.createSlide(af, ag, ae).prepend()  : void 0
},
b.insertSlideAfter = function (ag, ah, ae, af) {
return 'undefined' == typeof ag ? !1 : ah.nodeType ? b._extendSwiperSlide(ah).insertAfter(ag)  : b.createSlide(ah, ae, af).insertAfter(ag)
},
b.removeSlide = function (ae) {
if (b.slides[ae]) {
if (ab.loop) {
  if (!b.slides[ae + b.loopedSlides]) {
    return !1
  }
  b.slides[ae + b.loopedSlides].remove(),
  b.removeLoopedSlides(),
  b.calcSlides(),
  b.createLoop()
} else {
  b.slides[ae].remove()
}
return !0
}
return !1
},
b.removeLastSlide = function () {
return b.slides.length > 0 ? (ab.loop ? (b.slides[b.slides.length - 1 - b.loopedSlides].remove(), b.removeLoopedSlides(), b.calcSlides(), b.createLoop())  : b.slides[b.slides.length - 1].remove(), !0)  : !1
},
b.removeAllSlides = function () {
for (var ae = b.slides.length, af = b.slides.length - 1; af >= 0; af--) {
b.slides[af].remove(),
af === ae - 1 && b.setWrapperTranslate(0)
}
},
b.getSlide = function (ae) {
return b.slides[ae]
},
b.getLastSlide = function () {
return b.slides[b.slides.length - 1]
},
b.getFirstSlide = function () {
return b.slides[0]
},
b.activeSlide = function () {
return b.slides[b.activeIndex]
},
b.fireCallback = function () {
var ae = arguments[0];
if ('[object Array]' === Object.prototype.toString.call(ae)) {
for (var af = 0; af < ae.length; af++) {
  'function' == typeof ae[af] && ae[af](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
}
} else {
'[object String]' === Object.prototype.toString.call(ae) ? ab['on' + ae] && b.fireCallback(ab['on' + ae], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])  : ae(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
}
},
b.addCallback = function (ag, ah) {
var ae,
af = this;
return af.params['on' + ag] ? ad(this.params['on' + ag]) ? this.params['on' + ag].push(ah)  : 'function' == typeof this.params['on' + ag] ? (ae = this.params['on' + ag], this.params['on' + ag] = [
], this.params['on' + ag].push(ae), this.params['on' + ag].push(ah))  : void 0 : (this.params['on' + ag] = [
], this.params['on' + ag].push(ah))
},
b.removeCallbacks = function (ae) {
b.params['on' + ae] && (b.params['on' + ae] = null)
};
var q = [
];
for (var r in b.plugins) {
if (ab[r]) {
var s = b.plugins[r](b, ab[r]);
s && q.push(s)
}
}
b.callPlugins = function (af, ag) {
ag || (ag = {
});
for (var ae = 0; ae < q.length; ae++) {
af in q[ae] && q[ae][af](ag)
}
},
!b.browser.ie10 && !b.browser.ie11 || ab.onlyExternal || b.wrapper.classList.add('swiper-wp8-' + (l ? 'horizontal' : 'vertical')),
ab.freeMode && (b.container.className += ' swiper-free-mode'),
b.initialized = !1,
b.init = function (ae, af) {
var ag = b.h.getWidth(b.container, !1, ab.roundLengths),
ah = b.h.getHeight(b.container, !1, ab.roundLengths);
if (ag !== b.width || ah !== b.height || ae) {
b.width = ag,
b.height = ah;
var ai,
aj,
am,
ao,
aq,
ar,
at;
h = l ? ag : ah;
var au = b.wrapper;
if (ae && b.calcSlides(af), 'auto' === ab.slidesPerView) {
  var av = 0,
  aw = 0;
  ab.slidesOffset > 0 && (au.style.paddingLeft = '', au.style.paddingRight = '', au.style.paddingTop = '', au.style.paddingBottom = ''),
  au.style.width = '',
  au.style.height = '',
  ab.offsetPxBefore > 0 && (l ? b.wrapperLeft = ab.offsetPxBefore : b.wrapperTop = ab.offsetPxBefore),
  ab.offsetPxAfter > 0 && (l ? b.wrapperRight = ab.offsetPxAfter : b.wrapperBottom = ab.offsetPxAfter),
  ab.centeredSlides && (l ? (b.wrapperLeft = (h - this.slides[0].getWidth(!0, ab.roundLengths)) / 2, b.wrapperRight = (h - b.slides[b.slides.length - 1].getWidth(!0, ab.roundLengths)) / 2)  : (b.wrapperTop = (h - b.slides[0].getHeight(!0, ab.roundLengths)) / 2, b.wrapperBottom = (h - b.slides[b.slides.length - 1].getHeight(!0, ab.roundLengths)) / 2)),
  l ? (b.wrapperLeft >= 0 && (au.style.paddingLeft = b.wrapperLeft + 'px'), b.wrapperRight >= 0 && (au.style.paddingRight = b.wrapperRight + 'px'))  : (b.wrapperTop >= 0 && (au.style.paddingTop = b.wrapperTop + 'px'), b.wrapperBottom >= 0 && (au.style.paddingBottom = b.wrapperBottom + 'px')),
  ar = 0;
  var ax = 0;
  for (b.snapGrid = [
  ], b.slidesGrid = [
  ], am = 0, at = 0; at < b.slides.length; at++) {
    ai = b.slides[at].getWidth(!0, ab.roundLengths),
    aj = b.slides[at].getHeight(!0, ab.roundLengths),
    ab.calculateHeight && (am = Math.max(am, aj));
    var ay = l ? ai : aj;
    if (ab.centeredSlides) {
      var ak = at === b.slides.length - 1 ? 0 : b.slides[at + 1].getWidth(!0, ab.roundLengths),
      al = at === b.slides.length - 1 ? 0 : b.slides[at + 1].getHeight(!0, ab.roundLengths),
      an = l ? ak : al;
      if (ay > h) {
        if (ab.slidesPerViewFit) {
          b.snapGrid.push(ar + b.wrapperLeft),
          b.snapGrid.push(ar + ay - h + b.wrapperLeft)
        } else {
          for (var ap = 0; ap <= Math.floor(ay / (h + b.wrapperLeft)); ap++) {
            b.snapGrid.push(0 === ap ? ar + b.wrapperLeft : ar + b.wrapperLeft + h * ap)
          }
        }
        b.slidesGrid.push(ar + b.wrapperLeft)
      } else {
        b.snapGrid.push(ax),
        b.slidesGrid.push(ax)
      }
      ax += ay / 2 + an / 2
    } else {
      if (ay > h) {
        if (ab.slidesPerViewFit) {
          b.snapGrid.push(ar),
          b.snapGrid.push(ar + ay - h)
        } else {
          if (0 !== h) {
            for (var az = 0; az <= Math.floor(ay / h); az++) {
              b.snapGrid.push(ar + h * az)
            }
          } else {
            b.snapGrid.push(ar)
          }
        }
      } else {
        b.snapGrid.push(ar)
      }
      b.slidesGrid.push(ar)
    }
    ar += ay,
    av += ai,
    aw += aj
  }
  ab.calculateHeight && (b.height = am),
  l ? (e = av + b.wrapperRight + b.wrapperLeft, ab.cssWidthAndHeight && 'height' !== ab.cssWidthAndHeight || (au.style.width = av + 'px'), ab.cssWidthAndHeight && 'width' !== ab.cssWidthAndHeight || (au.style.height = b.height + 'px'))  : (ab.cssWidthAndHeight && 'height' !== ab.cssWidthAndHeight || (au.style.width = b.width + 'px'), ab.cssWidthAndHeight && 'width' !== ab.cssWidthAndHeight || (au.style.height = aw + 'px'), e = aw + b.wrapperTop + b.wrapperBottom)
} else {
  if (ab.scrollContainer) {
    au.style.width = '',
    au.style.height = '',
    ao = b.slides[0].getWidth(!0, ab.roundLengths),
    aq = b.slides[0].getHeight(!0, ab.roundLengths),
    e = l ? ao : aq,
    au.style.width = ao + 'px',
    au.style.height = aq + 'px',
    d = l ? ao : aq
  } else {
    if (ab.calculateHeight) {
      for (am = 0, aq = 0, l || (b.container.style.height = ''), au.style.height = '', at = 0; at < b.slides.length; at++) {
        b.slides[at].style.height = '',
        am = Math.max(b.slides[at].getHeight(!0), am),
        l || (aq += b.slides[at].getHeight(!0))
      }
      aj = am,
      b.height = aj,
      l ? aq = aj : (h = aj, b.container.style.height = h + 'px')
    } else {
      aj = l ? b.height : b.height / ab.slidesPerView,
      ab.roundLengths && (aj = Math.ceil(aj)),
      aq = l ? b.height : b.slides.length * aj
    }
    for (ai = l ? b.width / ab.slidesPerView : b.width, ab.roundLengths && (ai = Math.ceil(ai)), ao = l ? b.slides.length * ai : b.width, d = l ? ai : aj, ab.offsetSlidesBefore > 0 && (l ? b.wrapperLeft = d * ab.offsetSlidesBefore : b.wrapperTop = d * ab.offsetSlidesBefore), ab.offsetSlidesAfter > 0 && (l ? b.wrapperRight = d * ab.offsetSlidesAfter : b.wrapperBottom = d * ab.offsetSlidesAfter), ab.offsetPxBefore > 0 && (l ? b.wrapperLeft = ab.offsetPxBefore : b.wrapperTop = ab.offsetPxBefore), ab.offsetPxAfter > 0 && (l ? b.wrapperRight = ab.offsetPxAfter : b.wrapperBottom = ab.offsetPxAfter), ab.centeredSlides && (l ? (b.wrapperLeft = (h - d) / 2, b.wrapperRight = (h - d) / 2)  : (b.wrapperTop = (h - d) / 2, b.wrapperBottom = (h - d) / 2)), l ? (b.wrapperLeft > 0 && (au.style.paddingLeft = b.wrapperLeft + 'px'), b.wrapperRight > 0 && (au.style.paddingRight = b.wrapperRight + 'px'))  : (b.wrapperTop > 0 && (au.style.paddingTop = b.wrapperTop + 'px'), b.wrapperBottom > 0 && (au.style.paddingBottom = b.wrapperBottom + 'px')), e = l ? ao + b.wrapperRight + b.wrapperLeft : aq + b.wrapperTop + b.wrapperBottom, parseFloat(ao) > 0 && (!ab.cssWidthAndHeight || 'height' === ab.cssWidthAndHeight) && (au.style.width = ao + 'px'), parseFloat(aq) > 0 && (!ab.cssWidthAndHeight || 'width' === ab.cssWidthAndHeight) && (au.style.height = aq + 'px'), ar = 0, b.snapGrid = [
    ], b.slidesGrid = [
    ], at = 0; at < b.slides.length; at++) {
      b.snapGrid.push(ar),
      b.slidesGrid.push(ar),
      ar += d,
      parseFloat(ai) > 0 && (!ab.cssWidthAndHeight || 'height' === ab.cssWidthAndHeight),
      parseFloat(aj) > 0 && (!ab.cssWidthAndHeight || 'width' === ab.cssWidthAndHeight)
    }
  }
}
b.initialized ? (b.callPlugins('onInit'), ab.onInit && b.fireCallback(ab.onInit, b))  : (b.callPlugins('onFirstInit'), ab.onFirstInit && b.fireCallback(ab.onFirstInit, b)),
b.initialized = !0
}
},
b.reInit = function (ae) {
b.init(!0, ae)
},
b.resizeFix = function (ae) {
b.callPlugins('beforeResizeFix'),
b.init(ab.resizeReInit || ae),
ab.freeMode ? b.getWrapperTranslate() < - y() && (b.setWrapperTransition(0), b.setWrapperTranslate( - y()))  : (b.swipeTo(ab.loop ? b.activeLoopIndex : b.activeIndex, 0, !1), ab.autoplay && (b.support.transitions && 'undefined' != typeof W ? 'undefined' != typeof W && (clearTimeout(W), W = void 0, b.startAutoplay())  : 'undefined' != typeof Z && (clearInterval(Z), Z = void 0, b.startAutoplay()))),
b.callPlugins('afterResizeFix')
},
b.destroy = function (ae) {
var af = b.h.removeEventListener,
ag = 'wrapper' === ab.eventTarget ? b.wrapper : b.container;
if (b.browser.ie10 || b.browser.ie11 ? (af(ag, b.touchEvents.touchStart, J), af(document, b.touchEvents.touchMove, K), af(document, b.touchEvents.touchEnd, L))  : (b.support.touch && (af(ag, 'touchstart', J), af(ag, 'touchmove', K), af(ag, 'touchend', L)), ab.simulateTouch && (af(ag, 'mousedown', J), af(document, 'mousemove', K), af(document, 'mouseup', L))), ab.autoResize && af(window, 'resize', b.resizeFix), B(), ab.paginationClickable && R(), ab.mousewheelControl && b._wheelEvent && af(b.container, b._wheelEvent, D), ab.keyboardControl && af(document, 'keydown', C), ab.autoplay && b.stopAutoplay(), ae) {
b.wrapper.removeAttribute('style');
for (var ah = 0; ah < b.slides.length; ah++) {
  b.slides[ah].removeAttribute('style')
}
}
b.callPlugins('onDestroy'),
window.jQuery && window.jQuery(b.container).data('swiper') && window.jQuery(b.container).removeData('swiper'),
window.Zepto && window.Zepto(b.container).data('swiper') && window.Zepto(b.container).removeData('swiper'),
b = null
},
b.disableKeyboardControl = function () {
ab.keyboardControl = !1,
b.h.removeEventListener(document, 'keydown', C)
},
b.enableKeyboardControl = function () {
ab.keyboardControl = !0,
b.h.addEventListener(document, 'keydown', C)
};
var t = (new Date).getTime();
if (b.disableMousewheelControl = function () {
return b._wheelEvent ? (ab.mousewheelControl = !1, b.h.removeEventListener(b.container, b._wheelEvent, D), !0)  : !1
}, b.enableMousewheelControl = function () {
return b._wheelEvent ? (ab.mousewheelControl = !0, b.h.addEventListener(b.container, b._wheelEvent, D), !0)  : !1
}, ab.grabCursor) {
var u = b.container.style;
u.cursor = 'move',
u.cursor = 'grab',
u.cursor = '-moz-grab',
u.cursor = '-webkit-grab'
}
b.allowSlideClick = !0,
b.allowLinks = !0;
var v,
w,
x,
U = !1,
Y = !0;
b.swipeNext = function (ae, af) {
'undefined' == typeof ae && (ae = !0),
!af && ab.loop && b.fixLoop(),
!af && ab.autoplay && b.stopAutoplay(!0),
b.callPlugins('onSwipeNext');
var ag = b.getWrapperTranslate().toFixed(2),
ah = ag;
if ('auto' === ab.slidesPerView) {
for (var ai = 0; ai < b.snapGrid.length; ai++) {
  if ( - ag >= b.snapGrid[ai].toFixed(2) && - ag < b.snapGrid[ai + 1].toFixed(2)) {
    ah = - b.snapGrid[ai + 1];
    break
  }
}
} else {
var aj = d * ab.slidesPerGroup;
ah = - (Math.floor(Math.abs(ag) / Math.floor(aj)) * aj + aj)
}
return ah < - y() && (ah = - y()),
ah === ag ? !1 : (P(ah, 'next', {
runCallbacks: ae
}), !0)
},
b.swipePrev = function (ae, af) {
'undefined' == typeof ae && (ae = !0),
!af && ab.loop && b.fixLoop(),
!af && ab.autoplay && b.stopAutoplay(!0),
b.callPlugins('onSwipePrev');
var ag,
ah = Math.ceil(b.getWrapperTranslate());
if ('auto' === ab.slidesPerView) {
ag = 0;
for (var ai = 1; ai < b.snapGrid.length; ai++) {
  if ( - ah === b.snapGrid[ai]) {
    ag = - b.snapGrid[ai - 1];
    break
  }
  if ( - ah > b.snapGrid[ai] && - ah < b.snapGrid[ai + 1]) {
    ag = - b.snapGrid[ai];
    break
  }
}
} else {
var aj = d * ab.slidesPerGroup;
ag = - (Math.ceil( - ah / aj) - 1) * aj
}
return ag > 0 && (ag = 0),
ag === ah ? !1 : (P(ag, 'prev', {
runCallbacks: ae
}), !0)
},
b.swipeReset = function (ae) {
'undefined' == typeof ae && (ae = !0),
b.callPlugins('onSwipeReset');
var af,
ag = b.getWrapperTranslate(),
ah = d * ab.slidesPerGroup;
- y();
if ('auto' === ab.slidesPerView) {
af = 0;
for (var ai = 0; ai < b.snapGrid.length; ai++) {
  if ( - ag === b.snapGrid[ai]) {
    return
  }
  if ( - ag >= b.snapGrid[ai] && - ag < b.snapGrid[ai + 1]) {
    af = b.positions.diff > 0 ? - b.snapGrid[ai + 1] : - b.snapGrid[ai];
    break
  }
}
- ag >= b.snapGrid[b.snapGrid.length - 1] && (af = - b.snapGrid[b.snapGrid.length - 1]),
ag <= - y() && (af = - y())
} else {
af = 0 > ag ? Math.round(ag / ah) * ah : 0,
ag <= - y() && (af = - y())
}
return ab.scrollContainer && (af = 0 > ag ? ag : 0),
af < - y() && (af = - y()),
ab.scrollContainer && h > d && (af = 0),
af === ag ? !1 : (P(af, 'reset', {
runCallbacks: ae
}), !0)
},
b.swipeTo = function (ae, af, ag) {
ae = parseInt(ae, 10),
b.callPlugins('onSwipeTo', {
index: ae,
speed: af
}),
ab.loop && (ae += b.loopedSlides);
var ah = b.getWrapperTranslate();
if (!(!isFinite(ae) || ae > b.slides.length - 1 || 0 > ae)) {
var ai;
return ai = 'auto' === ab.slidesPerView ? - b.slidesGrid[ae] : - ae * d,
ai < - y() && (ai = - y()),
ai === ah ? !1 : ('undefined' == typeof ag && (ag = !0), P(ai, 'to', {
  index: ae,
  speed: af,
  runCallbacks: ag
}), !0)
}
},
b._queueStartCallbacks = !1,
b._queueEndCallbacks = !1,
b.updateActiveSlide = function (af) {
if (b.initialized && 0 !== b.slides.length) {
b.previousIndex = b.activeIndex,
'undefined' == typeof af && (af = b.getWrapperTranslate()),
af > 0 && (af = 0);
var aj;
if ('auto' === ab.slidesPerView) {
  if (b.activeIndex = b.slidesGrid.indexOf( - af), b.activeIndex < 0) {
    for (aj = 0; aj < b.slidesGrid.length - 1 && !( - af > b.slidesGrid[aj] && - af < b.slidesGrid[aj + 1]); aj++) {
    }
    var ak = Math.abs(b.slidesGrid[aj] + af),
    al = Math.abs(b.slidesGrid[aj + 1] + af);
    b.activeIndex = al >= ak ? aj : aj + 1
  }
} else {
  b.activeIndex = Math[ab.visibilityFullFit ? 'ceil' : 'round']( - af / d)
}
if (b.activeIndex === b.slides.length && (b.activeIndex = b.slides.length - 1), b.activeIndex < 0 && (b.activeIndex = 0), b.slides[b.activeIndex]) {
  if (b.calcVisibleSlides(af), b.support.classList) {
    var ae;
    for (aj = 0; aj < b.slides.length; aj++) {
      ae = b.slides[aj],
      ae.classList.remove(ab.slideActiveClass),
      b.visibleSlides.indexOf(ae) >= 0 ? ae.classList.add(ab.slideVisibleClass)  : ae.classList.remove(ab.slideVisibleClass)
    }
    b.slides[b.activeIndex].classList.add(ab.slideActiveClass)
  } else {
    var ag = new RegExp('\\s*' + ab.slideActiveClass),
    ah = new RegExp('\\s*' + ab.slideVisibleClass);
    for (aj = 0; aj < b.slides.length; aj++) {
      b.slides[aj].className = b.slides[aj].className.replace(ag, '').replace(ah, ''),
      b.visibleSlides.indexOf(b.slides[aj]) >= 0 && (b.slides[aj].className += ' ' + ab.slideVisibleClass)
    }
    b.slides[b.activeIndex].className += ' ' + ab.slideActiveClass
  }
  if (ab.loop) {
    var ai = b.loopedSlides;
    b.activeLoopIndex = b.activeIndex - ai,
    b.activeLoopIndex >= b.slides.length - 2 * ai && (b.activeLoopIndex = b.slides.length - 2 * ai - b.activeLoopIndex),
    b.activeLoopIndex < 0 && (b.activeLoopIndex = b.slides.length - 2 * ai + b.activeLoopIndex),
    b.activeLoopIndex < 0 && (b.activeLoopIndex = 0)
  } else {
    b.activeLoopIndex = b.activeIndex
  }
  ab.pagination && b.updatePagination(af)
}
}
},
b.createPagination = function (ae) {
if (ab.paginationClickable && b.paginationButtons && R(), b.paginationContainer = ab.pagination.nodeType ? ab.pagination : ac(ab.pagination) [0], ab.createPagination) {
var af = '',
ag = b.slides.length,
ah = ag;
ab.loop && (ah -= 2 * b.loopedSlides);
for (var ai = 0; ah > ai; ai++) {
  af += '<' + ab.paginationElement + ' class="' + ab.paginationElementClass + '"></' + ab.paginationElement + '>'
}
b.paginationContainer.innerHTML = af
}
b.paginationButtons = ac('.' + ab.paginationElementClass, b.paginationContainer),
ae || b.updatePagination(),
b.callPlugins('onCreatePagination'),
ab.paginationClickable && S()
},
b.updatePagination = function (af) {
if (ab.pagination && !(b.slides.length < 1)) {
var ai = ac('.' + ab.paginationActiveClass, b.paginationContainer);
if (ai) {
  var aj = b.paginationButtons;
  if (0 !== aj.length) {
    for (var al = 0; al < aj.length; al++) {
      aj[al].className = ab.paginationElementClass
    }
    var ae = ab.loop ? b.loopedSlides : 0;
    if (ab.paginationAsRange) {
      b.visibleSlides || b.calcVisibleSlides(af);
      var ag,
      ah = [
      ];
      for (ag = 0; ag < b.visibleSlides.length; ag++) {
        var ak = b.slides.indexOf(b.visibleSlides[ag]) - ae;
        ab.loop && 0 > ak && (ak = b.slides.length - 2 * b.loopedSlides + ak),
        ab.loop && ak >= b.slides.length - 2 * b.loopedSlides && (ak = b.slides.length - 2 * b.loopedSlides - ak, ak = Math.abs(ak)),
        ah.push(ak)
      }
      for (ag = 0; ag < ah.length; ag++) {
        aj[ah[ag]] && (aj[ah[ag]].className += ' ' + ab.paginationVisibleClass)
      }
      ab.loop ? void 0 !== aj[b.activeLoopIndex] && (aj[b.activeLoopIndex].className += ' ' + ab.paginationActiveClass)  : aj[b.activeIndex] && (aj[b.activeIndex].className += ' ' + ab.paginationActiveClass)
    } else {
      ab.loop ? aj[b.activeLoopIndex] && (aj[b.activeLoopIndex].className += ' ' + ab.paginationActiveClass + ' ' + ab.paginationVisibleClass)  : aj[b.activeIndex] && (aj[b.activeIndex].className += ' ' + ab.paginationActiveClass + ' ' + ab.paginationVisibleClass)
    }
  }
}
}
},
b.calcVisibleSlides = function (af) {
var ak = [
],
ae = 0,
ag = 0,
ah = 0;
l && b.wrapperLeft > 0 && (af += b.wrapperLeft),
!l && b.wrapperTop > 0 && (af += b.wrapperTop);
for (var ai = 0; ai < b.slides.length; ai++) {
ae += ag,
ag = 'auto' === ab.slidesPerView ? l ? b.h.getWidth(b.slides[ai], !0, ab.roundLengths)  : b.h.getHeight(b.slides[ai], !0, ab.roundLengths)  : d,
ah = ae + ag;
var aj = !1;
ab.visibilityFullFit ? (ae >= - af && - af + h >= ah && (aj = !0), - af >= ae && ah >= - af + h && (aj = !0))  : (ah > - af && - af + h >= ah && (aj = !0), ae >= - af && - af + h > ae && (aj = !0), - af > ae && ah > - af + h && (aj = !0)),
aj && ak.push(b.slides[ai])
}
0 === ak.length && (ak = [
b.slides[b.activeIndex]
]),
b.visibleSlides = ak
};
var W,
Z;
b.startAutoplay = function () {
if (b.support.transitions) {
if ('undefined' != typeof W) {
  return !1
}
if (!ab.autoplay) {
  return
}
b.callPlugins('onAutoplayStart'),
ab.onAutoplayStart && b.fireCallback(ab.onAutoplayStart, b),
V()
} else {
if ('undefined' != typeof Z) {
  return !1
}
if (!ab.autoplay) {
  return
}
b.callPlugins('onAutoplayStart'),
ab.onAutoplayStart && b.fireCallback(ab.onAutoplayStart, b),
Z = setInterval(function () {
  ab.loop ? (b.fixLoop(), b.swipeNext(!0, !0))  : b.swipeNext(!0, !0) || (ab.autoplayStopOnLast ? (clearInterval(Z), Z = void 0)  : b.swipeTo(0))
}, ab.autoplay)
}
},
b.stopAutoplay = function (ae) {
if (b.support.transitions) {
if (!W) {
  return
}
W && clearTimeout(W),
W = void 0,
ae && !ab.autoplayDisableOnInteraction && b.wrapperTransitionEnd(function () {
  V()
}),
b.callPlugins('onAutoplayStop'),
ab.onAutoplayStop && b.fireCallback(ab.onAutoplayStop, b)
} else {
Z && clearInterval(Z),
Z = void 0,
b.callPlugins('onAutoplayStop'),
ab.onAutoplayStop && b.fireCallback(ab.onAutoplayStop, b)
}
},
b.loopCreated = !1,
b.removeLoopedSlides = function () {
if (b.loopCreated) {
for (var ae = 0; ae < b.slides.length; ae++) {
  b.slides[ae].getData('looped') === !0 && b.wrapper.removeChild(b.slides[ae])
}
}
},
b.createLoop = function () {
if (0 !== b.slides.length) {
b.loopedSlides = 'auto' === ab.slidesPerView ? ab.loopedSlides || 1 : Math.floor(ab.slidesPerView) + ab.loopAdditionalSlides,
b.loopedSlides > b.slides.length && (b.loopedSlides = b.slides.length);
var am,
an = '',
ae = '',
af = '',
ag = b.slides.length,
ah = Math.floor(b.loopedSlides / ag),
ai = b.loopedSlides % ag;
for (am = 0; ah * ag > am; am++) {
  var aj = am;
  if (am >= ag) {
    var ak = Math.floor(am / ag);
    aj = am - ag * ak
  }
  af += b.slides[aj].outerHTML
}
for (am = 0; ai > am; am++) {
  ae += O(ab.slideDuplicateClass, b.slides[am].outerHTML)
}
for (am = ag - ai; ag > am; am++) {
  an += O(ab.slideDuplicateClass, b.slides[am].outerHTML)
}
var al = an + af + c.innerHTML + af + ae;
for (c.innerHTML = al, b.loopCreated = !0, b.calcSlides(), am = 0; am < b.slides.length; am++) {
  (am < b.loopedSlides || am >= b.slides.length - b.loopedSlides) && b.slides[am].setData('looped', !0)
}
b.callPlugins('onCreateLoop')
}
},
b.fixLoop = function () {
var ae;
b.activeIndex < b.loopedSlides ? (ae = b.slides.length - 3 * b.loopedSlides + b.activeIndex, b.swipeTo(ae, 0, !1))  : ('auto' === ab.slidesPerView && b.activeIndex >= 2 * b.loopedSlides || b.activeIndex > b.slides.length - 2 * ab.slidesPerView) && (ae = - b.slides.length + b.activeIndex + b.loopedSlides, b.swipeTo(ae, 0, !1))
},
b.loadSlides = function () {
var ae = '';
b.activeLoaderIndex = 0;
for (var af = ab.loader.slides, ag = ab.loader.loadAllSlides ? af.length : ab.slidesPerView * (1 + ab.loader.surroundGroups), ah = 0; ag > ah; ah++) {
ae += 'outer' === ab.loader.slidesHTMLType ? af[ah] : '<' + ab.slideElement + ' class="' + ab.slideClass + '" data-swiperindex="' + ah + '">' + af[ah] + '</' + ab.slideElement + '>'
}
b.wrapper.innerHTML = ae,
b.calcSlides(!0),
ab.loader.loadAllSlides || b.wrapperTransitionEnd(b.reloadSlides, !0)
},
b.reloadSlides = function () {
var al = ab.loader.slides,
am = parseInt(b.activeSlide().data('swiperindex'), 10);
if (!(0 > am || am > al.length - 1)) {
b.activeLoaderIndex = am;
var an = Math.max(0, am - ab.slidesPerView * ab.loader.surroundGroups),
ao = Math.min(am + ab.slidesPerView * (1 + ab.loader.surroundGroups) - 1, al.length - 1);
if (am > 0) {
  var ae = - d * (am - an);
  b.setWrapperTranslate(ae),
  b.setWrapperTransition(0)
}
var af;
if ('reload' === ab.loader.logic) {
  b.wrapper.innerHTML = '';
  var ag = '';
  for (af = an; ao >= af; af++) {
    ag += 'outer' === ab.loader.slidesHTMLType ? al[af] : '<' + ab.slideElement + ' class="' + ab.slideClass + '" data-swiperindex="' + af + '">' + al[af] + '</' + ab.slideElement + '>'
  }
  b.wrapper.innerHTML = ag
} else {
  var ah = 1000,
  ai = 0;
  for (af = 0; af < b.slides.length; af++) {
    var aj = b.slides[af].data('swiperindex');
    an > aj || aj > ao ? b.wrapper.removeChild(b.slides[af])  : (ah = Math.min(aj, ah), ai = Math.max(aj, ai))
  }
  for (af = an; ao >= af; af++) {
    var ak;
    ah > af && (ak = document.createElement(ab.slideElement), ak.className = ab.slideClass, ak.setAttribute('data-swiperindex', af), ak.innerHTML = al[af], b.wrapper.insertBefore(ak, b.wrapper.firstChild)),
    af > ai && (ak = document.createElement(ab.slideElement), ak.className = ab.slideClass, ak.setAttribute('data-swiperindex', af), ak.innerHTML = al[af], b.wrapper.appendChild(ak))
  }
}
b.reInit(!0)
}
},
X()
}
};
Swiper.prototype = {
plugins: {
},
wrapperTransitionEnd: function (e, f) {
function g(h) {
if (h.target === c && (e(b), b.params.queueEndCallbacks && (b._queueEndCallbacks = !1), !f)) {
for (a = 0; a < d.length; a++) {
  b.h.removeEventListener(c, d[a], g)
}
}
}
var a,
b = this,
c = b.wrapper,
d = [
'webkitTransitionEnd',
'transitionend',
'oTransitionEnd',
'MSTransitionEnd',
'msTransitionEnd'
];
if (e) {
for (a = 0; a < d.length; a++) {
b.h.addEventListener(c, d[a], g)
}
}
},
getWrapperTranslate: function (e) {
var f,
a,
b,
c,
d = this.wrapper;
return 'undefined' == typeof e && (e = 'horizontal' === this.params.mode ? 'x' : 'y'),
this.support.transforms && this.params.useCSS3Transforms ? (b = window.getComputedStyle(d, null), window.WebKitCSSMatrix ? c = new WebKitCSSMatrix('none' === b.webkitTransform ? '' : b.webkitTransform)  : (c = b.MozTransform || b.OTransform || b.MsTransform || b.msTransform || b.transform || b.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,'), f = c.toString().split(',')), 'x' === e && (a = window.WebKitCSSMatrix ? c.m41 : parseFloat(16 === f.length ? f[12] : f[4])), 'y' === e && (a = window.WebKitCSSMatrix ? c.m42 : parseFloat(16 === f.length ? f[13] : f[5])))  : ('x' === e && (a = parseFloat(d.style.left, 10) || 0), 'y' === e && (a = parseFloat(d.style.top, 10) || 0)),
a || 0
},
setWrapperTranslate: function (f, n, a) {
var o = $('#' + this.container.id).find('.swiper-wrapper').width(),
e = $('#' + this.container.id).width();
var b,
c = this.wrapper.style,
d = {
x: 0,
y: 0,
z: 0
};
3 === arguments.length ? (d.x = f, d.y = n, d.z = a)  : ('undefined' == typeof n && (n = 'horizontal' === this.params.mode ? 'x' : 'y'), d[n] = f),
this.support.transforms && this.params.useCSS3Transforms ? (b = this.support.transforms3d ? 'translate3d(' + d.x + 'px, ' + d.y + 'px, ' + d.z + 'px)' : 'translate(' + d.x + 'px, ' + d.y + 'px)', c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b)  : (c.left = d.x + 'px', c.top = d.y + 'px'),
this.callPlugins('onSetWrapperTransform', d),
this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, d);
if (Math.abs(f) == 0) {
$('#' + this.container.id).parent().find('.' + this.params.btnPrefix + '-prev').addClass('disabled')
} else {
$('#' + this.container.id).parent().find('.' + this.params.btnPrefix + '-prev').removeClass('disabled')
}
if (o - Math.ceil( - f) <= e) {
$('#' + this.container.id).parent().find('.' + this.params.btnPrefix + '-next').addClass('disabled')
} else {
$('#' + this.container.id).parent().find('.' + this.params.btnPrefix + '-next').removeClass('disabled')
}
},
setWrapperTransition: function (a) {
var b = this.wrapper.style;
b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1000 + 's',
this.callPlugins('onSetWrapperTransition', {
duration: a
}),
this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a)
},
h: {
getWidth: function (d, e, a) {
var b = window.getComputedStyle(d, null).getPropertyValue('width'),
c = parseFloat(b);
return (isNaN(c) || b.indexOf('%') > 0 || 0 > c) && (c = d.offsetWidth - parseFloat(window.getComputedStyle(d, null).getPropertyValue('padding-left')) - parseFloat(window.getComputedStyle(d, null).getPropertyValue('padding-right'))),
e && (c += parseFloat(window.getComputedStyle(d, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(d, null).getPropertyValue('padding-right'))),
a ? Math.ceil(c)  : c
},
getHeight: function (d, e, a) {
if (e) {
return d.offsetHeight
}
var b = window.getComputedStyle(d, null).getPropertyValue('height'),
c = parseFloat(b);
return (isNaN(c) || b.indexOf('%') > 0 || 0 > c) && (c = d.offsetHeight - parseFloat(window.getComputedStyle(d, null).getPropertyValue('padding-top')) - parseFloat(window.getComputedStyle(d, null).getPropertyValue('padding-bottom'))),
e && (c += parseFloat(window.getComputedStyle(d, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(d, null).getPropertyValue('padding-bottom'))),
a ? Math.ceil(c)  : c
},
getOffset: function (e) {
var f = e.getBoundingClientRect(),
g = document.body,
a = e.clientTop || g.clientTop || 0,
b = e.clientLeft || g.clientLeft || 0,
c = window.pageYOffset || e.scrollTop,
d = window.pageXOffset || e.scrollLeft;
return document.documentElement && !window.pageYOffset && (c = document.documentElement.scrollTop, d = document.documentElement.scrollLeft),
{
top: f.top + c - a,
left: f.left + d - b
}
},
windowWidth: function () {
return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
},
windowHeight: function () {
return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
},
windowScroll: function () {
return 'undefined' != typeof pageYOffset ? {
left: window.pageXOffset,
top: window.pageYOffset
}
 : document.documentElement ? {
left: document.documentElement.scrollLeft,
top: document.documentElement.scrollTop
}
 : void 0
},
addEventListener: function (c, d, a, b) {
'undefined' == typeof b && (b = !1),
c.addEventListener ? c.addEventListener(d, a, b)  : c.attachEvent && c.attachEvent('on' + d, a)
},
removeEventListener: function (c, d, a, b) {
'undefined' == typeof b && (b = !1),
c.removeEventListener ? c.removeEventListener(d, a, b)  : c.detachEvent && c.detachEvent('on' + d, a)
}
},
setTransform: function (b, c) {
var a = b.style;
a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = c
},
setTranslate: function (d, e) {
var a = d.style,
b = {
x: e.x || 0,
y: e.y || 0,
z: e.z || 0
},
c = this.support.transforms3d ? 'translate3d(' + b.x + 'px,' + b.y + 'px,' + b.z + 'px)' : 'translate(' + b.x + 'px,' + b.y + 'px)';
a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = c,
this.support.transforms || (a.left = b.x + 'px', a.top = b.y + 'px')
},
setTransition: function (b, c) {
var a = b.style;
a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = c + 'ms'
},
support: {
touch: window.Modernizr && Modernizr.touch === !0 || function () {
return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch)
}(),
transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
var a = document.createElement('div').style;
return 'webkitPerspective' in a || 'MozPerspective' in a || 'OPerspective' in a || 'MsPerspective' in a || 'perspective' in a
}(),
transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
var a = document.createElement('div').style;
return 'transform' in a || 'WebkitTransform' in a || 'MozTransform' in a || 'msTransform' in a || 'MsTransform' in a || 'OTransform' in a
}(),
transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
var a = document.createElement('div').style;
return 'transition' in a || 'WebkitTransition' in a || 'MozTransition' in a || 'msTransition' in a || 'MsTransition' in a || 'OTransition' in a
}(),
classList: function () {
var a = document.createElement('div');
return 'classList' in a
}()
},
browser: {
ie8: function () {
var b = - 1;
if ('Microsoft Internet Explorer' === navigator.appName) {
var c = navigator.userAgent,
a = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
null !== a.exec(c) && (b = parseFloat(RegExp.$1))
}
return - 1 !== b && 9 > b
}(),
ie10: window.navigator.msPointerEnabled,
ie11: window.navigator.pointerEnabled
}
},
(window.jQuery || window.Zepto) && !function (a) {
a.fn.swiper = function (b) {
var c;
return this.each(function (d) {
var e = a(this),
f = new Swiper(e[0], b);
d || (c = f),
e.data('swiper', f)
}),
c
}
}(window.jQuery || window.Zepto),
'undefined' != typeof module ? module.exports = Swiper : 'function' == typeof define && define.amd && define([], function () {
return Swiper
});
'use strict';
var Slider = function (a) {
this.i = 0;
this.objid = a.objid || null;
this.preclassname = a.preclassname || '.btn-prev';
this.nextclassname = a.nextclassname || '.btn-next';
this.listname = a.listname || '.grid-list';
this.listitem = a.listitem || 'li';
this.shownum = a.shownum || 5.5;
this.type = a.type || 1;
this.autoplay = a.autoplay || false;
this.offset = a.offset || 0
};
Slider.prototype = {
init: function () {
var b = this;
var a = b.set();
if (b.autoplay) {
b.auto(a)
} else {
b.next(a);
b.pre(a)
}
},
auto: function (e) {
var d = this,
c = null;
$(d.listname).find(d.listitem).eq(0).clone().appendTo(d.listname);
e.len += 1;
var b = (e.itemHeight) * (e.len - 1),
a = function () {
d.i++;
if (Math.abs(parseInt(e.$grid.css('margin-top'))) == b) {
e.$grid.css('margin-top', 0);
d.i = 1
}
e.$grid.animate({
'margin-top': '-' + (d.i * e.itemHeight * d.shownum) + 'px'
}, 500)
};
if (d.autoplay) {
c = setInterval(a, 2000);
e.$grid.hover(function () {
clearInterval(c)
}, function () {
c = setInterval(a, 2000)
})
}
},
set: function () {
var e = this,
h = $(e.objid + ' ' + e.listitem),
j = $(e.objid + ' ' + e.listname),
i = $(e.objid + ' ' + e.preclassname),
b = $(e.objid + ' ' + e.nextclassname),
f = h.length,
g = h.outerWidth(),
a = h.outerHeight(),
d = Math.ceil(f / e.shownum),
c = 0;
switch (e.type) {
default:
case 1:
j.css('width', (g + 1) * f + 'px');
break;
case 2:
j.css('height', (a) * f + 'px');
break;
case 3:
g = g + 20;
j.css('width', (g) * f + 'px');
break;
case 4:
g = g + 50;
j.css('width', (g) * f + 'px');
break;
case 5:
j.css('width', (g + 1) * f + 'px');
if (f <= e.shownum) {
  b.addClass('disabled')
} else {
  b.removeClass('disabled')
}
break
}
return {
$item: h,
$grid: j,
$pre: i,
$next: b,
len: f,
itemWidth: g,
itemHeight: a,
num: d,
offset: c
}
},
pre: function (b) {
var a = this;
b.$pre.bind('click', function () {
if ($(this).hasClass('disabled')) {
return
}
a.i--;
a.offset -= a.shownum;
if (a.i - 1 < 0) {
b.$pre.addClass('disabled')
}
b.$next.removeClass('disabled');
switch (a.type) {
default:
case 1:
b.$grid.animate({
  'margin-left': a.i == 0 ? 0 : parseInt(b.$grid.css('margin-left')) + (b.itemWidth * a.shownum) + 'px'
}, 500);
break;
case 2:
b.$grid.animate({
  'margin-top': a.i == 0 ? 0 : parseInt(b.$grid.css('margin-top')) + (b.itemHeight * a.shownum) + 'px'
}, 500);
break;
case 3:
case 4:
if (a.offset < 0) {
  a.offset = 0;
  b.$pre.addClass('disabled')
}
b.$grid.animate({
  'margin-left': '-' + (a.offset * b.itemWidth) + 'px'
}, 500);
break;
case 5:
b.$grid.animate({
  'margin-left': a.i == 0 ? 0 : parseInt(b.$grid.css('margin-left')) + (b.itemWidth * a.shownum) + 'px'
}, 500);
break
}
})
},
next: function (b) {
var a = this;
switch (a.type) {
case 3:
case 4:
if (a.offset + 1 >= b.num) {
b.$next.addClass('disabled')
}
break
}
b.$next.bind('click', function () {
if ($(this).hasClass('disabled')) {
return
}
a.i++;
a.offset += a.shownum;
b.$pre.removeClass('disabled');
switch (a.type) {
default:
case 1:
if (a.shownum > 1) {
  if (a.i + 1 == b.num) {
    var d = parseInt(b.$grid.css('margin-left'));
    var c = (b.len - ((a.i) * parseInt(a.shownum)) - 1 / 2) * b.itemWidth;
    b.$grid.animate({
      'margin-left': d - c + 'px'
    }, 500)
  } else {
    b.$grid.animate({
      'margin-left': '-' + (a.i * b.itemWidth * parseInt(a.shownum)) + 'px'
    }, 500)
  }
} else {
  b.$grid.animate({
    'margin-left': '-' + (a.i * b.itemWidth * a.shownum) + 'px'
  }, 500)
}
if (a.i + 1 == b.num) {
  b.$next.addClass('disabled')
}
break;
case 2:
b.$grid.animate({
  'margin-top': '-' + (a.i * b.itemHeight * a.shownum) + 'px'
}, 500);
if (a.i + 1 == b.num) {
  b.$next.addClass('disabled')
}
break;
case 3:
case 4:
if (a.offset + a.shownum > b.len) {
  a.offset = b.len - a.shownum;
  b.$grid.animate({
    'margin-left': '-' + (a.offset * b.itemWidth) + 'px'
  }, 500);
  b.$next.addClass('disabled')
} else {
  b.$grid.animate({
    'margin-left': '-' + (a.offset * b.itemWidth) + 'px'
  }, 500)
}
break;
case 5:
if (a.shownum > 1) {
  if (a.i + 1 == b.num) {
    var d = parseInt(b.$grid.css('margin-left'));
    var c = (b.len - ((a.i) * parseInt(a.shownum))) * b.itemWidth;
    b.$grid.animate({
      'margin-left': d - c + 'px'
    }, 500)
  } else {
    b.$grid.animate({
      'margin-left': '-' + (a.i * b.itemWidth * parseInt(a.shownum)) + 'px'
    }, 500)
  }
} else {
  b.$grid.animate({
    'margin-left': '-' + (a.i * b.itemWidth * a.shownum) + 'px'
  }, 500)
}
if (a.i + 1 == b.num) {
  b.$next.addClass('disabled')
}
break
}
})
}
};
ec.pkg('ec.account');
ec.load('jquery.autocomplete', {
loadType: 'lazy',
callback: function () {
$('#search-kw').autocomplete({
serviceUrl: '/search_keywords',
minChars: 1,
maxHeight: 400,
deferRequestBy: 100
})
}
});
ec.load('ec.box');
ec.load('ec.XSSUtils');
ec.account.customerInfo = function () {
this.zmPoint = null;
this.empiricalValue = null
};
var g_pointBlance = 0;
var g_couponCount = 0;
var g_balanceAmount = 0;
var g_newMsgCount = 0;
var g_totalPoint = 0;
var minCartNum = 0;
window.gid = function (id) {
return document.getElementById(id)
};
ec.account.isLogin = function () {
ec.account.id = ec.util.cookie.get('uid');
ec.account.loginName = ec.util.cookie.get('ac_loNa');
return ec.account.id && ec.account.loginName
};
ec.account.syncCustomSession = function (callback) {
$.ajax({
async: false,
url: '/account/syncEmailAndMobile.json',
dataType: 'json',
timeout: 10000,
success: function (json) {
if (callback && callback != undefined) {
callback(json)
}
return
}
})
};
ec.account.getStatus = function (callback) {
$.ajax({
url: domainAccount + '/status.json?t=' + (new Date).getTime(),
dataType: 'json',
timeout: 10000,
jsonop: 'callback',
type: 'post',
success: function (result) {
if (result && result.id > 0) {
ec.account.id = result.id;
ec.account.uid = result.uid;
ec.account.name = result.name;
ec.account.nickName = result.nickName;
ec.account.displayName = result.displayName;
ec.account.loginName = result.loginName;
ec.account.email = result.email;
ec.account.mobile = result.mobile;
ec.account.isQueue = result.isQueue;
ec.account.custGrade = result.custGrade;
ec.account.custPrivilege = result.custPrivilege;
ec.account.custPoint = result.custPoint;
ec.account.userState = result.userState;
ec.account.isAuthCust = result.isAuthCust;
var isFirst = ec.util.cookie.get('ifl_v');
if (isFirst == '1') {
$.ajax({
url: '/account/load',
type: 'POST'
})
}
}
callback()
}
})
};
ec.account.getAccountStatus = function (userId, callback, isLazy) {
if (userId) {
if (isLazy) {
ec.load({
url: domainMain + '/account/status?' + (new Date).getTime(),
type: 'js',
onload: callback
})
} else {
ec.load({
url: domainMain + '/account/status?' + (new Date).getTime(),
type: 'js',
loadType: 'lazy',
onload: callback
})
}
}
};
ec.account.getLoginInfo = function (callback, isLazy) {
var loginInfo = ec.util.cookie.get('ac_li');
var userId = ec.util.cookie.get('uid');
var isValCas = ec.util.cookie.get('isValCas');
try {
if (userId && isValCas && 'false' == isValCas) {
ec.account.id = ec.util.cookie.get('uid');
ec.account.uid = ec.util.cookie.get('uid');
ec.account.name = ec.util.cookie.get('user');
ec.account.nickName = ec.util.cookie.get('name');
ec.account.displayName = ec.util.cookie.get('displayName');
ec.account.loginName = ec.util.cookie.get('user');
ec.account.isValCas = 'false';
$.ajax({
url: '/account/load',
async: false,
type: 'POST'
});
ec.account.getAccountStatus(userId, callback, isLazy);
ec.account.isValCas = ec.util.cookie.get('isValCas');
callback();
return
}
if (loginInfo && userId) {
ec.account.id = ec.util.cookie.get('uid');
ec.account.uid = ec.util.cookie.get('uid');
ec.account.name = ec.util.cookie.get('user');
ec.account.nickName = ec.util.cookie.get('name');
ec.account.displayName = ec.util.cookie.get('displayName');
ec.account.loginName = ec.util.cookie.get('ac_loNa');
ec.account.email = ec.util.cookie.get('ac_lel');
ec.account.mobile = ec.util.cookie.get('ac_lmi');
ec.account.isQueue = ec.util.cookie.get('ac_liq');
ec.account.custGrade = ec.util.cookie.get('ac_lgc');
ec.account.custPrivilege = ec.util.cookie.get('ac_cp');
ec.account.custPoint = ec.util.cookie.get('ac_ltp');
ec.account.userState = ec.util.cookie.get('ac_lus');
callback();
return
}
} catch (e) {
}
ec.account.getAccountStatus(userId, callback, isLazy)
};
ec.account.showEnterpriseUserNav = function () {
var isEnterpriseUser = ec.util.cookie.get('isEnterpriseUser');
if (isEnterpriseUser && 'false' !== isEnterpriseUser) {
$('#preferential').html('<a href="' + domainMain + '/member/enterprise" rel="nofollow">优惠内购</a>').show();
$('#li-enterprise-preferential').html('<a href="' + domainMain + '/member/enterprise" onclick="pushHeaderMsg(\'优惠内购\',\'' + domainMain + '/member/enterprise\')"><span>优惠内购</span></a>').show();
$('#li-enterprise').html('<a href="' + domainMain + '/member/enterprise"><span>优惠内购</span></a>').show()
}
};
ec.account.getAccountInfo = function (callback) {
ec.account.showEnterpriseUserNav();
$.ajax({
url: domainMain + '/member/accountInfo.json',
dataType: 'json',
timeout: 10000,
timeoutFunction: function () {
alert(timeOutInfo)
},
success: function (json) {
if (json && json.enterpriseUser) {
ec.util.cookie.set('isEnterpriseUser', 'true', {
domain: 'vmall.com'
});
ec.account.showEnterpriseUserNav()
}
if (json && !json.success && json.code == 'login') {
var e = {
domain: 'vmall.com'
};
ec.account.id = ec.util.cookie.set('uid', null, e);
ec.account.loginName = ec.util.cookie.set('user', null, e);
$('#unlogin_status').show();
$('#top_login').removeClass().addClass('header-toolbar hide');
$('#top_unlogin').removeClass().addClass('header-toolbar');
$('#gg_login').removeClass().addClass('i-mall-prompt clearfix hide');
$('#gg_unlogin').removeClass().addClass('i-mall-prompt clearfix');
$('#privilege_is_login').removeClass().addClass('privilege-user privilege-user-gray');
$('.privilege-user-login').show();
$('#personal_privilege').hide();
$('.user-canvas').removeClass().addClass('user-canvas hide');
$('.user-canvas').removeAttr('style');
$('#privilege-user-img').find('img').attr('src', 'images/echannel/misc/img_not_logged_in.png');
$('#balanceicon_privilege').html('--');
$('#couponicon_privilege').html('--');
$('#balanceAmount_privilege').html('--');
ec.minicart.setNum(0);
$('.business-user-info').hide();
$('.business-user-bottom').find('.business-user-num').hide();
$('.business-user').addClass('business-user-gray');
$('#userImgID').find('img').attr('src', '/images/echannel/misc/img88_black.jpg');
$('#loginUserInfoId').show();
$('.business-user-bottom').find('.business-user-explain').show();
return
}
callback(json);
getPointBalance();
ec.account.getBalanceAmount();
getPetalNumber()
}
})
};
ec.account.queryEnterpriseFlag = function () {
var enterpriseUserCookie = ec.util.cookie.get('enterpriseUserCookie');
if (null == enterpriseUserCookie || enterpriseUserCookie == '') {
$.ajax({
url: domainMain + '/member/queryEnterpriseFlag.json',
dataType: 'json',
timeout: 10000,
timeoutFunction: function () {
alert(timeOutInfo)
},
success: function (json) {
if (json.enterpriseUser) {
$('#preferential').html('<a href="' + domainMain + '/member/enterprise" rel="nofollow">优惠内购</a>').show();
$('#li-enterprise-preferential').html('<a href="' + domainMain + '/member/enterprise"><span>优惠内购</span></a>').show();
$('#li-enterprise').html('<a href="' + domainMain + '/member/enterprise"><span>优惠内购</span></a>').show()
} else {
$('#preferential').html('');
$('#li-enterprise-preferential').html('');
$('#li-enterprise').html('')
}
},
error: function () {
$('#preferential').html('');
$('#li-enterprise-preferential').html('');
$('#li-enterprise').html('')
}
})
} else {
if ('true' == enterpriseUserCookie) {
$('#preferential').html('<a href="' + domainMain + '/member/enterprise" rel="nofollow">优惠内购</a>').show();
$('#li-enterprise-preferential').html('<a href="' + domainMain + '/member/enterprise"><span>优惠内购</span></a>').show();
$('#li-enterprise').html('<a href="' + domainMain + '/member/enterprise"><span>优惠内购</span></a>').show()
}
if ('false' == enterpriseUserCookie) {
$('#preferential').html('');
$('#li-enterprise-preferential').html('');
$('#li-enterprise').html('')
}
}
};
ec.account.showCustoemrInfo = function (json) {
ec.util.cookie.set('vmallMyCenterMsg', json.newMsgCount);
if (parseInt(json.couponCount) >= 0) {
g_couponCount = json.couponCount;
$('#top-couponCount').html(json.couponCount)
}
if (json.newMsgCount) {
g_newMsgCount = json.newMsgCount;
$('#top-newMsgCount').html(json.newMsgCount || 0);
if (json.newMsgCount > 0) {
$('#li-msg em').textS('(' + json.newMsgCount + ')')
}
}
if (json.customerInfo) {
var customerInfo = json.customerInfo;
if (customerInfo.headPictureURL) {
$('#customerPic').attrS('src', customerInfo.headPictureURL);
$('#gg_customerPic').attrS('src', customerInfo.headPictureURL)
} else {
var imgpath = $('#customerPic').attr('imgpath');
$('#customerPic').attr('src', imgpath + '/echannel/misc/img_logged_in.png');
$('#gg_customerPic').attr('src', imgpath + '/echannel/misc/img_logged_in.png')
}
if (customerInfo.totalPoint) {
$('#empiricalValue').html(customerInfo.totalPoint);
ec.account.customerInfo.empiricalValue = customerInfo.totalPoint;
g_totalPoint = customerInfo.totalPoint
}
if (customerInfo.mobileStatus && customerInfo.mobileStatus == '1') {
$('#validateMobile').html('已验证手机').removeClass('link-non-validated').addClass('link-validated')
}
if (customerInfo.emailStatus && customerInfo.emailStatus == '1') {
$('#validateMail').html('已验证邮箱').removeClass('link-non-validated').addClass('link-validated')
}
if (customerInfo.isAuthentication && customerInfo.isAuthentication == '1') {
$('#authentication_y').show();
$('#authentication_n').hide()
} else {
$('#authentication_n').show();
$('#authentication_y').hide()
}
}
if (json.gradeConfig) {
var max = json.gradeConfig.maxScores;
var min = json.gradeConfig.minScores;
var interval = max - min;
var userScores = g_totalPoint;
var cha = userScores - min;
if (isNaN(interval)) {
interval = 50000
}
if (cha > 50000) {
cha = 50000
}
var resultNum = cha / interval * 100;
if (isNaN(resultNum)) {
resultNum = 0;
userScores = 0
}
if (resultNum <= 0) {
resultNum = 0
} else {
resultNum = Math.round(resultNum)
}
var code = json.gradeConfig.code;
$('#gg_jyz').attr('style', 'width: ' + resultNum + '%');
$('#canvas-index').attr('style', 'width: ' + resultNum + '%');
var nextGradeName = json.gradeConfig.nextGradeName;
if (nextGradeName == 'maxlevel') {
max = 100000
}(function () {
ec.account.privilege_updateProgress(max, min, userScores, code);
ec.account.privilege_updateProgressIndex(code)
}) ()
}
};
function htmlEncode(string) {
var entityMap = {
'&': '&amp;',
'<': '&lt;',
'>': '&gt;',
'"': '&quot;',
'\'': '&#39;',
'/': '&#x2F;'
};
return String(string).replace(/[&<>"'\/]/g, function (s) {
return entityMap[s]
})
}
function getPetalNumber() {
$.ajax({
url: '/member/petalValid.json',
timeout: 10000,
dataType: 'json',
success: function (json) {
if (!json.success) {
$('#petalicon_myCenter').html(0)
} else {
$('#petalicon_myCenter').html('<a href="/member/petal?t=' + (new Date).getTime() + '" target="_blank">' + json.petalNumber + '</a>')
}
}
})
}
ec.account.getBalanceAmount = function () {
$.ajax({
url: domainMain + '/member/voucher/queryBalance.json',
type: 'get',
dataType: 'json',
timeout: 10000,
timeoutFunction: function () {
alert(timeOutInfo)
},
success: function (json) {
if (json && json.resultCode == 0) {
if (json.balanceAmount != null) {
g_balanceAmount = parseFloat(json.balanceAmount).toFixed(2)
} else {
g_balanceAmount = 0
}
$('#balanceAmount').html(g_balanceAmount);
if (parseInt(g_balanceAmount) > parseInt(999)) {
$('#balanceAmount_privilege').empty().html('<a href="/member/balance?t=' + (new Date).getTime() + '" target="_blank">' + 999 + '+</a>')
} else {
$('#balanceAmount_privilege').empty().html('<a href="/member/balance?t=' + (new Date).getTime() + '" target="_blank">' + g_balanceAmount + '</a>')
}
$('#balanceAmount_myCenter').html('<a href="/member/balance?t=' + (new Date).getTime() + '" target="_blank">' + g_balanceAmount + '</a>');
$('#balanceAmount_myCenter').removeClass('p-price-no')
}
}
})
};
ec.ready(function () {
var _showLoginTips = function () {
if (ec.account.isLogin()) {
var loginName = ec.autoEncodeAttr(ec.account.displayName) || ec.autoEncodeAttr(ec.account.nickName) || ec.autoEncodeAttr(ec.account.name) || ec.account.loginName;
$('#customer_name').html(loginName);
if ($('#cart_unlogin_info') [0]) {
$('#cart_unlogin_info p').html('<a href="/member?t=' + (new Date).getTime() + '">' + loginName + '</a>')
}
$('#login_status,#cart_login_info').show();
$('#up_user_center').show();
$('#unlogin_status,#cust_login_info').hide();
$('#loginName').html('<a href="/member?t=' + (new Date).getTime() + '">' + loginName + '</a>');
$('#up_loginName').html(loginName);
$('#up_loginName_info').html(loginName);
ec.account.showVipInfo();
$('#top_login').removeClass().addClass('header-toolbar');
$('#top_loginName').html(loginName);
$('#top_unlogin').removeClass().addClass('header-toolbar hide');
$('#gg_loginName').html(loginName);
$('#gg_login').removeClass().addClass('i-mall-prompt clearfix');
$('#gg_unlogin').removeClass().addClass('i-mall-prompt clearfix hide');
var isAuthCust = ec.util.cookie.get('isAuthCust');
if ('true' == isAuthCust) {
$('#authentication_y').show();
$('#authentication_n').hide()
} else {
$('#authentication_n').show();
$('#authentication_y').hide()
}
var caibeiShowMsg = ec.util.cookie.get('caibeiShowMsg'),
caibeiHeadShow = ec.util.cookie.get('caibeiHeadShow'),
caibeiJifenUrl = ec.util.cookie.get('caibeiJifenUrl');
if (caibeiShowMsg != undefined && caibeiShowMsg != null && caibeiShowMsg.length > 0) {
$('#HeadShow').html(caibeiHeadShow);
if (caibeiJifenUrl != undefined && caibeiJifenUrl != null && caibeiJifenUrl.length > 0) {
caibeiShowMsg = caibeiShowMsg + '<b>|</b><a href=\'' + caibeiJifenUrl + '\' title=\'我的彩贝积分\' target=\'_blank\'>我的彩贝积分</a>'
}
$('#ShowMsg').html(caibeiShowMsg);
$('#caibeiMsg').show()
}
$('#newPointlogin_status').show();
enterpriseUserCookieTemp = ec.util.cookie.get('isEnterpriseUser');
if ('true' == enterpriseUserCookieTemp) {
$('#preferential').html('<a href="' + domainMain + '/member/enterprise" rel="nofollow">优惠内购</a>').show();
$('#li-enterprise-preferential').html('<a href="' + domainMain + '/member/enterprise" onclick = "pushHeaderMsg(\'优惠内购\',\'' + domainMain + '/member/enterprise\')"><span>优惠内购</span></a>').show();
$('#li-enterprise').html('<a href="' + domainMain + '/member/enterprise"><span>优惠内购</span></a>').show()
}
userCenterFlagTemp = ec.util.cookie.get('userCenterFlag');
if (userCenterFlagTemp != null && userCenterFlagTemp != '') {
if (userCenterFlagTemp.length == 4) {
if (enterpriseUserCookieTemp.length > 4) {
ec.account.getAccountInfo(ec.account.showCustoemrInfo)
}
}
}
if (window.location.pathname && window.location.pathname == '/visitor/vistorConfirm') {
ec.redirectTo(domainMain)
}
if (window.location.pathname && (window.location.pathname == '/' || window.location.pathname == '/index.html')) {
ec.account.showEnterpriseUserNav()
}
} else {
$('#gg_login').removeClass().addClass('i-mall-prompt clearfix hide');
$('#gg_unlogin').removeClass().addClass('i-mall-prompt clearfix');
$('#top_login').removeClass().addClass('header-toolbar hide');
$('#top_unlogin').removeClass().addClass('header-toolbar')
}
};
var _upLogin = function (callback, visitorInfoTemp) {
var visitorName = '';
var funName = 'callback' + (new Date).getTime(),
boxWidth;
boxWidth = 500;
if (ec.product.isSupportVisitorMode != undefined) {
var visitorFlag = false;
var skuInfo = ec.product.getSkuInfo(ec.product.getSku() || ec.product.defaultSku);
var skuId = skuInfo.id;
var sbomCode = skuInfo.code;
if (ec.product.productSupportList != undefined && ec.product.productSupportList != null) {
for (var n = 0; n < ec.product.productSupportList.length; n++) {
var visitorInfo = ec.product.productSupportList[n];
if (visitorInfo.sbomCode == sbomCode) {
var nowTime = ec.product.getSysDate();
var startTime = visitorInfo.startTime;
var endTime = visitorInfo.endTime;
if (startTime <= nowTime && endTime >= nowTime) {
  visitorFlag = true
}
}
}
}
if (ec.product.inventory.haveInventory(skuId) && visitorFlag && ec.product.isSupportVisitorMode == 1 && ec.product.productType != 4 && !rush.sbom.isRushProduct() && !rush.sbom.isRushSbom(skuId)) {
if (ec.product.isGift != 2 && (!ec.product.isCover || ec.product.isCover == undefined) && !ec.product.isComb) {
if (visitorInfoTemp == 'visitorInfo') {
visitorName = '<div class="visitor-login"><a href="javascript:;" onclick="ec.product.orderNowByVisitor();" class="visitor-login-btn">免登录购买</a><div class="visitor-login-explain">' + '<span>温馨提示：</span>免登录购买是华为商城（www.vmall.com）推出的快捷购买方式，暂不支持领取和使用优惠券，不支持累计积分或经验值等。推荐<a href="' + ec.product.casRegister + '">注册</a>成为华为商城会员，获得相关购买权益和服务。' + '</div></div>';
boxWidth = 1000
}
}
}
}
var url = '/account/login?type=frame&url=' + encodeURIComponent(domainMain + '/account/upCallback.html?funName=' + funName + '&prePage=' + encodeURIComponent(encodeURIComponent(window.location.href))),
name = 'up-iframe-' + (new Date).getTime(),
html = '<div id="visitorRedirect" class="clearfix">' + '<iframe id="iframeLogin" class="boxIframe fl" width="497" height="550" frameborder="0" name="' + name + '" src="about:blank" scrolling="no"></iframe>' + '</div>' + '<div class="login-link">继续访问即代表您已同意<a href="https://www.vmall.com/help/faq-778.html" target="_blank">华为商城服务协议</a>和<a href="https://www.vmall.com/help/faq-2635.html" target="_blank">华为隐私政策</a></div>';
var box = new ec.box(html, {
boxid: 'ec_login',
title: ' ',
remember: false,
width: boxWidth,
height: 600,
showButton: false,
onclose: function (box) {
try {
delete window[funName]
} catch (e) {
window[funName] = null
}
box.find('iframe').each(function () {
this.contentWindow.close();
$(this).remove()
})
},
onopen: function () {
ec.redirectTo({
url: url,
win: window[name]
});
$('#iframeLogin').load(function () {
try {
if (window[name] && (window[name].document.querySelectorAll('div.event-503-wrp').length > 0 || window[name].document.querySelectorAll('div.system-error').length > 0)) {
  ec.redirectTo({
    url: '/account/login-error.html',
    win: window[name]
  })
}
} catch (e) {
}
if ($('.visitor-login').length == 0) {
$('#visitorRedirect').append(visitorName)
}
})
}
}).open();
window[funName] = function () {
if (typeof isUseAccount != 'undefined' && isUseAccount == 'true') {
ec.account.getStatus(_showLoginTips)
} else {
ec.account.getLoginInfo(_showLoginTips, false);
if (window.location.pathname == '/company') {
ec.redirectTo('/company')
}
ec.util.cookie.get('ifl_v')
}
callback();
var e = {
domain: 'vmall.com'
};
ec.util.cookie.set('thirdLoginFlag', null, e);
box.close();
ec.agreement.init()
}
};
ec.account.afterLogin = function (callback, visitorInfoTemp) {
if (ec.account.isLogin()) {
ec.account.getLoginInfo(_showLoginTips, false);
callback()
} else {
$.ajax({
url: '/account/check/loginInfo.json?t=' + Math.random(),
dataType: 'json',
success: function (json) {
if (json.loginFlag == '1') {
ec.account.getLoginInfo(_showLoginTips, false);
return
} else {
_upLogin(callback, visitorInfoTemp)
}
},
error: function (x) {
alert('系统繁忙，请稍后重试')
}
})
}
};
if (typeof isUseAccount != 'undefined' && isUseAccount == 'true') {
ec.account.getStatus(_showLoginTips)
} else {
ec.account.getLoginInfo(_showLoginTips, true)
}
var cartId = ec.util.cookie.get('cartId');
var cartAdded = ec.util.cookie.get('cartAdded');
if (cartAdded && cartAdded != cartId) {
ec.util.cookie.set('cartAdded', null)
}
$('#login_status').hover(function () {
ec.account.getAccountInfo(ec.account.showCustoemrInfo)
}, function () {
})
});
ec.account.showVipInfo = function () {
if (ec.account.userState && ec.account.userState == '1') {
$('#vip-inActive').hide();
$('#vip-Active i').removeClass().addClass('icon-vip-level-' + ec.account.custGrade);
$('#vip-Active').attr('title', 'VMALL V' + ec.account.custGrade + '会员');
$('#vip-Active').show();
var html = [
];
html.push('<em class="vip-state" id="vip-info">&nbsp;&nbsp;&nbsp;&nbsp;');
html.push('<a href="/member/point" title="VMALL V' + ec.account.custGrade + '会员" id="vip-Active" ><i class="icon-vip-level-' + ec.account.custGrade + '"></i></a>');
html.push('</em>');
$('#cart_unlogin_info p').append(html.join(''));
$('#vip-Active-top i').removeClass().addClass('icon-vip-level-' + ec.account.custGrade);
$('#vip-Active-top').attr('title', 'VMALL V' + ec.account.custGrade + '会员');
$('#vip-Active-gg').removeClass().addClass('icon-vip-level-' + ec.account.custGrade);
if (ec.account.custGrade == '0') {
$('#oldPeople').hide();
$('#newPeople').show()
} else {
$('#oldPeople').show();
$('#newPeople').hide()
}
} else if (ec.account.isValCas && 'false' == ec.account.isValCas) {
$('#vip-inActive').hide();
$('#vip-Active').hide();
$('#vip-Active-top').removeClass().addClass('icon-vip-level-0');
$('#vip-Active-gg').removeClass().addClass('icon-vip-level-0');
$('#oldPeople').hide();
$('#newPeople').show()
} else {
$('#cart_unlogin_info p').append('&nbsp;&nbsp;<em class="vip-state"><a class="link-noAct" href="/member/account" id="vip-inActive" title="请完善个人信息，即刻享受会员特权">去激活</a></em>');
$('#vip-inActive').show();
$('#vip-Active').hide();
$('#vip-Active-top').removeClass().addClass('icon-vip-level-0');
$('#vip-Active-gg').removeClass().addClass('icon-vip-level-0');
$('#oldPeople').hide();
$('#newPeople').show()
}
};
ec.pkg('ec.minicart');
ec.minicart.processCheck = function (cartInfo) {
var itemList = cartInfo.itemInfos;
for (var i = 0; i < itemList.length; i++) {
var item = itemList[i];
if (item.itemType == 'P') {
if (item.selected == '1') {
itemList[i].checked = true
} else {
itemList[i].checked = false
}
} else {
if (item.selected == '1') {
itemList[i].checked = true
} else {
itemList[i].checked = false
}
}
}
};
ec.minicart.bundls = function (cartInfo) {
var itemList = cartInfo.itemInfos;
for (var i = 0; i < itemList.length; i++) {
var item = itemList[i];
if (item.itemType == 'B' || item.itemType == 'P') {
for (var j = 0; j < item.subItems.length; j++) {
if (item.subItems[j].itemType == 'B' || item.subItems[j].itemType == 'P') {
if (item.subItems[j].invalidCauseReason != 0) {
if (item.subItems[j].invalidCauseReason == 7) {
  if (item.subItems[j].qty > item.subItems[j].invalidCauseLeftValue) {
    itemList[i].show = 'false';
    itemList[i].showP = 'false'
  } else {
  }
} else {
  itemList[i].show = 'false';
  itemList[i].showP = 'false'
}
if (item.subItems[j].invalidCauseReason != 7 && item.subItems[j].invalidCauseReason != 8) {
  itemList[i].notbuyLimit = 'true'
}
}
}
}
}
if (item.invalidCauseReason != 0) {
if (item.invalidCauseReason == 7) {
if (item.qty > item.invalidCauseLeftValue) {
itemList[i].show = 'false'
} else {
}
} else {
itemList[i].show = 'false'
}
}
if (item.lost || item.numblimit) {
itemList[i].show = 'false'
}
if (item.lost) {
if (item.itemType == 'P') {
itemList[i].showP = 'false'
}
}
}
};
ec.minicart.limitnumber = function (item) {
var limit = item.invalidCauseLeftValue;
if (limit < 0) limit = 1;
if (limit == 0) {
if (item.sbom.productLimit != 0 && item.sbom.sbomLimit != 0) {
return Math.min(item.sbom.productLimit, item.sbom.sbomLimit)
} else if (item.sbom.productLimit != 0) {
return item.sbom.productLimit
} else if (item.sbom.sbomLimit != 0) {
return item.sbom.sbomLimit
} else {
return 999
}
}
return limit
};
ec.minicart.bundleNoBuy = function (cartInfo) {
var itemList = cartInfo.itemInfos;
for (var i = 0; i < itemList.length; i++) {
if (itemList[i].itemType != 'B') var qty = itemList[i].qty;
var qtylimit = [
];
var qtylose = [
];
var qtyJ = [
];
for (var j = 0; j < itemList.length; j++) {
if (itemList[j].itemId != itemList[i].itemId) {
if (itemList[j].itemCode == itemList[i].itemCode) {
qty += itemList[j].qty;
qtylimit.push(j)
} else {
if (itemList[j].subItems.length > 0) {
for (var k = 0; k < itemList[j].subItems.length; k++) {
  if (itemList[j].subItems[k].itemType == 'P' && itemList[j].subItems[k].itemCode == itemList[i].itemCode) {
    qty += itemList[j].subItems[k].qty;
    qtylose.push(j)
  }
  if (itemList[j].subItems[k].itemType == 'J' && itemList[j].subItems[k].itemCode == itemList[i].itemCode) {
    qty += itemList[j].subItems[k].qty;
    qtyJ.push({
      home: j,
      sub: k
    })
  }
}
}
}
}
}
if (itemList[i].itemType != 'B' && itemList[i].itemType != 'P' && itemList[i].itemType != 'DP') {
var homelimit = ec.minicart.limitnumber(itemList[i]);
if (qty > homelimit) {
itemList[i].numblimit = true;
if (qtylimit.length > 0) {
for (var l = 0; l < qtylimit.length; l++) {
itemList[qtylimit[l]].numblimit = true
}
}
if (qtylose.length > 0) {
for (var m = 0; m < qtylose.length; m++) {
itemList[qtylose[m]].lost = true
}
}
if (qtyJ.length > 0) {
for (var n = 0; n < qtyJ.length; n++) {
itemList[qtyJ[n].home].subItems[qtyJ[n].sub].Jlost = true
}
}
}
}
if (itemList[i].subItems.length > 0) {
for (var o = 0; o < itemList[i].subItems.length; o++) {
if (itemList[i].subItems[o].itemType == 'P' || itemList[i].subItems[o].itemType == 'DP' || itemList[i].subItems[o].itemType == 'B') {
var bundlelimit = ec.minicart.limitnumber(itemList[i].subItems[o]);
var bqty = itemList[i].qty;
var bqtylimit = [
];
var bqtylose = [
];
var bqtyJ = [
];
for (var p = 0; p < itemList.length; p++) {
if (itemList[i].itemId != itemList[p].itemId) {
  if (itemList[p].itemCode == itemList[i].subItems[o].itemCode) {
    bqty += itemList[p].qty;
    bqtylimit.push(p)
  } else {
    if (itemList[p].subItems.length > 0) {
      for (var q = 0; q < itemList[p].subItems.length; q++) {
        if (itemList[p].subItems[q].itemType == 'P' && itemList[p].subItems[q].itemCode == itemList[i].subItems[o].itemCode) {
          bqty += itemList[p].subItems[q].qty;
          bqtylose.push(p)
        }
        if (itemList[p].subItems[q].itemType == 'J' && itemList[p].subItems[q].itemCode == itemList[i].subItems[o].itemCode) {
          bqty += itemList[p].subItems[q].qty;
          bqtyJ.push({
            home: p,
            sub: q
          })
        }
      }
    }
  }
}
}
if (bqty > bundlelimit) {
itemList[i].numblimit = true;
itemList[i].lost = true;
if (bqtylimit.length > 0) {
  for (var r = 0; r < bqtylimit.length; r++) {
    itemList[bqtylimit[r]].numblimit = true
  }
}
if (bqtylose.length > 0) {
  for (var s = 0; s < bqtylose.length; s++) {
    itemList[bqtylose[s]].lost = true
  }
}
if (bqtyJ.length > 0) {
  for (var t = 0; t < bqtyJ.length; t++) {
    itemList[bqtyJ[t].home].subItems[bqtyJ[t].sub].Jlost = true
  }
}
}
}
}
}
}
};
ec.minicart.photos = function (cartInfo) {
var itemList = cartInfo.itemInfos;
for (var i = 0; i < itemList.length; i++) {
var item = itemList[i];
itemList[i].itemkd = item.itemId.replace(/\./g, '-');
if (item.itemType == 'B') {
itemList[i].photoName = item.subItems[0].sbom['photoName'];
itemList[i].photoPath = item.subItems[0].sbom['photoPath'];
itemList[i].photoId = item.subItems[0].sbom['productId'];
itemList[i].skuId = item.subItems[0].skuId
} else {
itemList[i].photoName = item.sbom['photoName'];
itemList[i].photoPath = item.sbom['photoPath'];
itemList[i].productId = item.sbom['productId']
}
}
};
ec.minicart.setNum = function (num) {
if ('undefined' === typeof num) {
return false
}
num = parseInt(num) || 0;
$('#cart-total').html(num);
if (num > 99) num = '99+';
$('#header-cart-total').html(num);
if (num < 1) {
$('.j-hungBar .hungBar-cart span').html('').hide()
} else {
$('.j-hungBar .hungBar-cart span').html(num).show()
}
};
ec.minicart.updateMiniCartNum = function () {
ec.cart.getMicroCartTotalNumber(function (json) {
if (json) ec.minicart.setNum(json.data)
})
};
ec.minicart.readyContent = function () {
ec.minicart.updateMiniCartNum()
};
ec.minicart.content = function () {
ec.cart.getMicroCartFromOrder(function (json) {
if (json.resultCode == '200000') {
var cartVO = json.data,
$cartEmpty = $('#minicart-pro-empty'),
$cartList = $('#minicart-pro-list-block'),
$cartSettleup = $('#minicart-pro-settleup');
var cartInfo = cartVO;
if (ec.minicart.microCartTpl) {
var num = 0;
if (cartInfo.totalNumber == 0) {
$('#button-minicart-go2confirm').hide();
$('#disbutton-minicart-go2confirm').show()
} else {
$('#button-minicart-go2confirm').show();
$('#disbutton-minicart-go2confirm').hide()
}
if (cartInfo.originalTotalNumber > 0) {
ec.minicart.setNum(cartInfo.originalTotalNumber);
$('#micro-cart-totalPrice').html('&yen;&nbsp;' + cartInfo.cashPay.toFixed(2));
if (cartInfo.originalPrice != cartInfo.cashPay) {
$('#micro-cart-totalOriginPrice').html('&yen;&nbsp;' + cartInfo.originalPrice.toFixed(2))
} else {
$('#micro-cart-totalOriginPrice').html('')
}
ec.minicart.photos(json.data);
ec.minicart.bundleNoBuy(json.data);
ec.minicart.bundls(json.data);
for (var i = 0; i < json.data.itemInfos.length; i++) {
if (json.data.itemInfos[i].itemName.indexOf('script') > 0) {
  json.data.itemInfos[i].itemName = safeStr(json.data.itemInfos[i].itemName)
}
}
html = ec.minicart.microCartTpl.parse('microCartList', json.data);
$('#minicart-goods-list').html(html);
$cartList.show();
$cartSettleup.show();
$cartEmpty.hide();
if (cartInfo.itemInfos.length > 5) {
$cartList.addClass('minicart-pro-list-scroll')
} else {
$cartList.removeClass('minicart-pro-list-scroll')
}
for (var i = 0; i < json.data.itemInfos.length; i++) {
if (json.data.itemInfos[i].show == 'false' && json.data.itemInfos[i].selected) {
  ec.minicart.dissome(json.data.itemInfos[i].itemId)
}
}
} else {
ec.minicart.setNum(0);
$cartEmpty.show();
$cartList.hide();
$cartSettleup.hide()
}
}
}
if (json.resultCode == '34900') {
$('#cartInfo').html('商城火爆销售中，请您稍候再试。')
}
})
};
ec.minicart.click = function (thix) {
ec.minicart.clickTo(thix)
};
ec.minicart.clickTo = function (thix) {
ec.minicart.click.send(thix, function (json) {
if (json.msg == 'success') {
var cartInfo = json.cartInfo.cartVO;
if (cartInfo.miniTotalNumber > 0) {
$('#button-minicart-go2confirm').show();
$('#disbutton-minicart-go2confirm').hide();
$('#micro-cart-totalPrice').html('&yen;&nbsp;' + cartInfo.miniTotalPrice.toFixed(2));
if (cartInfo.miniTotalOriginalPrice != cartInfo.miniTotalPrice) {
$('#micro-cart-totalOriginPrice').html('&yen;&nbsp;' + cartInfo.miniTotalOriginalPrice.toFixed(2))
} else {
$('#micro-cart-totalOriginPrice').html('')
}
} else {
$('#button-minicart-go2confirm').hide();
$('#disbutton-minicart-go2confirm').show();
$('#micro-cart-totalPrice').html('&yen;&nbsp;0.00');
$('#micro-cart-totalOriginPrice').html('')
}
}
if (json.resultCode == '200000') {
var cartInfo = json.data;
if (cartInfo.totalNumber > 0) {
$('#button-minicart-go2confirm').show();
$('#disbutton-minicart-go2confirm').hide();
$('#micro-cart-totalPrice').html('&yen;&nbsp;' + cartInfo.cashPay.toFixed(2));
if (cartInfo.cashPay != cartInfo.originalPrice) {
$('#micro-cart-totalOriginPrice').html('&yen;&nbsp;' + cartInfo.originalPrice.toFixed(2))
} else {
$('#micro-cart-totalOriginPrice').html('')
}
} else {
$('#button-minicart-go2confirm').hide();
$('#disbutton-minicart-go2confirm').show();
$('#micro-cart-totalPrice').html('&yen;&nbsp;0.00');
$('#micro-cart-totalOriginPrice').html('')
}
}
})
};
ec.minicart.convertToCart = function (argList) {
var sbs = [
],
types = [
],
qtys = [
],
ess = [
],
gfs = [
],
ops = [
];
for (var i = 0; i < argList.length; i++) {
orderItem = argList[i];
if (orderItem.itemType == 'S0') {
sbs.push(orderItem.itemId);
if (orderItem.itemProp && orderItem.itemProp['Internal_Purchase'] && orderItem.itemProp['Internal_Purchase'] == 'true') {
types.push(8)
} else {
types.push(1)
}
qtys.push(orderItem.qty);
ess.push('');
var gifts = [
];
if (orderItem.gifts && orderItem.gifts.length > 0) {
for (var g = 0; g < orderItem.gifts.length; g++) {
gifts.push(orderItem.gifts[g].sbomCode)
}
}
gfs.push(gifts.join('-'));
ops.push(orderItem.operation)
}
if (orderItem.itemType == 'S1') {
sbs.push(orderItem.itemId);
types.push(6);
qtys.push(orderItem.qty);
ess.push(orderItem.mainItemid);
gfs.push('');
ops.push(orderItem.operation)
}
if (orderItem.itemType == 'S6') {
sbs.push(orderItem.itemId);
types.push(7);
qtys.push(orderItem.qty);
ess.push(orderItem.mainItemid);
gfs.push('');
ops.push(orderItem.operation)
}
if (orderItem.itemType == 'B') {
sbs.push(orderItem.itemId);
if (orderItem.itemProp && orderItem.itemProp['Internal_Purchase'] && orderItem.itemProp['Internal_Purchase'] == 'true') {
types.push(9)
} else {
types.push(2)
}
qtys.push(orderItem.qty);
ess.push('');
gfs.push('');
ops.push(orderItem.operation)
}
if (orderItem.itemType == '20') {
sbs.push(orderItem.itemId);
types.push(20);
qtys.push(orderItem.qty);
ess.push(orderItem.mainItemid);
gfs.push('');
ops.push(orderItem.operation)
}
}
var data = {
};
data.sbs = sbs.join(',');
data.types = types.join(',');
data.qtys = qtys.join(',');
data.ess = ess.join(',');
data.gfs = gfs.join(',');
data.ops = ops.join(',');
return data
};
ec.minicart.click.send = function (thix, callback) {
var url;
var id = $(thix).attr('value'),
type = $(thix).attr('type'),
operation = 5;
var itemId = $(thix).attr('data-itemId').replace(/\./g, '-');
ec.minicart.checkboxInverse(itemId);
$('#button-minicart-go2confirm').show();
$('#disbutton-minicart-go2confirm').hide();
var operation = 5;
if ($('#icon-choose-' + itemId).hasClass('icon-choose') && $('#checkbox-' + itemId).attr('checked')) {
operation = 5
} else {
operation = 6
}
var data = {
};
var lists = [
];
lists.push($(thix).attr('data-itemId'));
data.mainItemIds = JSON.stringify(lists);
if (operation == 5) {
url = openApiDomain + '/cart/v1/select.json'
} else {
url = openApiDomain + '/cart/v1/disselect.json'
}
$.ajax({
url: url,
type: 'post',
dataType: 'json',
contentType: 'text/plain',
timeout: 10000,
traditional: true,
data: JSON.stringify(data),
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (result) {
callback(result)
}
})
};
ec.minicart.dissome = function (paras) {
ec.minicart.dissomeTO(paras)
};
ec.minicart.dissomeTO = function (paras) {
ec.minicart.dissome.send(paras, function (json) {
if (json.resultCode == '200000') {
var cartInfo = json.data;
if (cartInfo.totalNumber > 0) {
$('#button-minicart-go2confirm').show();
$('#disbutton-minicart-go2confirm').hide();
$('#micro-cart-totalPrice').html('&yen;&nbsp;' + cartInfo.cashPay.toFixed(2));
if (cartInfo.cashPay != cartInfo.originalPrice) {
$('#micro-cart-totalOriginPrice').html('&yen;&nbsp;' + cartInfo.originalPrice.toFixed(2))
} else {
$('#micro-cart-totalOriginPrice').html('')
}
} else {
$('#button-minicart-go2confirm').hide();
$('#disbutton-minicart-go2confirm').show();
$('#micro-cart-totalPrice').html('&yen;&nbsp;0.00');
$('#micro-cart-totalOriginPrice').html('')
}
}
})
};
ec.minicart.dissome.send = function (paras, callback) {
var url;
var data = {
};
var lists = [
];
lists.push(paras);
data.mainItemIds = JSON.stringify(lists);
url = openApiDomain + '/cart/v1/disselect.json';
$.ajax({
url: url,
type: 'post',
dataType: 'json',
contentType: 'text/plain',
timeout: 10000,
traditional: true,
data: JSON.stringify(data),
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (result) {
callback(result)
}
})
};
ec.minicart.selectedItemIsEmpty = function () {
var selected = $('#minicart-goods-list input[name=\'skuIds\']:checked').length + $('#minicart-goods-list input[name=\'bundleIds\']:checked').length;
if (selected == 0) {
ec.minicart.setNum(0);
$('#micro-cart-totalPrice').html('&yen;&nbsp;0.00');
$('#micro-cart-totalOriginPrice').html('');
$('#button-minicart-go2confirm').hide();
$('#disbutton-minicart-go2confirm').show();
return true
}
return false
};
ec.minicart.checkboxInverse = function (itemId) {
if ($('#icon-choose-' + itemId).hasClass('icon-choose')) {
$('#icon-choose-' + itemId).removeClass('icon-choose').addClass('icon-choose-normal');
$('#checkbox-' + itemId).prop('checked', false)
} else {
$('#icon-choose-' + itemId).removeClass('icon-choose-normal').addClass('icon-choose');
$('#checkbox-' + itemId).prop('checked', true)
}
};
ec.minicart.buildOrderItemReqArgList = function () {
var $skus = $('#minicart-goods-list input[name=\'skuIds\']:checked');
var $bundles = $('#minicart-goods-list input[name=\'bundleIds\']:checked');
var orderItemReqArgList = [
];
$skus.each(function () {
var $tbody = $(this).closest('li');
var id = this.value;
var qty = $('#quantity-' + id, $tbody).val();
var type = $('#quantity-' + id, $tbody).attr('data-type');
var orderitem = {
};
var extendItem = {
};
var accidentItem = {
};
var giftItem = {
};
var extendId = $('input[name="extendIds"]', $tbody).val();
if (extendId) {
extendItem.itemId = extendId;
extendItem.qty = qty;
extendItem.itemType = 'S1';
extendItem.mainItemid = id;
orderItemReqArgList.push(extendItem)
}
var accidentId = $('input[name="accidentIds"]', $tbody).val();
if (accidentId) {
accidentItem.itemId = accidentId;
accidentItem.qty = qty;
accidentItem.itemType = 'S6';
accidentItem.itemProp = {
accidentItem: id
};
accidentItem.mainItemid = id;
orderItemReqArgList.push(accidentItem)
}
var preferIds = $('#preferIds_' + id).attr('skuids');
if (preferIds) {
var sbomCodes = preferIds.split(',');
for (var i = 0; i < sbomCodes.length; i++) {
if (sbomCodes[i] != '') {
var preferItem = {
};
preferItem.itemId = sbomCodes[i];
preferItem.qty = '1';
preferItem.itemType = '20';
preferItem.mainItemid = id;
orderItemReqArgList.push(preferItem)
}
}
}
if (qty) {
orderitem.itemId = id;
orderitem.qty = qty;
if (type == '1') {
orderitem.itemType = 'S0'
}
if (type == '8') {
orderitem.itemType = 'S0';
orderitem.itemProp = {
Internal_Purchase: 'true'
}
}
if (type == '2') {
orderitem.itemType = 'B'
}
if (type == '9') {
orderitem.itemType = 'B';
orderitem.itemProp = {
Internal_Purchase: 'true'
}
}
var giftSbomCodes = $('#gift_sbomCodes_' + id).val();
if (giftSbomCodes) {
var gifts = [
];
var sbomCodes = giftSbomCodes.split(',');
for (var i = 0; i < sbomCodes.length; i++) {
if (sbomCodes[i] != '') {
var gift = {
};
gift.sbomCode = sbomCodes[i];
gifts.push(gift)
}
}
orderitem.gifts = gifts
}
orderItemReqArgList.push(orderitem)
}
});
$bundles.each(function () {
var $tbody = $(this).closest('li');
var id = this.value;
var qty = $('#quantity-' + id, $tbody).val();
var type = $('#quantity-' + id, $tbody).attr('data-type');
var orderitem = {
};
if (qty) {
orderitem.itemId = id;
orderitem.qty = qty;
if (type == '2') {
orderitem.itemType = 'B'
}
if (type == '9') {
orderitem.itemType = 'B';
orderitem.itemProp = {
Internal_Purchase: 'true'
}
}
orderItemReqArgList.push(orderitem)
}
});
return orderItemReqArgList
};
ec.minicart.confirm = function () {
var $skus = $('#minicart-goods-list input[name=\'skuIds\']:checked');
var $bundles = $('#minicart-goods-list input[name=\'bundleIds\']:checked');
if ($skus.length == 0 && $bundles.length == 0) {
alert('请至少选中一个商品！');
return
}
if (!ec.account.isLogin()) {
ec.redirectTo($('#top-index-loginUrl').attr('href'))
}
var orderItemReqArgList = [
];
$skus.each(function () {
var itemId = $(this).attr('data-itemId').replace(/\./g, '-');
var $tbody = $(this).closest('li');
var id = this.value;
var skuCode = $(this).attr('data-scode');
var qty = $('#quantity-' + id, $tbody).val();
var type = $('#quantity-' + id, $tbody).attr('data-type');
var bundle = $('#bundle-' + itemId).val();
var orderitem = {
};
var extendItem = {
};
var accidentItem = {
};
if (qty) {
orderitem.itemId = skuCode;
orderitem.qty = qty;
orderitem.itemType = type;
orderitem.id = $(this).attr('data-itemId');
if (type == 'P') {
var packageCodeList = {
package_code: bundle
};
orderitem.itemProp = packageCodeList
}
var $gifts = $('input[name="giftId"]', $tbody);
if ($gifts.length > 0) {
var gifts2Order = [
];
$gifts.each(function () {
var aGift = {
sbomCode: this.value
};
var gGroup = $(this).attr('data-group');
if (gGroup) aGift.group = gGroup;
gifts2Order.push(aGift)
});
orderitem.gifts = gifts2Order
}
orderitem.subOrderItemReqArgs = [
];
var $newBundle = $('#bundle-' + itemId).attr('data-scode');
if ($newBundle) {
orderitem.subOrderItemReqArgs = [
];
$.each($newBundle.split(','), function (index, value) {
if (value != '') {
var apack = {
  itemId: value,
  qty: qty,
  itemType: 'P'
};
orderitem.subOrderItemReqArgs.push(apack)
}
})
}
if (orderitem.itemType === 'DP') {
var $dpobj = $('#dpPackage-' + itemId);
orderitem.itemProp = {
dp_package_code: $dpobj.attr('data-dpcode')
};
$.each($dpobj.val().split('|'), function (index, value) {
if (value != '') {
var dpsub = value.split(',');
orderitem.subOrderItemReqArgs.push({
  itemId: dpsub[0],
  qty: qty,
  itemType: 'DP',
  itemProp: {
    dp_group: dpsub[1]
  }
})
}
})
}
var extendId = $('input[name="extendIds"]', $tbody).attr('data-scode');
if (extendId) {
extendItem.itemId = extendId;
extendItem.qty = qty;
extendItem.itemType = 'S1';
extendItem.mainSkuCode = skuCode;
orderitem.subOrderItemReqArgs.push(extendItem)
}
var accidentId = $('input[name="accidentIds"]', $tbody).attr('data-scode');
if (accidentId) {
accidentItem.itemId = accidentId;
accidentItem.qty = qty;
accidentItem.itemType = 'S6';
accidentItem.mainSkuCode = skuCode;
orderitem.subOrderItemReqArgs.push(accidentItem)
}
var ucareId = $('input[name="ucareIds"]', $tbody).attr('data-scode');
if (ucareId) {
var subItem = {
};
subItem.itemId = ucareId;
subItem.qty = qty;
subItem.itemType = 'S15';
subItem.mainSkuCode = skuCode;
orderitem.subOrderItemReqArgs.push(subItem)
}
var preferIds = $('#preferIds_' + id).val();
if (preferIds) {
var sbomCodes = preferIds.split(',');
for (var i = 0; i < sbomCodes.length; i++) {
if (sbomCodes[i] != '') {
var preferItem = {
};
preferItem.itemId = sbomCodes[i];
preferItem.qty = '1';
preferItem.itemType = 'J';
preferItem.mainSkuCode = skuCode;
orderitem.subOrderItemReqArgs.push(preferItem)
}
}
}
orderItemReqArgList.push(orderitem)
}
});
$bundles.each(function () {
var $tbody = $(this).closest('li');
var id = this.value;
var qty = $('#quantity-' + id, $tbody).val();
var type = $('#quantity-' + id, $tbody).attr('data-type');
var orderitem = {
};
if (qty) {
orderitem.itemId = id;
orderitem.qty = qty;
orderitem.itemType = type;
orderItemReqArgList.push(orderitem)
}
});
var jsonReqArg = ec.lang.json.stringify(orderItemReqArgList);
setTimeout(function () {
ec.cart.confirm(1, jsonReqArg)
}, 500)
};
ec.pkg('ec.product');
ec.product.history = {
load: function (callback, size, pid) {
$.ajax({
url: '/product/browsed/query.json',
type: 'get',
data: {
size: size ? size : undefined,
pid: pid ? pid : undefined
},
dataType: 'json',
success: function (json) {
if (!json.success) return;
callback(json.list || [
])
}
})
},
add: function (id) {
$.ajax({
type: 'POST',
url: '/product/browsed/add?_t=' + (new Date).getTime(),
dataType: 'json',
data: {
id: id
},
timeout: 10000,
success: function () {
},
error: function () {
}
})
},
clear: function (callback) {
$.ajax({
type: 'POST',
url: '/product/browsed/clear?_t=' + (new Date).getTime(),
dataType: 'json',
timeout: 10000,
success: function (json) {
if (callback) {
callback()
}
},
error: function () {
if (callback) {
callback()
}
}
})
}
};
ec.product.inventory = {
_data: {
},
loaded: false,
set: function (id, haveInventory) {
this._data[id] = haveInventory;
setTimeout(function () {
ec.product.inventory.loaded = true
})
},
haveInventory: function (id) {
return this._data[id]
},
wait: function (callback) {
if (this.loaded) {
callback()
} else {
setTimeout(function () {
ec.product.inventory.wait(callback)
}, 15)
}
}
};
ec.product.getSysDate = function () {
var now = new Date;
$.ajax({
async: false,
url: '/system/getSysDate.json?' + (new Date).getTime(),
timeout: 10000,
success: function (json) {
if (!ec.util.isEmpty(json.now)) {
now.setTime(ec.util.parseDate(json.now))
}
}
});
return now
};
ec.pkg('ec.cart');
ec.cart.productTypeCorrespondence = function (productType) {
if (productType == 1) {
productType = 'S0'
} else if (productType == 2) {
productType = 'B'
} else if (productType == 6) {
productType = 'S1'
} else if (productType == 7) {
productType = 'S6'
} else if (productType == 8) {
productType = 'S0'
} else if (productType == 9) {
productType = 'B'
} else if (productType == 20) {
productType = '20'
} else {
productType = 'S0'
}
return productType
};
ec.cart.add = function (paras, options) {
var data = {
};
var cartNumber = 'add.json';
if (paras.number == 1) {
cartNumber = 'addMulti.json';
data.mainItems = paras.cartjson
} else {
data.mainItem = paras.cartjson
}
$.ajax({
url: openApiDomain + '/cart/v1/' + cartNumber,
dataType: 'json',
contentType: 'text/plain',
type: 'post',
timeout: 30000,
traditional: true,
data: JSON.stringify(data),
success: function (result) {
if (result.resultCode != 200000) {
if (options.errorFunction) {
result.msg = '已超购物车数量上限，您可以选择立即下单';
options.errorFunction(result)
}
return
}
if (options.successFunction) {
ec.util.cookie.set('cartAdded', ec.util.cookie.get('cartId'));
options.successFunction(result)
}
},
error: function (xhr, msg, e) {
if (options.errorFunction) {
var result = {
};
result.msg = '购物车繁忙，您可以选择立即下单';
if ('/member/enterprise' === location.pathname) {
result.msg = '购物车繁忙，请稍后重试'
}
if (xhr && xhr.responseJSON && xhr.responseJSON.resultCode === '200917') {
alertBox('页面已失效，请您刷新页面后重新操作', function () {
location.reload()
});
return false
}
options.errorFunction(result)
}
}
})
};
ec.cart.getCartTotalNumber = function (callback, optional) {
if (!ec.util.cookie.get('cartId') && !ec.account.isLogin()) {
return
}
$.ajax({
url: openApiDomain + '/cart/v1/getTotalNum.json?t=' + (new Date).getTime() + '&saleChannel=1001&salePortal=1',
dataType: 'json',
timeout: 10000,
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (json) {
if (json.resultCode == 200000) {
callback(json, optional)
} else {
callback(null, optional)
}
}
})
};
ec.cart.getCartItemsInternal = function (callback, optional) {
var cartId = ec.util.cookie.get('cartId');
if (ec.util.cookie.get('salePortal') != 1) {
document.cookie = 'salePortal=1; domain=.vmall.com; path=/'
}
$.ajax({
url: openApiDomain + '/cart/v1/queryCart.json?salePortal=1&t=' + (new Date).getTime(),
dataType: 'json',
timeout: 10000,
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (json) {
if (json && json.data && json.data.itemInfos) {
json.data.itemInfos.forEach(function (item) {
if (item.itemType == 'DP') {
if (item.invalidCauseReason == 6) {
  item.invalidCauseReason = 106
} else if (item.invalidCauseReason == 7) {
  if (!item.numblimit) item.invalidCauseReason = 101
} else if (item.invalidCauseReason > 0) {
  item.invalidCauseReason = 101
}
}
if (item.itemType == 'P') {
if (item.invalidCauseReason == 6) {
  item.invalidCauseReason = 106
} else if (item.invalidCauseReason == 7) {
  if (!item.numblimit) item.invalidCauseReason = 101
} else if (item.invalidCauseReason > 0) {
  item.invalidCauseReason = 101
} else {
  var subItems = item.subItems;
  for (var i = 0; i < subItems.length; i++) {
    if (subItems[i].itemType == 'P' && subItems[i].invalidCauseReason > 0) {
      item.invalidCauseReason = 101
    }
  }
}
}
var subItems = item.subItems;
var giftInvalidCauseReason = 0;
for (var i = 0; i < subItems.length; i++) {
if (subItems[i].itemType == 'G' && subItems[i].invalidCauseReason > 0 && subItems[i].attrsMap && subItems[i].attrsMap.g_group) {
  giftInvalidCauseReason = subItems[i].invalidCauseReason;
  break
}
}
if (giftInvalidCauseReason > 0) {
for (var i = 0; i < subItems.length; i++) {
  if (subItems[i].itemType == 'G' && subItems[i].attrsMap && subItems[i].attrsMap.g_group) {
    subItems[i].invalidCauseReason = giftInvalidCauseReason
  }
}
}
})
}
if (json.resultCode == 200000) {
callback(json, optional)
} else {
callback(json, optional)
}
}
});
ec.minicart.updateMiniCartNum()
};
ec.cart.getCartItems = function (callback, optional) {
var cartId = ec.util.cookie.get('cartId');
if (cartId && cartId.length > 0) {
var isValCas = ec.util.cookie.get('isValCas');
if (isValCas && 'false' == isValCas) {
$.ajax({
url: '/account/load',
type: 'POST'
});
isValCas = ec.util.cookie.get('isValCas')
}
if (ec.account.isLogin() && ec.account.id && ec.account.loginName) {
ec.cart.doCache2cart(ec.cart.getCartItemsInternal, callback, optional)
} else {
ec.cart.getCartItemsInternal(callback, optional)
}
} else {
ec.cart.getCartItemsInternal(callback, optional)
}
};
ec.cart.buildQueryData = function (cartItems) {
var ids = [
];
var types = [
];
var quantitys = [
];
var mainskus = [
];
for (var i = 0; i < cartItems.length; i++) {
var cartItem = cartItems[i];
if (cartItem.skuId) {
ids.push(cartItem.skuId)
} else if (cartItem.bundleId) {
ids.push(cartItem.bundleId)
} else {
continue
}
types.push(cartItem.productType);
quantitys.push(cartItem.quantity);
if (cartItem.mainSkuId) {
mainskus.push(cartItem.mainSkuId)
} else {
mainskus.push('')
}
}
var date = new Date;
return {
sbs: ids.join(','),
types: types.join(','),
qtys: quantitys.join(','),
ess: mainskus.join(','),
t: date.getTime()
}
};
ec.cart.getOnceCartInfo = function (cartItems, callback, i) {
var data = ec.cart.buildQueryData(cartItems);
$.ajax({
url: domainMain + '/order/shoppingCart/newCart.json',
dataType: 'json',
timeout: 10000,
traditional: true,
data: data,
success: function (result) {
if (i != null) {
callback(result, i)
} else {
if (!result.success || !result.cartInfo) {
return
} else {
callback(result)
}
}
},
error: function () {
if (i != null) {
var result = {
};
result.success = false;
callback(result, i)
}
}
})
};
ec.cart.batchCount = 50;
ec.cart.getCartInfo = function (cartItems, callback) {
if (!cartItems || cartItems.length == 0) {
callback({
});
return
}
if (cartItems.length <= ec.cart.batchCount) {
ec.cart.getOnceCartInfo(cartItems, callback)
} else {
var batchs = [
];
var currentBundleBatch = [
];
var currentSkuBatch = [
];
outer: for (var i = 0; i < cartItems.length; i++) {
var cartItem = cartItems[i];
if (cartItem.productType == 1) {
currentSkuBatch.push(cartItem);
if (currentSkuBatch.length == ec.cart.batchCount) {
batchs.push(currentSkuBatch);
currentSkuBatch = [
]
}
} else if (cartItem.productType == 6) {
for (var j = 0; j < batchs.length; j++) {
var batch = batchs[j];
if (batch[0].productType == 1) {
for (var k = 0; k < batch.length; k++) {
  if (batch[k].skuId == cartItem.mainSkuId) {
    batch.push(cartItem);
    continue outer
  }
}
}
}
for (var j = 0; j < currentSkuBatch.length; j++) {
if (currentSkuBatch[j].skuId == cartItem.mainSkuId) {
currentSkuBatch.push(cartItem)
}
}
} else {
currentBundleBatch.push(cartItem);
if (currentBundleBatch.length == ec.cart.batchCount) {
batchs.push(currentBundleBatch);
currentBundleBatch = [
]
}
}
}
if (currentBundleBatch.length > 0) {
if (currentBundleBatch.length + currentSkuBatch.length <= ec.cart.batchCount) {
currentBundleBatch.push(currentSkuBatch);
batchs.push(currentBundleBatch)
} else {
batchs.push(currentBundleBatch);
batchs.push(currentSkuBatch)
}
} else {
if (currentSkuBatch.length > 0) {
batchs.push(currentSkuBatch)
}
}
var total = {
};
total.cartInfo = {
};
total.cartInfo.bundlerList = [
];
total.cartInfo.productList = [
];
total.cartInfo.couponList = [
];
total.cartInfo.premiumsList = [
];
total.cartInfo.totalOriginalPrice = 0;
total.cartInfo.totalPrice = 0;
total.limitstock = [
];
total.understock = [
];
var got = 0;
for (var i = 0; i < batchs.length; i++) {
var batch = batchs[i];
ec.cart.getOnceCartInfo(batch, function (result, i) {
got += 1;
if (result.success && result.cartInfo) {
if (result.cartInfo.bundlerList && result.cartInfo.bundlerList.length > 0) {
total.cartInfo.bundlerList = total.cartInfo.bundlerList.concat(result.cartInfo.bundlerList)
}
if (result.cartInfo.productList && result.cartInfo.productList.length > 0) {
total.cartInfo.productList = total.cartInfo.productList.concat(result.cartInfo.productList)
}
if (result.cartInfo.couponList && result.cartInfo.couponList.length > 0) {
total.cartInfo.couponList = total.cartInfo.couponList.concat(result.cartInfo.couponList)
}
if (result.cartInfo.premiumsList && result.cartInfo.premiumsList.length > 0) {
total.cartInfo.premiumsList = total.cartInfo.premiumsList.concat(result.cartInfo.premiumsList)
}
total.cartInfo.totalOriginalPrice += result.cartInfo.totalOriginalPrice;
total.cartInfo.totalPrice += result.cartInfo.totalPrice;
if (result.limitstock && result.limitstock.length > 0) {
total.limitstock = total.limitstock.concat(result.limitstock)
}
if (result.understock && result.understock.length > 0) {
total.understock = total.understock.concat(result.understock)
}
}
if (got == batchs.length) {
callback(total)
}
}, i)
}
}
};
ec.cart.getCart = function (callback) {
ec.cart.getCartItems(ec.cart.getCartInfo, callback)
};
ec.cart.getCartBaseInfo = function (cartItems, callback) {
};
ec.cart.getCartBase = function (callback) {
ec.cart.getCartItems(ec.cart.getCartBaseInfo, callback)
};
ec.cart.buildMicroCartReq = function (cartItems) {
var orderItemReqArgList = [
];
if (cartItems && cartItems.length > 0) {
for (var i = 0; i < cartItems.length; i++) {
var cartItem = cartItems[i];
var orderitem = {
};
orderitem.itemId = cartItem.skuId;
orderitem.qty = cartItem.quantity;
if (cartItem.productType == '1') {
orderitem.itemType = 'S0';
var gifts2Order = [
];
if (cartItem.giftCartList && cartItem.giftCartList.length > 0) {
for (var j = 0; j < cartItem.giftCartList.length; j++) {
var aGift = {
  sbomCode: cartItem.giftCartList[j].skuId
};
gifts2Order.push(aGift)
}
}
orderitem.gifts = gifts2Order
}
if (cartItem.productType == '8') {
orderitem.itemType = 'S0';
orderitem.itemProp = {
Internal_Purchase: 'true'
}
}
if (cartItem.productType == '6') {
orderitem.itemType = 'S1';
orderitem.itemProp = {
main_skucode: cartItem.mainSkuId
}
}
if (cartItem.productType == '7') {
orderitem.itemType = 'S6';
orderitem.itemProp = {
main_skucode: cartItem.mainSkuId
}
}
if (cartItem.productType == '2') {
orderitem.itemId = cartItem.bundleId;
orderitem.itemType = 'B'
}
if (cartItem.productType == '9') {
orderitem.itemId = cartItem.bundleId;
orderitem.itemType = 'B';
orderitem.itemProp = {
Internal_Purchase: 'true'
}
}
orderItemReqArgList.push(orderitem)
}
}
var jsonReqArg = ec.lang.json.stringify(orderItemReqArgList);
var date = new Date;
var data = {
};
data.cartReqJson = jsonReqArg;
data.t = date.getTime();
return data
};
ec.cart.getMicroCartBaseInfo = function () {
};
ec.cart.doCache2cart = function (doAfterCache, callback, optional) {
var cartId = ec.util.cookie.get('cartId');
var cartAdded = ec.util.cookie.get('cartAdded');
if (!cartAdded || cartAdded != cartId) {
ec.util.cookie.set('cartId', null, {
expires: - 1,
domain: 'vmall.com'
});
if (doAfterCache) {
doAfterCache(callback, optional)
}
return
}
$.ajax({
url: openApiDomain + '/cart/v1/guest2cart.json?t=' + (new Date).getTime(),
type: 'post',
dataType: 'json',
timeout: 10000,
cache: false,
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (json) {
if (doAfterCache) {
doAfterCache(callback, optional)
}
}
})
};
ec.cart.getMicroCartTotalNumber = function (callback) {
var optional = null;
var cartId = ec.util.cookie.get('cartId');
if (cartId && cartId.length > 0) {
var isValCas = ec.util.cookie.get('isValCas');
if (isValCas && 'false' == isValCas) {
$.ajax({
url: '/account/load',
type: 'POST'
});
isValCas = ec.util.cookie.get('isValCas')
}
if (ec.account.isLogin()) {
ec.cart.doCache2cart(ec.cart.getCartTotalNumber, callback, optional)
} else {
ec.cart.getCartTotalNumber(callback, optional)
}
} else {
ec.cart.getCartTotalNumber(callback, optional)
}
};
ec.cart.getMicroCartFromOrder = function (callback) {
var optional = null;
var cartId = ec.util.cookie.get('cartId');
if (cartId && cartId.length > 0) {
var isValCas = ec.util.cookie.get('isValCas');
if (isValCas && 'false' == isValCas) {
$.ajax({
url: '/account/load',
type: 'POST'
});
isValCas = ec.util.cookie.get('isValCas')
}
if (ec.account.isLogin()) {
ec.cart.doCache2cart(ec.cart.getCartItemsInternal, callback, optional)
} else {
ec.cart.getCartItemsInternal(callback, optional)
}
} else {
ec.cart.getCartItemsInternal(callback, optional)
}
};
ec.cart.changeAdded = function (json) {
var cartNumber = null;
if (json && json.cartInfo && json.cartInfo.cartVO) {
cartNumber = json.cartInfo.cartVO.totalNumber >= 0 ? json.cartInfo.cartVO.totalNumber : cartNumber
}
if (json) {
cartNumber = json.cartNumber >= 0 ? json.cartNumber : cartNumber
}
if (cartNumber > 0) {
ec.util.cookie.set('cartAdded', ec.util.cookie.get('cartId'))
}
if (cartNumber == 0) {
ec.util.cookie.set('cartAdded', null)
}
};
ec.cart.setRecover = function (recover) {
ec.util.cookie.set('cart-recover', recover, {
domain: 'vmall.com',
path: '/'
})
};
ec.cart.removeSkuFromRecover = function (skuId, callback) {
var recover = ec.util.cookie.get('cart-recover');
if (recover) {
var rege = new RegExp(',' + skuId + ';\\d+,');
recover = recover.replace(rege, ',');
ec.cart.setRecover(recover)
}
if (callback) {
callback(recover)
}
};
ec.cart.confirm = function (state, jsonReqArg, orderTag) {
var $form = $('#miniCartForm');
$form.append('<input name="orderReqJson" type="hidden" value=\'' + jsonReqArg + '\' />');
if (state) {
$form.append('<input name="state" type="hidden" value="' + state + '" />')
}
if (orderTag) {
$form.append('<input name="routingTag" type="hidden" value="' + orderTag + '" />')
}
$form.submit()
};
ec.pkg('ec.base');
ec.base.findSearchHotWordUrl = function (v) {
var actUrl = '';
for (var swa = 0; swa < ec.search.searchArr.length; swa++) {
var swal = ec.search.searchArr[swa];
if (v == swal.word.transHtmlAttribute()) {
if (swal.isActivityWords == 1) {
if (swal.activityUrl == null || swal.activityUrl == '') {
actUrl = '/search?keyword=' + encodeURIComponent(ec.filteredTxt(v))
} else {
actUrl = swal.activityUrl.transHtmlAttribute()
}
} else {
actUrl = '/search?keyword=' + encodeURIComponent(ec.filteredTxt(v))
}
}
}
return actUrl
};
function pushMsgAssociationalWord(word) {
ec.dapClick(300090101, {
searchWord: word,
type: '4',
urlType: '/search' === location.pathname ? 1 : 2,
click: '1'
})
}
var topSearchKeyword = '';
function search(form) {
var v = $('#search-kw').val();
if (ec.util.isEmpty(v)) {
return false
}
v = $.trim(v);
ec.dapClick(300090101, {
searchWord: v,
type: '1',
urlType: '/search' === location.pathname ? 1 : 2,
click: '1'
});
var searchUrl = ec.base.findSearchHotWordUrl(v);
if (searchUrl == null || searchUrl == '') {
ec.openWindow('/search?keyword=' + encodeURIComponent(ec.filteredTxt(v)))
} else {
ec.openWindow(searchUrl)
}
return false
}
function searchFunc(word) {
ec.dapClick(300090101, {
searchWord: word,
type: '2',
urlType: '/search' === location.pathname ? 1 : 2,
click: '1'
});
ec.openWindow('/search?keyword=' + encodeURIComponent(ec.filteredTxt(word)))
}(function () {
var _flag;
ec.ready(function () {
$('#ec_ui_confirm_no').unbind('click').click(function () {
$('#ec_ui_confirm').hide()
});
$('#ec_ui_confirm_new_no').unbind('click').click(function () {
$('#ec_ui_confirm_new').hide()
});
$('#ec_ui_tips_yes').unbind('click').click(function () {
$('#ec_ui_tips').hide()
})
});
ec.ui.confirm = function (dom, msg) {
var caller = ec.ui.confirm.caller,
arguments = caller.arguments;
if (_flag != null && arguments[arguments.length - 1] == _flag) {
_flag = null;
return true
}
$('#ec_ui_confirm_msg').html(msg);
var thix = $(dom),
layter = $('#ec_ui_confirm'),
offset = thix.offset(),
top = offset.top - layter.outerHeight(true) - 5,
left = offset.left - layter.outerWidth(true) / 2,
args = [
],
aLen = arguments.length,
dLen = arguments.callee.length;
for (var i = 0; i < aLen; i++) {
args.push(arguments[i])
}
args[dLen] = _flag = (new Date).getTime();
$('#ec_ui_confirm_yes').unbind('click').click(function () {
$('#ec_ui_confirm').hide();
caller.apply(this, args);
args = null
});
layter.css({
top: top,
left: left,
position: 'absolute'
}).show();
layter.css('z-index', '999');
return false
};
ec.ui.confirmNew = function (dom, msg, btnMsgYes, btnMsgNo) {
var caller = ec.ui.confirmNew.caller,
arguments = caller.arguments;
if (_flag != null && arguments[arguments.length - 1] == _flag) {
_flag = null;
return true
}
$('#ec_ui_confirm_new_msg').html(msg);
if (btnMsgYes) {
$('#ec_ui_confirm_new_yes').attr('title', btnMsgYes);
$('#ec_ui_confirm_new_yes').html('<span>' + btnMsgYes + '</span>')
}
if (btnMsgNo) {
$('#ec_ui_confirm_new_no').attr('title', btnMsgNo);
$('#ec_ui_confirm_new_no').html('<span>' + btnMsgNo + '</span>')
}
var thix = $(dom),
layter = $('#ec_ui_confirm_new'),
offset = thix.offset(),
top = offset.top - layter.outerHeight(true) - 5,
left = offset.left - layter.outerWidth(true) / 9,
args = [
],
aLen = arguments.length,
dLen = arguments.callee.length;
for (var i = 0; i < aLen; i++) {
args.push(arguments[i])
}
args[dLen] = _flag = (new Date).getTime();
$('#ec_ui_confirm_new_yes').unbind('click').click(function () {
$('#ec_ui_confirm_new').hide();
caller.apply(this, args);
args = null
});
layter.css({
top: top,
left: left,
position: 'absolute'
}).show();
return false
};
ec.ui.tips = function (dom, msg) {
$('#ec_ui_tips_msg').html(msg);
var thix = $(dom),
layter = $('#ec_ui_tips'),
offset = thix.offset(),
top = offset.top - layter.outerHeight(true) - 5,
left = offset.left - layter.outerWidth(true) / 2;
layter.css({
top: top,
left: left,
position: 'absolute'
}).show()
}
}) ();
$.extend(ec.form.validator.defaults, {
errorClass: 'error',
autoFocus: false,
errorFunction: function (obj, options) {
var css = 'icon-error',
msg = options.msg[options.type] || options.msg['default'];
msg = msg.length <= 0 ? '&nbsp;' : msg;
switch (options.type) {
case 'require':
css = 'icon-warn';
break
}
if (options.msg_ct) {
$(options.msg_ct).html('<span class=\'vam ' + css + '\'>' + ec.autoEncodeAttr(msg) + '</span>')
} else {
var id = (obj.attr('id') || obj.attr('name')) + '-msg';
$('#' + id).remove();
obj.after('<span id=\'' + id + '\' class=\'vam ' + css + '\'>' + ec.autoEncodeAttr(msg) + '</span>')
}
if (options.autoFocus) obj.focus()
},
successFunction: function (obj, options) {
if (options.msg_ct) {
$(options.msg_ct).html('')
} else {
$('#' + (obj.attr('id') || obj.attr('name')) + '-msg').remove()
}
}
}); ec.form.validator.register('mobile', function (str, options) {
if (options.allowEmpty && ec.util.isEmpty(str)) {
return true
}
if (str.length < 11) {
return false
}
return /^1\d{10}$/.test(str)
}); ec.form.validator.register('phone', function (str, options) {
if (options.allowEmpty && ec.util.isEmpty(str)) {
return true
}
if (str.length < 7) {
return false
}
return /^((0[0-9]{2,3}\-)?[2-9][0-9]{6,7}|((00852|\+852)\-)?([2-3][0-9]{7}))+(\-[0-9]{1,4})?$/.test(str)
}); ec.form.validator.register('mobleOrPhone', function (str, options) {
if (options.allowEmpty && ec.util.isEmpty(str)) {
return true
}
if (str.length < 11) {
return false
}
return /(^((0[0-9]{2,3}\-)?[2-9][0-9]{6,7}|((00852|\+852)\-)?([2-3][0-9]{7}))+(\-[0-9]{1,4})?$)|(^(\+|00)?((86)?(1[3456789])[0-9]{9}|852[965][0-9]{7})$)/.test(str)
}); ec.form.validator.register('addressCheck', function (str, options) {
if (options.allowEmpty && ec.util.isEmpty(str)) {
return true
}
if (str == '选择省-市-区-街道') {
return false
}
return true
}); function limitNum(event, ele) {
var reg = /^(86008686|86860086|00868686|86868686|868686|860086|008686|0086|8686|86)/;
$(ele).val(function () {
return $(ele).val().replace(/\D/g, '').replace(reg, '')
});
if (/^1\d{10}$/.test($(ele).val())) {
$(ele).removeClass('error');
$('#tel-msg').removeClass('label-error').text('');
$('#vatInvoice-mobile-error').removeClass('report-errors').text('')
}
}
function checkIEVersion() {
var browserName = navigator.userAgent;
if (parseInt(/msie/i.test(browserName) && browserName.match(/msie\s[\d.]+/i) [0].split(' ') [1], 10) <= 8) {
var html = '<div class="ie8">\t\t\t            <div class="h">\t\t\t                您使用的浏览器版本过低，可能有安全风险<br>推荐扫码使用【华为商城APP】或者关注微信公众号【华为商城】\t\t\t            </div>\t\t\t            <div class="code clearfix">\t\t\t                <p class="code1">\t\t\t                    <em></em>\t\t\t                    <span>华为商城APP</span>\t\t\t                </p>\t\t\t                <p class="code2">\t\t\t                    <em></em>\t\t\t                    <span>微信公众号</span>\t\t\t                </p>\t\t\t            </div>\t\t\t            <div class="word">或者升级您的浏览器，继续访问</div>\t\t\t            <div class="browser clearfix">\t\t\t                <a href="https://www.google.cn/intl/zh-CN/chrome/browser/desktop/" target="_blank" class="logo-browser-chrome clearfix">\t\t\t                    <em></em>\t\t\t                    <span>chrome</span>\t\t\t                </a>\t\t\t                <a href="https://www.microsoft.com/zh-cn/download/internet-explorer.aspx" target="_blank" class="logo-browser-ie clearfix">\t\t\t                    <em></em>\t\t\t                    <span>IE浏览器</span>\t\t\t                </a>\t\t\t            </div>\t\t\t        </div>';
new ec.box(html, {
boxid: 'update-box',
width: 960,
height: 711,
showButton: false,
zIndex: 700
}).open();
$('body').css('overflow', 'hidden')
}
}
ec.form.validator.register('addressConfirmCheck', function () {
if ($('#current-address').html() == '选择省-市-区-街道') {
return false
} else {
var form = $('#myAddress-form');
ec.addr.syncCache(form);
var province = form.find('input[name=\'province\']').val(),
city = form.find('input[name=\'city\']').val(),
district = form.find('input[name=\'district\']').val(),
street = form.find('input[name=\'street\']').val(),
needL4Addr = form.find('input[name=\'needL4Addr\']').val();
if ('' != province && '' != city && '' != district) {
if (needL4Addr == 'true' && street == '') {
return false
} else {
return true
}
} else {
return false
}
}
return true
}); ec.form.validator.register('addressContractCheck', function () {
var form = $('#order-address-add-form');
var province = form.find('select[name=\'province\'] option:selected').val(),
city = form.find('select[name=\'city\'] option:selected').val(),
district = form.find('select[name=\'district\'] option:selected').val(),
street = form.find('select[name=\'street\'] option:selected').val();
if ('' != province && '' != city && '' != district) {
if ('' == street) {
return false
} else {
return true
}
} else {
return false
}
}); ec.form.validator.register('forbidChar', function (str, options) {
if (options.allowEmpty && ec.util.isEmpty(str)) {
return true
}
str = str.replace('*', '@'),
str = str.replace('--', '@'),
str = str.replace('/', '@'),
str = str.replace('+', '@'),
str = str.replace('\'', '@'),
str = str.replace('\\', '@'),
str = str.replace('$', '@'),
str = str.replace('^', '@'),
str = str.replace('.', '@'),
str = str.replace(';', '@'),
str = str.replace('<', '@'),
str = str.replace('>', '@'),
str = str.replace('"', '@'),
str = str.replace('=', '@'),
str = str.replace('{', '@'),
str = str.replace('}', '@');
str = str.replace('%', '@');
str = str.replace('~', '@');
str = str.replace('&', '@');
if (str.search(new RegExp('@')) != - 1) {
return false
}
return true
}); ec.form.validator.register('invoiceForbidChar', function (str, options) {
if (options.allowEmpty && ec.util.isEmpty(str)) {
return true
}
str = str.replace('--', '&');
var invoiceRegex = /^[^\\*\\+\\\\/\\$\\^\\;<>\"=\\{\\}%~&]+$/g;
var result = invoiceRegex.test(str);
if (!result) {
return false
}
return result
}); ec.ui.number = function (selector, options) {
var defaultOpt = {
max: null,
min: null,
showButton: true,
minusBtn: '<a class="icon-minus vam" href="javascript:;"><span>-</span></a>',
plusBtn: '<a class="icon-plus vam" href="javascript:;"><span>+</span></a>'
},
thix = $(selector),
options = $.extend(defaultOpt, options),
checkNumber = function (e) {
var currentKey = e.which,
val = parseInt(this.value, 10),
thisVal = val < 1 ? 1 : val;
if ((currentKey < 37 || currentKey > 40) && currentKey != 8 && currentKey != 46) {
if (thisVal > options.max || thisVal < options.min) {
e.preventDefault();
return false
} else {
if ((currentKey < 48 || currentKey > 57) && (currentKey < 96 || currentKey > 105) && currentKey != 9) {
e.preventDefault();
return false
}
}
}
};
thix.each(function () {
var opt = $.extend({
}, options),
inputObj = $(this).css('ime-mode', 'disabled');
var tmp = inputObj.attr('max');
if (tmp) {
options.max = opt.max = parseInt(tmp, 10) || opt.max
}
tmp = inputObj.attr('min');
if (tmp) {
options.min = opt.min = parseInt(tmp, 10) || opt.min
}
if (opt.showButton) {
var minusBtn = $(opt.minusBtn).click(function () {
var val = inputObj.val() || 0,
thisVal = parseInt(val, 10) - 1;
if (typeof opt.min == 'number' && thisVal < opt.min) {
return
}
inputObj.valS(thisVal).trigger('blur')
}),
plusBtn = $(opt.plusBtn).click(function () {
var val = inputObj.val() || 0,
thisVal = parseInt(val, 10) + 1;
if (typeof opt.max == 'number' && thisVal > opt.max) {
return
}
inputObj.valS(thisVal).trigger('blur')
});
inputObj.after(plusBtn).before(minusBtn)
}
inputObj.data('ovalue', inputObj.val() || 0).keydown(checkNumber).keyup(function () {
var thisVal = parseInt(this.value || 0);
if (typeof opt.min == 'number' && thisVal < opt.min) {
this.value = opt.min;
return
} else if (typeof opt.max == 'number' && thisVal > opt.max) {
this.value = opt.max;
return
}
}).blur(function () {
if (typeof opt.onchange === 'function') {
var oldVal = inputObj.data('ovalue'),
newVal = this.value || 0,
diff = parseInt(newVal, 10) - parseInt(oldVal, 10);
if (diff == 0) return;
inputObj.data('ovalue', newVal);
opt.onchange.call(this, newVal, diff)
}
})
})
}; ec.ui.countdown = function (selector, options) {
var obj = $(selector),
timer = obj.data('countdown'),
timeIndex = 0,
preTarget,
diff,
diffMs = options.now.getTime() - (new Date).getTime(),
diffSecs = 0,
getNext = function () {
if (timeIndex >= options.times.length) return false;
preTarget = options.times[timeIndex];
timeIndex++;
return true
},
getDiffSec = function () {
diffSecs = Math.round((ec.util.parseDate(preTarget).getTime() - (new Date).getTime() - diffMs) / 1000);
diffSecs = diffSecs <= 0 ? 0 : diffSecs;
return diffSecs
},
render = function () {
diffSecs--;
if (diffSecs <= 0) {
diffSecs = 0
}
diff = {
day: Math.floor(diffSecs / (24 * 60 * 60)),
hour: options.html.indexOf('{#day}') >= 0 ? Math.floor(diffSecs / 60 / 60) % 24 : Math.floor(diffSecs / 60 / 60),
minute: Math.floor(diffSecs / 60) % 60,
second: diffSecs % 60
};
var html = options.html.replace(/{#day}/g, diff.day).replace(/{#hours}/g, diff.hour > 9 ? diff.hour : '0' + diff.hour).replace(/{#minutes}/g, diff.minute > 9 ? diff.minute : '0' + diff.minute).replace(/{#seconds}/g, diff.second > 9 ? diff.second : '0' + diff.second);
obj.html(html);
return diffSecs <= 0 ? false : true
};
if (!options.times) {
options.times = [
options.endTime
]
}
clearInterval(timer);
while (getNext()) {
if (getDiffSec() <= 0) continue;
break
}
if (!render()) {
return
}
timer = setInterval(function () {
if (!render()) {
if (options.callback) {
options.callback(options)
}
if (!getNext()) {
clearInterval(timer)
} else {
getDiffSec()
}
}
}, 1000);
obj.data('countdown', timer)
}; (function () {
var _window = $(window),
_binded = false,
_doc = document.compatMode == 'CSS1Compat' ? document.documentElement : document.body,
_scrollTopSrart = 0,
_scrollTopEnd = 0,
_clientHeight,
_imgList = [
],
_timer,
_renderImg = function (img) {
var top = img.offset().top - 300,
pos = top + img.height() + 600;
if (top >= _scrollTopSrart && top <= _scrollTopEnd || pos >= _scrollTopSrart && pos <= _scrollTopEnd) {
img.attr('src', img.attr('data-lazy-src'));
img.removeAttr('data-lazy-src');
return true
}
return false
};
_bindEvent = function () {
var scrollEvent = function () {
clearTimeout(_timer);
_timer = setTimeout(function () {
_scrollTopSrart = _window.scrollTop();
_scrollTopEnd = _scrollTopSrart + _clientHeight;
var img;
for (var i = 0; i < _imgList.length; i++) {
img = _imgList[i];
if (_renderImg(img)) {
_imgList.splice(i, 1);
i--
}
}
if (!_imgList || _imgList.length == 0) {
_window.unbind('scroll', scrollEvent);
_window.unbind('resize', resizeEvent)
}
}, 100)
},
resizeEvent = function (event) {
_clientHeight = _doc.clientHeight
};
_window.bind('scroll', scrollEvent);
_window.bind('resize', resizeEvent);
_clientHeight = _doc.clientHeight;
_scrollTopSrart = _window.scrollTop();
_scrollTopEnd = _scrollTopSrart + _clientHeight
};
ec.ui.lazyLoad = function (selector) {
if (!_binded) {
_bindEvent();
_binded = true
}
$(selector).each(function () {
if (this.tagName != 'IMG') return;
var thix = $(this);
if (thix.attr('data-lazy-src')) {
if (!_renderImg(thix)) {
thix.attr('src', ol.libPath + '../../images/echannel/loading/mask.png');
_imgList.push(thix)
}
}
})
}
}) (); ec.ready(function () {
ec.ui.lazyLoad($('body').children('.home-channel-menu,.layout,.g,.home-channel-container,.channel-floor,.home-channel-floor').find('img'));
ec.ui.hrefSetTime()
}); ec.showError = function (json) {
if (json.code == 'login') {
alert('登录超时，请重新登录');
location.reload();
return false
}
alertS(json.msg)
}; (function () {
var _init = function () {
var _vb = ec.form.validator.bind,
content = $('#surveryContent'),
contact = $('#surveryContact'),
code = $('#surveryVerify');
_vb(content, {
type: [
'require',
'length',
'forbidChar'
],
validOnChange: true,
msg_ct: '#errMsg',
max: 200,
min: 5,
msg: {
require: '您还没有输入反馈信息哦',
length: '反馈信息内容请控制在5~200个字符之间',
forbidChar: '反馈信息里包含非法字符'
}
});
_vb(contact, {
type: [
'require',
'length'
],
validOnChange: true,
msg_ct: '#errMsg',
min: 2,
max: 100,
msg: {
require: '请输入您的联系方式',
length: '请输入正确的联系方式'
}
});
_vb(code, {
type: [
'require'
],
validOnChange: true,
msg_ct: '#errMsg',
msg: {
require: '请输入验证码'
}
});
if (ec.account.isLogin()) {
contact.valS(ec.account.email || ec.account.mobile || ec.account.loginName)
}
ec.form.input.label(contact, '选填邮箱或者商城账户');
ec.form.input.label(content, '谢谢您的宝贵建议，我们将不断改进')
};
ec.survery = {
open: function () {
if (_init) {
_init();
_init = null
}
var obj = $('#survery-box');
var innerWidth = $(window).width();
var innerHeight = $(window).height();
var width = obj.width();
var height = obj.height();
var mask = document.createElement('div');
mask.className = 'mask-new';
mask.style.width = innerWidth + 'px';
mask.style.height = innerHeight + 'px';
mask.style.background = '#000';
mask.style.position = 'fixed';
mask.style.top = 0;
mask.style.left = 0;
mask.style.zIndex = 501;
mask.style.opacity = 0.4;
mask.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';
document.body.appendChild(mask);
ec.survery.reloadCode();
$('#survery-box').css({
position: 'fixed',
left: innerWidth / 2 - width / 2 + 'px',
top: innerHeight / 2 - height / 2 + 'px',
'z-index': 999
}).show();
$(window).resize(function () {
innerWidth = $(window).width();
innerHeight = $(window).height();
$('#survery-box').css({
left: innerWidth / 2 - width / 2 + 'px',
top: innerHeight / 2 - height / 2 + 'px'
})
})
},
close: function () {
ol.ui.masker.unmask();
$('.mask-new').remove();
$('#survery-box').hide()
},
submit: function () {
var form = $('#form-feedback');
if (!ec.form.validator(form, true)) {
return false
}
ec.account.afterLogin(function () {
$.ajax({
type: 'post',
url: domainMain + '/feedback.json',
dataType: 'json',
timeout: 10000,
async: true,
data: {
type: $('#surverytype').val(),
content: $('#surveryContent').val(),
contact: $('#surveryContact').val(),
code: $('#surveryVerify').val()
},
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (json) {
if (!json.success) {
ec.survery.reloadCode();
$('#surveryVerify').val('');
$('#errMsg').html('<span class="vam icon-warn">提交失败，' + json.msg + '</span>');
return
}
alert('提交成功，华为商城感谢您的宝贵建议！');
ec.survery.close();
$('#surveryContent,#surveryVerify').val('');
return
}
})
});
return false
},
reloadCode: function () {
gid('surveryVerifyImg').src = domainMain + '/feedback/randomCode?_t=' + (new Date).getTime()
},
validate: function () {
$.ajax({
type: 'post',
url: domainMain + '/feedback/validRandomCode?_t=' + (new Date).getTime(),
timeout: 10000,
dataType: 'json',
data: {
code: $('#surveryVerify').val()
},
success: function (json) {
if (json.success) {
return
}
gid('surveryVerifyImg').src = domainMain + '/feedback/randomCode?_t=' + (new Date).getTime();
$('#surveryVerify').val('');
return
}
})
}
}
}) (); $(function () {
var win = $(window),
timer,
$btn = $('#hungBar-top'),
setTime = function () {
$btn.stop();
if (win.scrollTop() > 1200) {
$btn.fadeTo(20, 1)
} else {
$btn.fadeOut(20)
}
timer = null
};
win.scroll(function () {
timer = setTimeout(setTime, 50)
});
setTime();
$('.hungBar-top').bind('click', function () {
$('html,body').animate({
scrollTop: '0px'
}, 400)
})
}); (function () {
ec.ui.hrefSetTime = function () {
var time = (new Date).getTime();
try {
$('a[timeType=timestamp]').each(function () {
var obj = $(this);
obj.attr('href', obj.attr('href').replace(/timestamp/g, time))
})
} catch (err) {
}
}
}) (); ec.pkg('ec.encipher'); ec.encipher.base = 10; ec.encipher.bigPowMod = function (a, b, c) {
a = str2bigInt(a, ec.encipher.base);
b = str2bigInt(b, ec.encipher.base);
c = str2bigInt(c, ec.encipher.base);
var result = powMod(a, b, c);
result = bigInt2str(result, ec.encipher.base);
return result
}; ec.encipher.randomInt = function (bits) {
var result = randBigInt(bits, 0);
return bigInt2str(result, ec.encipher.base)
}; ec.pkg('ec.addr'); ec.addr.list = function (callback) {
$.ajax({
type: 'get',
url: domainShoppingConfig + '/address/list.json?t=' + (new Date).getTime(),
dataType: 'json',
async: false,
timeout: 10000,
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (json) {
if (!json.success) {
return
}
if (json.shoppingConfigList.length == 0) {
$('#base-table').find('.report-errors').show()
} else {
$('#base-table').find('.report-errors').hide()
}
callback(json.shoppingConfigList, json.randomFlag)
}
})
}; ec.addr.syncCache = function (formObj) {
formObj.find('input[name=province]').attr('value', formObj.find('input[name=provinceG]').attr('value'));
formObj.find('input[name=city]').attr('value', formObj.find('input[name=cityG]').attr('value'));
formObj.find('input[name=district]').attr('value', formObj.find('input[name=districtG]').attr('value'));
formObj.find('input[name=street]').attr('value', formObj.find('input[name=streetG]').attr('value'));
formObj.find('input[name=needL4Addr]').attr('value', formObj.find('input[name=needL4AddrG]').attr('value'))
}; ec.addr.save = function (form, options) {
var formObj = $(form);
var id = formObj.find('input[name=id]').val();
var url = '/address/add.json';
var _method = 'post';
ec.addr.syncCache(formObj);
var province = formObj.find('input[name=province]').val();
var city = formObj.find('input[name=city]').val();
var district = formObj.find('input[name=district]').val();
var street = formObj.find('input[name=street]').val();
var needL4Addr = formObj.find('input[name=\'needL4Addr\']').val();
var mobileObj = formObj.find('input[name=mobile]');
var phoneObj = formObj.find('input[name=phone]');
if (mobileObj.hasClass('error') || phoneObj.hasClass('error')) {
return false
}
if (!ec.form.validator(formObj, false)) {
return false
}
var mobile = $.trim(formObj.find('input[name=mobile]').val());
var phone = $.trim(formObj.find('input[name=phone]').val());
if (ec.util.isEmpty(mobile)) {
return false
}
if (options.afterCheck) {
options.afterCheck(id)
}
if (options.type != 'add') {
url = '/address/modify/' + id + '.json'
}
var consignee = formObj.find('input[name=consignee]').val();
var address = formObj.find('input[name=address],textarea[name=address]').val();
var zipCode = formObj.find('input[name=zipCode]').val();
var randomFlag = formObj.find('input[name=randomFlag]').val();
var data = {
};
data.consignee = consignee;
data.province = province;
data.city = city;
data.district = district;
data.street = street;
data.address = address;
data.zipCode = zipCode;
data.mobile = mobile;
data.phone = phone;
data.randomFlag = randomFlag;
var $defaultFlag = formObj.find('input[name=defaultFlag]');
if ($defaultFlag.length == 1 && $defaultFlag[0].checked && !$defaultFlag[0].disabled) {
data.defaultFlag = $defaultFlag.val()
}
data.t = (new Date).getTime();
$.ajax({
url: domainShoppingConfig + url + '?_method=' + _method,
type: 'post',
data: data,
async: false,
dataType: 'json',
timeout: 20000,
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (json) {
if (!json.success) {
ec.showError(json);
return
}
if (options.successFunction) {
options.successFunction(json.shoppingConfig, form)
}
},
error: function () {
alert('保存超时，请重试！')
}
});
return false
}; ec.addr.setDefault = function (id, options) {
var B = ec.util.cookie.get('sc_b');
$.ajax({
url: domainShoppingConfig + '/address/setDefault.json?id=' + id + '&t=' + (new Date).getTime(),
type: 'post',
async: false,
dataType: 'json',
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (json) {
if (!json.success) {
ec.showError(json);
return
}
if (options.successFunction) {
options.successFunction(id)
}
},
error: function () {
alert('操作超时，请重试！')
}
})
}; ec.addr.getAll = function (options) {
$.ajax({
url: domainShoppingConfig + '/member/myAddresses.json',
type: 'post',
async: false,
dataType: 'json',
timeout: 20000,
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (json) {
if (!json.success) {
ec.showError(json);
return
}
if (options.successFunction) {
options.successFunction(json)
}
},
error: function () {
alert('操作超时，请重试！')
}
})
}; ec.addr.del = function (id, options) {
$.ajax({
url: domainShoppingConfig + '/address/del/' + id + '.json',
type: 'post',
async: false,
dataType: 'json',
timeout: 10000,
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (json) {
if (!json.success) {
ec.showError(json);
if (json.code == 'default') {
if (options.deleteDefault) {
options.deleteDefault(id)
}
}
return
}
if (options.successFunction) {
options.successFunction(id)
}
},
error: function () {
alert('读取超时，请重试！')
}
})
}; ec.pkg('ec.prescription'); ec.prescription.getEstimateGetOrderTime = function (callback, distinctId, price, invoiceonfig) {
$.ajax({
url: '/order/estimateTime.json?d=' + distinctId + '&p=' + price + '&i=' + invoiceonfig,
dataType: 'json',
timeout: 20000,
beforeSend: function () {
ec.ui.loading.show({
modal: false
})
},
complete: ec.ui.loading.hide,
success: function (json) {
callback(json.info, false)
},
error: function () {
callback(null, true)
}
})
}; ec.prescription.getEstimateGetOrderTime2 = function (callback, distinctId, price, invoiceonfig, skuCodeList, countTemp) {
$.ajax({
url: '/order/estimateArrivalTime.json?d=' + distinctId + '&p=' + price + '&i=' + invoiceonfig + '&l=' + skuCodeList + '&k=' + countTemp,
dataType: 'json',
timeout: 20000,
success: function (json) {
callback(json, false)
},
error: function () {
callback(null, true)
}
})
}; ec.prescription.queryPreDeliveryAndArrival = function (callback, districtId, price, invoiceType, sbomCode) {
$.ajax({
url: '/order/queryPreDeliveryAndArrival.json',
type: 'POST',
data: {
districtId: districtId ? districtId : '',
price: price ? price : '',
invoiceType: invoiceType ? invoiceType : '',
sbomCode: sbomCode ? sbomCode : ''
},
dataType: 'json',
timeout: 20000,
success: function (json) {
callback(json, false)
},
error: function () {
callback(null, true)
}
})
}; getPointBalance = function () {
$.ajax({
url: openApiDomain + '/point/queryUserPointBalanceDetail.json',
data: {
},
timeout: 10000,
dataType: 'json',
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (json) {
if (json.resultCode != '200000') {
$('#newPointlogin_status').hide();
return
}
json = json.data;
var pointBlance = json.pointBlance;
$('#userPointBalance').textS(pointBlance);
if (parseInt(pointBlance) > parseInt(999)) {
$('#balanceicon_privilege').empty().html('<a href="/member/newpoint?t=' + (new Date).getTime() + '" target="_blank">' + 999 + '+</a>')
} else {
$('#balanceicon_privilege').empty().html('<a href="/member/newpoint?t=' + (new Date).getTime() + '" target="_blank">' + pointBlance + '</a>')
}
$('#balanceicon_myCenter').empty().html('<a href="/member/newpoint?t=' + (new Date).getTime() + '" target="_blank">' + pointBlance + '</a>');
$('#balanceicon_myCenter').removeClass('p-price-no')
}
})
}; ec.getLength = function (str) {
if (str == null) return 0;
if (typeof str != 'string') {
str += ''
}
return str.replace(/[^\x00-\xff]/g, '01').length
}; ec.isChina = function (s) {
var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
if (!patrn.exec(s)) {
return false
} else {
return true
}
}; ec.cutstr = function (str, len) {
var str_length = 0;
var str_len = 0;
str_cut = new String;
str_len = str.length;
if (!ec.isChina(str)) {
len = len + 6
}
for (var i = 0; i < str_len; i++) {
a = str.charAt(i);
str_length++;
if (escape(a).length > 4) {
str_length++
}
str_cut = str_cut.concat(a);
if (str_length >= len) {
str_cut = str_cut.concat('...');
return str_cut
}
}
if (str_length < len) {
return str
}
}; ec.checkBrowerIE = function () {
var ua = window.navigator.userAgent;
if (!!window.ActiveXObject || 'ActiveXObject' in window || ua.indexOf('MSIE') > - 1 || ua.indexOf('Trident') > - 1) {
return true
} else {
return false
}
}; ec.searchHistoryUnique = function (sourceHis) {
var new_arr = [
];
for (var i = 0; i < sourceHis.length; i++) {
var items = sourceHis[i];
if ($.inArray(items, new_arr) == - 1) {
new_arr.push(items)
}
}
return new_arr
}; ec.pkg('ec.search'); var searchHistoryMaxLength = 48; var hisWordListLen = 0; ec.search.querySearchHistory = function (flag) {
$.ajax({
url: '/searchHistory.json?t=' + (new Date).getTime(),
dataType: 'json',
timeout: 10000,
success: function (json) {
var f = flag;
var hisList = [
];
if (json.success != undefined && !json.success) {
hisWordListLen = 0;
ec.search.hotWord(f, hisList, hisWordListLen);
return
}
hisList = json.searchHistoryList;
if (hisList != undefined && hisList.length) {
hisWordListLen = hisList.length
}
var html = [
];
if (hisWordListLen > 6) {
hisWordListLen = 6
}
for (var j = 0; j < hisWordListLen; j++) {
var hisKeyword = hisList[j];
var hisKeywordLen = ec.getLength(hisKeyword);
hisKeyword = hisKeyword.transHtmlAttribute();
var encoceText = encodeURIComponent(ec.filteredTxt(hisKeyword));
var searchWordUrl = ec.base.findSearchHotWordUrl(hisKeyword);
if (searchWordUrl == null || searchWordUrl == '') {
html.push('<li><a href="/search?keyword=' + encoceText + '" target="_blank" onclick="pushMsgSearchHistory(\'' + encoceText + '\')" data-value="' + encoceText + '">')
} else {
html.push('<li><a href="' + searchWordUrl + '" target="_blank" onclick="pushMsgSearchHistory(\'' + encoceText + '\')" data-value="' + encoceText + '">')
}
if (hisKeywordLen > searchHistoryMaxLength) {
html.push($('<div/>').textS(ec.cutstr(hisKeyword, searchHistoryMaxLength)).html())
} else {
html.push($('<div/>').textS(hisKeyword).html())
}
html.push('</a></li>')
}
$('#search-history-list').html(html.join(''));
$('#search-history').show();
if ($('#search-history').is(':visible') || $('.autocomplete').is(':visible')) {
$('#search-bar-form').addClass('hover')
} else {
$('#search-bar-form').removeClass('hover')
}
ec.search.hotWord(f, hisList, hisWordListLen)
}
})
}; function pushMsgSearchHistory(word) {
ec.dapClick(300090101, {
searchWord: decodeURIComponent(word),
type: '3',
urlType: '/search' === location.pathname ? 1 : 2,
click: '1'
})
}
ec.search.deleteSearchHistory = function () {
$.ajax({
type: 'post',
url: '/search/clearUp.json?t=' + (new Date).getTime(),
dataType: 'json',
timeout: 10000,
success: function (json) {
if (json.success != undefined && !json.success) {
return
}
}
})
}; ec.search.hotWord = function (flag, hisList, hisWordListLen) {
var f = flag;
var hisLst = hisList;
var hisWLL = hisWordListLen;
var hotWordListAll = ec.search.searchArr;
var hotWordListSC = [
];
var hotWordListHW = [
];
var hotWordListRY = [
];
var hotWordList = [
];
for (var swal = 0; swal < hotWordListAll.length; swal++) {
if (hotWordListAll[swal].inSearchBox == 1) {
if (hotWordListAll[swal].type == 1) {
hotWordListSC.push(hotWordListAll[swal])
} else if (hotWordListAll[swal].type == 2) {
hotWordListHW.push(hotWordListAll[swal])
} else {
hotWordListRY.push(hotWordListAll[swal])
}
}
}
if (f == 'searchWordSCList') {
hotWordList = hotWordListSC
} else if (f == 'searchWordHWList') {
hotWordList = hotWordListHW
} else {
hotWordList = hotWordListRY
}
var html = [
];
var tag = false;
var tip = 1;
var recordLen = 10 - hisWordListLen;
if (hotWordList.length <= 2) {
return
}
for (var i = 2; i < hotWordList.length; i++) {
var hotWord = hotWordList[i];
var hotWordLen = ec.getLength(hotWord.word);
word = hotWord.word.transHtmlAttribute();
tag = false;
if (hisWordListLen != 0) {
for (var k = 0; k < hisWordListLen; k++) {
var hisWord = hisLst[k];
if (word == hisWord.transHtmlAttribute()) {
tag = true;
break
}
}
}
if (tip > recordLen) {
break
}
if (tag == false) {
if (hotWord.isActivityWords == 1) {
if (hotWord.activityUrl != null && hotWord.activityUrl != '') {
html.push('<li><a href="' + hotWord.activityUrl + '" target="_blank" onclick="pushHotSearchMsg(\'' + ec.encodeForJS(word) + '\')" data-value="' + encodeURIComponent(word) + '">');
tip = tip + 1
} else {
html.push('<li><a href="javascript:void(0);" target="_blank" onclick="searchFunc(\'' + ec.encodeForJS(word) + '\'); return false;" data-value="' + encodeURIComponent(word) + '">');
tip = tip + 1
}
} else {
html.push('<li><a href="javascript:void(0);" target="_blank" onclick="searchFunc(\'' + ec.encodeForJS(word) + '\'); return false;" data-value="' + encodeURIComponent(word) + '">');
tip = tip + 1
}
if (hotWordLen > searchHistoryMaxLength) {
html.push($('<div/>').textS(ec.cutstr(word, searchHistoryMaxLength)).html())
} else {
html.push($('<div/>').textS(word).html())
}
html.push('</a></li>')
}
}
if (tip > 1) {
$('#search-key-list').html(html.join(''));
$('#search-key').show();
if ($('#search-key').is(':visible') || $('.autocomplete').is(':visible')) {
$('#search-bar-form').addClass('hover')
} else {
$('#search-bar-form').removeClass('hover')
}
}
}; ec.account.privilege_updateProgress = function (max, min, totalPoint, gradeCode) {
if (max >= 0 && min >= 0 && totalPoint >= 0) {
var v_high = max,
v_low = min,
v_curr = totalPoint,
per = (v_curr - v_low) / (v_high - v_low),
_deg = 0;
if (parseInt(v_curr) >= parseInt(v_high)) {
$('.canvas-left div').css({
transform: 'rotateZ(0deg)',
background: '#F05C20'
});
$('.canvas-right div').css({
transform: 'rotateZ(-39deg)'
})
} else {
if (per > 0.5) {
_deg = 280 * per - 320;
$('.canvas-left div').css({
transform: 'rotateZ(0deg)'
});
$('.canvas-right div').css({
transform: 'rotateZ(' + _deg + 'deg)'
});
if (per > 0.7) {
$('.canvas-left div').css({
background: '#F05C20'
})
} else {
_deg = _deg + 180;
$('.canvas-left div').css({
transform: 'rotateZ(' + _deg + 'deg)',
background: '-webkit-gradient(linear, 0 bottom, right 0, from(#F05C20), to(#F58555))'
});
$('.canvas-right div').css({
background: '-webkit-gradient(linear, 0 bottom, right 0, from(#F58555), to(#F05C20))'
})
}
} else {
if (per < 0.01 && per > 0) {
per = 0.01
}
_deg = 265 * per - 125;
$('.canvas-left div').css({
transform: 'rotateZ(' + _deg + 'deg)',
background: '-webkit-gradient(linear, 0 bottom, 0 0, from(#F05C20), to(#F58555))'
});
$('.canvas-right div').css({
transform: 'rotateZ(-180deg)'
})
}
}
}
var i = $('#user-vip-level-tips');
if (gradeCode != null) {
switch (gradeCode) {
case 0:
vipColor = '#999';
i.attr('class', 'icon-vip-level-0');
break;
case 1:
vipColor = '#01abdf';
i.attr('class', 'icon-vip-level-1');
break;
case 2:
vipColor = '#24ca43';
i.attr('class', 'icon-vip-level-2');
break;
case 3:
vipColor = '#ffb710';
i.attr('class', 'icon-vip-level-3');
break;
case 4:
vipColor = '#fc5d21';
i.attr('class', 'icon-vip-level-4');
break;
case 5:
vipColor = '#fc3784';
i.attr('class', 'icon-vip-level-5');
break;
default:
vipColor = '#999';
i.attr('class', 'icon-vip-level-0');
break
}
}
};
ec.account.privilege_updateProgressIndex = function (gradeCode) {
var i = $('#user-vip-level-tips-index');
if (gradeCode != null) {
switch (gradeCode) {
case 0:
vipColor = '#999';
i.attr('class', 'user-level icon-vip-level-0');
break;
case 1:
vipColor = '#01abdf';
i.attr('class', 'user-level icon-vip-level-1');
break;
case 2:
vipColor = '#24ca43';
i.attr('class', 'user-level icon-vip-level-2');
break;
case 3:
vipColor = '#ffb710';
i.attr('class', 'user-level icon-vip-level-3');
break;
case 4:
vipColor = '#fc5d21';
i.attr('class', 'user-level icon-vip-level-4');
break;
case 5:
vipColor = '#fc3784';
i.attr('class', 'user-level icon-vip-level-5');
break;
default:
vipColor = '#999';
i.attr('class', 'user-level icon-vip-level-0');
break
}
}
};
function getPtid() {
var tid = ec.util.cookie.get('TID');
if (tid && tid != null && tid != '') {
return tid
}
var deviceid = ec.util.cookie.get('deviceid');
if (deviceid == null || deviceid == '' || deviceid == undefined) {
var s = [
];
var h = '0123456789abcdef';
for (var a = 0; a < 32; a++) {
s[a] = h.substr(Math.floor(Math.random() * 16), 1)
}
s[14] = '4';
s[19] = h.substr(s[19] & 3 | 8, 1);
s[8] = s[13] = s[18] = s[23];
deviceid = s.join('');
ec.util.cookie.set('deviceid', deviceid, {
expires: 3650,
domain: 'vmall.com'
})
}
ec.util.cookie.set('TID', deviceid, {
expires: 3650,
domain: 'vmall.com'
});
return deviceid
}
function getTime() {
var date = new Date;
var y = date.getFullYear();
var m = date.getMonth() + 1;
m = m < 10 ? '0' + m : m;
var d = date.getDate();
d = d < 10 ? '0' + d : d;
var h = date.getHours();
h = h < 10 ? '0' + h : h;
var minute = date.getMinutes();
var second = date.getSeconds();
minute = minute < 10 ? '0' + minute : minute;
second = second < 10 ? '0' + second : second;
var millSec = date.getMilliseconds();
if (millSec < 10) {
millSec = '00' + millSec
} else if (millSec < 100) {
millSec = '0' + millSec
}
var time = '' + y + m + d + h + minute + second + millSec;
return time
}
function safeStr(str) {
if (str == null) {
return
}
return str.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
}
ec.account.dapPushMsg = function (key, value, type) {
_paq.push(['setTrackerUrl',
dapDomain + '/dap/report']);
var orderCode = (ec.order && ec.order.orderCode ? ec.order.orderCode : '') + '';
_paq.push(['setSiteId',
'www.vmall.com']);
if (type == 'view') {
getPtid();
_paq.push(['setCustomVariable',
1,
'cid',
ec.util.cookie.get('cps_id') || '',
'page']);
_paq.push(['setCustomVariable',
2,
'direct',
ec.util.cookie.get('cps_dap_redirect') || '',
'page']);
_paq.push(['setCustomVariable',
4,
'wi',
ec.util.cookie.get('cps_wi') || '',
'page']);
_paq.push(['trackPageView']);
ec.code.addAnalytics({
hicloud: true
});
_paq.push(['trackPageView'])
} else if (type == 'click') {
_paq.push(['setCustomVariable',
1,
'cid',
ec.util.cookie.get('cps_id') || '',
'page']);
_paq.push(['setCustomVariable',
2,
'direct',
ec.util.cookie.get('cps_dap_redirect') || '',
'page']);
_paq.push(['setCustomVariable',
3,
'orderid',
orderCode,
'page']);
_paq.push(['setCustomVariable',
4,
'wi',
ec.util.cookie.get('cps_wi') || '',
'page']);
_paq.push(['trackLink',
key,
'link',
value])
}
ec.util.cookie.set('cps_dap_redirect', null, {
expires: - 1,
domain: 'vmall.com'
});
ec.load({
url: 'https://res.vmallres.com/bi/hianalytics.js',
type: 'js',
loadType: 'lazy'
})
};
$(function () {
ec.account.dapPushMsg('', '', 'view');
ec.agreement.init();
var lastReferrer = location.href;
if (document.referrer && (location.pathname.match(/^\/member\//) || location.pathname.match(/^\/order\//))) {
lastReferrer = document.referrer
}
lastReferrer = lastReferrer.substring(domainMain.length);
if (lastReferrer.startsWith('/') && !lastReferrer.match(/^\/member\//) && !lastReferrer.match(/^\/order\//)) {
ec.util.cookie.set('lastReferrer', lastReferrer)
}
});
ec.openWindow = function (opt) {
if ('string' === typeof opt) {
opt = {
url: opt
}
}
opt = $.extend({
url: '',
name: '',
features: '',
replace: false
}, opt);
return window.open(opt.url, opt.name, opt.features, opt.replace)
};
ec.redirectTo = function (opt) {
if ('string' === typeof opt) {
opt = {
url: opt
}
}
opt = $.extend({
url: '',
win: window
}, opt);
return opt.win.location.href = opt.url.transHtmlAttribute()
};
ec.postTo = function (url, data) {
var csrftoken = ec.util.cookie.get('CSRF-TOKEN');
if (!csrftoken) console.log('无法获取 CsrfToken');
var form = $('<form action="' + url + '" method="post"></form>');
form.append('<input name="CsrfToken" type="hidden" value="' + csrftoken + '">');
for (var k in data) {
if (Array.isArray(data[k])) {
data[k].forEach(function (lv) {
form.append('<input name="' + k + '[]" type="hidden" value="' + String(lv) + '">')
})
} else {
form.append('<input name="' + k + '" type="hidden" value="' + String(data[k]) + '">')
}
}
$('body').append(form);
form.submit();
form.remove()
};
ec.dapClick = function (link, content) {
var value = {
TID: getPtid(),
TIME: getTime(),
CONTENT: content
};
ec.account.dapPushMsg(link, value, 'click');
ec.code.addAnalytics({
hicloud: true
});
_paq.push(['trackLink',
link,
'link',
value])
};
ec.agreement = ec.agreement || {
};
ec.agreement.showMsgSetter = false;
ec.agreement.fetchNew = function () {
$.ajax({
url: openApiDomain + '/mcp/agreement/queryAgreementSignLogs',
method: 'post',
dataType: 'json',
contentType: 'text/plain',
data: JSON.stringify({
lang: 'zh-CN',
country: 'CN',
portal: 1,
agrInfo: [
{
agrType: 215,
country: 'cn',
branchId: 0
},
{
agrType: 10066,
country: 'cn',
branchId: 0
}
],
obtainVersion: false,
tokenType: 2
}),
success: function (r) {
if (!r || !r.success || !r.signInfo) return false;
if (r.signInfo.length < 1) {
var html = '';
html += '<div class="f14 pdt-20" style="color: #666">';
html += '  欢迎您使用华为商城，为了给您提供更好的服务，本网站在使用时，需要获取网络、帐号及使用信息。我们将对您的个人数据予以充分保护。点击&nbsp;&nbsp;“同意”&nbsp;，表示您同意上述内容及<a href="http://consumer.huawei.com/minisite/cloudservice/vmall_web/terms.htm?country=CN&language=zh_Hans_CN" target="_blank" class="blue">华为商城服务协议</a>、<a href="http://consumer.huawei.com/minisite/cloudservice/vmall_web/privacy-statement.htm?country=CN&language=zh_Hans_CN" target="_blank" class="blue">关于华为商城与隐私的声明</a>。';
html += '</div>';
if (ec.util.cookie.get('isFirstLogin') > 0) {
ec.agreement.showMsgSetter = true;
html += '<div class="hr-16"></div>';
html += '<div class="box-prompt-success-area" >';
html += '  <div class="b clearfix" style="padding-bottom: 0">';
html += '    <input name="confirmMsgPush" type="checkbox" checked="checked">';
html += '    <p style="color: #666;  width: 376px; margin-top: 4px;">接收短信、邮件、系统通知发送的活动、优惠、中奖等消息。<a href="https://sale.vmall.com/notification.html" target="_blank">了解详情</a></p>';
html += '  </div>';
html += '</div>'
}
html += '<div class="hr-25"></div>';
ec.agreement.box('华为商城通知', html, [
215,
10066
]);
return false
}
var reSignUser = false,
reSignPrivacy = false;
r.signInfo.forEach(function (v) {
if (v.agrType === 215 && v.needSign) reSignUser = true;
if (v.agrType === 10066 && v.needSign) reSignPrivacy = true
});
if (reSignUser && reSignPrivacy) {
var html = '';
html += '<div class="f14 pdt-20" style="color: #666">';
html += '  为了给您提供更好的服务，我们更新了服务协议和隐私声明。<br>详情内容请参见最新的<a href="http://consumer.huawei.com/minisite/cloudservice/vmall_web/terms.htm?country=CN&language=zh_Hans_CN" target="_blank" class="blue">华为商城服务协议</a>、<a href="http://consumer.huawei.com/minisite/cloudservice/vmall_web/privacy-statement.htm?country=CN&language=zh_Hans_CN" target="_blank" class="blue">关于华为商城与隐私的声明</a>。';
html += '</div>';
html += '<div class="hr-25"></div>';
ec.agreement.box('变更通知', html, [
215,
10066
]);
return false
}
if (reSignUser) {
var html = '';
html += '<div class="f14 pdt-20" style="color: #666">';
html += '  为了给您提供更好的服务，我们更新了服务协议。<br>详情内容请参见最新的<a href="http://consumer.huawei.com/minisite/cloudservice/vmall_web/terms.htm?country=CN&language=zh_Hans_CN" target="_blank" class="blue">华为商城服务协议</a>。';
html += '</div>';
html += '<div class="hr-25"></div>';
ec.agreement.box('服务协议变更通知', html, [
215
]);
return false
}
if (reSignPrivacy) {
var html = '';
html += '<div class="f14 pdt-20" style="color: #666">';
html += '  为了给您提供更好的服务，我们更新了隐私声明。<br>详情内容请参见最新的<a href="http://consumer.huawei.com/minisite/cloudservice/vmall_web/privacy-statement.htm?country=CN&language=zh_Hans_CN" target="_blank" class="blue">关于华为商城与隐私的声明</a>。';
html += '</div>';
html += '<div class="hr-25"></div>';
ec.agreement.box('隐私声明变更通知', html, [
10066
]);
return false
}
ec.util.cookie.set('hasSigned', '1', {
domain: 'vmall.com',
path: '/'
})
}
})
};
ec.agreement.show = function () {
if (!ec.account.isLogin()) return false;
if (window.location.pathname.match(/^\/product\/\d+\.html/) && !ec.agreement.prdshow) return false;
if (window.location.pathname.startsWith('/order/nowConfirmcart') && !ec.agreement.confirmshow) return false;
if (ec.util.cookie.get('hasSigned') > 0) return false;
return true
};
ec.agreement.init = function () {
if (!ec.agreement.show()) return false;
ec.agreement.fetchNew()
};
ec.agreement.box = function (title, html, agrTypes) {
html = '<div style="margin: 0 -6px;">' + html + '</div>';
var box = new ec.box(html, {
boxid: 'jb-agreement',
boxclass: 'ol_box_4 ol_box_noclose',
width: 460,
title: title,
okBtnName: '同意',
oncancel: function () {
ec.util.cookie.remove('hasSigned');
ec.agreement.sign(agrTypes, false, title);
window.location.href = '/account/logout?url=' + encodeURIComponent(domainMain + ec.util.cookie.get('lastReferrer'));
box.close();
return false
},
onok: function () {
box.close();
ec.agreement.sign(agrTypes, true, title);
return false
}
});
box.open()
};
ec.agreement.setMsgPush = function () {
var flag = $('#jb-agreement input[name="confirmMsgPush"]').prop('checked') ? 1 : 0;
$.ajax({
url: '/saleinfo/setSaleInfoRcvCfg.json?send_msg=' + flag,
dataType: 'json',
success: function (r) {
if (r && r.success) {
ec.util.cookie.set('isFirstLogin', '0', {
domain: 'vmall.com',
path: '/'
})
}
}
})
};
ec.agreement.sign = function (agrTypes, agree, title) {
if (agree) {
if (ec.agreement.showMsgSetter) {
ec.agreement.setMsgPush()
}
var signInfo = [
];
agrTypes.forEach(function (agrType) {
signInfo.push({
agrType: agrType,
country: 'cn',
branchId: 0,
language: 'zh_cn',
isAgree: agree
})
});
$.ajax({
url: openApiDomain + '/mcp/agreement/signAgreement',
method: 'post',
dataType: 'json',
contentType: 'text/plain',
data: JSON.stringify({
lang: 'zh-CN',
country: 'CN',
portal: 1,
signInfo: signInfo,
tokenType: 2
})
});
ec.util.cookie.set('hasSigned', '1', {
domain: 'vmall.com',
path: '/'
})
}
ec.dapClick(300000701, {
option: agree ? '同意' : '不同意',
name: title,
URL: window.location.href,
click: 1
})
};
ec.filteredTxt = function (txt) {
return txt.replace(/[^A-Za-z0-9 \u4e00-\u9fa5\-]/g, '')
};
ec.pkg('rush');
rush.account = {
isLogin: function () {
return ec.account.isLogin()
},
getUid: function () {
return ec.account.uid
}
};
rush.sbom = {
getSbom: function (skuId) {
return ec.product.getSkuInfo(skuId)
},
isRushProduct: function () {
return $('#pro-global-parameter').attr('data-skulist-rushbuy') ? true : false
},
isRushSbom: function (skuId) {
var rushIds = $('#pro-global-parameter').attr('data-skulist-rushbuy');
var s = ',' + rushIds + ',',
i = ',' + skuId + ',';
if (s.indexOf(i) != - 1) {
return true
}
return false
},
getCurrSbom: function () {
return ec.product.getSkuInfo(ec.product.getSku())
},
getCurrSkuId: function () {
return ec.product.getSku()
},
getPackageCode: function () {
if (ec.diypkg.pkgs[ec.product.getSkuInfo(ec.product.getSku()).code] == null) {
return {
}
}
return ec.diypkg.pkgs[ec.product.getSkuInfo(ec.product.getSku()).code].packageCode
},
getSubProductSkus: function () {
var subProductSkus = '';
if (ec.diypkg.res == null) {
return subProductSkus
}
var temp = JSON.stringify(ec.diypkg.res.chked);
var skus = [
];
temp = temp.substring(1, temp.length - 1);
if (temp.length == 0 || temp == '') {
return subProductSkus
}
skus = temp.split(',');
for (var i = 0; i < skus.length; i++) {
var temp1 = skus[i].split(':') [1];
temp1 = temp1.substring(1, temp1.length - 1);
if (i < skus.length - 1) {
subProductSkus += temp1;
subProductSkus += ','
} else {
subProductSkus += temp1
}
}
return subProductSkus
},
getServiceProductList: function () {
var extendSbomCode = $('#extendSelect').attr('data-scode');
var accidentSbomCode = $('#accidentSelect').attr('data-scode');
var ucareSbomCode = $('#ucareSelect').attr('data-scode');
var extendCodes = [
];
if (extendSbomCode) {
extendCodes.push(extendSbomCode)
}
if (accidentSbomCode) {
extendCodes.push(accidentSbomCode)
}
if (ucareSbomCode) {
extendCodes.push(ucareSbomCode)
}
extendCodes.join(',');
return extendCodes
},
getSubProductSkusWithGroupId: function () {
var subProductSkusWithGroupId = '';
if (ec.diypkg.res == null) {
return subProductSkusWithGroupId
}
var temp = JSON.stringify(ec.diypkg.res.chked);
var skus = [
];
temp = temp.substring(1, temp.length - 1);
if (temp.length == 0 || temp == '') {
return subProductSkusWithGroupId
}
skus = temp.split(',');
var groupIdWithSku = new Map;
for (var i = 0; i < skus.length; i++) {
var temp1 = skus[i].split(':') [0];
temp1 = temp1.split('_') [0];
temp1 = temp1.substring(1, temp1.length);
var temp2 = skus[i].split(':') [1];
if (temp2 == 'false') {
continue
} else {
temp2 = temp2.substring(1, temp2.length - 1)
}
if (groupIdWithSku.has(parseInt(temp1))) {
groupIdWithSku.set(parseInt(temp1), groupIdWithSku.get(parseInt(temp1)) + ',' + temp2)
} else {
groupIdWithSku.set(parseInt(temp1), temp1 + '_' + temp2)
}
}
if (groupIdWithSku.size != 0) {
groupIdWithSku.forEach(function (value) {
subProductSkusWithGroupId += value + '&'
});
subProductSkusWithGroupId = subProductSkusWithGroupId.substring(0, subProductSkusWithGroupId.length - 1)
}
return subProductSkusWithGroupId
}
};
rush.activity = {
_loadStatus: 0,
_activityMap: {
},
getActivity: function (skuId) {
return rush.activity._activityMap[skuId]
},
isLoaded: function () {
return rush.activity._loadStatus == 1 ? true : false
},
afterLoaded: function (options) {
if (options.sbom.id != rush.business.runningSkuId) {
return
}
btnStatus = rush.business.newBtnStatus('A3U3Q3S3', options.sbom.id);
rush.business.displayBtnStatus(options.sbom, null, btnStatus);
if (rush.activity.isLoaded()) {
options.doCallBack(options.sbom)
} else {
var skuIds = $('#pro-global-parameter').attr('data-skulist-rushbuy');
var remoteUrl = domainRush + '/getSkuRushbuyInfo.json?skuIds=' + skuIds + '&t=' + (new Date).getTime();
$.ajax({
url: remoteUrl,
dataType: 'json',
timeout: 5000,
beforeSend: function (xhr) {
xhr.withCredentials = true
},
success: function (json) {
if (json) {
rush.business.setOffsetTime((new Date).getTime(), json.currentTime);
if (json.success == true && json.skuRushBuyInfoList) {
var a = json.skuRushBuyInfoList;
for (var i = 0; i < a.length; i++) {
if (a[i] && a[i].skuId) {
  rush.activity._activityMap[a[i].skuId] = a[i];
  if (a[i].startTime && a[i].endTime) {
    a[i].startTime=json.currentTime;
    rush.activity._activityMap[a[i].skuId].startTime = ec.util.parseDate(a[i].startTime).format('yyyy-MM-dd HH:mm:ss');
    rush.activity._activityMap[a[i].skuId].endTime = ec.util.parseDate(a[i].endTime).format('yyyy-MM-dd HH:mm:ss')
  }
}
}
rush.activity._loadStatus = 1
}
} else {
var b = '<a onclick="rush.business.clickBtn(1)" class="button-book-2 button-style-1" ><span>立即申购</span></a>';
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible')
}
},
complete: function (XMLHttpRequest, status) {
if (status == 'timeout') {
var b = '<a onclick="rush.business.clickBtn(1)" class="button-book-2 button-style-1" ><span>立即申购</span></a>';
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible')
} else {
options.doCallBack(options.sbom)
}
}
})
}
}
};
rush.qualification = {
afterChecked: function (options) {
if (options.sbom.id != rush.business.runningSkuId) {
return
}
var isqueue,
queueSign;
var act = options.act;
if (!act || !act.isRushBuySku) {
return
}
if (!rush.account.isLogin()) {
isqueue = 0;
options.doCallBack(options.sbom, options.act, isqueue);
return
}
activityId = act.activityId;
uid = rush.account.getUid();
isqueue = 0;
options.doCallBack(options.sbom, options.act, isqueue);
var qid = act.qids ? act.qids : '0';
var remoteUrl = domainYY + '/isqueue.json';
xhr({
url: remoteUrl,
method: 'post',
data: {
uid: uid,
qid: qid
},
success: function (json) {
if (json) {
if (json.isqueue && json.queueSign) {
var e = {
expires: act.endTime,
domain: 'vmall.com'
};
isqueue = json.isqueue;
queueSign = json.queueSign;
if (isqueue && queueSign) {
ec.util.cookie.set('isqueue-' + activityId + '-' + uid, isqueue, e);
ec.util.cookie.set('queueSign-' + activityId + '-' + uid, queueSign, e);
isqueue = ec.util.cookie.get('isqueue-' + activityId + '-' + uid);
queueSign = ec.util.cookie.get('queueSign-' + activityId + '-' + uid);
options.doCallBack(options.sbom, options.act, isqueue)
}
} else {
isqueue = ec.util.cookie.get('isqueue-' + activityId + '-' + uid);
queueSign = ec.util.cookie.get('queueSign-' + activityId + '-' + uid);
if (isqueue && queueSign) {
options.doCallBack(options.sbom, options.act, isqueue)
}
}
}
}
})
}
};
rush.business = {
offsetTime: 0,
setOffsetTime: function (time1, time2) {
rush.business.offsetTime = time2 - time1
},
getSysDate: function () {
return new Date((new Date).getTime() + rush.business.offsetTime)
},
timer: null,
btnStatus: {
},
btnSt2Mode: {
AXUXQXSX: 0,
A0UXQXSX: 1,
AXUXQXS2: 2,
A3UXQXS1: 3,
A1U1Q0S1: 4,
A1U1Q1S1: 4,
A1U1Q2S1: 5,
A2U1Q2S1: 5,
A1U0QXS1: 6,
A2U1Q0S1: 7,
A2U0QXS1: 7,
A3U3Q3S3: 8,
A4U1Q0S1: 9,
A2U1Q1S1: 10
},
newBtnStatus: function (s, i) {
var o = {
};
o.btnStatus = s;
o.btnMode = rush.business.btnSt2Mode[s];
o.skuId = i;
return o
},
runningSkuId: null,
doGoLogin: function () {
var targetURL = domainMain + '/account/login?url=' + encodeURIComponent(window.location.pathname + '#' + rush.sbom.getCurrSkuId()) + '&_t=' + (new Date).getTime();
ec.redirectTo(targetURL)
},
doGoRush: function (flag) {
var sbom = rush.sbom.getCurrSbom();
var o = {
};
o.mainSku = sbom.id;
o.targetUrl = sbom.gotoUrl;
o.diyPackCode = rush.sbom.getPackageCode();
o.diyPackSkus = rush.sbom.getSubProductSkus();
o.backUrl = domainMain + window.location.pathname + '#' + sbom.id;
var extendSbomCode = $('#extendSelect').attr('skuid');
var accidentSbomCode = $('#accidentSelect').attr('skuid');
var ucareSbomCode = $('#ucareSelect').attr('skuid');
var extendCodes = [
];
if (extendSbomCode) {
extendCodes.push(extendSbomCode)
}
if (accidentSbomCode) {
extendCodes.push(accidentSbomCode)
}
if (ucareSbomCode) {
extendCodes.push(ucareSbomCode)
}
o.accessoriesSkus = extendCodes.join(',');
var rushUrl = '';
if (o.targetUrl && o.mainSku && o.mainSku.length > 0) {
rushUrl = o.targetUrl + '?mainSku=' + o.mainSku;
if (o.accessoriesSkus && o.accessoriesSkus.length > 0) {
rushUrl += '&accessoriesSkus=' + o.accessoriesSkus
}
if (flag == 2) {
if (o.diyPackCode && o.diyPackCode.length > 0) {
rushUrl += '&diyPackCode=' + o.diyPackCode
}
if (o.diyPackSkus && o.diyPackSkus.length > 0) {
rushUrl += '&diyPackSkus=' + o.diyPackSkus
}
}
if (o.backUrl && o.backUrl.length > 0) {
rushUrl += '&backUrl=' + encodeURIComponent(o.backUrl) + ''
}
rushUrl += '&_t=' + (new Date).getTime();
ec.redirectTo(rushUrl)
} else {
return
}
},
clickBtn: function (flag) {
var key = 'rushprd_' + ec.product.id;
var value = ec.product.getSkuInfo(ec.product.getSku()).code + '-' + rush.sbom.getServiceProductList() + '-' + rush.sbom.getSubProductSkusWithGroupId();
ec.util.cookie.set(key, value, {
expires: 1 / 12,
domain: 'vmall.com'
});
if (rush.account.isLogin()) {
rush.business.doGoRush(flag)
} else {
rush.business.doGoLogin()
}
},
displayBtnStatus: function (sbom, activity, btnStatus) {
if (sbom.id != rush.business.runningSkuId) {
return
}
if (rush.business.btnStatus && rush.business.btnStatus.btnMode == btnStatus.btnMode) {
return
}
rush.business.btnStatus = btnStatus;
if (rush.business.timer) {
clearInterval(rush.business.timer);
rush.business.timer = null
}
$('#pro-operation').html('');
$('#pro-operation-msg').html('');
var getSku = ec.product.getSkuInfo(ec.product.getSku() || ec.product.defaultSku);
var b = '';
switch (btnStatus.btnMode) {
case 0:
if (ec.product.isEasyBuy()) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show();
b += '<a onclick="ec.product.orderEasyBuy()" class="product-button-priority" ><span>' + getSku.easyBuyName + '</span></a>'
}
b += '<a class="product-button02 disabled"><span>暂时缺货</span></a>';
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible');
$('#product-operation').show();
break;
case 1:
if (ec.product.isEasyBuy()) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show();
b += '<a onclick="ec.product.orderEasyBuy()" class="product-button-priority" ><span>' + getSku.easyBuyName + '</span></a>'
}
b += '<a class="product-button02 disabled"><span>暂时缺货</span></a>';
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible');
$('#product-operation').show();
break;
case 2:
if (ec.product.isEasyBuy()) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show();
b += '<a onclick="ec.product.orderEasyBuy()" class="product-button-priority" ><span>' + getSku.easyBuyName + '</span></a>'
}
b += '<a class="product-button02 disabled"><span>已售完</span></a>';
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible');
$('#product-operation').show();
break;
case 3:
if (ec.product.isEasyBuy()) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show();
b += '<a onclick="ec.product.orderEasyBuy()" class="product-button-priority" ><span>' + getSku.easyBuyName + '</span></a>'
}
b += '<a class="product-button02 disabled"><span>暂时缺货</span></a>';
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible');
$('#product-operation').show();
break;
case 4:
if (ec.product.isEasyBuy()) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show();
b += '<a onclick="ec.product.orderEasyBuy()" class="product-button-priority" ><span>' + getSku.easyBuyName + '</span></a>'
}
if (ec.product.productType == 4 || sbom.buttonMode == 25) {
b += '<a class="product-button02 disabled">支付订金</a></div><div id="pro-operation-countdown" class="product-time"></div>'
} else {
b += '<a class="product-button02 disabled">立即申购</a></div><div id="pro-operation-countdown" class="product-time"></div>'
}
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible');
$('#product-operation').show();
break;
case 5:
b = '<i></i><div class="tips-text"><p><span>温馨提示：</span><span id="pro-msg-title">您不符合本次购买条件。</span></p></div>';
b = '<div class="tips-style-2 tips-area" style="width:100%">' + b + '</div>';
$('#product-tips').html('温馨提示：您不符合本次购买条件。');
$('#product-tips').show();
$('#product-operation').css('visibility', 'hidden');
break;
case 6:
if (ec.product.isEasyBuy()) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show();
b += '<a onclick="ec.product.orderEasyBuy()" class="product-button-priority" ><span>' + getSku.easyBuyName + '</span></a>'
}
b += '<a onclick="rush.business.clickBtn()" class="product-button02" ><span>提前登录</span></a><div id="pro-operation-countdown" class="product-time"></div>';
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible');
$('#product-operation').show();
break;
case 7:
if (ec.product.isEasyBuy()) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show();
b += '<a onclick="ec.product.orderEasyBuy()" class="product-button-priority" ><span>' + getSku.easyBuyName + '</span></a>'
}
if (rush.account.isLogin()) {
if (ec.product.productType == 4 || sbom.buttonMode == 25) {
b += '<a onclick="rush.business.clickBtn()" class="product-button02" ><span>支付订金</span></a>'
} else {
b += '<a onclick="rush.business.clickBtn(1)" class="product-button02" ><span>立即申购</span></a>'
}
} else {
b += '<a onclick="rush.business.clickBtn()" class="product-button02" ><span>立即登录</span></a>'
}
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible');
$('#product-operation').show();
break;
case 8:
if (ec.product.isEasyBuy()) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show();
b += '<a onclick="ec.product.orderEasyBuy()" class="product-button-priority" ><span>' + getSku.easyBuyName + '</span></a>'
}
b += '<a class="product-button02 disabled"><span>正在加载...</span></a>';
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible');
$('#product-operation').show();
break;
case 9:
if (ec.product.isEasyBuy()) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show();
b += '<a onclick="ec.product.orderEasyBuy()" class="product-button-priority" ><span>' + getSku.easyBuyName + '</span></a>'
}
b += '<a class="product-button02 disabled" ><span>已售完</span></a>';
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible');
$('#product-operation').show();
break;
case 10:
if (ec.product.isEasyBuy()) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show();
b += '<a onclick="ec.product.orderEasyBuy()" class="product-button-priority" ><span>' + getSku.easyBuyName + '</span></a>'
}
if (ec.product.productType == 4 || sbom.buttonMode == 25) {
b += '<a onclick="rush.business.clickBtn()" class="product-button02" ><span>支付订金</span></a>'
} else {
b += '<a onclick="rush.business.clickBtn(1)" class="product-button02" ><span>立即申购</span></a>'
}
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible');
$('#product-operation').show();
break;
default:
if (ec.product.isEasyBuy()) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show();
b += '<a onclick="ec.product.orderEasyBuy()" class="product-button-priority" ><span>' + getSku.easyBuyName + '</span></a>'
}
b += '<a class="product-button02 disabled"><span>暂时缺货</span></a>';
$('#pro-operation').html(b);
$('#pro-operation').css('visibility', 'visible');
$('#product-operation').show();
break
}
ec.diypkg.render();
if ((btnStatus.btnMode == 4 || btnStatus.btnMode == 6) && $('#pro-operation-countdown') && activity && activity.startTime) {
var startTimeStr = ec.util.parseDate(activity.startTime).format('MM月dd日 HH:mm');
var nowDate = rush.business.getSysDate();
ec.ui.countdown2($('#pro-operation-countdown'), {
html: '<p>' + startTimeStr + '开售:\t</p><ul><li><span>{#day}</span></li><li><em>天</em></li><li><span>{#hours}</span></li><li><em>:</em></li><li><span>{#minutes}</span></li><li><em>:</em></li><li><span>{#seconds}</span></li>',
now: nowDate,
endTime: activity.startTime,
callback: function (json) {
if (rush.account.isLogin()) {
btnStatus = rush.business.newBtnStatus('A2U1Q1S1', sbom.id)
} else {
btnStatus = rush.business.newBtnStatus('A2U0QXS1', sbom.id)
}
rush.business.displayBtnStatus(sbom, act, btnStatus)
}
});
rush.business.timer = $($('#pro-operation-countdown')).data('countdown');
if (!rush.business.timer) {
if (rush.account.isLogin()) {
btnStatus = rush.business.newBtnStatus('A2U1Q1S1', sbom.id)
} else {
btnStatus = rush.business.newBtnStatus('A2U0QXS1', sbom.id)
}
rush.business.displayBtnStatus(sbom, act, btnStatus)
}
$('#goAddressId').show()
} else {
$('#goAddressId').hide()
}
ec.product.refreshStyle()
},
doIfSbomChanged: function (countTemp) {
var skuId = rush.sbom.getCurrSkuId();
rush.business.runningSkuId = skuId;
rush.business.btnStatus = null;
if (ec.product.productType == 4 && countTemp == 1) {
var getSku = rush.sbom.getSbom(skuId);
if (ec.product.isEasyBuy()) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show();
$('#pro-operation').html('<a onclick="ec.product.orderEasyBuy()" class="product-button-priority" ><span>' + getSku.easyBuyName + '</span></a>' + '<a target="_blank" href="' + getSku.gotoUrl + '" class="product-button02" ><span>参加抢购</span></a>')
} else {
$('#pro-operation').html('<a target="_blank" href="' + getSku.gotoUrl + '" class="product-button02" ><span>参加抢购</span></a>')
}
$('#pro-operation').css('visibility', 'visible');
$('#product-operation').show();
return
}
if (!rush.sbom.isRushProduct() || !rush.sbom.isRushSbom(skuId)) {
return
}
if (rush.sbom.isRushProduct() && rush.sbom.isRushSbom(skuId)) {
$('#pro-quantity-area').hide();
$('#pro-quantity-area-nochange').show()
}
var sbom = null,
activity = null;
sbom = rush.sbom.getSbom(skuId);
if (rush.sbom.isRushProduct()) {
rush.activity.afterLoaded({
sbom: sbom,
doCallBack: function (sbom) {
if (sbom.id != rush.business.runningSkuId) {
return
}
var skuId = sbom.id;
if (rush.sbom.isRushSbom(skuId)) {
act = rush.activity.getActivity(skuId);
if (sbom && act && act.isRushBuySku) {
rush.qualification.afterChecked({
sbom: sbom,
act: act,
doCallBack: function (sbom, act, isqueue) {
if (sbom.id != rush.business.runningSkuId) {
return
}
var btnStatus = rush.business.calculateBtnStatus(sbom, act, isqueue);
rush.business.displayBtnStatus(sbom, act, btnStatus)
}
})
} else {
btnStatus = rush.business.newBtnStatus('A0UXQXSX', sbom.id);
rush.business.displayBtnStatus(sbom, act, btnStatus);
return
}
} else {
return
}
}
})
} else {
return
}
},
calculateBtnStatus: function (sbom, act, isqueue) {
var btnStatus = 'AXUXQXSX';
var nowTime = new Date,
startTime = new Date,
endTime = new Date;
try {
nowTime = rush.business.getSysDate();
startTime.setTime(ec.util.parseDate(act.startTime));
endTime.setTime(ec.util.parseDate(act.endTime))
} catch (err) {
btnStatus = 'AXUXQXSX';
return rush.business.newBtnStatus(btnStatus, sbom.id)
}
if (nowTime > endTime) {
if (act.skuStatus == 0) {
btnStatus = 'AXUXQXS2';
return rush.business.newBtnStatus(btnStatus, sbom.id)
}
btnStatus = 'A3UXQXS1';
return rush.business.newBtnStatus(btnStatus, sbom.id)
}
if (!act.qids || act.qids == '0') {
result = 1
} else {
if (isqueue == 2) {
result = 2
} else if (isqueue == 1) {
result = 1
} else {
result = 0
}
}
if (nowTime < startTime) {
if (rush.account.isLogin()) {
switch (result) {
case 1:
btnStatus = 'A1U1Q1S1';
break;
case 2:
btnStatus = 'A1U1Q2S1';
break;
default:
btnStatus = 'A1U1Q0S1'
}
} else {
btnStatus = 'A1U0QXS1'
}
return rush.business.newBtnStatus(btnStatus, sbom.id)
}
if (nowTime >= startTime) {
if (act.skuStatus == 0) {
btnStatus = 'AXUXQXS2';
return rush.business.newBtnStatus(btnStatus, sbom.id)
} else if (act.skuStatus == 2) {
btnStatus = 'A4U1Q0S1';
return rush.business.newBtnStatus(btnStatus, sbom.id)
}
if (rush.account.isLogin()) {
switch (result) {
case 1:
btnStatus = 'A2U1Q1S1';
break;
case 2:
btnStatus = 'A2U1Q2S1';
break;
default:
btnStatus = 'A2U1Q0S1'
}
} else {
btnStatus = 'A2U0QXS1'
}
return rush.business.newBtnStatus(btnStatus, sbom.id)
}
}
};
(function (r) {
r.fn.qrcode = function (h) {
var s;
function u(a) {
this.mode = s;
this.data = a
}
function o(a, c) {
this.typeNumber = a;
this.errorCorrectLevel = c;
this.modules = null;
this.moduleCount = 0;
this.dataCache = null;
this.dataList = [
]
}
function q(a, c) {
if (void 0 == a.length) throw Error(a.length + '/' + c);
for (var d = 0; d < a.length && 0 == a[d]; ) d++;
this.num = Array(a.length - d + c);
for (var b = 0; b < a.length - d; b++) this.num[b] = a[b + d]
}
function p(a, c) {
this.totalCount = a;
this.dataCount = c
}
function t() {
this.buffer = [
];
this.length = 0
}
u.prototype = {
getLength: function () {
return this.data.length
},
write: function (a) {
for (var c = 0; c < this.data.length; c++) a.put(this.data.charCodeAt(c), 8)
}
};
o.prototype = {
addData: function (a) {
this.dataList.push(new u(a));
this.dataCache = null
},
isDark: function (a, c) {
if (0 > a || this.moduleCount <= a || 0 > c || this.moduleCount <= c) throw Error(a + ',' + c);
return this.modules[a][c]
},
getModuleCount: function () {
return this.moduleCount
},
make: function () {
if (1 > this.typeNumber) {
for (var a = 1, a = 1; 40 > a; a++) {
for (var c = p.getRSBlocks(a, this.errorCorrectLevel), d = new t, b = 0, e = 0; e < c.length; e++) b += c[e].dataCount;
for (e = 0; e < this.dataList.length; e++) c = this.dataList[e],
d.put(c.mode, 4),
d.put(c.getLength(), j.getLengthInBits(c.mode, a)),
c.write(d);
if (d.getLengthInBits() <= 8 * b) break
}
this.typeNumber = a
}
this.makeImpl(!1, this.getBestMaskPattern())
},
makeImpl: function (a, c) {
this.moduleCount = 4 * this.typeNumber + 17;
this.modules = Array(this.moduleCount);
for (var d = 0; d < this.moduleCount; d++) {
this.modules[d] = Array(this.moduleCount);
for (var b = 0; b < this.moduleCount; b++) this.modules[d][b] = null
}
this.setupPositionProbePattern(0, 0);
this.setupPositionProbePattern(this.moduleCount -
7, 0);
this.setupPositionProbePattern(0, this.moduleCount - 7);
this.setupPositionAdjustPattern();
this.setupTimingPattern();
this.setupTypeInfo(a, c);
7 <= this.typeNumber && this.setupTypeNumber(a);
null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
this.mapData(this.dataCache, c)
},
setupPositionProbePattern: function (a, c) {
for (var d = - 1; 7 >= d; d++) if (!( - 1 >= a + d || this.moduleCount <= a + d)) for (var b = - 1; 7 >= b; b++) - 1 >= c + b || this.moduleCount <= c + b || (this.modules[a + d][c + b] = 0 <= d && 6 >= d && (0 == b || 6 == b) || 0 <= b && 6 >= b && (0 == d || 6 == d) || 2 <= d && 4 >= d && 2 <= b && 4 >= b ? !0 : !1)
},
getBestMaskPattern: function () {
for (var a = 0, c = 0, d = 0; 8 > d; d++) {
this.makeImpl(!0, d);
var b = j.getLostPoint(this);
if (0 == d || a > b) a = b,
c = d
}
return c
},
createMovieClip: function (a, c, d) {
a = a.createEmptyMovieClip(c, d);
this.make();
for (c = 0; c < this.modules.length; c++) for (var d = 1 * c, b = 0; b < this.modules[c].length; b++) {
var e = 1 * b;
this.modules[c][b] && (a.beginFill(0, 100), a.moveTo(e, d), a.lineTo(e + 1, d), a.lineTo(e + 1, d + 1), a.lineTo(e, d + 1), a.endFill())
}
return a
},
setupTimingPattern: function () {
for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
for (a = 8; a < this.moduleCount - 8; a++) null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
},
setupPositionAdjustPattern: function () {
for (var a = j.getPatternPosition(this.typeNumber), c = 0; c < a.length; c++) for (var d = 0; d < a.length; d++) {
var b = a[c],
e = a[d];
if (null == this.modules[b][e]) for (var f = - 2; 2 >= f; f++) for (var i = - 2; 2 >= i; i++) this.modules[b + f][e + i] = - 2 == f || 2 == f || - 2 == i || 2 == i || 0 == f && 0 == i ? !0 : !1
}
},
setupTypeNumber: function (a) {
for (var c = j.getBCHTypeNumber(this.typeNumber), d = 0; 18 > d; d++) {
var b = !a && 1 == (c >> d & 1);
this.modules[Math.floor(d / 3)][d % 3 + this.moduleCount - 8 - 3] = b
}
for (d = 0; 18 > d; d++) b = !a && 1 == (c >> d & 1),
this.modules[d % 3 + this.moduleCount - 8 - 3][Math.floor(d / 3)] = b
},
setupTypeInfo: function (a, c) {
for (var d = j.getBCHTypeInfo(this.errorCorrectLevel << 3 | c), b = 0; 15 > b; b++) {
var e = !a && 1 == (d >> b & 1);
6 > b ? this.modules[b][8] = e : 8 > b ? this.modules[b + 1][8] = e : this.modules[this.moduleCount - 15 + b][8] = e
}
for (b = 0; 15 > b; b++) e = !a && 1 == (d >> b & 1),
8 > b ? this.modules[8][this.moduleCount -
b - 1] = e : 9 > b ? this.modules[8][15 - b - 1 + 1] = e : this.modules[8][15 - b - 1] = e;
this.modules[this.moduleCount - 8][8] = !a
},
mapData: function (a, c) {
for (var d = - 1, b = this.moduleCount - 1, e = 7, f = 0, i = this.moduleCount - 1; 0 < i; i -= 2) for (6 == i && i--; ; ) {
for (var g = 0; 2 > g; g++) if (null == this.modules[b][i - g]) {
var n = !1;
f < a.length && (n = 1 == (a[f] >>> e & 1));
j.getMask(c, b, i - g) && (n = !n);
this.modules[b][i - g] = n;
e--;
- 1 == e && (f++, e = 7)
}
b += d;
if (0 > b || this.moduleCount <= b) {
b -= d;
d = - d;
break
}
}
}
};
o.PAD0 = 236;
o.PAD1 = 17;
o.createData = function (a, c, d) {
for (var c = p.getRSBlocks(a, c), b = new t, e = 0; e < d.length; e++) {
var f = d[e];
b.put(f.mode, 4);
b.put(f.getLength(), j.getLengthInBits(f.mode, a));
f.write(b)
}
for (e = a = 0; e < c.length; e++) a += c[e].dataCount;
if (b.getLengthInBits() > 8 * a) throw Error('code length overflow. (' + b.getLengthInBits() + '>' + 8 * a + ')');
for (b.getLengthInBits() + 4 <= 8 * a && b.put(0, 4); 0 != b.getLengthInBits() % 8; ) b.putBit(!1);
for (; !(b.getLengthInBits() >= 8 * a); ) {
b.put(o.PAD0, 8);
if (b.getLengthInBits() >= 8 * a) break;
b.put(o.PAD1, 8)
}
return o.createBytes(b, c)
};
o.createBytes = function (a, c) {
for (var d = 0, b = 0, e = 0, f = Array(c.length), i = Array(c.length), g = 0; g < c.length; g++) {
var n = c[g].dataCount,
h = c[g].totalCount - n,
b = Math.max(b, n),
e = Math.max(e, h);
f[g] = Array(n);
for (var k = 0; k < f[g].length; k++) f[g][k] = 255 & a.buffer[k + d];
d += n;
k = j.getErrorCorrectPolynomial(h);
n = (new q(f[g], k.getLength() - 1)).mod(k);
i[g] = Array(k.getLength() - 1);
for (k = 0; k < i[g].length; k++) h = k + n.getLength() - i[g].length,
i[g][k] = 0 <= h ? n.get(h)  : 0
}
for (k = g = 0; k < c.length; k++) g += c[k].totalCount;
d = Array(g);
for (k = n = 0; k < b; k++) for (g = 0; g < c.length; g++) k < f[g].length && (d[n++] = f[g][k]);
for (k = 0; k < e; k++) for (g = 0; g < c.length; g++) k < i[g].length && (d[n++] = i[g][k]);
return d
};
s = 4;
for (var j = {
PATTERN_POSITION_TABLE: [
[],
[
6,
18
],
[
6,
22
],
[
6,
26
],
[
6,
30
],
[
6,
34
],
[
6,
22,
38
],
[
6,
24,
42
],
[
6,
26,
46
],
[
6,
28,
50
],
[
6,
30,
54
],
[
6,
32,
58
],
[
6,
34,
62
],
[
6,
26,
46,
66
],
[
6,
26,
48,
70
],
[
6,
26,
50,
74
],
[
6,
30,
54,
78
],
[
6,
30,
56,
82
],
[
6,
30,
58,
86
],
[
6,
34,
62,
90
],
[
6,
28,
50,
72,
94
],
[
6,
26,
50,
74,
98
],
[
6,
30,
54,
78,
102
],
[
6,
28,
54,
80,
106
],
[
6,
32,
58,
84,
110
],
[
6,
30,
58,
86,
114
],
[
6,
34,
62,
90,
118
],
[
6,
26,
50,
74,
98,
122
],
[
6,
30,
54,
78,
102,
126
],
[
6,
26,
52,
78,
104,
130
],
[
6,
30,
56,
82,
108,
134
],
[
6,
34,
60,
86,
112,
138
],
[
6,
30,
58,
86,
114,
142
],
[
6,
34,
62,
90,
118,
146
],
[
6,
30,
54,
78,
102,
126,
150
],
[
6,
24,
50,
76,
102,
128,
154
],
[
6,
28,
54,
80,
106,
132,
158
],
[
6,
32,
58,
84,
110,
136,
162
],
[
6,
26,
54,
82,
110,
138,
166
],
[
6,
30,
58,
86,
114,
142,
170
]
],
G15: 1335,
G18: 7973,
G15_MASK: 21522,
getBCHTypeInfo: function (a) {
for (var c = a << 10; 0 <= j.getBCHDigit(c) - j.getBCHDigit(j.G15); ) c ^= j.G15 << j.getBCHDigit(c) - j.getBCHDigit(j.G15);
return (a << 10 | c) ^ j.G15_MASK
},
getBCHTypeNumber: function (a) {
for (var c = a << 12; 0 <= j.getBCHDigit(c) -
j.getBCHDigit(j.G18); ) c ^= j.G18 << j.getBCHDigit(c) - j.getBCHDigit(j.G18);
return a << 12 | c
},
getBCHDigit: function (a) {
for (var c = 0; 0 != a; ) c++,
a >>>= 1;
return c
},
getPatternPosition: function (a) {
return j.PATTERN_POSITION_TABLE[a - 1]
},
getMask: function (a, c, d) {
switch (a) {
case 0:
return 0 == (c + d) % 2;
case 1:
return 0 == c % 2;
case 2:
return 0 == d % 3;
case 3:
return 0 == (c + d) % 3;
case 4:
return 0 == (Math.floor(c / 2) + Math.floor(d / 3)) % 2;
case 5:
return 0 == c * d % 2 + c * d % 3;
case 6:
return 0 == (c * d % 2 + c * d % 3) % 2;
case 7:
return 0 == (c * d % 3 + (c + d) % 2) % 2;
default:
throw Error('bad maskPattern:' +
a);
}
},
getErrorCorrectPolynomial: function (a) {
for (var c = new q([1], 0), d = 0; d < a; d++) c = c.multiply(new q([1,
l.gexp(d)], 0));
return c
},
getLengthInBits: function (a, c) {
if (1 <= c && 10 > c) switch (a) {
case 1:
return 10;
case 2:
return 9;
case s:
return 8;
case 8:
return 8;
default:
throw Error('mode:' + a);
} else if (27 > c) switch (a) {
case 1:
return 12;
case 2:
return 11;
case s:
return 16;
case 8:
return 10;
default:
throw Error('mode:' + a);
} else if (41 > c) switch (a) {
case 1:
return 14;
case 2:
return 13;
case s:
return 16;
case 8:
return 12;
default:
throw Error('mode:' +
a);
} else throw Error('type:' + c);
},
getLostPoint: function (a) {
for (var c = a.getModuleCount(), d = 0, b = 0; b < c; b++) for (var e = 0; e < c; e++) {
for (var f = 0, i = a.isDark(b, e), g = - 1; 1 >= g; g++) if (!(0 > b + g || c <= b + g)) for (var h = - 1; 1 >= h; h++) 0 > e + h || c <= e + h || 0 == g && 0 == h || i == a.isDark(b + g, e + h) && f++;
5 < f && (d += 3 + f - 5)
}
for (b = 0; b < c - 1; b++) for (e = 0; e < c - 1; e++) if (f = 0, a.isDark(b, e) && f++, a.isDark(b + 1, e) && f++, a.isDark(b, e + 1) && f++, a.isDark(b + 1, e + 1) && f++, 0 == f || 4 == f) d += 3;
for (b = 0; b < c; b++) for (e = 0; e < c - 6; e++) a.isDark(b, e) && !a.isDark(b, e + 1) && a.isDark(b, e +
2) && a.isDark(b, e + 3) && a.isDark(b, e + 4) && !a.isDark(b, e + 5) && a.isDark(b, e + 6) && (d += 40);
for (e = 0; e < c; e++) for (b = 0; b < c - 6; b++) a.isDark(b, e) && !a.isDark(b + 1, e) && a.isDark(b + 2, e) && a.isDark(b + 3, e) && a.isDark(b + 4, e) && !a.isDark(b + 5, e) && a.isDark(b + 6, e) && (d += 40);
for (e = f = 0; e < c; e++) for (b = 0; b < c; b++) a.isDark(b, e) && f++;
a = Math.abs(100 * f / c / c - 50) / 5;
return d + 10 * a
}
},
l = {
glog: function (a) {
if (1 > a) throw Error('glog(' + a + ')');
return l.LOG_TABLE[a]
},
gexp: function (a) {
for (; 0 > a; ) a += 255;
for (; 256 <= a; ) a -= 255;
return l.EXP_TABLE[a]
},
EXP_TABLE: Array(256),
LOG_TABLE: Array(256)
},
m = 0;
8 > m;
m++) l.EXP_TABLE[m] = 1 << m;
for (m = 8; 256 > m; m++) l.EXP_TABLE[m] = l.EXP_TABLE[m - 4] ^ l.EXP_TABLE[m - 5] ^ l.EXP_TABLE[m - 6] ^ l.EXP_TABLE[m - 8];
for (m = 0; 255 > m; m++) l.LOG_TABLE[l.EXP_TABLE[m]] = m;
q.prototype = {
get: function (a) {
return this.num[a]
},
getLength: function () {
return this.num.length
},
multiply: function (a) {
for (var c = Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++) for (var b = 0; b < a.getLength(); b++) c[d + b] ^= l.gexp(l.glog(this.get(d)) + l.glog(a.get(b)));
return new q(c, 0)
},
mod: function (a) {
if (0 >
this.getLength() - a.getLength()) return this;
for (var c = l.glog(this.get(0)) - l.glog(a.get(0)), d = Array(this.getLength()), b = 0; b < this.getLength(); b++) d[b] = this.get(b);
for (b = 0; b < a.getLength(); b++) d[b] ^= l.gexp(l.glog(a.get(b)) + c);
return (new q(d, 0)).mod(a)
}
};
p.RS_BLOCK_TABLE = [
[1,
26,
19],
[
1,
26,
16
],
[
1,
26,
13
],
[
1,
26,
9
],
[
1,
44,
34
],
[
1,
44,
28
],
[
1,
44,
22
],
[
1,
44,
16
],
[
1,
70,
55
],
[
1,
70,
44
],
[
2,
35,
17
],
[
2,
35,
13
],
[
1,
100,
80
],
[
2,
50,
32
],
[
2,
50,
24
],
[
4,
25,
9
],
[
1,
134,
108
],
[
2,
67,
43
],
[
2,
33,
15,
2,
34,
16
],
[
2,
33,
11,
2,
34,
12
],
[
2,
86,
68
],
[
4,
43,
27
],
[
4,
43,
19
],
[
4,
43,
15
],
[
2,
98,
78
],
[
4,
49,
31
],
[
2,
32,
14,
4,
33,
15
],
[
4,
39,
13,
1,
40,
14
],
[
2,
121,
97
],
[
2,
60,
38,
2,
61,
39
],
[
4,
40,
18,
2,
41,
19
],
[
4,
40,
14,
2,
41,
15
],
[
2,
146,
116
],
[
3,
58,
36,
2,
59,
37
],
[
4,
36,
16,
4,
37,
17
],
[
4,
36,
12,
4,
37,
13
],
[
2,
86,
68,
2,
87,
69
],
[
4,
69,
43,
1,
70,
44
],
[
6,
43,
19,
2,
44,
20
],
[
6,
43,
15,
2,
44,
16
],
[
4,
101,
81
],
[
1,
80,
50,
4,
81,
51
],
[
4,
50,
22,
4,
51,
23
],
[
3,
36,
12,
8,
37,
13
],
[
2,
116,
92,
2,
117,
93
],
[
6,
58,
36,
2,
59,
37
],
[
4,
46,
20,
6,
47,
21
],
[
7,
42,
14,
4,
43,
15
],
[
4,
133,
107
],
[
8,
59,
37,
1,
60,
38
],
[
8,
44,
20,
4,
45,
21
],
[
12,
33,
11,
4,
34,
12
],
[
3,
145,
115,
1,
146,
116
],
[
4,
64,
40,
5,
65,
41
],
[
11,
36,
16,
5,
37,
17
],
[
11,
36,
12,
5,
37,
13
],
[
5,
109,
87,
1,
110,
88
],
[
5,
65,
41,
5,
66,
42
],
[
5,
54,
24,
7,
55,
25
],
[
11,
36,
12
],
[
5,
122,
98,
1,
123,
99
],
[
7,
73,
45,
3,
74,
46
],
[
15,
43,
19,
2,
44,
20
],
[
3,
45,
15,
13,
46,
16
],
[
1,
135,
107,
5,
136,
108
],
[
10,
74,
46,
1,
75,
47
],
[
1,
50,
22,
15,
51,
23
],
[
2,
42,
14,
17,
43,
15
],
[
5,
150,
120,
1,
151,
121
],
[
9,
69,
43,
4,
70,
44
],
[
17,
50,
22,
1,
51,
23
],
[
2,
42,
14,
19,
43,
15
],
[
3,
141,
113,
4,
142,
114
],
[
3,
70,
44,
11,
71,
45
],
[
17,
47,
21,
4,
48,
22
],
[
9,
39,
13,
16,
40,
14
],
[
3,
135,
107,
5,
136,
108
],
[
3,
67,
41,
13,
68,
42
],
[
15,
54,
24,
5,
55,
25
],
[
15,
43,
15,
10,
44,
16
],
[
4,
144,
116,
4,
145,
117
],
[
17,
68,
42
],
[
17,
50,
22,
6,
51,
23
],
[
19,
46,
16,
6,
47,
17
],
[
2,
139,
111,
7,
140,
112
],
[
17,
74,
46
],
[
7,
54,
24,
16,
55,
25
],
[
34,
37,
13
],
[
4,
151,
121,
5,
152,
122
],
[
4,
75,
47,
14,
76,
48
],
[
11,
54,
24,
14,
55,
25
],
[
16,
45,
15,
14,
46,
16
],
[
6,
147,
117,
4,
148,
118
],
[
6,
73,
45,
14,
74,
46
],
[
11,
54,
24,
16,
55,
25
],
[
30,
46,
16,
2,
47,
17
],
[
8,
132,
106,
4,
133,
107
],
[
8,
75,
47,
13,
76,
48
],
[
7,
54,
24,
22,
55,
25
],
[
22,
45,
15,
13,
46,
16
],
[
10,
142,
114,
2,
143,
115
],
[
19,
74,
46,
4,
75,
47
],
[
28,
50,
22,
6,
51,
23
],
[
33,
46,
16,
4,
47,
17
],
[
8,
152,
122,
4,
153,
123
],
[
22,
73,
45,
3,
74,
46
],
[
8,
53,
23,
26,
54,
24
],
[
12,
45,
15,
28,
46,
16
],
[
3,
147,
117,
10,
148,
118
],
[
3,
73,
45,
23,
74,
46
],
[
4,
54,
24,
31,
55,
25
],
[
11,
45,
15,
31,
46,
16
],
[
7,
146,
116,
7,
147,
117
],
[
21,
73,
45,
7,
74,
46
],
[
1,
53,
23,
37,
54,
24
],
[
19,
45,
15,
26,
46,
16
],
[
5,
145,
115,
10,
146,
116
],
[
19,
75,
47,
10,
76,
48
],
[
15,
54,
24,
25,
55,
25
],
[
23,
45,
15,
25,
46,
16
],
[
13,
145,
115,
3,
146,
116
],
[
2,
74,
46,
29,
75,
47
],
[
42,
54,
24,
1,
55,
25
],
[
23,
45,
15,
28,
46,
16
],
[
17,
145,
115
],
[
10,
74,
46,
23,
75,
47
],
[
10,
54,
24,
35,
55,
25
],
[
19,
45,
15,
35,
46,
16
],
[
17,
145,
115,
1,
146,
116
],
[
14,
74,
46,
21,
75,
47
],
[
29,
54,
24,
19,
55,
25
],
[
11,
45,
15,
46,
46,
16
],
[
13,
145,
115,
6,
146,
116
],
[
14,
74,
46,
23,
75,
47
],
[
44,
54,
24,
7,
55,
25
],
[
59,
46,
16,
1,
47,
17
],
[
12,
151,
121,
7,
152,
122
],
[
12,
75,
47,
26,
76,
48
],
[
39,
54,
24,
14,
55,
25
],
[
22,
45,
15,
41,
46,
16
],
[
6,
151,
121,
14,
152,
122
],
[
6,
75,
47,
34,
76,
48
],
[
46,
54,
24,
10,
55,
25
],
[
2,
45,
15,
64,
46,
16
],
[
17,
152,
122,
4,
153,
123
],
[
29,
74,
46,
14,
75,
47
],
[
49,
54,
24,
10,
55,
25
],
[
24,
45,
15,
46,
46,
16
],
[
4,
152,
122,
18,
153,
123
],
[
13,
74,
46,
32,
75,
47
],
[
48,
54,
24,
14,
55,
25
],
[
42,
45,
15,
32,
46,
16
],
[
20,
147,
117,
4,
148,
118
],
[
40,
75,
47,
7,
76,
48
],
[
43,
54,
24,
22,
55,
25
],
[
10,
45,
15,
67,
46,
16
],
[
19,
148,
118,
6,
149,
119
],
[
18,
75,
47,
31,
76,
48
],
[
34,
54,
24,
34,
55,
25
],
[
20,
45,
15,
61,
46,
16
]
];
p.getRSBlocks = function (a, c) {
var d = p.getRsBlockTable(a, c);
if (void 0 == d) throw Error('bad rs block @ typeNumber:' + a + '/errorCorrectLevel:' + c);
for (var b = d.length / 3, e = [
], f = 0; f < b; f++) for (var h = d[3 * f + 0], g = d[3 * f + 1], j = d[3 * f + 2], l = 0; l < h; l++) e.push(new p(g, j));
return e
};
p.getRsBlockTable = function (a, c) {
switch (c) {
case 1:
return p.RS_BLOCK_TABLE[4 * (a - 1) + 0];
case 0:
return p.RS_BLOCK_TABLE[4 * (a - 1) + 1];
case 3:
return p.RS_BLOCK_TABLE[4 * (a - 1) + 2];
case 2:
return p.RS_BLOCK_TABLE[4 * (a - 1) + 3]
}
};
t.prototype = {
get: function (a) {
return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1)
},
put: function (a, c) {
for (var d = 0; d < c; d++) this.putBit(1 == (a >>> c - d - 1 & 1))
},
getLengthInBits: function () {
return this.length
},
putBit: function (a) {
var c = Math.floor(this.length / 8);
this.buffer.length <= c && this.buffer.push(0);
a && (this.buffer[c] |= 128 >>> this.length % 8);
this.length++
}
};
'string' === typeof h && (h = {
text: h
});
h = r.extend({
}, {
render: 'canvas',
width: 256,
height: 256,
typeNumber: - 1,
correctLevel: 2,
background: '#ffffff',
foreground: '#000000'
}, h);
return this.each(function () {
var a;
if ('canvas' == h.render) {
a = new o(h.typeNumber, h.correctLevel);
a.addData(h.text);
a.make();
var c = document.createElement('canvas');
c.width = h.width;
c.height = h.height;
for (var d = c.getContext('2d'), b = h.width / a.getModuleCount(), e = h.height / a.getModuleCount(), f = 0; f < a.getModuleCount(); f++) for (var i = 0; i < a.getModuleCount(); i++) {
d.fillStyle = a.isDark(f, i) ? h.foreground : h.background;
var g = Math.ceil((i + 1) * b) - Math.floor(i * b),
j = Math.ceil((f + 1) * b) - Math.floor(f * b);
d.fillRect(Math.round(i * b), Math.round(f * e), g, j)
}
} else {
a = new o(h.typeNumber, h.correctLevel);
a.addData(h.text);
a.make();
c = r('<table></table>').css('width', h.width + 'px').css('height', h.height + 'px').css('border', '0px').css('border-collapse', 'collapse').css('background-color', h.background);
d = h.width / a.getModuleCount();
b = h.height / a.getModuleCount();
for (e = 0; e < a.getModuleCount(); e++) {
f = r('<tr></tr>').css('height', b + 'px').appendTo(c);
for (i = 0; i < a.getModuleCount(); i++) r('<td></td>').css('width', d + 'px').css('background-color', a.isDark(e, i) ? h.foreground : h.background).appendTo(f)
}
}
a = c;
jQuery(a).appendTo(this)
})
}
}) (jQuery);

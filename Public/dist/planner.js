!(function (e) {
	var t = {}
	function n(a) {
		if (t[a]) return t[a].exports
		var r = (t[a] = { i: a, l: !1, exports: {} })
		return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
	}
	;(n.m = e),
		(n.c = t),
		(n.d = function (e, t, a) {
			n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a })
		}),
		(n.r = function (e) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 })
		}),
		(n.t = function (e, t) {
			if ((1 & t && (e = n(e)), 8 & t)) return e
			if (4 & t && "object" == typeof e && e && e.__esModule) return e
			var a = Object.create(null)
			if (
				(n.r(a),
				Object.defineProperty(a, "default", { enumerable: !0, value: e }),
				2 & t && "string" != typeof e)
			)
				for (var r in e)
					n.d(
						a,
						r,
						function (t) {
							return e[t]
						}.bind(null, r),
					)
			return a
		}),
		(n.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default
					  }
					: function () {
							return e
					  }
			return n.d(t, "a", t), t
		}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}),
		(n.p = "/"),
		n((n.s = 146))
})([
	function (e, t, n) {
		;(function (e) {
			e.exports = (function () {
				"use strict"
				var t, a
				function r() {
					return t.apply(null, arguments)
				}
				function s(e) {
					return (
						e instanceof Array ||
						"[object Array]" === Object.prototype.toString.call(e)
					)
				}
				function i(e) {
					return (
						null != e && "[object Object]" === Object.prototype.toString.call(e)
					)
				}
				function o(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				function d(e) {
					if (Object.getOwnPropertyNames)
						return 0 === Object.getOwnPropertyNames(e).length
					var t
					for (t in e) if (o(e, t)) return !1
					return !0
				}
				function u(e) {
					return void 0 === e
				}
				function _(e) {
					return (
						"number" == typeof e ||
						"[object Number]" === Object.prototype.toString.call(e)
					)
				}
				function l(e) {
					return (
						e instanceof Date ||
						"[object Date]" === Object.prototype.toString.call(e)
					)
				}
				function m(e, t) {
					var n,
						a = []
					for (n = 0; n < e.length; ++n) a.push(t(e[n], n))
					return a
				}
				function c(e, t) {
					for (var n in t) o(t, n) && (e[n] = t[n])
					return (
						o(t, "toString") && (e.toString = t.toString),
						o(t, "valueOf") && (e.valueOf = t.valueOf),
						e
					)
				}
				function h(e, t, n, a) {
					return Tt(e, t, n, a, !0).utc()
				}
				function f(e) {
					return (
						null == e._pf &&
							(e._pf = {
								empty: !1,
								unusedTokens: [],
								unusedInput: [],
								overflow: -2,
								charsLeftOver: 0,
								nullInput: !1,
								invalidEra: null,
								invalidMonth: null,
								invalidFormat: !1,
								userInvalidated: !1,
								iso: !1,
								parsedDateParts: [],
								era: null,
								meridiem: null,
								rfc2822: !1,
								weekdayMismatch: !1,
							}),
						e._pf
					)
				}
				function p(e) {
					if (null == e._isValid) {
						var t = f(e),
							n = a.call(t.parsedDateParts, function (e) {
								return null != e
							}),
							r =
								!isNaN(e._d.getTime()) &&
								t.overflow < 0 &&
								!t.empty &&
								!t.invalidEra &&
								!t.invalidMonth &&
								!t.invalidWeekday &&
								!t.weekdayMismatch &&
								!t.nullInput &&
								!t.invalidFormat &&
								!t.userInvalidated &&
								(!t.meridiem || (t.meridiem && n))
						if (
							(e._strict &&
								(r =
									r &&
									0 === t.charsLeftOver &&
									0 === t.unusedTokens.length &&
									void 0 === t.bigHour),
							null != Object.isFrozen && Object.isFrozen(e))
						)
							return r
						e._isValid = r
					}
					return e._isValid
				}
				function M(e) {
					var t = h(NaN)
					return null != e ? c(f(t), e) : (f(t).userInvalidated = !0), t
				}
				a = Array.prototype.some
					? Array.prototype.some
					: function (e) {
							var t,
								n = Object(this),
								a = n.length >>> 0
							for (t = 0; t < a; t++)
								if (t in n && e.call(this, n[t], t, n)) return !0
							return !1
					  }
				var y = (r.momentProperties = []),
					L = !1
				function Y(e, t) {
					var n, a, r
					if (
						(u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
						u(t._i) || (e._i = t._i),
						u(t._f) || (e._f = t._f),
						u(t._l) || (e._l = t._l),
						u(t._strict) || (e._strict = t._strict),
						u(t._tzm) || (e._tzm = t._tzm),
						u(t._isUTC) || (e._isUTC = t._isUTC),
						u(t._offset) || (e._offset = t._offset),
						u(t._pf) || (e._pf = f(t)),
						u(t._locale) || (e._locale = t._locale),
						y.length > 0)
					)
						for (n = 0; n < y.length; n++) u((r = t[(a = y[n])])) || (e[a] = r)
					return e
				}
				function g(e) {
					Y(this, e),
						(this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
						this.isValid() || (this._d = new Date(NaN)),
						!1 === L && ((L = !0), r.updateOffset(this), (L = !1))
				}
				function k(e) {
					return e instanceof g || (null != e && null != e._isAMomentObject)
				}
				function D(e) {
					!1 === r.suppressDeprecationWarnings &&
						"undefined" != typeof console &&
						console.warn &&
						console.warn("Deprecation warning: " + e)
				}
				function v(e, t) {
					var n = !0
					return c(function () {
						if (
							(null != r.deprecationHandler && r.deprecationHandler(null, e), n)
						) {
							var a,
								s,
								i,
								d = []
							for (s = 0; s < arguments.length; s++) {
								if (((a = ""), "object" == typeof arguments[s])) {
									for (i in ((a += "\n[" + s + "] "), arguments[0]))
										o(arguments[0], i) &&
											(a += i + ": " + arguments[0][i] + ", ")
									a = a.slice(0, -2)
								} else a = arguments[s]
								d.push(a)
							}
							D(
								e +
									"\nArguments: " +
									Array.prototype.slice.call(d).join("") +
									"\n" +
									new Error().stack,
							),
								(n = !1)
						}
						return t.apply(this, arguments)
					}, t)
				}
				var T,
					w = {}
				function b(e, t) {
					null != r.deprecationHandler && r.deprecationHandler(e, t),
						w[e] || (D(t), (w[e] = !0))
				}
				function S(e) {
					return (
						("undefined" != typeof Function && e instanceof Function) ||
						"[object Function]" === Object.prototype.toString.call(e)
					)
				}
				function H(e, t) {
					var n,
						a = c({}, e)
					for (n in t)
						o(t, n) &&
							(i(e[n]) && i(t[n])
								? ((a[n] = {}), c(a[n], e[n]), c(a[n], t[n]))
								: null != t[n]
								? (a[n] = t[n])
								: delete a[n])
					for (n in e) o(e, n) && !o(t, n) && i(e[n]) && (a[n] = c({}, a[n]))
					return a
				}
				function x(e) {
					null != e && this.set(e)
				}
				function j(e, t, n) {
					var a = "" + Math.abs(e),
						r = t - a.length
					return (
						(e >= 0 ? (n ? "+" : "") : "-") +
						Math.pow(10, Math.max(0, r)).toString().substr(1) +
						a
					)
				}
				;(r.suppressDeprecationWarnings = !1),
					(r.deprecationHandler = null),
					(T = Object.keys
						? Object.keys
						: function (e) {
								var t,
									n = []
								for (t in e) o(e, t) && n.push(t)
								return n
						  })
				var O = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
					P = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
					E = {},
					A = {}
				function W(e, t, n, a) {
					var r = a
					"string" == typeof a &&
						(r = function () {
							return this[a]()
						}),
						e && (A[e] = r),
						t &&
							(A[t[0]] = function () {
								return j(r.apply(this, arguments), t[1], t[2])
							}),
						n &&
							(A[n] = function () {
								return this.localeData().ordinal(r.apply(this, arguments), e)
							})
				}
				function N(e, t) {
					return e.isValid()
						? ((t = C(t, e.localeData())),
						  (E[t] =
								E[t] ||
								(function (e) {
									var t,
										n,
										a,
										r = e.match(O)
									for (t = 0, n = r.length; t < n; t++)
										A[r[t]]
											? (r[t] = A[r[t]])
											: (r[t] = (a = r[t]).match(/\[[\s\S]/)
													? a.replace(/^\[|\]$/g, "")
													: a.replace(/\\/g, ""))
									return function (t) {
										var a,
											s = ""
										for (a = 0; a < n; a++)
											s += S(r[a]) ? r[a].call(t, e) : r[a]
										return s
									}
								})(t)),
						  E[t](e))
						: e.localeData().invalidDate()
				}
				function C(e, t) {
					var n = 5
					function a(e) {
						return t.longDateFormat(e) || e
					}
					for (P.lastIndex = 0; n >= 0 && P.test(e); )
						(e = e.replace(P, a)), (P.lastIndex = 0), (n -= 1)
					return e
				}
				var F = {}
				function z(e, t) {
					var n = e.toLowerCase()
					F[n] = F[n + "s"] = F[t] = e
				}
				function R(e) {
					return "string" == typeof e ? F[e] || F[e.toLowerCase()] : void 0
				}
				function I(e) {
					var t,
						n,
						a = {}
					for (n in e) o(e, n) && (t = R(n)) && (a[t] = e[n])
					return a
				}
				var J = {}
				function q(e, t) {
					J[e] = t
				}
				function U(e) {
					return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0
				}
				function B(e) {
					return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
				}
				function G(e) {
					var t = +e,
						n = 0
					return 0 !== t && isFinite(t) && (n = B(t)), n
				}
				function V(e, t) {
					return function (n) {
						return null != n
							? (K(this, e, n), r.updateOffset(this, t), this)
							: $(this, e)
					}
				}
				function $(e, t) {
					return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
				}
				function K(e, t, n) {
					e.isValid() &&
						!isNaN(n) &&
						("FullYear" === t &&
						U(e.year()) &&
						1 === e.month() &&
						29 === e.date()
							? ((n = G(n)),
							  e._d["set" + (e._isUTC ? "UTC" : "") + t](
									n,
									e.month(),
									ke(n, e.month()),
							  ))
							: e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
				}
				var Z,
					X = /\d/,
					Q = /\d\d/,
					ee = /\d{3}/,
					te = /\d{4}/,
					ne = /[+-]?\d{6}/,
					ae = /\d\d?/,
					re = /\d\d\d\d?/,
					se = /\d\d\d\d\d\d?/,
					ie = /\d{1,3}/,
					oe = /\d{1,4}/,
					de = /[+-]?\d{1,6}/,
					ue = /\d+/,
					_e = /[+-]?\d+/,
					le = /Z|[+-]\d\d:?\d\d/gi,
					me = /Z|[+-]\d\d(?::?\d\d)?/gi,
					ce = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i
				function he(e, t, n) {
					Z[e] = S(t)
						? t
						: function (e, a) {
								return e && n ? n : t
						  }
				}
				function fe(e, t) {
					return o(Z, e)
						? Z[e](t._strict, t._locale)
						: new RegExp(
								pe(
									e
										.replace("\\", "")
										.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
											e,
											t,
											n,
											a,
											r,
										) {
											return t || n || a || r
										}),
								),
						  )
				}
				function pe(e) {
					return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
				}
				Z = {}
				var Me,
					ye = {}
				function Le(e, t) {
					var n,
						a = t
					for (
						"string" == typeof e && (e = [e]),
							_(t) &&
								(a = function (e, n) {
									n[t] = G(e)
								}),
							n = 0;
						n < e.length;
						n++
					)
						ye[e[n]] = a
				}
				function Ye(e, t) {
					Le(e, function (e, n, a, r) {
						;(a._w = a._w || {}), t(e, a._w, a, r)
					})
				}
				function ge(e, t, n) {
					null != t && o(ye, e) && ye[e](t, n._a, n, e)
				}
				function ke(e, t) {
					if (isNaN(e) || isNaN(t)) return NaN
					var n,
						a = ((t % (n = 12)) + n) % n
					return (
						(e += (t - a) / 12), 1 === a ? (U(e) ? 29 : 28) : 31 - ((a % 7) % 2)
					)
				}
				;(Me = Array.prototype.indexOf
					? Array.prototype.indexOf
					: function (e) {
							var t
							for (t = 0; t < this.length; ++t) if (this[t] === e) return t
							return -1
					  }),
					W("M", ["MM", 2], "Mo", function () {
						return this.month() + 1
					}),
					W("MMM", 0, 0, function (e) {
						return this.localeData().monthsShort(this, e)
					}),
					W("MMMM", 0, 0, function (e) {
						return this.localeData().months(this, e)
					}),
					z("month", "M"),
					q("month", 8),
					he("M", ae),
					he("MM", ae, Q),
					he("MMM", function (e, t) {
						return t.monthsShortRegex(e)
					}),
					he("MMMM", function (e, t) {
						return t.monthsRegex(e)
					}),
					Le(["M", "MM"], function (e, t) {
						t[1] = G(e) - 1
					}),
					Le(["MMM", "MMMM"], function (e, t, n, a) {
						var r = n._locale.monthsParse(e, a, n._strict)
						null != r ? (t[1] = r) : (f(n).invalidMonth = e)
					})
				var De = "January_February_March_April_May_June_July_August_September_October_November_December".split(
						"_",
					),
					ve = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					Te = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
					we = ce,
					be = ce
				function Se(e, t, n) {
					var a,
						r,
						s,
						i = e.toLocaleLowerCase()
					if (!this._monthsParse)
						for (
							this._monthsParse = [],
								this._longMonthsParse = [],
								this._shortMonthsParse = [],
								a = 0;
							a < 12;
							++a
						)
							(s = h([2e3, a])),
								(this._shortMonthsParse[a] = this.monthsShort(
									s,
									"",
								).toLocaleLowerCase()),
								(this._longMonthsParse[a] = this.months(
									s,
									"",
								).toLocaleLowerCase())
					return n
						? "MMM" === t
							? -1 !== (r = Me.call(this._shortMonthsParse, i))
								? r
								: null
							: -1 !== (r = Me.call(this._longMonthsParse, i))
							? r
							: null
						: "MMM" === t
						? -1 !== (r = Me.call(this._shortMonthsParse, i)) ||
						  -1 !== (r = Me.call(this._longMonthsParse, i))
							? r
							: null
						: -1 !== (r = Me.call(this._longMonthsParse, i)) ||
						  -1 !== (r = Me.call(this._shortMonthsParse, i))
						? r
						: null
				}
				function He(e, t) {
					var n
					if (!e.isValid()) return e
					if ("string" == typeof t)
						if (/^\d+$/.test(t)) t = G(t)
						else if (!_((t = e.localeData().monthsParse(t)))) return e
					return (
						(n = Math.min(e.date(), ke(e.year(), t))),
						e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
						e
					)
				}
				function xe(e) {
					return null != e
						? (He(this, e), r.updateOffset(this, !0), this)
						: $(this, "Month")
				}
				function je() {
					function e(e, t) {
						return t.length - e.length
					}
					var t,
						n,
						a = [],
						r = [],
						s = []
					for (t = 0; t < 12; t++)
						(n = h([2e3, t])),
							a.push(this.monthsShort(n, "")),
							r.push(this.months(n, "")),
							s.push(this.months(n, "")),
							s.push(this.monthsShort(n, ""))
					for (a.sort(e), r.sort(e), s.sort(e), t = 0; t < 12; t++)
						(a[t] = pe(a[t])), (r[t] = pe(r[t]))
					for (t = 0; t < 24; t++) s[t] = pe(s[t])
					;(this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i")),
						(this._monthsShortRegex = this._monthsRegex),
						(this._monthsStrictRegex = new RegExp(
							"^(" + r.join("|") + ")",
							"i",
						)),
						(this._monthsShortStrictRegex = new RegExp(
							"^(" + a.join("|") + ")",
							"i",
						))
				}
				function Oe(e) {
					return U(e) ? 366 : 365
				}
				W("Y", 0, 0, function () {
					var e = this.year()
					return e <= 9999 ? j(e, 4) : "+" + e
				}),
					W(0, ["YY", 2], 0, function () {
						return this.year() % 100
					}),
					W(0, ["YYYY", 4], 0, "year"),
					W(0, ["YYYYY", 5], 0, "year"),
					W(0, ["YYYYYY", 6, !0], 0, "year"),
					z("year", "y"),
					q("year", 1),
					he("Y", _e),
					he("YY", ae, Q),
					he("YYYY", oe, te),
					he("YYYYY", de, ne),
					he("YYYYYY", de, ne),
					Le(["YYYYY", "YYYYYY"], 0),
					Le("YYYY", function (e, t) {
						t[0] = 2 === e.length ? r.parseTwoDigitYear(e) : G(e)
					}),
					Le("YY", function (e, t) {
						t[0] = r.parseTwoDigitYear(e)
					}),
					Le("Y", function (e, t) {
						t[0] = parseInt(e, 10)
					}),
					(r.parseTwoDigitYear = function (e) {
						return G(e) + (G(e) > 68 ? 1900 : 2e3)
					})
				var Pe = V("FullYear", !0)
				function Ee(e, t, n, a, r, s, i) {
					var o
					return (
						e < 100 && e >= 0
							? ((o = new Date(e + 400, t, n, a, r, s, i)),
							  isFinite(o.getFullYear()) && o.setFullYear(e))
							: (o = new Date(e, t, n, a, r, s, i)),
						o
					)
				}
				function Ae(e) {
					var t, n
					return (
						e < 100 && e >= 0
							? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
							  (t = new Date(Date.UTC.apply(null, n))),
							  isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
							: (t = new Date(Date.UTC.apply(null, arguments))),
						t
					)
				}
				function We(e, t, n) {
					var a = 7 + t - n
					return (-(7 + Ae(e, 0, a).getUTCDay() - t) % 7) + a - 1
				}
				function Ne(e, t, n, a, r) {
					var s,
						i,
						o = 1 + 7 * (t - 1) + ((7 + n - a) % 7) + We(e, a, r)
					return (
						o <= 0
							? (i = Oe((s = e - 1)) + o)
							: o > Oe(e)
							? ((s = e + 1), (i = o - Oe(e)))
							: ((s = e), (i = o)),
						{ year: s, dayOfYear: i }
					)
				}
				function Ce(e, t, n) {
					var a,
						r,
						s = We(e.year(), t, n),
						i = Math.floor((e.dayOfYear() - s - 1) / 7) + 1
					return (
						i < 1
							? (a = i + Fe((r = e.year() - 1), t, n))
							: i > Fe(e.year(), t, n)
							? ((a = i - Fe(e.year(), t, n)), (r = e.year() + 1))
							: ((r = e.year()), (a = i)),
						{ week: a, year: r }
					)
				}
				function Fe(e, t, n) {
					var a = We(e, t, n),
						r = We(e + 1, t, n)
					return (Oe(e) - a + r) / 7
				}
				function ze(e, t) {
					return e.slice(t, 7).concat(e.slice(0, t))
				}
				W("w", ["ww", 2], "wo", "week"),
					W("W", ["WW", 2], "Wo", "isoWeek"),
					z("week", "w"),
					z("isoWeek", "W"),
					q("week", 5),
					q("isoWeek", 5),
					he("w", ae),
					he("ww", ae, Q),
					he("W", ae),
					he("WW", ae, Q),
					Ye(["w", "ww", "W", "WW"], function (e, t, n, a) {
						t[a.substr(0, 1)] = G(e)
					}),
					W("d", 0, "do", "day"),
					W("dd", 0, 0, function (e) {
						return this.localeData().weekdaysMin(this, e)
					}),
					W("ddd", 0, 0, function (e) {
						return this.localeData().weekdaysShort(this, e)
					}),
					W("dddd", 0, 0, function (e) {
						return this.localeData().weekdays(this, e)
					}),
					W("e", 0, 0, "weekday"),
					W("E", 0, 0, "isoWeekday"),
					z("day", "d"),
					z("weekday", "e"),
					z("isoWeekday", "E"),
					q("day", 11),
					q("weekday", 11),
					q("isoWeekday", 11),
					he("d", ae),
					he("e", ae),
					he("E", ae),
					he("dd", function (e, t) {
						return t.weekdaysMinRegex(e)
					}),
					he("ddd", function (e, t) {
						return t.weekdaysShortRegex(e)
					}),
					he("dddd", function (e, t) {
						return t.weekdaysRegex(e)
					}),
					Ye(["dd", "ddd", "dddd"], function (e, t, n, a) {
						var r = n._locale.weekdaysParse(e, a, n._strict)
						null != r ? (t.d = r) : (f(n).invalidWeekday = e)
					}),
					Ye(["d", "e", "E"], function (e, t, n, a) {
						t[a] = G(e)
					})
				var Re = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
						"_",
					),
					Ie = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					Je = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					qe = ce,
					Ue = ce,
					Be = ce
				function Ge(e, t, n) {
					var a,
						r,
						s,
						i = e.toLocaleLowerCase()
					if (!this._weekdaysParse)
						for (
							this._weekdaysParse = [],
								this._shortWeekdaysParse = [],
								this._minWeekdaysParse = [],
								a = 0;
							a < 7;
							++a
						)
							(s = h([2e3, 1]).day(a)),
								(this._minWeekdaysParse[a] = this.weekdaysMin(
									s,
									"",
								).toLocaleLowerCase()),
								(this._shortWeekdaysParse[a] = this.weekdaysShort(
									s,
									"",
								).toLocaleLowerCase()),
								(this._weekdaysParse[a] = this.weekdays(
									s,
									"",
								).toLocaleLowerCase())
					return n
						? "dddd" === t
							? -1 !== (r = Me.call(this._weekdaysParse, i))
								? r
								: null
							: "ddd" === t
							? -1 !== (r = Me.call(this._shortWeekdaysParse, i))
								? r
								: null
							: -1 !== (r = Me.call(this._minWeekdaysParse, i))
							? r
							: null
						: "dddd" === t
						? -1 !== (r = Me.call(this._weekdaysParse, i)) ||
						  -1 !== (r = Me.call(this._shortWeekdaysParse, i)) ||
						  -1 !== (r = Me.call(this._minWeekdaysParse, i))
							? r
							: null
						: "ddd" === t
						? -1 !== (r = Me.call(this._shortWeekdaysParse, i)) ||
						  -1 !== (r = Me.call(this._weekdaysParse, i)) ||
						  -1 !== (r = Me.call(this._minWeekdaysParse, i))
							? r
							: null
						: -1 !== (r = Me.call(this._minWeekdaysParse, i)) ||
						  -1 !== (r = Me.call(this._weekdaysParse, i)) ||
						  -1 !== (r = Me.call(this._shortWeekdaysParse, i))
						? r
						: null
				}
				function Ve() {
					function e(e, t) {
						return t.length - e.length
					}
					var t,
						n,
						a,
						r,
						s,
						i = [],
						o = [],
						d = [],
						u = []
					for (t = 0; t < 7; t++)
						(n = h([2e3, 1]).day(t)),
							(a = pe(this.weekdaysMin(n, ""))),
							(r = pe(this.weekdaysShort(n, ""))),
							(s = pe(this.weekdays(n, ""))),
							i.push(a),
							o.push(r),
							d.push(s),
							u.push(a),
							u.push(r),
							u.push(s)
					i.sort(e),
						o.sort(e),
						d.sort(e),
						u.sort(e),
						(this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
						(this._weekdaysShortRegex = this._weekdaysRegex),
						(this._weekdaysMinRegex = this._weekdaysRegex),
						(this._weekdaysStrictRegex = new RegExp(
							"^(" + d.join("|") + ")",
							"i",
						)),
						(this._weekdaysShortStrictRegex = new RegExp(
							"^(" + o.join("|") + ")",
							"i",
						)),
						(this._weekdaysMinStrictRegex = new RegExp(
							"^(" + i.join("|") + ")",
							"i",
						))
				}
				function $e() {
					return this.hours() % 12 || 12
				}
				function Ke(e, t) {
					W(e, 0, 0, function () {
						return this.localeData().meridiem(this.hours(), this.minutes(), t)
					})
				}
				function Ze(e, t) {
					return t._meridiemParse
				}
				W("H", ["HH", 2], 0, "hour"),
					W("h", ["hh", 2], 0, $e),
					W("k", ["kk", 2], 0, function () {
						return this.hours() || 24
					}),
					W("hmm", 0, 0, function () {
						return "" + $e.apply(this) + j(this.minutes(), 2)
					}),
					W("hmmss", 0, 0, function () {
						return (
							"" + $e.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2)
						)
					}),
					W("Hmm", 0, 0, function () {
						return "" + this.hours() + j(this.minutes(), 2)
					}),
					W("Hmmss", 0, 0, function () {
						return (
							"" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2)
						)
					}),
					Ke("a", !0),
					Ke("A", !1),
					z("hour", "h"),
					q("hour", 13),
					he("a", Ze),
					he("A", Ze),
					he("H", ae),
					he("h", ae),
					he("k", ae),
					he("HH", ae, Q),
					he("hh", ae, Q),
					he("kk", ae, Q),
					he("hmm", re),
					he("hmmss", se),
					he("Hmm", re),
					he("Hmmss", se),
					Le(["H", "HH"], 3),
					Le(["k", "kk"], function (e, t, n) {
						var a = G(e)
						t[3] = 24 === a ? 0 : a
					}),
					Le(["a", "A"], function (e, t, n) {
						;(n._isPm = n._locale.isPM(e)), (n._meridiem = e)
					}),
					Le(["h", "hh"], function (e, t, n) {
						;(t[3] = G(e)), (f(n).bigHour = !0)
					}),
					Le("hmm", function (e, t, n) {
						var a = e.length - 2
						;(t[3] = G(e.substr(0, a))),
							(t[4] = G(e.substr(a))),
							(f(n).bigHour = !0)
					}),
					Le("hmmss", function (e, t, n) {
						var a = e.length - 4,
							r = e.length - 2
						;(t[3] = G(e.substr(0, a))),
							(t[4] = G(e.substr(a, 2))),
							(t[5] = G(e.substr(r))),
							(f(n).bigHour = !0)
					}),
					Le("Hmm", function (e, t, n) {
						var a = e.length - 2
						;(t[3] = G(e.substr(0, a))), (t[4] = G(e.substr(a)))
					}),
					Le("Hmmss", function (e, t, n) {
						var a = e.length - 4,
							r = e.length - 2
						;(t[3] = G(e.substr(0, a))),
							(t[4] = G(e.substr(a, 2))),
							(t[5] = G(e.substr(r)))
					})
				var Xe,
					Qe = V("Hours", !0),
					et = {
						calendar: {
							sameDay: "[Today at] LT",
							nextDay: "[Tomorrow at] LT",
							nextWeek: "dddd [at] LT",
							lastDay: "[Yesterday at] LT",
							lastWeek: "[Last] dddd [at] LT",
							sameElse: "L",
						},
						longDateFormat: {
							LTS: "h:mm:ss A",
							LT: "h:mm A",
							L: "MM/DD/YYYY",
							LL: "MMMM D, YYYY",
							LLL: "MMMM D, YYYY h:mm A",
							LLLL: "dddd, MMMM D, YYYY h:mm A",
						},
						invalidDate: "Invalid date",
						ordinal: "%d",
						dayOfMonthOrdinalParse: /\d{1,2}/,
						relativeTime: {
							future: "in %s",
							past: "%s ago",
							s: "a few seconds",
							ss: "%d seconds",
							m: "a minute",
							mm: "%d minutes",
							h: "an hour",
							hh: "%d hours",
							d: "a day",
							dd: "%d days",
							w: "a week",
							ww: "%d weeks",
							M: "a month",
							MM: "%d months",
							y: "a year",
							yy: "%d years",
						},
						months: De,
						monthsShort: ve,
						week: { dow: 0, doy: 6 },
						weekdays: Re,
						weekdaysMin: Je,
						weekdaysShort: Ie,
						meridiemParse: /[ap]\.?m?\.?/i,
					},
					tt = {},
					nt = {}
				function at(e, t) {
					var n,
						a = Math.min(e.length, t.length)
					for (n = 0; n < a; n += 1) if (e[n] !== t[n]) return n
					return a
				}
				function rt(e) {
					return e ? e.toLowerCase().replace("_", "-") : e
				}
				function st(t) {
					var a = null
					if (void 0 === tt[t] && void 0 !== e && e && e.exports)
						try {
							;(a = Xe._abbr), n(148)("./" + t), it(a)
						} catch (e) {
							tt[t] = null
						}
					return tt[t]
				}
				function it(e, t) {
					var n
					return (
						e &&
							((n = u(t) ? dt(e) : ot(e, t))
								? (Xe = n)
								: "undefined" != typeof console &&
								  console.warn &&
								  console.warn(
										"Locale " + e + " not found. Did you forget to load it?",
								  )),
						Xe._abbr
					)
				}
				function ot(e, t) {
					if (null !== t) {
						var n,
							a = et
						if (((t.abbr = e), null != tt[e]))
							b(
								"defineLocaleOverride",
								"use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.",
							),
								(a = tt[e]._config)
						else if (null != t.parentLocale)
							if (null != tt[t.parentLocale]) a = tt[t.parentLocale]._config
							else {
								if (null == (n = st(t.parentLocale)))
									return (
										nt[t.parentLocale] || (nt[t.parentLocale] = []),
										nt[t.parentLocale].push({ name: e, config: t }),
										null
									)
								a = n._config
							}
						return (
							(tt[e] = new x(H(a, t))),
							nt[e] &&
								nt[e].forEach(function (e) {
									ot(e.name, e.config)
								}),
							it(e),
							tt[e]
						)
					}
					return delete tt[e], null
				}
				function dt(e) {
					var t
					if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
						return Xe
					if (!s(e)) {
						if ((t = st(e))) return t
						e = [e]
					}
					return (function (e) {
						for (var t, n, a, r, s = 0; s < e.length; ) {
							for (
								t = (r = rt(e[s]).split("-")).length,
									n = (n = rt(e[s + 1])) ? n.split("-") : null;
								t > 0;

							) {
								if ((a = st(r.slice(0, t).join("-")))) return a
								if (n && n.length >= t && at(r, n) >= t - 1) break
								t--
							}
							s++
						}
						return Xe
					})(e)
				}
				function ut(e) {
					var t,
						n = e._a
					return (
						n &&
							-2 === f(e).overflow &&
							((t =
								n[1] < 0 || n[1] > 11
									? 1
									: n[2] < 1 || n[2] > ke(n[0], n[1])
									? 2
									: n[3] < 0 ||
									  n[3] > 24 ||
									  (24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]))
									? 3
									: n[4] < 0 || n[4] > 59
									? 4
									: n[5] < 0 || n[5] > 59
									? 5
									: n[6] < 0 || n[6] > 999
									? 6
									: -1),
							f(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2),
							f(e)._overflowWeeks && -1 === t && (t = 7),
							f(e)._overflowWeekday && -1 === t && (t = 8),
							(f(e).overflow = t)),
						e
					)
				}
				var _t = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
					lt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
					mt = /Z|[+-]\d\d(?::?\d\d)?/,
					ct = [
						["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
						["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
						["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
						["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
						["YYYY-DDD", /\d{4}-\d{3}/],
						["YYYY-MM", /\d{4}-\d\d/, !1],
						["YYYYYYMMDD", /[+-]\d{10}/],
						["YYYYMMDD", /\d{8}/],
						["GGGG[W]WWE", /\d{4}W\d{3}/],
						["GGGG[W]WW", /\d{4}W\d{2}/, !1],
						["YYYYDDD", /\d{7}/],
						["YYYYMM", /\d{6}/, !1],
						["YYYY", /\d{4}/, !1],
					],
					ht = [
						["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
						["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
						["HH:mm:ss", /\d\d:\d\d:\d\d/],
						["HH:mm", /\d\d:\d\d/],
						["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
						["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
						["HHmmss", /\d\d\d\d\d\d/],
						["HHmm", /\d\d\d\d/],
						["HH", /\d\d/],
					],
					ft = /^\/?Date\((-?\d+)/i,
					pt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
					Mt = {
						UT: 0,
						GMT: 0,
						EDT: -240,
						EST: -300,
						CDT: -300,
						CST: -360,
						MDT: -360,
						MST: -420,
						PDT: -420,
						PST: -480,
					}
				function yt(e) {
					var t,
						n,
						a,
						r,
						s,
						i,
						o = e._i,
						d = _t.exec(o) || lt.exec(o)
					if (d) {
						for (f(e).iso = !0, t = 0, n = ct.length; t < n; t++)
							if (ct[t][1].exec(d[1])) {
								;(r = ct[t][0]), (a = !1 !== ct[t][2])
								break
							}
						if (null == r) return void (e._isValid = !1)
						if (d[3]) {
							for (t = 0, n = ht.length; t < n; t++)
								if (ht[t][1].exec(d[3])) {
									s = (d[2] || " ") + ht[t][0]
									break
								}
							if (null == s) return void (e._isValid = !1)
						}
						if (!a && null != s) return void (e._isValid = !1)
						if (d[4]) {
							if (!mt.exec(d[4])) return void (e._isValid = !1)
							i = "Z"
						}
						;(e._f = r + (s || "") + (i || "")), Dt(e)
					} else e._isValid = !1
				}
				function Lt(e) {
					var t = parseInt(e, 10)
					return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
				}
				function Yt(e) {
					var t,
						n,
						a,
						r,
						s,
						i,
						o,
						d,
						u = pt.exec(
							e._i
								.replace(/\([^)]*\)|[\n\t]/g, " ")
								.replace(/(\s\s+)/g, " ")
								.replace(/^\s\s*/, "")
								.replace(/\s\s*$/, ""),
						)
					if (u) {
						if (
							((n = u[4]),
							(a = u[3]),
							(r = u[2]),
							(s = u[5]),
							(i = u[6]),
							(o = u[7]),
							(d = [
								Lt(n),
								ve.indexOf(a),
								parseInt(r, 10),
								parseInt(s, 10),
								parseInt(i, 10),
							]),
							o && d.push(parseInt(o, 10)),
							(t = d),
							!(function (e, t, n) {
								return (
									!e ||
									Ie.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
									((f(n).weekdayMismatch = !0), (n._isValid = !1), !1)
								)
							})(u[1], t, e))
						)
							return
						;(e._a = t),
							(e._tzm = (function (e, t, n) {
								if (e) return Mt[e]
								if (t) return 0
								var a = parseInt(n, 10),
									r = a % 100
								return ((a - r) / 100) * 60 + r
							})(u[8], u[9], u[10])),
							(e._d = Ae.apply(null, e._a)),
							e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
							(f(e).rfc2822 = !0)
					} else e._isValid = !1
				}
				function gt(e, t, n) {
					return null != e ? e : null != t ? t : n
				}
				function kt(e) {
					var t,
						n,
						a,
						s,
						i,
						o = []
					if (!e._d) {
						for (
							a = (function (e) {
								var t = new Date(r.now())
								return e._useUTC
									? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
									: [t.getFullYear(), t.getMonth(), t.getDate()]
							})(e),
								e._w &&
									null == e._a[2] &&
									null == e._a[1] &&
									(function (e) {
										var t, n, a, r, s, i, o, d, u
										null != (t = e._w).GG || null != t.W || null != t.E
											? ((s = 1),
											  (i = 4),
											  (n = gt(t.GG, e._a[0], Ce(wt(), 1, 4).year)),
											  (a = gt(t.W, 1)),
											  ((r = gt(t.E, 1)) < 1 || r > 7) && (d = !0))
											: ((s = e._locale._week.dow),
											  (i = e._locale._week.doy),
											  (u = Ce(wt(), s, i)),
											  (n = gt(t.gg, e._a[0], u.year)),
											  (a = gt(t.w, u.week)),
											  null != t.d
													? ((r = t.d) < 0 || r > 6) && (d = !0)
													: null != t.e
													? ((r = t.e + s), (t.e < 0 || t.e > 6) && (d = !0))
													: (r = s)),
											a < 1 || a > Fe(n, s, i)
												? (f(e)._overflowWeeks = !0)
												: null != d
												? (f(e)._overflowWeekday = !0)
												: ((o = Ne(n, a, r, s, i)),
												  (e._a[0] = o.year),
												  (e._dayOfYear = o.dayOfYear))
									})(e),
								null != e._dayOfYear &&
									((i = gt(e._a[0], a[0])),
									(e._dayOfYear > Oe(i) || 0 === e._dayOfYear) &&
										(f(e)._overflowDayOfYear = !0),
									(n = Ae(i, 0, e._dayOfYear)),
									(e._a[1] = n.getUTCMonth()),
									(e._a[2] = n.getUTCDate())),
								t = 0;
							t < 3 && null == e._a[t];
							++t
						)
							e._a[t] = o[t] = a[t]
						for (; t < 7; t++)
							e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t]
						24 === e._a[3] &&
							0 === e._a[4] &&
							0 === e._a[5] &&
							0 === e._a[6] &&
							((e._nextDay = !0), (e._a[3] = 0)),
							(e._d = (e._useUTC ? Ae : Ee).apply(null, o)),
							(s = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
							null != e._tzm &&
								e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
							e._nextDay && (e._a[3] = 24),
							e._w &&
								void 0 !== e._w.d &&
								e._w.d !== s &&
								(f(e).weekdayMismatch = !0)
					}
				}
				function Dt(e) {
					if (e._f !== r.ISO_8601)
						if (e._f !== r.RFC_2822) {
							;(e._a = []), (f(e).empty = !0)
							var t,
								n,
								a,
								s,
								i,
								o,
								d = "" + e._i,
								u = d.length,
								_ = 0
							for (
								a = C(e._f, e._locale).match(O) || [], t = 0;
								t < a.length;
								t++
							)
								(s = a[t]),
									(n = (d.match(fe(s, e)) || [])[0]) &&
										((i = d.substr(0, d.indexOf(n))).length > 0 &&
											f(e).unusedInput.push(i),
										(d = d.slice(d.indexOf(n) + n.length)),
										(_ += n.length)),
									A[s]
										? (n ? (f(e).empty = !1) : f(e).unusedTokens.push(s),
										  ge(s, n, e))
										: e._strict && !n && f(e).unusedTokens.push(s)
							;(f(e).charsLeftOver = u - _),
								d.length > 0 && f(e).unusedInput.push(d),
								e._a[3] <= 12 &&
									!0 === f(e).bigHour &&
									e._a[3] > 0 &&
									(f(e).bigHour = void 0),
								(f(e).parsedDateParts = e._a.slice(0)),
								(f(e).meridiem = e._meridiem),
								(e._a[3] = (function (e, t, n) {
									var a
									return null == n
										? t
										: null != e.meridiemHour
										? e.meridiemHour(t, n)
										: null != e.isPM
										? ((a = e.isPM(n)) && t < 12 && (t += 12),
										  a || 12 !== t || (t = 0),
										  t)
										: t
								})(e._locale, e._a[3], e._meridiem)),
								null !== (o = f(e).era) &&
									(e._a[0] = e._locale.erasConvertYear(o, e._a[0])),
								kt(e),
								ut(e)
						} else Yt(e)
					else yt(e)
				}
				function vt(e) {
					var t = e._i,
						n = e._f
					return (
						(e._locale = e._locale || dt(e._l)),
						null === t || (void 0 === n && "" === t)
							? M({ nullInput: !0 })
							: ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
							  k(t)
									? new g(ut(t))
									: (l(t)
											? (e._d = t)
											: s(n)
											? (function (e) {
													var t,
														n,
														a,
														r,
														s,
														i,
														o = !1
													if (0 === e._f.length)
														return (
															(f(e).invalidFormat = !0),
															void (e._d = new Date(NaN))
														)
													for (r = 0; r < e._f.length; r++)
														(s = 0),
															(i = !1),
															(t = Y({}, e)),
															null != e._useUTC && (t._useUTC = e._useUTC),
															(t._f = e._f[r]),
															Dt(t),
															p(t) && (i = !0),
															(s += f(t).charsLeftOver),
															(s += 10 * f(t).unusedTokens.length),
															(f(t).score = s),
															o
																? s < a && ((a = s), (n = t))
																: (null == a || s < a || i) &&
																  ((a = s), (n = t), i && (o = !0))
													c(e, n || t)
											  })(e)
											: n
											? Dt(e)
											: (function (e) {
													var t = e._i
													u(t)
														? (e._d = new Date(r.now()))
														: l(t)
														? (e._d = new Date(t.valueOf()))
														: "string" == typeof t
														? (function (e) {
																var t = ft.exec(e._i)
																null === t
																	? (yt(e),
																	  !1 === e._isValid &&
																			(delete e._isValid,
																			Yt(e),
																			!1 === e._isValid &&
																				(delete e._isValid,
																				e._strict
																					? (e._isValid = !1)
																					: r.createFromInputFallback(e))))
																	: (e._d = new Date(+t[1]))
														  })(e)
														: s(t)
														? ((e._a = m(t.slice(0), function (e) {
																return parseInt(e, 10)
														  })),
														  kt(e))
														: i(t)
														? (function (e) {
																if (!e._d) {
																	var t = I(e._i),
																		n = void 0 === t.day ? t.date : t.day
																	;(e._a = m(
																		[
																			t.year,
																			t.month,
																			n,
																			t.hour,
																			t.minute,
																			t.second,
																			t.millisecond,
																		],
																		function (e) {
																			return e && parseInt(e, 10)
																		},
																	)),
																		kt(e)
																}
														  })(e)
														: _(t)
														? (e._d = new Date(t))
														: r.createFromInputFallback(e)
											  })(e),
									  p(e) || (e._d = null),
									  e))
					)
				}
				function Tt(e, t, n, a, r) {
					var o,
						u = {}
					return (
						(!0 !== t && !1 !== t) || ((a = t), (t = void 0)),
						(!0 !== n && !1 !== n) || ((a = n), (n = void 0)),
						((i(e) && d(e)) || (s(e) && 0 === e.length)) && (e = void 0),
						(u._isAMomentObject = !0),
						(u._useUTC = u._isUTC = r),
						(u._l = n),
						(u._i = e),
						(u._f = t),
						(u._strict = a),
						(o = new g(ut(vt(u))))._nextDay &&
							(o.add(1, "d"), (o._nextDay = void 0)),
						o
					)
				}
				function wt(e, t, n, a) {
					return Tt(e, t, n, a, !1)
				}
				;(r.createFromInputFallback = v(
					"value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
					function (e) {
						e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
					},
				)),
					(r.ISO_8601 = function () {}),
					(r.RFC_2822 = function () {})
				var bt = v(
						"moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
						function () {
							var e = wt.apply(null, arguments)
							return this.isValid() && e.isValid() ? (e < this ? this : e) : M()
						},
					),
					St = v(
						"moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
						function () {
							var e = wt.apply(null, arguments)
							return this.isValid() && e.isValid() ? (e > this ? this : e) : M()
						},
					)
				function Ht(e, t) {
					var n, a
					if ((1 === t.length && s(t[0]) && (t = t[0]), !t.length)) return wt()
					for (n = t[0], a = 1; a < t.length; ++a)
						(t[a].isValid() && !t[a][e](n)) || (n = t[a])
					return n
				}
				var xt = [
					"year",
					"quarter",
					"month",
					"week",
					"day",
					"hour",
					"minute",
					"second",
					"millisecond",
				]
				function jt(e) {
					var t = I(e),
						n = t.year || 0,
						a = t.quarter || 0,
						r = t.month || 0,
						s = t.week || t.isoWeek || 0,
						i = t.day || 0,
						d = t.hour || 0,
						u = t.minute || 0,
						_ = t.second || 0,
						l = t.millisecond || 0
					;(this._isValid = (function (e) {
						var t,
							n,
							a = !1
						for (t in e)
							if (
								o(e, t) &&
								(-1 === Me.call(xt, t) || (null != e[t] && isNaN(e[t])))
							)
								return !1
						for (n = 0; n < xt.length; ++n)
							if (e[xt[n]]) {
								if (a) return !1
								parseFloat(e[xt[n]]) !== G(e[xt[n]]) && (a = !0)
							}
						return !0
					})(t)),
						(this._milliseconds = +l + 1e3 * _ + 6e4 * u + 1e3 * d * 60 * 60),
						(this._days = +i + 7 * s),
						(this._months = +r + 3 * a + 12 * n),
						(this._data = {}),
						(this._locale = dt()),
						this._bubble()
				}
				function Ot(e) {
					return e instanceof jt
				}
				function Pt(e) {
					return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
				}
				function Et(e, t) {
					W(e, 0, 0, function () {
						var e = this.utcOffset(),
							n = "+"
						return (
							e < 0 && ((e = -e), (n = "-")),
							n + j(~~(e / 60), 2) + t + j(~~e % 60, 2)
						)
					})
				}
				Et("Z", ":"),
					Et("ZZ", ""),
					he("Z", me),
					he("ZZ", me),
					Le(["Z", "ZZ"], function (e, t, n) {
						;(n._useUTC = !0), (n._tzm = Wt(me, e))
					})
				var At = /([\+\-]|\d\d)/gi
				function Wt(e, t) {
					var n,
						a,
						r = (t || "").match(e)
					return null === r
						? null
						: 0 ===
						  (a =
								60 *
									(n = ((r[r.length - 1] || []) + "").match(At) || [
										"-",
										0,
										0,
									])[1] +
								G(n[2]))
						? 0
						: "+" === n[0]
						? a
						: -a
				}
				function Nt(e, t) {
					var n, a
					return t._isUTC
						? ((n = t.clone()),
						  (a =
								(k(e) || l(e) ? e.valueOf() : wt(e).valueOf()) - n.valueOf()),
						  n._d.setTime(n._d.valueOf() + a),
						  r.updateOffset(n, !1),
						  n)
						: wt(e).local()
				}
				function Ct(e) {
					return -Math.round(e._d.getTimezoneOffset())
				}
				function Ft() {
					return !!this.isValid() && this._isUTC && 0 === this._offset
				}
				r.updateOffset = function () {}
				var zt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
					Rt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
				function It(e, t) {
					var n,
						a,
						r,
						s,
						i,
						d,
						u = e,
						l = null
					return (
						Ot(e)
							? (u = { ms: e._milliseconds, d: e._days, M: e._months })
							: _(e) || !isNaN(+e)
							? ((u = {}), t ? (u[t] = +e) : (u.milliseconds = +e))
							: (l = zt.exec(e))
							? ((n = "-" === l[1] ? -1 : 1),
							  (u = {
									y: 0,
									d: G(l[2]) * n,
									h: G(l[3]) * n,
									m: G(l[4]) * n,
									s: G(l[5]) * n,
									ms: G(Pt(1e3 * l[6])) * n,
							  }))
							: (l = Rt.exec(e))
							? ((n = "-" === l[1] ? -1 : 1),
							  (u = {
									y: Jt(l[2], n),
									M: Jt(l[3], n),
									w: Jt(l[4], n),
									d: Jt(l[5], n),
									h: Jt(l[6], n),
									m: Jt(l[7], n),
									s: Jt(l[8], n),
							  }))
							: null == u
							? (u = {})
							: "object" == typeof u &&
							  ("from" in u || "to" in u) &&
							  ((s = wt(u.from)),
							  (i = wt(u.to)),
							  (r =
									s.isValid() && i.isValid()
										? ((i = Nt(i, s)),
										  s.isBefore(i)
												? (d = qt(s, i))
												: (((d = qt(i, s)).milliseconds = -d.milliseconds),
												  (d.months = -d.months)),
										  d)
										: { milliseconds: 0, months: 0 }),
							  ((u = {}).ms = r.milliseconds),
							  (u.M = r.months)),
						(a = new jt(u)),
						Ot(e) && o(e, "_locale") && (a._locale = e._locale),
						Ot(e) && o(e, "_isValid") && (a._isValid = e._isValid),
						a
					)
				}
				function Jt(e, t) {
					var n = e && parseFloat(e.replace(",", "."))
					return (isNaN(n) ? 0 : n) * t
				}
				function qt(e, t) {
					var n = {}
					return (
						(n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
						e.clone().add(n.months, "M").isAfter(t) && --n.months,
						(n.milliseconds = +t - +e.clone().add(n.months, "M")),
						n
					)
				}
				function Ut(e, t) {
					return function (n, a) {
						var r
						return (
							null === a ||
								isNaN(+a) ||
								(b(
									t,
									"moment()." +
										t +
										"(period, number) is deprecated. Please use moment()." +
										t +
										"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.",
								),
								(r = n),
								(n = a),
								(a = r)),
							Bt(this, It(n, a), e),
							this
						)
					}
				}
				function Bt(e, t, n, a) {
					var s = t._milliseconds,
						i = Pt(t._days),
						o = Pt(t._months)
					e.isValid() &&
						((a = null == a || a),
						o && He(e, $(e, "Month") + o * n),
						i && K(e, "Date", $(e, "Date") + i * n),
						s && e._d.setTime(e._d.valueOf() + s * n),
						a && r.updateOffset(e, i || o))
				}
				;(It.fn = jt.prototype),
					(It.invalid = function () {
						return It(NaN)
					})
				var Gt = Ut(1, "add"),
					Vt = Ut(-1, "subtract")
				function $t(e) {
					return "string" == typeof e || e instanceof String
				}
				function Kt(e) {
					return (
						k(e) ||
						l(e) ||
						$t(e) ||
						_(e) ||
						(function (e) {
							var t = s(e),
								n = !1
							return (
								t &&
									(n =
										0 ===
										e.filter(function (t) {
											return !_(t) && $t(e)
										}).length),
								t && n
							)
						})(e) ||
						(function (e) {
							var t,
								n,
								a = i(e) && !d(e),
								r = !1,
								s = [
									"years",
									"year",
									"y",
									"months",
									"month",
									"M",
									"days",
									"day",
									"d",
									"dates",
									"date",
									"D",
									"hours",
									"hour",
									"h",
									"minutes",
									"minute",
									"m",
									"seconds",
									"second",
									"s",
									"milliseconds",
									"millisecond",
									"ms",
								]
							for (t = 0; t < s.length; t += 1) (n = s[t]), (r = r || o(e, n))
							return a && r
						})(e) ||
						null == e
					)
				}
				function Zt(e) {
					var t,
						n = i(e) && !d(e),
						a = !1,
						r = [
							"sameDay",
							"nextDay",
							"lastDay",
							"nextWeek",
							"lastWeek",
							"sameElse",
						]
					for (t = 0; t < r.length; t += 1) a = a || o(e, r[t])
					return n && a
				}
				function Xt(e, t) {
					if (e.date() < t.date()) return -Xt(t, e)
					var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
						a = e.clone().add(n, "months")
					return (
						-(
							n +
							(t - a < 0
								? (t - a) / (a - e.clone().add(n - 1, "months"))
								: (t - a) / (e.clone().add(n + 1, "months") - a))
						) || 0
					)
				}
				function Qt(e) {
					var t
					return void 0 === e
						? this._locale._abbr
						: (null != (t = dt(e)) && (this._locale = t), this)
				}
				;(r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
					(r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]")
				var en = v(
					"moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
					function (e) {
						return void 0 === e ? this.localeData() : this.locale(e)
					},
				)
				function tn() {
					return this._locale
				}
				function nn(e, t) {
					return ((e % t) + t) % t
				}
				function an(e, t, n) {
					return e < 100 && e >= 0
						? new Date(e + 400, t, n) - 126227808e5
						: new Date(e, t, n).valueOf()
				}
				function rn(e, t, n) {
					return e < 100 && e >= 0
						? Date.UTC(e + 400, t, n) - 126227808e5
						: Date.UTC(e, t, n)
				}
				function sn(e, t) {
					return t.erasAbbrRegex(e)
				}
				function on() {
					var e,
						t,
						n = [],
						a = [],
						r = [],
						s = [],
						i = this.eras()
					for (e = 0, t = i.length; e < t; ++e)
						a.push(pe(i[e].name)),
							n.push(pe(i[e].abbr)),
							r.push(pe(i[e].narrow)),
							s.push(pe(i[e].name)),
							s.push(pe(i[e].abbr)),
							s.push(pe(i[e].narrow))
					;(this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i")),
						(this._erasNameRegex = new RegExp("^(" + a.join("|") + ")", "i")),
						(this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
						(this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i"))
				}
				function dn(e, t) {
					W(0, [e, e.length], 0, t)
				}
				function un(e, t, n, a, r) {
					var s
					return null == e
						? Ce(this, a, r).year
						: (t > (s = Fe(e, a, r)) && (t = s), _n.call(this, e, t, n, a, r))
				}
				function _n(e, t, n, a, r) {
					var s = Ne(e, t, n, a, r),
						i = Ae(s.year, 0, s.dayOfYear)
					return (
						this.year(i.getUTCFullYear()),
						this.month(i.getUTCMonth()),
						this.date(i.getUTCDate()),
						this
					)
				}
				W("N", 0, 0, "eraAbbr"),
					W("NN", 0, 0, "eraAbbr"),
					W("NNN", 0, 0, "eraAbbr"),
					W("NNNN", 0, 0, "eraName"),
					W("NNNNN", 0, 0, "eraNarrow"),
					W("y", ["y", 1], "yo", "eraYear"),
					W("y", ["yy", 2], 0, "eraYear"),
					W("y", ["yyy", 3], 0, "eraYear"),
					W("y", ["yyyy", 4], 0, "eraYear"),
					he("N", sn),
					he("NN", sn),
					he("NNN", sn),
					he("NNNN", function (e, t) {
						return t.erasNameRegex(e)
					}),
					he("NNNNN", function (e, t) {
						return t.erasNarrowRegex(e)
					}),
					Le(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, a) {
						var r = n._locale.erasParse(e, a, n._strict)
						r ? (f(n).era = r) : (f(n).invalidEra = e)
					}),
					he("y", ue),
					he("yy", ue),
					he("yyy", ue),
					he("yyyy", ue),
					he("yo", function (e, t) {
						return t._eraYearOrdinalRegex || ue
					}),
					Le(["y", "yy", "yyy", "yyyy"], 0),
					Le(["yo"], function (e, t, n, a) {
						var r
						n._locale._eraYearOrdinalRegex &&
							(r = e.match(n._locale._eraYearOrdinalRegex)),
							n._locale.eraYearOrdinalParse
								? (t[0] = n._locale.eraYearOrdinalParse(e, r))
								: (t[0] = parseInt(e, 10))
					}),
					W(0, ["gg", 2], 0, function () {
						return this.weekYear() % 100
					}),
					W(0, ["GG", 2], 0, function () {
						return this.isoWeekYear() % 100
					}),
					dn("gggg", "weekYear"),
					dn("ggggg", "weekYear"),
					dn("GGGG", "isoWeekYear"),
					dn("GGGGG", "isoWeekYear"),
					z("weekYear", "gg"),
					z("isoWeekYear", "GG"),
					q("weekYear", 1),
					q("isoWeekYear", 1),
					he("G", _e),
					he("g", _e),
					he("GG", ae, Q),
					he("gg", ae, Q),
					he("GGGG", oe, te),
					he("gggg", oe, te),
					he("GGGGG", de, ne),
					he("ggggg", de, ne),
					Ye(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, a) {
						t[a.substr(0, 2)] = G(e)
					}),
					Ye(["gg", "GG"], function (e, t, n, a) {
						t[a] = r.parseTwoDigitYear(e)
					}),
					W("Q", 0, "Qo", "quarter"),
					z("quarter", "Q"),
					q("quarter", 7),
					he("Q", X),
					Le("Q", function (e, t) {
						t[1] = 3 * (G(e) - 1)
					}),
					W("D", ["DD", 2], "Do", "date"),
					z("date", "D"),
					q("date", 9),
					he("D", ae),
					he("DD", ae, Q),
					he("Do", function (e, t) {
						return e
							? t._dayOfMonthOrdinalParse || t._ordinalParse
							: t._dayOfMonthOrdinalParseLenient
					}),
					Le(["D", "DD"], 2),
					Le("Do", function (e, t) {
						t[2] = G(e.match(ae)[0])
					})
				var ln = V("Date", !0)
				W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
					z("dayOfYear", "DDD"),
					q("dayOfYear", 4),
					he("DDD", ie),
					he("DDDD", ee),
					Le(["DDD", "DDDD"], function (e, t, n) {
						n._dayOfYear = G(e)
					}),
					W("m", ["mm", 2], 0, "minute"),
					z("minute", "m"),
					q("minute", 14),
					he("m", ae),
					he("mm", ae, Q),
					Le(["m", "mm"], 4)
				var mn = V("Minutes", !1)
				W("s", ["ss", 2], 0, "second"),
					z("second", "s"),
					q("second", 15),
					he("s", ae),
					he("ss", ae, Q),
					Le(["s", "ss"], 5)
				var cn,
					hn,
					fn = V("Seconds", !1)
				for (
					W("S", 0, 0, function () {
						return ~~(this.millisecond() / 100)
					}),
						W(0, ["SS", 2], 0, function () {
							return ~~(this.millisecond() / 10)
						}),
						W(0, ["SSS", 3], 0, "millisecond"),
						W(0, ["SSSS", 4], 0, function () {
							return 10 * this.millisecond()
						}),
						W(0, ["SSSSS", 5], 0, function () {
							return 100 * this.millisecond()
						}),
						W(0, ["SSSSSS", 6], 0, function () {
							return 1e3 * this.millisecond()
						}),
						W(0, ["SSSSSSS", 7], 0, function () {
							return 1e4 * this.millisecond()
						}),
						W(0, ["SSSSSSSS", 8], 0, function () {
							return 1e5 * this.millisecond()
						}),
						W(0, ["SSSSSSSSS", 9], 0, function () {
							return 1e6 * this.millisecond()
						}),
						z("millisecond", "ms"),
						q("millisecond", 16),
						he("S", ie, X),
						he("SS", ie, Q),
						he("SSS", ie, ee),
						cn = "SSSS";
					cn.length <= 9;
					cn += "S"
				)
					he(cn, ue)
				function pn(e, t) {
					t[6] = G(1e3 * ("0." + e))
				}
				for (cn = "S"; cn.length <= 9; cn += "S") Le(cn, pn)
				;(hn = V("Milliseconds", !1)),
					W("z", 0, 0, "zoneAbbr"),
					W("zz", 0, 0, "zoneName")
				var Mn = g.prototype
				function yn(e) {
					return e
				}
				;(Mn.add = Gt),
					(Mn.calendar = function (e, t) {
						1 === arguments.length &&
							(Kt(arguments[0])
								? ((e = arguments[0]), (t = void 0))
								: Zt(arguments[0]) && ((t = arguments[0]), (e = void 0)))
						var n = e || wt(),
							a = Nt(n, this).startOf("day"),
							s = r.calendarFormat(this, a) || "sameElse",
							i = t && (S(t[s]) ? t[s].call(this, n) : t[s])
						return this.format(i || this.localeData().calendar(s, this, wt(n)))
					}),
					(Mn.clone = function () {
						return new g(this)
					}),
					(Mn.diff = function (e, t, n) {
						var a, r, s
						if (!this.isValid()) return NaN
						if (!(a = Nt(e, this)).isValid()) return NaN
						switch (
							((r = 6e4 * (a.utcOffset() - this.utcOffset())), (t = R(t)))
						) {
							case "year":
								s = Xt(this, a) / 12
								break
							case "month":
								s = Xt(this, a)
								break
							case "quarter":
								s = Xt(this, a) / 3
								break
							case "second":
								s = (this - a) / 1e3
								break
							case "minute":
								s = (this - a) / 6e4
								break
							case "hour":
								s = (this - a) / 36e5
								break
							case "day":
								s = (this - a - r) / 864e5
								break
							case "week":
								s = (this - a - r) / 6048e5
								break
							default:
								s = this - a
						}
						return n ? s : B(s)
					}),
					(Mn.endOf = function (e) {
						var t, n
						if (void 0 === (e = R(e)) || "millisecond" === e || !this.isValid())
							return this
						switch (((n = this._isUTC ? rn : an), e)) {
							case "year":
								t = n(this.year() + 1, 0, 1) - 1
								break
							case "quarter":
								t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1
								break
							case "month":
								t = n(this.year(), this.month() + 1, 1) - 1
								break
							case "week":
								t =
									n(
										this.year(),
										this.month(),
										this.date() - this.weekday() + 7,
									) - 1
								break
							case "isoWeek":
								t =
									n(
										this.year(),
										this.month(),
										this.date() - (this.isoWeekday() - 1) + 7,
									) - 1
								break
							case "day":
							case "date":
								t = n(this.year(), this.month(), this.date() + 1) - 1
								break
							case "hour":
								;(t = this._d.valueOf()),
									(t +=
										36e5 -
										nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) -
										1)
								break
							case "minute":
								;(t = this._d.valueOf()), (t += 6e4 - nn(t, 6e4) - 1)
								break
							case "second":
								;(t = this._d.valueOf()), (t += 1e3 - nn(t, 1e3) - 1)
						}
						return this._d.setTime(t), r.updateOffset(this, !0), this
					}),
					(Mn.format = function (e) {
						e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat)
						var t = N(this, e)
						return this.localeData().postformat(t)
					}),
					(Mn.from = function (e, t) {
						return this.isValid() && ((k(e) && e.isValid()) || wt(e).isValid())
							? It({ to: this, from: e }).locale(this.locale()).humanize(!t)
							: this.localeData().invalidDate()
					}),
					(Mn.fromNow = function (e) {
						return this.from(wt(), e)
					}),
					(Mn.to = function (e, t) {
						return this.isValid() && ((k(e) && e.isValid()) || wt(e).isValid())
							? It({ from: this, to: e }).locale(this.locale()).humanize(!t)
							: this.localeData().invalidDate()
					}),
					(Mn.toNow = function (e) {
						return this.to(wt(), e)
					}),
					(Mn.get = function (e) {
						return S(this[(e = R(e))]) ? this[e]() : this
					}),
					(Mn.invalidAt = function () {
						return f(this).overflow
					}),
					(Mn.isAfter = function (e, t) {
						var n = k(e) ? e : wt(e)
						return (
							!(!this.isValid() || !n.isValid()) &&
							("millisecond" === (t = R(t) || "millisecond")
								? this.valueOf() > n.valueOf()
								: n.valueOf() < this.clone().startOf(t).valueOf())
						)
					}),
					(Mn.isBefore = function (e, t) {
						var n = k(e) ? e : wt(e)
						return (
							!(!this.isValid() || !n.isValid()) &&
							("millisecond" === (t = R(t) || "millisecond")
								? this.valueOf() < n.valueOf()
								: this.clone().endOf(t).valueOf() < n.valueOf())
						)
					}),
					(Mn.isBetween = function (e, t, n, a) {
						var r = k(e) ? e : wt(e),
							s = k(t) ? t : wt(t)
						return (
							!!(this.isValid() && r.isValid() && s.isValid()) &&
							("(" === (a = a || "()")[0]
								? this.isAfter(r, n)
								: !this.isBefore(r, n)) &&
							(")" === a[1] ? this.isBefore(s, n) : !this.isAfter(s, n))
						)
					}),
					(Mn.isSame = function (e, t) {
						var n,
							a = k(e) ? e : wt(e)
						return (
							!(!this.isValid() || !a.isValid()) &&
							("millisecond" === (t = R(t) || "millisecond")
								? this.valueOf() === a.valueOf()
								: ((n = a.valueOf()),
								  this.clone().startOf(t).valueOf() <= n &&
										n <= this.clone().endOf(t).valueOf()))
						)
					}),
					(Mn.isSameOrAfter = function (e, t) {
						return this.isSame(e, t) || this.isAfter(e, t)
					}),
					(Mn.isSameOrBefore = function (e, t) {
						return this.isSame(e, t) || this.isBefore(e, t)
					}),
					(Mn.isValid = function () {
						return p(this)
					}),
					(Mn.lang = en),
					(Mn.locale = Qt),
					(Mn.localeData = tn),
					(Mn.max = St),
					(Mn.min = bt),
					(Mn.parsingFlags = function () {
						return c({}, f(this))
					}),
					(Mn.set = function (e, t) {
						if ("object" == typeof e) {
							var n,
								a = (function (e) {
									var t,
										n = []
									for (t in e) o(e, t) && n.push({ unit: t, priority: J[t] })
									return (
										n.sort(function (e, t) {
											return e.priority - t.priority
										}),
										n
									)
								})((e = I(e)))
							for (n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit])
						} else if (S(this[(e = R(e))])) return this[e](t)
						return this
					}),
					(Mn.startOf = function (e) {
						var t, n
						if (void 0 === (e = R(e)) || "millisecond" === e || !this.isValid())
							return this
						switch (((n = this._isUTC ? rn : an), e)) {
							case "year":
								t = n(this.year(), 0, 1)
								break
							case "quarter":
								t = n(this.year(), this.month() - (this.month() % 3), 1)
								break
							case "month":
								t = n(this.year(), this.month(), 1)
								break
							case "week":
								t = n(this.year(), this.month(), this.date() - this.weekday())
								break
							case "isoWeek":
								t = n(
									this.year(),
									this.month(),
									this.date() - (this.isoWeekday() - 1),
								)
								break
							case "day":
							case "date":
								t = n(this.year(), this.month(), this.date())
								break
							case "hour":
								;(t = this._d.valueOf()),
									(t -= nn(
										t + (this._isUTC ? 0 : 6e4 * this.utcOffset()),
										36e5,
									))
								break
							case "minute":
								;(t = this._d.valueOf()), (t -= nn(t, 6e4))
								break
							case "second":
								;(t = this._d.valueOf()), (t -= nn(t, 1e3))
						}
						return this._d.setTime(t), r.updateOffset(this, !0), this
					}),
					(Mn.subtract = Vt),
					(Mn.toArray = function () {
						var e = this
						return [
							e.year(),
							e.month(),
							e.date(),
							e.hour(),
							e.minute(),
							e.second(),
							e.millisecond(),
						]
					}),
					(Mn.toObject = function () {
						var e = this
						return {
							years: e.year(),
							months: e.month(),
							date: e.date(),
							hours: e.hours(),
							minutes: e.minutes(),
							seconds: e.seconds(),
							milliseconds: e.milliseconds(),
						}
					}),
					(Mn.toDate = function () {
						return new Date(this.valueOf())
					}),
					(Mn.toISOString = function (e) {
						if (!this.isValid()) return null
						var t = !0 !== e,
							n = t ? this.clone().utc() : this
						return n.year() < 0 || n.year() > 9999
							? N(
									n,
									t
										? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
										: "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ",
							  )
							: S(Date.prototype.toISOString)
							? t
								? this.toDate().toISOString()
								: new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
										.toISOString()
										.replace("Z", N(n, "Z"))
							: N(
									n,
									t
										? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
										: "YYYY-MM-DD[T]HH:mm:ss.SSSZ",
							  )
					}),
					(Mn.inspect = function () {
						if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"
						var e,
							t,
							n,
							a = "moment",
							r = ""
						return (
							this.isLocal() ||
								((a =
									0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
								(r = "Z")),
							(e = "[" + a + '("]'),
							(t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
							(n = r + '[")]'),
							this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n)
						)
					}),
					"undefined" != typeof Symbol &&
						null != Symbol.for &&
						(Mn[Symbol.for("nodejs.util.inspect.custom")] = function () {
							return "Moment<" + this.format() + ">"
						}),
					(Mn.toJSON = function () {
						return this.isValid() ? this.toISOString() : null
					}),
					(Mn.toString = function () {
						return this.clone()
							.locale("en")
							.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
					}),
					(Mn.unix = function () {
						return Math.floor(this.valueOf() / 1e3)
					}),
					(Mn.valueOf = function () {
						return this._d.valueOf() - 6e4 * (this._offset || 0)
					}),
					(Mn.creationData = function () {
						return {
							input: this._i,
							format: this._f,
							locale: this._locale,
							isUTC: this._isUTC,
							strict: this._strict,
						}
					}),
					(Mn.eraName = function () {
						var e,
							t,
							n,
							a = this.localeData().eras()
						for (e = 0, t = a.length; e < t; ++e) {
							if (
								((n = this.startOf("day").valueOf()),
								a[e].since <= n && n <= a[e].until)
							)
								return a[e].name
							if (a[e].until <= n && n <= a[e].since) return a[e].name
						}
						return ""
					}),
					(Mn.eraNarrow = function () {
						var e,
							t,
							n,
							a = this.localeData().eras()
						for (e = 0, t = a.length; e < t; ++e) {
							if (
								((n = this.startOf("day").valueOf()),
								a[e].since <= n && n <= a[e].until)
							)
								return a[e].narrow
							if (a[e].until <= n && n <= a[e].since) return a[e].narrow
						}
						return ""
					}),
					(Mn.eraAbbr = function () {
						var e,
							t,
							n,
							a = this.localeData().eras()
						for (e = 0, t = a.length; e < t; ++e) {
							if (
								((n = this.startOf("day").valueOf()),
								a[e].since <= n && n <= a[e].until)
							)
								return a[e].abbr
							if (a[e].until <= n && n <= a[e].since) return a[e].abbr
						}
						return ""
					}),
					(Mn.eraYear = function () {
						var e,
							t,
							n,
							a,
							s = this.localeData().eras()
						for (e = 0, t = s.length; e < t; ++e)
							if (
								((n = s[e].since <= s[e].until ? 1 : -1),
								(a = this.startOf("day").valueOf()),
								(s[e].since <= a && a <= s[e].until) ||
									(s[e].until <= a && a <= s[e].since))
							)
								return (this.year() - r(s[e].since).year()) * n + s[e].offset
						return this.year()
					}),
					(Mn.year = Pe),
					(Mn.isLeapYear = function () {
						return U(this.year())
					}),
					(Mn.weekYear = function (e) {
						return un.call(
							this,
							e,
							this.week(),
							this.weekday(),
							this.localeData()._week.dow,
							this.localeData()._week.doy,
						)
					}),
					(Mn.isoWeekYear = function (e) {
						return un.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
					}),
					(Mn.quarter = Mn.quarters = function (e) {
						return null == e
							? Math.ceil((this.month() + 1) / 3)
							: this.month(3 * (e - 1) + (this.month() % 3))
					}),
					(Mn.month = xe),
					(Mn.daysInMonth = function () {
						return ke(this.year(), this.month())
					}),
					(Mn.week = Mn.weeks = function (e) {
						var t = this.localeData().week(this)
						return null == e ? t : this.add(7 * (e - t), "d")
					}),
					(Mn.isoWeek = Mn.isoWeeks = function (e) {
						var t = Ce(this, 1, 4).week
						return null == e ? t : this.add(7 * (e - t), "d")
					}),
					(Mn.weeksInYear = function () {
						var e = this.localeData()._week
						return Fe(this.year(), e.dow, e.doy)
					}),
					(Mn.weeksInWeekYear = function () {
						var e = this.localeData()._week
						return Fe(this.weekYear(), e.dow, e.doy)
					}),
					(Mn.isoWeeksInYear = function () {
						return Fe(this.year(), 1, 4)
					}),
					(Mn.isoWeeksInISOWeekYear = function () {
						return Fe(this.isoWeekYear(), 1, 4)
					}),
					(Mn.date = ln),
					(Mn.day = Mn.days = function (e) {
						if (!this.isValid()) return null != e ? this : NaN
						var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay()
						return null != e
							? ((e = (function (e, t) {
									return "string" != typeof e
										? e
										: isNaN(e)
										? "number" == typeof (e = t.weekdaysParse(e))
											? e
											: null
										: parseInt(e, 10)
							  })(e, this.localeData())),
							  this.add(e - t, "d"))
							: t
					}),
					(Mn.weekday = function (e) {
						if (!this.isValid()) return null != e ? this : NaN
						var t = (this.day() + 7 - this.localeData()._week.dow) % 7
						return null == e ? t : this.add(e - t, "d")
					}),
					(Mn.isoWeekday = function (e) {
						if (!this.isValid()) return null != e ? this : NaN
						if (null != e) {
							var t = (function (e, t) {
								return "string" == typeof e
									? t.weekdaysParse(e) % 7 || 7
									: isNaN(e)
									? null
									: e
							})(e, this.localeData())
							return this.day(this.day() % 7 ? t : t - 7)
						}
						return this.day() || 7
					}),
					(Mn.dayOfYear = function (e) {
						var t =
							Math.round(
								(this.clone().startOf("day") - this.clone().startOf("year")) /
									864e5,
							) + 1
						return null == e ? t : this.add(e - t, "d")
					}),
					(Mn.hour = Mn.hours = Qe),
					(Mn.minute = Mn.minutes = mn),
					(Mn.second = Mn.seconds = fn),
					(Mn.millisecond = Mn.milliseconds = hn),
					(Mn.utcOffset = function (e, t, n) {
						var a,
							s = this._offset || 0
						if (!this.isValid()) return null != e ? this : NaN
						if (null != e) {
							if ("string" == typeof e) {
								if (null === (e = Wt(me, e))) return this
							} else Math.abs(e) < 16 && !n && (e *= 60)
							return (
								!this._isUTC && t && (a = Ct(this)),
								(this._offset = e),
								(this._isUTC = !0),
								null != a && this.add(a, "m"),
								s !== e &&
									(!t || this._changeInProgress
										? Bt(this, It(e - s, "m"), 1, !1)
										: this._changeInProgress ||
										  ((this._changeInProgress = !0),
										  r.updateOffset(this, !0),
										  (this._changeInProgress = null))),
								this
							)
						}
						return this._isUTC ? s : Ct(this)
					}),
					(Mn.utc = function (e) {
						return this.utcOffset(0, e)
					}),
					(Mn.local = function (e) {
						return (
							this._isUTC &&
								(this.utcOffset(0, e),
								(this._isUTC = !1),
								e && this.subtract(Ct(this), "m")),
							this
						)
					}),
					(Mn.parseZone = function () {
						if (null != this._tzm) this.utcOffset(this._tzm, !1, !0)
						else if ("string" == typeof this._i) {
							var e = Wt(le, this._i)
							null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
						}
						return this
					}),
					(Mn.hasAlignedHourOffset = function (e) {
						return (
							!!this.isValid() &&
							((e = e ? wt(e).utcOffset() : 0),
							(this.utcOffset() - e) % 60 == 0)
						)
					}),
					(Mn.isDST = function () {
						return (
							this.utcOffset() > this.clone().month(0).utcOffset() ||
							this.utcOffset() > this.clone().month(5).utcOffset()
						)
					}),
					(Mn.isLocal = function () {
						return !!this.isValid() && !this._isUTC
					}),
					(Mn.isUtcOffset = function () {
						return !!this.isValid() && this._isUTC
					}),
					(Mn.isUtc = Ft),
					(Mn.isUTC = Ft),
					(Mn.zoneAbbr = function () {
						return this._isUTC ? "UTC" : ""
					}),
					(Mn.zoneName = function () {
						return this._isUTC ? "Coordinated Universal Time" : ""
					}),
					(Mn.dates = v("dates accessor is deprecated. Use date instead.", ln)),
					(Mn.months = v(
						"months accessor is deprecated. Use month instead",
						xe,
					)),
					(Mn.years = v("years accessor is deprecated. Use year instead", Pe)),
					(Mn.zone = v(
						"moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
						function (e, t) {
							return null != e
								? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
								: -this.utcOffset()
						},
					)),
					(Mn.isDSTShifted = v(
						"isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
						function () {
							if (!u(this._isDSTShifted)) return this._isDSTShifted
							var e,
								t = {}
							return (
								Y(t, this),
								(t = vt(t))._a
									? ((e = t._isUTC ? h(t._a) : wt(t._a)),
									  (this._isDSTShifted =
											this.isValid() &&
											(function (e, t, n) {
												var a,
													r = Math.min(e.length, t.length),
													s = Math.abs(e.length - t.length),
													i = 0
												for (a = 0; a < r; a++)
													((n && e[a] !== t[a]) ||
														(!n && G(e[a]) !== G(t[a]))) &&
														i++
												return i + s
											})(t._a, e.toArray()) > 0))
									: (this._isDSTShifted = !1),
								this._isDSTShifted
							)
						},
					))
				var Ln = x.prototype
				function Yn(e, t, n, a) {
					var r = dt(),
						s = h().set(a, t)
					return r[n](s, e)
				}
				function gn(e, t, n) {
					if ((_(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
						return Yn(e, t, n, "month")
					var a,
						r = []
					for (a = 0; a < 12; a++) r[a] = Yn(e, a, n, "month")
					return r
				}
				function kn(e, t, n, a) {
					"boolean" == typeof e
						? (_(t) && ((n = t), (t = void 0)), (t = t || ""))
						: ((n = t = e),
						  (e = !1),
						  _(t) && ((n = t), (t = void 0)),
						  (t = t || ""))
					var r,
						s = dt(),
						i = e ? s._week.dow : 0,
						o = []
					if (null != n) return Yn(t, (n + i) % 7, a, "day")
					for (r = 0; r < 7; r++) o[r] = Yn(t, (r + i) % 7, a, "day")
					return o
				}
				;(Ln.calendar = function (e, t, n) {
					var a = this._calendar[e] || this._calendar.sameElse
					return S(a) ? a.call(t, n) : a
				}),
					(Ln.longDateFormat = function (e) {
						var t = this._longDateFormat[e],
							n = this._longDateFormat[e.toUpperCase()]
						return t || !n
							? t
							: ((this._longDateFormat[e] = n
									.match(O)
									.map(function (e) {
										return "MMMM" === e ||
											"MM" === e ||
											"DD" === e ||
											"dddd" === e
											? e.slice(1)
											: e
									})
									.join("")),
							  this._longDateFormat[e])
					}),
					(Ln.invalidDate = function () {
						return this._invalidDate
					}),
					(Ln.ordinal = function (e) {
						return this._ordinal.replace("%d", e)
					}),
					(Ln.preparse = yn),
					(Ln.postformat = yn),
					(Ln.relativeTime = function (e, t, n, a) {
						var r = this._relativeTime[n]
						return S(r) ? r(e, t, n, a) : r.replace(/%d/i, e)
					}),
					(Ln.pastFuture = function (e, t) {
						var n = this._relativeTime[e > 0 ? "future" : "past"]
						return S(n) ? n(t) : n.replace(/%s/i, t)
					}),
					(Ln.set = function (e) {
						var t, n
						for (n in e)
							o(e, n) && (S((t = e[n])) ? (this[n] = t) : (this["_" + n] = t))
						;(this._config = e),
							(this._dayOfMonthOrdinalParseLenient = new RegExp(
								(this._dayOfMonthOrdinalParse.source ||
									this._ordinalParse.source) +
									"|" +
									/\d{1,2}/.source,
							))
					}),
					(Ln.eras = function (e, t) {
						var n,
							a,
							s,
							i = this._eras || dt("en")._eras
						for (n = 0, a = i.length; n < a; ++n) {
							switch (typeof i[n].since) {
								case "string":
									;(s = r(i[n].since).startOf("day")),
										(i[n].since = s.valueOf())
							}
							switch (typeof i[n].until) {
								case "undefined":
									i[n].until = 1 / 0
									break
								case "string":
									;(s = r(i[n].until).startOf("day").valueOf()),
										(i[n].until = s.valueOf())
							}
						}
						return i
					}),
					(Ln.erasParse = function (e, t, n) {
						var a,
							r,
							s,
							i,
							o,
							d = this.eras()
						for (e = e.toUpperCase(), a = 0, r = d.length; a < r; ++a)
							if (
								((s = d[a].name.toUpperCase()),
								(i = d[a].abbr.toUpperCase()),
								(o = d[a].narrow.toUpperCase()),
								n)
							)
								switch (t) {
									case "N":
									case "NN":
									case "NNN":
										if (i === e) return d[a]
										break
									case "NNNN":
										if (s === e) return d[a]
										break
									case "NNNNN":
										if (o === e) return d[a]
								}
							else if ([s, i, o].indexOf(e) >= 0) return d[a]
					}),
					(Ln.erasConvertYear = function (e, t) {
						var n = e.since <= e.until ? 1 : -1
						return void 0 === t
							? r(e.since).year()
							: r(e.since).year() + (t - e.offset) * n
					}),
					(Ln.erasAbbrRegex = function (e) {
						return (
							o(this, "_erasAbbrRegex") || on.call(this),
							e ? this._erasAbbrRegex : this._erasRegex
						)
					}),
					(Ln.erasNameRegex = function (e) {
						return (
							o(this, "_erasNameRegex") || on.call(this),
							e ? this._erasNameRegex : this._erasRegex
						)
					}),
					(Ln.erasNarrowRegex = function (e) {
						return (
							o(this, "_erasNarrowRegex") || on.call(this),
							e ? this._erasNarrowRegex : this._erasRegex
						)
					}),
					(Ln.months = function (e, t) {
						return e
							? s(this._months)
								? this._months[e.month()]
								: this._months[
										(this._months.isFormat || Te).test(t)
											? "format"
											: "standalone"
								  ][e.month()]
							: s(this._months)
							? this._months
							: this._months.standalone
					}),
					(Ln.monthsShort = function (e, t) {
						return e
							? s(this._monthsShort)
								? this._monthsShort[e.month()]
								: this._monthsShort[Te.test(t) ? "format" : "standalone"][
										e.month()
								  ]
							: s(this._monthsShort)
							? this._monthsShort
							: this._monthsShort.standalone
					}),
					(Ln.monthsParse = function (e, t, n) {
						var a, r, s
						if (this._monthsParseExact) return Se.call(this, e, t, n)
						for (
							this._monthsParse ||
								((this._monthsParse = []),
								(this._longMonthsParse = []),
								(this._shortMonthsParse = [])),
								a = 0;
							a < 12;
							a++
						) {
							if (
								((r = h([2e3, a])),
								n &&
									!this._longMonthsParse[a] &&
									((this._longMonthsParse[a] = new RegExp(
										"^" + this.months(r, "").replace(".", "") + "$",
										"i",
									)),
									(this._shortMonthsParse[a] = new RegExp(
										"^" + this.monthsShort(r, "").replace(".", "") + "$",
										"i",
									))),
								n ||
									this._monthsParse[a] ||
									((s =
										"^" + this.months(r, "") + "|^" + this.monthsShort(r, "")),
									(this._monthsParse[a] = new RegExp(s.replace(".", ""), "i"))),
								n && "MMMM" === t && this._longMonthsParse[a].test(e))
							)
								return a
							if (n && "MMM" === t && this._shortMonthsParse[a].test(e))
								return a
							if (!n && this._monthsParse[a].test(e)) return a
						}
					}),
					(Ln.monthsRegex = function (e) {
						return this._monthsParseExact
							? (o(this, "_monthsRegex") || je.call(this),
							  e ? this._monthsStrictRegex : this._monthsRegex)
							: (o(this, "_monthsRegex") || (this._monthsRegex = be),
							  this._monthsStrictRegex && e
									? this._monthsStrictRegex
									: this._monthsRegex)
					}),
					(Ln.monthsShortRegex = function (e) {
						return this._monthsParseExact
							? (o(this, "_monthsRegex") || je.call(this),
							  e ? this._monthsShortStrictRegex : this._monthsShortRegex)
							: (o(this, "_monthsShortRegex") || (this._monthsShortRegex = we),
							  this._monthsShortStrictRegex && e
									? this._monthsShortStrictRegex
									: this._monthsShortRegex)
					}),
					(Ln.week = function (e) {
						return Ce(e, this._week.dow, this._week.doy).week
					}),
					(Ln.firstDayOfYear = function () {
						return this._week.doy
					}),
					(Ln.firstDayOfWeek = function () {
						return this._week.dow
					}),
					(Ln.weekdays = function (e, t) {
						var n = s(this._weekdays)
							? this._weekdays
							: this._weekdays[
									e && !0 !== e && this._weekdays.isFormat.test(t)
										? "format"
										: "standalone"
							  ]
						return !0 === e ? ze(n, this._week.dow) : e ? n[e.day()] : n
					}),
					(Ln.weekdaysMin = function (e) {
						return !0 === e
							? ze(this._weekdaysMin, this._week.dow)
							: e
							? this._weekdaysMin[e.day()]
							: this._weekdaysMin
					}),
					(Ln.weekdaysShort = function (e) {
						return !0 === e
							? ze(this._weekdaysShort, this._week.dow)
							: e
							? this._weekdaysShort[e.day()]
							: this._weekdaysShort
					}),
					(Ln.weekdaysParse = function (e, t, n) {
						var a, r, s
						if (this._weekdaysParseExact) return Ge.call(this, e, t, n)
						for (
							this._weekdaysParse ||
								((this._weekdaysParse = []),
								(this._minWeekdaysParse = []),
								(this._shortWeekdaysParse = []),
								(this._fullWeekdaysParse = [])),
								a = 0;
							a < 7;
							a++
						) {
							if (
								((r = h([2e3, 1]).day(a)),
								n &&
									!this._fullWeekdaysParse[a] &&
									((this._fullWeekdaysParse[a] = new RegExp(
										"^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
										"i",
									)),
									(this._shortWeekdaysParse[a] = new RegExp(
										"^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
										"i",
									)),
									(this._minWeekdaysParse[a] = new RegExp(
										"^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
										"i",
									))),
								this._weekdaysParse[a] ||
									((s =
										"^" +
										this.weekdays(r, "") +
										"|^" +
										this.weekdaysShort(r, "") +
										"|^" +
										this.weekdaysMin(r, "")),
									(this._weekdaysParse[a] = new RegExp(
										s.replace(".", ""),
										"i",
									))),
								n && "dddd" === t && this._fullWeekdaysParse[a].test(e))
							)
								return a
							if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e))
								return a
							if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a
							if (!n && this._weekdaysParse[a].test(e)) return a
						}
					}),
					(Ln.weekdaysRegex = function (e) {
						return this._weekdaysParseExact
							? (o(this, "_weekdaysRegex") || Ve.call(this),
							  e ? this._weekdaysStrictRegex : this._weekdaysRegex)
							: (o(this, "_weekdaysRegex") || (this._weekdaysRegex = qe),
							  this._weekdaysStrictRegex && e
									? this._weekdaysStrictRegex
									: this._weekdaysRegex)
					}),
					(Ln.weekdaysShortRegex = function (e) {
						return this._weekdaysParseExact
							? (o(this, "_weekdaysRegex") || Ve.call(this),
							  e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
							: (o(this, "_weekdaysShortRegex") ||
									(this._weekdaysShortRegex = Ue),
							  this._weekdaysShortStrictRegex && e
									? this._weekdaysShortStrictRegex
									: this._weekdaysShortRegex)
					}),
					(Ln.weekdaysMinRegex = function (e) {
						return this._weekdaysParseExact
							? (o(this, "_weekdaysRegex") || Ve.call(this),
							  e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
							: (o(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Be),
							  this._weekdaysMinStrictRegex && e
									? this._weekdaysMinStrictRegex
									: this._weekdaysMinRegex)
					}),
					(Ln.isPM = function (e) {
						return "p" === (e + "").toLowerCase().charAt(0)
					}),
					(Ln.meridiem = function (e, t, n) {
						return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM"
					}),
					it("en", {
						eras: [
							{
								since: "0001-01-01",
								until: 1 / 0,
								offset: 1,
								name: "Anno Domini",
								narrow: "AD",
								abbr: "AD",
							},
							{
								since: "0000-12-31",
								until: -1 / 0,
								offset: 1,
								name: "Before Christ",
								narrow: "BC",
								abbr: "BC",
							},
						],
						dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
						ordinal: function (e) {
							var t = e % 10
							return (
								e +
								(1 === G((e % 100) / 10)
									? "th"
									: 1 === t
									? "st"
									: 2 === t
									? "nd"
									: 3 === t
									? "rd"
									: "th")
							)
						},
					}),
					(r.lang = v(
						"moment.lang is deprecated. Use moment.locale instead.",
						it,
					)),
					(r.langData = v(
						"moment.langData is deprecated. Use moment.localeData instead.",
						dt,
					))
				var Dn = Math.abs
				function vn(e, t, n, a) {
					var r = It(t, n)
					return (
						(e._milliseconds += a * r._milliseconds),
						(e._days += a * r._days),
						(e._months += a * r._months),
						e._bubble()
					)
				}
				function Tn(e) {
					return e < 0 ? Math.floor(e) : Math.ceil(e)
				}
				function wn(e) {
					return (4800 * e) / 146097
				}
				function bn(e) {
					return (146097 * e) / 4800
				}
				function Sn(e) {
					return function () {
						return this.as(e)
					}
				}
				var Hn = Sn("ms"),
					xn = Sn("s"),
					jn = Sn("m"),
					On = Sn("h"),
					Pn = Sn("d"),
					En = Sn("w"),
					An = Sn("M"),
					Wn = Sn("Q"),
					Nn = Sn("y")
				function Cn(e) {
					return function () {
						return this.isValid() ? this._data[e] : NaN
					}
				}
				var Fn = Cn("milliseconds"),
					zn = Cn("seconds"),
					Rn = Cn("minutes"),
					In = Cn("hours"),
					Jn = Cn("days"),
					qn = Cn("months"),
					Un = Cn("years"),
					Bn = Math.round,
					Gn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 }
				function Vn(e, t, n, a, r) {
					return r.relativeTime(t || 1, !!n, e, a)
				}
				var $n = Math.abs
				function Kn(e) {
					return (e > 0) - (e < 0) || +e
				}
				function Zn() {
					if (!this.isValid()) return this.localeData().invalidDate()
					var e,
						t,
						n,
						a,
						r,
						s,
						i,
						o,
						d = $n(this._milliseconds) / 1e3,
						u = $n(this._days),
						_ = $n(this._months),
						l = this.asSeconds()
					return l
						? ((e = B(d / 60)),
						  (t = B(e / 60)),
						  (d %= 60),
						  (e %= 60),
						  (n = B(_ / 12)),
						  (_ %= 12),
						  (a = d ? d.toFixed(3).replace(/\.?0+$/, "") : ""),
						  (r = l < 0 ? "-" : ""),
						  (s = Kn(this._months) !== Kn(l) ? "-" : ""),
						  (i = Kn(this._days) !== Kn(l) ? "-" : ""),
						  (o = Kn(this._milliseconds) !== Kn(l) ? "-" : ""),
						  r +
								"P" +
								(n ? s + n + "Y" : "") +
								(_ ? s + _ + "M" : "") +
								(u ? i + u + "D" : "") +
								(t || e || d ? "T" : "") +
								(t ? o + t + "H" : "") +
								(e ? o + e + "M" : "") +
								(d ? o + a + "S" : ""))
						: "P0D"
				}
				var Xn = jt.prototype
				return (
					(Xn.isValid = function () {
						return this._isValid
					}),
					(Xn.abs = function () {
						var e = this._data
						return (
							(this._milliseconds = Dn(this._milliseconds)),
							(this._days = Dn(this._days)),
							(this._months = Dn(this._months)),
							(e.milliseconds = Dn(e.milliseconds)),
							(e.seconds = Dn(e.seconds)),
							(e.minutes = Dn(e.minutes)),
							(e.hours = Dn(e.hours)),
							(e.months = Dn(e.months)),
							(e.years = Dn(e.years)),
							this
						)
					}),
					(Xn.add = function (e, t) {
						return vn(this, e, t, 1)
					}),
					(Xn.subtract = function (e, t) {
						return vn(this, e, t, -1)
					}),
					(Xn.as = function (e) {
						if (!this.isValid()) return NaN
						var t,
							n,
							a = this._milliseconds
						if ("month" === (e = R(e)) || "quarter" === e || "year" === e)
							switch (
								((t = this._days + a / 864e5), (n = this._months + wn(t)), e)
							) {
								case "month":
									return n
								case "quarter":
									return n / 3
								case "year":
									return n / 12
							}
						else
							switch (((t = this._days + Math.round(bn(this._months))), e)) {
								case "week":
									return t / 7 + a / 6048e5
								case "day":
									return t + a / 864e5
								case "hour":
									return 24 * t + a / 36e5
								case "minute":
									return 1440 * t + a / 6e4
								case "second":
									return 86400 * t + a / 1e3
								case "millisecond":
									return Math.floor(864e5 * t) + a
								default:
									throw new Error("Unknown unit " + e)
							}
					}),
					(Xn.asMilliseconds = Hn),
					(Xn.asSeconds = xn),
					(Xn.asMinutes = jn),
					(Xn.asHours = On),
					(Xn.asDays = Pn),
					(Xn.asWeeks = En),
					(Xn.asMonths = An),
					(Xn.asQuarters = Wn),
					(Xn.asYears = Nn),
					(Xn.valueOf = function () {
						return this.isValid()
							? this._milliseconds +
									864e5 * this._days +
									(this._months % 12) * 2592e6 +
									31536e6 * G(this._months / 12)
							: NaN
					}),
					(Xn._bubble = function () {
						var e,
							t,
							n,
							a,
							r,
							s = this._milliseconds,
							i = this._days,
							o = this._months,
							d = this._data
						return (
							(s >= 0 && i >= 0 && o >= 0) ||
								(s <= 0 && i <= 0 && o <= 0) ||
								((s += 864e5 * Tn(bn(o) + i)), (i = 0), (o = 0)),
							(d.milliseconds = s % 1e3),
							(e = B(s / 1e3)),
							(d.seconds = e % 60),
							(t = B(e / 60)),
							(d.minutes = t % 60),
							(n = B(t / 60)),
							(d.hours = n % 24),
							(i += B(n / 24)),
							(r = B(wn(i))),
							(o += r),
							(i -= Tn(bn(r))),
							(a = B(o / 12)),
							(o %= 12),
							(d.days = i),
							(d.months = o),
							(d.years = a),
							this
						)
					}),
					(Xn.clone = function () {
						return It(this)
					}),
					(Xn.get = function (e) {
						return (e = R(e)), this.isValid() ? this[e + "s"]() : NaN
					}),
					(Xn.milliseconds = Fn),
					(Xn.seconds = zn),
					(Xn.minutes = Rn),
					(Xn.hours = In),
					(Xn.days = Jn),
					(Xn.weeks = function () {
						return B(this.days() / 7)
					}),
					(Xn.months = qn),
					(Xn.years = Un),
					(Xn.humanize = function (e, t) {
						if (!this.isValid()) return this.localeData().invalidDate()
						var n,
							a,
							r = !1,
							s = Gn
						return (
							"object" == typeof e && ((t = e), (e = !1)),
							"boolean" == typeof e && (r = e),
							"object" == typeof t &&
								((s = Object.assign({}, Gn, t)),
								null != t.s && null == t.ss && (s.ss = t.s - 1)),
							(n = this.localeData()),
							(a = (function (e, t, n, a) {
								var r = It(e).abs(),
									s = Bn(r.as("s")),
									i = Bn(r.as("m")),
									o = Bn(r.as("h")),
									d = Bn(r.as("d")),
									u = Bn(r.as("M")),
									_ = Bn(r.as("w")),
									l = Bn(r.as("y")),
									m =
										(s <= n.ss && ["s", s]) ||
										(s < n.s && ["ss", s]) ||
										(i <= 1 && ["m"]) ||
										(i < n.m && ["mm", i]) ||
										(o <= 1 && ["h"]) ||
										(o < n.h && ["hh", o]) ||
										(d <= 1 && ["d"]) ||
										(d < n.d && ["dd", d])
								return (
									null != n.w &&
										(m = m || (_ <= 1 && ["w"]) || (_ < n.w && ["ww", _])),
									((m = m ||
										(u <= 1 && ["M"]) ||
										(u < n.M && ["MM", u]) ||
										(l <= 1 && ["y"]) || ["yy", l])[2] = t),
									(m[3] = +e > 0),
									(m[4] = a),
									Vn.apply(null, m)
								)
							})(this, !r, s, n)),
							r && (a = n.pastFuture(+this, a)),
							n.postformat(a)
						)
					}),
					(Xn.toISOString = Zn),
					(Xn.toString = Zn),
					(Xn.toJSON = Zn),
					(Xn.locale = Qt),
					(Xn.localeData = tn),
					(Xn.toIsoString = v(
						"toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
						Zn,
					)),
					(Xn.lang = en),
					W("X", 0, 0, "unix"),
					W("x", 0, 0, "valueOf"),
					he("x", _e),
					he("X", /[+-]?\d+(\.\d{1,3})?/),
					Le("X", function (e, t, n) {
						n._d = new Date(1e3 * parseFloat(e))
					}),
					Le("x", function (e, t, n) {
						n._d = new Date(G(e))
					}),
					//! moment.js
					(r.version = "2.27.0"),
					(t = wt),
					(r.fn = Mn),
					(r.min = function () {
						var e = [].slice.call(arguments, 0)
						return Ht("isBefore", e)
					}),
					(r.max = function () {
						var e = [].slice.call(arguments, 0)
						return Ht("isAfter", e)
					}),
					(r.now = function () {
						return Date.now ? Date.now() : +new Date()
					}),
					(r.utc = h),
					(r.unix = function (e) {
						return wt(1e3 * e)
					}),
					(r.months = function (e, t) {
						return gn(e, t, "months")
					}),
					(r.isDate = l),
					(r.locale = it),
					(r.invalid = M),
					(r.duration = It),
					(r.isMoment = k),
					(r.weekdays = function (e, t, n) {
						return kn(e, t, n, "weekdays")
					}),
					(r.parseZone = function () {
						return wt.apply(null, arguments).parseZone()
					}),
					(r.localeData = dt),
					(r.isDuration = Ot),
					(r.monthsShort = function (e, t) {
						return gn(e, t, "monthsShort")
					}),
					(r.weekdaysMin = function (e, t, n) {
						return kn(e, t, n, "weekdaysMin")
					}),
					(r.defineLocale = ot),
					(r.updateLocale = function (e, t) {
						if (null != t) {
							var n,
								a,
								r = et
							null != tt[e] && null != tt[e].parentLocale
								? tt[e].set(H(tt[e]._config, t))
								: (null != (a = st(e)) && (r = a._config),
								  (t = H(r, t)),
								  null == a && (t.abbr = e),
								  ((n = new x(t)).parentLocale = tt[e]),
								  (tt[e] = n)),
								it(e)
						} else
							null != tt[e] &&
								(null != tt[e].parentLocale
									? ((tt[e] = tt[e].parentLocale), e === it() && it(e))
									: null != tt[e] && delete tt[e])
						return tt[e]
					}),
					(r.locales = function () {
						return T(tt)
					}),
					(r.weekdaysShort = function (e, t, n) {
						return kn(e, t, n, "weekdaysShort")
					}),
					(r.normalizeUnits = R),
					(r.relativeTimeRounding = function (e) {
						return void 0 === e ? Bn : "function" == typeof e && ((Bn = e), !0)
					}),
					(r.relativeTimeThreshold = function (e, t) {
						return (
							void 0 !== Gn[e] &&
							(void 0 === t
								? Gn[e]
								: ((Gn[e] = t), "s" === e && (Gn.ss = t - 1), !0))
						)
					}),
					(r.calendarFormat = function (e, t) {
						var n = e.diff(t, "days", !0)
						return n < -6
							? "sameElse"
							: n < -1
							? "lastWeek"
							: n < 0
							? "lastDay"
							: n < 1
							? "sameDay"
							: n < 2
							? "nextDay"
							: n < 7
							? "nextWeek"
							: "sameElse"
					}),
					(r.prototype = Mn),
					(r.HTML5_FMT = {
						DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
						DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
						DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
						DATE: "YYYY-MM-DD",
						TIME: "HH:mm",
						TIME_SECONDS: "HH:mm:ss",
						TIME_MS: "HH:mm:ss.SSS",
						WEEK: "GGGG-[W]WW",
						MONTH: "YYYY-MM",
					}),
					r
				)
			})()
		}.call(this, n(147)(e)))
	},
	function (e, t, n) {
		"use strict"
		var a = n(137),
			r = Object.prototype.toString
		function s(e) {
			return "[object Array]" === r.call(e)
		}
		function i(e) {
			return void 0 === e
		}
		function o(e) {
			return null !== e && "object" == typeof e
		}
		function d(e) {
			return "[object Function]" === r.call(e)
		}
		function u(e, t) {
			if (null != e)
				if (("object" != typeof e && (e = [e]), s(e)))
					for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e)
				else
					for (var r in e)
						Object.prototype.hasOwnProperty.call(e, r) &&
							t.call(null, e[r], r, e)
		}
		e.exports = {
			isArray: s,
			isArrayBuffer: function (e) {
				return "[object ArrayBuffer]" === r.call(e)
			},
			isBuffer: function (e) {
				return (
					null !== e &&
					!i(e) &&
					null !== e.constructor &&
					!i(e.constructor) &&
					"function" == typeof e.constructor.isBuffer &&
					e.constructor.isBuffer(e)
				)
			},
			isFormData: function (e) {
				return "undefined" != typeof FormData && e instanceof FormData
			},
			isArrayBufferView: function (e) {
				return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
					? ArrayBuffer.isView(e)
					: e && e.buffer && e.buffer instanceof ArrayBuffer
			},
			isString: function (e) {
				return "string" == typeof e
			},
			isNumber: function (e) {
				return "number" == typeof e
			},
			isObject: o,
			isUndefined: i,
			isDate: function (e) {
				return "[object Date]" === r.call(e)
			},
			isFile: function (e) {
				return "[object File]" === r.call(e)
			},
			isBlob: function (e) {
				return "[object Blob]" === r.call(e)
			},
			isFunction: d,
			isStream: function (e) {
				return o(e) && d(e.pipe)
			},
			isURLSearchParams: function (e) {
				return (
					"undefined" != typeof URLSearchParams && e instanceof URLSearchParams
				)
			},
			isStandardBrowserEnv: function () {
				return (
					("undefined" == typeof navigator ||
						("ReactNative" !== navigator.product &&
							"NativeScript" !== navigator.product &&
							"NS" !== navigator.product)) &&
					"undefined" != typeof window &&
					"undefined" != typeof document
				)
			},
			forEach: u,
			merge: function e() {
				var t = {}
				function n(n, a) {
					"object" == typeof t[a] && "object" == typeof n
						? (t[a] = e(t[a], n))
						: (t[a] = n)
				}
				for (var a = 0, r = arguments.length; a < r; a++) u(arguments[a], n)
				return t
			},
			deepMerge: function e() {
				var t = {}
				function n(n, a) {
					"object" == typeof t[a] && "object" == typeof n
						? (t[a] = e(t[a], n))
						: (t[a] = "object" == typeof n ? e({}, n) : n)
				}
				for (var a = 0, r = arguments.length; a < r; a++) u(arguments[a], n)
				return t
			},
			extend: function (e, t, n) {
				return (
					u(t, function (t, r) {
						e[r] = n && "function" == typeof t ? a(t, n) : t
					}),
					e
				)
			},
			trim: function (e) {
				return e.replace(/^\s*/, "").replace(/\s*$/, "")
			},
		}
	},
	function (e, t, n) {
		var a
		/*!
		 * jQuery JavaScript Library v3.5.1
		 * https://jquery.com/
		 *
		 * Includes Sizzle.js
		 * https://sizzlejs.com/
		 *
		 * Copyright JS Foundation and other contributors
		 * Released under the MIT license
		 * https://jquery.org/license
		 *
		 * Date: 2020-05-04T22:49Z
		 */ !(function (t, n) {
			"use strict"
			"object" == typeof e.exports
				? (e.exports = t.document
						? n(t, !0)
						: function (e) {
								if (!e.document)
									throw new Error("jQuery requires a window with a document")
								return n(e)
						  })
				: n(t)
		})("undefined" != typeof window ? window : this, function (n, r) {
			"use strict"
			var s = [],
				i = Object.getPrototypeOf,
				o = s.slice,
				d = s.flat
					? function (e) {
							return s.flat.call(e)
					  }
					: function (e) {
							return s.concat.apply([], e)
					  },
				u = s.push,
				_ = s.indexOf,
				l = {},
				m = l.toString,
				c = l.hasOwnProperty,
				h = c.toString,
				f = h.call(Object),
				p = {},
				M = function (e) {
					return "function" == typeof e && "number" != typeof e.nodeType
				},
				y = function (e) {
					return null != e && e === e.window
				},
				L = n.document,
				Y = { type: !0, src: !0, nonce: !0, noModule: !0 }
			function g(e, t, n) {
				var a,
					r,
					s = (n = n || L).createElement("script")
				if (((s.text = e), t))
					for (a in Y)
						(r = t[a] || (t.getAttribute && t.getAttribute(a))) &&
							s.setAttribute(a, r)
				n.head.appendChild(s).parentNode.removeChild(s)
			}
			function k(e) {
				return null == e
					? e + ""
					: "object" == typeof e || "function" == typeof e
					? l[m.call(e)] || "object"
					: typeof e
			}
			var D = function (e, t) {
				return new D.fn.init(e, t)
			}
			function v(e) {
				var t = !!e && "length" in e && e.length,
					n = k(e)
				return (
					!M(e) &&
					!y(e) &&
					("array" === n ||
						0 === t ||
						("number" == typeof t && t > 0 && t - 1 in e))
				)
			}
			;(D.fn = D.prototype = {
				jquery: "3.5.1",
				constructor: D,
				length: 0,
				toArray: function () {
					return o.call(this)
				},
				get: function (e) {
					return null == e
						? o.call(this)
						: e < 0
						? this[e + this.length]
						: this[e]
				},
				pushStack: function (e) {
					var t = D.merge(this.constructor(), e)
					return (t.prevObject = this), t
				},
				each: function (e) {
					return D.each(this, e)
				},
				map: function (e) {
					return this.pushStack(
						D.map(this, function (t, n) {
							return e.call(t, n, t)
						}),
					)
				},
				slice: function () {
					return this.pushStack(o.apply(this, arguments))
				},
				first: function () {
					return this.eq(0)
				},
				last: function () {
					return this.eq(-1)
				},
				even: function () {
					return this.pushStack(
						D.grep(this, function (e, t) {
							return (t + 1) % 2
						}),
					)
				},
				odd: function () {
					return this.pushStack(
						D.grep(this, function (e, t) {
							return t % 2
						}),
					)
				},
				eq: function (e) {
					var t = this.length,
						n = +e + (e < 0 ? t : 0)
					return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
				},
				end: function () {
					return this.prevObject || this.constructor()
				},
				push: u,
				sort: s.sort,
				splice: s.splice,
			}),
				(D.extend = D.fn.extend = function () {
					var e,
						t,
						n,
						a,
						r,
						s,
						i = arguments[0] || {},
						o = 1,
						d = arguments.length,
						u = !1
					for (
						"boolean" == typeof i && ((u = i), (i = arguments[o] || {}), o++),
							"object" == typeof i || M(i) || (i = {}),
							o === d && ((i = this), o--);
						o < d;
						o++
					)
						if (null != (e = arguments[o]))
							for (t in e)
								(a = e[t]),
									"__proto__" !== t &&
										i !== a &&
										(u && a && (D.isPlainObject(a) || (r = Array.isArray(a)))
											? ((n = i[t]),
											  (s =
													r && !Array.isArray(n)
														? []
														: r || D.isPlainObject(n)
														? n
														: {}),
											  (r = !1),
											  (i[t] = D.extend(u, s, a)))
											: void 0 !== a && (i[t] = a))
					return i
				}),
				D.extend({
					expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
					isReady: !0,
					error: function (e) {
						throw new Error(e)
					},
					noop: function () {},
					isPlainObject: function (e) {
						var t, n
						return (
							!(!e || "[object Object]" !== m.call(e)) &&
							(!(t = i(e)) ||
								("function" ==
									typeof (n = c.call(t, "constructor") && t.constructor) &&
									h.call(n) === f))
						)
					},
					isEmptyObject: function (e) {
						var t
						for (t in e) return !1
						return !0
					},
					globalEval: function (e, t, n) {
						g(e, { nonce: t && t.nonce }, n)
					},
					each: function (e, t) {
						var n,
							a = 0
						if (v(e))
							for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++);
						else for (a in e) if (!1 === t.call(e[a], a, e[a])) break
						return e
					},
					makeArray: function (e, t) {
						var n = t || []
						return (
							null != e &&
								(v(Object(e))
									? D.merge(n, "string" == typeof e ? [e] : e)
									: u.call(n, e)),
							n
						)
					},
					inArray: function (e, t, n) {
						return null == t ? -1 : _.call(t, e, n)
					},
					merge: function (e, t) {
						for (var n = +t.length, a = 0, r = e.length; a < n; a++)
							e[r++] = t[a]
						return (e.length = r), e
					},
					grep: function (e, t, n) {
						for (var a = [], r = 0, s = e.length, i = !n; r < s; r++)
							!t(e[r], r) !== i && a.push(e[r])
						return a
					},
					map: function (e, t, n) {
						var a,
							r,
							s = 0,
							i = []
						if (v(e))
							for (a = e.length; s < a; s++)
								null != (r = t(e[s], s, n)) && i.push(r)
						else for (s in e) null != (r = t(e[s], s, n)) && i.push(r)
						return d(i)
					},
					guid: 1,
					support: p,
				}),
				"function" == typeof Symbol &&
					(D.fn[Symbol.iterator] = s[Symbol.iterator]),
				D.each(
					"Boolean Number String Function Array Date RegExp Object Error Symbol".split(
						" ",
					),
					function (e, t) {
						l["[object " + t + "]"] = t.toLowerCase()
					},
				)
			var T =
				/*!
				 * Sizzle CSS Selector Engine v2.3.5
				 * https://sizzlejs.com/
				 *
				 * Copyright JS Foundation and other contributors
				 * Released under the MIT license
				 * https://js.foundation/
				 *
				 * Date: 2020-03-14
				 */
				(function (e) {
					var t,
						n,
						a,
						r,
						s,
						i,
						o,
						d,
						u,
						_,
						l,
						m,
						c,
						h,
						f,
						p,
						M,
						y,
						L,
						Y = "sizzle" + 1 * new Date(),
						g = e.document,
						k = 0,
						D = 0,
						v = de(),
						T = de(),
						w = de(),
						b = de(),
						S = function (e, t) {
							return e === t && (l = !0), 0
						},
						H = {}.hasOwnProperty,
						x = [],
						j = x.pop,
						O = x.push,
						P = x.push,
						E = x.slice,
						A = function (e, t) {
							for (var n = 0, a = e.length; n < a; n++) if (e[n] === t) return n
							return -1
						},
						W =
							"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
						N = "[\\x20\\t\\r\\n\\f]",
						C =
							"(?:\\\\[\\da-fA-F]{1,6}" +
							N +
							"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
						F =
							"\\[" +
							N +
							"*(" +
							C +
							")(?:" +
							N +
							"*([*^$|!~]?=)" +
							N +
							"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
							C +
							"))|)" +
							N +
							"*\\]",
						z =
							":(" +
							C +
							")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
							F +
							")*)|.*)\\)|)",
						R = new RegExp(N + "+", "g"),
						I = new RegExp(
							"^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$",
							"g",
						),
						J = new RegExp("^" + N + "*," + N + "*"),
						q = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
						U = new RegExp(N + "|>"),
						B = new RegExp(z),
						G = new RegExp("^" + C + "$"),
						V = {
							ID: new RegExp("^#(" + C + ")"),
							CLASS: new RegExp("^\\.(" + C + ")"),
							TAG: new RegExp("^(" + C + "|[*])"),
							ATTR: new RegExp("^" + F),
							PSEUDO: new RegExp("^" + z),
							CHILD: new RegExp(
								"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
									N +
									"*(even|odd|(([+-]|)(\\d*)n|)" +
									N +
									"*(?:([+-]|)" +
									N +
									"*(\\d+)|))" +
									N +
									"*\\)|)",
								"i",
							),
							bool: new RegExp("^(?:" + W + ")$", "i"),
							needsContext: new RegExp(
								"^" +
									N +
									"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
									N +
									"*((?:-\\d)?\\d*)" +
									N +
									"*\\)|)(?=[^-]|$)",
								"i",
							),
						},
						$ = /HTML$/i,
						K = /^(?:input|select|textarea|button)$/i,
						Z = /^h\d$/i,
						X = /^[^{]+\{\s*\[native \w/,
						Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
						ee = /[+~]/,
						te = new RegExp(
							"\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])",
							"g",
						),
						ne = function (e, t) {
							var n = "0x" + e.slice(1) - 65536
							return (
								t ||
								(n < 0
									? String.fromCharCode(n + 65536)
									: String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
							)
						},
						ae = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
						re = function (e, t) {
							return t
								? "\0" === e
									? "�"
									: e.slice(0, -1) +
									  "\\" +
									  e.charCodeAt(e.length - 1).toString(16) +
									  " "
								: "\\" + e
						},
						se = function () {
							m()
						},
						ie = Ye(
							function (e) {
								return (
									!0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
								)
							},
							{ dir: "parentNode", next: "legend" },
						)
					try {
						P.apply((x = E.call(g.childNodes)), g.childNodes),
							x[g.childNodes.length].nodeType
					} catch (e) {
						P = {
							apply: x.length
								? function (e, t) {
										O.apply(e, E.call(t))
								  }
								: function (e, t) {
										for (var n = e.length, a = 0; (e[n++] = t[a++]); );
										e.length = n - 1
								  },
						}
					}
					function oe(e, t, a, r) {
						var s,
							o,
							u,
							_,
							l,
							h,
							M,
							y = t && t.ownerDocument,
							g = t ? t.nodeType : 9
						if (
							((a = a || []),
							"string" != typeof e || !e || (1 !== g && 9 !== g && 11 !== g))
						)
							return a
						if (!r && (m(t), (t = t || c), f)) {
							if (11 !== g && (l = Q.exec(e)))
								if ((s = l[1])) {
									if (9 === g) {
										if (!(u = t.getElementById(s))) return a
										if (u.id === s) return a.push(u), a
									} else if (
										y &&
										(u = y.getElementById(s)) &&
										L(t, u) &&
										u.id === s
									)
										return a.push(u), a
								} else {
									if (l[2]) return P.apply(a, t.getElementsByTagName(e)), a
									if (
										(s = l[3]) &&
										n.getElementsByClassName &&
										t.getElementsByClassName
									)
										return P.apply(a, t.getElementsByClassName(s)), a
								}
							if (
								n.qsa &&
								!b[e + " "] &&
								(!p || !p.test(e)) &&
								(1 !== g || "object" !== t.nodeName.toLowerCase())
							) {
								if (((M = e), (y = t), 1 === g && (U.test(e) || q.test(e)))) {
									for (
										((y = (ee.test(e) && Me(t.parentNode)) || t) === t &&
											n.scope) ||
											((_ = t.getAttribute("id"))
												? (_ = _.replace(ae, re))
												: t.setAttribute("id", (_ = Y))),
											o = (h = i(e)).length;
										o--;

									)
										h[o] = (_ ? "#" + _ : ":scope") + " " + Le(h[o])
									M = h.join(",")
								}
								try {
									return P.apply(a, y.querySelectorAll(M)), a
								} catch (t) {
									b(e, !0)
								} finally {
									_ === Y && t.removeAttribute("id")
								}
							}
						}
						return d(e.replace(I, "$1"), t, a, r)
					}
					function de() {
						var e = []
						return function t(n, r) {
							return (
								e.push(n + " ") > a.cacheLength && delete t[e.shift()],
								(t[n + " "] = r)
							)
						}
					}
					function ue(e) {
						return (e[Y] = !0), e
					}
					function _e(e) {
						var t = c.createElement("fieldset")
						try {
							return !!e(t)
						} catch (e) {
							return !1
						} finally {
							t.parentNode && t.parentNode.removeChild(t), (t = null)
						}
					}
					function le(e, t) {
						for (var n = e.split("|"), r = n.length; r--; )
							a.attrHandle[n[r]] = t
					}
					function me(e, t) {
						var n = t && e,
							a =
								n &&
								1 === e.nodeType &&
								1 === t.nodeType &&
								e.sourceIndex - t.sourceIndex
						if (a) return a
						if (n) for (; (n = n.nextSibling); ) if (n === t) return -1
						return e ? 1 : -1
					}
					function ce(e) {
						return function (t) {
							return "input" === t.nodeName.toLowerCase() && t.type === e
						}
					}
					function he(e) {
						return function (t) {
							var n = t.nodeName.toLowerCase()
							return ("input" === n || "button" === n) && t.type === e
						}
					}
					function fe(e) {
						return function (t) {
							return "form" in t
								? t.parentNode && !1 === t.disabled
									? "label" in t
										? "label" in t.parentNode
											? t.parentNode.disabled === e
											: t.disabled === e
										: t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
									: t.disabled === e
								: "label" in t && t.disabled === e
						}
					}
					function pe(e) {
						return ue(function (t) {
							return (
								(t = +t),
								ue(function (n, a) {
									for (var r, s = e([], n.length, t), i = s.length; i--; )
										n[(r = s[i])] && (n[r] = !(a[r] = n[r]))
								})
							)
						})
					}
					function Me(e) {
						return e && void 0 !== e.getElementsByTagName && e
					}
					for (t in ((n = oe.support = {}),
					(s = oe.isXML = function (e) {
						var t = e.namespaceURI,
							n = (e.ownerDocument || e).documentElement
						return !$.test(t || (n && n.nodeName) || "HTML")
					}),
					(m = oe.setDocument = function (e) {
						var t,
							r,
							i = e ? e.ownerDocument || e : g
						return i != c && 9 === i.nodeType && i.documentElement
							? ((h = (c = i).documentElement),
							  (f = !s(c)),
							  g != c &&
									(r = c.defaultView) &&
									r.top !== r &&
									(r.addEventListener
										? r.addEventListener("unload", se, !1)
										: r.attachEvent && r.attachEvent("onunload", se)),
							  (n.scope = _e(function (e) {
									return (
										h.appendChild(e).appendChild(c.createElement("div")),
										void 0 !== e.querySelectorAll &&
											!e.querySelectorAll(":scope fieldset div").length
									)
							  })),
							  (n.attributes = _e(function (e) {
									return (e.className = "i"), !e.getAttribute("className")
							  })),
							  (n.getElementsByTagName = _e(function (e) {
									return (
										e.appendChild(c.createComment("")),
										!e.getElementsByTagName("*").length
									)
							  })),
							  (n.getElementsByClassName = X.test(c.getElementsByClassName)),
							  (n.getById = _e(function (e) {
									return (
										(h.appendChild(e).id = Y),
										!c.getElementsByName || !c.getElementsByName(Y).length
									)
							  })),
							  n.getById
									? ((a.filter.ID = function (e) {
											var t = e.replace(te, ne)
											return function (e) {
												return e.getAttribute("id") === t
											}
									  }),
									  (a.find.ID = function (e, t) {
											if (void 0 !== t.getElementById && f) {
												var n = t.getElementById(e)
												return n ? [n] : []
											}
									  }))
									: ((a.filter.ID = function (e) {
											var t = e.replace(te, ne)
											return function (e) {
												var n =
													void 0 !== e.getAttributeNode &&
													e.getAttributeNode("id")
												return n && n.value === t
											}
									  }),
									  (a.find.ID = function (e, t) {
											if (void 0 !== t.getElementById && f) {
												var n,
													a,
													r,
													s = t.getElementById(e)
												if (s) {
													if ((n = s.getAttributeNode("id")) && n.value === e)
														return [s]
													for (
														r = t.getElementsByName(e), a = 0;
														(s = r[a++]);

													)
														if ((n = s.getAttributeNode("id")) && n.value === e)
															return [s]
												}
												return []
											}
									  })),
							  (a.find.TAG = n.getElementsByTagName
									? function (e, t) {
											return void 0 !== t.getElementsByTagName
												? t.getElementsByTagName(e)
												: n.qsa
												? t.querySelectorAll(e)
												: void 0
									  }
									: function (e, t) {
											var n,
												a = [],
												r = 0,
												s = t.getElementsByTagName(e)
											if ("*" === e) {
												for (; (n = s[r++]); ) 1 === n.nodeType && a.push(n)
												return a
											}
											return s
									  }),
							  (a.find.CLASS =
									n.getElementsByClassName &&
									function (e, t) {
										if (void 0 !== t.getElementsByClassName && f)
											return t.getElementsByClassName(e)
									}),
							  (M = []),
							  (p = []),
							  (n.qsa = X.test(c.querySelectorAll)) &&
									(_e(function (e) {
										var t
										;(h.appendChild(e).innerHTML =
											"<a id='" +
											Y +
											"'></a><select id='" +
											Y +
											"-\r\\' msallowcapture=''><option selected=''></option></select>"),
											e.querySelectorAll("[msallowcapture^='']").length &&
												p.push("[*^$]=" + N + "*(?:''|\"\")"),
											e.querySelectorAll("[selected]").length ||
												p.push("\\[" + N + "*(?:value|" + W + ")"),
											e.querySelectorAll("[id~=" + Y + "-]").length ||
												p.push("~="),
											(t = c.createElement("input")).setAttribute("name", ""),
											e.appendChild(t),
											e.querySelectorAll("[name='']").length ||
												p.push(
													"\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")",
												),
											e.querySelectorAll(":checked").length ||
												p.push(":checked"),
											e.querySelectorAll("a#" + Y + "+*").length ||
												p.push(".#.+[+~]"),
											e.querySelectorAll("\\\f"),
											p.push("[\\r\\n\\f]")
									}),
									_e(function (e) {
										e.innerHTML =
											"<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
										var t = c.createElement("input")
										t.setAttribute("type", "hidden"),
											e.appendChild(t).setAttribute("name", "D"),
											e.querySelectorAll("[name=d]").length &&
												p.push("name" + N + "*[*^$|!~]?="),
											2 !== e.querySelectorAll(":enabled").length &&
												p.push(":enabled", ":disabled"),
											(h.appendChild(e).disabled = !0),
											2 !== e.querySelectorAll(":disabled").length &&
												p.push(":enabled", ":disabled"),
											e.querySelectorAll("*,:x"),
											p.push(",.*:")
									})),
							  (n.matchesSelector = X.test(
									(y =
										h.matches ||
										h.webkitMatchesSelector ||
										h.mozMatchesSelector ||
										h.oMatchesSelector ||
										h.msMatchesSelector),
							  )) &&
									_e(function (e) {
										;(n.disconnectedMatch = y.call(e, "*")),
											y.call(e, "[s!='']:x"),
											M.push("!=", z)
									}),
							  (p = p.length && new RegExp(p.join("|"))),
							  (M = M.length && new RegExp(M.join("|"))),
							  (t = X.test(h.compareDocumentPosition)),
							  (L =
									t || X.test(h.contains)
										? function (e, t) {
												var n = 9 === e.nodeType ? e.documentElement : e,
													a = t && t.parentNode
												return (
													e === a ||
													!(
														!a ||
														1 !== a.nodeType ||
														!(n.contains
															? n.contains(a)
															: e.compareDocumentPosition &&
															  16 & e.compareDocumentPosition(a))
													)
												)
										  }
										: function (e, t) {
												if (t)
													for (; (t = t.parentNode); ) if (t === e) return !0
												return !1
										  }),
							  (S = t
									? function (e, t) {
											if (e === t) return (l = !0), 0
											var a =
												!e.compareDocumentPosition - !t.compareDocumentPosition
											return (
												a ||
												(1 &
													(a =
														(e.ownerDocument || e) == (t.ownerDocument || t)
															? e.compareDocumentPosition(t)
															: 1) ||
												(!n.sortDetached && t.compareDocumentPosition(e) === a)
													? e == c || (e.ownerDocument == g && L(g, e))
														? -1
														: t == c || (t.ownerDocument == g && L(g, t))
														? 1
														: _
														? A(_, e) - A(_, t)
														: 0
													: 4 & a
													? -1
													: 1)
											)
									  }
									: function (e, t) {
											if (e === t) return (l = !0), 0
											var n,
												a = 0,
												r = e.parentNode,
												s = t.parentNode,
												i = [e],
												o = [t]
											if (!r || !s)
												return e == c
													? -1
													: t == c
													? 1
													: r
													? -1
													: s
													? 1
													: _
													? A(_, e) - A(_, t)
													: 0
											if (r === s) return me(e, t)
											for (n = e; (n = n.parentNode); ) i.unshift(n)
											for (n = t; (n = n.parentNode); ) o.unshift(n)
											for (; i[a] === o[a]; ) a++
											return a
												? me(i[a], o[a])
												: i[a] == g
												? -1
												: o[a] == g
												? 1
												: 0
									  }),
							  c)
							: c
					}),
					(oe.matches = function (e, t) {
						return oe(e, null, null, t)
					}),
					(oe.matchesSelector = function (e, t) {
						if (
							(m(e),
							n.matchesSelector &&
								f &&
								!b[t + " "] &&
								(!M || !M.test(t)) &&
								(!p || !p.test(t)))
						)
							try {
								var a = y.call(e, t)
								if (
									a ||
									n.disconnectedMatch ||
									(e.document && 11 !== e.document.nodeType)
								)
									return a
							} catch (e) {
								b(t, !0)
							}
						return oe(t, c, null, [e]).length > 0
					}),
					(oe.contains = function (e, t) {
						return (e.ownerDocument || e) != c && m(e), L(e, t)
					}),
					(oe.attr = function (e, t) {
						;(e.ownerDocument || e) != c && m(e)
						var r = a.attrHandle[t.toLowerCase()],
							s =
								r && H.call(a.attrHandle, t.toLowerCase())
									? r(e, t, !f)
									: void 0
						return void 0 !== s
							? s
							: n.attributes || !f
							? e.getAttribute(t)
							: (s = e.getAttributeNode(t)) && s.specified
							? s.value
							: null
					}),
					(oe.escape = function (e) {
						return (e + "").replace(ae, re)
					}),
					(oe.error = function (e) {
						throw new Error("Syntax error, unrecognized expression: " + e)
					}),
					(oe.uniqueSort = function (e) {
						var t,
							a = [],
							r = 0,
							s = 0
						if (
							((l = !n.detectDuplicates),
							(_ = !n.sortStable && e.slice(0)),
							e.sort(S),
							l)
						) {
							for (; (t = e[s++]); ) t === e[s] && (r = a.push(s))
							for (; r--; ) e.splice(a[r], 1)
						}
						return (_ = null), e
					}),
					(r = oe.getText = function (e) {
						var t,
							n = "",
							a = 0,
							s = e.nodeType
						if (s) {
							if (1 === s || 9 === s || 11 === s) {
								if ("string" == typeof e.textContent) return e.textContent
								for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
							} else if (3 === s || 4 === s) return e.nodeValue
						} else for (; (t = e[a++]); ) n += r(t)
						return n
					}),
					((a = oe.selectors = {
						cacheLength: 50,
						createPseudo: ue,
						match: V,
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
								)
							},
							CHILD: function (e) {
								return (
									(e[1] = e[1].toLowerCase()),
									"nth" === e[1].slice(0, 3)
										? (e[3] || oe.error(e[0]),
										  (e[4] = +(e[4]
												? e[5] + (e[6] || 1)
												: 2 * ("even" === e[3] || "odd" === e[3]))),
										  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
										: e[3] && oe.error(e[0]),
									e
								)
							},
							PSEUDO: function (e) {
								var t,
									n = !e[6] && e[2]
								return V.CHILD.test(e[0])
									? null
									: (e[3]
											? (e[2] = e[4] || e[5] || "")
											: n &&
											  B.test(n) &&
											  (t = i(n, !0)) &&
											  (t = n.indexOf(")", n.length - t) - n.length) &&
											  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
									  e.slice(0, 3))
							},
						},
						filter: {
							TAG: function (e) {
								var t = e.replace(te, ne).toLowerCase()
								return "*" === e
									? function () {
											return !0
									  }
									: function (e) {
											return e.nodeName && e.nodeName.toLowerCase() === t
									  }
							},
							CLASS: function (e) {
								var t = v[e + " "]
								return (
									t ||
									((t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) &&
										v(e, function (e) {
											return t.test(
												("string" == typeof e.className && e.className) ||
													(void 0 !== e.getAttribute &&
														e.getAttribute("class")) ||
													"",
											)
										}))
								)
							},
							ATTR: function (e, t, n) {
								return function (a) {
									var r = oe.attr(a, e)
									return null == r
										? "!=" === t
										: !t ||
												((r += ""),
												"=" === t
													? r === n
													: "!=" === t
													? r !== n
													: "^=" === t
													? n && 0 === r.indexOf(n)
													: "*=" === t
													? n && r.indexOf(n) > -1
													: "$=" === t
													? n && r.slice(-n.length) === n
													: "~=" === t
													? (" " + r.replace(R, " ") + " ").indexOf(n) > -1
													: "|=" === t &&
													  (r === n || r.slice(0, n.length + 1) === n + "-"))
								}
							},
							CHILD: function (e, t, n, a, r) {
								var s = "nth" !== e.slice(0, 3),
									i = "last" !== e.slice(-4),
									o = "of-type" === t
								return 1 === a && 0 === r
									? function (e) {
											return !!e.parentNode
									  }
									: function (t, n, d) {
											var u,
												_,
												l,
												m,
												c,
												h,
												f = s !== i ? "nextSibling" : "previousSibling",
												p = t.parentNode,
												M = o && t.nodeName.toLowerCase(),
												y = !d && !o,
												L = !1
											if (p) {
												if (s) {
													for (; f; ) {
														for (m = t; (m = m[f]); )
															if (
																o
																	? m.nodeName.toLowerCase() === M
																	: 1 === m.nodeType
															)
																return !1
														h = f = "only" === e && !h && "nextSibling"
													}
													return !0
												}
												if (((h = [i ? p.firstChild : p.lastChild]), i && y)) {
													for (
														L =
															(c =
																(u =
																	(_ =
																		(l = (m = p)[Y] || (m[Y] = {}))[
																			m.uniqueID
																		] || (l[m.uniqueID] = {}))[e] || [])[0] ===
																	k && u[1]) && u[2],
															m = c && p.childNodes[c];
														(m = (++c && m && m[f]) || (L = c = 0) || h.pop());

													)
														if (1 === m.nodeType && ++L && m === t) {
															_[e] = [k, c, L]
															break
														}
												} else if (
													(y &&
														(L = c =
															(u =
																(_ =
																	(l = (m = t)[Y] || (m[Y] = {}))[m.uniqueID] ||
																	(l[m.uniqueID] = {}))[e] || [])[0] === k &&
															u[1]),
													!1 === L)
												)
													for (
														;
														(m =
															(++c && m && m[f]) || (L = c = 0) || h.pop()) &&
														((o
															? m.nodeName.toLowerCase() !== M
															: 1 !== m.nodeType) ||
															!++L ||
															(y &&
																((_ =
																	(l = m[Y] || (m[Y] = {}))[m.uniqueID] ||
																	(l[m.uniqueID] = {}))[e] = [k, L]),
															m !== t));

													);
												return (L -= r) === a || (L % a == 0 && L / a >= 0)
											}
									  }
							},
							PSEUDO: function (e, t) {
								var n,
									r =
										a.pseudos[e] ||
										a.setFilters[e.toLowerCase()] ||
										oe.error("unsupported pseudo: " + e)
								return r[Y]
									? r(t)
									: r.length > 1
									? ((n = [e, e, "", t]),
									  a.setFilters.hasOwnProperty(e.toLowerCase())
											? ue(function (e, n) {
													for (var a, s = r(e, t), i = s.length; i--; )
														e[(a = A(e, s[i]))] = !(n[a] = s[i])
											  })
											: function (e) {
													return r(e, 0, n)
											  })
									: r
							},
						},
						pseudos: {
							not: ue(function (e) {
								var t = [],
									n = [],
									a = o(e.replace(I, "$1"))
								return a[Y]
									? ue(function (e, t, n, r) {
											for (var s, i = a(e, null, r, []), o = e.length; o--; )
												(s = i[o]) && (e[o] = !(t[o] = s))
									  })
									: function (e, r, s) {
											return (
												(t[0] = e), a(t, null, s, n), (t[0] = null), !n.pop()
											)
									  }
							}),
							has: ue(function (e) {
								return function (t) {
									return oe(e, t).length > 0
								}
							}),
							contains: ue(function (e) {
								return (
									(e = e.replace(te, ne)),
									function (t) {
										return (t.textContent || r(t)).indexOf(e) > -1
									}
								)
							}),
							lang: ue(function (e) {
								return (
									G.test(e || "") || oe.error("unsupported lang: " + e),
									(e = e.replace(te, ne).toLowerCase()),
									function (t) {
										var n
										do {
											if (
												(n = f
													? t.lang
													: t.getAttribute("xml:lang") ||
													  t.getAttribute("lang"))
											)
												return (
													(n = n.toLowerCase()) === e ||
													0 === n.indexOf(e + "-")
												)
										} while ((t = t.parentNode) && 1 === t.nodeType)
										return !1
									}
								)
							}),
							target: function (t) {
								var n = e.location && e.location.hash
								return n && n.slice(1) === t.id
							},
							root: function (e) {
								return e === h
							},
							focus: function (e) {
								return (
									e === c.activeElement &&
									(!c.hasFocus || c.hasFocus()) &&
									!!(e.type || e.href || ~e.tabIndex)
								)
							},
							enabled: fe(!1),
							disabled: fe(!0),
							checked: function (e) {
								var t = e.nodeName.toLowerCase()
								return (
									("input" === t && !!e.checked) ||
									("option" === t && !!e.selected)
								)
							},
							selected: function (e) {
								return (
									e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
								)
							},
							empty: function (e) {
								for (e = e.firstChild; e; e = e.nextSibling)
									if (e.nodeType < 6) return !1
								return !0
							},
							parent: function (e) {
								return !a.pseudos.empty(e)
							},
							header: function (e) {
								return Z.test(e.nodeName)
							},
							input: function (e) {
								return K.test(e.nodeName)
							},
							button: function (e) {
								var t = e.nodeName.toLowerCase()
								return ("input" === t && "button" === e.type) || "button" === t
							},
							text: function (e) {
								var t
								return (
									"input" === e.nodeName.toLowerCase() &&
									"text" === e.type &&
									(null == (t = e.getAttribute("type")) ||
										"text" === t.toLowerCase())
								)
							},
							first: pe(function () {
								return [0]
							}),
							last: pe(function (e, t) {
								return [t - 1]
							}),
							eq: pe(function (e, t, n) {
								return [n < 0 ? n + t : n]
							}),
							even: pe(function (e, t) {
								for (var n = 0; n < t; n += 2) e.push(n)
								return e
							}),
							odd: pe(function (e, t) {
								for (var n = 1; n < t; n += 2) e.push(n)
								return e
							}),
							lt: pe(function (e, t, n) {
								for (var a = n < 0 ? n + t : n > t ? t : n; --a >= 0; )
									e.push(a)
								return e
							}),
							gt: pe(function (e, t, n) {
								for (var a = n < 0 ? n + t : n; ++a < t; ) e.push(a)
								return e
							}),
						},
					}).pseudos.nth = a.pseudos.eq),
					{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
						a.pseudos[t] = ce(t)
					for (t in { submit: !0, reset: !0 }) a.pseudos[t] = he(t)
					function ye() {}
					function Le(e) {
						for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value
						return a
					}
					function Ye(e, t, n) {
						var a = t.dir,
							r = t.next,
							s = r || a,
							i = n && "parentNode" === s,
							o = D++
						return t.first
							? function (t, n, r) {
									for (; (t = t[a]); )
										if (1 === t.nodeType || i) return e(t, n, r)
									return !1
							  }
							: function (t, n, d) {
									var u,
										_,
										l,
										m = [k, o]
									if (d) {
										for (; (t = t[a]); )
											if ((1 === t.nodeType || i) && e(t, n, d)) return !0
									} else
										for (; (t = t[a]); )
											if (1 === t.nodeType || i)
												if (
													((_ =
														(l = t[Y] || (t[Y] = {}))[t.uniqueID] ||
														(l[t.uniqueID] = {})),
													r && r === t.nodeName.toLowerCase())
												)
													t = t[a] || t
												else {
													if ((u = _[s]) && u[0] === k && u[1] === o)
														return (m[2] = u[2])
													if (((_[s] = m), (m[2] = e(t, n, d)))) return !0
												}
									return !1
							  }
					}
					function ge(e) {
						return e.length > 1
							? function (t, n, a) {
									for (var r = e.length; r--; ) if (!e[r](t, n, a)) return !1
									return !0
							  }
							: e[0]
					}
					function ke(e, t, n, a, r) {
						for (var s, i = [], o = 0, d = e.length, u = null != t; o < d; o++)
							(s = e[o]) && ((n && !n(s, a, r)) || (i.push(s), u && t.push(o)))
						return i
					}
					function De(e, t, n, a, r, s) {
						return (
							a && !a[Y] && (a = De(a)),
							r && !r[Y] && (r = De(r, s)),
							ue(function (s, i, o, d) {
								var u,
									_,
									l,
									m = [],
									c = [],
									h = i.length,
									f =
										s ||
										(function (e, t, n) {
											for (var a = 0, r = t.length; a < r; a++) oe(e, t[a], n)
											return n
										})(t || "*", o.nodeType ? [o] : o, []),
									p = !e || (!s && t) ? f : ke(f, m, e, o, d),
									M = n ? (r || (s ? e : h || a) ? [] : i) : p
								if ((n && n(p, M, o, d), a))
									for (u = ke(M, c), a(u, [], o, d), _ = u.length; _--; )
										(l = u[_]) && (M[c[_]] = !(p[c[_]] = l))
								if (s) {
									if (r || e) {
										if (r) {
											for (u = [], _ = M.length; _--; )
												(l = M[_]) && u.push((p[_] = l))
											r(null, (M = []), u, d)
										}
										for (_ = M.length; _--; )
											(l = M[_]) &&
												(u = r ? A(s, l) : m[_]) > -1 &&
												(s[u] = !(i[u] = l))
									}
								} else (M = ke(M === i ? M.splice(h, M.length) : M)), r ? r(null, i, M, d) : P.apply(i, M)
							})
						)
					}
					function ve(e) {
						for (
							var t,
								n,
								r,
								s = e.length,
								i = a.relative[e[0].type],
								o = i || a.relative[" "],
								d = i ? 1 : 0,
								_ = Ye(
									function (e) {
										return e === t
									},
									o,
									!0,
								),
								l = Ye(
									function (e) {
										return A(t, e) > -1
									},
									o,
									!0,
								),
								m = [
									function (e, n, a) {
										var r =
											(!i && (a || n !== u)) ||
											((t = n).nodeType ? _(e, n, a) : l(e, n, a))
										return (t = null), r
									},
								];
							d < s;
							d++
						)
							if ((n = a.relative[e[d].type])) m = [Ye(ge(m), n)]
							else {
								if ((n = a.filter[e[d].type].apply(null, e[d].matches))[Y]) {
									for (r = ++d; r < s && !a.relative[e[r].type]; r++);
									return De(
										d > 1 && ge(m),
										d > 1 &&
											Le(
												e
													.slice(0, d - 1)
													.concat({ value: " " === e[d - 2].type ? "*" : "" }),
											).replace(I, "$1"),
										n,
										d < r && ve(e.slice(d, r)),
										r < s && ve((e = e.slice(r))),
										r < s && Le(e),
									)
								}
								m.push(n)
							}
						return ge(m)
					}
					return (
						(ye.prototype = a.filters = a.pseudos),
						(a.setFilters = new ye()),
						(i = oe.tokenize = function (e, t) {
							var n,
								r,
								s,
								i,
								o,
								d,
								u,
								_ = T[e + " "]
							if (_) return t ? 0 : _.slice(0)
							for (o = e, d = [], u = a.preFilter; o; ) {
								for (i in ((n && !(r = J.exec(o))) ||
									(r && (o = o.slice(r[0].length) || o), d.push((s = []))),
								(n = !1),
								(r = q.exec(o)) &&
									((n = r.shift()),
									s.push({ value: n, type: r[0].replace(I, " ") }),
									(o = o.slice(n.length))),
								a.filter))
									!(r = V[i].exec(o)) ||
										(u[i] && !(r = u[i](r))) ||
										((n = r.shift()),
										s.push({ value: n, type: i, matches: r }),
										(o = o.slice(n.length)))
								if (!n) break
							}
							return t ? o.length : o ? oe.error(e) : T(e, d).slice(0)
						}),
						(o = oe.compile = function (e, t) {
							var n,
								r = [],
								s = [],
								o = w[e + " "]
							if (!o) {
								for (t || (t = i(e)), n = t.length; n--; )
									(o = ve(t[n]))[Y] ? r.push(o) : s.push(o)
								;(o = w(
									e,
									(function (e, t) {
										var n = t.length > 0,
											r = e.length > 0,
											s = function (s, i, o, d, _) {
												var l,
													h,
													p,
													M = 0,
													y = "0",
													L = s && [],
													Y = [],
													g = u,
													D = s || (r && a.find.TAG("*", _)),
													v = (k += null == g ? 1 : Math.random() || 0.1),
													T = D.length
												for (
													_ && (u = i == c || i || _);
													y !== T && null != (l = D[y]);
													y++
												) {
													if (r && l) {
														for (
															h = 0,
																i || l.ownerDocument == c || (m(l), (o = !f));
															(p = e[h++]);

														)
															if (p(l, i || c, o)) {
																d.push(l)
																break
															}
														_ && (k = v)
													}
													n && ((l = !p && l) && M--, s && L.push(l))
												}
												if (((M += y), n && y !== M)) {
													for (h = 0; (p = t[h++]); ) p(L, Y, i, o)
													if (s) {
														if (M > 0)
															for (; y--; ) L[y] || Y[y] || (Y[y] = j.call(d))
														Y = ke(Y)
													}
													P.apply(d, Y),
														_ &&
															!s &&
															Y.length > 0 &&
															M + t.length > 1 &&
															oe.uniqueSort(d)
												}
												return _ && ((k = v), (u = g)), L
											}
										return n ? ue(s) : s
									})(s, r),
								)).selector = e
							}
							return o
						}),
						(d = oe.select = function (e, t, n, r) {
							var s,
								d,
								u,
								_,
								l,
								m = "function" == typeof e && e,
								c = !r && i((e = m.selector || e))
							if (((n = n || []), 1 === c.length)) {
								if (
									(d = c[0] = c[0].slice(0)).length > 2 &&
									"ID" === (u = d[0]).type &&
									9 === t.nodeType &&
									f &&
									a.relative[d[1].type]
								) {
									if (
										!(t = (a.find.ID(u.matches[0].replace(te, ne), t) || [])[0])
									)
										return n
									m && (t = t.parentNode), (e = e.slice(d.shift().value.length))
								}
								for (
									s = V.needsContext.test(e) ? 0 : d.length;
									s-- && ((u = d[s]), !a.relative[(_ = u.type)]);

								)
									if (
										(l = a.find[_]) &&
										(r = l(
											u.matches[0].replace(te, ne),
											(ee.test(d[0].type) && Me(t.parentNode)) || t,
										))
									) {
										if ((d.splice(s, 1), !(e = r.length && Le(d))))
											return P.apply(n, r), n
										break
									}
							}
							return (
								(m || o(e, c))(
									r,
									t,
									!f,
									n,
									!t || (ee.test(e) && Me(t.parentNode)) || t,
								),
								n
							)
						}),
						(n.sortStable = Y.split("").sort(S).join("") === Y),
						(n.detectDuplicates = !!l),
						m(),
						(n.sortDetached = _e(function (e) {
							return 1 & e.compareDocumentPosition(c.createElement("fieldset"))
						})),
						_e(function (e) {
							return (
								(e.innerHTML = "<a href='#'></a>"),
								"#" === e.firstChild.getAttribute("href")
							)
						}) ||
							le("type|href|height|width", function (e, t, n) {
								if (!n)
									return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
							}),
						(n.attributes &&
							_e(function (e) {
								return (
									(e.innerHTML = "<input/>"),
									e.firstChild.setAttribute("value", ""),
									"" === e.firstChild.getAttribute("value")
								)
							})) ||
							le("value", function (e, t, n) {
								if (!n && "input" === e.nodeName.toLowerCase())
									return e.defaultValue
							}),
						_e(function (e) {
							return null == e.getAttribute("disabled")
						}) ||
							le(W, function (e, t, n) {
								var a
								if (!n)
									return !0 === e[t]
										? t.toLowerCase()
										: (a = e.getAttributeNode(t)) && a.specified
										? a.value
										: null
							}),
						oe
					)
				})(n)
			;(D.find = T),
				(D.expr = T.selectors),
				(D.expr[":"] = D.expr.pseudos),
				(D.uniqueSort = D.unique = T.uniqueSort),
				(D.text = T.getText),
				(D.isXMLDoc = T.isXML),
				(D.contains = T.contains),
				(D.escapeSelector = T.escape)
			var w = function (e, t, n) {
					for (var a = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
						if (1 === e.nodeType) {
							if (r && D(e).is(n)) break
							a.push(e)
						}
					return a
				},
				b = function (e, t) {
					for (var n = []; e; e = e.nextSibling)
						1 === e.nodeType && e !== t && n.push(e)
					return n
				},
				S = D.expr.match.needsContext
			function H(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			}
			var x = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
			function j(e, t, n) {
				return M(t)
					? D.grep(e, function (e, a) {
							return !!t.call(e, a, e) !== n
					  })
					: t.nodeType
					? D.grep(e, function (e) {
							return (e === t) !== n
					  })
					: "string" != typeof t
					? D.grep(e, function (e) {
							return _.call(t, e) > -1 !== n
					  })
					: D.filter(t, e, n)
			}
			;(D.filter = function (e, t, n) {
				var a = t[0]
				return (
					n && (e = ":not(" + e + ")"),
					1 === t.length && 1 === a.nodeType
						? D.find.matchesSelector(a, e)
							? [a]
							: []
						: D.find.matches(
								e,
								D.grep(t, function (e) {
									return 1 === e.nodeType
								}),
						  )
				)
			}),
				D.fn.extend({
					find: function (e) {
						var t,
							n,
							a = this.length,
							r = this
						if ("string" != typeof e)
							return this.pushStack(
								D(e).filter(function () {
									for (t = 0; t < a; t++) if (D.contains(r[t], this)) return !0
								}),
							)
						for (n = this.pushStack([]), t = 0; t < a; t++) D.find(e, r[t], n)
						return a > 1 ? D.uniqueSort(n) : n
					},
					filter: function (e) {
						return this.pushStack(j(this, e || [], !1))
					},
					not: function (e) {
						return this.pushStack(j(this, e || [], !0))
					},
					is: function (e) {
						return !!j(
							this,
							"string" == typeof e && S.test(e) ? D(e) : e || [],
							!1,
						).length
					},
				})
			var O,
				P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
			;((D.fn.init = function (e, t, n) {
				var a, r
				if (!e) return this
				if (((n = n || O), "string" == typeof e)) {
					if (
						!(a =
							"<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
								? [null, e, null]
								: P.exec(e)) ||
						(!a[1] && t)
					)
						return !t || t.jquery
							? (t || n).find(e)
							: this.constructor(t).find(e)
					if (a[1]) {
						if (
							((t = t instanceof D ? t[0] : t),
							D.merge(
								this,
								D.parseHTML(
									a[1],
									t && t.nodeType ? t.ownerDocument || t : L,
									!0,
								),
							),
							x.test(a[1]) && D.isPlainObject(t))
						)
							for (a in t) M(this[a]) ? this[a](t[a]) : this.attr(a, t[a])
						return this
					}
					return (
						(r = L.getElementById(a[2])) && ((this[0] = r), (this.length = 1)),
						this
					)
				}
				return e.nodeType
					? ((this[0] = e), (this.length = 1), this)
					: M(e)
					? void 0 !== n.ready
						? n.ready(e)
						: e(D)
					: D.makeArray(e, this)
			}).prototype = D.fn),
				(O = D(L))
			var E = /^(?:parents|prev(?:Until|All))/,
				A = { children: !0, contents: !0, next: !0, prev: !0 }
			function W(e, t) {
				for (; (e = e[t]) && 1 !== e.nodeType; );
				return e
			}
			D.fn.extend({
				has: function (e) {
					var t = D(e, this),
						n = t.length
					return this.filter(function () {
						for (var e = 0; e < n; e++) if (D.contains(this, t[e])) return !0
					})
				},
				closest: function (e, t) {
					var n,
						a = 0,
						r = this.length,
						s = [],
						i = "string" != typeof e && D(e)
					if (!S.test(e))
						for (; a < r; a++)
							for (n = this[a]; n && n !== t; n = n.parentNode)
								if (
									n.nodeType < 11 &&
									(i
										? i.index(n) > -1
										: 1 === n.nodeType && D.find.matchesSelector(n, e))
								) {
									s.push(n)
									break
								}
					return this.pushStack(s.length > 1 ? D.uniqueSort(s) : s)
				},
				index: function (e) {
					return e
						? "string" == typeof e
							? _.call(D(e), this[0])
							: _.call(this, e.jquery ? e[0] : e)
						: this[0] && this[0].parentNode
						? this.first().prevAll().length
						: -1
				},
				add: function (e, t) {
					return this.pushStack(D.uniqueSort(D.merge(this.get(), D(e, t))))
				},
				addBack: function (e) {
					return this.add(
						null == e ? this.prevObject : this.prevObject.filter(e),
					)
				},
			}),
				D.each(
					{
						parent: function (e) {
							var t = e.parentNode
							return t && 11 !== t.nodeType ? t : null
						},
						parents: function (e) {
							return w(e, "parentNode")
						},
						parentsUntil: function (e, t, n) {
							return w(e, "parentNode", n)
						},
						next: function (e) {
							return W(e, "nextSibling")
						},
						prev: function (e) {
							return W(e, "previousSibling")
						},
						nextAll: function (e) {
							return w(e, "nextSibling")
						},
						prevAll: function (e) {
							return w(e, "previousSibling")
						},
						nextUntil: function (e, t, n) {
							return w(e, "nextSibling", n)
						},
						prevUntil: function (e, t, n) {
							return w(e, "previousSibling", n)
						},
						siblings: function (e) {
							return b((e.parentNode || {}).firstChild, e)
						},
						children: function (e) {
							return b(e.firstChild)
						},
						contents: function (e) {
							return null != e.contentDocument && i(e.contentDocument)
								? e.contentDocument
								: (H(e, "template") && (e = e.content || e),
								  D.merge([], e.childNodes))
						},
					},
					function (e, t) {
						D.fn[e] = function (n, a) {
							var r = D.map(this, t, n)
							return (
								"Until" !== e.slice(-5) && (a = n),
								a && "string" == typeof a && (r = D.filter(a, r)),
								this.length > 1 &&
									(A[e] || D.uniqueSort(r), E.test(e) && r.reverse()),
								this.pushStack(r)
							)
						}
					},
				)
			var N = /[^\x20\t\r\n\f]+/g
			function C(e) {
				return e
			}
			function F(e) {
				throw e
			}
			function z(e, t, n, a) {
				var r
				try {
					e && M((r = e.promise))
						? r.call(e).done(t).fail(n)
						: e && M((r = e.then))
						? r.call(e, t, n)
						: t.apply(void 0, [e].slice(a))
				} catch (e) {
					n.apply(void 0, [e])
				}
			}
			;(D.Callbacks = function (e) {
				e =
					"string" == typeof e
						? (function (e) {
								var t = {}
								return (
									D.each(e.match(N) || [], function (e, n) {
										t[n] = !0
									}),
									t
								)
						  })(e)
						: D.extend({}, e)
				var t,
					n,
					a,
					r,
					s = [],
					i = [],
					o = -1,
					d = function () {
						for (r = r || e.once, a = t = !0; i.length; o = -1)
							for (n = i.shift(); ++o < s.length; )
								!1 === s[o].apply(n[0], n[1]) &&
									e.stopOnFalse &&
									((o = s.length), (n = !1))
						e.memory || (n = !1), (t = !1), r && (s = n ? [] : "")
					},
					u = {
						add: function () {
							return (
								s &&
									(n && !t && ((o = s.length - 1), i.push(n)),
									(function t(n) {
										D.each(n, function (n, a) {
											M(a)
												? (e.unique && u.has(a)) || s.push(a)
												: a && a.length && "string" !== k(a) && t(a)
										})
									})(arguments),
									n && !t && d()),
								this
							)
						},
						remove: function () {
							return (
								D.each(arguments, function (e, t) {
									for (var n; (n = D.inArray(t, s, n)) > -1; )
										s.splice(n, 1), n <= o && o--
								}),
								this
							)
						},
						has: function (e) {
							return e ? D.inArray(e, s) > -1 : s.length > 0
						},
						empty: function () {
							return s && (s = []), this
						},
						disable: function () {
							return (r = i = []), (s = n = ""), this
						},
						disabled: function () {
							return !s
						},
						lock: function () {
							return (r = i = []), n || t || (s = n = ""), this
						},
						locked: function () {
							return !!r
						},
						fireWith: function (e, n) {
							return (
								r ||
									((n = [e, (n = n || []).slice ? n.slice() : n]),
									i.push(n),
									t || d()),
								this
							)
						},
						fire: function () {
							return u.fireWith(this, arguments), this
						},
						fired: function () {
							return !!a
						},
					}
				return u
			}),
				D.extend({
					Deferred: function (e) {
						var t = [
								[
									"notify",
									"progress",
									D.Callbacks("memory"),
									D.Callbacks("memory"),
									2,
								],
								[
									"resolve",
									"done",
									D.Callbacks("once memory"),
									D.Callbacks("once memory"),
									0,
									"resolved",
								],
								[
									"reject",
									"fail",
									D.Callbacks("once memory"),
									D.Callbacks("once memory"),
									1,
									"rejected",
								],
							],
							a = "pending",
							r = {
								state: function () {
									return a
								},
								always: function () {
									return s.done(arguments).fail(arguments), this
								},
								catch: function (e) {
									return r.then(null, e)
								},
								pipe: function () {
									var e = arguments
									return D.Deferred(function (n) {
										D.each(t, function (t, a) {
											var r = M(e[a[4]]) && e[a[4]]
											s[a[1]](function () {
												var e = r && r.apply(this, arguments)
												e && M(e.promise)
													? e
															.promise()
															.progress(n.notify)
															.done(n.resolve)
															.fail(n.reject)
													: n[a[0] + "With"](this, r ? [e] : arguments)
											})
										}),
											(e = null)
									}).promise()
								},
								then: function (e, a, r) {
									var s = 0
									function i(e, t, a, r) {
										return function () {
											var o = this,
												d = arguments,
												u = function () {
													var n, u
													if (!(e < s)) {
														if ((n = a.apply(o, d)) === t.promise())
															throw new TypeError("Thenable self-resolution")
														;(u =
															n &&
															("object" == typeof n ||
																"function" == typeof n) &&
															n.then),
															M(u)
																? r
																	? u.call(n, i(s, t, C, r), i(s, t, F, r))
																	: (s++,
																	  u.call(
																			n,
																			i(s, t, C, r),
																			i(s, t, F, r),
																			i(s, t, C, t.notifyWith),
																	  ))
																: (a !== C && ((o = void 0), (d = [n])),
																  (r || t.resolveWith)(o, d))
													}
												},
												_ = r
													? u
													: function () {
															try {
																u()
															} catch (n) {
																D.Deferred.exceptionHook &&
																	D.Deferred.exceptionHook(n, _.stackTrace),
																	e + 1 >= s &&
																		(a !== F && ((o = void 0), (d = [n])),
																		t.rejectWith(o, d))
															}
													  }
											e
												? _()
												: (D.Deferred.getStackHook &&
														(_.stackTrace = D.Deferred.getStackHook()),
												  n.setTimeout(_))
										}
									}
									return D.Deferred(function (n) {
										t[0][3].add(i(0, n, M(r) ? r : C, n.notifyWith)),
											t[1][3].add(i(0, n, M(e) ? e : C)),
											t[2][3].add(i(0, n, M(a) ? a : F))
									}).promise()
								},
								promise: function (e) {
									return null != e ? D.extend(e, r) : r
								},
							},
							s = {}
						return (
							D.each(t, function (e, n) {
								var i = n[2],
									o = n[5]
								;(r[n[1]] = i.add),
									o &&
										i.add(
											function () {
												a = o
											},
											t[3 - e][2].disable,
											t[3 - e][3].disable,
											t[0][2].lock,
											t[0][3].lock,
										),
									i.add(n[3].fire),
									(s[n[0]] = function () {
										return (
											s[n[0] + "With"](this === s ? void 0 : this, arguments),
											this
										)
									}),
									(s[n[0] + "With"] = i.fireWith)
							}),
							r.promise(s),
							e && e.call(s, s),
							s
						)
					},
					when: function (e) {
						var t = arguments.length,
							n = t,
							a = Array(n),
							r = o.call(arguments),
							s = D.Deferred(),
							i = function (e) {
								return function (n) {
									;(a[e] = this),
										(r[e] = arguments.length > 1 ? o.call(arguments) : n),
										--t || s.resolveWith(a, r)
								}
							}
						if (
							t <= 1 &&
							(z(e, s.done(i(n)).resolve, s.reject, !t),
							"pending" === s.state() || M(r[n] && r[n].then))
						)
							return s.then()
						for (; n--; ) z(r[n], i(n), s.reject)
						return s.promise()
					},
				})
			var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
			;(D.Deferred.exceptionHook = function (e, t) {
				n.console &&
					n.console.warn &&
					e &&
					R.test(e.name) &&
					n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
			}),
				(D.readyException = function (e) {
					n.setTimeout(function () {
						throw e
					})
				})
			var I = D.Deferred()
			function J() {
				L.removeEventListener("DOMContentLoaded", J),
					n.removeEventListener("load", J),
					D.ready()
			}
			;(D.fn.ready = function (e) {
				return (
					I.then(e).catch(function (e) {
						D.readyException(e)
					}),
					this
				)
			}),
				D.extend({
					isReady: !1,
					readyWait: 1,
					ready: function (e) {
						;(!0 === e ? --D.readyWait : D.isReady) ||
							((D.isReady = !0),
							(!0 !== e && --D.readyWait > 0) || I.resolveWith(L, [D]))
					},
				}),
				(D.ready.then = I.then),
				"complete" === L.readyState ||
				("loading" !== L.readyState && !L.documentElement.doScroll)
					? n.setTimeout(D.ready)
					: (L.addEventListener("DOMContentLoaded", J),
					  n.addEventListener("load", J))
			var q = function (e, t, n, a, r, s, i) {
					var o = 0,
						d = e.length,
						u = null == n
					if ("object" === k(n))
						for (o in ((r = !0), n)) q(e, t, o, n[o], !0, s, i)
					else if (
						void 0 !== a &&
						((r = !0),
						M(a) || (i = !0),
						u &&
							(i
								? (t.call(e, a), (t = null))
								: ((u = t),
								  (t = function (e, t, n) {
										return u.call(D(e), n)
								  }))),
						t)
					)
						for (; o < d; o++) t(e[o], n, i ? a : a.call(e[o], o, t(e[o], n)))
					return r ? e : u ? t.call(e) : d ? t(e[0], n) : s
				},
				U = /^-ms-/,
				B = /-([a-z])/g
			function G(e, t) {
				return t.toUpperCase()
			}
			function V(e) {
				return e.replace(U, "ms-").replace(B, G)
			}
			var $ = function (e) {
				return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
			}
			function K() {
				this.expando = D.expando + K.uid++
			}
			;(K.uid = 1),
				(K.prototype = {
					cache: function (e) {
						var t = e[this.expando]
						return (
							t ||
								((t = {}),
								$(e) &&
									(e.nodeType
										? (e[this.expando] = t)
										: Object.defineProperty(e, this.expando, {
												value: t,
												configurable: !0,
										  }))),
							t
						)
					},
					set: function (e, t, n) {
						var a,
							r = this.cache(e)
						if ("string" == typeof t) r[V(t)] = n
						else for (a in t) r[V(a)] = t[a]
						return r
					},
					get: function (e, t) {
						return void 0 === t
							? this.cache(e)
							: e[this.expando] && e[this.expando][V(t)]
					},
					access: function (e, t, n) {
						return void 0 === t || (t && "string" == typeof t && void 0 === n)
							? this.get(e, t)
							: (this.set(e, t, n), void 0 !== n ? n : t)
					},
					remove: function (e, t) {
						var n,
							a = e[this.expando]
						if (void 0 !== a) {
							if (void 0 !== t) {
								n = (t = Array.isArray(t)
									? t.map(V)
									: (t = V(t)) in a
									? [t]
									: t.match(N) || []).length
								for (; n--; ) delete a[t[n]]
							}
							;(void 0 === t || D.isEmptyObject(a)) &&
								(e.nodeType
									? (e[this.expando] = void 0)
									: delete e[this.expando])
						}
					},
					hasData: function (e) {
						var t = e[this.expando]
						return void 0 !== t && !D.isEmptyObject(t)
					},
				})
			var Z = new K(),
				X = new K(),
				Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
				ee = /[A-Z]/g
			function te(e, t, n) {
				var a
				if (void 0 === n && 1 === e.nodeType)
					if (
						((a = "data-" + t.replace(ee, "-$&").toLowerCase()),
						"string" == typeof (n = e.getAttribute(a)))
					) {
						try {
							n = (function (e) {
								return (
									"true" === e ||
									("false" !== e &&
										("null" === e
											? null
											: e === +e + ""
											? +e
											: Q.test(e)
											? JSON.parse(e)
											: e))
								)
							})(n)
						} catch (e) {}
						X.set(e, t, n)
					} else n = void 0
				return n
			}
			D.extend({
				hasData: function (e) {
					return X.hasData(e) || Z.hasData(e)
				},
				data: function (e, t, n) {
					return X.access(e, t, n)
				},
				removeData: function (e, t) {
					X.remove(e, t)
				},
				_data: function (e, t, n) {
					return Z.access(e, t, n)
				},
				_removeData: function (e, t) {
					Z.remove(e, t)
				},
			}),
				D.fn.extend({
					data: function (e, t) {
						var n,
							a,
							r,
							s = this[0],
							i = s && s.attributes
						if (void 0 === e) {
							if (
								this.length &&
								((r = X.get(s)), 1 === s.nodeType && !Z.get(s, "hasDataAttrs"))
							) {
								for (n = i.length; n--; )
									i[n] &&
										0 === (a = i[n].name).indexOf("data-") &&
										((a = V(a.slice(5))), te(s, a, r[a]))
								Z.set(s, "hasDataAttrs", !0)
							}
							return r
						}
						return "object" == typeof e
							? this.each(function () {
									X.set(this, e)
							  })
							: q(
									this,
									function (t) {
										var n
										if (s && void 0 === t)
											return void 0 !== (n = X.get(s, e)) ||
												void 0 !== (n = te(s, e))
												? n
												: void 0
										this.each(function () {
											X.set(this, e, t)
										})
									},
									null,
									t,
									arguments.length > 1,
									null,
									!0,
							  )
					},
					removeData: function (e) {
						return this.each(function () {
							X.remove(this, e)
						})
					},
				}),
				D.extend({
					queue: function (e, t, n) {
						var a
						if (e)
							return (
								(t = (t || "fx") + "queue"),
								(a = Z.get(e, t)),
								n &&
									(!a || Array.isArray(n)
										? (a = Z.access(e, t, D.makeArray(n)))
										: a.push(n)),
								a || []
							)
					},
					dequeue: function (e, t) {
						t = t || "fx"
						var n = D.queue(e, t),
							a = n.length,
							r = n.shift(),
							s = D._queueHooks(e, t)
						"inprogress" === r && ((r = n.shift()), a--),
							r &&
								("fx" === t && n.unshift("inprogress"),
								delete s.stop,
								r.call(
									e,
									function () {
										D.dequeue(e, t)
									},
									s,
								)),
							!a && s && s.empty.fire()
					},
					_queueHooks: function (e, t) {
						var n = t + "queueHooks"
						return (
							Z.get(e, n) ||
							Z.access(e, n, {
								empty: D.Callbacks("once memory").add(function () {
									Z.remove(e, [t + "queue", n])
								}),
							})
						)
					},
				}),
				D.fn.extend({
					queue: function (e, t) {
						var n = 2
						return (
							"string" != typeof e && ((t = e), (e = "fx"), n--),
							arguments.length < n
								? D.queue(this[0], e)
								: void 0 === t
								? this
								: this.each(function () {
										var n = D.queue(this, e, t)
										D._queueHooks(this, e),
											"fx" === e && "inprogress" !== n[0] && D.dequeue(this, e)
								  })
						)
					},
					dequeue: function (e) {
						return this.each(function () {
							D.dequeue(this, e)
						})
					},
					clearQueue: function (e) {
						return this.queue(e || "fx", [])
					},
					promise: function (e, t) {
						var n,
							a = 1,
							r = D.Deferred(),
							s = this,
							i = this.length,
							o = function () {
								--a || r.resolveWith(s, [s])
							}
						for (
							"string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
							i--;

						)
							(n = Z.get(s[i], e + "queueHooks")) &&
								n.empty &&
								(a++, n.empty.add(o))
						return o(), r.promise(t)
					},
				})
			var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
				ae = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
				re = ["Top", "Right", "Bottom", "Left"],
				se = L.documentElement,
				ie = function (e) {
					return D.contains(e.ownerDocument, e)
				},
				oe = { composed: !0 }
			se.getRootNode &&
				(ie = function (e) {
					return (
						D.contains(e.ownerDocument, e) ||
						e.getRootNode(oe) === e.ownerDocument
					)
				})
			var de = function (e, t) {
				return (
					"none" === (e = t || e).style.display ||
					("" === e.style.display && ie(e) && "none" === D.css(e, "display"))
				)
			}
			function ue(e, t, n, a) {
				var r,
					s,
					i = 20,
					o = a
						? function () {
								return a.cur()
						  }
						: function () {
								return D.css(e, t, "")
						  },
					d = o(),
					u = (n && n[3]) || (D.cssNumber[t] ? "" : "px"),
					_ =
						e.nodeType &&
						(D.cssNumber[t] || ("px" !== u && +d)) &&
						ae.exec(D.css(e, t))
				if (_ && _[3] !== u) {
					for (d /= 2, u = u || _[3], _ = +d || 1; i--; )
						D.style(e, t, _ + u),
							(1 - s) * (1 - (s = o() / d || 0.5)) <= 0 && (i = 0),
							(_ /= s)
					;(_ *= 2), D.style(e, t, _ + u), (n = n || [])
				}
				return (
					n &&
						((_ = +_ || +d || 0),
						(r = n[1] ? _ + (n[1] + 1) * n[2] : +n[2]),
						a && ((a.unit = u), (a.start = _), (a.end = r))),
					r
				)
			}
			var _e = {}
			function le(e) {
				var t,
					n = e.ownerDocument,
					a = e.nodeName,
					r = _e[a]
				return (
					r ||
					((t = n.body.appendChild(n.createElement(a))),
					(r = D.css(t, "display")),
					t.parentNode.removeChild(t),
					"none" === r && (r = "block"),
					(_e[a] = r),
					r)
				)
			}
			function me(e, t) {
				for (var n, a, r = [], s = 0, i = e.length; s < i; s++)
					(a = e[s]).style &&
						((n = a.style.display),
						t
							? ("none" === n &&
									((r[s] = Z.get(a, "display") || null),
									r[s] || (a.style.display = "")),
							  "" === a.style.display && de(a) && (r[s] = le(a)))
							: "none" !== n && ((r[s] = "none"), Z.set(a, "display", n)))
				for (s = 0; s < i; s++) null != r[s] && (e[s].style.display = r[s])
				return e
			}
			D.fn.extend({
				show: function () {
					return me(this, !0)
				},
				hide: function () {
					return me(this)
				},
				toggle: function (e) {
					return "boolean" == typeof e
						? e
							? this.show()
							: this.hide()
						: this.each(function () {
								de(this) ? D(this).show() : D(this).hide()
						  })
				},
			})
			var ce,
				he,
				fe = /^(?:checkbox|radio)$/i,
				pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
				Me = /^$|^module$|\/(?:java|ecma)script/i
			;(ce = L.createDocumentFragment().appendChild(L.createElement("div"))),
				(he = L.createElement("input")).setAttribute("type", "radio"),
				he.setAttribute("checked", "checked"),
				he.setAttribute("name", "t"),
				ce.appendChild(he),
				(p.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
				(ce.innerHTML = "<textarea>x</textarea>"),
				(p.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
				(ce.innerHTML = "<option></option>"),
				(p.option = !!ce.lastChild)
			var ye = {
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""],
			}
			function Le(e, t) {
				var n
				return (
					(n =
						void 0 !== e.getElementsByTagName
							? e.getElementsByTagName(t || "*")
							: void 0 !== e.querySelectorAll
							? e.querySelectorAll(t || "*")
							: []),
					void 0 === t || (t && H(e, t)) ? D.merge([e], n) : n
				)
			}
			function Ye(e, t) {
				for (var n = 0, a = e.length; n < a; n++)
					Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
			}
			;(ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
				(ye.th = ye.td),
				p.option ||
					(ye.optgroup = ye.option = [
						1,
						"<select multiple='multiple'>",
						"</select>",
					])
			var ge = /<|&#?\w+;/
			function ke(e, t, n, a, r) {
				for (
					var s,
						i,
						o,
						d,
						u,
						_,
						l = t.createDocumentFragment(),
						m = [],
						c = 0,
						h = e.length;
					c < h;
					c++
				)
					if ((s = e[c]) || 0 === s)
						if ("object" === k(s)) D.merge(m, s.nodeType ? [s] : s)
						else if (ge.test(s)) {
							for (
								i = i || l.appendChild(t.createElement("div")),
									o = (pe.exec(s) || ["", ""])[1].toLowerCase(),
									d = ye[o] || ye._default,
									i.innerHTML = d[1] + D.htmlPrefilter(s) + d[2],
									_ = d[0];
								_--;

							)
								i = i.lastChild
							D.merge(m, i.childNodes), ((i = l.firstChild).textContent = "")
						} else m.push(t.createTextNode(s))
				for (l.textContent = "", c = 0; (s = m[c++]); )
					if (a && D.inArray(s, a) > -1) r && r.push(s)
					else if (
						((u = ie(s)), (i = Le(l.appendChild(s), "script")), u && Ye(i), n)
					)
						for (_ = 0; (s = i[_++]); ) Me.test(s.type || "") && n.push(s)
				return l
			}
			var De = /^key/,
				ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
				Te = /^([^.]*)(?:\.(.+)|)/
			function we() {
				return !0
			}
			function be() {
				return !1
			}
			function Se(e, t) {
				return (
					(e ===
						(function () {
							try {
								return L.activeElement
							} catch (e) {}
						})()) ==
					("focus" === t)
				)
			}
			function He(e, t, n, a, r, s) {
				var i, o
				if ("object" == typeof t) {
					for (o in ("string" != typeof n && ((a = a || n), (n = void 0)), t))
						He(e, o, n, a, t[o], s)
					return e
				}
				if (
					(null == a && null == r
						? ((r = n), (a = n = void 0))
						: null == r &&
						  ("string" == typeof n
								? ((r = a), (a = void 0))
								: ((r = a), (a = n), (n = void 0))),
					!1 === r)
				)
					r = be
				else if (!r) return e
				return (
					1 === s &&
						((i = r),
						((r = function (e) {
							return D().off(e), i.apply(this, arguments)
						}).guid = i.guid || (i.guid = D.guid++))),
					e.each(function () {
						D.event.add(this, t, r, a, n)
					})
				)
			}
			function xe(e, t, n) {
				n
					? (Z.set(e, t, !1),
					  D.event.add(e, t, {
							namespace: !1,
							handler: function (e) {
								var a,
									r,
									s = Z.get(this, t)
								if (1 & e.isTrigger && this[t]) {
									if (s.length)
										(D.event.special[t] || {}).delegateType &&
											e.stopPropagation()
									else if (
										((s = o.call(arguments)),
										Z.set(this, t, s),
										(a = n(this, t)),
										this[t](),
										s !== (r = Z.get(this, t)) || a
											? Z.set(this, t, !1)
											: (r = {}),
										s !== r)
									)
										return (
											e.stopImmediatePropagation(), e.preventDefault(), r.value
										)
								} else
									s.length &&
										(Z.set(this, t, {
											value: D.event.trigger(
												D.extend(s[0], D.Event.prototype),
												s.slice(1),
												this,
											),
										}),
										e.stopImmediatePropagation())
							},
					  }))
					: void 0 === Z.get(e, t) && D.event.add(e, t, we)
			}
			;(D.event = {
				global: {},
				add: function (e, t, n, a, r) {
					var s,
						i,
						o,
						d,
						u,
						_,
						l,
						m,
						c,
						h,
						f,
						p = Z.get(e)
					if ($(e))
						for (
							n.handler && ((n = (s = n).handler), (r = s.selector)),
								r && D.find.matchesSelector(se, r),
								n.guid || (n.guid = D.guid++),
								(d = p.events) || (d = p.events = Object.create(null)),
								(i = p.handle) ||
									(i = p.handle = function (t) {
										return void 0 !== D && D.event.triggered !== t.type
											? D.event.dispatch.apply(e, arguments)
											: void 0
									}),
								u = (t = (t || "").match(N) || [""]).length;
							u--;

						)
							(c = f = (o = Te.exec(t[u]) || [])[1]),
								(h = (o[2] || "").split(".").sort()),
								c &&
									((l = D.event.special[c] || {}),
									(c = (r ? l.delegateType : l.bindType) || c),
									(l = D.event.special[c] || {}),
									(_ = D.extend(
										{
											type: c,
											origType: f,
											data: a,
											handler: n,
											guid: n.guid,
											selector: r,
											needsContext: r && D.expr.match.needsContext.test(r),
											namespace: h.join("."),
										},
										s,
									)),
									(m = d[c]) ||
										(((m = d[c] = []).delegateCount = 0),
										(l.setup && !1 !== l.setup.call(e, a, h, i)) ||
											(e.addEventListener && e.addEventListener(c, i))),
									l.add &&
										(l.add.call(e, _),
										_.handler.guid || (_.handler.guid = n.guid)),
									r ? m.splice(m.delegateCount++, 0, _) : m.push(_),
									(D.event.global[c] = !0))
				},
				remove: function (e, t, n, a, r) {
					var s,
						i,
						o,
						d,
						u,
						_,
						l,
						m,
						c,
						h,
						f,
						p = Z.hasData(e) && Z.get(e)
					if (p && (d = p.events)) {
						for (u = (t = (t || "").match(N) || [""]).length; u--; )
							if (
								((c = f = (o = Te.exec(t[u]) || [])[1]),
								(h = (o[2] || "").split(".").sort()),
								c)
							) {
								for (
									l = D.event.special[c] || {},
										m = d[(c = (a ? l.delegateType : l.bindType) || c)] || [],
										o =
											o[2] &&
											new RegExp(
												"(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)",
											),
										i = s = m.length;
									s--;

								)
									(_ = m[s]),
										(!r && f !== _.origType) ||
											(n && n.guid !== _.guid) ||
											(o && !o.test(_.namespace)) ||
											(a && a !== _.selector && ("**" !== a || !_.selector)) ||
											(m.splice(s, 1),
											_.selector && m.delegateCount--,
											l.remove && l.remove.call(e, _))
								i &&
									!m.length &&
									((l.teardown && !1 !== l.teardown.call(e, h, p.handle)) ||
										D.removeEvent(e, c, p.handle),
									delete d[c])
							} else for (c in d) D.event.remove(e, c + t[u], n, a, !0)
						D.isEmptyObject(d) && Z.remove(e, "handle events")
					}
				},
				dispatch: function (e) {
					var t,
						n,
						a,
						r,
						s,
						i,
						o = new Array(arguments.length),
						d = D.event.fix(e),
						u = (Z.get(this, "events") || Object.create(null))[d.type] || [],
						_ = D.event.special[d.type] || {}
					for (o[0] = d, t = 1; t < arguments.length; t++) o[t] = arguments[t]
					if (
						((d.delegateTarget = this),
						!_.preDispatch || !1 !== _.preDispatch.call(this, d))
					) {
						for (
							i = D.event.handlers.call(this, d, u), t = 0;
							(r = i[t++]) && !d.isPropagationStopped();

						)
							for (
								d.currentTarget = r.elem, n = 0;
								(s = r.handlers[n++]) && !d.isImmediatePropagationStopped();

							)
								(d.rnamespace &&
									!1 !== s.namespace &&
									!d.rnamespace.test(s.namespace)) ||
									((d.handleObj = s),
									(d.data = s.data),
									void 0 !==
										(a = (
											(D.event.special[s.origType] || {}).handle || s.handler
										).apply(r.elem, o)) &&
										!1 === (d.result = a) &&
										(d.preventDefault(), d.stopPropagation()))
						return _.postDispatch && _.postDispatch.call(this, d), d.result
					}
				},
				handlers: function (e, t) {
					var n,
						a,
						r,
						s,
						i,
						o = [],
						d = t.delegateCount,
						u = e.target
					if (d && u.nodeType && !("click" === e.type && e.button >= 1))
						for (; u !== this; u = u.parentNode || this)
							if (
								1 === u.nodeType &&
								("click" !== e.type || !0 !== u.disabled)
							) {
								for (s = [], i = {}, n = 0; n < d; n++)
									void 0 === i[(r = (a = t[n]).selector + " ")] &&
										(i[r] = a.needsContext
											? D(r, this).index(u) > -1
											: D.find(r, this, null, [u]).length),
										i[r] && s.push(a)
								s.length && o.push({ elem: u, handlers: s })
							}
					return (
						(u = this),
						d < t.length && o.push({ elem: u, handlers: t.slice(d) }),
						o
					)
				},
				addProp: function (e, t) {
					Object.defineProperty(D.Event.prototype, e, {
						enumerable: !0,
						configurable: !0,
						get: M(t)
							? function () {
									if (this.originalEvent) return t(this.originalEvent)
							  }
							: function () {
									if (this.originalEvent) return this.originalEvent[e]
							  },
						set: function (t) {
							Object.defineProperty(this, e, {
								enumerable: !0,
								configurable: !0,
								writable: !0,
								value: t,
							})
						},
					})
				},
				fix: function (e) {
					return e[D.expando] ? e : new D.Event(e)
				},
				special: {
					load: { noBubble: !0 },
					click: {
						setup: function (e) {
							var t = this || e
							return (
								fe.test(t.type) &&
									t.click &&
									H(t, "input") &&
									xe(t, "click", we),
								!1
							)
						},
						trigger: function (e) {
							var t = this || e
							return (
								fe.test(t.type) && t.click && H(t, "input") && xe(t, "click"),
								!0
							)
						},
						_default: function (e) {
							var t = e.target
							return (
								(fe.test(t.type) &&
									t.click &&
									H(t, "input") &&
									Z.get(t, "click")) ||
								H(t, "a")
							)
						},
					},
					beforeunload: {
						postDispatch: function (e) {
							void 0 !== e.result &&
								e.originalEvent &&
								(e.originalEvent.returnValue = e.result)
						},
					},
				},
			}),
				(D.removeEvent = function (e, t, n) {
					e.removeEventListener && e.removeEventListener(t, n)
				}),
				(D.Event = function (e, t) {
					if (!(this instanceof D.Event)) return new D.Event(e, t)
					e && e.type
						? ((this.originalEvent = e),
						  (this.type = e.type),
						  (this.isDefaultPrevented =
								e.defaultPrevented ||
								(void 0 === e.defaultPrevented && !1 === e.returnValue)
									? we
									: be),
						  (this.target =
								e.target && 3 === e.target.nodeType
									? e.target.parentNode
									: e.target),
						  (this.currentTarget = e.currentTarget),
						  (this.relatedTarget = e.relatedTarget))
						: (this.type = e),
						t && D.extend(this, t),
						(this.timeStamp = (e && e.timeStamp) || Date.now()),
						(this[D.expando] = !0)
				}),
				(D.Event.prototype = {
					constructor: D.Event,
					isDefaultPrevented: be,
					isPropagationStopped: be,
					isImmediatePropagationStopped: be,
					isSimulated: !1,
					preventDefault: function () {
						var e = this.originalEvent
						;(this.isDefaultPrevented = we),
							e && !this.isSimulated && e.preventDefault()
					},
					stopPropagation: function () {
						var e = this.originalEvent
						;(this.isPropagationStopped = we),
							e && !this.isSimulated && e.stopPropagation()
					},
					stopImmediatePropagation: function () {
						var e = this.originalEvent
						;(this.isImmediatePropagationStopped = we),
							e && !this.isSimulated && e.stopImmediatePropagation(),
							this.stopPropagation()
					},
				}),
				D.each(
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
							var t = e.button
							return null == e.which && De.test(e.type)
								? null != e.charCode
									? e.charCode
									: e.keyCode
								: !e.which && void 0 !== t && ve.test(e.type)
								? 1 & t
									? 1
									: 2 & t
									? 3
									: 4 & t
									? 2
									: 0
								: e.which
						},
					},
					D.event.addProp,
				),
				D.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
					D.event.special[e] = {
						setup: function () {
							return xe(this, e, Se), !1
						},
						trigger: function () {
							return xe(this, e), !0
						},
						delegateType: t,
					}
				}),
				D.each(
					{
						mouseenter: "mouseover",
						mouseleave: "mouseout",
						pointerenter: "pointerover",
						pointerleave: "pointerout",
					},
					function (e, t) {
						D.event.special[e] = {
							delegateType: t,
							bindType: t,
							handle: function (e) {
								var n,
									a = this,
									r = e.relatedTarget,
									s = e.handleObj
								return (
									(r && (r === a || D.contains(a, r))) ||
										((e.type = s.origType),
										(n = s.handler.apply(this, arguments)),
										(e.type = t)),
									n
								)
							},
						}
					},
				),
				D.fn.extend({
					on: function (e, t, n, a) {
						return He(this, e, t, n, a)
					},
					one: function (e, t, n, a) {
						return He(this, e, t, n, a, 1)
					},
					off: function (e, t, n) {
						var a, r
						if (e && e.preventDefault && e.handleObj)
							return (
								(a = e.handleObj),
								D(e.delegateTarget).off(
									a.namespace ? a.origType + "." + a.namespace : a.origType,
									a.selector,
									a.handler,
								),
								this
							)
						if ("object" == typeof e) {
							for (r in e) this.off(r, t, e[r])
							return this
						}
						return (
							(!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
							!1 === n && (n = be),
							this.each(function () {
								D.event.remove(this, e, n, t)
							})
						)
					},
				})
			var je = /<script|<style|<link/i,
				Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
				Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
			function Ee(e, t) {
				return (
					(H(e, "table") &&
						H(11 !== t.nodeType ? t : t.firstChild, "tr") &&
						D(e).children("tbody")[0]) ||
					e
				)
			}
			function Ae(e) {
				return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
			}
			function We(e) {
				return (
					"true/" === (e.type || "").slice(0, 5)
						? (e.type = e.type.slice(5))
						: e.removeAttribute("type"),
					e
				)
			}
			function Ne(e, t) {
				var n, a, r, s, i, o
				if (1 === t.nodeType) {
					if (Z.hasData(e) && (o = Z.get(e).events))
						for (r in (Z.remove(t, "handle events"), o))
							for (n = 0, a = o[r].length; n < a; n++)
								D.event.add(t, r, o[r][n])
					X.hasData(e) &&
						((s = X.access(e)), (i = D.extend({}, s)), X.set(t, i))
				}
			}
			function Ce(e, t) {
				var n = t.nodeName.toLowerCase()
				"input" === n && fe.test(e.type)
					? (t.checked = e.checked)
					: ("input" !== n && "textarea" !== n) ||
					  (t.defaultValue = e.defaultValue)
			}
			function Fe(e, t, n, a) {
				t = d(t)
				var r,
					s,
					i,
					o,
					u,
					_,
					l = 0,
					m = e.length,
					c = m - 1,
					h = t[0],
					f = M(h)
				if (f || (m > 1 && "string" == typeof h && !p.checkClone && Oe.test(h)))
					return e.each(function (r) {
						var s = e.eq(r)
						f && (t[0] = h.call(this, r, s.html())), Fe(s, t, n, a)
					})
				if (
					m &&
					((s = (r = ke(t, e[0].ownerDocument, !1, e, a)).firstChild),
					1 === r.childNodes.length && (r = s),
					s || a)
				) {
					for (o = (i = D.map(Le(r, "script"), Ae)).length; l < m; l++)
						(u = r),
							l !== c &&
								((u = D.clone(u, !0, !0)), o && D.merge(i, Le(u, "script"))),
							n.call(e[l], u, l)
					if (o)
						for (
							_ = i[i.length - 1].ownerDocument, D.map(i, We), l = 0;
							l < o;
							l++
						)
							(u = i[l]),
								Me.test(u.type || "") &&
									!Z.access(u, "globalEval") &&
									D.contains(_, u) &&
									(u.src && "module" !== (u.type || "").toLowerCase()
										? D._evalUrl &&
										  !u.noModule &&
										  D._evalUrl(
												u.src,
												{ nonce: u.nonce || u.getAttribute("nonce") },
												_,
										  )
										: g(u.textContent.replace(Pe, ""), u, _))
				}
				return e
			}
			function ze(e, t, n) {
				for (var a, r = t ? D.filter(t, e) : e, s = 0; null != (a = r[s]); s++)
					n || 1 !== a.nodeType || D.cleanData(Le(a)),
						a.parentNode &&
							(n && ie(a) && Ye(Le(a, "script")), a.parentNode.removeChild(a))
				return e
			}
			D.extend({
				htmlPrefilter: function (e) {
					return e
				},
				clone: function (e, t, n) {
					var a,
						r,
						s,
						i,
						o = e.cloneNode(!0),
						d = ie(e)
					if (
						!(
							p.noCloneChecked ||
							(1 !== e.nodeType && 11 !== e.nodeType) ||
							D.isXMLDoc(e)
						)
					)
						for (i = Le(o), a = 0, r = (s = Le(e)).length; a < r; a++)
							Ce(s[a], i[a])
					if (t)
						if (n)
							for (
								s = s || Le(e), i = i || Le(o), a = 0, r = s.length;
								a < r;
								a++
							)
								Ne(s[a], i[a])
						else Ne(e, o)
					return (
						(i = Le(o, "script")).length > 0 && Ye(i, !d && Le(e, "script")), o
					)
				},
				cleanData: function (e) {
					for (
						var t, n, a, r = D.event.special, s = 0;
						void 0 !== (n = e[s]);
						s++
					)
						if ($(n)) {
							if ((t = n[Z.expando])) {
								if (t.events)
									for (a in t.events)
										r[a] ? D.event.remove(n, a) : D.removeEvent(n, a, t.handle)
								n[Z.expando] = void 0
							}
							n[X.expando] && (n[X.expando] = void 0)
						}
				},
			}),
				D.fn.extend({
					detach: function (e) {
						return ze(this, e, !0)
					},
					remove: function (e) {
						return ze(this, e)
					},
					text: function (e) {
						return q(
							this,
							function (e) {
								return void 0 === e
									? D.text(this)
									: this.empty().each(function () {
											;(1 !== this.nodeType &&
												11 !== this.nodeType &&
												9 !== this.nodeType) ||
												(this.textContent = e)
									  })
							},
							null,
							e,
							arguments.length,
						)
					},
					append: function () {
						return Fe(this, arguments, function (e) {
							;(1 !== this.nodeType &&
								11 !== this.nodeType &&
								9 !== this.nodeType) ||
								Ee(this, e).appendChild(e)
						})
					},
					prepend: function () {
						return Fe(this, arguments, function (e) {
							if (
								1 === this.nodeType ||
								11 === this.nodeType ||
								9 === this.nodeType
							) {
								var t = Ee(this, e)
								t.insertBefore(e, t.firstChild)
							}
						})
					},
					before: function () {
						return Fe(this, arguments, function (e) {
							this.parentNode && this.parentNode.insertBefore(e, this)
						})
					},
					after: function () {
						return Fe(this, arguments, function (e) {
							this.parentNode &&
								this.parentNode.insertBefore(e, this.nextSibling)
						})
					},
					empty: function () {
						for (var e, t = 0; null != (e = this[t]); t++)
							1 === e.nodeType && (D.cleanData(Le(e, !1)), (e.textContent = ""))
						return this
					},
					clone: function (e, t) {
						return (
							(e = null != e && e),
							(t = null == t ? e : t),
							this.map(function () {
								return D.clone(this, e, t)
							})
						)
					},
					html: function (e) {
						return q(
							this,
							function (e) {
								var t = this[0] || {},
									n = 0,
									a = this.length
								if (void 0 === e && 1 === t.nodeType) return t.innerHTML
								if (
									"string" == typeof e &&
									!je.test(e) &&
									!ye[(pe.exec(e) || ["", ""])[1].toLowerCase()]
								) {
									e = D.htmlPrefilter(e)
									try {
										for (; n < a; n++)
											1 === (t = this[n] || {}).nodeType &&
												(D.cleanData(Le(t, !1)), (t.innerHTML = e))
										t = 0
									} catch (e) {}
								}
								t && this.empty().append(e)
							},
							null,
							e,
							arguments.length,
						)
					},
					replaceWith: function () {
						var e = []
						return Fe(
							this,
							arguments,
							function (t) {
								var n = this.parentNode
								D.inArray(this, e) < 0 &&
									(D.cleanData(Le(this)), n && n.replaceChild(t, this))
							},
							e,
						)
					},
				}),
				D.each(
					{
						appendTo: "append",
						prependTo: "prepend",
						insertBefore: "before",
						insertAfter: "after",
						replaceAll: "replaceWith",
					},
					function (e, t) {
						D.fn[e] = function (e) {
							for (
								var n, a = [], r = D(e), s = r.length - 1, i = 0;
								i <= s;
								i++
							)
								(n = i === s ? this : this.clone(!0)),
									D(r[i])[t](n),
									u.apply(a, n.get())
							return this.pushStack(a)
						}
					},
				)
			var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
				Ie = function (e) {
					var t = e.ownerDocument.defaultView
					return (t && t.opener) || (t = n), t.getComputedStyle(e)
				},
				Je = function (e, t, n) {
					var a,
						r,
						s = {}
					for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r])
					for (r in ((a = n.call(e)), t)) e.style[r] = s[r]
					return a
				},
				qe = new RegExp(re.join("|"), "i")
			function Ue(e, t, n) {
				var a,
					r,
					s,
					i,
					o = e.style
				return (
					(n = n || Ie(e)) &&
						("" !== (i = n.getPropertyValue(t) || n[t]) ||
							ie(e) ||
							(i = D.style(e, t)),
						!p.pixelBoxStyles() &&
							Re.test(i) &&
							qe.test(t) &&
							((a = o.width),
							(r = o.minWidth),
							(s = o.maxWidth),
							(o.minWidth = o.maxWidth = o.width = i),
							(i = n.width),
							(o.width = a),
							(o.minWidth = r),
							(o.maxWidth = s))),
					void 0 !== i ? i + "" : i
				)
			}
			function Be(e, t) {
				return {
					get: function () {
						if (!e()) return (this.get = t).apply(this, arguments)
						delete this.get
					},
				}
			}
			!(function () {
				function e() {
					if (_) {
						;(u.style.cssText =
							"position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
							(_.style.cssText =
								"position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
							se.appendChild(u).appendChild(_)
						var e = n.getComputedStyle(_)
						;(a = "1%" !== e.top),
							(d = 12 === t(e.marginLeft)),
							(_.style.right = "60%"),
							(i = 36 === t(e.right)),
							(r = 36 === t(e.width)),
							(_.style.position = "absolute"),
							(s = 12 === t(_.offsetWidth / 3)),
							se.removeChild(u),
							(_ = null)
					}
				}
				function t(e) {
					return Math.round(parseFloat(e))
				}
				var a,
					r,
					s,
					i,
					o,
					d,
					u = L.createElement("div"),
					_ = L.createElement("div")
				_.style &&
					((_.style.backgroundClip = "content-box"),
					(_.cloneNode(!0).style.backgroundClip = ""),
					(p.clearCloneStyle = "content-box" === _.style.backgroundClip),
					D.extend(p, {
						boxSizingReliable: function () {
							return e(), r
						},
						pixelBoxStyles: function () {
							return e(), i
						},
						pixelPosition: function () {
							return e(), a
						},
						reliableMarginLeft: function () {
							return e(), d
						},
						scrollboxSize: function () {
							return e(), s
						},
						reliableTrDimensions: function () {
							var e, t, a, r
							return (
								null == o &&
									((e = L.createElement("table")),
									(t = L.createElement("tr")),
									(a = L.createElement("div")),
									(e.style.cssText = "position:absolute;left:-11111px"),
									(t.style.height = "1px"),
									(a.style.height = "9px"),
									se.appendChild(e).appendChild(t).appendChild(a),
									(r = n.getComputedStyle(t)),
									(o = parseInt(r.height) > 3),
									se.removeChild(e)),
								o
							)
						},
					}))
			})()
			var Ge = ["Webkit", "Moz", "ms"],
				Ve = L.createElement("div").style,
				$e = {}
			function Ke(e) {
				var t = D.cssProps[e] || $e[e]
				return (
					t ||
					(e in Ve
						? e
						: ($e[e] =
								(function (e) {
									for (
										var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
										n--;

									)
										if ((e = Ge[n] + t) in Ve) return e
								})(e) || e))
				)
			}
			var Ze = /^(none|table(?!-c[ea]).+)/,
				Xe = /^--/,
				Qe = { position: "absolute", visibility: "hidden", display: "block" },
				et = { letterSpacing: "0", fontWeight: "400" }
			function tt(e, t, n) {
				var a = ae.exec(t)
				return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t
			}
			function nt(e, t, n, a, r, s) {
				var i = "width" === t ? 1 : 0,
					o = 0,
					d = 0
				if (n === (a ? "border" : "content")) return 0
				for (; i < 4; i += 2)
					"margin" === n && (d += D.css(e, n + re[i], !0, r)),
						a
							? ("content" === n && (d -= D.css(e, "padding" + re[i], !0, r)),
							  "margin" !== n &&
									(d -= D.css(e, "border" + re[i] + "Width", !0, r)))
							: ((d += D.css(e, "padding" + re[i], !0, r)),
							  "padding" !== n
									? (d += D.css(e, "border" + re[i] + "Width", !0, r))
									: (o += D.css(e, "border" + re[i] + "Width", !0, r)))
				return (
					!a &&
						s >= 0 &&
						(d +=
							Math.max(
								0,
								Math.ceil(
									e["offset" + t[0].toUpperCase() + t.slice(1)] -
										s -
										d -
										o -
										0.5,
								),
							) || 0),
					d
				)
			}
			function at(e, t, n) {
				var a = Ie(e),
					r =
						(!p.boxSizingReliable() || n) &&
						"border-box" === D.css(e, "boxSizing", !1, a),
					s = r,
					i = Ue(e, t, a),
					o = "offset" + t[0].toUpperCase() + t.slice(1)
				if (Re.test(i)) {
					if (!n) return i
					i = "auto"
				}
				return (
					((!p.boxSizingReliable() && r) ||
						(!p.reliableTrDimensions() && H(e, "tr")) ||
						"auto" === i ||
						(!parseFloat(i) && "inline" === D.css(e, "display", !1, a))) &&
						e.getClientRects().length &&
						((r = "border-box" === D.css(e, "boxSizing", !1, a)),
						(s = o in e) && (i = e[o])),
					(i = parseFloat(i) || 0) +
						nt(e, t, n || (r ? "border" : "content"), s, a, i) +
						"px"
				)
			}
			function rt(e, t, n, a, r) {
				return new rt.prototype.init(e, t, n, a, r)
			}
			D.extend({
				cssHooks: {
					opacity: {
						get: function (e, t) {
							if (t) {
								var n = Ue(e, "opacity")
								return "" === n ? "1" : n
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
				style: function (e, t, n, a) {
					if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
						var r,
							s,
							i,
							o = V(t),
							d = Xe.test(t),
							u = e.style
						if (
							(d || (t = Ke(o)),
							(i = D.cssHooks[t] || D.cssHooks[o]),
							void 0 === n)
						)
							return i && "get" in i && void 0 !== (r = i.get(e, !1, a))
								? r
								: u[t]
						"string" === (s = typeof n) &&
							(r = ae.exec(n)) &&
							r[1] &&
							((n = ue(e, t, r)), (s = "number")),
							null != n &&
								n == n &&
								("number" !== s ||
									d ||
									(n += (r && r[3]) || (D.cssNumber[o] ? "" : "px")),
								p.clearCloneStyle ||
									"" !== n ||
									0 !== t.indexOf("background") ||
									(u[t] = "inherit"),
								(i && "set" in i && void 0 === (n = i.set(e, n, a))) ||
									(d ? u.setProperty(t, n) : (u[t] = n)))
					}
				},
				css: function (e, t, n, a) {
					var r,
						s,
						i,
						o = V(t)
					return (
						Xe.test(t) || (t = Ke(o)),
						(i = D.cssHooks[t] || D.cssHooks[o]) &&
							"get" in i &&
							(r = i.get(e, !0, n)),
						void 0 === r && (r = Ue(e, t, a)),
						"normal" === r && t in et && (r = et[t]),
						"" === n || n
							? ((s = parseFloat(r)), !0 === n || isFinite(s) ? s || 0 : r)
							: r
					)
				},
			}),
				D.each(["height", "width"], function (e, t) {
					D.cssHooks[t] = {
						get: function (e, n, a) {
							if (n)
								return !Ze.test(D.css(e, "display")) ||
									(e.getClientRects().length && e.getBoundingClientRect().width)
									? at(e, t, a)
									: Je(e, Qe, function () {
											return at(e, t, a)
									  })
						},
						set: function (e, n, a) {
							var r,
								s = Ie(e),
								i = !p.scrollboxSize() && "absolute" === s.position,
								o = (i || a) && "border-box" === D.css(e, "boxSizing", !1, s),
								d = a ? nt(e, t, a, o, s) : 0
							return (
								o &&
									i &&
									(d -= Math.ceil(
										e["offset" + t[0].toUpperCase() + t.slice(1)] -
											parseFloat(s[t]) -
											nt(e, t, "border", !1, s) -
											0.5,
									)),
								d &&
									(r = ae.exec(n)) &&
									"px" !== (r[3] || "px") &&
									((e.style[t] = n), (n = D.css(e, t))),
								tt(0, n, d)
							)
						},
					}
				}),
				(D.cssHooks.marginLeft = Be(p.reliableMarginLeft, function (e, t) {
					if (t)
						return (
							(parseFloat(Ue(e, "marginLeft")) ||
								e.getBoundingClientRect().left -
									Je(e, { marginLeft: 0 }, function () {
										return e.getBoundingClientRect().left
									})) + "px"
						)
				})),
				D.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
					;(D.cssHooks[e + t] = {
						expand: function (n) {
							for (
								var a = 0,
									r = {},
									s = "string" == typeof n ? n.split(" ") : [n];
								a < 4;
								a++
							)
								r[e + re[a] + t] = s[a] || s[a - 2] || s[0]
							return r
						},
					}),
						"margin" !== e && (D.cssHooks[e + t].set = tt)
				}),
				D.fn.extend({
					css: function (e, t) {
						return q(
							this,
							function (e, t, n) {
								var a,
									r,
									s = {},
									i = 0
								if (Array.isArray(t)) {
									for (a = Ie(e), r = t.length; i < r; i++)
										s[t[i]] = D.css(e, t[i], !1, a)
									return s
								}
								return void 0 !== n ? D.style(e, t, n) : D.css(e, t)
							},
							e,
							t,
							arguments.length > 1,
						)
					},
				}),
				(D.Tween = rt),
				(rt.prototype = {
					constructor: rt,
					init: function (e, t, n, a, r, s) {
						;(this.elem = e),
							(this.prop = n),
							(this.easing = r || D.easing._default),
							(this.options = t),
							(this.start = this.now = this.cur()),
							(this.end = a),
							(this.unit = s || (D.cssNumber[n] ? "" : "px"))
					},
					cur: function () {
						var e = rt.propHooks[this.prop]
						return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
					},
					run: function (e) {
						var t,
							n = rt.propHooks[this.prop]
						return (
							this.options.duration
								? (this.pos = t = D.easing[this.easing](
										e,
										this.options.duration * e,
										0,
										1,
										this.options.duration,
								  ))
								: (this.pos = t = e),
							(this.now = (this.end - this.start) * t + this.start),
							this.options.step &&
								this.options.step.call(this.elem, this.now, this),
							n && n.set ? n.set(this) : rt.propHooks._default.set(this),
							this
						)
					},
				}),
				(rt.prototype.init.prototype = rt.prototype),
				(rt.propHooks = {
					_default: {
						get: function (e) {
							var t
							return 1 !== e.elem.nodeType ||
								(null != e.elem[e.prop] && null == e.elem.style[e.prop])
								? e.elem[e.prop]
								: (t = D.css(e.elem, e.prop, "")) && "auto" !== t
								? t
								: 0
						},
						set: function (e) {
							D.fx.step[e.prop]
								? D.fx.step[e.prop](e)
								: 1 !== e.elem.nodeType ||
								  (!D.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)])
								? (e.elem[e.prop] = e.now)
								: D.style(e.elem, e.prop, e.now + e.unit)
						},
					},
				}),
				(rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
					set: function (e) {
						e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
					},
				}),
				(D.easing = {
					linear: function (e) {
						return e
					},
					swing: function (e) {
						return 0.5 - Math.cos(e * Math.PI) / 2
					},
					_default: "swing",
				}),
				(D.fx = rt.prototype.init),
				(D.fx.step = {})
			var st,
				it,
				ot = /^(?:toggle|show|hide)$/,
				dt = /queueHooks$/
			function ut() {
				it &&
					(!1 === L.hidden && n.requestAnimationFrame
						? n.requestAnimationFrame(ut)
						: n.setTimeout(ut, D.fx.interval),
					D.fx.tick())
			}
			function _t() {
				return (
					n.setTimeout(function () {
						st = void 0
					}),
					(st = Date.now())
				)
			}
			function lt(e, t) {
				var n,
					a = 0,
					r = { height: e }
				for (t = t ? 1 : 0; a < 4; a += 2 - t)
					r["margin" + (n = re[a])] = r["padding" + n] = e
				return t && (r.opacity = r.width = e), r
			}
			function mt(e, t, n) {
				for (
					var a,
						r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]),
						s = 0,
						i = r.length;
					s < i;
					s++
				)
					if ((a = r[s].call(n, t, e))) return a
			}
			function ct(e, t, n) {
				var a,
					r,
					s = 0,
					i = ct.prefilters.length,
					o = D.Deferred().always(function () {
						delete d.elem
					}),
					d = function () {
						if (r) return !1
						for (
							var t = st || _t(),
								n = Math.max(0, u.startTime + u.duration - t),
								a = 1 - (n / u.duration || 0),
								s = 0,
								i = u.tweens.length;
							s < i;
							s++
						)
							u.tweens[s].run(a)
						return (
							o.notifyWith(e, [u, a, n]),
							a < 1 && i
								? n
								: (i || o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u]), !1)
						)
					},
					u = o.promise({
						elem: e,
						props: D.extend({}, t),
						opts: D.extend(
							!0,
							{ specialEasing: {}, easing: D.easing._default },
							n,
						),
						originalProperties: t,
						originalOptions: n,
						startTime: st || _t(),
						duration: n.duration,
						tweens: [],
						createTween: function (t, n) {
							var a = D.Tween(
								e,
								u.opts,
								t,
								n,
								u.opts.specialEasing[t] || u.opts.easing,
							)
							return u.tweens.push(a), a
						},
						stop: function (t) {
							var n = 0,
								a = t ? u.tweens.length : 0
							if (r) return this
							for (r = !0; n < a; n++) u.tweens[n].run(1)
							return (
								t
									? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t]))
									: o.rejectWith(e, [u, t]),
								this
							)
						},
					}),
					_ = u.props
				for (
					!(function (e, t) {
						var n, a, r, s, i
						for (n in e)
							if (
								((r = t[(a = V(n))]),
								(s = e[n]),
								Array.isArray(s) && ((r = s[1]), (s = e[n] = s[0])),
								n !== a && ((e[a] = s), delete e[n]),
								(i = D.cssHooks[a]) && ("expand" in i))
							)
								for (n in ((s = i.expand(s)), delete e[a], s))
									(n in e) || ((e[n] = s[n]), (t[n] = r))
							else t[a] = r
					})(_, u.opts.specialEasing);
					s < i;
					s++
				)
					if ((a = ct.prefilters[s].call(u, e, _, u.opts)))
						return (
							M(a.stop) &&
								(D._queueHooks(u.elem, u.opts.queue).stop = a.stop.bind(a)),
							a
						)
				return (
					D.map(_, mt, u),
					M(u.opts.start) && u.opts.start.call(e, u),
					u
						.progress(u.opts.progress)
						.done(u.opts.done, u.opts.complete)
						.fail(u.opts.fail)
						.always(u.opts.always),
					D.fx.timer(D.extend(d, { elem: e, anim: u, queue: u.opts.queue })),
					u
				)
			}
			;(D.Animation = D.extend(ct, {
				tweeners: {
					"*": [
						function (e, t) {
							var n = this.createTween(e, t)
							return ue(n.elem, e, ae.exec(t), n), n
						},
					],
				},
				tweener: function (e, t) {
					M(e) ? ((t = e), (e = ["*"])) : (e = e.match(N))
					for (var n, a = 0, r = e.length; a < r; a++)
						(n = e[a]),
							(ct.tweeners[n] = ct.tweeners[n] || []),
							ct.tweeners[n].unshift(t)
				},
				prefilters: [
					function (e, t, n) {
						var a,
							r,
							s,
							i,
							o,
							d,
							u,
							_,
							l = "width" in t || "height" in t,
							m = this,
							c = {},
							h = e.style,
							f = e.nodeType && de(e),
							p = Z.get(e, "fxshow")
						for (a in (n.queue ||
							(null == (i = D._queueHooks(e, "fx")).unqueued &&
								((i.unqueued = 0),
								(o = i.empty.fire),
								(i.empty.fire = function () {
									i.unqueued || o()
								})),
							i.unqueued++,
							m.always(function () {
								m.always(function () {
									i.unqueued--, D.queue(e, "fx").length || i.empty.fire()
								})
							})),
						t))
							if (((r = t[a]), ot.test(r))) {
								if (
									(delete t[a],
									(s = s || "toggle" === r),
									r === (f ? "hide" : "show"))
								) {
									if ("show" !== r || !p || void 0 === p[a]) continue
									f = !0
								}
								c[a] = (p && p[a]) || D.style(e, a)
							}
						if ((d = !D.isEmptyObject(t)) || !D.isEmptyObject(c))
							for (a in (l &&
								1 === e.nodeType &&
								((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
								null == (u = p && p.display) && (u = Z.get(e, "display")),
								"none" === (_ = D.css(e, "display")) &&
									(u
										? (_ = u)
										: (me([e], !0),
										  (u = e.style.display || u),
										  (_ = D.css(e, "display")),
										  me([e]))),
								("inline" === _ || ("inline-block" === _ && null != u)) &&
									"none" === D.css(e, "float") &&
									(d ||
										(m.done(function () {
											h.display = u
										}),
										null == u &&
											((_ = h.display), (u = "none" === _ ? "" : _))),
									(h.display = "inline-block"))),
							n.overflow &&
								((h.overflow = "hidden"),
								m.always(function () {
									;(h.overflow = n.overflow[0]),
										(h.overflowX = n.overflow[1]),
										(h.overflowY = n.overflow[2])
								})),
							(d = !1),
							c))
								d ||
									(p
										? "hidden" in p && (f = p.hidden)
										: (p = Z.access(e, "fxshow", { display: u })),
									s && (p.hidden = !f),
									f && me([e], !0),
									m.done(function () {
										for (a in (f || me([e]), Z.remove(e, "fxshow"), c))
											D.style(e, a, c[a])
									})),
									(d = mt(f ? p[a] : 0, a, m)),
									a in p ||
										((p[a] = d.start), f && ((d.end = d.start), (d.start = 0)))
					},
				],
				prefilter: function (e, t) {
					t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
				},
			})),
				(D.speed = function (e, t, n) {
					var a =
						e && "object" == typeof e
							? D.extend({}, e)
							: {
									complete: n || (!n && t) || (M(e) && e),
									duration: e,
									easing: (n && t) || (t && !M(t) && t),
							  }
					return (
						D.fx.off
							? (a.duration = 0)
							: "number" != typeof a.duration &&
							  (a.duration in D.fx.speeds
									? (a.duration = D.fx.speeds[a.duration])
									: (a.duration = D.fx.speeds._default)),
						(null != a.queue && !0 !== a.queue) || (a.queue = "fx"),
						(a.old = a.complete),
						(a.complete = function () {
							M(a.old) && a.old.call(this), a.queue && D.dequeue(this, a.queue)
						}),
						a
					)
				}),
				D.fn.extend({
					fadeTo: function (e, t, n, a) {
						return this.filter(de)
							.css("opacity", 0)
							.show()
							.end()
							.animate({ opacity: t }, e, n, a)
					},
					animate: function (e, t, n, a) {
						var r = D.isEmptyObject(e),
							s = D.speed(t, n, a),
							i = function () {
								var t = ct(this, D.extend({}, e), s)
								;(r || Z.get(this, "finish")) && t.stop(!0)
							}
						return (
							(i.finish = i),
							r || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
						)
					},
					stop: function (e, t, n) {
						var a = function (e) {
							var t = e.stop
							delete e.stop, t(n)
						}
						return (
							"string" != typeof e && ((n = t), (t = e), (e = void 0)),
							t && this.queue(e || "fx", []),
							this.each(function () {
								var t = !0,
									r = null != e && e + "queueHooks",
									s = D.timers,
									i = Z.get(this)
								if (r) i[r] && i[r].stop && a(i[r])
								else for (r in i) i[r] && i[r].stop && dt.test(r) && a(i[r])
								for (r = s.length; r--; )
									s[r].elem !== this ||
										(null != e && s[r].queue !== e) ||
										(s[r].anim.stop(n), (t = !1), s.splice(r, 1))
								;(!t && n) || D.dequeue(this, e)
							})
						)
					},
					finish: function (e) {
						return (
							!1 !== e && (e = e || "fx"),
							this.each(function () {
								var t,
									n = Z.get(this),
									a = n[e + "queue"],
									r = n[e + "queueHooks"],
									s = D.timers,
									i = a ? a.length : 0
								for (
									n.finish = !0,
										D.queue(this, e, []),
										r && r.stop && r.stop.call(this, !0),
										t = s.length;
									t--;

								)
									s[t].elem === this &&
										s[t].queue === e &&
										(s[t].anim.stop(!0), s.splice(t, 1))
								for (t = 0; t < i; t++)
									a[t] && a[t].finish && a[t].finish.call(this)
								delete n.finish
							})
						)
					},
				}),
				D.each(["toggle", "show", "hide"], function (e, t) {
					var n = D.fn[t]
					D.fn[t] = function (e, a, r) {
						return null == e || "boolean" == typeof e
							? n.apply(this, arguments)
							: this.animate(lt(t, !0), e, a, r)
					}
				}),
				D.each(
					{
						slideDown: lt("show"),
						slideUp: lt("hide"),
						slideToggle: lt("toggle"),
						fadeIn: { opacity: "show" },
						fadeOut: { opacity: "hide" },
						fadeToggle: { opacity: "toggle" },
					},
					function (e, t) {
						D.fn[e] = function (e, n, a) {
							return this.animate(t, e, n, a)
						}
					},
				),
				(D.timers = []),
				(D.fx.tick = function () {
					var e,
						t = 0,
						n = D.timers
					for (st = Date.now(); t < n.length; t++)
						(e = n[t])() || n[t] !== e || n.splice(t--, 1)
					n.length || D.fx.stop(), (st = void 0)
				}),
				(D.fx.timer = function (e) {
					D.timers.push(e), D.fx.start()
				}),
				(D.fx.interval = 13),
				(D.fx.start = function () {
					it || ((it = !0), ut())
				}),
				(D.fx.stop = function () {
					it = null
				}),
				(D.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
				(D.fn.delay = function (e, t) {
					return (
						(e = (D.fx && D.fx.speeds[e]) || e),
						(t = t || "fx"),
						this.queue(t, function (t, a) {
							var r = n.setTimeout(t, e)
							a.stop = function () {
								n.clearTimeout(r)
							}
						})
					)
				}),
				(function () {
					var e = L.createElement("input"),
						t = L.createElement("select").appendChild(L.createElement("option"))
					;(e.type = "checkbox"),
						(p.checkOn = "" !== e.value),
						(p.optSelected = t.selected),
						((e = L.createElement("input")).value = "t"),
						(e.type = "radio"),
						(p.radioValue = "t" === e.value)
				})()
			var ht,
				ft = D.expr.attrHandle
			D.fn.extend({
				attr: function (e, t) {
					return q(this, D.attr, e, t, arguments.length > 1)
				},
				removeAttr: function (e) {
					return this.each(function () {
						D.removeAttr(this, e)
					})
				},
			}),
				D.extend({
					attr: function (e, t, n) {
						var a,
							r,
							s = e.nodeType
						if (3 !== s && 8 !== s && 2 !== s)
							return void 0 === e.getAttribute
								? D.prop(e, t, n)
								: ((1 === s && D.isXMLDoc(e)) ||
										(r =
											D.attrHooks[t.toLowerCase()] ||
											(D.expr.match.bool.test(t) ? ht : void 0)),
								  void 0 !== n
										? null === n
											? void D.removeAttr(e, t)
											: r && "set" in r && void 0 !== (a = r.set(e, n, t))
											? a
											: (e.setAttribute(t, n + ""), n)
										: r && "get" in r && null !== (a = r.get(e, t))
										? a
										: null == (a = D.find.attr(e, t))
										? void 0
										: a)
					},
					attrHooks: {
						type: {
							set: function (e, t) {
								if (!p.radioValue && "radio" === t && H(e, "input")) {
									var n = e.value
									return e.setAttribute("type", t), n && (e.value = n), t
								}
							},
						},
					},
					removeAttr: function (e, t) {
						var n,
							a = 0,
							r = t && t.match(N)
						if (r && 1 === e.nodeType)
							for (; (n = r[a++]); ) e.removeAttribute(n)
					},
				}),
				(ht = {
					set: function (e, t, n) {
						return !1 === t ? D.removeAttr(e, n) : e.setAttribute(n, n), n
					},
				}),
				D.each(D.expr.match.bool.source.match(/\w+/g), function (e, t) {
					var n = ft[t] || D.find.attr
					ft[t] = function (e, t, a) {
						var r,
							s,
							i = t.toLowerCase()
						return (
							a ||
								((s = ft[i]),
								(ft[i] = r),
								(r = null != n(e, t, a) ? i : null),
								(ft[i] = s)),
							r
						)
					}
				})
			var pt = /^(?:input|select|textarea|button)$/i,
				Mt = /^(?:a|area)$/i
			function yt(e) {
				return (e.match(N) || []).join(" ")
			}
			function Lt(e) {
				return (e.getAttribute && e.getAttribute("class")) || ""
			}
			function Yt(e) {
				return Array.isArray(e) ? e : ("string" == typeof e && e.match(N)) || []
			}
			D.fn.extend({
				prop: function (e, t) {
					return q(this, D.prop, e, t, arguments.length > 1)
				},
				removeProp: function (e) {
					return this.each(function () {
						delete this[D.propFix[e] || e]
					})
				},
			}),
				D.extend({
					prop: function (e, t, n) {
						var a,
							r,
							s = e.nodeType
						if (3 !== s && 8 !== s && 2 !== s)
							return (
								(1 === s && D.isXMLDoc(e)) ||
									((t = D.propFix[t] || t), (r = D.propHooks[t])),
								void 0 !== n
									? r && "set" in r && void 0 !== (a = r.set(e, n, t))
										? a
										: (e[t] = n)
									: r && "get" in r && null !== (a = r.get(e, t))
									? a
									: e[t]
							)
					},
					propHooks: {
						tabIndex: {
							get: function (e) {
								var t = D.find.attr(e, "tabindex")
								return t
									? parseInt(t, 10)
									: pt.test(e.nodeName) || (Mt.test(e.nodeName) && e.href)
									? 0
									: -1
							},
						},
					},
					propFix: { for: "htmlFor", class: "className" },
				}),
				p.optSelected ||
					(D.propHooks.selected = {
						get: function (e) {
							var t = e.parentNode
							return t && t.parentNode && t.parentNode.selectedIndex, null
						},
						set: function (e) {
							var t = e.parentNode
							t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
						},
					}),
				D.each(
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
						D.propFix[this.toLowerCase()] = this
					},
				),
				D.fn.extend({
					addClass: function (e) {
						var t,
							n,
							a,
							r,
							s,
							i,
							o,
							d = 0
						if (M(e))
							return this.each(function (t) {
								D(this).addClass(e.call(this, t, Lt(this)))
							})
						if ((t = Yt(e)).length)
							for (; (n = this[d++]); )
								if (
									((r = Lt(n)), (a = 1 === n.nodeType && " " + yt(r) + " "))
								) {
									for (i = 0; (s = t[i++]); )
										a.indexOf(" " + s + " ") < 0 && (a += s + " ")
									r !== (o = yt(a)) && n.setAttribute("class", o)
								}
						return this
					},
					removeClass: function (e) {
						var t,
							n,
							a,
							r,
							s,
							i,
							o,
							d = 0
						if (M(e))
							return this.each(function (t) {
								D(this).removeClass(e.call(this, t, Lt(this)))
							})
						if (!arguments.length) return this.attr("class", "")
						if ((t = Yt(e)).length)
							for (; (n = this[d++]); )
								if (
									((r = Lt(n)), (a = 1 === n.nodeType && " " + yt(r) + " "))
								) {
									for (i = 0; (s = t[i++]); )
										for (; a.indexOf(" " + s + " ") > -1; )
											a = a.replace(" " + s + " ", " ")
									r !== (o = yt(a)) && n.setAttribute("class", o)
								}
						return this
					},
					toggleClass: function (e, t) {
						var n = typeof e,
							a = "string" === n || Array.isArray(e)
						return "boolean" == typeof t && a
							? t
								? this.addClass(e)
								: this.removeClass(e)
							: M(e)
							? this.each(function (n) {
									D(this).toggleClass(e.call(this, n, Lt(this), t), t)
							  })
							: this.each(function () {
									var t, r, s, i
									if (a)
										for (r = 0, s = D(this), i = Yt(e); (t = i[r++]); )
											s.hasClass(t) ? s.removeClass(t) : s.addClass(t)
									else
										(void 0 !== e && "boolean" !== n) ||
											((t = Lt(this)) && Z.set(this, "__className__", t),
											this.setAttribute &&
												this.setAttribute(
													"class",
													t || !1 === e
														? ""
														: Z.get(this, "__className__") || "",
												))
							  })
					},
					hasClass: function (e) {
						var t,
							n,
							a = 0
						for (t = " " + e + " "; (n = this[a++]); )
							if (1 === n.nodeType && (" " + yt(Lt(n)) + " ").indexOf(t) > -1)
								return !0
						return !1
					},
				})
			var gt = /\r/g
			D.fn.extend({
				val: function (e) {
					var t,
						n,
						a,
						r = this[0]
					return arguments.length
						? ((a = M(e)),
						  this.each(function (n) {
								var r
								1 === this.nodeType &&
									(null == (r = a ? e.call(this, n, D(this).val()) : e)
										? (r = "")
										: "number" == typeof r
										? (r += "")
										: Array.isArray(r) &&
										  (r = D.map(r, function (e) {
												return null == e ? "" : e + ""
										  })),
									((t =
										D.valHooks[this.type] ||
										D.valHooks[this.nodeName.toLowerCase()]) &&
										"set" in t &&
										void 0 !== t.set(this, r, "value")) ||
										(this.value = r))
						  }))
						: r
						? (t =
								D.valHooks[r.type] || D.valHooks[r.nodeName.toLowerCase()]) &&
						  "get" in t &&
						  void 0 !== (n = t.get(r, "value"))
							? n
							: "string" == typeof (n = r.value)
							? n.replace(gt, "")
							: null == n
							? ""
							: n
						: void 0
				},
			}),
				D.extend({
					valHooks: {
						option: {
							get: function (e) {
								var t = D.find.attr(e, "value")
								return null != t ? t : yt(D.text(e))
							},
						},
						select: {
							get: function (e) {
								var t,
									n,
									a,
									r = e.options,
									s = e.selectedIndex,
									i = "select-one" === e.type,
									o = i ? null : [],
									d = i ? s + 1 : r.length
								for (a = s < 0 ? d : i ? s : 0; a < d; a++)
									if (
										((n = r[a]).selected || a === s) &&
										!n.disabled &&
										(!n.parentNode.disabled || !H(n.parentNode, "optgroup"))
									) {
										if (((t = D(n).val()), i)) return t
										o.push(t)
									}
								return o
							},
							set: function (e, t) {
								for (
									var n, a, r = e.options, s = D.makeArray(t), i = r.length;
									i--;

								)
									((a = r[i]).selected =
										D.inArray(D.valHooks.option.get(a), s) > -1) && (n = !0)
								return n || (e.selectedIndex = -1), s
							},
						},
					},
				}),
				D.each(["radio", "checkbox"], function () {
					;(D.valHooks[this] = {
						set: function (e, t) {
							if (Array.isArray(t))
								return (e.checked = D.inArray(D(e).val(), t) > -1)
						},
					}),
						p.checkOn ||
							(D.valHooks[this].get = function (e) {
								return null === e.getAttribute("value") ? "on" : e.value
							})
				}),
				(p.focusin = "onfocusin" in n)
			var kt = /^(?:focusinfocus|focusoutblur)$/,
				Dt = function (e) {
					e.stopPropagation()
				}
			D.extend(D.event, {
				trigger: function (e, t, a, r) {
					var s,
						i,
						o,
						d,
						u,
						_,
						l,
						m,
						h = [a || L],
						f = c.call(e, "type") ? e.type : e,
						p = c.call(e, "namespace") ? e.namespace.split(".") : []
					if (
						((i = m = o = a = a || L),
						3 !== a.nodeType &&
							8 !== a.nodeType &&
							!kt.test(f + D.event.triggered) &&
							(f.indexOf(".") > -1 &&
								((p = f.split(".")), (f = p.shift()), p.sort()),
							(u = f.indexOf(":") < 0 && "on" + f),
							((e = e[D.expando]
								? e
								: new D.Event(f, "object" == typeof e && e)).isTrigger = r
								? 2
								: 3),
							(e.namespace = p.join(".")),
							(e.rnamespace = e.namespace
								? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
								: null),
							(e.result = void 0),
							e.target || (e.target = a),
							(t = null == t ? [e] : D.makeArray(t, [e])),
							(l = D.event.special[f] || {}),
							r || !l.trigger || !1 !== l.trigger.apply(a, t)))
					) {
						if (!r && !l.noBubble && !y(a)) {
							for (
								d = l.delegateType || f, kt.test(d + f) || (i = i.parentNode);
								i;
								i = i.parentNode
							)
								h.push(i), (o = i)
							o === (a.ownerDocument || L) &&
								h.push(o.defaultView || o.parentWindow || n)
						}
						for (s = 0; (i = h[s++]) && !e.isPropagationStopped(); )
							(m = i),
								(e.type = s > 1 ? d : l.bindType || f),
								(_ =
									(Z.get(i, "events") || Object.create(null))[e.type] &&
									Z.get(i, "handle")) && _.apply(i, t),
								(_ = u && i[u]) &&
									_.apply &&
									$(i) &&
									((e.result = _.apply(i, t)),
									!1 === e.result && e.preventDefault())
						return (
							(e.type = f),
							r ||
								e.isDefaultPrevented() ||
								(l._default && !1 !== l._default.apply(h.pop(), t)) ||
								!$(a) ||
								(u &&
									M(a[f]) &&
									!y(a) &&
									((o = a[u]) && (a[u] = null),
									(D.event.triggered = f),
									e.isPropagationStopped() && m.addEventListener(f, Dt),
									a[f](),
									e.isPropagationStopped() && m.removeEventListener(f, Dt),
									(D.event.triggered = void 0),
									o && (a[u] = o))),
							e.result
						)
					}
				},
				simulate: function (e, t, n) {
					var a = D.extend(new D.Event(), n, { type: e, isSimulated: !0 })
					D.event.trigger(a, null, t)
				},
			}),
				D.fn.extend({
					trigger: function (e, t) {
						return this.each(function () {
							D.event.trigger(e, t, this)
						})
					},
					triggerHandler: function (e, t) {
						var n = this[0]
						if (n) return D.event.trigger(e, t, n, !0)
					},
				}),
				p.focusin ||
					D.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
						var n = function (e) {
							D.event.simulate(t, e.target, D.event.fix(e))
						}
						D.event.special[t] = {
							setup: function () {
								var a = this.ownerDocument || this.document || this,
									r = Z.access(a, t)
								r || a.addEventListener(e, n, !0), Z.access(a, t, (r || 0) + 1)
							},
							teardown: function () {
								var a = this.ownerDocument || this.document || this,
									r = Z.access(a, t) - 1
								r
									? Z.access(a, t, r)
									: (a.removeEventListener(e, n, !0), Z.remove(a, t))
							},
						}
					})
			var vt = n.location,
				Tt = { guid: Date.now() },
				wt = /\?/
			D.parseXML = function (e) {
				var t
				if (!e || "string" != typeof e) return null
				try {
					t = new n.DOMParser().parseFromString(e, "text/xml")
				} catch (e) {
					t = void 0
				}
				return (
					(t && !t.getElementsByTagName("parsererror").length) ||
						D.error("Invalid XML: " + e),
					t
				)
			}
			var bt = /\[\]$/,
				St = /\r?\n/g,
				Ht = /^(?:submit|button|image|reset|file)$/i,
				xt = /^(?:input|select|textarea|keygen)/i
			function jt(e, t, n, a) {
				var r
				if (Array.isArray(t))
					D.each(t, function (t, r) {
						n || bt.test(e)
							? a(e, r)
							: jt(
									e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
									r,
									n,
									a,
							  )
					})
				else if (n || "object" !== k(t)) a(e, t)
				else for (r in t) jt(e + "[" + r + "]", t[r], n, a)
			}
			;(D.param = function (e, t) {
				var n,
					a = [],
					r = function (e, t) {
						var n = M(t) ? t() : t
						a[a.length] =
							encodeURIComponent(e) +
							"=" +
							encodeURIComponent(null == n ? "" : n)
					}
				if (null == e) return ""
				if (Array.isArray(e) || (e.jquery && !D.isPlainObject(e)))
					D.each(e, function () {
						r(this.name, this.value)
					})
				else for (n in e) jt(n, e[n], t, r)
				return a.join("&")
			}),
				D.fn.extend({
					serialize: function () {
						return D.param(this.serializeArray())
					},
					serializeArray: function () {
						return this.map(function () {
							var e = D.prop(this, "elements")
							return e ? D.makeArray(e) : this
						})
							.filter(function () {
								var e = this.type
								return (
									this.name &&
									!D(this).is(":disabled") &&
									xt.test(this.nodeName) &&
									!Ht.test(e) &&
									(this.checked || !fe.test(e))
								)
							})
							.map(function (e, t) {
								var n = D(this).val()
								return null == n
									? null
									: Array.isArray(n)
									? D.map(n, function (e) {
											return { name: t.name, value: e.replace(St, "\r\n") }
									  })
									: { name: t.name, value: n.replace(St, "\r\n") }
							})
							.get()
					},
				})
			var Ot = /%20/g,
				Pt = /#.*$/,
				Et = /([?&])_=[^&]*/,
				At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
				Wt = /^(?:GET|HEAD)$/,
				Nt = /^\/\//,
				Ct = {},
				Ft = {},
				zt = "*/".concat("*"),
				Rt = L.createElement("a")
			function It(e) {
				return function (t, n) {
					"string" != typeof t && ((n = t), (t = "*"))
					var a,
						r = 0,
						s = t.toLowerCase().match(N) || []
					if (M(n))
						for (; (a = s[r++]); )
							"+" === a[0]
								? ((a = a.slice(1) || "*"), (e[a] = e[a] || []).unshift(n))
								: (e[a] = e[a] || []).push(n)
				}
			}
			function Jt(e, t, n, a) {
				var r = {},
					s = e === Ft
				function i(o) {
					var d
					return (
						(r[o] = !0),
						D.each(e[o] || [], function (e, o) {
							var u = o(t, n, a)
							return "string" != typeof u || s || r[u]
								? s
									? !(d = u)
									: void 0
								: (t.dataTypes.unshift(u), i(u), !1)
						}),
						d
					)
				}
				return i(t.dataTypes[0]) || (!r["*"] && i("*"))
			}
			function qt(e, t) {
				var n,
					a,
					r = D.ajaxSettings.flatOptions || {}
				for (n in t) void 0 !== t[n] && ((r[n] ? e : a || (a = {}))[n] = t[n])
				return a && D.extend(!0, e, a), e
			}
			;(Rt.href = vt.href),
				D.extend({
					active: 0,
					lastModified: {},
					etag: {},
					ajaxSettings: {
						url: vt.href,
						type: "GET",
						isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
							vt.protocol,
						),
						global: !0,
						processData: !0,
						async: !0,
						contentType: "application/x-www-form-urlencoded; charset=UTF-8",
						accepts: {
							"*": zt,
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
							"text xml": D.parseXML,
						},
						flatOptions: { url: !0, context: !0 },
					},
					ajaxSetup: function (e, t) {
						return t ? qt(qt(e, D.ajaxSettings), t) : qt(D.ajaxSettings, e)
					},
					ajaxPrefilter: It(Ct),
					ajaxTransport: It(Ft),
					ajax: function (e, t) {
						"object" == typeof e && ((t = e), (e = void 0)), (t = t || {})
						var a,
							r,
							s,
							i,
							o,
							d,
							u,
							_,
							l,
							m,
							c = D.ajaxSetup({}, t),
							h = c.context || c,
							f = c.context && (h.nodeType || h.jquery) ? D(h) : D.event,
							p = D.Deferred(),
							M = D.Callbacks("once memory"),
							y = c.statusCode || {},
							Y = {},
							g = {},
							k = "canceled",
							v = {
								readyState: 0,
								getResponseHeader: function (e) {
									var t
									if (u) {
										if (!i)
											for (i = {}; (t = At.exec(s)); )
												i[t[1].toLowerCase() + " "] = (
													i[t[1].toLowerCase() + " "] || []
												).concat(t[2])
										t = i[e.toLowerCase() + " "]
									}
									return null == t ? null : t.join(", ")
								},
								getAllResponseHeaders: function () {
									return u ? s : null
								},
								setRequestHeader: function (e, t) {
									return (
										null == u &&
											((e = g[e.toLowerCase()] = g[e.toLowerCase()] || e),
											(Y[e] = t)),
										this
									)
								},
								overrideMimeType: function (e) {
									return null == u && (c.mimeType = e), this
								},
								statusCode: function (e) {
									var t
									if (e)
										if (u) v.always(e[v.status])
										else for (t in e) y[t] = [y[t], e[t]]
									return this
								},
								abort: function (e) {
									var t = e || k
									return a && a.abort(t), T(0, t), this
								},
							}
						if (
							(p.promise(v),
							(c.url = ((e || c.url || vt.href) + "").replace(
								Nt,
								vt.protocol + "//",
							)),
							(c.type = t.method || t.type || c.method || c.type),
							(c.dataTypes = (c.dataType || "*").toLowerCase().match(N) || [
								"",
							]),
							null == c.crossDomain)
						) {
							d = L.createElement("a")
							try {
								;(d.href = c.url),
									(d.href = d.href),
									(c.crossDomain =
										Rt.protocol + "//" + Rt.host != d.protocol + "//" + d.host)
							} catch (e) {
								c.crossDomain = !0
							}
						}
						if (
							(c.data &&
								c.processData &&
								"string" != typeof c.data &&
								(c.data = D.param(c.data, c.traditional)),
							Jt(Ct, c, t, v),
							u)
						)
							return v
						for (l in ((_ = D.event && c.global) &&
							0 == D.active++ &&
							D.event.trigger("ajaxStart"),
						(c.type = c.type.toUpperCase()),
						(c.hasContent = !Wt.test(c.type)),
						(r = c.url.replace(Pt, "")),
						c.hasContent
							? c.data &&
							  c.processData &&
							  0 ===
									(c.contentType || "").indexOf(
										"application/x-www-form-urlencoded",
									) &&
							  (c.data = c.data.replace(Ot, "+"))
							: ((m = c.url.slice(r.length)),
							  c.data &&
									(c.processData || "string" == typeof c.data) &&
									((r += (wt.test(r) ? "&" : "?") + c.data), delete c.data),
							  !1 === c.cache &&
									((r = r.replace(Et, "$1")),
									(m = (wt.test(r) ? "&" : "?") + "_=" + Tt.guid++ + m)),
							  (c.url = r + m)),
						c.ifModified &&
							(D.lastModified[r] &&
								v.setRequestHeader("If-Modified-Since", D.lastModified[r]),
							D.etag[r] && v.setRequestHeader("If-None-Match", D.etag[r])),
						((c.data && c.hasContent && !1 !== c.contentType) ||
							t.contentType) &&
							v.setRequestHeader("Content-Type", c.contentType),
						v.setRequestHeader(
							"Accept",
							c.dataTypes[0] && c.accepts[c.dataTypes[0]]
								? c.accepts[c.dataTypes[0]] +
										("*" !== c.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
								: c.accepts["*"],
						),
						c.headers))
							v.setRequestHeader(l, c.headers[l])
						if (c.beforeSend && (!1 === c.beforeSend.call(h, v, c) || u))
							return v.abort()
						if (
							((k = "abort"),
							M.add(c.complete),
							v.done(c.success),
							v.fail(c.error),
							(a = Jt(Ft, c, t, v)))
						) {
							if (((v.readyState = 1), _ && f.trigger("ajaxSend", [v, c]), u))
								return v
							c.async &&
								c.timeout > 0 &&
								(o = n.setTimeout(function () {
									v.abort("timeout")
								}, c.timeout))
							try {
								;(u = !1), a.send(Y, T)
							} catch (e) {
								if (u) throw e
								T(-1, e)
							}
						} else T(-1, "No Transport")
						function T(e, t, i, d) {
							var l,
								m,
								L,
								Y,
								g,
								k = t
							u ||
								((u = !0),
								o && n.clearTimeout(o),
								(a = void 0),
								(s = d || ""),
								(v.readyState = e > 0 ? 4 : 0),
								(l = (e >= 200 && e < 300) || 304 === e),
								i &&
									(Y = (function (e, t, n) {
										for (
											var a, r, s, i, o = e.contents, d = e.dataTypes;
											"*" === d[0];

										)
											d.shift(),
												void 0 === a &&
													(a =
														e.mimeType || t.getResponseHeader("Content-Type"))
										if (a)
											for (r in o)
												if (o[r] && o[r].test(a)) {
													d.unshift(r)
													break
												}
										if (d[0] in n) s = d[0]
										else {
											for (r in n) {
												if (!d[0] || e.converters[r + " " + d[0]]) {
													s = r
													break
												}
												i || (i = r)
											}
											s = s || i
										}
										if (s) return s !== d[0] && d.unshift(s), n[s]
									})(c, v, i)),
								!l &&
									D.inArray("script", c.dataTypes) > -1 &&
									(c.converters["text script"] = function () {}),
								(Y = (function (e, t, n, a) {
									var r,
										s,
										i,
										o,
										d,
										u = {},
										_ = e.dataTypes.slice()
									if (_[1])
										for (i in e.converters) u[i.toLowerCase()] = e.converters[i]
									for (s = _.shift(); s; )
										if (
											(e.responseFields[s] && (n[e.responseFields[s]] = t),
											!d &&
												a &&
												e.dataFilter &&
												(t = e.dataFilter(t, e.dataType)),
											(d = s),
											(s = _.shift()))
										)
											if ("*" === s) s = d
											else if ("*" !== d && d !== s) {
												if (!(i = u[d + " " + s] || u["* " + s]))
													for (r in u)
														if (
															(o = r.split(" "))[1] === s &&
															(i = u[d + " " + o[0]] || u["* " + o[0]])
														) {
															!0 === i
																? (i = u[r])
																: !0 !== u[r] && ((s = o[0]), _.unshift(o[1]))
															break
														}
												if (!0 !== i)
													if (i && e.throws) t = i(t)
													else
														try {
															t = i(t)
														} catch (e) {
															return {
																state: "parsererror",
																error: i
																	? e
																	: "No conversion from " + d + " to " + s,
															}
														}
											}
									return { state: "success", data: t }
								})(c, Y, v, l)),
								l
									? (c.ifModified &&
											((g = v.getResponseHeader("Last-Modified")) &&
												(D.lastModified[r] = g),
											(g = v.getResponseHeader("etag")) && (D.etag[r] = g)),
									  204 === e || "HEAD" === c.type
											? (k = "nocontent")
											: 304 === e
											? (k = "notmodified")
											: ((k = Y.state), (m = Y.data), (l = !(L = Y.error))))
									: ((L = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
								(v.status = e),
								(v.statusText = (t || k) + ""),
								l ? p.resolveWith(h, [m, k, v]) : p.rejectWith(h, [v, k, L]),
								v.statusCode(y),
								(y = void 0),
								_ &&
									f.trigger(l ? "ajaxSuccess" : "ajaxError", [v, c, l ? m : L]),
								M.fireWith(h, [v, k]),
								_ &&
									(f.trigger("ajaxComplete", [v, c]),
									--D.active || D.event.trigger("ajaxStop")))
						}
						return v
					},
					getJSON: function (e, t, n) {
						return D.get(e, t, n, "json")
					},
					getScript: function (e, t) {
						return D.get(e, void 0, t, "script")
					},
				}),
				D.each(["get", "post"], function (e, t) {
					D[t] = function (e, n, a, r) {
						return (
							M(n) && ((r = r || a), (a = n), (n = void 0)),
							D.ajax(
								D.extend(
									{ url: e, type: t, dataType: r, data: n, success: a },
									D.isPlainObject(e) && e,
								),
							)
						)
					}
				}),
				D.ajaxPrefilter(function (e) {
					var t
					for (t in e.headers)
						"content-type" === t.toLowerCase() &&
							(e.contentType = e.headers[t] || "")
				}),
				(D._evalUrl = function (e, t, n) {
					return D.ajax({
						url: e,
						type: "GET",
						dataType: "script",
						cache: !0,
						async: !1,
						global: !1,
						converters: { "text script": function () {} },
						dataFilter: function (e) {
							D.globalEval(e, t, n)
						},
					})
				}),
				D.fn.extend({
					wrapAll: function (e) {
						var t
						return (
							this[0] &&
								(M(e) && (e = e.call(this[0])),
								(t = D(e, this[0].ownerDocument).eq(0).clone(!0)),
								this[0].parentNode && t.insertBefore(this[0]),
								t
									.map(function () {
										for (var e = this; e.firstElementChild; )
											e = e.firstElementChild
										return e
									})
									.append(this)),
							this
						)
					},
					wrapInner: function (e) {
						return M(e)
							? this.each(function (t) {
									D(this).wrapInner(e.call(this, t))
							  })
							: this.each(function () {
									var t = D(this),
										n = t.contents()
									n.length ? n.wrapAll(e) : t.append(e)
							  })
					},
					wrap: function (e) {
						var t = M(e)
						return this.each(function (n) {
							D(this).wrapAll(t ? e.call(this, n) : e)
						})
					},
					unwrap: function (e) {
						return (
							this.parent(e)
								.not("body")
								.each(function () {
									D(this).replaceWith(this.childNodes)
								}),
							this
						)
					},
				}),
				(D.expr.pseudos.hidden = function (e) {
					return !D.expr.pseudos.visible(e)
				}),
				(D.expr.pseudos.visible = function (e) {
					return !!(
						e.offsetWidth ||
						e.offsetHeight ||
						e.getClientRects().length
					)
				}),
				(D.ajaxSettings.xhr = function () {
					try {
						return new n.XMLHttpRequest()
					} catch (e) {}
				})
			var Ut = { 0: 200, 1223: 204 },
				Bt = D.ajaxSettings.xhr()
			;(p.cors = !!Bt && "withCredentials" in Bt),
				(p.ajax = Bt = !!Bt),
				D.ajaxTransport(function (e) {
					var t, a
					if (p.cors || (Bt && !e.crossDomain))
						return {
							send: function (r, s) {
								var i,
									o = e.xhr()
								if (
									(o.open(e.type, e.url, e.async, e.username, e.password),
									e.xhrFields)
								)
									for (i in e.xhrFields) o[i] = e.xhrFields[i]
								for (i in (e.mimeType &&
									o.overrideMimeType &&
									o.overrideMimeType(e.mimeType),
								e.crossDomain ||
									r["X-Requested-With"] ||
									(r["X-Requested-With"] = "XMLHttpRequest"),
								r))
									o.setRequestHeader(i, r[i])
								;(t = function (e) {
									return function () {
										t &&
											((t = a = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null),
											"abort" === e
												? o.abort()
												: "error" === e
												? "number" != typeof o.status
													? s(0, "error")
													: s(o.status, o.statusText)
												: s(
														Ut[o.status] || o.status,
														o.statusText,
														"text" !== (o.responseType || "text") ||
															"string" != typeof o.responseText
															? { binary: o.response }
															: { text: o.responseText },
														o.getAllResponseHeaders(),
												  ))
									}
								}),
									(o.onload = t()),
									(a = o.onerror = o.ontimeout = t("error")),
									void 0 !== o.onabort
										? (o.onabort = a)
										: (o.onreadystatechange = function () {
												4 === o.readyState &&
													n.setTimeout(function () {
														t && a()
													})
										  }),
									(t = t("abort"))
								try {
									o.send((e.hasContent && e.data) || null)
								} catch (e) {
									if (t) throw e
								}
							},
							abort: function () {
								t && t()
							},
						}
				}),
				D.ajaxPrefilter(function (e) {
					e.crossDomain && (e.contents.script = !1)
				}),
				D.ajaxSetup({
					accepts: {
						script:
							"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
					},
					contents: { script: /\b(?:java|ecma)script\b/ },
					converters: {
						"text script": function (e) {
							return D.globalEval(e), e
						},
					},
				}),
				D.ajaxPrefilter("script", function (e) {
					void 0 === e.cache && (e.cache = !1),
						e.crossDomain && (e.type = "GET")
				}),
				D.ajaxTransport("script", function (e) {
					var t, n
					if (e.crossDomain || e.scriptAttrs)
						return {
							send: function (a, r) {
								;(t = D("<script>")
									.attr(e.scriptAttrs || {})
									.prop({ charset: e.scriptCharset, src: e.url })
									.on(
										"load error",
										(n = function (e) {
											t.remove(),
												(n = null),
												e && r("error" === e.type ? 404 : 200, e.type)
										}),
									)),
									L.head.appendChild(t[0])
							},
							abort: function () {
								n && n()
							},
						}
				})
			var Gt,
				Vt = [],
				$t = /(=)\?(?=&|$)|\?\?/
			D.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function () {
					var e = Vt.pop() || D.expando + "_" + Tt.guid++
					return (this[e] = !0), e
				},
			}),
				D.ajaxPrefilter("json jsonp", function (e, t, a) {
					var r,
						s,
						i,
						o =
							!1 !== e.jsonp &&
							($t.test(e.url)
								? "url"
								: "string" == typeof e.data &&
								  0 ===
										(e.contentType || "").indexOf(
											"application/x-www-form-urlencoded",
										) &&
								  $t.test(e.data) &&
								  "data")
					if (o || "jsonp" === e.dataTypes[0])
						return (
							(r = e.jsonpCallback = M(e.jsonpCallback)
								? e.jsonpCallback()
								: e.jsonpCallback),
							o
								? (e[o] = e[o].replace($t, "$1" + r))
								: !1 !== e.jsonp &&
								  (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
							(e.converters["script json"] = function () {
								return i || D.error(r + " was not called"), i[0]
							}),
							(e.dataTypes[0] = "json"),
							(s = n[r]),
							(n[r] = function () {
								i = arguments
							}),
							a.always(function () {
								void 0 === s ? D(n).removeProp(r) : (n[r] = s),
									e[r] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(r)),
									i && M(s) && s(i[0]),
									(i = s = void 0)
							}),
							"script"
						)
				}),
				(p.createHTMLDocument =
					(((Gt = L.implementation.createHTMLDocument("").body).innerHTML =
						"<form></form><form></form>"),
					2 === Gt.childNodes.length)),
				(D.parseHTML = function (e, t, n) {
					return "string" != typeof e
						? []
						: ("boolean" == typeof t && ((n = t), (t = !1)),
						  t ||
								(p.createHTMLDocument
									? (((a = (t = L.implementation.createHTMLDocument(
											"",
									  )).createElement("base")).href = L.location.href),
									  t.head.appendChild(a))
									: (t = L)),
						  (s = !n && []),
						  (r = x.exec(e))
								? [t.createElement(r[1])]
								: ((r = ke([e], t, s)),
								  s && s.length && D(s).remove(),
								  D.merge([], r.childNodes)))
					var a, r, s
				}),
				(D.fn.load = function (e, t, n) {
					var a,
						r,
						s,
						i = this,
						o = e.indexOf(" ")
					return (
						o > -1 && ((a = yt(e.slice(o))), (e = e.slice(0, o))),
						M(t)
							? ((n = t), (t = void 0))
							: t && "object" == typeof t && (r = "POST"),
						i.length > 0 &&
							D.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
								.done(function (e) {
									;(s = arguments),
										i.html(a ? D("<div>").append(D.parseHTML(e)).find(a) : e)
								})
								.always(
									n &&
										function (e, t) {
											i.each(function () {
												n.apply(this, s || [e.responseText, t, e])
											})
										},
								),
						this
					)
				}),
				(D.expr.pseudos.animated = function (e) {
					return D.grep(D.timers, function (t) {
						return e === t.elem
					}).length
				}),
				(D.offset = {
					setOffset: function (e, t, n) {
						var a,
							r,
							s,
							i,
							o,
							d,
							u = D.css(e, "position"),
							_ = D(e),
							l = {}
						"static" === u && (e.style.position = "relative"),
							(o = _.offset()),
							(s = D.css(e, "top")),
							(d = D.css(e, "left")),
							("absolute" === u || "fixed" === u) &&
							(s + d).indexOf("auto") > -1
								? ((i = (a = _.position()).top), (r = a.left))
								: ((i = parseFloat(s) || 0), (r = parseFloat(d) || 0)),
							M(t) && (t = t.call(e, n, D.extend({}, o))),
							null != t.top && (l.top = t.top - o.top + i),
							null != t.left && (l.left = t.left - o.left + r),
							"using" in t
								? t.using.call(e, l)
								: ("number" == typeof l.top && (l.top += "px"),
								  "number" == typeof l.left && (l.left += "px"),
								  _.css(l))
					},
				}),
				D.fn.extend({
					offset: function (e) {
						if (arguments.length)
							return void 0 === e
								? this
								: this.each(function (t) {
										D.offset.setOffset(this, e, t)
								  })
						var t,
							n,
							a = this[0]
						return a
							? a.getClientRects().length
								? ((t = a.getBoundingClientRect()),
								  (n = a.ownerDocument.defaultView),
								  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
								: { top: 0, left: 0 }
							: void 0
					},
					position: function () {
						if (this[0]) {
							var e,
								t,
								n,
								a = this[0],
								r = { top: 0, left: 0 }
							if ("fixed" === D.css(a, "position"))
								t = a.getBoundingClientRect()
							else {
								for (
									t = this.offset(),
										n = a.ownerDocument,
										e = a.offsetParent || n.documentElement;
									e &&
									(e === n.body || e === n.documentElement) &&
									"static" === D.css(e, "position");

								)
									e = e.parentNode
								e &&
									e !== a &&
									1 === e.nodeType &&
									(((r = D(e).offset()).top += D.css(e, "borderTopWidth", !0)),
									(r.left += D.css(e, "borderLeftWidth", !0)))
							}
							return {
								top: t.top - r.top - D.css(a, "marginTop", !0),
								left: t.left - r.left - D.css(a, "marginLeft", !0),
							}
						}
					},
					offsetParent: function () {
						return this.map(function () {
							for (
								var e = this.offsetParent;
								e && "static" === D.css(e, "position");

							)
								e = e.offsetParent
							return e || se
						})
					},
				}),
				D.each(
					{ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
					function (e, t) {
						var n = "pageYOffset" === t
						D.fn[e] = function (a) {
							return q(
								this,
								function (e, a, r) {
									var s
									if (
										(y(e) ? (s = e) : 9 === e.nodeType && (s = e.defaultView),
										void 0 === r)
									)
										return s ? s[t] : e[a]
									s
										? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset)
										: (e[a] = r)
								},
								e,
								a,
								arguments.length,
							)
						}
					},
				),
				D.each(["top", "left"], function (e, t) {
					D.cssHooks[t] = Be(p.pixelPosition, function (e, n) {
						if (n)
							return (n = Ue(e, t)), Re.test(n) ? D(e).position()[t] + "px" : n
					})
				}),
				D.each({ Height: "height", Width: "width" }, function (e, t) {
					D.each(
						{ padding: "inner" + e, content: t, "": "outer" + e },
						function (n, a) {
							D.fn[a] = function (r, s) {
								var i = arguments.length && (n || "boolean" != typeof r),
									o = n || (!0 === r || !0 === s ? "margin" : "border")
								return q(
									this,
									function (t, n, r) {
										var s
										return y(t)
											? 0 === a.indexOf("outer")
												? t["inner" + e]
												: t.document.documentElement["client" + e]
											: 9 === t.nodeType
											? ((s = t.documentElement),
											  Math.max(
													t.body["scroll" + e],
													s["scroll" + e],
													t.body["offset" + e],
													s["offset" + e],
													s["client" + e],
											  ))
											: void 0 === r
											? D.css(t, n, o)
											: D.style(t, n, r, o)
									},
									t,
									i ? r : void 0,
									i,
								)
							}
						},
					)
				}),
				D.each(
					[
						"ajaxStart",
						"ajaxStop",
						"ajaxComplete",
						"ajaxError",
						"ajaxSuccess",
						"ajaxSend",
					],
					function (e, t) {
						D.fn[t] = function (e) {
							return this.on(t, e)
						}
					},
				),
				D.fn.extend({
					bind: function (e, t, n) {
						return this.on(e, null, t, n)
					},
					unbind: function (e, t) {
						return this.off(e, null, t)
					},
					delegate: function (e, t, n, a) {
						return this.on(t, e, n, a)
					},
					undelegate: function (e, t, n) {
						return 1 === arguments.length
							? this.off(e, "**")
							: this.off(t, e || "**", n)
					},
					hover: function (e, t) {
						return this.mouseenter(e).mouseleave(t || e)
					},
				}),
				D.each(
					"blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
						" ",
					),
					function (e, t) {
						D.fn[t] = function (e, n) {
							return arguments.length > 0
								? this.on(t, null, e, n)
								: this.trigger(t)
						}
					},
				)
			var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
			;(D.proxy = function (e, t) {
				var n, a, r
				if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), M(e)))
					return (
						(a = o.call(arguments, 2)),
						((r = function () {
							return e.apply(t || this, a.concat(o.call(arguments)))
						}).guid = e.guid = e.guid || D.guid++),
						r
					)
			}),
				(D.holdReady = function (e) {
					e ? D.readyWait++ : D.ready(!0)
				}),
				(D.isArray = Array.isArray),
				(D.parseJSON = JSON.parse),
				(D.nodeName = H),
				(D.isFunction = M),
				(D.isWindow = y),
				(D.camelCase = V),
				(D.type = k),
				(D.now = Date.now),
				(D.isNumeric = function (e) {
					var t = D.type(e)
					return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
				}),
				(D.trim = function (e) {
					return null == e ? "" : (e + "").replace(Kt, "")
				}),
				void 0 ===
					(a = function () {
						return D
					}.apply(t, [])) || (e.exports = a)
			var Zt = n.jQuery,
				Xt = n.$
			return (
				(D.noConflict = function (e) {
					return (
						n.$ === D && (n.$ = Xt), e && n.jQuery === D && (n.jQuery = Zt), D
					)
				}),
				void 0 === r && (n.jQuery = n.$ = D),
				D
			)
		})
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("af", {
				months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split(
					"_",
				),
				weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split(
					"_",
				),
				weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
				weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
				meridiemParse: /vm|nm/i,
				isPM: function (e) {
					return /^nm$/i.test(e)
				},
				meridiem: function (e, t, n) {
					return e < 12 ? (n ? "vm" : "VM") : n ? "nm" : "NM"
				},
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Vandag om] LT",
					nextDay: "[Môre om] LT",
					nextWeek: "dddd [om] LT",
					lastDay: "[Gister om] LT",
					lastWeek: "[Laas] dddd [om] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "oor %s",
					past: "%s gelede",
					s: "'n paar sekondes",
					ss: "%d sekondes",
					m: "'n minuut",
					mm: "%d minute",
					h: "'n uur",
					hh: "%d ure",
					d: "'n dag",
					dd: "%d dae",
					M: "'n maand",
					MM: "%d maande",
					y: "'n jaar",
					yy: "%d jaar",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
				ordinal: function (e) {
					return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "١",
					2: "٢",
					3: "٣",
					4: "٤",
					5: "٥",
					6: "٦",
					7: "٧",
					8: "٨",
					9: "٩",
					0: "٠",
				},
				n = {
					"١": "1",
					"٢": "2",
					"٣": "3",
					"٤": "4",
					"٥": "5",
					"٦": "6",
					"٧": "7",
					"٨": "8",
					"٩": "9",
					"٠": "0",
				},
				a = function (e) {
					return 0 === e
						? 0
						: 1 === e
						? 1
						: 2 === e
						? 2
						: e % 100 >= 3 && e % 100 <= 10
						? 3
						: e % 100 >= 11
						? 4
						: 5
				},
				r = {
					s: [
						"أقل من ثانية",
						"ثانية واحدة",
						["ثانيتان", "ثانيتين"],
						"%d ثوان",
						"%d ثانية",
						"%d ثانية",
					],
					m: [
						"أقل من دقيقة",
						"دقيقة واحدة",
						["دقيقتان", "دقيقتين"],
						"%d دقائق",
						"%d دقيقة",
						"%d دقيقة",
					],
					h: [
						"أقل من ساعة",
						"ساعة واحدة",
						["ساعتان", "ساعتين"],
						"%d ساعات",
						"%d ساعة",
						"%d ساعة",
					],
					d: [
						"أقل من يوم",
						"يوم واحد",
						["يومان", "يومين"],
						"%d أيام",
						"%d يومًا",
						"%d يوم",
					],
					M: [
						"أقل من شهر",
						"شهر واحد",
						["شهران", "شهرين"],
						"%d أشهر",
						"%d شهرا",
						"%d شهر",
					],
					y: [
						"أقل من عام",
						"عام واحد",
						["عامان", "عامين"],
						"%d أعوام",
						"%d عامًا",
						"%d عام",
					],
				},
				s = function (e) {
					return function (t, n, s, i) {
						var o = a(t),
							d = r[e][a(t)]
						return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
					}
				},
				i = [
					"يناير",
					"فبراير",
					"مارس",
					"أبريل",
					"مايو",
					"يونيو",
					"يوليو",
					"أغسطس",
					"سبتمبر",
					"أكتوبر",
					"نوفمبر",
					"ديسمبر",
				]
			e.defineLocale("ar", {
				months: i,
				monthsShort: i,
				weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
					"_",
				),
				weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
				weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/‏M/‏YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				meridiemParse: /ص|م/,
				isPM: function (e) {
					return "م" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "ص" : "م"
				},
				calendar: {
					sameDay: "[اليوم عند الساعة] LT",
					nextDay: "[غدًا عند الساعة] LT",
					nextWeek: "dddd [عند الساعة] LT",
					lastDay: "[أمس عند الساعة] LT",
					lastWeek: "dddd [عند الساعة] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "بعد %s",
					past: "منذ %s",
					s: s("s"),
					ss: s("s"),
					m: s("m"),
					mm: s("m"),
					h: s("h"),
					hh: s("h"),
					d: s("d"),
					dd: s("d"),
					M: s("M"),
					MM: s("M"),
					y: s("y"),
					yy: s("y"),
				},
				preparse: function (e) {
					return e
						.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
							return n[e]
						})
						.replace(/،/g, ",")
				},
				postformat: function (e) {
					return e
						.replace(/\d/g, function (e) {
							return t[e]
						})
						.replace(/,/g, "،")
				},
				week: { dow: 6, doy: 12 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = function (e) {
					return 0 === e
						? 0
						: 1 === e
						? 1
						: 2 === e
						? 2
						: e % 100 >= 3 && e % 100 <= 10
						? 3
						: e % 100 >= 11
						? 4
						: 5
				},
				n = {
					s: [
						"أقل من ثانية",
						"ثانية واحدة",
						["ثانيتان", "ثانيتين"],
						"%d ثوان",
						"%d ثانية",
						"%d ثانية",
					],
					m: [
						"أقل من دقيقة",
						"دقيقة واحدة",
						["دقيقتان", "دقيقتين"],
						"%d دقائق",
						"%d دقيقة",
						"%d دقيقة",
					],
					h: [
						"أقل من ساعة",
						"ساعة واحدة",
						["ساعتان", "ساعتين"],
						"%d ساعات",
						"%d ساعة",
						"%d ساعة",
					],
					d: [
						"أقل من يوم",
						"يوم واحد",
						["يومان", "يومين"],
						"%d أيام",
						"%d يومًا",
						"%d يوم",
					],
					M: [
						"أقل من شهر",
						"شهر واحد",
						["شهران", "شهرين"],
						"%d أشهر",
						"%d شهرا",
						"%d شهر",
					],
					y: [
						"أقل من عام",
						"عام واحد",
						["عامان", "عامين"],
						"%d أعوام",
						"%d عامًا",
						"%d عام",
					],
				},
				a = function (e) {
					return function (a, r, s, i) {
						var o = t(a),
							d = n[e][t(a)]
						return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, a)
					}
				},
				r = [
					"جانفي",
					"فيفري",
					"مارس",
					"أفريل",
					"ماي",
					"جوان",
					"جويلية",
					"أوت",
					"سبتمبر",
					"أكتوبر",
					"نوفمبر",
					"ديسمبر",
				]
			e.defineLocale("ar-dz", {
				months: r,
				monthsShort: r,
				weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
					"_",
				),
				weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
				weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/‏M/‏YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				meridiemParse: /ص|م/,
				isPM: function (e) {
					return "م" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "ص" : "م"
				},
				calendar: {
					sameDay: "[اليوم عند الساعة] LT",
					nextDay: "[غدًا عند الساعة] LT",
					nextWeek: "dddd [عند الساعة] LT",
					lastDay: "[أمس عند الساعة] LT",
					lastWeek: "dddd [عند الساعة] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "بعد %s",
					past: "منذ %s",
					s: a("s"),
					ss: a("s"),
					m: a("m"),
					mm: a("m"),
					h: a("h"),
					hh: a("h"),
					d: a("d"),
					dd: a("d"),
					M: a("M"),
					MM: a("M"),
					y: a("y"),
					yy: a("y"),
				},
				postformat: function (e) {
					return e.replace(/,/g, "،")
				},
				week: { dow: 0, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("ar-kw", {
				months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
					"_",
				),
				monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
					"_",
				),
				weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
					"_",
				),
				weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
				weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[اليوم على الساعة] LT",
					nextDay: "[غدا على الساعة] LT",
					nextWeek: "dddd [على الساعة] LT",
					lastDay: "[أمس على الساعة] LT",
					lastWeek: "dddd [على الساعة] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "في %s",
					past: "منذ %s",
					s: "ثوان",
					ss: "%d ثانية",
					m: "دقيقة",
					mm: "%d دقائق",
					h: "ساعة",
					hh: "%d ساعات",
					d: "يوم",
					dd: "%d أيام",
					M: "شهر",
					MM: "%d أشهر",
					y: "سنة",
					yy: "%d سنوات",
				},
				week: { dow: 0, doy: 12 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "1",
					2: "2",
					3: "3",
					4: "4",
					5: "5",
					6: "6",
					7: "7",
					8: "8",
					9: "9",
					0: "0",
				},
				n = function (e) {
					return 0 === e
						? 0
						: 1 === e
						? 1
						: 2 === e
						? 2
						: e % 100 >= 3 && e % 100 <= 10
						? 3
						: e % 100 >= 11
						? 4
						: 5
				},
				a = {
					s: [
						"أقل من ثانية",
						"ثانية واحدة",
						["ثانيتان", "ثانيتين"],
						"%d ثوان",
						"%d ثانية",
						"%d ثانية",
					],
					m: [
						"أقل من دقيقة",
						"دقيقة واحدة",
						["دقيقتان", "دقيقتين"],
						"%d دقائق",
						"%d دقيقة",
						"%d دقيقة",
					],
					h: [
						"أقل من ساعة",
						"ساعة واحدة",
						["ساعتان", "ساعتين"],
						"%d ساعات",
						"%d ساعة",
						"%d ساعة",
					],
					d: [
						"أقل من يوم",
						"يوم واحد",
						["يومان", "يومين"],
						"%d أيام",
						"%d يومًا",
						"%d يوم",
					],
					M: [
						"أقل من شهر",
						"شهر واحد",
						["شهران", "شهرين"],
						"%d أشهر",
						"%d شهرا",
						"%d شهر",
					],
					y: [
						"أقل من عام",
						"عام واحد",
						["عامان", "عامين"],
						"%d أعوام",
						"%d عامًا",
						"%d عام",
					],
				},
				r = function (e) {
					return function (t, r, s, i) {
						var o = n(t),
							d = a[e][n(t)]
						return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t)
					}
				},
				s = [
					"يناير",
					"فبراير",
					"مارس",
					"أبريل",
					"مايو",
					"يونيو",
					"يوليو",
					"أغسطس",
					"سبتمبر",
					"أكتوبر",
					"نوفمبر",
					"ديسمبر",
				]
			e.defineLocale("ar-ly", {
				months: s,
				monthsShort: s,
				weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
					"_",
				),
				weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
				weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/‏M/‏YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				meridiemParse: /ص|م/,
				isPM: function (e) {
					return "م" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "ص" : "م"
				},
				calendar: {
					sameDay: "[اليوم عند الساعة] LT",
					nextDay: "[غدًا عند الساعة] LT",
					nextWeek: "dddd [عند الساعة] LT",
					lastDay: "[أمس عند الساعة] LT",
					lastWeek: "dddd [عند الساعة] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "بعد %s",
					past: "منذ %s",
					s: r("s"),
					ss: r("s"),
					m: r("m"),
					mm: r("m"),
					h: r("h"),
					hh: r("h"),
					d: r("d"),
					dd: r("d"),
					M: r("M"),
					MM: r("M"),
					y: r("y"),
					yy: r("y"),
				},
				preparse: function (e) {
					return e.replace(/،/g, ",")
				},
				postformat: function (e) {
					return e
						.replace(/\d/g, function (e) {
							return t[e]
						})
						.replace(/,/g, "،")
				},
				week: { dow: 6, doy: 12 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("ar-ma", {
				months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
					"_",
				),
				monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
					"_",
				),
				weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
					"_",
				),
				weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
				weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[اليوم على الساعة] LT",
					nextDay: "[غدا على الساعة] LT",
					nextWeek: "dddd [على الساعة] LT",
					lastDay: "[أمس على الساعة] LT",
					lastWeek: "dddd [على الساعة] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "في %s",
					past: "منذ %s",
					s: "ثوان",
					ss: "%d ثانية",
					m: "دقيقة",
					mm: "%d دقائق",
					h: "ساعة",
					hh: "%d ساعات",
					d: "يوم",
					dd: "%d أيام",
					M: "شهر",
					MM: "%d أشهر",
					y: "سنة",
					yy: "%d سنوات",
				},
				week: { dow: 6, doy: 12 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "١",
					2: "٢",
					3: "٣",
					4: "٤",
					5: "٥",
					6: "٦",
					7: "٧",
					8: "٨",
					9: "٩",
					0: "٠",
				},
				n = {
					"١": "1",
					"٢": "2",
					"٣": "3",
					"٤": "4",
					"٥": "5",
					"٦": "6",
					"٧": "7",
					"٨": "8",
					"٩": "9",
					"٠": "0",
				}
			e.defineLocale("ar-sa", {
				months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
					"_",
				),
				monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
					"_",
				),
				weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
					"_",
				),
				weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
				weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				meridiemParse: /ص|م/,
				isPM: function (e) {
					return "م" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "ص" : "م"
				},
				calendar: {
					sameDay: "[اليوم على الساعة] LT",
					nextDay: "[غدا على الساعة] LT",
					nextWeek: "dddd [على الساعة] LT",
					lastDay: "[أمس على الساعة] LT",
					lastWeek: "dddd [على الساعة] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "في %s",
					past: "منذ %s",
					s: "ثوان",
					ss: "%d ثانية",
					m: "دقيقة",
					mm: "%d دقائق",
					h: "ساعة",
					hh: "%d ساعات",
					d: "يوم",
					dd: "%d أيام",
					M: "شهر",
					MM: "%d أشهر",
					y: "سنة",
					yy: "%d سنوات",
				},
				preparse: function (e) {
					return e
						.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
							return n[e]
						})
						.replace(/،/g, ",")
				},
				postformat: function (e) {
					return e
						.replace(/\d/g, function (e) {
							return t[e]
						})
						.replace(/,/g, "،")
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("ar-tn", {
				months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
					"_",
				),
				monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
					"_",
				),
				weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
					"_",
				),
				weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
				weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[اليوم على الساعة] LT",
					nextDay: "[غدا على الساعة] LT",
					nextWeek: "dddd [على الساعة] LT",
					lastDay: "[أمس على الساعة] LT",
					lastWeek: "dddd [على الساعة] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "في %s",
					past: "منذ %s",
					s: "ثوان",
					ss: "%d ثانية",
					m: "دقيقة",
					mm: "%d دقائق",
					h: "ساعة",
					hh: "%d ساعات",
					d: "يوم",
					dd: "%d أيام",
					M: "شهر",
					MM: "%d أشهر",
					y: "سنة",
					yy: "%d سنوات",
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
				1: "-inci",
				5: "-inci",
				8: "-inci",
				70: "-inci",
				80: "-inci",
				2: "-nci",
				7: "-nci",
				20: "-nci",
				50: "-nci",
				3: "-üncü",
				4: "-üncü",
				100: "-üncü",
				6: "-ncı",
				9: "-uncu",
				10: "-uncu",
				30: "-uncu",
				60: "-ıncı",
				90: "-ıncı",
			}
			e.defineLocale("az", {
				months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split(
					"_",
				),
				monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split(
					"_",
				),
				weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split(
					"_",
				),
				weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
				weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[bugün saat] LT",
					nextDay: "[sabah saat] LT",
					nextWeek: "[gələn həftə] dddd [saat] LT",
					lastDay: "[dünən] LT",
					lastWeek: "[keçən həftə] dddd [saat] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s sonra",
					past: "%s əvvəl",
					s: "birneçə saniyə",
					ss: "%d saniyə",
					m: "bir dəqiqə",
					mm: "%d dəqiqə",
					h: "bir saat",
					hh: "%d saat",
					d: "bir gün",
					dd: "%d gün",
					M: "bir ay",
					MM: "%d ay",
					y: "bir il",
					yy: "%d il",
				},
				meridiemParse: /gecə|səhər|gündüz|axşam/,
				isPM: function (e) {
					return /^(gündüz|axşam)$/.test(e)
				},
				meridiem: function (e, t, n) {
					return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
				ordinal: function (e) {
					if (0 === e) return e + "-ıncı"
					var n = e % 10
					return e + (t[n] || t[(e % 100) - n] || t[e >= 100 ? 100 : null])
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n) {
				var a, r
				return "m" === n
					? t
						? "хвіліна"
						: "хвіліну"
					: "h" === n
					? t
						? "гадзіна"
						: "гадзіну"
					: e +
					  " " +
					  ((a = +e),
					  (r = {
							ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
							mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
							hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
							dd: "дзень_дні_дзён",
							MM: "месяц_месяцы_месяцаў",
							yy: "год_гады_гадоў",
					  }[n].split("_")),
					  a % 10 == 1 && a % 100 != 11
							? r[0]
							: a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
							? r[1]
							: r[2])
			}
			e.defineLocale("be", {
				months: {
					format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split(
						"_",
					),
					standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split(
						"_",
					),
				},
				monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split(
					"_",
				),
				weekdays: {
					format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split(
						"_",
					),
					standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split(
						"_",
					),
					isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
				},
				weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
				weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY г.",
					LLL: "D MMMM YYYY г., HH:mm",
					LLLL: "dddd, D MMMM YYYY г., HH:mm",
				},
				calendar: {
					sameDay: "[Сёння ў] LT",
					nextDay: "[Заўтра ў] LT",
					lastDay: "[Учора ў] LT",
					nextWeek: function () {
						return "[У] dddd [ў] LT"
					},
					lastWeek: function () {
						switch (this.day()) {
							case 0:
							case 3:
							case 5:
							case 6:
								return "[У мінулую] dddd [ў] LT"
							case 1:
							case 2:
							case 4:
								return "[У мінулы] dddd [ў] LT"
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "праз %s",
					past: "%s таму",
					s: "некалькі секунд",
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: "дзень",
					dd: t,
					M: "месяц",
					MM: t,
					y: "год",
					yy: t,
				},
				meridiemParse: /ночы|раніцы|дня|вечара/,
				isPM: function (e) {
					return /^(дня|вечара)$/.test(e)
				},
				meridiem: function (e, t, n) {
					return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
				ordinal: function (e, t) {
					switch (t) {
						case "M":
						case "d":
						case "DDD":
						case "w":
						case "W":
							return (e % 10 != 2 && e % 10 != 3) ||
								e % 100 == 12 ||
								e % 100 == 13
								? e + "-ы"
								: e + "-і"
						case "D":
							return e + "-га"
						default:
							return e
					}
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("bg", {
				months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split(
					"_",
				),
				monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split(
					"_",
				),
				weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split(
					"_",
				),
				weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
				weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "D.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY H:mm",
					LLLL: "dddd, D MMMM YYYY H:mm",
				},
				calendar: {
					sameDay: "[Днес в] LT",
					nextDay: "[Утре в] LT",
					nextWeek: "dddd [в] LT",
					lastDay: "[Вчера в] LT",
					lastWeek: function () {
						switch (this.day()) {
							case 0:
							case 3:
							case 6:
								return "[Миналата] dddd [в] LT"
							case 1:
							case 2:
							case 4:
							case 5:
								return "[Миналия] dddd [в] LT"
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "след %s",
					past: "преди %s",
					s: "няколко секунди",
					ss: "%d секунди",
					m: "минута",
					mm: "%d минути",
					h: "час",
					hh: "%d часа",
					d: "ден",
					dd: "%d дена",
					M: "месец",
					MM: "%d месеца",
					y: "година",
					yy: "%d години",
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
				ordinal: function (e) {
					var t = e % 10,
						n = e % 100
					return 0 === e
						? e + "-ев"
						: 0 === n
						? e + "-ен"
						: n > 10 && n < 20
						? e + "-ти"
						: 1 === t
						? e + "-ви"
						: 2 === t
						? e + "-ри"
						: 7 === t || 8 === t
						? e + "-ми"
						: e + "-ти"
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("bm", {
				months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split(
					"_",
				),
				monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split(
					"_",
				),
				weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
				weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
				weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "MMMM [tile] D [san] YYYY",
					LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
					LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
				},
				calendar: {
					sameDay: "[Bi lɛrɛ] LT",
					nextDay: "[Sini lɛrɛ] LT",
					nextWeek: "dddd [don lɛrɛ] LT",
					lastDay: "[Kunu lɛrɛ] LT",
					lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s kɔnɔ",
					past: "a bɛ %s bɔ",
					s: "sanga dama dama",
					ss: "sekondi %d",
					m: "miniti kelen",
					mm: "miniti %d",
					h: "lɛrɛ kelen",
					hh: "lɛrɛ %d",
					d: "tile kelen",
					dd: "tile %d",
					M: "kalo kelen",
					MM: "kalo %d",
					y: "san kelen",
					yy: "san %d",
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "১",
					2: "২",
					3: "৩",
					4: "৪",
					5: "৫",
					6: "৬",
					7: "৭",
					8: "৮",
					9: "৯",
					0: "০",
				},
				n = {
					"১": "1",
					"২": "2",
					"৩": "3",
					"৪": "4",
					"৫": "5",
					"৬": "6",
					"৭": "7",
					"৮": "8",
					"৯": "9",
					"০": "0",
				}
			e.defineLocale("bn", {
				months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
					"_",
				),
				monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split(
					"_",
				),
				weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
					"_",
				),
				weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
				weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
				longDateFormat: {
					LT: "A h:mm সময়",
					LTS: "A h:mm:ss সময়",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm সময়",
					LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
				},
				calendar: {
					sameDay: "[আজ] LT",
					nextDay: "[আগামীকাল] LT",
					nextWeek: "dddd, LT",
					lastDay: "[গতকাল] LT",
					lastWeek: "[গত] dddd, LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s পরে",
					past: "%s আগে",
					s: "কয়েক সেকেন্ড",
					ss: "%d সেকেন্ড",
					m: "এক মিনিট",
					mm: "%d মিনিট",
					h: "এক ঘন্টা",
					hh: "%d ঘন্টা",
					d: "এক দিন",
					dd: "%d দিন",
					M: "এক মাস",
					MM: "%d মাস",
					y: "এক বছর",
					yy: "%d বছর",
				},
				preparse: function (e) {
					return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
						return n[e]
					})
				},
				postformat: function (e) {
					return e.replace(/\d/g, function (e) {
						return t[e]
					})
				},
				meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						("রাত" === t && e >= 4) || ("দুপুর" === t && e < 5) || "বিকাল" === t
							? e + 12
							: e
					)
				},
				meridiem: function (e, t, n) {
					return e < 4
						? "রাত"
						: e < 10
						? "সকাল"
						: e < 17
						? "দুপুর"
						: e < 20
						? "বিকাল"
						: "রাত"
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "༡",
					2: "༢",
					3: "༣",
					4: "༤",
					5: "༥",
					6: "༦",
					7: "༧",
					8: "༨",
					9: "༩",
					0: "༠",
				},
				n = {
					"༡": "1",
					"༢": "2",
					"༣": "3",
					"༤": "4",
					"༥": "5",
					"༦": "6",
					"༧": "7",
					"༨": "8",
					"༩": "9",
					"༠": "0",
				}
			e.defineLocale("bo", {
				months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
					"_",
				),
				monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split(
					"_",
				),
				monthsShortRegex: /^(ཟླ་\d{1,2})/,
				monthsParseExact: !0,
				weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split(
					"_",
				),
				weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split(
					"_",
				),
				weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
				longDateFormat: {
					LT: "A h:mm",
					LTS: "A h:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm",
					LLLL: "dddd, D MMMM YYYY, A h:mm",
				},
				calendar: {
					sameDay: "[དི་རིང] LT",
					nextDay: "[སང་ཉིན] LT",
					nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
					lastDay: "[ཁ་སང] LT",
					lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s ལ་",
					past: "%s སྔན་ལ",
					s: "ལམ་སང",
					ss: "%d སྐར་ཆ།",
					m: "སྐར་མ་གཅིག",
					mm: "%d སྐར་མ",
					h: "ཆུ་ཚོད་གཅིག",
					hh: "%d ཆུ་ཚོད",
					d: "ཉིན་གཅིག",
					dd: "%d ཉིན་",
					M: "ཟླ་བ་གཅིག",
					MM: "%d ཟླ་བ",
					y: "ལོ་གཅིག",
					yy: "%d ལོ",
				},
				preparse: function (e) {
					return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
						return n[e]
					})
				},
				postformat: function (e) {
					return e.replace(/\d/g, function (e) {
						return t[e]
					})
				},
				meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						("མཚན་མོ" === t && e >= 4) ||
						("ཉིན་གུང" === t && e < 5) ||
						"དགོང་དག" === t
							? e + 12
							: e
					)
				},
				meridiem: function (e, t, n) {
					return e < 4
						? "མཚན་མོ"
						: e < 10
						? "ཞོགས་ཀས"
						: e < 17
						? "ཉིན་གུང"
						: e < 20
						? "དགོང་དག"
						: "མཚན་མོ"
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n) {
				return (
					e +
					" " +
					(function (e, t) {
						return 2 === t
							? (function (e) {
									var t = { m: "v", b: "v", d: "z" }
									return void 0 === t[e.charAt(0)]
										? e
										: t[e.charAt(0)] + e.substring(1)
							  })(e)
							: e
					})({ mm: "munutenn", MM: "miz", dd: "devezh" }[n], e)
				)
			}
			var n = [
					/^gen/i,
					/^c[ʼ\']hwe/i,
					/^meu/i,
					/^ebr/i,
					/^mae/i,
					/^(mez|eve)/i,
					/^gou/i,
					/^eos/i,
					/^gwe/i,
					/^her/i,
					/^du/i,
					/^ker/i,
				],
				a = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
				r = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i]
			e.defineLocale("br", {
				months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
					"_",
				),
				monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split(
					"_",
				),
				weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
				weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
				weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
				weekdaysParse: r,
				fullWeekdaysParse: [
					/^sul/i,
					/^lun/i,
					/^meurzh/i,
					/^merc[ʼ\']her/i,
					/^yaou/i,
					/^gwener/i,
					/^sadorn/i,
				],
				shortWeekdaysParse: [
					/^Sul/i,
					/^Lun/i,
					/^Meu/i,
					/^Mer/i,
					/^Yao/i,
					/^Gwe/i,
					/^Sad/i,
				],
				minWeekdaysParse: r,
				monthsRegex: a,
				monthsShortRegex: a,
				monthsStrictRegex: /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
				monthsShortStrictRegex: /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
				monthsParse: n,
				longMonthsParse: n,
				shortMonthsParse: n,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D [a viz] MMMM YYYY",
					LLL: "D [a viz] MMMM YYYY HH:mm",
					LLLL: "dddd, D [a viz] MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Hiziv da] LT",
					nextDay: "[Warcʼhoazh da] LT",
					nextWeek: "dddd [da] LT",
					lastDay: "[Decʼh da] LT",
					lastWeek: "dddd [paset da] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "a-benn %s",
					past: "%s ʼzo",
					s: "un nebeud segondennoù",
					ss: "%d eilenn",
					m: "ur vunutenn",
					mm: t,
					h: "un eur",
					hh: "%d eur",
					d: "un devezh",
					dd: t,
					M: "ur miz",
					MM: t,
					y: "ur bloaz",
					yy: function (e) {
						switch (
							(function e(t) {
								return t > 9 ? e(t % 10) : t
							})(e)
						) {
							case 1:
							case 3:
							case 4:
							case 5:
							case 9:
								return e + " bloaz"
							default:
								return e + " vloaz"
						}
					},
				},
				dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
				ordinal: function (e) {
					return e + (1 === e ? "añ" : "vet")
				},
				week: { dow: 1, doy: 4 },
				meridiemParse: /a.m.|g.m./,
				isPM: function (e) {
					return "g.m." === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "a.m." : "g.m."
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n) {
				var a = e + " "
				switch (n) {
					case "ss":
						return (a +=
							1 === e
								? "sekunda"
								: 2 === e || 3 === e || 4 === e
								? "sekunde"
								: "sekundi")
					case "m":
						return t ? "jedna minuta" : "jedne minute"
					case "mm":
						return (a +=
							1 === e
								? "minuta"
								: 2 === e || 3 === e || 4 === e
								? "minute"
								: "minuta")
					case "h":
						return t ? "jedan sat" : "jednog sata"
					case "hh":
						return (a +=
							1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati")
					case "dd":
						return (a += 1 === e ? "dan" : "dana")
					case "MM":
						return (a +=
							1 === e
								? "mjesec"
								: 2 === e || 3 === e || 4 === e
								? "mjeseca"
								: "mjeseci")
					case "yy":
						return (a +=
							1 === e
								? "godina"
								: 2 === e || 3 === e || 4 === e
								? "godine"
								: "godina")
				}
			}
			e.defineLocale("bs", {
				months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split(
					"_",
				),
				monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
					"_",
				),
				weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
				weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd, D. MMMM YYYY H:mm",
				},
				calendar: {
					sameDay: "[danas u] LT",
					nextDay: "[sutra u] LT",
					nextWeek: function () {
						switch (this.day()) {
							case 0:
								return "[u] [nedjelju] [u] LT"
							case 3:
								return "[u] [srijedu] [u] LT"
							case 6:
								return "[u] [subotu] [u] LT"
							case 1:
							case 2:
							case 4:
							case 5:
								return "[u] dddd [u] LT"
						}
					},
					lastDay: "[jučer u] LT",
					lastWeek: function () {
						switch (this.day()) {
							case 0:
							case 3:
								return "[prošlu] dddd [u] LT"
							case 6:
								return "[prošle] [subote] [u] LT"
							case 1:
							case 2:
							case 4:
							case 5:
								return "[prošli] dddd [u] LT"
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "za %s",
					past: "prije %s",
					s: "par sekundi",
					ss: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: "dan",
					dd: t,
					M: "mjesec",
					MM: t,
					y: "godinu",
					yy: t,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("ca", {
				months: {
					standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split(
						"_",
					),
					format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
						"_",
					),
					isFormat: /D[oD]?(\s)+MMMM/,
				},
				monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split(
					"_",
				),
				weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
				weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM [de] YYYY",
					ll: "D MMM YYYY",
					LLL: "D MMMM [de] YYYY [a les] H:mm",
					lll: "D MMM YYYY, H:mm",
					LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
					llll: "ddd D MMM YYYY, H:mm",
				},
				calendar: {
					sameDay: function () {
						return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
					},
					nextDay: function () {
						return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
					},
					nextWeek: function () {
						return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
					},
					lastDay: function () {
						return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
					},
					lastWeek: function () {
						return (
							"[el] dddd [passat a " +
							(1 !== this.hours() ? "les" : "la") +
							"] LT"
						)
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "d'aquí %s",
					past: "fa %s",
					s: "uns segons",
					ss: "%d segons",
					m: "un minut",
					mm: "%d minuts",
					h: "una hora",
					hh: "%d hores",
					d: "un dia",
					dd: "%d dies",
					M: "un mes",
					MM: "%d mesos",
					y: "un any",
					yy: "%d anys",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
				ordinal: function (e, t) {
					var n =
						1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è"
					return ("w" !== t && "W" !== t) || (n = "a"), e + n
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split(
					"_",
				),
				n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
				a = [
					/^led/i,
					/^úno/i,
					/^bře/i,
					/^dub/i,
					/^kvě/i,
					/^(čvn|červen$|června)/i,
					/^(čvc|červenec|července)/i,
					/^srp/i,
					/^zář/i,
					/^říj/i,
					/^lis/i,
					/^pro/i,
				],
				r = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i
			function s(e) {
				return e > 1 && e < 5 && 1 != ~~(e / 10)
			}
			function i(e, t, n, a) {
				var r = e + " "
				switch (n) {
					case "s":
						return t || a ? "pár sekund" : "pár sekundami"
					case "ss":
						return t || a ? r + (s(e) ? "sekundy" : "sekund") : r + "sekundami"
					case "m":
						return t ? "minuta" : a ? "minutu" : "minutou"
					case "mm":
						return t || a ? r + (s(e) ? "minuty" : "minut") : r + "minutami"
					case "h":
						return t ? "hodina" : a ? "hodinu" : "hodinou"
					case "hh":
						return t || a ? r + (s(e) ? "hodiny" : "hodin") : r + "hodinami"
					case "d":
						return t || a ? "den" : "dnem"
					case "dd":
						return t || a ? r + (s(e) ? "dny" : "dní") : r + "dny"
					case "M":
						return t || a ? "měsíc" : "měsícem"
					case "MM":
						return t || a ? r + (s(e) ? "měsíce" : "měsíců") : r + "měsíci"
					case "y":
						return t || a ? "rok" : "rokem"
					case "yy":
						return t || a ? r + (s(e) ? "roky" : "let") : r + "lety"
				}
			}
			e.defineLocale("cs", {
				months: t,
				monthsShort: n,
				monthsRegex: r,
				monthsShortRegex: r,
				monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
				monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
				monthsParse: a,
				longMonthsParse: a,
				shortMonthsParse: a,
				weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
				weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
				weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd D. MMMM YYYY H:mm",
					l: "D. M. YYYY",
				},
				calendar: {
					sameDay: "[dnes v] LT",
					nextDay: "[zítra v] LT",
					nextWeek: function () {
						switch (this.day()) {
							case 0:
								return "[v neděli v] LT"
							case 1:
							case 2:
								return "[v] dddd [v] LT"
							case 3:
								return "[ve středu v] LT"
							case 4:
								return "[ve čtvrtek v] LT"
							case 5:
								return "[v pátek v] LT"
							case 6:
								return "[v sobotu v] LT"
						}
					},
					lastDay: "[včera v] LT",
					lastWeek: function () {
						switch (this.day()) {
							case 0:
								return "[minulou neděli v] LT"
							case 1:
							case 2:
								return "[minulé] dddd [v] LT"
							case 3:
								return "[minulou středu v] LT"
							case 4:
							case 5:
								return "[minulý] dddd [v] LT"
							case 6:
								return "[minulou sobotu v] LT"
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "za %s",
					past: "před %s",
					s: i,
					ss: i,
					m: i,
					mm: i,
					h: i,
					hh: i,
					d: i,
					dd: i,
					M: i,
					MM: i,
					y: i,
					yy: i,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("cv", {
				months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split(
					"_",
				),
				monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split(
					"_",
				),
				weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split(
					"_",
				),
				weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
				weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD-MM-YYYY",
					LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
					LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
					LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
				},
				calendar: {
					sameDay: "[Паян] LT [сехетре]",
					nextDay: "[Ыран] LT [сехетре]",
					lastDay: "[Ӗнер] LT [сехетре]",
					nextWeek: "[Ҫитес] dddd LT [сехетре]",
					lastWeek: "[Иртнӗ] dddd LT [сехетре]",
					sameElse: "L",
				},
				relativeTime: {
					future: function (e) {
						return (
							e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
						)
					},
					past: "%s каялла",
					s: "пӗр-ик ҫеккунт",
					ss: "%d ҫеккунт",
					m: "пӗр минут",
					mm: "%d минут",
					h: "пӗр сехет",
					hh: "%d сехет",
					d: "пӗр кун",
					dd: "%d кун",
					M: "пӗр уйӑх",
					MM: "%d уйӑх",
					y: "пӗр ҫул",
					yy: "%d ҫул",
				},
				dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
				ordinal: "%d-мӗш",
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("cy", {
				months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split(
					"_",
				),
				monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split(
					"_",
				),
				weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split(
					"_",
				),
				weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
				weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Heddiw am] LT",
					nextDay: "[Yfory am] LT",
					nextWeek: "dddd [am] LT",
					lastDay: "[Ddoe am] LT",
					lastWeek: "dddd [diwethaf am] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "mewn %s",
					past: "%s yn ôl",
					s: "ychydig eiliadau",
					ss: "%d eiliad",
					m: "munud",
					mm: "%d munud",
					h: "awr",
					hh: "%d awr",
					d: "diwrnod",
					dd: "%d diwrnod",
					M: "mis",
					MM: "%d mis",
					y: "blwyddyn",
					yy: "%d flynedd",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
				ordinal: function (e) {
					var t = ""
					return (
						e > 20
							? (t =
									40 === e || 50 === e || 60 === e || 80 === e || 100 === e
										? "fed"
										: "ain")
							: e > 0 &&
							  (t = [
									"",
									"af",
									"il",
									"ydd",
									"ydd",
									"ed",
									"ed",
									"ed",
									"fed",
									"fed",
									"fed",
									"eg",
									"fed",
									"eg",
									"eg",
									"fed",
									"eg",
									"eg",
									"fed",
									"eg",
									"fed",
							  ][e]),
						e + t
					)
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("da", {
				months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
					"_",
				),
				monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
					"_",
				),
				weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
					"_",
				),
				weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
				weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY HH:mm",
					LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
				},
				calendar: {
					sameDay: "[i dag kl.] LT",
					nextDay: "[i morgen kl.] LT",
					nextWeek: "på dddd [kl.] LT",
					lastDay: "[i går kl.] LT",
					lastWeek: "[i] dddd[s kl.] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "om %s",
					past: "%s siden",
					s: "få sekunder",
					ss: "%d sekunder",
					m: "et minut",
					mm: "%d minutter",
					h: "en time",
					hh: "%d timer",
					d: "en dag",
					dd: "%d dage",
					M: "en måned",
					MM: "%d måneder",
					y: "et år",
					yy: "%d år",
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n, a) {
				var r = {
					m: ["eine Minute", "einer Minute"],
					h: ["eine Stunde", "einer Stunde"],
					d: ["ein Tag", "einem Tag"],
					dd: [e + " Tage", e + " Tagen"],
					w: ["eine Woche", "einer Woche"],
					M: ["ein Monat", "einem Monat"],
					MM: [e + " Monate", e + " Monaten"],
					y: ["ein Jahr", "einem Jahr"],
					yy: [e + " Jahre", e + " Jahren"],
				}
				return t ? r[n][0] : r[n][1]
			}
			e.defineLocale("de", {
				months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
					"_",
				),
				monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
					"_",
				),
				weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
				weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY HH:mm",
					LLLL: "dddd, D. MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[heute um] LT [Uhr]",
					sameElse: "L",
					nextDay: "[morgen um] LT [Uhr]",
					nextWeek: "dddd [um] LT [Uhr]",
					lastDay: "[gestern um] LT [Uhr]",
					lastWeek: "[letzten] dddd [um] LT [Uhr]",
				},
				relativeTime: {
					future: "in %s",
					past: "vor %s",
					s: "ein paar Sekunden",
					ss: "%d Sekunden",
					m: t,
					mm: "%d Minuten",
					h: t,
					hh: "%d Stunden",
					d: t,
					dd: t,
					w: t,
					ww: "%d Wochen",
					M: t,
					MM: t,
					y: t,
					yy: t,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n, a) {
				var r = {
					m: ["eine Minute", "einer Minute"],
					h: ["eine Stunde", "einer Stunde"],
					d: ["ein Tag", "einem Tag"],
					dd: [e + " Tage", e + " Tagen"],
					w: ["eine Woche", "einer Woche"],
					M: ["ein Monat", "einem Monat"],
					MM: [e + " Monate", e + " Monaten"],
					y: ["ein Jahr", "einem Jahr"],
					yy: [e + " Jahre", e + " Jahren"],
				}
				return t ? r[n][0] : r[n][1]
			}
			e.defineLocale("de-at", {
				months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
					"_",
				),
				monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
					"_",
				),
				weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
				weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY HH:mm",
					LLLL: "dddd, D. MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[heute um] LT [Uhr]",
					sameElse: "L",
					nextDay: "[morgen um] LT [Uhr]",
					nextWeek: "dddd [um] LT [Uhr]",
					lastDay: "[gestern um] LT [Uhr]",
					lastWeek: "[letzten] dddd [um] LT [Uhr]",
				},
				relativeTime: {
					future: "in %s",
					past: "vor %s",
					s: "ein paar Sekunden",
					ss: "%d Sekunden",
					m: t,
					mm: "%d Minuten",
					h: t,
					hh: "%d Stunden",
					d: t,
					dd: t,
					w: t,
					ww: "%d Wochen",
					M: t,
					MM: t,
					y: t,
					yy: t,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n, a) {
				var r = {
					m: ["eine Minute", "einer Minute"],
					h: ["eine Stunde", "einer Stunde"],
					d: ["ein Tag", "einem Tag"],
					dd: [e + " Tage", e + " Tagen"],
					w: ["eine Woche", "einer Woche"],
					M: ["ein Monat", "einem Monat"],
					MM: [e + " Monate", e + " Monaten"],
					y: ["ein Jahr", "einem Jahr"],
					yy: [e + " Jahre", e + " Jahren"],
				}
				return t ? r[n][0] : r[n][1]
			}
			e.defineLocale("de-ch", {
				months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
					"_",
				),
				monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
					"_",
				),
				weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
				weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY HH:mm",
					LLLL: "dddd, D. MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[heute um] LT [Uhr]",
					sameElse: "L",
					nextDay: "[morgen um] LT [Uhr]",
					nextWeek: "dddd [um] LT [Uhr]",
					lastDay: "[gestern um] LT [Uhr]",
					lastWeek: "[letzten] dddd [um] LT [Uhr]",
				},
				relativeTime: {
					future: "in %s",
					past: "vor %s",
					s: "ein paar Sekunden",
					ss: "%d Sekunden",
					m: t,
					mm: "%d Minuten",
					h: t,
					hh: "%d Stunden",
					d: t,
					dd: t,
					w: t,
					ww: "%d Wochen",
					M: t,
					MM: t,
					y: t,
					yy: t,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = [
					"ޖެނުއަރީ",
					"ފެބްރުއަރީ",
					"މާރިޗު",
					"އޭޕްރީލު",
					"މޭ",
					"ޖޫން",
					"ޖުލައި",
					"އޯގަސްޓު",
					"ސެޕްޓެމްބަރު",
					"އޮކްޓޯބަރު",
					"ނޮވެމްބަރު",
					"ޑިސެމްބަރު",
				],
				n = [
					"އާދިއްތަ",
					"ހޯމަ",
					"އަންގާރަ",
					"ބުދަ",
					"ބުރާސްފަތި",
					"ހުކުރު",
					"ހޮނިހިރު",
				]
			e.defineLocale("dv", {
				months: t,
				monthsShort: t,
				weekdays: n,
				weekdaysShort: n,
				weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/M/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				meridiemParse: /މކ|މފ/,
				isPM: function (e) {
					return "މފ" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "މކ" : "މފ"
				},
				calendar: {
					sameDay: "[މިއަދު] LT",
					nextDay: "[މާދަމާ] LT",
					nextWeek: "dddd LT",
					lastDay: "[އިއްޔެ] LT",
					lastWeek: "[ފާއިތުވި] dddd LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "ތެރޭގައި %s",
					past: "ކުރިން %s",
					s: "ސިކުންތުކޮޅެއް",
					ss: "d% ސިކުންތު",
					m: "މިނިޓެއް",
					mm: "މިނިޓު %d",
					h: "ގަޑިއިރެއް",
					hh: "ގަޑިއިރު %d",
					d: "ދުވަހެއް",
					dd: "ދުވަސް %d",
					M: "މަހެއް",
					MM: "މަސް %d",
					y: "އަހަރެއް",
					yy: "އަހަރު %d",
				},
				preparse: function (e) {
					return e.replace(/،/g, ",")
				},
				postformat: function (e) {
					return e.replace(/,/g, "،")
				},
				week: { dow: 7, doy: 12 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("el", {
				monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split(
					"_",
				),
				monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split(
					"_",
				),
				months: function (e, t) {
					return e
						? "string" == typeof t &&
						  /D/.test(t.substring(0, t.indexOf("MMMM")))
							? this._monthsGenitiveEl[e.month()]
							: this._monthsNominativeEl[e.month()]
						: this._monthsNominativeEl
				},
				monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split(
					"_",
				),
				weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split(
					"_",
				),
				weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
				weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
				meridiem: function (e, t, n) {
					return e > 11 ? (n ? "μμ" : "ΜΜ") : n ? "πμ" : "ΠΜ"
				},
				isPM: function (e) {
					return "μ" === (e + "").toLowerCase()[0]
				},
				meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
				longDateFormat: {
					LT: "h:mm A",
					LTS: "h:mm:ss A",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY h:mm A",
					LLLL: "dddd, D MMMM YYYY h:mm A",
				},
				calendarEl: {
					sameDay: "[Σήμερα {}] LT",
					nextDay: "[Αύριο {}] LT",
					nextWeek: "dddd [{}] LT",
					lastDay: "[Χθες {}] LT",
					lastWeek: function () {
						switch (this.day()) {
							case 6:
								return "[το προηγούμενο] dddd [{}] LT"
							default:
								return "[την προηγούμενη] dddd [{}] LT"
						}
					},
					sameElse: "L",
				},
				calendar: function (e, t) {
					var n,
						a = this._calendarEl[e],
						r = t && t.hours()
					return (
						(n = a),
						(("undefined" != typeof Function && n instanceof Function) ||
							"[object Function]" === Object.prototype.toString.call(n)) &&
							(a = a.apply(t)),
						a.replace("{}", r % 12 == 1 ? "στη" : "στις")
					)
				},
				relativeTime: {
					future: "σε %s",
					past: "%s πριν",
					s: "λίγα δευτερόλεπτα",
					ss: "%d δευτερόλεπτα",
					m: "ένα λεπτό",
					mm: "%d λεπτά",
					h: "μία ώρα",
					hh: "%d ώρες",
					d: "μία μέρα",
					dd: "%d μέρες",
					M: "ένας μήνας",
					MM: "%d μήνες",
					y: "ένας χρόνος",
					yy: "%d χρόνια",
				},
				dayOfMonthOrdinalParse: /\d{1,2}η/,
				ordinal: "%dη",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("en-au", {
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
					"_",
				),
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
					"_",
				),
				weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				longDateFormat: {
					LT: "h:mm A",
					LTS: "h:mm:ss A",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY h:mm A",
					LLLL: "dddd, D MMMM YYYY h:mm A",
				},
				calendar: {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
				ordinal: function (e) {
					var t = e % 10
					return (
						e +
						(1 == ~~((e % 100) / 10)
							? "th"
							: 1 === t
							? "st"
							: 2 === t
							? "nd"
							: 3 === t
							? "rd"
							: "th")
					)
				},
				week: { dow: 0, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("en-ca", {
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
					"_",
				),
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
					"_",
				),
				weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				longDateFormat: {
					LT: "h:mm A",
					LTS: "h:mm:ss A",
					L: "YYYY-MM-DD",
					LL: "MMMM D, YYYY",
					LLL: "MMMM D, YYYY h:mm A",
					LLLL: "dddd, MMMM D, YYYY h:mm A",
				},
				calendar: {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
				ordinal: function (e) {
					var t = e % 10
					return (
						e +
						(1 == ~~((e % 100) / 10)
							? "th"
							: 1 === t
							? "st"
							: 2 === t
							? "nd"
							: 3 === t
							? "rd"
							: "th")
					)
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("en-gb", {
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
					"_",
				),
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
					"_",
				),
				weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
				ordinal: function (e) {
					var t = e % 10
					return (
						e +
						(1 == ~~((e % 100) / 10)
							? "th"
							: 1 === t
							? "st"
							: 2 === t
							? "nd"
							: 3 === t
							? "rd"
							: "th")
					)
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("en-ie", {
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
					"_",
				),
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
					"_",
				),
				weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
				ordinal: function (e) {
					var t = e % 10
					return (
						e +
						(1 == ~~((e % 100) / 10)
							? "th"
							: 1 === t
							? "st"
							: 2 === t
							? "nd"
							: 3 === t
							? "rd"
							: "th")
					)
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("en-il", {
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
					"_",
				),
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
					"_",
				),
				weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
				ordinal: function (e) {
					var t = e % 10
					return (
						e +
						(1 == ~~((e % 100) / 10)
							? "th"
							: 1 === t
							? "st"
							: 2 === t
							? "nd"
							: 3 === t
							? "rd"
							: "th")
					)
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("en-in", {
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
					"_",
				),
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
					"_",
				),
				weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				longDateFormat: {
					LT: "h:mm A",
					LTS: "h:mm:ss A",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY h:mm A",
					LLLL: "dddd, D MMMM YYYY h:mm A",
				},
				calendar: {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
				ordinal: function (e) {
					var t = e % 10
					return (
						e +
						(1 == ~~((e % 100) / 10)
							? "th"
							: 1 === t
							? "st"
							: 2 === t
							? "nd"
							: 3 === t
							? "rd"
							: "th")
					)
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("en-nz", {
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
					"_",
				),
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
					"_",
				),
				weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				longDateFormat: {
					LT: "h:mm A",
					LTS: "h:mm:ss A",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY h:mm A",
					LLLL: "dddd, D MMMM YYYY h:mm A",
				},
				calendar: {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
				ordinal: function (e) {
					var t = e % 10
					return (
						e +
						(1 == ~~((e % 100) / 10)
							? "th"
							: 1 === t
							? "st"
							: 2 === t
							? "nd"
							: 3 === t
							? "rd"
							: "th")
					)
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("en-sg", {
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
					"_",
				),
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
					"_",
				),
				weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
				ordinal: function (e) {
					var t = e % 10
					return (
						e +
						(1 == ~~((e % 100) / 10)
							? "th"
							: 1 === t
							? "st"
							: 2 === t
							? "nd"
							: 3 === t
							? "rd"
							: "th")
					)
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("eo", {
				months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split(
					"_",
				),
				monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split(
					"_",
				),
				weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split(
					"_",
				),
				weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
				weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY-MM-DD",
					LL: "[la] D[-an de] MMMM, YYYY",
					LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
					LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
					llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm",
				},
				meridiemParse: /[ap]\.t\.m/i,
				isPM: function (e) {
					return "p" === e.charAt(0).toLowerCase()
				},
				meridiem: function (e, t, n) {
					return e > 11 ? (n ? "p.t.m." : "P.T.M.") : n ? "a.t.m." : "A.T.M."
				},
				calendar: {
					sameDay: "[Hodiaŭ je] LT",
					nextDay: "[Morgaŭ je] LT",
					nextWeek: "dddd[n je] LT",
					lastDay: "[Hieraŭ je] LT",
					lastWeek: "[pasintan] dddd[n je] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "post %s",
					past: "antaŭ %s",
					s: "kelkaj sekundoj",
					ss: "%d sekundoj",
					m: "unu minuto",
					mm: "%d minutoj",
					h: "unu horo",
					hh: "%d horoj",
					d: "unu tago",
					dd: "%d tagoj",
					M: "unu monato",
					MM: "%d monatoj",
					y: "unu jaro",
					yy: "%d jaroj",
				},
				dayOfMonthOrdinalParse: /\d{1,2}a/,
				ordinal: "%da",
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
					"_",
				),
				n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
				a = [
					/^ene/i,
					/^feb/i,
					/^mar/i,
					/^abr/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^ago/i,
					/^sep/i,
					/^oct/i,
					/^nov/i,
					/^dic/i,
				],
				r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i
			e.defineLocale("es", {
				months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
					"_",
				),
				monthsShort: function (e, a) {
					return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t
				},
				monthsRegex: r,
				monthsShortRegex: r,
				monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
				monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
				monthsParse: a,
				longMonthsParse: a,
				shortMonthsParse: a,
				weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
					"_",
				),
				weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
				weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
				},
				calendar: {
					sameDay: function () {
						return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextDay: function () {
						return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextWeek: function () {
						return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastDay: function () {
						return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastWeek: function () {
						return (
							"[el] dddd [pasado a la" +
							(1 !== this.hours() ? "s" : "") +
							"] LT"
						)
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "en %s",
					past: "hace %s",
					s: "unos segundos",
					ss: "%d segundos",
					m: "un minuto",
					mm: "%d minutos",
					h: "una hora",
					hh: "%d horas",
					d: "un día",
					dd: "%d días",
					M: "un mes",
					MM: "%d meses",
					y: "un año",
					yy: "%d años",
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
				week: { dow: 1, doy: 4 },
				invalidDate: "Fecha invalida",
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
					"_",
				),
				n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
				a = [
					/^ene/i,
					/^feb/i,
					/^mar/i,
					/^abr/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^ago/i,
					/^sep/i,
					/^oct/i,
					/^nov/i,
					/^dic/i,
				],
				r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i
			e.defineLocale("es-do", {
				months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
					"_",
				),
				monthsShort: function (e, a) {
					return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t
				},
				monthsRegex: r,
				monthsShortRegex: r,
				monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
				monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
				monthsParse: a,
				longMonthsParse: a,
				shortMonthsParse: a,
				weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
					"_",
				),
				weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
				weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "h:mm A",
					LTS: "h:mm:ss A",
					L: "DD/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY h:mm A",
					LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
				},
				calendar: {
					sameDay: function () {
						return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextDay: function () {
						return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextWeek: function () {
						return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastDay: function () {
						return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastWeek: function () {
						return (
							"[el] dddd [pasado a la" +
							(1 !== this.hours() ? "s" : "") +
							"] LT"
						)
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "en %s",
					past: "hace %s",
					s: "unos segundos",
					ss: "%d segundos",
					m: "un minuto",
					mm: "%d minutos",
					h: "una hora",
					hh: "%d horas",
					d: "un día",
					dd: "%d días",
					M: "un mes",
					MM: "%d meses",
					y: "un año",
					yy: "%d años",
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
					"_",
				),
				n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
				a = [
					/^ene/i,
					/^feb/i,
					/^mar/i,
					/^abr/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^ago/i,
					/^sep/i,
					/^oct/i,
					/^nov/i,
					/^dic/i,
				],
				r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i
			e.defineLocale("es-us", {
				months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
					"_",
				),
				monthsShort: function (e, a) {
					return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t
				},
				monthsRegex: r,
				monthsShortRegex: r,
				monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
				monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
				monthsParse: a,
				longMonthsParse: a,
				shortMonthsParse: a,
				weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
					"_",
				),
				weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
				weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "h:mm A",
					LTS: "h:mm:ss A",
					L: "MM/DD/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY h:mm A",
					LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
				},
				calendar: {
					sameDay: function () {
						return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextDay: function () {
						return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextWeek: function () {
						return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastDay: function () {
						return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastWeek: function () {
						return (
							"[el] dddd [pasado a la" +
							(1 !== this.hours() ? "s" : "") +
							"] LT"
						)
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "en %s",
					past: "hace %s",
					s: "unos segundos",
					ss: "%d segundos",
					m: "un minuto",
					mm: "%d minutos",
					h: "una hora",
					hh: "%d horas",
					d: "un día",
					dd: "%d días",
					M: "un mes",
					MM: "%d meses",
					y: "un año",
					yy: "%d años",
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n, a) {
				var r = {
					s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
					ss: [e + "sekundi", e + "sekundit"],
					m: ["ühe minuti", "üks minut"],
					mm: [e + " minuti", e + " minutit"],
					h: ["ühe tunni", "tund aega", "üks tund"],
					hh: [e + " tunni", e + " tundi"],
					d: ["ühe päeva", "üks päev"],
					M: ["kuu aja", "kuu aega", "üks kuu"],
					MM: [e + " kuu", e + " kuud"],
					y: ["ühe aasta", "aasta", "üks aasta"],
					yy: [e + " aasta", e + " aastat"],
				}
				return t ? (r[n][2] ? r[n][2] : r[n][1]) : a ? r[n][0] : r[n][1]
			}
			e.defineLocale("et", {
				months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
					"_",
				),
				monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
					"_",
				),
				weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split(
					"_",
				),
				weekdaysShort: "P_E_T_K_N_R_L".split("_"),
				weekdaysMin: "P_E_T_K_N_R_L".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd, D. MMMM YYYY H:mm",
				},
				calendar: {
					sameDay: "[Täna,] LT",
					nextDay: "[Homme,] LT",
					nextWeek: "[Järgmine] dddd LT",
					lastDay: "[Eile,] LT",
					lastWeek: "[Eelmine] dddd LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s pärast",
					past: "%s tagasi",
					s: t,
					ss: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: t,
					dd: "%d päeva",
					M: t,
					MM: t,
					y: t,
					yy: t,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("eu", {
				months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
					"_",
				),
				monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split(
					"_",
				),
				weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
				weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY-MM-DD",
					LL: "YYYY[ko] MMMM[ren] D[a]",
					LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
					LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
					l: "YYYY-M-D",
					ll: "YYYY[ko] MMM D[a]",
					lll: "YYYY[ko] MMM D[a] HH:mm",
					llll: "ddd, YYYY[ko] MMM D[a] HH:mm",
				},
				calendar: {
					sameDay: "[gaur] LT[etan]",
					nextDay: "[bihar] LT[etan]",
					nextWeek: "dddd LT[etan]",
					lastDay: "[atzo] LT[etan]",
					lastWeek: "[aurreko] dddd LT[etan]",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s barru",
					past: "duela %s",
					s: "segundo batzuk",
					ss: "%d segundo",
					m: "minutu bat",
					mm: "%d minutu",
					h: "ordu bat",
					hh: "%d ordu",
					d: "egun bat",
					dd: "%d egun",
					M: "hilabete bat",
					MM: "%d hilabete",
					y: "urte bat",
					yy: "%d urte",
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "۱",
					2: "۲",
					3: "۳",
					4: "۴",
					5: "۵",
					6: "۶",
					7: "۷",
					8: "۸",
					9: "۹",
					0: "۰",
				},
				n = {
					"۱": "1",
					"۲": "2",
					"۳": "3",
					"۴": "4",
					"۵": "5",
					"۶": "6",
					"۷": "7",
					"۸": "8",
					"۹": "9",
					"۰": "0",
				}
			e.defineLocale("fa", {
				months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
					"_",
				),
				monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
					"_",
				),
				weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
					"_",
				),
				weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
					"_",
				),
				weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				meridiemParse: /قبل از ظهر|بعد از ظهر/,
				isPM: function (e) {
					return /بعد از ظهر/.test(e)
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
				},
				calendar: {
					sameDay: "[امروز ساعت] LT",
					nextDay: "[فردا ساعت] LT",
					nextWeek: "dddd [ساعت] LT",
					lastDay: "[دیروز ساعت] LT",
					lastWeek: "dddd [پیش] [ساعت] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "در %s",
					past: "%s پیش",
					s: "چند ثانیه",
					ss: "%d ثانیه",
					m: "یک دقیقه",
					mm: "%d دقیقه",
					h: "یک ساعت",
					hh: "%d ساعت",
					d: "یک روز",
					dd: "%d روز",
					M: "یک ماه",
					MM: "%d ماه",
					y: "یک سال",
					yy: "%d سال",
				},
				preparse: function (e) {
					return e
						.replace(/[۰-۹]/g, function (e) {
							return n[e]
						})
						.replace(/،/g, ",")
				},
				postformat: function (e) {
					return e
						.replace(/\d/g, function (e) {
							return t[e]
						})
						.replace(/,/g, "،")
				},
				dayOfMonthOrdinalParse: /\d{1,2}م/,
				ordinal: "%dم",
				week: { dow: 6, doy: 12 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(
					" ",
				),
				n = [
					"nolla",
					"yhden",
					"kahden",
					"kolmen",
					"neljän",
					"viiden",
					"kuuden",
					t[7],
					t[8],
					t[9],
				]
			function a(e, a, r, s) {
				var i = ""
				switch (r) {
					case "s":
						return s ? "muutaman sekunnin" : "muutama sekunti"
					case "ss":
						i = s ? "sekunnin" : "sekuntia"
						break
					case "m":
						return s ? "minuutin" : "minuutti"
					case "mm":
						i = s ? "minuutin" : "minuuttia"
						break
					case "h":
						return s ? "tunnin" : "tunti"
					case "hh":
						i = s ? "tunnin" : "tuntia"
						break
					case "d":
						return s ? "päivän" : "päivä"
					case "dd":
						i = s ? "päivän" : "päivää"
						break
					case "M":
						return s ? "kuukauden" : "kuukausi"
					case "MM":
						i = s ? "kuukauden" : "kuukautta"
						break
					case "y":
						return s ? "vuoden" : "vuosi"
					case "yy":
						i = s ? "vuoden" : "vuotta"
				}
				return (i =
					(function (e, a) {
						return e < 10 ? (a ? n[e] : t[e]) : e
					})(e, s) +
					" " +
					i)
			}
			e.defineLocale("fi", {
				months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
					"_",
				),
				monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split(
					"_",
				),
				weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
					"_",
				),
				weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
				weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
				longDateFormat: {
					LT: "HH.mm",
					LTS: "HH.mm.ss",
					L: "DD.MM.YYYY",
					LL: "Do MMMM[ta] YYYY",
					LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
					LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
					l: "D.M.YYYY",
					ll: "Do MMM YYYY",
					lll: "Do MMM YYYY, [klo] HH.mm",
					llll: "ddd, Do MMM YYYY, [klo] HH.mm",
				},
				calendar: {
					sameDay: "[tänään] [klo] LT",
					nextDay: "[huomenna] [klo] LT",
					nextWeek: "dddd [klo] LT",
					lastDay: "[eilen] [klo] LT",
					lastWeek: "[viime] dddd[na] [klo] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s päästä",
					past: "%s sitten",
					s: a,
					ss: a,
					m: a,
					mm: a,
					h: a,
					hh: a,
					d: a,
					dd: a,
					M: a,
					MM: a,
					y: a,
					yy: a,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("fil", {
				months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
					"_",
				),
				monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
					"_",
				),
				weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split(
					"_",
				),
				weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
				weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "MM/D/YYYY",
					LL: "MMMM D, YYYY",
					LLL: "MMMM D, YYYY HH:mm",
					LLLL: "dddd, MMMM DD, YYYY HH:mm",
				},
				calendar: {
					sameDay: "LT [ngayong araw]",
					nextDay: "[Bukas ng] LT",
					nextWeek: "LT [sa susunod na] dddd",
					lastDay: "LT [kahapon]",
					lastWeek: "LT [noong nakaraang] dddd",
					sameElse: "L",
				},
				relativeTime: {
					future: "sa loob ng %s",
					past: "%s ang nakalipas",
					s: "ilang segundo",
					ss: "%d segundo",
					m: "isang minuto",
					mm: "%d minuto",
					h: "isang oras",
					hh: "%d oras",
					d: "isang araw",
					dd: "%d araw",
					M: "isang buwan",
					MM: "%d buwan",
					y: "isang taon",
					yy: "%d taon",
				},
				dayOfMonthOrdinalParse: /\d{1,2}/,
				ordinal: function (e) {
					return e
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("fo", {
				months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split(
					"_",
				),
				monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split(
					"_",
				),
				weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split(
					"_",
				),
				weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
				weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D. MMMM, YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Í dag kl.] LT",
					nextDay: "[Í morgin kl.] LT",
					nextWeek: "dddd [kl.] LT",
					lastDay: "[Í gjár kl.] LT",
					lastWeek: "[síðstu] dddd [kl] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "um %s",
					past: "%s síðani",
					s: "fá sekund",
					ss: "%d sekundir",
					m: "ein minuttur",
					mm: "%d minuttir",
					h: "ein tími",
					hh: "%d tímar",
					d: "ein dagur",
					dd: "%d dagar",
					M: "ein mánaður",
					MM: "%d mánaðir",
					y: "eitt ár",
					yy: "%d ár",
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
				n = [
					/^janv/i,
					/^févr/i,
					/^mars/i,
					/^avr/i,
					/^mai/i,
					/^juin/i,
					/^juil/i,
					/^août/i,
					/^sept/i,
					/^oct/i,
					/^nov/i,
					/^déc/i,
				]
			e.defineLocale("fr", {
				months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
					"_",
				),
				monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
					"_",
				),
				monthsRegex: t,
				monthsShortRegex: t,
				monthsStrictRegex: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
				monthsShortStrictRegex: /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
				monthsParse: n,
				longMonthsParse: n,
				shortMonthsParse: n,
				weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
					"_",
				),
				weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
				weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Aujourd’hui à] LT",
					nextDay: "[Demain à] LT",
					nextWeek: "dddd [à] LT",
					lastDay: "[Hier à] LT",
					lastWeek: "dddd [dernier à] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "dans %s",
					past: "il y a %s",
					s: "quelques secondes",
					ss: "%d secondes",
					m: "une minute",
					mm: "%d minutes",
					h: "une heure",
					hh: "%d heures",
					d: "un jour",
					dd: "%d jours",
					M: "un mois",
					MM: "%d mois",
					y: "un an",
					yy: "%d ans",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
				ordinal: function (e, t) {
					switch (t) {
						case "D":
							return e + (1 === e ? "er" : "")
						default:
						case "M":
						case "Q":
						case "DDD":
						case "d":
							return e + (1 === e ? "er" : "e")
						case "w":
						case "W":
							return e + (1 === e ? "re" : "e")
					}
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("fr-ca", {
				months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
					"_",
				),
				monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
					"_",
				),
				weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
				weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY-MM-DD",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Aujourd’hui à] LT",
					nextDay: "[Demain à] LT",
					nextWeek: "dddd [à] LT",
					lastDay: "[Hier à] LT",
					lastWeek: "dddd [dernier à] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "dans %s",
					past: "il y a %s",
					s: "quelques secondes",
					ss: "%d secondes",
					m: "une minute",
					mm: "%d minutes",
					h: "une heure",
					hh: "%d heures",
					d: "un jour",
					dd: "%d jours",
					M: "un mois",
					MM: "%d mois",
					y: "un an",
					yy: "%d ans",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
				ordinal: function (e, t) {
					switch (t) {
						default:
						case "M":
						case "Q":
						case "D":
						case "DDD":
						case "d":
							return e + (1 === e ? "er" : "e")
						case "w":
						case "W":
							return e + (1 === e ? "re" : "e")
					}
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("fr-ch", {
				months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
					"_",
				),
				monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
					"_",
				),
				weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
				weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Aujourd’hui à] LT",
					nextDay: "[Demain à] LT",
					nextWeek: "dddd [à] LT",
					lastDay: "[Hier à] LT",
					lastWeek: "dddd [dernier à] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "dans %s",
					past: "il y a %s",
					s: "quelques secondes",
					ss: "%d secondes",
					m: "une minute",
					mm: "%d minutes",
					h: "une heure",
					hh: "%d heures",
					d: "un jour",
					dd: "%d jours",
					M: "un mois",
					MM: "%d mois",
					y: "un an",
					yy: "%d ans",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
				ordinal: function (e, t) {
					switch (t) {
						default:
						case "M":
						case "Q":
						case "D":
						case "DDD":
						case "d":
							return e + (1 === e ? "er" : "e")
						case "w":
						case "W":
							return e + (1 === e ? "re" : "e")
					}
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
					"_",
				),
				n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_")
			e.defineLocale("fy", {
				months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
					"_",
				),
				monthsShort: function (e, a) {
					return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t
				},
				monthsParseExact: !0,
				weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split(
					"_",
				),
				weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
				weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[hjoed om] LT",
					nextDay: "[moarn om] LT",
					nextWeek: "dddd [om] LT",
					lastDay: "[juster om] LT",
					lastWeek: "[ôfrûne] dddd [om] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "oer %s",
					past: "%s lyn",
					s: "in pear sekonden",
					ss: "%d sekonden",
					m: "ien minút",
					mm: "%d minuten",
					h: "ien oere",
					hh: "%d oeren",
					d: "ien dei",
					dd: "%d dagen",
					M: "ien moanne",
					MM: "%d moannen",
					y: "ien jier",
					yy: "%d jierren",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
				ordinal: function (e) {
					return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("ga", {
				months: [
					"Eanáir",
					"Feabhra",
					"Márta",
					"Aibreán",
					"Bealtaine",
					"Meitheamh",
					"Iúil",
					"Lúnasa",
					"Meán Fómhair",
					"Deireadh Fómhair",
					"Samhain",
					"Nollaig",
				],
				monthsShort: [
					"Ean",
					"Feabh",
					"Márt",
					"Aib",
					"Beal",
					"Meith",
					"Iúil",
					"Lún",
					"M.F.",
					"D.F.",
					"Samh",
					"Noll",
				],
				monthsParseExact: !0,
				weekdays: [
					"Dé Domhnaigh",
					"Dé Luain",
					"Dé Máirt",
					"Dé Céadaoin",
					"Déardaoin",
					"Dé hAoine",
					"Dé Sathairn",
				],
				weekdaysShort: [
					"Domh",
					"Luan",
					"Máirt",
					"Céad",
					"Déar",
					"Aoine",
					"Sath",
				],
				weekdaysMin: ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Inniu ag] LT",
					nextDay: "[Amárach ag] LT",
					nextWeek: "dddd [ag] LT",
					lastDay: "[Inné ag] LT",
					lastWeek: "dddd [seo caite] [ag] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "i %s",
					past: "%s ó shin",
					s: "cúpla soicind",
					ss: "%d soicind",
					m: "nóiméad",
					mm: "%d nóiméad",
					h: "uair an chloig",
					hh: "%d uair an chloig",
					d: "lá",
					dd: "%d lá",
					M: "mí",
					MM: "%d míonna",
					y: "bliain",
					yy: "%d bliain",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
				ordinal: function (e) {
					return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("gd", {
				months: [
					"Am Faoilleach",
					"An Gearran",
					"Am Màrt",
					"An Giblean",
					"An Cèitean",
					"An t-Ògmhios",
					"An t-Iuchar",
					"An Lùnastal",
					"An t-Sultain",
					"An Dàmhair",
					"An t-Samhain",
					"An Dùbhlachd",
				],
				monthsShort: [
					"Faoi",
					"Gear",
					"Màrt",
					"Gibl",
					"Cèit",
					"Ògmh",
					"Iuch",
					"Lùn",
					"Sult",
					"Dàmh",
					"Samh",
					"Dùbh",
				],
				monthsParseExact: !0,
				weekdays: [
					"Didòmhnaich",
					"Diluain",
					"Dimàirt",
					"Diciadain",
					"Diardaoin",
					"Dihaoine",
					"Disathairne",
				],
				weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
				weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[An-diugh aig] LT",
					nextDay: "[A-màireach aig] LT",
					nextWeek: "dddd [aig] LT",
					lastDay: "[An-dè aig] LT",
					lastWeek: "dddd [seo chaidh] [aig] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "ann an %s",
					past: "bho chionn %s",
					s: "beagan diogan",
					ss: "%d diogan",
					m: "mionaid",
					mm: "%d mionaidean",
					h: "uair",
					hh: "%d uairean",
					d: "latha",
					dd: "%d latha",
					M: "mìos",
					MM: "%d mìosan",
					y: "bliadhna",
					yy: "%d bliadhna",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
				ordinal: function (e) {
					return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("gl", {
				months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split(
					"_",
				),
				monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
				weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
				weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
				},
				calendar: {
					sameDay: function () {
						return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
					},
					nextDay: function () {
						return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
					},
					nextWeek: function () {
						return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
					},
					lastDay: function () {
						return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
					},
					lastWeek: function () {
						return (
							"[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
						)
					},
					sameElse: "L",
				},
				relativeTime: {
					future: function (e) {
						return 0 === e.indexOf("un") ? "n" + e : "en " + e
					},
					past: "hai %s",
					s: "uns segundos",
					ss: "%d segundos",
					m: "un minuto",
					mm: "%d minutos",
					h: "unha hora",
					hh: "%d horas",
					d: "un día",
					dd: "%d días",
					M: "un mes",
					MM: "%d meses",
					y: "un ano",
					yy: "%d anos",
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n, a) {
				var r = {
					s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
					ss: [e + " सॅकंडांनी", e + " सॅकंड"],
					m: ["एका मिणटान", "एक मिनूट"],
					mm: [e + " मिणटांनी", e + " मिणटां"],
					h: ["एका वरान", "एक वर"],
					hh: [e + " वरांनी", e + " वरां"],
					d: ["एका दिसान", "एक दीस"],
					dd: [e + " दिसांनी", e + " दीस"],
					M: ["एका म्हयन्यान", "एक म्हयनो"],
					MM: [e + " म्हयन्यानी", e + " म्हयने"],
					y: ["एका वर्सान", "एक वर्स"],
					yy: [e + " वर्सांनी", e + " वर्सां"],
				}
				return a ? r[n][0] : r[n][1]
			}
			e.defineLocale("gom-deva", {
				months: {
					standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
						"_",
					),
					format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split(
						"_",
					),
					isFormat: /MMMM(\s)+D[oD]?/,
				},
				monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split(
					"_",
				),
				weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
				weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "A h:mm [वाजतां]",
					LTS: "A h:mm:ss [वाजतां]",
					L: "DD-MM-YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY A h:mm [वाजतां]",
					LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
					llll: "ddd, D MMM YYYY, A h:mm [वाजतां]",
				},
				calendar: {
					sameDay: "[आयज] LT",
					nextDay: "[फाल्यां] LT",
					nextWeek: "[फुडलो] dddd[,] LT",
					lastDay: "[काल] LT",
					lastWeek: "[फाटलो] dddd[,] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s",
					past: "%s आदीं",
					s: t,
					ss: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: t,
					dd: t,
					M: t,
					MM: t,
					y: t,
					yy: t,
				},
				dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
				ordinal: function (e, t) {
					switch (t) {
						case "D":
							return e + "वेर"
						default:
						case "M":
						case "Q":
						case "DDD":
						case "d":
						case "w":
						case "W":
							return e
					}
				},
				week: { dow: 1, doy: 4 },
				meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"राती" === t
							? e < 4
								? e
								: e + 12
							: "सकाळीं" === t
							? e
							: "दनपारां" === t
							? e > 12
								? e
								: e + 12
							: "सांजे" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 4
						? "राती"
						: e < 12
						? "सकाळीं"
						: e < 16
						? "दनपारां"
						: e < 20
						? "सांजे"
						: "राती"
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n, a) {
				var r = {
					s: ["thoddea sekondamni", "thodde sekond"],
					ss: [e + " sekondamni", e + " sekond"],
					m: ["eka mintan", "ek minut"],
					mm: [e + " mintamni", e + " mintam"],
					h: ["eka voran", "ek vor"],
					hh: [e + " voramni", e + " voram"],
					d: ["eka disan", "ek dis"],
					dd: [e + " disamni", e + " dis"],
					M: ["eka mhoinean", "ek mhoino"],
					MM: [e + " mhoineamni", e + " mhoine"],
					y: ["eka vorsan", "ek voros"],
					yy: [e + " vorsamni", e + " vorsam"],
				}
				return a ? r[n][0] : r[n][1]
			}
			e.defineLocale("gom-latn", {
				months: {
					standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split(
						"_",
					),
					format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split(
						"_",
					),
					isFormat: /MMMM(\s)+D[oD]?/,
				},
				monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split(
					"_",
				),
				weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
				weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "A h:mm [vazta]",
					LTS: "A h:mm:ss [vazta]",
					L: "DD-MM-YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY A h:mm [vazta]",
					LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
					llll: "ddd, D MMM YYYY, A h:mm [vazta]",
				},
				calendar: {
					sameDay: "[Aiz] LT",
					nextDay: "[Faleam] LT",
					nextWeek: "[Fuddlo] dddd[,] LT",
					lastDay: "[Kal] LT",
					lastWeek: "[Fattlo] dddd[,] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s",
					past: "%s adim",
					s: t,
					ss: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: t,
					dd: t,
					M: t,
					MM: t,
					y: t,
					yy: t,
				},
				dayOfMonthOrdinalParse: /\d{1,2}(er)/,
				ordinal: function (e, t) {
					switch (t) {
						case "D":
							return e + "er"
						default:
						case "M":
						case "Q":
						case "DDD":
						case "d":
						case "w":
						case "W":
							return e
					}
				},
				week: { dow: 1, doy: 4 },
				meridiemParse: /rati|sokallim|donparam|sanje/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"rati" === t
							? e < 4
								? e
								: e + 12
							: "sokallim" === t
							? e
							: "donparam" === t
							? e > 12
								? e
								: e + 12
							: "sanje" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 4
						? "rati"
						: e < 12
						? "sokallim"
						: e < 16
						? "donparam"
						: e < 20
						? "sanje"
						: "rati"
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "૧",
					2: "૨",
					3: "૩",
					4: "૪",
					5: "૫",
					6: "૬",
					7: "૭",
					8: "૮",
					9: "૯",
					0: "૦",
				},
				n = {
					"૧": "1",
					"૨": "2",
					"૩": "3",
					"૪": "4",
					"૫": "5",
					"૬": "6",
					"૭": "7",
					"૮": "8",
					"૯": "9",
					"૦": "0",
				}
			e.defineLocale("gu", {
				months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split(
					"_",
				),
				monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split(
					"_",
				),
				weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
				weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
				longDateFormat: {
					LT: "A h:mm વાગ્યે",
					LTS: "A h:mm:ss વાગ્યે",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm વાગ્યે",
					LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે",
				},
				calendar: {
					sameDay: "[આજ] LT",
					nextDay: "[કાલે] LT",
					nextWeek: "dddd, LT",
					lastDay: "[ગઇકાલે] LT",
					lastWeek: "[પાછલા] dddd, LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s મા",
					past: "%s પહેલા",
					s: "અમુક પળો",
					ss: "%d સેકંડ",
					m: "એક મિનિટ",
					mm: "%d મિનિટ",
					h: "એક કલાક",
					hh: "%d કલાક",
					d: "એક દિવસ",
					dd: "%d દિવસ",
					M: "એક મહિનો",
					MM: "%d મહિનો",
					y: "એક વર્ષ",
					yy: "%d વર્ષ",
				},
				preparse: function (e) {
					return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
						return n[e]
					})
				},
				postformat: function (e) {
					return e.replace(/\d/g, function (e) {
						return t[e]
					})
				},
				meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"રાત" === t
							? e < 4
								? e
								: e + 12
							: "સવાર" === t
							? e
							: "બપોર" === t
							? e >= 10
								? e
								: e + 12
							: "સાંજ" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 4
						? "રાત"
						: e < 10
						? "સવાર"
						: e < 17
						? "બપોર"
						: e < 20
						? "સાંજ"
						: "રાત"
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("he", {
				months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
					"_",
				),
				monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split(
					"_",
				),
				weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
				weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
				weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D [ב]MMMM YYYY",
					LLL: "D [ב]MMMM YYYY HH:mm",
					LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
					l: "D/M/YYYY",
					ll: "D MMM YYYY",
					lll: "D MMM YYYY HH:mm",
					llll: "ddd, D MMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[היום ב־]LT",
					nextDay: "[מחר ב־]LT",
					nextWeek: "dddd [בשעה] LT",
					lastDay: "[אתמול ב־]LT",
					lastWeek: "[ביום] dddd [האחרון בשעה] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "בעוד %s",
					past: "לפני %s",
					s: "מספר שניות",
					ss: "%d שניות",
					m: "דקה",
					mm: "%d דקות",
					h: "שעה",
					hh: function (e) {
						return 2 === e ? "שעתיים" : e + " שעות"
					},
					d: "יום",
					dd: function (e) {
						return 2 === e ? "יומיים" : e + " ימים"
					},
					M: "חודש",
					MM: function (e) {
						return 2 === e ? "חודשיים" : e + " חודשים"
					},
					y: "שנה",
					yy: function (e) {
						return 2 === e
							? "שנתיים"
							: e % 10 == 0 && 10 !== e
							? e + " שנה"
							: e + " שנים"
					},
				},
				meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
				isPM: function (e) {
					return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
				},
				meridiem: function (e, t, n) {
					return e < 5
						? "לפנות בוקר"
						: e < 10
						? "בבוקר"
						: e < 12
						? n
							? 'לפנה"צ'
							: "לפני הצהריים"
						: e < 18
						? n
							? 'אחה"צ'
							: "אחרי הצהריים"
						: "בערב"
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "१",
					2: "२",
					3: "३",
					4: "४",
					5: "५",
					6: "६",
					7: "७",
					8: "८",
					9: "९",
					0: "०",
				},
				n = {
					"१": "1",
					"२": "2",
					"३": "3",
					"४": "4",
					"५": "5",
					"६": "6",
					"७": "7",
					"८": "8",
					"९": "9",
					"०": "0",
				}
			e.defineLocale("hi", {
				months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split(
					"_",
				),
				monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split(
					"_",
				),
				weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
				weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
				longDateFormat: {
					LT: "A h:mm बजे",
					LTS: "A h:mm:ss बजे",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm बजे",
					LLLL: "dddd, D MMMM YYYY, A h:mm बजे",
				},
				calendar: {
					sameDay: "[आज] LT",
					nextDay: "[कल] LT",
					nextWeek: "dddd, LT",
					lastDay: "[कल] LT",
					lastWeek: "[पिछले] dddd, LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s में",
					past: "%s पहले",
					s: "कुछ ही क्षण",
					ss: "%d सेकंड",
					m: "एक मिनट",
					mm: "%d मिनट",
					h: "एक घंटा",
					hh: "%d घंटे",
					d: "एक दिन",
					dd: "%d दिन",
					M: "एक महीने",
					MM: "%d महीने",
					y: "एक वर्ष",
					yy: "%d वर्ष",
				},
				preparse: function (e) {
					return e.replace(/[१२३४५६७८९०]/g, function (e) {
						return n[e]
					})
				},
				postformat: function (e) {
					return e.replace(/\d/g, function (e) {
						return t[e]
					})
				},
				meridiemParse: /रात|सुबह|दोपहर|शाम/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"रात" === t
							? e < 4
								? e
								: e + 12
							: "सुबह" === t
							? e
							: "दोपहर" === t
							? e >= 10
								? e
								: e + 12
							: "शाम" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 4
						? "रात"
						: e < 10
						? "सुबह"
						: e < 17
						? "दोपहर"
						: e < 20
						? "शाम"
						: "रात"
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n) {
				var a = e + " "
				switch (n) {
					case "ss":
						return (a +=
							1 === e
								? "sekunda"
								: 2 === e || 3 === e || 4 === e
								? "sekunde"
								: "sekundi")
					case "m":
						return t ? "jedna minuta" : "jedne minute"
					case "mm":
						return (a +=
							1 === e
								? "minuta"
								: 2 === e || 3 === e || 4 === e
								? "minute"
								: "minuta")
					case "h":
						return t ? "jedan sat" : "jednog sata"
					case "hh":
						return (a +=
							1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati")
					case "dd":
						return (a += 1 === e ? "dan" : "dana")
					case "MM":
						return (a +=
							1 === e
								? "mjesec"
								: 2 === e || 3 === e || 4 === e
								? "mjeseca"
								: "mjeseci")
					case "yy":
						return (a +=
							1 === e
								? "godina"
								: 2 === e || 3 === e || 4 === e
								? "godine"
								: "godina")
				}
			}
			e.defineLocale("hr", {
				months: {
					format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
						"_",
					),
					standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
						"_",
					),
				},
				monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
					"_",
				),
				weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
				weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "Do MMMM YYYY",
					LLL: "Do MMMM YYYY H:mm",
					LLLL: "dddd, Do MMMM YYYY H:mm",
				},
				calendar: {
					sameDay: "[danas u] LT",
					nextDay: "[sutra u] LT",
					nextWeek: function () {
						switch (this.day()) {
							case 0:
								return "[u] [nedjelju] [u] LT"
							case 3:
								return "[u] [srijedu] [u] LT"
							case 6:
								return "[u] [subotu] [u] LT"
							case 1:
							case 2:
							case 4:
							case 5:
								return "[u] dddd [u] LT"
						}
					},
					lastDay: "[jučer u] LT",
					lastWeek: function () {
						switch (this.day()) {
							case 0:
								return "[prošlu] [nedjelju] [u] LT"
							case 3:
								return "[prošlu] [srijedu] [u] LT"
							case 6:
								return "[prošle] [subote] [u] LT"
							case 1:
							case 2:
							case 4:
							case 5:
								return "[prošli] dddd [u] LT"
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "za %s",
					past: "prije %s",
					s: "par sekundi",
					ss: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: "dan",
					dd: t,
					M: "mjesec",
					MM: t,
					y: "godinu",
					yy: t,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(
				" ",
			)
			function n(e, t, n, a) {
				var r = e
				switch (n) {
					case "s":
						return a || t ? "néhány másodperc" : "néhány másodperce"
					case "ss":
						return r + (a || t) ? " másodperc" : " másodperce"
					case "m":
						return "egy" + (a || t ? " perc" : " perce")
					case "mm":
						return r + (a || t ? " perc" : " perce")
					case "h":
						return "egy" + (a || t ? " óra" : " órája")
					case "hh":
						return r + (a || t ? " óra" : " órája")
					case "d":
						return "egy" + (a || t ? " nap" : " napja")
					case "dd":
						return r + (a || t ? " nap" : " napja")
					case "M":
						return "egy" + (a || t ? " hónap" : " hónapja")
					case "MM":
						return r + (a || t ? " hónap" : " hónapja")
					case "y":
						return "egy" + (a || t ? " év" : " éve")
					case "yy":
						return r + (a || t ? " év" : " éve")
				}
				return ""
			}
			function a(e) {
				return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
			}
			e.defineLocale("hu", {
				months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split(
					"_",
				),
				monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split(
					"_",
				),
				weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split(
					"_",
				),
				weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
				weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "YYYY.MM.DD.",
					LL: "YYYY. MMMM D.",
					LLL: "YYYY. MMMM D. H:mm",
					LLLL: "YYYY. MMMM D., dddd H:mm",
				},
				meridiemParse: /de|du/i,
				isPM: function (e) {
					return "u" === e.charAt(1).toLowerCase()
				},
				meridiem: function (e, t, n) {
					return e < 12 ? (!0 === n ? "de" : "DE") : !0 === n ? "du" : "DU"
				},
				calendar: {
					sameDay: "[ma] LT[-kor]",
					nextDay: "[holnap] LT[-kor]",
					nextWeek: function () {
						return a.call(this, !0)
					},
					lastDay: "[tegnap] LT[-kor]",
					lastWeek: function () {
						return a.call(this, !1)
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "%s múlva",
					past: "%s",
					s: n,
					ss: n,
					m: n,
					mm: n,
					h: n,
					hh: n,
					d: n,
					dd: n,
					M: n,
					MM: n,
					y: n,
					yy: n,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("hy-am", {
				months: {
					format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split(
						"_",
					),
					standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split(
						"_",
					),
				},
				monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split(
					"_",
				),
				weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split(
					"_",
				),
				weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
				weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY թ.",
					LLL: "D MMMM YYYY թ., HH:mm",
					LLLL: "dddd, D MMMM YYYY թ., HH:mm",
				},
				calendar: {
					sameDay: "[այսօր] LT",
					nextDay: "[վաղը] LT",
					lastDay: "[երեկ] LT",
					nextWeek: function () {
						return "dddd [օրը ժամը] LT"
					},
					lastWeek: function () {
						return "[անցած] dddd [օրը ժամը] LT"
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "%s հետո",
					past: "%s առաջ",
					s: "մի քանի վայրկյան",
					ss: "%d վայրկյան",
					m: "րոպե",
					mm: "%d րոպե",
					h: "ժամ",
					hh: "%d ժամ",
					d: "օր",
					dd: "%d օր",
					M: "ամիս",
					MM: "%d ամիս",
					y: "տարի",
					yy: "%d տարի",
				},
				meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
				isPM: function (e) {
					return /^(ցերեկվա|երեկոյան)$/.test(e)
				},
				meridiem: function (e) {
					return e < 4
						? "գիշերվա"
						: e < 12
						? "առավոտվա"
						: e < 17
						? "ցերեկվա"
						: "երեկոյան"
				},
				dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
				ordinal: function (e, t) {
					switch (t) {
						case "DDD":
						case "w":
						case "W":
						case "DDDo":
							return 1 === e ? e + "-ին" : e + "-րդ"
						default:
							return e
					}
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("id", {
				months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split(
					"_",
				),
				weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
				weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
				weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
				longDateFormat: {
					LT: "HH.mm",
					LTS: "HH.mm.ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY [pukul] HH.mm",
					LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
				},
				meridiemParse: /pagi|siang|sore|malam/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"pagi" === t
							? e
							: "siang" === t
							? e >= 11
								? e
								: e + 12
							: "sore" === t || "malam" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
				},
				calendar: {
					sameDay: "[Hari ini pukul] LT",
					nextDay: "[Besok pukul] LT",
					nextWeek: "dddd [pukul] LT",
					lastDay: "[Kemarin pukul] LT",
					lastWeek: "dddd [lalu pukul] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "dalam %s",
					past: "%s yang lalu",
					s: "beberapa detik",
					ss: "%d detik",
					m: "semenit",
					mm: "%d menit",
					h: "sejam",
					hh: "%d jam",
					d: "sehari",
					dd: "%d hari",
					M: "sebulan",
					MM: "%d bulan",
					y: "setahun",
					yy: "%d tahun",
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e) {
				return e % 100 == 11 || e % 10 != 1
			}
			function n(e, n, a, r) {
				var s = e + " "
				switch (a) {
					case "s":
						return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum"
					case "ss":
						return t(e) ? s + (n || r ? "sekúndur" : "sekúndum") : s + "sekúnda"
					case "m":
						return n ? "mínúta" : "mínútu"
					case "mm":
						return t(e)
							? s + (n || r ? "mínútur" : "mínútum")
							: n
							? s + "mínúta"
							: s + "mínútu"
					case "hh":
						return t(e)
							? s + (n || r ? "klukkustundir" : "klukkustundum")
							: s + "klukkustund"
					case "d":
						return n ? "dagur" : r ? "dag" : "degi"
					case "dd":
						return t(e)
							? n
								? s + "dagar"
								: s + (r ? "daga" : "dögum")
							: n
							? s + "dagur"
							: s + (r ? "dag" : "degi")
					case "M":
						return n ? "mánuður" : r ? "mánuð" : "mánuði"
					case "MM":
						return t(e)
							? n
								? s + "mánuðir"
								: s + (r ? "mánuði" : "mánuðum")
							: n
							? s + "mánuður"
							: s + (r ? "mánuð" : "mánuði")
					case "y":
						return n || r ? "ár" : "ári"
					case "yy":
						return t(e)
							? s + (n || r ? "ár" : "árum")
							: s + (n || r ? "ár" : "ári")
				}
			}
			e.defineLocale("is", {
				months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split(
					"_",
				),
				monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split(
					"_",
				),
				weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split(
					"_",
				),
				weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
				weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY [kl.] H:mm",
					LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
				},
				calendar: {
					sameDay: "[í dag kl.] LT",
					nextDay: "[á morgun kl.] LT",
					nextWeek: "dddd [kl.] LT",
					lastDay: "[í gær kl.] LT",
					lastWeek: "[síðasta] dddd [kl.] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "eftir %s",
					past: "fyrir %s síðan",
					s: n,
					ss: n,
					m: n,
					mm: n,
					h: "klukkustund",
					hh: n,
					d: n,
					dd: n,
					M: n,
					MM: n,
					y: n,
					yy: n,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("it", {
				months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
					"_",
				),
				monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
					"_",
				),
				weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
					"_",
				),
				weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
				weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: function () {
						return (
							"[Oggi a" +
							(this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
							"]LT"
						)
					},
					nextDay: function () {
						return (
							"[Domani a" +
							(this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
							"]LT"
						)
					},
					nextWeek: function () {
						return (
							"dddd [a" +
							(this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
							"]LT"
						)
					},
					lastDay: function () {
						return (
							"[Ieri a" +
							(this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
							"]LT"
						)
					},
					lastWeek: function () {
						switch (this.day()) {
							case 0:
								return (
									"[La scorsa] dddd [a" +
									(this.hours() > 1
										? "lle "
										: 0 === this.hours()
										? " "
										: "ll'") +
									"]LT"
								)
							default:
								return (
									"[Lo scorso] dddd [a" +
									(this.hours() > 1
										? "lle "
										: 0 === this.hours()
										? " "
										: "ll'") +
									"]LT"
								)
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "tra %s",
					past: "%s fa",
					s: "alcuni secondi",
					ss: "%d secondi",
					m: "un minuto",
					mm: "%d minuti",
					h: "un'ora",
					hh: "%d ore",
					d: "un giorno",
					dd: "%d giorni",
					M: "un mese",
					MM: "%d mesi",
					y: "un anno",
					yy: "%d anni",
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("it-ch", {
				months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
					"_",
				),
				monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
					"_",
				),
				weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
					"_",
				),
				weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
				weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Oggi alle] LT",
					nextDay: "[Domani alle] LT",
					nextWeek: "dddd [alle] LT",
					lastDay: "[Ieri alle] LT",
					lastWeek: function () {
						switch (this.day()) {
							case 0:
								return "[la scorsa] dddd [alle] LT"
							default:
								return "[lo scorso] dddd [alle] LT"
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: function (e) {
						return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
					},
					past: "%s fa",
					s: "alcuni secondi",
					ss: "%d secondi",
					m: "un minuto",
					mm: "%d minuti",
					h: "un'ora",
					hh: "%d ore",
					d: "un giorno",
					dd: "%d giorni",
					M: "un mese",
					MM: "%d mesi",
					y: "un anno",
					yy: "%d anni",
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("ja", {
				eras: [
					{
						since: "2019-05-01",
						offset: 1,
						name: "令和",
						narrow: "㋿",
						abbr: "R",
					},
					{
						since: "1989-01-08",
						until: "2019-04-30",
						offset: 1,
						name: "平成",
						narrow: "㍻",
						abbr: "H",
					},
					{
						since: "1926-12-25",
						until: "1989-01-07",
						offset: 1,
						name: "昭和",
						narrow: "㍼",
						abbr: "S",
					},
					{
						since: "1912-07-30",
						until: "1926-12-24",
						offset: 1,
						name: "大正",
						narrow: "㍽",
						abbr: "T",
					},
					{
						since: "1873-01-01",
						until: "1912-07-29",
						offset: 6,
						name: "明治",
						narrow: "㍾",
						abbr: "M",
					},
					{
						since: "0001-01-01",
						until: "1873-12-31",
						offset: 1,
						name: "西暦",
						narrow: "AD",
						abbr: "AD",
					},
					{
						since: "0000-12-31",
						until: -1 / 0,
						offset: 1,
						name: "紀元前",
						narrow: "BC",
						abbr: "BC",
					},
				],
				eraYearOrdinalRegex: /(元|\d+)年/,
				eraYearOrdinalParse: function (e, t) {
					return "元" === t[1] ? 1 : parseInt(t[1] || e, 10)
				},
				months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
				monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
					"_",
				),
				weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
				weekdaysShort: "日_月_火_水_木_金_土".split("_"),
				weekdaysMin: "日_月_火_水_木_金_土".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY/MM/DD",
					LL: "YYYY年M月D日",
					LLL: "YYYY年M月D日 HH:mm",
					LLLL: "YYYY年M月D日 dddd HH:mm",
					l: "YYYY/MM/DD",
					ll: "YYYY年M月D日",
					lll: "YYYY年M月D日 HH:mm",
					llll: "YYYY年M月D日(ddd) HH:mm",
				},
				meridiemParse: /午前|午後/i,
				isPM: function (e) {
					return "午後" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "午前" : "午後"
				},
				calendar: {
					sameDay: "[今日] LT",
					nextDay: "[明日] LT",
					nextWeek: function (e) {
						return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT"
					},
					lastDay: "[昨日] LT",
					lastWeek: function (e) {
						return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT"
					},
					sameElse: "L",
				},
				dayOfMonthOrdinalParse: /\d{1,2}日/,
				ordinal: function (e, t) {
					switch (t) {
						case "y":
							return 1 === e ? "元年" : e + "年"
						case "d":
						case "D":
						case "DDD":
							return e + "日"
						default:
							return e
					}
				},
				relativeTime: {
					future: "%s後",
					past: "%s前",
					s: "数秒",
					ss: "%d秒",
					m: "1分",
					mm: "%d分",
					h: "1時間",
					hh: "%d時間",
					d: "1日",
					dd: "%d日",
					M: "1ヶ月",
					MM: "%dヶ月",
					y: "1年",
					yy: "%d年",
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("jv", {
				months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split(
					"_",
				),
				weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
				weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
				weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
				longDateFormat: {
					LT: "HH.mm",
					LTS: "HH.mm.ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY [pukul] HH.mm",
					LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
				},
				meridiemParse: /enjing|siyang|sonten|ndalu/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"enjing" === t
							? e
							: "siyang" === t
							? e >= 11
								? e
								: e + 12
							: "sonten" === t || "ndalu" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 11
						? "enjing"
						: e < 15
						? "siyang"
						: e < 19
						? "sonten"
						: "ndalu"
				},
				calendar: {
					sameDay: "[Dinten puniko pukul] LT",
					nextDay: "[Mbenjang pukul] LT",
					nextWeek: "dddd [pukul] LT",
					lastDay: "[Kala wingi pukul] LT",
					lastWeek: "dddd [kepengker pukul] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "wonten ing %s",
					past: "%s ingkang kepengker",
					s: "sawetawis detik",
					ss: "%d detik",
					m: "setunggal menit",
					mm: "%d menit",
					h: "setunggal jam",
					hh: "%d jam",
					d: "sedinten",
					dd: "%d dinten",
					M: "sewulan",
					MM: "%d wulan",
					y: "setaun",
					yy: "%d taun",
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("ka", {
				months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split(
					"_",
				),
				monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split(
					"_",
				),
				weekdays: {
					standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split(
						"_",
					),
					format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split(
						"_",
					),
					isFormat: /(წინა|შემდეგ)/,
				},
				weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
				weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[დღეს] LT[-ზე]",
					nextDay: "[ხვალ] LT[-ზე]",
					lastDay: "[გუშინ] LT[-ზე]",
					nextWeek: "[შემდეგ] dddd LT[-ზე]",
					lastWeek: "[წინა] dddd LT-ზე",
					sameElse: "L",
				},
				relativeTime: {
					future: function (e) {
						return e.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, function (
							e,
							t,
							n,
						) {
							return "ი" === n ? t + "ში" : t + n + "ში"
						})
					},
					past: function (e) {
						return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
							? e.replace(/(ი|ე)$/, "ის წინ")
							: /წელი/.test(e)
							? e.replace(/წელი$/, "წლის წინ")
							: e
					},
					s: "რამდენიმე წამი",
					ss: "%d წამი",
					m: "წუთი",
					mm: "%d წუთი",
					h: "საათი",
					hh: "%d საათი",
					d: "დღე",
					dd: "%d დღე",
					M: "თვე",
					MM: "%d თვე",
					y: "წელი",
					yy: "%d წელი",
				},
				dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
				ordinal: function (e) {
					return 0 === e
						? e
						: 1 === e
						? e + "-ლი"
						: e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0
						? "მე-" + e
						: e + "-ე"
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
				0: "-ші",
				1: "-ші",
				2: "-ші",
				3: "-ші",
				4: "-ші",
				5: "-ші",
				6: "-шы",
				7: "-ші",
				8: "-ші",
				9: "-шы",
				10: "-шы",
				20: "-шы",
				30: "-шы",
				40: "-шы",
				50: "-ші",
				60: "-шы",
				70: "-ші",
				80: "-ші",
				90: "-шы",
				100: "-ші",
			}
			e.defineLocale("kk", {
				months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split(
					"_",
				),
				monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split(
					"_",
				),
				weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split(
					"_",
				),
				weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
				weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Бүгін сағат] LT",
					nextDay: "[Ертең сағат] LT",
					nextWeek: "dddd [сағат] LT",
					lastDay: "[Кеше сағат] LT",
					lastWeek: "[Өткен аптаның] dddd [сағат] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s ішінде",
					past: "%s бұрын",
					s: "бірнеше секунд",
					ss: "%d секунд",
					m: "бір минут",
					mm: "%d минут",
					h: "бір сағат",
					hh: "%d сағат",
					d: "бір күн",
					dd: "%d күн",
					M: "бір ай",
					MM: "%d ай",
					y: "бір жыл",
					yy: "%d жыл",
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
				ordinal: function (e) {
					return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "១",
					2: "២",
					3: "៣",
					4: "៤",
					5: "៥",
					6: "៦",
					7: "៧",
					8: "៨",
					9: "៩",
					0: "០",
				},
				n = {
					"១": "1",
					"២": "2",
					"៣": "3",
					"៤": "4",
					"៥": "5",
					"៦": "6",
					"៧": "7",
					"៨": "8",
					"៩": "9",
					"០": "0",
				}
			e.defineLocale("km", {
				months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
					"_",
				),
				monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
					"_",
				),
				weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
				weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
				weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				meridiemParse: /ព្រឹក|ល្ងាច/,
				isPM: function (e) {
					return "ល្ងាច" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "ព្រឹក" : "ល្ងាច"
				},
				calendar: {
					sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
					nextDay: "[ស្អែក ម៉ោង] LT",
					nextWeek: "dddd [ម៉ោង] LT",
					lastDay: "[ម្សិលមិញ ម៉ោង] LT",
					lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%sទៀត",
					past: "%sមុន",
					s: "ប៉ុន្មានវិនាទី",
					ss: "%d វិនាទី",
					m: "មួយនាទី",
					mm: "%d នាទី",
					h: "មួយម៉ោង",
					hh: "%d ម៉ោង",
					d: "មួយថ្ងៃ",
					dd: "%d ថ្ងៃ",
					M: "មួយខែ",
					MM: "%d ខែ",
					y: "មួយឆ្នាំ",
					yy: "%d ឆ្នាំ",
				},
				dayOfMonthOrdinalParse: /ទី\d{1,2}/,
				ordinal: "ទី%d",
				preparse: function (e) {
					return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
						return n[e]
					})
				},
				postformat: function (e) {
					return e.replace(/\d/g, function (e) {
						return t[e]
					})
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "೧",
					2: "೨",
					3: "೩",
					4: "೪",
					5: "೫",
					6: "೬",
					7: "೭",
					8: "೮",
					9: "೯",
					0: "೦",
				},
				n = {
					"೧": "1",
					"೨": "2",
					"೩": "3",
					"೪": "4",
					"೫": "5",
					"೬": "6",
					"೭": "7",
					"೮": "8",
					"೯": "9",
					"೦": "0",
				}
			e.defineLocale("kn", {
				months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split(
					"_",
				),
				monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split(
					"_",
				),
				weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
				weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
				longDateFormat: {
					LT: "A h:mm",
					LTS: "A h:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm",
					LLLL: "dddd, D MMMM YYYY, A h:mm",
				},
				calendar: {
					sameDay: "[ಇಂದು] LT",
					nextDay: "[ನಾಳೆ] LT",
					nextWeek: "dddd, LT",
					lastDay: "[ನಿನ್ನೆ] LT",
					lastWeek: "[ಕೊನೆಯ] dddd, LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s ನಂತರ",
					past: "%s ಹಿಂದೆ",
					s: "ಕೆಲವು ಕ್ಷಣಗಳು",
					ss: "%d ಸೆಕೆಂಡುಗಳು",
					m: "ಒಂದು ನಿಮಿಷ",
					mm: "%d ನಿಮಿಷ",
					h: "ಒಂದು ಗಂಟೆ",
					hh: "%d ಗಂಟೆ",
					d: "ಒಂದು ದಿನ",
					dd: "%d ದಿನ",
					M: "ಒಂದು ತಿಂಗಳು",
					MM: "%d ತಿಂಗಳು",
					y: "ಒಂದು ವರ್ಷ",
					yy: "%d ವರ್ಷ",
				},
				preparse: function (e) {
					return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
						return n[e]
					})
				},
				postformat: function (e) {
					return e.replace(/\d/g, function (e) {
						return t[e]
					})
				},
				meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"ರಾತ್ರಿ" === t
							? e < 4
								? e
								: e + 12
							: "ಬೆಳಿಗ್ಗೆ" === t
							? e
							: "ಮಧ್ಯಾಹ್ನ" === t
							? e >= 10
								? e
								: e + 12
							: "ಸಂಜೆ" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 4
						? "ರಾತ್ರಿ"
						: e < 10
						? "ಬೆಳಿಗ್ಗೆ"
						: e < 17
						? "ಮಧ್ಯಾಹ್ನ"
						: e < 20
						? "ಸಂಜೆ"
						: "ರಾತ್ರಿ"
				},
				dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
				ordinal: function (e) {
					return e + "ನೇ"
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("ko", {
				months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
				monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
					"_",
				),
				weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
				weekdaysShort: "일_월_화_수_목_금_토".split("_"),
				weekdaysMin: "일_월_화_수_목_금_토".split("_"),
				longDateFormat: {
					LT: "A h:mm",
					LTS: "A h:mm:ss",
					L: "YYYY.MM.DD.",
					LL: "YYYY년 MMMM D일",
					LLL: "YYYY년 MMMM D일 A h:mm",
					LLLL: "YYYY년 MMMM D일 dddd A h:mm",
					l: "YYYY.MM.DD.",
					ll: "YYYY년 MMMM D일",
					lll: "YYYY년 MMMM D일 A h:mm",
					llll: "YYYY년 MMMM D일 dddd A h:mm",
				},
				calendar: {
					sameDay: "오늘 LT",
					nextDay: "내일 LT",
					nextWeek: "dddd LT",
					lastDay: "어제 LT",
					lastWeek: "지난주 dddd LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s 후",
					past: "%s 전",
					s: "몇 초",
					ss: "%d초",
					m: "1분",
					mm: "%d분",
					h: "한 시간",
					hh: "%d시간",
					d: "하루",
					dd: "%d일",
					M: "한 달",
					MM: "%d달",
					y: "일 년",
					yy: "%d년",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
				ordinal: function (e, t) {
					switch (t) {
						case "d":
						case "D":
						case "DDD":
							return e + "일"
						case "M":
							return e + "월"
						case "w":
						case "W":
							return e + "주"
						default:
							return e
					}
				},
				meridiemParse: /오전|오후/,
				isPM: function (e) {
					return "오후" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "오전" : "오후"
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "١",
					2: "٢",
					3: "٣",
					4: "٤",
					5: "٥",
					6: "٦",
					7: "٧",
					8: "٨",
					9: "٩",
					0: "٠",
				},
				n = {
					"١": "1",
					"٢": "2",
					"٣": "3",
					"٤": "4",
					"٥": "5",
					"٦": "6",
					"٧": "7",
					"٨": "8",
					"٩": "9",
					"٠": "0",
				},
				a = [
					"کانونی دووەم",
					"شوبات",
					"ئازار",
					"نیسان",
					"ئایار",
					"حوزەیران",
					"تەمموز",
					"ئاب",
					"ئەیلوول",
					"تشرینی یەكەم",
					"تشرینی دووەم",
					"كانونی یەکەم",
				]
			e.defineLocale("ku", {
				months: a,
				monthsShort: a,
				weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split(
					"_",
				),
				weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split(
					"_",
				),
				weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				meridiemParse: /ئێواره‌|به‌یانی/,
				isPM: function (e) {
					return /ئێواره‌/.test(e)
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "به‌یانی" : "ئێواره‌"
				},
				calendar: {
					sameDay: "[ئه‌مرۆ كاتژمێر] LT",
					nextDay: "[به‌یانی كاتژمێر] LT",
					nextWeek: "dddd [كاتژمێر] LT",
					lastDay: "[دوێنێ كاتژمێر] LT",
					lastWeek: "dddd [كاتژمێر] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "له‌ %s",
					past: "%s",
					s: "چه‌ند چركه‌یه‌ك",
					ss: "چركه‌ %d",
					m: "یه‌ك خوله‌ك",
					mm: "%d خوله‌ك",
					h: "یه‌ك كاتژمێر",
					hh: "%d كاتژمێر",
					d: "یه‌ك ڕۆژ",
					dd: "%d ڕۆژ",
					M: "یه‌ك مانگ",
					MM: "%d مانگ",
					y: "یه‌ك ساڵ",
					yy: "%d ساڵ",
				},
				preparse: function (e) {
					return e
						.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
							return n[e]
						})
						.replace(/،/g, ",")
				},
				postformat: function (e) {
					return e
						.replace(/\d/g, function (e) {
							return t[e]
						})
						.replace(/,/g, "،")
				},
				week: { dow: 6, doy: 12 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
				0: "-чү",
				1: "-чи",
				2: "-чи",
				3: "-чү",
				4: "-чү",
				5: "-чи",
				6: "-чы",
				7: "-чи",
				8: "-чи",
				9: "-чу",
				10: "-чу",
				20: "-чы",
				30: "-чу",
				40: "-чы",
				50: "-чү",
				60: "-чы",
				70: "-чи",
				80: "-чи",
				90: "-чу",
				100: "-чү",
			}
			e.defineLocale("ky", {
				months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
					"_",
				),
				monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split(
					"_",
				),
				weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split(
					"_",
				),
				weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
				weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Бүгүн саат] LT",
					nextDay: "[Эртең саат] LT",
					nextWeek: "dddd [саат] LT",
					lastDay: "[Кечээ саат] LT",
					lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s ичинде",
					past: "%s мурун",
					s: "бирнече секунд",
					ss: "%d секунд",
					m: "бир мүнөт",
					mm: "%d мүнөт",
					h: "бир саат",
					hh: "%d саат",
					d: "бир күн",
					dd: "%d күн",
					M: "бир ай",
					MM: "%d ай",
					y: "бир жыл",
					yy: "%d жыл",
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
				ordinal: function (e) {
					return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n, a) {
				var r = {
					m: ["eng Minutt", "enger Minutt"],
					h: ["eng Stonn", "enger Stonn"],
					d: ["een Dag", "engem Dag"],
					M: ["ee Mount", "engem Mount"],
					y: ["ee Joer", "engem Joer"],
				}
				return t ? r[n][0] : r[n][1]
			}
			function n(e) {
				if (((e = parseInt(e, 10)), isNaN(e))) return !1
				if (e < 0) return !0
				if (e < 10) return 4 <= e && e <= 7
				if (e < 100) {
					var t = e % 10
					return n(0 === t ? e / 10 : t)
				}
				if (e < 1e4) {
					for (; e >= 10; ) e /= 10
					return n(e)
				}
				return n((e /= 1e3))
			}
			e.defineLocale("lb", {
				months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
					"_",
				),
				monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split(
					"_",
				),
				weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
				weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm [Auer]",
					LTS: "H:mm:ss [Auer]",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm [Auer]",
					LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
				},
				calendar: {
					sameDay: "[Haut um] LT",
					sameElse: "L",
					nextDay: "[Muer um] LT",
					nextWeek: "dddd [um] LT",
					lastDay: "[Gëschter um] LT",
					lastWeek: function () {
						switch (this.day()) {
							case 2:
							case 4:
								return "[Leschten] dddd [um] LT"
							default:
								return "[Leschte] dddd [um] LT"
						}
					},
				},
				relativeTime: {
					future: function (e) {
						return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
					},
					past: function (e) {
						return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
					},
					s: "e puer Sekonnen",
					ss: "%d Sekonnen",
					m: t,
					mm: "%d Minutten",
					h: t,
					hh: "%d Stonnen",
					d: t,
					dd: "%d Deeg",
					M: t,
					MM: "%d Méint",
					y: t,
					yy: "%d Joer",
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("lo", {
				months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
					"_",
				),
				monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
					"_",
				),
				weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
				weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
				weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "ວັນdddd D MMMM YYYY HH:mm",
				},
				meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
				isPM: function (e) {
					return "ຕອນແລງ" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
				},
				calendar: {
					sameDay: "[ມື້ນີ້ເວລາ] LT",
					nextDay: "[ມື້ອື່ນເວລາ] LT",
					nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
					lastDay: "[ມື້ວານນີ້ເວລາ] LT",
					lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "ອີກ %s",
					past: "%sຜ່ານມາ",
					s: "ບໍ່ເທົ່າໃດວິນາທີ",
					ss: "%d ວິນາທີ",
					m: "1 ນາທີ",
					mm: "%d ນາທີ",
					h: "1 ຊົ່ວໂມງ",
					hh: "%d ຊົ່ວໂມງ",
					d: "1 ມື້",
					dd: "%d ມື້",
					M: "1 ເດືອນ",
					MM: "%d ເດືອນ",
					y: "1 ປີ",
					yy: "%d ປີ",
				},
				dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
				ordinal: function (e) {
					return "ທີ່" + e
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
				ss: "sekundė_sekundžių_sekundes",
				m: "minutė_minutės_minutę",
				mm: "minutės_minučių_minutes",
				h: "valanda_valandos_valandą",
				hh: "valandos_valandų_valandas",
				d: "diena_dienos_dieną",
				dd: "dienos_dienų_dienas",
				M: "mėnuo_mėnesio_mėnesį",
				MM: "mėnesiai_mėnesių_mėnesius",
				y: "metai_metų_metus",
				yy: "metai_metų_metus",
			}
			function n(e, t, n, a) {
				return t ? r(n)[0] : a ? r(n)[1] : r(n)[2]
			}
			function a(e) {
				return e % 10 == 0 || (e > 10 && e < 20)
			}
			function r(e) {
				return t[e].split("_")
			}
			function s(e, t, s, i) {
				var o = e + " "
				return 1 === e
					? o + n(0, t, s[0], i)
					: t
					? o + (a(e) ? r(s)[1] : r(s)[0])
					: i
					? o + r(s)[1]
					: o + (a(e) ? r(s)[1] : r(s)[2])
			}
			e.defineLocale("lt", {
				months: {
					format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split(
						"_",
					),
					standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split(
						"_",
					),
					isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
				},
				monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split(
					"_",
				),
				weekdays: {
					format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split(
						"_",
					),
					standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split(
						"_",
					),
					isFormat: /dddd HH:mm/,
				},
				weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
				weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY-MM-DD",
					LL: "YYYY [m.] MMMM D [d.]",
					LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
					LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
					l: "YYYY-MM-DD",
					ll: "YYYY [m.] MMMM D [d.]",
					lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
					llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
				},
				calendar: {
					sameDay: "[Šiandien] LT",
					nextDay: "[Rytoj] LT",
					nextWeek: "dddd LT",
					lastDay: "[Vakar] LT",
					lastWeek: "[Praėjusį] dddd LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "po %s",
					past: "prieš %s",
					s: function (e, t, n, a) {
						return t
							? "kelios sekundės"
							: a
							? "kelių sekundžių"
							: "kelias sekundes"
					},
					ss: s,
					m: n,
					mm: s,
					h: n,
					hh: s,
					d: n,
					dd: s,
					M: n,
					MM: s,
					y: n,
					yy: s,
				},
				dayOfMonthOrdinalParse: /\d{1,2}-oji/,
				ordinal: function (e) {
					return e + "-oji"
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
				ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
				m: "minūtes_minūtēm_minūte_minūtes".split("_"),
				mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
				h: "stundas_stundām_stunda_stundas".split("_"),
				hh: "stundas_stundām_stunda_stundas".split("_"),
				d: "dienas_dienām_diena_dienas".split("_"),
				dd: "dienas_dienām_diena_dienas".split("_"),
				M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
				MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
				y: "gada_gadiem_gads_gadi".split("_"),
				yy: "gada_gadiem_gads_gadi".split("_"),
			}
			function n(e, t, n) {
				return n
					? t % 10 == 1 && t % 100 != 11
						? e[2]
						: e[3]
					: t % 10 == 1 && t % 100 != 11
					? e[0]
					: e[1]
			}
			function a(e, a, r) {
				return e + " " + n(t[r], e, a)
			}
			function r(e, a, r) {
				return n(t[r], e, a)
			}
			e.defineLocale("lv", {
				months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split(
					"_",
				),
				monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split(
					"_",
				),
				weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split(
					"_",
				),
				weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
				weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY.",
					LL: "YYYY. [gada] D. MMMM",
					LLL: "YYYY. [gada] D. MMMM, HH:mm",
					LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
				},
				calendar: {
					sameDay: "[Šodien pulksten] LT",
					nextDay: "[Rīt pulksten] LT",
					nextWeek: "dddd [pulksten] LT",
					lastDay: "[Vakar pulksten] LT",
					lastWeek: "[Pagājušā] dddd [pulksten] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "pēc %s",
					past: "pirms %s",
					s: function (e, t) {
						return t ? "dažas sekundes" : "dažām sekundēm"
					},
					ss: a,
					m: r,
					mm: a,
					h: r,
					hh: a,
					d: r,
					dd: a,
					M: r,
					MM: a,
					y: r,
					yy: a,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
				words: {
					ss: ["sekund", "sekunda", "sekundi"],
					m: ["jedan minut", "jednog minuta"],
					mm: ["minut", "minuta", "minuta"],
					h: ["jedan sat", "jednog sata"],
					hh: ["sat", "sata", "sati"],
					dd: ["dan", "dana", "dana"],
					MM: ["mjesec", "mjeseca", "mjeseci"],
					yy: ["godina", "godine", "godina"],
				},
				correctGrammaticalCase: function (e, t) {
					return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
				},
				translate: function (e, n, a) {
					var r = t.words[a]
					return 1 === a.length
						? n
							? r[0]
							: r[1]
						: e + " " + t.correctGrammaticalCase(e, r)
				},
			}
			e.defineLocale("me", {
				months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
					"_",
				),
				monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
					"_",
				),
				weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
				weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd, D. MMMM YYYY H:mm",
				},
				calendar: {
					sameDay: "[danas u] LT",
					nextDay: "[sjutra u] LT",
					nextWeek: function () {
						switch (this.day()) {
							case 0:
								return "[u] [nedjelju] [u] LT"
							case 3:
								return "[u] [srijedu] [u] LT"
							case 6:
								return "[u] [subotu] [u] LT"
							case 1:
							case 2:
							case 4:
							case 5:
								return "[u] dddd [u] LT"
						}
					},
					lastDay: "[juče u] LT",
					lastWeek: function () {
						return [
							"[prošle] [nedjelje] [u] LT",
							"[prošlog] [ponedjeljka] [u] LT",
							"[prošlog] [utorka] [u] LT",
							"[prošle] [srijede] [u] LT",
							"[prošlog] [četvrtka] [u] LT",
							"[prošlog] [petka] [u] LT",
							"[prošle] [subote] [u] LT",
						][this.day()]
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "za %s",
					past: "prije %s",
					s: "nekoliko sekundi",
					ss: t.translate,
					m: t.translate,
					mm: t.translate,
					h: t.translate,
					hh: t.translate,
					d: "dan",
					dd: t.translate,
					M: "mjesec",
					MM: t.translate,
					y: "godinu",
					yy: t.translate,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("mi", {
				months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split(
					"_",
				),
				monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split(
					"_",
				),
				monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
				monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
				monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
				monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
				weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
				weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
				weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY [i] HH:mm",
					LLLL: "dddd, D MMMM YYYY [i] HH:mm",
				},
				calendar: {
					sameDay: "[i teie mahana, i] LT",
					nextDay: "[apopo i] LT",
					nextWeek: "dddd [i] LT",
					lastDay: "[inanahi i] LT",
					lastWeek: "dddd [whakamutunga i] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "i roto i %s",
					past: "%s i mua",
					s: "te hēkona ruarua",
					ss: "%d hēkona",
					m: "he meneti",
					mm: "%d meneti",
					h: "te haora",
					hh: "%d haora",
					d: "he ra",
					dd: "%d ra",
					M: "he marama",
					MM: "%d marama",
					y: "he tau",
					yy: "%d tau",
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("mk", {
				months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split(
					"_",
				),
				monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split(
					"_",
				),
				weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split(
					"_",
				),
				weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
				weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "D.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY H:mm",
					LLLL: "dddd, D MMMM YYYY H:mm",
				},
				calendar: {
					sameDay: "[Денес во] LT",
					nextDay: "[Утре во] LT",
					nextWeek: "[Во] dddd [во] LT",
					lastDay: "[Вчера во] LT",
					lastWeek: function () {
						switch (this.day()) {
							case 0:
							case 3:
							case 6:
								return "[Изминатата] dddd [во] LT"
							case 1:
							case 2:
							case 4:
							case 5:
								return "[Изминатиот] dddd [во] LT"
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "за %s",
					past: "пред %s",
					s: "неколку секунди",
					ss: "%d секунди",
					m: "една минута",
					mm: "%d минути",
					h: "еден час",
					hh: "%d часа",
					d: "еден ден",
					dd: "%d дена",
					M: "еден месец",
					MM: "%d месеци",
					y: "една година",
					yy: "%d години",
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
				ordinal: function (e) {
					var t = e % 10,
						n = e % 100
					return 0 === e
						? e + "-ев"
						: 0 === n
						? e + "-ен"
						: n > 10 && n < 20
						? e + "-ти"
						: 1 === t
						? e + "-ви"
						: 2 === t
						? e + "-ри"
						: 7 === t || 8 === t
						? e + "-ми"
						: e + "-ти"
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("ml", {
				months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split(
					"_",
				),
				monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split(
					"_",
				),
				weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
				weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
				longDateFormat: {
					LT: "A h:mm -നു",
					LTS: "A h:mm:ss -നു",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm -നു",
					LLLL: "dddd, D MMMM YYYY, A h:mm -നു",
				},
				calendar: {
					sameDay: "[ഇന്ന്] LT",
					nextDay: "[നാളെ] LT",
					nextWeek: "dddd, LT",
					lastDay: "[ഇന്നലെ] LT",
					lastWeek: "[കഴിഞ്ഞ] dddd, LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s കഴിഞ്ഞ്",
					past: "%s മുൻപ്",
					s: "അൽപ നിമിഷങ്ങൾ",
					ss: "%d സെക്കൻഡ്",
					m: "ഒരു മിനിറ്റ്",
					mm: "%d മിനിറ്റ്",
					h: "ഒരു മണിക്കൂർ",
					hh: "%d മണിക്കൂർ",
					d: "ഒരു ദിവസം",
					dd: "%d ദിവസം",
					M: "ഒരു മാസം",
					MM: "%d മാസം",
					y: "ഒരു വർഷം",
					yy: "%d വർഷം",
				},
				meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						("രാത്രി" === t && e >= 4) ||
						"ഉച്ച കഴിഞ്ഞ്" === t ||
						"വൈകുന്നേരം" === t
							? e + 12
							: e
					)
				},
				meridiem: function (e, t, n) {
					return e < 4
						? "രാത്രി"
						: e < 12
						? "രാവിലെ"
						: e < 17
						? "ഉച്ച കഴിഞ്ഞ്"
						: e < 20
						? "വൈകുന്നേരം"
						: "രാത്രി"
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n, a) {
				switch (n) {
					case "s":
						return t ? "хэдхэн секунд" : "хэдхэн секундын"
					case "ss":
						return e + (t ? " секунд" : " секундын")
					case "m":
					case "mm":
						return e + (t ? " минут" : " минутын")
					case "h":
					case "hh":
						return e + (t ? " цаг" : " цагийн")
					case "d":
					case "dd":
						return e + (t ? " өдөр" : " өдрийн")
					case "M":
					case "MM":
						return e + (t ? " сар" : " сарын")
					case "y":
					case "yy":
						return e + (t ? " жил" : " жилийн")
					default:
						return e
				}
			}
			e.defineLocale("mn", {
				months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split(
					"_",
				),
				monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
				weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
				weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY-MM-DD",
					LL: "YYYY оны MMMMын D",
					LLL: "YYYY оны MMMMын D HH:mm",
					LLLL: "dddd, YYYY оны MMMMын D HH:mm",
				},
				meridiemParse: /ҮӨ|ҮХ/i,
				isPM: function (e) {
					return "ҮХ" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "ҮӨ" : "ҮХ"
				},
				calendar: {
					sameDay: "[Өнөөдөр] LT",
					nextDay: "[Маргааш] LT",
					nextWeek: "[Ирэх] dddd LT",
					lastDay: "[Өчигдөр] LT",
					lastWeek: "[Өнгөрсөн] dddd LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s дараа",
					past: "%s өмнө",
					s: t,
					ss: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: t,
					dd: t,
					M: t,
					MM: t,
					y: t,
					yy: t,
				},
				dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
				ordinal: function (e, t) {
					switch (t) {
						case "d":
						case "D":
						case "DDD":
							return e + " өдөр"
						default:
							return e
					}
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "१",
					2: "२",
					3: "३",
					4: "४",
					5: "५",
					6: "६",
					7: "७",
					8: "८",
					9: "९",
					0: "०",
				},
				n = {
					"१": "1",
					"२": "2",
					"३": "3",
					"४": "4",
					"५": "5",
					"६": "6",
					"७": "7",
					"८": "8",
					"९": "9",
					"०": "0",
				}
			function a(e, t, n, a) {
				var r = ""
				if (t)
					switch (n) {
						case "s":
							r = "काही सेकंद"
							break
						case "ss":
							r = "%d सेकंद"
							break
						case "m":
							r = "एक मिनिट"
							break
						case "mm":
							r = "%d मिनिटे"
							break
						case "h":
							r = "एक तास"
							break
						case "hh":
							r = "%d तास"
							break
						case "d":
							r = "एक दिवस"
							break
						case "dd":
							r = "%d दिवस"
							break
						case "M":
							r = "एक महिना"
							break
						case "MM":
							r = "%d महिने"
							break
						case "y":
							r = "एक वर्ष"
							break
						case "yy":
							r = "%d वर्षे"
					}
				else
					switch (n) {
						case "s":
							r = "काही सेकंदां"
							break
						case "ss":
							r = "%d सेकंदां"
							break
						case "m":
							r = "एका मिनिटा"
							break
						case "mm":
							r = "%d मिनिटां"
							break
						case "h":
							r = "एका तासा"
							break
						case "hh":
							r = "%d तासां"
							break
						case "d":
							r = "एका दिवसा"
							break
						case "dd":
							r = "%d दिवसां"
							break
						case "M":
							r = "एका महिन्या"
							break
						case "MM":
							r = "%d महिन्यां"
							break
						case "y":
							r = "एका वर्षा"
							break
						case "yy":
							r = "%d वर्षां"
					}
				return r.replace(/%d/i, e)
			}
			e.defineLocale("mr", {
				months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
					"_",
				),
				monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split(
					"_",
				),
				weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
				weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
				longDateFormat: {
					LT: "A h:mm वाजता",
					LTS: "A h:mm:ss वाजता",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm वाजता",
					LLLL: "dddd, D MMMM YYYY, A h:mm वाजता",
				},
				calendar: {
					sameDay: "[आज] LT",
					nextDay: "[उद्या] LT",
					nextWeek: "dddd, LT",
					lastDay: "[काल] LT",
					lastWeek: "[मागील] dddd, LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%sमध्ये",
					past: "%sपूर्वी",
					s: a,
					ss: a,
					m: a,
					mm: a,
					h: a,
					hh: a,
					d: a,
					dd: a,
					M: a,
					MM: a,
					y: a,
					yy: a,
				},
				preparse: function (e) {
					return e.replace(/[१२३४५६७८९०]/g, function (e) {
						return n[e]
					})
				},
				postformat: function (e) {
					return e.replace(/\d/g, function (e) {
						return t[e]
					})
				},
				meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"पहाटे" === t || "सकाळी" === t
							? e
							: "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t
							? e >= 12
								? e
								: e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e >= 0 && e < 6
						? "पहाटे"
						: e < 12
						? "सकाळी"
						: e < 17
						? "दुपारी"
						: e < 20
						? "सायंकाळी"
						: "रात्री"
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("ms", {
				months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
					"_",
				),
				weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
				weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
				weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
				longDateFormat: {
					LT: "HH.mm",
					LTS: "HH.mm.ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY [pukul] HH.mm",
					LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
				},
				meridiemParse: /pagi|tengahari|petang|malam/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"pagi" === t
							? e
							: "tengahari" === t
							? e >= 11
								? e
								: e + 12
							: "petang" === t || "malam" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 11
						? "pagi"
						: e < 15
						? "tengahari"
						: e < 19
						? "petang"
						: "malam"
				},
				calendar: {
					sameDay: "[Hari ini pukul] LT",
					nextDay: "[Esok pukul] LT",
					nextWeek: "dddd [pukul] LT",
					lastDay: "[Kelmarin pukul] LT",
					lastWeek: "dddd [lepas pukul] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "dalam %s",
					past: "%s yang lepas",
					s: "beberapa saat",
					ss: "%d saat",
					m: "seminit",
					mm: "%d minit",
					h: "sejam",
					hh: "%d jam",
					d: "sehari",
					dd: "%d hari",
					M: "sebulan",
					MM: "%d bulan",
					y: "setahun",
					yy: "%d tahun",
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("ms-my", {
				months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
					"_",
				),
				weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
				weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
				weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
				longDateFormat: {
					LT: "HH.mm",
					LTS: "HH.mm.ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY [pukul] HH.mm",
					LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
				},
				meridiemParse: /pagi|tengahari|petang|malam/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"pagi" === t
							? e
							: "tengahari" === t
							? e >= 11
								? e
								: e + 12
							: "petang" === t || "malam" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 11
						? "pagi"
						: e < 15
						? "tengahari"
						: e < 19
						? "petang"
						: "malam"
				},
				calendar: {
					sameDay: "[Hari ini pukul] LT",
					nextDay: "[Esok pukul] LT",
					nextWeek: "dddd [pukul] LT",
					lastDay: "[Kelmarin pukul] LT",
					lastWeek: "dddd [lepas pukul] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "dalam %s",
					past: "%s yang lepas",
					s: "beberapa saat",
					ss: "%d saat",
					m: "seminit",
					mm: "%d minit",
					h: "sejam",
					hh: "%d jam",
					d: "sehari",
					dd: "%d hari",
					M: "sebulan",
					MM: "%d bulan",
					y: "setahun",
					yy: "%d tahun",
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("mt", {
				months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split(
					"_",
				),
				monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split(
					"_",
				),
				weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split(
					"_",
				),
				weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
				weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Illum fil-]LT",
					nextDay: "[Għada fil-]LT",
					nextWeek: "dddd [fil-]LT",
					lastDay: "[Il-bieraħ fil-]LT",
					lastWeek: "dddd [li għadda] [fil-]LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "f’ %s",
					past: "%s ilu",
					s: "ftit sekondi",
					ss: "%d sekondi",
					m: "minuta",
					mm: "%d minuti",
					h: "siegħa",
					hh: "%d siegħat",
					d: "ġurnata",
					dd: "%d ġranet",
					M: "xahar",
					MM: "%d xhur",
					y: "sena",
					yy: "%d sni",
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "၁",
					2: "၂",
					3: "၃",
					4: "၄",
					5: "၅",
					6: "၆",
					7: "၇",
					8: "၈",
					9: "၉",
					0: "၀",
				},
				n = {
					"၁": "1",
					"၂": "2",
					"၃": "3",
					"၄": "4",
					"၅": "5",
					"၆": "6",
					"၇": "7",
					"၈": "8",
					"၉": "9",
					"၀": "0",
				}
			e.defineLocale("my", {
				months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split(
					"_",
				),
				monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split(
					"_",
				),
				weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split(
					"_",
				),
				weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
				weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[ယနေ.] LT [မှာ]",
					nextDay: "[မနက်ဖြန်] LT [မှာ]",
					nextWeek: "dddd LT [မှာ]",
					lastDay: "[မနေ.က] LT [မှာ]",
					lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
					sameElse: "L",
				},
				relativeTime: {
					future: "လာမည့် %s မှာ",
					past: "လွန်ခဲ့သော %s က",
					s: "စက္ကန်.အနည်းငယ်",
					ss: "%d စက္ကန့်",
					m: "တစ်မိနစ်",
					mm: "%d မိနစ်",
					h: "တစ်နာရီ",
					hh: "%d နာရီ",
					d: "တစ်ရက်",
					dd: "%d ရက်",
					M: "တစ်လ",
					MM: "%d လ",
					y: "တစ်နှစ်",
					yy: "%d နှစ်",
				},
				preparse: function (e) {
					return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
						return n[e]
					})
				},
				postformat: function (e) {
					return e.replace(/\d/g, function (e) {
						return t[e]
					})
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("nb", {
				months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
					"_",
				),
				monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
					"_",
				),
				weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
				weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY [kl.] HH:mm",
					LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
				},
				calendar: {
					sameDay: "[i dag kl.] LT",
					nextDay: "[i morgen kl.] LT",
					nextWeek: "dddd [kl.] LT",
					lastDay: "[i går kl.] LT",
					lastWeek: "[forrige] dddd [kl.] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "om %s",
					past: "%s siden",
					s: "noen sekunder",
					ss: "%d sekunder",
					m: "ett minutt",
					mm: "%d minutter",
					h: "en time",
					hh: "%d timer",
					d: "en dag",
					dd: "%d dager",
					M: "en måned",
					MM: "%d måneder",
					y: "ett år",
					yy: "%d år",
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "१",
					2: "२",
					3: "३",
					4: "४",
					5: "५",
					6: "६",
					7: "७",
					8: "८",
					9: "९",
					0: "०",
				},
				n = {
					"१": "1",
					"२": "2",
					"३": "3",
					"४": "4",
					"५": "5",
					"६": "6",
					"७": "7",
					"८": "8",
					"९": "9",
					"०": "0",
				}
			e.defineLocale("ne", {
				months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split(
					"_",
				),
				monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split(
					"_",
				),
				weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
				weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "Aको h:mm बजे",
					LTS: "Aको h:mm:ss बजे",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, Aको h:mm बजे",
					LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे",
				},
				preparse: function (e) {
					return e.replace(/[१२३४५६७८९०]/g, function (e) {
						return n[e]
					})
				},
				postformat: function (e) {
					return e.replace(/\d/g, function (e) {
						return t[e]
					})
				},
				meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"राति" === t
							? e < 4
								? e
								: e + 12
							: "बिहान" === t
							? e
							: "दिउँसो" === t
							? e >= 10
								? e
								: e + 12
							: "साँझ" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 3
						? "राति"
						: e < 12
						? "बिहान"
						: e < 16
						? "दिउँसो"
						: e < 20
						? "साँझ"
						: "राति"
				},
				calendar: {
					sameDay: "[आज] LT",
					nextDay: "[भोलि] LT",
					nextWeek: "[आउँदो] dddd[,] LT",
					lastDay: "[हिजो] LT",
					lastWeek: "[गएको] dddd[,] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%sमा",
					past: "%s अगाडि",
					s: "केही क्षण",
					ss: "%d सेकेण्ड",
					m: "एक मिनेट",
					mm: "%d मिनेट",
					h: "एक घण्टा",
					hh: "%d घण्टा",
					d: "एक दिन",
					dd: "%d दिन",
					M: "एक महिना",
					MM: "%d महिना",
					y: "एक बर्ष",
					yy: "%d बर्ष",
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
					"_",
				),
				n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
				a = [
					/^jan/i,
					/^feb/i,
					/^maart|mrt.?$/i,
					/^apr/i,
					/^mei$/i,
					/^jun[i.]?$/i,
					/^jul[i.]?$/i,
					/^aug/i,
					/^sep/i,
					/^okt/i,
					/^nov/i,
					/^dec/i,
				],
				r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i
			e.defineLocale("nl", {
				months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
					"_",
				),
				monthsShort: function (e, a) {
					return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t
				},
				monthsRegex: r,
				monthsShortRegex: r,
				monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
				monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
				monthsParse: a,
				longMonthsParse: a,
				shortMonthsParse: a,
				weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
					"_",
				),
				weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
				weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[vandaag om] LT",
					nextDay: "[morgen om] LT",
					nextWeek: "dddd [om] LT",
					lastDay: "[gisteren om] LT",
					lastWeek: "[afgelopen] dddd [om] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "over %s",
					past: "%s geleden",
					s: "een paar seconden",
					ss: "%d seconden",
					m: "één minuut",
					mm: "%d minuten",
					h: "één uur",
					hh: "%d uur",
					d: "één dag",
					dd: "%d dagen",
					M: "één maand",
					MM: "%d maanden",
					y: "één jaar",
					yy: "%d jaar",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
				ordinal: function (e) {
					return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
					"_",
				),
				n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
				a = [
					/^jan/i,
					/^feb/i,
					/^maart|mrt.?$/i,
					/^apr/i,
					/^mei$/i,
					/^jun[i.]?$/i,
					/^jul[i.]?$/i,
					/^aug/i,
					/^sep/i,
					/^okt/i,
					/^nov/i,
					/^dec/i,
				],
				r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i
			e.defineLocale("nl-be", {
				months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
					"_",
				),
				monthsShort: function (e, a) {
					return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t
				},
				monthsRegex: r,
				monthsShortRegex: r,
				monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
				monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
				monthsParse: a,
				longMonthsParse: a,
				shortMonthsParse: a,
				weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
					"_",
				),
				weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
				weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[vandaag om] LT",
					nextDay: "[morgen om] LT",
					nextWeek: "dddd [om] LT",
					lastDay: "[gisteren om] LT",
					lastWeek: "[afgelopen] dddd [om] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "over %s",
					past: "%s geleden",
					s: "een paar seconden",
					ss: "%d seconden",
					m: "één minuut",
					mm: "%d minuten",
					h: "één uur",
					hh: "%d uur",
					d: "één dag",
					dd: "%d dagen",
					M: "één maand",
					MM: "%d maanden",
					y: "één jaar",
					yy: "%d jaar",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
				ordinal: function (e) {
					return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("nn", {
				months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
					"_",
				),
				monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split(
					"_",
				),
				weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
				weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY [kl.] H:mm",
					LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
				},
				calendar: {
					sameDay: "[I dag klokka] LT",
					nextDay: "[I morgon klokka] LT",
					nextWeek: "dddd [klokka] LT",
					lastDay: "[I går klokka] LT",
					lastWeek: "[Føregåande] dddd [klokka] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "om %s",
					past: "%s sidan",
					s: "nokre sekund",
					ss: "%d sekund",
					m: "eit minutt",
					mm: "%d minutt",
					h: "ein time",
					hh: "%d timar",
					d: "ein dag",
					dd: "%d dagar",
					M: "ein månad",
					MM: "%d månader",
					y: "eit år",
					yy: "%d år",
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("oc-lnc", {
				months: {
					standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split(
						"_",
					),
					format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split(
						"_",
					),
					isFormat: /D[oD]?(\s)+MMMM/,
				},
				monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split(
					"_",
				),
				weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
				weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM [de] YYYY",
					ll: "D MMM YYYY",
					LLL: "D MMMM [de] YYYY [a] H:mm",
					lll: "D MMM YYYY, H:mm",
					LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
					llll: "ddd D MMM YYYY, H:mm",
				},
				calendar: {
					sameDay: "[uèi a] LT",
					nextDay: "[deman a] LT",
					nextWeek: "dddd [a] LT",
					lastDay: "[ièr a] LT",
					lastWeek: "dddd [passat a] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "d'aquí %s",
					past: "fa %s",
					s: "unas segondas",
					ss: "%d segondas",
					m: "una minuta",
					mm: "%d minutas",
					h: "una ora",
					hh: "%d oras",
					d: "un jorn",
					dd: "%d jorns",
					M: "un mes",
					MM: "%d meses",
					y: "un an",
					yy: "%d ans",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
				ordinal: function (e, t) {
					var n =
						1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è"
					return ("w" !== t && "W" !== t) || (n = "a"), e + n
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "੧",
					2: "੨",
					3: "੩",
					4: "੪",
					5: "੫",
					6: "੬",
					7: "੭",
					8: "੮",
					9: "੯",
					0: "੦",
				},
				n = {
					"੧": "1",
					"੨": "2",
					"੩": "3",
					"੪": "4",
					"੫": "5",
					"੬": "6",
					"੭": "7",
					"੮": "8",
					"੯": "9",
					"੦": "0",
				}
			e.defineLocale("pa-in", {
				months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
					"_",
				),
				monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
					"_",
				),
				weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split(
					"_",
				),
				weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
				weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
				longDateFormat: {
					LT: "A h:mm ਵਜੇ",
					LTS: "A h:mm:ss ਵਜੇ",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
					LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ",
				},
				calendar: {
					sameDay: "[ਅਜ] LT",
					nextDay: "[ਕਲ] LT",
					nextWeek: "[ਅਗਲਾ] dddd, LT",
					lastDay: "[ਕਲ] LT",
					lastWeek: "[ਪਿਛਲੇ] dddd, LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s ਵਿੱਚ",
					past: "%s ਪਿਛਲੇ",
					s: "ਕੁਝ ਸਕਿੰਟ",
					ss: "%d ਸਕਿੰਟ",
					m: "ਇਕ ਮਿੰਟ",
					mm: "%d ਮਿੰਟ",
					h: "ਇੱਕ ਘੰਟਾ",
					hh: "%d ਘੰਟੇ",
					d: "ਇੱਕ ਦਿਨ",
					dd: "%d ਦਿਨ",
					M: "ਇੱਕ ਮਹੀਨਾ",
					MM: "%d ਮਹੀਨੇ",
					y: "ਇੱਕ ਸਾਲ",
					yy: "%d ਸਾਲ",
				},
				preparse: function (e) {
					return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
						return n[e]
					})
				},
				postformat: function (e) {
					return e.replace(/\d/g, function (e) {
						return t[e]
					})
				},
				meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"ਰਾਤ" === t
							? e < 4
								? e
								: e + 12
							: "ਸਵੇਰ" === t
							? e
							: "ਦੁਪਹਿਰ" === t
							? e >= 10
								? e
								: e + 12
							: "ਸ਼ਾਮ" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 4
						? "ਰਾਤ"
						: e < 10
						? "ਸਵੇਰ"
						: e < 17
						? "ਦੁਪਹਿਰ"
						: e < 20
						? "ਸ਼ਾਮ"
						: "ਰਾਤ"
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split(
					"_",
				),
				n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split(
					"_",
				)
			function a(e) {
				return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
			}
			function r(e, t, n) {
				var r = e + " "
				switch (n) {
					case "ss":
						return r + (a(e) ? "sekundy" : "sekund")
					case "m":
						return t ? "minuta" : "minutę"
					case "mm":
						return r + (a(e) ? "minuty" : "minut")
					case "h":
						return t ? "godzina" : "godzinę"
					case "hh":
						return r + (a(e) ? "godziny" : "godzin")
					case "MM":
						return r + (a(e) ? "miesiące" : "miesięcy")
					case "yy":
						return r + (a(e) ? "lata" : "lat")
				}
			}
			e.defineLocale("pl", {
				months: function (e, a) {
					return e
						? "" === a
							? "(" + n[e.month()] + "|" + t[e.month()] + ")"
							: /D MMMM/.test(a)
							? n[e.month()]
							: t[e.month()]
						: t
				},
				monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split(
					"_",
				),
				weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split(
					"_",
				),
				weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
				weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Dziś o] LT",
					nextDay: "[Jutro o] LT",
					nextWeek: function () {
						switch (this.day()) {
							case 0:
								return "[W niedzielę o] LT"
							case 2:
								return "[We wtorek o] LT"
							case 3:
								return "[W środę o] LT"
							case 6:
								return "[W sobotę o] LT"
							default:
								return "[W] dddd [o] LT"
						}
					},
					lastDay: "[Wczoraj o] LT",
					lastWeek: function () {
						switch (this.day()) {
							case 0:
								return "[W zeszłą niedzielę o] LT"
							case 3:
								return "[W zeszłą środę o] LT"
							case 6:
								return "[W zeszłą sobotę o] LT"
							default:
								return "[W zeszły] dddd [o] LT"
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "za %s",
					past: "%s temu",
					s: "kilka sekund",
					ss: r,
					m: r,
					mm: r,
					h: r,
					hh: r,
					d: "1 dzień",
					dd: "%d dni",
					M: "miesiąc",
					MM: r,
					y: "rok",
					yy: r,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("pt", {
				months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
					"_",
				),
				monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
					"_",
				),
				weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
					"_",
				),
				weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
				weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY HH:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Hoje às] LT",
					nextDay: "[Amanhã às] LT",
					nextWeek: "dddd [às] LT",
					lastDay: "[Ontem às] LT",
					lastWeek: function () {
						return 0 === this.day() || 6 === this.day()
							? "[Último] dddd [às] LT"
							: "[Última] dddd [às] LT"
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "em %s",
					past: "há %s",
					s: "segundos",
					ss: "%d segundos",
					m: "um minuto",
					mm: "%d minutos",
					h: "uma hora",
					hh: "%d horas",
					d: "um dia",
					dd: "%d dias",
					M: "um mês",
					MM: "%d meses",
					y: "um ano",
					yy: "%d anos",
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("pt-br", {
				months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
					"_",
				),
				monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
					"_",
				),
				weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
					"_",
				),
				weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
				weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
				},
				calendar: {
					sameDay: "[Hoje às] LT",
					nextDay: "[Amanhã às] LT",
					nextWeek: "dddd [às] LT",
					lastDay: "[Ontem às] LT",
					lastWeek: function () {
						return 0 === this.day() || 6 === this.day()
							? "[Último] dddd [às] LT"
							: "[Última] dddd [às] LT"
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "em %s",
					past: "há %s",
					s: "poucos segundos",
					ss: "%d segundos",
					m: "um minuto",
					mm: "%d minutos",
					h: "uma hora",
					hh: "%d horas",
					d: "um dia",
					dd: "%d dias",
					M: "um mês",
					MM: "%d meses",
					y: "um ano",
					yy: "%d anos",
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n) {
				var a = " "
				return (
					(e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (a = " de "),
					e +
						a +
						{
							ss: "secunde",
							mm: "minute",
							hh: "ore",
							dd: "zile",
							MM: "luni",
							yy: "ani",
						}[n]
				)
			}
			e.defineLocale("ro", {
				months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
					"_",
				),
				monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
				weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
				weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY H:mm",
					LLLL: "dddd, D MMMM YYYY H:mm",
				},
				calendar: {
					sameDay: "[azi la] LT",
					nextDay: "[mâine la] LT",
					nextWeek: "dddd [la] LT",
					lastDay: "[ieri la] LT",
					lastWeek: "[fosta] dddd [la] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "peste %s",
					past: "%s în urmă",
					s: "câteva secunde",
					ss: t,
					m: "un minut",
					mm: t,
					h: "o oră",
					hh: t,
					d: "o zi",
					dd: t,
					M: "o lună",
					MM: t,
					y: "un an",
					yy: t,
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n) {
				var a, r
				return "m" === n
					? t
						? "минута"
						: "минуту"
					: e +
							" " +
							((a = +e),
							(r = {
								ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
								mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
								hh: "час_часа_часов",
								dd: "день_дня_дней",
								MM: "месяц_месяца_месяцев",
								yy: "год_года_лет",
							}[n].split("_")),
							a % 10 == 1 && a % 100 != 11
								? r[0]
								: a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
								? r[1]
								: r[2])
			}
			var n = [
				/^янв/i,
				/^фев/i,
				/^мар/i,
				/^апр/i,
				/^ма[йя]/i,
				/^июн/i,
				/^июл/i,
				/^авг/i,
				/^сен/i,
				/^окт/i,
				/^ноя/i,
				/^дек/i,
			]
			e.defineLocale("ru", {
				months: {
					format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split(
						"_",
					),
					standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
						"_",
					),
				},
				monthsShort: {
					format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
						"_",
					),
					standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
						"_",
					),
				},
				weekdays: {
					standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
						"_",
					),
					format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split(
						"_",
					),
					isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
				},
				weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
				weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
				monthsParse: n,
				longMonthsParse: n,
				shortMonthsParse: n,
				monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
				monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
				monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
				monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY г.",
					LLL: "D MMMM YYYY г., H:mm",
					LLLL: "dddd, D MMMM YYYY г., H:mm",
				},
				calendar: {
					sameDay: "[Сегодня, в] LT",
					nextDay: "[Завтра, в] LT",
					lastDay: "[Вчера, в] LT",
					nextWeek: function (e) {
						if (e.week() === this.week())
							return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT"
						switch (this.day()) {
							case 0:
								return "[В следующее] dddd, [в] LT"
							case 1:
							case 2:
							case 4:
								return "[В следующий] dddd, [в] LT"
							case 3:
							case 5:
							case 6:
								return "[В следующую] dddd, [в] LT"
						}
					},
					lastWeek: function (e) {
						if (e.week() === this.week())
							return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT"
						switch (this.day()) {
							case 0:
								return "[В прошлое] dddd, [в] LT"
							case 1:
							case 2:
							case 4:
								return "[В прошлый] dddd, [в] LT"
							case 3:
							case 5:
							case 6:
								return "[В прошлую] dddd, [в] LT"
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "через %s",
					past: "%s назад",
					s: "несколько секунд",
					ss: t,
					m: t,
					mm: t,
					h: "час",
					hh: t,
					d: "день",
					dd: t,
					M: "месяц",
					MM: t,
					y: "год",
					yy: t,
				},
				meridiemParse: /ночи|утра|дня|вечера/i,
				isPM: function (e) {
					return /^(дня|вечера)$/.test(e)
				},
				meridiem: function (e, t, n) {
					return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
				ordinal: function (e, t) {
					switch (t) {
						case "M":
						case "d":
						case "DDD":
							return e + "-й"
						case "D":
							return e + "-го"
						case "w":
						case "W":
							return e + "-я"
						default:
							return e
					}
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = [
					"جنوري",
					"فيبروري",
					"مارچ",
					"اپريل",
					"مئي",
					"جون",
					"جولاءِ",
					"آگسٽ",
					"سيپٽمبر",
					"آڪٽوبر",
					"نومبر",
					"ڊسمبر",
				],
				n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"]
			e.defineLocale("sd", {
				months: t,
				monthsShort: t,
				weekdays: n,
				weekdaysShort: n,
				weekdaysMin: n,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd، D MMMM YYYY HH:mm",
				},
				meridiemParse: /صبح|شام/,
				isPM: function (e) {
					return "شام" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "صبح" : "شام"
				},
				calendar: {
					sameDay: "[اڄ] LT",
					nextDay: "[سڀاڻي] LT",
					nextWeek: "dddd [اڳين هفتي تي] LT",
					lastDay: "[ڪالهه] LT",
					lastWeek: "[گزريل هفتي] dddd [تي] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s پوء",
					past: "%s اڳ",
					s: "چند سيڪنڊ",
					ss: "%d سيڪنڊ",
					m: "هڪ منٽ",
					mm: "%d منٽ",
					h: "هڪ ڪلاڪ",
					hh: "%d ڪلاڪ",
					d: "هڪ ڏينهن",
					dd: "%d ڏينهن",
					M: "هڪ مهينو",
					MM: "%d مهينا",
					y: "هڪ سال",
					yy: "%d سال",
				},
				preparse: function (e) {
					return e.replace(/،/g, ",")
				},
				postformat: function (e) {
					return e.replace(/,/g, "،")
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("se", {
				months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split(
					"_",
				),
				monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split(
					"_",
				),
				weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split(
					"_",
				),
				weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
				weekdaysMin: "s_v_m_g_d_b_L".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "MMMM D. [b.] YYYY",
					LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
					LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm",
				},
				calendar: {
					sameDay: "[otne ti] LT",
					nextDay: "[ihttin ti] LT",
					nextWeek: "dddd [ti] LT",
					lastDay: "[ikte ti] LT",
					lastWeek: "[ovddit] dddd [ti] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s geažes",
					past: "maŋit %s",
					s: "moadde sekunddat",
					ss: "%d sekunddat",
					m: "okta minuhta",
					mm: "%d minuhtat",
					h: "okta diimmu",
					hh: "%d diimmut",
					d: "okta beaivi",
					dd: "%d beaivvit",
					M: "okta mánnu",
					MM: "%d mánut",
					y: "okta jahki",
					yy: "%d jagit",
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("si", {
				months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split(
					"_",
				),
				monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split(
					"_",
				),
				weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split(
					"_",
				),
				weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
				weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "a h:mm",
					LTS: "a h:mm:ss",
					L: "YYYY/MM/DD",
					LL: "YYYY MMMM D",
					LLL: "YYYY MMMM D, a h:mm",
					LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss",
				},
				calendar: {
					sameDay: "[අද] LT[ට]",
					nextDay: "[හෙට] LT[ට]",
					nextWeek: "dddd LT[ට]",
					lastDay: "[ඊයේ] LT[ට]",
					lastWeek: "[පසුගිය] dddd LT[ට]",
					sameElse: "L",
				},
				relativeTime: {
					future: "%sකින්",
					past: "%sකට පෙර",
					s: "තත්පර කිහිපය",
					ss: "තත්පර %d",
					m: "මිනිත්තුව",
					mm: "මිනිත්තු %d",
					h: "පැය",
					hh: "පැය %d",
					d: "දිනය",
					dd: "දින %d",
					M: "මාසය",
					MM: "මාස %d",
					y: "වසර",
					yy: "වසර %d",
				},
				dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
				ordinal: function (e) {
					return e + " වැනි"
				},
				meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
				isPM: function (e) {
					return "ප.ව." === e || "පස් වරු" === e
				},
				meridiem: function (e, t, n) {
					return e > 11 ? (n ? "ප.ව." : "පස් වරු") : n ? "පෙ.ව." : "පෙර වරු"
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split(
					"_",
				),
				n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_")
			function a(e) {
				return e > 1 && e < 5
			}
			function r(e, t, n, r) {
				var s = e + " "
				switch (n) {
					case "s":
						return t || r ? "pár sekúnd" : "pár sekundami"
					case "ss":
						return t || r ? s + (a(e) ? "sekundy" : "sekúnd") : s + "sekundami"
					case "m":
						return t ? "minúta" : r ? "minútu" : "minútou"
					case "mm":
						return t || r ? s + (a(e) ? "minúty" : "minút") : s + "minútami"
					case "h":
						return t ? "hodina" : r ? "hodinu" : "hodinou"
					case "hh":
						return t || r ? s + (a(e) ? "hodiny" : "hodín") : s + "hodinami"
					case "d":
						return t || r ? "deň" : "dňom"
					case "dd":
						return t || r ? s + (a(e) ? "dni" : "dní") : s + "dňami"
					case "M":
						return t || r ? "mesiac" : "mesiacom"
					case "MM":
						return t || r ? s + (a(e) ? "mesiace" : "mesiacov") : s + "mesiacmi"
					case "y":
						return t || r ? "rok" : "rokom"
					case "yy":
						return t || r ? s + (a(e) ? "roky" : "rokov") : s + "rokmi"
				}
			}
			e.defineLocale("sk", {
				months: t,
				monthsShort: n,
				weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split(
					"_",
				),
				weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
				weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd D. MMMM YYYY H:mm",
				},
				calendar: {
					sameDay: "[dnes o] LT",
					nextDay: "[zajtra o] LT",
					nextWeek: function () {
						switch (this.day()) {
							case 0:
								return "[v nedeľu o] LT"
							case 1:
							case 2:
								return "[v] dddd [o] LT"
							case 3:
								return "[v stredu o] LT"
							case 4:
								return "[vo štvrtok o] LT"
							case 5:
								return "[v piatok o] LT"
							case 6:
								return "[v sobotu o] LT"
						}
					},
					lastDay: "[včera o] LT",
					lastWeek: function () {
						switch (this.day()) {
							case 0:
								return "[minulú nedeľu o] LT"
							case 1:
							case 2:
								return "[minulý] dddd [o] LT"
							case 3:
								return "[minulú stredu o] LT"
							case 4:
							case 5:
								return "[minulý] dddd [o] LT"
							case 6:
								return "[minulú sobotu o] LT"
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "za %s",
					past: "pred %s",
					s: r,
					ss: r,
					m: r,
					mm: r,
					h: r,
					hh: r,
					d: r,
					dd: r,
					M: r,
					MM: r,
					y: r,
					yy: r,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n, a) {
				var r = e + " "
				switch (n) {
					case "s":
						return t || a ? "nekaj sekund" : "nekaj sekundami"
					case "ss":
						return (r +=
							1 === e
								? t
									? "sekundo"
									: "sekundi"
								: 2 === e
								? t || a
									? "sekundi"
									: "sekundah"
								: e < 5
								? t || a
									? "sekunde"
									: "sekundah"
								: "sekund")
					case "m":
						return t ? "ena minuta" : "eno minuto"
					case "mm":
						return (r +=
							1 === e
								? t
									? "minuta"
									: "minuto"
								: 2 === e
								? t || a
									? "minuti"
									: "minutama"
								: e < 5
								? t || a
									? "minute"
									: "minutami"
								: t || a
								? "minut"
								: "minutami")
					case "h":
						return t ? "ena ura" : "eno uro"
					case "hh":
						return (r +=
							1 === e
								? t
									? "ura"
									: "uro"
								: 2 === e
								? t || a
									? "uri"
									: "urama"
								: e < 5
								? t || a
									? "ure"
									: "urami"
								: t || a
								? "ur"
								: "urami")
					case "d":
						return t || a ? "en dan" : "enim dnem"
					case "dd":
						return (r +=
							1 === e
								? t || a
									? "dan"
									: "dnem"
								: 2 === e
								? t || a
									? "dni"
									: "dnevoma"
								: t || a
								? "dni"
								: "dnevi")
					case "M":
						return t || a ? "en mesec" : "enim mesecem"
					case "MM":
						return (r +=
							1 === e
								? t || a
									? "mesec"
									: "mesecem"
								: 2 === e
								? t || a
									? "meseca"
									: "mesecema"
								: e < 5
								? t || a
									? "mesece"
									: "meseci"
								: t || a
								? "mesecev"
								: "meseci")
					case "y":
						return t || a ? "eno leto" : "enim letom"
					case "yy":
						return (r +=
							1 === e
								? t || a
									? "leto"
									: "letom"
								: 2 === e
								? t || a
									? "leti"
									: "letoma"
								: e < 5
								? t || a
									? "leta"
									: "leti"
								: t || a
								? "let"
								: "leti")
				}
			}
			e.defineLocale("sl", {
				months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
					"_",
				),
				monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split(
					"_",
				),
				weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
				weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD. MM. YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd, D. MMMM YYYY H:mm",
				},
				calendar: {
					sameDay: "[danes ob] LT",
					nextDay: "[jutri ob] LT",
					nextWeek: function () {
						switch (this.day()) {
							case 0:
								return "[v] [nedeljo] [ob] LT"
							case 3:
								return "[v] [sredo] [ob] LT"
							case 6:
								return "[v] [soboto] [ob] LT"
							case 1:
							case 2:
							case 4:
							case 5:
								return "[v] dddd [ob] LT"
						}
					},
					lastDay: "[včeraj ob] LT",
					lastWeek: function () {
						switch (this.day()) {
							case 0:
								return "[prejšnjo] [nedeljo] [ob] LT"
							case 3:
								return "[prejšnjo] [sredo] [ob] LT"
							case 6:
								return "[prejšnjo] [soboto] [ob] LT"
							case 1:
							case 2:
							case 4:
							case 5:
								return "[prejšnji] dddd [ob] LT"
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "čez %s",
					past: "pred %s",
					s: t,
					ss: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: t,
					dd: t,
					M: t,
					MM: t,
					y: t,
					yy: t,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("sq", {
				months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split(
					"_",
				),
				monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split(
					"_",
				),
				weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split(
					"_",
				),
				weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
				weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
				weekdaysParseExact: !0,
				meridiemParse: /PD|MD/,
				isPM: function (e) {
					return "M" === e.charAt(0)
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "PD" : "MD"
				},
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Sot në] LT",
					nextDay: "[Nesër në] LT",
					nextWeek: "dddd [në] LT",
					lastDay: "[Dje në] LT",
					lastWeek: "dddd [e kaluar në] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "në %s",
					past: "%s më parë",
					s: "disa sekonda",
					ss: "%d sekonda",
					m: "një minutë",
					mm: "%d minuta",
					h: "një orë",
					hh: "%d orë",
					d: "një ditë",
					dd: "%d ditë",
					M: "një muaj",
					MM: "%d muaj",
					y: "një vit",
					yy: "%d vite",
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
				words: {
					ss: ["sekunda", "sekunde", "sekundi"],
					m: ["jedan minut", "jedne minute"],
					mm: ["minut", "minute", "minuta"],
					h: ["jedan sat", "jednog sata"],
					hh: ["sat", "sata", "sati"],
					dd: ["dan", "dana", "dana"],
					MM: ["mesec", "meseca", "meseci"],
					yy: ["godina", "godine", "godina"],
				},
				correctGrammaticalCase: function (e, t) {
					return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
				},
				translate: function (e, n, a) {
					var r = t.words[a]
					return 1 === a.length
						? n
							? r[0]
							: r[1]
						: e + " " + t.correctGrammaticalCase(e, r)
				},
			}
			e.defineLocale("sr", {
				months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
					"_",
				),
				monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split(
					"_",
				),
				weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
				weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd, D. MMMM YYYY H:mm",
				},
				calendar: {
					sameDay: "[danas u] LT",
					nextDay: "[sutra u] LT",
					nextWeek: function () {
						switch (this.day()) {
							case 0:
								return "[u] [nedelju] [u] LT"
							case 3:
								return "[u] [sredu] [u] LT"
							case 6:
								return "[u] [subotu] [u] LT"
							case 1:
							case 2:
							case 4:
							case 5:
								return "[u] dddd [u] LT"
						}
					},
					lastDay: "[juče u] LT",
					lastWeek: function () {
						return [
							"[prošle] [nedelje] [u] LT",
							"[prošlog] [ponedeljka] [u] LT",
							"[prošlog] [utorka] [u] LT",
							"[prošle] [srede] [u] LT",
							"[prošlog] [četvrtka] [u] LT",
							"[prošlog] [petka] [u] LT",
							"[prošle] [subote] [u] LT",
						][this.day()]
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "za %s",
					past: "pre %s",
					s: "nekoliko sekundi",
					ss: t.translate,
					m: t.translate,
					mm: t.translate,
					h: t.translate,
					hh: t.translate,
					d: "dan",
					dd: t.translate,
					M: "mesec",
					MM: t.translate,
					y: "godinu",
					yy: t.translate,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
				words: {
					ss: ["секунда", "секунде", "секунди"],
					m: ["један минут", "једне минуте"],
					mm: ["минут", "минуте", "минута"],
					h: ["један сат", "једног сата"],
					hh: ["сат", "сата", "сати"],
					dd: ["дан", "дана", "дана"],
					MM: ["месец", "месеца", "месеци"],
					yy: ["година", "године", "година"],
				},
				correctGrammaticalCase: function (e, t) {
					return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
				},
				translate: function (e, n, a) {
					var r = t.words[a]
					return 1 === a.length
						? n
							? r[0]
							: r[1]
						: e + " " + t.correctGrammaticalCase(e, r)
				},
			}
			e.defineLocale("sr-cyrl", {
				months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split(
					"_",
				),
				monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split(
					"_",
				),
				weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
				weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd, D. MMMM YYYY H:mm",
				},
				calendar: {
					sameDay: "[данас у] LT",
					nextDay: "[сутра у] LT",
					nextWeek: function () {
						switch (this.day()) {
							case 0:
								return "[у] [недељу] [у] LT"
							case 3:
								return "[у] [среду] [у] LT"
							case 6:
								return "[у] [суботу] [у] LT"
							case 1:
							case 2:
							case 4:
							case 5:
								return "[у] dddd [у] LT"
						}
					},
					lastDay: "[јуче у] LT",
					lastWeek: function () {
						return [
							"[прошле] [недеље] [у] LT",
							"[прошлог] [понедељка] [у] LT",
							"[прошлог] [уторка] [у] LT",
							"[прошле] [среде] [у] LT",
							"[прошлог] [четвртка] [у] LT",
							"[прошлог] [петка] [у] LT",
							"[прошле] [суботе] [у] LT",
						][this.day()]
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "за %s",
					past: "пре %s",
					s: "неколико секунди",
					ss: t.translate,
					m: t.translate,
					mm: t.translate,
					h: t.translate,
					hh: t.translate,
					d: "дан",
					dd: t.translate,
					M: "месец",
					MM: t.translate,
					y: "годину",
					yy: t.translate,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("ss", {
				months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
					"_",
				),
				monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split(
					"_",
				),
				weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split(
					"_",
				),
				weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
				weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "h:mm A",
					LTS: "h:mm:ss A",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY h:mm A",
					LLLL: "dddd, D MMMM YYYY h:mm A",
				},
				calendar: {
					sameDay: "[Namuhla nga] LT",
					nextDay: "[Kusasa nga] LT",
					nextWeek: "dddd [nga] LT",
					lastDay: "[Itolo nga] LT",
					lastWeek: "dddd [leliphelile] [nga] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "nga %s",
					past: "wenteka nga %s",
					s: "emizuzwana lomcane",
					ss: "%d mzuzwana",
					m: "umzuzu",
					mm: "%d emizuzu",
					h: "lihora",
					hh: "%d emahora",
					d: "lilanga",
					dd: "%d emalanga",
					M: "inyanga",
					MM: "%d tinyanga",
					y: "umnyaka",
					yy: "%d iminyaka",
				},
				meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
				meridiem: function (e, t, n) {
					return e < 11
						? "ekuseni"
						: e < 15
						? "emini"
						: e < 19
						? "entsambama"
						: "ebusuku"
				},
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"ekuseni" === t
							? e
							: "emini" === t
							? e >= 11
								? e
								: e + 12
							: "entsambama" === t || "ebusuku" === t
							? 0 === e
								? 0
								: e + 12
							: void 0
					)
				},
				dayOfMonthOrdinalParse: /\d{1,2}/,
				ordinal: "%d",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("sv", {
				months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
					"_",
				),
				monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
					"_",
				),
				weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split(
					"_",
				),
				weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
				weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY-MM-DD",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY [kl.] HH:mm",
					LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
					lll: "D MMM YYYY HH:mm",
					llll: "ddd D MMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Idag] LT",
					nextDay: "[Imorgon] LT",
					lastDay: "[Igår] LT",
					nextWeek: "[På] dddd LT",
					lastWeek: "[I] dddd[s] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "om %s",
					past: "för %s sedan",
					s: "några sekunder",
					ss: "%d sekunder",
					m: "en minut",
					mm: "%d minuter",
					h: "en timme",
					hh: "%d timmar",
					d: "en dag",
					dd: "%d dagar",
					M: "en månad",
					MM: "%d månader",
					y: "ett år",
					yy: "%d år",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
				ordinal: function (e) {
					var t = e % 10
					return (
						e +
						(1 == ~~((e % 100) / 10) ? ":e" : 1 === t || 2 === t ? ":a" : ":e")
					)
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("sw", {
				months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
					"_",
				),
				monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split(
					"_",
				),
				weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
					"_",
				),
				weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
				weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "hh:mm A",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[leo saa] LT",
					nextDay: "[kesho saa] LT",
					nextWeek: "[wiki ijayo] dddd [saat] LT",
					lastDay: "[jana] LT",
					lastWeek: "[wiki iliyopita] dddd [saat] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s baadaye",
					past: "tokea %s",
					s: "hivi punde",
					ss: "sekunde %d",
					m: "dakika moja",
					mm: "dakika %d",
					h: "saa limoja",
					hh: "masaa %d",
					d: "siku moja",
					dd: "siku %d",
					M: "mwezi mmoja",
					MM: "miezi %d",
					y: "mwaka mmoja",
					yy: "miaka %d",
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
					1: "௧",
					2: "௨",
					3: "௩",
					4: "௪",
					5: "௫",
					6: "௬",
					7: "௭",
					8: "௮",
					9: "௯",
					0: "௦",
				},
				n = {
					"௧": "1",
					"௨": "2",
					"௩": "3",
					"௪": "4",
					"௫": "5",
					"௬": "6",
					"௭": "7",
					"௮": "8",
					"௯": "9",
					"௦": "0",
				}
			e.defineLocale("ta", {
				months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
					"_",
				),
				monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
					"_",
				),
				weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split(
					"_",
				),
				weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split(
					"_",
				),
				weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, HH:mm",
					LLLL: "dddd, D MMMM YYYY, HH:mm",
				},
				calendar: {
					sameDay: "[இன்று] LT",
					nextDay: "[நாளை] LT",
					nextWeek: "dddd, LT",
					lastDay: "[நேற்று] LT",
					lastWeek: "[கடந்த வாரம்] dddd, LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s இல்",
					past: "%s முன்",
					s: "ஒரு சில விநாடிகள்",
					ss: "%d விநாடிகள்",
					m: "ஒரு நிமிடம்",
					mm: "%d நிமிடங்கள்",
					h: "ஒரு மணி நேரம்",
					hh: "%d மணி நேரம்",
					d: "ஒரு நாள்",
					dd: "%d நாட்கள்",
					M: "ஒரு மாதம்",
					MM: "%d மாதங்கள்",
					y: "ஒரு வருடம்",
					yy: "%d ஆண்டுகள்",
				},
				dayOfMonthOrdinalParse: /\d{1,2}வது/,
				ordinal: function (e) {
					return e + "வது"
				},
				preparse: function (e) {
					return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
						return n[e]
					})
				},
				postformat: function (e) {
					return e.replace(/\d/g, function (e) {
						return t[e]
					})
				},
				meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
				meridiem: function (e, t, n) {
					return e < 2
						? " யாமம்"
						: e < 6
						? " வைகறை"
						: e < 10
						? " காலை"
						: e < 14
						? " நண்பகல்"
						: e < 18
						? " எற்பாடு"
						: e < 22
						? " மாலை"
						: " யாமம்"
				},
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"யாமம்" === t
							? e < 2
								? e
								: e + 12
							: "வைகறை" === t || "காலை" === t || ("நண்பகல்" === t && e >= 10)
							? e
							: e + 12
					)
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("te", {
				months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split(
					"_",
				),
				monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split(
					"_",
				),
				weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
				weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
				longDateFormat: {
					LT: "A h:mm",
					LTS: "A h:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm",
					LLLL: "dddd, D MMMM YYYY, A h:mm",
				},
				calendar: {
					sameDay: "[నేడు] LT",
					nextDay: "[రేపు] LT",
					nextWeek: "dddd, LT",
					lastDay: "[నిన్న] LT",
					lastWeek: "[గత] dddd, LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s లో",
					past: "%s క్రితం",
					s: "కొన్ని క్షణాలు",
					ss: "%d సెకన్లు",
					m: "ఒక నిమిషం",
					mm: "%d నిమిషాలు",
					h: "ఒక గంట",
					hh: "%d గంటలు",
					d: "ఒక రోజు",
					dd: "%d రోజులు",
					M: "ఒక నెల",
					MM: "%d నెలలు",
					y: "ఒక సంవత్సరం",
					yy: "%d సంవత్సరాలు",
				},
				dayOfMonthOrdinalParse: /\d{1,2}వ/,
				ordinal: "%dవ",
				meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"రాత్రి" === t
							? e < 4
								? e
								: e + 12
							: "ఉదయం" === t
							? e
							: "మధ్యాహ్నం" === t
							? e >= 10
								? e
								: e + 12
							: "సాయంత్రం" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 4
						? "రాత్రి"
						: e < 10
						? "ఉదయం"
						: e < 17
						? "మధ్యాహ్నం"
						: e < 20
						? "సాయంత్రం"
						: "రాత్రి"
				},
				week: { dow: 0, doy: 6 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("tet", {
				months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split(
					"_",
				),
				monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split(
					"_",
				),
				weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
				weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
				weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Ohin iha] LT",
					nextDay: "[Aban iha] LT",
					nextWeek: "dddd [iha] LT",
					lastDay: "[Horiseik iha] LT",
					lastWeek: "dddd [semana kotuk] [iha] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "iha %s",
					past: "%s liuba",
					s: "segundu balun",
					ss: "segundu %d",
					m: "minutu ida",
					mm: "minutu %d",
					h: "oras ida",
					hh: "oras %d",
					d: "loron ida",
					dd: "loron %d",
					M: "fulan ida",
					MM: "fulan %d",
					y: "tinan ida",
					yy: "tinan %d",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
				ordinal: function (e) {
					var t = e % 10
					return (
						e +
						(1 == ~~((e % 100) / 10)
							? "th"
							: 1 === t
							? "st"
							: 2 === t
							? "nd"
							: 3 === t
							? "rd"
							: "th")
					)
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
				0: "-ум",
				1: "-ум",
				2: "-юм",
				3: "-юм",
				4: "-ум",
				5: "-ум",
				6: "-ум",
				7: "-ум",
				8: "-ум",
				9: "-ум",
				10: "-ум",
				12: "-ум",
				13: "-ум",
				20: "-ум",
				30: "-юм",
				40: "-ум",
				50: "-ум",
				60: "-ум",
				70: "-ум",
				80: "-ум",
				90: "-ум",
				100: "-ум",
			}
			e.defineLocale("tg", {
				months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
					"_",
				),
				monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
					"_",
				),
				weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split(
					"_",
				),
				weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
				weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Имрӯз соати] LT",
					nextDay: "[Пагоҳ соати] LT",
					lastDay: "[Дирӯз соати] LT",
					nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
					lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "баъди %s",
					past: "%s пеш",
					s: "якчанд сония",
					m: "як дақиқа",
					mm: "%d дақиқа",
					h: "як соат",
					hh: "%d соат",
					d: "як рӯз",
					dd: "%d рӯз",
					M: "як моҳ",
					MM: "%d моҳ",
					y: "як сол",
					yy: "%d сол",
				},
				meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"шаб" === t
							? e < 4
								? e
								: e + 12
							: "субҳ" === t
							? e
							: "рӯз" === t
							? e >= 11
								? e
								: e + 12
							: "бегоҳ" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					return e < 4
						? "шаб"
						: e < 11
						? "субҳ"
						: e < 16
						? "рӯз"
						: e < 19
						? "бегоҳ"
						: "шаб"
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
				ordinal: function (e) {
					return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("th", {
				months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
					"_",
				),
				monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
				weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
				weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY เวลา H:mm",
					LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm",
				},
				meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
				isPM: function (e) {
					return "หลังเที่ยง" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
				},
				calendar: {
					sameDay: "[วันนี้ เวลา] LT",
					nextDay: "[พรุ่งนี้ เวลา] LT",
					nextWeek: "dddd[หน้า เวลา] LT",
					lastDay: "[เมื่อวานนี้ เวลา] LT",
					lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "อีก %s",
					past: "%sที่แล้ว",
					s: "ไม่กี่วินาที",
					ss: "%d วินาที",
					m: "1 นาที",
					mm: "%d นาที",
					h: "1 ชั่วโมง",
					hh: "%d ชั่วโมง",
					d: "1 วัน",
					dd: "%d วัน",
					M: "1 เดือน",
					MM: "%d เดือน",
					y: "1 ปี",
					yy: "%d ปี",
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
				1: "'inji",
				5: "'inji",
				8: "'inji",
				70: "'inji",
				80: "'inji",
				2: "'nji",
				7: "'nji",
				20: "'nji",
				50: "'nji",
				3: "'ünji",
				4: "'ünji",
				100: "'ünji",
				6: "'njy",
				9: "'unjy",
				10: "'unjy",
				30: "'unjy",
				60: "'ynjy",
				90: "'ynjy",
			}
			e.defineLocale("tk", {
				months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split(
					"_",
				),
				monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split(
					"_",
				),
				weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split(
					"_",
				),
				weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
				weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[bugün sagat] LT",
					nextDay: "[ertir sagat] LT",
					nextWeek: "[indiki] dddd [sagat] LT",
					lastDay: "[düýn] LT",
					lastWeek: "[geçen] dddd [sagat] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s soň",
					past: "%s öň",
					s: "birnäçe sekunt",
					m: "bir minut",
					mm: "%d minut",
					h: "bir sagat",
					hh: "%d sagat",
					d: "bir gün",
					dd: "%d gün",
					M: "bir aý",
					MM: "%d aý",
					y: "bir ýyl",
					yy: "%d ýyl",
				},
				ordinal: function (e, n) {
					switch (n) {
						case "d":
						case "D":
						case "Do":
						case "DD":
							return e
						default:
							if (0 === e) return e + "'unjy"
							var a = e % 10
							return e + (t[a] || t[(e % 100) - a] || t[e >= 100 ? 100 : null])
					}
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("tl-ph", {
				months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
					"_",
				),
				monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
					"_",
				),
				weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split(
					"_",
				),
				weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
				weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "MM/D/YYYY",
					LL: "MMMM D, YYYY",
					LLL: "MMMM D, YYYY HH:mm",
					LLLL: "dddd, MMMM DD, YYYY HH:mm",
				},
				calendar: {
					sameDay: "LT [ngayong araw]",
					nextDay: "[Bukas ng] LT",
					nextWeek: "LT [sa susunod na] dddd",
					lastDay: "LT [kahapon]",
					lastWeek: "LT [noong nakaraang] dddd",
					sameElse: "L",
				},
				relativeTime: {
					future: "sa loob ng %s",
					past: "%s ang nakalipas",
					s: "ilang segundo",
					ss: "%d segundo",
					m: "isang minuto",
					mm: "%d minuto",
					h: "isang oras",
					hh: "%d oras",
					d: "isang araw",
					dd: "%d araw",
					M: "isang buwan",
					MM: "%d buwan",
					y: "isang taon",
					yy: "%d taon",
				},
				dayOfMonthOrdinalParse: /\d{1,2}/,
				ordinal: function (e) {
					return e
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")
			function n(e, n, a, r) {
				var s = (function (e) {
					var n = Math.floor((e % 1e3) / 100),
						a = Math.floor((e % 100) / 10),
						r = e % 10,
						s = ""
					return (
						n > 0 && (s += t[n] + "vatlh"),
						a > 0 && (s += ("" !== s ? " " : "") + t[a] + "maH"),
						r > 0 && (s += ("" !== s ? " " : "") + t[r]),
						"" === s ? "pagh" : s
					)
				})(e)
				switch (a) {
					case "ss":
						return s + " lup"
					case "mm":
						return s + " tup"
					case "hh":
						return s + " rep"
					case "dd":
						return s + " jaj"
					case "MM":
						return s + " jar"
					case "yy":
						return s + " DIS"
				}
			}
			e.defineLocale("tlh", {
				months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split(
					"_",
				),
				monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
					"_",
				),
				weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
					"_",
				),
				weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
					"_",
				),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[DaHjaj] LT",
					nextDay: "[wa’leS] LT",
					nextWeek: "LLL",
					lastDay: "[wa’Hu’] LT",
					lastWeek: "LLL",
					sameElse: "L",
				},
				relativeTime: {
					future: function (e) {
						var t = e
						return (t =
							-1 !== e.indexOf("jaj")
								? t.slice(0, -3) + "leS"
								: -1 !== e.indexOf("jar")
								? t.slice(0, -3) + "waQ"
								: -1 !== e.indexOf("DIS")
								? t.slice(0, -3) + "nem"
								: t + " pIq")
					},
					past: function (e) {
						var t = e
						return (t =
							-1 !== e.indexOf("jaj")
								? t.slice(0, -3) + "Hu’"
								: -1 !== e.indexOf("jar")
								? t.slice(0, -3) + "wen"
								: -1 !== e.indexOf("DIS")
								? t.slice(0, -3) + "ben"
								: t + " ret")
					},
					s: "puS lup",
					ss: n,
					m: "wa’ tup",
					mm: n,
					h: "wa’ rep",
					hh: n,
					d: "wa’ jaj",
					dd: n,
					M: "wa’ jar",
					MM: n,
					y: "wa’ DIS",
					yy: n,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = {
				1: "'inci",
				5: "'inci",
				8: "'inci",
				70: "'inci",
				80: "'inci",
				2: "'nci",
				7: "'nci",
				20: "'nci",
				50: "'nci",
				3: "'üncü",
				4: "'üncü",
				100: "'üncü",
				6: "'ncı",
				9: "'uncu",
				10: "'uncu",
				30: "'uncu",
				60: "'ıncı",
				90: "'ıncı",
			}
			e.defineLocale("tr", {
				months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split(
					"_",
				),
				monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split(
					"_",
				),
				weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split(
					"_",
				),
				weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
				weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
				meridiem: function (e, t, n) {
					return e < 12 ? (n ? "öö" : "ÖÖ") : n ? "ös" : "ÖS"
				},
				meridiemParse: /öö|ÖÖ|ös|ÖS/,
				isPM: function (e) {
					return "ös" === e || "ÖS" === e
				},
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[bugün saat] LT",
					nextDay: "[yarın saat] LT",
					nextWeek: "[gelecek] dddd [saat] LT",
					lastDay: "[dün] LT",
					lastWeek: "[geçen] dddd [saat] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s sonra",
					past: "%s önce",
					s: "birkaç saniye",
					ss: "%d saniye",
					m: "bir dakika",
					mm: "%d dakika",
					h: "bir saat",
					hh: "%d saat",
					d: "bir gün",
					dd: "%d gün",
					M: "bir ay",
					MM: "%d ay",
					y: "bir yıl",
					yy: "%d yıl",
				},
				ordinal: function (e, n) {
					switch (n) {
						case "d":
						case "D":
						case "Do":
						case "DD":
							return e
						default:
							if (0 === e) return e + "'ıncı"
							var a = e % 10
							return e + (t[a] || t[(e % 100) - a] || t[e >= 100 ? 100 : null])
					}
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n, a) {
				var r = {
					s: ["viensas secunds", "'iensas secunds"],
					ss: [e + " secunds", e + " secunds"],
					m: ["'n míut", "'iens míut"],
					mm: [e + " míuts", e + " míuts"],
					h: ["'n þora", "'iensa þora"],
					hh: [e + " þoras", e + " þoras"],
					d: ["'n ziua", "'iensa ziua"],
					dd: [e + " ziuas", e + " ziuas"],
					M: ["'n mes", "'iens mes"],
					MM: [e + " mesen", e + " mesen"],
					y: ["'n ar", "'iens ar"],
					yy: [e + " ars", e + " ars"],
				}
				return a || t ? r[n][0] : r[n][1]
			}
			e.defineLocale("tzl", {
				months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split(
					"_",
				),
				monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split(
					"_",
				),
				weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split(
					"_",
				),
				weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
				weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
				longDateFormat: {
					LT: "HH.mm",
					LTS: "HH.mm.ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM [dallas] YYYY",
					LLL: "D. MMMM [dallas] YYYY HH.mm",
					LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm",
				},
				meridiemParse: /d\'o|d\'a/i,
				isPM: function (e) {
					return "d'o" === e.toLowerCase()
				},
				meridiem: function (e, t, n) {
					return e > 11 ? (n ? "d'o" : "D'O") : n ? "d'a" : "D'A"
				},
				calendar: {
					sameDay: "[oxhi à] LT",
					nextDay: "[demà à] LT",
					nextWeek: "dddd [à] LT",
					lastDay: "[ieiri à] LT",
					lastWeek: "[sür el] dddd [lasteu à] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "osprei %s",
					past: "ja%s",
					s: t,
					ss: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: t,
					dd: t,
					M: t,
					MM: t,
					y: t,
					yy: t,
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("tzm", {
				months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
					"_",
				),
				monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
					"_",
				),
				weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
				weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
					"_",
				),
				weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
					"_",
				),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
					nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
					nextWeek: "dddd [ⴴ] LT",
					lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
					lastWeek: "dddd [ⴴ] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
					past: "ⵢⴰⵏ %s",
					s: "ⵉⵎⵉⴽ",
					ss: "%d ⵉⵎⵉⴽ",
					m: "ⵎⵉⵏⵓⴺ",
					mm: "%d ⵎⵉⵏⵓⴺ",
					h: "ⵙⴰⵄⴰ",
					hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
					d: "ⴰⵙⵙ",
					dd: "%d oⵙⵙⴰⵏ",
					M: "ⴰⵢoⵓⵔ",
					MM: "%d ⵉⵢⵢⵉⵔⵏ",
					y: "ⴰⵙⴳⴰⵙ",
					yy: "%d ⵉⵙⴳⴰⵙⵏ",
				},
				week: { dow: 6, doy: 12 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("tzm-latn", {
				months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
					"_",
				),
				monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
					"_",
				),
				weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
				weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
					"_",
				),
				weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
					"_",
				),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[asdkh g] LT",
					nextDay: "[aska g] LT",
					nextWeek: "dddd [g] LT",
					lastDay: "[assant g] LT",
					lastWeek: "dddd [g] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "dadkh s yan %s",
					past: "yan %s",
					s: "imik",
					ss: "%d imik",
					m: "minuḍ",
					mm: "%d minuḍ",
					h: "saɛa",
					hh: "%d tassaɛin",
					d: "ass",
					dd: "%d ossan",
					M: "ayowr",
					MM: "%d iyyirn",
					y: "asgas",
					yy: "%d isgasn",
				},
				week: { dow: 6, doy: 12 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js language configuration
			e.defineLocale("ug-cn", {
				months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
					"_",
				),
				monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
					"_",
				),
				weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split(
					"_",
				),
				weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
				weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY-MM-DD",
					LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
					LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
					LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
				},
				meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t
							? e
							: "چۈشتىن كېيىن" === t || "كەچ" === t
							? e + 12
							: e >= 11
							? e
							: e + 12
					)
				},
				meridiem: function (e, t, n) {
					var a = 100 * e + t
					return a < 600
						? "يېرىم كېچە"
						: a < 900
						? "سەھەر"
						: a < 1130
						? "چۈشتىن بۇرۇن"
						: a < 1230
						? "چۈش"
						: a < 1800
						? "چۈشتىن كېيىن"
						: "كەچ"
				},
				calendar: {
					sameDay: "[بۈگۈن سائەت] LT",
					nextDay: "[ئەتە سائەت] LT",
					nextWeek: "[كېلەركى] dddd [سائەت] LT",
					lastDay: "[تۆنۈگۈن] LT",
					lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s كېيىن",
					past: "%s بۇرۇن",
					s: "نەچچە سېكونت",
					ss: "%d سېكونت",
					m: "بىر مىنۇت",
					mm: "%d مىنۇت",
					h: "بىر سائەت",
					hh: "%d سائەت",
					d: "بىر كۈن",
					dd: "%d كۈن",
					M: "بىر ئاي",
					MM: "%d ئاي",
					y: "بىر يىل",
					yy: "%d يىل",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
				ordinal: function (e, t) {
					switch (t) {
						case "d":
						case "D":
						case "DDD":
							return e + "-كۈنى"
						case "w":
						case "W":
							return e + "-ھەپتە"
						default:
							return e
					}
				},
				preparse: function (e) {
					return e.replace(/،/g, ",")
				},
				postformat: function (e) {
					return e.replace(/,/g, "،")
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			function t(e, t, n) {
				var a, r
				return "m" === n
					? t
						? "хвилина"
						: "хвилину"
					: "h" === n
					? t
						? "година"
						: "годину"
					: e +
					  " " +
					  ((a = +e),
					  (r = {
							ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
							mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
							hh: t ? "година_години_годин" : "годину_години_годин",
							dd: "день_дні_днів",
							MM: "місяць_місяці_місяців",
							yy: "рік_роки_років",
					  }[n].split("_")),
					  a % 10 == 1 && a % 100 != 11
							? r[0]
							: a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
							? r[1]
							: r[2])
			}
			function n(e) {
				return function () {
					return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
				}
			}
			e.defineLocale("uk", {
				months: {
					format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split(
						"_",
					),
					standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split(
						"_",
					),
				},
				monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split(
					"_",
				),
				weekdays: function (e, t) {
					var n = {
						nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split(
							"_",
						),
						accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split(
							"_",
						),
						genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split(
							"_",
						),
					}
					return !0 === e
						? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1))
						: e
						? n[
								/(\[[ВвУу]\]) ?dddd/.test(t)
									? "accusative"
									: /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
									? "genitive"
									: "nominative"
						  ][e.day()]
						: n.nominative
				},
				weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
				weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY р.",
					LLL: "D MMMM YYYY р., HH:mm",
					LLLL: "dddd, D MMMM YYYY р., HH:mm",
				},
				calendar: {
					sameDay: n("[Сьогодні "),
					nextDay: n("[Завтра "),
					lastDay: n("[Вчора "),
					nextWeek: n("[У] dddd ["),
					lastWeek: function () {
						switch (this.day()) {
							case 0:
							case 3:
							case 5:
							case 6:
								return n("[Минулої] dddd [").call(this)
							case 1:
							case 2:
							case 4:
								return n("[Минулого] dddd [").call(this)
						}
					},
					sameElse: "L",
				},
				relativeTime: {
					future: "за %s",
					past: "%s тому",
					s: "декілька секунд",
					ss: t,
					m: t,
					mm: t,
					h: "годину",
					hh: t,
					d: "день",
					dd: t,
					M: "місяць",
					MM: t,
					y: "рік",
					yy: t,
				},
				meridiemParse: /ночі|ранку|дня|вечора/,
				isPM: function (e) {
					return /^(дня|вечора)$/.test(e)
				},
				meridiem: function (e, t, n) {
					return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
				ordinal: function (e, t) {
					switch (t) {
						case "M":
						case "d":
						case "DDD":
						case "w":
						case "W":
							return e + "-й"
						case "D":
							return e + "-го"
						default:
							return e
					}
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			var t = [
					"جنوری",
					"فروری",
					"مارچ",
					"اپریل",
					"مئی",
					"جون",
					"جولائی",
					"اگست",
					"ستمبر",
					"اکتوبر",
					"نومبر",
					"دسمبر",
				],
				n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"]
			e.defineLocale("ur", {
				months: t,
				monthsShort: t,
				weekdays: n,
				weekdaysShort: n,
				weekdaysMin: n,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd، D MMMM YYYY HH:mm",
				},
				meridiemParse: /صبح|شام/,
				isPM: function (e) {
					return "شام" === e
				},
				meridiem: function (e, t, n) {
					return e < 12 ? "صبح" : "شام"
				},
				calendar: {
					sameDay: "[آج بوقت] LT",
					nextDay: "[کل بوقت] LT",
					nextWeek: "dddd [بوقت] LT",
					lastDay: "[گذشتہ روز بوقت] LT",
					lastWeek: "[گذشتہ] dddd [بوقت] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s بعد",
					past: "%s قبل",
					s: "چند سیکنڈ",
					ss: "%d سیکنڈ",
					m: "ایک منٹ",
					mm: "%d منٹ",
					h: "ایک گھنٹہ",
					hh: "%d گھنٹے",
					d: "ایک دن",
					dd: "%d دن",
					M: "ایک ماہ",
					MM: "%d ماہ",
					y: "ایک سال",
					yy: "%d سال",
				},
				preparse: function (e) {
					return e.replace(/،/g, ",")
				},
				postformat: function (e) {
					return e.replace(/,/g, "،")
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("uz", {
				months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
					"_",
				),
				monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
					"_",
				),
				weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split(
					"_",
				),
				weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
				weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "D MMMM YYYY, dddd HH:mm",
				},
				calendar: {
					sameDay: "[Бугун соат] LT [да]",
					nextDay: "[Эртага] LT [да]",
					nextWeek: "dddd [куни соат] LT [да]",
					lastDay: "[Кеча соат] LT [да]",
					lastWeek: "[Утган] dddd [куни соат] LT [да]",
					sameElse: "L",
				},
				relativeTime: {
					future: "Якин %s ичида",
					past: "Бир неча %s олдин",
					s: "фурсат",
					ss: "%d фурсат",
					m: "бир дакика",
					mm: "%d дакика",
					h: "бир соат",
					hh: "%d соат",
					d: "бир кун",
					dd: "%d кун",
					M: "бир ой",
					MM: "%d ой",
					y: "бир йил",
					yy: "%d йил",
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("uz-latn", {
				months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split(
					"_",
				),
				monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split(
					"_",
				),
				weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split(
					"_",
				),
				weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
				weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "D MMMM YYYY, dddd HH:mm",
				},
				calendar: {
					sameDay: "[Bugun soat] LT [da]",
					nextDay: "[Ertaga] LT [da]",
					nextWeek: "dddd [kuni soat] LT [da]",
					lastDay: "[Kecha soat] LT [da]",
					lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
					sameElse: "L",
				},
				relativeTime: {
					future: "Yaqin %s ichida",
					past: "Bir necha %s oldin",
					s: "soniya",
					ss: "%d soniya",
					m: "bir daqiqa",
					mm: "%d daqiqa",
					h: "bir soat",
					hh: "%d soat",
					d: "bir kun",
					dd: "%d kun",
					M: "bir oy",
					MM: "%d oy",
					y: "bir yil",
					yy: "%d yil",
				},
				week: { dow: 1, doy: 7 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("vi", {
				months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split(
					"_",
				),
				monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split(
					"_",
				),
				weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
				weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
				weekdaysParseExact: !0,
				meridiemParse: /sa|ch/i,
				isPM: function (e) {
					return /^ch$/i.test(e)
				},
				meridiem: function (e, t, n) {
					return e < 12 ? (n ? "sa" : "SA") : n ? "ch" : "CH"
				},
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM [năm] YYYY",
					LLL: "D MMMM [năm] YYYY HH:mm",
					LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
					l: "DD/M/YYYY",
					ll: "D MMM YYYY",
					lll: "D MMM YYYY HH:mm",
					llll: "ddd, D MMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[Hôm nay lúc] LT",
					nextDay: "[Ngày mai lúc] LT",
					nextWeek: "dddd [tuần tới lúc] LT",
					lastDay: "[Hôm qua lúc] LT",
					lastWeek: "dddd [tuần trước lúc] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "%s tới",
					past: "%s trước",
					s: "vài giây",
					ss: "%d giây",
					m: "một phút",
					mm: "%d phút",
					h: "một giờ",
					hh: "%d giờ",
					d: "một ngày",
					dd: "%d ngày",
					M: "một tháng",
					MM: "%d tháng",
					y: "một năm",
					yy: "%d năm",
				},
				dayOfMonthOrdinalParse: /\d{1,2}/,
				ordinal: function (e) {
					return e
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("x-pseudo", {
				months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split(
					"_",
				),
				monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split(
					"_",
				),
				monthsParseExact: !0,
				weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split(
					"_",
				),
				weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
				weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm",
				},
				calendar: {
					sameDay: "[T~ódá~ý át] LT",
					nextDay: "[T~ómó~rró~w át] LT",
					nextWeek: "dddd [át] LT",
					lastDay: "[Ý~ést~érdá~ý át] LT",
					lastWeek: "[L~ást] dddd [át] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "í~ñ %s",
					past: "%s á~gó",
					s: "á ~féw ~sécó~ñds",
					ss: "%d s~écóñ~ds",
					m: "á ~míñ~úté",
					mm: "%d m~íñú~tés",
					h: "á~ñ hó~úr",
					hh: "%d h~óúrs",
					d: "á ~dáý",
					dd: "%d d~áýs",
					M: "á ~móñ~th",
					MM: "%d m~óñt~hs",
					y: "á ~ýéár",
					yy: "%d ý~éárs",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
				ordinal: function (e) {
					var t = e % 10
					return (
						e +
						(1 == ~~((e % 100) / 10)
							? "th"
							: 1 === t
							? "st"
							: 2 === t
							? "nd"
							: 3 === t
							? "rd"
							: "th")
					)
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("yo", {
				months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split(
					"_",
				),
				monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split(
					"_",
				),
				weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
				weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
				weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
				longDateFormat: {
					LT: "h:mm A",
					LTS: "h:mm:ss A",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY h:mm A",
					LLLL: "dddd, D MMMM YYYY h:mm A",
				},
				calendar: {
					sameDay: "[Ònì ni] LT",
					nextDay: "[Ọ̀la ni] LT",
					nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
					lastDay: "[Àna ni] LT",
					lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
					sameElse: "L",
				},
				relativeTime: {
					future: "ní %s",
					past: "%s kọjá",
					s: "ìsẹjú aayá die",
					ss: "aayá %d",
					m: "ìsẹjú kan",
					mm: "ìsẹjú %d",
					h: "wákati kan",
					hh: "wákati %d",
					d: "ọjọ́ kan",
					dd: "ọjọ́ %d",
					M: "osù kan",
					MM: "osù %d",
					y: "ọdún kan",
					yy: "ọdún %d",
				},
				dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
				ordinal: "ọjọ́ %d",
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("zh-cn", {
				months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
					"_",
				),
				monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
					"_",
				),
				weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
				weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
				weekdaysMin: "日_一_二_三_四_五_六".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY/MM/DD",
					LL: "YYYY年M月D日",
					LLL: "YYYY年M月D日Ah点mm分",
					LLLL: "YYYY年M月D日ddddAh点mm分",
					l: "YYYY/M/D",
					ll: "YYYY年M月D日",
					lll: "YYYY年M月D日 HH:mm",
					llll: "YYYY年M月D日dddd HH:mm",
				},
				meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"凌晨" === t || "早上" === t || "上午" === t
							? e
							: "下午" === t || "晚上" === t
							? e + 12
							: e >= 11
							? e
							: e + 12
					)
				},
				meridiem: function (e, t, n) {
					var a = 100 * e + t
					return a < 600
						? "凌晨"
						: a < 900
						? "早上"
						: a < 1130
						? "上午"
						: a < 1230
						? "中午"
						: a < 1800
						? "下午"
						: "晚上"
				},
				calendar: {
					sameDay: "[今天]LT",
					nextDay: "[明天]LT",
					nextWeek: function (e) {
						return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT"
					},
					lastDay: "[昨天]LT",
					lastWeek: function (e) {
						return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT"
					},
					sameElse: "L",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
				ordinal: function (e, t) {
					switch (t) {
						case "d":
						case "D":
						case "DDD":
							return e + "日"
						case "M":
							return e + "月"
						case "w":
						case "W":
							return e + "周"
						default:
							return e
					}
				},
				relativeTime: {
					future: "%s后",
					past: "%s前",
					s: "几秒",
					ss: "%d 秒",
					m: "1 分钟",
					mm: "%d 分钟",
					h: "1 小时",
					hh: "%d 小时",
					d: "1 天",
					dd: "%d 天",
					M: "1 个月",
					MM: "%d 个月",
					y: "1 年",
					yy: "%d 年",
				},
				week: { dow: 1, doy: 4 },
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("zh-hk", {
				months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
					"_",
				),
				monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
					"_",
				),
				weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
				weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
				weekdaysMin: "日_一_二_三_四_五_六".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY/MM/DD",
					LL: "YYYY年M月D日",
					LLL: "YYYY年M月D日 HH:mm",
					LLLL: "YYYY年M月D日dddd HH:mm",
					l: "YYYY/M/D",
					ll: "YYYY年M月D日",
					lll: "YYYY年M月D日 HH:mm",
					llll: "YYYY年M月D日dddd HH:mm",
				},
				meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"凌晨" === t || "早上" === t || "上午" === t
							? e
							: "中午" === t
							? e >= 11
								? e
								: e + 12
							: "下午" === t || "晚上" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					var a = 100 * e + t
					return a < 600
						? "凌晨"
						: a < 900
						? "早上"
						: a < 1200
						? "上午"
						: 1200 === a
						? "中午"
						: a < 1800
						? "下午"
						: "晚上"
				},
				calendar: {
					sameDay: "[今天]LT",
					nextDay: "[明天]LT",
					nextWeek: "[下]ddddLT",
					lastDay: "[昨天]LT",
					lastWeek: "[上]ddddLT",
					sameElse: "L",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
				ordinal: function (e, t) {
					switch (t) {
						case "d":
						case "D":
						case "DDD":
							return e + "日"
						case "M":
							return e + "月"
						case "w":
						case "W":
							return e + "週"
						default:
							return e
					}
				},
				relativeTime: {
					future: "%s後",
					past: "%s前",
					s: "幾秒",
					ss: "%d 秒",
					m: "1 分鐘",
					mm: "%d 分鐘",
					h: "1 小時",
					hh: "%d 小時",
					d: "1 天",
					dd: "%d 天",
					M: "1 個月",
					MM: "%d 個月",
					y: "1 年",
					yy: "%d 年",
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("zh-mo", {
				months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
					"_",
				),
				monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
					"_",
				),
				weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
				weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
				weekdaysMin: "日_一_二_三_四_五_六".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "YYYY年M月D日",
					LLL: "YYYY年M月D日 HH:mm",
					LLLL: "YYYY年M月D日dddd HH:mm",
					l: "D/M/YYYY",
					ll: "YYYY年M月D日",
					lll: "YYYY年M月D日 HH:mm",
					llll: "YYYY年M月D日dddd HH:mm",
				},
				meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"凌晨" === t || "早上" === t || "上午" === t
							? e
							: "中午" === t
							? e >= 11
								? e
								: e + 12
							: "下午" === t || "晚上" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					var a = 100 * e + t
					return a < 600
						? "凌晨"
						: a < 900
						? "早上"
						: a < 1130
						? "上午"
						: a < 1230
						? "中午"
						: a < 1800
						? "下午"
						: "晚上"
				},
				calendar: {
					sameDay: "[今天] LT",
					nextDay: "[明天] LT",
					nextWeek: "[下]dddd LT",
					lastDay: "[昨天] LT",
					lastWeek: "[上]dddd LT",
					sameElse: "L",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
				ordinal: function (e, t) {
					switch (t) {
						case "d":
						case "D":
						case "DDD":
							return e + "日"
						case "M":
							return e + "月"
						case "w":
						case "W":
							return e + "週"
						default:
							return e
					}
				},
				relativeTime: {
					future: "%s內",
					past: "%s前",
					s: "幾秒",
					ss: "%d 秒",
					m: "1 分鐘",
					mm: "%d 分鐘",
					h: "1 小時",
					hh: "%d 小時",
					d: "1 天",
					dd: "%d 天",
					M: "1 個月",
					MM: "%d 個月",
					y: "1 年",
					yy: "%d 年",
				},
			})
		})(n(0))
	},
	function (e, t, n) {
		!(function (e) {
			"use strict"
			//! moment.js locale configuration
			e.defineLocale("zh-tw", {
				months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
					"_",
				),
				monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
					"_",
				),
				weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
				weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
				weekdaysMin: "日_一_二_三_四_五_六".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY/MM/DD",
					LL: "YYYY年M月D日",
					LLL: "YYYY年M月D日 HH:mm",
					LLLL: "YYYY年M月D日dddd HH:mm",
					l: "YYYY/M/D",
					ll: "YYYY年M月D日",
					lll: "YYYY年M月D日 HH:mm",
					llll: "YYYY年M月D日dddd HH:mm",
				},
				meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
				meridiemHour: function (e, t) {
					return (
						12 === e && (e = 0),
						"凌晨" === t || "早上" === t || "上午" === t
							? e
							: "中午" === t
							? e >= 11
								? e
								: e + 12
							: "下午" === t || "晚上" === t
							? e + 12
							: void 0
					)
				},
				meridiem: function (e, t, n) {
					var a = 100 * e + t
					return a < 600
						? "凌晨"
						: a < 900
						? "早上"
						: a < 1130
						? "上午"
						: a < 1230
						? "中午"
						: a < 1800
						? "下午"
						: "晚上"
				},
				calendar: {
					sameDay: "[今天] LT",
					nextDay: "[明天] LT",
					nextWeek: "[下]dddd LT",
					lastDay: "[昨天] LT",
					lastWeek: "[上]dddd LT",
					sameElse: "L",
				},
				dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
				ordinal: function (e, t) {
					switch (t) {
						case "d":
						case "D":
						case "DDD":
							return e + "日"
						case "M":
							return e + "月"
						case "w":
						case "W":
							return e + "週"
						default:
							return e
					}
				},
				relativeTime: {
					future: "%s後",
					past: "%s前",
					s: "幾秒",
					ss: "%d 秒",
					m: "1 分鐘",
					mm: "%d 分鐘",
					h: "1 小時",
					hh: "%d 小時",
					d: "1 天",
					dd: "%d 天",
					M: "1 個月",
					MM: "%d 個月",
					y: "1 年",
					yy: "%d 年",
				},
			})
		})(n(0))
	},
	function (e, t) {
		var n,
			a,
			r = (e.exports = {})
		function s() {
			throw new Error("setTimeout has not been defined")
		}
		function i() {
			throw new Error("clearTimeout has not been defined")
		}
		function o(e) {
			if (n === setTimeout) return setTimeout(e, 0)
			if ((n === s || !n) && setTimeout)
				return (n = setTimeout), setTimeout(e, 0)
			try {
				return n(e, 0)
			} catch (t) {
				try {
					return n.call(null, e, 0)
				} catch (t) {
					return n.call(this, e, 0)
				}
			}
		}
		!(function () {
			try {
				n = "function" == typeof setTimeout ? setTimeout : s
			} catch (e) {
				n = s
			}
			try {
				a = "function" == typeof clearTimeout ? clearTimeout : i
			} catch (e) {
				a = i
			}
		})()
		var d,
			u = [],
			_ = !1,
			l = -1
		function m() {
			_ &&
				d &&
				((_ = !1), d.length ? (u = d.concat(u)) : (l = -1), u.length && c())
		}
		function c() {
			if (!_) {
				var e = o(m)
				_ = !0
				for (var t = u.length; t; ) {
					for (d = u, u = []; ++l < t; ) d && d[l].run()
					;(l = -1), (t = u.length)
				}
				;(d = null),
					(_ = !1),
					(function (e) {
						if (a === clearTimeout) return clearTimeout(e)
						if ((a === i || !a) && clearTimeout)
							return (a = clearTimeout), clearTimeout(e)
						try {
							a(e)
						} catch (t) {
							try {
								return a.call(null, e)
							} catch (t) {
								return a.call(this, e)
							}
						}
					})(e)
			}
		}
		function h(e, t) {
			;(this.fun = e), (this.array = t)
		}
		function f() {}
		;(r.nextTick = function (e) {
			var t = new Array(arguments.length - 1)
			if (arguments.length > 1)
				for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
			u.push(new h(e, t)), 1 !== u.length || _ || o(c)
		}),
			(h.prototype.run = function () {
				this.fun.apply(null, this.array)
			}),
			(r.title = "browser"),
			(r.browser = !0),
			(r.env = {}),
			(r.argv = []),
			(r.version = ""),
			(r.versions = {}),
			(r.on = f),
			(r.addListener = f),
			(r.once = f),
			(r.off = f),
			(r.removeListener = f),
			(r.removeAllListeners = f),
			(r.emit = f),
			(r.prependListener = f),
			(r.prependOnceListener = f),
			(r.listeners = function (e) {
				return []
			}),
			(r.binding = function (e) {
				throw new Error("process.binding is not supported")
			}),
			(r.cwd = function () {
				return "/"
			}),
			(r.chdir = function (e) {
				throw new Error("process.chdir is not supported")
			}),
			(r.umask = function () {
				return 0
			})
	},
	function (e, t, n) {
		"use strict"
		e.exports = function (e, t) {
			return function () {
				for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
					n[a] = arguments[a]
				return e.apply(t, n)
			}
		}
	},
	function (e, t, n) {
		"use strict"
		var a = n(1)
		function r(e) {
			return encodeURIComponent(e)
				.replace(/%40/gi, "@")
				.replace(/%3A/gi, ":")
				.replace(/%24/g, "$")
				.replace(/%2C/gi, ",")
				.replace(/%20/g, "+")
				.replace(/%5B/gi, "[")
				.replace(/%5D/gi, "]")
		}
		e.exports = function (e, t, n) {
			if (!t) return e
			var s
			if (n) s = n(t)
			else if (a.isURLSearchParams(t)) s = t.toString()
			else {
				var i = []
				a.forEach(t, function (e, t) {
					null != e &&
						(a.isArray(e) ? (t += "[]") : (e = [e]),
						a.forEach(e, function (e) {
							a.isDate(e)
								? (e = e.toISOString())
								: a.isObject(e) && (e = JSON.stringify(e)),
								i.push(r(t) + "=" + r(e))
						}))
				}),
					(s = i.join("&"))
			}
			if (s) {
				var o = e.indexOf("#")
				;-1 !== o && (e = e.slice(0, o)),
					(e += (-1 === e.indexOf("?") ? "?" : "&") + s)
			}
			return e
		}
	},
	function (e, t, n) {
		"use strict"
		e.exports = function (e) {
			return !(!e || !e.__CANCEL__)
		}
	},
	function (e, t, n) {
		"use strict"
		;(function (t) {
			var a = n(1),
				r = n(156),
				s = { "Content-Type": "application/x-www-form-urlencoded" }
			function i(e, t) {
				!a.isUndefined(e) &&
					a.isUndefined(e["Content-Type"]) &&
					(e["Content-Type"] = t)
			}
			var o,
				d = {
					adapter:
						(("undefined" != typeof XMLHttpRequest ||
							(void 0 !== t &&
								"[object process]" === Object.prototype.toString.call(t))) &&
							(o = n(141)),
						o),
					transformRequest: [
						function (e, t) {
							return (
								r(t, "Accept"),
								r(t, "Content-Type"),
								a.isFormData(e) ||
								a.isArrayBuffer(e) ||
								a.isBuffer(e) ||
								a.isStream(e) ||
								a.isFile(e) ||
								a.isBlob(e)
									? e
									: a.isArrayBufferView(e)
									? e.buffer
									: a.isURLSearchParams(e)
									? (i(t, "application/x-www-form-urlencoded;charset=utf-8"),
									  e.toString())
									: a.isObject(e)
									? (i(t, "application/json;charset=utf-8"), JSON.stringify(e))
									: e
							)
						},
					],
					transformResponse: [
						function (e) {
							if ("string" == typeof e)
								try {
									e = JSON.parse(e)
								} catch (e) {}
							return e
						},
					],
					timeout: 0,
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					maxContentLength: -1,
					validateStatus: function (e) {
						return e >= 200 && e < 300
					},
				}
			;(d.headers = {
				common: { Accept: "application/json, text/plain, */*" },
			}),
				a.forEach(["delete", "get", "head"], function (e) {
					d.headers[e] = {}
				}),
				a.forEach(["post", "put", "patch"], function (e) {
					d.headers[e] = a.merge(s)
				}),
				(e.exports = d)
		}.call(this, n(136)))
	},
	function (e, t, n) {
		"use strict"
		var a = n(1),
			r = n(157),
			s = n(138),
			i = n(159),
			o = n(162),
			d = n(163),
			u = n(142)
		e.exports = function (e) {
			return new Promise(function (t, _) {
				var l = e.data,
					m = e.headers
				a.isFormData(l) && delete m["Content-Type"]
				var c = new XMLHttpRequest()
				if (e.auth) {
					var h = e.auth.username || "",
						f = e.auth.password || ""
					m.Authorization = "Basic " + btoa(h + ":" + f)
				}
				var p = i(e.baseURL, e.url)
				if (
					(c.open(
						e.method.toUpperCase(),
						s(p, e.params, e.paramsSerializer),
						!0,
					),
					(c.timeout = e.timeout),
					(c.onreadystatechange = function () {
						if (
							c &&
							4 === c.readyState &&
							(0 !== c.status ||
								(c.responseURL && 0 === c.responseURL.indexOf("file:")))
						) {
							var n =
									"getAllResponseHeaders" in c
										? o(c.getAllResponseHeaders())
										: null,
								a = {
									data:
										e.responseType && "text" !== e.responseType
											? c.response
											: c.responseText,
									status: c.status,
									statusText: c.statusText,
									headers: n,
									config: e,
									request: c,
								}
							r(t, _, a), (c = null)
						}
					}),
					(c.onabort = function () {
						c && (_(u("Request aborted", e, "ECONNABORTED", c)), (c = null))
					}),
					(c.onerror = function () {
						_(u("Network Error", e, null, c)), (c = null)
					}),
					(c.ontimeout = function () {
						var t = "timeout of " + e.timeout + "ms exceeded"
						e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
							_(u(t, e, "ECONNABORTED", c)),
							(c = null)
					}),
					a.isStandardBrowserEnv())
				) {
					var M = n(164),
						y =
							(e.withCredentials || d(p)) && e.xsrfCookieName
								? M.read(e.xsrfCookieName)
								: void 0
					y && (m[e.xsrfHeaderName] = y)
				}
				if (
					("setRequestHeader" in c &&
						a.forEach(m, function (e, t) {
							void 0 === l && "content-type" === t.toLowerCase()
								? delete m[t]
								: c.setRequestHeader(t, e)
						}),
					a.isUndefined(e.withCredentials) ||
						(c.withCredentials = !!e.withCredentials),
					e.responseType)
				)
					try {
						c.responseType = e.responseType
					} catch (t) {
						if ("json" !== e.responseType) throw t
					}
				"function" == typeof e.onDownloadProgress &&
					c.addEventListener("progress", e.onDownloadProgress),
					"function" == typeof e.onUploadProgress &&
						c.upload &&
						c.upload.addEventListener("progress", e.onUploadProgress),
					e.cancelToken &&
						e.cancelToken.promise.then(function (e) {
							c && (c.abort(), _(e), (c = null))
						}),
					void 0 === l && (l = null),
					c.send(l)
			})
		}
	},
	function (e, t, n) {
		"use strict"
		var a = n(158)
		e.exports = function (e, t, n, r, s) {
			var i = new Error(e)
			return a(i, t, n, r, s)
		}
	},
	function (e, t, n) {
		"use strict"
		var a = n(1)
		e.exports = function (e, t) {
			t = t || {}
			var n = {},
				r = ["url", "method", "params", "data"],
				s = ["headers", "auth", "proxy"],
				i = [
					"baseURL",
					"url",
					"transformRequest",
					"transformResponse",
					"paramsSerializer",
					"timeout",
					"withCredentials",
					"adapter",
					"responseType",
					"xsrfCookieName",
					"xsrfHeaderName",
					"onUploadProgress",
					"onDownloadProgress",
					"maxContentLength",
					"validateStatus",
					"maxRedirects",
					"httpAgent",
					"httpsAgent",
					"cancelToken",
					"socketPath",
				]
			a.forEach(r, function (e) {
				void 0 !== t[e] && (n[e] = t[e])
			}),
				a.forEach(s, function (r) {
					a.isObject(t[r])
						? (n[r] = a.deepMerge(e[r], t[r]))
						: void 0 !== t[r]
						? (n[r] = t[r])
						: a.isObject(e[r])
						? (n[r] = a.deepMerge(e[r]))
						: void 0 !== e[r] && (n[r] = e[r])
				}),
				a.forEach(i, function (a) {
					void 0 !== t[a] ? (n[a] = t[a]) : void 0 !== e[a] && (n[a] = e[a])
				})
			var o = r.concat(s).concat(i),
				d = Object.keys(t).filter(function (e) {
					return -1 === o.indexOf(e)
				})
			return (
				a.forEach(d, function (a) {
					void 0 !== t[a] ? (n[a] = t[a]) : void 0 !== e[a] && (n[a] = e[a])
				}),
				n
			)
		}
	},
	function (e, t, n) {
		"use strict"
		function a(e) {
			this.message = e
		}
		;(a.prototype.toString = function () {
			return "Cancel" + (this.message ? ": " + this.message : "")
		}),
			(a.prototype.__CANCEL__ = !0),
			(e.exports = a)
	},
	,
	function (e, t, n) {
		"use strict"
		var a = i(n(0)),
			r = i(n(2)),
			s = i(n(149))
		function i(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var o,
			d,
			u = (0, r.default)("#currentDay"),
			_ = (0, r.default)("#timeSettingsBtn"),
			l = (0, r.default)("#containerRow"),
			m = (0, r.default)("#blockquoteBody"),
			c = (0, r.default)("#blockquoteHeadline"),
			h = (0, r.default)("#articleDate"),
			f = (0, r.default)("#dateRow"),
			p = (0, r.default)(".settings-modal"),
			M = (0, a.default)().format("dddd, LL")
		_.on("click", function (e) {
			e.preventDefault(), y()
		})
		var y = function () {
			p.attr("style", "display:block;"),
				(0, r.default)(window).on("click", function (e) {
					console.log(e.target.id),
						(e.target === p[0] && "timeSettingsBtn" === e.target.id) ||
							p.attr("style", "display:none;")
				})
		}
		function L() {
			r.default
				.get("/api/notes" + (0, r.default)(l).data("userid"))
				.then(function (e) {
					e.forEach(function (e) {
						;(0, r.default)("#textarea-" + e.datestamp).text(e.content)
					})
				}),
				console.log()
		}
		function Y() {
			var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 9,
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9,
				n =
					arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: "enter your plans here"
			l.empty()
			for (var s = 0; s < t; s++) {
				var i, o
				e > 24
					? ((i = (0, a.default)("0101 " + (e - 24) + ":00").format("hh:mm A")),
					  (o = (0, a.default)(M).add(1, "day").format("YYYYMMDD")))
					: ((o = (0, a.default)(M).format("YYYYMMDD")),
					  (i = (0, a.default)("0101 " + e + ":00").format("hh:mm A")))
				var d = (0, r.default)("<div>").attr(
						"class",
						"row mb-1 w-100 justify-content-center timeSlotRow",
					),
					u = (0, r.default)("<div>"),
					_ = (0, r.default)("<textarea>"),
					m = (0, r.default)("<i>"),
					c = (0, r.default)("<i>"),
					h = (0, a.default)().format("YYYYMMDDHH"),
					f = o + e.toString().padStart(2, "0")
				u
					.attr("class", "col-2 bg-light time-display px-2 text-right")
					.text(i)
					.attr("title", "timeDisplay")
					.attr("data-date", (0, a.default)().format("YYYYMMDD")),
					_.attr("class", "col col-lg-8 note-slots")
						.attr("placeholder", n)
						.attr("title", "textarea")
						.attr("id", "textarea-" + f)
						.attr("data-datestamp", f),
					c
						.attr("class", "col-1 btn btn-info rounded-0 fa fa-chevron-down")
						.attr("title", "expandBtn")
						.attr("id", "expandBtn-" + f)
						.attr("data-toggle", "disabled")
						.attr("data-target", "#textarea-" + s)
						.attr("aria-expanded", "false")
						.attr("aria-controls", "textarea-" + f)
						.attr("data-datestamp", f),
					m
						.attr("class", "col-1 btn btn-dark rounded-0 fa fa-save")
						.attr("title", "saveBtn")
						.attr("id", "saveBtn-" + f)
						.attr("data-datestamp", f),
					d.append(u, _),
					f === h
						? (_.addClass("bg-current"), d.append(m))
						: f < h
						? (_.addClass("bg-past"), _.removeAttr("placeholder"))
						: (d.append(m), _.addClass("bg-future")),
					l.append(d),
					e++
			}
			L()
		}
		s.default.getArticle().then(function (e) {
			for (
				var t = e.response.docs.length,
					n = Math.floor(Math.random() * t),
					s = e.response.docs[n],
					i = 0;
				i < t && null === s.abstract;
				i++
			)
				console.log("abstract is null"),
					(n = Math.floor(Math.random() * t)),
					(s = e.response.docs[n])
			var o = e.response.docs[n].pub_date
			;(o = (0, a.default)(o).format("LL")),
				h.text((0, a.default)(o).format("LL")),
				c.text(s.headline.main),
				m.text(s.abstract),
				(0, r.default)("#articleSource").text(s.source)
		}),
			u.text(M),
			setInterval(function () {
				u.text(M)
			}, 1e3),
			(o =
				null === JSON.parse(localStorage.getItem("storedSlotData"))
					? []
					: JSON.parse(localStorage.getItem("storedSlotData"))),
			Y(),
			f.on("click", function (e) {
				var t = e.target,
					n = t.parentElement
				switch (t.id || n.id) {
					case "leftChevron":
						;(M = (0, a.default)(M).subtract(1, "day").format("dddd, LL")),
							u.text(M),
							Y()
						break
					case "currentDay":
						break
					case "rightChevron":
						;(M = (0, a.default)(M).add(1, "day").format("dddd, LL")),
							u.text(M),
							Y()
				}
			}),
			l.on("click", function (e) {
				e.preventDefault()
				var t,
					n = e.target
				switch (n.title) {
					case "saveBtn":
						var a = n.attributes["data-datestamp"].value,
							s = (0, r.default)("#textarea-" + a)[0].value,
							i = (0, r.default)("#textarea-" + a)[0].attributes[
								"data-datestamp"
							].value,
							u = {
								title: i,
								content: s,
								datestamp: i,
								UserId: (0, r.default)(l).data("userid"),
							}
						!(function (e) {
							for (
								var t = e.target.attributes["data-datestamp"].value,
									n = (0, r.default)("#textarea-" + t),
									a = n[0].value,
									s = n[0].attributes["data-datestamp"].value,
									i = !1,
									d = 0;
								d < o.length;
								d++
							)
								o[d].datestamp === s &&
									((i = !0),
									console.log("found a match in the saved logs"),
									(o[d].message = a),
									localStorage.setItem("storedSlotData", JSON.stringify(o)))
							if (i) return !1
							var u = {}
							;(u.datestamp = s),
								(u.message = a),
								o.push(u),
								localStorage.setItem("storedSlotData", JSON.stringify(o)),
								setTimeout(function () {
									window.location.href = "/"
								}, 500)
						})(e),
							(t = u),
							console.log(t),
							r.default
								.post("/api/notes" + (0, r.default)(l).data("userid"), t)
								.then(function (e) {
									console.log(e)
								})
						break
					case "expandBtn":
						alert("Expanding")
						break
					case "timeDisplayX":
						if (
							((d = prompt("enter new time (0 - 23): ")),
							isNaN(parseInt(d)) || d < 0 || d > 23)
						) {
							alert("please enter a valid number (0 - 23)")
							break
						}
						localStorage.setItem("userTimeChoice", d), Y(d)
				}
			})
	},
	function (e, t) {
		e.exports = function (e) {
			return (
				e.webpackPolyfill ||
					((e.deprecate = function () {}),
					(e.paths = []),
					e.children || (e.children = []),
					Object.defineProperty(e, "loaded", {
						enumerable: !0,
						get: function () {
							return e.l
						},
					}),
					Object.defineProperty(e, "id", {
						enumerable: !0,
						get: function () {
							return e.i
						},
					}),
					(e.webpackPolyfill = 1)),
				e
			)
		}
	},
	function (e, t, n) {
		var a = {
			"./af": 3,
			"./af.js": 3,
			"./ar": 4,
			"./ar-dz": 5,
			"./ar-dz.js": 5,
			"./ar-kw": 6,
			"./ar-kw.js": 6,
			"./ar-ly": 7,
			"./ar-ly.js": 7,
			"./ar-ma": 8,
			"./ar-ma.js": 8,
			"./ar-sa": 9,
			"./ar-sa.js": 9,
			"./ar-tn": 10,
			"./ar-tn.js": 10,
			"./ar.js": 4,
			"./az": 11,
			"./az.js": 11,
			"./be": 12,
			"./be.js": 12,
			"./bg": 13,
			"./bg.js": 13,
			"./bm": 14,
			"./bm.js": 14,
			"./bn": 15,
			"./bn.js": 15,
			"./bo": 16,
			"./bo.js": 16,
			"./br": 17,
			"./br.js": 17,
			"./bs": 18,
			"./bs.js": 18,
			"./ca": 19,
			"./ca.js": 19,
			"./cs": 20,
			"./cs.js": 20,
			"./cv": 21,
			"./cv.js": 21,
			"./cy": 22,
			"./cy.js": 22,
			"./da": 23,
			"./da.js": 23,
			"./de": 24,
			"./de-at": 25,
			"./de-at.js": 25,
			"./de-ch": 26,
			"./de-ch.js": 26,
			"./de.js": 24,
			"./dv": 27,
			"./dv.js": 27,
			"./el": 28,
			"./el.js": 28,
			"./en-au": 29,
			"./en-au.js": 29,
			"./en-ca": 30,
			"./en-ca.js": 30,
			"./en-gb": 31,
			"./en-gb.js": 31,
			"./en-ie": 32,
			"./en-ie.js": 32,
			"./en-il": 33,
			"./en-il.js": 33,
			"./en-in": 34,
			"./en-in.js": 34,
			"./en-nz": 35,
			"./en-nz.js": 35,
			"./en-sg": 36,
			"./en-sg.js": 36,
			"./eo": 37,
			"./eo.js": 37,
			"./es": 38,
			"./es-do": 39,
			"./es-do.js": 39,
			"./es-us": 40,
			"./es-us.js": 40,
			"./es.js": 38,
			"./et": 41,
			"./et.js": 41,
			"./eu": 42,
			"./eu.js": 42,
			"./fa": 43,
			"./fa.js": 43,
			"./fi": 44,
			"./fi.js": 44,
			"./fil": 45,
			"./fil.js": 45,
			"./fo": 46,
			"./fo.js": 46,
			"./fr": 47,
			"./fr-ca": 48,
			"./fr-ca.js": 48,
			"./fr-ch": 49,
			"./fr-ch.js": 49,
			"./fr.js": 47,
			"./fy": 50,
			"./fy.js": 50,
			"./ga": 51,
			"./ga.js": 51,
			"./gd": 52,
			"./gd.js": 52,
			"./gl": 53,
			"./gl.js": 53,
			"./gom-deva": 54,
			"./gom-deva.js": 54,
			"./gom-latn": 55,
			"./gom-latn.js": 55,
			"./gu": 56,
			"./gu.js": 56,
			"./he": 57,
			"./he.js": 57,
			"./hi": 58,
			"./hi.js": 58,
			"./hr": 59,
			"./hr.js": 59,
			"./hu": 60,
			"./hu.js": 60,
			"./hy-am": 61,
			"./hy-am.js": 61,
			"./id": 62,
			"./id.js": 62,
			"./is": 63,
			"./is.js": 63,
			"./it": 64,
			"./it-ch": 65,
			"./it-ch.js": 65,
			"./it.js": 64,
			"./ja": 66,
			"./ja.js": 66,
			"./jv": 67,
			"./jv.js": 67,
			"./ka": 68,
			"./ka.js": 68,
			"./kk": 69,
			"./kk.js": 69,
			"./km": 70,
			"./km.js": 70,
			"./kn": 71,
			"./kn.js": 71,
			"./ko": 72,
			"./ko.js": 72,
			"./ku": 73,
			"./ku.js": 73,
			"./ky": 74,
			"./ky.js": 74,
			"./lb": 75,
			"./lb.js": 75,
			"./lo": 76,
			"./lo.js": 76,
			"./lt": 77,
			"./lt.js": 77,
			"./lv": 78,
			"./lv.js": 78,
			"./me": 79,
			"./me.js": 79,
			"./mi": 80,
			"./mi.js": 80,
			"./mk": 81,
			"./mk.js": 81,
			"./ml": 82,
			"./ml.js": 82,
			"./mn": 83,
			"./mn.js": 83,
			"./mr": 84,
			"./mr.js": 84,
			"./ms": 85,
			"./ms-my": 86,
			"./ms-my.js": 86,
			"./ms.js": 85,
			"./mt": 87,
			"./mt.js": 87,
			"./my": 88,
			"./my.js": 88,
			"./nb": 89,
			"./nb.js": 89,
			"./ne": 90,
			"./ne.js": 90,
			"./nl": 91,
			"./nl-be": 92,
			"./nl-be.js": 92,
			"./nl.js": 91,
			"./nn": 93,
			"./nn.js": 93,
			"./oc-lnc": 94,
			"./oc-lnc.js": 94,
			"./pa-in": 95,
			"./pa-in.js": 95,
			"./pl": 96,
			"./pl.js": 96,
			"./pt": 97,
			"./pt-br": 98,
			"./pt-br.js": 98,
			"./pt.js": 97,
			"./ro": 99,
			"./ro.js": 99,
			"./ru": 100,
			"./ru.js": 100,
			"./sd": 101,
			"./sd.js": 101,
			"./se": 102,
			"./se.js": 102,
			"./si": 103,
			"./si.js": 103,
			"./sk": 104,
			"./sk.js": 104,
			"./sl": 105,
			"./sl.js": 105,
			"./sq": 106,
			"./sq.js": 106,
			"./sr": 107,
			"./sr-cyrl": 108,
			"./sr-cyrl.js": 108,
			"./sr.js": 107,
			"./ss": 109,
			"./ss.js": 109,
			"./sv": 110,
			"./sv.js": 110,
			"./sw": 111,
			"./sw.js": 111,
			"./ta": 112,
			"./ta.js": 112,
			"./te": 113,
			"./te.js": 113,
			"./tet": 114,
			"./tet.js": 114,
			"./tg": 115,
			"./tg.js": 115,
			"./th": 116,
			"./th.js": 116,
			"./tk": 117,
			"./tk.js": 117,
			"./tl-ph": 118,
			"./tl-ph.js": 118,
			"./tlh": 119,
			"./tlh.js": 119,
			"./tr": 120,
			"./tr.js": 120,
			"./tzl": 121,
			"./tzl.js": 121,
			"./tzm": 122,
			"./tzm-latn": 123,
			"./tzm-latn.js": 123,
			"./tzm.js": 122,
			"./ug-cn": 124,
			"./ug-cn.js": 124,
			"./uk": 125,
			"./uk.js": 125,
			"./ur": 126,
			"./ur.js": 126,
			"./uz": 127,
			"./uz-latn": 128,
			"./uz-latn.js": 128,
			"./uz.js": 127,
			"./vi": 129,
			"./vi.js": 129,
			"./x-pseudo": 130,
			"./x-pseudo.js": 130,
			"./yo": 131,
			"./yo.js": 131,
			"./zh-cn": 132,
			"./zh-cn.js": 132,
			"./zh-hk": 133,
			"./zh-hk.js": 133,
			"./zh-mo": 134,
			"./zh-mo.js": 134,
			"./zh-tw": 135,
			"./zh-tw.js": 135,
		}
		function r(e) {
			var t = s(e)
			return n(t)
		}
		function s(e) {
			if (!n.o(a, e)) {
				var t = new Error("Cannot find module '" + e + "'")
				throw ((t.code = "MODULE_NOT_FOUND"), t)
			}
			return a[e]
		}
		;(r.keys = function () {
			return Object.keys(a)
		}),
			(r.resolve = s),
			(e.exports = r),
			(r.id = 148)
	},
	function (e, t, n) {
		"use strict"
		;(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 })
			var a = s(n(150)),
				r = s(n(0))
			function s(e) {
				return e && e.__esModule ? e : { default: e }
			}
			t.default = {
				getArticle: function () {
					console.log(e.env)
					var t =
						"https://api.nytimes.com/svc/archive/v1/" +
						(Math.floor(Math.random() * ((0, r.default)().year() - 1851)) +
							1851) +
						"/" +
						(0, r.default)().month() +
						".json?api-key=" +
						e.env.NYT_API_KEY
					return a.default.get(t)
				},
			}
		}.call(this, n(136)))
	},
	function (e, t, n) {
		e.exports = n(151)
	},
	function (e, t, n) {
		"use strict"
		var a = n(1),
			r = n(137),
			s = n(152),
			i = n(143)
		function o(e) {
			var t = new s(e),
				n = r(s.prototype.request, t)
			return a.extend(n, s.prototype, t), a.extend(n, t), n
		}
		var d = o(n(140))
		;(d.Axios = s),
			(d.create = function (e) {
				return o(i(d.defaults, e))
			}),
			(d.Cancel = n(144)),
			(d.CancelToken = n(165)),
			(d.isCancel = n(139)),
			(d.all = function (e) {
				return Promise.all(e)
			}),
			(d.spread = n(166)),
			(e.exports = d),
			(e.exports.default = d)
	},
	function (e, t, n) {
		"use strict"
		var a = n(1),
			r = n(138),
			s = n(153),
			i = n(154),
			o = n(143)
		function d(e) {
			;(this.defaults = e),
				(this.interceptors = { request: new s(), response: new s() })
		}
		;(d.prototype.request = function (e) {
			"string" == typeof e
				? ((e = arguments[1] || {}).url = arguments[0])
				: (e = e || {}),
				(e = o(this.defaults, e)).method
					? (e.method = e.method.toLowerCase())
					: this.defaults.method
					? (e.method = this.defaults.method.toLowerCase())
					: (e.method = "get")
			var t = [i, void 0],
				n = Promise.resolve(e)
			for (
				this.interceptors.request.forEach(function (e) {
					t.unshift(e.fulfilled, e.rejected)
				}),
					this.interceptors.response.forEach(function (e) {
						t.push(e.fulfilled, e.rejected)
					});
				t.length;

			)
				n = n.then(t.shift(), t.shift())
			return n
		}),
			(d.prototype.getUri = function (e) {
				return (
					(e = o(this.defaults, e)),
					r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
				)
			}),
			a.forEach(["delete", "get", "head", "options"], function (e) {
				d.prototype[e] = function (t, n) {
					return this.request(a.merge(n || {}, { method: e, url: t }))
				}
			}),
			a.forEach(["post", "put", "patch"], function (e) {
				d.prototype[e] = function (t, n, r) {
					return this.request(a.merge(r || {}, { method: e, url: t, data: n }))
				}
			}),
			(e.exports = d)
	},
	function (e, t, n) {
		"use strict"
		var a = n(1)
		function r() {
			this.handlers = []
		}
		;(r.prototype.use = function (e, t) {
			return (
				this.handlers.push({ fulfilled: e, rejected: t }),
				this.handlers.length - 1
			)
		}),
			(r.prototype.eject = function (e) {
				this.handlers[e] && (this.handlers[e] = null)
			}),
			(r.prototype.forEach = function (e) {
				a.forEach(this.handlers, function (t) {
					null !== t && e(t)
				})
			}),
			(e.exports = r)
	},
	function (e, t, n) {
		"use strict"
		var a = n(1),
			r = n(155),
			s = n(139),
			i = n(140)
		function o(e) {
			e.cancelToken && e.cancelToken.throwIfRequested()
		}
		e.exports = function (e) {
			return (
				o(e),
				(e.headers = e.headers || {}),
				(e.data = r(e.data, e.headers, e.transformRequest)),
				(e.headers = a.merge(
					e.headers.common || {},
					e.headers[e.method] || {},
					e.headers,
				)),
				a.forEach(
					["delete", "get", "head", "post", "put", "patch", "common"],
					function (t) {
						delete e.headers[t]
					},
				),
				(e.adapter || i.adapter)(e).then(
					function (t) {
						return o(e), (t.data = r(t.data, t.headers, e.transformResponse)), t
					},
					function (t) {
						return (
							s(t) ||
								(o(e),
								t &&
									t.response &&
									(t.response.data = r(
										t.response.data,
										t.response.headers,
										e.transformResponse,
									))),
							Promise.reject(t)
						)
					},
				)
			)
		}
	},
	function (e, t, n) {
		"use strict"
		var a = n(1)
		e.exports = function (e, t, n) {
			return (
				a.forEach(n, function (n) {
					e = n(e, t)
				}),
				e
			)
		}
	},
	function (e, t, n) {
		"use strict"
		var a = n(1)
		e.exports = function (e, t) {
			a.forEach(e, function (n, a) {
				a !== t &&
					a.toUpperCase() === t.toUpperCase() &&
					((e[t] = n), delete e[a])
			})
		}
	},
	function (e, t, n) {
		"use strict"
		var a = n(142)
		e.exports = function (e, t, n) {
			var r = n.config.validateStatus
			!r || r(n.status)
				? e(n)
				: t(
						a(
							"Request failed with status code " + n.status,
							n.config,
							null,
							n.request,
							n,
						),
				  )
		}
	},
	function (e, t, n) {
		"use strict"
		e.exports = function (e, t, n, a, r) {
			return (
				(e.config = t),
				n && (e.code = n),
				(e.request = a),
				(e.response = r),
				(e.isAxiosError = !0),
				(e.toJSON = function () {
					return {
						message: this.message,
						name: this.name,
						description: this.description,
						number: this.number,
						fileName: this.fileName,
						lineNumber: this.lineNumber,
						columnNumber: this.columnNumber,
						stack: this.stack,
						config: this.config,
						code: this.code,
					}
				}),
				e
			)
		}
	},
	function (e, t, n) {
		"use strict"
		var a = n(160),
			r = n(161)
		e.exports = function (e, t) {
			return e && !a(t) ? r(e, t) : t
		}
	},
	function (e, t, n) {
		"use strict"
		e.exports = function (e) {
			return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
		}
	},
	function (e, t, n) {
		"use strict"
		e.exports = function (e, t) {
			return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
		}
	},
	function (e, t, n) {
		"use strict"
		var a = n(1),
			r = [
				"age",
				"authorization",
				"content-length",
				"content-type",
				"etag",
				"expires",
				"from",
				"host",
				"if-modified-since",
				"if-unmodified-since",
				"last-modified",
				"location",
				"max-forwards",
				"proxy-authorization",
				"referer",
				"retry-after",
				"user-agent",
			]
		e.exports = function (e) {
			var t,
				n,
				s,
				i = {}
			return e
				? (a.forEach(e.split("\n"), function (e) {
						if (
							((s = e.indexOf(":")),
							(t = a.trim(e.substr(0, s)).toLowerCase()),
							(n = a.trim(e.substr(s + 1))),
							t)
						) {
							if (i[t] && r.indexOf(t) >= 0) return
							i[t] =
								"set-cookie" === t
									? (i[t] ? i[t] : []).concat([n])
									: i[t]
									? i[t] + ", " + n
									: n
						}
				  }),
				  i)
				: i
		}
	},
	function (e, t, n) {
		"use strict"
		var a = n(1)
		e.exports = a.isStandardBrowserEnv()
			? (function () {
					var e,
						t = /(msie|trident)/i.test(navigator.userAgent),
						n = document.createElement("a")
					function r(e) {
						var a = e
						return (
							t && (n.setAttribute("href", a), (a = n.href)),
							n.setAttribute("href", a),
							{
								href: n.href,
								protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
								host: n.host,
								search: n.search ? n.search.replace(/^\?/, "") : "",
								hash: n.hash ? n.hash.replace(/^#/, "") : "",
								hostname: n.hostname,
								port: n.port,
								pathname:
									"/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
							}
						)
					}
					return (
						(e = r(window.location.href)),
						function (t) {
							var n = a.isString(t) ? r(t) : t
							return n.protocol === e.protocol && n.host === e.host
						}
					)
			  })()
			: function () {
					return !0
			  }
	},
	function (e, t, n) {
		"use strict"
		var a = n(1)
		e.exports = a.isStandardBrowserEnv()
			? {
					write: function (e, t, n, r, s, i) {
						var o = []
						o.push(e + "=" + encodeURIComponent(t)),
							a.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
							a.isString(r) && o.push("path=" + r),
							a.isString(s) && o.push("domain=" + s),
							!0 === i && o.push("secure"),
							(document.cookie = o.join("; "))
					},
					read: function (e) {
						var t = document.cookie.match(
							new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
						)
						return t ? decodeURIComponent(t[3]) : null
					},
					remove: function (e) {
						this.write(e, "", Date.now() - 864e5)
					},
			  }
			: {
					write: function () {},
					read: function () {
						return null
					},
					remove: function () {},
			  }
	},
	function (e, t, n) {
		"use strict"
		var a = n(144)
		function r(e) {
			if ("function" != typeof e)
				throw new TypeError("executor must be a function.")
			var t
			this.promise = new Promise(function (e) {
				t = e
			})
			var n = this
			e(function (e) {
				n.reason || ((n.reason = new a(e)), t(n.reason))
			})
		}
		;(r.prototype.throwIfRequested = function () {
			if (this.reason) throw this.reason
		}),
			(r.source = function () {
				var e
				return {
					token: new r(function (t) {
						e = t
					}),
					cancel: e,
				}
			}),
			(e.exports = r)
	},
	function (e, t, n) {
		"use strict"
		e.exports = function (e) {
			return function (t) {
				return e.apply(null, t)
			}
		}
	},
])

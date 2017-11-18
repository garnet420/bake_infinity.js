# break_infinity.js
A replacement for decimal.js for incremental games who want to deal with very large numbers (bigger in magnitude than 1e308, up to as much as 1e(9e15) ) and want to prioritize speed over accuracy.
If you want to prioritize accuracy over speed, please use decimal.js instead.

https://github.com/Patashu/break_infinity.js

This library is open source and free to use/modify/fork for any purpose you want.

By Patashu.

---

Decimal has only two fields:

mantissa: A number (double) with absolute value between [1, 10) OR exactly 0. If mantissa is ever 10 or greater, it should be normalized (divide by 10 and add 1 to exponent until it is less than 10, or multiply by 10 and subtract 1 from exponent until it is 1 or greater). Infinity/-Infinity/NaN will cause bad things to happen.
exponent: A number (integer) between -EXP_LIMIT and EXP_LIMIT. Non-integral/out of bounds will cause bad things to happen.

The decimal's value is simply mantissa*10^exponent.

Functions of Decimal:

fromMantissaExponent(mantissa, exponent)
fromDecimal(value)
fromNumber(value)
fromString(value)
fromValue(value)

toNumber()
mantissaWithDecimalPlaces(places)
toString()
toStringWithDecimalPlaces(places)

abs(), neg(), sign()
add(value), sub(value), mul(value), div(value), recip()

cmp(value), eq(value), neq(value), lt(value), lte(value), gt(value), gte(value)
cmp_tolerance(value, tolerance), eq_tolerance(value, tolerance), neq_tolerance(value, tolerance), lt_tolerance(value, tolerance), lte_tolerance(value, tolerance), gt_tolerance(value, tolerance), gte_tolerance(value, tolerance)

log(base), log10(), log2(), ln()
pow(value, other), pow(value), pow_base(value), exp(), sqr(), sqrt(), cube(), cbrt()

---

Dedicated to Hevipelle, and all the CPUs that struggled to run Antimatter Dimensions.

Related song: https://soundcloud.com/patashu/8-bit-progressive-stoic-platonic-ideal

p.s. No, this library will never handle numbers bigger in mthan 1e(9e15) because it would incur a performance loss for non-ridiculouse use-cases. I would (or you would?) write a separate break_eternity.js for that.
/**
 * Identity.
 * 
 * @param a - the parameter
 * 
 * @return `a` 
 */ 
const $identity = (a) => {
  return a;
}

/**
 * Equality by the value.
 * 
 * @param a - the first field
 * @param b - the second field
 * 
 * @return true if the value of `a` or result of the `a` execution is equal to the value of `b` or result of the `b` execution. 
 */ 
const $equal = (a, b) => {
  const aval = ('function' === typeof a) ? a() : a;
  const bval = ('function' === typeof b) ? b() : b;
  return aval == bval;
}

/**
 * The else part is mandatory because the function must always return a value.
 * The value is returned as added in parameters `then` and `otherwise`.
 * 
 * Example:
 * ```
 * var doubleMe = (x) => x * 2
 * var tripleMe = (x) => x * 3
 * 
 * var x = 5
 * var op = $if (x > 10, doubleMe, tripleMe)
 * var res = op (x) // 15 
 * ```
 * 
 * @param condition - the condition, if the condition is a function, the condition is the result of the function call
 * @param then - to return if the condition is true
 * @param otherwise - to return otherwise
 * 
 * @return `then` if the condition is true, otherwise `otherwise`
 */
const $if = (condition, then, otherwise) => {
  const cond = ('function' === typeof condition) ? condition() : condition;
  return cond ? then : otherwise;
}
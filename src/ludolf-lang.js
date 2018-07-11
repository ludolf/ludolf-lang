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
 */
const $if = (condition, then, otherwise) => {
  const cond = ('function' === typeof condition) ? condition() : cond;
  return cond ? then : otherwise;
}
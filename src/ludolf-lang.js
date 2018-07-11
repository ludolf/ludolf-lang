/**
 * The else part is mandatory because the function must always return a value.
 */
$if = (condition, then, otherwise) => {
  const cond = ('function' === typeof condition) ? condition() : cond;
  return cond ? then : otherwise;
}
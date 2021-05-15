/*
Currying is a useful technique used in JavaScript applications.
Please implement a curry() function, which accepts a function and return a curried one.

Here is an example
const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3) // '1_2_3'


more to read
------------
https://javascript.info/currying-partials
https://lodash.com/docs/4.17.15#curry
*/


/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // If passed args count is the same or more than the original func has in its definition (func.length), 
  // then just pass the call to it using func.apply.
  //
  // Otherwise, get a partial: we don’t call func just yet. 
  // Instead, another wrapper is returned, that will re-apply curried providing previous arguments together with the new ones.
  return curried = (...args) => {
    if (args.length >= fn.length) return fn.apply(this, args);
    else return (...args2) => curried.apply(this, args.concat(args2));
  }
}

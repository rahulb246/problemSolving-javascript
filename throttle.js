/*
throttle(func, delay) will return a throttled function, which will invoke the func at a max frequency no matter how throttled one is called.

Here is an example
------------------
Before throttling we have a series of calling like

─A─B─C─ ─D─ ─ ─ ─ ─ ─ E─ ─F─G

After throttling at wait time of 3 dashes

─A─ ─ ─C─ ─ ─D ─ ─ ─ ─ E─ ─ ─G

call A is triggered right way because not in waiting time
function call B is swallowed because B, C is in the cooling time from A, and C is latter.
*/


/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  // your code here
  //     1. once called,
  //       - if cooling, stash the call
  //       - if not colling, run it  and set the timer
  //     2. when time is up, reset cooling
  //       - if stashed call, call it, go to 1
  let timer = null;
  let stashed = null;

  function startCooling() {
    timer = setTimeout(check, wait);
  }

  function check() {
    timer = null;
    if (stashed !== null) {
      func.apply(stashed[0], stashed[1]);
      stashed = null;
      startCooling();
    }
  }

  return function(...args) {
    if (timer !== null) {
      stashed = [this, args];
    } else {
      func.apply(this, args);
      startCooling();
    }
  }
}

/*
In the debouncing technique, no matter how many times the user fires the event, 
the attached function will be executed only after the specified time once the user stops firing the event.
*/

/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  // your code here
  let timer = 0;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), wait);
  }
}

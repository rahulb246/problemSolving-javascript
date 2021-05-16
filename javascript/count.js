/*
create a function count(), when called it should return how many times it has been called, count.reset() should also be implemented.

count() // 1
count() // 2
count() // 3
count.reset()
count() // 1
count() // 2
count() // 3
*/

// using IIFE
const count = (() => {
  let counter = 0;
  let func = () => ++counter;
  func.reset = () => { 
    counter = 0;
  }
  return func;
})();

/*
// using prototype
function count(){
  return ++count.prototype.counter;  
}

count.prototype.counter = 0;

count.__proto__.reset = function(){
 count.prototype.counter=0;
}
*/

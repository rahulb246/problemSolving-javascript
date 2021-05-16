/*
[1,2,3].myMap(num => num * 2)
[2,4,6]

Array.prototype.myMap = function(callback, thisObj) {
  const resArr = [];
  this.forEach((...args) => {
    const index = args[1];
    resArr[index] = callback.apply(thisObj, args);
  })
  return resArr;
}
*/

Array.prototype.myMap = function(callback, thisObj) {
  // your code here
  const resArr = [];
  this.forEach((item, key, arr) => {
    resArr[key] = callback.call(thisObj, item, key, arr);
  })

  return resArr;
}

// function createCounter() {
//   return { 
//     counter : 0,
//     get count() {
//       return this.counter++;
//     }
//   };
// }


// using Object.defineProperty

// function createCounter() {
//   // your code here
//   let count = 0;
//   let obj = { counter: 0};
//   Object.defineProperty(obj, 'count', {
//     get : () => count++
//   })

//   return obj;
// }


// class implementation
/**
 * @returns { {count: number}}
 */
function createCounter() {
  class Counter {
    constructor () {
      this.counter = 0;
    }
    
    get count() {
      return this.counter++;
    }

    set count(counter) {
      // do nothing
    }
  }

  return new Counter();
}



const counter = createCounter()
counter.count // 0, then it should increment
counter.count // 1
counter.count // 2
counter.count = 100 // it cannot be altered
counter.count // 3

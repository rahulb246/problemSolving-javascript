/* 

http://expressjs.com/en/guide/using-middleware.html#using-middleware

USAGE EXAMPLE
--------------
const middleware = new Middleware()
middleware.use((req, next) => {
   req.a = 1
   next()
})
middleware.use((req, next) => {
   req.b = 2
   next()
})
middleware.use((req, next) => {
   console.log(req)
})
middleware.start({})
// {a: 1, b: 2}

const middleware = new Middleware()

// throw an error at first function
middleware.use((req, next) => {
   req.a = 1
   throw new Error('sth wrong') 
   // or `next(new Error('sth wrong'))`
})

// since error occurs, this is skipped
middleware.use((req, next) => {
   req.b = 2
})

// since error occurs, this is skipped
middleware.use((req, next) => {
   console.log(req)
})

// since error occurs, this is called
middleware.use((error, req, next) => {
   console.log(error)
   console.log(req)
})

middleware.start({})
// Error: sth wrong
// {a: 1}
*/

class Middleware {
  /**
   * @param {MiddlewareFunc} func
   */

  constructor() {
    this.mwFuncs = [];
    this.errorHandlers = [];
  }

  use(func) {
    if (func.length === 3) this.errorHandlers.push(func);
    if (func.length == 2) this.mwFuncs.push(func);
  }

  /**
   * @param {Request} req
   */
  start(req) {
    let self = this;
    function next(err) {
      let args = [req, next];
      let funcToCall = null;
      if (err) {
        funcToCall = self.errorHandlers.shift();
        args.unshift(err);
      } else funcToCall = self.mwFuncs.shift();
      try {
        funcToCall && funcToCall(...args);
      } catch(err) {
        next(err);
      }
    } 

    next();
  }
}

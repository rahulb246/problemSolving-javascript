/*
Implements ClassNames package functionality
https://www.npmjs.com/package/classnames
*/

function classNames(...args) {
    let classes = '';
    for (let arg of args) {
        if (arg) {
            let newClasses = processArg(arg);
            classes = appendClasses(classes, newClasses);
        }
    }
    return classes;
}

function processArg(arg) {
    if (typeof arg === 'string')
        return arg;
  
    if (typeof arg === 'number')
        return '' + arg;
  
    if (typeof arg !== 'object') 
        return '';
  
    if (Array.isArray(arg))
        return classNames(...arg);
  
    let classes = '';
    for (let key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
            let newClasses = processArg(key);
            classes = appendClasses(classes, newClasses);
        }
    }
    return classes;
}

function appendClasses(existingClasses, newClasses) {
    if (!newClasses) return existingClasses;
    return existingClasses ? existingClasses + ' ' + newClasses : newClasses;
}

/*
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '');

const arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'

let buttonType = 'primary';
classNames({ [`btn-${buttonType}`]: true });
*/

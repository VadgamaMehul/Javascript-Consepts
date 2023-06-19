/**
 * by defualt its slofy mode in JS
 * but in some cases strict mode is banificeary
 * so fo turn it on we simply use "use strict"
 *
 * using strict mode we can make perticular func strict or entire script
 * but we cant do any block strict like for loop/if
 *
 * ------Strict mode makes several changes to normal JavaScript semantics:
 * 1.Eliminates some JavaScript silent errors by changing them to throw errors.
 * 2.Fixes mistakes that make it difficult for JavaScript engines to perform optimizations
 * 3.Prohibits some syntax likely to be defined in future versions of ECMAScript.
 *
 *
 *
 */

// when we use defualt bindig this refer to wwindow object
// example

function returnThis() {
  "use strict";
  return this;
}

console.log(returnThis()); // it will return window obj if "use strict" not define
// but if we use "use strict" it will give undefine


//----------------------Example 1--------------------------
//---problem 1--------
function abc() {
  foo = 17; //with out using strict mode foo become global
}

abc()
console.log(foo); //foo is acceble out side the func.

//----solutoion use strict mode
function abc() {
  "use strict"
  foo = 17; //with using strict mode foo become now only this func. bound
}

abc(); //it will give now foo is not define


//----------------------Example 2----------------------------------------
//----------with out using "use strict" / sloppy mode--------------------

function fun() {
  return this;
}

fun() === global; // true
typeof fun.call(2) === 'object'; //true
fun.apply(null) === global; //true
fun.apply(undefined) === global; //true
typeof fun.bind(true)() === 'object'; //true


//----------with using "use strict"--------------------
'use strict'
function fun() {
  return this;
}

fun() === undefined; // true
typeof fun.call(2) === 'number'; //true
fun.apply(null) === null; //true
fun.apply(undefined) === undefined; //true
typeof fun.bind(true)() === 'boolean'; //true

/**
 * In sloppy mode,'this' is always an object:
 * either the provided object if called with an object-valued this; 
 * the value, boxed, if called with a Boolean,string, or number this;
 * or the global object if called with an undefined or null this.
 * 
 */

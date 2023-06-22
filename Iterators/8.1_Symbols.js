/**
 * Symbol is one of the data type of JS in ES6
 * it represnt by Symbol
 * 
 * -----------why symbol?
 * -Bcz its always be unique 2 same symbols are never be same
 * ex.
 * let sym = Symbol('a');
 * let sym2 = Symbol('a');
 *  
 * console.log(sym === sym2); //! false
 * 
 * -bcz symbols are uniqe it wont collide both each other like string
 * -that enables a form of weak encapsilation
 * 
 * 
 * -----------Global symbol 
 * -global symbols only accessible in that perticular module/realm it not store in global realm
 * -thus symbol has it indevidual identity we cant do cross realm to
 * 
 * ----------For making Symbol global
 * -let globalsym = Symbol.for('key');
 * -Symbol.keyFor() //to get key of global Symbol
 * 
 * -----------Characteristics of symbols
 * -it never coflict with Object string keys.
 * -it cannot be read using existing reflection tool
 * -it isnt privet
 * -it arent coercible into primitives.
 * -
 * 
 */
let sym = Symbol('abc');
console.log(sym);
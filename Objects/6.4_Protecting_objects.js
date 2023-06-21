/**
 * 2 type of weak and strong protector
 * 
 * Protecting Objects

There are three levels of protection an object can have,
listed here from weakest to strongest:

© Preventing extensions
© Sealing
© Freezing


 */

//--------Preventing Extension--------
/**Object.preventExtensions(obj)

makes it impossible to add
properties to obj.

You check whether an object is
extensible via:
Object.isExtensible(obj)

*/

"use strict";
const obj = {
  a: 1,
};

Object.preventExtensions(obj); // it will protect obj to create new Property/Key we just modifie existing Key

obj.a = 10; // modifie a:1 to a:10
console.log(obj); // gives { a : 10 }
delete obj.a; // delete 'a'
console.log(obj); // gives {}
obj.b = 1; // it gives error bcs of Object.preventExtensions(obj); error is 'Cannot add property b, object is not extensible'

//-----------Sealing-----------
/**
 * It do all that Preventing property do
 * it mark all existing property as non-configurable so we cant delet existing prop.
 * Values of present properties can still be changed as long as they are writable.
 * In short, it prevents adding and/or removing properties.
 */

const obj = {
  id: 42,
};

Object.seal(obj);

delete obj.id;
// (does not work)

obj.name = "Arfat";
// (does not work)

console.log(obj);
// => { id: 42 }

Object.isExtensible(obj);
// => false

Object.isSealed(obj);
//=> true

//-----------Freeze--------
/**
 * freeze is the maximum protection any object can have in JavaScript. It —
 * -seals the object using Object.seal
 * -It also prevents modifying any existing properties at all.
 * -It also prevents the descriptors from being changed as the object is already sealed.
 *
 */

const obj = {
  id: 42,
};

Object.freeze(obj);

delete obj.id;
// does not work)

obj.name = "mehul";
// (does not work)

console.log(obj);
//{id : 42 }

object.isExtensible(obj);
//false

Object.isSealed(obj);
// true

Object.isFrozen(obj);
// true

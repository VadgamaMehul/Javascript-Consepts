/**Accessor have 2 value [[get]] and [[set]]
 * By defualt both are undefine
 * if get has some value then set is undefine and vise versa
 * aslso [[Enumerable]] and [[Configurable]] are property of accessor if these are true then we can
 * Enumerable and delet and change the property and if false then opposite happens
 */

/**How to set/modify accessor property? */
'use strict'
const obj = {};

// when we add new property like this e , w , c = True
obj['surname'] = 'Vadgama';
// updation + Creation 
// when we add new property like this e , w , c = false
Object.defineProperty(obj, 'name',{value : 'Mehul'}); // here we cant change name key in future it only read accesse for to make change we name to make Writeble = true
console.log(obj); //it gives empety {} but we just added name for to make visible it we have to make enumerable : true
console.log(obj.name); //it gives Mehul 
Object.defineProperty(obj, 'ID',{value : '123',enumerable : true,});
console.log(obj); // now its give { ID: '123' }
obj.name = 56; // it gives error bcs we use 'use strict' mode and also we cant write new value for name read line 16

//we also cant delet name bcz configurable = false in line 16 by defualt 
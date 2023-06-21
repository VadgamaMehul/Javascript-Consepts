'use strict';

String.prototype.key1 = 'value1';
Object.prototype.key2 = 'value2';
Array.prototype.key3 = 'value3';

const obj = {
    abc: 10,
};

for (const k in obj) {
    console.log(k);
}

/**
 * Output is:
 * abc
 * key2
 * 
 */

/**
 * Type of property
 * 1. data prop
 * 2. Internal prop
 * 3. Accessor prop
 * 
 *  const accessorObj = {
 *   get name(){
 *      return 'Mehul';
 *   },
 *   
 *   set name(value){
 *      consol.log(value);
 *   },
 * };
 * 
 * consol.log(accessorObj.name); //'Mehul'
 * accessorObj.name = 'new Mehul'
 * 
 * //here looks like accessorObj has 2 prop but get and set alog is only one property
 * get is for accessing property
 * set is for updating or settig a value of prop there is not deletion as of now
 * 
 * 
 *   const data0bj = {
 *   name:'Arfat'
 *   }
 * 
 *   consol.log(data0bj.name); 
 * 
 * 
 */

/**
 * Property attribute and descripter
 * 
 * Property attributes :are the atomic building blocks of properties.
 * property descriptor : is a data structure for working programmatically with attributes.
 * 
 * Property Attribute
 * -> Every key of an object contains a set of property attributes that define 
 * the characteristics of the value associated with the key.
 * -> They can also be thought of as meta-data describing
 * the key-value pair.
 * 
 * 
 */

const obj = {
    x:'a',
    y:'b',
}

/**
 * here x and y has 4 individual attribute prop
 * 
 * x and y has:
 * [[value]] : 'a' and 'b'
 * [[writable]] : true
 * [[Emurable]] : true
 * [[Configurable]] : true
 * 
 * these are internal prop we can modify directly 
 * 
 * Accessing Attributes Property
 * we can use:
 * object.getOwnPropertyDescriptor/s to get abow prop info
 * 
 */

//ex
Object.getOwnPropertyDescriptor(obj,'x');
/**
 * Output:
{
  value: 'a', 
  writable: true, 
  enumerable: true, 
  configurable: true 
}
 */

Object.getOwnPropertyDescriptors(obj);

/**Output:
{
  x: { value: 'a', writable: true, enumerable: true, configurable: true },
  y: { value: 'b', writable: true, enumerable: true, configurable: true }
}
 */

/**
 * A data property associates a key value with the following attributes:
 * 1.value      : it show/retrive value which we will get
 * 2.writable   : It sure that property is writable or not it means we re write the value 
 *                 if it is true we can re-write.
 * 3.enumerable : it means prop will be visible to for in loop or property will displayed or not
 * 4.configurable : if its False
 *                  - we cant delete the prop
 *                  - we cant change the prop to data prop to accessor prop and vise versa
 *                  - we cnat change attribute it self ex. if writable is false and configurable is false so we cant set writable true.
 * 
 */
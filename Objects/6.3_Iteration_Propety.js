Object.prototype.newPropertyThatIset = 99;

const obj = { // here by defualt enumerable is true
  enum: "e -true",
};

Object.defineProperty(obj, "nonEnum", {
  value: 42,
  enumerable: false,
});

//console.log(obj.enum);   //--> e -true

// console.log(obj.nonEnum);  //--> 42
//console.log(Object.keys(obj)); //--> [ 'enum' ] here only one key is visible bcs of enumerable
//console.log(Object.values(obj));  //--> [ 'e -true' ]
//console.log(Object.entries(obj));  //--> [ [ 'enum', 'e -true' ] ]

//when we use =(equal) oprater enumerablity is true by defualt

function forIn(obj) {
  let result = [];
  for (let key in obj) {
    result.push(key);
  }
  return result;
}

//! ['enum']
console.log(Object.keys(obj).length); // it gives 1 

//! ['enum','newPropertyThatIset']
console.log(forIn(obj).length); // it gives 2

//! ['enum','nunEnum']
console.log(Object.getOwnPropertyNames(obj).length); // it gives 2



/**
 * there is 4 case is there
 * 1.enumerable is true and show own properties
 * 2.enumerable is true and show all properties
 * 3.enumerable is false and show own properties
 * 4.enumerable is false and show all properties
 * 
 * // here all prop means whether it is enumerable or not
 * 
 * 1.enumerable is true and show own properties
 * -> for this we can use below funcrion:
 * -Object.keys()
 * -Object.values()
 * -Object.entries()
 * 
 * 2.enumerable is true and show all properties
 * -> for this we can use below method:
 * - for in loop
 * 
 * 3.enumerable is false and show own properties
 * -> for this we can use below method:
 * - it will only displayed property whice enumbreble is true whather it is in own property or parants
 * - by defualt parants prop is nonenum
 * -Object.getOwnPropertyNames()
 * -Object.getOwnPropertySymbols()
 * 
 * 4.enumerable is false and show all properties
 * -> for this we can use below funcrion:
 * -Coustum function
 * 
*/

function getAllPropertyNames(obj) {
  var result = [];
  while (obj) {
    // Add the own property names of 'obj' to `result`
    result = result.concat(Object.getOwnPropertyNames(obj));
    obj = Object.getPrototypeOf(obj);
  }
  return result;
}

console.log(getAllPropertyNames(obj).length); //! 14


//-------------------------------------------------------------------------------------------------------

let obj2 = {};

console.log('toString' in obj2); // true //bcz it consider allproperty(including parant/[[prototype]])
console.log(obj2.hasOwnProperty('toString')); //false



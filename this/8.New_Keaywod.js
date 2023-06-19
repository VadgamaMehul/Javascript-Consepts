//------function is executed with help of new keyword it becomes constructor func.

//-------------example 1
'use strict';
function Person(name) {
    this.name = name; //this = global
}

Person('Mehul'); //undefine 
console.log(global.name); //undefine

// const person1 = new Person('Mehul');
// console.log(person1);
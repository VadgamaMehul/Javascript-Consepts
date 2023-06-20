// this - its not staticaly bound
//cant say to just looking at This keyword work

const obj = {
  firstName: "Mehul",
  print: function () {
    console.log(this.firstName);
  },
};

setTimeout(obj.print, 100); //output = undefined
console.log(obj.print());  //output = undefined bcz this. find variable in global window


/*
The reason you are getting an undefined output is because the print method of the obj object is not returning 
a value.
In the code provided, console.log(obj.print()) is calling the print method of the obj object, which logs 
the firstName property of the object to the console using console.
log(this.firstName). However, since the print method is not returning a value explicitly, 
it implicitly returns undefined.
So, when you call console.log(obj.print()), it logs the value returned by the print method, 
which is undefined.
To fix this, you can modify the print method to return the firstName property instead of logging it 
to the console. For example:

const obj = {
  firstName: "Arfat",
  print: function () {
    return this.firstName;
  },
};

console.log(obj.print()); // Output: Arfat
In this case, calling obj.print() will return the value of the firstName property, which will be logged to the console.

*/
// Unlike other languages (such as Java), the `this` is not bound to any specific object in JavaScript

/**What is bindig :
 In JavaScript, when a function is called, the value of this inside the function is determined by the way in 
 which the function is called.This is known as the function's "execution context" or "binding".
 */

/*Default binding :-
 If a function is called with no context object, then the this keyword refers to the  global object 
 (in the browser, the window object).

 function print(){
    console.log(this.firstName); //here this. looking for fN in globol object so if FN is not in global object it will return undefine
 }
 
 

*/

function print(){
    console.log(this.firstName); //here this. looking for firstName in globol object
}

/*
 * 
 */

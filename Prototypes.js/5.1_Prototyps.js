/**
* Prototypes is used in code re-use
* ex.  if you have func. and you want to use that func. in multipla obj prototype comes into the picture
* 
* javascript is protypal language
* 1.class are not present
* 2.Not traditionally OOPS
* 3.Everything is public*
* 4.objects inherits from other objacts
* 
* What is a Prototype: its a working object instance.
* 
* there are two prototypes on func.
* 1.object which present in function
* 2.Property which is refer to one obj which is perent to current obj
* 
* Every object is born referencing to a prototype object(parent) by a secret property [[Prototype]] or _proto_.
* Even whgn you don't specify the prototype, a default
* prototype is set for every object.
* 
* 
*/


const obj = {};

console.log(obj.toString); // it gives 'function' not gives undefine bcs of delegation

/**
 * Prototype Chain:
 * 
 * The prototype relationship between two objects is about inheritance.
 * - An object specifies its prototype via the internal property [[Prototype]]
 * - Every object has this property, but it can be null.
 * - The chain of objects connected by the [[Prototype]] property is called the prototype chain.
 * 
 * 
 * Create, Update, Delete a property 
 * 
 * When you do changes to a property of an object, it always affect the current object only.
 * If the property doesn't exist, property is added to the object.
 * It won't look up to the prototype chain.
 * 
 */

const obj1 = {};

console.log(obj1.toString);

obj1.toString = null; // it gets null only in obj1 and not effect parent obj

console.log(obj1); // u can check with this--it gives { toString: null }--This is called "shadowing" the property.

/****************************************Simple Example Of Prototype*****************************************/
console.log("---------------------------------------------------------------------------------------------");

/**
 * In JavaScript, a prototype is a mechanism that allows objects to inherit properties and methods 
 * from other objects. Every object in JavaScript has a prototype, which is an object that it "inherits" 
 * properties and methods from.
 * 
 * To understand this concept with a real-world example, let's consider the concept of a car. 
 * A car can be thought of as an object with certain properties (such as color, model, make, year) 
 * and certain methods (such as start, stop, accelerate, decelerate). 
 * Now, let's say we want to create a new car object. 
 * We can create a prototype object with the common properties and methods of all cars, 
 * and then use that prototype to create a new car object with its own unique properties.
 * 
 * Here's an example of how this might look in JavaScript code:
*/
// Define a Car prototype
const CarPrototype = {
  start: function() {
    console.log("The car is starting...");
  },
  stop: function() {
    console.log("The car is stopping...");
  },
  accelerate: function() {
    console.log("The car is accelerating...");
  },
  decelerate: function() {
    console.log("The car is decelerating...");
  }
};

// Create a new car object using the Car prototype
const myCar = Object.create(CarPrototype);
myCar.color = "blue";
myCar.model = "sedan";
myCar.make = "Toyota";
myCar.year = 2022;

console.log(Reflect.getPrototypeOf(myCar)); // it will give property of parent obj or u can say prototyped obj
/* output of above line is: 
{
  start: [Function: start],
  stop: [Function: stop],
  accelerate: [Function: accelerate],
  decelerate: [Function: decelerate]
}
*/


// Call methods on the new car object
myCar.start(); // "The car is starting..."
myCar.accelerate(); // "The car is accelerating..."
/**
 * In this example, we define a CarPrototype object that contains common properties and methods of all cars. 
 * Then, we create a new car object named myCar using the Object.create() method and passing in 
 * the CarPrototype object as the argument. We then add unique properties to the 
 * myCar object (such as color, model, make, and year). 
 * Finally, we call methods on the myCar object to demonstrate how it can inherit the start and 
 * accelerate methods from the CarPrototype object.
 * 
 * By using prototypes, we can create new objects that inherit properties and methods from existing objects, 
 * which can make our code more efficient and easier to maintain.
 * 
*/
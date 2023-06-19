//Example 1
/*
var person = {
  name: "Alice",
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.sayHello(); // Output: Hello, my name is Alice
*/

/*
//Example 2
global.a = "mehul";

function foo() {
  console.log(this === global);
  console.log(this.a);
}

const obj = {
  a: 2,
  print: foo,
};

foo(); // it will give 'mehul' as defualt binding
obj.print(); // it will give 2 as implicit binding

//-----implicit lost-----//

const bar = obj.print;
bar(); //it will give 'mehul' bcs bar is take refrence of print and when it will take ref. it will become global obj
setTimeout(obj.print, 1000); //it will give undefine

/*  Pitfalls
Losing this When Extracting a Method
var counter = {
     count: 0,
     inc: function ( ) {
        this.count++;
     }
   };

-We have called the value of counter.inc as a
 function.
-Hence, this is the global object and we have
 performed window.count++.
-window.count does not exist and is undefined.
-Applying the ++ operator to it sets it to NaN.
-Use strict mode for avoiding this.

 * 
 */

/* ------Arrow func------
() => {....} // no parameter
x= {.....} // one parameter, an identifier
(x,y)={...} // several parameters

  

Specifying a body:

x => { return x * x} // block
x => {x * x}
*/

var obj1 = {
  firstName: "Jane",
  friends: ["Tarzan", "Cheeta"],
  loop: function () {
    //--here--  this==obj
    this.friends.forEach(function (friend) {
    //--here--- this==global for solve this we can use that = this or we can use bind()
    console.log(this.firstName + " knows " + friend);
    });
  },
};

console.log(" ");
obj1.loop();


//----solution 1-----//
//use----that = this ----//

var obj1 = {
  firstName: "Jane",
  friends: ["Tarzan", "Cheeta"],
  loop: function () {
    //--here--  this==obj
    var that = this;
    this.friends.forEach(function (friend) {
    //--here--- this==global for solve this we can use that = this or we can use bind()
    // console.log(this.firstName + " knows " + friend);
      console.log(that.firstName + " knows " + friend);
    });
  },
};

console.log(" ");
obj1.loop();

//----solution 2-----//
//use----bind() ----//

var obj1 = {
  firstName: "Jane",
  friends: ["Tarzan", "Cheeta"],
  loop: function () {
    //--here--  this==obj
    this.friends.forEach(function (friend) {
    //--here--- this==global for solve this we can use that = this or we can use bind()
    console.log(this.firstName + " knows " + friend);
    }.bind(this));
  },
};

console.log(" ");
obj1.loop();

//----solution 3 -----//
//use----this as second perameter ----//

var obj1 = {
  firstName: "Jane",
  friends: ["Tarzan", "Cheeta"],
  loop: function () {
    //--here--  this==obj
    this.friends.forEach(function (friend) {
    //--here--- this==global for solve this we can use that = this or we can use bind()
    console.log(this.firstName + " knows " + friend);
    }, this);
  },
};

console.log(" ");
obj1.loop();

//----solution 3 -----//
//use---- Arrow func ----//

var obj1 = {
  firstName: "Jane",
  friends: ["Tarzan", "Cheeta"],
  loop: function () {
    //--here--  this==obj
    this.friends.forEach((friend) => {
    // console.log(this);
    //--here--- this==global for solve this we can use that = this or we can use bind()
    console.log(this.firstName + " knows " + friend);
    });
  },
};

console.log(" ");
obj1.loop();
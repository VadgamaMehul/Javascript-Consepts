/**
 * @description
 * Why learn about closures?

Fundamental Concept of JS

POne of the most common type of question
in JS Interviews

*Heavily used in React while creating
components

*Similar concepts exists in other popular
languages such as Python
 */

//----Example 1-----------------------------------------------------------------------------------------------//
function a() {
  var x = 5;
  let y = () => {
    console.log(x);
  };
  return y;
}

var x = 10;
var b = a();
b();

//------Example 2----------------------------------------------------------------------------------------//

let myName = "Mehul";

function scope() {
  let valOfScope = 1;
  return function innerScope() {
    let valOfInnerscope = 2;
    console.log(`${valOfScope} and ${valOfInnerscope}`);
  };
}

//console.log(scope());
const innerfn = scope();
innerfn();

//------Example 3----------------------------------------------------------------------------------------//
console.log(
  "------Example 3-----------------------------------------------------------------------------"
);
/** 
 * 
function outer() {
  var b = 10;
  function inner() {
    
    var a = 20; 
    console.log(a+b);
  }
  return inner;
}
var X = outer(); 
var Y = outer(); 
//end of outer() function executions
X(); // X() invoked the first time
X(); // X() invoked the second time
X(); // X() invoked the third time
Y(); // Y() invoked the first time

*/
//------Example 4----------------------------------------------------------------------------------------//
console.log(
  "------Example 4-----------------------------------------------------------------------------"
);

function outer() {
  var b = 10;
  var c = 100;
  function inner() {
    var a = 20;
    console.log("a= " + a + " b= " + b);
    a++;
    b++;
  }
  return inner;
}
var X = outer(); // outer() invoked the first time
var Y = outer(); // outer() invoked the second time
//end of outer() function executions
X(); // X() invoked the first time
X(); // X() invoked the second time
X(); // X() invoked the third time
Y(); // Y() invoked the first time

/*here a is not incremen every time bcs X = inner() and when after executing one time 
  'a' no longer exist, so when again X() call a value is again inicialize to 20 
  but in the other hand 'b' is on outer scope so as per closuer b is bound to the inner()
  and when increment do value of B is getting incremented  
      
      */

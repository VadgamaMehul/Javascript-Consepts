/**
 * Proxy invariants
 * 
 * - explain proxy invariants using a real-life example!

Imagine that you are a manager at a company, and you have several employees who are responsible for handling 
sensitive customer data. You want to make sure that this data is kept secure and cannot be accessed or modified
by unauthorized parties.

To enforce this, you might create a set of rules or invariants for your employees to follow. For example, 
you might require them to log in to a secure system before accessing the data, or you might restrict their 
access to certain parts of the data based on their job responsibilities.

In JavaScript, proxy invariants are similar to these rules or constraints. They allow you to define specific 
behaviors for a proxy object that must be followed in order to ensure that the object behaves as expected.

For example, you might create a proxy object that represents your sensitive customer data, and define a proxy 
invariant that requires the user to log in to a secure system before accessing the data. This would help 
prevent unauthorized access to the data and ensure that it is kept secure.

Another example of a proxy invariant might be to automatically encrypt or decrypt certain properties on 
the proxy object whenever they are accessed or modified. This would help protect the data from being 
intercepted or modified by malicious parties.

Overall, proxy invariants are a powerful tool that can help enforce specific behaviors and constraints in your 
JavaScript code, much like the rules and constraints that managers might use to ensure the security and 
integrity of sensitive data in real-life scenarios.

ex.


*/
//------------------------------1.example of proxy use case : invarints----------
/**
 * 
const a = {};
Object.defineProperty(a, "name", {
    writable: false,
    configurable: false,
  value: "Mehul",
});

let b = new Proxy(a, {
    // get(target,KeyName){
        //     console.log(`key ${KeyName} and its value is: ${target[KeyName]}`);
        //     return target[KeyName];
  // }
  get() {
      return 123;
    },
});

b.name;
*/


// reccieve this error
// 'get' on proxy: property 'name' is a read-only and non-configurable data property on the proxy target but
// the proxy did not return its actual value (expected 'Mehul' but got '123')

//--------------------------2.example of proxy use case : TypeChecking -------------------------------------

const obj = {};
Object.defineProperty(obj, "name", {
  writable: false,
  configurable: false,
  value: "Mehul",
});

const Pro1 = new Proxy(obj, {
  get(target, key) {
    if (key in target) {
      return target[key];
    }
    throw new Error('The Key is not Found');
  },
});

console.log(Pro1.name); //! Mehul
console.log(Pro1.abc); // Error: The Key is not Found
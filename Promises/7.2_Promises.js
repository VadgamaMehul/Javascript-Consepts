/**
 * Its solve bigger problem of Callbacks 
 * 
 * @Promis
 * In JavaScript, a Promise is an object that represents a value that might not be available yet 
 * but will be resolved at some point in the future. Promises are commonly used to handle asynchronous 
 * operations such as fetching data from a server, reading files, or making API calls.
 * 
 * @example
 * A real-life scenario could be when you order a pizza online. You make the order and the restaurant promises
 * to deliver the pizza to your doorstep within 30 minutes. You don't know exactly when the pizza will arrive,
 * but you trust that the restaurant will fulfill their promise.
 * 
 * In JavaScript, you can create a Promise using the `Promise` constructor. 
 * -The constructor takes a function with two arguments/state: `resolve` and `reject`. And by defual its pendig state
 * -The `resolve` function is called when the Promise is fulfilled, and 
 * -the reject function is called when the Promise is rejected.
 * -Promise is  settled exaclty once and then remains unchanged.
 * 
 * 
 * @consuming_Promise
 * consuming a Promise means using the data that was resolved by the Promise or handling any errors 
 * that were rejected by the Promise.
 * 
 * Consuming a Promise typically involves using the `then()` method and/or the `catch()` method to handle 
 * the results of the Promise. 
 * -The  `then()` method takes one or two arguments: a callback function to handle the resolved value of 
 *  the Promise, and an optional callback function to handle any errors. 
 * -The `catch()` method takes one argument: a callback function to handle any errors that were rejected 
 *  by the Promise.
 * 
 * @then
 * ->it never called untill promise is setteled
 * ->.then always return Promise
 * ->so we can do chaining
 * ->Promise.prototype.then(agrue1 , argue2)
 * -argue1 : onfulfilled
 * -argue2 : onReject
 * -  
 * p.then(
 *   //onfulfilled
 *   (val) => console.log(`val - ${val}`), 
 *   //onReject
 *   (val) => console.error(`error - ${val}`) 
 * );
 * 
 * The .then is executed only after a promise is resolved.
 * 
 * @catch
 * -If promise is rejected the nearest `.catch` is called.
 * -the `.catch` itself returen a fulfilled promise by default, so you can continue changing
 * 
 * @finally
 * -Its always be called
 * -When Promise is reject or resolve then after finally called
 * -We can also define finally like this too = .then(finally,finally)
 * ex.
 * .then(
 *  () => console.log('finally'),
 *  () => console.log('finally'),
 * );
 * 
 * 
 * 
 * 
 */

//-----.then-example-------

const p = new Promise(function (resolve,reject){
    resolve(30);
    reject(40);
});

p
.then((val) => console.log(`val - ${val}`))
.catch((val) => console.error(`error - ${val}`))
.finally(() =>console.log("Finally"));


//
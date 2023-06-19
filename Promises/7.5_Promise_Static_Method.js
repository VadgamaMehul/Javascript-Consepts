//-----------Promise.resoleve()-------------

/**
 * There are 3 mejor semantic bahaviors of resolve
 * 
 * -For most value x,it returns a promise that is fulfilled with x:
 * ex.
 * Promise.resolve('abc')
 * .then(x => console.log(x)); // x = abc
 * 
 *@static_Promise_Methods
 * ->Promise.resolve(value): This method returns a new Promise that resolves with the given value. 
 *   If the value is a Promise, the returned Promise adopts the state of that Promise.
 * 
 * ->Promise.reject(reason): This method returns a new Promise that rejects with the given reason.
 * 
 * -> `Promise.resolve(value)` is a static method of the Promise object that returns a new Promise object 
 * that is resolved with the given value. If the value is a Promise object itself, the returned Promise 
 * object will adopt the state of the Promise that was passed as the value.
 * 
 * `Promise.reject(reason)` is another static method of the Promise object that returns a new Promise object 
 * that is rejected with the given reason. The reason can be any value, but it's typically an Error object
 * or a string that describes the reason for the rejection.
 * 
 */
/**
 * `Promise.all(iterable)`: 
 * -This method takes an iterable(array) of Promises and returns a new Promise that resolves to an array 
 *  of the resolved values of all the Promises in the iterable, in the order in which they were passed. 
 * -If any of the Promises in the iterable reject, the returned Promise immediately rejects with 
 *  the reason of the first rejected Promise.
 * 
 * Promise.race(iterable): 
 * This method takes an iterable of Promises and returns a new Promise that resolves or rejects as soon 
 * as any of the Promises in the iterable resolve or reject, with the value or reason of the first resolved 
 * or rejected Promise.
 * 
 * Promise.allSettled(iterable): 
 * This method takes an iterable of Promises and returns a new Promise that resolves to an array of objects 
 * representing the fulfillment status of each Promise in the iterable. Each object has a `status` property 
 * that is either "fulfilled" or "rejected", and a `value`or `reason` property that contains the fulfillment 
 * value or rejection reason of the corresponding Promise.
 * 
 * Promise.any
 * -it gives you signal as soon as one of the promises fulfills.
 * -it is similar to Promise.race 
 * -except any doesnt reject early when one of the promises rejects
 * 
 */



/*******************Promise.all(iterable)******************/

function sleep(ms,value) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(value)
    }, ms);});    
}

Promise.all([sleep(3000, 'a'), sleep(2000 , 'b'), sleep(3500 , 'c')])
.then(console.log); //with out reject and it will take 3.5 sec

Promise.all([sleep(3000, 'a'), Promise.reject('reject') , sleep(3500 , 'c')])
.then(console.log)
.catch(console.log); //with reject / it will throw reject immidetly 



/*******************Promise.race(iterable)******************/

Promise.race([sleep(3000, 'a'), sleep(2000 , 'b'), sleep(3500 , 'c'), Promise.reject('reject')])
.then(console.log).catch(console.log);  //!reject / it will throw reject immidetly

Promise.race([sleep(3000, 'a'), sleep(2000 , 'b'), sleep(3500 , 'c')])
.then(console.log).catch(console.log);  //! b - bcz it solve erly



/*******************Promise.allSettled(iterable)******************/

Promise.allSettled([sleep(3000, 'a'), sleep(2000 , 'b'), sleep(3500 , 'c'),Promise.reject('reject')])
.then(console.log);  //! b bcs here b resolve very first


/*******************Promise.any(iterable)******************/

Promise.any([sleep(3000, 'a'), sleep(2000 , 'b'), sleep(3500 , 'c'),Promise.reject('reject')])
.then(console.log);  //! b bcs here b resolve very first and it 
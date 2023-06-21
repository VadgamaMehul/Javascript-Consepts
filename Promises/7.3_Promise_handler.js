/**
 * you can attach handler to sattled promise later
 * 
*/

// * 1.immediately attach handler
// * ex.
const p = new Promise((resolve)=>
setTimeout(()=>console.log('done'),1000)
).then(console.log);

//2. attach handler later

p.then(console.log);

//Problem code


let a = new Promise((resolve,reject)=>{
    resolve(10);
    resolve(20);
}).then(val=>console.log(val));
//it gives 10 bcz once promise is resolve in first time it cant go further and give resulte of that promise


let a = new Promise((resolve,reject)=>{
    reject(10);
    reject(20);
}).catch(val=>console.log(val));
//it gives 10 bcz once promise is reject in first time it wont go further and give resulte/error of that promise


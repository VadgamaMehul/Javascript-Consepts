/**
 * java is single threded
 * 
 * In JavaScript, a callback is simply a function that gets passed as an argument to another function 
 * and gets executed later on.
 * 
 * when we use sertain functions like set time out and readfile(which are known as callBacks) the javascrip exectute it to last
 * its bcs of asncronys behavior of Js
 */

console.log("--------------Pogramme 1------------");
//---------example 1----------------

console.log("start");
setTimeout(()=>{console.log("middel");} , 0);
console.log('end');

// it gives below output
/**
 * start
 * end
 * middel
*/
//Here even timer is 0 it not comes middel 
// bcs when timer is running other excutions runnig parallaly and give out put first

console.log("--------------Pogramme 2------------");
//----------Example 2-------------
const fs = require('fs');
console.log("Start");
fs.readFile(__filename,(err,data) => {
    console.log(`data - ${data}`);
});
console.log("End");
/**
 * What is a debounce function?
 * Debounce function limits the execution of a function call and waits for a certain amount of 
 * time before running it again.
 */

const debounce = require('lodash/debounce');
//------------------with out using this keyword--------------------
// let user = {
//     name : 'Mehul',
//     printName(para){
//         console.log(para);
//     },
// };

// const debounced = debounce(user.printName, 1000); // syntex = debounce(func.call, time);

// for(let i=0;i<1000;i++){
//     debounced(i); // it will give only 999 
// }

//-----------------usnig this keyword
'use strict';
let user = {
    name : 'Mehul',
    printName(number){
        console.log(`${number} and ${this.name}`);
    },
};

const debounced = debounce(user.printName, 1000); // syntex = debounce(func.call, time);

for(let i=0;i<1000;i++){
    debounced(); // it will give undefine bcs this is bound to the global
}
for(let i=0;i<1000;i++){
    debounced.call(user,i); // it will give 999 and mehul
}
/**
 * Iteration = iterate key from obj like iterate arry value from array
 * 
 * in array we can use normal for loop to iterate array value
 * ex.
 * for(i=0; i<array.lenght ; i++){
 *  console.log(array[i]);
 * }
 * 
 * but for objacts we cant use normal for loop just like we did above
 * 
 * insted of using normal for loop we uses **'for in loop'**
 * 
 */

let parent = {
    father : 'papa'
};

let obj = {
    name : 'mehul',
    id : '18EL004',
    num : 12345,
    [Symbol()] : 23
};

Object.setPrototypeOf(obj,parent);

for( let key in obj){
    const value = obj[key];
    console.log(key,value); // it give 'name:mehul, id:18el004, num:12345, father:papa' // cant give symbol
}

//but for in is not recommeded to use bcs it also can access parent key too
// also order of key is not fix below ES6 vertion 


//---------------Object method--------------
console.log("--------------------------------------------------------------------");
let obj1 = {
    name : 'mehul',
    id : '18EL004',
    num : 12345,
    [Symbol()] : 23
};

const keys = Object.keys(obj1); //object method its does not give parents key so recommeded
const values = Object.values(obj1); //object method its does not give parents key so recommeded
const enteris = Object.entries(obj1); //object method its does not give parents key so recommeded

console.log(keys); // give [ 'name', 'id', 'num' ]
console.log(values); // give [ 'mehul', '18EL004', 12345 ]
console.log(enteris); // give [ [ 'name', 'mehul' ], [ 'id', '18EL004' ], [ 'num', 12345 ] ]

console.log(Reflect.ownKeys(obj1)); //give [ 'name', 'id', 'num', Symbol() ] it give all keys
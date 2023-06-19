/**
 * any function which called with 'new' keyword is const. fn.
 * it create object
 * 
 * 
 */

//---------------------------------------------------------------------------------------------------------------------------
console.log("-------------Pogramme 1------------");

function c(){
    this.a = 34;
}

function c2(){
    this.a = 34;
    return { a: 23}
}
console.log(c()); // it will give undefine
console.log(new c()); // it will give obj which has property a : 34
console.log(new c2()); // it will give obj which has property a : 34

//-----------------------------------------------------------------------------------------------------------------
console.log("-------------Pogramme 2------------");

//if we returen obj then func. return obj which is return by returen keyword
//if we returen not obj like 'returen 23' it will retuern this.age and this.name
// its called overriding of objects
function Person(name, age) {
    //this = {}
    //Object.setPrototypeOf(this, Person.prototype)
    this.age = age;
    this.name = name;
    return {name : 'mehul'}; 
}

console.log(new Person('mehul', 12)); // it will give { name : 'mehul'}

function Person1(name, age) {
    //this = {}
    //Object.setPrototypeOf(this, Person.prototype)
    this.age = age;
    this.name = name;
    return 23; 
}

console.log(new Person1('mehul', 12));

//------------------------------------------------------------------------------------------------------------------

console.log("-------------Pogramme 3------------");


function Person3(name, age) {
    //this = {}
    //Object.setPrototypeOf(this, Person.prototype)
    this.age = age;
    this.name = name;
}

Person3.prototype.printName = function(){
    console.log(this.name.toUpperCase());
}

const p1 = new Person3('a',12);
const p2 = new Person3('b',12);

p1.printName();
p2.printName();
console.log(Object.getPrototypeOf(p1)===Person3.prototype);

// here Person3 and p1 and p2 Prototyped to the one common prototype obj which is not visible in code
// so if we modifie Person3 add or modifie any property it can accessible by p1 and p2

//------------------------------------------------------------------------------------------------------------------

console.log("-------------Pogramme 4------------");

// with out using new keyword we cant create obj using constroctor fn.
// if we use obj with out using new key and call constrotor func direct like Person('Mehul',12)
// then it will find 'name' and 'age' in global window so it better to use New keyword
// also to prevent this global search we can use several tricks which is below
// 1.'use strick'
// 2.new.target

console.log("--------------problem--------------");

function Person4(name, age) {
    this.age = age;
    this.name = name;
}

console.log(Person4('Mehul',12));  // gives undefine and set name=mehul and age=12 globaly
console.log(global.name,global.age); // it gives Mehul 12

console.log("--------------solution--------------");
//to prevent above problem we can use 'use strict'
function Person5(name, age) {
    //1
    //'use strict' wwe can use this
    //2
    /*if(!new.target){
        throw new Error('should use new')
    }*/
    //3
    if(!(this instanceof Person5)){
        throw new Error('should use new')
    }
    this.age = age;
    this.name = name;
}
Person5('Mehul',12)
console.log(Person5('Mehul',12));  // gives undefine and set name=mehul and age=12 globaly
console.log(global.name,global.age); // it gives Mehul 12
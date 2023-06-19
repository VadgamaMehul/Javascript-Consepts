/**
 * A JavaScript Proxy is an object that wraps another object (target) and intercepts the fundamental 
 * operations of the target object.
 * 
 * 
 * Creating a proxy object:
 * At most basic, you can use the following syntax to create a Proxy.
 * -proxy : Create using the proxy constructor.
 * -it accepts two parameters : target  and handler 
 * 
 *      let proxy = new Proxy(target, handler);
 * 
 * -target : its a objact in which proxy wrap
 * -hadler : its a set of trap. using it we can modifie target object also we can do read write op in traget 
 * -trap : it is a methods which is intercepting an operation on target ex. get(),set(),delet etc...
 * 
 */




//-----------------Example of proxy where handeler is empty--------------------

let targetObj = {
    name : 'mehul',
    id : 123,
    subject : 'Javascript'
}

let handler = {

}

//creating proxy
let pro = new Proxy(targetObj,handler);
// here we can get name value using proxy
console.log(pro.name);   //! mehul

console.log('--------------------------------------------------');
//-----------------Example of proxy where handeler isnt empty--------------------

let targetObj1 = {
    name : 'mehul',
    id : 123,
    subject : 'Javascript'
}

let handler1 = {
    get(){
        console.log("get trap was called");
        return 'i am get'
    }
}

//creating proxy
let pro1 = new Proxy(targetObj1,handler1);
// here we can get name value using proxy
console.log(pro1.name);   // now here name value is not come as mehul but its come as below bcz now name is accessing via get() method using proxy 
/* output
get trap was called
i am get
*/

console.log('--------------------------------------------------');
//-----------------Example of proxy where handeler isnt empty--------------------

let targetObj2 = {
    name : 'mehul',
    id : 123,
    subject : 'Javascript'
}

let handler2 = {
    get(target,keyName){
        console.log(`get trap was called with ${keyName}`);
        return target[keyName]
    }
}

//creating proxy
let pro2 = new Proxy(targetObj2,handler2);
// here we can get name value using proxy
console.log(pro2.name);   // now here name value is not come as mehul but its come as below bcz now name is accessing via get() method using proxy 
/* output
get trap was called with name
mehul
*/
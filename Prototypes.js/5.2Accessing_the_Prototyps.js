/*in this we learn how to read,write,create and delete the prototype
 * Technicly not possible to delete prototype but we can set it as null so Obj become prototype less.
 *
 * this all property for set obj as parent to currenty obj(child)
 * 
 *->Accessing the prototype 
 * 1)Object.getPrototypeOf()
 * 1. Object.setPrototypeOf(child_obj,Parant_obj); it will set parant_obj as prototyped
 * 2. child.__proto__ = parent; // not recommended
 * 3. var child = Object.create(parent); 
 * 
 * 
 * 
 * 
 * 
 * 
 */
console.log("----------------Programme 1--------------------");
const parent = {
    getnum(){
        return 23;
    },
};

const child = {};

//console.log(child.getnum());
// if we call directly child.getnum() it will give error so preventing it we have to set parent obj as prototype
// of child obj

// prperty 1. from above list
Object.setPrototypeOf(child,parent); //we can use parent = null so its will not access global property like toString

//Deleting the prototype (we cant delete prototype we can do just set it as null so it becomes prototype less)
//Object.setPrototypeOf(child,Null); // it makes child obj prototype less/parant less ex. it gives error when we execute "console.log(child.toString));" this line


console.log(child.getnum());

/*
* we can also 





console.log("----------------Programme 2--------------------");
/**
 * This all property is for get property from parent obj
 * 
 * 1.Object.create(object_name);  //it will make 'object_name' object prototype for other(its child) obj 
 * 2.object.getPrototyoeOf(target); // it will returen property of parents/prototyped obj
 * 3.Reflect.getPrototyoeOf(target); // it will returen property of parents/prototyped obj
 * 4.Parent_obj.isPrototypeof(child_obj) // it will give true and false accordingly
 * 
 */

var prototype1 = {};

const object1 = Object.create(prototype1);
console.log(object1);

console.log(Object.getPrototypeOf(object1)===prototype1);


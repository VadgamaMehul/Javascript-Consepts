/**
 * Delegation (of Properties)

© Reading a property in JS is not a
simple operation.

© InJS, objects are not just containers
of key-value pairs.

© They have one more very interesting
property. They can have a parent.

© This parent object is also consulted
when a property is read. ,

© That parent can also have a parent.

© And that grandparent object is
consulted too when a property is
read.

The [[Prototype]] property keeps this reference to HE,
parent object.

It's an internal property which means that we can't
access it directly.

An important point to note is that the prototype chain
is consulted only while reading a value.

It does not affect addition, updating or deletion of
properties on parent objects.

We only have read access to parents and read and write access to self
 * 
 * 
 * 
 */

/**
 * Existence

Sometimes we don't care what value a property has. We ,
only want to know whether the given object has the
given property or not.

There are 2 ways to know that —

© in operator - this check/read property on self scope and all parent scope
© hasOwnProperty - this check/read property on self scope only;
 * 
 * 
 */

//-----example

let obj = {
    name : 'mehul'
};

console.log(obj.name);

//------exaxmple of In operator
console.log('firstname' in obj); // it give false bcs it not present in obj
console.log('name' in obj); // it give true bcs it present in obj
console.log('toString' in obj); // it give true bcs it present in parent(global obj) of obj


//------exaxmple of hasOwnProperty operator - only check in self scope

console.log(obj.hasOwnProperty('fristname')); // it give false bcs it not present in obj
console.log(obj.hasOwnProperty('name')); // it give true bcs it present in obj
console.log(obj.hasOwnProperty('toString')); // it give false bcs it not in obj

/**
 * Its very similar to Iterators
 * 
 * Generators :
 * -generator is a special kind of function that allows you to pause and resume its execution at any point.
 * -It is a function that Produces a sequence of results insted of a single value
 * -we have to put * in fuction to make it generator
 * -callig a gen. fun. create gen. obj
 * -now func. become obj 
 * 
 * -Generator is simply function which return Object on which you can call 'next()' such that for every 
 *  call it return some value, done becomes false.  
 * 
 * -Gene. func. make lazy evalution possible ex. if you need only 3/4 no. of natule num you can generate it manually
 * -its good for calculating large sets of results where you dont know if you are gonna need all results.
 * -
 * 
 */


//----------Example of Gene.-----------
console.log("--------------------------------------------");

function Gen1(){
    return 5;
}

console.log(Gen1()); //! 5       /noraml function

//------------------------------------------------------------------------------------------------------
console.log("--------------------------------------------");

function* Gen2(){
    return 5;
}

console.log(Gen2()); //! Object [Generator] {}    /Generator func.

//----------More Example of Gene.-----------
console.log("--------------------------------------------");

function* Gen3(){
    console.log('Started');
    yield 5;
    console.log('after 5');
    yield 10;
    console.log('after 10');
    yield 15;
    console.log('after 15');
    yield 20;
    console.log('after 20');
    return 5;
}


const iter = Gen3();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/**
 * Started
{ value: 5, done: false }
after 5
{ value: 10, done: false }
after 10
{ value: 15, done: false }
after 15
{ value: 20, done: false }
after 20
{ value: 5, done: true }
*/

//other way to iterate gen. using for-of loop

for(const el of iter){
    console.log(el);
}

/*
Started
5
after 5
10
after 10
15
after 15
20
after 20
*/


//---------------------------------------------------------------------------------------------------------
console.log('-------------------Generate natural num------------------------');
function* Naturalnum(num){
    
    while(num!=0){
        yield num;
        num--;
    }
}

let iterator = Naturalnum(4);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


/**
 * Diff b/w
 * Generator vs Iterator
 * 1.Generator function is slightly diff than an object that support iteration
 * 
 * 2.Gen. is one time operation. you can iterate over the gen. data once,but if you want to do it again
 *   you have to call gen. function again
 * 
 * 3.this is diff from list in which you can iterate as many time you want to do
 * ex.
 function* Naturalnum() {
     let num = 1;
     while (true) {
       // console.log(num);
       yield num;
       num = num + 1;
     }
   }
   
   function* take(n, iterable) {
     for (const x of iterable) {
       // console.log("take loop");
       if (n <= 0) return;
       n--;
       yield x;
     }
   }
   
   let a = take(10, Naturalnum());
   
   for (const el of a) {
     console.log(el);
   }
   
   console.log("Second loop");
   for (const el of a) {
     console.log(el);
   }
 *  
 * 
 * 
 * 
 */

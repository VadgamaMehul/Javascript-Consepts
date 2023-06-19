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
{ value: undefined, done: true }
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
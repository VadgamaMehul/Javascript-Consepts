function* gen(){
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result'
}


let a = gen();
// console.log(a);
//---------------.next() use------------------------

// a.next('abc');  //! gen started it not take any value bcz its gen starter 
// a.next('abc1'); //! 1.abc1   
// a.next('abc2'); //! 1.abc2
// a.next('abc2'); // not give any output bcz gen is 


//----------------.return() use-------------------------

// a.next();           //! gen started it not take any value bcz its gen starter 
// a.next('abc');      //! 1.abc1
// console.log(a.return('This return'));  //its suspend exection of gen where last yield execute and retrun value and status become done
// console.log(a.next('abc2')); //{ value: undefined, done: true }


//-----------------.throw() use--------------------------


// a.next();           //! gen started it not take any value bcz its gen starter 
// a.next('abc');      //! 1.abc1
// console.log(a.throw(new Error ('Error'))); // it gives Error
// console.log(a.next('abc2')); //never execute

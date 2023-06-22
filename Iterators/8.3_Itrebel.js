/**
 * @iterators 
 * An iterable is an object that has an Symbol.iterator method which returns an iterator.
 * Iterators are objects with next() defined. 
 * They return the next value in the iteration remember the state during iteration.
 * update the state to point at the next value signal when it is done when done is true.
 * 
 * @iterable
 * its use for travecing data:;
 * an iterable is data struc which is use to make element accessible to the public
 * it does it with method Symbol.iterator
 * -Following values are iterable:
 * Array,String,Maps,Sets,DOM Data
*/

//empty object is not iterable

//one way iterable is inside iterator
//in this way we cant continue where we breaked;

let a = {
  //!iterable
  [Symbol.iterator]() {  // emplement '[Symbol.iterator]()' method
    let i = 0;
    return { 
      // iteratir            //define another obj which has one method next()
       next() {
        return { value: i++, done: i > 10 }; //return obj which has 2 keys value: and done: 
      },
    };
  },
};

// for (const el of a) {
//   console.log(el);
// }

//Other way to write above example
// in this way we can continue where we breaked

let b = {
  count : 0,
  [Symbol.iterator](){
    return this;
  },
  next(){
    return { value : this.count++, done: this.count>10 }
  }
}

//Using iterator we can break loop whenever we want and we can continue were we break
//Like below example

for (const el of b) {
  console.log(el);
  if(el>5)
  break ;
}

console.log("after break");

for (const el of b) {
  console.log(el);
}

/**
 * Output:
0
1
2
3
4
5
6
after break
7
8
9
 */



//-there is one method return()
//-it return that whatever we want to return once loop breaks and when we contienu and it stop 
// further loop
//-it use for closing file 
//ex.

let c = {
  count : 0,
  [Symbol.iterator](){
    return this;
  },
  next(){
    return { value : this.count++, done: this.count>10 }
  },
  return(){
    console.log("Return method called and Done is true")
    return {done:true}
  }
}

for (const el of c) {
  console.log(el);
  if(el>5)
  break ;
}

/** Output:
0
1
2
3
4
5
6
Return method called and Done is true
 */
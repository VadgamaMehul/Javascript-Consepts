//---------------------Range---------------------------
// for normal range function we cant print big range of num like 1million
//but we can generate range of number using genrator

function* range(uperbound) {
  for (let i = 1; i <= uperbound; i++) {
    yield i;
  }
}

let a = range(10);

let c = [];
for (let b of a) {
  c.push(b);
}
console.log(c);

/**
[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
 */


//-------------------------------------Cycle--------------------------------
console.log('----------------------------------------------------------------------');

function* Cycle(iter){
    while(true){
        for(let el of iter){
            yield el;
        }
    }
}

let i = Cycle([1,2,3]);

console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());

/**
 * { value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
 */



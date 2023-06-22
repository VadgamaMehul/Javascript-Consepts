/**
 * @iterators
 * -It are one the most fundamental consept of JS
 * -it intriduce in ES6 as an abstraction of travertion
 * -lot of things in js actully based on itretors
 * -it counter part is genretor
 * -
 * 
 * @iteration
 * -js has new looping construct in ES6, for-of
 * -for-in : it iterate for key of Obj enumerable key
 * -for-of : it iterate for value of Obj
 *           it allows any kind of structure not just list
 * 
 * ex.
 * for(const val of [1,2,3]){
 *      consol.log(val); //! 1, 2, 3
 * }
 * 
 * @iterating_over_Obj_maps_and_sets
 * -We can also iterate maps and sets using for-of
 * -ex
 * const map = new Map([
 *      [65,'a'],
 *      [66,'b'],
 *      [67,'c']
 * ]);
 * 
 * for(const[key,value] of map){
 *      consol.log(key,value)
 * }
 * 
 * //65 a
 * //66 b
 * //67 c
 * 
 */


//------------best practice to use for-of loop
const emoji = 'a😀😀😀😀😀😀b'

for(const a of emoji){
    console.log(a);
}
/**
 * Output of For-of loop
 a
😀
😀
😀
😀
😀
😀
b
 */


for (let index = 0; index < emoji.length; index++) {
    const element = emoji[index];
    console.log(element);
}

/**
 * Output of normal forloop
 a
�
�
�
�
�
�
�
�
�
�
�
�
b
 */

//destructuring of array

const [fistvalue,firstemoji,...rest] = emoji;
console.log(fistvalue,firstemoji,...rest);

//Output: a 😀 😀 😀 😀 😀 😀 b

/**
 * @iterators 
 * An iterable is an object that has an Symbol.iterator method which returns an iterator.
 * Iterators are objects with next() defined. 
 * They return the next value in the iteration remember the state during iteration.
 * update the state to point at the next value signal when it is done when done is true.
*/

const iter = emoji[Symbol.iterator]();
console.log(iter.next());   //{ value: 'a', done: false }
console.log(iter.next());   //{ value: '😀', done: false }   
console.log(iter.next());   //{ value: '😀', done: false }   
console.log(iter.next());   //{ value: '😀', done: false }   
console.log(iter.next());   //{ value: '😀', done: false }   
console.log(iter.next());   //{ value: '😀', done: false }   
console.log(iter.next());   //{ value: '😀', done: false }   
console.log(iter.next());   //{ value: 'b', done: false }   
console.log(iter.next());   //{ value: undefined, done: true }
console.log(iter.next());   //{ value: undefined, done: true }


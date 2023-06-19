/* objact is non primitive data type in JS
 * num,NaN,Boolean,Bigint,String,Syntex this are only primetive Datatypes
 *
 * Object - its a collection of property
 *
 * name of property  = key
 * value of property = value
 *
 *
 */

/** type of define obj */

//----Type 1 most common
let obj = {
  key: "values",
  name: "mehul",
  arrya: [1, 2, 3, 4],
  num: 4,
  bool: true,
  func: function user(a) {
    return a + a;
  },
};

// to access obj below type is there

console.log(obj.name); // give Mehul
console.log(obj.nonthing); // it will give undefine bcz its not exixt 
console.log(obj['key']); //give values  //and its convinent way to access obj

//----Type 2 by using constroctor which is not recommended

function student(name, rollNo, subject) {
  this.name = name;
  this.rollNo = rollNo;
  this.subject = subject;
}

let obj1 = new student("Mehul", 1234, "JavaScript");
console.log(obj1);

//----Type 3 by using Object.create
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"



//------------------------------Update Property---------------------------------------/

obj.name = 'Mehul2';
obj['key']= 'values1';
// obj.nonthing = 2;

//------------------------------deleting Property---------------------------------------/


delete obj.name
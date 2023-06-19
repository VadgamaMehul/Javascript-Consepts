Object.prototype.newPropertyThatIset = 99;

const obj = {
  enum: "e -true",
};

Object.defineProperty(obj, "nonEnum", {
  value: 42,

  enumerable: false,
});

//console.log(obj.enum);

// console.log(obj.nonEnum);

//console.log(Object.values(obj));

//console.log(Object.entries(obj));

function forIn(obj) {
  let result = [];
  for (let key in obj) {
    result.push(key);
  }

  return result;
}

console.log(Object.keys(obj).length);
console.log(forIn(obj).length);

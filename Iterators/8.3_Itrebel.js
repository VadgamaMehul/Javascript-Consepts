//empty object is not iterable

let a = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        return {value : i++ , done : i>10};
      },
    };
  },
};

for (const el of a)
{
    console.log(el);
}

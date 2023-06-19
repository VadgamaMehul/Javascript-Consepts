function fibbonachiGenerator(num) {
  let a = [];
  if (num == 1) {
    a = [0];
  } else if (num == 2) {
    a = [0, 1];
  } else {
    a = [0, 1];
    for (let b = 2; b < num; b++) {
      a.push(a[a.length - 2] + a[a.length - 1]);
    }
  }
  return a;
}

console.log(fibbonachiGenerator(5)); 

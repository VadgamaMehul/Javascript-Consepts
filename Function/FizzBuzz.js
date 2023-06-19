/* Write function that push 1 to 100 value in array but if number is multiple of 3 then push "Fizz"
*  and if no. is multiple of 5 then push "Buzz" and if no. is multiple of both 3 and 5 then push "FizzBuzz" 
*
*/


let output = [];
let a = 0;

function fizzBuzz() {
  ++a;
  if((a % 3 == 0) && (a % 5 == 0)){
    output.push("FizzBuzz");
    console.log(output);
  }
  else if (a % 3 == 0) {
    output.push("Fizz");
    console.log(output);
  }
  else if(a % 5 == 0){
    output.push("Buzz");
    console.log(output);
  }
  else{
    output.push(a);
    console.log(output);
  }
}

for(let i=0;i<100;i++){
    fizzBuzz();
}

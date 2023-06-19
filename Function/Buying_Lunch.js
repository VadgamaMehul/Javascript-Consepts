/**You are going to write a function which will select a random name from a list of names. 
 * The person selected will have to pay for everybody's food bill.
*/

let nameFriend = ['mehul','sohan','bhavya','parth','mihir','shyam'];
function whosPaying(names) {
    let a = names.length;
    let b = Math.floor(Math.random()*a);
    return (names[b] + " is going to buy lunch today!");
}

let x = whosPaying(nameFriend)
console.log(x);
/**
 * Promise chain made with .then().then().then().catch()
 *
 */

//import { delay } from "lodash";

/**
 * @example_1
 */
//------Programme 1----------
// const delay = (ms) =>
//   new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(Math.random() * 10), ms);
//   });

// console.time();
// delay(2000)
//   .then((val) => {
//     return delay(3000);
//   })
//   .then((num) => {
//     console.timeEnd();
//     console.log(num);
//     return num ** 2;
//   })
//   .then((num) => {
//     console.log(num);
//     return num / 2;
//   })
//   .then(console.log);

// console.log("------------Pogramme 2-------------");
// //------Programme 2----------

// Promise.reject(10)

//   .catch((x) => {
//     console.log(x); //! x = 10
//     return 20;
//   })
//   .then((x) => {
//     console.log(x); // x = 20
//     return 30;
//   })
//   .catch((x) => {
//     //this catch is not execute bcz above .then dont throw any error
//     console.log(x);
//     return 40;
//   })
//   .then((x) => {
//     console.log(x); // x = 30
//   });

//------------------------
console.log("------------Pogramme 3-------------");
Promise.resolve(10)

  .then((x) => {
    console.log(x);   // x = 10
    return 20;
  })

  .catch((x) => {
    console.log(x);
    return 30;
  })

  .then((x) => {
    console.log(x);  // x = 20
    return 40;
  })

  .then((x) => {
    console.log(x); // x = 40
  });

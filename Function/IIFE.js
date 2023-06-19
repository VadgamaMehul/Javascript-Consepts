/* An IIFE function
 * it is uses prevente variable to become globale
 * its invoke immidiatle so after invoking function data no longer exist
 * also in IIFE func. not has any name so variable not go global
 * 
 *  */ 

//----------------------------------------------------------------------------------------------------------
// (function () {
//   console.log("Hello World");
// })();

//----------------------------------------------------------------------------------------------------------
// {
//   var a = 1;
//   console.log(a); // will show 1
// }
// //block B
// {
//   a++;
//   console.log(a); // will show 2
// }

//----------------------------------------------------------------------------------------------------------
function blockA() {
  var a = 1;
  console.log(a);
}
function blockB() {
  a++;
  console.log(a);
}
blockA(); //invoke the code in blockA, will show 1----Here a is now become global 
blockB();

//----------------------------------------------------------------------------------------------------------
// (function() {
//   var a=1;
//   console.log(a); // will show 1
// })();
// (function() {
//    a++;
//    console.log(a);
// })();


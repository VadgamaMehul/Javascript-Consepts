/*Default binding :-
 If a function is called with no context object, then the this keyword refers to the  global object 
 (in the browser, the window object). 

*/

global.firstName="Mehul";

var firstName = "Mehul" //it will also give undefine

function print(){
    console.log(this.firstName); //here this. looking for fN in globol object so if FN is not in global object it will return undefine
}

print()




/**
 * There is below property in object:
 * 1. Data Properties :- its own property
 * ex. {
 *  name:'mehul',
 *  id : 123,
 * } 
 * -> here name and id is Data property
 * 
 * 2.Internal Property
 * -> inernal Property of obj that cant be visibel and proggramer dont touch directly this prop. 
 * ex. toString,... 
 * 
 * 3.Accssor Proprerties
 * ->Its pair of fn and its include to thing 1.getter 2.setter
 * -> 
 * 
 */





//-------------Accessor Proprerty-------------

const accessorObj = {
    _value : 0,
    get name(){
        return this._value;
    },

    set name(value){
       this._value = value;
    },
};

//console.log(Object.keys(accessorObj)); //there is only one ['name'] and [_value]
accessorObj.name = 245;
console.log(accessorObj.name); //gives Mehul
//accessorObj.name = { name : 'somthing'}; //give { name: 'somthing' }

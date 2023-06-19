class Person{
    constructor(name){
        this.name = name;
    }
    PrintName() {
        console.log(this.name);   
    }
}

class Employe extends Person{
    constructor(name,id) {
        super(name);
        this.id = id;
    }
    printId(){
        console.log(this.id);
    }
}

const e = new Employe('Mehul',23)
e.PrintName();
e.printId();

//Output
//Mehul
//23

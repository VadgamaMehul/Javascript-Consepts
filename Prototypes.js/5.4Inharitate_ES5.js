function Person(name) {
 this.name = name;    
}

Person.prototype.PrintName = function () {
    console.log(this.name);
}

Object.setPrototypeOf(Employe.prototype,Person.prototype); // it act as Employe extends Person actule inharitens happens

function Employe(name,id) {
    Person.call(this, name); //this is act as Super()
    this.id = id;
}

Employe.prototype.PrintId = function () {
    console.log(this.id);
}

const e = new Employe('mehuli',23);
e.PrintId();
e.PrintName();

const json = { name: "Ignacio", age: 25, height: 180 };
//Podem convertir una string de json a un objecte
const obj = JSON.parse(json);

console.log(obj);

//-------

const persons = [
  { name: "Ignacio", age: 25, height: 180 },
  { name: "Daniel", age: 26, height: 175, adress: "Carrer ABC" },
  { name: "Carles", age: 37, height: 178 },
];

console.log(JSON.stringify(persons)); //Ens transforma l'objecte json en string


const p = { name: "Ignacio", age: 25, height: 180 };


//La classe ens defineix un blueprint dels objectes 
class Persona{
    constructor (name, age, height, address){
        this.name = name 
        this.age = age
        saluda: function (){
            console.log("Hello, me llamo " + this.name + " y tengo " + this.age +" años")
        }
    }
    saluda(){
        console.log("Hello, me llamo " + this.name + " y tengo " + this.age +" años")
    }
}

let ignacio = new Persona("Ignacio", 35)
ignacio.saluda();
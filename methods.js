function personInfo(){
    console.log(`Person name is ${this.firstName} and age ${this.age} is `);
}



const person1 ={
    firstName : "Rajsekhar",
    age: 20,
    about: personInfo
}
const person2 ={
    firstName : "chicken",
    age: 10,
    about: personInfo
}
const person3 ={
    firstName : "chings",
    age: 23,
    about: personInfo
}
const person4 ={
    firstName : "pat",
    age: 18,
    about: personInfo
}
const person5 ={
    firstName : "mot",
    age: 48,
    about: personInfo
}

person1.about();
person2.about();
person3.about();
person4.about();
person5.about();
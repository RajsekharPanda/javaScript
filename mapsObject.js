// const person = {
//     firstName: "Rajsekhar",
//     age: 18
// }
// for(let key in person){
//     console.log(typeof key);
// }


const person = new Map();
person.set('firstName',"Rajsekhar");
person.set('age',18);
person.set(1,"one");
console.log(person);

for(let key of person.keys()){
    console.log(key, typeof key);
}


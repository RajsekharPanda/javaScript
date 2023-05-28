const key = "email";
const person = {
    name:"Rajsekhar",
    age:20,
    "personal hobbies" : ["Coding","martial arts, reading"] 
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

person.gender = "male";
console.log(person.gender);

// we can use square brackets to acces the key values of object

console.log(person["name"]);
console.log(person["age"]);
console.log(person["personal hobbies"]);
console.log(person["gender"]);

person["college"]= "GCEKB";
console.log(person["college"]);



person[key]="rajsekharpandawork@gmail.com";
console.log(person);
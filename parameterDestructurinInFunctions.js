const person = {
    name: "Rajsekhar",
    age: 20,
    gender: "male",
};

// function printDetails(obj){
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.gender);
// }
function printDetails({name, age, gender}){
    console.log(name);
    console.log(age);
    console.log(gender);
}

printDetails(person);
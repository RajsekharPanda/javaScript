const person ={
    name: "Rajsekhar Panda",
    age: 20,
    gender: "male"
}

for(let key in person){
    // console.log(key);
    // console.log(person[key]);
    console.log(`${key}: ${person[key]}`);
}

console.log(Object.keys(person));

for(let key of Object.keys(person)){
    console.log(`${key}:${person[key]}`);
}
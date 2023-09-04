// const userMethods ={
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age>=18;
//     },
//     sing : function(){
//         return 'tooon nan na na ta ta';
//     }
// };



function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about= function(){
    return `${this.firstName} is ${this.age} years old`;
};
CreateUser.prototype.is18= function(){
    return this.age>=18;
};
CreateUser.prototype.sing= function(){
    return 'tooon nan na na ta ta';
};


const user1 = new CreateUser('Rajsekhar', 'Panda', 'rajsekharpanda43s@gmail.com',20,'my address');
const user2 = new CreateUser('Rajsekhara', 'Panda', 'rajsekharpanda@gmail.com',20,'my address');
const user3 = new CreateUser('Harshit', 'Panda', 'rajsekharpanda43sfasd@gmail.com',20,'my address');
const user4 = new CreateUser('Mohitt', 'Panda', 'mohhhiitt@gmail.com',30,'my address');


console.log(user1);
console.log(user1.about());
console.log(user3.sing());
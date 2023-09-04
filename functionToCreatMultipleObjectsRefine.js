const userMethods ={
    about: function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age>=18;
    },
    sing : function(){
        return 'tooon nan na na ta ta';
    }
};



function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('Rajsekhar', 'Panda', 'rajsekharpanda43s@gmail.com',20,'my address');
const user2 = createUser('Rajsekhara', 'Panda', 'rajsekharpanda@gmail.com',20,'my address');
const user3 = createUser('Harshit', 'Panda', 'rajsekharpanda43sfasd@gmail.com',20,'my address');
const user4 = createUser('Mohitt', 'Panda', 'mohhhiitt@gmail.com',30,'my address');
 
console.log(user1);
console.log(user1.about());
console.log(user3.sing());
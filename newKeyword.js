function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}

const user1 = new createUser("Rajsekhar", 20);
console.log(user1);
user1.about();
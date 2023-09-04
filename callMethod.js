function about(hobbie, favMusician){
            console.log(this.firstName , this.age, hobbie,favMusician);
        }


const user1= {
    firstName: "Rajsekhar",
    age: 20,
    // about: function(hobbie, favMusician){
    //     console.log(this.firstName , this.age, hobbie,favMusician);
    // }
}
const user2= {
    firstName: "Mohit",
    age: 7,
    
}

about.call(user2,"Cricket","arijit");
about.call();
about.call(user1,"football","Bts");
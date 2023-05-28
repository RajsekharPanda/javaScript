const users =[
    {userId:1, userName:"Rajsekhar", gender:"male"},
    {userId:2, userName:"Pap", gender:"male"},
    {userId:3, userName:"Aayushree", gender:"female"},
]

const[user1,user2,user3]=users;
console.log(user1);
console.log(user2);
console.log(user3);

const[{userName},,{gender}]=users;
console.log(userName);
console.log(gender);
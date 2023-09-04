const user = [
    {userId:1, userName:"Raj"},
    {userId:2, userName:"Rajsekhar"},
    {userId:3, userName:"Raj Kumar"},
    {userId:4, userName:"Sankar"},
    {userId:5, userName:"Ganesh"}
]

const myUser = user.find((user)=>user.userId===3);
console.log(myUser) 
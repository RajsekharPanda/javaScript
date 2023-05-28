const singHappyBirthday = () =>{
    console.log("Happy Birthday to you ....");
}
singHappyBirthday();



const isEven = (number) =>{
    return number%2===0;
}
console.log(isEven(4));


const firstChar = (anyString) =>{
    return anyString[0];
}
console.log(firstChar("Rajsekhar"));


const sumThreeNumbers = (number1, number2, number3) => {
    return number1+number2+number3;
}
console.log(sumThreeNumbers(1,2,9));


const findTarget = (array , target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i]===target) {
            return i;
        }
    }
    return -1;
}
let myArray = [1,24,35,6,57,8]
console.log(findTarget(0));
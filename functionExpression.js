const singHappyBirthday = function(){
    console.log("Happy Birthday to you ....");
}
singHappyBirthday();



const sumOfThreeNumbers = function(number1,number2,number3){
    return number1+number2+number3;
}
console.log(sumOfThreeNumbers(1,2,3));



const isEven = function(number){
    return number%2===0;
}
console.log(isEven(3));


const firstChar = function(anyString){
    return anyString[0];
}
console.log(firstChar("Rajsekhar"));



const findTarget = function(array,target){
    for (let i = 0; i < array.length; i++) {
        if (array[i]===target) {
            return i;
        }
    }
    return -1;
}
let myArray = [1,23,4,5,6]
console.log(findTarget(myArray,5));
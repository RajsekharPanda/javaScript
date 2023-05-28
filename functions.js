function singHappyBirthday(){
    console.log("Happy Birthday to you.....");
}

singHappyBirthday();

function sumOfTwoNumbers(number1,number2){
    return number1+number2;
}

const returnedValue = sumOfTwoNumbers(5,6);
console.log(returnedValue);

function isEven(number){
    return number%2===0;
}

console.log(isEven(2));

function firstCaracter(anyWord){
    return anyWord[0];
}
console.log(firstCaracter("Rajsekhar")); 


function findingTargetIndex(array,target){
    for (let j = 0; j < array.length; j++){
        if (array[j]===target) {
            return j;
        }
    }
    return -1;
}
const myArray = [1,2,34,5,6,767,8];
const ans = findingTargetIndex(myArray,6);
console.log(ans);

const numbers=[2,3,4,56,67];

const isEven = function(number){
    return number%2===0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
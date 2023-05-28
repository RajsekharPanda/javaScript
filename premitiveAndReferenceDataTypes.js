// premitive data types are stored in stack and reference data types are stored in heap memory and stake will be having a pointer for the reference data type variable

// premitive data types

let num9 = 10;
let num10 = num9;

console.log("Number 1 is ", num9);
console.log("Number 2 is ", num10);

num9++
console.log("After increasing number 1 by 1");
console.log("Number 1 is ", num9);
console.log("Number 2 is ", num10);

// reference data type 

let array1 = ["Rajsekhar"];
let array2 = array1;

console.log("Array 1 is ", array1);
console.log("Array 2 is ", array2);

array1.push("Panda");
console.log("After pushing an element into the array 1 ");
console.log("Array 1 is ", array1);
console.log("Array 2 is ", array2);
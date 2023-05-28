// array is an object in JS

let str21 = ["Apple", "Mango","Grapes"];
console.log(str21);

console.log(typeof str21);
console.log(Array.isArray(str21));

str21.push("Banana");
console.log(str21);

str21.pop();
console.log(str21);
// pop operator gives the popped value

str21.unshift("Banana");
console.log(str21);

str21.shift();
console.log(str21);
// shift operator gives the popped value

// push and pop operators are fast as compared to shift and unshift operators

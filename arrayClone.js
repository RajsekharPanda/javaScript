let array3 = ["item1", "item2"];
let array4 = array3;
console.log(array3===array4);

// let array5 = ["item1", "item2"];
let array5 = array3.slice(0);
console.log(array3===array5);

array3.push("item3");
console.log(array3);

let array6 = [].concat(array3);
console.log(array6);

// using spread operator

let array7 = [...array3];
console.log(array7);

let array8 = [...array3, "item4", "item5"];
console.log(array8);
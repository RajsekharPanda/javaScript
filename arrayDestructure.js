const myArray = ["element1", "element2","element3","element4"];

let [myVar1, myVar2,...myNewArray] = myArray;
console.log(myVar1);
console.log(myVar2);
console.log(myNewArray);
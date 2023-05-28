const obj1 = {
    key1:"value1",
    key2:"value2",
    key3:"value3",
};
const obj2 = {
    key4:"value4",
    key5:"value5",
    key1:"value6",
};

const newObj={...obj1,...obj2};
console.log(newObj);


const newObj2={...obj2,...obj1};
console.log(newObj2);


const newObj3={..."abcde"};
console.log(newObj3);


const newObj4={...["abc","bcd","cde","def","efg"]};
console.log(newObj4);
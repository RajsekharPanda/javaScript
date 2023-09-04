// const numbers = [1,2,46,765,78,6789,89,89900,4325,45]

// numbers.sort((a,b)=> a-b); 
// console.log(numbers)

const products =[
    {productId:1, productName:"p1", price:5000},
    {productId:2, productName:"p2", price:6000},
    {productId:3, productName:"p3", price:500},
    {productId:4, productName:"p4", price:55600},
    {productId:5, productName:"p5", price:800},
]

// low to high 
const lowToHigh = products.slice(0).sort((a,b)=> a.price-b.price);
console.log(lowToHigh);

// high to low 

const highToLow = products.slice(0).sort((a,b)=> b.price-a.price);
console.log(highToLow);
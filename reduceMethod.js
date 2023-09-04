// const numbers = [1,2,3,4,5];

// const sum = numbers.reduce((accumulator , currentValue)=>{
//     return accumulator + currentValue;
// },100);

// console.log(sum); 

const userCart =[
    {productId:1, productName:"Mobile", productPrice:12000},
    {productId:2, productName:"laptop", productPrice:42000},
    {productId:3, productName:"tv", productPrice:22000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.productPrice;
}, 0);

console.log(totalAmount);
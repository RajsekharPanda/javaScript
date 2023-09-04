const userCart =[
    {productId:1, productName:"p1", price:5000},
    {productId:2, productName:"p2", price:6000},
    {productId:3, productName:"p3", price:500},
    {productId:4, productName:"p4", price:55600},
    {productId:5, productName:"p5", price:800},
]

const ans = userCart.every((cartItem)=>cartItem.price < 100000);
console.log (ans); 
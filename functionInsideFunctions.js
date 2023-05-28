function app(){
    const myFunc=()=>{
        console.log("this message is from myFunc");
    }

    const addTwo = (num1,num2)=> {
        return num1+num2;
    }

    const mulTwo = (num1, num2)=> num1*num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(3,4));
    console.log(mulTwo(3,4));
}

app();
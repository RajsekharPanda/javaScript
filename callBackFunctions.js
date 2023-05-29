function myFuncDisplay(){
    console.log("inside my func which is to be displayed");
};

function myFunc(callBack){
    console.log(callBack);
    callBack();
}

myFunc(myFuncDisplay);

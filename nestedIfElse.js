let winningNum = 18;

let userGuess = +prompt("Guess a number");

if (userGuess === winningNum) {
    console.log("Correct guess !!!");
}
else{
    if (userGuess>winningNum) {
        console.log("Guess is too high !!!");
    }
    else{
        console.log("Guess is too low !!!");
    }
}
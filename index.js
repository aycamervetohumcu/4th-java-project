function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess = null;
    
    while (guess !== randomNumber) {
        guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
        
        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
            continue;
        }
        
        if (guess < randomNumber) {
            console.log("Too low!");
        } else if (guess > randomNumber) {
            console.log("Too high!");
        } else {
            console.log("Congratulations! You guessed the correct number!");
        }
    }
}

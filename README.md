# number-guesser-game
Guess the random number in three tries or less.
Developed alongside tutorial from Brad Traversy's Modern Javascript From The Beginning course on Udemy.
<br>
A couple things were buggy in the tutorial so I fixed them up:
1. Fixed error message:
    if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    
The code above was not nested in an if-else statement in the tutorial, it was a stand-alone if-statement. Doing so created a bug:

    else if (guess !== winningNum) {
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
    }
This code, that was inserted under the same function but below the first code block, would run instead whenever isNaN(guess) || guess < min || guess > max returned true. This caused the wrong error message to show up in the UI. I fixed this issue by nesting both blocks of code in an if-else statement and that alone fixed the messages.

2. Re-ordered the if-else statement
When I added the above code into one big if-else statement, some things were initially out of order so re-ordered everything by high-priority negation (guesses that weren't the winning number were dealt with first in their respective if-statements, then I dealt with what would happen when the guess was correct). This fixed the game from going past 3 guesses and from the UI showing 'You have -1 guesses left'. Instead, the Play again button would be prompted correctly.

3. Made the code look as neat as possible. Eliminated anything I thought was not necessary from the tutorial.

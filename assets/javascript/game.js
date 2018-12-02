var possibleWords = ['Christmas tree', 'The North Pole', 'snowball fight', 'gingerbread house']; //Array of possible words/phrases
var answer = []; //Empty array to hold the correct answer
var guess = []; //Empty array ready for each guessed letter
var correctLetters = []; //Empty list ready for correct letters
var incorrectLetters = []; //Empty list ready for incorrect letters
var guessesLeft = 10; //Number of available guesses at the beginning of the game
var wins = 0; //Sets number of wins to begin with
var letterCheck = /^[a-z]$/ //Regex to test for valid letter input
//Chooses random word from possibleWords array
var word = possibleWords[Math.floor(Math.random() * possibleWords.length)];

//Game begins upon keyup
var el = document.getElementById("start");
document.onkeyup = function(event) {
    event.stopPropagation();
    el.textContent = ("");
    //Displays underscores for the missing letters
for (var i = 0; i < word.length; i++) {
    if ((word[i] !== "'") && (word[i] !== " ") && (word[i] !== "!") && (word[i] !== "?") && (word[i] !== ",")) {
        answer[i] = "_";
        }
    else {
        answer[i] = word[i];
    }
}
var displayAnswer = answer.join(' ');

//Collects user guess, adds it to the correct or incorrect letter array, decrements the guesses if incorrect
document.onkeydown = function(event) {
    guess = event.key.toLowerCase();
    stringGuess = guess.toString();
    //Verifies valid input (letter properly converted to lowercase string)
    if ((letterCheck.test(stringGuess) === true) && ((correctLetters.indexOf(stringGuess) === -1) && (incorrectLetters.indexOf(stringGuess) === -1))) {
        var correctGuess = false;
        var incorrectGuess = false;
        for (var i = 0; i < word.length; i++) {
            if (word.toLowerCase()[i] === stringGuess) {
                correctGuess = true;       
            }
            if (word.toLowerCase()[i] !== stringGuess) {
                incorrectGuess = true;
            }
        }
        if (correctGuess) {
            correctLetters.push(stringGuess);
            console.log(correctLetters);
        }
        else if (incorrectGuess) {
            incorrectLetters.push(" " + stringGuess.toUpperCase());
            guessesLeft--;
            console.log(incorrectLetters);
            }
        else {
            console.log("You may only choose a letter once.");
        }
    guessCountText.textContent = "Guesses: " + guessesLeft;
    guessedLettersText.textContent = "Incorrect Guesses: " + incorrectLetters;
    }
    else {
        console.log("Not a valid input");
    }
}
}

    //The code to run the game will go here... I think...
    //hide the text instructing user to press key to begin
    //While window is open?
        //call game function
        //if statement for winning to increment the wins




  
console.log(word);


winCountText.textContent = "Wins: " + wins;



//Display the number of wins (number of times the user guessed the word correctly)

    //USE SPANS!!!

//As the user guesses the correct letters, display them
    //Catch the user's guess as guessedLetter and convert to lowercase
    //If guessedLetter in word:
        //find index(es) of that letter in word
        //Change "_" to that letter(s) in correct index in display
        //decrement guesses 
    //Else: 
        //convert to uppercase
        //add to incorrectLetters
        //decrement guesses
 
//Display the number of guesses remaining

//Display Letters already guessed, displayed like L Z Y X

//After the user wins/loses the game should automatically choose another word and make the user play it.

//Bonus: Play a sound or song when the user guesses their word correctly, like in our demo.
//Bonus: Write some stylish CSS rules to make a design that fits your game's theme.

//HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
    //Save your whole game and its properties in an object.
    //Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
    //Don't forget to place your global variables and functions above your object.
    //Remember: global variables, then objects, then calls.
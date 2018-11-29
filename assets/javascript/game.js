var possibleWords = ['Buddy the Elf', 'Christmas cheer', 'snowball fight', 'spaghetti with syrup', 'the sea of swirly, twirly gumdrops', 'Santa, here? I know him!', 'The best way to spread Christmas cheer is singing loud for all to hear', 'treat every day like Christmas', "there's room for everyone on the nice list", 'Does someone need a hug?', "smiling's my favorite", 'call me elf one more time', "I'm in love and I don't care who knows it!", "Buddy the Elf, what's your favorite color?"]; //Array of possible words/phrases
var answer = []; //Empty array to hold the correct answer
var guess = []; //Empty array ready for each guessed letter
var correctLetters = []; //Empty list ready for correct letters
var incorrectLetters = []; //Empty list ready for incorrect letters
var guesses = 10; //Number of available guesses at the beginning of the game
var wins = 0; //Sets number of wins to begin with

//Game begins upon keyup
document.onkeyup = function(event) {
    //The code to run the game will go here... I think...
}

//Chooses random word from possibleWords array
var word = possibleWords[Math.floor(Math.random() * possibleWords.length)];

//Displays underscores for the missing letters
for (var i = 0; i < word.length; i++) {
    if ((word[i] !== "'") && (word[i] !== " ") && (word[i] !== "!") && (word[i] !== "?") && (word[i] !== ",")) {
        answer[i] = "_";
        }
    else {
        answer[i] = word[i];
    }
    var displayAnswer = answer.join(' ');

    document.onkeyup = function(event) {
        guess = event.key;
        console.log(guess);//Remove me once code works
    ///Figure out if/else statement that makes sure the guess is a letter!!!!!!
    }
}

console.log(word);
console.log(displayAnswer);

//Display the number of wins (number of times the user guessed the word correctly)

/*
Regex for all upper and lowercase letters- the plus sign means it cannot be empty

*/
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

        

    /*
    if (guess.matches^[a-z]+$) {
        console.log(guess);
    }
    else {
        console.log('error');
    }
}
*/

/*
    var compChoice = choices[Math.floor(Math.random() * choices.length)];
    if ((userChoice === 'r') || (userChoice === 'p') || (userChoice === 's')) {
        if ((compChoice === 'r' && userChoice === 'r') || (compChoice === 's' && userChoice === 's') || (compChoice === 'p' && userChoice === 'p')) {
            ties++;
            console.log("Ties: " + ties);
        }
        else if ((compChoice === 'r' && userChoice === 'p') || (compChoice === 'p' && userChoice === 's') || (compChoice === 's' && userChoice === 'r')) {
            wins++;
            console.log("Wins: " + wins);
        }
        else if ((compChoice === 'r' && userChoice === 's') || (compChoice === 'p' && userChoice === 'r') || (compChoice === 's' && userChoice === 'p')) {
            losses++;
            console.log("Losses: " + losses);
        }
        else {
            console.log('error');
        }
    }
    userChoiceText.textContent = "You chose: " + userChoice;
    computerChoiceText.textContent = "The computer chose: " + compChoice;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    tiesText.textContent = "Ties: " + ties;
};
*/

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
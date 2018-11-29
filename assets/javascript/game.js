// create variables
//These words are just placeholders until the code works, then I will make the theme
var possibleWords = ['Buddy the Elf', 'Christmas cheer', 'snowball fight', 'couch', 'chicken', 'lunchbox', 'computer', 'superman', 'dresser', 'tofu'];
var guessedLetter = ""; //Empty string ready for each guessed letter
var correctLetters = []; //Empty list ready for correct letters
var incorrectLetters = []; //Empty list ready for incorrect letters
var guesses = 10; //Number of available guesses at the beginning of the game
var wins = 0; //Sets number of wins to begin with

//Choose random word from possibleWords array
var word = possibleWords[Math.floor(Math.random() * possibleWords.length)];

//Display the word as _ _ _ _... 
var displayLength = word.length;

//Game begins upon keyup
document.onkeyup = function(event) {
    
}
console.log(displayLength);
//Display "Press any key to begin the game"

//Display the number of wins (number of times the user guessed the word correctly)

//Choose a random word from the possibleWords array
 //Replace 10 with the number of items in the possibleWords array 



    //find the length of word
    //display "_" for each letter in word

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

console.log(word); //for testing
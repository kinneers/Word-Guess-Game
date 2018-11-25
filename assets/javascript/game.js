// create variables
//I don't know if I need this, but I'll go ahead and make it: var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//These words are just placeholders until the code works, then I will make the theme
var possibleWords = ['picnic', 'television', 'car', 'couch', 'chicken', 'lunchbox', 'computer', 'superman', 'dresser', 'tofu']; //Place the possible words to be picked from in this array
var guessedLetters = []; //Empty array ready for guessed letters
var guesses = 10; //Number of available guesses at the beginning of the game
var wins = 0; //Sets number of wins to begin with

//Display "Press any key to begin the game"

//Display the number of wins (number of times the user guessed the word correctly)

//Choose a random word from the possibleWords array
word = possibleWords[Math.floor(Math.random() * 10)] //Replace 10 with the number of items in the possibleWords array 

//Display the word as _ _ _ _... 

//As the user guesses the correct letters, display them

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
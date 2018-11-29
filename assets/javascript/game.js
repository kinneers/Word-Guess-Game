var possibleWords = ['Buddy the Elf', 'Christmas cheer', 'snowball fight', 'spaghetti with syrup', 'the sea of swirly, twirly gumdrops', 'Santa here? I know him!', 'The best way to spread Christmas cheer is singing loud for all to hear', 'treat every day like Christmas', "there's room for everyone on the nice list", 'Does someone need a hug?', "smiling's my favorite", 'call me elf one more time']; //Array of possible words/phrases
var answer = []; //Empty array to hold the correct answer
var guessedLetter = []; //Empty array ready for each guessed letter
var correctLetters = []; //Empty list ready for correct letters
var incorrectLetters = []; //Empty list ready for incorrect letters
var guesses = 10; //Number of available guesses at the beginning of the game
var wins = 0; //Sets number of wins to begin with


//Game begins upon keyup
document.onkeyup = function(event) {
    
}
var word = possibleWords[Math.floor(Math.random() * possibleWords.length)];//Chooses random word from possibleWords array

console.log(word); //for testing

for (var i = 0; i < word.length; i++) {
    answer[i];
  }

//Display the word as _ _ _ _... 
var displayLength = word.length;

console.log(answer[i]);

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


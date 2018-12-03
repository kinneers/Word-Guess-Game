var possibleWords = ['Christmasc tree!', 'The North Pole!', 'snowball fight!', 'gingerbread house!']; //Array of possible words/phrases
var currentWord = ""; //variable to hold the current word/phrase as a string
var guess = ""; //string ready to hold current guessed letter
var display = ""; //String ready to display the game board on the page
var displayWord = []; //Empty array that will hold the letter at each index of the currently selected word
var guessedLetters =[]; //Will hold user guessed letters
var correctLetters = []; //Array for correctly guessed letters
var guessesLeft = 10; //Number of available guesses at the beginning of the game
var wins = 0; //Sets number of wins to begin with
var letterCheck = /^[a-z]$/ //Regex to test for valid letter input

//Begins the game setup with a keyup
document.onkeyup = function(event) {
    currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]; //Chooses random word from possibleWords array
    console.log(currentWord);
    var el = document.getElementById("start");
    el.textContent = (""); //Removes the "Press any key to start"
    winCountText.textContent = "Wins: " + wins; //Displays number of wins
    guessCountText.textContent = "Guesses Remaining: " + guessesLeft; //Displays number of guesses remaining
    
    for (var i = 0; i < currentWord.length; i++) {
        displayWord.push(currentWord.charAt(i)); //pushes the currently selected word/phrase into an empty array
        if (letterCheck.test(currentWord.charAt(i).toLowerCase())) { //Uses the regex to check if the character in the current word at the given index is a letter (returns boolean)
            display = display.concat("_"); //If a letter, replaces it with '_'
        }
        else {
            display = display.concat(currentWord.charAt(i)); //Otherwise keeps the non-letter character in place
        }
    }

    answerText.textContent = display; //Displays the game board on the page

    document.onkeyup = function(event) {
        guess = event.key;  //Gathers the user's chosen letter
        guess = guess.toLowerCase(); //Converts the guess to lowercase if it is not

        if (letterCheck.test(guess)) { //Checks that the guess is a letter, returns boolean
            if ((guessedLetters.indexOf(guess.toUpperCase()) > -1) && (displayWord.indexOf(guess) === -1) && (displayWord.indexOf(guess.toUpperCase()) === -1)) { //Logic: guess is already in incorrectly guessed array and is not in the display word (correct letters) array
                console.log("You have already guessed this letter."); //Future idea- play a whah-wha sound or a beat
            }
            else if ((guessedLetters.indexOf(guess.toUpperCase()) === -1) && (displayWord.indexOf(guess) === -1) && (displayWord.indexOf(guess.toUpperCase()) === -1)) { //Logic: the guess has not already been guessed and is not in the display word (correct letters) array 
                guessedLetters.push(guess.toUpperCase()); //Adds the incorrect letter to the guessedLetters array as an uppercase letter
                guessesLeft--; //Decrements the number of guesses
                guessCountText.textContent = "Guesses Remaining: " + guessesLeft; //Updates the guesses left on the page
                //There might be a way to add a space into the guessedLetters array (use concat or maybe join)- but I'll try this once everthing else is working
                guessedLettersText.textContent = "Incorrect Guesses: " + guessedLetters; //Updates the guessed letters shown on the page
            }
            else { //By process of elimination, this must be a correct letter
                for (var j = 0; j < currentWord.length; j++) { //Begins a loop that will write the correct guess into the display string
                    if (currentWord.toLowerCase()[j] === guess) { //Finds the index on each loop of the correct guess
                        display = display.substr(0,j) + currentWord[j] + display.substr(j+1); //Logic: Splits the current display into two substrings, one starting from index 0 and going length j (so ending just before the correctly guessed letter); one starting at j+1, which is the index just after j; and using the currentWord[j] to update the correctly guessed letter in order to preserve original capitalization choice 
                    }
                }
                answerText.textContent = display; //Displays the game board on the page
            }
        }
        else {
            console.log("Not a valid input. Choose a letter."); //Logs message in console that non-letter was selected
        }
    }
}

    //Not sure yet how to make it repeat... while window is open, maybe?
        //call game function
        //if statement for winning to increment the wins

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
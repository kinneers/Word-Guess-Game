var possibleWords = ['nutcracker', 'Christmas trees', 'The North Pole', 'snowball fight', 'gingerbread house', 'winter wonderland', 'candy canes', 'stockings hung by the chimney', 'chestnuts roasting', 'St. Nicholas', 'Santa Claus is coming to town!', 'Rudolph', 'eight tiny reindeer', 'up on the housetop', "elves in Santa's workshop", 'ornaments', 'figgy pudding', 'coal in your stocking', 'presents under the tree', 'sleigh rides', 'White Christmas', 'kissing under the mistletoe', 'Silent Night', 'All I Want for Christmas is My Two Front Teeth', 'Grandma Got Run Over by a Reindeer']; //Array of possible words/phrases
var currentWord = ""; //variable to hold the current word/phrase as a string
var guess = ""; //string ready to hold current guessed letter
var display = ""; //String ready to display the game board on the page
var displayWord = []; //Empty array that will hold the letter at each index of the currently selected word
var guessedLetters =[]; //Will hold user guessed letters
var guessesLeft = 10; //Number of available guesses at the beginning of the game
var wins = 0; //Sets number of wins to begin with
var letterCheck = /^[a-z]$/ //Regex to test for valid letter input

//Begins the game setup with a keyup
document.onkeyup = function(event) {
    currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]; //Chooses random word from possibleWords array
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
                console.log("You have already guessed this letter."); //This incorrect letter has been guessed
                document.getElementById("soundLose").play(); //Plays snowball splat audio
            }

            else if ((guessedLetters.indexOf(guess.toUpperCase()) === -1) && (displayWord.indexOf(guess) === -1) && (displayWord.indexOf(guess.toUpperCase()) === -1)) { //Logic: the guess has not already been guessed and is not in the display word (correct letters) array 
                guessedLetters.push(guess.toUpperCase()); //Adds the incorrect letter to the guessedLetters array as an uppercase letter
                guessesLeft--; //Decrements the number of guesses
                guessCountText.textContent = "Guesses Remaining: " + guessesLeft; //Updates the guesses left on the page
                //There might be a way to add a space into the guessedLetters array (use concat or maybe join)- but I'll try this once everthing else is working
                guessedLettersText.textContent = "Incorrect Guesses: " + guessedLetters; //Updates the guessed letters shown on the page
                document.getElementById("soundLose").play(); //Plays snowball splat audio
            }

            else { //By process of elimination, this must be a correct letter
                for (var j = 0; j < currentWord.length; j++) { //Begins a loop that will write the correct guess into the display string
                    if (currentWord.toLowerCase()[j] === guess) { //Finds the index on each loop of the correct guess
                        display = display.substr(0,j) + currentWord[j] + display.substr(j+1); //Logic: Splits the current display into two substrings, one starting from index 0 and going length j (so ending just before the correctly guessed letter); one starting at j+1, which is the index just after j; and using the currentWord[j] to update the correctly guessed letter in order to preserve original capitalization choice 
                    }
                document.getElementById("soundWin").play(); //Plays jingle bells ringing
                }
                answerText.textContent = display; //Displays the game board on the page
            }
        }

        else {
            console.log("Not a valid input. Choose a letter."); //Logs message in console that non-letter was selected
        }
        
        //Winner!
        if (display.indexOf("_") === -1) { //When there are no more blanks in the display the user has won
            wins++; //Increments the number of wins
            winCountText.textContent = "Wins: " + wins; //Displays number of wins
            document.getElementById("soundWin").play(); //Plays jingle bells ringing

        }

        //User Loses
        if (guessesLeft === 0) {
            console.log("You lost");
            document.getElementById("soundLose").play(); //Plays snowball splat audio
        }

        //Restart Game after either winning or losing
        if ((display.indexOf("_") === -1) || (guessesLeft === 0)) {
            //Resets every global variable in which the value is changed in the game except wins and current word (because a new one will be picked)
            guess = ""; //string ready to hold current guessed letter
            display = ""; //String ready to display the game board on the page
            displayWord = []; //Empty array that will hold the letter at each index of the currently selected word
            guessedLetters =[]; //Will hold user guessed letters
            guessesLeft = 10; //Number of available guesses at the beginning of the game
    
            currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]; //Chooses random word from possibleWords array
            guessCountText.textContent = "Guesses Remaining: " + guessesLeft; //Displays number of guesses remaining
            guessedLettersText.textContent = "Incorrect Guesses: " + guessedLetters; //Updates the guessed letters shown on the page

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
        
        }
    }
}
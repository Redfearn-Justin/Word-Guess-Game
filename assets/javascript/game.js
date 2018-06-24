//array of words for the computer to choose from (object/array)

    var guessWords = [ "Nintendo", "Pong", "Atari", "Xbox", "Switch", "PlayStation", "Sega", "Sonic", "Mario", "Kratos", "Asteroids", "Forza", "Yoshi", "PC", "Warcraft", "Starcraft", "Halo", "Battlefield", "Pokemon", "Infamous", "Persona", "Fable", "DOTA", "Ryu", "Killzone", "Spyro", "Controller", "Uncharted", "Link", "Zelda", "Turok", "Scorpion", "Raiden", "Quake","Digimon", "Crackdown", "Doom", "Skyrim", "Centipede", "Metroid", "Resistance", "Sephiroth", "Cloud", "Battletoads", "Castlevania", "Diablo", "Elixir"];


    //array for the letters the user has guessed

    var userGuess = [];

    //array for placeholder "_"

    var placeholder = [];

    // Variables to track wins, guesses remaining

    //const triesLeft = 10;
    var wins = 0;
    var guessRemain = 10; //give users 10 guesses to guess the word

    //boolean response for when the game stops

    var userFinished = false;

    var currentWord;

    function startGame() {

        //computer selects word from array

        currentWord = guessWords[Math.floor(Math.random() * guessWords.length)];
        console.log(currentWord);

        //clear out arrays

        userGuess = [];
        placeholder = [];

        //loop for the placeholder array so it'll mimic the word length for each word randomly selected

        for (var i = 0; i < currentWord.length; i++) {
            placeholder.push("_");
            //placeholder[i] = "_";
        } // for loop

        document.getElementById("currentWordDiv").textContent = placeholder;

        console.log(placeholder);


    } // function
    //startGame();

    //FUNCTIONS TO LOOK INTO

    //function makeGuess () {
        // Make sure we didn't use this letter yet
        //if (userGuess.indexOf(letterPressed) === -1) {
            //userGuess.push(letterPressed);
            //evaluateGuess(letterPressed);
        //}
    //}

    //function evaluateGuess () {
        // Array to store positions of letters in string
        //var positions = [];

        // Loop through word finding all instances of guessed letter, store the indicies in an array.
        //for (var i = 0; i < guessWords[currentWord].length; i++) {

            //if(guessWords[currentWord][i] === letterPressed) {

                //positions.push(i);
            //}
        //}

        // if there are no indicies, remove a guess and update the hangman image
        //if (positions.length <= 0) {
            //guessRemain--;
       // } 
        //else {
        // Loop through all the indicies and replace the '_' with a letter.
        //for(var i = 0; i < positions.length; i++) {
           // currentWord[positions[i]] = letterPressed;
       // }
    //}
    //END

    document.onkeydown = function(event) {

        var letterPressed = event.key;

        //include if/else statements

        //push keyboard presses into 'user guess array' to continuously add entries into 'user guess div'
        if (letterPressed) {
            //letterPressed.push(userGuess); ERROR: "FUNCTION NOT DEFINED"
            document.getElementById("userGuessDiv").textContent = letterPressed;
            //letterPressed.join();  ERROR: "FUNCTION NOT DEFINED"
            console.log(letterPressed);
        }

        if (letterPressed.indexOf(currentWord) != -1) {
            console.log();
        }

        if (event.keyCode >= 65 && event.keyCode <= 90) {
        }

        //for loop going through the word and comparing the words to the chosen, building the placeholder array

        //look up join function in javascript
    }

    //END GAME IF STATEMENT
    //if (guessRemain <= 0) {
        //document.getElementById("gameOver").textContent = "GAME OVER!!!";
        //userFinished = true;
    //}

// CHECKLIST

    //for letters that are correct, ensure letter appears in "current word" div, replacing the "_"

    //FOR each guess wrong, ensure the "guesses remaining" ticks down by one

    //VICTORY CONDITIONS EXECUTE: if all letters guessed correctly, execute 6.W: if not, execute 6.L. For BOTH Conditions, make sure the game refreshed for another attempt
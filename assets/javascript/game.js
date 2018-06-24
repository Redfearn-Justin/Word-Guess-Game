//array of words for the computer to choose from (object/array)

    var guessWords = [ "Nintendo", "Pong", "Atari", "Xbox", "Switch", "PlayStation", "Sega", "Sonic", "Mario", "Kratos", "Asteroids", "Forza", "Yoshi", "Sweet Tooth", "Master Chief", "PC", "Warcraft", "Starcraft", "Halo", "Call Of Duty", "Battlefield", "Gears Of War", "Splinter Cell", "Super Smash Brothers", "Fire Emblem", "Pokemon", "Infamous", "Fusion Frenzy", "Shadow Of The Colossus", "Persona", "Fable", "Between Good and Evil", "Half Life", "BioShock", "Red Dead Redemption", "DOTA", "Street Fighter", "Ryu", "Chun Li", "Devil May Cry", "Max Payne", "Grand Theft Auto","Heavy Rain", "Killzone", "Helghast","Ace Combat", "Spyro", "Crash Bandicoot", "Chrono Trigger", "Dragon Quest", "Mass Effect", "God Of War", "Sly Cooper", "Super Mario Sunshine", "Legend Of Zelda", "Turock"];


    //array for the letters the user has guessed

    var userGuess = [];

    //array for placeholder "_"

    var placeholder = [];

    //array for properly guessed words

    var correctGuess = [];

    // Variables to track wins, guesses remaining

    //const triesLeft = 10;
    var wins = 0;
    var guessRemain = 10; //give users 10 guesses to guess the word

    //boolean response for when the game stops

    var userFinished = false;

    // computer randomly selects word from array

    var currentWord = guessWords[Math.floor(Math.random() * guessWords.length)];

    console.log(currentWord);


    function startGame() {

        //loop for the placeholder array so it'll mimic the word length for each word randomly selected

        for (var i = 0; i < currentWord.length; i++) {

            placeholder[i] = "_";

            document.getElementById("currentWordDiv").textContent = "Current Word: " + placeholder;
        } // for loop

        console.log(placeholder);


    } // function
    //startGame();

    document.onkeydown = function(event) {

        var letterPressed = event.key;

         console.log(letterPressed);

        //include if/else statements

        if (letterPressed.indexOf(currentWord) != -1) {
            console.log();
        }

        if (currentWord.includes(letterPressed)) { 
        }

        //for loop going through the word and comparing the words to the chosen, buiilding the placeholder array

        //look up join function in javascript
    }

    // fuction

    //through key functions, record what the user is pressing

    //"log" inputs into "letters guessed" div

    //for letters that are correct, ensure letter appears in "current word" div, replacing the "_"

    //FOR each guess wrong, ensure the "guesses remaining" ticks down by one

    //VICTORY CONDITIONS EXECUTE: if all letters guessed correctly, execute 6.W: if not, execute 6.L. For BOTH Conditions, make sure the game refreshed for another attempt

    // WIN (Optional) play win sound queues/songs

    // LOSE (Optional) play loosing sound queues/songs
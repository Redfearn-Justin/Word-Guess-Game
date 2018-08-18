
$(document).ready(function() {

    //array of words for the computer to choose from (object/array)

    var guessWords = [ "Nintendo", "Pong", "Atari", "Xbox", "Switch", "PlayStation", "Sega", "Sonic", "Mario", "Kratos", "Asteroids", "Forza", "Yoshi", "PC", "Warcraft", "Starcraft", "Halo", "Battlefield", "Pokemon", "Infamous", "Persona", "Fable", "DOTA", "Ryu", "Killzone", "Spyro", "Controller", "Uncharted", "Link", "Zelda", "Turok", "Scorpion", "Raiden", "Quake","Digimon", "Crackdown", "Doom", "Skyrim", "Centipede", "Metroid", "Resistance", "Sephiroth", "Cloud", "Battletoads", "Castlevania", "Diablo", "Elixir"];


    //array for the letters the user has guessed

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var userGuess = [];

    //array for placeholder "_"

    var placeholder = [];

    //array for current word

    var currentWord = [];

    // Variables to track wins, guesses remaining

    var wins = 0;
    var guessRemain = 10; //give users 10 guesses to guess the word

    //boolean response for when the game stops

    var userFinished = false;

    var randomSelectWord = guessWords[Math.floor(Math.random() * guessWords.length)];


    //functions

    function initiateGame() {

        console.log("The randomly selected word is: " + randomSelectWord);

        currentWord.push(randomSelectWord);

        console.log(currentWord + " is currently in the array!");

        //clear out arrays

        userGuess = [];
        placeholder = [];

        //loop for the placeholder array so it'll mimic the word length for each word randomly selected

        for (var i = 0; i < randomSelectWord.length; i++) {

            placeholder.push("_");

            document.getElementById("currentWordDiv").textContent = placeholder.join(" ");
        } 

        console.log(placeholder);

        // gameStatus();


    }

    // function gameStatus() {

    // }

    // function checkLetters() {
        
    // }


    //on functions

    $("#startGame").on("click", function() {

        randomSelectWord = guessWords[Math.floor(Math.random() * guessWords.length)];

        initiateGame();





    });

    $(document).on("keypress", function(event) {

        var letterPressed = event.key;

        $("#userGuessDiv").append(letterPressed + " ");

        if(letterPressed.indexOf(alphabet) && letterPressed.indexOf(currentWord) ) { //not working

            console.log("Match made!");
            
        }

        // if(userFinished) {

        //     console.log("cool stuff bro");
        // }

        else { //this is working

            userGuess.push(letterPressed);

            guessRemain--;

            $("#guessRemainDiv").text(guessRemain);

            console.log("oops wrong guess!\n" + "Guesses remainging: " + guessRemain);

        }

    });
});

    //WHAT REMAINS TO BE COMPLETED: 
    //3) If/Else sequences for typing the right/wrong letter compared to chosen random word
    //4) Making placeholder "_" disappear for every right letter pressed
    //5) End-game functionality: 1) player guesses right word, wins go up 2) player runs out of guesses, "Game Over" shows, and player cannot keep playing without pressing "start" button again


// CHECKLIST

    //for letters that are correct, ensure letter appears in "current word" div, replacing the "_"

    //FOR each guess wrong, ensure the "guesses remaining" ticks down by one

    //VICTORY CONDITIONS EXECUTE: if all letters guessed correctly, execute 6.W: if not, execute 6.L. For BOTH Conditions, make sure the game refreshed for another attempt
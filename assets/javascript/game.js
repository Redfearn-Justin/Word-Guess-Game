//array of words for the computer to choose from (object/array)

var guessWords = [ "Nintendo", "Pong", "Atari", "Xbox", "Switch", "PlayStation", "Sega", "Sonic", "Mario", "Kratos", "Asteroids", "Forza", "Yoshi", "Sweet Tooth", "Master Chief", "PC", "Warcraft", "Starcraft", "Halo", "Call Of Duty", "Battlefield", "Gears Of War", "Splinter Cell", "Super Smash Brothers", "Fire Emblem", "Pokemon", "Infamous", "Fusion Frenzy", "Shadow Of The Colossus", "Persona", "Fable", "Between Good and Evil", "Half Life", "BioShock", "Red Dead Redemption", "DOTA", "Street Fighter", "Ryu", "Chun Li", "Devil May Cry", "Max Payne", "Grand Theft Auto","Heavy Rain", "Killzone", "Helghast","Ace Combat", "Spyro", "Crash Bandicoot", "Chrono Trigger", "Dragon Quest", "Mass Effect", "God Of War", "Sly Cooper", "Super Mario Sunshine", "Legend Of Zelda", "Turock"];


//create an array for the letters the user has guessed

var userGuess = [];

//create a for loop for the plac


// Variables to track wins guesses remaining

var wins = 0;
var guessRemain = 8; //give users 8 guesses to guess the word


//create an array for the "_" placerholder

var placeholder = [];


function startGame() {

    var wordSelection = guessWords[Math.floor(Math.random() * guessWords.length)];

    console.log(wordSelection);

    //create a for loop for the placeholder array so it'll mimic the word length for each word randomly selected

    for (var i = 0; i < wordSelection.length; i++) {
        placeholder[i] = "_";
    } // for loop

    console.log(placeholder);


} // function
//startGame();

document.onkeypress = function(event) {

    var letterPressed = event.key;

   console.log(letterPressed);

   //include if/else statements



}; // fuction

//through key functions, record what the user is pressing

//"log" inputs into "letters guessed" div

//for letters that are correct, ensure letter appears in "current word" div, replacing the "_"

//FOR each guess wrong, ensure the "guesses remaining" ticks down by one

//VICTORY CONDITIONS EXECUTE: if all letters guessed correctly, execute 6.W: if not, execute 6.L. For BOTH Conditions, make sure the game refreshed for another attempt

// WIN (Optional) play win sound queues/songs

// LOSE (Optional) play loosing sound queues/songs
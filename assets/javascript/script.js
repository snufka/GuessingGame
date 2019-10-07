var words = ["nirvana","queen","metallica","oasis","radiohead","greenday","coldplay","aerosmith","soundgarden"]
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 12;





function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];

    lettersOfWord = randomWord.split("");

    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}




//RESET FUNCTION

function reset() {
    guessesRemaining = 12;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//CHECK LETTERS/COMPARE FUNCTION

function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
            guessesRemaining--;
        }
    }
    if (letterInWord) {

        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);

    
}


function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        
        document.getElementById("winstracker").innerHTML = "Wins:  " + wins;
        reset()

    } else if (guessesRemaining === 0) {
        losses++;
       
        document.getElementById("losstracker").innerHTML = "Losses: " + losses;
        reset()
    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = "Guesses Left: " + guessesRemaining;
}


// on key up event function - user input
Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
   
    checkLetters(guesses);
    complete();
    console.log(guesses);

    document.getElementById("playerguesses").innerHTML = "Your Guesses:  " + wrongGuess.join(" ");
}
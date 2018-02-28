// // Array of words
 var wordList = ["lebron", "jordan", "forward", "kristaps", "knicks", "warriors", "mavericks", "nets"];

var chosenWord = ""; //empty variable
var lettersinChosenWord = []; //empty array
var numBlanks = 0;
var correctGuess = []; //correct guesses
var wrongGuess = [];

var winCount = 0;
var lossCount = 0;
var numGuesses = 9;


//Functions

function startGame() {
  //randomly select word, split into letters, count the length
  chosenWord = wordList[Math.floor(Math.random()* wordList.length)];
  lettersinChosenWord = chosenWord.split("");
  numBlanks = lettersinChosenWord.length;
    console.log(chosenWord);
    console.log(numBlanks);

  //reset variables on each game
 numGuesses = 9;
 correctGuess = [];
 wrongGuess = [];

      // loop through word and replace with letter
       for (var i=0; i < numBlanks; i++){
          correctGuess.push("_");
       }  
      console.log(correctGuess);

      //print in the html
      document.getElementById("guessesLeft").innerHTML = numGuesses;
      document.getElementById("wordBlanks").innerHTML = correctGuess.join(" ");
      document.getElementById("wrongGuesses").innerHTML = wrongGuess.join(" ");

}

// check if letter exsists in word
function checkLetters(letter) {
    var letterInWord = false;
      for (var i=0; i < numBlanks; i++) {
          if(chosenWord[i] == letter) {
          letterInWord = true;
        }
      }

      if(letterInWord) {
          for (var i =0; i < numBlanks; i++){
                if(chosenWord[i] == letter) {
                  correctGuess[i] = letter;
                }
          } console.log(correctGuess);
      }
      else {
              if(wrongGuess.indexOf(letter)> -1){
                console.log("Letter already guessed");
              } else{
          wrongGuess.push(letter);
          numGuesses--;
        }
      }
}


// game complete function
function gameComplete() {
    // update html to show updates
   document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("wordBlanks").innerHTML = correctGuess.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuess.join(" ");

    // all letters guessed correct
    if (lettersinChosenWord.toString() == correctGuess.toString()) {
          winCount++;
          alert("Yay! Good Job, Click okay to begin another game!");
          document.getElementById("winCounter").innerHTML = winCount;
          startGame();
    }

          else if(numGuesses == 0){
              lossCount++;
              alert("You Lost. Better Luck Next Time");
              document.getElementById("lossCounter").innerHTML = lossCount;
              startGame();
              console.log(lossCount);
              console.log(winCount);
          }
}




//Start game process ---------

document.onkeyup=function(event){
  letterGuessed= String.fromCharCode(event.keyCode).toLowerCase(); 
  checkLetters(letterGuessed); 
  gameComplete();
}


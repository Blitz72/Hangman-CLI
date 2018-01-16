var Letter = require("./Letter.js");
var inquirer = require("inquirer");
var Word = require("./Word.js");

var lives = 10;

function resetGame() {
	var word = new Word;
	var currentWord = word.word;
	console.log(currentWord);
	lives = 10;
	word.printWord();
	askQuestion();
}

var word = new Word;
var letter = new Letter;

var askQuestion = function() {
	if (lives > 0) {
		inquirer
			.prompt([
				{
		      type: "input",
		      message: "Type in a letter:",
		      name: "guess"
		    }
    	])
    	.then(function(answer) {
    		// console.log(answer.guess);
    		if (letter.alphabet.indexOf(answer.guess) >= 0) {
    			console.log("You entered: ", answer.guess);
    			letter.addLetter(answer.guess);
    			word.printWord();
    			// console.log("Letters guessed: ", letter.lettersGuessed);
    		} else {
    			console.log("Please enter a letter!");
    			lives--;
    		}
    		askQuestion();
    	});
	} //else resetGame();
}

word.printWordFull();
askQuestion();
// var currentWord = word.currentWord;
// console.log(currentWord);
// word.printWord();
// word.checkWord();



var Letter = require("./Letter.js");

// var wordList = ["Jean-Luc Picard", "Commander Data", "William Riker", "Geordi LaForge", "USS Enterprise",
// 								"Deanna Troi", "Tasha Yar", "Beverly Crusher", "Miles O'Brien", "Lt. Commander Worf", 
// 								"USS Reliant", "Captain James Tiberias Kirk", "Mr. Spock", "Hikaru Sulu", "Montgomery Scott",
// 								"Leonard McCoy", "Nyota Uhura", "Admiral Pavel Checkov"];

// var indexer = Math.floor(Math.random() * wordList.length);

function Word(wrd) {
	this.word = wrd;
	this.lettersGuessed = [];
	this.found = false;
}

Word.prototype.printWord = function() {
	this.guessedWord = "";
	for (var i = 0; i < this.currentWord.length; i++) {
		var currentLetter = this.currentWord[i];
		console.log(this.lettersGuessed.indexOf(currentLetter));
		if (this.lettersGuessed.indexOf(currentLetter) >= 0) {
			this.guessedWord += currentLetter + " ";
		} else if (currentLetter === " ") {
			this.guessedWord += "  ";
		} else if (this.currentWord[i] === ".") {
			this.guessedWord += ". ";
		} else if (this.currentWord[i] === "'") {
			this.guessedWord += "' ";
		} else if (this.currentWord[i] === "-") {
			this.guessedWord += "- ";
		} else {
			this.guessedWord += "_ ";
		}
	}
	console.log(this.guessedWord);
}

Word.prototype.printWordFull = function() {
	for (var i = 0; i < this.currentWord.length; i++) {
		this.guessedWord += this.currentWord[i] + " ";
	}
}

// Word.prototype.printWord = function(guess) {
// 	for (var i = 0; i < this.currentWord.length; i++) {
// 		if (this.currentWord[i] ===)
// }

module.exports = Word;
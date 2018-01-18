var Letter = require("./Letter.js");

function Word(wrd) {
	this.word = wrd;
	this.letters = [];
	this.found = false;
	this.guessed = [];

	this.isWordFound = function() {
		var counter = 0;
		// console.log(this.letters);
		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].show === true) {
				counter++;
			}
		}
		// console.log("counter: ", counter);
		// console.log("letters.length: ", this.letters.length);
		if (counter === this.letters.length) {
			this.found = true;
		} else {
			this.found = false;
		}
		// console.log("found?: ", this.found);
	}
}

Word.prototype.getLetters = function() {
	for (var i = 0; i < this.word.length; i++) {
		var newLetter = new Letter(this.word[i]);
		this.letters.push(newLetter);
	}
}

Word.prototype.checkLetter = function(guess) {
	var letterFound = false;
	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].letter === guess) {
			this.letters[i].show = true;
			letterFound = true;
		}
	}
	return letterFound;
}

Word.prototype.isWordFound = function() {
	var counter = 0;
	// console.log(this.letters);
	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].show === true) {
			counter++;
		}
	}
	// console.log("counter: ", counter);
	// console.log("letters.length: ", this.letters.length);
	if (counter === this.letters.length) {
		this.found = true;
	} else {
		this.found = false;
	}
	// console.log("found?: ", this.found);
}

Word.prototype.renderWord = function() {
	var guessedWord	= "";
	// console.log(this.letters);
	for (var i = 0; i < this.letters.length; i++) {
		guessedWord	+= this.letters[i].showLetter();
	}
	console.log("\n" + guessedWord + "\n");
}

module.exports = Word;
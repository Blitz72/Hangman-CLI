function Letter(ltr) {
	// this.alphabet = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I",
	// 								"j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R",
	// 								"s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];
	// this.lettersGuessed = [];
	this.letter = ltr;
	this.guessed = false;
	this.checkLetter = function() {
		var char = "";
		if (this.guessed) {
			char = ltr + " ";
		} else {
			char = "_ "
		}
		return char;
	}
}

// Letter.prototype.addLetter = function(guess) {
// 	this.lettersGuessed.push(guess);
// 	this.lettersGuessed.push(guess.toUpperCase());
// }

module.exports = Letter;
	
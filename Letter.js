function Letter(ltr) {
	this.letter = ltr;
	this.show = false;

	this.showLetter = function() {
		if (this.letter === " ") {
			this.show = true;
			return "  ";
		} else if (this.letter === ".") {
			this.show = true;
			return ". ";
		} else if (this.letter === "-") {
			this.show = true;
			return "- ";
		} else if (this.show) {
			return this.letter + " ";
		} else {
			return "_ ";
		}
	}
}

module.exports = Letter;
	
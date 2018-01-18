// var Letter = require("./Letter.js");
var inquirer = require("inquirer");
var Word = require("./Word.js");

var game = {
	wordList: ["CAPTAIN JEAN-LUC PICARD", "COMMANDER DATA", "WILLIAM RIKER", "GEORDI LAFORGE", "U.S.S. ENTERPRISE",
							"DEANNA TROI", "TASHA YAR", "BEVERLY CRUSHER", "LT. COMMANDER WORF", "U.S.S. RELIANT",
							"CAPTAIN JAMES TIBERIAS KIRK", "MR. SPOCK", "HIKARU SULU", "MONTGOMERY SCOTT",
							"LEONARD MCCOY", "NYOTA UHURA", "ADMIRAL PAVEL CHECKOV", "RED SHIRT GUY"],
	lives: 0,
	currentWord: "",

	startGame: function() {
		var wordIndexer = Math.floor(Math.random() * this.wordList.length);
		var randomWord = this.wordList[wordIndexer];
		game.lives = 10;
		game.currentWord = new Word(randomWord);
		game.currentWord.getLetters();
		console.log("\nA long time ago in a galaxy far, far away....");
		console.log("\nWait, NO!...");
		console.log("\nSpace: the final frontier. These are the voyages of the starship Enterprise...");
		console.log("\n                                  __O__");
		console.log("  ____________________     ______/     \\______");
		console.log("  |__\\________________|)   \\_________________/");
		console.log("                   \\ \\     /   /  \\___/");
		console.log("               _____\\_\\___/___/_");
		console.log("              /__               |=|_");
		console.log("                 \\______________|=|\n");

		game.currentWord.renderWord();
		game.askQuestion();
	},

	newGame: function() {
		inquirer
			.prompt([
				{
		      type: "confirm",
		      message: "Do you want to play again?",
		      name: "confirm",
		      default: true
		    }
		  ])
		  .then(function(answer) {
		   	if (answer.confirm) {
		   		game.startGame();
		   	} else {
		   		game.endGame();
		   	}
		  });
	},

	endGame: function() {
		console.log("\nThanks for playing! Live long and prosper.\n");
		return;
	},

	askQuestion: function() {
		inquirer
			.prompt([
				{
			    type: "input",
			    message: "Type in a letter:",
			    name: "guess"
			  }
	    ])
	    .then(function(answer) {
	    	var guess = answer.guess.toUpperCase();
	    	console.log("You guessed: ", guess);
	    	// console.log(game.currentWord.letters);
	    	var found = game.currentWord.checkLetter(guess);
	    	// console.log("letter found? ", found);
	    	game.currentWord.renderWord();
	    	if (!found) {
	    		game.lives--;
	    		if (game.lives === 0) {
	    			console.log("Sorry, the answer was '" + game.currentWord.word + "'");
	    			game.newGame();
	    		} else {
	    			console.log("Try again!");
	    			console.log("Status report: lives = " + game.lives);
	    			game.askQuestion();
	    		}	    		
	    	} else {
	    		console.log("Correct!");
	    		game.currentWord.isWordFound();
	    		if (game.currentWord.found) {
	    			console.log("\nYou won!\n");
	    			game.newGame();
	    		} else {
	    			game.askQuestion();
	    		}
	    	}	    	
	    });
	}
}

game.startGame();



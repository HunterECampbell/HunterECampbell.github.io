var main = function() {

	$("#RPS").click(function() {
		var userChoice = prompt("This game is awesome! Do you choose ROCK, PAPER, or SCISSORS?");
		var computerChoice = Math.random();

		if (computerChoice <= 0.33) {
			computerChoice = "rock";
		}
		else if (computerChoice <= 0.66) {
			computerChoice = "paper";
		}
		else {
			computerChoice = "scissors";
		}
		confirm("Computer: " + computerChoice);

		var compare = function(choice1, choice2) {
		if (choice1 === choice2) {
			return confirm("The result is a tie... I hate ties!");
		}
		else if (choice1 === "rock") {
			if (choice2 === "scissors") {
				return confirm("You win because rock beats scissors!");    
			}
			else {
				return confirm("I win because paper beats rock!");    
			}
		}
		else if (choice1 === "paper") {
			if (choice2 === "rock") {
				return confirm("You win because paper beats rock!");    
			}
			else {
				return confirm("I win because scissors beats paper!");    
			}
		}
		else if (choice1 === "scissors") {
			if (choice2 === "paper") {
				return confirm("You win because scissors beats paper!");    
			}
			else {
				return confirm("I win because rock beats scissors!");    
			}
		}
		else {
			alert("I'm sorry, I don't recognize your response.  I win by default!");
		}
	};
	compare(userChoice, computerChoice);
	});		
};

$(document).ready(main);
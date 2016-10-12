var main = function() {
	var quit = function() {
		$("#RPS").one("click", function() {
			$("#RPSuserimg").delay(500).animate({"margin-left": '+=-8.2em'}, 0).css("z-index", "5");
			$("#RPScompimg").delay(500).animate({"margin-left": '+=8.2em'}, 0).css("z-index", "5");
		});
	};
	var tiequit = function() {
		$("#RPS").one("click", function() {
			$("#RPSuserimg").delay(500).animate({"margin-left": '+=-3.7em'}, 0).css("z-index", "5");
			$("#RPScompimg").delay(500).animate({"margin-left": '+=3.7em'}, 0).css("z-index", "5");
		});
	};
	
	$("#RPS").one("click", function() {
		
		var userChoice = "";
		$("#RPSrock").click(function() {
			userChoice = "rock";
			$("#RPSuserimg").css({"background": "url('https://hcnureth.github.io/Images/Portfolio Pics/Rocks.jpg') no-repeat center center fixed", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale')", "-ms-filter": "'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')'", "background-attachment": "scroll"});
			$("#RPS1").hide();
		});
		$("#RPSpaper").click(function() {
			userChoice = "paper";
			$("#RPSuserimg").css({"background": "url('https://hcnureth.github.io/Images/Portfolio Pics/Paper.jpg') no-repeat center center fixed", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale')", "-ms-filter": "'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')'", "background-attachment": "scroll"});
			$("#RPS1").hide();
		});
		$("#RPSscissors").click(function() {
			userChoice = "scissors";
			$("#RPSuserimg").css({"background": "url('https://hcnureth.github.io/Images/Portfolio Pics/Scissors.jpg') no-repeat center center fixed", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale')", "-ms-filter": "'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')'", "background-attachment": "scroll"});
			$("#RPS1").hide();
		});
		
		$(".RPSbtn").click(function() {
		var computerChoice = Math.random();

		if (computerChoice <= 0.33) {
			computerChoice = "rock";
			$("#RPScompimg").css({"background": "url('https://hcnureth.github.io/Images/Portfolio Pics/Rocks.jpg') no-repeat center center fixed", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale')", "-ms-filter": "'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')'", "background-attachment": "scroll"});
		}
		else if (computerChoice <= 0.66) {
			computerChoice = "paper";
			$("#RPScompimg").css({"background": "url('https://hcnureth.github.io/Images/Portfolio Pics/Paper.jpg') no-repeat center center fixed", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale')", "-ms-filter": "'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')'", "background-attachment": "scroll"});
		}
		else {
			computerChoice = "scissors";
			$("#RPScompimg").css({"background": "url('https://hcnureth.github.io/Images/Portfolio Pics/Scissors.jpg') no-repeat center center fixed", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale')", "-ms-filter": "'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')'", "background-attachment": "scroll"});
		}

		var compare = function(choice1, choice2) {
		if (choice1 === choice2) {
			$("#RPSuserimg").delay(750).animate({"margin-left": '+=3.7em'}, 600);
			$("#RPScompimg").delay(750).animate({"margin-left": '+=-3.7em'}, 600);
			$("#RPS2 h2").text("Tie!");
			tiequit();
		}
		else if (choice1 === "rock") {
			if (choice2 === "scissors") {
				$("#RPSuserimg").delay(750).animate({"margin-left": '+=8.2em'}, 1000);
				$("#RPSuserimg").css({"position": "relative", "z-index": "8"});
				$("#RPScompimg").delay(750).animate({"margin-left": '+=-8.2em'}, 1000);
				$("#RPS2 h2").text("You Win!");
				$("#RPSuserchoice").text("Rock");
				$("#RPSuserchoice").text("Scissors");
			}
			else {
				$("#RPSuserimg").delay(750).animate({"margin-left": '+=8.2em'}, 1000);
				$("#RPScompimg").css({"position": "relative", "z-index": "8"});
				$("#RPScompimg").delay(750).animate({"margin-left": '+=-8.2em'}, 1000);
				$("#RPS2 h2").text("Computer Wins!");
				$("#RPSuserchoice").text("Scissors");
				$("#RPSuserchoice").text("Rock");
			};
			quit();
		}
		else if (choice1 === "paper") {
			if (choice2 === "rock") {
				$("#RPSuserimg").delay(750).animate({"margin-left": '+=8.2em'}, 1000);
				$("#RPSuserimg").css({"position": "relative", "z-index": "8"});
				$("#RPScompimg").delay(750).animate({"margin-left": '+=-8.2em'}, 1000); 
				$("#RPS2 h2").text("You Win!"); 
				$("#RPSuserchoice").text("Paper");
				$("#RPSuserchoice").text("Rock");
			}
			else {
				$("#RPSuserimg").delay(750).animate({"margin-left": '+=8.2em'}, 1000);
				$("#RPScompimg").css({"position": "relative", "z-index": "8"});
				$("#RPScompimg").delay(750).animate({"margin-left": '+=-8.2em'}, 1000);  
				$("#RPS2 h2").text("Computer Wins!"); 
				$("#RPSuserchoice").text("Rock");
				$("#RPSuserchoice").text("Paper");
			};
			quit();
		}
		else if (choice1 === "scissors") {
			if (choice2 === "paper") {
				$("#RPSuserimg").delay(750).animate({"margin-left": '+=8.2em'}, 1000);
				$("#RPSuserimg").css({"position": "relative", "z-index": "8"});
				$("#RPScompimg").delay(750).animate({"margin-left": '+=-8.2em'}, 1000); 
				$("#RPS2 h2").text("You Win!");
				$("#RPSuserchoice").text("Scissors");
				$("#RPSuserchoice").text("Paper");
			}
			else {
				$("#RPSuserimg").delay(750).animate({"margin-left": '+=8.2em'}, 1000);
				$("#RPScompimg").css({"position": "relative", "z-index": "8"});
				$("#RPScompimg").delay(750).animate({"margin-left": '+=-8.2em'}, 1000); 
				$("#RPS2 h2").text("Computer Wins!");
				$("#RPSuserchoice").text("Paper");
				$("#RPSuserchoice").text("Scissors");
			};
			quit();
		};
	};
	compare(userChoice, computerChoice);
	});	
	});
};

$(document).ready(main);

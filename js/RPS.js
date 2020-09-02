var main = function() {
	var quit = function() {
		$("#replay").one("click", function() {
			$("#row2").show();
			$("#row3").hide();
			$("#row1p1").text("Do you choose Rock, Paper, or Scissors?").css("color", "black");
			$("#row1p2").text("Click the picture you choose.");
		});
	};
	var tiequit = function() {
		$("#replay").one("click", function() {
			$("#row2").show();
			$("#row3").hide();
			$("#row1p1").text("Do you choose Rock, Paper, or Scissors?").css("color", "black");
			$("#row1p2").text("Click the picture you choose.");
		});
	};
	
	$("#row3").hide();
		
		var userChoice = "";
		$("#rock").click(function() {
			userChoice = "rock";
			$("#userchoice").css({"background": "url('https://HunterECampbell.github.io/Images/RPS Pics/rock.jpg') no-repeat center center fixed", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale')", "-ms-filter": "'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')'", "background-attachment": "scroll"});
			$("#row2").hide();
			$("#row3").show();
		});
		$("#paper").click(function() {
			userChoice = "paper";
			$("#userchoice").css({"background": "url('https://HunterECampbell.github.io/Images/RPS Pics/paper.jpg') no-repeat center center fixed", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale')", "-ms-filter": "'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')'", "background-attachment": "scroll"});
			$("#row2").hide();
			$("#row3").show();
		});
		$("#scissors").click(function() {
			userChoice = "scissors";
			$("#userchoice").css({"background": "url('https://HunterECampbell.github.io/Images/RPS Pics/scissors.jpg') no-repeat center center fixed", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale')", "-ms-filter": "'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')'", "background-attachment": "scroll"});
			$("#row2").hide();
			$("#row3").show();
		});
		
		$(".images1").click(function() {
		var computerChoice = Math.random();

		if (computerChoice <= 0.33) {
			computerChoice = "rock";
			$("#compchoice").css({"background": "url('https://HunterECampbell.github.io/Images/RPS Pics/rock.jpg') no-repeat center center fixed", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale')", "-ms-filter": "'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')'", "background-attachment": "scroll"});
		}
		else if (computerChoice <= 0.66) {
			computerChoice = "paper";
			$("#compchoice").css({"background": "url('https://HunterECampbell.github.io/Images/RPS Pics/paper.jpg') no-repeat center center fixed", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale')", "-ms-filter": "'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')'", "background-attachment": "scroll"});
		}
		else {
			computerChoice = "scissors";
			$("#compchoice").css({"background": "url('https://HunterECampbell.github.io/Images/RPS Pics/scissors.jpg') no-repeat center center fixed", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale')", "-ms-filter": "'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')'", "background-attachment": "scroll"});
		}

		var compare = function(choice1, choice2) {
		if (choice1 === choice2) {
			$("#row1p1").text("Tie!");
			$("#row1p2").text("");
			tiequit();
		}
		else if (choice1 === "rock") {
			if (choice2 === "scissors") {
				$("#row1p1").text("You Win!").css("color", "limegreen");
				$("#row1p2").text("Rock beats scissors.");
				$(".images1userchoice").text("Rock");
				$(".images1userchoice").text("Scissors");
			}
			else {
				$("#row1p1").text("You Lose.").css("color", "red");
				$("#row1p2").text("paper beats rock.");
				$(".images1userchoice").text("Scissors");
				$(".images1userchoice").text("Rock");
			};
			quit();
		}
		else if (choice1 === "paper") {
			if (choice2 === "rock") {
				$("#row1p1").text("You Win!").css("color", "limegreen"); 
				$("#row1p2").text("Paper beats rock.");
				$(".images1userchoice").text("Paper");
				$(".images1userchoice").text("Rock");
			}
			else { 
				$("#row1p1").text("You Lose.").css("color", "red");
				$("#row1p2").text("Scissors beats paper.");
				$(".images1userchoice").text("Rock");
				$(".images1userchoice").text("Paper");
			};
			quit();
		}
		else if (choice1 === "scissors") {
			if (choice2 === "paper") {
				$("#row1p1").text("You Win!").css("color", "limegreen");
				$("#row1p2").text("Scissors beats paper.");
				$(".images1userchoice").text("Scissors");
				$(".images1userchoice").text("Paper");
			}
			else {
				$("#row1p1").text("You Lose.").css("color", "red");
				$("#row1p2").text("Rock beats scissors.");
				$(".images1userchoice").text("Paper");
				$(".images1userchoice").text("Scissors");
			};
			quit();
		};
	};
	compare(userChoice, computerChoice);
	});	
};

$(document).ready(main);

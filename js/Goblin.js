var main = function() {
	$("#goblin").click(function() {
		var user = prompt("You see a goblin carrying a pouch of gold.  Do you FIGHT him, STEAL the pouch from him, or do NOTHING?").toUpperCase();
    
    while (user !== 'FIGHT' && user !== 'STEAL' && user !== 'NOTHING') {
      user = prompt("I don't recognize that response.  Do you FIGHT him, STEAL the pouch from him, or do NOTHING?").toUpperCase();
    }

		switch(user) {
			case "FIGHT":
				var strong = prompt("Are you strong? (YES or NO)").toUpperCase();
				var injured = prompt("Are you injured?").toUpperCase();
				if (strong === "YES" && injured === "YES") {
					confirm("The battle somehow goes in your favor!  You hit the goblin's dagger out of his hand and quickly cut off his head.  You pick up your trophy -- the pouch of gold -- and yell a victory cry to the world!");    
				}
				else if (strong === "YES" && injured === "NO")
					confirm("You easily overpower the goblin with your brute strength by slicing off its head!  You then pick up your trophy -- the pouch of gold -- and yell a victory cry to the world!");
				else if (strong === "NO" && injured === "YES") {
					confirm("You cripple!  Why would you make such an unwise choice!? The goblin ran you through with his dagger and got away with the pouch of gold.");    
				}
				else if (strong === "NO" && injured === "NO") {
					confirm("You are too weak to beat the goblin who cuts your arm open.  You are now injured and the goblin gets away with the pouch of gold.");    
				}
				else {
					confirm("I don't recognize your response.  By your lack of communication, the goblin gets away with the gold.");
				};
				break;
			case "STEAL":
				var swift = prompt("Are you swift? (YES or NO)").toUpperCase();
				var stealthy = prompt("Are you stealthy?").toUpperCase();
				if (swift === "YES" && stealthy === "YES") {
					confirm("You are very skilled when it comes to stealing things.  Without the goblin noticing your presence or that the pouch of gold is gone, you run off with the gold in hand!");    
				}
				else if (swift === "YES" && stealthy === "NO") {
					confirm("The goblin notices your theft, but because of how swift you are, you get away with the gold!");    
				}
				else if (swift === "NO" && stealthy === "YES") {
					confirm("You take your time, but because of your patience, the goblin doesn't notice you and you get away with the pouch of gold!");    
				}
				else if (swift === "NO" && stealthy === "NO") {
					confirm("What!?  You have no theft skills at all!  The goblin notices you and hits you to the ground!  He quickly runs off without a trace, and you lose the pouch of gold.");
				}
				else {
					confirm("I don't recognize your response.  By your lack of communication, the goblin gets away with the gold.");
				};
				break;
			case "NOTHING":
				var blind = prompt("Are you blind? (YES or NO)").toUpperCase();
				var care = prompt("Do you care about the gold?").toUpperCase();
				if (blind === "YES" && care === "NO") {
					confirm("You must be a blind old nomad.  The goblin gets away with the pouch of gold.");    
				}
				else if (blind === "YES" && care === "YES") {
					confirm("Because of your blindness you can't tell that the goblin has a pouch of gold and the goblin gets away with the gold that you so dearly desire.");    
				}
				else if (blind === "NO" && care === "YES") {
					confirm("You might as well be blind, because you clearly didn't notice the pouch of gold that the goblin has!  The goblin gets away with the gold without you noticing.");    
				}
				else if (blind === "NO" && care === "NO") {
					confirm("You must be very rich and don't need the gold or you are a coward who doesn't like to go on adventures...");
				}
				else {
					confirm("I don't recognize your response.  By your lack of communication, the goblin gets away with the gold.");
				};
				break;
			default:
        break
			};
	});
};

$(document).ready(main);
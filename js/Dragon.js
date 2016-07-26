var main = function() {
	$("#dragon").click(function() {
		var slaying = true;
		var youHit = Math.floor(Math.random() * 2);
		var damageThisRound = Math.floor(Math.random() * 5 + 1);
		var totalDamage = 0;
		var userChoice = prompt("You see a dragon in a cave guarding some gold.  If you choose to fight, you cannot back down.  When fighting, it's do or die... Do you want to fight it?  YES or NO").toUpperCase();

		if (userChoice === "YES") {
			confirm("You courageously attack the dragon!")
			while(slaying) {
				if (youHit === 1) {
					confirm("As you heroicly fight the dragon, you bravely hit the dragon causing " + damageThisRound + " damage!");
					totalDamage += damageThisRound;
					confirm("You have caused a total of " + totalDamage + " damage!");
					if (totalDamage >= 4) {
						confirm("With your last attack, you strike with an exceedingly brave hit and the dragon falls to the ground -- dead!  You loot a sum of 1,000,000,000 gold!");
						slaying = false;
					}
					else {
						youHit = Math.floor(Math.random() * 2);
					};
				}
				else {
					confirm("During your battle with the dragon, it overpowers you and destroys you...");
					slaying = false;
				};
			};
		}
		else if (userChoice === "NO") {
			confirm("You choose to not fight the dragon and you live to fight another day.");
		}
		else {
			confirm("You have an unknown response.  The dragon notices you and quickly flies out of the cave and devours you!");
		};
	});
};

$(document).ready(main);
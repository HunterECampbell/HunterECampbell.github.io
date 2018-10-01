var main = function() {
	//Calculates the creation dates in the header
	var creation = new Date(2018,8,4);  //2018,8,4
	var today = new Date();
	var dif = Math.floor(today.getTime() - creation.getTime());
	var dayDif = Math.floor(dif/(1000*60*60*24));
	var monthDif = Math.floor(dayDif/30.416666666666666666);
	var yearDif = Math.floor(monthDif/12);
	
	//Updates the creation dates in the header
	dayDif = Math.floor(dayDif%30.416666666666666666);
	monthDif = Math.floor(monthDif%12);
	$("#creation").html("Created: September 4, 2018<br><br>Time Since Creation:<br>Years: " + yearDif + " Months: " + monthDif + " Days: " + dayDif);
	
	
	//Updates coin amount
	$("#bank").click(function() {
		var coins = prompt("Enter New Coin Amount:");
		$("#bank").text("Coins: " + coins);
	});
	
	
	//Code for the add item section
	//Hiding and Showing the items box
	$("#itemsBox").hide();
	$("#favItems, #itemsValue").click(function() {
		$("#itemsBox").show();
	});
	
	//Getting Input from items box
	var itemsTotalValue = 0,
		itemValue;
	$("#itemsValue").text("Total Value: $" + itemsTotalValue);
	$("#itemSubmit").click(function() {
		var itemName = $("#itemName").val();
		itemValue = parseInt($("#itemValue").val());
		$("#favItems").append("<div>" + itemName + " - $" + itemValue + "</div>");
		$("#itemName").val("");
		itemsTotalValue += parseInt($("#itemValue").val());
		$("#itemsValue").text("Total Value: $" + itemsTotalValue);
		$("#itemValue").val("");
		$("#itemsBox").hide();
	});
	$("#itemCancel").click(function() {
		$("#itemName").val("");
		$("#itemValue").val("");
		$("#itemsBox").hide();
	});
	
	
	//Code for the add quest section
	//Hiding and Showing the quest box
	$("#questsBox").hide();
	$("#quests *").click(function() {
		$("#questsBox").show();
	});
	
	//Getting input from quests box
	$("#questSubmit").click(function() {
		var questName = $("#questName").val(),
			questNotes = $("#questNotes").val();
		$("#questList").append("<div>" + questName + " - " + questNotes + "</div>");
		$("#questName").val("");
		$("#questNotes").val("");
		$("#questsBox").hide();
	});
	$("#questCancel").click(function() {
		$("#questName").val("");
		$("#questNotes").val("");
		$("#questsBox").hide();
	});
	
	
	//Code for the add friends section
	//Hiding and Showing the friends box
	$("#friendsBox").hide();
	$("#right *").click(function() {
		$("#friendsBox").show();
	});
	
	//Getting input from friends box
	$("#friendSubmit").click(function() {
		$("#friendsBox").show();
		var friendName = $("#friendName").val(),
			friendNotes = $("#friendNotes").val();
		//Getting checkbox input
		if($("#bestFriend").prop("checked") == true) {
			$("#friendList").append("<div style='color: yellow;'>" + friendName + " - " + friendNotes + "</div>");
		}
		else if($("#bestFriend").prop("checked") == false) {
			$("#friendList").append("<div>" + friendName + " - " + friendNotes + "</div>");
		}
		$("#friendName").val("");
		$("#friendNotes").val("");
		$("#bestFriend").prop("checked", false);
		$("#friendsBox").hide();
		
	});
	$("#friendCancel").click(function() {
		$("#friendName").val("");
		$("#friendNotes").val("");
		$("#bestFriend").prop("checked", false);
		$("#friendsBox").hide();
	});
	
	
	//Skills
		//Left Skills
	var attack = 1,
		strength = 1,
		defense = 1,
		ranged = 1,
		prayer = 1,
		magic = 1,
		runecrafting = 1,
		construction = 1,
		//Middle Skills
		hitpoints = 1,
		agility = 1,
		herblore = 1,
		thieving = 1,
		crafting = 1,
		fletching = 1,
		slayer = 1,
		hunter = 1,
		//Right Skills
		mining = 1,
		smithing = 1,
		fishing = 1,
		cooking = 1,
		firemaking = 1,
		woodcutting = 1,
		farming = 1,
		totalLeft,
		totalMiddle,
		totalRight,
		totalLvl,
		totalCalc = function() {
			totalLeft = attack + strength + defense + ranged + prayer + magic + runecrafting + construction;
			totalMiddle = hitpoints + agility + herblore + thieving + crafting + fletching + slayer + hunter;
			totalRight = mining + smithing + fishing + cooking + firemaking + woodcutting + farming;
			totalLvl = totalLeft + totalMiddle + totalRight;
		};
		totalCalc();
		
	//Left Skills
	$("#attack").text(attack);
	$("#strength").text(strength);
	$("#defense").text(defense);
	$("#ranged").text(ranged);
	$("#prayer").text(prayer);
	$("#magic").text(magic);
	$("#runecrafting").text(runecrafting);
	$("#construction").text(construction);
	//Middle Skills
	$("#hitpoints").text(hitpoints);
	$("#agility").text(agility);
	$("#herblore").text(herblore);
	$("#thieving").text(thieving);
	$("#crafting").text(crafting);
	$("#fletching").text(fletching);
	$("#slayer").text(slayer);
	$("#hunter").text(hunter);
	//Right Skills
	$("#mining").text(mining);
	$("#smithing").text(smithing);
	$("#fishing").text(fishing);
	$("#cooking").text(cooking);
	$("#firemaking").text(firemaking);
	$("#woodcutting").text(woodcutting);
	$("#farming").text(farming);
	$("#totalLvl").text("Total Level: " + totalLvl);
	
	//Calculating Skills Updates
	//Left Skills
	//Attack
	$("#attack2 .plus").click(function() {
		if(attack < 99) {
			attack += 1;
			$("#attack").text(attack);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#attack2 .minus").click(function() {
		if(attack > 1) {
			attack -= 1;
			$("#attack").text(attack);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Strength
	$("#strength2 .plus").click(function() {
		if(strength < 99) {
			strength += 1;
			$("#strength").text(strength);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#strength2 .minus").click(function() {
		if(strength > 1) {
			strength -= 1;
			$("#strength").text(strength);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Defense
	$("#defense2 .plus").click(function() {
		if(defense < 99) {
			defense += 1;
			$("#defense").text(defense);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#defense2 .minus").click(function() {
		if(defense > 1) {
			defense -= 1;
			$("#defense").text(defense);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Ranged
	$("#ranged2 .plus").click(function() {
		if(ranged < 99) {
			ranged += 1;
			$("#ranged").text(ranged);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#ranged2 .minus").click(function() {
		if(ranged > 1) {
			ranged -= 1;
			$("#ranged").text(ranged);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Prayer
	$("#prayer2 .plus").click(function() {
		if(prayer < 99) {
			prayer += 1;
			$("#prayer").text(prayer);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#prayer2 .minus").click(function() {
		if(prayer > 1) {
			prayer -= 1;
			$("#prayer").text(prayer);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Magic
	$("#magic2 .plus").click(function() {
		if(magic < 99) {
			magic += 1;
			$("#magic").text(magic);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#magic2 .minus").click(function() {
		if(magic > 1) {
			magic -= 1;
			$("#magic").text(magic);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Runecrafting
	$("#runecrafting2 .plus").click(function() {
		if(runecrafting < 99) {
			runecrafting += 1;
			$("#runecrafting").text(runecrafting);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#runecrafting2 .minus").click(function() {
		if(runecrafting > 1) {
			runecrafting -= 1;
			$("#runecrafting").text(runecrafting);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Construction
	$("#construction2 .plus").click(function() {
		if(construction < 99) {
			construction += 1;
			$("#construction").text(construction);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#construction2 .minus").click(function() {
		if(construction > 1) {
			construction -= 1;
			$("#construction").text(construction);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	
	//Middle Skills
	//Hitpoints
	$("#hitpoints2 .plus").click(function() {
		if(hitpoints < 99) {
			hitpoints += 1;
			$("#hitpoints").text(hitpoints);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#hitpoints2 .minus").click(function() {
		if(hitpoints > 1) {
			hitpoints -= 1;
			$("#hitpoints").text(hitpoints);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Agility
	$("#agility2 .plus").click(function() {
		if(agility < 99) {
			agility += 1;
			$("#agility").text(agility);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#agility2 .minus").click(function() {
		if(agility > 1) {
			agility -= 1;
			$("#agility").text(agility);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Herblore
	$("#herblore2 .plus").click(function() {
		if(herblore < 99) {
			herblore += 1;
			$("#herblore").text(herblore);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#herblore2 .minus").click(function() {
		if(herblore > 1) {
			herblore -= 1;
			$("#herblore").text(herblore);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Thieving
	$("#thieving2 .plus").click(function() {
		if(thieving < 99) {
			thieving += 1;
			$("#thieving").text(thieving);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#thieving2 .minus").click(function() {
		if(thieving > 1) {
			thieving -= 1;
			$("#thieving").text(thieving);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Crafting
	$("#crafting2 .plus").click(function() {
		if(crafting < 99) {
			crafting += 1;
			$("#crafting").text(crafting);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#crafting2 .minus").click(function() {
		if(crafting > 1) {
			crafting -= 1;
			$("#crafting").text(crafting);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Fletching
	$("#fletching2 .plus").click(function() {
		if(fletching < 99) {
			fletching += 1;
			$("#fletching").text(fletching);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#fletching2 .minus").click(function() {
		if(fletching > 1) {
			fletching -= 1;
			$("#fletching").text(fletching);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Slayer
	$("#slayer2 .plus").click(function() {
		if(slayer < 99) {
			slayer += 1;
			$("#slayer").text(slayer);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#slayer2 .minus").click(function() {
		if(slayer > 1) {
			slayer -= 1;
			$("#slayer").text(slayer);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Hunter
	$("#hunter2 .plus").click(function() {
		if(hunter < 99) {
			hunter += 1;
			$("#hunter").text(hunter);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#hunter2 .minus").click(function() {
		if(hunter > 1) {
			hunter -= 1;
			$("#hunter").text(hunter);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	
	//Right Skills
	//Mining
	$("#mining2 .plus").click(function() {
		if(mining < 99) {
			mining += 1;
			$("#mining").text(mining);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#mining2 .minus").click(function() {
		if(mining > 1) {
			mining -= 1;
			$("#mining").text(mining);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Smithing
	$("#smithing2 .plus").click(function() {
		if(smithing < 99) {
			smithing += 1;
			$("#smithing").text(smithing);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#smithing2 .minus").click(function() {
		if(smithing > 1) {
			smithing -= 1;
			$("#smithing").text(smithing);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Fishing
	$("#fishing2 .plus").click(function() {
		if(fishing < 99) {
			fishing += 1;
			$("#fishing").text(fishing);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#fishing2 .minus").click(function() {
		if(fishing > 1) {
			fishing -= 1;
			$("#fishing").text(fishing);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Cooking
	$("#cooking2 .plus").click(function() {
		if(cooking < 99) {
			cooking += 1;
			$("#cooking").text(cooking);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#cooking2 .minus").click(function() {
		if(cooking > 1) {
			cooking -= 1;
			$("#cooking").text(cooking);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Firemaking
	$("#firemaking2 .plus").click(function() {
		if(firemaking < 99) {
			firemaking += 1;
			$("#firemaking").text(firemaking);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#firemaking2 .minus").click(function() {
		if(firemaking > 1) {
			firemaking -= 1;
			$("#firemaking").text(firemaking);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Woodcutting
	$("#woodcutting2 .plus").click(function() {
		if(woodcutting < 99) {
			woodcutting += 1;
			$("#woodcutting").text(woodcutting);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#woodcutting2 .minus").click(function() {
		if(woodcutting > 1) {
			woodcutting -= 1;
			$("#woodcutting").text(woodcutting);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	//Farming
	$("#farming2 .plus").click(function() {
		if(farming < 99) {
			farming += 1;
			$("#farming").text(farming);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
	$("#farming2 .minus").click(function() {
		if(farming > 1) {
			farming -= 1;
			$("#farming").text(farming);
			totalCalc();
			$("#totalLvl").text("Total Level: " + totalLvl);
		}
	});
			
		
	//$("#title").click(function() {alert(totalLvl);});
}

$(document).ready(main);
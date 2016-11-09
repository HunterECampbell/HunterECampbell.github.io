
/*Need to add cosmic currency img!!!!!*/


var main = function() {
	//Total calculations.
	var total = 1; 
	var commaSeparateNumber = function(val) {
		while (/(\d+)(\d{3})/.test(val.toString())) {
			val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
		}
		return val;
	}
	
	//Numbers
	var telescope = 0;
	var telescopeCost = 1;
	$("#telescopeBtn").text("Cost: " + commaSeparateNumber(telescopeCost));
	
	var spaceRock = 0;
	var spaceRockCost = 50;
	$("#rockBtn").text("Cost: " + commaSeparateNumber(spaceRockCost));
	
	var spaceSuit = 0;
	var spaceSuitCost = 500;
	$("#suitBtn").text("Cost: " + commaSeparateNumber(spaceSuitCost));
	
	var spaceShip = 0;
	var spaceShipCost = 5000;
	$("#shipBtn").text("Cost: " + commaSeparateNumber(spaceShipCost));
	
	var satellite = 0;
	var satelliteCost = 20000;
	$("#satelliteBtn").text("Cost: " + commaSeparateNumber(satelliteCost));
	
	var meteor = 0;
	var meteorCost = 75000;
	$("#meteorBtn").text("Cost: " + commaSeparateNumber(meteorCost));
	
	var moon = 0;
	var moonCost = 150000;
	$("#moonBtn").text("Cost: " + commaSeparateNumber(moonCost));
	
	var planet = 0;
	var planetCost = 300000;
	$("#planetBtn").text("Cost: " + commaSeparateNumber(planetCost));
	
	var sun = 0;
	var sunCost = 600000;
	$("#sunBtn").text("Cost: " + commaSeparateNumber(sunCost));
	
	var blackHole = 0;
	var blackHoleCost = 1000000;
	$("#blackBtn").text("Cost: " + commaSeparateNumber(blackHoleCost));
	
	var darkMatter = 0;
	var darkMatterCost = 2500000;
	$("#darkBtn").text("Cost: " + commaSeparateNumber(darkMatterCost));
	
	var solarSystem = 0;
	var solarSystemCost = 5000000;
	$("#solarBtn").text("Cost: " + commaSeparateNumber(solarSystemCost));
	
	var galaxy = 0;
	var galaxyCost = 10000000;
	$("#galaxyBtn").text("Cost: " + commaSeparateNumber(galaxyCost));
	
	var universe = 0;
	var universeCost = 50000000;
	$("#universeBtn").text("Cost: " + commaSeparateNumber(universeCost));
	
	
	//Investing Part
	var btnUpdate = function() {
		if(total >= telescopeCost) {
			$("#telescopeBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < telescopeCost) {
			$("#telescopeBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= telescopeCostm) {
			$("#telescopeBtnm").css("background-color", "#cc00cc");
		}
		if(total < telescopeCostm) {
			$("#telescopeBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= spaceRockCost) {
			$("#rockBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < spaceRockCost) {
			$("#rockBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= spaceRockCostm) {
			$("#rockBtnm").css("background-color", "#cc00cc");
		}
		if(total < spaceRockCostm) {
			$("#rockBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= spaceSuitCost) {
			$("#suitBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < spaceSuitCost) {
			$("#suitBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= spaceSuitCostm) {
			$("#suitBtnm").css("background-color", "#cc00cc");
		}
		if(total < spaceSuitCostm) {
			$("#suitBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= spaceShipCost) {
			$("#shipBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < spaceShipCost) {
			$("#shipBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= spaceShipCostm) {
			$("#shipBtnm").css("background-color", "#cc00cc");
		}
		if(total < spaceShipCostm) {
			$("#shipBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= satelliteCost) {
			$("#satelliteBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < satelliteCost) {
			$("#satelliteBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= satelliteCostm) {
			$("#satelliteBtnm").css("background-color", "#cc00cc");
		}
		if(total < satelliteCostm) {
			$("#satelliteBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= meteorCost) {
			$("#meteorBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < meteorCost) {
			$("#meteorBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= meteorCostm) {
			$("#meteorBtnm").css("background-color", "#cc00cc");
		}
		if(total < meteorCostm) {
			$("#meteorBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= moonCost) {
			$("#moonBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < moonCost) {
			$("#moonBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= moonCostm) {
			$("#moonBtnm").css("background-color", "#cc00cc");
		}
		if(total < moonCostm) {
			$("#moonBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= planetCost) {
			$("#planetBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < planetCost) {
			$("#planetBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= planetCostm) {
			$("#planetBtnm").css("background-color", "#cc00cc");
		}
		if(total < planetCostm) {
			$("#planetBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= sunCost) {
			$("#sunBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < sunCost) {
			$("#sunBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= sunCostm) {
			$("#sunBtnm").css("background-color", "#cc00cc");
		}
		if(total < sunCostm) {
			$("#sunBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= blackHoleCost) {
			$("#blackBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < blackHoleCost) {
			$("#blackBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= blackHoleCostm) {
			$("#blackBtnm").css("background-color", "#cc00cc");
		}
		if(total < blackHoleCostm) {
			$("#blackBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= darkMatterCost) {
			$("#darkBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < darkMatterCost) {
			$("#darkBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= darkMatterCostm) {
			$("#darkBtnm").css("background-color", "#cc00cc");
		}
		if(total < darkMatterCostm) {
			$("#darkBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= solarSystemCost) {
			$("#solarBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < solarSystemCost) {
			$("#solarBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= solarSystemCostm) {
			$("#solarBtnm").css("background-color", "#cc00cc");
		}
		if(total < solarSystemCostm) {
			$("#solarBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= galaxyCost) {
			$("#galaxyBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < galaxyCost) {
			$("#galaxyBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= galaxyCostm) {
			$("#galaxyBtnm").css("background-color", "#cc00cc");
		}
		if(total < galaxyCostm) {
			$("#galaxyBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= universeCost) {
			$("#universeBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total < universeCost) {
			$("#universeBtn").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		if(total >= universeCostm) {
			$("#universeBtnm").css("background-color", "#cc00cc");
		}
		if(total < universeCostm) {
			$("#universeBtnm").css("background-color", "rgba(255,255,255,.15)");
			$("#managers").css("background-color", "rgba(255,255,255,.35)");
		}
		managersAlert();
	};
	
	var pUpdate = function() {
		if(total >= telescopeCost) {
			$("#telescopeBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= telescopeCostm) {
			$("#telescopeBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= spaceRockCost) {
			$("#rockBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= spaceRockCostm) {
			$("#rockBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= spaceSuitCost) {
			$("#suitBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= spaceSuitCostm) {
			$("#suitBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= spaceShipCost) {
			$("#shipBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= spaceShipCostm) {
			$("#shipBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= satelliteCost) {
			$("#satelliteBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= satelliteCostm) {
			$("#satelliteBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= meteorCost) {
			$("#meteorBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= meteorCostm) {
			$("#meteorBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= moonCost) {
			$("#moonBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= moonCostm) {
			$("#moonBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= planetCost) {
			$("#planetBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= planetCostm) {
			$("#planetBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= sunCost) {
			$("#sunBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= sunCostm) {
			$("#sunBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= blackHoleCost) {
			$("#blackBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= blackHoleCostm) {
			$("#blackBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= darkMatterCost) {
			$("#darkBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= darkMatterCostm) {
			$("#darkBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= solarSystemCost) {
			$("#solarBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= solarSystemCostm) {
			$("#solarBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= galaxyCost) {
			$("#galaxyBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= galaxyCostm) {
			$("#galaxyBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= universeCost) {
			$("#universeBtn").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= universeCostm) {
			$("#universeBtnm").css("background-color", "#cc00cc");
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
	};
	
	
	var managersAvailable1 = 0;
	var managersAvailable2 = 0;
	var managersAvailable3 = 0;
	var managersAvailable4 = 0;
	var managersAvailable5 = 0;
	var managersAvailable6 = 0;
	var managersAvailable7 = 0;
	var managersAvailable8 = 0;
	var managersAvailable9 = 0;
	var managersAvailable10 = 0;
	var managersAvailable11 = 0;
	var managersAvailable12 = 0;
	var managersAvailable13 = 0;
	var managersAvailable14 = 0;
	
	var managersAlert = function() {
		if(total >= telescopeCostm) {
			managersAvailable1++;
			if(managersAvailable1 === 1) {
				$("#telescopemAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < telescopeCostm) {
			managersAvailable1 = 0;
		}
		if(total >= spaceRockCostm) {
			managersAvailable2++;
			if(managersAvailable2 === 1) {
				$("#rockmAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < spaceRockCostm) {
			managersAvailable2 = 0;
		}
		if(total >= spaceSuitCostm) {
			managersAvailable3++;
			if(managersAvailable3 === 1) {
				$("#suitmAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < spaceSuitCostm) {
			managersAvailable3 = 0;
		}
		if(total >= spaceShipCostm) {
			managersAvailable4++;
			if(managersAvailable4 === 1) {
				$("#shipmAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < spaceShipCostm) {
			managersAvailable4 = 0;
		}
		if(total >= satelliteCostm) {
			managersAvailable5++;
			if(managersAvailable5 === 1) {
				$("#satellitemAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < satelliteCostm) {
			managersAvailable5 = 0;
		}
		if(total >= meteorCostm) {
			managersAvailable6++;
			if(managersAvailable6 === 1) {
				$("#meteormAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < meteorCostm) {
			managersAvailable6 = 0;
		}
		if(total >= moonCostm) {
			managersAvailable7++;
			if(managersAvailable7 === 1) {
				$("#moonmAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < moonCostm) {
			managersAvailable7 = 0;
		}
		if(total >= planetCostm) {
			managersAvailable8++;
			if(managersAvailable8 === 1) {
				$("#planetmAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < planetCostm) {
			managersAvailable8 = 0;
		}
		if(total >= sunCostm) {
			managersAvailable9++;
			if(managersAvailable9 === 1) {
				$("#sunmAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < sunCostm) {
			managersAvailable9 = 0;
		}
		if(total >= blackHoleCostm) {
			managersAvailable10++;
			if(managersAvailable10 === 1) {
				$("#blackmAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < blackHoleCostm) {
			managersAvailable10 = 0;
		}
		if(total >= darkMatterCostm) {
			managersAvailable11++;
			if(managersAvailable11 === 1) {
				$("#darkmAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < darkMatterCostm) {
			managersAvailable11 = 0;
		}
		if(total >= solarSystemCostm) {
			managersAvailable12++;
			if(managersAvailable12 === 1) {
				$("#solarmAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < solarSystemCostm) {
			managersAvailable12 = 0;
		}
		if(total >= galaxyCostm) {
			managersAvailable13++;
			if(managersAvailable13 === 1) {
				$("#galaxymAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < galaxyCostm) {
			managersAvailable13 = 0;
		}
		if(total >= universeCostm) {
			managersAvailable14++;
			if(managersAvailable14 === 1) {
				$("#universemAvailable").show().animate({"margin-top": "-=1.25em"}, 1500).fadeOut().animate({"margin-top": "+=1.25em"}, 0);
			}
		}
		if(total < universeCostm) {
			managersAvailable14 = 0;
		}
	};
	
	//Update manager's btn color
	var managerBtnUpdate = function() {
		if(total >= telescopeCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= spaceRockCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= spaceSuitCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= spaceShipCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= satelliteCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= meteorCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= moonCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= planetCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= sunCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= blackHoleCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= darkMatterCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= solarSystemCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= galaxyCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
		if(total >= universeCostm) {
			$("#managers").css("background-color", "rgba(51,51,51,.8)");
		}
	};
	
	$("body").click(function() {
		managersAlert();
	});
	
	//Telescope
	if(total >= telescopeCost) {
		$("#telescopeBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#telescopeBtn").click(function() {
		if(total >= telescopeCost) {
			$("#telescopeBtn").fadeOut(100).fadeIn(100);
			total = total - telescopeCost;
			telescope++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(telescope > 0) {
			telescopeCost = Math.pow(telescope, 2);
			$("#telescopep").css("background-color", "rgba(102,0,102,.75)");
			if(total < telescopeCost) {
				$("#telescopeBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		if(telescope >= 5) {
			telescopeCost = telescopeCost + (telescope * 2);
			if(total < telescopeCost) {
				$("#telescopeBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#telescopeBtn").text("Cost: " + commaSeparateNumber(telescopeCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#telescopep").text("Telescope: " + commaSeparateNumber(telescope));
	});
	//Calculates increase to total
	$("#telescopep").click(function() {
		if(telescope > 0) {
			$("#telescopep").fadeOut(100).fadeIn(100);
			total = total + telescope;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + telescope).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Space Rock
	if(total >= spaceRockCost) {
		$("#rockBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#rockBtn").click(function() {
		if(total >= spaceRockCost) {
			$("#rockBtn").fadeOut(100).fadeIn(100);
			total = total - spaceRockCost;
			spaceRock++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(spaceRock > 0) {
			spaceRockCost = 50 + Math.pow(spaceRock * 3, 2);
			$("#rockp").css("background-color", "rgba(102,0,102,.75)");
			if(total < spaceRockCost) {
				$("#rockBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#rockBtn").text("Cost: " + commaSeparateNumber(spaceRockCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#rockp").text("Space Rock: " + commaSeparateNumber(spaceRock));
	});
	//Calculates increase to total
	$("#rockp").click(function() {
		if(spaceRock > 0) {
			$("#rockp").fadeOut(100).fadeIn(100);
			total = total + spaceRock * 3;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + spaceRock * 3).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Space Suit
	if(total >= spaceSuitCost) {
		$("#suitBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#suitBtn").click(function() {
		if(total >= spaceSuitCost) {
			$("#suitBtn").fadeOut(100).fadeIn(100);
			total = total - spaceSuitCost;
			spaceSuit++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(spaceSuit > 0) {
			spaceSuitCost = 500 + Math.pow(spaceSuit * 7, 2);
			$("#suitp").css("background-color", "rgba(102,0,102,.75)");
			if(total < spaceSuitCost) {
				$("#suitBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#suitBtn").text("Cost: " + commaSeparateNumber(spaceSuitCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#suitp").text("Space Suit: " + commaSeparateNumber(spaceSuit));
	});
	//Calculates increase to total
	$("#suitp").click(function() {
		if(spaceSuit > 0) {
			$("#suitp").fadeOut(100).fadeIn(100);
			total = total + spaceSuit * 7;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + spaceSuit * 7).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Space Ship
	if(total >= spaceShipCost) {
		$("#shipBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#shipBtn").click(function() {
		if(total >= spaceShipCost) {
			$("#shipBtn").fadeOut(100).fadeIn(100);
			total = total - spaceShipCost;
			spaceShip++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(spaceShip > 0) {
			spaceShipCost = 5000 + Math.pow(spaceShip * 15, 2);
			$("#shipp").css("background-color", "rgba(102,0,102,.75)");
			if(total < spaceShipCost) {
				$("#shipBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#shipBtn").text("Cost: " + commaSeparateNumber(spaceShipCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#shipp").text("Space Ship: " + commaSeparateNumber(spaceShip));
	});
	//Calculates increase to total
	$("#shipp").click(function() {
		if(spaceShip > 0) {
			$("#shipp").fadeOut(100).fadeIn(100);
			total = total + spaceShip * 15;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + spaceShip * 15).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Satellite
	if(total >= satelliteCost) {
		$("#satelliteBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#satelliteBtn").click(function() {
		if(total >= satelliteCost) {
			$("#satelliteBtn").fadeOut(100).fadeIn(100);
			total = total - satelliteCost;
			satellite++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(satellite > 0) {
			satelliteCost = 20000 + Math.pow(satellite * 25, 2);
			$("#satellitep").css("background-color", "rgba(102,0,102,.75)");
			if(total < satelliteCost) {
				$("#satelliteBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#satelliteBtn").text("Cost: " + commaSeparateNumber(satelliteCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#satellitep").text("Satellite: " + commaSeparateNumber(satellite));
	});
	//Calculates increase to total
	$("#satellitep").click(function() {
		if(satellite > 0) {
			$("#satellitep").fadeOut(100).fadeIn(100);
			total = total + satellite * 25;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + satellite * 25).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Meteor
	if(total >= meteorCost) {
		$("#meteorBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#meteorBtn").click(function() {
		if(total >= meteorCost) {
			$("#meteorBtn").fadeOut(100).fadeIn(100);
			total = total - meteorCost;
			meteor++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(meteor > 0) {
			meteorCost = 75000 + Math.pow(meteor * 45, 2);
			$("#meteorp").css("background-color", "rgba(102,0,102,.75)");
			if(total < meteorCost) {
				$("#meteorBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#meteorBtn").text("Cost: " + commaSeparateNumber(meteorCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#meteorp").text("Meteor: " + commaSeparateNumber(meteor));
	});
	//Calculates increase to total
	$("#meteorp").click(function() {
		if(meteor > 0) {
			$("#meteorp").fadeOut(100).fadeIn(100);
			total = total + meteor * 45;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + meteor * 45).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Moon
	if(total >= moonCost) {
		$("#moonBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#moonBtn").click(function() {
		if(total >= moonCost) {
			$("#moonBtn").fadeOut(100).fadeIn(100);
			total = total - moonCost;
			moon++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(moon > 0) {
			moonCost = 150000 + Math.pow(moon * 85, 2);
			$("#moonp").css("background-color", "rgba(102,0,102,.75)");
			if(total < moonCost) {
				$("#moonBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#moonBtn").text("Cost: " + commaSeparateNumber(moonCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#moonp").text("Moon: " + commaSeparateNumber(moon));
	});
	//Calculates increase to total
	$("#moonp").click(function() {
		if(moon > 0) {
			$("#moonp").fadeOut(100).fadeIn(100);
			total = total + moon * 85;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + moon * 85).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Planet
	if(total >= planetCost) {
		$("#planetBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#planetBtn").click(function() {
		if(total >= planetCost) {
			$("#planetBtn").fadeOut(100).fadeIn(100);
			total = total - planetCost;
			planet++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(planet > 0) {
			planetCost = 300000 + Math.pow(planet * 165, 2);
			$("#planetp").css("background-color", "rgba(102,0,102,.75)");
			if(total < planetCost) {
				$("#planetBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#planetBtn").text("Cost: " + commaSeparateNumber(planetCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#planetp").text("Planet: " + commaSeparateNumber(planet));
	});
	//Calculates increase to total
	$("#planetp").click(function() {
		if(planet > 0) {
			$("#planetp").fadeOut(100).fadeIn(100);
			total = total + planet * 165;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + planet * 165).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Sun
	if(total >= sunCost) {
		$("#sunBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#sunBtn").click(function() {
		if(total >= sunCost) {
			$("#sunBtn").fadeOut(100).fadeIn(100);
			total = total - sunCost;
			sun++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(sun > 0) {
			sunCost = 600000 + Math.pow(sun * 270, 2);
			$("#sunp").css("background-color", "rgba(102,0,102,.75)");
			if(total < sunCost) {
				$("#sunBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#sunBtn").text("Cost: " + commaSeparateNumber(sunCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#sunp").text("Sun: " + commaSeparateNumber(sun));
	});
	//Calculates increase to total
	$("#sunp").click(function() {
		if(sun > 0) {
			$("#sunp").fadeOut(100).fadeIn(100);
			total = total + sun * 270;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + sun * 270).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Black Hole
	if(total >= blackHoleCost) {
		$("#blackBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#blackBtn").click(function() {
		if(total >= blackHoleCost) {
			$("#blackBtn").fadeOut(100).fadeIn(100);
			total = total - blackHoleCost;
			blackHole++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(blackHole > 0) {
			blackHoleCost = 1000000 + Math.pow(blackHole * 620, 2);
			$("#blackp").css("background-color", "rgba(102,0,102,.75)");
			if(total < blackHoleCost) {
				$("#blackBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#blackBtn").text("Cost: " + commaSeparateNumber(blackHoleCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#blackp").text("Black Hole: " + commaSeparateNumber(blackHole));
	});
	//Calculates increase to total
	$("#blackp").click(function() {
		if(blackHole > 0) {
			$("#blackp").fadeOut(100).fadeIn(100);
			total = total + blackHole * 620;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + blackHole * 620).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Dark Matter
	if(total >= darkMatterCost) {
		$("#darkBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#darkBtn").click(function() {
		if(total >= darkMatterCost) {
			$("#darkBtn").fadeOut(100).fadeIn(100);
			total = total - darkMatterCost;
			darkMatter++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(darkMatter > 0) {
			darkMatterCost = 2500000 + Math.pow(darkMatter * 1180, 2);
			$("#darkp").css("background-color", "rgba(102,0,102,.75)");
			if(total < darkMatterCost) {
				$("#darkBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#darkBtn").text("Cost: " + commaSeparateNumber(darkMatterCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#darkp").text("Dark Matter: " + commaSeparateNumber(darkMatter));
	});
	//Calculates increase to total
	$("#darkp").click(function() {
		if(darkMatter > 0) {
			$("#darkp").fadeOut(100).fadeIn(100);
			total = total + darkMatter * 1180;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + darkMatter * 1180).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Solar System
	if(total >= solarSystemCost) {
		$("#solarBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#solarBtn").click(function() {
		if(total >= solarSystemCost) {
			$("#solarBtn").fadeOut(100).fadeIn(100);
			total = total - solarSystemCost;
			solarSystem++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(solarSystem > 0) {
			solarSystemCost = 5000000 + Math.pow(solarSystem * 2250, 2);
			$("#solarp").css("background-color", "rgba(102,0,102,.75)");
			if(total < solarSystemCost) {
				$("#solarBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#solarBtn").text("Cost: " + commaSeparateNumber(solarSystemCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#solarp").text("Solar System: " + commaSeparateNumber(solarSystem));
	});
	//Calculates increase to total
	$("#solarp").click(function() {
		if(solarSystem > 0) {
			$("#solarp").fadeOut(100).fadeIn(100);
			total = total + solarSystem * 2250;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + solarSystem * 2250).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Galaxy
	if(total >= galaxyCost) {
		$("#galaxyBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#galaxyBtn").click(function() {
		if(total >= galaxyCost) {
			$("#galaxyBtn").fadeOut(100).fadeIn(100);
			total = total - galaxyCost;
			galaxy++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(galaxy > 0) {
			galaxyCost = 10000000 + Math.pow(galaxy * 5000, 2);
			$("#galaxyp").css("background-color", "rgba(102,0,102,.75)");
			if(total < galaxyCost) {
				$("#galaxyBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#galaxyBtn").text("Cost: " + commaSeparateNumber(galaxyCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#galaxyp").text("Galaxy: " + commaSeparateNumber(galaxy));
	});
	//Calculates increase to total
	$("#galaxyp").click(function() {
		if(galaxy > 0) {
			$("#galaxyp").fadeOut(100).fadeIn(100);
			total = total + galaxy * 10000;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + galaxy * 10000).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	//Universe
	if(total >= universeCost) {
		$("#universeBtn").css("background-color", "rgba(51,51,51,.8)");
	}
	$("#universeBtn").click(function() {
		if(total >= universeCost) {
			$("#universeBtn").fadeOut(100).fadeIn(100);
			total = total - universeCost;
			universe++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates cost increase
		if(universe > 0) {
			universeCost = 50000000 + Math.pow(universe * 10000, 2);
			$("#universep").css("background-color", "rgba(102,0,102,.75)");
			if(total < universeCost) {
				$("#universeBtn").css("background-color", "rgba(255,255,255,.15)");
			}
		}
		$("#universeBtn").text("Cost: " + commaSeparateNumber(universeCost));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#universep").text("Universe: " + commaSeparateNumber(universe));
	});
	//Calculates increase to total
	$("#universep").click(function() {
		if(universe > 0) {
			$("#universep").fadeOut(100).fadeIn(100);
			total = total + universe * 150000;
			$("#totalNum").text(commaSeparateNumber(total));
			$("#clickNum").text("+" + universe * 150000).show().animate({"margin-top": '-=.5em'}, 250).fadeOut().animate({"margin-top": '+=.5em'}, 0);
		}
		pUpdate();
	});
	
	$("#universeBtn").click(function() {
	if(universe === 1) {
		$("#win").show();
	}
	$("#continue").click(function() {
		$("#universem").show();
		$("#win").hide();
		$("#reset2").show();
	});
	$(".reset").click(function() {
		total = 1;
		$("#totalNum").text(commaSeparateNumber(total));
		telescope = 0;
		$("#telescopep").text("Telescope: 0");
		telescopeCost = 1;
		$("#telescopeBtn").text("Cost: " + commaSeparateNumber(telescopeCost));
		telescopem = 0;
		$("#telescopepm").text("Telescope: 0");
		telescopeCostm = 50;
		$("#telescopeBtn").text("Cost: " + commaSeparateNumber(telescopeCost));
		spaceRock = 0;
		$("#rockp").text("Space Rock: 0");
		spaceRockCost = 50;
		$("#rockBtn").text("Cost: " + commaSeparateNumber(spaceRockCost));
		spaceRockm = 0;
		$("#rockpm").text("Space Rock: 0");
		spaceRockCostm = 500;
		$("#rockBtnm").text("Cost: " + commaSeparateNumber(spaceRockCostm));
		spaceSuit = 0;
		$("#suitp").text("Space Suit: 0");
		spaceSuitCost = 500;
		$("#suitBtn").text("Cost: " + commaSeparateNumber(spaceSuitCost));
		spaceSuitm = 0;
		$("#suitpm").text("Space Suit: 0");
		spaceSuitCostm = 5000;
		$("#suitBtnm").text("Cost: " + commaSeparateNumber(spaceSuitCostm));
		spaceShip = 0;
		$("#shipp").text("Space Ship: 0");
		spaceShipCost = 5000;
		$("#shipBtn").text("Cost: " + commaSeparateNumber(spaceShipCost));
		spaceShipm = 0;
		$("#shippm").text("Space Ship: 0");
		spaceShipCostm = 20000;
		$("#shipBtnm").text("Cost: " + commaSeparateNumber(spaceShipCostm));
		satellite = 0;
		$("#satellitep").text("Satellite: 0");
		satelliteCost = 20000;
		$("#satelliteBtn").text("Cost: " + commaSeparateNumber(satelliteCost));
		satellitem = 0;
		$("#satellitepm").text("Satellite: 0");
		satelliteCostm = 75000;
		$("#satelliteBtnm").text("Cost: " + commaSeparateNumber(satelliteCostm));
		meteor = 0;
		$("#meteorp").text("Meteor: 0");
		meteorCost = 75000;
		$("#meteorBtn").text("Cost: " + commaSeparateNumber(meteorCost));
		meteorm = 0;
		$("#meteorpm").text("Meteor: 0");
		meteorCostm = 150000;
		$("#meteorBtnm").text("Cost: " + commaSeparateNumber(meteorCostm));
		moon = 0;
		$("#moonp").text("Moon: 0");
		moonCost = 150000;
		$("#moonBtn").text("Cost: " + commaSeparateNumber(moonCost));
		moonm = 0;
		$("#moonpm").text("Moon: 0");
		moonCostm = 300000;
		$("#moonBtnm").text("Cost: " + commaSeparateNumber(moonCostm));
		planet = 0;
		$("#planetp").text("Planet: 0");
		planetCost = 300000;
		$("#planetBtn").text("Cost: " + commaSeparateNumber(planetCost));
		planetm = 0;
		$("#planetpm").text("Planet: 0");
		planetCostm = 600000;
		$("#planetBtnm").text("Cost: " + commaSeparateNumber(planetCostm));
		sun = 0;
		$("#sunp").text("Sun: 0");
		sunCost = 600000;
		$("#sunBtn").text("Cost: " + commaSeparateNumber(sunCost));
		sunm = 0;
		$("#sunpm").text("Sun: 0");
		sunCostm = 1000000;
		$("#sunBtnm").text("Cost: " + commaSeparateNumber(sunCostm));
		blackHole = 0;
		$("#blackp").text("Black Hole: 0");
		blackHoleCost = 1000000;
		$("#blackBtn").text("Cost: " + commaSeparateNumber(blackHoleCost));
		blackHolem = 0;
		$("#blackpm").text("Black Hole: 0");
		blackHoleCostm = 2500000;
		$("#blackBtnm").text("Cost: " + commaSeparateNumber(blackHoleCostm));
		darkMatter = 0;
		$("#darkp").text("Dark Matter: 0");
		darkMatterCost = 2500000;
		$("#darkBtn").text("Cost: " + commaSeparateNumber(darkMatterCost));
		darkMatterm = 0;
		$("#darkpm").text("Dark Matter: 0");
		darkMatterCostm = 5000000;
		$("#darkBtnm").text("Cost: " + commaSeparateNumber(darkMatterCostm));
		solarSystem = 0;
		$("#solarp").text("Solar System: 0");
		solarSystemCost = 5000000;
		$("#solarBtn").text("Cost: " + commaSeparateNumber(solarSystemCost));
		solarSystemm = 0;
		$("#solarpm").text("Solar System: 0");
		solarSystemCostm = 10000000;
		$("#solarBtnm").text("Cost: " + commaSeparateNumber(solarSystemCostm));
		galaxy = 0;
		$("#galaxyp").text("Galaxy: 0");
		galaxyCost = 10000000;
		$("#galaxyBtn").text("Cost: " + commaSeparateNumber(galaxyCost));
		galaxym = 0;
		$("#galaxypm").text("Galaxy: 0");
		galaxyCostm = 100000000;
		$("#galaxyBtnm").text("Cost: " + commaSeparateNumber(galaxyCostm));
		universe = 0;
		$("#universep").text("Universe: 0");
		universeCost = 100000000;
		$("#universeBtn").text("Cost: " + commaSeparateNumber(universeCost));
		universem = 0;
		$("#universepm").text("Universe: 0");
		universeCostm = 500000000;
		$("#universeBtnm").text("Cost: " + commaSeparateNumber(universeCostm));
		$(".itemp").css("background-color", "rgba(102,0,102,.25)");
		$(".btns").css("background-color", "rgba(255,255,255,.15)");
		$("#telescopeBtn").css("background-color", "rgba(51,51,51,.8)");
		$("#win").hide();
		$("#reset2").hide();
		$("#universem").hide();
	});
	});
	
	
	//Managers
	var managersBtn = 0;
	$("#managers").click(function() {
		managersBtn++;
		if(managersBtn === 1) {
			$("#managersdiv").show();
		}
		if(managersBtn === 0) {
			$("#managersdiv").hide();
			managersBtn = 0;
		}
		if(managersBtn > 1) {
			$("#managersdiv").hide();
			managersBtn = 0;
		}
	});
	$("#exit").click(function() {
		$("#managersdiv").hide();
		managersBtn = 0;
	});
	$(document).click(function() {
		$("#managersdiv").hide();
		managersBtn = 0;
	});
	$("#managersdiv, #managers").click(function(e) {
		e.stopPropagation();
	});
	
	var telescopem = 0;
	var telescopeCostm = 50;
	$("#telescopeBtnm").text("Cost: " + commaSeparateNumber(telescopeCostm));
	
	var spaceRockm = 0;
	var spaceRockCostm = 500;
	$("#rockBtnm").text("Cost: " + commaSeparateNumber(spaceRockCostm));
	
	var spaceSuitm = 0;
	var spaceSuitCostm = 5000;
	$("#suitBtnm").text("Cost: " + commaSeparateNumber(spaceSuitCostm));
	
	var spaceShipm = 0;
	var spaceShipCostm = 20000;
	$("#shipBtnm").text("Cost: " + commaSeparateNumber(spaceShipCostm));
	
	var satellitem = 0;
	var satelliteCostm = 75000;
	$("#satelliteBtnm").text("Cost: " + commaSeparateNumber(satelliteCostm));
	
	var meteorm = 0;
	var meteorCostm = 150000;
	$("#meteorBtnm").text("Cost: " + commaSeparateNumber(meteorCostm));
	
	var moonm = 0;
	var moonCostm = 300000;
	$("#moonBtnm").text("Cost: " + commaSeparateNumber(moonCostm));
	
	var planetm = 0;
	var planetCostm = 600000;
	$("#planetBtnm").text("Cost: " + commaSeparateNumber(planetCostm));
	
	var sunm = 0;
	var sunCostm = 1000000;
	$("#sunBtnm").text("Cost: " + commaSeparateNumber(sunCostm));
	
	var blackHolem = 0;
	var blackHoleCostm = 2500000;
	$("#blackBtnm").text("Cost: " + commaSeparateNumber(blackHoleCostm));
	
	var darkMatterm = 0;
	var darkMatterCostm = 5000000;
	$("#darkBtnm").text("Cost: " + commaSeparateNumber(darkMatterCostm));
	
	var solarSystemm = 0;
	var solarSystemCostm = 10000000;
	$("#solarBtnm").text("Cost: " + commaSeparateNumber(solarSystemCostm));
	
	var galaxym = 0;
	var galaxyCostm = 50000000;
	$("#galaxyBtnm").text("Cost: " + commaSeparateNumber(galaxyCostm));
	
	var universem = 0;
	var universeCostm = 100000000;
	$("#universeBtnm").text("Cost: " + commaSeparateNumber(universeCostm));
	
	
	//Telescope Manager
	if(total >= telescopeCostm) {
		$("#telescopeBtnm").css("background-color", "#cc00cc");
	}
	var autoClickTelescope = function() {
		total = total + telescope * 1;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#telescopeBtnm").click(function() {
		if(total >= telescopeCostm) {
			$("#telescopeBtnm").fadeOut(100).fadeIn(100);
			total = total - telescopeCostm;
			telescopem++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(telescopem > 0) {
			telescopeCostm = 50 + Math.pow(telescopem * 3, 2);
			$("#telescopepm").css("background-color", "#cc00cc");
			if(total < telescopeCostm) {
				$("#telescopeBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickTelescope, 1000);
		}
		$("#telescopeBtnm").text("Cost: " + commaSeparateNumber(telescopeCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#telescopepm").text("Telescope: " + commaSeparateNumber(telescopem));
		if(telescopem >= 5) {
			telescopeCostm = Infinity;
			$("#telescopeBtnm").text("Maxed Out!").fadeOut(function() {
				$("#telescopeBtnm2").show();
				$("#telescopepm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#telescopem").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Space Rock Manager
	if(total >= spaceRockCostm) {
		$("#rockBtnm").css("background-color", "#cc00cc");
	}
	var autoClickSpaceRock = function() {
		total = total + spaceRock * 3;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#rockBtnm").click(function() {
		if(total >= spaceRockCostm) {
			$("#rockBtnm").fadeOut(100).fadeIn(100);
			total = total - spaceRockCostm;
			spaceRockm++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(spaceRockm > 0) {
			spaceRockCostm = 500 + Math.pow(spaceRockm * 7, 2);
			$("#rockpm").css("background-color", "#cc00cc");
			if(total < spaceRockCostm) {
				$("#rockBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickSpaceRock, 1000);
		}
		$("#rockBtnm").text("Cost: " + commaSeparateNumber(spaceRockCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#rockpm").text("Space Rock: " + commaSeparateNumber(spaceRockm));
		if(spaceRockm >= 5) {
			spaceRockCostm = Infinity;
			$("#rockBtnm").text("Maxed Out!").fadeOut(function() {
				$("#rockBtnm2").show();
				$("#rockpm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#spaceRockm").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Space Suit Manager
	if(total >= spaceSuitCostm) {
		$("#suitBtnm").css("background-color", "#cc00cc");
	}
	var autoClickSpaceSuit = function() {
		total = total + spaceSuit * 7;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#suitBtnm").click(function() {
		if(total >= spaceSuitCostm) {
			$("#suitBtnm").fadeOut(100).fadeIn(100);
			total = total - spaceSuitCostm;
			spaceSuitm++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(spaceSuitm > 0) {
			spaceSuitCostm = 5000 + Math.pow(spaceSuitm * 15, 2);
			$("#suitpm").css("background-color", "#cc00cc");
			if(total < spaceSuitCostm) {
				$("#suitBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickSpaceSuit, 1000);
		}
		$("#suitBtnm").text("Cost: " + commaSeparateNumber(spaceSuitCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#suitpm").text("Space Suit: " + commaSeparateNumber(spaceSuitm));
		if(spaceSuitm >= 5) {
			spaceSuitCostm = Infinity;
			$("#suitBtnm").text("Maxed Out!").fadeOut(function() {
				$("#suitBtnm2").show();
				$("#suitpm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#spaceSuitm").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Space Ship Manager
	if(total >= spaceShipCostm) {
		$("#shipBtnm").css("background-color", "#cc00cc");
	}
	var autoClickSpaceShip = function() {
		total = total + spaceShip * 15;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#shipBtnm").click(function() {
		if(total >= spaceShipCostm) {
			$("#shipBtnm").fadeOut(100).fadeIn(100);
			total = total - spaceShipCostm;
			spaceShipm++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(spaceShipm > 0) {
			spaceShipCostm = 20000 + Math.pow(spaceShipm * 25, 2);
			$("#shippm").css("background-color", "#cc00cc");
			if(total < spaceShipCostm) {
				$("#shipBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickSpaceShip, 1000);
		}
		$("#shipBtnm").text("Cost: " + commaSeparateNumber(spaceShipCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#shippm").text("Space Ship: " + commaSeparateNumber(spaceShipm));
		if(spaceShipm >= 5) {
			spaceShipCostm = Infinity;
			$("#shipBtnm").text("Maxed Out!").fadeOut(function() {
				$("#shipBtnm2").show();
				$("#shippm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#spaceShipm").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Satellite Manager
	if(total >= satelliteCostm) {
		$("#satelliteBtnm").css("background-color", "#cc00cc");
	}
	var autoClickSatellite = function() {
		total = total + satellite * 25;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#satelliteBtnm").click(function() {
		if(total >= satelliteCostm) {
			$("#satelliteBtnm").fadeOut(100).fadeIn(100);
			total = total - satelliteCostm;
			satellitem++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(satellitem > 0) {
			satelliteCostm = 75000 + Math.pow(satellitem * 45, 2);
			$("#satellitepm").css("background-color", "#cc00cc");
			if(total < satelliteCostm) {
				$("#satelliteBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickSatellite, 1000);
		}
		$("#satelliteBtnm").text("Cost: " + commaSeparateNumber(satelliteCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#satellitepm").text("Satellite: " + commaSeparateNumber(satellitem));
		if(satellitem >= 5) {
			satelliteCostm = Infinity;
			$("#satelliteBtnm").text("Maxed Out!").fadeOut(function() {
				$("#satelliteBtnm2").show();
				$("#satellitepm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#satellitem").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Meteor Manager
	if(total >= meteorCostm) {
		$("#meteorBtnm").css("background-color", "#cc00cc");
	}
	var autoClickMeteor = function() {
		total = total + meteor * 45;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#meteorBtnm").click(function() {
		if(total >= meteorCostm) {
			$("#meteorBtnm").fadeOut(100).fadeIn(100);
			total = total - meteorCostm;
			meteorm++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(meteorm > 0) {
			meteorCostm = 150000 + Math.pow(meteorm * 85, 2);
			$("#meteorpm").css("background-color", "#cc00cc");
			if(total < meteorCostm) {
				$("#meteorBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickMeteor, 1000);
		}
		$("#meteorBtnm").text("Cost: " + commaSeparateNumber(meteorCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#meteorpm").text("Meteor: " + commaSeparateNumber(meteorm));
		if(meteorm >= 5) {
			meteorCostm = Infinity;
			$("#meteorBtnm").text("Maxed Out!").fadeOut(function() {
				$("#meteorBtnm2").show();
				$("#meteorpm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#meteorm").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Moon Manager
	if(total >= moonCostm) {
		$("#moonBtnm").css("background-color", "#cc00cc");
	}
	var autoClickMoon = function() {
		total = total + moon * 85;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#moonBtnm").click(function() {
		if(total >= moonCostm) {
			$("#moonBtnm").fadeOut(100).fadeIn(100);
			total = total - moonCostm;
			moonm++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(moonm > 0) {
			moonCostm = 300000 + Math.pow(moonm * 165, 2);
			$("#moonpm").css("background-color", "#cc00cc");
			if(total < moonCostm) {
				$("#moonBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickMoon, 1000);
		}
		$("#moonBtnm").text("Cost: " + commaSeparateNumber(moonCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#moonpm").text("Moon: " + commaSeparateNumber(moonm));
		if(moonm >= 5) {
			moonCostm = Infinity;
			$("#moonBtnm").text("Maxed Out!").fadeOut(function() {
				$("#moonBtnm2").show();
				$("#moonpm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#moonm").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Planet Manager
	if(total >= planetCostm) {
		$("#planetBtnm").css("background-color", "#cc00cc");
	}
	var autoClickPlanet = function() {
		total = total + planet * 165;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#planetBtnm").click(function() {
		if(total >= planetCostm) {
			$("#planetBtnm").fadeOut(100).fadeIn(100);
			total = total - planetCostm;
			planetm++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(planetm > 0) {
			planetCostm = 600000 + Math.pow(planetm * 270, 2);
			$("#planetpm").css("background-color", "#cc00cc");
			if(total < planetCostm) {
				$("#planetBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickPlanet, 1000);
		}
		$("#planetBtnm").text("Cost: " + commaSeparateNumber(planetCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#planetpm").text("Planet: " + commaSeparateNumber(planetm));
		if(planetm >= 5) {
			planetCostm = Infinity;
			$("#planetBtnm").text("Maxed Out!").fadeOut(function() {
				$("#planetBtnm2").show();
				$("#planetpm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#planetm").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Sun Manager
	if(total >= sunCostm) {
		$("#sunBtnm").css("background-color", "#cc00cc");
	}
	var autoClickSun = function() {
		total = total + sun * 270;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#sunBtnm").click(function() {
		if(total >= sunCostm) {
			$("#sunBtnm").fadeOut(100).fadeIn(100);
			total = total - sunCostm;
			sunm++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(sunm > 0) {
			sunCostm = 1000000 + Math.pow(sunm * 620, 2);
			$("#sunpm").css("background-color", "#cc00cc");
			if(total < sunCostm) {
				$("#sunBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickSun, 1000);
		}
		$("#sunBtnm").text("Cost: " + commaSeparateNumber(sunCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#sunpm").text("Sun: " + commaSeparateNumber(sunm));
		if(sunm >= 5) {
			sunCostm = Infinity;
			$("#sunBtnm").text("Maxed Out!").fadeOut(function() {
				$("#sunBtnm2").show();
				$("#sunpm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#sunm").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Black Hole Manager
	if(total >= blackHoleCostm) {
		$("#blackBtnm").css("background-color", "#cc00cc");
	}
	var autoClickBlackHole = function() {
		total = total + blackHole * 620;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#blackBtnm").click(function() {
		if(total >= blackHoleCostm) {
			$("#blackBtnm").fadeOut(100).fadeIn(100);
			total = total - blackHoleCostm;
			blackHolem++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(blackHolem > 0) {
			blackHoleCostm = 2500000 + Math.pow(blackHolem * 1180, 2);
			$("#blackpm").css("background-color", "#cc00cc");
			if(total < blackHoleCostm) {
				$("#blackBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickBlackHole, 1000);
		}
		$("#blackBtnm").text("Cost: " + commaSeparateNumber(blackHoleCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#blackpm").text("Black Hole: " + commaSeparateNumber(blackHolem));
		if(blackHolem >= 5) {
			blackHoleCostm = Infinity;
			$("#blackBtnm").text("Maxed Out!").fadeOut(function() {
				$("#blackBtnm2").show();
				$("#blackpm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#blackHolem").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Dark Matter Manager
	if(total >= darkMatterCostm) {
		$("#darkBtnm").css("background-color", "#cc00cc");
	}
	var autoClickDarkMatter = function() {
		total = total + darkMatter * 1180;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#darkBtnm").click(function() {
		if(total >= darkMatterCostm) {
			$("#darkBtnm").fadeOut(100).fadeIn(100);
			total = total - darkMatterCostm;
			darkMatterm++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(darkMatterm > 0) {
			darkMatterCostm = 5000000 + Math.pow(darkMatterm * 2250, 2);
			$("#darkpm").css("background-color", "#cc00cc");
			if(total < darkMatterCostm) {
				$("#darkBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickDarkMatter, 1000);
		}
		$("#darkBtnm").text("Cost: " + commaSeparateNumber(darkMatterCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#darkpm").text("Dark Matter: " + commaSeparateNumber(darkMatterm));
		if(darkMatterm >= 5) {
			darkMatterCostm = Infinity;
			$("#darkBtnm").text("Maxed Out!").fadeOut(function() {
				$("#darkBtnm2").show();
				$("#darkpm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#darkMatterm").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Solar System Manager
	if(total >= solarSystemCostm) {
		$("#solarBtnm").css("background-color", "#cc00cc");
	}
	var autoClickSolarSystem = function() {
		total = total + solarSystem * 2250;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#solarBtnm").click(function() {
		if(total >= solarSystemCostm) {
			$("#solarBtnm").fadeOut(100).fadeIn(100);
			total = total - solarSystemCostm;
			solarSystemm++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(solarSystemm > 0) {
			solarSystemCostm = 10000000 + Math.pow(solarSystemm * 5000, 2);
			$("#solarpm").css("background-color", "#cc00cc");
			if(total < solarSystemCostm) {
				$("#solarBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickSolarSystem, 1000);
		}
		$("#solarBtnm").text("Cost: " + commaSeparateNumber(solarSystemCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#solarpm").text("Solar System: " + commaSeparateNumber(solarSystemm));
		if(solarSystemm >= 5) {
			solarSystemCostm = Infinity;
			$("#solarBtnm").text("Maxed Out!").fadeOut(function() {
				$("#solarBtnm2").show();
				$("#solarpm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#solarSystemm").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Galaxy Manager
	if(total >= galaxyCostm) {
		$("#galaxyBtnm").css("background-color", "#cc00cc");
	}
	var autoClickGalaxy = function() {
		total = total + galaxy * 10000;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#galaxyBtnm").click(function() {
		if(total >= galaxyCostm) {
			$("#galaxyBtnm").fadeOut(100).fadeIn(100);
			total = total - galaxyCostm;
			galaxym++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(galaxym > 0) {
			galaxyCostm = 50000000 + Math.pow(galaxym * 7500, 2);
			$("#galaxypm").css("background-color", "#cc00cc");
			if(total < galaxyCostm) {
				$("#galaxyBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickGalaxy, 1000);
		}
		$("#galaxyBtnm").text("Cost: " + commaSeparateNumber(galaxyCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#galaxypm").text("Galaxy: " + commaSeparateNumber(galaxym));
		if(galaxym >= 5) {
			galaxyCostm = Infinity;
			$("#galaxyBtnm").text("Maxed Out!").fadeOut(function() {
				$("#galaxyBtnm2").show();
				$("#galaxypm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#galaxym").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
	//Universe Manager
	if(total >= universeCostm) {
		$("#universeBtnm").css("background-color", "#cc00cc");
	}
	var autoClickUniverse = function() {
		total = total + universe * 150000;
		$("#totalNum").text(commaSeparateNumber(total));
		btnUpdate();
		managerBtnUpdate();
	};
	$("#universeBtnm").click(function() {
		if(total >= universeCostm) {
			$("#universeBtnm").fadeOut(100).fadeIn(100);
			total = total - universeCostm;
			universem++;
		}
		btnUpdate();
		managerBtnUpdate();
		//Calculates Cost Increase
		if(universem > 0) {
			universeCostm = 100000000 + Math.pow(universem * 10000, 2);
			$("#universepm").css("background-color", "#cc00cc");
			if(total < universeCostm) {
				$("#universeBtnm").css("background-color", "rgba(255,255,255,.15)");
			}
			setInterval(autoClickUniverse, 1000);
		}
		$("#universeBtnm").text("Cost: " + commaSeparateNumber(universeCostm));
		$("#totalNum").text(commaSeparateNumber(total));
		$("#universepm").text("Universe: " + commaSeparateNumber(universem));
		if(universem >= 5) {
			universeCostm = Infinity;
			$("#universeBtnm").text("Maxed Out!").fadeOut(function() {
				$("#universeBtnm2").show();
				$("#universepm").css({"background-color": "#ffd700", "color": "rgba(51,51,51,.8)", "text-shadow": "0px 0px"});
				$("#universem").css({"border": "solid 3px #cc00cc", "border-radius": "10px"});
			});
		}
	});
	
};

$(document).ready(main);

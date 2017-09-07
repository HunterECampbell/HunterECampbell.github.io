//Where the randomizer works.
var main = function() {
	var shuffle = function(array) {
		var i = array.length,
			j = 0,
			temp;
			
		while(i--) {
			j = Math.floor(Math.random() * (i+1));
			temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		};
		return array;
	};
	var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75]);
	
	//Where the caller works.
	$("#nextBtn").show();
	var ranNums2 = [];
	var b = 0,
		i = 0,
		n = 0,
		g = 0,
		o = 0,
		clicks = 0;
	var clicking = function() {
		if(clicks > 1) {
			if(ranNums2.slice(-2,-1) < 16) {
				$("#lasth").text("B" + ranNums2.slice(-2,-1));
			}
			else if(ranNums2.slice(-2,-1) < 31) {
				$("#lasth").text("I" + ranNums2.slice(-2,-1));
			}
			else if(ranNums2.slice(-2,-1) < 46) {
				$("#lasth").text("N" + ranNums2.slice(-2,-1));
			}
			else if(ranNums2.slice(-2,-1) < 61) {
				$("#lasth").text("G" + ranNums2.slice(-2,-1));
			}
			else if(ranNums2.slice(-2,-1) < 76) {
				$("#lasth").text("O" + ranNums2.slice(-2,-1));
			}
		}
	};
	
	$("#nextBtn").click(function() {
		ranNums2.push(ranNums[0]);
		ranNums.shift();
		clicks = clicks + 1;
		//B
		if(ranNums2.slice(-1) == "1") {
			$("#b1").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B1");
			clicking();
		}
		if(ranNums2.slice(-1) == "2") {
			$("#b2").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B2");
			clicking();
		}
		if(ranNums2.slice(-1) == "3") {
			$("#b3").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B3");
			clicking();
		}
		if(ranNums2.slice(-1) == "4") {
			$("#b4").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B4");
			clicking();
		}
		if(ranNums2.slice(-1) == "5") {
			$("#b5").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B5");
			clicking();
		}
		if(ranNums2.slice(-1) == "6") {
			$("#b6").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B6");
			clicking();
		}
		if(ranNums2.slice(-1) == "7") {
			$("#b7").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B7");
			clicking();
		}
		if(ranNums2.slice(-1) == "8") {
			$("#b8").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B8");
			clicking();
		}
		if(ranNums2.slice(-1) == "9") {
			$("#b9").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B9");
			clicking();
		}
		if(ranNums2.slice(-1) == "10") {
			$("#b10").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B10");
			clicking();
		}
		if(ranNums2.slice(-1) == "11") {
			$("#b11").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B11");
			clicking();
		}
		if(ranNums2.slice(-1) == "12") {
			$("#b12").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B12");
			clicking();
		}
		if(ranNums2.slice(-1) == "13") {
			$("#b13").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B13");
			clicking();
		}
		if(ranNums2.slice(-1) == "14") {
			$("#b14").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B14");
			clicking();
		}
		if(ranNums2.slice(-1) == "15") {
			$("#b15").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			b = b + 1;
			$("#currenth").text("B15");
			clicking();
		}
		if(b === 15) {
			$("#bh").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
		}
		
		//I
		if(ranNums2.slice(-1) == "16") {
			$("#i16").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I16");
			clicking();
		}
		if(ranNums2.slice(-1) == "17") {
			$("#i17").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I17");
			clicking();
		}
		if(ranNums2.slice(-1) == "18") {
			$("#i18").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I18");
			clicking();
		}
		if(ranNums2.slice(-1) == "19") {
			$("#i19").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I19");
			clicking();
		}
		if(ranNums2.slice(-1) == "20") {
			$("#i20").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I20");
			clicking();
		}
		if(ranNums2.slice(-1) == "21") {
			$("#i21").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I21");
			clicking();
		}
		if(ranNums2.slice(-1) == "22") {
			$("#i22").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I22");
			clicking();
		}
		if(ranNums2.slice(-1) == "23") {
			$("#i23").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I23");
			clicking();
		}
		if(ranNums2.slice(-1) == "24") {
			$("#i24").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I24");
			clicking();
		}
		if(ranNums2.slice(-1) == "25") {
			$("#i25").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I25");
			clicking();
		}
		if(ranNums2.slice(-1) == "26") {
			$("#i26").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I26");
			clicking();
		}
		if(ranNums2.slice(-1) == "27") {
			$("#i27").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I27");
			clicking();
		}
		if(ranNums2.slice(-1) == "28") {
			$("#i28").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I28");
			clicking();
		}
		if(ranNums2.slice(-1) == "29") {
			$("#i29").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I29");
			clicking();
		}
		if(ranNums2.slice(-1) == "30") {
			$("#i30").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			i = i + 1;
			$("#currenth").text("I30");
			clicking();
		}
		if(i === 15) {
			$("#ih").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
		}
		
		//N
		if(ranNums2.slice(-1) == "31") {
			$("#n31").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N31");
			clicking();
		}
		if(ranNums2.slice(-1) == "32") {
			$("#n32").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N32");
			clicking();
		}
		if(ranNums2.slice(-1) == "33") {
			$("#n33").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N33");
			clicking();
		}
		if(ranNums2.slice(-1) == "34") {
			$("#n34").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N34");
			clicking();
		}
		if(ranNums2.slice(-1) == "35") {
			$("#n35").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N35");
			clicking();
		}
		if(ranNums2.slice(-1) == "36") {
			$("#n36").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N36");
			clicking();
		}
		if(ranNums2.slice(-1) == "37") {
			$("#n37").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N37");
			clicking();
		}
		if(ranNums2.slice(-1) == "38") {
			$("#n38").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N38");
			clicking();
		}
		if(ranNums2.slice(-1) == "39") {
			$("#n39").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N39");
			clicking();
		}
		if(ranNums2.slice(-1) == "40") {
			$("#n40").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N40");
			clicking();
		}
		if(ranNums2.slice(-1) == "41") {
			$("#n41").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N41");
			clicking();
		}
		if(ranNums2.slice(-1) == "42") {
			$("#n42").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N42");
			clicking();
		}
		if(ranNums2.slice(-1) == "43") {
			$("#n43").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N43");
			clicking();
		}
		if(ranNums2.slice(-1) == "44") {
			$("#n44").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N44");
			clicking();
		}
		if(ranNums2.slice(-1) == "45") {
			$("#n45").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			n = n + 1;
			$("#currenth").text("N45");
			clicking();
		}
		if(n === 15) {
			$("#nh").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
		}
		
		//G
		if(ranNums2.slice(-1) == "46") {
			$("#g46").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G46");
			clicking();
		}
		if(ranNums2.slice(-1) == "47") {
			$("#g47").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G47");
			clicking();
		}
		if(ranNums2.slice(-1) == "48") {
			$("#g48").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G48");
			clicking();
		}
		if(ranNums2.slice(-1) == "49") {
			$("#g49").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G49");
			clicking();
		}
		if(ranNums2.slice(-1) == "50") {
			$("#g50").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G50");
			clicking();
		}
		if(ranNums2.slice(-1) == "51") {
			$("#g51").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G51");
			clicking();
		}
		if(ranNums2.slice(-1) == "52") {
			$("#g52").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G52");
			clicking();
		}
		if(ranNums2.slice(-1) == "53") {
			$("#g53").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G53");
			clicking();
		}
		if(ranNums2.slice(-1) == "54") {
			$("#g54").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G54");
			clicking();
		}
		if(ranNums2.slice(-1) == "55") {
			$("#g55").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G55");
			clicking();
		}
		if(ranNums2.slice(-1) == "56") {
			$("#g56").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G56");
			clicking();
		}
		if(ranNums2.slice(-1) == "57") {
			$("#g57").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G57");
			clicking();
		}
		if(ranNums2.slice(-1) == "58") {
			$("#g58").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G58");
			clicking();
		}
		if(ranNums2.slice(-1) == "59") {
			$("#g59").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G59");
			clicking();
		}
		if(ranNums2.slice(-1) == "60") {
			$("#g60").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			g = g + 1;
			$("#currenth").text("G60");
			clicking();
		}
		if(g === 15) {
			$("#gh").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
		}
		
		//O
		if(ranNums2.slice(-1) == "61") {
			$("#o61").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O61");
			clicking();
		}
		if(ranNums2.slice(-1) == "62") {
			$("#o62").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O62");
			clicking();
		}
		if(ranNums2.slice(-1) == "63") {
			$("#o63").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O63");
			clicking();
		}
		if(ranNums2.slice(-1) == "64") {
			$("#o64").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O64");
			clicking();
		}
		if(ranNums2.slice(-1) == "65") {
			$("#o65").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O65");
			clicking();
		}
		if(ranNums2.slice(-1) == "66") {
			$("#o66").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O66");
			clicking();
		}
		if(ranNums2.slice(-1) == "67") {
			$("#o67").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O67");
			clicking();
		}
		if(ranNums2.slice(-1) == "68") {
			$("#o68").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O68");
			clicking();
		}
		if(ranNums2.slice(-1) == "69") {
			$("#o69").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O69");
			clicking();
		}
		if(ranNums2.slice(-1) == "70") {
			$("#o70").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O70");
			clicking();
		}
		if(ranNums2.slice(-1) == "71") {
			$("#o71").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O71");
			clicking();
		}
		if(ranNums2.slice(-1) == "72") {
			$("#o72").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O72");
			clicking();
		}
		if(ranNums2.slice(-1) == "73") {
			$("#o73").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O73");
			clicking();
		}
		if(ranNums2.slice(-1) == "74") {
			$("#o74").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O74");
			clicking();
		}
		if(ranNums2.slice(-1) == "75") {
			$("#o75").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
			o = o + 1;
			$("#currenth").text("O75");
			clicking();
		}
		if(o === 15) {
			$("#oh").css({"background-color": "rgba(255,0,0,.5)", "color": "white"});
		}
	
		//Reseting the caller.
		$("#resetBtn").click(function() {
			$("#nextBtn").text("Start").show();
			ranNums = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75]);
			b = 0;
			i = 0;
			n = 0;
			g = 0;
			o = 0;
			clicks = 0;
			$("#currenth").text("");
			$("#lasth").text("");
			$(".all").css({"background-color": "rgba(255,255,255,.5)", "color": "red"});
			$("#resetBtn").hide();
		});
		if(b === 15 && i === 15 && n === 15 && g === 15 && o === 15) {
			$("#nextBtn").hide();
			$("#resetBtn").show();
		}
	});
	
	$("#nextBtn").click(function() {
		$(this).text("Next Number");
	});

};

$(document).ready(main);

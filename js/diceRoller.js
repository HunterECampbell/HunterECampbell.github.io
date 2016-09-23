var coinfunction = function() {
	var coin = Math.floor(Math.random() * 2) + 1;
	if(coin === 1) {
		$("#coin1").show();
		$("#coin2").hide();
		$("#rollNumber").text("Heads");
	}
	else if(coin === 2) {
		$("#coin1").hide();
		$("#coin2").show();
		$("#rollNumber").text("Tails");
	}
};

var d6function = function() {
var D6 = Math.floor(Math.random() * 6) + 1;
	if(D6 === 1) {
		$("#d6_1").show();
		$("#d6_2").hide();
		$("#d6_3").hide();
		$("#d6_4").hide();
		$("#d6_5").hide();
		$("#d6_6").hide();
		$("#rollNumber").text("1");
	}
	else if(D6 === 2) {
		$("#d6_1").hide();
		$("#d6_2").show();
		$("#d6_3").hide();
		$("#d6_4").hide();
		$("#d6_5").hide();
		$("#d6_6").hide();
		$("#rollNumber").text("2");
	}
	else if(D6 === 3) {
		$("#d6_1").hide();
		$("#d6_2").hide();
		$("#d6_3").show();
		$("#d6_4").hide();
		$("#d6_5").hide();
		$("#d6_6").hide();
		$("#rollNumber").text("3");
	}
	else if(D6 === 4) {
		$("#d6_1").hide();
		$("#d6_2").hide();
		$("#d6_3").hide();
		$("#d6_4").show();
		$("#d6_5").hide();
		$("#d6_6").hide();
		$("#rollNumber").text("4");
	}
	else if(D6 === 5) {
		$("#d6_1").hide();
		$("#d6_2").hide();
		$("#d6_3").hide();
		$("#d6_4").hide();
		$("#d6_5").show();
		$("#d6_6").hide();
		$("#rollNumber").text("5");
	}
	else if(D6 === 6) {
		$("#d6_1").hide();
		$("#d6_2").hide();
		$("#d6_3").hide();
		$("#d6_4").hide();
		$("#d6_5").hide();
		$("#d6_6").show();
		$("#rollNumber").text("6");
	}
};

var d7function = function() {
var D7 = Math.floor(Math.random() * 7) + 1;
	if(D7 === 1) {
		$("#d7_1").show();
		$("#d7_2").hide();
		$("#d7_3").hide();
		$("#d7_4").hide();
		$("#d7_5").hide();
		$("#d7_6").hide();
		$("#d7_7").hide();
		$("#rollNumber").text("1");
	}
	else if(D7 === 2) {
		$("#d7_1").hide();
		$("#d7_2").show();
		$("#d7_3").hide();
		$("#d7_4").hide();
		$("#d7_5").hide();
		$("#d7_6").hide();
		$("#d7_7").hide();
		$("#rollNumber").text("2");
	}
	else if(D7 === 3) {
		$("#d7_1").hide();
		$("#d7_2").hide();
		$("#d7_3").show();
		$("#d7_4").hide();
		$("#d7_5").hide();
		$("#d7_6").hide();
		$("#d7_7").hide();
		$("#rollNumber").text("3");
	}
	else if(D7 === 4) {
		$("#d7_1").hide();
		$("#d7_2").hide();
		$("#d7_3").hide();
		$("#d7_4").show();
		$("#d7_5").hide();
		$("#d7_6").hide();
		$("#d7_7").hide();
		$("#rollNumber").text("4");
	}
	else if(D7 === 5) {
		$("#d7_1").hide();
		$("#d7_2").hide();
		$("#d7_3").hide();
		$("#d7_4").hide();
		$("#d7_5").show();
		$("#d7_6").hide();
		$("#d7_7").hide();
		$("#rollNumber").text("5");
	}
	else if(D7 === 6) {
		$("#d7_1").hide();
		$("#d7_2").hide();
		$("#d7_3").hide();
		$("#d7_4").hide();
		$("#d7_5").hide();
		$("#d7_6").show();
		$("#d7_7").hide();
		$("#rollNumber").text("6");
	}
	else if(D7 === 7) {
		$("#d7_1").hide();
		$("#d7_2").hide();
		$("#d7_3").hide();
		$("#d7_4").hide();
		$("#d7_5").hide();
		$("#d7_6").hide();
		$("#d7_7").show();
		$("#rollNumber").text("7");
	}
};

var coinClick = 0;
$("#coin-btn").click(function() {
	coinClick = 1;
	d6Click = 0;
	d7Click = 0;
	$("#diceTitle").text("Coin");
	$("#rollNumber").text("0");
	$("#d6_1").hide();
	$("#d6_2").hide();
	$("#d6_3").hide();
	$("#d6_4").hide();
	$("#d6_5").hide();
	$("#d6_6").hide();
	$("#d7_1").hide();
	$("#d7_2").hide();
	$("#d7_3").hide();
	$("#d7_4").hide();
	$("#d7_5").hide();
	$("#d7_6").hide();
	$("#d7_7").hide();
});
var d6Click = 0;
$("#d6-btn").click(function() {
	coinClick = 0;
	d6Click = 1;
	d7Click = 0;
	$("#rollNumber").text("0");
	$("#diceTitle").text("6 Sided Die");
	$("#coin1").hide();
	$("#coin2").hide();
	$("#d7_1").hide();
	$("#d7_2").hide();
	$("#d7_3").hide();
	$("#d7_4").hide();
	$("#d7_5").hide();
	$("#d7_6").hide();
	$("#d7_7").hide();
});
var d7Click = 0;
$("#d7-btn").click(function() {
	coinClick = 0;
	d6Click = 0;
	d7Click = 1;
	$("#rollNumber").text("0");
	$("#diceTitle").text("7 Sided Die");
	$("#coin1").hide();
	$("#coin2").hide();
	$("#d6_1").hide();
	$("#d6_2").hide();
	$("#d6_3").hide();
	$("#d6_4").hide();
	$("#d6_5").hide();
	$("#d6_6").hide();
});

var roll = function() {
	if(coinClick === 1) {
		coinfunction();
	}
	if(d6Click === 1) {
		d6function();
	}
	if(d7Click === 1) {
		d7function();
	}
};

var main = function() {
	$("#roll").on("click", function() {
		roll();
	});
};

$(document).ready(main);

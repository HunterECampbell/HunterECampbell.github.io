var main = function() {
	/*$("#menu").click(function() {
		$("#menudown").toggle();
	});*/
	
	/*SEARCH BAR EFFECTS*/
	$("#input").hide();
	$("#search").click(function() {
		$("#section2").css("padding-right", "1.75em");
		$("#input").show("slow");
		$("#search").hide();
	});

	/*SCROLL EFFECTS*/
	$("#h13").hide();
	$("#p3").hide();
	$("#row1").hide();
	$("#row2").hide();
	$("#row3").hide();
	$("#viewmore").hide();
	$("#h16").hide();
	$("#join").hide();
	/*PHONE*/
	if($(window).width() <= 479) {
		$("#h13").show(400);
		$("#p3").show(300);
		$(window).scroll(function() {
			if($(this).scrollTop() < 100) {
				$("#h13").show(400);
				$("#p3").show(300);
			}
			else {
				$("#h13").hide("slow");
				$("#p3").hide("slow");
			}
			if($(this).scrollTop() > 60) {
				$("#row1").show("slow");
			}
			else {
				$("#row1").hide("slow");
			}
			if($(this).scrollTop() > 400) {
				$("#row2").show("slow");
			}
			else {
				$("#row2").hide("slow");
			}
			if($(this).scrollTop() > 700) {
				$("#row3").show("slow");
				$("#viewmore").show("slow");
			}
			else {
				$("#row3").hide("slow");
				$("#viewmore").hide("slow");
			}
			if($(this).scrollTop() > 1400) {
				$("#h16").css({"animation": "2s slide-right", "-webkit-animation": "2s slide-right"}).show();
				$("#join").show();
			}
			else {
				$("#h16").hide();
				$("#join").hide();
			}
		});
	}
	/*TABLET*/
	if($(window).width() >= 480) {
		$("#h13").show(400);
		$("#p3").show(300);
		$(window).scroll(function() {
			if($(this).scrollTop() < 100) {
				$("#h13").show(400);
				$("#p3").show(300);
			}
			else {
				$("#h13").hide("slow");
				$("#p3").hide("slow");
			}
			if($(this).scrollTop() > 80) {
				$("#row1").show("slow");
			}
			else {
				$("#row1").hide("slow");
			}
			if($(this).scrollTop() > 600) {
				$("#row2").show("slow");
			}
			else {
				$("#row2").hide("slow");
			}
			if($(this).scrollTop() > 1150) {
				$("#row3").show("slow");
				$("#viewmore").show("slow");
			}
			else {
				$("#row3").hide("slow");
				$("#viewmore").hide("slow");
			}
			if($(this).scrollTop() > 2050) {
				$("#h16").css({"animation": "2s slide-right", "-webkit-animation": "2s slide-right"}).show();
				$("#join").show();
			}
			else {
				$("#h16").hide();
				$("#join").hide();
			}
		});
	}
	/*DESKTOP/LAPTOP*/
	if($(window).width() >= 768) {
		$("#h13").show(400);
		$("#p3").show(300);
		$(window).scroll(function() {
			if($(this).scrollTop() < 100) {
				$("#h13").show(400);
				$("#p3").show(300);
			}
			else {
				$("#h13").hide("slow");
				$("#p3").hide("slow");
			}
			if($(this).scrollTop() > 80) {
				$("#row1").show("slow");
			}
			else {
				$("#row1").hide("slow");
			}
			if($(this).scrollTop() > 600) {
				$("#row2").show("slow");
			}
			else {
				$("#row2").hide("slow");
			}
			if($(this).scrollTop() > 1150) {
				$("#row3").show("slow");
				$("#viewmore").show("slow");
			}
			else {
				$("#row3").hide("slow");
				$("#viewmore").hide("slow");
			}
			if($(this).scrollTop() > 1450) {
				$("#h16").css({"animation": "2s slide-right", "-webkit-animation": "2s slide-right"}).show();
				$("#join").show();
			}
			else {
				$("#h16").hide();
				$("#join").hide();
			}
		});
	}
};

$(document).ready(main);
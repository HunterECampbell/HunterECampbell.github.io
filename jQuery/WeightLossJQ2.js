var main = function() {
	/*Search Bar Effect*/
	$("#input").hide();
	$("#search").click(function() {
		$("#row2").css("padding-right", "1.75em");
		$("#input").show("slow");
		$("#search").hide();
	});
	
	/*Scroll Effects*/
	/*For text*/
	$("#row3div1").hide();
	function ScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();
		return((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemTop >= docViewTop));
	}
	$("#row3div1").show("slow");
	$(window).scroll(function() {
		if(ScrolledIntoView($("#row3"))) {
			$("#row3div1").show("slow");
		}
		else {
			$("#row3div1").hide("slow");
		}
	});
	/*For images*/
	$("#row1row4").hide();
	$("#row2row4").hide();
	$("#row3row4").hide();
	$("#viewmore").hide();
	$("#row6h1").hide();
	$("#join").hide();
	/*Phone*/
	$(window).scroll(function() {
		/*Desktop/Laptop*/
		if($(window).width() >= 768) {
			if($(this).scrollTop() > 80) {
				$("#row1row4").show("slow");
			}
			else {
				$("#row1row4").hide("slow");
			}
			if($(this).scrollTop() > 350) {
				$("#row2row4").show("slow");
			}
			else {
				$("#row2row4").hide("slow");
			}
			if($(this).scrollTop() > 710) {
				$("#row3row4").show("slow");
				$("#viewmore").show("slow");
			}
			else {
				$("#row3row4").hide("slow");
				$("#viewmore").hide("slow");
			}
			if($(this).scrollTop() > 1400) {
				$("#row6h1").css({"animation": "2s slide-right", "-webkit-animation": "2s slide-right"}).show();
				$("#join").show();
			}
			else {
				$("#row6h1").hide();
				$("#join").hide();
			}
		}
	/*Tablet*/
		else if($(window).width() >= 600) {
			if($(this).scrollTop() > 80) {
				$("#row1row4").show("slow");
			}
			else {
				$("#row1row4").hide("slow");
			}
			if($(this).scrollTop() > 575) {
				$("#row2row4").show("slow");
			}
			else {
				$("#row2row4").hide("slow");
			}
			if($(this).scrollTop() > 1235) {
				$("#row3row4").show("slow");
				$("#viewmore").show("slow");
			}
			else {
				$("#row3row4").hide("slow");
				$("#viewmore").hide("slow");
			}
			if($(this).scrollTop() > 2300) {
				$("#row6h1").css({"animation": "2s slide-right", "-webkit-animation": "2s slide-right"}).show();
				$("#join").show();
			}
			else {
				$("#row6h1").hide();
				$("#join").hide();
			}
		}
		else if($(window).width() <= 599) {
			if($(this).scrollTop() > 80) {
				$("#row1row4").show("slow");
			}
			else {
				$("#row1row4").hide("slow");
			}
			if($(this).scrollTop() > 1100) {
				$("#row2row4").show("slow");
			}
			else {
				$("#row2row4").hide("slow");
			}
			if($(this).scrollTop() > 2500) {
				$("#row3row4").show("slow");
				$("#viewmore").show("slow");
			}
			else {
				$("#row3row4").hide("slow");
				$("#viewmore").hide("slow");
			}
			if($(this).scrollTop() > 4200) {
				$("#row6h1").css({"animation": "2s slide-right", "-webkit-animation": "2s slide-right"}).show();
				$("#join").show();
			}
			else {
				$("#row6h1").hide();
				$("#join").hide();
			}
		}
	});
};

$(document).ready(main);
var main = function() {
	$("#aboutButton").click(function() {
		$(".about-menu").toggle();
		$("#pl-menu").toggle(false);
		$("#TIE-menu").toggle(false);
	});
	$("#pl").click(function() {
		$("#pl-menu").toggle();
		$("#TIE-menu").toggle(false);
	});
	$("#TIE").click(function() {
		$("#pl-menu").toggle(false);
		$("#TIE-menu").toggle();
	});
	$(document).click(function() {
		$(".about-menu").hide();
	});
	$("#aboutButton, .about-menu, #pl, #pl-menu, #TIE, #TIE-menu").click(function(e) {
		e.stopPropagation();
	});
	
	$("#RPS").click(function() {
		$(".RPSdiv").show();
	});
	$(".RPSquit").click(function() {
		$(".RPSdiv").hide();
	});
	
	/*$("#newsroom").mouseover(function() {
		$(this).text("Please refresh page once.");
		$(this).mouseleave(function() {
			$(this).text("Newsroom");
		});
	});*/
	
	$("#more-btn").click(function() {
		$(".more-websites").slideToggle("slow");
		$("#more-btn").hide();
		$("#more-btn2").show();
	});
	$("#more-btn2").click(function() {
		$(".more-websites").slideToggle("slow");
		$("#more-btn").show();
		$("#more-btn2").hide();
	});
	
	/*$("#goblin").mouseenter(function() {
		$("#goldSpan").css("color", "white");
	});
	$("#goblin").mouseleave(function() {
		$("#goldSpan").css("color", "#FFD700");
	});
	$("#goblin").mouseenter(function() {
		$("#goblinSpan").css("color", "white");
	});
	$("#goblin").mouseleave(function() {
		$("#goblinSpan").css("color", "#41924b");
	});
	$("#RPS").mouseenter(function() {
		$("#rockSpan").css("color", "white");
	});
	$("#RPS").mouseleave(function() {
		$("#rockSpan").css("color", "brown");
	});
	$("#RPS").mouseenter(function() {
		$("#scissorsSpan").css("color", "white");
	});
	$("#RPS").mouseleave(function() {
		$("#scissorsSpan").css("color", "#7b9095");
	});
	$("#dragon").mouseenter(function() {
		$("#dragonSpan").css("color", "white");
	});
	$("#dragon").mouseleave(function() {
		$("#dragonSpan").css("color", "red");
	});*/
};

$(document).ready(main);

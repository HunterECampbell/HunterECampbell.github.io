var main = function() {
	/*About Menu Effects*/
	$("#aboutme").click(function() {
		$("#aboutmenu").toggle();
		$("#MotoUL").toggle(false);
		$("#ExperienceUL").toggle(false);
		$("#LanguagesUL").toggle(false);
		$("#EnjoyUL").toggle(false);
		$("#GamesUL").toggle(false);
	});
	$("#moto").click(function() {
		$("#MotoUL").toggle();
		$("#ExperienceUL").toggle(false);
		$("#LanguagesUL").toggle(false);
		$("#EnjoyUL").toggle(false);
		$("#GamesUL").toggle(false);
	});
	$("#experience").click(function() {
		$("#MotoUL").toggle(false);
		$("#ExperienceUL").toggle();
		$("#LanguagesUL").toggle(false);
		$("#EnjoyUL").toggle(false);
		$("#GamesUL").toggle(false);
	});
	$("#languages").click(function() {
		$("#MotoUL").toggle(false);
		$("#ExperienceUL").toggle(false);
		$("#LanguagesUL").toggle();
		$("#EnjoyUL").toggle(false);
		$("#GamesUL").toggle(false);
	});
	$("#enjoy").click(function() {
		$("#MotoUL").toggle(false);
		$("#ExperienceUL").toggle(false);
		$("#LanguagesUL").toggle(false);
		$("#EnjoyUL").toggle();
		$("#GamesUL").toggle(false);
	});
	$("#games").click(function() {
		$("#MotoUL").toggle(false);
		$("#ExperienceUL").toggle(false);
		$("#LanguagesUL").toggle(false);
		$("#EnjoyUL").toggle(false);
		$("#GamesUL").toggle();
	});
	$(document).click(function() {
		$("#aboutmenu").hide();
	});
	$("#aboutme, #aboutmenu, #moto, #experience, #languages, #enjoy, #games").click(function(e) {
		e.stopPropagation();
	});
	
	
	/*More Websites Button Effects*/
	$("#more").click(function() {
		$("#row5").slideToggle("slow");
		$("#more").hide();
		$("#less").show();
	});
	$("#less").click(function() {
		$("#row5").slideToggle("slow");
		$("#more").show();
		$("#less").hide();
	});
	
	
	/*Scroll Effects*/
	$("#row3 p").show("slow");
	$("#row3").waypoint(function() {
		$("#row3 p").show("slow");
	});
	$("#row4").waypoint(function() {
		$("#row3 p").hide();
	});
};

$(document).ready(main);

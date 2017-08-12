var main = function() {
	/*About Menu Effects*/
	$("#aboutme").click(function() {
		$("#aboutmenu").toggle();
		$("#row2ul21").toggle(false);
		$("#row2ul22").toggle(false);
	});
	$("#languages").click(function() {
		$("#row2ul21").toggle();
		$("#row2ul22").toggle(false);
	});
	$("#enjoy").click(function() {
		$("#row2ul21").toggle(false);
		$("#row2ul22").toggle();
	});
	$(document).click(function() {
		$("#aboutmenu").hide();
	});
	$("#aboutme, #aboutmenu, #aboutmenu, #row2ul21, #enjoy, #row2ul22").click(function(e) {
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

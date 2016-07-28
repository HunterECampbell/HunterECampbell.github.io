var main = function() {

	$("#about-button").click(function() {
		$("#about-menu").toggle();
		$("#future-menu").toggle(false);
		$("#love-menu").toggle(false);
	});
	$("#likes").click(function() {
	    $("#likes-menu").toggle();
	    $("#dislikes-menu").toggle(false);
	});
	$("#dislikes").click(function() {
	    $("#dislikes-menu").toggle();
	    $("#likes-menu").toggle(false);
	});
	
	$("#love-button").click(function() {
	    $("#love-menu").toggle();
		$("#future-menu").toggle(false);
		$("#about-menu").toggle(false);    
	});
	$("#l-1-10").click(function() {
	    $("#1-10").toggle();
	    $("#11-20").toggle(false);
	    $("#21-30").toggle(false);
	    $("#31-40").toggle(false);
	    $("#41-50").toggle(false);
	});
	$("#l-11-20").click(function() {
	    $("#1-10").toggle(false);
	    $("#11-20").toggle();
	    $("#21-30").toggle(false);
	    $("#31-40").toggle(false);
	    $("#41-50").toggle(false);
	});
	$("#l-21-30").click(function() {
	    $("#1-10").toggle(false);
	    $("#11-20").toggle(false);
	    $("#21-30").toggle();
	    $("#31-40").toggle(false);
	    $("#41-50").toggle(false);
	});
	$("#l-31-40").click(function() {
	    $("#1-10").toggle(false);
	    $("#11-20").toggle(false);
	    $("#21-30").toggle(false);
	    $("#31-40").toggle();
	    $("#41-50").toggle(false);
	});
	$("#l-41-50").click(function() {
	    $("#1-10").toggle(false);
	    $("#11-20").toggle(false);
	    $("#21-30").toggle(false);
	    $("#31-40").toggle(false);
	    $("#41-50").toggle();
	});
	
	$("#future-button").click(function() {
	    $("#future-menu").toggle(); 
	    $("#about-menu").toggle(false);
	    $("#love-menu").toggle(false);
	});
	
	$(document).click(function() {
		$("#about-menu").hide();
		$("#love-menu").hide();
		$("#future-menu").hide();
		$(".ld-menu").hide();
		$(".numbers").hide();
	});
	$("#about-button, #about-menu, #love-menu, #likes-menu, #dislikes-menu, #love-button, #love-menu, #l-1-10, #l-11-20, #l-21-30, #l-31-40, #l-41-50, #future-button, #future-menu").click(function(e) {
		e.stopPropagation();
	});
	$(".Tbutton").click(function() {
		$(".ld-menu").hide();
		$(".numbers").hide();
	});
	$("#likes-menu, #dislikes-menu, #l-1-10, #l-11-20, #l-21-30, #l-31-40, #l-41-50").click(function() {
		e.stopPropagation();
	});

};

$(document).ready(main);

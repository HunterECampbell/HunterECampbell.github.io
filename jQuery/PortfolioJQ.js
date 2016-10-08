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
	
	/*$("#newsroom").mouseover(function() {
		$(this).text("Please refresh page once.");
		$(this).mouseleave(function() {
			$(this).text("Newsroom");
		});
	});*/
	
	$("#more-btn").click(function() {
		$(".more-websites").slideToggle("slow");
		$(this).toggleClass("active");
		if ($(this).text() == "Less...") {
			$(this).text("More...");
		}
		else {
			$(this).text("Less...");
		};
	});
};

$(document).ready(main);

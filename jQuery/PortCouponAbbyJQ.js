var main = function() {
	
	$("#pick").click(function() {
		$("#quick-pick").toggle();
	});
	$("#chore").click(function() {
		confirm("You chose the Get Out of a Chore Coupon.");
		confirm("This coupon allows you to get out of a chore or trade a chore, at any time!");
	});
	$("#movie").click(function() {
		confirm("You chose the Your Choice of Movie Coupon.");
		confirm("This coupon gives you the choice to override any movie anyone else wants to watch and to instead watch a movie of your choice with snacks of your choice, at any time!");
	});
	$("#tv").click(function() {
		confirm("You chose the Your Choice of TV Show Coupon.");
		confirm("This coupon gives you the choice to override any TV show anyone else wants to watch and to instead watch a TV show of your choice with snacks of your choice, at any time!");
	});
	$("#cooking").click(function() {
		confirm("You chose the Get out of Cooking Coupon.");
		confirm("This coupon gives you the choice to ask anyone else, other than yourself, to cook for you, at any time!");
	});
	$("#relax").click(function() {
		confirm("You chose the Relaxation Coupon.");
		confirm("This coupon gives you the opportunity to relax at any time for any amount of time!");
	});
	$("#massage").click(function() {
		confirm("You chose the Massage Coupon.");
		confirm("This coupon gives you a free massage of your choice, at any time!");
	});
	$("#snuggle").click(function() {
		confirm("You chose the Snuggle Coupon.");
		confirm("This coupon gives you a free snuggle session with your cuddly husband, Hunter, at any time!");
	});
	$("#your-choice").click(function() {
		confirm("You chose the Your Choice Coupon.");
		confirm("This coupon gives you the power to choose anything you desire, within means, at any time!");
	});
	
	$("#heartPic, #Cback").mouseover(function() {
		$("#Cback").css("text-decoration", "underline");
	});
	$("#heartPic, #Cback").mouseleave(function() {
		$("#Cback").css("text-decoration", "none");
	});
	
	$(document).click(function() {
		$("#quick-pick").hide();
	});
	$("#pick, #chore, #movie, #tv, #cooking, #relax, #massage, #snuggle, #your-choice").click(function(e) {
		e.stopPropagation();
	});
	
};

$(document).ready(main);
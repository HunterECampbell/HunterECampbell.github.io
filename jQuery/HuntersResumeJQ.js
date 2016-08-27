var main = function() {
	
	$("html").hide();
	var pass = prompt("What is Hunter's resume password?").toUpperCase();
	
	if(pass === "JS2X31") {
		$("html").show();
	}
	else {
		$("html").remove();
		alert("Access Denied.\nIf you want access, contact Hunter for the password.");
	};
};

$(document).ready(main);

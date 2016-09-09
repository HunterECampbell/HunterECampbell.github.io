var roll = function() {
	var D6 = Math.floor(Math.random() * 6) + 1;
	if(D6 === 1) {
		$("#one").show(1);
		$("#two").hide();
		$("#three").hide();
		$("#four").hide();
		$("#five").hide();
		$("#six").hide();
	}
	else if(D6 === 2) {
		$("#one").hide();
		$("#two").show(1);
		$("#three").hide();
		$("#four").hide();
		$("#five").hide();
		$("#six").hide();
	}
	else if(D6 === 3) {
		$("#one").hide();
		$("#two").hide();
		$("#three").show(1);
		$("#four").hide();
		$("#five").hide();
		$("#six").hide();
	}
	else if(D6 === 4) {
		$("#one").hide();
		$("#two").hide();
		$("#three").hide();
		$("#four").show(1);
		$("#five").hide();
		$("#six").hide();
	}
	else if(D6 === 5) {
		$("#one").hide();
		$("#two").hide();
		$("#three").hide();
		$("#four").hide();
		$("#five").show(1);
		$("#six").hide();
	}
	else if(D6 === 6) {
		$("#one").hide();
		$("#two").hide();
		$("#three").hide();
		$("#four").hide();
		$("#five").hide();
		$("#six").show(1);
	}
};

var main = function() {
	$("#roll").on("click", roll);
	$("#stop").click(function() {
		$("#roll").off("click")
			.text("Saved Roll")
			.css({"background-color": "#d9d9d9", "cursor": "text"})
			.mouseenter(function() {
				$("#roll").css("box-shadow", "none");
			});
		$("#stop").hide();
		$("#unfreeze").show();
	});
	$("#unfreeze").click(function() {
		$("#roll").on("click", roll)
			.text("Roll")
			.css({"background-color": "white", "cursor": "pointer"})
			.mouseenter(function() {
				$("#roll").css("box-shadow", "3px 3px 3px #333333");
			})
			.mouseleave(function() {
				$("#roll").css("box-shadow", "none");
			});
		$("#stop").show();
		$("#unfreeze").hide();
	});
	
	var pass = prompt("What is your name?").toUpperCase();
	if(pass === "TIFFANY" || "TIFFANY CAMPBELL" || "ERIC" || "GRANT" || "MOM" || "DAD" || "HUNTER" || "ABBY") {
		$("#preg").show();
	};
	$("#x").mouseenter(function() {
		$("#x").css({"background-color": "red", "cursor": "pointer"});
	});
	$("#x").mouseleave(function() {
		$("#x").css("background-color", "white");
	});
	$("#x").click(function() {
		$("#preg").hide();
	});
};

$(document).ready(main);

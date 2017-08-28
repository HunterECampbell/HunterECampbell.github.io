var main = function() {
  $('#create').one("click", function() {
    
    var firstName = $('#first').val();
    	if(firstName === "") {
      		$(".first-name-error").append("Please enter your first name.");
    	}
	else {
		$(".first-name-success").append("Success!");
	}
    
    var lastName = $("#last").val();
    	if(lastName === "") {
      		$(".last-name-error").append("Please enter your last name.");
    	}
	else {
		$(".last-name-success").append("Success!");
	}
    
    var email = $("#email").val();
    	if(email === "hcnureth@gmail.com") {
     		 $(".email-error").append("This email is already taken.");
    	}
	else if(email.includes("@gmail.com") || email.includes("@hotmail.com") || email.includes("@yahoo.com")) {
		$(".email-success").append("Success!");
	}
	else {
      $(".email-error").append("Please enter your email.");
	}
    
    var password = $("#password").val();
    	if(password === "") {
      		$(".password-error").append("Please enter a password.");
    	}
    	else if(password.length < 8) {
      		$(".password-error").append("Short passwords are easy to guess. Try one with at least 8 characters.");
    	}
	else {
		$(".password-success").append("Success!");
	}

    return false;
  })
}

$(document).ready(main);

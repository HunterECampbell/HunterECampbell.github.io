var main = function() {
  $('#create').one("click", function() {
    
    var firstName = $('#first').val();
    if(firstName === "") {
      $(".first-name-error").append("Please enter your first name.");
    }
    
    var lastName = $("#last").val();
    if(lastName === "") {
      $(".last-name-error").append("Please enter your last name.");
    }
    
    var email = $("#email").val();
    if(email === "") {
      $(".email-error").append("Please enter your email.");
    }
    if(email === "hcnureth@gmail.com") {
      $(".email-error").append("This email is already taken.");
    }
    
    var password = $("#password").val();
    if(password === "") {
      $(".password-error").append("Please enter a password.");
    }
    else if(password.length < 8) {
      $(".password-error").append("Short passwords are easy to guess. Try one with at least 8 characters.");
    }

    return false;
  })
}

$(document).ready(main);
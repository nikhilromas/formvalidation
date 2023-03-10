var nameError1 = document.getElementById("nameError");
var emailError1 = document.getElementById("emailError");
var passwordError1 = document.getElementById("passwordError");
var repass = document.getElementById("repassError");

function validatename() {
  let cname = document.getElementById("name").value;
  let cnameReg = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/;

  if (cname.match(cnameReg)) {
    nameError1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  } else {
    nameError1.innerHTML = "enter a valid name";
    return false;
  }
}
function validateemail() {
  let email = document.getElementById("email").value;
  let emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (email.match(emailReg)) {
    emailError1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  } else {
    emailError1.innerHTML = "enter a valid email";
    return false;
  }
}
function validatepassword() {
  let password = document.getElementById("Password").value;
  let passwordreg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (password.match(passwordreg)) {
    passwordError1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  } else if (password.length < 8) {
    passwordError1.innerHTML =
      "enter " + (8 - password.length) + "more character";
    return false;
  } else {
    passwordError1.innerHTML =
      "Password must have A lowercase letter,A uppercase letter,a number and a special character ";
    return false;
  }
}

function hiden123() {
  var x = document.getElementById("Password");
  var y = document.getElementById("hiden");
  if (x.type === "password") {
    x.type = "text";
    y.innerHTML = '<i  class="fa-regular fa-eye-slash"></i>';
  } else {
    x.type = "password";
    y.innerHTML = '<i class="fa-sharp fa-solid fa-eye"></i>';
  }
}
function hiden12() {
  var x = document.getElementById("repassword");
  var y = document.getElementById("hiden1");
  if (x.type === "password") {
    x.type = "text";
    y.innerHTML = '<i  class="fa-regular fa-eye-slash"></i>';
  } else {
    x.type = "password";
    y.innerHTML = '<i class="fa-sharp fa-solid fa-eye"></i>';
  }
}
function validaterepassword() {
  let password = document.getElementById("Password").value;
  let repassword = document.getElementById("repassword").value;

  if (password == repassword) {
    repass.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  } else if (repassword == null) {
    repass.innerHTML = "confirm your password";
    return false;
  } else {
    repass.innerHTML = "password doesn't match";
    return false;
  }
}


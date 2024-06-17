var button = document.getElementsByTagName("button")[0];
var form = document.getElementsByTagName("form")[0];
var all = document.getElementById("all");
var emailval = document.getElementById("emailval");
var passval = document.getElementById("passval");
var confpassval = document.getElementById("confpassval");
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var userName = document.getElementById("username");
  var email = document.getElementById("email");
  var userPassword = document.getElementById("password");
  var confpassword = document.getElementById("confpassword");
  var valid = IsValida(
    userName.value,
    email.value,
    userPassword.value,
    confpassword.value
  );
  if (valid) {
    document.cookie = `name=${userName.value}; `;
    document.cookie = `password=${userPassword.value}; `;
    document.cookie = `email=${email.value}; `;

    window.location.href = "./home.html";
  }
});

function IsValida(userName, email, password, confpassword) {
  if (
    userName == "" ||
    userName == "" ||
    email == "" ||
    password == "" ||
    confpassword == ""
  ) {
    all.style.display = "block";
    return false;
  } else if (!emailPattern.test(email)) {
    emailval.style.display = "block";
    return false;
  } else if (!passwordPattern.test(password)) {
    passval.style.display = "block";
    return false;
  } else if (password != confpassword) {
    confpassval.style.display = "block";
    return false;
  } else {
    all.style.display = "none";
    emailval.style.display = "none";
    passval.style.display = "none";
    confpassval.style.display = "none";
    return true;
  }
}

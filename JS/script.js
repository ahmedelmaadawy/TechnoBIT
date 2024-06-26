var button = document.getElementsByTagName("button")[0];
var form = document.getElementsByTagName("form")[0];
var all = document.getElementById("all");
var nameval = document.getElementById("nameval");
var emailval = document.getElementById("emailval");
var passval = document.getElementById("passval");
var confpassval = document.getElementById("confpassval");
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// submitting the form and validating the data
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
    localStorage.setItem("cart", "[]");

    window.location.href = "./home.html";
  }
});
//data validation function
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
  } else if (!isNaN(parseInt(userName))) {
    nameval.style.display = "block";
    all.style.display = "none";
  } else if (!emailPattern.test(email)) {
    all.style.display = "none";
    nameval.style.display = "none";

    emailval.style.display = "block";
    return false;
  } else if (!passwordPattern.test(password)) {
    emailval.style.display = "none";
    nameval.style.display = "none";

    all.style.display = "none";
    passval.style.display = "block";
    return false;
  } else if (password != confpassword) {
    emailval.style.display = "none";
    all.style.display = "none";
    nameval.style.display = "none";

    passval.style.display = "none";
    confpassval.style.display = "block";
    return false;
  } else {
    all.style.display = "none";
    emailval.style.display = "none";
    passval.style.display = "none";
    confpassval.style.display = "none";
    nameval.style.display = "none";
    return true;
  }
}

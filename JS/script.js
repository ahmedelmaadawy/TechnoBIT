var button = document.getElementsByTagName("button")[0];
var form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var userName = document.getElementById("username");
  var userPassword = document.getElementById("password");
  console.log(userName.value);
  console.log(userPassword.value);
  document.cookie = `username=${userName.value}; `;
  document.cookie = `password=${userPassword.value}; `;
  window.location.href = "./home.html";
});

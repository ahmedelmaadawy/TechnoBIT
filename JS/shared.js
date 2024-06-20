getName();

displayCart();
function getName() {
  for (var i = 0; i < document.cookie.split(";").length; i++) {
    if (document.cookie.split(";")[i].split("=")[0].trim() == "name") {
      document.getElementById("username").innerHTML = document.cookie
        .split(";")
        [i].split("=")[1];
    }
  }
}
function displayCart() {
  var count = 0;
  var cart = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < cart.length; i++) {
    count += cart[i].quantity;
  }
  document.getElementById("cart").innerHTML = count;
}
function logout() {
  document.cookie = "";
  window.location.href = "index.html";
}
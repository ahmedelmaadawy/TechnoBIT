getName();
displayCart();
displayCartTable();
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

function displayCartTable() {
  var totalPrice = 0;
  var cart = JSON.parse(localStorage.getItem("cart"));
  var products = JSON.parse(localStorage.getItem("products"));
  for (var i = 0; i < cart.length; i++) {
    for (var k = 0; k < products.length; k++) {
      if (products[k].id == cart[i].id) {
        var productName = document.createElement("td");
        var price = document.createElement("td");
        var quantity = document.createElement("td");
        var total = document.createElement("td");
        var btn = document.createElement("td");
        var remove = document.createElement("button");
        remove.innerText = "Remove ";
        btn.append(remove);
        productName.innerText = products[k].productName;
        price.innerText = products[k].price;
        quantity.innerText = cart[i].quantity;
        total.innerText = products[k].price * cart[i].quantity;
        totalPrice += products[k].price * cart[i].quantity;
        var tr = document.createElement("tr");
        tr.append(productName, price, quantity, total, btn);
        document.getElementsByTagName("tbody")[0].append(tr);
      }
    }
  }
  document.getElementById("totalprice").innerText += totalPrice;    
}

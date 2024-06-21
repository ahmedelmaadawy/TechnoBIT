displayCartTable();

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
        var addtd = document.createElement("td");
        var remove = document.createElement("button");
        var addBtn = document.createElement("button");
        remove.innerText = "Remove ";
        remove.id = products[k].id;
        remove.classList.add("remove");
        remove.addEventListener("click", (e) => {
          removeFromCart(e.target.id);
        });
        btn.append(remove);
        addBtn.innerText = "Add";
        addBtn.id = products[k].id;
        addBtn.addEventListener("click", (e) => {
          addItemToCart(e.target.id);
          document.getElementsByTagName("tbody")[0].innerHTML = "";
          displayCart();
          displayCartTable();
        });
        addBtn.classList.add("add");
        addtd.append(addBtn);
        productName.innerText = products[k].productName;
        price.innerText = products[k].price;
        quantity.innerText = cart[i].quantity;
        total.innerText = products[k].price * cart[i].quantity + " $";
        totalPrice += products[k].price * cart[i].quantity;
        var tr = document.createElement("tr");
        tr.append(productName, price, quantity, total, addtd, btn);
        document.getElementsByTagName("tbody")[0].append(tr);
      }
    }
  }
  document.getElementById("totalprice").innerText = totalPrice + " $";
}
function addItemToCart(productId) {
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (cart.length == 0) {
    localStorage.setItem(
      "cart",
      JSON.stringify([{ id: productId, quantity: 1 }])
    );
    return;
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id == productId) {
        cart[i].quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));

        return;
      }
    }
    cart.push({ id: productId, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
function removeFromCart(productId) {
  var cart = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id == productId) {
      if (cart[i].quantity > 1) {
        cart[i].quantity--;
      } else {
        cart.splice(i, 1);
      }
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementsByTagName("tbody")[0].innerHTML = "";
  displayCartTable();
  displayCart();
}

function checkout() {
  document.getElementsByClassName(
    "container"
  )[0].innerHTML = `<div class="checkout">
                        <h2>Congratulations</h2>
                        <i class="material-symbols-outlined">Check_Circle</i>
                        <p>Your order has been placed successfully</p>
                        <p>Thank you for shopping with us</p>
                        <p>Your order will be delivered to you shortly</p>
                        </div>
                        `;

  localStorage.setItem("cart", "[]");
}

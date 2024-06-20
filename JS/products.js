//the container of every product
var productsElement = document.getElementsByClassName("products")[0];

var categories = [
  "All Products",
  "Phones",
  "Laptops",
  "Mouses",
  "Keyboards",
  "Headphones",
];
var categoriesElement = document.getElementsByClassName("categories-list")[0];
/*products*/
/*getting all rpoducts from local storage */
var allProducts = JSON.parse(localStorage.getItem("products"));
displayCategories();
displayProducts(allProducts);

//
function displayCategories() {
  for (var i = 0; i < categories.length; i++) {
    var button = document.createElement("button");
    button.innerText = categories[i];
    button.id = categories[i];
    button.addEventListener("click", (e) => {
      filterCategories(e.target.id);
    });
    var li = document.createElement("li");
    li.append(button);
    categoriesElement.append(li);
  }
}
function filterCategories(cat) {
  var products = [];
  if (cat == "All Products") {
    products = allProducts;
  } else {
    for (var i = 0; i < allProducts.length; i++) {
      if (allProducts[i].category == cat) {
        products.push(allProducts[i]);
      }
    }
  }
  productsElement.innerHTML = `<div class="view-product">
          </div>`;
  displayProducts(products);
}

function displayProducts(productsArray) {
  for (var i = 0; i < productsArray.length; i++) {
    var p = document.createElement("p");
    var img = document.createElement("img");
    var price = document.createElement("p");
    var addToCart = document.createElement("button");
    var view = document.createElement("button");
    var div = document.createElement("div");
    view.id = productsArray[i].id;
    view.addEventListener("click", function (e) {
      viewProduct(e.target.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    div.classList.add("product");
    p.innerText = productsArray[i].productName;
    img.src = productsArray[i].Image;
    img.alt = productsArray[i].productName;
    addToCart.id = productsArray[i].id;
    price.innerText = productsArray[i].price + " $";
    addToCart.innerText = "Add To Cart";
    addToCart.onclick = function (e) {
      addItemToCart(e.target.id);
      displayCart();
    };
    view.innerText = "View";
    div.append(p, img, price, addToCart, view);
    productsElement.append(div);
  }
}

/*cart */
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
        console.log(cart);
        return;
      }
    }
    cart.push({ id: productId, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}


/*view product */
function viewProduct(productId) {
  var product = allProducts.find((product) => product.id == productId);
  var viewPro = document.getElementsByClassName("view-product")[0];
  viewPro.style.display = "block";
  viewPro.innerHTML = "";
  var productImageDiv = document.createElement("div");
  productImageDiv.classList.add("product-image");

  var productImage = document.createElement("img");
  productImage.src = product.Image;
  productImage.alt = product.productName;
  productImageDiv.appendChild(productImage);

  // Product Info
  var productInfoDiv = document.createElement("div");
  productInfoDiv.classList.add("product-info");

  var productName = document.createElement("h2");
  productName.textContent = product.productName;
  productInfoDiv.appendChild(productName);

  var productCategory = document.createElement("p");
  productCategory.textContent = `Category : ${product.category}`;
  productInfoDiv.appendChild(productCategory);

  var productPrice = document.createElement("p");
  productPrice.textContent = `Price : ${product.price}$`;
  productInfoDiv.appendChild(productPrice);

  var addToCartButton = document.createElement("button");
  addToCartButton.id = product.id;
  addToCartButton.textContent = "Add to Cart";
  productInfoDiv.appendChild(addToCartButton);
  addToCartButton.addEventListener("click", function (e) {
    addItemToCart(e.target.id);
    displayCart();
  });
  viewPro.appendChild(productImageDiv);
  viewPro.appendChild(productInfoDiv);
}

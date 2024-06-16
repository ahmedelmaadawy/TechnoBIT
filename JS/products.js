document.getElementById("username").innerHTML = document.cookie
  .split(";")[2]
  .split("=")[1];
console.log(document.cookie);
/*products*/
var products = [
  {
    id: 1,
    productName: "Product 1",
    price: 100,
    Image: "../Images/Slider/1.jfif",
  },
  {
    id: 2,
    productName: "Product 2",
    price: 100,
    Image: "../Images/Slider/2.jfif",
  },
  {
    id: 3,
    productName: "Product 3",
    price: 100,
    Image: "../Images/Slider/3.jfif",
  },
  {
    id: 4,
    productName: "Product 4",
    price: 100,
    Image: "../Images/Slider/4.jfif",
  },
];

var productsElement = document.getElementsByClassName("products")[0];
function displayProducts() {
  for (var i = 0; i < products.length; i++) {
    var p = document.createElement("p");
    var img = document.createElement("img");
    var price = document.createElement("p");
    var addToCart = document.createElement("button");
    var view = document.createElement("button");
    var div = document.createElement("div");
    div.classList.add("product");
    p.innerText = products[i].productName;
    img.src = products[i].Image;
    img.alt = products[i].productName;
    price.innerText = products[i].price;
    addToCart.innerText = "Add To Cart";
    view.innerText = "View";
    div.append(p, img, price, addToCart, view);
    productsElement.append(div);
  }
  console.log(div);
}
displayProducts();

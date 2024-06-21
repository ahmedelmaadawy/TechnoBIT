// Slider
var slides = document.querySelectorAll(".slides img");
var slideIndex = 0;
var intervalId = null;
//intiating the slider when page load
document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 3000);
  }
}
//showing the slide
function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
  var dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[slideIndex].classList.add("active");
}
function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// scroll up button
document.getElementById("topbutton").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* go to products page */
document.getElementById("products").addEventListener("click", function () {
  window.location.href = "products.html";
});

//adding items on sale to cart
function addToCart(productId) {
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (cart.length == 0) {
    localStorage.setItem(
      "cart",
      JSON.stringify([{ id: productId, quantity: 1 }])
    );
    displayCart();
    return;
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id == productId) {
        cart[i].quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);
        displayCart();
        return;
      }
    }
    cart.push({ id: productId, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  displayCart();
}
// test
function currentSlide(index) {
  slideIndex = index - 1;
  showSlide(slideIndex);
}

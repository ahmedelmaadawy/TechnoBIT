displayCart();
getName();

localStorage.setItem(
  "products",
  JSON.stringify([
    {
      id: 1,
      productName: "Product 1",
      category: "Category 1",
      price: 100,
      Image: "../Images/Slider/1.jfif",
    },
    {
      id: 2,
      productName: "Product 2",
      category: "Category 2",
      price: 100,
      Image: "../Images/Slider/2.jfif",
    },
    {
      id: 3,
      productName: "Product 3",
      category: "Category 3",
      price: 100,
      Image: "../Images/Slider/3.jfif",
    },
    {
      id: 4,
      productName: "Product 4",
      category: "Category 4",
      price: 100,
      Image: "../Images/Slider/4.jfif",
    },
  ])
);

function getName() {
  for (var i = 0; i < document.cookie.split(";").length; i++) {
    if (document.cookie.split(";")[i].split("=")[0].trim() == "name") {
      document.getElementById("username").innerHTML = document.cookie
        .split(";")
        [i].split("=")[1];
    }
  }
}

// Slider
var slides = document.querySelectorAll(".slides img");
var slideIndex = 0;
var intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 3000);
  }
}

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
}
function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  console.log(slideIndex);
  slideIndex++;
  showSlide(slideIndex);
}
function logout() {
  document.cookie = "";
  window.location.href = "index.html";
}
// scroll up button
document.getElementById("topbutton").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* go to products page */
document.getElementById("products").addEventListener("click", function () {
  window.location.href = "products.html";
});

function displayCart() {
  var count = 0;
  var cart = JSON.parse(localStorage.getItem("cart"));

  for (var i = 0; i < cart.length; i++) {
    count += cart[i].quantity;
  }
  document.getElementById("cart").innerHTML = count;
}

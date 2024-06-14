document.getElementById("username").innerHTML = document.cookie
  .split(";")[0]
  .split("=")[1];
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

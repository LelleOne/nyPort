const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const programmingContainer = document.querySelector(".programming-container");
let leftActive = false;
let rightActive = false;

leftArrow.addEventListener("click", function () {

  programmingContainer.style.transition = "transform 0.5s ease";
  programmingContainer.style.transform = "translateX(0)";
  rightArrow.style.opacity = "0";
  leftArrow.style.transition = "transform 0.3s ease opacity 0.1s ease right 0.5s ease";
});
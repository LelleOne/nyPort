const leftArrow = document.querySelector(".left");
const leftImg = document.querySelector(".left img");
const leftText = document.querySelector(".left span");
const rightArrow = document.querySelector(".right");
const rightImg = document.querySelector(".right img");
const rightText = document.querySelector(".right span");
const programmingContainer = document.querySelector(".programming-container");
const welcome = document.querySelector(".welcome");
const aboutMe= document.querySelector(".AboutMe");
const mobileProj = document.querySelector(".Projects");
const mobileAbout = document.querySelector(".boutMe");
const styleSheet = document.styleSheets[0];
let leftActive = false;
let rightActive = false;
let mobileProjActive = true;
let mobileAboutActive = false;


leftArrow.addEventListener("click", function () {
  if (leftActive == false){
    programmingContainer.style.transition = "transform 0.5s ease";
    programmingContainer.style.transform = "translateX(0)";
    rightArrow.style.opacity = "0";
    rightArrow.style.transform = "translateX(20rem)";
    leftArrow.style.transform = "translateX(95vw) translateY(-50%)";
    leftImg.style.transition = "transform 0.5s ease";
    leftImg.style.transform = "rotate(-180deg)";
    leftText.style.opacity = "0";
    welcome.style.opacity = "0";
    leftActive = true;
  }else{
    programmingContainer.style.transition = "transform 0.4s ease";
    programmingContainer.style.removeProperty("transform")
    rightArrow.style.opacity = "1";
    rightArrow.style.removeProperty("transform");
    leftArrow.style.transform = "translateX(0) translateY(-50%)";
    leftImg.style.transform = "rotate(0deg)";
    leftText.style.removeProperty("opacity");
    welcome.style.removeProperty("opacity");
    leftActive = false;
  }
});

leftArrow.addEventListener("mouseover", function () {
  if (leftActive == false){
    leftArrow.style.transform = 'translateY(-50%) translateX(20px)';
  }else{
    leftArrow.style.transform = 'translateY(-50%) translateX(94vw)';
  }
});

leftArrow.addEventListener("mouseout", function () {
  if (leftActive == false){
    leftArrow.style.transform = 'translateY(-50%) translateX(0px)';
  }else{
    leftArrow.style.transform = 'translateY(-50%) translateX(95vw)';
  }
});

rightArrow.addEventListener("click", function () {
  if (rightActive == false){
    leftArrow.style.opacity = "0";
    rightArrow.style.transform = "translateX(-95vw) translateY(-50%)";
    rightImg.style.transition = "transform 0.5s ease";
    rightImg.style.transform = "rotate(-180deg)";
    rightText.style.opacity = "0";
    welcome.style.opacity = "0";
    aboutMe.style.transform = "translateX(0)";
    rightActive = true;
  }else{
    leftArrow.style.opacity = "1";
    rightArrow.style.transform = "translateX(0) translateY(-50%)";
    rightImg.style.transform = "rotate(0deg)";
    rightText.style.removeProperty("opacity");
    welcome.style.removeProperty("opacity");
    aboutMe.style.removeProperty("transform");
    rightActive = false;
  }
});

rightArrow.addEventListener("mouseover", function () {
  if (rightActive == false){
    rightArrow.style.transform = 'translateY(-50%) translateX(-20px)';
  }else{
    rightArrow.style.transform = 'translateY(-50%) translateX(-94vw)';
  }
});

rightArrow.addEventListener("mouseout", function () {
  if (rightActive == false){
    rightArrow.style.transform = 'translateY(-50%) translateX(0px)';
  }else{
    rightArrow.style.transform = 'translateY(-50%) translateX(-95vw)';
  }
});

mobileAbout.addEventListener("click", function () {
  if (mobileAboutActive == false){
    programmingContainer.style.transition = "transform 0.5s ease";
    programmingContainer.classList.add("inactive-proj");
    aboutMe.classList.remove("inactive-about");
    aboutMe.classList.add("active-about");
    mobileProj.style.opacity = "1"
    mobileAbout.style.opacity = "0.8";
    mobileAboutActive = true;
    mobileProjActive = false;
    aboutMe.style.removeProperty("transform");
    programmingContainer.style.removeProperty("transform");
    welcome.style.removeProperty("opacity");
    rightArrow.style.removeProperty("opacity");
    leftArrow.style.removeProperty("opacity");
  }
});

mobileProj.addEventListener("click", function () {
  if (mobileProjActive == false){
    programmingContainer.style.transition = "transform 0.5s ease";
    programmingContainer.classList.remove("inactive-proj");
    aboutMe.classList.add("inactive-about");
    aboutMe.classList.remove("active-about");
    mobileProj.style.opacity = "0.8"
    mobileAbout.style.opacity = "1";
    mobileAboutActive = false;
    mobileProjActive = true;
    aboutMe.style.removeProperty("transform");
    programmingContainer.style.removeProperty("transform");
  }
});
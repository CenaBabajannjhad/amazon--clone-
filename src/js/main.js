"use strict";

// **carousel area**
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slid-images");
const imagesWidth = images[0].clientWidth;
const lastImageLength = images.length - 1;
let index = 0;
// **side-navbar area**
let target = document.querySelector("#brand");
let sideNavbar = document.querySelector(".burger");
// **drop-down area**
const overLayerPlace = document.querySelector(".carousel");
const overLayerElement = document.createElement("div");
const languageDrop = document.getElementById("language");
const signInDrop = document.getElementById("sign-in");
const dropElements = [languageDrop, signInDrop];

// **carousel area**
setInterval(() => {
  index++;
  slider.style.transform = `translate(${-index * imagesWidth}px)`;

  if (index === lastImageLength || index > lastImageLength) {
    index = 0;
  }
}, 4000);
nextBtn.addEventListener("click", () => {
  index++;
  slider.style.transform = `translate(${-index * imagesWidth}px)`;
  console.log(`nexBtn : ${index}`);

  if (index === 4) {
    index = 0;
  }
});
prevBtn.addEventListener("click", () => {
  if (index !== 0) {
    index--;
    console.log(`preBtn : ${index}`);
    slider.style.transform = `translate(${-index * imagesWidth}px)`;
  }
  if (index === 0) {
    index = 4;
    slider.style.transform = `translate(${-index * imagesWidth}px)`;
  }
});
// **side-navbar area**
target.addEventListener("click", () => {
  sideNavbar.classList.toggle("show-burger");
});
// **drop-down area**
dropElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    overLayerElement.classList.add("overlayer");
    overLayerPlace.appendChild(overLayerElement);
  });
  element.addEventListener("mouseleave", () => {
    document.querySelector(".overlayer").remove();
  });
});

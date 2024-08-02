"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // **carousel area**
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".slid-images");
  const imagesWidth = images[0].clientWidth;
  const lastImageLength = images.length - 1;
  let index = 0;
  //set interval for every 5 secount change slider images
  setInterval(() => {
    index++;
    slider.style.transform = `translate(${-index * imagesWidth}px)`;

    if (index === lastImageLength || index > lastImageLength) {
      index = 0;
    }
  }, 4000);
  // nex btn event
  nextBtn.addEventListener("click", () => {
    index++;
    slider.style.transform = `translate(${-index * imagesWidth}px)`;
    console.log(`nexBtn : ${index}`);

    if (index === 4) {
      index = 0;
    }
  });
  // prev btn event
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
  let target = document.querySelector('#brand');
  let sideNavbar = document.querySelector('.burger');
  // side-navbar event
  target.addEventListener('click' , () => {
    sideNavbar.classList.toggle('show-burger')
  })
});

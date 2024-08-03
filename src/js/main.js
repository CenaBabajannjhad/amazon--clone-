"use strict"

// **boxes data**
const Data = [
  {
    title: "product-1",
    imageSrc: "./assets/image/boxes-img/1.jpg",
  },
  {
    title: "product-2",
    imageSrc: "./assets/image/boxes-img/2.jpg",
  },
  {
    title: "product-3",
    imageSrc: "./assets/image/boxes-img/3.jpg",
  },
  {
    title: "product-4",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-5",
    imageSrc: "./assets/image/boxes-img/5.jpg",
  },
  {
    title: "product-6",
    imageSrc: "./assets/image/boxes-img/6.jpg",
  },
  {
    title: "product-7",
    imageSrc: "./assets/image/boxes-img/7.jpg",
  },
  {
    title: "product-8",
    imageSrc: "./assets/image/boxes-img/8.jpg",
  },
  {
    title: "product-9",
    imageSrc: "./assets/image/boxes-img/9.jpg",
  },
  {
    title: "product-10",
    imageSrc: "./assets/image/boxes-img/10.jpg",
  },
  {
    title: "product-11",
    imageSrc: "./assets/image/boxes-img/11.jpg",
  },
  {
    title: "product-12",
    imageSrc: "./assets/image/boxes-img/12.jpg",
  },
  {
    title: "product-13",
    imageSrc: "./assets/image/boxes-img/13.jpg",
  },
  {
    title: "product-14",
    imageSrc: "./assets/image/boxes-img/14.jpg",
  },
  {
    title: "product-15",
    imageSrc: "./assets/image/boxes-img/15.jpg",
  },
  {
    title: "product-16",
    imageSrc: "./assets/image/boxes-img/16.jpg",
  },
  {
    title: "product-17",
    imageSrc: "./assets/image/boxes-img/17.jpg",
  },
  {
    title: "product-18",
    imageSrc: "./assets/image/boxes-img/18.jpg",
  },
  {
    title: "product-19",
    imageSrc: "./assets/image/boxes-img/19.jpg",
  },
  {
    title: "product-20",
    imageSrc: "./assets/image/boxes-img/20.jpg",
  },
  {
    title: "product-21",
    imageSrc: "./assets/image/boxes-img/21.jpg",
  },
  {
    title: "product-22",
    imageSrc: "./assets/image/boxes-img/22.jpg",
  },
  {
    title: "product-23",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-24",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-25",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-26",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-27",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-28",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-29",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-30",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-31",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-32",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-33",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-34",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-35",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-36",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-37",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-38",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-39",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-40",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-41",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-42",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-43",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-44",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-45",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-46",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-47",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-48",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-49",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-50",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-51",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-52",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-53",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-54",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-55",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-56",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-57",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-58",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-59",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
  {
    title: "product-60",
    imageSrc: "./assets/image/boxes-img/4.jpg",
  },
];
const boxesRoot = document.querySelector("#box-container");
let scrollBoxesCount = 8;
let scrollStep = 0;
// **carousel area**
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slid-images");
const imagesWidth = images[0].clientWidth;
const lastImageLength = images.length - 1;
let index = 0;
// **side-navbar area**
let menuBtn = document.querySelector("#menu");
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
menuBtn.addEventListener("click", () => {
  sideNavbar.classList.add("show-burger");
  overLayerElement.classList.add("overlayer");
  document.querySelector(".header").appendChild(overLayerElement);
  document.querySelector("body").classList.add("overflow-hidden");

  overLayerElement.addEventListener("click", () => {
    document.querySelector("body").classList.remove("overflow-hidden");
    sideNavbar.classList.remove("show-burger");
    overLayerElement.remove()
  });
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

const navBar = document.querySelector(".main__nav");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBar.classList.add("smaller");
  } else {
    navBar.classList.remove("smaller");
  }
}

const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".sideBar");
const nav = document.querySelector(".main__nav");
const main = document.querySelector("main");
const x = document.querySelector(".fa-times");

hamburger.addEventListener("click", function () {
  sideBar.classList.toggle("showing");
  hamburger.classList.toggle("clicked");
  main.classList.toggle("showing");
  nav.classList.toggle("smallerLength");
});

x.addEventListener("click", function () {
  sideBar.classList.toggle("showing");
  hamburger.classList.toggle("clicked");
  main.classList.toggle("showing");
  nav.classList.toggle("smallerLength");
});

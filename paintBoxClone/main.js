const toogleBtn = document.querySelector(".navbar_toogleBtn");
const menu = document.querySelector("nav");

toogleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".logo").classList.add("shrink");
  } else {
    document.querySelector(".logo").classList.remove("shrink");
  }
}

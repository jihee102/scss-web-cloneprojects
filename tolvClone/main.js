const navBar = document.querySelector("nav");

const contents = document.querySelectorAll(".contents");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBar.classList.add("change");
  } else {
    navBar.classList.remove("change");
  }

  const bodyScrolling = document.body.scrollTop;
  const elementScrolling = document.documentElement.scrollTop;

  if (
    (bodyScrolling > 0 && bodyScrolling < 800 && screen.width > 520) ||
    (elementScrolling > 0 && elementScrolling < 800 && screen.width > 520)
  ) {
    contents.forEach(function (item, index) {
      if (index === 0) {
        item.classList.add("fixed");
      } else {
        item.classList.remove("fixed");
      }
    });
  } else if (
    (bodyScrolling > 800 && bodyScrolling < 1600 && screen.width > 520) ||
    (elementScrolling > 800 && elementScrolling < 1600 && screen.width > 520)
  ) {
    contents.forEach(function (item, index) {
      if (index === 1) {
        item.classList.add("fixed");
        contents[2].classList.add("three");
      } else {
        item.classList.remove("fixed");
      }
    });
  } else if (
    (bodyScrolling > 1600 && bodyScrolling < 1800 && screen.width > 520) ||
    (elementScrolling > 1600 && elementScrolling < 180 && screen.width > 5200)
  ) {
    contents.forEach(function (item, index) {
      if (index === 2) {
        item.classList.remove("three");
      } else {
        item.classList.remove("fixed");
      }
    });
  } else {
    contents.forEach(function (item, index) {
      item.classList.remove("fixed");
    });
    // contents[3].classList.add("show");
  }
}

const toggleBtn = document.querySelector(".toggle_button");
const menu = document.querySelector(".menu");
const title = document.querySelector(".title");

toggleBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  title.classList.toggle("active");
});

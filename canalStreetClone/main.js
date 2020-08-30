const body = document.querySelector("body");
const nav = document.querySelector("nav");
const navList = document.querySelector(".nav");
const food = document.querySelector(".food");
const retail = document.querySelector(".retail");
const community = document.querySelector(".community");
const openMain = document.querySelector(".empty");

const navItems = document.querySelectorAll(".navItem");

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    body.classList.add("hideContents");
    nav.classList.add("navExpand");
    navList.style.width = "100%";
    if (item.textContent === "Food") {
      navList.style.gridTemplateColumns = "1fr 60px 60px";
    } else if (item.textContent === "Retail") {
      navList.style.gridTemplateColumns = "60px 1fr 60px";
    } else if (item.textContent === "Community") {
      navList.style.gridTemplateColumns = "60px 60px 1fr";
    }
  });
});

openMain.addEventListener("click", function () {
  body.classList.remove("hideContents");
});

const numbers = document.querySelectorAll(".number");

numbers.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    const image = document.querySelector("img");
    switch (this.textContent) {
      case "#1":
      case "#10":
        image.setAttribute("src", "1.PNG");
        break;
      case "#2":
      case "#9":
        image.src = "2.PNG";
        break;
      case "#3":
      case "#8":
        image.src = "3.PNG";
        break;
      case "#4":
      case "#7":
        image.src = "4.PNG";
        break;
      case "#5":
      case "#6":
        image.src = "5.PNG";
        break;
    }
  });
});

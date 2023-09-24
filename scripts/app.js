let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header__icon");
let menuBtnIcon = document.querySelector(".header__icon i");

menuBtn.addEventListener("click", function () {
  if (menuBtn.ariaExpanded === "false") {
    menu.style.left = "0";
    menuBtnIcon.classList = "fa fa-times";
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    menu.style.left = "-256px";
    menuBtnIcon.classList = "fa fa-bars";
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

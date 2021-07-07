const elMenuParent = document.querySelector(".site-header");
const elMenuToggle = document.querySelector(".menu-toggle");
const elMenuClose = document.querySelector(".menu__close-btn");

elMenuToggle.addEventListener("click", () => {
  elMenuParent.classList.add("site-header--action");
});

elMenuClose.addEventListener("click", () => {
  elMenuParent.classList.remove("site-header--action");
});

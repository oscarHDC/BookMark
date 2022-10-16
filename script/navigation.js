const btnNav = document.querySelector(".main-nav-mobile");
const nav = document.querySelector(".main-nav");
const close = document.querySelector(".close");

btnNav.addEventListener("click", function () {
  nav.classList.toggle("active");
});

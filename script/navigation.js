const btnNav = document.querySelector(".main-nav-mobile");
const nav = document.querySelector(".main-nav");


btnNav.addEventListener("click", function () {
  nav.classList.toggle("active");
});

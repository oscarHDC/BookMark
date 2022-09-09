const links = document.querySelectorAll(".feature-nav-link");
const feature1 = document.querySelector(".feature-first");
const feature2 = document.querySelector(".feature-second");
const feature3 = document.querySelector(".feature-third");

console.log(feature1.parentElement);

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    if (i === 0) {
      feature1.parentElement.classList.add("feature-display");
      feature2.parentElement.classList.remove("feature-display");
      feature3.parentElement.classList.remove("feature-display");
    } else if (i === 1) {
      feature2.parentElement.classList.add("feature-display");
      feature1.parentElement.classList.remove("feature-display");
      feature3.parentElement.classList.remove("feature-display");
    } else if (i === 2) {
      feature3.parentElement.classList.add("feature-display");
      feature1.parentElement.classList.remove("feature-display");
      feature2.parentElement.classList.remove("feature-display");
    }
  });
}

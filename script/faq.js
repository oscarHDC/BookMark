const questionHover = document.querySelectorAll(".question-title");
const question = document.querySelectorAll(".question");

questionHover.forEach((el) => {
  el.addEventListener("click", function () {});
});

for (let i = 0; i < questionHover.length; i++) {
  questionHover[i].addEventListener("click", function () {
    question[i].classList.toggle("faq-display");
  });
}

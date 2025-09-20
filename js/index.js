const questions = document.querySelectorAll(".answer__item");

questions.forEach(questionItem => {
  const toggleButton = questionItem.querySelector(".answer__question-toggle");
  const answerText = questionItem.querySelector(".answer__answer-text");

  questionItem.addEventListener("click", () => {
    toggleButton.classList.toggle("answer__question-toggle-active");
    answerText.classList.toggle("answer__answer-text_hidden");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const myHiddenElement = document.querySelector('.header');

  function handleScroll() {
    const viewportHeight = window.innerHeight;
    const scrollThreshold = viewportHeight;

    if (window.scrollY > scrollThreshold) {
      myHiddenElement.classList.add('is-visible');
    } else {
      myHiddenElement.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

const tops = document.querySelectorAll(".reise__content-item");

tops.forEach((topItem , index) => {
  topItem.style.background = `url('./images/slide${index + 1}.jpg')`;
  topItem.style.backgroundPosition = "center";
  topItem.style.backgroundSize = "cover";
})
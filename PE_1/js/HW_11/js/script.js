`use strict`;

const keys = document.querySelectorAll(`button`);

document.addEventListener(`keyup`, function (e) {
  keys.forEach((el) => {
    el.style.backgroundColor = ``;
  });
  keys.forEach((el) => {
    if (el.outerText.toLowerCase() === e.key.toLowerCase()) {
      el.style.backgroundColor = `blue`;
    }
  });
});

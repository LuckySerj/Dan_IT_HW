`use strict`;

const input = document.querySelectorAll(`.input`);
const showHide = document.querySelectorAll(`.fas`);
const button = document.getElementById(`btn`);
const err = document.createElement(`p`);
err.style.color = `red`;
err.innerHTML = `<br>Нужно ввести одинаковые значения`;

showHide.forEach((el) => {
  el.addEventListener(`click`, showPass);
});

button.addEventListener(`click`, check);
input.forEach((el) => {
  el.addEventListener(`focus`, (errRemove) => err.remove());
});

function showPass(e) {
  if (e.target.previousElementSibling.getAttribute(`type`) === `password`) {
    e.target.classList.replace("fa-eye", "fa-eye-slash");
    e.target.previousElementSibling.setAttribute(`type`, `text`);
  } else {
    e.target.classList.replace("fa-eye-slash", "fa-eye");
    e.target.previousElementSibling.setAttribute(`type`, `password`);
  }
}

function check(e) {
  if (input[0].value === input[1].value) {
    alert(`You are welcome!`);
  } else {
    input[1].after(err);
  }
  e.preventDefault();
}

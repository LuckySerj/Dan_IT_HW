`use strict`;

const input = document.querySelectorAll(`.input`);
const show = document.querySelectorAll(`.fa-eye`);
const hide = document.querySelectorAll(`.fa-eye-slash`);
const button = document.getElementById(`btn`);
const err = document.createElement(`p`);
err.style.color = `red`;
err.innerHTML = `<br>Нужно ввести одинаковые значения`;
console.log(input[1]);

show.forEach((el) => {
  el.addEventListener(`click`, showPass);
});
hide.forEach((el) => {
  el.addEventListener(`click`, hidePass);
});
button.addEventListener(`click`, check);
input.forEach((el) => {
  el.addEventListener(`focus`, (errRemove) => err.remove());
});

function showPass(e) {
  if (e.target.previousElementSibling.getAttribute(`type`, `password`)) {
    e.target.nextElementSibling.style.display = `block`;
    e.target.previousElementSibling.setAttribute(`type`, `text`);
  } else {
    hidePass();
  }

  console.log(e.target);
}

function hidePass(e) {
  e.target.style.display = `none`;
  e.target.previousElementSibling.previousElementSibling.setAttribute(
    `type`,
    `password`
  );
  console.log(e.target);
}

function check(e) {
  if (input[0].value === input[1].value) {
    alert(`You are welcome!`);
  } else {
    input[1].after(err);
  }
  e.preventDefault();
}

`use strict`;

const input = document.createElement(`input`);
input.type = `number`;
input.style.outline = `none`;
input.style.borderRadius = `2px`;
document.body.append(input);

const inputDesc = document.createElement(`span`);
inputDesc.innerHTML = `<br>Price, $  `;
input.before(inputDesc);

const span = document.createElement(`span`);

span.style.padding = `1px`;
console.log(input.value);

const button = document.createElement(`button`);
button.innerHTML = `X`;
button.style.fontSize = `50%`;

const wrongInput = document.createElement(`p`);
wrongInput.innerHTML = `Please enter correct price`;

input.addEventListener(`focus`, focus);
function focus() {
  input.style.border = `2px solid green`;
  wrongInput.remove();
}

input.onblur = function () {
  let price = input.value;
  span.innerHTML = `Your price: ${price}`;
  input.style.border = `2px solid black`;
  input.style.color = `black`;
  if (price > 0) {
    inputDesc.before(span);
    input.style.color = `green`;
    span.append(button);
    button.onclick = function () {
      button.parentElement.remove();
      input.value = ``;
    };
  } else {
    input.style.border = `2px solid red`;
    input.style.color = `black`;
    input.after(wrongInput);
    span.remove();
  }
};

`use strict`;

let input = document.createElement(`input`);
input.type = `text`;
document.body.append(input);
let span = document.createElement(`span`);

input.addEventListener(`focus`, focus);
function focus() {
  input.style.outlineColor = `green`;
}
// input.addEventListener(`blur`, spanPrice);
input.onblur = function () {
  let price = +input.value;
  if (price > 0) {
    span.innerHTML = `Текущая цена: ${input.value}`;
    input.after(span);
  } else {
    console.log(`что-то не так`);
  }
};

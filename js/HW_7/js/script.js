`use strict`;

let selector = document.querySelector(`#div`);
let list = function (arr, parent = document.body) {
  let inarr = arr.map((elem) => `<li>${elem}</li>`);
  parent.innerHTML = `<ul>${inarr.join(" ")}</ul>`;
};

list(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], selector);

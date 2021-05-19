`use strict`;

let list = function (arr, parent = document.body) {
  if (parent !== document.body) {
    parent = document.getElementById(parent);
  }
  let inarr = arr.map((elem) => `<li>${elem}</li>`);
  let outarr = `<ul>${inarr}</ul>`;
  outarr = outarr.replace(/,/g, ``);
  parent.innerHTML = outarr;
};

list(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], "div");

`use strict`;

function filterBy(arr, type) {
  return arr.filter((el) => typeof el !== type);
}
console.log([2, "2", null, true, 5, "3"], "string");

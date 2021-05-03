`use strict`;

function filterBy(arr, type) {
  return arr.filter((el) => typeof el !== type);
}

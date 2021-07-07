`use strict`;

document.querySelector(".burger").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".burger").classList.toggle("burger--active");
  document.querySelector(".menu").classList.toggle("menu--opened");
});

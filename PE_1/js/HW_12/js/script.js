`use strict`;

const sliderWrapper = document.getElementById(`images-wrapper`);

const slide = document.querySelectorAll(`.image-to-show`);
let current = 0;

const pauseBtn = document.createElement(`button`);
pauseBtn.innerHTML = `Pause`;
pauseBtn.style.marginLeft = `50px`;
pauseBtn.style.marginTop = `50px`;
sliderWrapper.after(pauseBtn);

resumeBtn = document.createElement(`button`);
resumeBtn.innerHTML = `Resume`;
resumeBtn.style.marginTop = `50px`;
resumeBtn.style.marginLeft = `50px`;
pauseBtn.after(resumeBtn);

let timerId = setInterval(
  (slider = function () {
    slide.forEach((el) => {
      if (el.classList.contains(`active`)) {
        el.classList.remove(`active`);
      }
    });
    slide[current + 1].classList.add(`active`);

    if (current + 2 === slide.length) {
      current = -1;
    } else {
      current++;
    }
  }),
  3000
);

pauseBtn.onclick = function () {
  clearInterval(timerId);
};
resumeBtn.onclick = function () {
  clearInterval(timerId);
  timerId = setInterval(slider, 3000);
};

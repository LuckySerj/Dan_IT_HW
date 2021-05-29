`use strict`;

const tab = function () {
  const tabContent = document.querySelectorAll(`.tab-content`);
  const tabs = document.querySelector(`.tabs`);

  tabs.addEventListener(`click`, selectTabNav);
  function selectTabNav(e) {
    if (e.target) {
      document.querySelector(`.active`).classList.remove(`active`);
      e.target.classList.add(`active`);
      let tabName = e.target.getAttribute(`data-tab-name`);
      selectTabContent(tabName);
    }
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add(`active`)
        : item.classList.remove(`active`);
    });
  }
};

tab();

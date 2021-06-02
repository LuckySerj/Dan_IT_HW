`use strict`;

const logoSpan = document.getElementById(`logoSpan`);
const headNav = document.getElementById(`headNav`);
const changeThemeBtn = document.getElementById(`changeThemeBtn`);
const footNav = document.getElementById(`footNav`);

const newTheme = function () {
  if (localStorage.getItem(`theme`) === `newTheme`) {
    changeThemeBtn.classList.add(`new-theme-head`);
    logoSpan.classList.add(`new-theme-span`);
    headNav.classList.add(`new-theme-head`);
    footNav.classList.add(`new-theme-foot`);
  }
};
newTheme();

const defaultTheme = function () {
  if (localStorage.getItem(`theme`) === `defaultTheme`) {
    changeThemeBtn.classList.remove(`new-theme-head`);
    logoSpan.classList.remove(`new-theme-span`);
    headNav.classList.remove(`new-theme-head`);
    footNav.classList.remove(`new-theme-foot`);
  }
};
defaultTheme();

changeThemeBtn.onclick = function () {
  if (
    localStorage.getItem(`theme`) === null ||
    localStorage.getItem(`theme`) === `defaultTheme`
  ) {
    localStorage.setItem(`theme`, `newTheme`);
    newTheme();
    return;
  }

  if (localStorage.getItem(`theme`) === `newTheme`) {
    localStorage.setItem(`theme`, `defaultTheme`);
    defaultTheme();
    return;
  }
};

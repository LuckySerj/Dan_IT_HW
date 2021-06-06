`use strict`;

const logoSpan = document.getElementById(`logoSpan`);
const headNav = document.getElementById(`headNav`);
const changeThemeBtn = document.getElementById(`changeThemeBtn`);
const footNav = document.getElementById(`footNav`);

const changeTheme = function () {
  switch (localStorage.getItem(`theme`)) {
    case `newTheme`:
      changeThemeBtn.classList.add(`new-theme-head`);
      logoSpan.classList.add(`new-theme-span`);
      headNav.classList.add(`new-theme-head`);
      footNav.classList.add(`new-theme-foot`);
      break;

    case `defaultTheme`:
      changeThemeBtn.classList.remove(`new-theme-head`);
      logoSpan.classList.remove(`new-theme-span`);
      headNav.classList.remove(`new-theme-head`);
      footNav.classList.remove(`new-theme-foot`);
      break;
  }
};
changeTheme();

changeThemeBtn.onclick = function () {
  switch (localStorage.getItem(`theme`)) {
    case `defaultTheme`:
      localStorage.setItem(`theme`, `newTheme`);
      changeTheme();
      break;
    case null:
      localStorage.setItem(`theme`, `newTheme`);
      changeTheme();
      break;

    case `newTheme`:
      localStorage.setItem(`theme`, `defaultTheme`);
      changeTheme();
      break;
  }
};

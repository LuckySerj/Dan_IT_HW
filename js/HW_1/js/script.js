"use strict";
const userName = prompt("Enter your Name:");
let userAge = prompt("How old are you?");

if (
  !isNaN(+userAge) &&
  userAge !== "" &&
  userAge !== null &&
  userName !== "" &&
  userName !== null
) {
  if (+userAge < 18) {
    alert("You are not allowed to visit this website");
  } else if (18 <= +userAge && +userAge <= 22) {
    if (confirm("Are you sure you want to continue?")) {
      alert(`Welcome, ${userName}`);
    } else {
      alert("You are not allowed to visit this website");
    }
  } else {
    alert(`Welcome, ${userName}`);
  }
} else {
  alert("Incorrect data entered");
}

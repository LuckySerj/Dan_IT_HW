"use strict";

const userNum = prompt("Enter the number:");
if (
  !isNaN(userNum) &&
  userNum !== null &&
  userNum.trim() !== "" &&
  +userNum >= 0
) {
  for (let i = 0; i <= +userNum; i += 5) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
} else {
  console.log("Sorry, no numbers");
}

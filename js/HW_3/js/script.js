"use strict";

const calculate = function (firstNumber, secondNumber, operation) {
  do {
    firstNumber = prompt("Enter the first number:", firstNumber);
    secondNumber = prompt("Enter the second number:", secondNumber);
  } while (
    !firstNumber ||
    typeof +firstNumber !== "number" ||
    isNaN(+firstNumber) ||
    firstNumber.trim() === "" ||
    !secondNumber ||
    typeof +secondNumber !== "number" ||
    isNaN(+secondNumber) ||
    secondNumber.trim() === ""
  );

  do {
    operation = prompt("Enter the operation (+, -, *, /):", operation);
  } while (!operation || operation.trim() === "");

  if (operation === "+") {
    console.log(+firstNumber + +secondNumber);
  } else if (operation === "-") {
    console.log(firstNumber - secondNumber);
  } else if (operation === "*") {
    console.log(firstNumber * secondNumber);
  } else if (operation === "/") {
    console.log(firstNumber / secondNumber);
  } else {
    console.log("You entered wrong operation");
  }
};

calculate();

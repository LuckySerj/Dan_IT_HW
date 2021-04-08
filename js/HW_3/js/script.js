"use strict";

let firstNumber;
let secondNumber;
let operation;
let result;

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

const calculate = function (firstNumber, secondNumber, operation, result) {
  switch (operation) {
    case "+":
      result = +firstNumber + +secondNumber;
      break;
    case "-":
      result = +firstNumber - +secondNumber;
      break;
    case "*":
      result = +firstNumber * +secondNumber;
      break;
    case "/":
      result = +firstNumber / +secondNumber;
      break;
    default:
      result = "You entered wrong operation";
      break;
  }
  return result;
};

console.log(calculate(firstNumber, secondNumber, operation, result));

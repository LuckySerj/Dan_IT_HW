"use strict";

let firstNumber;
let secondNumber;
let operation;

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

const calculate = function (num1, num2, math) {
  switch (math) {
    case "+":
      return +num1 + +num2;

    case "-":
      return +num1 - +num2;

    case "*":
      return +num1 * +num2;

    case "/":
      return +num1 / +num2;

    default:
      return "You entered wrong operation";
  }
};

console.log(calculate(firstNumber, secondNumber, operation));

"use strict";

class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  get salary() {
    return this._salary;
  }

  set name(name) {
    this._name = name;
  }
  set age(age) {
    this._age = age;
  }

  set salary(salary) {
    this._salary = salary;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this._lang = lang;
  }
  get salary() {
    return this._salary * 3;
  }
}

const ivan = new Programmer("Ivan", 30, 1000, "English");
console.log(ivan);
console.log(ivan.salary);

const mariia = new Programmer("Mariia", 25, 800, "German");
console.log(mariia);
console.log(mariia.salary);

const petr = new Programmer("Petr", 33, 1700, "English, French");
console.log(petr);
console.log(petr.salary);

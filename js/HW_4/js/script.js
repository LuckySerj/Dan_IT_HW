`use strict`;

function createNewUser() {
  this.firstName = prompt("Введите имя");
  this.lastName = prompt("Введите фамилию");

  this.getLogin = function () {
    let login = (this.firstName[0] + this.lastName).toLowerCase();
    return login;
  };
}

let newUser = new createNewUser();
console.log(newUser.getLogin());

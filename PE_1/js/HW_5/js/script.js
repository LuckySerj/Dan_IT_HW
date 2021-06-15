`use strict`;

function createNewUser() {
  this.firstName = prompt("Введите имя");
  this.lastName = prompt("Введите фамилию");
  this.birthday = prompt("Введите дату рождения в формате dd.mm.yyyy");
  this.getLogin = function () {
    let login = (this.firstName[0] + this.lastName).toLowerCase();
    return login;
  };
  this.getAge = function () {
    let year = this.birthday.substring(6, 10);
    let mounth = this.birthday.substring(3, 5);
    let day = this.birthday.substring(0, 2);
    let now = new Date();
    let dob = new Date(year, mounth, day);
    let age = now.getFullYear() - dob.getFullYear();
    if (
      now.getMonth() < dob.getMonth() ||
      (now.getMonth() == dob.getMonth() && now.getDate() < dob.getDate())
    ) {
      age = age - 1;
    }
    return age;
  };
  this.getPassword = function () {
    return (
      this.firstName[0].toUpperCase() +
      this.lastName.toLowerCase() +
      this.birthday.substring(6, 10)
    );
  };
}

let newUser = new createNewUser();
console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());

`use strict`;

const name = prompt("Введите имя");
const surname = prompt("Введите фамилию");
function createNewUser(firstName, lastName) {
  const newUser = {
    firstName,
    lastName,
    getLogin() {
      return (this.firstName[0] + this.lastName).toLowerCase();
    },
  };
  newUser.login = newUser.getLogin();

  return newUser;
}

console.log(createNewUser(name, surname));

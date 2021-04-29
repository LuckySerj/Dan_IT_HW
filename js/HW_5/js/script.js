`use strict`;
const name = prompt("Введите имя");
const surname = prompt("Введите фамилию");
const birth = prompt("Введите дату рождения в формате dd.mm.yyyy");
function createNewUser(firstName, lastName, birthday) {
  const newUser = {
    firstName,
    lastName,
    getLogin() {
      return (this.firstName[0] + this.lastName).toLowerCase();
    },
    birthday,
    getAge() {
      year = this.birthday.substring(6, 10);
      mounth = this.birthday.substring(3, 5);
      day = this.birthday.substring(0, 2);
      let now = new Date();
      let dob = new Date(year, mounth, day);
      age = now.getFullYear() - dob.getFullYear();
      if (
        now.getMonth() < dob.getMonth() ||
        (now.getMonth() == dob.getMonth() && now.getDate() < dob.getDate())
      ) {
        age = age - 1;
      }
      return age;
    },
    getPassword() {
      return (
        this.firstName[0].toUpperCase() +
        this.lastName.toLowerCase() +
        this.birthday.substring(6, 10)
      );
    },
  };
  newUser.age = newUser.getAge();
  newUser.login = newUser.getLogin();
  newUser.password = newUser.getPassword();
  console.log(newUser.age);
  console.log(newUser.password);
  return newUser;
}

console.log(createNewUser(name, surname, birth));

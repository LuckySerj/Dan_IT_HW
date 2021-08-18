"use strict";
const wrapper = document.querySelector("#root");
const books = [
  {
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Воин-пророк",
  },
  {
    name: "Тысячекратная мысль",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70,
  },
  {
    author: "Дарья Донцова",
    name: "Детектив на диете",
    price: 40,
  },
  {
    author: "Дарья Донцова",
    name: "Дед Снегур и Морозочка",
  },
];

function validateBook(book) {
  if (!book.hasOwnProperty("author")) {
    throw new Error("There is no author");
  }
  if (!book.hasOwnProperty("name")) {
    throw new Error("There is no name");
  }
  if (!book.hasOwnProperty("price")) {
    throw new Error("There is no price");
  }
}

let list = function (item, root) {
  let ul = document.createElement("ul");
  let elem = document.createElement("li");
  ul.append(elem);
  root.append(ul);
  elem.innerText = `${item.slice(1, -1)}`;
};

books.forEach((e) => {
  try {
    validateBook(e);
    let string = JSON.stringify(e);
    let newSrting = string
      .replace('"author":', "Автор: ")
      .replace('"name":', "\nНазвание книги: ")
      .replace('"price":', "\nЦена: ");
    list(newSrting, wrapper);
  } catch (error) {
    console.error(error);
  }
});

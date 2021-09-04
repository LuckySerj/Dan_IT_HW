"use strict";

const root = document.querySelector("#root");

const usersUrl = "https://ajax.test-danit.com/api/json/users";
const postsUrl = "https://ajax.test-danit.com/api/json/posts";

const makeRequest = (url) =>
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Server Error");
      }
    })
    .catch((err) => {
      console.error(err.message);
    });

class Card {
  constructor(title, text, name, email, id) {
    this.title = title;
    this.text = text;
    this.name = name;
    this.email = email;
    this.id = id;
  }

  render() {
    const cardWrapper = this.createElement("div", "", "card");
    const deleteBtn = this.createElement(
      "button",
      "X",
      "card__delete",
      `${this.id}`
    );
    const cardTitle = this.createElement("h2", this.title, "card__title");
    const cardText = this.createElement("p", this.text, "card__text");
    const cardName = this.createElement("p", this.name, "card__name");
    const cardEmail = this.createElement("p", this.email, "card__email");
    cardWrapper.append(
      ...[cardName, cardEmail, cardTitle, cardText, deleteBtn]
    );
    return cardWrapper;
  }

  createElement(tagName, text = "", className = "", id = "") {
    const element = document.createElement(tagName);
    element.innerText = text;
    element.classList.add(className);
    if (id !== "") {
      element.id = id;
    }
    return element;
  }
}

function getUser() {
  const users = makeRequest(usersUrl);
  users.then((users) => {
    users.forEach((user) => {
      const { id, name, email } = user;
      makeRequest(`${usersUrl}/${id}/posts`).then((posts) => {
        posts.forEach((post) => {
          const { id, title, body } = post;
          const card = new Card(title, body, name, email, id);
          const cardItem = card.render();
          root.append(cardItem);
        });
      });
    });
  });
}

root.addEventListener("click", deletePost);
function deletePost(e) {
  if (e.target.classList.contains("card__delete")) {
    fetch(`${postsUrl}/${e.target.id}`, { method: "DELETE" });
    e.target.parentElement.remove();
  }
}
getUser();

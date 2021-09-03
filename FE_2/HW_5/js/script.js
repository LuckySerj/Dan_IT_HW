"use strict";

const root = document.querySelector("#root");
const usersUrl = "https://ajax.test-danit.com/api/json/users";

const makeRequest = (url) =>
  fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Server Error");
    }
  });

class Card {
  constructor(title, text, name, email) {
    this.title = title;
    this.text = text;
    this.name = name;
    this.email = email;
  }

  render() {
    const cardWrapper = this.createElement("div", "", "card");
    const cardTitle = this.createElement("h2", this.title, "card__title");
    const cardText = this.createElement("p", this.text, "card__text");
    const cardName = this.createElement("p", this.name, "card__name");
    const cardEmail = this.createElement("p", this.email, "card__email");
    cardWrapper.append(...[cardName, cardEmail, cardTitle, cardText]);
    return cardWrapper;
  }

  createElement(tagName, text = "", className = "") {
    const element = document.createElement(tagName);
    element.innerText = text;
    element.classList.add(className);
    return element;
  }
}

function getPost(id) {
  const postArr = makeRequest(`${usersUrl}/${id}/posts`);
  return postArr;
}

function getUser() {
  const users = makeRequest(usersUrl);
  users.then((users) => {
    users.forEach((user) => {
      const { id, name, email } = user;
      getPost(id).then((posts) => {
        posts.forEach((post) => {
          const { title, body } = post;
          const card = new Card(title, body, name, email);
          const cardItem = card.render();
          root.append(cardItem);
        });
      });
    });
  });
}
getUser();

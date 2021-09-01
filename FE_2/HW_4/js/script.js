"use strict";

const BASE_URL = "https://ajax.test-danit.com/api/swapi/films";

const makeRequest = (url) =>
  fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Server Error");
    }
  });

const getFilms = makeRequest(BASE_URL);

const createElement = function (text, data = "", tagName = "p") {
  const element = document.createElement(tagName);
  element.textContent = `${text} ${data}`;
  return element;
};

getFilms
  .then((films) => {
    films.forEach(({ episodeId, name, openingCrawl, characters }) => {
      const films = {
        container: document.createElement("div"),
        list: document.createElement("ul"),
        title: createElement("Название:", name, "h3"),
        episode: createElement("Эпизод:", episodeId),
        description: createElement("Краткое описание:", openingCrawl),
        characters: createElement("Персонажи:"),
      };
      Promise.all(
        characters.map((characterUrl) => {
          return makeRequest(characterUrl).then(({ name }) => {
            const li = createElement("", name, "li");
            return li;
          });
        })
      ).then((li) => {
        films.list.append(...li);
      });
      films.container.append(
        films.title,
        films.characters,
        films.list,
        films.episode,
        films.description
      );
      document.body.append(films.container);
    });
  })
  .catch((e) => console.error(e.message));

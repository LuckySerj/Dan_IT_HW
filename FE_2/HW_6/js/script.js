"use strict";
const clientIp = "https://api.ipify.org/?format=json";
const ipService = "http://ip-api.com/json/";

const checkIpBtn = document.querySelector(".ipCheck");
const makeRequest = async (url) => {
  return await fetch(url)
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
};

class IPCheck {
  constructor(continent, country, region, city, district) {
    this.continent = continent;
    this.country = country;
    this.region = region;
    this.city = city;
    this.district = district;
  }

  render() {
    const adressWrapper = this.createElement("ul", "", "adress");
    const continent = this.createElement(
      "li",
      this.continent,
      "adress__continent"
    );
    const country = this.createElement("li", this.country, "adress__country");
    const region = this.createElement("li", this.region, "adress__region");
    const city = this.createElement("li", this.city, "adress__city");
    const district = this.createElement(
      "li",
      this.district,
      "adress__district"
    );

    adressWrapper.append(...[continent, country, region, city, district]);
    return adressWrapper;
  }

  createElement(tagName, text = "", className = "") {
    const element = document.createElement(tagName);
    element.innerText = text;
    element.classList.add(className);
    return element;
  }
}

checkIpBtn.addEventListener("click", ipCheck);
async function ipCheck(e) {
  root.innerHTML = "";
  const client = await makeRequest(clientIp);
  const adress = await makeRequest(
    `${ipService}${client.ip}?fields=status,continent,country,regionName,city,district,query`
  );
  const { continent, country, regionName, city, district } = adress;
  const check = new IPCheck(continent, country, regionName, city, district);

  const ipPlacement = check.render();
  root.append(ipPlacement);
}

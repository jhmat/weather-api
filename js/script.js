const apiKey = "654586f1b5d790ddc77dd6aad9ea44ce";

const inputCity = document.querySelector("#input-city");
const searchBtn = document.querySelector("#search-btn");

const cityNameElement = document.querySelector("#city-name");
const countryElement = document.querySelector("#country-flag");
const temperatureElement = document.querySelector("#temp");
const wtConditionElement = document.querySelector("#weather-condition");
const wtIconElement = document.querySelector("#weather-icon");
const umidityElement = document.querySelector("#umidity-percent");
const windElement = document.querySelector("#wind-speed");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = inputCity.value;
});

const apiKey = "3772b8c0a8699f8a8b16ae384e24d7dd";

const inputCity = document.querySelector("#input-city");
const searchBtn = document.querySelector("#search-btn");

const cityNameElement = document.querySelector("#city-name");
const countryElement = document.querySelector("#country-flag");
const temperatureElement = document.querySelector("#temp");
const wtConditionElement = document.querySelector("#weather-condition");
const wtIconElement = document.querySelector("#weather-icon");
const humidityElement = document.querySelector("#humidity-percent");
const windElement = document.querySelector("#wind-speed");

const getWeatherData = async (city) => {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

  const res = await fetch(apiURL);
  const data = await res.json();

  return data;
};

const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  cityNameElement.innerText = data.name;
  countryElement.setAttribute(
    "src",
    `https://flagsapi.com/${data.sys.country}/flat/48.png`
  );
  temperatureElement.innerText = parseInt(data.main.temp);
  wtConditionElement.innerText = data.weather[0].description;
  wtIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${parseInt(data.wind.speed)}km/h`;

  inputCity.value = "";
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = inputCity.value;
  showWeatherData(city);
});

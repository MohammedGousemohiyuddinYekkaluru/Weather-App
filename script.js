const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const error = document.querySelector(".error");

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const apiKey = "32264c2d73bb7de67651a316b0a547f2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(ecity) {
  const response = await fetch(apiUrl + ecity + `&appid=${apiKey}`);

  if (response.status === 404) {
    error.style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  } else {
    let data = await response.json();

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
     error.style.display = "none";
  }
}

function handleSearch() {
  const cityName = searchBox.value.trim();
  if (cityName === "") {
    error.style.display = "block";
    error.querySelector("p").textContent = "Please enter a city name";
    document.querySelector(".weather").style.display = "none";
    return;
  }
  checkWeather(cityName);
  searchBox.value = "";
}

searchBtn.addEventListener("click", handleSearch);
searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});
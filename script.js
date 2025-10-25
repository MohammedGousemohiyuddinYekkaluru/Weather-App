const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const card = document.querySelector(".card");
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
    card.style.background = 'linear-gradient(135deg, #00feba, #5b548a)';
    document.querySelector(".weather").style.display = "none";
    return;
  } else {
    let data = await response.json();

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      //weatherIcon image
      weatherIcon.src = "images/clouds.png";
      //weather condition image

      card.style.background = "url(https://images.unsplash.com/photo-1506624682682-13fa0130f321?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687)";

      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";

    } else if (data.weather[0].main == "Clear") {

      weatherIcon.src = "images/clear.png";

      card.style.background = "url(https://images.unsplash.com/photo-1607280719353-3272826b21cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687)";

      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";

    } else if (data.weather[0].main == "Rain") {

      weatherIcon.src = "images/rain.png";

      card.style.background = "url(https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735)";

      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";

    } else if (data.weather[0].main == "Drizzle") {

      weatherIcon.src = "images/drizzle.png";

      card.style.background = "url(https://images.unsplash.com/photo-1602755139240-dbbf8bb0c92f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687)";

      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";

    } else if (data.weather[0].main == "Mist") {

      weatherIcon.src = "images/mist.png";

      card.style.background = "url(https://images.unsplash.com/photo-1628534262701-0ada95e46152?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627)";

      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";

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
})
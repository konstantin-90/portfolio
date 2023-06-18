const form = document.querySelector('form');
const cityInput = document.getElementById('city');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = cityInput.value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const pressure = data.main.pressure;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const speed = data.wind.speed;
      const deg = data.wind.deg;
      const icon = data.weather[0].icon;

      document.getElementById('temp').textContent = temp;
      document.getElementById('pressure').textContent = pressure;
      document.getElementById('description').textContent = description;
      document.getElementById('humidity').textContent = humidity;
      document.getElementById('speed').textContent = speed;
      document.getElementById('deg').textContent = deg;
      document.getElementById('icon').setAttribute('src', `http://openweathermap.org/img/w/${icon}.png`);
    })
    .catch(error => alert(`${error} Enter corect city. Try another city`));
});

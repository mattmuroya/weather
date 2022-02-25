const weather = (() => {
  const key = 'a9847e096b6f464f9a9235039222402';
  const city = document.getElementById('city');
  const region = document.getElementById('region');
  const country = document.getElementById('country');
  const error = document.getElementById('error');
  const img = document.getElementById('weather-img');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('weather-description');

  let currentCity;

  async function fetchWeather(location, unit) {
    try {
      error.textContent = '';
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=${location}&key=${key}`,
        { mode: 'cors' },
      );
      const data = await response.json();
      currentCity = data;
      setWeatherDisplay(data);
      setTemp(unit);
    } catch (err) {
      error.textContent = 'No weather data found for this location';
    }
  }

  function setWeatherDisplay(data) {
    city.textContent = data.location.name;
    region.textContent = data.location.region === ''
      ? ''
      : `${data.location.region}, `;
    country.textContent = data.location.country;
    img.src = data.current.condition.icon;
    img.alt = data.current.condition.text;
    description.textContent = data.current.condition.text;
  }

  function setTemp(unit) {
    if (unit === 'c') temperature.textContent = `${currentCity.current.temp_c} \xB0C`;
    if (unit === 'f') temperature.textContent = `${currentCity.current.temp_f} \xB0F`;
  }

  return { fetchWeather, setTemp };
})();

export default weather;
import './style.css';
import weather from './modules/weather';

(() => {
  const form = document.getElementById('form');
  const searchField = document.getElementById('search-field');
  const toggle = document.getElementById('toggle');

  const getUnit = () => (toggle.checked ? 'c' : 'f');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    weather.fetchWeather(searchField.value, getUnit());
  });

  toggle.addEventListener('click', () => {
    weather.setTemp(getUnit());
  });

  weather.fetchWeather('Honolulu', getUnit());
})();
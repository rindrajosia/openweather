import card from './card';
import getWeather from '../controller/weather';
import weatherInfo from '../models/info';

const toggle = async (data) => {
  const checkBox = document.getElementById('myCheck');
  if (checkBox.checked === false) {
    const dataWeather = await getWeather(data.getInfo().country, 'metric');
    const info = weatherInfo(data.getInfo().image, dataWeather.city.name,
      dataWeather.list[0].weather[0].description, dataWeather.list[0].main.temp,
      dataWeather.list[0].main.temp_max, dataWeather.list[0].main.temp_min,
      dataWeather.list[0].main.humidity, dataWeather.list[0].main.pressure);
    card(info, 'C°');
  } else {
    const dataWeather = await getWeather(data.getInfo().country);
    const info = weatherInfo(data.getInfo().image, dataWeather.city.name,
      dataWeather.list[0].weather[0].description, dataWeather.list[0].main.temp,
      dataWeather.list[0].main.temp_max, dataWeather.list[0].main.temp_min,
      dataWeather.list[0].main.humidity, dataWeather.list[0].main.pressure);
    card(info);
  }
};

export default toggle;

import getImage from '../controller/image';
import getWeather from '../controller/weather';
import weatherInfo from '../models/info';
import HttpError from '../models/httperror';
import display from './display';
import displayError from './getError';

const render = async (inputCity) => {
  let dataWeather;

  try {
    dataWeather = await getWeather(inputCity);
    const dataImage = await getImage(dataWeather.list[0].weather[0].main);
    const info = weatherInfo(dataImage, dataWeather.city.name,
      dataWeather.list[0].weather[0].description, dataWeather.list[0].main.temp,
      dataWeather.list[0].main.temp_max, dataWeather.list[0].main.temp_min,
      dataWeather.list[0].main.humidity, dataWeather.list[0].main.pressure);
    display(info);
  } catch (err) {
    if (err instanceof HttpError && err.response.status === 404) {
      displayError('City not found');
    } else {
      throw err;
    }
  }
};

export default render;

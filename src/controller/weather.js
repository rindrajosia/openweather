import HttpError from '../models/httperror';

const getWeather = async (city, unit = 'imperial') => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&APPID=860d9b61b8c2194f272f3ec98539f779`, { mode: 'cors' });
  if (response.status === 200) {
    return response.json();
  }
  throw new HttpError(response);
};

export default getWeather;

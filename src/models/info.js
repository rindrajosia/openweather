const weatherInfo = (image, country, weather, temp, tempmax, tempmin, humidity, pressure) => {
  const getInfo = () => ({
    image,
    country,
    weather,
    temp,
    tempmax,
    tempmin,
    humidity,
    pressure,
  });

  return {
    getInfo,
  };
};
export default weatherInfo;

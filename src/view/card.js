const card = (data, unit = 'F°') => {
  const contentCenter = document.getElementById('contentCenter');

  if (document.contains(document.getElementById('card'))) {
    document.getElementById('card').remove();
  }

  const card = document.createElement('div');
  card.classList.add('card', 'mb-3');
  card.setAttribute('id', 'card');

  const img = document.createElement('img');
  img.setAttribute('src', data.getInfo().image);
  img.setAttribute('id', 'img-size');
  img.classList.add('card-img-top');

  card.appendChild(img);

  const cardheader = document.createElement('div');
  cardheader.classList.add('card-header');

  const country = document.createElement('h6');
  country.classList.add('card-title', 'text-center');
  country.innerHTML = `City : ${data.getInfo().country}`;

  cardheader.appendChild(country);

  card.appendChild(cardheader);

  const cardbody = document.createElement('div');
  cardbody.classList.add('card-body');

  const weather = document.createElement('p');
  weather.classList.add('card-text', 'text-center');
  weather.innerHTML = `Weather : ${data.getInfo().weather}`;

  cardbody.appendChild(weather);

  const temp = document.createElement('p');
  temp.classList.add('card-text', 'text-center');
  temp.innerHTML = `Temp : ${data.getInfo().temp}  ${unit}`;

  cardbody.appendChild(temp);

  const tempmax = document.createElement('p');
  tempmax.classList.add('card-text', 'text-center');
  tempmax.innerHTML = `Temp Max : ${data.getInfo().tempmax}  ${unit}`;

  cardbody.appendChild(tempmax);

  const tempmin = document.createElement('p');
  tempmin.classList.add('card-text', 'text-center');
  tempmin.innerHTML = `Temp Min : ${data.getInfo().tempmin} ${unit}`;

  cardbody.appendChild(tempmin);

  const humidity = document.createElement('p');
  humidity.classList.add('card-text', 'text-center');
  humidity.innerHTML = `Humidity : ${data.getInfo().humidity}`;

  cardbody.appendChild(humidity);

  const pressure = document.createElement('p');
  pressure.classList.add('card-text', 'text-center');
  pressure.innerHTML = `Pressure : ${data.getInfo().pressure}`;

  cardbody.appendChild(pressure);

  card.appendChild(cardbody);

  contentCenter.appendChild(card);
};

export default card;

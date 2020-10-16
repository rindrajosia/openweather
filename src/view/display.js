import card from './card';
import toggle from './toggle';

const display = (data) => {
  if (document.contains(document.getElementById('content'))) {
    document.getElementById('content').remove();
  }
  const content = document.createElement('div');
  content.classList.add('container-fluid');
  content.setAttribute('id', 'content');

  const contentCenter = document.createElement('div');
  contentCenter.classList.add('row', 'justify-content-center', 'align-items-center');
  contentCenter.setAttribute('id', 'contentCenter');

  const contentToogle = document.createElement('div');
  contentToogle.classList.add('form-row', 'justify-content-center', 'align-items-center', 'mt-2', 'col-12');

  const toogleDiv = document.createElement('div');
  toogleDiv.classList.add('my-1');

  const celcius = document.createElement('span');
  celcius.classList.add('span', 'align-top', 'pr-2');
  celcius.innerHTML = 'Celcius';
  toogleDiv.appendChild(celcius);

  const switchLabel = document.createElement('label');
  switchLabel.classList.add('switch');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('form-control');
  checkbox.setAttribute('id', 'myCheck');
  checkbox.setAttribute('checked', true);
  checkbox.onclick = () => toggle(data);
  switchLabel.appendChild(checkbox);

  const span = document.createElement('span');
  span.classList.add('slider', 'round');
  switchLabel.appendChild(span);

  const fahrenheit = document.createElement('span');
  fahrenheit.classList.add('span', 'align-top', 'pl-2');
  fahrenheit.innerHTML = 'Fahrenheit';
  toogleDiv.appendChild(switchLabel);

  toogleDiv.appendChild(fahrenheit);

  contentToogle.appendChild(toogleDiv);

  contentCenter.appendChild(contentToogle);
  content.appendChild(contentCenter);
  document.body.appendChild(content);
  card(data);
};

export default display;

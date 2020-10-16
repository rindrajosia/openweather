import render from '../view/render';

const formCity = () => {
  const form = document.getElementById('city');
  form.addEventListener('submit', (e) => {
    const inputCity = document.getElementById('inputCity').value;
    render(inputCity);
    form.reset();
    e.preventDefault();
  });
};

export default formCity;

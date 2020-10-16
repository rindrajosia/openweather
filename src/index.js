
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import modalError from './view/error';
import search from './view/search';
import formCity from './events/formCity';

(async () => {
  modalError();
  search();
  formCity();
})();

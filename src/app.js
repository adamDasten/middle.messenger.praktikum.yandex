import { routes } from './consts/routes';
import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const location = window.location.pathname;
  const currentRoute = routes[location] ?? routes['/fourty'];
  app.innerHTML = currentRoute;
});

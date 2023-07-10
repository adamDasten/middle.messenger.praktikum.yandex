import Handlebars from 'handlebars/runtime';
import LoginPage from './feature/Forms/Login/pages/LoginPage';

import './styles/index.scss';
import Button from './common/Button';
import RegistrationPage from './feature/Forms/Registration/pages/RegistrationPage/RegistrationPage';
import FiftyPage from './feature/Error/pages/FiftyPage/FiftyPage';
import FourtyPage from './feature/Error/pages/FourtyPage/FourtyPage';
import RowData from './feature/Profile/atoms/RowData';
import ActionBtn from './feature/Profile/atoms/ActionBtn/ActionBtn';
import About from './feature/Profile/molecules/About/About';
import InfoPage from './feature/Profile/pages/Info';
import ChangeDataPage from './feature/Profile/pages/ChangeData';
import ChangePasswordPage from './feature/Profile/pages/ChangePassword';
import ChatPage from './feature/Chat/pages/ChatPage';
import ChatEmpty from './feature/Chat/pages/ChatEmpty';
import { routes } from './consts/routes';

// register partials

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const location = window.location.pathname;
  app.innerHTML = routes[location]
    ? routes[location]
    : routes['/fourty'];
});

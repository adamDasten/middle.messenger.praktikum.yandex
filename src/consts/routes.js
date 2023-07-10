import RegistrationPage from '../feature/Forms/Registration/pages/RegistrationPage';
import LoginPage from '../feature/Forms/Login/pages/LoginPage';
import FiftyPage from '../feature/Error/pages/FiftyPage';
import FourtyPage from '../feature/Error/pages/FourtyPage';
import ChatPage from '../feature/Chat/pages/ChatPage';
import ChatEmpty from '../feature/Chat/pages/ChatEmpty';
import InfoPage from '../feature/Profile/pages/Info';
import ChangePasswordPage from '../feature/Profile/pages/ChangePassword';
import ChangeDataPage from '../feature/Profile/pages/ChangeData';

export const routes = {
  '/': LoginPage(),
  '/registration': RegistrationPage(),
  '/fifty': FiftyPage(),
  '/fourty': FourtyPage(),
  '/chats': ChatPage(),
  '/emptys': ChatEmpty(),
  '/info': InfoPage(),
  '/passwords': ChangePasswordPage(),
  '/data': ChangeDataPage(),
};

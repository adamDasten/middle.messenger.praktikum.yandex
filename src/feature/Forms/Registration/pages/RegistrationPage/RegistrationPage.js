import RegistrationContent from '../../organisms/MainContent';
import RegistrationPage from './RegistrationPage.hbs';
import cactusImg from '../../../../../../static/sun_kaktus.svg';
import './RegistrationPage.scss';

export default () =>
  RegistrationPage({ content: RegistrationContent(), cactusImg });

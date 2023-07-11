import LoginContent from '../../organisms/LoginContent';
import LoginPageTemplate from './LoginPageTemplate.hbs';
import cactusImg from '../../../../../../static/sun_kaktus.svg';
import './LoginPage.scss';

export default () =>
  LoginPageTemplate({ content: LoginContent(), cactusImg });

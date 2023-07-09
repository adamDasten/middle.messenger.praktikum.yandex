import Button from '../../../../../common/Button';
import Fields from '../../../../../common/Fields/Fields';
import Input from '../../../../../common/Input';
import LinkRegistry from '../../../../../common/LinkRegistry';
import LoginLabel from '../../../../../common/LoginLabel';
import LoginContent from './LoginContent.hbs';
import './LoginContent.scss';

const inputs = [
  Input({
    textLabel: 'Логин',
    labeling: 'login-for',
    name: 'login',
    type: 'text',
  }),
  Input({
    textLabel: 'Пароль',
    labeling: 'password-for',
    name: 'password',
    type: 'password',
  }),
];

const fields = Fields({ name: 'login', forms: inputs });

const actionButton = Button({ text: 'Войти' });

const actionHelp = LinkRegistry({
  linkName: 'Нет аккаунта?',
  pathTo: '/registry',
});

const title = LoginLabel({ heading: 'Вход' });

export default () =>
  LoginContent({
    fields,
    title,
    actionButton,
    actionHelp,
  });

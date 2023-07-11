import Button from '../../../../../common/Button/Button';
import Fields from '../../../../../common/Fields/Fields';
import Input from '../../../../../common/Input/Input';
import LinkRegistry from '../../../../../common/LinkRegistry/LinkRegistry';
import LoginLabel from '../../../../../common/LoginLabel/LoginLabel';
import MainContent from './MainContent.hbs';
import './MainContent.scss';

const inputs = [
  Input({
    textLabel: 'Почта',
    labeling: 'mail-for',
    name: 'email',
    type: 'email',
  }),
  Input({
    textLabel: 'Логин',
    labeling: 'login-for',
    name: 'login',
    type: 'text',
  }),
  Input({
    textLabel: 'Имя',
    labeling: 'first-name-for',
    name: 'first_name',
    type: 'text',
  }),
  Input({
    textLabel: 'Фамилия',
    labeling: 'second-name-for',
    name: 'second_name',
    type: 'text',
  }),
  Input({
    textLabel: 'Телефон',
    labeling: 'phone-for',
    name: 'phone',
    type: 'tel',
  }),
  Input({
    textLabel: 'Пароль',
    labeling: 'password-registr-for',
    name: 'password',
    type: 'password',
  }),
  Input({
    textLabel: 'Пароль (еще раз)',
    labeling: 'password-registr-again-for',
    name: 'password_again',
    type: 'password',
  }),
];

const fields = Fields({ name: 'register', forms: inputs });

const actionButton = Button({ text: 'Создать аккаунт' });

const actionHelp = LinkRegistry({
  linkName: 'Войти',
  pathTo: '/',
});

const title = LoginLabel({ heading: 'Регистрация' });

export default () =>
  MainContent({
    fields,
    title,
    actionButton,
    actionHelp,
  });

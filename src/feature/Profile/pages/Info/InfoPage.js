import ActionBtn from '../../atoms/ActionBtn';
import RowData from '../../atoms/RowData';
import About from '../../molecules/About';
import ProfileContent from '../../organisms/ProfileContent';
import TemplatePage from '../../templates/TemplatePage';

const about = About({ name: 'Адам' });
const fields = [
  RowData({
    name: 'Почта',
    value: 'pochta@yandex.ru',
    inputName: 'email',
    type: 'email',
    disabled: true,
  }),
  RowData({
    name: 'Логин',
    value: 'ivanivanov',
    inputName: 'login',
    type: 'text',
    disabled: true,
  }),
  RowData({
    name: 'Имя',
    value: 'Адам',
    inputName: 'first_name',
    type: 'text',
    disabled: true,
  }),
  RowData({
    name: 'Фамилия',
    value: 'Иванов',
    inputName: 'second_name',
    type: 'text',
    disabled: true,
  }),
  RowData({
    name: 'Имя в чате',
    value: 'Адам',
    inputName: 'display_name',
    type: 'text',
    disabled: true,
  }),
  RowData({
    name: 'Телефон',
    value: '+7-(909)-967-30-30',
    inputName: 'phone',
    type: 'tel',
    disabled: true,
  }),
];

const actions = [
  ActionBtn({ textLink: 'Изменить данные', path: '/changeInfo' }),
  ActionBtn({ textLink: 'Изменить пароль', path: '/changePass' }),
  ActionBtn({ textLink: 'Выйти', path: '/', indentify: 'red' }),
];

export default () => {
  const content = ProfileContent({
    about,
    page: '',
    fields,
    actions,
  });

  return TemplatePage({ content });
};

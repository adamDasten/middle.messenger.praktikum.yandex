import RowData from '../../atoms/RowData';
import About from '../../molecules/About';
import Button from '@/common/Button';
import ProfileContent from '../../templates/ProfileContent';

const about = About();
const fields = [
  RowData({
    name: 'Почта',
    value: 'pochta@yandex.ru',
    inputName: 'email',
    type: 'email',
  }),
  RowData({
    name: 'Логин',
    value: 'ivanivanov',
    inputName: 'login',
    type: 'text',
  }),
  RowData({
    name: 'Имя',
    value: 'Адам',
    inputName: 'first_name',
    type: 'text',
  }),
  RowData({
    name: 'Фамилия',
    value: 'Иванов',
    inputName: 'second_name',
    type: 'text',
  }),
  RowData({
    name: 'Имя в чате',
    value: 'Адам',
    inputName: 'display_name',
    type: 'text',
  }),
  RowData({
    name: 'Телефон',
    value: '+7-(909)-967-30-30',
    inputName: 'phone',
    type: 'tel',
  }),
];

const actions = [
  Button({ text: 'Сохранить', className: 'button-center' }),
];

export default () =>
  ProfileContent({
    about,
    page: 'data',
    fields,
    actions,
  });

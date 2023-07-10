import RowData from '../../atoms/RowData';
import About from '../../molecules/About';
import Button from '@/common/Button';
import ProfileContent from '../../templates/ProfileContent'

const about = About();
const fields = [
  RowData({
    name: 'Старый пароль',
    value: '123456',
    inputName: 'oldPassword',
    type: 'password',
  }),
  RowData({
    name: 'Новый пароль',
    value: '12345678',
    inputName: 'newPassword',
    type: 'password',
  }),
  RowData({
    name: 'Повторите новый пароль',
    value: '12345678',
    inputName: 'againNewPassword',
    type: 'password',
  }),
];

const actions = [
  Button({ text: 'Сохранить', className: 'button-center' }),
];

export default () =>
  ProfileContent({
    about,
    page: 'passwords',
    fields,
    actions,
  });

import Button from '../../../../common/Button';
import RowData from '../../atoms/RowData';
import About from '../../molecules/About';
import ProfileContent from '../../organisms/ProfileContent';
import TemplatePage from '../../templates/TemplatePage';

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

export default () => {
  const content = ProfileContent({
    about,
    page: 'passwords',
    fields,
    actions,
  });

  return TemplatePage({ content });
};

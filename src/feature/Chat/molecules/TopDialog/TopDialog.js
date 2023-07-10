import TopDialogTemplate from './TopDialog.hbs';
import optionsSvg from '#/static/options.svg';
import './TopDialog.scss';

export default () =>
  TopDialogTemplate({ username: 'Вадим', optionsSvg });

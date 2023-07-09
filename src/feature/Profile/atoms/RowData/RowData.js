import RowData from './RowData.hbs';
import './RowData.scss';

export default ({ name, value, disabled, type, inputName }) =>
  RowData({ name, value, disabled, type, inputName });

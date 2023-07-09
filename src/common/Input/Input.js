import InputTemplate from './Input.hbs';
import './Input.scss';

export default ({ labeling, textLabel, name, type }) =>
  InputTemplate({ labeling, textLabel, name, type });

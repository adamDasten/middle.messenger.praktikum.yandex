import ErrorContentTemplate from './ErrorContent.hbs';
import './ErrorContent.scss';

export default ({ errorType, errorText, backButton }) =>
  ErrorContentTemplate({ errorType, errorText, backButton });

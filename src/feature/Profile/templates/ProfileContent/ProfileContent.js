import ProfileContentTemplate from './ProfileContent.hbs';
import './ProfileContent.scss';

export default ({ about, fields, actions, page }) =>
  ProfileContentTemplate({ about, fields, actions, page });

import AboutTemplate from './About.hbs';
import cls from './About.module.scss';
import profilePlaceholder from '#/static/profile_placeholder.svg';

export default ({ name } = {}) =>
  AboutTemplate({
    aboutModuleRoot: cls['about'],
    aboutModuleBtn: cls['about-btn'],
    aboutModuleName: cls['about-name'],
    pathImg: profilePlaceholder,
    name,
  });

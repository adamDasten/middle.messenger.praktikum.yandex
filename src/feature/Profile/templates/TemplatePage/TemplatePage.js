import TemplatePage from './TemplatePage.hbs';
import arrowBack from '#/static/arrow_back.svg';
import './TemplatePage.scss';

export default ({ content }) =>
  TemplatePage({ content, imgSrc: arrowBack });

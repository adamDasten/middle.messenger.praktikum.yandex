import SearchTemplate from './Search.hbs';
import cls from './Search.module.scss';
import searchSvg from '#/static/searchSvg.svg';

export default () =>
  SearchTemplate({ rootClass: cls['search'], searchSvg });

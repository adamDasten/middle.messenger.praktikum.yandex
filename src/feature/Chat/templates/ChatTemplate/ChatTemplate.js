import ChatTemplate from './ChatTemplate.hbs';
import Aside from '../../organisms/Aside';
import './ChatTemplate.scss';

export default ({ content, img }) =>
  ChatTemplate({ aside: Aside(), content, img });

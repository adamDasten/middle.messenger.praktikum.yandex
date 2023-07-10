import AsideTemplate from './Aside.hbs';
import ChatItems from '../../molecules/ChatItems';
import ToProfile from '../../atoms/ToProfile';
import Search from '../../atoms/Search';
import './Aside.scss';

export default () =>
  AsideTemplate({
    profile: ToProfile(),
    search: Search(),
    chat: ChatItems(),
  });

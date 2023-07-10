import ChatTemplate from '../../templates/ChatTemplate';
import EmptyTalk from '../../organisms/EmptyTalk';
import cactusImg from '#/static/sun_kaktus.svg';

export default () =>
  ChatTemplate({ content: EmptyTalk(), img: cactusImg });

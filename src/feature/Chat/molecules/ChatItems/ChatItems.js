import ChatItem from '../../atoms/ChatItem';
import ChatItemsTemplate from './ChatItems.hbs';

const items = [
  ChatItem({
    user: 'Андрей',
    message: 'Изображение',
    notification: 2,
    dateTime: '10:49',
    your: false,
  }),
  ChatItem({
    user: 'Киноклуб',
    message: 'Изображение',
    notification: null,
    dateTime: '10:49',
    your: true,
  }),
  ChatItem({
    user: 'Андрей',
    message:
      'Друзья, у меня для вас особенный выпуск новостей! Сегодня будет круто!',
    notification: 4,
    dateTime: '15:12',
    your: false,
  }),
  ChatItem({
    user: 'Вадим',
    message: 'Круто!',
    notification: null,
    dateTime: 'Пт',
    your: true,
  }),
  ChatItem({
    user: 'Андрей',
    message:
      'Друзья, у меня для вас особенный выпуск новостей! Сегодня будет круто!',
    notification: 4,
    dateTime: '15:12',
    your: true,
  }),
  ChatItem({
    user: 'тет-а-теты',
    message:
      'И Human Interface Guidelines и Material Design рекомендуют почаще заниматься спортом',
    notification: null,
    dateTime: 'Ср',
    your: true,
  }),
  ChatItem({
    user: 'Design Destroyer',
    message:
      'В 2008 году художник Jon Rafman  начал собирать свой батискаф',
    notification: null,
    dateTime: 'Пн',
    your: false,
  }),
  ChatItem({
    user: 'Day.',
    message:
      'Так увлёкся работой по курсу, что совсем забыл его анонсировал турнир по теннису',
    notification: null,
    dateTime: '1 Мая 2020',
    your: false,
  }),
  ChatItem({
    user: 'Стас Рогозин',
    message: 'Можно или сегодня или завтра вечером.',
    notification: null,
    dateTime: '12 Апр 2020',
    your: false,
  }),
  ChatItem({
    user: 'Вадим',
    message: 'Круто!',
    notification: null,
    dateTime: 'Пт',
    your: true,
  }),
  ChatItem({
    user: 'Вадим',
    message: 'Круто!',
    notification: null,
    dateTime: 'Пт',
    your: true,
  }),
  ChatItem({
    user: 'Вадим',
    message: 'Круто!',
    notification: null,
    dateTime: 'Пт',
    your: true,
  }),
  ChatItem({
    user: 'Вадим',
    message: 'Круто!',
    notification: null,
    dateTime: 'Пт',
    your: true,
  }),
  ChatItem({
    user: 'Вадим',
    message: 'Круто!',
    notification: null,
    dateTime: 'Пт',
    your: true,
  }),
];

export default () => ChatItemsTemplate({ items });

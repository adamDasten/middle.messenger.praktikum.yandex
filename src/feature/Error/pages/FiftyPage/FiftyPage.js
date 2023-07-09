import ErrorContent from '../../organisms/ErrorContent';
import ErrorTemplate from '../../templates/ErrorTemplate';
import cactusImg from '#/static/sun_kaktus.svg';

const content = ErrorContent({
  errorType: '500',
  errorText: 'Мы уже фиксим',
  backButton: 'Назад к чатам',
});

export default () => ErrorTemplate({ content, cactusImg });

import ErrorContent from '../../organisms/ErrorContent';
import ErrorTemplate from '../../templates/ErrorTemplate/ErrorTemplate';
import cactusImg from '#/static/sun_kaktus.svg';

const content = ErrorContent({
  errorType: '400',
  errorText: 'Не туда попали',
  backButton: 'Назад к чатам',
});

export default () => ErrorTemplate({ content, cactusImg });

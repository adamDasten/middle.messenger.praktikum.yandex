import ErrorContent from '../../templates/ErrorContent';

export default () =>
  ErrorContent({
    errorType: '400',
    errorText: 'Не туда попали',
    backButton: 'Назад к чатам',
  });

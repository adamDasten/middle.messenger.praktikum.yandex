import ErrorContent from '../../templates/ErrorContent';

export default () =>
  ErrorContent({
    errorType: '500',
    errorText: 'Мы уже фиксим',
    backButton: 'Назад к чатам',
  });

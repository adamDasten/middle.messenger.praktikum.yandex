export const Template = `
  <button class="bottom-dialog__file" type="button">
    <img src={{addFile}} alt="Добавить файл">
  </button>
  <div class="bottom-dialog__wrap">
  {{{ input }}}
  </div>
  <button class="bottom-dialog__send" type="submit">
    <img src={{arrowGo}} alt="Отправить сообщение">
  </button>
`;

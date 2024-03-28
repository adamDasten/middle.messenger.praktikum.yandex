export const Template = `
  <div class="top-dialog">
  <div class="top-dialog__user">
    <div class="top-dialog__user-photo">

    </div>
    <div class="top-dialog__user-name">
      {{username}}
    </div>
  </div>
  <button class="top-dialog__options">
    <img src={{optionsSvg}} alt="Опции">
  </button>
</div>
  <div class="dialog-chat">
  <div class="dialog-chat__date">
    19 июня
  </div>
  {{{ messages }}}
</div>
{{{ form }}}
`;

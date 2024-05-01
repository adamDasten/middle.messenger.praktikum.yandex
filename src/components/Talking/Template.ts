export const Template = `
  <div class="top-dialog">
  <div class="top-dialog__user">
    <div class="top-dialog__user-photo">

    </div>
    <div class="top-dialog__user-name">
      {{{username}}}
    </div>
  </div>
  {{{ options }}}
</div>
  <div class="dialog-chat">
  {{{ messages }}}
</div>
{{{ form }}}
`;

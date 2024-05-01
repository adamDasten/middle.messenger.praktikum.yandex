export const Template = `
  <div class="top-dialog">
  <div class="top-dialog__user">
    <div class="top-dialog__user-photo">

    </div>
    <div class="top-dialog__user-name">
      {{username}}
    </div>
  </div>
  <div class="top-dialog__options-wrapper">
    <button class="top-dialog__options">
      <img src={{optionsSvg}} alt="Опции">
    </button>
    <nav>
      <button class="add-user">Добавить участника</button>
      <button class="delete-user">Удалить участника</button>
      <div class="top-dialog-users">
        <input placeholder="Введите логин пользователя" />
        <button>Искать</button>
        <div class="top-dialog-users-content">
          {{{ users }}}
        </div>
      </div>
    </nav>
  </div>
</div>
  <div class="dialog-chat">
  <div class="dialog-chat__date">
    19 июня
  </div>
  {{{ messages }}}
</div>
{{{ form }}}
`;

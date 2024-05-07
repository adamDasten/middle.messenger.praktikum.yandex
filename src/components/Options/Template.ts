export const Template = `

    <button class="top-dialog__options">
      <img src={{optionsSvg}} alt="Опции">
    </button>
    <nav>
      <button class="add-user">Добавить участника</button>
      <button class="delete-user">Удалить участника</button>
      <div class="top-dialog-users">
        <input class="top-dialog-users-input" placeholder="Введите логин пользователя" />
        <button class="top-dialog-users-search">Искать</button>
        <div class="top-dialog-users-content">
          {{{ users }}}
        </div>
      </div>
    </nav>
 `;

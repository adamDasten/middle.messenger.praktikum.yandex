export const Template = `

<div class="aside-profile">
  <div class="to-profile-wrapper">
    <a class="to-profile" href="/data">
      Профиль <img src={{ arrowImg }} alt="Стрелка к профилю">
    </a>
  </div>
</div>
<div class="aside-search">
  <div class="aside-search-inner">
    <input name="message" type="text" placeholder="Поиск">
    <img src={{searchSvg}} alt="Лупа">
  </div>
</div>
<div class="aside-chat">
  <div class="chat-items">
    {{{ items }}}
  </div>
</div>

`;

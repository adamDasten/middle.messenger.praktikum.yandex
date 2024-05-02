export const Template = `

<div class="aside-profile">
  <div class="to-profile-wrapper">
    {{{ toProfile }}}
  </div>
</div>
<div class="aside-search">
  <div class="aside-search-inner">
    <input name="message" type="text" placeholder="Поиск">
    <img src={{searchSvg}} alt="Лупа">
  </div>
</div>
<div class="aside-add">
  {{{ addChat }}}
</div>
<div class="aside-chat">
  {{{ chatItems }}}
</div>

`;

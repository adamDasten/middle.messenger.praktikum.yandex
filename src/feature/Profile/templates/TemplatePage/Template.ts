export const Template = `
  <div class="template-page__info">
    <div class="profile-content">
      <div class="profile-content__top profile-content__top--{{page}}">
        {{{ about }}}
      </div>
      {{{ form }}}
    </div>
  </div>
  <div class="template-page__backs">
    <a href="#">
      <img src={{ imgSrc }} alt="Назад">
    </a>
  </div>

`;

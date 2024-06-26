export const Template = `
  <div class="error-template__content">
    <div class="error-content">
      <h2 class="error-content__type">
        {{ errorType }}
      </h2>
      <div class="error-content__text">
        {{ errorText }}
      </div>
      <a class="error-content__back" href="/">
        {{ backButton }}
      </a>
  </div>
  </div>
  <img class="error-template__img" src={{ cactusImg }} alt="Кактус">
`;

export const Template = `
  <label for="avatar" class='about-btn'>
    <img src={{ pathImg }} alt="Настройка профиля">
  </label>
  <input id="avatar" type="file" accept="image/*" />
  <div class='name'>{{ name }}</div>
`;

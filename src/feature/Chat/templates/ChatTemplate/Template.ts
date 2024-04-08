export const Template = `
  
    {{{ aside }}}

    <div class="chat-template__content">
      {{{ content }}}
    </div>
    {{#if img}}
      <img class="chat-template__img" src={{img}} alt="Кактус">
    {{/if}}
  
`;

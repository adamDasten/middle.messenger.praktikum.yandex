export const Template = `
  <div class="chat-item__img"></div>
  <div class="chat-item__info">
    <h4>{{user}}</h4>
    <div class="chat-item__info-naming">
      {{#if your}}
        <span class="chat-item__info-you">Вы:</span>
      {{/if}}
      <span class="chat-item__info-message">
        {{message}}
      </span>
    </div>
  </div>
  <div class="chat-item__date">
    <div class="chat-item__date-text">
      {{dateTime}}
    </div>
    {{#if notification}}
      <div class="chat-item__date-notification">
        {{ notification }}
      </div>
    {{/if}}
  </div>
`;

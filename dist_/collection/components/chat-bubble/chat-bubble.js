import { h } from '@stencil/core';
export class ChatList {
  constructor() {
    this.interactions = [
      { text: 'Hello, how can I help you?', hour: '12:00 PM' },
      { text: 'I need assistance with my order.', hour: '12:01 PM' },
      { text: 'Sure, let me look that up for you.', hour: '12:02 PM' }
    ];
  }
  render() {
    return (h("div", null, this.interactions.map(interaction => (h("chat-bubble", { text: interaction.text, hour: interaction.hour })))));
  }
  static get is() { return "chat-list"; }
  static get encapsulation() { return "shadow"; }
}
//# sourceMappingURL=chat-bubble.js.map

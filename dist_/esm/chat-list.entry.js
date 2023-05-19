import { r as registerInstance, h } from './index-4a162c37.js';

const ChatList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.interactions = [
      { text: 'Hello, how can I help you?', hour: '12:00 PM' },
      { text: 'I need assistance with my order.', hour: '12:01 PM' },
      { text: 'Sure, let me look that up for you.', hour: '12:02 PM' }
    ];
  }
  render() {
    return (h("div", null, this.interactions.map(interaction => (h("chat-bubble", { text: interaction.text, hour: interaction.hour })))));
  }
};

export { ChatList as chat_list };

//# sourceMappingURL=chat-list.entry.js.map
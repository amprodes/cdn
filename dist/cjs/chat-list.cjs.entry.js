'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a4f926bf.js');

const ChatList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.interactions = [
      { text: 'Hello, how can I help you?', hour: '12:00 PM' },
      { text: 'I need assistance with my order.', hour: '12:01 PM' },
      { text: 'Sure, let me look that up for you.', hour: '12:02 PM' }
    ];
  }
  render() {
    return (index.h("div", null, this.interactions.map(interaction => (index.h("chat-bubble", { text: interaction.text, hour: interaction.hour })))));
  }
};

exports.chat_list = ChatList;

//# sourceMappingURL=chat-list.cjs.entry.js.map
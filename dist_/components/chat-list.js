import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const ChatList$1 = /*@__PURE__*/ proxyCustomElement(class ChatList extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.interactions = [
      { text: 'Hello, how can I help you?', hour: '12:00 PM' },
      { text: 'I need assistance with my order.', hour: '12:01 PM' },
      { text: 'Sure, let me look that up for you.', hour: '12:02 PM' }
    ];
  }
  render() {
    return (h("div", null, this.interactions.map(interaction => (h("chat-bubble", { text: interaction.text, hour: interaction.hour })))));
  }
}, [1, "chat-list"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["chat-list"];
  components.forEach(tagName => { switch (tagName) {
    case "chat-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ChatList$1);
      }
      break;
  } });
}

const ChatList = ChatList$1;
const defineCustomElement = defineCustomElement$1;

export { ChatList, defineCustomElement };

//# sourceMappingURL=chat-list.js.map
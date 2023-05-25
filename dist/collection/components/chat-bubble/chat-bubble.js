import { Host, h } from '@stencil/core';
import { Sender } from '../chat-component/enums/sender';
/**
 * Represents a chat bubble component.
 */
export class ChatBubble {
  constructor() {
    this.text = 'Message';
    this.sender = Sender.VIVI;
  }
  render() {
    return (h(Host, null, h("div", { class: 'dav-chatBubble__' + this.sender }, h("div", { class: 'dav-chatBubble__' + this.sender + 'Bubble' }, h("p", { class: "dav-chatBubble__text" }, this.text)))));
  }
  static get is() { return "chat-bubble"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./chat-bubble.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["chat-bubble.css"]
    };
  }
  static get properties() {
    return {
      "text": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The text content of the chat bubble."
        },
        "attribute": "text",
        "reflect": false,
        "defaultValue": "'Message'"
      },
      "sender": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Sender",
          "resolved": "Sender.ADVISOR | Sender.USER | Sender.VIVI",
          "references": {
            "Sender": {
              "location": "import",
              "path": "../chat-component/enums/sender"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The sender of the chat bubble."
        },
        "attribute": "sender",
        "reflect": false,
        "defaultValue": "Sender.VIVI"
      }
    };
  }
}
//# sourceMappingURL=chat-bubble.js.map

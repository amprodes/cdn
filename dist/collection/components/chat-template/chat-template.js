import { Host, h } from '@stencil/core';
import { onChange } from '../../store/store';
export class ChatTemplate {
  connectedCallback() {
    onChange('messages', () => {
      setTimeout(() => this.chatElement.scrollTo(0, this.chatElement.scrollHeight), 10);
      console.log(this.chatElement.scrollHeight);
    });
  }
  render() {
    return (h(Host, null, h("div", { class: "dav-container" }, h("div", { class: "container" }, h("div", { class: "head" }, h("slot", { name: "head" }, h("chat-header", null))), h("div", { class: "content", ref: (el) => this.chatElement = el }, h("slot", { name: "content" }, h("chat-component", null))), h("div", { class: "footer" }, h("slot", { name: "footer" }, h("chat-footer", null)))))));
  }
  static get is() { return "chat-template"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./chat-template.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["chat-template.css"]
    };
  }
}
//# sourceMappingURL=chat-template.js.map

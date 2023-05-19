import { Host, h } from '@stencil/core';
export class ChatTemplate {
  render() {
    return (h(Host, null, h("div", { class: "dav-container" }, h("div", { class: "container" }, h("div", { class: "head" }, h("slot", { name: "head" }, h("chat-header", null))), h("div", { class: "content" }, h("slot", { name: "content" }, h("chat-component", null))), h("div", { class: "footer" }, h("slot", { name: "footer" }, h("chat-footer", null)))))));
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

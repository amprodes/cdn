import { h } from '@stencil/core';
export class ChatHeader {
  constructor() {
    this.late = false;
  }
  render() {
    return (h("div", null, h("div", { class: "dav__header" }, h("div", { class: "dav__header__left" }, h("app-button", { classButton: "backVivi" /*routerLink=".."*/ }, h("img", { src: '/assets/icons/default-icons/icon-arrow-back.svg' })), h("div", { class: "dav__header__left__icon" }, h("img", { src: "./assets/icon-vivi-assistant.svg" })), h("p", { class: "dav__header__left__name" }, "Vivi")), h("img", { src: "/assets/icons/extra-icons/icon-config.svg", class: "dav__header__camera" }))));
  }
  static get is() { return "chat-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["chat-header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["chat-header.css"]
    };
  }
  static get properties() {
    return {
      "late": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "late",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=chat-header.js.map

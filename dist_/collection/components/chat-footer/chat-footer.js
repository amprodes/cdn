import { h } from '@stencil/core';
export class ChatFooter {
  constructor() {
    this.assetBaseUrl = 'https://amprodes.github.io/cdn';
    this.hasIcons = true;
    this.isListening = false;
  }
  render() {
    const buttonClass = this.value ? "dav-footer__icon" : 'dav-footer__icon__inactive';
    return (h("section", { class: 'dav-footer noPadding' }, h("app-textfield", { class: "dav-footer__textfield", placeholder: 'Mensaje' }), h("div", { class: buttonClass }, h("img", { class: 'dav-footer__icon__img-send', src: `${this.assetBaseUrl}/assets/icons/extra-icons/icon-send-message.svg` }))));
  }
  static get is() { return "chat-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["chat-footer.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["chat-footer.css"]
    };
  }
  static get assetsDirs() { return ["assets"]; }
  static get properties() {
    return {
      "hasIcons": {
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
        "attribute": "has-icons",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
  static get states() {
    return {
      "isListening": {}
    };
  }
}
//# sourceMappingURL=chat-footer.js.map

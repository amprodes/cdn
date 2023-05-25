/**
 * Component representing the chat header.
 */
import { h, getAssetPath } from '@stencil/core';
export class ChatHeader {
  constructor() {
    this.late = false;
    this.name = 'Vivi';
  }
  render() {
    return (h("div", null, h("div", { class: "dav__header" }, h("div", { class: "dav__header__left" }, h("app-button", { classButton: "backVivi" }, h("img", { src: getAssetPath(`../assets/icons/default-icons/icon-arrow-back.svg`) })), h("div", { class: "dav__header__left__icon" }, h("img", { src: getAssetPath(`../assets/icons/extra-icons/icon-vivi-assistant.svg`) })), h("p", { class: "dav__header__left__name" }, this.name || 'Vivi')))));
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
  static get assetsDirs() { return ["assets"]; }
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
          "tags": [{
              "name": "prop",
              "text": "{boolean} late - Set to `true` if the chat is late, `false` otherwise. Defaults to `false`."
            }],
          "text": "Indicates whether the chat is late or not."
        },
        "attribute": "late",
        "reflect": false,
        "defaultValue": "false"
      },
      "name": {
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
          "tags": [{
              "name": "prop",
              "text": "{string} name - The name to be displayed. Defaults to 'Vivi'."
            }],
          "text": "The name displayed in the chat header."
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "'Vivi'"
      }
    };
  }
}
//# sourceMappingURL=chat-header.js.map

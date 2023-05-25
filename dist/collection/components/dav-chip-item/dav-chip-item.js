/**
 * Component representing a chip item.
 */
import { h } from '@stencil/core';
export class DavChipItem {
  constructor() {
    this.optionForBubble = false;
    this.isWraped = true;
    this.text = '';
  }
  /**
   * Configures the chip item based on the prop values.
   * @returns {string} - The configuration string based on the prop values.
   */
  config() {
    let config = '';
    if (this.optionForBubble) {
      config = config + 'width';
    }
    else {
      config = config + 'aligned';
    }
    if (this.isWraped) {
      config = config + ' wraped';
    }
    return config;
  }
  render() {
    return (h("button", { class: `dav-chipItem ${this.config()}` }, this.text));
  }
  static get is() { return "dav-chip-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dav-chip-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dav-chip-item.css"]
    };
  }
  static get properties() {
    return {
      "optionForBubble": {
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
              "text": "{boolean} optionForBubble - Set to `true` if the chip item is an option for a bubble, `false` otherwise. Defaults to `false`."
            }],
          "text": "Indicates whether the chip item is an option for a bubble."
        },
        "attribute": "option-for-bubble",
        "reflect": false,
        "defaultValue": "false"
      },
      "isWraped": {
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
              "text": "{boolean} isWraped - Set to `true` if the chip item should be wrapped, `false` otherwise. Defaults to `true`."
            }],
          "text": "Indicates whether the chip item should be wrapped."
        },
        "attribute": "is-wraped",
        "reflect": false,
        "defaultValue": "true"
      },
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
          "tags": [{
              "name": "prop",
              "text": "{string} text - The text to be displayed."
            }],
          "text": "The text displayed on the chip item."
        },
        "attribute": "text",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
//# sourceMappingURL=dav-chip-item.js.map

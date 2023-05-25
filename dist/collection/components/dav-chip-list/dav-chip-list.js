/**
 * Component representing a chip list.
 */
import { h } from '@stencil/core';
export class DavChipList {
  constructor() {
    this.wrapChips = false;
  }
  render() {
    return (h("div", { class: `dav-chipList ${this.wrapChips ? '--wrapElements' : '--noWrap'}` }, h("slot", null)));
  }
  static get is() { return "dav-chip-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dav-chip-list.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dav-chip-list.css"]
    };
  }
  static get properties() {
    return {
      "wrapChips": {
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
              "text": "{boolean} wrapChips - Set to `true` to wrap the chips, `false` otherwise. Defaults to `false`."
            }],
          "text": "Indicates whether the chips should be wrapped."
        },
        "attribute": "wrap-chips",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=dav-chip-list.js.map

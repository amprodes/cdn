/**
 * Component representing a custom button.
 */
import { h } from '@stencil/core';
export class ButtonComponent {
  constructor() {
    this.classButton = 'primary';
    this.disabled = false;
    this.buttonType = 'button';
    this.mouseY = 0;
    this.mouseX = 0;
    this.showEffect = false;
  }
  /**
   * Sets the position of the button effect based on the mouse event.
   * @param {MouseEvent} e - The mouse event.
   */
  setPosition(e) {
    this.showEffect = false;
    this.mouseY = e.offsetY;
    this.mouseX = e.offsetX;
    setTimeout(() => {
      this.showEffect = false;
    }, 1000);
  }
  render() {
    return (h("div", { class: `dav-buttonContainer${this.classButton === 'iconSmall' ? '--row' : ''}` }, h("button", { class: `dav-button--${this.classButton}`, type: this.buttonType, disabled: this.disabled, name: "button", onClick: this.setPosition }, h("slot", null), h("slot", { name: "icon" }), this.showEffect && this.classButton !== 'iconSimple' && this.classButton !== 'back' &&
      h("span", { class: "dav-button__ripple", style: { '--mouse-y': this.mouseY + 'px', '--mouse-x': this.mouseX + 'px' } })), (this.classButton === 'iconSmall' || this.classButton === 'iconLarge' || this.classButton === 'iconLargeGrey') &&
      h("div", { class: `dav-button__text${this.classButton === 'iconSmall' ? '--small' : ''}` }, h("slot", { name: "iconText" }))));
  }
  static get is() { return "app-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["button.component.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["button.component.css"]
    };
  }
  static get properties() {
    return {
      "classButton": {
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
              "text": "{string} classButton - The class name of the button. Defaults to 'primary'."
            }],
          "text": "The CSS class for the button."
        },
        "attribute": "class-button",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "disabled": {
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
              "text": "{boolean} disabled - Set to `true` to disable the button, `false` otherwise. Defaults to `false`."
            }],
          "text": "Indicates whether the button is disabled."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "buttonType": {
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
              "text": "{string} buttonType - The type attribute of the button. Defaults to 'button'."
            }],
          "text": "The type of the button."
        },
        "attribute": "button-type",
        "reflect": false,
        "defaultValue": "'button'"
      }
    };
  }
  static get states() {
    return {
      "mouseY": {},
      "mouseX": {},
      "showEffect": {}
    };
  }
}
//# sourceMappingURL=button.component.js.map

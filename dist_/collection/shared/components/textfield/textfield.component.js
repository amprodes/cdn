import { h } from '@stencil/core';
export class TextfieldViviComponent {
  constructor() {
    this.onChange = () => { };
    this.onTouched = () => { };
    this.label = '';
    this.placeholder = '';
    this.maxlength = 99;
    this.textfieldAccess = '';
    this.error = false;
    this.bottomsheetStatus = false;
    this.normal = 'dav-textField';
    this.filledOut = 'dav-textField dav-filledOut';
    this.divNgClass = this.normal;
    this.value = '';
    this.disabled = false;
  }
  onInput(e) {
    this.value = e.target.value;
    this.changeValue.emit(this.value);
  }
  // ------------------------------------------------
  writeValue(value) {
    this.value = value;
    this.onChange(value);
  }
  get counterLength() {
    return this.value.length;
  }
  onFocus() {
    this.divNgClass = this.filledOut;
  }
  onBlur() {
    this.value !== '' ? (this.divNgClass = this.filledOut) : (this.divNgClass = this.normal);
  }
  validateStyle() {
    return {
      border: this.error ? '1px solid #B70412' : null,
    };
  }
  displayBottomSheet() {
    this.openSheet();
  }
  openSheet() {
    this.bottomsheetStatus = true;
  }
  closeWithStatus() {
    this.bottomsheetStatus = false;
  }
  closeSheet(e) {
    this.bottomsheetStatus = e;
  }
  registerOnTouched(onTouched) {
    this.onTouched = onTouched;
  }
  write() {
    this.writeValue(this.input.value);
  }
  render() {
    return (h("div", null, h("div", null, this.label && h("label", { htmlFor: "texfield1", class: "dav-formElement__label" }, this.label), h("div", { class: this.divNgClass, style: this.validateStyle() }, h("input", { ref: (el) => this.input = el, class: "dav-textField__input", type: "text", placeholder: this.placeholder, maxlength: this.maxlength, onFocus: () => this.onFocus(), onBlur: () => { this.onBlur(); this.onTouched(); }, value: this.value, onInput: () => this.write(), id: this.textfieldAccess })))));
  }
  static get is() { return "app-textfield"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["textfield.component.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["textfield.component.css"]
    };
  }
  static get properties() {
    return {
      "label": {
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
          "text": ""
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "placeholder": {
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
          "text": ""
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
      },
      "maxlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "maxlength",
        "reflect": false,
        "defaultValue": "99"
      },
      "textfieldAccess": {
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
          "text": ""
        },
        "attribute": "textfield-access",
        "reflect": false,
        "defaultValue": "''"
      },
      "error": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean | null",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "error",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "bottomsheetStatus": {},
      "normal": {},
      "filledOut": {},
      "divNgClass": {},
      "value": {},
      "disabled": {}
    };
  }
  static get events() {
    return [{
        "method": "changeValue",
        "name": "changeValue",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=textfield.component.js.map

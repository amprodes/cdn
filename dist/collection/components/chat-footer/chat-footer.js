import { h } from '@stencil/core';
import state from '../../store/store';
import { Sender } from '../chat-component/enums/sender.enum';
export class ChatFooter {
  constructor() {
    this.value = undefined;
  }
  handleSubmit(e) {
    e.preventDefault();
    state.messages = [...state.messages, { text: this.value, sender: Sender.USER }];
    this.value = "";
  }
  handleChange(event) {
    this.value = event.target.value;
  }
  render() {
    //const footerClass = !this.isListening ? 'dav-footer' : ;
    const buttonClass = this.value ? "dav-footer__icon" : 'dav-footer__icon__inactive';
    return (h("form", { onSubmit: (e) => this.handleSubmit(e), class: 'dav-footer noPadding' }, h("input", { type: "text", value: this.value, onInput: (event) => this.handleChange(event) }), h("button", { class: buttonClass, type: "submit" }, h("img", { class: 'dav-footer__icon__img-send', src: '../../assets/icons/extra-icons/icon-send-message.svg' }))));
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
  static get states() {
    return {
      "value": {}
    };
  }
}
//# sourceMappingURL=chat-footer.js.map

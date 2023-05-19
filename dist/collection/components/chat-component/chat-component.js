import { h } from '@stencil/core';
import { Sender } from './enums/sender.enum';
import state from '../../store/store';
export class ChatComponent {
  constructor() {
    this.messages = [{ text: "¡Hola! Soy Vivi, la asistente virtual de Davivienda.", sender: Sender.VIVI }, { text: "Si tiene clave virtual, ingrese con ella para recibir atención personalizada.", sender: Sender.VIVI }, { text: "¿En qué le puedo ayudar?", sender: Sender.VIVI }];
  }
  componentWillLoad() {
    state.messages = this.messages;
  }
  addMargin(index) {
    if (index === 0) {
      return 'chat-component__initial-margin';
    }
    else {
      if (state.messages[index].sender !== state.messages[index - 1].sender) {
        return 'chat-component__initial-margin';
      }
    }
  }
  render() {
    return (h("div", { class: 'chat' }, state.messages.map((message, i) => h("div", { key: i, class: this.addMargin(i) }, h("chat-bubble", { text: message.text, sender: message.sender })))));
  }
  static get is() { return "chat-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["chat-component.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["chat-component.css"]
    };
  }
  static get states() {
    return {
      "messages": {}
    };
  }
}
//# sourceMappingURL=chat-component.js.map

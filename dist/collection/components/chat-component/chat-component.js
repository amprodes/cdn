import { h } from '@stencil/core';
import { Sender } from './enums/sender.enum';
export class ChatComponent {
  constructor() {
    this.messages = [];
  }
  watchStateHandler(newValue, oldValue) {
    console.log('The old value of randNumbers is: ', oldValue);
    console.log('The new value of randNumbers is: ', newValue);
  }
  componentWillLoad() {
    this.messages = [{ text: "¡Hola! Soy Vivi, la asistente virtual de Davivienda.", sender: Sender.VIVI }, { text: "Si tiene clave virtual, ingrese con ella para recibir atención personalizada.", sender: Sender.VIVI }, { text: "¿En qué le puedo ayudar?", sender: Sender.VIVI }];
  }
  render() {
    return (h("div", { class: 'chat' }, this.messages.map((message, i) => h("div", { key: i }, h("chat-bubble", { text: message.text })))));
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
  static get watchers() {
    return [{
        "propName": "messages",
        "methodName": "watchStateHandler"
      }];
  }
}
//# sourceMappingURL=chat-component.js.map

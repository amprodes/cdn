import { h } from '@stencil/core';
import { Sender } from './enums/sender';
// import state from '../../store/store'
import { onChange } from '../../store/store';
/**
 * Represents the chat component.
 */
export class ChatComponent {
  constructor() {
    this.messages = [
      { text: "¡Hola! Soy Vivi, la asistente virtual de Davivienda.", sender: Sender.VIVI, id: 1 },
      { text: "Si tiene clave virtual, ingrese con ella para poder recibir información sobre sus productos.", sender: Sender.VIVI, id: 2 },
      { text: "¿En qué puedo ayudarle hoy?", sender: Sender.VIVI, id: 3 }
    ];
    this.isElementVisible = true;
  }
  /**
   * Lifecycle method called when the component is connected to the DOM.
   * Listens for changes in the 'messages' property of the store and appends new messages to the existing messages array.
   */
  connectedCallback() {
    onChange('messages', (newMessages) => {
      console.log(newMessages);
      this.messages = [...this.messages, newMessages[newMessages.length - 1]];
    });
  }
  // eslint-disable-next-line 
  checkWindowSize() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) { // Ejemplo: Ocultar el elemento cuando el ancho de la ventana es menor que 768px
      this.isElementVisible = false;
    }
    else {
      this.isElementVisible = true;
    }
  }
  /**
   * Adds margin to the chat component based on the message index.
   * @param index - The index of the message.
   * @returns The CSS class for adding margin.
   * @private
   */
  addMargin(index) {
    if (index === 0) {
      return 'chat-component__initial-margin';
    }
    else {
      if (this.messages[index].sender !== this.messages[index - 1].sender) {
        return 'chat-component__initial-margin';
      }
    }
  }
  render() {
    return (h("div", { class: 'chat-component' }, h("div", null, this.messages.map((message, i) => h("div", { key: message.id, class: this.addMargin(i) }, h("chat-bubble", { text: message.text, sender: message.sender }))))));
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
      "messages": {},
      "isElementVisible": {}
    };
  }
}
//# sourceMappingURL=chat-component.js.map

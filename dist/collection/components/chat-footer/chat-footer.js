/**
 * Component representing the chat header.
 */
import { h, getAssetPath } from '@stencil/core';
import { state } from '../../store/store';
import { Sender } from '../chat-component/enums/sender';
/**
 * Component representing the chat footer.
 */
export class ChatFooter {
  constructor() {
    /**
     * Checks the window size and updates the `isElementVisible` property based on the window width.
     * If the window width is greater than 768px, sets `isElementVisible` to `false`.
     * Otherwise, sets it to `true`.
     */
    this.checkWindowSize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 768) {
        state.isMobile = false;
      }
      else {
        state.isMobile = true;
      }
    };
    /**
     * Handles the form submission event.
     * Prevents the default form submission behavior.
     * If the value is not empty, adds a new message to the state's messages array
     * and clears the input field.
     * @param {Event} e - The form submission event.
     */
    this.handleSubmit = (e) => {
      e.preventDefault();
      if (this.value !== '') {
        state.messages = [
          ...state.messages,
          { text: this.value, sender: Sender.USER, id: state.messages.length + 1 }
        ];
        this.value = '';
        const chatElement = document.querySelector('#chat-element');
        if (chatElement instanceof HTMLElement) {
          window.scrollTo(0, chatElement.scrollHeight);
        }
      }
    };
    /**
     * Handles the input change event.
     * Updates the `value` property with the new input value.
     * @param {Event} event - The input change event.
     */
    this.handleChange = (event) => {
      this.value = event.target.value;
    };
    this.handleFocus = () => {
      state.isWritting = true;
    };
    this.handleBlur = () => {
      state.isWritting = false;
    };
    this.value = undefined;
    this.isElementVisible = true;
  }
  /**
   * Lifecycle method called when the component is connected to the DOM.
   * Adds a window resize event listener and calls the `checkWindowSize` method.
   */
  connectedCallback() {
    window.addEventListener('resize', this.checkWindowSize);
    this.checkWindowSize();
  }
  /**
   * Lifecycle method called when the component is disconnected from the DOM.
   * Removes the window resize event listener.
   */
  disconnectedCallback() {
    window.removeEventListener('resize', this.checkWindowSize);
  }
  /**
   * Determines whether to show the chips based on the current state.
   * Returns `true` if the state is not mobile or if the user is not currently writing a message.
   * Returns `false` otherwise.
   * @returns {boolean} A boolean indicating whether to show the chips.
   */
  showChips() {
    if (state.isMobile) {
      if (state.isWritting) {
        return false;
      }
    }
    return true;
  }
  render() {
    const buttonClass = this.value !== '' ? 'dav-footer__icon' : 'dav-footer__icon__inactive';
    return (h("div", { class: "padding-x" }, this.showChips() && (h("dav-chip-list", null, h("dav-chip-item", { text: "Desbloquear mi clave virtual" }))), h("form", { onSubmit: this.handleSubmit, class: "dav-footer noPadding" }, h("div", { class: "dav-textField" }, h("input", { autoComplete: "off", type: "text", value: this.value, placeholder: "Mensaje", onFocus: this.handleFocus, onBlur: this.handleBlur, onInput: this.handleChange })), h("button", { class: buttonClass, type: "submit" }, h("img", { class: "dav-footer__icon__img-send", src: getAssetPath(`../assets/icons/extra-icons/icon-send-message.svg`) })))));
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
  static get states() {
    return {
      "value": {},
      "isElementVisible": {}
    };
  }
}
//# sourceMappingURL=chat-footer.js.map

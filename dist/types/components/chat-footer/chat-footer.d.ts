/**
 * Component representing the chat footer.
 */
export declare class ChatFooter {
  value: string;
  isElementVisible: boolean;
  /**
   * Lifecycle method called when the component is connected to the DOM.
   * Adds a window resize event listener and calls the `checkWindowSize` method.
   */
  connectedCallback(): void;
  /**
   * Lifecycle method called when the component is disconnected from the DOM.
   * Removes the window resize event listener.
   */
  disconnectedCallback(): void;
  /**
   * Checks the window size and updates the `isElementVisible` property based on the window width.
   * If the window width is greater than 768px, sets `isElementVisible` to `false`.
   * Otherwise, sets it to `true`.
   */
  private checkWindowSize;
  /**
   * Handles the form submission event.
   * Prevents the default form submission behavior.
   * If the value is not empty, adds a new message to the state's messages array
   * and clears the input field.
   * @param {Event} e - The form submission event.
   */
  private handleSubmit;
  /**
   * Handles the input change event.
   * Updates the `value` property with the new input value.
   * @param {Event} event - The input change event.
   */
  private handleChange;
  /**
   * Determines whether to show the chips based on the current state.
   * Returns `true` if the state is not mobile or if the user is not currently writing a message.
   * Returns `false` otherwise.
   * @returns {boolean} A boolean indicating whether to show the chips.
   */
  private showChips;
  private handleFocus;
  private handleBlur;
  render(): any;
}

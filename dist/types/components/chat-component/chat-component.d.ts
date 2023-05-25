import ChatMessage from './interfaces/ChatMessage.interface';
/**
 * Represents the chat component.
 */
export declare class ChatComponent {
  /**
   * The array of chat messages.
   */
  messages: ChatMessage[];
  /**
   * Indicates whether the chat component is visible.
   */
  isElementVisible: boolean;
  /**
   * Lifecycle method called when the component is connected to the DOM.
   * Listens for changes in the 'messages' property of the store and appends new messages to the existing messages array.
   */
  connectedCallback(): void;
  checkWindowSize(): void;
  /**
   * Adds margin to the chat component based on the message index.
   * @param index - The index of the message.
   * @returns The CSS class for adding margin.
   * @private
   */
  private addMargin;
  render(): any;
}

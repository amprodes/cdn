import { Sender } from '../chat-component/enums/sender';
/**
 * Represents a chat bubble component.
 */
export declare class ChatBubble {
  /**
   * The text content of the chat bubble.
   */
  text: string;
  /**
   * The sender of the chat bubble.
   */
  sender: Sender;
  render(): any;
}

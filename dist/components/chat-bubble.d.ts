import type { Components, JSX } from "../types/components";

interface ChatBubble extends Components.ChatBubble, HTMLElement {}
export const ChatBubble: {
  prototype: ChatBubble;
  new (): ChatBubble;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

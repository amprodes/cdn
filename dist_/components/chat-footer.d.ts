import type { Components, JSX } from "../types/components";

interface ChatFooter extends Components.ChatFooter, HTMLElement {}
export const ChatFooter: {
  prototype: ChatFooter;
  new (): ChatFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

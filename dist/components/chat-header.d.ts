import type { Components, JSX } from "../types/components";

interface ChatHeader extends Components.ChatHeader, HTMLElement {}
export const ChatHeader: {
  prototype: ChatHeader;
  new (): ChatHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

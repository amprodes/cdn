import type { Components, JSX } from "../types/components";

interface ChatComponent extends Components.ChatComponent, HTMLElement {}
export const ChatComponent: {
  prototype: ChatComponent;
  new (): ChatComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

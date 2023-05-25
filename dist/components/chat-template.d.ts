import type { Components, JSX } from "../types/components";

interface ChatTemplate extends Components.ChatTemplate, HTMLElement {}
export const ChatTemplate: {
  prototype: ChatTemplate;
  new (): ChatTemplate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

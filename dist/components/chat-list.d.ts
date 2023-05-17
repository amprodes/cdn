import type { Components, JSX } from "../types/components";

interface ChatList extends Components.ChatList, HTMLElement {}
export const ChatList: {
  prototype: ChatList;
  new (): ChatList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

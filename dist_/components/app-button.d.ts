import type { Components, JSX } from "../types/components";

interface AppButton extends Components.AppButton, HTMLElement {}
export const AppButton: {
  prototype: AppButton;
  new (): AppButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

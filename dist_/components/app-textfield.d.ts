import type { Components, JSX } from "../types/components";

interface AppTextfield extends Components.AppTextfield, HTMLElement {}
export const AppTextfield: {
  prototype: AppTextfield;
  new (): AppTextfield;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

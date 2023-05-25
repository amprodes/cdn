import type { Components, JSX } from "../types/components";

interface DavChipItem extends Components.DavChipItem, HTMLElement {}
export const DavChipItem: {
  prototype: DavChipItem;
  new (): DavChipItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface DavChipList extends Components.DavChipList, HTMLElement {}
export const DavChipList: {
  prototype: DavChipList;
  new (): DavChipList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

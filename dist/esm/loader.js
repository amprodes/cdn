import { p as promiseResolve, b as bootstrapLazy } from './index-0bace9bf.js';
export { s as setNonce } from './index-0bace9bf.js';

/*
 Stencil Client Patch Esm v3.2.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["app-button_8",[[1,"chat-template"],[1,"chat-footer",{"value":[32],"isElementVisible":[32]}],[1,"chat-component",{"messages":[32],"isElementVisible":[32]}],[1,"chat-header",{"late":[4],"name":[1]}],[1,"app-button",{"classButton":[1,"class-button"],"disabled":[4],"buttonType":[1,"button-type"],"mouseY":[32],"mouseX":[32],"showEffect":[32]}],[1,"chat-bubble",{"text":[1],"sender":[1]}],[1,"dav-chip-item",{"optionForBubble":[4,"option-for-bubble"],"isWraped":[4,"is-wraped"],"text":[1]}],[1,"dav-chip-list",{"wrapChips":[4,"wrap-chips"]}]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map
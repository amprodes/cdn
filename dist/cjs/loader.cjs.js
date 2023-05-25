'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-42e4510f.js');

/*
 Stencil Client Patch Esm v3.2.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["app-button_8.cjs",[[1,"chat-template"],[1,"chat-footer",{"value":[32],"isElementVisible":[32]}],[1,"chat-component",{"messages":[32],"isElementVisible":[32]}],[1,"chat-header",{"late":[4],"name":[1]}],[1,"app-button",{"classButton":[1,"class-button"],"disabled":[4],"buttonType":[1,"button-type"],"mouseY":[32],"mouseX":[32],"showEffect":[32]}],[1,"chat-bubble",{"text":[1],"sender":[1]}],[1,"dav-chip-item",{"optionForBubble":[4,"option-for-bubble"],"isWraped":[4,"is-wraped"],"text":[1]}],[1,"dav-chip-list",{"wrapChips":[4,"wrap-chips"]}]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map
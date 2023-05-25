'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-42e4510f.js');

/*
 Stencil Client Patch Browser v3.2.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('web-components-v2.cjs.js', document.baseURI).href));
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["app-button_8.cjs",[[1,"chat-template"],[1,"chat-footer",{"value":[32],"isElementVisible":[32]}],[1,"chat-component",{"messages":[32],"isElementVisible":[32]}],[1,"chat-header",{"late":[4],"name":[1]}],[1,"app-button",{"classButton":[1,"class-button"],"disabled":[4],"buttonType":[1,"button-type"],"mouseY":[32],"mouseX":[32],"showEffect":[32]}],[1,"chat-bubble",{"text":[1],"sender":[1]}],[1,"dav-chip-item",{"optionForBubble":[4,"option-for-bubble"],"isWraped":[4,"is-wraped"],"text":[1]}],[1,"dav-chip-list",{"wrapChips":[4,"wrap-chips"]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=web-components-v2.cjs.js.map
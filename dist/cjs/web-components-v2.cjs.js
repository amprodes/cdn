'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-64096c0d.js');

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
  return index.bootstrapLazy([["app-textfield.cjs",[[1,"app-textfield",{"label":[1],"placeholder":[1],"maxlength":[2],"textfieldAccess":[1,"textfield-access"],"error":[4],"bottomsheetStatus":[32],"normal":[32],"filledOut":[32],"divNgClass":[32],"value":[32],"disabled":[32]}]]],["app-button_6.cjs",[[1,"chat-template"],[1,"chat-component",{"messages":[32]}],[1,"chat-header",{"late":[4]}],[1,"chat-footer",{"value":[32]}],[1,"app-button",{"classButton":[1,"class-button"],"disabled":[4],"buttonType":[1,"button-type"],"mouseY":[32],"mouseX":[32],"showEffect":[32]}],[1,"chat-bubble",{"text":[1],"sender":[1]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=web-components-v2.cjs.js.map
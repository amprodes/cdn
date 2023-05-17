import { p as promiseResolve, b as bootstrapLazy } from './index-4a162c37.js';
export { s as setNonce } from './index-4a162c37.js';

/*
 Stencil Client Patch Browser v3.2.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["chat-list",[[1,"chat-list"]]],["app-button_6",[[1,"chat-footer"],[1,"chat-header",{"late":[4]}],[1,"chat-component",{"messages":[32]}],[1,"chat-template"],[1,"app-button",{"classButton":[1,"class-button"],"disabled":[4],"buttonType":[1,"button-type"],"mouseY":[32],"mouseX":[32],"showEffect":[32]}],[1,"app-textfield",{"label":[1],"placeholder":[1],"maxlength":[2],"textfieldAccess":[1,"textfield-access"],"error":[4],"bottomsheetStatus":[32],"normal":[32],"filledOut":[32],"divNgClass":[32],"value":[32],"disabled":[32]}]]]], options);
});

//# sourceMappingURL=web-components-v2.js.map
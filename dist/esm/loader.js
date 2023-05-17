import { p as promiseResolve, b as bootstrapLazy } from './index-4a162c37.js';
export { s as setNonce } from './index-4a162c37.js';

/*
 Stencil Client Patch Esm v3.2.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["chat-list",[[1,"chat-list"]]],["app-button_6",[[1,"chat-footer",{"hasIcons":[4,"has-icons"],"isListening":[32]}],[1,"chat-header",{"late":[4]}],[1,"chat-component",{"messages":[32]}],[1,"chat-template"],[1,"app-button",{"classButton":[1,"class-button"],"disabled":[4],"buttonType":[1,"button-type"],"mouseY":[32],"mouseX":[32],"showEffect":[32]}],[1,"app-textfield",{"label":[1],"placeholder":[1],"maxlength":[2],"textfieldAccess":[1,"textfield-access"],"error":[4],"bottomsheetStatus":[32],"normal":[32],"filledOut":[32],"divNgClass":[32],"value":[32],"disabled":[32]}]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map
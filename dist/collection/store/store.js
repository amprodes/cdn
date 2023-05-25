import { createStore } from '@stencil/store';
const initialState = {
  messages: [],
  isMobile: true,
  isWritting: false
};
const { state, onChange } = createStore(initialState);
export { state, onChange };
//# sourceMappingURL=store.js.map

import ChatMessage from '../components/chat-component/interfaces/ChatMessage.interface';
interface VIVIState {
  messages: ChatMessage[];
  isMobile: boolean;
  isWritting: boolean;
}
declare const state: VIVIState, onChange: import("@stencil/store/dist/types").OnChangeHandler<VIVIState>;
export { state, onChange };

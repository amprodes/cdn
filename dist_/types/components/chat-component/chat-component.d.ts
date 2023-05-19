import ChatMessage from './interfaces/ChatMessage.interface';
export declare class ChatComponent {
  messages: ChatMessage[];
  watchStateHandler(newValue: ChatMessage[], oldValue: ChatMessage[]): void;
  componentWillLoad(): void;
  render(): any;
}

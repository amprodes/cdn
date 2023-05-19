import ChatMessage from './interfaces/ChatMessage.interface';
export declare class ChatComponent {
  messages: ChatMessage[];
  componentWillLoad(): void;
  addMargin(index: number): string;
  render(): any;
}

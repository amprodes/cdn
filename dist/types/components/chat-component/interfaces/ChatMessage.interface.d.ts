import { Sender } from "../enums/sender";
export default interface ChatMessage {
  text: string;
  hour?: string;
  sender: Sender;
  id: number;
}

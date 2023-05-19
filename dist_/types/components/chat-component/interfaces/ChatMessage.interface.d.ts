import { Sender } from "../enums/sender.enum";
export default interface ChatMessage {
  text: string;
  hour?: string;
  sender: Sender;
}

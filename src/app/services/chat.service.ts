export class ChatService {
  private messages: { content: string; sender: string }[] = [];

  getMessages() {
    return this.messages;
  }

  sendMessage(content: string, sender: string) {
    this.messages.push({ content, sender });
  }
}
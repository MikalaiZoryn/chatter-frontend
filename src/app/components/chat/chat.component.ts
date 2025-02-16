export class ChatComponent {
  messages: { content: string; sender: string }[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ content: this.newMessage, sender: 'You' });
      this.newMessage = '';
      // Logic to send the message to the server can be added here
    }
  }
}
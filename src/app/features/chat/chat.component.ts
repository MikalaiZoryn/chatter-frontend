import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule]
})
export class ChatComponent {
  username: string = 'User' + Math.floor(Math.random() * 1000); // Generate a random username
  messages: Message[] = [];
  messageControl: FormControl; // To control the input field

  constructor(private chatService: ChatService) {
    this.chatService.messages$.subscribe((message) => {
      if (message !== null && message.sender !== this.username) {
        this.messages.push(message);
      }
    });
    this.messageControl = new FormControl('', [Validators.required]);
  }

  sendMessage(): void {
    const message = {sender: this.username, content: this.messageControl.value.trim()};
    if (message) {
      this.chatService.sendMessage(message);
      this.messages.push(message); // Push the message to the chat window
      this.messageControl.reset(); // Clear the input field
    }
  }
}

interface Message {
  sender: string;
  content: string;
}
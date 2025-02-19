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
import { GlobalStateService } from '../../services/global-state.service';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
  ]
})
export class ChatComponent {
  chats = ['General', 'Tech', 'Random'];
  selectedChat = 'General';
  username: string;
  messages: Message[] = [];
  messageControl: FormControl; // To control the input field

  constructor(private chatService: ChatService, private globalStateService: GlobalStateService) {
    this.chatService.messages$.subscribe((message) => {
      if (message !== null && message.sender !== this.username) {
        this.messages.push(message);
      }
    });
    this.messageControl = new FormControl('');
    this.username = this.globalStateService.currentState.user?.name || 'Guest';
  }

  sendMessage(): void {
    const user = this.globalStateService.currentState.user;
    const messageContent = this.messageControl.value?.trim();
    if (user && messageContent) {
      const message = { sender: user.name, content: messageContent };
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
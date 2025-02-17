import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: WebSocket;
  private messagesSubject = new BehaviorSubject<string[]>([]);
  public messages$ = this.messagesSubject.asObservable();

  constructor() {
    this.socket = new WebSocket('ws://localhost:8080/chat');
    this.socket.onmessage = (event) => this.handleMessage(event);
  }

  private handleMessage(event: MessageEvent) {
    const messages = this.messagesSubject.value;
    messages.push(event.data);
    this.messagesSubject.next(messages);
  }

  sendMessage(message: string) {
    this.socket.send(message);
  }
}
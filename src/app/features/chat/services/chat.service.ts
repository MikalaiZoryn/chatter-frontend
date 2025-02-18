import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private client: Client;
  private messageSubject = new BehaviorSubject<any>(null);
  public messages$ = this.messageSubject.asObservable();

  constructor() {
    this.client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      reconnectDelay: 5000,
      debug: (msg) => console.log(msg)
    });

    this.client.onConnect = () => {
      this.client.subscribe('/topic/messages', (message) => {
        this.messageSubject.next(JSON.parse(message.body));
      });
    };

    this.client.activate();
  }

  sendMessage(message: any) {
    this.client.publish({
      destination: '/app/chat',
      body: JSON.stringify(message)
    });
  }
}
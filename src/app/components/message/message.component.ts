import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  standalone: false,
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  content: string;
  sender: string;

  constructor(content: string, sender: string) {
    this.content = content;
    this.sender = sender;
  }
}
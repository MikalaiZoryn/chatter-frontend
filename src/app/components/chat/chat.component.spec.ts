import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatComponent } from './chat.component';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send a message', () => {
    const message = 'Hello, World!';
    component.sendMessage(message);
    expect(component.messages).toContain(message);
  });

  it('should have an initial empty messages array', () => {
    expect(component.messages).toEqual([]);
  });
});
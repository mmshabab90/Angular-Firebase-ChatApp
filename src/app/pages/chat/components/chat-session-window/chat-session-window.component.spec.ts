import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSessionWindowComponent } from './chat-session-window.component';

describe('ChatSessionWindowComponent', () => {
  let component: ChatSessionWindowComponent;
  let fixture: ComponentFixture<ChatSessionWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSessionWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSessionWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmTitlebarComponent } from './alarm-titlebar.component';

describe('AlarmTitlebarComponent', () => {
  let component: AlarmTitlebarComponent;
  let fixture: ComponentFixture<AlarmTitlebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmTitlebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmTitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

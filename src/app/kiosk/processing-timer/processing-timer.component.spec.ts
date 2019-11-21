import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingTimerComponent } from './processing-timer.component';

describe('ProcessingTimerComponent', () => {
  let component: ProcessingTimerComponent;
  let fixture: ComponentFixture<ProcessingTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

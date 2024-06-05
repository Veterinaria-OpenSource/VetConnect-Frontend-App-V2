import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPlatformComponent } from './calendar-platform.component';

describe('CalendarPlatformComponent', () => {
  let component: CalendarPlatformComponent;
  let fixture: ComponentFixture<CalendarPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarPlatformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

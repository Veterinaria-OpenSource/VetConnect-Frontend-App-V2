import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsDetailsComponent } from './google-maps-details.component';

describe('GoogleMapsDetailsComponent', () => {
  let component: GoogleMapsDetailsComponent;
  let fixture: ComponentFixture<GoogleMapsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleMapsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoogleMapsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

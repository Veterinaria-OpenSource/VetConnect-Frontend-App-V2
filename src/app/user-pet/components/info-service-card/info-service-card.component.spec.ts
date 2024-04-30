import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoServiceCardComponent } from './info-service-card.component';

describe('InfoServiceCardComponent', () => {
  let component: InfoServiceCardComponent;
  let fixture: ComponentFixture<InfoServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoServiceCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

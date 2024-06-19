import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInsuranceComponent } from './card-insurance.component';

describe('CardInsuranceComponent', () => {
  let component: CardInsuranceComponent;
  let fixture: ComponentFixture<CardInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardInsuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

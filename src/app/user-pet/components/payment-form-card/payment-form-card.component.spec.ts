import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormCardComponent } from './payment-form-card.component';

describe('PaymentFormCardComponent', () => {
  let component: PaymentFormCardComponent;
  let fixture: ComponentFixture<PaymentFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentFormCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

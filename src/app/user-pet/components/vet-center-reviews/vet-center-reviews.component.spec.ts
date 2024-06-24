import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetCenterReviewsComponent } from './vet-center-reviews.component';

describe('VetCenterReviewsComponent', () => {
  let component: VetCenterReviewsComponent;
  let fixture: ComponentFixture<VetCenterReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VetCenterReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VetCenterReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

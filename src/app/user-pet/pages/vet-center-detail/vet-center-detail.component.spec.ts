import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetCenterDetailComponent } from './vet-center-detail.component';

describe('VetCenterDetailComponent', () => {
  let component: VetCenterDetailComponent;
  let fixture: ComponentFixture<VetCenterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VetCenterDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VetCenterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

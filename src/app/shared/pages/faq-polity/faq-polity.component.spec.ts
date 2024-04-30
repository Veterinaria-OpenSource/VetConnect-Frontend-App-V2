import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqPolityComponent } from './faq-polity.component';

describe('FaqPolityComponent', () => {
  let component: FaqPolityComponent;
  let fixture: ComponentFixture<FaqPolityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqPolityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqPolityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCentersComponent } from './list-centers.component';

describe('ListCentersComponent', () => {
  let component: ListCentersComponent;
  let fixture: ComponentFixture<ListCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCentersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

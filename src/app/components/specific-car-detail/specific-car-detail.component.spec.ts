import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCarDetailComponent } from './specific-car-detail.component';

describe('SpecificCarDetailComponent', () => {
  let component: SpecificCarDetailComponent;
  let fixture: ComponentFixture<SpecificCarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificCarDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificCarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

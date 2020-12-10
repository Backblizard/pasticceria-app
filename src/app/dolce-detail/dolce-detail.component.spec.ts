import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolceDetailComponent } from './dolce-detail.component';

describe('DolceDetailComponent', () => {
  let component: DolceDetailComponent;
  let fixture: ComponentFixture<DolceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DolceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

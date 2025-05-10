import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryAlumniComponent } from './salary-alumni.component';

describe('SalaryAlumniComponent', () => {
  let component: SalaryAlumniComponent;
  let fixture: ComponentFixture<SalaryAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryAlumniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

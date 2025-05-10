import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCertificationComponent } from './pricing-certification.component';

describe('PricingCertificationComponent', () => {
  let component: PricingCertificationComponent;
  let fixture: ComponentFixture<PricingCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCertificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

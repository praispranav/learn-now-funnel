import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeSuccessComponent } from './guarantee-success.component';

describe('GuaranteeSuccessComponent', () => {
  let component: GuaranteeSuccessComponent;
  let fixture: ComponentFixture<GuaranteeSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuaranteeSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuaranteeSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

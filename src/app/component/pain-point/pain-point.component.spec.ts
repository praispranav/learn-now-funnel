import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainPointComponent } from './pain-point.component';

describe('PainPointComponent', () => {
  let component: PainPointComponent;
  let fixture: ComponentFixture<PainPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainPointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

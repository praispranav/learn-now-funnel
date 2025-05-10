import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyLearnNowComponent } from './why-learn-now.component';

describe('WhyLearnNowComponent', () => {
  let component: WhyLearnNowComponent;
  let fixture: ComponentFixture<WhyLearnNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyLearnNowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyLearnNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

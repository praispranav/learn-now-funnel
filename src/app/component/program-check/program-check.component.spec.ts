import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCheckComponent } from './program-check.component';

describe('ProgramCheckComponent', () => {
  let component: ProgramCheckComponent;
  let fixture: ComponentFixture<ProgramCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

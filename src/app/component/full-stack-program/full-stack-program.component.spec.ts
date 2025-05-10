import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackProgramComponent } from './full-stack-program.component';

describe('FullStackProgramComponent', () => {
  let component: FullStackProgramComponent;
  let fixture: ComponentFixture<FullStackProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullStackProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullStackProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepProgressbar2Component } from './multi-step-progressbar2.component';

describe('MultiStepProgressbar2Component', () => {
  let component: MultiStepProgressbar2Component;
  let fixture: ComponentFixture<MultiStepProgressbar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiStepProgressbar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepProgressbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

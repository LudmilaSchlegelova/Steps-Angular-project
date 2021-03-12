import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceModelsDeploymentStepperComponent } from './service-models-deployment-stepper.component';

describe('ServiceModelsDeploymentStepperComponent', () => {
  let component: ServiceModelsDeploymentStepperComponent;
  let fixture: ComponentFixture<ServiceModelsDeploymentStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceModelsDeploymentStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceModelsDeploymentStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

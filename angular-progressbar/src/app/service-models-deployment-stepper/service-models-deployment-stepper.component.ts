import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-models-deployment-stepper',
  templateUrl: './service-models-deployment-stepper.component.html',
  styleUrls: ['./service-models-deployment-stepper.component.css'],
})
export class ServiceModelsDeploymentStepperComponent implements OnInit {
  actualStep = 1;

  constructor() {}

  ngOnInit(): void {}
  changeStep(stepNumber: number) {
    this.actualStep = stepNumber;
  }
}

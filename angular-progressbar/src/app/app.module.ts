import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiStepProgressbarComponent } from './multi-step-progressbar/multi-step-progressbar.component';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MultiStepProgressbar2Component } from './multi-step-progressbar2/multi-step-progressbar2.component';
import { ServiceModelsDeploymentStepperComponent } from './service-models-deployment-stepper/service-models-deployment-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiStepProgressbarComponent,
    MultiStepProgressbar2Component,
    ServiceModelsDeploymentStepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

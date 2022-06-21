import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicDetailsComponent } from './Component/basic-details/basic-details.component';
import { AddressDetailsComponent } from './Component/address-details/address-details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { QualificationDetailsComponent } from './Component/qualification-details/qualification-details.component';
import { PreviewComponent } from './Component/preview/preview.component';
import {MatStepperModule} from '@angular/material/stepper';
// import { UserDetailsComponent } from './Component/user-details/user-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { StepperoverviewComponent } from './Component/stepperoverview/stepperoverview.component';
@NgModule({
  entryComponents: [StepperoverviewComponent],
  declarations: [
    AppComponent,
    BasicDetailsComponent,
    AddressDetailsComponent,
 
    QualificationDetailsComponent,
    PreviewComponent,
    // UserDetailsComponent,
    StepperoverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

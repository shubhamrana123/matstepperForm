import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AddressDetailsComponent } from '../address-details/address-details.component';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';
import { PreviewComponent } from '../preview/preview.component';
import { QualificationDetailsComponent } from '../qualification-details/qualification-details.component';
import {ChangeDetectorRef } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-stepperoverview',
  templateUrl: './stepperoverview.component.html',
  styleUrls: ['./stepperoverview.component.css']
})
export class StepperoverviewComponent implements OnInit,AfterViewInit {
  @ViewChild(BasicDetailsComponent) basicDetailsComponent:BasicDetailsComponent;
  @ViewChild(AddressDetailsComponent) addressDetailsComponent:AddressDetailsComponent;
  @ViewChild(QualificationDetailsComponent) QualificationDetailsComponent: QualificationDetailsComponent;
  @ViewChild(PreviewComponent) previewComponent:PreviewComponent;
  constructor(private cdref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.cdref.detectChanges();
  }
  get step1() {
   
    return this.basicDetailsComponent ? this.basicDetailsComponent.basicDetailsForm : null;
  }

  get step2() {
    return this.addressDetailsComponent ? this.addressDetailsComponent.addressDetailsForm: null;
  }

  get step3() {
    return this.QualificationDetailsComponent ? this.QualificationDetailsComponent.qualificationDetailsForm: null;
  }
  get step4() {
    return this.previewComponent ? this.previewComponent.previewForm : null;
  }
  nextTab(stepper:MatStepper){
    this.basicDetailsComponent.parentValue=this.basicDetailsComponent.basicDetailsForm.value
   console.log(  this.basicDetailsComponent.parentValue);
   console.log(this.addressDetailsComponent.parentDataFormValue);
   if(this.step2){
     alert('hi')
    
     this.addressDetailsComponent.basicAndAddressDetails={...this.addressDetailsComponent.parentDataFormValue}
  this.addressDetailsComponent.parentDataFormValue=this.addressDetailsComponent.basicAndAddressDetails
     console.log(this.addressDetailsComponent.basicAndAddressDetails);
  

   }
   
    console.log(this.basicDetailsComponent.childMessage);
    
stepper.next()

  }
  previousTab(stepper:MatStepper){
    stepper.previous()
  }
}

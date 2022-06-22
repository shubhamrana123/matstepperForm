import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
export class StepperoverviewComponent implements OnInit,AfterViewInit,AfterViewChecked {
  @ViewChild(BasicDetailsComponent) basicDetailsComponent:BasicDetailsComponent;
  @ViewChild(AddressDetailsComponent) addressDetailsComponent:AddressDetailsComponent;
  @ViewChild(QualificationDetailsComponent) QualificationDetailsComponent: QualificationDetailsComponent;
  @ViewChild(PreviewComponent) previewComponent:PreviewComponent;
submitted=false; 
  userData:any
  addressData:any
  qualificationValue:any;
  allFormData:any
  constructor(private cdref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.cdref.detectChanges();
  
    
  }
  ngAfterViewChecked(): void {
    this.cdref.detectChanges();
  }
  get step1() {
  //  this.basicDetailsComponent.parentValue
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
  userDatas(event){
    alert("hi")
console.log(event);

  }
  nextTabForSubmit(){
    this.basicDetailsComponent.submit()
    this.basicDetailsComponent.onDataChange.emit(this.basicDetailsComponent.basicDetailsForm.value)
    console.log(this.userData);
  }
  nextTabs(stepper:MatStepper){
this.submitted=true;
console.log(this.qualificationValue);
if(this.step4){
  alert('hi')
  this.submitted=true;
  console.log(this.qualificationValue);
}
this.QualificationDetailsComponent.childData.emit( this.QualificationDetailsComponent.qualificationDetailsForm.value)
console.log(this.qualificationValue);
this.allFormData= [{...this.userData,...this.addressData,...this.qualificationValue}]
stepper.next()
  }
  nextTab(stepper:MatStepper){
    console.log(this.userData);
    this.basicDetailsComponent.onDataChange.emit(this.basicDetailsComponent.basicDetailsForm.value)
    console.log(this.userData);
    this.addressDetailsComponent.childData.emit(this.addressDetailsComponent.addressDetailsForm.value)
    console.log(this.addressData);
  
    // this.QualificationDetailsComponent.childData.emit( this.QualificationDetailsComponent.qualificationDetailsForm.value)
    // console.log(this.qualificationValue);
   this.allFormData= [{...this.userData,...this.addressData,...this.qualificationValue}]
    this.basicDetailsComponent.parentValue=this.basicDetailsComponent.basicDetailsForm.value
  //  console.log(  this.basicDetailsComponent.parentValue);
   console.log(this.addressDetailsComponent.parentDataFormValue);
   

    // console.log(this.addressDetailsComponent.addressDetailsForm.value);
    // console.log(this.addressDetailsComponent.parentDataFormValue);
    
    // this.addressDetailsComponent.basicAndAddressFormDetails=this.addressDetailsComponent.parentDataFormValue;

    // console.log( this.addressDetailsComponent.basicAndAddressFormDetails);
    
    console.log( this.QualificationDetailsComponent.addressFormValue);
    // if(this.step4){
    //   alert('hi')
    //   this.submitted=true
    // }
  //    this.addressDetailsComponent.basicAndAddressFormDetails={...this.addressDetailsComponent.parentDataFormValue}
  // this.addressDetailsComponent.parentDataFormValue=this.addressDetailsComponent.basicAndAddressFormDetails
  //    console.log(this.addressDetailsComponent.basicAndAddressFormDetails);
  

   
   
    // console.log(this.basicDetailsComponent.childMessage);
    
stepper.next()

  }
  previousTab(stepper:MatStepper){
    stepper.previous()
  }
}

import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AddressDetailsComponent } from '../address-details/address-details.component';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';
import { PreviewComponent } from '../preview/preview.component';
import { QualificationDetailsComponent } from '../qualification-details/qualification-details.component';
import { ChangeDetectorRef } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-stepperoverview',
  templateUrl: './stepperoverview.component.html',
  styleUrls: ['./stepperoverview.component.css']
})
export class StepperoverviewComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild(BasicDetailsComponent) basicDetailsComponent: BasicDetailsComponent;
  @ViewChild(AddressDetailsComponent) addressDetailsComponent: AddressDetailsComponent;
  @ViewChild(QualificationDetailsComponent) QualificationDetailsComponent: QualificationDetailsComponent;
  @ViewChild(PreviewComponent) previewComponent: PreviewComponent;
  submitted = false;
  userDataList: FormGroup
  addressDataFormValue: any
  qualificationFormValue: any;
  allFormData: any
  userDetails: any

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.cdref.detectChanges();
  }
  ngAfterViewChecked(): void {
    this.cdref.detectChanges();
  }
  get basicInformation() {

    return this.basicDetailsComponent ? this.basicDetailsComponent.basicDetailsForm : null;
  }

  get addressDetails() {
    return this.addressDetailsComponent ? this.addressDetailsComponent.addressDetailsForm : null;
  }

  get qualificationDetails() {
    return this.QualificationDetailsComponent ? this.QualificationDetailsComponent.qualificationDetailsForm : null;
  }
  get previewDetails() {
    return this.previewComponent ? this.previewComponent.parentData : null;
  }


  nextTabsForPreviewComp(stepper: MatStepper) {
    this.submitted = true;
    this.QualificationDetailsComponent.childData.emit(this.QualificationDetailsComponent.qualificationDetailsForm.value)

    this.allFormData = [{ ...this.userDataList, ...this.addressDataFormValue, ...this.qualificationFormValue }]
    stepper.next()
  }

  tabStepperUserDetailsList() {
    this.basicDetailsComponent.submitted = true
    if (this.basicDetailsComponent.basicDetailsForm.valid) {
      //  console.log(this.basicDetailsComponent.basicDetailsForm.value);

    }
    else {
      // console.log("form is invalid");

    }
    this.submitted = true;
    this.basicDetailsComponent.onDataChange.emit(this.basicDetailsComponent.basicDetailsForm.value)
    this.addressDetailsComponent.childData.emit(this.addressDetailsComponent.addressDetailsForm.value)
    this.allFormData = [{ ...this.userDataList, ...this.addressDataFormValue, ...this.qualificationFormValue }]
    this.basicDetailsComponent.parentValue = this.basicDetailsComponent.basicDetailsForm.value
    this.QualificationDetailsComponent.childData.emit(this.QualificationDetailsComponent.qualificationDetailsForm.value)
    this.allFormData = [{ ...this.userDataList, ...this.addressDataFormValue, ...this.qualificationFormValue }]
  }
  goToNextTab(stepper: MatStepper) {
    this.basicDetailsComponent.submitted = true
    if (this.basicDetailsComponent.basicDetailsForm.valid) {
      //  console.log(this.basicDetailsComponent.basicDetailsForm.value);

    }
    else {
      // console.log("form is invalid");

    }
    this.basicDetailsComponent.onDataChange.emit(this.basicDetailsComponent.basicDetailsForm.value)
    this.addressDetailsComponent.childData.emit(this.addressDetailsComponent.addressDetailsForm.value)
    this.allFormData = [{ ...this.userDataList, ...this.addressDataFormValue, ...this.qualificationFormValue }]
    this.basicDetailsComponent.parentValue = this.basicDetailsComponent.basicDetailsForm.value
    stepper.next()

  }
  submit() {

    this.userDetails = {userDetails:{
      basicDetails: this.userDataList,
      addressDetails: this.addressDataFormValue,
      qualificationDetails: this.qualificationFormValue
    }}
    console.log(this.userDetails);
  }

  previousTab(stepper: MatStepper) {
    stepper.previous()
  }
}

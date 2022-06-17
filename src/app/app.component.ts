import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BasicDetailsComponent } from './Component/basic-details/basic-details.component';
import { AddressDetailsComponent } from './Component/address-details/address-details.component';
import { QualificationDetailsComponent } from './Component/qualification-details/qualification-details.component';
import { PreviewComponent } from './Component/preview/preview.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild(BasicDetailsComponent) basicDetailsComponent:BasicDetailsComponent;
  // @ViewChild(AddressDetailsComponent) addressDetailsComponent:AddressDetailsComponent;
  // @ViewChild(QualificationDetailsComponent) QualificationDetailsComponent: QualificationDetailsComponent;
  // @ViewChild(PreviewComponent) previewComponent:PreviewComponent;
  // title = 'formMatStepper';
  // basicDetailsForm = this.formbuilder.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   email: ['', Validators.required],
  //   phoneNo: ['', Validators.required]
  // });
  // secondFormGroup = this.formbuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  // isLinear = false;
  constructor(private formbuilder:FormBuilder){}
  // get step1() {
  //   return this.basicDetailsComponent ? this.basicDetailsComponent.basicDetailsForm : null;
  // }

  // get step2() {
  //   return this.addressDetailsComponent ? this.addressDetailsComponent.addressDetailsForm: null;
  // }

  // get step3() {
  //   return this.QualificationDetailsComponent ? this.QualificationDetailsComponent.qualificationDetailsForm: null;
  // }
  // get step4() {
  //   return this.previewComponent ? this.previewComponent.previewForm: null;
  // }
}


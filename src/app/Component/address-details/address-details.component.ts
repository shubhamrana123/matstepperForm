import { Component, OnInit, Input, Output, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  @Output() childData: any = new EventEmitter()
  childMessage = "this is child data"
  basicAndAddressFormDetails: any
  addressDetailsForm: FormGroup;
  submitted = false;
  isLinear = false;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.childData.emit(this.childMessage);

    this.addressDetailsForm = this.formbuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required]
    })
  }


  submit() {
    this.submitted = true;


  }
  get f() {
    return this.addressDetailsForm.controls;
  }
}

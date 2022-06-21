import { Component, OnInit,Input, Output, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit ,AfterViewInit,OnChanges {
  @Input() parentDataFormValue:any
@Output() childData:any = new EventEmitter()
childMessage="this is child data"
basicAndAddressFormDetails:any
  addressDetailsForm: FormGroup;
  submitted = false;
  isLinear=false;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    // console.log(this.parentDataFormValue);
    this.childData.emit(this.childMessage);
    
    this.addressDetailsForm = this.formbuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required]
    })
  }
  ngAfterViewInit(): void {
      
      
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.parentDataFormValue);
    // console.log(this.addressDetailsForm.value);
    
  }
  submit() {
    this.submitted = true;
    // console.log(this.addressDetailsForm.value);

  }
  get f() {
    return this.addressDetailsForm.controls;
  }
}

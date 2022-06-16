import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray,FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
addressDetailsForm:FormGroup;
submitted=false;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
this.addressDetailsForm=this.formbuilder.group({
  address:['',Validators.required],
  city:['',Validators.required],
  state:['',Validators.required],
  pincode:['',Validators.required]
})
  }
submit(){
this.submitted=true;
console.log(this.addressDetailsForm.value);

}
get f(){
  return this.addressDetailsForm.controls;
}
}

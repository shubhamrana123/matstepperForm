import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  submitted=false;
previewForm:FormGroup = this.formbuilder.group({
  firstName: ['',Validators.required],
  lastName: [''],
  email: ['',Validators.required],
  phoneNo: ['',Validators.required],
  address:['',Validators.required],
  city:['',Validators.required],
  state:['',Validators.required],
  pincode:['',Validators.required],
  highestDegree:['',Validators.required],
year:['', Validators.required]
})
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }
submit(){
this.submitted=true;
}
get f(){
  return this.previewForm.controls;
}
}

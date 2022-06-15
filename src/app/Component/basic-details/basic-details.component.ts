import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray,FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {
basicDetailsForm:FormGroup = this.fb.group({
  firstName: ['',Validators.required],
  lastName: [''],
  email: ['',Validators.required],
  phoneNo: ['',Validators.required]
})
submitted=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  submit(){
    this.submitted=true;
    if(this.basicDetailsForm.valid){
      console.log(this.basicDetailsForm.value);
      
    }
    else
    {
      console.log("form is invalid");
      
    }
  }
  get f(){
    return this.basicDetailsForm.controls
  }

}

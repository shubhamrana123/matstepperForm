import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {
parentValue="basicDetailsForm.value";
childMessage="";
  basicDetailsForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', Validators.required],
    phoneNo: ['', Validators.required]
  })
  submitted = false;
  isLinear = false; 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  submit() {
    this.submitted = true;
    if (this.basicDetailsForm?.valid) {
      // console.log(this.basicDetailsForm?.value);
// this.router.navigate(['address'])
    }
    else {
      console.log("form is invalid");

    }
  }
  goForward(stepper:MatStepper){
    // alert('hi')
stepper.next()
  }
  get f() {
    return this.basicDetailsForm?.controls
  }

}

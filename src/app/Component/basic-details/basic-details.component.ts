import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {
  @Output() onDataChange: EventEmitter<any> = new EventEmitter();
  parentValue: any;
  basicInformationFormDetails: any;
  basicDetailsForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', Validators.required],
    phoneNo: ['', Validators.required]
  })
  submitted = false;
  isLinear = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  submit() {

    this.submitted = true;
    if (this.basicDetailsForm?.valid) { }
    else {
      console.log("form is invalid");

    }
  }

  get f() {
    return this.basicDetailsForm?.controls
  }

}

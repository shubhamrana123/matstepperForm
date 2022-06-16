import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-qualification-details',
  templateUrl: './qualification-details.component.html',
  styleUrls: ['./qualification-details.component.css']
})
export class QualificationDetailsComponent implements OnInit {
  qualificationDetailsForm: FormGroup = this.formbuilder.group({
    highestDegree: ['', Validators.required],
    year: ['', Validators.required]
  })
  submitted = false;
  isLinear=false;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  submit() {
    this.submitted = true;
  }
  get f() {
    return this.qualificationDetailsForm.controls
  }
}

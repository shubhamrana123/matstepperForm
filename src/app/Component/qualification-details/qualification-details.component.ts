import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qualification-details',
  templateUrl: './qualification-details.component.html',
  styleUrls: ['./qualification-details.component.css']
})
export class QualificationDetailsComponent implements OnInit {
  @Output() childData: any = new EventEmitter<any>()

  qualificationDetailsForm: FormGroup = this.formbuilder.group({
    highestDegree: ['', Validators.required],
    year: ['', Validators.required]
  })
  submitted = false;
  isLinear = false;
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

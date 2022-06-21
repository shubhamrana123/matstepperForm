import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qualification-details',
  templateUrl: './qualification-details.component.html',
  styleUrls: ['./qualification-details.component.css']
})
export class QualificationDetailsComponent implements OnInit,OnChanges {
  @Output() childData:any = new EventEmitter<any>()
  @Input() addressFormValue:any
  qualificationDetailsForm: FormGroup = this.formbuilder.group({
    highestDegree: ['', Validators.required],
    year: ['', Validators.required]
  })
  submitted = false;
  isLinear=false;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    console.log(this.addressFormValue);
    }
  submit() {
    this.submitted = true;
  }
  get f() {
    return this.qualificationDetailsForm.controls
  }
}

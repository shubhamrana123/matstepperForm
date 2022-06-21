import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-qualification-details',
  templateUrl: './qualification-details.component.html',
  styleUrls: ['./qualification-details.component.css']
})
export class QualificationDetailsComponent implements OnInit,OnChanges {
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
  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.addressFormValue);
      
  }
  submit() {
    this.submitted = true;
  }
  get f() {
    return this.qualificationDetailsForm.controls
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  firstFormGroup = this.formbuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formbuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}

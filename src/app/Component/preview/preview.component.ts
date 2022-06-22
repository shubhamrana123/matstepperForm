import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() parentData: any

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'address', 'phoneNo', 'city', 'state', 'pincode', 'highestDegree', 'year'];

  constructor() { }

  ngOnInit(): void { }


}

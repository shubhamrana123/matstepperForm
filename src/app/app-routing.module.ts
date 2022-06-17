import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailsComponent } from './Component/address-details/address-details.component';
import { BasicDetailsComponent } from './Component/basic-details/basic-details.component';
import { PreviewComponent } from './Component/preview/preview.component';
import { QualificationDetailsComponent } from './Component/qualification-details/qualification-details.component';
import { StepperoverviewComponent } from './Component/stepperoverview/stepperoverview.component';
import { UserDetailsComponent } from './Component/user-details/user-details.component';

const routes: Routes = [
  // {path:'',component:BasicDetailsComponent},
  {path:'basic',component:BasicDetailsComponent},
  {path:'address',component:AddressDetailsComponent},
  {path:'qualification',component:QualificationDetailsComponent},
  {path:'preview',component:PreviewComponent},
  {path:'user',component:UserDetailsComponent},
  {path:'stepper',component:StepperoverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicDetailsComponent } from './Component/basic-details/basic-details.component';

const routes: Routes = [
  {path:'basic',component:BasicDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

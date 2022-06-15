import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicDetailsComponent } from './Component/basic-details/basic-details.component';
import { AddressDetailsComponent } from './Component/address-details/address-details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { QualificationDetailsComponent } from './Component/qualification-details/qualification-details.component';
import { PreviewComponent } from './Component/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicDetailsComponent,
    AddressDetailsComponent,
 
    QualificationDetailsComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

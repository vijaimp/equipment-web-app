import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquipmentDetailsComponent } from './components/equipment-details/equipment-details.component';
import {HttpClientModule} from "@angular/common/http";
import {ErrorService} from "./services/error.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EquipmentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorService},
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

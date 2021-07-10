import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquipmentDetailsComponent } from './components/equipment-details/equipment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

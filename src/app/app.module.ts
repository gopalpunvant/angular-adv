import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Library Imports
import { CustomerModule } from 'customer';
import { ManufacturerModule } from 'manufacturer';
import { SaleModule } from 'sale';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ManufacturerModule,
    SaleModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

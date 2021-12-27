import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { DecComponent } from './dec/dec.component';
import { AmountComponent } from './amount/amount.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DecComponent,
    AmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

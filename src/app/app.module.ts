import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { ApiWeatherComponent } from './api-weather/api-weather.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipeDirectiveComponent } from './pipe-directive/pipe-directive.component';



@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ApiWeatherComponent,
    PagenotfoundComponent,
    PipeDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

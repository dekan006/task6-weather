import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { ApiWeatherComponent } from './api-weather/api-weather.component';
import { BehaviorComponent } from './behavior/behavior.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipeDirectiveComponent } from './pipe-directive/pipe-directive.component';
import { StyleDirective } from './style.directive';
import { ServisesComponent } from './servises/servises.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ApiWeatherComponent,
    PagenotfoundComponent,
    PipeDirectiveComponent,
    StyleDirective,
    ServisesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

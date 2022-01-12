import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarComponent } from './car/car.component';
import { ApiWeatherComponent } from './api-weather/api-weather.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//import { NgSelectComponent } from './ng-select/ng-select.component';
import { PipeDirectiveComponent } from './pipe-directive/pipe-directive.component';
import {ServisesComponent} from './servises/servises.component'
import { FormComponent } from './form/form.component';

const routes: Routes = [
 
  { path: 'car', component: CarComponent },
  { path: 'weather', component: ApiWeatherComponent },
  //{ path: 'ng-select', component: NgSelectComponent },
  { path: 'pipe-directive', component: PipeDirectiveComponent },
  { path: 'services', component: ServisesComponent },
  { path: 'form', component: FormComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
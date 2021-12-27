import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarComponent } from './car/car.component';
import { ApiWeatherComponent } from './api-weather/api-weather.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgSelectComponent } from './ng-select/ng-select.component';

const routes: Routes = [
  
  { path: 'car', component: CarComponent },
  { path: 'weather', component: ApiWeatherComponent },
  { path: 'ng-select', component: NgSelectComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
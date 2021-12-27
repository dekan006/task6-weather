import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarComponent } from './car/car.component';
import { ApiWeatherComponent } from './api-weather/api-weather.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  
  { path: 'car', component: CarComponent },
  { path: 'weather', component: ApiWeatherComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-api-weather',
  templateUrl: './api-weather.component.html',
  styleUrls: ['./api-weather.component.css']
})
export class ApiWeatherComponent implements OnInit {

  cities:string[];
  cityWeather:string;
  urlApiCityList = "http://api.airvisual.com/v2/cities?country=USA&key=2760c5ca-6442-4c6a-8874-b34fec353fce&state=California";
  urlApiCityWeather = "http://api.airvisual.com/v2/city?state=California&country=USA&key=2760c5ca-6442-4c6a-8874-b34fec353fce"
  
 
  constructor(private http: HttpClient) {
    this.cities = [];
    this.cityWeather ='';
  }

   
  showCity(){
    
    this.http.get<any>(this.urlApiCityList).subscribe(data => {  
      this.cities = data.data.map((element:any) => element.city);
        })
  }

  getWeatherCity(city:string) {
    
    this.http.get(`${this.urlApiCityWeather}&city= ${city}`).subscribe((response:any) => {  
      this.cityWeather = `Temp: ${response.data.current.weather.tp} ℃ - Humidity: ${response.data.current.weather.hu} % - ${city}`;
      })
      
      console.log(city);
    
    
  }

  ngOnInit(): void {
  }

}

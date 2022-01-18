import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GetWeatherService } from "../get-weather.service";

@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.css'],
  providers:[GetWeatherService]
})
export class NgSelectComponent implements OnInit {
   
    constructor(private http: HttpClient, public getWeatherService: GetWeatherService) {}

    selectedCountry: any;
    selectedState: any;
    selectedCity: any;
  
    countryList = [];
    stateList = [];
    cityList = [];
    weatherInfo = {
      city: '-',
      temp: '-',
      humidity: '-',
      windSpeed: '-',
      icon: ''
    };

    getStateList(country: string){
      this.stateList = [];
      this.selectedState = "";
      this.selectedCity = "";

    this.http.get(this.getWeatherService.urlState(this.selectedCountry)).subscribe((response: any) => {
      this.stateList = response.data.map((item: any) => item.state);
    });
  }

  getCityList(state: String) {
    this.cityList = [];
    this.selectedCity = "";
    
    this.http.get(this.getWeatherService.urlCity(this.selectedState, this.selectedCountry)).subscribe((response: any) => {
      console.log(response);
      this.cityList = response.data.map((item: any) => item.city);
    });
  }

  getWeatherInfo(city: String) {
    
    this.http.get(this.getWeatherService.urlWeather(this.selectedCity, this.selectedState, this.selectedCountry)).subscribe((response: any) => {
      console.log(response);
      this.weatherInfo.city= response.data.city;
      this.weatherInfo.temp= response.data.current.weather.tp;
      this.weatherInfo.humidity= response.data.current.weather.hu;
      this.weatherInfo.windSpeed= response.data.current.weather.ws;
      this.weatherInfo.icon= response.data.current.weather.ic;
    });

    ;
  }
    
  
  ngOnInit() {
      this.http.get<any>(this.getWeatherService.urlCountries()).subscribe(response => {  
      this.countryList = response.data.map((element:any) => element.country);
        })

  }
  
 


}

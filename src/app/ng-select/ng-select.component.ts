import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.css']
})
export class NgSelectComponent implements OnInit {
   
    constructor(private http: HttpClient) {
    }

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

    const domain = "https://api.airvisual.com";
    const endPointState = `/v2/states?country=${country}`;
    const APIKey = "&key=85b08754-d67d-492f-ab21-e4fc4718756b";
    const url = `${domain}${endPointState}${APIKey}`;
    this.http.get(url).subscribe((response: any) => {
      this.stateList = response.data.map((item: any) => item.state);
    });
  }

  getCityList(state: String) {
    this.cityList = [];
    this.selectedCity = "";

    const domain = "https://api.airvisual.com";
    const endPointCity = `/v2/cities?state=${state}&country=${this.selectedCountry}`;
    const APIKey = "&key=85b08754-d67d-492f-ab21-e4fc4718756b";
    const url = `${domain}${endPointCity}${APIKey}`;
    this.http.get(url).subscribe((response: any) => {
      console.log(response);
      this.cityList = response.data.map((item: any) => item.city);
    });
  }

  getWeatherInfo(city: String) {
    const domain = "https://api.airvisual.com";
    const endPointCity = `/v2/city?city=${this.selectedCity}&state=${this.selectedState}&country=${this.selectedCountry}`;
    const APIKey = "&key=85b08754-d67d-492f-ab21-e4fc4718756b";
    const url = `${domain}${endPointCity}${APIKey}`;
    this.http.get(url).subscribe((response: any) => {
      console.log(response);
      this.weatherInfo.city= response.data.city;
      this.weatherInfo.temp= response.data.current.weather.tp;
      this.weatherInfo.humidity= response.data.current.weather.hu;
      this.weatherInfo.windSpeed= response.data.current.weather.ws;
      this.weatherInfo.icon= response.data.current.weather.ic;
    });

    http://api.airvisual.com/v2/city&city=${city}?state=California&country=USA&key=2760c5ca-6442-4c6a-8874-b34fec353fce

    ;
  }
    
  
  ngOnInit(): void {
    const domain = "https://api.airvisual.com";
    const endPointCountry = "/v2/countries?";
    const APIKey = "key=85b08754-d67d-492f-ab21-e4fc4718756b";
    const url = `${domain}${endPointCountry}${APIKey}`;

    this.http.get<any>(url).subscribe(response => {  
      this.countryList = response.data.map((element:any) => element.country);
        })
  }
  
 


}

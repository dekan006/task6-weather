import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor() { }
     domain: string = "https://api.airvisual.com";
     endPointCountry: string = "/v2/countries?";
     endPointState: string  = '';
     endPointCity: string  = '';
     endPointWeather: string = '';
     APIKey: string = "&key=85b08754-d67d-492f-ab21-e4fc4718756b";
     url: string = "";

       
urlCountries (){
  return this.url = `${this.domain}${this.endPointCountry}${this.APIKey}`;
}

urlState (country: string) {
  const endPointState = `/v2/states?country=${country}`;
  return this.url = `${this.domain}${endPointState}${this.APIKey}`;
}

urlCity (state: string, country: string) {
  console.log(state, country)
  const endPointCity = `/v2/cities?state=${state}&country=${country}`;
  return this.url = `${this.domain}${endPointCity}${this.APIKey}`
  
}

urlWeather (city: string, state: string, country: string) {
  const endPointWeather = `/v2/city?city=${city}&state=${state}&country=${country}`;
  return this.url = `${this.domain}${endPointWeather}${this.APIKey}`;
}}

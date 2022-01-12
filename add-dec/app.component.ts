import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, filter } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-app';
  temperature = '';
  city = ''
  s1 = 0;
  s2 = 0;

  subject = new BehaviorSubject(111);

  constructor(private http: HttpClient) { 
    const dt = new Date();

    const s = formatDate(dt, ' yyyy-MM-dd MMMM EEEE HH:mm:ss.f a', 'en-US');
     console.log(s);

  }

  generateNumber() {
    const newValue = Math.floor(Math.random() * 10);

    console.log(newValue);
    this.subject.next(newValue);
  }

  ngOnInit() {

    /*setInterval(() => {
      const newValue = Math.floor(Math.random() * 10);
  
      console.log(newValue);
      this.subject.next(newValue);
    }, 1000)*/

    // unsubscribe!!
    this.subject.pipe(map(el => el + 100), filter(el => el % 2 === 0)).subscribe((value) => {
      this.s1 = value;
    });

    this.subject.pipe(map(el => el + 100)).subscribe((value) => {
      this.s2 = value * 2;
    });
  }

  onClick() {
    const newValue = Math.floor(Math.random() * 10);

    this.subject.next(newValue);

    /*const domain = 'http://api.airvisual.com';
    const endPoint = '/v2/nearest_city';
    const APIKey = '2760c5ca-6442-4c6a-8874-b34fec353fce';
    const APIParams = {
      lon: '27.572680',
      lat: '53.907364',
      key: APIKey,
    };

    const url = `${domain}${endPoint}`;


    this.http.get(url, { params: APIParams }).pipe(map((response: any) => response.data.current.weather)).subscribe((w: any) => {
      this.temperature = w.tp;
    });*/
  }

  showCountries() {


    //this.data = a.data.map(el => el.country).join(', ');
  }
}

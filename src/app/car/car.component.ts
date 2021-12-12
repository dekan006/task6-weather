import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  name:string = '';
  speed:number= 0;
  model:string= '';
  colors:Colors;
  options:string[];

  constructor() { 
    this.colors = {
      car: '',
      salon: '',
      wheels: ''
    }
    this.options = [];
  }

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver'
    }
    this.options = ["ABS", "Autopilot", "Autoparking"];
  }

  addOpt(option:any){
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option:string){
    for (let i=0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  carSelect(carName:string) {
      if (carName == 'bmw'){
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.colors = {
        car: 'Blue',
        salon: 'White',
        wheels: 'Silver'
      }
      this.options = ["ABS", "Autopilot", "Autoparking"];
      } else if (carName == 'audi'){
        this.name = 'Audi';
        this.speed = 235;
        this.model = 'RS8';
        this.colors = {
        car: 'White',
        salon: 'Black',
        wheels: 'Silver'
        }
        this.options = ["ABS", "Autopilot", "Autoparking", "Control speed"];
      } else if (carName == 'mercedes'){
        this.name = 'Mercedes';
        this.speed = 260;
        this.model = 'W260';
        this.colors = {
        car: 'Black',
        salon: 'Black',
        wheels: 'Black'
        }
        this.options = ["R20", "LED light", "Autoparking"];
      }
  }
  

}

interface Colors {
  car:string,
  salon:string,
  wheels:string
}

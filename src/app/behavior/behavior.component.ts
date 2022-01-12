import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css']
})
export class BehaviorComponent {

  result: any;
  timerID: any;

  constructor() { }

  startGenerate() {
    let subject = new BehaviorSubject(0);
    this.timerID = setInterval(random, 1000, subject);

    function random(subject: any) {
      let number = Math.round(Math.random()*1000);
      subject.next(number);
    }

    subject.subscribe((value) => {
      if (value >= 300 && value <= 700) {
        this.result = value;
      }
    });
  }

  getStop() {
    clearInterval(this.timerID);
  }

}




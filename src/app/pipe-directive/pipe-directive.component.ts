import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pipe-directive',
  templateUrl: './pipe-directive.component.html',
  styleUrls: ['./pipe-directive.component.css']
})
export class PipeDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date: Date = new Date()

  pi:number =  Math.PI
}

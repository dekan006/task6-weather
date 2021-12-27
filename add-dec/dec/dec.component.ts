import { Component, OnInit } from '@angular/core';
import { AmountService } from '../amount.service';

@Component({
  selector: 'app-dec',
  templateUrl: './dec.component.html',
  styleUrls: ['./dec.component.scss']
})
export class DecComponent implements OnInit {

  constructor(public amountService: AmountService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.amountService.dec();
  }
}

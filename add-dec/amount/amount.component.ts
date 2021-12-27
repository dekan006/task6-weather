import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AmountService } from '../amount.service';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent implements OnInit, OnDestroy {
  amount: number = 0;
  s: Subscription = new Subscription();

  constructor(public amountService: AmountService) { }

  ngOnInit(): void {
      this.s = this.amountService.amount.pipe(take(4), map(value => value*100))
      .subscribe( (value) => {
        this.amount = value;
      },
      (err) => {

      }, () => {
        this.amount = 1000;
      });
  }

  ngOnDestroy(): void {
      //this.s.unsubscribe();
  }

  onClick() {
    
  }
}

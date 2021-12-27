import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmountService {
  amount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  add() {
    this.amount.next(this.amount.value + 1);
  }

  dec() {
    this.amount.next(this.amount.value - 1);
  }
}

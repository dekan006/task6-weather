import { Component, OnInit } from '@angular/core';
import { AmountService } from '../amount.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(public amountService: AmountService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.amountService.add();
  }

}

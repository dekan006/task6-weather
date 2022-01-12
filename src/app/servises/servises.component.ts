import { Component } from '@angular/core';
import { AppCounterService } from '../app-counter.service'
import { DecretService} from '../decret.service'

@Component({
  selector: 'app-servises',
  templateUrl: './servises.component.html',
  styleUrls: ['./servises.component.css']
})
export class ServisesComponent{

  constructor(public decretService: DecretService) {}

  

}

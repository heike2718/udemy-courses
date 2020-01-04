import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';
import { CounterChangedData } from './services/counter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  numberActiveMoved = 0;
  numberInactiveMoved = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counterService.counterChanged.subscribe((status: CounterChangedData) => {
      this.numberActiveMoved = status.fromActiveToInactive;
      this.numberInactiveMoved = status.fromInactiveToActive;
    });
  }

}

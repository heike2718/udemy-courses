import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { timer, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() countEvent: EventEmitter<{ counter: number }> = new EventEmitter();
  private count = 0;

  // I decided to use rxjs.timer instead of setInterval() since I had the issue error TS2503: Cannot find namespace 'NodeJS'
  private everySecond$: Observable<number> = timer(0, 1000);

  private timerSubscription: Subscription;


  constructor() { }

  ngOnInit() {
  }

  startGame() {

    this.timerSubscription = this.everySecond$.subscribe(_val => {
      this.doCount();
    });
  }

  stopGame() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private doCount() {
    this.count++;
    console.log('count=' + this.count);
    this.countEvent.emit({ counter: this.count });
  }
}

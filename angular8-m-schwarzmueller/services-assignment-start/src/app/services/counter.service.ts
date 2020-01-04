import { Injectable, EventEmitter } from '@angular/core';
import { CounterChangedData } from './counter.model';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  numberActive2Inactive = 0;
  numberInactive2Active = 0;

  counterChanged = new EventEmitter<CounterChangedData>();

  constructor() { }

  moveActiveToInactive() {
    this.numberActive2Inactive++;
    this.notifyChanged();
  }

  moveInactiveToActive() {
    this.numberInactive2Active++;
    this.notifyChanged();
  }

  private notifyChanged() {
    this.counterChanged.emit({ fromActiveToInactive: this.numberActive2Inactive, fromInactiveToActive: this.numberInactive2Active });
  }
}

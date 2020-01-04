import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onCountEventEmitted(event: { counter: number }) {

    if (event.counter % 2 === 0) {
      this.evenNumbers.push(event.counter);
    } else {
      this.oddNumbers.push(event.counter);
    }
  }

}

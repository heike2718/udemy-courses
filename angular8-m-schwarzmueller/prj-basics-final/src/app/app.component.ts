import { Component } from '@angular/core';
import { SHOPPING_LIST } from '../app/shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showShoppingList = false;
  value = 5;

  onComponentSelected(event: {component: string}) {

    if (event.component === SHOPPING_LIST) {
      this.showShoppingList = true;
    } else {
      this.showShoppingList = false;
    }
  }
}

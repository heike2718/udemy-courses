import { Component, EventEmitter, Output} from '@angular/core';
import { RECIPES, SHOPPING_LIST } from '../shared/constants';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() selectComponentEvent: EventEmitter<{component: string}> = new EventEmitter();


  recipesSelected() {
    this.selectComponentEvent.emit({component: RECIPES});
  }

  shoppingListSelected() {
    this.selectComponentEvent.emit({component: SHOPPING_LIST});
  }

}

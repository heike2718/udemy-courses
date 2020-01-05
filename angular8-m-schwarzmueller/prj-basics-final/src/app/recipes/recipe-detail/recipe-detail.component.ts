import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  recipe: Recipe;
  id: number;

  private routeParamsSubscription: Subscription;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService, private route: ActivatedRoute) { }

  ngOnInit() {

    // const index = +this.route.snapshot.params['index'];
    // this.recipe = this.recipeService.getRecipeByIndex(index);

    this.routeParamsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeByIndex(this.id);
      }
    );

  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }

  sendToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}

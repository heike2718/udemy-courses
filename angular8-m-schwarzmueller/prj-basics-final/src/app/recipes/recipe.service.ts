import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),

    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'http://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor() { }

  getRecipes() {

    // returns a copy of the recipes.
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number): Recipe {

    // if (index < 0 || index >= this.recipes.length) {
    //   return null;
    // }
    // return this.recipes[index];
    // Das reicht aus, weil es nicht sowas wie eine ArrayOutOfBoundsException gibt :)
    return this.recipes[index];
  }
}

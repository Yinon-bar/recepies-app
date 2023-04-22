import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() public recipeWasSelected = new EventEmitter<Recipe>();
  public recipes: Recipe[] = [
    new Recipe(
      'Chocolate cake',
      "The Best Chocolate Cake Recipe – A one bowl chocolate cake recipe that is quick, easy, and delicious! Updated with gluten-free, dairy-free, and egg-free options The best chocolate cake recipe. Ever? There are plenty of claims for the best chocolate cake recipe. I get that. But with one bite of this decadent, moist chocolate cake with chocolate frosting, every single person around the table commented that this was the best chocolate cake they'd ever tasted.",
      'https://stephaniessweets.com/wp-content/uploads/2020/05/IMG_0243-1024x952.jpg'
    ),
    new Recipe(
      'Black Forest Cake',
      'Inspired by traditional black forest cake, these dessert recipes combine chocolate, cherries and cream that are sure to satisfy your sweet tooth.',
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps33424_BHD153762B07_09_7b-4.jpg?fit=700,1024'
    ),
  ];

  public onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  public recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'bla bla bla',
      'https://stephaniessweets.com/wp-content/uploads/2020/05/IMG_0243-1024x952.jpg'
    ),
  ];
}

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
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstephaniessweets.com%2Fmoist-triple-chocolate-cake%2F&psig=AOvVaw2uk0oh1wDoZJ7GJ8pSRnnz&ust=1682107987981000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPivpNuiuf4CFQAAAAAdAAAAABAE'
    ),
  ];
}

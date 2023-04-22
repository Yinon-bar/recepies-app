import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() public recipe: Recipe;
  @Output() public recipeSelected = new EventEmitter<void>();

  public onSelected() {
    this.recipeSelected.emit();
  }
}

import { Ingredient } from './ingredient.model';
import { Macro } from './macro.model';

export interface Meal {
  mealName: string;
  meal: Ingredient[];
  macro: Macro;
  id?: number;
}

import { Macro } from './macro.model';

export interface Ingredient {
  name?: string;
  amount?: number;
  macro: Macro;
  id?: number;
}

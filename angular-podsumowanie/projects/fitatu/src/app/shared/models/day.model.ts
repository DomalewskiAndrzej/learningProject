import { Macro } from './macro.model';
import { Meal } from './meal.model';

export interface Day {
  dayName: string;
  day: Meal[];
  date: string;
  dayInfo: {
    macro: Macro;
    userKcal: number;
  };
  id?: number;
}

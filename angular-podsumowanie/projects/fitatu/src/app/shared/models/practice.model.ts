import { Exercise } from './exercise.model';

export interface Practice {
  exercise: Exercise;
  series: number;
  rpe: number;
  rest: number;
}

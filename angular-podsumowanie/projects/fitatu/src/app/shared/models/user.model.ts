import { Challenge } from './challenge.model';
import { WeightChart } from './weightChart.model';

export interface User {
  nick?: string;
  email?: string;
  dailyKcal?: number;
  src?: string;
  dayDate?: string;
  dayNumber?: number;
  firstLogIn?: boolean;
  weightChart?: WeightChart;
  challenges?: Challenge;
  id?: number;
}

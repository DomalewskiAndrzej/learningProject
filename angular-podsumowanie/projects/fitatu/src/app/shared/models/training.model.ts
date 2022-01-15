import { Practice } from './practice.model';

export interface Training {
  title: string;
  exercises: Practice[];
  id?: number;
}

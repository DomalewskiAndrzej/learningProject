import { Answer } from './answer.model';
import { Question } from './question.model';

export interface Game {
  name: string;
  questions: Question[];
  answers: Answer[];
}

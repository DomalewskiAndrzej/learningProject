import { Component, Input } from '@angular/core';
import { Challenge } from 'projects/fitatu/src/app/shared/models/challenge.model';

@Component({
  selector: 'app-challenges-task-presenter',
  templateUrl: './challenges-task-presenter.component.html',
  styleUrls: ['./challenges-task-presenter.component.scss'],
})
export class ChallengesTaskPresenterComponent {
  @Input() challenges: string;
  @Input() set userChallenges(user: Challenge) {
    this._userChallenges = user;
    this.checkChallenge();
  }
  get userChallenges(): Challenge {
    return this._userChallenges;
  }
  _userChallenges: Challenge;
  task: number;
  title: string;
  message: string;

  checkChallenge(): void {
    if (this.challenges) {
      switch (this.challenges) {
        case 'diet':
          this.title = 'Prowadź dietę';
          this.task = this.userChallenges?.diet;
          break;
        case 'weight':
          this.title = 'Waż się';
          this.task = this.userChallenges?.weight;
          break;
        case 'recipes':
          this.title = 'Dodawaj przepisy';
          this.task = this.userChallenges?.recipes;
          break;
        case 'training':
          this.title = 'Twórz plany treningowe';
          this.task = this.userChallenges?.trainings;
          break;
        default:
          this.task = 0;
          break;
      }
      this.message = '';
    } else {
      this.message = 'Wybierz jakieś wyzwanie!';
    }
  }
}

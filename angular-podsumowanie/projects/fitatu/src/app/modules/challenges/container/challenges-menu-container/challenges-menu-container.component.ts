import { Component } from '@angular/core';
import { UserFacade } from '../../../user/store/user.facade';

@Component({
  selector: 'app-challenges-menu-container',
  templateUrl: './challenges-menu-container.component.html',
  styleUrls: ['./challenges-menu-container.component.scss'],
})
export class ChallengesMenuContainerComponent {
  constructor(private userFacade: UserFacade) {}

  taskReview(task: string): void {
    this.userFacade.challengesReview(task);
  }
}

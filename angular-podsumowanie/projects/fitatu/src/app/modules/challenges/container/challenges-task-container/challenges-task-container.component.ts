import { Component, OnInit } from '@angular/core';
import { Challenge } from 'projects/fitatu/src/app/shared/models/challenge.model';
import { User } from 'projects/fitatu/src/app/shared/models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserFacade } from '../../../user/store/user.facade';

@Component({
  selector: 'app-challenges-task-container',
  templateUrl: './challenges-task-container.component.html',
  styleUrls: ['./challenges-task-container.component.scss'],
})
export class ChallengesTaskContainerComponent implements OnInit {
  userChallenges$: Observable<Challenge> = this.userFacade.user$.pipe(
    map((user: User) => {
      return user?.challenges;
    })
  );
  challenges$: Observable<string> = this.userFacade.selectedChallenges$;

  constructor(private userFacade: UserFacade) {}

  ngOnInit(): void {
    this.userFacade.loadUser();
  }
}

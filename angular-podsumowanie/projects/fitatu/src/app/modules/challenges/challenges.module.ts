import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengesTaskContainerComponent } from './container/challenges-task-container/challenges-task-container.component';
import { ChallengesTaskPresenterComponent } from './presenter/challenges-task-presenter/challenges-task-presenter.component';
import { ChallengesMenuContainerComponent } from './container/challenges-menu-container/challenges-menu-container.component';
import { ChallengesMenuPresenterComponent } from './presenter/challenges-menu-presenter/challenges-menu-presenter.component';

@NgModule({
  declarations: [
    ChallengesTaskContainerComponent,
    ChallengesTaskPresenterComponent,
    ChallengesMenuContainerComponent,
    ChallengesMenuPresenterComponent,
  ],
  imports: [ChallengesRoutingModule, SharedModule],
})
export class ChallengesModule {}

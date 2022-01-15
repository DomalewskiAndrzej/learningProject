import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesMenuContainerComponent } from './container/challenges-menu-container/challenges-menu-container.component';
import { ChallengesTaskContainerComponent } from './container/challenges-task-container/challenges-task-container.component';

const routes: Routes = [
  {
    path: '',
    component: ChallengesMenuContainerComponent,
  },
  {
    path: 'task',
    component: ChallengesTaskContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengesRoutingModule {}

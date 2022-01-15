import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMenuContainerComponent } from './container/user-menu-container/user-menu-container.component';

const routes: Routes = [
  {
    path: '',
    component: UserMenuContainerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

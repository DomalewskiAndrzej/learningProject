import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthMainPageGuard } from '../auth/auth.mainpage.guard';
import { AuthMealGuard } from '../auth/auth.meal.guard';
import { MainpageMealContainerComponent } from './container/mainpage-meal-container/mainpage-meal-container.component';
import { MainpageMenuContainerComponent } from './container/mainpage-menu-container/mainpage-menu-container.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthMainPageGuard],
    component: MainpageMenuContainerComponent,
  },
  {
    path: 'meal',
    canActivate: [AuthMealGuard],
    component: MainpageMealContainerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthMainPageGuard, AuthMealGuard],
})
export class MainpageRoutingModule {}

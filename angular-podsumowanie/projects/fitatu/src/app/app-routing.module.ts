import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './core/layouts/layouts.component';
import { AuthGuard } from './modules/auth/auth.guard';
import { AuthLogInGuard } from './modules/auth/auth.login.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivate: [AuthLogInGuard],
        loadChildren: () =>
          import('./modules/mainpage/mainpage.module').then(
            (x) => x.MainpageModule
          ),
      },
      {
        path: 'filter',
        canActivate: [AuthLogInGuard],
        loadChildren: () =>
          import('./modules/ingredient/ingredient.module').then(
            (x) => x.IngredientModule
          ),
      },
      {
        path: 'meals',
        canActivate: [AuthLogInGuard],
        loadChildren: () =>
          import('./modules/meals/meals.module').then((x) => x.MealsModule),
      },
      {
        path: 'database',
        canActivate: [AuthLogInGuard],
        loadChildren: () =>
          import('./modules/database/database.module').then(
            (x) => x.DatabaseModule
          ),
      },
      {
        path: 'history',
        canActivate: [AuthLogInGuard],
        loadChildren: () =>
          import('./modules/history/history.module').then(
            (x) => x.HistoryModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/user/user.module').then((x) => x.UserModule),
      },
      {
        path: 'chart',
        canActivate: [AuthLogInGuard],
        loadChildren: () =>
          import('./modules/chart/chart.module').then((x) => x.ChartModule),
      },
      {
        path: 'recipes',
        canActivate: [AuthLogInGuard],
        loadChildren: () =>
          import('./modules/recipes/recipes.module').then(
            (x) => x.RecipesModule
          ),
      },
      {
        path: 'training',
        canActivate: [AuthLogInGuard],
        loadChildren: () =>
          import('./modules/training/training.module').then(
            (x) => x.TrainingModule
          ),
      },
      {
        path: 'challenges',
        canActivate: [AuthLogInGuard],
        loadChildren: () =>
          import('./modules/challenges/challenges.module').then(
            (x) => x.ChallengesModule
          ),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((x) => x.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthLogInGuard],
})
export class AppRoutingModule {}

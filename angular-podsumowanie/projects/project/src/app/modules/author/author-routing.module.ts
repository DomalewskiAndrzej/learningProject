import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthorViewContainerComponent } from './container/author-view-container/author-view-container.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorViewContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorRoutingModule {}

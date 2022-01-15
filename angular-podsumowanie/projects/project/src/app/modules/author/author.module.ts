import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorViewContainerComponent } from './container/author-view-container/author-view-container.component';
import { AuthorViewPresenterComponent } from './presenter/author-view-presenter/author-view-presenter.component';

@NgModule({
  declarations: [AuthorViewContainerComponent, AuthorViewPresenterComponent],
  imports: [AuthorRoutingModule, SharedModule],
})
export class AuthorModule {}

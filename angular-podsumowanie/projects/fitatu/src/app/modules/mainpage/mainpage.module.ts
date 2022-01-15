import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MainpageMealContainerComponent } from './container/mainpage-meal-container/mainpage-meal-container.component';
import { MainpageMenuContainerComponent } from './container/mainpage-menu-container/mainpage-menu-container.component';
import { MainpageRoutingModule } from './mainpage-routing';
import { MainpageMealPresenterComponent } from './presenter/mainpage-meal-presenter/mainpage-meal-presenter.component';
import { MainpageMenuPresenterComponent } from './presenter/mainpage-menu-presenter/mainpage-menu-presenter.component';

@NgModule({
  declarations: [
    MainpageMenuContainerComponent,
    MainpageMenuPresenterComponent,
    MainpageMealContainerComponent,
    MainpageMealPresenterComponent,
  ],
  imports: [MainpageRoutingModule, SharedModule],
})
export class MainpageModule {}

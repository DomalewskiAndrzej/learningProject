import { UserMenuPresenterComponent } from './presenter/user-menu-presenter/user-menu-presenter.component';
import { UserMenuContainerComponent } from './container/user-menu-container/user-menu-container.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserCalculatorPresenterComponent } from './presenter/user-calculator-presenter/user-calculator-presenter.component';

@NgModule({
  declarations: [
    UserMenuContainerComponent,
    UserMenuPresenterComponent,
    UserCalculatorPresenterComponent,
  ],
  imports: [UserRoutingModule, SharedModule],
})
export class UserModule {}

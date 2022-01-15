import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GamesRoutingModule } from './games-routing.module';
import { GamesHomeContainerComponent } from './container/games-home-container/games-home-container.component';
import { GamesHomePresenterComponent } from './presenter/games-home-presenter/games-home-presenter.component';

@NgModule({
  declarations: [GamesHomeContainerComponent, GamesHomePresenterComponent],
  imports: [GamesRoutingModule, SharedModule],
})
export class GamesModule {}

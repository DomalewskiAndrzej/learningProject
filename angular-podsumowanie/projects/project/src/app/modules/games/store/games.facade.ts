import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import * as fromApp from '../../../store/app.interface';
import * as gamesActions from './games-state/games.actions';
import * as fromGames from './games-state/games.reducer';
import { Game } from '../../../shared/models/game.model';
import { Update } from '@ngrx/entity';

@Injectable({ providedIn: 'root' })
export class GamesFacade {
  games$: Observable<Game[]> = this.store.pipe(select(fromGames.selectAll));

  constructor(private store: Store<fromApp.AppState>) {}

  loadGames(): void {
    this.store.dispatch(gamesActions.loadGames());
  }

  saveGames(games: Game[]): void {
    this.store.dispatch(gamesActions.saveGames({ games }));
  }

  deleteGame(id: string): void {
    this.store.dispatch(gamesActions.deleteGame({ id }));
  }

  updateGame(game: Update<Game>): void {
    this.store.dispatch(gamesActions.updateGame({ game }));
  }

  addGame(game: Game): void {
    this.store.dispatch(gamesActions.addGame({ game }));
  }

  upsertGame(game: Game): void {
    this.store.dispatch(gamesActions.upsertGame({ game }));
  }

  deleteGames(ids: string[]): void {
    this.store.dispatch(gamesActions.deleteGames({ ids }));
  }

  updateGames(games: Update<Game[]>): void {
    this.store.dispatch(gamesActions.updateGames({ games }));
  }

  addGames(games: Game[]): void {
    this.store.dispatch(gamesActions.addGames({ games }));
  }

  upsertGames(games: Game[]): void {
    this.store.dispatch(gamesActions.upsertGames({ games }));
  }
}

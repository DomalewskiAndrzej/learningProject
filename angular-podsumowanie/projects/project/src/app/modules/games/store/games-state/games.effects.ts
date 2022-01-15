import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { GamesService } from '../../services/games.service';
import { Game } from '../../../shared/models/game.model';

import * as gamesActions from './games.actions';

@Injectable()
export class GamesEffects {
  constructor(private actions$: Actions, private gamesService: GamesService) {}

  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gamesActions.loadGames),
      exhaustMap(() =>
        this.gamesService.loadGames().pipe(
          map((games: Game[]) => gamesActions.loadGamesSuccess({ games })),
          catchError((error) =>
            of(gamesActions.loadGamesFail({ error: error.error }))
          )
        )
      )
    )
  );

  saveGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gamesActions.saveGames),
      switchMap((action) =>
        this.gamesService.saveGames(action.games).pipe(
          map(() => gamesActions.saveGamesSuccess({ games: action.games })),
          catchError((error) =>
            of(gamesActions.saveGamesFail({ error: error.error }))
          )
        )
      )
    )
  );
}

import { createAction, props } from '@ngrx/store';
import { Game } from 'projects/fitatu/src/app/shared/models/game.model';
import { Update } from 'projects/fitatu/src/app/shared/models/updateEntity.model';

export const loadGames = createAction('[Games] Load Games');

export const loadGamesSuccess = createAction(
  '[Games] Load Games Success',
  props<{ games: Game[] }>()
);

export const loadGamesFail = createAction(
  '[Games] Load Games Fail',
  props<{ error: string }>()
);

export const saveGames = createAction(
  '[Games] Save Games',
  props<{ games: Game[] }>()
);

export const saveGamesSuccess = createAction(
  '[Games] Save Games Success',
  props<{ games: Game[] }>()
);

export const saveGamesFail = createAction(
  '[Games] Save Games Fail',
  props<{ error: string }>()
);

export const addGame = createAction(
  '[Games] Add IGame',
  props<{ game: Game }>()
);

export const deleteGame = createAction(
  '[Games] Delete IGame',
  props<{ id: string }>()
);

export const updateGame = createAction(
  '[Games] Update IGame',
  props<{ game: Update<Game> }>()
);

export const upsertGame = createAction(
  '[Games] Add Game',
  props<{ game: Game }>()
);

export const addGames = createAction(
  '[Games] Add IGames',
  props<{ games: Game[] }>()
);

export const deleteGames = createAction(
  '[Games] Delete IGames',
  props<{ ids: string }>()
);

export const updateGames = createAction(
  '[Games] Update IGames',
  props<{ games: Update<Game[]> }>()
);

export const upsertGames = createAction(
  '[Games] Add Games',
  props<{ games: Game[] }>()
);

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Game } from 'projects/fitatu/src/app/shared/models/game.model';

import * as gamessActions from './games.actions';

export interface gamessState extends EntityState<Game> {
  error: string;
}

export const gamessAdapter: EntityAdapter<Game> = createEntityAdapter<Game>();

export const gamessInitialState = gamessAdapter.getInitialState({
  error: null,
});

export const getGamessState = createFeatureSelector<gamessState>('gamess');

export const gamessReducer = createReducer(
  gamessInitialState,

  on(
    gamessActions.loadGamesSuccess,
    gamessActions.saveGamesSuccess,
    (state, action) => {
      return gamessAdapter.upsertMany(action.games, state);
    }
  ),

  on(
    gamessActions.loadGamesFail,
    gamessActions.saveGamesFail,
    (state, action) => {
      return { ...state, error: action.error };
    }
  ),

  on(gamessActions.addGame, (state, action) => {
    return gamessAdapter.addOne(action.game, state);
  }),

  on(gamessActions.deleteGame, (state, action) => {
    return gamessAdapter.removeOne(action.id, state);
  }),

  on(gamessActions.updateGame, (state, action) => {
    return gamessAdapter.updateOne(action.game, state);
  }),

  on(gamessActions.upsertGame, (state, action) => {
    return gamessAdapter.upsertOne(action.game, state);
  }),

  on(gamessActions.addGames, (state, action) => {
    return gamessAdapter.addMany(action.games, state);
  }),

  on(gamessActions.deleteGames, (state, action) => {
    return gamessAdapter.removeMany(action.ids, state);
  }),

  on(gamessActions.updateGames, (state, action) => {
    return gamessAdapter.updateMany(action.games, state);
  }),

  on(gamessActions.upsertGames, (state, action) => {
    return gamessAdapter.upsertMany(action.games, state);
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  gamessAdapter.getSelectors(getGamessState);

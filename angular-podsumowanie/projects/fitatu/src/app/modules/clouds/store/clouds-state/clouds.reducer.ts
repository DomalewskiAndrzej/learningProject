import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Cloud } from './../../../../shared/models/cloud.model';

import * as cloudsActions from './clouds.actions';

export interface cloudsState extends EntityState<Cloud> {
  error: string;
}

export const cloudsAdapter: EntityAdapter<Cloud> = createEntityAdapter<Cloud>();

export const cloudsInitialState = cloudsAdapter.getInitialState({
  error: null,
});

export const getCloudsState = createFeatureSelector<cloudsState>('clouds');

export const cloudsReducer = createReducer(
  cloudsInitialState,

  on(cloudsActions.loadCloudsSuccess, (state, action) => {
    return cloudsAdapter.addMany(action.clouds, state);
  }),

  on(cloudsActions.loadCloudsFail, (state, action) => {
    return { ...state, error: action.error };
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  cloudsAdapter.getSelectors(getCloudsState);

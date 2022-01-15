import { createAction, props } from '@ngrx/store';
import { Cloud } from 'projects/fitatu/src/app/shared/models/cloud.model';

export const loadClouds = createAction('[Clouds] Load Clouds');

export const loadCloudsSuccess = createAction(
  '[Clouds] Load Clouds Success',
  props<{ clouds: Cloud[] }>()
);

export const loadCloudsFail = createAction(
  '[Clouds] Load Clouds Fail',
  props<{ error: string }>()
);

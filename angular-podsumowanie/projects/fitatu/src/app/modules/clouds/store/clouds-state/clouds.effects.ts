import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Cloud } from 'projects/fitatu/src/app/shared/models/cloud.model';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { CloudsService } from '../../services/clouds.service';

import * as cloudsActions from './clouds.actions';

@Injectable()
export class CloudsEffects {
  constructor(
    private actions$: Actions,
    private cloudsService: CloudsService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cloudsActions.loadClouds),
      exhaustMap(() =>
        this.cloudsService.loadClouds().pipe(
          map((clouds: Cloud[]) =>
            cloudsActions.loadCloudsSuccess({
              clouds: clouds,
            })
          ),
          catchError((error) =>
            of(cloudsActions.loadCloudsFail({ error: error.error }))
          )
        )
      )
    )
  );
}

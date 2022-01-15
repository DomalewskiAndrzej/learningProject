import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Cloud } from '../../../shared/models/cloud.model';

import * as fromApp from '../../../store/app.interface';
import * as fromClouds from './clouds-state/clouds.reducer';
import * as cloudsActions from './clouds-state/clouds.actions';

@Injectable({ providedIn: 'root' })
export class CloudsFacade {
  clouds$: Observable<Cloud[]> = this.store.pipe(select(fromClouds.selectAll));

  constructor(private store: Store<fromApp.AppState>) {}

  loadClouds(): void {
    this.store.dispatch(cloudsActions.loadClouds());
  }
}

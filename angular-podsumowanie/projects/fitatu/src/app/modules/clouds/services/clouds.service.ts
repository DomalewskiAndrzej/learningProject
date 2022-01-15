import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';
import { Auth } from '../../../shared/models/auth.model';
import { Cloud } from '../../../shared/models/cloud.model';
import { AuthFacade } from '../../auth/store/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class CloudsService {
  private readonly endpoints = {
    clouds:
      'https://ng-complete-course-by-me-default-rtdb.firebaseio.com/clouds.json',
  };
  constructor(private http: HttpClient, private authFacade: AuthFacade) {}

  loadClouds(): Observable<Cloud[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http
          .get<Cloud[]>(this.endpoints.clouds, {
            params: new HttpParams().set('auth', auth?.idToken),
          })
          .pipe(
            map((cloud) => {
              return cloud.map((cloud, index) => {
                return { ...cloud, id: index++ };
              });
            })
          );
      })
    );
  }
}

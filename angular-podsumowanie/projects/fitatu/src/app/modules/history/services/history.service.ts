import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';
import { Auth } from '../../../shared/models/auth.model';
import { Day } from '../../../shared/models/day.model';
import { AuthFacade } from '../../auth/store/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private readonly endpoints = {
    link: 'https://ng-complete-course-by-me-default-rtdb.firebaseio.com/',
    days: '/days.json',
  };

  constructor(private http: HttpClient, private authFacade: AuthFacade) {}

  saveDays(days: Day[]): Observable<Day> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http.put<Day>(
          this.endpoints.link + auth.localId + this.endpoints.days,
          days,
          {
            params: new HttpParams().set('auth', auth?.idToken),
          }
        );
      })
    );
  }

  loadDays(): Observable<Day[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http
          .get<Day[]>(
            this.endpoints.link + auth.localId + this.endpoints.days,
            {
              params: new HttpParams().set('auth', auth?.idToken),
            }
          )
          .pipe(
            map((days: Day[]) => {
              if (days) {
                return days.map((day, index) => {
                  return { ...day, id: index++ };
                });
              } else {
                return (days = []);
              }
            })
          );
      })
    );
  }

  clearDays(): Observable<void> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http.delete<void>(
          this.endpoints.link + auth.localId + this.endpoints.days,
          {
            params: new HttpParams().set('auth', auth?.idToken),
          }
        );
      })
    );
  }
}

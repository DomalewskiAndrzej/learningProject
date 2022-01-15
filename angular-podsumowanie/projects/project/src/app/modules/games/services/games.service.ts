import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';
import { Auth } from '../../../shared/models/auth.model';
import { Game } from '../../../shared/models/game.model';
import { AuthFacade } from '../../auth/store/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private readonly endpoints = {
    link: '%<=link%>',
    game: '/game.json',
  };
  constructor(private http: HttpClient, private authFacade: AuthFacade) {}

  loadGames(): Observable<Game[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http
          .get<Game[]>(this.endpoints.link + this.endpoints.game, {
            params: new HttpParams().set('auth', auth?.idToken),
          })
          .pipe(
            map((games: Game[]) => {
              return games.map((game, index) => {
                return { ...game, id: index++ };
              });
            })
          );
      })
    );
  }

  saveGames(games: Game[]): Observable<Game[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http.put<Game[]>(
          this.endpoints.link + this.endpoints.game,
          games,
          {
            params: new HttpParams().set('auth', auth?.idToken),
          }
        );
      })
    );
  }
}

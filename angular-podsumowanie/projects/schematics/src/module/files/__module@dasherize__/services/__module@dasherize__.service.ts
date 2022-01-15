import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';
import { Auth } from '../../../shared/models/auth.model';
import { <%=classify(model)%> } from '../../../shared/models/<%=model%>.model';
import { AuthFacade } from '../../auth/store/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class <%=classify(module)%>Service {
  private readonly endpoints = {
    link: '<%=link%>',
    <%=model%>: '/<%=model%>.json',
  };
  constructor(private http: HttpClient, private authFacade: AuthFacade) {}

  load<%=classify(model)%>s(): Observable<<%=classify(model)%>[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http
          .get<<%=classify(model)%>[]>(this.endpoints.link + this.endpoints.<%=model%>, {
            params: new HttpParams().set('auth', auth?.idToken),
          })
          .pipe(
            map((<%=model%>s: <%=classify(model)%>[]) => {
              return <%=model%>s.map((<%=model%>, index) => {
                return { ...<%=model%>, id: index++ };
              });
            })
          );
      })
    );
  }

  save<%=classify(model)%>s(<%=model%>s: <%=classify(model)%>[]): Observable<<%=classify(model)%>[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http.put<<%=classify(model)%>[]>(
          this.endpoints.link + this.endpoints.<%=model%>,
          <%=model%>s,
          {
            params: new HttpParams().set('auth', auth?.idToken),
          }
        );
      })
    );
  }
}

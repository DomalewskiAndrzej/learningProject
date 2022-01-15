import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { <%=classify(module)%>Service } from '../../services/<%=module%>.service';
import { <%=classify(model)%> } from '../../../../shared/models/<%=model%>.model';

import * as <%=module%>Actions from './<%=module%>.actions';

@Injectable()
export class <%=classify(module)%>Effects {
  constructor(private actions$: Actions, private <%=module%>Service: <%=classify(module)%>Service) {}

  load<%=classify(model)%>s$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%=module%>Actions.load<%=classify(model)%>s),
      exhaustMap(() =>
        this.<%=module%>Service.load<%=classify(model)%>s().pipe(
          map((<%=model%>s: <%=classify(model)%>[]) =>
            <%=module%>Actions.load<%=classify(model)%>sSuccess({ <%=model%>s })
          ),
          catchError((error) =>
            of(<%=module%>Actions.load<%=classify(model)%>sFail({ error: error.error }))
          )
        )
      )
    )
  );

  save<%=classify(model)%>s$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%=module%>Actions.save<%=classify(model)%>s),
      switchMap((action) =>
        this.<%=module%>Service.save<%=classify(model)%>s(action.<%=model%>s).pipe(
          map(() => <%=module%>Actions.save<%=classify(model)%>sSuccess({<%=model%>s: action.<%=model%>s})),
          catchError((error) =>
            of(<%=module%>Actions.save<%=classify(model)%>sFail({ error: error.error }))
          )
        )
      )
    )
  );
}

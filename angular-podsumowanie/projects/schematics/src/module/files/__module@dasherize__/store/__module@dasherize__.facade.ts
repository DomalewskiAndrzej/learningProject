import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import * as fromApp from '../../../store/app.interface';
import * as <%=module%>Actions from './<%=module%>-state/<%=module%>.actions';
import * as from<%=classify(module)%> from './<%=module%>-state/<%=module%>.reducer';
import { <%=classify(model)%> } from '../../../shared/models/<%=model%>.model';
import { Update } from '@ngrx/entity';

@Injectable({ providedIn: 'root' })
export class <%=classify(module)%>Facade {
  <%=model%>s$: Observable<<%=classify(model)%>[]> = this.store.pipe(select(from<%=classify(module)%>.selectAll));

  constructor(private store: Store<fromApp.AppState>) {}

  load<%=classify(model)%>s(): void {
    this.store.dispatch(<%=module%>Actions.load<%=classify(model)%>s());
  }

  save<%=classify(model)%>s(<%=model%>s: <%=classify(model)%>[]): void {
    this.store.dispatch(<%=module%>Actions.save<%=classify(model)%>s({ <%=model%>s }));
  }
    <% if(oneActions){ %>
  delete<%=classify(model)%>(id: string): void {
    this.store.dispatch(<%=module%>Actions.delete<%=classify(model)%>({ id }));
  }

  update<%=classify(model)%>(<%=model%>: Update<<%=classify(model)%>>): void {
    this.store.dispatch(
      <%=module%>Actions.update<%=classify(model)%>({ <%=model%> })
    );
  }

  add<%=classify(model)%>(<%=model%>: <%=classify(model)%>): void {
    this.store.dispatch(<%=module%>Actions.add<%=classify(model)%>({ <%=model%> }));
  }

  upsert<%=classify(model)%>(<%=model%>: <%=classify(model)%>): void {
    this.store.dispatch(<%=module%>Actions.upsert<%=classify(model)%>({ <%=model%> }));
  }
  <% } %>
  <% if(manyActions){ %>
  delete<%=classify(model)%>s(ids: string[]): void {
    this.store.dispatch(<%=module%>Actions.delete<%=classify(model)%>s({ ids }));
  }

  update<%=classify(model)%>s(<%=model%>s: Update<<%=classify(model)%>[]>): void {
    this.store.dispatch(
      <%=module%>Actions.update<%=classify(model)%>s({ <%=model%>s })
    );
  }

  add<%=classify(model)%>s(<%=model%>s: <%=classify(model)%>[]): void {
    this.store.dispatch(<%=module%>Actions.add<%=classify(model)%>s({ <%=model%>s }));
  }

  upsert<%=classify(model)%>s(<%=model%>s: <%=classify(model)%>[]): void {
    this.store.dispatch(<%=module%>Actions.upsert<%=classify(model)%>s({ <%=model%>s }));
  }
  <% } %>
}

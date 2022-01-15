import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { <%=classify(model)%> } from '../../../../shared/models/<%=model%>.model';

import * as <%=module%>Actions from './<%=module%>.actions';

export interface <%=module%>State extends EntityState<<%=classify(model)%>> {
  error: string;
}

export const <%=module%>Adapter: EntityAdapter<<%=classify(model)%>> = createEntityAdapter<<%=classify(model)%>>();

export const <%=module%>InitialState = <%=module%>Adapter.getInitialState({
  error: null,
});

export const get<%=classify(module)%>sState = createFeatureSelector<<%=module%>State>('<%=module%>');

export const <%=module%>Reducer = createReducer(
  <%=module%>InitialState,

  on(<%=module%>Actions.load<%=classify(model)%>sSuccess, <%=module%>sActions.save<%=classify(model)%>sSuccess, (state, action) => {
    return <%=module%>sAdapter.upsertMany(action.<%=model%>s, state);
  }),

  on(<%=module%>Actions.load<%=classify(model)%>sFail, <%=module%>sActions.save<%=classify(model)%>sFail, (state, action) => {
    return { ...state, error: action.error };
  }),
  <% if(oneActions){ %>
  on(<%=module%>Actions.add<%=classify(model)%>, (state, action) => {
    return <%=module%>Adapter.addOne(action.<%=model%>, state);
  }),

  on(<%=module%>Actions.delete<%=classify(model)%>, (state, action) => {
    return <%=module%>Adapter.removeOne(action.id, state);
  }),

  on(<%=module%>Actions.update<%=classify(model)%>, (state, action) => {
    return <%=module%>Adapter.updateOne(action.<%=model%>, state);
  }),

  on(<%=module%>Actions.upsert<%=classify(model)%>, (state, action) => {
    return <%=module%>Adapter.upsertOne(action.<%=model%>, state);
  }),
  <% } %>
  <% if(manyActions){ %>
    on(<%=module%>Actions.add<%=classify(model)%>s, (state, action) => {
    return <%=module%>Adapter.addMany(action.<%=model%>s, state);
  }),

  on(<%=module%>Actions.delete<%=classify(model)%>s, (state, action) => {
    return <%=module%>Adapter.removeMany(action.ids, state);
  }),

  on(<%=module%>Actions.update<%=classify(model)%>s, (state, action) => {
    return <%=module%>Adapter.updateMany(action.<%=model%>s, state);
  }),

  on(<%=module%>Actions.upsert<%=classify(model)%>s, (state, action) => {
    return <%=module%>Adapter.upsertMany(action.<%=model%>s, state);
  }),
  <% } %>
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  <%=module%>Adapter.getSelectors(get<%=classify(module)%>State);

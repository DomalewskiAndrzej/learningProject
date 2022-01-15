import { createAction, props } from '@ngrx/store';
import { <%=classify(model)%> } from '../../../../shared/models/<%=model%>.model';
<% if(manyActions || oneActions){ %>
import { Update } from '@ngrx/entity';
<% } %>
export const load<%=classify(model)%>s = createAction('[<%=classify(module)%>] Load <%=classify(model)%>s');

export const load<%=classify(model)%>sSuccess = createAction(
  '[<%=classify(module)%>] Load <%=classify(model)%>s Success',
  props<{ <%=model%>s: <%=classify(model)%>[] }>()
);

export const load<%=classify(model)%>sFail = createAction(
  '[<%=classify(module)%>] Load <%=classify(model)%>s Fail',
  props<{ error: string }>()
);

export const save<%=classify(model)%>s = createAction(
  '[<%=classify(module)%>] Save <%=classify(model)%>s',
  props<{ <%=model%>s: <%=classify(model)%>[] }>()
);

export const save<%=classify(model)%>sSuccess = createAction(
  '[<%=classify(module)%>] Save <%=classify(model)%>s Success',
  props<{ <%=model%>s: <%=classify(model)%>[] }>()
);

export const save<%=classify(model)%>sFail = createAction(
  '[<%=classify(module)%>] Save <%=classify(model)%>s Fail',
  props<{ error: string }>()
);
<% if(oneActions){ %>
export const add<%=classify(model)%> = createAction(
  '[<%=classify(module)%>] Add I<%=classify(model)%>',
  props<{ <%=model%>: <%=classify(model)%> }>()
);

export const delete<%=classify(model)%> = createAction(
  '[<%=classify(module)%>] Delete I<%=classify(model)%>',
  props<{ id: string }>()
);

export const update<%=classify(model)%> = createAction(
  '[<%=classify(module)%>] Update I<%=classify(model)%>',
  props<{ <%=model%>: Update<<%=classify(model)%>> }>()
);

export const upsert<%=classify(model)%> = createAction(
  '[<%=classify(module)%>] Add <%=classify(model)%>',
  props<{ <%=model%>: <%=classify(model)%> }>()
);
<% } %>
<% if(manyActions){ %>
export const add<%=classify(model)%>s = createAction(
  '[<%=classify(module)%>] Add I<%=classify(model)%>s',
  props<{ <%=model%>s: <%=classify(model)%>[] }>()
);

export const delete<%=classify(model)%>s = createAction(
  '[<%=classify(module)%>] Delete I<%=classify(model)%>s',
  props<{ ids: string }>()
);

export const update<%=classify(model)%>s = createAction(
  '[<%=classify(module)%>] Update I<%=classify(model)%>s',
  props<{ <%=model%>s: Update<<%=classify(model)%>[]> }>()
);

export const upsert<%=classify(model)%>s = createAction(
  '[<%=classify(module)%>] Add <%=classify(model)%>s',
  props<{ <%=model%>s: <%=classify(model)%>[] }>()
);
<% } %>

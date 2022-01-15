import { createSelector } from '@ngrx/store';
import * as from<%=classify(module)%>s from './<%=module%>-state/<%=module%>.reducer';
import { get<%=classify(module)%>sState } from './<%=module%>-state/<%=module%>.reducer';

// export const variable = createSelector(
//   get<%=classify(module)%>sState,
//   (state: from<%=classify(module)%>s.<%=module%>sState) => state.variable
// );

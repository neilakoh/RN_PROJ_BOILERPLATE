import { Observable } from 'rxjs';
import * as types from '../actions/actionTypes';
import * as homeActions from '../actions/index';

import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

// export function SampleActions(action$) {
//   return action$.pipe(
//     ofType(types.HOME_ACTION_TYPE),
//     switchMap(() => {
//       of({ type: 'SECOND' }, { type: 'THIRD' })
//     })
//   )
// }

export const SampleActions = action$ => action$.pipe(
    ofType(types.HOME_ACTION_TYPE),
    switchMap(() =>
      of({ type: 'SECOND' }, { type: 'THIRD' })
    )
  );

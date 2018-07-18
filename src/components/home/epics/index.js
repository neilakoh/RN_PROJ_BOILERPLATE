import { Observable } from 'rxjs';
import * as types from '../actions/actionTypes';
import * as homeActions from '../actions/index';

export function SampleActions(action$) {
  return action$
    .ofType(types.HOME_ACTION_TYPE)
    .switchMap(() => {
      return Observable.empty();
    })
}

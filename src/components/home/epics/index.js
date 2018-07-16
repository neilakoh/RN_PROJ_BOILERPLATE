import { Observable } from 'rxjs';
import * as types from '../actions/actionTypes';
import * as sampleActions from '../actions/index';

export function SampleActions(action$) {
  return action$
    .ofType(types.HOME_ACTION_TYPE)
    .mergeMap(({params}) => {
      console.log(params);
      return Observable.empty();
    })
}

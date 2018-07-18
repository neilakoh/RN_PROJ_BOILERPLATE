import { combineEpics } from 'redux-observable';
import * as homeEpic from './components/home/epics/index';

// const combineEpics = (...epics) => (...args) =>
//   merge(
//     ...epics.map(epic => epic(...args))
//   );

// export const rootEpic = (action$) => {
//   const epic = combineEpics(homeEpic);
//   console.log(epic(from(action$)));
//   // console.log(epic(from(action$)));
//   // action$ and state$ are converted from Observables to Most.js streams
//   // const output = epic(
//   //   from(action$),
//   //   from(state$)
//   // );
//   // convert Most.js stream back to Observable
//   return ConnectableObservable.from(output);
// };

// const epic1 = action$ => action$.pipe(
//     ofType('FIRST'),
//     switchMap(() =>
//       of({ type: 'SECOND' }, { type: 'THIRD' })
//     )
//   );

  export const rootEpic = combineEpics(
    ...Object.values(homeEpic),
  );

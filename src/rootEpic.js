import { combineEpics } from 'redux-observable';

import * as homeEpics from './components/home/epics/index';

export const rootEpic = combineEpics(
  ...Object.values(homeEpics)
);

import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';

import RootReducer from './src/rootReducers';
import RootRouter from './src/router/index';
import { rootEpic } from './src/rootEpic';

const epicMiddleware = createEpicMiddleware();
const store = createStore(RootReducer, applyMiddleware(thunk, epicMiddleware));
epicMiddleware.run(rootEpic);

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    )
  }
}

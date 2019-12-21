/* eslint "import/no-extraneous-dependencies": ["error", {"optionalDependencies": false} ] */
import 'core-js/stable';
import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '@store/reducers';

import App from '@containers/AppContainer';
import * as serviceWorker from '@/serviceWorker';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();

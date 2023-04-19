import React from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';

import App from './containers/App.jsx';
import userReducer from './reducers/user';
import bookReducer from './reducers/book';

const rootReducer = combineReducers({
    book: bookReducer,
    user: userReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default () => (
  <Provider store={store} >
    <App />
  </Provider>
)



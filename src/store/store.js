import { applyMiddleware, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['JWT'],
};

const historyReducer = connectRouter(history)(rootReducer);
const persistedReducer = persistReducer(persistConfig, historyReducer);

const middleware = [routerMiddleware(history)];

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

export {
  history,
  store,
  persistor
};

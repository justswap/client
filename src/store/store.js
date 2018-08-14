import { applyMiddleware, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';
import authenticationSagas from '../sagas/authentication'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['JWT']
};

const history = createBrowserHistory();

const historyReducer = connectRouter(history)(rootReducer);
const persistedReducer = persistReducer(persistConfig, historyReducer);

const myRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middleware = [myRouterMiddleware, sagaMiddleware];

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
const persistor = persistStore(store);

sagaMiddleware.run(authenticationSagas);

export { history, store, persistor };

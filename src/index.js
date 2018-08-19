import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { addLocaleData, IntlProvider } from 'react-intl';
import { ApolloProvider } from 'react-apollo';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';

import { locale } from 'utils/constants';
import client from 'data/graphql/client';
import { history, persistor, store } from 'store/store';
import IntlGlobalProvider from 'components/IntlGlobalProvider';
import flattenLocaleMessages from './messages';

import 'semantic-ui-css/semantic.min.css'; // eslint-disable-line import/first
import 'normalize.css/normalize.css'; // eslint-disable-line import/first
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

addLocaleData([...en, ...pl]);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={client}>
        <IntlProvider locale={locale} messages={flattenLocaleMessages}>
          <IntlGlobalProvider>
            <ConnectedRouter history={history}>
              <Switch>
                <Route path="/" component={App} />
                <Redirect to="/" />
              </Switch>
            </ConnectedRouter>
          </IntlGlobalProvider>
        </IntlProvider>
      </ApolloProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

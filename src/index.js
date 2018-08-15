import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';

import { history, store, persistor } from './store/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import messages from './messages';
import { flattenMessages } from './utils/i18n';


addLocaleData([...en, ...pl]);

const locale = (navigator.languages && navigator.languages[0]) || navigator.language || 'en-US';
const localeMessages = messages[locale] ? messages[locale] : messages['en-US'];

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IntlProvider locale={locale} messages={flattenMessages(localeMessages)}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={App} />
            <Redirect to="/" />
          </Switch>
        </ConnectedRouter>
      </IntlProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

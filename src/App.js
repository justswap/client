import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Content from './components/content/content';
import Authentication from './components/authentication/authentication';

import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/login" component={Authentication} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;

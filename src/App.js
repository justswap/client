import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Content from './components/content/content';
import Authentication from './components/authentication/authentication';

import './App.css';
import { refreshToken } from './store/actions';

class App extends Component {
  componentDidMount() {
    this.props.refreshToken();
  }

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

App.propTypes = {
  refreshToken: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  refreshToken: () => dispatch(refreshToken())
});

export default connect(
  null,
  mapDispatchToProps
)(App);

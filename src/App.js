import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Content from 'components/Content/Content';
import Login from 'components/Login/Login';
import Registration from 'components/Registration/Registration';

import { refreshToken } from 'store/authentication/actions';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.refreshToken();
  }

  render() {
    return (
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
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

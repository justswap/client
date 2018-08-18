import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ component: Component, isAuthenticated, isLoading, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!isLoading) {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        );
      }
      // TODO: Authenticating spinner
      return null;
    }}
  />
);

ProtectedRoute.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.authentication.JWT,
  isLoading: state.authentication.loading
});

export default connect(mapStateToProps)(ProtectedRoute);

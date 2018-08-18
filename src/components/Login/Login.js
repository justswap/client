import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import { login, logout } from 'store/authentication/actions';

import './Login.css';

class Login extends Component {
  state = {
    email: 'admin@example.com',
    password: 'admin'
  };

  login = () => {
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  logout = () => {
    this.props.logout();
  };

  handleLoginChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePassChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div id="login">
        email: <input type="text" value={this.state.email} onChange={this.handleLoginChange} />
        password: <input type="password" onChange={this.handlePassChange} />
        <button onClick={this.login}>
          <FormattedMessage id="authentication.login" /> : {this.props.intl.locale}
        </button>
        <button onClick={this.logout}>LOGOUT</button>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(injectIntl(Login));

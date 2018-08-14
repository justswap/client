import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setJWT } from '../../store/actions';
import { login } from '../../data/authentication';


class Authentication extends Component {
  state = {
    login: 'admin@example.com',
    password: 'admin'
  };

  login = async () => {
    const token = await login(this.state.login, this.state.password);
    this.props.setJWT(token);
  };

  logout = () => {
    this.props.setJWT('');
  };

  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  handlePassChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="authentication">
        email: <input type="text" value={this.state.login} onChange={this.handleLoginChange} />
        password: <input type="password" onChange={this.handlePassChange} />
        <button onClick={this.login}>LOGIN</button>
        <button onClick={this.logout}>LOGOUT</button>
      </div>
    );
  }
}

Authentication.propTypes = {
  setJWT: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setJWT: JWT => dispatch(setJWT(JWT))
});

export default connect(
  null,
  mapDispatchToProps
)(Authentication);

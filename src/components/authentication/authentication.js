import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setJWT } from '../../store/actions';
import { login } from '../../data/authentication';

const mapDispatchToProps = dispatch => {
  return {
    setJWT: JWT => dispatch(setJWT(JWT))
  };
};

class _Authentication extends Component {
  state = {
    login: 'admin@example.com',
    password: 'admin'
  };

  login = async () => {
    const token = await login(this.state.login, this.state.password);
    this.props.setJWT(token);
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
      </div>
    );
  }
}

const Authentication = connect(
  null,
  mapDispatchToProps
)(_Authentication);

export default Authentication;

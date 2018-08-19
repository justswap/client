import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = ({ isAuthenticated }) => <p>{isAuthenticated ? 'Logged in' : 'Logged out'}</p>;

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.authentication.JWT
});

export default connect(mapStateToProps)(Header);

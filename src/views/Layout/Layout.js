import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import './Layout.css';

const Layout = props => (
  <div className="main-container">
    <header className="header">
      <Header />
    </header>
    <main className="content">{props.children}</main>
    <footer className="footer">
      <Footer />
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;

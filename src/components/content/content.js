import React, { Component } from 'react';
import Authentication from '../authentication/authentication';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Authentication />
      </div>
    );
  }
}

export default Content;

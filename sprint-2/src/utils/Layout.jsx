import React, { Component } from 'react';
import Masthead from '../components/molecules/Masthead/Masthead';

class Layout extends Component {
  render() {
    return (
      <div id="wrap">
        <Masthead />
        <main id="main">
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default Layout;


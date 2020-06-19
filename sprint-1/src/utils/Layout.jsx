import React, { Component } from 'react';
import Masthead from '../components/molecules/Masthead';
import Home from '../components/scenes/Home';

class Layout extends Component {
  render() {
    return (
      <div id="wrap">
        <Masthead />
        <main id="main">
          <Home />
        </main>
      </div>
    )
  }
}

export default Layout;


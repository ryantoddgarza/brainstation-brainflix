import React from 'react';
import Masthead from '../components/molecules/Masthead/Masthead';

const Layout = (props) => {
  return (
    <div id="wrap">
      <Masthead />
      <main id="main">
        { props.children }
      </main>
    </div>
  )
}

export default Layout;


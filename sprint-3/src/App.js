import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './utils/Layout';

import Home from './components/scenes/Home/Home';
import Upload from './components/scenes/Upload/Upload';

const App = (props) => {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/upload" component={ Upload } />
          <Route path="/:videoId" component={ Home }/>
        </Switch>
      </Layout>
    )
}

export default App;


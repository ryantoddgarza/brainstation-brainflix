import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom';
import axios from 'axios';
import Layout from './utils/Layout';

import Home from './components/scenes/Home/Home';
import Upload from './components/scenes/Upload/Upload';

class App extends Component {
  state = {}

  getAPI() {
    const URL = 'https://project-2-api.herokuapp.com';
    const API_KEY = '01099e44-3de9-4a9f-b99a-c0ec4dc92b65';

    axios.get(`${URL}/videos?api_key=${API_KEY}`)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getAPI();
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/upload" component={ Upload } />
        </Switch>
      </Layout>
    )
  }
}

export default App;


import React, { Component } from 'react';
import axios from 'axios';

import Player from '../../molecules/Player/Player.jsx';
import Primary from './molecules/Primary';
import Secondary from './molecules/Secondary';

class Home extends Component {
  state = {
    active: null,
    videos: null
  }

  getAPI() {
    const URL = 'https://project-2-api.herokuapp.com';
    const API_KEY = '01099e44-3de9-4a9f-b99a-c0ec4dc92b65';
    const VIDEO_ID = '/' + this.props.match.params.videoId;

    axios.get(`${URL}/videos?api_key=${API_KEY}`)
      .then(res => this.setState({videos: res.data}))
      .catch(err => console.error(err));

    axios.get(`${URL}/videos${VIDEO_ID}?api_key=${API_KEY}`)
      .then(res => this.setState({active: res.data}))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getAPI();
  }

  componentDidUpdate(prevState, prevProps) {
    if (!!this.state.active && prevState.match.params.videoId !== this.state.active.id) {
      this.getAPI();
    }
  }

  render() {
    return (
      <div className="home">
        <Player data={ this.state } />
        <main className="container home__main-content">
          <div className="home__primary">
            <Primary data={ this.state } />
          </div>
          <aside className="home__secondary">
            <h5 className="home__secondary-title">Next Video</h5>
            <Secondary data={ this.state } />
          </aside>
        </main>
      </div>
    )
  }
}

export default Home;


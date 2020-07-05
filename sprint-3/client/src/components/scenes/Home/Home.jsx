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
    const URL = 'http://localhost:8080';
    let VIDEO_ID = this.props.match.params.videoId;

    if (VIDEO_ID === undefined) {
      VIDEO_ID = '1af0jruup5gu';
    }

    axios.get(`${URL}/videos`)
      .then((res) => this.setState({ videos: res.data }))
      .catch(console.eror);

    axios.get(`${URL}/videos/${VIDEO_ID}`)
      .then((res) => this.setState({ active: res.data }))
      .catch(console.error);
  }

  componentDidMount() {
    this.getAPI();
  }

  componentDidUpdate(prevProps, prevState) {
    const previousVideo = prevProps.match.params.videoId;
    const currentVideo = this.props.match.params.videoId;

    if (!!this.state.active && previousVideo !== currentVideo) {
      this.getAPI();
    }
  }

  render() {
    if (!this.state.active || !this.state.videos) {
      return null;
    }

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


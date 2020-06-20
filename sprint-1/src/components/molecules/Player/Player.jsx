import React, { Component } from 'react';
import Video from './molecules/Video';
import Controls from './molecules/Controls';

import video1 from '../../../assets/video/BrainStation Sample Video.mp4';

class Player extends Component {
  state = {
    source: video1
  }

  render() {
    return (
      <div className="player__area">
        <div className="player__container">
          <Video src={ this.state.source } />
          <Controls />
      </div>
      </div>
    )
  }
}
export default Player;


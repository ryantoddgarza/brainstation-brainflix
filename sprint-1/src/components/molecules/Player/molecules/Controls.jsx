import React, { Component } from 'react';

import IconPlay from '../atoms/IconPlay';
import IconFullscreen from '../atoms/IconFullscreen';
import IconVolume from '../atoms/IconVolume';

class Controls extends Component {

  updatePlayerVideo = () => {
    console.error('not functional yet')
  }

  render() {
    return (
      <div className="player__controls-wrapper">
        <div className="player__controls">
          <button className="player__controls--left"
                  onClick={this.updatePlayerVideo}>
            <IconPlay />
          </button>
          <div className="player__progress">
            <div className="player__progress--scrubber"></div>
            <div className="player__controls--time-display">
            progress
            </div>
          </div>
          <div className="player__controls--right">
            <IconFullscreen />
            <IconVolume />
          </div>
        </div>
      </div>
    )
  }
}

export default Controls;


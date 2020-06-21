import React, { Component } from 'react';

import IconPlay from '../atoms/IconPlay';
import IconPause from '../atoms/IconPause';
import IconFullscreen from '../atoms/IconFullscreen';
import IconVolume from '../atoms/IconVolume';

class Controls extends Component {
  state = {
    controls: {
      status: false
    },
    metadata: {
      length: '0:20',
      pos: '0:00'
    }
  }

  updatePlayerVideo = () => {
    console.error('Easy there cowboy. This feature is not functional yet.')
  }

  render() {
    let statusIcon = undefined;
    if (this.state.controls.status === false) {
      statusIcon = <IconPlay />
    } else {
      statusIcon = <IconPause />
    }

    return (
      <div className="player__controls-wrapper">
        <div className="player__controls">
          <button className="player__controls--left"
                  onClick={this.updatePlayerVideo}>
            {statusIcon}
          </button>
          <div className="player__progress">
            <div className="player__progress--scrubber"></div>
            <div className="player__controls--time-display">
              {this.state.metadata.pos} / {this.state.metadata.length}
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


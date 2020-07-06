import React from 'react';

import IconPlay from '../atoms/IconPlay';
import IconPause from '../atoms/IconPause';
import IconFullscreen from '../atoms/IconFullscreen';
import IconVolume from '../atoms/IconVolume';

const dummyData = {
    controls: {
      status: false
    }
}

const Controls = (props) => {
  const data = props.data;

  let statusIcon;
  if (dummyData.controls.status === false) {
    statusIcon = <IconPlay />
  } else {
    statusIcon = <IconPause />
  }

  const updatePlayerVideo = () => {
    console.error('Easy there cowboy. This feature is not functional yet.')
  }

  return (
    <div className="player__controls-wrapper">
      <div className="player__controls">
        <button className="player__controls--left"
                onClick={updatePlayerVideo}>{statusIcon}
        </button>
        <div className="player__progress">
          <div className="player__progress--scrubber"></div>
          <div className="player__controls--time-display">
            0:00 / {data.active.duration}
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

export default Controls;


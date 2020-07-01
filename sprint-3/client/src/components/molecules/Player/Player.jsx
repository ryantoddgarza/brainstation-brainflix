import React from 'react';
import Video from './molecules/Video';
import Controls from './molecules/Controls';

import video1 from '../../../assets/video/BrainStation Sample Video.mp4';

const Player = (props) => {
  const data = props.data;

  if (!data.active) {
    return null;
  }

  return (
    <div className="player__area-wrapper">
      <div className="player__area">
        <div className="player__container">
          <Video src={video1}
                 poster={data.active.image}
          />
          <Controls />
        </div>
      </div>
    </div>
  )
}
export default Player;


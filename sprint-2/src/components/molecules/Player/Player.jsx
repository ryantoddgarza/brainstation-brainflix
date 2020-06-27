import React from 'react';
import Video from './molecules/Video';
import Controls from './molecules/Controls';

import video1 from '../../../assets/video/BrainStation Sample Video.mp4';

const Player = () => {
    return (
      <div className="player__area-wrapper">
        <div className="player__area">
          <div className="player__container">
            <Video src={video1}
                   poster={process.env.PUBLIC_URL + `/images/video-list-0.jpg`}/>
            <Controls />
          </div>
        </div>
      </div>
    )
}
export default Player;


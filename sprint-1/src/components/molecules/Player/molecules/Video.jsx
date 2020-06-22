import React from 'react';

const Video = (props) => {
  return (
    <div className="player__video-wrapper">
      <video src={ props.src } poster={ props.poster }></video>
    </div>
  )
}

export default Video;

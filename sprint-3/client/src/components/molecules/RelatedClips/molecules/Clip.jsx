import React from 'react';

const Clip = (props) => {
  return (
    <div className="related__wrapper">
      <div className="related__card">
        <div className="related__card-image-wrapper">
        <img src={ props.image } alt="" />
        </div>
        <div className="related__card-info">
        <div className="related__card-title">{ props.title }</div>
        <div className="related__card-channel">{ props.channel }</div>
        </div>
      </div>
    </div>
  );
};

export default Clip;


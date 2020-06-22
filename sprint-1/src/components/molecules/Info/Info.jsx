import React from 'react';
import JSON from './infoData';
import IconViews from './atoms/IconViews';
import IconLikes from './atoms/IconLikes';

const Info = () => {
  return (
    <div className="info__wrapper">
      <div className="info__title">{ JSON.metadata[0].title }</div>
      <div className="info__meta">
        <div className="info__meta-start">
          <div className="info__channel">By { JSON.metadata[0].channel }</div>
          <div className="info__timestamp">{ JSON.metadata[0].timestamp }</div>
        </div>
        <div className="info__meta-end">
          <div className="info__views_">
            <IconViews />
            { JSON.metadata[0].views }
          </div>
          <div className="info__likes">
            <IconLikes />
            { JSON.metadata[0].likes }
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="info__description">{ JSON.metadata[0].description }</div>
    </div>
  )
}

export default Info;

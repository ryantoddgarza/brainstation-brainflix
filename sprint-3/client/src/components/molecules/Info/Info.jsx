import React from 'react';
import IconViews from './atoms/IconViews';
import IconLikes from './atoms/IconLikes';

const Info = (props) => {
  const data = props.data;

  if (!data.active) {
    return null;
  }

  return (
    <div className="info__wrapper">
      <div className="info__title">{ data.active.title }</div>
      <div className="info__meta">
        <div className="info__meta-start">
          <div className="info__channel">By { data.active.channel }</div>
          <div className="info__timestamp">
            { new Date(data.active.timestamp).toLocaleDateString('en-US') }
          </div>
        </div>
        <div className="info__meta-end">
          <div className="info__views_">
            <IconViews />
            { data.active.views }
          </div>
          <div className="info__likes">
            <IconLikes />
            { data.active.likes }
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="info__description">{ data.active.description }</div>
    </div>
  )
}

export default Info;


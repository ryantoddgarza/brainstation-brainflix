import React from 'react';
import UserAvatar from '../../../atoms/UserAvatar';

const Comment = (props) => {
  return (
    <div className="comment">
      <aside className="comment__aside">
        <div className="comment__user-avatar-wrapper">
          <UserAvatar src="" />
        </div>
      </aside>
      <div className="comment__body">
        <div className="comment__header">
          <div className="comment__channel">{ props.channel }</div>
          <div className="comment__timestamp">{ props.timestamp }</div>
        </div>
        <p className="comment__content">{ props.content }</p>
        <div className="divider"></div>
      </div>
    </div>
  )
}

export default Comment;

